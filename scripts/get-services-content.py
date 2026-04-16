#!/usr/bin/env python3
"""
Extract Services content from extracted JSON
"""

import sys
import json
from pathlib import Path

def get_services_content():
    """Get Services pages content"""
    try:
        json_path = Path("Documents/extracted_content.json")

        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Find Services sections
        print("=== AVAILABLE SECTIONS ===\n")
        for i, key in enumerate(list(data['sections'].keys())[:30]):
            print(f"{i+1}. {key}")

        print("\n=== SEARCHING FOR SERVICES CONTENT ===\n")

        # Search for employer-related sections
        employer_sections = []
        talent_sections = []

        for key in data['sections'].keys():
            key_upper = key.upper()
            if any(word in key_upper for word in ['ARBEITGEBER', 'UNTERNEHMEN', 'EMPLOYER', 'COMPANY']):
                employer_sections.append(key)
            if any(word in key_upper for word in ['FACHKR', 'TALENT', 'MITARBEIT', 'PROFESSIONAL']):
                talent_sections.append(key)

        if employer_sections:
            print("EMPLOYER SECTIONS:")
            for section in employer_sections[:5]:
                print(f"\n--- {section} ---")
                content = data['sections'][section]
                for line in content[:20]:  # First 20 lines
                    print(line)

        if talent_sections:
            print("\n\nTALENT SECTIONS:")
            for section in talent_sections[:5]:
                print(f"\n--- {section} ---")
                content = data['sections'][section]
                for line in content[:20]:  # First 20 lines
                    print(line)

    except Exception as e:
        print(f"ERROR: {str(e)}", file=sys.stderr)
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    get_services_content()
