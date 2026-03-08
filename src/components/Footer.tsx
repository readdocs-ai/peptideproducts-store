import Link from "next/link";
import { Container } from "./Container";
import { brand } from "@/theme/brand";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white/70 backdrop-blur">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-extrabold tracking-wide text-ink">{brand.name}</div>
            <div className="mt-2 max-w-sm text-sm text-muted">{brand.description}</div>
            <div className="mt-3 text-xs text-muted">{brand.domain}</div>
          </div>

          <div className="text-sm">
            <div className="font-bold text-ink">Policies</div>
            <div className="mt-3 grid gap-2 text-muted">
              <Link href="/disclaimer">Research use disclaimer</Link>
              <Link href="/shipping">Shipping & returns</Link>
              <Link href="/terms">Terms & conditions</Link>
              <Link href="/privacy">Privacy policy</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-bold text-ink">Support</div>
            <div className="mt-3 grid gap-2 text-muted">
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
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