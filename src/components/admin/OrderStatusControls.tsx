"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { StoredOrder } from "@/lib/orders";

export function OrderStatusControls({ order }: { order: StoredOrder }) {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState(order.trackingNumber || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function updateStatus(status: "pending" | "paid" | "shipped") {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/admin/api/orders/${order.id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          trackingNumber: status === "shipped" ? trackingNumber : null,
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

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
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
          disabled={loading}
          className="rounded-xl2 border border-line bg-white px-3 py-2 text-xs font-extrabold text-ink hover:bg-panel disabled:opacity-60"
        >
          Mark Shipped
        </button>
      </div>

      <div>
        <label className="mb-2 block text-xs font-extrabold text-ink">
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

      {error ? <div className="text-xs font-semibold text-red-600">{error}</div> : null}
    </div>
  );
}