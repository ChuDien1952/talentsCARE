/**
 * Services for Talents Page
 * Showcases services offered to international professionals
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

export default async function TalentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('services.talents');

  const services = [
    {
      title: t('careerCoaching.title'),
      description: t('careerCoaching.description'),
      icon: 'chat',
      href: '/contact',
    },
    {
      title: t('jobSearch.title'),
      description: t('jobSearch.description'),
      icon: 'users',
      href: '/contact',
    },
    {
      title: t('language.title'),
      description: t('language.description'),
      icon: 'microphone',
      href: '/contact',
    },
    {
      title: t('cultural.title'),
      description: t('cultural.description'),
      icon: 'heart',
      href: '/contact',
    },
    {
      title: t('networking.title'),
      description: t('networking.description'),
      icon: 'users',
      href: '/contact',
    },
    {
      title: t('mentoring.title'),
      description: t('mentoring.description'),
      icon: 'academic',
      href: '/contact',
    },
  ];

  // Get phase items as arrays
  const phase4Items = t.raw('phases.phase4.items') as string[];
  const phase5Items = t.raw('phases.phase5.items') as string[];
  const phase6Items = t.raw('phases.phase6.items') as string[];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent text-white pt-32 pb-24">
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
                {t('intro.description')}
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

      {/* Integration Phases */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-h2 font-bold text-primary mb-12 text-center">
              {t('phasesHeadline')}
            </h2>

            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      {t('phases.phase1.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">{t('phases.phase1.timeline')}</p>
                    <p className="text-gray-700 leading-relaxed">
                      {t('phases.phase1.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-8 border-l-4 border-[#FDB927]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDB927] text-white flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      {t('phases.phase2.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">{t('phases.phase2.timeline')}</p>
                    <p className="text-gray-700 leading-relaxed">
                      {t('phases.phase2.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      {t('phases.phase3.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">{t('phases.phase3.timeline')}</p>
                    <p className="text-gray-700 leading-relaxed">
                      {t('phases.phase3.description')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="bg-gradient-to-r from-yellow-50 to-white rounded-lg p-8 border-l-4 border-[#FDB927]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDB927] text-white flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      {t('phases.phase4.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">{t('phases.phase4.timeline')}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('phases.phase4.description')}
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      {phase4Items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#FDB927] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 5 */}
              <div className="bg-gradient-to-r from-pink-50 to-white rounded-lg p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      {t('phases.phase5.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">{t('phases.phase5.timeline')}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('phases.phase5.description')}
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      {phase5Items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#FDB927] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 6 */}
              <div className="bg-gradient-to-r from-indigo-50 to-white rounded-lg p-8 border-l-4 border-[#FDB927]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDB927] text-white flex items-center justify-center text-xl font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-2">
                      {t('phases.phase6.title')}
                    </h3>
                    <p className="text-gray-600 mb-4">{t('phases.phase6.timeline')}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {t('phases.phase6.description')}
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      {phase6Items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#FDB927] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-white py-16">
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
