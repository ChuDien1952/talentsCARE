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
    <footer className="bg-primary text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              {t('company')}
            </h3>
            <p className="text-white/80 mb-4">{t('tagline')}</p>
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
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          &copy; {currentYear} {t('company')}. {t('rights')}.
        </div>
      </Container>
    </footer>
  );
}
