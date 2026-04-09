"use client";

import Link from "next/link";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const categoryIntro = [
  {
    title: "Metabolic research",
    copy: "Explore Retatrutide, Tirzepatide, NAD, and related research-use-only product lines.",
    href: "/research-peptides",
  },
  {
    title: "Regenerative compounds",
    copy: "Browse BPC-157, GHK-CU, and related lines used in regeneration-focused research settings.",
    href: "/regenerative-peptides",
  },
  {
    title: "Hydration and support",
    copy: "Shop bacteriostatic water and support items used alongside laboratory preparation workflows.",
    href: "/hydration-peptides",
  },
] as const;

export function ShopClient() {
  return (
    <main className="py-10 lg:py-12">
      <Container>
        <section className="glass-card p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="eyebrow">
                UK research-use-only peptide catalogue
                <span className="h-2 w-2 rounded-full bg-accent2" />
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Shop the full product range.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                Browse the current catalogue, review product details and available documentation,
                and order through secure checkout with tracked UK dispatch.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[420px]">
              <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                Tracked UK dispatch
              </div>
              <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                Secure card checkout
              </div>
              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-white p-4 text-sm font-semibold text-ink transition hover:bg-panel sm:col-span-2"
              >
                Quality & documentation →
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="section-title">Full product catalogue</h2>
              <p className="mt-2 text-sm leading-7 text-muted">
                Browse the full range below and open individual product pages for pricing, pack
                details, stock status, quality information, and ordering options.
              </p>
            </div>

            <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm text-muted">
              Showing <span className="font-extrabold text-ink">{products.length}</span> products
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {categoryIntro.map((item) => (
              <Link key={item.title} href={item.href} className="surface-card p-5">
                <div className="text-lg font-extrabold text-ink">{item.title}</div>
                <p className="mt-2 text-sm leading-7 text-muted">{item.copy}</p>
                <div className="mt-4 text-sm font-extrabold text-ink">Explore category →</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                p={p}
                imageOverride={
                  p.id === "retatrutide"
                    ? "/products/retatrutide-white-bg.png"
                    : p.gallery?.[1] ?? p.image
                }
              />
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Before you order
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Use product pages to review pack information, stock status, gallery images, quick
                facts, and any available documentation before checkout.
              </p>
            </div>

            <div className="grid gap-3">
              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
              >
                Quality & documentation
              </Link>
              <Link
                href="/order-status"
                className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
              >
                Track an order
              </Link>
              <Link
                href="/contact"
                className="rounded-xl2 border border-line bg-panel px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white"
              >
                Contact support
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}