import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Research Peptides UK | Laboratory Peptide Compounds",
  description:
    "Browse research peptides available in the UK including glutathione, PDRN, collagen and hyaluronic acid research compounds supplied strictly for laboratory study.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/research-peptides-uk",
  },
};

export default function ResearchPeptidesUK() {
  return (
    <div>
      <Header />

      <main>
        <section className="py-14">
          <Container>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Research peptides UK
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research peptides are peptide-based laboratory compounds used in
              analytical, formulation, and experimental environments. In the UK,
              research peptide suppliers provide compounds that support
              laboratory study, cellular research, and compound analysis.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Peptide Products provides research compounds including antioxidant,
              hydration-focused, regenerative, and peptide-blend formulations
              supplied strictly for scientific and laboratory investigation.
            </p>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Types of research peptides available
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              <div className="rounded-xl3 border border-line p-6">
                <h3 className="text-lg font-extrabold">Antioxidant peptides</h3>
                <p className="mt-3 text-sm text-muted">
                  Antioxidant peptide compounds such as glutathione and vitamin
                  C blends are widely studied in cellular protection and
                  oxidative stress research environments.
                </p>

                <Link
                  href="/product/meso-glutathione"
                  className="mt-4 inline-block font-extrabold text-ink"
                >
                  View glutathione research compound →
                </Link>
              </div>

              <div className="rounded-xl3 border border-line p-6">
                <h3 className="text-lg font-extrabold">Hydration compounds</h3>
                <p className="mt-3 text-sm text-muted">
                  Hyaluronic acid research compounds are studied in hydration
                  and extracellular matrix research workflows.
                </p>

                <Link
                  href="/product/skinbooster-hyaluronic-acid"
                  className="mt-4 inline-block font-extrabold text-ink"
                >
                  View hyaluronic acid compound →
                </Link>
              </div>

              <div className="rounded-xl3 border border-line p-6">
                <h3 className="text-lg font-extrabold">Regenerative peptides</h3>
                <p className="mt-3 text-sm text-muted">
                  Compounds such as PDRN and collagen blends are studied in
                  regenerative and cellular repair research settings.
                </p>

                <Link
                  href="/product/meso-pdrn"
                  className="mt-4 inline-block font-extrabold text-ink"
                >
                  View PDRN compound →
                </Link>
              </div>

              <div className="rounded-xl3 border border-line p-6">
                <h3 className="text-lg font-extrabold">Firming peptide blends</h3>
                <p className="mt-3 text-sm text-muted">
                  Firming-focused peptide blends combine compounds studied in
                  elasticity and structural protein research environments.
                </p>

                <Link
                  href="/product/meso-lift-firming"
                  className="mt-4 inline-block font-extrabold text-ink"
                >
                  View firming peptide blend →
                </Link>
              </div>

            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              What are research peptides used for?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research peptides are used in laboratory environments to study
              molecular interactions, cellular behaviour, and compound
              compatibility. Scientists and research laboratories analyse these
              compounds in controlled settings as part of experimental
              investigation and scientific analysis.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research peptides may also be examined during formulation testing,
              compatibility studies, and compound stability research.
            </p>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Research use disclaimer
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              All products listed by Peptide Products are supplied strictly for
              laboratory research use only. These compounds are not intended for
              human consumption, medical treatment, or veterinary use.
            </p>

            <Link
              href="/shop"
              className="mt-6 inline-block rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
            >
              Browse research products
            </Link>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}