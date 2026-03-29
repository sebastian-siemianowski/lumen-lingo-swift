#!/usr/bin/env python3
"""Mark all Epic 16 subtasks as complete in Legals.md."""

import re

path = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/Legals.md"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Mark all 16.x.y subtasks as done
replacements = [
    ("- [ ] 16.1.1", "- [x] 16.1.1"),
    ("- [ ] 16.1.2", "- [x] 16.1.2"),
    ("- [ ] 16.1.3", "- [x] 16.1.3"),
    ("- [ ] 16.1.4", "- [x] 16.1.4"),
    ("- [ ] 16.1.5", "- [x] 16.1.5"),
    ("- [ ] 16.2.1", "- [x] 16.2.1"),
    ("- [ ] 16.2.2", "- [x] 16.2.2"),
    ("- [ ] 16.2.3", "- [x] 16.2.3"),
    ("- [ ] 16.2.4", "- [x] 16.2.4"),
    ("- [ ] 16.3.1", "- [x] 16.3.1"),
    ("- [ ] 16.3.2", "- [x] 16.3.2"),
    ("- [ ] 16.3.3", "- [x] 16.3.3"),
    ("- [ ] 16.3.4", "- [x] 16.3.4"),
]

for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)
        print(f"  Marked: {new}")
    else:
        print(f"  SKIP (already done or not found): {old}")

# Update the summary table
content = content.replace(
    "| **P1** | Epic 16: Website Legal Infrastructure | Not Started | Small |",
    "| **P1** | Epic 16: Website Legal Infrastructure | Complete | Small |",
)

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("\nDone — Epic 16 fully marked complete.")
