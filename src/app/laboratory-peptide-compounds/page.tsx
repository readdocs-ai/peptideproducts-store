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

          <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
            <div className="relative w-full h-[360px] bg-panel">
              <Image
                src="/products/meso-collagen-main.jpg"
                alt="Laboratory peptide compounds for research"
                fill
                className="object-contain"
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