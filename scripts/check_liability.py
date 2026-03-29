#!/usr/bin/env python3
"""Check limitationOfLiability and tieredLiabilityCaps."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))
terms = data["Terms"]

for sec in ["limitationOfLiability", "tieredLiabilityCaps", "disclaimers", "warrantyDisclaimer"]:
    if sec in terms:
        print(f"\n=== {sec} ===")
        for k, v in terms[sec].items():
            if isinstance(v, str):
                print(f"  {k}: {v[:200]}")
