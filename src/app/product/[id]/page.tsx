import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
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
<<<<<<< HEAD
      return { href: "/research-peptides", label: "Research peptides" };
=======
      return {
        href: "/retatrutide-research-peptide",
        label: "Retatrutide research peptide",
      };
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    default:
      return null;
  }
}

<<<<<<< HEAD
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

=======
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct(params.id);

  if (!p) {
    return {
      title: "Product not found | Peptide Products",
      description: "The requested product could not be found.",
    };
  }

<<<<<<< HEAD
  const title = `${p.name} | Premium Research Peptide UK`;
  const description = `${p.subtitle}. ${p.pack}. ${p.coa ? "Documentation available. " : ""}Research supply only. View product details and ordering guidance at Peptide Products.`;
  const url = `https://www.peptideproducts.co.uk/product/${p.id}`;
  const ogImage = `https://www.peptideproducts.co.uk${p.gallery?.[0] ?? p.image}`;
=======
  const isRetatrutide = p.id === "retatrutide";

  const title = isRetatrutide
    ? "Retatrutide 40mg | Buy Retatrutide UK Research Peptide"
    : `${p.name} | Research Peptide Compound UK`;

  const description = isRetatrutide
    ? `Buy Retatrutide UK research peptide. ${p.pack}. Research supply only. View Retatrutide 40mg product details, price, stock status, and related research pages at Peptide Products.`
    : `${p.subtitle}. ${p.pack}. Research supply only. View product details, documentation, and related peptide research pages at Peptide Products.`;

  const url = `https://www.peptideproducts.co.uk/product/${p.id}`;
  const ogImage = `https://www.peptideproducts.co.uk${p.image}`;
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f

  return {
    title,
    description,
<<<<<<< HEAD
    alternates: { canonical: url },
=======
    alternates: {
      canonical: url,
    },
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    openGraph: {
      title,
      description,
      url,
      siteName: "Peptide Products",
      type: "website",
<<<<<<< HEAD
      images: [{ url: ogImage, width: 1200, height: 630, alt: p.name }],
=======
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: p.name,
        },
      ],
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
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

<<<<<<< HEAD
  const imageUrls = (p.gallery?.length ? p.gallery : [p.image]).map((src) => `https://www.peptideproducts.co.uk${src}`);
  const relatedProducts = products.filter((item) => item.id !== p.id && item.category === p.category).slice(0, 3);
  const categoryPage = getCategoryPage(p.category);
  const previewPath = getPreviewPath(p.coa);
=======
  const isRetatrutide = p.id === "retatrutide";

  const imageUrls = (p.gallery?.length ? p.gallery : [p.image]).map(
    (src) => `https://www.peptideproducts.co.uk${src}`
  );

  const relatedProducts = products
    .filter((item) => item.id !== p.id && item.category === p.category)
    .slice(0, 3);

  const categoryPage = getCategoryPage(p.category);
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    image: imageUrls,
<<<<<<< HEAD
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
=======
    description: isRetatrutide
      ? `${p.subtitle}. ${p.pack}. Research supply only. Buy Retatrutide UK research peptide with product details, stock status, and related research content.`
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
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    offers: {
      "@type": "Offer",
      url: `https://www.peptideproducts.co.uk/product/${p.id}`,
      priceCurrency: "GBP",
      price: p.priceGBP,
<<<<<<< HEAD
      availability: p.stockStatus === "in_stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Peptide Products", url: "https://www.peptideproducts.co.uk" },
=======
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
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
<<<<<<< HEAD
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
=======
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
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
              </>
            ) : null}
            <span className="mx-2">/</span>
            {p.name}
          </div>

<<<<<<< HEAD
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
=======
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <ProductImageGallery product={p} />

            <div>
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <div className="text-sm font-bold text-muted">{p.subtitle}</div>

                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-ink">
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

                <p className="mt-4 text-sm leading-7 text-muted">
                  <span className="font-semibold text-ink">{p.pack}</span>. Supplied
                  strictly for laboratory and scientific research use only.
                </p>

                {isRetatrutide ? (
                  <>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      Retatrutide 40mg is one of the main products in our metabolic
                      research range. This page is designed to give a direct route
                      into product pricing, stock status, secure checkout, and the
                      wider{" "}
                      <Link
                        href="/buy-retatrutide-uk"
                        className="font-semibold text-ink hover:text-accent"
                      >
                        Buy Retatrutide UK
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/retatrutide-research-peptide"
                        className="font-semibold text-ink hover:text-accent"
                      >
                        Retatrutide research peptide
                      </Link>{" "}
                      pages.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-xl2 border border-line bg-panel p-3 text-xs font-extrabold text-ink">
                        Secure Stripe checkout
                      </div>
                      <div className="rounded-xl2 border border-line bg-panel p-3 text-xs font-extrabold text-ink">
                        UK dispatch available
                      </div>
                      <div className="rounded-xl2 border border-line bg-panel p-3 text-xs font-extrabold text-ink">
                        Research use only
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl2 border border-line bg-panel p-5">
                      <h2 className="text-lg font-extrabold tracking-tight text-ink">
                        Retatrutide UK product pathway
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        Users looking to review Retatrutide 40mg price, product
                        format, and UK availability can use this page as the main
                        product route.
                      </p>

                      <p className="mt-3 text-sm leading-7 text-muted">
                        For wider context, you can also explore{" "}
                        <Link
                          href="/buy-retatrutide-uk"
                          className="font-semibold text-ink hover:text-accent"
                        >
                          Buy Retatrutide UK
                        </Link>
                        ,{" "}
                        <Link
                          href="/retatrutide-research-peptide"
                          className="font-semibold text-ink hover:text-accent"
                        >
                          Retatrutide research peptide
                        </Link>
                        , and{" "}
                        <Link
                          href="/what-is-retatrutide"
                          className="font-semibold text-ink hover:text-accent"
                        >
                          What is Retatrutide?
                        </Link>
                        .
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
                  </>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-muted">
                    This product may be reviewed in controlled analytical,
                    biochemical, formulation, compatibility, structural, or
                    pathway-related laboratory environments depending on the active
                    compound listed on the label.
                  </p>
                )}

                {p.id === "meso-glutathione" ? (
                  <p className="mt-4 text-sm text-muted">
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
                  <p className="mt-4 text-sm text-muted">
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
                  <p className="mt-4 text-sm text-muted">
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
                  <p className="mt-4 text-sm text-muted">
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
                  <p className="mt-4 text-sm text-muted">
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

                {p.id === "meso-vitamin-c" ? (
                  <p className="mt-4 text-sm text-muted">
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
                  <p className="mt-4 text-sm text-muted">
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
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f

              <div className="mt-6">
                <ProductBuyBox product={p} />
              </div>
            </div>
          </div>

<<<<<<< HEAD
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
=======
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
                  Overview of antioxidant, hydration, firming, regenerative, and
                  related compound lines.
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
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
        </Container>
      </main>

      <Footer />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> da4884999aac5e65a9be772f3a18c2b688e4ec9f
