#!/usr/bin/env python3
"""
Story 21.5 — Fix genuinely untranslated keys flagged by audit_translations.py.

German (de) has 6 keys where "Website" and "&" were not localised.
All other flagged items are intentionally identical (URLs, company names,
regulatory body names, product names).
"""
import json, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

def load_json(p):
    return json.loads(p.read_text("utf-8"))

def save_json(p, data):
    p.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

def set_nested(d, keys, val):
    for k in keys[:-1]:
        d = d.setdefault(k, {})
    d[keys[-1]] = val

def get_nested(d, keys):
    for k in keys:
        if not isinstance(d, dict):
            return None
        d = d.get(k)
    return d


# ── German (de) translations ────────────────────────────────────────────────
DE_TRANSLATIONS = {
    # Privacy: GPC heading — "&" → "und"
    ("Privacy", "gpcSignals", "heading"):
        "Global Privacy Control und Do Not Track",

    # Privacy: ICO complaint website label
    ("Privacy", "ukDataProtection", "complaintLi1"):
        "<b>Webseite</b>: <icoComplaintLink>ico.org.uk/make-a-complaint</icoComplaintLink>",

    # Privacy: Japan PPC website label
    ("Privacy", "japanPrivacy", "ppcLi1"):
        "<b>Webseite:</b> <ppcLink>https://www.ppc.go.jp/en/</ppcLink>",

    # Privacy: China CAC website label
    ("Privacy", "chinaPrivacy", "cacLi1"):
        "<b>Webseite:</b> <cacLink>https://www.cac.gov.cn</cacLink>",

    # Privacy: Brazil ANPD website label
    ("Privacy", "brazilPrivacy", "anpdLi1"):
        "<b>Webseite:</b> <anpdLink>https://www.gov.br/anpd/</anpdLink>",

    # Terms: CEDR website label
    ("Terms", "ukAdr", "providerWebsite"):
        "Webseite: <cedrLink>https://www.cedr.com</cedrLink>",
}


def main():
    path = ROOT / "de.json"
    en_path = ROOT / "en.json"
    data = load_json(path)
    en_data = load_json(en_path)

    count = 0
    for keys, translation in DE_TRANSLATIONS.items():
        en_val = get_nested(en_data, keys)
        cur_val = get_nested(data, keys)
        if en_val is not None and cur_val == en_val:
            set_nested(data, list(keys), translation)
            count += 1
        else:
            print(f"  SKIP {'.'.join(keys)}: already translated or EN mismatch")

    save_json(path, data)
    print(f"de: {count} keys translated")
    print("Done.")


if __name__ == "__main__":
    main()
