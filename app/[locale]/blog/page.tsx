/**
 * Blog Page
 * Articles and insights (placeholder for Phase 06)
 */

import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales } from '@/lib/i18n/config';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('blog');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90">{t('hero.description')}</p>
          </div>
        </Container>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-24 h-24 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>

            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              {t('comingSoon.headline')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('comingSoon.description')}
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">{t('comingSoon.cta')}</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
