import { sendOrderEmails } from "@/lib/email";
import {
  getOrder,
  getOrderBySumUpCheckoutId,
  updateOrderStatus,
} from "@/lib/orders";
import { getSumUpCheckout } from "@/lib/sumup";

function roundGBP(value: number) {
  return Math.round(value * 100) / 100;
}

export async function verifyAndFinalizeSumUpCheckout(params: {
  checkoutId: string;
  expectedOrderId?: string;
}) {
  const checkout = await getSumUpCheckout(params.checkoutId);
  const order = params.expectedOrderId
    ? await getOrder(params.expectedOrderId)
    : await getOrderBySumUpCheckoutId(params.checkoutId);

  if (!order || order.paymentMethod !== "card") {
    throw new Error("Card order not found");
  }

  if (order.sumupCheckoutId !== checkout.id) {
    throw new Error("Checkout does not match this order");
  }

  if (checkout.checkout_reference !== order.id) {
    throw new Error("Checkout reference does not match this order");
  }

  if (checkout.currency !== "GBP" || roundGBP(checkout.amount) !== roundGBP(order.total)) {
    throw new Error("Checkout amount does not match this order");
  }

  if (checkout.status !== "PAID") {
    return { order, checkout, paid: false as const };
  }

  const wasAlreadyPaid = order.status === "paid" || order.status === "shipped";
  const updated = wasAlreadyPaid
    ? order
    : await updateOrderStatus({ orderId: order.id, status: "paid" });

  if (!updated) throw new Error("Unable to update paid order");

  if (!wasAlreadyPaid) {
    try {
      await sendOrderEmails({
        orderId: updated.id,
        customerName: updated.name,
        customerEmail: updated.email,
        paymentMethod: updated.paymentMethod,
        subtotalGBP: updated.subtotal,
        shippingGBP: updated.shipping,
        totalGBP: updated.total,
        items: updated.items,
        shippingRegion: updated.shippingRegion,
        shippingAddress: updated.shippingAddress,
      });
    } catch (error) {
      console.error("SUMUP PAID ORDER EMAIL ERROR:", error);
    }
  }

  return { order: updated, checkout, paid: true as const };
}
