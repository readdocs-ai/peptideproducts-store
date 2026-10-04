"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { CustomerFlagMatch, CustomerReviewReason } from "@/lib/customer-review";

const reasonOptions: Array<[CustomerReviewReason, string]> = [
  ["complaint", "Complaint / dissatisfaction"],
  ["non_delivery", "Reported non-delivery"],
  ["refund", "Refund / chargeback concern"],
  ["product_issue", "Product issue"],
  ["payment_issue", "Payment issue"],
  ["other", "Other manual review reason"],
];

export function CustomerReviewFlagControls({
  orderId,
  matches,
}: {
  orderId: string;
  matches: CustomerFlagMatch[];
}) {
  const router = useRouter();
  const [reason, setReason] = useState<CustomerReviewReason>("complaint");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function createFlag() {
    if (!window.confirm("Add a manual review flag for this customer? Future matching orders will be highlighted for review.")) return;
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch(`/admin/api/orders/${encodeURIComponent(orderId)}/customer-review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason, note }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to add review flag");
        return;
      }
      setNote("");
      setMessage("Customer review flag added.");
      router.refresh();
    } catch {
      setError("Failed to add review flag");
    } finally {
      setLoading(false);
    }
  }

  async function clearFlag(flagId: string) {
    if (!window.confirm("Remove this manual review flag?")) return;
    setLoading(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch(`/admin/api/orders/${encodeURIComponent(orderId)}/customer-review`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flagId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Failed to remove review flag");
        return;
      }
      setMessage("Customer review flag removed.");
      router.refresh();
    } catch {
      setError("Failed to remove review flag");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3 rounded-xl2 border border-amber-200 bg-amber-50 p-4">
      <div>
        <div className="text-xs font-extrabold uppercase tracking-wide text-amber-800">Manual customer review</div>
        <p className="mt-1 text-xs leading-5 text-amber-900">
          Use only when you want future matching orders highlighted for manual review. This does not automatically block checkout.
        </p>
      </div>

      {matches.length ? (
        <div className="space-y-2">
          {matches.map(({ flag, matchedBy }) => (
            <div key={flag.id} className="rounded-xl border border-red-200 bg-white p-3 text-xs text-red-900">
              <div className="font-extrabold">FLAGGED FOR REVIEW</div>
              <div className="mt-1">Reason: {reasonOptions.find(([value]) => value === flag.reason)?.[1] || flag.reason}</div>
              <div className="mt-1">Matched by: {matchedBy.join(", ")}</div>
              <div className="mt-1">Flag source: {flag.sourceOrderId}</div>
              <div className="mt-1">Flagged email: {flag.customer.email || "—"}</div>
              <div className="mt-1">Flagged phone: {flag.customer.phone || "—"}</div>
              <div className="mt-1">Flagged address: {[flag.customer.shippingAddress.line1, flag.customer.shippingAddress.city, flag.customer.shippingAddress.postalCode].filter(Boolean).join(", ") || "—"}</div>
              {flag.note ? <div className="mt-1 whitespace-pre-wrap">Note: {flag.note}</div> : null}
              <button
                type="button"
                disabled={loading}
                onClick={() => clearFlag(flag.id)}
                className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 font-extrabold text-red-800 hover:bg-red-100 disabled:opacity-50"
              >
                Remove review flag
              </button>
            </div>
          ))}
        </div>
      ) : null}

      {matches.length === 0 ? (
        <div className="grid gap-2 sm:grid-cols-[0.9fr_1.4fr_auto] sm:items-end">
          <label className="text-xs font-bold text-amber-950">
            Reason
            <select
              value={reason}
              onChange={(event) => setReason(event.target.value as CustomerReviewReason)}
              className="mt-1 w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm text-ink"
            >
              {reasonOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <label className="text-xs font-bold text-amber-950">
            Internal note (optional)
            <input
              value={note}
              onChange={(event) => setNote(event.target.value)}
              placeholder="e.g. Reported non-delivery; refund issued"
              className="mt-1 w-full rounded-lg border border-amber-200 bg-white px-3 py-2 text-sm text-ink"
            />
          </label>
          <button
            type="button"
            onClick={createFlag}
            disabled={loading}
            className="rounded-lg bg-amber-700 px-4 py-2.5 text-xs font-extrabold text-white hover:bg-amber-800 disabled:opacity-50"
          >
            Flag customer
          </button>
        </div>
      ) : null}

      {message ? <div className="text-xs font-bold text-emerald-700">{message}</div> : null}
      {error ? <div className="text-xs font-bold text-red-700">{error}</div> : null}
    </div>
  );
}
