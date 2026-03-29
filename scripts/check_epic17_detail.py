#!/usr/bin/env python3
"""Check specific existing Terms content for Epic 17."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))
terms = data["Terms"]

print("=== disputeResolution.consumerNote ===")
print(terms["disputeResolution"]["consumerNote"])

print("\n=== accessibility (all) ===")
for k, v in terms["accessibility"].items():
    print(f"  {k}: {v}")

print("\n=== indemnification (all) ===")
for k, v in terms["indemnification"].items():
    print(f"  {k}: {v[:150]}")

# Check for existing modifications section
print("\n=== modifications ===")
if "modifications" in terms:
    for k, v in terms["modifications"].items():
        print(f"  {k}: {v[:150]}")
else:
    # Search for modification-related keys
    def find_keys(d, prefix="", pattern="modif"):
        results = []
        for k, v in d.items():
            key = f"{prefix}.{k}" if prefix else k
            if pattern in k.lower():
                results.append((key, v if isinstance(v, str) else f"[dict {len(v)} keys]"))
            elif isinstance(v, dict):
                results.extend(find_keys(v, key, pattern))
        return results
    
    matches = find_keys(terms)
    if matches:
        for k, v in matches:
            print(f"  {k}: {str(v)[:150]}")
    else:
        print("  Not found; checking 'changes' and 'updates'")
        for pattern in ["change", "update", "amend"]:
            matches = find_keys(terms, pattern=pattern)
            for k, v in matches:
                print(f"  [{pattern}] {k}: {str(v)[:150]}")

# Check for GDPR exemption in dispute resolution
print("\n=== disputeResolution - GDPR/data protection references ===")
for k, v in terms["disputeResolution"].items():
    if isinstance(v, str) and ("gdpr" in v.lower() or "data protection" in v.lower() or "art. 79" in v.lower()):
        print(f"  {k}: {v[:200]}")

# Terms top-level keys
print("\n=== Terms top-level keys ===")
for k in sorted(terms.keys()):
    if isinstance(terms[k], dict):
        print(f"  {k}: [dict {len(terms[k])} keys]")
    else:
        print(f"  {k}: {str(terms[k])[:80]}")
