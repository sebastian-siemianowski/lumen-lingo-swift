#!/usr/bin/env python3
"""Mark Story 14.1 subtasks as complete in Legals.md."""

import re

PATH = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/Legals.md"

with open(PATH, "r", encoding="utf-8") as f:
    content = f.read()

subtask_ids = ["14.1.1", "14.1.2", "14.1.3", "14.1.4", "14.1.5"]

count = 0
for sid in subtask_ids:
    escaped = sid.replace(".", r"\.")
    pattern = rf"(- \[) (\] {escaped})"
    new_content = re.sub(pattern, r"\1x\2", content)
    if new_content != content:
        count += 1
        content = new_content

with open(PATH, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Marked {count} subtasks as complete for Story 14.1.")
