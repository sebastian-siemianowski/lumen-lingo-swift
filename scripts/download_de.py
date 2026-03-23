#!/usr/bin/env python3
"""Add German download page translations."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "de.json"
data = json.loads(fp.read_text("utf-8"))

data["Download"] = {
    "heading": "LumenLingo",
    "description": "Sprachen meistern durch immersive Erfahrungen. Sch\u00f6n, achtsam, effektiv.",
    "meta": "Kostenlos starten \u00b7 Kein Konto erforderlich \u00b7 iPhone und iPad",
    "benefits": {
        "flashcards": "Wundersch\u00f6ne Lernkarten",
        "flashcardsDesc": "Vokabeln lernen mit immersiven, aufwendig gestalteten Karten. Wischen, um W\u00f6rter in Ihrem Tempo zu meistern.",
        "practice": "Adaptive \u00dcbungen",
        "practiceDesc": "Drei Spielmodi, die sich an Sie anpassen: Zuordnung, L\u00fcckentext und Multiple-Choice.",
        "soundscapes": "Ambiente Klangwelten",
        "soundscapesDesc": "12 kuratierte Klangwelten \u2014 von sanftem Regen bis zum kosmischen Nebel \u2014 f\u00fcr konzentrierte Lernsessions."
    },
    "stats": {
        "languages": "Sprachen",
        "soundscapes": "Klangwelten",
        "practiceModes": "\u00dcbungsmodi",
        "flashcards": "Lernkarten"
    },
    "upgradeNote": "Kostenlos starten. Pro-, Elite- und Royal-Stufen in der App verf\u00fcgbar.",
    "qr": {
        "heading": "Scannen zum Herunterladen",
        "description": "Richten Sie Ihre iPhone-Kamera auf den QR-Code, um LumenLingo sofort zu erhalten.",
        "fallback": "Oder besuchen Sie lumenlingo.com/open auf Ihrem Handy"
    },
    "showcase": {
        "flashcards": "Immersive Lernkarten",
        "flashcardsSub": "Wischen Sie durch wundersch\u00f6n gestaltete Karten",
        "practice": "Intelligente \u00dcbungen",
        "practiceSub": "Drei adaptive Spielmodi",
        "soundscapes": "Ambiente Klangwelten",
        "soundscapesSub": "12 kuratierte Fokus-Umgebungen"
    }
}

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("de.json Download namespace updated")
