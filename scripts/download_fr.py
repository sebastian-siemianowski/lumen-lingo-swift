#!/usr/bin/env python3
"""Add French download page translations."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "fr.json"
data = json.loads(fp.read_text("utf-8"))

data["Download"] = {
    "heading": "LumenLingo",
    "description": "Ma\u00eetrisez les langues gr\u00e2ce \u00e0 des exp\u00e9riences immersives. Beau, conscient, efficace.",
    "meta": "Gratuit pour commencer \u00b7 Aucun compte requis \u00b7 iPhone et iPad",
    "benefits": {
        "flashcards": "Cartes \u00c9l\u00e9gantes",
        "flashcardsDesc": "Apprenez du vocabulaire avec des cartes immersives et richement con\u00e7ues. Glissez pour ma\u00eetriser les mots \u00e0 votre rythme.",
        "practice": "Pratique Adaptative",
        "practiceDesc": "Trois modes de jeu qui s\u2019adaptent \u00e0 vous : association, texte \u00e0 trous et choix multiples.",
        "soundscapes": "Paysages Sonores Ambiants",
        "soundscapesDesc": "12 paysages sonores s\u00e9lectionn\u00e9s \u2014 de la pluie douce \u00e0 la n\u00e9buleuse cosmique \u2014 pour des sessions d\u2019\u00e9tude concentr\u00e9e."
    },
    "stats": {
        "languages": "Langues",
        "soundscapes": "Paysages Sonores",
        "practiceModes": "Modes de Pratique",
        "flashcards": "Cartes"
    },
    "upgradeNote": "Gratuit pour commencer. Niveaux Pro, \u00c9lite et Royal disponibles dans l\u2019app.",
    "qr": {
        "heading": "Scannez pour t\u00e9l\u00e9charger",
        "description": "Pointez l\u2019appareil photo de votre iPhone vers le code QR pour obtenir LumenLingo instantan\u00e9ment.",
        "fallback": "Ou visitez lumenlingo.com/open sur votre t\u00e9l\u00e9phone"
    },
    "showcase": {
        "flashcards": "Cartes Immersives",
        "flashcardsSub": "Glissez parmi des cartes magnifiquement con\u00e7ues",
        "practice": "Pratique Intelligente",
        "practiceSub": "Trois modes de jeu adaptatifs",
        "soundscapes": "Paysages Sonores Ambiants",
        "soundscapesSub": "12 environnements de concentration s\u00e9lectionn\u00e9s"
    }
}

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("fr.json Download namespace updated")
