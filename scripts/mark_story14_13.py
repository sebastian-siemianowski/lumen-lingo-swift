#!/usr/bin/env python3
"""Mark Story 14.13 subtasks (14.13.1-14.13.5) as complete in Legals.md."""
import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")
for i in range(1, 6):
    tag = f"14.13.{i}"
    old = f"- [ ] {tag}"
    new = f"- [x] {tag}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked {tag}")
    else:
        print(f"SKIP  {tag}")
fp.write_text(text, "utf-8")
print("Done")
