import Link from "next/link";
import { getRecentOrders, isKvConfigured, listOrders } from "@/lib/orders";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { PaymentMethodBadge } from "@/components/admin/PaymentMethodBadge";
import { OrderStatusControls } from "@/components/admin/OrderStatusControls";
import { AdminOrderAlerts } from "@/components/admin/AdminOrderAlerts";

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

function normaliseSearch(value?: string) {
  return (value || "").trim();
}

function orderMatchesSearch(
  order: Awaited<ReturnType<typeof listOrders>>[number],
  query: string,
) {
  const q = query.toLowerCase();

  if (!q) return true;

  const searchable = [
    order.id,
    order.name,
    order.email,
    order.phone,
    order.status,
    order.paymentMethod,
    order.trackingNumber || "",
    order.royalMailOrderIdentifier?.toString() || "",
    order.royalMailStatus || "",
    order.stripeSessionId || "",
    order.shippingAddress?.name || "",
    order.shippingAddress?.line1 || "",
    order.shippingAddress?.line2 || "",
    order.shippingAddress?.city || "",
    order.shippingAddress?.state || "",
    order.shippingAddress?.postalCode || "",
    order.shippingAddress?.country || "",
    ...order.items.map((item) => `${item.name} ${item.id}`),
  ];

  return searchable.some((value) => value.toLowerCase().includes(q));
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
    SA: "Saudi Arabia",
    AE: "United Arab Emirates",
  };

  return countries[code] || code || "—";
}

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams?: { limit?: string; q?: string; status?: string };
}) {
  const limit = Math.max(20, Number(searchParams?.limit || 20));
  const searchQuery = normaliseSearch(searchParams?.q);
  const statusFilter = normaliseSearch(searchParams?.status).toLowerCase();
  const allOrders = isKvConfigured()
    ? searchQuery
      ? await listOrders(500)
      : await getRecentOrders(limit)
    : [];
  const searchedOrders = searchQuery
    ? allOrders.filter((order) => orderMatchesSearch(order, searchQuery))
    : allOrders;
  const orders = statusFilter
    ? searchedOrders.filter((order) => {
        if (statusFilter === "awaiting-dispatch") {
          return order.status === "paid" && !order.trackingNumber;
        }
        if (statusFilter === "ready-to-ship") {
          return order.status === "paid" && Boolean(order.trackingNumber);
        }
        return order.status === statusFilter;
      })
    : searchedOrders;

  const dashboardOrders = searchQuery ? searchedOrders : allOrders;
  const awaitingDispatch = dashboardOrders.filter(
    (order) => order.status === "paid" && !order.trackingNumber,
  ).length;
  const readyToShip = dashboardOrders.filter(
    (order) => order.status === "paid" && Boolean(order.trackingNumber),
  ).length;
  const shippedCount = dashboardOrders.filter((order) => order.status === "shipped").length;
  const paidRevenue = dashboardOrders
    .filter((order) => order.status === "paid" || order.status === "shipped")
    .reduce((sum, order) => sum + order.total, 0);
  const latestOrderId = allOrders[0]?.id || "";
  const nextLimit = limit + 20;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-6">
            <AdminOrderAlerts latestOrderId={latestOrderId} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">
            Admin Orders
          </h1>
          <p className="mt-2 text-sm text-muted">
            Review orders, payment method, customer contact details, delivery
            address, and shipping progress.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin"
            className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
          >
            Admin home
          </Link>

          <Link
            href="/admin/customers"
            className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
          >
            Customer database
          </Link>
        </div>
      </div>

      <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Link href="/admin/orders?status=awaiting-dispatch" className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 shadow-soft transition hover:-translate-y-0.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-amber-800">Awaiting dispatch</div>
          <div className="mt-2 text-3xl font-black text-amber-950">{awaitingDispatch}</div>
          <div className="mt-1 text-sm text-amber-800">Paid, not yet labelled</div>
        </Link>
        <Link href="/admin/orders?status=ready-to-ship" className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 shadow-soft transition hover:-translate-y-0.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-emerald-800">Tracking ready</div>
          <div className="mt-2 text-3xl font-black text-emerald-950">{readyToShip}</div>
          <div className="mt-1 text-sm text-emerald-800">Ready to mark shipped</div>
        </Link>
        <Link href="/admin/orders?status=shipped" className="rounded-[1.5rem] border border-blue-200 bg-blue-50 p-5 shadow-soft transition hover:-translate-y-0.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-blue-800">Shipped</div>
          <div className="mt-2 text-3xl font-black text-blue-950">{shippedCount}</div>
          <div className="mt-1 text-sm text-blue-800">Completed fulfilments</div>
        </Link>
        <div className="rounded-[1.5rem] border border-purple-200 bg-purple-50 p-5 shadow-soft">
          <div className="text-xs font-extrabold uppercase tracking-wide text-purple-800">Paid revenue shown</div>
          <div className="mt-2 text-3xl font-black text-purple-950">{formatGBP(paidRevenue)}</div>
          <div className="mt-1 text-sm text-purple-800">Within loaded orders</div>
        </div>
      </section>

      <div className="mb-6 flex flex-wrap gap-2">
        {[
          ["", "All orders"],
          ["awaiting-dispatch", "Awaiting dispatch"],
          ["ready-to-ship", "Tracking ready"],
          ["paid", "Paid"],
          ["pending", "Pending"],
          ["shipped", "Shipped"],
          ["cancelled", "Cancelled"],
        ].map(([value, label]) => (
          <Link
            key={value || "all"}
            href={`/admin/orders${value ? `?status=${value}` : ""}`}
            className={
              "rounded-full border px-4 py-2 text-sm font-extrabold shadow-soft " +
              (statusFilter === value
                ? "border-accent bg-accent text-white"
                : "border-line bg-white text-ink hover:bg-panel")
            }
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="mb-6 rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
        <form
          className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_auto]"
          action="/admin/orders"
        >
          <label className="block">
            <span className="text-xs font-extrabold uppercase tracking-wide text-muted">
              Search orders
            </span>
            <input
              name="q"
              defaultValue={searchQuery}
              placeholder="Order number, customer email, name, tracking, postcode or product"
              className="mt-2 w-full rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-accent focus:bg-white"
            />
          </label>
          <input type="hidden" name="limit" value={limit} />
          {statusFilter ? <input type="hidden" name="status" value={statusFilter} /> : null}
          <button
            type="submit"
            className="self-end rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
          >
            Search
          </button>
          {searchQuery ? (
            <Link
              href={statusFilter ? `/admin/orders?status=${statusFilter}` : "/admin/orders"}
              className="self-end rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
            >
              Clear
            </Link>
          ) : null}
        </form>
        {searchQuery ? (
          <p className="mt-3 text-sm text-muted">
            Showing {orders.length} result{orders.length === 1 ? "" : "s"} for
            <span className="font-extrabold text-ink"> {searchQuery}</span>.
          </p>
        ) : (
          <p className="mt-3 text-sm text-muted">
            Search by order number, customer email, name, phone, tracking
            number, postcode, Stripe session or product name.
          </p>
        )}
      </div>
      {!isKvConfigured() ? (
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="text-lg font-extrabold text-ink">
            Redis is not configured
          </div>
          <div className="mt-2 text-sm text-muted">
            Add REDIS_URL to your environment variables to view orders.
          </div>
        </div>
      ) : orders.length === 0 ? (
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="text-lg font-extrabold text-ink">
            {searchQuery ? "No matching orders found" : "No orders yet"}
          </div>
          <div className="mt-2 text-sm text-muted">
            {searchQuery
              ? "Try the full order number, email address, customer name, postcode or tracking number."
              : "Orders will appear here once customers place them."}
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
                      <div className="text-lg font-extrabold text-ink">
                        {order.id}
                      </div>
                      <StatusBadge status={order.status} />
                      <PaymentMethodBadge paymentMethod={order.paymentMethod} />
                    </div>

                    <div className="mt-2 text-sm text-muted">
                      {formatDate(order.createdAt)}
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Customer
                        </div>
                        <div className="mt-2 text-sm font-extrabold text-ink">
                          {order.name || "—"}
                        </div>
                        <div className="mt-1 text-sm text-muted">
                          {order.email || "—"}
                        </div>
                        <div className="mt-1 text-sm text-muted">
                          {order.phone ? order.phone : "Phone not provided"}
                        </div>
                        <div
                          className={
                            "mt-3 inline-flex rounded-full px-3 py-1 text-xs font-extrabold " +
                            (order.marketingOptIn
                              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border border-line bg-white text-muted")
                          }
                        >
                          {order.marketingOptIn
                            ? "Opted in for updates"
                            : "No marketing opt-in"}
                        </div>
                      </div>

                      <div className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Order Summary
                        </div>
                        <div className="mt-2 text-sm text-ink">
                          <span className="font-extrabold">Total:</span>{" "}
                          {formatGBP(order.total)}
                        </div>
                        <div className="mt-1 text-sm text-ink">
                          <span className="font-extrabold">Subtotal:</span>{" "}
                          {formatGBP(order.subtotal)}
                        </div>
                        <div className="mt-1 text-sm text-ink">
                          <span className="font-extrabold">Shipping:</span>{" "}
                          {order.shipping > 0
                            ? formatGBP(order.shipping)
                            : "Free"}
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
                        <div className="mt-1 text-sm text-muted">
                          {formatCountry(order.shippingAddress?.country || "")}
                        </div>
                      </div>

                      <div className="rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Final Shipping Address
                        </div>
                        <div className="mt-2 space-y-1 text-sm text-ink">
                          {order.shippingAddress?.name ? (
                            <div className="font-extrabold">
                              {order.shippingAddress.name}
                            </div>
                          ) : null}

                          <div>{order.shippingAddress?.line1 || "—"}</div>

                          {order.shippingAddress?.line2 ? (
                            <div>{order.shippingAddress.line2}</div>
                          ) : null}

                          <div>
                            {[
                              order.shippingAddress?.city,
                              order.shippingAddress?.state,
                            ]
                              .filter(Boolean)
                              .join(", ") || "—"}
                          </div>

                          <div>{order.shippingAddress?.postalCode || "—"}</div>

                          <div>
                            {formatCountry(
                              order.shippingAddress?.country || "",
                            )}
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
                            <div className="text-sm font-extrabold text-ink">
                              {item.name}
                            </div>
                            <div className="mt-1 text-sm text-muted">
                              Qty {item.qty} —{" "}
                              {formatGBP(item.priceGBP * item.qty)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {order.refundedAmount > 0 ||
                    order.adjustedTotal !== null ||
                    order.adminNote ? (
                      <div className="mt-5 rounded-xl2 border border-amber-200 bg-amber-50 p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-amber-800">
                          Manual adjustment record
                        </div>

                        <div className="mt-3 grid gap-2 text-sm text-amber-900">
                          {order.refundedAmount > 0 ? (
                            <div>
                              <span className="font-extrabold">
                                Refund recorded:
                              </span>{" "}
                              {formatGBP(order.refundedAmount)}
                            </div>
                          ) : null}

                          {order.adjustedTotal !== null ? (
                            <div>
                              <span className="font-extrabold">
                                Adjusted total:
                              </span>{" "}
                              {formatGBP(order.adjustedTotal)}
                            </div>
                          ) : null}

                          {order.adminNote ? (
                            <div>
                              <span className="font-extrabold">Note:</span>{" "}
                              {order.adminNote}
                            </div>
                          ) : null}

                          {order.cancelledAt ? (
                            <div>
                              <span className="font-extrabold">Cancelled:</span>{" "}
                              {formatDate(order.cancelledAt)}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    <div className="mt-5 grid gap-2 text-sm text-muted">
                      {order.paidAt ? (
                        <div>
                          <span className="font-extrabold text-ink">Paid:</span>{" "}
                          {formatDate(order.paidAt)}
                        </div>
                      ) : null}

                      {order.shippedAt ? (
                        <div>
                          <span className="font-extrabold text-ink">
                            Shipped:
                          </span>{" "}
                          {formatDate(order.shippedAt)}
                        </div>
                      ) : null}

                      {order.trackingNumber ? (
                        <div>
                          <span className="font-extrabold text-ink">
                            Tracking:
                          </span>{" "}
                          {order.trackingNumber}
                        </div>
                      ) : null}

                      {order.stripeSessionId ? (
                        <div>
                          <span className="font-extrabold text-ink">
                            Stripe session:
                          </span>{" "}
                          {order.stripeSessionId}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="rounded-xl2 border border-line bg-panel p-4">
                    <div className="text-sm font-extrabold text-ink">
                      Actions
                    </div>
                    <div className="mt-4">
                      <OrderStatusControls order={order} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!searchQuery ? (
            <div className="mt-8 flex justify-center">
              <Link
                href={`/admin/orders?limit=${nextLimit}`}
                className="inline-flex rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
              >
                Load more orders
              </Link>
            </div>
          ) : null}
        </>
      )}
    </main>
  );
}
