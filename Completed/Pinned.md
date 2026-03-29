# Epic: Pinned Bottom Action Bar — Visual Mastery

> **Epic ID:** E15  
> **Priority:** P0 — User Delight  
> **Sprint:** Current  
> **Owner:** Product & Engineering  
> **Status:** ✅ Implemented (Craftsman Pass)  
> **Last Updated:** 2026-03-18  

---

## Executive Vision

The Pinned Bottom Action Bar is the **final moment** a user experiences after completing
a game session. It is the last impression — the one that determines whether the user
taps "Play Again," shares their achievement, or leaves the app forever. Today, this bar
feels utilitarian: flat, lifeless, disconnected from the premium cosmic identity that
defines LumenLingo.

This epic transforms the bottom bar from a functional afterthought into a **cinematic
moment of triumph** — a surface that breathes, glows, responds to touch with physicality,
and celebrates the user's achievement with the same reverence as the rest of the experience.

### Design Philosophy

1. **Every pixel communicates status.** The bar should feel different at 95% accuracy
   vs 40% accuracy. Performance tier colors should wash through the surface.
2. **Glass with depth.** Not flat glass — layered glass. Inner glows, edge lighting,
   surface reflections that shift with the tier's identity.
3. **Motion with purpose.** Subtle ambient breathing that makes the bar feel alive
   without distracting. Staggered entrance that builds anticipation.
4. **Touch that resonates.** Buttons should feel like physical objects — press-down
   states with depth, release states with spring, glow bloom on interaction.
5. **Tier identity everywhere.** A Royal user should feel their bar is different from
   a Pro user. The premium investment should be visible in every gradient, every glow.

---

## Current State Analysis

### What's Wrong Today

| Issue | Severity | Detail |
|-------|----------|--------|
| Flat material background | High | `.ultraThinMaterial` at 0.92 opacity feels like frosted plastic, not luxury glass |
| No performance-tier color integration | High | Bar looks identical whether user scored 95% or 35% |
| Share button is an afterthought | High | 56×56 glass square with tiny text — no visual weight or invitation |
| Secondary buttons lack hierarchy | Medium | "Play Again" and "Back to Categories" are visually indistinguishable |
| No ambient motion | Medium | Static surface in an app full of breathing orbs and cosmic nebulae |
| Top fade is crude | Medium | 36px linear gradient with hard opacity stops — visible seam |
| Tier glow is barely visible | Medium | 1px line + 16px blur at 0.06 opacity — invisible on most screens |
| No celebration reinforcement | Medium | Bar appears the same whether user just aced a session or struggled |
| Entrance is one-shot | Low | Single spring animation; no staggered reveal of elements |
| No safe area integration | Low | Bottom padding doesn't account for home indicator elegantly |

### What "Loved" Looks Like

Users should screenshot the bar to show friends. The bar should feel like the final
frame of a Pixar short — satisfying, complete, rewarding. When a user scores 95%,
the bar should glow with warm gold; when they're learning (40%), it should feel
encouraging with soft cyan. The share button should be so inviting that users tap it
reflexively.

---

## Story Map

```
E15 — Pinned Bottom Bar Visual Mastery
│
├─ S1: Layered Glass Foundation
│  ├─ S1.1: Multi-layer glass background
│  ├─ S1.2: Performance-tier color wash
│  └─ S1.3: Edge lighting & inner glow
│
├─ S2: Cinematic Entrance Sequence
│  ├─ S2.1: Staggered element reveal
│  ├─ S2.2: Background glass fade-in
│  └─ S2.3: Coordinated timing with hero section
│
├─ S3: Primary CTA — The Hero Button
│  ├─ S3.1: Richer gradient with inner light
│  ├─ S3.2: Ambient glow pulse
│  ├─ S3.3: Performance-adaptive color
│  └─ S3.4: Enhanced press state with depth
│
├─ S4: Share Button — Invitation to Celebrate
│  ├─ S4.1: Wider pill with icon + label
│  ├─ S4.2: Tier-gradient shimmer border
│  ├─ S4.3: Subtle attention pulse
│  └─ S4.4: Success feedback after share
│
├─ S5: Secondary Actions — Clear Hierarchy
│  ├─ S5.1: Play Again as distinct secondary
│  ├─ S5.2: Back to Categories as tertiary
│  └─ S5.3: Consistent spacing & alignment
│
├─ S6: Top-Edge Atmospheric Blend
│  ├─ S6.1: Multi-stop gradient fade
│  ├─ S6.2: Performance-tier tinted fade
│  └─ S6.3: Seamless content blending
│
├─ S7: Safe Area & Layout Polish
│  ├─ S7.1: Home indicator integration
│  ├─ S7.2: Dynamic Island & notch clearance
│  └─ S7.3: Landscape/iPad parity updates
│
└─ S8: Final Integration & QA
   ├─ S8.1: Dark mode verification
   ├─ S8.2: Light mode verification
   ├─ S8.3: All tier visual verification
   └─ S8.4: Build & test pass
```

---

## Story S1: Layered Glass Foundation

> **Goal:** Replace the flat `.ultraThinMaterial` background with a multi-layered
> glass surface that has depth, inner glow, and responds to the user's performance
> tier and membership tier.

### S1.1: Multi-Layer Glass Background

**Description:**  
The current background is a single rectangle with `.ultraThinMaterial` at high opacity.
This produces a flat, lifeless surface. Replace it with a three-layer glass stack:

1. **Base layer:** `.ultraThinMaterial` at reduced opacity (0.7 dark / 0.75 light) to
   let more content bleed through.
2. **Color wash layer:** A full-width gradient using the performance tier's accent color 
   at very low opacity (0.04–0.08), providing a warm/cool emotional tone.
3. **Surface reflection layer:** A top-to-center linear gradient in white at 0.03–0.06
   opacity, simulating light hitting the top curve of a glass surface.

**Acceptance Criteria:**
- [ ] Background uses three visually distinct layers
- [ ] Base material layer allows visible content bleed-through
- [ ] Color wash tint is visible but not overwhelming (≤0.08 opacity)
- [ ] Surface reflection adds perceived curvature to the glass
- [ ] Works correctly in both dark and light mode

**Subtasks:**
1. Remove single `Rectangle().fill(.ultraThinMaterial)` background
2. Create `ZStack` with three background layers
3. Tune opacity values for dark mode (0.7 base, 0.06 wash, 0.04 reflection)
4. Tune opacity values for light mode (0.75 base, 0.04 wash, 0.06 reflection)
5. Verify against both dark nebula and light backgrounds

---

### S1.2: Performance-Tier Color Wash

**Description:**  
The bar's emotional tone should reflect how the user performed. A user who scored
95% accuracy should see warm golden tones; a user at 40% should see encouraging
cool tones. This is achieved through a full-surface radial gradient using the
`performanceTier.color`:

- **Excellent (≥90%):** Golden/amber wash — celebration
- **Great (≥75%):** Green wash — satisfaction
- **Good (≥60%):** Cyan wash — encouragement
- **Keep Going (<60%):** Soft orange wash — warmth, not judgment

The wash should emanate from the center-top of the bar (where the most visually
important element sits — the primary CTA).

**Acceptance Criteria:**
- [ ] Each of the 4 performance tiers produces a visually distinct color wash
- [ ] Wash uses `RadialGradient` centered at top-center of the bar
- [ ] Opacity is subtle enough to not interfere with button readability
- [ ] Color is accurately sourced from `performanceTier.color`
- [ ] Effect is visible on screenshots (not purely perceived via animation)

**Subtasks:**
1. Pass `performanceTier` (or its color) to `pinnedBottomBar`
2. Add `RadialGradient` layer between base material and surface reflection
3. Center at `UnitPoint(x: 0.5, y: 0)` with `startRadius: 20`, `endRadius: 300`
4. Use `.opacity(isDark ? 0.06 : 0.04)` for the tier color
5. Test with all four performance tiers visually

---

### S1.3: Edge Lighting & Inner Glow

**Description:**  
Premium glass surfaces have visible edge lighting — a thin luminous line at the top
edge that catches light. The current implementation is a 1px gradient line + 16px blur
at 0.06 opacity — barely visible.

Replace with a two-part edge system:
1. **Sharp edge line:** 1px height, tier gradient, 0.35 opacity — visible, defined
2. **Soft glow bloom:** 24px height, tier gradient, 0.12 opacity, 12px blur — atmospheric

Also add a very subtle inner shadow at the bottom edge (0.03 opacity) to give the
glass perceived thickness.

**Acceptance Criteria:**
- [ ] Top edge has visible sharp 1px tier-colored line
- [ ] Soft glow bloom extends 24px below the edge line
- [ ] Glow uses `tierManager.tierGradientColors` with adequate opacity
- [ ] Bottom edge has subtle inner shadow for depth
- [ ] Free tier (gray gradients) looks elegant, not washed out
- [ ] Royal tier (gold/orange) glows warmly

**Subtasks:**
1. Replace existing top edge implementation
2. Add sharp 1px line at 0.35 opacity with tier gradient
3. Add 24px soft glow at 0.12 opacity with 12px blur
4. Add bottom inner shadow via flipped gradient at 0.03 opacity
5. Test across all 5 tiers (trial, free, pro, elite, royal)

---

## Story S2: Cinematic Entrance Sequence

> **Goal:** Transform the bar's entrance from a single spring animation into a
> staggered, cinematic reveal that builds anticipation and rewards attention.

### S2.1: Staggered Element Reveal

**Description:**  
Currently, the entire bar slides up as one block at `showBar = true` with a 0.5s delay.
This is functional but doesn't create the "premium reveal" feeling. Instead:

1. **Glass background** fades in first (opacity 0→1, 0.3s ease-out)
2. **Primary CTA** slides up from 30pt below with spring (0.15s after glass)
3. **Share button** fades in from right (0.25s after glass)
4. **Secondary buttons** fade in last (0.35s after glass)

This creates a cascade: glass → hero button → share → secondary, mirroring the
visual hierarchy.

**Acceptance Criteria:**
- [ ] Four distinct timing phases for bar entrance
- [ ] Each element has its own opacity and offset animation
- [ ] Total entrance duration is ≤0.9s from first element to last
- [ ] No visual "pop" or discontinuity during stagger
- [ ] Background glass arrives first, giving context for buttons

**Subtasks:**
1. Add `@State` variables: `showBarBg`, `showBarPrimary`, `showBarShare`, `showBarSecondary`
2. Replace single `showBar` toggle with four staggered dispatches
3. Apply individual opacity/offset modifiers to each section
4. Use `.spring(duration: 0.35, bounce: 0.12)` for slide-up, `.easeOut(duration: 0.3)` for fades
5. Keep `showBar` as the master toggle for the offset(y:200) of the entire container

---

### S2.2: Background Glass Fade-In

**Description:**  
The glass background should not "pop" in. It should fade from 0% opacity to full
over 300ms with a smooth ease-out curve. The edge lighting should fade in 100ms
after the glass base, creating a sequential "light turning on" effect.

**Acceptance Criteria:**
- [ ] Glass base fades from 0→1 opacity over 0.3s
- [ ] Edge lighting fades in 0.1s after the glass base
- [ ] No visible flicker or frame-skip during the sequence
- [ ] Fade uses `.easeOut` timing (fast start, gentle finish)

**Subtasks:**
1. Wrap background in `.opacity(showBarBg ? 1 : 0)`
2. Wrap edge lighting in `.opacity(showBarBg ? 1 : 0)` with 0.1s delay
3. Trigger `showBarBg` with `.easeOut(duration: 0.3)` animation
4. Ensure fade is smooth on 60Hz and 120Hz displays

---

### S2.3: Coordinated Timing with Hero Section

**Description:**  
The bar entrance must feel like part of the larger completion ceremony, not
a disconnected afterthought. Coordinate with the existing entrance sequence:

| Time | Existing Element | Bar Element |
|------|-----------------|-------------|
| 0.0s | Hero icon scales in | — |
| 0.2s | Title fades in | — |
| 0.3s | Stats slide up | — |
| 0.5s | — | Bar container slides up |
| 0.55s | — | Glass background fades in |
| 0.65s | — | Primary CTA springs up |
| 0.7s | Extras fade in | Share button fades in |
| 0.8s | — | Secondary buttons fade in |

The bar should feel like the natural conclusion of the cascade, not an interruption.

**Acceptance Criteria:**
- [ ] Bar entrance starts at exactly 0.5s (matching existing delay)
- [ ] Primary CTA appears within 0.15s of bar container
- [ ] Share button appears within 0.2s of primary CTA
- [ ] Secondary buttons appear last
- [ ] Full sequence completes by 0.85s (before showExtras at 0.6s completes)

**Subtasks:**
1. Update `startEntranceSequence()` to trigger staggered bar states
2. Maintain existing 0.5s delay for `showBar`
3. Add 0.55s delay for `showBarBg`
4. Add 0.65s delay for `showBarPrimary`
5. Add 0.7s delay for `showBarShare`
6. Add 0.8s delay for `showBarSecondary`

---

## Story S3: Primary CTA — The Hero Button

> **Goal:** Make the primary Call-to-Action button feel like the most important,
> most rewarding element in the bar — a button that begs to be tapped.

### S3.1: Richer Gradient with Inner Light

**Description:**  
The current CTA uses a two- or three-stop linear gradient. Upgrade to a richer
surface treatment:

1. **Base gradient:** Three-stop tier-appropriate colors (already exists)
2. **Inner light highlight:** Top 50% white-to-clear at 0.18 opacity (slightly
   stronger than current 0.15) — simulates overhead lighting on a rounded button
3. **Edge specular:** 0.5px strokeBorder with stronger contrast at top-leading
   (0.45 white) fading to near-invisible at bottom-trailing (0.03 white)
4. **Depth shadow:** Dual shadow — outer glow at larger radius + sharper near-shadow

**Acceptance Criteria:**
- [ ] Button surface has visible "rounded" appearance from inner light
- [ ] Edge specular is visible on dark backgrounds without being harsh
- [ ] Dual shadow creates floating, elevated appearance
- [ ] Button looks premium at all 4 performance tier color schemes
- [ ] Next Category button (green) and Play Again button (purple) both look excellent

**Subtasks:**
1. Strengthen inner light gradient from 0.15→0.18 opacity
2. Increase top-leading stroke opacity from 0.35→0.45
3. Add second shadow layer: `radius: 6, y: 2, opacity: 0.25` (closer, sharper)
4. Adjust outer shadow: `radius: 24, y: 10, opacity: 0.3` (wider, softer)
5. Verify in both light and dark mode

---

### S3.2: Ambient Glow Pulse

**Description:**  
The primary CTA should have a barely-perceptible glow that breathes, drawing the
eye without being distracting. This is a halo that expands and contracts behind the
button every ~3s.

Implement as a `RoundedRectangle` with the CTA's gradient color, behind the button,
pulsing between 0.08 and 0.18 opacity with a 2px blur, using the existing
`glowBreath` animation value from the parent `GameCompleteView`.

**Acceptance Criteria:**
- [ ] Glow pulse is visible when looking for it, not distracting when not
- [ ] Pulse period matches hero icon breathing (~3s cycle)
- [ ] Glow uses the CTA's primary gradient color (green for next, purple for play)
- [ ] No visible edge artifacts from the glow layer
- [ ] Performance: glow does not add CPU cost (uses existing animation state)

**Subtasks:**
1. Pass `glowBreath` value to `pinnedBottomBar` (or read from parent state)
2. Add glow layer behind CTA button background
3. Animate opacity using `0.08 + 0.1 * sin(glowBreath)`
4. Apply 2px blur to glow layer
5. Ensure glow layer is slightly larger than button (inset: -4)

---

### S3.3: Performance-Adaptive Color

**Description:**  
When there's no "Next Category" and "Play Again" is the primary CTA, its gradient
currently uses static purple (`#667eea` → `#764ba2`). Instead, adapt the gradient
to reflect the user's performance:

- **Excellent:** Use tier gold overlay — button should feel celebratory
- **Great/Good:** Keep the standard purple/indigo — reliable
- **Keep Going:** Use a warmer tone — encouraging rather than neutral

This is a subtle shift, not a dramatic color change. Use a color blend between the
base purple and the performance tier's accent.

**Acceptance Criteria:**
- [ ] Excellent performance tints the Play Again CTA slightly warmer
- [ ] Keep Going performance tints slightly warmer/encouraging
- [ ] Great/Good performance uses standard purple gradient
- [ ] Color shift is subtle (≤20% blend with performance tier color)
- [ ] Next Category CTA (green) is NOT affected by this — green always means "forward"

**Subtasks:**
1. When Play Again is primary, blend base color with `performanceTier.color` at 0.15
2. Compute blended colors at view build time (no runtime overhead)
3. Keep "Next Category" green untouched
4. Test all four performance tiers visually

---

### S3.4: Enhanced Press State with Depth

**Description:**  
The button already uses `LumenCTAPressStyle` which scales to 0.94 and shifts
brightness by -0.06 on press. The existing implementation is already high-quality
with haptic feedback. No changes needed to the button style itself, but verify
that the enhanced glow layers respond correctly during press states.

**Acceptance Criteria:**
- [ ] Existing `LumenCTAPressStyle` continues to work correctly
- [ ] Ambient glow pulse pauses or dims during press (natural shadow moment)
- [ ] Release spring feels satisfying with the new dual-shadow setup
- [ ] Haptic fires correctly on tap

**Subtasks:**
1. Verify existing press style with new shadow layers
2. Ensure glow layer respects press scale transform
3. No changes needed to `LumenCTAPressStyle` itself

---

## Story S4: Share Button — Invitation to Celebrate

> **Goal:** Transform the share button from an afterthought into a delightful,
> inviting element that makes users want to share their achievement.

### S4.1: Wider Pill with Icon + Label

**Description:**  
The current share button is a 56×56 square with a tiny icon and "Share" text.
It feels cramped and disconnected. Redesign as a wider pill shape that feels like
a natural extension of the primary CTA row:

- Width: match the height of the primary CTA (not a fixed 56px)
- Shape: pill (capsule) rather than rounded rectangle
- Content: Icon + "Share" label side by side, centered
- Size: 68pt wide minimum, height matches primary CTA

**Acceptance Criteria:**
- [ ] Share button is capsule-shaped, not square
- [ ] Width is 68pt minimum, adapts if label is wider
- [ ] Height matches primary CTA button height
- [ ] Icon and label are horizontally arranged with 6pt spacing
- [ ] Feels like part of the CTA row, not an orphan element

**Subtasks:**
1. Change frame from fixed 56×56 to minWidth: 68, height matches CTA
2. Change shape from `RoundedRectangle(cornerRadius: 18)` to `Capsule`
3. Arrange icon + label horizontally with `HStack(spacing: 6)`
4. Keep icon at 15pt, label at 11pt semibold
5. Match vertical padding to CTA button

---

### S4.2: Tier-Gradient Shimmer Border

**Description:**  
The share button should feel "premium" by incorporating the user's tier gradient
as a shimmer on its border. This creates a visual connection between the user's
membership and the share action:

- Border: 0.8px strokeBorder using tier gradient colors
- Shimmer: Animated gradient rotation (one slow pass every 4s, matching the
  ring rotation in the hero section)

**Acceptance Criteria:**
- [ ] Share button has a visible tier-gradient border
- [ ] Border uses `tierManager.tierGradientColors`
- [ ] Shimmer effect animates via angular gradient rotation
- [ ] Shimmer is subtle (0.3–0.5 opacity range) — not disco
- [ ] Free tier uses gray gradient — still looks refined

**Subtasks:**
1. Add `AngularGradient` stroke border using tier colors
2. Animate gradient `startAngle` using `ringRotation` from parent
3. Set border width to 0.8px
4. Set gradient color opacity to 0.4
5. Test all 5 membership tiers

---

### S4.3: Subtle Attention Pulse

**Description:**  
The share button should have a gentle "breathe" that draws attention after the
entrance animation completes. A very subtle scale pulse (1.0→1.02→1.0 over 4s)
combined with a border opacity pulse (0.3→0.5→0.3).

This should start ~1.5s after the bar appears (after the user has absorbed their
score) and repeat indefinitely.

**Acceptance Criteria:**
- [ ] Pulse starts ~1.5s after bar entrance (not during entrance)
- [ ] Scale oscillation is 1.0→1.02 (barely perceptible)
- [ ] Border opacity oscillation is 0.3→0.5
- [ ] Pulse uses `easeInOut` timing for organic feel
- [ ] Pulse stops if user has already tapped share (no pulse on return)

**Subtasks:**
1. Add `@State private var shareBreath: CGFloat = 0` animation driver
2. Trigger breathing 1.5s after `showBarShare` becomes true
3. Apply `scaleEffect(1.0 + 0.02 * sin(shareBreath))` to share button
4. Apply border opacity using same driver
5. Use `.easeInOut(duration: 2).repeatForever(autoreverses: true)` timing

---

### S4.4: Success Feedback After Share

**Description:**  
After the user taps share and the system share sheet is presented, there's no
visual feedback that the action was acknowledged. Add a brief check-mark animation
that plays when the share sheet dismisses:

- Share icon morphs to checkmark for 1.5s, then back to share icon
- Border flashes brighter momentarily (0.5 → 0.3 opacity)
- Haptic success feedback (already handled by button style, but verify)

This reinforces that the share was successful and makes the user feel good about
sharing.

**Acceptance Criteria:**
- [ ] After share sheet dismisses, share icon briefly shows checkmark
- [ ] Checkmark displays for 1.5s with `.spring` transition
- [ ] Border does a brief flash (0.5 opacity → back to breathing range)
- [ ] Works correctly if share sheet is cancelled (still shows acknowledgment)
- [ ] No crash if user taps share again during checkmark animation

**Subtasks:**
1. Add `@State private var shareCompleted = false` flag
2. Set `shareCompleted = true` after `shareResult()` call
3. Swap icon from `square.and.arrow.up` to `checkmark` when `shareCompleted`
4. After 1.5s delay, reset `shareCompleted = false`
5. Add `.contentTransition(.symbolEffect(.replace))` for smooth icon swap

---

## Story S5: Secondary Actions — Clear Hierarchy

> **Goal:** Make secondary and tertiary actions visually distinct from each other
> and clearly subordinate to the primary CTA.

### S5.1: Play Again as Distinct Secondary

**Description:**  
When "Next Category" is the primary CTA, "Play Again" appears as a secondary
button in the bottom row. Currently it uses `.white.opacity(0.04)` fill — nearly
invisible. Upgrade to:

- Visible glass surface: `.white.opacity(isDark ? 0.06 : 0.1)` fill
- 0.5px border with white at 0.12 opacity — defines the shape
- Icon + text in `.semibold` weight at 0.6 opacity
- Full-width in its half of the row

**Acceptance Criteria:**
- [ ] Play Again button is clearly tappable (not ghosted)
- [ ] Background is slightly more visible than current without competing with CTA
- [ ] Border defines the button boundary clearly
- [ ] Text is `semibold` at 0.6 opacity for clear subordination to CTA
- [ ] Correct haptic fires on press

**Subtasks:**
1. Increase fill opacity from 0.04→0.06 (dark) / 0.08→0.1 (light)
2. Increase border opacity from 0.08→0.12
3. Ensure font is `.system(size: 13, weight: .semibold)`
4. Verify `LumenPressStyle(weight: .medium)` works well at new opacity levels

---

### S5.2: Back to Categories as Tertiary

**Description:**  
"Back to Categories" is the lowest-priority action. It should be clearly available
but never compete for attention. Current implementation is text-only which is
correct, but the opacity is inconsistently low (0.4 dark / 0.6 light).

Standardize to:
- Text + icon in `.medium` weight at 0.45 opacity (dark) / 0.55 opacity (light)
- No background, no border — pure text treatment
- Slightly smaller font (13pt) to reduce visual weight vs Play Again (14pt)

**Acceptance Criteria:**
- [ ] Back button is clearly subordinate to Play Again
- [ ] Opacity is consistent: 0.45 dark / 0.55 light
- [ ] No background or border treatment
- [ ] Font is 13pt medium weight
- [ ] Still clearly tappable (44pt minimum touch target maintained)

**Subtasks:**
1. Set foreground opacity to 0.45 (dark) / 0.55 (light)
2. Set font to `.system(size: 13, weight: .medium)`
3. Ensure minimum padding for 44pt touch target
4. Verify visual hierarchy: CTA → Play Again → Back

---

### S5.3: Consistent Spacing & Alignment  

**Description:**  
Fine-tune the spacing between all elements in the bar for visual rhythm:

- Primary row (CTA + Share): 12pt gap (current, correct)
- Between primary and secondary rows: 14pt gap (slightly increase from 12)
- Secondary row internal gap: 10pt (current, correct)
- Horizontal padding: 20pt (current, correct)
- Top content padding: 16pt (increase from 14 for more breathing room)
- Bottom padding: account for safe area inset with minimum 12pt

**Acceptance Criteria:**
- [ ] 14pt gap between primary and secondary rows
- [ ] 16pt top content padding
- [ ] Bottom padding respects safe area with minimum 12pt
- [ ] No elements feel cramped or overly spaced
- [ ] Visual rhythm is consistent with the rest of the app

**Subtasks:**
1. Adjust VStack spacing from 12→14 between rows
2. Adjust top padding from 14→16
3. Add `.safeAreaInset(edge: .bottom)` or `max(safeAreaBottom, 12)`
4. Verify on devices with and without home indicator

---

## Story S6: Top-Edge Atmospheric Blend

> **Goal:** Create a seamless transition between the scrollable content above
> and the pinned bar below, eliminating any visible seam or hard edge.

### S6.1: Multi-Stop Gradient Fade

**Description:**  
The current 36px linear gradient has three stops but creates a visible "ledge"
where the bar starts. Replace with a wider, smoother 5-stop gradient:

```
0.0: fully transparent
0.2: 0.03 opacity
0.5: 0.15 opacity
0.8: 0.40 opacity
1.0: 0.65 opacity
```

Extend the fade height to 48px for a more gradual transition.

**Acceptance Criteria:**
- [ ] No visible seam at the top of the bar
- [ ] Gradient extends 48px above the bar content area
- [ ] 5-stop gradient creates a smooth, natural falloff
- [ ] Works against both bright and dark content scrolled above
- [ ] Fade uses `isDark ? Color.black : Color.white` base (current approach)

**Subtasks:**
1. Increase fade height from 36px to 48px
2. Replace 3-stop gradient with 5-stop gradient
3. Use explicit `Gradient.Stop` for precise control
4. Verify against scrolled content at various positions

---

### S6.2: Performance-Tier Tinted Fade

**Description:**  
Add a very subtle performance-tier color tint to the top fade gradient. This
extends the "color wash" concept from S1.2 into the fade zone, creating a
seamless visual connection between the bar's glass surface and the content above.

The tint should be extremely subtle — 0.02 opacity at the midpoint of the fade,
barely perceptible.

**Acceptance Criteria:**
- [ ] Fade has a barely-visible performance-tier color tint
- [ ] Tint peaks at 0.02–0.03 opacity (not visible unless you know to look)
- [ ] Tint color matches S1.2 color wash performance tier
- [ ] Effect is subtle enough to not interfere with any content above

**Subtasks:**
1. Add a second gradient layer in the fade zone
2. Use `performanceTier.color.opacity(0.03)` at the 0.5 position
3. Overlay on top of the existing dark/light fade
4. Verify it's invisible-unless-you-know at all performance tiers

---

### S6.3: Seamless Content Blending

**Description:**  
Ensure the fade gradient perfectly blends into the bar's glass background. The
bottom of the fade should exactly match the top of the glass surface — no gap,
no overlap, no color discontinuity.

**Acceptance Criteria:**
- [ ] Fade bottom edge perfectly aligns with glass top edge
- [ ] No 1px gap or overlap between fade and glass
- [ ] Color at the transition point is continuous
- [ ] Tested on all device sizes (SE to Pro Max)

**Subtasks:**
1. Verify VStack spacing is 0 between fade and content area
2. Match the final fade opacity to the glass background's visual appearance
3. Test on iPhone SE, iPhone 16, iPhone 16 Pro Max

---

## Story S7: Safe Area & Layout Polish

> **Goal:** Ensure the bar integrates perfectly with device-specific safe areas,
> the home indicator, and various screen sizes.

### S7.1: Home Indicator Integration

**Description:**  
On devices with a home indicator, the bottom safe area is 34pt. The bar should
extend its background through this area while keeping interactive elements above
it. Currently `padding(.bottom, 10)` may not be sufficient on all devices.

**Acceptance Criteria:**
- [ ] Bar background extends to the bottom edge of the screen
- [ ] All buttons are above the home indicator zone
- [ ] Consistent appearance on devices with and without home indicators
- [ ] No content clipping in the safe area zone

**Subtasks:**
1. Add `.padding(.bottom, max(bottomSafeArea, 12))` where bottomSafeArea is
   read from geometry
2. Extend glass background through bottom safe area via `.ignoresSafeArea(.container, edges: .bottom)` if not already


---

### S7.2: Dynamic Island & Notch Clearance

**Description:**  
Verify that the bar does not conflict with Dynamic Island or notch areas in any
orientation. This is primarily a verification task since the bar is at the bottom.

**Acceptance Criteria:**
- [ ] No visual conflicts with Dynamic Island
- [ ] Correct behavior in landscape (if applicable)
- [ ] No unexpected layout shifts on rotation

---

### S7.3: Landscape/iPad Parity Updates

**Description:**  
Update the `actionButtonsStack` (iPad/regular layout) to maintain visual parity
with the phone `pinnedBottomBar`. Apply the same glass treatments, gradient
enhancements, and animation principles.

This is a lower priority since the iPad version is inline (not pinned), but it
should feel like it belongs to the same design system.

**Acceptance Criteria:**
- [ ] iPad action buttons use the same gradient treatments as phone CTA
- [ ] iPad share button has the same tier-gradient shimmer border
- [ ] Visual hierarchy (primary → secondary → tertiary) is maintained
- [ ] iPad layout does not have the pinned bar (confirmed — already inline)

**Subtasks:**
1. Apply S3.1 gradient enhancements to iPad CTA buttons
2. Apply S4.2 shimmer border to iPad share button
3. Verify on iPad simulator (if available)

---

## Story S8: Final Integration & QA

> **Goal:** Verify the complete implementation across all modes, tiers, and
> device configurations. Ensure build and test pass.

### S8.1: Dark Mode Verification

**Acceptance Criteria:**
- [ ] All glass layers render correctly in dark mode
- [ ] Performance-tier color wash is visible against dark backgrounds
- [ ] Edge lighting is prominent without being harsh
- [ ] Text contrast meets accessibility minimums (4.5:1 for body, 3:1 for large)
- [ ] Share button shimmer is visible against dark glass

---

### S8.2: Light Mode Verification

**Acceptance Criteria:**
- [ ] Glass layers adapt to lighter opacities
- [ ] Performance-tier wash uses reduced opacity
- [ ] Edge lighting is visible without bleeding
- [ ] All text remains readable against light backgrounds
- [ ] Button gradients maintain vibrancy

---

### S8.3: All Tier Visual Verification

**Acceptance Criteria:**
- [ ] Free tier (gray) looks elegant and clean
- [ ] Pro tier (purple/pink) looks energetic
- [ ] Elite tier (deep purple) looks sophisticated
- [ ] Royal tier (gold/orange) looks luxurious
- [ ] Trial tier (rainbow) looks exciting and temporary

---

### S8.4: Build & Test Pass

**Acceptance Criteria:**
- [ ] `xcodebuild build` succeeds with 0 errors, 0 warnings
- [ ] `xcodebuild test` succeeds with 472+ tests, 0 failures
- [ ] No new compiler warnings introduced
- [ ] No performance regressions in Instruments (optional but recommended)

---

## Technical Notes

### Animation Drivers

The `pinnedBottomBar` should reuse existing animation state from `GameCompleteView`
rather than creating new animation drivers where possible:

| Animation | Source | Used For |
|-----------|--------|----------|
| `glowBreath` | `GameCompleteView` | CTA ambient glow pulse (S3.2) |
| `ringRotation` | `GameCompleteView` | Share shimmer rotation (S4.2) |
| `showBar` | `GameCompleteView` | Master container entrance |
| New: `showBarBg` | Local | Glass fade-in (S2.2) |
| New: `showBarPrimary` | Local | CTA slide-up (S2.1) |
| New: `showBarShare` | Local | Share fade-in (S2.1) |
| New: `showBarSecondary` | Local | Secondary fade-in (S2.1) |
| New: `shareBreath` | Local | Share attention pulse (S4.3) |
| New: `shareCompleted` | Local | Post-share checkmark (S4.4) |

### Color References

| Performance Tier | Color Property | Hex Approximation |
|-----------------|---------------|-------------------|
| Excellent | `.yellow` | `#EAB308` |
| Great | `.green` | `#22C55E` |
| Good | `.cyan` | `#06B6D4` |
| Keep Going | `.orange` | `#F97316` |

| Membership Tier | Primary Gradient | Feel |
|----------------|-----------------|------|
| Free | `#94a3b8 → #64748b` | Slate, dignified |
| Pro | `#a855f7 → #ec4899` | Vibrant purple-pink |
| Elite | `#7c3aed → #a21caf` | Deep purple |
| Royal | `#fbbf24 → #f43f5e` | Gold-coral |
| Trial | `#fbbf24 → #ec4899` | Gold-pink (temporary) |

### State Dependencies

```
GameCompleteView owns:
├─ showBar (Bool) — master entrance flag
├─ glowBreath (CGFloat) — breathing animation driver (0→2π)
├─ ringRotation (Double) — slow rotation driver (0→360°)
├─ performanceTier (computed) — Excellent/Great/Good/KeepGoing
├─ accuracy (computed) — 0.0–100.0
└─ tierManager (Environment) — provides tier gradients, XP multiplier

pinnedBottomBar accesses all of the above via `self.` in the same struct.
New @State variables for staggered entrance live in GameCompleteView alongside
existing animation state.
```

### File Changes Required

| File | Changes |
|------|---------|
| `FlashCardsView.swift` | `pinnedBottomBar` rewrite, new @State vars, staggered entrance |
| No new files | All changes are within the existing `pinnedBottomBar` computed property |

### Performance Considerations

- All glass layers are static (not animated) — no per-frame cost
- Performance-tier color wash is a single `RadialGradient` fill — negligible cost
- CTA glow pulse reuses `glowBreath` from parent — no new timer
- Share shimmer reuses `ringRotation` from parent — no new timer
- Total new @State variables: 5 (all Bool/CGFloat, trivial memory)

---

## Definition of Done

- [ ] All 8 stories implemented and verified
- [ ] All 25+ subtasks completed
- [ ] Dark mode + light mode tested
- [ ] All 5 membership tiers tested
- [ ] All 4 performance tiers tested
- [ ] "Next Category" primary and "Play Again" primary variants tested
- [ ] Build succeeds: 0 errors, 0 warnings
- [ ] Tests pass: 472+ tests, 0 failures
- [ ] No performance regressions
- [ ] Bar feels alive, premium, and inviting — a surface users want to screenshot

---

## Appendix A: Visual Reference Matrix

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  ░░▒▒▓▓ 48px atmospheric fade (S6) ▓▓▒▒░░           │  │
│  └───────────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ ━━━━━━━ 1px sharp tier edge line (S1.3) ━━━━━━━━━━━  │  │
│  │ ░░░░░░░ 24px soft tier glow bloom (S1.3) ░░░░░░░░░░  │  │
│  │                                                       │  │
│  │  ┌──────────────────────────────┐  ┌───────────────┐  │  │
│  │  │    ▸ Next Category           │  │  ↑ Share      │  │  │
│  │  │      Animals & Nature        │  │               │  │  │
│  │  │       [S3: Hero Button]      │  │  [S4: Pill]   │  │  │
│  │  └──────────────────────────────┘  └───────────────┘  │  │
│  │                                                       │  │
│  │  ┌──────────────┐  ┌──────────────────────────────┐   │  │
│  │  │ ↻ Play Again │  │  ← Back to Categories       │   │  │
│  │  │ [S5.1]       │  │  [S5.2]                      │   │  │
│  │  └──────────────┘  └──────────────────────────────┘   │  │
│  │                                                       │  │
│  │  [S1: Layered Glass Foundation with perf-tier wash]   │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              Safe Area / Home Indicator                │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Appendix B: Animation Timeline

```
Time (s)  Bar Elements
0.0       [Hero icon appears above]
0.2       [Title fades in above]
0.3       [Stats slide up above]
│
0.50  ──► Bar container slides up from +200pt
0.55  ──► Glass background fades in (0.3s ease-out)
0.60      [Extras start fading in above]
0.65  ──► Primary CTA springs up from +30pt (0.35s spring)
0.70  ──► Share button fades in from right
0.80  ──► Secondary buttons fade in
│
0.85      Bar fully materialized
│
2.00  ──► Share attention pulse begins (repeating)
│
∞         CTA glow + share shimmer breathe indefinitely
```

## Appendix C: Acceptance Checklist (Condensed)

```
Glass Foundation:
  □ Three-layer glass background
  □ Performance-tier color wash
  □ Sharp 1px edge line + 24px glow bloom
  □ Bottom inner shadow

Entrance Sequence:
  □ Four-phase staggered reveal
  □ Glass fades in first
  □ CTA springs up second
  □ Share fades in third
  □ Secondary fades in last

Hero Button (CTA):
  □ Inner light at 0.18 opacity
  □ Edge specular 0.45→0.03
  □ Dual shadow (near + far)
  □ Ambient glow pulse via glowBreath
  □ Performance-adaptive Play Again color

Share Button:
  □ Capsule shape (not square)
  □ 68pt wide minimum
  □ Tier-gradient shimmer border
  □ Attention pulse at ~2s post-entrance
  □ Post-share checkmark animation

Secondary Actions:
  □ Play Again: visible glass fill 0.06/0.1
  □ Back: text-only, 0.45/0.55 opacity, 13pt
  □ 14pt gap between rows

Atmospheric Fade:
  □ 48px 5-stop gradient
  □ Performance-tier tint at 0.03
  □ Seamless blend with glass

Polish:
  □ Safe area integration
  □ Dark mode ✓
  □ Light mode ✓
  □ All tiers ✓
  □ All performance levels ✓
  □ Build passes
  □ 472+ tests pass
```

---

*"The difference between a good product and a great product is attention to the*
*last 5%. The bottom bar is part of that 5%."*

— End of Epic E15 —
