/**
 * Middleware for Locale Detection
 * Handles automatic locale detection and routing
 */

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always', // Always show locale prefix in URL (/de/, /en/, /vi/)
});

export const config = {
  // Match all pathnames except:
  // - API routes (/api/*)
  // - Static files (files with extensions)
  // - Next.js internals (_next, _vercel)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'  ],
};
