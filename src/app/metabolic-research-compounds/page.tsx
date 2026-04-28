import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Metabolic Research Compounds UK | Laboratory Supply",
  description:
    "Metabolic research compounds UK supplier including Retatrutide and Tirzepatide laboratory reference materials supplied strictly for research use only.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/metabolic-research-compounds",
  },
};

const compoundLinks = [
  {
    name: "Retatrutide",
    href: "/product/retatrutide",
    copy: "View Retatrutide product details, current availability, and ordering options.",
  },
  {
    name: "Tirzepatide",
    href: "/product/tirzepatide-tr40-40mg",
    copy: "Review Tirzepatide product information and laboratory supply details.",
  },
  {
    name: "Retatrutide UK",
    href: "/retatrutide-uk",
    copy: "Read the UK availability guide for Retatrutide laboratory supply.",
  },
  {
    name: "Research compounds UK",
    href: "/research-compounds-uk",
    copy: "Explore broader laboratory research compound categories.",
  },
];

const faqs = [
  {
    q: "What are metabolic research compounds?",
    a: "Metabolic research compounds are materials studied in laboratory and analytical environments for research relating to metabolic pathways, signalling systems, and compound behaviour.",
  },
  {
    q: "Are these products for human use?",
    a: "No. All products listed by Peptide Products are supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    q: "Can UK customers order online?",
    a: "Yes. Product pages show availability, pricing, checkout options, and delivery information for UK and selected international customers.",
  },
  {
    q: "Which metabolic research compounds are listed?",
    a: "The catalogue includes products such as Retatrutide and Tirzepatide, alongside related research compound pages and supporting product information.",
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
              Metabolic research compounds UK
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              Peptide Products lists metabolic research compounds in the UK for
              laboratory, analytical, and scientific research environments. This
              page helps customers review product categories, ordering guidance,
              quality information, and research-use-only supply details.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              Products in this category include laboratory reference materials
              such as{" "}
              <Link
                href="/product/retatrutide"
                className="font-semibold text-ink hover:text-accent"
              >
                Retatrutide
              </Link>{" "}
              and{" "}
              <Link
                href="/product/tirzepatide-tr40-40mg"
                className="font-semibold text-ink hover:text-accent"
              >
                Tirzepatide
              </Link>
              . These products are supplied strictly for laboratory and research
              use only.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              They are not intended for human consumption, medical use,
              veterinary use, clinical use, or treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse products
              </Link>

              <Link
                href="/retatrutide-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Retatrutide UK
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
                Metabolic pathway research materials
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Metabolic research compounds are commonly reviewed in controlled
                laboratory environments where researchers examine compound
                behaviour, pathway signalling, analytical stability, and related
                research models. Product pages on this site provide pack details,
                availability, checkout options, and supporting information where
                available.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers researching this category often begin with the broader{" "}
                <Link
                  href="/research-compounds-uk"
                  className="font-semibold text-ink hover:text-accent"
                >
                  research compounds UK
                </Link>{" "}
                page before moving into individual product pages such as{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide
                </Link>{" "}
                and{" "}
                <Link
                  href="/product/tirzepatide-tr40-40mg"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Tirzepatide
                </Link>
                .
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related products and pages
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {compoundLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{item.name}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      Open page →
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering metabolic research compounds
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can browse product pages, review product information,
                check stock status, add items to cart, and complete secure
                checkout online. Orders are prepared for dispatch after
                processing, and customers can use the{" "}
                <Link
                  href="/order-status"
                  className="font-semibold text-ink hover:text-accent"
                >
                  order status page
                </Link>{" "}
                to check progress after ordering.
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
                    Research use only
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    All products are supplied strictly for laboratory use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Quality information
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Selected product lines include supporting documentation or quality
                information where available. Customers can review the{" "}
                <Link
                  href="/quality-assurance"
                  className="font-semibold text-ink hover:text-accent"
                >
                  quality and documentation page
                </Link>{" "}
                before ordering or contact support for product-related questions.
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Metabolic research compounds FAQs
              </h2>

              <div className="mt-5 grid gap-4">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl2 border border-line bg-panel p-4"
                  >
                    <h3 className="text-sm font-extrabold text-ink">{item.q}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
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