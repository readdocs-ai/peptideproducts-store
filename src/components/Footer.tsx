import Link from "next/link";
import { Container } from "./Container";
import { brand } from "@/theme/brand";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-panel">
      <Container>

        <div className="grid gap-10 py-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="text-lg font-extrabold text-ink">
              {brand.name}
            </div>

            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
              {brand.description}
            </p>

            <div className="mt-5 space-y-2 text-sm text-muted">
              <div>{brand.domain}</div>
              <div>{brand.supportEmail}</div>
              <div>{brand.wholesale}</div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <div className="font-bold text-ink">
              Policies
            </div>

            <div className="mt-4 grid gap-3 text-sm text-muted">
              <Link href="/disclaimer" className="hover:text-ink">
                Research use disclaimer
              </Link>

              <Link href="/shipping" className="hover:text-ink">
                Shipping & returns
              </Link>

              <Link href="/terms" className="hover:text-ink">
                Terms & conditions
              </Link>

              <Link href="/privacy" className="hover:text-ink">
                Privacy policy
              </Link>
            </div>
          </div>

          {/* Research hubs */}
          <div>
            <div className="font-bold text-ink">
              Research
            </div>

            <div className="mt-4 grid gap-3 text-sm text-muted">

              <Link href="/faq" className="hover:text-ink">
                FAQ
              </Link>

              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>

              <Link href="/research-peptides" className="hover:text-ink">
                Research peptides
              </Link>

              <Link href="/research-peptides-uk" className="hover:text-ink">
                Research peptides UK
              </Link>

              <Link href="/research-peptide-supplier-uk" className="hover:text-ink">
                Research peptide supplier UK
              </Link>

              <Link href="/buy-research-peptides-uk" className="hover:text-ink">
                Buy research peptides UK
              </Link>

              <Link href="/laboratory-peptide-compounds" className="hover:text-ink">
                Laboratory peptide compounds
              </Link>

              <Link href="/peptide-products" className="hover:text-ink">
                Peptide products
              </Link>

            </div>
          </div>

          {/* Peptide categories + compound research */}
          <div>
            <div className="font-bold text-ink">
              Peptide research
            </div>

            <div className="mt-4 grid gap-3 text-sm text-muted">

              <Link href="/antioxidant-peptides" className="hover:text-ink">
                Antioxidant peptides
              </Link>

              <Link href="/hydration-peptides" className="hover:text-ink">
                Hydration peptides
              </Link>

              <Link href="/firming-peptides" className="hover:text-ink">
                Firming peptides
              </Link>

              <Link href="/regenerative-peptides" className="hover:text-ink">
                Regenerative peptides
              </Link>

              <Link href="/pdrn-research-peptide" className="hover:text-ink">
                PDRN research peptide
              </Link>

              <Link href="/glutathione-research-peptide" className="hover:text-ink">
                Glutathione research peptide
              </Link>

              <Link href="/hyaluronic-acid-peptide-research" className="hover:text-ink">
                Hyaluronic acid peptide research
              </Link>

              <Link
  href="/peptide-compounds-research"
  className="text-sm text-muted hover:text-ink"
>
  Peptide compounds research
</Link>

            </div>
          </div>

        </div>

        <div className="border-t border-line py-6 text-xs text-muted">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}