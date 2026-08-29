"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type AdminOrderAlertsProps = {
  latestOrderId?: string;
};

const REFRESH_INTERVAL_MS = 300000;
const STORAGE_KEY = "pp-admin-latest-order-id";

function speakNewOrder() {
  if (typeof window === "undefined") return;
  if (!("speechSynthesis" in window)) return;

  window.speechSynthesis.cancel();

  const message = new SpeechSynthesisUtterance("New order received");
  message.rate = 0.95;
  message.pitch = 1;
  message.volume = 1;

  window.speechSynthesis.speak(message);
}

export function AdminOrderAlerts({ latestOrderId }: AdminOrderAlertsProps) {
  const router = useRouter();
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const initialisedRef = useRef(false);

  useEffect(() => {
    setLastRefresh(new Date());

    const interval = window.setInterval(() => {
      router.refresh();
      setLastRefresh(new Date());
    }, REFRESH_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [router]);

  useEffect(() => {
    if (!latestOrderId) return;

    const previousOrderId = window.localStorage.getItem(STORAGE_KEY);

    if (!initialisedRef.current) {
      window.localStorage.setItem(STORAGE_KEY, latestOrderId);
      initialisedRef.current = true;
      return;
    }

    if (previousOrderId && previousOrderId !== latestOrderId) {
      window.localStorage.setItem(STORAGE_KEY, latestOrderId);

      if (alertsEnabled) {
        speakNewOrder();
      }

      return;
    }

    window.localStorage.setItem(STORAGE_KEY, latestOrderId);
  }, [latestOrderId, alertsEnabled]);

  function enableAlerts() {
    setAlertsEnabled(true);

    if (latestOrderId) {
      window.localStorage.setItem(STORAGE_KEY, latestOrderId);
    }

    speakNewOrder();
  }

  return (
    <div className="rounded-xl2 border border-line bg-white p-4 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-extrabold text-ink">
            Live order monitor
          </div>
          <div className="mt-1 text-xs text-muted">
            Auto-refreshes every 5 minutes to reduce database usage.
            {lastRefresh ? ` Last checked ${lastRefresh.toLocaleTimeString("en-GB")}.` : ""}
          </div>
        </div>

        <button
          type="button"
          onClick={enableAlerts}
          className={
            "rounded-xl2 px-4 py-2 text-sm font-extrabold shadow-soft " +
            (alertsEnabled
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
              : "bg-accent text-white hover:bg-accent/90")
          }
        >
          {alertsEnabled ? "Alerts enabled" : "Enable order alerts"}
        </button>
      </div>

      {alertsEnabled ? (
        <div className="mt-3 rounded-xl2 border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-800">
          Voice alert is active on this browser tab. Keep this page open.
        </div>
      ) : (
        <div className="mt-3 rounded-xl2 border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-semibold text-amber-800">
          Click enable once so your browser allows the voice alert.
        </div>
      )}
    </div>
  );
}