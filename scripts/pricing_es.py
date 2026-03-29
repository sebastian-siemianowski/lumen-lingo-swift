#!/usr/bin/env python3
"""Update es.json pricing to USD (Latin American market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "es.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "$0"
p["tier"]["pro"]["price"] = "$9,99"
p["tier"]["elite"]["price"] = "$19,99"
p["tier"]["royal"]["price"] = "$99,99"
p["perMonth"] = "/mes"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("es.json pricing updated to USD")
