#!/usr/bin/env python3
"""Mark Story 15.1 subtasks as done in Legals.md.

15.1.1 - Version numbering: DONE (all docs now versioned)
15.1.2 - Changelog section: DONE (Terms now has version history like Privacy/Cookies)
15.1.3 - What's Changed notification: Deferred (requires frontend component)
15.1.4 - Store historical versions: DONE (in Git, current versions on site)
15.1.5 - Notify existing users: Blocked (requires ESP/email infrastructure)
15.1.6 - Re-consent mechanism: Blocked (requires in-app mechanism)
"""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in [1, 2, 4]:
    old = f"- [ ] 15.1.{i}"
    new = f"- [x] 15.1.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 15.1.{i}")
    else:
        print(f"WARNING: 15.1.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done — 15.1.1, 15.1.2, 15.1.4 marked. 15.1.3/5/6 deferred (blocked).")
