# AGENT.md — LumenLingo iOS

> This file helps AI agents understand the project structure, conventions, and key decisions.

## Overview

**LumenLingo** is a language-learning iOS app (iPad + iPhone) ported from a React/Vite web app. It features three game modes—Flashcards, Grammar, and Word Builder—with stunning full-quality cosmic backgrounds, breathing orb animations, and quantum-flow aurora effects.

- **Bundle ID**: `com.sebastiansiemianowski.lumenlingo`
- **Min deployment**: iOS 17.0
- **Architecture**: MVVM with SwiftUI + `@Observable` macro
- **Persistence**: SwiftData
- **Dependencies**: None (fully native stack)

## Architecture

```
MVVM + SwiftUI
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│    Views      │────▶│  ViewModels  │────▶│   Services   │
│  (SwiftUI)    │     │ (@Observable)│     │  (singletons)│
└──────────────┘     └──────────────┘     └──────────────┘
                                                 │
                          ┌──────────────────────┤
                          ▼                      ▼
                    ┌──────────┐          ┌──────────────┐
                    │ SwiftData│          │ JSON Bundles │
                    │  Models  │          │  (Content/)  │
                    └──────────┘          └──────────────┘
```

## Folder Structure

```
LumenLingo/
├── LumenLingoApp.swift          # @main entry point
├── Models/
│   ├── Enums.swift              # GameType, Difficulty, SupportedLanguage, LanguagePair,
│   │                            # BreathingOrbScheme, QuantumFlowScene, NebulaPreset, etc.
│   ├── DataModels.swift         # SwiftData @Model classes (UserProfile, GameProgressRecord,
│   │                            # LanguagePreference, FavoriteCategory, MasteredContent, EnabledBetaPair)
│   └── ContentModels.swift      # Codable structs (FlashcardWord, GrammarQuestion, WordBuilderWord,
│                                # ContentCategory<T>, AppUser, SFSymbolMapping, WisdomQuote)
├── Services/
│   ├── AuthService.swift        # Protocol + MockAuthService (user = "Sebastian")
│   ├── SyncService.swift        # Protocol + MockSyncService (simulated 1s delay)
│   ├── ContentLoader.swift      # JSON loader from app bundle with NSCache
│   ├── ProgressService.swift    # XP, levels, streaks, mastery, favorites, session tracking
│   ├── AudioService.swift       # Synthesized audio via AVAudioEngine (sine/triangle oscillators)
│   ├── HapticsService.swift     # UIFeedbackGenerator wrappers
│   └── TranslationService.swift # Runtime UI text translation by source language
├── Extensions/
│   └── Extensions.swift         # Color(hex:), cosmic theme colors, View modifiers, Date/Double/Int/Array exts
├── ViewModels/
│   ├── DashboardViewModel.swift
│   ├── FlashcardsViewModel.swift
│   ├── GrammarViewModel.swift
│   ├── WordBuilderViewModel.swift
│   ├── CategoryViewModel.swift  # Generic across all 3 game types
│   ├── ProgressViewModel.swift  # Stats, wisdom quotes
│   └── ProfileViewModel.swift   # Includes LanguageSelectionViewModel + MembershipViewModel
├── Views/
│   ├── ContentView.swift        # Root TabView with 5 tabs
│   ├── Background/
│   │   ├── BreathingOrbsView.swift      # 5 animated blurred gradient orbs, 6 color schemes
│   │   ├── QuantumFlowView.swift        # Aurora borealis Canvas renderer, 12 curtains, additive blending
│   │   ├── CosmicBackgroundView.swift   # Routes to 6 nebula presets, MicrostarFieldView, CosmicEffectsOverlay
│   │   ├── LagoonNebulaView.swift       # JWST cosmic cliffs, gas clouds, star clusters, Bok globules
│   │   ├── CelestialLagoonView.swift    # Bioluminescent deep-sea-meets-space
│   │   ├── SolarAuroraView.swift        # Aurora + solar wind dynamics, magnetic field ribbons
│   │   ├── SpiralHaloGalaxyView.swift   # Top-down Milky Way, logarithmic spiral arms
│   │   ├── EdgeOfAndromedaView.swift    # Side-on galaxy, dark dust band, HII regions
│   │   ├── StarburstRingView.swift      # Hoag's Object ring galaxy
│   │   └── LayoutBackgroundView.swift   # Orchestrator: base → orbs → quantum → cosmic → overlays
│   ├── Dashboard/
│   │   └── DashboardView.swift
│   ├── Games/
│   │   ├── FlashCardsView.swift     # 3D card flip, particle effects, continuous mode
│   │   ├── GrammarView.swift        # Multiple-choice A/B/C/D, performance mood
│   │   └── WordBuilderView.swift    # Letter scramble/placement, Lumen Bar, hint system
│   ├── Categories/
│   │   └── CategoriesView.swift     # Generic category browser, favorites, search, grid/list
│   ├── Journey/
│   │   └── JourneyView.swift        # Swift Charts, streak display, wisdom quotes
│   ├── Profile/
│   │   └── ProfileView.swift        # User info, visual settings selectors, account info
│   ├── LanguageSelection/
│   │   └── LanguageSelectionView.swift  # Source/target picker, beta pairs toggle
│   └── Membership/
│       └── MembershipView.swift     # 4 tiers, billing toggle, comparison table, FAQ
├── Resources/
│   └── Content/
│       └── english_spanish/
│           ├── flashcards.json      # 8 categories × 15 words = 120 flashcards
│           ├── grammar.json         # 4 categories × 15 questions = 60 questions
│           └── wordbuilder.json     # 6 categories × 15 words = 90 words
└── LumenLingoTests/
    ├── ProgressServiceTests.swift
    ├── ContentModelsTests.swift
    └── ExtensionsTests.swift
```

## Key Design Decisions

### 1. Models

- **SwiftData `@Model` classes** for persistence: `UserProfile`, `GameProgressRecord`, `LanguagePreference`, `FavoriteCategory`, `MasteredContent`, `EnabledBetaPair`
- **Codable structs** for content loaded from JSON: `FlashcardWord`, `GrammarQuestion`, `WordBuilderWord`, `ContentCategory<T>`
- **Level formula**: `(totalXP / 100) + 1`; XP per correct: +10 (flashcards/grammar), +15 (word builder)

### 2. Content Pipeline

JSON bundles live in `Resources/Content/{source}_{target}/`. ContentLoader reads them via `Bundle.main.url(forResource:withExtension:subdirectory:)` with NSCache.

To add a new language pair:
1. Create directory `Resources/Content/{source}_{target}/`
2. Add `flashcards.json`, `grammar.json`, `wordbuilder.json` following existing schemas
3. Add the pair to `LanguagePair` enum if it's a built-in pair, or use `EnabledBetaPair` for beta

### 3. Authentication & Sync

Both are protocol-based with mock implementations:
- `AuthService` protocol → `MockAuthService` returns hardcoded user `"Sebastian"` / `"sebastian@test.com"`
- `SyncService` protocol → `MockSyncService` simulates network delays

To add real auth (e.g. Firebase, Sign in with Apple): implement the protocols.

### 4. Backgrounds (Phase 6 — Full Quality)

Background system has 4 composited layers:
1. **Base gradient** — dark cosmic base color
2. **BreathingOrbsView** — 5 animated blurred gradient orbs with 6 color schemes
3. **QuantumFlowView** — Aurora borealis Canvas, 12 curtains with 9-stop gradients, additive blending
4. **CosmicBackgroundView** — Routes to 6 nebula presets, each with Canvas rendering, particle systems

Usage: `.cosmicBackground(preset:orbScheme:quantumScene:)` view modifier on any view.

### 5. Supported Languages

9 languages: English, Spanish, French, German, Italian, Portuguese, Polish, Czech, Catalan
7 built-in pairs, additional beta pairs via `EnabledBetaPair` SwiftData model.

### 6. No External Dependencies

The app uses only Apple frameworks:
- SwiftUI, SwiftData, Swift Charts
- AVAudioEngine (synthesized audio)
- UIKit (haptics via UIFeedbackGenerator)
- SF Symbols for all icons

## Conventions

- Use `@Observable` (iOS 17+) — NOT `ObservableObject`
- Use `@Query` in views that need SwiftData data
- All views use glassmorphic styling: `.ultraThinMaterial` backgrounds with rounded corners and subtle borders
- Colors use `Color(hex:)` extension
- Icon mapping: React's Lucide icons → SF Symbols via `SFSymbolMapping.map(_:)`
- Background modifier: `.cosmicBackground(preset:orbScheme:quantumScene:)`
- Glass card pattern: `RoundedRectangle(cornerRadius: 22).fill(.ultraThinMaterial)` with `.strokeBorder(.white.opacity(0.08))`

## Build & Test

```bash
# Open in Xcode
open LumenLingo.xcodeproj

# Build
xcodebuild -scheme LumenLingo -destination 'platform=iOS Simulator,name=iPhone 16' build

# Test
xcodebuild -scheme LumenLingo -destination 'platform=iOS Simulator,name=iPhone 16' test
```

## React Source Reference

The original React app lives at `../lumen-lingo-react/`. Key mappings:
- `src/pages/` → `Views/` (one-to-one page mapping)
- `src/components/background/` → `Views/Background/` (full-quality port)
- `src/components/data/` → `Resources/Content/` (JSON extraction)
- `src/components/utils/translations.jsx` → `Services/TranslationService.swift`
- `src/lib/AuthContext.jsx` → `Services/AuthService.swift`
