# Phase 06: Deployment

## Context

- **Plan:** [plan.md](./plan.md)
- **Previous:** [phase-05-pages.md](./phase-05-pages.md)
- **Research:** [deployment-strategies.md](./research/researcher-02-deployment-strategies.md)
- **Final Phase**

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-04-10 |
| Description | Configure GitHub Actions CI/CD, deploy to GitHub Pages |
| Priority | High |
| Status | Pending |
| Est. Hours | 4 |

## Key Insights

- GitHub Pages serves static files only
- `output: 'export'` generates `/out` directory
- GitHub Actions automates build and deploy
- Custom domain optional (CNAME record)

## Requirements

### Functional
- Automated builds on push to main
- Deploy static files to GitHub Pages
- Generate sitemap.xml
- robots.txt configuration

### Non-Functional
- Build time <5 minutes
- Zero-downtime deployments
- Rollback capability (git revert)

## Architecture

```
.github/
└── workflows/
    └── deploy.yml          # CI/CD workflow

public/
├── robots.txt              # SEO robots config
└── sitemap.xml             # Generated sitemap (or script)

scripts/
└── generate-sitemap.ts     # Sitemap generation script

next.config.ts              # Static export config
```

## Related Files

After completion:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/robots.txt` - Robots configuration
- `scripts/generate-sitemap.ts` - Sitemap generator
- Repository Settings > Pages configured

## Implementation Steps

### Step 1: Update next.config.ts for Production (15 min)
```typescript
// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If deploying to username.github.io/repo-name, set basePath
  // basePath: isProd ? '/talentsCARE' : '',
  // assetPrefix: isProd ? '/talentsCARE/' : '',
};

export default withNextIntl(nextConfig);
```

### Step 2: Create GitHub Actions Workflow (30 min)
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Generate sitemap
        run: npm run generate-sitemap

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Create robots.txt (10 min)
```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://talentscare.github.io/sitemap.xml

# Block admin/draft pages if any
Disallow: /draft/
Disallow: /admin/
```

### Step 4: Create Sitemap Generator Script (45 min)
```typescript
// scripts/generate-sitemap.ts
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const baseUrl = 'https://talentscare.github.io';
const locales = ['de', 'en', 'vi'];

// Define all pages
const pages = [
  '',
  '/services/employers',
  '/services/talents',
  '/about',
  '/team',
  '/blog',
  '/contact',
  '/privacy',
  '/imprint',
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

      // Add hreflang alternates
      for (const altLocale of locales) {
        const altUrl = `${baseUrl}/${altLocale}${page}/`;
        xml += `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrl}" />\n`;
      }
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
writeFileSync(outPath, sitemap);
console.log(`Sitemap generated: ${outPath}`);
```

### Step 5: Add npm Script for Sitemap (5 min)
```json
// package.json (add to scripts)
{
  "scripts": {
    "generate-sitemap": "npx tsx scripts/generate-sitemap.ts"
  }
}
```

### Step 6: Configure .nojekyll (5 min)
```bash
# Create empty .nojekyll file to prevent Jekyll processing
touch public/.nojekyll
```
This prevents GitHub Pages from ignoring `_next` folder.

### Step 7: Add CNAME for Custom Domain (Optional) (10 min)
```txt
# public/CNAME (if using custom domain)
talentscare.de
```

**DNS Setup (if using custom domain):**
- A Record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- OR CNAME: `username.github.io`

### Step 8: Configure Repository Settings (15 min)

1. Go to repository Settings > Pages
2. Source: "GitHub Actions"
3. (Optional) Custom domain: enter domain, check "Enforce HTTPS"

### Step 9: Create Pre-deployment Checklist (15 min)
```markdown
# Pre-deployment Checklist

## Code Quality
- [ ] All TypeScript errors resolved
- [ ] ESLint passing
- [ ] No console.log statements
- [ ] All translations complete

## SEO
- [ ] All pages have metadata
- [ ] hreflang tags present
- [ ] robots.txt configured
- [ ] sitemap.xml generates correctly

## Performance
- [ ] Images optimized
- [ ] Lighthouse score >90
- [ ] Bundle size acceptable

## Functionality
- [ ] All pages render in all locales
- [ ] Language switcher works
- [ ] Contact form submits (to external service)
- [ ] Mobile responsive

## Deployment
- [ ] GitHub Actions workflow valid
- [ ] Repository Pages settings configured
- [ ] (Optional) Custom domain DNS configured
```

### Step 10: First Deployment (30 min)
```bash
# Ensure build works locally
npm run build
npm run generate-sitemap

# Verify output
ls -la out/
# Should see: de/, en/, vi/, sitemap.xml, robots.txt, .nojekyll

# Commit and push
git add .
git commit -m "feat: add GitHub Pages deployment workflow"
git push origin main

# Monitor GitHub Actions
# Go to: https://github.com/username/talentsCARE/actions
```

### Step 11: Verify Deployment (20 min)
```bash
# Wait for GitHub Actions to complete
# Visit: https://talentscare.github.io/

# Test all locales
# https://talentscare.github.io/de/
# https://talentscare.github.io/en/
# https://talentscare.github.io/vi/

# Verify sitemap
# https://talentscare.github.io/sitemap.xml

# Verify robots.txt
# https://talentscare.github.io/robots.txt

# Run Lighthouse audit
# Chrome DevTools > Lighthouse > Generate report
```

### Step 12: Post-deployment Tasks (15 min)

**Google Search Console:**
1. Add property for `https://talentscare.github.io/`
2. Submit sitemap.xml
3. Request indexing

**Analytics (Optional):**
```typescript
// Add to app/[locale]/layout.tsx
import Script from 'next/script';

// Inside layout, add before </body>:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Todo List

- [ ] Update next.config.ts for production
- [ ] Create .github/workflows/deploy.yml
- [ ] Create public/robots.txt
- [ ] Create sitemap generator script
- [ ] Add generate-sitemap npm script
- [ ] Create public/.nojekyll
- [ ] (Optional) Create public/CNAME
- [ ] Configure repository Pages settings
- [ ] Complete pre-deployment checklist
- [ ] Push to trigger first deployment
- [ ] Verify all pages deployed correctly
- [ ] Submit sitemap to Google Search Console

## Success Criteria

- [ ] GitHub Actions workflow passes
- [ ] Site accessible at GitHub Pages URL
- [ ] All 3 locales working
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] No 404 errors on any page
- [ ] Language switching works in production

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Build fails in CI | High | Low | Test locally first |
| Missing .nojekyll | High | Medium | Include in template |
| CORS issues | Medium | Low | No API calls in static |
| DNS propagation slow | Low | Medium | Wait 24-48 hours |

## Security Considerations

- No secrets in codebase (use GitHub Secrets if needed)
- HTTPS enforced by GitHub Pages
- No sensitive data in static files
- Contact form uses external service

## Maintenance

### Updating Content
```bash
# Edit translation files or pages
# Commit and push
git add .
git commit -m "content: update homepage hero text"
git push origin main
# GitHub Actions auto-deploys
```

### Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main
# OR restore from Actions run history
```

### Monitoring
- Check GitHub Actions for build status
- Monitor Google Search Console for crawl issues
- Review analytics for user behavior

## Project Completion Summary

Upon completion of all 6 phases:

**Deliverables:**
- Fully functional multilingual website (DE/EN/VI)
- Static export deployed on GitHub Pages
- SEO optimized with hreflang tags
- Mobile responsive design
- Contact form integration ready

**Technical Stack:**
- Next.js 15 App Router
- next-intl for i18n
- Tailwind CSS
- Framer Motion animations
- GitHub Pages hosting
- GitHub Actions CI/CD

**Total Estimated Time:** 44 hours (~5.5 working days)

**Future Enhancements (Phase 2+):**
- Add Vercel serverless for contact form API
- MongoDB integration for dynamic content
- Blog with MDX content
- Admin dashboard
- Payment integration (Stripe)
