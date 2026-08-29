"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { formatGBP, readCart } from "@/lib/cart";
import type { StoredOrderItem } from "@/lib/orders";

const UK_SHIPPING_FEE_GBP = 0;
const INTERNATIONAL_SHIPPING_FEE_GBP = 25;
const WHATSAPP_NUMBER = "447429098887";
const CHECKOUT_DETAILS_KEY = "pp_checkout_details_v2";
const CHECKOUT_ATTEMPT_KEY = "pp_checkout_attempt_v1";
const CHECKOUT_REUSE_WINDOW_MS = 20 * 60 * 1000;
const RESEARCH_DECLARATION_VERSION = "research-use-v1";

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
  { value: "DK", label: "Denmark" },
  { value: "CH", label: "Switzerland" },
  { value: "AT", label: "Austria" },
  { value: "PT", label: "Portugal" },
  { value: "SA", label: "Saudi Arabia" },
  { value: "AE", label: "United Arab Emirates" },
] as const;

type CheckoutDisplayItem = StoredOrderItem & {
  image: string;
  pack: string;
  subtitle: string;
  coa?: string;
};

type OrderApiResponse = {
  ok?: boolean;
  error?: string;
  orderId?: string;
  checkoutUrl?: string;
  subtotal?: number;
  shipping?: number;
  total?: number;
};

type SavedCheckoutAttempt = {
  fingerprint: string;
  checkoutUrl: string;
  orderId: string;
  createdAt: number;
};

type SavedCheckoutDetails = {
  name?: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  stateRegion?: string;
  postalCode?: string;
  country?: string;
  marketingOptIn?: boolean;
};

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
      <path d="M16.02 3.2A12.72 12.72 0 0 0 5.06 22.38L3.6 28.8l6.54-1.54A12.72 12.72 0 1 0 16.02 3.2Zm0 23.16a10.42 10.42 0 0 1-5.32-1.46l-.38-.22-3.88.92.86-3.8-.25-.39a10.43 10.43 0 1 1 8.97 4.95Zm5.72-7.8c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

function roundGBP(value: number) {
  return Math.round(value * 100) / 100;
}

function isUkCountry(country: string) {
  return country.trim().toUpperCase() === "GB";
}

function isPromoEligibleProduct(productId: string) {
  return !productId.toLowerCase().includes("retatrutide");
}

function getPromoDiscountGBP(items: StoredOrderItem[]) {
  const eligibleUnitPrices: number[] = [];
  for (const item of items) {
    if (!isPromoEligibleProduct(item.id)) continue;
    for (let index = 0; index < item.qty; index += 1) {
      eligibleUnitPrices.push(item.priceGBP);
    }
  }
  return eligibleUnitPrices.length >= 3 ? roundGBP(Math.min(...eligibleUnitPrices)) : 0;
}

function getHelpHref(country: string, total: number) {
  const selectedCountry =
    COUNTRY_OPTIONS.find((option) => option.value === country)?.label || country;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Peptide Products, I need help completing a card payment. My order total is ${formatGBP(
      total
    )} and my shipping country is ${selectedCountry}.`
  )}`;
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-extrabold text-ink">{children}</label>;
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
      .filter(Boolean) as CheckoutDisplayItem[];
  }, [cart, productMap]);

  const subtotal = useMemo(
    () => roundGBP(orderItems.reduce((sum, item) => sum + item.priceGBP * item.qty, 0)),
    [orderItems]
  );

  const enquiryOnlyItems = useMemo(
    () => orderItems.filter((item) => ENQUIRY_ONLY_PRODUCT_IDS.has(item.id)),
    [orderItems]
  );
  const hasEnquiryOnlyItems = enquiryOnlyItems.length > 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [researchUseAccepted, setResearchUseAccepted] = useState(false);
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [stateRegion, setStateRegion] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("GB");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentCancelled, setPaymentCancelled] = useState(false);
  const [detailsLoaded, setDetailsLoaded] = useState(false);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      setPaymentCancelled(params.get("payment") === "cancelled");

      const raw = window.localStorage.getItem(CHECKOUT_DETAILS_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as SavedCheckoutDetails;
        setName(saved.name || "");
        setEmail(saved.email || "");
        setPhone(saved.phone || "");
        setAddressLine1(saved.addressLine1 || "");
        setAddressLine2(saved.addressLine2 || "");
        setCity(saved.city || "");
        setStateRegion(saved.stateRegion || "");
        setPostalCode(saved.postalCode || "");
        setCountry(saved.country || "GB");
        setMarketingOptIn(saved.marketingOptIn === true);
      }
    } catch {
      // Saved checkout details are only a convenience; checkout still works without them.
    } finally {
      setDetailsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!detailsLoaded) return;

    const details: SavedCheckoutDetails = {
      name,
      email,
      phone,
      addressLine1,
      addressLine2,
      city,
      stateRegion,
      postalCode,
      country,
      marketingOptIn,
    };

    try {
      window.localStorage.setItem(CHECKOUT_DETAILS_KEY, JSON.stringify(details));
    } catch {
      // Ignore storage failures (private browsing / storage restrictions).
    }
  }, [
    detailsLoaded,
    name,
    email,
    phone,
    addressLine1,
    addressLine2,
    city,
    stateRegion,
    postalCode,
    country,
    marketingOptIn,
  ]);

  const promoDiscount = useMemo(() => getPromoDiscountGBP(orderItems), [orderItems]);
  const discountedSubtotal = roundGBP(Math.max(0, subtotal - promoDiscount));
  const shipping =
    discountedSubtotal > 0
      ? (isUkCountry(country) ? UK_SHIPPING_FEE_GBP : INTERNATIONAL_SHIPPING_FEE_GBP)
      : 0;
  const total = roundGBP(discountedSubtotal + shipping);
  const shippingRegion = isUkCountry(country) ? "UK" : "International";

  const formValid =
    name.trim().length > 1 &&
    email.trim().includes("@") &&
    phone.trim().length > 6 &&
    addressLine1.trim().length > 3 &&
    city.trim().length > 1 &&
    postalCode.trim().length > 2 &&
    country.trim().length === 2;

  const canSubmit =
    !submitting && !hasEnquiryOnlyItems && orderItems.length > 0 && total > 0 && researchUseAccepted;

  async function placeOrder() {
    if (!formValid) {
      setError("Please complete the required contact and delivery fields before continuing to payment.");
      return;
    }
    if (!canSubmit) return;

    setSubmitting(true);
    setError(null);

    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        marketingOptIn,
        researchUseAccepted,
        researchDeclarationVersion: RESEARCH_DECLARATION_VERSION,
        shippingRegion,
        shippingAddress: {
          line1: addressLine1.trim(),
          line2: addressLine2.trim(),
          city: city.trim(),
          state: stateRegion.trim(),
          postalCode: postalCode.trim(),
          country: country.trim().toUpperCase(),
        },
        items: orderItems.map(({ id, qty }) => ({ id, qty })),
      };

      const fingerprint = JSON.stringify(payload);

      // If the customer has just returned from Stripe without paying, reuse the
      // same still-live Checkout Session instead of creating another pending order.
      try {
        const rawAttempt = window.localStorage.getItem(CHECKOUT_ATTEMPT_KEY);
        if (rawAttempt) {
          const previous = JSON.parse(rawAttempt) as SavedCheckoutAttempt;
          const isRecent = Date.now() - previous.createdAt < CHECKOUT_REUSE_WINDOW_MS;
          if (isRecent && previous.fingerprint === fingerprint && previous.checkoutUrl) {
            window.location.assign(previous.checkoutUrl);
            return;
          }
        }
      } catch {
        // If storage is unavailable, create a normal fresh Stripe session.
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as OrderApiResponse;

      if (!response.ok || !data.ok || !data.orderId || !data.checkoutUrl) {
        setError(data.error || "We could not open the secure payment page. Please try again or message us for help.");
        return;
      }

      try {
        const attempt: SavedCheckoutAttempt = {
          fingerprint,
          checkoutUrl: data.checkoutUrl,
          orderId: data.orderId,
          createdAt: Date.now(),
        };
        window.localStorage.setItem(CHECKOUT_ATTEMPT_KEY, JSON.stringify(attempt));
      } catch {
        // Reuse is an optimisation only; checkout still works without storage.
      }

      // Keep the cart and contact details until Stripe confirms success.
      // If the customer presses Back or cancels, they can retry without starting over.
      window.location.assign(data.checkoutUrl);
    } catch {
      setError("We could not connect to the secure payment page. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Header />
      <main className="py-5 sm:py-8 lg:py-10">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft sm:p-6 lg:p-8">
              <div className="eyebrow">Secure card checkout</div>
              <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-4xl">
                Complete your details, then pay securely with Stripe.
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                One simple checkout. We collect your delivery details here, then Stripe opens securely for the final card payment. Your card details are never stored by Peptide Products.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink">1. Enter delivery details</div>
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink">2. Continue to Stripe</div>
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink">3. Confirm secure payment</div>
              </div>
            </div>

            {paymentCancelled ? (
              <div className="mt-5 rounded-[1.25rem] border border-amber-300 bg-amber-50 p-4 sm:p-5">
                <div className="text-base font-extrabold text-amber-950">Payment was not completed — you have not been charged.</div>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Your basket and the details you entered have been kept. Check them below and press the payment button when you are ready to try again.
                </p>
              </div>
            ) : null}

            {hasEnquiryOnlyItems ? (
              <div className="mt-5 rounded-[1.25rem] border border-amber-300 bg-amber-50 p-5">
                <div className="text-lg font-extrabold text-amber-950">Availability confirmation required</div>
                <p className="mt-2 text-sm leading-6 text-amber-900">
                  One or more products in this basket require availability confirmation before checkout.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Peptide Products, I need to confirm availability before ordering.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl2 bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  <WhatsAppIcon /> Confirm availability on WhatsApp
                </a>
              </div>
            ) : null}

            {orderItems.length === 0 ? (
              <div className="mt-6 rounded-[1.5rem] border border-line bg-white p-8 text-center shadow-soft">
                <h2 className="text-2xl font-extrabold text-ink">Your basket is empty.</h2>
                <p className="mt-3 text-sm text-muted">Add a product before continuing to secure payment.</p>
                <Link href="/shop" className="mt-5 inline-flex rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft">
                  Browse products
                </Link>
              </div>
            ) : (
              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
                <div className="space-y-5">
                  <section className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Contact details</div>
                        <h2 className="mt-2 text-xl font-extrabold text-ink">Who should we contact about this order?</h2>
                      </div>
                      <div className="hidden rounded-full border border-line bg-panel px-3 py-1 text-xs font-bold text-muted sm:block">Required</div>
                    </div>

                    <div className="mt-5 grid gap-4">
                      <div>
                        <FieldLabel>Full name</FieldLabel>
                        <input
                          autoComplete="name"
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                          placeholder="Full name"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <FieldLabel>Email address</FieldLabel>
                          <input
                            autoComplete="email"
                            inputMode="email"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <FieldLabel>Mobile / phone</FieldLabel>
                          <input
                            autoComplete="tel"
                            inputMode="tel"
                            type="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                            placeholder="Contact number"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft sm:p-6">
                    <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Delivery</div>
                    <h2 className="mt-2 text-xl font-extrabold text-ink">Where should we send the order?</h2>

                    <div className="mt-5 grid gap-4">
                      <div>
                        <FieldLabel>Address line 1</FieldLabel>
                        <input
                          autoComplete="address-line1"
                          type="text"
                          value={addressLine1}
                          onChange={(event) => setAddressLine1(event.target.value)}
                          className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                          placeholder="House number and street"
                        />
                      </div>
                      <div>
                        <FieldLabel>Address line 2 <span className="font-normal text-muted">(optional)</span></FieldLabel>
                        <input
                          autoComplete="address-line2"
                          type="text"
                          value={addressLine2}
                          onChange={(event) => setAddressLine2(event.target.value)}
                          className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                          placeholder="Apartment, unit, building"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <FieldLabel>Town / city</FieldLabel>
                          <input
                            autoComplete="address-level2"
                            type="text"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                            placeholder="Town or city"
                          />
                        </div>
                        <div>
                          <FieldLabel>County / state <span className="font-normal text-muted">(optional)</span></FieldLabel>
                          <input
                            autoComplete="address-level1"
                            type="text"
                            value={stateRegion}
                            onChange={(event) => setStateRegion(event.target.value)}
                            className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                            placeholder="County or region"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <FieldLabel>Postcode / ZIP</FieldLabel>
                          <input
                            autoComplete="postal-code"
                            type="text"
                            value={postalCode}
                            onChange={(event) => setPostalCode(event.target.value)}
                            className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base uppercase text-ink outline-none transition focus:border-accent focus:bg-white"
                            placeholder="Postcode"
                          />
                        </div>
                        <div>
                          <FieldLabel>Country</FieldLabel>
                          <select
                            autoComplete="country"
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                            className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3.5 text-base text-ink outline-none transition focus:border-accent focus:bg-white"
                          >
                            {COUNTRY_OPTIONS.map((option) => (
                              <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>

                  <label className="flex cursor-pointer items-start gap-3 rounded-[1.25rem] border border-line bg-white p-4 shadow-soft">
                    <input
                      type="checkbox"
                      checked={marketingOptIn}
                      onChange={(event) => setMarketingOptIn(event.target.checked)}
                      className="mt-1"
                    />
                    <div>
                      <div className="text-sm font-extrabold text-ink">Keep me updated</div>
                      <p className="mt-1 text-xs leading-5 text-muted">Optional stock, availability and service updates. You can opt out at any time.</p>
                    </div>
                  </label>

                  <section className="rounded-[1.5rem] border-2 border-slate-300 bg-slate-50 p-4 sm:p-6">
                    <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700">Required before payment</div>
                    <h2 className="mt-2 text-xl font-extrabold text-ink">Research Use Declaration</h2>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Products supplied by Peptide Products are intended solely for laboratory, analytical and scientific research purposes. They are not supplied for human consumption, self-administration, therapeutic use or the treatment of any medical condition.
                    </p>
                    <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl2 border border-slate-300 bg-white p-4">
                      <input
                        type="checkbox"
                        checked={researchUseAccepted}
                        onChange={(event) => setResearchUseAccepted(event.target.checked)}
                        className="mt-1 h-5 w-5 shrink-0"
                      />
                      <span className="text-sm font-bold leading-6 text-ink">
                        I confirm that the products I am purchasing are intended solely for laboratory, analytical or scientific research purposes, and I understand and agree to the restrictions above.
                      </span>
                    </label>
                    <p className="mt-3 text-xs leading-5 text-muted">
                      This declaration must be accepted before secure card payment can begin. Acceptance is recorded with the order for compliance purposes.
                    </p>
                  </section>

                  <section className="rounded-[1.5rem] border-2 border-blue-200 bg-blue-50 p-4 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">Payment</div>
                        <h2 className="mt-2 text-xl font-extrabold text-blue-950">Secure card payment with Stripe</h2>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-blue-700">Recommended secure checkout</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-blue-900">
                      Press the button below and Stripe will open for the final payment. Your email is passed across so you do not need to start again. Stripe may also show saved or wallet payment options when available on your device.
                    </p>

                    {!researchUseAccepted ? (
                      <div className="mt-4 rounded-xl2 border border-amber-200 bg-amber-50 p-3 text-sm font-semibold text-amber-900">
                        Please accept the Research Use Declaration above to continue to Stripe.
                      </div>
                    ) : null}

                    {error ? (
                      <div className="mt-4 rounded-xl2 border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700">{error}</div>
                    ) : null}

                    <button
                      type="button"
                      onClick={placeOrder}
                      disabled={!canSubmit}
                      className={
                        "mt-5 flex min-h-[56px] w-full items-center justify-center rounded-xl2 px-5 py-4 text-base font-extrabold text-white shadow-soft transition " +
                        (canSubmit ? "bg-accent hover:bg-accent/90" : "cursor-not-allowed bg-accent/40")
                      }
                    >
                      {submitting ? "Opening secure payment..." : `Continue to secure payment — ${formatGBP(total)}`}
                    </button>
                    <p className="mt-3 text-center text-xs leading-5 text-blue-800">
                      You are not charged until you confirm the payment on Stripe.
                    </p>
                  </section>
                </div>

                <aside className="h-fit rounded-[1.5rem] border border-line bg-white p-4 shadow-soft sm:p-6 lg:sticky lg:top-24">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-extrabold text-ink">Order summary</h2>
                    <Link href="/cart" className="text-xs font-extrabold text-accent hover:underline">Edit cart</Link>
                  </div>

                  <div className="mt-4 space-y-3">
                    {orderItems.map((item) => (
                      <div key={item.id} className="grid grid-cols-[64px_minmax(0,1fr)] gap-3 rounded-xl2 border border-line bg-panel p-3">
                        <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-line bg-white">
                          <Image src={item.image} alt={item.name} fill className="object-contain p-1" sizes="64px" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-extrabold leading-tight text-ink">{item.name}</div>
                          <div className="mt-1 text-xs text-muted">Qty {item.qty} · {formatGBP(item.priceGBP * item.qty)}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-2 text-sm text-muted">
                    <div className="flex justify-between"><span>Subtotal</span><span className="font-extrabold text-ink">{formatGBP(subtotal)}</span></div>
                    {promoDiscount > 0 ? (
                      <div className="flex justify-between text-emerald-700"><span>Promotion</span><span className="font-extrabold">−{formatGBP(promoDiscount)}</span></div>
                    ) : null}
                    <div className="flex justify-between"><span>Shipping</span><span className="font-extrabold text-ink">{shipping === 0 ? "Free" : formatGBP(shipping)}</span></div>
                    <div className="my-1 h-px bg-line" />
                    <div className="flex justify-between text-lg"><span className="font-extrabold text-ink">Total</span><span className="font-extrabold text-ink">{formatGBP(total)}</span></div>
                  </div>

                  <div className="mt-5 grid gap-2 text-xs font-semibold text-muted">
                    <div className="rounded-xl2 border border-line bg-panel px-3 py-3">Secure Stripe card checkout</div>
                    <div className="rounded-xl2 border border-line bg-panel px-3 py-3">Your cart stays saved if you return from Stripe</div>
                    <div className="rounded-xl2 border border-line bg-panel px-3 py-3">Order confirmation sent after successful payment</div>
                  </div>

                  <div className="mt-5 rounded-xl2 border border-emerald-200 bg-emerald-50 p-4">
                    <div className="text-sm font-extrabold text-emerald-950">Having trouble paying?</div>
                    <p className="mt-1 text-xs leading-5 text-emerald-800">Message us and we can guide you through the secure card checkout.</p>
                    <a
                      href={getHelpHref(country, total)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl2 bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white hover:bg-emerald-800"
                    >
                      <WhatsAppIcon /> Payment help on WhatsApp
                    </a>
                  </div>
                </aside>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm">
              <Link href="/cart" className="font-extrabold text-ink hover:underline">Back to cart</Link>
              <Link href="/shop" className="font-extrabold text-ink hover:underline">Continue shopping</Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
