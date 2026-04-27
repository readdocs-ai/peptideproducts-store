import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Compounds UK | Laboratory Supply UK",
  description:
    "Research compounds UK supplier including peptides and laboratory materials. Secure checkout, UK delivery, and supporting documentation available on selected product lines.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-compounds-uk",
  },
};

const categories = [
  {
    name: "Research peptides",
    href: "/research-peptides",
  },
  {
    name: "Metabolic compounds",
    href: "/product/retatrutide",
  },
  {
    name: "Regenerative compounds",
    href: "/regenerative-peptides",
  },
];

const faqs = [
  {
    q: "What are research compounds?",
    a: "Research compounds are materials supplied for laboratory, analytical, and scientific research environments. They are not intended for human consumption or medical use.",
  },
  {
    q: "Can research compounds be ordered in the UK?",
    a: "Yes. Products can be viewed online and ordered through the website using secure checkout options.",
  },
  {
    q: "Do you offer UK delivery?",
    a: "Yes. Orders are prepared for tracked UK dispatch, with international shipping available on selected orders.",
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
              Peptide Products supplies research compounds in the UK for laboratory,
              analytical, and scientific environments. This page provides an overview
              of available compound categories, product access, and ordering
              information.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products are listed strictly for laboratory and research use only.
              They are not intended for human consumption, medical use, or clinical
              application.
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

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {categories.map((c) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    className="surface-card p-5"
                  >
                    <div className="font-extrabold text-ink">
                      {c.name}
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      Explore related products, availability, and ordering options.
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering research compounds in the UK
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Secure checkout
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Card payments are processed securely through Stripe.
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
                    All products are supplied strictly for laboratory use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Popular research compounds
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/product/retatrutide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Retatrutide
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View product details, stock availability, and ordering options.
                  </p>
                </Link>

                <Link href="/product/tirzepatide-tr40-40mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Tirzepatide
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Access product information and availability.
                  </p>
                </Link>

                <Link href="/product/ghk-cu-100mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    GHK-CU
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Explore regenerative compound product details.
                  </p>
                </Link>

                <Link href="/product/bpc-157-10mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    BPC-157
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View product information and ordering options.
                  </p>
                </Link>
              </div>
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