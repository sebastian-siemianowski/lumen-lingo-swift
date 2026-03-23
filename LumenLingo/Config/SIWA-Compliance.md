# Sign in with Apple (SIWA) — Compliance & Implementation Guide

> **Status**: Deferred — authentication not yet implemented. This guide prepares for full compliance when auth is added.

## When SIWA Becomes Required

Per **Apple Review Guideline 4.8**: if the app offers *any* third-party sign-in (Google, Facebook, email/password custom auth), **Sign in with Apple must also be offered** and presented at least as prominently.

**Current state**: LumenLingo uses anonymous local profiles — no authentication. SIWA is not required until a third-party login method is added.

---

## Implementation Requirements

### 1. Button Presentation

- Use Apple's official `SignInWithAppleButton` (never custom buttons)
- Support light and dark appearances
- Minimum size: 140pt × 30pt
- Style: `.signIn` for first-time users, `.continue` for returning users
- Place **above** or **at the same level** as other sign-in options

```swift
import AuthenticationServices

SignInWithAppleButton(.signIn) { request in
    request.requestedScopes = [.fullName, .email]
} onCompletion: { result in
    // handle result
}
.signInWithAppleButtonStyle(colorScheme == .dark ? .white : .black)
.frame(height: 50)
```

### 2. Private Email Relay

Users may choose "Hide My Email" → Apple generates `@privaterelay.appleid.com` address.

**Requirements**:
- App **must** accept relay emails and function fully
- App **must not** require a "real" email address
- Register email sending domain (`@lumenshore.com`) in Apple Developer Portal → Settings → Sign in with Apple → Email Communication
- All outbound emails to relay addresses must originate from the registered domain

### 3. User Name Handling

- Apple provides the user's name **only on first authentication**
- **Must** capture and store name on first auth
- If user declined to share name: do not re-request
- Never require name for app functionality

### 4. Real User Status

```swift
switch credential.realUserStatus {
case .likelyReal:    // trusted device with Apple ID history
case .unknown:       // new device / new Apple ID — consider additional verification
case .unsupported:   // not available — do not block user
@unknown default:    break
}
```

### 5. Credential State Monitoring

Check at every app launch:

```swift
ASAuthorizationAppleIDProvider().getCredentialState(forUserID: storedUserID) { state, _ in
    switch state {
    case .authorized:  break // all good
    case .revoked:     // user revoked — sign out, preserve local data, prompt re-auth
    case .notFound:    // no SIWA credential found
    case .transferred: // user transferred to a different team
    @unknown default:  break
    }
}
```

### 6. Token Revocation (Required for Account Deletion)

When user deletes their account, **must** revoke Apple's refresh token:

```
POST https://appleid.apple.com/auth/revoke
```

**Apple verifies this during review** — missing revocation = rejection.

### 7. Privacy Policy Disclosures

Add to Privacy Policy when SIWA is implemented:

> "If you sign in with Apple, we receive your Apple ID user identifier, and optionally your name and email address (which may be a private relay address). Apple acts as a data processor for authentication. Private relay email addresses are stored and used for communication."

### 8. Terms of Service Clauses

Add to Terms when SIWA is implemented:

> "You may authenticate using Sign in with Apple. By doing so, you agree to Apple's terms and conditions for Sign in with Apple. We are not responsible for Apple's authentication service availability or security. If you revoke Sign in with Apple access, you may lose access to your account unless you set up an alternative authentication method."

---

## Pre-Implementation Checklist

- [ ] Register email sending domain in Apple Developer Portal
- [ ] Add AuthenticationServices capability in Xcode
- [ ] Implement `SignInWithAppleButton` with proper styling
- [ ] Store user name on first auth (never re-request)
- [ ] Handle credential state check on app launch
- [ ] Implement token revocation for account deletion flow
- [ ] Update Privacy Policy with SIWA disclosure
- [ ] Update Terms of Service with SIWA clauses
- [ ] Test with "Hide My Email" relay addresses
