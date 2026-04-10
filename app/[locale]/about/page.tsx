/**
 * About Page
 * Company mission, vision, and approach
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
      title: t('values.empathy.title'),
      description: t('values.empathy.description'),
    },
    {
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
    },
    {
      title: t('values.integrity.title'),
      description: t('values.integrity.description'),
    },
    {
      title: t('values.diversity.title'),
      description: t('values.diversity.description'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90">{t('hero.description')}</p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 text-center">
              {t('mission.headline')}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t('mission.paragraph1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('mission.paragraph2')}
            </p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              {t('valuesHeadline')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 text-center">
              {t('approach.headline')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('approach.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('approach.step1.title')}
                </h3>
                <p className="text-gray-600">{t('approach.step1.description')}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('approach.step2.title')}
                </h3>
                <p className="text-gray-600">{t('approach.step2.description')}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('approach.step3.title')}
                </h3>
                <p className="text-gray-600">{t('approach.step3.description')}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4">
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
                className="border-white text-white hover:bg-white hover:text-primary"
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
