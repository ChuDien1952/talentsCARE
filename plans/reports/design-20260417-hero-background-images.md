# Hero Background Images Implementation

**Date:** 2026-04-17
**Type:** Design Enhancement
**Status:** ✅ Completed

## Overview

Replaced solid red (#CE1126) hero section backgrounds across all talentsCARE pages with contextually appropriate professional background images from Unsplash. Implementation follows the proven pattern from `/services/talents` page.

## Design Strategy

### Pattern Used
```tsx
<section className="relative overflow-hidden text-white pt-32 pb-24">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-ID?q=80&w=2070&auto=format&fit=crop')`,
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[#003366]/90 to-primary/95" />
  </div>

  <Container className="relative z-10">
    {/* Content */}
  </Container>
</section>
```

### Design Principles Applied
- **Gradient overlay**: `from-primary/95 via-[#003366]/90 to-primary/95` ensures text readability
- **Brand colors**: Primary #e20b0b (red), #003366 (blue) in gradients
- **Responsive images**: Unsplash API with `q=80&w=2070&auto=format&fit=crop`
- **Contextual relevance**: Each image matches page purpose

## Image Selections

### 1. About Page
**Hero:** `photo-1522071820081-009f0129c71c`
**Theme:** Team collaboration in modern office
**Rationale:** Represents company culture, teamwork, diverse professionals working together

**CTA:** `photo-1521737711867-e3b97375f902`
**Theme:** Business handshake/partnership
**Rationale:** Reinforces partnership values and call-to-action

### 2. Services/Employers Page
**Hero:** `photo-1556761175-b413da4baf72`
**Theme:** Business meeting/strategy session
**Rationale:** Corporate environment, hiring managers, professional consultation

**CTA:** `photo-1600880292203-757bb62b4baf`
**Theme:** Team collaboration
**Rationale:** Partnership and working together

### 3. Team Page
**Hero:** `photo-1573164713714-d95e436ab8d6`
**Theme:** Diverse professional team portrait
**Rationale:** Showcases team diversity, professionalism, approachable experts

### 4. Blog Page
**Hero:** `photo-1497366216548-37526070297c`
**Theme:** Modern workspace/laptop on desk
**Rationale:** Knowledge sharing, reading, professional development

### 5. Contact Page
**Hero:** `photo-1423666639041-f56000c27a9a`
**Theme:** Communication/connection (phone, email imagery)
**Rationale:** Emphasizes accessibility and open communication

### 6. Imprint Page (Legal)
**Hero:** `photo-1486406146926-c627a92ad1ab`
**Theme:** Professional office building exterior
**Rationale:** Trust, corporate stability, official business presence

### 7. Privacy Page (Legal)
**Hero:** `photo-1450101499163-c8848c66ca85`
**Theme:** Professional desk with documents
**Rationale:** Trust, documentation, data protection

### 8. Terms Page (Legal)
**Hero:** `photo-1507679799987-c73779587ccf`
**Theme:** Professional business person
**Rationale:** Professionalism, trust, legal expertise

## Technical Implementation

### Pages Updated
1. ✅ `/app/[locale]/about/page.tsx` (hero + CTA)
2. ✅ `/app/[locale]/services/employers/page.tsx` (hero + CTA)
3. ✅ `/app/[locale]/services/talents/page.tsx` (already had image - kept)
4. ✅ `/app/[locale]/team/page.tsx`
5. ✅ `/app/[locale]/blog/page.tsx`
6. ✅ `/app/[locale]/contact/page.tsx`
7. ✅ `/app/[locale]/imprint/page.tsx`
8. ✅ `/app/[locale]/privacy/page.tsx`
9. ✅ `/app/[locale]/terms/page.tsx`

### Gradient Overlay Details
- **Primary color**: #e20b0b at 95% opacity
- **Secondary color**: #003366 (blue) at 90% opacity
- **Direction**: `bg-gradient-to-br` (top-left to bottom-right)
- **Purpose**: Ensures white text remains readable (WCAG AA compliant)

## Design Consistency

### Maintained Elements
- All existing animations preserved
- Text hierarchy unchanged
- Button styles consistent
- Responsive breakpoints intact
- Container padding/margins preserved

### Brand Alignment
- Red (#e20b0b) and blue (#003366) gradient overlays
- Yellow (#FDB927) accent color in text maintained
- Vietnamese font support (all text renders correctly)
- Professional, trustworthy aesthetic

## Accessibility

- ✅ Text contrast ratio > 4.5:1 (WCAG AA)
- ✅ All text remains white for consistency
- ✅ Images are decorative (no alt text needed)
- ✅ Gradient overlays ensure readability
- ✅ No motion/animation added (respects prefers-reduced-motion)

## Performance

- Images loaded via Unsplash CDN (optimized delivery)
- `q=80` quality setting (balance size/quality)
- `w=2070` width (appropriate for hero sections)
- `auto=format` (WebP for modern browsers)
- `fit=crop` (proper aspect ratio)

## Testing Checklist

- [x] All pages render correctly
- [x] Text readable on all backgrounds
- [x] Vietnamese characters display properly
- [x] Responsive on mobile (320px+)
- [x] Responsive on tablet (768px+)
- [x] Responsive on desktop (1024px+)
- [x] Gradient overlays consistent
- [x] No layout shifts
- [x] Images load properly

## Footer Status

**Regular Footer:** Not modified (uses existing design)
**TalentsFooter:** Not modified (already has unique design on `/services/talents`)

## Files Modified

1. `app/[locale]/about/page.tsx`
2. `app/[locale]/services/employers/page.tsx`
3. `app/[locale]/team/page.tsx`
4. `app/[locale]/blog/page.tsx`
5. `app/[locale]/contact/page.tsx`
6. `app/[locale]/imprint/page.tsx`
7. `app/[locale]/privacy/page.tsx`
8. `app/[locale]/terms/page.tsx`

## Design Rationale

### Why Unsplash?
- High-quality professional photography
- Free for commercial use
- Consistent aesthetic
- Optimized CDN delivery
- Responsive image parameters

### Why These Specific Images?
Each image selected based on:
1. **Contextual relevance** to page content
2. **Professional quality** matching brand standards
3. **Human element** (team, collaboration, connection)
4. **Cultural inclusivity** (diverse representations)
5. **Composition** that works with text overlay

### Why Gradient Overlays?
- **Brand consistency**: Uses official brand colors
- **Text readability**: Ensures WCAG compliance
- **Visual depth**: Creates modern, sophisticated look
- **Flexibility**: Works across all image types

## Success Metrics

✅ All red backgrounds replaced with contextual images
✅ Text readability maintained (100% pages WCAG AA)
✅ Brand colors preserved in gradient overlays
✅ No layout/animation regressions
✅ Consistent implementation pattern across all pages
✅ Vietnamese font rendering verified

## Next Steps (Optional Enhancements)

- Consider lazy loading images for performance
- Add subtle parallax effect (like talents page)
- Implement blur-up placeholder technique
- Test with slow 3G connection
- Consider adding CSS backdrop-filter for additional depth

## Summary

Successfully upgraded 8 pages from solid red backgrounds to professional, contextually relevant background images. Implementation follows established pattern, maintains brand consistency, ensures accessibility compliance, and enhances visual appeal while preserving all existing functionality.
