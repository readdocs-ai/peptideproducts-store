import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { randomBytes } from "node:crypto";
import { products } from "../src/data/products";
import { getReagentSpecification } from "../src/data/reagentSpecifications";

const migration=JSON.parse(readFileSync("compliance-product-migration.json","utf8"));
const redirects=JSON.parse(readFileSync("compliance-redirects.json","utf8"));
assert.equal(migration.retiredPens.length,12);
assert.equal(products.length,20);
for(const p of products) {
 assert.ok(!/pen|retatrutide|\breta\b/i.test(p.name),p.name);
 assert.ok(getReagentSpecification(p).cas,p.name);
 for(const image of p.gallery??[p.image]) assert.ok(existsSync("public"+image),image);
}
for(const [old,id] of Object.entries(migration.vialSlugs)) {
 const p=products.find(p=>p.id===id)!;
 assert.ok(p); assert.match(p.name,/^GLP-3 RT (10|20|40)mg$/); assert.ok(p.enquiryOnly);
 assert.ok(redirects.some((r:any)=>r.source==="/product/"+old&&r.destination==="/product/"+id));
}
for(const id of [...migration.retiredPens,...migration.identityPending]) assert.ok(!products.find(p=>p.id===id));
const src=readFileSync("src/app/api/checkout/route.ts","utf8");
const ts=await import("typescript");
const a=src.indexOf("function buildItems("),b=src.indexOf("\nexport async function POST",a);
const compiled=ts.transpile(src.slice(a,b),{target:ts.ScriptTarget.ES2022});
const build=new Function("products","ENQUIRY_ONLY_PRODUCT_IDS","normaliseQty",compiled+";return buildItems;")(products,new Set(Object.values(migration.vialSlugs)),(q:any)=>Number.isSafeInteger(Number(q))&&Number(q)>=1&&Number(q)<=99?Number(q):0);
for(const id of [...migration.retiredPens,...migration.identityPending,...Object.keys(migration.vialSlugs),...Object.values(migration.vialSlugs)]) assert.throws(()=>build([{productId:id,qty:1}]),String(id));
assert.equal(build([{productId:"bpc-157-5mg",qty:2}])[0].name,"BPC-157 5mg");

process.env.REDIS_URL="redis://127.0.0.1:16380";
delete process.env.VERCEL_ENV;
process.env.AUTH_SECRET=randomBytes(32).toString("hex");
process.env.AUTH_URL="http://localhost:3101";
process.env.RESEND_API_KEY="local-test";
process.env.ADMIN_USERNAME="local-admin";
process.env.ADMIN_PASSWORD="local-password";
const binary=process.env.PP_REDIS_BINARY;
assert.ok(binary,"Set PP_REDIS_BINARY to a local redis-server executable");
const redis=spawn(binary,["--port","16380","--bind","127.0.0.1","--save","","--appendonly","no"],{stdio:"ignore"});
const server=spawn(process.execPath,["node_modules/next/dist/bin/next","start","-p","3101","-H","localhost"],{env:process.env,stdio:"ignore"});
let db:any;
try {
 const base="http://localhost:3101";
 const end=Date.now()+20000; let ready=false;
 while(Date.now()<end) {
  try { if((await fetch(base+"/access")).ok){ready=true;break;} } catch {}
  await new Promise(r=>setTimeout(r,150));
 }
 assert.ok(ready,"Local server starts");
 const {customerAdapter,saveAccessDeclaration,accessRedis}=await import("../src/lib/customer-access/store");
 db=accessRedis(); const adapter=customerAdapter();
 const user=await adapter.createUser!({id:"review-fixture",email:"review-fixture@example.test",emailVerified:new Date()});
 await adapter.createSession!({sessionToken:"review-test-session",userId:user.id,expires:new Date(Date.now()+600000)});
 await saveAccessDeclaration(user.id);
 const headers={cookie:"authjs.session-token=review-test-session"};
 for(const r of redirects) {
  const res=await fetch(base+r.source,{headers,redirect:"manual"});
  assert.equal(res.status,r.permanent?308:307,r.source);
  assert.equal(new URL(res.headers.get("location")!,base).pathname,r.destination);
 }
 const targets=new Set(["/","/shop","/glp-3-rt","/quality-assurance",...products.map(p=>"/product/"+p.id)]);
 for(const path of targets) {
  const res=await fetch(base+path,{headers}); assert.equal(res.status,200,path);
  const html=await res.text(); assert.ok(html.includes("Peptide Products Ltd"),path+" footer");
  if(path.startsWith("/product/")) for(const text of ["CAS number","Purity","Storage","Certificate of analysis"]) assert.ok(html.includes(text),path+" "+text);
  for(const m of html.matchAll(/href="([^"]+)"/g)) {
   const href=m[1].replaceAll("&amp;","&");
   if(href.startsWith("/")&&!href.startsWith("/_next")&&!href.startsWith("/api")&&!href.startsWith("/access")) assert.ok(!/retatrutide|\breta\b/i.test(href),path+" stale link "+href);
  }
 }
 const sitemap=await(await fetch(base+"/sitemap.xml",{headers})).text();
 assert.ok(!/retatrutide|\breta\b/i.test(sitemap));
 const locs=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
 assert.equal(new Set(locs).size,locs.length,"Unique sitemap URLs");
 assert.equal((await fetch(base+"/api/checkout",{method:"POST",body:"{}",headers:{"Content-Type":"application/json"}})).status,401);
 console.log("PASS: 20 authenticated product pages, four catalogue pages, all legacy redirects, CAS/purity/storage/COA details, company footer, product image assets, no stale product links, unique sitemap, retired/enquiry-only checkout rejection and existing vial item names.");
} finally { await db?.quit(); server.kill(); redis.kill(); }

// Unstorage owns additional Redis connections; this disposable test process is finished.
process.exit(0);
