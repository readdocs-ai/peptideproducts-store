import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Peptides UK | Laboratory Research Supply",
  description:
    "Buy peptides UK for laboratory and analytical research use. Browse research peptides, metabolic compounds, product pages, delivery information, and secure checkout options.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-peptides-uk",
  },
};

const productLinks = [
  {
    name: "Retatrutide",
    href: "/product/retatrutide",
    copy: "View Retatrutide product details, current availability, and ordering options.",
  },
  {
    name: "Tirzepatide",
    href: "/product/tirzepatide-tr40-40mg",
    copy: "Review Tirzepatide product information, pricing, and laboratory supply details.",
  },
  {
    name: "GHK-CU",
    href: "/product/ghk-cu-100mg",
    copy: "Explore GHK-CU product information and availability.",
  },
  {
    name: "BPC-157",
    href: "/product/bpc-157-10mg",
    copy: "View BPC-157 product details and ordering options.",
  },
];

const relatedPages = [
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
  {
    name: "Research peptides",
    href: "/research-peptides",
  },
];

const faqs = [
  {
    q: "Can peptides be purchased in the UK?",
    a: "Peptide Products lists peptides and related research compounds for laboratory, analytical, and scientific research use only. Customers can browse products online and complete checkout through the website.",
  },
  {
    q: "Are these peptides for human use?",
    a: "No. All products are supplied strictly for laboratory and research use only. They are not intended for human consumption, medical use, veterinary use, or clinical treatment.",
  },
  {
    q: "Is UK delivery available?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international shipping options available depending on destination.",
  },
  {
    q: "Can I review product details before ordering?",
    a: "Yes. Product pages include pack information, stock status, pricing, checkout options, and supporting documentation where available.",
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
              Buy peptides UK for laboratory research
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              Peptide Products provides online access to peptides and related
              research compounds in the UK for laboratory, analytical, and
              scientific research environments. This page helps customers browse
              product categories, compare related pages, review ordering
              information, and access product pages directly.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              Products listed on this website are supplied strictly for
              laboratory and research use only. They are not intended for human
              consumption, medical use, veterinary use, clinical use, or
              treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse products
              </Link>

              <Link
                href="/peptides-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Peptides UK guide
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
                Peptides available to UK customers
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review individual product pages for current stock
                status, pack information, pricing, checkout options, and related
                product guidance. The catalogue includes metabolic research
                compounds, regenerative research products, and wider laboratory
                peptide-related materials.
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
                Ordering peptides online
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can browse the catalogue, open individual product
                pages, add products to cart, and complete checkout online. Card
                payments are processed securely through Stripe, and selected
                alternative payment options may also be available through the
                checkout process.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                After ordering, customers can use the{" "}
                <Link
                  href="/order-status"
                  className="font-semibold text-ink hover:text-accent"
                >
                  order status page
                </Link>{" "}
                to check progress using their order number and email address.
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
                    Products are supplied strictly for laboratory use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {relatedPages.map((item) => (
                  <Link key={item.href} href={item.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{item.name}</div>
                    <p className="mt-2 text-sm text-muted">
                      Open related product guides and laboratory supply pages.
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Buy peptides UK FAQs
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