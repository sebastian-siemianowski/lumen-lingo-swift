#!/usr/bin/env python3
"""Add Spanish download page translations."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "es.json"
data = json.loads(fp.read_text("utf-8"))

data["Download"] = {
    "heading": "LumenLingo",
    "description": "Domina idiomas a trav\u00e9s de experiencias inmersivas. Hermosa, consciente, efectiva.",
    "meta": "Gratis para empezar \u00b7 Sin cuenta requerida \u00b7 iPhone y iPad",
    "benefits": {
        "flashcards": "Tarjetas Hermosas",
        "flashcardsDesc": "Aprende vocabulario con tarjetas inmersivas y ricamente dise\u00f1adas. Desliza para dominar palabras a tu ritmo.",
        "practice": "Pr\u00e1ctica Adaptativa",
        "practiceDesc": "Tres modos de juego que se adaptan a ti: emparejamiento, completar espacios y opci\u00f3n m\u00faltiple.",
        "soundscapes": "Paisajes Sonoros Ambientales",
        "soundscapesDesc": "12 paisajes sonoros seleccionados \u2014 desde lluvia suave hasta n\u00e9bula c\u00f3smica \u2014 para sesiones de estudio concentrado."
    },
    "stats": {
        "languages": "Idiomas",
        "soundscapes": "Paisajes Sonoros",
        "practiceModes": "Modos de Pr\u00e1ctica",
        "flashcards": "Tarjetas"
    },
    "upgradeNote": "Gratis para empezar. Niveles Pro, Elite y Royal disponibles en la app.",
    "qr": {
        "heading": "Escanea para descargar",
        "description": "Apunta la c\u00e1mara de tu iPhone al c\u00f3digo QR para obtener LumenLingo al instante.",
        "fallback": "O visita lumenlingo.com/open en tu tel\u00e9fono"
    },
    "showcase": {
        "flashcards": "Tarjetas Inmersivas",
        "flashcardsSub": "Desliza entre tarjetas bellamente dise\u00f1adas",
        "practice": "Pr\u00e1ctica Inteligente",
        "practiceSub": "Tres modos de juego adaptativos",
        "soundscapes": "Paisajes Sonoros Ambientales",
        "soundscapesSub": "12 entornos de concentraci\u00f3n seleccionados"
    }
}

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("es.json Download namespace updated")
