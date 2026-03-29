#!/usr/bin/env python3
"""Analyse Eula namespace: count total keys, find untranslated ones per section."""
import json, os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

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

# Keys whose English value is intentionally identical across all locales
# (universal abbreviations, proper nouns, etc.)
INTENTIONALLY_SAME = {"breadcrumb"}

en_data = load_json("en")
eula_en = en_data.get("Eula", {})
en_flat = flatten(eula_en)
print(f"Total EN Eula keys: {len(en_flat)}")

# Use pl as representative locale to count untranslated
pl_data = load_json("pl")
eula_pl = pl_data.get("Eula", {})
pl_flat = flatten(eula_pl)

# Group by top-level section
from collections import defaultdict
sections = defaultdict(lambda: {"total": 0, "untranslated": 0})

for key, en_val in sorted(en_flat.items()):
    section = key.split(".")[0]
    sections[section]["total"] += 1
    if key in INTENTIONALLY_SAME:
        continue
    pl_val = pl_flat.get(key)
    if pl_val == en_val:
        sections[section]["untranslated"] += 1

print("\nSections and untranslated counts (pl as representative):")
total_untranslated = 0
for section in sorted(sections):
    s = sections[section]
    marker = " <--" if s["untranslated"] > 0 else ""
    print(f"  {section}: {s['total']} total, {s['untranslated']} untranslated{marker}")
    total_untranslated += s["untranslated"]

print(f"\nTotal untranslated: {total_untranslated}")

# Print all untranslated keys with their English values
print("\nAll untranslated keys:")
for key, en_val in sorted(en_flat.items()):
    if key in INTENTIONALLY_SAME:
        continue
    pl_val = pl_flat.get(key)
    if pl_val == en_val:
        preview = en_val[:80] + "..." if len(str(en_val)) > 80 else en_val
        print(f"  {key} = {preview}")
