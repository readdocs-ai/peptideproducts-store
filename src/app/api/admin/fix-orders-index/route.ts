import { NextResponse } from "next/server";
import Redis from "ioredis";

export async function GET() {
  try {
    const redis = new Redis(process.env.REDIS_URL as string);
    const key = "orders:index";

    const keyType = await redis.type(key);

    if (keyType !== "none" && keyType !== "list") {
      await redis.del(key);
      return NextResponse.json({
        ok: true,
        message: `Deleted ${key} because it was type ${keyType}`,
      });
    }

    return NextResponse.json({
      ok: true,
      message: `No change needed. ${key} type is ${keyType}`,
    });
  } catch (error: any) {
    console.error("FIX ORDERS INDEX ERROR:", error);
    return NextResponse.json(
      { ok: false, error: error?.message || "Failed to fix orders:index" },
      { status: 500 }
    );
  }
}