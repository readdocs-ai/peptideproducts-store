import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "Terms & Conditions | Peptide Products UK",
  description:
    "Terms and conditions for Peptide Products UK, including research-use-only supply, ordering, payment, delivery, returns, buyer responsibility, and website use.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/terms",
  },
};

export default function TermsPage() {
  return (
    <div>
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">Terms & conditions</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Terms and conditions
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                These terms apply when you access this website, browse products,
                place an order, contact support, or purchase from Peptide Products UK.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">Research use only</span>
                <span className="trust-pill">18+ only</span>
                <span className="trust-pill">Buyer responsibility</span>
                <span className="trust-pill">All sales final</span>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Business information
              </h2>

              <div className="mt-4 rounded-xl2 border border-line bg-panel p-5 text-sm leading-7 text-muted">
                <div className="font-extrabold text-ink">Peptide Products Ltd</div>
                <div>Company No: 17073416</div>
                <div>Email: {brand.supportEmail}</div>
                <div>Phone: {brand.phone}</div>
              </div>
            </section>

            <section className="mt-8 grid gap-6">
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Research-use-only products
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Products sold by Peptide Products are supplied strictly for
                  laboratory research, analytical, and scientific research use only.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Products are not intended for human consumption, medical use,
                  veterinary use, clinical use, diagnostic use, treatment purposes,
                  prevention purposes, cosmetic use, food use, household use, or
                  any form of personal use.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Age restriction
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  You must be 18 or over to access this website, place an order,
                  or purchase products from Peptide Products.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Buyer responsibility
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  By placing an order, you confirm that you are responsible for
                  ensuring that you are permitted to purchase, possess, import,
                  store, handle, and use the products in your jurisdiction.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  You are responsible for complying with all applicable laws,
                  import rules, customs requirements, laboratory safety standards,
                  handling requirements, storage requirements, and disposal rules.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  No medical or personal-use advice
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We do not provide medical advice, veterinary advice, dosing
                  guidance, administration instructions, personal-use guidance,
                  treatment guidance, or clinical recommendations.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Requests relating to personal consumption, dosage, treatment,
                  injection, administration, clinical use, or veterinary use are
                  not supported.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Product information and availability
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Product pages are provided for general product identification,
catalogue, and research-reference purposes. Product availability,
pricing, images, pack sizes, test report availability, and stock status may
change without notice.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Test report and quality information availability varies by product line.
Customers who need quality information should review the quality information
page or contact support before ordering.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Quality information
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact support
                  </Link>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Orders and payment
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Orders are accepted at our discretion. We may refuse, cancel, or
                  review an order where required for compliance, payment, stock,
                  fraud-prevention, address, or fulfilment reasons.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Card payments are processed securely through Stripe. Orders are processed after successful payment confirmation.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Customers should retain their order confirmation and payment reference when contacting support.
                </p>
              </div>

             

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Dispatch and delivery
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Orders are dispatched after payment confirmation. UK orders
                  received before 3pm on working days are usually dispatched the
                  same working day for next-working-day delivery. Orders placed
                  after 3pm, on weekends, or on bank holidays are usually
                  dispatched the next working day.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Delivery timeframes are estimates only and may be affected by
                  courier delays, payment confirmation, customs processing, local
                  delivery conditions, bank holidays, or circumstances outside our
                  control.
                </p>

                <div className="mt-5">
                  <Link
                    href="/shipping"
                    className="font-extrabold text-accent hover:underline"
                  >
                    View shipping information →
                  </Link>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  International orders and customs
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  International customers are responsible for checking local import
                  rules before ordering. The buyer is responsible for customs
                  clearance, taxes, duties, import permissions, and any risks
                  associated with restrictions in their jurisdiction.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  International parcels usually arrive within approximately 6–7
                  working days, but this is an estimated timeframe only.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Returns, refunds, and cancellations
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Due to the nature of research compounds, product handling
                  requirements, and chain-of-custody considerations, all sales are
                  final once an order has been packed or dispatched.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We do not accept returns, refunds, or exchanges for unwanted
                  items, change-of-mind purchases, ordering mistakes, or products
                  that have been opened, used, handled, or stored outside our
                  control, except where required by law or where an item is damaged,
                  incorrect, or faulty on arrival.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  If you need to cancel an order, contact us immediately. Once an
                  order has been packed, dispatched, or handed to the delivery
                  provider, cancellation may not be possible.
                </p>

                <div className="mt-5">
                  <Link
                    href="/returns"
                    className="font-extrabold text-accent hover:underline"
                  >
                    View returns and refunds policy →
                  </Link>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Website use
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  You agree not to misuse the website, attempt unauthorised access,
                  interfere with checkout, submit false information, use the website
                  for unlawful purposes, or attempt to place orders in breach of
                  applicable laws or these terms.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Limitation of liability
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  To the fullest extent permitted by law, Peptide Products
                  disclaims liability for misuse, improper handling, improper
                  storage, unlawful use, unauthorised personal use, or use outside
                  controlled laboratory research environments.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Buyers accept responsibility for assessing suitability,
                  compliance, handling, storage, and use before purchasing.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Changes to these terms
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We may update these terms from time to time. The version
                  published on this page applies when you access the website or
                  place an order.
                </p>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Need help before ordering?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                If you have questions about product information, quality information,
payment confirmation, shipping, or an existing order, contact us.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  Contact support
                </Link>

                <Link
                  href="/faq"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Read FAQ
                </Link>

                <Link
                  href="/order-status"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Check order status
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}