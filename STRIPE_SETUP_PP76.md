# PP7.6 Stripe Checkout Setup

This version uses Stripe Checkout with server-generated `price_data`. Stripe Product and Price IDs are not required.

## Vercel environment variables

Add these in Vercel Project Settings -> Environment Variables for Production, Preview, and Development as appropriate:

- `STRIPE_SECRET_KEY` = your Stripe secret key (`sk_live_...` for live payments)
- `STRIPE_WEBHOOK_SECRET` = the signing secret from the Stripe webhook endpoint (`whsec_...`)
- `NEXT_PUBLIC_SITE_URL` = `https://www.peptideproducts.co.uk`
- `REDIS_URL` = keep the existing working Redis value

Never place the Stripe secret key in browser code or commit it to GitHub.

## Stripe webhook

In Stripe Dashboard -> Developers -> Webhooks, create an endpoint:

`https://www.peptideproducts.co.uk/api/webhook`

Subscribe to:

- `checkout.session.completed`
- `checkout.session.async_payment_succeeded`

Copy the endpoint signing secret into `STRIPE_WEBHOOK_SECRET` in Vercel, then redeploy.

## Test sequence

1. Use Stripe test keys first.
2. Add a normal in-stock product to the cart.
3. Choose card payment at checkout.
4. Confirm the customer is redirected to Stripe Checkout.
5. Complete a Stripe test payment.
6. Confirm the order appears in Admin as paid.
7. Confirm customer/admin order emails arrive.
8. Confirm the success page opens and the cart is cleared.
9. Replace test keys with live keys only after the full test succeeds.

## Notes

- Product IDs and quantities are sent from the browser.
- Product names and prices are looked up again on the server from `src/data/products.ts`.
- The webhook verifies the Stripe signature and checks the paid amount against the stored order total before marking an order paid.
- Customer checkout is card-only through Stripe; legacy payment records remain readable in admin.
- Reta40 links have been removed from the product, cart, and checkout pages.
