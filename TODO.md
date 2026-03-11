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
| 2 | chinese_english | Chinese | 105/105 | 1575/1575 | 21/21 | ✅ |
| 3 | english_arabic | English | 83/105 | 1245/1575 | 16/20 | 🔄 |
| 4 | english_chinese | English | 52/105 | 780/1575 | 9/20 | 🔄 |
| 5 | english_french | English | 105/105 | 1575/1575 | 21/21 | ✅ |
| 6 | english_german | English | 87/105 | 1305/1575 | 17/20 | 🔄 |
| 7 | english_japanese | English | 105/105 | 1575/1575 | 21/21 | ✅ |
| 8 | french_english | French | 105/105 | 1575/1575 | 20/20 | ✅ |
| 9 | german_polish | German | 105/105 | 1575/1575 | 20/20 | ✅ |
| 10 | japanese_english | Japanese | 27/105 | 405/1575 | 4/20 | 🔄 |
| 11 | polish_arabic | Polish | 32/105 | 480/1575 | 5/20 | 🔄 |
| 12 | polish_chinese | Polish | 105/105 | 1575/1575 | 20/20 | ✅ |
| 13 | polish_french | Polish | 88/105 | 1320/1575 | 16/20 | 🔄 |
| 14 | polish_japanese | Polish | 17/105 | 255/1575 | 2/20 | 🔄 |
| 15 | polish_ukrainian | Polish | 12/105 | 180/1575 | 1/20 | 🔄 |
| 16 | ukrainian_english | Ukrainian | 58/105 | 870/1575 | 10/20 | 🔄 |
| 17 | ukrainian_polish | Ukrainian | 105/105 | 1575/1575 | 21/21 | ✅ |

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

### english_arabic — 🔄 IN PROGRESS (83/105 categories, 1245 items)
ID prefixes used: ea_ (all items use ea_ prefix with category-specific suffixes)

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: present_tense, definite_article, pronouns, sentence_structure, possessives, questions, common_expressions) | ✅ |
| 2 | past_tense, noun_gender, plural_forms, prepositions_basic, negation | ✅ |
| 3 | dual_form, future_tense, imperative_mood, verbal_nouns, adjective_agreement | ✅ |
| 4 | comparative_form, idafa_construction, relative_pronouns, conditional_sentences, passive_voice | ✅ |
| 5 | number_agreement, case_endings, verb_forms, attached_pronouns, demonstrative_pronouns | ✅ |
| 6 | kana_sisters, inna_sisters, hal_clause, tamyiz, maf3ul_mutlaq | ✅ |
| 7 | exception_particles, superlative_form, adverbs, conjunctions, vocative_style | ✅ |
| 8 | time_expressions, noun_patterns, verb_moods, object_pronouns, numbers_counting | ✅ |
| 9 | color_defects, word_order, topicalization, emphasis_structures, oath_expressions | ✅ |
| 10 | circumstantial_clause, broken_plural, nisba_adjectives, verb_form_ii, verb_form_v | ✅ |
| 11 | masdar_patterns, verb_form_iii, verb_form_iv, verb_form_vi, verb_form_vii | ✅ |
| 12 | verb_form_viii, verb_form_ix, verb_form_x, hollow_verbs, defective_verbs, doubled_verbs | ✅ |
| 13 | hamzated_verbs, passive_participle, active_participle, elative_form, root_system | ✅ |
| 14 | maf3ul_bihi, maf3ul_liajlih, maf3ul_fihi, badal_apposition, nunation_tanwin | ✅ |
| 15 | collective_nouns, diptote_nouns, five_nouns, verbal_sentence_types, nominal_sentence_types | ✅ |
| 16 | occupations, weather_nature, food_restaurant, health_body, travel_transport | ✅ |
| 17 | technology, education_learning, work_office, emotions_feelings, family_relations | ⬜ |
| 18 | daily_routines, formal_arabic, media_arabic, idiomatic_expressions, proverbs_sayings | ⬜ |
| 19 | common_errors, negation_advanced, question_particles, discourse_markers, register_formality | ⬜ |
| 20 | coordinating_conjunctions_advanced, subordinating_conjunctions, false_friends, revision_mixed, exam_strategies | ⬜ |

### english_chinese — 🔄 IN PROGRESS (52/105 categories, 780 items)
ID prefixes used: ec_wo, ec_mw, ec_time, ec_asp, ec_q, ec_n, ec_c, ec_sp, ec_de, ec_pr, ec_pb, ec_nc, ec_cl, ec_mv, ec_loc, ec_cj, ec_pos, ec_dm, ec_gr, ec_cs, ec_ft, ec_dr, ec_ba, ec_bei, ec_rc, ec_dc, ec_deg, ec_pot, ec_dur, ec_freq, ec_ex, ec_sv, ec_piv, ec_tc, ec_sd, ec_le, ec_zhe, ec_guo, ec_cov, ec_woa, ec_rcl, ec_ech, ec_voc, ec_drc, ec_pur, ec_cef, ec_rsp, ec_cmpa, ec_exc, ec_imp, ec_bvm, ec_jvc

| Batch | Categories | Status |
|-------|-----------|--------|
| 0 | (original 7: word_order, measure_words, time_expressions, aspect_markers, questions, negation, comparisons) | ✅ |
| 1 | sentence_particles, de_particles, pronouns, prepositions_basic, numbers_counting | ✅ |
| 2 | classifiers_basic, modal_verbs, location_expressions, conjunctions_basic, possessives | ✅ |
| 3 | demonstratives, greetings_common, colors_shapes, family_terms, daily_routines | ✅ |
| 4 | ba_construction, bei_passive, result_complement, direction_complement, degree_complement | ✅ |
| 5 | potential_complement, duration_expressions, frequency_expressions, existential_sentences, serial_verb | ✅ |
| 6 | pivotal_sentences, topic_comment, emphatic_shi_de, le_particle, zhe_particle | ✅ |
| 7 | guo_particle, coverbs, word_order_advanced, relative_clauses, expressing_change | ✅ |
| 8 | verb_object_compounds, directional_compounds, purpose_clauses, cause_effect, reported_speech | ✅ |
| 9 | comparison_advanced, exclamatory_sentences, imperative_sentences, bu_vs_mei, jiu_vs_cai | ✅ |
| 10 | sentence_final_particles_adv, resultative_compounds, expressing_obligation, expressing_ability, expressing_wishes | 🔄 |
| 11 | number_expressions_adv, indefinite_pronouns, chengyu_idioms, expressing_experience, expressing_suggestions | ⬜ |
| 12 | time_clauses_advanced, separable_verbs, nominal_predicates, expressing_approximation, expressing_continuation | ⬜ |
| 13 | address_forms, politeness_language, formal_written_chinese, quantity_expressions, manner_expressions | ⬜ |
| 14 | expressing_simultaneity, expressing_sequence, expressing_inclusion, expressing_concession, expressing_purpose_goal | ⬜ |
| 15 | passive_advanced, reduplication, rhetorical_questions, double_negation, correlative_conjunctions | ⬜ |
| 16 | complement_patterns_adv, expressing_degree, expressing_condition, expressing_contrast, expressing_emphasis | ⬜ |
| 17 | discourse_markers, formal_registers, idiomatic_expressions, proverbs_sayings, weather_climate | ⬜ |
| 18 | food_dining, travel_transport, health_body, work_business, technology_internet | ⬜ |
| 19 | education_academic, sports_hobbies, shopping_money, housing_home, environment_nature | ⬜ |
| 20 | media_communication, arts_culture, common_errors, register_shifts, exam_strategies | ⬜ |

### polish_chinese — ✅ COMPLETE (105/105 categories, 1575 items)
ID prefixes used: pc_pres, pc_mw, pc_past, pc_asp, pc_mod, pc_par, pc_qw, pc_neg, pc_cmp, pc_te, pc_loc, pc_dep, pc_ba, pc_bei, pc_cr, pc_cd, pc_num, pc_cla, pc_conj, pc_adv, pc_cond, pc_tc, pc_ex, pc_sv, pc_piv, pc_emph, pc_red, pc_pot, pc_dur, pc_baa, pc_rh, pc_le, pc_zhe, pc_guo, pc_wo, pc_cov, pc_sd, pc_rc, pc_ec, pc_dg, pc_vo, pc_dir, pc_pu, pc_ce, pc_rsp, pc_pav, pc_dx, pc_exc, pc_imp, pc_cmpa, pc_dn, pc_bm, pc_jc, pc_sfp, pc_res, pc_obl, pc_abl, pc_wish, pc_nc, pc_pp, pc_cp, pc_cc, pc_ip, pc_chengyu, pc_exp, pc_sug, pc_tcll, pc_vra, pc_deg, pc_sep, pc_np, pc_apx, pc_cont, pc_af, pc_pol, pc_fwc, pc_qe, pc_me, pc_sim, pc_seq, pc_incl, pc_cnc, pc_pg, pc_emo, pc_wc, pc_fd, pc_tt, pc_hb, pc_qpa, pc_va, pc_fvi, pc_wf, pc_em, pc_wb, pc_ti, pc_ea, pc_nm, pc_cs, pc_fam, pc_sh, pc_sm, pc_hh, pc_en, pc_prv, pc_dr

| Batch | Categories | Status |
|-------|-----------|--------|
| 0 | (original 7: present_tense, measure_words, past_tense, aspect_markers, modal_verbs, sentence_particles, question_words) | ✅ |
| 1 | negation, comparison_structures, time_expressions, location_words, de_particles | ✅ |
| 2 | ba_construction, bei_passive, complement_result, complement_direction, numbers_counting | ✅ |
| 3 | classifiers_advanced, conjunctions, adverbs, conditional_sentences, topic_comment | ✅ |
| 4 | existential_sentences, serial_verb, pivotal_sentences, emphatic_structures, reduplication | ✅ |
| 5 | potential_complement, duration_frequency, ba_advanced, rhetorical_questions, le_particle | ✅ |
| 6 | zhe_particle, guo_particle, word_order, coverbs, shi_de_construction | ✅ |
| 7 | relative_clauses, expressing_change, complement_degree, verb_object_compounds, directional_complement | ✅ |
| 8 | purpose_clauses, cause_effect, reported_speech, passive_advanced, directional_compounds | ✅ |
| 9 | exclamatory_sentences, imperative_sentences, comparison_advanced, double_negation, bu_vs_mei | ✅ |
| 10 | jiu_vs_cai, sentence_final_particles, resultative_compounds, expressing_obligation, expressing_ability | ✅ |
| 11 | expressing_wishes, number_expressions, preposition_phrases, complement_patterns, correlative_conjunctions | ✅ |
| 12 | indefinite_pronouns, chengyu_idioms, expressing_experience, expressing_suggestion, time_clauses | ✅ |
| 13 | verb_resultative_advanced, expressing_degree, separable_verbs, nominal_predicates, expressing_approximation | ✅ |
| 14 | expressing_continuation, address_forms, politeness_language, formal_written_chinese, quantity_expressions | ✅ |
| 15 | manner_expressions, expressing_simultaneity, expressing_sequence, expressing_inclusion, expressing_concession | ✅ |
| 16 | expressing_purpose_goal, expressing_emotion, weather_climate, food_dining, travel_transport | ✅ |
| 17 | health_body, question_patterns_advanced, verbal_aspect, formal_vs_informal, word_formation | ✅ |
| 18 | expressing_manner, work_business, technology_internet, education_academic, numbers_math | ✅ |
| 19 | colors_shapes, family_relationships, sports_hobbies, shopping_money, housing_home | ✅ |
| 20 | environment_nature, proverbs_sayings, daily_routines | ✅ |

### polish_french — 🔄 IN PROGRESS (88/105 categories, 1320 items)
ID prefixes used: pf_p, pf_a, pf_pc, pf_pr, pf_f, pf_q, pf_adj, pf_neg, pf_gn, pf_pos, pf_dem, pf_etr, pf_av, pf_imp, pf_pcvi, pf_fp, pf_cp, pf_sub, pf_impe, pf_pqp, pf_fa, pf_cpa, pf_ger, pf_pl, pf_pt, pf_adv, pf_comp, pf_sup, pf_cod, pf_coi, pf_ey, pf_rel, pf_ton, pf_acc, pf_vp, pf_di, pf_ct, pf_nega, pf_ext, pf_cl, pf_ci, pf_inf, pf_part, pf_subu, pf_cu, pf_hyp, pf_stys, pf_vpr, pf_plur, pf_acad, pf_plad, pf_quant, pf_apt, pf_dind, pf_conj, pf_idio, pf_virr, pf_psim, pf_ncar, pf_hdat, pf_caus, pf_lprc, pf_dpiy, pf_voy, pf_nour, pf_san, pf_trav, pf_tech, pf_env, pf_edu, pf_spo, pf_sent, pf_met, pf_ach, pf_log, pf_med, pf_jus, pf_pol
✅ FORMAT FIX COMPLETE: All 78 categories now use correct question/_____/options/correct/explanation format

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7) + negation, gender_nouns, possessive_adjectives, demonstratives, etre_conjugation, avoir_conjugation | ✅ |
| 2 | imparfait, passe_compose_vs_imparfait, futur_proche, conditionnel_present, subjonctif_present | ✅ |
| 3 | imperatif, plus_que_parfait, futur_anterieur, conditionnel_passe, gerondif | ✅ |
| 4 | prepositions_lieu, prepositions_temps, adverbes, comparatif, superlatif | ✅ |
| 5 | pronoms_cod, pronoms_coi, pronoms_en_y, pronoms_relatifs, pronoms_toniques | ✅ |
| 6 | accord_participe, voix_passive, discours_indirect, concordance_temps, phrase_negative_avancee | ✅ |
| 7 | expressions_temps, connecteurs_logiques, constructions_impersonnelles, infinitif_usages, participe_present | ✅ |
| 8 | subjonctif_usages, conditionnel_usages, phrases_hypothetiques, style_soutenu, verbes_pronominaux | ✅ |
| 9 | nombre_pluriel, accord_adjectifs, place_adjectifs, expressions_quantite, articles_partitifs | ✅ |
| 10 | discours_indirect_avance, conjonctions, expressions_idiomatiques, verbes_irreguliers_courants, passe_simple | ✅ |
| 11 | nombres_cardinaux, heure_date, faire_causatif, laisser_percevoir, depuis_pendant_il_y_a | ✅ |
| 12 | voyages_transport, nourriture_restaurant, sante_corps, travail_bureau, technologie | ✅ |
| 13 | environnement_nature, education, sports_loisirs, sentiments_emotions, meteo_climat | ✅ |
| 14 | achats_argent, logement_maison, medias_communication, justice_droit, politique_societe | ✅ |
| 15 | sciences_recherche, arts_culture, economie_affaires, famille_relations, vetements_mode | ✅ |
| 16 | couleurs_formes, nationalites, professions, marqueurs_discours, registre_formel | ✅ |
| 17 | subjonctif_passe, subjonctif_imparfait, participe_passe_compose, voix_pronominale_passive, gallicismes | ⬜ |
| 18 | expressions_avoir, expressions_faire, expressions_etre, verbes_prepositionnels, interrogation_avancee | ⬜ |
| 19 | exclamation, double_pronoms, ne_expletif, tout_meme_autre, revision_generale | ⬜ |
| 20 | structures_argumentatives, registre_informel | ⬜ |

### polish_japanese — 🔄 IN PROGRESS (17/105 categories, 255 items)
ID prefixes used: pj_part, pj_verb, pj_adj, pj_neg, pj_q, pj_pol, pj_cnt, pj_te, pj_nadj, pj_loc, pj_time, pj_des, pj_pst, pj_gr, pj_pot, pj_cta, pj_conj

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: particles, verb_forms, adjectives, negation, questions, politeness, counting) + te_form, na_adjectives, location_expressions, time_expressions, desire_expressions | ✅ |
| 2 | past_tense, giving_receiving, potential_form, counters_advanced, conjunctions | ✅ |
| 3 | verb_groups, imperative_form, passive_voice, causative_form, conditional_ba | 🔄 |
| 4 | conditional_tara, volitional_form, comparison, superlatives, adverbs_basic | ⬜ |
| 5 | nominalizers, relative_clauses, quotation_to, hearsay_sou, appearance_you | ⬜ |
| 6 | obligation_nakereba, permission_temo, prohibition_tewa, reason_kara, reason_node | ⬜ |
| 7 | purpose_tame, contrast_ga, contrast_kedo, listing_tari, simultaneous_nagara | ⬜ |
| 8 | change_naru, preparation_oku, experience_koto, advice_hou_ga_ii, trying_miru | ⬜ |
| 9 | transitive_intransitive, compound_verbs, honorific_speech, humble_speech, existence_iru_aru | ⬜ |
| 10 | direction_iku_kuru, duration_frequency, sentence_endings, formal_written, informal_speech | ⬜ |
| 11 | onomatopoeia, numbers_advanced, family_terms, body_health, emotions_feelings | ⬜ |
| 12 | weather_seasons, food_cooking, travel_directions, shopping_money, work_office | ⬜ |
| 13 | education_school, technology, sports_hobbies, housing_home, transport | ⬜ |
| 14 | media_communication, socializing, opinions_arguments, requests_invitations, formal_casual | ⬜ |
| 15 | idiomatic_expressions, proverbs_sayings, jlpt_n5_patterns, jlpt_n4_patterns, jlpt_n3_patterns | ⬜ |
| 16 | jlpt_n2_patterns, jlpt_n1_patterns, keigo_review, verb_noun_collocations, adjective_collocations | ⬜ |
| 17 | counter_words_advanced, temporal_clauses, embedded_questions, causative_passive, benefactive_advanced | ⬜ |
| 18 | expressing_regret, expressing_surprise, expressing_certainty, expressing_uncertainty, formal_correspondence | ⬜ |
| 19 | business_japanese, academic_japanese, newspaper_japanese, classical_remnants, common_mistakes | ⬜ |
| 20 | register_shifts, environment_nature, arts_culture, science_research, exam_strategies | ⬜ |

### polish_ukrainian — 🔄 IN PROGRESS (12/105 categories, 180 items)
ID prefixes used: pu_pres, pu_asp, pu_past, pu_fut, pu_case, pu_prep, pu_vc, pu_pp, pu_pos, pu_dem, pu_neg, pu_qt

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7) + personal_pronouns, possessive_pronouns, demonstrative_pronouns, negation, questions | ✅ |
| 2 | imperative_mood, conditional_mood, reflexive_verbs, gender_nouns, plural_forms | 🔄 |
| 3 | adjective_agreement, comparative_forms, superlative_forms, adverbs_basic, adverbs_manner | ⬜ |
| 4 | numerals_cardinal, numerals_ordinal, conjunctions_basic, conjunctions_subordinating, relative_pronouns | ⬜ |
| 5 | passive_constructions, reported_speech, participles_active, participles_passive, verbal_nouns | ⬜ |
| 6 | verbs_of_motion, prefixed_verbs_motion, impersonal_constructions, vocative_case, instrumental_case_usage | ⬜ |
| 7 | genitive_case_usage, dative_case_usage, accusative_case_usage, locative_case_usage, case_preposition_combos | ⬜ |
| 8 | soft_hard_consonants, spelling_rules, cyrillic_challenges, word_stress, diminutives | ⬜ |
| 9 | word_formation_prefixes, word_formation_suffixes, compound_words, false_friends, cognate_traps | ⬜ |
| 10 | time_expressions, duration_frequency, age_dates, seasons_months, days_time_of_day | ⬜ |
| 11 | asking_directions, travel_transport, food_restaurant, shopping_prices, health_body | ⬜ |
| 12 | work_office, education_school, technology_internet, weather_climate, housing_home | ⬜ |
| 13 | family_relationships, emotions_feelings, sports_hobbies, clothing_fashion, colors_descriptions | ⬜ |
| 14 | formal_register, informal_register, polite_requests, opinions_arguments, agreeing_disagreeing | ⬜ |
| 15 | cause_effect, contrast_concession, purpose_result, condition_hypothesis, temporal_clauses | ⬜ |
| 16 | indefinite_pronouns, quantifiers, emphatic_constructions, word_order_advanced, ellipsis_patterns | ⬜ |
| 17 | idiomatic_expressions, proverbs_sayings, collocations, phrasal_equivalents, discourse_markers | ⬜ |
| 18 | media_communication, environment_nature, politics_society, arts_culture, science_research | ⬜ |
| 19 | business_economics, crime_justice, academic_writing, common_errors, exam_strategies | ⬜ |
| 20 | religion_traditions, revision_mixed, register_shifts | ⬜ |

### french_english — ✅ COMPLETE (105/105 categories, 1575 items)
All 20 batches completed. ID prefixes used: fe_ps, fe_pc, fe_past, fe_fut, fe_q, fe_neg, fe_pp, fe_ppc, fe_paco, fe_ppf, fe_ar, fe_mv, fe_pn, fe_poa, fe_ppl, fe_pt, fe_tia, fe_cu, fe_sa, fe_mml, fe_comp, fe_sup, fe_af, fe_am, fe_cc, fe_csub, fe_imp, fe_op, fe_dp, fe_rp, fe_ip, fe_poss, fe_czf, fe_cst, fe_pv, fe_rs, fe_qt, fe_rc, fe_gi, fe_pvb, fe_pva, fe_cau, fe_ut, fe_md, fe_st, fe_wi, fe_sva, fe_sya, fe_fc, fe_fp, fe_ppc, fe_ao, fe_te, fe_ss, fe_en, fe_ee, fe_ban, fe_mc, fe_inv, fe_ptcl, fe_cs, fe_edl, fe_dm, fe_hl, fe_fir, fe_ci, fe_ff, fe_col, fe_nt, fe_eo, fe_mr, fe_ab, fe_ob, fe_pe, fe_trv, fe_fd, fe_hb, fe_wb, fe_td, fe_env, fe_edl, fe_spl, fe_ws, fe_shm, fe_hh, fe_tra, fe_emo, fe_fam, fe_dr, fe_det, fe_quant, fe_wf, fe_vp, fe_lw, fe_pun, fe_ep, fe_rq, fe_eq, fe_eco, fe_prl, fe_exs, fe_tel, fe_desc, fe_caj, fe_rev

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: present_simple, present_continuous, past_simple, future_simple, questions, negation, present_perfect) | ✅ |
| 2 | present_perfect_continuous, past_continuous, past_perfect, articles, modal_verbs | ✅ |
| 3 | plural_nouns, possessive_adjectives, prepositions_place, prepositions_time, there_is_there_are | ✅ |
| 4 | countable_uncountable, some_any, much_many_lot, comparatives, superlatives | ✅ |
| 5 | adverbs_frequency, adverbs_manner, conjunctions_coordinating, conjunctions_subordinating, imperative | ✅ |
| 6 | object_pronouns, demonstrative_pronouns, reflexive_pronouns, indefinite_pronouns, possessive_pronouns | ✅ |
| 7 | conditionals_zero_first, conditionals_second_third, passive_voice, reported_speech, question_tags | ✅ |
| 8 | relative_clauses, gerunds_infinitives, phrasal_verbs_basic, phrasal_verbs_advanced, causative | ✅ |
| 9 | used_to, make_do, say_tell, wish_if_only, subject_verb_agreement | ✅ |
| 10 | still_yet_already, future_continuous, future_perfect, past_perfect_continuous, tag_questions_advanced | ✅ |
| 11 | adjective_order, too_enough, so_such, either_neither, each_every | ✅ |
| 12 | both_all_none, mixed_conditionals, inversion, participle_clauses, cleft_sentences | ✅ |
| 13 | emphasis_do, discourse_markers, hedging_language, formal_informal_register, common_idioms | ✅ |
| 14 | false_friends_french, collocations_common, narrative_tenses, expressing_opinions, making_requests | ✅ |
| 15 | expressing_ability, expressing_obligation, expressing_permission, travel_english, food_dining | ✅ |
| 16 | health_body, work_business, technology_digital, environment, education_learning | ✅ |
| 17 | sports_leisure, weather_seasons, shopping_money, housing_home, transport | ✅ |
| 18 | emotions_feelings, family_relationships, daily_routines, determiners, quantifiers | ✅ |
| 19 | word_formation, verb_patterns, linking_words, punctuation, expressing_purpose | ✅ |
| 20 | reported_questions, embedded_questions, expressing_contrast, parallel_structure, exam_strategies, telephone_english, describing_people, compound_adjectives, revision_mixed | ✅ |
### english_french — ✅ COMPLETE (105/105 categories, 1575 items)
ID prefixes used: ef, ef_inv, ef_qf, ef_si1, ef_si2, ef_si3, ef_ap, ef_am, ef_af, ef_at, ef_aq, ef_pl, ef_pt, ef_pap, ef_pm, ef_pc2, ef_cc, ef_cs, ef_lcc, ef_lo, ef_la, ef_gr, ef_pf, ef_cn, ef_can, ef_av, ef_sp, ef_dp, ef_ip, ef_pp, ef_iqp, ef_ps, ef_pa, ef_si, ef_spqp, ef_fdp, ef_eav, ef_ef, ef_ee, ef_vpi, ef_vp, ef_fr, ef_ir, ef_ie, ef_pvs, ef_ff, ef_clf, ef_es, ef_nom, ef_mer, ef_dil, ef_ne, ef_sa, ef_ct, ef_pe, ef_pi, ef_tv, ef_fdr, ef_hb, ef_wo, ef_ti, ef_env, ef_edl, ef_fe, ef_sh, ef_hh, ef_cso, ef_sl, ef_mc, ef_pol, ef_sr, ef_rg, ef_cm, ef_ex
All 21 batches completed.

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: present_tense, articles, passe_compose, future_tense, pronouns, negation, adjectives) | ✅ |
| 2 | imparfait, conditionnel_present, subjonctif_present, imperatif, reflexive_verbs | ✅ |
| 3 | partitive_articles, possessive_adjectives, demonstrative_adjectives, comparatif, superlatif | ✅ |
| 4 | relative_pronouns, direct_object_pronouns, indirect_object_pronouns, pronoun_y, pronoun_en | ✅ |
| 5 | passe_compose_agreement, plus_que_parfait, futur_anterieur, conditionnel_passe, subjonctif_usage | ✅ |
| 6 | passive_voice, gerondif, participe_present, causative_faire, reported_speech | ✅ |
| 7 | si_clauses_type1, si_clauses_type2, si_clauses_type3, question_formation, inversion_questions | ✅ |
| 8 | adverb_placement, adverbs_manner, adverbs_frequency, adverbs_time, adverbs_quantity | ✅ |
| 9 | prepositions_lieu, prepositions_temps, prepositions_avec_pour, prepositions_movement, prepositions_compound | ✅ |
| 10 | conjunctions_coordinating, conjunctions_subordinating, linking_cause_consequence, linking_opposition, linking_addition | ✅ |
| 11 | gender_rules, plural_formation, compound_nouns, collective_abstract_nouns, abstract_vocabulary | ✅ |
| 12 | stressed_pronouns, double_pronouns, indefinite_pronouns, possessive_pronouns, interrogative_pronouns | ✅ |
| 13 | passe_simple, passe_anterieur, subjonctif_imparfait, subjonctif_plus_que_parfait, futur_dans_le_passe | ✅ |
| 14 | expressions_avoir, expressions_faire, expressions_etre, verbes_pronominaux_idiomatiques, verbes_prepositionnels | ✅ |
| 15 | formal_register, informal_register, idiomatic_expressions, proverbs_sayings, false_friends | ✅ |
| 16 | cleft_sentences, emphatic_structures, nominalisation, mise_en_relief, discours_indirect_libre | ✅ |
| 17 | ne_expletif, subjonctif_avance, concordance_temps, phrase_exclamative, phrase_impersonnelle | ✅ |
| 18 | travel_vocabulary, food_restaurant, health_body, work_office, technology_internet | ✅ |
| 19 | environment_nature, education_learning, feelings_emotions, shopping_money, housing_home | ✅ |
| 20 | culture_society, sports_leisure, media_communication, politics_law, science_research | ✅ |
| 21 | revision_generale, common_mistakes, exam_strategies | ✅ |

### english_german — 🔄 IN PROGRESS (87/105 categories, 1305 items)
ID prefixes used: eg_pres, eg_art, eg_past, eg_order, eg_case, eg_prep, eg_mod, eg_pp, eg_plq, eg_fut, eg_acc, eg_dat, eg_gen, eg_plu, eg_adj, eg_sep, eg_ref, eg_conj, eg_sub, eg_rel, eg_pv, eg_imp, eg_cmp, eg_sup, eg_adv, eg_neg, eg_qf, eg_pos, eg_dem, eg_ind, eg_per, eg_twp, eg_tp, eg_vp, eg_kii, eg_ki, eg_cond, eg_rs, eg_inf, eg_ptc, eg_ng, eg_cn, eg_wn, eg_sv, eg_mx, eg_hvs, eg_wu, eg_da, eg_wo, eg_di, eg_fp, eg_sw, eg_eo, eg_ms, eg_fi, eg_id, eg_ps, eg_te, eg_nq, eg_dm, eg_wf, eg_pf, eg_vpc, eg_apc, eg_npc, eg_es, eg_pov, eg_las, eg_mp, eg_disc, eg_lw, eg_emph, eg_wc, eg_rest, eg_shop, eg_tel, eg_fw, eg_work, eg_emot, eg_trav, eg_hlth, eg_edu, eg_tech, eg_env, eg_spo, eg_fam, eg_hous

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: present_tense, articles, past_tense, word_order, cases, prepositions, modal_verbs) | ✅ |
| 2 | present_perfect, past_perfect, future_tense, accusative_case, dative_case | ✅ |
| 3 | genitive_case, plural_nouns, adjective_declension, separable_verbs, reflexive_verbs | ✅ |
| 4 | conjunctions, subordinate_clauses, relative_clauses, passive_voice, imperative | ✅ |
| 5 | comparative_adjectives, superlative_adjectives, adverbs, negation, question_formation | ✅ |
| 6 | possessive_pronouns, demonstrative_pronouns, indefinite_pronouns, personal_pronouns, two_way_prepositions | ✅ |
| 7 | temporal_prepositions, verb_prefixes, konjunktiv_ii, konjunktiv_i, conditional_sentences | ✅ |
| 8 | reported_speech, infinitive_clauses, participle_clauses, noun_gender, compound_nouns | ✅ |
| 9 | weak_nouns, strong_verbs, mixed_verbs, haben_vs_sein, werden_uses | ✅ |
| 10 | da_compounds, wo_compounds, double_infinitive, future_perfect, subjunctive_wishes | ✅ |
| 11 | expressing_opinions, making_suggestions, formal_vs_informal, idiomatic_expressions, proverbs_sayings | ✅ |
| 12 | time_expressions, numbers_quantities, diminutives, word_formation, prefixes_suffixes | ✅ |
| 13 | verb_preposition_combos, adjective_preposition_combos, noun_preposition_combos, es_constructions, position_verbs | ✅ |
| 14 | lassen_constructions, modal_particles, discourse_markers, linking_words, emphasis_structures | ✅ |
| 15 | weather_climate, at_restaurant, shopping_expressions, telephone_phrases, formal_writing | ✅ |
| 16 | workplace_office, emotions_reactions, travel_vacation, health_body, education_school | ✅ |
| 17 | technology_internet, environment_nature, sports_hobbies, family_relationships, housing_home | ✅ |
| 18 | transport_directions, media_communication, crime_justice, politics_society, science_research | ⬜ |
| 19 | arts_culture, business_economics, register_formality, academic_writing, colloquial_register | ⬜ |
| 20 | false_friends, common_errors, passive_alternatives, extended_adjective, verb_patterns, exam_strategies, advanced_word_order, revision_mixed | ⬜ |

### german_polish — ✅ COMPLETE (105/105 categories, 1575 items)
All 20 batches completed. ID prefixes used: gp_pres, gp_case, gp_past, gp_asp, gp_fut, gp_cond, gp_ad, gp_ac, gp_ga, gp_da, gp_loc, gp_ins, gp_c1_, gp_c2_, gp_c3_, gp_irv_, gp_ref_, gp_imp, gp_mot, gp_mod, gp_par, gp_vn, gp_gen, gp_dat, gp_acc, gp_locaa, gp_insaa, gp_pz, gp_na, gp_pw, gp_pd, gp_prp, gp_pn, gp_dem, gp_pos, gp_ref, gp_ind, gp_adv, gp_advb, gp_ng, gp_np, gp_card, gp_ord, gp_time, gp_dcal, gp_quant, gp_wob, gp_neg, gp_quest, gp_sub, gp_conj, gp_pass, gp_rep, gp_conds, gp_impers, gp_vnom, gp_greet, gp_opin, gp_tfreq, gp_emot, gp_dir, gp_dim, gp_pvb, gp_wder, gp_comp, gp_aug, gp_aspa, gp_numg, gp_rel, gp_ptca, gp_ssa, gp_cleft, gp_cmpa, gp_purp, gp_caus, gp_conc, gp_tca, gp_form, gp_coll, gp_idiom, gp_trav, gp_food, gp_hlth, gp_work, gp_tech, gp_env, gp_edu, gp_spo, gp_fea, gp_wea, gp_shop, gp_hous, gp_fam, gp_med, gp_just, gp_pol, gp_art, gp_sci, gp_acad, gp_biz, gp_err, gp_exam, gp_ff, gp_rev

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: present_tense, cases_intro, past_tense, aspect, future_tense, conditional, advanced) | ✅ |
| 2 | nominative_accusative, genitive_basics, dative_basics, locative_basics, instrumental_basics | ✅ |
| 3 | conjugation_1, conjugation_2, conjugation_3, irregular_verbs, reflexive_verbs | ✅ |
| 4 | imperative_mood, motion_verbs, modal_verbs, participles, verbal_nouns | ✅ |
| 5 | genitive_advanced, dative_advanced, accusative_advanced, locative_advanced, instrumental_advanced | ✅ |
| 6 | prepositions_z, prepositions_na, prepositions_w, prepositions_do, prepositions_przy | ✅ |
| 7 | personal_pronouns, demonstrative_pronouns, possessive_pronouns, reflexive_pronouns, indefinite_pronouns | ✅ |
| 8 | adjective_declension, adjective_comparison, adverbs, noun_gender, noun_plural | ✅ |
| 9 | cardinal_numbers, ordinal_numbers, time_expressions, date_calendar, quantifiers | ✅ |
| 10 | word_order_basic, negation, questions, subordinate_clauses, conjunctions | ✅ |
| 11 | passive_voice, reported_speech, conditional_sentences, impersonal_constructions, verbal_nouns_gerunds | ✅ |
| 12 | greetings_politeness, expressions_of_opinion, time_frequency, emotions_feelings, directions_location | ✅ |
| 13 | diminutives, prefixes_verbs, word_derivation, compound_words, augmentatives | ✅ |
| 14 | aspect_pairs_advanced, numerals_grammar, relative_clauses, participles_advanced, sentence_structure_advanced | ✅ |
| 15 | cleft_sentences, comparison_advanced, purpose_result_clauses, cause_reason_clauses, concession_clauses | ✅ |
| 16 | time_clauses_advanced, formal_register, colloquial_polish, idiomatic_expressions, travel_transport | ✅ |
| 17 | food_restaurant, health_body, work_office, technology_media, environment_nature | ✅ |
| 18 | education_learning, sports_hobbies, feelings_emotions_advanced, weather_seasons, shopping_money, housing_home, family_relationships, media_communication | ✅ |
| 19 | crime_justice, politics_society, arts_culture, science_research, academic_polish | ✅ |
| 20 | business_economics, common_errors, exam_strategies, false_friends, revision_mixed | ✅ |

### english_japanese — ✅ COMPLETE (105/105 categories, 1575 items)
ID prefixes used: ej_part, ej_wo, ej_pres, ej_past, ej_pol, ej_adj, ej_cnt, ej_tf_, ej_nf_, ej_qf_, ej_dm_, ej_ev_, ej_vg_, ej_pt_, ej_vl_, ej_cd_, ej_imp_, ej_psv_, ej_cau_, ej_grv_, ej_hon_, ej_hum_, ej_nom_, ej_cmp_, ej_sup_, ej_cnj_, ej_cna_, ej_tim_, ej_dur_, ej_rel_, ej_quo_, ej_des_, ej_try_, ej_app_, ej_obl_, ej_per_, ej_abl_, ej_rea_, ej_pur_, ej_con_, ej_lst_, ej_sim_, ej_cos_, ej_prp_, ej_exp_, ej_adv_, ej_tri_, ej_cpv_, ej_aux_, ej_adb_, ej_ada_, ej_ono_, ej_sep_, ej_fws_, ej_nca_, ej_fam_, ej_bdy_, ej_emo_, ej_wea_, ej_fod_, ej_trv_, ej_shp_, ej_wrk_, ej_edu_, ej_tec_, ej_sph_, ej_hou_, ej_trn_, ej_med_, ej_soc_, ej_opn_, ej_req_, ej_fcs_, ej_idm_, ej_prv_, ej_jn5_, ej_abp_, ej_jn4_, ej_jn3_, ej_jn2_, ej_jn1_, ej_kgr_, ej_vnc_, ej_ajc_, ej_cwa_, ej_tca_, ej_emq_, ej_cap_, ej_bna_, ej_reg_, ej_sur_, ej_cer_, ej_unc_, ej_fcr_, ej_biz_, ej_acj_, ej_nws_, ej_cls_, ej_dia_, ej_gen_, ej_rgs_, ej_cmk_, ej_spt_, ej_cvs_, ej_wrj_, ej_cex_

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: particles_basic, word_order, present_tense, past_tense, polite_forms, adjectives, counters) | ✅ |
| 2 | te_form, negative_forms, question_formation, demonstratives, existence_verbs | ✅ |
| 3 | verb_conjugation_groups, potential_form, volitional_form, conditional_forms | ✅ |
| 4 | imperative_prohibitive, passive_voice, causative_form, giving_receiving, honorific_speech | ✅ |
| 5 | humble_speech, nominalizers, comparisons, superlatives, conjunctions_basic | ✅ |
| 6 | conjunctions_advanced, time_expressions, duration_frequency, relative_clauses, quotation_hearsay | ✅ |
| 7 | desire_want, trying_attempting, appearance_seeming, obligation_necessity, permission_prohibition | ✅ |
| 8 | ability_possibility, reason_cause, purpose, contrast_concession, listing_actions | ✅ |
| 9 | simultaneous_actions, change_of_state, preparation_readiness, experience_attempts, advice_suggestion | ✅ |
| 10 | transitive_intransitive, compound_verbs, auxiliary_verbs, adverbs_basic, adverbs_advanced | ✅ |
| 11 | onomatopoeia, sentence_ending_particles, formal_written_style, numbers_counting_advanced, family_terms | ✅ |
| 12 | body_health, emotions_feelings, weather_seasons, food_cooking, travel_directions | ✅ |
| 13 | shopping_money, work_office, education_school, technology, sports_hobbies | ✅ |
| 14 | housing_home, transport, media_communication, socializing, opinions_arguments | ✅ |
| 15 | requests_invitations, formal_casual_speech, idiomatic_expressions, proverbs_sayings, jlpt_n5_patterns | ✅ |
| 16 | jlpt_n4_patterns, jlpt_n3_patterns, jlpt_n2_patterns, jlpt_n1_patterns, keigo_review | ✅ |
| 17 | verb_noun_collocations, adjective_collocations, counter_words_advanced, temporal_clauses_advanced, embedded_questions | ✅ |
| 18 | causative_passive, benefactive_advanced, expressing_regret, expressing_surprise, expressing_certainty | ✅ |
| 19 | expressing_uncertainty, formal_correspondence, business_japanese, academic_japanese, newspaper_japanese | ✅ |
| 20 | classical_remnants, dialect_awareness, gender_in_language, register_shifts, common_mistakes | ✅ |
| 21 | sentence_patterns, conversation_strategies, written_japanese, cultural_expressions | ✅ |

### polish_chinese — ✅ COMPLETE (105/105 categories, 1575 items)
ID prefixes used: pc_pres, pc_mw, pc_pt, pc_am, pc_mv, pc_sp, pc_qw, pc_neg, pc_cs, pc_te, pc_lw, pc_dep, pc_ba, pc_bei, pc_cr, pc_cd, pc_nc, pc_cla, pc_conj, pc_adv, pc_cond, pc_tc, pc_es, pc_sv, pc_piv, pc_emp, pc_red, pc_pot, pc_df, pc_baa, pc_rq, pc_le, pc_zhe, pc_guo, pc_wo, pc_cov, pc_sde, pc_rc, pc_ec, pc_cdg, pc_voc, pc_dc, pc_pur, pc_ce, pc_rs, pc_pa, pc_drc, pc_exc, pc_imp, pc_cma, pc_dn, pc_bm, pc_jc, pc_sfp, pc_rsc, pc_obl, pc_abl, pc_wsh, pc_ne, pc_pp, pc_cp, pc_ccj, pc_ip, pc_chi, pc_ee, pc_sug, pc_tcl, pc_vra, pc_dge, pc_sep, pc_np, pc_apr, pc_ctn, pc_af, pc_pl, pc_fwc, pc_qe, pc_me, pc_sim, pc_seq, pc_inc, pc_con, pc_pg, pc_emo, pc_wc, pc_fd, pc_tt, pc_hb, pc_qpa, pc_va, pc_fi, pc_wf, pc_mn, pc_wb, pc_ti, pc_ea, pc_nm, pc_cls, pc_fr, pc_sh, pc_sm, pc_hh, pc_en, pc_prv, pc_dr

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 17) present_tense, measure_words, past_tense, aspect_markers, modal_verbs, sentence_particles, question_words, negation, comparison_structures, time_expressions, location_words, de_particles, ba_construction, bei_passive, complement_result, complement_direction, numbers_counting | ✅ |
| 2 | classifiers_advanced, conjunctions, adverbs, conditional_sentences, topic_comment | ✅ |
| 3 | existential_sentences, serial_verb, pivotal_sentences, emphatic_structures, reduplication | ✅ |
| 4 | potential_complement, duration_frequency, ba_advanced, rhetorical_questions, le_particle | ✅ |
| 5 | zhe_particle, guo_particle, word_order, coverbs, shi_de_construction | ✅ |
| 6 | relative_clauses, expressing_change, complement_degree, verb_object_compounds, directional_complement | ✅ |
| 7 | purpose_clauses, cause_effect, reported_speech, passive_advanced, directional_compounds | ✅ |
| 8 | exclamatory_sentences, imperative_sentences, comparison_advanced, double_negation, bu_vs_mei | ✅ |
| 9 | jiu_vs_cai, sentence_final_particles, resultative_compounds, expressing_obligation, expressing_ability | ✅ |
| 10 | expressing_wishes, number_expressions, preposition_phrases, complement_patterns, correlative_conjunctions | ✅ |
| 11 | indefinite_pronouns, chengyu_idioms, expressing_experience, expressing_suggestion, time_clauses | ✅ |
| 12 | verb_resultative_advanced, expressing_degree, separable_verbs, nominal_predicates, expressing_approximation | ✅ |
| 13 | expressing_continuation, address_forms, politeness_language, formal_written_chinese, quantity_expressions | ✅ |
| 14 | manner_expressions, expressing_simultaneity, expressing_sequence, expressing_inclusion, expressing_concession | ✅ |
| 15 | expressing_purpose_goal, expressing_emotion, weather_climate, food_dining, travel_transport | ✅ |
| 16 | health_body, question_patterns_advanced, verbal_aspect, formal_vs_informal, word_formation | ✅ |
| 17 | expressing_manner, work_business, technology_internet, education_academic, numbers_math | ✅ |
| 18 | colors_shapes, family_relationships, sports_hobbies, shopping_money, housing_home | ✅ |
| 19 | environment_nature, proverbs_sayings, daily_routines | ✅ |

### japanese_english — 🔄 IN PROGRESS (27/105 categories, 405 items)
ID prefixes used: je_art, je_subj, je_pres, je_past, je_fut, je_mod, je_pp, je_pcon, je_paco, je_ppc, je_ppf, je_czf, je_cst, je_pv, je_rs, je_rc, je_cos, je_prpl, je_prt, je_gi, je_pvb, je_qt, je_sva, je_qn, je_det, je_cj, je_af

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | present_continuous, past_continuous, present_perfect_continuous, past_perfect, conditionals_zero_first | ✅ |
| 2 | conditionals_second_third, passive_voice, reported_speech, relative_clauses, comparatives_superlatives | ✅ |
| 3 | prepositions_place, prepositions_time, gerunds_infinitives, phrasal_verbs_basic, question_tags | ✅ |
| 4 | subject_verb_agreement, quantifiers, determiners, conjunctions, adverbs_frequency | ✅ |
| 5 | adverbs_manner, countable_uncountable, possessives, reflexive_pronouns, indefinite_pronouns | ⬜ |
| 6 | demonstratives, phrasal_verbs_advanced, collocations, word_order, cleft_sentences | ⬜ |
| 7 | inversion, wish_hope, used_to, had_better_would_rather, be_supposed_to | ⬜ |
| 8 | causative, participle_clauses, noun_clauses, ellipsis, substitution | ⬜ |
| 9 | emphasis_structures, discourse_markers, linking_words, hedging, formal_register | ⬜ |
| 10 | informal_register, academic_writing, expressing_opinions, making_suggestions, agreeing_disagreeing | ⬜ |
| 11 | requests_offers, complaints_apologies, describing_trends, describing_processes, cause_effect | ⬜ |
| 12 | contrast_concession, time_expressions, future_forms_advanced, narrative_tenses, mixed_conditionals | ⬜ |
| 13 | articles_advanced, compound_nouns, adjective_order, gradable_ungradable, intensifiers_mitigators | ⬜ |
| 14 | plural_irregulars, false_friends, common_errors_japanese, idiomatic_expressions, proverbs_sayings | ⬜ |
| 15 | travel_vocabulary, food_restaurant, health_body, work_office, technology_internet | ⬜ |
| 16 | environment_nature, education_learning, sports_hobbies, feelings_emotions, weather_climate | ⬜ |
| 17 | shopping_money, housing_home, transport_directions, media_communication, crime_justice | ⬜ |
| 18 | politics_society, science_research, arts_culture, business_economics, family_relationships | ⬜ |
| 19 | reported_speech_advanced, passive_voice_advanced, relative_clauses_advanced, emphasis_fronting, verb_patterns | ⬜ |
| 20 | noun_modifiers, register_formality, exam_strategies | ⬜ |

### ukrainian_english — 🔄 IN PROGRESS (58/105 categories, 870 items)
ID prefixes used: ue_ps, ue_art, ue_past, ue_fut, ue_q, ue_cm, ue_pp, ue_pc, ue_mv, ue_ppc, ue_paco, ue_ppf, ue_czf, ue_cst, ue_pv, ue_rs, ue_rc, ue_cs, ue_pb, ue_pa, ue_gi, ue_pvb, ue_qt, ue_sva, ue_qn, ue_det, ue_cj, ue_af, ue_am, ue_cu, ue_pos, ue_rp, ue_ip, ue_dem, ue_pva, ue_pva_col, ue_col, ue_wo, ue_cle, ue_inv, ue_wh, ue_ut, ue_wr, ue_hb, ue_bst, ue_cau, ue_ptc, ue_nc, ue_ell, ue_sub, ue_emp, ue_dm, ue_lw, ue_hdg, ue_fr, ue_ifr, ue_aw, ue_eo, ue_ms

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7) + present_continuous, modal_verbs, present_perfect_continuous, past_continuous, past_perfect | ✅ |
| 2 | conditionals_zero_first, conditionals_second_third, passive_voice, reported_speech, relative_clauses, comparatives_superlatives | ✅ |
| 3 | prepositions_basic, prepositions_advanced, gerunds_infinitives, phrasal_verbs_basic, question_tags | ✅ |
| 4 | subject_verb_agreement, quantifiers, determiners, conjunctions, adverbs_frequency | ✅ |
| 5 | adverbs_manner, countable_uncountable, possessives, reflexive_pronouns, indefinite_pronouns | ✅ |
| 6 | demonstratives, phrasal_verbs_advanced, collocations, word_order, cleft_sentences | ✅ |
| 7 | inversion, wish_hope, used_to, would_rather, had_better | ✅ |
| 8 | be_supposed_to, causative_have_get, participle_clauses, noun_clauses, ellipsis | ✅ |
| 9 | substitution, emphasis_structures, discourse_markers, linking_words, hedging | ✅ |
| 10 | formal_register, informal_register, academic_writing, expressing_opinions, making_suggestions | ✅ |
| 11 | agreeing_disagreeing, requests_offers, complaints_apologies, describing_trends, describing_processes | ⬜ |
| 12 | cause_effect, contrast_concession, time_expressions, future_forms_advanced, narrative_tenses | ⬜ |
| 13 | mixed_conditionals, articles_advanced, compound_nouns, adjective_order, gradable_ungradable | ⬜ |
| 14 | intensifiers_mitigators, plural_irregulars, gender_nouns, false_friends, idiomatic_expressions | ⬜ |
| 15 | proverbs_sayings, travel_vocabulary, food_restaurant, health_body, work_office | ⬜ |
| 16 | technology_internet, environment_nature, education_learning, sports_hobbies, feelings_emotions | ⬜ |
| 17 | weather_climate, shopping_money, housing_home, transport_directions, media_communication | ⬜ |
| 18 | crime_justice, politics_society, science_research, arts_culture, business_economics | ⬜ |
| 19 | reported_speech_advanced, passive_voice_advanced, relative_clauses_advanced, emphasis_fronting, ellipsis_substitution | ⬜ |
| 20 | noun_modifiers, exam_strategies | ⬜ |

### ukrainian_polish — ✅ COMPLETE (105/105 categories, 1575 items)
ID prefixes used: up_pres, up_case, up_fut, up_ci, up_prep, up_pron, up_pt, up_adj, up_asp, up_neg, up_conj, up_num, up_mod, up_ref, up_cond, up_comp, up_imp, up_pas, up_instr, up_genpl, up_loc, up_dat, up_acc, up_voc, up_asp_e, up_mot, up_time, up_ng, up_pln, up_dim, up_poss, up_qw, up_wo, up_fi, up_rel, up_rs, up_pasc, up_ff, up_cog, up_sp, up_sh, up_pv, up_wf, up_cw, up_advb, up_advm, up_supa, up_ip, up_dp, up_nc, up_no, up_pa, up_ppas, up_vn, up_impc, up_subc, up_purp, up_ce, up_tc, up_ch, up_cc, up_em, up_ell, up_quant, up_inde, up_disc, up_idiom, up_prov, up_coll, up_phe, up_polr, up_opin, up_agrd, up_trav, up_food, up_shop, up_heal, up_work, up_edu, up_tech, up_weat, up_hous, up_fam, up_emot, up_sprt, up_cloth, up_col, up_media, up_env, up_pol, up_arts, up_sci, up_biz, up_crime, up_acad, up_frmr, up_relig, up_cerr, up_cyrc, up_wstr, up_regs, up_revn, up_exam, up_advg, up_finr

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7: present_tense, cases, future_tense, cases_intro, prepositions, pronouns, past_tense) | ✅ |
| 2 | adjectives, aspect_verbs, negation, conjunctions, numbers_counting | ✅ |
| 3 | modal_verbs, reflexive_verbs, conditional_mood, comparative_adjectives, imperative_mood | ✅ |
| 4 | passive_voice, instrumental_case, genitive_plural, locative_case, dative_case | ✅ |
| 5 | accusative_case, vocative_case, verb_aspects, motion_verbs, time_expressions | ✅ |
| 6 | noun_genders, plural_nouns, diminutives, possessive_pronouns, question_words | ✅ |
| 7 | word_order, formal_informal, relative_clauses, reported_speech, passive_constructions | ✅ |
| 8 | false_friends, cognate_patterns, spelling_rules, soft_hard_stems, prefixed_verbs | ✅ |
| 9 | word_formation, compound_words, adverbs_basic, adverbs_manner, superlative_adjectives | ✅ |
| 10 | indefinite_pronouns, demonstrative_pronouns, numerals_cardinal, numerals_ordinal, participles_active | ✅ |
| 11 | participles_passive, verbal_nouns, impersonal_constructions, subordinate_clauses, purpose_clauses | ✅ |
| 12 | cause_effect, temporal_clauses, condition_hypothesis, contrast_concession, emphasis_constructions | ✅ |
| 13 | ellipsis_patterns, quantifiers, indefinite_expressions, discourse_markers, idiomatic_expressions | ✅ |
| 14 | proverbs_sayings, collocations, phrasal_equivalents, polite_requests, opinions_arguments | ✅ |
| 15 | agreeing_disagreeing, travel_transport, food_restaurant, shopping_prices, health_body | ✅ |
| 16 | work_office, education_school, technology_internet, weather_climate, housing_home | ✅ |
| 17 | family_relationships, emotions_feelings, sports_hobbies, clothing_fashion, colors_descriptions | ✅ |
| 18 | media_communication, environment_nature, politics_society, arts_culture, science_research | ✅ |
| 19 | business_economics, crime_justice, academic_writing, formal_register_adv, religion_traditions | ✅ |
| 20 | common_errors, cyrillic_challenges, word_stress, register_shifts, revision_mixed | ✅ |
| 21 | exam_strategies, advanced_grammar_review, final_review | ✅ |

### polish_arabic — 🔄 IN PROGRESS (32/105 categories, 480 items)
ID prefixes used: pa_pres, pa_art, pa_past, pa_pr, pa_fut, pa_dual, pa_neg, pa_ga, pa_ns, pa_sm, pa_ppd, pa_pos, pa_prep, pa_dem, pa_num, pa_adja, pa_bp, pa_sp, pa_id, pa_bq, pa_tt, pa_cs, pa_vf1, pa_vf23, pa_vf45, pa_vf67, pa_vf8x, pa_hv, pa_dv, pa_dbv, pa_hz, pa_pva

| Batch | Categories | Status |
|-------|-----------|--------|
| 1 | (original 7) + gender_agreement, nominal_sentences, sun_moon_letters, personal_pronouns_detailed, possessive_suffixes | ✅ |
| 2 | prepositions_basic_ar, demonstratives_arabic, numbers_1_10, adjective_agreement, broken_plurals_basic | ✅ |
| 3 | sound_plurals, idafa_construct, basic_questions, time_telling, colors_shapes | ✅ |
| 4 | verb_forms_I, verb_forms_II_III, verb_forms_IV_V, verb_forms_VI_VII, verb_forms_VIII_IX_X | ✅ |
| 5 | hollow_verbs, defective_verbs, doubled_verbs, hamzated_verbs, passive_voice_arabic | ✅ |
| 6 | masdar_verbal_nouns, active_participle, passive_participle, kana_and_sisters, inna_and_sisters | ⬜ |
| 7 | accusative_case, genitive_case, nominative_case, conditional_sentences, relative_pronouns_ar | ⬜ |
| 8 | imperative_mood, subjunctive_mood, jussive_mood, numbers_11_100, ordinal_numbers | ⬜ |
| 9 | comparative_superlative, temporal_clauses, adverbs_arabic, object_pronouns_attached, hal_circumstantial | ⬜ |
| 10 | tamyiz_specification, exceptions_ila, vocative_case, oath_expressions, root_system | ⬜ |
| 11 | pattern_system, nunation_tanwin, definite_article_rules, dual_plurals_advanced, collective_nouns | ⬜ |
| 12 | emphatic_verbs, exclamatory_form, diminutive_form, nisba_adjective, verbal_vs_nominal_sentences | ⬜ |
| 13 | topicalization, emphasis_tawkid, badal_apposition, five_nouns, diptote_nouns | ⬜ |
| 14 | waw_conjunction, fa_conjunction, thumma_conjunction, negation_advanced, lam_negation | ⬜ |
| 15 | maa_negation, lan_laysa, question_particles, exclamation_particles, restriction_particles | ⬜ |
| 16 | formal_arabic, media_arabic, literary_arabic, quran_grammar_basics, idiomatic_expressions_ar | ⬜ |
| 17 | proverbs_sayings_ar, common_errors_polish, false_friends_ar, travel_vocabulary_ar, food_restaurant_ar | ⬜ |
| 18 | health_body_ar, work_office_ar, technology_internet_ar, environment_nature_ar, education_learning_ar | ⬜ |
| 19 | sports_hobbies_ar, feelings_emotions_ar, weather_climate_ar, shopping_money_ar, housing_home_ar | ⬜ |
| 20 | transport_directions_ar, media_communication_ar, exam_strategies_ar | ⬜ |

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
*Last updated: 2025-07-15*
