"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { addToCart, formatGBP } from "@/lib/cart";

export function ProductCard({
  p,
  imageOverride,
}: {
  p: Product;
  imageOverride?: string;
}) {
  const displayImage = imageOverride ?? p.image;
  const inStock = p.stockStatus === "in_stock";

  return (
    <div className="group overflow-hidden rounded-xl3 border border-line bg-paper/85 shadow-soft backdrop-blur">
      <Link href={`/product/${p.id}`} className="block">
        <div className="relative h-[420px] w-full bg-panel">
          <Image
            src={displayImage}
            alt={p.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain object-center p-3"
          />

          <div className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1 text-xs font-extrabold shadow-soft">
            {p.category}
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
        </div>

        <div className="p-5">
          <div className="text-xs font-bold text-slate">{p.subtitle}</div>
          <div className="mt-2 text-xl font-extrabold tracking-tight">{p.name}</div>

          <div className="mt-3">
            <div
              className={
                "inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold " +
                (inStock
                  ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border border-red-200 bg-red-50 text-red-700")
              }
            >
              {inStock ? "Ready to order" : "Currently unavailable"}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="text-slate">{p.pack}</div>
            <div className="font-extrabold">{formatGBP(p.priceGBP)}</div>
          </div>

          <ul className="mt-3 grid gap-1 text-sm text-slate">
            {p.highlights.slice(0, 2).map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>
      </Link>

      <div className="border-t border-line p-4">
        <button
          onClick={() => {
            if (inStock) addToCart(p.id, 1);
          }}
          disabled={!inStock}
          className={
            "w-full rounded-xl2 px-4 py-2 text-sm font-extrabold shadow-glow transition " +
            (inStock
              ? "bg-accent text-paper hover:opacity-95"
              : "cursor-not-allowed bg-red-100 text-red-700")
          }
        >
          {inStock ? "Add to cart" : "Sold out"}
        </button>

        <div className="mt-2 text-center text-[11px] text-slate">Research use only</div>
      </div>
    </div>
  );
}