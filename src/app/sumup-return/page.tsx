"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function SumUpReturnPage() {
  const [state, setState] = useState<"checking" | "paid" | "pending" | "error">("checking");
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("orderId") || "";
    setOrderId(id);
    if (!id) {
      setState("error");
      return;
    }

    let cancelled = false;
    let attempts = 0;

    async function check() {
      attempts += 1;
      try {
        const response = await fetch(`/api/sumup/status?orderId=${encodeURIComponent(id)}`, {
          cache: "no-store",
        });
        const data = await response.json();
        if (cancelled) return;
        if (!response.ok || !data?.ok) {
          setState("error");
          return;
        }
        if (data.paid) {
          setState("paid");
          return;
        }
        if (attempts < 5) {
          window.setTimeout(check, 2000);
        } else {
          setState("pending");
        }
      } catch {
        if (!cancelled) setState("error");
      }
    }

    void check();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-line bg-white p-8 text-center shadow-soft lg:p-10">
            {state === "checking" ? (
              <>
                <div className="eyebrow">Verifying payment</div>
                <h1 className="mt-4 text-3xl font-extrabold text-ink">Checking your SumUp payment…</h1>
                <p className="mt-3 text-sm leading-7 text-muted">Please keep this page open for a few seconds.</p>
              </>
            ) : null}

            {state === "paid" ? (
              <>
                <div className="eyebrow">Payment successful</div>
                <h1 className="mt-4 text-3xl font-extrabold text-ink">Thank you. Your order is paid.</h1>
                <p className="mt-3 text-sm leading-7 text-muted">Order <strong>{orderId}</strong> has been confirmed and will now be prepared for dispatch.</p>
              </>
            ) : null}

            {state === "pending" ? (
              <>
                <div className="eyebrow">Payment processing</div>
                <h1 className="mt-4 text-3xl font-extrabold text-ink">We are still confirming the payment.</h1>
                <p className="mt-3 text-sm leading-7 text-muted">Do not pay again. Check order status shortly using order <strong>{orderId}</strong>.</p>
              </>
            ) : null}

            {state === "error" ? (
              <>
                <div className="eyebrow">Verification unavailable</div>
                <h1 className="mt-4 text-3xl font-extrabold text-ink">We could not verify the payment yet.</h1>
                <p className="mt-3 text-sm leading-7 text-muted">Do not repeat the payment. Use the order status page or contact support with order <strong>{orderId || "reference"}</strong>.</p>
              </>
            ) : null}

            {state !== "checking" ? (
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/order-status" className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white">Check order status</Link>
                <Link href="/shop" className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink">Continue shopping</Link>
              </div>
            ) : null}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
