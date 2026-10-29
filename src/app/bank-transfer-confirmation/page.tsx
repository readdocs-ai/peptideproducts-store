"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";
import { clearCart } from "@/lib/cart";

type Confirmation = {
  orderId: string;
  customerEmail?: string;
  total: number;
  bank: { accountName: string; sortCode: string; accountNumber: string };
};

export default function BankTransferConfirmation() {
  const [details, setDetails] = useState<Confirmation | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [copyError, setCopyError] = useState(false);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("pp_bank_order_confirmation");
      if (raw) {
        const parsed = JSON.parse(raw) as Confirmation;
        if (parsed.orderId && parsed.bank?.accountName && parsed.bank?.sortCode && parsed.bank?.accountNumber) {
          setDetails(parsed);
          clearCart();
        }
      }
    } catch { /* The customer can use their order email instead. */ }
  }, []);

  async function copyValue(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setCopyError(false);
    } catch {
      setCopied(null);
      setCopyError(true);
    }
  }

  const paymentFields = details ? [
    { label: "Account name", value: details.bank.accountName },
    { label: "Sort code", value: details.bank.sortCode },
    { label: "Account number", value: details.bank.accountNumber },
    { label: "Payment reference", value: details.orderId },
  ] : [];

  return <><Header /><main className="py-10"><Container>
    <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-10">
      <div className="text-sm font-bold text-amber-700">Awaiting bank transfer</div>
      <h1 className="mt-2 text-3xl font-extrabold text-ink">Thank you for your order</h1>
      {!details ? (
        <p className="mt-5 text-muted">Your payment instructions are also included in your order email. If you have just placed an order, please check your inbox or contact us with your order number.</p>
      ) : <>
        <p className="mt-4 text-muted">Your order has been received. No payment has been taken. Use your banking app or online banking to make your transfer.</p>
        <div className="mt-6 rounded-2xl bg-panel p-5">
          <p className="font-semibold text-ink">Order reference: {details.orderId}</p>
          <p className="mt-2 text-lg font-bold text-ink">Amount due: £{details.total.toFixed(2)}</p>
          <div className="mt-5 space-y-3">
            {paymentFields.map(({ label, value }) => <div key={label} className="rounded-xl border border-line bg-white p-3 sm:flex sm:items-center sm:justify-between sm:gap-3">
              <div className="min-w-0">
                <div className="text-xs font-medium text-muted">{label}</div>
                <div className="mt-1 break-all font-semibold text-ink">{value}</div>
              </div>
              <button type="button" onClick={() => void copyValue(label, value)} className="mt-2 inline-flex min-h-10 items-center justify-center rounded-lg border border-line px-4 py-2 text-sm font-bold text-ink hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:mt-0" aria-label={`Copy ${label.toLowerCase()}`}>
                {copied === label ? "Copied!" : "Copy"}
              </button>
            </div>)}
          </div>
          <button type="button" onClick={() => void copyValue("all", `Account name: ${details.bank.accountName}\nSort code: ${details.bank.sortCode}\nAccount number: ${details.bank.accountNumber}\nPayment reference: ${details.orderId}\nAmount: £${details.total.toFixed(2)}`)} className="mt-4 w-full rounded-xl bg-accent px-5 py-3 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            {copied === "all" ? "All details copied!" : "Copy all payment details"}
          </button>
          {copyError && <p role="alert" className="mt-3 text-sm text-red-700">Copying is unavailable in this browser. Please select the details above to copy them manually.</p>}
          <p className="mt-3 text-xs text-muted" aria-live="polite">{copied && !copyError ? "Copied to clipboard. Check the details in your banking app before confirming payment." : "Use the copy buttons to avoid typing the bank details manually."}</p>
        </div>
        <p className="mt-5 text-sm leading-7 text-muted">The receiving bank account is held in the name of <strong>{details.bank.accountName}</strong>, which collects payments on behalf of Peptide Products. Please check the account name and details carefully in your banking app before authorising the transfer. Your bank may show the recipient name in its payment confirmation or transaction records.</p>
        <p className="mt-3 text-sm leading-7 text-muted">We will confirm payment after the funds arrive and are verified. Please do not place another order for the same items while payment is pending.</p>
      </>}
      <Link className="mt-7 inline-flex rounded-xl bg-accent px-5 py-3 font-bold text-white" href={details ? `/order-status?${new URLSearchParams({ orderId: details.orderId, ...(details.customerEmail ? { email: details.customerEmail } : {}) }).toString()}` : "/order-status"}>Check order status</Link>
    </div>
  </Container></main><Footer /></>;
}
