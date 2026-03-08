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
  highlights: string[];
  actives: string[];
  intendedUse: string[];
  notes: string;
  coa?: string;
  sds?: string;
};

export const categories: { key: Category; blurb: string }[] = [
  { key: "Antioxidants", blurb: "Brightening/antioxidant compounds for research." },
  { key: "Hydration", blurb: "Hydration-focused boosters and carriers." },
  { key: "Firming", blurb: "Elasticity and firmness research blends." },
  { key: "Regenerative", blurb: "Regeneration and repair research ingredients." },
];

export const products: Product[] = [
  {
    id: "meso-glutathione",
    name: "Meso Glutathione",
    subtitle: "Glutathione + Vitamin C (research supply)",
    category: "Antioxidants",
    priceGBP: 59,
    pack: "5 vials × 7ml",
    image: "/products/meso-glutathione.jpg",
    coa: "/docs/coa/meso-glutathione.pdf",
    sds: "/docs/sds/meso-glutathione.pdf",
    highlights: ["Antioxidant-focused", "Often paired with Vitamin C", "Supplied for lab research use"],
    actives: ["Glutathione", "Ascorbic acid (Vitamin C)"],
    intendedUse: ["In‑vitro studies", "Analytical workflows", "Method development"],
    notes: "For research use only. Not for human or veterinary use.",
  },
  {
    id: "skinbooster-hyaluronic-acid",
    name: "Skinbooster Hyaluronic Acid",
    subtitle: "Hydration carrier blend (research supply)",
    category: "Hydration",
    priceGBP: 54,
    pack: "5 vials × 7ml",
    image: "/products/skinbooster-hyaluronic-acid.jpg",
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
    subtitle: "Firming blend (research supply)",
    category: "Firming",
    priceGBP: 62,
    pack: "5 vials × 7ml",
    image: "/products/meso-lift-firming.jpg",
    coa: "/docs/coa/meso-lift-firming.pdf",
    sds: "/docs/sds/meso-lift-firming.pdf",
    highlights: ["Firming/elasticity focus", "Formulation and assay research", "Research supply only"],
    actives: ["Firming peptide blend (label)", "Antioxidant blend (label)"],
    intendedUse: ["Assay research", "Analytical testing", "Formulation R&D"],
    notes: "For research use only. Not for human or veterinary use.",
  },
  {
    id: "meso-collagen",
    name: "Meso Collagen Skin Booster",
    subtitle: "Collagen-focused booster (research supply)",
    category: "Regenerative",
    priceGBP: 64,
    pack: "5 vials × 7ml",
    image: "/products/meso-collagen.jpg",
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
    subtitle: "PDRN-based repair blend (research supply)",
    category: "Regenerative",
    priceGBP: 69,
    pack: "5 vials × 7ml",
    image: "/products/meso-pdrn.jpg",
    coa: "/docs/coa/meso-pdrn.pdf",
    sds: "/docs/sds/meso-pdrn.pdf",
    highlights: ["PDRN-focused", "Repair/regeneration research", "Supplied for lab workflows"],
    actives: ["PDRN (polydeoxyribonucleotide)"],
    intendedUse: ["Bench research", "Analytical characterization", "Formulation experiments"],
    notes: "For research use only. Not for human or veterinary use.",
  },
  {
    id: "meso-vitamin-c",
    name: "Meso Vitamin C",
    subtitle: "High concentration Vitamin C (research supply)",
    category: "Antioxidants",
    priceGBP: 49,
    pack: "5 vials × 7ml",
    image: "/products/meso-vitamin-c.jpg",
    coa: "/docs/coa/meso-vitamin-c.pdf",
    sds: "/docs/sds/meso-vitamin-c.pdf",
    highlights: ["Vitamin C research supply", "Antioxidant workflows", "Lab use only"],
    actives: ["Ascorbic acid (Vitamin C)"],
    intendedUse: ["Method development", "Analytical testing", "Formulation research"],
    notes: "For research use only. Not for human or veterinary use.",
  },
];
