#!/usr/bin/env python3
"""Check remaining Story 16 AC items."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))
priv = data["Privacy"]

print("=== yourRights.gdprLi5 (right to object) ===")
print(priv["yourRights"]["gdprLi5"])

print("\n=== yourRights.gdprLi8 (consent withdrawal) ===")
print(priv["yourRights"]["gdprLi8"])

print("\n=== automatedDecisions ===")
for k, v in priv["automatedDecisions"].items():
    print(f"  {k}: {v[:150]}")

print("\n=== childrensPrivacy - ALL keys ===")
for k, v in priv["childrensPrivacy"].items():
    if isinstance(v, str):
        print(f"  {k}: {v[:200]}")

# Check for GDPR Art 8 / DPA 2018 s.9 references anywhere
def search_refs(d, prefix=""):
    results = []
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            results.extend(search_refs(v, key))
        elif isinstance(v, str):
            text_lower = v.lower()
            if "art. 8" in text_lower or "article 8" in text_lower or "s.9" in text_lower or "section 9" in text_lower:
                results.append((key, v[:150]))
    return results

print("\n=== Art. 8 / DPA s.9 references ===")
matches = search_refs(priv)
for k, v in matches:
    print(f"  {k}: {v}")
if not matches:
    print("  None found")

print("\n=== enhancedChildPrivacy - key names ===")
for k in priv["enhancedChildPrivacy"]:
    print(f"  {k}")
