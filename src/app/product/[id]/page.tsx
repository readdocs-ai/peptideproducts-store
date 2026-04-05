import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { ProductBuyBox, ProductImageGallery } from "./ui";

type Props = {
  params: { id: string };
};

function getProduct(id: string) {
  return products.find((x) => x.id === id);
}

function getCategoryPage(category: string) {
  switch (category) {
    case "Antioxidants":
      return { href: "/antioxidant-peptides", label: "Antioxidant peptides" };
    case "Hydration":
      return { href: "/hydration-peptides", label: "Hydration peptides" };
    case "Firming":
      return { href: "/firming-peptides", label: "Firming peptides" };
    case "Regenerative":
      return { href: "/regenerative-peptides", label: "Regenerative peptides" };
    case "Metabolic":
      return { href: "/research-peptides", label: "Research peptides" };
    default:
      return null;
  }
}

function getFormatLabel(pack: string) {
  const lower = pack.toLowerCase();
  if (lower.includes("pen")) return "Pre-filled pen";
  if (lower.includes("lyophilised")) return "Lyophilised powder";
  if (lower.includes("sterile liquid")) return "Sterile liquid";
  if (lower.includes("powder")) return "Powder";
  return "Laboratory supply";
}

function getPreviewPath(coa?: string) {
  if (!coa) return null;
  return coa.replace("/docs/coa/", "/docs/previews/").replace(/\.pdf$/, ".jpg");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct(params.id);

  if (!p) {
    return {
      title: "Product not found | Peptide Products",
      description: "The requested product could not be found.",
    };
  }

  const title = `${p.name} | Premium Research Peptide UK`;
  const description = `${p.subtitle}. ${p.pack}. ${p.coa ? "Documentation available. " : ""}Research supply only. View product details and ordering guidance at Peptide Products.`;
  const url = `https://www.peptideproducts.co.uk/product/${p.id}`;
  const ogImage = `https://www.peptideproducts.co.uk${p.gallery?.[0] ?? p.image}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Peptide Products",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: p.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const p = getProduct(params.id);
  if (!p) return notFound();

  const imageUrls = (p.gallery?.length ? p.gallery : [p.image]).map((src) => `https://www.peptideproducts.co.uk${src}`);
  const relatedProducts = products.filter((item) => item.id !== p.id && item.category === p.category).slice(0, 3);
  const categoryPage = getCategoryPage(p.category);
  const previewPath = getPreviewPath(p.coa);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    image: imageUrls,
    description: `${p.subtitle}. ${p.pack}. ${p.notes}`,
    sku: p.id,
    mpn: p.id,
    category: p.category,
    brand: { "@type": "Brand", name: "Peptide Products" },
    itemCondition: "https://schema.org/NewCondition",
    audience: { "@type": "Audience", audienceType: "Laboratory and research buyers" },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Pack size", value: p.pack },
      { "@type": "PropertyValue", name: "Format", value: getFormatLabel(p.pack) },
      { "@type": "PropertyValue", name: "Stock status", value: p.stockStatus === "in_stock" ? "In stock" : "Sold out" },
      ...(p.coa ? [{ "@type": "PropertyValue", name: "Documentation", value: "COA available" }] : []),
    ],
    offers: {
      "@type": "Offer",
      url: `https://www.peptideproducts.co.uk/product/${p.id}`,
      priceCurrency: "GBP",
      price: p.priceGBP,
      availability: p.stockStatus === "in_stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Peptide Products", url: "https://www.peptideproducts.co.uk" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.peptideproducts.co.uk" },
      { "@type": "ListItem", position: 2, name: "Shop", item: "https://www.peptideproducts.co.uk/shop" },
      ...(categoryPage
        ? [
            { "@type": "ListItem", position: 3, name: categoryPage.label, item: `https://www.peptideproducts.co.uk${categoryPage.href}` },
            { "@type": "ListItem", position: 4, name: p.name, item: `https://www.peptideproducts.co.uk/product/${p.id}` },
          ]
        : [{ "@type": "ListItem", position: 3, name: p.name, item: `https://www.peptideproducts.co.uk/product/${p.id}` }]),
    ],
  };

  const specificationCards = [
    { label: "Pack", value: p.pack },
    { label: "Format", value: getFormatLabel(p.pack) },
    { label: "Category", value: p.category },
    { label: "Primary actives", value: p.actives.join(", ") },
  ];

  const faqs = [
    {
      q: `Is ${p.name} listed for human use?`,
      a: "No. All products are listed strictly for laboratory, analytical, and scientific research use only.",
    },
    {
      q: "Can I review documentation before ordering?",
      a: p.coa
        ? "Yes. This product page includes a certificate section with preview imagery and a downloadable file."
        : "Use the quality page or contact support if you need documentation guidance before ordering.",
    },
    {
      q: "How is ordering handled?",
      a: "You can add the product to cart, use secure card checkout through Stripe, or use the alternative bank transfer or crypto checkout if preferred.",
    },
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, breadcrumbSchema]) }} />
      <Header />

      <main className="py-12 pb-28 lg:pb-12">
        <Container>
          <div className="text-sm text-muted">
            <Link href="/shop" className="font-semibold hover:text-ink">Shop</Link>
            {categoryPage ? (
              <>
                <span className="mx-2">/</span>
                <Link href={categoryPage.href} className="font-semibold hover:text-ink">{categoryPage.label}</Link>
              </>
            ) : null}
            <span className="mx-2">/</span>
            {p.name}
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <ProductImageGallery product={p} />

            <div>
              <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="eyebrow">{p.category}</div>
                <div className="mt-4 text-sm font-bold text-muted">{p.subtitle}</div>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink">{p.name}</h1>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className={"inline-flex rounded-full px-3 py-1 text-xs font-extrabold " + (p.stockStatus === "in_stock" ? "border border-emerald-200 bg-emerald-50 text-emerald-700" : "border border-red-200 bg-red-50 text-red-700")}>
                    {p.stockStatus === "in_stock" ? "In stock" : "Sold out"}
                  </div>
                  <div className="trust-pill">Research use only</div>
                  {p.coa ? <div className="premium-badge">Documentation available</div> : null}
                </div>

                <p className="mt-5 text-sm leading-7 text-muted">{p.notes}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {specificationCards.map((item) => (
                    <div key={item.label} className="rounded-xl2 border border-line bg-panel p-4">
                      <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">{item.label}</div>
                      <div className="mt-2 text-sm font-semibold leading-6 text-ink">{item.value}</div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-6">
                <ProductBuyBox product={p} />
              </div>
            </div>
          </div>

          <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.92fr]">
            <div className="space-y-6">
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="soft-label">Highlights</div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">What you are ordering</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted">
                  {p.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="soft-label">Intended laboratory context</div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">Use case guidance</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {p.intendedUse.map((item) => (
                    <div key={item} className="rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-ink">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {p.coa ? (
                <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                  <div className="soft-label">Documentation</div>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">Certificate preview and download</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    This product includes certificate documentation for visitors who want paperwork before ordering.
                  </p>

                  <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.78fr] lg:items-start">
                    <div className="relative min-h-[340px] overflow-hidden rounded-xl2 border border-line bg-panel">
                      {previewPath ? (
                        <Image src={previewPath} alt={`${p.name} certificate preview`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-top" />
                      ) : null}
                    </div>

                    <div className="rounded-xl2 border border-line bg-panel p-5">
                      <div className="text-lg font-extrabold text-ink">Documentation included</div>
                      <div className="mt-3 grid gap-3 text-sm text-muted">
                        <div className="rounded-xl2 border border-line bg-white px-4 py-3">Downloadable certificate file</div>
                        <div className="rounded-xl2 border border-line bg-white px-4 py-3">Preview integrated into the product page</div>
                        <div className="rounded-xl2 border border-line bg-white px-4 py-3">Quality page also links broader documentation</div>
                      </div>

                      <div className="mt-5 grid gap-3">
                        <a href={p.coa} target="_blank" rel="noreferrer" className="rounded-xl2 bg-accent px-5 py-3 text-center text-sm font-extrabold text-white shadow-soft hover:bg-accent/90">
                          Download certificate
                        </a>
                        <Link href="/quality-assurance" className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel">
                          Open quality page
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="space-y-6">
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="soft-label">Ordering confidence</div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">Ordering confidence</h2>
                <div className="mt-5 grid gap-3 text-sm text-muted">
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Secure card checkout via Stripe</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Stronger trust stack beside the primary CTA</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Mobile add-to-cart bar for easier conversion on phones</div>
                  <div className="rounded-xl2 border border-line bg-panel px-4 py-3">Documentation available on selected product lines before purchase</div>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="soft-label">FAQ</div>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">Common questions</h2>
                <div className="mt-5 grid gap-4">
                  {faqs.map((item) => (
                    <div key={item.q} className="rounded-xl2 border border-line bg-panel p-4">
                      <div className="text-sm font-extrabold text-ink">{item.q}</div>
                      <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="soft-label">Useful links</div>
                <div className="mt-4 grid gap-3">
                  <Link href="/quality-assurance" className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-extrabold text-ink hover:bg-white">Quality & documentation</Link>
                  <Link href="/cart" className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-extrabold text-ink hover:bg-white">Go to cart</Link>
                  <Link href="/checkout" className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-extrabold text-ink hover:bg-white">Alternative checkout</Link>
                  {categoryPage ? <Link href={categoryPage.href} className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-extrabold text-ink hover:bg-white">Back to {categoryPage.label}</Link> : null}
                </div>
              </div>
            </div>
          </section>

          {relatedProducts.length ? (
            <section className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="soft-label">Related products</div>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">Explore more from this category</h2>
                </div>
                <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">View all →</Link>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedProducts.map((item) => (
                  <Link key={item.id} href={`/product/${item.id}`} className="rounded-xl2 border border-line bg-white p-5 shadow-soft hover:bg-panel">
                    <div className="text-sm font-bold uppercase tracking-wide text-muted">{item.category}</div>
                    <div className="mt-2 text-lg font-extrabold text-ink">{item.name}</div>
                    <div className="mt-2 text-sm text-muted">{item.pack}</div>
                    <div className="mt-4 text-sm font-extrabold text-ink">Open product →</div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </Container>
      </main>

      <Footer />
    </div>
  );
}
