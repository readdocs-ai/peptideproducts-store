import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Retatrutide UK | Research Peptide Supplier",
  description:
    "Buy Retatrutide research peptide in the UK. Explore the 40mg research peptide pen, laboratory compound context, and supporting research pages.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-retatrutide-uk",
  },
};

export default function Page() {
  return (
    <div>
      <Header />

      <main>
        {/* HERO */}
        <section className="py-14">
          <Container>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Buy Retatrutide UK
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Explore Retatrutide as a laboratory research peptide compound
              available within the UK. This page connects commercial-intent
              search queries with the official product listing and supporting
              research content.
            </p>

            <div className="mt-8 overflow-hidden rounded-xl3 border border-line bg-panel p-4 shadow-soft max-w-3xl">
              <div className="relative h-[360px] w-full">
                <Image
                  src="/products/retatrutide-main.jpg"
                  alt="Retatrutide 40mg research peptide pen"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

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

        {/* CONTENT */}
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
                firming, and regenerative compound lines.
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

        {/* RELATED LINKS */}
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