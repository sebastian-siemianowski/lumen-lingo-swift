#!/usr/bin/env python3
import json
import re
import os

messages_dir = "messages"
legal_namespaces = ["Privacy", "Terms", "Eula", "CookiePage", "Cookies"]

def find_tags(text):
    tags = []
    for m in re.finditer(r"<(/?)([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*)?>", text):
        is_closing = m.group(1) == "/"
        tag_name = m.group(2)
        tags.append((is_closing, tag_name, m.group(0)))
    return tags

def check_balanced_tags(text, path):
    issues = []
    tags = find_tags(text)
    if not tags:
        return issues
    self_closing = set()
    for m in re.finditer(r"<([a-zA-Z][a-zA-Z0-9]*)\s*/>", text):
        self_closing.add(m.group(1))
    stack = []
    for is_closing, tag_name, raw in tags:
        if tag_name in self_closing:
            continue
        if not is_closing:
            stack.append((tag_name, raw))
        else:
            if not stack:
                issues.append(f"  Closing tag {raw} has no matching opening tag")
            elif stack[-1][0] != tag_name:
                issues.append(f"  Mismatched tags: opened <{stack[-1][0]}> but closed with </{tag_name}>")
                stack.pop()
            else:
                stack.pop()
    for tag_name, raw in stack:
        issues.append(f"  Unclosed tag: {raw}")
    return issues

def extract_all_strings(obj, prefix=""):
    results = []
    if isinstance(obj, dict):
        for key, value in obj.items():
            new_prefix = f"{prefix}.{key}" if prefix else key
            results.extend(extract_all_strings(value, new_prefix))
    elif isinstance(obj, str):
        results.append((prefix, obj))
    return results

all_issues = {}
locale_files = sorted([f for f in os.listdir(messages_dir) if f.endswith(".json")])

for filename in locale_files:
    locale = filename.replace(".json", "")
    filepath = os.path.join(messages_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    locale_issues = []
    for ns in legal_namespaces:
        if ns not in data:
            if ns == "CookiePage":
                continue
            locale_issues.append(f"  MISSING namespace: {ns}")
            continue
        ns_data = data[ns]
        strings = extract_all_strings(ns_data, ns)
        for path, value in strings:
            if "<" in value:
                tag_issues = check_balanced_tags(value, path)
                if tag_issues:
                    locale_issues.append(f"  {path}:")
                    locale_issues.append(f"    Value: {value[:200]}...")
                    locale_issues.extend(["    " + i for i in tag_issues])
    if locale_issues:
        all_issues[locale] = locale_issues

if all_issues:
    print("=== BROKEN RICH-TEXT TAGS FOUND ===")
    for locale, issues in sorted(all_issues.items()):
        print(f"\n[{locale}]")
        for issue in issues:
            print(issue)
else:
    print("No broken rich-text tags found in any locale.")

print("\n=== LEGAL NAMESPACE PRESENCE ===")
for filename in locale_files:
    locale = filename.replace(".json", "")
    filepath = os.path.join(messages_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    found = [ns for ns in ["Privacy", "Terms", "Eula", "CookiePage", "Cookies"] if ns in data]
    print(f"  {locale}: {found}")

# Count total strings with tags per locale
print("\n=== TAG USAGE STATS ===")
for filename in locale_files:
    locale = filename.replace(".json", "")
    filepath = os.path.join(messages_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    tag_count = 0
    for ns in legal_namespaces:
        if ns not in data:
            continue
        strings = extract_all_strings(data[ns], ns)
        for path, value in strings:
            if "<" in value and find_tags(value):
                tag_count += 1
    print(f"  {locale}: {tag_count} strings with rich-text tags")

# ===== CHECK: Translation keys that use non-b tags but page only passes richTags =====
print("\n=== POTENTIAL MISSING TAG HANDLERS ===")
print("(translation uses tags other than <b> but page may only pass richTags={b})")
import glob

# Load en translations
with open(os.path.join(messages_dir, "en.json"), "r", encoding="utf-8") as f:
    en_data = json.load(f)

page_files = {
    "Privacy": "src/app/[locale]/privacy/page.tsx",
    "Terms": "src/app/[locale]/terms/page.tsx", 
    "Eula": "src/app/[locale]/eula/page.tsx",
    "CookiePage": "src/app/[locale]/cookies/page.tsx",
}

for ns, page_path in page_files.items():
    if ns not in en_data:
        continue
    
    # Read page source
    with open(page_path, "r", encoding="utf-8") as f:
        page_source = f.read()
    
    # Find all t.rich() calls in the page that only use richTags
    simple_rich_pattern = re.compile(r"t\.rich\(['\"]([^'\"]+)['\"],\s*richTags\s*\)")
    simple_calls = simple_rich_pattern.findall(page_source)
    
    strings = extract_all_strings(en_data[ns], ns)
    for call_key in simple_calls:
        # Find the matching translation value
        full_key = f"{ns}.{call_key}"
        for path, value in strings:
            if path == full_key:
                # Check if value uses tags other than <b>
                tags_in_value = set()
                for m in re.finditer(r"</?([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*)?>", value):
                    tags_in_value.add(m.group(1))
                non_b_tags = tags_in_value - {"b"}
                if non_b_tags:
                    print(f"  [{ns}] {call_key}: uses tags {non_b_tags} but only richTags={{b}} passed")
                    print(f"    Value: {value[:150]}")
                break

# Find the tag-count discrepancy between en and other locales
print("\n=== TAG DISCREPANCY: en vs other locales ===")
with open(os.path.join(messages_dir, "en.json"), "r", encoding="utf-8") as f:
    en_data = json.load(f)

for filename in locale_files:
    locale = filename.replace(".json", "")
    if locale == "en":
        continue
    filepath = os.path.join(messages_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        other_data = json.load(f)
    
    for ns in legal_namespaces:
        if ns not in en_data or ns not in other_data:
            continue
        en_paths = set()
        other_paths = set()
        for p, v in extract_all_strings(en_data[ns], ns):
            if "<" in v and find_tags(v):
                en_paths.add(p)
        for p, v in extract_all_strings(other_data[ns], ns):
            if "<" in v and find_tags(v):
                other_paths.add(p)
        diff_en = en_paths - other_paths
        diff_other = other_paths - en_paths
        if diff_en:
            print(f"  [{locale}] Tags in en but NOT in {locale} ({ns}):")
            for d in sorted(diff_en):
                for p, v in extract_all_strings(en_data[ns], ns):
                    if p == d:
                        print(f"    {d}: {v[:120]}")
                        break
        if diff_other:
            print(f"  [{locale}] Tags in {locale} but NOT in en ({ns}):")
            for d in sorted(diff_other):
                print(f"    {d}")

# Check for missing keys across locales
print("\n=== MISSING TRANSLATION KEYS (en vs others) ===")
for filename in locale_files:
    locale = filename.replace(".json", "")
    if locale == "en":
        continue
    filepath = os.path.join(messages_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        other_data = json.load(f)
    
    for ns in legal_namespaces:
        if ns not in en_data:
            continue
        if ns not in other_data:
            print(f"  [{locale}] Entire namespace {ns} missing")
            continue
        en_keys = set(p for p, _ in extract_all_strings(en_data[ns], ns))
        other_keys = set(p for p, _ in extract_all_strings(other_data[ns], ns))
        missing = en_keys - other_keys
        extra = other_keys - en_keys
        if missing:
            print(f"  [{locale}] {ns}: {len(missing)} keys in en but missing in {locale}")
            for m in sorted(list(missing)[:5]):
                print(f"    - {m}")
            if len(missing) > 5:
                print(f"    ... and {len(missing)-5} more")
        if extra:
            print(f"  [{locale}] {ns}: {len(extra)} extra keys not in en")
            for e in sorted(list(extra)[:3]):
                print(f"    + {e}")
