import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

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

            <div className="mt-8 overflow-hidden rounded-xl3 border border-line">
  <div className="relative aspect-[16/9]">
    <Image
      src="/products/meso-glutathione-alt.jpg"
      alt="PDRN research peptide compound"
      fill
      className="object-cover"
    />
  </div>
</div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research peptides are laboratory compounds studied in analytical,
              biochemical, and formulation-based research environments.
              Scientists use peptide compounds to examine cellular behaviour,
              compound stability, antioxidant activity, and compatibility in
              controlled laboratory conditions.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Common research areas include antioxidant compounds such as
              glutathione and vitamin C, hydration systems built around
              hyaluronic acid, regeneration-focused compounds like PDRN and
              collagen, and peptide blends used in elasticity and structural
              research workflows.
            </p>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Types of research peptide compounds
            </h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              <div className="rounded-xl3 border border-line p-6">
                <h3 className="text-lg font-extrabold">Antioxidant peptides</h3>
                <p className="mt-3 text-sm text-muted">
                  Glutathione and vitamin C compounds are frequently studied in
                  oxidative stress, cellular protection, and antioxidant-related
                  research environments.
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
                  Hyaluronic acid-based compounds are often examined in
                  hydration-related laboratory studies and extracellular matrix
                  research.
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
                  Compounds such as PDRN and collagen blends are reviewed in
                  regeneration-focused research environments and compatibility
                  studies.
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
                  Firming peptide blends combine compounds studied in elasticity
                  research, structural protein analysis, and formulation
                  compatibility testing.
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
              How research peptides are studied
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Research peptides are examined in laboratory environments where
              scientists analyse molecular interactions, cellular responses,
              compound stability, and formulation compatibility. These studies
              often involve analytical testing, experimental modelling, and
              biochemical investigation.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Depending on the compound type, research may focus on antioxidant
              activity, hydration behaviour, regeneration-related compatibility,
              or peptide interaction with structural proteins.
            </p>
          </Container>
        </section>

        <section className="bg-white py-14">
          <Container>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Research use disclaimer
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              All compounds listed on this site are supplied strictly for
              laboratory research use. These products are not intended for human
              consumption, medical treatment, or veterinary use.
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