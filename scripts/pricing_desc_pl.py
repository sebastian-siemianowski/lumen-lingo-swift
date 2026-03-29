#!/usr/bin/env python3
"""Add description and cta keys to Pricing.tier.* in pl.json."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pl.json"
data = json.loads(fp.read_text("utf-8"))

t = data["Pricing"]["tier"]
t["free"]["description"] = "Idealny na start. Poznaj g\u0142\u00f3wne funkcje i przekonaj si\u0119, dlaczego uczniowie kochaj\u0105 LumenLingo."
t["free"]["cta"] = "Zacznij za darmo"
t["pro"]["description"] = "Dla zaanga\u017cowanych uczni\u00f3w, kt\u00f3rzy chc\u0105 wi\u0119cej j\u0119zyk\u00f3w, nielimitowanych \u0107wicze\u0144 i bogatszych do\u015bwiadcze\u0144."
t["pro"]["cta"] = "Przejd\u017a na Pro"
t["elite"]["description"] = "Odblokuj pe\u0142ne do\u015bwiadczenie LumenLingo ze wszystkimi j\u0119zykami, zaawansowanymi trybami i niesamowitymi wizualizacjami."
t["elite"]["cta"] = "Wybierz Elite"
t["royal"]["description"] = "Najwy\u017cszy poziom dla mistrz\u00f3w j\u0119zyk\u00f3w. Wszystkie funkcje, bez limit\u00f3w, ekskluzywne dodatki."
t["royal"]["cta"] = "Wybierz Royal"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("pl.json tier descriptions and CTAs added")
