#!/usr/bin/env python3
"""Verify Story 16 AC items against existing content."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))
priv = data["Privacy"]

print("=== subProcessors.changes ===")
for k, v in priv["subProcessors"]["changes"].items():
    print(f"  {k}: {v}")

print("\n=== childrensPrivacy - enforcement related ===")
for k, v in priv["childrensPrivacy"].items():
    if isinstance(v, str) and ("delet" in v.lower() or "enforce" in v.lower() or "72" in v or "dpa" in v.lower()):
        print(f"  {k}: {v[:200]}")

print("\n=== enhancedChildPrivacy - enforcement related ===")
for k, v in priv["enhancedChildPrivacy"].items():
    if isinstance(v, str) and ("delet" in v.lower() or "enforce" in v.lower() or "72" in v or "dpa" in v.lower()):
        print(f"  {k}: {v[:200]}")

print("\n=== Translation status for key sections ===")
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
sections = ["yourRights", "dataRetention", "subProcessors", "internationalTransfers",
            "automatedDecisions", "childrensPrivacy", "enhancedChildPrivacy",
            "legalBasis", "dataProvisionRequirements", "ageConsent"]
for sec in sections:
    missing = []
    for loc in LOCALES:
        d = json.loads((ROOT / f"{loc}.json").read_text("utf-8"))
        if "Privacy" not in d or sec not in d["Privacy"]:
            missing.append(loc)
    if missing:
        print(f"  {sec}: MISSING in {missing}")
    else:
        print(f"  {sec}: present in all 9 locales")
