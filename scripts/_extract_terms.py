#!/usr/bin/env python3
"""Extract full English text for all untranslated Terms keys."""
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
pl_data = load_json("pl")
en_terms = flatten(en_data.get("Terms", {}))
pl_terms = flatten(pl_data.get("Terms", {}))

for key in sorted(en_terms.keys()):
    en_val = en_terms[key]
    pl_val = pl_terms.get(key)
    if pl_val == en_val:
        print(f"KEY: {key}")
        print(f"  EN: {en_val}")
        print()
