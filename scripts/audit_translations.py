#!/usr/bin/env python3
"""
Audit all non-English locale files for English sentences leaking into legal namespaces.
Checks Privacy, Terms, Eula, CookiePage namespaces.
"""
import json, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / "lumen-lingo-frontend" / "messages"
LOCALES = ["pl", "de", "es", "fr", "ja", "zh", "ar", "uk"]
NAMESPACES = ["Privacy", "Terms", "Eula", "CookiePage"]

# Words that are allowed in English in all locales (proper nouns, technical terms, legal terms)
ALLOWED = {
    "lumenshore", "lumenlingo", "lumen", "lingo", "limited", "company", "no.",
    "ico", "gdpr", "uk", "eea", "eu", "dpa", "cra", "wcag", "pecr",
    "sentry", "vercel", "clerk", "posthog", "revenuecat", "apple", "google",
    "icloud", "cloudkit", "stripe", "ios", "ipv4", "ipv6", "ip",
    "windsor", "house", "troon", "way", "humberstone", "lane", "leicester",
    "england", "wales", "gb", "vat", "http", "https", "www", "com",
    "email", "legal@lumenlingo.com", "hello@lumenshore.com",
    "speed", "insights", "web", "analytics", "vitals",
    "cookies", "cookie", "localstorage", "sessionstorage",
    "cnil", "bfdi", "puodo", "aepd", "garante", "cnpd",
    "version", "scc", "idta", "dpia", "tia", "dsar",
    "v1", "v1.0", "v1.1", "v1.2", "v2.0", "v2.1", "v2.2",
    "aa", "a", "b", "c", "d", "e", "f", "p1", "p2", "p3",
    "sdk", "api", "json", "html", "css", "tls", "ssl", "aes",
    "ofac", "ofsi", "ear", "itar", "ecl", "ccl",
    "zendesk", "hubspot", "mailchimp", "sendgrid",
    "facebook", "twitter", "linkedin", "instagram",
    "chrome", "safari", "firefox", "edge",
    "voiceover", "switch", "control", "dynamic", "type",
    "frida", "lldb", "mitmproxy", "charles", "proxy",
    "app", "store", "itunes", "subscription",
    "pro", "premium", "free", "basic",
    "pdf", "csv", "xml",
    "onboarding", "quiz", "flashcard",
    "cra", "osa", "dsa",
    "online", "digital",
    "phase", "epic",
}

# English sentence patterns (3+ consecutive common English words)
ENGLISH_WORDS = set("the a an and or but in on at to for of is are was were will be been being have has had do does did this that these those with from by as it its not no if then than can could should would may might shall must also only just still even more most very so such into about between through after before above below up down out off over under".split())

def looks_english(text):
    """Check if a text value appears to be English (not translated)."""
    if not isinstance(text, str):
        return False
    
    # Skip very short strings, URLs, emails
    if len(text) < 20:
        return False
    if text.startswith("http") or "@" in text:
        return False
    
    # Tokenize
    words = re.findall(r"[a-zA-Z]+", text.lower())
    if len(words) < 5:
        return False
    
    # Filter out allowed words
    remaining = [w for w in words if w.lower() not in ALLOWED and len(w) > 2]
    if len(remaining) < 4:
        return False
    
    # Check ratio of common English words
    english_count = sum(1 for w in remaining if w in ENGLISH_WORDS)
    ratio = english_count / len(remaining) if remaining else 0
    
    # Also check for common English phrases
    has_english_phrase = any(phrase in text.lower() for phrase in [
        "we will", "you may", "you can", "we may", "this is",
        "if you", "we are", "you are", "you have", "we have",
        "the right to", "in the event", "for the purpose",
        "in accordance with", "subject to", "pursuant to",
        "without limitation", "to the extent", "in connection with",
        "shall not", "will not", "does not", "do not",
        "as described", "as set out", "as set forth",
        "your use of", "the service", "the app",
        "we reserve", "you agree", "you acknowledge",
        "including but not limited to", "from time to time",
    ])
    
    if ratio > 0.35 or (ratio > 0.2 and has_english_phrase):
        return True
    return False


def flatten(d, prefix=""):
    """Flatten nested dict to dot-notation keys."""
    items = {}
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            items.update(flatten(v, key))
        elif isinstance(v, str):
            items[key] = v
    return items


def main():
    # Load English reference
    en_path = ROOT / "en.json"
    en_data = json.loads(en_path.read_text("utf-8"))
    
    total_issues = 0
    
    for locale in LOCALES:
        path = ROOT / f"{locale}.json"
        data = json.loads(path.read_text("utf-8"))
        locale_issues = []
        
        for ns in NAMESPACES:
            if ns not in data:
                continue
            
            en_ns = en_data.get(ns, {})
            loc_ns = data[ns]
            
            en_flat = flatten(en_ns)
            loc_flat = flatten(loc_ns)
            
            for key, loc_val in loc_flat.items():
                en_val = en_flat.get(key, "")
                
                # Check 1: Exact match with English (untranslated)
                if loc_val == en_val and len(loc_val) > 30:
                    locale_issues.append(f"  EXACT MATCH (untranslated): {ns}.{key}")
                    locale_issues.append(f"    EN: {en_val[:100]}...")
                    continue
                
                # Check 2: Looks like English text
                if looks_english(loc_val):
                    # Verify it's not just similar to English (e.g., German has English-like words)
                    locale_issues.append(f"  ENGLISH LEAK: {ns}.{key}")
                    locale_issues.append(f"    Value: {loc_val[:120]}...")
            
            # Check 3: Missing keys (in English but not in locale)
            for key in en_flat:
                if key not in loc_flat:
                    locale_issues.append(f"  MISSING KEY: {ns}.{key}")
        
        if locale_issues:
            print(f"\n{'='*60}")
            print(f"LOCALE: {locale} ({len(locale_issues)} issues)")
            print(f"{'='*60}")
            for issue in locale_issues:
                print(issue)
            total_issues += len([i for i in locale_issues if not i.startswith("    ")])
    
    print(f"\n{'='*60}")
    print(f"TOTAL ISSUES: {total_issues}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
