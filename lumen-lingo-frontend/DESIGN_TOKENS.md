# LumenShore Design Tokens

All design tokens for the LumenLingo marketing website. Defined in `src/app/globals.css` using Tailwind CSS v4's `@theme` directive.

---

## Colour Palette

### Backgrounds

| Token              | Value     | Usage                  |
| ------------------ | --------- | ---------------------- |
| `background`       | `#0a0a0f` | Page base (deep void)  |
| `surface`          | `#111118` | Elevated surfaces      |
| `surface-card`     | `#1a1a24` | Card surfaces          |
| `surface-elevated` | `#22222e` | Hover / elevated cards |

### Foreground (Text)

| Token                  | Value     | Usage          |
| ---------------------- | --------- | -------------- |
| `foreground`           | `#f4f4f5` | Primary text   |
| `foreground-secondary` | `#a1a1aa` | Secondary text |
| `foreground-muted`     | `#71717a` | Muted text     |

### Accent: Violet (Primary CTA)

| Token          | Value     | Usage       |
| -------------- | --------- | ----------- |
| `violet`       | `#8b5cf6` | Default     |
| `violet-hover` | `#7c3aed` | Hover state |
| `violet-active`| `#6d28d9` | Active/pressed |

### Accent: Cyan (Secondary)

| Token        | Value     | Usage       |
| ------------ | --------- | ----------- |
| `cyan`       | `#06b6d4` | Default     |
| `cyan-hover` | `#0891b2` | Hover state |

### Accent: Amber (Premium / Royal)

| Token         | Value     | Usage           |
| ------------- | --------- | --------------- |
| `amber`       | `#f59e0b` | Stars, badges   |
| `amber-hover` | `#d97706` | Hover state     |

### Glass Surfaces

| Token          | Value                         | Usage        |
| -------------- | ----------------------------- | ------------ |
| `glass`        | `rgba(255, 255, 255, 0.04)`   | Glass fill   |
| `glass-border` | `rgba(255, 255, 255, 0.08)`   | Glass border |
| `glass-hover`  | `rgba(255, 255, 255, 0.06)`   | Hover fill   |

---

## Typography

| Role    | Font           | Weight     | CSS Variable     |
| ------- | -------------- | ---------- | ---------------- |
| Body    | Inter          | 400–600    | `--font-inter`   |
| Display | Space Grotesk  | 500, 700   | `--font-cabinet` |

Use `font-sans` for body text and `font-display` for headings.

---

## Spacing (8px Base Grid)

| Token            | Value   | Usage                |
| ---------------- | ------- | -------------------- |
| `section-y`      | `120px` | Vertical rhythm      |
| `card-gap`       | `24px`  | Gap between cards    |
| `container-px`   | `24px`  | Horizontal padding   |

---

## Border Radius

| Token    | Value    | Usage       |
| -------- | -------- | ----------- |
| `card`   | `16px`   | Cards       |
| `button` | `12px`   | Buttons     |
| `pill`   | `9999px` | Pills/tags  |
| `sm`     | `8px`    | Small chips |

---

## Custom Utilities

### Glass Morphism

```css
.glass-card        /* background + border + blur */
.glass-card-hover  /* enhanced hover state */
```

### Glow Effects

```css
.glow-violet  /* violet box-shadow glow */
.glow-cyan    /* cyan box-shadow glow  */
.glow-amber   /* amber box-shadow glow */
```

### Gradient Text

```css
.text-gradient        /* violet → cyan gradient text */
.text-gradient-amber  /* amber shimmer gradient text */
```
