import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Tirzepatide Price UK | Research Pricing",
  description:
    "View Tirzepatide price UK information for laboratory research supply. Check Tirzepatide product pricing, availability, secure checkout, UK delivery, and related pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/tirzepatide-price-uk",
  },
};

const faqs = [
  {
    q: "What is the price of Tirzepatide in the UK?",
    a: "Pricing may vary depending on product size, stock availability, and supply conditions. Customers can view current pricing directly on the Tirzepatide product page.",
  },
  {
    q: "Is Tirzepatide pricing shown online?",
    a: "Yes. Product pages display current pricing, stock status, pack details, and checkout options where available.",
  },
  {
    q: "Can I order Tirzepatide in the UK?",
    a: "Yes. Customers can review Tirzepatide product information and complete checkout through the website for laboratory research use only.",
  },
  {
    q: "Are these products for human use?",
    a: "No. All products are supplied strictly for laboratory, analytical, and scientific research use only. They are not intended for human consumption, medical use, veterinary use, clinical use, or treatment purposes.",
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
              Tirzepatide price UK
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              View Tirzepatide pricing information for UK laboratory research
              supply. Customers can check current product pricing, stock
              availability, pack information, secure checkout options, and
              tracked delivery guidance through the product page.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-pill">UK-based supplier</span>
              <span className="trust-pill">Current pricing online</span>
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
                View current price →
              </Link>

              <Link
                href="/buy-tirzepatide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Buy Tirzepatide UK
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
                Tirzepatide pricing overview
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Tirzepatide pricing in the UK can vary depending on pack size,
                supplier availability, stock levels, and product format. The
                product page provides the most up-to-date pricing and ordering
                options before checkout.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current pricing, stock status, and product information,
                visit the{" "}
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
                What affects Tirzepatide price?
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Product format
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Pricing can vary depending on the listed pack size and
                    product format.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Stock availability
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Availability may affect pricing where supply changes over
                    time.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Delivery option
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    UK and selected international delivery options may be shown
                    at checkout.
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
                Customers can review product information, confirm pricing, add
                products to cart, and complete checkout securely online. After
                ordering, customers can use the{" "}
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
                    Product access
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Current price and availability are shown on the product page.
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
                    View current pricing, stock status, and checkout options.
                  </p>
                </Link>

                <Link href="/buy-tirzepatide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Buy Tirzepatide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Access ordering guidance and product availability.
                  </p>
                </Link>

                <Link href="/tirzepatide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Tirzepatide UK</div>
                  <p className="mt-2 text-sm text-muted">
                    Review UK availability and product information.
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

                <Link href="/buy-peptides-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Buy peptides UK</div>
                  <p className="mt-2 text-sm text-muted">
                    Browse peptide product pages and ordering information.
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
                Tirzepatide price UK FAQs
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