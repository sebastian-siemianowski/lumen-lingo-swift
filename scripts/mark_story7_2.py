#!/usr/bin/env python3
"""Mark Story 7.2 subtasks as done in Legals.md."""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in range(1, 5):
    old = f"- [ ] 7.2.{i}"
    new = f"- [x] 7.2.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 7.2.{i}")
    else:
        print(f"WARNING: 7.2.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
