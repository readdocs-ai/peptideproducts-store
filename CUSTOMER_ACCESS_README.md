# Customer access and 18+ declaration

This branch is based on the live PP13-20 source at a51421366baed69e8872b8d4ac07e4573b754cdc. It introduces email-verified customer accounts before access to the homepage, catalogue, product details, assets and customer APIs. No bot exception is provided. Public access pages contain no product listings or prices.

## Customer journey

1. Visit any protected page and enter an email address at `/access`.
2. Follow the single-use sign-in email within 10 minutes.
3. On first entry, confirm age 18+, lawful laboratory research use, and access terms.
4. Continue to the originally requested page. Account/sign-out is available in the website header.

This records a customer declaration. It is not independent verification of age, identity or research credentials. Obtain the processor's written acceptance if they require verified age rather than a declaration. No date of birth or identity document is collected.

## Production implications

The homepage and catalogue require a customer session. Search engines receive the same wall, robots disallow crawling, and responses are private/no-store/noindex. Existing public search visibility will be affected. The full website terms and privacy pages remain behind access; concise access terms, privacy information and support contact details remain public under `/access`.

Existing admin Basic authentication remains independent. Provider notification POST routes retain their existing authentication. Ordering flags, bank settings, order email logic and Royal Mail payloads have not been changed. Customer API handlers also validate the session and declaration independently of proxy routing.

## Environment

- Set a random, private `AUTH_SECRET` of at least 32 random bytes. Use different Production and Preview secrets; never commit them.
- Production: existing `REDIS_URL`, `RESEND_API_KEY`, and `AUTH_URL=https://www.peptideproducts.co.uk`.
- Preview: existing `PP_TEST_REDIS_REDIS_URL` and `RESEND_API_KEY`. Leave `AUTH_URL` unset so each preview uses its own origin.
- Redis keys are namespaced `pp:customer-access:production:`, `preview:`, or `development:`. No order data migration is needed.
- Auth.js database sessions expire after 30 days, use secure HttpOnly/SameSite=Lax cookies on HTTPS, and are revoked on sign-out.
- Sign-in requests are rate limited in Redis (5 per email / 20 per IP per 15 minutes). Tokens are hashed by Auth.js, expire after 10 minutes and are atomically consumed.

## Verification

`npm run build` and TypeScript pass. `npm audit --omit=dev` reports no known production dependency vulnerabilities as of 6 November 2026. Next.js was patched from 16.4.0 to 16.4.5. The existing SMTP dependency was kept separate under the `pp-smtp-mailer` npm alias (Nodemailer 10.3.1), because Auth.js has an optional legacy Nodemailer peer; Resend authentication does not use that peer. SMTP transport configuration is unchanged.

With a disposable local Redis server, run:

```
REDIS_URL=redis://127.0.0.1:16379 npm run test:customer-access
```

The Redis test intentionally rejects non-local URLs. It tests token concurrency/replay/expiry, session deletion, declarations, shared rate limits and return paths.

The browser suite starts a disposable local Redis/server and captures authentication emails locally, without contacting Resend or creating real orders. Install Playwright Core separately or as a local test dependency and configure:

```
PP_REDIS_BINARY=/path/to/redis-server PP_PLAYWRIGHT_MODULE=/path/to/playwright-core PP_CHROMIUM_BINARY=/path/to/chromium npm run test:customer-browser
```

The local fixture is never imported by application code. Tests cover the email callback, HTML-validation bypass, unchecked age confirmation, verified-but-unconfirmed API rejection, direct product URLs, RSC/bypass headers, forged/expired/revoked sessions, replayed links, admin independence, mobile layout and browser errors.

Before production, verify an actual sign-in email arrives and the recipient can complete first-entry confirmation on the hosted preview. Then deploy this exact reviewed commit with Production environment settings and repeat a sign-in check on the production hostname. Do not promote Preview storage or reuse its session secret for Production.
