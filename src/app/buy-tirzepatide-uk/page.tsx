import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Tirzepatide UK | Research Supply",
  description:
    "Buy Tirzepatide UK for laboratory and analytical research use. View Tirzepatide product availability, pricing, secure checkout, UK delivery information, and related research pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-tirzepatide-uk",
  },
};

const faqs = [
  {
    q: "Can Tirzepatide be purchased in the UK?",
    a: "Tirzepatide is listed for laboratory, analytical, and scientific research use only. Customers can view product availability, pricing, and ordering information through the website.",
  },
  {
    q: "Is this product for human use?",
    a: "No. All products are supplied strictly for laboratory and research purposes. They are not intended for human consumption, medical use, veterinary use, clinical use, or treatment purposes.",
  },
  {
    q: "Do you offer UK delivery?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international options available depending on destination.",
  },
  {
    q: "Can I check the price before ordering?",
    a: "Yes. Current Tirzepatide pricing and stock status can be reviewed directly on the product page before checkout.",
  },
];

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="eyebrow">Laboratory supply</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Buy Tirzepatide UK
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              Access Tirzepatide in the UK for laboratory and analytical
              research use. Peptide Products provides transparent product pages,
              current availability, secure checkout, and tracked delivery
              information for research-use-only customers.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-pill">UK-based supplier</span>
              <span className="trust-pill">Tracked delivery available</span>
              <span className="trust-pill">Secure checkout via Stripe</span>
              <span className="trust-pill">Laboratory research use only</span>
            </div>

            <div className="mt-5 inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-extrabold text-red-700">
              Limited UK stock — high demand
            </div>

            <p className="mt-5 text-base leading-8 text-muted">
              All products are supplied strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              veterinary use, clinical use, or treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/tirzepatide-tr15-15mg"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Tirzepatide product →
              </Link>

              <Link
                href="/tirzepatide-price-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                View Tirzepatide pricing
              </Link>

              <Link
                href="/where-to-buy-tirzepatide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Where to buy Tirzepatide UK
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                How to order Tirzepatide in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can access Tirzepatide through the product page, where
                pricing, availability, pack information, and checkout options are
                displayed. Orders are processed securely and prepared for tracked
                delivery after confirmation.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current stock levels and product details, visit the{" "}
                <Link
                  href="/product/tirzepatide-tr15-15mg"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Tirzepatide product page
                </Link>
                .
              </p>
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
                    Review pricing, stock status, pack details, and checkout
                    options before ordering.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Secure checkout
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Card payments are processed securely through Stripe.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Tracked delivery
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Orders are prepared for tracked delivery after processing.
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
                Ordering and delivery
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review product information, add products to cart,
                and complete checkout securely online. After ordering, customers
                can use the{" "}
                <Link
                  href="/order-status"
                  className="font-semibold text-ink hover:text-accent"
                >
                  order status page
                </Link>{" "}
                to check progress.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Secure checkout
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Payments are processed securely through Stripe.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    UK dispatch
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Orders are prepared for tracked delivery after processing.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research use only
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Products are supplied strictly for laboratory use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related Tirzepatide pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/product/tirzepatide-tr15-15mg"
                  className="surface-card p-5"
                >
                  <div className="font-extrabold text-ink">
                    Tirzepatide product page
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View product details, stock status, pricing, and checkout
                    options.
                  </p>
                </Link>

                <Link href="/tirzepatide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Tirzepatide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Review UK availability and product information.
                  </p>
                </Link>

                <Link href="/tirzepatide-price-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Tirzepatide price UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View pricing guidance and current product access.
                  </p>
                </Link>

                <Link
                  href="/where-to-buy-tirzepatide-uk"
                  className="surface-card p-5"
                >
                  <div className="font-extrabold text-ink">
                    Where to buy Tirzepatide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Find product access, delivery information, and related pages.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                More research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide UK</div>
                  <p className="mt-2 text-sm text-muted">
                    View related Retatrutide product access and information.
                  </p>
                </Link>

                <Link
                  href="/metabolic-research-compounds"
                  className="surface-card p-5"
                >
                  <div className="font-extrabold text-ink">
                    Metabolic research compounds
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse related metabolic pathway research pages.
                  </p>
                </Link>

                <Link href="/buy-peptides-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Buy peptides UK</div>
                  <p className="mt-2 text-sm text-muted">
                    Browse peptide product pages and ordering information.
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
                Buy Tirzepatide UK FAQs
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