export async function POST() {
  return Response.json(
    { ok: false, error: "Online payment is unavailable. Refresh the checkout page to submit an order request." },
    { status: 410, headers: { "Cache-Control": "no-store" } },
  );
}
