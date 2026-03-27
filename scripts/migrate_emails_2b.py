#!/usr/bin/env python3
"""Fix remaining hello@lumenshore.com occurrences."""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FILES = [
    "Completed/Frontend.md",
    "Legals2.md",
    "lumen-lingo-frontend/scripts/legal_ar.py",
    "lumen-lingo-frontend/scripts/legal_de.py",
    "lumen-lingo-frontend/scripts/legal_es.py",
    "lumen-lingo-frontend/scripts/legal_fr.py",
    "lumen-lingo-frontend/scripts/legal_ja.py",
    "lumen-lingo-frontend/scripts/legal_pl.py",
    "lumen-lingo-frontend/scripts/legal_zh.py",
    "lumen-lingo-frontend/scripts/update_privacy_en.py",
    "lumen-lingo-frontend/scripts/update_privacy_transfers.py",
    "scripts/fix_stale_emails.py",
    "scripts/patch_cookie_page_strings.py",
    "scripts/story7_2_data.json",
]
total = 0
for rel in FILES:
    path = os.path.join(ROOT, rel)
    if not os.path.isfile(path):
        print(f"  SKIP: {rel}")
        continue
    with open(path, "r", encoding="utf-8") as f:
        c = f.read()
    orig = c
    cnt = c.count("hello@lumenshore.com")
    if cnt:
        c = c.replace("hello@lumenshore.com", "support@lumenlingo.com")
        total += cnt
        print(f"  {rel}: hello@lumenshore.com -> support@lumenlingo.com ({cnt}x)")
        with open(path, "w", encoding="utf-8") as f:
            f.write(c)
print(f"Total: {total}")
