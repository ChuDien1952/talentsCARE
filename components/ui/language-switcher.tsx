/**
 * Language Switcher Component
 * Allows users to switch between available locales
 */

'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import {
  locales,
  localeNames,
  localeFlags,
  type Locale,
} from '@/lib/i18n/config';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language Switcher">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => handleChange(l)}
          className={`rounded px-3 py-1 text-sm transition-colors ${
            locale === l
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          aria-label={`Switch to ${localeNames[l]}`}
          aria-current={locale === l ? 'true' : 'false'}
        >
          <span className="mr-1" aria-hidden="true">
            {localeFlags[l]}
          </span>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
