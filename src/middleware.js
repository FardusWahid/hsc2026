import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);

    if (
      req.nextUrl.pathname.startsWith("/chemistry1") &&
      req.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }


if(req.nextUrl.pathname.startsWith("/physics1") && req.nextauth.token.role != "premium"){
    return NextResponse.rewrite(new URL('/denied', req.url));
}

if(req.nextUrl.pathname.startsWith("/math1") && req.nextauth.token.role != "pro"){
    return NextResponse.rewrite(new URL('/denied', req.url));
}











  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/chemistry1/:path*", "/physics1/:path*",
"/math1/:path*", "/ict/:path*", "/denied", "/"

] };





