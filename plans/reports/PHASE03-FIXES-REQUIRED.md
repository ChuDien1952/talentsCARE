# Phase 03: Translation - Required Fixes Guide

## Overview
This document provides exact fixes needed to resolve the 3 high-priority issues identified in the code review. All fixes are straightforward and can be implemented in less than 10 minutes.

---

## Fix #1: Validation Script JSON Import Attributes

**File:** `scripts/validate-translations.ts`
**Lines:** 6-8
**Severity:** HIGH
**Time:** 2 minutes

### Current Code (BROKEN)
```typescript
import de from '../messages/de.json';
import en from '../messages/en.json';
import vi from '../messages/vi.json';
```

### Error
```
TypeError: Module needs an import attribute of "type: json"
```

### Fixed Code
```typescript
import de from '../messages/de.json' assert { type: 'json' };
import en from '../messages/en.json' assert { type: 'json' };
import vi from '../messages/vi.json' assert { type: 'json' };
```

### Verification
```bash
npx ts-node scripts/validate-translations.ts
```

Expected output:
```
🔍 Translation Validation Report

Total keys in DE (source): 193
Total keys in EN: 193
Total keys in VI: 193

✅ EN has all required keys
✅ VI has all required keys
✅ EN has no extra keys
✅ VI has no extra keys

✨ All translation files are valid!
```

---

## Fix #2: Update TypeScript Type Definition

**File:** `lib/i18n/types.ts`
**Lines:** 62-92
**Severity:** HIGH
**Time:** 3 minutes

### Current Code (INCOMPLETE)
```typescript
home: {
  hero: {
    headline: string;
    subheadline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    subtitle: string;
    employersTitle: string;
    employersDesc: string;
    talentsTitle: string;
    talentsDesc: string;
  };
  stats: {
    clients: string;
    clientsCount: string;
    talents: string;
    talentsCount: string;
    years: string;
    yearsCount: string;
    countries: string;
    countriesCount: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
};
```

### Issue
Missing top-level `title` and `subtitle` properties.

### Fixed Code
Add these two lines at the beginning of the home interface:
```typescript
home: {
  title: string;
  subtitle: string;
  hero: {
    // ... rest of properties
  };
  // ... rest of interface
};
```

### Verification
```bash
npx tsc --noEmit
```

Should complete without errors.

---

## Fix #3: Add Validation Script to package.json

**File:** `package.json`
**Lines:** 5-11
**Severity:** HIGH
**Time:** 2 minutes

### Current Code (INCOMPLETE)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

### Fixed Code
Add one line to the scripts section:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "validate:translations": "ts-node scripts/validate-translations.ts"
  }
}
```

### Verification
```bash
npm run validate:translations
```

Expected output: Same as Fix #1 verification

---

## Implementation Checklist

Complete in order:

### Before Starting
- [ ] Read this document completely
- [ ] Backup current files (or use git)

### Fix #1 - Validation Script (2 minutes)
- [ ] Open `scripts/validate-translations.ts` in editor
- [ ] Go to line 6, find: `import de from '../messages/de.json';`
- [ ] Change to: `import de from '../messages/de.json' assert { type: 'json' };`
- [ ] Go to line 7, find: `import en from '../messages/en.json';`
- [ ] Change to: `import en from '../messages/en.json' assert { type: 'json' };`
- [ ] Go to line 8, find: `import vi from '../messages/vi.json';`
- [ ] Change to: `import vi from '../messages/vi.json' assert { type: 'json' };`
- [ ] Save file

### Fix #2 - Type Definition (3 minutes)
- [ ] Open `lib/i18n/types.ts` in editor
- [ ] Find the `home: {` section around line 62
- [ ] Add these two lines after `home: {`:
  ```typescript
  title: string;
  subtitle: string;
  ```
- [ ] Save file

### Fix #3 - Package.json Script (2 minutes)
- [ ] Open `package.json` in editor
- [ ] Find the `"scripts"` section
- [ ] Add this line after the `"format"` line:
  ```json
  "validate:translations": "ts-node scripts/validate-translations.ts",
  ```
- [ ] Save file
- [ ] Note: Make sure there's a comma after `"format"` line (may already be there)

### Final Verification (3 minutes)
```bash
# Verify TypeScript compiles
npx tsc --noEmit

# Verify validation script works
npm run validate:translations

# Verify ESLint passes
npm run lint

# Verify build succeeds
npm run build
```

All four commands should complete without errors.

---

## Expected Timeline

| Task | Time |
|------|------|
| Fix #1 (Imports) | 2 min |
| Fix #2 (Types) | 3 min |
| Fix #3 (npm script) | 2 min |
| Verification | 3 min |
| **TOTAL** | **10 min** |

---

## Rollback Instructions

If needed, revert changes:
```bash
# Using git (if available)
git checkout scripts/validate-translations.ts lib/i18n/types.ts package.json

# Or manually restore from backup
```

---

## Additional Notes

- All fixes maintain project code standards
- No additional dependencies needed
- All changes follow TypeScript strict mode requirements
- Changes are backward compatible
- No breaking changes to API or components

---

## Success Criteria

After applying all three fixes:

1. Validation script runs without errors
2. TypeScript compilation passes with 0 errors
3. ESLint verification passes
4. Build completes successfully
5. All three language files validate correctly
6. npm script `validate:translations` is available

---

## Questions?

Refer to the full code review report for detailed context:
`plans/reports/code-reviewer-20260411-phase03-translation.md`
