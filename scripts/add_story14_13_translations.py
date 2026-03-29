#!/usr/bin/env python3
"""Story 14.13 — Add Third-Party Content, Links & Services translations to all 10 locale files."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = json.loads((ROOT / "scripts" / "story14_13_data.json").read_text("utf-8"))
MSG  = ROOT / "lumen-lingo-frontend" / "messages"

for locale, sections in DATA.items():
    fp = MSG / f"{locale}.json"
    blob = json.loads(fp.read_text("utf-8"))
    t = blob.setdefault("Terms", {})
    for key, val in sections.items():
        t[key] = val
    fp.write_text(json.dumps(blob, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Updated {locale}.json")

print("Done — Story 14.13 translations added.")
