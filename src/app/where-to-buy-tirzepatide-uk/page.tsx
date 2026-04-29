import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Where to Buy Tirzepatide UK | Laboratory Research Supply",
  description:
    "Where to buy Tirzepatide UK for laboratory and analytical research use. View product availability, pricing, delivery information, and related research pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/where-to-buy-tirzepatide-uk",
  },
};

const faqs = [
  {
    q: "Where can I buy Tirzepatide in the UK?",
    a: "Tirzepatide can be viewed through the Peptide Products website for laboratory, analytical, and scientific research use only.",
  },
  {
    q: "Is Tirzepatide available for human use?",
    a: "No. Products listed by Peptide Products are supplied strictly for laboratory research use only and are not intended for human consumption.",
  },
  {
    q: "Can I check the price before ordering?",
    a: "Yes. Current pricing and availability can be reviewed directly on the Tirzepatide product page.",
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
              Where to buy Tirzepatide UK
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              This page helps UK customers find Tirzepatide product information,
              current availability, pricing guidance, and ordering options for
              laboratory and analytical research use.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products listed by Peptide Products are supplied strictly for
              laboratory and research use only. They are not intended for human
              consumption, medical use, veterinary use, clinical use, or
              treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/tirzepatide-tr40-40mg"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Tirzepatide product
              </Link>

              <Link
                href="/tirzepatide-price-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Tirzepatide price UK
              </Link>

              <Link
                href="/tirzepatide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Tirzepatide UK guide
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Buying Tirzepatide for laboratory research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review Tirzepatide product details directly on the
                product page, including pack information, availability, pricing,
                and checkout options. This provides a clear route from research
                information to product access.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For direct access, visit the{" "}
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
                What to check before ordering
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Product details
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review pack size, stock status, and product information.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Delivery information
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Check shipping details before completing checkout.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research use only
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Confirm the product is suitable for laboratory research use.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related Tirzepatide pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/buy-tirzepatide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Buy Tirzepatide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Review ordering information and product access.
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

                <Link href="/metabolic-research-compounds" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Metabolic research compounds
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse related metabolic research materials.
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