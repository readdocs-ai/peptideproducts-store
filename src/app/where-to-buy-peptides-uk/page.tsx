import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Where to Buy Peptides UK | Laboratory Research Supply",
  description:
    "Where to buy peptides UK for laboratory and analytical research use. Browse research peptides, product pages, delivery information, and secure checkout options.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/where-to-buy-peptides-uk",
  },
};

const productLinks = [
  {
    name: "Retatrutide",
    href: "/product/retatrutide",
    copy: "View Retatrutide product details, availability, and ordering options.",
  },
  {
    name: "Tirzepatide",
    href: "/product/tirzepatide-tr40-40mg",
    copy: "Review Tirzepatide product information, pricing, and availability.",
  },
  {
    name: "GHK-CU",
    href: "/product/ghk-cu-100mg",
    copy: "Explore GHK-CU product details and laboratory supply information.",
  },
  {
    name: "BPC-157",
    href: "/product/bpc-157-10mg",
    copy: "View BPC-157 product details and ordering options.",
  },
];

const relatedPages = [
  {
    name: "Buy peptides UK",
    href: "/buy-peptides-uk",
  },
  {
    name: "Peptides UK",
    href: "/peptides-uk",
  },
  {
    name: "Research compounds UK",
    href: "/research-compounds-uk",
  },
  {
    name: "Metabolic research compounds",
    href: "/metabolic-research-compounds",
  },
];

const faqs = [
  {
    q: "Where can I buy peptides in the UK?",
    a: "Peptide Products lists peptides and related research compounds online for laboratory, analytical, and scientific research use only.",
  },
  {
    q: "Are these products for human use?",
    a: "No. Products listed by Peptide Products are supplied strictly for laboratory and research use only. They are not intended for human consumption, medical use, veterinary use, or clinical treatment.",
  },
  {
    q: "Can I check product details before ordering?",
    a: "Yes. Product pages include pack details, stock information, pricing, checkout options, and supporting documentation where available.",
  },
  {
    q: "Is UK delivery available?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international shipping options available depending on destination.",
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
              Where to buy peptides UK
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              This page helps UK customers find peptide product information,
              research compound categories, product pages, pricing access, and
              ordering guidance for laboratory and analytical research use.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              Peptide Products provides online access to peptides and related
              research compounds for laboratory use only. Products are not
              intended for human consumption, medical use, veterinary use,
              clinical use, or treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse products
              </Link>

              <Link
                href="/buy-peptides-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Buy peptides UK
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
                Finding peptides for laboratory research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers looking for peptides in the UK can browse the current
                catalogue, review individual product pages, compare related
                research compound categories, and check ordering information
                before completing checkout.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Product pages include details such as pack information, stock
                status, pricing, checkout options, and supporting documentation
                where available.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {productLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{item.name}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {item.copy}
                    </p>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      View product →
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                What to check before ordering
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Product information
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review pack size, stock status, pricing, and product details.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Delivery details
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Check shipping information before completing checkout.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research use only
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Confirm products are suitable for laboratory research use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {relatedPages.map((item) => (
                  <Link key={item.href} href={item.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{item.name}</div>
                    <p className="mt-2 text-sm text-muted">
                      Open related research compound and peptide supply pages.
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Where to buy peptides UK FAQs
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