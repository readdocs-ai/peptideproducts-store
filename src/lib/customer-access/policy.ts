export const ACCESS_POLICY_VERSION = "2026-11-06";

export function safeReturnTo(value: unknown): string {
  if (typeof value !== "string" || !value.startsWith("/") || value.startsWith("//") || /[\\\r\n]/.test(value)) return "/";
  try {
    const url = new URL(value, "https://www.peptideproducts.co.uk");
    if (url.origin !== "https://www.peptideproducts.co.uk" || /^\/(?:access|api|admin|_next)(?:\/|$)/.test(url.pathname)) return "/";
    return url.pathname + url.search;
  } catch { return "/"; }
}

export function publicAccessPath(path: string, method: string): boolean {
  if (path === "/access" || path.startsWith("/access/")) return true;
  if (path.startsWith("/api/auth/")) return true;
  if (path.startsWith("/_next/static/") || path === "/favicon.svg" || path === "/favicon.ico" || path === "/robots.txt") return true;
  // These endpoints authenticate their own provider notifications. No customer cookie is sent by a payment provider.
  return method === "POST" && ["/api/webhook", "/api/sumup/webhook"].includes(path);
}

export function validDeclaration(form: FormData): boolean {
  return form.get("adult") === "yes" && form.get("research") === "yes" && form.get("terms") === "yes";
}
