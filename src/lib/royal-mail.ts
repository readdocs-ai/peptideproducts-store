import type { StoredOrder } from "@/lib/orders";

const API_BASE = "https://api.parcel.royalmail.com/api/v1";
const REQUEST_TIMEOUT_MS = 20000;

export type RoyalMailOrderSummary = {
  orderIdentifier: number;
  orderReference: string;
  createdOn?: string | null;
  orderDate?: string | null;
  printedOn?: string | null;
  manifestedOn?: string | null;
  shippedOn?: string | null;
  trackingNumber?: string | null;
  packages?: Array<{
    packageNumber?: number;
    trackingNumber?: string | null;
  }>;
};

type RoyalMailCreateResponse = {
  successCount?: number;
  errorsCount?: number;
  createdOrders?: RoyalMailOrderSummary[];
  failedOrders?: Array<{
    errors?: Array<{
      errorCode?: number | string;
      errorMessage?: string;
      fields?: Array<{ fieldName?: string; value?: string }>;
    }>;
  }>;
};

export class RoyalMailApiError extends Error {
  status: number;
  details: unknown;

  constructor(message: string, status = 500, details?: unknown) {
    super(message);
    this.name = "RoyalMailApiError";
    this.status = status;
    this.details = details;
  }
}

function getApiKey() {
  const key = process.env.ROYAL_MAIL_CLICK_DROP_API_KEY?.trim();

  if (!key) {
    throw new RoyalMailApiError(
      "ROYAL_MAIL_CLICK_DROP_API_KEY is not configured.",
      500,
    );
  }

  return key;
}

async function royalMailFetch(path: string, init?: RequestInit) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const headers = new Headers(init?.headers);
    headers.set("Authorization", getApiKey());
    headers.set("Accept", "application/json");
    if (init?.body) headers.set("Content-Type", "application/json");

    const response = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers,
      cache: "no-store",
      signal: controller.signal,
    });

    const contentType = response.headers.get("content-type") || "";
    const rawText = await response.text().catch(() => "");
    let body: unknown = rawText;

    if (contentType.toLowerCase().includes("json") && rawText) {
      try {
        body = JSON.parse(rawText);
      } catch {
        body = rawText;
      }
    }

    if (!response.ok) {
      const message = extractApiErrorMessage(body);
      const responseHeaders = Object.fromEntries(response.headers.entries());
      const requestBody = typeof init?.body === "string"
        ? safelyParseJson(init.body)
        : null;
      const diagnosticId = `rm-${Date.now().toString(36)}`;

      const details = {
        diagnosticId,
        method: init?.method || "GET",
        path,
        status: response.status,
        statusText: response.statusText,
        contentType,
        responseHeaders,
        responseBody: body,
        requestBody,
      };

      console.error("ROYAL MAIL HTTP ERROR", details);

      throw new RoyalMailApiError(
        message ||
          `Royal Mail returned HTTP ${response.status}${
            response.statusText ? ` ${response.statusText}` : ""
          }. Diagnostic reference: ${diagnosticId}.`,
        response.status,
        details,
      );
    }

    return body;
  } catch (error) {
    if (error instanceof RoyalMailApiError) throw error;

    if (error instanceof Error && error.name === "AbortError") {
      throw new RoyalMailApiError(
        "Royal Mail did not respond in time. Use Check Royal Mail before trying again.",
        504,
      );
    }

    throw new RoyalMailApiError(
      "Could not connect to Royal Mail. Use Check Royal Mail before trying again.",
      502,
      error,
    );
  } finally {
    clearTimeout(timeout);
  }
}


function safelyParseJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function extractApiErrorMessage(body: unknown): string {
  if (typeof body === "string") return body.trim();
  if (!body || typeof body !== "object") return "";

  const value = body as Record<string, unknown>;
  const direct = [value.message, value.title, value.detail, value.error]
    .find((item) => typeof item === "string" && item.trim());
  if (typeof direct === "string") return direct.trim();

  // Create-order validation failures are returned inside failedOrders rather
  // than the top-level errors property. Surface those messages in Admin so a
  // rejected field can be corrected without checking server logs.
  if (Array.isArray(value.failedOrders)) {
    const messages = value.failedOrders.flatMap((failed) => {
      if (!failed || typeof failed !== "object") return [];
      const failedRecord = failed as Record<string, unknown>;
      if (!Array.isArray(failedRecord.errors)) return [];

      return failedRecord.errors.map((item) => {
        if (!item || typeof item !== "object") return String(item || "");
        const record = item as Record<string, unknown>;
        const message = String(
          record.errorMessage || record.message || record.errorCode || "Invalid order data",
        );
        const fields = Array.isArray(record.fields)
          ? record.fields
              .map((field) => {
                if (!field || typeof field !== "object") return "";
                const fieldRecord = field as Record<string, unknown>;
                const name = String(fieldRecord.fieldName || "").trim();
                const fieldValue = String(fieldRecord.value || "").trim();
                return name ? `${name}${fieldValue ? `=${fieldValue}` : ""}` : "";
              })
              .filter(Boolean)
          : [];
        return fields.length ? `${message} (${fields.join(", ")})` : message;
      });
    }).filter(Boolean);

    if (messages.length) return messages.join("; ");
  }

  if (Array.isArray(value.errors)) {
    const messages = value.errors
      .map((item) => {
        if (typeof item === "string") return item;
        if (!item || typeof item !== "object") return "";
        const record = item as Record<string, unknown>;
        return String(record.message || record.errorMessage || record.code || "");
      })
      .filter(Boolean);
    if (messages.length) return messages.join("; ");
  }

  if (value.errors && typeof value.errors === "object") {
    const messages = Object.entries(value.errors as Record<string, unknown>)
      .flatMap(([field, problem]) => {
        const list = Array.isArray(problem) ? problem : [problem];
        return list.map((item) => `${field}: ${String(item)}`);
      });
    if (messages.length) return messages.join("; ");
  }

  return "";
}

function defaultPackageWeightInGrams(order: StoredOrder) {
  const configured = Number(process.env.ROYAL_MAIL_DEFAULT_WEIGHT_GRAMS || "100");
  const baseWeight = Number.isFinite(configured) && configured > 0
    ? Math.round(configured)
    : 100;
  const quantity = Math.max(
    1,
    order.items.reduce((total, item) => total + Math.max(1, item.qty || 1), 0),
  );

  // Click & Drop requires a package and a positive weight even when the
  // postage service will be selected manually later. Keep the default small,
  // but scale it for multi-item orders.
  return Math.max(1, Math.min(20000, baseWeight * quantity));
}

function clean(value: string | null | undefined, maxLength: number) {
  return (value || "").trim().slice(0, maxLength);
}

function countryCodeForOrder(order: StoredOrder) {
  const raw = clean(order.shippingAddress.country, 100).toUpperCase();

  if (
    order.shippingRegion === "UK" ||
    ["GB", "GBR", "UK", "UNITED KINGDOM", "GREAT BRITAIN"].includes(raw)
  ) {
    return "GBR";
  }

  return null;
}

export function validateOrderForRoyalMail(order: StoredOrder) {
  const errors: string[] = [];
  const address = order.shippingAddress;

  if (order.status !== "paid") {
    errors.push("Only orders marked Paid can be sent to Royal Mail.");
  }

  if (!clean(address.name || order.name, 200)) errors.push("Customer name is missing.");
  if (!clean(address.line1, 100)) errors.push("Address line 1 is missing.");
  if (!clean(address.city, 100)) errors.push("Town or city is missing.");
  if (!clean(address.postalCode, 20)) errors.push("Postcode is missing.");

  if (!countryCodeForOrder(order)) {
    errors.push(
      "International Royal Mail imports are not enabled yet because customs information must be reviewed separately.",
    );
  }

  return errors;
}

function trackingFromSummary(summary: RoyalMailOrderSummary) {
  return (
    clean(summary.trackingNumber, 100) ||
    clean(
      summary.packages?.find((item) => clean(item.trackingNumber, 100))
        ?.trackingNumber,
      100,
    ) ||
    null
  );
}

export function getRoyalMailTracking(summary: RoyalMailOrderSummary) {
  return trackingFromSummary(summary);
}

export async function findRoyalMailOrder(orderReference: string) {
  // Royal Mail's specific-order path requires a fragile quoted path syntax.
  // Some requests were being interpreted as two invalid references and
  // returned HTTP 400 before the create-order POST could run. Retrieve the
  // newest orders through the pageable endpoint instead and match locally.
  const body = await royalMailFetch("/orders?pageSize=100", { method: "GET" });

  const orders =
    body && typeof body === "object" && Array.isArray((body as { orders?: unknown }).orders)
      ? ((body as { orders: RoyalMailOrderSummary[] }).orders)
      : [];

  return orders.find((item) => item.orderReference === orderReference) || null;
}

function formatFailure(response: RoyalMailCreateResponse) {
  const errors = response.failedOrders?.flatMap((failed) => failed.errors || []) || [];

  if (!errors.length) return "Royal Mail rejected the order.";

  return errors
    .map((error) => {
      const fields = (error.fields || [])
        .map((field) => field.fieldName)
        .filter(Boolean)
        .join(", ");
      return `${error.errorMessage || "Invalid order data"}${
        fields ? ` (${fields})` : ""
      }`;
    })
    .join("; ");
}

export async function createRoyalMailOrder(order: StoredOrder) {
  const errors = validateOrderForRoyalMail(order);
  if (errors.length) {
    throw new RoyalMailApiError(errors.join(" "), 400, errors);
  }

  const address = order.shippingAddress;
  const optionalAddressLine2 = clean(address.line2, 100);
  const optionalCounty = clean(address.state, 100);
  const optionalPhone = clean(order.phone, 25);
  const optionalEmail = clean(order.email, 100);

  // Keep the first request deliberately minimal. Empty optional strings and
  // optional commercial fields can cause the Public API to reject an entire
  // order with HTTP 400. Postage and service are still selected manually in
  // Click & Drop after the order has imported.
  const payload = {
    items: [
      {
       
  orderReference: clean(order.id, 40),
  orderDate: new Date(order.createdAt).toISOString(),
  subtotal: Number(order.subtotal.toFixed(2)),
  shippingCostCharged: Number(order.shipping.toFixed(2)),
  total: Number(order.total.toFixed(2)),
  isRecipientABusiness: false,
        recipient: {
          address: {
            fullName: clean(address.name || order.name, 200),
            addressLine1: clean(address.line1, 100),
            ...(optionalAddressLine2
              ? { addressLine2: optionalAddressLine2 }
              : {}),
            city: clean(address.city, 100),
            ...(optionalCounty ? { county: optionalCounty } : {}),
            postcode: clean(address.postalCode, 20),
            countryCode: countryCodeForOrder(order),
          },
          ...(optionalPhone ? { phoneNumber: optionalPhone } : {}),
          ...(optionalEmail ? { emailAddress: optionalEmail } : {}),
        },
        packages: [
          {
            weightInGrams: defaultPackageWeightInGrams(order),
            packageFormatIdentifier: "Parcel",
          },
        ],
      },
    ],
  };

  const body = (await royalMailFetch("/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  })) as RoyalMailCreateResponse;

  const created = body.createdOrders?.find(
    (item) => item.orderReference === order.id,
  );

  if (!created) {
    throw new RoyalMailApiError(formatFailure(body), 400, body);
  }

  return created;
}
