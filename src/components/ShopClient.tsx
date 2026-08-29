"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const categoryLinks = [
  { title: "Metabolic", href: "/metabolic-research-compounds" },
  { title: "Regenerative", href: "/regenerative-peptides" },
  { title: "Antioxidant", href: "/antioxidant-peptides" },
  { title: "Nootropic", href: "/nootropic-peptides" },
] as const;

export function ShopClient() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#0b1220] py-9 text-white sm:py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(37,99,235,0.36),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(184,146,74,0.22),transparent_28%)]" />
        <Container>
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-300">
                Research catalogue
              </p>
              <h1 className="mt-3 text-[2.35rem] font-black leading-[0.98] tracking-[-0.045em] sm:mt-4 sm:text-5xl md:text-6xl">
                Retatrutide first. A complete research catalogue behind it.
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/70 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
                Start with our flagship Retatrutide 40mg Pen presentation, then compare the wider research-use-only range with clear pricing, stock and documentation.
              </p>
            </div>

            <Link
              href="/product/retatrutide"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-white sm:w-auto px-6 py-3.5 text-sm font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5"
            >
              View Retatrutide 40mg
            </Link>
          </div>
        </Container>
      </section>

      <Container>
        <section className="py-8 sm:py-10 md:py-14">
          <div className="flex flex-wrap items-end justify-between gap-5 border-b border-slate-200 pb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Catalogue</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">
                All research products
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {products.length} research-use-only products currently listed
              </p>
            </div>

            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {categoryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:border-slate-400 hover:text-slate-950"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} imageOverride={p.image} />
            ))}
          </div>
        </section>

        <section className="mb-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(11,18,32,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                Order with clarity
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                Product details before checkout.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                Every listing shows current price, pack information, stock status and available quality documentation. Paid orders are prepared for tracked dispatch with order updates by email.
              </p>
            </div>

            <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
              {[
                ["Quality information", "/quality-assurance"],
                ["Shipping information", "/shipping"],
                ["Customer reviews", "/reviews"],
                ["Contact support", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="bg-slate-50 p-6 text-sm font-black text-slate-950 transition hover:bg-white hover:text-blue-700"
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
