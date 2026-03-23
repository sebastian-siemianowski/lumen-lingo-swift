#!/usr/bin/env python3
"""Add description and cta keys to Pricing.tier.* in fr.json."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "fr.json"
data = json.loads(fp.read_text("utf-8"))

t = data["Pricing"]["tier"]
t["free"]["description"] = "Id\u00e9al pour d\u00e9buter. D\u00e9couvrez les fonctionnalit\u00e9s principales et comprenez pourquoi les apprenants adorent LumenLingo."
t["free"]["cta"] = "Commencer gratuitement"
t["pro"]["description"] = "Pour les apprenants motiv\u00e9s qui souhaitent plus de langues, une pratique illimit\u00e9e et des exp\u00e9riences enrichies."
t["pro"]["cta"] = "Passer \u00e0 Pro"
t["elite"]["description"] = "D\u00e9bloquez l\u2019exp\u00e9rience compl\u00e8te LumenLingo avec toutes les langues, modes avanc\u00e9s et visuels \u00e9poustouflants."
t["elite"]["cta"] = "Passer \u00e0 \u00c9lite"
t["royal"]["description"] = "Le niveau ultime pour les ma\u00eetres des langues. Toutes les fonctionnalit\u00e9s, sans limites, extras exclusifs."
t["royal"]["cta"] = "Passer \u00e0 Royal"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("fr.json tier descriptions and CTAs added")
