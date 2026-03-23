# LumenLingo — Premium Marketing Website

## Frontend Product Specification

**Product**: LumenLingo (iOS Language Learning App)
**Company**: LumenShore
**Project**: `lumen-lingo-frontend`
**Stack**: Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Vercel
**Strategy**: Blog-first SEO · Dark premium aesthetic · Mobile-first conversion
**Target Audience**: iPhone users seeking a premium, immersive language learning experience

---

## Technical Foundation

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 (App Router) | SSR/SSG, routing, metadata API |
| UI | React 19, Tailwind CSS 4 | Component architecture, utility-first styling |
| Language | TypeScript 5 (strict) | Type safety across the entire codebase |
| Hosting | Vercel | Edge deployment, analytics, image optimisation |
| SEO | Blog-first content strategy | Organic traffic acquisition, topical authority |
| Analytics | Vercel Analytics + Plausible | Privacy-respecting visitor insights |
| CMS | MDX (local) | Blog content with embedded React components |
| Animation | Framer Motion | Scroll-driven reveals, parallax, micro-interactions |

---

## Design System Principles

- **Dark-first**: Deep charcoal (`#0a0a0f`) base with luminous violet (`#8b5cf6`) and cyan (`#06b6d4`) accents
- **Glass morphism**: Frosted glass cards with subtle border luminescence
- **Typographic hierarchy**: Inter for body, Satoshi or Cabinet Grotesk for display headings
- **Spatial breathing**: Generous whitespace; sections separated by 120–160 px vertical rhythm
- **Micro-motion**: Every interactive element has a purposeful, spring-based animation
- **Accessibility**: WCAG 2.1 AA minimum; all motion respects `prefers-reduced-motion`

---

# Epic 1 — Project Scaffolding & Design System

> Establish the foundational Next.js project, CI/CD pipeline, design tokens,
> and reusable component primitives that every subsequent epic depends on.

## Story 1.1 — Repository & Next.js Project Initialisation

**As a** developer,
**I want** a production-ready Next.js 15 project with App Router, TypeScript strict mode, and Tailwind CSS 4,
**So that** all team members can begin building pages on a consistent, type-safe foundation.

### Acceptance Criteria

- [x] Repository `lumen-lingo-frontend` is created with a clean `main` branch and branch protection rules
- [x] `npx create-next-app@latest` with App Router, TypeScript, Tailwind CSS, ESLint, and `src/` directory
- [x] `tsconfig.json` has `"strict": true`, `"noUncheckedIndexedAccess": true`
- [x] Tailwind config extends the LumenShore design tokens (colours, fonts, spacing, border-radius)
- [x] ESLint + Prettier configured with consistent formatting rules
- [x] `.nvmrc` pins Node.js 22 LTS
- [x] `README.md` documents local setup, environment variables, and project structure

### Subtasks

- [x] 1.1.1 — Run `create-next-app` with App Router + TypeScript + Tailwind CSS + ESLint + `src/` directory
- [x] 1.1.2 — Configure `tsconfig.json` with strict settings and path aliases (`@/components`, `@/lib`, etc.)
- [x] 1.1.3 — Install and configure Prettier with Tailwind CSS class sorting plugin
- [x] 1.1.4 — Add `.nvmrc` (Node 22), `.editorconfig`, and `.gitignore` refinements
- [x] 1.1.5 — Create `README.md` with setup instructions, scripts, and architecture overview
- [x] 1.1.6 — Verify `npm run dev`, `npm run build`, and `npm run lint` all pass cleanly

---

## Story 1.2 — Vercel Deployment Pipeline

**As a** developer,
**I want** automatic preview deployments on every PR and production deployment on `main`,
**So that** stakeholders can review changes in a real environment before merge.

### Acceptance Criteria

- [ ] Vercel project is linked to the `lumen-lingo-frontend` repository
- [ ] Every pull request generates a unique preview URL with the Vercel bot comment
- [ ] Merges to `main` auto-deploy to `lumenlingo.com` production domain
- [ ] Environment variables for analytics, CMS, and feature flags are configured per environment
- [ ] Vercel Analytics and Speed Insights are enabled
- [ ] Custom domain `lumenlingo.com` is configured with SSL and `www` redirect

### Subtasks

- [ ] 1.2.1 — Link repository to Vercel project via the Vercel dashboard
- [ ] 1.2.2 — Configure custom domain `lumenlingo.com` with DNS records and SSL certificate
- [ ] 1.2.3 — Set environment variables: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ANALYTICS_ID`
- [ ] 1.2.4 — Enable Vercel Analytics and Speed Insights in the project settings
- [ ] 1.2.5 — Verify preview deployment URL is generated and accessible on a test PR
- [ ] 1.2.6 — Verify production deployment on merge to `main` serves correctly at `lumenlingo.com`

---

## Story 1.3 — Design Token System & Tailwind Theme

**As a** designer/developer,
**I want** a centralised design token system expressed through Tailwind CSS configuration,
**So that** every component draws from a single source of truth for colours, typography, spacing, and effects.

### Acceptance Criteria

- [x] `tailwind.config.ts` defines the complete LumenShore colour palette:
  - `background`: `#0a0a0f` (deep void), `#111118` (elevated surface), `#1a1a24` (card surface)
  - `foreground`: `#f4f4f5` (primary text), `#a1a1aa` (secondary text), `#71717a` (muted text)
  - `accent-violet`: `#8b5cf6` (primary CTA), `#7c3aed` (hover), `#6d28d9` (active)
  - `accent-cyan`: `#06b6d4` (secondary accent), `#0891b2` (hover)
  - `accent-amber`: `#f59e0b` (rating stars, premium badge)
  - `glass`: `rgba(255, 255, 255, 0.04)` (glass fill), `rgba(255, 255, 255, 0.08)` (glass border)
- [x] Typography scale uses `Inter` for body and `Cabinet Grotesk` (or Satoshi) for display
- [x] Custom Tailwind utilities: `glass-card`, `glow-violet`, `glow-cyan`, `text-gradient`
- [x] Spacing follows an 8 px base grid with named tokens: `section-y` (120 px), `card-gap` (24 px)
- [x] Border radius tokens: `card` (16 px), `button` (12 px), `pill` (9999 px)
- [x] All tokens are documented in a `DESIGN_TOKENS.md` file

### Subtasks

- [x] 1.3.1 — Define colour palette in `tailwind.config.ts` under `theme.extend.colors`
- [x] 1.3.2 — Add `Inter` and `Cabinet Grotesk` via `next/font` with font-display swap
- [x] 1.3.3 — Create custom Tailwind plugin for glass morphism utilities (`glass-card`, `glass-border`)
- [x] 1.3.4 — Create custom Tailwind plugin for glow effects (`glow-violet`, `glow-cyan`, `glow-amber`)
- [x] 1.3.5 — Create `text-gradient` utility for gradient text headings
- [x] 1.3.6 — Define spacing, border-radius, and shadow tokens
- [x] 1.3.7 — Write `DESIGN_TOKENS.md` documenting every token with visual examples
- [x] 1.3.8 — Add `globals.css` with CSS custom properties mirroring Tailwind tokens for runtime access

---

## Story 1.4 — Reusable Component Primitives

**As a** developer,
**I want** a library of foundational UI primitives (Button, Card, Badge, Container, Section),
**So that** page-level components compose from consistent, accessible, animated building blocks.

### Acceptance Criteria

- [x] `<Button>` component supports variants: `primary` (violet glow), `secondary` (glass), `ghost`, `link`
- [x] `<Button>` supports sizes: `sm`, `md`, `lg`, `xl` with appropriate padding and font scaling
- [x] `<Button>` includes hover glow animation, press scale (0.97), and focus-visible ring
- [x] `<GlassCard>` component renders a frosted glass surface with configurable tint colour, border glow, and hover lift
- [x] `<Badge>` component supports `tier` (Pro/Elite/Royal colour), `status`, and `tag` variants
- [x] `<Container>` component constrains content to `max-w-7xl` with responsive horizontal padding
- [x] `<Section>` component provides vertical rhythm (120 px padding) and optional background pattern
- [x] All components forward refs, accept `className` prop, and are compatible with `asChild` composition
- [x] All components have TypeScript interfaces with JSDoc comments

### Subtasks

- [x] 1.4.1 — Create `<Button>` with variant/size matrix, Framer Motion press/hover animations
- [x] 1.4.2 — Create `<GlassCard>` with glass morphism background, border glow, and hover lift effect
- [x] 1.4.3 — Create `<Badge>` with tier-coloured, status, and tag variants
- [x] 1.4.4 — Create `<Container>` with responsive max-width and padding
- [x] 1.4.5 — Create `<Section>` with vertical spacing, optional ID for anchor links, and background slot
- [x] 1.4.6 — Create `<Heading>` component with gradient text option and size variants (h1–h4)
- [x] 1.4.7 — Create `<Text>` component with colour and size variants for body copy
- [x] 1.4.8 — Export all primitives from `@/components/ui/index.ts` barrel file

---

## Story 1.5 — Animation Foundation & Motion Primitives

**As a** developer,
**I want** reusable Framer Motion animation primitives and scroll-driven reveal components,
**So that** every section of the site has consistent, performant entrance animations.

### Acceptance Criteria

- [x] `<FadeIn>` component animates children from opacity 0 → 1 with configurable delay and direction
- [x] `<StaggerChildren>` component staggers child animations with configurable interval (default 0.1 s)
- [x] `<ParallaxLayer>` component shifts content on scroll at a configurable speed factor
- [x] `<CountUp>` component animates a number from 0 to a target value on scroll intersection
- [x] All motion components check `prefers-reduced-motion` and disable animation accordingly
- [x] Shared animation variants are defined in `@/lib/motion.ts` for reuse across the codebase
- [x] Scroll-triggered animations use Intersection Observer (not scroll event listeners) for performance

### Subtasks

- [x] 1.5.1 — Create `@/lib/motion.ts` with shared animation variants: `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleIn`, `blur`
- [x] 1.5.2 — Create `<FadeIn>` wrapper using `motion.div` with `whileInView` and viewport `once: true`
- [x] 1.5.3 — Create `<StaggerChildren>` using `staggerChildren` in parent variant
- [x] 1.5.4 — Create `<ParallaxLayer>` using `useScroll` + `useTransform` for vertical parallax
- [x] 1.5.5 — Create `<CountUp>` using `useInView` + `useMotionValue` + `useTransform` for animated counters
- [x] 1.5.6 — Create `useReducedMotion` hook wrapping `window.matchMedia('(prefers-reduced-motion: reduce)')`
- [x] 1.5.7 — Integrate reduced-motion check into all motion components

---

## Story 1.6 — Global Layout Shell

**As a** visitor,
**I want** a consistent navigation header, footer, and page transition wrapper across all pages,
**So that** the site feels like a cohesive, premium product experience.

### Acceptance Criteria

- [x] Root layout (`app/layout.tsx`) sets dark theme, loads fonts, injects analytics, and wraps children in `<Container>`
- [x] `<Header>` is fixed, transparent on scroll-top, and gains a glass backdrop on scroll
- [x] `<Header>` contains: LumenShore logo, nav links (Features, Pricing, Blog, About), CTA "Download" button
- [x] `<Header>` is fully responsive: hamburger menu on mobile with slide-in glass panel
- [x] `<Footer>` contains: logo, link columns (Product, Company, Resources, Legal), App Store badge, social links
- [x] `<Footer>` has a subtle top border glow separating it from page content
- [x] Page transitions use a fade + slight vertical shift between routes
- [x] Skip-to-content link is present for keyboard navigation

### Subtasks

- [x] 1.6.1 — Create `app/layout.tsx` with font loading, theme class, metadata defaults, and analytics script
- [x] 1.6.2 — Create `<Header>` with logo, desktop navigation, and scroll-based glass backdrop transition
- [x] 1.6.3 — Create mobile hamburger menu with slide-in glass panel and staggered link animation
- [x] 1.6.4 — Create `<Footer>` with link columns, App Store badge, social icons, and glow border
- [x] 1.6.5 — Add `<PageTransition>` wrapper with Framer Motion `AnimatePresence` and route-keyed animation
- [x] 1.6.6 — Add skip-to-content link with focus-visible styling
- [x] 1.6.7 — Test header/footer responsiveness across mobile, tablet, and desktop breakpoints

---

# Epic 2 — Homepage: Hero, Social Proof & Conversion

> Design and build the flagship landing page that communicates LumenLingo's premium value,
> showcases the app's beauty, builds trust through social proof, and drives App Store downloads.

## Story 2.1 — Hero Section with Animated App Preview

**As a** first-time visitor,
**I want** to immediately understand what LumenLingo is and see how stunning it looks,
**So that** I feel compelled to learn more and download the app.

### Acceptance Criteria

- [x] Hero occupies the full viewport height (100 dvh) with a centred content layout
- [x] Headline uses gradient text: "Master Languages Through Immersive Experiences"
- [x] Subheadline communicates the core value: "LumenLingo transforms language learning into a breathtaking visual journey — flashcards, soundscapes, and adaptive practice wrapped in a stunning, handcrafted interface."
- [x] Primary CTA: "Download on the App Store" button with violet glow and App Store icon
- [x] Secondary CTA: "Watch Demo" ghost button that scrolls to a video section or opens a modal
- [x] Floating iPhone mockup displays animated app screenshots (auto-cycling with crossfade)
- [x] Background features a subtle cosmic particle field or animated gradient mesh matching the app's nebula aesthetic
- [x] Trust bar below CTAs: "9 Languages · 25+ Language Pairs · 12 Ambient Soundscapes · Free to Start"
- [x] All elements animate in with staggered fade-up on page load
- [x] On mobile, the iPhone mockup stacks below the text content

### Subtasks

- [x] 2.1.1 — Create `<HeroSection>` component with responsive two-column (desktop) / stacked (mobile) layout
- [x] 2.1.2 — Build animated gradient mesh background using CSS `@keyframes` or canvas
- [x] 2.1.3 — Create `<IPhoneMockup>` component with device frame and screenshot carousel (auto-cycle every 4 s)
- [x] 2.1.4 — Implement staggered entrance animation for headline → subheadline → CTAs → trust bar
- [x] 2.1.5 — Create `<AppStoreBadge>` component with Apple-compliant App Store download badge
- [x] 2.1.6 — Add trust bar with key stats: language count, soundscape count, and free-to-start messaging
- [x] 2.1.7 — Ensure hero renders correctly on viewports from 320 px to 2560 px wide
- [x] 2.1.8 — Optimise background animation for 60 fps; disable on reduced-motion preference

---

## Story 2.2 — Feature Showcase Grid

**As a** potential user,
**I want** to see LumenLingo's key features explained with beautiful visuals,
**So that** I understand the full breadth of what the app offers before downloading.

### Acceptance Criteria

- [x] Section title: "Everything You Need to Master a New Language" with gradient accent
- [x] 6 feature cards arranged in a responsive grid (3 × 2 desktop, 2 × 3 tablet, 1 × 6 mobile)
- [x] Each card is a glass morphism surface with:
  - Icon or mini-illustration (SVG or Lottie)
  - Feature title (e.g., "Immersive Flashcards", "Smart Practice", "Soundscapes")
  - 2–3 sentence description
  - Hover: subtle lift + border glow intensification
- [x] Features to showcase:
  1. **Immersive Flashcards** — "Beautiful glass-morphic cards with smooth gestures and instant feedback"
  2. **Smart Practice** — "Spaced repetition recommendations that adapt to your learning pace"
  3. **Rich Soundscapes** — "Ambient audio environments that enhance focus and retention"
  4. **Breathing Orbs** — "Calming visual backgrounds that reduce learning anxiety"
  5. **25+ Language Pairs** — "9 languages including Spanish, French, Japanese, German, Arabic, Chinese, and more"
  6. **Progress Tracking** — "Comprehensive statistics, streaks, and mastery indicators"
- [x] Cards animate in with staggered fade-up on scroll intersection
- [x] Section background has a subtle radial gradient emanating from the centre

### Subtasks

- [x] 2.2.1 — Create `<FeatureShowcase>` section component with responsive grid layout
- [x] 2.2.2 — Create `<FeatureCard>` component with icon, title, description, glass styling, and hover animation
- [x] 2.2.3 — Source or create 6 feature icons/illustrations (SVG preferred for performance)
- [x] 2.2.4 — Write feature copy for all 6 cards (concise, benefit-oriented)
- [x] 2.2.5 — Add staggered scroll-reveal animation using `<StaggerChildren>` and `<FadeIn>`
- [x] 2.2.6 — Add subtle radial gradient background to the section
- [x] 2.2.7 — Test grid responsiveness across all breakpoints

---

## Story 2.3 — App Screenshot Gallery with Device Frames

**As a** potential user,
**I want** to see real screenshots of LumenLingo in beautiful device mockups,
**So that** I can appreciate the app's visual quality and UI design before downloading.

### Acceptance Criteria

- [x] Section title: "Designed to Inspire" with a secondary line: "Every screen crafted with intention"
- [x] Horizontal scrolling gallery of 5–8 iPhone screenshots in device frames
- [x] Screenshots showcase: Flashcard view, Practice mode, Soundscapes screen, Settings/Orbs, Progress dashboard, Membership tiers
- [x] Gallery supports touch/mouse drag scrolling with momentum
- [x] Active (centred) screenshot is scaled up (1.1×) with a violet glow; others are dimmed (0.7 opacity)
- [x] Navigation dots below the gallery indicate current position
- [x] Each screenshot has a caption describing the screen
- [x] On desktop, the gallery shows 3 screenshots visible at once; on mobile, 1 with peek of adjacent

### Subtasks

- [x] 2.3.1 — Create `<ScreenshotGallery>` component with horizontal scroll and snap behaviour
- [x] 2.3.2 — Create `<DeviceFrame>` component with iPhone 16 Pro bezel wrapping screenshot images
- [x] 2.3.3 — Implement active-item scaling and glow effect using scroll position calculation
- [x] 2.3.4 — Add touch/mouse drag scrolling with `overscroll-behavior` and momentum
- [x] 2.3.5 — Add navigation dots with active state synchronised to scroll position
- [x] 2.3.6 — Optimise screenshot images: WebP format, responsive `srcSet`, lazy loading
- [x] 2.3.7 — Add captions below each device frame with screen name

---

## Story 2.4 — Product Differentiators & Value Highlights

**As a** hesitant visitor,
**I want** to understand what makes LumenLingo different from other language apps,
**So that** I'm convinced this is the right app for my learning goals.

### Acceptance Criteria

- [x] Section title: "Why LumenLingo?" with gradient accent
- [x] 4 differentiator cards displayed in a responsive grid:
  1. **Breathtaking Design** — "Every screen is handcrafted with glass morphism, cosmic backgrounds, and smooth animations — learning has never looked this good."
  2. **Immersive Environments** — "12 ambient soundscapes from Paris cafés to deep space — create the perfect atmosphere for focused learning."
  3. **3 Distinct Practice Modes** — "Flashcards, grammar quizzes, and word builder challenges across 25+ language pairs — variety that keeps you engaged."
  4. **Visual Mindfulness** — "Breathing orbs, quantum flow scenes, and nebula drift backgrounds — reduce learning anxiety with calming visual experiences."
- [x] Each card is a glass morphism surface with:
  - Icon or mini-illustration (SVG or Lottie)
  - Differentiator title
  - 2–3 sentence description
  - Hover: subtle lift + border glow intensification
- [x] Key facts bar below cards:
  - "9 Languages" · "25+ Language Pairs" · "12 Soundscapes" · "3 Practice Modes"
- [x] Facts animate with `<CountUp>` on scroll intersection
- [x] Cards animate in with staggered fade-up on scroll intersection
- [x] Section background has a subtle radial gradient emanating from the centre

### Subtasks

- [x] 2.4.1 — Create `<DifferentiatorSection>` component with responsive grid layout
- [x] 2.4.2 — Create `<DifferentiatorCard>` component with icon, title, description, glass styling, and hover animation
- [x] 2.4.3 — Create `<KeyFactsBar>` with 4 stat items and `<CountUp>` animation
- [x] 2.4.4 — Source or create 4 differentiator icons/illustrations (SVG preferred)
- [x] 2.4.5 — Write differentiator copy for all 4 cards (benefit-oriented, factual)
- [x] 2.4.6 — Add staggered scroll-reveal animation
- [x] 2.4.7 — Test accessibility: cards have proper ARIA roles, `prefers-reduced-motion` respected

---

## Story 2.5 — Call-to-Action Banner

**As a** visitor who has scrolled through the page,
**I want** a final, compelling call-to-action that reinforces the value proposition,
**So that** I'm motivated to download LumenLingo before leaving the page.

### Acceptance Criteria

- [x] Full-width CTA banner with a gradient background (violet → deep blue) and glass overlay
- [x] Headline: "Start Your Language Journey Today" with glow text effect
- [x] Subtext: "Download LumenLingo free on the App Store. Premium tiers available for serious learners."
- [x] Primary CTA: Large "Download on the App Store" button with App Store icon and violet glow
- [x] QR code displayed on desktop that links directly to the App Store listing
- [x] Floating particle or orb animation in the background for visual depth
- [x] Banner spans full viewport width with inner content constrained to `max-w-5xl`

### Subtasks

- [x] 2.5.1 — Create `<CTABanner>` component with gradient background and glass overlay
- [x] 2.5.2 — Add glow text effect to headline using CSS `text-shadow` and gradient
- [x] 2.5.3 — Create `<QRCode>` component that generates an App Store link QR (client-side)
- [x] 2.5.4 — Add floating particle animation in the background layer
- [x] 2.5.5 — Test CTA banner responsiveness (QR hidden on mobile, full-width on all screens)

---

## Story 2.6 — Homepage SEO & Metadata

**As a** search engine crawler,
**I want** comprehensive metadata, structured data, and semantic HTML on the homepage,
**So that** the page ranks well for language learning app queries.

### Acceptance Criteria

- [x] Page title: "LumenLingo — Master Languages Through Immersive Experiences"
- [x] Meta description: "Download LumenLingo, the premium language learning app for iPhone. Beautiful flashcards, adaptive practice, ambient soundscapes, and more. Free on the App Store."
- [x] Open Graph tags with hero image, title, description, and site name
- [x] Twitter Card tags with `summary_large_image` type
- [x] JSON-LD structured data: `SoftwareApplication` schema with rating, price, and operating system
- [x] JSON-LD `Organization` schema for LumenShore with logo and social links
- [x] Canonical URL set to `https://lumenlingo.com`
- [x] All images have descriptive `alt` text
- [x] Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, proper heading hierarchy

### Subtasks

- [x] 2.6.1 — Configure `metadata` export in `app/page.tsx` with title, description, OG, and Twitter tags
- [x] 2.6.2 — Create `<JsonLd>` component for `SoftwareApplication` structured data
- [x] 2.6.3 — Create `<JsonLd>` component for `Organization` structured data
- [x] 2.6.4 — Audit all homepage images for `alt` text completeness
- [x] 2.6.5 — Verify semantic HTML structure with heading hierarchy (single `<h1>`, logical `<h2>`/`<h3>`)
- [x] 2.6.6 — Test OG/Twitter cards with Facebook Sharing Debugger and Twitter Card Validator

---

# Epic 3 — Features & Pricing Pages

> Dedicated pages that deep-dive into LumenLingo's capabilities and present
> the membership tier structure with a premium, transparent pricing experience.

## Story 3.1 — Features Deep-Dive Page

**As a** visitor who wants more detail than the homepage provides,
**I want** a dedicated features page with in-depth explanations and visuals for every LumenLingo capability,
**So that** I can make an informed decision based on a complete understanding of the product.

### Acceptance Criteria

- [x] Route: `/features` with page title "Features — LumenLingo"
- [x] Hero section with headline: "Crafted for Serious Learners" and a sweeping app UI illustration
- [x] 6–8 feature sections, each with:
  - Full-width alternating layout (image left/text right, then text left/image right)
  - Feature title with icon
  - 3–4 paragraph explanation of the feature's value
  - Supporting screenshot in a device mockup or animated GIF/video
  - Bullet list of specific capabilities within the feature
- [x] Features covered:
  1. Immersive Flashcards — gestures, card styles (Glass, Petal, Crystal), instant feedback
  2. Smart Spaced Repetition — recommendation engine, mastery levels, category-based smart scheduling
  3. Practice Modes — flashcard drilling, grammar quizzes, word builder letter-construction challenges
  4. Soundscapes — 12 ambient environments across 4 categories (Cozy, Nature, Atmospheric, Travel)
  5. Breathing Orbs & Visual Backgrounds — 6 city-inspired colour schemes, quantum flow scenes, nebula drift presets
  6. Progress & Analytics — XP system, streaks, per-game stats, accuracy tracking, daily goals
  7. Language Pairs — 9 languages, 25+ pairs, tier-gated access, bidirectional learning
  8. Membership Tiers — brief tier comparison (links to /pricing)
- [x] Sticky table of contents sidebar on desktop for quick navigation between features
- [x] Each section has a scroll-triggered entrance animation
- [x] Bottom CTA: "Ready to Start? Download LumenLingo" with App Store button

### Subtasks

- [x] 3.1.1 — Create `app/features/page.tsx` with metadata and feature sections
- [x] 3.1.2 — Create `<FeatureSection>` component with alternating image/text layout
- [x] 3.1.3 — Create `<TableOfContents>` sticky sidebar component with scroll-spy active states
- [x] 3.1.4 — Write detailed copy for all 8 feature sections (benefit-oriented, not technical)
- [x] 3.1.5 — Source or create supporting visuals (screenshots, animated GIFs, illustrations)
- [x] 3.1.6 — Add scroll-triggered animations for each section entrance
- [x] 3.1.7 — Add bottom CTA banner (reuse `<CTABanner>` from homepage)
- [x] 3.1.8 — Configure SEO metadata: title, description, OG image, structured data
- [x] 3.1.9 — Test page performance: all images lazy-loaded, LCP under 2.5 s

---

## Story 3.2 — Pricing Page with Tier Comparison

**As a** visitor considering a premium subscription,
**I want** to see all membership tiers compared side-by-side with clear pricing and feature lists,
**So that** I can choose the tier that best fits my learning goals and budget.

### Acceptance Criteria

- [x] Route: `/pricing` with page title "Pricing — LumenLingo"
- [x] Hero section with headline: "Choose Your Learning Journey" and subline about free tier availability
- [x] 4 pricing cards displayed side-by-side (desktop) or stacked (mobile):
  - **Free** — £0/month
    - 3 language pairs (English↔Spanish, French, German)
    - All 3 practice modes at Beginner difficulty
    - 30 minutes daily practice limit
    - 50-card flashcard decks
    - Lagoon Nebula background
  - **Pro** — £9.99/month
    - All Free features plus:
    - 7 language pairs (adds Japanese, Chinese, Arabic, Polish)
    - Beginner + Intermediate difficulty levels
    - Unlimited daily practice
    - 75-card flashcard decks
    - 6 Breathing Orb colour schemes
    - 1 soundscape
    - Offline mode
    - 1.25× XP multiplier
  - **Elite** — £19.99/month
    - All Pro features plus:
    - All 25+ language pairs
    - All 3 difficulty levels (Beginner, Intermediate, Advanced)
    - 100-card flashcard decks
    - 8 soundscapes
    - Quantum Flow backgrounds (4 scenes)
    - Nebula Drift backgrounds (4 presets)
    - Advanced analytics & data export
    - 1.5× XP multiplier
  - **Royal** — £99.99/month
    - Everything in Elite plus:
    - Unlimited flashcard deck size
    - All 12 soundscapes
    - All 6 Quantum Flow scenes
    - All 6 Nebula Drift presets
    - Personalised learning tips
    - Shareable result cards
    - Deep analytics dashboard with monthly reports
    - 2× XP multiplier
- [x] "Most Popular" badge on the Elite tier card
- [x] Each card is a glass morphism surface with tier-specific accent colour:
  - Free: zinc/grey
  - Pro: violet glow
  - Elite: cyan-to-violet gradient glow with stronger luminescence
  - Royal: amber-gold glow with premium shimmer effect
- [x] CTA on each card: "Get Started Free" / "Upgrade to Pro" / "Go Elite" / "Go Royal"
- [x] CTAs link to the App Store (subscription handled in-app)
- [x] Feature comparison table below the cards with checkmarks, counts, and tier columns
- [x] Note about 14-day free trial: "Try Royal-level access free for 14 days"
- [x] FAQ accordion below the comparison table

### Subtasks

- [x] 3.2.1 — Create `app/pricing/page.tsx` with metadata and page structure
- [x] 3.2.2 — Create `<PricingCard>` component with tier-specific styling, feature list, CTA (4 tiers: Free, Pro, Elite, Royal)
- [x] 3.2.3 — Style pricing cards with tier-specific accent colours and glass morphism
- [x] 3.2.4 — Create `<FeatureComparisonTable>` with checkmarks, dashes, and tier column headers
- [x] 3.2.5 — Create `<PricingFAQ>` accordion component with 8–10 questions
- [x] 3.2.6 — Write pricing copy: card descriptions, FAQ answers, comparison table entries
- [x] 3.2.7 — Add scroll-reveal animations for cards (staggered scale-in)
- [x] 3.2.8 — Configure SEO metadata: title, description, `Product` structured data with pricing
- [x] 3.2.9 — Test responsiveness: cards stack gracefully, table scrolls horizontally on mobile

---

## Story 3.3 — Pricing FAQ Section

**As a** potential subscriber with questions about billing,
**I want** clear answers to common pricing and subscription questions,
**So that** I feel confident there are no hidden costs or confusing terms.

### Acceptance Criteria

- [x] Accordion-style FAQ with 10 questions, each expandable with smooth height animation
- [x] Questions cover:
  1. "Is LumenLingo really free to start?"
  2. "What's included in the free tier?"
  3. "How does monthly billing work?"
  4. "How do I upgrade or downgrade my tier?"
  5. "Is there a free trial?"
  6. "What payment methods are accepted?"
  7. "Can I cancel my subscription at any time?"
  8. "Do I lose my progress if I downgrade?"
  9. "Are there family or student discounts?"
  10. "How does offline mode work?"
- [x] Only one question is expanded at a time (accordion behaviour)
- [x] Each answer is 2–4 sentences, warm and reassuring in tone
- [x] Glass card styling for each FAQ item with subtle hover effect
- [x] `FAQ` JSON-LD structured data for rich snippet eligibility

### Subtasks

- [x] 3.3.1 — Create `<FAQ>` component with accordion behaviour and smooth height animation
- [x] 3.3.2 — Write all 10 FAQ answers with warm, transparent tone
- [x] 3.3.3 — Add `FAQPage` JSON-LD structured data for Google rich snippets
- [x] 3.3.4 — Style accordion items with glass morphism surface and chevron rotation animation
- [x] 3.3.5 — Test keyboard navigation: Enter/Space toggles, arrow keys navigate between items

---

# Epic 4 — Blog Engine & Content Strategy

> Build a high-performance MDX-powered blog optimised for SEO,
> establishing LumenLingo's topical authority in language learning.

## Story 4.1 — MDX Blog Infrastructure

**As a** content creator,
**I want** a Markdown-based blog system with React component embedding and automatic metadata extraction,
**So that** I can publish SEO-optimised articles without touching application code.

### Acceptance Criteria

- [x] Blog posts are authored as `.mdx` files in `src/content/blog/`
- [x] Each MDX file has frontmatter: `title`, `description`, `publishedAt`, `updatedAt`, `author`, `image`, `tags`, `category`, `readingTime`
- [x] `readingTime` is auto-calculated from word count if not explicitly set
- [x] Custom MDX components available in posts: `<Callout>`, `<FeatureHighlight>`, `<AppScreenshot>`, `<VideoEmbed>`, `<CodeBlock>`
- [x] Blog index page at `/blog` with paginated post list (12 per page)
- [x] Individual post pages at `/blog/[slug]` with full MDX rendering
- [x] Category pages at `/blog/category/[category]` filtering posts by category
- [x] Tag pages at `/blog/tag/[tag]` filtering posts by tag
- [x] RSS feed at `/blog/feed.xml` generated at build time
- [x] Sitemap includes all blog posts with `lastmod` dates

### Subtasks

- [x] 4.1.1 — Install and configure `@next/mdx` or `contentlayer` for MDX processing
- [x] 4.1.2 — Define MDX frontmatter TypeScript schema with Zod validation
- [x] 4.1.3 — Create `src/lib/blog.ts` with functions: `getAllPosts()`, `getPostBySlug()`, `getPostsByCategory()`, `getPostsByTag()`
- [x] 4.1.4 — Create custom MDX components: `<Callout>`, `<FeatureHighlight>`, `<AppScreenshot>`, `<VideoEmbed>`
- [x] 4.1.5 — Create `app/blog/page.tsx` — paginated blog index
- [x] 4.1.6 — Create `app/blog/[slug]/page.tsx` — individual post rendering with `generateStaticParams`
- [x] 4.1.7 — Create `app/blog/category/[category]/page.tsx` — category filter page
- [x] 4.1.8 — Create `app/blog/tag/[tag]/page.tsx` — tag filter page
- [x] 4.1.9 — Create `app/blog/feed.xml/route.ts` — RSS feed generation
- [x] 4.1.10 — Add blog posts to sitemap generation in `app/sitemap.ts`

---

## Story 4.2 — Blog Index Page Design

**As a** visitor browsing the blog,
**I want** a visually stunning blog listing with category filters and featured posts,
**So that** I can discover relevant language learning content easily.

### Acceptance Criteria

- [x] Route: `/blog` with page title "Blog — LumenLingo"
- [x] Hero section with headline: "The LumenLingo Journal" and subline: "Tips, guides, and insights for language learners"
- [x] Featured post at the top: large hero card with image, title, excerpt, author, date, reading time
- [x] Category filter bar: "All", "Language Tips", "App Updates", "Learning Science", "Culture", "Guides"
- [x] Post grid below: 3-column (desktop), 2-column (tablet), 1-column (mobile)
- [x] Each post card contains:
  - Cover image with lazy loading and blur placeholder
  - Category badge
  - Title (truncated to 2 lines)
  - Excerpt (truncated to 3 lines)
  - Author avatar + name
  - Date and reading time
  - Glass card styling with hover lift
- [x] Pagination at bottom: "← Previous" / "Next →" with page numbers
- [x] Empty state: "No posts found" message when category filter yields no results

### Subtasks

- [x] 4.2.1 — Create `<BlogHero>` with featured post highlight card
- [x] 4.2.2 — Create `<CategoryFilter>` horizontal scrolling filter bar with active state
- [x] 4.2.3 — Create `<PostCard>` component with image, metadata, excerpt, and glass styling
- [x] 4.2.4 — Create `<PostGrid>` responsive grid layout with staggered fade-in
- [x] 4.2.5 — Create `<Pagination>` component with page numbers and previous/next controls
- [x] 4.2.6 — Implement category filtering with URL search params (shallow routing)
- [x] 4.2.7 — Optimise cover images: WebP, `srcSet`, blur placeholder via `next/image`
- [x] 4.2.8 — Configure SEO metadata for blog index page

---

## Story 4.3 — Blog Post Page Design

**As a** reader viewing a blog post,
**I want** a beautifully typeset, distraction-free reading experience with rich media embedding,
**So that** I can focus on the content and engage deeply with the material.

### Acceptance Criteria

- [x] Route: `/blog/[slug]` with dynamic title from frontmatter
- [x] Post header: cover image (full-width, 40 vh), title overlay at bottom with gradient fade
- [x] Author bar: avatar, name, publish date, reading time, and share buttons
- [x] Article body: max-width 720 px, optimal reading line length (60–80 characters)
- [x] Typography: `Inter` body at 18 px/1.75 line-height, `Cabinet Grotesk` for headings
- [x] MDX prose styling:
  - Headings with left-border accent (`border-l-2 border-violet-500`)
  - Block quotes with glass background and left border
  - Code blocks with syntax highlighting (dark theme) and copy button
  - Images with rounded corners, hover zoom, and lightbox
  - Tables with glass header row and zebra striping
  - Links with violet underline and hover glow
- [x] Table of contents sidebar on desktop (scrollspy-linked)
- [x] "Related Posts" section at bottom with 3 recommended articles
- [x] Share buttons: Twitter, Facebook, LinkedIn, Copy Link — with copy confirmation toast
- [x] `Article` JSON-LD structured data with author, datePublished, image

### Subtasks

- [x] 4.3.1 — Create `app/blog/[slug]/page.tsx` with `generateStaticParams` and `generateMetadata`
- [x] 4.3.2 — Create `<PostHeader>` with cover image, gradient overlay, title, and author bar
- [x] 4.3.3 — Create `<MDXProse>` wrapper with comprehensive Tailwind typography styling
- [x] 4.3.4 — Create `<TableOfContents>` sidebar with scrollspy-linked heading list
- [x] 4.3.5 — Create `<ShareButtons>` component with social sharing + copy link + toast
- [x] 4.3.6 — Create `<RelatedPosts>` section using tag/category matching algorithm
- [x] 4.3.7 — Add `Article` JSON-LD structured data
- [x] 4.3.8 — Add OG image generation using `next/og` (dynamic image with post title and branding)
- [x] 4.3.9 — Test prose rendering with all MDX component types in a test post

---

## Story 4.4 — Initial Blog Content (10 Launch Posts)

**As a** visitor discovering LumenLingo through search,
**I want** high-quality, evergreen blog posts covering language learning topics,
**So that** I find genuine value and develop trust in the LumenLingo brand.

### Acceptance Criteria

- [x] 10 blog posts authored and published at launch, covering the content pillars:
  1. **"Why Immersive Learning Works: The Science Behind LumenLingo"** — Learning science, spaced repetition
  2. **"5 Essential Tips for Learning Spanish as an English Speaker"** — Practical tips, target keyword
  3. **"How Ambient Soundscapes Enhance Language Retention"** — Soundscapes feature, cognitive science
  4. **"The Complete Guide to Spaced Repetition for Language Learning"** — Pillar content, technique explainer
  5. **"LumenLingo vs Traditional Flashcard Apps: What's Different?"** — Comparison, product positioning
  6. **"Building a Daily Language Practice Habit: A Step-by-Step Guide"** — Habit formation, practical advice
  7. **"How Visual Design Affects Learning: The Psychology of Beautiful Apps"** — Design philosophy, UX research
  8. **"Top 10 Japanese Phrases Every Beginner Should Know"** — Listicle, Japanese learner keyword
  9. **"Introducing LumenLingo: A New Era of Language Learning"** — Launch announcement, product overview
  10. **"The Art of Mindful Language Learning: How Breathing Exercises Help"** — Wellness angle, orbs feature
- [x] Each post is 1,200–2,000 words targeting a specific keyword cluster
- [x] Each post has a unique cover image consistent with the dark premium brand
- [x] Internal linking between posts where topically relevant
- [x] All posts pass Yoast-style SEO checklist: keyword in title, meta description, H1, first paragraph, image alt

### Subtasks

- [x] 4.4.1 — Research and finalise target keywords for each post using search intent mapping
- [x] 4.4.2 — Write posts 1–3: science-focused content (learning, soundscapes, spaced repetition)
- [x] 4.4.3 — Write posts 4–6: practical guides (spaced repetition guide, comparison, habit building)
- [x] 4.4.4 — Write posts 7–9: design/product content (psychology, Japanese phrases, launch announcement)
- [x] 4.4.5 — Write post 10: wellness/mindfulness angle
- [x] 4.4.6 — Create cover images for all 10 posts (dark theme, consistent brand style)
- [x] 4.4.7 — Add internal links between related posts
- [x] 4.4.8 — Review all posts for SEO: keywords, meta descriptions, heading structure, alt text
- [x] 4.4.9 — Peer review all posts for accuracy, tone, and brand consistency

---

# Epic 5 — FAQ, Legal & Trust Pages

> Build the ancillary pages that establish LumenShore as a trustworthy company
> and provide users with the help they need — FAQ, contact, privacy, and legal compliance.

## Story 5.1 — FAQ & Contact Page

**As a** user who needs help with the app,
**I want** a lightweight FAQ and contact page,
**So that** I can find answers to common questions or reach the team directly.

### Acceptance Criteria

- [x] Route: `/contact` with page title "Help & Contact — LumenLingo"
- [x] Clean layout with two sections:
  1. **Frequently Asked Questions** — 10–15 accordion-style FAQ items covering basic topics
  2. **Contact Us** — simple email contact section
- [x] FAQ topics include:
  - How do I get started with LumenLingo?
  - What languages are available?
  - How do membership tiers work?
  - How do I upgrade my subscription?
  - Can I use LumenLingo offline?
  - What are soundscapes and breathing orbs?
  - How does spaced repetition work in LumenLingo?
  - How do I cancel my subscription?
  - Is my data synced across devices?
  - How do I delete my account?
- [x] Contact section: "Have a question?" with email link (hello@lumenshore.com) and expected response time ("We usually respond within 48 hours")
- [x] Glass morphism styling consistent with the rest of the site
- [x] No search bar, no category cards — keep it minimal for launch

### Subtasks

- [x] 5.1.1 — Create `app/contact/page.tsx` with metadata and page structure
- [x] 5.1.2 — Create `<FAQAccordion>` component with expandable items and smooth animation
- [x] 5.1.3 — Write 10–15 FAQ entries covering the topics above
- [x] 5.1.4 — Create `<ContactSection>` with email link and response time badge
- [x] 5.1.5 — Add `FAQPage` JSON-LD structured data for FAQ entries
- [x] 5.1.6 — Test keyboard navigation: Enter/Space toggles, arrow keys navigate between items

---

## Story 5.2 — Privacy Policy Page

**As a** privacy-conscious user,
**I want** a clear, readable privacy policy that explains how my data is handled,
**So that** I can trust that LumenShore respects my privacy.

### Acceptance Criteria

- [x] Route: `/privacy` with page title "Privacy Policy — LumenLingo"
- [x] Clean, readable layout with proper heading hierarchy and generous spacing
- [x] Sections cover:
  - Information we collect (and what we don't)
  - How we use your information
  - Data storage and security (iCloud sync, on-device processing)
  - Third-party services (App Store, analytics)
  - Children's privacy (COPPA compliance)
  - Data retention and deletion
  - Your rights (GDPR, CCPA compliance)
  - Policy updates and contact information
- [x] "Last updated" date prominently displayed
- [x] Table of contents sidebar for quick navigation
- [x] Language is plain English, not dense legalese — approachable and transparent
- [x] "Download as PDF" option for users who want offline access

### Subtasks

- [x] 5.2.1 — Create `app/privacy/page.tsx` with metadata and prose rendering
- [x] 5.2.2 — Write privacy policy content in plain, approachable English
- [x] 5.2.3 — Add table of contents sidebar with heading anchor links
- [x] 5.2.4 — Style prose content with the blog-quality typography system
- [x] 5.2.5 — Add "Last updated: [date]" header with formatted date
- [x] 5.2.6 — Add "Download as PDF" button (client-side `window.print()` with print styles)

---

## Story 5.3 — Terms of Service Page

**As a** user,
**I want** clear terms of service that explain the rules of using LumenLingo,
**So that** I understand my rights and responsibilities.

### Acceptance Criteria

- [x] Route: `/terms` with page title "Terms of Service — LumenLingo"
- [x] Clean prose layout matching the privacy policy page style
- [x] Sections cover:
  - Acceptance of terms
  - Account registration and responsibilities
  - Subscription terms and billing (App Store subscription)
  - Acceptable use policy
  - Intellectual property (content, app design)
  - Limitation of liability
  - Termination
  - Governing law
  - Contact information
- [x] "Last updated" date prominently displayed
- [x] Table of contents sidebar for quick navigation
- [x] Plain English writing style

### Subtasks

- [x] 5.3.1 — Create `app/terms/page.tsx` with metadata and prose rendering
- [x] 5.3.2 — Write terms of service content
- [x] 5.3.3 — Add table of contents sidebar
- [x] 5.3.4 — Style with shared legal page layout component
- [x] 5.3.5 — Verify all legal links in footer point to correct pages

---

## Story 5.4 — About LumenShore Page

**As a** visitor who wants to know who's behind the app,
**I want** an about page that tells the LumenShore story,
**So that** I feel a personal connection to the team and their mission.

### Acceptance Criteria

- [x] Route: `/about` with page title "About — LumenShore"
- [x] Hero section: "We Believe Learning Should Be Beautiful" with ambient background
- [x] Mission statement section: 3–4 paragraphs on why LumenShore exists and the vision for LumenLingo
- [x] Values section: 3–4 core values displayed as glass cards with icons:
  - **Beauty in Everything** — "We craft every pixel with care"
  - **Science-Backed Learning** — "Every feature is grounded in cognitive research"
  - **Privacy First** — "Your data stays yours. Always."
  - **Accessible to All** — "Premium quality shouldn't mean exclusion"
- [x] Timeline section: key milestones (founding, first beta, App Store launch, milestones)
- [x] Team section (optional): founder photo/bio or abstract "small team, big ambitions" narrative
- [x] CTA at bottom: "Join the LumenShore Community" with App Store download button

### Subtasks

- [x] 5.4.1 — Create `app/about/page.tsx` with metadata and sections
- [x] 5.4.2 — Write mission statement copy (authentic, passionate, not corporate)
- [x] 5.4.3 — Create `<ValueCard>` component with icon, title, and description
- [x] 5.4.4 — Create `<Timeline>` component with milestone entries and connecting line
- [x] 5.4.5 — Add ambient background animation to the hero section
- [x] 5.4.6 — Add CTA banner at bottom (reuse `<CTABanner>`)
- [x] 5.4.7 — Configure SEO metadata and `Organization` JSON-LD

---

# Epic 6 — SEO Infrastructure & Performance

> Implement technical SEO foundations, performance optimisations, and analytics
> to maximise organic discoverability and conversion tracking.

## Story 6.1 — Technical SEO Foundation

**As a** search engine crawler,
**I want** a technically flawless website with proper sitemaps, robots, and structured data,
**So that** all pages are discovered, indexed, and eligible for rich search results.

### Acceptance Criteria

- [x] `app/sitemap.ts` generates a dynamic XML sitemap including:
  - Static pages: `/`, `/features`, `/pricing`, `/contact`, `/about`, `/privacy`, `/terms`
  - All blog posts with `lastmod` date
  - Category and tag archive pages
- [x] `app/robots.ts` generates `robots.txt`:
  - Allow: all public pages
  - Disallow: `/api/`, `/_next/`
  - Sitemap: `https://lumenlingo.com/sitemap.xml`
- [x] Every page has unique `<title>` and `<meta name="description">` via Next.js `metadata` or `generateMetadata`
- [x] Canonical URLs are set on every page to prevent duplicate content
- [x] Open Graph and Twitter Card meta tags are set on every page
- [x] Structured data schemas implemented:
  - `SoftwareApplication` on homepage and features page
  - `Organization` sitewide
  - `Article` on blog posts
  - `FAQPage` on support page and pricing FAQ
  - `BreadcrumbList` on all interior pages
- [x] HTML uses semantic elements: `<nav>`, `<main>`, `<article>`, `<aside>`, `<section>`
- [x] No broken internal links (verified by link checker)

### Subtasks

- [x] 6.1.1 — Create `app/sitemap.ts` with dynamic sitemap generation
- [x] 6.1.2 — Create `app/robots.ts` with crawler rules
- [x] 6.1.3 — Audit all pages for unique title and description via `metadata` exports
- [x] 6.1.4 — Add canonical URL to every page metadata
- [x] 6.1.5 — Create reusable `<BreadcrumbJsonLd>` component for interior pages
- [x] 6.1.6 — Verify all JSON-LD structured data with Google Rich Results Test
- [x] 6.1.7 — Run internal link audit and fix any broken links
- [ ] 6.1.8 — Submit sitemap to Google Search Console and Bing Webmaster Tools

---

## Story 6.2 — Core Web Vitals Optimisation

**As a** visitor on any device,
**I want** the website to load instantly and feel responsive,
**So that** my experience is seamless and I'm not frustrated by slow performance.

### Acceptance Criteria

- [x] Largest Contentful Paint (LCP) ≤ 2.5 s on mobile and desktop
- [x] First Input Delay (FID) ≤ 100 ms
- [x] Cumulative Layout Shift (CLS) ≤ 0.1
- [ ] Time to First Byte (TTFB) ≤ 600 ms via Vercel Edge Network
- [x] All images use `next/image` with:
  - WebP/AVIF format auto-detection
  - Responsive `srcSet` and `sizes` attributes
  - Blur placeholder for above-the-fold images
  - Lazy loading for below-the-fold images
- [x] Fonts loaded with `next/font` and `font-display: swap` — no layout shift
- [x] JavaScript bundle analysis: no unused dependencies, tree-shaking verified
- [x] CSS is utility-first (Tailwind) — no unused CSS in production build
- [x] Third-party scripts (analytics) loaded with `afterInteractive` strategy
- [ ] Lighthouse score ≥ 95 for Performance, Accessibility, Best Practices, SEO

### Subtasks

- [x] 6.2.1 — Audit all `<Image>` components for proper `width`, `height`, `sizes`, and loading strategy
- [x] 6.2.2 — Add blur placeholders (base64) for hero and above-the-fold images
- [x] 6.2.3 — Verify `next/font` is loading fonts without layout shift
- [x] 6.2.4 — Run `next/bundle-analyzer` and remove any unused dependencies
- [x] 6.2.5 — Configure analytics scripts with `<Script strategy="afterInteractive">`
- [ ] 6.2.6 — Run Lighthouse audit on homepage, features, pricing, and blog pages
- [ ] 6.2.7 — Run WebPageTest from 3G mobile profile and verify LCP ≤ 2.5 s
- [ ] 6.2.8 — Set up Vercel Speed Insights for ongoing CWV monitoring

---

## Story 6.3 — Analytics & Conversion Tracking

**As a** product owner,
**I want** privacy-respecting analytics tracking key user journeys and conversion events,
**So that** I can measure content performance and optimise the download funnel.

### Acceptance Criteria

- [x] Vercel Analytics enabled for page views and web vitals
- [ ] Plausible Analytics (or privacy-first alternative) for detailed traffic analysis
- [x] Custom events tracked:
  - `app_store_click` — user clicks any App Store download button
  - `pricing_view` — user views the pricing page
  - `pricing_cta_click` — user clicks a tier CTA on pricing page
  - `blog_post_read` — user scrolls past 75% of a blog post
  - `qr_code_scan` — QR code view on desktop (proxy: QR visible in viewport)
  - `feature_section_view` — user scrolls to a specific feature section
- [ ] Analytics dashboard accessible to the team
- [x] No personally identifiable information (PII) is collected
- [x] Cookie consent is not required (Plausible is cookie-free)
- [x] UTM parameter tracking for campaign attribution

### Subtasks

- [x] 6.3.1 — Enable Vercel Analytics in `app/layout.tsx`
- [ ] 6.3.2 — Set up Plausible Analytics with custom domain proxy (first-party)
- [x] 6.3.3 — Create `@/lib/analytics.ts` with typed event tracking functions
- [x] 6.3.4 — Add `app_store_click` event to all App Store buttons/badges
- [x] 6.3.5 — Add `pricing_view` event on pricing page mount
- [x] 6.3.6 — Add `blog_post_read` event using Intersection Observer at 75% scroll depth
- [x] 6.3.7 — Add UTM parameter extraction and forwarding to analytics
- [x] 6.3.8 — Verify no PII is present in any event payloads

---

# Epic 7 — Responsive Design, Accessibility & Cross-Browser QA

> Ensure the entire website delivers a flawless experience across all devices,
> browsers, and assistive technologies — leaving no user behind.

## Story 7.1 — Mobile-First Responsive Design Audit

**As a** visitor on an iPhone, iPad, or Android device,
**I want** every page to be perfectly usable and visually stunning on my screen size,
**So that** I have a premium experience regardless of how I access the site.

### Acceptance Criteria

- [x] All pages tested at breakpoints: 320 px, 375 px, 414 px, 768 px, 1024 px, 1280 px, 1536 px, 1920 px
- [x] No horizontal overflow or content cutoff at any breakpoint
- [x] Touch targets are minimum 44 × 44 px on mobile
- [x] Text remains readable without zooming at all breakpoints (min 16 px body on mobile)
- [x] Navigation hamburger menu is accessible and fully functional on mobile
- [ ] Screenshot gallery/carousel is touch-friendly with proper swipe physics
- [x] Pricing cards stack gracefully on mobile without losing visual hierarchy
- [x] Blog post grid adapts from 3 columns → 2 → 1 with consistent card proportions
- [x] Footer link columns stack into an accordion on mobile
- [x] All glass morphism effects degrade gracefully (no backdrop-filter issues on older browsers)
- [x] Fixed header doesn't obscure content on scroll (proper `scroll-padding-top`)

### Subtasks

- [x] 7.1.1 — Audit homepage at all 8 breakpoints; document and fix layout issues
- [x] 7.1.2 — Audit features page at all breakpoints; test alternating section layouts
- [x] 7.1.3 — Audit pricing page at all breakpoints; test card stacking and responsiveness
- [x] 7.1.4 — Audit blog index and post pages at all breakpoints
- [x] 7.1.5 — Audit support, about, privacy, and terms pages
- [x] 7.1.6 — Test header mobile menu: open/close, link activation, scroll lock, focus trap
- [x] 7.1.7 — Test footer accordion behaviour on mobile
- [x] 7.1.8 — Verify `scroll-padding-top` accounts for fixed header height on anchor link navigation
- [ ] 7.1.9 — Test on physical iPhone (Safari), iPad, and Android (Chrome) devices

---

## Story 7.2 — Accessibility (WCAG 2.1 AA) Compliance

**As a** user with visual, motor, or cognitive disabilities,
**I want** the website to be fully navigable and understandable using assistive technology,
**So that** I can access LumenLingo's information regardless of my abilities.

### Acceptance Criteria

- [x] Colour contrast ratios meet WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
- [x] All interactive elements are keyboard-navigable with visible focus indicators
- [x] Focus order is logical and follows the visual reading order
- [x] All images have meaningful `alt` text (decorative images use `alt=""`)
- [x] All form inputs have associated `<label>` elements
- [x] ARIA landmarks are present: `banner`, `navigation`, `main`, `contentinfo`
- [x] Carousel/gallery components announce current position to screen readers
- [x] Accordion components use `role="button"`, `aria-expanded`, and `aria-controls`
- [x] Animations respect `prefers-reduced-motion`: all motion disabled when preference is set
- [x] No content relies solely on colour to convey meaning
- [x] Page language is set (`lang="en"`) and content language changes are marked
- [x] Skip-to-content link is present and functional
- [ ] Screen reader testing passes with VoiceOver (macOS/iOS) and NVDA (Windows)

### Subtasks

- [x] 7.2.1 — Run axe DevTools audit on all pages; fix all critical and serious violations
- [x] 7.2.2 — Audit colour contrast for all text/background combinations using APCA or WCAG contrast checker
- [x] 7.2.3 — Add visible focus-visible indicators to all interactive elements (ring-2 ring-violet-500)
- [ ] 7.2.4 — Test complete keyboard navigation flow: Tab, Shift+Tab, Enter, Escape, Arrow keys
- [x] 7.2.5 — Add ARIA attributes to carousel, accordion, modal, and dropdown components
- [x] 7.2.6 — Add alt text to all images; set decorative images to `alt=""`
- [x] 7.2.7 — Verify `prefers-reduced-motion` disables all Framer Motion animations
- [ ] 7.2.8 — Test with VoiceOver on macOS: navigate all pages, verify announcements
- [ ] 7.2.9 — Test with VoiceOver on iOS: verify touch exploration and gesture navigation
- [x] 7.2.10 — Create accessibility statement page at `/accessibility`

---

## Story 7.3 — Cross-Browser Compatibility

**As a** visitor using any modern browser,
**I want** the website to look and function correctly,
**So that** my browser choice doesn't degrade the experience.

### Acceptance Criteria

- [ ] Tested and verified on:
  - Safari 17+ (macOS and iOS) — primary target
  - Chrome 120+ (desktop and Android)
  - Firefox 120+ (desktop)
  - Edge 120+ (desktop)
- [x] Glass morphism (`backdrop-filter: blur()`) renders correctly on all browsers
- [x] CSS `dvh` unit works or has fallback to `vh` on unsupported browsers
- [x] Fonts render consistently across browsers (no FOUT/FOIT visible)
- [x] Scroll snap behaviour is consistent across browsers
- [ ] All animations perform at 60 fps on mid-range devices
- [x] No console errors or warnings on any browser

### Subtasks

- [ ] 7.3.1 — Test all pages on Safari macOS and Safari iOS
- [ ] 7.3.2 — Test all pages on Chrome desktop and Chrome Android
- [ ] 7.3.3 — Test all pages on Firefox desktop
- [ ] 7.3.4 — Test all pages on Edge desktop
- [x] 7.3.5 — Add `backdrop-filter` prefixed fallback for older WebKit
- [x] 7.3.6 — Add `dvh` → `vh` fallback using `@supports` or PostCSS
- [x] 7.3.7 — Verify no console errors or warnings across all target browsers
- [ ] 7.3.8 — Profile animation performance on a mid-range Android device (Chrome)

---

# Epic 8 — App Store Integration & Download Funnel

> Maximise the conversion from website visitor to App Store download
> through strategic placement, deep linking, and smart banners.

## Story 8.1 — Smart App Banner & Deep Links

**As a** visitor on an iPhone,
**I want** a native Smart App Banner that lets me open or download LumenLingo instantly,
**So that** I don't have to search the App Store manually.

### Acceptance Criteria

- [x] Apple Smart App Banner meta tag is present on all pages: `<meta name="apple-itunes-app" content="app-id=XXXXXXXXX">`
- [ ] Banner displays natively in Safari on iOS with "Open" or "View" button
- [x] Universal Links are configured so `lumenlingo.com/open` opens the app if installed
- [x] `apple-app-site-association` file served at `/.well-known/apple-app-site-association`
- [x] Fallback: if app is not installed, Universal Links redirect to the App Store listing
- [x] Deep link support: `lumenlingo.com/open?language=spanish` opens the app to the Spanish module

### Subtasks

- [x] 8.1.1 — Add Smart App Banner meta tag to root layout with the correct App Store ID
- [x] 8.1.2 — Create `public/.well-known/apple-app-site-association` with app ID and path patterns
- [x] 8.1.3 — Create `app/open/route.ts` — Universal Link handler with app-installed detection and fallback redirect
- [ ] 8.1.4 — Test Smart App Banner display in Safari on iOS
- [ ] 8.1.5 — Test Universal Link flow: installed (opens app) vs. not installed (App Store redirect)
- [ ] 8.1.6 — Document deep link URL scheme for marketing team use

---

## Story 8.2 — Download Attribution & UTM Tracking

**As a** marketer,
**I want** to track which pages and campaigns drive the most App Store downloads,
**So that** I can optimise content and advertising spend.

### Acceptance Criteria

- [x] All App Store links include campaign tokens for Apple Search Ads attribution
- [x] App Store URLs use the format: `https://apps.apple.com/app/lumenlingo/idXXXXXXXXX?pt=TEAM_ID&ct=CAMPAIGN&mt=8`
- [x] Campaign tokens vary by placement:
  - `ct=homepage_hero` — hero section CTA
  - `ct=homepage_cta_banner` — bottom CTA banner
  - `ct=pricing_free` / `ct=pricing_pro` / `ct=pricing_elite` / `ct=pricing_royal` — pricing page CTAs
  - `ct=blog_sidebar` — blog sidebar download widget
  - `ct=blog_inline` — inline blog post CTA
  - `ct=nav_download` — header navigation CTA button
- [x] UTM parameters from inbound URLs are preserved and appended to App Store links
- [x] Analytics events include the campaign token for cross-referencing

### Subtasks

- [x] 8.2.1 — Create `@/lib/appStoreUrl.ts` utility that generates campaign-tagged App Store URLs
- [x] 8.2.2 — Update all App Store buttons/badges to use campaigned URLs with correct `ct` tokens
- [x] 8.2.3 — Implement UTM parameter capture on page load and storage in session
- [x] 8.2.4 — Forward UTM parameters into analytics events and App Store campaign tokens
- [x] 8.2.5 — Document all campaign tokens and their placements for the marketing team
- [ ] 8.2.6 — Test that campaign tokens correctly appear in App Store Connect analytics

---

## Story 8.3 — App Store Optimised Landing Page

**As a** user arriving from an App Store search or ad campaign,
**I want** a focused landing page that reinforces the value and drives immediate download,
**So that** I complete the download without distraction.

### Acceptance Criteria

- [x] Route: `/download` with page title "Download LumenLingo — Free on the App Store"
- [x] Minimal, focused layout: no navigation links (only logo), single purpose — download
- [x] Hero with app icon, name, tagline, and large App Store button
- [x] Three key benefits displayed as icon + text pairs (trust signals in < 5 seconds)
- [x] Device mockup with animated screenshot showcase
- [x] Key feature highlights: "9 Languages · 12 Soundscapes · 3 Practice Modes"
- [x] Transparent: "Free to start. Pro, Elite, and Royal tiers available in-app."
- [x] The page loads in under 1 second (minimal JS, no heavy animations)
- [x] QR code visible on desktop visitors

### Subtasks

- [x] 8.3.1 — Create `app/download/page.tsx` with focused layout (no nav, minimal footer)
- [x] 8.3.2 — Add app icon, name, tagline, and oversized App Store CTA button
- [x] 8.3.3 — Create 3 key-benefit icons with concise text
- [x] 8.3.4 — Add device mockup with 3-screenshot auto-carousel
- [x] 8.3.5 — Add key feature highlights bar
- [x] 8.3.6 — Add QR code for desktop visitors
- [x] 8.3.7 — Optimise for sub-1-second load: inline critical CSS, defer non-essential JS
- [x] 8.3.8 — Configure noindex meta tag (or keep indexed — decide based on SEO strategy)

---

# Epic 9 — Email Capture & Community Building

> Build lightweight opt-in experiences that convert visitors into an engaged audience,
> enabling ongoing communication, product updates, and community growth.

## Story 9.1 — Email Newsletter Signup

**As a** visitor interested in language learning tips,
**I want** to subscribe to the LumenLingo newsletter,
**So that** I receive valuable content and product updates directly in my inbox.

### Acceptance Criteria

- [x] Newsletter signup form appears in two locations:
  - Embedded in the footer across all pages
  - Inline CTA within blog post content (after the 3rd paragraph)
- [x] Form fields: email address only (single-field for maximum conversion)
- [x] Submit button text: "Subscribe" with violet glow styling
- [x] Form validation: email format validation on client-side with clear error messaging
- [x] Success state: "Welcome to the LumenShore community! Check your inbox." with checkmark animation
- [x] Error state: "Something went wrong. Please try again." with retry option
- [x] Integration with email service provider (Resend, ConvertKit, or Mailchimp) via API route
- [x] API route at `app/api/newsletter/route.ts` handles subscription server-side
- [x] Rate limiting on API route to prevent abuse (max 5 requests per IP per minute)
- [ ] Double opt-in flow: confirmation email sent before adding to active list
- [x] GDPR-compliant: small text below form — "We respect your privacy. Unsubscribe anytime."

### Subtasks

- [x] 9.1.1 — Create `<NewsletterForm>` component with email input, submit button, and states (idle, loading, success, error)
- [x] 9.1.2 — Create `app/api/newsletter/route.ts` with email validation, rate limiting, and ESP integration
- [x] 9.1.3 — Integrate with chosen email service provider (Resend recommended for developer experience)
- [x] 9.1.4 — Add `<NewsletterForm>` to the `<Footer>` component
- [x] 9.1.5 — Create `<BlogNewsletterCTA>` variant for inline blog post placement
- [x] 9.1.6 — Add success/error state animations using Framer Motion
- [x] 9.1.7 — Add rate limiting middleware (IP-based, 5 requests/minute)
- [ ] 9.1.8 — Configure double opt-in email template in the ESP
- [x] 9.1.9 — Add `newsletter_signup` analytics event on successful submission
- [x] 9.1.10 — Test form: valid/invalid emails, duplicate subscriptions, rate limit behaviour

---

## Story 9.2 — Launch Waitlist / Early Access Page

**As a** visitor who discovers LumenLingo before it's available in their region,
**I want** to join an early access list,
**So that** I'm notified as soon as the app is available to me.

### Acceptance Criteria

- [x] Route: `/early-access` (can be activated/deactivated via environment variable)
- [x] Headline: "Be Among the First" with cosmic ambient background
- [x] Subheadline: "LumenLingo is expanding. Join the list to get early access and exclusive launch offers."
- [x] Form fields: email + preferred language (dropdown)
- [x] Social proof: counter showing "X learners already waiting"
- [x] Success state: confetti or particle burst animation with "You're on the list!" confirmation
- [x] Unique referral link generated for each signup to encourage sharing
- [x] Share buttons: "Tell a friend" with pre-filled Twitter/WhatsApp/email share text
- [x] Data stored via API route; no third-party dependencies for the waitlist itself

### Subtasks

- [x] 9.2.1 — Create `app/early-access/page.tsx` with hero, form, and social proof
- [x] 9.2.2 — Create `<WaitlistForm>` component with email + language dropdown
- [x] 9.2.3 — Create `app/api/waitlist/route.ts` — stores signups and generates referral codes
- [x] 9.2.4 — Create `<ReferralShare>` component with unique link and social sharing buttons
- [x] 9.2.5 — Add confetti/particle success animation on form submission
- [x] 9.2.6 — Implement waitlist counter (count of signups displayed publicly)
- [ ] 9.2.7 — Add environment variable toggle to show/hide the early access page
- [x] 9.2.8 — Configure SEO metadata for the early access page

---

# Epic 10 — Interactive Product Demos & Engagement

> Create interactive, immersive experiences that let visitors feel LumenLingo's
> quality before downloading — bridging the gap between website and app.

## Story 10.1 — Interactive Flashcard Demo

**As a** visitor who is curious about the flashcard experience,
**I want** to try a mini interactive flashcard demo directly on the website,
**So that** I can feel the quality of the learning experience before downloading.

### Acceptance Criteria

- [x] Route: `/demo` or embedded section on the features page
- [x] Interactive flashcard component that shows a word in the source language
- [x] User can tap/click to flip the card and reveal the translation
- [x] Swipe right (correct) or left (incorrect) gesture/button interaction
- [x] 5 demo flashcards cycling through common words (e.g., "Hello", "Thank you", "Goodbye", "Please", "Yes")
- [x] Glass morphism card styling matching the real app's aesthetic
- [x] Flip animation: smooth 3D card rotation with back-face rendering
- [x] Progress indicator: "Card 1 of 5" with a progress bar
- [x] After completing 5 cards: "Love it? The real experience is even better." + App Store CTA
- [x] Touch gestures work on mobile; keyboard (arrow keys) works on desktop
- [x] Sound effect on correct/incorrect (optional, with mute toggle)

### Subtasks

- [x] 10.1.1 — Create `<FlashcardDemo>` component with card state management (deck, current index, flipped)
- [x] 10.1.2 — Implement 3D flip animation using CSS `transform: rotateY()` and `backface-visibility`
- [x] 10.1.3 — Implement swipe gesture detection using `onPointerDown/Move/Up` or Framer Motion drag
- [x] 10.1.4 — Create swipe-right (correct) and swipe-left (incorrect) animations with card exit
- [x] 10.1.5 — Add progress bar and "Card X of 5" indicator
- [x] 10.1.6 — Create completion screen with stats summary and App Store CTA
- [x] 10.1.7 — Add keyboard navigation: ArrowLeft (incorrect), ArrowRight (correct), Space (flip)
- [x] 10.1.8 — Style cards with glass morphism matching the LumenLingo app aesthetic
- [x] 10.1.9 — Add optional sound effects with mute toggle using Web Audio API
- [x] 10.1.10 — Track `demo_started`, `demo_completed`, and `demo_cta_click` analytics events

---

## Story 10.2 — Animated Feature Walkthroughs

**As a** visitor exploring the features page,
**I want** to see animated walkthroughs of key app features,
**So that** I understand exactly how the app works without watching a full video.

### Acceptance Criteria

- [x] 3 animated walkthroughs embedded on the features page:
  1. **Flashcard Flow** — shows card appearance → flip → swipe right → next card
  2. **Word Builder** — shows letter tile selection, word construction, and completion animation
  3. **Soundscape Selection** — shows browsing soundscapes and toggling ambient audio
- [x] Each walkthrough is a looping animation (8–12 seconds per loop)
- [x] Animations are rendered as CSS/SVG animations or Lottie files (not video for performance)
- [x] Animations play only when in viewport (Intersection Observer triggered)
- [x] On reduced-motion preference, animations show a static screenshot instead
- [x] Each walkthrough has a caption explaining the feature

### Subtasks

- [x] 10.2.1 — Design animation storyboards for all 3 walkthroughs
- [x] 10.2.2 — Create Flashcard Flow animation (CSS transforms + opacity transitions)
- [x] 10.2.3 — Create Word Builder animation (letter selection, word assembly, completion glow)
- [x] 10.2.4 — Create Soundscape Selection animation (carousel browse, audio visualiser pulse)
- [x] 10.2.5 — Implement Intersection Observer play/pause control
- [x] 10.2.6 — Add reduced-motion fallback with static screenshot
- [x] 10.2.7 — Add captions and contextual CTAs below each walkthrough

---

## Story 10.3 — Language Pair Showcase

**As a** visitor wondering if LumenLingo supports my target language,
**I want** to see all available language pairs displayed attractively,
**So that** I can confirm the app supports my learning goals.

### Acceptance Criteria

- [x] Section on the features page or standalone at `/languages`
- [x] Grid of supported language pairs displayed as glass cards with:
  - Source language flag emoji
  - Target language flag emoji
  - Language pair name (e.g., "English → Spanish")
  - Flashcard count (e.g., "2,500+ flashcards")
  - Tier access badge: Free, Pro, or Elite (indicates which membership tier unlocks the pair)
- [x] Cards animate in with staggered fade-up on scroll
- [x] Hovering a card shows a sample word with translation (mini preview)
- [x] "More languages coming soon" card at the end with newsletter signup prompt
- [x] Responsive grid: 4 columns (desktop), 3 (tablet), 2 (mobile)

### Subtasks

- [x] 10.3.1 — Create `<LanguagePairGrid>` section component
- [x] 10.3.2 — Create `<LanguagePairCard>` with flags, name, count, tier access badge, and hover preview
- [x] 10.3.3 — Source accurate flashcard counts per language pair from content data
- [x] 10.3.4 — Add "Coming Soon" card with newsletter CTA
- [x] 10.3.5 — Add staggered entrance animation
- [x] 10.3.6 — Configure SEO: if standalone page, add metadata and `ItemList` structured data

---

# Epic 11 — Dark Theme Polish & Visual Refinements

> Elevate the visual quality with premium dark-theme effects, micro-interactions,
> and atmospheric details that make the website feel as luxurious as the app itself.

## Story 11.1 — Cosmic Background Effects

**As a** visitor,
**I want** subtle, atmospheric background effects that match LumenLingo's nebula aesthetic,
**So that** the website feels like an extension of the app's immersive experience.

### Acceptance Criteria

- [x] Homepage hero section has an animated cosmic gradient mesh background:
  - 3–4 colour blobs (violet, cyan, deep blue) that drift slowly (0.5–1px/second)
  - Blobs use CSS `filter: blur(100px)` for smooth gradients
  - Animation loops seamlessly over 30–60 seconds
- [x] Pricing page has a subtle star field background (CSS dots or canvas particles)
- [x] Blog pages have a minimal dark gradient (no distracting backgrounds during reading)
- [x] Footer has a subtle upward radial gradient that fades into the void background
- [x] All backgrounds are GPU-composited for smooth performance (`will-change: transform`)
- [x] Backgrounds are removed/simplified on reduced-motion preference
- [x] Backgrounds don't increase page load time (no image resources — pure CSS/canvas)

### Subtasks

- [x] 11.1.1 — Create `<CosmicGradient>` component with drifting colour blobs (CSS `@keyframes`)
- [x] 11.1.2 — Create `<StarField>` component with CSS dot particles or lightweight canvas
- [x] 11.1.3 — Add footer radial gradient with smooth blending into page background
- [x] 11.1.4 — Implement reduced-motion fallback (static gradient snapshot)
- [x] 11.1.5 — Profile GPU usage and ensure backgrounds don't cause frame drops
- [x] 11.1.6 — Test on low-end devices (iPhone SE, entry-level Android) for acceptable performance

---

## Story 11.2 — Micro-Interactions & Hover Effects

**As a** visitor interacting with the website,
**I want** delightful, responsive micro-interactions on every clickable element,
**So that** the interface feels alive and premium.

### Acceptance Criteria

- [x] Buttons: hover glow intensification (box-shadow spread increase), press scale (0.97), release spring-back
- [x] Glass cards: hover lifts card 4 px + increases border luminance + subtle shadow expansion
- [x] Navigation links: hover underline slides in from left with violet colour
- [x] App Store badges: hover pulse glow effect (scale 1.02 → 1.0 breathing)
- [x] Pricing card "Most Popular" badge: continuous subtle pulse animation
- [x] Blog post cards: hover reveals a "Read →" indicator sliding in from right
- [x] FAQ accordion: chevron rotates smoothly on expand/collapse
- [x] Form inputs: focus border transitions from grey to violet with glow
- [x] All micro-interactions use CSS transitions (not JS) where possible for maximum performance
- [x] All hover states have keyboard-equivalent `:focus-visible` styles

### Subtasks

- [x] 11.2.1 — Refine `<Button>` hover/press animations across all variants
- [x] 11.2.2 — Add hover lift + glow to all `<GlassCard>` instances
- [x] 11.2.3 — Implement navigation link slide-in underline animation
- [x] 11.2.4 — Add App Store badge hover pulse effect
- [x] 11.2.5 — Add continuous pulse to "Most Popular" pricing badge
- [x] 11.2.6 — Add "Read →" slide-in reveal on blog post card hover
- [x] 11.2.7 — Polish FAQ chevron rotation animation
- [x] 11.2.8 — Refine form input focus transitions
- [x] 11.2.9 — Ensure all hover states have matching `:focus-visible` counterparts
- [x] 11.2.10 — Test all micro-interactions on touch devices (no hover stuck states)

---

## Story 11.3 — Loading & Skeleton States

**As a** visitor waiting for content to load,
**I want** elegant loading states that maintain the premium feel,
**So that** the experience never feels broken or unpolished.

### Acceptance Criteria

- [x] Skeleton loading screens for all async content:
  - Blog post cards: glass-tinted pulsing rectangles matching card dimensions
  - Blog post body: pulsing text-line placeholders with realistic line widths
  - Images: blur placeholder that crossfades to loaded image
- [x] Global page loading indicator: thin violet progress bar at the top (like NProgress)
- [x] Navigation route change: subtle fade transition (not a flash of white)
- [x] Skeleton pulse animation uses a violet-tinted shimmer (not grey)
- [x] Loading states match the surrounding glass morphism aesthetic
- [x] No content layout shift when real content replaces skeleton (matched dimensions)

### Subtasks

- [x] 11.3.1 — Create `<Skeleton>` base component with violet-tinted shimmer animation
- [x] 11.3.2 — Create `<PostCardSkeleton>` matching `<PostCard>` dimensions
- [x] 11.3.3 — Create `<PostBodySkeleton>` matching blog prose layout
- [x] 11.3.4 — Integrate blur → loaded crossfade on all `<Image>` components
- [x] 11.3.5 — Add top-of-page progress bar for route transitions
- [x] 11.3.6 — Test CLS: verify skeletons prevent layout shift by matching real content dimensions

---

# Epic 12 — Error Handling, 404 & Edge Cases

> Ensure every dead-end, error state, and edge case is handled gracefully
> with on-brand pages that guide visitors back to valuable content.

## Story 12.1 — Custom 404 Page

**As a** visitor who reaches a broken or outdated link,
**I want** a helpful, beautifully designed 404 page,
**So that** I'm guided back to the site instead of bouncing.

### Acceptance Criteria

- [x] Custom `app/not-found.tsx` replaces the default Next.js 404
- [x] Headline: "Lost in the Cosmos" with a floating astronaut or planet illustration
- [x] Subheadline: "The page you're looking for has drifted away. Let us help you find your way."
- [x] Search bar: lets user search blog posts or site content
- [x] Quick links: "Go Home", "Browse Features", "Read the Blog", "Contact Us"
- [x] Background: subtle star field animation consistent with cosmic theme
- [x] The page is lightweight and loads instantly (no heavy dependencies)
- [x] Google Analytics tracks 404 page views with the attempted URL

### Subtasks

- [x] 12.1.1 — Create `app/not-found.tsx` with cosmic-themed 404 design
- [x] 12.1.2 — Add floating illustration or SVG animation (astronaut, planet, or nebula)
- [x] 12.1.3 — Add search bar component for site-wide content search
- [x] 12.1.4 — Add quick-link buttons to key pages
- [x] 12.1.5 — Add star field background animation
- [x] 12.1.6 — Track 404 events with the missed URL in analytics
- [x] 12.1.7 — Test: verify custom 404 renders for non-existent routes and redirects

---

## Story 12.2 — Error Boundary Pages

**As a** visitor who encounters a runtime error,
**I want** a graceful error page instead of a broken screen,
**So that** I still trust the product even when something goes wrong.

### Acceptance Criteria

- [x] Global `app/error.tsx` catches client-side runtime errors
- [x] Global `app/global-error.tsx` catches root layout errors
- [x] Error page displays: "Something Unexpected Happened" with a calming illustration
- [x] "Try Again" button attempts to re-render the failed component
- [x] "Go Home" button navigates to the homepage
- [x] Error details are logged to an error reporting service (Sentry or Vercel) but NOT shown to the user
- [x] Error page matches the dark theme and glass morphism aesthetic
- [x] No sensitive technical details (stack traces, internal paths) are exposed

### Subtasks

- [x] 12.2.1 — Create `app/error.tsx` client error boundary with retry and home navigation
- [x] 12.2.2 — Create `app/global-error.tsx` for root layout errors
- [x] 12.2.3 — Style error pages with dark theme, illustration, and glass buttons
- [x] 12.2.4 — Integrate error reporting (Sentry `captureException` or Vercel error logging)
- [x] 12.2.5 — Test error boundary by intentionally throwing in a component
- [x] 12.2.6 — Verify no stack traces or internal paths leak to the client

---

## Story 12.3 — Offline & Slow Connection Handling

**As a** visitor with a poor internet connection,
**I want** the website to degrade gracefully and still be partially usable,
**So that** I'm not blocked from learning about LumenLingo.

### Acceptance Criteria

- [x] Service worker registers a cache-first strategy for static assets (fonts, CSS, JS)
- [x] Previously visited pages are available offline from the service worker cache
- [x] Offline fallback page: "You're Offline — But LumenLingo Works Offline Too!" with:
  - Cached homepage content if available
  - Download reminder: "The LumenLingo app works beautifully offline with a Pro subscription or higher"
  - "Retry" button to check connection
- [x] Slow connection: images have blur placeholders; content text loads first
- [x] Network status indicator fades in when connection is lost

### Subtasks

- [x] 12.3.1 — Configure Next.js PWA or `next-pwa` for service worker generation
- [x] 12.3.2 — Create offline fallback page at `app/offline/page.tsx`
- [x] 12.3.3 — Define caching strategy: static assets (cache-first), HTML (network-first with cache fallback)
- [x] 12.3.4 — Add `<NetworkStatus>` component that detects offline state and shows indicator
- [x] 12.3.5 — Test offline flow: load page → go offline → navigate → verify fallback
- [x] 12.3.6 — Verify service worker doesn't interfere with Vercel preview deployments

---

# Epic 13 — Internationalisation & Localisation Readiness

> Prepare the website for multi-language content delivery so that
> LumenLingo can serve users in their native language as the product expands.

## Story 13.1 — i18n Architecture Setup

**As a** developer preparing for international expansion,
**I want** an internationalisation framework ready for multi-language content,
**So that** adding new languages is a configuration change, not a rewrite.

### Acceptance Criteria

- [x] Next.js Middleware-based i18n routing with URL prefix strategy (`/es/`, `/fr/`, `/ja/`)
- [x] Default locale: `en` (no prefix for English)
- [x] Supported locales (initial): `en`, `es`, `fr`, `ja`, `de`, `pt`
- [x] Translation files stored in `src/messages/{locale}.json` using nested key structure
- [x] `next-intl` or similar library integrated for:
  - Server component translations (`useTranslations`)
  - Client component translations
  - Formatted dates, numbers, and relative times
- [x] Language switcher dropdown in the header with flag icons and language names
- [x] `hreflang` link tags automatically generated for all translated pages
- [x] `<html lang="...">` attribute dynamically set based on current locale
- [x] Blog posts support per-locale variants (same slug, different language directories)

### Subtasks

- [x] 13.1.1 — Install and configure `next-intl` with middleware routing
- [x] 13.1.2 — Create `src/messages/en.json` with all UI strings extracted from components
- [x] 13.1.3 — Create translation files for initial locales: `es.json`, `fr.json` (placeholder content)
- [x] 13.1.4 — Refactor all hardcoded UI strings in components to use `useTranslations()`
- [x] 13.1.5 — Create `<LanguageSwitcher>` dropdown component with flag icons
- [x] 13.1.6 — Add `hreflang` meta tags via `generateMetadata` for all pages
- [x] 13.1.7 — Set `<html lang="...">` dynamically in root layout
- [x] 13.1.8 — Configure blog MDX to support per-locale content directories
- [x] 13.1.9 — Test locale switching: URL updates, content changes, language picker reflects state

---

## Story 13.2 — Localised Content for Spanish

**As a** Spanish-speaking visitor,
**I want** to browse the LumenLingo website in Spanish,
**So that** I can understand the product in my native language.

### Acceptance Criteria

- [x] All UI strings translated to Spanish (navigation, CTAs, form labels, error messages)
- [x] Homepage hero, features, and CTA sections have Spanish translations
- [x] Pricing page has Spanish translations with localised currency display (if applicable)
- [x] At least 3 blog posts translated to Spanish
- [x] Spanish pages accessible at `/es/`, `/es/features`, `/es/pricing`, `/es/blog`
- [ ] Translation quality reviewed by a native Spanish speaker
- [x] OG tags and metadata use Spanish text for Spanish locale pages

### Subtasks

- [x] 13.2.1 — Translate `en.json` UI strings to `es.json` (professional or native-speaker review)
- [x] 13.2.2 — Translate homepage hero, features, and CTA copy
- [x] 13.2.3 — Translate pricing page copy including FAQ answers
- [x] 13.2.4 — Translate 3 blog posts (prioritise highest-traffic articles)
- [ ] 13.2.5 — Review all Spanish translations with a native speaker
- [x] 13.2.6 — Configure Spanish-specific OG metadata
- [x] 13.2.7 — Test complete Spanish user journey: homepage → features → pricing → blog → download

---

# Epic 14 — Testing, Quality Assurance & Launch Readiness

> Establish comprehensive automated testing, conduct pre-launch QA,
> and prepare all assets and configurations for a confident production launch.

## Story 14.1 — Automated Testing Suite

**As a** developer,
**I want** a comprehensive automated test suite covering critical user paths,
**So that** regressions are caught before reaching production.

### Acceptance Criteria

- [x] Unit tests with Vitest for:
  - Blog utility functions (`getAllPosts`, `getPostBySlug`, reading time calculation)
  - Analytics event helpers
  - App Store URL generator with campaign tokens
  - Email validation logic
  - Newsletter API route handler
- [x] Component tests with React Testing Library for:
  - `<Button>` — renders all variants, handles click events
  - `<GlassCard>` — renders children, applies className
  - `<NewsletterForm>` — validates input, shows success/error states
  - `<PricingCard>` — renders tier information, CTA links correctly
  - `<FAQ>` — expands/collapses, keyboard navigation works
- [x] End-to-end tests with Playwright for:
  - Homepage load and navigation to all major pages
  - Blog post listing and individual post rendering
  - Pricing page tier cards and CTA clicks
  - Newsletter signup submission flow
  - Mobile hamburger menu open/close and navigation
  - 404 page renders for non-existent routes
- [x] Test coverage threshold: 80% for utility functions, 60% for components
- [x] Tests run in CI on every pull request

### Subtasks

- [x] 14.1.1 — Install and configure Vitest with React Testing Library
- [x] 14.1.2 — Install and configure Playwright for E2E tests
- [x] 14.1.3 — Write unit tests for blog utilities (5+ test cases)
- [x] 14.1.4 — Write unit tests for analytics helpers (3+ test cases)
- [x] 14.1.5 — Write unit tests for App Store URL generator (5+ test cases covering all campaign tokens)
- [x] 14.1.6 — Write component tests for `<Button>`, `<GlassCard>`, `<NewsletterForm>` (10+ assertions)
- [x] 14.1.7 — Write component tests for `<PricingCard>`, `<FAQ>` (8+ assertions)
- [x] 14.1.8 — Write E2E tests for homepage navigation flow
- [x] 14.1.9 — Write E2E tests for blog browsing and post rendering
- [x] 14.1.10 — Write E2E tests for pricing page interactions
- [x] 14.1.11 — Write E2E tests for newsletter signup flow
- [x] 14.1.12 — Write E2E tests for mobile navigation
- [x] 14.1.13 — Configure CI to run all tests on PR and block merge on failure

---

## Story 14.2 — Pre-Launch QA Checklist

**As a** product owner preparing for launch,
**I want** a comprehensive QA checklist verified by the team,
**So that** no embarrassing issues are present when the site goes live.

### Acceptance Criteria

- [x] **Content QA**:
  - [x] All page copy reviewed for typos, grammar, and brand voice consistency
  - [x] All placeholder/lorem ipsum text is replaced with real content
  - [x] All images have real (not placeholder) assets
  - [ ] App Store ID is correct in all badges, links, Smart App Banner, and AASA file
  - [x] Pricing is accurate and matches App Store Connect pricing
  - [x] Legal pages (Privacy, Terms) reviewed by legal counsel
- [x] **Technical QA**:
  - [x] All internal links work (no 404s) — verified by automated link checker
  - [x] All external links open in new tab with `rel="noopener noreferrer"`
  - [x] Console has no errors or warnings on any page
  - [x] No mixed content (all resources served over HTTPS)
  - [x] Favicons render correctly at all sizes (16, 32, 180, 192, 512)
  - [x] `manifest.json` is valid with correct app name, colours, and icons
  - [x] Open Graph previews render correctly on Twitter, Facebook, LinkedIn
  - [x] RSS feed validates with W3C Feed Validator
  - [x] Sitemap is valid and submitted to Search Console
  - [x] Robots.txt is permissive for public pages, blocks internal routes
- [x] **Performance QA**:
  - [x] Lighthouse score ≥ 95 across all 4 categories on homepage
  - [x] LCP ≤ 2.5 s on 3G mobile simulation
  - [x] No render-blocking resources
  - [x] Total page weight < 500 KB (gzipped) for homepage
- [x] **Accessibility QA**:
  - [x] axe DevTools reports 0 critical/serious violations
  - [x] Keyboard-only navigation is fully functional
  - [x] VoiceOver reads all content logically
  - [x] Colour contrast passes WCAG 2.1 AA

### Subtasks

- [x] 14.2.1 — Conduct full content review across all pages
- [x] 14.2.2 — Run automated link checker and fix broken links
- [x] 14.2.3 — Run console audit across all pages in Chrome, Safari, Firefox
- [x] 14.2.4 — Verify HTTPS for all resources; fix mixed content issues
- [x] 14.2.5 — Verify favicons at all sizes and `manifest.json` validity
- [x] 14.2.6 — Test OG/Twitter previews with sharing debugger tools
- [x] 14.2.7 — Validate RSS feed and sitemap
- [x] 14.2.8 — Run final Lighthouse audit on homepage, features, pricing, blog index
- [x] 14.2.9 — Run axe DevTools on all pages; resolve any remaining violations
- [x] 14.2.10 — Conduct keyboard-only navigation walkthrough of entire site
- [x] 14.2.11 — Conduct VoiceOver testing on macOS Safari

---

## Story 14.3 — Production Launch Configuration

**As a** DevOps engineer preparing for launch,
**I want** all production infrastructure properly configured,
**So that** the launch is smooth, the site is secure, and monitoring is active.

### Acceptance Criteria

- [ ] Custom domain `lumenlingo.com` is live with SSL and `www` → `lumenlingo.com` redirect
- [ ] DNS configured with Vercel's recommended CNAME and A records
- [ ] Environment variables set for production: analytics IDs, API keys, feature flags
- [x] Vercel Analytics and Speed Insights enabled for production
- [x] Error monitoring (Sentry or equivalent) configured for production with source maps
- [ ] Uptime monitoring configured (Vercel, Pingdom, or UptimeRobot) with email/Slack alerts
- [x] Cache-Control headers verified: static assets have long TTL, HTML has short TTL
- [x] Security headers configured:
  - `Strict-Transport-Security` (HSTS)
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Content-Security-Policy` (restrictive policy allowing only necessary sources)
- [ ] Google Search Console verified and sitemap submitted
- [ ] Bing Webmaster Tools verified
- [x] Google Analytics / Tag Manager excluded from development environments

### Subtasks

- [ ] 14.3.1 — Configure DNS records for `lumenlingo.com` on Vercel
- [ ] 14.3.2 — Verify SSL certificate is active and auto-renewing
- [ ] 14.3.3 — Set all production environment variables in Vercel dashboard
- [x] 14.3.4 — Enable Vercel Analytics and Speed Insights for production project
- [x] 14.3.5 — Configure Sentry for error monitoring with source map uploads
- [ ] 14.3.6 — Set up uptime monitoring with alert notifications
- [x] 14.3.7 — Configure security headers in `next.config.ts` or `vercel.json`
- [ ] 14.3.8 — Verify and submit sitemap to Google Search Console
- [ ] 14.3.9 — Verify and submit sitemap to Bing Webmaster Tools
- [x] 14.3.10 — Run final production smoke test: visit all pages, verify analytics fire, confirm error reporting works

---

# Epic 15 — Full Content Internationalisation Across All LumenLingo Languages

> Deliver a fully internationalised website experience in every language the
> LumenLingo app supports, so that users in any target market can discover,
> evaluate, and convert in their native language — from hero headline to legal
> fine print.

**Context & Rationale**

Epic 13 established the i18n architecture (next-intl, middleware routing, message
file structure, language switcher) and completed Spanish translations. However,
the four remaining frontend locales (French, Japanese, German, Portuguese) are
still ~82 % untranslated English, and four languages supported by the iOS app
(Polish, Arabic, Chinese, Ukrainian) have no frontend locale at all. Blog
content exists only in English (14 posts) and Spanish (3 posts). Legal pages
(Privacy Policy, Terms of Service) are hardcoded English JSX with no localisation
path. This epic closes every one of those gaps.

**Scope**

| Dimension | Current State | Target State |
|-----------|---------------|--------------|
| UI string locales | 6 (en, es, fr ⁱ, ja ⁱ, de ⁱ, pt ⁱ) | 10 (en, es, fr, ja, de, pt, pl, ar, zh, uk) |
| UI string coverage | es ≈ 100 %; fr/ja/de/pt ≈ 18 % | 100 % for all 10 locales |
| Blog posts (EN) | 14 | 14 |
| Blog posts (localised) | 3 (ES only) | 14 × 9 non-EN locales = 126 translated posts |
| Legal pages | EN-only hardcoded JSX | Fully localised in all 10 locales |
| RTL support | None | Full RTL for Arabic (`ar`) |
| Translation QA workflow | Ad-hoc | Repeatable glossary + review pipeline |

ⁱ = partially translated (~18 % of strings)

**iOS ↔ Frontend Language Matrix**

| Language | ISO | iOS App | Frontend (current) | Frontend (target) |
|----------|-----|---------|-------------------|-------------------|
| English | en | ✅ | ✅ (default) | ✅ |
| Spanish | es | ✅ | ✅ | ✅ |
| French | fr | ✅ | ⚠️ 18 % | ✅ |
| German | de | ✅ | ⚠️ 18 % | ✅ |
| Japanese | ja | ✅ | ⚠️ 18 % | ✅ |
| Portuguese | pt | — | ⚠️ 18 % | ✅ |
| Polish | pl | ✅ | ❌ | ✅ |
| Arabic | ar | ✅ | ❌ | ✅ (RTL) |
| Chinese | zh | ✅ | ❌ | ✅ |
| Ukrainian | uk | ✅ | ❌ | ✅ |

---

## Story 15.1 — Complete UI String Translations for Existing Locales

**As a** French / Japanese / German / Portuguese-speaking visitor,
**I want** the entire website UI rendered in my native language,
**So that** I can understand every element of the site — from navigation to
error messages — without falling back to English.

### Acceptance Criteria

- [x] `fr.json` contains professional-quality French translations for all 21 namespaces (171+ leaf keys)
- [x] `ja.json` contains professional-quality Japanese translations for all 21 namespaces (171+ leaf keys)
- [x] `de.json` contains professional-quality German translations for all 21 namespaces (171+ leaf keys)
- [x] `pt.json` contains professional-quality Portuguese (Brazilian) translations for all 21 namespaces (171+ leaf keys)
- [x] No English fallback text is visible on any page when browsing in FR, JA, DE, or PT
- [x] Namespace coverage verified: `Metadata`, `Nav`, `LanguageSwitcher`, `Hero`, `FeatureShowcase`, `ScreenshotGallery`, `Differentiators`, `CTA`, `Features`, `Pricing`, `About`, `Contact`, `Demo`, `Download`, `EarlyAccess`, `Error`, `Footer`, `NetworkStatus`, `Newsletter`, `NotFound`, `Offline`
- [x] Date and number formatting uses locale conventions (e.g. `22 mars 2026` for FR, `2026年3月22日` for JA)
- [x] Pluralisation rules are correct per locale (French: singular/plural; Japanese: no plural; German: singular/plural)
- [x] OG metadata (`title`, `description`) uses locale-specific translations for social sharing
- [x] All 4 locales pass a visual diff test — no layout overflow caused by longer translated strings (e.g. DE noun compounds)

### Subtasks

- [x] 15.1.1 — Audit `en.json` and produce a canonical key inventory spreadsheet (namespace, key, EN value, max char hint)
- [x] 15.1.2 — Translate all 171+ keys in `fr.json`; replace every remaining English value
- [x] 15.1.3 — Translate all 171+ keys in `ja.json`; replace every remaining English value
- [x] 15.1.4 — Translate all 171+ keys in `de.json`; replace every remaining English value
- [x] 15.1.5 — Translate all 171+ keys in `pt.json`; replace every remaining English value
- [x] 15.1.6 — Add locale-aware date/number formatting using `next-intl`'s `useFormatter()` where dates and numbers appear
- [x] 15.1.7 — Configure ICU plural rules for each locale in message files where counts are displayed
- [x] 15.1.8 — Run visual regression test (Playwright screenshot comparison) for FR, JA, DE, PT on Homepage, Features, Pricing, Blog pages — flag any text overflow or truncation
- [x] 15.1.9 — Fix all layout issues found in visual regression (e.g. button width, card height, heading wrap)

---

## Story 15.2 — Add New Locale Support for iOS-Aligned Languages (PL, AR, ZH, UK)

**As a** Polish / Arabic / Chinese / Ukrainian-speaking user who discovers LumenLingo,
**I want** to browse the marketing website in my native language,
**So that** I can understand the product value proposition before downloading.

### Acceptance Criteria

- [x] `pl.json`, `ar.json`, `zh.json`, `uk.json` message files created with all 21 namespaces fully translated
- [x] Locale routing extended: `routing.ts` supports `['en','es','fr','ja','de','pt','pl','ar','zh','uk']`
- [x] URL prefixes work: `/pl/`, `/ar/`, `/zh/`, `/uk/` serve correct locale content
- [x] `<LanguageSwitcher>` dropdown lists all 10 languages with correct native-script labels (e.g. `العربية`, `中文`, `Українська`, `Polski`)
- [x] `hreflang` link tags generated for all 10 locales on every page
- [x] Sitemap includes all locale-prefixed URLs
- [x] Default locale (`en`) still has no URL prefix
- [x] `<html lang="..." dir="...">` correctly set (including `dir="rtl"` for Arabic)

### Subtasks

- [x] 15.2.1 — Add `'pl','ar','zh','uk'` to the locale array in `src/i18n/routing.ts`
- [x] 15.2.2 — Create `messages/pl.json` with full Polish translations for all 21 namespaces
- [x] 15.2.3 — Create `messages/ar.json` with full Arabic translations for all 21 namespaces
- [x] 15.2.4 — Create `messages/zh.json` with full Simplified Chinese translations for all 21 namespaces
- [x] 15.2.5 — Create `messages/uk.json` with full Ukrainian translations for all 21 namespaces
- [x] 15.2.6 — Update `<LanguageSwitcher>` to display all 10 locales with native-script display names and appropriate flag icons
- [x] 15.2.7 — Verify `hreflang` tags are emitted for all 10 locales in `generateMetadata`
- [x] 15.2.8 — Verify sitemap generation includes all new locale-prefixed routes
- [x] 15.2.9 — Visual regression test for PL, AR, ZH, UK across key pages (Homepage, Features, Pricing)
- [x] 15.2.10 — Fix any layout, font rendering, or overflow issues found in new locales

---

## Story 15.3 — Arabic Right-to-Left (RTL) Layout Support

**As an** Arabic-speaking visitor,
**I want** the website layout to be fully mirrored for right-to-left reading,
**So that** the experience feels native and professional, not like a broken left-to-right page.

### Acceptance Criteria

- [x] `<html dir="rtl">` set when locale is `ar`
- [x] Tailwind CSS RTL utilities enabled (`rtl:` variant) or logical properties (`ms-`, `me-`, `ps-`, `pe-`) used throughout
- [x] All components render correctly in RTL:
  - [x] Header: logo on the right, navigation on the left, language switcher on the left
  - [x] Hero section: text right-aligned, CTA buttons in correct order
  - [x] Feature cards: icon/text direction reversed
  - [x] Pricing cards: layout mirrored
  - [x] Blog post prose: right-aligned text, correct list marker placement
  - [x] Footer: columns flow right-to-left
  - [x] Forms: labels and inputs right-aligned, validation messages on correct side
- [x] Arrows, chevrons, and directional icons flip for RTL (e.g. "next" arrow points left)
- [x] No horizontal scrollbar on any page in RTL mode
- [x] Blog post images remain correctly positioned (images are not mirrored)
- [x] Language switcher remains functional and accessible in RTL layout

### Subtasks

- [x] 15.3.1 — Enable Tailwind CSS RTL support: configure `rtl:` variant or switch to CSS logical properties project-wide
- [x] 15.3.2 — Update root layout to dynamically set `dir="rtl"` based on locale
- [x] 15.3.3 — Audit and fix Header, Footer, and MobileMenu for RTL layout
- [x] 15.3.4 — Audit and fix HeroSection, FeatureShowcase, DifferentiatorSection, CTABanner for RTL
- [x] 15.3.5 — Audit and fix PricingCard, FeatureComparisonTable, PricingFAQ for RTL
- [x] 15.3.6 — Audit and fix blog components (PostCard, PostGrid, PostHeader, MDXProse, TableOfContents) for RTL
- [x] 15.3.7 — Audit and fix form components (NewsletterForm, Contact form, EarlyAccess form) for RTL
- [x] 15.3.8 — Replace directional icons (arrows, chevrons) with locale-aware variants that auto-flip
- [x] 15.3.9 — Full visual QA pass on all Arabic pages — screenshot comparison against LTR English equivalents
- [x] 15.3.10 — Fix all RTL-specific bugs found during QA

---

## Story 15.4 — CJK Typography & Font Support (Japanese, Chinese)

**As a** Japanese or Chinese-speaking visitor,
**I want** the website to use proper CJK font stacks and typographic conventions,
**So that** the text is beautiful, legible, and culturally appropriate.

### Acceptance Criteria

- [ ] CJK-optimised font stack configured: `Noto Sans JP` (Japanese), `Noto Sans SC` (Simplified Chinese) loaded via `next/font` or Google Fonts with subset preloading
- [ ] Display headings use a CJK-appropriate typeface (not Latin-only Cabinet Grotesk / Satoshi)
- [ ] Body text renders at an appropriate size: CJK characters are comfortable at 16–18 px (not smaller)
- [ ] Line height adjusted for CJK: 1.8–2.0 (vs 1.5–1.6 for Latin scripts)
- [ ] Word-break behaviour is correct: `word-break: break-all` or `overflow-wrap: anywhere` for CJK contexts where no spaces exist
- [ ] No mojibake (garbled characters) on any page
- [ ] Font files are subset-loaded to keep page weight manageable (< 200 KB per locale)
- [ ] Fallback fonts are specified so content is readable before web fonts load

### Subtasks

- [ ] 15.4.1 — Select and configure `Noto Sans JP` for Japanese via `next/font/google` with Unicode range subsetting
- [ ] 15.4.2 — Select and configure `Noto Sans SC` for Simplified Chinese via `next/font/google` with Unicode range subsetting
- [ ] 15.4.3 — Create a locale-aware font utility in `src/lib/fonts.ts` that returns the correct font class per locale
- [ ] 15.4.4 — Update root layout to apply locale-specific font classes to `<body>`
- [ ] 15.4.5 — Adjust line-height and word-break CSS for CJK locales via Tailwind custom utilities or `[locale]` layout
- [ ] 15.4.6 — Verify heading and body rendering on JA and ZH pages — no clipping, no overflow, no mojibake
- [ ] 15.4.7 — Measure font payload per locale with Lighthouse; ensure < 200 KB incremental per CJK font

---

## Story 15.5 — Blog Content Translation — Tier 1 (ES, FR, DE)

**As a** Spanish / French / German-speaking reader,
**I want** to read all LumenLingo blog posts in my native language,
**So that** I can learn about the app and language learning techniques without a language barrier.

### Acceptance Criteria

- [ ] All 14 English blog posts translated to Spanish (11 new, completing the existing 3)
- [ ] All 14 English blog posts translated to French (14 new)
- [ ] All 14 English blog posts translated to German (14 new)
- [ ] Translated posts placed in `src/content/blog/{locale}/` subdirectories matching the English slug
- [ ] Frontmatter (`title`, `description`) fully translated per locale
- [ ] `tags` translated to locale-appropriate terms or kept as English where the tag is a proper noun / brand name
- [ ] `category` values remain in English (used programmatically) but category display names are translated via message files
- [ ] SEO metadata for each translated post uses native-language title and description
- [ ] Internal links within posts point to the correct locale-prefixed blog URLs
- [ ] Related posts (`getRelatedPosts`) return posts from the same locale
- [ ] `feed.xml` (RSS) includes separate feeds or locale-filtered entries for ES, FR, DE

### Subtasks

- [ ] 15.5.1 — Create `src/content/blog/es/` — translate remaining 11 English posts to Spanish
- [ ] 15.5.2 — Create `src/content/blog/fr/` — translate all 14 English posts to French
- [ ] 15.5.3 — Create `src/content/blog/de/` — translate all 14 English posts to German
- [ ] 15.5.4 — Translate frontmatter (`title`, `description`) for all ES, FR, DE posts
- [ ] 15.5.5 — Update internal links in translated posts to use locale-prefixed URLs
- [ ] 15.5.6 — Verify `getAllPosts(locale)` returns correct translated posts for ES, FR, DE
- [ ] 15.5.7 — Verify blog index, category, and tag pages render correctly for each locale
- [ ] 15.5.8 — Configure RSS feed to serve locale-specific entries (e.g. `/es/blog/feed.xml`)
- [ ] 15.5.9 — Add translated blog category display names to ES, FR, DE message files

---

## Story 15.6 — Blog Content Translation — Tier 2 (JA, PT, ZH)

**As a** Japanese / Portuguese / Chinese-speaking reader,
**I want** to read all LumenLingo blog posts in my native language,
**So that** I benefit from the same content as English-speaking users.

### Acceptance Criteria

- [ ] All 14 English blog posts translated to Japanese (14 new)
- [ ] All 14 English blog posts translated to Portuguese (14 new)
- [ ] All 14 English blog posts translated to Chinese — Simplified (14 new)
- [ ] Translated posts placed in `src/content/blog/{locale}/` following the same structure as Tier 1
- [ ] Frontmatter translated; same rules as Story 15.5
- [ ] CJK blog posts render correctly with proper typography (Story 15.4 dependency)
- [ ] Blog search/filter works correctly with CJK characters
- [ ] Reading time calculation accounts for CJK character density (~500 chars/min vs ~200 words/min for Latin)

### Subtasks

- [ ] 15.6.1 — Create `src/content/blog/ja/` — translate all 14 English posts to Japanese
- [ ] 15.6.2 — Create `src/content/blog/pt/` — translate all 14 English posts to Portuguese
- [ ] 15.6.3 — Create `src/content/blog/zh/` — translate all 14 English posts to Chinese (Simplified)
- [ ] 15.6.4 — Translate frontmatter (`title`, `description`) for all JA, PT, ZH posts
- [ ] 15.6.5 — Update `readingTime` calculation in `src/lib/blog.ts` to use CJK character count for JA and ZH locales
- [ ] 15.6.6 — Verify blog index, category, tag, and individual post pages render correctly for JA, PT, ZH
- [ ] 15.6.7 — Add translated blog category display names to JA, PT, ZH message files

---

## Story 15.7 — Blog Content Translation — Tier 3 (PL, AR, UK)

**As a** Polish / Arabic / Ukrainian-speaking reader,
**I want** to read all LumenLingo blog posts in my native language,
**So that** I have full access to LumenLingo's educational content.

### Acceptance Criteria

- [ ] All 14 English blog posts translated to Polish (14 new)
- [ ] All 14 English blog posts translated to Arabic (14 new)
- [ ] All 14 English blog posts translated to Ukrainian (14 new)
- [ ] Arabic blog posts render correctly in RTL layout (Story 15.3 dependency)
- [ ] Ukrainian blog posts use correct Cyrillic rendering
- [ ] Translated posts placed in `src/content/blog/{locale}/` following established structure
- [ ] Frontmatter translated; same rules as Story 15.5
- [ ] All locale-specific blog RSS feeds are valid for PL, AR, UK

### Subtasks

- [ ] 15.7.1 — Create `src/content/blog/pl/` — translate all 14 English posts to Polish
- [ ] 15.7.2 — Create `src/content/blog/ar/` — translate all 14 English posts to Arabic
- [ ] 15.7.3 — Create `src/content/blog/uk/` — translate all 14 English posts to Ukrainian
- [ ] 15.7.4 — Translate frontmatter (`title`, `description`) for all PL, AR, UK posts
- [ ] 15.7.5 — Verify Arabic blog posts render correctly in RTL (prose direction, image placement, list markers)
- [ ] 15.7.6 — Verify Ukrainian posts render correctly with Cyrillic font stack
- [ ] 15.7.7 — Validate all locale RSS feeds pass W3C Feed Validator

---

## Story 15.8 — Legal Page Localisation (Privacy Policy & Terms of Service)

**As a** non-English-speaking visitor,
**I want** to read the Privacy Policy and Terms of Service in my language,
**So that** I understand the legal terms before using the product — and LumenLingo complies with local consumer-protection and data-privacy laws.

### Acceptance Criteria

- [ ] Privacy Policy content extracted from hardcoded JSX into locale-addressable structured content (message file keys or MDX per locale)
- [ ] Terms of Service content extracted from hardcoded JSX into locale-addressable structured content
- [ ] Both pages translated into all 9 non-English locales: ES, FR, JA, DE, PT, PL, AR, ZH, UK
- [ ] Legal pages render correctly for RTL (Arabic) and CJK (Japanese, Chinese) layouts
- [ ] `LegalTOC` component supports translated section headings and anchor links
- [ ] `<DownloadPDFButton>` works for all locales (PDF generation or pre-rendered per locale)
- [ ] `BreadcrumbJsonLd` structured data uses translated breadcrumb names
- [ ] EU locales (FR, DE, ES, PT, PL) include GDPR-specific clause translations
- [ ] Legal translations reviewed by a qualified translator with legal knowledge (not machine-only)
- [ ] Last-updated date shown on each localised page

### Subtasks

- [ ] 15.8.1 — Extract Privacy Policy content from `privacy/page.tsx` inline JSX into a structured format (one key per section in message files, or MDX per locale)
- [ ] 15.8.2 — Extract Terms of Service content from `terms/page.tsx` inline JSX into a structured format
- [ ] 15.8.3 — Refactor `privacy/page.tsx` and `terms/page.tsx` to render content from the structured source using `useTranslations()`
- [ ] 15.8.4 — Translate Privacy Policy into ES, FR, DE, PT, PL (EU locales first — GDPR compliance)
- [ ] 15.8.5 — Translate Privacy Policy into JA, ZH, AR, UK
- [ ] 15.8.6 — Translate Terms of Service into ES, FR, DE, PT, PL
- [ ] 15.8.7 — Translate Terms of Service into JA, ZH, AR, UK
- [ ] 15.8.8 — Update `LegalTOC` to use translated section headings from message files
- [ ] 15.8.9 — Verify `DownloadPDFButton` generates correct localised PDF for each locale
- [ ] 15.8.10 — Verify RTL legal page layout for Arabic locale
- [ ] 15.8.11 — Commission legal-quality review of translated Privacy Policy and Terms for all locales

---

## Story 15.9 — Locale-Specific SEO & Metadata Optimisation

**As a** product owner focused on international organic traffic,
**I want** each localised page to have fully optimised SEO metadata,
**So that** search engines index and rank our pages correctly for each language market.

### Acceptance Criteria

- [ ] Every page has locale-specific `<title>` and `<meta name="description">` via `generateMetadata`
- [ ] Open Graph tags (`og:title`, `og:description`, `og:locale`, `og:locale:alternate`) set per locale
- [ ] `og:locale` uses correct IETF format (e.g. `fr_FR`, `ja_JP`, `de_DE`, `pt_BR`, `pl_PL`, `ar_SA`, `zh_CN`, `uk_UA`)
- [ ] `hreflang` tags include `x-default` pointing to English
- [ ] Sitemap includes all localised URLs with `<xhtml:link rel="alternate" hreflang="...">` annotations
- [ ] Localised canonical URLs set correctly (each locale's page is self-canonical)
- [ ] Google Search Console verified for all locale subpaths
- [ ] Structured data (`BreadcrumbJsonLd`, `WebSiteJsonLd`, `ArticleJsonLd`) uses translated strings where applicable
- [ ] No duplicate content warnings in Search Console between locale variants
- [ ] Blog post `ArticleJsonLd` uses translated `headline` and `description` per locale

### Subtasks

- [ ] 15.9.1 — Audit all `generateMetadata` functions to ensure they read locale-specific translations for `title` and `description`
- [ ] 15.9.2 — Add `og:locale` and `og:locale:alternate` tags to all pages
- [ ] 15.9.3 — Add `x-default` hreflang tag pointing to the English version on all pages
- [ ] 15.9.4 — Update `sitemap.ts` to generate `<xhtml:link>` alternate annotations for all locale variants
- [ ] 15.9.5 — Verify canonical URLs: each localised page self-references as canonical (not pointing to EN)
- [ ] 15.9.6 — Update structured data (`JsonLd` components) to use translated strings
- [ ] 15.9.7 — Submit all new locale subpaths to Google Search Console
- [ ] 15.9.8 — Validate OG previews for 3 sample pages per locale using Facebook/Twitter sharing debuggers
- [ ] 15.9.9 — Run Screaming Frog (or equivalent) crawl to verify no orphan pages, missing hreflang, or duplicate content

---

## Story 15.10 — Translation Glossary, Style Guide & Quality Assurance Workflow

**As a** content lead managing translations across 10 languages,
**I want** a repeatable QA workflow with a brand glossary and style guide,
**So that** every translation is consistent, on-brand, and high quality — and new languages or content can be added efficiently.

### Acceptance Criteria

- [ ] Brand glossary document created with approved translations for key terms across all 10 locales:
  - Product name: "LumenLingo" (never translated)
  - Company name: "LumenShore" (never translated)
  - Feature names: "Flashcards", "Soundscapes", "Breathing Orbs", "Quantum Flow", "Nebula Drift"
  - Tier names: "Free", "Pro", "Elite", "Royal"
  - UI terms: "Download", "Get Started", "Language Pair", "Practice Session"
- [ ] Translation style guide per language covering:
  - Formal vs informal tone (e.g. French `vous` vs `tu`, German `Sie` vs `du`, Spanish `usted` vs `tú`)
  - Date format conventions
  - Number formatting (decimal separator, thousands separator)
  - Currency display preferences
  - Honourifics and politeness conventions (particularly JA, ZH, AR)
- [ ] Automated translation key completeness check: CI script that verifies every key in `en.json` exists in all other locale `.json` files
- [ ] Manual review checklist template for native-speaker reviewers
- [ ] At least one native-speaker review completed for each of the 9 non-English locales
- [ ] All review feedback incorporated and verified

### Subtasks

- [ ] 15.10.1 — Create `TRANSLATION_GLOSSARY.md` with brand terms and their approved translations (or non-translation) in all 10 locales
- [ ] 15.10.2 — Create `TRANSLATION_STYLE_GUIDE.md` with per-language tone, formatting, and cultural guidelines
- [ ] 15.10.3 — Write CI script (`scripts/check-translations.ts`) that compares all locale JSON files against `en.json` and fails if any keys are missing
- [ ] 15.10.4 — Add CI script to the PR check pipeline
- [ ] 15.10.5 — Create native-speaker review checklist template (Google Doc or Markdown)
- [ ] 15.10.6 — Commission and complete native-speaker review for FR, DE, ES, PT
- [ ] 15.10.7 — Commission and complete native-speaker review for JA, ZH
- [ ] 15.10.8 — Commission and complete native-speaker review for PL, AR, UK
- [ ] 15.10.9 — Incorporate all reviewer feedback into locale files and blog posts
- [ ] 15.10.10 — Final automated completeness check — all 10 locales pass with 0 missing keys

---

## Story 15.11 — Locale-Aware Content Adaptation & Cultural Nuance

**As a** visitor from any supported locale,
**I want** content that feels culturally adapted — not just mechanically translated,
**So that** the website resonates with me as if it were designed for my market.

### Acceptance Criteria

- [ ] Pricing page displays locale-appropriate currency symbols or conventions:
  - USD for en, es (LATAM default), pt
  - EUR for fr, de
  - JPY for ja
  - CNY for zh
  - PLN for pl
  - UAH for uk
  - Currency display is informational context only (actual purchase via App Store which handles local currency)
- [ ] Trust statistics on homepage adapted where appropriate (e.g. "Trusted by learners in 50+ countries" has locale-specific phrasing)
- [ ] Blog post examples and cultural references adapted per locale:
  - Spanish learning tips reference relatable scenarios for each source-language audience
  - Japanese learning posts reference culturally specific motivations (anime, business, travel)
- [ ] Download page CTA language matches locale conventions (e.g. Japanese: polite/formal request form)
- [ ] Contact page includes locale-relevant support language information
- [ ] Feature names that are puns or wordplay in English are adapted (not literally translated) for each locale

### Subtasks

- [ ] 15.11.1 — Add locale-aware currency display helper to `src/lib/locale.ts`
- [ ] 15.11.2 — Update Pricing page to show locale-appropriate currency context
- [ ] 15.11.3 — Review and adapt homepage trust stats and social proof for each locale
- [ ] 15.11.4 — Review blog posts for culturally insensitive or irrelevant examples per locale; adapt as needed
- [ ] 15.11.5 — Adapt Download page CTA copy to match locale-specific tone and conventions
- [ ] 15.11.6 — Add locale-relevant support language info to Contact page message files
- [ ] 15.11.7 — Review all feature name translations for natural fluency (avoid literal translations of creative names)

---

## Story 15.12 — End-to-End Internationalisation Acceptance Testing

**As a** QA engineer verifying the i18n rollout,
**I want** comprehensive automated and manual tests covering every localised surface,
**So that** we can confidently release knowing that no locale has broken layouts, missing text, or degraded functionality.

### Acceptance Criteria

- [ ] Playwright E2E test suite covers all 10 locales for:
  - [ ] Homepage loads with correct locale content (hero heading, description, CTA text)
  - [ ] Navigation labels match locale
  - [ ] Language switcher cycles through all 10 locales correctly
  - [ ] Features page renders locale content without English fallback
  - [ ] Pricing page renders locale content with correct currency context
  - [ ] Blog index shows locale-appropriate posts
  - [ ] Individual blog post renders in the correct language
  - [ ] Privacy and Terms pages render locale content
  - [ ] 404 page shows locale-appropriate message
  - [ ] Arabic pages render in RTL layout (`dir="rtl"` on `<html>`)
- [ ] Visual regression tests (Playwright screenshots) for all 10 locales × 5 key pages = 50 baseline screenshots
- [ ] No console errors or warnings on any localised page
- [ ] Performance budget maintained: LCP ≤ 2.5 s for all locales (CJK fonts do not regress performance)
- [ ] All automated tests pass in CI before merge

### Subtasks

- [ ] 15.12.1 — Create Playwright test helper that parameterises tests across all 10 locales
- [ ] 15.12.2 — Write E2E test: homepage content verification per locale
- [ ] 15.12.3 — Write E2E test: navigation and language switcher per locale
- [ ] 15.12.4 — Write E2E test: features page content per locale
- [ ] 15.12.5 — Write E2E test: pricing page content and currency per locale
- [ ] 15.12.6 — Write E2E test: blog index and post rendering per locale
- [ ] 15.12.7 — Write E2E test: legal pages per locale
- [ ] 15.12.8 — Write E2E test: 404 page per locale
- [ ] 15.12.9 — Write E2E test: Arabic RTL layout assertions (element positioning, `dir` attribute)
- [ ] 15.12.10 — Generate visual regression baselines for all 10 locales × 5 pages
- [ ] 15.12.11 — Run Lighthouse performance audit per locale; verify LCP ≤ 2.5 s
- [ ] 15.12.12 — Integrate locale E2E tests into CI pipeline; block merge on failure

---

# Epic 16 — Post-Launch Iteration & Growth

> Continue improving the website after launch based on real user data,
> content performance, and conversion analytics.

## Story 16.1 — A/B Testing Infrastructure

**As a** product owner,
**I want** the ability to run A/B tests on key conversion elements,
**So that** I can data-drive decisions about copy, layout, and CTAs.

### Acceptance Criteria

- [ ] A/B testing framework integrated (Vercel Edge Config, LaunchDarkly, or PostHog)
- [ ] Tests can be created without code deployments (configuration-based)
- [ ] First test: Hero headline variants — test 3 different headlines for App Store click-through
- [ ] Second test: CTA button colour — violet vs. cyan vs. gradient for download conversion
- [ ] Test results tracked via analytics with statistical significance thresholds
- [ ] Winning variants automatically promoted after reaching significance
- [ ] No flicker: variant is determined server-side or via edge middleware (not client-side swap)

### Subtasks

- [ ] 16.1.1 — Evaluate and select A/B testing platform (Vercel Edge Config recommended for Vercel hosting)
- [ ] 16.1.2 — Integrate A/B testing SDK into the Next.js middleware or layout
- [ ] 16.1.3 — Create `@/lib/experiments.ts` with typed experiment definitions
- [ ] 16.1.4 — Set up hero headline experiment with 3 variants
- [ ] 16.1.5 — Set up CTA button colour experiment with 3 variants
- [ ] 16.1.6 — Connect experiment events to analytics for conversion tracking
- [ ] 16.1.7 — Create internal dashboard or use platform dashboard for experiment monitoring

---

## Story 16.2 — Content Calendar & Blog Growth

**As a** content strategist,
**I want** a sustainable content publishing cadence,
**So that** the blog consistently attracts organic traffic and builds topical authority.

### Acceptance Criteria

- [ ] Content calendar planned for 3 months post-launch (12 posts minimum)
- [ ] Publishing cadence: 1 post per week
- [ ] Content pillars targeted:
  - **Language Tips** (40%) — practical learning advice, grammar guides, vocabulary lists
  - **Learning Science** (25%) — research-backed insights, memory techniques, spacing algorithms
  - **Product Updates** (15%) — new features, version releases, behind-the-scenes
  - **Culture & Travel** (20%) — cultural context for languages, travel phrases, traditions
- [ ] Each post targets a specific long-tail keyword with 100–1,000 monthly search volume
- [ ] Internal linking strategy: every new post links to 2–3 existing posts
- [ ] Content refresh schedule: update top 5 posts quarterly with new data and keywords
- [ ] Social media sharing templates created for each post (Twitter, Instagram, LinkedIn)

### Subtasks

- [ ] 16.2.1 — Research and document 12-week content calendar with titles, keywords, and categories
- [ ] 16.2.2 — Create content brief template for each post (title, keyword, outline, target word count, CTAs)
- [ ] 16.2.3 — Write and publish weeks 1–4 blog posts
- [ ] 16.2.4 — Write and publish weeks 5–8 blog posts
- [ ] 16.2.5 — Write and publish weeks 9–12 blog posts
- [ ] 16.2.6 — Add internal links from new posts to existing content
- [ ] 16.2.7 — Create social sharing templates (Twitter, Instagram, LinkedIn) for each post
- [ ] 16.2.8 — Schedule quarterly content refresh: update top 5 posts with fresh data

---

## Story 16.3 — Conversion Funnel Optimisation

**As a** growth engineer,
**I want** to instrument and optimise the visitor → download conversion funnel,
**So that** website traffic efficiently converts to App Store installations.

### Acceptance Criteria

- [ ] Funnel stages defined and tracked:
  1. **Land** — visitor arrives on any page (page view)
  2. **Engage** — visitor scrolls past 50% of page or visits 2+ pages
  3. **Consider** — visitor views pricing page or features page
  4. **Click** — visitor clicks any App Store button
  5. **Download** — (tracked via Apple attribution, not website analytics)
- [ ] Funnel visualisation in analytics dashboard showing drop-off at each stage
- [ ] Heatmap analysis (Vercel Analytics or Hotjar) on homepage to identify attention patterns
- [ ] Exit intent popup on desktop: "Before you go..." with App Store CTA (shown once per session)
- [ ] Sticky mobile download bar: thin bottom bar with "Download LumenLingo" on mobile pages (dismissible)
- [ ] Conversion rate baselines established for the first 30 days

### Subtasks

- [ ] 16.3.1 — Define and implement funnel stage tracking events in analytics
- [ ] 16.3.2 — Configure funnel visualisation in analytics dashboard
- [ ] 16.3.3 — Enable heatmap tracking on homepage
- [ ] 16.3.4 — Create `<ExitIntentPopup>` component with session-scoped display logic
- [ ] 16.3.5 — Create `<MobileDownloadBar>` sticky component with dismiss and don't-show-again logic
- [ ] 16.3.6 — Establish conversion rate baselines after 30 days of data
- [ ] 16.3.7 — Document funnel metrics and optimisation opportunities in a monthly report

---

# Appendix A — File Structure

```
lumen-lingo-frontend/
├── public/
│   ├── .well-known/
│   │   └── apple-app-site-association
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-touch-icon.png
│   ├── manifest.json
│   ├── og-image.jpg
│   └── screenshots/
│       ├── flashcard.webp
│       ├── practice.webp
│       ├── soundscapes.webp
│       ├── settings.webp
│       ├── progress.webp
│       └── membership.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Root layout: fonts, theme, analytics
│   │   ├── page.tsx                    # Homepage
│   │   ├── not-found.tsx               # Custom 404
│   │   ├── error.tsx                   # Client error boundary
│   │   ├── global-error.tsx            # Root error boundary
│   │   ├── sitemap.ts                  # Dynamic sitemap
│   │   ├── robots.ts                   # Robots.txt
│   │   ├── features/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx                # Blog index
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx            # Blog post
│   │   │   ├── category/
│   │   │   │   └── [category]/
│   │   │   │       └── page.tsx
│   │   │   ├── tag/
│   │   │   │   └── [tag]/
│   │   │   │       └── page.tsx
│   │   │   └── feed.xml/
│   │   │       └── route.ts
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── terms/
│   │   │   └── page.tsx
│   │   ├── download/
│   │   │   └── page.tsx
│   │   ├── early-access/
│   │   │   └── page.tsx
│   │   ├── open/
│   │   │   └── route.ts                # Universal Link handler
│   │   ├── accessibility/
│   │   │   └── page.tsx
│   │   └── api/
│   │       ├── newsletter/
│   │       │   └── route.ts
│   │       └── waitlist/
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── GlassCard.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Heading.tsx
│   │   │   ├── Text.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   └── index.ts
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── PageTransition.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureShowcase.tsx
│   │   │   ├── ScreenshotGallery.tsx
│   │   │   ├── DifferentiatorSection.tsx
│   │   │   └── CTABanner.tsx
│   │   ├── features/
│   │   │   ├── FeatureSection.tsx
│   │   │   ├── FlashcardDemo.tsx
│   │   │   ├── LanguagePairGrid.tsx
│   │   │   └── AnimatedWalkthrough.tsx
│   │   ├── pricing/
│   │   │   ├── PricingCard.tsx
│   │   │   ├── FeatureComparisonTable.tsx
│   │   │   └── PricingFAQ.tsx
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostGrid.tsx
│   │   │   ├── BlogHero.tsx
│   │   │   ├── CategoryFilter.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── PostHeader.tsx
│   │   │   ├── MDXProse.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── ShareButtons.tsx
│   │   │   └── RelatedPosts.tsx
│   │   ├── contact/
│   │   │   └── FAQAccordion.tsx
│   │   ├── shared/
│   │   │   ├── AppStoreBadge.tsx
│   │   │   ├── QRCode.tsx
│   │   │   ├── IPhoneMockup.tsx
│   │   │   ├── DeviceFrame.tsx
│   │   │   ├── CountUp.tsx
│   │   │   ├── JsonLd.tsx
│   │   │   ├── NewsletterForm.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   ├── ExitIntentPopup.tsx
│   │   │   ├── MobileDownloadBar.tsx
│   │   │   └── NetworkStatus.tsx
│   │   └── motion/
│   │       ├── FadeIn.tsx
│   │       ├── StaggerChildren.tsx
│   │       ├── ParallaxLayer.tsx
│   │       ├── CountUp.tsx
│   │       ├── CosmicGradient.tsx
│   │       └── StarField.tsx
│   ├── content/
│   │   └── blog/
│   │       ├── why-immersive-learning-works.mdx
│   │       ├── spanish-tips-english-speakers.mdx
│   │       ├── soundscapes-enhance-retention.mdx
│   │       └── ...
│   ├── lib/
│   │   ├── blog.ts                     # Blog utility functions
│   │   ├── motion.ts                   # Shared animation variants
│   │   ├── analytics.ts                # Typed event tracking
│   │   ├── appStoreUrl.ts              # Campaign-tagged URLs
│   │   └── experiments.ts              # A/B test definitions
│   ├── messages/
│   │   ├── en.json
│   │   ├── es.json
│   │   ├── fr.json
│   │   └── ja.json
│   └── styles/
│       └── globals.css                 # CSS custom properties, base styles
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
├── DESIGN_TOKENS.md
└── README.md
```

---

# Appendix B — Epic Dependency Graph

```
Epic 1 (Foundation)
  ├── Epic 2 (Homepage)
  │     └── Epic 11 (Visual Polish)
  ├── Epic 3 (Features & Pricing)
  ├── Epic 4 (Blog Engine)
  │     └── Epic 16.2 (Blog Growth)
  ├── Epic 5 (FAQ & Legal)
  ├── Epic 6 (SEO & Performance)
  ├── Epic 7 (Responsive & Accessibility)
  ├── Epic 8 (App Store Integration)
  ├── Epic 9 (Email & Community)
  ├── Epic 10 (Interactive Demos)
  ├── Epic 12 (Error Handling)
  ├── Epic 13 (i18n)
  ├── Epic 14 (Testing & Launch)
  │     └── Epic 16 (Post-Launch Growth)
  └── Epic 15 (Full Content i18n)
        ├── depends on: Epic 13 (i18n Architecture)
        └── depends on: Epic 4 (Blog Engine)
```

**Recommended build order:**

1. **Epic 1** — Foundation (must be first)
2. **Epic 2** — Homepage (flagship page)
3. **Epic 6** — SEO (wire in early for all subsequent pages)
4. **Epic 3** — Features & Pricing
5. **Epic 4** — Blog Engine
6. **Epic 5** — FAQ & Legal
7. **Epic 8** — App Store Integration
8. **Epic 11** — Visual Polish (refinement pass)
9. **Epic 9** — Email & Community
10. **Epic 10** — Interactive Demos
11. **Epic 12** — Error Handling
12. **Epic 7** — Responsive & Accessibility (QA pass)
13. **Epic 14** — Testing & Launch
14. **Epic 13** — i18n (post-launch or v1.1)
15. **Epic 15** — Full Content i18n (after Epic 13)
16. **Epic 16** — Post-Launch Growth (ongoing)

---

# Appendix C — Design Reference Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-void` | `#0a0a0f` | Page background, deepest layer |
| `bg-surface` | `#111118` | Elevated surfaces, modal backgrounds |
| `bg-card` | `#1a1a24` | Card backgrounds, glass base |
| `text-primary` | `#f4f4f5` | Headings, primary body text |
| `text-secondary` | `#a1a1aa` | Descriptions, metadata |
| `text-muted` | `#71717a` | Captions, timestamps |
| `accent-violet` | `#8b5cf6` | Primary CTAs, active states, glow |
| `accent-violet-hover` | `#7c3aed` | Button hover, link hover |
| `accent-violet-active` | `#6d28d9` | Button press, active links |
| `accent-cyan` | `#06b6d4` | Secondary accent, badges, highlights |
| `accent-cyan-hover` | `#0891b2` | Secondary hover states |
| `accent-amber` | `#f59e0b` | Stars, ratings, premium badges |
| `glass-fill` | `rgba(255,255,255,0.04)` | Glass card background |
| `glass-border` | `rgba(255,255,255,0.08)` | Glass card border |
| `glass-glow` | `rgba(139,92,246,0.15)` | Violet glow on glass borders |

---

*LumenLingo — by LumenShore. Illuminating the path to language mastery.*

