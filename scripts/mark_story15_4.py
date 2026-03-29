#!/usr/bin/env python3
"""Mark Story 15.4 subtasks as done in Legals.md.

15.4.1 - Monitor Apple developer news: DONE (register section 1)
15.4.2 - Monitor ICO / EU DPA guidance: DONE (register sections 2-3)
15.4.3 - Monitor US state privacy law developments: DONE (register section 4)
15.4.4 - Monitor EU digital regulation: DONE (register section 5)
"""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in range(1, 5):
    old = f"- [ ] 15.4.{i}"
    new = f"- [x] 15.4.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 15.4.{i}")
    else:
        print(f"WARNING: 15.4.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
