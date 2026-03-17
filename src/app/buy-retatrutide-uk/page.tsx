import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Retatrutide UK | 40mg Research Peptide Pen | Peptide Products",
  description:
    "Buy Retatrutide research peptide in the UK. Explore the 40mg research peptide pen, laboratory compound context, and supporting research pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
  },
  openGraph: {
    title: "Buy Retatrutide UK | 40mg Research Peptide Pen | Peptide Products",
    description:
      "Buy Retatrutide research peptide in the UK. Explore the 40mg research peptide pen, laboratory compound context, and supporting research pages.",
    url: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg",
        width: 1200,
        height: 900,
        alt: "Buy retatrutide 40mg UK research peptide pen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Retatrutide UK | 40mg Research Peptide Pen | Peptide Products",
    description:
      "Buy Retatrutide research peptide in the UK. Explore the 40mg research peptide pen and supporting research pages.",
    images: ["https://www.peptideproducts.co.uk/products/retatrutide-40mg-uk.jpg"],
  },
};

export default function Page() {
  return (
    <div>
      <Header />

      <main>
        <section className="py-14">
          <Container>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Buy Retatrutide UK
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Buy retatrutide in the UK with fast delivery and research-grade
              supply. This 40mg retatrutide peptide pen is provided for
              laboratory and scientific research use, supporting analytical and
              investigational workflows involving GLP-1, GIP and glucagon
              receptor pathways.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Explore Retatrutide as a laboratory research peptide compound
              available within the UK. This page connects commercial-intent
              search queries with the official product listing and supporting
              research content.
            </p>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft">
              <div className="relative h-[360px] w-full">
                <Image
                  src="/products/retatrutide-40mg-uk.jpg"
                  alt="Buy retatrutide 40mg UK research peptide pen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
              For broader scientific context, read our{" "}
              <Link
                href="/retatrutide-research-peptide"
                className="font-semibold text-ink hover:text-accent"
              >
                retatrutide research peptide
              </Link>{" "}
              guide, or go directly to the{" "}
              <Link
                href="/product/retatrutide"
                className="font-semibold text-ink hover:text-accent"
              >
                retatrutide 40mg product listing
              </Link>
              .
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/product/retatrutide"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                View Retatrutide 40mg →
              </Link>

              <Link
                href="/retatrutide-research-peptide"
                className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink"
              >
                Read research guide →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white/80 py-14 backdrop-blur-sm">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Retatrutide UK research peptide supply
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Retatrutide is positioned within this site as a research-use-only
                peptide compound supplied for laboratory and scientific
                investigation. The product is presented as part of a broader
                peptide research catalogue covering antioxidant, hydration,
                firming, regenerative, and selected specialist compound lines.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Users arriving on this page are typically searching for
                retatrutide UK availability or research peptide supply. This
                page connects that intent with the official product listing and
                related research content.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                To explore the product directly, visit the{" "}
                <Link
                  href="/product/retatrutide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  Retatrutide 40mg research peptide pen
                </Link>{" "}
                page, or review the{" "}
                <Link
                  href="/retatrutide-research-peptide"
                  className="font-semibold text-ink hover:text-accent"
                >
                  retatrutide research peptide guide
                </Link>{" "}
                for broader scientific context.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related research pages
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/product/retatrutide" className="surface-card p-5">
                <div className="font-extrabold text-ink">Retatrutide product</div>
                <p className="mt-2 text-sm text-muted">
                  View the 40mg research peptide pen product page.
                </p>
              </Link>

              <Link href="/retatrutide-research-peptide" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Retatrutide research guide
                </div>
                <p className="mt-2 text-sm text-muted">
                  Scientific and structural context for retatrutide research.
                </p>
              </Link>

              <Link href="/research-peptides" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Overview of peptide categories and compound lines.
                </p>
              </Link>

              <Link href="/buy-research-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">
                  Buy research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  Broader commercial peptide research page.
                </p>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}