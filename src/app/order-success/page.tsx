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
      <main className="py-14">
        <Container>
          <div className="max-w-3xl rounded-xl3 border border-line bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink">
              Payment successful
            </h1>

            <p className="mt-4 text-sm leading-7 text-muted">
              Thank you. Your payment was completed successfully.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted">
              Your cart has now been cleared. Please keep your Stripe confirmation
              email for your records.
            </p>

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