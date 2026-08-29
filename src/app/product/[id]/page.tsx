import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { products } from "@/data/products";
import { ProductBuyBox, ProductImageGallery } from "./ui";
import { getProductSeoContent } from "@/lib/seoProductContent";

type Props = {
  params: { id: string };
};

const legacyProductRedirects: Record<string, string> = {
  "tirzepatide-tr30-30mg": "tirzepatide-tr10-10mg",
  "tirzepatide-tr40-40mg": "tirzepatide-tr15-15mg",
};

function getProduct(id: string) {
  return products.find((x) => x.id === id);
}

function getCategoryPage(category: string) {
  switch (category) {
    case "Antioxidants":
      return { href: "/antioxidant-peptides", label: "Antioxidant peptides" };
    case "Firming":
      return { href: "/firming-peptides", label: "Firming peptides" };
    case "Regenerative":
      return { href: "/regenerative-peptides", label: "Regenerative peptides" };
    case "Metabolic":
      return { href: "/metabolic-research-compounds", label: "Metabolic research compounds" };
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedId = legacyProductRedirects[params.id] || params.id;
  const p = getProduct(resolvedId);

  if (!p) {
    return {
      title: { absolute: "Product not found | Peptide Products" },
      description: "The requested product could not be found.",
    };
  }

  const seo = getProductSeoContent(p);
  const title = seo.title;
  const description = seo.description;
const url = `https://www.peptideproducts.co.uk/product/${p.id}`;
const ogImage = `https://www.peptideproducts.co.uk${p.gallery?.[0] ?? p.image}`;


  return {
    title: { absolute: title },
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
  const legacyTarget = legacyProductRedirects[params.id];
  if (legacyTarget) redirect(`/product/${legacyTarget}`);

  const p = getProduct(params.id);
  if (!p) return notFound();

  const seo = getProductSeoContent(p);
  const imageUrls = (p.gallery?.length ? p.gallery : [p.image]).map(
    (src) => `https://www.peptideproducts.co.uk${src}`
  );

  const categoryPage = seo.categoryPage ?? getCategoryPage(p.category);


  const isRetaVial = p.id.startsWith("reta-research-compound-");
  const relatedProducts = products
    .filter((item) => {
      if (item.id === p.id) return false;
      if (isRetaVial) return item.id.startsWith("reta-research-compound-");
      return item.category === p.category;
    })
    .slice(0, 3);

  const specificationCards = [
    { label: "Pack", value: p.pack },
    { label: "Format", value: getFormatLabel(p.pack) },
    { label: "Category", value: p.category },
    { label: "Primary actives", value: p.actives.join(", ") },
  ];

 const isRetatrutidePen = p.id === "retatrutide";
 const isFlagshipRetatrutide = p.id === "retatrutide";
 const faqs = isRetatrutidePen
  ? [
      {
        q: "Is this the main Retatrutide 40mg product page?",
        a: "Yes. This is the main Peptide Products listing for the Retatrutide 40mg research peptide pen, including current price, stock status, product images, presentation and checkout information.",
      },
      {
        q: "Is Retatrutide supplied for human use?",
        a: "No. Retatrutide is supplied strictly for laboratory, analytical and scientific research use only. It is not supplied for human consumption, medical use, veterinary use, clinical use or treatment purposes.",
      },
      {
        q: "Can I review documentation before ordering?",
        a: "Review the product gallery, pack details, research-use-only information and the quality-information page before ordering. Product-specific reports are only shown when they match the listed product and batch.",
      },
      {
        q: "How does ordering work?",
        a: "Add an in-stock product to cart, review your order, enter your delivery details, then complete secure card payment through Stripe. Order updates are sent by email.",
      },
    ]
  : [
      {
        q: `Is ${p.name} listed for human use?`,
        a: "No. All products are listed strictly for laboratory, analytical, and scientific research use only.",
      },
      {
        q: "Can I view the test report before ordering?",
        a: p.coa
          ? "Yes. This product includes a downloadable test report or certificate file where available."
          : "Contact support if you need help finding product quality information before ordering.",
      },
      {
        q: "How is ordering handled?",
        a: "Add the product to cart, enter your delivery details, then complete secure card payment through Stripe.",
      },
      {
        q: "Do you provide delivery?",
        a: "Yes. UK delivery is available, and selected international delivery is available at checkout.",
      },
    ];

      const productUrl = `https://www.peptideproducts.co.uk/product/${p.id}`;

const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "GB",
  returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  merchantReturnDays: 0,
};

const shippingDetails = [
  {
    "@type": "OfferShippingDetails",
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "GB",
    },
    shippingRate: {
      "@type": "MonetaryAmount",
      value: 0,
      currency: "GBP",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 2,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 3,
        unitCode: "DAY",
      },
    },
  },
  {
    "@type": "OfferShippingDetails",
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: [
        "US",
        "CA",
        "AU",
        "NZ",
        "IE",
        "DE",
        "FR",
        "ES",
        "IT",
        "NL",
        "BE",
        "SE",
        "NO",
        "DK",
        "CH",
        "AT",
        "PT",
        "AE",
        "SA",
      ],
    },
    shippingRate: {
      "@type": "MonetaryAmount",
      value: 25,
      currency: "GBP",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 3,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 5,
        maxValue: 10,
        unitCode: "DAY",
      },
    },
  },
];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    image: imageUrls,
    description: `${p.subtitle}. ${p.pack}. ${p.notes}`,
    sku: p.id,
    mpn: p.id,
    category: p.category,
    brand: { "@type": "Brand", name: p.brandName ?? "Peptide Products" },
    itemCondition: "https://schema.org/NewCondition",
    
    additionalProperty: [
  { "@type": "PropertyValue", name: "Pack size", value: p.pack },
  { "@type": "PropertyValue", name: "Format", value: getFormatLabel(p.pack) },
  {
    "@type": "PropertyValue",
    name: "Stock status",
    value: p.availabilityLabel ?? (p.stockStatus === "in_stock" ? "In stock" : "Sold out"),
  },
  ...(p.coa
    ? [
        {
          "@type": "PropertyValue",
          name: "Test report",
          value: "Available",
        },
      ]
    : []),
],
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "GBP",
      price: p.priceGBP,
      availability:
        p.stockStatus === "in_stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      shippingDetails,
hasMerchantReturnPolicy: merchantReturnPolicy,
      seller: {
        "@type": "Organization",
        name: "Peptide Products",
        url: "https://www.peptideproducts.co.uk",
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


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema, breadcrumbSchema, faqSchema]),
        }}
      />

      <Header />

      <main className="py-5 pb-24 sm:py-8 lg:py-10 lg:pb-12">
        <Container>
          <div className="overflow-hidden text-ellipsis whitespace-nowrap text-xs text-muted sm:text-sm">
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

          {isFlagshipRetatrutide ? (
            <section className="mt-4 overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-lift sm:mt-6 sm:rounded-[32px]">
              <div className="bg-ink px-4 py-3 text-white sm:px-5 sm:py-4 md:px-8">
                <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Retatrutide flagship research product</div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-300">In stock</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-extrabold text-white">Alluvi</span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)]">
                <div className="border-b border-line bg-gradient-to-br from-panel to-white p-3 sm:p-4 md:p-7 lg:border-b-0 lg:border-r">
                  <ProductImageGallery product={p} />
                </div>

                <div className="p-4 sm:p-5 md:p-8 lg:p-9">
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">Retatrutide 40mg research pen</div>
                  <h1 className="mt-2 text-[2.35rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:mt-3 sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">{p.name}</h1>
                  <p className="mt-4 text-[15px] leading-7 text-muted sm:mt-5 sm:text-base">{seo.intro}</p>

                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">
                    <div className="rounded-xl2 border border-line bg-panel p-3 sm:p-4">
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted">Total strength</div>
                      <div className="mt-1 text-lg font-extrabold text-ink">40mg</div>
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-3 sm:p-4">
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted">Format</div>
                      <div className="mt-1 text-lg font-extrabold text-ink">Single pen</div>
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-3 sm:p-4">
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted">Product</div>
                      <div className="mt-1 text-lg font-extrabold text-ink">Retatrutide</div>
                    </div>
                    <div className="rounded-xl2 border border-line bg-panel p-3 sm:p-4">
                      <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted">Presentation</div>
                      <div className="mt-1 text-lg font-extrabold text-ink">Alluvi</div>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-7">
                    <ProductBuyBox product={p} />
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(360px,0.84fr)] lg:items-start">
              <div className="grid gap-5">
                <section className="rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
                  <div className="eyebrow">{p.category}</div>
                  <div className="mt-3 text-sm font-bold text-muted">
                    {isRetatrutidePen ? "Retatrutide 40mg research peptide pen" : p.subtitle}
                  </div>
                  <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">{p.name}</h1>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="trust-pill">{isRetatrutidePen ? "Retatrutide UK" : "UK-based supply"}</span>
                    <span className="trust-pill">Tracked delivery available</span>
                    <span className="trust-pill">Laboratory research use only</span>
                    <span className={"rounded-full px-3 py-1 text-xs font-extrabold " + (p.stockStatus === "in_stock" ? "border border-emerald-200 bg-emerald-50 text-emerald-700" : "border border-red-200 bg-red-50 text-red-700")}>
                      {p.availabilityLabel ?? (p.stockStatus === "in_stock" ? "In stock" : "Sold out")}
                    </span>
                  </div>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">{seo.intro}</p>
                  <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-ink">{p.notes}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {specificationCards.map((item) => (
                      <div key={item.label} className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted">{item.label}</div>
                        <div className="mt-2 text-sm font-semibold leading-6 text-ink">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </section>
                <div className="rounded-xl3 border border-line bg-panel p-3 shadow-soft md:p-4">
                  <ProductImageGallery product={p} />
                </div>
              </div>
              <ProductBuyBox product={p} />
            </section>
          )}



          {p.id === "retatrutide" ? (
            <section className="mt-6 rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
              <div className="soft-label">Retatrutide order confidence</div>

              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink">
                Clear checks before you order
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                This Retatrutide 40mg research peptide pen page keeps the essentials together: product format, current price, stock status, UK dispatch, product presentation, quality information and support before checkout.
              </p>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">1. Confirm product</div>
                  <p className="mt-2 text-sm leading-6 text-muted">Retatrutide 40mg single pen format with current stock and price shown clearly.</p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">2. Review information</div>
                  <p className="mt-2 text-sm leading-6 text-muted">Check the product gallery, quality information, delivery details and research-use-only notices.</p>
                </div>

                <div className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">3. Checkout or ask</div>
                  <p className="mt-2 text-sm leading-6 text-muted">Complete secure checkout or message support before ordering if you need help with dispatch, payment or documentation.</p>
                </div>
              </div>
            </section>
          ) : null}

          {isFlagshipRetatrutide ? (
            <section className="mt-8 rounded-[32px] border border-line bg-white p-6 shadow-soft md:p-9">
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">Product specification</div>
                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">Clear product details at a glance</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">A concise summary of the Retatrutide product format, presentation and ordering information.</p>
                </div>
                <dl className="grid overflow-hidden rounded-xl3 border border-line sm:grid-cols-2">
                  {[
                    ["Compound", "Retatrutide"],
                    ["Total strength", "40mg"],
                    ["Format", "Single pre-filled pen"],
                    ["Presentation", "Alluvi"],
                    ["Stock", "In stock in the UK"],
                    ["Availability", "Current UK stock shown live"],
                    ["Checkout", "Secure card payment"],
                    ["Intended listing", "Laboratory research use only"],
                  ].map(([label, value]) => (
                    <div key={label} className="border-b border-line p-4 even:bg-panel sm:[&:nth-last-child(-n+2)]:border-b-0">
                      <dt className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted">{label}</dt>
                      <dd className="mt-1 text-sm font-extrabold leading-6 text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          ) : null}

          <section className="mt-6 rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
            <div className="soft-label">Documentation & product notes</div>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink">
              Documentation and handling notes
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl2 border border-line bg-panel p-4">
                <h3 className="text-sm font-extrabold text-ink">Documentation</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{seo.documentation}</p>
              </div>

              <div className="rounded-xl2 border border-line bg-panel p-4">
                <h3 className="text-sm font-extrabold text-ink">Handling</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{seo.handling}</p>
              </div>

              <div className="rounded-xl2 border border-line bg-panel p-4">
                <h3 className="text-sm font-extrabold text-ink">Compare</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{seo.comparison}</p>
              </div>
            </div>
          </section>

        

          <section className="mt-6 rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
            <div className="soft-label">Quick confidence check</div>

            <div className="mt-4 grid gap-3 text-sm text-muted md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                Secure card checkout
              </div>
              <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                Secure card checkout available
              </div>
              <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                Free UK delivery / £25 selected international delivery
              </div>
              <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                Discreet packaging and tracked dispatch where available
              </div>
            </div>
          </section>

                   <section className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft">
              <div className="text-sm font-extrabold text-ink">
                Secure checkout
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Secure card checkout is currently available. Payment instructions are provided after an order is placed.
              </p>
            </div>

            <Link href="/quality-assurance" className="surface-card p-5">
  <div className="text-sm font-extrabold text-ink">
    Quality information
  </div>
  <p className="mt-2 text-sm leading-6 text-muted">
    Review product quality information and support details before ordering.
  </p>
</Link>

            <Link href="/shipping" className="surface-card p-5">
              <div className="text-sm font-extrabold text-ink">
                Delivery information
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                UK delivery and selected international delivery information.
              </p>
            </Link>

            <Link href="/reviews" className="surface-card p-5">
              <div className="text-sm font-extrabold text-ink">
                Customer reviews
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">
                Read ordering, packaging, and delivery feedback.
              </p>
            </Link>
          </section>

          <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
              <div className="soft-label">Product details</div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                Product information
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="text-base font-extrabold text-ink">
                    What you are ordering
                  </h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
                    {p.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-ink">
                    Research context
                  </h3>
                  <div className="mt-4 grid gap-3">
                    {p.intendedUse.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
              <div className="soft-label">Ordering information</div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                Before you order
              </h2>

              <div className="mt-5 grid gap-3 text-sm text-muted">
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  Secure card checkout
                </div>
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  Secure card checkout available
                </div>
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  Free UK delivery / £25 selected international delivery
                </div>
                <div className="rounded-xl2 border border-line bg-panel px-4 py-3">
                  Discreet packaging and tracked dispatch where available
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
            <div className="soft-label">FAQ</div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              Common questions
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-xl2 border border-line bg-panel p-4">
                  <div className="text-sm font-extrabold text-ink">{item.q}</div>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-6">
            <div className="soft-label">Research information</div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
              Related research pages
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link href="/peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  Browse UK peptide supply information.
                </p>
              </Link>

              <Link href="/research-compounds-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Research compounds UK</div>
                <p className="mt-2 text-sm text-muted">
                  Explore wider laboratory compound pages.
                </p>
              </Link>

              <Link href="/metabolic-research-compounds" className="surface-card p-5">
                <div className="font-extrabold text-ink">Metabolic compounds</div>
                <p className="mt-2 text-sm text-muted">
                  View related metabolic research pages.
                </p>
              </Link>

              <Link href="/buy-peptides-uk" className="surface-card p-5">
                <div className="font-extrabold text-ink">Buy peptides UK</div>
                <p className="mt-2 text-sm text-muted">
                  Review ordering and product access pages.
                </p>
              </Link>
            </div>
          </section>

          {relatedProducts.length ? (
            <section className="mt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="soft-label">Related products</div>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-ink">
                    {isRetaVial ? "Related Reta vial products" : "Explore more from this category"}
                  </h2>
                </div>

                <Link href="/shop" className="text-sm font-extrabold text-ink/80 hover:text-ink">
                  View all →
                </Link>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={`/product/${item.id}`}
                    className="group rounded-xl3 border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                  >
                    <div className="text-sm font-bold uppercase tracking-wide text-muted">
                      {item.category}
                    </div>
                    <div className="mt-2 text-lg font-extrabold text-ink">
                      {item.name}
                    </div>
                    <div className="mt-2 text-sm text-muted">{item.pack}</div>
                    <div className="mt-4 text-sm font-extrabold text-ink">
                      Open product →
                    </div>
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