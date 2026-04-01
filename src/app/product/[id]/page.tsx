import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
      return { href: "/retatrutide-research-peptide", label: "Retatrutide research peptide" };
    default:
      return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct(params.id);

  if (!p) {
    return {
      title: "Product not found | Peptide Products",
      description: "The requested product could not be found.",
    };
  }

  const isRetatrutide = p.id === "retatrutide";

  const title = isRetatrutide
    ? "Retatrutide 40mg | Buy Retatrutide UK Research Peptide"
    : `${p.name} | Research Peptide Compound UK`;

  const description = isRetatrutide
    ? `Buy Retatrutide UK research peptide. ${p.pack}. Research supply only. View product details, documentation, and related retatrutide research pages at Peptide Products.`
    : `${p.subtitle}. ${p.pack}. Research supply only. View product details, documentation, and related peptide research pages at Peptide Products.`;

  const url = `https://www.peptideproducts.co.uk/product/${p.id}`;
  const ogImage = `https://www.peptideproducts.co.uk${p.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Peptide Products",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: p.name,
        },
      ],
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

  const isRetatrutide = p.id === "retatrutide";

  const imageUrls = (p.gallery?.length ? p.gallery : [p.image]).map(
    (src) => `https://www.peptideproducts.co.uk${src}`,
  );

  const relatedProducts = products
    .filter((item) => item.id !== p.id && item.category === p.category)
    .slice(0, 3);

  const categoryPage = getCategoryPage(p.category);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    image: imageUrls,
    description: isRetatrutide
      ? `${p.subtitle}. ${p.pack}. Research supply only. Buy Retatrutide UK research peptide with product details, documentation, and related research content.`
      : `${p.subtitle}. ${p.pack}. ${p.notes}`,
    sku: p.id,
    mpn: p.id,
    category: p.category,
    brand: {
      "@type": "Brand",
      name: "Peptide Products",
    },
    itemCondition: "https://schema.org/NewCondition",
    audience: {
      "@type": "Audience",
      audienceType: "Laboratory and research buyers",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Pack size",
        value: p.pack,
      },
      {
        "@type": "PropertyValue",
        name: "Stock status",
        value: p.stockStatus === "in_stock" ? "In stock" : "Sold out",
      },
      ...p.actives.map((active) => ({
        "@type": "PropertyValue",
        name: "Active",
        value: active,
      })),
    ],
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "GB",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 14,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.peptideproducts.co.uk/product/${p.id}`,
      priceCurrency: "GBP",
      price: p.priceGBP,
      availability:
        p.stockStatus === "in_stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Peptide Products",
        url: "https://www.peptideproducts.co.uk",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "GB",
        },
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.peptideproducts.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Shop",
        item: "https://www.peptideproducts.co.uk/shop",
      },
      ...(categoryPage
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: categoryPage.label,
              item: `https://www.peptideproducts.co.uk${categoryPage.href}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: p.name,
              item: `https://www.peptideproducts.co.uk/product/${p.id}`,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 3,
              name: p.name,
              item: `https://www.peptideproducts.co.uk/product/${p.id}`,
            },
          ]),
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema, breadcrumbSchema]),
        }}
      />

      <Header />

      <main className="py-12">
        <Container>
          <div className="text-sm text-muted">
            <Link href="/shop" className="font-semibold hover:text-ink">
              Shop
            </Link>
            {categoryPage ? (
              <>
                <span className="mx-2">/</span>
                <Link href={categoryPage.href} className="font-semibold hover:text-ink">
                  {categoryPage.label}
                </Link>
              </>
            ) : null}
            <span className="mx-2">/</span>
            {p.name}
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <ProductImageGallery product={p} />

            <div>
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="text-sm font-bold text-muted">{p.subtitle}</div>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
                  {p.name}
                </h1>

                <div
                  className={
                    "mt-4 inline-flex rounded-full px-3 py-1 text-xs font-extrabold " +
                    (p.stockStatus === "in_stock"
                      ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border border-red-200 bg-red-50 text-red-700")
                  }
                >
                  {p.stockStatus === "in_stock" ? "In stock" : "Sold out"}
                </div>

                <p className="mt-3 text-sm text-muted">
  {p.pack}. Supplied strictly for laboratory and scientific research use only.
</p>

{isRetatrutide ? (
  <>
    <p className="mt-3 text-sm text-muted">
      Retatrutide 40mg is one of the leading products in our metabolic research
      range, with a direct route from this page into the wider{" "}
      <Link
        href="/buy-retatrutide-uk"
        className="font-semibold text-ink hover:text-accent"
      >
        Buy Retatrutide UK
      </Link>{" "}
      pathway and supporting{" "}
      <Link
        href="/retatrutide-research-peptide"
        className="font-semibold text-ink hover:text-accent"
      >
        research guide
      </Link>
      .
    </p>

    <div className="mt-4 grid gap-3 sm:grid-cols-3">
      <div className="rounded-xl2 border border-line bg-panel p-3 text-xs font-extrabold text-ink">
        Research use only
      </div>
      <div className="rounded-xl2 border border-line bg-panel p-3 text-xs font-extrabold text-ink">
        UK dispatch available
      </div>
      <div className="rounded-xl2 border border-line bg-panel p-3 text-xs font-extrabold text-ink">
        Direct product access
      </div>
    </div>
  </>
) : (
  <p className="mt-3 text-sm text-muted">
    This product may be reviewed in controlled analytical, biochemical,
    formulation, compatibility, structural, or pathway-related research
    environments depending on the active compound listed on the label.
  </p>
)}

                {p.id === "meso-glutathione" ? (
                  <p className="mt-3 text-sm text-muted">
                    Explore more context in our{" "}
                    <Link
                      href="/glutathione-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      glutathione research peptide guide
                    </Link>{" "}
                    or browse the wider{" "}
                    <Link
                      href="/antioxidant-peptides"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      antioxidant peptides
                    </Link>{" "}
                    category.
                  </p>
                ) : null}

                {p.id === "skinbooster-hyaluronic-acid" ? (
                  <p className="mt-3 text-sm text-muted">
                    Explore more context in our{" "}
                    <Link
                      href="/hyaluronic-acid-peptide-research"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      hyaluronic acid peptide research guide
                    </Link>{" "}
                    or browse the wider{" "}
                    <Link
                      href="/hydration-peptides"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      hydration peptides
                    </Link>{" "}
                    category.
                  </p>
                ) : null}

                {p.id === "meso-lift-firming" ? (
                  <p className="mt-3 text-sm text-muted">
                    Explore the broader context in our{" "}
                    <Link
                      href="/firming-peptides"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      firming peptides
                    </Link>{" "}
                    guide and related laboratory research pages.
                  </p>
                ) : null}

                {p.id === "meso-collagen" ? (
                  <p className="mt-3 text-sm text-muted">
                    Explore the broader context in our{" "}
                    <Link
                      href="/regenerative-peptides"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      regenerative peptides
                    </Link>{" "}
                    guide and related regeneration-focused research pages.
                  </p>
                ) : null}

                {p.id === "meso-pdrn" ? (
                  <p className="mt-3 text-sm text-muted">
                    Learn more in our{" "}
                    <Link
                      href="/pdrn-research-peptide"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      PDRN research peptide guide
                    </Link>{" "}
                    or browse the wider{" "}
                    <Link
                      href="/regenerative-peptides"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      regenerative peptides
                    </Link>{" "}
                    category.
                  </p>
                ) : null}

              {p.id === "retatrutide" ? (
  <div className="mt-4 rounded-xl2 border border-line bg-panel p-5">
    <h2 className="text-lg font-extrabold tracking-tight text-ink">
      Retatrutide UK product pathway
    </h2>

    <p className="mt-3 text-sm leading-7 text-muted">
      This product page is the main route for users looking to review
      Retatrutide 40mg pricing, stock status, and laboratory product details.
    </p>

    <p className="mt-3 text-sm leading-7 text-muted">
      You can also explore the{" "}
      <Link
        href="/buy-retatrutide-uk"
        className="font-semibold text-ink hover:text-accent"
      >
        Buy Retatrutide UK
      </Link>{" "}
      page, the{" "}
      <Link
        href="/retatrutide-research-peptide"
        className="font-semibold text-ink hover:text-accent"
      >
        retatrutide research peptide
      </Link>{" "}
      guide, and the{" "}
      <Link
        href="/what-is-retatrutide"
        className="font-semibold text-ink hover:text-accent"
      >
        what is retatrutide
      </Link>{" "}
      page for broader context.
    </p>

    <div className="mt-4 flex flex-wrap gap-3">
      <Link
        href="/buy-retatrutide-uk"
        className="rounded-xl2 bg-accent px-4 py-2 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
      >
        Buy Retatrutide UK
      </Link>
      <Link
        href="/retatrutide-research-peptide"
        className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
      >
        Research guide
      </Link>
      <Link
        href="/what-is-retatrutide"
        className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
      >
        What is Retatrutide?
      </Link>
    </div>
  </div>
) : null}

                {p.id === "meso-vitamin-c" ? (
                  <p className="mt-3 text-sm text-muted">
                    Explore the broader context in our{" "}
                    <Link
                      href="/antioxidant-peptides"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      antioxidant peptides
                    </Link>{" "}
                    guide and related research pages.
                  </p>
                ) : null}

                {categoryPage ? (
                  <p className="mt-3 text-sm text-muted">
                    This product sits within the{" "}
                    <Link
                      href={categoryPage.href}
                      className="font-semibold text-ink hover:text-accent"
                    >
                      {categoryPage.label}
                    </Link>{" "}
                    category and can also be explored alongside wider{" "}
                    <Link
                      href="/research-peptides"
                      className="font-semibold text-ink hover:text-accent"
                    >
                      research peptides
                    </Link>{" "}
                    content.
                  </p>
                ) : null}

                <div className="mt-6 grid gap-4 rounded-xl2 border border-line bg-panel p-5">
                  <div>
                    <div className="text-xs font-extrabold text-muted">Highlights</div>
                    <ul className="mt-2 grid gap-2 text-sm text-muted">
                      {p.highlights.map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-xs font-extrabold text-muted">Actives (label)</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.actives.map((a) => (
                        <span
                          key={a}
                          className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold text-muted"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-extrabold text-muted">
                      Intended research use
                    </div>
                    <ul className="mt-2 grid gap-2 text-sm text-muted">
                      {p.intendedUse.map((u) => (
                        <li key={u}>• {u}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl2 border border-line bg-white p-4 text-xs text-muted">
                    <span className="font-bold text-ink">Research use only:</span>{" "}
                    {p.notes}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl2 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-sm font-extrabold">Documentation</h2>
                <p className="mt-2 text-sm text-muted">
                  Download supporting documents for this product.
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

                <div className="mt-3 text-xs text-muted">Research use only.</div>
              </div>

              <div className="mt-6">
                <ProductBuyBox product={p} />
              </div>
            </div>
          </div>

          <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-extrabold tracking-tight">
              Research guides and related pages
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
              Explore broader research peptide topics and related compound pages for
              additional laboratory context.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link
                href="/research-peptides"
                className="rounded-xl2 border border-line bg-panel p-4 transition hover:border-ink/30 hover:bg-white"
              >
                <div className="text-sm font-extrabold text-ink">Research peptides</div>
                <div className="mt-2 text-sm text-muted">
                  Overview of antioxidant, hydration, firming, regenerative, and related
                  compound lines.
                </div>
              </Link>

              <Link
                href="/research-peptides-uk"
                className="rounded-xl2 border border-line bg-panel p-4 transition hover:border-ink/30 hover:bg-white"
              >
                <div className="text-sm font-extrabold text-ink">
                  Research peptides UK
                </div>
                <div className="mt-2 text-sm text-muted">
                  UK-focused overview of common research peptide categories and
                  laboratory uses.
                </div>
              </Link>

              <Link
                href="/research-peptide-supplier-uk"
                className="rounded-xl2 border border-line bg-panel p-4 transition hover:border-ink/30 hover:bg-white"
              >
                <div className="text-sm font-extrabold text-ink">
                  Research peptide supplier UK
                </div>
                <div className="mt-2 text-sm text-muted">
                  Learn more about peptide supply categories and related product
                  lines.
                </div>
              </Link>

              {categoryPage ? (
                <Link
                  href={categoryPage.href}
                  className="rounded-xl2 border border-line bg-panel p-4 transition hover:border-ink/30 hover:bg-white"
                >
                  <div className="text-sm font-extrabold text-ink">Category</div>
                  <div className="mt-2 text-sm text-muted">{categoryPage.label}</div>
                </Link>
              ) : (
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">Category</div>
                  <div className="mt-2 text-sm text-muted">{p.category}</div>
                </div>
              )}
            </div>

            {isRetatrutide ? (
              <div className="mt-8 rounded-xl2 border border-line bg-panel p-5">
                <h3 className="text-lg font-extrabold tracking-tight text-ink">
                  Buy Retatrutide UK research pathway
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  This page supports users looking to{" "}
                  <Link
                    href="/buy-retatrutide-uk"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    buy retatrutide UK
                  </Link>{" "}
                  by linking product intent with the{" "}
                  <Link
                    href="/retatrutide-research-peptide"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    retatrutide research peptide
                  </Link>{" "}
                  guide and the broader{" "}
                  <Link
                    href="/research-peptides-uk"
                    className="font-semibold text-ink hover:text-accent"
                  >
                    research peptides UK
                  </Link>{" "}
                  content cluster.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/buy-retatrutide-uk"
                    className="rounded-xl2 bg-accent px-4 py-2 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Buy Retatrutide UK
                  </Link>
                  <Link
                    href="/retatrutide-research-peptide"
                    className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Retatrutide research peptide
                  </Link>
                </div>
              </div>
            ) : null}

            {relatedProducts.length > 0 ? (
              <div className="mt-8">
                <h3 className="text-lg font-extrabold tracking-tight">
                  Related products
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Explore more products from the same research category.
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {relatedProducts.map((item) => (
                    <Link
                      key={item.id}
                      href={`/product/${item.id}`}
                      className="rounded-xl2 border border-line bg-panel p-4 transition hover:border-ink/30 hover:bg-white"
                    >
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        {item.category}
                      </div>

                      <div
                        className={
                          "mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-extrabold " +
                          (item.stockStatus === "in_stock"
                            ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                            : "border border-red-200 bg-red-50 text-red-700")
                        }
                      >
                        {item.stockStatus === "in_stock" ? "In stock" : "Sold out"}
                      </div>

                      <div className="mt-2 text-base font-extrabold text-ink">
                        {item.name}
                      </div>
                      <div className="mt-2 text-sm text-muted">{item.subtitle}</div>
                      <div className="mt-3 text-sm font-extrabold text-ink">
                        View product →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}