"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

type Status = {
  type: "idle" | "ok" | "err";
  message?: string;
};

export default function SubmitReviewPage() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, orderNumber, rating, review }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Unable to send review feedback.");
      }

      setStatus({
        type: "ok",
        message: "Thank you. Your review feedback has been sent.",
      });

      setName("");
      setEmail("");
      setOrderNumber("");
      setRating(5);
      setReview("");
    } catch (err: any) {
      setStatus({
        type: "err",
        message: err?.message || "Unable to send review feedback.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-3xl rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
            <div className="eyebrow">Customer review</div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
              Write a review
            </h1>

            <p className="mt-4 text-sm leading-7 text-muted">
              Thank you for ordering from Peptide Products. Please use this form
              to leave feedback about your ordering experience, delivery,
              packaging, communication, and customer support.
            </p>

            <div className="mt-5 rounded-xl2 border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-800">
              Please only comment on your shopping experience, delivery,
              packaging, and customer service. Do not include medical claims,
              personal use details, treatment outcomes, dosage information, or
              product effect claims.
            </div>

            <form onSubmit={submit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-extrabold text-ink">Name</label>
                  <input
                    className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-extrabold text-ink">Email</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-extrabold text-ink">
                  Order number
                </label>
                <input
                  className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Optional, e.g. PP-260521-ABC123"
                />
              </div>

              <div>
                <label className="text-sm font-extrabold text-ink">
                  Star rating
                </label>

                <div className="mt-3 flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={
                        "rounded-xl2 border px-4 py-3 text-xl font-extrabold transition " +
                        (rating >= star
                          ? "border-amber-300 bg-amber-50 text-amber-500"
                          : "border-line bg-panel text-muted")
                      }
                      aria-label={`${star} star rating`}
                    >
                      ★
                    </button>
                  ))}
                </div>

                <div className="mt-2 text-sm font-semibold text-muted">
                  Selected rating: {rating}/5
                </div>
              </div>

              <div>
                <label className="text-sm font-extrabold text-ink">
                  Review feedback
                </label>
                <textarea
                  className="mt-2 min-h-[150px] w-full rounded-xl2 border border-line bg-panel px-4 py-3 text-sm text-ink outline-none focus:border-accent"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                  placeholder="Please share your feedback about ordering, delivery, packaging, communication, or support."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={
                  "rounded-xl2 px-6 py-3 text-sm font-extrabold text-white shadow-soft transition " +
                  (loading
                    ? "cursor-not-allowed bg-accent/60"
                    : "bg-accent hover:bg-accent/90")
                }
              >
                {loading ? "Sending..." : "Submit review"}
              </button>

              {status.type === "ok" ? (
                <div className="rounded-xl2 border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">
                  {status.message}
                </div>
              ) : null}

              {status.type === "err" ? (
                <div className="rounded-xl2 border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                  {status.message}
                </div>
              ) : null}
            </form>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/reviews"
                className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Back to reviews
              </Link>

              <Link
                href="/order-status"
                className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
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