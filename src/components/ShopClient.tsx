"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { categories, products, Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ShopClient() {
  const [cat, setCat] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const categoryMatch = cat === "All" || p.category === cat;
      const searchMatch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.actives.join(" ").toLowerCase().includes(q);
      return categoryMatch && searchMatch;
    });
  }, [cat, query]);

  const activeCategory = categories.find((c) => c.key === cat);

  return (
    <main className="py-10 lg:py-12">
      <Container>
        <section className="glass-card p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="eyebrow">
                Premium research peptide catalogue
                <span className="h-2 w-2 rounded-full bg-accent2" />
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Shop research peptides and laboratory compounds.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
                Browse the full catalogue, filter by category, and review selected documentation before checkout. All products are listed for laboratory and scientific research use only.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[420px]">
              <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">Tracked UK dispatch</div>
              <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">Secure Stripe checkout</div>
              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-white p-4 text-sm font-semibold text-ink transition hover:bg-panel sm:col-span-2"
              >
                Review quality documents →
              </Link>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="section-title">Filter by category or search</h2>
            <p className="mt-2 text-sm leading-7 text-muted">Use the category chips or search field below to narrow the product grid more quickly.</p>
          </div>

          <label className="w-full lg:w-[340px]">
            <span className="sr-only">Search products</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, actives, or category..."
              className="h-12 w-full rounded-xl2 border border-line bg-white px-4 text-sm text-ink shadow-soft outline-none ring-0 placeholder:text-muted focus:border-accent"
            />
          </label>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setCat("All")}
            className={`rounded-full px-4 py-2 text-sm font-extrabold border transition ${
              cat === "All" ? "bg-accent text-white border-accent" : "bg-white text-ink border-line hover:bg-panel"
            }`}
          >
            All ({products.length})
          </button>

          {categories.map((c) => {
            const count = products.filter((p) => p.category === c.key).length;
            return (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`rounded-full px-4 py-2 text-sm font-extrabold border transition ${
                  cat === c.key ? "bg-accent text-white border-accent" : "bg-white text-ink border-line hover:bg-panel"
                }`}
              >
                {c.key} ({count})
              </button>
            );
          })}
        </div>

        <div className="mt-5 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
          {cat === "All" ? (
            <p>
              Showing <span className="font-extrabold text-ink">{filtered.length}</span> products from the full catalogue.
            </p>
          ) : (
            <p>
              <span className="font-semibold text-ink">{cat}</span>: {activeCategory?.blurb} Showing {filtered.length} matching products.
            </p>
          )}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} imageOverride={p.gallery?.[1] ?? p.image} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-6 rounded-xl2 border border-line bg-white p-6 text-sm text-muted shadow-soft">
            No products matched that search. Try a broader term or switch back to the full catalogue.
          </div>
        ) : null}
      </Container>
    </main>
  );
}
