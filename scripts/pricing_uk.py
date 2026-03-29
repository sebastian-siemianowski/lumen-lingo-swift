#!/usr/bin/env python3
"""Update uk.json pricing to UAH (Ukrainian market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "uk.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "0 \u20b4"
p["tier"]["pro"]["price"] = "299 \u20b4"
p["tier"]["elite"]["price"] = "599 \u20b4"
p["tier"]["royal"]["price"] = "2999 \u20b4"
p["perMonth"] = "/\u043c\u0456\u0441\u044f\u0446\u044c"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("uk.json pricing updated to UAH")
