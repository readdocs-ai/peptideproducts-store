"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { categories, products, Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function Shop() {
  const [cat, setCat] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    if (cat === "All") return products;
    return products.filter((p) => p.category === cat);
  }, [cat]);

  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Shop</h1>
              <p className="mt-2 text-sm text-slate">Research supply catalog (demo). Not for human use.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setCat("All")}
                className={`rounded-full px-4 py-2 text-sm font-extrabold border ${cat === "All" ? "bg-accent text-paper border-ink" : "bg-paper/80 text-slate border-line hover:bg-mist"}`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className={`rounded-full px-4 py-2 text-sm font-extrabold border ${cat === c.key ? "bg-accent text-paper border-ink" : "bg-paper/80 text-slate border-line hover:bg-mist"}`}
                >
                  {c.key}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-2 text-xs text-slate">
            {cat === "All" ? (
              <div>Select a category to filter the catalog.</div>
            ) : (
              <div>{categories.find((c) => c.key === cat)?.blurb}</div>
            )}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
