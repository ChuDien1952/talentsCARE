/**
 * Talents CTA Section - Client Component
 * Call-to-action with animations
 */

'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

interface TalentsCTAProps {
  headline: string;
  description: string;
  button: string;
  teamButton?: string;
}

export function TalentsCTA({ headline, description, button, teamButton }: TalentsCTAProps) {
  return (
    <section className="relative overflow-hidden text-white py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#003366]/90 to-primary/95" />
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDB927] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" asChild className="shadow-2xl hover:shadow-3xl hover:scale-105 transition-all min-w-[200px]">
              <Link href="/contact">{button}</Link>
            </Button>
            {teamButton && (
              <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all min-w-[200px]">
                <Link href="/team">{teamButton}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
