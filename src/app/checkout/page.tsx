"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { clearCart, formatGBP, readCart } from "@/lib/cart";
import type { StoredOrderItem } from "@/lib/orders";

export default function Checkout() {
  const cart = useMemo(() => readCart(), []);
  const productMap = useMemo(() => new Map(products.map((product) => [product.id, product])), []);

  const orderItems = useMemo(() => {
    return cart
      .map((cartItem) => {
        const product = productMap.get(cartItem.productId);
        if (!product) return null;

        return {
          id: product.id,
          name: product.name,
          qty: cartItem.qty,
          priceGBP: product.priceGBP,
          image: product.image,
          pack: product.pack,
          subtitle: product.subtitle,
        };
      })
      .filter(Boolean) as Array<StoredOrderItem & { image: string; pack: string; subtitle: string }>;
  }, [cart, productMap]);

  const subtotal = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.priceGBP * item.qty, 0),
    [orderItems]
  );
  const shipping = 0;
  const total = subtotal;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  const canPlace = !submitting && subtotal > 0 && name.trim().length > 1 && email.trim().length > 3;

  async function placeOrder() {
    if (!canPlace) return;

    setSubmitting(true);
    setError(null);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        shippingRegion: "UK" as const,
        subtotal,
        shipping,
        total,
        items: orderItems.map(({ id, name: itemName, qty, priceGBP }) => ({
          id,
          name: itemName,
          qty,
          priceGBP,
        })),
      };

      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setError(data?.error || "Unable to save your order right now.");
        return;
      }

      clearCart();
      setOrderId(data.orderId);
    } catch {
      setError("Unable to save your order right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-line bg-white p-8 shadow-soft lg:p-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink">Checkout</h1>
            <p className="mt-2 text-sm text-muted">Review your order details and complete your order.</p>

            {orderId ? (
              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="rounded-xl2 border border-line bg-panel p-6">
                  <div className="text-2xl font-extrabold text-ink">Order saved</div>
                  <div className="mt-3 text-sm text-muted">
                    Order reference: <span className="font-extrabold text-ink">{orderId}</span>
                  </div>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-6">
                  <div className="text-lg font-extrabold text-ink">Summary</div>
                  <div className="mt-4 grid gap-2 text-sm text-muted">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-extrabold text-ink">{formatGBP(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-extrabold text-ink">Free</span>
                    </div>
                    <div className="my-1 h-px bg-line" />
                    <div className="flex justify-between text-base">
                      <span className="font-extrabold text-ink">Total</span>
                      <span className="font-extrabold text-ink">{formatGBP(total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-extrabold text-ink">Full name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-3 w-full rounded-xl2 border border-line bg-panel px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-extrabold text-ink">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-3 w-full rounded-xl2 border border-line bg-panel px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="rounded-xl2 border border-line bg-panel p-5">
                    <div className="text-lg font-extrabold text-ink">Items ordered</div>
                    {orderItems.length === 0 ? (
                      <div className="mt-4 text-sm text-muted">Your cart is empty.</div>
                    ) : (
                      <div className="mt-4 space-y-4">
                        {orderItems.map((item) => (
                          <div
                            key={item.id}
                            className="grid gap-4 rounded-xl2 border border-line bg-white p-4 sm:grid-cols-[88px_minmax(0,1fr)_120px] sm:items-center"
                          >
                            <div className="relative h-20 w-20 overflow-hidden rounded-xl2 border border-line bg-panel">
                              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold uppercase tracking-wide text-muted">{item.subtitle}</div>
                              <div className="mt-1 text-lg font-extrabold leading-tight text-ink">{item.name}</div>
                              <div className="mt-1 text-sm text-muted">{item.pack}</div>
                              <div className="mt-2 text-sm text-muted">Quantity: {item.qty}</div>
                            </div>
                            <div className="text-left text-sm font-extrabold text-ink sm:text-right">
                              {formatGBP(item.priceGBP * item.qty)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <aside className="h-fit rounded-xl2 border border-line bg-panel p-6">
                  <div className="text-lg font-extrabold text-ink">Summary</div>
                  <div className="mt-4 grid gap-2 text-sm text-muted">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-extrabold text-ink">{formatGBP(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-extrabold text-ink">Free</span>
                    </div>
                    <div className="my-1 h-px bg-line" />
                    <div className="flex justify-between text-base">
                      <span className="font-extrabold text-ink">Total</span>
                      <span className="font-extrabold text-ink">{formatGBP(total)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={placeOrder}
                    disabled={!canPlace}
                    className={
                      "mt-6 w-full rounded-xl2 px-4 py-3 text-sm font-extrabold text-white shadow-soft transition " +
                      (canPlace ? "bg-accent hover:bg-accent/90" : "cursor-not-allowed bg-accent/40")
                    }
                  >
                    {submitting ? "Saving order..." : "Place order"}
                  </button>

                  {error ? <div className="mt-3 text-sm font-semibold text-red-600">{error}</div> : null}
                </aside>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between text-sm">
              <Link href="/cart" className="font-extrabold text-ink/80 hover:text-ink">
                ← Back to cart
              </Link>
              <Link href="/shop" className="font-extrabold text-ink hover:underline">
                Continue shopping →
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}