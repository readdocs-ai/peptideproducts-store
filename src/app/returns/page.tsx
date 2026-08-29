import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Returns & Refunds | Peptide Products UK",
  description:
    "Returns, refunds, cancellations, damaged item, and faulty-on-arrival policy for Peptide Products laboratory research compound orders.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/returns",
  },
};

export default function ReturnsPage() {
  return (
    <div>
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">Returns & refunds</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Returns, refunds, and cancellations
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                This page explains our returns, refunds, and cancellation policy
                for laboratory research products supplied by Peptide Products UK.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">Research use only</span>
                <span className="trust-pill">Chain-of-custody policy</span>
                <span className="trust-pill">Faulty-on-arrival support</span>
                <span className="trust-pill">Contact within 48 hours</span>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                All sales final
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Due to the nature of laboratory research compounds,
                chain-of-custody requirements, and product handling standards,
                all sales are final once an order has been packed or dispatched.
              </p>

              <p className="mt-3 text-sm leading-7 text-muted">
                We do not accept returns, refunds, or exchanges for unwanted
                items, change-of-mind purchases, ordering mistakes, or products
                that have been opened, used, handled, or stored outside our
                control.
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Damaged, incorrect, or faulty-on-arrival items
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                If your order arrives damaged, incorrect, or faulty on arrival,
                please contact support within 48 hours of delivery. Include your
                order number, the email address used on the order, a clear
                description of the issue, and photos where relevant.
              </p>

              <p className="mt-3 text-sm leading-7 text-muted">
                Products must remain unopened and unused unless the issue relates
                directly to visible damage during delivery. We may request
                photographs of the outer packaging, inner packaging, product
                label, and affected item before we can review the issue.
              </p>

              <div className="mt-5 rounded-xl2 border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-800">
                Please do not dispose of packaging or affected items until we
                have reviewed your message, as this may be needed to assess the
                issue.
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Cancellations
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                If you need to cancel an order, contact us immediately. If the
                order has not yet been packed, dispatched, or processed for
                fulfilment, we may be able to cancel it.
              </p>

              <p className="mt-3 text-sm leading-7 text-muted">
                Once an order has been packed, dispatched, or handed to the
                delivery provider, cancellation may no longer be possible.
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Payment confirmation and dispatch
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Orders are processed after successful card payment has been confirmed through Stripe.
              </p>

              <p className="mt-3 text-sm leading-7 text-muted">
                UK orders received before 3pm on working days are usually
                dispatched the same working day after payment confirmation.
                Orders placed after 3pm, on weekends, or on bank holidays are
                usually dispatched the next working day.
              </p>

              <div className="mt-5">
                <Link
                  href="/shipping"
                  className="font-extrabold text-accent hover:underline"
                >
                  View full shipping information →
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Need help with an order?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                If your message is about an existing order, please include your
                order number so we can check it faster.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  Contact support
                </Link>

                <Link
                  href="/order-status"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Check order status
                </Link>

                <Link
                  href="/faq"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Read FAQ
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Research-use-only notice
              </h2>

              <p className="mt-3 text-sm leading-7 text-muted">
                Products are supplied strictly for laboratory research use only.
                They are not for human consumption, medical use, veterinary use,
                clinical use, diagnostic use, or treatment purposes.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}