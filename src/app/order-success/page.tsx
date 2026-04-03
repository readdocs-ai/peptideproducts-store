"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { clearCart } from "@/lib/cart";

export default function OrderSuccessPage() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div>
      <Header />

      <main className="py-10 lg:py-14">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl3 border border-line bg-white p-8 shadow-soft">
            <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
              Payment completed
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink">
              Payment successful
            </h1>

            <p className="mt-4 text-sm leading-7 text-muted">
              Thank you. Your card payment was completed successfully and your order
              has been recorded.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              Your cart has now been cleared. Please keep your Stripe confirmation
              email for your records. You can also use the order status page if you
              need to check progress later.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                Secure payment received
              </div>
              <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                Order saved successfully
              </div>
              <div className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                Tracking available later
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Continue shopping
              </Link>

              <Link
                href="/order-status"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Check order status
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}