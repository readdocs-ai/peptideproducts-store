"use client";

import { Suspense, useEffect, useMemo } from "react";
import Link from "next/link";
import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { clearCart } from "@/lib/cart";

const WHATSAPP_NUMBER = "447429098887";
const GOOGLE_ADS_PURCHASE_SEND_TO = "AW-18121290521/6Y3NCL7agq8cEJnm88BD";
const CHECKOUT_DETAILS_KEY = "pp_checkout_details_v2";
const CHECKOUT_ATTEMPT_KEY = "pp_checkout_attempt_v1";

function getWhatsAppHref(reference?: string) {
  const message = reference
    ? `Hi Peptide Products, I have completed payment and need help with reference ${reference}.`
    : "Hi Peptide Products, I have completed a card payment and need help with my order.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
      <path d="M16.02 3.2A12.72 12.72 0 0 0 5.06 22.38L3.6 28.8l6.54-1.54A12.72 12.72 0 1 0 16.02 3.2Zm0 23.16a10.42 10.42 0 0 1-5.32-1.46l-.38-.22-3.88.92.86-3.8-.25-.39a10.43 10.43 0 1 1 8.97 4.95Zm5.72-7.8c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1.01 1.22-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const stripeSessionId = searchParams.get("session_id") || "";

  const shortSessionId = useMemo(() => {
    if (!stripeSessionId) return "";
    return stripeSessionId.length > 18
      ? `${stripeSessionId.slice(0, 10)}...${stripeSessionId.slice(-6)}`
      : stripeSessionId;
  }, [stripeSessionId]);

  useEffect(() => {
    clearCart();
    try {
      window.localStorage.removeItem(CHECKOUT_DETAILS_KEY);
      window.localStorage.removeItem(CHECKOUT_ATTEMPT_KEY);
    } catch {
      // Storage cleanup is optional.
    }
  }, []);

  return (
    <>
      {stripeSessionId ? (
        <Script id="google-ads-purchase-conversion" strategy="afterInteractive">
          {`
            (function () {
              if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
              var conversionKey = 'google_ads_purchase_' + '${stripeSessionId}';
              if (window.sessionStorage && window.sessionStorage.getItem(conversionKey)) return;
              window.gtag('event', 'conversion', {
                send_to: '${GOOGLE_ADS_PURCHASE_SEND_TO}',
                transaction_id: '${stripeSessionId}',
                value: 125.00,
                currency: 'GBP'
              });
              if (window.sessionStorage) window.sessionStorage.setItem(conversionKey, '1');
            })();
          `}
        </Script>
      ) : null}

      <div className="mx-auto max-w-4xl rounded-xl3 border border-line bg-white p-6 shadow-soft sm:p-8">
        <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
          Payment completed
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">Payment successful</h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          Thank you. Stripe has returned you to Peptide Products after payment. Your order will appear in our system as paid once the Stripe confirmation has been processed.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">Payment completed securely</div>
          <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">Order confirmation by email</div>
          <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">Tracking available after dispatch</div>
        </div>

        {shortSessionId ? (
          <div className="mt-6 rounded-xl2 border border-blue-200 bg-blue-50 p-4">
            <div className="text-xs font-extrabold uppercase tracking-wide text-blue-700">Backup payment reference</div>
            <div className="mt-2 break-all text-sm font-extrabold text-blue-950">{shortSessionId}</div>
            <p className="mt-2 text-sm leading-6 text-blue-800">
              If you contact support before the order email arrives, include this reference and the email address used at checkout.
            </p>
          </div>
        ) : null}

        <div className="mt-6 rounded-xl2 border border-amber-200 bg-amber-50 p-4">
          <div className="text-sm font-extrabold text-amber-950">Order email not arrived?</div>
          <p className="mt-1 text-sm leading-6 text-amber-800">
            Please allow a few minutes, then check your junk or spam folder. Order and tracking updates are sent from info@peptideproducts.co.uk.
          </p>
        </div>

        <div className="mt-6 rounded-xl2 border border-emerald-200 bg-emerald-50 p-4">
          <div className="text-sm font-extrabold text-emerald-950">Need help after payment?</div>
          <p className="mt-1 text-sm leading-6 text-emerald-800">Message us on WhatsApp and include your payment reference if available.</p>
          <a
            href={getWhatsAppHref(shortSessionId)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl2 bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
          >
            <WhatsAppIcon /> Message us on WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/order-status" className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90">
            Check order status
          </Link>
          <Link href="/shop" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
            Continue shopping
          </Link>
        </div>
      </div>
    </>
  );
}

export default function OrderSuccessPage() {
  return (
    <div>
      <Header />
      <main className="py-10 lg:py-14">
        <Container>
          <Suspense fallback={<div className="mx-auto max-w-4xl rounded-xl3 border border-line bg-white p-8 shadow-soft">Confirming payment...</div>}>
            <OrderSuccessContent />
          </Suspense>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
