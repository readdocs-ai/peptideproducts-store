import Redis from "ioredis";

export type StoredOrderItem = {
  id: string;
  name: string;
  qty: number;
  priceGBP: number;
};

export type OrderStatus = "pending" | "paid" | "shipped" | "cancelled";
export type PaymentMethod = "bank_transfer" | "crypto" | "card";
export type RoyalMailStatus = "not_sent" | "sending" | "sent" | "error";

export type StoredShippingAddress = {
  name?: string;
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
  phone: string;
  marketingOptIn: boolean;
  researchUseAccepted: boolean;
  researchUseAcceptedAt: string | null;
  researchDeclarationVersion: string | null;
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
  sumupCheckoutId: string | null;
  refundedAmount: number;
  adjustedTotal: number | null;
  adminNote: string;
  cancelledAt: string | null;
  royalMailStatus: RoyalMailStatus;
  royalMailOrderIdentifier: number | null;
  royalMailCreatedAt: string | null;
  royalMailLastCheckedAt: string | null;
  royalMailError: string | null;
};

const redisUrl = process.env.REDIS_URL || "";
const redis = redisUrl
  ? new Redis(redisUrl, {
      maxRetriesPerRequest: 2,
      enableReadyCheck: true,
      lazyConnect: false,
    })
  : null;

const ORDER_INDEX_KEY = "orders:index";

function orderKey(orderId: string) {
  return `order:${orderId}`;
}

function stripeSessionKey(sessionId: string) {
  return `order:stripe-session:${sessionId}`;
}

function sumupCheckoutKey(checkoutId: string) {
  return `order:sumup-checkout:${checkoutId}`;
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
  raw?: Partial<StoredShippingAddress> | null,
): StoredShippingAddress {
  return {
    name: raw?.name || "",
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
    phone: raw.phone || "",
    marketingOptIn: raw.marketingOptIn === true,
    researchUseAccepted: raw.researchUseAccepted === true,
    researchUseAcceptedAt: raw.researchUseAcceptedAt ?? null,
    researchDeclarationVersion: raw.researchDeclarationVersion ?? null,
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
    sumupCheckoutId: raw.sumupCheckoutId ?? null,
    refundedAmount:
      typeof raw.refundedAmount === "number" && Number.isFinite(raw.refundedAmount)
        ? raw.refundedAmount
        : 0,
    adjustedTotal:
      typeof raw.adjustedTotal === "number" && Number.isFinite(raw.adjustedTotal)
        ? raw.adjustedTotal
        : null,
    adminNote: raw.adminNote || "",
    cancelledAt: raw.cancelledAt ?? null,
    royalMailStatus:
      raw.royalMailStatus === "sending" ||
      raw.royalMailStatus === "sent" ||
      raw.royalMailStatus === "error"
        ? raw.royalMailStatus
        : "not_sent",
    royalMailOrderIdentifier:
      typeof raw.royalMailOrderIdentifier === "number" &&
      Number.isFinite(raw.royalMailOrderIdentifier)
        ? raw.royalMailOrderIdentifier
        : null,
    royalMailCreatedAt: raw.royalMailCreatedAt ?? null,
    royalMailLastCheckedAt: raw.royalMailLastCheckedAt ?? null,
    royalMailError: raw.royalMailError ?? null,
  };
}

async function saveOrder(order: StoredOrder) {
  if (!redis) throw new Error("REDIS_URL is not configured");

  const multi = redis.multi();
  multi.set(orderKey(order.id), JSON.stringify(order));
  if (order.stripeSessionId) {
    multi.set(stripeSessionKey(order.stripeSessionId), order.id);
  }
  if (order.sumupCheckoutId) {
    multi.set(sumupCheckoutKey(order.sumupCheckoutId), order.id);
  }
  await multi.exec();
}

export function isKvConfigured() {
  return Boolean(redis);
}

export async function createOrder(input: {
  name: string;
  email: string;
  phone?: string;
  marketingOptIn?: boolean;
  researchUseAccepted?: boolean;
  researchDeclarationVersion?: string | null;
  shippingRegion: "UK" | "International";
  shippingAddress: StoredShippingAddress;
  subtotal: number;
  shipping: number;
  total: number;
  items: StoredOrderItem[];
  paymentMethod: PaymentMethod;
  stripeSessionId?: string | null;
  sumupCheckoutId?: string | null;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");

  const indexType = await redis.type(ORDER_INDEX_KEY);
  if (indexType !== "none" && indexType !== "list") {
    await redis.del(ORDER_INDEX_KEY);
  }

  const order: StoredOrder = {
    id: makeOrderId(),
    name: input.name,
    email: input.email,
    phone: input.phone?.trim() || "",
    marketingOptIn: input.marketingOptIn === true,
    researchUseAccepted: input.researchUseAccepted === true,
    researchUseAcceptedAt: input.researchUseAccepted === true ? new Date().toISOString() : null,
    researchDeclarationVersion: input.researchUseAccepted === true ? (input.researchDeclarationVersion || "research-use-v1") : null,
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
    sumupCheckoutId: input.sumupCheckoutId ?? null,
    refundedAmount: 0,
    adjustedTotal: null,
    adminNote: "",
    cancelledAt: null,
    royalMailStatus: "not_sent",
    royalMailOrderIdentifier: null,
    royalMailCreatedAt: null,
    royalMailLastCheckedAt: null,
    royalMailError: null,
  };

  const multi = redis.multi();
  multi.set(orderKey(order.id), JSON.stringify(order));
  multi.lpush(ORDER_INDEX_KEY, order.id);
  if (order.stripeSessionId) multi.set(stripeSessionKey(order.stripeSessionId), order.id);
  if (order.sumupCheckoutId) multi.set(sumupCheckoutKey(order.sumupCheckoutId), order.id);
  await multi.exec();

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

  const safeLimit = Math.max(1, Math.min(5000, Math.floor(limit)));
  const indexType = await redis.type(ORDER_INDEX_KEY);
  if (indexType !== "list") return [];
  const ids = await redis.lrange(ORDER_INDEX_KEY, 0, safeLimit - 1);
  if (!ids.length) return [];

  // MGET is a single Redis command, dramatically reducing Upstash command usage
  // compared with issuing one GET command for every order.
  const values = await redis.mget(...ids.map(orderKey));

  return values
    .map((value) => {
      if (!value) return null;
      try {
        return normalizeOrder(JSON.parse(value));
      } catch {
        return null;
      }
    })
    .filter((order): order is StoredOrder => order !== null)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}

export async function listOrders(limit = 200) {
  if (!redis) return [];
  return getOrdersFromIndex(limit);
}

export async function getRecentOrders(limit = 20) {
  return listOrders(limit);
}

export async function getOrderForCustomerLookup(orderId: string, email: string) {
  const order = await getOrder(orderId);
  if (!order) return null;
  if (order.email.trim().toLowerCase() !== email.trim().toLowerCase()) return null;
  return order;
}

export async function getOrderByStripeSessionId(sessionId: string) {
  if (!redis || !sessionId) return null;

  const indexedOrderId = await redis.get(stripeSessionKey(sessionId));
  if (indexedOrderId) return getOrder(indexedOrderId);

  // Compatibility fallback for historical orders created before the direct
  // Stripe-session lookup key existed. This still uses only LRANGE + MGET.
  const orders = await listOrders(1000);
  const order = orders.find((item) => item.stripeSessionId === sessionId) || null;

  if (order) await redis.set(stripeSessionKey(sessionId), order.id);
  return order;
}

export async function getOrderBySumUpCheckoutId(checkoutId: string) {
  if (!redis || !checkoutId) return null;
  const indexedOrderId = await redis.get(sumupCheckoutKey(checkoutId));
  if (indexedOrderId) return getOrder(indexedOrderId);

  const orders = await listOrders(1000);
  const order = orders.find((item) => item.sumupCheckoutId === checkoutId) || null;
  if (order) await redis.set(sumupCheckoutKey(checkoutId), order.id);
  return order;
}

export async function updateOrderStripeSessionId(params: {
  orderId: string;
  sessionId: string;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;
  const updated: StoredOrder = { ...order, stripeSessionId: params.sessionId };
  await saveOrder(updated);
  return updated;
}

export async function updateOrderSumUpCheckoutId(params: {
  orderId: string;
  checkoutId: string;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;
  const updated: StoredOrder = { ...order, sumupCheckoutId: params.checkoutId };
  await saveOrder(updated);
  return updated;
}

export async function updateOrderShippingDetails(params: {
  orderId: string;
  shippingRegion: "UK" | "International";
  shippingAddress: Partial<StoredShippingAddress>;
  phone?: string | null;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;

  const updated: StoredOrder = {
    ...order,
    phone: params.phone?.trim() || order.phone,
    shippingRegion: params.shippingRegion,
    shippingAddress: normalizeShippingAddress(params.shippingAddress),
  };

  await saveOrder(updated);
  return updated;
}

export async function updateOrderCustomerEmail(params: {
  orderId: string;
  email: string;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;

  const email = params.email.trim().toLowerCase();
  if (!email || !email.includes("@") || !email.includes(".")) {
    throw new Error("Valid customer email is required");
  }

  const updated: StoredOrder = { ...order, email };
  await saveOrder(updated);
  return updated;
}

export async function updateOrderCustomerDetails(params: {
  orderId: string;
  name: string;
  email: string;
  phone?: string | null;
  shippingAddress: Partial<StoredShippingAddress>;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;

  const name = params.name.trim();
  const email = params.email.trim().toLowerCase();
  const address = normalizeShippingAddress(params.shippingAddress);

  if (name.length < 2) {
    throw new Error("Customer name is required");
  }
  if (!email || !email.includes("@") || !email.includes(".")) {
    throw new Error("Valid customer email is required");
  }
  if (!address.line1.trim() || !address.city.trim() || !address.postalCode.trim()) {
    throw new Error("A complete delivery address is required");
  }

  address.country = address.country.trim().toUpperCase();

  const updated: StoredOrder = {
    ...order,
    name,
    email,
    phone: params.phone?.trim() || "",
    shippingRegion: address.country === "GB" ? "UK" : "International",
    shippingAddress: address,
  };

  await saveOrder(updated);
  return updated;
}

export async function updateOrderStatus(params: {
  orderId: string;
  status: OrderStatus;
  trackingNumber?: string | null;
  refundedAmount?: number | null;
  adjustedTotal?: number | null;
  adminNote?: string | null;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;

  const refundedAmount =
    typeof params.refundedAmount === "number" && Number.isFinite(params.refundedAmount)
      ? Math.max(0, Math.round(params.refundedAmount * 100) / 100)
      : order.refundedAmount;

  const adjustedTotal =
    typeof params.adjustedTotal === "number" && Number.isFinite(params.adjustedTotal)
      ? Math.max(0, Math.round(params.adjustedTotal * 100) / 100)
      : order.adjustedTotal;

  const adminNote =
    typeof params.adminNote === "string" ? params.adminNote.trim() : order.adminNote;

  const updated: StoredOrder = {
    ...order,
    status: params.status,
    refundedAmount,
    adjustedTotal,
    adminNote,
    paidAt:
      params.status === "paid" || params.status === "shipped"
        ? order.paidAt || new Date().toISOString()
        : order.paidAt,
    shippedAt:
      params.status === "shipped"
        ? order.shippedAt || new Date().toISOString()
        : null,
    trackingNumber:
      params.status === "shipped"
        ? params.trackingNumber?.trim() || order.trackingNumber || null
        : order.trackingNumber,
    cancelledAt:
      params.status === "cancelled"
        ? order.cancelledAt || new Date().toISOString()
        : null,
  };

  if (params.status === "pending") {
    updated.paidAt = null;
    updated.shippedAt = null;
    updated.trackingNumber = null;
    updated.cancelledAt = null;
  }

  if (params.status === "paid") {
    updated.shippedAt = null;
    updated.cancelledAt = null;
  }

  if (params.status === "shipped") updated.cancelledAt = null;

  await saveOrder(updated);
  return updated;
}

export async function cancelOlderPendingCardOrders(params: {
  paidOrderId: string;
  email: string;
  total: number;
  createdAt: string;
  items: StoredOrderItem[];
  windowMinutes?: number;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");

  const windowMinutes = Math.max(1, Math.min(120, params.windowMinutes ?? 30));
  const paidCreatedAt = new Date(params.createdAt).getTime();
  if (!Number.isFinite(paidCreatedAt)) return [];

  const email = params.email.trim().toLowerCase();
  const total = Math.round(params.total * 100) / 100;
  const itemSignature = (items: StoredOrderItem[]) =>
    [...items]
      .map((item) => `${item.id}:${item.qty}:${Math.round(item.priceGBP * 100)}`)
      .sort()
      .join("|");
  const paidItemsSignature = itemSignature(params.items);
  const orders = await listOrders(500);
  const cancelled: StoredOrder[] = [];

  for (const order of orders) {
    if (order.id === params.paidOrderId) continue;
    if (order.status !== "pending") continue;
    if (order.paymentMethod !== "card") continue;
    if (order.email.trim().toLowerCase() !== email) continue;
    if (Math.round(order.total * 100) / 100 !== total) continue;
    if (itemSignature(order.items) !== paidItemsSignature) continue;

    const orderCreatedAt = new Date(order.createdAt).getTime();
    if (!Number.isFinite(orderCreatedAt)) continue;

    const ageMinutes = (paidCreatedAt - orderCreatedAt) / 60000;
    if (ageMinutes < 0 || ageMinutes > windowMinutes) continue;

    const note = `Automatically cancelled as an abandoned Stripe checkout after paid order ${params.paidOrderId} was confirmed.`;
    const adminNote = order.adminNote?.trim()
      ? `${order.adminNote.trim()}\n${note}`
      : note;

    const updated = await updateOrderStatus({
      orderId: order.id,
      status: "cancelled",
      adminNote,
    });

    if (updated) cancelled.push(updated);
  }

  return cancelled;
}

export async function updateOrderPaymentDetails(params: {
  orderId: string;
  subtotal: number;
  shipping: number;
  total: number;
  items: StoredOrderItem[];
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;

  const updated: StoredOrder = {
    ...order,
    subtotal: params.subtotal,
    shipping: params.shipping,
    total: params.total,
    items: params.items,
  };

  await saveOrder(updated);
  return updated;
}

export async function updateOrderRoyalMailDetails(params: {
  orderId: string;
  royalMailStatus: RoyalMailStatus;
  royalMailOrderIdentifier?: number | null;
  royalMailCreatedAt?: string | null;
  royalMailLastCheckedAt?: string | null;
  royalMailError?: string | null;
  trackingNumber?: string | null;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const order = await getOrder(params.orderId);
  if (!order) return null;

  const updated: StoredOrder = {
    ...order,
    royalMailStatus: params.royalMailStatus,
    royalMailOrderIdentifier:
      params.royalMailOrderIdentifier !== undefined
        ? params.royalMailOrderIdentifier
        : order.royalMailOrderIdentifier,
    royalMailCreatedAt:
      params.royalMailCreatedAt !== undefined
        ? params.royalMailCreatedAt
        : order.royalMailCreatedAt,
    royalMailLastCheckedAt:
      params.royalMailLastCheckedAt !== undefined
        ? params.royalMailLastCheckedAt
        : order.royalMailLastCheckedAt,
    royalMailError:
      params.royalMailError !== undefined
        ? params.royalMailError
        : order.royalMailError,
    trackingNumber:
      params.trackingNumber !== undefined
        ? params.trackingNumber?.trim() || null
        : order.trackingNumber,
  };

  await saveOrder(updated);
  return updated;
}
