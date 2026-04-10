# Phase 03: Content & Translations

## Context

- **Plan:** [plan.md](./plan.md)
- **Previous:** [phase-02-i18n-infrastructure.md](./phase-02-i18n-infrastructure.md)
- **Source:** `Documents/talentsCARE_Complete_v3_DE.docx`
- **Next Phase:** [phase-04-components.md](./phase-04-components.md)

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-04-10 |
| Description | Extract German content, translate to EN/VI, structure JSON |
| Priority | High |
| Status | Pending |
| Est. Hours | 8 |

## Key Insights

- Source document in German (primary language)
- 9 services require detailed translations
- Dual audience: Employers (Arbeitgeber) vs Talents (Talente)
- Structured JSON enables type-safe translations

## Requirements

### Functional
- Extract all content from source document
- Translate German to English and Vietnamese
- Structure by page and component
- Support rich text (basic formatting)

### Non-Functional
- Translation accuracy >95%
- Consistent terminology across languages
- Easy to update/maintain

## Architecture

```
messages/
├── de.json                # German (source)
├── en.json                # English
├── vi.json                # Vietnamese
└── types.ts               # TypeScript definitions

Content Structure:
{
  "common": {},            # Nav, footer, CTAs
  "home": {},              # Homepage content
  "services": {
    "employers": {},       # 9 services for employers
    "talents": {}          # 9 services for talents
  },
  "about": {},             # About page
  "team": {},              # Team page
  "blog": {},              # Blog/news
  "contact": {}            # Contact page
}
```

## Related Files

After completion:
- `messages/de.json` - Complete German translations
- `messages/en.json` - Complete English translations
- `messages/vi.json` - Complete Vietnamese translations
- `lib/i18n/types.ts` - TypeScript type definitions

## Implementation Steps

### Step 1: Extract Content from Source Document (60 min)

Content categories to extract:

**Company Information:**
- Company name, tagline, mission
- About us text
- Team member profiles
- Contact information

**Services (9 total):**
1. Seminare (Seminars)
2. Schulungen (Training courses)
3. Workshops
4. Vortrage (Lectures)
5. Webinare (Webinars)
6. Coaching
7. Training
8. Mentoring
9. Events

Each service needs:
- Title
- Short description (50-100 words)
- Long description (200-400 words)
- Key benefits (3-5 bullet points)
- Target audience

**Page Content:**
- Hero sections
- Section headings
- CTAs
- Testimonials
- FAQ items

### Step 2: Create TypeScript Definitions (30 min)
```typescript
// lib/i18n/types.ts
export interface ServiceContent {
  title: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  targetAudience: string;
  icon: string; // Icon name reference
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  role: string;
}

export interface Messages {
  common: {
    nav: Record<string, string>;
    footer: Record<string, string>;
    cta: Record<string, string>;
    meta: Record<string, string>;
  };
  home: {
    hero: Record<string, string>;
    services: Record<string, string>;
    stats: Record<string, string | number>;
    testimonials: Record<string, string>;
  };
  services: {
    employers: {
      intro: Record<string, string>;
      items: Record<string, ServiceContent>;
    };
    talents: {
      intro: Record<string, string>;
      items: Record<string, ServiceContent>;
    };
  };
  about: Record<string, string>;
  team: {
    intro: Record<string, string>;
    members: TeamMember[];
  };
  contact: Record<string, string>;
}
```

### Step 3: Complete German Translations (90 min)
```json
// messages/de.json (expanded)
{
  "common": {
    "nav": {
      "home": "Startseite",
      "services": "Leistungen",
      "servicesEmployers": "Fur Arbeitgeber",
      "servicesTalents": "Fur Talente",
      "about": "Uber uns",
      "team": "Team",
      "blog": "Aktuelles",
      "contact": "Kontakt"
    },
    "footer": {
      "company": "talentsCARE",
      "tagline": "Ihr Partner fur erfolgreiche Integration",
      "rights": "Alle Rechte vorbehalten",
      "privacy": "Datenschutz",
      "imprint": "Impressum",
      "terms": "AGB"
    },
    "cta": {
      "learnMore": "Mehr erfahren",
      "contact": "Kontaktieren Sie uns",
      "getStarted": "Jetzt starten",
      "bookConsultation": "Beratung buchen",
      "download": "Herunterladen",
      "subscribe": "Abonnieren"
    },
    "meta": {
      "title": "talentsCARE - HR-Beratung",
      "description": "Professionelle HR-Beratung fur Arbeitgeber und internationale Talente in Deutschland"
    }
  },
  "home": {
    "hero": {
      "headline": "Ihr Partner fur erfolgreiche Integration",
      "subheadline": "Wir verbinden Unternehmen mit internationalen Talenten",
      "description": "talentsCARE unterstutzt Arbeitgeber bei der Integration internationaler Fachkrafte und begleitet Talente auf ihrem Weg zum beruflichen Erfolg in Deutschland.",
      "ctaPrimary": "Beratung anfragen",
      "ctaSecondary": "Leistungen entdecken"
    },
    "services": {
      "title": "Unsere Leistungen",
      "subtitle": "Massgeschneiderte Losungen fur Ihren Erfolg",
      "employersTitle": "Fur Arbeitgeber",
      "employersDesc": "Strategische HR-Beratung und Integrationsprogramme",
      "talentsTitle": "Fur Talente",
      "talentsDesc": "Karrierebegleitung und kulturelle Integration"
    },
    "stats": {
      "clients": "Zufriedene Kunden",
      "clientsCount": "150+",
      "talents": "Betreute Talente",
      "talentsCount": "500+",
      "years": "Jahre Erfahrung",
      "yearsCount": "10+",
      "countries": "Herkunftslander",
      "countriesCount": "30+"
    },
    "testimonials": {
      "title": "Was unsere Kunden sagen",
      "subtitle": "Erfahrungen von Arbeitgebern und Talenten"
    }
  },
  "services": {
    "employers": {
      "intro": {
        "title": "Leistungen fur Arbeitgeber",
        "subtitle": "Erfolgreiche Integration beginnt mit der richtigen Strategie",
        "description": "Wir unterstutzen Sie bei der Rekrutierung, Integration und Bindung internationaler Fachkrafte."
      },
      "items": {
        "seminare": {
          "title": "Seminare",
          "shortDesc": "Interaktive Seminare zu interkultureller Kompetenz und Fuhrung internationaler Teams.",
          "longDesc": "Unsere Seminare vermitteln praxisnahes Wissen zur erfolgreichen Zusammenarbeit in diversen Teams. Themen umfassen interkulturelle Kommunikation, Konfliktmanagement und inklusive Fuhrung.",
          "benefits": [
            "Verbesserte Teamkommunikation",
            "Reduzierte Konflikte",
            "Hohere Mitarbeiterzufriedenheit",
            "Gestarktes Unternehmensimage"
          ],
          "targetAudience": "Fuhrungskrafte und HR-Verantwortliche",
          "icon": "presentation"
        },
        "schulungen": {
          "title": "Schulungen",
          "shortDesc": "Praxisorientierte Schulungen fur HR-Teams und Fuhrungskrafte.",
          "longDesc": "Intensive Schulungsprogramme zur Qualifizierung Ihrer Mitarbeiter im Umgang mit internationalen Kollegen und Bewerbern.",
          "benefits": [
            "Kompetenzaufbau im Team",
            "Standardisierte Prozesse",
            "Nachhaltige Wissensvermittlung",
            "Zertifizierte Qualifikation"
          ],
          "targetAudience": "HR-Teams und Teamleiter",
          "icon": "academic"
        },
        "workshops": {
          "title": "Workshops",
          "shortDesc": "Intensive Workshops zur Entwicklung von Integrationsstrategien.",
          "longDesc": "In unseren Workshops erarbeiten wir gemeinsam massgeschneiderte Losungen fur Ihre spezifischen Herausforderungen.",
          "benefits": [
            "Individuelle Losungsansatze",
            "Praktische Ubungen",
            "Direkte Anwendbarkeit",
            "Teambuilding-Effekt"
          ],
          "targetAudience": "Management und Projektteams",
          "icon": "users"
        },
        "vortraege": {
          "title": "Vortrage",
          "shortDesc": "Inspirierende Vortrage zu Diversitat und Integration.",
          "longDesc": "Unsere Experten halten Vortrage bei Konferenzen, Firmenventsanstaltungen und Fachtagungen.",
          "benefits": [
            "Inspiration fur Veranderung",
            "Fachwissen aus erster Hand",
            "Networking-Moglichkeiten",
            "Aktuelle Forschungserkenntnisse"
          ],
          "targetAudience": "Konferenzteilnehmer und Entscheider",
          "icon": "microphone"
        },
        "webinare": {
          "title": "Webinare",
          "shortDesc": "Online-Seminare fur flexibles Lernen.",
          "longDesc": "Digitale Lernformate ermoglichen ortsunabhangige Weiterbildung zu relevanten Integrationsthemen.",
          "benefits": [
            "Flexible Teilnahme",
            "Kosteneffizient",
            "Aufzeichnungen verfugbar",
            "Interaktive Q&A"
          ],
          "targetAudience": "Remote-Teams und Einzelpersonen",
          "icon": "video"
        },
        "coaching": {
          "title": "Coaching",
          "shortDesc": "Individuelles Coaching fur Fuhrungskrafte.",
          "longDesc": "Personliche Begleitung bei der Entwicklung interkultureller Fuhrungskompetenzen.",
          "benefits": [
            "Personliche Entwicklung",
            "Vertraulicher Rahmen",
            "Massgeschneiderte Inhalte",
            "Langfristige Begleitung"
          ],
          "targetAudience": "Fuhrungskrafte und High Potentials",
          "icon": "chat"
        },
        "training": {
          "title": "Training",
          "shortDesc": "Praxisnahe Trainings fur den Arbeitsalltag.",
          "longDesc": "Hands-on Trainings zur direkten Anwendung interkultureller Kompetenzen im Berufsalltag.",
          "benefits": [
            "Sofort anwendbar",
            "Praxisorientiert",
            "Messbare Ergebnisse",
            "Nachhaltige Verhaltensanderung"
          ],
          "targetAudience": "Alle Mitarbeiterebenen",
          "icon": "lightning"
        },
        "mentoring": {
          "title": "Mentoring",
          "shortDesc": "Mentoring-Programme fur nachhaltige Entwicklung.",
          "longDesc": "Strukturierte Mentoring-Programme zur Forderung interkultureller Zusammenarbeit.",
          "benefits": [
            "Wissenstransfer",
            "Netzwerkaufbau",
            "Karriereforderung",
            "Kultureller Austausch"
          ],
          "targetAudience": "Mentoren und Mentees im Unternehmen",
          "icon": "heart"
        },
        "events": {
          "title": "Events",
          "shortDesc": "Kulturelle Events und Networking-Veranstaltungen.",
          "longDesc": "Organisation von Events zur Forderung des interkulturellen Austauschs und Networking.",
          "benefits": [
            "Teambuilding",
            "Kultureller Austausch",
            "Employer Branding",
            "Mitarbeiterbindung"
          ],
          "targetAudience": "Gesamte Belegschaft",
          "icon": "calendar"
        }
      }
    },
    "talents": {
      "intro": {
        "title": "Leistungen fur Talente",
        "subtitle": "Ihr Weg zum beruflichen Erfolg in Deutschland",
        "description": "Wir begleiten Sie auf Ihrem Karriereweg mit individueller Beratung und praktischer Unterstutzung."
      },
      "items": {
        "seminare": {
          "title": "Seminare",
          "shortDesc": "Seminare zu deutscher Arbeitskultur und Berufseinstieg.",
          "longDesc": "Lernen Sie die Besonderheiten des deutschen Arbeitsmarktes kennen und bereiten Sie sich optimal auf Ihre Karriere vor.",
          "benefits": [
            "Kulturelles Verstandnis",
            "Bewerbungskompetenz",
            "Netzwerkaufbau",
            "Karriereplanung"
          ],
          "targetAudience": "Internationale Fachkrafte",
          "icon": "presentation"
        },
        "schulungen": {
          "title": "Schulungen",
          "shortDesc": "Fachliche Schulungen und Sprachkurse.",
          "longDesc": "Erweitern Sie Ihre fachlichen Qualifikationen und verbessern Sie Ihre Deutschkenntnisse.",
          "benefits": [
            "Qualifikationserweiterung",
            "Sprachforderung",
            "Zertifikate",
            "Arbeitsmarktchancen"
          ],
          "targetAudience": "Berufseinsteiger und Quereinsteiger",
          "icon": "academic"
        },
        "workshops": {
          "title": "Workshops",
          "shortDesc": "Praxisworkshops zur Bewerbung und Karriereplanung.",
          "longDesc": "In interaktiven Workshops uben Sie Bewerbungsgesprache und entwickeln Ihre Karrierestrategie.",
          "benefits": [
            "Praktische Ubung",
            "Individuelles Feedback",
            "Bewerbungsstrategie",
            "Selbstprasentation"
          ],
          "targetAudience": "Jobsuchende und Karrierewechsler",
          "icon": "users"
        },
        "vortraege": {
          "title": "Vortrage",
          "shortDesc": "Informationsveranstaltungen zu Leben und Arbeiten in Deutschland.",
          "longDesc": "Erhalten Sie wertvolle Einblicke in den deutschen Arbeitsmarkt und die deutsche Kultur.",
          "benefits": [
            "Orientierung",
            "Experteninformationen",
            "Fragen & Antworten",
            "Community-Aufbau"
          ],
          "targetAudience": "Neuankammlinge in Deutschland",
          "icon": "microphone"
        },
        "webinare": {
          "title": "Webinare",
          "shortDesc": "Online-Seminare fur flexibles Lernen von uberall.",
          "longDesc": "Nehmen Sie bequem von zu Hause oder unterwegs an unseren Online-Angeboten teil.",
          "benefits": [
            "Ortsunabhangig",
            "Zeitflexibel",
            "Aufzeichnungen",
            "Internationale Community"
          ],
          "targetAudience": "Alle internationalen Talente",
          "icon": "video"
        },
        "coaching": {
          "title": "Coaching",
          "shortDesc": "Personliches Karrierecoaching.",
          "longDesc": "Individuelle Begleitung bei der Karriereplanung und personlichen Entwicklung in Deutschland.",
          "benefits": [
            "Personliche Betreuung",
            "Zielorientiert",
            "Vertraulich",
            "Langfristige Unterstutzung"
          ],
          "targetAudience": "Fachkrafte mit Karriereambitionen",
          "icon": "chat"
        },
        "training": {
          "title": "Training",
          "shortDesc": "Soft-Skill-Trainings fur den deutschen Arbeitsmarkt.",
          "longDesc": "Entwickeln Sie die Soft Skills, die in deutschen Unternehmen gefragt sind.",
          "benefits": [
            "Kommunikationsfahigkeit",
            "Teamarbeit",
            "Selbstmanagement",
            "Konfliktlosung"
          ],
          "targetAudience": "Berufstatige und Berufseinsteiger",
          "icon": "lightning"
        },
        "mentoring": {
          "title": "Mentoring",
          "shortDesc": "Mentoring durch erfahrene Professionals.",
          "longDesc": "Profitieren Sie von der Erfahrung erfolgreicher Fachkrafte, die Ihren Weg bereits gegangen sind.",
          "benefits": [
            "Erfahrungsaustausch",
            "Insider-Wissen",
            "Netzwerk",
            "Karriereberatung"
          ],
          "targetAudience": "Internationale Talente aller Karrierestufen",
          "icon": "heart"
        },
        "events": {
          "title": "Events",
          "shortDesc": "Networking-Events und kulturelle Veranstaltungen.",
          "longDesc": "Bauen Sie Ihr berufliches Netzwerk auf und lernen Sie die deutsche Kultur kennen.",
          "benefits": [
            "Networking",
            "Kulturerlebnis",
            "Community",
            "Jobmoglichkeiten"
          ],
          "targetAudience": "Alle internationalen Talente",
          "icon": "calendar"
        }
      }
    }
  },
  "about": {
    "title": "Uber talentsCARE",
    "subtitle": "Brucken bauen zwischen Kulturen",
    "mission": {
      "title": "Unsere Mission",
      "text": "Wir glauben an eine Arbeitswelt, in der Vielfalt als Starke gesehen wird. Unsere Mission ist es, Unternehmen und internationale Talente auf ihrem gemeinsamen Weg zum Erfolg zu begleiten."
    },
    "values": {
      "title": "Unsere Werte",
      "respect": "Respekt",
      "respectDesc": "Wir begegnen allen Menschen mit Wertschatzung und Offenheit.",
      "excellence": "Exzellenz",
      "excellenceDesc": "Wir streben nach hochster Qualitat in allem, was wir tun.",
      "innovation": "Innovation",
      "innovationDesc": "Wir entwickeln kreative Losungen fur komplexe Herausforderungen.",
      "partnership": "Partnerschaft",
      "partnershipDesc": "Wir arbeiten auf Augenhohe mit unseren Kunden und Partnern."
    },
    "story": {
      "title": "Unsere Geschichte",
      "text": "talentsCARE wurde mit der Vision gegrundet, die Integration internationaler Fachkrafte in Deutschland nachhaltig zu verbessern. Seit unserer Grundung haben wir hunderte Unternehmen und Talente erfolgreich zusammengebracht."
    }
  },
  "team": {
    "title": "Unser Team",
    "subtitle": "Experten mit Leidenschaft",
    "intro": "Unser Team vereint jahrelange Erfahrung in HR-Beratung, interkultureller Kommunikation und Karriereentwicklung."
  },
  "contact": {
    "title": "Kontakt",
    "subtitle": "Sprechen Sie mit uns",
    "intro": "Haben Sie Fragen oder mochten Sie mehr uber unsere Leistungen erfahren? Wir freuen uns auf Ihre Nachricht.",
    "form": {
      "name": "Name",
      "email": "E-Mail",
      "phone": "Telefon",
      "company": "Unternehmen",
      "subject": "Betreff",
      "message": "Nachricht",
      "submit": "Nachricht senden",
      "success": "Vielen Dank fur Ihre Nachricht. Wir melden uns bald bei Ihnen.",
      "error": "Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
    },
    "info": {
      "address": "Adresse",
      "phone": "Telefon",
      "email": "E-Mail",
      "hours": "Offnungszeiten"
    }
  }
}
```

### Step 4: Translate to English (60 min)

Create `messages/en.json` with full English translations following same structure as German.

Key translation considerations:
- Maintain professional tone
- Adapt cultural references
- Keep technical terms consistent

### Step 5: Translate to Vietnamese (60 min)

Create `messages/vi.json` with full Vietnamese translations.

Key translation considerations:
- Use formal Vietnamese (appropriate for business)
- Handle diacritics properly (Unicode)
- Cultural adaptation for Vietnamese audience

### Step 6: Create Translation Validation Script (30 min)
```typescript
// scripts/validate-translations.ts
import de from '@/messages/de.json';
import en from '@/messages/en.json';
import vi from '@/messages/vi.json';

function getKeys(obj: object, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      return getKeys(value as object, path);
    }
    return [path];
  });
}

const deKeys = new Set(getKeys(de));
const enKeys = new Set(getKeys(en));
const viKeys = new Set(getKeys(vi));

console.log('Missing in EN:', [...deKeys].filter(k => !enKeys.has(k)));
console.log('Missing in VI:', [...deKeys].filter(k => !viKeys.has(k)));
console.log('Extra in EN:', [...enKeys].filter(k => !deKeys.has(k)));
console.log('Extra in VI:', [...viKeys].filter(k => !deKeys.has(k)));
```

### Step 7: Test All Translations (30 min)
```bash
npm run build
# Check all locale pages render
# Verify no missing translation warnings
# Test special characters (German umlauts, Vietnamese diacritics)
```

## Todo List

- [ ] Extract content from source document
- [ ] Create TypeScript definitions
- [ ] Complete German translations (de.json)
- [ ] Create English translations (en.json)
- [ ] Create Vietnamese translations (vi.json)
- [ ] Create validation script
- [ ] Run validation - fix missing keys
- [ ] Test build with all translations
- [ ] Verify special characters render

## Success Criteria

- [ ] All 3 JSON files have identical structure
- [ ] No missing translation keys
- [ ] German umlauts render correctly (a, o, u, ss)
- [ ] Vietnamese diacritics render correctly
- [ ] Build succeeds without translation warnings
- [ ] Content matches source document

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Translation inaccuracies | Medium | Medium | Professional review |
| Missing keys | High | High | Validation script |
| Encoding issues | Medium | Low | UTF-8 everywhere |
| Content drift between languages | Medium | Medium | Keep de.json as source of truth |

## Security Considerations

- No PII in translation files
- Escape HTML in user-facing strings
- Validate all interpolated values

## Next Steps

Upon completion, proceed to [phase-04-components.md](./phase-04-components.md) to build UI components using the translations.
