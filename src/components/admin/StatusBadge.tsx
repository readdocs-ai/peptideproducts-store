import type { OrderStatus } from "@/lib/orders";

const styles: Record<OrderStatus, string> = {
  pending: "border-amber-300 bg-amber-50 text-amber-800",
  paid: "border-sky-300 bg-sky-50 text-sky-800",
  shipped: "border-emerald-300 bg-emerald-50 text-emerald-800",
};

export function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <div
      className={`rounded-full border px-3 py-1 text-xs font-extrabold uppercase tracking-wide ${styles[status]}`}
    >
      {status}
    </div>
  );
}
