import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function ShippingPage() {
  return (
    <div>
      <Header />
      <main className="py-12">
        <Container>
          <div className="max-w-3xl rounded-xl2 border border-line bg-white p-8 shadow-soft">
            <h1 className="text-3xl font-extrabold tracking-tight">Delivery, Returns &amp; Cancellations</h1>
            <p className="mt-3 text-sm text-muted">
              Shipping and returns policy for research-only goods.
            </p>

            <div className="mt-8 grid gap-6 text-sm text-muted">
              <section>
                <h2 className="font-extrabold text-ink">Shipping prices</h2>
                <div className="mt-3 overflow-hidden rounded-xl2 border border-line bg-white">
                  <div className="grid grid-cols-3 gap-0 text-sm">
                    <div className="border-b border-line bg-panel px-4 py-3 font-extrabold text-ink">Region</div>
                    <div className="border-b border-line bg-panel px-4 py-3 font-extrabold text-ink">Price</div>
                    <div className="border-b border-line bg-panel px-4 py-3 font-extrabold text-ink">Notes</div>

                    <div className="border-b border-line px-4 py-3">United Kingdom</div>
                    <div className="border-b border-line px-4 py-3 font-semibold text-ink">Free</div>
                    <div className="border-b border-line px-4 py-3">Tracked service where available</div>

                    <div className="px-4 py-3">International</div>
                    <div className="px-4 py-3 font-semibold text-ink">GBP 25.00</div>
                    <div className="px-4 py-3">Customs may apply depending on destination</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">All sales final</h2>
                <p className="mt-2">
                  Due to the nature of research compounds and chain-of-custody requirements, all sales are final.
                  We do not accept returns, refunds, or exchanges, except where required by law or where goods are faulty on arrival.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">Dispatch &amp; tracking</h2>
                <p className="mt-2">
                  Orders are typically dispatched after payment confirmation. Tracking is provided when available.
                  Delivery times are estimates and can be affected by courier delays.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">International customs</h2>
                <p className="mt-2">
                  International orders may be inspected by customs. The buyer is responsible for local import requirements and any associated risks.
                </p>
              </section>

              <section>
                <h2 className="font-extrabold text-ink">Cancellations</h2>
                <p className="mt-2">
                  If you need to cancel, contact us immediately. Once an order has been packed or dispatched, cancellation may not be possible.
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
