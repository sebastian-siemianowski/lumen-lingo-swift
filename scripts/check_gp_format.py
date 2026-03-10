#!/usr/bin/env python3
"""Check german_polish grammar format compliance."""
import json
from collections import Counter

GRAMMAR_FILE = 'LumenLingo/LumenLingo/Resources/Content/german_polish/grammar_german_polish.json'

with open(GRAMMAR_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total: {len(data)} categories, {sum(len(c['items']) for c in data)} items\n")

# Check format of every category
issues = []
for i, c in enumerate(data):
    for j, item in enumerate(c['items']):
        fields = set(item.keys())
        required = {'id', 'question', 'translation', 'options', 'correct', 'explanation'}
        missing = required - fields
        if missing:
            issues.append(f"Cat {i} ({c['key']}) item {j}: MISSING fields {missing}")
        if '_____' not in item.get('question', ''):
            issues.append(f"Cat {i} ({c['key']}) item {j} ({item['id']}): NO _____ in question: {item.get('question', '')[:60]}")
        opts = item.get('options', [])
        if not isinstance(opts, list) or len(opts) != 4:
            issues.append(f"Cat {i} ({c['key']}) item {j}: options count = {len(opts) if isinstance(opts, list) else 'NOT A LIST'}")
        if item.get('correct', '') not in opts if isinstance(opts, list) else True:
            issues.append(f"Cat {i} ({c['key']}) item {j}: correct '{item.get('correct','')}' NOT in options")
        exp_len = len(item.get('explanation', ''))
        if exp_len < 200:
            issues.append(f"Cat {i} ({c['key']}) item {j}: explanation too short ({exp_len} chars)")

# Print sample from first and last categories
print("=== First cat sample ===")
item = data[0]['items'][0]
print(f"  Fields: {list(item.keys())}")
print(f"  question: {item.get('question', 'MISSING')[:100]}")
print(f"  correct: {item.get('correct', 'MISSING')}")
print(f"  options: {item.get('options', 'MISSING')}")
print()

print("=== Last cat sample ===")
item = data[-1]['items'][0]
print(f"  Fields: {list(item.keys())}")
print(f"  question: {item.get('question', 'MISSING')[:100]}")
print(f"  correct: {item.get('correct', 'MISSING')}")
print(f"  options: {item.get('options', 'MISSING')}")
print()

# Duplicate check
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k: v for k, v in Counter(all_ids).items() if v > 1}
print(f"Duplicate IDs: {dupes if dupes else 'None'}")

# Print issues
if issues:
    print(f"\n=== {len(issues)} FORMAT ISSUES ===")
    for issue in issues[:30]:
        print(f"  {issue}")
    if len(issues) > 30:
        print(f"  ... and {len(issues) - 30} more")
else:
    print("\nAll items pass format validation!")

# Prefixes used
prefixes = set()
for c in data:
    for item in c['items']:
        prefix = item['id'].rstrip('0123456789')
        prefixes.add(prefix)
print(f"\nUsed prefixes ({len(prefixes)}): {sorted(prefixes)}")
