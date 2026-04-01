"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { addToCart, formatGBP } from "@/lib/cart";

export function ProductImageGallery({ product }: { product: Product }) {
  const gallery = product.gallery?.length ? product.gallery : [product.image];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = gallery[selectedIndex];
  const inStock = product.stockStatus === "in_stock";

  const getImageAlt = (index: number, isThumbnail = false) => {
    if (product.id === "retatrutide") {
      const retatrutideAlts = [
        "Retatrutide 40mg UK research peptide pen",
        "Retatrutide 40mg research peptide pen product image",
      ];

      const baseAlt =
        retatrutideAlts[index] ||
        `Retatrutide 40mg research peptide pen image ${index + 1}`;

      return isThumbnail ? `${baseAlt} thumbnail` : baseAlt;
    }

    return isThumbnail
      ? `${product.name} thumbnail ${index + 1}`
      : `${product.name} image ${index + 1}`;
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[96px_minmax(0,1fr)]">
      <div className="order-2 lg:order-1">
        <div className="flex gap-3 overflow-x-auto pb-1 lg:grid lg:max-h-[640px] lg:grid-cols-1 lg:overflow-visible">
          {gallery.map((src, index) => {
            const active = index === selectedIndex;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`relative h-24 min-w-[96px] overflow-hidden rounded-xl2 border bg-white transition lg:h-24 lg:min-w-0 ${
                  active
                    ? "border-ink shadow-soft ring-2 ring-ink/10"
                    : "border-line hover:border-ink/40"
                }`}
                aria-label={`View image ${index + 1} for ${product.name}`}
              >
                <Image
                  src={src}
                  alt={getImageAlt(index, true)}
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-soft">
          <div className="relative aspect-square overflow-hidden bg-panel group">
            <Image
              src={selected}
              alt={getImageAlt(selectedIndex)}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top transition duration-300 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_42%,rgba(255,255,255,0.20)_100%)] opacity-0 transition group-hover:opacity-100" />

            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-ink shadow-soft">
              {product.category}
            </div>

            <div
              className={
                "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-extrabold shadow-soft " +
                (inStock
                  ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border border-red-200 bg-red-50 text-red-700")
              }
            >
              {inStock ? "In stock" : "Sold out"}
            </div>

            <div className="absolute bottom-4 right-4 rounded-full border border-line bg-white/90 px-3 py-1 text-[11px] font-extrabold text-ink shadow-soft">
              Hover to zoom
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-line px-4 py-3 text-xs text-muted">
            <div>Product gallery</div>
            <div>{product.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductBuyBox({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const total = useMemo(() => product.priceGBP * qty, [product.priceGBP, qty]);
  const inStock = product.stockStatus === "in_stock";
  const isRetatrutide = product.id === "retatrutide";

  return (
    <aside className="h-fit rounded-xl3 border border-line bg-paper/85 p-6 shadow-soft backdrop-blur">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="text-sm text-slate">{product.pack}</div>
          <div className="mt-1 text-2xl font-extrabold">
            {formatGBP(product.priceGBP)}
          </div>
        </div>
        <div className="rounded-xl2 border border-line bg-haze px-3 py-2 text-xs font-extrabold text-slate">
          Research supply
        </div>
      </div>

      <div className="mt-4">
        <div
          className={
            "inline-flex rounded-full px-3 py-1 text-xs font-extrabold " +
            (inStock
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-red-200 bg-red-50 text-red-700")
          }
        >
          {inStock ? "In stock — ready to order" : "Sold out — currently unavailable"}
        </div>

        {inStock ? (
          <div className="mt-2 text-xs text-slate">
            Dispatch from UK • Fast delivery available
          </div>
        ) : (
          <div className="mt-2 text-xs text-slate">
            This product is temporarily unavailable.
          </div>
        )}

       {isRetatrutide ? (
  <div className="mt-3 rounded-xl2 border border-line bg-white p-3 text-xs font-bold text-ink">
    Retatrutide is currently one of our most in-demand research products.
  </div>
) : null}

      {product.quickFacts?.length ? (
        <div className="mt-6 grid gap-2">
          {product.quickFacts.map((fact) => (
            <div
              key={fact}
              className="rounded-xl2 border border-line bg-mist px-3 py-2 text-xs font-bold text-slate"
            >
              {fact}
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6">
        <label className="text-xs font-extrabold text-slate">Quantity</label>
        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            disabled={!inStock}
            className={
              "h-10 w-10 rounded-xl2 border border-line font-extrabold " +
              (inStock
                ? "bg-paper hover:bg-mist"
                : "cursor-not-allowed bg-mist text-slate/50")
            }
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            −
          </button>
          <input
            className={
              "h-10 w-16 rounded-xl2 border border-line text-center font-extrabold outline-none " +
              (inStock
                ? "bg-mist focus:ring-2 focus:ring-aqua/40"
                : "bg-mist text-slate/50")
            }
            value={qty}
            disabled={!inStock}
            onChange={(e) => {
              const n = Number(e.target.value);
              if (Number.isFinite(n)) setQty(Math.min(99, Math.max(1, Math.floor(n))));
            }}
            inputMode="numeric"
          />
          <button
            type="button"
            disabled={!inStock}
            className={
              "h-10 w-10 rounded-xl2 border border-line font-extrabold " +
              (inStock
                ? "bg-paper hover:bg-mist"
                : "cursor-not-allowed bg-mist text-slate/50")
            }
            onClick={() => setQty((q) => Math.min(99, q + 1))}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        disabled={!inStock}
        className={
          "mt-6 w-full rounded-xl2 px-4 py-3 text-sm font-extrabold shadow-glow transition " +
          (inStock
            ? "bg-accent text-paper hover:opacity-95"
            : "cursor-not-allowed bg-red-100 text-red-700")
        }
        onClick={() => {
          if (inStock) addToCart(product.id, qty);
        }}
      >
        {inStock ? `Add to cart — ${formatGBP(total)}` : "Sold out"}
      </button>

      <div className="mt-3 text-xs text-slate">
        You’ll be asked to confirm{" "}
        <span className="font-bold text-ink">research use only</span> at checkout.
      </div>

      <div className="mt-6 rounded-xl2 border border-line bg-mist p-4 text-xs text-slate">
        <div className="font-extrabold text-ink">Compliance note</div>
        <div className="mt-1">
          Not for human or veterinary use. Handle only in a suitable laboratory environment.
        </div>
      </div>

      {isRetatrutide ? (
        <div className="mt-6 rounded-xl2 border border-line bg-white p-4 text-xs text-slate">
          <div className="font-extrabold text-ink">Related Retatrutide pages</div>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link href="/buy-retatrutide-uk" className="font-bold text-ink hover:text-accent">
              Buy Retatrutide UK
            </Link>
            <Link
              href="/retatrutide-research-peptide"
              className="font-bold text-ink hover:text-accent"
            >
              Research guide
            </Link>
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex items-center justify-between text-sm">
        <Link href="/shop" className="font-extrabold text-slate hover:text-ink">
          ← Continue shopping
        </Link>
        <Link href="/cart" className="font-extrabold text-ink hover:underline">
          Go to cart →
        </Link>
      </div>
    </aside>
  );
}