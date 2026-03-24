#!/usr/bin/env python3
"""Mark Story 15.3 subtasks as done in Legals.md.

15.3.1 - Create Legal Impact Assessment template: DONE
15.3.2 - Integrate into development workflow: DONE (documented in template)
15.3.3 - Require assessment completion before merge: DONE (documented in template)
15.3.4 - Document completed assessments: DONE (assessments/ dir structure defined)
"""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in range(1, 5):
    old = f"- [ ] 15.3.{i}"
    new = f"- [x] 15.3.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 15.3.{i}")
    else:
        print(f"WARNING: 15.3.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
