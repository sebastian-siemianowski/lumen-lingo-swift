#!/usr/bin/env python3
"""Mark Story 14.6 subtasks (14.6.1-14.6.9) as complete in Legals.md."""
import pathlib, re

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")
for i in range(1, 10):
    tag = f"14.6.{i}"
    old = f"- [ ] {tag}"
    new = f"- [x] {tag}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked {tag}")
    else:
        print(f"SKIP  {tag} (not found or already marked)")
fp.write_text(text, "utf-8")
print("Done")
