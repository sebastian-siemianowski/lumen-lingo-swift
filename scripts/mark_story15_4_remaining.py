#!/usr/bin/env python3
"""Mark Story 15.4.5 and 15.4.6 subtasks as done in Legals.md."""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in [5, 6]:
    old = f"- [ ] 15.4.{i}"
    new = f"- [x] 15.4.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 15.4.{i}")
    else:
        print(f"WARNING: 15.4.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
