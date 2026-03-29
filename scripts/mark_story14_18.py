#!/usr/bin/env python3
"""Mark Story 14.18 subtasks as done in Legals.md."""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in range(1, 8):
    old = f"- [ ] 14.18.{i}"
    new = f"- [x] 14.18.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 14.18.{i}")
    else:
        print(f"WARNING: 14.18.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
