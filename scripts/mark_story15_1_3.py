#!/usr/bin/env python3
"""Mark Story 15.1.3 subtask as done in Legals.md."""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

old = "- [ ] 15.1.3"
new = "- [x] 15.1.3"
if old in text:
    text = text.replace(old, new, 1)
    print("Marked 15.1.3")
else:
    print("WARNING: 15.1.3 not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
