import type { NextRequest } from "next/server";
import { handlers } from "@/auth";
import { allowSignIn } from "@/lib/customer-access/store";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const GET = handlers.GET;
export async function POST(req: NextRequest) {
  if (new URL(req.url).pathname === "/api/auth/signin/resend") {
    const form = await req.clone().formData();
    const email = String(form.get("email") || "").trim().toLowerCase();
    const ip = req.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (email.length > 254 || !await allowSignIn(email, ip)) return Response.json({ error: "Please wait before requesting another sign-in link." }, { status: 429, headers: { "Retry-After": "900", "Cache-Control": "no-store" } });
  }
  return handlers.POST(req);
}
