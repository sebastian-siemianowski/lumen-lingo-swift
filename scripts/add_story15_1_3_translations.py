#!/usr/bin/env python3
"""Add LegalUpdateBanner translation keys to all 10 locales."""

import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "scripts" / "story15_1_3_data.json").read_text("utf-8"))
MSG_DIR = ROOT / "lumen-lingo-frontend" / "messages"

LOCALES = ["en", "ar", "de", "es", "fr", "ja", "pl", "pt", "uk", "zh"]

for locale in LOCALES:
    fp = MSG_DIR / f"{locale}.json"
    msg = json.loads(fp.read_text("utf-8"))
    locale_data = DATA[locale]

    for namespace, keys in locale_data.items():
        if namespace not in msg:
            msg[namespace] = {}
        for key, value in keys.items():
            msg[namespace][key] = value
            print(f"  {locale}/{namespace}.{key}")

    fp.write_text(json.dumps(msg, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"Updated {locale}.json")

print("\nAll locales updated.")
