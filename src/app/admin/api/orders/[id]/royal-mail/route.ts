import { NextResponse } from "next/server";
import {
  getOrder,
  updateOrderRoyalMailDetails,
} from "@/lib/orders";
import {
  createRoyalMailOrder,
  findRoyalMailOrder,
  getRoyalMailTracking,
  RoyalMailApiError,
  validateOrderForRoyalMail,
} from "@/lib/royal-mail";

export const dynamic = "force-dynamic";

function publicError(error: unknown) {
  if (error instanceof RoyalMailApiError) {
    return {
      message: error.message,
      status: error.status >= 400 && error.status < 600 ? error.status : 500,
      details: error.details,
    };
  }

  return {
    message: "Royal Mail integration failed.",
    status: 500,
    details: error instanceof Error ? { name: error.name, message: error.message } : null,
  };
}

async function saveSummary(
  orderId: string,
  summary: Awaited<ReturnType<typeof findRoyalMailOrder>>,
) {
  if (!summary) return null;

  const trackingNumber = getRoyalMailTracking(summary);

  return updateOrderRoyalMailDetails({
    orderId,
    royalMailStatus: "sent",
    royalMailOrderIdentifier: summary.orderIdentifier,
    royalMailCreatedAt: summary.createdOn || new Date().toISOString(),
    royalMailLastCheckedAt: new Date().toISOString(),
    royalMailError: null,
    ...(trackingNumber ? { trackingNumber } : {}),
  });
}

export async function GET(
  _req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const order = await getOrder(params.id);

    if (!order) {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }

    const royalMailOrder = await findRoyalMailOrder(order.id);

    if (!royalMailOrder) {
      const updated = await updateOrderRoyalMailDetails({
        orderId: order.id,
        royalMailStatus:
          order.royalMailStatus === "sent" ? "error" : order.royalMailStatus,
        royalMailLastCheckedAt: new Date().toISOString(),
        royalMailError:
          order.royalMailStatus === "sent"
            ? "The order could not currently be found in Royal Mail. Check Click & Drop before resending."
            : null,
      });

      return NextResponse.json({
        ok: true,
        found: false,
        order: updated,
        message: "No matching Click & Drop order was found.",
      });
    }

    const updated = await saveSummary(order.id, royalMailOrder);

    return NextResponse.json({
      ok: true,
      found: true,
      order: updated,
      message: getRoyalMailTracking(royalMailOrder)
        ? "Royal Mail order and tracking number synchronised."
        : "Royal Mail order found. Tracking will appear after postage is applied.",
    });
  } catch (error) {
    console.error("ROYAL MAIL CHECK ERROR:", error);
    const detail = publicError(error);
    return NextResponse.json(
      { error: detail.message, royalMailDiagnostic: detail.details },
      { status: detail.status },
    );
  }
}

export async function POST(
  _req: Request,
  { params }: { params: { id: string } },
) {
  const order = await getOrder(params.id);

  if (!order) {
    return NextResponse.json({ error: "Order not found." }, { status: 404 });
  }

  const validationErrors = validateOrderForRoyalMail(order);
  if (validationErrors.length) {
    return NextResponse.json(
      { error: validationErrors.join(" ") },
      { status: 400 },
    );
  }

  if (order.royalMailStatus === "sent" || order.royalMailOrderIdentifier) {
    return NextResponse.json(
      {
        error:
          "This order is already marked as sent to Royal Mail. Use Check Royal Mail instead.",
      },
      { status: 409 },
    );
  }

  await updateOrderRoyalMailDetails({
    orderId: order.id,
    royalMailStatus: "sending",
    royalMailError: null,
  });

  try {
    // Reconcile by the website order reference before creating anything. This
    // protects against duplicates after a browser or network timeout.
    const existing = await findRoyalMailOrder(order.id);

    if (existing) {
      const updated = await saveSummary(order.id, existing);
      return NextResponse.json({
        ok: true,
        reconciled: true,
        order: updated,
        message: "The existing Click & Drop order was found and linked.",
      });
    }

    const created = await createRoyalMailOrder(order);
    const updated = await saveSummary(order.id, created);

    return NextResponse.json({
      ok: true,
      order: updated,
      message: "Order sent to Royal Mail Click & Drop.",
    });
  } catch (error) {
    console.error("ROYAL MAIL CREATE ERROR:", error);
    const detail = publicError(error);

    await updateOrderRoyalMailDetails({
      orderId: order.id,
      royalMailStatus: "error",
      royalMailLastCheckedAt: new Date().toISOString(),
      royalMailError: detail.message,
    });

    return NextResponse.json(
      { error: detail.message, royalMailDiagnostic: detail.details },
      { status: detail.status },
    );
  }
}
