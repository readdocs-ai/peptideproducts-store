import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { customerAdapter, accessRedis, hasAccessDeclaration, saveAccessDeclaration, allowSignIn, authPrefix } from "../src/lib/customer-access/store";
import { safeReturnTo, publicAccessPath, validDeclaration } from "../src/lib/customer-access/policy";

assert.equal(authPrefix, "pp:customer-access:development:", "Tests must not target production or preview namespaces");
assert.ok(process.env.REDIS_URL?.includes("127.0.0.1"), "Tests require a local Redis instance");
const redis = accessRedis();
const adapter = customerAdapter();
const id = `test-${randomUUID()}`;
const email = `${id}@example.test`;
try {
  for (const value of ["https://evil.test", "//evil.test", "/\\evil.test", "/api/auth/signout", "/admin/orders", "/access/confirm", "\r\n//evil.test"]) assert.equal(safeReturnTo(value), "/");
  assert.equal(safeReturnTo("/product/retatrutide?from=cart"), "/product/retatrutide?from=cart");
  for (const path of ["/", "/shop", "/product/retatrutide", "/api/checkout", "/api/reviews", "/llms.txt", "/sitemap.xml", "/shop/export.json", "/api/wholesale/what-is-retatrutide.tsx"]) assert.equal(publicAccessPath(path, "GET"), false, path);
  assert.equal(publicAccessPath("/api/webhook", "POST"), true);
  assert.equal(publicAccessPath("/api/webhook", "GET"), false);
  assert.equal(publicAccessPath("/access/help", "GET"), true);
  const form = new FormData();
  assert.equal(validDeclaration(form), false);
  form.set("adult", "yes"); assert.equal(validDeclaration(form), false);
  form.set("research", "yes"); form.set("terms", "yes"); assert.equal(validDeclaration(form), true);
  form.set("adult", "false"); assert.equal(validDeclaration(form), false);
  assert.equal(await hasAccessDeclaration(id), false);
  await saveAccessDeclaration(id); assert.equal(await hasAccessDeclaration(id), true);
  await adapter.createVerificationToken!({ identifier: email, token: id, expires: new Date(Date.now()+60_000) });
  const attempts = await Promise.all(Array.from({ length: 12 }, () => adapter.useVerificationToken!({ identifier: email, token: id })));
  assert.equal(attempts.filter(Boolean).length, 1, "Magic link consumption must be atomic under concurrent callbacks");
  assert.ok(attempts.find(Boolean)?.expires instanceof Date);
  await adapter.createVerificationToken!({ identifier: email, token: "expired", expires: new Date(Date.now()+1000) });
  await new Promise(resolve => setTimeout(resolve, 1200));
  assert.equal(await adapter.useVerificationToken!({ identifier: email, token: "expired" }), null);
  assert.equal(await adapter.useVerificationToken!({ identifier: email, token: "forged" }), null);
  const user = await adapter.createUser!({ id, email, emailVerified: new Date() });
  assert.equal((await adapter.getUserByEmail!(email))?.id, user.id);
  await adapter.createSession!({ sessionToken: id, userId: user.id, expires: new Date(Date.now()+60000) });
  assert.equal((await adapter.getSessionAndUser!(id))?.user.id, user.id);
  await adapter.deleteSession!(id); assert.equal(await adapter.getSessionAndUser!(id), null);
  assert.equal(await adapter.getSessionAndUser!("forged"), null);
  const limits = await Promise.all(Array.from({ length: 6 }, () => allowSignIn(email, id)));
  assert.equal(limits.filter(Boolean).length, 5);
  console.log("PASS: route protection, safe redirects, mandatory declarations, durable accounts, atomic single-use tokens, expiry, session revocation and distributed rate limits");
} finally {
  // This disposable local instance exists exclusively for this suite; never clear a hosted database.
  await redis.flushdb();
  await redis.quit();
  setTimeout(() => process.exit(process.exitCode ?? 0), 100).unref();
}
