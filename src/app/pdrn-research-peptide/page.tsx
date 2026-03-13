import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "PDRN Research Peptide | Laboratory Compound Overview",
  description:
    "Overview of PDRN research peptide compounds including laboratory study areas, regeneration-focused compound research, and related peptide product lines.",
};

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight">
            PDRN research peptide
          </h1>

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

          <div className="mt-8">
            <Link
              href="/product/meso-pdrn"
              className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
            >
              View PDRN research compound →
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}