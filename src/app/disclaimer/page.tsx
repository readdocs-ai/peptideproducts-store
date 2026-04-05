import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { brand } from "@/theme/brand";

export default function Disclaimer() {
  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="max-w-3xl rounded-xl2 border border-line bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-extrabold tracking-tight">Research Use Disclaimer</h1>

            <div className="mt-6 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
  <div className="font-extrabold text-ink">Peptide Products Ltd</div>
  <div>Company No: 17073416</div>
<div>Email: info@peptideproducts.co.uk</div>
              <div>Phone: 07429098887</div>
              <div className="mt-2 font-semibold text-ink">Wholesale enquiries welcome.</div>
</div>

<div className="mt-8 grid gap-6 text-sm text-muted">

              <section>
                <h2 className="font-extrabold text-ink">Research use only</h2>
                <p className="mt-2">
                  All products offered are supplied strictly for laboratory research, analytical, and in&nbsp;vitro use only.
                  They are not intended for human or veterinary use, consumption, diagnosis, treatment, prevention, or clinical applications.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">No guidance for personal use</h2>
                <p className="mt-2">
                  We do not provide advice, instructions, dosing, or usage guidance for personal consumption.
                  Requests for such information are not supported.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">Buyer responsibility & compliance</h2>
                <p className="mt-2">
                  You are responsible for ensuring you are permitted to purchase, possess, import, and use these products in your jurisdiction,
                  and for complying with applicable laws and safety requirements.
                </p>
              </section>

              <section>
  <h2 className="font-extrabold text-ink">All sales final</h2>
  <p className="mt-2">
    Due to the nature of research compounds and chain-of-custody requirements, all sales are final. We do not accept returns,
    refunds, or exchanges, except where required by law or where the item is faulty on arrival.
  </p>
</section>

<section>
  <h2 className="font-extrabold text-ink">Qualified handling</h2>

                <p className="mt-2">
                  Purchasers must be qualified and knowledgeable in the safe handling, storage, and disposal of laboratory chemicals and reagents.
                  Follow appropriate lab PPE and handling standards at all times.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">No warranties; limitation of liability</h2>
                <p className="mt-2">
                  Product information is provided for general reference and may not cover every possible application.
                  To the fullest extent permitted by law, we disclaim warranties and limit liability for misuse, improper handling, or unlawful use.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">Age restriction</h2>
                <p className="mt-2">
                  You must be 18+ to access and purchase from this site.
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
