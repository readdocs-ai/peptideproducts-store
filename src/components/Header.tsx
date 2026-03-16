"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav } from "@/theme/brand";
import { cartCount, readCart } from "@/lib/cart";

const researchLinks = [
  { href: "/research-peptides", label: "Research peptides" },
  { href: "/peptide-compounds-research", label: "Peptide compounds research" },
  { href: "/research-peptides-uk", label: "Research peptides UK" },
  { href: "/research-peptide-supplier-uk", label: "Research peptide supplier UK" },
  { href: "/buy-research-peptides-uk", label: "Buy research peptides UK" },
  { href: "/laboratory-peptide-compounds", label: "Laboratory peptide compounds" },
] as const;

const hiddenNavHrefs = new Set(["/research-peptides", "/faq", "/disclaimer"]);

export function Header() {
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setCount(cartCount(readCart()));
    sync();

    const onScroll = () => setScrolled(window.scrollY > 6);

    window.addEventListener("pp-cart", sync);
    window.addEventListener("storage", sync);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("pp-cart", sync);
      window.removeEventListener("storage", sync);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur transition-shadow duration-200 ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Logo compact />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav
              .filter((i) => !hiddenNavHrefs.has(i.href))
              .map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="group relative text-sm font-semibold text-muted transition hover:text-ink"
                >
                  {i.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

            <div className="group relative">
              <button
                type="button"
                className="group relative text-sm font-semibold text-muted transition hover:text-ink"
                aria-label="Open research menu"
              >
                Research
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-4 w-[280px] rounded-xl2 border border-line bg-white p-3 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="mb-2 px-2 text-xs font-extrabold uppercase tracking-wide text-muted">
                  Research guides
                </div>

                <div className="grid gap-1">
                  {researchLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl2 px-3 py-2 text-sm font-semibold text-muted transition hover:bg-panel hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/order-status"
              className="group relative text-sm font-semibold text-muted transition hover:text-ink"
            >
              Order Status
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>

          <Link
            href="/cart"
            className="flex items-center gap-2 rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-semibold shadow-soft transition hover:bg-panel"
            aria-label="Open cart"
          >
            Cart
            <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-accent px-2 text-xs font-bold text-white">
              {count}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
}