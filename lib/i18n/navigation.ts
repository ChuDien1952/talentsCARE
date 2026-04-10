/**
 * Localized Navigation Utilities
 * Provides type-safe navigation components that work with i18n routing
 */

import { createNavigation } from 'next-intl/navigation';
import { locales } from './config';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
});
