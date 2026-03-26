#!/usr/bin/env python3
"""Count untranslated keys per namespace per locale."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
en = json.loads((ROOT / "en.json").read_text())
locales = ["pl","de","es","fr","ja","zh","ar","uk"]
namespaces = ["Privacy","Terms","Eula","CookiePage"]

def flatten(d, prefix=""):
    items = {}
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict): items.update(flatten(v, key))
        elif isinstance(v, str): items[key] = v
    return items

print(f"{'Namespace':<15} {'EN keys':<10} {'Avg untranslated/locale':<25}")
print("-" * 50)
for ns in namespaces:
    en_flat = flatten(en.get(ns, {}))
    total_keys = len(en_flat)
    per_locale = {}
    for loc in locales:
        data = json.loads((ROOT / f"{loc}.json").read_text())
        loc_flat = flatten(data.get(ns, {}))
        count = 0
        for k, v in loc_flat.items():
            if k in en_flat and v == en_flat[k] and len(v) > 30:
                count += 1
        per_locale[loc] = count
    avg = sum(per_locale.values()) / len(locales)
    print(f"{ns:<15} {total_keys:<10} {avg:<25.0f}")
    for loc, c in per_locale.items():
        if c > 0:
            print(f"  {loc}: {c} untranslated")

print()
grand = sum(sum(1 for k, v in flatten(json.loads((ROOT / f"{loc}.json").read_text()).get(ns, {})).items() if k in flatten(en.get(ns, {})) and v == flatten(en.get(ns, {})).get(k, "") and len(v) > 30) for loc in locales for ns in namespaces)
print(f"GRAND TOTAL: {grand} untranslated strings across all locales and namespaces")
