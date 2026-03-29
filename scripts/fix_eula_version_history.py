#!/usr/bin/env python3
"""Add versionHistory heading to Eula.changes in all 9 locales."""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

translations = {
    "en": "Version History",
    "pl": "Historia wersji",
    "de": "Versionshistorie",
    "es": "Historial de versiones",
    "fr": "Historique des versions",
    "ja": "バージョン履歴",
    "zh": "版本历史",
    "ar": "سجل الإصدارات",
    "uk": "Історія версій",
}

for locale, text in translations.items():
    path = ROOT / f"{locale}.json"
    d = json.loads(path.read_text("utf-8"))
    changes = d["Eula"]["changes"]
    if "versionHistory" in changes:
        print(f"{locale}: already has versionHistory, skipping")
        continue
    new_changes = {}
    for k, v in changes.items():
        if k == "v1_1":
            new_changes["versionHistory"] = text
        new_changes[k] = v
    if "versionHistory" not in new_changes:
        new_changes["versionHistory"] = text
    d["Eula"]["changes"] = new_changes
    path.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", "utf-8")
    print(f"{locale}: added versionHistory = {text}")

print("Done.")
