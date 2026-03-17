# Epic: PDF Preview & Export — Luxury Experience Overhaul

> **Document Owner:** Product (Craftsman PO)  
> **UX Lead:** Senior Staff Designer — 30 years experience  
> **Last Updated:** 2026-03-17  
> **Status:** Ready for Engineering  
> **Priority:** P1  
> **Estimated Stories:** 12  
> **Estimated Subtasks:** 78  
> **Target Release:** v1.6  

---

## Executive Summary

The PDF preview and saved-report experience is currently *functional*. Functional is the enemy of lovable. A Royal-tier user paying £99.99/month deserves a moment of genuine delight every time they tap that PDF button — not a utilitarian preview window that feels like an afterthought bolted onto a file manager.

This epic transforms the PDF preview from a "technical viewer" into a **curated presentation moment** — a cinematic reveal, an interactive document experience, and a sharing flow that makes users *want* to show their progress to friends, tutors, and social followers. Every micro-interaction is designed to communicate: *your learning matters, and this report proves it.*

### Design Philosophy

After 30 years of shipping consumer products, I can tell you with certainty: **the last 10% of polish creates 90% of the emotional response.** Users don't consciously notice perfect transitions, but they *feel* them. They don't analyze spacing ratios, but they *trust* layouts that breathe. They can't articulate why one share flow feels premium and another feels cheap — but they'll screenshot the premium one and ignore the other.

This epic is that last 10%.

---

## Current State Analysis

### What Exists Today

| Component | File | State |
|---|---|---|
| Export Widget | `Views/Journey/ExportDataWidget.swift` | 2×2 grid of format cards, tier-gated |
| PDF Preview | `PDFPreviewView` (same file, L427–474) | Full-screen cover, bare `PDFKit.PDFView` wrapper |
| PDF Renderer | `Services/DataExporter.swift` (`PDFReportBuilder`) | Core Graphics engine, multi-page, tier-branded cards |
| Share Flow | `UIActivityViewController` via temp file in Caches | Standard iOS share sheet, no custom UI |
| Achievement Card | `SharableAchievementCard` (same file, L499+) | 1080×1080 SwiftUI-rendered PNG |

### Pain Points Identified

1. **No anticipation.** Tapping "PDF" jumps straight to a loading spinner → raw PDFKit view. There's no build-up, no reveal, no moment of "wow."
2. **Preview feels foreign.** The `PDFKitView` wrapper uses system defaults — gray background, no branded chrome, no contextual actions. It looks like QuickLook, not LumenLingo.
3. **No page navigation.** Multi-page PDFs have no page indicator, no thumbnail rail, no way to jump to a section.
4. **Share flow is generic.** `UIActivityViewController` is a black box. Users see the iOS share sheet with no branding, no suggested actions, no "Save to Files" prominence.
5. **No success confirmation.** After sharing or saving, the user gets… nothing. No animation, no confirmation, no "your report is ready" moment.
6. **No save-to-device shortcut.** Users who want to save the PDF to Files must navigate the share sheet. There should be a direct "Save" button.
7. **Loading state is anemic.** A single `ProgressView()` with "Generating your report…" doesn't communicate progress or maintain engagement.
8. **No dark/light preview toggle.** The PDF is generated in one color mode. Users can't preview how it looks in the opposite mode before sharing.
9. **Achievement card is disconnected.** It lives in the same widget but has no visual relationship to the PDF flow. Users don't understand they can share *both*.
10. **No haptic feedback.** Premium interactions should have tactile punctuation — taps, success confirmations, page turns.

---

## Design Principles for This Epic

| # | Principle | Implication |
|---|---|---|
| 1 | **Ceremony over speed** | A 0.6s cinematic reveal is worth more than a 0.1s instant appearance. Premium users don't need to export 50 PDFs — they need one perfect moment. |
| 2 | **Context, not chrome** | Every UI element in the preview must serve the document. Toolbars should auto-hide. Actions should be contextual. |
| 3 | **Branded, not generic** | The share sheet, the save confirmation, the preview background — every surface should say "LumenLingo." |
| 4 | **Tactile precision** | Every button press, page turn, and state change should have haptic feedback calibrated to its emotional weight. |
| 5 | **Progressive disclosure** | Show the most important action first (Share), reveal secondary actions on demand (Save, Print, Theme Toggle). |
| 6 | **Delight in completion** | The moment after saving/sharing is the most emotional. Celebrate it. |

---

## Story Map

```
┌─────────────────────────────────────────────────────────────────────┐
│                        PDF EXPERIENCE JOURNEY                       │
├──────────┬───────────┬───────────┬──────────┬───────────┬───────────┤
│  TRIGGER │  GENERATE │  PREVIEW  │ NAVIGATE │   SHARE   │  CONFIRM  │
│          │           │           │          │           │           │
│ Tap PDF  │ Skeleton  │ Cinematic │ Page     │ Branded   │ Success   │
│ card in  │ loading   │ reveal    │ thumbs   │ share     │ animation │
│ widget   │ with      │ with      │ & page   │ sheet     │ & haptic  │
│          │ progress  │ zoom-in   │ counter  │ with      │ confirm   │
│          │ stages    │ animation │ & swipe  │ shortcuts │ & return  │
│          │           │           │          │           │           │
│ Story 1  │ Story 2   │ Story 3   │ Story 4  │ Story 5   │ Story 6   │
└──────────┴───────────┴───────────┴──────────┴───────────┴───────────┘
```

---

## Story 1 — Cinematic PDF Generation with Skeleton Loading

**As a** Royal-tier user who tapped the PDF export button,  
**I want** to see an engaging, stage-based loading experience while my report generates,  
**So that** I feel the app is crafting something valuable for me, not just spinning a wheel.

**Priority:** P0  
**Points:** 5  
**Files:** `ExportDataWidget.swift`, `PDFPreviewView` (new: `PDFGeneratingView.swift`)

### UX Rationale

The current loading state is a single `ProgressView()` with the text "Generating your report…" This communicates *nothing*. The user doesn't know if it's 10% done or 90% done, and the lack of visual stimulation during a 0.5–2s wait makes the app feel slow and indifferent.

A skeleton loading view with progressive stage labels transforms waiting time into anticipation. Each stage label reassures the user that work is happening ("Analyzing your sessions…", "Building your charts…", "Applying your tier theme…"). The skeleton pulses with the user's tier gradient, reinforcing brand identity even during a loading state.

### Acceptance Criteria

- [ ] **AC 1.1** — When PDF generation starts, a `PDFGeneratingView` replaces the blank/spinner state inside the full-screen cover.
- [ ] **AC 1.2** — The generating view shows a US Letter–shaped skeleton placeholder (correct 8.5:11 aspect ratio) centered on screen with 24pt horizontal padding.
- [ ] **AC 1.3** — The skeleton has 5 shimmer blocks mimicking the real PDF layout: header bar (full width, 40pt tall), summary row (4 small blocks), two chart areas (half width each), and a table area (full width, multiple thin lines).
- [ ] **AC 1.4** — Shimmer blocks pulse with a diagonal gradient sweep animation using the user's tier gradient colors at 15% opacity, cycling every 1.2 seconds.
- [ ] **AC 1.5** — Below the skeleton, a stage label cycles through 4 messages with crossfade transitions (0.3s each):
  - Stage 1 (0.0s): "Analyzing your sessions…"
  - Stage 2 (0.4s): "Building your charts…"
  - Stage 3 (0.8s): "Applying your theme…"
  - Stage 4 (1.2s): "Polishing the details…"
- [ ] **AC 1.6** — Each stage transition triggers a `UIImpactFeedbackGenerator(style: .light)` tap.
- [ ] **AC 1.7** — When PDF data arrives, the skeleton does NOT abruptly disappear. Instead, it holds for at least 1.5s total (even if generation was faster) to prevent a jarring flash.
- [ ] **AC 1.8** — The skeleton view smoothly crossfades (0.4s) into the cinematic reveal (Story 3).
- [ ] **AC 1.9** — A subtle tier-gradient progress bar appears at the bottom of the skeleton, filling from 0% to 100% over the generation duration. It uses `CADisplayLink` or `TimelineView` for smooth animation.
- [ ] **AC 1.10** — VoiceOver announces each stage label change for accessibility.

### Subtasks

- [ ] **1.1** — Create `PDFGeneratingView.swift` under `Views/Journey/` with skeleton layout matching PDF page proportions.
- [ ] **1.2** — Implement diagonal shimmer animation using `GeometryReader` + offset mask with `LinearGradient`.
- [ ] **1.3** — Build stage label cycling system with `Timer.publish(every: 0.4)` and animated text swap.
- [ ] **1.4** — Add tier-gradient progress bar component with smooth fill animation.
- [ ] **1.5** — Integrate minimum display time logic (1.5s floor) in `startPDFPreview()`.
- [ ] **1.6** — Add haptic feedback (`UIImpactFeedbackGenerator`) for each stage transition.
- [ ] **1.7** — Wire `PDFGeneratingView` into `PDFPreviewView` as the initial state before PDF data is available.
- [ ] **1.8** — Add VoiceOver `accessibilityLabel` updates for stage transitions.
- [ ] **1.9** — Test on iPhone SE (3rd gen) — verify skeleton renders correctly on smallest supported screen.
- [ ] **1.10** — Test with Reduce Motion enabled — disable shimmer animation, show static skeleton with stage labels only.

---

## Story 2 — Cinematic Document Reveal Animation

**As a** user whose PDF report has finished generating,  
**I want** to see my document appear with a premium reveal animation,  
**So that** the moment feels like an unveiling rather than a file loading.

**Priority:** P0  
**Points:** 5  
**Files:** `PDFPreviewView`, `PDFGeneratingView.swift`

### UX Rationale

In luxury product design, the "unboxing" moment is sacred. Apple understood this when they designed the iPhone setup experience. Dyson understood it when their vacuum arrives in a magnetically sealed box. The reveal of a generated PDF should carry the same energy at a micro-interaction scale.

The skeleton transforms into the real document via a choreographed 3-phase animation: (1) the skeleton blocks coalesce into the real page shape, (2) the page scales from 92% to 100% with a spring curve, (3) the tier border and toolbar elements fade in with staggered delays. Total reveal time: 0.8s. It's enough to feel intentional, short enough to never feel slow.

### Acceptance Criteria

- [ ] **AC 2.1** — The reveal animation consists of 3 sequential phases:
  - **Phase 1** (0–0.25s): Skeleton blocks fade to 0% opacity while a white/dark page shape fades to 100%.
  - **Phase 2** (0.15–0.55s): The PDF page scales from 0.92 → 1.0 with `spring(response: 0.4, dampingFraction: 0.75)`.
  - **Phase 3** (0.4–0.8s): Toolbar items (Close, Share, page counter) fade in with staggered 0.05s delays.
- [ ] **AC 2.2** — A `UIImpactFeedbackGenerator(style: .medium)` fires at t=0.25s (when the document first appears).
- [ ] **AC 2.3** — After the reveal completes, a subtle tier-colored glow pulses once around the document (0.6s duration, 0 → 8pt blur → 0, tier primary color at 20% opacity).
- [ ] **AC 2.4** — The animation respects `UIAccessibility.isReduceMotionEnabled`: if true, skip all animations and show the document immediately with a simple 0.2s fade-in.
- [ ] **AC 2.5** — The animation plays only on initial reveal. Dismissing and reopening the preview (if PDF data is cached) skips the animation and shows the document directly.
- [ ] **AC 2.6** — The document page in the reveal has a 1pt tier-gradient border and a 4pt shadow (0.12 opacity, 0,2 offset, 8 blur) matching the card language from the PDF report itself.

### Subtasks

- [ ] **2.1** — Implement `RevealAnimationModifier` as a custom `ViewModifier` with 3-phase `withAnimation` sequencing.
- [ ] **2.2** — Add spring-scale animation with precise timing parameters to the `PDFKitView` wrapper.
- [ ] **2.3** — Implement tier glow pulse effect using `overlay` with animated `shadow` modifier.
- [ ] **2.4** — Add Reduce Motion check (`UIAccessibility.isReduceMotionEnabled`) with graceful fallback.
- [ ] **2.5** — Track `hasRevealedOnce` state in `PDFPreviewView` to skip animation on re-open.
- [ ] **2.6** — Add staggered toolbar fade-in using `transition(.opacity.animation(.easeOut(duration: 0.3).delay(stagger)))`.
- [ ] **2.7** — Add tier-gradient border to the PDF document view container.
- [ ] **2.8** — Coordinate haptic timing with `DispatchQueue.main.asyncAfter` at t=0.25s.

---

## Story 3 — Premium Preview Chrome & Immersive Background

**As a** user previewing my PDF report,  
**I want** the preview environment to feel immersive and branded rather than like a raw file viewer,  
**So that** the entire experience reinforces the premium quality of my membership.

**Priority:** P0  
**Points:** 8  
**Files:** `PDFPreviewView` (rewrite), new: `PDFPreviewToolbar.swift`

### UX Rationale

The current `PDFPreviewView` uses `NavigationStack` with a system toolbar — "Cancel" on the left, a share icon on the right, and a bare `PDFKitView` filling the remaining space. The background is either black or `systemGroupedBackground`. This is what every PDF viewer on iOS looks like. It communicates nothing about the brand.

Premium preview chrome means: a subtly blurred tier-gradient background behind the document, a custom floating toolbar that auto-hides when the user is scrolling/reading, contextual actions that appear as floating pills rather than toolbar buttons, and a page info overlay that shows current page / total pages in a branded capsule.

The goal is this: when a user screenshots the preview and posts it, people should *know* it's LumenLingo without reading a single word.

### Acceptance Criteria

- [ ] **AC 3.1** — The preview background is a tier-gradient mesh at 6% opacity (light mode) or 10% opacity (dark mode), with a subtle 40pt Gaussian blur. Not a solid color.
- [ ] **AC 3.2** — The system `NavigationStack` toolbar is replaced with a custom floating toolbar at the top:
  - Left: Close button (×) in a frosted circle (32×32pt, `ultraThinMaterial`, 0.9 opacity).
  - Center: "Learning Report" title in 13pt semibold, kern 0.5, only visible when toolbar is shown.
  - Right: Share button (arrow.up) in a matching frosted circle.
- [ ] **AC 3.3** — The toolbar auto-hides after 3 seconds of no interaction. A single tap on the document area toggles toolbar visibility with a 0.25s ease-in-out animation.
- [ ] **AC 3.4** — When toolbar is hidden, the safe area is fully reclaimed — the document expands to fill the full screen height for maximum reading area.
- [ ] **AC 3.5** — A floating page indicator capsule appears at the bottom center: "{current} of {total}" in 11pt medium, inside a frosted capsule (ultraThinMaterial). It auto-hides 2s after the last page change.
- [ ] **AC 3.6** — Page changes (detected via `PDFView.visiblePages` observation) trigger a `UISelectionFeedbackGenerator` tap.
- [ ] **AC 3.7** — The document has 16pt inset from screen edges, with a 1pt tier-gradient border and a shadow matching AC 2.6.
- [ ] **AC 3.8** — Double-tap to zoom works (PDFKit default). Pinch-to-zoom works. When zoomed in beyond 1.5×, the toolbar auto-hides to maximize content area.
- [ ] **AC 3.9** — On iPad, the document is centered in a max-width container (650pt) with the gradient background extending to edges.
- [ ] **AC 3.10** — Status bar adopts the appropriate style (light content on dark backgrounds, dark content on light).

### Subtasks

- [ ] **3.1** — Replace `NavigationStack` with a custom `ZStack` layout (background → document → floating toolbar).
- [ ] **3.2** — Create tier-gradient mesh background view with blur and opacity parameters.
- [ ] **3.3** — Build `PDFPreviewToolbar` as extracted view with close, title, and share slots.
- [ ] **3.4** — Implement auto-hide timer using `Task.sleep(for: .seconds(3))` with cancellation on interaction.
- [ ] **3.5** — Add tap gesture recognizer for toolbar toggle (exclude `PDFView` scroll/zoom gestures).
- [ ] **3.6** — Create floating page indicator capsule with `ultraThinMaterial` background.
- [ ] **3.7** — Implement `PDFView` page change observation via `NotificationCenter` (`PDFViewPageChanged`).
- [ ] **3.8** — Add document container with tier-gradient border and shadow.
- [ ] **3.9** — Add Reduce Motion support: disable auto-hide, keep toolbar always visible.
- [ ] **3.10** — Add iPad max-width container with `ViewThatFits` or `frame(maxWidth:)`.
- [ ] **3.11** — Configure status bar style via `preferredStatusBarStyle` override.
- [ ] **3.12** — Test toolbar auto-hide/show cycle 20 times for timing race conditions.

---

## Story 4 — Page Thumbnail Rail & Section Jump

**As a** user viewing a multi-page PDF report,  
**I want** to see page thumbnails and jump to specific sections,  
**So that** I can navigate efficiently without scrolling through every page.

**Priority:** P1  
**Points:** 5  
**Files:** `PDFPreviewView`, new: `PDFThumbnailRailView.swift`

### UX Rationale

Multi-page PDFs (users with extensive session history may generate 3–5 pages) become tedious to navigate with scroll-only interaction. A horizontal thumbnail rail at the bottom — similar to Apple's Photos app filmstrip — provides spatial awareness ("I'm on page 2 of 4") and instant navigation ("tap page 4 to jump there").

The rail slides up from the bottom when activated (via a pill-shaped handle or a "Pages" toolbar button) and slides back down when dismissed. Each thumbnail is a miniature render of its page with a tier-colored selection ring around the current page.

### Acceptance Criteria

- [ ] **AC 4.1** — A horizontal thumbnail rail can be toggled via a "Pages" button (book icon) added to the floating toolbar.
- [ ] **AC 4.2** — The rail appears at the bottom of the screen, 76pt tall, with `ultraThinMaterial` background and 20pt corner radius (top corners only).
- [ ] **AC 4.3** — Each thumbnail is rendered at 48pt × 62pt (US Letter aspect ratio), with a 1pt rounded border and 4pt spacing between thumbnails.
- [ ] **AC 4.4** — The currently visible page's thumbnail has a 2pt tier-gradient border and a subtle scale bump (1.05×).
- [ ] **AC 4.5** — Tapping a thumbnail scrolls the main `PDFView` to that page with a smooth animation.
- [ ] **AC 4.6** — The rail is horizontally scrollable if pages exceed screen width.
- [ ] **AC 4.7** — The rail auto-hides after 4 seconds of no interaction (matches toolbar auto-hide behavior).
- [ ] **AC 4.8** — A drag handle (4pt × 36pt capsule, 0.3 opacity) at the top of the rail allows swipe-down to dismiss.
- [ ] **AC 4.9** — Thumbnails are generated lazily (one at a time, on background queue) to avoid blocking the main thread.
- [ ] **AC 4.10** — When the rail is visible, the page indicator capsule (Story 3, AC 3.5) is hidden to avoid redundancy.
- [ ] **AC 4.11** — On single-page PDFs, the "Pages" button is hidden and the rail is inaccessible (no point showing a single thumbnail).

### Subtasks

- [ ] **4.1** — Create `PDFThumbnailRailView.swift` with `ScrollView(.horizontal)` containing page thumbnail cells.
- [ ] **4.2** — Implement `PDFDocument.page(at:).thumbnail(of:for:)` for generating miniature page images.
- [ ] **4.3** — Add tier-gradient selection ring with animated transition when current page changes.
- [ ] **4.4** — Wire thumbnail tap → `PDFView.go(to: page)` with `UIView.animate` for smooth scrolling.
- [ ] **4.5** — Add Pages button to `PDFPreviewToolbar` (only if page count > 1).
- [ ] **4.6** — Implement rail show/hide animation: slide from bottom with spring curve.
- [ ] **4.7** — Add auto-hide timer matching toolbar pattern.
- [ ] **4.8** — Add drag-to-dismiss gesture recognizer on the rail.
- [ ] **4.9** — Add lazy thumbnail generation with `Task.detached` per page.
- [ ] **4.10** — Coordinate rail visibility with page indicator capsule visibility.

---

## Story 5 — Branded Share Sheet with Quick Actions

**As a** user who wants to share or save my PDF report,  
**I want** a branded share experience with prominent quick-action shortcuts,  
**So that** I can save to Files, share via Messages, or AirDrop with one tap — not three.

**Priority:** P0  
**Points:** 8  
**Files:** `ExportDataWidget.swift` (share flow), new: `PDFShareSheetView.swift`

### UX Rationale

`UIActivityViewController` is a utility. It shows 40 share targets, most of which are irrelevant to PDF sharing. The user has to scan a grid, find "Save to Files," tap it, navigate folders, and confirm. That's 5 taps minimum for the most common action.

A branded share sheet *precedes* the system share sheet. It's a half-height modal with 3 prominent quick actions (Save to Files, Copy Link, AirDrop) rendered as large, branded cards, plus a "More Options…" button that opens the full `UIActivityViewController`. The modal uses the tier gradient as a subtle header accent and shows a PDF thumbnail alongside the file name and size.

The top 3 actions cover ~85% of share intents for a PDF. By making them one-tap, we eliminate 2–4 taps from the primary flow.

### Acceptance Criteria

- [ ] **AC 5.1** — Tapping the Share button in the preview toolbar opens a custom `PDFShareSheetView` as a `.sheet` (half-height detent on iOS 16+), not the system `UIActivityViewController` directly.
- [ ] **AC 5.2** — The share sheet header shows:
  - Left: 52×67pt thumbnail of page 1 (US Letter ratio), with a 1pt border and 6pt corner radius.
  - Right: File name ("LumenLingo Report") in 15pt semibold, file size in 12pt secondary (e.g., "342 KB"), and generation date in 11pt tertiary.
- [ ] **AC 5.3** — Below the header, 3 quick-action buttons are displayed in a horizontal row:
  - **Save to Files** — folder.badge.plus icon, "Save" label. Calls `UIDocumentPickerViewController` in export mode.
  - **AirDrop** — antenna.radiowaves.left.and.right icon, "AirDrop" label. Calls `UIActivityViewController` with `[.airDrop]` exclusion filter (shows only AirDrop).
  - **Print** — printer icon, "Print" label. Calls `UIPrintInteractionController` with PDF data.
- [ ] **AC 5.4** — Each quick-action button is a 96pt-wide vertical stack (icon in a 44pt circle + label below), with tier-gradient icon tint and frosted background.
- [ ] **AC 5.5** — A "More Options…" button below the quick actions opens the full `UIActivityViewController` as a fallback for email, Messages, third-party apps, etc.
- [ ] **AC 5.6** — Each quick-action tap triggers `UIImpactFeedbackGenerator(style: .medium)`.
- [ ] **AC 5.7** — "Save to Files" action:
  - Opens `UIDocumentPickerViewController` in `.exportToService` mode with the PDF temp file URL.
  - On successful save, dismisses the share sheet and shows success confirmation (Story 6).
  - On cancel, dismisses the picker but keeps the share sheet open.
- [ ] **AC 5.8** — "Print" action:
  - Opens `UIPrintInteractionController` with `printingItem` set to the PDF `Data`.
  - Uses `UIPrintInfo` with `outputType: .general` and `jobName: "LumenLingo Report"`.
- [ ] **AC 5.9** — The share sheet background is `ultraThinMaterial` with a tier-gradient line (2pt) at the top edge.
- [ ] **AC 5.10** — Swipe-down on the share sheet dismisses it (standard `.sheet` behavior).

### Subtasks

- [ ] **5.1** — Create `PDFShareSheetView.swift` under `Views/Journey/` with header, quick-action row, and "More Options" button.
- [ ] **5.2** — Implement page-1 thumbnail generation from `PDFDocument` for the header.
- [ ] **5.3** — Calculate and display file size from `Data.count` formatted via `ByteCountFormatter`.
- [ ] **5.4** — Build quick-action button component with icon circle, label, and haptic feedback.
- [ ] **5.5** — Implement "Save to Files" via `UIDocumentPickerViewController` wrapped in `UIViewControllerRepresentable`.
- [ ] **5.6** — Implement "Print" via `UIPrintInteractionController.shared`.
- [ ] **5.7** — Wire "More Options…" to existing `UIActivityViewController` flow.
- [ ] **5.8** — Add tier-gradient accent line at top of sheet.
- [ ] **5.9** — Configure `.presentationDetents([.medium])` for half-height presentation.
- [ ] **5.10** — Add `UIDocumentPickerDelegate` conformance for save-success callback.

---

## Story 6 — Success Confirmation & Celebration Moment

**As a** user who just saved, shared, or printed my PDF report,  
**I want** a clear and delightful confirmation that my action succeeded,  
**So that** I feel confident the report is delivered and I experience a moment of satisfaction.

**Priority:** P0  
**Points:** 5  
**Files:** `PDFPreviewView`, new: `PDFSuccessOverlayView.swift`

### UX Rationale

This is the single most overlooked moment in export flows across the entire software industry. The user performed a multi-step action (generate → preview → share/save) and at the end they get… the share sheet dismisses and they're back in the preview. That's it. No confirmation. No closure. No dopamine.

After 30 years I've learned: **the end of a flow is more important than the beginning.** People remember how things *ended*. A 1.5-second celebration overlay — a checkmark ring drawing itself, a brief message ("Report saved!"), and a gentle haptic — transforms a transaction into an achievement.

### Acceptance Criteria

- [ ] **AC 6.1** — After a successful save-to-Files, share, or print action, a full-screen overlay appears on top of the PDF preview.
- [ ] **AC 6.2** — The overlay background is `black.opacity(0.4)` (dark mode) or `white.opacity(0.5)` (light mode) with a 0.2s fade-in.
- [ ] **AC 6.3** — Center of the overlay: a 72pt circular ring that draws itself clockwise over 0.5s (tier-gradient stroke, 4pt width), then fills with a checkmark that scales from 0.5 → 1.0 with a spring animation.
- [ ] **AC 6.4** — Below the checkmark ring: contextual success message in 18pt semibold:
  - Save: "Report Saved"
  - Share: "Report Shared"
  - Print: "Sent to Printer"
  - AirDrop: "Report Sent"
- [ ] **AC 6.5** — Below the message: "Tap anywhere to continue" in 12pt, 0.5 opacity, appearing after 0.8s delay.
- [ ] **AC 6.6** — A `UINotificationFeedbackGenerator.notificationOccurred(.success)` fires when the checkmark appears.
- [ ] **AC 6.7** — Tapping anywhere on the overlay, or waiting 3 seconds, dismisses it with a 0.3s fade-out and returns focus to the PDF preview.
- [ ] **AC 6.8** — If the user shared and wants to close the preview, the overlay dismissal reveals the preview with the toolbar visible so they can immediately tap Close.
- [ ] **AC 6.9** — With Reduce Motion: no ring drawing animation, no spring. Simple 0.2s fade-in of checkmark + text.
- [ ] **AC 6.10** — VoiceOver announces the success message when the overlay appears.

### Subtasks

- [ ] **6.1** — Create `PDFSuccessOverlayView.swift` with ring-draw animation, checkmark, and message.
- [ ] **6.2** — Implement ring-draw animation using `trim(from:to:)` on a `Circle()` shape with `withAnimation(.easeInOut(duration: 0.5))`.
- [ ] **6.3** — Add spring-scale checkmark using SF Symbol `checkmark` with `scaleEffect` animation.
- [ ] **6.4** — Build contextual message mapping (`SaveAction` → display string).
- [ ] **6.5** — Add auto-dismiss timer (3s) with tap-to-dismiss gesture.
- [ ] **6.6** — Wire success haptic feedback at checkmark appearance time.
- [ ] **6.7** — Integrate overlay into `PDFPreviewView` with `@State var showSuccess` and `@State var successAction` bindings.
- [ ] **6.8** — Add Reduce Motion path with simple fade animation.
- [ ] **6.9** — Add VoiceOver `.accessibilityAddTraits(.isStaticText)` and announcement.

---

## Story 7 — Direct Save Button & Smart File Naming

**As a** user who wants to save my PDF without going through a share sheet,  
**I want** a prominent "Save" button alongside the "Share" button in the toolbar,  
**So that** I can save my report to Files with a single tap.

**Priority:** P1  
**Points:** 3  
**Files:** `PDFPreviewView`, `PDFPreviewToolbar.swift`, `DataExporter.swift`

### UX Rationale

Data from App Store reviews of competing language apps shows that "save to device" is the #1 intended action for PDF exports — not email, not AirDrop. Users want to keep their learning reports on their device, organized in their own folder structure. Yet we force them through the share sheet maze.

A dedicated Save button (arrow.down.doc icon) next to the Share button opens `UIDocumentPickerViewController` directly — skipping the share sheet entirely. Combined with smart file naming ("LumenLingo Report — March 2026.pdf"), this turns a 5-tap flow into 2 taps: Save → confirm location.

### Acceptance Criteria

- [ ] **AC 7.1** — A "Save" button (arrow.down.to.line icon) appears in the floating toolbar, to the left of the Share button.
- [ ] **AC 7.2** — Tapping Save opens `UIDocumentPickerViewController` in `.exportToService` mode with the PDF file.
- [ ] **AC 7.3** — The default file name follows the format: `LumenLingo Report — {Month Year}.pdf` (e.g., "LumenLingo Report — March 2026.pdf"). Uses the report generation date, not the current date.
- [ ] **AC 7.4** — If the user has generated multiple reports in the same month, a counter suffix is added: "LumenLingo Report — March 2026 (2).pdf".
- [ ] **AC 7.5** — On successful save, the success overlay (Story 6) appears with the "Report Saved" message.
- [ ] **AC 7.6** — On cancel, no action taken, toolbar remains visible.
- [ ] **AC 7.7** — The Save button has the same frosted circle style (32×32pt, `ultraThinMaterial`) as Close and Share.
- [ ] **AC 7.8** — Haptic: `UIImpactFeedbackGenerator(style: .medium)` on tap, then `.success` notification on save complete.

### Subtasks

- [ ] **7.1** — Add Save button to `PDFPreviewToolbar` with correct icon and frosted circle style.
- [ ] **7.2** — Implement `UIDocumentPickerViewController` wrapper as `UIViewControllerRepresentable`.
- [ ] **7.3** — Build smart file name generator with month/year formatting and duplicate detection.
- [ ] **7.4** — Wire save-success callback → success overlay presentation.
- [ ] **7.5** — Add haptic feedback for tap and success states.
- [ ] **7.6** — Write temp PDF file to Caches directory before presenting document picker.

---

## Story 8 — Dark/Light Mode Preview Toggle

**As a** user previewing my PDF report,  
**I want** to toggle between dark and light PDF renders within the preview,  
**So that** I can see how the report looks in both modes before sharing.

**Priority:** P2  
**Points:** 5  
**Files:** `PDFPreviewView`, `DataExporter.swift`

### UX Rationale

The PDF is rendered with the user's current system color mode. But the recipient might be using the opposite mode — or the user might want to print the report (where light mode is almost always better). Currently, the only way to see the light-mode PDF is to change the entire system setting, regenerate, and preview again. That's absurd.

A theme toggle in the toolbar lets the user tap to regenerate the PDF in the opposite color mode. The regeneration happens in the background and the new PDF crossfades in over the old one — maintaining scroll position and zoom level.

### Acceptance Criteria

- [ ] **AC 8.1** — A theme toggle button (sun.max / moon.fill icon) appears in the toolbar between Save and Share.
- [ ] **AC 8.2** — Tapping the toggle:
  1. Shows a small "Regenerating…" label beneath the toolbar (centered, 11pt, 0.5 opacity).
  2. Regenerates the PDF with `isDarkMode` toggled.
  3. Crossfades the new PDF document into the existing `PDFKitView` over 0.3s.
- [ ] **AC 8.3** — Scroll position is preserved during the crossfade: the same page remains visible after the regeneration.
- [ ] **AC 8.4** — The preview background subtly adapts: dark mode → darker gradient background, light mode → lighter gradient background.
- [ ] **AC 8.5** — The toggle icon animates (rotation + crossfade) to reflect the new state.
- [ ] **AC 8.6** — The toggle button is disabled during regeneration to prevent rapid toggling.
- [ ] **AC 8.7** — The toggle state persists for the duration of the preview session. Closing and reopening the preview resets to system default.
- [ ] **AC 8.8** — When the user shares a PDF after toggling, the *toggled* version is shared, not the original.
- [ ] **AC 8.9** — A subtle haptic (`UIImpactFeedbackGenerator(style: .light)`) fires on toggle.

### Subtasks

- [ ] **8.1** — Add theme toggle button to `PDFPreviewToolbar` with adaptive icon.
- [ ] **8.2** — Implement `regeneratePDF(isDarkMode:)` method that rebuilds the PDF on a background thread.
- [ ] **8.3** — Build crossfade transition: old `PDFDocument` → new `PDFDocument` with opacity swap.
- [ ] **8.4** — Preserve scroll position by reading `PDFView.currentPage` index before swap, then restoring after.
- [ ] **8.5** — Update preview background gradient to match the current theme.
- [ ] **8.6** — Add loading state with disabled toggle during regeneration.
- [ ] **8.7** — Ensure `pdfData` state variable updates so share action sends the toggled version.
- [ ] **8.8** — Add icon rotation animation (180° on toggle).

---

## Story 9 — Haptic Feedback System for PDF Interactions

**As a** user interacting with the PDF preview,  
**I want** subtle haptic feedback on every meaningful interaction,  
**So that** the experience feels tactile and responsive like a luxury product.

**Priority:** P1  
**Points:** 3  
**Files:** new: `PDFHapticService.swift`, all PDF views

### UX Rationale

Haptic feedback is the auditory-motor bridge between digital and physical interaction. Research consistently shows that *calibrated* haptics increase perceived quality by 20–30%. The key word is *calibrated*: every haptic must match the emotional weight of its trigger. A page turn is light. A successful save is affirming. A button press is crisp. Using the same haptic everywhere is worse than having none at all.

This story creates a centralized haptic service for all PDF interactions with carefully mapped intensity levels.

### Acceptance Criteria

- [ ] **AC 9.1** — A `PDFHapticService` singleton provides typed methods for all PDF haptic events:
  - `.buttonTap()` — `UIImpactFeedbackGenerator(style: .light)` — for toolbar taps.
  - `.pageTurn()` — `UISelectionFeedbackGenerator` — for page changes.
  - `.documentReveal()` — `UIImpactFeedbackGenerator(style: .medium)` — for reveal animation.
  - `.actionSuccess()` — `UINotificationFeedbackGenerator(.success)` — for save/share/print success.
  - `.stageProgress()` — `UIImpactFeedbackGenerator(style: .soft)` — for loading stage changes.
  - `.sheetPresent()` — `UIImpactFeedbackGenerator(style: .rigid)` — for share sheet appearance.
- [ ] **AC 9.2** — Each generator is pre-prepared (`.prepare()`) 0.2s before expected use for zero-latency response.
- [ ] **AC 9.3** — A global "PDF Haptics" toggle in Sound Settings (`SoundSettingsView`) allows disabling all PDF haptics independently of system haptic settings.
- [ ] **AC 9.4** — The service respects `UIAccessibility.isReduceMotionEnabled` by reducing haptic intensity (skip `.soft` and `.light` haptics, keep only `.medium` and notifications).
- [ ] **AC 9.5** — All existing haptic calls across Stories 1–8 use `PDFHapticService` instead of inline generator creation.
- [ ] **AC 9.6** — No haptics fire during VoiceOver navigation to avoid conflicting with VoiceOver's own haptic feedback.

### Subtasks

- [ ] **9.1** — Create `PDFHapticService.swift` under `Services/` with typed haptic methods.
- [ ] **9.2** — Implement generator pre-preparation pattern with 0.2s advance `.prepare()` calls.
- [ ] **9.3** — Add "PDF Haptics" toggle to `SoundSettingsView` backed by `UserProfile` property.
- [ ] **9.4** — Add Reduce Motion and VoiceOver checks to the service.
- [ ] **9.5** — Refactor all inline haptic generators in Stories 1–8 to use the service.
- [ ] **9.6** — Test haptic timing on physical device (simulator doesn't support haptics).

---

## Story 10 — Export Widget Redesign with PDF Prominence

**As a** Royal-tier user viewing the export section of my learning journey,  
**I want** the PDF option to be visually prominent and clearly differentiated from CSV/JSON,  
**So that** I immediately understand that the PDF report is the premium, designed experience.

**Priority:** P1  
**Points:** 5  
**Files:** `ExportDataWidget.swift`

### UX Rationale

Currently, all four export options (CSV, JSON, PDF, Achievement Card) are equal-sized cards in a 2×2 grid. This treats a rich branded PDF report the same as a raw CSV dump. There's no visual hierarchy communicating that PDF is the flagship format that took hundreds of engineering hours to build.

The redesigned widget elevates the PDF card to a hero position: a full-width card at the top (spanning both columns) with a mini-preview of the PDF's first page, while CSV and JSON remain as compact secondary options below. The achievement card becomes a contextual CTA at the bottom.

### Acceptance Criteria

- [ ] **AC 10.1** — The export widget layout changes from a 2×2 grid to a structured vertical layout:
  - **Hero row:** PDF card spanning full width, 120pt height, with mini-preview thumbnail.
  - **Secondary row:** CSV and JSON cards side-by-side, 80pt height each.
  - **CTA row:** Achievement card as a full-width compact bar (48pt height).
- [ ] **AC 10.2** — The PDF hero card shows:
  - Left 40%: 48×62pt thumbnail of a sample/cached PDF page 1 (or a stylized placeholder if no PDF has been generated yet).
  - Right 60%: "PDF Report" title (16pt bold), "Your branded learning report with charts, stats, and insights" subtitle (11pt secondary), and a pill-shaped "Generate Report" CTA button (tier-gradient fill, 14pt semibold white text).
- [ ] **AC 10.3** — The PDF hero card has a tier-gradient border (1.2pt) and a subtle gradient overlay (tier colors at 4% opacity).
- [ ] **AC 10.4** — The Premium badge moves from the card's top-right corner to an inline position next to the title (smaller, 8pt, capsule).
- [ ] **AC 10.5** — When PDF generation is in progress, the hero card shows a progress state: the thumbnail area becomes a shimmer skeleton and the CTA changes to "Generating…" with a spinner.
- [ ] **AC 10.6** — Once a PDF has been generated in the current session, the thumbnail updates to show the actual page 1, and the CTA changes to "View Report" (re-opens the preview without regenerating).
- [ ] **AC 10.7** — CSV and JSON secondary cards retain their current design but are 20% shorter (80pt vs 100pt implied height).
- [ ] **AC 10.8** — The Achievement Card CTA bar shows: camera.filters icon + "Share Achievement Card" text + arrow.right, all in a single horizontal row.
- [ ] **AC 10.9** — Long-press on the PDF hero card shows a context menu with: "Generate New Report", "View Last Report" (if cached), "About PDF Reports" (opens a brief explainer).
- [ ] **AC 10.10** — The widget header/subtitle updates to reflect PDF focus: "Export & Reports" section title.

### Subtasks

- [ ] **10.1** — Refactor `ExportDataWidget.body` from `LazyVGrid` to vertical `VStack` with hero + secondary + CTA sections.
- [ ] **10.2** — Create PDF hero card view with thumbnail, title, subtitle, and CTA layout.
- [ ] **10.3** — Implement sample/cached PDF thumbnail generator.
- [ ] **10.4** — Add `@State var cachedPDF: Data?` for session-level PDF caching.
- [ ] **10.5** — Build "View Report" flow that re-opens preview from cached data without regenerating.
- [ ] **10.6** — Add context menu with `UIContextMenuInteraction`-style actions.
- [ ] **10.7** — Redesign Achievement Card as compact horizontal CTA bar.
- [ ] **10.8** — Add shimmer loading state to the hero card thumbnail area.
- [ ] **10.9** — Update section title to "Export & Reports".
- [ ] **10.10** — Adjust secondary card heights and spacing.

---

## Story 11 — Accessibility & VoiceOver Excellence

**As a** user who relies on VoiceOver or other assistive technologies,  
**I want** the entire PDF preview and share experience to be fully accessible,  
**So that** I can generate, preview, navigate, and share my report with the same ease as any other user.

**Priority:** P0  
**Points:** 5  
**Files:** All PDF views (Stories 1–10)

### UX Rationale

Accessibility is not a feature — it's a requirement. In 30 years of design work, I've seen exactly one pattern hold true across every product: accessible products are *better products for everyone.* Proper VoiceOver support forces clear information hierarchy. Proper Dynamic Type support forces flexible layouts. Proper Reduce Motion support forces meaningful-by-default animations.

This story is a cross-cutting concern that audits and completes accessibility across all 10 preceding stories.

### Acceptance Criteria

- [ ] **AC 11.1** — Every interactive element in the PDF flow has a descriptive `accessibilityLabel` and `accessibilityHint`.
- [ ] **AC 11.2** — The floating toolbar buttons are accessible as a group: `accessibilityElement(children: .contain)` with group label "Report Actions."
- [ ] **AC 11.3** — The loading stage labels (Story 1) are announced automatically via `.accessibilityAddTraits(.updatesFrequently)`.
- [ ] **AC 11.4** — The page indicator (Story 3) announces "Page {n} of {total}" on every page change.
- [ ] **AC 11.5** — The thumbnail rail (Story 4) treats each thumbnail as an `accessibilityElement` with label "Page {n}" and hint "Double tap to jump to this page."
- [ ] **AC 11.6** — The success overlay (Story 6) is announced as a modal alert: `.accessibilityAddTraits(.isModal)` with the success message.
- [ ] **AC 11.7** — The share sheet quick actions (Story 5) are in a horizontal VoiceOver accessible scroll with labels matching visible text.
- [ ] **AC 11.8** — Dynamic Type: all text in the PDF preview chrome (toolbar, page indicator, share sheet) scales up to `.accessibility3` without truncation or layout breakage.
- [ ] **AC 11.9** — Color contrast: all text meets WCAG 2.1 AA contrast ratios on both dark and light mode backgrounds.
- [ ] **AC 11.10** — Reduce Motion: all animations documented in Stories 1–8 have reduced-motion fallbacks as specified in each story's AC.
- [ ] **AC 11.11** — Keyboard navigation: on iPad with external keyboard, all toolbar actions are accessible via Tab and Enter, and Escape dismisses the preview.

### Subtasks

- [ ] **11.1** — Audit all views from Stories 1–10 for missing `accessibilityLabel` / `accessibilityHint`.
- [ ] **11.2** — Add group accessibility to floating toolbar.
- [ ] **11.3** — Add `.updatesFrequently` trait to stage labels in `PDFGeneratingView`.
- [ ] **11.4** — Post `UIAccessibility.post(notification: .pageScrolled)` on page changes.
- [ ] **11.5** — Set accessibility for thumbnail rail items with proper labels and hints.
- [ ] **11.6** — Configure success overlay as modal accessible element.
- [ ] **11.7** — Test Dynamic Type at maximum size on all text elements; fix any clipping or overlap.
- [ ] **11.8** — Run Accessibility Inspector audit on all screens.
- [ ] **11.9** — Verify color contrast with Digital Color Meter for all text-on-background combos.
- [ ] **11.10** — Add keyboard shortcut support for iPad: ⌘S (Save), ⌘⇧S (Share), Escape (Close).
- [ ] **11.11** — Write manual VoiceOver test script covering the entire flow end-to-end.

---

## Story 12 — Performance & Memory Optimization

**As a** user with a large practice history (500+ sessions),  
**I want** PDF generation, preview loading, and sharing to be fast and memory-efficient,  
**So that** the app doesn't freeze, crash, or consume excessive memory during the export flow.

**Priority:** P0  
**Points:** 5  
**Files:** `DataExporter.swift`, `ExportDataWidget.swift`, `PDFPreviewView`

### UX Rationale

A feature that crashes or beachballs is worse than a feature that doesn't exist. Users with extensive histories will generate multi-page PDFs with hundreds of data points. Core Graphics PDF rendering is CPU-intensive. Holding a 612×792×N-page `PDFDocument` in memory is non-trivial. Thumbnail generation (Story 4) adds further memory pressure.

This story establishes performance budgets, implements streaming optimizations, and adds memory pressure monitoring to ensure the export flow remains smooth even on an iPhone SE with 3GB RAM.

### Acceptance Criteria

- [ ] **AC 12.1** — PDF generation for 500 sessions completes in under 2.0 seconds on iPhone 15 (or equivalent simulator).
- [ ] **AC 12.2** — Peak memory usage during PDF generation + preview does not exceed 80MB above baseline.
- [ ] **AC 12.3** — Thumbnail generation (Story 4) uses `autoreleasepool` per thumbnail to prevent memory accumulation.
- [ ] **AC 12.4** — `PDFDocument` is loaded directly from `Data` (not written to disk first) to avoid unnecessary I/O.
- [ ] **AC 12.5** — The `PDFReportBuilder` releases intermediate drawing resources (contexts, gradient refs) as soon as each page completes, not at the end of full render.
- [ ] **AC 12.6** — The temp file written for sharing is cleaned up immediately after the share action completes (move cleanup from `completionWithItemsHandler` into a `defer` block that catches both success and failure).
- [ ] **AC 12.7** — If PDF generation fails (e.g., out of memory), a graceful error is shown: "Unable to generate report. Try closing other apps." — not a crash.
- [ ] **AC 12.8** — On `didReceiveMemoryWarning`, cached PDF data and thumbnails are purged. The preview shows a "Tap to regenerate" prompt.
- [ ] **AC 12.9** — PDF generation runs on `.userInitiated` QoS, never on `.background` (which can be throttled on Low Power Mode).
- [ ] **AC 12.10** — Instrument the flow with `os_signpost` for Instruments profiling: one interval for generation, one for preview render, one for thumbnail creation.

### Subtasks

- [ ] **12.1** — Add `os_signpost` instrumentation to `PDFReportBuilder.build()`, thumbnail generation, and preview display.
- [ ] **12.2** — Profile PDF generation with Instruments (Time Profiler, Allocations) for 100, 250, and 500 session datasets.
- [ ] **12.3** — Add `autoreleasepool` around each page's Core Graphics drawing block.
- [ ] **12.4** — Add `autoreleasepool` per thumbnail in `PDFThumbnailRailView` generation.
- [ ] **12.5** — Implement memory warning observer to purge cached PDF data and thumbnails.
- [ ] **12.6** — Move temp file cleanup to `defer` block and verify with unit test.
- [ ] **12.7** — Add `do/catch` around PDF generation with user-facing error alert fallback.
- [ ] **12.8** — Verify `.userInitiated` QoS on all generation `Task.detached` calls.
- [ ] **12.9** — Benchmark and log generation time (wall clock) with `CFAbsoluteTimeGetCurrent`.
- [ ] **12.10** — Create test fixture with 500 mock `GameProgressRecord` entries for load testing.

---

## Non-Functional Requirements

### NFR-1: Animation Frame Budget

All animations in this epic must maintain 60fps on iPhone 13 and later, and 30fps on iPhone SE (3rd gen). Animations that drop below these thresholds must be simplified or removed.

**Measurement:** Run each animation with Instruments → Core Animation FPS gauge. Document results in the Story PR.

---

### NFR-2: Cold Start Impact

The PDF preview subsystem must add zero cost to app cold start time. No pre-loading, no pre-warming, no singleton initialization until the user taps the PDF button. The `PDFHapticService` singleton must lazy-initialize.

---

### NFR-3: Disk Usage

PDF temp files must never persist beyond the current share action. Achievement card images must be cleaned up on share sheet dismissal. Total export-related cache must not exceed 10MB at any point.

---

### NFR-4: Localization Readiness

All user-facing strings in this epic (stage labels, toolbar titles, success messages, share sheet labels) must be wrapped in `LocalizedStringKey` or fetched from `AppStrings`. No hardcoded English strings in production code.

---

### NFR-5: Backward Compatibility

All features must degrade gracefully on iOS 16 (minimum deployment target). Features requiring iOS 17+ APIs (e.g., `ScrollPosition`, new `PDFKit` APIs) must have iOS 16 fallbacks.

---

## Technical Architecture Notes

### New Files to Create

| File | Purpose |
|---|---|
| `Views/Journey/PDFGeneratingView.swift` | Skeleton loading view with stage labels |
| `Views/Journey/PDFPreviewToolbar.swift` | Custom floating toolbar with frosted buttons |
| `Views/Journey/PDFThumbnailRailView.swift` | Horizontal page thumbnail rail |
| `Views/Journey/PDFShareSheetView.swift` | Branded share sheet with quick actions |
| `Views/Journey/PDFSuccessOverlayView.swift` | Post-action success celebration overlay |
| `Services/PDFHapticService.swift` | Centralized haptic feedback for PDF flow |

### Existing Files to Modify

| File | Changes |
|---|---|
| `Views/Journey/ExportDataWidget.swift` | Redesigned layout (Story 10), updated share flow |
| `Services/DataExporter.swift` | Smart file naming (Story 7), re-render support (Story 8) |

### Dependency Graph

```
Story 1 (Loading) ───► Story 2 (Reveal) ───► Story 3 (Preview Chrome)
                                                      │
                                                      ├── Story 4 (Thumbnails)
                                                      ├── Story 7 (Save Button)
                                                      ├── Story 8 (Theme Toggle)
                                                      │
Story 5 (Share Sheet) ───► Story 6 (Success Overlay)
                                                      
Story 9 (Haptics) ← depends on Stories 1–8 being merged
Story 10 (Widget Redesign) ← independent, can start in parallel
Story 11 (Accessibility) ← cross-cutting, runs after all others
Story 12 (Performance) ← cross-cutting, runs after all others
```

### Recommended Sprint Allocation

| Sprint | Stories | Focus |
|---|---|---|
| Sprint 1 | 1, 2, 3 | Core preview experience — loading → reveal → chrome |
| Sprint 2 | 5, 6, 7 | Share & save flows — branded sheet, success, direct save |
| Sprint 3 | 4, 8, 10 | Navigation & polish — thumbnails, theme toggle, widget redesign |
| Sprint 4 | 9, 11, 12 | Quality — haptics, accessibility audit, performance optimization |

---

## Acceptance Test Plan

### E2E Flow: Happy Path

```
1. User is on Learning Journey page with 50+ sessions.
2. User scrolls to "Export & Reports" section.
3. PDF hero card is visible with "Generate Report" CTA.
4. User taps "Generate Report."
5. Full-screen cover opens with skeleton loading + stage labels.
6. After ~1.5s, skeleton crossfades into cinematic reveal.
7. PDF document appears with spring animation and tier glow pulse.
8. Floating toolbar fades in: Close (×), Pages, Save, Theme Toggle, Share.
9. User scrolls through 3 pages — page indicator appears and auto-hides.
10. User taps Pages — thumbnail rail slides up from bottom.
11. User taps page 3 thumbnail — PDF jumps to page 3.
12. User swipes rail down to dismiss.
13. User taps Theme Toggle — PDF regenerates in light mode with crossfade.
14. User taps Save — File picker opens with smart filename.
15. User selects folder and saves — success overlay appears with checkmark.
16. User taps overlay to dismiss — returns to preview with toolbar.
17. User taps Share — branded share sheet opens with quick actions.
18. User taps AirDrop — system AirDrop sheet opens.
19. After sending, success overlay appears with "Report Sent."
20. User taps Close — full-screen cover dismisses.
21. PDF hero card now shows "View Report" (re-open from cache).
```

### E2E Flow: Error Path

```
1. User with 1,000+ sessions taps "Generate Report."
2. PDF generation encounters memory pressure.
3. App shows error: "Unable to generate report. Try closing other apps."
4. User closes other apps and retries — generation succeeds.
```

### E2E Flow: Accessibility Path

```
1. VoiceOver user activates "Generate PDF Report" button.
2. VoiceOver announces each loading stage as it changes.
3. On reveal, VoiceOver announces "Your learning report is ready."
4. VoiceOver groups toolbar as "Report Actions: Close, Pages, Save, Toggle Theme, Share."
5. User navigates pages — VoiceOver announces "Page 2 of 4."
6. User activates Save — VoiceOver announces "Report Saved" on success.
```

---

## Metrics & Success Criteria

| Metric | Current | Target | How Measured |
|---|---|---|---|
| PDF export completion rate | Unknown | > 90% | Analytics: `pdf_export_started` vs `pdf_export_completed` |
| Time from tap to preview | ~0.8s (bare spinner) | 1.5–2.0s (with delight) | `os_signpost` timing |
| Share/Save action taken | Unknown | > 70% per preview | Analytics: `pdf_share_*` events |
| PDF-related crashes | Unknown | 0 per 1,000 exports | Crash reporting |
| Memory ceiling (generation) | Unknown | < 80MB above baseline | Instruments profiling |
| User satisfaction (NPS proxy) | N/A | 4.5+ star rating mentions | App Store review keyword analysis |

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| PDFKit scroll position not preserved on document swap (Story 8) | Medium | Medium | Read `currentPage` index before swap; restore with `go(to:)` after. Fallback: reset to page 1. |
| Skeleton shimmer animation causes GPU spikes on older devices | Low | Medium | Use `drawingGroup()` for GPU-composited gradient. Test on iPhone SE. |
| `UIDocumentPickerViewController` presentation conflicts with full-screen cover | Medium | High | Present picker from the full-screen cover's root VC, not from the underlying view. |
| Haptic generators not prepared in time → delayed response | Low | Low | Pre-prepare generators 0.2s before expected use. Use warm singleton. |
| Multi-page thumbnail generation blocks UI thread | Medium | High | Generate thumbnails on background thread with `Task.detached`. Use placeholders until ready. |
| iOS 16 lacks some `PDFKit` APIs used in Stories 3–4 | Low | Medium | Wrap in `if #available(iOS 17, *)` with simpler fallback. |

---

## Glossary

| Term | Definition |
|---|---|
| **Skeleton loading** | A placeholder UI that mimics the shape of the final content with animated shimmer blocks, conveying progress without specific percentages. |
| **Cinematic reveal** | A multi-phase entrance animation combining fade, scale, glow, and haptics to create an "unveiling" sensation. |
| **Frosted circle** | A circular button container using `ultraThinMaterial` for a translucent glass effect. |
| **Tier gradient** | The 2–3 color gradient associated with the user's membership tier, used consistently across the app for branding. |
| **Hero card** | A visually prominent card that spans full width and receives more visual weight than surrounding elements. |
| **Quick action** | A one-tap shortcut for a common user intent, displayed as a large, easy-to-target button. |
| **Success overlay** | A brief, celebratory full-screen layer confirming task completion with animation and haptics. |
| **Auto-hide** | UI behavior where chrome (toolbars, indicators) fades out after a timeout and reappears on interaction. |

---

*"The details are not the details. They make the design."* — Charles Eames

*This document was authored with the conviction that every interaction, no matter how small, is an opportunity to earn a user's trust and delight. A PDF export is not a download — it's a gift the app gives back to the learner. Treat it accordingly.*
