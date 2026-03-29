#!/usr/bin/env python3
"""Check specific existing sections for Epic 17 stories."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
data = json.loads((ROOT / "en.json").read_text("utf-8"))
terms = data["Terms"]

def print_section(name, section):
    print(f"\n=== {name} ===")
    for k, v in section.items():
        if isinstance(v, str):
            print(f"  {k}: {v[:200]}")
        elif isinstance(v, dict):
            print(f"  {k}: [dict {len(v)} keys]")
            for k2, v2 in v.items():
                if isinstance(v2, str):
                    print(f"    {k2}: {v2[:150]}")

print_section("consumerRights", terms["consumerRights"])
print_section("sanctionsCompliance", terms["sanctionsCompliance"])
print_section("encryptionExport", terms["encryptionExport"])
print_section("userContent", terms["userContent"])
print_section("termsModification", terms["termsModification"])
print_section("serviceModification", terms["serviceModification"])
print_section("educationalDisclaimer", terms["educationalDisclaimer"])
print_section("thirdPartyServices", terms["thirdPartyServices"])
