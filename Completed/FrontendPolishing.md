# Frontend Polishing — Product Backlog

> **Document owner:** Product  
> **Last updated:** 2026-03-25  
> **Target:** lumen-lingo-frontend (Next.js 16 / React 19 / Tailwind v4)  
> **Design system:** Dark-first glass-morphism · Violet / Cyan / Amber palette · Inter + Cabinet Grotesk  
> **Guiding principle:** Every pixel, every transition, every micro-interaction must feel like it was placed by someone who genuinely cares. Users should never wonder "why does this feel off?" — they should wonder "how does this feel so *right*?"

---

## Table of Contents

- [Epic 1 — Unified Icon System](#epic-1--unified-icon-system)
- [Epic 2 — Homepage & Hero Polish](#epic-2--homepage--hero-polish)
- [Epic 3 — Interactive Demo Refinement](#epic-3--interactive-demo-refinement)
- [Epic 4 — Pricing Page Craftsmanship](#epic-4--pricing-page-craftsmanship)
- [Epic 5 — Features Page Overhaul](#epic-5--features-page-overhaul)
- [Epic 6 — Blog Experience Excellence](#epic-6--blog-experience-excellence)
- [Epic 7 — Navigation & Header Perfection](#epic-7--navigation--header-perfection)
- [Epic 8 — Footer & Newsletter Delight](#epic-8--footer--newsletter-delight)
- [Epic 9 — Form UX & Validation Craft](#epic-9--form-ux--validation-craft)
- [Epic 10 — Motion & Animation System](#epic-10--motion--animation-system)
- [Epic 11 — Loading & Skeleton States](#epic-11--loading--skeleton-states)
- [Epic 12 — Accessibility Deep Pass](#epic-12--accessibility-deep-pass)
- [Epic 13 — Download Page Conversion-Craft](#epic-13--download-page-conversion-craft)
- [Epic 14 — Early Access & Waitlist](#epic-14--early-access--waitlist)
- [Epic 15 — Legal Page Typographic Excellence](#epic-15--legal-page-typographic-excellence)
- [Epic 16 — Error & Empty States](#epic-16--error--empty-states)
- [Epic 17 — Performance & Core Web Vitals](#epic-17--performance--core-web-vitals)
- [Epic 18 — Cookie Consent Polish](#epic-18--cookie-consent-polish)
- [Epic 19 — Mobile Responsive Deep Polish](#epic-19--mobile-responsive-deep-polish)
- [Epic 20 — Cross-Page Harmony Audit](#epic-20--cross-page-harmony-audit)
- [Epic 21 — Pre-Launch Integrity & Content Truthfulness](#epic-21--pre-launch-integrity--content-truthfulness)

---

## Epic 1 — Unified Icon System ✅ COMPLETED

**Goal:** Eliminate the current inconsistency where some features use raw Unicode emojis (🃏, 🧠, 🎧, 🔮, 📊, 👑) while others use hand-crafted SVG icons. A premium product must never mix playground emojis with bespoke design. Every icon across every page must come from a single, cohesive, purpose-built icon set that reinforces the glass-morphism cosmic aesthetic.

**Current problem:** The features-content.tsx component contains beautiful custom SVG icons for each feature (flashcards, spaced repetition, soundscapes, etc.) but the screenshot-gallery.tsx, iphone-mockup.tsx, and download-showcase.tsx components use emoji characters (🃏, 🧠, 🎧) for the same features. The animated-walkthroughs.tsx uses yet another set of emojis (☕, 🌊, 🌌, 🇫🇷, ⛰️) for soundscape presets. This three-way split undermines the premium feel.

**Files affected:** `src/components/home/screenshot-gallery.tsx`, `src/components/home/iphone-mockup.tsx`, `src/components/download/download-showcase.tsx`, `src/components/features/animated-walkthroughs.tsx`, `src/components/features/features-content.tsx`, `src/components/features/features-hero.tsx`, `src/components/pricing/pricing-hero.tsx`, `src/components/demo/flashcard-demo.tsx`

---

### Story 1.1 — Create a Centralised Icon Component Library ✅ COMPLETED

**As a** developer working on any page,  
**I want** a single `src/components/icons/` directory containing all product icons as named React components,  
**So that** every feature, page, and preview uses the exact same icon for the same concept — with zero duplication, zero emojis, and pixel-perfect consistency.

**Acceptance Criteria:**

1. A new directory `src/components/icons/` exists containing an `index.ts` barrel export.
2. Each icon is a standalone React component accepting `className`, `size` (default 24), and standard SVG props — e.g. `<FlashcardIcon size={32} className="text-violet" />`.
3. The following icons are created, each as a 24×24 viewBox SVG with 1.5px stroke weight (matching the design system's refined aesthetic):
   - `FlashcardIcon` — stylised card with flip indicator (replaces 🃏 and the inline flashcard SVG)
   - `SpacedRepetitionIcon` — clock face with curved repeat arrow (replaces 🧠 in spaced-rep context)
   - `PracticeModeIcon` — grid of four tiles with one highlighted (replaces 🎯 and inline grid SVG)
   - `SoundscapeIcon` — layered sound waves radiating from a centre point (replaces 🎵, 🎧, and inline wave SVG)
   - `BreathingOrbIcon` — concentric circles with gentle pulse implied by varying opacity (replaces 🔮 and inline animated circles)
   - `ProgressIcon` — ascending bar chart with subtle upward arrow (replaces 📊 and inline bar-chart SVG)
   - `LanguagePairIcon` — overlapping speech bubbles with different scripts (replaces 🌍 and inline globe SVG)
   - `MembershipIcon` — tiered crown / laurel symbol (replaces 👑 and inline star-pedestal SVG)
   - `BrainIcon` — clean brain silhouette for learning/intelligence context (replaces 🧠 in hero badges)
   - `DesignIcon` — pen-tool / bezier-curve for design context (replaces 🎨)
   - `DeviceIcon` — smartphone outline (replaces 📱)
   - `DiamondIcon` — faceted gem for premium contexts (replaces 💎)
   - `SparkleIcon` — four-point sparkle star (replaces ✨)
4. Every icon uses `currentColor` for fill/stroke so it inherits text colour from its parent — enabling tier-specific colouring (violet, cyan, amber) without prop gymnastics.
5. Every icon component sets `aria-hidden="true"` by default and accepts an optional `aria-label` prop to override — so decorative icons are silent to screen readers by default, but can be made accessible when used as the sole content of a button.
6. A Storybook-style visual catalogue is not required; instead, a simple `icons/README.md` documents each icon name and its semantic purpose.
7. No emoji characters (Unicode) remain in any `.tsx` file outside of blog MDX callout blocks (💡, ✨, ⚠️, 🔬, ✅), which are acceptable in editorial content.

---

### Story 1.2 — Replace Emoji Icons in Screenshot Gallery & iPhone Mockup ✅ COMPLETED

**As a** visitor exploring the homepage,  
**I want** the screenshot gallery carousel and the interactive iPhone mockup to display the same refined SVG icons used on the features page,  
**So that** the app previews feel cohesive with the rest of the site and reinforce the premium brand, rather than looking like placeholder prototypes.

**Acceptance Criteria:**

1. `screenshot-gallery.tsx` replaces the `emoji` string property in each gallery item's data object with a `icon: React.ComponentType` reference from the icon library (Story 1.1).
2. `iphone-mockup.tsx` replaces all emoji tab indicators (🃏, 🧠, 🎧, 📊, 🔮) with the corresponding icon components rendered at `size={16}` in the tab bar.
3. `download-showcase.tsx` replaces emoji labels with icon components.
4. Each icon renders at a size that maintains the existing layout rhythm — no layout shift, no text-baseline misalignment.
5. Icons inherit the existing text colour (e.g. `text-foreground-secondary`) so they integrate seamlessly with surrounding label text.
6. On hover, the active screenshot's icon in the gallery gains a subtle glow matching the design system's `shadow-glow-violet` token — providing a "this is alive" feeling.
7. Visual regression: the carousel + mockup remain visually identical in layout and spacing; only the icon rendering changes from emoji to SVG.
8. All icon `<svg>` elements carry `aria-hidden="true"` since the adjacent text label provides the accessible name.

---

### Story 1.3 — Replace Emoji Icons in Soundscape Walkthrough ✅ COMPLETED

**As a** visitor watching the animated soundscape walkthrough on the features page,  
**I want** each soundscape preset (Coffee Shop, Ocean Waves, Deep Space, Paris Café, Mountain Stream) to display a beautifully designed SVG icon instead of a casual emoji,  
**So that** the walkthrough feels like a polished product demo rather than a chatroom message.

**Acceptance Criteria:**

1. Five new soundscape-specific icons are added to the icon library:
   - `CoffeeShopIcon` — steaming cup silhouette (replaces ☕)
   - `OceanWavesIcon` — stylised wave crest (replaces 🌊)
   - `DeepSpaceIcon` — constellation / nebula dot-pattern (replaces 🌌)
   - `ParisCafeIcon` — Eiffel Tower minimal outline (replaces 🇫🇷 — a flag is the wrong metaphor for a café ambiance)
   - `MountainStreamIcon` — mountain peak with flowing water line (replaces ⛰️)
2. Each icon renders at 20×20px within the walkthrough's soundscape selector row.
3. The icons use `currentColor` and inherit the existing muted foreground colour, brightening to `foreground` on the active/selected preset.
4. The walkthrough animation timing is unchanged — icons fade in with the same stagger as the previous emojis.
5. `aria-hidden="true"` is set on each icon since the preset name text is adjacent.
6. The `prefers-reduced-motion` static frame also shows the SVG icons (not emoji fallbacks).

---

### Story 1.4 — Replace Emoji Icons in Features Hero Badges ✅ COMPLETED

**As a** visitor landing on the features page,  
**I want** the hero badge row (currently showing 📱 🎨 🧠) to use the new `DeviceIcon`, `DesignIcon`, and `BrainIcon` SVG components,  
**So that** the very first visual impression of the features page communicates craftsmanship rather than casualness.

**Acceptance Criteria:**

1. `features-hero.tsx` badge row replaces the three emoji characters with `<DeviceIcon />`, `<DesignIcon />`, `<BrainIcon />` from the icon library.
2. Icons render at `size={16}` inline with the badge text, vertically centred using `flex items-center gap-1.5`.
3. Icons use `text-violet` to match the badge accent colour.
4. `aria-hidden="true"` is set on each icon since badge text provides context.
5. No layout shift — badge dimensions remain identical to the emoji version.

---

### Story 1.5 — Replace Emoji Icons in Pricing Hero Badges ✅ COMPLETED

**As a** visitor viewing the pricing page,  
**I want** the hero badges (currently 💎 "Premium pricing" and ✨ "Free trial included") to use `DiamondIcon` and `SparkleIcon` SVG components,  
**So that** the pricing page's premium positioning is reinforced by every visual element — not undermined by platform-inconsistent emoji rendering.

**Acceptance Criteria:**

1. `pricing-hero.tsx` replaces `💎` with `<DiamondIcon size={14} />` and `✨` with `<SparkleIcon size={14} />`.
2. Each icon is wrapped with `aria-hidden="true"`.
3. Icons use `text-amber` for DiamondIcon (premium connotation) and `text-violet` for SparkleIcon.
4. Badge layout, padding, and typography remain unchanged.
5. Cross-browser: the badges render identically on Chrome, Safari, and Firefox — eliminating the current risk of emoji rendering differently across platforms (Apple vs Google vs Microsoft emoji sets).

---

### Story 1.6 — Replace Emoji Feedback in Flashcard Demo Completion Screen ✅ COMPLETED

**As a** visitor who just completed the interactive flashcard demo,  
**I want** the completion feedback to use elegant, animated SVG icons instead of emoji characters (🎉 / 👏 / 💪),  
**So that** the moment of accomplishment feels cinematic and rewarding — like a premium app experience, not a text message.

**Acceptance Criteria:**

1. Three new celebration icons are added to the icon library:
   - `CelebrationIcon` — party popper / confetti burst (replaces 🎉, used for 80%+ score)
   - `ApplauseIcon` — stylised clapping hands or trophy (replaces 👏, used for 60-79% score)
   - `EncourageIcon` — flexed arm or rising flame (replaces 💪, used for <60% score)
2. `flashcard-demo.tsx` renders the appropriate icon at `size={48}` in the completion screen.
3. Each icon animates in using a spring scale-up (from 0.6 to 1.0, stiffness: 300, damping: 15) with a 200ms delay after the score text appears.
4. The icon colour matches the score sentiment: `text-amber` for celebration (80%+), `text-violet` for applause (60-79%), `text-cyan` for encouragement (<60%).
5. `aria-hidden="true"` is set — the score percentage and text message provide the accessible meaning.
6. The icon has a subtle continuous pulse animation (scale 1.0 → 1.04 → 1.0, duration 2s, infinite) to keep the completion screen feeling alive while the user reads their results.

---

### Story 1.7 — Remove All Remaining Stray Emoji from Non-Editorial Components ✅ COMPLETED

**As a** developer performing a final sweep,  
**I want** a clean-room audit confirming zero Unicode emoji characters remain in any `.tsx` component file,  
**So that** we can confidently state the entire UI uses a unified, accessible, cross-platform-consistent icon language.

**Acceptance Criteria:**

1. A grep/search for Unicode emoji ranges (`[\u{1F300}-\u{1F9FF}]`, `[\u{2600}-\u{26FF}]`, `[\u{2700}-\u{27BF}]`) across `src/components/**/*.tsx` and `src/app/**/*.tsx` returns zero matches.
2. Exception: `src/components/blog/mdx-components.tsx` may retain emoji in the callout block configuration (💡, ✨, ⚠️, 🔬, ✅, 🚀) since these are editorial content, not UI chrome — and each already has `aria-hidden="true"`.
3. No new emoji characters are introduced in any future component without a documented exception in the icon library README.
4. The PR includes a one-line ESLint comment or CI grep check that flags emoji in .tsx files (excluding mdx-components.tsx) to prevent regression.

---

## Epic 2 — Homepage & Hero Polish ✅ COMPLETED

**Goal:** The homepage is the first impression. Every element — from the hero animation to the trust bar to the screenshot carousel — must feel effortless, premium, and magnetically engaging. Visitors should feel the quality before they even read a word.

**Files affected:** `src/app/[locale]/page.tsx`, `src/components/home/hero-section.tsx`, `src/components/home/iphone-mockup.tsx`, `src/components/home/screenshot-gallery.tsx`, `src/components/home/feature-showcase.tsx`, `src/components/home/differentiator-section.tsx`, `src/components/home/cta-banner.tsx`, `src/components/home/gradient-mesh.tsx`

---

### Story 2.1 — Hero Section Entrance Choreography ✅ COMPLETED

**As a** first-time visitor arriving on the homepage,  
**I want** the hero section elements to cascade into view with a carefully timed, spring-based choreography that builds anticipation,  
**So that** I feel an immediate sense of quality and care — the kind of entrance that makes me pause and pay attention.

**Acceptance Criteria:**

1. The hero entrance sequence follows this precise choreography (all springs, no linear tweens):
   - **T+0ms:** Background gradient mesh begins its slow evolving animation (already running).
   - **T+100ms:** The animated badge ("Now available on iOS") fades up with `fadeUp` variant (opacity 0→1, y 16→0), pulsing dot already animating.
   - **T+250ms:** The main headline fades up word-by-word using a stagger of 40ms per word — each word has `opacity 0→1, y 12→0` with spring `stiffness: 200, damping: 20`.
   - **T+450ms:** The subheading fades up as one block (opacity 0→1, y 10→0).
   - **T+600ms:** The two CTA buttons appear simultaneously with `scaleIn` variant (scale 0.92→1, opacity 0→1).
   - **T+750ms:** The trust bar counters (users, ratings, languages) count up from 0 using the `CountUp` component with a duration of 800ms.
   - **T+400ms:** On the right side, the iPhone mockup begins its entrance (opacity 0→1, x 40→0, scale 0.95→1) with a slower spring (stiffness: 120, damping: 18) so it feels like it's floating into position.
2. All timings are defined as a single `heroSequence` variant object in the component (not scattered inline) — making the choreography easy to tune.
3. `prefers-reduced-motion`: all elements appear instantly with no animation; the count-up shows final numbers immediately.
4. The total sequence completes within 1200ms — fast enough that returning visitors don't feel delayed, slow enough that first-timers absorb each element.
5. No content layout shift (CLS) occurs during the sequence — all elements reserve their space from the first paint.

---

### Story 2.2 — iPhone Mockup Interactive Polish ✅ COMPLETED

**As a** visitor exploring the homepage,  
**I want** the iPhone mockup to feel like a real device I can interact with — tabs that respond satisfyingly, screens that transition smoothly,  
**So that** I get an authentic preview of the app's quality and I'm drawn to download it.

**Acceptance Criteria:**

1. The iPhone mockup tab bar at the bottom uses the new SVG icon components (from Epic 1) at `size={16}` with labels in `text-xs`.
2. Tapping/clicking a tab triggers a smooth screen transition:
   - The outgoing screen slides left and fades out (x 0→-20, opacity 1→0, 200ms).
   - The incoming screen slides in from the right and fades in (x 20→0, opacity 0→1, 200ms).
   - The transitions use `AnimatePresence mode="wait"` for clean enter/exit.
3. The active tab icon transitions from `text-foreground-muted` to `text-violet` with a 150ms colour transition.
4. An active tab indicator (2px-high pill below the icon) slides horizontally to the active tab using `layout` animation — the pill physically moves, not just appears/disappears.
5. The mockup's screen area has a subtle inner shadow (`inset 0 0 20px rgba(0,0,0,0.3)`) simulating device screen depth.
6. Auto-rotation: if the user hasn't interacted with the mockup for 5 seconds, it auto-advances to the next tab with the same transition. Interaction (click/tap) resets the 5-second timer.
7. The notch and status bar elements (time, signal, battery) are pixel-aligned and use `text-foreground-muted` at `text-[10px]` — they should feel present but never distracting.
8. Keyboard accessible: arrow keys cycle tabs when the mockup has focus, and each tab is a `role="tab"` inside a `role="tablist"`.

---

### Story 2.3 — Screenshot Gallery Carousel Haptic Feel ✅ COMPLETED

**As a** visitor scrolling through the screenshot gallery,  
**I want** the carousel to feel physically real — with momentum, snap points, and edge resistance,  
**So that** dragging through screenshots feels as satisfying as swiping through a native photo gallery.

**Acceptance Criteria:**

1. The carousel uses Framer Motion's `drag="x"` with `dragElastic={0.15}` (reduced from any higher value) so edge resistance feels firm but not rigid.
2. Screenshots snap to discrete positions using `dragSnapToOrigin={false}` with custom snap logic: on drag end, the carousel lands on the nearest card centre point.
3. A subtle spring overshoot (stiffness: 250, damping: 25) makes the snap feel bouncy-but-controlled — not floaty, not sudden.
4. The active/centred screenshot is at full opacity and scale (1.0), while adjacent cards are at `opacity: 0.5, scale: 0.92` — creating a natural depth-of-field effect.
5. Transitioning between active cards uses a smooth interpolation (useTransform on scroll position) — there is never a hard cut between states.
6. Below the carousel, dot indicators show the current position. The active dot is `w-6 bg-violet` (pill-shaped), inactive dots are `w-2 bg-foreground-muted/30` (circular). Dot transitions use layout animation for the pill width change.
7. On touch devices, the carousel responds to swipe velocity: a fast swipe advances by one card (minimum), a very fast swipe can advance by two.
8. Keyboard: left/right arrow keys advance the carousel. Focus ring appears on the carousel container when focused via keyboard.
9. `prefers-reduced-motion`: snap transitions are instant (no spring), but drag still works.
10. The carousel is wrapped in a `role="region"` with `aria-label="App screenshots"` and each screenshot has `aria-roledescription="slide"`.

---

### Story 2.4 — Feature Showcase Cards Hover Micro-Interactions ✅ COMPLETED

**As a** visitor scanning the feature showcase section on the homepage,  
**I want** each feature card to respond to my cursor with a subtle, delightful micro-interaction that invites exploration,  
**So that** I feel compelled to read every card rather than skimming past them.

**Acceptance Criteria:**

1. Each feature card lifts on hover with the design system's standard card hover: `y: -4, scale: 1.01` with spring `stiffness: 300, damping: 20`.
2. On hover, the card's icon (from the unified icon library) transitions from `text-foreground-muted` to the card's accent colour (`text-violet`, `text-cyan`, or `text-amber` depending on the feature category) over 200ms.
3. On hover, a subtle gradient border appears around the card. The border colour matches the card's accent. The border uses the `glass-border` token as the base, overlaid with a 15% opacity accent colour.
4. On hover, the card's background shifts from `bg-glass` to `bg-glass-hover` — a barely perceptible brightening that registers subconsciously.
5. The card's heading text gains a subtle text-shadow glow matching its accent colour on hover: `0 0 20px rgba(accent, 0.2)`.
6. On mouse-out, all hover effects reverse with the same spring timing — nothing snaps back harshly.
7. Touch devices: the hover state activates on tap and holds for 150ms before the link navigation fires — giving users a flash of the interaction.
8. Cards enter the viewport with staggered `fadeUp` animations (`staggerChildren: 0.08`) triggered `once` at `margin: "-80px"`.
9. Card content is wrapped in a `<Link>` to the corresponding features page anchor, so clicking navigates to the detailed feature section.

---

### Story 2.5 — Differentiator Section Visual Hierarchy ✅ COMPLETED

**As a** visitor who wants to understand why LumenLingo is different from Duolingo, Anki, or Memrise,  
**I want** the differentiator section to present comparisons with crystal-clear visual hierarchy and satisfying reveal animations,  
**So that** I instantly understand the value proposition without having to parse dense text.

**Acceptance Criteria:**

1. Each differentiator point uses a two-column layout: left column shows "Others" (dimmed, `text-foreground-muted`, crossed-out or faded styling), right column shows "LumenLingo" (bright, `text-foreground`, with accent highlight).
2. A thin vertical divider between columns uses a gradient from transparent → `glass-border` → transparent, creating a subtle visual separator.
3. The "LumenLingo" column features are preceded by a small `SparkleIcon` in `text-violet` — visually signalling superiority.
4. Each comparison row reveals with a staggered `fadeUp` animation (stagger: 0.12s) as it enters the viewport.
5. The section heading uses `font-display` (Cabinet Grotesk) at `text-3xl md:text-4xl` with a `text-gradient` (violet → cyan).
6. On hover, each comparison row's LumenLingo column gains a subtle `bg-violet-muted` background highlight (150ms transition).
7. The section has a maximum of 5-6 comparison points to avoid overwhelming — each one is impactful and concise.
8. Mobile: collapses to a single-column stacked layout where "Others" appears above "LumenLingo" for each point, with a clear visual divider between them.

---

### Story 2.6 — CTA Banner Urgency & Warmth ✅ COMPLETED

**As a** visitor who has scrolled through the entire homepage,  
**I want** the bottom CTA banner to feel warm, inviting, and slightly urgent — not pushy,  
**So that** I feel genuinely motivated to download the app rather than feeling pressured.

**Acceptance Criteria:**

1. The CTA banner uses the `glass-card` base with a gradient overlay that shifts from `violet-muted` (left) to `cyan-muted` (right) at 5% opacity — creating a warm, inviting glow without overwhelming.
2. The headline uses `font-display` at `text-2xl md:text-3xl` with `text-gradient` styling.
3. The primary CTA button uses the standard `Button` component at size `lg` with variant `primary`, plus a subtle shimmer animation that plays once on viewport entry (a highlight sweeping left-to-right across the button face, 600ms, ease-out).
4. A secondary text line below the CTA reads the equivalent of "Free to start. No credit card required." in `text-foreground-muted text-sm` — lowering the commitment barrier.
5. The App Store badge sits alongside (desktop) or below (mobile) the CTA button.
6. A trust micro-element shows a small star rating (e.g. "4.9 ★ on the App Store") using the `text-amber` colour.
7. The banner fades in with `scaleIn` variant when it enters the viewport.
8. Between the last content section and the CTA banner, there is exactly `section-y` spacing (80px mobile, 120px desktop) — no more, no less.

---

## Epic 3 — Interactive Demo Refinement ✅ COMPLETED

**Goal:** The flashcard demo is the single most important conversion element on the site. A visitor who completes the demo is dramatically more likely to download the app. Every interaction must feel native-app-quality: the swipe physics, the card flip, the progress feedback, the completion celebration. This demo must make people say "if the website demo feels this good, the app must be incredible."

**Files affected:** `src/components/demo/flashcard-demo.tsx`, `src/app/[locale]/demo/page.tsx`

---

### Story 3.1 — Card Swipe Physics Tuning ✅ COMPLETED

**As a** visitor trying the flashcard demo,  
**I want** the card swipe to feel physically real — with weight, momentum, and satisfying resistance,  
**So that** the interaction feels like handling a real card rather than dragging a `<div>`.

**Acceptance Criteria:**

1. The drag threshold for a committed swipe is 80px horizontal displacement (existing) but with velocity consideration: a fast flick (velocity > 400px/s) commits the swipe even at 50px displacement.
2. During drag, the card rotates proportionally: `rotation = x_offset * 0.06` (max ±12°) — creating a natural tilt as if the card is pivoting on its bottom edge.
3. During drag, the card's shadow dynamically intensifies: at rest `shadow-card`, at max drag `0 12px 40px rgba(0,0,0,0.5)` — the card feels like it's lifting off the surface.
4. Colour feedback during drag:
   - Dragging right: a green tint overlay fades in (from 0% to 15% opacity at threshold), signalling "correct."
   - Dragging left: a red tint overlay fades in (same opacity curve), signalling "skip/incorrect."
   - The tint uses `useTransform` mapped from `x` to opacity — completely smooth, no steps.
5. On release below threshold, the card springs back to centre with `stiffness: 400, damping: 20` — a firm, decisive snap back.
6. On committed swipe, the card exits in the swipe direction with `x: ±300, opacity: 0, rotate: ±15°` over 250ms — fast enough to feel responsive, slow enough to see the exit.
7. The next card enters from beneath (already present but behind) with a spring scale-up from 0.95 to 1.0 — it feels like the deck is alive.
8. Touch events: `touch-action: none` is set on the card to prevent browser scroll interference.
9. Mouse events: cursor changes to `grab` on hover, `grabbing` during drag.

---

### Story 3.2 — Card Flip Animation Premium Feel ✅ COMPLETED

**As a** visitor flipping a flashcard in the demo,  
**I want** the flip to feel three-dimensional — like a real card turning over in space,  
**So that** the reveal of the translation feels like a satisfying moment of discovery.

**Acceptance Criteria:**

1. The flip uses a true 3D `rotateY` transform with `perspective: 1000px` set on the parent container.
2. Flip timing: `duration: 0.4s, ease: [0.4, 0, 0.2, 1]` — fast at the start, decelerating through the middle (where the card is edge-on), and settling gently on the back face.
3. During the flip, at the 90° midpoint (edge-on), there is a brief shadow accent: the card's shadow narrows horizontally simulating an edge — `box-shadow: 0 2px 20px rgba(0,0,0,0.4)`.
4. The front face has `backface-visibility: hidden` and shows the word in the source language with `font-display text-xl` styling.
5. The back face has `backface-visibility: hidden`, `rotateY: 180deg`, and shows:
   - The translation in `font-display text-xl text-violet`
   - A subtle `text-foreground-muted text-sm` pronunciation guide beneath (if available in the demo data)
   - A thin gradient divider between word and guide
6. Tap anywhere on the card to flip. Space/Enter key also flips when the card is focused.
7. The card border gains a momentary violet glow (`shadow-glow-violet`) during the flip, fading by the time the back face is fully revealed — a "magic moment" accent.
8. `prefers-reduced-motion`: flip is instant with a simple cross-fade (150ms) instead of 3D rotation.

---

### Story 3.3 — Progress Bar & Completion Celebration ✅ COMPLETED

**As a** visitor progressing through the flashcard demo,  
**I want** the progress bar to feel alive and the completion moment to be genuinely celebratory,  
**So that** finishing the demo feels like an achievement — motivating me to continue with the real app.

**Acceptance Criteria:**

1. The progress bar fills with a smooth spring animation (stiffness: 100, damping: 15) on each card completion — never jumping instantly.
2. The progress bar fill colour transitions through a gradient as it advances: `from-violet via-cyan to-amber` — so at 33% it's solid violet, at 66% it's shifting to cyan, at 100% it's glowing amber.
3. Each progress increment triggers a brief "pulse" in the bar's height: the bar subtly expands 2px vertically then settles back (spring, 150ms) — a micro-celebration for each card.
4. A small counter label (e.g. "3 / 5") appears above the progress bar in `text-foreground-muted text-xs`, updating with a number-flip animation (outgoing number slides up and fades, incoming slides up from below).
5. On 100% completion:
   - The progress bar shimmer effect activates (a highlight sweeping end-to-end, 1.5s, infinite).
   - A 500ms pause, then the completion screen fades in with `scaleIn` variant.
   - The score is revealed with a `CountUp` animation from 0 to the actual percentage over 600ms.
   - The celebration icon (from Story 1.6) springs in at T+200ms after the score finishes counting.
   - A "Try the full app" CTA button appears at T+800ms with `fadeUp`.
6. The completion screen CTA links to the `/download` page (not an external store link — keeping the user on-site for one more conversion step).
7. Analytics events fire: `demo_card_flipped`, `demo_card_swiped_correct`, `demo_card_swiped_incorrect`, `demo_completed` with score.
8. If the user restarts the demo, the progress resets with a bar "drain" animation (fills backward to 0 over 300ms) before the first card appears.

---

### Story 3.4 — Demo Page Layout & Framing ✅ COMPLETED

**As a** visitor arriving on the dedicated demo page (`/demo`),  
**I want** the page to set the stage properly — explaining what I'm about to experience before I interact,  
**So that** I understand the demo, I'm excited to try it, and the flashcard component has a premium frame around it.

**Acceptance Criteria:**

1. The demo page has a short hero section with:
   - Headline: uses `font-display text-3xl md:text-4xl text-gradient`.
   - Subheading: one sentence explaining the demo in `text-foreground-secondary text-lg`.
   - A "Start Demo" button that smooth-scrolls to the flashcard component.
2. The flashcard demo component is centred on the page within a `glass-card` container with generous padding (`p-8 md:p-12`).
3. Above the flashcard, a subtle instruction line reads "Swipe right for correct, left to skip" (or localised equivalent) in `text-foreground-muted text-sm` with a small left/right arrow icon.
4. The instruction text fades out after the user's first swipe (AnimatePresence exit, 300ms) — it's helpful but not permanent.
5. Below the flashcard demo, a section shows "What you'll get in the full app" with 3-4 feature cards (using icons from Epic 1) linking to `/features`.
6. The page has proper `<title>` and `<meta description>` for SEO — "Try LumenLingo flashcards — interactive demo."
7. The demo background uses a subtle version of the `gradient-mesh` component at 30% opacity — placing the demo in the cosmic aesthetic without competing for attention.

---

## Epic 4 — Pricing Page Craftsmanship ✅ COMPLETED

**Goal:** The pricing page must accomplish two things simultaneously: make the tiers crystal clear and make the premium tiers irresistible. Every card, comparison row, and CTA must be calibrated to guide the user toward the "right" tier for them — while making the upgrade path feel like an invitation, never a gate.

**Files affected:** `src/components/pricing/pricing-hero.tsx`, `src/components/pricing/pricing-grid.tsx`, `src/components/pricing/pricing-card.tsx`, `src/components/pricing/pricing-faq.tsx`, `src/components/pricing/feature-comparison-table.tsx`

---

### Story 4.1 — Pricing Card Tier Personality ✅ COMPLETED

**As a** visitor comparing pricing tiers,  
**I want** each tier card to have a distinct visual personality that instantly communicates its level — from accessible to luxurious,  
**So that** I can feel the difference between tiers before I even read the features.

**Acceptance Criteria:**

1. **Free tier card:**
   - Background: `bg-glass` (standard glass surface).
   - Border: `border-glass-border` (default).
   - Icon: `SparkleIcon` at `size={20}` in `text-foreground-muted`.
   - No special effects.
   - Price text: `text-foreground`.
   - CTA button: variant `secondary` (outlined, not filled).
2. **Pro tier card:**
   - Background: `bg-glass` with a subtle violet tint (`bg-violet-muted` at 5% opacity overlay).
   - Border: `border-violet/20`.
   - Icon: `DiamondIcon` at `size={20}` in `text-violet`.
   - A very subtle violet glow on the card bottom edge: `box-shadow: 0 4px 20px rgba(139,92,246,0.08)`.
   - Price text: `text-violet`.
   - CTA button: variant `primary` (filled violet).
3. **Elite tier card (most popular):**
   - Background: `bg-glass` with a cyan tint (`bg-cyan-muted` at 5% opacity overlay).
   - Border: animated gradient border (violet → cyan, rotating slowly over 4s).
   - "Most Popular" badge above the card: `bg-cyan text-white text-xs font-semibold rounded-pill px-3 py-1`.
   - Badge has a gentle pulse animation: `scale 1.0 → 1.03 → 1.0, 2s infinite ease-in-out`.
   - Shimmer overlay: conic gradient sweep every 8s (already exists — verify it's smooth).
   - Card is vertically elevated by 8px (`-translate-y-2`) relative to siblings — visually pulling it forward.
   - Price text: `text-cyan`.
   - CTA button: variant `primary` with cyan colour override.
4. **Royal tier card:**
   - Background: `bg-glass` with an amber tint (`bg-amber-muted` at 5% opacity overlay).
   - Border: `border-amber/25` with a warm amber glow: `box-shadow: 0 4px 30px rgba(245,158,11,0.1)`.
   - A `MembershipIcon` (crown) at `size={24}` in `text-amber` appears above the tier name.
   - Shimmer overlay: amber-gold conic gradient sweep every 6s (faster than Elite, more luxurious).
   - Price text: `text-amber` using `text-gradient-amber` for an animated gold shimmer.
   - CTA button: variant `primary` with amber colour override and a subtle gold glow on hover.
5. All four cards enter the viewport with staggered `fadeUp` animations: Free at T+0, Pro at T+80ms, Elite at T+160ms, Royal at T+240ms.
6. On hover, each card lifts by -6px with `scale: 1.02` (spring: stiffness 300, damping 20). The Elite card lifts to -14px total (combining its base -8px elevation).
7. Feature list items within each card use the tier-coloured checkmark icon (from the existing SVG paths) — `text-foreground-muted/40` for Free, `text-violet` for Pro, `text-cyan` for Elite, `text-amber` for Royal.

---

### Story 4.2 — Feature Comparison Table Readability ✅ COMPLETED

**As a** visitor who wants to do a detailed tier-by-tier feature comparison,  
**I want** the comparison table to be scannable, elegant, and immediately clear about what each tier includes,  
**So that** I can make an informed decision without squinting at tiny text or confusing check/cross marks.

**Acceptance Criteria:**

1. The table header row is sticky (`position: sticky; top: 64px` — below the fixed header) with `bg-surface/95 backdrop-blur-sm` so tier names remain visible while scrolling vertically through features.
2. Each tier column header shows the tier name, price, and a small tier-coloured dot indicator.
3. Feature rows alternate between `bg-transparent` and `bg-glass` (at 3% opacity) for zebra-striping — subtle but effective for row tracking.
4. "Included" features show the tier-coloured checkmark icon at `size={18}`.
5. "Not included" features show a small dash (`—`) in `text-foreground-muted/30` — never a red X, which feels punitive. The absence should feel neutral, not negative.
6. Feature rows that differ between tiers (i.e. the row where a feature *starts* being available) have a subtle left-border accent in the tier colour of the first tier that includes it — drawing the eye to upgrade opportunities.
7. The table is horizontally scrollable on mobile with a scroll shadow indicator: a soft gradient fade on the right edge when more content is available to scroll into.
8. Category group headers within the table (e.g. "Learning Features", "Customisation", "Support") use `text-foreground-muted text-xs uppercase tracking-wider` styling with a thin bottom border.
9. Hovering over any row highlights the entire row with `bg-glass-hover` transition (150ms) — making it easy to track across columns.
10. The table has `role="table"`, `role="columnheader"`, `role="row"`, `role="cell"` for accessibility. Column headers scope to `col`.

---

### Story 4.3 — Pricing FAQ Accordion Polish ✅ COMPLETED

**As a** visitor with questions about pricing,  
**I want** the FAQ accordion to open and close with buttery-smooth animations and clear visual feedback,  
**So that** finding answers feels effortless and I never feel lost about which question I'm reading.

**Acceptance Criteria:**

1. Each FAQ item uses `AnimatePresence` with a height animation (auto-height measurement via `layout` prop or manual measurement):
   - Opening: height 0→auto, opacity 0→1, duration 300ms, ease `[0.4, 0, 0.2, 1]`.
   - Closing: height auto→0, opacity 1→0, duration 250ms (slightly faster than open for snappiness).
2. The expand/collapse icon rotates 45° on open (+ becomes ×) with a spring animation (stiffness: 300, damping: 20).
3. The question text transitions to `text-foreground` (from `text-foreground-secondary`) when its answer is open — drawing attention to the active question.
4. Only one FAQ item can be open at a time. Opening a new one closes the current one with simultaneous animations (new opens while old closes).
5. The FAQ item border (bottom) uses `border-glass-border`, with the active item gaining `border-violet/30` — a subtle colour cue.
6. Answer text uses `text-foreground-secondary text-base leading-relaxed` with `max-w-prose` for comfortable reading line length.
7. Keyboard accessible: Enter/Space toggles the focused item. Arrow Down/Up moves focus between items. Home/End jump to first/last.
8. `aria-expanded`, `aria-controls`, and `id` attributes are properly wired between the trigger button and the content panel.
9. FAQ items enter the viewport with `fadeUp` stagger animation (0.06s stagger).

---

## Epic 5 — Features Page Overhaul ✅ COMPLETED

**Goal:** The features page is the product's entire story told in one scroll. Every feature must feel compelling, visually distinct, and immediately understandable. The page should make a visitor think: "they've thought of everything — this isn't just another flashcard app."

**Files affected:** `src/components/features/features-hero.tsx`, `src/components/features/features-content.tsx`, `src/components/features/animated-walkthroughs.tsx`, `src/components/features/feature-walkthroughs.tsx`, `src/components/features/feature-section.tsx`, `src/components/features/table-of-contents.tsx`, `src/components/features/language-pair-grid.tsx`

---

### Story 5.1 — Features Page Table of Contents Sidebar Navigation ✅ COMPLETED

**As a** visitor arriving on the features page,  
**I want** a persistent table of contents on the left side that highlights which feature section I'm currently reading and lets me jump to any section,  
**So that** I can navigate the long page efficiently and always know where I am.

**Acceptance Criteria:**

1. On `lg+` screens, a sticky sidebar TOC appears on the left at `top: 96px` (below header + 32px buffer), `max-height: calc(100vh - 128px)`, with `overflow-y: auto` and a custom thin scrollbar styled to match the glass aesthetic.
2. Each TOC item displays the feature name with its corresponding icon (from Epic 1) at `size={14}` alongside the text.
3. The currently active section (determined by `IntersectionObserver` with `rootMargin: "-20% 0px -70% 0px"`) has:
   - Text colour: `text-violet` (transitioning from `text-foreground-muted`).
   - A 2px left border accent in `border-violet` with a `layout` animation for smooth position tracking.
   - Background: `bg-violet-muted` at 5% opacity.
4. Non-active TOC items use `text-foreground-muted` and transition to `text-foreground-secondary` on hover.
5. Clicking a TOC item smooth-scrolls to the target section with `scroll-margin-top: 96px` (accounting for sticky header).
6. On `md` and below: the TOC collapses to a horizontal scrollable chip bar at the top of the content area (below the hero), using `overflow-x: auto` with hidden scrollbar. The active chip has `bg-violet-muted text-violet` styling.
7. TOC items use semantic `<nav aria-label="Feature sections">` with `<a>` links to section IDs.
8. The sidebar fades in with `fadeRight` animation on initial load.

---

### Story 5.2 — Animated Walkthrough Viewport Awareness ✅ COMPLETED

**As a** visitor scrolling through the features page,  
**I want** the animated feature walkthroughs (flashcard flow, focus mode, soundscapes) to automatically play when they're in view and pause when they're off-screen,  
**So that** I always see the animation from the beginning, and the animations don't waste resources when I can't see them.

**Acceptance Criteria:**

1. Each walkthrough animation uses an `IntersectionObserver` with `threshold: 0.4` — the animation starts when 40% of the component is visible.
2. When the animation enters the viewport for the first time, it plays from the beginning (T+0) regardless of how long the page has been loaded.
3. When the user scrolls the animation out of view (less than 10% visible), the animation pauses at its current frame.
4. When the user scrolls it back into view, the animation resumes from where it paused — not from the beginning (avoiding repetitive restarts).
5. If the animation has completed its full cycle while off-screen waiting was never triggered, it loops — but with a 2-second pause between loops (not an instant restart).
6. During the animation exit (scrolling out), no abrupt visual changes occur — the last rendered frame persists.
7. `prefers-reduced-motion`: animations are replaced with a static screenshot of the most representative frame (e.g. a mid-flip flashcard, a selected soundscape preset).
8. Performance: animation updates use `requestAnimationFrame` and are cancelled via the IntersectionObserver disconnect — no animations run off-screen.

---

### Story 5.3 — Feature Section Alternating Layout ✅ COMPLETED

**As a** visitor reading through the feature sections,  
**I want** each feature to alternate between text-left/visual-right and visual-left/text-right layouts,  
**So that** the page has a natural rhythm that keeps my eye moving and prevents visual monotony.

**Acceptance Criteria:**

1. Odd-numbered feature sections (1, 3, 5, 7) use text-left + visual-right layout.
2. Even-numbered feature sections (2, 4, 6, 8) use visual-left + text-right layout.
3. The layout uses CSS grid `grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center` — ample breathing room.
4. On mobile (`< lg`), all sections stack vertically with visual above text — consistent order regardless of desktop layout.
5. Each feature section's text column contains:
   - Feature icon (from Epic 1) at `size={32}` in the tier/category accent colour.
   - Feature name in `font-display text-2xl md:text-3xl`.
   - 2-3 sentence description in `text-foreground-secondary text-base md:text-lg leading-relaxed`.
   - 2-4 bullet points highlighting key capabilities, each with a small checkmark icon in the accent colour.
6. Each feature section's visual column contains either:
   - An animated walkthrough component (for flashcards, focus mode, soundscapes).
   - A static illustration / screenshot with `glass-card` frame (for other features).
7. The text column enters with `fadeUp` and the visual column enters with `fadeLeft` or `fadeRight` (matching its position), with the visual arriving 100ms after the text.
8. Section dividers between features use a thin gradient line (transparent → `glass-border` → transparent) at 50% width, centred.

---

## Epic 6 — Blog Experience Excellence ✅ COMPLETED

**Goal:** The blog is a trust-building and SEO engine. Every blog page — from the index to individual posts — must feel editorial-quality: beautiful typography, satisfying reading experience, smart navigation, and polished content presentation. A visitor reading a blog post should think "this company really knows their stuff."

**Files affected:** `src/components/blog/post-card.tsx`, `src/components/blog/blog-hero.tsx`, `src/components/blog/category-filter.tsx`, `src/components/blog/mdx-components.tsx`, `src/components/blog/table-of-contents.tsx`, `src/components/blog/pagination.tsx`, `src/components/blog/share-buttons.tsx`, `src/components/blog/post-card-skeleton.tsx`, `src/components/blog/post-body-skeleton.tsx`

---

### Story 6.1 — Blog Card Hover & Featured Styling ✅ COMPLETED

**As a** visitor browsing the blog index,  
**I want** each blog post card to respond to my interaction with inviting hover effects and for featured posts to stand out visually,  
**So that** I'm drawn to read articles and can immediately spot the most important content.

**Acceptance Criteria:**

1. Standard blog cards use `glass-card` styling with the existing hover lift (`y: -4, scale: 1.01`, spring stiffness: 300, damping: 20).
2. On hover, the card's cover image zooms subtly: `scale 1.0 → 1.05` over 400ms with `overflow: hidden` on the image container — the image grows but never escapes its bounds.
3. On hover, the card's category badge gains a subtle glow matching its category colour (e.g. violet glow for "Language Tips", cyan for "App Updates").
4. Featured blog cards (the `isFeatured` variant) use a two-column layout on `md+` screens: image occupying 60% width on the left, content on the right.
5. Featured cards have a gradient border (`border-violet/15`) and a slightly brighter surface (`bg-surface-elevated` instead of `bg-glass`).
6. Featured cards display an additional "Featured" pill badge at the top-right corner: `bg-violet text-white text-[10px] uppercase tracking-wider font-semibold rounded-pill px-2 py-0.5`.
7. Category badges use consistent colour mapping across the entire blog:
   - Language Tips → `bg-violet-muted text-violet`
   - App Updates → `bg-cyan-muted text-cyan`
   - Learning Science → `bg-amber-muted text-amber`
   - Culture → `bg-emerald-muted text-emerald` (if emerald exists, otherwise use a muted green)
   - Guides → `bg-rose-muted text-rose` (if rose exists, otherwise use a muted pink)
8. Reading time displays with a small clock icon (inline SVG, 12×12) in `text-foreground-muted`.
9. Date uses relative formatting for recent posts ("3 days ago") and absolute for older posts ("Mar 15, 2026") — with a `<time datetime="...">` element for SEO.
10. Cards enter the viewport with `fadeUp` stagger animation (0.06s stagger) within the grid.

---

### Story 6.2 — Blog Post Reading Experience ✅ COMPLETED

**As a** visitor reading a blog post,  
**I want** the typography, spacing, and visual hierarchy to make reading effortless and enjoyable on any device,  
**So that** I can focus on the content without any visual friction — and I'm more likely to share the post.

**Acceptance Criteria:**

1. The post body uses a `max-w-prose` (65ch) container centred on the page for optimal reading line length.
2. Body text: `font-sans text-base md:text-lg text-foreground-secondary leading-relaxed` (line-height 1.75).
3. Headings use `font-display` with clear size hierarchy:
   - `h2`: `text-2xl md:text-3xl text-foreground mt-12 mb-4` with a thin `border-b border-glass-border pb-2`.
   - `h3`: `text-xl md:text-2xl text-foreground mt-8 mb-3`.
   - `h4`: `text-lg md:text-xl text-foreground-secondary mt-6 mb-2`.
4. Paragraphs have `mb-6` spacing between them — generous but not wasteful.
5. Block quotes use a left border in `border-violet` (3px) with `bg-violet-muted` at 3% opacity, `pl-6 py-3 italic`.
6. Inline code uses `bg-glass text-violet font-mono text-[0.9em] rounded-sm px-1.5 py-0.5`.
7. Code blocks use Shiki syntax highlighting with the existing dark theme, wrapped in a `glass-card` container with:
   - A top bar showing the language name and a copy-to-clipboard button.
   - Copy button shows a checkmark for 2s after clicking (animated SVG path transition).
   - Horizontal scroll with styled scrollbar for long lines.
8. Images within posts use `rounded-card` corners, `shadow-card`, and fade in on load (blur-placeholder → sharp).
9. The callout blocks (💡 Did You Know?, ✨ Pro Tip, etc.) use the MDX components — these are the one acceptable emoji usage (editorial content). Each callout has a distinct left border colour and background tint corresponding to its type.
10. Links within post text are `text-violet hover:text-violet-hover` with an animated underline (scale-x 0→1 on hover, origin left).

---

### Story 6.3 — Blog Post Table of Contents & Reading Progress ✅ COMPLETED

**As a** visitor reading a long blog post,  
**I want** a table of contents that tracks my scroll position and a reading progress bar that shows how far I've read,  
**So that** I always know my position in the article and can jump between sections.

**Acceptance Criteria:**

1. On `lg+` screens, a sticky TOC sidebar appears on the right at `top: 96px` (matching features page TOC convention).
2. The active heading in the TOC is highlighted with `text-violet` and a left-border accent, using `IntersectionObserver` to track which section is currently in view.
3. TOC items are indented by heading level: `h2` items are flush left, `h3` items are indented `pl-3`, `h4` items are indented `pl-6`.
4. A reading progress bar spans the full width at the top of the viewport (below the header, `top: 64px`):
   - Height: 2px (subtle but visible).
   - Colour: gradient `from-violet to-cyan`.
   - Width: calculated from `scrollTop / (documentHeight - viewportHeight) * 100%`.
   - The bar is only visible once the user starts scrolling (opacity 0 at scroll position 0, opacity 1 at scroll position > 50px).
5. On `md` and below: the TOC collapses to a disclosure widget ("On this page ▾") that expands as a floating panel above the content.
6. The reading progress bar remains the same on mobile — it's subtle enough to work at any screen size.
7. `aria-label="Reading progress"` on the progress bar, `aria-label="Table of contents"` on the sidebar nav.

---

### Story 6.4 — Blog Category Filter Interaction ✅ COMPLETED

**As a** visitor on the blog index page,  
**I want** category filter chips that respond crisply and show me results with a satisfying transition,  
**So that** filtering feels instant and browsing by category is a pleasure.

**Acceptance Criteria:**

1. Category chips are styled as pills (`rounded-pill px-4 py-2 text-sm`) with:
   - Inactive: `bg-glass text-foreground-muted hover:bg-glass-hover hover:text-foreground-secondary`.
   - Active: the chip takes on its category colour (e.g. `bg-violet-muted text-violet` for Language Tips).
   - Transition between states: 200ms ease.
2. An "All" chip is always first and uses `bg-glass text-foreground` when active.
3. Clicking a category chip filters the post grid immediately. The transition:
   - Outgoing cards fade out with `opacity 1→0, scale 1→0.97` over 150ms.
   - A 100ms pause.
   - Incoming cards fade in with `opacity 0→1, scale 0.97→1` staggered at 30ms intervals.
   - This uses `AnimatePresence` with a unique `key` per filter state.
4. The chip bar is horizontally scrollable on mobile with:
   - `overflow-x: auto` with `scrollbar-hide`.
   - Gradient fade indicators on left/right edges when more chips are available.
   - The active chip auto-scrolls into view when selected.
5. The URL updates with the category as a query parameter (e.g. `?category=language-tips`) for shareability and back-button support, without a full page reload.
6. When a filter returns zero results, a friendly empty state appears: a centred illustration with "No posts in this category yet" message and a "View all posts" link.
7. Post count per category is shown as a small badge number on each chip (e.g. "Language Tips (12)") in `text-foreground-muted/50 text-xs`.

---

## Epic 7 — Navigation & Header Perfection ✅ COMPLETED

**Goal:** The header is present on every single page. It must be flawless: invisible when not needed, discoverable when wanted, and silky-smooth in every transition. The navigation should feel like a natural extension of the user's intent — never fighting them, always guiding them.

**Files affected:** `src/components/layout/header.tsx`, `src/components/layout/language-switcher.tsx`, `src/components/layout/route-progress.tsx`

---

### Story 7.1 — Header Scroll Behaviour & Visual State Transitions ✅ COMPLETED

**As a** visitor scrolling through any page,  
**I want** the header to gracefully transition between its transparent landing state and its solid scrolled state,  
**So that** the header never distracts from hero content at the top, but is always clearly accessible once I start reading.

**Acceptance Criteria:**

1. At scroll position 0: the header has `bg-transparent border-transparent shadow-none`.
2. At scroll position > 20px: the header transitions to `bg-surface/80 backdrop-blur-xl border-b border-glass-border shadow-card`.
3. The transition between states uses CSS transitions: `transition: background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease`.
4. The logo and nav link text colours remain the same in both states — only the background chrome changes.
5. The header height is exactly `64px` (desktop) / `56px` (mobile) and does not change between states — zero layout shift.
6. The `z-index` is `z-50` — above all page content but below modal overlays (`z-[60]`).
7. The skip-to-content link is the first focusable element inside the header, visible only on `:focus-visible`, styled as `bg-violet text-white rounded-button px-4 py-2 absolute left-4 top-2`.
8. The scroll detection uses a throttled `scroll` event listener (throttled to 16ms via `requestAnimationFrame`) to prevent excessive re-renders.

---

### Story 7.2 — Desktop Navigation Link Hover Effects ✅ COMPLETED

**As a** visitor navigating the site on desktop,  
**I want** navigation links to respond with a refined hover animation that communicates "this is clickable" without being flashy,  
**So that** I can navigate confidently and the interactions feel high-quality.

**Acceptance Criteria:**

1. Each nav link has an animated underline that scales from 0 to 100% width on hover:
   - The underline is a `2px` height pseudo-element positioned at the bottom of the link text.
   - Colour: `bg-violet`.
   - Transform: `scaleX(0) → scaleX(1)` with `transform-origin: left`.
   - Duration: 200ms ease.
2. On hover, the link text colour transitions from `text-foreground-secondary` to `text-foreground` over 150ms.
3. The currently active page's nav link has the underline permanently visible at 100% width, and the text in `text-foreground`.
4. Active page detection uses `usePathname()` compared against the link's `href` — with proper `startsWith` matching for nested routes (e.g. `/blog/some-post` highlights the "Blog" nav link).
5. The nav link font is `font-sans text-sm font-medium`.
6. Links have a `padding: 8px 12px` hit area — larger than the visible text for easy clicking.
7. The CTA button ("Download" / App Store link) in the header uses the `Button` component at size `sm` with variant `primary`, positioned to the right of the nav links with `ml-4`.
8. Focus-visible: nav links show a `ring-2 ring-violet ring-offset-2 ring-offset-background rounded-sm` outline — clear keyboard navigation.

---

### Story 7.3 — Mobile Menu Slide-In & Focus Management ✅ COMPLETED

**As a** mobile visitor tapping the hamburger menu,  
**I want** the menu to slide in smoothly, trap my focus correctly, and feel premium — not like a generic framework drawer,  
**So that** mobile navigation feels as considered and refined as the desktop experience.

**Acceptance Criteria:**

1. The hamburger icon is a three-line icon at `24×24px` in `text-foreground`. On menu open, it animates to an X (close) icon with a cross-fade transition (150ms).
2. The mobile menu slides in from the right: `transform: translateX(100%) → translateX(0)` with spring `stiffness: 300, damping: 28` (crisp, not bouncy).
3. The menu panel is `w-full sm:w-80` (full screen on small mobiles, 320px panel on larger phones) with `bg-surface/98 backdrop-blur-2xl`.
4. A semi-transparent overlay (`bg-black/40`) covers the rest of the screen, dismissing the menu on tap.
5. Menu items are staggered with `fadeLeft` animation (stagger: 0.05s each, starting 150ms after the panel is positioned).
6. Each menu item uses `text-lg font-medium py-3` with a bottom `border-glass-border` divider.
7. Focus management:
   - On open: focus moves to the close button (first focusable element in the panel).
   - Tab cycles only within the panel (focus trap).
   - Shift+Tab from the close button wraps to the last menu item.
   - Escape key closes the menu.
   - On close: focus returns to the hamburger button.
8. Body scroll is locked when the menu is open (`overflow: hidden` on `<body>`).
9. The menu includes the language switcher at the bottom of the link list, with a thin top border separator.
10. `aria-expanded` on the hamburger button, `role="dialog"` and `aria-modal="true"` on the menu panel, `aria-label="Navigation menu"`.

---

### Story 7.4 — Language Switcher Polish ✅ COMPLETED

**As a** multilingual visitor,  
**I want** the language switcher dropdown to be elegant, fast, and provide clear feedback on the active language,  
**So that** switching languages feels seamless and I'm confident in which language I've selected.

**Acceptance Criteria:**

1. The trigger button shows the current locale code (e.g. "EN") or a small flag icon + locale code, in `text-sm text-foreground-secondary`.
2. On click, a dropdown panel appears below with `AnimatePresence`: `opacity 0→1, y -4→0, scale 0.98→1` over 200ms.
3. The dropdown uses `glass-card` styling: `bg-surface/95 backdrop-blur-xl border-glass-border rounded-card shadow-card`.
4. Each language option shows:
   - The language name in its native script (e.g. "日本語", "العربية", "Deutsch").
   - A small check icon next to the active language in `text-violet`.
5. Hovering a language option highlights it with `bg-glass-hover` transition (150ms).
6. Selecting a language: the dropdown closes with a reverse animation, and the page transitions to the new locale via Next.js routing.
7. Keyboard: arrow keys navigate options, Enter selects, Escape closes. The dropdown uses `role="listbox"` with `role="option"` items.
8. Click-outside dismisses the dropdown.
9. The dropdown is positioned using a portal or relative positioning that accounts for viewport edges — it never clips off-screen on desktop or mobile.
10. RTL locales (Arabic) display the dropdown text right-aligned.

---

## Epic 8 — Footer & Newsletter Delight ✅ COMPLETED

**Goal:** The footer is the last element users see before leaving. A perfect footer reinforces trust, provides useful navigation, and — with the newsletter form — creates one final opportunity to capture a relationship. The newsletter signup in particular should feel like joining an exclusive community, not filling out spam.

**Files affected:** `src/components/layout/footer.tsx`, `src/components/newsletter/newsletter-form.tsx`, `src/components/newsletter/blog-newsletter-cta.tsx`

---

### Story 8.1 — Footer Visual Hierarchy & Social Links ✅ COMPLETED

**As a** visitor reaching the bottom of any page,  
**I want** the footer to feel like a natural, elegant conclusion — well-organised, visually warm, and genuinely useful,  
**So that** my final impression of LumenLingo is as positive as my first.

**Acceptance Criteria:**

1. The footer top edge has a gradient line: `h-px` with `bg-gradient-to-r from-transparent via-glass-border to-transparent`.
2. Above the gradient line, a subtle upward radial glow (`radial-gradient(ellipse at 50% 100%, rgba(139,92,246,0.04) 0%, transparent 70%)`) creates warmth without competing with content.
3. The footer uses a responsive 5-column grid on `lg+`:
   - Column 1 (wider): Brand logo, tagline (1 sentence), social links, App Store badge.
   - Columns 2-5: link groups (Product, Company, Legal, Support) with `text-sm` links.
4. On `md`: 2×2 grid for link groups, brand column spans full width above.
5. On mobile: single column stacked, with link groups as collapsible disclosure sections (tap to expand/collapse with rotate chevron icon).
6. Link group headings: `text-foreground text-sm font-semibold uppercase tracking-wider mb-3`.
7. Footer links: `text-foreground-muted hover:text-foreground transition-colors 150ms` — no underlines by default, underline appears on hover.
8. Social link icons (X, Instagram, YouTube, LinkedIn, Discord, GitHub) are `20×20px` SVG with `text-foreground-muted hover:text-foreground` transition. They are arranged in a horizontal row with `gap-3`.
9. On hover, social icons gain a subtle glow effect of their brand colour (X→foreground, Instagram→pink, YouTube→red, LinkedIn→blue, Discord→indigo, GitHub→foreground). The glow uses `filter: drop-shadow(0 0 6px <brand-colour>)` at 30% opacity.
10. The App Store badge uses the existing `AppStoreBadge` component, sized consistently at ~135px width.
11. Copyright line at the bottom: `text-foreground-muted text-xs text-center` with the current year. A dot separator `·` between copyright and any legal links.

---

### Story 8.2 — Newsletter Form Success Celebration ✅ COMPLETED

**As a** visitor subscribing to the newsletter,  
**I want** the signup experience to feel like joining something special — with clear feedback, beautiful animations, and a sense of welcome,  
**So that** I feel good about my decision and look forward to receiving emails.

**Acceptance Criteria:**

1. **Idle state:** The form shows an email input and submit button in a single row (`flex flex-row gap-2`). The input uses `glass-card` styling with `border-glass-border focus:border-violet focus:ring-1 focus:ring-violet/30` transitions.
2. **Validation:** Email validation runs on blur and on submit. Invalid emails show an inline error message below the input in `text-red-400 text-xs` with a `fadeUp` entrance (100ms).
3. **Loading state:** The submit button shows a small spinner (12×12px SVG rotating at 1s) replacing the button text. The button is `disabled` with `opacity-70 cursor-not-allowed`.
4. **Success state** (the key moment):
   - The form collapses with `AnimatePresence`: `height auto→0, opacity 1→0` over 200ms.
   - A 150ms pause.
   - The success content expands in: `height 0→auto, opacity 0→1` over 250ms.
   - The success content shows:
     a. An animated checkmark SVG (pathLength 0→1, duration 400ms, spring ease) in a `text-emerald-400` circle.
     b. A welcoming headline: "Welcome to the community!" in `font-display text-lg text-foreground`.
     c. A subtext: "Check your inbox for a warm welcome." in `text-foreground-muted text-sm`.
   - The entire success container has a brief violet inner glow that fades: `box-shadow: inset 0 0 30px rgba(139,92,246,0.08)` fading to 0 over 2s.
5. **Error state:** Shows the error message with a retry button. The retry button uses variant `ghost` and pressing it clears the error and refocuses the email input.
6. The age consent checkbox (when required by locale) appears below the email input with `text-xs text-foreground-muted` label and a custom-styled checkbox (violet check, glass-border box).
7. `analytics: trackEvent('newsletter_signup', { source: '...' })` fires on successful submission — source identifies footer vs blog vs homepage.

---

### Story 8.3 — Blog Newsletter CTA In-Article Placement

**As a** visitor reading a blog post,  
**I want** a tasteful newsletter CTA that appears at a natural reading break point — not as a pop-up, but as an integrated part of the content,  
**So that** I can subscribe if I'm enjoying the content, without feeling interrupted or manipulated.

**Acceptance Criteria:**

1. The blog newsletter CTA renders as an inline block within the blog post body, positioned after the 3rd heading (approximately 40-60% through the article).
2. The CTA block uses `glass-card` styling with a subtle violet tint (`border-violet/10 bg-violet-muted` at 3% opacity) — clearly different from article content but not jarring.
3. The block contains:
   - A small `SparkleIcon` in `text-violet`.
   - A short headline (e.g. "Enjoying this article?") in `font-display text-lg`.
   - A one-sentence description in `text-foreground-secondary text-sm`.
   - The compact newsletter form (email input + button, single row).
4. The block uses `my-12` vertical margin — comfortable breathing room from surrounding content.
5. The block enters with `fadeUp` animation when it scrolls into view.
6. If the user has already subscribed (detected via localStorage flag), the CTA block is not rendered — respecting the user's prior action.
7. The CTA block can be dismissed with a small X button in the top-right corner. Dismissal is saved to `sessionStorage` so it doesn't reappear during the same session.

---

## Epic 9 — Form UX & Validation Craft ✅ COMPLETED

**Goal:** Every form in the application — newsletter, contact, data request, waitlist — must provide immediate, clear, and encouraging feedback. Validation should feel helpful, not punitive. Success should feel rewarding. Errors should feel fixable.

**Files affected:** `src/components/newsletter/newsletter-form.tsx`, `src/components/data-request/data-request-form.tsx`, `src/components/early-access/waitlist-form.tsx`, `src/components/contact/contact-section.tsx`

---

### Story 9.1 — Unified Form Input Styling ✅

**As a** developer building forms,  
**I want** a single, consistent `Input` component that all forms use,  
**So that** every text input, email field, and textarea across the site looks, feels, and behaves identically.

**Acceptance Criteria:**

1. A shared `src/components/ui/input.tsx` component exists (or the existing one is refined) with the following visual states:
   - **Default:** `bg-glass border border-glass-border rounded-button text-foreground placeholder:text-foreground-muted/50` with `px-4 py-2.5`.
   - **Focus:** `border-violet ring-1 ring-violet/30 bg-glass-hover` — the input brightens and gains a violet accent, transitioning over 150ms.
   - **Error:** `border-red-400/50 ring-1 ring-red-400/20` — a clear but non-alarming red accent.
   - **Disabled:** `opacity-50 cursor-not-allowed bg-glass`.
   - **Filled (has value):** `border-glass-border/80` — a barely perceptible brightening to indicate the field has content.
2. All transitions between states are 150ms ease.
3. The input supports `size="sm"` (py-2 text-sm), `size="md"` (py-2.5 text-base, default), `size="lg"` (py-3 text-lg).
4. A `Textarea` variant uses the same styles but with `min-h-[120px] resize-y`.
5. A `Select` variant applies the same base styles with a custom dropdown chevron icon (SVG, not browser default).
6. Labels use `text-foreground-secondary text-sm font-medium mb-1.5` and are positioned above the input.
7. Helper text below inputs uses `text-foreground-muted text-xs mt-1`.
8. Error text below inputs uses `text-red-400 text-xs mt-1` with a `fadeUp` entrance animation (100ms) — the error slides up gently, not popping in harshly.

---

### Story 9.2 — Data Request Form Progressive Validation ✅

**As a** user submitting a data subject access request (DSAR),  
**I want** the form to validate each field as I fill it in and guide me toward a complete, correct submission,  
**So that** I feel supported (not frustrated) when making a legal request about my personal data.

**Acceptance Criteria:**

1. Each field validates on blur (not on every keystroke — avoiding premature errors).
2. Name field: validates non-empty. Error message: "Please enter your name so we can identify your record."
3. Email field: validates format. Error message: "Please enter a valid email address so we can respond to you."
4. Request type dropdown: validates a selection was made. Error message: "Please select what you'd like us to do with your data."
5. Details textarea: validates minimum 20 characters. Character count displayed in the corner (`text-foreground-muted text-xs`), turning `text-amber` at 15 characters and `text-foreground` at 20+ characters.
6. A progress indicator at the top of the form shows how many of 4 fields are completed, using small dots: empty circle for incomplete, filled violet circle for complete.
7. The submit button remains visually present but `disabled` until all required fields pass validation. On becoming enabled, the button transitions from `opacity-50` to `opacity-100` with a subtle violet glow pulse (one cycle, 600ms).
8. On successful submission (mailto: link generated and opened):
   - The form transitions to a success state with animated checkmark (consistent with Story 8.2).
   - Success text explains: "Your email client has been opened with your request. Please review and send."
   - A "Back to homepage" link is provided.
9. The form card uses `glass-card` styling with generous padding (`p-6 md:p-8`) and `max-w-xl mx-auto`.
10. Each form field uses the standardised `Input` / `Select` / `Textarea` from Story 9.1.

---

### Story 9.3 — Contact Page Copy-to-Clipboard Delight ✅

**As a** visitor copying a contact email address,  
**I want** the copy action to provide clear, satisfying feedback,  
**So that** I'm confident the email was copied and the interaction feels premium.

**Acceptance Criteria:**

1. Each email address is displayed in a `glass-card` container with `font-mono text-foreground` and a copy button on the right.
2. The copy button shows a clipboard icon (12×12 SVG) in `text-foreground-muted`.
3. On click:
   - The clipboard icon transforms to a checkmark icon with a cross-fade (150ms).
   - The button background briefly flashes `bg-emerald-400/10` (100ms, then fades back).
   - The email text briefly gains `text-violet` colour (200ms, then returns to `text-foreground`).
   - A small tooltip appears above the button reading "Copied!" in `bg-surface text-foreground-secondary text-xs rounded-sm px-2 py-1 shadow-card`, fading in with `opacity 0→1, y 4→0` over 150ms.
   - The tooltip fades out after 1.5 seconds.
4. The checkmark reverts to the clipboard icon after 2 seconds.
5. The copy uses `navigator.clipboard.writeText()` with a fallback to `document.execCommand('copy')` for older browsers.
6. `aria-label="Copy email address"` on the button, changing to `aria-label="Copied"` for 2 seconds after the copy action.

---

## Epic 10 — Motion & Animation System ✅ COMPLETED

**Goal:** Establish a rigorous, consistent animation language across the entire site. Every animation should feel like it belongs to the same physical universe — the same gravity, the same spring constants, the same sense of materiality. Random tweens and inconsistent timing destroy the perception of quality.

**Files affected:** `src/lib/motion.ts`, `src/components/motion/fade-in.tsx`, `src/components/motion/stagger-children.tsx`, `src/components/motion/parallax-layer.tsx`, `src/components/motion/count-up.tsx`

---

### Story 10.1 — Motion Token System Codification ✅

**As a** developer implementing animations,  
**I want** a strict set of motion tokens defined in `motion.ts` that all components reference,  
**So that** every animation uses identical physics and our motion language is as rigorous as our colour tokens.

**Acceptance Criteria:**

1. `src/lib/motion.ts` exports the following standardised objects:

   **Spring presets:**
   - `spring.snappy`: `{ type: 'spring', stiffness: 400, damping: 20 }` — for button presses, flash feedback.
   - `spring.smooth`: `{ type: 'spring', stiffness: 300, damping: 25 }` — for card hovers, panel entrances.
   - `spring.gentle`: `{ type: 'spring', stiffness: 200, damping: 22 }` — for content reveals, layout shifts.
   - `spring.bouncy`: `{ type: 'spring', stiffness: 250, damping: 15 }` — for completion celebrations, badge bounces.
   
   **Duration presets:**
   - `duration.instant`: `0.1` — colour changes, opacity snaps.
   - `duration.fast`: `0.2` — micro-interactions, tooltips.
   - `duration.normal`: `0.3` — standard transitions.
   - `duration.slow`: `0.5` — page transitions, modal reveals.
   - `duration.dramatic`: `0.8` — hero entrance, celebration moments.
   
   **Stagger presets:**
   - `stagger.tight`: `0.04` — dense lists, chip rows.
   - `stagger.normal`: `0.08` — card grids, feature lists.
   - `stagger.relaxed`: `0.12` — hero sections, headline word-by-word.

2. All existing animations across the codebase are audited and updated to reference these tokens — no hard-coded spring values or durations remain in component files.
3. New variant helpers:
   - `variants.fadeUp` — uses `spring.gentle` (existing but standardised).
   - `variants.fadeDown`, `variants.fadeLeft`, `variants.fadeRight` — all standardised.
   - `variants.scaleIn` — uses `spring.smooth`.
   - `variants.staggerContainer(stagger?)` — accepts optional stagger override, defaults to `stagger.normal`.
4. A `useReducedMotion()` hook is exported that returns `true` if `prefers-reduced-motion: reduce` is active. Components use this to conditionally skip spring animations and apply instant transitions.
5. Documentation comment at the top of `motion.ts` explains the motion philosophy: "Springs simulate physical objects. Use snappy for responsive UI, smooth for spatial transitions, gentle for content reveals, bouncy for celebrations."

---

### Story 10.2 — Parallax Layer Subtlety Tuning ✅

**As a** visitor scrolling through the homepage,  
**I want** parallax effects to be subtle and physically plausible — enhancing depth without causing motion sickness,  
**So that** the cosmic aesthetic feels immersive but never uncomfortable.

**Acceptance Criteria:**

1. The `ParallaxLayer` component accepts a `speed` prop ranging from `-0.1` to `0.1` (negative = moves opposite to scroll, positive = moves with scroll but slower).
2. Default speed is `0.05` — almost imperceptible but adding a subconscious sense of depth.
3. The parallax transform uses `will-change: transform` and `translateY` only (no translateX, no scale, no rotation — these cause nausea).
4. Parallax is calculated using `requestAnimationFrame` with a lerp factor of `0.1` — smooth interpolation, never jumpy.
5. `prefers-reduced-motion`: parallax is completely disabled — elements render at static positions.
6. The component only activates when `IntersectionObserver` confirms it's visible — no off-screen parallax calculations.
7. Touch devices: parallax remains active but at 50% intensity (`speed * 0.5`) since scroll physics differ.
8. Background gradient meshes and star fields are the primary parallax candidates — never text, never interactive elements, never images.

---

## Epic 11 — Loading & Skeleton States ✅ COMPLETED

**Goal:** The space between a click and content appearing is an opportunity, not dead time. Every loading state must maintain the visual rhythm of the page, prevent layout shift, and feel intentionally designed — as if the skeleton *is* the design, not a placeholder waiting for the real design.

**Files affected:** `src/components/ui/skeleton.tsx`, `src/components/blog/post-card-skeleton.tsx`, `src/components/blog/post-body-skeleton.tsx`, `src/components/layout/route-progress.tsx`

---

### Story 11.1 — Skeleton Component Visual Refinement ✅

**As a** visitor waiting for content to load,  
**I want** skeleton placeholders that feel like a natural part of the design — glowing softly, matching the glass aesthetic,  
**So that** loading never feels like the page is broken, just that it's breathing.

**Acceptance Criteria:**

1. The base `Skeleton` component uses:
   - Background: `bg-glass` (the existing white/4% base).
   - Border: `border border-glass-border/50` (even more subtle than regular glass borders).
   - Border radius: matches the element it's replacing (`rounded-card` for cards, `rounded-button` for buttons, `rounded-sm` for text lines).
2. The shimmer animation sweeps left-to-right using a linear gradient highlight:
   - Gradient: `transparent → rgba(139,92,246,0.04) → transparent` (a violet-tinted shimmer, not white).
   - Speed: `1.8s` per sweep (not too fast, not too slow).
   - Easing: `ease-in-out` with a `0.2s` pause between sweeps.
3. Skeleton "text lines" have varying widths to simulate real text: first line 100%, second line 85%, third line 92%, fourth line 70% — avoiding the "bars of equal length" look.
4. Skeleton "images" show a subtle gradient icon in the centre (a small mountain/image SVG at 30% opacity) — hinting at what will appear.
5. `prefers-reduced-motion`: shimmer animation is disabled; the skeleton shows a static `bg-glass` without movement.
6. Skeletons are sized to exactly match the dimensions of the content they replace — verified against the real components to prevent CLS.
7. The `Skeleton` component accepts `variant` prop: `text`, `heading`, `image`, `card`, `button`, `avatar` — each with pre-configured dimensions and border-radius.

---

### Story 11.2 — Route Progress Bar Visual Polish ✅

**As a** visitor navigating between pages,  
**I want** the route progress bar to be visually elegant and provide genuine loading feedback,  
**So that** I know my navigation is working and the wait feels intentional, not broken.

**Acceptance Criteria:**

1. The progress bar renders at `position: fixed; top: 64px` (mobile: 56px) — directly below the header.
2. Height: `2px` — minimal but visible.
3. Colour: gradient `from-violet via-cyan to-violet` — a subtle iridescent quality.
4. The bar uses a three-phase animation:
   - Phase 1 (0-80%): rapid fill over 400ms using `ease-out`. This makes it feel fast.
   - Phase 2 (80-95%): slow creep using `ease-in-out` over 3-5s (waiting for the page to actually load).
   - Phase 3 (95-100%): on actual load completion, snaps to 100% in 100ms and then fades out over 200ms.
5. The bar has a subtle glow effect: `box-shadow: 0 0 8px rgba(139,92,246,0.3)` — it looks like a laser line.
6. If navigation completes very fast (< 200ms), the bar still shows briefly (minimum visible time 150ms) before fading — preventing a jarring flash.
7. The bar is `z-[45]` — below the header (`z-50`) but above page content.
8. `aria-hidden="true"` — the progress bar is decorative and shouldn't be announced by screen readers.

---

## Epic 12 — Accessibility Deep Pass ✅ COMPLETED

**Goal:** Accessibility is not a feature — it's a foundation. This epic ensures that every interactive element, every image, every animation, and every colour contrast ratio meets WCAG 2.1 AA as a floor and AAA where practical. No user should ever feel excluded from LumenLingo's web experience.

**Files affected:** All component files — this is a cross-cutting audit.

---

### Story 12.1 — Colour Contrast & Focus Visibility Audit ✅

**As a** user with a visual impairment,  
**I want** every text element to have sufficient contrast against its background and every focusable element to have a clear focus indicator,  
**So that** I can read all content and navigate the site with confidence.

**Acceptance Criteria:**

1. All `text-foreground` on `bg-background` meets 4.5:1 contrast ratio (WCAG AA for normal text) — verified against the `--background: oklch(0.08 0.015 280)` value.
2. All `text-foreground-secondary` meets 4.5:1 against `bg-background` and `bg-surface`.
3. All `text-foreground-muted` meets 3:1 against `bg-background` (WCAG AA for large text / UI components). If it doesn't, `text-foreground-muted` colour is adjusted in `globals.css` to reach 3:1 without losing its "muted" character.
4. Tier accent colours (`text-violet`, `text-cyan`, `text-amber`) against `bg-glass` backgrounds meet 3:1 or higher.
5. All interactive elements (`<a>`, `<button>`, inputs, custom interactive components) show a visible focus ring on `:focus-visible`:
   - Standard ring: `ring-2 ring-violet ring-offset-2 ring-offset-background rounded-sm`.
   - Never removed via `outline: none` without a replacement.
6. Focus ring is NOT shown on `:focus` (mouse click) — only on `:focus-visible` (keyboard / assistive tech).
7. All existing instances of custom `outline: none` or `ring-0` on focusable elements are audited and fixed.
8. The automated test suite includes an axe-core accessibility scan for each major page (`/`, `/features`, `/pricing`, `/blog`, `/demo`, `/download`, `/contact`).

---

### Story 12.2 — Screen Reader & Semantic Structure Audit ✅

**As a** screen reader user,  
**I want** every page to have correct heading hierarchy, meaningful landmarks, and proper ARIA attributes,  
**So that** I can navigate the page structure efficiently and understand all content.

**Acceptance Criteria:**

1. Each page has exactly one `<h1>` — the page title. No duplicate `<h1>` tags.
2. Heading hierarchy never skips levels (no `<h1>` followed by `<h3>` without an `<h2>`).
3. All pages use semantic landmarks:
   - `<header>` for the site-wide header.
   - `<nav>` for navigation (with `aria-label` distinguishing primary, footer, and TOC navs).
   - `<main>` for the primary content area (exactly one per page).
   - `<footer>` for the site-wide footer.
   - `<section>` for major content sections (with `aria-labelledby` referencing the section heading).
4. All decorative icons and emojis have `aria-hidden="true"` (cross-referencing the full audit from Epic 1).
5. All images have meaningful `alt` text or `alt=""` for purely decorative images. Alt text is descriptive ("Screenshot of flashcard flip animation"), not generic ("image").
6. Interactive widgets (accordions, tabs, dropdowns) use appropriate ARIA roles:
   - Accordion: `role="region"`, `aria-expanded`, `aria-controls`.
   - Tab: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`.
   - Dropdown: `role="listbox"` / `role="menu"`, `aria-expanded`.
7. `aria-live` regions: toast notifications use `aria-live="polite"`, form validation errors use `aria-live="assertive"`.
8. No auto-playing media without user initiation. The demo flashcard animation does not start until the section is in view AND the user has not set `prefers-reduced-motion`.

---

### Story 12.3 — Keyboard Navigation End-to-End Test ✅

**As a** keyboard-only user,  
**I want** to navigate every feature of the website using only Tab, Shift+Tab, Enter, Space, Escape, and Arrow keys,  
**So that** the full experience is available without a mouse.

**Acceptance Criteria:**

1. Tab order follows visual reading order on every page — verified by tabbing through each page top to bottom to ensure logical sequence.
2. All interactive elements are reachable by Tab. No element requires mouse hover to become visible/interactive (e.g. hover-only dropdowns must also open on focus/Enter).
3. Modal/dialog focus trap: when the mobile menu or any modal is open, Tab cycles within the dialog and Escape closes it.
4. Skip-to-content link: pressing Tab on any page immediately reveals a "Skip to main content" link (referencing Story 7.1).
5. The flashcard demo is fully keyboard-operable:
   - Left Arrow: swipe left (skip/incorrect).
   - Right Arrow: swipe right (correct).
   - Space/Enter: flip card.
   - The card visually animates the same as the mouse/touch interactions.
6. Pricing toggle (monthly/yearly) is a `role="switch"` or `role="radiogroup"`, operable with Space or Arrow keys.
7. Blog category filter chips work as radio buttons: Arrow Left/Right move between chips, Space/Enter selects.
8. Playwright e2e tests verify keyboard navigation for the 3 most complex interaction patterns: flashcard demo, mobile menu, and pricing FAQ accordion.

---

## Epic 13 — Download Page Conversion-Craft ✅ COMPLETED

**Goal:** The download page exists for one purpose: to get the app installed. Every element must eliminate friction and amplify desire. The page should answer every "but what if…" question a hesitant visitor might have, while making the download action feel inevitable.

**Files affected:** `src/components/download/download-hero.tsx`, `src/components/download/download-showcase.tsx`, `src/components/download/cta-section.tsx`, `src/components/download/social-proof.tsx`, `src/components/download/app-preview.tsx`, `src/app/[locale]/download/page.tsx`

---

### Story 13.1 — Download Hero Urgency & Trust Signals ✅

**As a** visitor who has decided to download the app,  
**I want** the download page to immediately show me the App Store link, confirm social proof, and make me feel excited — not make me scroll for what I came for,  
**So that** I can download instantly and leave with a positive feeling.

**Acceptance Criteria:**

1. The App Store badge / download button is above the fold on ALL screen sizes — never below.
2. The hero section shows:
   - A large, beautiful app icon / mockup at the centre.
   - The App Store badge at prominent size (minimum 160px width).
   - A single-line trust signal below the badge: "★ 4.9 rating · 10K+ downloads · Free to start" in `text-foreground-muted text-sm` with amber stars.
3. The App Store badge has a subtle idle animation: a slow pulse glow (`box-shadow: 0 0 20px rgba(139,92,246,0.1)` → `0 0 30px rgba(139,92,246,0.15)`, 3s infinite ease-in-out) — drawing the eye.
4. The badge also responds to hover with `scale: 1.03` lift (spring: stiffness 300, damping 20).
5. The hero enters with a centre-origin `scaleIn` + `fadeUp` combination: scale 0.9→1.0, opacity 0→1, spring.smooth.
6. A secondary text link below the badge says "Available on iOS 17+" in `text-foreground-muted text-xs` — setting expectations.
7. The hero background uses a subtle radial gradient or particle effect (cosmic theme) at very low opacity — festive but not distracting.

---

### Story 13.2 — App Preview Showcase with Swipeable Screenshots ✅

**As a** visitor curious about what the app looks like inside,  
**I want** to swipe through beautiful app screenshots that show real features,  
**So that** I know exactly what I'm downloading and I'm even more excited.

**Acceptance Criteria:**

1. The screenshot carousel shows 5-7 app screenshots in high-resolution iPhone frames.
2. The carousel uses horizontal swipe (Framer Motion `drag="x"`) with snap-to-centre physics (spring stiffness: 200, damping: 20).
3. Each screenshot has a `glass-card` frame with `rounded-2xl overflow-hidden shadow-card`.
4. The active (centred) screenshot is at `scale: 1.0`, adjacent screenshots are at `scale: 0.88, opacity: 0.5` — creating depth.
5. Dot indicators below the carousel show the current position: active dot is `bg-violet w-3 h-3`, inactive dots are `bg-glass-border w-2 h-2`, with scale transitions between states.
6. On desktop: arrow buttons appear on hover at the left/right edges of the carousel, styled as `glass-card` circles with chevron icons.
7. Each screenshot has a caption below: "Flashcard Flow", "Focus Mode", "Soundscapes" etc. in `text-foreground-secondary text-sm text-center`.
8. Keyboard: Left/Right arrows navigate the carousel when focused. `role="region" aria-label="App screenshots" aria-roledescription="carousel"`.
9. Auto-play: the carousel does NOT auto-advance — user is in full control.
10. The icons from Epic 1 appear next to each screenshot caption, reinforcing feature recognition from the features page.

---

## Epic 14 — Early Access & Waitlist ✅ COMPLETED 

**Goal:** The early access page is for users who are so interested that they want to sign up before the full launch. This is the highest-intent audience on the site. The page must make them feel like insiders joining something exclusive — not just filling out a form.

**Files affected:** `src/components/early-access/waitlist-hero.tsx`, `src/components/early-access/waitlist-form.tsx`, `src/components/early-access/benefits-section.tsx`, `src/app/[locale]/early-access/page.tsx`

---

### Story 14.1 — Waitlist Form Exclusive Feel ✅

**As a** visitor signing up for early access,  
**I want** the form experience to feel like I'm being invited into an exclusive group,  
**So that** I feel special and anticipate the launch with genuine excitement.

**Acceptance Criteria:**

1. The waitlist hero uses `font-display text-4xl md:text-5xl` headline with a `text-gradient` — making it feel important.
2. A subtitle reads something like "Join [X,XXX] others on the waitlist" in `text-foreground-secondary text-lg`, where the number is a `CountUp` animation from 0 to the actual count (or a static impressive number).
3. The form is centred on the page within a `glass-card` that has a subtle animated gradient border (violet → cyan, rotating over 6s).
4. After successful signup:
   - The form transitions to a celebration screen with the animated checkmark (consistent with Story 8.2).
   - The headline changes to "You're on the list!" with a `text-gradient` style.
   - The user's position in the waitlist is displayed: "#1,234" with a `CountUp` animation.
   - A share section appears: "Move up the waitlist by sharing" with pre-filled share buttons for Twitter/X, WhatsApp, and a copy-link button.
   - The share URL includes a referral code parameter.
5. The benefits section below the form shows 3-4 early access perks with icons (from Epic 1):
   - Each benefit card uses `glass-card` with the tier-appropriate accent colour.
   - Cards enter with staggered `fadeUp` (0.1s stagger).
6. The form includes an optional "Which languages are you interested in?" multi-select chip selector: pre-populated with the 10+ language pairs available. Selected chips use `bg-violet-muted text-violet`, unselected use `bg-glass text-foreground-muted`.
7. A privacy assurance line below the form reads "We'll only email you about launch updates. Unsubscribe anytime." in `text-foreground-muted text-xs`.

---

## Epic 15 — Legal Page Typographic Excellence ✅ COMPLETED

**Goal:** Legal pages (privacy policy, terms, cookies, EULA, accessibility statement, data request) are mandatory but don't have to be boring. Beautiful typography, well-structured sections, and a table of contents transform legal content from "thing nobody reads" into "company that clearly cares about transparency."

**Files affected:** `src/app/[locale]/privacy/page.tsx`, `src/app/[locale]/terms/page.tsx`, `src/app/[locale]/cookies/page.tsx`, `src/app/[locale]/eula/page.tsx`, `src/app/[locale]/accessibility/page.tsx`, `src/app/[locale]/data-request/page.tsx` (all pages still need to be implemented — translation keys already exist in `messages/`)

---

### Story 15.1 — Legal Page Shared Layout Component ✅ COMPLETED

**As a** developer implementing all 6 legal pages,  
**I want** a shared `LegalPageLayout` component that provides consistent structure, typography, and navigation for all legal content,  
**So that** all legal pages match perfectly and new legal pages can be added trivially.

**Acceptance Criteria:**

1. `src/components/legal/legal-page-layout.tsx` accepts:
   - `title: string` — the page h1.
   - `lastUpdated: string` — displayed below the title.
   - `sections: Array<{ id: string, title: string, content: ReactNode }>` — the body sections.
2. The layout provides:
   - A hero area with the page title in `font-display text-3xl md:text-4xl text-foreground`.
   - "Last updated: [date]" in `text-foreground-muted text-sm`.
   - A right-side sticky TOC on `lg+` screens (following the same pattern as Epic 5 Story 5.1 and Epic 6 Story 6.3).
   - On mobile: a collapsible "Sections" dropdown at the top.
3. Body text uses `max-w-prose` for optimal reading width, `text-base text-foreground-secondary leading-relaxed`.
4. Section headings use `font-display text-xl md:text-2xl text-foreground mt-10 mb-4` with `scroll-margin-top: 96px`.
5. Nested sub-sections use `h3` at `text-lg text-foreground-secondary mt-6 mb-2`.
6. Ordered/unordered lists use proper semantic `<ol>`/`<ul>` with consistent `list-inside` styling and `space-y-2` for readable spacing.
7. Key legal terms (defined terms) can be visually distinguished with `font-medium text-foreground` within the body text.
8. "Back to top" floating button appears after scrolling 400px down, styled as a small `glass-card` circle with an up-arrow icon.

---

### Story 15.2 — Privacy Policy Page Implementation ✅ COMPLETED

**As a** user who wants to read LumenLingo's privacy policy,  
**I want** the privacy policy to be a fully implemented, beautifully typeset page that uses the existing translation keys,  
**So that** I can read the policy in my language with excellent readability, and LumenLingo meets its GDPR/CCPA obligations.

**Acceptance Criteria:**

1. The page lives at `src/app/[locale]/privacy/page.tsx`.
2. It uses the `LegalPageLayout` from Story 15.1.
3. All content is sourced from `useTranslations('Privacy')` — using the extensive keys already in `messages/[locale].json`.
4. Sections include: Introduction, Data Controller, Data We Collect, How We Use Your Data, Legal Basis, Data Retention, Your Rights, International Transfers, Children's Privacy, Cookie Policy Summary, Changes to This Policy, Contact Information.
5. Each jurisdiction-specific section (GDPR, CCPA, APPI, PIPL, LGPD) is rendered conditionally or within a tabbed interface based on relevance.
6. Internal links within the policy (e.g. "See our Cookie Policy") link to other legal pages.
7. The page has proper `<title>`, `<meta description>`, and `<link rel="canonical">` for SEO. The `alternateLinks` for all locales are set.
8. `generateMetadata()` is implemented following the Next.js convention used across other pages.

---

### Story 15.3 — Remaining Legal Pages (Terms, Cookies, EULA, Accessibility, Data Request) ✅ COMPLETED

**As a** user navigating to any legal page,  
**I want** all 5 remaining legal pages to be implemented with the same quality as the privacy policy,  
**So that** the entire legal section is complete, consistent, and compliant.

**Acceptance Criteria:**

1. Terms of Service at `src/app/[locale]/terms/page.tsx` uses `useTranslations('Terms')`.
2. Cookie Policy at `src/app/[locale]/cookies/page.tsx` uses `useTranslations('Cookies')`.
3. EULA at `src/app/[locale]/eula/page.tsx` uses `useTranslations('Eula')`.
4. Accessibility Statement at `src/app/[locale]/accessibility/page.tsx` uses `useTranslations('Accessibility')`.
5. Data Request (DSAR) at `src/app/[locale]/data-request/page.tsx` uses `useTranslations('DataRequest')` and includes the data request form component (from Story 9.2).
6. Each page uses the `LegalPageLayout` from Story 15.1.
7. Each page has proper `generateMetadata()` with title, description, and canonical/alternate links.
8. All 6 legal pages are listed in `src/app/sitemap.ts` with all locale variants.
9. Footer links to all legal pages are verified to resolve correctly for every locale.

---

## Epic 16 — Error & Empty States ✅ COMPLETED

**Goal:** Error pages and empty states are the moments when a product's character is most revealed. A 404 page that makes someone smile, a form error that helps someone fix their mistake — these are trust-building moments that most teams neglect.

**Files affected:** `src/app/not-found.tsx`, `src/app/[locale]/not-found.tsx`, `src/app/error.tsx`, `src/app/[locale]/error.tsx`

---

### Story 16.1 — 404 Page with Cosmic Character ✅ COMPLETED

**As a** visitor who arrives at a broken or non-existent link,  
**I want** the 404 page to be charming and helpful — not a dead end,  
**So that** I stay on the site, smile instead of frown, and navigate to something useful.

**Acceptance Criteria:**

1. The 404 page uses the cosmic background (gradient mesh at low opacity) — maintaining the brand aesthetic even in error states.
2. A large, expressive "404" in `font-display text-8xl md:text-9xl text-gradient` — impossible to miss.
3. A subtitle: "Lost in the cosmos" or equivalent, in `text-foreground-secondary text-xl`.
4. A description: "This page has drifted beyond our universe." in `text-foreground-muted text-base`.
5. Two CTA buttons:
   - Primary: "Take me home" → `/` (using the `Button` component, variant `primary`, size `lg`).
   - Secondary: "Browse features" → `/features` (variant `ghost`, size `lg`).
6. A small animated element: a floating/drifting star or comet SVG that slowly moves across the page (subtle, 20s infinite, `prefers-reduced-motion` disables it).
7. The page is responsive: the 404 text scales down to `text-6xl` on small screens.
8. The page does NOT show the standard header navigation — it uses a simplified header with just the logo linking home. The footer is also omitted. This isolates the user's focus on the recovery action.

---

### Story 16.2 — Error Boundary Graceful Recovery ✅ COMPLETED

**As a** visitor who encounters a runtime error,  
**I want** the error page to acknowledge the problem, reassure me, and give me a clear way to recover,  
**So that** I don't lose trust in the product and can continue my visit.

**Acceptance Criteria:**

1. The error boundary page (`error.tsx`) catches client-side errors and displays a branded error state.
2. Heading: "Something cosmic went wrong" in `font-display text-2xl md:text-3xl text-foreground`.
3. A brief, human-language description: "We're working on fixing this. Please try again." in `text-foreground-secondary`.
4. Two action buttons:
   - "Try again" (calls the `reset()` function from Next.js error boundary) — variant `primary`.
   - "Go home" → `/` — variant `ghost`.
5. In development mode only: the error stack trace is displayed in a collapsible `<details>` element with code-block styling.
6. In production: the error is reported to Sentry (already configured) without exposing the stack trace to the user.
7. The error page uses a minimal layout consistent with the 404 page: cosmic background, simplified header, no footer.
8. If the `reset()` fails (error persists), a secondary message appears: "Still having trouble? Contact us at [email link]."

---

## Epic 17 — Performance & Core Web Vitals ✅ COMPLETED

**Goal:** Beauty that takes 5 seconds to render is not beauty — it's frustration. Every animation, every glass effect, every backdrop-blur must be optimised to render within performance budgets. The goal is a Lighthouse score of 95+ on Performance for every page.

**Files affected:** All pages and components — this is a codebase-wide concern.

---

### Story 17.1 — Image Optimisation & Lazy Loading ✅ COMPLETED

**As a** visitor on a mobile device with a slower connection,  
**I want** images to load progressively with beautiful placeholders and never block the initial render,  
**So that** the page feels fast and images appear gracefully rather than popping in.

**Acceptance Criteria:**

1. All images use Next.js `<Image>` component with:
   - `priority` on above-the-fold hero images only (homepage hero, download hero).
   - `loading="lazy"` on all other images (default behaviour but verified).
   - `sizes` attribute with responsive breakpoints matching the actual rendered sizes.
2. Blur placeholder: all major images have `placeholder="blur"` with a generated `blurDataURL` — showing a 10×10px blurred preview while loading.
3. Image formats: WebP is served by default via Next.js image optimisation. AVIF is configured in `next.config.ts` (`formats: ['image/avif', 'image/webp']`).
4. Maximum image dimensions: screenshots max 800px width, hero images max 1200px width, blog images max 720px width — no 4000px originals being served.
5. The `<Image>` `quality` prop is set to 80 (from the default 75) for the optimal quality/size trade-off at this resolution.
6. Blog post images use the `loading` transition from Story 6.2: blur placeholder → sharp (fade in 300ms).
7. CLS verification: all images have explicit `width` and `height` or `fill` with parent dimensions — no layout shift during loading.

---

### Story 17.2 — Backdrop-Blur & Glass Effect Performance Budget ✅ COMPLETED

**As a** mobile user scrolling through glass-card-heavy pages,  
**I want** the glass-morphism effects to be visually beautiful without causing jank on mid-range devices,  
**So that** the scrolling experience is smooth at 60fps regardless of how many glass cards are on screen.

**Acceptance Criteria:**

1. `backdrop-blur-xl` (`blur(24px)`) is used only on elements that benefit from it: the header, the mobile menu overlay, and modal backgrounds — NOT on every card.
2. Standard `glass-card` elements use `backdrop-blur-md` (`blur(12px)`) as the maximum — sufficient for the frosted effect without high GPU cost.
3. On mobile (< 768px), `backdrop-blur` is reduced by one step across all elements: `blur-xl → blur-md`, `blur-md → blur-sm`, `blur-sm → blur-none` — mobile GPUs are weaker.
4. All elements with `backdrop-blur` also declare `will-change: backdrop-filter` to promote them to their own compositing layer.
5. No more than 6 overlapping `backdrop-blur` elements are visible in any single viewport frame — this is verified by visual inspection of the pricing page (4 cards) and blog index (6+ cards, some off-screen).
6. The gradient mesh component (`gradient-mesh`) uses `opacity: 0.3` maximum to ensure it doesn't visually compete with glass blurs.
7. A Lighthouse Performance audit is run on the pricing page (highest glass-card density) targeting LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile emulation.

---

## Epic 18 — Cookie Consent Polish ✅ COMPLETED

**Goal:** The cookie consent banner is legally required and often the very first interaction a user has. It must be visually consistent with the brand, crystal clear in its options, and never obstructive beyond what's necessary.

**Files affected:** `src/components/consent/cookie-banner.tsx`, `src/components/consent/cookie-preferences.tsx`

---

### Story 18.1 — Cookie Banner Visual Integration ✅ COMPLETED

**As a** first-time visitor,  
**I want** the cookie banner to match the website's premium glass aesthetic and give me clear, honest choices,  
**So that** my first impression is positive and I trust the site with my consent choices.

**Acceptance Criteria:**

1. The banner is fixed to the bottom of the viewport with `glass-card` styling: `bg-surface/95 backdrop-blur-xl border-t border-glass-border`.
2. Width: `max-w-2xl mx-auto` centred at the bottom with `mb-4 mx-4 rounded-card` — it floats slightly above the bottom edge, not stretching edge-to-edge.
3. The banner slides up from below: `translateY(100%) → translateY(0)` with spring `stiffness: 200, damping: 22`, delayed 1 second after page load (giving the user a moment to see the page first).
4. Content: a brief, human-readable description (not legalese): "We use essential cookies and optional analytics to improve your experience." in `text-foreground-secondary text-sm`.
5. Three action buttons in a row:
   - "Accept All" — variant `primary`, size `sm`.
   - "Essential Only" — variant `secondary` (outlined), size `sm`.
   - "Manage Preferences" — variant `ghost`, size `sm`, opens the detailed preferences panel.
6. The banner does NOT block page content — it overlays at the bottom with sufficient spacing that it doesn't obscure the footer's content.
7. Dismissing the banner (any choice) uses an exit animation: `translateY(0) → translateY(100%), opacity 1→0` over 250ms.
8. Consent choice is persisted in `localStorage` and the banner does not reappear for 365 days (configurable).
9. `aria-live="polite"` on the banner, `role="dialog"`, `aria-label="Cookie consent"`.
10. Focus management: on appearance, focus moves to the banner. After dismissal, focus returns to the previously focused element.

---

## Epic 19 — Mobile Responsive Deep Polish ✅ COMPLETED

**Goal:** Mobile is not a scaled-down desktop — it's its own design context. Touch targets, reading comfort, thumb-zone awareness, and viewport management all require specific attention. This epic goes beyond "it fits on a small screen" to "it was designed for a small screen."

**Files affected:** All page and component files — cross-cutting responsive refinement.

---

### Story 19.1 — Touch Target & Spacing Audit ✅ COMPLETED

**As a** mobile user with average-sized thumbs,  
**I want** every tappable element to have a comfortably large touch target and no two targets to be too close together,  
**So that** I never accidentally tap the wrong thing and the site feels designed for touch — not adapted from mouse.

**Acceptance Criteria:**

1. Every interactive element (`<a>`, `<button>`, input, custom tappable area) has a minimum touch target of `44×44px` (WCAG 2.1 Target Size) on screens < 768px.
2. If the visual element is smaller than 44×44px (e.g. a 24×24px icon button), invisible padding extends the tappable area: `p-2.5` or `min-w-[44px] min-h-[44px]`.
3. No two tappable elements are closer than `8px` apart on mobile — preventing accidental mis-taps.
4. The pricing card CTA buttons increase from `size="sm"` to `size="md"` on mobile (`size={isMobile ? 'md' : 'sm'}`).
5. Footer link items on mobile have `py-3` (48px total height including line-height) for comfortable vertical tapping.
6. The blog category filter chips on mobile have `py-2.5 px-4` (44px total height) — larger than the desktop `py-2 px-3` variant.
7. The newsletter email input increases to `size="lg"` on mobile for easier thumb input.
8. This audit is tested on iOS Safari (where tap areas are most sensitive to incorrect sizing) by visually highlighting all touch targets under 44px using a development overlay.

---

### Story 19.2 — Mobile Typography Scale Fine-Tuning ✅ COMPLETED

**As a** mobile user reading content on a smaller screen,  
**I want** typography sizes, line heights, and spacing to be specifically optimised for the reduced viewport,  
**So that** content is easy to read without zooming and the visual hierarchy remains clear.

**Acceptance Criteria:**

1. Body text on mobile: `text-base` (16px) with `leading-relaxed` (1.75) — never smaller than 16px for body content (preventing text zoom issues on iOS Safari).
2. Display headings scale down proportionally:
   - Desktop `text-5xl` (48px) → Mobile `text-3xl` (30px).
   - Desktop `text-4xl` (36px) → Mobile `text-2xl` (24px).
   - Desktop `text-3xl` (30px) → Mobile `text-xl` (20px).
3. The scaling breakpoint is `md` (768px) — consistent across all headings.
4. Line heights on mobile: headings use `leading-tight` (1.25), body uses `leading-relaxed` (1.75), captions use `leading-normal` (1.5).
5. Paragraph spacing on mobile: `mb-4` (16px) instead of desktop's `mb-6` (24px) — tightening the rhythm for the smaller viewport.
6. The `max-w-prose` (65ch) constraint is removed on mobile (content goes full width with `px-4 sm:px-6` padding) since the viewport naturally limits line length.
7. Code blocks on mobile: `text-sm` (14px) with horizontal scroll enabled and a visible scrollbar to indicate scrollability.
8. No text ever requires horizontal scrolling outside of code blocks — all text wraps naturally within the viewport.

---

## Epic 20 — Cross-Page Harmony Audit ✅

**Goal:** The final epic is a holistic pass across every page to ensure that the polish from Epics 1-19 results in a unified, harmonious experience — not a collection of individually polished but disconnected pages. This is about the transitions between pages, the consistency of recurring elements, and the feeling of a single, coherent product.

**Files affected:** All pages and shared components — this is a cross-cutting quality audit.

---

### Story 20.1 — Page-to-Page Visual Consistency Verification ✅ COMPLETED

**As a** visitor navigating between pages,  
**I want** every page to feel like part of the same product — same spacing rhythms, same colour usage, same interaction patterns,  
**So that** my experience feels cohesive and intentional, building trust in LumenLingo as a quality product.

**Acceptance Criteria:**

1. Section vertical spacing is consistent across all pages:
   - Hero to first section: `section-y` (80px mobile, 120px desktop) everywhere.
   - Between content sections: `section-y` everywhere.
   - Last section to footer: `section-y` everywhere.
   - No page deviates by more than 8px from these values.
2. All glass-card instances use the same `rounded-card` (16px), `border-glass-border`, and `bg-glass` base — no ad-hoc card styling anywhere.
3. All CTA buttons across all pages use the `Button` component — no one-off `<a>` or `<button>` elements with inline styles mimicking button behaviour.
4. Accent colour usage is consistent:
   - Violet: primary brand accent, interactive elements, links.
   - Cyan: secondary accent, "elite" tier, highlights.
   - Amber: tertiary accent, "royal" tier, awards, star ratings.
   - No colour is used for a contradictory purpose anywhere (e.g. amber for a warning when it's a celebration colour).
5. Animation timing is verified against the motion tokens from Story 10.1 — no component uses hard-coded values.
6. Font usage: `font-display` (Cabinet Grotesk) for headings only, `font-sans` (Inter) for everything else. No component uses a third font or applies `font-display` to body text.
7. A visual regression test suite (Playwright + screenshot comparison) captures a full-page screenshot of each major page at desktop (1440px) and mobile (375px) as a baseline for future changes.

---

### Story 20.2 — Shared Section Components Extraction ✅ COMPLETED

**As a** developer maintaining multiple pages with similar section layouts,  
**I want** shared section layout components extracted from repeated patterns,  
**So that** visual consistency is enforced by code — not by developer discipline — and future pages are faster to build.

**Acceptance Criteria:**

1. A `SectionContainer` component is extracted (or the existing one is verified): accepts `children`, `className`, applies `section-y` vertical padding and `container mx-auto px-4 sm:px-6 lg:px-8`.
2. A `SectionHeading` component provides: `h2` with `font-display text-3xl md:text-4xl text-foreground text-center mb-4`, optional subtitle in `text-foreground-secondary text-lg text-center max-w-2xl mx-auto`.
3. A `FeatureGrid` component provides responsive grid layout: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
4. A `GlassCard` component wraps `glass-card` styling with consistent padding (`p-6`), hover lift, and optional `href` prop (rendering as `<Link>` when provided).
5. These shared components are used across homepage, features, pricing, download, and early-access pages — verified by grep that no page duplicates these patterns inline.
6. Each extracted component supports a `className` prop for per-instance overrides when necessary.
7. The shared components are exported from `src/components/ui/` for discoverability.

---

### Story 20.3 — Cross-Page Performance Baseline ✅ COMPLETED

**As a** developer ensuring the polished site remains performant,  
**I want** a documented performance baseline for every page with target thresholds,  
**So that** regressions are caught immediately and performance is treated as a feature, not an afterthought.

**Acceptance Criteria:**

1. Lighthouse Performance scores are documented for every page at both desktop and mobile:
   - Homepage: ≥ 92 desktop, ≥ 85 mobile.
   - Features: ≥ 90 desktop, ≥ 82 mobile.
   - Pricing: ≥ 93 desktop, ≥ 87 mobile.
   - Blog index: ≥ 90 desktop, ≥ 82 mobile.
   - Blog post: ≥ 88 desktop, ≥ 80 mobile.
   - Demo: ≥ 90 desktop, ≥ 85 mobile.
   - Download: ≥ 95 desktop, ≥ 90 mobile.
   - Legal pages: ≥ 95 desktop, ≥ 90 mobile.
2. Core Web Vitals targets:
   - LCP < 2.5s on all pages.
   - FID / INP < 200ms on all pages.
   - CLS < 0.1 on all pages.
3. Total JavaScript bundle size for initial page load (first-party only): < 150KB gzipped.
4. Total CSS size: < 50KB gzipped (Tailwind v4 with purging).
5. A CI check (GitHub Action) runs Lighthouse on the 3 most critical pages (homepage, pricing, blog index) on every PR and fails if scores drop below thresholds.
6. The baseline results are stored in `DESIGN_TOKENS.md` or a new `PERFORMANCE_BASELINE.md` file.

---

### Story 20.4 — Final Accessibility Sweep & Certification ✅

**As a** product owner,  
**I want** a final accessibility audit across all pages confirming WCAG 2.1 AA compliance,  
**So that** we can confidently declare the site accessible and no users are excluded.

**Acceptance Criteria:**

1. Automated axe-core scans pass with zero violations on all 12+ pages (including all legal pages).
2. Manual keyboard navigation test: every interactive feature is operable with keyboard alone — verified for homepage, features, pricing, demo, blog, download, contact, data-request, early-access.
3. Screen reader test: VoiceOver (macOS/iOS) reads a coherent, logical page structure for the homepage and pricing page — verified by a manual tester.
4. Colour contrast: every text/background combination passes the WCAG AA contrast check (verified by automated tooling + spot checks on glass-card surfaces).
5. The `prefers-reduced-motion` preference is respected on every page — all animations are either disabled or replaced with simple cross-fades.
6. `prefers-color-scheme`: since the site is dark-first, ensure that forced-colours mode (Windows High Contrast) doesn't break layout or hide content.
7. All form inputs have visible labels (not just placeholder text). All required fields are marked with `aria-required="true"`.
8. An `ACCESSIBILITY_CHECKLIST.md` is generated documenting what was tested, how, and the results — serving as a living audit trail.

---

---

## Epic 21 — Pre-Launch Integrity & Content Truthfulness ✅

**Goal:** The current frontend presents the product as if it were a fully launched, App Store-available, review-earning application — but it isn't. Not yet. Every claim, every download CTA, every rating star, and every timeline milestone must reflect reality. Users who land on this site should feel the product's momentum and craftsmanship, not catch it pretending. This epic fixes every incongruence between what the site *says* and what the product *is*, introduces a lightweight feature-flag system so launch-day toggles are one env-var flip away, and fills every dead-end link in the footer with a real page. The result: a site that is honest, complete, and ready for the world to audit.

**Current problem:** The App Store download badge appears on 5 pages pointing to a placeholder URL (`idXXXXXXXXX`). A "★★★★★ 4.9 on the App Store" badge is displayed despite zero real reviews. iPhone mockups render skeleton placeholder bars instead of real functionality. The footer links to `/careers`, `/press`, and `/help` pages that don't exist. The about-page timeline claims a "Mid 2025 — App Store Launch" that hasn't happened. The newsletter subscription form is live but the backend isn't ready. Privacy copy makes absolute claims ("we never run external servers") that may become false with a future backend. Homepage spacing creates cramped, unpolished transitions between sections. The pricing hero renders as near-black. Blog cards use generic Lucide icons that make every post look identical. Portuguese appears in language pair data that isn't ready. The feature comparison table mixes boolean and string value types creating visual inconsistencies.

**Files affected:** `src/lib/feature-flags.ts` (new), `src/lib/appStoreConfig.ts`, `src/components/home/app-store-badge.tsx`, `src/components/home/hero-section.tsx`, `src/components/home/cta-banner.tsx`, `src/components/home/iphone-mockup.tsx`, `src/components/home/differentiator-section.tsx`, `src/components/download/download-hero.tsx`, `src/components/download/download-qr.tsx`, `src/components/pricing/pricing-hero.tsx`, `src/components/pricing/feature-comparison-table.tsx`, `src/components/blog/post-card.tsx`, `src/components/about/value-cards.tsx`, `src/components/about/timeline.tsx`, `src/components/newsletter/newsletter-form.tsx`, `src/components/layout/footer.tsx`, `src/components/contact/faq-data.ts`, `messages/en.json`, `src/app/[locale]/careers/page.tsx` (new), `src/app/[locale]/press/page.tsx` (new), `src/app/[locale]/help/page.tsx` (new), `.env.example`

---

### Story 21.1 — Feature Flag System & Pre-Launch Gating ✅

**As a** developer preparing for launch,
**I want** a lightweight, environment-variable-driven feature flag system,
**So that** pre-launch content (App Store links, reviews, newsletter) can be toggled on with a single `.env` change on launch day — no code changes, no redeployment of logic.

**Acceptance Criteria:**

1. A new `src/lib/feature-flags.ts` module exports a `flags` object with at minimum these boolean flags: `APP_STORE_LIVE`, `REVIEWS_LIVE`, `NEWSLETTER_LIVE`. Each reads from a corresponding `NEXT_PUBLIC_FF_*` environment variable (e.g. `NEXT_PUBLIC_FF_APP_STORE_LIVE`), defaulting to `false`.
2. A `useFeatureFlag(name: string): boolean` hook is exported for client components. A `getFeatureFlag(name: string): boolean` function is exported for server components.
3. All flags are documented in `.env.example` with clear comments explaining what each flag controls and what happens when it's `true` vs `false`.
4. The flag system has zero runtime dependencies — no external services, no fetching — purely compile-time env vars inlined by Next.js.
5. When `APP_STORE_LIVE` is `false`, every `AppStoreBadge` component across all 5 usage points (hero-section, cta-banner, download-hero, download-qr, footer) renders an "Available Soon" / "Coming to the App Store" variant instead of the download link. The variant must be visually polished — not a broken or greyed-out button, but a deliberate, beautiful "coming soon" state that maintains the glass-morphism aesthetic.
6. When `REVIEWS_LIVE` is `false`, the "★★★★★ 4.9 on the App Store" badge in `cta-banner.tsx` is replaced with a "Be among the first to try it" or equivalent aspirational message — no star rating, no fabricated number.
7. When `NEWSLETTER_LIVE` is `false`, the `NewsletterForm` component in the footer and blog post pages renders a "Newsletter coming soon — check back later" message instead of a functional form. The age-confirmation checkbox and legal text are hidden.
8. TypeScript types are strict — flag names are a union type, not arbitrary strings.

---

### Story 21.2 — App Store CTAs → "Available Soon" Pre-Launch State ✅

**As a** visitor discovering LumenLingo before it's on the App Store,
**I want** every download CTA to honestly communicate "coming soon" with a way to join the waitlist,
**So that** I'm excited rather than frustrated when clicking a dead App Store link.

**Acceptance Criteria:**

1. The `AppStoreBadge` component in `src/components/home/app-store-badge.tsx` accepts a new `comingSoon?: boolean` prop (default driven by the `APP_STORE_LIVE` feature flag).
2. When `comingSoon` is true, the badge renders: the Apple icon + "Coming Soon to the" / "App Store" text stack, styled with the same glass-morphism card but with a subtle pulsing violet border glow to signal anticipation.
3. The coming-soon variant links to the `/early-access` waitlist page instead of the App Store URL.
4. All 5 usage points (`hero-section.tsx`, `cta-banner.tsx`, `download-hero.tsx`, `download-qr.tsx`, `footer.tsx`) automatically inherit the flag — no per-file changes needed once the badge component respects the flag.
5. The download page's QR code section (`download-qr.tsx`) shows a "Scan to join the waitlist" message instead of "Scan to download" when the flag is off.
6. The `src/lib/appStoreConfig.ts` placeholder IDs (`XXXXXXXXX`, `XXXXXXXXXX`) remain in code but are never rendered to the user when the flag is off — no broken URLs leak to production.

---

### Story 21.3 — iPhone Mockup: Real Functionality Previews ✅

**As a** homepage visitor,
**I want** the iPhone mockups to show real (or beautifully mocked) app functionality,
**So that** I can visualise what the app actually looks like and does — not stare at blurred placeholder bars that undermine trust.

**Acceptance Criteria:**

1. The `iphone-mockup.tsx` component's inner content area replaces the current skeleton UI bars (`<div className="h-8 w-full rounded-lg bg-white/5" />` × 3) with a richly rendered mock of the app's flashcard review screen.
2. The mock flashcard screen includes: a word/translation card with the glass-morphism style, a progress indicator (e.g. "3 of 12"), a language pair label (e.g. "English → Japanese"), and a subtle "Tap to flip" hint — all rendered as styled HTML/SVG, not an image.
3. The mock content animates gently: the card has a soft floating animation (using `spring.gentle`), and the progress updates with a stagger when the component enters the viewport — echoing the "How it feels to learn" section's approach.
4. On mobile viewports (below `md`), the mockup content scales gracefully without clipping or overflow.
5. The screenshot gallery component (`screenshot-gallery.tsx`) is reviewed: if it also contains placeholder/skeleton content, it receives the same treatment — each of the 3 screenshots shows a distinct feature: (a) flashcard review, (b) soundscapes ambient player, (c) breathing orb meditation.
6. All mock content uses the existing design token system (`--color-violet`, `--color-cyan`, `--color-amber`, `glass-card`, `font-display`) — no ad-hoc colours or fonts.

---

### Story 21.4 — Homepage Section Spacing & Visual Rhythm ✅

**As a** user scrolling through the homepage,
**I want** generous, consistent breathing room between every section,
**So that** the page feels considered and luxurious — not cramped, not rushed.

**Acceptance Criteria:**

1. The Key Facts bar in `differentiator-section.tsx` ("9 Languages | 25+ Language Pairs | 12 Soundscapes | 3 Practice Modes") has at minimum `mb-16 md:mb-24` (or equivalent `--spacing-section-y` token) below it, creating clear separation from whatever follows.
2. Every `<Section>` wrapper on the homepage has consistent vertical padding following the project's `--spacing-section-y` CSS custom property. Specifically audit and fix: `HeroSection` → `FeatureShowcase` → `ScreenshotGallery` → `DifferentiatorSection` → `CTABanner` transitions.
3. The "Designed to Inspire" section (if part of `FeatureShowcase` or a standalone component) has at minimum `pt-16 md:pt-24` of top padding — no content should ever feel like it's colliding with the section above.
4. On mobile (below `md`), section spacing reduces proportionally (e.g. `py-12` instead of `py-24`) but never collapses entirely — minimum `48px` between sections.
5. The stats bar itself retains its current `p-8 gap-8` but its container wrapper gets explicit bottom margin to prevent the "no space below" problem.
6. A visual regression screenshot test covers the homepage at mobile (375px) and desktop (1440px) to baseline the new spacing — added to `e2e/visual-regression.spec.ts`.

---

### Story 21.5 — Pricing Hero: Fix Black Void Background ✅

**As a** visitor navigating to the Pricing page,
**I want** the hero section to have a visible, atmospheric background that matches the site's cosmic glass-morphism aesthetic,
**So that** the heading/subheading content doesn't float in an impenetrable black void.

**Acceptance Criteria:**

1. The `pricing-hero.tsx` `StarField` component's background is verified to render visible stars. If the star density or opacity is too low, increase star count or base opacity so stars are perceptible within 1 second of page load.
2. The gradient accent blobs (`bg-violet/8`, `bg-cyan/6`, `bg-amber/4`) have their opacity increased to at minimum `/12`, `/10`, `/8` respectively — enough to create visible atmospheric colour without overwhelming the text.
3. The hero section has a subtle radial gradient from `surface` at edges to `background` at centre, preventing the completely flat black appearance. Consider `bg-gradient-to-b from-surface/50 via-background to-background`.
4. On mobile, the gradient blobs scale down proportionally (smaller `h-[300px] w-[400px]`) but remain visible — the section should never appear as solid black on any viewport.
5. The heading "Simple, Transparent Pricing" and subheading text pass WCAG AA contrast against the new background treatment — verified with `get_errors` and a Lighthouse accessibility check.
6. Content that scrolls behind/below the pricing hero (if the page has `overflow: hidden` or layering issues) is not clipped or hidden — structural z-index and overflow properties are audited.

---

### Story 21.6 — Feature Comparison Table: Consistency Pass ✅

**As a** prospective customer comparing pricing tiers,
**I want** the feature comparison table to present information in a visually consistent, immediately scannable format,
**So that** I can make an informed purchasing decision without confusion.

**Acceptance Criteria:**

1. All boolean values in the table render as consistent visual icons: `true` → a check icon (✓) with the tier's accent colour, `false` → a dash icon (—) in `foreground-muted`. No mixing of `true`/`false` booleans with string values like `'1'` or `'8'` in the Soundscapes and Quantum Flow rows.
2. Numeric-limit cells (e.g. "1", "8", "All 12") use a consistent typographic treatment: the number in `font-display font-semibold` and any qualifier ("All") in regular weight. String values like "All 12 Soundscapes" are shortened to just "All 12" with the feature name already in the row label.
3. The "Unlimited" values (Flashcard Deck Size for Royal, Daily Practice Limit for Pro/Elite/Royal) render with a consistent infinity symbol (∞) or "Unlimited" text — not mixed approaches.
4. Row category headers ("Learning Features", "Immersive Experience", etc.) have clear visual separation — a thicker divider or background-tint stripe above each category group.
5. On mobile, the table is horizontally scrollable with a subtle scroll-hint gradient on the right edge (no content clipping). The first column (feature name) remains sticky.
6. The table's tier header row uses each tier's accent colour (`foreground-muted`, `violet`, `cyan`, `amber`) consistently — the current implementation is verified or corrected.

---

### Story 21.7 — Remove Portuguese Language References ✅

**As a** product owner maintaining content accuracy,
**I want** all references to Portuguese removed from the frontend until the language is ready,
**So that** users are never promised a language pair that doesn't exist.

**Acceptance Criteria:**

1. Every occurrence of "Portuguese", "Português", "pt-BR", "pt-PT", or "pt" as a language identifier is removed from all frontend source files, translation files (`messages/*.json`), and data files.
2. Language-pair counts that reference Portuguese are updated: if "25+ Language Pairs" includes Portuguese pairs, the number is recalculated and the stats bar, download page features, and any other mentions of pair/language counts are corrected.
3. The differentiator section's "9 Languages" stat is verified — if Portuguese is one of the 9, it becomes "8 Languages" (or whatever the accurate count is).
4. A `grep` search for `[Pp]ortugu|pt-BR|pt-PT` across the entire `lumen-lingo-frontend/` directory returns zero matches after this story is complete.
5. The language selector on the waitlist form (`LANGUAGES` array in `waitlist-form.tsx`) does not include Portuguese.

---

### Story 21.8 — Remove Fabricated Reviews & Rating ✅

**As a** visitor evaluating LumenLingo,
**I want** the site to never display fabricated reviews, star ratings, or App Store metrics,
**So that** my trust isn't betrayed when I discover the app isn't even on the App Store yet.

**Acceptance Criteria:**

1. The `cta-banner.tsx` "★★★★★ 4.9 on the App Store" badge is removed or replaced (gated by the `REVIEWS_LIVE` feature flag from Story 21.1). When the flag is off, the space shows an aspirational but honest message (e.g. "Join thousands on the waitlist" or "Built by language lovers, for language lovers").
2. The footer's `/#testimonials` anchor link is removed entirely — it points to a section that does not exist. Replace it with a link to `/early-access` labelled "Early Access" or remove the "Reviews" footer item until the section exists.
3. No file anywhere in the frontend renders hardcoded star counts, rating numbers, or review text that implies real user feedback exists. A `grep` search for `4.9|4.8|★★★★★|testimonial` in component files returns zero matches when `REVIEWS_LIVE` is `false` at build time (or renders nothing at runtime).
4. When `REVIEWS_LIVE` is eventually set to `true`, the star badge and any testimonial section re-appear — the code isn't deleted, just gated.
5. The "How It Works" footer link (`/#how-it-works`) is verified to scroll to a real section on the homepage. If the anchor doesn't exist, either create the section or remove the link.

---

### Story 21.9 — Blog Card Visual Differentiation & Icon Craft ✅

**As a** blog reader browsing post listings,
**I want** each blog category to have a distinct, beautiful, bespoke icon (not generic Lucide defaults),
**So that** I can visually scan the grid and instantly distinguish App Updates from Learning Science from Culture guides — and every card feels like a lovingly designed artefact.

**Acceptance Criteria:**

1. Each blog category receives a unique, custom SVG icon rendered inline (not an emoji, not a generic Lucide icon). The icons should be thematic and evocative:
   - **Language Tips** → a stylised speech bubble or quill
   - **App Updates** → a rocket or sparkle burst
   - **Learning Science** → a brain with neural connections or a lightbulb with orbits
   - **Culture** → a globe with cultural motifs or a compass rose
   - **Guides** → an open book with radiating lines or a map with route
2. Each icon is sized consistently (`w-5 h-5` or `w-6 h-6`), uses the category's existing accent colour (violet, cyan, amber, emerald, rose), and sits alongside — or replaces — the category badge text.
3. The icons are defined in the existing `src/components/icons/` directory (created in Epic 1) as named React components, following the established icon system conventions.
4. Featured blog cards (the large hero card) display the icon at a larger size (`w-8 h-8`) with a subtle glow matching the category colour.
5. On hover, the icon has a gentle rotation or scale micro-interaction using `spring.snappy` from the motion token system — delightful but not distracting.
6. The visual change is tested in `e2e/visual-regression.spec.ts` with a blog page screenshot baseline.

---

### Story 21.10 — Privacy Copy: Honest & Future-Proof Language ✅

**As a** product team preparing for potential backend services,
**I want** all privacy-related copy rewritten to be accurate today and not paint us into a corner tomorrow,
**So that** we maintain user trust and legal accuracy regardless of future architecture decisions.

**Acceptance Criteria:**

1. The `value-cards.tsx` "Privacy First" card description is rewritten from "We process everything on-device, sync through your personal iCloud, and **never run external servers** that store your information" to language that is accurate now and resilient to change. Example: "Your learning data lives on your device and syncs through your personal iCloud. We designed LumenLingo so your data stays under your control — today that means no external servers touch your information."
2. The `faq-data.ts` entries referencing "we never store data on external servers" are reworded to "Currently, all personal learning data remains on-device and iCloud. We don't operate external databases for user data" — factually identical today but doesn't use "never" as an absolute.
3. The `messages/en.json` privacy section "No external servers" text is updated consistently with the same careful language.
4. All updated copy maintains the warm, confident, user-first tone of the existing site — this is not a corporate disclaimer, it's a reassurance.
5. A `grep` search for `never run external servers|never store.*external|never see` in the frontend returns zero matches after this story. The word "never" is avoided in architecture claims.
6. If other language translation files (`messages/pl.json`, `messages/fr.json`, etc.) contain translated versions of these claims, they are flagged for translation update (translations themselves are out of scope, but the English source-of-truth strings must be correct).

---

### Story 21.11 — About Page: Honest, Accurate Journey Timeline ✅

**As a** visitor reading about LumenLingo's origins,
**I want** the journey timeline to accurately reflect the real development history,
**So that** the narrative is authentic and inspires confidence rather than raising questions.

**Acceptance Criteria:**

1. The `timeline.tsx` milestones are rewritten to reflect reality:
   - **"Late 2025 — The Spark"**: First working prototype built — a weekend hackathon that refused to stay a weekend. The mission: make language learning feel beautiful.
   - **"Early 2026 — Building Brick by Brick"**: Iteration after iteration. Flashcard engine, spaced repetition algorithm, 9 languages, soundscapes, breathing orbs — each feature hand-polished before moving to the next.
   - **"March 2026 — Approaching Launch"**: Beta testing with early adopters. Premium tiers refined. The website you're reading right now, crafted with the same obsessive care as the app itself.
   - **"The Road Ahead"**: New practice modes, community features, and the App Store launch. Built by a solo developer with the ambition of a studio and the attention to detail of an artisan.
2. The "Mid 2025 — App Store Launch" milestone is removed — the app has not launched on the App Store.
3. Timeline dates are accurate and internally consistent with the rest of the site (e.g. the about page body text, any blog posts referencing history).
4. The visual timeline component itself is unchanged — only the data/content is updated.
5. The tone is aspirational, personal, and genuine — communicating momentum without overpromising.

---

### Story 21.12 — Newsletter Section: Feature-Flagged Until Ready ✅

**As a** product owner who doesn't have a newsletter backend in place,
**I want** the newsletter subscription form hidden behind a feature flag,
**So that** users aren't frustrated by a form that doesn't work or a subscription they'll never receive.

**Acceptance Criteria:**

1. The `NewsletterForm` component checks the `NEWSLETTER_LIVE` feature flag (from Story 21.1).
2. When `NEWSLETTER_LIVE` is `false`, the footer's newsletter section renders a beautiful "Stay tuned" message: "We're preparing something special. Follow us on [social links] for updates." — styled with the existing glass-morphism aesthetic, not a blank gap.
3. When `NEWSLETTER_LIVE` is `false`, the `BlogNewsletterCTA` component in blog post pages either renders nothing or shows the same "Stay tuned" placeholder — no orphaned email form.
4. The age-confirmation checkbox, legal consent text, and email input are completely hidden (not just `disabled`) when the flag is off — there must be no broken-looking form elements.
5. When the flag is eventually set to `true`, the full newsletter form re-appears with all functionality intact — submit handler, validation, age confirmation, success animation.
6. The newsletter API route (`/api/newsletter`) gracefully returns a clear error if called while the flag is off — in case any cached page submits the form.

---

### Story 21.13 — Missing Footer Pages: Careers, Press Kit & Help Centre ✅

**As a** visitor clicking any footer link,
**I want** every single link to land on a real, thoughtfully designed page,
**So that** I never encounter a 404 error or a dead end — every corner of this site should feel finished.

**Acceptance Criteria:**

1. **Careers page** (`/[locale]/careers`): A beautifully designed page that honestly communicates the company's current stage: "We're a small, passionate team (currently a solo founder) building something we believe in. As LumenLingo grows, so will the team. Interested in joining the journey? Reach out at careers@lumenshore.com." Styled with the `Section`, `Container`, `Heading` components. Includes a brief "What we value" section with 3-4 values. No fake job listings.
2. **Press Kit page** (`/[locale]/press`): A professional press page with: company description (2-3 paragraphs), founder info, brand assets section (logo download links or "Brand assets available on request"), key stats (languages, features, launch timeline), media contact email, and a "In the news" section that starts empty with a "Coverage coming soon — we'd love to hear from you" message. Follows the legal-page layout pattern.
3. **Help Centre page** (`/[locale]/help`): A hub page with: a search bar (UI only — filtering FAQ items client-side), grouped FAQ sections pulling from or extending `faq-data.ts`, quick-link cards to `/contact`, `/data-request`, and `/accessibility`, and a "Can't find what you're looking for?" CTA linking to `/contact`. Styled with glass cards and the existing `Section` / `Container` components.
4. All three pages have proper `<title>` and `meta description` tags for SEO.
5. All three pages are internationalised: translation keys are added to `messages/en.json` (English content is sufficient; other languages are out of scope but the i18n structure must be in place).
6. The footer links for "Careers", "Press Kit", and "Help Centre" are verified to correctly navigate to these new pages with the locale prefix.
7. Each page follows the existing design system: dark background, glass-morphism cards, `font-display` headings, `font-sans` body, Violet/Cyan/Amber accent palette.

---

*End of FrontendPolishing.md — 21 Epics, 65+ Stories, each crafted with obsessive attention to the user experience, visual craft, accessibility, and performance that transforms a good frontend into one that makes users fall in love.*
