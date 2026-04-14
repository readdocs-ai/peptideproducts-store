"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { clearCart, formatGBP, readCart } from "@/lib/cart";
import type { PaymentMethod, StoredOrderItem } from "@/lib/orders";
import CryptoAddressCard from "@/components/CryptoAddressCard";

const PAYMENT_DETAILS = {
  bank: {
    accountName: "Peptide Product Ltd",
    sortCode: "04-00-05",
    accountNumber: "77669398",
  },
  crypto: {
    btc: "bc1q7dn35crn5mrcnkf3mrru3h6yz0pdp8nnlungnn",
    eth: "0xaa71a932f86f59a19C1899968c3F0F852cFE93F4",
    usdtErc20: "0xaa71a932f86f59a19C1899968c3F0F852cFE93F4",
  },
};

const UK_SHIPPING_FEE_GBP = 0.00;
const INTERNATIONAL_SHIPPING_FEE_GBP = 14.99;

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
  { value: "DK", label: "Denmark" },
  { value: "CH", label: "Switzerland" },
  { value: "AT", label: "Austria" },
  { value: "PT", label: "Portugal" },
] as const;

function isUkCountry(country: string) {
  return country.trim().toUpperCase() === "GB";
}

function getShippingRegion(country: string) {
  return isUkCountry(country) ? "UK" : "International";
}

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
          coa: product.coa,
        };
      })
      .filter(Boolean) as Array<
        StoredOrderItem & {
          image: string;
          pack: string;
          subtitle: string;
          coa?: string;
        }
      >;
  }, [cart, productMap]);

  const subtotal = useMemo(
    () => orderItems.reduce((sum, item) => sum + item.priceGBP * item.qty, 0),
    [orderItems]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("bank_transfer");

  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("GB");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [savedPaymentMethod, setSavedPaymentMethod] = useState<PaymentMethod>("bank_transfer");

  const shipping = subtotal > 0
    ? isUkCountry(country)
      ? UK_SHIPPING_FEE_GBP
      : INTERNATIONAL_SHIPPING_FEE_GBP
    : 0;

  const shippingRegion = getShippingRegion(country);
  const total = subtotal + shipping;

  const canPlace =
    !submitting &&
    subtotal > 0 &&
    name.trim().length > 1 &&
    email.trim().length > 3 &&
    addressLine1.trim().length > 3 &&
    city.trim().length > 1 &&
    postalCode.trim().length > 2 &&
    country.trim().length === 2;

  async function placeOrder() {
    if (!canPlace) return;
    setSubmitting(true);
    setError(null);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        shippingRegion,
        shippingAddress: {
          line1: addressLine1.trim(),
          line2: addressLine2.trim(),
          city: city.trim(),
          state: stateRegion.trim(),
          postalCode: postalCode.trim(),
          country: country.trim().toUpperCase(),
        },
        subtotal,
        shipping,
        total,
        paymentMethod,
        items: orderItems.map(({ id, name: itemName, qty, priceGBP }) => ({
          id,
          name: itemName,
          qty,
          priceGBP,
        })),
      };

      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok) {
        setError(data?.error || "Unable to save your order right now.");
        return;
      }

      clearCart();
      setOrderId(data.orderId);
      setSavedPaymentMethod(data.paymentMethod || paymentMethod);
    } catch {
      setError("Unable to save your order right now.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Header />
      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-line bg-white p-6 shadow-soft lg:p-10">
            <div className="eyebrow">Alternative checkout</div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">
              Bank transfer or cryptocurrency checkout.
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-muted">
              Use this page for bank transfer or cryptocurrency orders. For card payment,
              return to cart and use the secure Stripe checkout button.
            </p>

            {orderId ? (
              <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="rounded-xl2 border border-line bg-panel p-6">
                  <div className="text-2xl font-extrabold text-ink">Order received</div>
                  <div className="mt-3 text-sm text-muted">Order reference</div>
                  <div className="mt-2 text-3xl font-extrabold tracking-tight text-accent">
                    {orderId}
                  </div>
                  <div className="mt-3 text-sm text-muted">
                    Payment method:{" "}
                    <span className="font-extrabold text-ink">
                      {savedPaymentMethod === "bank_transfer" ? "Bank Transfer" : "Cryptocurrency"}
                    </span>
                  </div>

                  {savedPaymentMethod === "bank_transfer" ? (
                    <div className="mt-6 rounded-xl2 border border-line bg-white p-5">
                      <div className="text-lg font-extrabold text-ink">
                        Bank transfer instructions
                      </div>
                      <div className="mt-4 grid gap-2 text-sm text-muted">
                        <div>
                          <span className="font-extrabold text-ink">Amount due:</span>{" "}
                          {formatGBP(total)}
                        </div>
                        <div>
                          <span className="font-extrabold text-ink">Account name:</span>{" "}
                          {PAYMENT_DETAILS.bank.accountName}
                        </div>
                        <div>
                          <span className="font-extrabold text-ink">Sort code:</span>{" "}
                          {PAYMENT_DETAILS.bank.sortCode}
                        </div>
                        <div>
                          <span className="font-extrabold text-ink">Account number:</span>{" "}
                          {PAYMENT_DETAILS.bank.accountNumber}
                        </div>
                        <div>
                          <span className="font-extrabold text-ink">Reference:</span> {orderId}
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-muted">
                        Please use your order number as the payment reference. Your order
                        will be processed once payment is received.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 rounded-xl2 border border-line bg-white p-5">
                      <div className="text-lg font-extrabold text-ink">
                        Cryptocurrency instructions
                      </div>
                      <div className="mt-3 text-sm text-muted">
                        Please send <span className="font-extrabold text-ink">{formatGBP(total)}</span>{" "}
                        using one of the options below.
                      </div>
                      <div className="mt-3 text-sm text-muted">
                        Use your order number as the payment reference:{" "}
                        <span className="font-extrabold text-ink">{orderId}</span>
                      </div>
                      <div className="mt-5 space-y-4">
                        <CryptoAddressCard label="Bitcoin (BTC)" address={PAYMENT_DETAILS.crypto.btc} />
                        <CryptoAddressCard label="Ethereum (ETH)" address={PAYMENT_DETAILS.crypto.eth} />
                        <CryptoAddressCard
                          label="USDT (ERC20 only)"
                          address={PAYMENT_DETAILS.crypto.usdtErc20}
                          note="Only send USDT on the ERC20 network."
                        />
                      </div>
                      <p className="mt-4 text-sm text-muted">
                        Your order will be processed after payment is received and confirmed.
                      </p>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/order-status"
                      className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                    >
                      Check order status
                    </Link>
                    <Link
                      href="/shop"
                      className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                    >
                      Continue shopping
                    </Link>
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
                      <span className="font-extrabold text-ink">{formatGBP(shipping)}</span>
                    </div>
                    <div className="my-1 h-px bg-line" />
                    <div className="flex justify-between text-base">
                      <span className="font-extrabold text-ink">Total</span>
                      <span className="font-extrabold text-ink">{formatGBP(total)}</span>
                    </div>
                  </div>

                  <div className="mt-6 text-sm font-extrabold text-ink">Items ordered</div>
                  <div className="mt-3 space-y-3">
                    {orderItems.map((item) => (
                      <div key={item.id} className="rounded-xl2 border border-line bg-white p-3">
                        <div className="text-sm font-extrabold text-ink">{item.name}</div>
                        <div className="mt-1 text-xs text-muted">
                          Qty {item.qty} — {formatGBP(item.priceGBP * item.qty)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                <div className="space-y-6">
                  <div className="rounded-xl2 border border-line bg-panel p-5">
                    <div className="text-lg font-extrabold text-ink">Checkout summary</div>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      This page is for customers choosing bank transfer or cryptocurrency.
                      If you want to pay by card, return to your{" "}
                      <Link href="/cart" className="font-semibold text-ink hover:text-accent">
                        cart
                      </Link>{" "}
                      and use the secure Stripe checkout button.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href="/cart"
                        className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                      >
                        Return to cart
                      </Link>
                      <Link
                        href="/quality-assurance"
                        className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                      >
                        Review documentation
                      </Link>
                    </div>
                  </div>

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
                    <div className="text-lg font-extrabold text-ink">Shipping address</div>
                    <div className="mt-4 grid gap-4">
                      <div>
                        <label className="block text-sm font-extrabold text-ink">
                          Address line 1
                        </label>
                        <input
                          type="text"
                          value={addressLine1}
                          onChange={(e) => setAddressLine1(e.target.value)}
                          className="mt-3 w-full rounded-xl2 border border-line bg-white px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                          placeholder="House number and street"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-extrabold text-ink">
                          Address line 2
                        </label>
                        <input
                          type="text"
                          value={addressLine2}
                          onChange={(e) => setAddressLine2(e.target.value)}
                          className="mt-3 w-full rounded-xl2 border border-line bg-white px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                          placeholder="Apartment, suite, unit (optional)"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-extrabold text-ink">City</label>
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="mt-3 w-full rounded-xl2 border border-line bg-white px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                            placeholder="Town or city"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-extrabold text-ink">
                            County / State / Region
                          </label>
                          <input
                            type="text"
                            value={stateRegion}
                            onChange={(e) => setStateRegion(e.target.value)}
                            className="mt-3 w-full rounded-xl2 border border-line bg-white px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                            placeholder="Optional"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="block text-sm font-extrabold text-ink">
                            Postcode / ZIP
                          </label>
                          <input
                            type="text"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="mt-3 w-full rounded-xl2 border border-line bg-white px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                            placeholder="Postcode or ZIP code"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-extrabold text-ink">Country</label>
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="mt-3 w-full rounded-xl2 border border-line bg-white px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                          >
                            {COUNTRY_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl2 border border-line bg-panel p-5">
                    <div className="text-lg font-extrabold text-ink">Payment method</div>
                    <div className="mt-4 grid gap-3">
                      <label className="flex cursor-pointer items-start gap-3 rounded-xl2 border border-line bg-white p-4">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === "bank_transfer"}
                          onChange={() => setPaymentMethod("bank_transfer")}
                          className="mt-1"
                        />
                        <div>
                          <div className="text-sm font-extrabold text-ink">Bank transfer</div>
                          <div className="mt-1 text-sm text-muted">
                            Place your order now and pay by UK bank transfer.
                          </div>
                        </div>
                      </label>

                      <label className="flex cursor-pointer items-start gap-3 rounded-xl2 border border-line bg-white p-4">
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={paymentMethod === "crypto"}
                          onChange={() => setPaymentMethod("crypto")}
                          className="mt-1"
                        />
                        <div>
                          <div className="text-sm font-extrabold text-ink">Cryptocurrency</div>
                          <div className="mt-1 text-sm text-muted">
                            Place your order now and pay with BTC, ETH or USDT (ERC20 only).
                          </div>
                        </div>
                      </label>
                    </div>
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
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold uppercase tracking-wide text-muted">
                                {item.subtitle}
                              </div>
                              <div className="mt-1 text-lg font-extrabold leading-tight text-ink">
                                {item.name}
                              </div>
                              <div className="mt-1 text-sm text-muted">{item.pack}</div>
                              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted">
                                <span>Quantity: {item.qty}</span>
                                {item.coa ? <span className="premium-badge">Documentation</span> : null}
                              </div>
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

                <aside className="h-fit rounded-xl2 border border-line bg-panel p-6 lg:sticky lg:top-28">
                  <div className="text-lg font-extrabold text-ink">Summary</div>
                  <div className="mt-4 grid gap-2 text-sm text-muted">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-extrabold text-ink">{formatGBP(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-extrabold text-ink">{formatGBP(shipping)}</span>
                    </div>
                    <div className="my-1 h-px bg-line" />
                    <div className="flex justify-between text-base">
                      <span className="font-extrabold text-ink">Total</span>
                      <span className="font-extrabold text-ink">{formatGBP(total)}</span>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-muted">
                    {shippingRegion === "UK"
                      ? "UK delivery rate applied."
                      : "International delivery rate applied."}
                  </div>

                  <div className="mt-5 grid gap-2 text-sm text-muted">
                    <div className="rounded-xl2 border border-line bg-white px-4 py-3">
                      Order is saved before payment instructions are shown
                    </div>
                    <div className="rounded-xl2 border border-line bg-white px-4 py-3">
                      Card payment remains available via Stripe in cart
                    </div>
                    <div className="rounded-xl2 border border-line bg-white px-4 py-3">
                      Quality page available for certificate review
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

                  {error ? (
                    <div className="mt-3 text-sm font-semibold text-red-600">{error}</div>
                  ) : null}
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