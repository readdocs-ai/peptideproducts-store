import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hyaluronic Acid Peptide Research | Laboratory Compound Study",
  description:
    "Hyaluronic acid peptide research overview including hydration compound analysis and extracellular matrix research environments.",
};

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Hyaluronic acid peptide research
          </h1>

          <div className="mt-8 max-w-3xl overflow-hidden rounded-xl3 border border-line shadow-soft bg-panel p-4">
  <div className="relative w-full h-[360px] bg-panel">
    <Image
      src="/products/skinbooster-hyaluronic-acid-main.jpg"
      alt="Hyaluronic acid peptide research compound"
      fill
      className="object-contain"
    />
  </div>
</div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Hyaluronic acid compounds are studied in laboratory environments
            examining hydration behaviour, extracellular matrix interaction,
            and structural compound compatibility.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            Research involving hyaluronic acid peptide compounds can explore
            molecular binding properties, hydration stability, and compound
            interaction across controlled experimental frameworks.
          </p>

          <div className="mt-8">
            <Link
              href="/product/skinbooster-hyaluronic-acid"
              className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
            >
              View hyaluronic acid compound →
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