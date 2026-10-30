const fs=require('fs');
const path=require('path');
const assert=require('assert');
const base=path.resolve(__dirname,'..');
const read=(p)=>fs.readFileSync(path.join(base,p),'utf8');
const products=read('src/data/products.ts');
const quality=read('src/app/quality-assurance/page.tsx');
const reports=read('src/data/qualityReports.ts');
const gallery=read('src/app/product/[id]/ui.tsx');
const contact=read('src/lib/supportWhatsApp.ts');
const oldReports={163216:'alluvi-retatrutide-40mg-janoshik-163216.png',147174:'alluvi-tirzepatide-40mg-janoshik-147174.png'};
for(const [id,file] of Object.entries(oldReports)) {
 assert(quality.includes('Test #'+id), `Old Janoshik report ${id} missing from quality page`);
 assert(products.includes(file),`Old Janoshik report ${id} missing from product gallery`);
 assert(fs.existsSync(path.join(base,'public/docs/coa',file)),`Original report image ${file} missing`);
}
const expected=[239742,240665,240666,240663,239744,240672,240673,240674,239746];
for(const id of expected) assert(reports.includes(`testId: ${id},`),`New test ${id} not in report list`);
assert((reports.match(/testId: [0-9]+/g)||[]).length===expected.length,'Unexpected total of new Janoshik tests');
assert(quality.includes('alluviRetatrutideReports')&&quality.includes('alluviTirzepatideReports')&&quality.includes('alluviNadReports'),'Quality page does not link to all new reports');
assert(gallery.includes('product.coaPreview')&&gallery.includes('product.testReports'), 'Product gallery should display old certificates and new report links');
assert(products.includes('id: "alluvi-tirzepatide-40mg-pen"'), 'Tirzepatide product missing');
assert(/id: "alluvi-tirzepatide-40mg-pen"[\s\S]{0,800}priceGBP: 130/.test(products), 'Tirzepatide price should be 130 GBP');
assert(products.includes('Free UK delivery'),'UK delivery text missing');
for(const p of ['front','top','side']) assert(fs.existsSync(path.join(base,`public/products/alluvi-tirzepatide-40mg-${p}.webp`)),'Product photo missing '+p);
assert(contact.includes('447459676630'),'New support number missing');
const scan=['components/Header.tsx','app/order-status/page.tsx','app/order-success/page.tsx','app/product/[id]/ui.tsx','app/cart/page.tsx','app/wholesale/page.tsx','app/checkout/page.tsx','lib/email.ts'];
for(const f of scan) {
 const code=read('src/'+f);
 assert(code.includes('SUPPORT_WHATSAPP_NUMBER'),`WhatsApp source not centralized in ${f}`);
 assert(!code.includes('447429098887'),`Old support number in ${f}`);
}
console.log('PASS: 2 original reports retained; 9 new report links; product gallery and price; 3 photos; WhatsApp contact links.');
