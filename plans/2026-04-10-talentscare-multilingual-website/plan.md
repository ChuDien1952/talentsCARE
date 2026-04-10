# talentsCARE Multilingual Website - Implementation Plan

**Date:** 2026-04-10
**Status:** Phase 2 Complete, Phase 3 Ready
**Priority:** High
**Updated:** 2026-04-11

## Overview

Build static multilingual website (DE/EN/VI) for talentsCARE HR consulting services.
Deploy on GitHub Pages using Next.js 15 App Router + next-intl for i18n.

## Technical Stack

- **Framework:** Next.js 15 (App Router, static export)
- **i18n:** next-intl (2KB, Server Component support)
- **Styling:** Tailwind CSS
- **Routing:** Subdirectory pattern (/de/, /en/, /vi/)
- **Deployment:** GitHub Pages via GitHub Actions
- **Forms:** Netlify Forms / Formspree (MVP)

## Architecture

```
app/
├── [locale]/
│   ├── layout.tsx        # Root layout with locale
│   ├── page.tsx          # Home page
│   ├── services/
│   │   ├── employers/    # Services for employers
│   │   └── talents/      # Services for talents
│   ├── about/
│   ├── team/
│   ├── blog/
│   └── contact/
├── components/           # Shared components
├── lib/                  # Utilities, i18n config
└── messages/             # Translation JSON files
    ├── de.json
    ├── en.json
    └── vi.json
```

## Content Scope

- 9 services: Seminare, Schulungen, Workshops, Vortraege, Webinare, Coaching, Training, Mentoring, Events
- Dual audience: Arbeitgeber (employers), Talente (international workers)
- Pages: Home, Services (2x), About, Team, Blog, Contact

## Implementation Phases

| Phase | File | Est. Hours | Status | Completion Date |
|-------|------|------------|--------|-----------------|
| 1 | phase-01-setup.md | 4h | ✅ COMPLETED | 2026-04-11 |
| 2 | phase-02-i18n-infrastructure.md | 6h | ✅ COMPLETED | 2026-04-11 |
| 3 | phase-03-content-translation.md | 8h | Pending | - |
| 4 | phase-04-components.md | 12h | Pending | - |
| 5 | phase-05-pages.md | 10h | Pending | - |
| 6 | phase-06-deployment.md | 4h | Pending | - |

**Total Estimated:** 44 hours (~5.5 days)
**Completed:** 10/44 hours (22.7%)

## Key Decisions

1. **German as default locale** - Primary market
2. **Static export only** - GitHub Pages constraint
3. **No backend MVP** - Forms via external services
4. **JSON translations** - Simplest for static export
5. **Manual hreflang** - Required for static SEO

## Success Criteria

- [ ] Lighthouse score >90 all categories
- [ ] All 3 languages functional
- [ ] Forms working via external service
- [ ] Mobile-responsive design
- [ ] SEO: hreflang tags, sitemap, meta tags

## Dependencies

- Content from `Documents/talentsCARE_Complete_v3_DE.docx`
- Design reference: asymmetric-agencypro template
- GitHub Pages repository access

## Related Files

- `plans/2026-04-10-talentscare-multilingual-website/research/researcher-01-i18n-approaches.md`
- `plans/2026-04-10-talentscare-multilingual-website/research/researcher-02-deployment-strategies.md`
- `plans/reports/brainstorm-2026-04-10-talentscare-website-architecture.md`
