import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export default function Privacy() {
  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="max-w-3xl rounded-xl2 border border-line bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>

            <div className="mt-8 grid gap-6 text-sm text-muted">
              <section>
                <h2 className="font-extrabold text-ink">What we collect</h2>
                <ul className="mt-2 grid gap-2">
                  <li>• Account and contact details (name, email, address)</li>
                  <li>• Order and payment metadata (not full card details)</li>
                  <li>• Technical data (IP, device, cookies) when enabled</li>
                </ul>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">How we use it</h2>
                <ul className="mt-2 grid gap-2">
                  <li>• To process orders and provide customer support</li>
                  <li>• To prevent fraud and keep the site secure</li>
                  <li>• To improve the website and services</li>
                  <li>• To send marketing if you opt in</li>
                </ul>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">Legal bases (UK GDPR)</h2>
                <p className="mt-2">
                  Depending on context, processing may be based on contract performance, legal obligations, legitimate interests,
                  and/or consent (for marketing/cookies).
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">Cookies</h2>
                <p className="mt-2">
                  If you enable analytics or advertising cookies, add a consent banner and allow users to manage preferences.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">Your rights</h2>
                <p className="mt-2">
                  You may have rights to access, correct, erase, restrict, object, or export your data. Contact {brand.supportEmail}.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
