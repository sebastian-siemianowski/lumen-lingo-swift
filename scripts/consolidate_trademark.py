#!/usr/bin/env python3
"""Consolidate trademarkAttribution into Legal namespace and remove from Privacy, Terms, Eula."""

import json
import glob
import os

MESSAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'lumen-lingo-frontend', 'messages')

locale_files = sorted(glob.glob(os.path.join(MESSAGES_DIR, '*.json')))

for filepath in locale_files:
    locale = os.path.basename(filepath).replace('.json', '')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Get the trademark text from Privacy (canonical source)
    trademark_text = data.get('Privacy', {}).get('trademarkAttribution')
    if not trademark_text:
        # If not in Privacy, try Terms, then Eula
        trademark_text = data.get('Terms', {}).get('trademarkAttribution')
    if not trademark_text:
        trademark_text = data.get('Eula', {}).get('trademarkAttribution')
    
    if not trademark_text:
        print(f'{locale}: WARNING - no trademarkAttribution found!')
        continue
    
    # Add to Legal namespace
    data['Legal']['trademarkAttribution'] = trademark_text
    
    # Remove from Privacy, Terms, Eula
    removed_from = []
    for ns in ['Privacy', 'Terms', 'Eula']:
        if ns in data and 'trademarkAttribution' in data[ns]:
            del data[ns]['trademarkAttribution']
            removed_from.append(ns)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')
    
    print(f'{locale}: moved to Legal, removed from {", ".join(removed_from)}')

print('\nDone!')
