import Link from "next/link";

type RetatrutideRelatedLinksProps = {
  currentPath?: string;
};

const retatrutideLinks = [
  {
    href: "/product/retatrutide",
    label: "Retatrutide 40mg product",
    description:
      "Live product page for Retatrutide 40mg, including current price, stock status, images, format, and checkout route.",
  },
  {
    href: "/retatrutide",
    label: "Retatrutide hub",
    description:
      "Main Retatrutide information hub connecting the product page with price, UK availability, supplier, and research pages.",
  },
  {
    href: "/retatrutide-uk",
    label: "Retatrutide UK guide",
    description:
      "UK-focused availability page for customers checking product details, UK ordering information, and support routes.",
  },
  {
    href: "/buy-retatrutide-uk",
    label: "Buy Retatrutide UK",
    description:
      "Commercial buying-intent guide that sends high-intent users to the live Retatrutide 40mg product page.",
  },
  {
    href: "/retatrutide-price-uk",
    label: "Retatrutide price UK",
    description:
      "Price and value guide explaining how to check the current Retatrutide 40mg price, pack information, and value signals.",
  },
  {
    href: "/where-to-buy-retatrutide-uk",
    label: "Where to buy Retatrutide UK",
    description:
      "Supplier and trust checklist covering documentation, reviews, support routes, delivery information, and product-page links.",
  },
  {
    href: "/retatrutide-research-peptide",
    label: "Research peptide guide",
    description:
      "Research-context page covering laboratory information and careful research-use-only Retatrutide positioning.",
  },
  {
    href: "/what-is-retatrutide",
    label: "What is Retatrutide?",
    description:
      "Simple explainer page for definition searches before users move to product, price, UK, or research pages.",
  },
  {
    href: "/reta",
    label: "Reta UK",
    description:
      "Short-name landing page for users searching Reta as shorthand for Retatrutide in the UK.",
  },

  { href: "/retatrutide-for-sale-uk", label: "Retatrutide for sale UK", description: "High-intent organic landing page for users checking Retatrutide availability, price, UK dispatch, and documentation before ordering." },
  { href: "/retatrutide-40mg-uk", label: "Retatrutide 40mg UK", description: "Format-focused page for searches around Retatrutide 40mg product details, pack checks, stock, and ordering information." },
  { href: "/retatrutide-uk-pen", label: "Retatrutide UK pen", description: "Pen-format search page that routes visitors to the live Retatrutide 40mg product page and support information." },
  { href: "/reta-peptide-buy", label: "Reta peptide buy", description: "Shorthand buying-intent page for users searching Reta as a route to Retatrutide product and price information." },
  { href: "/peptide-pens-uk", label: "Peptide pens UK", description: "Broader peptide pen search-entry page supporting Retatrutide 40mg visibility and metabolic category traffic." },
  { href: "/retatrutide-supplier-checklist", label: "Retatrutide supplier checklist", description: "Neutral supplier trust checklist covering product details, documentation, reviews, shipping, and support checks." },
  {
    href: "/quality-assurance",
    label: "Quality information",
    description:
      "Quality and documentation page supporting Retatrutide product trust and wider Peptide Products credibility.",
  },
  {
    href: "/reviews",
    label: "Customer reviews",
    description:
      "Customer feedback about ordering experience, delivery, packaging, communication, and support.",
  },
] as const;

export function RetatrutideRelatedLinks({
  currentPath,
}: RetatrutideRelatedLinksProps) {
  const links = retatrutideLinks.filter((item) => item.href !== currentPath);

  return (
    <section className="mt-12 rounded-xl3 border border-line bg-white p-6 shadow-soft">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Related Retatrutide information
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Retatrutide is the priority product on Peptide Products, so these pages
          are arranged as a connected SEO cluster. Each page targets a different
          search intent while pointing customers toward the main Retatrutide 40mg
          product page when they need live price, stock, and checkout details.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="surface-card p-5">
            <div className="font-extrabold text-ink">{item.label}</div>
            <p className="mt-2 text-sm leading-6 text-muted">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
