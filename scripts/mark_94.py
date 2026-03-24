#!/usr/bin/env python3
"""Mark Story 9.4 subtasks (9.4.1-9.4.4) as complete in Legals.md."""

path = "Legals.md"
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

targets = ["9.4.1", "9.4.2", "9.4.3", "9.4.4"]
for t in targets:
    old = f"- [ ] {t}"
    new = f"- [x] {t}"
    if old in content:
        content = content.replace(old, new, 1)
        print(f"  {t}: marked complete")
    else:
        print(f"  {t}: already complete or not found")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done: Story 9.4 marked complete.")
