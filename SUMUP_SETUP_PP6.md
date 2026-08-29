# PP6 SumUp setup

Add these environment variables in Vercel for Production, Preview and Development:

- `SUMUP_API_KEY` = your complete secret SumUp API key
- `SUMUP_MERCHANT_CODE` = the merchant code shown in SumUp (for this account it appears as `MSMFKRTT`; confirm it in the SumUp dashboard)
- `NEXT_PUBLIC_SITE_URL` = `https://www.peptideproducts.co.uk`

After saving the variables, redeploy PP6.

## Live test

1. Add a low-value product/order to the cart.
2. Choose **Debit or credit card**.
3. Confirm the total before leaving the website.
4. Complete payment on the SumUp-hosted page.
5. Return to the website and confirm the order shows as paid.
6. Confirm the order appears in Admin and that Royal Mail remains a manual fulfilment action.

Never place `SUMUP_API_KEY` in a source file, GitHub, screenshots or chat.
