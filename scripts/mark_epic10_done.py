#!/usr/bin/env python3
"""Mark already-completed Epic 10 subtasks in Legals.md."""
import re

LEGALS = "/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/Legals.md"

with open(LEGALS, "r") as f:
    content = f.read()

# These subtasks are verified as already complete:
# 10.1.1 - Privacy text extracted into translation keys (page uses getTranslations)
# 10.1.2 - Privacy translated into all 10 locales (all locale JSON files have Privacy key)
# 10.1.3 - Professional translations exist (substantial translations in all locales)
# 10.1.6 - All locale JSON files updated (verified all 10 have Privacy keys)
# 10.2.1 - Terms text extracted into translation keys
# 10.2.2 - Terms translated into all 10 locales
# 10.2.3 - Professional/legal translation exists
# 10.2.4 - Governing law notice exists ("governed by laws of England and Wales")
# 10.2.5 - Subscription terms translated
# 10.3.1 - Cookie Policy translated (CookiePage in all 10 locales)
# 10.3.2 - EULA translated (Eula in all 10 locales)
# 10.3.3 - Cookie consent banner translated (CookieConsent in all 10 locales)

tasks_to_check = [
    "10.1.1", "10.1.2", "10.1.3", "10.1.6",
    "10.2.1", "10.2.2", "10.2.3", "10.2.4", "10.2.5",
    "10.3.1", "10.3.2", "10.3.3",
]

count = 0
for task_id in tasks_to_check:
    # Match the exact pattern: - [ ] 10.x.y — (with em dash)
    pattern = rf"(- \[ \] {re.escape(task_id)} )"
    replacement = f"- [x] {task_id} "
    new_content, n = re.subn(pattern, replacement, content)
    if n > 0:
        content = new_content
        count += n
        print(f"  Checked: {task_id}")
    else:
        print(f"  SKIPPED (not found or already checked): {task_id}")

with open(LEGALS, "w") as f:
    f.write(content)

print(f"\nTotal tasks marked complete: {count}")
