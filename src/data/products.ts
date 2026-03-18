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
    blurb: "Hydration-focused carrier systems for formulation work.",
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
    pack: "5 vials × 7ml",

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
    pack: "5 vials × 7ml",

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
    pack: "5 vials × 7ml",

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
    pack: "5 vials × 7ml",

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
    pack: "5 vials × 7ml",

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
    pack: "5 vials × 7ml",

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
    pack: "1 pre-filled pen • 40mg total",

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
];
  

  
   
  