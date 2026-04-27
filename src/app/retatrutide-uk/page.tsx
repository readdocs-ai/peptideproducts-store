import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Retatrutide UK | Laboratory Research Compound",
  description:
    "Retatrutide UK information page for laboratory and analytical research use. View product details, quality information, shipping guidance, and related research pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/retatrutide-uk",
  },
};

const faqs = [
  {
    question: "Is Retatrutide listed for human use?",
    answer:
      "No. Retatrutide products listed by Peptide Products are supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    question: "Can UK buyers order Retatrutide online?",
    answer:
      "Yes. Customers can view the Retatrutide product page online, review available product information, and complete checkout through the website.",
  },
  {
    question: "Is delivery available outside the UK?",
    answer:
      "UK delivery is available, and selected international shipping options may also be available depending on destination.",
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
              Retatrutide UK laboratory research compound
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              Retatrutide is a laboratory research compound listed by Peptide
              Products for analytical and scientific research environments. This
              page helps UK buyers review Retatrutide availability, product
              details, quality information, ordering guidance, and related
              research pages.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              Products are supplied strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              veterinary use, or clinical treatment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/retatrutide"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View Retatrutide product
              </Link>

              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Quality & documentation
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
                Retatrutide availability in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products lists Retatrutide for UK customers looking for
                laboratory reference materials and research compounds. Product
                details, pack information, stock status, and checkout options can
                be reviewed directly on the product page.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current availability and pricing, visit the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide 40mg product page
                </Link>
                .
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering and delivery information
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Secure checkout
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Card checkout is processed securely through Stripe.
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
                Related Retatrutide pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/product/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Retatrutide product page
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View product details, stock status, and checkout options.
                  </p>
                </Link>

                <Link
                  href="/retatrutide-research-peptide"
                  className="surface-card p-5"
                >
                  <div className="font-extrabold text-ink">
                    Retatrutide research peptide
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Read more supporting research-focused information.
                  </p>
                </Link>

                <Link href="/buy-retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Buy Retatrutide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    UK-focused ordering and availability information.
                  </p>
                </Link>

                <Link href="/research-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Research peptides
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse related research compound categories.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Retatrutide UK FAQs
              </h2>

              <div className="mt-5 grid gap-4">
                {faqs.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl2 border border-line bg-panel p-4"
                  >
                    <h3 className="text-sm font-extrabold text-ink">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      {item.answer}
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