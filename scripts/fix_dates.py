#!/usr/bin/env python3
"""
Fix all incorrect "July 2025" dates in version history and lastUpdated fields.
All legal documents were created 22-27 March 2026.

Date assignments:
  - Cookie v1.0 initial: 24 March 2026
  - Phase 2 entries (v2.2, v1.2 Terms, v1.1 Cookie/Eula): 26 March 2026
  - Phase 3 entries (v2.3, v1.3, v1.2 Cookie/Eula): 27 March 2026
  - Privacy.lastUpdated: 27 March 2026
"""
import json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

# Locale-specific "July 2025" patterns and their March 2026 replacements
# Format: {locale: (old_july_str, march_24, march_26, march_27)}
DATE_MAP = {
    "en": ("July 2025",           "24 March 2026",           "26 March 2026",           "27 March 2026"),
    "pl": ("lipiec 2025",         "24 marca 2026",           "26 marca 2026",           "27 marca 2026"),
    "de": ("Juli 2025",           "24. März 2026",           "26. März 2026",           "27. März 2026"),
    "es": ("julio 2025",          "24 de marzo de 2026",     "26 de marzo de 2026",     "27 de marzo de 2026"),
    "fr": ("juillet 2025",        "24 mars 2026",            "26 mars 2026",            "27 mars 2026"),
    "ja": ("2025年7月",           "2026年3月24日",            "2026年3月26日",            "2026年3月27日"),
    "zh": ("2025年7月",           "2026年3月24日",            "2026年3月26日",            "2026年3月27日"),
    "ar": ("يوليو 2025",          "24 مارس 2026",            "26 مارس 2026",            "27 مارس 2026"),
    "uk": ("липень 2025",         "24 березня 2026",         "26 березня 2026",         "27 березня 2026"),
}

# lastUpdated replacements (full string)
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

# Which keys get which date:
# Phase 2 (26 March): Privacy.v2_2, Terms.v1_2, CookiePage.v1_1, Eula.v1_1
# Phase 3 (27 March): Privacy.v2_3, Terms.v1_3, CookiePage.v1_2, Eula.v1_2
# Cookie v1.0 (24 March): CookiePage.v1

PHASE2_KEYS = [
    ("Privacy", "policyUpdates", "v2_2"),
    ("Terms", "changes", "v1_2"),
    ("CookiePage", "updates", "v1_1"),
    ("Eula", "changes", "v1_1"),
]

PHASE3_KEYS = [
    ("Privacy", "policyUpdates", "v2_3"),
    ("Terms", "changes", "v1_3"),
    ("CookiePage", "updates", "v1_2"),
    ("Eula", "changes", "v1_2"),
]

COOKIE_V1_KEY = ("CookiePage", "updates", "v1")

applied = 0

for loc in ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]:
    path = ROOT / f"{loc}.json"
    data = load_json(path)
    old_july, march_24, march_26, march_27 = DATE_MAP[loc]

    # Fix Privacy.lastUpdated
    if "Privacy" in data and "lastUpdated" in data["Privacy"]:
        old_val = data["Privacy"]["lastUpdated"]
        if old_july in old_val or "1 July 2025" in old_val or "1 lipca" in old_val or "1. Juli" in old_val or "1er juillet" in old_val or "7月1日" in old_val or "1 يوليو" in old_val or "1 липня" in old_val or "1 de julio" in old_val:
            data["Privacy"]["lastUpdated"] = LAST_UPDATED[loc]
            print(f"  [{loc}] Privacy.lastUpdated -> {LAST_UPDATED[loc]}")
            applied += 1

    # Fix Cookie v1.0 -> 24 March 2026
    ns, sec, key = COOKIE_V1_KEY
    if ns in data and sec in data[ns] and key in data[ns][sec]:
        old_val = data[ns][sec][key]
        if old_july in old_val:
            data[ns][sec][key] = old_val.replace(old_july, march_24)
            print(f"  [{loc}] {ns}.{sec}.{key}: {old_july} -> {march_24}")
            applied += 1

    # Fix Phase 2 keys -> 26 March 2026
    for ns, sec, key in PHASE2_KEYS:
        if ns in data and sec in data[ns] and key in data[ns][sec]:
            old_val = data[ns][sec][key]
            if old_july in old_val:
                data[ns][sec][key] = old_val.replace(old_july, march_26)
                print(f"  [{loc}] {ns}.{sec}.{key}: {old_july} -> {march_26}")
                applied += 1

    # Fix Phase 3 keys -> 27 March 2026
    for ns, sec, key in PHASE3_KEYS:
        if ns in data and sec in data[ns] and key in data[ns][sec]:
            old_val = data[ns][sec][key]
            if old_july in old_val:
                data[ns][sec][key] = old_val.replace(old_july, march_27)
                print(f"  [{loc}] {ns}.{sec}.{key}: {old_july} -> {march_27}")
                applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")
