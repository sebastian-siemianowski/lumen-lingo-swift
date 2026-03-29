#!/usr/bin/env python3
"""Mark Story 14.21 subtasks as done in Legals.md."""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in range(1, 7):
    old = f"- [ ] 14.21.{i}"
    new = f"- [x] 14.21.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 14.21.{i}")
    else:
        print(f"WARNING: 14.21.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
