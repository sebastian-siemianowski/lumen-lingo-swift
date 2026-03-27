#!/usr/bin/env python3
"""Fix non-English liability caps: £0.00 -> £10 in Terms + Eula for all locales."""
import json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(path):
    return json.loads(path.read_text("utf-8"))

def save_json(path, data):
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

# Locale-specific zero->ten replacements
ZERO_MAP = {
    "pl": ("zero funtów szterlingów", "dziesięć funtów szterlingów"),
    "de": ("null Pfund Sterling", "zehn Pfund Sterling"),
    "es": ("cero libras esterlinas", "diez libras esterlinas"),
    "fr": ("zéro livre sterling", "dix livres sterling"),
    "ja": ("ゼロ英ポンド", "10英ポンド"),
    "zh": ("零英鎊", "10英鎊"),
    "ar": ("صفر جنيه إسترليني", "عشرة جنيهات إسترلينية"),
    "uk": ("нуль фунтів стерлінгів", "десять фунтів стерлінгів"),
}

LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
applied = 0

for loc in LOCALES:
    path = ROOT / f"{loc}.json"
    data = load_json(path)
    zero_text, ten_text = ZERO_MAP.get(loc, (None, None))

    for ns, key_path in [
        ("Terms", ["limitationOfLiability", "cap"]),
        ("Eula", ["liability", "cap"]),
    ]:
        obj = data.get(ns, {})
        for k in key_path[:-1]:
            obj = obj.get(k, {})
        val = obj.get(key_path[-1], "")
        changed = False

        # Replace £0.00 with £10
        if "£0.00" in val:
            val = val.replace("£0.00", "£10")
            changed = True

        # Replace localized zero text
        if zero_text and zero_text in val:
            val = val.replace(zero_text, ten_text)
            changed = True

        if changed:
            obj[key_path[-1]] = val
            print(f"  [{loc}] Fixed {ns}.{'.'.join(key_path)}")
            applied += 1

    save_json(path, data)

print(f"\nTotal changes: {applied}")
