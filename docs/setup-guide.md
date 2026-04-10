# Setup & Development Guide

## Prerequisites

- **Node.js:** 18.0.0 or higher (LTS recommended)
- **npm:** 8.0.0 or higher
- **Git:** Latest version
- **Code Editor:** VS Code recommended with extensions

## Initial Setup

### 1. Clone Repository

```bash
git clone https://github.com/VIETconsult/talentsCARE.git
cd talentsCARE
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required dependencies defined in `package.json`:

**Production Dependencies:**
- Next.js 15 framework
- React 19 library
- Tailwind CSS for styling
- next-intl for internationalization
- React Hook Form + Zod for forms
- Framer Motion for animations

**Development Dependencies:**
- TypeScript for type checking
- ESLint for code quality
- Prettier for code formatting
- And supporting tools

**Installation takes:** 2-3 minutes

### 3. Verify Installation

```bash
npm run dev
```

Expected output:
```
▲ Next.js 15.3.2
- Local: http://localhost:3000
```

Open browser to `http://localhost:3000` and verify the talentsCARE homepage displays correctly.

**Press `Ctrl+C` to stop the development server.**

## Development Workflow

### Starting the Development Server

```bash
npm run dev
```

Features:
- Hot module replacement (auto-refresh on code changes)
- TypeScript checking
- Fast refresh (< 1 second)
- Accessible at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This:
1. Compiles TypeScript to JavaScript
2. Optimizes bundle size
3. Pre-renders static pages
4. Outputs to `out/` directory
5. Takes ~1-2 minutes

Inspect build output:
```bash
# On Windows PowerShell:
Get-ChildItem -Path out -Recurse | Measure-Object -Property Length -Sum

# On macOS/Linux:
find out -type f | wc -l
```

### Testing the Production Build

```bash
npm run build
npm run start
```

This runs the production build locally. Useful for verifying performance.

### Code Quality Checks

```bash
# Run ESLint
npm run lint

# Auto-format code
npm run format
```

**Recommended:** Run before committing:
```bash
npm run format && npm run lint
```

## Project Structure Navigation

### Adding a New Component

**Location:** `components/` directory

**Steps:**

1. Choose appropriate subdirectory:
   - `components/ui/` - Reusable UI primitives
   - `components/layout/` - Layout components
   - `components/sections/` - Page sections

2. Create file with PascalCase name:
   ```typescript
   // components/ui/Badge.tsx
   interface BadgeProps {
     label: string;
     color?: 'primary' | 'accent' | 'highlight';
   }

   export default function Badge({
     label,
     color = 'primary',
   }: BadgeProps) {
     return (
       <span
         className={`rounded-full px-3 py-1 text-sm font-medium text-white bg-${color}`}
       >
         {label}
       </span>
     );
   }
   ```

3. Export from barrel file:
   ```typescript
   // components/ui/index.ts
   export { default as Badge } from './Badge';
   export type { BadgeProps } from './Badge';
   ```

4. Use in other components:
   ```typescript
   import { Badge } from '@/components/ui';

   export default function SomeComponent() {
     return <Badge label="New" color="accent" />;
   }
   ```

### Adding a New Page

**Location:** `app/` directory (Phase 2+: `app/[locale]/`)

**Steps:**

1. Create directory matching route path:
   ```
   app/services/page.tsx           # Creates /services route
   app/about/page.tsx              # Creates /about route
   app/contact/page.tsx            # Creates /contact route
   ```

2. Add page component:
   ```typescript
   // app/services/page.tsx
   import { Metadata } from 'next';
   import ServicesSection from '@/components/sections/Services';

   export const metadata: Metadata = {
     title: 'Services - talentsCARE',
     description: 'Our HR consulting and integration services',
   };

   export default function ServicesPage() {
     return (
       <main>
         <ServicesSection />
       </main>
     );
   }
   ```

3. (Optional) Create layout for route:
   ```typescript
   // app/services/layout.tsx
   export default function ServicesLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <div className="min-h-screen">
         {children}
       </div>
     );
   }
   ```

### Adding Styles

**Tailwind CSS (Recommended):**

```typescript
// Use utility classes directly
<div className="flex items-center justify-center gap-4 rounded-lg bg-primary px-6 py-4">
  <h2 className="text-2xl font-display font-bold text-white">
    Styled with Tailwind
  </h2>
</div>
```

**Responsive Design:**

```typescript
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Items display differently on different screen sizes */}
</div>
```

**Theme Colors:**

Available from `tailwind.config.ts`:
```typescript
<div className="bg-primary">Primary Color</div>
<div className="bg-accent">Accent Color</div>
<div className="bg-highlight">Highlight Color</div>

{/* With shade variations */}
<div className="bg-primary-50">Very Light</div>
<div className="bg-primary-100">Light</div>
<div className="bg-primary-600">Dark</div>
</div>
```

## IDE Setup

### VS Code (Recommended)

**Essential Extensions:**

1. **ES7+ React/Redux/React-Native snippets** by dsznajder.es7-react-js-snippets
2. **Prettier - Code formatter** by esbenp.prettier-vscode
3. **ESLint** by dbaeumer.vscode-eslint
4. **Tailwind CSS IntelliSense** by bradlc.vscode-tailwindcss
5. **TypeScript Vue Plugin** by Vue.volar (for TypeScript support)

**VS Code Settings (`.vscode/settings.json`):**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Debugging

### Browser DevTools

1. **Open DevTools:** `F12` or Right-click → Inspect
2. **Console:** Check for TypeScript/ESLint errors
3. **React DevTools:** Install extension for component inspection
4. **Network Tab:** Check bundle sizes and requests

### VS Code Debugging

**Create `.vscode/launch.json`:**

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "console": "integratedTerminal"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

### Console Logging

```typescript
// ✅ DO: Use descriptive logs
console.log('User ID:', userId);
console.warn('Missing translation key:', key);
console.error('Failed to fetch:', error);

// Conditional logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', debugData);
}
```

## Environment Variables

### Local Development

Create `.env.local` in project root (NOT committed to git):

```env
# Example (Phase 2+)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Important:**
- Prefix public variables with `NEXT_PUBLIC_`
- Never commit `.env.local` to git
- Add to `.gitignore` (already configured)

## Performance Optimization Tips

### 1. Component Lazy Loading

```typescript
import dynamic from 'next/dynamic';

// Heavy component loaded on demand
const HeavyForm = dynamic(() => import('@/components/HeavyForm'), {
  loading: () => <p>Loading form...</p>,
});
```

### 2. Image Optimization

```typescript
import Image from 'next/image';

// Using next/image
<Image
  src="/images/logo.png"
  alt="Logo"
  width={200}
  height={200}
  priority // Load immediately
/>

// Note: Image optimization disabled for static export
// Use <img> as fallback
<img src="/images/logo.png" alt="Logo" />
```

### 3. Avoid Layout Shift

- Specify dimensions for images
- Reserve space for dynamic content
- Use Tailwind `aspect-*` utilities

## Troubleshooting

### Common Issues

**Issue:** Port 3000 already in use
```bash
# Kill existing process
# Windows: taskkill /PID <pid> /F
# macOS/Linux: kill -9 <pid>

# Or use different port
npm run dev -- -p 3001
```

**Issue:** Module not found error
```bash
# Clear .next cache
rm -rf .next
npm run dev
```

**Issue:** TypeScript errors
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Fix issues or disable temporarily
# tsconfig.json: "skipLibCheck": true
```

**Issue:** Tailwind classes not applying
```bash
# Ensure paths in tailwind.config.ts cover your files
// tailwind.config.ts
content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  // Add more paths if needed
]
```

### Getting Help

1. Check existing code for similar patterns
2. Review `/docs` files
3. Check Next.js documentation: https://nextjs.org/docs
4. Check Tailwind documentation: https://tailwindcss.com/docs
5. Create a GitHub issue with error details

## Next Steps

### Short Term (This Phase)
- [ ] Complete setup and verify dev server
- [ ] Review code standards in `docs/code-standards.md`
- [ ] Explore existing components and pages

### Medium Term (Phase 2)
- [ ] Study i18n infrastructure plan
- [ ] Begin translation message setup
- [ ] Implement locale routing

### Long Term (Phase 3+)
- [ ] Content translation
- [ ] Component library expansion
- [ ] Page implementation
- [ ] Deployment configuration

## Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Documentation:** https://react.dev
- **TypeScript Handbook:** https://www.typescriptlang.org/docs
- **Project Plan:** `plans/2026-04-10-talentscare-multilingual-website/plan.md`

## Support

For questions or issues:
1. Check this guide first
2. Review code standards
3. Open GitHub issue with details
4. Tag relevant team members

Happy coding!
