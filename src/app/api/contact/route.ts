import { NextResponse } from "next/server";
import { getTransport, getFromAddress, CONTACT_TO } from "@/lib/mailer";

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  subject: string;
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
  const subject = (data.subject || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !subject || !message) return bad("All fields are required.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Please enter a valid email address.");

  const transport = getTransport();
  if (!transport) return bad("Email is not configured yet (missing SMTP env vars).", 500);

  const text = [
    "New contact message",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    message,
  ].join("\n");

  await transport.sendMail({
    from: getFromAddress(),
    to: CONTACT_TO,
    replyTo: email,
    subject: `[Contact] ${subject}`,
    text,
  });

  return NextResponse.json({ ok: true });
}
