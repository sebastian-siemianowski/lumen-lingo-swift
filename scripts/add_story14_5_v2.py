#!/usr/bin/env python3
"""Story 14.5 — Add comprehensive liability caps & exclusions translations.
Uses a separate JSON data file to avoid Python string escaping issues."""

import json, os

BASE = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages"
DATA_PATH = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/scripts/story14_5_data.json"

with open(DATA_PATH, "r", encoding="utf-8") as f:
    translations = json.load(f)

for locale, data in translations.items():
    path = os.path.join(BASE, f"{locale}.json")
    with open(path, "r", encoding="utf-8") as f:
        content = json.load(f)
    for key, val in data.items():
        content["Terms"][key] = val
    with open(path, "w", encoding="utf-8") as f:
        json.dump(content, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Updated {locale}.json with 14.5 sections")

print("Done — Story 14.5 translations added to all 10 locales.")
