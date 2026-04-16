#!/usr/bin/env python3
"""
Extract detailed Services content
"""

import sys
import json
from pathlib import Path

def get_services_detail():
    """Get detailed Services content"""
    try:
        json_path = Path("Documents/extracted_content.json")

        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Get employer services
        employer_key = "4. SEITE: SERVICES � ARBEITGEBER (ERWEITERT)"
        talent_key = "5. SEITE: SERVICES � TALENTE (ERWEITERT)"

        if employer_key in data['sections']:
            print("=== EMPLOYER SERVICES (First 100 lines) ===\n")
            for i, line in enumerate(data['sections'][employer_key][:100], 1):
                print(f"{i:3d}. {line}")

        print("\n\n=== TALENT SERVICES (First 100 lines) ===\n")
        if talent_key in data['sections']:
            for i, line in enumerate(data['sections'][talent_key][:100], 1):
                print(f"{i:3d}. {line}")

        # Check related sections
        print("\n\n=== RELATED SECTIONS ===\n")
        for key in data['sections'].keys():
            if '4.' in key or '5.' in key:
                print(f"- {key}")

    except Exception as e:
        print(f"ERROR: {str(e)}", file=sys.stderr)
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    get_services_detail()
