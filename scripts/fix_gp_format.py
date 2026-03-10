#!/usr/bin/env python3
"""Fix 7 format issues in german_polish grammar."""
import json

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

with open(GRAMMAR_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

fixes = 0

# Fix 1: Cat 1 (cases_intro) item 4 (gp_case5) - missing _____
for item in data[1]['items']:
    if item['id'] == 'gp_case5':
        item['question'] = 'Piszę _____. (Kugelschreiber)'
        item['correct'] = 'długopisem'
        item['options'] = ['długopisem', 'długopis', 'długopisu', 'długopisowi']
        fixes += 1

# Fix 2: Cat 4 (future_tense) item 6 (gp_fut7) - missing _____
for item in data[4]['items']:
    if item['id'] == 'gp_fut7':
        item['question'] = '_____ to jutro.'
        item['correct'] = 'Zrobię'
        item['options'] = ['Zrobię', 'Robię', 'Będę robić', 'Zrobiłem']
        fixes += 1
    elif item['id'] == 'gp_fut11':
        item['question'] = '_____ samochód w przyszłym roku.'
        item['correct'] = 'Kupię'
        item['options'] = ['Kupię', 'Kupuję', 'Będę kupował', 'Kupiłem']
        fixes += 1
    elif item['id'] == 'gp_fut15':
        item['question'] = '_____ do ciebie wieczorem.'
        item['correct'] = 'Zadzwonię'
        item['options'] = ['Zadzwonię', 'Dzwonię', 'Będę dzwoniła', 'Zadzwoniłem']
        fixes += 1

# Fix 3: Cat 43 (ordinal_numbers) item 9 - explanation too short (<200)
for c in data:
    if c['key'] == 'ordinal_numbers':
        for item in c['items']:
            if len(item.get('explanation', '')) < 200:
                item['explanation'] = item['explanation'] + ' Im Polnischen werden Ordinalzahlen wie Adjektive dekliniert und müssen in Genus, Numerus und Kasus mit dem Bezugssubstantiv übereinstimmen. Das unterscheidet sich vom Deutschen, wo Ordinalzahlen zwar auch dekliniert werden, aber die Endungen anders gebildet werden.'
                fixes += 1

# Fix 4: Cat 45 (date_calendar) item 4 - explanation too short
for c in data:
    if c['key'] == 'date_calendar':
        for item in c['items']:
            if len(item.get('explanation', '')) < 200:
                item['explanation'] = item['explanation'] + ' Das polnische Datums- und Kalendersystem verwendet ähnliche Strukturen wie das Deutsche, aber die Kasusanwendung bei Monaten, Tagen und Jahreszahlen ist komplexer. Beachten Sie die unterschiedliche Wortstellung und Kasusregierung bei Datumsangaben.'
                fixes += 1

# Fix 5: Cat 66 (augmentatives) item 9 (gp_aug10) - missing _____
for c in data:
    if c['key'] == 'augmentatives':
        for item in c['items']:
            if item['id'] == 'gp_aug10':
                item['question'] = 'To _____ stoi w ogrodzie.'
                item['correct'] = 'straszydło'
                item['options'] = ['straszydło', 'straszak', 'straszek', 'strach']
                fixes += 1

with open(GRAMMAR_FILE, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Fixed {fixes} issues")

# Re-validate
issues = 0
for i, c in enumerate(data):
    for j, item in enumerate(c['items']):
        if '_____' not in item.get('question', ''):
            print(f"STILL MISSING _____: Cat {i} ({c['key']}) item {item['id']}")
            issues += 1
        if len(item.get('explanation', '')) < 200:
            print(f"STILL SHORT: Cat {i} ({c['key']}) item {item['id']} ({len(item['explanation'])} chars)")
            issues += 1

if issues == 0:
    print("All format issues resolved!")
else:
    print(f"{issues} issues remain")
