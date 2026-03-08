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

type SendOrderEmailsParams = {
  orderId: string;
  customerName: string;
  customerEmail: string;
  paymentMethod: "bank_transfer" | "crypto";
  totalGBP: number;
  items: EmailOrderItem[];
};

function formatGBP(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

function renderItems(items: EmailOrderItem[]) {
  return items
    .map(
      (item) =>
        `<li>${item.name} × ${item.qty} — ${formatGBP(item.priceGBP * item.qty)}</li>`
    )
    .join("");
}

function getPaymentInstructionsHtml(orderId: string, paymentMethod: "bank_transfer" | "crypto", totalGBP: number) {
  if (paymentMethod === "bank_transfer") {
    return `
      <h2>Bank Transfer Instructions</h2>
      <p>Please send <strong>${formatGBP(totalGBP)}</strong> to the bank account below.</p>
      <p>
        <strong>Account Name:</strong> ${PAYMENT_DETAILS.bank.accountName}<br />
        <strong>Sort Code:</strong> ${PAYMENT_DETAILS.bank.sortCode}<br />
        <strong>Account Number:</strong> ${PAYMENT_DETAILS.bank.accountNumber}
      </p>
      <p>
        <strong>Payment Reference:</strong> ${orderId}
      </p>
      <p>Your order will be processed once payment is received.</p>
    `;
  }

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

export async function sendOrderEmails(params: SendOrderEmailsParams) {
  const resend = getResend();

  const itemsHtml = renderItems(params.items);
  const instructionsHtml = getPaymentInstructionsHtml(
    params.orderId,
    params.paymentMethod,
    params.totalGBP
  );

  const customerHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1>Thank you for your order</h1>
      <p>Hello ${params.customerName},</p>
      <p>Your order has been received.</p>
      <p><strong>Order Number:</strong> ${params.orderId}</p>
      <p><strong>Total:</strong> ${formatGBP(params.totalGBP)}</p>
      <p><strong>Payment Method:</strong> ${
        params.paymentMethod === "bank_transfer" ? "Bank Transfer" : "Cryptocurrency"
      }</p>
      <h2>Items Ordered</h2>
      <ul>${itemsHtml}</ul>
      ${instructionsHtml}
    </div>
  `;

  const adminHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1>New order received</h1>
      <p><strong>Order Number:</strong> ${params.orderId}</p>
      <p><strong>Customer:</strong> ${params.customerName}</p>
      <p><strong>Email:</strong> ${params.customerEmail}</p>
      <p><strong>Total:</strong> ${formatGBP(params.totalGBP)}</p>
      <p><strong>Payment Method:</strong> ${
        params.paymentMethod === "bank_transfer" ? "Bank Transfer" : "Cryptocurrency"
      }</p>
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