# Alluvi consolidation update

This release removes the legacy unavailable branded Retatrutide pen from the customer-facing catalogue and makes Alluvi Retatrutide 40mg the single current pen product.

## Main changes

- Removed the old unavailable Retatrutide pen product record.
- Removed all customer-facing references to the previous brand.
- Kept the established Retatrutide information and SEO pages.
- Updated internal links so purchase intent points to `/product/alluvi-retatrutide-40mg`.
- Added a permanent redirect from `/product/retatrutide` to the Alluvi product page.
- Marked Alluvi as in stock and ready to order.
- Added Alluvi test-report access and retained the existing £125 price.
- Added Buy Now buttons on the homepage, shop page, Alluvi guide pages, product page and product cards.
- Buy Now adds Alluvi to the basket and takes the customer directly to the cart/checkout journey.

## Validation

- TypeScript validation passed with `npx tsc --noEmit`.
- The Next.js production build compiled successfully and passed lint/type validation.
- Page-data collection could not complete within the execution window because the shared project does not contain the live environment configuration.
