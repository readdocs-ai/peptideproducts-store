import { isKvConfigured, listOrders, StoredOrder } from "@/lib/orders";

type CustomerRecord = {
  name: string;
  email: string;
  phone: string;
  country: string;
  lastOrderDate: string;
  totalOrders: number;
  totalSpend: number;
  products: string[];
  marketingOptIn: boolean;
};

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

  return countries[code] || code || "";
}

function buildCustomerList(orders: StoredOrder[]) {
  const customers = new Map<string, CustomerRecord>();

  for (const order of orders) {
    const emailKey = order.email.trim().toLowerCase();

    if (!emailKey) continue;

    const existing = customers.get(emailKey);
    const orderProducts = order.items.map((item) => item.name);
    const country = formatCountry(order.shippingAddress?.country || "");

    if (!existing) {
      customers.set(emailKey, {
        name: order.name || "",
        email: order.email,
        phone: order.phone || "",
        country,
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

    customers.set(emailKey, {
      ...existing,
      name: order.name || existing.name,
      phone: order.phone || existing.phone,
      country: currentOrderTime >= existingLastOrderTime ? country : existing.country,
      lastOrderDate:
        currentOrderTime >= existingLastOrderTime
          ? order.createdAt
          : existing.lastOrderDate,
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

function csvEscape(value: string | number | boolean) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  if (!isKvConfigured()) {
    return new Response("Redis is not configured", { status: 500 });
  }

  const orders = await listOrders(2000);
  const customers = buildCustomerList(orders.filter((order) => order.status === "paid" || order.status === "shipped"));

  const headers = [
    "Name",
    "Email",
    "Phone",
    "Country",
    "Last order date",
    "Total orders",
    "Total spend",
    "Products ordered",
    "Marketing opt-in",
  ];

  const rows = customers.map((customer) => [
    customer.name,
    customer.email,
    customer.phone,
    customer.country,
    customer.lastOrderDate,
    customer.totalOrders,
    customer.totalSpend.toFixed(2),
    customer.products.join(" | "),
    customer.marketingOptIn ? "Yes" : "No",
  ]);

  const csv = [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => row.map(csvEscape).join(",")),
  ].join("\n");

  const filename = `peptide-products-customers-${new Date()
    .toISOString()
    .slice(0, 10)}.csv`;

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}