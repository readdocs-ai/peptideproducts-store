import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { readFileSync, existsSync, writeFileSync, unlinkSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PP_PLAYWRIGHT_MODULE || 'playwright-core');
const root = process.cwd();
const capture = '/tmp/pp-auth-integration-emails.jsonl';
if (existsSync(capture)) unlinkSync(capture);
const env = { ...process.env, REDIS_URL: 'redis://127.0.0.1:16379', AUTH_SECRET: randomBytes(32).toString('hex'), RESEND_API_KEY: 'local-integration-test', PP_AUTH_CAPTURE_FILE: capture, AUTH_URL: 'http://localhost:3100', ADMIN_USERNAME: 'local-admin', ADMIN_PASSWORD: 'local-password' };
delete env.VERCEL_ENV;
const redis = spawn(process.env.PP_REDIS_BINARY || 'redis-server', ['--port','16379','--bind','127.0.0.1','--save','','--appendonly','no'], { stdio: 'ignore' });
const server = spawn(process.execPath, ['--import', './tests/fixtures/capture-resend.mjs', 'node_modules/next/dist/bin/next', 'start', '-p', '3100', '-H', 'localhost'], { env });
let logs = ''; server.stdout.on('data', d => { logs += d; writeFileSync('/tmp/pp-auth-integration-live.log', logs); }); server.stderr.on('data', d => { logs += d; writeFileSync('/tmp/pp-auth-integration-live.log', logs); });
let browser;
const base = 'http://localhost:3100';
async function waitFor(check, timeout=20000) { const end = Date.now()+timeout; while (Date.now()<end) { if(await check()) return; await new Promise(r=>setTimeout(r,150)); } throw new Error('Timed out waiting for integration condition'); }
try {
  await waitFor(async () => { try { return (await fetch(base+'/access', {signal:AbortSignal.timeout(3000)})).ok; } catch { return false; } });
  const badCookie = 'authjs.session-token=forged';
  for (const path of ['/', '/shop', '/product/retatrutide', '/llms.txt', '/sitemap.xml']) {
    const res = await fetch(base+path, { signal: AbortSignal.timeout(10000), redirect:'manual', headers:{cookie:badCookie} });
    console.log('Checked anonymous path',path,res.status); assert.equal(res.status,307,path); assert.ok(res.headers.get('location').includes('/access?next='),path);
    assert.match(res.headers.get('cache-control'),/no-store/);
  }
  assert.equal((await fetch(base+'/api/checkout',{ method:'POST',body:'{}',headers:{'Content-Type':'application/json'} })).status,401);
  assert.equal((await fetch(base+'/api/reviews')).status,401);
  assert.equal((await fetch(base+'/admin')).status,401);
  assert.equal((await fetch(base+'/admin',{headers:{authorization:'Basic '+Buffer.from('local-admin:local-password').toString('base64')}})).status,200,'Existing admin credentials work independently of customer accounts');
  const bypass = await fetch(base+'/product/retatrutide',{redirect:'manual',headers:{'x-middleware-subrequest':'src/proxy:src/proxy:src/proxy:src/proxy:src/proxy',rsc:'1','x-pp-access-page':'true'}}); assert.equal(bypass.status,307,'Request headers cannot bypass the wall');
  const csrf = await fetch(base+'/api/auth/signin/resend',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:'email=csrf-test%40example.test',redirect:'manual'}); assert.ok(csrf.status>=300,'A direct sign-in POST requires CSRF protection');
  const Redis = require('ioredis'); const db = new Redis(env.REDIS_URL); db.on('error',()=>{});
  await db.set('pp:customer-access:development:user:expired-user',JSON.stringify({id:'expired-user',email:'expired@example.test',emailVerified:new Date().toISOString()}));
  await db.set('pp:customer-access:development:user:session:expired-session',JSON.stringify({sessionToken:'expired-session',userId:'expired-user',expires:new Date(Date.now()-60000).toISOString()}));
  const expired = await fetch(base+'/shop',{redirect:'manual',headers:{cookie:'authjs.session-token=expired-session'}}); assert.equal(expired.status,307,'Expired sessions cannot enter'); await db.quit();
  console.log('Starting browser');
  browser = await chromium.launch({ executablePath: process.env.PP_CHROMIUM_BINARY, headless:true, args:['--no-sandbox','--disable-dev-shm-usage','--no-zygote','--single-process'] });
  const page = await browser.newPage({ viewport:{width:1440,height:1000} });
  const errors = []; page.on('pageerror', e=>errors.push(e.message));
  await page.goto(base+'/'); await page.waitForURL('**/access?**');
  await page.screenshot({path:'/tmp/pp-access-desktop.png',fullPage:true});
  assert.equal(await page.locator('input[type=email]').count(),1);
  await page.setViewportSize({width:390,height:844});
  await page.screenshot({path:'/tmp/pp-access-mobile.png',fullPage:true});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),'No horizontal overflow on mobile');
  await page.getByLabel('Email address').fill('customer-access-test@example.test');
  await page.getByRole('button',{name:/Email me a sign-in link/}).click();
  await page.waitForURL('**/access/check-email**'); console.log('Email link requested');
  await waitFor(()=>existsSync(capture));
  const email = JSON.parse(readFileSync(capture,'utf8').trim().split('\n').at(-1));
  const link = email.text.match(/http:\/\/localhost:3100\/api\/auth\/callback\/resend[^\s]+/)[0];
  await page.goto(link); console.log('Email callback reached',new URL(page.url()).pathname); await page.waitForURL('**/access/confirm**');
  await page.screenshot({path:'/tmp/pp-access-confirm-mobile.png',fullPage:true});
  await page.goto(base+'/shop'); await page.waitForURL('**/access/confirm**');
  const apiResponse = await page.request.post(base+'/api/checkout',{data:{}}); assert.equal(apiResponse.status(),403);
  await page.locator('input[name=research]').check(); await page.locator('input[name=terms]').check();
  await page.getByRole('button',{name:/Confirm and enter/}).click();
  assert.match(page.url(),/\/access\/confirm/,'Unchecked adult declaration cannot proceed');
  // Bypass browser HTML validation to exercise the server-side declaration check.
  await page.locator('form').first().evaluate(form=>{form.noValidate=true;form.requestSubmit();});
  await page.waitForURL('**/access/confirm?error=Declaration**');
  await page.locator('input[name=adult]').check(); await page.locator('input[name=research]').check(); await page.locator('input[name=terms]').check();
  await page.getByRole('button',{name:/Confirm and enter/}).click(); await page.waitForURL(base+'/shop');
  assert.ok(await page.getByRole('link',{name:'Account',exact:true}).count());
  assert.equal((await page.request.get(base+'/api/order-status')).status(),400,'Authenticated API reaches original validation');
  const cookie = await page.context().cookies();
  await page.goto(link); assert.match(page.url(),/\/access\?error=Verification/,'Used link is rejected');
  await page.goto(base+'/access/account'); await page.getByRole('button',{name:'Sign out',exact:true}).click(); await page.waitForURL(base+'/access');
  const stolen = cookie.find(c=>c.name.includes('session-token'));
  const revoked = await fetch(base+'/shop',{redirect:'manual',headers:{cookie:`${stolen.name}=${stolen.value}`}}); assert.equal(revoked.status,307,'Signed-out session is revoked in database');
  assert.deepEqual(errors,[]);
  console.log('PASS: browser email sign-in → verified session → enforced 18+ declaration → catalogue → API → logout; mobile layout; anonymous and forged-session protection; replay rejection');
} catch (error) {
  writeFileSync('/tmp/pp-auth-integration-server.log', logs);
  console.error(error); console.error('Server diagnostics saved locally.'); process.exitCode=1;
} finally { await browser?.close(); server.kill(); redis.kill(); if(existsSync(capture)) unlinkSync(capture); }
