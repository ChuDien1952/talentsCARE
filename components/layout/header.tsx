/**
 * Header Component
 * Modern sticky navigation matching reference design
 */

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { Logo } from '@/components/ui/logo';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { MobileMenu } from './mobile-menu';

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white py-3 shadow-sm'
          : 'bg-white/95 py-5 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="dark" size="md" showTagline={!scrolled} />
          </div>

          {/* Desktop Nav - centered and flexible */}
          <div className="hidden flex-1 items-center justify-center gap-3 lg:flex lg:gap-4 xl:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-medium text-text-body transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden flex-shrink-0 items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-md bg-dark px-5 py-3 text-sm font-medium text-white transition-all hover:bg-primary"
            >
              {t('sendMessage')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
