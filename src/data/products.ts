export type Category =
  | "Antioxidants"
  | "Hydration"
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
  coa?: string;
  sds?: string;
};

export const categories: { key: Category; blurb: string }[] = [
  {
    key: "Antioxidants",
    blurb: "Antioxidant compounds for laboratory research.",
  },
  {
    key: "Hydration",
    blurb: "Hydration-focused support liquids and carrier systems for laboratory work.",
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
    name: "Retatrutide",
    subtitle: "Retatrutide 40mg research peptide pen",
    category: "Metabolic",
    priceGBP: 150,
    pack: "1 pre-filled pen x 40mg total",
    image: "/products/retatrutide-40mg-uk.jpg",
    gallery: [
      "/products/retatrutide-40mg-uk.jpg",
      "/products/retatrutide-40mg-pen.jpg",
    ],
    quickFacts: ["40mg total", "Single pen format", "Research supply"],
    highlights: [
      "Single 40mg pre-filled research pen",
      "Laboratory research product positioning",
      "Controlled scientific study supply",
    ],
    actives: ["Retatrutide 40mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled scientific study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "melanotan-mt2-10mg",
    name: "Melanotan MT-2 10mg",
    subtitle: "MT-2 research peptide vial",
    category: "Metabolic",
    priceGBP: 45,
    pack: "1 vial x 10mg lyophilised powder",
    image: "/products/melanotan-mt2-10mg.webp",
    gallery: ["/products/melanotan-mt2-10mg.webp"],
    quickFacts: ["10mg vial", "Lyophilised powder", "Research supply"],
    highlights: [
      "MT-2 research peptide",
      "Compact 10mg vial format",
      "Sterile sealed laboratory vial",
    ],
    actives: ["Melanotan II (MT-2) 10mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled peptide study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "selank-sk10-10mg",
    name: "Selank SK10 10mg",
    subtitle: "Selank research peptide vial",
    category: "Metabolic",
    priceGBP: 55,
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
  },

  {
    id: "selank-sk5-5mg",
    name: "Selank SK5 5mg",
    subtitle: "Selank research peptide vial",
    category: "Metabolic",
    priceGBP: 39,
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
  },

  {
    id: "bpc-157-5mg",
    name: "BPC-157 5mg",
    subtitle: "BPC-157 research peptide vial",
    category: "Regenerative",
    priceGBP: 42,
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
  },

  {
    id: "bpc-157-10mg",
    name: "BPC-157 10mg",
    subtitle: "BPC-157 research peptide vial",
    category: "Regenerative",
    priceGBP: 69,
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
    id: "tirzepatide-tr30-30mg",
    name: "Tirzepatide TR30 30mg",
    subtitle: "Tirzepatide research peptide vial",
    category: "Metabolic",
    priceGBP: 139,
    pack: "1 vial x 30mg lyophilised powder",
    image: "/products/tirzepatide-tr30-30mg.webp",
    gallery: ["/products/tirzepatide-tr30-30mg.webp"],
    quickFacts: ["30mg vial", "TR30 format", "Research supply"],
    highlights: [
      "Tirzepatide TR30 research compound",
      "Single 30mg laboratory vial",
      "Premium peptide supply format",
    ],
    actives: ["Tirzepatide 30mg"],
    intendedUse: [
      "Laboratory research",
      "Analytical review",
      "Controlled metabolic pathway study",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "tirzepatide-tr40-40mg",
    name: "Tirzepatide TR40 40mg",
    subtitle: "Tirzepatide research peptide vial",
    category: "Metabolic",
    priceGBP: 165,
    pack: "1 vial x 40mg lyophilised powder",
    image: "/products/tirzepatide-tr40-40mg.webp",
    gallery: ["/products/tirzepatide-tr40-40mg.webp"],
    quickFacts: ["40mg vial", "TR40 format", "Research supply"],
    highlights: [
      "Tirzepatide TR40 research compound",
      "Single 40mg laboratory vial",
      "Premium peptide supply format",
    ],
    actives: ["Tirzepatide 40mg"],
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
    priceGBP: 59,
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
  },

  {
    id: "ghk-cu-100mg",
    name: "GHK-CU 100mg",
    subtitle: "Copper peptide (tripeptide-1)",
    category: "Regenerative",
    priceGBP: 89,
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
  },

  {
    id: "ml-10-10mg",
    name: "ML-10 10mg",
    subtitle: "ML-10 research peptide vial",
    category: "Metabolic",
    priceGBP: 49,
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
    priceGBP: 64,
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
  },

  {
    id: "nad-1000mg",
    name: "NAD 1000mg",
    subtitle: "Nicotinamide adenine dinucleotide research vial",
    category: "Metabolic",
    priceGBP: 109,
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
  },

  {
    id: "glutathione-1000mg",
    name: "Glutathione 1000mg",
    subtitle: "Glutathione research vial",
    category: "Antioxidants",
    priceGBP: 59,
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
    priceGBP: 74,
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

  {
    id: "bac-water-3ml",
    name: "BAC Water 3ml",
    subtitle: "Bacteriostatic water research support vial",
    category: "Hydration",
    priceGBP: 9,
    pack: "1 vial x 3ml sterile liquid",
    image: "/products/bac-water-3ml.webp",
    gallery: ["/products/bac-water-3ml.webp"],
    quickFacts: ["3ml vial", "Sterile liquid", "Support supply"],
    highlights: [
      "Bacteriostatic water support vial",
      "Compact 3ml format",
      "Sterile laboratory presentation",
    ],
    actives: ["Bacteriostatic Water 3ml"],
    intendedUse: [
      "Laboratory preparation",
      "Controlled reconstitution support",
      "Analytical workflows",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "bac-water-10ml",
    name: "BAC Water 10ml",
    subtitle: "Bacteriostatic water research support vial",
    category: "Hydration",
    priceGBP: 14,
    pack: "1 vial x 10ml sterile liquid",
    image: "/products/bac-water-10ml.webp",
    gallery: ["/products/bac-water-10ml.webp"],
    quickFacts: ["10ml vial", "Sterile liquid", "Support supply"],
    highlights: [
      "Bacteriostatic water support vial",
      "10ml laboratory format",
      "Sterile sealed presentation",
    ],
    actives: ["Bacteriostatic Water 10ml"],
    intendedUse: [
      "Laboratory preparation",
      "Controlled reconstitution support",
      "Analytical workflows",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },
];