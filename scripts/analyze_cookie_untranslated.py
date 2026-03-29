#!/usr/bin/env python3
"""Analyse CookiePage namespace: count total keys, find untranslated ones."""
import json, os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def flatten(d, prefix=""):
    items = {}
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        else:
            items[key] = v
    return items

en_data = load_json("en")
cookie_en = en_data.get("CookiePage", {})
en_flat = flatten(cookie_en)
print(f"Total EN CookiePage keys: {len(en_flat)}")

# Keys intentionally identical across locales:
# - Technical storage key names displayed in tables
# - Product/service proper nouns
# - Universal loanwords (e.g. "Cookies", "Type" in French)
INTENTIONALLY_SAME = {
    "localStorage.consentKey.heading",     # ll_cookie_consent (storage key)
    "localStorage.localeKey.heading",      # NEXT_LOCALE (storage key)
    "sessionStorage.sentryKey.heading",    # Sentry Session Replay (product)
    "sessionStorage.sentryKeys.replaySession.heading",  # sentryReplaySession (key)
    "sessionStorage.sentryKeys.sentryUser.heading",     # __sentry_user (key)
    "sessionStorage.utmKey.heading",       # ll_utm (storage key)
    "thirdParty.sentry.heading",           # Sentry (product)
    "thirdParty.speedInsights.heading",    # Vercel Speed Insights (product)
    "thirdParty.vercel.heading",           # Vercel Analytics (product)
    "cookies.heading",                     # "Cookies" universal loanword
    "table.type",                          # "Type" same in multiple languages
}

for loc in LOCALES:
    data = load_json(loc)
    cookie_loc = data.get("CookiePage", {})
    loc_flat = flatten(cookie_loc)
    untranslated = []
    for key, en_val in sorted(en_flat.items()):
        loc_val = loc_flat.get(key)
        if key in INTENTIONALLY_SAME:
            continue
        if loc_val == en_val:
            untranslated.append(key)
    if untranslated:
        print(f"\n{loc}: {len(untranslated)} untranslated")
        for k in untranslated:
            preview = str(en_flat[k])[:100]
            print(f"  CookiePage.{k} = {preview}")
    else:
        print(f"{loc}: 0 untranslated")
