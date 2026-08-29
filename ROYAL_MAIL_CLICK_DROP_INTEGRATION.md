# Royal Mail Click & Drop integration

## Environment variable

The live Vercel project must contain:

```text
ROYAL_MAIL_CLICK_DROP_API_KEY=<private Click & Drop authentication key>
```

Never place the real key in this project, GitHub, screenshots, or support messages.

## Admin workflow

1. Open `/admin/orders`.
2. Confirm the order address is correct.
3. Mark the order **Paid**.
4. Click **Send to Royal Mail** on that order.
5. Open Click & Drop, review the imported order, choose the service, and print the label.
6. Return to the website and click **Check Royal Mail & sync tracking**.
7. Once the tracking number appears, click **Mark Shipped**. The existing shipped-email workflow sends the customer their dispatch email.

## Safety features

- Only individually selected paid UK orders can be sent.
- International orders are blocked until customs fields are implemented and reviewed.
- The website searches Click & Drop by the existing `PP-...` order reference before creating an order.
- This prevents accidental duplicates after a timeout or interrupted request.
- The Click & Drop order identifier, submission time, last check, errors, and tracking number are stored with the website order in Redis.
- No postage service is automatically selected and no label is automatically purchased.

## Files added or changed

- `src/lib/orders.ts`
- `src/lib/royal-mail.ts` (new)
- `src/app/admin/api/orders/[id]/royal-mail/route.ts` (new)
- `src/components/admin/OrderStatusControls.tsx`
- `src/app/admin/orders/page.tsx`
- `ROYAL_MAIL_CLICK_DROP_INTEGRATION.md` (new)
