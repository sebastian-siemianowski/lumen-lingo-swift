#!/usr/bin/env python3
"""
Copy the updated English Privacy & Legal sections to all non-English locale files
as placeholders. This ensures the site doesn't break while professional translations
are prepared.

Run from the lumen-lingo-frontend directory:
    python3 scripts/sync_privacy_to_locales.py
"""
import json
import pathlib

BASE = pathlib.Path(__file__).resolve().parent.parent / "messages"
EN_PATH = BASE / "en.json"

LOCALES = ["es", "fr", "de", "ja", "zh", "ar", "pl", "uk"]


def main():
    en = json.loads(EN_PATH.read_text("utf-8"))
    en_privacy = en["Privacy"]
    en_legal = en["Legal"]
    en_terms = en["Terms"]

    for locale in LOCALES:
        path = BASE / f"{locale}.json"
        if not path.exists():
            print(f"  ⚠ {locale}.json not found, skipping")
            continue

        data = json.loads(path.read_text("utf-8"))

        # Overwrite Privacy, Legal, and Terms sections with English placeholders
        data["Privacy"] = en_privacy
        data["Legal"] = en_legal
        data["Terms"] = en_terms

        path.write_text(
            json.dumps(data, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8",
        )
        print(f"  ✓ {locale}.json updated")

    print("\nDone. All locales now have the v2.0 Privacy structure.")
    print("Professional translations should replace these English placeholders.")


if __name__ == "__main__":
    main()
