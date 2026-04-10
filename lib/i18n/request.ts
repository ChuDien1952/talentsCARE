/**
 * next-intl Request Configuration
 * Loads translation messages for the requested locale
 */

import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const locale = (await requestLocale) as string;

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
  };
});
