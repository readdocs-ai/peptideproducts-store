import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Laboratory Peptide Compounds | Research Peptide Products",
  description:
    "Explore laboratory peptide compounds including antioxidant, hydration, and regenerative research compounds used in controlled scientific environments.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/laboratory-peptide-compounds",
  },
};

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>

          <h1 className="text-4xl font-extrabold tracking-tight">
            Laboratory peptide compounds
          </h1>

          <div className="mt-8 overflow-hidden rounded-xl3 border border-line">
            <div className="relative aspect-[16/9]">
              <Image
                src="/products/meso-collagen-alt.jpg"
                alt="Laboratory peptide compounds for research"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
            Laboratory peptide compounds are studied in controlled environments
            where researchers analyse molecular signalling, compound
            compatibility, and biochemical interaction between peptides and
            cellular systems.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Research may involve antioxidant compounds such as glutathione,
            hydration systems such as hyaluronic acid, and regenerative
            compounds including collagen and PDRN peptide blends.
          </p>

          <div className="mt-8">
            <Link
              href="/research-peptides"
              className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
            >
              Explore research peptide categories →
            </Link>
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}