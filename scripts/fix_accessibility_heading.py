#!/usr/bin/env python3
"""Fix: Convert CookiePage.accessibility from string to object with heading."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

headings = {
    "en": "Cookie Settings Accessibility",
    "pl": "Dostępność ustawień cookie",
    "de": "Barrierefreiheit der Cookie-Einstellungen",
    "es": "Accesibilidad de la configuración de cookies",
    "fr": "Accessibilité des paramètres de cookies",
    "ja": "Cookie 設定のアクセシビリティ",
    "zh": "Cookie 设置无障碍功能",
    "ar": "إمكانية الوصول إلى إعدادات ملفات تعريف الارتباط",
    "uk": "Доступність налаштувань cookie",
}

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)
    old_val = data["CookiePage"]["accessibility"]
    if isinstance(old_val, str):
        data["CookiePage"]["accessibility"] = {
            "heading": headings[loc],
            "p1": old_val,
        }
        print(f"  [{loc}] Converted accessibility to object with heading")
    save_json(path, data)

print("Done")
