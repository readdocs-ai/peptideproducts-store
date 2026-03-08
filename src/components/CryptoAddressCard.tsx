"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

type Props = {
  label: string;
  address: string;
  note?: string;
};

export default function CryptoAddressCard({ label, address, note }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-xl2 border border-line bg-white p-4">
      <div className="text-sm font-extrabold text-ink">{label}</div>

      {note ? <div className="mt-1 text-xs text-muted">{note}</div> : null}

      <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-start">
        <div className="rounded-xl border border-line bg-white p-3">
          <QRCodeSVG value={address} size={132} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="rounded-xl border border-line bg-panel p-3 font-mono text-xs text-ink break-all">
            {address}
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="mt-3 inline-flex rounded-xl2 bg-accent px-4 py-2 text-xs font-extrabold text-white shadow-soft hover:bg-accent/90"
          >
            {copied ? "Copied" : "Copy address"}
          </button>
        </div>
      </div>
    </div>
  );
}