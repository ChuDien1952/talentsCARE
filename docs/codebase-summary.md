# talentsCARE Codebase Summary

## Overview

**talentsCARE** is a multilingual Next.js 15 website for HR consulting and integration services targeting international talents and employers in Germany. The project supports three languages: German (primary), English, and Vietnamese.

**Status:** Phase 02 (i18n Infrastructure) - COMPLETED
**Previous:** Phase 01 (Project Setup) - Completed

## Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js | 15.3.2 |
| Language | TypeScript | 5.7.2 |
| Styling | Tailwind CSS | 3.4.17 |
| i18n | next-intl | 4.9.0 |
| Forms | React Hook Form + Zod | 7.72.1 + 4.3.6 |
| Animations | Framer Motion | 12.38.0 |
| Deployment | Static Export | GitHub Pages |
| Node Typing | @types/node | 22.10.5 |
| React Version | React + React DOM | 19.0.0 |

## Project Structure

```
talentsCARE/
├── app/                          # Next.js 15 App Router
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Home page placeholder
│   ├── globals.css              # Global Tailwind imports
│   └── [locale]/                # Localized routes (Phase 2)
│
├── components/                   # React components
│   ├── ui/                      # UI primitives (Button, Card, etc.)
│   ├── layout/                  # Layout components (Header, Footer, Nav)
│   └── sections/                # Page sections (Hero, Services, etc.)
│
├── lib/                         # Utilities & helpers
│   └── utils.ts                # Common utility functions
│
├── messages/                    # i18n translation files (Phase 2)
│   ├── de.json                 # German translations
│   ├── en.json                 # English translations
│   └── vi.json                 # Vietnamese translations
│
├── public/                      # Static assets
│   └── images/                 # Image files
│
├── styles/                      # Additional stylesheets
│
├── Configuration Files
│   ├── next.config.ts          # Next.js config (static export)
│   ├── tailwind.config.ts      # Tailwind theme config
│   ├── tsconfig.json           # TypeScript configuration
│   ├── package.json            # Dependencies
│   ├── .eslintrc.json          # ESLint rules
│   ├── .prettierrc              # Prettier formatting
│   └── postcss.config.mjs       # PostCSS plugins
│
└── Documentation
    ├── README.md                # Project overview
    ├── docs/
    │   ├── project-overview-pdr.md      # Project requirements
    │   ├── codebase-summary.md          # This file
    │   ├── system-architecture.md       # Architecture details
    │   ├── code-standards.md            # Code conventions
    │   ├── setup-guide.md               # Setup instructions
    │   └── deployment-guide.md          # Deployment instructions
    └── plans/                   # Development phases
        ├── 2026-04-10-talentscare-multilingual-website/
        │   ├── phase-01-setup.md
        │   ├── phase-02-i18n-infrastructure.md
        │   ├── phase-03-content-translation.md
        │   ├── phase-04-components.md
        │   ├── phase-05-pages.md
        │   ├── phase-06-deployment.md
        │   └── plan.md
        └── reports/             # Phase completion reports
```

## Key Configuration Details

### Next.js Configuration
- **Output Mode:** Static export (`output: 'export'`)
- **Trailing Slashes:** Enabled (`trailingSlash: true`) - required for static routes
- **Image Optimization:** Disabled for static deployment (`unoptimized: true`)
- **Base Path:** Ready for GitHub Pages subdirectory deployment (comment-based config)

### Tailwind Theme
- **Primary Color:** Deep teal (`#0B5345`) with shade variations
- **Accent Color:** Turquoise (`#148F77`) for highlights
- **Highlight Color:** Gold (`#D4AC0D`) for CTAs
- **Font Stack:** Inter (body), Montserrat (display)

### TypeScript Configuration
- **Target:** ES2017 for broad browser support
- **Module:** ESNext with bundler resolution
- **JSX:** Preserve (handled by Next.js)
- **Path Alias:** `@/*` maps to root directory

## Development Workflow

### Scripts
```bash
npm run dev         # Start development server (port 3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint checks
npm run format      # Format code with Prettier
```

### Code Quality Tools
- **Linting:** ESLint with Next.js core-web-vitals config
- **Formatting:** Prettier with Tailwind CSS plugin for class sorting
- **Version Control:** Git-based workflow

## Completed in Phase 01

- [x] Next.js 15 project initialization
- [x] TypeScript strict mode configuration
- [x] Tailwind CSS with brand theme colors
- [x] ESLint + Prettier setup
- [x] Project structure created
- [x] Root layout with Google Fonts (Inter, Montserrat)
- [x] Placeholder home page
- [x] Static export configuration for GitHub Pages
- [x] Package.json with all dependencies

## Completed in Phase 02 - i18n Infrastructure

### Core i18n Setup
- [x] **lib/i18n/config.ts:** Locale definitions (de, en, vi) with metadata
  - Supports German (default), English, Vietnamese
  - Locale names and flags configured
  - `isValidLocale()` type guard function for runtime validation

- [x] **lib/i18n/request.ts:** next-intl server configuration
  - Dynamic message loading per locale
  - Type-safe request-side translation handling

- [x] **lib/i18n/navigation.ts:** Locale-aware navigation utilities
  - Type-safe `Link`, `useRouter`, `usePathname` from next-intl
  - Automatically preserves/updates locale in URLs

### Middleware & Routing
- [x] **middleware.ts:** Locale detection and URL routing
  - Extracts locale from URL path
  - Always includes locale prefix (`/de/`, `/en/`, `/vi/`)
  - Default to German when no locale specified

- [x] **next.config.ts:** next-intl plugin integration
  - Configured with `createNextIntlPlugin`
  - Static export enabled with trailing slashes

### Layout & Metadata
- [x] **app/[locale]/layout.tsx:** Locale-scoped layout
  - `generateStaticParams()` pre-renders all 3 language variants
  - `generateMetadata()` with hreflang tags for SEO
  - `setRequestLocale()` for static rendering
  - `NextIntlClientProvider` wraps client components
  - Proper HTML lang attribute per locale

### Translations
- [x] **messages/de.json:** German translations (source language)
  - Hierarchical structure with namespaces (common, home, services, etc.)
  - ~50KB baseline for message file

- [x] **messages/en.json:** English translations
  - Identical structure to German
  - Professional English tone for business context

- [x] **messages/vi.json:** Vietnamese translations
  - Identical structure to German
  - Formal Vietnamese appropriate for target audience

### UI Components
- [x] **components/ui/language-switcher.tsx:** User language switcher
  - Accessible with ARIA labels
  - Visual indication of active language
  - Preserves current page path when switching
  - Displays flag emojis and locale codes

### SEO & Accessibility
- [x] Hreflang tags for all locales (in generateMetadata)
- [x] Proper HTML lang attribute
- [x] Locale-specific canonical URLs
- [x] WCAG 2.1 AA compliant language switcher
- [x] Type-safe locale handling throughout

### Documentation
- [x] **docs/i18n-guide.md:** Comprehensive i18n implementation guide
- [x] **docs/translation-workflow.md:** Translation management workflow
- [x] **docs/code-standards.md:** Updated with i18n patterns
- [x] **docs/system-architecture.md:** Updated with i18n layer details

## Planned Phases

**Phase 03:** Content translation (DE/EN/VI)
- Translate home page content
- Translate services content
- Review and QA translations

**Phase 04:** Component library development
- Create reusable UI components
- Ensure all components support i18n

**Phase 05:** Page implementation
- Build marketing pages
- Integrate components
- Add interactive features

**Phase 06:** GitHub Pages deployment & CI/CD

## Important Notes

1. **Static Export:** All dynamic routes must use `generateStaticParams()` for static generation
2. **Images:** Must use `<img>` or Image with `unoptimized={true}`
3. **Default Locale:** German (de) set as default in app/layout.tsx
4. **No Server-Side Rendering:** All pages must be pre-renderable for static export

## Dependencies Overview

### Production
- **next-intl:** Multilingual routing & translations
- **framer-motion:** Smooth animations
- **react-hook-form + zod:** Type-safe form handling
- **clsx, class-variance-authority, tailwind-merge:** Utility class management

### Development
- **TypeScript:** Type safety
- **ESLint:** Code quality
- **Prettier:** Code formatting
- **Tailwind CSS:** Utility-first styling

## File Statistics

- Total Files: 27
- Total Tokens: ~46k
- Key Focus: Configuration & setup files

## Next Steps

1. Review Phase 02 plan for i18n infrastructure
2. Begin locale folder structure setup
3. Implement next-intl middleware configuration
4. Create translation message files
