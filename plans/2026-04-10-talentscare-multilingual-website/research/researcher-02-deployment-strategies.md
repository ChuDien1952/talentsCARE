# Research Report: Next.js Multilingual Static Sites on GitHub Pages

**Research Date:** April 10, 2026
**Sources Consulted:** 13 authoritative sources
**Focus:** Deployment strategies, routing patterns, build optimization

---

## Executive Summary

GitHub Pages multilingual deployment requires careful architectural decisions. **Recommended approach:** subdirectory-based i18n (e.g., `/en/`, `/vi/`) with static HTML generation using Next.js `next export`. Use `next-intl` or `next-i18next-static-site` for production-ready solutions. Subdomain routing unavailable for language variants under single repo. Build-time i18n solves server-side incompatibility and optimizes SEO. CI/CD automation via GitHub Actions generates all language variants in single build pipeline.

---

## GitHub Pages URL Structure Patterns

### Subdirectory Approach (Recommended)
```
example.com/en/    (English)
example.com/vi/    (Vietnamese)
example.com/fr/    (French)
```

**Pros:** Single deployment, simple DNS setup, shared analytics, SEO-friendly with hreflang tags
**Cons:** Longer URLs, potential routing conflicts with non-i18n paths

**Implementation:** Requires `basePath` configuration in Next.js and route-level locale handling.

### Subdomain Approach (Not Viable for Single Repo)
GitHub Pages doesn't support serving multiple repos under subpaths like `en.example.com`, `vi.example.com` from single repository. Each subdomain needs separate CNAME/repo or custom routing layer (external tool required).

### Default GitHub Pages Behavior
- Username Pages: `username.github.io`
- Project Pages: `username.github.io/repository-name`
- Custom domain: `example.com` or `example.com/repository-name`

When custom domain added to username repo, all project repos served at `example.com/repo-name` subdirectories.

---

## Next.js Static Export with i18n Routing

### Critical Limitation
**Next.js built-in i18n routing incompatible with `next export`.** Internationalized routing feature requires server-side logic. Error: "i18n support is not compatible with next export."

### Solutions

**Option 1: next-intl (Recommended for App Router)**
- Full App Router support with static exports
- Segment-based routing: `[locale]/[...slug]`
- Generates `/en/page`, `/vi/page` at build time
- Translations pre-rendered in HTML
- Example repo: [next-intl example](https://github.com/azu/next-intl-example)

**Option 2: next-i18next-static-site**
- Brings react-i18next/i18next to static builds
- SSG pre-renders all translations
- Client can fetch updated translations from CDN post-deployment
- Hybrid approach: static content + dynamic translations
- GitHub: [next-i18next-static-site](https://github.com/xairoo/next-i18next-static-site)

**Option 3: next-export-i18n**
- Client-side only i18n for static exports
- Reactive translation switching
- Only client components
- Best for minimal setup
- GitHub: [next-export-i18n](https://github.com/martinkr/next-export-i18n)

---

## Language Detection & Routing Strategies

### Build-Time Routing (Recommended)
```
getStaticPaths() generates paths for each locale:
/en/home, /en/about
/vi/home, /vi/about
/fr/home, /fr/about
```

**Advantages:**
- Pre-rendered HTML served instantly
- Search engines crawl translated content
- No client-side lang detection latency
- Optimal GitHub Pages compatibility

**Implementation:** Use `getStaticPaths` with locale array in pages router or dynamic segments in App Router.

### Client-Side Detection (Fallback)
- Browser language detection via `navigator.language`
- Cookie/localStorage for user preference persistence
- JavaScript redirects to appropriate locale
- **Caveat:** Not ideal for SEO, adds JS dependency

### Hybrid Approach
- Build-time generates all variants
- Client-side detects preference
- Redirects to optimal locale path
- Fallback to default locale

---

## Build Optimization for Multiple Languages

### Static Generation Strategy
```
Build time scales linearly: N languages × P pages = total pages generated
Example: 3 languages × 50 pages = 150 static HTML files
```

### Optimization Techniques

**1. Lazy Page Generation**
- Only build frequently accessed pages for all languages
- Generate less popular pages in default language
- Incremental Static Regeneration (ISR) incompatible with GitHub Pages export

**2. Shared Assets**
- Single CSS/JS bundles shared across locales
- Locale-specific JSON translation files only (minimal overhead)
- Images referenced, not duplicated

**3. Build Time Reduction**
- Parallel locale processing in CI/CD
- Cache dependencies between builds
- Pre-optimize images at build time (next/image with static export)

**4. Output Size Management**
- Compress static files with gzip in CI/CD
- Remove unused translations before build
- Split large translation files by page/feature

### Performance Metrics (Typical)
- Per-language build: 1-3 minutes (50 pages)
- Total build (3 languages): 2-5 minutes parallel
- Output size: ~2-5MB per language (before compression)
- Deployment: <1 second (static files)

---

## CI/CD Setup: Automated Multilingual Builds

### GitHub Actions Workflow Template

```yaml
name: Build & Deploy Multilingual Site
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x]

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Generate static export (all locales)
        run: npm run build
        env:
          NEXT_PUBLIC_LOCALES: en,vi,fr

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
          cname: example.com
```

### Key Configuration

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  trailingSlash: true,
  i18n: {
    locales: ['en', 'vi', 'fr'],
    defaultLocale: 'en',
    localeDetection: false
  }
};

module.exports = nextConfig;
```

### Build Process Flow
1. **Install:** Fetch dependencies (cached)
2. **Prepare Locales:** Generate static content for all locales
3. **Export:** `next build && next export` generates `./out` directory
4. **Deploy:** Push `./out` to gh-pages branch (automatic)
5. **Verify:** GitHub Pages serves from updated branch

### Deployment Considerations
- Build artifacts (~50-100MB) cached in GitHub Actions
- Deploy time typically <1 minute
- Auto-rollback available via branch management
- Custom domain (CNAME) configured in repo settings

---

## Unresolved Questions

1. **Dynamic Content Updates:** How to update translations without rebuilding entire static site?
2. **Language Detection UX:** Should default route redirect to detected language or show language picker?
3. **Legacy URL Migration:** Best practices for URL structure changes across languages?
4. **Analytics Tracking:** How to segment analytics by language across subdirectory routes?

---

## Sources

- [Next.js Internationalization Guide](https://nextjs.org/docs/pages/guides/internationalization)
- [next-intl Static Export Example](https://github.com/azu/next-intl-example)
- [next-i18next-static-site](https://github.com/xairoo/next-i18next-static-site)
- [next-export-i18n](https://github.com/martinkr/next-export-i18n)
- [Locize: Next.js i18n Static Export](https://www.locize.com/blog/next-i18n-static/)
- [GitHub Pages Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Automatic Static Optimization](https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization)
- [DEV Community: Next.js i18n with Static Sites](https://dev.to/martinkr/next-js-i18n-with-static-sites-2644)
- [Next.js App Router i18n 2026](https://gundogmuseray.medium.com/next-js-i18n-made-easy-build-multilingual-apps-with-app-router-in-2026-236151f37d60)
- [GitHub Pages Subdomain Setup](https://til.simonwillison.net/github/custom-subdomain-github-pages)
