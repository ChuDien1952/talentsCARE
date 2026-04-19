/**
 * Services for Talents Page - Redesigned
 * Enhanced design with parallax, animations, and unique footer
 */

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { ServiceCard } from '@/components/sections/service-card';
import { TalentsHero } from '@/components/sections/talents-hero';
import { SuccessStories } from '@/components/sections/success-stories';
import { HowItWorks } from '@/components/sections/how-it-works';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { FAQSection } from '@/components/sections/faq-section';
import { TalentsCTA } from '@/components/sections/talents-cta';
import { TalentsFooter } from '@/components/sections/talents-footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function TalentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('services.talents');

  const services = [
    {
      title: t('careerCoaching.title'),
      description: t('careerCoaching.description'),
      icon: 'chat' as const,
      href: '/contact',
    },
    {
      title: t('jobSearch.title'),
      description: t('jobSearch.description'),
      icon: 'users' as const,
      href: '/contact',
    },
    {
      title: t('language.title'),
      description: t('language.description'),
      icon: 'microphone' as const,
      href: '/contact',
    },
    {
      title: t('cultural.title'),
      description: t('cultural.description'),
      icon: 'heart' as const,
      href: '/contact',
    },
    {
      title: t('networking.title'),
      description: t('networking.description'),
      icon: 'users' as const,
      href: '/contact',
    },
    {
      title: t('mentoring.title'),
      description: t('mentoring.description'),
      icon: 'academic' as const,
      href: '/contact',
    },
  ];

  const phase4Items = t.raw('phases.phase4.items') as string[];
  const phase5Items = t.raw('phases.phase5.items') as string[];
  const phase6Items = t.raw('phases.phase6.items') as string[];

  return (
    <>
      {/* Enhanced Hero Section with Parallax - CLIENT COMPONENT */}
      <TalentsHero
        headline={t('hero.headline')}
        description={t('hero.description')}
        tagline={t('tagline')}
        ctaButton={t('hero.cta')}
        learnMoreButton={t('hero.learnMore')}
      />

      {/* Success Stories Section - CLIENT COMPONENT */}
      <SuccessStories />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              {t('servicesLabel')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('servicesHeadline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section - CLIENT COMPONENT */}
      <HowItWorks />

      {/* Why Choose Us Section - CLIENT COMPONENT */}
      <WhyChooseUs />

      {/* Process Phases Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('phases.headline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('phases.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phase 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-primary/20 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  4
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {t('phases.phase4.title')}
                </h3>
              </div>
              <ul className="space-y-3">
                {phase4Items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 5 */}
            <div className="bg-gradient-to-br from-[#FDB927]/10 to-white border-2 border-[#FDB927]/30 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FDB927] to-[#FDB927]/80 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  5
                </div>
                <h3 className="text-2xl font-bold text-[#FDB927]">
                  {t('phases.phase5.title')}
                </h3>
              </div>
              <ul className="space-y-3">
                {phase5Items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-[#FDB927] flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 6 */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-primary/20 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                  6
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {t('phases.phase6.title')}
                </h3>
              </div>
              <ul className="space-y-3">
                {phase6Items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section - CLIENT COMPONENT */}
      <FAQSection />

      {/* CTA Section - CLIENT COMPONENT */}
      <TalentsCTA
        headline={t('cta.headline')}
        description={t('cta.description')}
        button={t('cta.button')}
        teamButton="Gặp đội ngũ"
      />

      {/* Unique Footer - CLIENT COMPONENT */}
      <TalentsFooter />
    </>
  );
}
