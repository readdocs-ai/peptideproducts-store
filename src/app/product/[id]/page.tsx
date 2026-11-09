import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { getReagentSpecification } from "@/data/reagentSpecifications";
import { getProductSeoContent } from "@/lib/seoProductContent";
import { ProductBuyBox, ProductImageGallery } from "./ui";
type Props={params:Promise<{id:string}>};
const aliases:Record<string,string>={"tirzepatide-tr30-30mg":"tirzepatide-tr10-10mg","tirzepatide-tr40-40mg":"tirzepatide-tr15-15mg"};
export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {id}=await params;const p=products.find(p=>p.id===(aliases[id]??id));if(!p)return {title:"Product not found"};
 const seo=getProductSeoContent(p);const url=`https://www.peptideproducts.co.uk/product/${p.id}`;
 return {title:{absolute:seo.title},description:seo.description,alternates:{canonical:url},openGraph:{title:seo.title,description:seo.description,url,images:[{url:`https://www.peptideproducts.co.uk${p.image}`,alt:p.name}]}};
}
export default async function ProductPage({params}:Props){
 const {id}=await params;if(aliases[id])permanentRedirect(`/product/${aliases[id]}`);
 const p=products.find(p=>p.id===id);if(!p)return notFound();
 const seo=getProductSeoContent(p);const reagent=getReagentSpecification(p);
 const related=products.filter(x=>x.id!==p.id&&x.category===p.category).slice(0,3);
 const specs=[['Pack',p.pack],['Format',p.pack.includes('lyophilised')?'Lyophilised research material':'Research powder'],['Primary actives',p.actives.join(', ')],['CAS number (reference compound)',reagent.cas??'Not confirmed — request identity documentation'],['Purity',reagent.purity],['Storage',reagent.storage],['Certificate of analysis',p.coa?'Published below — confirm the supplied batch matches':'Request matching batch documentation before procurement']];
 const schema={"@context":"https://schema.org","@type":"Product",name:p.name,description:seo.description,image:`https://www.peptideproducts.co.uk${p.image}`,sku:p.id,brand:{"@type":"Brand",name:"Peptide Products"},additionalProperty:reagent.cas?[{"@type":"PropertyValue",name:"Reference CAS",value:reagent.cas}]:[],...(!p.enquiryOnly&&!p.informationOnly?{offers:{"@type":"Offer",url:`https://www.peptideproducts.co.uk/product/${p.id}`,price:p.priceGBP,priceCurrency:"GBP",availability:p.stockStatus==='in_stock'?'https://schema.org/InStock':'https://schema.org/OutOfStock'}}:{})};
 return <><Header/><main className="bg-panel pb-12 pt-7"><Container>
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/>
 <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-muted"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>{p.name}</span></nav>
 <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_0.65fr]"><div className="rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-7"><div className="soft-label">{p.category} research material</div><h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{p.name}</h1><p className="mt-3 text-muted">{p.subtitle}</p><p className="mt-4 text-sm leading-7 text-muted">{seo.intro}</p><p className="mt-3 text-sm font-bold leading-7 text-ink">For laboratory research use only. Not for human or veterinary use.</p><div className="mt-6"><ProductImageGallery product={p}/></div></div><ProductBuyBox product={p}/></div>
 <section className="mt-6 rounded-xl3 border border-line bg-white p-5 shadow-soft md:p-7"><div className="soft-label">Reagent details</div><h2 className="mt-3 text-2xl font-extrabold text-ink">Identification, purity and storage</h2><dl className="mt-5 grid gap-3 md:grid-cols-2">{specs.map(([label,value])=><div key={label} className="rounded-xl2 border border-line bg-panel p-4"><dt className="text-xs font-extrabold uppercase tracking-wide text-muted">{label}</dt><dd className="mt-2 text-sm leading-7 text-ink">{value}</dd></div>)}</dl><p className="mt-4 text-sm leading-7 text-muted">CAS numbers identify the reference compound. Confirm the chemical form and supplied batch against the manufacturer documentation. A reference identifier does not certify purity or suitability for a particular use. Published purity results apply only to the stated report batch.</p><div className="mt-4 flex flex-wrap gap-5">{reagent.source?<a href={reagent.source} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline">Reference identity record</a>:null}{p.coa?<a href={p.coa} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline">View certificate of analysis</a>:null}</div></section>
 <section className="mt-6 grid gap-4 md:grid-cols-2"><div className="surface-card p-5"><h2 className="text-xl font-extrabold">Documentation</h2><p className="mt-3 text-sm leading-7 text-muted">{seo.documentation}</p><Link href="/quality-assurance" className="mt-4 inline-block text-sm font-bold underline">Quality information</Link></div><div className="surface-card p-5"><h2 className="text-xl font-extrabold">Laboratory handling</h2><p className="mt-3 text-sm leading-7 text-muted">{seo.handling}</p><p className="mt-3 text-sm leading-7 text-muted">{p.notes}</p></div></section>
 <section className="mt-6 rounded-xl3 border border-line bg-white p-5 shadow-soft"><h2 className="text-xl font-extrabold">Product information</h2><ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">{p.highlights.map(item=><li key={item}>{item}</li>)}</ul><h3 className="mt-5 font-bold">Research context</h3><p className="mt-2 text-sm leading-7 text-muted">{p.intendedUse.join(' · ')}</p></section>
 <section className="mt-8"><h2 className="text-2xl font-extrabold">Related products</h2><div className="mt-5 grid gap-5 md:grid-cols-3">{related.map(p=><ProductCard key={p.id} p={p}/>)}</div></section>
 </Container></main></>;
}
