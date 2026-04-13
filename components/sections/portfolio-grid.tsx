/**
 * Portfolio Grid Component
 * Masonry-style grid with filterable case studies
 */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface CaseStudy {
  id: number;
  titleKey: string;
  categoryKey: string;
  category: string;
  image: string;
  tall?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    titleKey: 'portfolio.case1.title',
    categoryKey: 'portfolio.case1.category',
    category: 'recruitment',
    image: '/talentsCARE/images/cong-ty-phap-tuyen-dung-1.webp',
    tall: true,
  },
  {
    id: 2,
    titleKey: 'portfolio.case2.title',
    categoryKey: 'portfolio.case2.category',
    category: 'training',
    image: '/talentsCARE/images/Image-6.webp',
  },
  {
    id: 3,
    titleKey: 'portfolio.case3.title',
    categoryKey: 'portfolio.case3.category',
    category: 'integration',
    image: '/talentsCARE/images/cong-ty-phap-tuyen-dung-3.webp',
  },
  {
    id: 4,
    titleKey: 'portfolio.case4.title',
    categoryKey: 'portfolio.case4.category',
    category: 'recruitment',
    image: '/talentsCARE/images/Image-10.webp',
    tall: true,
  },
  {
    id: 5,
    titleKey: 'portfolio.case5.title',
    categoryKey: 'portfolio.case5.category',
    category: 'training',
    image: '/talentsCARE/images/cong-ty-phap-tuyen-dung-5.webp',
  },
  {
    id: 6,
    titleKey: 'portfolio.case6.title',
    categoryKey: 'portfolio.case6.category',
    category: 'integration',
    image: '/talentsCARE/images/Image-11.webp',
  },
];

const categories = [
  { value: 'all', labelKey: 'portfolio.filter.all' },
  { value: 'recruitment', labelKey: 'portfolio.filter.recruitment' },
  { value: 'training', labelKey: 'portfolio.filter.training' },
  { value: 'integration', labelKey: 'portfolio.filter.integration' },
];

export function PortfolioGrid() {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCases =
    activeFilter === 'all'
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeFilter);

  return (
    <section className="py-100 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 font-display text-h2 text-dark">
            {t('portfolio.heading')}
          </h2>
          <p className="mx-auto max-w-3xl text-body text-text-body">
            {t('portfolio.subheading')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                activeFilter === cat.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-text-body hover:bg-gray-200'
              }`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCases.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`group relative overflow-hidden rounded-lg ${
                study.tall ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative ${study.tall ? 'h-[600px]' : 'h-[280px]'}`}
              >
                <img
                  src={study.image}
                  alt={t(study.titleKey)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="mb-2 text-sm font-medium uppercase tracking-wider text-primary-hover">
                    {t(study.categoryKey)}
                  </span>
                  <h3 className="text-xl font-medium">{t(study.titleKey)}</h3>

                  {/* Arrow Icon */}
                  <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all group-hover:bg-primary">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="group inline-flex items-center gap-2 border-2 border-primary bg-transparent px-8 py-4 text-base font-medium text-primary transition-all hover:bg-primary hover:text-white">
            {t('portfolio.viewAll')}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
