#!/usr/bin/env python3
"""Update de.json pricing to EUR (German market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "de.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "0 \u20ac"
p["tier"]["pro"]["price"] = "9,99 \u20ac"
p["tier"]["elite"]["price"] = "19,99 \u20ac"
p["tier"]["royal"]["price"] = "99,99 \u20ac"
p["perMonth"] = "/Monat"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("de.json pricing updated to EUR")
