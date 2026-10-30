import type { Metadata } from "next";
import Link from "next/link";
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
          <div className="text-xs font-extrabold uppercase tracking-wider text-amber-800">Alluvi Tirzepatide 40mg documentation</div>
          <h2 className="mt-2 text-xl font-extrabold text-ink">Original and additional laboratory reports</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            The original Janoshik report #147174 remains available for the previously documented Alluvi 40mg sample. View the current Alluvi Tirzepatide 40mg research pen listing for photographs and the additional purity, heavy metals, LC-MS and sterility report links. Each report applies to the tested sample and its recorded batch.
          </p>
          <div className="mt-5 overflow-hidden rounded-xl2 border border-line bg-white">
            <div className="relative aspect-[1.414/1] w-full bg-panel">
              <Image src="/docs/coa/alluvi-tirzepatide-40mg-janoshik-147174.png" alt="Original Janoshik report for Alluvi Tirzepatide 40mg, test 147174" fill sizes="(min-width: 1024px) 720px, 100vw" className="object-contain" />
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://verify.janoshik.com/tests/147174-ALLUVI_TIRZEPATIDE_40MG_KIT_T5MBWRAYD4HN" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-xl2 bg-ink px-4 py-3 text-sm font-extrabold text-white">Verify original report #147174</a>
            <Link href="/product/alluvi-tirzepatide-40mg-pen" className="inline-flex rounded-xl2 border border-ink px-4 py-3 text-sm font-extrabold text-ink">View current 40mg pen and additional reports</Link>
          </div>
        </section>
      </Container>
    </>
  );
}
