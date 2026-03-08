import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const hero = [
    "/products/meso-glutathione.jpg",
    "/products/meso-pdrn.jpg",
    "/products/meso-vitamin-c.jpg",
    "/products/skinbooster-hyaluronic-acid.jpg",
  ];

  return (
    <div>
      <Header />

      <main>
        <section className="relative overflow-hidden bg-hero">
          <Container>
            <div className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-muted shadow-soft">
                  Research use only • COA / SDS available
                  <span className="h-2 w-2 rounded-full bg-accent2" />
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
                  {brand.name}
                </h1>

                <p className="mt-3 text-base font-semibold text-muted">
                  {brand.tagline}
                </p>

                <p className="mt-4 max-w-xl text-sm text-muted">
                  {brand.description} Browse compounds by category and download supporting documentation where available.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/shop"
                    className="rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Browse products
                  </Link>

                  <Link
                    href="/disclaimer"
                    className="rounded-xl2 border border-line bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Read disclaimer
                  </Link>
                </div>
              </div>

              <div className="rounded-xl2 border border-line bg-white p-4 shadow-lift">
                <div className="grid gap-4 sm:grid-cols-2">
                  {hero.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-square overflow-hidden rounded-xl2 border border-line bg-panel"
                    >
                      <Image
                        src={src}
                        alt="Featured product"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl2 border border-line bg-panel p-4 text-xs text-muted">
                  <span className="font-extrabold text-ink">Wholesale enquiries welcome.</span>{" "}
                  Contact{" "}
                  <span className="font-semibold text-ink">info@peptideproducts.co.uk</span>{" "}
                  or{" "}
                  <span className="font-semibold text-ink">07429098887</span>.
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Featured products</h2>
                <p className="mt-2 text-sm text-muted">
                  Popular items with supporting documentation.
                </p>
              </div>

              <Link
                href="/shop"
                className="text-sm font-extrabold text-ink/80 hover:text-ink"
              >
                View all →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
