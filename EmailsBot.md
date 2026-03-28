# Email Anti-Bot Protection — Product Specification

> **Owner:** Product  
> **App:** lumen-lingo-frontend (Next.js)  
> **Goal:** Display contact email to genuine human visitors while making it invisible and inaccessible to crawlers, scrapers, bots, and AI agents — without relying on any external service (no Cloudflare, no CAPTCHA, no third-party APIs).  
> **Principle:** Security through multiple lightweight layers, each independently effective, combined for defence-in-depth.  
> **UX North Star:** The reveal interaction should feel *delightful* — a moment of micro-joy, not a chore.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    HTML Source                        │
│  • Zero email text in DOM                            │
│  • Honeypot traps for bots                           │
│  • No mailto: links, no aria-label leaks             │
├─────────────────────────────────────────────────────┤
│              JavaScript Assembly Layer                │
│  • Email fragments in shuffled, encoded arrays       │
│  • Base64 + XOR + reverse assembly at runtime        │
│  • Assembled only after human signal confirmed       │
├─────────────────────────────────────────────────────┤
│           Human Verification UX Layer                │
│  • Delightful interaction gate (hold-to-reveal)      │
│  • Behavioural signals (mouse, scroll, timing)       │
│  • Progressive disclosure with animated feedback     │
├─────────────────────────────────────────────────────┤
│              Bot Detection Engine                     │
│  • Honeypot field detection                          │
│  • Navigator / WebDriver / headless checks           │
│  • Timing + interaction pattern analysis             │
├─────────────────────────────────────────────────────┤
│           Accessibility & Fallbacks                   │
│  • Screen reader compatible reveal                   │
│  • Keyboard-accessible interaction                   │
│  • No-JS contact form fallback                       │
├─────────────────────────────────────────────────────┤
│            Monitoring & Analytics                     │
│  • Bot attempt counters (PostHog)                    │
│  • Reveal success/failure rates                      │
│  • Honeypot trigger rates                            │
└─────────────────────────────────────────────────────┘
```

---

## Terminology

| Term | Definition |
|------|-----------|
| **Reveal** | The moment the email becomes visible to the user |
| **Gate** | The interaction a human must perform to trigger the reveal |
| **Signal** | A behavioural data point indicating human or bot |
| **Honeypot** | An invisible trap element that only bots interact with |
| **Assembly** | Runtime reconstruction of the email from encoded fragments |
| **Confidence score** | Numeric score (0–100) representing likelihood the visitor is human |

---

# Epic 1 — Email Obfuscation Layer

> **Goal:** Ensure the email address never appears in the HTML source, network responses, meta tags, or any DOM state accessible without JavaScript execution and verified human interaction.

## Story 1.1 — Fragment & Encode the Email at Build Time

**As a** developer  
**I want** the email address to be split into fragments, individually encoded, and embedded as a shuffled array in the JS bundle  
**So that** no single string in the source code or build output contains a recognisable email

### Acceptance Criteria

- [x] AC1: The raw email string (`hello@lumenlingo.com` or equivalent) does NOT appear anywhere in the built `.js`, `.html`, or `.json` files — verified by `grep -r` across the `.next/` output
- [x] AC2: The email is split into at least 4 fragments (e.g. `["hel","lo@","lumen","lingo",".com"]`)
- [x] AC3: Each fragment is individually Base64-encoded, then the array order is shuffled with an index map
- [x] AC4: A lightweight XOR cipher (using a rotating key derived from a non-secret site constant like the locale) is applied on top of Base64
- [x] AC5: The assembly function reconstructs the email only when called — it is never called at module scope or during SSR
- [x] AC6: The email value is stored in a single `email-config.ts` constants file so changing the address requires editing exactly one file
- [x] AC7: A unit test verifies that the assembly function produces the correct email
- [x] AC8: A build-time lint script (or test) greps the `.next/` output and fails if the raw email appears

### Tasks

- [x] T1.1.1: Create `src/lib/email-config.ts` with the raw email as a single constant (used only at dev/build time for encoding)
- [x] T1.1.2: Create `src/lib/email-encoder.ts` — build-time utility that splits, Base64-encodes, XOR-ciphers, and shuffles fragments; exports the encoded array + index map + XOR key constant
- [x] T1.1.3: Create `src/lib/email-assembler.ts` — runtime-only function that reverses the encoding and returns the email string; takes no parameters (reads from embedded constants)
- [x] T1.1.4: Add unit tests for `email-encoder.ts` and `email-assembler.ts` — round-trip test confirms encode→decode = original
- [x] T1.1.5: A vitest test verifies the assembler source contains no raw email strings

---

## Story 1.2 — Prevent SSR Email Leakage

**As a** developer  
**I want** the email assembly and any email-displaying component to be strictly client-side only  
**So that** server-rendered HTML, RSC payloads, and `<head>` meta never contain the email

### Acceptance Criteria

- [x] AC1: The email reveal component uses `'use client'` directive
- [x] AC2: The assembly function is never imported in any server component or `layout.tsx` / `page.tsx` server module
- [x] AC3: Viewing the page source (`curl` / View Source) shows zero email-like strings — verified manually and by automated test
- [x] AC4: The RSC payload (`__NEXT_DATA__`, flight data) contains no email fragments
- [x] AC5: No `<meta>` tag (Open Graph, JSON-LD, etc.) contains the email
- [x] AC6: No `mailto:` link exists in the SSR output

### Tasks

- [x] T1.2.1: Create the email reveal component as a `'use client'` component in `src/components/contact/email-reveal.tsx`
- [x] T1.2.2: Audit all `<meta>`, JSON-LD, and Open Graph tags across the site — ensure none reference the email
- [x] T1.2.3: Removed hardcoded `mailto:` and raw email from `contact-section.tsx` — now uses `assembleEmail()` client-side only
- [x] T1.2.4: Contact section now shows obfuscated placeholder (••••••@••••••••.com) until user clicks to reveal

---

## Story 1.3 — DOM Sanitisation After Reveal

**As a** developer  
**I want** the revealed email to be removed from the DOM after a timeout or when the user navigates away  
**So that** a delayed DOM scraper or browser extension cannot harvest it at leisure

### Acceptance Criteria

- [x] AC1: After the email is revealed, it remains visible for exactly 30 seconds (configurable) before being replaced by a "Show again" prompt
- [x] AC2: The email text node is removed from the DOM — not hidden with CSS, but actually unmounted
- [x] AC3: If the user clicks "Show again", the human verification gate is re-applied (not bypassed)
- [x] AC4: When the user navigates to another route (Next.js client navigation), any revealed email is immediately unmounted
- [x] AC5: The `copy to clipboard` button (Story 2.3) copies on click and doesn't store the email in any persistent client state (no localStorage, no sessionStorage, no cookie)

### Tasks

- [x] T1.3.1: Implement a `useEmailRevealTimer` hook: starts a 30s countdown after reveal, returns `{ isRevealed, timeRemaining, reset }`
- [x] T1.3.2: On timer expiry, unmount the email text node and show a "Show again" button with the same gate
- [x] T1.3.3: Subscribe to Next.js `routeChangeStart` (or `usePathname` change) to unmount on navigation
- [x] T1.3.4: Verified with unit tests (7 passing) that timer expires correctly, state resets, and cleanup runs on unmount

---

## Story 1.4 — Honeypot Email Trap

**As a** developer  
**I want** a hidden honeypot element in the DOM that looks like an email link to a bot but is invisible to humans  
**So that** automated scrapers harvest a decoy address (or trigger detection) instead of the real one

### Acceptance Criteria

- [x] AC1: A visually hidden `<a href="mailto:trap@lumenlingo.com">` exists in the DOM, positioned off-screen with CSS (not `display:none` — bots often skip those)
- [x] AC2: The honeypot uses `aria-hidden="true"` and `tabindex="-1"` so screen readers and keyboard users never encounter it
- [x] AC3: The honeypot email is a dedicated trap address that forwards to a "bot detected" analytics event (or `/dev/null`)
- [x] AC4: If any JS interaction (click, focus) is detected on the honeypot, the confidence score drops to 0 and the real reveal is permanently blocked for that session
- [x] AC5: The honeypot is rendered server-side (it's fine for bots to see it — that's the point)

### Tasks

- [x] T1.4.1: Add a honeypot `<a>` element to the contact section, styled off-screen (`position: absolute; left: -9999px; opacity: 0.01`)
- [x] T1.4.2: Attach click + focus event listeners that fire a `bot_honeypot_triggered` analytics event and set a session flag
- [x] T1.4.3: In the reveal gate logic, check the session flag — if set, never reveal the real email
- [x] T1.4.4: Created `email-honeypot.tsx` with trap address, module-scoped bot flag, and 6 passing tests

---

# Epic 2 — Human Verification UX (Delightful Reveal Gate)

> **Goal:** Create a beautiful, frictionless interaction that proves humanity through natural gestures — no puzzles, no CAPTCHAs. The interaction should feel like a *reward*, not a barrier. Think Apple-level polish: smooth spring animations, ambient glow, haptic-feeling micro-interactions.

## Story 2.1 — "Hold to Reveal" Primary Gate

**As a** visitor  
**I want** to press and hold a beautifully designed button for ~1.5 seconds to reveal the email  
**So that** it feels effortless and intuitive while being impossible for simple scripts to replicate (requires sustained pointer/touch input with realistic event timing)

### Acceptance Criteria

- [x] AC1: A pill-shaped button reads "Hold to reveal email" with a subtle pulsing glow invite
- [x] AC2: On press-and-hold (mouse down or touch start), a radial progress ring animates around the button over 1.5 seconds with a spring-damped motion curve
- [x] AC3: The button's background fills with a gradient sweep (left→right) synchronised with the progress ring
- [x] AC4: If the user releases before 1.5 seconds, the progress ring and fill animate back to zero with a gentle spring (not a snap)
- [x] AC5: On successful hold completion: the button morphs into the revealed email with a satisfying scale-spring + fade transition
- [x] AC6: A subtle particle burst (5–8 tiny dots) emanates from the button on successful reveal — celebrating the moment
- [x] AC7: The hold duration is validated against `performance.now()` — programmatic instant `mousedown→mouseup` dispatches (< 200ms) are rejected
- [x] AC8: During the hold, a gentle haptic-like vibration CSS animation (tiny X/Y oscillation, 0.5px) gives tactile feedback
- [x] AC9: The button uses `cursor: grab` on hover, `cursor: grabbing` during hold
- [x] AC10: Mobile: works identically with `touchstart` / `touchend`, including the progress animation

### Tasks

- [x] T2.1.1: Design the pill button component: `<EmailRevealButton />` with idle, holding, and revealed states
- [x] T2.1.2: Implement the radial SVG progress ring (animated `stroke-dashoffset`) with Framer Motion `useMotionValue` + `useTransform`
- [x] T2.1.3: Implement the gradient sweep fill background using `linear-gradient` with animated `background-position`
- [x] T2.1.4: Add the spring-back animation on early release using `motion.animate` with `spring` config
- [x] T2.1.5: Implement the reveal morph transition: button → email text with `layout` animation
- [x] T2.1.6: Create the particle burst effect: 5–8 `motion.div` circles with random velocity vectors, opacity fade, and scale-down
- [x] T2.1.7: Add `performance.now()` timing validation: reject holds shorter than 200ms as bot-like
- [x] T2.1.8: Add the micro-vibration CSS animation (keyframes `translateX(±0.5px)`) during hold state
- [x] T2.1.9: Wire up touch events (`touchstart`, `touchend`, `touchcancel`) with identical logic, preventing scroll during hold via `touch-action: none` on the button
- [x] T2.1.10: Add Framer Motion `whileHover` scale (1.02) and `whileTap` scale (0.98) for polish

---

## Story 2.2 — Ambient Glow & Pulsing Invite Animation

**As a** visitor  
**I want** the email reveal button to have a soft, breathing ambient glow that draws my eye  
**So that** I notice it immediately and feel invited to interact — without it feeling aggressive or flashy

### Acceptance Criteria

- [x] AC1: The button has a soft outer glow (box-shadow) that breathes with a 3-second CSS animation cycle: 40% → 70% opacity
- [x] AC2: The glow colour matches the site's brand palette: a violet→cyan gradient glow
- [x] AC3: On first appearance (when scrolling into view), the button fades in with a gentle `y: 8 → 0` + `opacity: 0 → 1` over 600ms
- [x] AC4: A tiny "envelope" icon (Lucide `Mail` icon) sits to the left of the text, with a subtle 2° rotate wobble on the breathing cycle
- [x] AC5: The glow animation pauses when the button is off-screen (IntersectionObserver) to save GPU
- [x] AC6: `prefers-reduced-motion: reduce` disables the breathing glow and wobble — button renders as a standard static pill

### Tasks

- [x] T2.2.1: Add the breathing glow as a CSS `@keyframes` animation on `box-shadow` with `animation-duration: 3s` and `animation-iteration-count: infinite`
- [x] T2.2.2: Use `IntersectionObserver` (or Framer Motion `whileInView`) to toggle `animation-play-state`
- [x] T2.2.3: Add the Lucide `Mail` icon with a CSS wobble keyframe (`rotate(±2deg)`) synced to the glow timing
- [x] T2.2.4: Add the scroll-in entrance animation using `motion.div` `initial/whileInView` props
- [x] T2.2.5: Wrap all motion in a `prefers-reduced-motion` media query check — disable when reduced motion is preferred

---

## Story 2.3 — One-Click Copy with Micro-Feedback

**As a** visitor who has revealed the email  
**I want** to copy it to my clipboard with one click and see satisfying visual confirmation  
**So that** I don't have to manually select and copy text

### Acceptance Criteria

- [x] AC1: A "Copy" button (Lucide `Copy` icon) appears next to the revealed email
- [x] AC2: On click, the email is copied via `navigator.clipboard.writeText()`
- [x] AC3: The icon morphs from `Copy` → `Check` with a spring scale animation (1 → 1.3 → 1)
- [x] AC4: A small toast-like text "Copied!" fades in below the button, then fades out after 2 seconds
- [x] AC5: The copy button is keyboard-accessible (`Enter` / `Space` triggers copy)
- [x] AC6: If `navigator.clipboard` is unavailable (rare), fall back to `document.execCommand('copy')` with a legacy textarea trick
- [x] AC7: The email string used for copy is read from the in-memory variable — never from DOM `textContent` (defence against DOM tampering)

### Tasks

- [x] T2.3.1: Add the `<CopyEmailButton />` component with `navigator.clipboard.writeText()` logic
- [x] T2.3.2: Implement icon morph: `AnimatePresence` switching between `Copy` and `Check` icons with crossfade
- [x] T2.3.3: Add the "Copied!" toast with `motion.span` fade-in/out
- [x] T2.3.4: Add the `execCommand` fallback behind a feature check
- [x] T2.3.5: Ensure the source of the copied string is the in-memory assembled value, not a DOM query

---

## Story 2.4 — "Send Email" Direct Action Button

**As a** visitor who has revealed the email  
**I want** a "Send Email" button that opens my default mail client with the address pre-filled  
**So that** I can compose a message instantly without manual copy-paste

### Acceptance Criteria

- [x] AC1: A secondary button "Send Email" (Lucide `Send` icon) appears next to the Copy button after reveal
- [x] AC2: Clicking it constructs a `mailto:` URL dynamically in JS and calls `window.location.href = mailtoUrl` — the `mailto:` string is NEVER in DOM or HTML attributes until click
- [x] AC3: The `mailto:` URL is constructed from the same in-memory assembled email, with a blank subject line
- [x] AC4: After click, the button shows a brief "Opening…" state, then resets after 3 seconds
- [x] AC5: The `mailto:` URL is never stored in `href` attribute — it's applied via `window.location` on click to prevent DOM scraping

### Tasks

- [x] T2.4.1: Add `<SendEmailButton />` with dynamic `mailto:` construction on click
- [x] T2.4.2: Ensure the `<a>` or `<button>` has no `href` attribute — purely JS-driven navigation
- [x] T2.4.3: Add the "Opening…" transition state with auto-reset timer
- [x] T2.4.4: Test on iOS Safari, Chrome, and Firefox to confirm mail client launch

---

## Story 2.5 — Countdown Timer Visual During Reveal

**As a** visitor viewing the revealed email  
**I want** to see how much time remains before the email hides again  
**So that** I feel informed (not surprised when it disappears) and motivated to copy it

### Acceptance Criteria

- [x] AC1: A thin circular progress ring (or linear bar) shows the 30-second countdown
- [x] AC2: The ring/bar animates smoothly (not stepping per second) from full to empty
- [x] AC3: At 10 seconds remaining, the progress colour transitions from brand-cyan to warm amber (subtle urgency)
- [x] AC4: At 5 seconds remaining, a gentle pulse animation starts on the countdown ring
- [x] AC5: The timer text shows seconds remaining in a small `text-xs` label: "Visible for 24s"
- [x] AC6: `prefers-reduced-motion` replaces the animated ring with a simple text-only countdown

### Tasks

- [x] T2.5.1: Create `<RevealCountdown />` component with a circular SVG ring driven by `useEmailRevealTimer`
- [x] T2.5.2: Animate `stroke-dashoffset` using `useMotionValue` for buttery 60fps updates
- [x] T2.5.3: Add colour transition at 10s and pulse animation at 5s thresholds
- [x] T2.5.4: Add the "Visible for Xs" text label
- [x] T2.5.5: Add `prefers-reduced-motion` fallback — static text countdown only

---

# Epic 3 — Bot Detection Engine

> **Goal:** Build a lightweight, client-side scoring engine that collects passive behavioural signals and produces a confidence score (0–100) indicating whether the visitor is human. No network calls, no external dependencies. The score gates the reveal — below threshold, the email is never assembled.

## Story 3.1 — Confidence Score Engine

**As a** developer  
**I want** a central `useBotDetection` hook that aggregates multiple signal sources into a single confidence score  
**So that** the reveal gate can make a simple threshold check: `score >= 70 → allow`

### Acceptance Criteria

- [x] AC1: The hook returns `{ score: number, signals: Record<string, boolean>, isHuman: boolean }` where `isHuman = score >= THRESHOLD`
- [x] AC2: The `THRESHOLD` is a configurable constant (default: 70), stored in `email-config.ts`
- [x] AC3: Signals are weighted and summed:
  | Signal | Weight | Condition |
  |--------|--------|-----------|
  | Mouse moved | +15 | ≥ 3 distinct mouse positions recorded |
  | Scroll detected | +15 | ≥ 1 scroll event with non-zero delta |
  | Time on page | +15 | ≥ 3 seconds since component mount |
  | Touch interaction | +15 | ≥ 1 touchstart event (mobile) |
  | Keyboard activity | +10 | ≥ 1 keydown event (any key) |
  | Pointer fine | +10 | `matchMedia('(pointer: fine)')` matches |
  | No WebDriver flag | +10 | `navigator.webdriver !== true` |
  | Honeypot clean | +10 | Honeypot was NOT triggered |
- [x] AC4: The score updates reactively — as signals arrive, `score` recalculates and the component re-renders
- [x] AC5: If the honeypot was triggered (Story 1.4), `score` is locked at 0 regardless of other signals
- [x] AC6: All signal listeners are cleaned up on unmount (no memory leaks)
- [x] AC7: The engine collects signals passively from the moment the contact section enters the viewport — NOT from page load (for performance)

### Tasks

- [x] T3.1.1: Create `src/hooks/use-bot-detection.ts` with the signal aggregation logic
- [x] T3.1.2: Implement each signal collector as a small internal function within the hook
- [x] T3.1.3: Use `useRef` for mutable signal state (avoids unnecessary re-renders during collection) and `useState` for the exported score
- [x] T3.1.4: Debounce the score recalculation to avoid excessive re-renders (recalculate at most every 500ms)
- [x] T3.1.5: Add unit tests mocking `addEventListener`, `navigator.webdriver`, and `matchMedia`
- [x] T3.1.6: Wire the hook into `<EmailRevealButton />` — the button is disabled (visually muted) until `isHuman === true`

---

## Story 3.2 — Mouse Movement Analysis

**As a** developer  
**I want** to capture mouse movement patterns and distinguish human curves from bot straight-lines  
**So that** a bot dispatching synthetic `mousemove` events in a straight line is penalised

### Acceptance Criteria

- [x] AC1: The engine records the last 10 `mousemove` positions `{ x, y, timestamp }`
- [x] AC2: A “straightness” metric is computed: if all 10 points are collinear (within 2px tolerance), the mouse signal weight is halved (+7 instead of +15)
- [x] AC3: A “speed” metric is computed: if all movements happen within < 50ms total (superhuman speed), the mouse signal is zeroed
- [x] AC4: Normal human movement (curved, varied speed) receives full +15 weight
- [x] AC5: Positions are stored in a ring buffer (fixed 10 slots) — no unbounded array growth

### Tasks

- [x] T3.2.1: Implement the ring buffer for mouse positions within `use-bot-detection`
- [x] T3.2.2: Compute the collinearity metric using the cross-product method: `|(x2-x1)(y3-y1) - (y2-y1)(x3-x1)|` for each triplet
- [x] T3.2.3: Compute the speed metric: `totalDistance / totalTime`
- [x] T3.2.4: Adjust the mouse signal weight based on the straightness and speed checks
- [x] T3.2.5: Add unit tests with mock event sequences: human-like curve, robotic straight line, superhuman speed

---

## Story 3.3 — Navigator & Environment Fingerprinting

**As a** developer  
**I want** to check for common bot/headless-browser indicators in `navigator` and `window` objects  
**So that** headless Chrome, Puppeteer, Playwright, and PhantomJS instances are detected

### Acceptance Criteria

- [x] AC1: Check `navigator.webdriver === true` — this is set by all WebDriver-based automation tools
- [x] AC2: Check for `window._phantom`, `window.__nightmare`, `window.callPhantom` — PhantomJS/Nightmare indicators
- [x] AC3: Check `navigator.languages.length === 0` — most bots don’t set language preferences
- [x] AC4: Check `navigator.plugins.length === 0` on desktop (Chrome/Firefox) — headless browsers often have zero plugins
- [x] AC5: Each failed check reduces the confidence score by its weight (see Story 3.1 table) rather than being binary pass/fail
- [x] AC6: These checks run once on mount and do NOT run repeatedly (they’re static properties)
- [x] AC7: None of these checks are blocking — if a check can’t be evaluated (e.g. `navigator.plugins` undefined on mobile), it is skipped and the weight is redistributed

### Tasks

- [x] T3.3.1: Create an `evaluateEnvironment()` function that runs all navigator/window checks and returns a signal result
- [x] T3.3.2: Handle edge cases: Safari doesn’t expose `plugins` the same way, mobile browsers may lack `pointer: fine`
- [x] T3.3.3: Redistribute weight from inapplicable checks to applicable ones (e.g. on mobile, `pointer: fine` weight goes to touch signal)
- [x] T3.3.4: Add unit tests with mocked `navigator` and `window` objects simulating Chrome, headless Chrome, PhantomJS, and mobile Safari

---

## Story 3.4 — Timing & Interaction Cadence Analysis

**As a** developer  
**I want** to measure the timing between the user's first interaction and their attempt to reveal the email  
**So that** bot scripts that rush to the reveal button within milliseconds of page load are blocked

### Acceptance Criteria

- [x] AC1: A minimum “dwell time” of 3 seconds between component mount and reveal attempt is enforced — attempts before 3s are silently ignored (button appears disabled with a subtle “Almost ready…” state)
- [x] AC2: The time-on-page signal tracks `performance.now()` delta from component mount, not from page load (accounts for lazy-loaded sections)
- [x] AC3: If the user scrolls to the contact section and immediately clicks the reveal button (< 500ms after section enters viewport), a +0 weight is assigned for the scroll signal (suspicious)
- [x] AC4: Natural interaction cadence (varied delays between events, 50–2000ms gaps) receives full signal weights
- [x] AC5: Robotic cadence (all events fired within < 100ms of each other, perfectly uniform timing) halves all interaction signal weights

### Tasks

- [x] T3.4.1: Add `mountTimestamp` via `useRef(performance.now())` in the hook
- [x] T3.4.2: Implement the dwell time check in the reveal gate function — if `now - mount < 3000`, return early
- [x] T3.4.3: Track the IntersectionObserver entry time for the contact section and compare to first click
- [x] T3.4.4: Implement the cadence analyser: compute standard deviation of inter-event gaps; low stddev = suspicious
- [x] T3.4.5: Add unit tests simulating rush-click, natural browsing, and robotic cadence scenarios

---

## Story 3.5 — Rate Limiting Reveal Attempts

**As a** developer  
**I want** to limit the number of reveal attempts per session  
**So that** a bot trying brute-force or rapid-fire reveals is throttled

### Acceptance Criteria

- [x] AC1: A maximum of 5 reveal attempts per browser session (using in-memory counter, NOT localStorage) is enforced
- [x] AC2: After 5 failed attempts, the reveal button transitions to a “Please try again later” state with a 60-second cooldown
- [x] AC3: After the cooldown, the counter resets and 5 more attempts are allowed
- [x] AC4: The counter is NOT persisted — refreshing the page resets it (intentional: we don’t want to lock out legitimate users permanently)
- [x] AC5: Each failed attempt (hold too short, score too low) increments the counter; successful reveals do NOT count
- [x] AC6: The cooldown shows a simple countdown text: “Try again in 45s”

### Tasks

- [x] T3.5.1: Add `attemptCount` and `cooldownUntil` refs to the bot detection hook
- [x] T3.5.2: On each failed reveal attempt, increment counter; if counter ≥ 5, start 60s cooldown
- [x] T3.5.3: Implement the cooldown state in `<EmailRevealButton />` — disabled, greyed out, with countdown text
- [x] T3.5.4: After cooldown expiry, reset counter to 0 and re-enable the button
- [x] T3.5.5: Add tests for the rate limiting flow — rapid attempts, cooldown, and reset

---

# Epic 4 — Accessibility & Graceful Fallbacks

> **Goal:** Ensure the email protection system is fully accessible to users with disabilities and degrades gracefully when JavaScript is unavailable. No human should be locked out. WCAG 2.1 AA compliance is mandatory.

## Story 4.1 — Keyboard-Accessible Reveal Interaction

**As a** keyboard-only user  
**I want** to reveal the email using only my keyboard  
**So that** I have the same access as mouse/touch users without any degraded experience

### Acceptance Criteria

- [x] AC1: The reveal button is focusable via `Tab` and has a visible focus ring (`:focus-visible` outline, 2px solid, brand colour)
- [x] AC2: Pressing and holding `Space` or `Enter` triggers the same hold-to-reveal interaction as mouse/touch
- [x] AC3: The `keydown` event starts the timer; `keyup` stops it — matching the pointer behaviour exactly
- [x] AC4: Keyboard repeat events (auto-fire from holding a key) are debounced — only the first `keydown` starts the timer, subsequent repeats are ignored
- [x] AC5: The focus ring is distinct from the ambient glow and visible on all background colours (light and dark mode)
- [x] AC6: After reveal, focus moves to the email text (via `role="status"` + `aria-live="polite"`) so screen reader users are informed
- [x] AC7: The `Escape` key cancels a hold-in-progress and resets the button to idle state

### Tasks

- [x] T4.1.1: Add `onKeyDown` / `onKeyUp` handlers to `<EmailRevealButton />` for `Space` and `Enter`
- [x] T4.1.2: Debounce keyboard repeat by tracking `event.repeat` — ignore if `true`
- [x] T4.1.3: Add `Escape` key handler to cancel and reset
- [x] T4.1.4: Style `:focus-visible` ring: `outline: 2px solid var(--color-cyan); outline-offset: 3px`
- [x] T4.1.5: After reveal, programmatically move focus to the email container with `ref.focus()` and `aria-live="polite"`
- [x] T4.1.6: Test with keyboard-only navigation: Tab → Space hold → reveal → Tab to Copy → Enter to copy

---

## Story 4.2 — Screen Reader Announcements

**As a** screen reader user  
**I want** clear announcements at each stage of the reveal process  
**So that** I understand what's happening without visual cues

### Acceptance Criteria

- [x] AC1: The reveal button has `aria-label="Press and hold to reveal contact email address"`
- [x] AC2: During the hold, an `aria-live="assertive"` region announces "Revealing…" (once, not repeatedly)
- [x] AC3: On successful reveal, the region announces "Email address revealed: [email]. Visible for 30 seconds."
- [x] AC4: On reveal timeout, the region announces "Email hidden. Press the button to reveal again."
- [x] AC5: On copy success, the region announces "Email address copied to clipboard."
- [x] AC6: The honeypot element has `aria-hidden="true"` (already specified in Story 1.4)
- [x] AC7: The countdown timer has `aria-label="Time remaining"` and updates every 10 seconds (not every second — to avoid screen reader spam)

### Tasks

- [x] T4.2.1: Add `aria-label` to the reveal button
- [x] T4.2.2: Create a visually-hidden `<div aria-live="assertive">` announcement region in the email reveal component
- [x] T4.2.3: Set the announcement text at each state transition (idle → holding → revealed → hidden)
- [x] T4.2.4: For the copy button, set the announcement on successful clipboard write
- [x] T4.2.5: Throttle countdown `aria-label` updates to every 10 seconds
- [x] T4.2.6: Test with VoiceOver (macOS) and NVDA (if available) — full flow from button discover to copy

---

## Story 4.3 — No-JavaScript Contact Form Fallback

**As a** visitor with JavaScript disabled (or blocked)  
**I want** a server-rendered contact form that lets me send a message without seeing the email  
**So that** I can still reach the team even though the JS-dependent reveal gate doesn't work

### Acceptance Criteria

- [x] AC1: A `<noscript>` block inside the contact section renders a simple server-side contact form
- [x] AC2: The form has fields: Name (required), Email (required, validated), Message (required, max 2000 chars)
- [x] AC3: The form submits via a Next.js Server Action (POST) — no client JS needed
- [x] AC4: The Server Action validates all fields server-side (XSS sanitization, email format check, length limits)
- [x] AC5: On success, a "Message sent! We'll reply to your email." confirmation is shown (full page reload is acceptable)
- [x] AC6: The form includes a hidden honeypot field (empty text input, CSS hidden) — if filled, the submission is silently accepted but discarded (bot trap)
- [x] AC7: Rate limiting: max 3 submissions per IP per hour (checked server-side via a simple in-memory map, not an external service)
- [x] AC8: The form is styled to match the site's design system (glass surface, rounded corners, brand colours) using CSS-only (no Tailwind JS)

### Tasks

- [x] T4.3.1: Create `src/components/contact/contact-form-fallback.tsx` — a server component with `<noscript>` wrapper
- [x] T4.3.2: Create the Server Action in `src/app/[locale]/actions/send-contact.ts` with validation, honeypot check, and rate limiting
- [x] T4.3.3: Implement the in-memory rate limiter (Map of IP → timestamps, cleaned every 10 minutes)
- [x] T4.3.4: Style the form with CSS classes matching the design system
- [x] T4.3.5: Add server-side input sanitization (strip HTML tags, trim whitespace, validate email regex)
- [x] T4.3.6: Test with JS disabled in browser: form renders, submits, and shows confirmation
- [x] T4.3.7: Test honeypot: submit with hidden field filled → accepted but not delivered

---

## Story 4.4 — Reduced Motion & High Contrast Support

**As a** visitor who prefers reduced motion or uses high-contrast mode  
**I want** the email reveal interaction to work without animations and with clear contrast  
**So that** I'm not disoriented by motion or unable to see UI elements

### Acceptance Criteria

- [x] AC1: When `prefers-reduced-motion: reduce` is active: no breathing glow, no particle burst, no spring animations — reveal is an instant opacity fade (200ms)
- [x] AC2: The hold progress is shown as a simple numeric percentage text (e.g., "67%") instead of the animated ring
- [x] AC3: When `prefers-contrast: more` is active: all borders are 2px solid (not subtle glass-border), text uses full `foreground` colour (not muted)
- [x] AC4: The reveal button meets WCAG AA contrast ratio (≥ 4.5:1) in both light and dark mode — verified with a contrast checker
- [x] AC5: All interactive elements have minimum 44×44px touch targets

### Tasks

- [x] T4.4.1: Add `@media (prefers-reduced-motion: reduce)` overrides in the email reveal component
- [x] T4.4.2: Replace animated ring with percentage text when reduced motion is preferred
- [x] T4.4.3: Add `@media (prefers-contrast: more)` overrides for borders and text colours
- [x] T4.4.4: Audit all interactive elements with a contrast checker and fix any violations
- [x] T4.4.5: Verify minimum touch target sizes on all buttons (add padding if needed)

---

# Epic 5 — Monitoring, Analytics & Hardening

> **Goal:** Instrument the email protection system with analytics to understand bot attack patterns, measure human success rates, and continuously harden defences based on real data.

## Story 5.1 — PostHog Event Tracking

**As a** product owner  
**I want** key events tracked in PostHog so I can monitor the health and effectiveness of the email protection  
**So that** I can make data-driven decisions about threshold tuning and UX improvements

### Acceptance Criteria

- [x] AC1: The following events are tracked (all with `email_protection_` prefix):
  | Event Name | Trigger | Properties |
  |-----------|---------|-----------|
  | `email_protection_gate_started` | User begins hold interaction | `{ source: 'mouse' \| 'touch' \| 'keyboard' }` |
  | `email_protection_gate_abandoned` | User releases before completion | `{ holdDuration: number, source }` |
  | `email_protection_gate_succeeded` | Hold completed, score passed | `{ holdDuration, score, signals }` |
  | `email_protection_gate_blocked` | Hold completed but score too low | `{ holdDuration, score, signals }` |
  | `email_protection_email_revealed` | Email assembled and shown | `{ score }` |
  | `email_protection_email_copied` | User clicked Copy | `{}` |
  | `email_protection_email_sent` | User clicked Send Email | `{}` |
  | `email_protection_email_timeout` | 30s timer expired, email hidden | `{ wasInteracted: boolean }` |
  | `email_protection_honeypot_triggered` | Bot interacted with honeypot | `{ interactionType: 'click' \| 'focus' }` |
  | `email_protection_rate_limited` | Too many failed attempts | `{ attemptCount }` |
  | `email_protection_noscript_form_submitted` | No-JS form used | `{ honeypotFilled: boolean }` |
- [x] AC2: All events use `posthog.capture()` from the existing PostHog integration
- [x] AC3: No PII is included in any event (no email address, no user name)
- [x] AC4: Events fire only on production (not in development mode — use `process.env.NODE_ENV` check)
- [x] AC5: A PostHog dashboard "Email Protection" is documented with suggested widgets (funnels, trends)

### Tasks

- [x] T5.1.1: Create `src/lib/email-analytics.ts` with typed event functions (one per event) wrapping `posthog.capture()`
- [x] T5.1.2: Add the `NODE_ENV` guard — all functions are no-ops in development
- [x] T5.1.3: Wire each event function into the corresponding component/hook at the correct trigger point
- [x] T5.1.4: Verify events appear in PostHog dev tools (Activity tab) during staging testing
- [x] T5.1.5: Document the suggested PostHog dashboard configuration in this file (Appendix A)

---

## Story 5.2 — Bot Attack Pattern Logging

**As a** developer  
**I want** detailed signal snapshots logged when a bot is detected  
**So that** I can analyse attack patterns and tighten detection rules over time

### Acceptance Criteria

- [x] AC1: When `score < THRESHOLD` at reveal attempt time, a `console.info` (not `console.log`) outputs a structured JSON object with all signal states — only in development
- [x] AC2: In production, the same snapshot is sent as properties on the `email_protection_gate_blocked` PostHog event
- [x] AC3: The snapshot includes: `{ score, signals: { mouseMoved, scrollDetected, timeOnPage, ... }, environment: { webdriver, phantom, languages, plugins }, timing: { dwellMs, cadenceStdDev } }`
- [x] AC4: No user-identifying data in the snapshot (no IP, no fingerprint, no cookies)
- [x] AC5: Snapshots are capped at 50 per session (in-memory counter) to prevent runaway logging from a bot loop

### Tasks

- [x] T5.2.1: Create a `captureSignalSnapshot()` function in the bot detection hook
- [x] T5.2.2: In development, output via `console.info('[EmailProtection]', snapshot)`
- [x] T5.2.3: In production, include the snapshot as PostHog event properties
- [x] T5.2.4: Add the per-session cap with an in-memory counter
- [x] T5.2.5: Review the snapshot schema to ensure zero PII

---

## Story 5.3 — Defence Hardening: CSS Content Injection Decoy

**As a** developer  
**I want** CSS `::before` / `::after` pseudo-elements to inject decoy email-like text visible only in the DOM inspector  
**So that** bots parsing `getComputedStyle` or `::before` content encounter a fake email

### Acceptance Criteria

- [x] AC1: The contact section container has a `::before` pseudo-element with `content: "contact [at] lumenlingo-support [dot] fake"` — a obviously fake but email-like string
- [x] AC2: The pseudo-element is `position: absolute; width: 1px; height: 1px; overflow: hidden; opacity: 0` — invisible to humans
- [x] AC3: The decoy text uses `[at]` and `[dot]` patterns intentionally — some bots parse these into email addresses
- [x] AC4: A second `::after` with `content: attr(data-contact)` pulls from a data attribute containing another decoy — `data-contact="noreply@lumenlingo.example"`
- [x] AC5: Both decoys are added server-side (they're CSS, no JS needed) and serve as additional honeypot layers

### Tasks

- [x] T5.3.1: Add the `::before` and `::after` CSS rules to the contact section's class
- [x] T5.3.2: Add the `data-contact` attribute with the decoy value to the contact section wrapper
- [x] T5.3.3: Verify the decoy appears in Chrome DevTools "Computed" styles but not in the visible page
- [x] T5.3.4: Ensure screen readers do not read the pseudo-element content (they shouldn't, but verify)

---

## Story 5.4 — Automated E2E Test Suite

**As a** developer  
**I want** a comprehensive Playwright E2E test suite covering the full email protection flow  
**So that** regressions are caught before deployment

### Acceptance Criteria

- [x] AC1: Test: page source (no JS) contains zero `@` followed by domain patterns → email not in SSR
- [x] AC2: Test: with JS enabled, initial DOM contains no email-like strings before interaction
- [x] AC3: Test: clicking and holding the reveal button for < 500ms does NOT reveal the email
- [x] AC4: Test: clicking and holding the reveal button for ≥ 1500ms reveals the email (with human-like mouse movement first)
- [x] AC5: Test: revealed email matches the expected address
- [x] AC6: Test: after 30s, the email is no longer in the DOM
- [x] AC7: Test: clicking Copy puts the correct email on the clipboard
- [x] AC8: Test: interacting with the honeypot blocks future reveals
- [x] AC9: Test: the `<noscript>` form renders when JS is disabled
- [x] AC10: All tests run in CI on every PR

### Tasks

- [x] T5.4.1: Create `e2e/email-protection.spec.ts` with the test file skeleton
- [x] T5.4.2: Implement SSR no-email test (fetch page with `javaScriptEnabled: false`)
- [x] T5.4.3: Implement initial DOM no-email test
- [x] T5.4.4: Implement hold-too-short test (mousedown → 400ms → mouseup → assert no email)
- [x] T5.4.5: Implement successful reveal test (simulate mouse movements, then hold for 1600ms)
- [x] T5.4.6: Implement DOM sanitisation test (wait 31s after reveal → email gone)
- [x] T5.4.7: Implement clipboard copy test
- [x] T5.4.8: Implement honeypot block test (click honeypot → try reveal → blocked)
- [x] T5.4.9: Implement noscript fallback test
- [x] T5.4.10: Add the test file to CI pipeline (Playwright config already exists)

---

# Appendix A — Suggested PostHog Dashboard

```
Dashboard: "Email Protection"

Widget 1 — Funnel: Reveal Success Rate
  Steps: gate_started → gate_succeeded → email_revealed → email_copied
  Breakdown: by source (mouse/touch/keyboard)

Widget 2 — Trend: Bot Blocks Over Time
  Event: gate_blocked
  Period: daily
  Breakdown: by top signal failures

Widget 3 — Trend: Honeypot Triggers
  Event: honeypot_triggered
  Period: daily

Widget 4 — Number: Noscript Form Usage
  Event: noscript_form_submitted
  Filter: honeypotFilled = false (real submissions only)

Widget 5 — Trend: Rate Limit Hits
  Event: rate_limited
  Period: daily
```

---

# Appendix B — Implementation Priority

| Priority | Stories | Rationale |
|----------|---------|-----------|
| **P0 — Ship first** | 1.1, 1.2, 2.1, 3.1 | Core protection: encoded email + client-only + hold gate + scoring engine |
| **P1 — Fast follow** | 1.4, 2.2, 2.3, 3.3, 4.1, 4.2 | Honeypot, polish animations, copy UX, env checks, a11y |
| **P2 — Harden** | 1.3, 2.4, 2.5, 3.2, 3.4, 3.5, 5.3 | DOM cleanup, send button, countdown, mouse analysis, timing, rate limit, CSS decoy |
| **P3 — Monitor** | 4.3, 4.4, 5.1, 5.2, 5.4 | No-JS fallback, reduced motion, analytics, logging, E2E tests |

---

# Appendix C — File Structure

```
src/
├── lib/
│   ├── email-config.ts          # Single source of email address
│   ├── email-encoder.ts         # Build-time: fragment → encode → shuffle
│   ├── email-assembler.ts       # Runtime: decode → reassemble
│   └── email-analytics.ts       # PostHog event wrappers
├── hooks/
│   └── use-bot-detection.ts     # Confidence score engine
├── components/
│   └── contact/
│       ├── email-reveal.tsx     # Main 'use client' orchestrator
│       ├── email-reveal-button.tsx  # Hold-to-reveal button
│       ├── copy-email-button.tsx    # Copy to clipboard
│       ├── send-email-button.tsx    # mailto: launcher
│       ├── reveal-countdown.tsx     # Timer ring
│       └── contact-form-fallback.tsx # noscript server-rendered form
├── app/
│   └── [locale]/
│       └── actions/
│           └── send-contact.ts  # Server Action for no-JS form
└── e2e/
    └── email-protection.spec.ts  # Playwright E2E suite
```

---

# Appendix D — Security Model Summary

| Attack Vector | Defence Layer | Story |
|--------------|--------------|-------|
| HTML/source scraping | Email never in SSR output | 1.2 |
| JS bundle string search | XOR + Base64 + fragment + shuffle | 1.1 |
| DOM scraping after load | Assembly only after human gate | 2.1 |
| DOM scraping after reveal | 30s auto-unmount | 1.3 |
| `mailto:` link harvesting | No `href`, dynamic JS navigation | 2.4 |
| CSS `content` / attr scraping | Decoy pseudo-elements | 5.3 |
| Headless browser scraping | Navigator/environment checks | 3.3 |
| Synthetic event dispatch | Timing + cadence + movement analysis | 3.2, 3.4 |
| Brute force reveal attempts | Rate limiting (5 per session) | 3.5 |
| Honeypot-unaware bots | Decoy mailto: trap | 1.4 |
| Non-JS bots submitting forms | Server-side honeypot + rate limit | 4.3 |

---

*End of specification — 5 Epics · 19 Stories · 95 Acceptance Criteria · 88 Tasks*
