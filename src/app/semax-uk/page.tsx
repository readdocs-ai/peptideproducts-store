import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Semax UK | Laboratory Research Peptide Supply",
  description:
    "Semax UK laboratory research peptide page with product access, secure checkout guidance, UK delivery information, and research-use-only supply.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/semax-uk",
  },
};

const faqs = [
  {
    q: "What is Semax?",
    a: "Semax is listed as a laboratory research peptide supplied strictly for analytical and scientific research environments.",
  },
  {
    q: "Is Semax supplied for human use?",
    a: "No. All products are supplied strictly for laboratory and research use only and are not intended for human consumption, medical use, veterinary use, clinical use, or treatment purposes.",
  },
  {
    q: "Can UK customers order Semax online?",
    a: "Customers can review Semax availability, pricing, and ordering information through the website product pages where available.",
  },
  {
    q: "Is UK delivery available?",
    a: "Yes. Orders are prepared for tracked UK delivery after processing, with selected international options available depending on destination.",
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
              Semax UK laboratory research peptide
            </h1>

            <p className="mt-5 text-base leading-8 text-muted">
              UK-based Semax research peptide information for laboratory,
              analytical, and scientific research customers. This page helps UK
              visitors review product access, ordering guidance, quality pages,
              and related research-use-only peptide information.
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
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse products →
              </Link>

              <Link
                href="/research-peptides"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Research peptides
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
                Semax availability in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Peptide Products provides Semax research peptide information for
                UK customers looking for laboratory research materials and
                reference compounds. Product pages show stock details, pricing,
                checkout options, and relevant supporting information where
                available.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                For current product access and availability, visit the{" "}
                <Link
                  href="/shop"
                  className="font-semibold text-ink hover:text-accent"
                >
                  shop page
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
                Ordering Semax in the UK
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Customers can review available product information, add products
                to cart, and complete checkout securely online. Orders are
                prepared for tracked delivery after processing.
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
                <Link href="/selank-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Selank UK</div>
                  <p className="mt-2 text-sm text-muted">
                    Review related peptide research information.
                  </p>
                </Link>

                <Link href="/ipamorelin-uk" className="surface-card p-5">
                  <div className="font-extrabold text-ink">Ipamorelin UK</div>
                  <p className="mt-2 text-sm text-muted">
                    View UK peptide research supply information.
                  </p>
                </Link>

                <Link href="/research-peptides" className="surface-card p-5">
                  <div className="font-extrabold text-ink">
                    Research peptides
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Browse wider peptide research categories.
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
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Semax UK FAQs
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