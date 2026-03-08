import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
export default function Page() {
  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="max-w-3xl rounded-xl3 border border-line bg-paper/85 p-8 shadow-soft backdrop-blur">
            <h1 className="text-3xl font-extrabold tracking-tight">FAQ</h1>
            <div className="mt-6 grid gap-4 text-sm text-slate">
              <>
  <div className="rounded-xl2 bg-mist p-5 border border-line">
    <div className="font-extrabold text-ink">Are these products for human use?</div>
    <div className="mt-2">No. Products are supplied strictly for laboratory research purposes only and are not for human or veterinary use.</div>
  </div>
  <div className="rounded-xl2 bg-mist p-5 border border-line">
    <div className="font-extrabold text-ink">Do you accept returns?</div>
    <div className="mt-2">This starter uses demo policies. Replace with your final shipping/returns policy before launch.</div>
  </div>
  <div className="rounded-xl2 bg-mist p-5 border border-line">
    <div className="font-extrabold text-ink">Is checkout live?</div>
    <div className="mt-2">Checkout is a demo placeholder. Add Stripe/Shopify to take real payments.</div>
  </div>
</>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
