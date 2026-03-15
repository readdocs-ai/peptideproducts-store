import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Buy Research Peptides UK | Laboratory Compounds for Scientific Study",
  description:
    "Browse research peptides available in the UK including antioxidant, regenerative, and hydration-focused laboratory compounds supplied strictly for scientific study.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/buy-research-peptides-uk",
  },
};

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>

          <h1 className="text-4xl font-extrabold tracking-tight">
            Buy research peptides UK
          </h1>

          <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
            <div className="relative w-full h-[360px] bg-panel">
              <Image
                src="/products/meso-glutathione-main.jpg"
                alt="Buy research peptides UK laboratory compounds"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            Research peptides are laboratory compounds used in controlled
            scientific environments investigating molecular interaction,
            biochemical pathways, and cellular response mechanisms.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            These compounds may include antioxidant peptide blends,
            regeneration-focused compounds, and hydration-related molecular
            systems commonly examined during laboratory and analytical research.
          </p>

          <div className="mt-8">
            <Link
              href="/shop"
              className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
            >
              Browse research compounds →
            </Link>
          </div>

        </Container>
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