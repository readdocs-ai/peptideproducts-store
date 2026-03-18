import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
  name: string;
  email: string;
  company?: string;
  country?: string;
  products?: string;
  message: string;
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

export async function POST(req: Request) {
  let data: Payload;

  try {
    data = (await req.json()) as Payload;
  } catch {
    return bad("Invalid JSON payload");
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const company = (data.company || "").trim();
  const country = (data.country || "").trim();
  const products = (data.products || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return bad("Name, email and message are required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return bad("Please enter a valid email address.");
  }

  if (!process.env.RESEND_API_KEY) {
    return bad("Email is not configured yet (missing RESEND_API_KEY).", 500);
  }

  const text = [
    "New wholesale enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Country: ${country || "-"}`,
    `Products of interest: ${products || "-"}`,
    "",
    message,
  ].join("\n");

  try {
    const adminEmail = await resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: ["info@peptideproducts.co.uk"],
      replyTo: email,
      subject: `[Wholesale] Enquiry from ${name}${company ? ` (${company})` : ""}`,
      text,
    });

    await resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: [email],
      subject: "We received your wholesale enquiry",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for contacting Peptide Products.",
        "We’ve received your wholesale enquiry and will respond shortly.",
        "",
        "— Peptide Products",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true, id: adminEmail.data?.id || null });
  } catch (error: any) {
    console.error("Resend wholesale form failed:", {
      message: error?.message,
      name: error?.name,
      statusCode: error?.statusCode,
    });

    return bad("Failed to send email. Please try again shortly.", 500);
  }
}