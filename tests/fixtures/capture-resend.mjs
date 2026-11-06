// Local integration-test fixture. Never imported by application code.
import { appendFileSync } from 'node:fs';
const originalFetch = globalThis.fetch;
globalThis.fetch = async (input, init) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  if (url === 'https://api.resend.com/emails') {
    if (!process.env.PP_AUTH_CAPTURE_FILE || process.env.VERCEL_ENV) throw new Error('Email capture is only available in a local test process');
    appendFileSync(process.env.PP_AUTH_CAPTURE_FILE, String(init.body) + '\n', { mode: 0o600 });
    return Response.json({ id: 'local-captured-email' });
  }
  return originalFetch(input, init);
};
