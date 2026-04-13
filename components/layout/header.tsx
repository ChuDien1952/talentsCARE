/**
 * Header Component
 * Modern sticky navigation matching reference design
 */

'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
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
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-bold text-dark transition-colors hover:text-primary"
          >
            talentsCARE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-body transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="rounded-md bg-dark px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary"
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
