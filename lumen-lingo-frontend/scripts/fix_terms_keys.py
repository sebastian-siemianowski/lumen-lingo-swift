#!/usr/bin/env python3
"""Move misplaced translation keys from lowercase 'terms' to uppercase 'Terms'."""
import json
import os
import glob

messages_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "messages")
keys_to_move = ["dataLossShield", "serviceDiscontinuation", "accountSecurity", "classActionWaiver"]

for filepath in sorted(glob.glob(os.path.join(messages_dir, "*.json"))):
    lang = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)

    upper_terms = data.get("Terms", {})
    lower_terms = data.get("terms", {})

    if not lower_terms:
        print(f"{lang}: No lowercase 'terms' section found, skipping")
        continue

    moved = []
    for key in keys_to_move:
        if key in lower_terms and key not in upper_terms:
            upper_terms[key] = lower_terms[key]
            moved.append(key)
        elif key in lower_terms and key in upper_terms:
            print(f"  {lang}: '{key}' already in uppercase Terms (duplicate)")
        else:
            print(f"  {lang}: '{key}' not found in lowercase terms")

    dupes = [k for k in lower_terms if k not in keys_to_move]
    for d in dupes:
        if d in upper_terms:
            print(f"  {lang}: '{d}' is a duplicate (in both sections)")
        else:
            print(f"  {lang}: WARNING - '{d}' only in lowercase, NOT in uppercase!")
            upper_terms[d] = lower_terms[d]
            moved.append(d)

    data["Terms"] = upper_terms
    del data["terms"]

    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    print(f"{lang}: Moved {moved}, removed lowercase 'terms' section")

print("\nDone!")
