/**
 * Approach Section Component
 * Asymmetric layout with left-aligned content and right-aligned imagery
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ApproachStep {
  titleKey: string;
  descKey: string;
  image: string;
}

const steps: ApproachStep[] = [
  {
    titleKey: 'approach.step1.title',
    descKey: 'approach.step1.desc',
    image: '/talentsCARE/images/bai-dang-tuyen-dung-5.jpg',
  },
  {
    titleKey: 'approach.step2.title',
    descKey: 'approach.step2.desc',
    image: '/talentsCARE/images/dao-tao-nhan-vien-4.png',
  },
  {
    titleKey: 'approach.step3.title',
    descKey: 'approach.step3.desc',
    image: '/talentsCARE/images/cong-ty-phap-tuyen-dung-2.webp',
  },
  {
    titleKey: 'approach.step4.title',
    descKey: 'approach.step4.desc',
    image: '/talentsCARE/images/young-handsome-hipster-man.webp',
  },
];

export function ApproachSection() {
  const t = useTranslations();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-gray-50 py-100 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="mb-6 font-display text-h2 text-dark">
            {t('approach.heading')}
          </h2>
          <p className="max-w-2xl text-body text-text-body">
            {t('approach.subheading')}
          </p>
        </motion.div>

        {/* Asymmetric Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group w-full text-left transition-all ${
                  activeStep === index ? '' : ''
                }`}
              >
                <div className="relative border-l-4 border-gray-200 pl-8 py-6 transition-all hover:border-primary">
                  {/* Active Indicator */}
                  {activeStep === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 h-full w-1 bg-primary"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Step Number */}
                  <div
                    className={`mb-3 text-sm font-medium transition-colors ${
                      activeStep === index
                        ? 'text-primary'
                        : 'text-text-light group-hover:text-primary'
                    }`}
                  >
                    0{index + 1}
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`mb-2 text-xl font-medium transition-colors ${
                      activeStep === index
                        ? 'text-dark'
                        : 'text-text-body group-hover:text-dark'
                    }`}
                  >
                    {t(step.titleKey)}
                  </h3>

                  {/* Step Description - Show only for active */}
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm leading-relaxed text-text-body"
                      >
                        {t(step.descKey)}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Image Display */}
          <div className="relative">
            <div className="sticky top-24 overflow-hidden rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="aspect-[4/5] w-full"
                >
                  <img
                    src={steps[activeStep].image}
                    alt={t(steps[activeStep].titleKey)}
                    className="h-full w-full object-cover"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Step Counter */}
              <div className="absolute bottom-8 right-8 rounded-full bg-white px-6 py-3 shadow-lg">
                <span className="text-sm font-medium text-dark">
                  {activeStep + 1} / {steps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
