import { NextResponse } from "next/server";

export function GET(request) {
  const url = new URL("/favicon.ico", request.url);
  return NextResponse.redirect(url, 308);
}

