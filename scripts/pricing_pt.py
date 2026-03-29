#!/usr/bin/env python3
"""Update pt.json pricing to BRL (Brazilian market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pt.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "R$0"
p["tier"]["pro"]["price"] = "R$49,90"
p["tier"]["elite"]["price"] = "R$99,90"
p["tier"]["royal"]["price"] = "R$499,90"
p["perMonth"] = "/m\u00eas"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("pt.json pricing updated to BRL")
