#!/usr/bin/env python3
"""Analyze untranslated Privacy keys by section."""
import json, pathlib

ROOT = pathlib.Path(__file__).parent.parent / "lumen-lingo-frontend" / "messages"

def flatten(d, prefix=''):
    items = {}
    for k, v in d.items():
        key = f'{prefix}.{k}' if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        elif isinstance(v, str):
            items[key] = v
    return items

en = json.loads((ROOT / "en.json").read_text())
pl = json.loads((ROOT / "pl.json").read_text())

en_p = flatten(en.get("Privacy", {}))
pl_p = flatten(pl.get("Privacy", {}))

sections = {}
untranslated_by_section = {}

for k, v in en_p.items():
    section = k.split(".")[0]
    if section not in sections:
        sections[section] = 0
        untranslated_by_section[section] = 0
    sections[section] += 1
    if k in pl_p and pl_p[k] == v and len(v) > 20:
        untranslated_by_section[section] += 1

print(f"Total EN Privacy keys: {len(en_p)}")
print(f"\nSections and untranslated counts:")
for s in sections:
    ut = untranslated_by_section[s]
    total = sections[s]
    marker = " <--" if ut > 0 else ""
    print(f"  {s}: {total} total, {ut} untranslated{marker}")

# Print all untranslated keys
print(f"\nAll untranslated keys (>20 chars):")
for k, v in en_p.items():
    if k in pl_p and pl_p[k] == v and len(v) > 20:
        preview = v[:80] + "..." if len(v) > 80 else v
        print(f"  {k} = {preview}")
