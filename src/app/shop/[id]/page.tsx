import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { formatGBP } from "@/lib/cart";

type Props = {
  params: { id: string };
};

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://peptideproducts.co.uk${product.image}`,
    description: product.subtitle,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Peptide Products",
    },
    offers: {
      "@type": "Offer",
      url: `https://peptideproducts.co.uk/shop/${product.id}`,
      priceCurrency: "GBP",
      price: product.priceGBP,
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />

      <main className="py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-xl2 border border-line bg-panel">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <div>
              <div className="text-sm font-bold uppercase tracking-wide text-muted">
                {product.subtitle}
              </div>

              <h1 className="mt-2 text-3xl font-extrabold text-ink">
                {product.name}
              </h1>

              <div className="mt-4 text-2xl font-extrabold text-accent">
                {formatGBP(product.priceGBP)}
              </div>

              <div className="mt-4 text-sm text-muted">{product.pack}</div>

              {"category" in product ? (
                <div className="mt-2 text-sm text-muted">
                  Category: {product.category}
                </div>
              ) : null}

              <div className="mt-6 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
                Research supply only. Not for human use.
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}