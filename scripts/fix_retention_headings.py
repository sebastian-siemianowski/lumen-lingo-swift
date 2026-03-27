#!/usr/bin/env python3
"""Add retention headings for CookiePage and Terms across all 9 locales."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

HEADINGS = {
    "en": "Data Retention",
    "pl": "Przechowywanie danych",
    "de": "Datenaufbewahrung",
    "es": "Retención de datos",
    "fr": "Conservation des données",
    "ja": "データ保持",
    "zh": "数据保留",
    "ar": "الاحتفاظ بالبيانات",
    "uk": "Зберігання даних",
}

applied = 0
for loc in HEADINGS:
    path = ROOT / f"{loc}.json"
    data = load_json(path)
    for ns in ["CookiePage", "Terms"]:
        if ns in data and "retention" in data[ns]:
            if "heading" not in data[ns]["retention"]:
                data[ns]["retention"]["heading"] = HEADINGS[loc]
                print(f"  [{loc}] Added {ns}.retention.heading")
                applied += 1
    save_json(path, data)

print(f"\nTotal changes: {applied}")
