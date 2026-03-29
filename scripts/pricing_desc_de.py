#!/usr/bin/env python3
"""Add description and cta keys to Pricing.tier.* in de.json."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "de.json"
data = json.loads(fp.read_text("utf-8"))

t = data["Pricing"]["tier"]
t["free"]["description"] = "Perfekt zum Einstieg. Entdecken Sie die Kernfunktionen und erfahren Sie, warum Lernende LumenLingo lieben."
t["free"]["cta"] = "Kostenlos starten"
t["pro"]["description"] = "F\u00fcr engagierte Lernende, die mehr Sprachen, unbegrenztes \u00dcben und reichhaltigere Erfahrungen m\u00f6chten."
t["pro"]["cta"] = "Auf Pro upgraden"
t["elite"]["description"] = "Schalten Sie das vollst\u00e4ndige LumenLingo-Erlebnis frei \u2014 alle Sprachen, fortgeschrittene Modi und beeindruckende Visualisierungen."
t["elite"]["cta"] = "Elite w\u00e4hlen"
t["royal"]["description"] = "Die ultimative Stufe f\u00fcr Sprachmeister. Alle Funktionen, keine Grenzen, exklusive Extras."
t["royal"]["cta"] = "Royal w\u00e4hlen"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("de.json tier descriptions and CTAs added")
