#!/usr/bin/env python3
"""
Add German translations to de.json
"""

import json
from pathlib import Path

def main():
    # Load existing de.json
    de_path = Path('messages/de.json')
    with open(de_path, 'r', encoding='utf-8') as f:
        de_data = json.load(f)

    # Add employers translations
    de_data['services']['employers']['tagline'] = 'Recruiting ist nur der erste Schritt – echte Fachkräftegewinnung bedeutet nachhaltige Integration'
    de_data['services']['employers']['intro'] = {
        'headline': 'Warum talentsCARE?',
        'paragraph1': 'Wir unterstützen Unternehmen dabei, internationale Fachkräfte nicht nur zu gewinnen, sondern langfristig zu halten. Mit praxisnahen Onboarding-Programmen, interkulturellem Training und bundesweit flächendeckendem Mentoring schaffen wir die Basis für nachhaltige Integration, stabile Teams und langfristigen Unternehmenserfolg.',
        'paragraph2': 'Der Fachkräftemangel stellt viele Unternehmen vor große Herausforderungen – besonders bei nachhaltiger Integration und langfristiger Mitarbeiterbindung.'
    }
    de_data['services']['employers']['detailedServices'] = {
        'recruiting': {
            'title': 'Recruiting-Beratung',
            'audience': 'Zielgruppe: Unternehmen mit offenen Stellen für Fachkräfte und Azubis aus Drittstaaten',
            'description': 'Wir finden Fachkräfte und Azubis aus Drittstaaten, die fachlich und menschlich zu Ihrem Unternehmen passen. Unsere Beratung umfasst Bedarfsanalyse, Stellenprofil-Erstellung und Matching mit vorqualifizierten Kandidaten aus dem VIETconsult-Netzwerk.'
        },
        'onboarding': {
            'title': 'Onboarding-Programme',
            'audience': 'Zielgruppe: Neue internationale Mitarbeitende, deren Teams und Führungskräfte',
            'description': 'Wir gestalten den Start systematisch – für Talente, Teams und Führungskräfte. Ein strukturiertes Onboarding reduziert die Einarbeitungszeit und erhöht die Bindung von Anfang an.'
        },
        'training': {
            'title': 'Interkulturelles Training',
            'audience': 'Zielgruppe: Teams, Abteilungen und Führungskräfte, die mit internationalen Kollegen arbeiten',
            'description': 'Wir schulen Teams und Führungskräfte, um Zusammenarbeit und Kommunikation zu verbessern. Aus Vielfalt wird Stärke – Missverständnisse werden vermieden, Zusammenarbeit gestärkt.'
        },
        'mentoring': {
            'title': 'Mentoring-Programme',
            'audience': 'Zielgruppe: Unternehmen, die ein strukturiertes Mentoring-System aufbauen möchten',
            'description': 'Ein bewährtes Instrument für nachhaltige Integration. Mentoring schafft Vertrauen und trägt zur langfristigen Fachkräftebindung bei.'
        },
        'retention': {
            'title': 'Fachkräftebindung',
            'audience': 'Zielgruppe: Unternehmen mit bestehenden internationalen Mitarbeitenden',
            'description': 'Wir entwickeln Strategien, damit Talente nicht nur bleiben, sondern sich fachlich und persönlich weiterentwickeln.'
        },
        'cooperation': {
            'title': 'Starke Kooperation',
            'audience': 'Zielgruppe: Behörden, Kammern, Bildungsträger und Unternehmen',
            'description': 'Wir übernehmen die Abstimmung mit Behörden, Kammern und Institutionen und gestalten gemeinsam praxisnahe Formate.'
        }
    }

    # Add talents translations
    de_data['services']['talents']['tagline'] = 'Unser Ziel: Sie sollen sich nicht nur fachlich, sondern auch menschlich sicher, verstanden und willkommen fühlen'
    de_data['services']['talents']['intro'] = {
        'headline': 'Ihre Reise nach Deutschland',
        'description': 'Wir begleiten internationale Fachkräfte auf ihrem Weg nach Deutschland – von der Vorbereitung im Heimatland bis zur erfolgreichen Integration im Beruf und Alltag. Mit praxisnahen Trainings, individueller Betreuung und bundesweitem Mentoring schaffen wir die Grundlage für einen sicheren Start, persönliche Entwicklung und langfristigen Erfolg.'
    }
    de_data['services']['talents']['phasesHeadline'] = 'Ihre Integration in 6 Phasen'
    de_data['services']['talents']['phases'] = {
        'phase1': {
            'title': 'Vorbereitung im Heimatland',
            'timeline': 'Zeitraum: 3–6 Monate vor Einreise',
            'description': 'Gemeinsam mit unseren Kooperationspartnern vor Ort (VIETconsult / HDEU Vietnam) bereiten wir Talente optimal auf ihren Start in Deutschland vor.'
        },
        'phase2': {
            'title': 'Unterstützung beim Start in Deutschland',
            'timeline': 'Zeitraum: Erste 1–3 Monate nach Ankunft',
            'description': 'Wir bieten keine bloße Begleitung, sondern echte Unterstützung beim Ankommen.'
        },
        'phase3': {
            'title': 'Berufliche Begleitung',
            'timeline': 'Zeitraum: Monat 1–12 im Unternehmen',
            'description': 'Viele Unternehmen beschränken sich auf fachliche Einarbeitung – wir gehen bewusst weiter.'
        },
        'phase4': {
            'title': 'Persönliche Entwicklung',
            'timeline': 'Zeitraum: Ab Monat 6, fortlaufend',
            'description': 'Wir fördern Talente als ganze Menschen – nicht nur als Fachkräfte.',
            'items': [
                'Aufbau beruflicher Netzwerke: Fachveranstaltungen, Branchentreffen, Alumni-Netzwerk',
                'Aufbau privater Netzwerke: Sportvereine, Kulturgruppen, Nachbarschaftsinitiativen',
                'Coaching zur Selbstständigkeit: Selbstvertrauen, Eigenverantwortung, Entscheidungsfähigkeit',
                'Sprachliche Weiterentwicklung: Über B2 hinaus, Fachsprache, Dialekte verstehen',
                'Karriereplanung: Welche nächsten Schritte sind möglich? Weiterbildung, Aufstieg, Spezialisierung'
            ]
        },
        'phase5': {
            'title': 'Mentoring',
            'timeline': 'Zeitraum: 12–24 Monate, erweiterbar',
            'description': 'Unsere Mentoring-Programme begleiten Talente individuell über den gesamten Integrationsprozess hinweg.',
            'items': [
                'Persönliche Begleitung durch erfahrene Mentoren (1:1)',
                'Orientierung im Berufs- und Alltagsleben',
                'Unterstützung beim Aufbau von beruflichen und sozialen Netzwerken',
                'Regelmäßige Treffen (mindestens 2x monatlich)',
                'Gemeinsame Zielvereinbarungen und Fortschrittskontrolle'
            ]
        },
        'phase6': {
            'title': 'Digitale Unterstützung & Lernplattformen',
            'timeline': 'Zeitraum: Fortlaufend',
            'description': 'Wir begleiten Talente auch digital, um kontinuierliches Lernen und Vernetzung zu ermöglichen.',
            'items': [
                'Online-Lernplattformen: Berufliche und sprachliche Weiterbildung (asynchron)',
                'Virtuelle Netzwerke: Austausch mit anderen Talenten deutschlandweit',
                'Digitale Alltagshilfen: Apps und Tools für Behörden, Wohnung, Gesundheit',
                'Live-Webinare: Monatliche Themenabende zu relevanten Integrationsfragen',
                'Erfolgsgeschichten: Plattform zum Teilen von Erfahrungen und Inspiration'
            ]
        }
    }

    # Save
    with open(de_path, 'w', encoding='utf-8') as f:
        json.dump(de_data, f, ensure_ascii=False, indent=2)

    print('[OK] German translations added successfully!')

if __name__ == '__main__':
    main()
