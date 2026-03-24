# RevenueCat Integration — LumenLingo iOS

> **Product Owner:** LumenShore Product  
> **Last Updated:** 24 March 2026  
> **Target Platform:** iOS 26.0+  
> **Authentication:** Clerk (see [Clerk.md](Clerk.md))  
> **Subscription Tiers:** Free · Pro (£9.99/mo) · Elite (£19.99/mo) · Royal (£99.99/mo)  
> **Current State:** StoreKit 2 direct integration via `SubscriptionManager.swift`  
> **Target State:** RevenueCat SDK wrapping StoreKit 2, server-side receipt validation, cross-platform entitlement source of truth  

---

## Table of Contents

- [Epic 1 — RevenueCat SDK Foundation](#epic-1--revenuecat-sdk-foundation)
- [Epic 2 — Paywall & Offering Presentation](#epic-2--paywall--offering-presentation)
- [Epic 3 — Subscription Purchase Flow](#epic-3--subscription-purchase-flow)
- [Epic 4 — Entitlement Enforcement & Feature Gating](#epic-4--entitlement-enforcement--feature-gating)
- [Epic 5 — Subscription Lifecycle Management](#epic-5--subscription-lifecycle-management)
- [Epic 6 — Analytics, Attribution & Diagnostics](#epic-6--analytics-attribution--diagnostics)
- [Epic 7 — UX Polish & Delight](#epic-7--ux-polish--delight)

---

## Glossary

| Term | Definition |
|---|---|
| **Offering** | A RevenueCat container grouping one or more Packages (e.g. "default" offering with Pro/Elite/Royal monthly packages) |
| **Package** | A wrapper around a StoreKit product inside an Offering (e.g. `$rc_monthly` Pro) |
| **Entitlement** | A level of access a customer is entitled to (e.g. "pro_access", "elite_access", "royal_access") |
| **Customer Info** | RevenueCat's server-side record of a user's purchases, entitlements, and subscription status |
| **App User ID** | The canonical identifier RevenueCat uses to track a customer across devices and platforms |
| **Transfer Behaviour** | How RevenueCat handles when a purchase receipt is associated with a different App User ID than the current one |
| **Clerk** | Third-party authentication provider handling Sign in with Apple, Google, phone/email OTP (see Clerk.md) |
| **Clerk User ID** | The stable `user_*` identifier from Clerk, used as the RevenueCat App User ID after authentication |

---

## Architecture Decision Records

### ADR-1: RevenueCat as Subscription Infrastructure

**Context:** LumenLingo currently uses a direct StoreKit 2 integration via `SubscriptionManager.swift`. This works for basic purchase/restore flows but lacks server-side receipt validation, cross-device sync, analytics, and A/B testing for paywalls.

**Decision:** Adopt RevenueCat SDK as the subscription infrastructure layer. The existing `SubscriptionManager` will be refactored to delegate all purchase, restore, and entitlement operations to RevenueCat while maintaining its public API contract so that `TierManager` and all view-layer consumers remain unchanged.

**Consequences:**
- Server-side receipt validation eliminates jailbreak/receipt-tampering vectors
- Cross-device entitlement sync via RevenueCat App User ID
- Paywall A/B testing and remote offering configuration without app updates
- Webhook support for backend integration (future web app sync)
- Dependency on third-party SDK (~2 MB binary size increase)

### ADR-2: Clerk → RevenueCat Identity Bridge

**Context:** Authentication is handled by Clerk (see Clerk.md). RevenueCat needs a stable user identifier to track subscriptions across devices. The two systems must be connected without tight coupling.

**Decision:** Use the Clerk `user_*` identifier as the RevenueCat App User ID. When a user authenticates via Clerk (Apple, Google, or phone/email OTP), the app calls `Purchases.shared.logIn(clerkUserID)` to bind the Clerk identity to RevenueCat. When the user signs out via Clerk, `Purchases.shared.logOut()` is called.

**Consequences:**
- Single stable identifier across both systems
- Anonymous → authenticated purchase transfer is handled automatically by RevenueCat's aliasing
- Clerk session lifecycle drives RevenueCat identity lifecycle
- No passwords are ever involved — Clerk handles all passwordless auth
- RevenueCat never sees PII — only the opaque Clerk user ID

### ADR-3: Entitlement-First Gating

**Context:** The current `TierManager.hasAccess(to:)` gates features by tier rank comparison. RevenueCat uses entitlements as the source of truth.

**Decision:** Map each `MembershipTier` to a RevenueCat entitlement identifier. `TierManager` will check RevenueCat `CustomerInfo.entitlements` as the authoritative source, falling back to local cache only when offline.

**Consequences:**
- Entitlement names: `pro_access`, `elite_access`, `royal_access`
- Higher tiers include lower entitlements (Royal has all three, Elite has pro + elite, Pro has pro only)
- Trial entitlement maps to `royal_access` with `periodType == .trial`
- Offline grace period respects RevenueCat's cached `CustomerInfo`

---

## Epic 1 — RevenueCat SDK Foundation

> **Goal:** Install, configure, and verify the RevenueCat SDK, establish the identity bridge with Clerk, and ensure all subsequent epics have a stable, tested infrastructure layer to build upon.

### Story 1.1 — Add RevenueCat SDK Dependency

**As a** developer  
**I want** the RevenueCat Purchases SDK added to the Xcode project via Swift Package Manager  
**So that** I can call RevenueCat APIs from anywhere in the app

**Story Points:** 2  
**Priority:** P0 — Must Have  
**Dependencies:** None  

#### Acceptance Criteria

- [ ] `RevenueCat/Purchases` Swift Package is added to `project.yml` under `packages:` with the latest stable version (≥ 5.x)
- [ ] Running `xcodegen generate` produces an `.xcodeproj` that resolves the SPM package without errors
- [ ] The app builds successfully on all 5 scheme/environment combinations (Dev, QA, UAT, PreProd, Prod)
- [ ] `import RevenueCatUI` and `import RevenueCat` both compile without errors in a test Swift file
- [ ] The binary size increase from the SDK is documented (expected ~2 MB)
- [ ] No existing unit tests break after adding the dependency

#### Technical Notes

```yaml
# project.yml addition
packages:
  RevenueCat:
    url: https://github.com/RevenueCat/purchases-ios
    from: "5.0.0"

targets:
  LumenLingo:
    dependencies:
      - package: RevenueCat
        product: RevenueCat
      - package: RevenueCat
        product: RevenueCatUI
```

---

### Story 1.2 — Create Per-Environment RevenueCat Configuration

**As a** developer  
**I want** RevenueCat API keys stored per-environment in the existing Config system  
**So that** Dev/QA/UAT use sandbox keys and Prod uses the live key, preventing test transactions from polluting production data

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Story 1.1  

#### Acceptance Criteria

- [ ] A new `revenueCatAPIKey` property is added to the existing `AppConfig` / environment configuration mechanism
- [ ] Each of the 5 environments (Dev, QA, UAT, PreProd, Prod) has its own RevenueCat API key placeholder
- [ ] Dev and QA environments point to the RevenueCat sandbox/test project
- [ ] UAT and PreProd point to a staging RevenueCat project (or sandbox with separate app)
- [ ] Prod points to the production RevenueCat project
- [ ] API keys are **never** hardcoded in source files — they are read from the environment-specific configuration at runtime
- [ ] API keys do not appear in git history (use `.xcconfig` files that are `.gitignore`d, or build-phase injection)
- [ ] A `README` section or inline comment explains how a new developer obtains the keys

#### Technical Notes

- Leverage the existing `Config/` directory structure
- Store keys in `.xcconfig` files per environment (e.g., `Config/Dev.xcconfig` with `REVENUECAT_API_KEY = appl_...`)
- Access at runtime via `Bundle.main.infoDictionary?["REVENUECAT_API_KEY"]`

---

### Story 1.3 — Initialize RevenueCat SDK at App Launch

**As a** developer  
**I want** the RevenueCat SDK configured and initialized during app startup  
**So that** it is ready before any subscription-related UI or logic executes

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Story 1.2  

#### Acceptance Criteria

- [ ] `Purchases.configure(withAPIKey:appUserID:)` is called once during app initialization in `LumenLingoApp.swift`
- [ ] The `appUserID` parameter is `nil` on first launch (anonymous user) — RevenueCat generates a `$RCAnonymousID`
- [ ] Once the user authenticates via Clerk, `Purchases.shared.logIn(clerkUserID)` is called (see Story 1.6)
- [ ] `Purchases.logLevel` is set to `.debug` for Dev/QA builds and `.warn` for Prod
- [ ] `Purchases.shared.delegate` is set to receive real-time `CustomerInfo` updates
- [ ] The SDK initialisation completes before the first screen that shows subscription state is rendered
- [ ] If the API key is missing or invalid, the app logs a non-fatal error and continues in "free tier" mode — it does **not** crash
- [ ] StoreKit 2 is used as the underlying transaction observer (RevenueCat's default for iOS 15+)

#### Technical Notes

```swift
// In LumenLingoApp.init() or .onAppear of root view
Purchases.logLevel = AppConfig.isProduction ? .warn : .debug
Purchases.configure(
    with: .builder(withAPIKey: AppConfig.revenueCatAPIKey)
        .with(usesStoreKit2IfAvailable: true)
        .build()
)
```

---

### Story 1.4 — RevenueCat Delegate & CustomerInfo Stream

**As a** developer  
**I want** a reactive stream of `CustomerInfo` updates flowing into the existing `SubscriptionManager`  
**So that** subscription state changes (renewals, cancellations, billing issues) are reflected in real-time without polling

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 1.3  

#### Acceptance Criteria

- [ ] `SubscriptionManager` conforms to `PurchasesDelegate`
- [ ] The `purchases(_:receivedUpdated:)` delegate method receives `CustomerInfo` and:
  1. Extracts active entitlements from `customerInfo.entitlements.active`
  2. Maps entitlements to the internal `MembershipTier` enum
  3. Updates `TierManager.currentTier` via the existing `syncFromSubscriptionState()` method
  4. Publishes the new state to all SwiftUI observers
- [ ] A Combine/AsyncSequence wrapper exposes the customer info stream for consumers that prefer reactive patterns
- [ ] The delegate handles all edge cases:
  - No active entitlements → Free tier
  - Multiple active entitlements → highest tier wins (Royal > Elite > Pro)
  - Expired entitlements → demote to appropriate tier
  - Billing issue + grace period → maintain current tier with a warning flag
- [ ] All delegate callbacks marshal to `@MainActor` before updating any `@Observable` state
- [ ] Logging captures every `CustomerInfo` update with entitlement summary (debug builds only)
- [ ] A unit test verifies the entitlement → tier mapping for all 5 tier states

---

### Story 1.5 — Remove Direct StoreKit 2 Transaction Listener

**As a** developer  
**I want** the existing direct `StoreKit 2` transaction listener removed from `SubscriptionManager`  
**So that** RevenueCat is the single observer of App Store transactions and no duplicate processing occurs

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Story 1.4  

#### Acceptance Criteria

- [ ] The `Transaction.updates` / `Transaction.currentEntitlements` listener in `SubscriptionManager.swift` is removed
- [ ] All `Product.purchase()` direct calls are removed or replaced with RevenueCat's `Purchases.shared.purchase(package:)` (Epic 3)
- [ ] All `Transaction.currentEntitlements` reads are replaced with `Purchases.shared.customerInfo()` (Epic 4)
- [ ] The `SubscriptionManager.products` array (fetched via `Product.products(for:)`) is replaced with RevenueCat offerings (Epic 2)
- [ ] No `import StoreKit` remains for purchase logic — only RevenueCat imports (StoreKit may remain for `AppStore.showManageSubscriptions()`)
- [ ] A regression test verifies that a sandbox purchase still completes end-to-end after the migration
- [ ] The public API surface of `SubscriptionManager` (methods called by `TierManager` and views) remains unchanged — the refactoring is internal

---

### Story 1.6 — Clerk → RevenueCat Identity Bridge

**As a** user who authenticates via Clerk  
**I want** my Clerk identity automatically linked to RevenueCat  
**So that** my subscription follows me across devices and sessions

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 1.3, Clerk.md authentication stories  

#### Acceptance Criteria

- [ ] When Clerk's `onSignIn` callback fires (user successfully authenticated), the app immediately calls `Purchases.shared.logIn(clerkUserID)` where `clerkUserID` is the Clerk `user_*` identifier
- [ ] The RevenueCat `logIn` response includes a `created` boolean:
  - If `true`: new RevenueCat customer created — no entitlements to merge
  - If `false`: existing customer found — entitlements are automatically restored
- [ ] If the user was previously anonymous (browsing without signing in) and had an active subscription, RevenueCat's `TransferIfNoActiveSubscriptions` policy transfers the anonymous subscription to the Clerk user ID
- [ ] If the Clerk user ID already has a different active subscription (e.g. from another device), the server-side transfer policy resolves the conflict — no confusing dialog is shown to the user
- [ ] After successful `logIn`, `TierManager.syncFromSubscriptionState()` is called to update the UI to reflect the resolved entitlements
- [ ] If the `logIn` call fails (network error), the user is still authenticated via Clerk locally; a background retry is scheduled with exponential backoff (1s, 2s, 4s, max 30s, up to 5 attempts)
- [ ] When Clerk's `onSignOut` callback fires, the app calls `Purchases.shared.logOut()`, which resets to a new anonymous RevenueCat ID
- [ ] Signing out does **not** revoke the subscription — signing back in with the same Clerk account restores all entitlements
- [ ] Custom subscriber attributes are set after `logIn`:
  - `$displayName` → Clerk user's display name
  - `$email` → Clerk user's email (if available)
  - `auth_provider` → "apple" / "google" / "phone" / "email" (from Clerk session metadata)
- [ ] A unit test verifies: anonymous → Clerk sign-in → sign-out → re-sign-in preserves entitlements
- [ ] The bridge is implemented as a standalone `RevenueCatIdentityBridge` class (or extension on `SubscriptionManager`) to keep Clerk and RevenueCat concerns decoupled

#### Technical Notes

```swift
// Called from Clerk's onSignIn handler
func handleClerkSignIn(clerkUser: ClerkUser) async {
    let result = try await Purchases.shared.logIn(clerkUser.id)
    // result.customerInfo has resolved entitlements
    // result.created tells us if this is a new RC customer
    await TierManager.shared.syncFromSubscriptionState()
    
    // Set subscriber attributes
    Purchases.shared.attribution.setDisplayName(clerkUser.fullName)
    if let email = clerkUser.primaryEmail {
        Purchases.shared.attribution.setEmail(email)
    }
    Purchases.shared.attribution.setAttributes([
        "auth_provider": clerkUser.authProvider.rawValue
    ])
}
```

---

### Story 1.7 — Verify Sandbox Purchase Round-Trip

**As a** developer  
**I want** an end-to-end sandbox purchase verified through the full RevenueCat pipeline  
**So that** I have confidence the SDK, configuration, entitlements, and tier mapping all work before building higher-level features

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Story 1.6  

#### Acceptance Criteria

- [ ] Using a Sandbox Apple ID, a Pro monthly subscription is purchased via `Purchases.shared.purchase(package:)`
- [ ] The RevenueCat dashboard shows the transaction within 60 seconds
- [ ] The transaction appears with the correct product ID (`com.lumenshore.lumenlingo.pro.monthly`)
- [ ] The `CustomerInfo` delegate callback fires and `entitlements["pro_access"]` is active
- [ ] `TierManager.currentTier` updates to `.pro`
- [ ] Sandbox accelerated renewals trigger delegate callbacks at the appropriate intervals (every 5 minutes for monthly)
- [ ] Cancelling the sandbox subscription via Settings → Sandbox → Manage results in an eventual expiry callback
- [ ] After expiry, `TierManager.currentTier` reverts to `.free`
- [ ] The same round-trip is verified for Elite and Royal tiers
- [ ] All 3 entitlements (`pro_access`, `elite_access`, `royal_access`) appear correctly in the RevenueCat dashboard
- [ ] A documented test script (Markdown checklist) captures the exact steps and expected results for QA to repeat

---

## Epic 2 — Paywall & Offering Presentation

> **Goal:** Replace the hardcoded tier card UI with a dynamic, RevenueCat-driven paywall that fetches offerings remotely, enabling A/B testing and pricing changes without app updates. Every pixel should make users feel the subscription is worth the investment before they even tap "Subscribe."

### Story 2.1 — Fetch RevenueCat Offerings on Launch

**As a** developer  
**I want** the available subscription offerings fetched from RevenueCat when the app launches  
**So that** the paywall always shows the latest products, prices, and configurations without requiring an app update

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Epic 1 complete  

#### Acceptance Criteria

- [ ] `Purchases.shared.getOfferings()` is called during app initialisation (after SDK configuration)
- [ ] The "current" offering is stored in `SubscriptionManager.currentOffering` as the default paywall source
- [ ] Each package in the offering is mapped to the internal product structure:
  - `$rc_monthly` → Pro, Elite, or Royal (based on product ID)
  - The correct `MembershipTier` is derived from the product identifier
- [ ] Offerings are cached in memory — subsequent paywall opens use the cached offering until the app is backgrounded for > 5 minutes
- [ ] If `getOfferings()` fails (network error), the app falls back to a locally-cached offering from the previous successful fetch
- [ ] If no cached offering exists (true first launch + offline), the paywall shows a graceful "unavailable" state (Story 2.7)
- [ ] A pull-to-refresh on the paywall screen forces a fresh `getOfferings()` call
- [ ] Offerings fetch latency is logged (Debug builds) — target <500ms for cached responses, <2s for network fetches
- [ ] The offering includes metadata (if configured in the RevenueCat dashboard) for paywall copy — headline, subtitle, badge text
- [ ] Multiple offerings support: if a named offering is configured (e.g., "experiment_spring_2026"), it can be fetched by ID

#### Technical Notes

```swift
// In SubscriptionManager.init() or a startup task
func fetchOfferings() async {
    do {
        let offerings = try await Purchases.shared.offerings()
        self.currentOffering = offerings.current
        self.allOfferings = offerings.all
    } catch {
        Logger.subscription.error("Failed to fetch offerings: \(error)")
        // Fall back to locally cached offering
    }
}
```

---

### Story 2.2 — Dynamic Pricing Display from RevenueCat

**As a** user viewing the paywall  
**I want** to see prices in my local currency, formatted correctly for my region  
**So that** I understand exactly what I'm paying without mental currency conversion

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 2.1  

#### Acceptance Criteria

- [ ] Each tier card on the paywall displays the price from RevenueCat's `Package.storeProduct.localizedPriceString` — not a hardcoded string
- [ ] Prices are formatted by the App Store / StoreKit for the user's locale (e.g., "£9.99" in UK, "$12.99" in US, "¥1,480" in Japan)
- [ ] The price per period is shown prominently: "£9.99 / month"
- [ ] A secondary "daily cost" line is computed and shown: "That's just £0.33/day" (calculated from the package price ÷ 30)
- [ ] If an introductory offer is available, the original price is shown with strikethrough and the offer price is highlighted: "~~£9.99~~ £4.99 / first month"
- [ ] The currency symbol, decimal separator, and grouping separator all follow the user's locale (e.g., "€ 9,99" in Germany vs "$9.99" in US)
- [ ] If the product price cannot be loaded (nil fallback), the tier card shows "Price unavailable" with a retry button — never an empty space
- [ ] Price changes published in App Store Connect are reflected on the paywall without an app update (via RevenueCat's offering refresh)
- [ ] Each tier card shows the tier name, price, billing period, daily cost, and a brief tagline:
  - Pro: "Unlock your potential"
  - Elite: "Master any language"
  - Royal: "The complete experience"
- [ ] VoiceOver reads: "[Tier Name]. [Price] per month. [Tagline]."

#### UX Details — Make Users Fall in Love

- Prices animate in with a "counting up" number animation (0 → final price over 600ms) — like a slot machine clicking into place, each digit resolving left to right
- The daily cost calculation appears 300ms after the main price, sliding in from below with a subtle spring — feels like a delightful bonus reveal
- The strikethrough on introductory offers uses an animated line-through (left-to-right draw over 400ms), drawing the eye to the savings
- Tier taglines use a typewriter character reveal (20ms per character) when the card first enters the viewport
- Each tier card has a very subtle, slow-moving gradient shift in its glass background that matches the tier's colour identity — Pro breathes blue, Elite pulses purple, Royal glimmers gold. The movement is glacial — barely perceptible consciously, but it makes the cards feel alive

---

### Story 2.3 — Paywall A/B Test Support via RevenueCat Offerings

**As a** product owner  
**I want** to run paywall experiments by swapping the "current" offering in RevenueCat  
**So that** I can test different pricing, packaging, and copy combinations to optimise conversion

**Story Points:** 3  
**Priority:** P1 — Should Have  
**Dependencies:** Story 2.2  

#### Acceptance Criteria

- [ ] The paywall always renders from `offerings.current` — no hardcoded offering ID
- [ ] Changing the "current" offering in the RevenueCat dashboard (e.g., from "default" to "experiment_high_price") updates the paywall for all users on next fetch
- [ ] The paywall correctly handles offerings with different numbers of packages (e.g., an experiment with only Pro + Royal, dropping Elite)
- [ ] If an offering has 2 packages, the layout adapts to 2-card; if 4, it shows 4 — no hardcoded card count
- [ ] Offering metadata fields (JSON) in the RevenueCat dashboard can override:
  - Paywall headline text
  - Paywall subtitle text
  - Badge text on a specific package (e.g., "Most Popular", "Best Value")
  - Feature list ordering
- [ ] A/B test assignment is logged: the offering identifier and experiment name are captured in analytics events
- [ ] The paywall renders identically for a given offering ID — deterministic, no flicker between renders
- [ ] If the A/B offering fails to load, fallback to the "default" offering, not to hardcoded values
- [ ] RevenueCat Experiments (if using RevenueCat's native A/B testing) are supported out of the box — no custom cohort logic needed

---

### Story 2.4 — Introductory Offer & Free Trial Display

**As a** user who hasn't subscribed before  
**I want** to see a compelling free trial or introductory offer clearly displayed  
**So that** I feel confident trying the premium experience without risk

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 2.2  

#### Acceptance Criteria

- [ ] If a product has an introductory offer configured in App Store Connect, it's detected via `StoreProduct.introductoryDiscount`
- [ ] The offer type is displayed correctly:
  - **Free Trial:** "Start your 7-day free trial" (or 14-day, based on configuration)
  - **Pay Up Front:** "£4.99 for the first 3 months"
  - **Pay As You Go:** "£2.99/mo for 3 months, then £9.99/mo"
- [ ] Trial eligibility is checked via `Purchases.shared.checkTrialOrIntroDiscountEligibility(productIdentifiers:)` — only show offers to eligible users
- [ ] If the user has already used a trial/intro offer for this subscription group, the regular price is shown instead
- [ ] The trial CTA button text adapts: "Start Free Trial" (for trials) vs "Subscribe" (for no offer) vs "Start at £4.99" (for paid intro)
- [ ] A "No commitment. Cancel anytime." reassurance line appears below the trial CTA
- [ ] After trial, the renewal price is clearly stated: "Free for 7 days, then £9.99/month"
- [ ] The trial badge uses the tier's accent color with an animated shimmer edge to draw attention
- [ ] Trial days remaining are shown on the paywall if the user is currently in a trial: "5 days left in your Royal trial"
- [ ] VoiceOver announces: "7-day free trial. Then [price] per month. Start free trial button."

#### UX Details — Make Users Fall in Love

- The free trial badge on the tier card has a pulsing glow effect — like a beacon inviting the user in. The glow uses a radial gradient that breathes (opacity 0.3 → 0.8 → 0.3 over 3 seconds)
- The "Start Free Trial" button is distinctly different from the regular subscribe button: it's larger, uses the tier's accent gradient, and has a subtle floating animation (y-offset oscillates ±2pt over 2 seconds)
- Tapping "Start Free Trial" triggers an anticipation micro-animation: the button pulses once with a `.soft` haptic before the App Store purchase sheet appears
- The "No commitment" text appears with a slight delay (200ms), floating up into position — it arrives just as the user's finger is hovering over the CTA, reinforcing confidence at the decision moment
- If the user is already in a trial, the remaining days are shown with a countdown ring (like a progress timer) that gently fills as days pass — it creates urgency without pressure
- The countdown ring uses the tier's color and glows slightly at <3 days remaining to subtly increase urgency

---

### Story 2.5 — Paywall Presentation Contexts

**As a** user encountering a locked feature  
**I want** to see the paywall in context — understanding which tier I need for the specific feature I tried to use  
**So that** I can make an informed upgrade decision at the moment of highest motivation

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 2.2  

#### Acceptance Criteria

- [ ] The paywall can be presented from multiple contexts, each with a contextual header:
  1. **Membership Tab** — "Choose Your Path" (default exploration)
  2. **Feature Gate** — "Unlock [Feature Name]" with a preview of the locked feature dimmed behind
  3. **Upgrade Nudge** — "Level Up Your Learning" (shown after free-tier milestones)
  4. **Trial Expiry** — "Your Trial Ends in [N] Days" (proactive pre-expiry nudge)
  5. **Settings** — "Manage Subscription" (from settings screen)
- [ ] The `feature_gate` context highlights the tier that unlocks the requested feature:
  - The unlocking tier card has a prominent "Unlocks [Feature]" badge
  - Other tier cards are slightly more translucent (0.7 opacity) to guide the eye
  - The locked feature preview peeks above the paywall sheet (30% visible) as motivation
- [ ] The `trial_expiry` context shows urgency elements: countdown timer, "Don't lose access to [features list]"
- [ ] The `upgrade_nudge` context appears after the user completes their 5th lesson or masters 50 words — milestone-triggered
- [ ] Each context tracks its `presentation_context` in analytics (Story 6.4) for conversion funnel analysis
- [ ] The paywall is presented as a `.sheet` on iPhone and a `.popover` on iPad (adaptive presentation)
- [ ] The paywall dismisses with a swipe-down gesture and a "Not now" button — the user is never trapped
- [ ] Deep-linking support: a URL like `lumenlingo://paywall?context=feature_gate&feature=quantumFlow` opens the paywall with correct context

#### UX Details — Make Users Fall in Love

- **Feature Gate Context:** The locked feature (e.g., Quantum Flow particles) does a slow, tantalising preview animation behind the frosted glass paywall — the user can see *exactly* what they're missing, rendered live, not a screenshot. It's like looking through a frosty window at something beautiful
- **Trial Expiry Context:** The countdown has a gentle heartbeat animation — a soft scale pulse (1.0 → 1.02 → 1.0) every 2 seconds. Not alarming, just alive. The feature list uses a "fading out" effect — each feature slightly more transparent than the last, visually representing what's about to disappear
- **Upgrade Nudge Context:** A celebration mini-moment happens first — "Amazing! You've mastered 50 words! 🎉" with confetti, *then* the paywall slides in 1.5 seconds later with "Imagine what you could do with [Premium Feature]" — it leads with praise, not a sales pitch
- **Membership Tab:** The three tier cards enter with a staggered parallax scroll — as the user scrolls, deeper cards have less parallax movement, creating a 3D depth illusion. It feels like exploring a showcase, not reading a price list
- The dismiss interaction is generous: swiping down starts immediately (no "sticky" threshold), the paywall follows the finger with rubber-band physics, and releasing below 30% dismisses with a spring. The user always feels in control

---

### Story 2.6 — Paywall Social Proof & Trust Signals

**As a** user considering a subscription  
**I want** to see evidence that other people love this app and that my purchase is safe  
**So that** I feel confident the subscription is worth the investment

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 2.2  

#### Acceptance Criteria

- [ ] The paywall includes a "social proof" section below the tier cards:
  1. **Star rating:** "★★★★★ 4.8 on the App Store" (from App Store API or updated periodically via remote config)
  2. **Learner count:** "Trusted by 50,000+ learners worldwide" (updated from RevenueCat offering metadata or remote config)
  3. **Testimonial carousel:** 3–5 short user quotes rotating every 5 seconds with crossfade
  4. **Trust badges:** "Cancel anytime" · "Secure payment via Apple" · "No hidden fees"
- [ ] The star rating is genuine and matches the actual App Store rating (updated at least monthly)
- [ ] The learner count is dynamically configured — not hardcoded
- [ ] Testimonial quotes are real user reviews (with permission) or clearly marked as representative experiences
- [ ] The "Cancel anytime" badge has an info icon that, on tap, shows a tooltip: "Cancel anytime from Settings or your Apple ID. No cancellation fees, ever."
- [ ] The "Secure payment via Apple" badge shows the Apple Pay shield icon
- [ ] Social proof section fades in as the user scrolls down past the tier cards — not loaded all at once
- [ ] On iPad, the social proof section sits beside the tier cards in a side panel
- [ ] Testimonials are localised to the user's language when available
- [ ] VoiceOver reads each testimonial and trust badge clearly

#### UX Details — Make Users Fall in Love

- The star rating uses actual star icons that "fill in" with gold in a left-to-right staggered animation (each star 80ms after the previous) as they appear — it feels like a standing ovation building
- The testimonial carousel quotes appear with a typewriter effect (each character appearing sequentially over 40ms) and include the reviewer's first name and country flag emoji, like "— Sofia 🇪🇸"
- Trust badges have subtle animated icons: the shield gently rotates ±5° with a pendulum ease, the "cancel anytime" calendar icon's page flips occasionally, the "no fees" coin sparkles once every 4 seconds
- The entire social proof section has a slightly warmer, more grounded tone than the cosmic tier cards above — a soft warm gradient undertone that says "real people, real results" grounding the cosmic fantasy
- A tiny heartbeat counter "♡ 847 people subscribed this week" pulses gently at the bottom — social urgency done tastefully

---

### Story 2.7 — Paywall Skeleton & Error States

**As a** user opening the paywall while offerings are loading or unavailable  
**I want** to see a polished loading state or a helpful error message  
**So that** I never encounter a blank screen or broken UI

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Story 2.1  

#### Acceptance Criteria

- [ ] While `getOfferings()` is in progress, the paywall shows a skeleton loading state:
  - Three tier card placeholders with shimmer animation (light sweep left-to-right, 1.5s cycle)
  - The headline text shows a shimmer placeholder
  - The layout matches the loaded state exactly so there's no content jump
- [ ] The skeleton renders within 16ms (one frame) — no blank flash before the skeleton appears
- [ ] If offerings load successfully, the skeleton crossfades to real content over 300ms
- [ ] If offerings fail to load (network error):
  - A friendly error state appears: cosmic-themed illustration + "Couldn't load plans. Check your connection and try again."
  - A "Try Again" button triggers a retry
  - If cached offerings exist from a previous session, they are used instead (no error state)
- [ ] If the user is completely offline (airplane mode) and no cache exists:
  - The message changes to: "You're offline. Connect to the internet to view subscription plans."
  - The illustration shows the cosmic theme "dimmed" — stars but no nebula, representing reduced capability
- [ ] The paywall never shows a spinner/activity indicator — always the skeleton shimmer (more polish)
- [ ] The error state "Try Again" button has a loading state of its own (icon rotates) and auto-retries once after 3 seconds if still on screen
- [ ] VoiceOver announces "Loading subscription plans" during skeleton, and the error message when it appears

---

## Epic 3 — Subscription Purchase Flow

> **Goal:** Implement the full purchase, restore, upgrade/downgrade, and promotional offer flows through RevenueCat, ensuring every transaction is bulletproof, every error is handled gracefully, and the purchase moment itself feels premium.

### Story 3.1 — Purchase Subscription via RevenueCat

**As a** user who has decided on a tier  
**I want** to tap "Subscribe" and complete the purchase seamlessly via the App Store  
**So that** I gain instant access to premium features

**Story Points:** 8  
**Priority:** P0 — Must Have  
**Dependencies:** Epic 2 complete  

#### Acceptance Criteria

- [ ] Tapping "Subscribe" (or "Start Free Trial") on a tier card calls `Purchases.shared.purchase(package:)` with the selected RevenueCat package
- [ ] The App Store payment sheet (StoreKit 2 overlay or system sheet) appears natively — no custom payment UI
- [ ] During the purchase flow:
  1. A subtle dimming overlay appears behind the App Store sheet (the paywall fades to 60% opacity)
  2. No loading spinner is shown — the App Store sheet is the UI
  3. Tapping outside the App Store sheet does not dismiss it (system behaviour)
- [ ] On successful purchase:
  1. The App Store sheet dismisses
  2. `CustomerInfo` is returned with the new active entitlement
  3. `TierManager` updates to the purchased tier within 500ms
  4. The upgrade celebration fires (Epic 7, Story 7.1) — particles, haptics, sound
  5. The paywall auto-dismisses after the celebration (if presented as a sheet)
- [ ] On cancelled purchase (user taps Cancel on the App Store sheet):
  1. The paywall returns to its normal state — no error message
  2. The tier card the user was considering remains highlighted for 2 seconds (gentle reminder of where they were)
  3. A subtle `.selection` haptic pulses — acknowledging the cancellation without judgement
- [ ] On purchase failure (network error, App Store error, payment declined):
  1. An error banner slides in from the top: "Something went wrong. Please try again."
  2. The banner auto-dismisses after 5 seconds or on tap
  3. The error category is logged (but not the specific App Store error code, for user privacy)
  4. The user can immediately retry — no cooldown
- [ ] On deferred purchase (Ask to Buy, pending approval):
  1. A friendly message appears: "Purchase pending. Ask the account holder to approve in Screen Time."
  2. The paywall remains dismissible
  3. When the purchase is eventually approved, the delegate callback (Story 1.4) fires and access is granted automatically — even if the app was closed
- [ ] `Purchases.shared.purchase(package:)` is used — **never** direct `Product.purchase()`
- [ ] The purchase is attributed to the current Clerk user (via Story 1.6's identity bridge). If the user is anonymous, the purchase is on the anonymous ID
- [ ] A sandbox test verifies: purchase → entitlement → tier update → celebration → paywall dismissal

#### UX Details — Make Users Fall in Love

- The moment between tapping "Subscribe" and the App Store sheet appearing has a micro-transition: the button gently compresses (scale 0.96) with a `.medium` haptic, then a brief shimmer sweeps across the button left-to-right before the sheet slides up. This fills the 200–500ms system delay so the user doesn't wonder "did I tap it?"
- On successful purchase, there's a 200ms "golden flash" that sweeps across the screen before the celebration begins — like a shockwave of premium energy radiating from where the purchase completed
- The cancelled state is deliberately understated — no "Are you sure?" No guilt. No countdown timer pressure. The user came back to the paywall they were already looking at, exactly where they left off. This respect builds trust that converts later
- If it's the user's first ever subscription to the app, the celebration (Story 7.1) is extra — an extended 5-second choreographed welcome to premium. Repeat subscribers get a briefer, still-delightful 2-second acknowledgement

---

### Story 3.2 — Restore Purchases via RevenueCat

**As a** user who previously subscribed on another device or after reinstalling  
**I want** to tap "Restore Purchases" and get my entitlements back  
**So that** I don't have to pay again for something I already own

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 3.1  

#### Acceptance Criteria

- [ ] A "Restore Purchases" button is visible on the paywall (required by App Store Review Guidelines 3.1.1)
- [ ] Tapping "Restore Purchases" calls `Purchases.shared.restorePurchases()`
- [ ] During restore:
  1. The button text changes to "Restoring…" with a subtle animation (ellipsis cycling)
  2. Other paywall interactions are disabled but the dismiss gesture still works
- [ ] On successful restore with active entitlements:
  1. A success banner appears: "Welcome back! Your [Tier Name] subscription has been restored."
  2. The tier card updates to reflect the restored tier
  3. `TierManager` syncs within 500ms
  4. A warm haptic (`.success`) fires
  5. The paywall auto-dismisses after 2 seconds
- [ ] On successful restore with no active entitlements (nothing to restore):
  1. A friendly message: "No active subscriptions found for this Apple ID. If you believe this is an error, contact us."
  2. A "Contact Support" button opens the support email
  3. The paywall remains open so the user can subscribe
- [ ] On restore failure (network error):
  1. Error banner: "Couldn't restore. Check your connection and try again."
  2. The "Restore" button re-enables for retry
- [ ] The "Restore Purchases" button is **always** visible — never hidden behind a menu or secondary screen (App Store rejection risk)
- [ ] The restore flow works for users who signed in with a different Clerk account than the one that originally purchased — the restore syncs to the current Clerk user
- [ ] Restore logs the result to analytics: `restore_success`, `restore_no_purchases`, `restore_error`

#### UX Details — Make Users Fall in Love

- The "Restore Purchases" is positioned below the subscribe buttons as a text link ("Already a member? Restore Purchases") — it's always there but doesn't compete with the primary CTA
- The restore animation uses a "reconnection" metaphor: tiny dots of light travel from the bottom of the screen upward into the tier card, like data packets re-establishing a link. When enough dots arrive, the card "lights up" with the restored tier
- The "Welcome back!" message uses the user's name (from Clerk) if available: "Welcome back, Sofia! Your Elite subscription has been restored."
- If there's nothing to restore, the tone is empathetic, not dismissive: "We checked, and there's no active subscription tied to this Apple ID. If you previously subscribed with a different account, try signing in with that one."

---

### Story 3.3 — Upgrade & Downgrade Between Tiers

**As a** subscribed user  
**I want** to upgrade to a higher tier or downgrade to a lower one  
**So that** my subscription matches my current needs and budget

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 3.1  

#### Acceptance Criteria

- [ ] The paywall (accessible from Settings → Subscription or the Membership tab) shows the user's current tier visually distinguished (a "Current Plan" badge, brighter intensity) and presents other tiers as options
- [ ] **Upgrade flow (e.g. Pro → Elite):**
  - Tapping a higher tier shows: "Upgrade to Elite — Apple will immediately upgrade your plan and prorate the remaining balance"
  - The purchase call uses `Purchases.shared.purchase(package:)` — RevenueCat handles the StoreKit 2 upgrade mechanics (immediate upgrade)
  - On success, the new tier activates immediately
  - The upgrade celebration plays (Story 7.1) with visual emphasis on the NEW features gained
  - `TierManager.previousTier` is set for analytics
- [ ] **Downgrade flow (e.g. Royal → Pro):**
  - Tapping a lower tier shows: "Switch to Pro — Your Royal access continues until [renewal date], then you'll switch to Pro"
  - The purchase call processes; the downgrade takes effect at the end of the current billing cycle (App Store behaviour)
  - The UI shows "Royal until [date], then Pro" in the subscription status
  - `TierManager` only updates when the actual tier change takes effect (delegate callback at renewal)
- [ ] The paywall correctly disables the "current plan" tier card (no re-purchase of the same product)
- [ ] Upgrade and downgrade analytics are tracked with `previous_tier` and `new_tier` attributes
- [ ] The feature comparison between current and target tier is shown dynamically:
  - Upgrade: "You'll gain: [list of new features]" with green checkmarks
  - Downgrade: "You'll lose: [list of features]" with amber warnings (not red — not punitive)
- [ ] Cross-grade within the same tier (e.g., monthly → annual, if added later) is supported
- [ ] VoiceOver announces the tier change context clearly

#### UX Details — Make Users Fall in Love

- The upgrade comparison uses a split-screen animation: the user's current tier slides left, the new tier slides in from the right, and a glowing bridge of light connects them — the visual says "you're evolving, not abandoning"
- New features gained in an upgrade have a "sparkle materialise" entrance (particle convergence → solid icon)
- For downgrades, the features being lost don't just get red X marks. Instead, they gracefully dim with a soft amber glow and a message: "These features will rest when your current period ends" — it's about pausing, not losing
- The "Current Plan" badge on the user's active tier uses a gentle pulse animation — a heartbeat of light that says "this is where you are now"
- The prorated savings message for upgrades uses a friendly format: "Since you've already paid for 15 days of Pro, you'll only pay the difference for Elite"

---

### Story 3.4 — Handle Promotional Offers & Promo Codes

**As a** user with a promotional offer or promo code  
**I want** to apply it and receive the discounted or free subscription  
**So that** I can take advantage of the promotion

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 3.1  

#### Acceptance Criteria

- [ ] **App Store Promotional Offers (subscription offers for existing/lapsed subscribers):**
  - RevenueCat's `Purchases.shared.getPromotionalOffer(forProductDiscount:product:)` fetches the signed offer
  - The offer is passed to `purchase(package:promotionalOffer:)` during checkout
  - Promotional offers are only shown to eligible users (RevenueCat checks eligibility server-side)
  - The offer details (discount amount, duration) are displayed clearly on the paywall
- [ ] **App Store Offer Codes (redeemable codes from marketing campaigns):**
  - A "Redeem Code" button on the paywall calls `Purchases.shared.presentCodeRedemptionSheet()` (or `SKPaymentQueue.presentCodeRedemptionSheet()`)
  - After redemption, the `CustomerInfo` delegate fires with the new entitlement
  - The celebration and tier update flows work identically to a regular purchase
- [ ] **RevenueCat Promotional Entitlements (manual grants):**
  - If support grants a promotional entitlement via the RevenueCat dashboard, the next `CustomerInfo` refresh picks it up automatically
  - The UI reflects the granted entitlement within one app foreground cycle
- [ ] Promotional offers show the original price with a strikethrough and the offer price highlighted
- [ ] Promo code redemption errors (invalid, expired, already used) show clear, friendly messages
- [ ] All promotional transactions are tracked in analytics with `promo_type` attribute (offer/code/manual_grant)
- [ ] Promotional offers respect the same celebration and onboarding flows as regular purchases

---

### Story 3.5 — Pre-Purchase Authentication Gate

**As a** user who is browsing anonymously and taps "Subscribe"  
**I want** to be prompted to sign in before the purchase completes  
**So that** my subscription is bound to my identity and recoverable across devices

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Story 1.6, Clerk.md authentication stories  

#### Acceptance Criteria

- [ ] When an anonymous user (no Clerk session) taps "Subscribe" or "Start Free Trial":
  1. The purchase is **not** initiated immediately
  2. A sheet appears: "Sign in to secure your subscription" with Clerk's authentication options (Apple, Google, phone, email — see Clerk.md)
  3. The sheet explains: "Signing in lets you restore your subscription on any device"
  4. A "Continue without account" option allows the purchase to proceed anonymously (with a warning: "You may not be able to restore this subscription on another device")
- [ ] After successful Clerk authentication from this gate:
  1. `Purchases.shared.logIn(clerkUserID)` is called (Story 1.6)
  2. The purchase flow resumes automatically — the user does not have to tap "Subscribe" again
  3. The transition is seamless: auth sheet dismisses → App Store purchase sheet appears
- [ ] If the user chooses "Continue without account":
  1. The purchase proceeds on the anonymous RevenueCat ID
  2. A persistent but non-blocking reminder appears in Settings: "Sign in to protect your subscription"
  3. The user can sign in later, and Story 1.6's identity bridge will transfer the subscription
- [ ] The auth gate does **not** appear if the user is already authenticated via Clerk
- [ ] The auth gate does **not** appear for "Restore Purchases" (restoring doesn't require Clerk auth — it uses the Apple ID receipt)
- [ ] VoiceOver announces the gate context: "Sign in to protect your subscription. You can also continue without an account."

#### UX Details — Make Users Fall in Love

- The auth gate doesn't feel like a roadblock — it's a brief scenic detour. The sheet slides up with the cosmic glass effect, the headline is warm ("Let's save your subscription for safekeeping"), and the auth buttons are the same familiar Clerk buttons from the main auth screen
- The "Continue without account" option is present but styled as secondary (text link, not a button) — it's there for user autonomy, not encouraged
- After authenticating, there's a seamless 300ms crossfade from the auth sheet to the App Store purchase sheet — no "returning to paywall" intermediate state. It feels like one continuous flow
- A tiny lock icon with a checkmark ("🔒✓") appears briefly next to the tier card after auth completes, then fades — confirming "your purchase is protected" without a dialog

---

## Epic 4 — Entitlement Enforcement & Feature Gating

> **Goal:** Build a bulletproof entitlement layer that maps RevenueCat entitlements to the internal tier system, respects offline access, and makes the transition between locked and unlocked states feel magical rather than punitive.

### Story 4.1 — Map RevenueCat Entitlements to MembershipTier

**As a** developer  
**I want** a reliable mapping from RevenueCat entitlements to the internal `MembershipTier` enum  
**So that** `TierManager.hasAccess(to:)` works correctly for all subscription states

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Epic 1 complete  

#### Acceptance Criteria

- [ ] The mapping is defined in a single, testable function: `func mapEntitlementsToTier(_ customerInfo: CustomerInfo) -> MembershipTier`
- [ ] Mapping rules:
  | Active Entitlements | Resulting Tier |
  |---|---|
  | None | `.free` |
  | `pro_access` only | `.pro` |
  | `pro_access` + `elite_access` | `.elite` |
  | `pro_access` + `elite_access` + `royal_access` | `.royal` |
  | `royal_access` with `periodType == .trial` | `.trial` |
- [ ] The highest active entitlement wins — if somehow only `royal_access` is active (without pro/elite), the tier is `.royal` (defensive)
- [ ] The mapping handles all RevenueCat subscription states:
  - `active` → Tier is granted
  - `inGracePeriod` → Tier is granted (billing issue, but access continues)
  - `inBillingRetryPeriod` → Tier is granted with a warning flag
  - `expired` → Tier reverts to the next lowest active entitlement, or `.free`
  - `revoked` → Immediate downgrade to `.free`
- [ ] The mapping function is a pure function with no side effects — easy to unit test
- [ ] Unit tests cover all 12+ state combinations (each tier × each subscription state)
- [ ] The mapping is called from `SubscriptionManager` whenever `CustomerInfo` changes (delegate, manual refresh, app foreground)
- [ ] `TierManager.currentTier` is only updated if the computed tier is different from the current one — avoiding unnecessary UI updates
- [ ] The `previousTier` is captured before updating for analytics and animation purposes

#### Technical Notes

```swift
func mapEntitlementsToTier(_ info: CustomerInfo) -> MembershipTier {
    let active = info.entitlements.active
    
    if let royal = active["royal_access"], royal.isActive {
        return royal.periodType == .trial ? .trial : .royal
    }
    if active["elite_access"]?.isActive == true {
        return .elite
    }
    if active["pro_access"]?.isActive == true {
        return .pro
    }
    return .free
}
```

---

### Story 4.2 — Offline Entitlement Caching & Grace Period

**As a** user who goes offline (airplane mode, underground, poor connectivity)  
**I want** to retain my subscription access for a reasonable grace period  
**So that** I can continue learning without interruption

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 4.1  

#### Acceptance Criteria

- [ ] RevenueCat's SDK automatically caches the last-known `CustomerInfo` on disk — this is used when offline
- [ ] When offline, `Purchases.shared.customerInfo()` returns the cached `CustomerInfo` without error
- [ ] The cached entitlement is trusted for up to 72 hours after the last successful server sync
- [ ] After 72 hours offline with no server sync:
  1. The app logs a warning (not visible to user)
  2. Access continues based on the cached entitlement (benefit of the doubt)
  3. A subtle, non-blocking indicator appears: "Last synced [X hours ago]" in the subscription settings
- [ ] When connectivity returns, the app automatically re-syncs `CustomerInfo` within 30 seconds
- [ ] If the re-sync reveals the subscription expired while offline, the downgrade happens immediately with the standard transition animation (Story 4.4)
- [ ] If the re-sync reveals the subscription is still active, no UI change occurs
- [ ] The offline cache survives app termination and device restart (persisted to disk by RevenueCat SDK)
- [ ] No "You're offline" modal ever blocks the user from using the app — offline states are indicated, not enforced
- [ ] A unit test verifies: cache write → app restart → cache read → correct tier

---

### Story 4.3 — Feature Gating Enforcement Points

**As a** developer  
**I want** every premium feature gated via `TierManager.hasAccess(to:)` using RevenueCat as the source of truth  
**So that** free-tier users cannot access premium features and paid users always can

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 4.1  

#### Acceptance Criteria

- [ ] Every `PremiumFeature` enum case has a concrete gate check implemented:
  | Feature | Required Tier | Gate Location |
  |---|---|---|
  | `soundscapes` | Pro+ | SoundscapeView.onAppear |
  | `languagePairs` | Pro+ | Language selection (count limit) |
  | `unlimitedPractice` | Pro+ | Practice session start |
  | `breathingOrbs` | Elite+ | Breathing exercise section |
  | `quantumFlow` | Elite+ | Background preset selector |
  | `nebulaDrift` | Elite+ | Background preset selector |
  | `offlineMode` | Royal | Offline content download |
  | `flashcardDeckSize` | Tier-dependent | Flashcard deck creation |
  | `grammarDifficulty` | Tier-dependent | Grammar level selector |
  | `wordBuilderDifficulty` | Tier-dependent | Word builder level selector |
- [ ] `TierManager.hasAccess(to: .soundscapes)` returns `true` for Pro, Elite, Royal, Trial — `false` for Free
- [ ] `TierManager.allowedCount(for: .languagePairs)` returns the correct limit per tier (Free: 1, Pro: 3, Elite: 5, Royal: unlimited)
- [ ] When a gated feature is accessed without entitlement:
  1. A frosted glass overlay appears over the feature with the tier's lock icon
  2. The lock icon pulses gently (not aggressively)
  3. Tapping the locked overlay presents the paywall in `feature_gate` context (Story 2.5)
  4. After successful purchase, the overlay dissolves and the feature is immediately accessible (Story 4.4)
- [ ] Gate checks are performed at the UI layer (view modifier or wrapper view) — never in the model/service layer
- [ ] A `FeatureGateModifier` SwiftUI view modifier wraps any gated view: `.featureGate(.soundscapes)` applies the lock overlay when access is denied
- [ ] The modifier uses the existing `TierGlassCardModifier` aesthetic for the frosted overlay
- [ ] Gate checks are reactive — if the user purchases while a locked feature is visible, the gate lifts in real-time (no manual refresh needed)
- [ ] A "Feature Access Audit" unit test iterates all `PremiumFeature` cases × all `MembershipTier` cases and verifies each expected `hasAccess` result against a truth table
- [ ] No gate check uses hardcoded tier comparisons (e.g., `tier.rank >= 2`) — always use `TierManager.hasAccess(to:)` which reads from RevenueCat

#### UX Details — Make Users Fall in Love

- The lock overlay is a work of art, not a roadblock. It's a frosted glass panel with the premium feature *partially visible beneath* — blurred but recognizable, like looking through morning frost on a window. The user sees the promise of what's behind it
- The lock icon is the tier icon needed to unlock (Pro's lightning bolt, Elite's diamond, Royal's crown) — it tells the user exactly which tier they need with a single glance
- Tapping the locked overlay doesn't feel like "access denied" — it feels like "discover what's inside." The paywall slides up with the locked feature still peeking above (Story 2.5), creating a direct visual connection between the purchase and the reward
- When a gate lifts after purchase, the frosted glass develops hairline cracks (200ms), then shatters into sparkling particles that dissolve upward (300ms), revealing the pristine feature beneath with a brilliant "reveal" flash (200ms). It's the moment they paid for, and it should feel extraordinary

---

### Story 4.4 — Entitlement Change Transition Animations

**As a** user whose subscription state changes (upgrade, downgrade, expiry, restore)  
**I want** the UI to transition smoothly between states  
**So that** the change feels intentional and polished, not jarring

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 4.1  

#### Acceptance Criteria

- [ ] **Upgrade transitions (gaining features):**
  1. The frosted glass lock overlay on newly unlocked features cracks with a spreading crystalline fracture pattern from center (0–200ms)
  2. The fracture pieces shatter outward and dissolve into sparkle particles (200–500ms)
  3. The revealed feature content blooms to full saturation and opacity (500–800ms)
  4. A brief glow ring expands outward from the feature boundary and fades (800–1000ms)
- [ ] **Downgrade transitions (losing features):**
  1. Feature content desaturates gradually (vibrant → muted) over 500ms
  2. Frost crystallises inward from the edges over 300ms
  3. The lock icon fades in at center with a gentle rotation (200ms)
  4. The transition is respectful — amber tones, not harsh red
- [ ] **Simultaneous transitions:**
  - When upgrading from Pro to Royal, all newly unlocked features animate with 150ms stagger between each
  - The stagger order follows visual hierarchy: top-to-bottom, left-to-right
- [ ] The unlock animation plays only for features currently visible on screen — off-screen features update instantly
- [ ] All animations use `withAnimation(.spring(response: 0.5, dampingFraction: 0.7))` for organic feel
- [ ] Performance: 60fps on iPhone 13+, 30fps graceful degradation on iPhone 12 and older
- [ ] The fracture pattern is procedurally generated (not a static image) — each unlock looks slightly different
- [ ] Reduce Motion: if enabled, all transitions are instant opacity changes (0 → 1 for unlock, 1 → 0 for lock) — no particles or shattering
- [ ] VoiceOver announces "Feature unlocked: [Feature Name]" for each newly accessible feature

---

### Story 4.5 — Subscription Status Badge in App

**As a** user with an active subscription  
**I want** to see my current tier reflected in the app's UI  
**So that** I feel recognised as a premium member and can quickly check my status

**Story Points:** 3  
**Priority:** P1 — Should Have  
**Dependencies:** Story 4.1  

#### Acceptance Criteria

- [ ] The existing `TierBadgeView` is updated to source its tier from the RevenueCat-backed `TierManager`
- [ ] The badge appears in the following locations:
  1. Settings screen — next to the user's name/avatar
  2. Membership tab — prominent display
  3. Journey view — subtle indicator
- [ ] Badge states:
  - **Free:** No badge shown (or a subtle "Free" label)
  - **Pro:** Blue lightning bolt icon with "Pro" label
  - **Elite:** Purple diamond icon with "Elite" label
  - **Royal:** Gold crown icon with "Royal" label
  - **Trial:** Royal badge with a "Trial" sub-label and remaining days: "Royal Trial · 5 days left"
- [ ] The badge reacts to tier changes in real-time — no manual refresh needed
- [ ] Tapping the badge navigates to the Membership tab
- [ ] The badge has a subtle ambient animation:
  - Pro: gentle blue pulse
  - Elite: slow purple shimmer
  - Royal: warm golden glow
  - Trial: additional countdown ring overlay
- [ ] VoiceOver: "Your current plan: [Tier]. [Trial info if applicable]. Tap to manage."
- [ ] The badge uses the same `TierGlassCardModifier` styling for consistency across the app

---

## Epic 5 — Subscription Lifecycle Management

> **Goal:** Handle every subscription state transition that happens outside the purchase moment — renewals, billing failures, cancellations, refunds, Family Sharing, and expiry. The user should always understand their subscription status and never feel ambushed by a state change.

### Story 5.1 — Subscription Renewal Handling

**As a** subscribed user  
**I want** my subscription to renew seamlessly without any action on my part  
**So that** my learning continues uninterrupted

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Epic 1 complete  

#### Acceptance Criteria

- [ ] When a subscription renews, RevenueCat sends an updated `CustomerInfo` via the delegate (Story 1.4)
- [ ] The renewal is transparent to the user — no popup, no toast, no interruption
- [ ] `TierManager.currentTier` remains unchanged (same tier, renewed period)
- [ ] The subscription expiry date in `CustomerInfo.entitlements` is updated to the new renewal date
- [ ] If the subscription management view is open, the "Renews on" date silently updates to the next cycle
- [ ] Sandbox accelerated renewals (every 5 minutes for monthly) are handled correctly for testing
- [ ] A log entry records each renewal with the product ID and new expiry date (debug builds)
- [ ] If a renewal fails to process (edge case), the billing retry flow (Story 5.2) takes over

---

### Story 5.2 — Billing Failure & Grace Period Handling

**As a** user whose payment method fails at renewal  
**I want** to retain access during a grace period and be clearly guided to fix the payment  
**So that** a temporary billing issue doesn't immediately lock me out of my premium features

**Story Points:** 8  
**Priority:** P0 — Must Have  
**Dependencies:** Story 5.1  

#### Acceptance Criteria

- [ ] When RevenueCat reports a billing issue (`customerInfo.entitlements["pro_access"]?.billingIssueDetectedAt != nil`):
  1. The user retains full access to their current tier (Apple's grace period)
  2. A non-intrusive but visible billing alert appears
  3. The alert is **not** a modal — it's a banner at the top of the main screen
- [ ] The billing alert banner:
  - Warm amber background with the tier's accent color border
  - Message: "There's a problem with your subscription payment. Tap to fix it."
  - Tapping opens `AppStore.showManageSubscriptions()` or a deep link to payment settings
  - The banner is dismissible (tap X) but reappears every 24 hours until resolved
  - It does **not** appear on lesson screens or practice sessions — never interrupt learning
- [ ] Grace period duration is determined by Apple (typically 6–16 days) and RevenueCat reports it via `CustomerInfo`
- [ ] If the billing issue resolves (user updates payment method):
  1. The `CustomerInfo` delegate reports the resolved state
  2. The banner disappears with a downward slide animation
  3. A brief, subtle "✓ Payment updated" confirmation fades in and out (2 seconds)
- [ ] If the grace period expires without resolution:
  1. The subscription state transitions to expired
  2. The standard downgrade transition (Story 4.4) activates
  3. A final message appears: "Your [Tier] subscription has ended. Resubscribe anytime to continue where you left off."
- [ ] Throughout the grace period, the subscription badge shows an amber warning indicator (small dot)
- [ ] The billing issue state is tracked in analytics: `billing_issue_detected`, `billing_issue_resolved`, `billing_issue_expired`
- [ ] If the user contacts support during a billing issue, the diagnostics screen (Story 6.3) shows the billing issue state

#### UX Details — Make Users Fall in Love

- The billing alert is firm but kind — it never says "payment failed" or uses alarming language. The tone is: "We want to make sure you don't lose access. Let's fix this together."
- The banner has a subtle animated border that slowly shifts between amber and the tier's accent colour — noticeable enough to not be ignored, gentle enough to not be stressful
- The "Tap to fix" CTA in the banner has a right-arrow icon (→) that gently bounces horizontally — a clear affordance of "this takes you somewhere to resolve it"
- On resolution, instead of just removing the banner, there's a 500ms animation where the amber colour transforms into green, a checkmark fades in, and then the banner slides away. It's a resolution moment that says "all is well"
- The user is never punished for a billing issue. No features are removed, no data is deleted, no stern warnings. The app trusts Apple's grace period and treats the user with dignity throughout

---

### Story 5.3 — Subscription Cancellation & Expiry Flow

**As a** user who cancelled my subscription  
**I want** to know when my access ends and what I'll lose  
**So that** I can plan accordingly and potentially resubscribe before it expires

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 5.1  

#### Acceptance Criteria

- [ ] When RevenueCat reports `willRenew == false` for an active subscription:
  1. The subscription badge shows a "Cancelling" sub-label
  2. The settings subscription view shows: "Your [Tier] access continues until [expiry date]"
  3. The exact date is formatted in the user's locale with day and month: "15 April 2026"
- [ ] A soft, non-intrusive banner appears once (on first detection) on the main screen: "Your [Tier] plan ends on [date]. You'll keep access until then."
  - The banner is dismissible and does not reappear
  - It does not appear on lesson or practice screens
- [ ] On the expiry date, when `CustomerInfo` confirms the subscription has expired:
  1. The tier transitions via the standard downgrade animation (Story 4.4)
  2. All premium features re-gate with frosted glass overlays
  3. `TierManager.currentTier` updates to the appropriate tier (.free, or lower tier if they have another active subscription)
- [ ] Post-expiry, the paywall shows a "Welcome back" context (warm, not guilt-tripping):
  - "We saved your progress. Pick up where you left off with [Tier]."
  - A "Resubscribe" CTA is prominent
  - The user's progress stats are shown: "You've mastered 247 words, completed 32 lessons" — reminding them of the value
- [ ] At no point does the app delete user data, reset progress, or remove downloaded content upon subscription expiry
- [ ] Content created during the premium period (flashcard decks, notes) remains accessible in read-only mode
- [ ] Analytics: `subscription_cancelled`, `subscription_expired`, `subscription_reactivated`

#### UX Details — Make Users Fall in Love

- The expiry transition doesn't feel like punishment — it feels like a gentle sunset. Features dim slowly (over 2 seconds, not instantly), the tier badge fades from its accent colour to a neutral grey, and the cosmic background subtly shifts to a cooler, quieter tone. It's an ending, not a shutdown
- The "Welcome back" paywall context leads with the user's achievements, not with a sales pitch. "You've mastered 247 words" hits differently than "Subscribe now!" — it reminds them of the relationship they built with the app
- If the user resubscribes after expiry, the re-upgrade celebration is slightly different: instead of "Welcome to [Tier]", it says "Welcome home." The particles flow inward (converging) rather than outward (exploding), like everything coming back together. It's a reunion, not a new beginning
- Premium content that becomes read-only shows a very subtle frost effect at 10% opacity — visible enough to notice the change, not so much that it feels broken. Tapping any frosted content opens the paywall with the specific feature context

---

### Story 5.4 — Refund & Revocation Handling

**As a** user who received a refund or had my subscription revoked  
**I want** the app to handle the change gracefully  
**So that** the transition is clear and I understand what changed

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Story 4.1  

#### Acceptance Criteria

- [ ] When RevenueCat reports a revoked entitlement (via `CustomerInfo` delegate):
  1. `TierManager` immediately transitions to `.free` (or to the next active entitlement if another exists)
  2. The downgrade animation (Story 4.4) plays for the affected features
  3. No error message or accusatory language appears — the app does not distinguish between a user-initiated refund and an Apple-side revocation
- [ ] The transition happens on the next `CustomerInfo` update — it does not require an app restart
- [ ] If the user had created premium content (soundscapes, custom decks), it becomes read-only with the frosted overlay
- [ ] If the refund is for a lower tier but the user also has a higher tier active, only the refunded entitlement is removed (RevenueCat handles this)
- [ ] The user is not re-prompted to subscribe immediately after a refund — the paywall is available in settings/membership but not force-presented
- [ ] Analytics: `entitlement_revoked` with tier and reason (if available from RevenueCat)
- [ ] No user data is deleted upon revocation

---

### Story 5.5 — Manage Subscription Deep Link

**As a** user  
**I want** an easy way to manage my subscription (change plan, update payment, cancel)  
**So that** I don't have to navigate through iOS Settings manually

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** None (uses system API)  

#### Acceptance Criteria

- [ ] A "Manage Subscription" button in Settings → Subscription opens the App Store subscription management page
- [ ] The implementation uses `AppStore.showManageSubscriptions(in:)` (StoreKit 2) which opens the native in-app management sheet
- [ ] If `showManageSubscriptions` is unavailable (< iOS 15.4), fall back to opening `https://apps.apple.com/account/subscriptions` via `UIApplication.shared.open()`
- [ ] The button is always visible, regardless of subscription state (free users see "View Subscription Options")
- [ ] The button is styled consistently with other Settings items — not buried or hidden
- [ ] After returning from the management sheet, `Purchases.shared.getCustomerInfo()` is called to refresh subscription state (catches immediate cancellations or plan changes)
- [ ] VoiceOver: "Manage Subscription. Opens App Store subscription settings."
- [ ] The button works in sandbox and production environments

---

### Story 5.6 — Family Sharing Entitlement Support

**As a** family member whose organiser subscribes via Family Sharing  
**I want** to automatically receive the subscription entitlement on my device  
**So that** the whole family can learn together without individual subscriptions

**Story Points:** 5  
**Priority:** P2 — Nice to Have  
**Dependencies:** Story 4.1  

#### Acceptance Criteria

- [ ] RevenueCat automatically detects Family Shared subscriptions via `CustomerInfo`
- [ ] Family-shared entitlements appear in `customerInfo.entitlements.active` with `ownershipType == .familyShared`
- [ ] The `mapEntitlementsToTier` function (Story 4.1) treats family-shared entitlements identically to directly-purchased ones
- [ ] The subscription badge shows the tier normally for family members — no "Shared" label unless in the subscription detail view
- [ ] In the subscription detail view (Settings → Subscription), family-shared subscriptions show: "Shared with you via Family Sharing" and do NOT show a "Cancel" button (since the member can't cancel — only the organiser can)
- [ ] If the organiser cancels or the subscriber leaves the family group, the entitlement is revoked via the standard RevenueCat delegate — the downgrade animation plays
- [ ] The paywall does not show "Subscribe" to family members who already have shared access — it shows "Your plan: [Tier] via Family Sharing"
- [ ] If a family member wants a higher tier than what's shared, they can purchase their own subscription — it takes priority over the shared one
- [ ] When the Sharing family product is configured in App Store Connect with "Family Sharing" enabled, ensure the products are correctly set up in RevenueCat
- [ ] A sandbox test verifies family sharing entitlement detection (using a Sandbox Family)

---

### Story 5.7 — Subscription Expiry Warning & Win-Back

**As a** user whose trial or subscription is about to expire  
**I want** to be reminded before I lose access with a compelling reason to stay  
**So that** I can make an informed decision before my features disappear

**Story Points:** 8  
**Priority:** P1 — Should Have  
**Dependencies:** Story 5.3, Story 2.5  

#### Acceptance Criteria

- [ ] A pre-expiry warning is triggered when the subscription (or trial) has ≤3 days remaining and `willRenew == false`
- [ ] The warning is a sheet (not modal alert) that appears once per 24 hours, never during lessons:
  - Headline: "Your [Tier/Trial] ends in [N] days"
  - Shows the user's achievements during their premium period: words learned, lessons completed, streak days
  - Lists the specific features they'll lose, each with a visual "dimming" preview
  - CTA: "Keep My [Tier]" → opens paywall
  - Secondary: "I'll think about it" → dismisses for 24 hours
- [ ] If the user engages with a premium feature during the final 3 days, a contextual nudge appears (once per feature per session):
  - "Love using [Feature]? Keep it with [Tier]." — inline banner at the bottom of the feature screen
  - Tappable, opens paywall in `feature_gate` context
  - Dismissable with a swipe
- [ ] The win-back flow respects user agency:
  - Maximum 1 sheet per day
  - Maximum 1 inline nudge per feature per session
  - "Don't remind me again" option that suppresses all win-back prompts for this expiry cycle
  - If the user has seen the win-back 3 times and dismissed, stop showing it entirely
- [ ] Post-expiry win-back (lapsed user):
  - 7 days after expiry, if the user opens the app, a warm "Welcome back" sheet appears once:
    - "We've been holding onto your progress: [stats]. Ready to pick up where you left off?"
    - Shows any new features or content added since they left (if applicable)
    - CTA: "Resubscribe" → paywall
    - "Not yet" → dismisses permanently for 30 days
- [ ] All win-back interactions are tracked: `winback_shown`, `winback_engaged`, `winback_dismissed`, `winback_suppressed`

#### UX Details — Make Users Fall in Love

- The pre-expiry sheet doesn't feel like a desperate retention attempt — it feels like a friend reminding you before you lose something you love. The tone is warm: "Just a heads up" not "ACT NOW"
- The user's achievement stats are shown with micro-animations: the word count ticks up (animated counter), the lesson count fills a ring, the streak days stack like a tower. It's a visual love letter to their effort
- The features they'll lose are shown in a vertical stack, each one slowly fading from full colour to greyscale as the user scrolls — a gentle, tangible preview of what's about to change. Not threatening, just honest
- The "Keep My [Tier]" button uses a gradient that subtly shifts through the tier's accent colours — it's the most beautiful button on the screen without being garish
- The "I'll think about it" option is respectful — equal visual weight to "Keep My Plan", just with a secondary style. No guilt, no "are you sure?", no countdown pressure
- The post-expiry "Welcome back" sheet leads with nostalgia: it shows what the app remembers about the user (their favourite words, their longest streak) alongside progress they haven't lost. The message: "Your journey is still here. We kept it safe."
- The dismiss option is always prominent and respectful — the user should never feel trapped

---

## Epic 6 — Analytics, Attribution & Diagnostics

> **Goal:** Leverage RevenueCat's analytics, implement attribution tracking, and build internal diagnostics so the product team can measure subscription performance and support can troubleshoot user issues.

### Story 6.1 — RevenueCat Dashboard Analytics Integration

**As a** product owner  
**I want** core subscription metrics visible in the RevenueCat dashboard  
**So that** I can track MRR, churn, trial conversion, and LTV without building a custom analytics pipeline

**Story Points:** 3  
**Priority:** P0 — Must Have  
**Dependencies:** Epic 1 complete  

#### Acceptance Criteria

- [ ] The RevenueCat dashboard correctly tracks all sandbox and production transactions
- [ ] The following metrics are verified as accurate in the dashboard:
  - Monthly Recurring Revenue (MRR) by tier
  - Active Subscriptions count by tier
  - Active Trials count
  - Trial-to-Paid Conversion Rate
  - Churn Rate (monthly)
  - Revenue per customer
  - Refund rate
- [ ] Sandbox transactions are clearly separated from production (using the sandbox/production toggle)
- [ ] Each transaction shows: product ID, user ID, purchase date, expiration date, country, price
- [ ] The "Charts" section renders correctly with at least 7 days of sandbox data
- [ ] Customer timeline view shows the full lifecycle: initial purchase → renewals → cancellation → expiry
- [ ] No duplicate transactions appear (verifying Story 1.5 — no dual observer)
- [ ] The RevenueCat project is configured with the correct App Store Connect shared secret
- [ ] Platform-specific configuration (iOS bundle ID, App Store Connect API key) is verified

---

### Story 6.2 — Custom Revenue Attributes for User Segmentation

**As a** product owner  
**I want** custom subscriber attributes set on each user's RevenueCat profile  
**So that** I can segment users and build targeted offering experiments

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 1.6  

#### Acceptance Criteria

- [ ] The following custom subscriber attributes are set via `Purchases.shared.attribution.set*()`:
  - `$displayName` — from Clerk user profile
  - `$email` — from Clerk user profile (if available, for support)
  - `auth_provider` — "apple" / "google" / "phone" / "email" / "anonymous" (from Clerk session)
  - `app_language` — the user's selected app language (e.g., "en", "ja", "pl")
  - `learning_language` — the language the user is learning
  - `words_learned` — total words mastered (updated periodically, not on every word)
  - `days_active` — cumulative days the user has opened the app
  - `first_open_date` — ISO8601 date of first app launch
  - `device_model` — e.g., "iPhone 16 Pro", "iPad Air M2"
  - `previous_tier` — the tier before current tier (for upgrade/downgrade analysis)
- [ ] Attributes are updated at appropriate times:
  - `auth_provider`, `$displayName`, `$email` → set at Clerk authentication (Story 1.6)
  - `app_language`, `learning_language` → set at selection and on change
  - `words_learned`, `days_active` → updated once per session (avoid API throttling)
  - `previous_tier` → set when `TierManager` changes tier
- [ ] Attribute names follow RevenueCat's reserved prefix convention ($-prefixed for built-in, unprefixed for custom)
- [ ] Attributes are visible in the RevenueCat customer detail view
- [ ] Attributes can be used to filter RevenueCat Experiments
- [ ] No PII beyond email and display name is sent to RevenueCat
- [ ] Attribute syncing respects data consent status (only sync if consent given)
- [ ] If data consent is revoked, custom attributes (except $-prefixed) are cleared

---

### Story 6.3 — Subscription Diagnostics for Support

**As a** support agent helping a user with a billing issue  
**I want** a diagnostics screen in the app that reveals the user's subscription state  
**So that** I can quickly identify problems without asking the user to check multiple settings

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 4.1  

#### Acceptance Criteria

- [ ] A hidden diagnostics screen is accessible via Settings → About → tap version number 7 times (Easter egg)
- [ ] The diagnostics screen displays:
  1. **RevenueCat App User ID** (masked — last 4 chars visible, tap to copy full ID)
  2. **Clerk User ID** (masked, tap to copy)
  3. **Authentication Provider** (Apple / Google / Phone / Email / Anonymous)
  4. **Current Entitlements** — list of active entitlement IDs with expiration dates
  5. **Subscription State** — raw state
  6. **Current Tier** — `MembershipTier` raw value
  7. **Billing Issue?** — Yes/No with detected date
  8. **Grace Period?** — Yes/No with remaining days
  9. **Will Renew?** — Yes/No
  10. **Original Purchase Date** — per entitlement
  11. **Last CustomerInfo Refresh** — timestamp
  12. **RevenueCat SDK Version** — from `Purchases.frameworkVersion`
  13. **StoreKit Environment** — Sandbox / Production
  14. **Offering ID** — current offering
  15. **Network Status** — online/offline
- [ ] A "Copy Diagnostics" button generates a formatted text block and copies to clipboard
- [ ] The copied text includes a "Support Reference" hash (first 8 chars of SHA256 of App User ID + current date)
- [ ] A "Refresh" button forces `Purchases.shared.getCustomerInfo()` and updates the display
- [ ] A "Force Sync" button calls `Purchases.shared.syncPurchases()` for receipt re-validation
- [ ] All values are read-only — no mutation possible from this screen
- [ ] Sensitive data (full user IDs, email) requires a second tap-to-reveal interaction

#### UX Details — Make Users Fall in Love

- Despite being a support tool, the diagnostics screen continues the cosmic theme: dark star-field background with data rendered in a sci-fi monospace font — it feels like a spaceship control panel, not a boring debug dump
- Values that are "healthy" (active entitlement, no billing issues) have a soft green glow
- Values indicating problems (billing issue, grace period, expired) glow warm amber
- The "Copy Diagnostics" button has a satisfying clipboard animation: text "lifts" off the screen and "snaps" into a clipboard icon
- A hidden "Send to Support" option (if email is configured) opens a pre-composed email with diagnostics attached

---

### Story 6.4 — Paywall Conversion Funnel Analytics

**As a** product owner  
**I want** to track the full paywall conversion funnel per presentation context  
**So that** I know which touchpoints drive the most conversions and where users drop off

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 2.5  

#### Acceptance Criteria

- [ ] The following analytics events are tracked:
  1. `paywall_viewed` — Attributes: `context` (membership_tab / feature_gate / upgrade_nudge / trial_expiry / settings), `offering_id`, `current_tier`
  2. `paywall_tier_selected` — Attributes: `context`, `selected_tier`, `current_tier`
  3. `paywall_purchase_initiated` — Attributes: `context`, `tier`, `is_trial`, `offering_id`
  4. `paywall_purchase_completed` — Attributes: `context`, `tier`, `price`, `currency`, `is_trial`, `is_upgrade`
  5. `paywall_purchase_cancelled` — Attributes: `context`, `tier`
  6. `paywall_purchase_failed` — Attributes: `context`, `tier`, `error_code`
  7. `paywall_dismissed` — Attributes: `context`, `time_spent_ms`, `tiers_viewed`
  8. `paywall_restore_tapped` — Attributes: `context`, `result` (success/no_purchases/error)
- [ ] Events are fire-and-forget — they never block the UI or purchase flow
- [ ] Event delivery handles offline gracefully — events are queued and sent when connectivity returns
- [ ] A "Funnel" report can be constructed: views → selections → initiations → completions per context
- [ ] The `feature_gate` context includes `locked_feature` attribute for conversion-by-feature analysis
- [ ] Dev builds log events to console; Prod builds send only to the analytics service
- [ ] No user-identifiable data beyond the RevenueCat App User ID is included
- [ ] Events follow consistent naming: `snake_case`, domain-prefixed (`paywall_`, `tier_`, `auth_`)

---

### Story 6.5 — Attribution Integration for Marketing

**As a** marketing team  
**I want** RevenueCat to receive attribution data from install tracking  
**So that** we can calculate ROI per advertising campaign and optimise ad spend

**Story Points:** 3  
**Priority:** P2 — Nice to Have  
**Dependencies:** Epic 1 complete  

#### Acceptance Criteria

- [ ] RevenueCat is configured to receive attribution from at least one network:
  - Apple Search Ads via `AdServices.framework` / `AAAttribution.attributionToken()`
  - Integration hook documented for future MMP (AppsFlyer, Adjust, Branch) if needed
- [ ] `Purchases.shared.attribution.collectDeviceIdentifiers()` is called after SDK configuration
- [ ] `Purchases.shared.attribution.enableAdServicesAttributionTokenCollection()` is called for Apple Search Ads
- [ ] Attribution data appears in the RevenueCat customer timeline for attributed users
- [ ] Campaigns show in the RevenueCat attribution tab
- [ ] ATT (App Tracking Transparency) prompt is NOT shown unless a future MMP requires it — Apple Search Ads alone does not need ATT
- [ ] If ATT is later needed, the prompt appears at an appropriate moment (not first launch)
- [ ] Attribution does not affect app startup time by more than 50ms

---

## Epic 7 — UX Polish & Delight

> **Goal:** Transform every subscription touchpoint from "functional" to "extraordinary." This epic is where the app becomes something users talk about — where the monetisation UI itself becomes a reason to recommend the app. Every animation, every micro-interaction, every word of copy is crafted to make the subscription experience feel like a gift, not a gate.

### Story 7.1 — Upgrade Celebration Overhaul

**As a** user who just purchased a subscription  
**I want** to experience a celebration that makes the upgrade feel momentous and worth every penny  
**So that** my emotional connection to the product is reinforced at the highest-stakes moment

**Story Points:** 8  
**Priority:** P1 — Should Have  
**Dependencies:** Story 3.1, Story 4.4  

#### Acceptance Criteria

- [ ] The celebration triggers immediately after a successful purchase (or restore) and before the paywall dismisses
- [ ] **Tier-specific celebrations:**
  - **Pro upgrade:** A constellation of blue-white stars converges from screen edges into a central starburst. The Pro lightning bolt icon forms from the converging stars, pulses twice, then settles. Duration: 2.5 seconds
  - **Elite upgrade:** A diamond-shaped crystal forms from purple shards that spiral inward. Each shard catches light as it rotates, creating prismatic reflections. The crystal completes, emits a ring of purple energy, and settles. Duration: 3 seconds
  - **Royal upgrade:** A crown descends from above, composed of golden particles that solidify into a metallic crown with embedded gems. Gems ignite one by one in the tier colours (blue, purple, gold). A golden shockwave pulses outward. Duration: 3.5 seconds
  - **Trial start:** The Royal celebration plays at 70% intensity with a softer colour palette and a "Trial" label that fades in beneath the crown
- [ ] Each celebration includes:
  1. A tier-specific haptic choreography (light → medium → heavy at the climax → light fade)
  2. A tier-specific sound (generated via AudioService synthesis — warm, resonant, ascending chord)
  3. Background dimming (80% black behind the celebration, cosmic nebula still subtly visible)
  4. A congratulatory message: "Welcome to [Tier]" (first time) or "Welcome back to [Tier]" (resubscribers)
  5. A "Continue" button that appears after the animation completes — the user controls when the paywall dismisses
- [ ] **First-ever subscription (any tier):** The celebration is extended by 2 seconds with an additional sequence where the user's name (from Clerk) is written in a calligraphic cosmic font: "[Name], welcome to premium"
- [ ] Performance: 60fps on iPhone 13+, particles scale down on older devices
- [ ] Reduce Motion: celebration is replaced with a simple "Welcome to [Tier]" card with the tier icon — no particles, no movement — still premium-feeling with rich colour and subtle gradient shift
- [ ] The celebration is skippable — tapping anywhere accelerates to the end state
- [ ] VoiceOver: "Congratulations! You are now a [Tier] member." + haptic

#### UX Details — Make Users Fall in Love

- This is the single most important emotional moment in the entire subscription flow. The user just gave you money. They need to feel that the app received their decision with gratitude, not indifference
- The celebration should make the user smile. It should make them want to show someone: "Look at this." It's a 3-second movie trailer for the premium experience they just bought
- The particles use physically-inspired motion: gravity, inertia, subtle trail effects. They don't move linearly — they accelerate, decelerate, and bounce. This organic motion is what makes it feel "real" and not "CSS animation"
- The sound is generated by AudioService to match the physical celebration: strings/pads for Pro (blue warmth), crystalline bells for Elite (purple sophistication), brass/choir hybrid for Royal (golden majesty)
- The "Continue" button appears with a soft fade at the bottom — no rush. The user can linger in the moment
- The background darkening creates a "spotlight" effect on the celebration. The nebula is still subtly visible, connecting the celebration to the cosmic theme

---

### Story 7.2 — Tier Transition Micro-Interactions

**As a** user navigating the app after a tier change  
**I want** subtle reminders of my new status woven throughout the interface  
**So that** the upgrade feels pervasive and validates my decision over the following minutes and hours

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 7.1  

#### Acceptance Criteria

- [ ] After the celebration (Story 7.1) completes and the paywall dismisses:
  1. The app returns to wherever the user was before the paywall appeared
  2. A trail of 5–10 tier-coloured sparkle particles follows the user's initial scroll gesture for 3 seconds
  3. The tier badge (Story 4.5) blooms with a brief glow ring on first appearance after the upgrade
- [ ] For the first 12 hours after an upgrade, the following micro-interactions activate:
  - **Tier badge entrance:** Each time the badge becomes visible (scroll, tab switch), it does a micro-bounce (scale 1.0 → 1.08 → 1.0 over 300ms)
  - **Feature unlock sparkles:** The first time a newly unlocked feature is used in a session (e.g., first soundscape play as a new Pro member), 3–5 sparkle particles emit from the feature's icon
  - **Cosmic background shift:** The nebula background subtly shifts colour toward the tier's palette (blue for Pro, purple for Elite, gold for Royal) for 12 hours, then gradually returns to the user's preference
- [ ] None of these micro-interactions interfere with core functionality — they are purely decorative overlays
- [ ] A `tierUpgradeTimestamp` is stored to calculate the 12-hour window
- [ ] All micro-interactions respect Reduce Motion — disabled if the user has motion reduction enabled
- [ ] The sparkle particles use the same emission system as the celebration for visual consistency

#### UX Details — Make Users Fall in Love

- These micro-interactions are "afterglow" — the emotional warmth that lingers after the celebration. They're never intrusive, but they're noticeable. Like leaving a concert and still hearing the music in your head
- The scroll-following sparkles are the signature moment: the user scrolls, and gold (or blue/purple) particles trail behind their finger like fairy dust. It's whimsical, it's unexpected, and it makes the first few minutes after purchasing feel magical
- The cosmic background colour shift is the subtlest but longest-lasting effect. The user won't consciously notice it, but they'll feel it — the entire app environment reflects their new status
- Each "first use" sparkle (first soundscape as Pro, first advanced lesson as Elite) is a micro-celebration specific to that feature. It says: "This is new. This is yours now."

---

### Story 7.3 — Subscription Onboarding Flow

**As a** user who just subscribed to a paid tier  
**I want** to be guided through the premium features I just unlocked  
**So that** I discover and use what I paid for (reducing buyer's regret)

**Story Points:** 8  
**Priority:** P1 — Should Have  
**Dependencies:** Story 7.1  

#### Acceptance Criteria

- [ ] After the upgrade celebration (Story 7.1) and the user taps "Continue", a premium onboarding flow starts
- [ ] The onboarding is a 3–5 screen carousel (tier-specific) that highlights features unlocked by the chosen tier:
  - **Pro onboarding screens:** (1) Soundscapes — try a 10-second sample inline, (2) Extended Language Pairs — see available languages with a "browse" preview, (3) Unlimited Practice — the session limit badge dissolves with a satisfying animation
  - **Elite onboarding screens:** Includes Pro screens + (4) Breathing Orbs — a live mini-preview of the breathing exercise, (5) Background Themes — a carousel of the cosmic presets newly available
  - **Royal onboarding screens:** Includes all of the above + (6) Offline Mode — a "Download Now" quick-start, (7) Premium Support — a "We're here for you" card with contact info
- [ ] Each onboarding screen features:
  - A live interactive element (not just a screenshot or static image)
  - A brief description (2 lines max)
  - A "Try It!" or "Explore" CTA that deep-links to the feature screen
  - A "Next" button with tier-coloured accent
  - Skip is always available: "I'll explore on my own"
- [ ] The onboarding is shown only once per tier per direction:
  - Upgrading Pro → Elite shows only the Elite-specific screens (not Pro screens again)
  - Restoring an existing subscription does NOT show the onboarding
  - Resubscribing after expiry shows a shorter "Welcome back" variant
- [ ] On the final screen, a summary card shows: "You just unlocked [N] new features" with a list
- [ ] The onboarding flow is stored in user preferences: `{tier}_onboarding_completed`
- [ ] Analytics: `onboarding_started`, `onboarding_screen_viewed` (per screen), `onboarding_completed`, `onboarding_skipped` (with last_screen)

#### UX Details — Make Users Fall in Love

- The onboarding is not a tutorial — it's a gift-unwrapping experience. Each screen reveals a new feature with the same "frost shatter → reveal" animation from Story 4.4, as if the user is personally unlocking each feature
- The live interactive elements are key: the user doesn't just READ about soundscapes — they hear a 10-second sample of one playing. They don't just SEE breathing orbs — a miniature orb pulses on their screen. This turns a "marketing carousel" into a tactile experience
- The "Try It!" CTA on each screen deep-links directly to the feature. If the user taps it, they leave the onboarding and enter the actual feature. The onboarding state is saved so they can return to it from Settings → "Review Premium Features"
- The summary card at the end includes a "Share" button: "I just upgraded to [Tier] on LumenLingo!" with a custom-generated image card showing the tier branding — organic marketing from delighted users
- The entire onboarding uses the tier's accent colour as the primary tint, reinforcing "this is YOUR experience now"

---

### Story 7.4 — Subscription Price Comparison & Value Framing

**As a** potential subscriber comparing tiers  
**I want** to understand the value proposition of each tier clearly and intuitively  
**So that** I choose the right tier without confusion or regret

**Story Points:** 5  
**Priority:** P1 — Should Have  
**Dependencies:** Story 2.2  

#### Acceptance Criteria

- [ ] The paywall includes a comparative value framing section below the tier cards:
  1. **Daily cost breakdown:** Each tier shows a "just [amount]/day" sub-line (calculated from RevenueCat's monthlyPrice / 30) — e.g., "Just £0.33/day"
  2. **Coffee comparison:** The daily cost is compared to a relatable purchase: "Less than your morning coffee" for Pro, "Less than a sandwich" for Elite
  3. **Per-word value:** For users with learning history: "You've learned [N] words — that's just [amount] per word with [Tier]"
  4. **Feature count badge:** Each tier card shows "[N] premium features" with a small sparkle icon
- [ ] The value framing section is collapsible (starts expanded for first-time viewers, collapsed for returning viewers)
- [ ] The daily cost uses animated counting when it first appears: "£0.00" counting up to "£0.33" over 800ms
- [ ] Currency and price formatting respects the user's locale (RevenueCat handles localised pricing)
- [ ] If the user has existing learning progress, the "per-word value" is personalised and dynamically calculated
- [ ] If no learning progress exists, the "per-word value" section shows a projected estimate: "Most learners master 300+ words in their first month"
- [ ] The comparison never mentions competitor pricing or other apps — it's always anchored to personal value
- [ ] VoiceOver reads the comparison naturally: "Pro plan costs £9.99 per month, which is about 33 pence per day"
- [ ] A/B variations can be configured via RevenueCat Offerings metadata (Story 2.3)

#### UX Details — Make Users Fall in Love

- The daily cost reveal is a masterclass in price reframing. Users don't see "£9.99/month" in isolation — they see it decomposed into "£0.33/day." The animated counter makes the small number feel even smaller: watching it climb slowly to 33p is more psychologically impactful than reading "£0.33" statically
- The coffee comparison adds warmth and relatability: a tiny coffee cup icon appears next to the daily cost, steaming gently. For Elite, a sandwich icon. For Royal, a lunch icon. The message: your investment in yourself costs less than things you buy without thinking
- The per-word value for returning users is powerful: "You've mastered 247 words for just 4p each" creates a concrete value memory. The number updates if they've learned more since they last viewed the paywall
- The feature count sparkles when scrolled into view: the number ticks up one at a time (1… 2… 3… 5… 7 premium features!) — each tick accompanied by a tiny spark particle

---

### Story 7.5 — Accessibility Compliance for All Subscription UI

**As a** user who relies on assistive technologies  
**I want** every subscription surface (paywall, celebration, badges, gates) to be fully accessible  
**So that** I can subscribe, manage, and enjoy premium features with the same quality as any other user

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** All previous epics  

#### Acceptance Criteria

- [ ] **VoiceOver Coverage:**
  - Every interactive element has an accessibility label: buttons, tier cards, dismiss affordances
  - Every state change announces: "Subscription updated to [Tier]", "Feature unlocked: [name]", "Purchase pending approval"
  - Dynamic pricing reads as natural text: "Pro plan, nine pounds ninety-nine per month"
  - Trial remaining reads: "[Tier] trial, 5 days remaining"
- [ ] **Dynamic Type:**
  - All subscription UI scales from `xSmall` to `AX5` without truncation or layout breakage
  - Paywall tier cards reflow from horizontal to vertical layout at `AX1` and above
  - Pricing text never truncates — it wraps to a second line if needed
  - CTA buttons have minimum 44pt touch targets at all Dynamic Type sizes
- [ ] **Reduce Motion:**
  - All celebrations (Story 7.1) replace particles with opacity transitions
  - All unlock animations (Story 4.4) become instant opacity changes
  - All micro-interactions (Story 7.2) are disabled
  - Value counting animations (Story 7.4) show final values immediately
  - All spring animations use `.linear(duration: 0.3)` instead
- [ ] **Colour Contrast:**
  - All text on tier cards meets WCAG 2.1 AA (4.5:1 for body text, 3:1 for large text)
  - Lock icons on frosted glass overlays (Story 4.3) have sufficient contrast against both light and dark content behind the frost
  - Error and success banners (Stories 3.1, 3.2, 5.2) meet AA against the banner background
  - Tier accent colours (blue/purple/gold) meet contrast requirements against both cosmic dark backgrounds and potential light mode
- [ ] **Switch Control / Voice Control:**
  - All subscription flows are completable using Switch Control
  - All CTA buttons respond to Voice Control voice labels
  - The paywall dismiss gesture is also available as a button (not only swipe-down)
- [ ] **Keyboard Navigation (external keyboard):**
  - Tab order on paywall: tier cards left-to-right, subscribe CTA, restore link, dismiss
  - Enter/Return activates the focused element
- [ ] Accessibility audit: run Xcode Accessibility Inspector on every subscription screen and fix all warnings

---

### Story 7.6 — Localised Legal Compliance Text

**As a** subscriber in any supported region  
**I want** the subscription legal text (terms, auto-renewal, cancellation) to comply with local requirements  
**So that** my rights are protected and the app meets App Store review guidelines

**Story Points:** 5  
**Priority:** P0 — Must Have  
**Dependencies:** Story 2.1  

#### Acceptance Criteria

- [ ] Every paywall display includes the Apple-mandated subscription disclosure text below the subscribe CTA:
  - "Payment will be charged to your Apple ID account at confirmation of purchase"
  - "Subscription automatically renews unless cancelled at least 24 hours before the end of the current period"
  - "Your account will be charged for renewal within 24 hours prior to the end of the current period"
  - "You can manage and cancel your subscriptions in your Apple ID account settings after purchase"
- [ ] The disclosure text is present and legible but styled as secondary content (smaller font, lower opacity) — it doesn't compete with the primary CTA
- [ ] Links to Terms of Service and Privacy Policy are tappable and open the respective pages (Clerk.md or in-app browser)
- [ ] The disclosure text is localised into all 10 supported languages: en, es, fr, ja, de, pt, pl, ar, zh, uk
- [ ] RTL languages (Arabic) display the text correctly right-aligned
- [ ] Japanese/Chinese text uses appropriate line-break rules (no mid-word breaks)
- [ ] The EU-required distance-selling information is included for EU users (detected via App Store storefront or device locale)
- [ ] The trial disclosure includes: "Free trial for [N] days. After the trial, you'll be charged [price]/month unless you cancel."
- [ ] All text is fetched from the localisation strings file (not hardcoded in views)
- [ ] App Store Review will verify this text — it must pass review on first submission

---

### Story 7.7 — Premium Ambient Theme Shifts

**As a** premium subscriber  
**I want** the cosmic background and ambient atmosphere to subtly reflect my tier  
**So that** the entire app experience feels elevated and personalised

**Story Points:** 5  
**Priority:** P2 — Nice to Have  
**Dependencies:** Story 4.5, MetalCosmicRenderer  

#### Acceptance Criteria

- [ ] The cosmic nebula background subtly shifts palette based on the user's active tier:
  - **Free:** Default cool-neutral cosmic palette (current behaviour)
  - **Pro:** Warmer blues with brighter star fields — the cosmos feels more alive
  - **Elite:** Deep purples accented with crystalline highlights — the cosmos feels richer, more mysterious
  - **Royal:** Warm golds interwoven with deep cosmic hues — the cosmos feels majestic, like watching a galactic sunrise
  - **Trial:** Same as Royal but with slightly cooler temperature — "preview of majesty"
- [ ] The palette shift is implemented as a uniform modifier in the Metal shader (not a separate preset):
  - A `tierColorShift` float3 uniform is passed to the active preset shader
  - It adjusts the output colour's hue, saturation, and warmth in post-processing (Phase 2)
  - The shift is subtle: max ±10% hue rotation, ±15% saturation boost
- [ ] When the tier changes, the palette transition takes 5 seconds (slow crossfade in the shader uniform)
- [ ] The palette shift is additive to the user's chosen preset — it doesn't override their background preference
- [ ] If the user has "Reduce Motion" enabled, the transition is instant (no crossfade)
- [ ] The tier theme shift is independent of the 12-hour micro-interaction window (Story 7.2) — it persists permanently
- [ ] The shift values are stored in a configuration plist for easy tuning without code changes
- [ ] Performance impact: < 0.5ms additional GPU time per frame (it's a simple colour matrix multiply in post-process)
- [ ] A debug toggle in developer settings allows previewing each tier's colour shift without changing the actual tier

#### UX Details — Make Users Fall in Love

- This is the most ambient, pervasive expression of premium status. The user never has a "toggle" to enable this — it's simply how the app looks when you're a Royal subscriber. The cosmos is warmer. The stars are brighter. The nebula has golden threads woven through it
- The effect is deliberately subtle — if someone showed you a screenshot, you might not identify the exact difference. But the user who just upgraded FEELS it. The entire atmosphere shifted. They're no longer in the same universe — they're in the premium universe
- The 5-second transition when upgrading is timed to coincide with the end of the celebration (Story 7.1). As the celebration particles settle, the entire background imperceptibly begins its shift. By the time the user is back on the main screen, the new atmosphere is already there, waiting
- For Royal subscribers, the cosmic colour shift includes occasional "golden hour" moments — every 30 minutes, the background warms slightly for 2 minutes before cooling back. It's a breathing, living atmosphere — not static

---

## Appendices

### Appendix A — RevenueCat Dashboard Configuration Checklist

| Item | Value | Verified |
|---|---|---|
| Project Name | LumenLingo | ☐ |
| Platform | iOS | ☐ |
| Bundle ID | com.lumenshore.lumenlingo | ☐ |
| App Store Connect Shared Secret | (configured) | ☐ |
| Entitlement: pro_access | Created, linked to com.lumenshore.lumenlingo.pro.monthly | ☐ |
| Entitlement: elite_access | Created, linked to com.lumenshore.lumenlingo.elite.monthly | ☐ |
| Entitlement: royal_access | Created, linked to com.lumenshore.lumenlingo.royal.monthly | ☐ |
| Offering: default | Contains Pro, Elite, Royal packages | ☐ |
| Webhook: (optional) | Configured for server notifications if needed | ☐ |
| Platform Server Notifications (PSN) | Enabled (Apple → RevenueCat) | ☐ |
| Transfer Key | Saved securely for account recovery | ☐ |
| SDK API Key: Dev | Generated, stored in BuildConfig | ☐ |
| SDK API Key: Prod | Generated, stored in BuildConfig | ☐ |

### Appendix B — Story Dependency Graph

```
Epic 1 (Foundation)
  ├── 1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 1.7
  └── 1.6 (Clerk Bridge) ← depends on Clerk.md auth stories
  
Epic 2 (Paywall) ← depends on Epic 1
  ├── 2.1 → 2.2, 2.3, 2.4, 2.5, 2.6, 2.7
  └── 2.5 (Contexts) → used by Epic 5 and Epic 7

Epic 3 (Purchase) ← depends on Epic 2
  ├── 3.1 → 3.2, 3.3, 3.4
  └── 3.5 ← depends on Story 1.6 + Clerk.md

Epic 4 (Entitlements) ← depends on Epic 1
  ├── 4.1 → 4.2, 4.3, 4.4, 4.5
  └── 4.3 (Gates) → referenced by Epic 7

Epic 5 (Lifecycle) ← depends on Epic 1
  ├── 5.1 → 5.2 → 5.3
  ├── 5.4 (standalone)
  ├── 5.5 (standalone)
  ├── 5.6 (standalone)
  └── 5.7 ← depends on 5.3, 2.5

Epic 6 (Analytics) ← depends on Epic 1
  ├── 6.1 (dashboard — standalone)
  ├── 6.2 ← depends on 1.6
  ├── 6.3 ← depends on 4.1
  ├── 6.4 ← depends on 2.5
  └── 6.5 (standalone)

Epic 7 (UX Polish) ← depends on Epics 2-4
  ├── 7.1 ← depends on 3.1, 4.4
  ├── 7.2 ← depends on 7.1
  ├── 7.3 ← depends on 7.1
  ├── 7.4 ← depends on 2.2
  ├── 7.5 ← depends on all previous epics
  ├── 7.6 ← depends on 2.1
  └── 7.7 ← depends on 4.5
```

### Appendix C — Sprint Allocation (Suggested)

> Assumes 2-week sprints, 1 developer, ~20 story points capacity.

| Sprint | Stories | Points | Focus |
|---|---|---|---|
| Sprint 1 | 1.1, 1.2, 1.3, 1.4, 1.5 | 16 | SDK Foundation |
| Sprint 2 | 1.6, 1.7, 2.1, 2.2 | 19 | Identity Bridge + Offering Fetch |
| Sprint 3 | 2.3, 2.4, 2.5 | 16 | Paywall Experience |
| Sprint 4 | 2.6, 2.7, 3.1 | 14 | Paywall Polish + First Purchase |
| Sprint 5 | 3.2, 3.3, 3.4, 3.5 | 18 | Purchase Flows |
| Sprint 6 | 4.1, 4.2, 4.3 | 15 | Entitlement Enforcement |
| Sprint 7 | 4.4, 4.5, 5.1, 5.2 | 19 | Transitions + Lifecycle Start |
| Sprint 8 | 5.3, 5.4, 5.5, 5.6 | 16 | Lifecycle Management |
| Sprint 9 | 5.7, 6.1, 6.2, 6.3 | 19 | Win-Back + Analytics |
| Sprint 10 | 6.4, 6.5, 7.1 | 16 | Funnel Analytics + Celebration |
| Sprint 11 | 7.2, 7.3 | 13 | Micro-Interactions + Onboarding |
| Sprint 12 | 7.4, 7.5, 7.6, 7.7 | 20 | Value Framing + Accessibility + Themes |

**Total: ~202 story points across 12 sprints (≈ 24 weeks)**

### Appendix D — Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| App Store rejection for missing subscription disclosure text | Medium | High | Story 7.6 implements full Apple-mandated disclosure; test with review checklist |
| RevenueCat SDK update breaks API | Low | High | Pin SDK to major version; monitor release notes; keep adapter layer thin |
| Celebration animations cause frame drops on older devices | Medium | Medium | Story 7.1 requires 60fps on iPhone 13+, graceful degradation on older; profile early |
| Clerk → RevenueCat identity bridge race condition | Medium | High | Story 1.6 implements retry with exponential backoff; extensive unit testing |
| Sandbox accelerated renewals mask production timing bugs | Medium | Medium | Test with real sandbox timing; add logging for all lifecycle state transitions |
| Family Sharing edge cases (leave family during active period) | Low | Medium | Story 5.6; rely on RevenueCat's server-side handling; defensive mapping in 4.1 |
| User purchases on two devices simultaneously | Low | Medium | RevenueCat deduplicates server-side; delegate fires on both devices with same CustomerInfo |
| ATT prompt (if MMP added later) reduces attribution quality | Medium | Low | Story 6.5 defers ATT; Apple Search Ads works without it; design prompt for right moment |
| Paywall A/B test shows losing variant for too long | Medium | Medium | Story 2.3; use RevenueCat Experiments with auto-significance detection; set max runtime |
| Offline user purchases but CustomerInfo doesn't sync | Low | High | StoreKit 2 transaction listener (server-side) + RevenueCat's receipt verification handles this |

---

*Document version: 2.0 — Revised to delegate authentication to Clerk (see Clerk.md). 7 Epics, 47 Stories.*  
*Last updated: 2025*