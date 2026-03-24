#!/usr/bin/env python3
"""Check Epic 10 status - what's already done and what's missing."""
import json
import os

BASE = os.path.join(os.path.dirname(os.path.dirname(__file__)), "lumen-lingo-frontend")

with open(os.path.join(BASE, "messages/en.json"), "r") as f:
    en = json.load(f)

# 1. Check for "English version prevails" disclaimer
print("=== 10.1.4 / 10.2.4: English prevails / Governing law disclaimers ===")
for ns in ["Privacy", "Terms", "Eula", "CookiePage"]:
    data = en.get(ns, {})
    found = []
    def search(d, path=""):
        if isinstance(d, str):
            lower = d.lower()
            if any(w in lower for w in ["prevail", "conflict", "english version", "governing law", "england and wales"]):
                found.append((path, d[:300]))
        elif isinstance(d, dict):
            for k, v in d.items():
                search(v, f"{path}.{k}" if path else k)
    search(data)
    print(f"\n{ns}:")
    if found:
        for path, text in found:
            print(f"  {path}: {text}")
    else:
        print("  NOT FOUND")

# 2. Check CookieConsent banner translations
print("\n\n=== 10.3.3: Cookie consent banner ===")
consent = en.get("CookieConsent", {})
print(f"CookieConsent keys: {list(consent.keys()) if isinstance(consent, dict) else 'N/A'}")

# Check if all locales have CookieConsent
for locale in ["en", "es", "fr", "de", "pt", "ja", "pl", "ar", "zh", "uk"]:
    with open(os.path.join(BASE, f"messages/{locale}.json"), "r") as f:
        d = json.load(f)
    has_cc = "CookieConsent" in d
    cc_len = len(str(d.get("CookieConsent", {}))) if has_cc else 0
    print(f"  {locale}: CookieConsent={has_cc} ({cc_len} chars)")

# 3. Check Accessibility page translation status
print("\n\n=== 10.3.4: Accessibility Statement translation ===")
for locale in ["en", "es", "fr", "de", "pt", "ja", "pl", "ar", "zh", "uk"]:
    with open(os.path.join(BASE, f"messages/{locale}.json"), "r") as f:
        d = json.load(f)
    # Search for any key containing 'accessibility' or 'Accessibility'
    acc_keys = [k for k in d.keys() if "ccessib" in k.lower()]
    print(f"  {locale}: Accessibility keys = {acc_keys if acc_keys else 'NONE'}")

# 4. Check PDF download functionality
print("\n\n=== 10.3.5: PDF download per locale ===")
# Check if DownloadPDFButton component exists and how it works
pdf_path = os.path.join(BASE, "src/components/legal")
if os.path.exists(pdf_path):
    for f in os.listdir(pdf_path):
        print(f"  Legal component: {f}")

# 5. Summary of Privacy page content - check if it references useTranslations
print("\n\n=== Page component translation usage ===")
pages = {
    "privacy": "src/app/[locale]/privacy/page.tsx",
    "terms": "src/app/[locale]/terms/page.tsx",
    "cookies": "src/app/[locale]/cookies/page.tsx",
    "eula": "src/app/[locale]/eula/page.tsx",
    "accessibility": "src/app/[locale]/accessibility/page.tsx",
    "data-request": "src/app/[locale]/data-request/page.tsx",
}
for name, path in pages.items():
    full_path = os.path.join(BASE, path)
    if os.path.exists(full_path):
        with open(full_path, "r") as f:
            content = f.read()
        uses_translations = "getTranslations" in content or "useTranslations" in content
        print(f"  {name}: exists=True, uses_translations={uses_translations}")
    else:
        print(f"  {name}: exists=False")
