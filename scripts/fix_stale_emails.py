#!/usr/bin/env python3
"""
Story 20.4: Replace all hello@lumenshore.com with legal@lumenlingo.com
in policy page.tsx files (matching the JSON emailLink values).
"""
import pathlib

BASE = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "src" / "app" / "[locale]"

FILES = [
    BASE / "privacy" / "page.tsx",
    BASE / "terms" / "page.tsx",
    BASE / "cookies" / "page.tsx",
    BASE / "data-request" / "page.tsx",
]

total = 0
for f in FILES:
    text = f.read_text("utf-8")
    count = text.count("hello@lumenshore.com")
    if count:
        text = text.replace("hello@lumenshore.com", "legal@lumenlingo.com")
        f.write_text(text, encoding="utf-8")
        print(f"  {f.name}: {count} replacements")
        total += count
    else:
        print(f"  {f.name}: no changes needed")

print(f"\nTotal replacements: {total}")
