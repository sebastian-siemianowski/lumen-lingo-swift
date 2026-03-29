#!/usr/bin/env python3
"""Debug: check why Part 7 keys weren't applied."""
import json, os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def get_nested(d, keys):
    for key in keys:
        if isinstance(d, dict) and key in d:
            d = d[key]
        else:
            return None
    return d

en_data = load_json("en")
pl_data = load_json("pl")

test_keys = [
    "brazilPrivacy.heading",
    "brazilPrivacy.intro",
    "brazilPrivacy.applicabilityHeading",
    "brazilPrivacy.rightsLi1",
    "euRepresentative.heading",
    "euRepresentative.assessment1",
]

for dotkey in test_keys:
    keys = dotkey.split(".")
    en_val = get_nested(en_data.get("Privacy", {}), keys)
    pl_val = get_nested(pl_data.get("Privacy", {}), keys)
    print(f"\n--- {dotkey} ---")
    print(f"  EN exists: {en_val is not None}")
    if en_val:
        print(f"  EN value (first 80): {str(en_val)[:80]}")
    print(f"  PL exists: {pl_val is not None}")
    if pl_val:
        print(f"  PL value (first 80): {str(pl_val)[:80]}")
    print(f"  Match EN: {en_val == pl_val}")
