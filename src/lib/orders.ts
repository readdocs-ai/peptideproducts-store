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
type OrderUpdater = (current: StoredOrder) => StoredOrder;
async function updateOrderSafely(
  orderId: string,
  updater: OrderUpdater,
): Promise<StoredOrder | null> {
  if (!redis) throw new Error("REDIS_URL is not configured");

  const key = orderKey(orderId);

  for (let attempt = 0; attempt < 5; attempt++) {
    const connection = redis.duplicate({ lazyConnect: true });

    try {
      await connection.connect();
      await connection.watch(key);

      const raw = await connection.get(key);

      if (!raw) {
        await connection.unwatch();
        return null;
      }

      const current = normalizeOrder(JSON.parse(raw));
      const updated = updater(current);

      const transaction = connection.multi();
      transaction.set(key, JSON.stringify(updated));

      if (updated.stripeSessionId) {
        transaction.set(
          stripeSessionKey(updated.stripeSessionId),
          updated.id,
        );
      }

      if (updated.sumupCheckoutId) {
        transaction.set(
          sumupCheckoutKey(updated.sumupCheckoutId),
          updated.id,
        );
      }

      const result = await transaction.exec();

      if (result !== null) {
        return updated;
      }
    } finally {
      connection.disconnect();
    }
  }

  throw new Error(
    "Order was updated simultaneously too many times. Please retry.",
  );
}


export type AtomicPaymentResult =
  | { outcome: "paid"; order: StoredOrder }
  | { outcome: "already_paid"; order: StoredOrder }
  | { outcome: "not_pending"; order: StoredOrder }
  | { outcome: "payment_mismatch"; order: StoredOrder }
  | { outcome: "not_found"; order: null };

export async function confirmOrderPaidAtomically(
  orderId: string,
  payment: { provider: "stripe" | "sumup"; checkoutId: string; amountGBP: number },
): Promise<AtomicPaymentResult> {
  if (!payment.checkoutId.trim() || !Number.isFinite(payment.amountGBP) || payment.amountGBP < 0) {
    throw new Error("Invalid payment verification details");
  }
  if (!redis) throw new Error("REDIS_URL is not configured");

  const script = `
    local raw = redis.call("GET", KEYS[1])
    if not raw then
      return { "not_found", "" }
    end

    local order = cjson.decode(raw)
    local status = order.status

    local checkoutId = ARGV[3]
    local reference = ARGV[2] == "stripe" and order.stripeSessionId or order.sumupCheckoutId
    local total = tonumber(order.total)
    local expectedCents = tonumber(ARGV[4])
    if order.paymentMethod ~= "card" or type(reference) ~= "string" or reference ~= checkoutId or
       total == nil or expectedCents == nil or math.floor(total * 100 + 0.5) ~= expectedCents then
      return { "payment_mismatch", raw }
    end

    if status == "paid" or status == "shipped" then
      return { "already_paid", raw }
    end

    if status ~= "pending" then
      return { "not_pending", raw }
    end

    order.status = "paid"

    if order.paidAt == nil or order.paidAt == cjson.null then
      order.paidAt = ARGV[1]
    end

    order.shippedAt = cjson.null
    order.cancelledAt = cjson.null

    local updated = cjson.encode(order)
    redis.call("SET", KEYS[1], updated)

    return { "paid", updated }
  `;

  const result = await redis.eval(
    script,
    1,
    orderKey(orderId),
    new Date().toISOString(),
    payment.provider,
    payment.checkoutId,
    String(Math.round(payment.amountGBP * 100)),
  );

  if (!Array.isArray(result) || result.length !== 2) {
    throw new Error("Unexpected Redis payment confirmation result");
  }

  const [outcome, raw] = result;

  if (outcome === "not_found") {
    return { outcome: "not_found", order: null };
  }

  if (
    outcome !== "paid" &&
    outcome !== "already_paid" &&
    outcome !== "payment_mismatch" &&
    outcome !== "not_pending"
  ) {
    throw new Error("Unexpected payment confirmation outcome");
  }

  if (typeof raw !== "string") {
    throw new Error("Invalid Redis order response");
  }

  return {
    outcome,
    order: normalizeOrder(JSON.parse(raw)),
  };
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
    throw new Error(`Order index safety check failed: expected list, found ${indexType}`);
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


export async function getOrderForAdminSearch(orderId: string) {
  if (!redis) return null;

  const normalisedOrderId = orderId.trim().toUpperCase();
  if (!normalisedOrderId) return null;

  const order = await getOrder(normalisedOrderId);
  if (!order) return null;

  // Historical orders can still exist as order:<id> keys even when an older
  // index migration or reset left them out of orders:index. If an admin finds
  // one by exact order number, repair the list index so it appears normally
  // in future admin/report views as well.
  const indexType = await redis.type(ORDER_INDEX_KEY);
  if (indexType === "none") {
    await redis.lpush(ORDER_INDEX_KEY, order.id);
  } else if (indexType === "list") {
    const existingPosition = await redis.lpos(ORDER_INDEX_KEY, order.id);
    if (existingPosition === null) {
      await redis.lpush(ORDER_INDEX_KEY, order.id);
    }
  }

  return order;
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
  return updateOrderSafely(params.orderId, (order) => {
    if (order.status !== "pending") throw new Error("Cannot assign Stripe session after payment status changes");
    if (order.stripeSessionId && order.stripeSessionId !== params.sessionId) {
      throw new Error("Stripe session already assigned to this order");
    }
    if (!params.sessionId.trim()) throw new Error("Stripe session ID is required");
    const updated: StoredOrder = { ...order, stripeSessionId: params.sessionId };
    return updated;
  });
}

export async function updateOrderSumUpCheckoutId(params: {
  orderId: string;
  checkoutId: string;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  return updateOrderSafely(params.orderId, (order) => {
    if (order.status !== "pending") throw new Error("Cannot assign SumUp checkout after payment status changes");
    if (order.sumupCheckoutId && order.sumupCheckoutId !== params.checkoutId) {
      throw new Error("SumUp checkout already assigned to this order");
    }
    if (!params.checkoutId.trim()) throw new Error("SumUp checkout ID is required");
    const updated: StoredOrder = { ...order, sumupCheckoutId: params.checkoutId };
    return updated;
  });
}

export async function updateOrderShippingDetails(params: {
  orderId: string;
  shippingRegion: "UK" | "International";
  shippingAddress: Partial<StoredShippingAddress>;
  phone?: string | null;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  return updateOrderSafely(params.orderId, (order) => {

    const updated: StoredOrder = {
      ...order,
      phone: params.phone?.trim() || order.phone,
      shippingRegion: params.shippingRegion,
      shippingAddress: normalizeShippingAddress(params.shippingAddress),
    };

    return updated;
  });
}

export async function updateOrderCustomerEmail(params: {
  orderId: string;
  email: string;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  return updateOrderSafely(params.orderId, (order) => {

    const email = params.email.trim().toLowerCase();
    if (!email || !email.includes("@") || !email.includes(".")) {
      throw new Error("Valid customer email is required");
    }

    const updated: StoredOrder = { ...order, email };
    return updated;
  });
}

export async function updateOrderCustomerDetails(params: {
  orderId: string;
  name: string;
  email: string;
  phone?: string | null;
  shippingAddress: Partial<StoredShippingAddress>;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  return updateOrderSafely(params.orderId, (order) => {

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

    return updated;
  });
}

export async function updateOrderStatus(params: {
  orderId: string;
  status: OrderStatus;
  trackingNumber?: string | null;
  refundedAmount?: number | null;
  adjustedTotal?: number | null;
  adminNote?: string | null;
  onlyIfPending?: boolean;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  return updateOrderSafely(params.orderId, (order) => {
    if (params.onlyIfPending && order.status !== "pending") return order;
    if (params.status === "pending" && order.status !== "pending") {
      throw new Error("Cannot reset a confirmed or cancelled order to pending");
    }

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

    return updated;
  });
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
      onlyIfPending: true,
    });

    if (updated?.status === "cancelled") cancelled.push(updated);
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
  return updateOrderSafely(params.orderId, (order) => {
    if (order.status !== "pending" || order.stripeSessionId || order.sumupCheckoutId) {
      throw new Error("Cannot change items or payment totals after checkout has started");
    }

    const updated: StoredOrder = {
      ...order,
      subtotal: params.subtotal,
      shipping: params.shipping,
      total: params.total,
      items: params.items,
    };

    return updated;
  });
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
  return updateOrderSafely(params.orderId, (order) => {

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

    return updated;
  });
}
