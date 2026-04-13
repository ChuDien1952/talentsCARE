/**
 * Footer Component
 * Multi-column footer with navigation and contact info
 */

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Link } from '@/lib/i18n/navigation';

export function Footer() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Partnership CTA */}
        <div className="mb-16 border-b border-white/10 pb-16 text-center">
          <h3 className="mb-6 font-display text-h3">
            {t('partnership.heading')}
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            {t('partnership.text')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border-2 border-white bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:bg-white hover:text-primary-dark"
          >
            {t('partnership.cta')}
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold">
              {t('company')}
            </h3>
            <p className="mb-4 text-white/80">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/employers"
                  className="text-white/80 hover:text-white"
                >
                  {nav('servicesEmployers')}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/talents"
                  className="text-white/80 hover:text-white"
                >
                  {nav('servicesTalents')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  {nav('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-white"
                >
                  {nav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/80 hover:text-white"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="text-white/80 hover:text-white"
                >
                  {t('imprint')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{nav('contact')}</h4>
            <address className="not-italic text-white/80 space-y-2">
              <p>talentsCARE GmbH</p>
              <p>Musterstrasse 123</p>
              <p>12345 Berlin</p>
              <p className="mt-4">
                <a
                  href="mailto:info@talentscare.de"
                  className="hover:text-white"
                >
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
