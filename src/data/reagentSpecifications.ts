import type { Product } from "./products";
// Parent-compound reference identifiers do not verify the chemical form or the supplied batch.
const identities = [
 ["glp-3-rt-","2381089-83-2","https://precision.fda.gov/ginas/app/ui/substances/NOP2Y096GV"],
 ["selank-","129954-34-3","https://precision.fda.gov/ginas/app/ui/substances/TS9JR8EP1G"],
 ["bpc-157-","137525-51-0","https://pubchem.ncbi.nlm.nih.gov/compound/Bpc-157"],
 ["tirzepatide-","2023788-19-2","https://pubchem.ncbi.nlm.nih.gov/compound/Tirzepatide"],
 ["ghk-cu-","89030-95-5","https://pubchem.ncbi.nlm.nih.gov/compound/Prezatide-copper"],
 ["nad-","53-84-9","https://www.sigmaaldrich.com/US/en/product/sigma/n8410"],
 ["glutathione-","70-18-8","https://www.sigmaaldrich.com/US/en/product/sial/y0000517"],
 ["melanotan-","121062-08-6","https://meshb.nlm.nih.gov/record/ui?ui=C079282"],
] as const;
const certificates: Record<string, { batch:string; purity:string; storage:string }> = {
 "bpc-157-5mg":{batch:"BYH20260204-01",purity:"99.3% HPLC",storage:"−20 ± 5°C"},
 "ghk-cu-50mg":{batch:"BYH20260128-3",purity:"99.5% HPLC",storage:"Dark, cool and dry; −20 to 8°C"},
 "ghk-cu-100mg":{batch:"BYH20260128-2",purity:"99.5% HPLC",storage:"Dark, cool and dry; −20 to 8°C"},
 "nad-500mg":{batch:"BYH20260204-08",purity:"99.5% HPLC",storage:"−20 ± 5°C"},
 "glutathione-500mg":{batch:"BYH20260225-05",purity:"99.4% HPLC",storage:"−20 ± 5°C"},
 "selank-sk10-10mg":{batch:"BYH20260220-09",purity:"99.2% HPLC",storage:"−20 ± 5°C"},
 "selank-sk5-5mg":{batch:"BYH20260220-02",purity:"99.2% HPLC",storage:"−20 ± 5°C"},
};
export function getReagentSpecification(product:Product) {
 const identity=identities.find(([prefix])=>product.id.startsWith(prefix));
 const report=certificates[product.id];
 return {cas:identity?.[1] ?? null, source:identity?.[2] ?? null,
 purity:report ? `${report.purity} — published report batch ${report.batch}` : "No batch-specific purity result published. Request the matching certificate before procurement.",
 storage:report ? `${report.storage} — per the published certificate. Follow the supplied batch label.` : "Confirm batch-specific storage conditions before procurement and follow the supplied label."};
}
