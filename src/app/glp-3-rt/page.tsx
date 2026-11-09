import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
export const metadata:Metadata={title:"GLP-3 RT Research Vials | Peptide Products",description:"GLP-3 RT 10mg, 20mg and 40mg lyophilised research vials. Review specifications and batch documentation. Laboratory research only.",alternates:{canonical:"https://www.peptideproducts.co.uk/glp-3-rt"}};
export default function Page(){return <><Header/><main className="bg-panel py-12"><Container><div className="soft-label">Laboratory materials</div><h1 className="mt-3 text-4xl font-extrabold">GLP-3 RT research vials</h1><p className="mt-5 max-w-3xl leading-7 text-muted">GLP-3 RT is the catalogue name for the compound identified by reference CAS 2381089-83-2. Compare 10mg, 20mg and 40mg lyophilised vial presentations. Confirm chemical form, batch identity and documentation before procurement.</p><p className="mt-4 font-bold">For laboratory research use only. Not for human or veterinary use.</p><div className="mt-8 grid gap-5 md:grid-cols-3">{products.filter(p=>p.id.startsWith('glp-3-rt-')).map(p=><ProductCard key={p.id} p={p}/>)}</div></Container></main></>}
