#!/usr/bin/env python3
"""Story 21.4 Cookie Policy: translate remaining untranslated keys.

Keys intentionally kept as English (technical identifiers / product names):
  - ll_cookie_consent, NEXT_LOCALE, sentryReplaySession, __sentry_user, ll_utm
    (these are literal storage key names displayed in a table)
  - Sentry, Vercel Speed Insights, Vercel Analytics, Sentry Session Replay
    (product/service proper nouns)

Keys genuinely needing translation (per-locale):
  - contact.email (pl, es) -- label "Email:" needs localisation
  - cookies.heading (de, es, fr) -- "Cookies" heading
  - gpc.heading (de) -- "Global Privacy Control & Do Not Track"
  - icoComplaint.icoWebsite (de) -- label "Website:"
  - serviceWorker.heading (de) -- "Service Worker Cache"
  - table.type (fr) -- "Type"
"""
import json, os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(locale, data):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

def get_nested(d, path):
    keys = path.split(".")
    for k in keys:
        if isinstance(d, dict):
            d = d.get(k)
        else:
            return None
    return d

def set_nested(d, path, value):
    keys = path.split(".")
    for k in keys[:-1]:
        d = d.setdefault(k, {})
    d[keys[-1]] = value

# Only keys that genuinely need translation per locale
TRANSLATIONS = {
    "pl": {
        "CookiePage.contact.email": "<b>E-mail:</b> <emailLink>legal@lumenlingo.com</emailLink>",
    },
    "de": {
        "CookiePage.gpc.heading": "Global Privacy Control und Do Not Track",
        "CookiePage.icoComplaint.icoWebsite": "<b>Webseite:</b> <icoLink>ico.org.uk</icoLink>",
        "CookiePage.serviceWorker.heading": "Service-Worker-Cache",
    },
    "es": {
        "CookiePage.contact.email": "<b>Correo electr\u00f3nico:</b> <emailLink>legal@lumenlingo.com</emailLink>",
    },
}

en_data = load_json("en")

for locale, trans in TRANSLATIONS.items():
    data = load_json(locale)
    count = 0
    for key, translated in trans.items():
        en_val = get_nested(en_data, key)
        cur_val = get_nested(data, key)
        if en_val is not None and cur_val == en_val:
            set_nested(data, key, translated)
            count += 1
    save_json(locale, data)
    print(f"{locale}: {count} keys translated")

print("Cookie translations done.")
