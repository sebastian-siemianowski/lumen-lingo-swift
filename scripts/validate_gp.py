#!/usr/bin/env python3
"""Validate german_polish grammar format."""
import json
from collections import Counter

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

with open(GRAMMAR_FILE) as f:
    data = json.load(f)

# Validate ALL items
issues = []
for ci, c in enumerate(data):
    for ii, item in enumerate(c['items']):
        if '_____' not in item.get('question', ''):
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1} ({item['id']}): NO _____ in question")
        if len(item.get('options', [])) != 4:
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1} ({item['id']}): {len(item.get('options',[]))} options (need 4)")
        if len(item.get('explanation', '')) < 200:
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1} ({item['id']}): explanation only {len(item.get('explanation',''))} chars")
        if 'correct' not in item:
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1} ({item['id']}): NO correct field")
        if 'translation' not in item:
            issues.append(f"Cat {ci+1} ({c['key']}) item {ii+1} ({item['id']}): NO translation field")

if issues:
    print(f"{len(issues)} FORMAT ISSUES:")
    for iss in issues:
        print(f"  {iss}")
else:
    print("All items pass format validation!")

# Check duplicates
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k: v for k, v in Counter(all_ids).items() if v > 1}
print(f"\nDuplicate IDs: {dupes if dupes else 'None'}")
print(f"\nSummary: {len(data)} categories, {len(all_ids)} items")
print(f"Need: {105 - len(data)} more categories")
