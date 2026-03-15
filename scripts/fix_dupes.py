#!/usr/bin/env python3
"""Fix duplicate item IDs in grammar_german_polish.json"""
import json, os

FILE = os.path.join(os.path.dirname(__file__), '..', 'LumenLingo', 'LumenLingo', 'Resources', 'Content', 'german_polish', 'grammar_german_polish.json')

with open(FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Fix date_calendar items: gp_dat -> gp_dcal
for c in data:
    if c.get('id') == 'gp_date_cal':
        for item in c['items']:
            item['id'] = item['id'].replace('gp_dat', 'gp_dcal')

# Fix advanced locative: gp_loc -> gp_loca
for c in data:
    name = c.get('name', '')
    if 'Miejscownik' in name and 'Zaawansowany' in name:
        for item in c['items']:
            item['id'] = item['id'].replace('gp_loc', 'gp_loca')

# Fix advanced instrumental: gp_ins -> gp_insa
for c in data:
    name = c.get('name', '')
    if 'Narz' in name and 'Zaawansowany' in name:
        for item in c['items']:
            item['id'] = item['id'].replace('gp_ins', 'gp_insa')

# Fix advanced dative: gp_dat -> gp_data
for c in data:
    name = c.get('name', '')
    if 'Celownik' in name and 'Zaawansowany' in name:
        for item in c['items']:
            item['id'] = item['id'].replace('gp_dat', 'gp_data')

with open(FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Verify
all_ids = []
for c in data:
    for item in c.get('items', []):
        all_ids.append(item['id'])
dupes = [x for x in set(all_ids) if all_ids.count(x) > 1]
if dupes:
    print(f"Still {len(dupes)} duplicate IDs: {dupes[:10]}...")
else:
    print("All duplicate IDs fixed!")
print(f"Total: {len(data)} cats, {sum(len(c.get('items', [])) for c in data)} items")
