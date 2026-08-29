import { NextResponse } from "next/server";
import { getResend } from "@/lib/email";

type Body = {
  name?: string;
  email?: string;
};

const SITE_URL = "https://www.peptideproducts.co.uk";
const SUPPORT_EMAIL = "info@peptideproducts.co.uk";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderButton(href: string, label: string) {
  return `
    <a
      href="${href}"
      style="display:inline-block;background:#2455e6;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:14px;margin:6px 8px 6px 0;"
    >
      ${label}
    </a>
  `;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const name = body.name?.trim() || "Customer";
    const email = body.email?.trim().toLowerCase();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { ok: false, error: "A valid customer email is required." },
        { status: 400 }
      );
    }

    const resend = getResend();
    const reviewUrl = `${SITE_URL}/reviews/submit`;

    const html = `
      <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:24px;color:#111827;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:22px;border:1px solid #e5e7eb;overflow:hidden;">
          <div style="background:#111827;color:#ffffff;padding:20px 24px;">
            <h1 style="margin:0;font-size:24px;">Quick review request</h1>
            <p style="margin:8px 0 0 0;color:#d1d5db;">Peptide Products</p>
          </div>

          <div style="padding:24px;">
            <p style="margin-top:0;">Hi ${escapeHtml(name)},</p>

            <p style="line-height:1.6;color:#4b5563;">
              Just checking your order arrived safely.
            </p>

            <p style="line-height:1.6;color:#4b5563;">
              If everything was okay with the ordering process, delivery, packaging,
              and support, we would really appreciate a quick review when you have a moment.
            </p>

            <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:18px;padding:18px;margin:18px 0;">
              <p style="margin:0;color:#9a3412;line-height:1.6;">
                Please only comment on your shopping experience, delivery, packaging,
                and customer service. Please do not include medical claims, product effect
                claims, dosage information, or personal use details.
              </p>
            </div>

            <div style="margin-top:22px;">
              ${renderButton(reviewUrl, "Write a review")}
            </div>

            <p style="margin-top:20px;color:#4b5563;">
              Thank you again for your order.
            </p>

            <p style="margin-top:20px;color:#4b5563;">
              If you need help, reply to ${SUPPORT_EMAIL}.
            </p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: email,
      subject: "Quick review request",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CUSTOMER REVIEW REQUEST EMAIL ERROR:", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to send review request email.",
      },
      { status: 500 }
    );
  }
}