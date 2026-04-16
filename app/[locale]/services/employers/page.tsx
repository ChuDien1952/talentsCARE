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
      <section className="bg-primary-dark text-white py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-h1 font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90 mb-4 leading-relaxed">
              {t('hero.description')}
            </p>
            <p className="text-2xl font-semibold text-[#FDB927] mt-8 mb-8">
              Recruiting ist nur der erste Schritt – echte Fachkräftegewinnung bedeutet nachhaltige Integration
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
              Warum talentsCARE?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Wir unterstützen Unternehmen dabei, internationale Fachkräfte nicht nur zu gewinnen, sondern langfristig zu halten. Mit praxisnahen Onboarding-Programmen, interkulturellem Training und bundesweit flächendeckendem Mentoring schaffen wir die Basis für nachhaltige Integration, stabile Teams und langfristigen Unternehmenserfolg.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Der Fachkräftemangel stellt viele Unternehmen vor große Herausforderungen – besonders bei nachhaltiger Integration und langfristiger Mitarbeiterbindung.
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
                Recruiting-Beratung
              </h3>
              <p className="text-gray-600 mb-4">
                Zielgruppe: Unternehmen mit offenen Stellen für Fachkräfte und Azubis aus Drittstaaten
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wir finden Fachkräfte und Azubis aus Drittstaaten, die fachlich und menschlich zu Ihrem Unternehmen passen. Unsere Beratung umfasst Bedarfsanalyse, Stellenprofil-Erstellung und Matching mit vorqualifizierten Kandidaten aus dem VIETconsult-Netzwerk.
              </p>
            </div>

            {/* Onboarding Programme */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Onboarding-Programme
              </h3>
              <p className="text-gray-600 mb-4">
                Zielgruppe: Neue internationale Mitarbeitende, deren Teams und Führungskräfte
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wir gestalten den Start systematisch – für Talente, Teams und Führungskräfte. Ein strukturiertes Onboarding reduziert die Einarbeitungszeit und erhöht die Bindung von Anfang an.
              </p>
            </div>

            {/* Interkulturelles Training */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Interkulturelles Training
              </h3>
              <p className="text-gray-600 mb-4">
                Zielgruppe: Teams, Abteilungen und Führungskräfte, die mit internationalen Kollegen arbeiten
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wir schulen Teams und Führungskräfte, um Zusammenarbeit und Kommunikation zu verbessern. Aus Vielfalt wird Stärke – Missverständnisse werden vermieden, Zusammenarbeit gestärkt.
              </p>
            </div>

            {/* Mentoring Programme */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Mentoring-Programme
              </h3>
              <p className="text-gray-600 mb-4">
                Zielgruppe: Unternehmen, die ein strukturiertes Mentoring-System aufbauen möchten
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ein bewährtes Instrument für nachhaltige Integration. Mentoring schafft Vertrauen und trägt zur langfristigen Fachkräftebindung bei.
              </p>
            </div>

            {/* Fachkräftebindung */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Fachkräftebindung
              </h3>
              <p className="text-gray-600 mb-4">
                Zielgruppe: Unternehmen mit bestehenden internationalen Mitarbeitenden
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wir entwickeln Strategien, damit Talente nicht nur bleiben, sondern sich fachlich und persönlich weiterentwickeln.
              </p>
            </div>

            {/* Starke Kooperation */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                Starke Kooperation
              </h3>
              <p className="text-gray-600 mb-4">
                Zielgruppe: Behörden, Kammern, Bildungsträger und Unternehmen
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wir übernehmen die Abstimmung mit Behörden, Kammern und Institutionen und gestalten gemeinsam praxisnahe Formate.
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
