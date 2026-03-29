#!/usr/bin/env python3
"""
Migrate email addresses:
1. hello@lumenshore.com -> support@lumenlingo.com
2. *@lumenshore.com -> *@lumenlingo.com (remaining)
3. support@lumenlingo.app -> support@lumenlingo.com
"""

import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Files to process (relative to ROOT) — only production source/config files, NOT bundle IDs or build artifacts
TARGET_FILES = [
    # 9 locale JSONs
    "lumen-lingo-frontend/messages/en.json",
    "lumen-lingo-frontend/messages/pl.json",
    "lumen-lingo-frontend/messages/de.json",
    "lumen-lingo-frontend/messages/es.json",
    "lumen-lingo-frontend/messages/fr.json",
    "lumen-lingo-frontend/messages/ja.json",
    "lumen-lingo-frontend/messages/zh.json",
    "lumen-lingo-frontend/messages/ar.json",
    "lumen-lingo-frontend/messages/uk.json",
    # Frontend source
    "lumen-lingo-frontend/src/app/[locale]/accessibility/page.tsx",
    "lumen-lingo-frontend/src/app/[locale]/accessibility/vpat/page.tsx",
    "lumen-lingo-frontend/src/app/[locale]/ai-transparency/page.tsx",
    "lumen-lingo-frontend/src/app/[locale]/blog/feed.xml/route.ts",
    "lumen-lingo-frontend/src/app/[locale]/corporate-governance/page.tsx",
    "lumen-lingo-frontend/src/app/[locale]/press/page.tsx",
    "lumen-lingo-frontend/src/app/[locale]/security/page.tsx",
    "lumen-lingo-frontend/src/app/[locale]/terms/page.tsx",
    "lumen-lingo-frontend/src/components/contact/contact-section.tsx",
    "lumen-lingo-frontend/src/components/contact/faq-data.ts",
    "lumen-lingo-frontend/src/components/data-request/data-request-form.tsx",
    # security.txt
    "lumen-lingo-frontend/public/.well-known/security.txt",
    # iOS
    "LumenLingo/LumenLingo/Views/Auth/AccountSuspendedView.swift",
]

# Ordered replacements — specific before general
REPLACEMENTS = [
    # 1) hello@lumenshore.com -> support@lumenlingo.com (specific rename)
    ("hello@lumenshore.com", "support@lumenlingo.com"),
    # 2) All remaining @lumenshore.com emails -> @lumenlingo.com
    ("@lumenshore.com", "@lumenlingo.com"),
    # 3) support@lumenlingo.app -> support@lumenlingo.com
    ("support@lumenlingo.app", "support@lumenlingo.com"),
]

total_changes = 0
file_changes = {}

for rel_path in TARGET_FILES:
    fpath = os.path.join(ROOT, rel_path)
    if not os.path.exists(fpath):
        print(f"  SKIP (not found): {rel_path}")
        continue

    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    original = content
    changes_in_file = 0

    for old, new in REPLACEMENTS:
        count = content.count(old)
        if count > 0:
            content = content.replace(old, new)
            changes_in_file += count
            print(f"  {rel_path}: {old} -> {new} ({count}x)")

    if content != original:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        file_changes[rel_path] = changes_in_file
        total_changes += changes_in_file

print(f"\n=== SUMMARY ===")
print(f"Files changed: {len(file_changes)}")
print(f"Total replacements: {total_changes}")
for f, c in sorted(file_changes.items()):
    print(f"  {f}: {c} replacement(s)")
