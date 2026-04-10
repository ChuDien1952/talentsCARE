# Code Standards & Guidelines

## Overview

This document defines coding standards, conventions, and best practices for the talentsCARE project. All code contributions must adhere to these standards.

**Status:** Phase 01 Complete
**Last Updated:** 2026-04-11
**Enforced By:** ESLint, Prettier, TypeScript strict mode

## TypeScript Standards

### General Rules

```typescript
// ✅ DO: Use TypeScript strict mode
// tsconfig.json includes "strict": true

// ✅ DO: Type all function parameters and returns
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// ❌ DON'T: Use `any` type
function process(data: any) { /* ... */ }

// ✅ DO: Use interfaces for object shapes
interface User {
  id: string;
  name: string;
  email: string;
}

// ❌ DON'T: Use `type` for component props (use interface)
type ButtonProps = {
  label: string;
  onClick: () => void;
};
```

### Import Organization

```typescript
// Order of imports:
// 1. React & Next.js
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

// 3. Relative imports
import Button from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

// 4. Types (if not inline)
import type { User, Product } from '@/lib/types';
```

### Type Definitions

```typescript
// ✅ DO: Define types in dedicated files
// lib/types/index.ts or lib/types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  locale: 'de' | 'en' | 'vi';
}

// ✅ DO: Use discriminated unions for complex types
export type FormState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: string };

// ❌ DON'T: Define types inline for reusable shapes
const user: { id: string; name: string } = { /* ... */ };
```

## Component Standards

### React Component Structure

```typescript
// 1. Imports (organized as per TypeScript standards)
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import type { ButtonProps } from '@/lib/types';

// 2. Type definitions
interface ComponentProps {
  title: string;
  isLoading?: boolean;
  onSubmit: (data: string) => void;
}

// 3. Component definition
export default function MyComponent({
  title,
  isLoading = false,
  onSubmit,
}: ComponentProps) {
  // 4. Hooks
  const [count, setCount] = React.useState(0);

  // 5. Handlers
  const handleClick = () => {
    setCount(count + 1);
  };

  // 6. Effects
  React.useEffect(() => {
    // Cleanup on unmount
    return () => {
      // cleanup
    };
  }, []);

  // 7. JSX
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <Button onClick={handleClick} disabled={isLoading}>
        Click Me
      </Button>
    </motion.div>
  );
}
```

### Component Naming Conventions

```typescript
// ✅ DO: Use PascalCase for components
export default function HomePage() { /* ... */ }
export function ContactForm() { /* ... */ }

// ✅ DO: Use descriptive names
export function HeroSection() { /* ... */ }
export function ServiceCard() { /* ... */ }

// ❌ DON'T: Use non-descriptive names
export function Component1() { /* ... */ }
export function Comp() { /* ... */ }

// ✅ DO: Suffix compound components
export function MenuButton() { /* ... */ }
export function MenuDropdown() { /* ... */ }
```

### Props Interface Naming

```typescript
// ✅ DO: Named as ComponentNameProps
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button(props: ButtonProps) { /* ... */ }

// ✅ DO: Use default values
interface CardProps {
  title: string;
  description?: string;
  borderRadius?: number; // default: 8
}

// ❌ DON'T: Props named `Props` or `IProps`
interface Props { /* ... */ }
interface IButton { /* ... */ }
```

## File Organization

### Directory Structure

```
components/
├── ui/                          # Reusable UI primitives
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Badge.tsx
│   └── index.ts                 # Barrel export
│
├── layout/                      # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── index.ts
│
└── sections/                    # Page sections
    ├── Hero.tsx
    ├── Services.tsx
    ├── Testimonials.tsx
    └── index.ts

lib/
├── types/                       # Type definitions
│   ├── index.ts
│   ├── user.ts
│   └── product.ts
│
├── hooks/                       # Custom React hooks
│   ├── useLocalStorage.ts
│   └── useMediaQuery.ts
│
├── utils/                       # Utility functions
│   ├── classNames.ts
│   ├── formatters.ts
│   └── validators.ts
│
└── i18n/                        # i18n config (Phase 2 - COMPLETED)
    ├── config.ts               # Locale definitions & metadata
    ├── request.ts              # next-intl server configuration
    └── navigation.ts           # Type-safe routing utilities

messages/
├── de.json                      # German translations
├── en.json                      # English translations
└── vi.json                      # Vietnamese translations
```

### One Responsibility Per File

```typescript
// ❌ DON'T: Multiple unrelated components in one file
export function Header() { /* ... */ }
export function Footer() { /* ... */ }
export function Sidebar() { /* ... */ }

// ✅ DO: One main component per file
// components/layout/Header.tsx
export default function Header() { /* ... */ }

// ✅ DO: Helper components in separate files
// components/layout/HeaderLogo.tsx
export function HeaderLogo() { /* ... */ }

// components/layout/HeaderNav.tsx
export function HeaderNav() { /* ... */ }
```

### Barrel Exports

```typescript
// components/ui/index.ts
export { default as Button } from './Button';
export type { ButtonProps } from './Button';
export { default as Card } from './Card';
export type { CardProps } from './Card';

// Usage
import { Button, Card } from '@/components/ui';
```

## Styling Standards

### Tailwind CSS Usage

```typescript
// ✅ DO: Use Tailwind utility classes
<div className="flex items-center justify-between gap-4">
  <h1 className="text-2xl font-display font-bold text-primary">
    Title
  </h1>
  <button className="rounded-lg bg-accent px-4 py-2 text-white hover:bg-accent-dark">
    Action
  </button>
</div>

// ✅ DO: Use responsive prefixes
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>

// ✅ DO: Use clsx for conditional classes
import clsx from 'clsx';

<button
  className={clsx(
    'px-4 py-2 rounded-lg transition-colors',
    isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'
  )}
>
  Toggle
</button>

// ❌ DON'T: Use inline styles
<div style={{ padding: '16px', backgroundColor: 'blue' }}>
  {/* */}
</div>

// ❌ DON'T: Use CSS modules alongside Tailwind
// (Pick one consistently)
```

### Class Variance Authority (CVA)

```typescript
import { cva, type VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  // Base styles applied to all variants
  'px-4 py-2 rounded-lg font-medium transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-600',
        secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        outline: 'border-2 border-primary text-primary hover:bg-primary-50',
      },
      size: {
        sm: 'text-sm px-3 py-1',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonStyles>;

interface ButtonProps extends ButtonVariants {
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  variant,
  size,
  onClick,
  disabled,
  children,
}: ButtonProps & { children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles({ variant, size })}
    >
      {children}
    </button>
  );
}
```

### Color Usage

```typescript
// ✅ DO: Use theme colors defined in tailwind.config.ts
<div className="bg-primary text-white">Primary Color</div>
<div className="bg-accent text-white">Accent Color</div>
<div className="bg-highlight text-gray-900">Highlight Color</div>

// ✅ DO: Use shade variations
<div className="bg-primary-50">Very Light</div>
<div className="bg-primary-100">Light</div>
<div className="bg-primary-500">Medium</div>
<div className="bg-primary-600">Dark</div>
<div className="bg-primary-700">Very Dark</div>

// ❌ DON'T: Use arbitrary colors
<div className="bg-[#FF5733]">Avoid hardcoding colors</div>
```

## Naming Conventions

### Variables and Functions

```typescript
// ✅ DO: Use camelCase for variables and functions
const userName = 'John';
function getUserById(id: string) { /* ... */ }

// ✅ DO: Use descriptive names
const isLoading = true;
const handleButtonClick = () => { /* ... */ };
const fetchUserData = async () => { /* ... */ };

// ❌ DON'T: Use single-letter variables (except in loops)
const u = 'user';
function proc() { /* ... */ }

// ✅ DO: Use `is`, `has`, `can` prefixes for booleans
const isVisible = true;
const hasError = false;
const canSubmit = true;

// ❌ DON'T: Use non-boolean prefixes for booleans
const loading = true;  // Ambiguous
const error = false;   // Ambiguous
```

### Constants

```typescript
// ✅ DO: Use UPPER_SNAKE_CASE for compile-time constants
const MAX_RETRIES = 3;
const API_TIMEOUT = 5000;
const SUPPORTED_LOCALES = ['de', 'en', 'vi'] as const;

// ✅ DO: Define in separate files
// lib/constants.ts
export const PAGE_SIZE = 20;
export const DEBOUNCE_DELAY = 300;
```

### Enum Naming

```typescript
// ✅ DO: Use PascalCase for enums
enum UserRole {
  Admin = 'admin',
  Editor = 'editor',
  Viewer = 'viewer',
}

// ✅ DO: Use string enums for serialization
enum Locale {
  German = 'de',
  English = 'en',
  Vietnamese = 'vi',
}

// Usage
const currentLocale: Locale = Locale.German;
```

## Function Standards

### Function Declaration

```typescript
// ✅ DO: Use function declarations for top-level functions
function getUserById(id: string): Promise<User> {
  // ...
}

// ✅ DO: Use arrow functions for callbacks/handlers
const handleClick = (event: React.MouseEvent) => {
  // ...
};

// ✅ DO: Export default for single export
export default function HomePage() {
  // ...
}

// ✅ DO: Named exports for utilities
export function formatDate(date: Date): string {
  // ...
}

// ❌ DON'T: Mix function styles inconsistently
const getUserById = (id: string) => { /* */ };
const handleClick = function(event: React.MouseEvent) { /* */ };
```

### Function Length

```typescript
// ✅ DO: Keep functions small and focused
// Aim for 20-30 lines max per function

// ❌ DON'T: Create "God" functions
function processUserData() {
  // Fetches data
  // Validates data
  // Transforms data
  // Saves data
  // Sends notifications
  // Logs analytics
  // ... (100+ lines)
}

// Better approach:
function processUserData() {
  const user = await fetchUser();
  validateUser(user);
  const transformed = transformUser(user);
  await saveUser(transformed);
  await notifyUser(user);
}
```

## Comments & Documentation

### JSDoc Comments

```typescript
/**
 * Formats a date to locale-specific string
 * @param date - The date to format
 * @param locale - The locale code (de, en, vi)
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: string): string {
  // Implementation
}

/**
 * Component that displays a list of services
 * @props {string} title - Section title
 * @props {Service[]} services - Array of services to display
 * @props {(id: string) => void} onSelectService - Callback when service is selected
 */
interface ServicesProps {
  title: string;
  services: Service[];
  onSelectService: (id: string) => void;
}
```

### Inline Comments

```typescript
// ✅ DO: Comment *why*, not *what*
// Use Set for O(1) lookup instead of array's O(n)
const userIds = new Set(ids);

// ❌ DON'T: Comment obvious code
// Set the isLoading flag to true
setIsLoading(true);

// ✅ DO: Mark temporary solutions
// TODO: Refactor this after Phase 2 i18n setup
// FIXME: Handle edge case when locale is null
// HACK: Workaround for browser bug (see issue #123)
```

## Error Handling

### Try-Catch Patterns

```typescript
// ✅ DO: Type error handling
try {
  await saveData();
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation failed:', error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network request failed:', error.message);
  } else {
    console.error('Unexpected error:', error);
  }
}

// ❌ DON'T: Ignore errors
try {
  await saveData();
} catch (error) {
  // Silently fail
}

// ❌ DON'T: Catch without narrowing
try {
  await saveData();
} catch (error) {
  console.error(error);  // error is unknown
}
```

### Validation with Zod

```typescript
import { z } from 'zod';

// Define schemas
const contactSchema = z.object({
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message too short'),
  locale: z.enum(['de', 'en', 'vi']),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Use in forms
async function handleSubmit(data: unknown) {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    // Handle validation errors
    console.error(result.error.flatten());
    return;
  }

  // data is now typed as ContactFormData
  await sendContact(result.data);
}
```

## Git & Commit Standards

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>

# Example:
feat(components): add Button component with variants

Implement reusable Button component with support for
primary, secondary, and outline variants. Component
uses class-variance-authority for variant management.

Closes #42
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style (formatting, semicolons, etc.)
- `refactor`: Code refactoring without feature changes
- `perf`: Performance improvements
- `test`: Test additions/changes
- `chore`: Build, dependencies, tooling

### Branch Naming

```
feature/component-name
fix/issue-description
docs/page-section
refactor/code-cleanup
```

## Testing Standards (Future)

**Phase 5+ Planned**

- Unit tests with Jest + React Testing Library
- Test file location: `__tests__/` or `.test.tsx` suffix
- Test coverage: 80%+ target
- Snapshot tests: Use sparingly, prefer specific assertions

## Linting & Formatting

### ESLint Configuration

```json
{
  "extends": "next/core-web-vitals"
}
```

### Prettier Configuration

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Pre-commit Checks

```bash
npm run lint      # Run ESLint
npm run format    # Auto-format with Prettier
```

## Performance Standards

### Code Splitting

```typescript
// ✅ DO: Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Loading...</p>,
});

// ✅ DO: Use Suspense for async components (React 19+)
import { Suspense } from 'react';

<Suspense fallback={<Skeleton />}>
  <AsyncComponent />
</Suspense>
```

### Bundle Size

- Aim for < 500KB main bundle (minified + gzipped)
- Monitor with `next/bundle-analyzer`

## i18n Standards (Phase 2)

### Locale Type Safety

```typescript
// ✅ DO: Use Locale type from config
import { type Locale, locales, defaultLocale } from '@/lib/i18n/config';

interface LocaleParams {
  locale: Locale;  // Type-safe, only 'de' | 'en' | 'vi'
}

// ✅ DO: Validate incoming locale strings
import { isValidLocale } from '@/lib/i18n/config';

function processLocale(locale: string) {
  if (!isValidLocale(locale)) {
    throw new Error(`Invalid locale: ${locale}`);
  }
  // locale is now narrowed to Locale type
}

// ❌ DON'T: Use string literals for locales
const locale: string = 'de';  // Too broad

// ❌ DON'T: Hardcode locales
const myLocales = ['de', 'en', 'vi'];  // Not DRY, not maintainable
```

### Using Translations in Components

```typescript
// ✅ DO: Use useTranslations() in client components
'use client';

import { useTranslations } from 'next-intl';

export function ServiceCard() {
  const t = useTranslations('services');

  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
}

// ✅ DO: Namespace translations for better organization
// messages/de.json structure:
{
  "services": {
    "title": "Leistungen",
    "description": "..."
  }
}

// ✅ DO: Use nested keys for complex content
<h1>{t('hero.headline')}</h1>
<p>{t('hero.description')}</p>

// ❌ DON'T: Use hardcoded strings
<h1>Leistungen</h1>  // Not translatable

// ❌ DON'T: Mix locales in same component
const locale = useLocale();
if (locale === 'de') {
  return <GermanContent />;
} else if (locale === 'en') {
  return <EnglishContent />;
}
// Better: Use translations and single JSX
```

### Locale-Aware Routing

```typescript
// ✅ DO: Use next-intl navigation utilities
import { useRouter, usePathname, Link } from '@/lib/i18n/navigation';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    // Automatically preserves pathname but changes locale
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button onClick={() => handleChange('en')}>
      English
    </button>
  );
}

// ✅ DO: Use Link for navigation
<Link href="/services">Services</Link>
// Automatically includes current locale

// ❌ DON'T: Use next/navigation directly for i18n
import { useRouter } from 'next/navigation';
// This bypasses locale handling

// ❌ DON'T: Manually construct locale URLs
const url = `/de/services`;  // Fragile, hard to maintain
// Better: Use Link or router with locale param
```

### Metadata with hreflang (SEO)

```typescript
// ✅ DO: Generate metadata with hreflang tags
import { locales } from '@/lib/i18n/config';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

  return {
    title: 'Page Title',
    description: 'Page description',
    alternates: {
      canonical: `${baseUrl}/${locale}/page`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/page`])
      ),
    },
  };
}

// ✅ DO: Use locale in HTML lang attribute
<html lang={locale}>
  {/* Content */}
</html>

// ✅ DO: Implement hreflang links for SEO
// Generated by generateMetadata above
```

### Message File Organization

```json
// ✅ DO: Use hierarchical structure
{
  "common": {
    "nav": { "home": "...", "about": "..." },
    "cta": { "learnMore": "...", "contact": "..." }
  },
  "home": {
    "hero": { "headline": "...", "subtitle": "..." },
    "services": { "title": "..." }
  },
  "services": {
    "employers": { "title": "...", "description": "..." },
    "talents": { "title": "...", "description": "..." }
  }
}

// ✅ DO: Keep messages in sync across locales
// All three files (de.json, en.json, vi.json) must have same structure

// ✅ DO: Use meaningful keys
"learnMore" → ✅ Good
"btn1" → ❌ Bad

// ✅ DO: Mark plural/interpolation
{
  "items": {
    "count": "{count, plural, one {# item} other {# items}}"
  }
}
```

### Layout Locale Configuration

```typescript
// ✅ DO: Set up locale layout properly
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  // Pre-generate all locale variants at build time
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering for this locale
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

// ❌ DON'T: Skip generateStaticParams
// Without it, static export won't work

// ❌ DON'T: Skip locale validation
// Invalid locales will break the site
```

## Accessibility Standards

### WCAG 2.1 AA Compliance

```typescript
// ✅ DO: Use semantic HTML
<button onClick={handleClick}>Click me</button>
<nav>Navigation</nav>
<main>Content</main>

// ✅ DO: Include alt text for images
<img src="image.jpg" alt="Description of image" />

// ✅ DO: Use proper heading hierarchy
<h1>Main Title</h1>
<h2>Subsection</h2>
<h3>Sub-subsection</h3>

// ❌ DON'T: Use divs for buttons
<div onClick={handleClick}>Not a button</div>

// ✅ DO: Include ARIA labels when needed
<button aria-label="Close modal" onClick={close}>
  ×
</button>
```

## Code Review Checklist

- [ ] TypeScript strict mode compliance
- [ ] All props typed with interfaces
- [ ] No `any` types
- [ ] Descriptive naming
- [ ] Single responsibility per component
- [ ] Proper error handling
- [ ] No hardcoded strings (use i18n Phase 2)
- [ ] Accessible HTML structure
- [ ] Performance optimizations applied
- [ ] Comments for complex logic
- [ ] Tests included (Phase 5+)

## Conclusion

These standards ensure:
1. **Consistency:** Uniform code style across team
2. **Maintainability:** Clear code is easy to update
3. **Performance:** Best practices built-in
4. **Type Safety:** TypeScript strict mode
5. **Developer Experience:** Clear conventions reduce cognitive load

All team members must follow these standards. Questions? Refer to existing code or create a discussion issue.
