import Link from "next/link";
import { Container } from "./Container";
import { brand } from "@/theme/brand";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white/90 backdrop-blur">
      <Container>
        <div className="grid gap-8 py-12 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.95fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">{brand.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="trust-pill">Tracked UK dispatch</span>
              <span className="trust-pill">Secure checkout</span>
              <span className="trust-pill">COA on selected products</span>
            </div>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <div>{brand.domain}</div>
              <a href={`mailto:${brand.supportEmail}`} className="block hover:text-ink">
                {brand.supportEmail}
              </a>
              <div>{brand.phone}</div>
              <div>{brand.wholesale}</div>
            </div>
          </div>

          <div>
            <div className="font-bold text-ink">Shop & support</div>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <Link href="/shop" className="hover:text-ink">
                Shop all products
              </Link>
              <Link href="/quality-assurance" className="hover:text-ink">
                Quality & documentation
              </Link>
              <Link href="/order-status" className="hover:text-ink">
                Track an order
              </Link>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
              <Link href="/wholesale" className="hover:text-ink">
                Wholesale
              </Link>
            </div>
          </div>

          <div>
            <div className="font-bold text-ink">Policies</div>
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
              <Link href="/faq" className="hover:text-ink">
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <div className="font-bold text-ink">Research guides</div>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <Link href="/research-peptides" className="hover:text-ink">
                Research peptides
              </Link>
              <Link href="/research-peptides-uk" className="hover:text-ink">
                Research peptides UK
              </Link>
              <Link href="/retatrutide-research-peptide" className="hover:text-ink">
                Retatrutide research peptide
              </Link>
              <Link href="/antioxidant-peptides" className="hover:text-ink">
                Antioxidant peptides
              </Link>
              <Link href="/regenerative-peptides" className="hover:text-ink">
                Regenerative peptides
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-line py-6 text-xs text-muted">
          © {new Date().getFullYear()} {brand.name}. All rights reserved. Products are listed for laboratory, analytical, and scientific research use only.
        </div>
      </Container>
    </footer>
  );
}
