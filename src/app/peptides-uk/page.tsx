import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Peptides UK | Research Peptide Supplier UK",
  description:
    "Browse peptides UK supplier pages including Retatrutide, Tirzepatide, and GHK-CU. Laboratory research compounds supplied with secure checkout and UK delivery.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/peptides-uk",
  },
};

const products = [
  {
    name: "Retatrutide",
    href: "/product/retatrutide",
  },
  {
    name: "Tirzepatide",
    href: "/product/tirzepatide-tr40-40mg",
  },
  {
    name: "GHK-CU",
    href: "/product/ghk-cu-100mg",
  },
  {
    name: "BPC-157",
    href: "/product/bpc-157-10mg",
  },
];

const faqs = [
  {
    q: "Are peptides listed for human use?",
    a: "No. All peptides listed are supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    q: "Can I order peptides in the UK?",
    a: "Yes. Products can be viewed online and ordered through the website with secure checkout options.",
  },
  {
    q: "Is UK delivery available?",
    a: "Yes. Orders are prepared for tracked UK delivery, with international shipping available on selected orders.",
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
              Peptides UK supplier
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              Peptide Products supplies a range of peptides in the UK for laboratory,
              analytical, and research environments. This page provides an overview
              of available peptide products, ordering guidance, and related research
              pages.
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
                Browse all peptides
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
                Available peptide products
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {products.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="surface-card p-5"
                  >
                    <div className="font-extrabold text-ink">
                      {p.name}
                    </div>
                    <p className="mt-2 text-sm text-muted">
                      View product details, stock availability, and ordering options.
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering peptides in the UK
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
                    Research only
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    All products are supplied strictly for laboratory use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Retatrutide UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View Retatrutide availability and product information.
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

                <Link href="/quality-assurance" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Quality & documentation
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Review available product documentation and information.
                  </p>
                </Link>

                <Link href="/contact" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Contact support
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Get help with products, ordering, and delivery.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Peptides UK FAQs
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