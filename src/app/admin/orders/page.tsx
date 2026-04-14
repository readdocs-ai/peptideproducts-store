import Link from "next/link";
import { getRecentOrders, isKvConfigured } from "@/lib/orders";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { PaymentMethodBadge } from "@/components/admin/PaymentMethodBadge";
import { OrderStatusControls } from "@/components/admin/OrderStatusControls";

function formatDate(value: string | number) {
  const date = new Date(value);
  return date.toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function formatCountry(code: string) {
  const countries: Record<string, string> = {
    GB: "United Kingdom",
    US: "United States",
    CA: "Canada",
    AU: "Australia",
    NZ: "New Zealand",
    IE: "Ireland",
    DE: "Germany",
    FR: "France",
    ES: "Spain",
    IT: "Italy",
    NL: "Netherlands",
    BE: "Belgium",
    SE: "Sweden",
    NO: "Norway",
    DK: "Denmark",
    CH: "Switzerland",
    AT: "Austria",
    PT: "Portugal",
  };

  return countries[code] || code;
}

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams?: { limit?: string };
}) {
  const limit = Math.max(20, Number(searchParams?.limit || 20));
  const orders = isKvConfigured() ? await getRecentOrders(limit) : [];
  const nextLimit = limit + 20;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">Admin Orders</h1>
          <p className="mt-2 text-sm text-muted">
            Review orders, payment method, customer delivery details, and shipping progress.
          </p>
        </div>
      </div>

      {!isKvConfigured() ? (
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="text-lg font-extrabold text-ink">Redis is not configured</div>
          <div className="mt-2 text-sm text-muted">
            Add REDIS_URL to your environment variables to view orders.
          </div>
        </div>
      ) : orders.length === 0 ? (
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="text-lg font-extrabold text-ink">No orders yet</div>
          <div className="mt-2 text-sm text-muted">
            Orders will appear here once customers place them.
          </div>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft"
              >
                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-lg font-extrabold text-ink">{order.id}</div>
                      <StatusBadge status={order.status} />
                      <PaymentMethodBadge paymentMethod={order.paymentMethod} />
                    </div>

                    <div className="mt-2 text-sm text-muted">{formatDate(order.createdAt)}</div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Customer
                        </div>
                        <div className="mt-2 text-sm font-extrabold text-ink">{order.name}</div>
                        <div className="mt-1 text-sm text-muted">{order.email}</div>
                      </div>

                      <div className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Order Summary
                        </div>
                        <div className="mt-2 text-sm text-ink">
                          <span className="font-extrabold">Total:</span> {formatGBP(order.total)}
                        </div>
                        <div className="mt-1 text-sm text-ink">
                          <span className="font-extrabold">Subtotal:</span> {formatGBP(order.subtotal)}
                        </div>
                        <div className="mt-1 text-sm text-ink">
                          <span className="font-extrabold">Shipping:</span>{" "}
                          {order.shipping > 0 ? formatGBP(order.shipping) : "Free"}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Shipping Region
                        </div>
                        <div className="mt-2 text-sm font-extrabold text-ink">
                          {order.shippingRegion}
                        </div>
                      </div>

                      <div className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Shipping Address
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-ink">
                          <div>{order.shippingAddress?.line1 || "—"}</div>
                          {order.shippingAddress?.line2 ? (
                            <div>{order.shippingAddress.line2}</div>
                          ) : null}
                          <div>
                            {[order.shippingAddress?.city, order.shippingAddress?.state]
                              .filter(Boolean)
                              .join(", ") || "—"}
                          </div>
                          <div>{order.shippingAddress?.postalCode || "—"}</div>
                          <div>
                            {order.shippingAddress?.country
                              ? formatCountry(order.shippingAddress.country)
                              : "—"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl2 border border-line bg-panel p-4">
                      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                        Items
                      </div>
                      <div className="mt-3 space-y-3">
                        {order.items.map((item, index) => (
                          <div
                            key={`${order.id}-${item.id}-${index}`}
                            className="rounded-xl2 border border-line bg-white p-3"
                          >
                            <div className="text-sm font-extrabold text-ink">{item.name}</div>
                            <div className="mt-1 text-sm text-muted">
                              Qty {item.qty} — {formatGBP(item.priceGBP * item.qty)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 grid gap-2 text-sm text-muted">
                      {order.paidAt ? (
                        <div>
                          <span className="font-extrabold text-ink">Paid:</span>{" "}
                          {formatDate(order.paidAt)}
                        </div>
                      ) : null}

                      {order.shippedAt ? (
                        <div>
                          <span className="font-extrabold text-ink">Shipped:</span>{" "}
                          {formatDate(order.shippedAt)}
                        </div>
                      ) : null}

                      {order.trackingNumber ? (
                        <div>
                          <span className="font-extrabold text-ink">Tracking:</span>{" "}
                          {order.trackingNumber}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="rounded-xl2 border border-line bg-panel p-4">
                    <div className="text-sm font-extrabold text-ink">Actions</div>
                    <div className="mt-4">
                      <OrderStatusControls order={order} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={`/admin/orders?limit=${nextLimit}`}
              className="inline-flex rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
            >
              Load more orders
            </Link>
          </div>
        </>
      )}
    </main>
  );
}