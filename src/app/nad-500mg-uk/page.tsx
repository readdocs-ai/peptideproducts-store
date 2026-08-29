import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "NAD+ 500mg UK | Laboratory Research Compound Supply",
  description:
    "NAD+ 500mg UK laboratory research compound page with product access, pricing information, secure checkout guidance, UK delivery, and research-use-only supply.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/nad-500mg-uk",
  },
};

const faqs = [
  {
    q: "Is NAD+ 500mg listed for human use?",
    a: "No. NAD+ products listed by Peptide Products are supplied strictly for laboratory, analytical, and scientific research use only.",
  },
  {
    q: "Can UK customers order NAD+ 500mg online?",
    a: "Yes. Customers can view the NAD+ product page, review product information, and complete checkout through the website.",
  },
  {
    q: "Is UK delivery available?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international shipping options available depending on destination.",
  },
  {
    q: "Can I review product information before ordering?",
    a: "Yes. Product pages include pack details, stock information, pricing, checkout options, and supporting documentation where available.",
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
              NAD+ 500mg UK laboratory research compound
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              UK-based supply of NAD+ 500mg research compound with transparent
              product information, secure checkout, ordering guidance, and
              tracked delivery information for laboratory and analytical research
              customers.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-pill">UK-based supplier</span>
              <span className="trust-pill">Tracked delivery available</span>
              <span className="trust-pill">Secure checkout via Stripe</span>
              <span className="trust-pill">Laboratory research use only</span>
            </div>

            <p className="mt-5 text-base leading-8 text-muted">
              All products are supplied strictly for laboratory and research use
              only. They are not intended for human consumption, medical use,
              veterinary use, clinical use, or treatment purposes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/nad-500mg"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                View NAD+ 500mg product →
              </Link>

              <Link
                href="/research-compounds-uk"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Research compounds UK
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
                NAD+ 500mg availability in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products provides NAD+ 500mg product information for UK
                customers looking for laboratory research materials and reference
                compounds. Product pages show pack details, stock status, pricing,
                checkout options, and relevant supporting information where
                available.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current stock, pricing, and ordering options, visit the{" "}
                <Link
                  href="/product/nad-500mg"
                  className="font-semibold text-ink hover:text-accent"
                >
                  NAD+ 500mg product page
                </Link>
                .
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Why order from Peptide Products?
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Transparent product pages
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Review pricing, stock status, pack details, and checkout
                    options before ordering.
                  </p>
                </div>

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
                    Tracked delivery
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Orders are prepared for tracked delivery after processing.
                  </p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">
                    Research-use-only supply
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Products are supplied strictly for laboratory, analytical,
                    and scientific research use only.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ordering NAD+ 500mg in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review product information, add products to cart,
                and complete checkout securely online. Orders are prepared for
                tracked delivery after processing.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                After ordering, customers can use the{" "}
                <Link
                  href="/order-status"
                  className="font-semibold text-ink hover:text-accent"
                >
                  order status page
                </Link>{" "}
                to check progress.
              </p>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Related research pages
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/product/nad-500mg" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    NAD+ 500mg product page
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    View product details, stock status, pricing, and checkout
                    options.
                  </p>
                </Link>

                <Link href="/glutathione-research-peptide" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Glutathione research peptide
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse related laboratory research product information.
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

                <Link href="/buy-peptides-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Buy peptides UK
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse peptide product pages and ordering information.
                  </p>
                </Link>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                NAD+ 500mg UK FAQs
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