/**
 * Services Preview Component
 * Overview of main service categories on home page
 */

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { ServiceCard } from './service-card';

export function ServicesPreview() {
  const t = useTranslations('home.services');

  const services = [
    {
      title: t('employers.title'),
      description: t('employers.description'),
      icon: 'users',
      href: '/services/employers',
    },
    {
      title: t('talents.title'),
      description: t('talents.description'),
      icon: 'academic',
      href: '/services/talents',
    },
    {
      title: t('consulting.title'),
      description: t('consulting.description'),
      icon: 'chat',
      href: '/services/employers',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            {t('headline')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subheadline')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.href} {...service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
