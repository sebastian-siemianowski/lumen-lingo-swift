#!/usr/bin/env python3
"""Mark Story 14.5 subtasks (14.5.1–14.5.8) as complete in Legals.md."""
import re

path = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/Legals.md"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

for i in range(1, 9):
    old = f"- [ ] 14.5.{i}"
    new = f"- [x] 14.5.{i}"
    if old in content:
        content = content.replace(old, new, 1)
        print(f"Marked 14.5.{i}")
    else:
        print(f"14.5.{i} not found or already marked")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Done — Story 14.5 subtasks marked.")
