#!/usr/bin/env python3
"""Epic 20 cross-policy consistency audit for en.json"""
import json, re

with open("/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/lumen-lingo-frontend/messages/en.json") as f:
    data = json.load(f)

def deep_print(obj, prefix, depth=0):
    if isinstance(obj, dict):
        for k, v in obj.items():
            deep_print(v, f"{prefix}.{k}", depth+1)
    elif isinstance(obj, str):
        print(f"  {prefix} = {repr(obj)}")

def find_emails(obj, path=''):
    results = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            results.extend(find_emails(v, f'{path}.{k}' if path else k))
    elif isinstance(obj, str):
        emails = re.findall(r'[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,}', obj)
        for email in emails:
            results.append((path, email))
    return results

# 1. LIABILITY CAPS
print("=" * 80)
print("1. LIABILITY CAPS")
print("=" * 80)

terms = data.get("Terms", {})
eula = data.get("Eula", {})
privacy = data.get("Privacy", {})

print("\n--- Terms namespace ---")
for key in ["limitationOfLiability", "liability"]:
    if key in terms:
        deep_print(terms[key], f"Terms.{key}")

# Also search for any key containing "liab" or "cap" at any level
for key in terms:
    kl = key.lower()
    if "liab" in kl or "limitation" in kl:
        if key not in ["limitationOfLiability", "liability"]:
            deep_print(terms[key], f"Terms.{key}")

print("\n--- Eula namespace ---")
for key in eula:
    kl = key.lower()
    if "liab" in kl or "limitation" in kl:
        deep_print(eula[key], f"Eula.{key}")

print("\n--- Privacy namespace ---")
for key in privacy:
    kl = key.lower()
    if "liab" in kl or "limitation" in kl:
        deep_print(privacy[key], f"Privacy.{key}")

# Also search all text values for dollar/pound amounts in liability context
print("\n--- Full-text search for liability amount patterns ---")
for ns_name, ns_data in [("Terms", terms), ("Eula", eula), ("Privacy", privacy)]:
    for path, email in []:
        pass
    def search_amounts(obj, pfx):
        if isinstance(obj, dict):
            for k, v in obj.items():
                search_amounts(v, f"{pfx}.{k}")
        elif isinstance(obj, str):
            if re.search(r'(\$|£|GBP|USD)\s*\d', obj) or "100" in obj and "liab" in obj.lower():
                print(f"  {pfx} => {repr(obj[:150])}")
    search_amounts(ns_data, ns_name)

# 2. DISPUTE RESOLUTION
print("\n" + "=" * 80)
print("2. DISPUTE RESOLUTION")
print("=" * 80)

print("\n--- Terms namespace ---")
for key in terms:
    kl = key.lower()
    if "dispute" in kl or "adr" in kl or "governing" in kl:
        deep_print(terms[key], f"Terms.{key}")

print("\n--- Eula namespace ---")
for key in eula:
    kl = key.lower()
    if "dispute" in kl or "governing" in kl or "adr" in kl:
        deep_print(eula[key], f"Eula.{key}")

print("\n--- Privacy namespace ---")
for key in privacy:
    kl = key.lower()
    if "dispute" in kl or "governing" in kl:
        deep_print(privacy[key], f"Privacy.{key}")

# 3. RETENTION CROSS-REFERENCES
print("\n" + "=" * 80)
print("3. RETENTION CROSS-REFERENCES")
print("=" * 80)

cookie = data.get("CookiePage", {})
cookie_retention = cookie.get("retention", {})
terms_retention = terms.get("retention", {})

print(f"\n  CookiePage.retention exists: {bool(cookie_retention)}")
if isinstance(cookie_retention, dict):
    print(f"  CookiePage.retention keys: {list(cookie_retention.keys())}")
    if "crossRef" in cookie_retention:
        print(f"  CookiePage.retention.crossRef = {repr(cookie_retention['crossRef'])}")
    else:
        print("  CookiePage.retention.crossRef: MISSING")
else:
    print("  CookiePage.retention: NOT A DICT or MISSING")

print(f"\n  Terms.retention exists: {bool(terms_retention)}")
if isinstance(terms_retention, dict):
    print(f"  Terms.retention keys: {list(terms_retention.keys())}")
    if "crossRef" in terms_retention:
        print(f"  Terms.retention.crossRef = {repr(terms_retention['crossRef'])}")
    else:
        print("  Terms.retention.crossRef: MISSING")
else:
    print("  Terms.retention: NOT A DICT or MISSING")

# 4. CONTACT EMAILS
print("\n" + "=" * 80)
print("4. CONTACT EMAILS")
print("=" * 80)

for ns_name in ["Privacy", "Terms", "Eula", "CookiePage"]:
    section = data.get(ns_name, {})
    emails = find_emails(section, ns_name)
    if emails:
        print(f"\n  --- {ns_name} ---")
        for path, email in emails:
            print(f"    {path}: {email}")
    else:
        print(f"\n  --- {ns_name} --- (no emails found)")

# Summary of unique emails
print("\n  --- Unique emails across all 4 namespaces ---")
all_emails = set()
for ns_name in ["Privacy", "Terms", "Eula", "CookiePage"]:
    section = data.get(ns_name, {})
    for _, email in find_emails(section, ns_name):
        all_emails.add(email)
for e in sorted(all_emails):
    print(f"    {e}")

# Check for trailing dots in email context
print("\n  --- Checking for trailing punctuation issues around emails ---")
for ns_name in ["Privacy", "Terms", "Eula", "CookiePage"]:
    section = data.get(ns_name, {})
    def check_email_trailing(obj, pfx):
        if isinstance(obj, dict):
            for k, v in obj.items():
                check_email_trailing(v, f"{pfx}.{k}")
        elif isinstance(obj, str):
            # Find email with trailing dot that's not end of sentence
            matches = re.findall(r'[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,}\.(?!\s|$)', obj)
            for m in matches:
                print(f"    TRAILING DOT: {pfx} => ...{m}...")
    check_email_trailing(section, ns_name)
