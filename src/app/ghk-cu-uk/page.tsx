import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "GHK-CU UK | Copper Peptide Research Compound",
  description:
    "GHK-CU UK research compound page for laboratory-use-only copper peptide products. Compare GHK-CU 50mg and 100mg product options, quality information, UK delivery, and ordering support.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/ghk-cu-uk",
  },
};

const faqs = [
  {
    q: "Is GHK-CU listed for human use?",
    a: "No. GHK-CU products listed by Peptide Products are supplied strictly for laboratory, analytical, and scientific research use only. They are not supplied for human consumption, medical use, veterinary use, clinical use, or treatment purposes.",
  },
  {
    q: "Which GHK-CU product options are available?",
    a: "Peptide Products lists GHK-CU 50mg and GHK-CU 100mg research product pages. Each product page should be checked for current pricing, pack size, stock status, quality information, and checkout route.",
  },
  {
    q: "Is UK delivery available?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international delivery options available depending on destination.",
  },
  {
    q: "Can I review product information before ordering?",
    a: "Yes. Product pages include pack details, stock information, pricing, ordering route, research-use-only notices, and supporting documentation where available.",
  },
];

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="eyebrow">Laboratory research use only</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              GHK-CU UK copper peptide research compound
            </h1>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
              GHK-CU is listed on Peptide Products as a copper peptide research
              compound for laboratory, analytical, and scientific review. The
              catalogue includes GHK-CU 50mg and GHK-CU 100mg product pages so
              research buyers can compare pack size, price, stock status,
              documentation, delivery information, and ordering route before
              placing an order.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-pill">UK-based supplier</span>
              <span className="trust-pill">Tracked delivery available</span>
              <span className="trust-pill">Secure Stripe checkout</span>
              <span className="trust-pill">Laboratory research use only</span>
            </div>

            <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
              All products are supplied strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              veterinary use, clinical use, diagnostic use, personal use, or
              treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/ghk-cu-50mg"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View GHK-CU 50mg →
              </Link>

              <Link
                href="/product/ghk-cu-100mg"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                View GHK-CU 100mg →
              </Link>

              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Quality information
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                GHK-CU availability in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products provides GHK-CU product information for UK
                customers looking for laboratory research materials and copper
                peptide reference products. Each product page shows pack details,
                stock status, pricing, ordering route, and supporting quality
                information where available.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Link href="/product/ghk-cu-50mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    GHK-CU 50mg product page
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review the 50mg vial option, current price, stock status,
                    pack details, quality information, and ordering route.
                  </p>
                </Link>

                <Link href="/product/ghk-cu-100mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    GHK-CU 100mg product page
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review the 100mg vial option, current price, stock status,
                    pack details, quality information, and ordering route.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Comparing GHK-CU 50mg and 100mg
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                The 50mg and 100mg GHK-CU pages should be compared by stated
                strength, pack size, product price, current stock status,
                supporting documentation, and delivery information. The lower
                strength page gives visitors a separate entry point for the 50mg
                option, while the 100mg page provides a higher-strength catalogue
                option for buyers comparing available copper peptide products.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    GHK-CU 50mg
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    A 50mg vial product page for research buyers comparing a
                    lower-strength copper peptide option with current pricing,
                    pack details, and documentation where available.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    GHK-CU 100mg
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    A 100mg vial product page for buyers comparing a
                    higher-strength copper peptide research option, stock status,
                    and ordering support.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Why order from Peptide Products?
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Transparent product pages
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review pricing, stock status, pack details, product
                    information, quality details, and ordering options before
                    placing an order.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Alternative checkout
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Secure Stripe card checkout is available, with order updates sent by email after payment confirmation.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Tracked delivery
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Orders are prepared for tracked delivery after payment
                    confirmation, processing, and stock checks.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research-use-only supply
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Products are supplied strictly for laboratory, analytical,
                    and scientific research use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering GHK-CU in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review GHK-CU product information, compare the
                50mg and 100mg product pages, add available products to the cart,
                and use the current checkout route shown on the website. Orders
                are prepared for delivery after payment confirmation and
                processing.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                After ordering, customers can use the{" "}
                <Link
                  href="/order-status"
                  className="font-semibold text-ink hover:text-accent"
                >
                  order status page
                </Link>{" "}
                to check progress, or contact support if they need help with
                product information, delivery, payment confirmation, or
                documentation.
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/product/ghk-cu-50mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    GHK-CU 50mg product page
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View the 50mg product page, stock status, pricing, and
                    ordering options.
                  </p>
                </Link>

                <Link href="/product/ghk-cu-100mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    GHK-CU 100mg product page
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View the 100mg product page, stock status, pricing, and
                    ordering options.
                  </p>
                </Link>

                <Link href="/regenerative-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Regenerative peptides
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse related regenerative research product categories.
                  </p>
                </Link>

                <Link href="/research-compounds-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Research compounds UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Explore broader laboratory compound categories.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                GHK-CU UK FAQs
              </h2>

              <div className="mt-5 grid gap-4">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl2 border border-line bg-panel p-4"
                  >
                    <h3 className="text-sm font-extrabold text-ink">
                      {item.q}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}