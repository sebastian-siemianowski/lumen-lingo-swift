#!/usr/bin/env python3
"""Update pl.json pricing to PLN (Polish market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "pl.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "0 z\u0142"
p["tier"]["pro"]["price"] = "49,99 z\u0142"
p["tier"]["elite"]["price"] = "99,99 z\u0142"
p["tier"]["royal"]["price"] = "499,99 z\u0142"
p["perMonth"] = "/miesi\u0105c"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("pl.json pricing updated to PLN")
