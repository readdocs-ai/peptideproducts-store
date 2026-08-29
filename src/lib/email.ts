import { Resend } from "resend";

export function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  return new Resend(apiKey);
}

export const PAYMENT_DETAILS = {
  bank: {
    accountName: "Bank transfer unavailable",
    sortCode: "",
    accountNumber: "",
    bankName: "",
    bankAddress: "",
    iban: "",
    swiftBic: "",
    currencies: "",
  },
  crypto: {
    btc: "bc1q7dn35crn5mrcnkf3mrru3h6yz0pdp8nnlungnn",
    eth: "0xaa71a932f86f59a19C1899968c3F0F852cFE93F4",
    usdtErc20: "0xaa71a932f86f59a19C1899968c3F0F852cFE93F4",
  },
};

const SITE_URL = "https://www.peptideproducts.co.uk";
const SUPPORT_EMAIL = "info@peptideproducts.co.uk";
const WHATSAPP_NUMBER = "447429098887";

type EmailOrderItem = {
  name: string;
  qty: number;
  priceGBP: number;
};

type PaymentMethod = "bank_transfer" | "crypto" | "card";

type EmailShippingAddress = {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type SendOrderEmailsParams = {
  orderId: string;
  customerName: string;
  customerEmail: string;
  paymentMethod: PaymentMethod;
  subtotalGBP: number;
  shippingGBP: number;
  totalGBP: number;
  items: EmailOrderItem[];
  shippingRegion: "UK" | "International";
  shippingAddress: EmailShippingAddress;
};

type SendShippedEmailParams = {
  orderId: string;
  customerName: string;
  customerEmail: string;
  trackingNumber: string;
};

type SendOrderUpdateEmailParams = {
  orderId: string;
  customerName: string;
  customerEmail: string;
  status: "pending" | "paid" | "shipped" | "cancelled";
  paymentMethod: PaymentMethod;
  totalGBP: number;
  refundedAmountGBP: number;
  adjustedTotalGBP: number | null;
  adminNote: string;
  trackingNumber?: string | null;
};
type OrderTotals = {
  subtotalGBP: number;
  shippingGBP: number;
  totalGBP: number;
};

function roundGBP(value: number) {
  return Math.round(value * 100) / 100;
}

function safeNumber(value: unknown, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getWhatsAppHref(orderId?: string) {
  const message = orderId
    ? `Hi Peptide Products, I need help with order ${orderId}.`
    : "Hi Peptide Products, I have a question about an order or product.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderButton(href: string, label: string, background = "#2455e6") {
  return `
    <a
      href="${href}"
      style="display:inline-block;background:${background};color:#ffffff;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:14px;margin:6px 8px 6px 0;"
    >
      ${label}
    </a>
  `;
}

function renderItems(items: EmailOrderItem[]) {
  return items
    .map(
      (item) =>
        `<li style="margin-bottom:6px;">${escapeHtml(item.name)} x ${
          item.qty
        } - ${formatGBP(item.priceGBP * item.qty)}</li>`,
    )
    .join("");
}

function renderShippingAddress(address: EmailShippingAddress) {
  const parts = [
    address.line1,
    address.line2,
    address.city,
    address.state,
    address.postalCode,
    address.country,
  ].filter(Boolean);

  return parts.map((part) => escapeHtml(part)).join("<br />");
}

function renderShippingAddressText(address: EmailShippingAddress) {
  return [
    address.line1,
    address.line2,
    address.city,
    address.state,
    address.postalCode,
    address.country,
  ]
    .filter(Boolean)
    .join("\n");
}

function renderItemsText(items: EmailOrderItem[]) {
  return items
    .map(
      (item) =>
        `- ${item.name} x ${item.qty} - ${formatGBP(item.priceGBP * item.qty)}`,
    )
    .join("\n");
}

function renderEmailFooterText() {
  return [
    "Peptide Products",
    "Premium UK research peptide supplier",
    `Support: ${SUPPORT_EMAIL}`,
    `Website: ${SITE_URL}`,
    "Company: Peptide Products Ltd",
    "Products are supplied for laboratory research use only. Not for human or veterinary use.",
  ].join("\n");
}

function renderEmailFooterHtml() {
  return `
    <div style="border-top:1px solid #e5e7eb;margin-top:24px;padding-top:18px;color:#6b7280;font-size:12px;line-height:1.6;">
      <p style="margin:0 0 8px 0;font-weight:800;color:#111827;">Peptide Products</p>
      <p style="margin:0 0 8px 0;">Premium UK research peptide supplier</p>
      <p style="margin:0 0 8px 0;">
        Support: <a href="mailto:${SUPPORT_EMAIL}" style="color:#2455e6;text-decoration:none;">${SUPPORT_EMAIL}</a><br />
        Website: <a href="${SITE_URL}" style="color:#2455e6;text-decoration:none;">${SITE_URL}</a><br />
        Company: Peptide Products Ltd
      </p>
      <p style="margin:0;color:#6b7280;">
        This is a transactional email about your order. Products are supplied for
        laboratory research use only. Not for human or veterinary use.
      </p>
    </div>
  `;
}

function getOrderTotals(params: SendOrderEmailsParams): OrderTotals {
  const subtotalGBP = roundGBP(Math.max(0, safeNumber(params.subtotalGBP)));
  const shippingGBP = roundGBP(Math.max(0, safeNumber(params.shippingGBP)));
  const totalGBP = roundGBP(Math.max(0, safeNumber(params.totalGBP)));

  return {
    subtotalGBP,
    shippingGBP,
    totalGBP,
  };
}

function renderOrderTotals(totals: OrderTotals) {
  return `
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr>
        <td style="padding:8px 0;color:#4b5563;">Subtotal</td>
        <td style="padding:8px 0;text-align:right;font-weight:700;">${formatGBP(
          totals.subtotalGBP,
        )}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;color:#4b5563;">Shipping</td>
        <td style="padding:8px 0;text-align:right;font-weight:700;">${formatGBP(
          totals.shippingGBP,
        )}</td>
      </tr>
      <tr>
        <td colspan="2" style="border-top:1px solid #e5e7eb;padding-top:10px;"></td>
      </tr>
      <tr>
        <td style="padding:8px 0;font-size:16px;font-weight:800;color:#111827;">Total</td>
        <td style="padding:8px 0;text-align:right;font-size:18px;font-weight:800;color:#111827;">${formatGBP(
          totals.totalGBP,
        )}</td>
      </tr>
    </table>
  `;
}

function renderResearchUseNotice() {
  return `
    <div style="border-top:1px solid #e5e7eb;margin-top:22px;padding-top:16px;">
      <p style="font-size:12px;line-height:1.6;color:#6b7280;margin:0;">
        Products are supplied for laboratory research use only. They are not for human consumption,
        medical use, veterinary use, clinical use or treatment purposes.
      </p>
    </div>
  `;
}

function getPaymentMethodLabel(paymentMethod: PaymentMethod) {
  if (paymentMethod === "bank_transfer") return "Bank Transfer";
  if (paymentMethod === "crypto") return "Cryptocurrency";
  return "Card";
}

function getPaymentStatusText(paymentMethod: PaymentMethod) {
  if (paymentMethod === "bank_transfer") {
    return "Bank transfer unavailable - contact support";
  }

  if (paymentMethod === "crypto") {
    return "Awaiting cryptocurrency payment confirmation";
  }

  return "Payment received";
}

function getPendingPaymentReminderText(params: {
  orderId: string;
  paymentMethod: PaymentMethod;
  totalGBP: number;
}) {
  if (params.paymentMethod === "bank_transfer") {
    return [
      "Payment still required",
      "Your order is currently pending because payment has not yet been confirmed.",
      `Amount due: ${formatGBP(params.totalGBP)}`,
      `Payment reference: ${params.orderId}`,
      "",
      "Bank transfer is no longer available. Please contact support for assistance with this existing order.",
      "Use your order number as the payment reference so we can match the payment to your order quickly.",
      "Please do not place the order again. Duplicate orders can delay processing.",
      "If you are unsure what to do, reply to this email or message us on WhatsApp.",
    ].join("\n");
  }

  if (params.paymentMethod === "crypto") {
    return [
      "Payment still required",
      "Your order is currently pending because cryptocurrency payment has not yet been confirmed.",
      `Amount due: ${formatGBP(params.totalGBP)}`,
      `Payment reference: ${params.orderId}`,
      "",
      "Please complete payment using the cryptocurrency details from your order confirmation email.",
      "Please do not place the order again. Duplicate orders can delay processing.",
      "If you are unsure what to do, reply to this email or message us on WhatsApp.",
    ].join("\n");
  }

  return "";
}

function getPendingPaymentReminderHtml(params: {
  orderId: string;
  paymentMethod: PaymentMethod;
  totalGBP: number;
}) {
  const safeOrderId = escapeHtml(params.orderId);

  if (params.paymentMethod === "bank_transfer") {
    return `
      <div style="background:#fff7ed;border:2px solid #fb923c;border-radius:18px;padding:18px;margin:18px 0;">
        <h2 style="margin:0 0 10px 0;font-size:22px;color:#9a3412;">Payment still required</h2>
        <p style="margin:0 0 10px 0;color:#7c2d12;line-height:1.6;font-weight:700;">
          Your order is currently pending because payment has not yet been confirmed.
        </p>
        <p style="margin:0 0 10px 0;color:#7c2d12;line-height:1.6;">
          Bank transfer is no longer available. Please contact support for assistance with this existing order.
          Use your order number as the payment reference so we can match the payment quickly.
        </p>
        <div style="background:#ffffff;border:1px solid #fed7aa;border-radius:14px;padding:14px;margin-top:12px;">
          <p style="margin:0 0 8px 0;"><strong>Amount due:</strong> ${formatGBP(
            params.totalGBP,
          )}</p>
          <p style="margin:0;"><strong>Payment reference:</strong> ${safeOrderId}</p>
        </div>
        <p style="margin:12px 0 0 0;color:#7c2d12;line-height:1.6;font-weight:700;">
          Please do not place the order again. Duplicate orders can delay processing.
          If you are unsure what to do, reply to this email or message us on WhatsApp.
        </p>
      </div>
    `;
  }

  if (params.paymentMethod === "crypto") {
    return `
      <div style="background:#fff7ed;border:2px solid #fb923c;border-radius:18px;padding:18px;margin:18px 0;">
        <h2 style="margin:0 0 10px 0;font-size:22px;color:#9a3412;">Payment still required</h2>
        <p style="margin:0 0 10px 0;color:#7c2d12;line-height:1.6;font-weight:700;">
          Your order is currently pending because cryptocurrency payment has not yet been confirmed.
        </p>
        <p style="margin:0 0 10px 0;color:#7c2d12;line-height:1.6;">
          Please complete payment using the cryptocurrency details from your order confirmation email.
        </p>
        <div style="background:#ffffff;border:1px solid #fed7aa;border-radius:14px;padding:14px;margin-top:12px;">
          <p style="margin:0 0 8px 0;"><strong>Amount due:</strong> ${formatGBP(
            params.totalGBP,
          )}</p>
          <p style="margin:0;"><strong>Payment reference:</strong> ${safeOrderId}</p>
        </div>
        <p style="margin:12px 0 0 0;color:#7c2d12;line-height:1.6;font-weight:700;">
          Please do not place the order again. Duplicate orders can delay processing.
          If you are unsure what to do, reply to this email or message us on WhatsApp.
        </p>
      </div>
    `;
  }

  return "";
}

function getPaymentInstructionsHtml(
  orderId: string,
  paymentMethod: PaymentMethod,
  totalGBP: number,
) {
  const safeOrderId = escapeHtml(orderId);

  if (paymentMethod === "bank_transfer") {
    return `
      <div style="background:#fff7ed;border:2px solid #fb923c;border-radius:18px;padding:18px;margin-top:18px;">
        <h2 style="margin:0 0 10px 0;font-size:22px;color:#9a3412;">Payment still required</h2>
        <p style="margin:0 0 12px 0;color:#9a3412;line-height:1.6;font-weight:700;">
          Your order has been received, but payment has not yet been completed.
          Please do not place the order again. Duplicate orders can delay processing.
        </p>
        <p style="margin:0;color:#7c2d12;line-height:1.6;">
          To complete your order, please send <strong>${formatGBP(
            totalGBP,
          )}</strong> by bank transfer using the details below. Use your order number
          as the payment reference so we can match the payment to your order quickly.
        </p>
      </div>

      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:18px;padding:18px;margin-top:18px;">
        <h2 style="margin:0 0 10px 0;font-size:20px;color:#111827;">UK bank transfer details</h2>

        <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;padding:14px;">
          <p style="margin:0 0 8px 0;"><strong>Account name:</strong> ${
            PAYMENT_DETAILS.bank.accountName
          }</p>
          <p style="margin:0 0 8px 0;"><strong>Sort code:</strong> ${
            PAYMENT_DETAILS.bank.sortCode
          }</p>
          <p style="margin:0 0 8px 0;"><strong>Account number:</strong> ${
            PAYMENT_DETAILS.bank.accountNumber
          }</p>
          <p style="margin:0 0 8px 0;"><strong>Amount due:</strong> ${formatGBP(
            totalGBP,
          )}</p>
          <p style="margin:0;"><strong>Payment reference:</strong> ${safeOrderId}</p>
        </div>
      </div>

      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:18px;padding:18px;margin-top:18px;">
        <h2 style="margin:0 0 10px 0;font-size:20px;color:#111827;">International bank transfer details</h2>
        <p style="margin:0 0 12px 0;color:#4b5563;line-height:1.6;">
          International customers may need the IBAN, SWIFT/BIC, bank name, and bank address below.
          Payments can be sent in ${PAYMENT_DETAILS.bank.currencies}.
        </p>

        <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;padding:14px;">
          <p style="margin:0 0 8px 0;"><strong>Account name:</strong> ${
            PAYMENT_DETAILS.bank.accountName
          }</p>
          <p style="margin:0 0 8px 0;"><strong>Bank name:</strong> ${
            PAYMENT_DETAILS.bank.bankName
          }</p>
          <p style="margin:0 0 8px 0;"><strong>Bank address:</strong> ${
            PAYMENT_DETAILS.bank.bankAddress
          }</p>
          <p style="margin:0 0 8px 0;"><strong>IBAN:</strong> ${
            PAYMENT_DETAILS.bank.iban
          }</p>
          <p style="margin:0 0 8px 0;"><strong>SWIFT/BIC:</strong> ${
            PAYMENT_DETAILS.bank.swiftBic
          }</p>
          <p style="margin:0 0 8px 0;"><strong>Currency:</strong> ${
            PAYMENT_DETAILS.bank.currencies
          }</p>
          <p style="margin:0;"><strong>Payment reference:</strong> ${safeOrderId}</p>
        </div>

        <p style="margin:12px 0 0 0;color:#4b5563;line-height:1.6;">
          Your order will be processed once payment is received and matched to your order number.
          If you are unsure what to do, reply to this email or message us on WhatsApp before placing another order.
        </p>
      </div>
    `;
  }

  if (paymentMethod === "crypto") {
    return `
      <div style="background:#fff7ed;border:2px solid #fb923c;border-radius:18px;padding:18px;margin-top:18px;">
        <h2 style="margin:0 0 10px 0;font-size:22px;color:#9a3412;">Payment still required</h2>
        <p style="margin:0;color:#7c2d12;line-height:1.6;font-weight:700;">
          Your order has been received, but cryptocurrency payment has not yet been confirmed.
          Please do not place the order again. Contact us if you are unsure what to do.
        </p>
      </div>

      <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:18px;padding:18px;margin-top:18px;">
        <h2 style="margin:0 0 10px 0;font-size:20px;color:#111827;">Cryptocurrency payment instructions</h2>
        <p style="margin:0 0 12px 0;color:#4b5563;">
          Please send payment for <strong>${formatGBP(
            totalGBP,
          )}</strong> using one of the options below.
        </p>

        <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;padding:14px;">
          <p style="margin:0 0 12px 0;"><strong>Bitcoin (BTC):</strong><br />${
            PAYMENT_DETAILS.crypto.btc
          }</p>
          <p style="margin:0 0 12px 0;"><strong>Ethereum (ETH):</strong><br />${
            PAYMENT_DETAILS.crypto.eth
          }</p>
          <p style="margin:0 0 12px 0;"><strong>USDT (ERC20 only):</strong><br />${
            PAYMENT_DETAILS.crypto.usdtErc20
          }</p>
          <p style="margin:0;"><strong>Payment reference:</strong> ${safeOrderId}</p>
        </div>

        <p style="margin:12px 0 0 0;color:#92400e;">
          Important: only send USDT on the ERC20 network.
        </p>
        <p style="margin:8px 0 0 0;color:#4b5563;">
          Your order will be processed after payment is received and confirmed.
        </p>
      </div>
    `;
  }

  return `
    <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:18px;padding:18px;margin-top:18px;">
      <h2 style="margin:0 0 10px 0;font-size:20px;color:#065f46;">Card payment received</h2>
      <p style="margin:0;color:#065f46;">
        We have received your card payment for <strong>${formatGBP(
          totalGBP,
        )}</strong>. Your order is now being prepared.
      </p>
      <p style="margin:10px 0 0 0;color:#065f46;"><strong>Order number:</strong> ${safeOrderId}</p>
    </div>
  `;
}

function getPaymentInstructionsText(
  orderId: string,
  paymentMethod: PaymentMethod,
  totalGBP: number,
) {
  if (paymentMethod === "bank_transfer") {
    return [
      "Payment still required",
      "Your order has been received, but payment has not yet been completed.",
      "Please do not place the order again. Duplicate orders can delay processing.",
      "",
      "UK bank transfer details",
      `Amount due: ${formatGBP(totalGBP)}`,
      `Account name: ${PAYMENT_DETAILS.bank.accountName}`,
      `Sort code: ${PAYMENT_DETAILS.bank.sortCode}`,
      `Account number: ${PAYMENT_DETAILS.bank.accountNumber}`,
      `Payment reference: ${orderId}`,
      "",
      "International bank transfer details",
      `Account name: ${PAYMENT_DETAILS.bank.accountName}`,
      `Bank name: ${PAYMENT_DETAILS.bank.bankName}`,
      `Bank address: ${PAYMENT_DETAILS.bank.bankAddress}`,
      `IBAN: ${PAYMENT_DETAILS.bank.iban}`,
      `SWIFT/BIC: ${PAYMENT_DETAILS.bank.swiftBic}`,
      `Currency: ${PAYMENT_DETAILS.bank.currencies}`,
      `Payment reference: ${orderId}`,
      "",
      "Please use your order number as the payment reference.",
      "Your order will be processed once payment is received.",
      "If you are unsure what to do, reply to this email or message us on WhatsApp before placing another order.",
    ].join("\n");
  }

  if (paymentMethod === "crypto") {
    return [
      "Payment still required",
      `Cryptocurrency payment instructions`,
      `Amount due: ${formatGBP(totalGBP)}`,
      `Bitcoin (BTC): ${PAYMENT_DETAILS.crypto.btc}`,
      `Ethereum (ETH): ${PAYMENT_DETAILS.crypto.eth}`,
      `USDT (ERC20 only): ${PAYMENT_DETAILS.crypto.usdtErc20}`,
      `Payment reference: ${orderId}`,
      "Important: only send USDT on the ERC20 network.",
      "Please do not place the order again. Contact us if you are unsure what to do.",
    ].join("\n");
  }

  return [
    `Card payment received`,
    `Order number: ${orderId}`,
    `Total: ${formatGBP(totalGBP)}`,
  ].join("\n");
}

export async function sendOrderEmails(params: SendOrderEmailsParams) {
  const resend = getResend();

  const totals = getOrderTotals(params);
  const totalsHtml = renderOrderTotals(totals);
  const itemsHtml = renderItems(params.items);
  const instructionsHtml = getPaymentInstructionsHtml(
    params.orderId,
    params.paymentMethod,
    totals.totalGBP,
  );
  const shippingAddressHtml = renderShippingAddress(params.shippingAddress);
  const researchUseNoticeHtml = renderResearchUseNotice();

  const orderStatusUrl = `${SITE_URL}/order-status`;
  const whatsappUrl = getWhatsAppHref(params.orderId);
  const safeOrderId = escapeHtml(params.orderId);

  const customerText = [
    `Peptide Products order ${params.orderId}`,
    "",
    `Hello ${params.customerName},`,
    "Your order has been received and saved successfully.",
    params.paymentMethod === "bank_transfer"
      ? "Important: payment is still required by bank transfer before your order can be processed."
      : "",
    params.paymentMethod === "bank_transfer"
      ? "Please do not place the order again. Use the payment reference below or contact us if you are unsure."
      : "",
    `Order number: ${params.orderId}`,
    `Payment status: ${getPaymentStatusText(params.paymentMethod)}`,
    `Payment method: ${getPaymentMethodLabel(params.paymentMethod)}`,
    `Subtotal: ${formatGBP(totals.subtotalGBP)}`,
    `Shipping: ${formatGBP(totals.shippingGBP)}`,
    `Total: ${formatGBP(totals.totalGBP)}`,
    "",
    getPaymentInstructionsText(
      params.orderId,
      params.paymentMethod,
      totals.totalGBP,
    ),
    "",
    "Items ordered:",
    renderItemsText(params.items),
    "",
    "Shipping address:",
    renderShippingAddressText(params.shippingAddress),
    "",
    "If this email went to junk/spam, please mark it as safe so future order and tracking updates arrive in your inbox.",
    "",
    renderEmailFooterText(),
  ]
    .filter(Boolean)
    .join("\n");

  const adminText = [
    `New order received: ${params.orderId}`,
    `Customer: ${params.customerName}`,
    `Email: ${params.customerEmail}`,
    `Payment method: ${getPaymentMethodLabel(params.paymentMethod)}`,
    `Total: ${formatGBP(totals.totalGBP)}`,
    "",
    "Items ordered:",
    renderItemsText(params.items),
    "",
    "Shipping address:",
    renderShippingAddressText(params.shippingAddress),
  ].join("\n");

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:24px;color:#111827;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:22px;border:1px solid #e5e7eb;overflow:hidden;">
        <div style="background:#111827;color:#ffffff;padding:20px 24px;">
          <h1 style="margin:0;font-size:24px;">Thank you for your order</h1>
          <p style="margin:8px 0 0 0;color:#d1d5db;">Peptide Products</p>
        </div>

        <div style="padding:24px;">
          <p style="margin-top:0;">Hello ${escapeHtml(params.customerName)},</p>
<p>Your order has been received and saved successfully.</p>
${
  params.paymentMethod === "bank_transfer"
    ? `
      <div style="background:#fff7ed;border:2px solid #fb923c;border-radius:18px;padding:18px;margin:18px 0;">
        <h2 style="margin:0 0 8px 0;font-size:22px;color:#9a3412;">Payment still required</h2>
        <p style="margin:0;color:#7c2d12;line-height:1.6;font-weight:700;">
          Your order is not paid yet. Please complete the bank transfer below using your order number as the payment reference.
        </p>
        <p style="margin:10px 0 0 0;color:#7c2d12;line-height:1.6;">
          Please do not place the order again. Duplicate orders can delay processing. If you are unsure what to do, reply to this email or message us on WhatsApp.
        </p>
      </div>
    `
    : ""
}
<p style="color:#4b5563;">
  Please keep this email for your records. If you need to check progress later,
  use your order number on the order status page or contact us with your order number.
</p>
<p style="color:#4b5563;">
  If this email arrived in junk or spam, please mark Peptide Products as safe so future tracking updates arrive in your inbox.
</p>
          <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:18px;padding:18px;margin:18px 0;">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:#4f46e5;font-weight:800;">
              Order number
            </div>
            <div style="font-size:28px;font-weight:800;color:#111827;margin-top:6px;">
              ${safeOrderId}
            </div>
          </div>

          <div style="display:block;background:#ecfdf5;border:1px solid #a7f3d0;border-radius:18px;padding:18px;margin:18px 0;">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:#047857;font-weight:800;">
              Amount due
            </div>
            <div style="font-size:30px;font-weight:800;color:#064e3b;margin-top:6px;">
              ${formatGBP(totals.totalGBP)}
            </div>
            <p style="margin:8px 0 0 0;color:#047857;font-weight:700;">
              ${getPaymentStatusText(params.paymentMethod)}
            </p>
          </div>

          <p><strong>Payment method:</strong> ${getPaymentMethodLabel(
            params.paymentMethod,
          )}</p>

          <h2 style="margin-top:24px;">Order summary</h2>
          ${totalsHtml}

          ${instructionsHtml}

          <div style="margin-top:22px;">
            ${renderButton(orderStatusUrl, "Check order status")}
            ${renderButton(whatsappUrl, "Message us on WhatsApp", "#047857")}
          </div>

          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:18px;padding:16px;margin-top:18px;">
  <h2 style="margin:0 0 8px 0;font-size:18px;color:#111827;">What happens next?</h2>
  <p style="margin:0;color:#4b5563;line-height:1.6;">
    Orders are reviewed after payment confirmation. Tracking details are added when available.
    If you need help, please include your order number when contacting support.
  </p>
</div>

          <h2 style="margin-top:26px;">Items ordered</h2>
          <ul style="padding-left:20px;">${itemsHtml}</ul>

          <h2 style="margin-top:26px;">Shipping address</h2>
          <p>${shippingAddressHtml}</p>

          ${researchUseNoticeHtml}

          <p style="margin-top:20px;color:#4b5563;">
            If you need help, reply to ${SUPPORT_EMAIL} or message us on WhatsApp.
          </p>

          ${renderEmailFooterHtml()}
        </div>
      </div>
    </div>
  `;

  const adminHtml = `
    <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:24px;color:#111827;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:22px;border:1px solid #e5e7eb;overflow:hidden;">
        <div style="background:#111827;color:#ffffff;padding:20px 24px;">
          <h1 style="margin:0;font-size:24px;">New order received</h1>
          <p style="margin:8px 0 0 0;color:#d1d5db;">${safeOrderId}</p>
        </div>

        <div style="padding:24px;">
          <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:18px;padding:18px;margin-bottom:18px;">
            <p style="margin:0 0 8px 0;"><strong>Order number:</strong> ${safeOrderId}</p>
            <p style="margin:0 0 8px 0;"><strong>Customer:</strong> ${escapeHtml(
              params.customerName,
            )}</p>
            <p style="margin:0 0 8px 0;"><strong>Email:</strong> ${escapeHtml(
              params.customerEmail,
            )}</p>
            <p style="margin:0;"><strong>Payment method:</strong> ${getPaymentMethodLabel(
              params.paymentMethod,
            )}</p>
          </div>

          <h2>Order totals</h2>
          ${totalsHtml}

          <h2 style="margin-top:24px;">Shipping details</h2>
          <p><strong>Region:</strong> ${params.shippingRegion}</p>
          <p>${shippingAddressHtml}</p>

          <h2 style="margin-top:24px;">Items ordered</h2>
          <ul style="padding-left:20px;">${itemsHtml}</ul>

          <div style="margin-top:22px;">
            ${renderButton(orderStatusUrl, "Open order status")}
            ${renderButton(whatsappUrl, "WhatsApp customer/order note", "#047857")}
          </div>

          ${researchUseNoticeHtml}

          ${renderEmailFooterHtml()}
        </div>
      </div>
    </div>
  `;

  await Promise.all([
    resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: params.customerEmail,
      subject:
        params.paymentMethod === "bank_transfer"
          ? `Payment required for order ${params.orderId} | Peptide Products`
          : `Order ${params.orderId} confirmed | Peptide Products`,
      replyTo: SUPPORT_EMAIL,
      html: customerHtml,
      text: customerText,
    }),
    resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: "info@peptideproducts.co.uk",
      subject: `New order received: ${params.orderId}`,
      replyTo: params.customerEmail,
      html: adminHtml,
      text: adminText,
    }),
  ]);
}

export async function sendShippedEmail(params: SendShippedEmailParams) {
  const resend = getResend();

  const whatsappUrl = getWhatsAppHref(params.orderId);
  const orderStatusUrl = `${SITE_URL}/order-status`;

  const customerText = [
    `Your order ${params.orderId} has shipped`,
    "",
    `Hello ${params.customerName},`,
    `Your order ${params.orderId} has now been marked as shipped.`,
    `Tracking number: ${params.trackingNumber}`,
    "Tracking updates may not appear immediately after dispatch.",
    "",
    `Order status: ${orderStatusUrl}`,
    `WhatsApp support: ${whatsappUrl}`,
    "",
    renderEmailFooterText(),
  ].join("\n");

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:24px;color:#111827;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:22px;border:1px solid #e5e7eb;overflow:hidden;">
        <div style="background:#111827;color:#ffffff;padding:20px 24px;">
          <h1 style="margin:0;font-size:24px;">Your order has shipped</h1>
          <p style="margin:8px 0 0 0;color:#d1d5db;">Peptide Products</p>
        </div>

        <div style="padding:24px;">
          <p style="margin-top:0;">Hello ${escapeHtml(params.customerName)},</p>

          <p>
            Your order <strong>${escapeHtml(
              params.orderId,
            )}</strong> has now been marked as shipped.
          </p>

          <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:18px;padding:18px;margin:18px 0;">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:#4f46e5;font-weight:800;">
              Tracking number
            </div>
            <div style="font-size:22px;font-weight:800;color:#111827;margin-top:6px;">
              ${escapeHtml(params.trackingNumber)}
            </div>
          </div>

          <p style="color:#4b5563;line-height:1.6;">
            Tracking updates may not appear immediately after dispatch. Please allow time
            for the courier system to update.
          </p>

          <div style="margin-top:22px;">
            ${renderButton(orderStatusUrl, "Check order status")}
            ${renderButton(whatsappUrl, "Message us on WhatsApp", "#047857")}
          </div>

          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:18px;padding:16px;margin-top:18px;">
            <h2 style="margin:0 0 8px 0;font-size:18px;color:#111827;">After delivery</h2>
            <p style="margin:0;color:#4b5563;line-height:1.6;">
              Once your order has arrived safely, we would appreciate feedback about
              your ordering experience, delivery, packaging, and support.
            </p>
            <div style="margin-top:12px;">
              ${renderButton(`${SITE_URL}/reviews`, "Leave service feedback", "#2455e6")}
            </div>
          </div>

          ${renderResearchUseNotice()}

          <p style="margin-top:20px;color:#4b5563;">
            If you need help, reply to ${SUPPORT_EMAIL} or message us on WhatsApp.
          </p>

          ${renderEmailFooterHtml()}
        </div>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: "Peptide Products <info@peptideproducts.co.uk>",
    to: params.customerEmail,
    subject: `Your order ${params.orderId} has shipped`,
    html: customerHtml,
  });
}

export async function sendOrderUpdateEmail(params: SendOrderUpdateEmailParams) {
  const resend = getResend();

  const whatsappUrl = getWhatsAppHref(params.orderId);
  const orderStatusUrl = `${SITE_URL}/order-status`;

  const statusLabel =
    params.status === "cancelled"
      ? "Cancelled"
      : params.status === "shipped"
        ? "Shipped"
        : params.status === "paid"
          ? "Paid"
          : "Pending";

  const updateNote = params.adminNote.trim();
  const payableTotalGBP =
    params.adjustedTotalGBP !== null && params.adjustedTotalGBP > 0
      ? params.adjustedTotalGBP
      : params.totalGBP;

  const pendingReminderText =
    params.status === "pending"
      ? getPendingPaymentReminderText({
          orderId: params.orderId,
          paymentMethod: params.paymentMethod,
          totalGBP: payableTotalGBP,
        })
      : "";
  const pendingReminderHtml =
    params.status === "pending"
      ? getPendingPaymentReminderHtml({
          orderId: params.orderId,
          paymentMethod: params.paymentMethod,
          totalGBP: payableTotalGBP,
        })
      : "";

  const customerText = [
    `Update for order ${params.orderId}`,
    "",
    `Hello ${params.customerName},`,
    `Your order ${params.orderId} has been updated.`,
    `Status: ${statusLabel}`,
    pendingReminderText,
    pendingReminderText ? "" : "",
    `Original total: ${formatGBP(params.totalGBP)}`,
    params.refundedAmountGBP > 0
      ? `Refund recorded: ${formatGBP(params.refundedAmountGBP)}`
      : "",
    params.adjustedTotalGBP !== null && params.adjustedTotalGBP > 0
      ? `Adjusted total: ${formatGBP(params.adjustedTotalGBP)}`
      : "",
    `Payment method: ${getPaymentMethodLabel(params.paymentMethod)}`,
    params.trackingNumber ? `Tracking number: ${params.trackingNumber}` : "",
    updateNote ? `Update note: ${updateNote}` : "",
    "",
    `Order status: ${orderStatusUrl}`,
    `WhatsApp support: ${whatsappUrl}`,
    "",
    renderEmailFooterText(),
  ]
    .filter(Boolean)
    .join("\n");

  const customerHtml = `
    <div style="font-family:Arial,sans-serif;background:#f3f4f6;padding:24px;color:#111827;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:22px;border:1px solid #e5e7eb;overflow:hidden;">
        <div style="background:#111827;color:#ffffff;padding:20px 24px;">
          <h1 style="margin:0;font-size:24px;">Your order has been updated</h1>
          <p style="margin:8px 0 0 0;color:#d1d5db;">Peptide Products</p>
        </div>

        <div style="padding:24px;">
          <p style="margin-top:0;">Hello ${escapeHtml(params.customerName)},</p>

          <p style="line-height:1.6;color:#4b5563;">
            Your order <strong>${escapeHtml(params.orderId)}</strong> has been updated.
            Please keep this email for your records.
          </p>

          <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:18px;padding:18px;margin:18px 0;">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.12em;color:#4f46e5;font-weight:800;">
              Order status
            </div>
            <div style="font-size:28px;font-weight:800;color:#111827;margin-top:6px;">
              ${statusLabel}
            </div>
          </div>

          ${pendingReminderHtml}

          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:18px;padding:18px;margin:18px 0;">
            <h2 style="margin:0 0 12px 0;font-size:20px;color:#111827;">Order update summary</h2>

            <p style="margin:0 0 8px 0;">
              <strong>Original order total:</strong> ${formatGBP(params.totalGBP)}
            </p>

            ${
              params.refundedAmountGBP > 0
                ? `<p style="margin:0 0 8px 0;"><strong>Refund recorded:</strong> ${formatGBP(
                    params.refundedAmountGBP,
                  )}</p>`
                : ""
            }

            ${
              params.adjustedTotalGBP !== null && params.adjustedTotalGBP > 0
                ? `<p style="margin:0 0 8px 0;"><strong>Adjusted order total:</strong> ${formatGBP(
                    params.adjustedTotalGBP,
                  )}</p>`
                : ""
            }

            <p style="margin:0 0 8px 0;">
              <strong>Payment method:</strong> ${getPaymentMethodLabel(params.paymentMethod)}
            </p>

            ${
              params.trackingNumber
                ? `<p style="margin:0;"><strong>Tracking number:</strong> ${escapeHtml(
                    params.trackingNumber,
                  )}</p>`
                : ""
            }
          </div>

          ${
            updateNote
              ? `
                <div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:18px;padding:18px;margin:18px 0;">
                  <h2 style="margin:0 0 10px 0;font-size:18px;color:#9a3412;">Update note</h2>
                  <p style="margin:0;color:#9a3412;line-height:1.6;">
                    ${escapeHtml(updateNote).replace(/\n/g, "<br />")}
                  </p>
                </div>
              `
              : ""
          }

          <div style="margin-top:22px;">
            ${renderButton(orderStatusUrl, "Check order status")}
            ${renderButton(whatsappUrl, "Message us on WhatsApp", "#047857")}
          </div>

          <p style="margin-top:20px;color:#4b5563;">
            If you need help, reply to ${SUPPORT_EMAIL} or message us on WhatsApp with your order number.
          </p>

          ${renderResearchUseNotice()}

          ${renderEmailFooterHtml()}
        </div>
      </div>
    </div>
  `;

  await resend.emails.send({
    from: "Peptide Products <info@peptideproducts.co.uk>",
    to: params.customerEmail,
    subject:
      params.status === "pending"
        ? `Payment still required for order ${params.orderId} | Peptide Products`
        : `Order ${params.orderId} updated | Peptide Products`,
    replyTo: SUPPORT_EMAIL,
    html: customerHtml,
    text: customerText,
  });
}

export async function sendWholesaleEmail(params: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  const resend = getResend();

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1>New wholesale enquiry</h1>
      <p><strong>Name:</strong> ${escapeHtml(params.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(params.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(
        params.company || "Not provided",
      )}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(params.message).replace(/\n/g, "<br />")}</p>
      ${renderEmailFooterHtml()}
    </div>
  `;

  await resend.emails.send({
    from: "Peptide Products <info@peptideproducts.co.uk>",
    to: "info@peptideproducts.co.uk",
    subject: `New wholesale enquiry from ${params.name}`,
    html: adminHtml,
  });
}
