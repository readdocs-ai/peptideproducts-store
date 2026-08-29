import type { Product } from "@/data/products";

export type ProductSeoContent = {
  title: string;
  description: string;
  intro: string;
  documentation: string;
  handling: string;
  comparison: string;
  categoryPage: { href: string; label: string };
};

const productSpecific: Record<string, Partial<ProductSeoContent>> = {
  retatrutide: {
    title: "Retatrutide 40mg Research Peptide Pen UK | Peptide Products",
    description:
      "Retatrutide 40mg research peptide pen for laboratory and analytical research use, supplied in the Alluvi presentation with UK stock, product images, delivery information and secure checkout.",
    intro:
      "Retatrutide 40mg is the main Retatrutide product in the Peptide Products catalogue. It is currently supplied in the Alluvi presentation, while Retatrutide remains the primary product name across the page, navigation and search journey.",
    documentation:
      "Review the Retatrutide 40mg product gallery, pack format, stock status, research-use-only notice and quality information before ordering.",
    comparison:
      "Use this listing as the main Retatrutide product page. The supporting Retatrutide information pages should point back here for current stock, price, product images, and checkout details.",
  },
  "synexa-retatrutide-40mg": {
    title: "Synexa Retatrutide 40mg RapidPen® | Sold Out | Peptide Products",
    description:
      "Synexa Retatrutide 40mg RapidPen® research presentation is currently sold out. View the current main Retatrutide 40mg listing for available stock and product information.",
    intro:
      "Synexa Retatrutide 40mg RapidPen® is retained in the Peptide Products catalogue as a previous Retatrutide presentation and is currently sold out. The main Retatrutide product journey now shows the currently available Alluvi presentation.",
    documentation:
      "Review the Synexa product gallery and research-use-only information. This presentation is currently sold out.",
    comparison:
      "For current Retatrutide 40mg availability, use the main Retatrutide product page, which now features the Alluvi presentation.",
  },
  "reta-research-compound-10mg-vial": {
    title: "Reta Research Compound 10mg Vial UK | Peptide Products",
    description:
      "Reta Research Compound 10mg vial for laboratory research and analytical use. UK dispatch from Peptide Products. Not for human or veterinary use.",
    intro:
      "Reta Research Compound 10mg Vial is listed for laboratory research, analytical review, and controlled scientific study. The page keeps the product format, content, stock status, price, UK dispatch information, and research-use-only notice together in a concise product record.",
    documentation:
      "Review the product label, pack format, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle lyophilised research material according to the product label, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "This listing is one of the Reta research vial formats available for comparison by vial content and laboratory supply format.",
  },
  "reta-research-compound-20mg-vial": {
    title: "Reta Research Compound 20mg Vial UK | Peptide Products",
    description:
      "Reta Research Compound 20mg vial for laboratory research and analytical use. UK dispatch from Peptide Products. Not for human or veterinary use.",
    intro:
      "Reta Research Compound 20mg Vial is listed for laboratory research, analytical review, and controlled scientific study. The page summarises the vial format, content, stock status, price, UK dispatch information, and research-use-only notice without treatment, dosing, or human-use wording.",
    documentation:
      "Review the product label, pack format, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle lyophilised research material according to the product label, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "This listing is one of the Reta research vial formats available for comparison by vial content and laboratory supply format.",
  },
  "reta-research-compound-40mg-vial": {
    title: "Reta Research Compound 40mg Vial UK | Peptide Products",
    description:
      "Reta Research Compound 40mg vial for laboratory research and analytical use. UK dispatch from Peptide Products. Not for human or veterinary use.",
    intro:
      "Reta Research Compound 40mg Vial is listed for laboratory research, analytical review, and controlled scientific study. The page keeps the vial format, content, stock status, price, UK dispatch information, and research-use-only notice clear for product discovery.",
    documentation:
      "Review the product label, pack format, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle lyophilised research material according to the product label, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "This listing is one of the Reta research vial formats available for comparison by vial content and laboratory supply format.",
  },
  "tirzepatide-tr10-10mg": {
    title: "Tirzepatide TR10 10mg Research Peptide UK | Peptide Products",
    description:
      "Tirzepatide TR10 10mg lyophilised research peptide vial for laboratory use only. Review pack size, current price, stock status, UK delivery, checkout guidance, and quality information.",
    intro:
      "Tirzepatide TR10 10mg is listed as a lyophilised research peptide vial for laboratory, analytical, and controlled scientific research procurement. This page gives a clear product record covering the 10mg vial format, current price, stock status, ordering route, delivery information, and research-use-only notice.",
    documentation:
      "Review the Tirzepatide TR10 product specification, vial format, pack size, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle lyophilised Tirzepatide research material according to the product label, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "TR10 is the 10mg Tirzepatide format. Customers comparing Tirzepatide options can also review the TR15 15mg product page and the metabolic research compounds category for related catalogue items.",
  },
  "tirzepatide-tr15-15mg": {
    title: "Tirzepatide TR15 15mg Research Peptide UK | Peptide Products",
    description:
      "Tirzepatide TR15 15mg lyophilised research peptide vial for laboratory use only. Review pack size, price, delivery, checkout guidance, and quality information.",
    intro:
      "Tirzepatide TR15 15mg is the larger of the current Tirzepatide vial formats listed by Peptide Products. The product page shows current price, stock status, pack format, delivery information and research-use-only positioning.",
    documentation:
      "Review the Tirzepatide TR15 product specification, vial format, pack size, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle lyophilised Tirzepatide research material according to the product label, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "TR15 is the 15mg Tirzepatide format. Customers comparing options can also review TR10 10mg for the smaller vial format.",
  },
  "bpc-157-5mg": {
    title: "BPC-157 5mg Research Peptide UK | Peptide Products",
    description:
      "BPC-157 5mg lyophilised research peptide vial for laboratory use only. Review pack size, current price, delivery, checkout guidance, and test report information.",
    intro:
      "BPC-157 5mg is listed as a lyophilised research peptide vial for laboratory and analytical research procurement. This product page summarises the 5mg vial format, current price, stock status, documentation route, delivery information, and research-use-only positioning.",
    documentation:
      "Review the BPC-157 5mg vial specification, product format, stock status, and available test-report information before placing a research order.",
    handling:
      "Store and handle lyophilised BPC-157 research material according to the product label, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "This 5mg BPC-157 listing is the smaller vial format. Customers comparing pack sizes can also review the BPC-157 10mg product page and the regenerative peptides category.",
  },
  "bpc-157-10mg": {
    title: "BPC-157 10mg Research Peptide UK | Peptide Products",
    description:
      "BPC-157 10mg lyophilised research peptide vial for laboratory use only. Review pack size, checkout guidance, delivery, and quality information.",
    comparison:
      "This 10mg BPC-157 listing is the larger vial format. Customers comparing pack sizes can also review the BPC-157 5mg product page.",
  },
  "ghk-cu-50mg": {
    title: "GHK-CU 50mg Research Peptide UK | Peptide Products",
    description:
      "GHK-CU 50mg lyophilised research peptide vial for laboratory use only. Review pack details, price, delivery, and quality information.",
    comparison:
      "This 50mg GHK-CU listing is the smaller copper peptide vial format. Customers comparing pack sizes can also review GHK-CU 100mg.",
  },
  "ghk-cu-100mg": {
    title: "GHK-CU 100mg Research Peptide UK | Peptide Products",
    description:
      "GHK-CU 100mg lyophilised research peptide vial for laboratory use only. Review pack details, price, delivery, and quality information.",
    comparison:
      "This 100mg GHK-CU listing is the larger copper peptide vial format. Customers comparing pack sizes can also review GHK-CU 50mg.",
  },
  "nad-500mg": {
    title: "NAD 500mg Research Compound UK | Peptide Products",
    description:
      "NAD 500mg research compound vial for laboratory use only. Review pack details, checkout guidance, delivery, and quality information.",
    comparison:
      "This 500mg NAD listing is the smaller vial format. Customers comparing pack sizes can also review NAD 1000mg.",
  },
  "nad-1000mg": {
    title: "NAD 1000mg Research Compound UK | Peptide Products",
    description:
      "NAD 1000mg research compound vial for laboratory use only. Review pack format, current price, stock status, UK delivery, checkout guidance, and quality information.",
    intro:
      "NAD 1000mg is the larger NAD research compound format listed by Peptide Products. This page helps customers compare the 1000mg vial with the 500mg option and confirm pack format, stock status, price, delivery, documentation, and research-use-only information before checkout.",
    documentation:
      "Review the NAD 1000mg product specification, vial format, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle NAD research material according to the product label, product page information, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "This 1000mg NAD listing is the larger vial format. Customers comparing pack sizes can also review NAD 500mg for the smaller format and the metabolic research compounds category for related catalogue items.",
  },
  "glutathione-500mg": {
    title: "Glutathione 500mg Research Compound UK | Peptide Products",
    description:
      "Glutathione 500mg research compound vial for laboratory use only. Review pack format, current price, stock status, UK delivery, checkout guidance, and quality information.",
    intro:
      "Glutathione 500mg is the entry Glutathione research compound format in the Peptide Products catalogue. This page helps customers compare the 500mg vial with larger formats and check pack details, ordering route, delivery information, documentation, and research-use-only notices in one place.",
    documentation:
      "Review the Glutathione 500mg product specification, antioxidant research category context, stock status, and available quality information before placing a research order.",
    handling:
      "Store and handle Glutathione research material according to the product label, product page information, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "This 500mg Glutathione listing is the smallest format in the current catalogue. Larger 1000mg and 1500mg formats are also available to compare for customers reviewing antioxidant research compound options.",
  },
  "glutathione-1000mg": {
    title: "Glutathione 1000mg Research Compound UK | Peptide Products",
    description:
      "Glutathione 1000mg research compound vial for laboratory use only. Review pack details, checkout guidance, delivery, and quality information.",
    comparison:
      "This 1000mg Glutathione listing sits between the 500mg and 1500mg formats in the current catalogue.",
  },
  "glutathione-1500mg": {
    title: "Glutathione 1500mg Research Compound UK | Peptide Products",
    description:
      "Glutathione 1500mg research compound vial for laboratory use only. Review pack details, checkout guidance, delivery, and quality information.",
    comparison:
      "This 1500mg Glutathione listing is the largest format in the current catalogue. Customers can also compare the 500mg and 1000mg formats.",
  },
  "selank-sk10-10mg": {
    title: "Selank SK10 10mg Research Peptide UK | Peptide Products",
    description:
      "Selank SK10 10mg lyophilised research peptide vial for laboratory use only. Review pack details, checkout guidance, delivery, and test report information.",
    comparison:
      "This 10mg Selank SK10 listing is the larger Selank format. Customers comparing options can also review Selank SK5 5mg.",
  },
  "selank-sk5-5mg": {
    title: "Selank SK5 5mg Research Peptide UK | Peptide Products",
    description:
      "Selank SK5 5mg lyophilised research peptide vial for laboratory use only. Review pack format, current price, stock status, UK delivery, checkout guidance, and quality information.",
    intro:
      "Selank SK5 5mg is the smaller Selank research peptide vial format in the current catalogue. This page helps customers compare SK5 with SK10, check live product details, and review delivery, documentation, ordering, and research-use-only information before checkout.",
    documentation:
      "Review the Selank SK5 5mg vial specification, pack format, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle lyophilised Selank research material according to the product label, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "This 5mg Selank SK5 listing is the smaller Selank format. Customers comparing options can also review Selank SK10 10mg and related catalogue pages.",
  },
  "ml-10-10mg": {
    title: "ML-10 10mg Research Compound UK | Peptide Products",
    description:
      "ML-10 10mg research compound vial for laboratory use only. Review pack format, current price, stock status, UK delivery, checkout guidance, and quality information.",
    intro:
      "ML-10 10mg is listed for laboratory, analytical, and scientific research procurement. This product page summarises the 10mg vial format, product presentation, stock status, ordering route, delivery guidance, available support information, and research-use-only notice in one place.",
    documentation:
      "Review the ML-10 10mg product specification, pack format, stock status, and any available quality information before placing a research order.",
    handling:
      "Store and handle ML-10 research material according to the product label, product page information, laboratory procedures, and normal chain-of-custody records.",
    comparison:
      "Review ML-10 10mg alongside other metabolic research compounds, including Retatrutide and Tirzepatide product pathways, depending on the catalogue area being compared.",
  },
  "melanotan-mt2-10mg": {
    title: "Melanotan MT-2 10mg Research Peptide UK | Peptide Products",
    description:
      "Melanotan MT-2 10mg lyophilised research peptide vial for laboratory use only. Review pack details, checkout guidance, delivery, and ordering guidance.",
  },
};

const categoryContent: Record<
  Product["category"],
  Pick<ProductSeoContent, "categoryPage" | "handling" | "documentation">
> = {
  Antioxidants: {
    categoryPage: { href: "/antioxidant-peptides", label: "Antioxidant peptides" },
    documentation:
      "Antioxidant research compound listings should be reviewed alongside the product specification, pack size, stock status, and any available quality files.",
    handling:
      "Store and handle research compounds according to the label, product page information, and normal laboratory chain-of-custody procedures.",
  },
  Firming: {
    categoryPage: { href: "/firming-peptides", label: "Firming peptides" },
    documentation:
      "Firming research product listings should be reviewed alongside the product specification, pack size, stock status, and any available quality files.",
    handling:
      "Store and handle research products according to the label, product page information, and normal laboratory chain-of-custody procedures.",
  },
  Regenerative: {
    categoryPage: { href: "/regenerative-peptides", label: "Regenerative peptides" },
    documentation:
      "Regenerative peptide listings should be reviewed alongside the pack size, vial format, stock status, and any available product documentation before ordering.",
    handling:
      "Lyophilised research peptide vials should be stored, logged, and handled using appropriate laboratory procedures and chain-of-custody records.",
  },
  Metabolic: {
    categoryPage: { href: "/metabolic-research-compounds", label: "Metabolic research compounds" },
    documentation:
      "Metabolic research product listings should be checked against the product specification, pack size, stock status, and any available quality documentation before ordering.",
    handling:
      "Research products should be stored and handled according to the label, product page information, and normal laboratory chain-of-custody procedures.",
  },
};

export function getProductSeoContent(product: Product): ProductSeoContent {
  const specific = productSpecific[product.id] ?? {};
  const category = categoryContent[product.category];
  const title =
    specific.title ?? `${product.name} Research Product UK | Peptide Products`;
  const description =
    specific.description ??
    `${product.name} ${product.pack} for laboratory research use only. Review price, stock status, delivery, checkout, and quality information at Peptide Products.`;

  return {
    title,
    description,
    intro:
      specific.intro ??
      `${product.name} is listed for laboratory, analytical, and scientific research procurement. This product page summarises the pack format, current stock status, ordering options, delivery guidance, and available quality information in one place.`,
    documentation: specific.documentation ?? category.documentation,
    handling: specific.handling ?? category.handling,
    comparison:
      specific.comparison ??
      `Review this ${product.name} listing alongside related ${product.category.toLowerCase()} products and category pages before placing an order.`,
    categoryPage: specific.categoryPage ?? category.categoryPage,
  };
}
