import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Glutathione Research Peptide | Antioxidant Compound Research",
  description:
    "Glutathione research peptide overview including antioxidant compound research areas and laboratory study applications.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/glutathione-research-peptide",
  },
};

export default function Page() {
  return (
    <div>
      <Header />

      <main>

        {/* Intro */}
        <section className="py-14">
          <Container>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Glutathione research peptide
            </h1>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
  <div className="relative w-full h-[360px] bg-panel">
    <Image
      src="/products/meso-glutathione-main.jpg"
      alt="Glutathione research peptide compound"
      fill
      className="object-contain"
    />
  </div>
</div>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Glutathione compounds are studied in laboratory environments
              investigating antioxidant behaviour, oxidative stress responses,
              and cellular protection mechanisms.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Researchers analyse glutathione peptide compounds to better
              understand molecular defence pathways and biochemical stability in
              controlled experimental settings.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              In peptide research environments, glutathione compounds are often
              evaluated alongside vitamin C and other antioxidant-related
              laboratory compounds used to investigate oxidative balance and
              cellular response pathways.
            </p>

            <div className="mt-8">
              <Link
                href="/product/meso-glutathione"
                className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
              >
                View glutathione research compound →
              </Link>
            </div>
          </Container>
        </section>

        {/* Research context */}
        <section className="bg-white py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight">
                Antioxidant compound research
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted">
                Antioxidant peptide compounds are frequently examined in
                laboratory research focusing on oxidative stress behaviour,
                molecular stability, and biochemical defence mechanisms.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted">
                Glutathione research may involve analysing compound interaction
                within cellular environments, antioxidant signalling pathways,
                and compatibility alongside other antioxidant compounds such as
                vitamin C.
              </p>
            </div>
          </Container>
        </section>

        {/* Related links */}
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
                <div className="text-sm font-extrabold text-ink">
                  Research peptides
                </div>
                <p className="mt-2 text-sm text-muted">
                  Core overview of peptide and compound research categories.
                </p>
              </Link>

              <Link
                href="/research-peptides-uk"
                className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="text-sm font-extrabold text-ink">
                  Research peptides UK
                </div>
                <p className="mt-2 text-sm text-muted">
                  UK-focused overview of peptide compounds and laboratory study.
                </p>
              </Link>

              <Link
                href="/product/meso-glutathione"
                className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="text-sm font-extrabold text-ink">
                  Meso Glutathione
                </div>
                <p className="mt-2 text-sm text-muted">
                  View the related glutathione research compound product page.
                </p>
              </Link>

              <Link
                href="/product/meso-vitamin-c"
                className="rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                <div className="text-sm font-extrabold text-ink">
                  Meso Vitamin C
                </div>
                <p className="mt-2 text-sm text-muted">
                  Explore a related antioxidant compound line.
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