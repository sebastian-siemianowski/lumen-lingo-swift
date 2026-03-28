# LumenLingo -- 24-Month Roadmap

> Strategic plan for evolving LumenLingo from a polished single-platform language-learning app
> into a world-class, scalable ecosystem. Covers user-facing features, architecture,
> backend services, and infrastructure.

**Created:** 27 March 2026

---

## Table of Contents

1. [Current State Assessment](#1-current-state-assessment)
2. [Vision & Principles](#2-vision--principles)
3. [Ecosystem Architecture (Birds-Eye View)](#3-ecosystem-architecture-birds-eye-view)
4. [Phase 1 -- Foundation (Months 1-6)](#4-phase-1--foundation-months-1-6)
5. [Phase 2 -- Growth Engine (Months 7-12)](#5-phase-2--growth-engine-months-7-12)
6. [Phase 3 -- Social & Intelligence (Months 13-18)](#6-phase-3--social--intelligence-months-13-18)
7. [Phase 4 -- Ecosystem Maturity (Months 19-24)](#7-phase-4--ecosystem-maturity-months-19-24)
8. [Architecture Deep Dive](#8-architecture-deep-dive)
9. [Security & Compliance Roadmap](#9-security--compliance-roadmap)
10. [Key Performance Indicators](#10-key-performance-indicators)

---

## 1. Current State Assessment

### 1.1 iOS App (LumenLingo/)

| Area | Current State |
|---|---|
| **Architecture** | MVVM + SwiftUI + `@Observable` -- clean, well-factored |
| **Persistence** | SwiftData (local device only) |
| **Authentication** | Clerk SDK (behind feature flag), MockAuthService in dev |
| **Payments** | RevenueCat SDK -- 4 tiers (Free, Pro, Royal, Elite) |
| **Content** | Static JSON bundles in `Resources/Content/` -- 1 language pair (EN-ES) with 270 items |
| **Game Modes** | 3: Flashcards, Grammar (multiple choice), Word Builder (letter scramble) |
| **Languages** | 9 supported languages, 7 built-in pairs, beta pairs via SwiftData toggle |
| **Backgrounds** | 6 cosmic nebula presets, breathing orbs, quantum flow aurora -- stunning |
| **Audio** | Synthesized via AVAudioEngine (no recorded audio, no TTS) |
| **Sync** | MockSyncService only -- no cloud sync |
| **Offline** | Fully offline (all content bundled) |
| **Tests** | 8 test files covering core services (TierManager, RevenueCat, Auth, Progress) |
| **Environments** | 5 (Dev, QA, UAT, PreProd, Prod) with xcconfig per environment |
| **Monitoring** | PerformanceMonitor, SecurityAuditLogger, PrivacyAuditLogger services exist |

### 1.2 Frontend App (lumen-lingo-frontend/)

| Area | Current State |
|---|---|
| **Framework** | Next.js 16 + React 19 + TypeScript |
| **Styling** | Tailwind CSS 4 |
| **i18n** | next-intl -- 9 locales (en, pl, de, es, fr, ja, zh, ar, uk) |
| **Monitoring** | Sentry, Vercel Analytics, Vercel Speed Insights |
| **Content** | MDX blog, static legal/policy pages, pricing, demo, download |
| **Auth** | None (marketing site) |
| **Testing** | Vitest (unit), Playwright (E2E), axe-core (accessibility) |
| **Legal** | Privacy, Terms, EULA, Cookie Policy, DSAR, AI Transparency, DSA |
| **SEO** | sitemap.ts, robots.ts, dynamic OG images, JSON-LD |
| **Animations** | Framer Motion |

### 1.3 What's Missing

- **No backend** -- everything is client-side or static
- **No cloud sync** -- progress lost if device is reset
- **No social features** -- solitary learning experience
- **No spaced repetition algorithm** -- no SM-2 or similar
- **No speech/pronunciation** -- audio is synthesized tones, not TTS
- **Limited content** -- only 1 real language pair with 270 items
- **No content management** -- adding content requires app update
- **No analytics pipeline** -- learning effectiveness unmeasured
- **No API** -- iOS app cannot communicate with any server
- **No web app** -- frontend is marketing only, no in-browser learning

---

## 2. Vision & Principles

### 2.1 Product Vision

> LumenLingo becomes the most beautiful, effective, and beloved language-learning platform --
> where cosmic aesthetics meet cognitive science, creating an experience users are
> genuinely excited to return to every day.

### 2.2 Architecture Principles

1. **Offline-first** -- the app must work beautifully without internet; sync when available
2. **API-driven** -- Rails backend as the single source of truth for all platforms
3. **Content-as-data** -- all learning content served via API, cached locally, never hardcoded
4. **Privacy by design** -- minimal data collection, user-controlled, GDPR/CCPA native
5. **Progressive complexity** -- start simple, layer sophistication over time
6. **Test everything** -- every service has a protocol/interface; every feature has tests

---

## 3. Ecosystem Architecture (Birds-Eye View)

```
                            ┌─────────────────────────────┐
                            │      CDN / Edge Cache       │
                            │   (Cloudflare / Fastly)     │
                            └──────────┬──────────────────┘
                                       │
              ┌────────────────────────┼────────────────────────┐
              │                        │                        │
   ┌──────────▼──────────┐  ┌─────────▼──────────┐  ┌─────────▼──────────┐
   │   iOS App (Swift)   │  │  Web App (Next.js)  │  │  Marketing Site    │
   │   SwiftUI + MVVM    │  │  React 19 + Next 16 │  │  (Next.js SSG)     │
   │                     │  │  In-Browser Learning │  │  lumen-lingo-      │
   │  Local: SwiftData   │  │  IndexedDB cache     │  │  frontend/         │
   │  Sync: Background   │  │                      │  │                    │
   └──────────┬──────────┘  └─────────┬──────────┘  └────────────────────┘
              │                        │
              └────────────┬───────────┘
                           │ HTTPS / REST + WebSocket
                           ▼
              ┌────────────────────────────────┐
              │        API Gateway / LB        │
              │     (nginx / AWS ALB)          │
              └────────────┬───────────────────┘
                           │
              ┌────────────▼───────────────────┐
              │      Rails API (JSON:API)      │
              │                                │
              │  ┌──────────────────────────┐  │
              │  │ Auth     (Clerk webhook) │  │
              │  │ Content  (lessons, vocab)│  │
              │  │ Progress (XP, streaks)   │  │
              │  │ Social   (friends, feed) │  │
              │  │ Payments (RC webhook)    │  │
              │  │ Search   (Meilisearch)   │  │
              │  │ AI       (OpenAI proxy)  │  │
              │  │ Admin    (content CMS)   │  │
              │  └──────────────────────────┘  │
              │                                │
              │  Sidekiq (background jobs)     │
              │  ActionCable (WebSocket)       │
              └────────────┬───────────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
   ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
   │ PostgreSQL │    │   Redis   │    │    S3     │
   │  (primary) │    │  (cache,  │    │  (audio,  │
   │            │    │  queues,  │    │  images,  │
   │            │    │  sessions)│    │  exports) │
   └────────────┘    └───────────┘    └───────────┘
         │
   ┌─────▼──────────────────┐
   │  Read Replica(s)       │
   │  (reporting, search)   │
   └────────────────────────┘
```

### 3.1 Service Boundaries (Rails Engines / Modules)

| Module | Responsibility |
|---|---|
| `lumen_auth` | Clerk webhook receiver, session management, user profiles |
| `lumen_content` | Vocabulary, grammar, lessons, categories, language pairs, versioned content |
| `lumen_progress` | XP, levels, streaks, mastery scores, spaced repetition scheduling |
| `lumen_social` | Friends, leagues, activity feed, challenges |
| `lumen_payments` | RevenueCat webhook handler, tier sync, entitlements |
| `lumen_search` | Full-text search over content (Meilisearch or pg_trgm) |
| `lumen_ai` | AI tutor proxy, sentence generation, grammar explanations |
| `lumen_admin` | Content CMS, moderation tools, analytics dashboards |
| `lumen_notifications` | Push (APNs), email (Postmark), in-app notifications |

---

## 4. Phase 1 -- Foundation (Months 1-6)

> **Theme:** Build the backend. Ship cloud sync. Expand content. Delight with speech.

### Milestone 1.1 -- Rails API Bootstrap (Month 1-2)

**Goal:** Production-ready Rails 8 API serving content and accepting progress data.

**Architecture Work:**
- [ ] Initialize Rails 8 API-only app (`lumen-api/`)
- [ ] PostgreSQL with `pgcrypto` for UUIDs, `pg_trgm` for search
- [ ] Redis for ActionCable, Sidekiq, and API response caching
- [ ] Devise-less auth: Clerk webhook verification (`lumen_auth` module)
- [ ] JSON:API serialization via `jsonapi-serializer` gem
- [ ] API versioning: `/api/v1/` namespace from day one
- [ ] Rate limiting with `rack-attack` (per-user, per-IP)
- [ ] Request signing for iOS client (HMAC-SHA256 with rotating keys)
- [ ] CI/CD: GitHub Actions -- RSpec, Rubocop, Brakeman, database migrations
- [ ] Deployment: Docker containers on AWS ECS (or Render for early stage)

**Database Schema (Core Tables):**
```
users
  - id (uuid, PK)
  - clerk_id (string, unique, indexed)
  - email (string, encrypted at rest)
  - display_name (string)
  - avatar_url (string)
  - tier (enum: free/pro/royal/elite)
  - created_at, updated_at

language_pairs
  - id (uuid, PK)
  - source_language (string)
  - target_language (string)
  - status (enum: stable/beta/coming_soon)
  - content_version (integer)

vocabulary_items
  - id (uuid, PK)
  - language_pair_id (FK)
  - category_key (string)
  - category_name (string)
  - word (string)
  - translation (string)
  - pronunciation_ipa (string)
  - audio_url (string, nullable)
  - difficulty (enum: beginner/intermediate/advanced)
  - metadata (jsonb)

grammar_questions
  - id (uuid, PK)
  - language_pair_id (FK)
  - category_key, question, options (jsonb), correct_answer
  - explanation (text)
  - difficulty (enum)

user_progress
  - id (uuid, PK)
  - user_id (FK)
  - content_type (string -- polymorphic)
  - content_id (uuid)
  - language_pair_id (FK)
  - mastery_score (float, 0.0-1.0)
  - correct_count, incorrect_count (integer)
  - next_review_at (datetime -- spaced repetition)
  - last_reviewed_at (datetime)
  - easiness_factor (float -- SM-2)

streaks
  - user_id (FK)
  - current_streak (integer)
  - longest_streak (integer)
  - last_activity_date (date)
  - freeze_count (integer)

daily_xp
  - user_id (FK)
  - date (date)
  - xp_earned (integer)
  - sessions_completed (integer)
  - practice_seconds (integer)
```

### Milestone 1.2 -- Cloud Sync (Month 2-3)

**Goal:** Users never lose progress. Seamless multi-device experience.

**User Delight:**
- Progress syncs silently in the background
- Open app on new device, everything is there
- Conflict resolution: server wins for XP/streaks, merge for mastery scores
- Offline queue: all actions queued locally, synced when online

**Architecture Work:**
- [ ] iOS `SyncService` real implementation replacing `MockSyncService`
- [ ] Background sync via `BGTaskScheduler` (iOS background tasks)
- [ ] Optimistic local writes + server reconciliation
- [ ] Sync protocol: client sends delta (changes since last sync timestamp)
- [ ] Server responds with merged state + server-side deltas
- [ ] Conflict resolution strategy per data type
- [ ] `NetworkMonitor` integration: queue when offline, flush when online
- [ ] Sync status indicator in Profile tab (last synced timestamp)

### Milestone 1.3 -- Content Expansion & CMS (Month 3-4)

**Goal:** 10x content. Admin panel for content management without app updates.

**User Delight:**
- 5 new language pairs at launch (EN-FR, EN-DE, EN-IT, EN-PT, EN-PL)
- Each pair: 500+ vocabulary items, 200+ grammar questions, 300+ word builder words
- New categories: Travel, Business, Food & Dining, Healthcare, Technology
- Content updates pushed without App Store review

**Architecture Work:**
- [ ] Rails Admin engine (`lumen_admin`) with Hotwire/Turbo dashboard
- [ ] Content authoring: create/edit/review/publish workflow
- [ ] Content versioning: each language pair has a version number
- [ ] iOS app checks content version on launch, downloads delta if newer
- [ ] Content stored as versioned JSON blobs in S3, cached on CDN
- [ ] Seed scripts to migrate existing `Resources/Content/` JSON into database
- [ ] Content review queue: native speakers can suggest corrections

### Milestone 1.4 -- Speech & Pronunciation (Month 4-5)

**Goal:** Learners hear and speak the language. This is the feature that makes them fall in love.

**User Delight:**
- Tap any word to hear native-quality pronunciation (neural TTS)
- Pronunciation practice mode: speak the word, get instant feedback
- Visual waveform comparison (your attempt vs. native)
- Streak bonuses for pronunciation sessions
- Works offline for downloaded voices

**Architecture Work:**
- [ ] iOS: AVSpeechSynthesizer upgrade to Neural Voices (iOS 17+)
- [ ] Backend: OpenAI Whisper API for speech-to-text scoring
- [ ] Pronunciation scoring: phoneme-level comparison, 0-100 score
- [ ] Pre-generated TTS audio for all vocabulary items (S3 + CDN)
- [ ] iOS `SpeechService` with `Speech` framework for on-device recognition
- [ ] Fallback chain: on-device recognition -> API recognition
- [ ] Download packs: user can download voice packs for offline use
- [ ] New game mode: "Say It Right" -- pronunciation challenge rounds

### Milestone 1.5 -- Spaced Repetition Engine (Month 5-6)

**Goal:** Scientifically optimal review scheduling. Users retain more with less effort.

**User Delight:**
- Daily review deck curated by the algorithm
- "Due for review" badges on categories
- Mastery rings that fill as knowledge solidifies
- Smart session recommendations: "You're about to forget 12 words -- review now?"
- Learning statistics: retention rate, mastery velocity

**Architecture Work:**
- [ ] SM-2 algorithm implementation in `SpacedRepetitionService`
- [ ] Per-item scheduling: each vocabulary/grammar item has its own review schedule
- [ ] Server-side scheduling with sync to iOS
- [ ] `SessionEngine` upgrade: factor in spaced repetition due items
- [ ] New `ReviewDeckViewModel` for the daily review experience
- [ ] Backend `lumen_progress` module: compute next_review_at on grade submission
- [ ] Analytics: track retention curves, optimal review intervals per user

### Phase 1 Summary

| Metric | Before | After Phase 1 |
|---|---|---|
| Language pairs | 1 | 6 |
| Total content items | 270 | 6,000+ |
| Cloud sync | None | Full bidirectional |
| Backend | None | Rails 8 API |
| Speech | Tones only | Neural TTS + recognition |
| Review algorithm | Random | SM-2 spaced repetition |
| Offline capability | Full (hardcoded) | Full (cached + downloadable) |

---

## 5. Phase 2 -- Growth Engine (Months 7-12)

> **Theme:** Web app launch. Social features. AI tutor. Gamification that creates habits.

### Milestone 2.1 -- Web App (Month 7-8)

**Goal:** Learn in the browser. Same beautiful experience. Same progress.

**User Delight:**
- Full learning experience at app.lumenlingo.com
- Cosmic backgrounds rendered with WebGL / Three.js
- Keyboard shortcuts for power users (1-4 for multiple choice, Enter to flip cards)
- Responsive: works on desktop, tablet, mobile browser
- Progress seamlessly syncs between web and iOS

**Architecture Work:**
- [ ] New Next.js app or route group in existing `lumen-lingo-frontend/`
- [ ] Shared component library between marketing site and web app
- [ ] Auth: Clerk.js for web, shared user identity with iOS
- [ ] API client: typed fetch wrapper over Rails JSON:API
- [ ] IndexedDB for offline-capable web app (via `idb` library)
- [ ] Service worker for offline mode and push notifications
- [ ] WebGL cosmic backgrounds (port Metal shaders to GLSL)
- [ ] PWA manifest for "Add to Home Screen" experience
- [ ] Same 3 game modes: Flashcards, Grammar, Word Builder
- [ ] Web-specific: typing mode for Word Builder (keyboard input vs drag)

### Milestone 2.2 -- Social & Community (Month 8-10)

**Goal:** Learning together is more fun. Friends, leagues, and friendly competition.

**User Delight:**
- Add friends by username or share link
- Weekly XP leaderboards (groups of 30, Duolingo-style leagues)
- Challenge a friend: "Beat my score on Spanish Travel Flashcards"
- Activity feed: see friends' achievements, streaks, level-ups
- Animated celebrations when friends complete milestones
- Study groups for classroom settings

**Architecture Work:**
- [ ] `lumen_social` Rails module: friendships, leagues, challenges
- [ ] Database: `friendships`, `leagues`, `league_memberships`, `challenges` tables
- [ ] ActionCable (WebSocket) for real-time activity feed updates
- [ ] League system: weekly reset, promotion/demotion based on XP
- [ ] Push notifications via APNs (iOS) and Web Push (browser)
- [ ] `lumen_notifications` module: notification templates, delivery tracking
- [ ] iOS: `SocialService`, `LeagueViewModel`, `FriendsListView`
- [ ] Privacy controls: profile visibility, activity sharing toggles
- [ ] Rate limiting on social actions to prevent spam
- [ ] Block/report functionality with moderation queue

### Milestone 2.3 -- AI Tutor (Month 9-11)

**Goal:** A personal language tutor available 24/7. The feature that makes users say "wow."

**User Delight:**
- "Ask Lumen" button: conversational AI tutor in target language
- Grammar explanations tailored to your mistakes
- "Why is this wrong?" button on incorrect answers with AI explanation
- Conversation practice: open-ended chat in target language
- AI-generated sentences using vocabulary the user is learning
- Difficulty auto-adjusts to user's level

**Architecture Work:**
- [ ] `lumen_ai` Rails module: proxies requests to OpenAI API
- [ ] Conversation context: user's recent mistakes, current level, vocabulary
- [ ] System prompts crafted per language pair and proficiency level
- [ ] Token budgeting: free tier = 20 AI interactions/day, Pro = 100, Elite = unlimited
- [ ] Response caching: common questions cached (Redis) to reduce API costs
- [ ] Streaming responses via ActionCable for real-time feel
- [ ] iOS: `AITutorView`, `ChatBubbleView`, `AITutorService`
- [ ] Content moderation: filter inappropriate AI responses
- [ ] Cost monitoring: per-user token tracking, alerts on anomalies
- [ ] Fallback: pre-written explanations if AI service is down

### Milestone 2.4 -- Advanced Gamification (Month 10-12)

**Goal:** Habits so strong users feel withdrawal if they skip a day.

**User Delight:**
- Achievement system: 50+ achievements with cosmic-themed badges
- Streak shields: protect streak with earned or purchased shields
- Daily quests: "Complete 3 Grammar sessions" / "Learn 20 new words"
- Weekly challenges with special rewards
- Level system with prestige ranks (Nebula I, Galaxy I, Universe I...)
- Animated cosmic particles burst on achievements
- Profile showcase: display favorite badges, stats, learning journey

**Architecture Work:**
- [ ] `achievements` table: type, criteria (JSON), tier_required, badge_asset_url
- [ ] `user_achievements` table: user_id, achievement_id, unlocked_at
- [ ] `quests` and `user_quests` tables for daily/weekly challenges
- [ ] Achievement evaluation engine: runs on progress submission
- [ ] Badge assets: designed cosmic-themed SVGs, stored on CDN
- [ ] iOS: `AchievementService`, `AchievementToastView`, `ProfileBadgeGrid`
- [ ] Push notification for achievement unlocks and streak warnings
- [ ] Streak freeze: deduct from inventory, extend grace period

### Phase 2 Summary

| Metric | After Phase 1 | After Phase 2 |
|---|---|---|
| Platforms | iOS | iOS + Web |
| Learning modes | 3 | 4 (+ AI Conversation) |
| Social features | None | Friends, Leagues, Challenges |
| AI capabilities | None | Tutor, Explanations, Chat |
| Achievements | None | 50+ badges |
| Daily engagement hooks | Streak only | Streak + Quests + Leagues |

---

## 6. Phase 3 -- Social & Intelligence (Months 13-18)

> **Theme:** Adaptive learning. Rich media. Marketplace. Platform sophistication.

### Milestone 3.1 -- Adaptive Learning Engine (Month 13-14)

**Goal:** The app understands each learner deeply and personalizes everything.

**User Delight:**
- "Your learning path" -- a visual journey map unique to each user
- Difficulty auto-adjusts: too easy items level up, struggled items get reinforcement
- Learning style detection: visual learners get more imagery, audio learners get more speech
- Predicted mastery timelines: "At your pace, you'll reach B1 Spanish in 4 months"
- Weak area identification: "Focus on verb conjugations -- they're holding you back"

**Architecture Work:**
- [ ] `AdaptiveLearningEngine` service (Rails + Python sidecar for ML)
- [ ] User learning profile: preferred modality, error patterns, pace metrics
- [ ] Item difficulty calibration via Item Response Theory (IRT)
- [ ] Path generation: DAG of learning objectives, topologically sorted
- [ ] A/B testing framework for learning algorithm variations
- [ ] CEFR-aligned proficiency estimation (A1 through C2)
- [ ] iOS: `LearningPathView`, animated journey with milestones
- [ ] Backend: nightly batch job to recalculate user profiles and paths

### Milestone 3.2 -- Rich Media Content (Month 14-16)

**Goal:** Learning feels alive with images, audio stories, and video clips.

**User Delight:**
- Vocabulary cards with beautiful contextual images
- Short audio stories in target language (graded readers)
- Video clips with interactive subtitles (tap to translate)
- Cultural notes: "In Spain, dinner is at 9pm" -- with illustrations
- Mnemonics with AI-generated images for hard-to-remember words

**Architecture Work:**
- [ ] `media_assets` table: type (image/audio/video), url, language_pair_id, metadata
- [ ] S3 storage with CloudFront CDN for global low-latency delivery
- [ ] Image generation pipeline: DALL-E for vocabulary illustrations
- [ ] Audio story recording pipeline: professional narrators + AI TTS
- [ ] Video processing: transcode to HLS for adaptive bitrate streaming
- [ ] iOS: `StoryModeView`, `VideoPlayerView` with interactive subtitles
- [ ] Download manager: selective offline content packs
- [ ] Content size budgets: track storage usage per user

### Milestone 3.3 -- Content Marketplace & Community Contributions (Month 15-17)

**Goal:** The community powers content growth. Native speakers create and curate.

**User Delight:**
- User-generated vocabulary lists (e.g., "Medical Spanish for Nurses")
- Community-rated content: upvote/downvote quality
- Top contributors earn "Linguist" badges and profile flair
- Study packs created by teachers for classroom use
- Import/export vocabulary lists (CSV, Anki format)

**Architecture Work:**
- [ ] `community_content` table: author_id, language_pair_id, type, items (jsonb), status
- [ ] Moderation pipeline: auto-flag with AI, human review queue
- [ ] Rating system: Wilson score ranking for content quality
- [ ] Content fork/remix: build on existing community content
- [ ] Export engine: CSV, Anki `.apkg`, JSON formats
- [ ] iOS: `CommunityBrowserView`, `ContentCreatorView`
- [ ] Revenue share model for top content creators (Elite tier perk)
- [ ] Spam detection: rate limiting, content fingerprinting, report system

### Milestone 3.4 -- Advanced Analytics & Insights (Month 16-18)

**Goal:** Users understand their learning deeply. Data-driven motivation.

**User Delight:**
- Weekly learning report delivered via push notification
- Heat map of activity (GitHub-contribution-style grid)
- Vocabulary growth curve visualization
- Time-to-mastery predictions per category
- Comparison with anonymized cohort: "You're in the top 15% of Spanish learners"
- Exportable learning report (PDF) for academic credit or CV

**Architecture Work:**
- [ ] `lumen_analytics` Rails module with materialized views for efficiency
- [ ] Event-sourced learning events: every interaction logged
- [ ] Nightly aggregation jobs: compute weekly/monthly rollups
- [ ] Cohort analysis: segment by tier, language pair, signup date
- [ ] iOS: `InsightsView` with interactive charts (Swift Charts)
- [ ] PDF report generation via Rails (Prawn gem) or Puppeteer
- [ ] Privacy: all analytics anonymized for cohort comparisons
- [ ] Data retention policy: raw events for 90 days, aggregates forever

### Phase 3 Summary

| Metric | After Phase 2 | After Phase 3 |
|---|---|---|
| Learning algorithm | SM-2 | Adaptive (SM-2 + IRT + ML) |
| Content types | Text + Audio | Text + Audio + Images + Video + Stories |
| Content creation | Admin only | Admin + Community marketplace |
| Analytics | Basic stats | Deep insights, cohort analysis, PDF reports |
| Proficiency tracking | XP-based | CEFR-aligned (A1-C2) |

---

## 7. Phase 4 -- Ecosystem Maturity (Months 19-24)

> **Theme:** Platform expansion. Enterprise. API ecosystem. World-class reliability.

### Milestone 4.1 -- Android App (Month 19-20)

**Goal:** Reach the other 70% of the smartphone market.

**User Delight:**
- Native Android app with Material You design + cosmic theme adaptation
- Feature parity with iOS: all game modes, sync, AI tutor, social
- Widget for daily streak and quick review
- WearOS companion: vocabulary flashcards on the wrist

**Architecture Work:**
- [ ] Kotlin Multiplatform or native Kotlin + Jetpack Compose
- [ ] SharedKMP module for business logic (spaced repetition, sync protocol)
- [ ] Same Rails API -- zero backend changes needed
- [ ] Google Play billing integration (parallel to RevenueCat)
- [ ] Firebase Cloud Messaging for push notifications
- [ ] Android-specific: custom Compose shaders for cosmic backgrounds
- [ ] CI/CD: GitHub Actions with Gradle, detekt, instrumented tests
- [ ] Beta program via Google Play internal testing track

### Milestone 4.2 -- Enterprise & Education (Month 20-22)

**Goal:** Schools and companies pay for LumenLingo. B2B revenue stream.

**User Delight:**
- Teacher dashboard: assign content, track student progress, grade
- Classroom mode: teacher-paced sessions, live quiz competition
- Organization accounts with SSO (SAML, OIDC)
- Custom vocabulary lists uploaded by teachers
- Student progress reports for parents
- Certificates of completion per CEFR level

**Architecture Work:**
- [ ] `lumen_enterprise` Rails module: organizations, classrooms, roles
- [ ] Multi-tenancy: organization-scoped data with row-level security
- [ ] SSO integration: OmniAuth strategies for Google Workspace, Microsoft Entra
- [ ] Teacher CMS: shared admin with extended permissions
- [ ] Reporting API: aggregate class performance, at-risk student detection
- [ ] Bulk licensing: Stripe Billing for B2B with invoicing
- [ ] LTI integration for LMS platforms (Canvas, Moodle, Blackboard)
- [ ] FERPA and COPPA compliance for US education market
- [ ] Data residency options: EU-only or US-only deployment

### Milestone 4.3 -- Platform API & Integrations (Month 21-23)

**Goal:** LumenLingo becomes a platform. Third parties build on top of it.

**User Delight:**
- Integrate LumenLingo vocabulary review into Notion, Obsidian, Anki
- Siri/Shortcuts integration: "Hey Siri, quiz me on Spanish verbs"
- Apple Watch app: quick 2-minute review sessions
- Browser extension: translate + save words while browsing
- Slack/Teams bot: daily vocabulary in team channels

**Architecture Work:**
- [ ] Public REST API with OAuth2 (Doorkeeper gem) for third-party access
- [ ] API documentation: OpenAPI 3.1 spec, hosted on Redocly
- [ ] Webhook system: events pushed to third-party endpoints
- [ ] Rate limiting tiers: free (100 req/day), developer (10k), enterprise (100k)
- [ ] iOS: SiriKit intents for vocabulary quiz, App Intents for Shortcuts
- [ ] watchOS app: `LumenLingoWatch/` target, SwiftUI, complication for streak
- [ ] Browser extension: Chrome + Firefox, content script for word selection
- [ ] Slack/Teams integration: incoming webhook + slash commands
- [ ] Developer portal: API key management, usage dashboard, sandbox environment

### Milestone 4.4 -- Reliability & Scale (Month 22-24)

**Goal:** 99.9% uptime. Sub-200ms API responses. Handle 1M+ daily active users.

**Architecture Work:**
- [ ] Horizontal scaling: Rails on Kubernetes (EKS) with HPA
- [ ] Database: PostgreSQL with Citus for horizontal sharding (or read replicas + pgbouncer)
- [ ] Caching strategy: Russian doll caching, CDN for static content, Redis for hot data
- [ ] Background jobs: Sidekiq with dedicated queues per priority
- [ ] Observability stack: Datadog or Grafana Cloud (metrics, logs, traces)
- [ ] Distributed tracing: OpenTelemetry instrumentation across all services
- [ ] Error budget: SLOs defined per endpoint, alerting on burn rate
- [ ] Load testing: k6 scripts simulating peak traffic patterns
- [ ] Database: automated backups, point-in-time recovery, failover
- [ ] Security: annual penetration test, bug bounty program
- [ ] Disaster recovery: multi-AZ deployment, tested failover procedures
- [ ] CDN: Cloudflare with custom cache rules, DDoS protection
- [ ] API: circuit breakers for external dependencies (OpenAI, Clerk, RevenueCat)
- [ ] Zero-downtime deployments: rolling updates, database migrations with `strong_migrations`

### Phase 4 Summary

| Metric | After Phase 3 | After Phase 4 |
|---|---|---|
| Platforms | iOS + Web | iOS + Android + Web + watchOS + Extensions |
| Revenue streams | B2C subscriptions | B2C + B2B + API licensing |
| Uptime target | Best effort | 99.9% SLA |
| API | Internal only | Public platform API |
| Education | Individual | Individual + Classroom + Enterprise |
| Scale target | 100K users | 1M+ DAU |

---

## 8. Architecture Deep Dive

### 8.1 Rails API Design Conventions

```
lumen-api/
  app/
    controllers/
      api/v1/
        vocabulary_items_controller.rb
        grammar_questions_controller.rb
        progress_controller.rb
        sync_controller.rb
        social/
          friendships_controller.rb
          leagues_controller.rb
    models/
      user.rb
      vocabulary_item.rb
      grammar_question.rb
      user_progress.rb
      friendship.rb
      league.rb
    serializers/
      vocabulary_item_serializer.rb      # jsonapi-serializer
    services/
      spaced_repetition_service.rb
      sync_resolution_service.rb
      achievement_evaluator.rb
      ai_tutor_service.rb
    jobs/
      nightly_analytics_job.rb
      content_sync_job.rb
      league_reset_job.rb
    channels/
      activity_feed_channel.rb           # ActionCable
      ai_tutor_channel.rb
  config/
    routes.rb
    database.yml
    redis.yml
    initializers/
      rack_attack.rb
      clerk_webhook.rb
      sentry.rb
  db/
    migrate/
    seeds/
  spec/
    requests/
    models/
    services/
    factories/
```

### 8.2 iOS Architecture Evolution

**Current (Phase 0):**
```
View -> ViewModel (@Observable) -> Service (singleton) -> SwiftData / JSON
```

**Phase 1-2 (with backend):**
```
View -> ViewModel (@Observable) -> Service (protocol) -> APIClient -> Rails API
                                                      -> SwiftData (cache/offline)
                                                      -> SyncEngine (background)
```

**Phase 3-4 (mature):**
```
View -> ViewModel (@Observable) -> Repository (protocol)
                                     |
                            ┌────────┼────────┐
                            |        |        |
                       APIClient  SwiftData  Cache
                            |
                       SyncEngine <-> BackgroundTasks
```

New iOS services to build across phases:
- `APIClient` -- typed HTTP client with Codable request/response
- `SyncEngine` -- delta sync with conflict resolution
- `Repository<T>` -- generic data access abstracting local vs remote
- `SpeechService` -- TTS playback + speech recognition
- `AITutorService` -- streaming chat with the AI backend
- `SocialService` -- friends, leagues, challenges
- `AchievementService` -- local evaluation + server sync
- `DownloadManager` -- background content downloads (audio, images, video)
- `NotificationService` -- push notification handling + local notifications
- `DeepLinkRouter` -- universal links for challenges, shared content

### 8.3 Authentication Flow (Clerk-Based)

```
iOS App                        Rails API                     Clerk
   |                              |                            |
   |-- Clerk SDK sign-in -------->|                            |
   |                              |                            |
   |<-- JWT (short-lived) --------|                            |
   |                              |                            |
   |-- API request + JWT -------->|                            |
   |                              |-- Verify JWT (JWKS) ----->|
   |                              |<-- Valid / user claims ----|
   |                              |                            |
   |<-- JSON:API response --------|                            |
   |                              |                            |
   |                              |<-- Webhook: user.created --|
   |                              |    -> create local User    |
   |                              |    -> sync tier from RC    |
```

### 8.4 Data Sync Protocol

```
Client                            Server
   |                                 |
   |-- POST /api/v1/sync            |
   |   { last_sync_at: timestamp,   |
   |     changes: [                  |
   |       { type: "progress",      |
   |         action: "upsert",      |
   |         data: {...} }           |
   |     ] }                         |
   |                                 |
   |                    Merge changes, resolve conflicts
   |                                 |
   |<-- 200 OK                      |
   |   { server_timestamp: ...,     |
   |     accepted: [...],           |
   |     rejected: [...],           |
   |     server_changes: [          |
   |       (changes since client's  |
   |        last_sync_at)           |
   |     ] }                         |
   |                                 |
   Apply server_changes locally     |
   Update last_sync_at              |
```

---

## 9. Security & Compliance Roadmap

| Month | Security Milestone |
|---|---|
| 1 | API authentication (Clerk JWT verification), HTTPS everywhere |
| 2 | Rate limiting (rack-attack), request signing, input validation |
| 3 | Encryption at rest (AWS KMS for PII), GDPR data export via API |
| 4 | Automated security scanning (Brakeman, bundler-audit) in CI |
| 6 | SOC 2 Type I preparation, security documentation |
| 9 | First penetration test (third-party) |
| 12 | SOC 2 Type I certification |
| 15 | COPPA/FERPA compliance for education market |
| 18 | SOC 2 Type II audit |
| 21 | Bug bounty program launch |
| 24 | Annual pen test, SOC 2 Type II renewal, ISO 27001 assessment |

### 9.1 Security Controls (Built from Day One)

- **Transport:** TLS 1.3 only, HSTS, certificate pinning on iOS
- **Authentication:** Clerk JWT with RS256, short-lived tokens (15 min)
- **Authorization:** Policy objects (Pundit gem), resource-scoped access
- **Input validation:** Strong params + dry-validation schemas
- **SQL injection:** ActiveRecord parameterized queries (never raw SQL)
- **Rate limiting:** Per-user (100 req/min), per-IP (300 req/min), per-endpoint
- **Secrets:** AWS Secrets Manager / Rails credentials, never in environment vars
- **Logging:** Structured JSON logs, PII redacted, SecurityAuditLogger retained
- **Dependency scanning:** Dependabot + bundler-audit + npm audit in CI
- **DSAR automation:** One-click data export and deletion via existing `GDPRDataExporter`

---

## 10. Key Performance Indicators

### 10.1 Product KPIs

| KPI | Phase 1 Target | Phase 4 Target |
|---|---|---|
| Daily Active Users (DAU) | 5,000 | 500,000 |
| D7 Retention | 40% | 55% |
| D30 Retention | 20% | 35% |
| Avg. Daily Session Length | 8 min | 15 min |
| Sessions per Day per User | 1.2 | 2.0 |
| Words Mastered per User/Month | 50 | 200 |
| Free-to-Paid Conversion | 3% | 8% |
| Monthly Recurring Revenue | $10K | $500K |

### 10.2 Engineering KPIs

| KPI | Phase 1 Target | Phase 4 Target |
|---|---|---|
| API P95 Latency | < 500ms | < 200ms |
| API Uptime | 99.5% | 99.9% |
| Test Coverage (Rails) | 80% | 90% |
| Test Coverage (iOS) | 60% | 80% |
| Deploy Frequency | Weekly | Daily |
| Time to Recovery (MTTR) | < 4 hours | < 30 minutes |
| Security Vulnerabilities (Critical) | 0 | 0 |
| Lighthouse Score (Web) | 90+ | 95+ |

### 10.3 Content KPIs

| KPI | Phase 1 Target | Phase 4 Target |
|---|---|---|
| Language Pairs | 6 | 20+ |
| Total Content Items | 6,000 | 100,000+ |
| Audio Coverage | 50% of vocab | 100% of vocab |
| Community Content Items | 0 | 50,000+ |
| Content Freshness (avg age) | < 6 months | < 3 months |

---

## Timeline Summary

```
Month  1-2   ████████  Rails API Bootstrap + Database
Month  2-3   ████████  Cloud Sync (bidirectional, offline-first)
Month  3-4   ████████  Content Expansion (5 new language pairs) + CMS
Month  4-5   ████████  Speech & Pronunciation (TTS + recognition)
Month  5-6   ████████  Spaced Repetition Engine (SM-2)
Month  7-8   ████████  Web App Launch (Next.js learning experience)
Month  8-10  ████████  Social Features (friends, leagues, challenges)
Month  9-11  ████████  AI Tutor (conversational, grammar explanations)
Month 10-12  ████████  Advanced Gamification (achievements, quests)
Month 13-14  ████████  Adaptive Learning Engine (ML-powered paths)
Month 14-16  ████████  Rich Media (images, stories, video)
Month 15-17  ████████  Content Marketplace (community contributions)
Month 16-18  ████████  Advanced Analytics & Insights
Month 19-20  ████████  Android App (Kotlin/Compose)
Month 20-22  ████████  Enterprise & Education (B2B)
Month 21-23  ████████  Platform API & Integrations (public API, extensions)
Month 22-24  ████████  Reliability & Scale (K8s, observability, 99.9% SLA)
```

---

*This document is a living roadmap. Review and adjust quarterly based on user feedback,
market conditions, and engineering velocity. Each milestone should have its own
detailed epic with acceptance criteria before implementation begins.*
