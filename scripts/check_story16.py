#!/usr/bin/env python3
"""Check which Story 16 content already exists in Privacy Policy."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))
priv = data["Privacy"]

# Check key details  
sections_to_check = [
    "yourRights", "dataRetention", "subProcessors", "internationalTransfers",
    "automatedDecisions", "childrensPrivacy", "enhancedChildPrivacy",
    "legalBasis", "dataProvisionRequirements"
]

for sec in sections_to_check:
    if sec in priv and isinstance(priv[sec], dict):
        keys = list(priv[sec].keys())
        print(f"{sec}: EXISTS ({len(keys)} subkeys)")
        for k in keys:
            val = priv[sec][k]
            if isinstance(val, str):
                print(f"  .{k} = {val[:100]}")
            elif isinstance(val, dict):
                print(f"  .{k}/ ({len(val)} subkeys)")
    else:
        print(f"{sec}: MISSING")
    print()

# Search for consent withdrawal, law enforcement
print("=== Searching for consent withdrawal ===")
for k in priv:
    if "consent" in k.lower() or "withdraw" in k.lower():
        print(f"  {k}")

print("\n=== Searching for law enforcement ===")
for k in priv:
    if "law" in k.lower() or "enforce" in k.lower() or "government" in k.lower():
        print(f"  {k}")
