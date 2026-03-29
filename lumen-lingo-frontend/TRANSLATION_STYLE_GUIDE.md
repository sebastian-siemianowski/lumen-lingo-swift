# Translation Style Guide — LumenLingo

> Per-language guidelines for tone, register, formatting, and cultural conventions.
> All translators and reviewers must follow this guide.

---

## General Principles

1. **Tone**: Warm, encouraging, subtly premium. We celebrate the beauty of language learning.
2. **Voice**: Second person ("you" / equivalent). Active voice preferred.
3. **Length**: Translations may be up to ~20% longer than English. If significantly longer, rephrase concisely.
4. **Consistency**: Use the same term for the same concept throughout. Refer to `TRANSLATION_GLOSSARY.md`.
5. **Brand names**: Never translate LumenLingo, LumenShore, App Store, or tier names (Free/Pro/Elite/Royal).

---

## Per-Language Guidelines

### English (en) — Source Language

- **Register**: Informal but polished. "You" not "one".
- **Date format**: DD Month YYYY (e.g. "2 June 2025")
- **Numbers**: Comma thousands separator, period decimal (1,000.99)
- **Currency**: £ GBP (primary market is UK)

### Spanish (es)

- **Register**: **Tú** (informal). LumenLingo's tone is approachable, not corporate.
- **Date format**: DD de month de YYYY (e.g. "2 de junio de 2025")
- **Numbers**: Period thousands separator, comma decimal (1.000,99) — Latin American convention
- **Currency**: $ USD (default LATAM audience)
- **Notes**: Use neutral Latin American Spanish (avoid region-specific slang). Prefer "aplicación" over "app" in body text; "app" is acceptable in headings/CTAs.

### French (fr)

- **Register**: **Vous** (formal). French digital convention for brands addressing a broad audience.
- **Date format**: DD month YYYY (e.g. "2 juin 2025")
- **Numbers**: Space thousands separator, comma decimal (1 000,99)
- **Currency**: € EUR
- **Notes**: Use French typographic rules: non-breaking space before `:`, `!`, `?`, `;`. Prefer "application" over "app" except in casual CTAs.

### German (de)

- **Register**: **Sie** (formal). Standard for SaaS / digital products in DACH markets.
- **Date format**: DD. Month YYYY (e.g. "2. Juni 2025")
- **Numbers**: Period thousands separator, comma decimal (1.000,99)
- **Currency**: € EUR
- **Notes**: Compound nouns are one word (Sprachlernanwendung not Sprach Lern Anwendung). Capitalise all nouns. Prefer formal register but keep sentences concise.

### Polish (pl)

- **Register**: **Ty** (informal). Polish digital convention for modern apps.
- **Date format**: DD month YYYY (e.g. "2 czerwca 2025")
- **Numbers**: Space thousands separator, comma decimal (1 000,99)
- **Currency**: zł PLN
- **Notes**: Pay attention to Polish noun declension — feature names may need grammatical cases. Keep sentences natural; avoid anglicisms where good Polish equivalents exist.

### Japanese (ja)

- **Register**: **です/ます** (polite-neutral). Standard for consumer apps.
- **Date format**: YYYY年MM月DD日 (e.g. "2025年6月2日")
- **Numbers**: Comma thousands separator, period decimal (1,000.99) — standard Japanese convention
- **Currency**: ¥ JPY
- **Notes**: Use katakana for established English loan words (アプリ, ダウンロード). Avoid excessive kanji — prefer a mix of kanji and hiragana for readability. Keep sentences short; Japanese UI text should be more concise than English.

### Chinese Simplified (zh)

- **Register**: Neutral-polite. Use 您 (formal "you") sparingly — default to 你.
- **Date format**: YYYY年MM月DD日 (e.g. "2025年6月2日")
- **Numbers**: Comma thousands separator, period decimal (1,000.99)
- **Currency**: ¥ CNY
- **Notes**: Simplified Chinese only (not Traditional). Avoid overly literary language; use clear, modern web copy style. Feature names should use established Chinese tech vocabulary where available.

### Arabic (ar)

- **Register**: **أنت** (standard MSA, addressing the reader directly). Formal but warm.
- **Date format**: DD month YYYY (e.g. "٢ يونيو ٢٠٢٥" or "2 يونيو 2025" — Western numerals acceptable)
- **Numbers**: Western numerals acceptable (Arabic-Indic optional in body text)
- **Currency**: ر.س SAR (Saudi Riyal — largest Arabic-speaking market for apps)
- **Text direction**: RTL (right-to-left). Ensure all UI elements render correctly in RTL.
- **Notes**: Use Modern Standard Arabic (MSA) — understood across all Arabic-speaking countries. Avoid dialectal expressions. Pay attention to gender — default to masculine where the reader's gender is unknown, but prefer gender-neutral phrasing when possible.

### Ukrainian (uk)

- **Register**: **Ти** (informal). Modern Ukrainian digital convention.
- **Date format**: DD month YYYY (e.g. "2 червня 2025")
- **Numbers**: Space thousands separator, comma decimal (1 000,99)
- **Currency**: ₴ UAH
- **Notes**: Use modern Ukrainian orthography (2019 standard). Avoid russianisms — prefer native Ukrainian terms. "Застосунок" for app (not "додаток" which is ambiguous).

---

## Date & Number Formatting Summary

| Locale | Date Format | Thousands Sep | Decimal Sep | Primary Currency |
|---|---|---|---|---|
| en | DD Month YYYY | , | . | £ GBP |
| es | DD de month de YYYY | . | , | $ USD |
| fr | DD month YYYY | (space) | , | € EUR |
| de | DD. Month YYYY | . | , | € EUR |
| pt | DD de month de YYYY | . | , | R$ BRL |
| pl | DD month YYYY | (space) | , | zł PLN |
| ja | YYYY年MM月DD日 | , | . | ¥ JPY |
| zh | YYYY年MM月DD日 | , | . | ¥ CNY |
| ar | DD month YYYY | , | . | ر.س SAR |
| uk | DD month YYYY | (space) | , | ₴ UAH |

---

## Review Checklist for Native Speakers

Use this checklist when reviewing translations for your locale:

- [ ] All brand names untranslated (LumenLingo, LumenShore, Free/Pro/Elite/Royal)
- [ ] Correct register/formality used consistently throughout
- [ ] Numbers and dates formatted per locale convention
- [ ] No grammatical errors, typos, or unnatural phrasing
- [ ] Feature names match TRANSLATION_GLOSSARY.md
- [ ] CTAs feel natural and motivating (not literal translations)
- [ ] Text fits within UI constraints (no truncation in buttons/headers)
- [ ] No offensive, culturally insensitive, or inappropriate content
- [ ] Legal pages (Privacy, Terms) use appropriate formal legal register
- [ ] Blog posts read naturally — not "translated English"
