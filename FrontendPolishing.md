# Frontend Polishing — Product Backlog

> **Document owner:** Product  
> **Last updated:** 2026-03-24  
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
- [Epic 12 — Accessibility Deep Polish](#epic-12--accessibility-deep-polish)
- [Epic 13 — Download & Conversion Flow](#epic-13--download--conversion-flow)
- [Epic 14 — Early Access & Referral Delight](#epic-14--early-access--referral-delight)
- [Epic 15 — Legal Pages Consistency](#epic-15--legal-pages-consistency)
- [Epic 16 — Error & Edge-Case States](#epic-16--error--edge-case-states)
- [Epic 17 — Performance & Perceived Speed](#epic-17--performance--perceived-speed)
- [Epic 18 — Cookie Consent Elegance](#epic-18--cookie-consent-elegance)
- [Epic 19 — Mobile-First Responsive Craft](#epic-19--mobile-first-responsive-craft)
- [Epic 20 — Cross-Page Visual Harmony Audit](#epic-20--cross-page-visual-harmony-audit)

---

## Epic 1 — Unified Icon System

**Goal:** Eliminate the current inconsistency where some features use raw Unicode emojis (🃏, 🧠, 🎧, 🔮, 📊, 👑) while others use hand-crafted SVG icons. A premium product must never mix playground emojis with bespoke design. Every icon across every page must come from a single, cohesive, purpose-built icon set that reinforces the glass-morphism cosmic aesthetic.

**Current problem:** The features-content.tsx component contains beautiful custom SVG icons for each feature (flashcards, spaced repetition, soundscapes, etc.) but the screenshot-gallery.tsx, iphone-mockup.tsx, and download-showcase.tsx components use emoji characters (🃏, 🧠, 🎧) for the same features. The animated-walkthroughs.tsx uses yet another set of emojis (☕, 🌊, 🌌, 🇫🇷, ⛰️) for soundscape presets. This three-way split undermines the premium feel.

**Files affected:** `src/components/home/screenshot-gallery.tsx`, `src/components/home/iphone-mockup.tsx`, `src/components/download/download-showcase.tsx`, `src/components/features/animated-walkthroughs.tsx`, `src/components/features/features-content.tsx`, `src/components/features/features-hero.tsx`, `src/components/pricing/pricing-hero.tsx`, `src/components/demo/flashcard-demo.tsx`

---

### Story 1.1 — Create a Centralised Icon Component Library

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

### Story 1.2 — Replace Emoji Icons in Screenshot Gallery & iPhone Mockup

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

### Story 1.3 — Replace Emoji Icons in Soundscape Walkthrough

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

### Story 1.4 — Replace Emoji Icons in Features Hero Badges

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

### Story 1.5 — Replace Emoji Icons in Pricing Hero Badges

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

### Story 1.6 — Replace Emoji Feedback in Flashcard Demo Completion Screen

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

### Story 1.7 — Remove All Remaining Stray Emoji from Non-Editorial Components

**As a** developer performing a final sweep,  
**I want** a clean-room audit confirming zero Unicode emoji characters remain in any `.tsx` component file,  
**So that** we can confidently state the entire UI uses a unified, accessible, cross-platform-consistent icon language.

**Acceptance Criteria:**

1. A grep/search for Unicode emoji ranges (`[\u{1F300}-\u{1F9FF}]`, `[\u{2600}-\u{26FF}]`, `[\u{2700}-\u{27BF}]`) across `src/components/**/*.tsx` and `src/app/**/*.tsx` returns zero matches.
2. Exception: `src/components/blog/mdx-components.tsx` may retain emoji in the callout block configuration (💡, ✨, ⚠️, 🔬, ✅, 🚀) since these are editorial content, not UI chrome — and each already has `aria-hidden="true"`.
3. No new emoji characters are introduced in any future component without a documented exception in the icon library README.
4. The PR includes a one-line ESLint comment or CI grep check that flags emoji in .tsx files (excluding mdx-components.tsx) to prevent regression.

---

## Epic 2 — Homepage & Hero Polish

**Goal:** The homepage is the first impression. Every element — from the hero animation to the trust bar to the screenshot carousel — must feel effortless, premium, and magnetically engaging. Visitors should feel the quality before they even read a word.

**Files affected:** `src/app/[locale]/page.tsx`, `src/components/home/hero-section.tsx`, `src/components/home/iphone-mockup.tsx`, `src/components/home/screenshot-gallery.tsx`, `src/components/home/feature-showcase.tsx`, `src/components/home/differentiator-section.tsx`, `src/components/home/cta-banner.tsx`, `src/components/home/gradient-mesh.tsx`

---

### Story 2.1 — Hero Section Entrance Choreography

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

### Story 2.2 — iPhone Mockup Interactive Polish

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

### Story 2.3 — Screenshot Gallery Carousel Haptic Feel

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

### Story 2.4 — Feature Showcase Cards Hover Micro-Interactions

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
