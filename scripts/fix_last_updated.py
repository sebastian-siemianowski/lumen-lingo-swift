#!/usr/bin/env python3
"""Fix Privacy.lastUpdated across all 9 locales from July 2025 to 27 March 2026."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

LAST_UPDATED = {
    "en": "Last updated: 27 March 2026",
    "pl": "Ostatnia aktualizacja: 27 marca 2026",
    "de": "Zuletzt aktualisiert: 27. März 2026",
    "es": "Última actualización: 27 de marzo de 2026",
    "fr": "Dernière mise à jour : 27 mars 2026",
    "ja": "最終更新日: 2026年3月27日",
    "zh": "最后更新：2026年3月27日",
    "ar": "آخر تحديث: 27 مارس 2026",
    "uk": "Останнє оновлення: 27 березня 2026",
}

applied = 0
for loc, new_val in LAST_UPDATED.items():
    path = ROOT / f"{loc}.json"
    data = json.loads(path.read_text("utf-8"))
    old_val = data.get("Legal", {}).get("lastUpdated", "")
    if old_val and old_val != new_val:
        print(f"  [{loc}] '{old_val}' -> '{new_val}'")
        data["Legal"]["lastUpdated"] = new_val
        path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        applied += 1
    else:
        print(f"  [{loc}] already correct or missing")

print(f"\nTotal changes: {applied}")
