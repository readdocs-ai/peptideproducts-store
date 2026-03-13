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

          <div className="mt-8 overflow-hidden rounded-xl3 border border-line">
            <div className="relative aspect-[16/9]">
              <Image
                src="/products/meso-glutathione-alt.jpg"
                alt="Buy research peptides UK laboratory compounds"
                fill
                className="object-cover"
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

      <Footer />
    </div>
  );
}