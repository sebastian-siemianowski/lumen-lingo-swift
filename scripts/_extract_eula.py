#!/usr/bin/env python3
"""Extract full English text for all untranslated EULA keys."""
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
eula_en = en_data.get("Eula", {})
en_flat = flatten(eula_en)

pl_data = load_json("pl")
eula_pl = pl_data.get("Eula", {})
pl_flat = flatten(eula_pl)

for key, en_val in sorted(en_flat.items()):
    pl_val = pl_flat.get(key)
    if pl_val == en_val:
        print(f"\n=== Eula.{key} ===")
        print(en_val)
