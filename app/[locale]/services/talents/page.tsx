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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-accent text-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-h1 font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              {t('hero.description')}
            </p>
            <p className="text-2xl font-semibold text-[#FDB927] mt-8 mb-8">
              Unser Ziel: Sie sollen sich nicht nur fachlich, sondern auch menschlich sicher, verstanden und willkommen fühlen
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
              Ihre Reise nach Deutschland
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Wir begleiten internationale Fachkräfte auf ihrem Weg nach Deutschland – von der Vorbereitung im Heimatland bis zur erfolgreichen Integration im Beruf und Alltag. Mit praxisnahen Trainings, individueller Betreuung und bundesweitem Mentoring schaffen wir die Grundlage für einen sicheren Start, persönliche Entwicklung und langfristigen Erfolg.
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
              Ihre Integration in 6 Phasen
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
                      Vorbereitung im Heimatland
                    </h3>
                    <p className="text-gray-600 mb-4">Zeitraum: 3–6 Monate vor Einreise</p>
                    <p className="text-gray-700 leading-relaxed">
                      Gemeinsam mit unseren Kooperationspartnern vor Ort (VIETconsult / HDEU Vietnam) bereiten wir Talente optimal auf ihren Start in Deutschland vor.
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
                      Unterstützung beim Start in Deutschland
                    </h3>
                    <p className="text-gray-600 mb-4">Zeitraum: Erste 1–3 Monate nach Ankunft</p>
                    <p className="text-gray-700 leading-relaxed">
                      Wir bieten keine bloße Begleitung, sondern echte Unterstützung beim Ankommen.
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
                      Berufliche Begleitung
                    </h3>
                    <p className="text-gray-600 mb-4">Zeitraum: Monat 1–12 im Unternehmen</p>
                    <p className="text-gray-700 leading-relaxed">
                      Viele Unternehmen beschränken sich auf fachliche Einarbeitung – wir gehen bewusst weiter.
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
                      Persönliche Entwicklung
                    </h3>
                    <p className="text-gray-600 mb-4">Zeitraum: Ab Monat 6, fortlaufend</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Wir fördern Talente als ganze Menschen – nicht nur als Fachkräfte.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Aufbau beruflicher Netzwerke: Fachveranstaltungen, Branchentreffen, Alumni-Netzwerk</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Aufbau privater Netzwerke: Sportvereine, Kulturgruppen, Nachbarschaftsinitiativen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Coaching zur Selbstständigkeit: Selbstvertrauen, Eigenverantwortung, Entscheidungsfähigkeit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Sprachliche Weiterentwicklung: Über B2 hinaus, Fachsprache, Dialekte verstehen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Karriereplanung: Welche nächsten Schritte sind möglich? Weiterbildung, Aufstieg, Spezialisierung</span>
                      </li>
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
                      Mentoring
                    </h3>
                    <p className="text-gray-600 mb-4">Zeitraum: 12–24 Monate, erweiterbar</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Unsere Mentoring-Programme begleiten Talente individuell über den gesamten Integrationsprozess hinweg.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Persönliche Begleitung durch erfahrene Mentoren (1:1)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Orientierung im Berufs- und Alltagsleben</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Unterstützung beim Aufbau von beruflichen und sozialen Netzwerken</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Regelmäßige Treffen (mindestens 2x monatlich)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Gemeinsame Zielvereinbarungen und Fortschrittskontrolle</span>
                      </li>
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
                      Digitale Unterstützung & Lernplattformen
                    </h3>
                    <p className="text-gray-600 mb-4">Zeitraum: Fortlaufend</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Wir begleiten Talente auch digital, um kontinuierliches Lernen und Vernetzung zu ermöglichen.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Online-Lernplattformen: Berufliche und sprachliche Weiterbildung (asynchron)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Virtuelle Netzwerke: Austausch mit anderen Talenten deutschlandweit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Digitale Alltagshilfen: Apps und Tools für Behörden, Wohnung, Gesundheit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Live-Webinare: Monatliche Themenabende zu relevanten Integrationsfragen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#FDB927] mr-2">•</span>
                        <span>Erfolgsgeschichten: Plattform zum Teilen von Erfahrungen und Inspiration</span>
                      </li>
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
