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
    <main className="py-12">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 text-xs font-semibold text-slate shadow-soft">
              Research supply catalog
              <span className="h-2 w-2 rounded-full bg-accent2" />
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
              Shop research peptides
            </h1>

            <p className="mt-3 text-sm leading-7 text-slate">
              Browse antioxidant, hydration, firming, regenerative, and selected
              metabolic research compounds from the Peptide Products catalogue.
              All products listed on this site are supplied strictly for
              laboratory and scientific research use only.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate">
              This shop page supports direct product discovery while also linking into
              the wider research cluster, including{" "}
              <Link
                href="/research-peptides"
                className="font-semibold text-ink hover:text-accent"
              >
                research peptides
              </Link>
              ,{" "}
              <Link
                href="/research-peptides-uk"
                className="font-semibold text-ink hover:text-accent"
              >
                research peptides UK
              </Link>
              ,{" "}
              <Link
                href="/buy-research-peptides-uk"
                className="font-semibold text-ink hover:text-accent"
              >
                buy research peptides UK
              </Link>
              , and{" "}
              <Link
                href="/laboratory-peptide-compounds"
                className="font-semibold text-ink hover:text-accent"
              >
                laboratory peptide compounds
              </Link>
              .
            </p>

            <p className="mt-3 text-sm leading-7 text-slate">
              Laboratories looking to{" "}
              <Link
                href="/buy-retatrutide-uk"
                className="font-semibold text-ink hover:text-accent"
              >
                buy retatrutide UK
              </Link>{" "}
              can also move directly into the{" "}
              <Link
                href="/retatrutide-research-peptide"
                className="font-semibold text-ink hover:text-accent"
              >
                retatrutide research peptide
              </Link>{" "}
              guide and the main{" "}
              <Link
                href="/product/retatrutide"
                className="font-semibold text-ink hover:text-accent"
              >
                Retatrutide product page
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setCat("All")}
              className={`rounded-full px-4 py-2 text-sm font-extrabold border ${
                cat === "All"
                  ? "bg-accent text-paper border-ink"
                  : "bg-paper/80 text-slate border-line hover:bg-mist"
              }`}
            >
              All
            </button>

            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`rounded-full px-4 py-2 text-sm font-extrabold border ${
                  cat === c.key
                    ? "bg-accent text-paper border-ink"
                    : "bg-paper/80 text-slate border-line hover:bg-mist"
                }`}
              >
                {c.key}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl2 border border-line bg-panel p-4 text-sm text-slate">
          {cat === "All" ? (
            <div className="flex flex-col gap-2">
              <p>
                Explore the full research catalogue, or select a category to filter
                products by laboratory focus.
              </p>
              <p>
                Fast routes:{" "}
                <Link
                  href="/antioxidant-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  antioxidant peptides
                </Link>
                ,{" "}
                <Link
                  href="/hydration-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  hydration peptides
                </Link>
                ,{" "}
                <Link
                  href="/firming-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  firming peptides
                </Link>
                ,{" "}
                <Link
                  href="/regenerative-peptides"
                  className="font-semibold text-ink hover:text-accent"
                >
                  regenerative peptides
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <p>{activeCategory?.blurb}</p>
              <p>
                Viewing <span className="font-semibold text-ink">{cat}</span> products
                in the catalogue.
              </p>
            </div>
          )}
        </div>

        <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate">
                Featured product discovery route
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                Retatrutide product discovery
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate">
                This shop page helps users move from category browsing into the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide product page
                </Link>
                , the{" "}
                <Link
                  href="/buy-retatrutide-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Buy Retatrutide UK
                </Link>{" "}
                landing page, and the{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide
                </Link>{" "}
                guide.
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              imageOverride={p.gallery?.[1] ?? p.image}
            />
          ))}
        </div>

        <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">
            Related research guides
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Link href="/research-peptides" className="surface-card p-5">
              <div className="font-extrabold text-ink">Research peptides</div>
              <p className="mt-2 text-sm text-slate">
                Overview of peptide compounds used in laboratory study.
              </p>
            </Link>

            <Link href="/research-peptides-uk" className="surface-card p-5">
              <div className="font-extrabold text-ink">Research peptides UK</div>
              <p className="mt-2 text-sm text-slate">
                UK-focused guide to research compound categories and product discovery.
              </p>
            </Link>

            <Link href="/buy-research-peptides-uk" className="surface-card p-5">
              <div className="font-extrabold text-ink">Buy research peptides UK</div>
              <p className="mt-2 text-sm text-slate">
                Buyer-focused route into the main research categories and products.
              </p>
            </Link>

            <Link href="/laboratory-peptide-compounds" className="surface-card p-5">
              <div className="font-extrabold text-ink">Laboratory peptide compounds</div>
              <p className="mt-2 text-sm text-slate">
                Broader overview of compound types used in scientific research environments.
              </p>
            </Link>

            <Link href="/retatrutide-research-peptide" className="surface-card p-5">
              <div className="font-extrabold text-ink">Retatrutide research peptide</div>
              <p className="mt-2 text-sm text-slate">
                Supporting retatrutide guide for internal topic relevance.
              </p>
            </Link>

            <Link href="/buy-retatrutide-uk" className="surface-card p-5">
              <div className="font-extrabold text-ink">Buy Retatrutide UK</div>
              <p className="mt-2 text-sm text-slate">
                UK-focused retatrutide landing page connecting research intent to product discovery.
              </p>
            </Link>

            <Link href="/product/retatrutide" className="surface-card p-5">
              <div className="font-extrabold text-ink">Retatrutide product page</div>
              <p className="mt-2 text-sm text-slate">
                Direct route to the Retatrutide 40mg product listing.
              </p>
            </Link>

            <Link href="/" className="surface-card p-5">
              <div className="font-extrabold text-ink">Homepage</div>
              <p className="mt-2 text-sm text-slate">
                Return to the main site hub for products, categories, and research pages.
              </p>
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}