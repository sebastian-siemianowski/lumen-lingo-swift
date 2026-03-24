# Security Policy

**Lumenshore Limited — Company No. 09607326**
**Document Owner**: Technical Lead
**Last Reviewed**: 23 March 2026
**Review Frequency**: Annual

---

## 1. Purpose

This document describes the technical and organisational security measures Lumenshore Limited implements to protect personal data, as required by GDPR Article 32 ("appropriate technical and organisational measures").

---

## 2. Architecture Overview

LumenLingo has a privacy-by-design architecture that minimises data processing:

| System | Data Stored | Lumenshore Access? |
|---|---|---|
| **iOS App** | Learning progress, settings, streaks | **No** — on-device only (SwiftData) |
| **iCloud** | Synced learning data | **No** — Apple-managed, encrypted in transit and at rest |
| **Website** | Newsletter emails, waitlist entries | **Yes** — server-side (in-memory / future database) |
| **Vercel Analytics** | Anonymous page views | **No** — no personal data collected |
| **Sentry** | Error stack traces, device metadata | **Limited** — error monitoring only |
| **Apple IAP** | Purchase data | **No** — Apple is merchant of record |

---

## 3. Technical Security Measures

### 3.1 iOS Application

- **Encryption at rest**: SwiftData local store is protected by iOS Data Protection (AES-256, tied to device passcode)
- **Encryption in transit**: iCloud sync uses TLS 1.2+ and Apple's end-to-end encryption
- **No server communication**: The app does not communicate with Lumenshore servers — all data stays in the Apple ecosystem
- **No user accounts**: No passwords to breach; authentication is via Apple ID (managed by Apple)
- **No analytics SDK**: No Firebase, Mixpanel, or other tracking SDKs in the iOS app
- **App Transport Security**: ATS enforced (iOS default), preventing insecure HTTP connections

### 3.2 Website (lumen-lingo-frontend)

- **HTTPS everywhere**: Enforced by Vercel with automatic TLS certificates
- **API input validation**: All API endpoints use Zod schema validation (strict types, length limits)
- **Rate limiting**: All public API endpoints rate-limited (5 requests per IP per 60 seconds)
- **No SQL**: No database — no SQL injection vector. Data stored in-memory (development) or future managed database
- **Content Security Policy**: Headers configured via next.config.ts
- **XSS prevention**: React's automatic JSX escaping + no `dangerouslySetInnerHTML` usage
- **CSRF protection**: API routes accept JSON only (no form submissions); SameSite cookie attributes set
- **Dependency management**: npm audit run regularly; 0 vulnerabilities as of last audit
- **No sensitive environment variables exposed**: Server-side only access to secrets

### 3.3 Hosting (Vercel)

- **SOC 2 Type II** certified hosting provider
- **Edge network**: Global CDN with DDoS protection
- **Automatic HTTPS**: TLS certificates auto-provisioned and renewed
- **Build isolation**: Each deployment is immutable and isolated
- **No SSH/server access**: Serverless architecture — no server to compromise

---

## 4. Organisational Security Measures

### 4.1 Access Control

- **Source code**: Private Git repository with branch protection
- **Vercel dashboard**: Access restricted to authorised team members
- **Sentry**: Access restricted, data retention configured
- **Apple Developer account**: 2FA required, managed by account holder
- **Principle of least privilege**: Team members have minimum necessary access

### 4.2 Code Review Process

- All changes go through pull request review before merging
- CI pipeline runs linting, type checking, and tests on every PR
- Security-sensitive changes (API endpoints, auth, data handling) require explicit review

### 4.3 Secret Management

- All secrets stored as environment variables (Vercel environment settings)
- No hardcoded API keys, tokens, or credentials in source code
- `.env` files are gitignored
- Secrets rotated when team members change or on suspicion of compromise

### 4.4 Dependency Update Policy

- `npm audit` run before every release
- Dependabot / GitHub security alerts enabled for automated vulnerability notifications
- Critical vulnerabilities patched within 48 hours
- Non-critical vulnerabilities addressed in the next regular release cycle

---

## 5. API Security Review

### 5.1 Public Endpoints

| Endpoint | Method | Auth | Rate Limit | Validation | Risk |
|---|---|---|---|---|---|
| `/api/newsletter` | POST | None (public) | 5/min/IP | Zod: email + source | Low |
| `/api/newsletter/unsubscribe` | POST | Token-based | 5/min/IP | Zod: token | Low |
| `/api/waitlist` | POST | None (public) | 5/min/IP | Zod: email + language | Low |
| `/api/consent/cookie` | POST | None (public) | None | Zod: consent choices | Low |

### 5.2 Security Controls

- **Injection**: No SQL or command execution; all input validated via Zod schemas
- **SSRF**: No user-supplied URLs are fetched server-side
- **CSRF**: JSON-only API (no form multipart), SameSite cookies
- **Authentication bypass**: No authenticated endpoints currently (all public or token-gated)
- **Information disclosure**: Error responses return generic messages; stack traces suppressed in production

### 5.3 GDPR Data Handling in APIs

- Newsletter and waitlist entries include consent logging (timestamp, IP hash, consent version, consent text)
- Waitlist entries have automated retention purge (365 days)
- Unsubscribe endpoint available for newsletter opt-out
- Data request page allows users to exercise GDPR rights

---

## 6. Vulnerability Scanning

### 6.1 Automated

- **npm audit**: Run on every build and before releases
- **Dependabot**: Automated PRs for vulnerable dependencies
- **Vercel**: Automatic security updates for the hosting platform

### 6.2 Manual

- Periodic security review of new API endpoints and data flows
- Code review with security focus for public-facing changes

### 6.3 Last Audit Results

- **npm audit**: 0 vulnerabilities (23 March 2026)
- **Dependency count**: Monitored, no known critical issues

---

## 7. Penetration Testing

- **Frequency**: Annual or before major releases that introduce new data processing
- **Scope**: Website (lumenlingo.com), API endpoints, iOS app (if server communication is added)
- **Provider**: External security firm (to be engaged when budget allows)
- **Current status**: Not yet conducted (planned for post-launch)

---

## 8. Incident Response

See [BREACH_RESPONSE_PLAN.md](BREACH_RESPONSE_PLAN.md) for the full data breach response procedure.

---

## Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 23 March 2026 | LumenShore | Initial version |
