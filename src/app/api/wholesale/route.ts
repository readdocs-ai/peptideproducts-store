import { NextResponse } from "next/server";
import { sendWholesaleEmail } from "@/lib/email";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  country?: string;
  enquiryType?: string;
  products?: string;
  quantity?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || "";
    const company = body.company?.trim() || "";
    const country = body.country?.trim() || "";
    const enquiryType = body.enquiryType?.trim() || "";
    const products = body.products?.trim() || "";
    const quantity = body.quantity?.trim() || "";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const fullMessage = [
      `Enquiry type: ${enquiryType || "Not provided"}`,
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      `Country: ${country || "Not provided"}`,
      `Products of interest: ${products || "Not provided"}`,
      `Approximate quantity: ${quantity || "Not provided"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await sendWholesaleEmail({
      name,
      email,
      company,
      message: fullMessage,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("WHOLESALE ERROR:", error);

    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Unable to send wholesale enquiry right now.",
      },
      { status: 500 }
    );
  }
}