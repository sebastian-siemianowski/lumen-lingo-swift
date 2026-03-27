#!/usr/bin/env python3
"""Email migration script (round 2).

Changes:
1. privacy@lumenlingo.com   -> support@lumenlingo.com
2. community@lumenlingo.com -> support@lumenlingo.com
3. rudph2@test.com          -> testuser@lumenlingo.com
4. hello@lumenshore.com     -> support@lumenlingo.com
5. sebastian@test.com       -> testuser@lumenlingo.com
"""

import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Files to change (excluding build artifacts, .next cache, and Xcode build dirs)
FILES = [
    # 1. privacy@lumenlingo.com (ai-transparency page)
    "lumen-lingo-frontend/src/app/[locale]/ai-transparency/page.tsx",

    # 2. community@lumenlingo.com (9 locale JSONs)
    "lumen-lingo-frontend/messages/en.json",
    "lumen-lingo-frontend/messages/ar.json",
    "lumen-lingo-frontend/messages/de.json",
    "lumen-lingo-frontend/messages/es.json",
    "lumen-lingo-frontend/messages/fr.json",
    "lumen-lingo-frontend/messages/ja.json",
    "lumen-lingo-frontend/messages/pl.json",
    "lumen-lingo-frontend/messages/uk.json",
    "lumen-lingo-frontend/messages/zh.json",

    # 3. rudph2@test.com (iOS source files)
    "LumenLingo/LumenLingo/Models/ContentModels.swift",
    "LumenLingo/LumenLingo/Services/ProgressService.swift",
    "LumenLingo/LumenLingo/Services/TierManager.swift",

    # 4. hello@lumenshore.com (compliance docs)
    "compliance/ROPA.md",
    "compliance/DSAR-Procedure.md",
    "compliance/LIA.md",
    "compliance/PECR-Assessment.md",
    "compliance/Legals.md",

    # 4. hello@lumenshore.com (scripts - historical data)
    "scripts/story14_20_data.json",
    "scripts/story7_1_data.json",
    "scripts/add_story14_4_translations.py",
    "scripts/add_dispute_resolution_translations.py",
    "scripts/story_20_1to4.py",
    "scripts/fix_emails.py",
    "scripts/audit_translations.py",

    # 5. sebastian@test.com (docs)
    "README.md",
    "AGENT.md",
]

REPLACEMENTS = [
    ("privacy@lumenlingo.com", "support@lumenlingo.com"),
    ("community@lumenlingo.com", "support@lumenlingo.com"),
    ("rudph2@test.com", "testuser@lumenlingo.com"),
    ("hello@lumenshore.com", "support@lumenlingo.com"),
    ("sebastian@test.com", "testuser@lumenlingo.com"),
]

total = 0
changed_files = set()

for rel in FILES:
    path = os.path.join(ROOT, rel)
    if not os.path.isfile(path):
        print(f"  SKIP (not found): {rel}")
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    file_count = 0
    for old, new in REPLACEMENTS:
        count = content.count(old)
        if count:
            content = content.replace(old, new)
            file_count += count
            print(f"  {rel}: {old} -> {new} ({count}x)")
    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        total += file_count
        changed_files.add(rel)

print(f"\nTotal replacements: {total}")
print(f"Files changed: {len(changed_files)}")
