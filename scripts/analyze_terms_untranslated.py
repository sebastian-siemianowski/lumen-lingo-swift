#!/usr/bin/env python3
"""Analyze untranslated Terms keys per section."""
import json, os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def flatten(d, prefix=""):
    items = {}
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        else:
            items[key] = v
    return items

en_data = load_json("en")
en_terms = flatten(en_data.get("Terms", {}))
print(f"Total EN Terms keys: {len(en_terms)}")

# Use pl as reference
pl_data = load_json("pl")
pl_terms = flatten(pl_data.get("Terms", {}))

sections = {}
untranslated = []
for key, en_val in en_terms.items():
    section = key.split(".")[0]
    sections.setdefault(section, {"total": 0, "untranslated": 0})
    sections[section]["total"] += 1
    pl_val = pl_terms.get(key)
    if pl_val == en_val:
        sections[section]["untranslated"] += 1
        untranslated.append((key, en_val))

print(f"\nSections and untranslated counts:")
for section in sorted(sections.keys()):
    s = sections[section]
    marker = " <--" if s["untranslated"] > 0 else ""
    print(f"  {section}: {s['total']} total, {s['untranslated']} untranslated{marker}")

print(f"\nTotal untranslated: {len(untranslated)}")
print(f"\nAll untranslated keys:")
for key, val in untranslated:
    print(f"  {key} = {val[:100]}...")
