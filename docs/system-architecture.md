# System Architecture

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        BROWSER (CLIENT)                         │
│  (German, English, Vietnamese locales)                          │
└────────────────────┬────────────────────────────────────────────┘
                     │ HTTPS
                     ↓
┌─────────────────────────────────────────────────────────────────┐
│                  GITHUB PAGES (STATIC HOST)                     │
│  ├─ Static HTML, CSS, JS files                                 │
│  ├─ Domain: VIETconsult.github.io or custom domain             │
│  └─ CDN: GitHub's edge locations globally                      │
└────────────────────┬────────────────────────────────────────────┘
                     │ Static export from Next.js build
                     ↓
┌─────────────────────────────────────────────────────────────────┐
│                   NEXT.JS BUILD SYSTEM                          │
│  ├─ Compiles TypeScript → JavaScript                           │
│  ├─ Optimizes bundle with tree-shaking                         │
│  ├─ Pre-renders all pages (static generation)                  │
│  ├─ Bundles Tailwind CSS utilities (used only)                 │
│  └─ Creates /out directory for static export                   │
└─────────────────────────────────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────────────┐
│            SOURCE CODE (Next.js App Router)                     │
│  ├─ app/                    # App Router pages                 │
│  ├─ app/[locale]/          # Locale-based routing              │
│  ├─ components/            # React components                  │
│  ├─ lib/                   # Utilities                         │
│  └─ messages/              # i18n translations                 │
└─────────────────────────────────────────────────────────────────┘
```

## Architecture Layers

### 1. Routing Layer (Next.js App Router)

```
app/
├── layout.tsx              # Root layout (all pages)
├── page.tsx                # Home page (/)
├── [locale]/              # Dynamic locale segment
│   ├── layout.tsx         # Locale-scoped layout
│   ├── page.tsx           # Localized home (/(de|en|vi))
│   ├── services/          # Example: /de/services
│   ├── about/             # Example: /de/about
│   ├── contact/           # Example: /de/contact
│   └── [...slug]/         # Catch-all for nested routes
└── api/                   # API routes (if needed)
```

**Routing Mechanism:**
- Locale extracted from URL path: `/{locale}/page`
- Default locale (de) used if not specified
- Middleware (Phase 2) handles automatic redirection
- Static export requires all routes pre-rendered via `generateStaticParams()`

### 2. Component Architecture

```
components/
├── ui/                     # Reusable UI primitives
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Input.tsx
│   └── Badge.tsx
│
├── layout/                 # Layout components
│   ├── Header.tsx         # Navigation, logo
│   ├── Footer.tsx         # Footer with links
│   ├── Navigation.tsx     # Menu component
│   └── Sidebar.tsx        # Sidebar (if needed)
│
└── sections/              # Full-width page sections
    ├── Hero.tsx           # Hero section
    ├── Services.tsx       # Services overview
    ├── Testimonials.tsx   # Client testimonials
    ├── CTA.tsx            # Call-to-action
    └── Contact.tsx        # Contact form
```

**Component Principles:**
- Functional components with TypeScript
- Props fully typed
- Styling via className + Tailwind
- No prop drilling: use context for theme/locale
- Animations via Framer Motion

### 3. Styling Layer

```
Global Styles:
app/globals.css
├─ @tailwind directives
├─ @layer customizations
└─ Font variable definitions

Component Styles:
├─ Inline Tailwind classes
├─ CVA (Class Variance Authority) for complex variants
└─ Framer Motion for animations

Theme:
tailwind.config.ts
├─ Color: Primary (teal), Accent (turquoise), Highlight (gold)
├─ Typography: Montserrat (display), Inter (body)
└─ Spacing, sizing, breakpoints (Tailwind defaults)
```

**CSS Flow:**
1. Tailwind directives injected in globals.css
2. PostCSS processes Tailwind classes
3. Autoprefixer adds vendor prefixes
4. Unused styles pruned during build
5. Final CSS bundled with HTML

### 4. i18n Layer (Phase 2) - COMPLETED

**Architecture:**
```
messages/                 # Translation source files
├── de.json             # German (default locale)
├── en.json             # English
└── vi.json             # Vietnamese

lib/i18n/               # i18n configuration & utilities
├── config.ts          # Locale definitions, flags, names
├── request.ts         # next-intl server configuration
└── navigation.ts      # Type-safe routing utilities

middleware.ts          # Locale detection & URL routing

components/ui/
└── language-switcher.tsx  # User language switcher UI
```

**Translation Structure (Example - de.json):**
```json
{
  "common": {
    "nav": {
      "home": "Startseite",
      "services": "Leistungen",
      "about": "Über uns",
      "contact": "Kontakt"
    },
    "cta": {
      "learnMore": "Mehr erfahren",
      "contact": "Kontaktieren Sie uns"
    }
  },
  "home": {
    "title": "talentsCARE",
    "hero": {
      "headline": "Ihr Partner für erfolgreiche Integration"
    }
  }
}
```

**Multilingual Routing:**
- URL Pattern: `/{locale}/page` (e.g., /de/, /en/, /vi/)
- Default locale: German (de)
- Locale prefix: Always shown in URL (`localePrefix: 'always'`)
- Static pre-rendering: All locale variants generated at build time

**SEO & Internationalization:**
1. Middleware detects & routes by locale
2. `setRequestLocale()` enables static rendering per locale
3. `generateStaticParams()` pre-renders all language variants
4. `generateMetadata()` creates hreflang tags for canonical URLs
5. HTML lang attribute matches current locale

**i18n Flow:**
1. User visits `/en/services` or `/de/services`
2. Middleware extracts locale from URL
3. Layout calls `setRequestLocale(locale)` for static generation
4. `NextIntlClientProvider` wraps client components with messages
5. `useTranslations()` hook provides locale-specific strings
6. `LanguageSwitcher` allows runtime locale switching via router.replace()
7. Navigation context ensures URLs include locale prefix

### 5. Data Layer

**Phase 1 Status:** No data fetching yet

**Planned Data Sources (Phase 4+):**
- Static JSON files in `public/` or `lib/data/`
- Environment variables for config
- Contact form → email/service (external)
- (Optional) CMS for blog content

**No Server-Side Rendering:** All data must be static or pre-built during `next build`

### 6. Form Handling (Phase 4)

```
lib/forms/
├── schemas/              # Zod validation schemas
│   ├── contact.ts
│   └── inquiry.ts
└── hooks/
    └── useFormWithValidation.ts

components/forms/
├── ContactForm.tsx       # Example form
└── InquiryForm.tsx
```

**Form Stack:**
- React Hook Form (state management)
- Zod (runtime validation)
- Client-side validation
- Optional: Backend form service (Phase 5+)

## Technology Stack Details

### Next.js 15 App Router

**Why App Router?**
- Modern React features (Server Components, Suspense)
- Improved file-based routing
- Built-in optimization
- Better TypeScript support
- Essential for static export with i18n

**Key Features Used:**
- File-based routing
- Static generation with `generateStaticParams()`
- Dynamic parameters with `[locale]`
- Layout nesting
- Client/Server Component split

### TypeScript

**Configuration:**
- Strict mode enabled (`"strict": true`)
- Path alias: `@/*` for imports
- DOM + ESNext lib targets
- Module: ESNext with bundler resolution

**Usage:**
- Full codebase typed
- Component props interfaces
- API response types
- Form schema types (Zod)

### Tailwind CSS

**Configuration:**
- Content scanning: `app/**`, `components/**`
- Extended theme colors (primary, accent, highlight)
- Font variables: `--font-inter`, `--font-display`
- No custom plugins (kept minimal)

**Utility-First Approach:**
- Responsive prefixes: `md:`, `lg:`, `xl:`
- Hover/active states: `hover:`, `focus:`
- Dark mode support (if added later)

### Framer Motion

**Use Cases:**
- Page transitions
- Component enter/exit animations
- Scroll-triggered animations
- Interactive hover effects

**Implementation:**
- Lazy loading via dynamic imports
- Performance optimized
- Mobile-friendly (reduced motion respected)

### React Hook Form + Zod

**Why This Combination?**
- Minimal re-renders (only field-level)
- Type-safe validation
- Zero external dependencies for validation
- Excellent TypeScript support

**Usage Pattern:**
```typescript
const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

const form = useForm({ resolver: zodResolver(schema) });
```

## Build & Deployment Pipeline

### Development

```
npm run dev
↓
Next.js dev server (port 3000)
↓
File watcher detects changes
↓
Hot module replacement (HMR)
↓
Browser auto-refreshes
```

**Performance:**
- Hot reload: < 1s
- TypeScript check: Incremental
- ESLint: On-save (IDE integration)

### Production Build

```
npm run build
↓
TypeScript compilation
↓
Next.js optimization
├─ Tree shaking
├─ Code splitting
├─ Image optimization (disabled for static)
└─ CSS minification
↓
Static generation
├─ generateStaticParams() per route
├─ Pre-render all pages
└─ Generate out/ directory
↓
Build artifacts ready for deployment
```

**Build Output:**
- `/out` directory with static files
- Each route → `.html` file
- Bundled JS/CSS in shared directories
- Images in `_next/image/` (if optimized)

### Deployment to GitHub Pages

```
GitHub Pages Host
├─ Static files served directly
├─ No server-side processing
├─ Global CDN (GitHub's infrastructure)
└─ HTTPS automatically enabled

Deployment Trigger:
├─ Push to main branch
├─ GitHub Actions CI/CD (Phase 6)
├─ Build Next.js project
├─ Commit to gh-pages branch
└─ GitHub Pages auto-deploys
```

**Key Configurations:**
- `output: 'export'` in next.config.ts
- `trailingSlash: true` for static routing
- `images.unoptimized: true`
- Optional: `basePath` for subdirectory deployment

## State Management

### Phase 1 (Current)

- Component-level state (React hooks)
- No global state needed yet

### Phase 2+

- **Locale Context:** Current language for i18n
- **Theme Context:** (if dark mode added)
- **Form State:** React Hook Form (local)

**Decision:** Keep it simple until needed (YAGNI principle)

## Performance Optimization

### Build-Time Optimizations

- **Static Generation:** All pages pre-rendered
- **Code Splitting:** Automatic by Next.js
- **Tree Shaking:** Unused code removed
- **CSS Purging:** Tailwind unused classes removed

### Runtime Optimizations

- **Image Optimization:** Disabled (static export)
- **Font Loading:** Google Fonts with `next/font`
- **Lazy Loading:** Dynamic imports for heavy components
- **Code Splitting:** Automatic per page

### Metrics Targets

- Lighthouse: 90+ (all categories)
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1

## Security Considerations

### Phase 1

- No sensitive data handling yet
- TypeScript provides type safety
- ESLint catches common mistakes

### Future Phases

- **Contact Form:** Server-side validation required
- **Environment Variables:** `.env.local` for secrets
- **Content Security Policy:** Configure if needed
- **HTTPS:** GitHub Pages provides automatic SSL

## Scalability

### Strengths

- Static deployment scales infinitely
- No database → no scaling concerns
- CDN delivery → global performance
- Stateless architecture

### Limitations

- Dynamic content requires rebuild
- Real-time features not possible
- Large form submissions need backend
- Analytics require external service

### Growth Path

1. Phase 1-3: Static content site
2. Phase 4+: Add contact form handling
3. Future: External API for dynamic features
4. Future: Optional: Transition to serverless (Vercel, etc.) if needed

## File Organization Rationale

| Directory | Purpose | Growth Path |
|-----------|---------|-------------|
| app/ | Next.js pages & routing | Add new routes, nested layouts |
| components/ | Reusable React components | Create subdirectories as library grows |
| lib/ | Utilities, helpers, config | Add domain-specific modules |
| messages/ | Translation files | New languages, message structure |
| public/ | Static assets | Images, icons, documents |
| styles/ | CSS modules (if needed) | Alternative to Tailwind (unlikely) |

## Dependency Management

### Production Dependencies (Minimal)

- **next, react:** Framework
- **next-intl:** i18n
- **framer-motion:** Animations
- **react-hook-form, zod:** Forms
- **Tailwind ecosystem:** Styling
- **@radix-ui/react-slot:** Composition helper

**Total Size:** ~500KB minified + gzipped (before tree-shaking)

### Development Dependencies

- **TypeScript:** Type checking
- **ESLint:** Linting
- **Prettier:** Formatting
- **Tailwind CSS:** Build-time processing
- **PostCSS, Autoprefixer:** CSS processing

## Testing Strategy (Future)

**Phase 5+ (Proposed)**

- Unit: Jest + React Testing Library
- E2E: Playwright or Cypress
- Visual: Chromatic (optional)
- Coverage: 80%+ target

## Monitoring & Analytics (Future)

**Phase 6+ (Proposed)**

- Performance: Vercel Web Analytics (or similar)
- Error tracking: Sentry
- User analytics: Google Analytics 4

## Conclusion

The architecture is optimized for:
1. **Static Export:** Pure static deployment
2. **Multilingual:** i18n-ready routing
3. **Performance:** Build-time optimization, minimal runtime cost
4. **Developer Experience:** Modern tooling, TypeScript, clear structure
5. **Maintainability:** Component-based, clear separation of concerns
6. **Scalability:** Stateless, CDN-ready, simple enough to extend

Ready for Phase 2 implementation.
