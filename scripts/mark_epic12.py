#!/usr/bin/env python3
"""Mark all Epic 12 subtasks as complete in Legals.md."""

import re

PATH = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/Legals.md"

with open(PATH, "r", encoding="utf-8") as f:
    content = f.read()

# All 12.x.y subtask IDs to mark
subtask_ids = [
    "12.1.1", "12.1.2", "12.1.3", "12.1.4", "12.1.5", "12.1.6", "12.1.7",
    "12.2.1", "12.2.2", "12.2.3", "12.2.4", "12.2.5",
    "12.3.1", "12.3.2", "12.3.3", "12.3.4",
    "12.4.1", "12.4.2", "12.4.3", "12.4.4", "12.4.5", "12.4.6", "12.4.7",
]

count = 0
for sid in subtask_ids:
    # Escape the dots in the subtask ID for regex
    escaped = sid.replace(".", r"\.")
    pattern = rf"(- \[) (\] {escaped})"
    new_content = re.sub(pattern, r"\1x\2", content)
    if new_content != content:
        count += 1
        content = new_content

# Update summary table: Epic 12 row
content = content.replace(
    "| **P1** | Epic 12: Security & Breach Preparedness | Not Started | Medium |",
    "| **P1** | Epic 12: Security & Breach Preparedness | Complete | Medium |"
)

with open(PATH, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Marked {count} subtasks as complete in Epic 12.")
print("Updated summary table entry to 'Complete'.")
