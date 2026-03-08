import { getOrderForCustomerLookup } from "@/lib/orders";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const orderId = (url.searchParams.get("orderId") || "").trim();
    const email = (url.searchParams.get("email") || "").trim();

    if (!orderId || !email) {
      return Response.json(
        { ok: false, error: "Order number and email are required." },
        { status: 400 }
      );
    }

    const order = await getOrderForCustomerLookup(orderId, email);

    if (!order) {
      return Response.json(
        { ok: false, error: "Order not found." },
        { status: 404 }
      );
    }

    return Response.json({
      ok: true,
      order: {
        id: order.id,
        status: order.status,
        paymentMethod: order.paymentMethod,
        total: order.total,
        createdAt: order.createdAt,
        paidAt: order.paidAt,
        shippedAt: order.shippedAt,
        trackingNumber: order.trackingNumber,
      },
    });
  } catch (error) {
    console.error("ORDER STATUS LOOKUP ERROR:", error);
    return Response.json(
      { ok: false, error: "Unable to check order status right now." },
      { status: 500 }
    );
  }
}