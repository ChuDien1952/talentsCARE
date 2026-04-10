# Translation Workflow Guide

**Purpose:** Document the process for managing translations across German, English, and Vietnamese locales.

**Status:** Phase 02 - i18n Infrastructure Complete
**Last Updated:** 2026-04-11

## Overview

The translation workflow ensures consistency and quality across all three supported languages. German serves as the source language, and all changes must be propagated to English and Vietnamese translations.

## File Structure

```
messages/
├── de.json     # German (source language)
├── en.json     # English
└── vi.json     # Vietnamese
```

**Critical Rule:** All three files must have identical JSON structure at all times.

## Workflow Process

### 1. Adding New Content (New Translation Key)

#### Step 1: Update German First (Source Language)

Edit `messages/de.json`:

```json
{
  "services": {
    "new_service": {
      "title": "Neue Leistung",
      "description": "Beschreibung der neuen Leistung..."
    }
  }
}
```

**Guidelines:**
- Use descriptive, hierarchical key names
- Use camelCase for keys: `newService` not `new-service` or `new_service`
- Keep descriptions concise but complete
- Include context if the meaning is ambiguous

#### Step 2: Update English Translation

Edit `messages/en.json` with same structure:

```json
{
  "services": {
    "new_service": {
      "title": "New Service",
      "description": "Description of the new service..."
    }
  }
}
```

**Translation Quality:**
- Ensure English is professional and clear
- Consider cultural differences from German
- Check for consistency with existing terminology
- Proofread for spelling and grammar

#### Step 3: Update Vietnamese Translation

Edit `messages/vi.json` with same structure:

```json
{
  "services": {
    "new_service": {
      "title": "Dịch Vụ Mới",
      "description": "Mô tả về dịch vụ mới..."
    }
  }
}
```

**Vietnamese Translation Considerations:**
- Maintain formal/professional tone
- Use standard Vietnamese (Tiếng Việt Chuẩn)
- Consider cultural context for target audience
- Check tone and appropriateness for HR consulting context

#### Step 4: Verify & Test

```bash
# Check JSON syntax
npm run format

# Start development server
npm run dev

# Test all locales
# Visit http://localhost:3000/de/
# Visit http://localhost:3000/en/
# Visit http://localhost:3000/vi/
```

#### Step 5: Use in Component

```typescript
'use client';

import { useTranslations } from 'next-intl';

export function ServiceSection() {
  const t = useTranslations('services.new_service');

  return (
    <section>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </section>
  );
}
```

### 2. Updating Existing Translation

#### Process

1. **Update German first** in `messages/de.json`
2. **Update English** in `messages/en.json`
3. **Update Vietnamese** in `messages/vi.json`
4. Test all three locales
5. Verify in browser

#### Example

**Old:**
```json
{
  "services": {
    "title": "Leistungen"
  }
}
```

**New:**
```json
{
  "services": {
    "title": "Unsere Leistungen"
  }
}
```

Apply same change to en.json and vi.json.

### 3. Renaming or Restructuring Keys

#### Impact Assessment

Renaming requires updating both:
1. Message files (all three locales)
2. All components using the old key

#### Process

1. **Identify all usages:**
   ```bash
   grep -r "old_key_name" app/ components/ --include="*.tsx"
   ```

2. **Update German first**

3. **Update English and Vietnamese**

4. **Update all components:**
   ```typescript
   // OLD
   const t = useTranslations('services');
   t('old_key_name')

   // NEW
   const t = useTranslations('services');
   t('new_key_name')
   ```

5. **Test thoroughly**

#### Example

**Renaming:** `hero.cta_button` → `hero.ctaButton`

In `messages/de.json`:
```json
{
  "hero": {
    "ctaButton": "Jetzt starten"  // renamed from cta_button
  }
}
```

In components:
```typescript
// Change from
t('cta_button')

// To
t('ctaButton')
```

### 4. Handling Missing Translations

**Issue:** Message file structure mismatch between locales

**Detection:**
```bash
# Build will fail if keys missing
npm run build

# Error: Missing translation key 'services.new_field' in English
```

**Resolution:**

1. Check all three files have identical structure
2. Add missing keys to any locale file
3. Provide translation for new keys
4. Run build again to verify

**Verification Tool:**

```bash
# Create a validation script to ensure all keys exist
# (Can be added to pre-commit hooks in future)
npm run format  # Prettier ensures consistent formatting
```

## Translation Quality Standards

### Terminology Consistency

**Establish glossary of key terms:**

| German | English | Vietnamese |
|--------|---------|------------|
| Integrationshilfe | Integration Support | Hỗ Trợ Tích Hợp |
| Fachkraft | Skilled Professional | Chuyên Gia Kỹ Thuật |
| Arbeitgeber | Employer | Nhà Tuyển Dụng |
| Coaching | Coaching | Hướng Dẫn Kỹ Năng |
| Schulung | Training | Đào Tạo |
| Mentoring | Mentoring | Hướng Dẫn Cá Nhân |

**Guidelines:**
- Use consistent terminology across all pages
- Document new terms in glossary
- Review terminology with localization experts
- Update glossary when terminology changes

### Tone & Voice

**English:** Professional, friendly, empowering
**German:** Formal, professional (typical for B2B in Germany)
**Vietnamese:** Respectful, professional, accessible

### Length Considerations

- **German:** Tends to be longest (compound words)
- **English:** Medium length
- **Vietnamese:** Often shorter than English

**Example:**
```
German (longest):    "Integrationsbegleitung für internationale Fachkräfte"
English (medium):    "Integration support for international professionals"
Vietnamese (short):  "Hỗ trợ tích hợp cho chuyên gia"
```

**Design Consideration:** Allocate extra space in UI for German text.

### Cultural Adaptations

Not just literal translations:

```json
// German (source, formal tone)
"Willkommen zu talentsCARE"

// English (professional, friendly)
"Welcome to talentsCARE"

// Vietnamese (respectful, welcoming)
"Chào mừng đến với talentsCARE"
```

## Common Mistakes to Avoid

### ❌ Don't

1. **Translate JSON keys**
   ```json
   // WRONG - keys translated
   {
     "de": { "title": "..." },
     "en": { "titel": "..." }  // Wrong key name
   }
   ```

2. **Use different key structures**
   ```json
   // WRONG - different structure
   {
     "de": { "services": { "title": "..." } },
     "en": { "servicesTitle": "..." }  // Different structure
   }
   ```

3. **Have untranslated placeholder strings**
   ```json
   // WRONG - English text in German locale
   {
     "de": { "title": "Service Title" }  // Should be German
   }
   ```

4. **Skip locale updates**
   ```
   // WRONG - only update German
   // English and Vietnamese fall out of sync
   // Build will fail or show wrong content
   ```

5. **Mix formatting styles**
   ```json
   // WRONG - inconsistent spacing and formatting
   {
     "de": {"title":"Leistungen"},
     "en": { "title" : "Services" }
   }
   ```

### ✅ Do

1. **Keep identical structure across all files**
   ```json
   {
     "common": {
       "nav": {
         "home": "..."
       }
     }
   }
   // Same structure in de.json, en.json, vi.json
   ```

2. **Use consistent formatting**
   ```json
   {
     "common": {
       "nav": {
         "home": "Startseite",
         "about": "Über uns"
       }
     }
   }
   ```

3. **Validate before committing**
   ```bash
   npm run format  # Formats JSON consistently
   npm run build   # Validates all keys present
   ```

4. **Use meaningful key names**
   ```json
   ✅ "learnMore" (clear purpose)
   ❌ "btn1" (ambiguous)
   ```

5. **Provide adequate translation context**
   - Include source language text
   - Document idioms or cultural references
   - Note if abbreviations are used

## Tools & Automation

### Current Setup

- **Prettier:** Auto-formats JSON
  ```bash
  npm run format
  ```

- **TypeScript:** Type-safe message usage
  - nextIntl provides type hints
  - IDE autocomplete for keys

### Future Enhancements

**Potential Tools (Phase 3+):**
- Translation management system (Crowdin, Lokalise)
- Automated key validation in CI/CD
- Spell-checking tools
- Translation memory to ensure consistency
- Glossary management tools

### Pre-commit Hooks (Optional)

Could validate:
1. JSON syntax is valid
2. All three locales have identical structure
3. No hardcoded strings in components (only translations)

## Testing Translations

### Manual Testing

1. **Build all locales:**
   ```bash
   npm run build
   ```

2. **Check development server:**
   ```bash
   npm run dev
   # Visit each locale and verify content
   ```

3. **Check each locale:**
   - http://localhost:3000/de/ - German
   - http://localhost:3000/en/ - English
   - http://localhost:3000/vi/ - Vietnamese

### Automated Testing (Future)

```typescript
// Example test (Phase 5+)
describe('Translations', () => {
  it('should have all keys in all locales', () => {
    const de = require('../messages/de.json');
    const en = require('../messages/en.json');
    const vi = require('../messages/vi.json');

    expect(Object.keys(de)).toEqual(Object.keys(en));
    expect(Object.keys(en)).toEqual(Object.keys(vi));
  });
});
```

## Version Control

### Commit Messages

When updating translations:

```
feat(i18n): add new service description to all locales

Add translations for new service offering:
- German (de.json): Neue Leistung
- English (en.json): New Service
- Vietnamese (vi.json): Dịch Vụ Mới

All three locales updated with identical structure.
```

### Branch Naming

```
feature/i18n-new-service-translations
refactor/i18n-update-terminology
```

## Escalation & Questions

### When to Contact Translator

- Complex cultural concepts
- Idioms that don't translate literally
- Terminology that doesn't exist in target language
- Tone/register decisions

### Documentation Review

Each locale should have at least one native speaker review:
- **German (de):** HR consultant familiar with German market
- **English (en):** Native English speaker for professional tone
- **Vietnamese (vi):** Native Vietnamese speaker understanding target audience

## Checklist for New Translations

- [ ] German text added to de.json
- [ ] English text added to en.json with same key structure
- [ ] Vietnamese text added to vi.json with same key structure
- [ ] JSON is properly formatted (run `npm run format`)
- [ ] No duplicate keys
- [ ] Keys use camelCase naming
- [ ] Terminology consistent with glossary
- [ ] Built successfully (`npm run build`)
- [ ] Tested in all three locales (`npm run dev`)
- [ ] No hardcoded strings in components
- [ ] Commit message documents all locales updated

## Future Roadmap

### Phase 3 - Content Translation
- Translate all page content to en.json and vi.json
- Establish translation review process
- Document content strategy per locale

### Phase 4+ - Advanced Features
- Pluralization support
- Date/number formatting per locale
- Currency display per locale
- RTL language support (if needed)
- Context-dependent translations

### Translation Tool Integration
- Crowdin or Lokalise for translator collaboration
- Automated quality checks
- Translation memory
- Glossary management
- Workflow automation

## Contacts & Resources

**Internal:**
- Phase Lead: Documentation Team
- Repository: talentsCARE (GitHub)

**External Resources:**
- next-intl documentation: https://next-intl-docs.vercel.app
- ICANN Domain Guidelines (multilingual domains)
- SEO for multilingual sites: https://support.google.com/webmasters/answer/182192

## Summary

The translation workflow ensures:
1. ✅ Consistent structure across all locales
2. ✅ High-quality translations in all languages
3. ✅ Easy maintenance and updates
4. ✅ Scalable process for future languages
5. ✅ Type-safe implementation in code

All translations maintained in `messages/` directory with three files: de.json (source), en.json, and vi.json. Follow this workflow to maintain consistency and quality.
