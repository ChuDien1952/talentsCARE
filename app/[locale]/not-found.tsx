/**
 * 404 Not Found Page
 * Locale-aware 404 error page
 */

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-primary-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-9xl font-display font-bold text-primary mb-4">
            404
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            {t('headline')}
          </h1>

          <p className="text-lg text-gray-600 mb-8">{t('description')}</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">{t('homeButton')}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">{t('contactButton')}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
