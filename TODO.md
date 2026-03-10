# Beta Grammar Content Expansion - Full Parity TODO

## Objective
Expand all 17 beta language pairs to **105 categories × 15 items = 1,575 items** each, matching the main pairs.

## Current State
- **7 MAIN pairs**: 100-112 categories each (1,498-1,680 items) ✅
- **arabic_english**: 105 categories, 1,575 items ✅ COMPLETE
- **16 remaining BETA pairs**: 7 categories each (105 items) — need **98 more categories** each

## Scale
- Total new categories: **1,568** (16 pairs × 98 categories) — arabic_english done
- Total new items: **23,520** (1,568 categories × 15 items)
- Target total: ~39,000+ items across all 24 pairs

## CRITICAL FORMAT RULE
**ALL grammar items MUST use `_____` (fill-in-the-blank) placeholder format.**
- `question`: Contains `_____` as placeholder (regex `_{3,}` in GrammarView.swift)
- `correct` and `options`: SHORT fill-in words/phrases only (NOT full sentences)
- This is essential for SwiftUI rendering via `splitOnBlanks()` — answers are highlighted in green (#10b981)

## Status Legend
- ⬜ Not started | 🔄 In progress | ✅ Complete

## Approach
- Process one language pair at a time
- **Max 5 categories per script** at `/tmp/` (atomic, manageable batches)
- Each batch script appends categories to JSON, validates IDs, and reports count
- Categories are tailored to each language pair's specific grammar features
- Explanations in the learner's native language (source language), 200+ chars
- Each pair needs ~20 batch scripts (98 new categories ÷ 5 = ~20 batches)

## Beta Pairs Progress

| # | Pair | Explanation Lang | Cats | Items | Batches Done | Status |
|---|------|-----------------|------|-------|-------------|--------|
| 1 | arabic_english | Arabic | 105/105 | 1575/1575 | 20/20 | ✅ |
| 2 | chinese_english | Chinese | 7/105 | 105/1575 | 0/20 | ⬜ |
| 3 | english_arabic | English | 7/105 | 105/1575 | 0/20 | ⬜ |
| 4 | english_chinese | English | 7/105 | 105/1575 | 0/20 | ⬜ |
| 5 | english_french | English | 7/105 | 105/1575 | 0/20 | ⬜ |
| 6 | english_german | English | 7/105 | 105/1575 | 0/20 | ⬜ |
| 7 | english_japanese | English | 7/105 | 105/1575 | 0/20 | ⬜ |
| 8 | french_english | French | 7/105 | 105/1575 | 0/20 | ⬜ |
| 9 | german_polish | German | 7/105 | 105/1575 | 0/20 | ⬜ |
| 10 | japanese_english | Japanese | 7/105 | 105/1575 | 0/20 | ⬜ |
| 11 | polish_arabic | Polish | 7/105 | 105/1575 | 0/20 | ⬜ |
| 12 | polish_chinese | Polish | 7/105 | 105/1575 | 0/20 | ⬜ |
| 13 | polish_french | Polish | 7/105 | 105/1575 | 0/20 | ⬜ |
| 14 | polish_japanese | Polish | 7/105 | 105/1575 | 0/20 | ⬜ |
| 15 | polish_ukrainian | Polish | 7/105 | 105/1575 | 0/20 | ⬜ |
| 16 | ukrainian_english | Ukrainian | 7/105 | 105/1575 | 0/20 | ⬜ |
| 17 | ukrainian_polish | Ukrainian | 7/105 | 105/1575 | 0/20 | ⬜ |

### arabic_english — ✅ COMPLETE (105/105 categories, 1575 items)
All 20 batches completed. ID prefixes used: ae_ps, ae_ar, ae_pas, ae_pc, ae_fs, ae_mv, ae_pp, ae_ppc, ae_paco, ae_ppf, ae_czf, ae_cst, ae_pv, ae_rs, ae_rc, ae_cos, ae_pb, ae_pa, ae_gi, ae_pvb, ae_qt, ae_sva, ae_qu, ae_dt, ae_cj, ae_af, ae_am, ae_cu, ae_po, ae_rp, ae_ip, ae_dm, ae_pva, ae_cl, ae_wo, ae_cs, ae_inv, ae_wh, ae_ut, ae_wr, ae_hb, ae_bs, ae_chg, ae_nc, ae_el, ae_sb, ae_es, ae_dsc, ae_lw, ae_hd, ae_fr, ae_ifr, ae_aw, ae_eo, ae_ms, ae_ad, ae_ro, ae_ca, ae_dt2_, ae_dp, ae_ce, ae_cc, ae_te, ae_ffa, ae_nt, ae_mc, ae_arta, ae_cn, ae_ao, ae_gu, ae_im, ae_pi, ae_gn, ae_ff, ae_cer, ae_ie, ae_pvs, ae_tv, ae_fdr, ae_hb2_, ae_wo2_, ae_ti, ae_en, ae_edl, ae_sh, ae_fe, ae_wc, ae_sm, ae_hh, ae_td, ae_mc2_, ae_cj2_, ae_pso, ae_sr, ae_ac, ae_be, ae_rf, ae_rsa, ae_pva2_, ae_rca, ae_ef, ae_ess, ae_nm, ae_exs

| Batch | Categories | Status |
|-------|-----------|--------|
| 1-2 | (original 7) + present_perfect_continuous, past_continuous, past_perfect, conditionals_zero_first, conditionals_second_third, passive_voice, reported_speech, relative_clauses, comparatives_superlatives, prepositions_basic | ✅ |
| 3 | prepositions_advanced, gerunds_infinitives, phrasal_verbs_basic, question_tags, subject_verb_agreement | ✅ |
| 4 | quantifiers, determiners, conjunctions, adverbs_frequency, adverbs_manner | ✅ |
| 5 | countable_uncountable, possessives, reflexive_pronouns, indefinite_pronouns, demonstratives | ✅ |
| 6 | phrasal_verbs_advanced, collocations, word_order, cleft_sentences, inversion | ✅ |
| 7 | wish_hope, used_to, would_rather, had_better, be_supposed_to | ✅ |
| 8 | causative_have_get, participle_clauses, noun_clauses, ellipsis, substitution | ✅ |
| 9 | emphasis_structures, discourse_markers, linking_words, hedging, formal_register | ✅ |
| 10 | informal_register, academic_writing, expressing_opinions, making_suggestions, agreeing_disagreeing | ✅ |
| 11 | requests_offers, complaints_apologies, describing_trends, describing_processes, cause_effect | ✅ |
| 12 | contrast_concession, time_expressions, future_forms_advanced, narrative_tenses, mixed_conditionals | ✅ |
| 13 | articles_advanced, compound_nouns, adjective_order, gradable_ungradable, intensifiers_mitigators | ✅ |
| 14 | plural_irregulars, gender_nouns, false_friends, common_errors, idiomatic_expressions | ✅ |
| 15 | proverbs_sayings, travel_vocabulary, food_restaurant, health_body, work_office | ✅ |
| 16 | technology_internet, environment_nature, education_learning, sports_hobbies, feelings_emotions | ✅ |
| 17 | weather_climate, shopping_money, housing_home, transport_directions, media_communication | ✅ |
| 18 | crime_justice, politics_society, science_research, arts_culture, business_economics | ✅ |
| 19 | register_formality, reported_speech_advanced, passive_voice_advanced, relative_clauses_advanced, emphasis_fronting | ✅ |
| 20 | ellipsis_substitution, noun_modifiers, exam_strategies | ✅ |

## Main Pairs (Complete - Reference)

| Pair | Cats | Items | Status |
|------|------|-------|--------|
| english_spanish | 105 | 1575 | ✅ |
| german_english | 107 | 1605 | ✅ |
| german_spanish | 105 | 1575 | ✅ |
| polish_english | 109 | 1635 | ✅ |
| polish_german | 100 | 1499 | ✅ |
| polish_spanish | 100 | 1498 | ✅ |
| spanish_english | 112 | 1680 | ✅ |

## Quality Criteria
1. All fields required: `id`, `question`, `translation`, `options`(4), `correct`, `explanation`
2. Explanations 200+ chars, pedagogically substantive, in learner's native language
3. All 4 options plausible distractors
4. No duplicate IDs within or across categories
5. Progressive difficulty: beginner → intermediate → advanced categories
6. Categories tailored to source→target language-specific grammar features

## Category Template (Reference: english_spanish 105 categories)
Covers: tenses, articles, pronouns, prepositions, ser/estar distinctions, subjunctive, commands, conditionals, passive voice, comparatives, reflexive verbs, idioms, question words, formal/informal register, workplace language, emotions, travel, food, discourse markers, verb patterns, etc.

Each beta pair should adapt this breadth to its own language pair's grammar.

---
*Last updated: 2025-07-14*
