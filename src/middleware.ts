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

  const base64Credentials = authHeader.split(" ")[1];
  const decoded = atob(base64Credentials);
  const [providedUsername, providedPassword] = decoded.split(":");

  if (providedUsername !== username || providedPassword !== password) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};