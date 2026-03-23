#!/usr/bin/env python3
"""Update ar.json pricing to SAR (Saudi market)."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "ar.json"
data = json.loads(fp.read_text("utf-8"))

p = data["Pricing"]
p["tier"]["free"]["price"] = "0 \u0631.\u0633"
p["tier"]["pro"]["price"] = "39.99 \u0631.\u0633"
p["tier"]["elite"]["price"] = "79.99 \u0631.\u0633"
p["tier"]["royal"]["price"] = "399.99 \u0631.\u0633"
p["perMonth"] = "/\u0634\u0647\u0631"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("ar.json pricing updated to SAR")
