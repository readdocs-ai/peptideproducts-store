import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Tirzepatide Price UK | Research Compound Pricing",
  description:
    "View Tirzepatide price UK for laboratory research compounds. Access product pricing, availability, and ordering information for UK customers.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/tirzepatide-price-uk",
  },
};

const faqs = [
  {
    q: "What is the price of Tirzepatide in the UK?",
    a: "Pricing varies depending on product size, batch availability, and supply. Customers can view current pricing directly on the product page.",
  },
  {
    q: "Is pricing shown online?",
    a: "Yes. Product pages display current pricing, stock status, and ordering options where available.",
  },
  {
    q: "Are these products for human use?",
    a: "No. All products are supplied strictly for laboratory, analytical, and scientific research use only.",
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
              This page provides information on Tirzepatide pricing in the UK for
              laboratory and analytical research use. Customers can review current
              pricing, availability, and ordering options through the product page.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products are listed strictly for laboratory and research use only.
              They are not intended for human consumption, medical use, or treatment
              purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/tirzepatide-tr40-40mg"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View pricing
              </Link>

              <Link
                href="/buy-tirzepatide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Buy Tirzepatide UK
              </Link>

              <Link
                href="/tirzepatide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Tirzepatide UK info
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Tirzepatide pricing overview
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Tirzepatide pricing may vary depending on stock levels, product
                format, and supplier availability. Product pages provide the most
                up-to-date pricing and allow customers to review options before
                ordering.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current pricing, visit the{" "}
                <Link
                  href="/product/tirzepatide-tr40-40mg"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Tirzepatide product page
                </Link>
                .
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering and delivery
              </h2>

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
                Related pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/buy-tirzepatide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Buy Tirzepatide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Access ordering and checkout options.
                  </p>
                </Link>

                <Link href="/retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Retatrutide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View related compound information.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                FAQs
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