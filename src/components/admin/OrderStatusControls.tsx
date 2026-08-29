"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { OrderStatus, StoredOrder } from "@/lib/orders";

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export function OrderStatusControls({ order }: { order: StoredOrder }) {
  const router = useRouter();

  const [trackingNumber, setTrackingNumber] = useState(
    order.trackingNumber || ""
  );
useEffect(() => {
  setTrackingNumber(order.trackingNumber || "");
}, [order.trackingNumber]);

useEffect(() => {
  setCustomerName(order.name || "");
  setCustomerEmail(order.email || "");
  setCustomerPhone(order.phone || "");
  setShippingName(order.shippingAddress?.name || "");
  setShippingLine1(order.shippingAddress?.line1 || "");
  setShippingLine2(order.shippingAddress?.line2 || "");
  setShippingCity(order.shippingAddress?.city || "");
  setShippingState(order.shippingAddress?.state || "");
  setShippingPostcode(order.shippingAddress?.postalCode || "");
  setShippingCountry(order.shippingAddress?.country || "GB");
}, [order]);
  const [refundedAmount, setRefundedAmount] = useState(
    order.refundedAmount ? String(order.refundedAmount) : ""
  );

  const [adjustedTotal, setAdjustedTotal] = useState(
    typeof order.adjustedTotal === "number" ? String(order.adjustedTotal) : ""
  );

  const [adminNote, setAdminNote] = useState(order.adminNote || "");
  const [customerName, setCustomerName] = useState(order.name || "");
  const [customerEmail, setCustomerEmail] = useState(order.email || "");
  const [customerPhone, setCustomerPhone] = useState(order.phone || "");
  const [shippingName, setShippingName] = useState(order.shippingAddress?.name || "");
  const [shippingLine1, setShippingLine1] = useState(order.shippingAddress?.line1 || "");
  const [shippingLine2, setShippingLine2] = useState(order.shippingAddress?.line2 || "");
  const [shippingCity, setShippingCity] = useState(order.shippingAddress?.city || "");
  const [shippingState, setShippingState] = useState(order.shippingAddress?.state || "");
  const [shippingPostcode, setShippingPostcode] = useState(order.shippingAddress?.postalCode || "");
  const [shippingCountry, setShippingCountry] = useState(order.shippingAddress?.country || "GB");

  const [loading, setLoading] = useState(false);
  const [customerSaving, setCustomerSaving] = useState(false);
  const [royalMailLoading, setRoyalMailLoading] = useState(false);
  const [error, setError] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");
  const [royalMailMessage, setRoyalMailMessage] = useState("");

  async function updateStatus(status: OrderStatus, sendCustomerUpdate = false) {
    setLoading(true);
    setError("");
    setCustomerMessage("");

    try {
      const res = await fetch(`/admin/api/orders/${order.id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          trackingNumber: status === "shipped" ? trackingNumber : null,
          refundedAmount: refundedAmount ? Number(refundedAmount) : null,
          adjustedTotal: adjustedTotal ? Number(adjustedTotal) : null,
          adminNote,
          sendCustomerUpdate,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Failed to update order");
        return;
      }

      router.refresh();
    } catch {
      setError("Failed to update order");
    } finally {
      setLoading(false);
    }
  }

  async function callRoyalMail(method: "POST" | "GET") {
    setRoyalMailLoading(true);
    setError("");
    setRoyalMailMessage("");

    try {
      const res = await fetch(`/admin/api/orders/${order.id}/royal-mail`, {
        method,
        cache: "no-store",
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Royal Mail request failed");
        return;
      }

      setRoyalMailMessage(data?.message || "Royal Mail order updated.");
      router.refresh();
    } catch {
      setError("Could not connect to the Royal Mail integration.");
    } finally {
      setRoyalMailLoading(false);
    }
  }

  async function saveCustomerDetails() {
    const cleanName = customerName.trim();
    const cleanEmail = customerEmail.trim().toLowerCase();
    const cleanCountry = shippingCountry.trim().toUpperCase();

    if (cleanName.length < 2) {
      setError("Please enter the customer name.");
      return;
    }
    if (!cleanEmail || !cleanEmail.includes("@") || !cleanEmail.includes(".")) {
      setError("Please enter a valid customer email address.");
      return;
    }
    if (!shippingLine1.trim() || !shippingCity.trim() || !shippingPostcode.trim()) {
      setError("Address line 1, town/city and postcode are required.");
      return;
    }

    setCustomerSaving(true);
    setError("");
    setCustomerMessage("");

    try {
      const res = await fetch(`/admin/api/orders/${order.id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update_customer_details",
          name: cleanName,
          email: cleanEmail,
          phone: customerPhone.trim(),
          shippingAddress: {
            name: shippingName.trim(),
            line1: shippingLine1.trim(),
            line2: shippingLine2.trim(),
            city: shippingCity.trim(),
            state: shippingState.trim(),
            postalCode: shippingPostcode.trim(),
            country: cleanCountry || "GB",
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to update customer details");
        return;
      }

      setCustomerMessage(
        "Customer details saved. Packing slips, future order emails and unsent Royal Mail data will use the corrected information."
      );
      router.refresh();
    } catch {
      setError("Failed to update customer details");
    } finally {
      setCustomerSaving(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl2 border border-line bg-white p-4">
        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
          Status
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => updateStatus("pending")}
            disabled={loading}
            className="rounded-xl2 border border-line bg-white px-3 py-2 text-xs font-extrabold text-ink hover:bg-panel disabled:opacity-60"
          >
            Mark Pending
          </button>

          <button
            type="button"
            onClick={() => updateStatus("paid")}
            disabled={loading}
            className="rounded-xl2 border border-line bg-white px-3 py-2 text-xs font-extrabold text-ink hover:bg-panel disabled:opacity-60"
          >
            Mark Paid
          </button>

          <button
            type="button"
            onClick={() => updateStatus("shipped")}
            disabled={loading || !trackingNumber.trim()}
            title={!trackingNumber.trim() ? "Sync or enter tracking before marking shipped" : undefined}
            className="rounded-xl2 border border-line bg-white px-3 py-2 text-xs font-extrabold text-ink hover:bg-panel disabled:cursor-not-allowed disabled:opacity-40"
          >
            Mark Shipped
          </button>

          <button
            type="button"
            onClick={() => updateStatus("cancelled")}
            disabled={loading}
            className="rounded-xl2 border border-red-200 bg-red-50 px-3 py-2 text-xs font-extrabold text-red-700 hover:bg-red-100 disabled:opacity-60"
          >
            Mark Cancelled
          </button>
        </div>
      </div>

      <div className="rounded-xl2 border border-purple-200 bg-purple-50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-extrabold uppercase tracking-wide text-purple-900">
            Royal Mail Click & Drop
          </div>
          <span
            className={
              "rounded-full px-3 py-1 text-[11px] font-extrabold " +
              (order.royalMailStatus === "sent"
                ? "bg-emerald-100 text-emerald-800"
                : order.royalMailStatus === "error"
                  ? "bg-red-100 text-red-800"
                  : order.royalMailStatus === "sending"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-white text-purple-800")
            }
          >
            {order.royalMailStatus === "sent"
              ? "Sent"
              : order.royalMailStatus === "error"
                ? "Needs checking"
                : order.royalMailStatus === "sending"
                  ? "Sending"
                  : "Not sent"}
          </span>
        </div>

        <p className="mt-2 text-xs leading-5 text-purple-900">
          Send only this paid order to Click & Drop. You will still choose the
          postage service and print the label inside Royal Mail.
        </p>

        {order.royalMailOrderIdentifier ? (
          <div className="mt-3 text-xs font-bold text-purple-900">
            Royal Mail order ID: {order.royalMailOrderIdentifier}
          </div>
        ) : null}

        {order.royalMailCreatedAt ? (
          <div className="mt-1 text-xs text-purple-800">
            Sent: {new Date(order.royalMailCreatedAt).toLocaleString("en-GB")}
          </div>
        ) : null}

        {order.royalMailLastCheckedAt ? (
          <div className="mt-1 text-xs text-purple-800">
            Last checked: {new Date(order.royalMailLastCheckedAt).toLocaleString("en-GB")}
          </div>
        ) : null}

        {order.royalMailError ? (
          <div className="mt-3 rounded-xl2 border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-800">
            {order.royalMailError}
          </div>
        ) : null}

        {order.shippingRegion === "International" ? (
          <div className="mt-3 rounded-xl2 border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900">
            International orders are held for manual customs review and cannot
            be sent by this button yet.
          </div>
        ) : null}

        {order.status !== "paid" && order.status !== "shipped" ? (
          <div className="mt-3 text-xs font-semibold text-purple-900">
            Mark this order Paid before sending it to Royal Mail.
          </div>
        ) : null}

        <div className="mt-4 grid gap-2">
          <button
            type="button"
            onClick={() => callRoyalMail("POST")}
            disabled={
              royalMailLoading ||
              order.status !== "paid" ||
              order.shippingRegion === "International" ||
              order.royalMailStatus === "sent"
            }
            className="w-full rounded-xl2 bg-purple-800 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-purple-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {royalMailLoading
              ? "Contacting Royal Mail..."
              : order.royalMailStatus === "sent"
                ? "Already sent to Royal Mail"
                : "Send to Royal Mail"}
          </button>

          <button
            type="button"
            onClick={() => callRoyalMail("GET")}
            disabled={royalMailLoading}
            className="w-full rounded-xl2 border border-purple-300 bg-white px-4 py-3 text-sm font-extrabold text-purple-900 shadow-soft hover:bg-purple-100 disabled:opacity-50"
          >
            Check Royal Mail & sync tracking
          </button>
        </div>

        {royalMailMessage ? (
          <div className="mt-3 rounded-xl2 border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800">
            {royalMailMessage}
          </div>
        ) : null}
      </div>

      <details className="rounded-xl2 border border-blue-200 bg-blue-50 p-4">
        <summary className="cursor-pointer text-xs font-extrabold uppercase tracking-wide text-blue-800">
          Edit customer details
        </summary>

        <p className="mt-2 text-xs leading-5 text-blue-800">
          Correct the customer name, contact information or delivery address. This
          changes the saved order only and does not alter the Stripe payment.
        </p>

        {order.royalMailStatus === "sent" ? (
          <div className="mt-3 rounded-xl2 border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900">
            This order has already been sent to Royal Mail. Correcting the local
            order will not change a label already created in Click & Drop.
          </div>
        ) : null}

        <div className="mt-4 grid gap-3">
          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">Customer name</label>
            <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">Email</label>
            <input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">Phone</label>
            <input type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">Delivery name</label>
            <input type="text" value={shippingName} onChange={(e) => setShippingName(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">Address line 1</label>
            <input type="text" value={shippingLine1} onChange={(e) => setShippingLine1(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">Address line 2</label>
            <input type="text" value={shippingLine2} onChange={(e) => setShippingLine2(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-extrabold text-ink">Town / city</label>
              <input type="text" value={shippingCity} onChange={(e) => setShippingCity(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-extrabold text-ink">County / state</label>
              <input type="text" value={shippingState} onChange={(e) => setShippingState(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-extrabold text-ink">Postcode</label>
              <input type="text" value={shippingPostcode} onChange={(e) => setShippingPostcode(e.target.value)} className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-extrabold text-ink">Country code</label>
              <input type="text" maxLength={2} value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value.toUpperCase())} placeholder="GB" className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm uppercase text-ink outline-none focus:border-accent" />
            </div>
          </div>

          <button
            type="button"
            onClick={saveCustomerDetails}
            disabled={customerSaving}
            className="w-full rounded-xl2 bg-blue-700 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-blue-800 disabled:opacity-60"
          >
            {customerSaving ? "Saving customer details..." : "Save customer details"}
          </button>
        </div>

        {customerMessage ? (
          <div className="mt-3 rounded-xl2 border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800">
            {customerMessage}
          </div>
        ) : null}
      </details>

      <div className="rounded-xl2 border border-line bg-white p-4">
        <label className="mb-2 block text-xs font-extrabold uppercase tracking-wide text-muted">
          Tracking number
        </label>

        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Required for shipped"
          className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
        />
      </div>

      <details className="rounded-xl2 border border-amber-200 bg-amber-50 p-4">
        <summary className="cursor-pointer text-xs font-extrabold uppercase tracking-wide text-amber-800">
          Refunds and manual adjustments
        </summary>

        <p className="mt-2 text-xs leading-5 text-amber-800">
          Use this after you process a refund or change in Stripe. This does not
          issue a Stripe refund automatically.
        </p>

        <div className="mt-4 grid gap-3">
          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">
              Refunded amount
            </label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={refundedAmount}
              onChange={(e) => setRefundedAmount(e.target.value)}
              placeholder="e.g. 45.00"
              className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">
              Adjusted order total
            </label>

            <input
              type="number"
              min="0"
              step="0.01"
              value={adjustedTotal}
              onChange={(e) => setAdjustedTotal(e.target.value)}
              placeholder={`Original total ${formatGBP(order.total)}`}
              className="w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-extrabold text-ink">
              Admin adjustment note
            </label>

            <textarea
              value={adminNote}
              onChange={(e) => setAdminNote(e.target.value)}
              placeholder="Example: Customer cancelled after payment. Refund processed manually in Stripe."
              className="min-h-[110px] w-full rounded-xl2 border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent"
            />
          </div>

          <button
            type="button"
            onClick={() => updateStatus(order.status)}
            disabled={loading}
            className="rounded-xl2 bg-amber-700 px-4 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-amber-800 disabled:opacity-60"
          >
            Save adjustment note
          </button>

          <button
            type="button"
            onClick={() => updateStatus(order.status, true)}
            disabled={loading}
            className="rounded-xl2 border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-extrabold text-blue-800 shadow-soft hover:bg-blue-100 disabled:opacity-60"
          >
            Send customer update email
          </button>
        </div>
      </details>

      {error ? (
        <div className="text-xs font-semibold text-red-600">{error}</div>
      ) : null}
    </div>
  );
}