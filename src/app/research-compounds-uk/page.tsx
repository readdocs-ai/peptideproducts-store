import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Compounds UK | Laboratory Supply UK",
  description:
    "Research compounds UK supplier for laboratory materials, peptides, metabolic research compounds, and reference materials. Secure checkout, UK delivery, and research-use-only supply.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-compounds-uk",
  },
};

const categories = [
  {
    name: "Research peptides",
    href: "/research-peptides",
    copy: "Browse the wider research peptide category and supporting research pages.",
  },
  {
    name: "Metabolic research compounds",
    href: "/metabolic-research-compounds",
    copy: "Explore metabolic pathway research materials including Retatrutide and Tirzepatide.",
  },
  {
    name: "Regenerative compounds",
    href: "/regenerative-peptides",
    copy: "View regenerative research categories including GHK-CU and BPC-157 related pages.",
  },
  {
    name: "Peptides UK",
    href: "/peptides-uk",
    copy: "Review UK peptide supply information, product access, and ordering guidance.",
  },
];

const popularProducts = [
  {
    name: "Retatrutide",
    href: "/product/retatrutide",
    copy: "View product details, stock availability, and ordering options.",
  },
  {
    name: "Tirzepatide",
    href: "/product/tirzepatide-tr40-40mg",
    copy: "Access product information and laboratory supply details.",
  },
  {
    name: "GHK-CU",
    href: "/product/ghk-cu-100mg",
    copy: "Explore regenerative compound product details and availability.",
  },
  {
    name: "BPC-157",
    href: "/product/bpc-157-10mg",
    copy: "View product information, pricing, and ordering options.",
  },
];

const faqs = [
  {
    q: "What are research compounds?",
    a: "Research compounds are materials supplied for laboratory, analytical, and scientific research environments. They are not intended for human consumption, medical use, veterinary use, or clinical application.",
  },
  {
    q: "Can research compounds be ordered in the UK?",
    a: "Yes. Products can be viewed online and ordered through the website using secure checkout options.",
  },
  {
    q: "Do you offer UK delivery?",
    a: "Yes. Orders are prepared for tracked UK dispatch, with international shipping available on selected orders.",
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
            <div className="eyebrow">Laboratory supply</div>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Research compounds UK supplier
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              Peptide Products supplies research compounds in the UK for
              laboratory, analytical, and scientific environments. This page
              provides an overview of available compound categories, product
              access, quality information, ordering guidance, and related
              research-use-only pages.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              The catalogue includes research peptide products, metabolic
              research compounds, regenerative research products, and supporting
              laboratory materials. Customers can browse categories, open
              individual product pages, review ordering options, and check
              delivery information before placing an order.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products are listed strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              veterinary use, clinical use, or treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse all products
              </Link>

              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Quality & documentation
              </Link>

              <Link
                href="/contact"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Contact support
              </Link>
            </div>

            <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Available research compound categories
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                The site is organised around several research compound categories
                to help customers move from broad discovery into the most
                relevant product pages. This includes peptide-related laboratory
                materials, metabolic pathway research compounds, and regenerative
                research products.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {categories.map((c) => (
                  <Link key={c.name} href={c.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{c.name}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{c.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      Open page →
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering research compounds in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can browse the current catalogue, review product pages,
                add items to cart, and complete checkout securely online. Card
                payments are processed through Stripe, and customers can use the{" "}
                <Link
                  href="/order-status"
                  className="font-semibold text-ink hover:text-accent"
                >
                  order status page
                </Link>{" "}
                after ordering to check progress.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                UK orders are prepared for tracked dispatch after processing.
                Selected international shipping options may also be available
                depending on destination.
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
                Popular research compounds
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Popular product pages include metabolic and regenerative research
                compounds alongside broader peptide supply pages. Each product
                page includes product details, pack information, availability,
                pricing, and ordering options.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {popularProducts.map((item) => (
                  <Link key={item.href} href={item.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{item.name}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      View product →
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Quality information
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Selected product pages include supporting documentation or
                quality information where available. Customers can review the{" "}
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
                Research compounds UK FAQs
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