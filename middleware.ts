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

export function middleware(req: NextRequest) {
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

export const config = {
  matcher: ["/:path*"],
};