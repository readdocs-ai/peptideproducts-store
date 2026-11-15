import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { blingSkincare } from '../src/data/blingSkincare.ts';
import { products } from '../src/data/products.ts';
const base = 'http://localhost:3145';
const dir = mkdtempSync(`${tmpdir()}/pp-bling-display-`), capture = `${dir}/emails.jsonl`;
const env = { ...process.env, REDIS_URL: 'redis://127.0.0.1:16402', AUTH_URL: base, AUTH_SECRET: randomBytes(32).toString('hex'), RESEND_API_KEY: 'local-email-capture', PP_AUTH_CAPTURE_FILE: capture };
delete env.VERCEL_ENV;
const redis = spawn(process.env.PP_REDIS_BINARY || 'redis-server', ['--port', '16402', '--bind', '127.0.0.1', '--save', '', '--appendonly', 'no'], { stdio: 'ignore' });
const server = spawn(process.execPath, ['--import', './tests/fixtures/capture-resend.mjs', 'node_modules/next/dist/bin/next', 'start', '-p', '3145', '-H', 'localhost'], { env });
let log = ''; server.stdout.on('data', d => log += d); server.stderr.on('data', d => log += d);
const cookies = new Map();
async function request(path, options = {}) {
  const headers = new Headers(options.headers);
  headers.set('cookie', [...cookies].map(([key, value]) => `${key}=${value}`).join('; '));
  const response = await fetch(base + path, { ...options, headers, redirect: 'manual', signal: AbortSignal.timeout(15000) });
  for (const raw of response.headers.getSetCookie()) { const [key, ...value] = raw.split(';')[0].split('='); cookies.set(key, value.join('=')); }
  return response;
}
try {
  let ready = false;
  for (let n = 0; n < 100; n++) { try { ready = (await request('/access')).ok; } catch {} if (ready) break; await new Promise(resolve => setTimeout(resolve, 150)); }
  assert.ok(ready);
  assert.equal((await request('/shop')).status, 307);
  const csrf = await (await request('/api/auth/csrf')).json();
  const signin = await request('/api/auth/signin/resend', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ email: 'bling-display@example.test', csrfToken: csrf.csrfToken, callbackUrl: base + '/access/confirm' }) });
  assert.ok([302, 303].includes(signin.status));
  const mail = JSON.parse(readFileSync(capture, 'utf8').trim().split('\n').at(-1));
  const link = mail.text.match(/http:\/\/localhost:3145\/api\/auth\/callback\/resend[^\s]+/)[0];
  assert.equal((await request(link.slice(base.length))).status, 302);
  const confirm = await (await request('/access/confirm')).text();
  const form = new FormData();
  for (const [key, value] of [[confirm.match(/name="(\$ACTION_ID_[^"]+)"/)[1], ''], ['next', '/shop'], ['adult', 'yes'], ['research', 'yes'], ['terms', 'yes']]) form.set(key, value);
  assert.equal((await request('/access/confirm', { method: 'POST', headers: { origin: base }, body: form })).status, 303);
  const shop = await (await request('/shop')).text(), position = shop.indexOf('id="bling-skincare"');
  assert.ok(position > 0);
  assert.equal((shop.match(/data-bling-collection=/g) || []).length, 6);
  assert.equal((shop.slice(0, position).match(/<article/g) || []).length, Math.ceil(products.length / 2));
  assert.ok((shop.slice(position).match(/<article/g) || []).length > 6);
  for (const product of blingSkincare) {
    const response = await request(`/skincare/${product.id}`); assert.equal(response.status, 200);
    const html = await response.text(); assert.ok(html.replace(/<!--[\s\S]*?-->/g, "").includes(`£${product.priceGBP.toFixed(2)}`));
    assert.ok(html.includes('Check stock on WhatsApp')); assert.ok(html.includes('Online purchasing is not currently available.'));
    assert.ok(!html.includes('Add to basket') && !html.includes('Add to cart'));
    for (const path of [product.image, product.detailImage]) assert.equal((await request(path)).status, 200, path);
  }
  for (const path of ['/cart', '/checkout']) assert.match((await request(path)).headers.get('location'), /ordering-paused/);
  for (const path of ['/api/checkout', '/api/order']) assert.equal((await request(path, { method: 'POST', body: '{}' })).status, 503);
  assert.equal((await request('/skincare/checkout')).status, 404);
  assert.equal((await request('/api/skincare/order', { method: 'POST', body: '{}' })).status, 404);
  console.log('PASS: authenticated shop midpoint placement, six read-only product pages, all 12 image requests, individual prices, WhatsApp stock enquiries, no skincare checkout/order endpoint, and research cart/checkout/order APIs remain suspended.');
} catch (error) { console.error(error); console.error(log.slice(-4000)); process.exitCode = 1; }
finally { server.kill(); redis.kill(); rmSync(dir, { recursive: true, force: true }); }
