import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export default function Terms() {
  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="max-w-3xl rounded-xl2 border border-line bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-extrabold tracking-tight">Terms & Conditions</h1>

            <div className="mt-6 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
  <div className="font-extrabold text-ink">Peptide Products Ltd</div>
  <div>Company No: 17073416</div>
<div>Email: info@peptideproducts.co.uk</div>
              <div>Phone: 07429098887</div>
              <div className="mt-2 font-semibold text-ink">Wholesale enquiries welcome.</div>
</div>

<div className="mt-8 grid gap-6 text-sm text-muted">

              <section>
                <h2 className="font-extrabold text-ink">1. Research-only products</h2>
                <p className="mt-2">
                  All products are supplied strictly for laboratory research use only and are not medicines, food, cosmetics, supplements,
                  or medical devices. They are not intended for human or veterinary use.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">2. Eligibility</h2>
                <p className="mt-2">
                  You must be 18+ and capable of forming a legally binding contract to purchase. You confirm you have the knowledge and facilities
                  to handle laboratory materials safely.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">3. Compliance & lawful use</h2>
                <p className="mt-2">
                  You are responsible for compliance with all applicable laws and regulations (including import/export rules) and for ensuring
                  the products are used only for legitimate research purposes.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">4. Orders, pricing & payment</h2>
                <p className="mt-2">
                  Orders are subject to acceptance and stock availability. Prices may change. Payment must be received before dispatch.
                </p>
              </section>

              <section>
  <h2 className="font-extrabold text-ink">5. Delivery & returns</h2>
  <p className="mt-2">
    Delivery terms (including pricing) are set out on the Delivery, Returns & Cancellations page.
    <span className="font-semibold text-ink"> All sales are final — no returns or refunds</span>, except where required by law
    or where goods are faulty on arrival.
  </p>
</section>


              <section>
                <h2 className="font-extrabold text-ink">6. Disclaimers, limitation of liability</h2>
                <p className="mt-2">
                  Website content is provided for general information and may not cover all applications. To the fullest extent permitted by law,
                  we disclaim warranties and limit liability for indirect losses and misuse.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">7. Indemnity</h2>
                <p className="mt-2">
                  You agree to indemnify us against claims arising from unlawful purchase, misuse, improper handling, or breach of these terms.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">8. Governing law</h2>
                <p className="mt-2">
                  These terms are governed by the laws of England and Wales (template).
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
