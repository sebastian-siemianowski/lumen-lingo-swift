#!/usr/bin/env python3
"""Update zh.json pricing to CNY (Chinese market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "zh.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "\u00a50"
p["tier"]["pro"]["price"] = "\u00a568"
p["tier"]["elite"]["price"] = "\u00a5128"
p["tier"]["royal"]["price"] = "\u00a5648"
p["perMonth"] = "/\u6708"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("zh.json pricing updated to CNY")
