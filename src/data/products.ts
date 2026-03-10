export type Category =
  | "Antioxidants"
  | "Hydration"
  | "Firming"
  | "Regenerative";

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
  coa?: string;
  sds?: string;
};

export const categories: { key: Category; blurb: string }[] = [
  { key: "Antioxidants", blurb: "Brightening and antioxidant compounds for bench research." },
  { key: "Hydration", blurb: "Hydration-focused boosters and carrier systems for formulation work." },
  { key: "Firming", blurb: "Elasticity and firmness-focused research blends." },
  { key: "Regenerative", blurb: "Repair and regeneration-focused ingredients for laboratory study." },
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
    gallery: ["/products/meso-glutathione-main.jpg", "/products/meso-glutathione-alt-cropped.jpg"],
    ogAccent: "#C9B98C",
    quickFacts: ["Antioxidant-led", "Vitamin C pairing", "5 vials per pack"],
    coa: "/docs/coa/meso-glutathione.pdf",
    sds: "/docs/sds/meso-glutathione.pdf",
    highlights: ["Antioxidant-focused", "Often paired with Vitamin C", "Supplied for lab research use"],
    actives: ["Glutathione", "Ascorbic acid (Vitamin C)"],
    intendedUse: ["In-vitro studies", "Analytical workflows", "Method development"],
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
    gallery: ["/products/skinbooster-hyaluronic-acid-main.jpg", "/products/skinbooster-hyaluronic-acid-alt.jpg"],
    ogAccent: "#A9D9D4",
    quickFacts: ["Hydration-first", "Carrier blend", "Bench and stability work"],
    coa: "/docs/coa/skinbooster-hyaluronic-acid.pdf",
    sds: "/docs/sds/skinbooster-hyaluronic-acid.pdf",
    highlights: ["Hydration-focused carrier", "Common in formulation research", "Supplied for lab use"],
    actives: ["Hyaluronic acid", "Niacinamide (label)", "PDRN (label)", "Glutathione (label)"],
    intendedUse: ["Formulation research", "Bench testing", "Stability studies"],
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
    gallery: ["/products/meso-lift-firming-main.jpg", "/products/meso-lift-firming-alt.jpg"],
    ogAccent: "#D9B39C",
    quickFacts: ["Firming-focused", "Elasticity research", "5 vials per pack"],
    coa: "/docs/coa/meso-lift-firming.pdf",
    sds: "/docs/sds/meso-lift-firming.pdf",
    highlights: ["Firming and elasticity focus", "Formulation and assay research", "Research supply only"],
    actives: ["Firming peptide blend (label)", "Antioxidant blend (label)"],
    intendedUse: ["Assay research", "Analytical testing", "Formulation R&D"],
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
    gallery: ["/products/meso-collagen-main.jpg", "/products/meso-collagen-alt.jpg"],
    ogAccent: "#B9C7D8",
    quickFacts: ["Collagen-led", "Regeneration workflows", "5 vials per pack"],
    coa: "/docs/coa/meso-collagen.pdf",
    sds: "/docs/sds/meso-collagen.pdf",
    highlights: ["Collagen-focused", "Often used in regeneration research", "Lab supply only"],
    actives: ["Hydrolyzed collagen (label)", "Supportive carrier blend (label)"],
    intendedUse: ["Protein assays", "Stability and compatibility tests", "Formulation research"],
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
    gallery: ["/products/meso-pdrn-main.jpg", "/products/meso-pdrn-alt.jpg"],
    ogAccent: "#A8C6D8",
    quickFacts: ["PDRN-focused", "Repair studies", "Bench-ready pack"],
    coa: "/docs/coa/meso-pdrn.pdf",
    sds: "/docs/sds/meso-pdrn.pdf",
    highlights: ["PDRN-focused", "Repair and regeneration research", "Supplied for lab workflows"],
    actives: ["PDRN (polydeoxyribonucleotide)"],
    intendedUse: ["Bench research", "Analytical characterization", "Formulation experiments"],
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
    gallery: ["/products/meso-vitamin-c-main.jpg", "/products/meso-vitamin-c-alt.jpg"],
    ogAccent: "#E4C66A",
    quickFacts: ["Vitamin C-led", "Antioxidant workflows", "Method development"],
    coa: "/docs/coa/meso-vitamin-c.pdf",
    sds: "/docs/sds/meso-vitamin-c.pdf",
    highlights: ["Vitamin C research supply", "Antioxidant workflows", "Lab use only"],
    actives: ["Ascorbic acid (Vitamin C)"],
    intendedUse: ["Method development", "Analytical testing", "Formulation research"],
    notes: "For research use only. Not for human or veterinary use.",
  },
];
