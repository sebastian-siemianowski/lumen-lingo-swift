#!/usr/bin/env python3
"""Inject Story 7.2 (EU Representative) translations into privacy policy locale files."""

import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "scripts" / "story7_2_data.json"
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
    privacy = obj.setdefault("privacy", {})
    privacy["euRepresentative"] = data[key]["euRepresentative"]
    fp.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {fname}")

print("Done — Story 7.2 translations added.")
