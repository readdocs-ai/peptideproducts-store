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

const whatsappHref =
  "https://wa.me/447429098887?text=Hi%20Peptide%20Products%2C%20I%20need%20help%20with%20my%20order%20status.";

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
  if (paymentMethod === "crypto") return "Legacy alternative payment";
  return "Card";
}

function getStatusLabel(status: LookupOrder["status"]) {
  if (status === "pending") return "Awaiting payment confirmation";
  if (status === "paid") return "Payment received — preparing order";
  return "Shipped";
}

function getStatusHelp(order: LookupOrder) {
  if (order.status === "pending") {
    if (order.paymentMethod === "bank_transfer") {
      return "We have received your order and are waiting for the bank transfer to be confirmed. Please use your order number as the payment reference.";
    }

    if (order.paymentMethod === "crypto") {
      return "We have received this legacy order and are waiting for payment confirmation. Please include your order number when messaging support.";
    }

    return "We have received your order and are checking the payment status.";
  }

  if (order.status === "paid") {
    return "Your payment has been received. Your order is being prepared for dispatch.";
  }

  return "Your order has been shipped. Use the tracking number shown below if available.";
}

function getStatusBadgeClass(status: LookupOrder["status"]) {
  if (status === "pending") {
    return "border-amber-200 bg-amber-50 text-amber-800";
  }

  if (status === "paid") {
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }

  return "border-blue-200 bg-blue-50 text-blue-800";
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

  const whatsappOrderHref = order
    ? `https://wa.me/447429098887?text=${encodeURIComponent(
        `Hi Peptide Products, I need help with order ${order.id}.`
      )}`
    : whatsappHref;

  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-line bg-white p-8 shadow-soft lg:p-10">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink">Order Status</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              Enter your order number and email address to check the latest status.
              Payment confirmation may take a short time to appear after checkout.
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
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-lg font-extrabold text-ink">Order found</div>
                    <p className="mt-1 text-sm text-muted">
                      Below is the latest status we have for this order.
                    </p>
                  </div>

                  <div
                    className={
                      "w-fit rounded-full border px-3 py-1 text-xs font-extrabold " +
                      getStatusBadgeClass(order.status)
                    }
                  >
                    {getStatusLabel(order.status)}
                  </div>
                </div>

                <div className="mt-5 rounded-xl2 border border-line bg-white p-4 text-sm leading-6 text-muted">
                  {getStatusHelp(order)}
                </div>

                <div className="mt-5 grid gap-2 text-sm text-muted">
                  <div>
                    <span className="font-extrabold text-ink">Order number:</span> {order.id}
                  </div>
                  <div>
                    <span className="font-extrabold text-ink">Status:</span>{" "}
                    {getStatusLabel(order.status)}
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

                <div className="mt-6 rounded-xl2 border border-emerald-200 bg-emerald-50 p-4">
                  <div className="text-sm font-extrabold text-emerald-900">
                    Need help with this order?
                  </div>
                  <p className="mt-1 text-sm leading-6 text-emerald-800">
                    Message us on WhatsApp and include your order number so we can check it faster.
                  </p>

                  <a
                    href={whatsappOrderHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-xl2 bg-emerald-700 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                  >
                    <WhatsAppIcon />
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            ) : null}

            <hr className="my-6" />

            <div className="text-sm text-muted">
              If your order has arrived safely, we would really appreciate a quick review.
            </div>

            <Link
              href="/reviews"
              className="mt-3 inline-block font-extrabold text-accent hover:underline"
            >
              Leave a review →
            </Link>

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