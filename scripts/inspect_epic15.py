#!/usr/bin/env python3
import json, os

MESSAGES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "lumen-lingo-frontend", "messages")

with open(os.path.join(MESSAGES_DIR, "en.json"), "r") as f:
    data = json.load(f)

def count_ls(obj):
    c = 0
    if isinstance(obj, dict):
        for v in obj.values():
            c += count_ls(v)
    elif isinstance(obj, str):
        c += obj.count("LumenShore")
    return c

for ns in ["Privacy", "Eula", "Terms", "CookiePage"]:
    print(f"{ns}: {count_ls(data.get(ns, {}))} LumenShore instances")

terms = data.get("Terms", {})
print("\n=== Terms.assignment ===")
for k, v in terms.get("assignment", {}).items():
    if isinstance(v, str):
        print(f"  {k}: {v[:120]}")

print("\n=== Terms.accessibility ===")
acc = terms.get("accessibility")
print("  EXISTS" if acc else "  NOT FOUND")

print("\n=== Terms.appleLicensedEula ===")
ale = terms.get("appleLicensedEula")
print("  EXISTS" if ale else "  NOT FOUND")

print("\n=== Terms.updates ===")
for k, v in terms.get("updates", {}).items():
    if isinstance(v, str):
        print(f"  {k}: {v[:100]}")

print("\n=== Privacy.updates ===")
priv = data.get("Privacy", {})
for k, v in priv.get("updates", {}).items():
    if isinstance(v, str):
        print(f"  {k}: {v[:100]}")

print("\n=== Eula.changes ===")
eula = data.get("Eula", {})
for k, v in eula.get("changes", {}).items():
    if isinstance(v, str):
        print(f"  {k}: {v[:100]}")

print("\n=== CookiePage.updates ===")
cp = data.get("CookiePage", {})
for k, v in cp.get("updates", {}).items():
    if isinstance(v, str):
        print(f"  {k}: {v[:100]}")

# Check existing Eula.appleTerms cross-reference
print("\n=== Eula.appleTerms ===")
at = eula.get("appleTerms", {})
for k, v in at.items():
    if isinstance(v, str):
        print(f"  {k}: {v[:120]}")
