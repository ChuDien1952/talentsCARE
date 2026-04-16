/**
 * About Page
 * Detailed company information with history, philosophy, partners, and awards
 */

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  const values = [
    {
      title: t('values.sustainability.title'),
      description: t('values.sustainability.description'),
    },
    {
      title: t('values.responsibility.title'),
      description: t('values.responsibility.description'),
    },
    {
      title: t('values.partnership.title'),
      description: t('values.partnership.description'),
    },
    {
      title: t('values.integration.title'),
      description: t('values.integration.description'),
    },
    {
      title: t('values.quality.title'),
      description: t('values.quality.description'),
    },
  ];

  const awards = [
    {
      title: t('awards.items.0.title'),
      description: t('awards.items.0.description'),
    },
    {
      title: t('awards.items.1.title'),
      description: t('awards.items.1.description'),
    },
    {
      title: t('awards.items.2.title'),
      description: t('awards.items.2.description'),
    },
    {
      title: t('awards.items.3.title'),
      description: t('awards.items.3.description'),
    },
    {
      title: t('awards.items.4.title'),
      description: t('awards.items.4.description'),
    },
    {
      title: t('awards.items.5.title'),
      description: t('awards.items.5.description'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-h1 font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              {t('hero.description')}
            </p>
            <p className="text-2xl font-semibold text-[#FDB927] mt-8">
              {t('hero.tagline')}
            </p>
          </div>
        </Container>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-h2 font-bold text-primary mb-8 text-center">
              {t('history.headline')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('history.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('history.paragraph2')}
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-h2 font-bold text-primary mb-8 text-center">
              {t('philosophy.headline')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('philosophy.paragraph1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('philosophy.paragraph2')}
            </p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-h2 font-bold text-primary mb-4">
              {t('valuesHeadline')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-display font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-h2 font-bold text-primary mb-4 text-center">
              {t('partners.headline')}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center">
              {t('partners.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Authorities */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {t('partners.authorities.title')}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {t.raw('partners.authorities.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FDB927] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chambers */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {t('partners.chambers.title')}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {t.raw('partners.chambers.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FDB927] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Others */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {t('partners.others.title')}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {t.raw('partners.others.items').map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#FDB927] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-h2 font-bold text-primary mb-12 text-center">
              {t('awards.headline')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-[#FDB927]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {award.title}
                      </h3>
                      <p className="text-sm text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-h2 font-bold text-primary mb-6 text-center">
              {t('approach.headline')}
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed">
              {t('approach.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  {t('approach.step1.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">{t('approach.step1.description')}</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#FDB927] text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  {t('approach.step2.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">{t('approach.step2.description')}</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-xl mb-3">
                  {t('approach.step3.title')}
                </h3>
                <p className="text-gray-700 leading-relaxed">{t('approach.step3.description')}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-dark text-white py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-h2 font-bold mb-4">
              {t('cta.headline')}
            </h2>
            <p className="text-lg text-white/90 mb-8">{t('cta.description')}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">{t('cta.button')}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-dark"
                asChild
              >
                <Link href="/team">{t('cta.teamButton')}</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
