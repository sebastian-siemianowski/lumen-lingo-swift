#!/usr/bin/env python3
"""Mark Story 9.3 subtasks as completed in Legals.md."""

with open("Legals.md", "r", encoding="utf-8") as f:
    text = f.read()

targets = [
    "- [ ] 9.3.1",
    "- [ ] 9.3.2",
    "- [ ] 9.3.3",
    "- [ ] 9.3.4",
]

for t in targets:
    replacement = t.replace("- [ ]", "- [x]")
    if t in text:
        text = text.replace(t, replacement, 1)
        print(f"Marked: {replacement.strip()}")
    else:
        print(f"NOT FOUND: {t.strip()}")

with open("Legals.md", "w", encoding="utf-8") as f:
    f.write(text)

print("Done.")
