import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Tirzepatide UK | Laboratory Research Compound",
  description:
    "Tirzepatide UK information page for laboratory and analytical research use. View product details, ordering guidance, quality information, and related research pages.",
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
    q: "Can I review product information before ordering?",
    a: "Yes. Product pages include pack details, stock information, ordering options, and supporting documentation where available.",
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
              Tirzepatide is listed by Peptide Products as a laboratory research
              compound for analytical and scientific research environments. This
              page helps UK customers review Tirzepatide availability, product
              information, ordering guidance, quality pages, and related
              research-use-only content.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products are supplied strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              veterinary use, clinical use, or treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/tirzepatide-tr40-40mg"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Tirzepatide product
              </Link>

              <Link
                href="/metabolic-research-compounds"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Metabolic research compounds
              </Link>

              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Quality & documentation
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
                For current stock and pricing, visit the{" "}
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
                Ordering and delivery information
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review product information, add products to cart,
                and complete checkout securely online. Card payments are
                processed through Stripe, and customers can use the{" "}
                <Link
                  href="/order-status"
                  className="font-semibold text-ink hover:text-accent"
                >
                  order status page
                </Link>{" "}
                after ordering to check progress.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
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
                    UK dispatch
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Orders are prepared for tracked delivery after processing.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research only
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Supplied strictly for laboratory and analytical use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/product/tirzepatide-tr40-40mg"
                  className="surface-card p-5"
                >
                  <div className="font-extrabold text-ink">
                    Tirzepatide product page
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View product details, stock status, and checkout options.
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

                <Link href="/retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide UK</div>
                  <p className="mt-2 text-sm text-muted">
                    View related Retatrutide UK information and product access.
                  </p>
                </Link>

                <Link href="/research-compounds-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Research compounds UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse broader laboratory compound categories.
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