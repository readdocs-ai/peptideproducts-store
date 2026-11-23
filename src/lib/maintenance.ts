// PP13.15: production order requests require a deliberate, Production-only launch flag.
// A source deployment alone cannot reopen ordering. Preview remains isolated.
export const IS_PREVIEW = process.env.VERCEL_ENV === "preview";
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

export const PREVIEW_TEST_READY = IS_PREVIEW &&
  Boolean(process.env.PP_TEST_REDIS_REDIS_URL?.trim()) &&
  Boolean(process.env.PP_TEST_ORDER_EMAIL?.trim());

// Only the request-only deployment uses this flag.
export const PRODUCTION_ORDERING_READY = IS_PRODUCTION &&
  process.env.PP_ENABLE_ORDER_REQUESTS === "true" &&
  Boolean(process.env.REDIS_URL?.trim()) &&
  Boolean(process.env.RESEND_API_KEY?.trim());

export const ORDERING_PAUSED = !(PREVIEW_TEST_READY || PRODUCTION_ORDERING_READY);
