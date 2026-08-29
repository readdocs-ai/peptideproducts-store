export const runtime = "nodejs";

// Manual/alternative payment checkout has been retired.
// Historical orders remain supported by the order/admin/email code, but all new
// customer payments must use /api/checkout and Stripe.
export async function POST() {
  return Response.json(
    {
      ok: false,
      error: "This payment option is no longer available. Please use secure card checkout.",
      checkoutUrl: "/checkout",
    },
    { status: 410 }
  );
}
