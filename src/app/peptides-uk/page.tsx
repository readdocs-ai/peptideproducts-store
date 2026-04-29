import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Peptides UK | Research Peptide Supplier UK",
  description:
    "Peptides UK supplier for laboratory research compounds including Retatrutide, Tirzepatide, GHK-CU, and BPC-157. Secure checkout, UK dispatch, and research-use-only supply.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/peptides-uk",
  },
};

const products = [
  {
    name: "Retatrutide",
    href: "/product/retatrutide",
    copy: "View Retatrutide product details, current availability, and ordering information.",
  },
  {
    name: "Tirzepatide",
    href: "/product/tirzepatide-tr40-40mg",
    copy: "Review Tirzepatide product information and laboratory supply details.",
  },
  {
    name: "GHK-CU",
    href: "/product/ghk-cu-100mg",
    copy: "Explore GHK-CU availability and related regenerative research products.",
  },
  {
    name: "BPC-157",
    href: "/product/bpc-157-10mg",
    copy: "View BPC-157 product details, pricing, and ordering options.",
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
              Peptides UK supplier for laboratory research
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              Peptide Products supplies a range of peptides in the UK for
              laboratory, analytical, and scientific research environments. This
              page provides an overview of available peptide products, ordering
              guidance, quality information, shipping details, and related
              research pages.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              The catalogue includes products such as{" "}
              <Link href="/product/retatrutide" className="font-semibold text-ink hover:text-accent">
                Retatrutide
              </Link>
              ,{" "}
              <Link href="/product/tirzepatide-tr40-40mg" className="font-semibold text-ink hover:text-accent">
                Tirzepatide
              </Link>
              ,{" "}
              <Link href="/product/ghk-cu-100mg" className="font-semibold text-ink hover:text-accent">
                GHK-CU
              </Link>
              , and{" "}
              <Link href="/product/bpc-157-10mg" className="font-semibold text-ink hover:text-accent">
                BPC-157
              </Link>
              , alongside related laboratory support products.
            </p>

            <p className="mt-4 text-base leading-8 text-muted">
              All products are listed strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              veterinary use, or clinical application.
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
                Available peptide products in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                UK customers can browse product pages to review pack sizes,
                stock availability, pricing, checkout options, and relevant
                supporting information. Product pages are designed to provide
                clear ordering guidance while maintaining a strict
                research-use-only context.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {products.map((p) => (
                  <Link key={p.name} href={p.href} className="surface-card p-5">
                    <div className="font-extrabold text-ink">{p.name}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{p.copy}</p>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      View product →
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering peptides in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products is structured to make ordering clear and simple.
                Customers can browse the catalogue, open individual product
                pages, review quality information where available, add products
                to cart, and complete checkout securely online.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Card payments are processed securely through Stripe. Alternative
                payment options may also be available through the checkout
                process. Customers can also use the{" "}
                <Link href="/order-status" className="font-semibold text-ink hover:text-accent">
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
                    All products are supplied strictly for laboratory use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Quality information and documentation
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Selected product lines include supporting documentation or
                quality information directly on the product page. Customers can
                also review the{" "}
                <Link href="/quality-assurance" className="font-semibold text-ink hover:text-accent">
                  quality and documentation page
                </Link>{" "}
                before placing an order.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                If documentation is not shown on a specific product page,
                customers can contact support before ordering for guidance.
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/retatrutide-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Retatrutide UK</div>
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

                <Link href="/metabolic-research-compounds" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Metabolic research compounds
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Explore metabolic pathway research materials and related pages.
                  </p>
                </Link>

                <Link href="/contact" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Contact support</div>
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
<h2 className="mt-10 text-2xl font-extrabold tracking-tight">
  Popular research pages
</h2>

<div className="mt-5 grid gap-3 sm:grid-cols-2">
  <Link href="/buy-tirzepatide-uk" className="surface-card p-5">
    Buy Tirzepatide UK
  </Link>

  <Link href="/tirzepatide-price-uk" className="surface-card p-5">
    Tirzepatide price UK
  </Link>

  <Link href="/where-to-buy-tirzepatide-uk" className="surface-card p-5">
    Where to buy Tirzepatide UK
  </Link>

  <Link href="/retatrutide-uk" className="surface-card p-5">
    Retatrutide UK
  </Link>
</div>
      <Footer />
    </div>
  );
}