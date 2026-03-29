#!/usr/bin/env python3
"""Story 21.1 — Privacy translations: patch for missed customEvents.li11."""
import json, os

MESSAGES_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "lumen-lingo-frontend", "messages",
)
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]

def load_json(locale):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "r", encoding="utf-8") as f:
        return json.load(f)

def save_json(locale, data):
    with open(os.path.join(MESSAGES_DIR, f"{locale}.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

T = {
    "pl": "<b>error_page_view</b> \u2014 gdy odwiedzaj\u0105cy widzi stron\u0119 b\u0142\u0119du (rejestruje komunikat b\u0142\u0119du)",
    "de": "<b>error_page_view</b> \u2014 wenn ein Besucher eine Fehlerseite sieht (zeichnet die Fehlermeldung auf)",
    "es": "<b>error_page_view</b> \u2014 cuando un visitante ve una p\u00e1gina de error (registra el mensaje de error)",
    "fr": "<b>error_page_view</b> \u2014 lorsqu\u2019un visiteur voit une page d\u2019erreur (enregistre le message d\u2019erreur)",
    "ja": "<b>error_page_view</b> \u2014 \u8a2a\u554f\u8005\u304c\u30a8\u30e9\u30fc\u30da\u30fc\u30b8\u3092\u898b\u305f\u3068\u304d\uff08\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8a18\u9332\uff09",
    "zh": "<b>error_page_view</b> \u2014 \u5f53\u8bbf\u5ba2\u770b\u5230\u9519\u8bef\u9875\u9762\u65f6\uff08\u8bb0\u5f55\u9519\u8bef\u6d88\u606f\uff09",
    "ar": "<b>error_page_view</b> \u2014 \u0639\u0646\u062f\u0645\u0627 \u064a\u0631\u0649 \u0627\u0644\u0632\u0627\u0626\u0631 \u0635\u0641\u062d\u0629 \u062e\u0637\u0623 (\u064a\u0633\u062c\u0644 \u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062e\u0637\u0623)",
    "uk": "<b>error_page_view</b> \u2014 \u043a\u043e\u043b\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u0447 \u0431\u0430\u0447\u0438\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 (\u0437\u0430\u043f\u0438\u0441\u0443\u0454 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0438)",
}

en_data = load_json("en")
en_val = en_data.get("Privacy", {}).get("customEvents", {}).get("li11")

for locale in LOCALES:
    data = load_json(locale)
    current = data.get("Privacy", {}).get("customEvents", {}).get("li11")
    if en_val is not None and current == en_val and locale in T:
        data["Privacy"]["customEvents"]["li11"] = T[locale]
        save_json(locale, data)
        print(f"  {locale}: patched customEvents.li11")
    else:
        print(f"  {locale}: skipped (already translated or missing)")

print("\nPatch complete.")
