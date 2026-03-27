#!/usr/bin/env python3
"""Add Privacy.liability.heading across all 9 locales."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

HEADINGS = {
    "en": "Limitation of Liability",
    "pl": "Ograniczenie odpowiedzialności",
    "de": "Haftungsbeschränkung",
    "es": "Limitación de responsabilidad",
    "fr": "Limitation de responsabilité",
    "ja": "責任制限",
    "zh": "责任限制",
    "ar": "تحديد المسؤولية",
    "uk": "Обмеження відповідальності",
}

applied = 0
for loc in HEADINGS:
    path = ROOT / f"{loc}.json"
    data = load_json(path)
    if "heading" not in data["Privacy"]["liability"]:
        data["Privacy"]["liability"]["heading"] = HEADINGS[loc]
        print(f"  [{loc}] Added Privacy.liability.heading")
        applied += 1
    save_json(path, data)

print(f"\nTotal changes: {applied}")
