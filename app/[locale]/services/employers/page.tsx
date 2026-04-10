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
      <section className="bg-primary text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t('hero.description')}
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">{t('hero.cta')}</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
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

      {/* CTA Section */}
      <section className="bg-primary-50 py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              {t('cta.headline')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{t('cta.description')}</p>
            <Button size="lg" asChild>
              <Link href="/contact">{t('cta.button')}</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
