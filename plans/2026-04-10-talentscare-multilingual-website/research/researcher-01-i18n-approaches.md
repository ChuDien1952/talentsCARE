# Research Report: Next.js 15 Multilingual Implementation (German, English, Vietnamese)

**Research Date:** April 10, 2026
**Status:** Complete
**Scope:** i18n routing, static export compatibility, library comparison, SEO optimization

---

## Executive Summary

For talentsCARE's 3-language site (DE, EN, VI), **next-intl** is the strongly recommended solution for Next.js 15 App Router. It provides 2KB bundle size, native Server Component support, and built-in middleware for locale detection. Static export requires `generateStaticParams()` + `setRequestLocale()` pattern—achievable but requires explicit configuration. Trade-off: built-in App Router simplicity vs. manual SEO hreflang setup for static exports.

---

## Key Findings

### 1. i18n Solutions Comparison (2026)

| Aspect | next-intl | react-i18next | next-translate |
|--------|-----------|---------------|-----------------|
| Bundle Size | ~2KB | ~891KB | Minimal (file-based) |
| App Router Support | Native (2026) | Flexible, complex setup | Limited |
| Weekly Downloads | 1.8M | 2.1M | 31K |
| Server Component Ready | Yes | No | No |
| Static Export | Supported (with generateStaticParams) | Requires workaround | Supported |
| Learning Curve | Low | High (flexible) | Very Low |
| **Recommendation for Your Stack** | **YES** | Not ideal | Simpler but less maintained |

**Verdict:** next-intl dominates 2026 for App Router projects. react-i18next offers ecosystem depth; next-translate offers simplicity for simple content sites.

### 2. Static Export Compatibility Analysis

**Critical Constraint:** Next.js built-in i18n config (`next.config.js`) only works with Pages Router, NOT App Router.

**Solution for Static Export (next-intl):**

```javascript
// middleware.ts - Locale detection
import { NextRequest, NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';

const locales = ['de', 'en', 'vi'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith('/api')) return;

  const localeFromPath = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (localeFromPath) return;

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
```

**For Static Pre-rendering:**

```typescript
// app/[locale]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export function generateStaticParams() {
  return [
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'vi' }
  ];
}

export default function HomePage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale); // Enable static rendering
  const t = getTranslations();
  return <h1>{t('home.title')}</h1>;
}
```

**Status:** Achievable. Requires explicit `setRequestLocale()` in every page/layout pre-generateStaticParams().

### 3. Content Management

**JSON-based approach** (recommended for static export + GitHub Pages):
- Store translations in `public/locales/{locale}.json`
- Load at build time with `next-intl`
- No database calls = perfect for static export

**Alternative:** Markdown front-matter for content + JSON for UI strings.

### 4. SEO for Static Export Multilingual Sites

**Critical Finding:** Static export + automatic hreflang = NOT supported by Next.js directly.

**Required Manual Implementation:**

1. **Hreflang Tags** (in Head component):
```tsx
import { useMetadata } from 'next-intl/server';

export const metadata = {
  alternates: {
    languages: {
      de: 'https://example.com/de/page',
      en: 'https://example.com/en/page',
      'vi': 'https://example.com/vi/page',
    },
  },
};
```

2. **Sitemap Generation** (post-build script):
   - Generate `sitemap.xml` with all locale variants
   - Use `@pas7/nextjs-sitemap-hreflang` for validation

3. **Canonical Tags:** Point to self (`/de/page` → canonical `/de/page`)

4. **Lang Attributes:** Set `<html lang={locale}>` in root layout

---

## Routing Architecture Comparison

### App Router (Recommended) vs. Pages Router
- **App Router:** Modern, Server Components, native middleware, smaller bundle
- **Pages Router:** Legacy, i18n config in `next.config.js`, but no static export + i18n support
- **For GitHub Pages (static export):** App Router only viable option

---

## Implementation Complexity Assessment

| Phase | Complexity | Effort |
|-------|-----------|--------|
| Basic routing (de/en/vi) | Low | 1-2 hours |
| Static export setup | Medium | 2-3 hours |
| SEO (hreflang/sitemap) | Medium | 2-4 hours |
| Content management | Low | 1-2 hours |
| **Total** | **Medium** | **6-11 hours** |

---

## Recommended Approach

**Stack:** Next.js 15 App Router + next-intl + static export + GitHub Pages

**Implementation Pattern:**

1. **Routing:** `app/[locale]/(group)/page.tsx` with middleware
2. **Translations:** JSON files in `public/locales/`, loaded via next-intl
3. **Static Pre-render:** `generateStaticParams()` + `setRequestLocale()`
4. **SEO:** Metadata API + manual hreflang + build-time sitemap generation
5. **Content:** Markdown for pages + JSON for UI strings (DRY principle)

**Trade-offs:**
- Gain: Tiny bundle, native Server Components, built-in middleware
- Trade: Manual hreflang implementation, no automatic language detection on static export, requires build-time sitemap generation

---

## Unresolved Questions

1. Will GitHub Pages handle locale-specific HTTP headers from middleware (Link: hreflang)?
2. Content source strategy: JSON CMS vs. markdown files vs. headless CMS integration?
3. Fallback handling for missing translations per locale?

---

## Sources

- [next-intl App Router i18n Guide (2026)](https://next-intl.dev/docs/getting-started/app-router)
- [A Complete Guide to i18n in Next.js 15 App Router](https://dev.to/mukitaro/a-complete-guide-to-i18n-in-nextjs-15-app-router-with-next-intl-supporting-8-languages-1lgj)
- [Best i18n Libraries Comparison 2026](https://dev.to/erayg/best-i18n-libraries-for-nextjs-react-react-native-in-2026-honest-comparison-3m8f)
- [next-intl vs next-translate](https://npmtrends.com/next-i18next-vs-next-intl-vs-next-translate-vs-react-i18next)
- [Next.js Sitemap Hreflang for Static Export](https://pas7.com.ua/blog/en/nextjs-sitemap-hreflang)
- [Multilingual SEO Best Practices 2026](https://saas.catlove.cc/en/blog/nextjs-i18n-seo-guide)
- [GitHub - i18nexus/next-i18n-router](https://github.com/i18nexus/next-i18n-router)
- [Official Next.js Guides: Internationalization](https://nextjs.org/docs/pages/guides/internationalization)
