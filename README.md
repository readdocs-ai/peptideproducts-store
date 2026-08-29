# Peptide Products — Research Store Starter

Next.js + Tailwind ecommerce starter for peptide/compound products with:
- Catalog + category filter
- Product pages w/ research disclaimers
- Cart + demo checkout with mandatory "research use only" checkbox
- Policies: Disclaimer, Terms, Privacy, Shipping, FAQ, Contact

## Run
```bash
npm install
npm run dev
```

## Edit products
`src/data/products.ts`

## Images
`public/products/*.jpg`

## Research-store features
- Age verification (18+) modal (localStorage)
- Site-wide Research Use Only banner
- COA/SDS downloads per product (template PDFs in public/docs)


## Email (Contact + Wholesale)
This project sends emails via SMTP using Nodemailer.

Create a `.env.local` file:

```
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=465
SMTP_USER=info@peptideproducts.co.uk
SMTP_PASS=yourpassword
SMTP_FROM=Peptide Products <info@peptideproducts.co.uk>
```

- Contact form sends to: info@peptideproducts.co.uk
- Wholesale form sends to: info@peptideproducts.co.uk

