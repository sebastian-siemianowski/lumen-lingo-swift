#!/usr/bin/env python3
"""
Fix email address leaks in translation message files.

1. Replace email text INSIDE existing tags with 'email'
   e.g. <emailLink>legal@lumenlingo.com</emailLink> → <emailLink>email</emailLink>

2. Wrap plain-text email addresses in appropriate tags
   e.g. legal@lumenlingo.com → <emailLink>email</emailLink>
   e.g. support@lumenlingo.com → <supportEmailLink>email</supportEmailLink>

3. Rename <email> tags to <emailLink> (unified tag name)
"""

import json
import re
import sys
from pathlib import Path

MESSAGES_DIR = Path(__file__).parent.parent / "messages"

# Map: email prefix → tag name
EMAIL_TAG_MAP = {
    "legal": "emailLink",
    "support": "supportEmailLink",
    "security": "securityEmailLink",
    "accessibility": "accessibilityEmailLink",
    "appeals": "appealsEmailLink",
    "dsa": "dsaEmailLink",
    "press": "pressEmailLink",
    "anpd": "anpdEmailLink",
}


def fix_tagged_emails(text: str) -> str:
    """Replace email addresses inside XML-like tags with 'email'."""
    # Pattern: <anyTag>anything@lumenlingo.com</anyTag>
    text = re.sub(
        r"<(emailLink|email|supportLink|anpdEmail|securityEmailLink|supportEmailLink|accessibilityEmailLink|appealsEmailLink|dsaEmailLink|pressEmailLink)>"
        r"[^<]*@lumenlingo\.com[^<]*"
        r"</(emailLink|email|supportLink|anpdEmail|securityEmailLink|supportEmailLink|accessibilityEmailLink|appealsEmailLink|dsaEmailLink|pressEmailLink)>",
        lambda m: f"<{m.group(1)}>email</{m.group(1)}>",
        text,
    )
    # Rename <email>email</email> → <emailLink>email</emailLink>
    text = text.replace("<email>email</email>", "<emailLink>email</emailLink>")
    # Rename <supportLink>email</supportLink> → <supportEmailLink>email</supportEmailLink>
    text = text.replace("<supportLink>email</supportLink>", "<supportEmailLink>email</supportEmailLink>")
    # Rename <anpdEmail>email</anpdEmail> → <anpdEmailLink>email</anpdEmailLink>
    text = text.replace("<anpdEmail>email</anpdEmail>", "<anpdEmailLink>email</anpdEmailLink>")
    return text


def fix_plain_text_emails(text: str) -> str:
    """Wrap plain-text email addresses in appropriate tags."""
    for prefix, tag in EMAIL_TAG_MAP.items():
        # Match prefix@lumenlingo.com NOT already inside a tag
        # Use negative lookbehind for > and negative lookahead for </ to avoid double-wrapping
        pattern = rf"(?<!>)({re.escape(prefix)}@lumenlingo\.com)(?!</)"
        replacement = f"<{tag}>email</{tag}>"
        text = re.sub(pattern, replacement, text)
    return text


def process_value(value, path=""):
    """Recursively process JSON values."""
    if isinstance(value, str):
        original = value
        value = fix_tagged_emails(value)
        value = fix_plain_text_emails(value)
        if value != original:
            print(f"  Fixed: {path}")
        return value
    elif isinstance(value, dict):
        return {k: process_value(v, f"{path}.{k}") for k, v in value.items()}
    elif isinstance(value, list):
        return [process_value(item, f"{path}[{i}]") for i, item in enumerate(value)]
    return value


def main():
    json_files = sorted(MESSAGES_DIR.glob("*.json"))
    if not json_files:
        print("No JSON files found in", MESSAGES_DIR)
        sys.exit(1)

    total_files = 0
    for filepath in json_files:
        print(f"\nProcessing {filepath.name}...")
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)

        fixed_data = process_value(data, filepath.stem)

        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(fixed_data, f, ensure_ascii=False, indent=2)
            f.write("\n")

        total_files += 1

    print(f"\nDone! Processed {total_files} files.")

    # Verify no remaining leaks
    print("\n--- Verification ---")
    for filepath in json_files:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        matches = re.findall(r"[a-z]+@lumenlingo\.com", content)
        if matches:
            print(f"  WARNING: {filepath.name} still has {len(matches)} email(s): {matches[:5]}")
        else:
            print(f"  OK: {filepath.name} — no email leaks")


if __name__ == "__main__":
    main()
