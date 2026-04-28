import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Tirzepatide UK | Laboratory Research Compound Supply",
  description:
    "Buy Tirzepatide UK for laboratory and analytical research use. View product availability, pricing, delivery options, and supporting information.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-tirzepatide-uk",
  },
};

const faqs = [
  {
    q: "Can Tirzepatide be purchased in the UK?",
    a: "Tirzepatide is listed for laboratory, analytical, and scientific research use only. Customers can view product availability and order through the website.",
  },
  {
    q: "Is this product for human use?",
    a: "No. All products are supplied strictly for research purposes and are not intended for human consumption or medical use.",
  },
  {
    q: "Do you offer UK delivery?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international options available.",
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
              This page provides information on how to access Tirzepatide in the UK
              for laboratory and analytical research purposes. Customers can review
              product availability, pricing, and ordering options through the main
              product page.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products are supplied strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              or treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/tirzepatide-tr40-40mg"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Tirzepatide product
              </Link>

              <Link
                href="/tirzepatide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Tirzepatide UK page
              </Link>

              <Link
                href="/shipping"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Shipping information
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                How to order Tirzepatide in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can access Tirzepatide through the product page, where
                pricing, availability, and checkout options are displayed. Orders
                are processed securely and prepared for dispatch after confirmation.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current stock levels and product details, visit the{" "}
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
                <Link href="/retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide UK</div>
                  <p className="mt-2 text-sm text-muted">
                    View related compound availability and product information.
                  </p>
                </Link>

                <Link href="/metabolic-research-compounds" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Metabolic research compounds
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse related laboratory compound categories.
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