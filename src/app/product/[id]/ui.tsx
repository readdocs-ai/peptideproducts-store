"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { addToCart, formatGBP } from "@/lib/cart";

const retatrutideRelatedLinks = [
  {
    href: "/international-orders",
    label: "International orders",
    copy: "Selected international delivery and £25 international shipping information.",
  },
  {
    href: "/shipping",
    label: "Delivery information",
    copy: "UK dispatch details, international estimates, and delivery guidance.",
  },
  {
    href: "/quality-assurance",
    label: "Quality information",
    copy: "Review product quality information and support details before ordering.",
  },
  {
    href: "/order-status",
    label: "Order status",
    copy: "Check an order after purchase using your order number and email.",
  },
] as const;

const SUPPORT_WHATSAPP_URL =
  "https://wa.me/447429098887?text=" +
  encodeURIComponent(
    "Hi Peptide Products, I have a question before ordering Retatrutide 40mg."
  );

function getProductSupportUrl(product: Product) {
  return (
    "https://wa.me/447429098887?text=" +
    encodeURIComponent(
      `Hi Peptide Products, I have a question before ordering ${product.name} for research.`
    )
  );
}

export function ProductImageGallery({ product }: { product: Product }) {
  const baseGallery = product.gallery?.length ? product.gallery : [product.image];
  const gallery = product.coaPreview && !baseGallery.includes(product.coaPreview)
    ? [...baseGallery, product.coaPreview]
    : baseGallery;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = gallery[selectedIndex];
  const inStock = product.stockStatus === "in_stock";
  const hasTestReport = Boolean(product.coa);

  return (
    <div className="grid gap-4 lg:grid-cols-[96px_minmax(0,1fr)]">
      <div className="order-2 lg:order-1">
        <div className="flex gap-3 overflow-x-auto pb-1 lg:grid lg:max-h-[640px] lg:grid-cols-1 lg:overflow-visible">
          {gallery.map((src, index) => {
            const active = index === selectedIndex;
            const isCertificate = src.includes("/certificates/") || src.includes("/docs/previews/");

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
                  alt={isCertificate ? `${product.name} independent test report` : `${product.name} image ${index + 1}`}
                  fill
                  sizes="96px"
                  className={isCertificate ? "object-cover object-top" : "object-contain p-2"}
                />
                {isCertificate ? (
                  <span className="absolute inset-x-1 bottom-1 rounded bg-ink/90 px-1 py-0.5 text-[8px] font-extrabold uppercase tracking-wide text-white">Test report</span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="overflow-hidden rounded-xl3 border border-line bg-white shadow-soft">
          <div className={`group relative overflow-hidden bg-panel ${product.id === "retatrutide" ? "aspect-[4/3]" : "aspect-square"}`}>
            <Image
              src={selected}
              alt={`${product.name} product image`}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={(selected.includes("/certificates/") || selected.includes("/docs/previews/")) ? "object-contain bg-white p-3" : product.id === "retatrutide" ? "object-contain p-1 transition duration-300 group-hover:scale-[1.02]" : "object-contain p-6 transition duration-300 group-hover:scale-[1.03]"}
            />

            <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-extrabold text-ink shadow-soft">
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
              {product.availabilityLabel ?? (inStock ? "In stock" : "Sold out")}
            </div>

            {hasTestReport ? (
              <a
                href={product.coa}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 z-10 rounded-full border border-premium/30 bg-white/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-premium shadow-soft transition hover:-translate-y-0.5 hover:bg-amber-50"
                aria-label={`Open test report for ${product.name}`}
              >
                Test report available
              </a>
            ) : null}

            {hasTestReport && product.coaPreview && selected === product.coaPreview ? (
              <a
                href={product.coa}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 z-10 rounded-xl2 bg-ink px-4 py-2 text-xs font-extrabold text-white shadow-soft transition hover:bg-ink/90"
              >
                View full test report →
              </a>
            ) : null}
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
  const hasTestReport = Boolean(product.coa);
  const orderByEnquiry = product.stockStatus !== "in_stock";
  const orderSupportUrl = getProductSupportUrl(product);
  const isFlagshipRetatrutide = product.id === "retatrutide";

  if (isFlagshipRetatrutide) {
    return (
      <aside className="overflow-hidden rounded-[1.35rem] bg-ink text-white shadow-lift sm:rounded-xl3">
        <div className="border-b border-white/10 px-4 py-4 sm:px-5 md:px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-white/55">Current price</div>
              <div className="mt-1 text-4xl font-extrabold tracking-tight">{formatGBP(product.priceGBP)}</div>
            </div>
            <div className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-extrabold text-emerald-300">
              In stock
            </div>
          </div>
          <div className="mt-2 text-sm text-white/65">{product.pack}</div>
        </div>

        <div className="p-4 sm:p-5 md:p-6">
          <div className="grid gap-3 sm:grid-cols-[150px_1fr]">
            <div className="flex items-center justify-between rounded-xl2 border border-white/15 bg-white/10 p-1.5">
              <button type="button" className="h-10 w-10 rounded-xl2 bg-white text-lg font-extrabold text-ink" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <input
                className="h-10 w-12 bg-transparent text-center font-extrabold text-white outline-none"
                value={qty}
                onChange={(e) => {
                  const n = Number(e.target.value);
                  if (Number.isFinite(n)) setQty(Math.min(99, Math.max(1, Math.floor(n))));
                }}
                inputMode="numeric"
                aria-label="Quantity"
              />
              <button type="button" className="h-10 w-10 rounded-xl2 bg-white text-lg font-extrabold text-ink" onClick={() => setQty((q) => Math.min(99, q + 1))}>+</button>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product.id, qty)}
              className="min-h-12 rounded-xl2 bg-accent px-5 py-3 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90"
            >
              Add to cart — {formatGBP(total)}
            </button>
          </div>

          <Link href="/cart" className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-xl2 border border-white/15 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/15">
            View cart and checkout
          </Link>

          {hasTestReport ? (
            <a
              href={product.coa}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-xl2 border border-amber-300/35 bg-amber-300/10 px-5 py-3 text-sm font-extrabold text-amber-200 transition hover:bg-amber-300/15"
            >
              View Alluvi Test Report
            </a>
          ) : null}

          <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 text-sm sm:grid-cols-3">
            <div><div className="font-extrabold">Tracked dispatch</div><div className="mt-1 text-xs leading-5 text-white/55">Order updates provided</div></div>
            <div><div className="font-extrabold">Free UK delivery</div><div className="mt-1 text-xs leading-5 text-white/55">Selected international delivery</div></div>
            <div><div className="font-extrabold">Secure card checkout</div><div className="mt-1 text-xs leading-5 text-white/55">Processed securely through Stripe</div></div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <>
      <aside className="relative z-10 h-fit rounded-xl3 border border-line bg-white/95 p-5 shadow-soft backdrop-blur">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">
              Price
            </div>
            <div className="mt-2 text-4xl font-extrabold tracking-tight text-ink">
              {formatGBP(product.priceGBP)}
            </div>
            <div className="mt-1 text-sm font-semibold text-muted">
              {product.pack}
            </div>
          </div>

          <div className="rounded-full border border-line bg-panel px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-ink">
            {product.id === "retatrutide" ? "Flagship line" : "Research supply"}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <div
            className={
              "rounded-full px-3 py-1 text-xs font-extrabold " +
              (inStock
                ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border border-red-200 bg-red-50 text-red-700")
            }
          >
            {product.availabilityLabel ?? (inStock ? "In stock — ready to order" : "Sold out")}
          </div>

          <div className="trust-pill">
            {product.id === "retatrutide" ? "Retatrutide 40mg" : "Research supply"}
          </div>
          <div className="trust-pill">Tracked UK dispatch</div>
          <div className="trust-pill">Secure card checkout</div>
          {hasTestReport ? (
            <div className="premium-badge">Test report available</div>
          ) : null}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_1fr]">
          <div className="rounded-xl2 border border-line bg-panel p-4">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">
              Quantity
            </div>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                disabled={!inStock}
                className={
                  "h-11 w-11 rounded-xl2 border border-line text-lg font-extrabold transition " +
                  (inStock
                    ? "bg-white text-ink hover:bg-panel"
                    : "cursor-not-allowed bg-white text-muted/50")
                }
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>

              <input
                className={
                  "h-11 w-16 rounded-xl2 border border-line text-center text-base font-extrabold outline-none " +
                  (inStock
                    ? "bg-white text-ink focus:ring-2 focus:ring-accent/20"
                    : "bg-white text-muted/50")
                }
                value={qty}
                disabled={!inStock}
                onChange={(e) => {
                  const n = Number(e.target.value);
                  if (Number.isFinite(n)) {
                    setQty(Math.min(99, Math.max(1, Math.floor(n))));
                  }
                }}
                inputMode="numeric"
              />

              <button
                type="button"
                disabled={!inStock}
                className={
                  "h-11 w-11 rounded-xl2 border border-line text-lg font-extrabold transition " +
                  (inStock
                    ? "bg-white text-ink hover:bg-panel"
                    : "cursor-not-allowed bg-white text-muted/50")
                }
                onClick={() => setQty((q) => Math.min(99, q + 1))}
              >
                +
              </button>
            </div>
          </div>

          <div className="rounded-xl2 border border-line bg-panel p-4">
            <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">
              Order total
            </div>
            <div className="mt-4 text-2xl font-extrabold tracking-tight text-ink">
              {formatGBP(total)}
            </div>
          </div>
        </div>

        {orderByEnquiry ? (
          <a
            href={orderSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full justify-center rounded-xl2 bg-accent px-4 py-3.5 text-sm font-extrabold text-white shadow-soft transition hover:bg-accent/90"
          >
            Enquire about availability
          </a>
        ) : (
          <button
            type="button"
            disabled={!inStock}
            className={
              "mt-4 w-full rounded-xl2 px-4 py-3.5 text-sm font-extrabold shadow-soft transition " +
              (inStock
                ? "bg-accent text-white hover:bg-accent/90"
                : "cursor-not-allowed bg-red-100 text-red-700")
            }
            onClick={() => {
              if (inStock) addToCart(product.id, qty);
            }}
          >
            {inStock ? "Add to basket" : (product.availabilityLabel ?? "Sold out")}
          </button>
        )}

        {inStock ? (
          <div className="mt-2 text-center text-xs font-semibold text-muted">
            Research-use-only supply · tracked dispatch · order updates by email
          </div>
        ) : null}

        {!orderByEnquiry ? (
          <Link
            href="/cart"
            className="mt-3 inline-flex w-full justify-center rounded-xl2 border border-line bg-white px-4 py-3 text-sm font-extrabold text-ink shadow-soft transition hover:bg-panel"
          >
            Go to cart / checkout
          </Link>
        ) : null}

        {product.id === "retatrutide" ? (
          <a
            href={SUPPORT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full justify-center rounded-xl2 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-extrabold text-emerald-900 shadow-soft transition hover:bg-emerald-100"
          >
            Ask a question before ordering
          </a>
        ) : null}

        <div className="mt-4 grid gap-2 text-sm text-muted">
          <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
            {orderByEnquiry
              ? "Contact support to confirm availability before ordering"
              : "Continue to our secure Stripe card checkout."}
          </div>
          <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
            Stripe secure card checkout
          </div>
          <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
            Free UK delivery / £25 selected international delivery
          </div>
          <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
            Tracked dispatch and order status updates
          </div>
        </div>

        {product.quickFacts?.length ? (
          <div className="mt-4 grid gap-2">
            {product.quickFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink"
              >
                {fact}
              </div>
            ))}
          </div>
        ) : null}

        {hasTestReport ? (
          <a
            href={product.coa}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex w-full justify-center rounded-xl2 border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-extrabold text-amber-900 shadow-soft transition hover:bg-amber-100"
          >
            View Test Report
          </a>
        ) : null}

        <div className="mt-4 rounded-xl2 border border-line bg-panel p-4 text-xs leading-6 text-muted">
          Need product quality information before ordering? Review the quality
          information page or contact support before checkout.
        </div>

        {product.id === "retatrutide" ? (
          <div className="mt-4 rounded-xl2 border border-line bg-white p-4">
            <div className="text-sm font-extrabold text-ink">
              Retatrutide order support
            </div>

            <p className="mt-2 text-sm leading-6 text-muted">
              Check dispatch, quality information, and order status before or after checkout.
            </p>

            <div className="mt-4 grid gap-2">
              {retatrutideRelatedLinks.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl2 border border-line bg-panel p-3 text-sm shadow-soft transition hover:bg-white"
                >
                  <div className="font-extrabold text-ink">
                    {item.label} →
                  </div>
                  <div className="mt-1 text-xs leading-5 text-muted">
                    {item.copy}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </aside>

      {inStock ? (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 shadow-lift backdrop-blur lg:hidden">
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-extrabold text-ink">
                {product.name}
              </div>
              <div className="text-xs text-muted">
                {formatGBP(total)} · research order
              </div>
            </div>
            {orderByEnquiry ? (
              <a
                href={orderSupportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl2 bg-accent px-4 py-3 text-sm font-extrabold text-white shadow-soft"
              >
                Enquire
              </a>
            ) : (
              <button
                type="button"
                onClick={() => addToCart(product.id, qty)}
                className="rounded-xl2 bg-accent px-4 py-3 text-sm font-extrabold text-white shadow-soft"
              >
                Add
              </button>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}