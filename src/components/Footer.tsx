import Link from "next/link";
import { Container } from "./Container";
import { brand } from "@/theme/brand";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white/70 backdrop-blur">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="text-lg font-extrabold tracking-wide text-ink">
              {brand.name}
            </div>
            <div className="mt-2 max-w-sm text-sm text-muted">
              {brand.description}
            </div>
            <div className="mt-3 text-xs text-muted">{brand.domain}</div>
          </div>

          {/* Policies */}
          <div className="text-sm">
            <div className="font-bold text-ink">Policies</div>
            <div className="mt-3 grid gap-2 text-muted">
              <Link href="/disclaimer">Research use disclaimer</Link>
              <Link href="/shipping">Shipping & returns</Link>
              <Link href="/terms">Terms & conditions</Link>
              <Link href="/privacy">Privacy policy</Link>
            </div>
          </div>

          {/* Research + SEO pages */}
          <div className="text-sm">
            <div className="font-bold text-ink">Research</div>

            <div className="mt-3 grid gap-2 text-muted">

              {/* Support */}
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>

              {/* Research hubs */}
              <Link href="/research-peptides">Research peptides</Link>
              <Link href="/research-peptides-uk">Research peptides UK</Link>
              <Link href="/research-peptide-supplier-uk">
                Research peptide supplier UK
              </Link>

              {/* Category pages */}
              <Link href="/antioxidant-peptides">
                Antioxidant peptides
              </Link>
              <Link href="/hydration-peptides">
                Hydration peptides
              </Link>
              <Link href="/firming-peptides">
                Firming peptides
              </Link>
              <Link href="/regenerative-peptides">
                Regenerative peptides
              </Link>

              {/* Compound research pages */}
              <Link href="/pdrn-research-peptide">PDRN research peptide</Link>
              <Link href="/glutathione-research-peptide">
                Glutathione research peptide
              </Link>
              <Link href="/hyaluronic-acid-peptide-research">
                Hyaluronic acid peptide research
              </Link>

              {/* Buyer / commercial pages */}
              <Link href="/buy-research-peptides-uk">
                Buy research peptides UK
              </Link>
              <Link href="/laboratory-peptide-compounds">
                Laboratory peptide compounds
              </Link>
              <Link href="/peptide-products">
                Peptide products
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