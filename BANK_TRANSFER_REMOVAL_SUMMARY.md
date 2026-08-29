# Bank transfer removal

Bank transfer has been disabled for new orders.

## Main changes
- Checkout now offers secure card payment through Stripe only.
- Legacy manual payment order creation has been retired; new customer orders use the Stripe checkout route.
- Old bank account details were removed from active checkout and order-success pages.
- Customer-facing payment messaging now directs customers to the simplified Stripe card checkout.
- Customer-facing payment copy was updated where relevant.
- Legacy bank-transfer order types remain recognised in admin/history so old records do not break, but the closed account details are no longer present.

## Validation note
The production build could not be run in the working environment because project dependencies were not installed (`next: not found`). Please run `npm i` and `npm run build` locally before pushing.
