PEPTIDE PRODUCTS — OCT 30 PRODUCT & QUALITY UPDATE (PP13-20)

Based on PP13-19 with the Royal Mail billing-address fix from commit 2a38896.

WHAT IS INCLUDED
- Original Janoshik certificate #163216 retained for Alluvi Retatrutide 40mg.
- Original Janoshik certificate #147174 retained for Alluvi Tirzepatide 40mg.
- Existing original image files remain unchanged in public/docs/coa.
- Nine ADDITIONAL named Janoshik verification links in product galleries and Quality Information:
  Retatrutide: 239742 (purity), 240665 (heavy metals), 240666 (LC-MS), 240663 (sterility).
  Tirzepatide: 239744 (purity), 240672 (heavy metals), 240673 (LC-MS), 240674 (sterility).
  Alluvi NAD+ 1000mg pen set: 239746.
- New Alluvi Tirzepatide 40mg product, price GBP 130, free UK delivery, research-only copy.
- Three supplied product images converted to WebP, with the sideways/upside-down images rotated upright. Packaging details are not edited, replaced or retouched.
- WhatsApp site support buttons standardized on 07459 676630, international link 447459676630, from customer's previous instruction. Admin customer-specific WhatsApp links remain customer-specific.
- The old certificates are retained visibly because stock supported by those reports remains on sale. The newer reports are additional records, not replacements.

VALIDATION PERFORMED
- All modified TS/TSX files transpile without syntax errors using global TypeScript 5.8.3.
- tests/verify-oct30-site-update.cjs passes all assertions (certificates, tests, product, photos, support number).
- Full Next.js build not performed here: dependency installation timed out. Run npm ci and npm run build locally before Git commit/push.
- Janoshik verification URLs were transcribed exactly as supplied. Laboratory pages could not be opened in this environment. Do not infer measured values or batch equivalence from link names; customers should check the report details and batch identification with the laboratory.
- No changes pushed to GitHub or Vercel by this package.

RECOMMENDED WINDOWS CMD STEPS (PATCH PACKAGE)
From: C:\Users\wasee\Downloads\Peptide-Products-PP13-19-CONTACT-UPDATE
1. git status -sb
2. tar -xf "%USERPROFILE%\Downloads\PP13-20-QUALITY-TIRZ-WHATSAPP-PATCH.zip"
3. node tests\verify-oct30-site-update.cjs
4. git diff --check
5. npm run build
Then review file changes before committing. Do not extract the full project ZIP over an existing repository unless intentionally creating a new folder. Use the patch for an existing Git-connected folder.
