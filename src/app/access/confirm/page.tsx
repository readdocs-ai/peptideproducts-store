import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { hasAccessDeclaration } from "@/lib/customer-access/store";
import { safeReturnTo } from "@/lib/customer-access/policy";
import { confirmAccess, leaveAccount } from "../actions";
import { SubmitButton } from "../SubmitButton";
export default async function ConfirmAccess({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const params = await searchParams;
  const next = safeReturnTo(params.next);
  const session = await auth();
  if (!session?.user?.id) redirect(`/access?next=${encodeURIComponent(next)}`);
  if (await hasAccessDeclaration(session.user.id)) redirect(next);
  return <><p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">One last step</p><h2 className="mt-3 text-2xl font-extrabold tracking-tight">Confirm your access</h2><p className="mt-3 break-words text-sm leading-6 text-muted">Your email is verified: <strong className="text-ink">{session.user.email}</strong></p><p className="mt-3 text-sm leading-6 text-muted">Please read and confirm each statement to enter the website.</p>{params.error && <p role="alert" className="mt-4 text-sm text-red-700">All three confirmations are required to continue.</p>}
    <form action={confirmAccess} className="mt-6 space-y-4"><input type="hidden" name="next" value={next}/>{[
      ["adult", "I confirm that I am 18 years of age or older."],
      ["research", "I will access and purchase products exclusively for lawful laboratory research. Products are not for human or animal consumption or administration."],
    ].map(([name, label]) => <label key={name} className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-panel p-4 text-sm leading-6"><input name={name} value="yes" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-blue-700"/><span>{label}</span></label>)}<label className="flex cursor-pointer items-start gap-3 text-sm leading-6"><input name="terms" value="yes" type="checkbox" required className="mt-1 h-5 w-5 shrink-0 accent-blue-700"/><span>I agree to the <Link href="/access/terms" className="text-accent underline">access terms</Link> and have read the <Link href="/access/privacy" className="text-accent underline">privacy notice</Link>.</span></label><SubmitButton pendingLabel="Opening your account…">Confirm and enter website →</SubmitButton></form><form action={leaveAccount} className="mt-4 text-center"><button className="min-h-11 text-sm font-semibold text-muted underline underline-offset-4">Sign out / use a different email</button></form>
  </>;
}
