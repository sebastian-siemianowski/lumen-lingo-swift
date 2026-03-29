# Translation QA Process

## Overview

All legal content in the Lumen Lingo frontend (`lumen-lingo-frontend/messages/*.json`) must be translated into all 8 non-English locales before shipping. This document describes the automated and manual QA processes that enforce this requirement.

## Supported Locales

| Code | Language   |
|------|------------|
| en   | English    |
| pl   | Polish     |
| de   | German     |
| es   | Spanish    |
| fr   | French     |
| ja   | Japanese   |
| zh   | Chinese    |
| ar   | Arabic     |
| uk   | Ukrainian  |

## Legal Namespaces

The following top-level keys in each locale file contain legal content:

- `Privacy` -- Privacy Policy
- `Terms` -- Terms of Service
- `Eula` -- End User Licence Agreement
- `CookiePage` -- Cookie Policy

## Automated Audit

### Running the Audit

```bash
# From the repository root:
make check-translations

# Or directly:
python3 scripts/audit_translations.py
```

The script exits with code **0** if no issues are found and code **1** if any issues exist.

### What the Audit Checks

1. **Exact Match (untranslated)** -- A locale value is byte-identical to the English value and longer than 30 characters. This almost certainly means the key was never translated.

2. **English Leak** -- A locale value contains a high ratio of common English words or known English legal phrases, suggesting it was left in English.

3. **Missing Key** -- A key exists in `en.json` but is absent from the locale file entirely.

### Intentionally-Same Exclusions

Some keys are legitimately identical across locales. These are excluded from the audit via the `INTENTIONALLY_SAME` and `GPC_HEADING_KEYS` sets in the script:

- **URLs** -- External privacy policy links (Apple, Vercel, Sentry, Clerk, RevenueCat)
- **Legal entity names** -- "Sentry (Functional Software, Inc.)", "Lumenshore Limited, legal@lumenlingo.com"
- **Regulatory body proper nouns** -- "ANPD -- Autoridade Nacional de Protecao de Dados"
- **Product names** -- "Vercel Analytics & Speed Insights"
- **Official organisation names** -- "Centre for Effective Dispute Resolution (CEDR)"
- **GPC headings** -- "Global Privacy Control" and "Do Not Track" are standardised browser-signal names; only the conjunction is localised

## Translation Process for New Keys

When adding new legal content (any key under Privacy, Terms, Eula, or CookiePage):

1. **Add the English key** to `en.json`.
2. **Translate into all 8 locales** before merging the PR.
3. **Run `make check-translations`** to verify zero issues.
4. **If a key is intentionally identical** (URL, proper noun, product name), add it to the `INTENTIONALLY_SAME` set in `scripts/audit_translations.py`.

## Translation Conventions

- **HTML tags** must be preserved exactly (e.g. `<b>`, `<emailLink>`, `</emailLink>`).
- **Legal statute names** remain in English (e.g. "Data Protection Act 2018").
- **Proper nouns** remain in English (e.g. "Lumenshore Limited", "Sentry").
- **Standard abbreviations** may be kept (e.g. "EULA", "GDPR") or localised where a widely-used local equivalent exists (e.g. French "CLUF" for EULA).
- **Formal legal register** must be used throughout -- no colloquialisms.

## Adding New Intentionally-Same Keys

If a new key genuinely should be identical across locales (e.g. a new third-party service URL), add it to the `INTENTIONALLY_SAME` set at the top of `scripts/audit_translations.py` with a comment explaining why.
