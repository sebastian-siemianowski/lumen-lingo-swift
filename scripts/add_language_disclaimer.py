#!/usr/bin/env python3
"""Add 'English version prevails' disclaimer to Legal namespace in all locales."""
import json
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(__file__)), "lumen-lingo-frontend", "messages")

# The disclaimer text per locale
disclaimers = {
    "en": {
        "languageDisclaimer": "This document is available in multiple languages. In the event of any conflict or inconsistency between translated versions, the English version shall prevail.",
        "viewEnglishVersion": "View English version"
    },
    "es": {
        "languageDisclaimer": "Este documento está disponible en varios idiomas. En caso de conflicto o inconsistencia entre las versiones traducidas, prevalecerá la versión en inglés.",
        "viewEnglishVersion": "Ver versión en inglés"
    },
    "fr": {
        "languageDisclaimer": "Ce document est disponible en plusieurs langues. En cas de conflit ou d'incohérence entre les versions traduites, la version anglaise prévaudra.",
        "viewEnglishVersion": "Voir la version anglaise"
    },
    "de": {
        "languageDisclaimer": "Dieses Dokument ist in mehreren Sprachen verfügbar. Im Falle von Widersprüchen oder Unstimmigkeiten zwischen übersetzten Versionen ist die englische Version maßgeblich.",
        "viewEnglishVersion": "Englische Version anzeigen"
    },
    "pt": {
        "languageDisclaimer": "Este documento está disponível em vários idiomas. Em caso de conflito ou inconsistência entre as versões traduzidas, a versão em inglês prevalecerá.",
        "viewEnglishVersion": "Ver versão em inglês"
    },
    "ja": {
        "languageDisclaimer": "この文書は複数の言語でご利用いただけます。翻訳版間に矛盾や不一致がある場合は、英語版が優先されます。",
        "viewEnglishVersion": "英語版を表示"
    },
    "pl": {
        "languageDisclaimer": "Ten dokument jest dostępny w wielu językach. W przypadku konfliktu lub rozbieżności między wersjami tłumaczonymi, wersja angielska jest wiążąca.",
        "viewEnglishVersion": "Zobacz wersję angielską"
    },
    "ar": {
        "languageDisclaimer": "هذا المستند متاح بعدة لغات. في حالة وجود أي تعارض أو عدم اتساق بين النسخ المترجمة، تسود النسخة الإنجليزية.",
        "viewEnglishVersion": "عرض النسخة الإنجليزية"
    },
    "zh": {
        "languageDisclaimer": "本文档提供多种语言版本。如翻译版本之间存在任何冲突或不一致，以英文版本为准。",
        "viewEnglishVersion": "查看英文版本"
    },
    "uk": {
        "languageDisclaimer": "Цей документ доступний кількома мовами. У разі будь-якого конфлікту чи невідповідності між перекладеними версіями, англійська версія має переважну силу.",
        "viewEnglishVersion": "Переглянути англійську версію"
    },
}

for locale, texts in disclaimers.items():
    filepath = os.path.join(BASE, f"{locale}.json")
    with open(filepath, "r") as f:
        data = json.load(f)
    
    # Add to the Legal namespace
    if "Legal" not in data:
        data["Legal"] = {}
    
    data["Legal"]["languageDisclaimer"] = texts["languageDisclaimer"]
    data["Legal"]["viewEnglishVersion"] = texts["viewEnglishVersion"]
    
    with open(filepath, "w") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")
    
    print(f"  Updated {locale}.json")

print(f"\nDone! Added languageDisclaimer to all {len(disclaimers)} locales.")
