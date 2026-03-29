# Environment Configuration — Product Specification

> **Owner:** Product Engineering  
> **Status:** Ready for Development  
> **Priority:** P1 — Foundation  
> **Last Updated:** 2026-03-22  

---

## Overview

LumenLingo currently ships as a single build variant with no distinction between development, testing, and production environments. As the product moves toward backend integration, analytics, and staged rollouts, we need a robust multi-environment build pipeline that allows engineers, QA, and release managers to build, test, and ship confidently across five distinct environments.

Each environment must produce a **separately installable** app on the same device (unique bundle ID + display name suffix) so that team members can run Dev, QA, and Prod side-by-side without conflicts.

---

## Environments

| Environment | Short Code | Purpose | Audience |
|-------------|-----------|---------|----------|
| Development | `dev` | Local development, rapid iteration, verbose logging | Engineers |
| QA | `qa` | Manual & automated testing, test backends | QA Team |
| UAT | `uat` | User acceptance, stakeholder demos, near-prod data | Product, Stakeholders |
| Pre-Production | `preprod` | Final validation mirror of prod, release candidates | Release Engineering |
| Production | `prod` | App Store release, real users, real data | End Users |

---

## Epic 1 — XCConfig Foundation

**Goal:** Establish the xcconfig file hierarchy and integrate it with XcodeGen so that each build configuration resolves the correct settings without manual Xcode project editing.

### Story 1.1 — Create Base XCConfig Files

**As a** developer  
**I want** a shared base xcconfig file with common build settings  
**So that** environment-specific configs only override what differs.

**Acceptance Criteria:**

1. A file `Config/Base.xcconfig` exists containing all shared build settings:
   - `SWIFT_VERSION = 6.0`
   - `IPHONEOS_DEPLOYMENT_TARGET = 18.0`
   - `SWIFT_STRICT_CONCURRENCY = complete`
   - `MARKETING_VERSION = 1.0.0`
   - `CURRENT_PROJECT_VERSION = 1`
   - `PRODUCT_NAME = LumenLingo`
   - `DEVELOPMENT_TEAM = (empty, filled per-developer)`
   - Common compiler flags, asset catalog settings
2. The base file uses no hardcoded bundle identifier — that is set per-environment.
3. The file is well-commented with section markers.

### Story 1.2 — Create Per-Environment Debug XCConfig Files

**As a** developer  
**I want** separate xcconfig files for Dev, QA, UAT, PreProd, and Prod debug builds  
**So that** debug builds for each environment have correct identifiers and settings.

**Acceptance Criteria:**

1. Files exist at:
   - `Config/Dev-Debug.xcconfig`
   - `Config/QA-Debug.xcconfig`
   - `Config/UAT-Debug.xcconfig`
   - `Config/PreProd-Debug.xcconfig`
   - `Config/Prod-Debug.xcconfig`
2. Each file includes `Base.xcconfig` via `#include "Base.xcconfig"`.
3. Each file sets these environment-specific values:

| Setting | Dev | QA | UAT | PreProd | Prod |
|---------|-----|----|-----|---------|------|
| `PRODUCT_BUNDLE_IDENTIFIER` | `com.lumenshore.lumenlingo.dev` | `com.lumenshore.lumenlingo.qa` | `com.lumenshore.lumenlingo.uat` | `com.lumenshore.lumenlingo.preprod` | `com.lumenshore.lumenlingo` |
| `PRODUCT_NAME` | `LL Dev` | `LL QA` | `LL UAT` | `LL PreProd` | `LumenLingo` |
| `ASSETCATALOG_COMPILER_APPICON_NAME` | `AppIcon-Dev` | `AppIcon-QA` | `AppIcon-UAT` | `AppIcon-PreProd` | `AppIcon` |
| `LL_ENVIRONMENT` | `dev` | `qa` | `uat` | `preprod` | `prod` |
| `LL_API_BASE_URL` | `https://api-dev.lumenlingo.com` | `https://api-qa.lumenlingo.com` | `https://api-uat.lumenlingo.com` | `https://api-preprod.lumenlingo.com` | `https://api.lumenlingo.com` |
| `LL_LOG_LEVEL` | `verbose` | `debug` | `info` | `warning` | `error` |
| `DEBUG_INFORMATION_FORMAT` | `dwarf` | `dwarf` | `dwarf` | `dwarf-with-dsym` | `dwarf-with-dsym` |
| `SWIFT_OPTIMIZATION_LEVEL` | `-Onone` | `-Onone` | `-Onone` | `-Onone` | `-Onone` |
| `SWIFT_ACTIVE_COMPILATION_CONDITIONS` | `DEBUG DEV` | `DEBUG QA` | `DEBUG UAT` | `DEBUG PREPROD` | `DEBUG` |

4. All debug configs disable optimisation (`-Onone`) and enable debug info.

### Story 1.3 — Create Per-Environment Release XCConfig Files

**As a** release engineer  
**I want** release xcconfig files for each environment  
**So that** optimized, distributable builds are configured correctly.

**Acceptance Criteria:**

1. Files exist at:
   - `Config/Dev-Release.xcconfig`
   - `Config/QA-Release.xcconfig`
   - `Config/UAT-Release.xcconfig`
   - `Config/PreProd-Release.xcconfig`
   - `Config/Prod-Release.xcconfig`
2. Each includes `Base.xcconfig`.
3. Release configs set:

| Setting | All Release Configs |
|---------|-------------------|
| `SWIFT_OPTIMIZATION_LEVEL` | `-O` (Dev/QA: `-Onone` to aid debugging) |
| `SWIFT_COMPILATION_MODE` | `wholemodule` |
| `DEBUG_INFORMATION_FORMAT` | `dwarf-with-dsym` |
| `VALIDATE_PRODUCT` | `YES` |
| `SWIFT_ACTIVE_COMPILATION_CONDITIONS` | env-specific flag only (no `DEBUG`): `DEV`, `QA`, `UAT`, `PREPROD`, `PROD` |

4. Prod-Release additionally sets `ENABLE_TESTABILITY = NO`.
5. Bundle identifiers, display names, and API URLs match their debug counterparts.

### Story 1.4 — Integrate XCConfigs with XcodeGen

**As a** developer  
**I want** `project.yml` to reference the xcconfig files properly  
**So that** running `xcodegen generate` produces a project with all 10 build configurations.

**Acceptance Criteria:**

1. `project.yml` defines 10 configurations under `configs:`:
   - `Dev-Debug`, `Dev-Release`
   - `QA-Debug`, `QA-Release`
   - `UAT-Debug`, `UAT-Release`
   - `PreProd-Debug`, `PreProd-Release`
   - `Prod-Debug`, `Prod-Release`
2. Each configuration maps `type: debug` or `type: release` correctly.
3. After `xcodegen generate`, the `.xcodeproj` contains all 10 configurations.
4. Each configuration points to the correct `.xcconfig` file.
5. The default configuration for the scheme's Run action is `Dev-Debug`.
6. The default configuration for the scheme's Archive action is `Prod-Release`.

---

## Epic 2 — Build Schemes

**Goal:** Create per-environment Xcode schemes so engineers can switch environments from the scheme picker without editing build settings.

### Story 2.1 — Create Per-Environment Schemes

**As a** developer  
**I want** a dedicated Xcode scheme for each environment  
**So that** I can switch between Dev, QA, UAT, PreProd, and Prod from the scheme menu.

**Acceptance Criteria:**

1. Five shared schemes are defined in `project.yml`:
   - `LumenLingo-Dev`
   - `LumenLingo-QA`
   - `LumenLingo-UAT`
   - `LumenLingo-PreProd`
   - `LumenLingo-Prod`
2. Each scheme maps build actions to the correct configuration:

| Scheme | Run | Test | Profile | Analyze | Archive |
|--------|-----|------|---------|---------|---------|
| Dev | Dev-Debug | Dev-Debug | Dev-Release | Dev-Debug | Dev-Release |
| QA | QA-Debug | QA-Debug | QA-Release | QA-Debug | QA-Release |
| UAT | UAT-Debug | UAT-Debug | UAT-Release | UAT-Debug | UAT-Release |
| PreProd | PreProd-Debug | PreProd-Debug | PreProd-Release | PreProd-Debug | PreProd-Release |
| Prod | Prod-Debug | Prod-Debug | Prod-Release | Prod-Debug | Prod-Release |

3. Each scheme's Run action sets `LL_ENVIRONMENT` as a launch environment variable.
4. The old `LumenLingo` scheme is removed.
5. All schemes are checked into source control (`xcshareddata/xcschemes/`).

### Story 2.2 — Verify Side-by-Side Installation

**As a** QA engineer  
**I want** to install Dev, QA, and Prod builds simultaneously on a single device  
**So that** I can compare behaviour across environments.

**Acceptance Criteria:**

1. Building and running `LumenLingo-Dev` and `LumenLingo-Prod` on the same simulator produces two separate app icons.
2. Each app shows its environment-specific display name (`LL Dev`, `LumenLingo`).
3. Each app uses its own sandbox (separate SwiftData stores, UserDefaults).
4. Uninstalling one does not affect the other.

---

## Epic 3 — Runtime Environment Service

**Goal:** Provide a type-safe Swift service that exposes environment-specific configuration at runtime, sourced from Info.plist values injected by xcconfig.

### Story 3.1 — Info.plist Bridge Keys

**As a** developer  
**I want** custom keys in Info.plist that resolve to xcconfig variables  
**So that** the app can read environment values at runtime.

**Acceptance Criteria:**

1. `Info.plist` contains these keys with `$(...)` variable references:
   - `LLEnvironment` → `$(LL_ENVIRONMENT)`
   - `LLApiBaseURL` → `$(LL_API_BASE_URL)`
   - `LLLogLevel` → `$(LL_LOG_LEVEL)`
2. At runtime, `Bundle.main.infoDictionary?["LLEnvironment"]` returns `"dev"`, `"qa"`, etc.
3. No secrets or tokens are stored in Info.plist or xcconfig.

### Story 3.2 — AppEnvironment Enum & Configuration Struct

**As a** developer  
**I want** a strongly-typed `AppEnvironment` enum and `EnvironmentConfig` struct  
**So that** I can safely branch logic based on the current environment.

**Acceptance Criteria:**

1. An `AppEnvironment` enum exists with cases: `.dev`, `.qa`, `.uat`, `.preprod`, `.prod`.
2. An `EnvironmentConfig` struct exposes:
   - `environment: AppEnvironment`
   - `apiBaseURL: URL`
   - `logLevel: LogLevel`
   - `isDebugBuild: Bool`
   - `displayName: String`
   - `bundleIdentifier: String`
3. A static `EnvironmentConfig.current` property reads from `Bundle.main.infoDictionary`.
4. If the plist values are missing or malformed, it defaults to `.dev` with a logged warning.
5. The struct conforms to `Sendable`.

### Story 3.3 — Environment Banner in Debug Builds

**As a** QA engineer  
**I want** a visible environment indicator on non-production builds  
**So that** I always know which environment I'm testing against.

**Acceptance Criteria:**

1. A `DebugEnvironmentBanner` view is shown at the top of the screen on all non-prod builds.
2. The banner displays the environment name and short API host (e.g., "DEV — api-dev.lumenlingo.com").
3. The banner is colour-coded:
   - Dev: 🟢 Green
   - QA: 🔵 Blue
   - UAT: 🟠 Orange
   - PreProd: 🟡 Yellow
   - Prod: Hidden
4. The banner can be dismissed with a tap (session-only; reappears on next launch).
5. The banner is never compiled into Prod-Release builds (guarded by compilation condition).

---

## Epic 4 — Logging Infrastructure

**Goal:** Introduce environment-aware logging that respects the `LL_LOG_LEVEL` setting, replacing ad-hoc `print()` statements.

### Story 4.1 — Unified Logger

**As a** developer  
**I want** a unified logging service that filters by environment log level  
**So that** verbose logs appear in Dev but not in Prod.

**Acceptance Criteria:**

1. A `Log` enum provides static methods: `.verbose()`, `.debug()`, `.info()`, `.warning()`, `.error()`.
2. Each method checks against `EnvironmentConfig.current.logLevel` before emitting.
3. Uses Apple's `os.Logger` under the hood with the subsystem set to the bundle identifier.
4. In `prod`, only `.error` level logs are emitted.
5. Log output includes: `[ENV] [LEVEL] [Subsystem] message`.
6. No sensitive data (tokens, passwords, PII) is ever logged — enforced by code review convention documented in this spec.

---

## Epic 5 — Visual Environment Differentiation

**Goal:** Make it visually obvious which environment a build targets, even from the home screen.

### Story 5.1 — Per-Environment App Icons

**As a** QA engineer  
**I want** each environment to have a distinct app icon overlay  
**So that** I can instantly identify builds on my device home screen.

**Acceptance Criteria:**

1. Asset catalogue contains icon sets:
   - `AppIcon` — Production (current icon, unchanged).
   - `AppIcon-Dev` — Production icon with green "DEV" banner overlay.
   - `AppIcon-QA` — Production icon with blue "QA" banner overlay.
   - `AppIcon-UAT` — Production icon with orange "UAT" banner overlay.
   - `AppIcon-PreProd` — Production icon with yellow "PRE" banner overlay.
2. Each xcconfig's `ASSETCATALOG_COMPILER_APPICON_NAME` selects the correct set.
3. **Stretch:** A build script generates overlaid icons automatically from the base icon.

### Story 5.2 — Launch Screen Environment Indicator

**As a** tester  
**I want** the launch / splash screen to show the environment name  
**So that** I confirm the correct build before the app fully loads.

**Acceptance Criteria:**

1. Non-production builds show a small environment label below the app logo during launch.
2. Production builds show no extra text.
3. The label reads: "Development", "QA", "UAT", or "Pre-Production".
4. Styling is subtle (60% opacity, small font) to avoid visual clutter.

---

## Epic 6 — CI/CD Integration Hooks

**Goal:** Ensure the multi-environment setup is CI-friendly and automatable.

### Story 6.1 — XcodeGen in Build Pipeline

**As a** CI engineer  
**I want** `xcodegen generate` to run before every CI build  
**So that** the project file is always in sync with `project.yml`.

**Acceptance Criteria:**

1. A `Makefile` or `scripts/build.sh` exists with targets:
   - `make generate` — runs `xcodegen generate`
   - `make build-dev` — generates + builds Dev-Debug
   - `make build-qa` — generates + builds QA-Debug
   - `make build-prod` — generates + builds Prod-Release
   - `make test` — generates + runs tests against Dev-Debug
2. CI scripts use these make targets instead of raw `xcodebuild`.
3. The `.xcodeproj` is excluded from git (or regenerated on every CI run) — documented decision in README.

### Story 6.2 — Scheme-Based Archive Commands

**As a** release engineer  
**I want** documented `xcodebuild archive` commands per environment  
**So that** I can produce distributable archives for TestFlight and App Store.

**Acceptance Criteria:**

1. Documentation (README or this spec) includes exact `xcodebuild` commands for:
   - Dev archive (for internal testing via TestFlight)
   - QA archive (for QA TestFlight group)
   - Prod archive (for App Store submission)
2. Each command references the correct scheme and configuration.
3. Export options plists exist for `development`, `ad-hoc`, and `app-store` distribution.

---

## Non-Functional Requirements

| Requirement | Detail |
|-------------|--------|
| **No secrets in source** | API keys, tokens, and credentials must never appear in xcconfig files or source. Use CI injection or Keychain at runtime. |
| **Backward compatibility** | Existing UserDefaults / SwiftData data must not be lost. Migration path documented if bundle ID changes affect data. |
| **Build time** | Adding configurations must not increase clean build time by more than 5%. |
| **Single source of truth** | `project.yml` + xcconfigs are the source of truth. Never edit `.xcodeproj` directly. |
| **Documentation** | Every xcconfig variable is documented in this spec and in the base config file. |

---

## Rollout Plan

| Phase | Stories | Milestone |
|-------|---------|-----------|
| **Phase 1 — Foundation** | 1.1, 1.2, 1.3, 1.4 | xcconfig hierarchy in place, XcodeGen generates 10 configs |
| **Phase 2 — Schemes** | 2.1, 2.2 | Developers can build any environment from scheme picker |
| **Phase 3 — Runtime** | 3.1, 3.2, 3.3 | App reads its environment at runtime, banner visible |
| **Phase 4 — Logging** | 4.1 | Unified logger replaces print statements |
| **Phase 5 — Visual** | 5.1, 5.2 | Distinct icons and launch screen per environment |
| **Phase 6 — CI/CD** | 6.1, 6.2 | Automated builds and archives per environment |

---

## Appendix A — XCConfig Variable Reference

| Variable | Type | Example | Description |
|----------|------|---------|-------------|
| `LL_ENVIRONMENT` | String | `dev` | Runtime environment identifier |
| `LL_API_BASE_URL` | URL String | `https://api-dev.lumenlingo.com` | Backend API root |
| `LL_LOG_LEVEL` | String | `verbose` | Minimum log level for this build |
| `PRODUCT_BUNDLE_IDENTIFIER` | String | `com.lumenshore.lumenlingo.dev` | Unique per-environment bundle ID |
| `PRODUCT_NAME` | String | `LL Dev` | Display name on home screen |
| `ASSETCATALOG_COMPILER_APPICON_NAME` | String | `AppIcon-Dev` | Icon set name in asset catalogue |

## Appendix B — Environment Colour Tokens

| Environment | Hex | SwiftUI | Usage |
|-------------|-----|---------|-------|
| Dev | `#34D399` | `Color.green` | Banner, icon overlay |
| QA | `#60A5FA` | `Color.blue` | Banner, icon overlay |
| UAT | `#FB923C` | `Color.orange` | Banner, icon overlay |
| PreProd | `#FBBF24` | `Color.yellow` | Banner, icon overlay |
| Prod | — | — | No indicator shown |
