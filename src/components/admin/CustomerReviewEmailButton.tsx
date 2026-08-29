"use client";

import { useState } from "react";

type Props = {
  customerName: string;
  customerEmail: string;
};

export function CustomerReviewEmailButton({
  customerName,
  customerEmail,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function sendReviewRequest() {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/admin/api/customers/review-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: customerName,
          email: customerEmail,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setMessage(data?.error || "Unable to send review request.");
        return;
      }

      setMessage("Review request sent from info@.");
    } catch {
      setMessage("Unable to send review request.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={sendReviewRequest}
        disabled={loading}
        className="w-full rounded-xl2 border border-blue-200 bg-blue-50 px-4 py-3 text-center text-sm font-extrabold text-blue-800 shadow-soft hover:bg-blue-100 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Email review request"}
      </button>

      {message ? (
        <div className="mt-2 rounded-xl2 border border-line bg-white px-3 py-2 text-xs font-semibold text-muted">
          {message}
        </div>
      ) : null}
    </div>
  );
}