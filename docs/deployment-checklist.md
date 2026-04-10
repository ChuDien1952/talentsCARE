# Pre-Deployment Checklist

## Code Quality
- [x] All TypeScript errors resolved (0 errors)
- [x] ESLint passing (0 warnings)
- [x] No console.log statements in production code
- [x] All translations complete (DE/EN/VI)

## SEO
- [x] All pages have metadata
- [x] hreflang tags present in layout
- [x] robots.txt configured
- [x] sitemap.xml generates correctly (30 URLs)

## Performance
- [x] Images unoptimized flag set (required for static export)
- [ ] Lighthouse score >90 (run after deployment)
- [x] Bundle size acceptable (102kB First Load JS)

## Functionality
- [x] All pages render in all locales (10 pages × 3 locales = 30 pages)
- [x] Language switcher component implemented
- [x] Contact form UI complete (backend integration Phase 2)
- [x] Mobile responsive (Tailwind breakpoints)

## Deployment Configuration
- [x] GitHub Actions workflow created (`.github/workflows/deploy.yml`)
- [x] Static export configured (`output: 'export'`)
- [x] .nojekyll file present
- [x] Sitemap generator script working
- [ ] Repository Pages settings configured (manual step)

## Build Verification
- [x] Local build successful (`npm run build`)
- [x] Sitemap generation successful (`npm run generate-sitemap`)
- [x] Output directory contains all required files:
  - [x] `out/de/`, `out/en/`, `out/vi/` directories
  - [x] `out/sitemap.xml`
  - [x] `out/robots.txt`
  - [x] `out/.nojekyll`
  - [x] `out/_next/` static assets

## Post-Deployment Tasks
- [ ] Verify site accessible at GitHub Pages URL
- [ ] Test all locale URLs (de/, en/, vi/)
- [ ] Check sitemap.xml accessible
- [ ] Check robots.txt accessible
- [ ] Run Lighthouse audit
- [ ] Submit sitemap to Google Search Console
- [ ] (Optional) Configure custom domain

## Deployment Steps

### 1. Enable GitHub Pages
```bash
# Go to repository Settings > Pages
# Source: GitHub Actions
# Branch: main (will be auto-deployed)
```

### 2. Push to Deploy
```bash
git add .
git commit -m "feat: add deployment configuration and sitemap"
git push origin main
```

### 3. Monitor Deployment
```bash
# Watch GitHub Actions: https://github.com/username/talentsCARE/actions
# Wait for workflow to complete (~2-3 minutes)
```

### 4. Verify Deployment
```bash
# Visit: https://talentscare.github.io/
# Test: https://talentscare.github.io/de/
# Test: https://talentscare.github.io/en/
# Test: https://talentscare.github.io/vi/
# Check: https://talentscare.github.io/sitemap.xml
# Check: https://talentscare.github.io/robots.txt
```

## Rollback Procedure
If deployment fails or introduces issues:

```bash
# Option 1: Revert last commit
git revert HEAD
git push origin main

# Option 2: Restore from previous Actions run
# Go to Actions > Select working deployment > Re-run jobs
```

## Success Criteria
- ✅ GitHub Actions workflow passes
- ✅ Site accessible at GitHub Pages URL
- ✅ All 3 locales working
- ✅ sitemap.xml contains 30 URLs with hreflang
- ✅ robots.txt accessible
- ✅ No 404 errors on any page
- ✅ Language switching works in production
- ✅ Mobile responsive on all devices

## Notes
- First deployment may take 5-10 minutes
- Subsequent deployments typically complete in 2-3 minutes
- DNS propagation for custom domain: 24-48 hours
- SSL certificate auto-provisioned by GitHub Pages
