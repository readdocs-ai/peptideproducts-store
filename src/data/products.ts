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
    blurb: "Brightening and antioxidant compounds for laboratory research.",
  },
  {
    key: "Hydration",
    blurb: "Hydration-focused carrier systems and support liquids for formulation work.",
  },
  {
    key: "Firming",
    blurb: "Elasticity and firmness-focused peptide research blends.",
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
    id: "meso-glutathione",
    name: "Meso Glutathione",
    subtitle: "Glutathione + Vitamin C research blend",
    category: "Antioxidants",
    priceGBP: 75,
    pack: "5 vials x 7ml",
    image: "/products/meso-glutathione-main.jpg",
    gallery: [
      "/products/meso-glutathione-main.jpg",
      "/products/meso-glutathione-alt.jpg",
      "/products/meso-glutathione-ingredients.jpg",
      "/products/meso-glutathione-benefits.jpg",
    ],
    quickFacts: ["Antioxidant-focused", "Vitamin C pairing", "5 vials per pack"],
    highlights: [
      "Antioxidant-focused research compound",
      "Often paired with Vitamin C studies",
      "Laboratory research supply",
    ],
    actives: ["Glutathione", "Ascorbic Acid (Vitamin C)"],
    stockStatus: "sold_out",
    intendedUse: [
      "In-vitro testing",
      "Analytical workflows",
      "Formulation research",
    ],
    notes: "For research use only. Not for human or veterinary use.",
  },

  {
    id: "skinbooster-hyaluronic-acid",
    name: "Skinbooster Hyaluronic Acid",
    subtitle: "Hydration carrier research blend",
    category: "Hydration",
    priceGBP: 75,
    pack: "5 vials x 7ml",
    image: "/products/skinbooster-hyaluronic-acid-main.jpg",
    gallery: [
      "/products/skinbooster-hyaluronic-acid-main.jpg",
      "/products/skinbooster-hyaluronic-alt.jpg",
      "/products/skinbooster-hyaluronic-benefits.jpg",
      "/products/skinbooster-hyaluronic-ingredients.jpg",
    ],
    quickFacts: ["Hydration-focused", "Carrier system", "Bench research"],
    highlights: [
      "Hydration-focused carrier blend",
      "Common in formulation studies",
      "Laboratory supply",
    ],
    actives: ["Hyaluronic Acid", "Niacinamide", "Glutathione"],
    stockStatus: "sold_out",
    intendedUse: [
      "Formulation testing",
      "Bench analysis",
      "Stability research",
    ],
    notes: "For research use only. Not for human or veterinary use.",
  },

  {
    id: "meso-lift-firming",
    name: "Meso Lift & Firming",
    subtitle: "Firming peptide research blend",
    category: "Firming",
    priceGBP: 75,
    pack: "5 vials x 7ml",
    image: "/products/meso-lift-firming-main.jpg",
    gallery: [
      "/products/meso-lift-firming-main.jpg",
      "/products/meso-lift-firming-alt.jpg",
      "/products/meso-lift-firming-ingredients.jpg",
      "/products/meso-lift-firming-bottle.jpg",
      "/products/meso-lift-firming-benefits.jpg",
    ],
    quickFacts: ["Firming-focused", "Elasticity studies", "Research supply"],
    highlights: [
      "Firming peptide blend",
      "Elasticity research workflows",
      "Laboratory research supply",
    ],
    actives: ["Firming peptide complex", "Antioxidant support blend"],
    stockStatus: "sold_out",
    intendedUse: [
      "Peptide assays",
      "Analytical testing",
      "Formulation development",
    ],
    notes: "For research use only. Not for human or veterinary use.",
  },

  {
    id: "meso-collagen",
    name: "Meso Collagen Skin Booster",
    subtitle: "Collagen-focused booster research blend",
    category: "Regenerative",
    priceGBP: 75,
    pack: "5 vials x 7ml",
    image: "/products/meso-collagen-main.jpg",
    gallery: [
      "/products/meso-collagen-main.jpg",
      "/products/meso-collagen-alt.jpg",
      "/products/meso-collagen-before-after.jpg",
      "/products/meso-collagen-regeneration.jpg",
      "/products/meso-collagen-vegan.jpg",
    ],
    quickFacts: ["Collagen research", "Regeneration workflows", "5 vial pack"],
    highlights: [
      "Collagen-focused formulation research",
      "Often used in regeneration studies",
      "Laboratory supply",
    ],
    actives: ["Hydrolyzed Collagen", "Supportive carrier blend"],
    stockStatus: "sold_out",
    intendedUse: [
      "Protein analysis",
      "Stability testing",
      "Formulation R&D",
    ],
    notes: "For research use only. Not for human or veterinary use.",
  },

  {
    id: "meso-pdrn",
    name: "Meso PDRN",
    subtitle: "PDRN-based repair research blend",
    category: "Regenerative",
    priceGBP: 75,
    pack: "5 vials x 7ml",
    image: "/products/meso-pdrn-main.jpg",
    gallery: [
      "/products/meso-pdrn-main.jpg",
      "/products/meso-pdrn-alt.jpg",
      "/products/meso-pdrn-alt-cropped.jpg",
      "/products/meso-pdrn-ingredients.jpg",
      "/products/meso-pdrn-repair.jpg",
    ],
    quickFacts: ["PDRN-focused", "Repair studies", "Bench research"],
    highlights: [
      "PDRN regeneration research compound",
      "Repair and regeneration workflows",
      "Laboratory supply",
    ],
    actives: ["PDRN (Polydeoxyribonucleotide)"],
    stockStatus: "sold_out",
    intendedUse: [
      "Bench research",
      "Analytical characterization",
      "Formulation studies",
    ],
    notes: "For research use only. Not for human or veterinary use.",
  },

  {
    id: "meso-vitamin-c",
    name: "Meso Vitamin C",
    subtitle: "High concentration Vitamin C research blend",
    category: "Antioxidants",
    priceGBP: 75,
    pack: "5 vials x 7ml",
    image: "/products/meso-vitamin-c-main.jpg",
    gallery: [
      "/products/meso-vitamin-c-main.jpg",
      "/products/meso-vitamin-c-benefits.jpg",
      "/products/meso-vitamin-c-ingredients.jpg",
      "/products/meso-vitamin-c.jpg",
    ],
    quickFacts: ["Vitamin C research", "Antioxidant workflows", "Lab supply"],
    highlights: [
      "Vitamin C antioxidant compound",
      "Brightening formulation research",
      "Laboratory supply",
    ],
    actives: ["Ascorbic Acid (Vitamin C)"],
    stockStatus: "sold_out",
    intendedUse: [
      "Method development",
      "Antioxidant research",
      "Formulation testing",
    ],
    notes: "For research use only. Not for human or veterinary use.",
  },

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
    image: "/products/melanotan-mt2-10mg-main.jpg",
    gallery: [
      "/products/melanotan-mt2-10mg-a.jpg",
      "/products/melanotan-mt2-10mg-b.jpg",
    ],
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
    image: "/products/selank-sk10-10mg-main.jpg",
    gallery: [
      "/products/selank-sk10-10mg-a.jpg",
      "/products/selank-sk10-10mg-b.jpg",
    ],
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
    id: "sk5-5mg",
    name: "SK5 5mg",
    subtitle: "SK5 research peptide vial",
    category: "Metabolic",
    priceGBP: 39,
    pack: "1 vial x 5mg lyophilised powder",
    image: "/products/sk5-5mg-main.jpg",
    gallery: [
      "/products/sk5-5mg-a.jpg",
      "/products/sk5-5mg-b.jpg",
    ],
    quickFacts: ["5mg vial", "Research peptide", "Compact format"],
    highlights: [
      "SK5 research compound",
      "Single 5mg vial",
      "Controlled laboratory supply",
    ],
    actives: ["SK5 5mg"],
    intendedUse: [
      "Pilot research",
      "Analytical testing",
      "Controlled study environments",
    ],
    notes: "For research use only. Not for human or veterinary use.",
    stockStatus: "in_stock",
  },

  {
    id: "bpc157-5mg",
    name: "BPC-157 5mg",
    subtitle: "BPC-157 research peptide vial",
    category: "Regenerative",
    priceGBP: 42,
    pack: "1 vial x 5mg lyophilised powder",
    image: "/products/bpc157-5mg-main.jpg",
    gallery: [
      "/products/bpc157-5mg-a.jpg",
      "/products/bpc157-5mg-b.jpg",
    ],
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
    id: "bpc157-10mg",
    name: "BPC-157 10mg",
    subtitle: "BPC-157 research peptide vial",
    category: "Regenerative",
    priceGBP: 69,
    pack: "1 vial x 10mg lyophilised powder",
    image: "/products/bpc157-10mg-main.jpg",
    gallery: [
      "/products/bpc157-10mg-a.jpg",
      "/products/bpc157-10mg-b.jpg",
    ],
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
    id: "tirzepatide-tr40-40mg",
    name: "Tirzepatide TR40 40mg",
    subtitle: "Tirzepatide research peptide vial",
    category: "Metabolic",
    priceGBP: 165,
    pack: "1 vial x 40mg lyophilised powder",
    image: "/products/tirzepatide-tr40-40mg-main.jpg",
    gallery: [
      "/products/tirzepatide-tr40-40mg-a.jpg",
      "/products/tirzepatide-tr40-40mg-b.jpg",
    ],
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
    image: "/products/ghk-cu-50mg-main.jpg",
    gallery: [
      "/products/ghk-cu-50mg-a.jpg",
      "/products/ghk-cu-50mg-b.jpg",
    ],
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
    image: "/products/ghk-cu-100mg-main.jpg",
    gallery: [
      "/products/ghk-cu-100mg-a.jpg",
      "/products/ghk-cu-100mg-b.jpg",
    ],
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
    id: "nad-500mg",
    name: "NAD 500mg",
    subtitle: "Nicotinamide adenine dinucleotide research vial",
    category: "Metabolic",
    priceGBP: 64,
    pack: "1 vial x 500mg lyophilised powder",
    image: "/products/nad-500mg-main.jpg",
    gallery: [
      "/products/nad-500mg-a.jpg",
      "/products/nad-500mg-b.jpg",
    ],
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
    image: "/products/nad-1000mg-main.jpg",
    gallery: [
      "/products/nad-1000mg-a.jpg",
      "/products/nad-1000mg-b.jpg",
    ],
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
    id: "glutathione-1500mg",
    name: "Glutathione 1500mg",
    subtitle: "High-strength glutathione research vial",
    category: "Antioxidants",
    priceGBP: 74,
    pack: "1 vial x 1500mg powder",
    image: "/products/glutathione-1500mg-main.jpg",
    gallery: [
      "/products/glutathione-1500mg-a.jpg",
      "/products/glutathione-1500mg-b.jpg",
    ],
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
    image: "/products/bac-water-3ml-main.jpg",
    gallery: [
      "/products/bac-water-3ml-a.jpg",
      "/products/bac-water-3ml-b.jpg",
    ],
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
    image: "/products/bac-water-10ml-main.jpg",
    gallery: [
      "/products/bac-water-10ml-a.jpg",
      "/products/bac-water-10ml-b.jpg",
    ],
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