export const blingSkincare = [
  {
    "id": "bling-radiance-collection",
    "name": "BLING Radiance Collection",
    "subtitle": "A luminous four-piece daily skincare gift ritual",
    "priceGBP": 130,
    "description": "An elegant white-and-gold gift presentation with a proposed day cream, night cream, serum and eye cream. A beautifully coordinated concept for a luxurious morning-to-evening beauty ritual.",
    "image": "/products/bling-collections/bling-radiance-collection.webp",
    "detailImage": "/products/bling-collections/bling-radiance-collection-detail.webp"
  },
  {
    "id": "bling-age-defy-collection",
    "name": "BLING Age Defy Collection",
    "subtitle": "A rose-gold inspired four-piece beauty ritual",
    "priceGBP": 125,
    "description": "A beautifully presented blush-pink collection featuring a proposed day cream, night cream, facial serum and eye cream. A thoughtful gift concept designed around a refined daily skincare experience.",
    "image": "/products/bling-collections/bling-age-defy-collection.webp",
    "detailImage": "/products/bling-collections/bling-age-defy-collection-detail.webp"
  },
  {
    "id": "bling-renew-restore-collection",
    "name": "BLING Renew & Restore Collection",
    "subtitle": "An emerald-green four-piece skincare edit",
    "priceGBP": 125,
    "description": "A rich green-and-gold gift box featuring a proposed cleansing gel, nourishing day cream, night cream and renewal mask. A complete, indulgent skincare ritual with an elevated presentation.",
    "image": "/products/bling-collections/bling-renew-restore-collection.webp",
    "detailImage": "/products/bling-collections/bling-renew-restore-collection-detail.webp"
  },
  {
    "id": "bling-vital-perfection-collection",
    "name": "BLING Vital Perfection Collection",
    "subtitle": "A violet four-piece skincare gift set",
    "priceGBP": 125,
    "description": "A regal purple-and-gold concept with proposed day cream, night cream, essence and eye cream, presented with a matching cosmetic pouch. An elegant gift for anyone who enjoys considered beauty rituals.",
    "image": "/products/bling-collections/bling-vital-perfection-collection.webp",
    "detailImage": "/products/bling-collections/bling-vital-perfection-collection-detail.webp"
  },
  {
    "id": "bling-renewal-ritual-collection",
    "name": "BLING Renewal Ritual Collection",
    "subtitle": "A peach-toned five-piece skincare ritual",
    "priceGBP": 125,
    "description": "A delicate peach-and-gold gift set featuring a proposed cleanser, day cream, night cream, serum and exfoliating polish. Designed as a coordinated beauty routine in a floral presentation box.",
    "image": "/products/bling-collections/bling-renewal-ritual-collection.webp",
    "detailImage": "/products/bling-collections/bling-renewal-ritual-collection-detail.webp"
  },
  {
    "id": "bling-ultimate-lift-collection",
    "name": "BLING Ultimate Lift Collection",
    "subtitle": "A midnight-blue four-piece skincare collection",
    "priceGBP": 125,
    "description": "A striking navy-and-gold gift concept with proposed day cream, night cream, serum and eye cream, accompanied by a matching cosmetic pouch. A distinctive luxury beauty gift presentation.",
    "image": "/products/bling-collections/bling-ultimate-lift-collection.webp",
    "detailImage": "/products/bling-collections/bling-ultimate-lift-collection-detail.webp"
  }
] as const;

export function blingStockMessage(product: (typeof blingSkincare)[number]) {
  return `Hi Peptide Products, please check stock for ${product.name}, listed at £${product.priceGBP.toFixed(2)}. Please confirm availability and collection details. Thank you.`;
}
