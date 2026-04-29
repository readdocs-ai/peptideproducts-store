import Link from "next/link";
import { Container } from "./Container";
import { brand } from "@/theme/brand";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              {brand.description}
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              All products are supplied strictly for laboratory and research use only.
              Not for human consumption, medical use, or veterinary use.
            </p>

            <div className="mt-6 space-y-2 text-sm text-muted">
              <div>{brand.domain}</div>
              <a href={`mailto:${brand.supportEmail}`} className="block hover:text-ink">
                {brand.supportEmail}
              </a>
              <div>{brand.phone}</div>
              <div>{brand.wholesale}</div>
              <div>United Kingdom</div>
            </div>
          </div>

          {/* Shop & Support */}
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
              Shop & support
            </div>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <Link href="/shop" className="hover:text-ink">
                Shop all products
              </Link>
              <Link href="/about" className="hover:text-ink">
                About us
              </Link>
              <Link href="/quality-assurance" className="hover:text-ink">
                Quality & documentation
              </Link>
              <Link href="/shipping" className="hover:text-ink">
                Shipping information
              </Link>
              <Link href="/order-status" className="hover:text-ink">
                Track an order
              </Link>
              <Link href="/contact" className="hover:text-ink">
                Contact support
              </Link>
              <Link href="/wholesale" className="hover:text-ink">
                Wholesale
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
              Policies & info
            </div>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <Link href="/disclaimer" className="hover:text-ink">
                Research use disclaimer
              </Link>
              <Link href="/terms" className="hover:text-ink">
                Terms & conditions
              </Link>
              <Link href="/privacy" className="hover:text-ink">
                Privacy policy
              </Link>
              <Link href="/returns" className="hover:text-ink">
                Returns & refunds
              </Link>
              <Link href="/faq" className="hover:text-ink">
                Frequently asked questions
              </Link>
              <Link href="/reviews" className="hover:text-ink">
                Customer reviews
              </Link>
            </div>
          </div>

          {/* SEO Links */}
          <div>
            <div className="text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
              Helpful links
            </div>
            <div className="mt-4 grid gap-3 text-sm text-muted">
              <Link href="/research-peptides" className="hover:text-ink">
                Research peptides
              </Link>
              <Link href="/buy-tirzepatide-uk" className="hover:text-ink">
  Buy Tirzepatide UK
</Link>
              <Link href="/peptides-uk" className="hover:text-ink">
                Peptides UK
              </Link>
              <Link href="/tirzepatide-price-uk" className="hover:text-ink">
  Tirzepatide price UK
</Link>
<Link href="/where-to-buy-tirzepatide-uk" className="hover:text-ink">
  Where to buy Tirzepatide UK
</Link>
<Link href="/buy-peptides-uk" className="hover:text-ink">
  Buy peptides UK
</Link>
              <Link href="/research-compounds-uk" className="hover:text-ink">
                Research compounds UK
              </Link>
              <Link href="/metabolic-research-compounds" className="hover:text-ink">
                Metabolic research compounds
              </Link>
              <Link href="/tirzepatide-uk" className="hover:text-ink">
  Tirzepatide UK
</Link>
              <Link href="/retatrutide-uk" className="hover:text-ink">
                Retatrutide UK
              </Link>
              <Link href="/buy-retatrutide-uk" className="hover:text-ink">
                Buy Retatrutide UK
              </Link>
              <Link href="/retatrutide-price-uk" className="hover:text-ink">
                Retatrutide price UK
              </Link>
              <Link href="/where-to-buy-retatrutide-uk" className="hover:text-ink">
                Where to buy Retatrutide UK
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-line py-6 text-xs text-muted">
          © {new Date().getFullYear()} {brand.name}. All rights reserved. Products are
          listed strictly for laboratory, analytical, and scientific research use only.
          Not for human consumption, medical use, or veterinary use.
        </div>
      </Container>
    </footer>
  );
}