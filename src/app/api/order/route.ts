import { createOrder, PaymentMethod, StoredOrderItem } from "@/lib/orders";
import { sendOrderEmails } from "@/lib/email";

type Body = {
  name?: string;
  email?: string;
  shippingRegion?: "UK";
  subtotal?: number;
  shipping?: number;
  total?: number;
  items?: StoredOrderItem[];
  paymentMethod?: PaymentMethod;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const shippingRegion = body.shippingRegion || "UK";
    const subtotal = Number(body.subtotal || 0);
    const shipping = Number(body.shipping || 0);
    const total = Number(body.total || 0);
    const items = Array.isArray(body.items) ? body.items : [];
    const paymentMethod = body.paymentMethod || "bank_transfer";

    if (!name || !email) {
      return Response.json({ ok: false, error: "Name and email are required." }, { status: 400 });
    }

    if (!items.length) {
      return Response.json({ ok: false, error: "Cart is empty." }, { status: 400 });
    }

    if (!["bank_transfer", "crypto", "card"].includes(paymentMethod)) {
      return Response.json({ ok: false, error: "Invalid payment method." }, { status: 400 });
    }

    const order = await createOrder({
      name,
      email,
      shippingRegion,
      subtotal,
      shipping,
      total,
      items,
      paymentMethod,
    });

    try {
      await sendOrderEmails({
        orderId: order.id,
        customerName: order.name,
        customerEmail: order.email,
        paymentMethod: order.paymentMethod,
        totalGBP: order.total,
        items: order.items,
      });
    } catch (emailError) {
      console.error("ORDER EMAIL ERROR:", emailError);
    }

    return Response.json({
      ok: true,
      orderId: order.id,
      paymentMethod: order.paymentMethod,
    });
  } catch (error: any) {
    console.error("ORDER CREATE ERROR:", error);

    return Response.json(
      {
        ok: false,
        error: error?.message || "Unable to save your order right now.",
      },
      { status: 500 }
    );
  }
}