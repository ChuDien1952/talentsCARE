/**
 * Locale-Aware Layout
 * Wraps all pages with locale-specific configuration and translations
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Montserrat } from 'next/font/google';
import { locales, type Locale } from '@/lib/i18n/config';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
});

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Generate metadata with hreflang tags
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // Base URL - update for production deployment
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'https://talentscare.github.io';

  return {
    title: {
      default: 'talentsCARE - Integration · Schulung · Coaching · Mentoring',
      template: '%s | talentsCARE',
    },
    description:
      'Professionelle Integrationsbegleitung für internationale Fachkräfte und Unternehmen in Deutschland',
    keywords: [
      'HR Consulting',
      'Integration',
      'Fachkräfte',
      'Schulung',
      'Coaching',
      'Mentoring',
    ],
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

  // Validate that the incoming locale parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering for this locale
  setRequestLocale(locale);

  // Get messages for client components
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
