import { NextResponse } from "next/server";
import { releaseTemporaryCheckoutBlock } from "@/lib/checkout-protection";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const reason = typeof body.reason === "string" ? body.reason : "";

    if (!(reason === "temporary-ip-block" || reason.startsWith("rate-limit:"))) {
      return NextResponse.json(
        { error: "Known abuse signatures cannot be unblocked from admin." },
        { status: 400 },
      );
    }

    const result = await releaseTemporaryCheckoutBlock({
      ipBlockHash: typeof body.ipBlockHash === "string" ? body.ipBlockHash : "",
      emailBlockHash: typeof body.emailBlockHash === "string" ? body.emailBlockHash : undefined,
      phoneBlockHash: typeof body.phoneBlockHash === "string" ? body.phoneBlockHash : undefined,
      nameIpBlockHash: typeof body.nameIpBlockHash === "string" ? body.nameIpBlockHash : undefined,
      payloadBlockHash: typeof body.payloadBlockHash === "string" ? body.payloadBlockHash : undefined,
    });

    if (!result.released) {
      return NextResponse.json({ error: result.reason || "Unable to release block" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CHECKOUT UNBLOCK ERROR:", error);
    return NextResponse.json({ error: "Unable to release checkout block" }, { status: 500 });
  }
}
