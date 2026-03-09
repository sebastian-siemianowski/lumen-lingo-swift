# LumenLingo (Swift)

A native iOS language-learning app built with SwiftUI, ported from the React web version. Features flashcards, grammar quizzes, and word builder games with stunning cosmic-themed backgrounds.

## Requirements

- **Xcode 15+** (tested with Xcode 16)
- **iOS 17.0+** deployment target
- **[XcodeGen](https://github.com/yonaskolb/XcodeGen)** for project generation

Install XcodeGen via Homebrew if you don't have it:

```bash
brew install xcodegen
```

## Getting Started

1. **Generate the Xcode project:**

   ```bash
   cd LumenLingo
   xcodegen generate
   ```

2. **Open in Xcode:**

   ```bash
   open LumenLingo.xcodeproj
   ```

3. **Select a simulator** (iPhone or iPad) and press **⌘R** to build and run.

### Command-line build

```bash
cd LumenLingo
xcodebuild -scheme LumenLingo \
  -destination 'platform=iOS Simulator,name=iPhone 17' \
  build
```

Replace `iPhone 17` with whatever simulator is available on your system. List available destinations with:

```bash
xcodebuild -scheme LumenLingo -showdestinations
```

### Running tests

```bash
xcodebuild -scheme LumenLingo \
  -destination 'platform=iOS Simulator,name=iPhone 17' \
  test
```

## Project Structure

```
LumenLingo/
├── project.yml                 # XcodeGen spec
├── LumenLingo/
│   ├── LumenLingoApp.swift     # App entry point
│   ├── Models/                 # Enums, SwiftData models, content models
│   ├── Services/               # Auth, content loading, progress, audio, haptics
│   ├── ViewModels/             # MVVM view models
│   ├── Views/
│   │   ├── ContentView.swift   # Root tab navigation
│   │   ├── Dashboard/          # Main landing screen
│   │   ├── Games/              # FlashCards, Grammar, WordBuilder
│   │   ├── Categories/         # Category selection
│   │   ├── Background/         # Cosmic nebula/galaxy backgrounds
│   │   ├── Journey/            # Progress & stats
│   │   ├── Profile/            # User settings
│   │   ├── LanguageSelection/  # Source/target language picker
│   │   └── Membership/         # Membership tiers
│   ├── Extensions/             # Color, Date, View helpers
│   └── Resources/
│       └── Content/            # Bundled JSON content per language pair
└── LumenLingoTests/            # Unit tests
```

## Architecture

- **SwiftUI + MVVM** with `@Observable` (iOS 17+)
- **SwiftData** for persistence (progress, favorites, settings)
- **No external dependencies** — fully native stack
- **Mock authentication** — hardcoded user for development (Sebastian / sebastian@test.com)
- **JSON-bundled content** per language pair (e.g. `english_spanish/flashcards.json`)

## Notes

- The `.xcodeproj` is generated and not checked in. Always run `xcodegen generate` after cloning.
- To add a Development Team for device builds, set `DEVELOPMENT_TEAM` in [project.yml](LumenLingo/project.yml).
