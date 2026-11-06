import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: { absolute: "Customer access | Peptide Products" },
  description: "Create an account or sign in. Access is restricted to adults aged 18 or over, for research use only.",
  keywords: [], robots: { index: false, follow: false },
  alternates: { canonical: "https://www.peptideproducts.co.uk/access" },
  openGraph: { title: "Customer access | Peptide Products", description: "Secure customer access. Adults 18+ only.", images: [] },
  twitter: { card: "summary", title: "Customer access | Peptide Products", images: [] },
};
export default function AccessLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-panel text-ink">
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8"><Link href="/access" aria-label="Peptide Products customer access"><Logo /></Link><Link href="/access/help" className="rounded-xl px-3 py-3 text-sm font-semibold text-muted hover:bg-white focus-visible:outline focus-visible:outline-accent">Need help?</Link></header>
    <main id="main-content" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-4 sm:px-8 lg:min-h-[72vh] lg:grid-cols-[1fr_1.05fr] lg:gap-20">
      <section className="max-w-lg"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold tracking-wider text-accent"><span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" /> CUSTOMER ACCESS · 18+</div><h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl">Your research.<br /><span className="text-accent">A dedicated space.</span></h1><p className="mt-5 max-w-md text-base leading-7 text-muted">Sign in to access Peptide Products. Our website is exclusively for adults aged 18 or over, for lawful research purposes.</p><div className="mt-7 flex gap-3 rounded-2xl border border-line bg-white/70 p-4"><span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-accent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg></span><p className="text-sm leading-6 text-muted"><strong className="block text-ink">Private, simple access</strong>A secure link sent to your email. No password to remember.</p></div></section>
      <section aria-label="Your account" className="rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-9">{children}</section>
    </main><footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 border-t border-line px-5 py-6 text-xs leading-6 text-muted sm:px-8"><span>© {new Date().getFullYear()} Peptide Products · Research use only</span><div className="flex gap-5"><Link href="/access/privacy" className="underline underline-offset-4">Privacy</Link><Link href="/access/terms" className="underline underline-offset-4">Access terms</Link><a href="mailto:info@peptideproducts.co.uk" className="underline underline-offset-4">Contact</a></div></footer>
  </div>;
}
