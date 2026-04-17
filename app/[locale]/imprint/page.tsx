/**
 * Imprint Page (Impressum)
 * Legal company information required in Germany
 */

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ImprintPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('legal.imprint');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            {t('headline')}
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container size="narrow">
          <div className="space-y-8">
            {/* Company Info */}
            <div>
              <h2 className="text-xl font-display font-bold text-primary mb-3">
                {t('company.title')}
              </h2>
              <p className="text-gray-600">
                talentsCARE GmbH
                <br />
                Musterstrasse 123
                <br />
                12345 Berlin
                <br />
                Deutschland
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-display font-bold text-primary mb-3">
                {t('contact.title')}
              </h2>
              <p className="text-gray-600">
                {t('contact.phone')}: +49 (0) 30 123 456 7
                <br />
                {t('contact.email')}:{' '}
                <a href="mailto:info@talentscare.de" className="text-primary hover:underline">
                  info@talentscare.de
                </a>
              </p>
            </div>

            {/* Management */}
            <div>
              <h2 className="text-xl font-display font-bold text-primary mb-3">
                {t('management.title')}
              </h2>
              <p className="text-gray-600">{t('management.names')}</p>
            </div>

            {/* Register */}
            <div>
              <h2 className="text-xl font-display font-bold text-primary mb-3">
                {t('register.title')}
              </h2>
              <p className="text-gray-600">
                {t('register.court')}: Amtsgericht Berlin-Charlottenburg
                <br />
                {t('register.number')}: HRB 123456 B
                <br />
                {t('register.vat')}: DE123456789
              </p>
            </div>

            {/* Responsible */}
            <div>
              <h2 className="text-xl font-display font-bold text-primary mb-3">
                {t('responsible.title')}
              </h2>
              <p className="text-gray-600">{t('responsible.name')}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
