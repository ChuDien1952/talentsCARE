/**
 * Dynamic Footer Selector
 * Renders appropriate footer variant based on current page
 */

'use client';

import { usePathname } from 'next/navigation';
import {
  HomeFooter,
  ServicesFooter,
  ContactFooter,
  AboutFooter,
  BlogFooter,
  LegalFooter,
} from './footer-variants';
import { Footer } from './footer';

export function DynamicFooter() {
  const pathname = usePathname();

  // Remove locale prefix to get clean path
  const cleanPath = pathname.replace(/^\/(de|en|vi)/, '') || '/';

  // Determine which footer to show
  if (cleanPath === '/') {
    return <HomeFooter />;
  }

  if (cleanPath.startsWith('/services/employers')) {
    return <ServicesFooter type="employers" />;
  }

  if (cleanPath.startsWith('/services/talents')) {
    return <ServicesFooter type="talents" />;
  }

  if (cleanPath === '/contact') {
    return <ContactFooter />;
  }

  if (cleanPath === '/about' || cleanPath === '/team') {
    return <AboutFooter />;
  }

  if (cleanPath === '/blog' || cleanPath.startsWith('/blog/')) {
    return <BlogFooter />;
  }

  if (
    cleanPath === '/privacy' ||
    cleanPath === '/imprint' ||
    cleanPath === '/terms'
  ) {
    return <LegalFooter />;
  }

  // Default fallback to original footer
  return <Footer />;
}
