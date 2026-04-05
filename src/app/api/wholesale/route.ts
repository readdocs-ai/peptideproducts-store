import { NextResponse } from "next/server";
import { sendWholesaleEmail } from "@/lib/email";

type Body = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim() || "";
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await sendWholesaleEmail({
      name,
      email,
      company,
      message,
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