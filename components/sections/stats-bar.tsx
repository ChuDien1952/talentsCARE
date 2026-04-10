/**
 * Stats Bar Component
 * Animated statistics display
 */

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';

export function StatsBar() {
  const t = useTranslations('home.stats');

  const stats = [
    { label: t('clients'), value: t('clientsCount') },
    { label: t('talents'), value: t('talentsCount') },
    { label: t('years'), value: t('yearsCount') },
    { label: t('countries'), value: t('countriesCount') },
  ];

  return (
    <section className="bg-accent py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
