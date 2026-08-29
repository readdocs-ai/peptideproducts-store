import { getOrder } from "@/lib/orders";
import { verifyAndFinalizeSumUpCheckout } from "@/lib/sumup-order";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const orderId = url.searchParams.get("orderId")?.trim() || "";
    if (!orderId) {
      return Response.json({ ok: false, error: "Missing order reference." }, { status: 400 });
    }

    const order = await getOrder(orderId);
    if (!order || order.paymentMethod !== "card" || !order.sumupCheckoutId) {
      return Response.json({ ok: false, error: "Card order not found." }, { status: 404 });
    }

    const result = await verifyAndFinalizeSumUpCheckout({
      checkoutId: order.sumupCheckoutId,
      expectedOrderId: order.id,
    });

    return Response.json({
      ok: true,
      orderId: order.id,
      paid: result.paid,
      status: result.checkout.status,
      total: order.total,
    });
  } catch (error) {
    console.error("SUMUP STATUS ERROR:", error);
    return Response.json(
      { ok: false, error: "Unable to verify the card payment right now." },
      { status: 500 },
    );
  }
}
