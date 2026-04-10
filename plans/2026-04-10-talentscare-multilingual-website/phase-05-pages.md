# Phase 05: Pages Implementation

## Context

- **Plan:** [plan.md](./plan.md)
- **Previous:** [phase-04-components.md](./phase-04-components.md)
- **Components:** Built in Phase 04
- **Next Phase:** [phase-06-deployment.md](./phase-06-deployment.md)

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-04-10 |
| Description | Assemble components into complete pages with i18n |
| Priority | High |
| Status | Pending |
| Est. Hours | 10 |

## Key Insights

- All pages need `generateStaticParams()` for static export
- All pages need `setRequestLocale()` call
- Metadata must include hreflang alternates
- Page structure: Header > Content > Footer

## Requirements

### Functional
- Home page with all sections
- Services pages (employers, talents)
- About page
- Team page
- Blog index (placeholder)
- Contact page
- 404 page

### Non-Functional
- SEO optimized metadata
- Page load <3s
- Consistent layout across pages

## Architecture

```
app/[locale]/
├── layout.tsx           # Locale layout (header, footer)
├── page.tsx             # Home
├── services/
│   ├── page.tsx         # Services overview (redirect)
│   ├── employers/
│   │   └── page.tsx     # Employer services
│   └── talents/
│       └── page.tsx     # Talent services
├── about/
│   └── page.tsx         # About us
├── team/
│   └── page.tsx         # Team profiles
├── blog/
│   └── page.tsx         # Blog index (MVP placeholder)
├── contact/
│   └── page.tsx         # Contact form
├── privacy/
│   └── page.tsx         # Privacy policy
├── imprint/
│   └── page.tsx         # Imprint (German legal)
└── not-found.tsx        # 404 page
```

## Related Files

After completion:
- All page files under `app/[locale]/`
- Updated `app/[locale]/layout.tsx` with Header/Footer

## Implementation Steps

### Step 1: Update Locale Layout (30 min)
```typescript
// app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Montserrat } from 'next/font/google';
import { locales, type Locale } from '@/lib/i18n/config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-display' });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### Step 2: Home Page (45 min)
```typescript
// app/[locale]/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales, type Locale } from '@/lib/i18n/config';
import { Hero } from '@/components/sections/hero';
import { StatsBar } from '@/components/sections/stats-bar';
import { ServicesPreview } from '@/components/sections/services-preview';
import { Testimonials } from '@/components/sections/testimonials';
import { CTASection } from '@/components/sections/cta-section';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://talentscare.github.io';
  return {
    title: 'talentsCARE - HR Consulting',
    description: 'Professional HR consulting for employers and international talents',
    alternates: {
      canonical: `${baseUrl}/${params.locale}/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/`])),
    },
  };
}

interface Props {
  params: { locale: string };
}

export default function HomePage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations('home');

  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesPreview />
      <Testimonials />
      <CTASection
        title={t('cta.title', { fallback: 'Ready to get started?' })}
        description={t('cta.description', { fallback: 'Contact us today' })}
        ctaText={t('cta.button', { fallback: 'Contact us' })}
        ctaHref="/contact"
      />
    </>
  );
}
```

### Step 3: Services Preview Component (30 min)
```typescript
// components/sections/services-preview.tsx
'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

export function ServicesPreview() {
  const t = useTranslations('home.services');

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Employers Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-3">
              {t('employersTitle')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('employersDesc')}
            </p>
            <Button asChild>
              <Link href="/services/employers">Mehr erfahren &rarr;</Link>
            </Button>
          </motion.div>

          {/* Talents Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-accent mb-3">
              {t('talentsTitle')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('talentsDesc')}
            </p>
            <Button variant="secondary" asChild>
              <Link href="/services/talents">Mehr erfahren &rarr;</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
```

### Step 4: Services Pages - Employers (45 min)
```typescript
// app/[locale]/services/employers/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { ServiceCard } from '@/components/sections/service-card';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://talentscare.github.io';
  return {
    title: 'Services for Employers | talentsCARE',
    alternates: {
      canonical: `${baseUrl}/${params.locale}/services/employers/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/services/employers/`])),
    },
  };
}

interface Props {
  params: { locale: string };
}

export default function EmployersServicesPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations('services.employers');

  const services = [
    'seminare', 'schulungen', 'workshops', 'vortraege',
    'webinare', 'coaching', 'training', 'mentoring', 'events'
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 pt-32">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t('intro.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {t('intro.description')}
          </p>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service}
                title={t(`items.${service}.title`)}
                description={t(`items.${service}.shortDesc`)}
                icon={t(`items.${service}.icon`)}
                href={`/services/employers/${service}`}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
```

### Step 5: Services Pages - Talents (30 min)
```typescript
// app/[locale]/services/talents/page.tsx
// Same structure as employers, using 'services.talents' translations
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { ServiceCard } from '@/components/sections/service-card';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://talentscare.github.io';
  return {
    title: 'Services for Talents | talentsCARE',
    alternates: {
      canonical: `${baseUrl}/${params.locale}/services/talents/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/services/talents/`])),
    },
  };
}

interface Props {
  params: { locale: string };
}

export default function TalentsServicesPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations('services.talents');

  const services = [
    'seminare', 'schulungen', 'workshops', 'vortraege',
    'webinare', 'coaching', 'training', 'mentoring', 'events'
  ];

  return (
    <>
      <section className="bg-accent py-20 pt-32">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t('intro.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {t('intro.description')}
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service}
                title={t(`items.${service}.title`)}
                description={t(`items.${service}.shortDesc`)}
                icon={t(`items.${service}.icon`)}
                href={`/services/talents/${service}`}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
```

### Step 6: About Page (45 min)
```typescript
// app/[locale]/about/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://talentscare.github.io';
  return {
    title: 'About Us | talentsCARE',
    alternates: {
      canonical: `${baseUrl}/${params.locale}/about/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/about/`])),
    },
  };
}

interface Props {
  params: { locale: string };
}

export default function AboutPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations('about');

  const values = ['respect', 'excellence', 'innovation', 'partnership'];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 pt-32">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-white/90">{t('subtitle')}</p>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20">
        <Container size="narrow">
          <h2 className="text-3xl font-display font-bold text-primary mb-6">
            {t('mission.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('mission.text')}
          </p>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <Container>
          <h2 className="text-3xl font-display font-bold text-primary mb-12 text-center">
            {t('values.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">
                    {t(`values.${value}`).charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t(`values.${value}`)}
                </h3>
                <p className="text-gray-600">
                  {t(`values.${value}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20">
        <Container size="narrow">
          <h2 className="text-3xl font-display font-bold text-primary mb-6">
            {t('story.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('story.text')}
          </p>
        </Container>
      </section>
    </>
  );
}
```

### Step 7: Contact Page (30 min)
```typescript
// app/[locale]/contact/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/sections/contact-form';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://talentscare.github.io';
  return {
    title: 'Contact | talentsCARE',
    alternates: {
      canonical: `${baseUrl}/${params.locale}/contact/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/contact/`])),
    },
  };
}

interface Props {
  params: { locale: string };
}

export default function ContactPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations('contact');

  return (
    <>
      <section className="bg-primary py-20 pt-32">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-white/90">{t('subtitle')}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <p className="text-gray-600 mb-8">{t('intro')}</p>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-6">
                  {t('info.address')}
                </h2>
                <address className="not-italic space-y-4 text-gray-600">
                  <p>
                    <strong>talentsCARE GmbH</strong><br />
                    Musterstrasse 123<br />
                    12345 Berlin, Germany
                  </p>
                  <p>
                    <strong>{t('info.phone')}:</strong><br />
                    <a href="tel:+4930123456789" className="text-primary hover:underline">
                      +49 30 123 456 789
                    </a>
                  </p>
                  <p>
                    <strong>{t('info.email')}:</strong><br />
                    <a href="mailto:info@talentscare.de" className="text-primary hover:underline">
                      info@talentscare.de
                    </a>
                  </p>
                  <p>
                    <strong>{t('info.hours')}:</strong><br />
                    Mo-Fr: 9:00 - 18:00
                  </p>
                </address>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
```

### Step 8: Team Page (30 min)
```typescript
// app/[locale]/team/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import Image from 'next/image';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://talentscare.github.io';
  return {
    title: 'Our Team | talentsCARE',
    alternates: {
      canonical: `${baseUrl}/${params.locale}/team/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/team/`])),
    },
  };
}

// Placeholder team data (would come from CMS/translations in production)
const teamMembers = [
  { id: 1, name: 'Dr. Maria Schmidt', role: 'CEO & Founder', image: '/images/team/placeholder.jpg' },
  { id: 2, name: 'Thomas Mueller', role: 'Head of Consulting', image: '/images/team/placeholder.jpg' },
  { id: 3, name: 'Linh Nguyen', role: 'Integration Specialist', image: '/images/team/placeholder.jpg' },
  { id: 4, name: 'Sarah Johnson', role: 'HR Consultant', image: '/images/team/placeholder.jpg' },
];

interface Props {
  params: { locale: string };
}

export default function TeamPage({ params }: Props) {
  setRequestLocale(params.locale);
  const t = useTranslations('team');

  return (
    <>
      <section className="bg-primary py-20 pt-32">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-white/90">{t('subtitle')}</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="text-lg text-gray-600 max-w-3xl mb-12">{t('intro')}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  {/* Placeholder - replace with actual images */}
                  <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
```

### Step 9: Blog Placeholder Page (15 min)
```typescript
// app/[locale]/blog/page.tsx
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const baseUrl = 'https://talentscare.github.io';
  return {
    title: 'Blog | talentsCARE',
    alternates: {
      canonical: `${baseUrl}/${params.locale}/blog/`,
      languages: Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}/blog/`])),
    },
  };
}

interface Props {
  params: { locale: string };
}

export default function BlogPage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <section className="bg-primary py-20 pt-32">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-white/90">Coming soon</p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Blog content coming soon. Check back later for updates.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
```

### Step 10: 404 Not Found Page (15 min)
```typescript
// app/[locale]/not-found.tsx
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('common.cta');

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-primary mb-4">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Page not found
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
```

### Step 11: Privacy & Imprint Pages (20 min)
```typescript
// app/[locale]/privacy/page.tsx
// app/[locale]/imprint/page.tsx
// Similar structure - legal content pages
// Content would be locale-specific legal text
```

### Step 12: Test All Pages (45 min)
```bash
npm run build
npm run start

# Test:
# - All pages render for all 3 locales
# - Language switcher works on every page
# - Navigation links work
# - Metadata (view source) has hreflang tags
# - Mobile responsive
```

## Todo List

- [ ] Update locale layout with Header/Footer
- [ ] Create Home page with all sections
- [ ] Create ServicesPreview component
- [ ] Create Employers services page
- [ ] Create Talents services page
- [ ] Create About page
- [ ] Create Contact page with form
- [ ] Create Team page
- [ ] Create Blog placeholder page
- [ ] Create 404 page
- [ ] Create Privacy page
- [ ] Create Imprint page
- [ ] Test all pages in all locales
- [ ] Verify hreflang metadata

## Success Criteria

- [ ] All pages build without errors
- [ ] All pages accessible in de/en/vi
- [ ] Language switcher functional on all pages
- [ ] Metadata includes proper hreflang tags
- [ ] Mobile responsive design
- [ ] No missing translation warnings

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Missing generateStaticParams | High | Medium | Checklist per page |
| Missing setRequestLocale | High | Medium | Linter warning |
| Translation key mismatches | Medium | High | Build-time validation |
| Layout shift on load | Low | Medium | Skeleton loaders |

## Security Considerations

- Validate all form inputs server-side (when adding API)
- No sensitive data in client-rendered pages
- Proper CORS for external services

## Next Steps

Upon completion, proceed to [phase-06-deployment.md](./phase-06-deployment.md) to set up GitHub Actions and deploy to GitHub Pages.
