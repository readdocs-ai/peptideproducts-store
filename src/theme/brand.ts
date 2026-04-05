export const brand = {
  name: "Peptide Products",
  tagline: "Premium UK research peptide supplier",
  description:
    "Research peptides and laboratory compounds supplied in the UK with secure checkout, tracked dispatch, and documentation available on selected product lines.",
  domain: "peptideproducts.co.uk",
  phone: "07429 098887",
  wholesale: "Wholesale enquiries welcome",
  supportEmail: "info@peptideproducts.co.uk",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/quality-assurance", label: "Quality" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
] as const;
