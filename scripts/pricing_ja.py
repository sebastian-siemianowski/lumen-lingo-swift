#!/usr/bin/env python3
"""Update ja.json pricing to JPY (Japanese market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "ja.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "\u00a50"
p["tier"]["pro"]["price"] = "\u00a51,500"
p["tier"]["elite"]["price"] = "\u00a53,000"
p["tier"]["royal"]["price"] = "\u00a515,000"
p["perMonth"] = "/\u6708"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("ja.json pricing updated to JPY")
