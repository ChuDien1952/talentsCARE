/**
 * Home Page
 * Landing page with hero, services preview, and statistics
 */

import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Hero } from '@/components/sections/hero';
import { ServicesPreview } from '@/components/sections/services-preview';
import { StatsBar } from '@/components/sections/stats-bar';

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ServicesPreview />
      <StatsBar />
    </>
  );
}
