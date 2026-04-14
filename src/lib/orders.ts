import Redis from "ioredis";

export type StoredOrderItem = {
  id: string;
  name: string;
  qty: number;
  priceGBP: number;
};

export type OrderStatus = "pending" | "paid" | "shipped";
export type PaymentMethod = "bank_transfer" | "crypto" | "card";

export type StoredShippingAddress = {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

export type StoredOrder = {
  id: string;
  name: string;
  email: string;
  shippingRegion: "UK" | "International";
  shippingAddress: StoredShippingAddress;
  subtotal: number;
  shipping: number;
  total: number;
  items: StoredOrderItem[];
  createdAt: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paidAt: string | null;
  shippedAt: string | null;
  trackingNumber: string | null;
  stripeSessionId: string | null;
};

const redisUrl = process.env.REDIS_URL || "";
const redis = redisUrl ? new Redis(redisUrl) : null;

const ORDER_INDEX_KEY = "orders:index";

function orderKey(orderId: string) {
  return `order:${orderId}`;
}

function makeOrderId() {
  const now = new Date();
  const y = String(now.getFullYear()).slice(-2);
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";

  for (let i = 0; i < 6; i += 1) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }

  return `PP-${y}${m}${d}-${suffix}`;
}

function normalizeShippingAddress(
  raw?: Partial<StoredShippingAddress> | null
): StoredShippingAddress {
  return {
    line1: raw?.line1 || "",
    line2: raw?.line2 || "",
    city: raw?.city || "",
    state: raw?.state || "",
    postalCode: raw?.postalCode || "",
    country: raw?.country || "",
  };
}

function normalizeOrder(raw: Partial<StoredOrder>): StoredOrder {
  return {
    id: raw.id || "",
    name: raw.name || "",
    email: raw.email || "",
    shippingRegion:
      raw.shippingRegion === "International" ? "International" : "UK",
    shippingAddress: normalizeShippingAddress(raw.shippingAddress),
    subtotal: raw.subtotal || 0,
    shipping: raw.shipping || 0,
    total: raw.total || 0,
    items: raw.items || [],
    createdAt: raw.createdAt || new Date().toISOString(),
    status: raw.status || "pending",
    paymentMethod: raw.paymentMethod || "bank_transfer",
    paidAt: raw.paidAt ?? null,
    shippedAt: raw.shippedAt ?? null,
    trackingNumber: raw.trackingNumber ?? null,
    stripeSessionId: raw.stripeSessionId ?? null,
  };
}

export function isKvConfigured() {
  return Boolean(redis);
}

export async function createOrder(input: {
  name: string;
  email: string;
  shippingRegion: "UK" | "International";
  shippingAddress: StoredShippingAddress;
  subtotal: number;
  shipping: number;
  total: number;
  items: StoredOrderItem[];
  paymentMethod: PaymentMethod;
  stripeSessionId?: string | null;
}) {
  if (!redis) {
    throw new Error("REDIS_URL is not configured");
  }

  const indexType = await redis.type(ORDER_INDEX_KEY);

  if (indexType !== "none" && indexType !== "list") {
    await redis.del(ORDER_INDEX_KEY);
  }

  const order: StoredOrder = {
    id: makeOrderId(),
    name: input.name,
    email: input.email,
    shippingRegion: input.shippingRegion,
    shippingAddress: normalizeShippingAddress(input.shippingAddress),
    subtotal: input.subtotal,
    shipping: input.shipping,
    total: input.total,
    items: input.items,
    createdAt: new Date().toISOString(),
    status: "pending",
    paymentMethod: input.paymentMethod,
    paidAt: null,
    shippedAt: null,
    trackingNumber: null,
    stripeSessionId: input.stripeSessionId ?? null,
  };

  await redis.set(orderKey(order.id), JSON.stringify(order));
  await redis.lpush(ORDER_INDEX_KEY, order.id);

  return order;
}

export async function getOrder(orderId: string) {
  if (!redis) return null;

  const raw = await redis.get(orderKey(orderId));
  if (!raw) return null;

  return normalizeOrder(JSON.parse(raw));
}

async function getOrdersFromIndex(limit = 200) {
  if (!redis) return [];

  const keyType = await redis.type(ORDER_INDEX_KEY);
  if (keyType !== "list") return [];

  const ids = await redis.lrange(ORDER_INDEX_KEY, 0, limit - 1);
  if (!ids.length) return [];

  const pipeline = redis.pipeline();
  ids.forEach((id) => pipeline.get(orderKey(id)));
  const results = await pipeline.exec();

  return (results || [])
    .map((entry) => {
      const value = entry?.[1];
      if (!value || typeof value !== "string") return null;
      return normalizeOrder(JSON.parse(value));
    })
    .filter((order): order is StoredOrder => order !== null);
}

async function getOrdersByScanning(limit = 200) {
  if (!redis) return [];

  const keys = await redis.keys("order:*");
  if (!keys.length) return [];

  const pipeline = redis.pipeline();
  keys.forEach((key) => pipeline.get(key));
  const results = await pipeline.exec();

  const orders = (results || [])
    .map((entry) => {
      const value = entry?.[1];
      if (!value || typeof value !== "string") return null;
      return normalizeOrder(JSON.parse(value));
    })
    .filter((order): order is StoredOrder => order !== null);

  return orders
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, limit);
}

export async function listOrders(limit = 200) {
  if (!redis) return [];

  const indexedOrders = await getOrdersFromIndex(limit);
  const scannedOrders = await getOrdersByScanning(limit);

  const merged = new Map<string, StoredOrder>();

  for (const order of [...indexedOrders, ...scannedOrders]) {
    merged.set(order.id, order);
  }

  return Array.from(merged.values()).sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getRecentOrders(limit = 20) {
  const orders = await listOrders(limit);
  return orders.slice(0, limit);
}

export async function getOrderForCustomerLookup(orderId: string, email: string) {
  const order = await getOrder(orderId);
  if (!order) return null;

  if (order.email.trim().toLowerCase() !== email.trim().toLowerCase()) {
    return null;
  }

  return order;
}

export async function getOrderByStripeSessionId(sessionId: string) {
  const orders = await listOrders(500);
  return orders.find((order) => order.stripeSessionId === sessionId) || null;
}

export async function updateOrderStatus(params: {
  orderId: string;
  status: OrderStatus;
  trackingNumber?: string | null;
}) {
  if (!redis) {
    throw new Error("REDIS_URL is not configured");
  }

  const order = await getOrder(params.orderId);
  if (!order) return null;

  const updated: StoredOrder = {
    ...order,
    status: params.status,
    paidAt:
      params.status === "paid" || params.status === "shipped"
        ? order.paidAt || new Date().toISOString()
        : null,
    shippedAt:
      params.status === "shipped"
        ? order.shippedAt || new Date().toISOString()
        : null,
    trackingNumber:
      params.status === "shipped"
        ? params.trackingNumber?.trim() || order.trackingNumber || null
        : null,
  };

  if (params.status === "pending") {
    updated.paidAt = null;
    updated.shippedAt = null;
    updated.trackingNumber = null;
  }

  if (params.status === "paid") {
    updated.shippedAt = null;
    updated.trackingNumber = null;
  }

  await redis.set(orderKey(order.id), JSON.stringify(updated));
  return updated;
}