#!/usr/bin/env python3
"""Mark Story 10.3 subtasks 10.3.4 and 10.3.5 as complete in Legals.md."""

import pathlib

f = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = f.read_text("utf-8")

replacements = {
    "- [ ] 10.3.4": "- [x] 10.3.4",
    "- [ ] 10.3.5": "- [x] 10.3.5",
}

for old, new in replacements.items():
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked {old.split(']')[1].strip()[:6]} done")
    else:
        print(f"Already done or not found: {old}")

f.write_text(text, "utf-8")
print("Done")
