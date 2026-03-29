#!/usr/bin/env python3
"""Inject Story 15.1 (Version Control & Changelog) translations.

Updates:
- Terms.changes: Overwrite with enhanced version (adds versionHistory, v1)
- Legal.termsVersion: Add per-document version for Terms page
"""

import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "scripts" / "story15_1_data.json"
MSG  = ROOT / "lumen-lingo-frontend" / "messages"

LOCALE_MAP = {
    "en": "en.json", "es": "es.json", "fr": "fr.json", "de": "de.json",
    "ja": "ja.json", "pt": "pt.json", "pl": "pl.json", "ar": "ar.json",
    "zh": "zh.json", "uk": "uk.json",
}

data = json.loads(DATA.read_text("utf-8"))

for key, fname in LOCALE_MAP.items():
    fp = MSG / fname
    obj = json.loads(fp.read_text("utf-8"))

    # Update Terms.changes with enhanced version
    terms = obj.setdefault("Terms", {})
    terms["changes"] = data[key]["Terms"]["changes"]

    # Add Legal.termsVersion
    legal = obj.setdefault("Legal", {})
    legal["termsVersion"] = data[key]["Legal"]["termsVersion"]

    fp.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {fname}")

print("Done — Story 15.1 translations added.")
