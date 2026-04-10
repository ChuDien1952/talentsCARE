# Deployment Guide

## Overview

The talentsCARE website is deployed to GitHub Pages as a static site. This document covers the deployment process, configuration, and troubleshooting.

**Status:** Phase 01 (Configuration complete, Phase 6 for implementation)
**Deployment Target:** GitHub Pages
**Build System:** Next.js static export
**Hosting:** github.io or custom domain

## Deployment Architecture

```
GitHub Repository
    ↓
Push to main branch
    ↓
GitHub Actions CI/CD (Phase 6)
    ↓
next build (generates /out)
    ↓
Deploy to gh-pages branch
    ↓
GitHub Pages serves static files
    ↓
Browser receives HTML/CSS/JS
```

## Prerequisites

### Repository Setup

1. **Repository on GitHub:**
   - VIETconsult organization
   - Repository name: `talentsCARE`
   - Visibility: Public (for GitHub Pages)

2. **GitHub Pages Configuration:**
   - Settings → Pages
   - Build and deployment → Source: Deploy from a branch
   - Branch: `gh-pages` (created during first deployment)
   - Folder: `/ (root)`

3. **Custom Domain (Optional):**
   - Update GitHub Pages settings with custom domain
   - Add CNAME record to DNS provider

### Local Environment

```bash
node --version      # Should be 18+
npm --version       # Should be 8+
git --version       # Latest
```

## Build Process

### Step 1: Prepare Build Environment

```bash
# Ensure clean state
npm ci              # Install exact versions (CI mode)
npm run build       # Build for production
```

### Step 2: Build Output

```
Build successful!
- Pages optimized
- Compiled successfully

out/
├── index.html
├── services/
│   └── index.html
├── about/
│   └── index.html
├── contact/
│   └── index.html
└── _next/          # JavaScript and CSS bundles
    ├── static/
    │   ├── chunks/
    │   ├── css/
    │   └── media/
    └── ...
```

### Step 3: Verify Build

```bash
# Test static export
npm run build

# Serve locally (requires http-server or similar)
npx http-server out/

# Visit http://localhost:8080
# Verify all pages load correctly
```

## Deployment Methods

### Method 1: Manual Deployment (Testing Only)

```bash
# Build
npm run build

# Copy contents to gh-pages branch
git checkout gh-pages  # or git checkout -b gh-pages
cp -r out/* .
git add .
git commit -m "Deploy: Phase 01 completion"
git push origin gh-pages

# Switch back to main
git checkout main
```

**⚠️ Not recommended for production.** See Method 2 for CI/CD.

### Method 2: GitHub Actions CI/CD (Recommended, Phase 6)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:  # Allow manual trigger

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Features:**
- Builds only on push to main
- Runs linting checks
- Generates static export
- Automatically deploys to gh-pages
- Workflow viewable in Actions tab

## Configuration for GitHub Pages

### next.config.ts

The project is already configured for GitHub Pages:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',           // Static export
  trailingSlash: true,        // URLs end with /
  images: {
    unoptimized: true,        // No optimization (static)
  },
  // basePath: '/talentsCARE', // Uncomment if deploying to subdirectory
};

export default nextConfig;
```

### Domain Configuration

#### GitHub Pages Domain (Default)

**URL:** `https://vietconsult.github.io/talentsCARE/`

No configuration needed.

#### Custom Domain

**Setup:**

1. Register domain or point subdomain to GitHub Pages

2. Update DNS records:
   ```
   For root domain (@):
   A records:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

   For subdomain (www):
   CNAME: vietconsult.github.io
   ```

3. In repository settings:
   - Go to Settings → Pages
   - Custom domain: `talentsCARE.com` (or subdomain)
   - Check "Enforce HTTPS"

4. Update next.config.ts if using subdirectory:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     trailingSlash: true,
     basePath: '/talentsCARE',  // If deploying to subdirectory
     images: {
       unoptimized: true,
     },
   };
   ```

5. Rebuild and redeploy after basePath change

**HTTPS:** Automatically enabled by GitHub Pages

## Post-Deployment Verification

### Test Deployment

After pushing to GitHub Pages:

1. **Visit GitHub Pages URL:**
   ```
   https://vietconsult.github.io/talentsCARE/
   ```

2. **Check all pages load:**
   - Homepage
   - Services page (when added)
   - About page (when added)
   - Contact form (when added)

3. **Test responsive design:**
   - Mobile (320px)
   - Tablet (768px)
   - Desktop (1024px+)

4. **Browser compatibility:**
   - Chrome/Edge (latest)
   - Firefox (latest)
   - Safari (latest)

5. **Performance audit:**
   ```
   Lighthouse score targets:
   - Performance: 90+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+
   ```

6. **Functionality checks:**
   - Navigation works
   - Links work correctly
   - Forms functional (when added)
   - Animations smooth (no jank)

### Monitoring Tools

**Lighthouse (Built-in):**
```bash
# Local testing
npm run build
npm run start
# Open DevTools → Lighthouse tab
```

**Google PageSpeed Insights:**
- https://pagespeed.web.dev
- Paste deployed URL
- Check metrics

**GitHub Pages Status:**
- Settings → Pages
- View deployment history
- Check for any issues

## Rollback Procedure

### If Deployment Fails

1. **Check GitHub Actions logs:**
   - Repository → Actions tab
   - View failed workflow
   - Check error messages

2. **Common issues:**
   - ESLint errors (fix locally, push again)
   - Build errors (check for syntax, push fix)
   - Dependencies missing (update package.json)

3. **Rollback to previous version:**
   ```bash
   git log --oneline     # View commits
   git revert <commit>   # Revert problematic commit
   git push origin main  # Re-deploy
   ```

### If Performance Issues

1. **Check bundle size:**
   ```bash
   npm run build
   # Review /out/_next/static/chunks/
   ```

2. **Optimize if needed:**
   - Remove unused dependencies
   - Code split heavy components
   - Optimize images

3. **Redeploy:**
   ```bash
   git add .
   git commit -m "perf: optimize bundle size"
   git push origin main
   ```

## Phase 6: Full Deployment Implementation

When Phase 6 begins:

1. **Create `.github/workflows/deploy.yml`** (provided above)
2. **Test locally with `http-server`** before pushing
3. **Enable GitHub Pages** in repository settings
4. **Push to main branch** to trigger automatic deployment
5. **Monitor initial deployments** for issues
6. **Set up monitoring** (optional)
7. **Document deployment process** for team

## Deployment Checklist

Before each deployment:

- [ ] All tests passing (`npm run lint`)
- [ ] Build successful (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] Bundle size acceptable
- [ ] Documentation updated
- [ ] Commit message clear
- [ ] All changes pushed to main

## Troubleshooting

### Issue: 404 errors on subpages

**Cause:** Missing trailing slashes

**Solution:**
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  trailingSlash: true,  // Ensures all routes end with /
};
```

### Issue: Images not loading

**Cause:** Image optimization disabled for static export

**Solution:**
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // Required for static export
  },
};
```

### Issue: Styles not applying

**Cause:** Tailwind paths not configured correctly

**Solution:**
```typescript
// tailwind.config.ts
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Add any missing paths
  ],
};
```

### Issue: Deployment stuck

**Solution:**
1. Cancel current workflow in Actions tab
2. Fix issue locally
3. Push new commit to trigger new workflow

### Issue: Custom domain not working

**Checklist:**
- [ ] DNS records updated (wait 24 hours for propagation)
- [ ] Repository settings have custom domain
- [ ] "Enforce HTTPS" checkbox enabled
- [ ] No basePath conflicts in next.config.ts

## Security Considerations

### GitHub Pages Limitations

- No server-side processing
- No database
- No environment variable secrets (use public variables only)

### Best Practices

1. **No sensitive data in source:**
   - Don't commit API keys
   - Don't commit passwords
   - Use environment variables with `NEXT_PUBLIC_` prefix if needed

2. **Content Security Policy (Future):**
   - Can add via GitHub Pages config
   - Protects against XSS attacks

3. **HTTPS:**
   - Automatically enabled
   - Always use https:// in links

## Performance Tips

1. **Minimize bundle:**
   - Remove unused dependencies
   - Use dynamic imports for heavy code

2. **Image optimization:**
   - Compress images before adding
   - Use WebP format when possible
   - Add alt text for accessibility

3. **Caching:**
   - GitHub Pages caches static files
   - Browser caching enabled automatically
   - Set headers via GitHub Pages (limited options)

## Analytics & Monitoring (Future)

When Phase 6+ allows:

1. **Google Analytics:**
   - Track page views
   - Monitor user behavior
   - Identify popular pages

2. **Error tracking:**
   - Monitor for JavaScript errors
   - Alert on failures

3. **Performance monitoring:**
   - Track Core Web Vitals
   - Monitor load times

## Deployment Frequency

**Recommended:**

- **Bug fixes:** Immediate (hotfix branch)
- **Features:** With release cycle
- **Documentation:** As needed
- **Dependencies:** Monthly security updates
- **Content updates:** Daily/Weekly

## Conclusion

The deployment setup is production-ready. Phase 01 establishes the configuration; Phase 6 implements the GitHub Actions workflow. The static export approach ensures fast, reliable deployment with minimal overhead.

**Ready for Phase 6 implementation.**
