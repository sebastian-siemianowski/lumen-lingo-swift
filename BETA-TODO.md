# Remove Beta Languages Feature — Implementation Plan

## Context
All 25 language pairs now have full content parity (105 categories, 1,575 items each for grammar; full flashcards and wordbuilder).
The beta/built-in distinction is no longer needed — all pairs are first-class.

## Status Legend
- ⬜ Not started | 🔄 In progress | ✅ Complete

---

## Task 1: Model Layer — Remove beta/builtIn from `LanguagePair` (Enums.swift) ✅
**File:** `LumenLingo/Models/Enums.swift` (lines 290-330)

- ✅ Remove `static let builtIn: [LanguagePair]` (7-pair hardcoded array)
- ✅ Remove `static func isBuiltInKey(_ key: String) -> Bool`
- ✅ Remove `var isBuiltIn: Bool` computed property
- ✅ Keep `allAvailable` — it generates all source≠target combos
- ✅ Add `static let withContent: [LanguagePair]` — pairs that actually have bundled content (25 pairs)

## Task 2: Remove `EnabledBetaPair` SwiftData Model (DataModels.swift) ✅
**File:** `LumenLingo/Models/DataModels.swift` (lines 314-326)

- ✅ Delete the `// MARK: - Beta Language Pair (SwiftData)` section
- ✅ Delete `@Model final class EnabledBetaPair` and its init

## Task 3: Update App Entry Point (LumenLingoApp.swift) ✅
**File:** `LumenLingo/LumenLingoApp.swift` (line 24)

- ✅ Remove `EnabledBetaPair.self` from `.modelContainer(for:)` array

## Task 4: Simplify `LanguageSelectionViewModel` (ProfileViewModel.swift) ✅
**File:** `LumenLingo/ViewModels/ProfileViewModel.swift` (lines 96-158)

- ✅ Remove `enabledBetaPairs: Set<String>` property
- ✅ Simplify `availablePairs` — return all pairs with content (no beta filtering)
- ✅ Remove beta-pair loading from `loadCurrentPreference()` (UserDefaults `"enabled_beta_pairs"`)
- ✅ Remove `toggleBetaPair(_:)` method entirely

## Task 5: Rewrite `LanguageSelectionView` — Remove Beta Toggle & Merge Targets ✅
**File:** `LumenLingo/Views/LanguageSelection/LanguageSelectionView.swift` (lines 170-560)

- ✅ Remove `@Query private var betaPairs: [EnabledBetaPair]`
- ✅ Remove `@State private var showBeta = false`
- ✅ Replace `availableSources` — show all languages that have content as source (not just builtIn sources)
  - Old: filtered by `LanguagePair.builtIn.contains { $0.source == lang }` (only EN, ES, PL, DE)
  - New: all 9 languages (EN, ES, PL, DE, AR, ZH, FR, JA, UK) that appear as source in content
- ✅ Replace `builtInTargets` + `betaTargets` → single `availableTargets` showing all targets with content for selected source
- ✅ Remove `betaToggleSection` view
- ✅ Remove `betaTargetSection` view
- ✅ Remove `showBeta` animation wrapper
- ✅ Update `targetLanguageSection` to use unified `availableTargets`
- ✅ Update doc comment (remove "with beta-pair toggle")

## Task 6: Remove Beta Tab from ProfileView ✅
**File:** `LumenLingo/Views/Profile/ProfileView.swift`

- ✅ Remove `case beta = "Beta"` from `ProfileTab` enum (line 46)
- ✅ Remove `case .beta: return "flask.fill"` from `tabIcon(for:)` (line 288)
- ✅ Remove `case .beta: return L.beta` from `localizedTabName(_:)` (line 298)
- ✅ Remove `case .beta: betaTab` from `settingsContent` (lines 313-314)
- ✅ Remove `betaTab` computed property (lines 530-535)
- ✅ Update doc comment (line 7): "5 top-level tabs" → "4 top-level tabs", remove "Beta"

## Task 7: Delete `BetaLanguagesView.swift` ✅
**File:** `LumenLingo/Views/Profile/BetaLanguagesView.swift`

- ✅ Delete entire file (400 lines)

## Task 8: Clean Localization Strings ✅
**File:** `LumenLingo/Models/AppStrings.swift` + 9 localization files

### 8a: Remove from AppStrings struct:
- ✅ Remove `let betaLanguagePairs: String` (line 50)
- ✅ Remove `let showExperimentalPairs: String` (line 51)
- ✅ Remove `let beta: String` (line 132)
- ✅ Remove `let betaLanguages: String` (line 169)
- ✅ Remove `let experimentalLanguagePairs: String` (line 170)
- ✅ Remove `let experimentalFeatures: String` (line 171)
- ✅ Remove `let betaLimitedContent: String` (line 172)
- ✅ Remove Beta Languages section: `coreLanguages`, `alwaysOn`, `active`, `experimentalLanguagesSection`, `on`, `off`

### 8b: Remove matching values from all 9 localization files:
- ✅ AppStrings+English.swift
- ✅ AppStrings+Spanish.swift
- ✅ AppStrings+Polish.swift
- ✅ AppStrings+German.swift
- ✅ AppStrings+French.swift
- ✅ AppStrings+Ukrainian.swift
- ✅ AppStrings+Chinese.swift
- ✅ AppStrings+Japanese.swift
- ✅ AppStrings+Arabic.swift

## Task 9: Clean TranslationService ✅
**File:** `LumenLingo/Services/TranslationService.swift`

- ✅ Remove `"beta": "Beta"` (line 141)
- ✅ Remove `"beta_languages": "Beta Languages"` (line 154)
- ✅ Remove `"enable_beta": "Enable experimental language pairs"` (line 155)
- ✅ Remove `"beta_pair": "Beta"` (line 169)
- ✅ Remove `"built_in"` translation key

## Task 10: Update MembershipView ✅
**File:** `LumenLingo/Views/Membership/MembershipView.swift` (line 276)

- ✅ Change `["3 core", "7 core", "25+ beta", "25+ beta"]` → `["3 pairs", "12 pairs", "25 pairs", "25 pairs"]`

## Task 11: Build & Verify ✅
- ✅ Run `cd LumenLingo && xcodegen generate && xcodebuild -scheme LumenLingo -destination 'generic/platform=iOS Simulator' build`
- ✅ Verify no compile errors — **BUILD SUCCEEDED**
- ✅ Run tests — pre-existing test failures only (unrelated to beta removal: `pointsPerCorrect`, `startOfDay`, `chunked`, `formattedCompact`, `percentString`, `seededRandom`, `english_spanish` static member)

## Task 12: Cleanup ✅
- ✅ `BetaLanguagesView.swift` not listed in XcodeGen `project.yml` (uses folder references, auto-excluded)
- ⬜ Remove stale `"enabled_beta_pairs"` UserDefaults key on upgrade (optional — harmless leftover, deferred)

---

## Impact Summary
| Area | Before | After |
|------|--------|-------|
| Source Languages | 4 (EN, ES, PL, DE) | 9 (all) |
| Target Selection | Split: built-in visible + beta hidden behind toggle | Unified: all targets with content shown |
| Profile Tabs | 5 (Appearance, Sound, Beta, Sync, Sign Out) | 4 (Appearance, Sound, Sync, Sign Out) |
| LanguagePair model | `builtIn`, `isBuiltIn`, `isBuiltInKey` | `withContent`, `hasContent` |
| SwiftData models | 6 (includes EnabledBetaPair) | 5 |
| Deleted files | — | BetaLanguagesView.swift |
| Build result | — | ✅ BUILD SUCCEEDED |

## Files Modified (11) + Files Deleted (1)
1. ✅ `Models/Enums.swift`
2. ✅ `Models/DataModels.swift`
3. ✅ `LumenLingoApp.swift`
4. ✅ `ViewModels/ProfileViewModel.swift`
5. ✅ `Views/LanguageSelection/LanguageSelectionView.swift`
6. ✅ `Views/Profile/ProfileView.swift`
7. ✅ `Models/AppStrings.swift`
8. ✅ `Models/Localization/AppStrings+{English,Spanish,Polish,German,French,Ukrainian,Chinese,Japanese,Arabic}.swift` (9 files)
9. ✅ `Services/TranslationService.swift`
10. ✅ `Views/Membership/MembershipView.swift`
11. ✅ **DELETED** `Views/Profile/BetaLanguagesView.swift`
