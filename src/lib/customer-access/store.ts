import { createHash } from "node:crypto";
import Redis from "ioredis";
import { createStorage } from "unstorage";
import redisDriver from "unstorage/drivers/redis";
import { UnstorageAdapter } from "@auth/unstorage-adapter";
import type { Adapter, VerificationToken } from "next-auth/adapters";
import { ACCESS_POLICY_VERSION } from "./policy";

const environment = process.env.VERCEL_ENV === "production" ? "production" : process.env.VERCEL_ENV === "preview" ? "preview" : "development";
export const authPrefix = `pp:customer-access:${environment}:`;
let redis: Redis | undefined;
export function accessRedis(): Redis {
  const url = environment === "preview" ? process.env.PP_TEST_REDIS_REDIS_URL : process.env.REDIS_URL;
  if (!url) throw new Error("Customer access storage is not configured");
  if (!redis) {
    redis = new Redis(url, { lazyConnect: true, maxRetriesPerRequest: 1, connectTimeout: 5000, enableOfflineQueue: true });
    redis.on("error", () => {}); // Do not expose connection details in logs.
  }
  return redis;
}
const digest = (value: string) => createHash("sha256").update(value).digest("hex");
const tokenKey = (identifier: string, token: string) => `${authPrefix}verification:${digest(JSON.stringify([identifier, token]))}`;
let adapter: Adapter | undefined;
export function customerAdapter(): Adapter {
  if (adapter) return adapter;
  const url = environment === "preview" ? process.env.PP_TEST_REDIS_REDIS_URL : process.env.REDIS_URL;
  if (!url) throw new Error("Customer access storage is not configured");
  const storage = createStorage({ driver: redisDriver({ url, base: authPrefix, lazyConnect: true, maxRetriesPerRequest: 1, connectTimeout: 5000 }) });
  adapter = {
    ...UnstorageAdapter(storage),
    async createVerificationToken(token) {
      await accessRedis().set(tokenKey(token.identifier, token.token), JSON.stringify(token), "EX", Math.max(1, Math.ceil((token.expires.getTime() - Date.now()) / 1000)));
      return token;
    },
    async useVerificationToken({ identifier, token }) {
      // Atomic consumption: simultaneous callbacks must not both create a session.
      const raw = await accessRedis().eval("local v = redis.call('GET', KEYS[1]); if v then redis.call('DEL', KEYS[1]) end; return v", 1, tokenKey(identifier, token));
      if (typeof raw !== "string") return null;
      const result = JSON.parse(raw) as VerificationToken;
      result.expires = new Date(result.expires);
      return result;
    },
  };
  return adapter;
}

export async function hasAccessDeclaration(userId: string): Promise<boolean> {
  const raw = await accessRedis().get(`${authPrefix}declaration:${userId}`);
  if (!raw) return false;
  const declaration = JSON.parse(raw);
  return declaration.version === ACCESS_POLICY_VERSION && declaration.adult === true && declaration.research === true && declaration.terms === true;
}
export async function saveAccessDeclaration(userId: string): Promise<void> {
  await accessRedis().set(`${authPrefix}declaration:${userId}`, JSON.stringify({ version: ACCESS_POLICY_VERSION, adult: true, research: true, terms: true, acceptedAt: new Date().toISOString() }));
}
export async function allowSignIn(email: string, ip: string): Promise<boolean> {
  // Counters are shared between all server instances, with no clear-text email or IP in keys.
  const client = accessRedis();
  const increment = async (key: string, expiry: number) => Number(await client.eval("local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],ARGV[1]) end; return n", 1, key, expiry));
  const [addressCount, ipCount] = await Promise.all([
    increment(`${authPrefix}rate:email:${digest(email.toLowerCase())}`, 900),
    increment(`${authPrefix}rate:ip:${digest(ip)}`, 900),
  ]);
  return addressCount <= 5 && ipCount <= 20;
}
