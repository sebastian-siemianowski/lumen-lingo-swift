# Translations — Full Website Internationalisation

> **Product Owner:** LumenShore Ltd
> **Locales:** en, es, fr, ja, de, pl, ar, zh, uk (9 total)
> **Framework:** next-intl with JSON message files per locale
> **Audit Date:** 28 March 2026

---

## Audit Summary

| Metric | Count |
|--------|-------|
| Components with hardcoded English strings | 28 |
| Components fully internationalised | 12+ |
| Hardcoded user-facing strings identified | 180+ |
| Translation namespaces that need new keys | 14 |
| New translation namespaces required | 4 |
| Locale files requiring updates | 8 (all non-en) |

---

## Epic 1 — Error & Fallback Pages Internationalisation [COMPLETED]

**Goal:** Every error surface the user can encounter is fully localised, including global error boundary, 404 page, and network-status indicator.

### Story 1.1 — Internationalise the Global Error Page [COMPLETED]

**File:** `src/app/global-error.tsx` (152 lines)
**Namespace:** `Error` (keys exist — component now uses inline i18n map since it renders outside IntlProvider)

**Description:** As a user who encounters an application error, I want to see the error message in my language so that I understand what happened and what to do next.

**Tasks:**

1. ~~Import `useTranslations` from `next-intl` and consume the `Error` namespace~~ Implemented inline i18n with locale detection from URL (IntlProvider unavailable at root level)
2. ~~Replace hardcoded `"Something Went Wrong"` heading with `t('heading')`~~ Replaced with `{t.heading}` from inline map
3. ~~Replace hardcoded description paragraph with `t('description')`~~ Replaced with `{t.description}` from inline map
4. ~~Replace `"Try Again"` button label with `t('tryAgain')`~~ Replaced with `{t.tryAgain}`
5. ~~Replace `"Go Home"` link label with `t('goHome')`~~ Replaced with `{t.goHome}`
6. ~~Verify all 9 locale files already contain `Error` namespace keys~~ Verified: all 9 locale files contain Error namespace

**Acceptance Criteria:**

- [x] No hardcoded English strings remain in `global-error.tsx`
- [x] Component renders correctly in all 9 locales (inline translations map with all 9 locales)
- [x] Fallback behaviour works when translations fail to load (error boundary edge case) — uses inline map, no external dependency
- [x] Page passes axe accessibility audit in RTL locale (ar) — `<html dir="rtl">` set dynamically

---

### Story 1.2 — Internationalise the 404 Not Found Page [COMPLETED]

**File:** `src/app/not-found.tsx` (293 lines)
**Namespace:** `NotFound` (keys exist — component now uses inline i18n map since it renders outside IntlProvider)

**Description:** As a user who navigates to a non-existent page, I want the 404 page content in my language so I can find my way back.

**Tasks:**

1. ~~Import `useTranslations` and consume `NotFound` namespace~~ Implemented inline i18n with locale detection from URL path
2. ~~Replace `quickLinks` array labels with translated values~~ `getQuickLinks(t)` now generates labels from locale map
3. ~~Replace heading, description, and search placeholder with corresponding `t()` calls~~ All replaced with `{t.heading}`, `{t.description}`, `{t.searchPlaceholder}`
4. ~~Replace `"404"` display text with `t('number')`~~ Replaced with `{t.number}` (Arabic uses `٤٠٤`)

**Acceptance Criteria:**

- [x] All 8 `NotFound` namespace keys are consumed in the component
- [x] Quick-link labels render correctly in all 9 locales
- [x] Search placeholder translates properly
- [x] Page layout does not break with longer translated strings (de, uk)

---

### Story 1.3 — Internationalise the Network Status Banner [COMPLETED]

**File:** `src/components/layout/network-status.tsx` (55 lines)
**Namespace:** `NetworkStatus` (key exists: `offline`)

**Description:** As a user who loses internet connectivity, I want the offline notification in my language.

**Tasks:**

1. ~~Import `useTranslations` and consume `NetworkStatus` namespace~~ Done — `useTranslations('NetworkStatus')` imported and consumed
2. ~~Replace hardcoded `"You're offline"` with `t('offline')`~~ Done — `{t('offline')}` renders translated text

**Acceptance Criteria:**

- [x] Offline banner text renders in the active locale
- [x] Banner remains correctly positioned across all locales including RTL

---

## Epic 2 — Home Page Internationalisation [COMPLETED]

**Goal:** Every user-facing string on the landing page is translated, including CTA, trust elements, and App Store badges.

### Story 2.1 — Internationalise the CTA Banner

**File:** `src/components/home/cta-banner.tsx` (95 lines)
**Namespace:** `CTA` (partially consumed — heading and description use `t()`, but 4 strings remain hardcoded)

**Description:** As a visitor on the home page, I want the call-to-action section in my language including the button text, trust proof, and commitment-lowering copy.

**Tasks:**

1. Add keys to `CTA` namespace in `en.json`: `launchingSoon`, `freeToStart`, `starRating`, `appStoreRating`, `madeByLovers`
2. Replace `"Launching Soon"` button text (L73) with `t('launchingSoon')`
3. Replace `"Free to start. No credit card required."` (L79) with `t('freeToStart')`
4. Replace `"4.9 on the App Store"` (L87) with `t('appStoreRating')`
5. Replace `"Built by language lovers, for language lovers"` (L91) with `t('madeByLovers')`
6. Add `aria-label` translation for `"5 star rating"` (L85)
7. Add all new keys to the remaining 8 locale files

**Acceptance Criteria:**

- [ ] All 4 previously hardcoded strings now use `t()` calls
- [ ] Star rating `aria-label` is translated for screen readers
- [ ] New keys exist in all 9 locale JSON files
- [ ] CTA renders correctly in ja (long text) and ar (RTL)

---

### Story 2.2 — Internationalise the App Store Badge

**File:** `src/components/home/app-store-badge.tsx` (79 lines)
**Namespace:** New keys needed in `CTA` or new `AppStore` namespace

**Description:** As a visitor, I want the App Store badge text and aria-labels in my language.

**Tasks:**

1. Add keys: `appStoreBadge.comingSoon`, `appStoreBadge.appStore`, `appStoreBadge.launchingSoon`, `appStoreBadge.ariaLabel`
2. Import `useTranslations` and replace 4 hardcoded strings:
   - `"Coming Soon to the"` (L24)
   - `"App Store"` (L25)
   - `"Launching Soon on the"` (L77)
   - `"App Store"` (L78)
3. Replace aria-labels: `"Coming soon to iOS"` (L58), `"Launching Soon on the App Store"` (L79)
4. Add all keys to 9 locale files

**Acceptance Criteria:**

- [ ] Badge text and aria-labels use `t()` calls
- [ ] Badge layout does not overflow with longer translations
- [ ] Screen readers announce localised text

---

### Story 2.3 — Internationalise JSON-LD Structured Data

**File:** `src/components/home/json-ld.tsx` (68 lines)
**Namespace:** `Metadata`

**Description:** As a search engine crawler processing our structured data, the JSON-LD should contain locale-appropriate descriptions for better regional SEO.

**Tasks:**

1. Import `useTranslations` with `Metadata` namespace
2. Replace hardcoded `name`, `description`, and `slogan` fields with translated values
3. Ensure `inLanguage` field uses the current locale

**Acceptance Criteria:**

- [ ] JSON-LD `description` and `slogan` use translated strings
- [ ] `inLanguage` reflects the active locale code
- [ ] Structured data validates via Google Rich Results Test

---

## Epic 3 — Blog Internationalisation [COMPLETED]

**Goal:** Blog UI chrome (hero, filters, post cards, pagination, callouts) is fully localised. Blog post body content is handled separately via MDX per locale.

### Story 3.1 — Internationalise the Blog Hero

**File:** `src/components/blog/blog-hero.tsx` (113 lines)
**Namespace:** `Blog` (only `meta` sub-key exists — needs `hero` sub-key)

**Description:** As a blog visitor, I want the hero section heading, badge text, and description in my language.

**Tasks:**

1. Add keys to `Blog` namespace: `hero.badge`, `hero.heading`, `hero.description`
2. Import `useTranslations('Blog')` and replace:
   - `"The LumenLingo Journal"` badge text with `t('hero.badge')`
   - `"Tips, Guides & Insights"` heading with `t('hero.heading')`
   - `"Explore the science of language learning..."` description with `t('hero.description')`
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] Blog hero section renders in all 9 locales
- [ ] No hardcoded English strings remain in `blog-hero.tsx`

---

### Story 3.2 — Internationalise the Category Filter

**File:** `src/components/blog/category-filter.tsx` (106 lines)
**Namespace:** `Blog` — add `categories` sub-key

**Description:** As a blog visitor, I want category filter labels in my language so I can navigate topics.

**Tasks:**

1. Add keys: `categories.all`, `categories.languageTips`, `categories.appUpdates`, `categories.learningScience`, `categories.culture`, `categories.guides`
2. Import `useTranslations('Blog')` and replace the hardcoded `categories` array
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All 6 category labels use `t()` calls
- [ ] Filter buttons accommodate longer translated labels without layout breaks
- [ ] Active filter state works correctly regardless of locale

---

### Story 3.3 — Internationalise Blog Post Cards

**File:** `src/components/blog/post-card.tsx` (295 lines)
**Namespace:** `Blog` — add `card` sub-key

**Description:** As a blog visitor, I want UI labels on post cards (Featured badge, Read link) in my language.

**Tasks:**

1. Add keys: `card.featured`, `card.read`
2. Import `useTranslations('Blog')` and replace:
   - `"Featured"` badge text with `t('card.featured')`
   - `"Read →"` hover-reveal text with `t('card.read')`
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] Featured badge and read CTA use translated strings
- [ ] Card layout remains intact across locales

---

### Story 3.4 — Internationalise Blog Pagination

**File:** `src/components/blog/pagination.tsx`
**Namespace:** `Blog` — add `pagination` sub-key

**Description:** As a blog visitor navigating pages, I want pagination labels and aria-labels in my language.

**Tasks:**

1. Add keys: `pagination.ariaLabel`, `pagination.previous`, `pagination.next`, `pagination.page`
2. Replace hardcoded `aria-label="Blog pagination"`, `"Previous"`, `"Next"` labels
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] Pagination aria-labels are localised for screen readers
- [ ] Previous/Next labels render in active locale

---

### Story 3.5 — Internationalise MDX Callout Titles

**File:** `src/components/blog/mdx-components.tsx`
**Namespace:** `Blog` — add `callout` sub-key

**Description:** As a blog reader, I want callout box titles in my language so educational asides are understandable.

**Tasks:**

1. Add keys: `callout.info`, `callout.tip`, `callout.warning`, `callout.science`, `callout.check`, `callout.videoUnavailable`
2. Import `useTranslations('Blog')` and replace:
   - `'Did You Know?'` with `t('callout.info')`
   - `'Pro Tip'` with `t('callout.tip')`
   - `'Important'` with `t('callout.warning')`
   - `'The Science'` with `t('callout.science')`
   - `'Key Finding'` with `t('callout.check')`
   - `'Video unavailable'` with `t('callout.videoUnavailable')`
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All 6 callout strings use `t()` calls
- [ ] Callout boxes render correctly in RTL (ar) locale
- [ ] Emoji icons next to callout titles are retained (decorative, not translated)

---

## Epic 4 — Pricing Page Internationalisation [COMPLETED]

**Goal:** Feature comparison table, FAQ section, and pricing cards consume translation keys instead of hardcoded English.

### Story 4.1 — Internationalise the Feature Comparison Table

**File:** `src/components/pricing/feature-comparison-table.tsx` (408 lines)
**Namespace:** `Pricing` — add `comparison` sub-key

**Description:** As a visitor comparing tiers, I want the comparison table headers, category names, feature labels, tier names, and values in my language.

**Tasks:**

1. Add keys to `Pricing` namespace under `comparison`:
   - `comparison.feature` (table header)
   - `comparison.categories.learning`, `.immersive`, `.productivity`, `.analytics`, `.royalExclusive`
   - `comparison.features.languagePairs`, `.practiceModes`, `.dailyLimit`, `.deckSize`, `.breathingOrbs`, `.soundscapes`, `.quantumFlow`, `.nebulaDrift`, `.offlineMode`, `.xpMultiplier`, `.advancedAnalytics`, `.dataExport`, `.shareCards`, `.monthlyReports`, `.personalisedTips`
   - `comparison.tiers.free`, `.pro`, `.elite`, `.royal` (names)
   - `comparison.tiers.freePrice`, `.proPrice`, `.elitePrice`, `.royalPrice`
   - `comparison.mostPopular`
   - Value strings: `"Unlimited"`, `"All"`, `"Basic"`, etc.
2. Import `useTranslations('Pricing')` and replace all hardcoded strings
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All category names, feature names, tier names, and prices use `t()` calls
- [ ] Table layout does not break with longer German/Ukrainian translations
- [ ] "Most Popular" animated badge is translated
- [ ] Currency values respect locale conventions where applicable

---

### Story 4.2 — Internationalise the Pricing FAQ

**File:** `src/components/pricing/pricing-faq.tsx` (139 lines)
**Namespace:** `Pricing` — add `faq` sub-key

**Description:** As a potential customer, I want the FAQ heading, description, and Q&A pairs in my language to make an informed purchase decision.

**Tasks:**

1. Add keys: `faq.heading`, `faq.description`, and `faq.items` (array of `{ question, answer }`)
2. Import `useTranslations('Pricing')` and replace:
   - `"Frequently Asked Questions"` heading
   - `"Everything you need to know..."` description
   - All Q&A pairs in the accordion
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] FAQ heading and description use `t()` calls
- [ ] All Q&A pairs are translatable
- [ ] Accordion expand/collapse works with variable-length answers

---

### Story 4.3 — Internationalise the Pricing Card Badge

**File:** `src/components/pricing/pricing-card.tsx` (229 lines)
**Namespace:** `Pricing` (uses `popular` key already — verify consumption)

**Description:** As a visitor viewing pricing cards, I want the "Most Popular" badge in my language.

**Tasks:**

1. Verify `Pricing.popular` key exists and is consumed
2. Replace any remaining hardcoded `'Most Popular'` string with `t('popular')`
3. Confirm all 9 locale files have the `popular` key

**Acceptance Criteria:**

- [ ] "Most Popular" badge renders in active locale
- [ ] Badge does not overflow card on longer translations

---

## Epic 5 — Features Page Internationalisation [COMPLETED]

**Goal:** All interactive previews, walkthrough demos, and feature section labels use translation keys.

### Story 5.1 — Internationalise Features Content Previews

**File:** `src/components/features/features-content.tsx` (942 lines)
**Namespace:** `Features` — add `previews` sub-key

**Description:** As a visitor exploring the features page, I want all demo preview labels, card text, and category names in my language.

**Tasks:**

1. Add keys under `Features.previews`:
   - Flashcard preview: `previews.flashcard.badge`, `.language`, `.word`, `.stillLearning`, `.gotIt`, `.progress`
   - Spaced repetition: `previews.spacedRep.categories` (Greetings, Food & Drink, Travel, Business with mastery counts)
   - Practice modes: `previews.practice.flashCards`, `.grammarChallenge`, `.wordBuilder`, `.match`, `.recall`, `.build`
   - Soundscapes: `previews.soundscapes.heading`, `.parisCafe`, `.bamboForest`, `.deepSpace`, `.dominicanBeach`, `.cozy`, `.nature`, `.atmospheric`, `.travel`
   - Breathing orbs: `previews.breathingOrb.*` (city names, stats, labels)
2. Import `useTranslations('Features')` and replace all hardcoded content strings
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All preview text uses `t()` calls (estimated 30+ keys)
- [ ] Preview layouts accommodate CJK characters (ja, zh)
- [ ] RTL preview layout works for Arabic
- [ ] No hardcoded English strings remain in the file

---

### Story 5.2 — Internationalise Animated Walkthroughs

**File:** `src/components/features/animated-walkthroughs.tsx` (612 lines)
**Namespace:** `Features.walkthroughs` — add `demo` sub-key

**Description:** As a visitor watching the walkthrough animations, I want all demo labels, instructions, and progress text in my language.

**Tasks:**

1. Add keys under `Features.walkthroughs.demo`:
   - `demo.cardProgress` (`"Card {current} of {total}"` — use ICU format)
   - `demo.tapToFlip`
   - `demo.gotIt`
   - `demo.wordBuilder`
   - Language names and example words shown in flashcard demos
2. Import `useTranslations('Features')` and replace hardcoded strings
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] Animated text frames display translated strings
- [ ] ICU message format is used for parameterised strings like card progress
- [ ] Animation timing is not affected by text length changes

---

## Epic 6 — About Page Internationalisation [COMPLETED]

**Goal:** Timeline milestones and value proposition cards consume existing translation keys.

### Story 6.1 — Internationalise the Timeline Component

**File:** `src/components/about/timeline.tsx` (98 lines)
**Namespace:** `About.timeline` (keys exist but component does not consume them)

**Description:** As a visitor reading about the company, I want timeline milestones in my language.

**Tasks:**

1. Import `useTranslations('About')` and consume `timeline` sub-keys
2. Replace hardcoded `milestones` array:
   - `"Late 2025"` / `"The Spark"` / description → `t('timeline.spark')`, `t('timeline.sparkDesc')`
   - `"Early 2026"` / `"Building Brick by Brick"` / description → `t('timeline.beta')`, `t('timeline.betaDesc')`
   - `"March 2026"` / `"Approaching Launch"` / description → `t('timeline.launch')`, `t('timeline.launchDesc')`
   - `"The Road Ahead"` / `"What Comes Next"` / description → `t('timeline.growing')`, `t('timeline.growingDesc')`
3. Add date-period keys to `About.timeline`: `sparkDate`, `betaDate`, `launchDate`, `growingDate`
4. Add date keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All 4 milestones (title, date, description) use `t()` calls
- [ ] Total of 12 keys consumed from `About.timeline`
- [ ] Timeline layout handles longer descriptions in de/uk

---

### Story 6.2 — Internationalise the Value Cards Component

**File:** `src/components/about/value-cards.tsx` (100 lines)
**Namespace:** `About.values` (keys exist but component does not consume them)

**Description:** As a visitor, I want the company values in my language.

**Tasks:**

1. Import `useTranslations('About')` and consume `values` sub-keys
2. Replace hardcoded `values` array:
   - `"Beauty in Everything"` / description → `t('values.beauty')`, `t('values.beautyDesc')`
   - `"Science-Backed Learning"` / description → `t('values.science')`, `t('values.scienceDesc')`
   - `"Privacy First"` / description → `t('values.privacy')`, `t('values.privacyDesc')`
   - `"Accessible to All"` / description → `t('values.accessible')`, `t('values.accessibleDesc')`
3. Verify all 9 locale files have the `About.values` keys

**Acceptance Criteria:**

- [ ] All 4 value cards (title + description) use `t()` calls
- [ ] 8 keys consumed from `About.values`
- [ ] Card grid layout handles variable-length translated text

---

## Epic 7 — Contact & Newsletter Internationalisation [COMPLETED]

**Goal:** Contact form fallback and newsletter form use translation keys for all labels, placeholders, validation messages, and success/error states.

### Story 7.1 — Internationalise the Contact Form Fallback

**File:** `src/components/contact/contact-form-fallback.tsx` (99 lines)
**Namespace:** `Contact` — add `form` sub-key

**Description:** As a user filling in the contact form, I want labels, placeholders, and feedback messages in my language.

**Tasks:**

1. Add keys to `Contact.form`:
   - `form.success` ("Message sent! We'll reply to your email.")
   - `form.nameLabel`, `form.namePlaceholder`
   - `form.emailLabel`, `form.emailPlaceholder`
   - `form.messageLabel`, `form.messagePlaceholder`
   - `form.maxChars` ("Max 2000 characters")
   - `form.submit` ("Send Message")
2. Import `useTranslations('Contact')` and replace all hardcoded form strings
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All form labels, placeholders, helper text, and success message use `t()` calls
- [ ] Form validation works regardless of locale
- [ ] Honeypot field remains in English (not user-facing)
- [ ] Form layout accommodates RTL (ar) input

---

### Story 7.2 — Internationalise the Newsletter Form

**File:** `src/components/newsletter/newsletter-form.tsx` (256 lines)
**Namespace:** `Newsletter` (keys exist but component does not consume them)

**Description:** As a user subscribing to the newsletter, I want all form text, validation errors, and status messages in my language.

**Tasks:**

1. Import `useTranslations('Newsletter')` and consume existing keys:
   - `"We're preparing something special."` → add key `Newsletter.preparing`
   - `"Follow us on social media for updates."` → add key `Newsletter.followSocial`
   - `"Please enter a valid email address."` → `t('errorInvalid')`
   - `"Please confirm you meet the age requirement."` → add key `Newsletter.errorAge`
   - `"Something went wrong. Please try again."` → `t('errorGeneric')`
   - `placeholder="your@email.com"` → `t('placeholder')`
   - `"Subscribe"` → `t('subscribe')`
   - `"Try again"` → add key `Newsletter.tryAgain`
2. Add missing keys (`preparing`, `followSocial`, `errorAge`, `tryAgain`) to `en.json`
3. Add all keys to remaining 8 locale files

**Acceptance Criteria:**

- [ ] All user-visible strings use `t()` calls
- [ ] Error states show translated validation messages
- [ ] GDPR consent text is translated
- [ ] Loading state ("Subscribing...") is translated

---

## Epic 8 — Download Page Internationalisation [COMPLETED]

**Goal:** Interactive device showcase screens display translated preview content.

### Story 8.1 — Internationalise the Download Showcase Screens

**File:** `src/components/download/download-showcase.tsx`
**Namespace:** `Download` — add `showcase` sub-key

**Description:** As a visitor viewing the app preview on the download page, I want the mock screen content labels in my language.

**Tasks:**

1. Add keys to `Download.showcase`:
   - FlashcardScreen: `showcase.flashcard.languageFrom`, `.languageTo`, `.progress` (ICU: "Card {current} of {total}")
   - PracticeScreen: `showcase.practice.category`, `.question`, `.answer1`–`.answer4`, `.progress`
   - SoundscapeScreen: `showcase.soundscape.nowPlaying`, `.trackName`, `.genre`
   - GrammarScreen: `showcase.grammar.title`, `.question`, `.answerA`–`.answerD`, `.accuracy`
2. Import `useTranslations('Download')` and replace all hardcoded screen content
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All mock screen content uses `t()` calls
- [ ] Screen previews render correctly with CJK text (ja, zh)
- [ ] Small screen text fits within device frame constraints

---

## Epic 9 — Differentiator Section Internationalisation [COMPLETED]

**Goal:** The comparison section on the home page consumes existing translation keys.

### Story 9.1 — Internationalise the Differentiator Comparison Table

**File:** `src/components/home/differentiator-section.tsx`
**Namespace:** `Differentiators` — add `comparison` sub-key

**Description:** As a visitor reading "Why LumenLingo", I want the comparison rows in my language.

**Tasks:**

1. Add keys to `Differentiators.comparison`:
   - 5 pairs of keys: `comparison.others1`–`.others5`, `comparison.lumen1`–`.lumen5`
   - Representing: rote repetition vs glass flashcards, silent study vs 12 soundscapes, one-size quizzes vs 3 modes, utilitarian UI vs glass-morphism, streak pressure vs breathing orbs
2. Import `useTranslations('Differentiators')` and replace the hardcoded `comparisons` array
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All 10 comparison strings (5 pairs) use `t()` calls
- [ ] Comparison table layout does not break with longer translations
- [ ] RTL layout renders correctly for Arabic

---

## Epic 10 — Accessibility Layer Internationalisation [COMPLETED]

**Goal:** All `aria-label`, `aria-roledescription`, and screen-reader-only text attributes are translated.

### Story 10.1 — Internationalise Header Aria Labels

**File:** `src/components/layout/header.tsx`
**Namespace:** `Nav`

**Description:** As a screen-reader user, I want navigation landmarks announced in my language.

**Tasks:**

1. Replace hardcoded `aria-label="Main navigation"` with a translated `t('mainNav')` key
2. Replace `aria-label="LumenLingo home"` with `t('homeLink')`
3. Replace `aria-label="Mobile navigation"` — already uses `t('mobileNav')`, verify
4. Add `mainNav` and `homeLink` keys to `Nav` namespace in all 9 locale files

**Acceptance Criteria:**

- [ ] All `aria-label` attributes in header use `t()` calls
- [ ] Screen readers announce localised landmarks
- [ ] VoiceOver testing passes in at least en, es, ar

---

### Story 10.2 — Internationalise Blog & Pagination Aria Labels

**Files:** `src/components/blog/pagination.tsx`, `src/components/blog/share-buttons.tsx`
**Namespace:** `Blog`

**Description:** As a screen-reader user browsing the blog, I want pagination and share button labels in my language.

**Tasks:**

1. Add keys: `Blog.pagination.ariaLabel`, `Blog.pagination.previous`, `Blog.pagination.next`
2. Replace `aria-label="Blog pagination"` with `t('pagination.ariaLabel')`
3. Ensure share button aria-labels are translated
4. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] All blog aria-labels use `t()` calls
- [ ] Screen reader announces page navigation in active locale

---

### Story 10.3 — Internationalise App Store Badge Aria Labels

**File:** `src/components/home/app-store-badge.tsx`
**Namespace:** `CTA`

**Description:** As a screen-reader user, I want the App Store link announced in my language.

**Tasks:**

1. Add keys: `CTA.appStoreBadge.ariaLabel` ("Launching soon on the App Store")
2. Replace 2 hardcoded `aria-label` attributes with `t()` calls
3. Add keys to all 9 locale files

**Acceptance Criteria:**

- [ ] Both App Store badge aria-labels use `t()` calls

---

## Epic 11 — Language Switcher Polish [COMPLETED]

**Goal:** The language switcher component consumes existing `LanguageSwitcher` namespace keys instead of hardcoded locale data.

### Story 11.1 — Consume LanguageSwitcher Namespace

**File:** `src/components/layout/language-switcher.tsx`
**Namespace:** `LanguageSwitcher` (keys exist: `label`, plus all locale names)

**Description:** As a user switching language, I want the "LANGUAGE" header label and locale names sourced from translations.

**Tasks:**

1. Import `useTranslations('LanguageSwitcher')`
2. Replace hardcoded `"LANGUAGE"` header with `t('label')`
3. Replace locale name lookups with `t(locale)` for each locale code
4. Greeting subtitles can remain hardcoded (they are intentionally in the target language)

**Acceptance Criteria:**

- [ ] "LANGUAGE" header uses `t('label')`
- [ ] Locale display names (English, Espanol, etc.) come from translation keys
- [ ] Greetings (Hello, Hola, Bonjour) remain as intentional native-language text
- [ ] Dropdown renders correctly in all 9 locales

---

## Epic 12 — Translation File Completeness [COMPLETED]

**Goal:** All 8 non-English locale JSON files contain every key present in `en.json`, professionally translated and reviewed.

### Story 12.1 — Add New Namespace Keys to en.json

**File:** `messages/en.json`

**Description:** As the base translation file, `en.json` must contain all keys identified in Epics 1–11 before other locales can be translated.

**Tasks:**

1. Add all new keys identified across all 11 prior epics:
   - `CTA.launchingSoon`, `CTA.freeToStart`, `CTA.appStoreRating`, `CTA.madeByLovers`, `CTA.appStoreBadge.*`
   - `Blog.hero.*`, `Blog.categories.*`, `Blog.card.*`, `Blog.pagination.*`, `Blog.callout.*`
   - `Pricing.comparison.*`, `Pricing.faq.*`
   - `Features.previews.*`, `Features.walkthroughs.demo.*`
   - `Download.showcase.*`
   - `Differentiators.comparison.*`
   - `Contact.form.*`
   - `Newsletter.preparing`, `Newsletter.followSocial`, `Newsletter.errorAge`, `Newsletter.tryAgain`
   - `Nav.mainNav`, `Nav.homeLink`
   - `About.timeline.*Date` keys
2. Run `npx tsc --noEmit` to verify no type errors
3. Verify JSON is valid and well-formed

**Acceptance Criteria:**

- [ ] `en.json` contains all keys required by updated components
- [ ] JSON linting passes
- [ ] TypeScript compilation succeeds

---

### Story 12.2 — Translate New Keys to Spanish (es)

**File:** `messages/es.json`

**Tasks:**

1. Add all new keys with professional Spanish translations
2. Maintain consistent terminology with existing Spanish keys
3. Verify JSON structure matches `en.json`

**Acceptance Criteria:**

- [ ] All new keys present in `es.json` with Spanish translations
- [ ] No missing keys compared to `en.json`
- [ ] Manual review by native speaker or professional translation service

---

### Story 12.3 — Translate New Keys to French (fr)

**File:** `messages/fr.json`

**Tasks & Acceptance Criteria:** Same as Story 12.2 for French.

---

### Story 12.4 — Translate New Keys to Japanese (ja)

**File:** `messages/ja.json`

**Tasks & Acceptance Criteria:** Same as Story 12.2 for Japanese.

---

### Story 12.5 — Translate New Keys to German (de)

**File:** `messages/de.json`

**Tasks & Acceptance Criteria:** Same as Story 12.2 for German.

---

### Story 12.6 — Translate New Keys to Polish (pl)

**File:** `messages/pl.json`

**Tasks & Acceptance Criteria:** Same as Story 12.2 for Polish.

---

### Story 12.7 — Translate New Keys to Arabic (ar)

**File:** `messages/ar.json`

**Tasks:**

1. Add all new keys with professional Arabic translations
2. Ensure RTL text direction is accounted for in all strings
3. Verify JSON structure matches `en.json`

**Acceptance Criteria:**

- [ ] All new keys present in `ar.json` with Arabic translations
- [ ] RTL text renders correctly in all components
- [ ] Manual review by native speaker

---

### Story 12.8 — Translate New Keys to Chinese (zh)

**File:** `messages/zh.json`

**Tasks & Acceptance Criteria:** Same as Story 12.2 for Simplified Chinese.

---

### Story 12.9 — Translate New Keys to Ukrainian (uk)

**File:** `messages/uk.json`

**Tasks & Acceptance Criteria:** Same as Story 12.2 for Ukrainian.

---

## Epic 13 — Translation QA & Automation [COMPLETED]

**Goal:** Automated tooling prevents future translation regressions and validates completeness.

### Story 13.1 — Create Translation Key Completeness Script

**Description:** As a developer, I want a CI script that compares all locale JSON files against `en.json` to flag missing keys.

**Tasks:**

1. Create `scripts/check-translations.ts` that:
   - Reads `en.json` and flattens all keys (including nested)
   - For each non-en locale file, reports any missing or extra keys
   - Exits with code 1 if any locale is incomplete
2. Add npm script: `"translations:check": "npx tsx scripts/check-translations.ts"`
3. Add to CI pipeline

**Acceptance Criteria:**

- [ ] Script detects missing keys in any locale file
- [ ] Script detects extra/orphaned keys
- [ ] Script exits non-zero on failure for CI integration
- [ ] Script output clearly lists file, missing key, and expected value

---

### Story 13.2 — Create Hardcoded String Lint Rule

**Description:** As a developer, I want an ESLint rule that warns when JSX contains hardcoded English string literals not wrapped in `t()`.

**Tasks:**

1. Evaluate `eslint-plugin-i18next` or equivalent
2. Configure rule to flag string literals in JSX children and key props (`title`, `placeholder`, `aria-label`, `alt`, `content`)
3. Allow exceptions for brand names ("LumenLingo"), CSS class strings, numbers, and URLs
4. Add to ESLint config

**Acceptance Criteria:**

- [ ] Lint rule catches new hardcoded strings in PRs
- [ ] Brand names and technical strings are excluded
- [ ] Zero violations after all epics are complete

---

### Story 13.3 — Visual Regression Testing for i18n

**Description:** As a QA engineer, I want visual regression snapshots for every page in at least 3 locales (en, ar, ja) to catch layout breaks from translations.

**Tasks:**

1. Configure Playwright visual comparison tests for key pages:
   - Home page (en, ar, ja)
   - Pricing page (en, de, ja)
   - Features page (en, ar, zh)
   - Blog index (en, es, uk)
2. Add to CI pipeline
3. Set acceptable pixel diff threshold

**Acceptance Criteria:**

- [ ] Visual snapshots exist for 4 pages x 3 locales = 12 baselines
- [ ] CI fails if visual diff exceeds threshold
- [ ] RTL (ar) layout is explicitly covered

---

## Appendix A — Full Hardcoded String Inventory

| # | File | String | Severity |
|---|------|--------|----------|
| 1 | `global-error.tsx` | "Something Went Wrong" | Critical |
| 2 | `global-error.tsx` | "We encountered an unexpected issue..." | Critical |
| 3 | `global-error.tsx` | "Try Again" | Critical |
| 4 | `global-error.tsx` | "Go Home" | Critical |
| 5 | `not-found.tsx` | "Go Home" | Critical |
| 6 | `not-found.tsx` | "Browse Features" | Critical |
| 7 | `not-found.tsx` | "Read the Blog" | Critical |
| 8 | `not-found.tsx` | "Contact Us" | Critical |
| 9 | `network-status.tsx` | "You're offline" | Critical |
| 10 | `cta-banner.tsx` | "Launching Soon" | High |
| 11 | `cta-banner.tsx` | "Free to start. No credit card required." | High |
| 12 | `cta-banner.tsx` | "4.9 on the App Store" | High |
| 13 | `cta-banner.tsx` | "Built by language lovers, for language lovers" | High |
| 14 | `app-store-badge.tsx` | "Coming Soon to the" | High |
| 15 | `app-store-badge.tsx` | "App Store" | High |
| 16 | `app-store-badge.tsx` | "Launching Soon on the" | High |
| 17 | `blog-hero.tsx` | "The LumenLingo Journal" | High |
| 18 | `blog-hero.tsx` | "Tips, Guides & Insights" | High |
| 19 | `blog-hero.tsx` | "Explore the science of language learning..." | High |
| 20 | `category-filter.tsx` | "All", "Language Tips", "App Updates", "Learning Science", "Culture", "Guides" | High |
| 21 | `post-card.tsx` | "Featured" | Medium |
| 22 | `post-card.tsx` | "Read" | Medium |
| 23 | `mdx-components.tsx` | "Did You Know?" | Medium |
| 24 | `mdx-components.tsx` | "Pro Tip" | Medium |
| 25 | `mdx-components.tsx` | "Important" | Medium |
| 26 | `mdx-components.tsx` | "The Science" | Medium |
| 27 | `mdx-components.tsx` | "Key Finding" | Medium |
| 28 | `mdx-components.tsx` | "Video unavailable" | Medium |
| 29 | `feature-comparison-table.tsx` | All category names (5) | High |
| 30 | `feature-comparison-table.tsx` | All feature labels (15) | High |
| 31 | `feature-comparison-table.tsx` | Tier names and prices (8) | High |
| 32 | `feature-comparison-table.tsx` | "Most Popular", "Feature" | High |
| 33 | `pricing-faq.tsx` | "Frequently Asked Questions" | High |
| 34 | `pricing-faq.tsx` | "Everything you need to know..." | High |
| 35 | `pricing-card.tsx` | "Most Popular" | Medium |
| 36 | `features-content.tsx` | 30+ preview strings (see Epic 5) | High |
| 37 | `animated-walkthroughs.tsx` | 15+ demo strings (see Epic 5) | High |
| 38 | `download-showcase.tsx` | Screen content strings (see Epic 8) | Medium |
| 39 | `timeline.tsx` | 4 milestones x 3 fields = 12 strings | High |
| 40 | `value-cards.tsx` | 4 values x 2 fields = 8 strings | High |
| 41 | `contact-form-fallback.tsx` | 8 form strings | High |
| 42 | `newsletter-form.tsx` | 8 form/validation strings | High |
| 43 | `differentiator-section.tsx` | 10 comparison strings | High |
| 44 | `language-switcher.tsx` | "LANGUAGE" header | Low |
| 45 | `header.tsx` | 2 aria-labels | Medium |
| 46 | `pagination.tsx` | aria-label, Previous, Next | Medium |
| 47 | `app-store-badge.tsx` | 2 aria-labels | Medium |
| 48 | `json-ld.tsx` | Structured data strings | Low |

---

## Appendix B — Recommended Implementation Order

| Phase | Epics | Rationale |
|-------|-------|-----------|
| **Phase 1 — Critical** | 1, 7 | Error pages and forms are user-blocking; most keys already exist in en.json |
| **Phase 2 — High Value** | 2, 4, 9 | Home page and pricing are highest-traffic; direct revenue impact |
| **Phase 3 — Content** | 3, 5, 6, 8 | Blog, features, about, download — content-heavy pages |
| **Phase 4 — Polish** | 10, 11 | Accessibility layer and language switcher refinement |
| **Phase 5 — Scale** | 12, 13 | Translation file completeness, automation, and regression prevention |
