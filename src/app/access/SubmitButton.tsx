"use client";
import { useFormStatus } from "react-dom";
export function SubmitButton({ children, pendingLabel }: { children: React.ReactNode; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return <button type="submit" disabled={pending} aria-disabled={pending} className="mt-6 min-h-12 w-full rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-60">{pending ? pendingLabel : children}</button>;
}
