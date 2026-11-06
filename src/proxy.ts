import { auth } from "@/auth";
import { hasAccessDeclaration } from "@/lib/customer-access/store";
import { publicAccessPath } from "@/lib/customer-access/policy";
import { ORDERING_PAUSED } from "@/lib/maintenance";
import { NextRequest, NextResponse } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin Area"',
    },
  });
}

function existingProtection(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (ORDERING_PAUSED) {
    if (path === "/cart" || path.startsWith("/cart/") || path === "/checkout" || path.startsWith("/checkout/")) {
      return NextResponse.redirect(new URL("/ordering-paused", req.url), 307);
    }
    if (req.method === "POST" && (path === "/api/checkout" || path === "/api/order")) {
      return NextResponse.json({ ok: false, error: "New orders are temporarily suspended for maintenance." }, { status: 503, headers: { "Cache-Control": "no-store", "Retry-After": "3600" } });
    }
  }
  const host = req.headers.get("host");

  if (host === "peptideproducts.co.uk") {
    const url = req.nextUrl.clone();
    url.hostname = "www.peptideproducts.co.uk";
    url.protocol = "https:";

    return NextResponse.redirect(url, 308);
  }

  const isAdminRoute =
    req.nextUrl.pathname.startsWith("/admin") ||
    req.nextUrl.pathname.startsWith("/admin/api");

  if (!isAdminRoute) {
    return NextResponse.next();
  }

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    return new NextResponse("Admin auth environment variables are missing.", {
      status: 500,
    });
  }

  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  let providedUsername = "";
let providedPassword = "";

try {
  const base64Credentials = authHeader.slice(6).trim();
  const decoded = atob(base64Credentials);
  const separator = decoded.indexOf(":");

  if (separator === -1) {
    return unauthorizedResponse();
  }

  providedUsername = decoded.slice(0, separator);
  providedPassword = decoded.slice(separator + 1);
} catch {
  return unauthorizedResponse();
}

if (providedUsername !== username || providedPassword !== password) {    return unauthorizedResponse();
  }

  return NextResponse.next();
}

function privateResponse(response: NextResponse) {
  response.headers.set("Cache-Control", "private, no-store, max-age=0");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  response.headers.set("Referrer-Policy", "same-origin");
  return response;
}
const customerProtection = auth(async (req) => {
  const path = req.nextUrl.pathname;
  const session = req.auth;
  if (!session?.user?.id) {
    if (path.startsWith("/api/")) return privateResponse(NextResponse.json({ error: "Please sign in to continue." }, { status: 401 }));
    const destination = new URL("/access", req.url);
    destination.searchParams.set("next", path + req.nextUrl.search);
    return privateResponse(NextResponse.redirect(destination));
  }
  if (!await hasAccessDeclaration(session.user.id)) {
    if (path.startsWith("/api/")) return privateResponse(NextResponse.json({ error: "Please confirm your age and research-use declaration." }, { status: 403 }));
    const destination = new URL("/access/confirm", req.url);
    destination.searchParams.set("next", path + req.nextUrl.search);
    return privateResponse(NextResponse.redirect(destination));
  }
  const response = existingProtection(req);
  const headers = new Headers(req.headers);
  headers.set("x-pp-access-page", "false");
  headers.set("x-pp-admin-page", "false");
  return privateResponse(response.headers.get("location") || response.status !== 200 ? response : NextResponse.next({ request: { headers } }));
});

export async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (req.headers.get("host") === "peptideproducts.co.uk") {
    const destination = req.nextUrl.clone(); destination.hostname = "www.peptideproducts.co.uk"; destination.protocol = "https:";
    return NextResponse.redirect(destination, 308);
  }
  if (path === "/admin" || path.startsWith("/admin/")) {
    const response = existingProtection(req);
    if (response.status !== 200) return response;
    const headers = new Headers(req.headers); headers.set("x-pp-admin-page", "true"); headers.set("x-pp-access-page", "false");
    return NextResponse.next({ request: { headers } });
  }
  if (publicAccessPath(path, req.method)) {
    const headers = new Headers(req.headers);
    headers.set("x-pp-admin-page", "false");
    headers.set("x-pp-access-page", path === "/access" || path.startsWith("/access/") ? "true" : "false");
    const response = NextResponse.next({ request: { headers } });
    return path.startsWith("/_next/static/") ? response : privateResponse(response);
  }
  // Lazy Auth.js configuration resolves the wrapper asynchronously.
  try { return await (await customerProtection)(req, { params: Promise.resolve({}) }); }
  catch {
    console.error("Customer access gate is temporarily unavailable");
    // Storage or authentication failure must never reveal protected pages.
    return privateResponse(new NextResponse("Customer access is temporarily unavailable. Please try again shortly or contact info@peptideproducts.co.uk.", { status: 503, headers: { "Retry-After": "60" } }));
  }
}

export const config = {
  matcher: ["/:path*"],
};