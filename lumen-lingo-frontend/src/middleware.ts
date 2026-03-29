import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Mirror Sec-GPC header as a client-readable cookie so browser extensions
  // that set only the HTTP header (not navigator.globalPrivacyControl) are detected.
  if (request.headers.get('sec-gpc') === '1') {
    response.cookies.set('ll_gpc', '1', {
      path: '/',
      sameSite: 'strict',
      httpOnly: false, // must be readable by client-side JS
    });
  }

  return response;
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|sw\\.js|.*\\..*).*)',
};
