import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

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

      <Footer />
    </div>
  );
}