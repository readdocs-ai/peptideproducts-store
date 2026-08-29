"use client";

import { useMemo, useState } from "react";

type PaidLabelOrder = {
  orderId: string;
  createdAt: string | number;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
};

type PrintPaidLabelsButtonProps = {
  orders: PaidLabelOrder[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shouldShowCountry(country: string) {
  const normalisedCountry = country.trim().toLowerCase();

  return ![
    "",
    "gb",
    "uk",
    "united kingdom",
    "great britain",
  ].includes(normalisedCountry);
}

function formatShortDate(value: string | number) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function PrintPaidLabelsButton({ orders }: PrintPaidLabelsButtonProps) {
  const [selectedOrderIds, setSelectedOrderIds] = useState<Set<string>>(
    () => new Set(),
  );

  const selectedOrders = useMemo(
    () => orders.filter((order) => selectedOrderIds.has(order.orderId)),
    [orders, selectedOrderIds],
  );

  const allSelected =
    orders.length > 0 && selectedOrderIds.size === orders.length;

  function toggleOrder(orderId: string) {
    setSelectedOrderIds((current) => {
      const next = new Set(current);

      if (next.has(orderId)) next.delete(orderId);
      else next.add(orderId);

      return next;
    });
  }

  function selectAll() {
    setSelectedOrderIds(new Set(orders.map((order) => order.orderId)));
  }

  function clearSelection() {
    setSelectedOrderIds(new Set());
  }

  function handlePrint() {
    if (selectedOrders.length === 0) {
      window.alert("Please select at least one order to print.");
      return;
    }

    const printWindow = window.open("", "_blank", "width=950,height=800");

    if (!printWindow) {
      window.alert(
        "The print window was blocked. Please allow pop-ups for this website and try again.",
      );
      return;
    }

    const labelHtml = selectedOrders
      .map((order) => {
        const townLine = [order.city, order.state].filter(Boolean).join(", ");
        const addressLines = [
          order.name,
          order.line1,
          order.line2,
          townLine,
          order.postalCode,
          shouldShowCountry(order.country) ? order.country : "",
        ].filter((line): line is string => Boolean(line));

        const addressHtml = addressLines
          .map((line, index) => {
            const className =
              index === 0
                ? "name"
                : line === order.postalCode
                  ? "postcode"
                  : "";
            const displayLine = index === 0 ? `To: ${line}` : line;

            return `<div class="${className}">${escapeHtml(displayLine)}</div>`;
          })
          .join("");

        return `<div class="label"><div class="address">${addressHtml}</div></div>`;
      })
      .join("");

    printWindow.document.write(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Selected shipping labels</title>
          <style>
            * { box-sizing: border-box; }
            @page { size: A4 portrait; margin: 10mm; }
            html, body {
              margin: 0;
              padding: 0;
              background: white;
              color: #111827;
              font-family: Arial, Helvetica, sans-serif;
            }
            .labels {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              grid-auto-rows: 65mm;
              gap: 3mm;
              width: 100%;
            }
            .label {
              min-width: 0;
              padding: 8mm;
              display: flex;
              align-items: center;
              break-inside: avoid;
              page-break-inside: avoid;
            }
            .address {
              width: 100%;
              font-size: 17px;
              line-height: 1.45;
              overflow-wrap: anywhere;
            }
            .name {
              margin-bottom: 4px;
              font-size: 19px;
              font-weight: 700;
            }
            .postcode {
              margin-top: 3px;
              font-size: 19px;
              font-weight: 700;
            }
            @media print {
              html, body { margin: 0 !important; padding: 0 !important; }
              .label { break-inside: avoid; page-break-inside: avoid; }
            }
          </style>
        </head>
        <body><div class="labels">${labelHtml}</div></body>
      </html>
    `);

    printWindow.document.close();

    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 300);
  }

  return (
    <section className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-sm font-extrabold text-ink">
            Select paid orders to print
          </h2>
          <p className="mt-1 text-sm text-muted">
            Only paid orders that have not been marked as dispatched are shown.
            Tick only the labels you want to print now.
          </p>
        </div>

        <div className="rounded-full border border-line bg-panel px-4 py-2 text-sm font-extrabold text-ink">
          {orders.length} available
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="mt-5 rounded-xl2 border border-line bg-panel p-4 text-sm font-semibold text-muted">
          There are no paid and undispatched orders with a complete shipping address.
        </div>
      ) : (
        <>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={allSelected ? clearSelection : selectAll}
              className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
            >
              {allSelected ? "Clear all" : "Select all"}
            </button>

            {selectedOrderIds.size > 0 ? (
              <button
                type="button"
                onClick={clearSelection}
                className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink shadow-soft hover:bg-panel"
              >
                Clear selection
              </button>
            ) : null}

            <button
              type="button"
              onClick={handlePrint}
              disabled={selectedOrders.length === 0}
              className="rounded-xl2 bg-accent px-5 py-2 text-sm font-extrabold text-white shadow-soft transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Print selected labels ({selectedOrders.length})
            </button>
          </div>

          <div className="mt-5 max-h-[430px] overflow-y-auto rounded-xl2 border border-line bg-panel p-3">
            <div className="grid gap-2 md:grid-cols-2">
              {orders.map((order) => {
                const checked = selectedOrderIds.has(order.orderId);

                return (
                  <label
                    key={order.orderId}
                    className={
                      "flex cursor-pointer items-start gap-3 rounded-xl2 border p-4 transition " +
                      (checked
                        ? "border-accent bg-white shadow-soft"
                        : "border-line bg-white hover:border-accent/40")
                    }
                  >
                   <input
  type="checkbox"
  checked={checked}
  onChange={() => toggleOrder(order.orderId)}
  className="mt-1 h-5 w-5 shrink-0 accent-current"
/>

<span className="min-w-0">
  <span className="block text-sm font-extrabold text-ink">
    To: {order.name || "Unnamed customer"}
  </span>

  <span className="mt-1 block text-sm text-muted">
    {order.line1}
  </span>

  {order.line2 ? (
    <span className="block text-sm text-muted">
      {order.line2}
    </span>
  ) : null}

  <span className="block text-sm text-muted">
    {[order.city, order.state]
      .filter(Boolean)
      .join(", ")}
  </span>

  <span className="block text-sm font-semibold text-muted">
    {order.postalCode}
  </span>

  {shouldShowCountry(order.country) ? (
    <span className="block text-sm text-muted">
      {order.country}
    </span>
  ) : null}
</span>
                  </label>
                );
              })}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
