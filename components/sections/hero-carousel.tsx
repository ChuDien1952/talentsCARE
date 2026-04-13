/**
 * Hero Carousel Component
 * Full-viewport image carousel with overlay text and scroll indicators
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Slide {
  image: string;
  titleKey: string;
  subtitleKey: string;
}

const slides: Slide[] = [
  {
    image: '/talentsCARE/images/bai-dang-tuyen-dung-1.jpg',
    titleKey: 'hero.slide1.title',
    subtitleKey: 'hero.slide1.subtitle',
  },
  {
    image: '/talentsCARE/images/tuyen-dung-va-dao-tao-nhan-su1.jpg',
    titleKey: 'hero.slide2.title',
    subtitleKey: 'hero.slide2.subtitle',
  },
  {
    image: '/talentsCARE/images/womanman.webp',
    titleKey: 'hero.slide3.title',
    subtitleKey: 'hero.slide3.subtitle',
  },
];

export function HeroCarousel() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Hero Content */}
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-center sm:px-6">
            <div className="w-full max-w-7xl">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-4 font-display text-hero leading-tight text-white sm:mb-6 sm:leading-none"
                style={{
                  wordBreak: 'keep-all',
                  overflowWrap: 'normal',
                  hyphens: 'manual'
                }}
              >
                {t(slides[currentSlide].titleKey)}
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mx-auto max-w-2xl text-base text-white/90 sm:text-lg md:text-xl"
              >
                {t(slides[currentSlide].subtitleKey)}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 sm:mt-12"
              >
                <button className="group inline-flex items-center gap-2 border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white hover:text-dark sm:gap-3 sm:px-8 sm:py-4 sm:text-base md:text-lg">
                  {t('hero.cta')}
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
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
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot Indicators */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === index
                ? 'w-12 bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-24 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm uppercase tracking-wider">
            {t('hero.scroll')}
          </span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
