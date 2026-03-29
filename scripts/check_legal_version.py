#!/usr/bin/env python3
"""
Validate that the legal policy version is consistent across:
  - lumen-lingo-frontend/messages/en.json  (Legal.version)
  - LumenLingo/LumenLingo/Views/Legal/LegalConsentView.swift  (currentVersion)
  - All 9 AppStrings+*.swift locale files  (legalVersion)

Exits 0 if all match, 1 if any mismatch.
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

def extract_version_number(version_str):
    """Extract the numeric version (e.g. '2.2') from a string like 'Version 2.2' or 'バージョン 2.2'."""
    m = re.search(r"(\d+\.\d+)", version_str)
    return m.group(1) if m else None


def main():
    errors = []

    # 1. Read from en.json
    en_path = ROOT / "lumen-lingo-frontend" / "messages" / "en.json"
    en_data = json.loads(en_path.read_text("utf-8"))
    web_version_str = en_data.get("Legal", {}).get("version", "")
    web_version = extract_version_number(web_version_str)
    if not web_version:
        errors.append(f"Cannot extract version from en.json Legal.version: {web_version_str!r}")
    else:
        print(f"  en.json Legal.version: {web_version}")

    # 2. Read from LegalConsentView.swift
    consent_path = ROOT / "LumenLingo" / "LumenLingo" / "Views" / "Legal" / "LegalConsentView.swift"
    consent_text = consent_path.read_text("utf-8")
    m = re.search(r'static\s+let\s+currentVersion\s*=\s*"([^"]+)"', consent_text)
    ios_version = m.group(1) if m else None
    if not ios_version:
        errors.append("Cannot find currentVersion in LegalConsentView.swift")
    else:
        print(f"  LegalConsentView.currentVersion: {ios_version}")
        if web_version and ios_version != web_version:
            errors.append(f"LegalConsentView.currentVersion ({ios_version}) != en.json ({web_version})")

    # 3. Read from all AppStrings locale files
    loc_dir = ROOT / "LumenLingo" / "LumenLingo" / "Models" / "Localization"
    for swift_file in sorted(loc_dir.glob("AppStrings+*.swift")):
        text = swift_file.read_text("utf-8")
        m = re.search(r'legalVersion:\s*"([^"]+)"', text)
        if not m:
            errors.append(f"Cannot find legalVersion in {swift_file.name}")
            continue
        file_version = extract_version_number(m.group(1))
        if not file_version:
            errors.append(f"Cannot extract version number from legalVersion in {swift_file.name}: {m.group(1)!r}")
            continue
        status = "OK" if file_version == web_version else "MISMATCH"
        print(f"  {swift_file.name}: {file_version} [{status}]")
        if file_version != web_version:
            errors.append(f"{swift_file.name} legalVersion ({file_version}) != en.json ({web_version})")

    if errors:
        print(f"\nFAILED — {len(errors)} error(s):")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)
    else:
        print("\nPASSED — all versions consistent.")
        sys.exit(0)


if __name__ == "__main__":
    main()
