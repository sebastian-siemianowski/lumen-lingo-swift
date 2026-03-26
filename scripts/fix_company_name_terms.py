#!/usr/bin/env python3
"""Fix LumenShore -> Lumenshore (lowercase s) throughout Terms namespace."""
import json
import os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]


def fix_locale(locale):
    fname = os.path.join(MESSAGES_DIR, f"{locale}.json")
    with open(fname, "r", encoding="utf-8") as f:
        data = json.load(f)

    terms = data["Terms"]
    count = [0]

    def walk(obj, path=""):
        if isinstance(obj, dict):
            for k, v in obj.items():
                walk(v, f"{path}.{k}" if path else k)
        elif isinstance(obj, str):
            if "LumenShore" in obj:
                new_val = obj.replace("LumenShore", "Lumenshore")
                keys = path.split(".")
                d = terms
                for k in keys[:-1]:
                    d = d[k]
                d[keys[-1]] = new_val
                count[0] += 1

    walk(terms)

    with open(fname, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"  {locale}.json: {count[0]} LumenShore -> Lumenshore fixes")


if __name__ == "__main__":
    for loc in LOCALES:
        fix_locale(loc)
    print("Done.")
