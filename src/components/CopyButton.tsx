"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-3 rounded-lg bg-accent px-3 py-1 text-xs font-bold text-white"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}