#!/usr/bin/env python3
"""Add description and cta keys to Pricing.tier.* in en.json."""
import json, pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages" / "en.json"
data = json.loads(fp.read_text("utf-8"))

t = data["Pricing"]["tier"]
t["free"]["description"] = "Perfect for getting started. Explore core features and see why learners love LumenLingo."
t["free"]["cta"] = "Get Started Free"
t["pro"]["description"] = "For committed learners who want more languages, unlimited practice, and richer experiences."
t["pro"]["cta"] = "Upgrade to Pro"
t["elite"]["description"] = "Unlock the full LumenLingo experience with all languages, advanced modes, and stunning visuals."
t["elite"]["cta"] = "Go Elite"
t["royal"]["description"] = "The ultimate tier for language masters. Every feature, no limits, premium-only extras."
t["royal"]["cta"] = "Go Royal"

fp.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", "utf-8")
print("en.json tier descriptions and CTAs added")
