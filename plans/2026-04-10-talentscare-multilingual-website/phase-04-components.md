# Phase 04: UI Components

## Context

- **Plan:** [plan.md](./plan.md)
- **Previous:** [phase-03-content-translation.md](./phase-03-content-translation.md)
- **Design Reference:** asymmetric-agencypro template
- **Next Phase:** [phase-05-pages.md](./phase-05-pages.md)

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-04-10 |
| Description | Build reusable UI components matching reference design |
| Priority | High |
| Status | Pending |
| Est. Hours | 12 |

## Key Insights

- Design follows modern minimalist aesthetic with bold accents
- Heavy use of full-width sections and asymmetric layouts
- Animations enhance UX (scroll-based, hover states)
- Components must support i18n via props

## Requirements

### Functional
- Navigation (sticky, responsive)
- Hero section (full-width, video/image capable)
- Service cards (icon, title, description)
- Testimonial carousel
- Contact form (validated)
- Footer (multi-column)

### Non-Functional
- Mobile-first responsive
- Lighthouse accessibility >90
- Framer Motion animations
- Type-safe props

## Architecture

```
components/
├── ui/                    # Base UI primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── language-switcher.tsx
│   └── container.tsx
├── layout/                # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── navbar.tsx
│   └── mobile-menu.tsx
└── sections/              # Page sections
    ├── hero.tsx
    ├── services-grid.tsx
    ├── service-card.tsx
    ├── testimonials.tsx
    ├── stats-bar.tsx
    ├── cta-section.tsx
    └── contact-form.tsx
```

## Related Files

After completion:
- `components/ui/*.tsx` - Base UI components
- `components/layout/*.tsx` - Layout components
- `components/sections/*.tsx` - Section components
- `lib/utils.ts` - Utility functions (cn, etc.)

## Implementation Steps

### Step 1: Create Utility Functions (15 min)
```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Step 2: Base Button Component (30 min)
```typescript
// components/ui/button.tsx
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-600',
        secondary: 'bg-accent text-white hover:bg-accent-light',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'hover:bg-primary-50 text-primary',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-6 py-2',
        sm: 'h-8 px-4 text-xs',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
```

### Step 3: Container Component (15 min)
```typescript
// components/ui/container.tsx
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'wide' | 'narrow';
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': size === 'default',
          'max-w-screen-2xl': size === 'wide',
          'max-w-4xl': size === 'narrow',
        },
        className
      )}
    >
      {children}
    </div>
  );
}
```

### Step 4: Card Component (20 min)
```typescript
// components/ui/card.tsx
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg bg-white p-6 shadow-sm',
        hover && 'transition-shadow hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('text-xl font-display font-semibold text-primary', className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-gray-600', className)}>{children}</p>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn(className)}>{children}</div>;
}
```

### Step 5: Input Components (30 min)
```typescript
// components/ui/input.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={id}
          className={cn(
            'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
            'placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

// Textarea
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          id={id}
          className={cn(
            'flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
            'placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';
```

### Step 6: Header & Navigation (60 min)
```typescript
// components/layout/header.tsx
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { MobileMenu } from './mobile-menu';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('common.nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/services/employers', label: t('servicesEmployers') },
    { href: '/services/talents', label: t('servicesTalents') },
    { href: '/about', label: t('about') },
    { href: '/team', label: t('team') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-bold text-primary">
            talentsCARE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button size="sm">
              {t('contact')}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </Container>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
```

### Step 7: Mobile Menu (30 min)
```typescript
// components/layout/mobile-menu.tsx
'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/lib/i18n/navigation';
import { LanguageSwitcher } from '@/components/ui/language-switcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 shadow-xl"
          >
            <div className="p-6">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Logo */}
              <div className="text-xl font-display font-bold text-primary mb-8">
                talentsCARE
              </div>

              {/* Links */}
              <nav className="space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 text-lg font-medium text-gray-700 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Language Switcher */}
              <div className="mt-8 pt-8 border-t">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

### Step 8: Hero Section (45 min)
```typescript
// components/sections/hero.tsx
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

interface HeroProps {
  backgroundImage?: string;
}

export function Hero({ backgroundImage = '/images/hero-bg.jpg' }: HeroProps) {
  const t = useTranslations('home.hero');

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            {t('headline')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">{t('ctaPrimary')}</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link href="/services/employers">{t('ctaSecondary')}</Link>
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### Step 9: Service Card (30 min)
```typescript
// components/sections/service-card.tsx
'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/i18n/navigation';

// Icon map
const icons: Record<string, React.ReactNode> = {
  presentation: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  academic: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
  users: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  microphone: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
  video: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  chat: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
  lightning: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  heart: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  calendar: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  index?: number;
}

export function ServiceCard({ title, description, icon, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full group">
        <CardHeader>
          <div className="w-14 h-14 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            {icons[icon] || icons.presentation}
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="mb-4">{description}</CardDescription>
          <Button variant="link" className="p-0" asChild>
            <Link href={href}>Mehr erfahren &rarr;</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
```

### Step 10: Footer (45 min)
```typescript
// components/layout/footer.tsx
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/container';
import { Link } from '@/lib/i18n/navigation';

export function Footer() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">{t('company')}</h3>
            <p className="text-white/80 mb-4">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white">{nav('home')}</Link></li>
              <li><Link href="/services/employers" className="text-white/80 hover:text-white">{nav('servicesEmployers')}</Link></li>
              <li><Link href="/services/talents" className="text-white/80 hover:text-white">{nav('servicesTalents')}</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white">{nav('about')}</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white">{nav('contact')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-white/80 hover:text-white">{t('privacy')}</Link></li>
              <li><Link href="/imprint" className="text-white/80 hover:text-white">{t('imprint')}</Link></li>
              <li><Link href="/terms" className="text-white/80 hover:text-white">{t('terms')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{nav('contact')}</h4>
            <address className="not-italic text-white/80 space-y-2">
              <p>talentsCARE GmbH</p>
              <p>Musterstrasse 123</p>
              <p>12345 Berlin</p>
              <p className="mt-4">
                <a href="mailto:info@talentscare.de" className="hover:text-white">info@talentscare.de</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          &copy; {currentYear} {t('company')}. {t('rights')}.
        </div>
      </Container>
    </footer>
  );
}
```

### Step 11: Contact Form (45 min)
```typescript
// components/sections/contact-form.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Input, Textarea } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      // For MVP: Use Netlify Forms or Formspree
      // <form name="contact" method="POST" data-netlify="true">
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
        {t('success')}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          {...register('name')}
          label={t('name')}
          error={errors.name?.message}
          id="name"
        />
        <Input
          {...register('email')}
          type="email"
          label={t('email')}
          error={errors.email?.message}
          id="email"
        />
        <Input
          {...register('phone')}
          type="tel"
          label={t('phone')}
          id="phone"
        />
        <Input
          {...register('company')}
          label={t('company')}
          id="company"
        />
      </div>
      <Input
        {...register('subject')}
        label={t('subject')}
        error={errors.subject?.message}
        id="subject"
      />
      <Textarea
        {...register('message')}
        label={t('message')}
        error={errors.message?.message}
        id="message"
        rows={5}
      />
      {status === 'error' && (
        <p className="text-red-500 text-sm">{t('error')}</p>
      )}
      <Button type="submit" size="lg" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : t('submit')}
      </Button>
    </form>
  );
}
```

### Step 12: Stats Bar (20 min)
```typescript
// components/sections/stats-bar.tsx
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
```

## Todo List

- [ ] Create lib/utils.ts (cn function)
- [ ] Build Button component with variants
- [ ] Build Container component
- [ ] Build Card components
- [ ] Build Input/Textarea components
- [ ] Build Header with sticky nav
- [ ] Build MobileMenu with animation
- [ ] Build Hero section
- [ ] Build ServiceCard component
- [ ] Build Footer component
- [ ] Build ContactForm with validation
- [ ] Build StatsBar component
- [ ] Test all components responsive
- [ ] Verify Framer Motion animations

## Success Criteria

- [ ] All components render without errors
- [ ] Responsive on mobile/tablet/desktop
- [ ] Animations smooth (60fps)
- [ ] Accessibility: keyboard navigation, ARIA labels
- [ ] TypeScript: no type errors
- [ ] i18n: all text from translations

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Animation performance | Medium | Low | Use will-change, GPU acceleration |
| Mobile menu bugs | Low | Medium | Test on real devices |
| Form validation UX | Low | Low | Clear error messages |
| Icon rendering | Low | Low | SVG fallbacks |

## Security Considerations

- Sanitize form inputs
- Prevent XSS in dynamic content
- No inline event handlers

## Next Steps

Upon completion, proceed to [phase-05-pages.md](./phase-05-pages.md) to assemble components into complete pages.
