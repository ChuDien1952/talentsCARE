#!/usr/bin/env python3
"""
Extract Services subsections
"""

import sys
import json
from pathlib import Path

def get_services_subsections():
    """Get Services subsections"""
    try:
        json_path = Path("Documents/extracted_content.json")

        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Get employer subsections
        print("=== EMPLOYER SERVICES SUBSECTIONS ===\n")
        for key in sorted(data['sections'].keys()):
            if key.startswith('4.') and 'ARBEITGEBER' not in key:
                print(f"\n--- {key} ---")
                content = data['sections'][key]
                for line in content[:30]:  # First 30 lines
                    print(line)

        print("\n\n=== TALENT SERVICES SUBSECTIONS ===\n")
        for key in sorted(data['sections'].keys()):
            if key.startswith('5.') and 'TALENTE' not in key:
                print(f"\n--- {key} ---")
                content = data['sections'][key]
                for line in content[:30]:  # First 30 lines
                    print(line)

    except Exception as e:
        print(f"ERROR: {str(e)}", file=sys.stderr)
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    get_services_subsections()
