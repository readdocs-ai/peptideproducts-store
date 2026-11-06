import Link from "next/link";
import { requestAccess } from "./actions";
import { safeReturnTo } from "@/lib/customer-access/policy";
import { SubmitButton } from "./SubmitButton";
const errors: Record<string, string> = {
  Email: "Please enter a valid email address.",
  RateLimit: "You have requested several links. Please wait 15 minutes before trying again.",
  Verification: "This sign-in link has expired or has already been used. Request a fresh link below.",
  Delivery: "We could not send your sign-in link. Please try again shortly or contact us.",
  AccessDenied: "We could not complete sign-in. Please request a new link.",
};
export default async function AccessPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const params = await searchParams;
  return <><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Welcome to Peptide Products</p><h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">Create an account or sign in</h2><p className="mt-3 text-sm leading-6 text-muted">Enter your email and we’ll send you a secure sign-in link. New here? Your account is created when you verify your email.</p>
    {params.error && <p role="alert" className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">{errors[params.error] || "Sign-in is temporarily unavailable. Please try again or contact us for help."}</p>}
    <form action={requestAccess} className="mt-7"><input type="hidden" name="next" value={safeReturnTo(params.next)}/><label htmlFor="email" className="block text-sm font-bold">Email address</label><input id="email" name="email" type="email" autoComplete="email" inputMode="email" maxLength={254} required placeholder="you@example.com" className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base outline-none focus:border-accent focus:ring-2 focus:ring-blue-100"/><SubmitButton pendingLabel="Sending your link…">Email me a sign-in link <span aria-hidden="true">→</span></SubmitButton></form>
    <p className="mt-5 text-xs leading-6 text-muted">You must be 18 or over. Before entering, you’ll be asked to confirm your age and research use. By continuing, you agree to our <Link href="/access/terms" className="font-semibold text-accent underline">access terms</Link>. Read our <Link href="/access/privacy" className="font-semibold text-accent underline">privacy notice</Link>.</p>
  </>;
}
