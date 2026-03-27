#!/usr/bin/env python3
"""Check full text of key children's privacy enforcement fields."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))
priv = data["Privacy"]

print("=== childrensPrivacy.parentalP2 (full) ===")
print(priv["childrensPrivacy"]["parentalP2"])
print()
print("=== childrensPrivacy.p1 (full) ===")
print(priv["childrensPrivacy"]["p1"])
print()
print("=== childrensPrivacy.p3 (full) ===")
print(priv["childrensPrivacy"]["p3"])
print()
print("=== childrensPrivacy.coppaP2 (full) ===")
print(priv["childrensPrivacy"]["coppaP2"])
print()
# Check for 72 hours anywhere in entire Privacy namespace
def search_text(d, prefix=""):
    results = []
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            results.extend(search_text(v, key))
        elif isinstance(v, str) and "72" in v:
            results.append((key, v))
    return results

matches = search_text(priv)
print(f"=== Keys containing '72' ({len(matches)}) ===")
for k, v in matches:
    print(f"  {k}: {v[:150]}")
