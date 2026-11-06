"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { auth, signIn, signOut } from "@/auth";
import { allowSignIn, saveAccessDeclaration } from "@/lib/customer-access/store";
import { safeReturnTo, validDeclaration } from "@/lib/customer-access/policy";

export async function requestAccess(form: FormData) {
  const email = String(form.get("email") || "").trim().toLowerCase();
  const next = safeReturnTo(form.get("next"));
  if (email.length > 254 || !/^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(email)) redirect("/access?error=Email");
  const h = await headers();
  const ip = h.get("x-vercel-forwarded-for")?.split(",")[0].trim() || h.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  try {
    if (!await allowSignIn(email, ip)) redirect("/access?error=RateLimit");
    const destination = await signIn("resend", { email, redirect: false, redirectTo: `/access/confirm?next=${encodeURIComponent(next)}` });
    if (typeof destination !== "string" || !new URL(destination).pathname.endsWith("/verify-request")) redirect("/access?error=Delivery");
    redirect("/access/check-email");
  } catch (error) {
    if (error instanceof AuthError) redirect("/access?error=Delivery");
    throw error;
  }
}
export async function confirmAccess(form: FormData) {
  const session = await auth();
  if (!session?.user?.id) redirect("/access");
  const next = safeReturnTo(form.get("next"));
  if (!validDeclaration(form)) redirect(`/access/confirm?error=Declaration&next=${encodeURIComponent(next)}`);
  await saveAccessDeclaration(session.user.id);
  redirect(next);
}
export async function leaveAccount() { await signOut({ redirectTo: "/access" }); }
