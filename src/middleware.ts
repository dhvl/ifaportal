import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();

  // Handle starter subdomain: e.g. starter.yourdomain.co.uk or starter.localhost:3000
  if (host.startsWith('starter.') || host.startsWith('starter-')) {
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/portal/mlp-wealth';
      return NextResponse.rewrite(url);
    }
  }

  // Handle pro subdomain: e.g. pro.yourdomain.co.uk or pro.localhost:3000
  if (host.startsWith('pro.') || host.startsWith('pro-')) {
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/portal/heritage-trust';
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
