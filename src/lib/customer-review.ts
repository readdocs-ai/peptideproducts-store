import Redis from "ioredis";
import type { StoredOrder, StoredShippingAddress } from "@/lib/orders";

export type CustomerReviewReason =
  | "complaint"
  | "non_delivery"
  | "refund"
  | "product_issue"
  | "payment_issue"
  | "other";

export type CustomerReviewFlag = {
  id: string;
  active: boolean;
  reason: CustomerReviewReason;
  note: string;
  createdAt: string;
  clearedAt: string | null;
  sourceOrderId: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    shippingAddress: StoredShippingAddress;
  };
};

export type CustomerFlagMatch = {
  flag: CustomerReviewFlag;
  matchedBy: Array<"email" | "phone" | "address" | "name + postcode">;
};

const redisUrl = process.env.REDIS_URL || "";
const redis = redisUrl
  ? new Redis(redisUrl, {
      maxRetriesPerRequest: 2,
      enableReadyCheck: true,
      lazyConnect: false,
    })
  : null;

const FLAG_INDEX_KEY = "customer-review-flags:index";

function flagKey(id: string) {
  return `customer-review-flag:${id}`;
}

function makeFlagId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 8; i += 1) suffix += chars[Math.floor(Math.random() * chars.length)];
  return `CRF-${Date.now()}-${suffix}`;
}

function normaliseText(value?: string | null) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function normaliseEmail(value?: string | null) {
  return (value || "").trim().toLowerCase();
}

function normalisePhone(value?: string | null) {
  return (value || "").replace(/\D/g, "");
}

function normalisePostcode(value?: string | null) {
  return (value || "").toUpperCase().replace(/\s+/g, "").trim();
}

function addressSignature(address?: Partial<StoredShippingAddress> | null) {
  if (!address) return "";
  const line1 = normaliseText(address.line1);
  const postcode = normalisePostcode(address.postalCode);
  return line1 && postcode ? `${line1}|${postcode}` : "";
}

function safeAddress(raw?: Partial<StoredShippingAddress> | null): StoredShippingAddress {
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

function normaliseFlag(raw: Partial<CustomerReviewFlag>): CustomerReviewFlag | null {
  if (!raw.id || !raw.sourceOrderId || !raw.createdAt || !raw.customer) return null;
  const allowed: CustomerReviewReason[] = [
    "complaint",
    "non_delivery",
    "refund",
    "product_issue",
    "payment_issue",
    "other",
  ];
  const reason = allowed.includes(raw.reason as CustomerReviewReason)
    ? (raw.reason as CustomerReviewReason)
    : "other";

  return {
    id: raw.id,
    active: raw.active !== false,
    reason,
    note: raw.note || "",
    createdAt: raw.createdAt,
    clearedAt: raw.clearedAt ?? null,
    sourceOrderId: raw.sourceOrderId,
    customer: {
      name: raw.customer.name || "",
      email: raw.customer.email || "",
      phone: raw.customer.phone || "",
      shippingAddress: safeAddress(raw.customer.shippingAddress),
    },
  };
}

export function customerReviewConfigured() {
  return Boolean(redis);
}

export async function listCustomerReviewFlags(limit = 1000) {
  if (!redis) return [];
  const safeLimit = Math.max(1, Math.min(5000, Math.floor(limit)));
  const type = await redis.type(FLAG_INDEX_KEY);
  if (type !== "list") return [];
  const ids = await redis.lrange(FLAG_INDEX_KEY, 0, safeLimit - 1);
  if (!ids.length) return [];
  const values = await redis.mget(...ids.map(flagKey));
  return values
    .map((value) => {
      if (!value) return null;
      try {
        return normaliseFlag(JSON.parse(value));
      } catch {
        return null;
      }
    })
    .filter((flag): flag is CustomerReviewFlag => flag !== null)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function createCustomerReviewFlag(params: {
  order: StoredOrder;
  reason: CustomerReviewReason;
  note?: string | null;
}) {
  if (!redis) throw new Error("REDIS_URL is not configured");

  const flag: CustomerReviewFlag = {
    id: makeFlagId(),
    active: true,
    reason: params.reason,
    note: params.note?.trim() || "",
    createdAt: new Date().toISOString(),
    clearedAt: null,
    sourceOrderId: params.order.id,
    customer: {
      name: params.order.name,
      email: params.order.email,
      phone: params.order.phone,
      shippingAddress: safeAddress(params.order.shippingAddress),
    },
  };

  const multi = redis.multi();
  multi.set(flagKey(flag.id), JSON.stringify(flag));
  multi.lpush(FLAG_INDEX_KEY, flag.id);
  await multi.exec();
  return flag;
}

export async function clearCustomerReviewFlag(id: string) {
  if (!redis) throw new Error("REDIS_URL is not configured");
  const raw = await redis.get(flagKey(id));
  if (!raw) return null;
  const flag = normaliseFlag(JSON.parse(raw));
  if (!flag) return null;
  const multi = redis.multi();
  multi.del(flagKey(id));
  multi.lrem(FLAG_INDEX_KEY, 0, id);
  await multi.exec();
  return flag;
}

export function getFlagMatchesForOrder(
  order: StoredOrder,
  flags: CustomerReviewFlag[],
): CustomerFlagMatch[] {
  const email = normaliseEmail(order.email);
  const phone = normalisePhone(order.phone);
  const address = addressSignature(order.shippingAddress);
  const name = normaliseText(order.name || order.shippingAddress?.name);
  const postcode = normalisePostcode(order.shippingAddress?.postalCode);

  return flags
    .filter((flag) => flag.active)
    .map((flag) => {
      const matchedBy: CustomerFlagMatch["matchedBy"] = [];
      const flagEmail = normaliseEmail(flag.customer.email);
      const flagPhone = normalisePhone(flag.customer.phone);
      const flagAddress = addressSignature(flag.customer.shippingAddress);
      const flagName = normaliseText(flag.customer.name || flag.customer.shippingAddress?.name);
      const flagPostcode = normalisePostcode(flag.customer.shippingAddress?.postalCode);

      if (email && flagEmail && email === flagEmail) matchedBy.push("email");
      if (phone.length >= 7 && flagPhone.length >= 7 && phone === flagPhone) matchedBy.push("phone");
      if (address && flagAddress && address === flagAddress) matchedBy.push("address");
      if (name && postcode && flagName && flagPostcode && name === flagName && postcode === flagPostcode) {
        matchedBy.push("name + postcode");
      }

      return matchedBy.length ? { flag, matchedBy } : null;
    })
    .filter((match): match is CustomerFlagMatch => match !== null);
}

export function sameCustomer(a: StoredOrder, b: StoredOrder) {
  const aEmail = normaliseEmail(a.email);
  const bEmail = normaliseEmail(b.email);
  if (aEmail && bEmail && aEmail === bEmail) return true;

  const aPhone = normalisePhone(a.phone);
  const bPhone = normalisePhone(b.phone);
  if (aPhone.length >= 7 && bPhone.length >= 7 && aPhone === bPhone) return true;

  const aAddress = addressSignature(a.shippingAddress);
  const bAddress = addressSignature(b.shippingAddress);
  if (aAddress && bAddress && aAddress === bAddress) return true;

  const aName = normaliseText(a.name || a.shippingAddress?.name);
  const bName = normaliseText(b.name || b.shippingAddress?.name);
  const aPostcode = normalisePostcode(a.shippingAddress?.postalCode);
  const bPostcode = normalisePostcode(b.shippingAddress?.postalCode);
  return Boolean(aName && bName && aPostcode && bPostcode && aName === bName && aPostcode === bPostcode);
}

export function previousOrderCount(order: StoredOrder, allOrders: StoredOrder[]) {
  const createdAt = new Date(order.createdAt).getTime();
  return allOrders.filter((candidate) => {
    if (candidate.id === order.id) return false;
    const candidateCreatedAt = new Date(candidate.createdAt).getTime();
    if (Number.isFinite(createdAt) && Number.isFinite(candidateCreatedAt) && candidateCreatedAt >= createdAt) {
      return false;
    }
    if (candidate.status === "cancelled") return false;
    if (candidate.status === "pending" && candidate.paymentMethod === "card") return false;
    return sameCustomer(order, candidate);
  }).length;
}

export function reviewReasonLabel(reason: CustomerReviewReason) {
  const labels: Record<CustomerReviewReason, string> = {
    complaint: "Complaint / dissatisfaction",
    non_delivery: "Reported non-delivery",
    refund: "Refund / chargeback concern",
    product_issue: "Product issue",
    payment_issue: "Payment issue",
    other: "Other manual review reason",
  };
  return labels[reason];
}
