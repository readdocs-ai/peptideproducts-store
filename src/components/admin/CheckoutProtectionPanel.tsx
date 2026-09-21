"use client";

import { useMemo, useState } from "react";
import type { AbuseLogEntry } from "@/lib/checkout-protection";

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London",
  });
}

function reasonLabel(reason: string) {
  const labels: Record<string, string> = {
    honeypot: "Bot trap triggered",
    "known-abuse:blocked-email-domain": "Known abusive email domain",
    "known-abuse:phone-name-signature": "Known abusive phone/name pattern",
    "temporary-ip-block": "Temporary IP block",
  };
  if (labels[reason]) return labels[reason];
  if (reason.startsWith("rate-limit:")) return `Rate limit: ${reason.replace("rate-limit:", "")}`;
  return reason;
}

function canRelease(entry: AbuseLogEntry) {
  return entry.reason === "temporary-ip-block" || entry.reason.startsWith("rate-limit:");
}

export function CheckoutProtectionPanel({ entries }: { entries: AbuseLogEntry[] }) {
  const [released, setReleased] = useState<Record<string, boolean>>({});
  const [working, setWorking] = useState<Record<string, boolean>>({});
  const [message, setMessage] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const repeatCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const entry of entries) counts[entry.ipHash] = (counts[entry.ipHash] || 0) + 1;
    return counts;
  }, [entries]);

  async function release(entry: AbuseLogEntry, key: string) {
    if (!entry.ipBlockHash) return;
    setWorking((prev) => ({ ...prev, [key]: true }));
    setMessage("");
    try {
      const response = await fetch("/admin/api/checkout-protection/unblock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ipBlockHash: entry.ipBlockHash,
          emailBlockHash: entry.emailBlockHash,
          phoneBlockHash: entry.phoneBlockHash,
          nameIpBlockHash: entry.nameIpBlockHash,
          payloadBlockHash: entry.payloadBlockHash,
          reason: entry.reason,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Unable to release block");
      setReleased((prev) => ({ ...prev, [key]: true }));
      setMessage("Temporary checkout block released. The customer can retry now.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to release block");
    } finally {
      setWorking((prev) => ({ ...prev, [key]: false }));
    }
  }

  return (
    <section id="blocked-attempts" className="mb-8 scroll-mt-6 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xs font-extrabold uppercase tracking-wide text-slate-600">Blocked checkout attempts</div>
          <h2 className="mt-1 text-xl font-extrabold text-ink">Recent protection history</h2>
          <p className="mt-1 max-w-3xl text-sm text-muted">Only privacy-safe hashes are shown. Use Allow retry only for temporary rate-limit blocks that you believe belong to a genuine customer. Known bot signatures cannot be released here.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {entries.length > 0 ? (
            <button
              type="button"
              onClick={() => setShowHistory((value) => !value)}
              className="rounded-xl2 border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-extrabold text-amber-900 hover:bg-amber-100"
              aria-expanded={showHistory}
              aria-controls="checkout-protection-history"
            >
              {showHistory ? "Hide history" : `Show history (${entries.length})`}
            </button>
          ) : null}
          <a href="#top" className="rounded-xl2 border border-line bg-white px-4 py-2 text-sm font-extrabold text-ink hover:bg-panel">Back to top</a>
        </div>
      </div>

      {message ? <div className="mt-4 rounded-xl2 border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-900">{message}</div> : null}

      {entries.length === 0 ? (
        <div className="mt-5 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">No blocked attempts have been logged yet.</div>
      ) : !showHistory ? (
        <div className="mt-5 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
          {entries.length} historical blocked attempt{entries.length === 1 ? "" : "s"} logged. History is hidden to keep the admin page compact.
        </div>
      ) : (
        <div id="checkout-protection-history" className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-wide text-muted">
                <th className="px-3 py-3">Time</th>
                <th className="px-3 py-3">Reason</th>
                <th className="px-3 py-3">Hashed identifiers</th>
                <th className="px-3 py-3">Pattern</th>
                <th className="px-3 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => {
                const key = `${entry.at}-${entry.ipHash}-${index}`;
                const releasable = canRelease(entry) && Boolean(entry.ipBlockHash);
                return (
                  <tr key={key} className="border-b border-line/70 align-top last:border-0">
                    <td className="whitespace-nowrap px-3 py-4 font-semibold text-ink">{formatDate(entry.at)}</td>
                    <td className="px-3 py-4">
                      <div className="font-extrabold text-ink">{reasonLabel(entry.reason)}</div>
                      <div className="mt-1 max-w-[260px] truncate text-xs text-muted" title={entry.userAgent}>{entry.userAgent || "Unknown user agent"}</div>
                    </td>
                    <td className="px-3 py-4 font-mono text-xs text-slate-700">
                      <div>IP: {entry.ipHash}</div>
                      <div>Email: {entry.emailHash}</div>
                      <div>Phone: {entry.phoneHash}</div>
                      <div>Payload: {entry.payloadHash || "legacy"}</div>
                    </td>
                    <td className="px-3 py-4">
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-bold text-slate-700">Same IP × {repeatCounts[entry.ipHash] || 1}</span>
                    </td>
                    <td className="px-3 py-4">
                      {releasable ? (
                        <button
                          type="button"
                          disabled={working[key] || released[key]}
                          onClick={() => release(entry, key)}
                          className="rounded-xl2 border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-extrabold text-emerald-800 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {released[key] ? "Retry allowed" : working[key] ? "Releasing…" : "Allow retry"}
                        </button>
                      ) : (
                        <span className="text-xs font-semibold text-muted">Protected</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
