import type { Metadata } from "next";
import Image from "next/image";
import { RetatrutideLandingPage } from "@/components/RetatrutideLandingPage";
import { Container } from "@/components/Container";
import { retatrutideSeoPages } from "@/data/retatrutideSeoPages";

const page = retatrutideSeoPages["tr40-peptide-uk"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `https://www.peptideproducts.co.uk${page.path}` },
  openGraph: {
    title: page.title,
    description: page.description,
    url: `https://www.peptideproducts.co.uk${page.path}`,
    siteName: "Peptide Products",
    images: [
      {
        url: "https://www.peptideproducts.co.uk/products/reta%20single%20box.png",
        width: 1200,
        height: 900,
        alt: "Retatrutide 40mg research peptide product packaging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: ["https://www.peptideproducts.co.uk/products/reta%20single%20box.png"],
  },
};

export default function Page() {
  return (
    <>
      <RetatrutideLandingPage page={page} />
      <Container>
        <section className="mb-10 rounded-xl3 border border-amber-200 bg-amber-50 p-5 shadow-soft md:p-6">
          <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-800">Historical test report</div>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight text-ink">Alluvi Tirzepatide 40mg test report</h2>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
            The previous 40mg Tirzepatide format is not part of the current catalogue, but its independent Janoshik verification link remains available for documentation reference.
          </p>
          <div className="mt-5 overflow-hidden rounded-xl2 border border-line bg-white">
  <div className="relative aspect-[1.414/1] w-full bg-panel">
    <Image
      src="/docs/coa/alluvi-tirzepatide-40mg-janoshik-147174.png"
      alt="Janoshik test report for Alluvi Tirzepatide 40mg, test 147174"
      fill
      sizes="(min-width: 1024px) 720px, 100vw"
      className="object-contain"
    />
  </div>
</div>
          <a
            href="https://verify.janoshik.com/tests/147174-ALLUVI_TIRZEPATIDE_40MG_KIT_T5MBWRAYD4HN"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-xl2 bg-ink px-4 py-3 text-sm font-extrabold text-white shadow-soft transition hover:bg-ink/90"
          >Verify on Janoshik →
          </a>
        </section>
      </Container>
    </>
  );
}
