"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { categories, products, Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ShopClient() {
  const [cat, setCat] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    if (cat === "All") return products;
    return products.filter((p) => p.category === cat);
  }, [cat]);

  const activeCategory = categories.find((c) => c.key === cat);

  return (
    <main className="py-10 lg:py-12">
      <Container>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-xs font-semibold text-slate shadow-soft">
              Research supply catalogue
              <span className="h-2 w-2 rounded-full bg-accent2" />
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Shop research peptides
            </h1>

            <p className="mt-3 text-sm leading-7 text-slate">
              Browse the main product range and move directly into product pages.
              All products listed on this site are supplied strictly for laboratory
              and scientific research use only.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCat("All")}
              className={`rounded-full px-4 py-2 text-sm font-extrabold border transition ${
                cat === "All"
                  ? "bg-accent text-white border-accent"
                  : "bg-white text-ink border-line hover:bg-panel"
              }`}
            >
              All
            </button>

            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`rounded-full px-4 py-2 text-sm font-extrabold border transition ${
                  cat === c.key
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-ink border-line hover:bg-panel"
                }`}
              >
                {c.key}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-xl2 border border-line bg-panel p-4 text-sm text-slate">
          {cat === "All" ? (
            <p>
              Showing the full research product range. Use the category buttons above
              to filter products faster.
            </p>
          ) : (
            <p>
              <span className="font-semibold text-ink">{cat}</span>:{" "}
              {activeCategory?.blurb}
            </p>
          )}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} imageOverride={p.gallery?.[1] ?? p.image} />
          ))}
        </div>

        <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate">
                Featured route
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                Retatrutide product discovery
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate">
                Looking for the most viewed product on the site? Go straight to the
                Retatrutide 40mg product page or the Buy Retatrutide UK page.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/product/retatrutide"
                className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Retatrutide
              </Link>
              <Link
                href="/buy-retatrutide-uk"
                className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Buy Retatrutide UK
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}