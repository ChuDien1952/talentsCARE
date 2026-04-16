#!/usr/bin/env python3
"""
Extract About page content from extracted JSON
"""

import sys
import json
from pathlib import Path

def get_about_content():
    """Get About page content"""
    try:
        json_path = Path("Documents/extracted_content.json")

        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Find About page section
        about_section_key = None
        for key in data['sections'].keys():
            if 'BER UNS' in key.upper() or 'ABOUT' in key.upper():
                about_section_key = key
                break

        if about_section_key:
            print(f"Found section: {about_section_key}")
            print("\n=== CONTENT ===\n")
            content = data['sections'][about_section_key]
            for line in content[:100]:  # First 100 lines
                print(line)
        else:
            print("About section not found")
            print("\nAvailable sections:")
            for key in list(data['sections'].keys())[:20]:
                print(f"  - {key}")

    except Exception as e:
        print(f"ERROR: {str(e)}", file=sys.stderr)
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    get_about_content()
