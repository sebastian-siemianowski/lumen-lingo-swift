#!/usr/bin/env python3
"""Audit rich-text tags in legal namespace translations for mismatches."""
import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
LOCALES = ["en", "pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
NAMESPACES = ["Privacy", "Terms", "Eula", "CookiePage"]

TAG_RE = re.compile(r"<(/?)([a-zA-Z][a-zA-Z0-9]*)")

def check_tags(text):
    stack = []
    issues = []
    for m in TAG_RE.finditer(text):
        is_close = m.group(1) == "/"
        tag = m.group(2)
        if tag in ("br", "hr"):
            continue
        if is_close:
            if stack and stack[-1] == tag:
                stack.pop()
            else:
                issues.append(f"unmatched </{tag}>")
        else:
            stack.append(tag)
    for t in stack:
        issues.append(f"unclosed <{t}>")
    return issues

def flatten(d, prefix=""):
    items = {}
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        elif isinstance(v, str):
            items[key] = v
    return items

total = 0
for loc in LOCALES:
    data = json.loads((ROOT / f"{loc}.json").read_text("utf-8"))
    for ns in NAMESPACES:
        if ns not in data:
            continue
        flat = flatten(data[ns])
        for key, val in flat.items():
            if "<" in val:
                issues = check_tags(val)
                if issues:
                    print(f"  {loc} {ns}.{key}: {issues}")
                    total += 1

print(f"\nTotal tag issues: {total}")
