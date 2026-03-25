# Icon Library — LumenLingo Frontend

Centralised icon component library for consistent, accessible, cross-platform iconography.

## Design Specifications

- **ViewBox:** 24×24
- **Stroke weight:** 1.5px (matching the refined glass-morphism aesthetic)
- **Colour:** `currentColor` — inherits from parent text colour via Tailwind classes
- **Accessibility:** `aria-hidden="true"` by default; pass `aria-label` to override for icons that serve as sole interactive content

## Usage

```tsx
import { FlashcardIcon, SoundscapeIcon } from '@/components/icons';

<FlashcardIcon size={32} className="text-violet" />
<SoundscapeIcon size={16} className="text-foreground-muted" />
<BrainIcon size={20} className="text-cyan" aria-label="Intelligence" />
```

## Icon Catalogue

| Component | Purpose | Replaces |
|-----------|---------|----------|
| `FlashcardIcon` | Flashcard / card-flip feature | 🃏, inline flashcard SVG |
| `SpacedRepetitionIcon` | Spaced repetition / SRS | 🧠 (in SRS context) |
| `PracticeModeIcon` | Practice modes / quiz grid | 🎯, inline grid SVG |
| `SoundscapeIcon` | Ambient soundscapes | 🎵, 🎧, inline wave SVG |
| `BreathingOrbIcon` | Focus mode / breathing exercises | 🔮, inline animated circles |
| `ProgressIcon` | Progress tracking / stats | 📊, inline bar-chart SVG |
| `LanguagePairIcon` | Language pairs / globe | 🌍, inline globe SVG |
| `MembershipIcon` | Premium tiers / membership | 👑, inline star-pedestal SVG |
| `BrainIcon` | Learning / intelligence | 🧠 (in hero badges) |
| `DesignIcon` | Design / creativity | 🎨 |
| `DeviceIcon` | Smartphone / app | 📱 |
| `DiamondIcon` | Premium / gem | 💎 |
| `SparkleIcon` | Sparkle / highlight | ✨ |

## Soundscape Preset Icons (Story 1.3)

| Component | Purpose | Replaces |
|-----------|---------|----------|
| `CoffeeShopIcon` | Coffee shop ambiance | ☕ |
| `OceanWavesIcon` | Ocean waves soundscape | 🌊 |
| `DeepSpaceIcon` | Deep space / cosmic ambiance | 🌌 |
| `ParisCafeIcon` | Paris café atmosphere | 🇫🇷 |
| `MountainStreamIcon` | Mountain stream soundscape | ⛰️ |

## Celebration Icons (Story 1.6)

| Component | Purpose | Replaces |
|-----------|---------|----------|
| `CelebrationIcon` | Confetti / high score celebration | 🎉 |
| `ApplauseIcon` | Trophy / good score | 👏 |
| `EncourageIcon` | Encouragement / keep going | 💪 |

## Rules

1. No emoji characters in `.tsx` files outside of `blog/mdx-components.tsx` editorial callouts.
2. Every new icon must use the same `IconProps` interface from `./types.ts`.
3. Use `currentColor` — never hard-code colours in SVG paths.
4. Always set `aria-hidden="true"` unless the icon is the sole content of an interactive element.
