/**
 * Terms of Service Page
 * Terms and conditions for using our services
 */

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('legal.terms');

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white pt-32 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#003366]/90 to-primary/95" />
        </div>

        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            {t('headline')}
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-8">{t('lastUpdated')}</p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">
              {t('section1.title')}
            </h2>
            <p className="text-gray-600 mb-6">{t('section1.content')}</p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">
              {t('section2.title')}
            </h2>
            <p className="text-gray-600 mb-6">{t('section2.content')}</p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">
              {t('section3.title')}
            </h2>
            <p className="text-gray-600 mb-6">{t('section3.content')}</p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">
              {t('section4.title')}
            </h2>
            <p className="text-gray-600 mb-6">{t('section4.content')}</p>

            <h2 className="text-2xl font-display font-bold text-primary mt-8 mb-4">
              {t('section5.title')}
            </h2>
            <p className="text-gray-600 mb-6">{t('section5.content')}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
