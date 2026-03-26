#!/usr/bin/env python3
"""Check all part scripts for lines with embedded ASCII double quotes that break Python strings."""
import glob

files = sorted(glob.glob('scripts/story_21_1_privacy_part*.py'))
issues = []

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as fh:
        lines = fh.readlines()
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        # Only check translation value lines
        if not (stripped.startswith('"') and '": "' in stripped):
            continue
        # Find the value portion after ": "
        colon_idx = stripped.index('": "')
        value_start = colon_idx + 4  # after ": "
        # The value ends with ", or "
        rest = stripped[value_start:]
        # Count ASCII " in the value portion (before the closing delimiter)
        # A clean line has rest ending with '", ' or '",'  or just '"'
        # The last " is the closing delimiter
        # Any " before that is a problem
        quote_positions = [j for j, ch in enumerate(rest) if ch == '"']
        if len(quote_positions) > 1:
            # More than just the closing quote
            issues.append((fpath, i, stripped[:150]))

for fpath, lineno, text in issues:
    print(f"{fpath}:{lineno}")
    print(f"  {text}")
    print()

print(f"Total issues: {len(issues)}")
