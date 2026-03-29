#!/usr/bin/env python3
"""Add Accessibility translations for FR, JA, PL, PT, UK, ZH locales."""
import json
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(__file__)),
                    "lumen-lingo-frontend", "messages")
SCRIPTS = os.path.dirname(__file__)

locales = ["fr", "ja", "pl", "pt", "uk", "zh"]
for lc in locales:
    json_path = os.path.join(SCRIPTS, f"accessibility_{lc}.json")
    with open(json_path) as f:
        trans = json.load(f)
    msg_path = os.path.join(BASE, f"{lc}.json")
    with open(msg_path) as f:
        data = json.load(f)
    data["Accessibility"] = trans
    with open(msg_path, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Added Accessibility to {lc}.json")
print(f"\nDone: {len(locales)} locales updated")
