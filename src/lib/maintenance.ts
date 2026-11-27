// PP13.15: production checkout requires a deliberate, Production-only launch flag.
// A source deployment alone cannot reopen ordering. Preview remains isolated.
export const IS_PREVIEW = process.env.VERCEL_ENV === "preview";
export const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

export function getBankTransferDetails() {
  const accountName = process.env.BANK_TRANSFER_ACCOUNT_NAME?.trim() || "";
  const sortCode = process.env.BANK_TRANSFER_SORT_CODE?.trim() || "";
  const accountNumber = process.env.BANK_TRANSFER_ACCOUNT_NUMBER?.trim() || "";

  if (!accountName || !/^\d{2}[- ]?\d{2}[- ]?\d{2}$/.test(sortCode) || !/^\d{8}$/.test(accountNumber)) {
    return null;
  }

  return { accountName, sortCode, accountNumber };
}

export const PREVIEW_TEST_READY = IS_PREVIEW &&
  Boolean(process.env.PP_TEST_REDIS_REDIS_URL?.trim()) &&
  Boolean(process.env.PP_TEST_ORDER_EMAIL?.trim()) &&
  Boolean(getBankTransferDetails());

// This flag must be added to Production ONLY after final approval and verification.
// Exact string "true" is required; absent, false, or Preview cannot open Production.
export const PRODUCTION_ORDERING_READY = IS_PRODUCTION &&
  process.env.PP_ENABLE_PRODUCTION_ORDERS === "true" &&
  Boolean(process.env.REDIS_URL?.trim()) &&
  Boolean(getBankTransferDetails()) &&
  Boolean(process.env.RESEND_API_KEY?.trim());

export const ORDERING_PAUSED = !(PREVIEW_TEST_READY || PRODUCTION_ORDERING_READY);
