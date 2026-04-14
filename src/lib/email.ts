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
    accountName: "Peptide Product Ltd",
    sortCode: "04-00-05",
    accountNumber: "77669398",
  },
  crypto: {
    btc: "bc1q7dn35crn5mrcnkf3mrru3h6yz0pdp8nnlungnn",
    eth: "0xaa71a932f86f59a19C1899968c3F0F852cFE93F4",
    usdtErc20: "0xaa71a932f86f59a19C1899968c3F0F852cFE93F4",
  },
};

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

function renderItems(items: EmailOrderItem[]) {
  return items
    .map(
      (item) =>
        `<li>${escapeHtml(item.name)} × ${item.qty} — ${formatGBP(item.priceGBP * item.qty)}</li>`
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

function getPaymentInstructionsHtml(
  orderId: string,
  paymentMethod: PaymentMethod,
  totalGBP: number
) {
  if (paymentMethod === "bank_transfer") {
    return `
      <h2>Bank Transfer Instructions</h2>
      <p>Please send <strong>${formatGBP(totalGBP)}</strong> to the bank account below.</p>
      <p>
        <strong>Account Name:</strong> ${PAYMENT_DETAILS.bank.accountName}<br />
        <strong>Sort Code:</strong> ${PAYMENT_DETAILS.bank.sortCode}<br />
        <strong>Account Number:</strong> ${PAYMENT_DETAILS.bank.accountNumber}
      </p>
      <p><strong>Payment Reference:</strong> ${orderId}</p>
      <p>Your order will be processed once payment is received.</p>
    `;
  }

  if (paymentMethod === "crypto") {
    return `
      <h2>Cryptocurrency Payment Instructions</h2>
      <p>Please send payment for <strong>${formatGBP(totalGBP)}</strong> using one of the options below.</p>
      <p><strong>Bitcoin (BTC):</strong><br />${PAYMENT_DETAILS.crypto.btc}</p>
      <p><strong>Ethereum (ETH):</strong><br />${PAYMENT_DETAILS.crypto.eth}</p>
      <p><strong>USDT (ERC20 only):</strong><br />${PAYMENT_DETAILS.crypto.usdtErc20}</p>
      <p><strong>Payment Reference:</strong> ${orderId}</p>
      <p><strong>Important:</strong> Only send USDT on the ERC20 network.</p>
      <p>Your order will be processed after payment is received and confirmed.</p>
    `;
  }

  return `
    <h2>Card Payment Received</h2>
    <p>We have received your card payment for <strong>${formatGBP(totalGBP)}</strong>.</p>
    <p><strong>Order Number:</strong> ${orderId}</p>
    <p>Your order is now being prepared.</p>
  `;
}

function getPaymentMethodLabel(paymentMethod: PaymentMethod) {
  if (paymentMethod === "bank_transfer") return "Bank Transfer";
  if (paymentMethod === "crypto") return "Cryptocurrency";
  return "Card";
}

export async function sendOrderEmails(params: SendOrderEmailsParams) {
  const resend = getResend();

  const itemsHtml = renderItems(params.items);
  const instructionsHtml = getPaymentInstructionsHtml(
    params.orderId,
    params.paymentMethod,
    params.totalGBP
  );
  const shippingAddressHtml = renderShippingAddress(params.shippingAddress);

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1>Thank you for your order</h1>
      <p>Hello ${escapeHtml(params.customerName)},</p>
      <p>Your order has been received.</p>
      <p><strong>Order Number:</strong> ${params.orderId}</p>
      <p><strong>Payment Method:</strong> ${getPaymentMethodLabel(params.paymentMethod)}</p>

      <h2>Order Summary</h2>
      <p><strong>Subtotal:</strong> ${formatGBP(params.subtotalGBP)}</p>
      <p><strong>Shipping:</strong> ${formatGBP(params.shippingGBP)}</p>
      <p><strong>Total:</strong> ${formatGBP(params.totalGBP)}</p>

      <h2>Shipping Address</h2>
      <p>${shippingAddressHtml}</p>

      <h2>Items Ordered</h2>
      <ul>${itemsHtml}</ul>

      ${instructionsHtml}

      <p>If you need help, reply to info@peptideproducts.co.uk.</p>
    </div>
  `;

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1>New order received</h1>
      <p><strong>Order Number:</strong> ${params.orderId}</p>
      <p><strong>Customer:</strong> ${escapeHtml(params.customerName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(params.customerEmail)}</p>
      <p><strong>Payment Method:</strong> ${getPaymentMethodLabel(params.paymentMethod)}</p>

      <h2>Order Totals</h2>
      <p><strong>Subtotal:</strong> ${formatGBP(params.subtotalGBP)}</p>
      <p><strong>Shipping:</strong> ${formatGBP(params.shippingGBP)}</p>
      <p><strong>Total:</strong> ${formatGBP(params.totalGBP)}</p>

      <h2>Shipping Details</h2>
      <p><strong>Region:</strong> ${params.shippingRegion}</p>
      <p>${shippingAddressHtml}</p>

      <h2>Items Ordered</h2>
      <ul>${itemsHtml}</ul>
    </div>
  `;

  await Promise.all([
    resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: params.customerEmail,
      subject: `Your order ${params.orderId}`,
      html: customerHtml,
    }),
    resend.emails.send({
      from: "Peptide Products <info@peptideproducts.co.uk>",
      to: "info@peptideproducts.co.uk",
      subject: `New order received: ${params.orderId}`,
      html: adminHtml,
    }),
  ]);
}

export async function sendShippedEmail(params: SendShippedEmailParams) {
  const resend = getResend();

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1>Your order has shipped</h1>
      <p>Hello ${escapeHtml(params.customerName)},</p>
      <p>Your order <strong>${params.orderId}</strong> has now been shipped.</p>
      <p><strong>Tracking Number:</strong> ${escapeHtml(params.trackingNumber)}</p>
      <p>Thank you for your order.</p>
      <p>If you need help, reply to info@peptideproducts.co.uk.</p>
    </div>
  `;

  await resend.emails.send({
    from: "Peptide Products <info@peptideproducts.co.uk>",
    to: params.customerEmail,
    subject: `Your order ${params.orderId} has shipped`,
    html: customerHtml,
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
      <p><strong>Company:</strong> ${escapeHtml(params.company || "Not provided")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(params.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  await resend.emails.send({
    from: "Peptide Products <info@peptideproducts.co.uk>",
    to: "info@peptideproducts.co.uk",
    subject: `New wholesale enquiry from ${params.name}`,
    html: adminHtml,
  });
}