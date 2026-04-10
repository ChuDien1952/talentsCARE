# talentsCARE Project Overview & PDR

## Project Definition

**talentsCARE** is a professional HR consulting and integration services website targeting international talents and employers in Germany. The platform provides consulting, training, coaching, and mentoring services to facilitate successful integration of foreign professionals in the German workplace.

**Project Duration:** April 2026 - Present
**Client:** VIETconsult Group
**Target Markets:** Germany, Vietnam, International
**Primary Language:** German (DE), Secondary: English (EN), Vietnamese (VI)

## Business Objectives

1. **Market Presence:** Establish professional online presence for HR consulting services
2. **Lead Generation:** Attract international talents and employer clients
3. **Service Promotion:** Showcase integration, training, coaching, and mentoring services
4. **Multilingual Reach:** Serve German, English, and Vietnamese speaking audiences
5. **Global Accessibility:** Deploy on GitHub Pages for worldwide access

## Product Vision

A modern, responsive, multilingual website that clearly communicates VIETconsult's value proposition and services to three distinct audience segments: international job seekers, German employers, and HR professionals.

## Phase 01: Project Setup (COMPLETED)

### Objectives
- Initialize scalable Next.js 15 project architecture
- Configure static export for GitHub Pages deployment
- Establish code quality standards
- Set foundation for multilingual infrastructure

### Status: ✅ COMPLETED (2026-04-11)

### Deliverables

#### Configuration Files
- **next.config.ts:** Static export configuration with trailing slash support
- **tailwind.config.ts:** Brand theme with primary (teal), accent (turquoise), highlight (gold) colors
- **tsconfig.json:** TypeScript strict mode enabled
- **.eslintrc.json:** Next.js core-web-vitals rules
- **.prettierrc:** Code formatting with Tailwind class sorting
- **postcss.config.mjs:** Tailwind + Autoprefixer setup

#### Application Structure
- **app/layout.tsx:** Root layout with Google Fonts (Inter, Montserrat)
- **app/page.tsx:** Placeholder home page with brand styling
- **app/globals.css:** Tailwind directives and base styles
- **package.json:** All dependencies and scripts configured

#### Project Structure
```
Directories Created:
- components/ (ui/, layout/, sections/)
- lib/
- messages/ (for Phase 2)
- public/images/
- styles/
```

#### Code Quality Setup
- ESLint configured for Next.js best practices
- Prettier configured with Tailwind plugin
- Format script available (`npm run format`)
- Linting script available (`npm run lint`)

### Key Decisions & Rationale

| Decision | Rationale |
|----------|-----------|
| Next.js 15 App Router | Only compatible with static export for GitHub Pages |
| Static Export | GitHub Pages limitation; i18n via next-intl routing |
| Tailwind CSS | Rapid styling, brand color integration, responsive design |
| TypeScript Strict | Type safety reduces bugs, improves maintainability |
| German Default Locale | Primary market is Germany |

### Acceptance Criteria (ALL MET)

- [x] Next.js 15 initialized with App Router
- [x] Tailwind CSS configured with brand colors
- [x] TypeScript strict mode enabled
- [x] ESLint + Prettier configured
- [x] Project directory structure created
- [x] Dependencies installed successfully
- [x] Development server runs without errors
- [x] Static build produces valid output
- [x] All configuration files follow best practices

## Phase 02: i18n Infrastructure (PENDING)

### Objectives
- Implement next-intl for multilingual routing
- Configure locale detection and switching
- Set up translation message structure
- Create navigation with language selector

### Scope
- Locale-based URL structure (de, en, vi)
- Middleware for automatic locale detection
- Translation message files (de.json, en.json, vi.json)
- Language switcher component

### Expected Deliverables
- `middleware.ts` with next-intl configuration
- Messages directory with base translations
- Locale folder structure in app/
- Language selector component

## Phase 03: Content Translation (PENDING)

### Scope
- Translate core website content (DE → EN, VI)
- SEO optimization for each language
- Cultural adaptation for Vietnamese market

### Deliverables
- Complete messages/ directory with translations
- SEO metadata for all pages
- Cultural content variants

## Phase 04: Component Library (PENDING)

### Scope
- UI components: Button, Card, Input, Modal, etc.
- Layout components: Header, Footer, Navigation
- Section components: Hero, Services, Testimonials, CTA
- Form components with React Hook Form + Zod

## Phase 05: Page Implementation (PENDING)

### Planned Pages
- Home/Landing page
- Services overview
- About company
- Contact/Inquiry form
- Blog/Resources (optional)
- Terms & Privacy

## Phase 06: Deployment & CI/CD (PENDING)

### Objectives
- Deploy to GitHub Pages
- Set up automatic builds on push
- Configure domain mapping
- Monitor performance

## Technical Specifications

### Framework & Runtime
- **Node.js:** LTS version (18+)
- **Next.js:** 15.3.2 (App Router)
- **React:** 19.0.0
- **TypeScript:** 5.7.2

### Production Dependencies
```json
{
  "next": "^15.3.2",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next-intl": "^4.9.0",
  "framer-motion": "^12.38.0",
  "react-hook-form": "^7.72.1",
  "@hookform/resolvers": "^5.2.2",
  "zod": "^4.3.6",
  "tailwindcss": "^3.4.17",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.5.0",
  "class-variance-authority": "^0.7.1",
  "@radix-ui/react-slot": "^1.2.4"
}
```

### Development Dependencies
```json
{
  "typescript": "^5.7.2",
  "@types/node": "^22.10.5",
  "@types/react": "^19.0.6",
  "@types/react-dom": "^19.0.5",
  "eslint": "^9.18.0",
  "eslint-config-next": "^15.3.2",
  "prettier": "^3.8.2",
  "prettier-plugin-tailwindcss": "^0.7.2",
  "autoprefixer": "^10.4.27",
  "postcss": "^8.4.49"
}
```

### Deployment
- **Platform:** GitHub Pages
- **Build:** Static export (`next build`)
- **Hosting:** github.io or custom domain
- **SSL/TLS:** GitHub Pages default HTTPS

## Brand Guidelines

### Color Palette
- **Primary:** #0B5345 (Deep Teal) - Professional, trustworthy
- **Primary Light:** #E8F5F2 - Background
- **Accent:** #148F77 (Turquoise) - Action, highlights
- **Highlight:** #D4AC0D (Gold) - CTAs, premium feel

### Typography
- **Headings:** Montserrat (Display font)
- **Body:** Inter (Clean, readable)

### Visual Style
- Modern, professional
- Clean white space
- Accessibility first

## Success Metrics

### Phase-Specific
- Build time < 2 minutes
- Development server reload < 1 second
- Lighthouse scores: 90+ (all categories)
- 100% TypeScript coverage

### Project-Wide
- 3+ language support
- Mobile responsive (all screen sizes)
- Accessibility: WCAG 2.1 AA compliance
- SEO optimized (meta tags, structured data)

## Development Environment

### Setup
```bash
npm install
npm run dev  # localhost:3000
```

### Build & Test
```bash
npm run build   # Create production build
npm run lint    # Check code quality
npm run format  # Format all code
```

### Code Standards
- ESLint strict mode enabled
- Prettier auto-formatting
- TypeScript strict types
- Commit conventions: semantic-release ready

## Team Roles

| Role | Responsibility |
|------|-----------------|
| Project Manager | Timeline, milestones, stakeholder communication |
| Frontend Dev | React components, Next.js pages, styling |
| QA/Tester | Cross-browser testing, functionality verification |
| DevOps | Build pipeline, deployment, GitHub Pages config |

## Risk Assessment

### Technical Risks
1. **Static Export Limitations:** Dynamic features require pre-rendering
   - Mitigation: Careful planning of dynamic routes
2. **i18n Complexity:** next-intl setup requires careful middleware config
   - Mitigation: Phase 2 dedicated to i18n infrastructure
3. **Performance:** Large translation files could impact load time
   - Mitigation: Lazy load translations, optimize bundle

### Timeline Risks
1. Content translation timeline
   - Mitigation: Parallel translation workflows

## Dependencies & Integrations

### Internal
- VIETconsult branding & content
- Company messaging & services

### External
- GitHub Pages hosting
- Google Fonts (Inter, Montserrat)
- (Future) Contact form service
- (Future) Analytics service

## Maintenance & Support

### Post-Launch
- Monthly security updates
- Quarterly feature releases
- Content updates as needed
- Performance monitoring

### Issue Reporting
- GitHub Issues for bugs
- Pull Request reviews required
- Semantic versioning for releases

## Conclusion

Phase 01 establishes a robust, modern foundation for the talentsCARE website. The Next.js 15 + TypeScript + Tailwind stack provides excellent developer experience and scalability. Phase 02 immediately follows with i18n infrastructure to enable multilingual content delivery.

**Ready for Phase 02 commencement.**
