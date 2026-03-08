"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { StoredOrder } from "@/lib/orders";

export function OrderStatusControls({ order }: { order: StoredOrder }) {
  const router = useRouter();
  const [trackingNumber, setTrackingNumber] = useState(order.trackingNumber ?? "");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  async function updateStatus(status: "paid" | "shipped") {
    setError("");

    if (status === "shipped" && !trackingNumber.trim()) {
      setError("Tracking number is required before marking an order as shipped.");
      return;
    }

    try {
      const res = await fetch(`/admin/api/orders/${order.id}/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
          trackingNumber: trackingNumber.trim() || null,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setError(data?.error || "Could not update the order.");
        return;
      }

      startTransition(() => {
        router.refresh();
      });
    } catch {
      setError("Could not update the order.");
    }
  }

  return (
    <div className="rounded-xl2 border border-line bg-panel p-4">
      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
        Update status
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => updateStatus("paid")}
          disabled={isPending || order.status === "paid" || order.status === "shipped"}
          className="rounded-full border border-line bg-white px-4 py-2 text-xs font-extrabold text-ink transition hover:bg-panel disabled:cursor-not-allowed disabled:opacity-50"
        >
          Mark paid
        </button>

        <button
          type="button"
          onClick={() => updateStatus("shipped")}
          disabled={isPending || order.status === "shipped"}
          className="rounded-full bg-ink px-4 py-2 text-xs font-extrabold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Mark shipped
        </button>
      </div>

      <div className="mt-4">
        <label className="text-xs font-extrabold uppercase tracking-wide text-muted">
          Tracking number
        </label>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Required when shipping"
          className="mt-2 w-full rounded-xl2 border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-ink"
        />
      </div>

      {error ? <div className="mt-3 text-sm font-semibold text-red-700">{error}</div> : null}

      {isPending ? <div className="mt-3 text-sm text-muted">Updating order...</div> : null}
    </div>
  );
}
