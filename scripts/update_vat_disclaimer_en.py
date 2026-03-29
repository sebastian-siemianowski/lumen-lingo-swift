#!/usr/bin/env python3
"""Update disclaimerVatInclusive text in en.json to be more explicit about GBP/UK VAT per 9.4.3."""

import json
from collections import OrderedDict

path = "lumen-lingo-frontend/messages/en.json"
with open(path, 'r', encoding='utf-8') as f:
    d = json.load(f, object_pairs_hook=OrderedDict)

old = d["Pricing"]["disclaimerVatInclusive"]
print(f"Old: {old}")

d["Pricing"]["disclaimerVatInclusive"] = "Prices shown in GBP include UK VAT at 20%. Actual price charged may vary based on your location, local taxes, and currency. All in-app purchases are processed and billed by Apple."

new = d["Pricing"]["disclaimerVatInclusive"]
print(f"New: {new}")

with open(path, 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=2)
    f.write('\n')

print("en.json: OK")
