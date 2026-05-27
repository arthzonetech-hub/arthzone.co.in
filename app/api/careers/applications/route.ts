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
const SITE_URL = "https://www.arthzone.co.in";
const LOGO_URL = `${SITE_URL}/assets/images/logo.png`;

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#8b98a5;font-size:13px;line-height:20px;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#ffffff;font-size:14px;line-height:20px;font-weight:700;text-align:right;">${value}</td>
    </tr>
  `;
}

function emailShell({
  eyebrow,
  title,
  preview,
  body,
}: {
  eyebrow: string;
  title: string;
  preview: string;
  body: string;
}): string {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="color-scheme" content="dark">
        <title>${title}</title>
      </head>
      <body style="margin:0;padding:0;background:#080b0f;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preview}</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#080b0f;margin:0;padding:32px 14px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;border-collapse:separate;border-spacing:0;">
                <tr>
                  <td style="padding:0 0 18px 0;text-align:center;">
                    <img src="${LOGO_URL}" width="210" alt="Arthzone Technologies" style="display:inline-block;max-width:210px;height:auto;border:0;outline:none;text-decoration:none;">
                  </td>
                </tr>
                <tr>
                  <td style="border:1px solid rgba(255,255,255,0.12);border-radius:24px;background:#101010;overflow:hidden;box-shadow:0 24px 80px rgba(0,0,0,0.35);">
                    <div style="height:6px;background:linear-gradient(90deg,#11d7fa,#7614ef,#ff531a);"></div>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="padding:34px 28px 10px 28px;">
                          <div style="display:inline-block;margin-bottom:16px;padding:8px 12px;border-radius:999px;background:rgba(17,215,250,0.12);border:1px solid rgba(17,215,250,0.28);color:#11d7fa;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;">${eyebrow}</div>
                          <h1 style="margin:0;color:#ffffff;font-size:30px;line-height:38px;font-weight:800;letter-spacing:-0.02em;">${title}</h1>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 28px 32px 28px;">
                          ${body}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:18px 12px 0;text-align:center;color:#69727d;font-size:12px;line-height:20px;">
                    Arthzone Technologies · Websites, SaaS, AI, apps, and digital growth systems<br>
                    <a href="${SITE_URL}" style="color:#11d7fa;text-decoration:none;font-weight:700;">arthzone.co.in</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function hrApplicationEmail({
  applicationId,
  fullName,
  email,
  phone,
  experience,
  portfolioUrl,
  coverNote,
  jobTitle,
  resumeName,
  resumeSizeKb,
}: {
  applicationId: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  portfolioUrl: string;
  coverNote: string;
  jobTitle: string;
  resumeName: string;
  resumeSizeKb: number;
}): string {
  const safePortfolio = portfolioUrl
    ? `<a href="${escapeHtml(portfolioUrl)}" style="color:#11d7fa;text-decoration:none;font-weight:700;">${escapeHtml(portfolioUrl)}</a>`
    : "Not provided";

  return emailShell({
    eyebrow: "New application",
    title: `${escapeHtml(fullName)} applied for ${escapeHtml(jobTitle)}`,
    preview: `New career application for ${jobTitle} from ${fullName}.`,
    body: `
      <p style="margin:0 0 22px;color:#c9d2dc;font-size:16px;line-height:26px;">
        A new candidate has submitted their profile through the Arthzone careers portal.
      </p>
      <div style="border:1px solid rgba(255,255,255,0.10);border-radius:18px;background:#15191d;padding:18px 20px;margin-bottom:22px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          ${detailRow("Role", escapeHtml(jobTitle))}
          ${detailRow("Candidate", escapeHtml(fullName))}
          ${detailRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#11d7fa;text-decoration:none;">${escapeHtml(email)}</a>`)}
          ${detailRow("Phone", escapeHtml(phone))}
          ${detailRow("Experience", escapeHtml(experience))}
          ${detailRow("Portfolio", safePortfolio)}
          ${detailRow("Resume", `${escapeHtml(resumeName)} (${resumeSizeKb} KB)`)}
          ${detailRow("Application ID", escapeHtml(applicationId))}
        </table>
      </div>
      <div style="border-left:4px solid #11d7fa;background:rgba(17,215,250,0.08);border-radius:14px;padding:18px 18px;margin-bottom:24px;">
        <p style="margin:0 0 8px;color:#11d7fa;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:1.6px;">Candidate note</p>
        <p style="margin:0;color:#e8edf2;font-size:15px;line-height:25px;">${escapeHtml(coverNote).replace(/\n/g, "<br>")}</p>
      </div>
      <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#11d7fa;color:#101010;text-decoration:none;font-size:14px;font-weight:800;border-radius:14px;padding:14px 18px;">Reply to candidate</a>
    `,
  });
}

function applicantConfirmationEmail({
  applicationId,
  firstName,
  jobTitle,
  fullName,
}: {
  applicationId: string;
  firstName: string;
  jobTitle: string;
  fullName: string;
}): string {
  return emailShell({
    eyebrow: "Application received",
    title: `Thanks for applying, ${escapeHtml(firstName || fullName)}`,
    preview: `Your application for ${jobTitle} at Arthzone Technologies has been received.`,
    body: `
      <p style="margin:0 0 18px;color:#c9d2dc;font-size:16px;line-height:26px;">
        We have received your application for <strong style="color:#ffffff;">${escapeHtml(jobTitle)}</strong> at Arthzone Technologies.
      </p>
      <p style="margin:0 0 24px;color:#c9d2dc;font-size:16px;line-height:26px;">
        Our hiring team will review your resume, experience, and portfolio details. If your profile matches the role, we will contact you for the next step.
      </p>
      <div style="border:1px solid rgba(17,215,250,0.24);border-radius:18px;background:rgba(17,215,250,0.08);padding:18px 20px;margin-bottom:24px;">
        <p style="margin:0;color:#8b98a5;font-size:13px;line-height:20px;">Application ID</p>
        <p style="margin:4px 0 0;color:#ffffff;font-size:18px;line-height:26px;font-weight:800;">${escapeHtml(applicationId)}</p>
      </div>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
        <tr>
          <td style="border-radius:16px;background:#15191d;border:1px solid rgba(255,255,255,0.10);padding:18px;">
            <p style="margin:0 0 10px;color:#11d7fa;font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:1.6px;">What happens next</p>
            <p style="margin:0;color:#dce4ec;font-size:15px;line-height:25px;">Profile review → technical or portfolio discussion → practical task if required → final alignment.</p>
          </td>
        </tr>
      </table>
      <a href="${SITE_URL}/career" style="display:inline-block;background:#11d7fa;color:#101010;text-decoration:none;font-size:14px;font-weight:800;border-radius:14px;padding:14px 18px;">View careers portal</a>
    `,
  });
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
    const applicationId = result.insertedId.toString();
    const resumeSizeKb = Math.round(resume.size / 1024);

    const hrEmail = process.env.CAREERS_HR_EMAIL || process.env.CONTACT_TO_EMAIL;
    if (hrEmail) {
      await sendResendEmailSafely(
        {
          to: [hrEmail],
          replyTo: email,
          subject: `New career application - ${job.title} - ${fullName}`,
          html: hrApplicationEmail({
            applicationId,
            fullName,
            email,
            phone,
            experience,
            portfolioUrl,
            coverNote,
            jobTitle: job.title,
            resumeName: resume.name,
            resumeSizeKb,
          }),
        },
        "HR notification"
      );
    }

    await sendResendEmailSafely(
      {
        to: [email],
        subject: `Application received - ${job.title} at Arthzone Technologies`,
        html: applicantConfirmationEmail({
          applicationId,
          firstName: fullName.split(" ")[0] || fullName,
          fullName,
          jobTitle: job.title,
        }),
      },
      "applicant confirmation"
    );

    return NextResponse.json({
      success: true,
      applicationId,
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
