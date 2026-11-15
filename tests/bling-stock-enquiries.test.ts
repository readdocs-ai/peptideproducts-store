import assert from "node:assert/strict";
import fs from "node:fs";
import { blingSkincare, blingStockMessage } from "../src/data/blingSkincare";
import { products } from "../src/data/products";
import { supportWhatsAppHref } from "../src/lib/supportWhatsApp";
const prices = [130, 125, 125, 125, 125, 125];
assert.equal(blingSkincare.length, 6);
for (const [index, product] of blingSkincare.entries()) {
  assert.match(product.name, /^BLING .+ Collection$/);
  assert.equal(product.priceGBP, prices[index]);
  assert.ok(product.description.length > 80); assert.ok(product.subtitle.length > 10);
  for (const path of [product.image, product.detailImage]) assert.ok(fs.existsSync(`public${path}`), path);
  const url = new URL(supportWhatsAppHref(blingStockMessage(product)));
  assert.equal(url.hostname, "wa.me");
  assert.ok(url.searchParams.get("text")?.includes(product.name));
  assert.ok(url.searchParams.get("text")?.includes(`£${product.priceGBP.toFixed(2)}`));
  assert.ok(!products.some(p => p.id === product.id), "Display-only skincare is not in the purchasable research catalogue");
}
console.log("PASS: six enquiry-only collections; exact £130/£125 price mapping; descriptions and all 12 images; product-specific WhatsApp messages; no purchasable catalogue entries.");
