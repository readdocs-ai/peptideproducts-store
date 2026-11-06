import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { hasAccessDeclaration } from "@/lib/customer-access/store";
import { leaveAccount } from "../actions";
export default async function Account() {
  const session = await auth();
  if (!session?.user?.id) redirect("/access");
  if (!await hasAccessDeclaration(session.user.id)) redirect("/access/confirm");
  return <><h2 className="text-3xl font-extrabold">Your account</h2><p className="mt-4 text-sm leading-7 text-muted">Signed in as <strong className="break-words text-ink">{session.user.email}</strong></p><p className="mt-3 text-sm leading-7 text-muted">Your 18+ and research-use declarations are confirmed.</p><Link href="/" className="mt-6 block rounded-xl bg-accent px-5 py-4 text-center text-sm font-bold text-white">Continue to website →</Link><Link href="/order-status" className="mt-3 block rounded-xl border border-line px-5 py-4 text-center text-sm font-bold">Check an order</Link><form action={leaveAccount} className="mt-5 text-center"><button className="min-h-11 px-4 py-3 text-sm font-bold text-muted underline">Sign out</button></form></>;
}
