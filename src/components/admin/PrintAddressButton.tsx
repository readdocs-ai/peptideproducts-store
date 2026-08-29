"use client";

type PrintAddressButtonProps = {
  orderId: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
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

export function PrintAddressButton({
  orderId,
  name,
  line1,
  line2,
  city,
  state,
  postalCode,
  country,
}: PrintAddressButtonProps) {
  function handlePrint() {
    const printWindow = window.open(
      "",
      "_blank",
      "width=650,height=650",
    );

    if (!printWindow) {
      window.alert(
        "The print window was blocked. Please allow pop-ups for this website and try again.",
      );
      return;
    }

    const townAndCounty = [city, state]
      .filter(Boolean)
      .join(", ");

    const countryToPrint = shouldShowCountry(country)
      ? country
      : "";

    const addressLines = [
      name,
      line1,
      line2,
      townAndCounty,
      postalCode,
      countryToPrint,
    ].filter((line): line is string => Boolean(line));

    const addressHtml = addressLines
      .map((line, index) => {
        const className =
          index === 0
            ? "name"
            : line === postalCode
              ? "postcode"
              : "";

        const displayLine =
          index === 0 ? `To: ${line}` : line;

        return `
          <div class="${className}">
            ${escapeHtml(displayLine)}
          </div>
        `;
      })
      .join("");

    printWindow.document.write(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Shipping address</title>

          <style>
            * {
              box-sizing: border-box;
            }

            @page {
              size: auto;
              margin: 0;
            }

            html,
            body {
              margin: 0;
              padding: 0;
              background: white;
              color: #111827;
              font-family: Arial, Helvetica, sans-serif;
            }

            body {
              padding: 10mm;
            }

            .label {
              width: 100%;
              min-height: 260px;
              padding: 24px;
              display: flex;
              align-items: center;
            }

            .address {
              width: 100%;
              font-size: 24px;
              line-height: 1.45;
            }

            .name {
              margin-bottom: 8px;
              font-size: 27px;
              font-weight: 700;
            }

            .postcode {
              margin-top: 6px;
              font-size: 27px;
              font-weight: 700;
            }

            @media print {
              html,
              body {
                margin: 0 !important;
                padding: 0 !important;
              }

              body {
                padding: 10mm !important;
              }

              .label {
                break-inside: avoid;
                page-break-inside: avoid;
              }
            }
          </style>
        </head>

        <body>
          <div class="label">
            <div class="address">
              ${addressHtml}
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();

    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 300);
  }

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="mt-4 w-full rounded-xl2 border border-accent bg-white px-4 py-3 text-sm font-extrabold text-accent shadow-soft transition hover:bg-accent hover:text-white"
    >
      Print shipping address
    </button>
  );
}