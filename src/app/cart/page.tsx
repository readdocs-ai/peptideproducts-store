"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { CartItem, cartTotalGBP, clearCart, formatGBP, readCart, setQty } from "@/lib/cart";

const UK_SHIPPING_FEE_GBP = 0;
const INTERNATIONAL_SHIPPING_FEE_GBP = 25.0;
const WHATSAPP_NUMBER = "447429098887";

const ENQUIRY_ONLY_PRODUCT_IDS = new Set([
  "reta-research-compound-10mg-vial",
  "reta-research-compound-20mg-vial",
  "reta-research-compound-40mg-vial",
  "retatrutide-research-compound-10mg-vial",
  "retatrutide-research-compound-20mg-vial",
  "retatrutide-research-compound-40mg-vial",
]);

const COUNTRY_OPTIONS = [
  { value: "GB", label: "United Kingdom" },
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "AU", label: "Australia" },
  { value: "NZ", label: "New Zealand" },
  { value: "IE", label: "Ireland" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "ES", label: "Spain" },
  { value: "IT", label: "Italy" },
  { value: "NL", label: "Netherlands" },
  { value: "BE", label: "Belgium" },
  { value: "SE", label: "Sweden" },
  { value: "NO", label: "Norway" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "DK", label: "Denmark" },
  { value: "CH", label: "Switzerland" },
  { value: "AT", label: "Austria" },
  { value: "PT", label: "Portugal" },
] as const;

function isUkCountry(country: string) {
  return country.trim().toUpperCase() === "GB";
}

function roundGBP(value: number) {
  return Math.round(value * 100) / 100;
}

function isPromoEligibleProduct(productId: string) {
  return !productId.toLowerCase().includes("retatrutide");
}

function getPromoDiscountGBP(rows: Array<{ item: CartItem; product: (typeof products)[number] | undefined }>) {
  const eligibleUnitPrices: number[] = [];
  for (const row of rows) {
    if (!row.product || !isPromoEligibleProduct(row.product.id)) continue;
    for (let index = 0; index < row.item.qty; index += 1) {
      eligibleUnitPrices.push(row.product.priceGBP);
    }
  }
  return eligibleUnitPrices.length >= 3 ? roundGBP(Math.min(...eligibleUnitPrices)) : 0;
}

function getWhatsAppHref(country: string, total: number) {
  const selectedCountry =
    COUNTRY_OPTIONS.find((option) => option.value === country)?.label || country;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Peptide Products, I need help before ordering. My cart total is ${formatGBP(
      total
    )} and my shipping country is ${selectedCountry}.`
  )}`;
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M16.02 3.2A12.72 12.72 0 0 0 5.06 22.38L3.6 28.8l6.54-1.54A12.72 12.72 0 1 0 16.02 3.2Zm0 23.16a10.42 10.42 0 0 1-5.32-1.46l-.38-.22-3.88.92.86-3.8-.25-.39a10.43 10.43 0 1 1 8.97 4.95Zm5.72-7.8c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

function ConfidenceCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-xl2 border border-line bg-panel p-4">
      <div className="text-sm font-extrabold text-ink">{title}</div>
      <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
    </div>
  );
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [country, setCountry] = useState("GB");

  useEffect(() => {
    const sync = () => setItems(readCart());
    sync();
    window.addEventListener("pp-cart", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("pp-cart", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const map = useMemo(() => new Map(products.map((p) => [p.id, p])), []);
  const rows = items
    .map((i) => ({ item: i, product: map.get(i.productId) }))
    .filter((x) => !!x.product);

  const subtotal = cartTotalGBP(items, products);
  const promoDiscount = getPromoDiscountGBP(rows);
  const discountedSubtotal = roundGBP(Math.max(0, subtotal - promoDiscount));
  const shipping =
    discountedSubtotal > 0
      ? isUkCountry(country)
        ? UK_SHIPPING_FEE_GBP
        : INTERNATIONAL_SHIPPING_FEE_GBP
      : 0;
  const total = roundGBP(discountedSubtotal + shipping);
  const hasEnquiryOnlyItems = rows.some(({ product }) =>
    product ? ENQUIRY_ONLY_PRODUCT_IDS.has(product.id) : true
  );
  const checkoutHelpHref = getWhatsAppHref(country, total);

  return (
    <div>
      <Header />
      <main className="py-8 lg:py-10">
        <Container>
          <div className="rounded-[2rem] border border-line bg-white/86 p-5 shadow-soft md:p-7">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="eyebrow">Cart & checkout</div>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                  Review your order before payment.
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
                  Check your products, quantities and delivery country, then continue to our simplified secure card checkout.
                </p>
              </div>

              {rows.length ? (
                <button
                  onClick={() => clearCart()}
                  className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Clear cart
                </button>
              ) : null}
            </div>
          </div>

          {rows.length === 0 ? (
            <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-stretch">
              <div className="rounded-[1.75rem] border border-line bg-white p-8 shadow-soft md:p-10">
                <div className="soft-label">Basket</div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                  Your basket is empty.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                  Add a research-use-only product to continue. Retatrutide 40mg, peptide pens UK, and other laboratory research products can be reviewed before checkout.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/product/retatrutide"
                    className="inline-flex rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    View Retatrutide 40mg
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-flex rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Browse products
                  </Link>
                </div>
              </div>

              <aside className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
                <div className="text-sm font-extrabold text-ink">Order confidence</div>
                <div className="mt-4 grid gap-2 text-sm text-muted">
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Secure card checkout</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Secure card checkout available</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Free UK shipping where available</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Order updates sent by email</div>
                </div>
                <a
                  href={getWhatsAppHref(country, 0)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl2 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  <WhatsAppIcon />
                  Ask before ordering
                </a>
              </aside>
            </section>
          ) : (
            <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_390px] xl:items-start">
              <div className="grid gap-5">
                <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="soft-label">Your basket</div>
                      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                        {rows.length} product{rows.length === 1 ? "" : "s"} ready for checkout
                      </h2>
                    </div>
                    <Link href="/shop" className="rounded-xl2 border border-line bg-panel px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-white">
                      Continue shopping
                    </Link>
                  </div>

                  <div className="mt-5 grid gap-4">
                    {rows.map(({ item, product }) => {
                      const p = product!;

                      return (
                        <div
                          key={p.id}
                          className="rounded-xl3 border border-line bg-panel p-4"
                        >
                          <div className="grid gap-4 md:grid-cols-[116px_minmax(0,1fr)] md:items-start">
                            <Link
                              href={`/product/${p.id}`}
                              className="relative h-28 w-full overflow-hidden rounded-xl2 border border-line bg-white md:h-28 md:w-28"
                            >
                              <Image
                                src={p.image}
                                alt={p.name}
                                fill
                                className="object-contain p-2"
                                sizes="116px"
                              />
                            </Link>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                  <div className="text-xs font-bold uppercase tracking-wide text-muted">
                                    {p.subtitle}
                                  </div>
                                  <Link
                                    href={`/product/${p.id}`}
                                    className="mt-1 block text-xl font-extrabold leading-tight text-ink hover:underline"
                                  >
                                    {p.name}
                                  </Link>
                                  <div className="mt-2 text-sm text-muted">{p.pack}</div>
                                </div>

                                <div className="text-right">
                                  <div className="text-xs font-bold uppercase tracking-wide text-muted">
                                    Line total
                                  </div>
                                  <div className="mt-1 text-xl font-extrabold text-ink">
                                    {formatGBP(p.priceGBP * item.qty)}
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted">
                                  <span className="trust-pill">Unit price: {formatGBP(p.priceGBP)}</span>
                                  {p.coa ? <span className="premium-badge">Test report available</span> : null}
                                </div>

                                <div className="flex items-center gap-2">
                                  <button
                                    className="flex h-10 w-10 items-center justify-center rounded-xl2 border border-line bg-white text-lg font-extrabold text-ink hover:bg-panel"
                                    onClick={() => setQty(p.id, Math.max(0, item.qty - 1))}
                                    aria-label={`Decrease quantity of ${p.name}`}
                                  >
                                    −
                                  </button>
                                  <div className="flex h-10 min-w-[56px] items-center justify-center rounded-xl2 border border-line bg-white px-4 text-sm font-extrabold text-ink">
                                    {item.qty}
                                  </div>
                                  <button
                                    className="flex h-10 w-10 items-center justify-center rounded-xl2 border border-line bg-white text-lg font-extrabold text-ink hover:bg-panel"
                                    onClick={() => setQty(p.id, Math.min(99, item.qty + 1))}
                                    aria-label={`Increase quantity of ${p.name}`}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <ConfidenceCard
                    title="Check product details"
                    copy="Review product names, pack sizes and quantities before checkout."
                  />
                  <ConfidenceCard
                    title="Checkout next"
                    copy="Continue to checkout to place your order. Payment instructions will be shown before you complete payment."
                  />
                  <ConfidenceCard
                    title="Order updates"
                    copy="Order confirmations and updates are sent by email after checkout."
                  />
                </div>

                <div className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft md:p-6">
                  <div className="soft-label">Before checkout</div>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl2 border border-line bg-panel p-4">
                      <div className="text-sm font-extrabold text-ink">Research-use-only notice</div>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        Products are supplied for laboratory research use only and are not supplied for human, veterinary, clinical or treatment use.
                      </p>
                    </div>
                    <div className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-4">
                      <div className="text-sm font-extrabold text-emerald-950">Need help before ordering?</div>
                      <p className="mt-2 text-sm leading-6 text-emerald-800">
                        Message us before checkout for help with payment, delivery, international shipping or order tracking.
                      </p>
                      <a
                        href={getWhatsAppHref(country, total)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl2 bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                      >
                        <WhatsAppIcon />
                        WhatsApp support
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="h-fit rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
                <div className="text-2xl font-extrabold text-ink">Order summary</div>

                <div className="mt-6">
                  <label className="block text-sm font-extrabold text-ink">
                    Shipping country
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="mt-3 w-full rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-accent"
                  >
                    {COUNTRY_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-muted">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-extrabold text-ink">{formatGBP(subtotal)}</span>
                  </div>
                  {promoDiscount > 0 ? (
                    <div className="flex justify-between text-emerald-700">
                      <span>Promotion</span>
                      <span className="font-extrabold">−{formatGBP(promoDiscount)}</span>
                    </div>
                  ) : null}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-extrabold text-ink">
                      {shipping > 0 ? formatGBP(shipping) : "Free"}
                    </span>
                  </div>
                  <div className="my-1 h-px bg-line" />
                  <div className="flex justify-between text-base">
                    <span className="font-extrabold text-ink">Total</span>
                    <span className="font-extrabold text-ink">{formatGBP(total)}</span>
                  </div>
                </div>

                <div className="mt-3 rounded-xl2 border border-line bg-panel p-4 text-xs leading-5 text-muted">
                  {isUkCountry(country)
                    ? "Free UK shipping. Delivery details are confirmed during checkout."
                    : "International shipping is charged at £25.00. Delivery details are confirmed during checkout."}
                </div>

                {hasEnquiryOnlyItems ? (
                  <a
                    href={checkoutHelpHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full justify-center rounded-xl2 bg-accent px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Enquire about availability
                  </a>
                ) : (
                  <Link
                    href="/checkout"
                    className="mt-5 inline-flex w-full justify-center rounded-xl2 bg-accent px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Continue to secure checkout
                  </Link>
                )}

                <div className="mt-5 grid gap-2 text-sm text-muted">
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                    {hasEnquiryOnlyItems
                      ? "Contact support to confirm availability before ordering"
                      : "Secure card payment continues through Stripe."}
                  </div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                    Free UK shipping / £25.00 international
                  </div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                    Tracked dispatch and order status updates
                  </div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                    Card details are entered securely on Stripe
                  </div>
                </div>

                <div className="mt-5 rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">What happens next?</div>
                  <div className="mt-3 grid gap-2 text-sm text-muted">
                    <div>1. Continue to checkout and enter delivery details</div>
                    <div>2. Continue to Stripe secure payment</div>
                    <div>3. Confirm your card payment securely</div>
                  </div>
                </div>

              </aside>
            </section>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm">
            <Link href="/shop" className="font-extrabold text-ink/80 hover:text-ink">
              ← Continue shopping
            </Link>
            {rows.length > 0 ? (
              <Link href="/checkout" className="font-extrabold text-ink hover:underline">
                Continue to checkout →
              </Link>
            ) : null}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}