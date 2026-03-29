#!/usr/bin/env python3
import json, os

MESSAGES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "lumen-lingo-frontend", "messages")

with open(os.path.join(MESSAGES_DIR, "en.json"), "r") as f:
    data = json.load(f)

terms = data.get("Terms", {})
eula = data.get("Eula", {})
priv = data.get("Privacy", {})

print("=== Terms.limitationOfLiability ===")
lol = terms.get("limitationOfLiability", {})
for k, v in sorted(lol.items()):
    if isinstance(v, str):
        print(f"  {k}: {v[:200]}")

print("\n=== Eula.liability ===")
eliab = eula.get("liability", {})
for k, v in sorted(eliab.items()):
    if isinstance(v, str):
        print(f"  {k}: {v[:200]}")

print("\n=== Eula.consumerRights ===")
ecr = eula.get("consumerRights", {})
for k, v in sorted(ecr.items()):
    if isinstance(v, str):
        print(f"  {k}: {v[:200]}")

print("\n=== Eula.warranties ===")
ew = eula.get("warranties", {})
for k, v in sorted(ew.items()):
    if isinstance(v, str):
        print(f"  {k}: {v[:200]}")

print("\n=== Privacy (liability-related keys) ===")
def find_liability(obj, path=""):
    if isinstance(obj, dict):
        for k, v in obj.items():
            p = f"{path}.{k}" if path else k
            if "liab" in k.lower() or "limit" in k.lower():
                if isinstance(v, str):
                    print(f"  {p}: {v[:200]}")
                elif isinstance(v, dict):
                    find_liability(v, p)
            elif isinstance(v, dict):
                find_liability(v, p)
find_liability(priv)

# Also check Terms version info
print("\n=== Terms.changes ===")
chg = terms.get("changes", {})
for k, v in sorted(chg.items()):
    if isinstance(v, str):
        print(f"  {k}: {v[:150]}")

# Check Privacy version info
print("\n=== Privacy contact / version ===")
pcontact = priv.get("contactUs", {})
for k, v in pcontact.items():
    if isinstance(v, str):
        print(f"  contactUs.{k}: {v[:150]}")

# Check Legal namespace for version keys
print("\n=== Legal namespace ===")
legal = data.get("Legal", {})
for k, v in legal.items():
    if isinstance(v, str):
        print(f"  {k}: {v[:100]}")
