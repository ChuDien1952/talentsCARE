/**
 * Contact Page
 * Contact form and company contact information
 */

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/components/sections/contact-form';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white pt-32 pb-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90">{t('hero.description')}</p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-6">
                {t('formHeadline')}
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-6">
                {t('infoHeadline')}
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {t('info.address')}
                  </h3>
                  <address className="not-italic text-gray-600">
                    <p>talentsCARE GmbH</p>
                    <p>Musterstrasse 123</p>
                    <p>12345 Berlin</p>
                    <p>Deutschland</p>
                  </address>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    {t('info.email')}
                  </h3>
                  <a
                    href="mailto:info@talentscare.de"
                    className="text-primary hover:underline"
                  >
                    info@talentscare.de
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {t('info.phone')}
                  </h3>
                  <a href="tel:+49301234567" className="text-primary hover:underline">
                    +49 (0) 30 123 456 7
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {t('info.hours')}
                  </h3>
                  <p className="text-gray-600">
                    {t('info.hoursWeekday')}
                    <br />
                    {t('info.hoursWeekend')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
