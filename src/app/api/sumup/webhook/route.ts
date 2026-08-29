import { verifyAndFinalizeSumUpCheckout } from "@/lib/sumup-order";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { id?: unknown; event_type?: unknown };
    const checkoutId = typeof body.id === "string" ? body.id.trim() : "";

    if (!checkoutId) {
      return new Response(null, { status: 204 });
    }

    await verifyAndFinalizeSumUpCheckout({ checkoutId });
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("SUMUP WEBHOOK ERROR:", error);
    return new Response(null, { status: 500 });
  }
}
