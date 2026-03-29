#!/usr/bin/env python3
"""Verify all terms page translation keys exist in the Terms namespace."""
import json
import re
import os

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(base, "src/app/[locale]/terms/page.tsx")) as f:
    tsx = f.read()

pattern = r"t\('([^']+)'\)"
keys_used = set(re.findall(pattern, tsx))

with open(os.path.join(base, "messages/en.json")) as f:
    data = json.load(f)

terms = data.get("Terms", {})

missing = []
for key in sorted(keys_used):
    parts = key.split(".")
    obj = terms
    found = True
    for p in parts:
        if isinstance(obj, dict) and p in obj:
            obj = obj[p]
        else:
            found = False
            break
    if not found:
        missing.append(key)

if missing:
    print(f"MISSING {len(missing)} keys:")
    for m in missing:
        print(f"  Terms.{m}")
else:
    print(f"All {len(keys_used)} translation keys found in Terms namespace")
