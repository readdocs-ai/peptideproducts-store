import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "Research Use Disclaimer | Peptide Products UK",
  description:
    "Research-use-only disclaimer for Peptide Products UK. Products are not for human consumption, medical use, veterinary use, clinical use, diagnosis, treatment, or prevention.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/disclaimer",
  },
};

export default function Disclaimer() {
  return (
    <div>
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">Research use disclaimer</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Research-use-only disclaimer
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                This disclaimer applies to all products, product pages, support
                pages, checkout flows, emails, and related content provided by
                Peptide Products UK.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">Laboratory research use only</span>
                <span className="trust-pill">Not for human consumption</span>
                <span className="trust-pill">Not for medical use</span>
                <span className="trust-pill">Not for veterinary use</span>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-line bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                Business information
              </h2>

              <div className="mt-4 rounded-xl2 border border-line bg-panel p-5 text-sm leading-7 text-muted">
                <div className="font-extrabold text-ink">Peptide Products Ltd</div>
                <div>Company No: 17073416</div>
                <div>Email: {brand.supportEmail}</div>
                <div>Phone: {brand.phone}</div>
                <div className="mt-2 font-semibold text-ink">
                  Wholesale enquiries welcome.
                </div>
              </div>
            </section>

            <section className="mt-8 grid gap-6">
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Research use only
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  All products offered by Peptide Products are supplied strictly
                  for laboratory research, analytical, and scientific research use
                  only.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Products are not intended for human consumption, veterinary use,
                  medical use, clinical use, diagnostic use, treatment purposes,
                  prevention purposes, cosmetic use, household use, food use, or
                  any form of personal use.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  No medical, dosing, or personal-use guidance
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We do not provide medical advice, veterinary advice, dosing
                  guidance, administration instructions, personal-use guidance,
                  treatment guidance, or clinical recommendations.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Requests for instructions relating to personal consumption,
                  injection, treatment, dosage, cycle planning, medical use, or
                  veterinary use are not supported.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Buyer responsibility and compliance
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Buyers are responsible for ensuring they are permitted to
                  purchase, possess, import, store, handle, and use any products
                  ordered from this website in their own jurisdiction.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Buyers are also responsible for complying with all applicable
                  laws, import requirements, customs requirements, laboratory
                  safety standards, institutional rules, and disposal
                  requirements.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Qualified handling
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Purchasers must be qualified and knowledgeable in the safe
                  handling, storage, transport, and disposal of laboratory
                  chemicals, reagents, and research materials.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Appropriate laboratory procedures, personal protective
                  equipment, storage controls, and risk assessments should be used
                  at all times.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Product information and documentation
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Product descriptions, images, documentation, certificates,
                  support pages, and other website content are provided for
                  general product-identification and research-reference purposes
                  only.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Documentation availability may vary by product line. Customers
                  who need documentation guidance before ordering should review
                  the quality assurance page or contact support before checkout.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/quality-assurance"
                    className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
                  >
                    Quality & documentation
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
                  >
                    Contact support
                  </Link>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  All sales final
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Due to the nature of research compounds, product handling
                  requirements, and chain-of-custody considerations, all sales are
                  final once an order has been packed or dispatched.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We do not accept returns, refunds, or exchanges for unwanted
                  items, change-of-mind purchases, ordering mistakes, or products
                  that have been opened, used, handled, or stored outside our
                  control, except where required by law or where an item is
                  damaged, incorrect, or faulty on arrival.
                </p>

                <div className="mt-5">
                  <Link
                    href="/returns"
                    className="font-extrabold text-accent hover:underline"
                  >
                    View returns and refunds policy →
                  </Link>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Shipping, customs, and import responsibility
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  UK and international delivery timeframes are estimates only and
                  may be affected by payment confirmation, courier handling,
                  customs processing, local delivery conditions, bank holidays, or
                  circumstances outside our control.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  International customers are responsible for local import
                  permissions, customs clearance, taxes, duties, and any risks
                  associated with import restrictions in their jurisdiction.
                </p>

                <div className="mt-5">
                  <Link
                    href="/shipping"
                    className="font-extrabold text-accent hover:underline"
                  >
                    View shipping information →
                  </Link>
                </div>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Website information disclaimer
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Website content is provided for general informational purposes
                  only and should not be relied upon as medical, veterinary,
                  clinical, legal, regulatory, or safety advice.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Product information may not cover every possible application,
                  handling requirement, storage condition, hazard, regulation, or
                  jurisdiction-specific restriction.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  No warranties and limitation of liability
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  To the fullest extent permitted by law, Peptide Products
                  disclaims liability for misuse, improper storage, improper
                  handling, unlawful use, unauthorised personal use, or use
                  outside controlled laboratory research environments.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Buyers accept responsibility for assessing suitability,
                  compliance, handling, storage, and use before purchasing.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Age restriction
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  You must be 18 or over to access this website, place an order,
                  or purchase from Peptide Products.
                </p>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Need help before ordering?
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                If you have questions about product information, documentation,
                payment confirmation, shipping, or an existing order, contact us
                before ordering or include your order number when contacting
                support.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  Contact support
                </Link>

                <Link
                  href="/faq"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Read FAQ
                </Link>

                <Link
                  href="/order-status"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Check order status
                </Link>
              </div>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}