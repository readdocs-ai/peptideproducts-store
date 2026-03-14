import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PDRN Research Peptide | Laboratory Compound Overview",
  description:
    "Overview of PDRN research peptide compounds including laboratory study areas, regeneration-focused compound research, and related peptide product lines.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/pdrn-research-peptide",
  },
};

export default function Page() {
  return (
    <div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.peptideproducts.co.uk"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Research peptides",
          item: "https://www.peptideproducts.co.uk/research-peptides"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "PDRN research peptide",
          item: "https://www.peptideproducts.co.uk/pdrn-research-peptide"
        }
      ]
    }),
  }}
/>
      <Header />

      <main>
        <section className="py-14">
          <Container>
            <h1 className="text-4xl font-extrabold tracking-tight">
              PDRN research peptide
            </h1>

            <div className="mt-8 max-w-4xl overflow-hidden rounded-xl3 border border-line shadow-soft">
  <div className="relative aspect-[16/7]">
    <Image
      src="/products/meso-pdrn-alt.jpg"
      alt="PDRN research peptide compound"
      fill
      className="object-cover"
    />
  </div>
</div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              PDRN (Polydeoxyribonucleotide) is a compound studied in laboratory
              environments investigating cellular regeneration, tissue response,
              and molecular repair pathways.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research involving PDRN compounds often examines DNA fragment
              signalling behaviour, cellular regeneration responses, and
              extracellular matrix compatibility under controlled laboratory
              conditions.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In broader peptide research, PDRN-related compounds are commonly
              grouped with regeneration-focused lines alongside collagen and
              other supportive laboratory compounds used in compatibility and
              formulation studies.
            </p>

            <div className="mt-8">
              <Link
                href="/product/meso-pdrn"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                View PDRN research compound →
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                PDRN in laboratory research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                PDRN compounds are examined in controlled research environments
                where scientists investigate regeneration-related responses,
                compound interaction, and biochemical behaviour under laboratory
                conditions.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Depending on the study design, research may focus on molecular
                signalling, structural compatibility, tissue-response modelling,
                or the role of regeneration-oriented compounds alongside
                collagen and other peptide-related blends.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Related research pages
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/research-peptides"
                className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="text-sm font-extrabold text-ink">Research peptides</div>
                <p className="mt-2 text-sm text-muted">
                  Core overview of peptide and compound categories.
                </p>
              </Link>

              <Link
                href="/research-peptides-uk"
                className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="text-sm font-extrabold text-ink">Research peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused guide to research peptide compounds.
                </p>
              </Link>

              <Link
                href="/product/meso-pdrn"
                className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="text-sm font-extrabold text-ink">Meso PDRN</div>
                <p className="mt-2 text-sm text-muted">
                  View the related PDRN research compound product page.
                </p>
              </Link>

              <Link
                href="/product/meso-collagen"
                className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="text-sm font-extrabold text-ink">Meso Collagen</div>
                <p className="mt-2 text-sm text-muted">
                  Explore a related regenerative compound line.
                </p>
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <section className="bg-white py-14">
  <Container>
    <h2 className="text-2xl font-extrabold tracking-tight">
      Related research guides
    </h2>

    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">

      <Link href="/research-peptides" className="rounded-xl3 border border-line p-5 shadow-soft">
        <div className="font-extrabold">Research peptides</div>
        <p className="text-sm text-muted mt-2">
          Overview of peptide compounds used in laboratory study.
        </p>
      </Link>

      <Link href="/research-peptides-uk" className="rounded-xl3 border border-line p-5 shadow-soft">
        <div className="font-extrabold">Research peptides UK</div>
        <p className="text-sm text-muted mt-2">
          Laboratory peptide compounds available to UK buyers.
        </p>
      </Link>

      <Link href="/research-peptide-supplier-uk" className="rounded-xl3 border border-line p-5 shadow-soft">
        <div className="font-extrabold">Research peptide supplier UK</div>
        <p className="text-sm text-muted mt-2">
          Overview of peptide compound supply and research products.
        </p>
      </Link>

      <Link href="/buy-research-peptides-uk" className="rounded-xl3 border border-line p-5 shadow-soft">
        <div className="font-extrabold">Buy research peptides UK</div>
      </Link>

      <Link href="/laboratory-peptide-compounds" className="rounded-xl3 border border-line p-5 shadow-soft">
        <div className="font-extrabold">Laboratory peptide compounds</div>
      </Link>

      <Link href="/peptide-products" className="rounded-xl3 border border-line p-5 shadow-soft">
        <div className="font-extrabold">Peptide products</div>
      </Link>

    </div>
  </Container>
</section>

      <Footer />
    </div>
  );
}