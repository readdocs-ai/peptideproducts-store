"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
<<<<<<< HEAD
import { CartItem, cartTotalGBP, clearCart, formatGBP, readCart, setQty } from "@/lib/cart";
=======
import {
  CartItem,
  cartTotalGBP,
  clearCart,
  formatGBP,
  readCart,
  setQty,
} from "@/lib/cart";
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
<<<<<<< HEAD
  const rows = items.map((i) => ({ item: i, product: map.get(i.productId) })).filter((x) => !!x.product);
=======
  const rows = items
    .map((i) => ({ item: i, product: map.get(i.productId) }))
    .filter((x) => !!x.product);

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
  const subtotal = cartTotalGBP(items, products);
  const total = subtotal;

  const handleStripeCheckout = async () => {
    try {
      setLoading(true);
      setError(null);
<<<<<<< HEAD
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
=======

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const data = await res.json();

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      if (data.url) {
        window.location.href = data.url;
        return;
      }
<<<<<<< HEAD
=======

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      setError(data.error || "Unable to start checkout.");
    } catch {
      setError("Unable to start checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
<<<<<<< HEAD
=======

>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
      <main className="py-10 lg:py-12">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
<<<<<<< HEAD
              <div className="eyebrow">Cart & checkout</div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">Review your order before payment.</h1>
              <p className="mt-2 text-sm text-muted">Card payment uses secure Stripe checkout. Bank transfer and cryptocurrency options remain available if preferred.</p>
            </div>

            {items.length ? (
              <button onClick={() => clearCart()} className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
=======
              <h1 className="text-3xl font-extrabold tracking-tight text-ink">
                Cart
              </h1>
              <p className="mt-2 text-sm text-muted">
                Review your items and choose your checkout method.
              </p>
            </div>

            {items.length ? (
              <button
                onClick={() => clearCart()}
                className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                Clear cart
              </button>
            ) : null}
          </div>

          {rows.length === 0 ? (
            <div className="mt-10 rounded-[1.75rem] border border-line bg-white p-8 shadow-soft">
<<<<<<< HEAD
              <div className="text-lg font-extrabold text-ink">Cart is empty</div>
              <div className="mt-2 text-sm text-muted">Add products to begin.</div>
              <Link href="/shop" className="mt-6 inline-flex rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90">Browse products</Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
=======
              <div className="text-lg font-extrabold text-ink">
                Cart is empty
              </div>
              <div className="mt-2 text-sm text-muted">
                Add products to begin.
              </div>
              <Link
                href="/shop"
                className="mt-6 inline-flex rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse products
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
              <div className="space-y-4">
                {rows.map(({ item, product }) => {
                  const p = product!;
                  return (
<<<<<<< HEAD
                    <div key={p.id} className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft">
                      <div className="grid gap-5 md:grid-cols-[112px_minmax(0,1fr)_180px] md:items-center">
                        <div className="relative h-28 w-28 overflow-hidden rounded-xl2 border border-line bg-panel">
                          <Image src={p.image} alt={p.name} fill className="object-cover" sizes="112px" />
                        </div>

                        <div className="min-w-0">
                          <div className="text-xs font-bold uppercase tracking-wide text-muted">{p.subtitle}</div>
                          <div className="mt-1 text-2xl font-extrabold leading-tight text-ink">{p.name}</div>
                          <div className="mt-2 text-sm text-muted">{p.pack}</div>
                          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-muted">
                            <span className="trust-pill">Unit price: {formatGBP(p.priceGBP)}</span>
                            {p.coa ? <span className="premium-badge">Documentation</span> : null}
=======
                    <div
                      key={p.id}
                      className="rounded-[1.75rem] border border-line bg-white p-5 shadow-soft"
                    >
                      <div className="grid gap-5 md:grid-cols-[112px_minmax(0,1fr)_160px] md:items-center">
                        <div className="relative h-28 w-28 overflow-hidden rounded-xl2 border border-line bg-panel">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-cover"
                            sizes="112px"
                          />
                        </div>

                        <div className="min-w-0">
                          <div className="text-xs font-bold uppercase tracking-wide text-muted">
                            {p.subtitle}
                          </div>
                          <div className="mt-1 text-2xl font-extrabold leading-tight text-ink">
                            {p.name}
                          </div>
                          <div className="mt-2 text-sm text-muted">
                            {p.pack}
                          </div>
                          <div className="mt-4 inline-flex rounded-full border border-line bg-panel px-3 py-1 text-xs font-semibold text-muted">
                            Unit price: {formatGBP(p.priceGBP)}
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 md:items-end">
<<<<<<< HEAD
                          <div className="text-lg font-extrabold text-ink">{formatGBP(p.priceGBP * item.qty)}</div>
                          <div className="flex items-center gap-2">
                            <button className="flex h-10 w-10 items-center justify-center rounded-xl2 border border-line bg-white text-lg font-extrabold text-ink hover:bg-panel" onClick={() => setQty(p.id, Math.max(0, item.qty - 1))} aria-label={`Decrease quantity of ${p.name}`}>−</button>
                            <div className="flex h-10 min-w-[56px] items-center justify-center rounded-xl2 border border-line bg-panel px-4 text-sm font-extrabold text-ink">{item.qty}</div>
                            <button className="flex h-10 w-10 items-center justify-center rounded-xl2 border border-line bg-white text-lg font-extrabold text-ink hover:bg-panel" onClick={() => setQty(p.id, Math.min(99, item.qty + 1))} aria-label={`Increase quantity of ${p.name}`}>+</button>
=======
                          <div className="text-lg font-extrabold text-ink">
                            {formatGBP(p.priceGBP * item.qty)}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              className="flex h-10 w-10 items-center justify-center rounded-xl2 border border-line bg-white text-lg font-extrabold text-ink hover:bg-panel"
                              onClick={() => setQty(p.id, Math.max(0, item.qty - 1))}
                              aria-label={`Decrease quantity of ${p.name}`}
                            >
                              −
                            </button>

                            <div className="flex h-10 min-w-[56px] items-center justify-center rounded-xl2 border border-line bg-panel px-4 text-sm font-extrabold text-ink">
                              {item.qty}
                            </div>

                            <button
                              className="flex h-10 w-10 items-center justify-center rounded-xl2 border border-line bg-white text-lg font-extrabold text-ink hover:bg-panel"
                              onClick={() => setQty(p.id, Math.min(99, item.qty + 1))}
                              aria-label={`Increase quantity of ${p.name}`}
                            >
                              +
                            </button>
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

<<<<<<< HEAD
              <aside className="h-fit rounded-[1.75rem] border border-line bg-white p-6 shadow-soft lg:sticky lg:top-28">
                <div className="text-2xl font-extrabold text-ink">Summary</div>
                <div className="mt-6 grid gap-3 text-sm text-muted">
                  <div className="flex justify-between"><span>Subtotal</span><span className="font-extrabold text-ink">{formatGBP(subtotal)}</span></div>
                  <div className="flex justify-between"><span>Shipping</span><span className="font-extrabold text-ink">Free</span></div>
                  <div className="my-1 h-px bg-line" />
                  <div className="flex justify-between text-base"><span className="font-extrabold text-ink">Total</span><span className="font-extrabold text-ink">{formatGBP(total)}</span></div>
                </div>

                <div className="mt-6 grid gap-2 text-sm text-muted">
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Secure Stripe checkout for card payments</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Alternative bank transfer or crypto checkout available</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Quality page available for documentation review</div>
                </div>

                <button onClick={handleStripeCheckout} disabled={loading} className="mt-6 inline-flex w-full justify-center rounded-xl2 bg-accent px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-accent/40">
                  {loading ? "Redirecting..." : "Pay securely by card"}
                </button>

                <Link href="/checkout" className="mt-3 inline-flex w-full justify-center rounded-xl2 border border-line bg-white px-4 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
                  Bank transfer / crypto checkout
                </Link>
                <Link href="/quality-assurance" className="mt-3 inline-flex w-full justify-center rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-white">
                  Review quality & documentation
                </Link>

                {error ? <div className="mt-3 text-sm font-semibold text-red-600">{error}</div> : null}
=======
              <aside className="h-fit rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
                <div className="text-2xl font-extrabold text-ink">Summary</div>

                <div className="mt-6 grid gap-3 text-sm text-muted">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-extrabold text-ink">
                      {formatGBP(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-extrabold text-ink">Free</span>
                  </div>
                  <div className="my-1 h-px bg-line" />
                  <div className="flex justify-between text-base">
                    <span className="font-extrabold text-ink">Total</span>
                    <span className="font-extrabold text-ink">
                      {formatGBP(total)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
                  Card payments use secure Stripe checkout. Bank transfer and
                  cryptocurrency orders can be placed through the alternative checkout
                  page.
                </div>

                <button
                  onClick={handleStripeCheckout}
                  disabled={loading}
                  className="mt-6 inline-flex w-full justify-center rounded-xl2 bg-accent px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90 disabled:cursor-not-allowed disabled:bg-accent/40"
                >
                  {loading ? "Redirecting..." : "Pay securely by card"}
                </button>

                <Link
                  href="/checkout"
                  className="mt-3 inline-flex w-full justify-center rounded-xl2 border border-line bg-white px-4 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                >
                  Bank transfer / crypto checkout
                </Link>

                {error ? (
                  <div className="mt-3 text-sm font-semibold text-red-600">
                    {error}
                  </div>
                ) : null}
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
              </aside>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between text-sm">
<<<<<<< HEAD
            <Link href="/shop" className="font-extrabold text-ink/80 hover:text-ink">← Continue shopping</Link>
            {rows.length > 0 ? <Link href="/checkout" className="font-extrabold text-ink hover:underline">Alternative checkout →</Link> : <span className="font-extrabold text-muted"> </span>}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
=======
            <Link
              href="/shop"
              className="font-extrabold text-ink/80 hover:text-ink"
            >
              ← Continue shopping
            </Link>

            {rows.length > 0 ? (
              <Link
                href="/checkout"
                className="font-extrabold text-ink hover:underline"
              >
                Alternative checkout →
              </Link>
            ) : (
              <span className="font-extrabold text-muted"> </span>
            )}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
