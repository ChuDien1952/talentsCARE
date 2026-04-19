/**
 * Footer Variant Components
 * Unique footer designs for different page types
 */

'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Logo } from '@/components/ui/logo';

/**
 * Home Page Footer - With featured services and stats
 */
export function HomeFooter() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-20 text-white">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* CTA Section with gradient background */}
        <div className="mb-16 rounded-2xl bg-white/10 p-12 text-center backdrop-blur-sm">
          <h3 className="mb-4 font-display text-4xl font-bold">
            {t('partnership.heading')}
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            {t('partnership.text')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#FDB927] px-8 py-4 text-base font-semibold text-primary-dark transition-all hover:scale-105 hover:bg-white"
          >
            {t('partnership.cta')}
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand with enhanced styling */}
          <div>
            <div className="mb-6">
              <Logo variant="light" size="lg" showTagline={true} />
            </div>
            <p className="text-sm leading-relaxed text-white/80">{t('tagline')}</p>
            <div className="mt-6 flex gap-4">
              {/* Social media icons placeholder */}
              <a href="#" className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-[#FDB927]">Navigation</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/80 transition-colors hover:text-[#FDB927]">{nav('home')}</Link></li>
              <li><Link href="/services/employers" className="text-white/80 transition-colors hover:text-[#FDB927]">{nav('servicesEmployers')}</Link></li>
              <li><Link href="/services/talents" className="text-white/80 transition-colors hover:text-[#FDB927]">{nav('servicesTalents')}</Link></li>
              <li><Link href="/about" className="text-white/80 transition-colors hover:text-[#FDB927]">{nav('about')}</Link></li>
              <li><Link href="/contact" className="text-white/80 transition-colors hover:text-[#FDB927]">{nav('contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-[#FDB927]">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-white/80 transition-colors hover:text-[#FDB927]">{t('privacy')}</Link></li>
              <li><Link href="/imprint" className="text-white/80 transition-colors hover:text-[#FDB927]">{t('imprint')}</Link></li>
              <li><Link href="/terms" className="text-white/80 transition-colors hover:text-[#FDB927]">{t('terms')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-[#FDB927]">{nav('contact')}</h4>
            <address className="not-italic space-y-2 text-sm text-white/80">
              <p className="font-medium text-white">talentsCARE GmbH</p>
              <p>Musterstrasse 123</p>
              <p>12345 Berlin</p>
              <p className="mt-4">
                <a href="mailto:info@talentscare.de" className="transition-colors hover:text-[#FDB927]">
                  info@talentscare.de
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          &copy; {currentYear} {t('company')}. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}

/**
 * Services Footer - With service highlights
 */
export function ServicesFooter({ type }: { type: 'employers' | 'talents' }) {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Split CTA - Two columns */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* Left: CTA for current service */}
          <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-transparent p-8 backdrop-blur-sm">
            <h3 className="mb-4 font-display text-3xl font-bold">
              {t(`services.${type}.ctaHeading`)}
            </h3>
            <p className="mb-6 text-white/80">
              {t(`services.${type}.ctaText`)}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FDB927] px-6 py-3 font-semibold text-primary-dark transition-all hover:bg-white"
            >
              {t('partnership.cta')}
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Cross-sell to other service */}
          <div className="rounded-2xl border-2 border-white/10 p-8">
            <h3 className="mb-4 font-display text-2xl font-bold">
              {t(`services.${type === 'employers' ? 'talents' : 'employers'}.crossSellHeading`)}
            </h3>
            <p className="mb-6 text-sm text-white/70">
              {t(`services.${type === 'employers' ? 'talents' : 'employers'}.crossSellText`)}
            </p>
            <Link
              href={type === 'employers' ? '/services/talents' : '/services/employers'}
              className="inline-flex items-center gap-2 text-[#FDB927] transition-colors hover:text-white"
            >
              {t('services.learnMore')}
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Compact footer links */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <Logo variant="light" size="sm" showTagline={false} />
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#FDB927]">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/70 hover:text-white">{nav('home')}</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white">{nav('about')}</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white">{nav('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-[#FDB927]">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-white/70 hover:text-white">{t('privacy')}</Link></li>
              <li><Link href="/imprint" className="text-white/70 hover:text-white">{t('imprint')}</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white">{t('terms')}</Link></li>
            </ul>
          </div>
          <div className="text-sm text-white/60">
            &copy; {currentYear} {t('company')}
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * Contact Footer - Minimal, no duplicate CTA
 */
export function ContactFooter() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-8">
            <Logo variant="light" size="sm" showTagline={false} />
            <div className="hidden h-8 w-px bg-white/20 md:block" />
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="text-white/70 hover:text-white">{nav('home')}</Link>
              <Link href="/about" className="text-white/70 hover:text-white">{nav('about')}</Link>
              <Link href="/privacy" className="text-white/70 hover:text-white">{t('privacy')}</Link>
              <Link href="/imprint" className="text-white/70 hover:text-white">{t('imprint')}</Link>
            </nav>
          </div>
          <div className="text-sm text-white/60">
            &copy; {currentYear} {t('company')}
          </div>
        </div>
      </div>
    </footer>
  );
}

/**
 * About/Team Footer - With team highlight
 */
export function AboutFooter() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Team CTA with image */}
        <div className="mb-16 overflow-hidden rounded-3xl bg-primary-dark text-white shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12">
              <h3 className="mb-4 font-display text-4xl font-bold">
                Werden Sie Teil unseres Teams
              </h3>
              <p className="mb-8 text-lg text-white/80">
                Wir suchen talentierte Menschen, die unsere Mission teilen
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FDB927] px-8 py-4 font-semibold text-primary-dark transition-all hover:bg-white"
              >
                Karriere bei uns
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative hidden bg-gradient-to-br from-accent/20 to-transparent lg:block">
              {/* Decorative pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-64 rounded-full bg-[#FDB927]/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Standard footer links */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <Logo variant="dark" size="md" showTagline={true} />
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-primary">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/employers" className="text-gray-600 hover:text-primary">{nav('servicesEmployers')}</Link></li>
              <li><Link href="/services/talents" className="text-gray-600 hover:text-primary">{nav('servicesTalents')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-primary">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-primary">{nav('about')}</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-primary">{nav('team')}</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-primary">{nav('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-primary">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary">{t('privacy')}</Link></li>
              <li><Link href="/imprint" className="text-gray-600 hover:text-primary">{t('imprint')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          &copy; {currentYear} {t('company')}. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}

/**
 * Blog Footer - With newsletter signup
 */
export function BlogFooter() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Newsletter section */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-primary to-accent p-12 text-center text-white">
          <h3 className="mb-4 font-display text-3xl font-bold">
            Bleiben Sie informiert
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-white/90">
            Erhalten Sie regelmäßig Updates zu HR-Trends, Integration und unseren Events
          </p>
          <form className="mx-auto flex max-w-md gap-4">
            <input
              type="email"
              placeholder="Ihre E-Mail Adresse"
              className="flex-1 rounded-full px-6 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="rounded-full bg-[#FDB927] px-8 py-3 font-semibold text-primary-dark transition-all hover:bg-white"
            >
              Abonnieren
            </button>
          </form>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Logo variant="dark" size="md" showTagline={true} />
            <p className="mt-4 text-sm text-gray-600">{t('tagline')}</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-primary">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-primary">{nav('home')}</Link></li>
              <li><Link href="/services/employers" className="text-gray-600 hover:text-primary">{nav('servicesEmployers')}</Link></li>
              <li><Link href="/services/talents" className="text-gray-600 hover:text-primary">{nav('servicesTalents')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-primary">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-600 hover:text-primary">{t('privacy')}</Link></li>
              <li><Link href="/imprint" className="text-gray-600 hover:text-primary">{t('imprint')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          &copy; {currentYear} {t('company')}. {t('rights')}.
        </div>
      </div>
    </footer>
  );
}

/**
 * Legal Footer - Minimal and simple
 */
export function LegalFooter() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Logo variant="dark" size="sm" showTagline={false} />
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">{nav('home')}</Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary">{t('privacy')}</Link>
            <Link href="/imprint" className="text-gray-600 hover:text-primary">{t('imprint')}</Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary">{t('terms')}</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">{nav('contact')}</Link>
          </nav>
          <div className="text-sm text-gray-600">
            &copy; {currentYear} {t('company')}
          </div>
        </div>
      </div>
    </footer>
  );
}
