#!/usr/bin/env python3
"""Add description and cta keys to Pricing.tier.* in pt.json."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pt.json"
data = json.loads(fp.read_text("utf-8"))

t = data["Pricing"]["tier"]
t["free"]["description"] = "Perfeito para come\u00e7ar. Explore os recursos principais e descubra por que os estudantes amam o LumenLingo."
t["free"]["cta"] = "Come\u00e7ar de Gra\u00e7a"
t["pro"]["description"] = "Para estudantes dedicados que querem mais idiomas, pr\u00e1tica ilimitada e experi\u00eancias mais ricas."
t["pro"]["cta"] = "Mudar para Pro"
t["elite"]["description"] = "Desbloqueie a experi\u00eancia completa do LumenLingo com todos os idiomas, modos avan\u00e7ados e visuais impressionantes."
t["elite"]["cta"] = "Ir para Elite"
t["royal"]["description"] = "O n\u00edvel definitivo para mestres de idiomas. Todos os recursos, sem limites, extras exclusivos."
t["royal"]["cta"] = "Ir para Royal"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("pt.json tier descriptions and CTAs added")
