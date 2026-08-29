export type Category =
  | "Antioxidants"
  | "Firming"
  | "Regenerative"
  | "Metabolic";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  category: Category;
  priceGBP: number;
  pack: string;
  image: string;
  gallery?: string[];
  ogAccent?: string;
  quickFacts?: string[];
  highlights: string[];
  actives: string[];
  intendedUse: string[];
  notes: string;
  stockStatus: "in_stock" | "sold_out";
  stripePriceId?: string;
  coa?: string;
  coaPreview?: string;
  sds?: string;
  brandName?: string;
  availabilityLabel?: string;
  badge?: string;
};

export const categories: { key: Category; blurb: string }[] = [
  {
    key: "Antioxidants",
    blurb: "Antioxidant compounds for laboratory research.",
  },
  
  {
    key: "Firming",
    blurb: "Firming-focused peptide research blends.",
  },
  {
    key: "Regenerative",
    blurb: "Repair and regeneration research compounds.",
  },
  {
    key: "Metabolic",
    blurb: "Metabolic and investigational peptide compounds for laboratory research.",
  },
];

export const products: Product[] = [

  {
    id: "retatrutide",
    name: "Retatrutide 40mg Pen",
    brandName: "Alluvi",
    availabilityLabel: "In stock",
    badge: "Flagship",
    subtitle: "Retatrutide 40mg research peptide pen · Alluvi presentation",
    category: "Metabolic",
    priceGBP: 125,
    stripePriceId: "price_1THGVLEfhppVt6QjRCccB32d",
    pack: "1 pre-filled pen x 40mg total",
    image: "/products/alluvi-retatrutide-40mg-hero.webp",
    gallery: [
      "/products/alluvi-retatrutide-40mg-hero.webp",
      "/products/alluvi-retatrutide-40mg-box-pen.webp",
      "/products/alluvi-retatrutide-40mg-closeup.webp",
    ],
    quickFacts: [
      "Retatrutide 40mg",
      "Alluvi presentation",
      "In stock",
      "Research use only",
    ],
    highlights: [
      "Retatrutide 40mg research peptide pen",
      "Single pre-filled 40mg research format",
      "Supplied in the Alluvi product presentation",
      "Available for UK laboratory research procurement",
    ],
    actives: ["Retatrutide 40mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/alluvi-retatrutide-40mg.pdf",
    coaPreview: "/docs/previews/alluvi-retatrutide-40mg.jpg",
  },

  {
    id: "synexa-retatrutide-40mg",
    name: "Synexa Retatrutide 40mg RapidPen®",
    brandName: "Synexa",
    availabilityLabel: "Sold out",
    badge: "Sold out",
    subtitle: "Retatrutide 40mg research peptide pen · Synexa RapidPen® presentation",
    category: "Metabolic",
    priceGBP: 125,
    pack: "1 pre-filled pen x 40mg total",
    image: "/products/synexa-retatrutide-40mg-hero.webp",
    gallery: [
      "/products/synexa-retatrutide-40mg-hero.webp",
      "/products/synexa-retatrutide-40mg-gallery-front-side-back.webp",
      "/products/synexa-retatrutide-40mg-gallery-angle.webp",
      "/products/synexa-retatrutide-40mg-gallery-back.webp",
    ],
    quickFacts: [
      "Retatrutide 40mg",
      "Synexa RapidPen® presentation",
      "Sold out",
      "Research use only",
    ],
    highlights: [
      "Synexa-branded Retatrutide 40mg research pen",
      "Single pre-filled RapidPen® research format",
      "Currently sold out",
      "Retained as a previous Retatrutide presentation",
    ],
    actives: ["Retatrutide 40mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
    ],
    notes: "Currently sold out. For research use only. Not for human or veterinary use.",
    stockStatus: "sold_out",
  },

  {
    id: "alluvi-glow-ghk-cu-pen-set",
    name: "Alluvi Glow GHK-CU Pen Set",
    subtitle: "Glow GHK-CU regenerative research pen set",
    category: "Regenerative",
    priceGBP: 130,
    pack: "2 pre-filled research pens x 10mg / 10mg / 50mg blend",
    image: "/products/alluvi-glow-ghk-cu-pen-set.webp",
    gallery: ["/products/alluvi-glow-ghk-cu-pen-set.webp"],
    brandName: "Alluvi",
    availabilityLabel: "In stock",
    badge: "New",
    quickFacts: [
      "2 pen set",
      "10mg / 10mg / 50mg blend",
      "In stock",
      "Research supply",
    ],
    highlights: [
      "Alluvi Glow GHK-CU regenerative research pen set",
      "Two pre-filled research pens supplied in the original presentation",
      "Available from UK stock",
      "Laboratory research product positioning",
    ],
    actives: [
      "BPC-157 10mg",
      "GHRP-6 10mg",
      "GHK-CU 50mg",
    ],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "alluvi-bpc157-tb500-40mg-pen",
    name: "Alluvi BPC157 & TB500 40mg Pen",
    subtitle: "BPC157 and TB500 regenerative research peptide pen",
    category: "Regenerative",
    priceGBP: 130,
    pack: "1 pre-filled research pen x 40mg total",
    image: "/products/alluvi-bpc157-tb500-40mg-pen.webp",
    gallery: ["/products/alluvi-bpc157-tb500-40mg-pen.webp"],
    brandName: "Alluvi",
    availabilityLabel: "in stock",
    badge: "New",
    quickFacts: [
      "40mg total",
      "Single pen format",
      "In stock",
      "Research supply",
    ],
    highlights: [
      "Alluvi BPC157 and TB500 regenerative research pen",
      "Single 40mg pre-filled research format",
      "Available from UK stock",
      "Laboratory research product positioning",
    ],
    actives: [
      "BPC-157",
      "TB-500",
      "40mg total blend",
    ],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "reta-research-compound-10mg-vial",
    name: "Reta Research Compound 10mg Vial",
    subtitle: "Reta research compound vial",
    category: "Metabolic",
    priceGBP: 89,
    pack: "1 vial x 10mg lyophilised research material",
    image: "/products/reta-research-compound-10mg-vial.webp",
    gallery: ["/products/reta-research-compound-10mg-vial.webp"],
    quickFacts: [
      "10mg vial",
      "Lyophilised research material",
      "Laboratory research supply",
      "UK dispatch available",
    ],
    highlights: [
      "Reta research compound 10mg vial format",
      "Laboratory research-use-only supply",
      "Prepared for analytical review and controlled scientific study",
      "Research-use-only vial presentation with clear product labelling",
    ],
    actives: ["Retatrutide 10mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
      "Research-use-only procurement",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not a medicine, treatment, supplement, cosmetic product, food product, or product for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "reta-research-compound-20mg-vial",
    name: "Reta Research Compound 20mg Vial",
    subtitle: "Reta research compound vial",
    category: "Metabolic",
    priceGBP: 149,
    pack: "1 vial x 20mg lyophilised research material",
    image: "/products/reta-research-compound-20mg-vial.webp",
    gallery: ["/products/reta-research-compound-20mg-vial.webp"],
    quickFacts: [
      "20mg vial",
      "Lyophilised research material",
      "Laboratory research supply",
      "UK dispatch available",
    ],
    highlights: [
      "Reta research compound 20mg vial format",
      "Research-use-only laboratory supply",
      "Prepared for analytical review and controlled scientific study",
      "Clear vial presentation with research-use-only positioning",
    ],
    actives: ["Retatrutide 20mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
      "Research-use-only procurement",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not a medicine, treatment, supplement, cosmetic product, food product, or product for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "reta-research-compound-40mg-vial",
    name: "Reta Research Compound 40mg Vial",
    subtitle: "Reta research compound vial",
    category: "Metabolic",
    priceGBP: 249,
    pack: "1 vial x 40mg lyophilised research material",
    image: "/products/reta-research-compound-40mg-vial.webp",
    gallery: ["/products/reta-research-compound-40mg-vial.webp"],
    quickFacts: [
      "40mg vial",
      "Lyophilised research material",
      "Laboratory research supply",
      "UK dispatch available",
    ],
    highlights: [
      "Reta research compound 40mg vial format",
      "Research-use-only laboratory supply",
      "Prepared for analytical review and controlled scientific study",
      "Clear vial presentation with research-use-only positioning",
    ],
    actives: ["Retatrutide 40mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
      "Research-use-only procurement",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not a medicine, treatment, supplement, cosmetic product, food product, or product for human or veterinary use.",
    stockStatus: "in_stock",
  },


  {
    id: "retatrutide-research-compound-10mg-vial",
    name: "Retatrutide Research Compound 10mg Vial",
    subtitle: "Retatrutide research compound vial",
    category: "Metabolic",
    priceGBP: 89,
    pack: "1 vial x 10mg lyophilised research material",
    image: "/products/retatrutide-research-compound-10mg-vial.webp",
    gallery: ["/products/retatrutide-research-compound-10mg-vial.webp"],
    quickFacts: [
      "10mg vial",
      "Lyophilised research material",
      "Laboratory research supply",
      "UK dispatch available",
    ],
    highlights: [
      "Retatrutide research compound 10mg vial format",
      "Laboratory research-use-only supply",
      "Prepared for analytical review and controlled scientific study",
      "Full-name Retatrutide vial presentation with clear product labelling",
    ],
    actives: ["Retatrutide 10mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
      "Research-use-only procurement",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not a medicine, treatment, supplement, cosmetic product, food product, or product for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "retatrutide-research-compound-20mg-vial",
    name: "Retatrutide Research Compound 20mg Vial",
    subtitle: "Retatrutide research compound vial",
    category: "Metabolic",
    priceGBP: 149,
    pack: "1 vial x 20mg lyophilised research material",
    image: "/products/retatrutide-research-compound-20mg-vial.webp",
    gallery: ["/products/retatrutide-research-compound-20mg-vial.webp"],
    quickFacts: [
      "20mg vial",
      "Lyophilised research material",
      "Laboratory research supply",
      "UK dispatch available",
    ],
    highlights: [
      "Retatrutide research compound 20mg vial format",
      "Research-use-only laboratory supply",
      "Prepared for analytical review and controlled scientific study",
      "Full-name Retatrutide vial presentation with research-use-only positioning",
    ],
    actives: ["Retatrutide 20mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
      "Research-use-only procurement",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not a medicine, treatment, supplement, cosmetic product, food product, or product for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "retatrutide-research-compound-40mg-vial",
    name: "Retatrutide Research Compound 40mg Vial",
    subtitle: "Retatrutide research compound vial",
    category: "Metabolic",
    priceGBP: 249,
    pack: "1 vial x 40mg lyophilised research material",
    image: "/products/retatrutide-research-compound-40mg-vial.webp",
    gallery: ["/products/retatrutide-research-compound-40mg-vial.webp"],
    quickFacts: [
      "40mg vial",
      "Lyophilised research material",
      "Laboratory research supply",
      "UK dispatch available",
    ],
    highlights: [
      "Retatrutide research compound 40mg vial format",
      "Research-use-only laboratory supply",
      "Prepared for analytical review and controlled scientific study",
      "Full-name Retatrutide vial presentation with research-use-only positioning",
    ],
    actives: ["Retatrutide 40mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
      "Research-use-only procurement",
    ],
    notes:
      "Supplied strictly for laboratory research use only. Not a medicine, treatment, supplement, cosmetic product, food product, or product for human or veterinary use.",
    stockStatus: "in_stock",
  },

    {
    id: "melanotan-mt2-10mg",
    name: "Melanotan MT-2 10mg",
    subtitle: "Melanotan MT-2 research peptide vial",
    category: "Metabolic",
    priceGBP: 45,
    stripePriceId: "price_1THGklEfhppVt6QjAuk8duEP",
    pack: "1 vial x 10mg lyophilised powder",
    image: "/products/melanotan-mt2-10mg.webp",
    gallery: ["/products/melanotan-mt2-10mg.webp"],
    quickFacts: [
      "10mg vial",
      "Lyophilised powder",
      "UK-based supply",
      "Research supply",
    ],
    highlights: [
      "Melanotan MT-2 10mg research peptide vial",
      "Lyophilised powder format for laboratory research settings",
      "Sterile sealed vial with clear ordering and checkout information",
      "UK dispatch with tracked delivery available after processing",
    ],
    actives: ["Melanotan II (MT-2) 10mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled peptide study",
      "Research-use-only supply",
    ],
    notes:
      "Melanotan MT-2 10mg is supplied as a lyophilised research peptide vial for laboratory, analytical, and scientific research use only. UK delivery, secure checkout, and alternative payment options are available during ordering.",
    stockStatus: "in_stock",
  },

  {
    id: "selank-sk10-10mg",
    name: "Selank SK10 10mg",
    subtitle: "Selank research peptide vial",
    category: "Metabolic",
    priceGBP: 55,
    stripePriceId: "price_1THGigEfhppVt6QjKxd0VvSQ",
    pack: "1 vial x 10mg lyophilised powder",
    image: "/products/selank-sk10-10mg.webp",
    gallery: ["/products/selank-sk10-10mg.webp"],
    quickFacts: ["10mg vial", "Research peptide", "Lyophilised powder"],
    highlights: [
      "Selank SK10 research compound",
      "Single 10mg sterile vial",
      "Laboratory supply format",
    ],
    actives: ["Selank SK10 10mg"],
    intendedUse: [
      "Laboratory peptide research",
      "Analytical characterization",
      "Controlled scientific study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/selank-10mg.pdf",
  },

  {
    id: "selank-sk5-5mg",
    name: "Selank SK5 5mg",
    subtitle: "Selank research peptide vial",
    category: "Metabolic",
    priceGBP: 39,
    stripePriceId: "price_1THGjvEfhppVt6QjA3RgAOF0",
    pack: "1 vial x 5mg lyophilised powder",
    image: "/products/selank-sk5-5mg.webp",
    gallery: ["/products/selank-sk5-5mg.webp"],
    quickFacts: ["5mg vial", "Research peptide", "Compact format"],
    highlights: [
      "Selank SK5 research compound",
      "Single 5mg vial",
      "Controlled laboratory supply",
    ],
    actives: ["Selank SK5 5mg"],
    intendedUse: [
      "Pilot research",
      "Analytical testing",
      "Controlled study environments",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/selank-5mg.pdf",
  },

  {
    id: "bpc-157-5mg",
    name: "BPC-157 5mg",
    subtitle: "BPC-157 research peptide vial",
    category: "Regenerative",
    priceGBP: 33,
    stripePriceId: "price_1THGYTEfhppVt6QjY5Yup9Tn",
    pack: "1 vial x 5mg lyophilised powder",
    image: "/products/bpc-157-5mg.webp",
    gallery: ["/products/bpc-157-5mg.webp"],
    quickFacts: ["5mg vial", "Lyophilised powder", "Research peptide"],
    highlights: [
      "BPC-157 research compound",
      "Single 5mg vial format",
      "Sterile sealed laboratory presentation",
    ],
    actives: ["BPC-157 5mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Peptide characterization",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/bpc-157-5mg.pdf",
  },

  {
    id: "bpc-157-10mg",
    name: "BPC-157 10mg",
    subtitle: "BPC-157 research peptide vial",
    category: "Regenerative",
    priceGBP: 55,
    stripePriceId: "price_1THGZVEfhppVt6QjZSG5sVvj",
    pack: "1 vial x 10mg lyophilised powder",
    image: "/products/bpc-157-10mg.webp",
    gallery: ["/products/bpc-157-10mg.webp"],
    quickFacts: ["10mg vial", "Research peptide", "Higher strength"],
    highlights: [
      "BPC-157 research compound",
      "Single 10mg vial format",
      "Laboratory peptide supply",
    ],
    actives: ["BPC-157 10mg"],
    intendedUse: [
      "Laboratory peptide research",
      "Analytical testing",
      "Controlled scientific study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "tirzepatide-tr10-10mg",
    name: "Tirzepatide TR10 10mg",
    subtitle: "Tirzepatide research peptide vial",
    category: "Metabolic",
    priceGBP: 60,
    stripePriceId: "price_1THGXcEfhppVt6QjBgvJYuyF",
    pack: "1 vial x 10mg lyophilised powder",
    image: "/products/tirzepatide-tr10-10mg.webp",
    gallery: ["/products/tirzepatide-tr10-10mg.webp"],
    quickFacts: ["10mg vial", "TR10 format", "Research supply"],
    highlights: [
      "Tirzepatide TR10 research compound",
      "Single 10mg laboratory vial",
      "Premium peptide supply format",
    ],
    actives: ["Tirzepatide 10mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled metabolic pathway study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "tirzepatide-tr15-15mg",
    name: "Tirzepatide TR15 15mg",
    subtitle: "Tirzepatide research peptide vial",
    category: "Metabolic",
    priceGBP: 75,
    stripePriceId: "price_1THGWZEfhppVt6QjpHglEx4A",
    pack: "1 vial x 15mg lyophilised powder",
    image: "/products/tirzepatide-tr15-15mg.webp",
    gallery: ["/products/tirzepatide-tr15-15mg.webp"],
    quickFacts: ["15mg vial", "TR15 format", "Research supply"],
    highlights: [
      "Tirzepatide TR15 research compound",
      "Single 15mg laboratory vial",
      "Premium peptide supply format",
    ],
    actives: ["Tirzepatide 15mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled metabolic pathway study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "ghk-cu-50mg",
    name: "GHK-CU 50mg",
    subtitle: "Copper peptide (tripeptide-1)",
    category: "Regenerative",
    priceGBP: 49,
    stripePriceId: "price_1THGaREfhppVt6QjsUYQtLE5",
    pack: "1 vial x 50mg lyophilised powder",
    image: "/products/ghk-cu-50mg.webp",
    gallery: ["/products/ghk-cu-50mg.webp"],
    quickFacts: ["50mg vial", "Copper peptide", "Lyophilised powder"],
    highlights: [
      "GHK-CU copper peptide compound",
      "Single 50mg vial format",
      "Sterile research presentation",
    ],
    actives: ["GHK-CU 50mg"],
    intendedUse: [
      "Laboratory peptide research",
      "Analytical characterization",
      "Controlled regeneration-related study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/ghk-cu-50mg.pdf",
  },

  {
    id: "ghk-cu-100mg",
    name: "GHK-CU 100mg",
    subtitle: "Copper peptide (tripeptide-1)",
    category: "Regenerative",
    priceGBP: 79,
    stripePriceId: "price_1THGbOEfhppVt6Qjc4BP3xhe",
    pack: "1 vial x 100mg lyophilised powder",
    image: "/products/ghk-cu-100mg.webp",
    gallery: ["/products/ghk-cu-100mg.webp"],
    quickFacts: ["100mg vial", "Copper peptide", "Research supply"],
    highlights: [
      "GHK-CU copper peptide compound",
      "Single 100mg vial format",
      "Premium laboratory supply",
    ],
    actives: ["GHK-CU 100mg"],
    intendedUse: [
      "Laboratory peptide research",
      "Analytical review",
      "Controlled scientific study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/ghk-cu-100mg.pdf",
  },

  {
    id: "ml-10-10mg",
    name: "ML-10 10mg",
    subtitle: "ML-10 research peptide vial",
    category: "Metabolic",
    priceGBP: 49,
    stripePriceId: "price_1THGm0EfhppVt6QjpBIEADFM",
    pack: "1 vial x 10mg lyophilised powder",
    image: "/products/ml-10-10mg.webp",
    gallery: ["/products/ml-10-10mg.webp"],
    quickFacts: ["10mg vial", "Lyophilised powder", "Research supply"],
    highlights: [
      "ML-10 research compound",
      "Single 10mg vial format",
      "Laboratory peptide supply",
    ],
    actives: ["ML-10 10mg"],
    intendedUse: [
      "Laboratory peptide research",
      "Analytical review",
      "Controlled scientific study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "nad-500mg",
    name: "NAD 500mg",
    subtitle: "Nicotinamide adenine dinucleotide research vial",
    category: "Metabolic",
    priceGBP: 54,
    stripePriceId: "price_1THGcpEfhppVt6Qj9vkFXXkL",
    pack: "1 vial x 500mg lyophilised powder",
    image: "/products/nad-500mg.webp",
    gallery: ["/products/nad-500mg.webp"],
    quickFacts: ["500mg vial", "Lyophilised powder", "Research supply"],
    highlights: [
      "NAD research compound",
      "Single 500mg vial format",
      "Laboratory-grade presentation",
    ],
    actives: ["NAD 500mg"],
    intendedUse: [
      "Laboratory metabolic research",
      "Analytical review",
      "Controlled pathway study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/nad-500mg.pdf",
  },

  {
    id: "nad-1000mg",
    name: "NAD 1000mg",
    subtitle: "Nicotinamide adenine dinucleotide research vial",
    category: "Metabolic",
    priceGBP: 109,
    stripePriceId: "price_1THGc7EfhppVt6QjaY7ysfmH",
    pack: "1 vial x 1000mg lyophilised powder",
    image: "/products/nad-1000mg.webp",
    gallery: ["/products/nad-1000mg.webp"],
    quickFacts: ["1000mg vial", "Higher strength", "Research supply"],
    highlights: [
      "NAD research compound",
      "Single 1000mg vial format",
      "Premium laboratory presentation",
    ],
    actives: ["NAD 1000mg"],
    intendedUse: [
      "Laboratory metabolic research",
      "Analytical characterization",
      "Controlled scientific study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "glutathione-500mg",
    name: "Glutathione 500mg",
    subtitle: "Glutathione research vial",
    category: "Antioxidants",
    priceGBP: 39,
    stripePriceId: "price_1THGeFEfhppVt6Qj6XKRjL9H",
    pack: "1 vial x 500mg powder",
    image: "/products/glutathione-500mg.webp",
    gallery: ["/products/glutathione-500mg.webp"],
    quickFacts: ["500mg vial", "Antioxidant compound", "Research supply"],
    highlights: [
      "Glutathione antioxidant compound",
      "Single 500mg vial format",
      "Laboratory antioxidant research presentation",
    ],
    actives: ["Glutathione 500mg"],
    intendedUse: [
      "Laboratory antioxidant research",
      "Analytical review",
      "Controlled compound study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
    coa: "/docs/coa/glutathione-500mg.pdf",
  },

  {
    id: "glutathione-1000mg",
    name: "Glutathione 1000mg",
    subtitle: "Glutathione research vial",
    category: "Antioxidants",
    priceGBP: 59,
    stripePriceId: "price_1THGfKEfhppVt6QjhA8cnq8X",
    pack: "1 vial x 1000mg powder",
    image: "/products/glutathione-1000mg.webp",
    gallery: ["/products/glutathione-1000mg.webp"],
    quickFacts: ["1000mg vial", "Antioxidant compound", "Research supply"],
    highlights: [
      "Glutathione antioxidant compound",
      "Single 1000mg vial format",
      "Laboratory antioxidant research presentation",
    ],
    actives: ["Glutathione 1000mg"],
    intendedUse: [
      "Laboratory antioxidant research",
      "Analytical review",
      "Controlled compound study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "glutathione-1500mg",
    name: "Glutathione 1500mg",
    subtitle: "High-strength glutathione research vial",
    category: "Antioxidants",
    priceGBP: 64,
    stripePriceId: "price_1THGg1EfhppVt6QjN1GrTGyK",
    pack: "1 vial x 1500mg powder",
    image: "/products/glutathione-1500mg.webp",
    gallery: ["/products/glutathione-1500mg.webp"],
    quickFacts: ["1500mg vial", "Antioxidant compound", "Research supply"],
    highlights: [
      "High-strength glutathione compound",
      "Single 1500mg vial format",
      "Laboratory antioxidant research presentation",
    ],
    actives: ["Glutathione 1500mg"],
    intendedUse: [
      "Laboratory antioxidant research",
      "Analytical review",
      "Controlled compound study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  

  
];