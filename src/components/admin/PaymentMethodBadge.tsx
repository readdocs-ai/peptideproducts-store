import type { PaymentMethod } from "@/lib/orders";

const classes: Record<PaymentMethod, string> = {
  bank_transfer: "bg-slate-100 text-slate-800 border-slate-200",
  crypto: "bg-purple-100 text-purple-800 border-purple-200",
};

const labels: Record<PaymentMethod, string> = {
  bank_transfer: "Bank Transfer",
  crypto: "Crypto",
};

export function PaymentMethodBadge({
  paymentMethod,
}: {
  paymentMethod: PaymentMethod;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold ${classes[paymentMethod]}`}
    >
      {labels[paymentMethod]}
    </span>
  );
}