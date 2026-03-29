#!/usr/bin/env python3
"""Add supportLanguage key to Contact namespace in all locale message files."""
import json, pathlib

messages_dir = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"

support_languages = {
    "en": "We respond in English.",
    "es": "Respondemos en ingl\u00e9s y espa\u00f1ol.",
    "fr": "Nous r\u00e9pondons en anglais et en fran\u00e7ais.",
    "de": "Wir antworten auf Englisch und Deutsch.",
    "pt": "Respondemos em ingl\u00eas e portugu\u00eas.",
    "pl": "Odpowiadamy po angielsku i polsku.",
    "ja": "\u82f1\u8a9e\u304a\u3088\u3073\u65e5\u672c\u8a9e\u3067\u5bfe\u5fdc\u3044\u305f\u3057\u307e\u3059\u3002",
    "zh": "\u6211\u4eec\u7528\u82f1\u8bed\u548c\u4e2d\u6587\u56de\u590d\u3002",
    "ar": "\u0646\u0631\u062f \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0648\u0627\u0644\u0639\u0631\u0628\u064a\u0629.",
    "uk": "\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454\u043c\u043e \u0430\u043d\u0433\u043b\u0456\u0439\u0441\u044c\u043a\u043e\u044e \u0442\u0430 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u044e."
}

for locale, text in support_languages.items():
    fp = messages_dir / f"{locale}.json"
    data = json.loads(fp.read_text("utf-8"))
    data["Contact"]["supportLanguage"] = text
    fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")

print(f"supportLanguage added to {len(support_languages)} locales")
