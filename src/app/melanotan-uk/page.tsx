import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Melanotan UK | Research Compound",
  description:
    "Browse Melanotan laboratory research compound information, UK peptide supply details, product availability, ordering guidance, tracked dispatch, and quality documentation at Peptide Products.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/melanotan-uk",
  },
  openGraph: {
    title: "Melanotan UK | Laboratory Research Compound",
    description:
      "Research-use-only laboratory compound supply information for UK customers.",
    url: "https://www.peptideproducts.co.uk/melanotan-uk",
    siteName: "Peptide Products",
    type: "website",
  },
};

export default function MelanotanUKPage() {
  return (
    <div>
      <Header />

      <main className="py-12">
        <Container>
          <section className="rounded-xl3 border border-line bg-white p-8 shadow-soft">
            <div className="soft-label">Research compound page</div>

            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              Melanotan research compound UK
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
              Browse laboratory research compound information, UK peptide supply
              guidance, ordering details, and quality documentation available on
              selected product lines through Peptide Products.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="trust-pill">Research use only</div>
              <div className="trust-pill">Tracked UK dispatch</div>
              <div className="trust-pill">Secure checkout</div>
              <div className="trust-pill">
                Documentation available on selected lines
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Browse products
              </Link>

              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-panel px-6 py-3 text-sm font-extrabold text-ink hover:bg-white"
              >
                Quality information
              </Link>
            </div>
          </section>

          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="soft-label">Ordering information</div>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                UK peptide supply information
              </h2>

              <div className="mt-5 grid gap-3 text-sm text-muted">
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  Secure checkout available through Stripe
                </div>

                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  UK tracked dispatch available after processing
                </div>

                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  Discreet packaging for all orders
                </div>

                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  Documentation available on selected products
                </div>
              </div>
            </div>

            <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <div className="soft-label">Research-use-only notice</div>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                Important information
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted">
                All products listed by Peptide Products are supplied strictly
                for laboratory, analytical, and scientific research use only.
                Products are not intended for human consumption, medical use,
                veterinary use, or clinical application.
              </p>

              <div className="mt-5 rounded-xl2 border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                Research-use-only products. Not for human consumption.
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <div className="soft-label">Related pages</div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              Explore related peptide pages
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/buy-peptides-uk"
                className="rounded-xl2 border border-line bg-panel p-5 hover:bg-white"
              >
                <div className="text-sm font-extrabold text-ink">
                  Buy peptides UK
                </div>

                <p className="mt-2 text-sm text-muted">
                  Browse peptide ordering and UK supply information.
                </p>
              </Link>

              <Link
                href="/research-peptides"
                className="rounded-xl2 border border-line bg-panel p-5 hover:bg-white"
              >
                <div className="text-sm font-extrabold text-ink">
                  Research peptides
                </div>

                <p className="mt-2 text-sm text-muted">
                  Explore laboratory compound categories and products.
                </p>
              </Link>

              <Link
                href="/quality-assurance"
                className="rounded-xl2 border border-line bg-panel p-5 hover:bg-white"
              >
                <div className="text-sm font-extrabold text-ink">
                  Quality assurance
                </div>

                <p className="mt-2 text-sm text-muted">
                  Review documentation and quality information.
                </p>
              </Link>

              <Link
                href="/shop"
                className="rounded-xl2 border border-line bg-panel p-5 hover:bg-white"
              >
                <div className="text-sm font-extrabold text-ink">
                  Shop products
                </div>

                <p className="mt-2 text-sm text-muted">
                  Browse the full research-use-only product catalogue.
                </p>
              </Link>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}