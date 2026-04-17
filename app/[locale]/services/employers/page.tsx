/**
 * Services for Employers Page
 * Showcases services offered to companies hiring international talent
 */

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { ServiceCard } from '@/components/sections/service-card';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function EmployersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('services.employers');

  const services = [
    {
      title: t('recruitment.title'),
      description: t('recruitment.description'),
      icon: 'users',
      href: '/contact',
    },
    {
      title: t('onboarding.title'),
      description: t('onboarding.description'),
      icon: 'presentation',
      href: '/contact',
    },
    {
      title: t('integration.title'),
      description: t('integration.description'),
      icon: 'heart',
      href: '/contact',
    },
    {
      title: t('training.title'),
      description: t('training.description'),
      icon: 'academic',
      href: '/contact',
    },
    {
      title: t('compliance.title'),
      description: t('compliance.description'),
      icon: 'calendar',
      href: '/contact',
    },
    {
      title: t('consulting.title'),
      description: t('consulting.description'),
      icon: 'chat',
      href: '/contact',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-dark text-white pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-h1 font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              {t('hero.description')}
            </p>
            <p className="text-2xl font-semibold text-[#FDB927] mt-8 mb-8">
              {t('tagline')}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">{t('hero.cta')}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-h2 font-bold text-primary mb-8 text-center">
              {t('intro.headline')}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('intro.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('intro.paragraph2')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              {t('servicesHeadline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesSubheadline')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Recruiting Beratung */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t('detailedServices.recruiting.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('detailedServices.recruiting.audience')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('detailedServices.recruiting.description')}
              </p>
            </div>

            {/* Onboarding Programme */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t('detailedServices.onboarding.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('detailedServices.onboarding.audience')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('detailedServices.onboarding.description')}
              </p>
            </div>

            {/* Interkulturelles Training */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t('detailedServices.training.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('detailedServices.training.audience')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('detailedServices.training.description')}
              </p>
            </div>

            {/* Mentoring Programme */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t('detailedServices.mentoring.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('detailedServices.mentoring.audience')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('detailedServices.mentoring.description')}
              </p>
            </div>

            {/* Fachkräftebindung */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t('detailedServices.retention.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('detailedServices.retention.audience')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('detailedServices.retention.description')}
              </p>
            </div>

            {/* Starke Kooperation */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t('detailedServices.cooperation.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('detailedServices.cooperation.audience')}
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('detailedServices.cooperation.description')}
              </p>
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
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">{t('cta.button')}</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
