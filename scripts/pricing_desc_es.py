#!/usr/bin/env python3
"""Add description and cta keys to Pricing.tier.* in es.json."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "es.json"
data = json.loads(fp.read_text("utf-8"))

t = data["Pricing"]["tier"]
t["free"]["description"] = "Perfecto para empezar. Explora las funciones principales y descubre por qu\u00e9 los estudiantes aman LumenLingo."
t["free"]["cta"] = "Empezar Gratis"
t["pro"]["description"] = "Para estudiantes comprometidos que quieren m\u00e1s idiomas, pr\u00e1ctica ilimitada y experiencias m\u00e1s ricas."
t["pro"]["cta"] = "Mejorar a Pro"
t["elite"]["description"] = "Desbloquea la experiencia completa de LumenLingo con todos los idiomas, modos avanzados y visuales impresionantes."
t["elite"]["cta"] = "Ir a \u00c9lite"
t["royal"]["description"] = "El nivel definitivo para maestros de idiomas. Todas las funciones, sin l\u00edmites, extras exclusivos."
t["royal"]["cta"] = "Ir a Royal"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("es.json tier descriptions and CTAs added")
