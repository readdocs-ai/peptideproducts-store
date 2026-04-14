"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

type LookupOrder = {
  id: string;
  status: "pending" | "paid" | "shipped";
  paymentMethod: "bank_transfer" | "crypto" | "card";
  total: number;
  createdAt: string;
  paidAt: string | null;
  shippedAt: string | null;
  trackingNumber: string | null;
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function getPaymentMethodLabel(paymentMethod: LookupOrder["paymentMethod"]) {
  if (paymentMethod === "bank_transfer") return "Bank Transfer";
  if (paymentMethod === "crypto") return "Cryptocurrency";
  return "Card";
}

export default function OrderStatusPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [order, setOrder] = useState<LookupOrder | null>(null);

  async function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const params = new URLSearchParams({
        orderId: orderId.trim(),
        email: email.trim(),
      });

      const res = await fetch(`/api/order-status?${params.toString()}`);
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setError(data?.error || "Unable to find that order.");
        return;
      }

      setOrder(data.order);
    } catch {
      setError("Unable to find that order.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-line bg-white p-8 shadow-soft lg:p-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink">Order Status</h1>
            <p className="mt-2 text-sm text-muted">
              Enter your order number and email address to check the latest status.
            </p>

            <form onSubmit={handleLookup} className="mt-8 grid gap-5">
              <div>
                <label className="block text-sm font-extrabold text-ink">Order number</label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Example: PP-260308-ABC123"
                  className="mt-3 w-full rounded-xl2 border border-line bg-panel px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-extrabold text-ink">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter the email used on the order"
                  className="mt-3 w-full rounded-xl2 border border-line bg-panel px-5 py-4 text-base text-ink outline-none transition focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90 disabled:opacity-60"
              >
                {loading ? "Checking..." : "Check order status"}
              </button>
            </form>

            {error ? (
              <div className="mt-6 rounded-xl2 border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                {error}
              </div>
            ) : null}

            {order ? (
              <div className="mt-8 rounded-xl2 border border-line bg-panel p-6">
                <div className="text-lg font-extrabold text-ink">Order found</div>
                <div className="mt-4 grid gap-2 text-sm text-muted">
                  <div>
                    <span className="font-extrabold text-ink">Order number:</span> {order.id}
                  </div>
                  <div>
                    <span className="font-extrabold text-ink">Status:</span> {order.status}
                  </div>
                  <div>
                    <span className="font-extrabold text-ink">Payment method:</span>{" "}
                    {getPaymentMethodLabel(order.paymentMethod)}
                  </div>
                  <div>
                    <span className="font-extrabold text-ink">Total:</span> {formatGBP(order.total)}
                  </div>
                  <div>
                    <span className="font-extrabold text-ink">Placed:</span>{" "}
                    {formatDate(order.createdAt)}
                  </div>

                  {order.paidAt ? (
                    <div>
                      <span className="font-extrabold text-ink">Paid:</span>{" "}
                      {formatDate(order.paidAt)}
                    </div>
                  ) : null}

                  {order.shippedAt ? (
                    <div>
                      <span className="font-extrabold text-ink">Shipped:</span>{" "}
                      {formatDate(order.shippedAt)}
                    </div>
                  ) : null}

                  {order.trackingNumber ? (
                    <div>
                      <span className="font-extrabold text-ink">Tracking number:</span>{" "}
                      {order.trackingNumber}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}

            <div className="mt-8 text-sm">
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