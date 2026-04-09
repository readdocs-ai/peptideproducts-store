"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { addToCart, formatGBP } from "@/lib/cart";

function getCategoryHref(category: Product["category"]) {
  switch (category) {
    case "Antioxidants":
      return "/antioxidant-peptides";
    case "Hydration":
      return "/hydration-peptides";
    case "Firming":
      return "/firming-peptides";
    case "Regenerative":
      return "/regenerative-peptides";
    case "Metabolic":
      return "/research-peptides";
    default:
      return "/research-peptides";
  }
}

export function ProductCard({ p, imageOverride }: { p: Product; imageOverride?: string }) {
  const displayImage = imageOverride ?? p.image;
  const inStock = p.stockStatus === "in_stock";
  const categoryHref = getCategoryHref(p.category);
  const isRetatrutide = p.id === "retatrutide";

  return (
    <div
      className={
        "group overflow-hidden rounded-xl3 border bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift " +
        (isRetatrutide ? "border-accent/30 ring-1 ring-accent/10" : "border-line")
      }
    >
      <Link href={`/product/${p.id}`} className="block">
        <div className="relative h-[300px] w-full bg-panel sm:h-[340px]">
          <Image
            src={displayImage}
            alt={`${p.name} product image`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain object-center p-6 transition duration-300 group-hover:scale-[1.035]"
          />

          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <div className="rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold text-ink shadow-soft">
              {p.category}
            </div>
            {isRetatrutide ? (
              <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-extrabold text-accent shadow-soft">
                Popular
              </div>
            ) : null}
          </div>

          <div
            className={
              "absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-extrabold shadow-soft " +
              (inStock
                ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border border-red-200 bg-red-50 text-red-700")
            }
          >
            {inStock ? "In stock" : "Sold out"}
          </div>

          {p.coa ? (
            <div className="absolute bottom-3 right-3 rounded-full border border-premium/30 bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-premium shadow-soft">
              Documentation available
            </div>
          ) : null}
        </div>
      </Link>

      <div className="p-5">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
          {p.subtitle}
        </div>

        <Link href={`/product/${p.id}`} className="block">
          <div className="mt-2 text-xl font-extrabold tracking-tight text-ink transition group-hover:text-accent">
            {p.name}
          </div>
        </Link>

        <div className="mt-3 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-muted">{p.pack}</div>
            <Link
              href={categoryHref}
              className="mt-2 inline-flex text-sm font-extrabold text-muted transition hover:text-accent"
            >
              View category →
            </Link>
          </div>

          <div className="shrink-0 text-right">
            <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
              Price
            </div>
            <div className="mt-1 text-2xl font-extrabold tracking-tight text-ink">
              {formatGBP(p.priceGBP)}
            </div>
          </div>
        </div>

        <ul className="mt-5 grid gap-2 text-sm text-muted">
          {p.quickFacts?.slice(0, 2).map((fact) => (
            <li key={fact} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{fact}</span>
            </li>
          ))}
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent2" />
            <span>{p.coa ? "Documentation available on product page" : "Research-use-only listing"}</span>
          </li>
        </ul>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link
            href={`/product/${p.id}`}
            className="inline-flex justify-center rounded-xl2 bg-accent px-4 py-2.5 text-sm font-extrabold text-white shadow-soft transition hover:bg-accent/90"
          >
            View product
          </Link>

          <button
            onClick={() => {
              if (inStock) addToCart(p.id, 1);
            }}
            disabled={!inStock}
            className={
              "rounded-xl2 px-4 py-2.5 text-sm font-extrabold shadow-soft transition " +
              (inStock
                ? "border border-line bg-white text-ink hover:bg-panel"
                : "cursor-not-allowed bg-red-100 text-red-700")
            }
          >
            {inStock ? "Add to cart" : "Sold out"}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">
          <span>Research use only</span>
          {p.coa ? <span className="text-premium">Docs available</span> : null}
          {inStock ? <span className="text-emerald-700">Ready to order</span> : null}
        </div>
      </div>
    </div>
  );
}