import { sendOrderEmails } from "@/lib/email";
import {
  getOrder,
  getOrderBySumUpCheckoutId,
  confirmOrderPaidAtomically,
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

  const paymentResult = await confirmOrderPaidAtomically(order.id, {
    provider: "sumup",
    checkoutId: checkout.id,
    amountGBP: checkout.amount,
  });

  if (paymentResult.outcome === "not_found") {
    throw new Error("SumUp order not found during payment confirmation");
  }

  if (paymentResult.outcome === "payment_mismatch") {
    throw new Error("SumUp payment details require manual review");
  }

  if (paymentResult.outcome === "not_pending") {
    throw new Error(
      "SumUp payment received for an order requiring manual review"
    );
  }

  const updated = paymentResult.order;

  if (paymentResult.outcome === "paid") {
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
