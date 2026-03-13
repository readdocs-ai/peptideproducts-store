import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Glutathione Research Peptide | Antioxidant Compound Research",
  description:
    "Glutathione research peptide overview including antioxidant compound research areas and laboratory study applications.",
};

export default function Page() {
  return (
    <div>
      <Header />

      <main className="py-14">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Glutathione research peptide
          </h1>

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

          <div className="mt-8">
            <Link
              href="/product/meso-glutathione"
              className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white"
            >
              View glutathione research compound →
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}