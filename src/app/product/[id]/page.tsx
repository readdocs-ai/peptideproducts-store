import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { ProductBuyBox } from "./ui";

export default function ProductPage({ params }: { params: { id: string } }) {
  const p = products.find((x) => x.id === params.id);
  if (!p) return notFound();

  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="text-sm text-slate">
            <Link href="/shop" className="hover:text-ink font-semibold">Shop</Link> <span className="mx-2">/</span> {p.name}
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-xl3 border border-line bg-paper/85 shadow-soft backdrop-blur">
              <div className="relative aspect-square bg-haze">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
                <div className="absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1 text-xs font-extrabold shadow-soft">
                  {p.category}
                </div>
              </div>

              <div className="p-8">
                <div className="text-sm font-bold text-slate">{p.subtitle}</div>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight">{p.name}</h1>

                <div className="mt-6 grid gap-4 rounded-xl2 bg-mist p-5 border border-line">
                  <div>
                    <div className="text-xs font-extrabold text-slate">Highlights</div>
                    <ul className="mt-2 grid gap-2 text-sm text-slate">
                      {p.highlights.map((h) => <li key={h}>• {h}</li>)}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-extrabold text-slate">Actives (label)</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.actives.map((a) => (
                        <span key={a} className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-semibold text-slate">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-extrabold text-slate">Intended research use</div>
                    <ul className="mt-2 grid gap-2 text-sm text-slate">
                      {p.intendedUse.map((u) => <li key={u}>• {u}</li>)}
                    </ul>
                  </div>

                  <div className="rounded-xl2 border border-line bg-paper p-4 text-xs text-slate">
                    <span className="font-bold text-ink">Research use only:</span> {p.notes}
                  </div>
                </div>
              </div>
            </div>

<div className="mt-6 rounded-xl2 border border-line bg-white p-6 shadow-soft">
  <h2 className="text-sm font-extrabold">Documentation</h2>
  <p className="mt-2 text-sm text-muted">
    Download supporting documents for this product (templates in this demo).
  </p>

  <div className="mt-4 flex flex-wrap gap-3">
    {p.coa ? (
      <a
        href={p.coa}
        download
        className="rounded-xl2 bg-accent px-4 py-2 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
      >
        Download COA
      </a>
    ) : (
      <span className="rounded-xl2 border border-line bg-panel px-4 py-2 text-sm font-extrabold text-muted">
        COA unavailable
      </span>
    )}

    {p.sds ? (
      <a
        href={p.sds}
        download
        className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
      >
        Download SDS
      </a>
    ) : (
      <span className="rounded-xl2 border border-line bg-panel px-4 py-2 text-sm font-extrabold text-muted">
        SDS unavailable
      </span>
    )}
  </div>

  <div className="mt-3 text-xs text-muted">
    Research use only. Replace these PDFs with your official COA/SDS documents.
  </div>
</div>


            <ProductBuyBox product={p} />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
