/**
 * Home Page
 * Modern landing page with carousel hero, services, approach, portfolio, and contact
 */

import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { HeroCarousel } from '@/components/sections/hero-carousel';
import { ServicesGrid } from '@/components/sections/services-grid';
import { ApproachSection } from '@/components/sections/approach-section';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { ContactSection } from '@/components/sections/contact-section';

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
      <HeroCarousel />
      <ServicesGrid />
      <ApproachSection />
      <PortfolioGrid />
      <ContactSection />
    </>
  );
}
