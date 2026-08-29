import { Resend } from "resend";

type ContactBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactBody;

    const name = body.name?.trim() || "";
    const email = body.email?.trim().toLowerCase() || "";
    const subject = body.subject?.trim() || "General enquiry";
    const message = body.message?.trim() || "";

    if (!name || name.length < 2) {
      return Response.json(
        { ok: false, error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!message || message.length < 5) {
      return Response.json(
        { ok: false, error: "Please enter a message." },
        { status: 400 }
      );
    }

    const resend = getResend();

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h1>New contact form enquiry</h1>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>

        <h2>Message</h2>
        <p>${safeMessage}</p>

        <hr style="margin:20px 0;" />

        <p style="font-size:12px;color:#6b7280;">
          This enquiry was sent from the Peptide Products contact page.
        </p>
      </div>
    `;

    const result = await resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: "info@peptideproducts.co.uk",
      replyTo: email,
      subject: `Contact form: ${subject}`,
      html,
    });

    if (result.error) {
      console.error("CONTACT EMAIL ERROR:", result.error);

      return Response.json(
        { ok: false, error: "Failed to send message." },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("CONTACT ROUTE ERROR:", error);

    return Response.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}