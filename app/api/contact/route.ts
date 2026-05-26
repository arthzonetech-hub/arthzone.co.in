import { NextResponse } from "next/server";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendThankYou(
  to: string,
  firstName: string
): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) return;

  const thanksHtml = `
          <p>Hi ${firstName},</p>
          <p>Thanks for reaching out to <strong>Arthzone Technologies</strong>. We have received your message and will get back to you soon.</p>
          <p>— Arthzone Team</p>
        `;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "Thanks for contacting Arthzone Technologies",
      html: thanksHtml,
    }),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const honeypot =
      typeof body._honeypot === "string" ? body._honeypot.trim() : "";
    if (honeypot.length > 0) {
      return NextResponse.json({ success: true });
    }

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const countryCode = String(body.countryCode ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const currentWebsite = String(body.currentWebsite ?? "").trim();
    const referenceWebsite = String(body.referenceWebsite ?? "").trim();
    const service = String(body.service ?? "").trim();
    const budget = String(body.budget ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!firstName || !lastName) {
      return NextResponse.json(
        { error: "Please enter your first and last name." },
        { status: 400 }
      );
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM_EMAIL;
    const contactTo = process.env.CONTACT_TO_EMAIL;

    const fullName = `${firstName} ${lastName}`.trim();

    const messageBody = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${countryCode} ${phone}`.trim(),
      `Current website: ${currentWebsite || "—"}`,
      `Reference website: ${referenceWebsite || "—"}`,
      `Service: ${service || "—"}`,
      `Budget: ${budget || "—"}`,
      "",
      "Message:",
      message || "—",
    ].join("\n");

    let adminSent = false;

    if (accessKey) {
      const web3 = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New contact form — ${fullName}`,
          from_name: fullName,
          email,
          message: messageBody,
          replyto: email,
        }),
      });

      const web3Json = (await web3.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!web3.ok || !web3Json.success) {
        return NextResponse.json(
          {
            error:
              web3Json.message ||
              "Could not send your message. Please try again or email us directly.",
          },
          { status: 502 }
        );
      }
      adminSent = true;
    } else if (resendKey && resendFrom && contactTo) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resendFrom,
          to: [contactTo],
          reply_to: email,
          subject: `New contact form — ${fullName}`,
          text: messageBody,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        console.error("Resend (admin) error:", resendRes.status, errText);
        return NextResponse.json(
          { error: "Could not send your message. Please try again later." },
          { status: 502 }
        );
      }
      adminSent = true;
    } else {
      return NextResponse.json(
        {
          error:
            "Contact form is not configured. Set WEB3FORMS_ACCESS_KEY in .env.local, or use Resend with RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL. See .env.example.",
        },
        { status: 503 }
      );
    }

    if (adminSent && resendKey && resendFrom) {
      try {
        await sendThankYou(email, firstName);
      } catch (e) {
        console.error("Resend (thank-you) error:", e);
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
