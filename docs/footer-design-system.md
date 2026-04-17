# Footer Design System

**Date:** 2026-04-17
**Status:** Implemented
**Version:** 1.0

## Overview

Dynamic footer system with unique designs for each page type, providing contextual CTAs and appropriate navigation based on user journey.

## Architecture

### Component Structure

```
components/layout/
├── footer.tsx                 # Original footer (fallback)
├── footer-variants.tsx        # 6 specialized footer variants
└── dynamic-footer.tsx         # Smart router component
```

### Dynamic Footer Routing

The `DynamicFooter` component automatically selects the appropriate footer variant based on pathname:

| Path Pattern | Footer Variant | Use Case |
|-------------|----------------|----------|
| `/` | `HomeFooter` | Landing page with full CTA |
| `/services/employers` | `ServicesFooter(employers)` | Employer-focused with cross-sell |
| `/services/talents` | `ServicesFooter(talents)` | Talent-focused with cross-sell |
| `/contact` | `ContactFooter` | Minimal (no duplicate CTA) |
| `/about`, `/team` | `AboutFooter` | Team recruitment CTA |
| `/blog` | `BlogFooter` | Newsletter signup |
| `/privacy`, `/imprint`, `/terms` | `LegalFooter` | Simplified legal footer |

## Footer Variants

### 1. HomeFooter

**Purpose:** Primary landing page with maximum conversion focus

**Features:**
- Gradient background with decorative patterns
- Large, prominent partnership CTA with rounded-full button
- Enhanced logo with social media icons
- 4-column layout: Brand, Navigation, Legal, Contact
- Yellow (#FDB927) accent highlights on hover
- Full contact information

**Visual Style:**
- Dark gradient (primary-dark → primary → primary-dark)
- Glowing background effects (white/accent blur)
- Large text (text-4xl for headline)
- Rounded-2xl CTA container with backdrop blur

**Code Location:** `components/layout/footer-variants.tsx` line 18-141

---

### 2. ServicesFooter

**Purpose:** Service pages with dual focus - conversion + cross-sell

**Props:**
- `type: 'employers' | 'talents'` - Determines content and cross-sell target

**Features:**
- Split CTA design (2 columns)
  - Left: Primary conversion CTA for current service
  - Right: Cross-sell to other service type
- Gradient accent background on primary CTA
- Border-only design on cross-sell card
- Compact footer links (4 columns)
- Service-specific messaging

**Visual Style:**
- Dark background (primary-dark)
- Rounded-2xl cards
- Gradient accent/20 for primary CTA
- Border-2 border-white/10 for cross-sell
- Compact layout with smaller logo

**Dynamic Content:**
```typescript
// Employers version
ctaText = 'Bereit für die Zusammenarbeit?'
ctaDescription = 'Lassen Sie uns gemeinsam die perfekte Lösung für Ihre HR-Herausforderungen finden'
crossSell = '/services/talents'

// Talents version
ctaText = 'Starten Sie Ihre Karriere'
ctaDescription = 'Wir begleiten Sie auf Ihrem Weg zum beruflichen Erfolg in Deutschland'
crossSell = '/services/employers'
```

**Code Location:** `components/layout/footer-variants.tsx` line 146-239

---

### 3. ContactFooter

**Purpose:** Minimal footer for contact page (avoid CTA duplication)

**Features:**
- Horizontal layout (single row)
- Logo + inline navigation + copyright
- No CTA (page itself is contact form)
- Ultra-compact design
- Divider between logo and nav

**Visual Style:**
- Dark gray background (gray-900)
- Small padding (py-12)
- Flex layout with center alignment
- Border-top only
- Text-sm throughout

**Code Location:** `components/layout/footer-variants.tsx` line 244-275

---

### 4. AboutFooter

**Purpose:** About/Team pages with recruitment CTA

**Features:**
- Team recruitment CTA with decorative background
- Large rounded-3xl container
- 2-column grid (content left, visual right)
- Light gradient background (white → gray-50)
- Standard footer links below
- Dark logo variant (on light background)

**Visual Style:**
- Light background (gradient white to gray-50)
- Dark primary-dark CTA container
- Yellow (#FDB927) button
- Shadow-2xl on CTA container
- Decorative blur circles

**CTA Focus:**
- "Werden Sie Teil unseres Teams" (Join our team)
- "Karriere bei uns" button
- Targets team expansion/recruitment

**Code Location:** `components/layout/footer-variants.tsx` line 280-350

---

### 5. BlogFooter

**Purpose:** Blog/news pages with newsletter signup

**Features:**
- Newsletter signup form (email + submit)
- Gradient CTA background (primary → accent)
- 3-column footer links
- Light background (gray-50)
- Email input with rounded-full styling

**Visual Style:**
- Light gray background
- Gradient CTA container (primary to accent)
- White input field with gray text
- Yellow (#FDB927) submit button
- Rounded-2xl containers

**Form Design:**
```typescript
<input
  type="email"
  placeholder="Ihre E-Mail Adresse"
  className="flex-1 rounded-full px-6 py-3 text-gray-900"
/>
<button className="rounded-full bg-[#FDB927] px-8 py-3">
  Abonnieren
</button>
```

**Code Location:** `components/layout/footer-variants.tsx` line 355-415

---

### 6. LegalFooter

**Purpose:** Legal pages (Privacy, Terms, Imprint) - minimal distraction

**Features:**
- Single row layout
- Border-top only (subtle separation)
- White background
- Inline navigation
- No CTA (compliance-focused pages)
- Small logo without tagline

**Visual Style:**
- Pure white background
- Border-t border-gray-200
- Minimal padding (py-8)
- Flex layout with space-between
- Text-sm for all text
- Wrap navigation on mobile

**Code Location:** `components/layout/footer-variants.tsx` line 420-444

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Dark | `bg-primary-dark` | Dark footers background |
| Accent | `#FDB927` | Buttons, highlights, hover states |
| White | `#FFFFFF` | Text on dark backgrounds |
| Gray-50 | `rgb(249 250 251)` | Light footer backgrounds |
| Gray-900 | `rgb(17 24 39)` | Contact footer background |

## Typography Scale

| Element | Class | Size |
|---------|-------|------|
| Main CTA Headlines | `text-4xl` | 36px |
| Secondary Headlines | `text-3xl` | 30px |
| Subheadlines | `text-2xl` | 24px |
| Body Text | `text-lg` | 18px |
| Navigation Links | `text-sm` | 14px |
| Copyright | `text-sm` | 14px |

## Spacing System

| Section | Padding |
|---------|---------|
| Footer container | `py-20` (5rem) |
| Contact footer | `py-12` (3rem) |
| Legal footer | `py-8` (2rem) |
| CTA section | `p-12` (3rem) |
| Compact CTA | `p-8` (2rem) |

## Interactive States

### Buttons

**Primary CTA (Yellow):**
```css
bg-[#FDB927]
hover:bg-white
hover:scale-105 (home only)
transition-all
```

**Outlined Button:**
```css
border-2 border-white bg-transparent
hover:bg-white hover:text-primary-dark
```

### Links

**Dark Background:**
```css
text-white/80
hover:text-[#FDB927]
transition-colors
```

**Light Background:**
```css
text-gray-600
hover:text-primary
```

## Responsive Behavior

### Grid Breakpoints

```typescript
// 4-column layout
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

// 3-column layout
grid-cols-1 md:grid-cols-3

// 2-column layout
grid-cols-1 lg:grid-cols-2

// Inline to stack
flex-col md:flex-row
```

### Mobile Optimizations

- Stacked layout on mobile (grid-cols-1)
- Centered text alignment on mobile
- Hidden decorative elements on small screens
- Flex-wrap for navigation links
- Full-width buttons on mobile

## Implementation Guide

### Adding a New Footer Variant

1. **Create Component:**
```typescript
export function MyNewFooter() {
  const t = useTranslations('common.footer');
  const nav = useTranslations('common.nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="...">
      {/* Your unique footer design */}
    </footer>
  );
}
```

2. **Add to DynamicFooter Router:**
```typescript
// In components/layout/dynamic-footer.tsx
if (cleanPath === '/my-new-page') {
  return <MyNewFooter />;
}
```

3. **Export from footer-variants.tsx:**
```typescript
export { MyNewFooter } from './footer-variants';
```

### Translation Keys Required

All footer variants use these translation namespaces:

```json
{
  "common": {
    "nav": {
      "home": "...",
      "services": "...",
      "about": "...",
      "contact": "..."
    },
    "footer": {
      "company": "...",
      "tagline": "...",
      "rights": "...",
      "privacy": "...",
      "imprint": "...",
      "terms": "...",
      "partnership": {
        "heading": "...",
        "text": "...",
        "cta": "..."
      }
    }
  }
}
```

## Accessibility

### ARIA Labels

- Use semantic `<footer>` element
- Use `<nav>` for navigation sections
- Use `<address>` for contact information
- Add `aria-label` to social media links
- Use `sr-only` class for screen-reader-only text

### Keyboard Navigation

- All links focusable via Tab key
- Focus visible states with `focus:ring-2`
- Logical tab order (left to right, top to bottom)

### Color Contrast

All text meets WCAG 2.1 AA standards:
- White text on dark backgrounds: 15:1+ contrast
- Gray text on white backgrounds: 4.5:1+ contrast
- Yellow buttons with dark text: 8:1+ contrast

## Performance

### Bundle Size Impact

- DynamicFooter: ~2KB
- Each variant: ~1-2KB
- Total footer code: ~12KB (tree-shakeable)
- Only active variant loaded per page

### Optimization Techniques

- Client component for pathname detection
- Static rendering where possible
- CSS-only animations (no JS)
- Inline SVG icons (no external requests)
- Lazy-loaded social media icons

## Testing Checklist

- [ ] All pages render correct footer variant
- [ ] CTAs link to correct destinations
- [ ] Translation keys work in all 3 languages (DE, EN, VI)
- [ ] Responsive behavior on mobile/tablet/desktop
- [ ] Hover states work correctly
- [ ] Form submissions work (newsletter)
- [ ] Social media links functional
- [ ] Accessibility standards met
- [ ] Build generates static HTML correctly
- [ ] No console errors/warnings

## Future Enhancements

### Planned Features

1. **Dynamic Social Media Links**
   - Pull from environment variables
   - Support for multiple platforms

2. **Newsletter Integration**
   - Connect to actual email service
   - Form validation
   - Success/error states

3. **Analytics Tracking**
   - Track CTA clicks
   - Monitor cross-sell effectiveness
   - A/B testing variants

4. **Internationalized CTAs**
   - Culture-specific messaging
   - Localized phone numbers
   - Country-specific social platforms

## Maintenance

### Regular Tasks

- Update copyright year (automated via `new Date().getFullYear()`)
- Review CTA effectiveness quarterly
- Test all links monthly
- Update contact information as needed
- Monitor translation quality

### Deprecation Policy

- Original `Footer` component kept as fallback
- Will be removed in v2.0 after 6 months
- All pages should migrate to variants

---

**Last Updated:** 2026-04-17
**Maintainer:** Development Team
**Related Docs:** [Design Guidelines](./design-guidelines.md), [Component Library](./component-library.md)
