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
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-accent text-white pt-32 pb-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-[#FDB927]/30 rounded-lg rotate-45" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white/20 rounded-full" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FDB927] mb-8 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-[#FDB927] mt-8 mb-10">
              {t('tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="shadow-xl hover:shadow-2xl transition-shadow">
                <Link href="/contact" className="min-w-[200px]">
                  {t('hero.cta')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/about" className="min-w-[200px]">
                  Tìm hiểu thêm
                </Link>
              </Button>
            </div>
          </div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Nhân tài</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FDB927] mb-2">95%</div>
              <div className="text-gray-600">Thành công</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
              <div className="text-gray-600">Quốc gia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#FDB927] mb-2">10+</div>
              <div className="text-gray-600">Năm kinh nghiệm</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Về Chúng Tôi
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('intro.headline')}
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                {t('intro.description')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Dịch Vụ
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
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

      {/* Integration Phases - Timeline Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Lộ Trình
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                {t('phasesHeadline')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                6 giai đoạn đồng hành cùng bạn
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[#FDB927] to-primary" />

              <div className="space-y-8">
                {/* Phase 1 */}
                <div className="relative pl-20 md:pl-24">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg ring-4 ring-white">
                    1
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow border-l-4 border-primary">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                      {t('phases.phase1.title')}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{t('phases.phase1.timeline')}</p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('phases.phase1.description')}
                    </p>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="relative pl-20 md:pl-24">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FDB927] text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg ring-4 ring-white">
                    2
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow border-l-4 border-[#FDB927]">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                      {t('phases.phase2.title')}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{t('phases.phase2.timeline')}</p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('phases.phase2.description')}
                    </p>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="relative pl-20 md:pl-24">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg ring-4 ring-white">
                    3
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow border-l-4 border-primary">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                      {t('phases.phase3.title')}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{t('phases.phase3.timeline')}</p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {t('phases.phase3.description')}
                    </p>
                  </div>
                </div>

                {/* Phase 4 */}
                <div className="relative pl-20 md:pl-24">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FDB927] text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg ring-4 ring-white">
                    4
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow border-l-4 border-[#FDB927]">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                      {t('phases.phase4.title')}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{t('phases.phase4.timeline')}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                      {t('phases.phase4.description')}
                    </p>
                    <ul className="space-y-3">
                      {phase4Items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-[#FDB927] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Phase 5 */}
                <div className="relative pl-20 md:pl-24">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg ring-4 ring-white">
                    5
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow border-l-4 border-primary">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                      {t('phases.phase5.title')}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{t('phases.phase5.timeline')}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                      {t('phases.phase5.description')}
                    </p>
                    <ul className="space-y-3">
                      {phase5Items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Phase 6 */}
                <div className="relative pl-20 md:pl-24">
                  <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FDB927] text-white flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg ring-4 ring-white">
                    6
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-shadow border-l-4 border-[#FDB927]">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                      {t('phases.phase6.title')}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{t('phases.phase6.timeline')}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                      {t('phases.phase6.description')}
                    </p>
                    <ul className="space-y-3">
                      {phase6Items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-6 h-6 text-[#FDB927] mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-lg">{item}</span>
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
      <section className="relative overflow-hidden bg-gradient-to-r from-accent via-primary to-accent text-white py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('cta.headline')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="shadow-2xl hover:shadow-3xl transition-shadow min-w-[200px]">
                <Link href="/contact">{t('cta.button')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white/10 min-w-[200px]">
                <Link href="/team">Gặp đội ngũ</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
