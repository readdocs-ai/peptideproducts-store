import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { getRecentOrders, isKvConfigured } from "@/lib/orders";
import { OrderStatusControls } from "@/components/admin/OrderStatusControls";
import { StatusBadge } from "@/components/admin/StatusBadge";

export const dynamic = "force-dynamic";

function formatGBP(n: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(n);
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminOrdersPage() {
  const redisReady = isKvConfigured();
  const orders = redisReady ? await getRecentOrders(100) : [];

  return (
    <div>
      <Header />

      <main className="py-12">
        <Container>
          <div className="rounded-xl2 border border-line bg-white p-8 shadow-soft">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Order Dashboard
                </h1>
                <p className="mt-2 text-sm text-muted">
                  Review recent orders and update payment and shipping status.
                </p>
              </div>

              <div className="rounded-xl2 border border-line bg-panel px-4 py-2 text-sm font-semibold text-ink">
                {orders.length} order{orders.length === 1 ? "" : "s"}
              </div>
            </div>

            {!redisReady ? (
              <div className="mt-8 rounded-xl2 border border-line bg-panel p-6 text-sm text-muted">
                <div className="font-extrabold text-ink">
                  Redis is not configured yet
                </div>
                <div className="mt-2">
                  Make sure your Vercel project has this environment variable:
                </div>
                <div className="mt-3 rounded-xl2 border border-line bg-white p-4 font-mono text-xs text-ink">
                  REDIS_URL
                </div>
              </div>
            ) : orders.length === 0 ? (
              <div className="mt-8 rounded-xl2 border border-line bg-panel p-6 text-sm text-muted">
                No orders yet.
              </div>
            ) : (
              <div className="mt-8 grid gap-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-xl2 border border-line bg-white p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="text-lg font-extrabold">{order.id}</div>
                        <div className="mt-1 text-sm text-muted">
                          {formatDate(order.createdAt)}
                        </div>
                      </div>

                      <StatusBadge status={order.status} />
                    </div>

                    <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                      <div>
                        <div className="grid gap-6 lg:grid-cols-3">
                          <div>
                            <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                              Customer
                            </div>
                            <div className="mt-2 text-sm text-ink">
                              {order.customerName}
                            </div>
                            <div className="mt-1 text-sm text-muted">
                              {order.customerEmail}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                              Shipping
                            </div>
                            <div className="mt-2 text-sm text-ink">
                              {order.shippingRegion === "UK"
                                ? "United Kingdom"
                                : "International"}
                            </div>
                            <div className="mt-1 text-sm text-muted">
                              Shipping: {formatGBP(order.shipping)}
                            </div>
                            {order.trackingNumber ? (
                              <div className="mt-1 text-sm text-muted">
                                Tracking:{" "}
                                <span className="font-semibold text-ink">
                                  {order.trackingNumber}
                                </span>
                              </div>
                            ) : null}
                          </div>

                          <div>
                            <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                              Totals
                            </div>
                            <div className="mt-2 text-sm text-muted">
                              Subtotal:{" "}
                              <span className="font-semibold text-ink">
                                {formatGBP(order.subtotal)}
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-muted">
                              Total:{" "}
                              <span className="font-semibold text-ink">
                                {formatGBP(order.total)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                              Paid at
                            </div>
                            <div className="mt-2 font-semibold text-ink">
                              {order.paidAt ? formatDate(order.paidAt) : "Not paid yet"}
                            </div>
                          </div>

                          <div className="rounded-xl2 border border-line bg-panel px-4 py-3 text-sm">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                              Shipped at
                            </div>
                            <div className="mt-2 font-semibold text-ink">
                              {order.shippedAt ? formatDate(order.shippedAt) : "Not shipped yet"}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                            Items
                          </div>

                          <div className="mt-3 grid gap-2">
                            {order.items.map((item) => (
                              <div
                                key={`${order.id}-${item.id}`}
                                className="flex items-center justify-between rounded-xl2 border border-line bg-panel px-4 py-3 text-sm"
                              >
                                <span className="text-ink">
                                  {item.name} × {item.qty}
                                </span>
                                <span className="font-semibold text-ink">
                                  {formatGBP(item.priceGBP * item.qty)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <OrderStatusControls order={order} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
