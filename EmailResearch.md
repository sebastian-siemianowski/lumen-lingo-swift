# Email Address Research

Comprehensive audit of all email addresses across the iOS app (`LumenLingo/`) and Frontend app (`lumen-lingo-frontend/`).

**Last updated:** 27 March 2026 -- after email consolidation round 2 (158 replacements across 41 files).

Round 2 changes:
- `privacy@lumenlingo.com` -> `support@lumenlingo.com` (4 occurrences)
- `community@lumenlingo.com` -> `support@lumenlingo.com` (9 occurrences)
- `rudph2@test.com` -> `testuser@lumenlingo.com` (4 occurrences)
- `hello@lumenshore.com` -> `support@lumenlingo.com` (91 occurrences)
- `sebastian@test.com` -> `testuser@lumenlingo.com` (2 occurrences)

---

## 1. Production Email Addresses

### 1.1 Domain

All production email addresses now use a single domain: **`@lumenlingo.com`**.

Previous domains `@lumenshore.com` and `@lumenlingo.app` have been migrated.

### 1.2 Legal & Policy Contact -- `legal@lumenlingo.com`

**Primary legal email used across all four policy documents. Standardised in Phase 3.**

| Location | File(s) | Count |
|---|---|---|
| Translation JSON files | `messages/{en,pl,de,es,fr,ja,zh,ar,uk}.json` | ~300 occurrences (all 9 locales) |
| Privacy page (mailto: hrefs) | `src/app/[locale]/privacy/page.tsx` | 12 occurrences |
| Terms page | `src/app/[locale]/terms/page.tsx` | 4 occurrences |
| EULA page | `src/app/[locale]/eula/page.tsx` | 2 occurrences |
| Cookies page | `src/app/[locale]/cookies/page.tsx` | 3 occurrences |
| Data Request page | `src/app/[locale]/data-request/page.tsx` | 1 occurrence |

Used in: Privacy Policy, Terms of Service, EULA, Cookie Policy, Data Request page.

### 1.3 General Support -- `support@lumenlingo.com`

| Location | File | Line(s) | Context |
|---|---|---|---|
| Footer / Contact section | `messages/*.json` (all 9 locales) | L225 | `Contact.email` key -- displayed in contact/footer section |
| Contact page (main CTA) | `src/components/contact/contact-section.tsx` | L136-144 | Primary support email displayed + copy button |
| Contact FAQ answers | `src/components/contact/faq-data.ts` | L55, 70, 80 | Hardcoded in 3 FAQ answers |
| Blog RSS feed | `src/app/[locale]/blog/feed.xml/route.ts` | L35-36 | `<managingEditor>` and `<webMaster>` |
| Data Request form mailto | `src/components/data-request/data-request-form.tsx` | L86 | `mailto:support@lumenlingo.com` fallback |
| Security page | `src/app/[locale]/security/page.tsx` | L54 | `mailto:` link for general support |
| Corporate governance | `src/app/[locale]/corporate-governance/page.tsx` | L335-336 | Contact link |
| Terms page | `src/app/[locale]/terms/page.tsx` | L339, 345 | `mailto:` links |
| Global error page | `src/app/error.tsx` | L195 | `mailto:` link on error boundary page |
| iOS -- Account suspended | `LumenLingo/Views/Auth/AccountSuspendedView.swift` | L73 | `mailto:` link for suspended accounts |

### 1.4 Security Disclosure -- `security@lumenlingo.com`

| Location | File | Line(s) | Context |
|---|---|---|---|
| security.txt | `public/.well-known/security.txt` | L1 | `Contact: mailto:security@lumenlingo.com` |
| Security page | `src/app/[locale]/security/page.tsx` | L51 | `mailto:` link |
| Translation files | `messages/*.json` (all 9 locales) | ~L2891 | Security policy text |

### 1.5 Accessibility -- `accessibility@lumenlingo.com`

| Location | File | Line(s) | Context |
|---|---|---|---|
| Accessibility page | `src/app/[locale]/accessibility/page.tsx` | L73 | `mailto:` link |
| VPAT page | `src/app/[locale]/accessibility/vpat/page.tsx` | L83, 430-431 | Contact table + link |
| Translation files | `messages/*.json` (all 9 locales) | ~L2835 | Accessibility statement text |

### 1.6 AI/Privacy -- RETIRED (merged into `support@lumenlingo.com`)

`privacy@lumenlingo.com` was removed in round 2. The AI Transparency page (`ai-transparency/page.tsx`) now uses `support@lumenlingo.com`.

### 1.7 Community Moderation -- RETIRED (merged into `support@lumenlingo.com`)

`community@lumenlingo.com` was removed in round 2. The content moderation text in `messages/*.json` now uses `support@lumenlingo.com`.

### 1.8 Appeals -- `appeals@lumenlingo.com`

| Location | File | Line(s) | Context |
|---|---|---|---|
| Translation files | `messages/*.json` (all 9 locales) | ~L2722 | Appeal submissions for enforcement actions |

### 1.9 Digital Services Act -- `dsa@lumenlingo.com`

| Location | File | Line(s) | Context |
|---|---|---|---|
| Translation files | `messages/*.json` (all 9 locales) | ~L2738 | EU Digital Services Act contact point |

### 1.10 Press -- `press@lumenlingo.com`

| Location | File | Line(s) | Context |
|---|---|---|---|
| Press page | `src/app/[locale]/press/page.tsx` | L125-128 | `mailto:` link + display text |
| Translation files | `messages/*.json` (all 9 locales) | ~L3131 | Press page translations |

### 1.11 Third-Party Government -- `encarregado@anpd.gov.br`

| Location | File | Line | Context |
|---|---|---|---|
| Brazil LGPD section | `messages/*.json` (all 9 locales) | ~L1063 | ANPD (Brazilian Data Protection Authority) contact |

---

## 2. Form Placeholder Emails

| Email | Locale | File | Line | Key |
|---|---|---|---|---|
| `your@email.com` | en, de, pl, uk, ja, zh | `messages/{locale}.json` | L282 | Form input placeholder |
| `tu@email.com` | es | `messages/es.json` | L282 | Spanish placeholder |
| `votre@email.com` | fr | `messages/fr.json` | L282 | French placeholder |
| `بريدك@email.com` | ar | `messages/ar.json` | L282 | Arabic placeholder |

---

## 3. iOS App -- Debug & Test Emails

### 3.1 Debug Auth Personas (`DebugAuthController.swift`)

| Email | Line | Persona | Purpose |
|---|---|---|---|
| `luna@lumenlingo.test` | L137 | Luna (default debug) | Main debug auth user |
| `new@test.ll` | L154 | New Explorer | Fresh user test persona |
| `max@test.ll` | L167 | Max Power User | Power user test persona |
| `email@test.ll` | L197 | Email-only user | Email-only auth test |
| `luna@test.ll` | L212 | Multi-linked user | Multi-auth test persona |

`luna@lumenlingo.test` also appears in `QAPanelView.swift` L1990 as placeholder.

### 3.2 Dev Profile -- `testuser@lumenlingo.com`

(Previously `rudph2@test.com`, migrated in round 2.)

| File | Line(s) | Context |
|---|---|---|
| `ContentModels.swift` | L246 | Preview/mock profile |
| `ProgressService.swift` | L24, 29 | Default profile for development |
| `TierManager.swift` | L888 | Hardcoded tier check |

### 3.3 Unit Test Emails

| Email | File | Line(s) | Test Context |
|---|---|---|---|
| `test@email.com` | `AuthServiceTests.swift` | L14-18 | Rate limiter tests |
| `test@example.com` | `RevenueCatIdentityBridgeTests.swift` | L36 | Identity bridge test |
| `test@example.com` | `MockRevenueCatServiceTests.swift` | L356-362 | Attribute setting tests |
| `pro@example.com` | `RevenueCatIdentityBridgeTests.swift` | L53 | Pro tier test |
| `royal@example.com` | `RevenueCatIdentityBridgeTests.swift` | L84 | Royal tier test |
| `elite@test.com` | `RevenueCatIdentityBridgeTests.swift` | L131 | Elite tier test |
| `lifecycle@test.com` | `RevenueCatIdentityBridgeTests.swift` | L199 | Lifecycle test |
| `john@example.com` | `OfferingsFetchTests.swift` | L2269, 2303 | RevenueCat attribute tests |
| `t@e.com` | `OfferingsFetchTests.swift` | L2432 | Minimal email test |

---

## 4. Other References

### 4.1 Clerk Test Emails (Documentation only -- `Clerk.md`)

| Email | Line | Purpose |
|---|---|---|
| `success@test.lumenlingo.com` | L1829 | Clerk OTP `000000` test |
| `ratelimit@test.lumenlingo.com` | L1830 | Rate limit error test |
| `bounce@test.lumenlingo.com` | L1831 | Undeliverable error test |

### 4.2 Legacy/Documentation

| Email | File | Context |
|---|---|---|
| `legal@lumenshore.com` | `scripts/story14_15_data.json` | Older script data (pre-migration) |
| `your-email@example.com` | `lumen-lingo-react/src/components/data/firebase-integration-guide.jsx` | React Firebase example |

**Migrated in round 2:**
- `hello@lumenshore.com` -> `support@lumenlingo.com` (compliance docs, scripts, Legals2.md, frontend scripts)
- `sebastian@test.com` -> `testuser@lumenlingo.com` (README.md, AGENT.md)

### 4.3 Non-Email `lumenshore` References (NOT changed)

| Reference | File | Context |
|---|---|---|
| `com.lumenshore.lumenlingo` | `src/lib/appStoreConfig.ts` | Apple bundle ID -- must not change |
| `com.lumenshore.lumenlingo` | `public/.well-known/apple-app-site-association` | Universal links config -- must not change |
| `https://lumenshore.com` | `messages/*.json` ~L2648 | `publisherWebsite` -- website URL, not email |

---

## 5. Summary

### 5.1 Production Email Inventory

| Email | Purpose |
|---|---|
| `legal@lumenlingo.com` | Legal/policy contact (~300 occurrences across 9 locales + page components) |
| `support@lumenlingo.com` | General support (contact page, FAQ, error page, iOS suspended view, RSS feed, data request) |
| `security@lumenlingo.com` | Security vulnerability disclosure |
| `accessibility@lumenlingo.com` | Accessibility concerns and VPAT |
| ~~`privacy@lumenlingo.com`~~ | RETIRED -- merged into `support@lumenlingo.com` |
| ~~`community@lumenlingo.com`~~ | RETIRED -- merged into `support@lumenlingo.com` |
| `appeals@lumenlingo.com` | Enforcement action appeals |
| `dsa@lumenlingo.com` | EU Digital Services Act contact |
| `press@lumenlingo.com` | Press inquiries |

### 5.2 Remaining Action Items

| Item | Details |
|---|---|
| Hardcoded emails in source | `faq-data.ts` (3x), `contact-section.tsx` (4x), `data-request-form.tsx` (1x) have hardcoded `support@lumenlingo.com` instead of using translation keys |
| `rudph2@test.com` in production code | `ContentModels.swift`, `ProgressService.swift`, `TierManager.swift` -- dev email in production paths |
| Legacy compliance docs | `compliance/ROPA.md`, `compliance/DSAR-Procedure.md` still reference `hello@lumenshore.com` |
| Legacy script data | `scripts/story14_15_data.json` still references `legal@lumenshore.com` |

### 5.3 Migration Log (27 March 2026)

**Script:** `scripts/migrate_emails.py`

| Change | Count |
|---|---|
| `hello@lumenshore.com` -> `support@lumenlingo.com` | 12 |
| `*@lumenshore.com` -> `*@lumenlingo.com` | 99 |
| `support@lumenlingo.app` -> `support@lumenlingo.com` | 1 |
| **Total** | **112** |
| Files changed | 22 |
| Audits passing | `audit_tags.py` 0 issues, `audit_translations.py` 0 issues |
