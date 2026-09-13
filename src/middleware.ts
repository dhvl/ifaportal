import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') || '').toLowerCase();
  const url = request.nextUrl.clone();

  // Extract hostname without port
  const hostname = host.split(':')[0];

  // Resolve subdomain
  let subdomain = '';

  if (hostname.includes('.localhost') || hostname.endsWith('localhost')) {
    const parts = hostname.split('.localhost');
    if (parts[0] && parts[0] !== 'localhost') {
      subdomain = parts[0];
    }
  } else if (hostname === 'ifamedia.co.uk' || hostname === 'www.ifamedia.co.uk') {
    subdomain = '';
  } else if (hostname.endsWith('.ifamedia.co.uk')) {
    subdomain = hostname.slice(0, -'.ifamedia.co.uk'.length);
  } else if (hostname === 'ifaportal.vercel.app') {
    subdomain = '';
  } else if (hostname.endsWith('.ifaportal.vercel.app')) {
    subdomain = hostname.slice(0, -'.ifaportal.vercel.app'.length);
  } else if (hostname.startsWith('starter.') || hostname.startsWith('starter-')) {
    subdomain = 'starter';
  } else if (hostname.startsWith('growth.') || hostname.startsWith('growth-')) {
    subdomain = 'growth';
  } else if (hostname.startsWith('pro.') || hostname.startsWith('pro-')) {
    subdomain = 'growth';
  } else {
    // Multi-part TLD handling (e.g. .co.uk, .org.uk)
    const parts = hostname.split('.');
    const isUk = parts.length >= 2 && ['co', 'org', 'gov', 'ltd', 'me', 'net'].includes(parts[parts.length - 2]) && parts[parts.length - 1] === 'uk';
    const minParts = isUk ? 4 : 3;
    if (parts.length >= minParts && parts[0] !== 'www') {
      subdomain = parts[0];
    }
  }

  // If a valid subdomain exists (excluding www)
  if (subdomain && subdomain !== 'www') {
    // Flagship Starter Plan portal (Reliable Advisors)
    if (subdomain === 'starter') {
      if (url.pathname === '/' || url.pathname === '') {
        url.pathname = '/portal/reliable-advisors';
        return NextResponse.rewrite(url);
      }
    }
    // Flagship Growth portal (Trustworthy Advisors)
    else if (subdomain === 'growth' || subdomain === 'pro') {
      if (url.pathname === '/' || url.pathname === '') {
        url.pathname = '/portal/trustworthy-advisors';
        return NextResponse.rewrite(url);
      }
    }
    // Flagship Agile IFA Media client
    else if (subdomain === 'agile') {
      if (url.pathname === '/' || url.pathname === '') {
        url.pathname = '/portal/agile-ifa';
        return NextResponse.rewrite(url);
      }
    }
    // Adviser Console
    else if (subdomain === 'admin' || subdomain === 'app') {
      if (url.pathname === '/' || url.pathname === '') {
        url.pathname = '/admin';
        return NextResponse.rewrite(url);
      }
    }
    // Dynamic Practice Client Slugs (e.g. mlp-wealth.ifamedia.co.uk or custom practice)
    else {
      if (url.pathname === '/' || url.pathname === '') {
        url.pathname = `/portal/${subdomain}`;
        return NextResponse.rewrite(url);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes
     * - _next static files and images
     * - static file extensions (favicon, png, svg, pdf, webmanifest)
     */
    '/((?!api|_next/static|_next/image|.*\\.(?:ico|png|svg|jpg|jpeg|gif|webp|pdf|webmanifest)).*)',
  ],
};
