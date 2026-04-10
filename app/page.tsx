/**
 * Root Page - Redirects to Default Locale
 * This page redirects visitors to the default language (German)
 */

import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
