#!/usr/bin/env python3
"""Fix duplicated subscriptionEUConsumerRights/subscriptionCancelSteps in Latin-script AppStrings files.
Remove all occurrences and keep only the first pair."""

BASE = "LumenLingo/LumenLingo/Models/Localization"

LANGS = ["English", "German", "Spanish", "French", "Polish"]

for lang in LANGS:
    path = f"{BASE}/AppStrings+{lang}.swift"
    with open(path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    # Find the first occurrence of each key and save those lines
    eu_line = None
    cancel_line = None
    for l in lines:
        if 'subscriptionEUConsumerRights:' in l and eu_line is None:
            eu_line = l
        if 'subscriptionCancelSteps:' in l and cancel_line is None:
            cancel_line = l

    # Remove all lines with these keys
    filtered = [l for l in lines if 'subscriptionEUConsumerRights:' not in l and 'subscriptionCancelSteps:' not in l]

    # Find insertion point after subscriptionContractDuration
    insert_idx = None
    for i, l in enumerate(filtered):
        if 'subscriptionContractDuration:' in l:
            insert_idx = i + 1
            break

    if insert_idx is None:
        print(f"{lang}: ERROR - could not find subscriptionContractDuration")
        continue

    # Re-insert the first occurrence of each
    filtered[insert_idx:insert_idx] = [eu_line, cancel_line]

    with open(path, 'w', encoding='utf-8') as f:
        f.writelines(filtered)
    print(f"{lang}: OK (kept first occurrence)")

print("Done.")
