# GLP-3 RT catalogue label images — 10 November 2026

Base Production source: `9ea9b000cc20fca4caf0095b53f036856262406a`.

Six catalogue images were edited using the built-in image generation tool to show **GLP-3 RT** on the actual pictured labels. Each image retains its 10mg, 20mg or 40mg strength, Peptide Products branding and research-use-only wording. These are edited catalogue visuals, not independent evidence of physical packaging or batch contents.

## File mapping

For each of these suffixes:

- `10mg-vial`
- `20mg-vial`
- `40mg-vial`
- `10mg-research-vial`
- `20mg-research-vial`
- `40mg-research-vial`

The original `public/products/glp-3-rt-{suffix}.webp` is retained unchanged. The active replacement is `public/products/glp-3-rt-{suffix}-label-v2.webp`. New filenames prevent browsers and image optimisation caches from retaining the old displayed label.

The image and gallery references for all six products point to the replacements. The shop Open Graph image points to the new 40mg vial image. Other catalogue content and enquiry-only restrictions are unchanged.

## Prompt set

One edit per original image, using the matching strength:

> Replace only the large black compound name on the white paper label with the exact text GLP-3 RT. Preserve the red strength badge as 10mg, 20mg or 40mg as applicable. Keep the original PP logo, Peptide Products, Laboratory Compounds, Lyophilized Peptide, For Research Use Only, and UK. Match the bold black sans serif typography and centre the new name in the same area. Preserve bottle geometry, glass, powder, red cap, silver closure, reflections, background and portrait composition. Single vial; no added claims, certification marks or batch numbers.

All six outputs were visually checked for name, strength and label wording, then encoded as WebP for the website.

## Verification

- Production build passed.
- All six active image and gallery paths resolve to existing new assets.
- All original assets remain present and unchanged.
- Six enquiry-only flags, prices, descriptions and other products remain unchanged.

To restore the earlier image appearance, restore the two changed source files from the base commit. The original image files are still present.
