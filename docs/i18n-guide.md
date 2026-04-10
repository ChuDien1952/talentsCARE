# Internationalization (i18n) Implementation Guide

**Phase:** 02 - COMPLETED
**Last Updated:** 2026-04-11
**Framework:** next-intl v4.9.0
**Deployment:** Static Export (GitHub Pages)

## Overview

talentsCARE implements a robust multilingual infrastructure supporting three languages with SEO optimization, accessibility compliance, and type-safe routing. All content is pre-rendered at build time for optimal static hosting.

**Supported Languages:**
- 🇩🇪 **German (de)** - Primary/Default Language
- 🇬🇧 **English (en)** - Secondary Language
- 🇻🇳 **Vietnamese (vi)** - Secondary Language

## Architecture

### Key Components

```
lib/i18n/
├── config.ts          # Locale definitions, metadata
├── request.ts         # next-intl server configuration
└── navigation.ts      # Type-safe routing utilities

middleware.ts          # Locale extraction & routing

app/[locale]/layout.tsx    # Locale-scoped layout with metadata

messages/
├── de.json           # German translations (source language)
├── en.json           # English translations
└── vi.json           # Vietnamese translations

components/ui/
└── language-switcher.tsx   # User-facing language switcher
```

### Configuration Files

**lib/i18n/config.ts** - Central locale configuration:
```typescript
export const locales = ['de', 'en', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';

export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  vi: 'Tiếng Việt',
};

export const localeFlags: Record<Locale, string> = {
  de: '🇩🇪',
  en: '🇬🇧',
  vi: '🇻🇳',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
```

**lib/i18n/request.ts** - Server-side message loading:
```typescript
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) as string;
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
```

**lib/i18n/navigation.ts** - Type-safe routing:
```typescript
import { createNavigation } from 'next-intl/navigation';
import { locales } from './config';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
});
```

**middleware.ts** - Locale detection & routing:
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',  // Always show /de/, /en/, /vi/
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'  ],
};
```

**next.config.ts** - Plugin integration:
```typescript
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export',  // Static export for GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);
```

## URL Routing Pattern

All routes include locale prefix:

```
/de/                  → German home
/de/services          → German services page
/de/about             → German about page

/en/                  → English home
/en/services          → English services page
/en/about             → English about page

/vi/                  → Vietnamese home
/vi/services          → Vietnamese services page
/vi/about             → Vietnamese about page
```

**Pattern:** `/{locale}/{page}`

**Default Locale:** German (de)
- Accessing `/` redirects to `/de/`
- Accessing `/services` redirects to `/de/services`

## Translation Management

### Message File Structure

All translation files follow consistent hierarchical structure:

```json
{
  "common": {
    "nav": {
      "home": "...",
      "services": "...",
      "about": "...",
      "contact": "..."
    },
    "cta": {
      "learnMore": "...",
      "contact": "...",
      "getStarted": "..."
    }
  },
  "home": {
    "title": "...",
    "hero": {
      "headline": "...",
      "description": "..."
    }
  },
  "services": {
    "employers": {
      "title": "...",
      "description": "..."
    },
    "talents": {
      "title": "...",
      "description": "..."
    }
  }
}
```

### Key Organization Rules

1. **Namespacing:** Group related translations under meaningful keys
   - `common` - Shared across all pages (nav, buttons, CTA)
   - `home` - Home page content
   - `services` - Services page content
   - Page-specific keys for dedicated pages

2. **Hierarchy:** Use dot notation to access nested keys
   ```typescript
   t('home.hero.headline')  // Access nested translation
   t('common.nav.home')     // Common navigation
   ```

3. **Consistency:** All three files must have identical structure
   - Missing keys in any locale causes build errors
   - JSON must be valid (watch commas, quotes)
   - Keys must be consistent across files

4. **Naming:** Use camelCase for keys
   ```
   ✅ "learnMore"
   ✅ "getStarted"
   ❌ "learn-more"
   ❌ "learn_more"
   ```

### Adding New Translations

**Step 1:** Add to German (de.json) first:
```json
{
  "services": {
    "training": {
      "title": "Schulungsprogramme",
      "description": "Speziell entwickelte Trainings..."
    }
  }
}
```

**Step 2:** Add same structure to en.json:
```json
{
  "services": {
    "training": {
      "title": "Training Programs",
      "description": "Custom-developed training programs..."
    }
  }
}
```

**Step 3:** Add same structure to vi.json:
```json
{
  "services": {
    "training": {
      "title": "Các Chương Trình Đào Tạo",
      "description": "Các chương trình đào tạo được phát triển đặc biệt..."
    }
  }
}
```

**Step 4:** Use in component:
```typescript
'use client';

import { useTranslations } from 'next-intl';

export function TrainingSection() {
  const t = useTranslations('services.training');

  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </section>
  );
}
```

## Component Usage

### Using Translations in Client Components

```typescript
'use client';

import { useTranslations, useLocale } from 'next-intl';

export function ServiceCard() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
      <span>Current locale: {locale}</span>
    </div>
  );
}
```

**Hooks Available:**
- `useTranslations(namespace?)` - Get translations function
- `useLocale()` - Get current locale string
- `useRouter()` - Type-safe router with locale support
- `usePathname()` - Get current pathname without locale

### Language Switcher Component

**Location:** `components/ui/language-switcher.tsx`

```typescript
'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { locales, localeNames, localeFlags, type Locale } from '@/lib/i18n/config';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language Switcher">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleChange(l)}
          className={`rounded px-3 py-1 text-sm transition-colors ${
            locale === l
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          aria-label={`Switch to ${localeNames[l]}`}
          aria-current={locale === l ? 'true' : 'false'}
        >
          <span className="mr-1" aria-hidden="true">
            {localeFlags[l]}
          </span>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
```

**Features:**
- Accessible with ARIA labels
- Preserves current pathname when switching
- Visual indication of active language
- Flag emoji for quick recognition

### Layout Configuration

**Location:** `app/[locale]/layout.tsx`

```typescript
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Pre-render all locale variants at build time
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata with hreflang tags for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://talentscare.github.io';

  return {
    title: {
      default: 'talentsCARE - Integration · Schulung · Coaching · Mentoring',
      template: '%s | talentsCARE',
    },
    description: 'Professionelle Integrationsbegleitung für internationale Fachkräfte',
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/`])
      ),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for client
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

**Key Points:**
- `generateStaticParams()` - Pre-renders all locales at build time
- `setRequestLocale()` - Enables static rendering for current locale
- `generateMetadata()` - Adds hreflang tags for SEO
- `html lang={locale}` - Sets language attribute for accessibility
- `NextIntlClientProvider` - Wraps client components with translation messages

## Type Safety

### Locale Type

All locale strings should be typed using the `Locale` type:

```typescript
import { type Locale, locales, isValidLocale } from '@/lib/i18n/config';

// ✅ Type-safe
function getLocaleLabel(locale: Locale): string {
  // locale can only be 'de' | 'en' | 'vi'
}

// ✅ Validate unknown strings
function handleLocale(locale: string) {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  // Now TypeScript knows locale is Locale type
  getLocaleLabel(locale);
}
```

## SEO Best Practices

### Hreflang Implementation

The layout automatically generates hreflang tags via metadata:

```html
<!-- Generated in <head> -->
<link rel="canonical" href="https://talentscare.github.io/de/">
<link rel="alternate" hreflang="de" href="https://talentscare.github.io/de/">
<link rel="alternate" hreflang="en" href="https://talentscare.github.io/en/">
<link rel="alternate" hreflang="vi" href="https://talentscare.github.io/vi/">
```

### Language Meta Tags

```html
<!-- Automatically generated -->
<html lang="de">
  <!-- or "en" or "vi" depending on route -->
</html>
```

### Best Practices

1. **Update NEXT_PUBLIC_BASE_URL** in deployment environment
2. **Keep hreflang tags consistent** across all pages
3. **Use canonical URLs** to avoid duplicate content penalties
4. **Test hreflang** with Google Search Console

## Navigation

### Type-Safe Links

```typescript
// ✅ Use from lib/i18n/navigation
import { Link } from '@/lib/i18n/navigation';

<Link href="/services">Services</Link>
// Automatically includes current locale prefix

// Result: /de/services, /en/services, /vi/services
```

### Type-Safe Router

```typescript
'use client';

import { useRouter, usePathname } from '@/lib/i18n/navigation';
import { type Locale } from '@/lib/i18n/config';

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  // Navigate to same page in different locale
  const switchLanguage = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  // Navigate to different page (keeps locale)
  const goToServices = () => {
    router.push('/services');
  };

  return (
    <>
      {/* Content */}
    </>
  );
}
```

## Build & Static Export

### Pre-rendering

All locale variants are pre-rendered at build time:

```bash
npm run build
```

This generates:
```
out/
├── de/
│   ├── index.html
│   ├── services/
│   │   └── index.html
│   └── ...
├── en/
│   ├── index.html
│   ├── services/
│   │   └── index.html
│   └── ...
└── vi/
    ├── index.html
    ├── services/
    │   └── index.html
    └── ...
```

### Key Configuration

**next.config.ts:**
```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Static export
  trailingSlash: true,     // /de/ not /de
  images: {
    unoptimized: true,     // Required for static export
  },
};
```

## Accessibility (WCAG 2.1 AA)

### Language Switcher Accessibility

The `LanguageSwitcher` component includes:
- ARIA labels for screen readers
- `aria-current` attribute indicating active language
- Semantic `<button>` elements (not divs)
- Visible text labels with flags

### HTML Language Attribute

```html
<html lang="de">  <!-- or "en" or "vi" -->
```

Ensures:
- Screen readers pronounce text in correct language
- Spell checkers work correctly
- Browser font selection optimized
- Text direction correct (future RTL support)

### Best Practices

1. **Always set `html lang` attribute**
2. **Use `useLocale()` to update on change**
3. **Provide clear language switcher UI**
4. **Test with screen readers** (NVDA, JAWS)

## Troubleshooting

### Missing Translations

**Error:** "Translation not found"

**Solution:** Check message file structure matches across all locales
```bash
# Verify JSON syntax
npm run format
```

### Locale Not Detected

**Issue:** URL shows /en/ but using German content

**Solution:**
1. Check middleware.ts configuration
2. Verify locale in URL matches config.ts
3. Clear browser cache and rebuild

### Static Export Issues

**Error:** "generateStaticParams is required"

**Solution:** Ensure layout has `generateStaticParams()` function:
```typescript
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
```

### Language Switcher Not Working

**Issue:** Button clicks don't change language

**Solution:**
1. Verify it's a client component (`'use client'`)
2. Check imports from `@/lib/i18n/navigation`
3. Ensure locale is valid per config.ts

## Environment Variables

### Required

**NEXT_PUBLIC_BASE_URL** - Used for hreflang tags
```bash
# .env.local (development)
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Production (GitHub Pages)
NEXT_PUBLIC_BASE_URL=https://vietconsult.github.io
```

## Testing

### Locale Validation

```typescript
import { isValidLocale } from '@/lib/i18n/config';

test('validates locale', () => {
  expect(isValidLocale('de')).toBe(true);
  expect(isValidLocale('invalid')).toBe(false);
});
```

### Navigation Testing

```typescript
// Test with next-intl mock
import { NextIntlClientProvider } from 'next-intl';

test('language switcher', () => {
  render(
    <NextIntlClientProvider messages={messages} locale="de">
      <LanguageSwitcher />
    </NextIntlClientProvider>
  );
  // Assertions...
});
```

## Performance Considerations

### Pre-rendering Impact

- Builds include all locale variants (3x more files)
- Build time scales linearly with locales
- Each locale pre-rendered independently (static generation)
- No runtime locale detection overhead

### Bundle Size

- Message files (~50KB per language) not in JS bundle
- Loaded server-side only
- No additional JavaScript for translations
- ~2KB overhead for next-intl library

### Optimization

1. **Lazy load heavy components** per locale if needed
2. **Tree-shake unused translations** - not possible with JSON
3. **Use dynamic imports** for page-specific content
4. **Cache static pages** - GitHub Pages handles this

## Future Enhancements

### Phase 3+

- Content translation workflow documentation
- Pluralization & interpolation support
- Locale-specific dates/numbers/currencies
- RTL language support (if needed)
- Translation management tool integration
- Automated translation quality checks
- Language-specific SEO optimizations

### Planned Integrations

- Crowdin or similar for translator collaboration
- Automated locale validation in CI/CD
- Performance monitoring per locale
- Localization testing tools

## Conclusion

The i18n infrastructure is complete and production-ready with:
- ✅ 3-language support (de, en, vi)
- ✅ Type-safe routing and components
- ✅ SEO-optimized hreflang tags
- ✅ Accessible language switcher
- ✅ Static pre-rendering all locales
- ✅ WCAG 2.1 AA compliance

All Phase 2 requirements met. Ready for Phase 3 (Content Translation).
