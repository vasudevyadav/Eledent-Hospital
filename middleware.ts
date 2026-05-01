import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const redirects: Record<string, string> = {
  "/services/smile-makeover-in-hyderabad": "/services/smile-makeover-hyderabad",
  "/services/advanced-dental-implants": "/services/advanced-and-painless-dental-implants",
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const destination = redirects[pathname];

  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 301);
  }

  return NextResponse.next();
}