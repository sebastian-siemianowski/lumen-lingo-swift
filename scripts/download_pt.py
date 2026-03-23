#!/usr/bin/env python3
"""Add Portuguese download page translations."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pt.json"
data = json.loads(fp.read_text("utf-8"))

data["Download"] = {
    "heading": "LumenLingo",
    "description": "Domine idiomas atrav\u00e9s de experi\u00eancias imersivas. Bonito, consciente, eficaz.",
    "meta": "Gr\u00e1tis para come\u00e7ar \u00b7 Sem conta necess\u00e1ria \u00b7 iPhone e iPad",
    "benefits": {
        "flashcards": "Cart\u00f5es Bonitos",
        "flashcardsDesc": "Aprenda vocabul\u00e1rio com cart\u00f5es imersivos e ricamente elaborados. Deslize para dominar palavras no seu ritmo.",
        "practice": "Pr\u00e1tica Adaptativa",
        "practiceDesc": "Tr\u00eas modos de jogo que se adaptam a voc\u00ea: correspond\u00eancia, preencher lacunas e m\u00faltipla escolha.",
        "soundscapes": "Paisagens Sonoras Ambientais",
        "soundscapesDesc": "12 paisagens sonoras selecionadas \u2014 de chuva suave a n\u00e9bula c\u00f3smica \u2014 para sess\u00f5es de estudo focado."
    },
    "stats": {
        "languages": "Idiomas",
        "soundscapes": "Paisagens Sonoras",
        "practiceModes": "Modos de Pr\u00e1tica",
        "flashcards": "Cart\u00f5es"
    },
    "upgradeNote": "Gr\u00e1tis para come\u00e7ar. N\u00edveis Pro, Elite e Royal dispon\u00edveis no app.",
    "qr": {
        "heading": "Escaneie para baixar",
        "description": "Aponte a c\u00e2mera do seu iPhone para o c\u00f3digo QR para obter o LumenLingo instantaneamente.",
        "fallback": "Ou visite lumenlingo.com/open no seu celular"
    },
    "showcase": {
        "flashcards": "Cart\u00f5es Imersivos",
        "flashcardsSub": "Deslize por cart\u00f5es lindamente elaborados",
        "practice": "Pr\u00e1tica Inteligente",
        "practiceSub": "Tr\u00eas modos de jogo adaptativos",
        "soundscapes": "Paisagens Sonoras Ambientais",
        "soundscapesSub": "12 ambientes de foco selecionados"
    }
}

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("pt.json Download namespace updated")
