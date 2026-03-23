#!/usr/bin/env python3
"""Add Polish download page translations."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pl.json"
data = json.loads(fp.read_text("utf-8"))

data["Download"] = {
    "heading": "LumenLingo",
    "description": "Opanuj j\u0119zyki dzi\u0119ki immersyjnym do\u015bwiadczeniom. Pi\u0119kne, \u015bwiadome, skuteczne.",
    "meta": "Zacznij za darmo \u00b7 Bez konta \u00b7 iPhone i iPad",
    "benefits": {
        "flashcards": "Pi\u0119kne Fiszki",
        "flashcardsDesc": "Ucz si\u0119 s\u0142\u00f3wek z immersyjnymi, bogato zaprojektowanymi kartami. Przesuwaj, aby opanowa\u0107 s\u0142owa we w\u0142asnym tempie.",
        "practice": "\u0106wiczenia Adaptacyjne",
        "practiceDesc": "Trzy tryby gry, kt\u00f3re dostosowuj\u0105 si\u0119 do Ciebie: dopasowywanie, uzupe\u0142nianie luk i wielokrotny wyb\u00f3r.",
        "soundscapes": "Ambientowe Krajobrazy D\u017awi\u0119kowe",
        "soundscapesDesc": "12 wyselekcjonowanych pejza\u017cy d\u017awi\u0119kowych \u2014 od delikatnego deszczu po kosmiczn\u0105 mg\u0142awic\u0119 \u2014 do skoncentrowanych sesji nauki."
    },
    "stats": {
        "languages": "J\u0119zyki",
        "soundscapes": "Krajobrazy D\u017awi\u0119kowe",
        "practiceModes": "Tryby \u0106wicze\u0144",
        "flashcards": "Fiszki"
    },
    "upgradeNote": "Zacznij za darmo. Poziomy Pro, Elite i Royal dost\u0119pne w aplikacji.",
    "qr": {
        "heading": "Zeskanuj, aby pobra\u0107",
        "description": "Skieruj aparat iPhone\u2019a na kod QR, aby natychmiast pobra\u0107 LumenLingo.",
        "fallback": "Lub odwied\u017a lumenlingo.com/open na swoim telefonie"
    },
    "showcase": {
        "flashcards": "Immersyjne Fiszki",
        "flashcardsSub": "Przesuwaj przez pi\u0119knie zaprojektowane karty",
        "practice": "Inteligentne \u0106wiczenia",
        "practiceSub": "Trzy adaptacyjne tryby gry",
        "soundscapes": "Ambientowe Krajobrazy D\u017awi\u0119kowe",
        "soundscapesSub": "12 wyselekcjonowanych \u015brodowisk do skupienia"
    }
}

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("pl.json Download namespace updated")
