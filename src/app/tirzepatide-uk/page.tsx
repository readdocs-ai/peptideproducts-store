import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Tirzepatide UK | Research Supply",
  description:
    "Tirzepatide UK laboratory research compound page with product access, pricing links, secure checkout guidance, UK delivery information, and research-use-only supply.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/tirzepatide-uk",
  },
};

const faqs = [
  {
    q: "Is Tirzepatide listed for human use?",
    a: "No. Tirzepatide products listed by Peptide Products are supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    q: "Can UK customers order Tirzepatide online?",
    a: "Yes. Customers can view the Tirzepatide product page online, review available product information, and complete checkout through the website.",
  },
  {
    q: "Is UK delivery available?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international shipping options available depending on destination.",
  },
  {
    q: "Can I check Tirzepatide pricing before ordering?",
    a: "Yes. Current pricing, availability, and product information can be reviewed directly on the Tirzepatide product page.",
  },
];

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="eyebrow">Laboratory use only</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Tirzepatide UK laboratory research compound
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              UK-based supply of Tirzepatide research compound with transparent
              product pages, secure checkout, ordering guidance, and tracked
              delivery information for laboratory and analytical research
              customers.
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
                href="/buy-tirzepatide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Buy Tirzepatide UK
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Tirzepatide availability in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products provides Tirzepatide product information for UK
                customers looking for laboratory research materials and reference
                compounds. Product pages show pack details, stock status, pricing,
                checkout options, and relevant supporting information where
                available.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current stock, pricing, and ordering options, visit the{" "}
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
                    UK-based supply
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Orders are prepared with clear product information and
                    tracked delivery guidance.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Transparent product pages
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    View pack details, stock status, pricing, and checkout
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
                Ordering Tirzepatide in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review product information, add products to cart,
                and complete checkout securely online. Orders are prepared for
                tracked delivery after processing.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                After ordering, customers can use the{" "}
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
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Payments are processed securely through Stripe.
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
                    Product information
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review stock, pricing, and pack details before checkout.
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

                <Link href="/buy-tirzepatide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Buy Tirzepatide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Review ordering guidance and product access information.
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
                    View related Retatrutide UK product access and information.
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
                Tirzepatide UK FAQs
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