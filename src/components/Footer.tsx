import Link from "next/link";
import { Container } from "./Container";
import { brand } from "@/theme/brand";
import { Logo } from "./Logo";

const primaryLinks = [
  { href: "/shop", label: "Shop all products" },
  { href: "/quality-assurance", label: "Quality information" },
  { href: "/shipping", label: "Shipping" },
  { href: "/order-status", label: "Track an order" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/international-orders", label: "International orders" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/faq", label: "FAQs" },
  { href: "/returns", label: "Returns & refunds" },
] as const;

const policyLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Research disclaimer" },
] as const;

const researchLinks = [
  { href: "/research-peptides", label: "Research peptides" },
  { href: "/laboratory-peptide-compounds", label: "Laboratory peptide compounds" },
  { href: "/peptides-uk", label: "Peptides UK" },
  { href: "/research-compounds-uk", label: "Research compounds UK" },
  { href: "/metabolic-research-compounds", label: "Metabolic compounds" },
  { href: "/nootropic-peptides", label: "Nootropic peptides" },
  { href: "/regenerative-peptides", label: "Regenerative peptides" },
  { href: "/retatrutide", label: "Retatrutide research hub" },
  { href: "/what-is-retatrutide", label: "What is Retatrutide?" },
  { href: "/tirzepatide-uk", label: "Tirzepatide UK" },
  { href: "/ghk-cu-uk", label: "GHK-CU UK" },
  { href: "/bpc-157-uk", label: "BPC-157 UK" },
  { href: "/tb-500-uk", label: "TB-500 UK" },
  { href: "/nad-500mg-uk", label: "NAD+ 500mg UK" },
  { href: "/ipamorelin-uk", label: "Ipamorelin UK" },
  { href: "/selank-uk", label: "Selank UK" },
  { href: "/semax-uk", label: "Semax UK" },
  { href: "/melanotan-uk", label: "Melanotan UK" },
  { href: "/glutathione-uk", label: "Glutathione UK" },
] as const;

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/55">
        {title}
      </h2>
      <div className="mt-4 grid gap-2.5">
        {links.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
            href={item.href}
            className="text-sm text-white/75 transition hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-6 bg-ink text-white">
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1.35fr]">
          <div>
            <div className="inline-flex rounded-xl2 bg-white px-4 py-3">
              <Logo />
            </div>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
              UK-based supplier of laboratory research compounds. Products are
              supplied strictly for laboratory, analytical and scientific research
              use only.
            </p>
            <div className="mt-5 space-y-1 text-sm text-white/70">
              <div className="font-bold text-white">Peptide Products Ltd</div>
              <div>Company No. 17073416 · United Kingdom</div>
              <a href={`mailto:${brand.supportEmail}`} className="block hover:text-white">
                {brand.supportEmail}
              </a>
              <div>{brand.phone}</div>
            </div>
          </div>

          <LinkGroup title="Shop & support" links={primaryLinks} />
          <LinkGroup title="Company" links={companyLinks} />

          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/55">
              Research pages
            </h2>
            <div className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-2">
              {researchLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="grid gap-4 text-xs leading-6 text-white/55 lg:grid-cols-[1fr_auto] lg:items-center">
            <p>
              © {new Date().getFullYear()} {brand.name}. All rights reserved. Not
              for human consumption, medical, veterinary, clinical, diagnostic or
              treatment use.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {policyLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
