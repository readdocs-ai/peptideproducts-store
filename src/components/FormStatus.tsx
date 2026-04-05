"use client";

export function FormStatus({ status }: { status: { type: "idle" | "ok" | "err"; message?: string } }) {
  if (status.type === "idle") return null;

  if (status.type === "ok") {
    return (
      <div className="mt-4 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
        <div className="font-extrabold text-ink">Message sent</div>
        <div className="mt-1">Thanks — we’ll reply as soon as possible.</div>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl2 border border-line bg-panel p-4 text-sm text-muted">
      <div className="font-extrabold text-ink">Could not send</div>
      <div className="mt-1">{status.message || "Please try again."}</div>
    </div>
  );
}
