/**
 * Sitemap Generator
 * Generates sitemap.xml for all pages in all locales with hreflang
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';

const baseUrl = 'https://chudien1952.github.io/talentsCARE';
const locales = ['de', 'en', 'vi'] as const;

// Define all pages in the application
const pages = [
  '', // Home page
  '/services/employers',
  '/services/talents',
  '/about',
  '/team',
  '/blog',
  '/contact',
  '/privacy',
  '/imprint',
  '/terms',
];

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const page of pages) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${page}/`;

      xml += '  <url>\n';
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += '    <changefreq>weekly</changefreq>\n';
      xml += `    <priority>${page === '' ? '1.0' : '0.8'}</priority>\n`;

      // Add hreflang alternates for all locales
      for (const altLocale of locales) {
        const altUrl = `${baseUrl}/${altLocale}${page}/`;
        xml += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}" />\n`;
      }

      // Add x-default pointing to German (primary locale)
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/de${page}/" />\n`;

      xml += '  </url>\n';
    }
  }

  xml += '</urlset>';
  return xml;
}

// Generate and write sitemap
const sitemap = generateSitemap();
const outPath = resolve(process.cwd(), 'out', 'sitemap.xml');

try {
  writeFileSync(outPath, sitemap, 'utf8');
  console.log('✅ Sitemap generated successfully');
  console.log(`📍 Location: ${outPath}`);
  console.log(`📊 Pages: ${pages.length} × ${locales.length} locales = ${pages.length * locales.length} URLs`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
