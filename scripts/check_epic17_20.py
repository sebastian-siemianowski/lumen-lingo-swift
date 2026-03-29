#!/usr/bin/env python3
"""Check existing content for Epic 17 (Terms), 18 (EULA), 19 (CookiePage) stories."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))

# ── Epic 17: Terms ──
terms = data.get("Terms", {})
print("=" * 60)
print("EPIC 17 — Terms of Service")
print("=" * 60)

for key in ["fairnessNotice", "contentModeration", "noUGC", "disputeResolution",
            "exportControl", "accessibility", "definitions", "indemnification",
            "modifications"]:
    if key in terms:
        val = terms[key]
        if isinstance(val, dict):
            print(f"\n  Terms.{key}: EXISTS ({len(val)} subkeys)")
            for k, v in val.items():
                if isinstance(v, str):
                    print(f"    {k}: {v[:100]}")
                elif isinstance(v, dict):
                    print(f"    {k}: [dict with {len(v)} keys]")
        else:
            print(f"\n  Terms.{key}: {str(val)[:100]}")
    else:
        print(f"\n  Terms.{key}: NOT FOUND")

# Check for liability cross-ref
if "liability" in terms:
    print(f"\n  Terms.liability: EXISTS ({len(terms['liability'])} subkeys)")
    for k, v in terms["liability"].items():
        if isinstance(v, str):
            print(f"    {k}: {v[:120]}")

# ── Epic 18: EULA ──
eula = data.get("Eula", {})
print("\n" + "=" * 60)
print("EPIC 18 — EULA")
print("=" * 60)

for key in ["dataProtection", "warranty", "thirdPartyServices", "educationalDisclaimer",
            "biometricData", "openSource", "liability", "governing"]:
    if key in eula:
        val = eula[key]
        if isinstance(val, dict):
            print(f"\n  Eula.{key}: EXISTS ({len(val)} subkeys)")
            for k, v in val.items():
                if isinstance(v, str):
                    print(f"    {k}: {v[:100]}")
                elif isinstance(v, dict):
                    print(f"    {k}: [dict with {len(v)} keys]")
        else:
            print(f"\n  Eula.{key}: {str(val)[:100]}")
    else:
        print(f"\n  Eula.{key}: NOT FOUND")

# ── Epic 19: CookiePage ──
cookie = data.get("CookiePage", {})
print("\n" + "=" * 60)
print("EPIC 19 — CookiePage")
print("=" * 60)

for key in ["consent", "granularity", "browserInstructions", "accessibility"]:
    if key in cookie:
        val = cookie[key]
        if isinstance(val, dict):
            print(f"\n  CookiePage.{key}: EXISTS ({len(val)} subkeys)")
            for k, v in val.items():
                if isinstance(v, str):
                    print(f"    {k}: {v[:100]}")
                elif isinstance(v, dict):
                    print(f"    {k}: [dict with {len(v)} keys]")
        else:
            print(f"\n  CookiePage.{key}: {str(val)[:100]}")
    else:
        print(f"\n  CookiePage.{key}: NOT FOUND")

# ── Epic 20: Cross-Policy ──
print("\n" + "=" * 60)
print("EPIC 20 — Cross-Policy")
print("=" * 60)

# Check dispute resolution in Privacy
if "disputeResolution" in data.get("Privacy", {}):
    print(f"\n  Privacy.disputeResolution: EXISTS")
else:
    print(f"\n  Privacy.disputeResolution: NOT FOUND")

# Check retention cross-refs
for ns_name, ns in [("CookiePage", cookie), ("Terms", terms)]:
    if "retention" in ns:
        val = ns["retention"]
        if isinstance(val, dict):
            print(f"  {ns_name}.retention: EXISTS ({len(val)} subkeys)")
            if "crossRef" in val:
                print(f"    crossRef: {val['crossRef'][:100]}")
        else:
            print(f"  {ns_name}.retention: {str(val)[:100]}")
    else:
        print(f"  {ns_name}.retention: NOT FOUND")

# Check email consistency
import re
def find_emails(d, prefix=""):
    results = []
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            results.extend(find_emails(v, key))
        elif isinstance(v, str):
            emails = re.findall(r'[\w.+-]+@[\w-]+\.[\w.]+', v)
            for e in emails:
                results.append((key, e))
    return results

print("\n  Email addresses found:")
for ns_name in ["Privacy", "Terms", "Eula", "CookiePage"]:
    ns = data.get(ns_name, {})
    emails = find_emails(ns)
    unique = set(e for _, e in emails)
    print(f"    {ns_name}: {unique}")
