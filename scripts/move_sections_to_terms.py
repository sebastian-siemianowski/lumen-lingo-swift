#!/usr/bin/env python3
"""Move 6 sections from Privacy namespace to Terms namespace in all locale files."""

import json
import glob
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')
SECTIONS_TO_MOVE = [
    'vatCompliance',
    'euVatCompliance',
    'internationalTax',
    'pricingCompliance',
    'sanctionsCompliance',
    'encryptionExport',
]

locale_files = sorted(glob.glob(os.path.join(MESSAGES_DIR, '*.json')))

for filepath in locale_files:
    locale = os.path.basename(filepath).replace('.json', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    privacy = data.get('Privacy', {})
    terms = data.get('Terms', {})
    
    moved = []
    for section in SECTIONS_TO_MOVE:
        if section in privacy:
            terms[section] = privacy.pop(section)
            moved.append(section)
    
    data['Privacy'] = privacy
    data['Terms'] = terms
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')
    
    print(f'{locale}: moved {len(moved)} sections -> {moved}')

print('\nDone! All 6 sections moved from Privacy to Terms in all locale files.')
