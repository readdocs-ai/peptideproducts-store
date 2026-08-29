import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export const metadata: Metadata = {
  title: "Privacy Policy | Peptide Products UK",
  description:
    "Privacy policy for Peptide Products UK, including how customer, order, contact, checkout, email, and website data may be collected and used.",
  alternates: {
    canonical: "https://www.peptideproducts.co.uk/privacy",
  },
};

export default function Privacy() {
  return (
    <div>
      <Header />

      <main className="py-10 lg:py-12">
        <Container>
          <div className="mx-auto max-w-5xl">
            <section className="rounded-xl3 border border-line bg-white p-6 shadow-soft lg:p-8">
              <div className="eyebrow">Privacy policy</div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted md:text-base">
                This Privacy Policy explains how Peptide Products UK collects,
                uses, stores, and protects personal information when you use this
                website, place an order, contact support, or submit an enquiry.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="trust-pill">Customer data</span>
                <span className="trust-pill">Order processing</span>
                <span className="trust-pill">Secure checkout</span>
                <span className="trust-pill">Support enquiries</span>
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
              </div>
            </section>

            <section className="mt-8 grid gap-6">
              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Information we collect
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We may collect information you provide directly when using the
                  website, placing an order, submitting a contact form, making a
                  wholesale enquiry, checking order status, or contacting support.
                </p>

                <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
                  <li>• Name and contact details, including email address and phone number where provided.</li>
                  <li>• Delivery address and billing-related information needed to process orders.</li>
                  <li>• Order information, including products ordered, order number, payment method, order status, and delivery information.</li>
                  <li>• Contact form, wholesale enquiry, and support message content.</li>
                  <li>• Technical information such as IP address, browser, device, and website activity where collected by hosting, security, analytics, or similar tools.</li>
                </ul>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Payment information
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Card payments are processed through Stripe. We do not store full
                  card numbers or full card payment details on our website.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  For orders, we may store order details, payment method, payment status, and order reference information so that we can process and support the order.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  How we use your information
                </h2>

                <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
                  <li>• To process, confirm, and fulfil orders.</li>
                  <li>• To send order confirmations, payment instructions, shipping updates, and support emails.</li>
                  <li>• To respond to contact forms, wholesale enquiries, and customer support messages.</li>
                  <li>• To provide order status lookup and help customers with existing orders.</li>
                  <li>• To prevent fraud, abuse, unauthorised activity, or misuse of the website.</li>
                  <li>• To improve website performance, security, customer support, and ordering experience.</li>
                  <li>• To comply with legal, tax, accounting, payment, fraud-prevention, and business record requirements.</li>
                </ul>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Legal bases for processing
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Depending on the situation, we may process personal information
                  under one or more lawful bases, including contract performance,
                  legitimate interests, legal obligations, and consent where
                  required.
                </p>

                <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
                  <li>• Contract performance: to process and fulfil orders.</li>
                  <li>• Legitimate interests: to operate the website, prevent fraud, provide support, and improve services.</li>
                  <li>• Legal obligations: for tax, accounting, compliance, and record-keeping duties.</li>
                  <li>• Consent: where required for optional marketing or non-essential cookies.</li>
                </ul>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Service providers
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We may use trusted service providers to operate the website,
                  process payments, send emails, host the site, manage orders, and
                  provide customer support.
                </p>

                <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
                  <li>• Stripe for secure card payment processing.</li>
                  <li>• Resend or email providers for order, contact, and support emails.</li>
                  <li>• Vercel or hosting providers for website hosting and deployment.</li>
                  <li>• Courier or delivery partners where needed to fulfil orders.</li>
                  <li>• Analytics, security, or technical tools where enabled to maintain and improve the website.</li>
                </ul>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Cookies and technical data
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  The website may use necessary cookies or similar technologies to
                  support core website functionality such as cart behaviour,
                  checkout, security, and site performance.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  If analytics, advertising, or non-essential cookies are enabled,
                  they should be used with appropriate consent controls where
                  required by law.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Order and email communications
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  When you place an order, we may send transactional emails such
                  as order confirmations, payment instructions, order status
                  information, shipping updates, review requests, and support
                  responses.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  These transactional messages are necessary for order processing
                  and customer support. Marketing emails, where used, should only
                  be sent where permitted by law.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Data retention
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We keep personal information only for as long as necessary for
                  the purpose it was collected, including order fulfilment,
                  support, fraud prevention, legal compliance, tax, accounting,
                  and business record purposes.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  International transfers
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Some service providers may process data outside the United
                  Kingdom. Where this happens, appropriate safeguards should be
                  used where required by applicable data protection law.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Your rights
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  Depending on your location and applicable law, you may have
                  rights to access, correct, erase, restrict, object to, or export
                  your personal information.
                </p>

                <p className="mt-3 text-sm leading-7 text-muted">
                  To make a privacy request, contact us using the support email
                  listed below. We may need to verify your identity before acting
                  on a request.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Security
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We use reasonable technical and organisational measures to
                  protect personal information. However, no website, email system,
                  payment system, or online service can be guaranteed to be
                  completely secure.
                </p>
              </div>

              <div className="rounded-xl3 border border-line bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-extrabold tracking-tight text-ink">
                  Changes to this policy
                </h2>

                <p className="mt-3 text-sm leading-7 text-muted">
                  We may update this Privacy Policy from time to time. The version
                  published on this page applies when you access the website, place
                  an order, or contact support.
                </p>
              </div>
            </section>

            <section className="mt-8 rounded-xl3 border border-emerald-200 bg-emerald-50 p-6 shadow-soft">
              <h2 className="text-2xl font-extrabold tracking-tight text-emerald-950">
                Contact us about privacy
              </h2>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-800">
                For privacy questions, data requests, order-related data queries,
                or support enquiries, contact us using the details below.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={`mailto:${brand.supportEmail}`}
                  className="rounded-xl2 bg-emerald-700 px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-emerald-800"
                >
                  Email support
                </a>

                <Link
                  href="/contact"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Contact page
                </Link>

                <Link
                  href="/terms"
                  className="rounded-xl2 border border-emerald-200 bg-white px-5 py-3 text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                >
                  Terms & conditions
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