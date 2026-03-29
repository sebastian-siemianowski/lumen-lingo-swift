#!/usr/bin/env python3
"""Mark Story 10.1 remaining subtasks as complete in Legals.md."""
import re

LEGALS = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/Legals.md"

with open(LEGALS, "r") as f:
    content = f.read()

# 10.1.4 - Added "English version prevails" disclaimer via LanguageDisclaimer component
# 10.1.5 - Verified RTL layout works (html dir=rtl, logical properties in CSS)
tasks_to_check = ["10.1.4", "10.1.5"]

count = 0
for task_id in tasks_to_check:
    pattern = rf"(- \[ \] {re.escape(task_id)} )"
    replacement = f"- [x] {task_id} "
    new_content, n = re.subn(pattern, replacement, content)
    if n > 0:
        content = new_content
        count += n
        print(f"  Checked: {task_id}")
    else:
        print(f"  SKIPPED: {task_id}")

with open(LEGALS, "w") as f:
    f.write(content)

print(f"\nTotal marked: {count}")
