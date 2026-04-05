"use client";

import { useEffect, useState } from "react";

const KEY = "pp_age_ok_v1";

export function AgeGate() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      const ok = window.localStorage.getItem(KEY) === "1";
      setOpen(!ok);
    } catch {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-xl2 bg-white shadow-lift border border-line">
        <div className="p-6">
          <div className="inline-flex items-center rounded-full bg-panel px-3 py-1 text-xs font-semibold text-muted border border-line">
            Age verification
          </div>

          <h2 className="mt-4 text-2xl font-extrabold tracking-tight">
            18+ and research use only
          </h2>

          <p className="mt-3 text-sm text-muted">
            This website supplies laboratory compounds strictly for <span className="font-semibold text-ink">research purposes only</span>.
            Products are <span className="font-semibold text-ink">not for human or veterinary use</span>.
          </p>

          <label className="mt-5 flex items-start gap-3 rounded-xl2 bg-panel p-4 border border-line">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <span className="text-sm text-muted">
              I confirm I am at least <span className="font-semibold text-ink">18 years old</span> and I will purchase
              only for legitimate laboratory research purposes.
            </span>
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              className={"flex-1 rounded-xl2 px-4 py-3 text-sm font-extrabold text-white shadow-soft " + (checked ? "bg-accent hover:bg-accent/90" : "bg-accent/40 cursor-not-allowed")}
              disabled={!checked}
              onClick={() => {
                window.localStorage.setItem(KEY, "1");
                setOpen(false);
              }}
            >
              Enter site
            </button>

            <a
              className="flex-1 rounded-xl2 border border-line bg-white px-4 py-3 text-sm font-extrabold text-ink text-center hover:bg-panel"
              href="https://www.google.com"
            >
              Leave
            </a>
          </div>

          <div className="mt-4 text-xs text-muted">
            Tip: Add a cookie consent tool if you enable analytics/ads.
          </div>
        </div>
      </div>
    </div>
  );
}
