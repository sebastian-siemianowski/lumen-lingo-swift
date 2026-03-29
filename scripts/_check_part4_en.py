#!/usr/bin/env python3
import json, os
MESSAGES = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "lumen-lingo-frontend", "messages")
with open(os.path.join(MESSAGES, "en.json"), "r") as f:
    data = json.load(f)
t = data["Terms"]

sections = {
    "contactUs": ["heading","intro","email","company","responseTime"],
    "contentProtection": ["heading","p1","li1","li2","li3","li4","li5","li6","p2"],
    "dataExport": ["heading","p1","li1","li2","li3","p2"],
    "enforcementRemedies": ["heading","p1","p2","p3","li1","li2","li3"],
}
for sec, keys in sections.items():
    for k in keys:
        v = t.get(sec, {}).get(k, "MISSING")
        print(f"{sec}.{k}: {v}")
    print()

print(f"internationalTax.australiaHeading: {t['internationalTax']['australiaHeading']}")
print(f"pricingCompliance.ukPriceMarkingHeading: {t['pricingCompliance']['ukPriceMarkingHeading']}")
print(f"ukAdr.provider: {t['ukAdr']['provider']}")
