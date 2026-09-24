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
  "alloya-glutathione-500mg-pen": {
    title: "Glutathione 500mg Pen UK | Alloya Health Care | Peptide Products",
    description: "Explore the Alloya Health Care Glutathione 500mg pen. View product specifications and glutathione information. In stock in the UK with secure online checkout.",
    intro: "Alloya Glutathione 500mg Pen is a pre-filled research presentation containing 500mg of glutathione. This UK product page is designed for customers and laboratories comparing glutathione research formats, with clear pack information, product imagery, current stock and secure online ordering.",
    documentation: "Product-specific quality documentation should be confirmed before supply. The listing does not repeat cosmetic skin-lightening claims from promotional packaging and does not present the product as an approved medicine.",
    handling: "Handle and store the product according to the manufacturer label and appropriate laboratory procedures. Injectable glutathione products require particular attention to ingredient quality, sterility and endotoxin control.",
    comparison: "Customers researching glutathione formats can compare this Alloya 500mg pen presentation with the existing 500mg, 1000mg and 1500mg glutathione catalogue listings.",
  },
  "alluvi-nad-1000mg-pen-set": {
    title: "NAD+ 1000mg Pen Set UK | Alluvi Healthcare | Peptide Products",
    description: "Explore the Alluvi NAD+ 1000mg pen set containing two 500mg pens. View NAD+ product information, pack details and current UK availability. In stock with secure online checkout.",
    intro: "Alluvi NAD+ 1000mg Pen Set contains two 500mg pre-filled research pens, providing 1000mg total NAD+ content according to the product packaging. The page gives UK researchers a dedicated product record for the pen format with current stock information and secure online ordering.",
    documentation: "Confirm batch and quality documentation before supply. This listing describes the pack and compound without adopting anti-ageing, brain-repair or therapeutic claims shown on promotional packaging.",
    handling: "Store and handle NAD+ research material according to the manufacturer label and appropriate laboratory procedures, with particular attention to sterile-product quality where applicable.",
    comparison: "This two-pen 1000mg total presentation can be compared with the existing NAD 500mg and NAD 1000mg vial-format listings in the catalogue.",
  },
  "alloya-mots-c-40mg-pen": {
    title: "MOTS-C 40mg Pen UK | Alloya Health Care | Peptide Products",
    description: "Explore the Alloya Health Care MOTS-C 40mg pen. View product specifications, format and research information. In stock in the UK with secure online checkout.",
    intro: "Alloya MOTS-C 40mg Pen is a pre-filled research presentation containing 40mg of MOTS-C. MOTS-C is a mitochondrial-derived peptide investigated in experimental research, and this page provides a dedicated UK product record without making treatment or human-use claims.",
    documentation: "Confirm product-specific batch and quality documentation before supply. The listing focuses on compound identity, presentation and research procurement information.",
    handling: "Store and handle MOTS-C research material according to the manufacturer label, appropriate laboratory procedures and normal chain-of-custody controls.",
    comparison: "Use this page to compare the Alloya 40mg pen format with other metabolic research compounds and peptide presentations listed by Peptide Products.",
  },
  "alloya-pt-141-10mg-pen": {
    title: "PT-141 10mg Pen UK | Alloya Health Care | Peptide Products",
    description: "Explore the Alloya Health Care PT-141 10mg pen. View product specifications and PT-141 information. In stock in the UK with secure online checkout.",
    intro: "Alloya PT-141 10mg Pen is a pre-filled research presentation containing 10mg of PT-141, the peptide also known as bremelanotide. The Alloya product listed here is presented as a research product and should not be confused with separately authorised prescription medicines containing bremelanotide.",
    documentation: "Confirm batch and quality documentation before supply. Product information is limited to the research presentation and does not make treatment, dosing or human-use claims.",
    handling: "Store and handle PT-141 research material according to the manufacturer label and appropriate laboratory procedures.",
    comparison: "This page provides a dedicated 10mg pen-format listing for researchers comparing PT-141 with other peptide research products in the catalogue.",
  },
  "alloya-mt2-10mg-pen": {
    title: "MT2 10mg Pen | Product Information | Peptide Products",
    description: "Factual product information concerning the Alloya Health Care MT2 10mg pen and its current availability status in the UK.",
    intro: "The packaging supplied to Peptide Products identifies this item as an Alloya Health Care MT2 10mg Pen. MT2 commonly refers to Melanotan II. This page is retained for factual product information only; the product is not offered for sale or enquiry through Peptide Products.",
    documentation: "Melanotan II pen products have a specific UK regulatory position. This listing is therefore informational and does not offer the product for purchase or product enquiry.",
    handling: "Store and handle MT2 research material according to the manufacturer label and appropriate laboratory procedures. This listing does not provide administration or dosing instructions.",
    comparison: "This page provides factual identification of the photographed Alloya MT2 10mg presentation and its current unavailable status.",
  },
  "alloya-tesamorelin-20mg-pen": {
    title: "Tesamorelin 20mg Pen UK | Alloya Health Care | Peptide Products",
    description: "Explore the Alloya Health Care Tesamorelin 20mg pen. View product specifications, format and research information. In stock in the UK with secure online checkout.",
    intro: "Alloya Tesamorelin 20mg Pen is a pre-filled research presentation containing 20mg of tesamorelin, a growth hormone-releasing factor analogue studied in clinical and laboratory research. This Alloya presentation is not represented as EGRIFTA or as an approved prescription medicine.",
    documentation: "Confirm batch and quality documentation before supply. Although tesamorelin is the active ingredient in an approved US prescription product, that approval does not establish approval of this Alloya 20mg pen presentation.",
    handling: "Store and handle tesamorelin research material according to the manufacturer label and appropriate laboratory procedures. This listing does not provide dosing or administration instructions.",
    comparison: "This page gives researchers a dedicated 20mg pen-format listing to compare with other metabolic and peptide research products in the catalogue.",
  },
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
    title: "Synexa Retatrutide 40mg RapidPen® UK | Peptide Products",
    description:
      "Synexa Retatrutide 40mg RapidPen® research presentation is back in stock in the UK. View product images, pack information, price, delivery guidance and secure checkout.",
    intro:
      "Synexa Retatrutide 40mg RapidPen® is an in-stock Retatrutide research presentation supplied in a single pre-filled pen format. This page provides a dedicated Synexa product record covering current price, stock status, imagery, delivery information and research-use-only positioning.",
    documentation:
      "Review the Synexa product gallery, pack format, stock status and research-use-only information before ordering. Product-specific test documentation should be confirmed where available.",
    comparison:
      "Researchers comparing Retatrutide 40mg pen presentations can review this Synexa RapidPen® alongside the flagship Alluvi Retatrutide 40mg listing.",
  },
  "synexa-glow-ghk-cu-70mg-pen": {
    title: "Synexa Glow GHK-CU 70mg Pen UK | BPC-157, TB-500 & GHK-CU",
    description:
      "Synexa Glow GHK-CU 70mg pre-filled research pen containing GHK-CU 50mg, BPC-157 10mg and TB-500 10mg. Original Synexa packaging. UK research supply.",
    intro:
      "Synexa Glow GHK-CU 70mg is a multi-compound research product containing GHK-CU 50mg, BPC-157 10mg and TB-500 10mg in a single pre-filled pen format. It is supplied in original Synexa branded packaging for laboratory, analytical and educational research procurement.",
    documentation:
      "Review the product packaging, compound composition, stock status and research-use-only notice before ordering. No independent test report is currently represented on this listing unless product-specific documentation is added separately.",
    handling:
      "Store and handle the Synexa Glow GHK-CU research product according to the manufacturer label and appropriate laboratory procedures. Peptide Products does not provide human dosing or administration instructions.",
    comparison:
      "This Synexa 70mg combination contains GHK-CU 50mg, BPC-157 10mg and TB-500 10mg and can be compared with other regenerative research compounds and pre-filled pen presentations in the catalogue.",
    categoryPage: { href: "/regenerative-peptides", label: "Regenerative peptides" },
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
    title: "Melanotan MT-2 10mg | Product Information | Peptide Products",
    description:
      "Factual product information for the Melanotan MT-2 10mg lyophilised vial. This item is not currently offered for sale or product enquiries through Peptide Products.",
    intro:
      "This page provides factual product information for the Melanotan MT-2 10mg vial. The item is not currently offered for sale, checkout or product enquiries through Peptide Products.",
    documentation:
      "Review the product presentation and labelled pack details on this information-only page. Ordering and delivery information does not apply to this item.",
    handling:
      "This information-only listing does not provide handling, ordering or delivery instructions for use of the product.",
    comparison:
      "This item is shown for factual product identification only and is not part of the currently purchasable catalogue.",
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
