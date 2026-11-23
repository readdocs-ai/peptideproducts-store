export const runtime = "nodejs";

// Manual/alternative payment checkout has been retired.
// Historical orders remain supported by the order/admin/email code, but all new
// customer orders must use the order request form.
export async function POST() {
  return Response.json(
    {
      ok: false,
      error: "This legacy checkout is no longer available. Please use the order request form.",
    },
    { status: 410 }
  );
}
