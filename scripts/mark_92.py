#!/usr/bin/env python3
"""Mark Story 9.2 subtasks as completed in Legals.md."""

import re

filepath = "Legals.md"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

targets = ["9.2.1", "9.2.2", "9.2.3", "9.2.4", "9.2.5"]

for t in targets:
    pattern = rf"(- \[) (\] {re.escape(t)})"
    new = rf"\1x\2"
    content, count = re.subn(pattern, new, content)
    print(f"{t}: {'marked' if count else 'NOT FOUND or already marked'}")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done.")
