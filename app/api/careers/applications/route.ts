import { NextRequest, NextResponse } from "next/server";
import { Binary } from "mongodb";
import { getMongoDb } from "@/lib/mongodb";
import { getCareerJob } from "@/lib/careers/jobs";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function textField(formData: FormData, key: string): string {
  return String(formData.get(key) || "").trim();
}

function isAllowedResume(file: File): boolean {
  const name = file.name.toLowerCase();
  return (
    file.size > 0 &&
    file.size <= MAX_RESUME_BYTES &&
    (ALLOWED_RESUME_TYPES.has(file.type) ||
      ALLOWED_EXTENSIONS.some((ext) => name.endsWith(ext)))
  );
}

async function sendResendEmail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!key || !from) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error("Resend careers email error:", response.status, errText);
  }
}

async function sendResendEmailSafely(
  payload: Parameters<typeof sendResendEmail>[0],
  label: string
) {
  try {
    await sendResendEmail(payload);
  } catch (error) {
    console.error(`Resend careers ${label} exception:`, error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const honeypot = textField(formData, "_honeypot");
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const fullName = textField(formData, "fullName");
    const email = textField(formData, "email").toLowerCase();
    const phone = textField(formData, "phone");
    const jobSlug = textField(formData, "jobSlug");
    const experience = textField(formData, "experience");
    const portfolioUrl = textField(formData, "portfolioUrl");
    const coverNote = textField(formData, "coverNote");
    const resume = formData.get("resume");
    const job = getCareerJob(jobSlug);

    if (!fullName || fullName.length < 2) {
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (!phone || phone.length < 8) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }
    if (!job) {
      return NextResponse.json({ error: "Please choose a valid role." }, { status: 400 });
    }
    if (!experience) {
      return NextResponse.json({ error: "Please add your experience." }, { status: 400 });
    }
    if (portfolioUrl) {
      try {
        new URL(portfolioUrl);
      } catch {
        return NextResponse.json(
          { error: "Please enter a valid portfolio or LinkedIn URL." },
          { status: 400 }
        );
      }
    }
    if (!coverNote || coverNote.length < 20) {
      return NextResponse.json(
        { error: "Please add a short note of at least 20 characters." },
        { status: 400 }
      );
    }
    if (!(resume instanceof File) || !isAllowedResume(resume)) {
      return NextResponse.json(
        { error: "Upload a PDF, DOC, or DOCX resume up to 4 MB." },
        { status: 400 }
      );
    }

    const db = await getMongoDb();
    const now = new Date();
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const application = {
      candidate: {
        fullName,
        email,
        phone,
        experience,
        portfolioUrl: portfolioUrl || null,
      },
      job: {
        slug: job.slug,
        title: job.title,
        department: job.department,
        type: job.type,
        mode: job.mode,
        location: job.location,
        salary: job.salary,
      },
      coverNote,
      resume: {
        fileName: resume.name,
        contentType: resume.type || "application/octet-stream",
        size: resume.size,
        data: new Binary(resumeBuffer),
      },
      tracking: {
        status: "new",
        stage: "application_received",
        source: "careers_portal",
        rating: null,
        hrNotes: "",
        timeline: [
          {
            status: "new",
            note: "Application submitted through careers portal.",
            at: now,
          },
        ],
      },
      analytics: {
        userAgent: request.headers.get("user-agent") || null,
        referer: request.headers.get("referer") || null,
        ip:
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          request.headers.get("x-real-ip") ||
          null,
      },
      createdAt: now,
      updatedAt: now,
    };

    await db.collection("career_applications").createIndex({ createdAt: -1 });
    await db.collection("career_applications").createIndex({ "job.slug": 1, createdAt: -1 });
    await db.collection("career_applications").createIndex({ "tracking.status": 1 });
    const result = await db.collection("career_applications").insertOne(application);

    const hrEmail = process.env.CAREERS_HR_EMAIL || process.env.CONTACT_TO_EMAIL;
    if (hrEmail) {
      await sendResendEmailSafely(
        {
          to: [hrEmail],
          replyTo: email,
          subject: `New career application - ${job.title} - ${fullName}`,
          html: `
            <p><strong>${fullName}</strong> applied for <strong>${job.title}</strong>.</p>
            <ul>
              <li>Email: ${email}</li>
              <li>Phone: ${phone}</li>
              <li>Experience: ${experience}</li>
              <li>Portfolio: ${portfolioUrl || "Not provided"}</li>
              <li>Resume: ${resume.name} (${Math.round(resume.size / 1024)} KB)</li>
              <li>Application ID: ${result.insertedId.toString()}</li>
            </ul>
            <p>${coverNote}</p>
          `,
        },
        "HR notification"
      );
    }

    await sendResendEmailSafely(
      {
        to: [email],
        subject: `Application received - ${job.title} at Arthzone Technologies`,
        html: `
          <p>Hi ${fullName.split(" ")[0] || fullName},</p>
          <p>Thanks for applying for <strong>${job.title}</strong> at Arthzone Technologies. We have received your application and resume.</p>
          <p>Our hiring team will review your profile and contact you if your experience matches the role.</p>
          <p>Application ID: ${result.insertedId.toString()}</p>
          <p>- Arthzone Hiring Team</p>
        `,
      },
      "applicant confirmation"
    );

    return NextResponse.json({
      success: true,
      applicationId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("Career application error:", error);
    let message = "Something went wrong. Please try again.";
    if (error instanceof Error) {
      if (error.message.includes("MONGODB_URI")) {
        message = "Careers database is not configured on the server.";
      } else if (error.name === "MongoParseError") {
        message = "Careers database URI is invalid on the server.";
      } else if (
        error.name === "MongoServerSelectionError" ||
        error.message.includes("querySrv") ||
        error.message.includes("ENOTFOUND")
      ) {
        message = "Careers database is unreachable from the server.";
      } else if (
        error.name === "MongoServerError" &&
        /auth|authentication|bad auth/i.test(error.message)
      ) {
        message = "Careers database authentication failed on the server.";
      }
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
