/**
 * Services Grid Component
 * Four-column service cards with icons and descriptions
 */

'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Service {
  iconPath: string;
  titleKey: string;
  descKey: string;
}

const services: Service[] = [
  {
    iconPath:
      'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    titleKey: 'services.recruitment.title',
    descKey: 'services.recruitment.desc',
  },
  {
    iconPath:
      'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    titleKey: 'services.training.title',
    descKey: 'services.training.desc',
  },
  {
    iconPath:
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    titleKey: 'services.integration.title',
    descKey: 'services.integration.desc',
  },
  {
    iconPath:
      'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    titleKey: 'services.consulting.title',
    descKey: 'services.consulting.desc',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ServicesGrid() {
  const t = useTranslations();

  return (
    <section className="py-100 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-display text-h2 text-dark">
            {t('services.heading')}
          </h2>
          <p className="mx-auto max-w-3xl text-body text-text-body">
            {t('services.subheading')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary/5 transition-all group-hover:bg-primary/10">
                  <svg
                    className="h-8 w-8 text-primary transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.iconPath}
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-lg font-medium text-dark">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-body">
                  {t(service.descKey)}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-12 rounded-full bg-primary/0 transition-all group-hover:w-24 group-hover:bg-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
