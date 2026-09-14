import crypto from "node:crypto";
import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL || "";
const redis = redisUrl
  ? new Redis(redisUrl, {
      maxRetriesPerRequest: 2,
      enableReadyCheck: true,
      lazyConnect: false,
    })
  : null;

const ABUSE_LOG_KEY = "checkout:abuse-log";
const MAX_LOG_ITEMS = 250;

const DEFAULT_BLOCKED_EMAIL_DOMAINS = ["storebotmail.joonix.net"];
const DEFAULT_BLOCKED_PHONES = ["02070313000"];

function csvEnv(name: string, fallback: string[]) {
  const raw = process.env[name];
  const values = raw
    ? raw.split(",").map((value) => value.trim().toLowerCase()).filter(Boolean)
    : fallback;
  return new Set(values);
}

function emailDomain(value: string) {
  const at = value.lastIndexOf("@");
  return at >= 0 ? value.slice(at + 1).trim().toLowerCase() : "";
}

function normaliseName(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}


export type CheckoutProtectionInput = {
  ip: string;
  name: string;
  email: string;
  phone: string;
  userAgent: string;
  payloadFingerprint: string;
  honeypot?: string;
};

export type CheckoutProtectionResult = {
  allowed: boolean;
  reason?: string;
  retryAfterSeconds?: number;
};

type Rule = {
  label: string;
  key: string;
  limit: number;
  windowSeconds: number;
};

type AbuseLogEntry = {
  at: string;
  reason: string;
  ipHash: string;
  emailHash: string;
  phoneHash: string;
  nameHash: string;
  userAgent: string;
};

function salt() {
  return process.env.CHECKOUT_ABUSE_SALT || process.env.NEXTAUTH_SECRET || "pp-checkout-protection-v1";
}

function hash(value: string) {
  return crypto
    .createHash("sha256")
    .update(`${salt()}|${value.trim().toLowerCase()}`)
    .digest("hex");
}

function shortHash(value: string) {
  return hash(value).slice(0, 12);
}

function normalisePhone(value: string) {
  return value.replace(/\D+/g, "");
}

async function incrementRule(rule: Rule) {
  if (!redis) return { count: 0, ttl: rule.windowSeconds };

  const count = await redis.incr(rule.key);
  if (count === 1) {
    await redis.expire(rule.key, rule.windowSeconds);
  }
  const ttl = await redis.ttl(rule.key);
  return { count, ttl: ttl > 0 ? ttl : rule.windowSeconds };
}

async function logBlockedAttempt(input: CheckoutProtectionInput, reason: string) {
  if (!redis) return;

  const entry: AbuseLogEntry = {
    at: new Date().toISOString(),
    reason,
    ipHash: shortHash(input.ip || "unknown"),
    emailHash: shortHash(input.email || "unknown"),
    phoneHash: shortHash(normalisePhone(input.phone) || "unknown"),
    nameHash: shortHash(input.name || "unknown"),
    userAgent: input.userAgent.slice(0, 160),
  };

  const multi = redis.multi();
  multi.lpush(ABUSE_LOG_KEY, JSON.stringify(entry));
  multi.ltrim(ABUSE_LOG_KEY, 0, MAX_LOG_ITEMS - 1);
  await multi.exec();
}

export function getRequestIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return (
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function checkCheckoutProtection(
  input: CheckoutProtectionInput,
): Promise<CheckoutProtectionResult> {
  if (input.honeypot?.trim()) {
    await logBlockedAttempt(input, "honeypot");
    return { allowed: false, reason: "Unable to start checkout." };
  }

  // Known-abuse signatures are checked before Redis rate limiting and before
  // any internal order or Stripe Checkout Session is created. The defaults
  // reflect the repeated automated pattern observed on 14 Sep 2026 and can
  // be extended or replaced with comma-separated environment variables.
  const blockedEmailDomains = csvEnv(
    "CHECKOUT_BLOCKED_EMAIL_DOMAINS",
    DEFAULT_BLOCKED_EMAIL_DOMAINS,
  );
  const blockedPhones = csvEnv("CHECKOUT_BLOCKED_PHONES", DEFAULT_BLOCKED_PHONES);
  const domain = emailDomain(input.email);
  const phone = normalisePhone(input.phone);
  const name = normaliseName(input.name);

  if (domain && blockedEmailDomains.has(domain)) {
    await logBlockedAttempt(input, "known-abuse:blocked-email-domain");
    return {
      allowed: false,
      reason: "Unable to start checkout. Please contact us if you believe this is an error.",
      retryAfterSeconds: 24 * 60 * 60,
    };
  }

  // Extra guard for the exact recurring signature. Name alone is never used
  // as a blocking signal; the phone must also match a known abusive number.
  if (phone && blockedPhones.has(phone) && name === "john smith") {
    await logBlockedAttempt(input, "known-abuse:phone-name-signature");
    return {
      allowed: false,
      reason: "Unable to start checkout. Please contact us if you believe this is an error.",
      retryAfterSeconds: 24 * 60 * 60,
    };
  }

  if (!redis) return { allowed: true };

  const ipHash = hash(input.ip || "unknown");
  const emailHash = hash(input.email || "unknown");
  const phoneHash = hash(normalisePhone(input.phone) || "unknown");
  const nameIpHash = hash(`${input.name}|${input.ip}`);
  const payloadHash = hash(input.payloadFingerprint || "unknown");

  const temporaryBlockKey = `checkout:block:${ipHash}`;
  const temporaryBlockTtl = await redis.ttl(temporaryBlockKey);
  if (temporaryBlockTtl > 0) {
    await logBlockedAttempt(input, "temporary-ip-block");
    return {
      allowed: false,
      reason: "Too many checkout attempts. Please try again later or contact us for help.",
      retryAfterSeconds: temporaryBlockTtl,
    };
  }

  const rules: Rule[] = [
    {
      label: "ip-2h",
      key: `checkout:rl:ip:2h:${ipHash}`,
      limit: 4,
      windowSeconds: 2 * 60 * 60,
    },
    {
      label: "ip-24h",
      key: `checkout:rl:ip:24h:${ipHash}`,
      limit: 10,
      windowSeconds: 24 * 60 * 60,
    },
    {
      label: "email-2h",
      key: `checkout:rl:email:2h:${emailHash}`,
      limit: 4,
      windowSeconds: 2 * 60 * 60,
    },
    {
      label: "phone-2h",
      key: `checkout:rl:phone:2h:${phoneHash}`,
      limit: 4,
      windowSeconds: 2 * 60 * 60,
    },
    {
      label: "name-ip-2h",
      key: `checkout:rl:name-ip:2h:${nameIpHash}`,
      limit: 3,
      windowSeconds: 2 * 60 * 60,
    },
    {
      label: "identical-payload-30m",
      key: `checkout:rl:payload:30m:${payloadHash}`,
      limit: 2,
      windowSeconds: 30 * 60,
    },
  ];

  let exceeded: { label: string; ttl: number } | null = null;
  for (const rule of rules) {
    const result = await incrementRule(rule);
    if (!exceeded && result.count > rule.limit) {
      exceeded = { label: rule.label, ttl: result.ttl };
    }
  }

  if (exceeded) {
    // Repeated automated attempts every ~30 minutes are stopped for several
    // hours once a threshold is crossed, while genuine customers still have
    // several normal retries available first.
    await redis.set(temporaryBlockKey, "1", "EX", 6 * 60 * 60);
    await logBlockedAttempt(input, `rate-limit:${exceeded.label}`);
    return {
      allowed: false,
      reason: "Too many checkout attempts. Please try again later or contact us for help.",
      retryAfterSeconds: Math.max(exceeded.ttl, 6 * 60 * 60),
    };
  }

  return { allowed: true };
}

export async function getCheckoutProtectionSummary() {
  if (!redis) {
    return { configured: false, blockedLast24Hours: 0, recent: [] as AbuseLogEntry[] };
  }

  const raw = await redis.lrange(ABUSE_LOG_KEY, 0, 49);
  const entries = raw
    .map((value) => {
      try {
        return JSON.parse(value) as AbuseLogEntry;
      } catch {
        return null;
      }
    })
    .filter((entry): entry is AbuseLogEntry => entry !== null);

  const cutoff = Date.now() - 24 * 60 * 60 * 1000;
  const blockedLast24Hours = entries.filter(
    (entry) => new Date(entry.at).getTime() >= cutoff,
  ).length;

  return {
    configured: true,
    blockedLast24Hours,
    recent: entries.slice(0, 5),
  };
}
