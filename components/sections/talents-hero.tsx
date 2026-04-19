/**
 * Talents Hero Section - Client Component
 * Parallax animations and interactive effects
 */

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

interface TalentsHeroProps {
  headline: string;
  description: string;
  tagline: string;
  ctaButton: string;
  learnMoreButton: string;
}

export function TalentsHero({
  headline,
  description,
  tagline,
  ctaButton,
  learnMoreButton,
}: TalentsHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden text-white pt-32 pb-40 min-h-[90vh] flex items-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Unsplash Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#003366]/90 to-primary/95" />

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          {mounted && (
            <motion.div
              style={{ y }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-2xl opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
            </motion.div>
          )}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      {mounted && (
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 w-full"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  {headline}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed"
              >
                {description}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold text-[#FDB927] mb-12"
              >
                {tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="shadow-2xl hover:shadow-3xl hover:scale-105 transition-all min-w-[200px]"
                >
                  <Link href="/contact">{ctaButton}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all min-w-[200px]"
                >
                  <a href="#services">{learnMoreButton}</a>
                </Button>
              </motion.div>
            </div>
          </Container>
        </motion.div>
      )}
    </section>
  );
}
