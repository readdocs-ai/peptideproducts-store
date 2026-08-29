const SUMUP_API_BASE = "https://api.sumup.com";

export type SumUpCheckout = {
  id: string;
  checkout_reference: string;
  amount: number;
  currency: string;
  status: "PENDING" | "FAILED" | "PAID" | "EXPIRED";
  hosted_checkout_url?: string;
};

function getApiKey() {
  const value = process.env.SUMUP_API_KEY?.trim();
  if (!value) throw new Error("SUMUP_API_KEY is not configured");
  return value;
}

function getMerchantCode() {
  const value = process.env.SUMUP_MERCHANT_CODE?.trim();
  if (!value) throw new Error("SUMUP_MERCHANT_CODE is not configured");
  return value;
}

async function sumUpRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${SUMUP_API_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${getApiKey()}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const text = await response.text();
  let data: unknown = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const detail =
      typeof data === "object" && data && "message" in data
        ? String((data as { message?: unknown }).message || "")
        : text;
    throw new Error(`SumUp request failed (${response.status})${detail ? `: ${detail}` : ""}`);
  }

  return data as T;
}

export async function createSumUpHostedCheckout(params: {
  orderId: string;
  amountGBP: number;
  siteUrl: string;
}) {
  const siteUrl = params.siteUrl.replace(/\/$/, "");
  return sumUpRequest<SumUpCheckout>("/v0.1/checkouts", {
    method: "POST",
    body: JSON.stringify({
      checkout_reference: params.orderId,
      amount: Math.round(params.amountGBP * 100) / 100,
      currency: "GBP",
      merchant_code: getMerchantCode(),
      description: `Peptide Products order ${params.orderId}`,
      return_url: `${siteUrl}/api/sumup/webhook`,
      redirect_url: `${siteUrl}/sumup-return?orderId=${encodeURIComponent(params.orderId)}`,
      hosted_checkout: { enabled: true },
    }),
  });
}

export async function getSumUpCheckout(checkoutId: string) {
  return sumUpRequest<SumUpCheckout>(
    `/v0.1/checkouts/${encodeURIComponent(checkoutId)}`,
    { method: "GET" },
  );
}
