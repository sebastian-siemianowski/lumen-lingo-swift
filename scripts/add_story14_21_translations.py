#!/usr/bin/env python3
"""Inject Story 14.21 (Class Action Waiver Non-US) translations."""

import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "scripts" / "story14_21_data.json"
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
    terms = obj.setdefault("terms", {})
    terms["classActionWaiver"] = data[key]["classActionWaiver"]
    fp.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {fname}")

print("Done — Story 14.21 translations added.")
