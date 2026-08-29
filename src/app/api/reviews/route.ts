import { getResend } from "@/lib/email";

type ReviewBody = {
  name?: string;
  email?: string;
  orderNumber?: string;
  rating?: number;
  review?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ReviewBody;

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const orderNumber = body.orderNumber?.trim() || "Not provided";
    const rating = Number(body.rating);
    const review = body.review?.trim();

    if (!name || !email || !review) {
      return Response.json(
        { ok: false, error: "Name, email and review are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return Response.json(
        { ok: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
      return Response.json(
        { ok: false, error: "Please select a star rating." },
        { status: 400 }
      );
    }

    const resend = getResend();

    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:24px;color:#111827;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:22px;border:1px solid #e5e7eb;overflow:hidden;">
          <div style="background:#111827;color:#ffffff;padding:20px 24px;">
            <h1 style="margin:0;font-size:24px;">New customer review feedback</h1>
            <p style="margin:8px 0 0 0;color:#d1d5db;">Peptide Products</p>
          </div>

          <div style="padding:24px;">
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:18px;padding:18px;margin-bottom:18px;">
              <p style="margin:0 0 8px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p style="margin:0 0 8px 0;"><strong>Order number:</strong> ${escapeHtml(orderNumber)}</p>
              <p style="margin:0;"><strong>Rating:</strong> ${stars} (${rating}/5)</p>
            </div>

            <h2 style="font-size:20px;margin:0 0 12px 0;">Review</h2>
            <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:18px;padding:18px;line-height:1.6;color:#4b5563;">
              ${escapeHtml(review).replace(/\n/g, "<br />")}
            </div>

            <p style="font-size:12px;line-height:1.6;color:#6b7280;margin-top:18px;">
              Review feedback should be checked before publishing. Only publish genuine customer service, ordering, delivery, packaging, and support feedback.
            </p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: "info@peptideproducts.co.uk",
      subject: `New customer review feedback: ${rating}/5 from ${name}`,
      html: adminHtml,
    });

    return Response.json({ ok: true });
  } catch (error: unknown) {
    console.error("REVIEW SUBMIT ERROR:", error);

    return Response.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Unable to send review feedback right now.",
      },
      { status: 500 }
    );
  }
}