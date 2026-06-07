import { NextRequest, NextResponse } from 'next/server';

/**
 * Emits a per-request nonce and a strict Content-Security-Policy so that
 * `script-src` does not need `'unsafe-inline'`. The nonce is forwarded to the
 * app via the `x-nonce` request header; `layout.tsx` reads it and applies it
 * to the inline JSON-LD script. Next.js propagates the nonce to its own
 * framework scripts when it detects a nonce'd CSP.
 */
export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    // Tailwind / framer-motion inject inline styles — 'unsafe-inline' kept here
    // is an accepted trade-off (style injection is not script execution).
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data:`,
    `font-src 'self'`,
    `media-src 'self' blob: data:`,
    // EmailJS API — el envío del email del formulario de contacto se hace
    // desde el cliente vía la SDK de EmailJS.
    `connect-src 'self' https://api.emailjs.com`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `frame-src 'none'`,
    `object-src 'none'`,
    `upgrade-insecure-requests`,
  ].join('; ');

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set('Content-Security-Policy', csp);
  return response;
}

export const config = {
  // Apply to HTML document routes; skip the API and static assets.
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|video/|images/).*)',
  ],
};
