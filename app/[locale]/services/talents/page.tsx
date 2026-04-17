/**
 * Services for Talents Page - Redesigned
 * Enhanced design with parallax, animations, and unique footer
 */

'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { ServiceCard } from '@/components/sections/service-card';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';
import { SuccessStories } from '@/components/sections/success-stories';
import { HowItWorks } from '@/components/sections/how-it-works';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { FAQSection } from '@/components/sections/faq-section';
import { TalentsFooter } from '@/components/sections/talents-footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function TalentsPage() {
  const t = useTranslations('services.talents');
  const heroRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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

  const phase4Items = t.raw('phases.phase4.items') as string[];
  const phase5Items = t.raw('phases.phase5.items') as string[];
  const phase6Items = t.raw('phases.phase6.items') as string[];

  return (
    <>
      {/* Enhanced Hero Section with Parallax */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary text-white pt-32 pb-40 min-h-[90vh] flex items-center"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          {mounted && (
            <motion.div
              style={{ y }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-2xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
            </motion.div>
          )}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Decorative Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute top-40 right-20 w-16 h-16 border-2 border-[#FDB927]/30 rounded-lg"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white/20 rounded-full"
          />
        </div>

        <Container className="relative z-10">
          {mounted && (
            <motion.div
              style={{ opacity }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Icon Badge with Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FDB927] mb-8 shadow-2xl"
              >
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>

              {/* Headline with Stagger Animation */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {t('hero.headline')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto"
              >
                {t('hero.description')}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl font-semibold text-[#FDB927] mt-8 mb-10"
              >
                {t('tagline')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button size="lg" variant="secondary" asChild className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <Link href="/contact" className="min-w-[200px]">
                    {t('hero.cta')}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all">
                  <Link href="/about" className="min-w-[200px]">
                    Tìm hiểu thêm
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-sm">Cuộn xuống</span>
            <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {[
              { count: '500+', label: 'Nhân tài' },
              { count: '95%', label: 'Thành công' },
              { count: '30+', label: 'Quốc gia' },
              { count: '10+', label: 'Năm kinh nghiệm' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group-hover:scale-105">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${index % 2 === 0 ? 'text-primary' : 'text-[#FDB927]'}`}>
                    {stat.count}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Về Chúng Tôi
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('intro.headline')}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                {t('intro.description')}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Dịch Vụ
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              {t('servicesHeadline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('servicesSubheadline')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works Section - NEW */}
      <HowItWorks />

      {/* Why Choose Us Section - NEW */}
      <WhyChooseUs />

      {/* Success Stories Section - NEW */}
      <SuccessStories />

      {/* Integration Phases - Timeline Style */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Lộ Trình
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
                {t('phasesHeadline')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                6 giai đoạn đồng hành cùng bạn
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-[#FDB927] to-primary" />

              <div className="space-y-8">
                {/* Phase 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative pl-20 md:pl-24"
                >
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
                </motion.div>

                {/* Phase 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative pl-20 md:pl-24"
                >
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
                </motion.div>

                {/* Phase 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative pl-20 md:pl-24"
                >
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
                </motion.div>

                {/* Phase 4 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative pl-20 md:pl-24"
                >
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
                </motion.div>

                {/* Phase 5 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative pl-20 md:pl-24"
                >
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
                </motion.div>

                {/* Phase 6 */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative pl-20 md:pl-24"
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section - NEW */}
      <FAQSection />

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-accent via-primary to-accent text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('cta.headline')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" asChild className="shadow-2xl hover:shadow-3xl hover:scale-105 transition-all min-w-[200px]">
                <Link href="/contact">{t('cta.button')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all min-w-[200px]">
                <Link href="/team">Gặp đội ngũ</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Unique Footer for Talents Page - NEW */}
      <TalentsFooter />
    </>
  );
}
