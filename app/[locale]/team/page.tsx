/**
 * Team Page
 * Meet our experts and consultants
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

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('team');

  const teamMembers = [
    {
      name: t('member1.name'),
      role: t('member1.role'),
      bio: t('member1.bio'),
    },
    {
      name: t('member2.name'),
      role: t('member2.role'),
      bio: t('member2.bio'),
    },
    {
      name: t('member3.name'),
      role: t('member3.role'),
      bio: t('member3.bio'),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white pt-32 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#003366]/90 to-primary/95" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-xl text-white/90">{t('hero.description')}</p>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
              >
                {/* Placeholder avatar */}
                <div className="w-32 h-32 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-display font-bold text-primary text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-center text-accent font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
