# Phase 01: Project Setup

## Context

- **Plan:** [plan.md](./plan.md)
- **Research:** [i18n-approaches.md](./research/researcher-01-i18n-approaches.md)
- **Next Phase:** [phase-02-i18n-infrastructure.md](./phase-02-i18n-infrastructure.md)

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-04-10 |
| Description | Initialize Next.js 15 project with static export config |
| Priority | High |
| Status | ✅ COMPLETED |
| Est. Hours | 4 |
| Completion Date | 2026-04-11 |
| Code Review | [code-reviewer-2026-04-10-phase01-setup.md](../../plans/reports/code-reviewer-2026-04-10-phase01-setup.md) |

## Key Insights

- Next.js 15 App Router required (Pages Router i18n incompatible with static export)
- `output: 'export'` mandatory for GitHub Pages
- `trailingSlash: true` prevents 404s on subdirectories
- German (de) as default locale

## Requirements

### Functional
- Next.js 15 with App Router
- Tailwind CSS configured
- TypeScript strict mode
- ESLint + Prettier
- Git repository initialized

### Non-Functional
- Build time <2 minutes
- Development hot reload <1s
- Clean project structure

## Architecture

```
talentsCARE/
├── app/                  # Next.js App Router
├── components/           # React components
├── lib/                  # Utilities
├── messages/             # Translation files (Phase 2)
├── public/               # Static assets
├── styles/               # Global CSS
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .github/workflows/    # CI/CD (Phase 6)
```

## Related Files

After completion:
- `package.json` - Dependencies
- `next.config.ts` - Next.js config with static export
- `tailwind.config.ts` - Tailwind theme (brand colors)
- `tsconfig.json` - TypeScript config
- `.eslintrc.json` - Linting rules
- `app/layout.tsx` - Root layout placeholder

## Implementation Steps

### Step 1: Create Next.js Project (15 min)
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

### Step 2: Install Dependencies (10 min)
```bash
# i18n (Phase 2 prep)
npm install next-intl

# UI/Animations
npm install framer-motion clsx tailwind-merge
npm install @radix-ui/react-slot class-variance-authority

# Forms (MVP)
npm install react-hook-form @hookform/resolvers zod

# Dev tools
npm install -D @types/node prettier prettier-plugin-tailwindcss
```

### Step 3: Configure next.config.ts (10 min)
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath if deploying to subdirectory (username.github.io/repo)
  // basePath: '/talentsCARE',
};

export default nextConfig;
```

### Step 4: Configure Tailwind Theme (20 min)
```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B5345',
          50: '#E8F5F2',
          100: '#C5E8E0',
          500: '#0B5345',
          600: '#094438',
          700: '#07352B',
        },
        accent: {
          DEFAULT: '#148F77',
          light: '#1ABC9C',
        },
        highlight: {
          DEFAULT: '#D4AC0D',
          light: '#F1C40F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### Step 5: Setup Project Structure (15 min)
Create directories:
```bash
mkdir -p components/{ui,layout,sections}
mkdir -p lib
mkdir -p messages
mkdir -p public/images
mkdir -p styles
```

### Step 6: Create Base Layout (20 min)
```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'talentsCARE - HR Consulting',
  description: 'Professional HR consulting services for employers and international talents',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

### Step 7: Create Placeholder Home Page (10 min)
```tsx
// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-primary-50">
      <div className="text-center">
        <h1 className="text-4xl font-display font-bold text-primary">
          talentsCARE
        </h1>
        <p className="mt-4 text-lg text-primary-600">
          Coming Soon - Setup Complete
        </p>
      </div>
    </main>
  );
}
```

### Step 8: Configure ESLint & Prettier (10 min)
```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Step 9: Verify Build (15 min)
```bash
npm run build
npm run start
```
Verify: `/out` directory created with static HTML

### Step 10: Git Commit (5 min)
```bash
git add .
git commit -m "feat: initialize Next.js 15 project with Tailwind"
```

## Todo List

- [x] Run `create-next-app` command
- [x] Install all dependencies
- [x] Configure `next.config.ts` for static export
- [x] Setup Tailwind theme with brand colors
- [x] Create directory structure
- [x] Create base layout with fonts
- [x] Create placeholder home page
- [x] Configure ESLint + Prettier
- [x] Verify build produces static output
- [x] Initial git commit

## Success Criteria

- [x] `npm run build` completes without errors (2.3s build time)
- [x] `/out` directory contains static HTML (1.3MB output)
- [x] Tailwind classes render correctly (verified in HTML)
- [x] TypeScript compiles without errors (strict mode enabled)
- [x] Placeholder page displays at localhost:3000

## Code Review Results

**Status:** ✅ PASSED
**Grade:** A- (Excellent)
**Security:** 0 vulnerabilities, 0 critical issues
**Performance:** 102kB First Load JS, 2.3s build time
**Type Safety:** 0 type errors, strict mode enabled

See detailed review: [code-reviewer-2026-04-10-phase01-setup.md](../../plans/reports/code-reviewer-2026-04-10-phase01-setup.md)

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Node version mismatch | Medium | Low | Use Node 20 LTS |
| Tailwind purge removes classes | Low | Medium | Verify content paths |
| Static export fails | High | Low | Test build early |

## Security Considerations

- No secrets in codebase (env vars for Phase 6)
- `.gitignore` includes `.env*` files
- No external API calls in setup phase

## Next Steps

Upon completion, proceed to [phase-02-i18n-infrastructure.md](./phase-02-i18n-infrastructure.md) for next-intl setup and locale routing.
