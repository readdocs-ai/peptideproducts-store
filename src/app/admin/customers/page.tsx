import Link from "next/link";
import { isKvConfigured, listOrders, StoredOrder } from "@/lib/orders";
import { CustomerReviewEmailButton } from "@/components/admin/CustomerReviewEmailButton";

type CustomerAddress = {
  name?: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type CustomerRecord = {
  name: string;
  email: string;
  phone: string;
  country: string;
  address: CustomerAddress;
  lastOrderDate: string;
  totalOrders: number;
  totalSpend: number;
  products: string[];
  marketingOptIn: boolean;
};

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
    SA: "Saudi Arabia",
    AE: "United Arab Emirates",
  };

  return countries[code] || code || "—";
}

function formatCustomerAddress(address: CustomerAddress) {
  const parts = [
    address.name,
    address.line1,
    address.line2,
    [address.city, address.state].filter(Boolean).join(", "),
    address.postalCode,
    formatCountry(address.country),
  ].filter(Boolean);

  return parts.length ? parts : ["—"];
}

function getWhatsAppNumber(phone: string) {
  return String(phone || "").replace(/\D/g, "");
}

function getReviewRequestMessage() {
  return [
    "Hi, just checking your order arrived safely.",
    "",
    "If everything was okay with the ordering process, delivery, packaging, and support, we would really appreciate a quick review when you have a moment.",
    "",
    "Please only comment on your shopping experience, delivery, packaging, and customer service.",
    "",
    "Thank you again for your order.",
    "",
    "Write your review here:",
    "https://www.peptideproducts.co.uk/reviews/submit",
  ].join("\n");
}

function getReviewWhatsAppHref(phone: string) {
  const number = getWhatsAppNumber(phone);

  return `https://wa.me/${number}?text=${encodeURIComponent(
    getReviewRequestMessage()
  )}`;
}

function buildCustomerList(orders: StoredOrder[]) {
  const customers = new Map<string, CustomerRecord>();

  for (const order of orders) {
    const emailKey = order.email.trim().toLowerCase();

    if (!emailKey) continue;

    const existing = customers.get(emailKey);
    const orderProducts = order.items.map((item) => item.name);
    const country = formatCountry(order.shippingAddress?.country || "");

    const address: CustomerAddress = {
      name: order.shippingAddress?.name || "",
      line1: order.shippingAddress?.line1 || "",
      line2: order.shippingAddress?.line2 || "",
      city: order.shippingAddress?.city || "",
      state: order.shippingAddress?.state || "",
      postalCode: order.shippingAddress?.postalCode || "",
      country: order.shippingAddress?.country || "",
    };

    if (!existing) {
      customers.set(emailKey, {
        name: order.name || "—",
        email: order.email,
        phone: order.phone || "",
        country,
        address,
        lastOrderDate: order.createdAt,
        totalOrders: 1,
        totalSpend: order.total || 0,
        products: orderProducts,
        marketingOptIn: order.marketingOptIn === true,
      });

      continue;
    }

    const existingLastOrderTime = new Date(existing.lastOrderDate).getTime();
    const currentOrderTime = new Date(order.createdAt).getTime();
    const isLatestOrder = currentOrderTime >= existingLastOrderTime;

    customers.set(emailKey, {
      ...existing,
      name: order.name || existing.name,
      phone: order.phone || existing.phone,
      country: isLatestOrder ? country : existing.country,
      address: isLatestOrder ? address : existing.address,
      lastOrderDate: isLatestOrder ? order.createdAt : existing.lastOrderDate,
      totalOrders: existing.totalOrders + 1,
      totalSpend: existing.totalSpend + (order.total || 0),
      products: Array.from(new Set([...existing.products, ...orderProducts])),
      marketingOptIn: existing.marketingOptIn || order.marketingOptIn === true,
    });
  }

  return Array.from(customers.values()).sort(
    (a, b) =>
      new Date(b.lastOrderDate).getTime() - new Date(a.lastOrderDate).getTime()
  );
}

export default async function AdminCustomersPage({
  searchParams,
}: {
  searchParams?: { limit?: string; q?: string };
}) {
  const limit = Math.max(100, Number(searchParams?.limit || 500));
  const query = (searchParams?.q || "").trim().toLowerCase();
  const orders = isKvConfigured() ? await listOrders(Math.min(limit, 2000)) : [];
  const genuineOrders = orders.filter((order) => order.status === "paid" || order.status === "shipped");
  const allCustomers = buildCustomerList(genuineOrders);
  const customers = query
    ? allCustomers.filter((customer) =>
        [customer.name, customer.email, customer.phone, customer.country, customer.address.postalCode, ...customer.products]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
    : allCustomers;
  const optedInCustomers = allCustomers.filter((customer) => customer.marketingOptIn);
  const returningCustomers = allCustomers.filter((customer) => customer.totalOrders > 1);
  const nextLimit = Math.min(2000, limit + 500);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">
            Customer Database
          </h1>
          <p className="mt-2 text-sm text-muted">
            View customers built from order history, including contact details,
            spend, products ordered, latest shipping address, country, and update
            opt-in status.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin"
            className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/orders"
            className="rounded-xl2 border border-line bg-white px-5 py-3 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
          >
            Back to orders
          </Link>

          <a
            href="/admin/customers/export"
            className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
          >
            Download CSV
          </a>
        </div>
      </div>

      <div className="mb-6 rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
        <form action="/admin/customers" className="flex flex-col gap-3 sm:flex-row">
          <input
            name="q"
            defaultValue={searchParams?.q || ""}
            placeholder="Search name, email, phone, postcode or product"
            className="min-w-0 flex-1 rounded-xl2 border border-line bg-panel px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-accent focus:bg-white"
          />
          <button type="submit" className="rounded-xl2 bg-accent px-5 py-3 text-sm font-extrabold text-white shadow-soft">Search customers</button>
          {query ? <Link href="/admin/customers" className="rounded-xl2 border border-line bg-white px-5 py-3 text-center text-sm font-extrabold text-ink">Clear</Link> : null}
        </form>
      </div>

      {!isKvConfigured() ? (
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="text-lg font-extrabold text-ink">
            Redis is not configured
          </div>
          <div className="mt-2 text-sm text-muted">
            Add REDIS_URL to your environment variables to view customers.
          </div>
        </div>
      ) : customers.length === 0 ? (
        <div className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft">
          <div className="text-lg font-extrabold text-ink">No customers yet</div>
          <div className="mt-2 text-sm text-muted">
            Customers will appear here once orders are placed.
          </div>
        </div>
      ) : (
        <>
          <section className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft">
              <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                Customers
              </div>
              <div className="mt-2 text-3xl font-extrabold text-ink">
                {customers.length}
              </div>
            </div>

            <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft">
              <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                Returning customers
              </div>
              <div className="mt-2 text-3xl font-extrabold text-ink">
                {returningCustomers.length}
              </div>
            </div>

            <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft">
              <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                Opted in
              </div>
              <div className="mt-2 text-3xl font-extrabold text-ink">
                {optedInCustomers.length}
              </div>
            </div>

            <div className="rounded-xl3 border border-line bg-white p-5 shadow-soft">
              <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                Total customer value shown
              </div>
              <div className="mt-2 text-3xl font-extrabold text-ink">
                {formatGBP(
                  customers.reduce((sum, customer) => sum + customer.totalSpend, 0)
                )}
              </div>
            </div>
          </section>

          <div className="space-y-5">
            {customers.map((customer) => {
              const whatsappNumber = getWhatsAppNumber(customer.phone);

              return (
                <div
                  key={customer.email}
                  className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft"
                >
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="text-lg font-extrabold text-ink">
                          {customer.name}
                        </div>

                        <div
                          className={
                            "rounded-full px-3 py-1 text-xs font-extrabold " +
                            (customer.marketingOptIn
                              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border border-line bg-panel text-muted")
                          }
                        >
                          {customer.marketingOptIn
                            ? "Opted in for updates"
                            : "No marketing opt-in"}
                        </div>
                        {customer.totalOrders > 1 ? (
                          <div className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-extrabold text-purple-800">
                            Returning customer
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl2 border border-line bg-panel p-4">
                          <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                            Contact
                          </div>
                          <div className="mt-2 text-sm text-ink">
                            <span className="font-extrabold">Email:</span>{" "}
                            {customer.email || "—"}
                          </div>
                          <div className="mt-1 text-sm text-ink">
                            <span className="font-extrabold">Phone:</span>{" "}
                            {customer.phone || "Phone not provided"}
                          </div>
                          <div className="mt-1 text-sm text-ink">
                            <span className="font-extrabold">Country:</span>{" "}
                            {customer.country}
                          </div>

                          <div className="mt-3 rounded-xl2 border border-line bg-white p-3">
                            <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                              Latest shipping address
                            </div>

                            <div className="mt-2 space-y-1 text-sm text-ink">
                              {formatCustomerAddress(customer.address).map(
                                (line, index) => (
                                  <div key={`${customer.email}-address-${index}`}>
                                    {line}
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="rounded-xl2 border border-line bg-panel p-4">
                          <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                            Customer value
                          </div>
                          <div className="mt-2 text-sm text-ink">
                            <span className="font-extrabold">Orders:</span>{" "}
                            {customer.totalOrders}
                          </div>
                          <div className="mt-1 text-sm text-ink">
                            <span className="font-extrabold">Total spend:</span>{" "}
                            {formatGBP(customer.totalSpend)}
                          </div>
                          <div className="mt-1 text-sm text-ink">
                            <span className="font-extrabold">Last order:</span>{" "}
                            {formatDate(customer.lastOrderDate)}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-xl2 border border-line bg-panel p-4">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
                          Products ordered
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {customer.products.map((product) => (
                            <span
                              key={`${customer.email}-${product}`}
                              className="rounded-full border border-line bg-white px-3 py-1 text-xs font-extrabold text-ink"
                            >
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl2 border border-line bg-panel p-4">
                      <div className="text-sm font-extrabold text-ink">
                        Quick actions
                      </div>

                      <div className="mt-4 grid gap-3">
                       <div className="rounded-xl2 border border-line bg-white px-4 py-3 text-center text-sm font-semibold text-muted">
  <div className="text-xs font-extrabold uppercase tracking-wide text-muted">
    Customer email
  </div>
  <div className="mt-1 break-words text-ink">{customer.email}</div>
</div>

                        {whatsappNumber.length >= 8 ? (
                          <>
                            <a
                              href={`https://wa.me/${whatsappNumber}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl2 border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-extrabold text-emerald-900 shadow-soft hover:bg-emerald-100"
                            >
                              WhatsApp customer
                            </a>

                            <a
                              href={getReviewWhatsAppHref(customer.phone)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-xl2 border border-amber-200 bg-amber-50 px-4 py-3 text-center text-sm font-extrabold text-amber-900 shadow-soft hover:bg-amber-100"
                            >
                              WhatsApp review request
                            </a>
                          </>
                        ) : (
                          <div className="rounded-xl2 border border-line bg-white px-4 py-3 text-center text-sm font-extrabold text-muted">
                            No WhatsApp number
                          </div>
                        )}

                        <CustomerReviewEmailButton
                          customerName={customer.name}
                          customerEmail={customer.email}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={`/admin/customers?limit=${nextLimit}${query ? `&q=${encodeURIComponent(query)}` : ""}`}
              className="inline-flex rounded-xl2 bg-accent px-6 py-3 text-sm font-extrabold text-white shadow-soft hover:bg-accent/90"
            >
              Load more customer data
            </Link>
          </div>
        </>
      )}
    </main>
  );
}