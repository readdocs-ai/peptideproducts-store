import { NextResponse } from "next/server";
import { getTransport, getFromAddress, CONTACT_TO } from "@/lib/mailer";

export const runtime = "nodejs";

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

  if (!name || !email || !message) return bad("Name, email and message are required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Please enter a valid email address.");

  const transport = getTransport();
  if (!transport) return bad("Email is not configured yet (missing SMTP env vars).", 500);

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

  await transport.sendMail({
    from: getFromAddress(),
    to: CONTACT_TO,
    replyTo: email,
    subject: `[Wholesale] Enquiry from ${name}${company ? ` (${company})` : ""}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
