import type { StoredOrder } from "@/lib/orders";

export function isPaidOrder(order: StoredOrder) {
  return order.status === "paid" || order.status === "shipped";
}

export function netOrderValue(order: StoredOrder) {
  if (order.adjustedTotal !== null) return order.adjustedTotal;
  return Math.max(0, order.total - order.refundedAmount);
}

export function startOfLocalDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function ordersSince(orders: StoredOrder[], start: Date) {
  const startMs = start.getTime();
  return orders.filter((order) => {
    const date = new Date(order.paidAt || order.createdAt).getTime();
    return Number.isFinite(date) && date >= startMs;
  });
}

export function paidOrders(orders: StoredOrder[]) {
  return orders.filter(isPaidOrder);
}

export function grossRevenue(orders: StoredOrder[]) {
  return paidOrders(orders).reduce((sum, order) => sum + order.total, 0);
}

export function netRevenue(orders: StoredOrder[]) {
  return paidOrders(orders).reduce((sum, order) => sum + netOrderValue(order), 0);
}

export function uniqueCustomerCount(orders: StoredOrder[]) {
  return new Set(
    paidOrders(orders)
      .map((order) => order.email.trim().toLowerCase())
      .filter(Boolean),
  ).size;
}

export function returningCustomerCount(orders: StoredOrder[]) {
  const counts = new Map<string, number>();
  for (const order of paidOrders(orders)) {
    const email = order.email.trim().toLowerCase();
    if (!email) continue;
    counts.set(email, (counts.get(email) || 0) + 1);
  }
  return Array.from(counts.values()).filter((count) => count > 1).length;
}

export function productPerformance(orders: StoredOrder[]) {
  const products = new Map<string, { id: string; name: string; units: number; revenue: number }>();

  for (const order of paidOrders(orders)) {
    for (const item of order.items) {
      const current = products.get(item.id) || {
        id: item.id,
        name: item.name,
        units: 0,
        revenue: 0,
      };
      current.units += item.qty;
      current.revenue += item.qty * item.priceGBP;
      products.set(item.id, current);
    }
  }

  return Array.from(products.values()).sort((a, b) => b.revenue - a.revenue);
}

export function dailyRevenue(orders: StoredOrder[], days = 14) {
  const now = new Date();
  const rows = Array.from({ length: days }, (_, index) => {
    const date = startOfLocalDay(now);
    date.setDate(date.getDate() - (days - 1 - index));
    return {
      key: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
      revenue: 0,
      orders: 0,
    };
  });

  const byKey = new Map(rows.map((row) => [row.key, row]));
  for (const order of paidOrders(orders)) {
    const date = new Date(order.paidAt || order.createdAt);
    if (Number.isNaN(date.getTime())) continue;
    const key = date.toISOString().slice(0, 10);
    const row = byKey.get(key);
    if (!row) continue;
    row.revenue += netOrderValue(order);
    row.orders += 1;
  }

  return rows;
}

export function monthlyRevenue(orders: StoredOrder[], months = 6) {
  const now = new Date();
  const rows = Array.from({ length: months }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - (months - 1 - index), 1);
    return {
      key: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
      label: date.toLocaleDateString("en-GB", { month: "short", year: "2-digit" }),
      revenue: 0,
      orders: 0,
    };
  });

  const byKey = new Map(rows.map((row) => [row.key, row]));
  for (const order of paidOrders(orders)) {
    const date = new Date(order.paidAt || order.createdAt);
    if (Number.isNaN(date.getTime())) continue;
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
    const row = byKey.get(key);
    if (!row) continue;
    row.revenue += netOrderValue(order);
    row.orders += 1;
  }

  return rows;
}
