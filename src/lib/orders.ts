import Redis from "ioredis";

export type StoredOrderItem = {
  id: string;
  name: string;
  qty: number;
  priceGBP: number;
};

export type OrderStatus = "pending" | "paid" | "shipped";

export type StoredOrder = {
  id: string;
  createdAt: number;
  customerName: string;
  customerEmail: string;
  shippingRegion: "UK" | "INTL";
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paidAt?: number | null;
  shippedAt?: number | null;
  trackingNumber?: string | null;
  items: StoredOrderItem[];
};

let redis: Redis | null = null;

function getRedis() {
  if (!process.env.REDIS_URL) return null;
  if (!redis) {
    redis = new Redis(process.env.REDIS_URL);
  }
  return redis;
}

function randomId() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function normalizeOrder(order: StoredOrder): StoredOrder {
  return {
    ...order,
    status: order.status ?? "pending",
    paidAt: order.paidAt ?? null,
    shippedAt: order.shippedAt ?? null,
    trackingNumber: order.trackingNumber ?? null,
  };
}

export function makeOrderId() {
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `PP-${y}${m}${d}-${randomId()}`;
}

export function isKvConfigured() {
  return Boolean(process.env.REDIS_URL);
}

export async function saveOrder(order: StoredOrder) {
  const client = getRedis();

  if (!client) {
    throw new Error("Redis is not configured. Missing REDIS_URL.");
  }

  const normalized = normalizeOrder(order);

  await client.set(`order:${normalized.id}`, JSON.stringify(normalized));
  await client.zadd("orders:index", String(normalized.createdAt), normalized.id);
}

export async function getOrderById(id: string): Promise<StoredOrder | null> {
  const client = getRedis();

  if (!client) {
    return null;
  }

  const raw = await client.get(`order:${id}`);

  if (!raw) return null;

  return normalizeOrder(JSON.parse(raw) as StoredOrder);
}

export async function getRecentOrders(limit = 50): Promise<StoredOrder[]> {
  const client = getRedis();

  if (!client) {
    return [];
  }

  const ids = await client.zrevrange("orders:index", 0, limit - 1);

  if (!ids.length) return [];

  const rawOrders = await Promise.all(ids.map((id) => client.get(`order:${id}`)));

  return rawOrders
    .filter(Boolean)
    .map((raw) => normalizeOrder(JSON.parse(raw as string) as StoredOrder));
}

export async function updateOrderStatus(input: {
  id: string;
  status: OrderStatus;
  trackingNumber?: string | null;
}) {
  const existing = await getOrderById(input.id);

  if (!existing) {
    return null;
  }

  const now = Date.now();
  const trackingNumber = input.trackingNumber?.trim() || null;

  const updated: StoredOrder = normalizeOrder({
    ...existing,
    status: input.status,
    paidAt:
      input.status === "paid" || input.status === "shipped"
        ? existing.paidAt ?? now
        : null,
    shippedAt: input.status === "shipped" ? existing.shippedAt ?? now : null,
    trackingNumber: input.status === "shipped" ? trackingNumber : null,
  });

  await saveOrder(updated);
  return updated;
}
