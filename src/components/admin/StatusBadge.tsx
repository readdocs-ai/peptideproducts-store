import type { OrderStatus } from "@/lib/orders";

const classes: Record<OrderStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  paid: "bg-blue-100 text-blue-800 border-blue-200",
  shipped: "bg-green-100 text-green-800 border-green-200",
};

export function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-extrabold capitalize ${classes[status]}`}
    >
      {status}
    </span>
  );
}