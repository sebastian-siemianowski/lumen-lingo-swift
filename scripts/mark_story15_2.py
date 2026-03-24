#!/usr/bin/env python3
"""Mark Story 15.2 subtasks as done in Legals.md.

15.2.1 - Create annual audit checklist: DONE (compliance/annual-legal-audit-checklist.md)
15.2.2 - Schedule annual audit date: DONE (January each year, documented in checklist)
15.2.3 - Assign audit responsibility: DONE (Lumenshore Limited, documented in checklist)
15.2.4 - Document audit findings and remediation: DONE (audit record table in checklist)
15.2.5 - Track new laws: DONE (Section 10 Emerging Regulations in checklist)
"""

import pathlib

fp = pathlib.Path(__file__).resolve().parent.parent / "Legals.md"
text = fp.read_text("utf-8")

for i in range(1, 6):
    old = f"- [ ] 15.2.{i}"
    new = f"- [x] 15.2.{i}"
    if old in text:
        text = text.replace(old, new, 1)
        print(f"Marked 15.2.{i}")
    else:
        print(f"WARNING: 15.2.{i} not found or already marked")

fp.write_text(text, "utf-8")
print("Done")
