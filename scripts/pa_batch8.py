import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "imperative_mood",
        "name": "Tryb rozkazujący (الأمر)",
        "description": "صيغة الأمر في اللغة العربية",
        "iconName": "exclamationmark.bubble",
        "color": "#60a5fa",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_imp1",
                "question": "_____ الكتابَ! (Napisz książkę!) — od كَتَبَ/يَكْتُبُ",
                "translation": "(Napisz książkę!)",
                "options": ["اُكْتُبْ", "كَتَبَ", "يَكْتُبُ", "كاتِبْ"],
                "correct": "اُكْتُبْ",
                "explanation": "Poprawnie: 'اُكْتُبْ!' (uktub!) = napisz! Tworzenie rozkazu: 1) Weź czas teraźn. 2. os.: تَكْتُبُ, 2) Odetnij prefiks تَـ: كْتُبُ, 3) Dodaj hamzat al-waṣl: اُكْتُبُ, 4) Zmień końcówkę na sukun (مجزوم): اُكْتُبْ. Samogłoska hamzy: ḍamma (اُ) jeśli samogłoska środkowa to ḍamma (كْتُبُ), kasra (اِ) w pozostałych: اِفْعَلْ, اِفْعِلْ."
            },
            {
                "id": "pa_imp2",
                "question": "_____ هنا! (Usiądź tutaj!) — od جَلَسَ/يَجْلِسُ",
                "translation": "(Usiądź tutaj!)",
                "options": ["اِجْلِسْ", "جَلَسَ", "اُجْلُسْ", "جالِسْ"],
                "correct": "اِجْلِسْ",
                "explanation": "Poprawnie: 'اِجْلِسْ!' (ijlis!) = usiądź! Teraźniejszy: يَجْلِسُ (z kasrą) → تَجْلِسُ → جْلِسُ → اِجْلِسْ (hamza z KASRĄ, bo samogłoska środkowa to kasra). Reguła samogłoski hamzy: يَفْعُلُ → اُفْعُلْ (ḍamma), يَفْعِلُ → اِفْعِلْ (kasra), يَفْعَلُ → اِفْعَلْ (kasra!). Fatha rdzeniowa → kasra hamzy (nie fatha!)."
            },
            {
                "id": "pa_imp3",
                "question": "_____ الطعامَ! (Jedz jedzenie!) — od أَكَلَ/يَأْكُلُ",
                "translation": "(Jedz jedzenie!)",
                "options": ["كُلْ", "اُؤْكُلْ", "أَكِلْ", "آكُلْ"],
                "correct": "كُلْ",
                "explanation": "Poprawnie: 'كُلْ!' (kul!) = jedz! WYJĄTEK: czasowniki z hamzą początkową (أَكَلَ, أَخَذَ, أَمَرَ) tracą hamzę w rozkazie: أَكَلَ → تَأْكُلُ → أْكُلُ → كُلْ (hamza rdzeniowa odpada!). Tylko 3 czasowniki: كُلْ (jedz! — أكل), خُذْ (weź! — أخذ), مُرْ (rozkaż! — أمر). To najkrótsze rozkazy w arabskim!"
            },
            {
                "id": "pa_imp4",
                "question": "Rozkaz dla 'ty' ż. (أنتِ) od كَتَبَ to:",
                "translation": "(ما أمر أنتِ من كتب؟)",
                "options": ["اُكْتُبِي", "اُكْتُبْ", "اُكْتُبُوا", "اُكْتُبَا"],
                "correct": "اُكْتُبِي",
                "explanation": "Poprawnie: 'اُكْتُبِي!' (uktubī!) = napisz! (do kobiety). Końcówki rozkazu wg osoby: أنتَ → اُكْتُبْ (bez końcówki), أنتِ → اُكْتُبِي (ي), أنتما → اُكْتُبَا (ا), أنتم → اُكْتُبُوا (وا), أنتنَّ → اُكْتُبْنَ (نَ). 5 form rozkazu! W polskim: 'napisz/napiszcie' — tylko 2 formy. Arabski rozróżnia płeć i l. podwójną."
            },
            {
                "id": "pa_imp5",
                "question": "_____ ! (Bądź cicho!) — od سَكَتَ/يَسْكُتُ",
                "translation": "(Bądź cicho!)",
                "options": ["اُسْكُتْ", "سَكَتَ", "اِسْكِتْ", "ساكِتْ"],
                "correct": "اُسْكُتْ",
                "explanation": "Poprawnie: 'اُسْكُتْ!' (uskut!) = bądź cicho! يَسْكُتُ (z ḍammą) → hamza z ḍammą: اُسْكُتْ. Inne popularne rozkazy: تعالَ! (chodź tu! — nieregularny, nie od تَعَالَ), هاتِ! (daj! — bez czasownika źródłowego), قِفْ! (stój! — od وَقَفَ, bez hamzy bo وَقَفَ zaczyna się od و). Niektóre rozkazy są nieregularne i trzeba je zapamiętać."
            },
            {
                "id": "pa_imp6",
                "question": "Rozkaz formy II od عَلَّمَ (uczył) to:",
                "translation": "(ما أمر عَلَّمَ؟)",
                "options": ["عَلِّمْ", "اِعْلَمْ", "تَعَلَّمْ", "عالِمْ"],
                "correct": "عَلِّمْ",
                "explanation": "Poprawnie: 'عَلِّمْ!' (ʿallim!) = ucz! Formy II-X NIE potrzebują hamzat al-waṣl (bo ich teraźniejszy nie zaczyna się od spółgłosk: يُعَلِّمُ → تُعَلِّمُ → عَلِّمْ). Rozkazy form: II: فَعِّلْ (عَلِّمْ), III: فاعِلْ (سافِرْ), IV: أَفْعِلْ (أَرْسِلْ), V: تَفَعَّلْ (تَعَلَّمْ), VI: تَفاعَلْ (تَعاوَنْ). Proste — odetnij يُـ i dodaj sukun."
            },
            {
                "id": "pa_imp7",
                "question": "Negacja rozkazu (zakaz) tworzy się przez:",
                "translation": "(كيف ننفي الأمر؟)",
                "options": ["لا + teraźniejszy مجزوم: لا تكتبْ (nie pisz!)", "ما + rozkaz", "لن + rozkaz", "لم + rozkaz"],
                "correct": "لا + teraźniejszy مجزوم: لا تكتبْ (nie pisz!)",
                "explanation": "WAŻNE: zakaz (النهي) NIE jest negacją rozkazu — to ODRĘBNA forma: لا (الناهية) + czas teraźniejszy w مجزوم. لا تكتبْ! (nie pisz!), لا تذهبْ! (nie idź!), لا تأكلْ! (nie jedz!). NIE: *لا اُكْتُبْ (BŁĄD — łączenie لا z rozkazem). Porównaj: اُكْتُبْ (pisz!) ↔ لا تكتبْ (nie pisz!). Inne formy, inne tryby, ale ta sama funkcja."
            },
            {
                "id": "pa_imp8",
                "question": "Rozkaz od نَامَ/يَنَامُ (spał/śpi — أجوف) to:",
                "translation": "(ما أمر نَامَ؟)",
                "options": ["نَمْ", "اِنَمْ", "نَامْ", "اُنُمْ"],
                "correct": "نَمْ",
                "explanation": "Poprawnie: 'نَمْ!' (nam!) = śpij! Rozkaz od أجوف (pustego): يَنَامُ → تَنَامُ → نَامْ → نَمْ (alif odpada w مجزوم!). Inne: قُلْ (powiedz! — od قَالَ), بِعْ (sprzedaj! — od بَاعَ), سِرْ (idź! — od سَارَ), زُرْ (odwiedź! — od زَارَ). Samogłoska zależy od typu pustego: ḍamma (قُلْ), kasra (بِعْ, سِرْ), fatha (نَمْ)."
            },
            {
                "id": "pa_imp9",
                "question": "Rozkaz od مَشَى/يَمْشِي (szedł/chodzi — ناقص) to:",
                "translation": "(ما أمر مَشَى؟)",
                "options": ["اِمْشِ", "اِمْشِي", "مَشِيْ", "اُمْشُ"],
                "correct": "اِمْشِ",
                "explanation": "Poprawnie: 'اِمْشِ!' (imshi!) = idź! (do mężczyzny). Rozkaz od ناقص: يَمْشِي → تَمْشِي → مْشِي → مجزوم: مْشِ (ي odpada!) → اِمْشِ (hamza z kasrą). Dla أنتِ: اِمْشِي (ي wraca jako końcówka żeńska — wygląda identycznie jak teraźniejszy!). Kontekst rozróżnia: تَمْشِينَ (teraźniejszy) vs. اِمْشِي (rozkaz)."
            },
            {
                "id": "pa_imp10",
                "question": "Rozkaz od رَدَّ/يَرُدُّ (odpowiedział — مضعّف) to:",
                "translation": "(ما أمر رَدَّ؟)",
                "options": ["رُدَّ", "اِرْدُدْ", "رَدِّ", "رُدُدْ"],
                "correct": "رُدَّ",
                "explanation": "Poprawnie: 'رُدَّ!' (rudda!) = odpowiedz! Rozkaz od مضعّف: يَرُدُّ → تَرُدُّ → رُدُّ → مجزوم: رُدَّ (fatha na szaddzie w مجزوم, bo sukun na szaddzie niemożliwy). Alternatywna forma (rzadsza): اُرْدُدْ (rozdzielone — poprawna, ale archaiczna). W praktyce: رُدَّ (krótka) jest standardowa. Inne: مُدَّ (wyciągnij!), شُدَّ (ściągnij!), عُدَّ (policz!)."
            },
            {
                "id": "pa_imp11",
                "question": "Rozkaz formy X od اِسْتَخْدَمَ (używał) to:",
                "translation": "(ما أمر اِسْتَخْدَمَ؟)",
                "options": ["اِسْتَخْدِمْ", "خْدِمْ", "اُسْتَخْدِمْ", "سَتَخْدِمْ"],
                "correct": "اِسْتَخْدِمْ",
                "explanation": "Poprawnie: 'اِسْتَخْدِمْ!' (istakhdim!) = użyj! Forma X rozkaz: يَسْتَخْدِمُ → تَسْتَخْدِمُ → سْتَخْدِمُ → اِسْتَخْدِمْ. Formy VII, VIII, X zachowują hamzat al-waṣl: اِنْطَلِقْ (VII — ruszaj!), اِخْتَرْ (VIII — wybierz! — od اختار, أجوف w VIII), اِسْتَغْفِرْ (X — proś o przebaczenie!). Hamza VII/VIII/X ma zawsze KASRĘ."
            },
            {
                "id": "pa_imp12",
                "question": "W jakim 'trybie' (إعراب) jest rozkaz?",
                "translation": "(ما إعراب فعل الأمر؟)",
                "options": ["مبني (niezmienny) — nie ma إعراب", "مرفوع", "منصوب", "مجزوم"],
                "correct": "مبني (niezmienny) — nie ma إعراب",
                "explanation": "Rozkaz jest مبني (nieodmienny/niezmienny) — nie podlega إعراب (deklinacji/koniugacji). Końcowy sukun to STAŁA cecha formy, NIE znak مجزوم. Trzy czasy/tryby: 1) przeszły = مبني (zawsze fatha: كَتَبَ), 2) rozkaz = مبني (zawsze sukun: اُكْتُبْ), 3) teraźniejszy = مُعرَب (مرفوع/منصوب/مجزوم — zmienny!). Tylko teraźniejszy się 'odmienia' przez tryb."
            },
            {
                "id": "pa_imp13",
                "question": "Hamzat al-waṣl w rozkazie: اُكْتُبْ — ta hamza:",
                "translation": "(ما نوع الهمزة في اُكْتُبْ؟)",
                "options": ["Odpada w środku zdania: وَاكْتُبْ (nie *وَاُكْتُبْ)", "Zawsze wymawiana", "Zamienia się na madda", "Znika w piśmie"],
                "correct": "Odpada w środku zdania: وَاكْتُبْ (nie *وَاُكْتُبْ)",
                "explanation": "Hamzat al-waṣl (همزة الوصل) = hamza 'łącząca' — wymawiana TYLKO na początku wypowiedzi, ODPADA przy łączeniu: اُكْتُبْ! (wymawiane: uktub!), ale: وَاكتُبْ! (wymawiane: waktub! — hamza znika). Porównaj z hamzat al-qaṭʿ (همزة القطع): أَرْسِلْ — ta hamza ZAWSZE wymawiana: وَأَرْسِلْ (waʾarsil!). Formy I, VII, VIII, X = waṣl; II, III, IV = qaṭʿ."
            },
            {
                "id": "pa_imp14",
                "question": "تعالَ! (Chodź tu!) — to rozkaz od jakiego czasownika?",
                "translation": "(ما فعل تعالَ؟)",
                "options": ["Nieregularny — nie ma standardowego czasownika źródłowego", "تَعَالَى (forma VI)", "عَلَا (wstąpił)", "عَلَّمَ (uczył)"],
                "correct": "Nieregularny — nie ma standardowego czasownika źródłowego",
                "explanation": "تعالَ! (taʿāla!) = chodź tu! — NIEREGULARNY rozkaz. Teoretycznie od تَعَالَى (forma VI od ع-ل-و = być wywyższonym), ale semantycznie 'chodź tu' nie ma związku z 'wywyższaniem'. To skostniała forma — jedyna w swoim rodzaju. Odmiana: تعالَ (m.), تعالَيْ (ż.), تعالَوْا (m. mn.), تعالَيْنَ (ż. mn.). Inne nieregularne: هاتِ (daj!), هَلُمَّ (chodź!/daj!)."
            },
            {
                "id": "pa_imp15",
                "question": "Które zdanie zawiera rozkaz z فـ wzmacniającą (لام الأمر)?",
                "translation": "(أي جملة فيها لام الأمر؟)",
                "options": ["لِيَكْتُبْ (Niech pisze! — 3. osoba)", "اُكْتُبْ (Pisz! — 2. osoba)", "لا تكتبْ (Nie pisz!)", "كَتَبَ (Napisał)"],
                "correct": "لِيَكْتُبْ (Niech pisze! — 3. osoba)",
                "explanation": "Poprawnie: 'لِيَكْتُبْ' (li-yaktub) = niech pisze! لام الأمر = lām rozkazu — tworzy rozkaz dla 3. osoby (on/ona/oni) i 1. osoby (my): لِيَكْتُبْ (niech pisze), لِتَكْتُبْ (niech pisze — ona), لِنَكْتُبْ (piszmy!). Zwykły rozkaz istnieje TYLKO dla 2. osoby (ty). Dla 3. i 1. osoby: لـ + مجزوم. W polskim: 'niech pisze' = tryb rozkazujący opisowy."
            }
        ]
    },
    {
        "key": "subjunctive_mood",
        "name": "Tryb łączący (المنصوب)",
        "description": "نصب الفعل المضارع في العربية",
        "iconName": "arrow.turn.down.right",
        "color": "#818cf8",
        "level": "advanced",
        "items": [
            {
                "id": "pa_subj1",
                "question": "أريدُ أنْ _____ (Chcę pisać) — po أنْ",
                "translation": "(Chcę pisać)",
                "options": ["أكتبَ", "أكتبُ", "أكتبْ", "كتبتُ"],
                "correct": "أكتبَ",
                "explanation": "Poprawnie: 'أنْ أكتبَ' (an aktuba) — po أنْ (że/żeby) czasownik w منصوب (łączący) z FATHĄ. أريدُ أنْ أكتبَ = chcę, żeby pisać (dosł. chcę że piszę). أنْ to najczęstsza partykuła نصب. W polskim: 'chcę pisać' (bezokolicznik). Arabski nie ma bezokolicznika — zamiast tego: أنْ + czas teraźn. منصوب. To KLUCZ do zrozumienia arabskiej składni!"
            },
            {
                "id": "pa_subj2",
                "question": "لَنْ _____ (Nie pójdę) — po لَنْ",
                "translation": "(Nigdy nie pójdę)",
                "options": ["أذهبَ", "أذهبُ", "أذهبْ", "ذهبتُ"],
                "correct": "أذهبَ",
                "explanation": "Poprawnie: 'لَنْ أذهبَ' (lan adhhaba) = nie pójdę / nigdy nie pójdę. لَنْ = negacja PRZYSZŁOŚCI + نصب. Porównaj negacje: ما (+ przeszły = nie zrobił), لا (+ teraźniejszy مرفوع = nie robi), لمْ (+ مجزوم = nie robił), لنْ (+ منصوب = nie zrobi). Każda negacja ma INNY tryb/czas! لنْ implikuje STANOWCZOŚĆ: nie zrobię i KONIEC."
            },
            {
                "id": "pa_subj3",
                "question": "درستُ كيْ _____ (Uczyłem się, żeby zdać) — po كَيْ",
                "translation": "(Uczyłem się, żeby zdać)",
                "options": ["أنجحَ", "أنجحُ", "أنجحْ", "نجحتُ"],
                "correct": "أنجحَ",
                "explanation": "Poprawnie: 'كيْ أنجحَ' (kay anjaḥa) — po كَيْ (żeby/po to, aby) → منصوب z fathą. كَيْ wyraża CEL. Alternatywa: لِكَيْ (z لـ wzmacniającą — to samo znaczenie). Inne partykuły celu + نصب: حتّى (aż/żeby), لـ (żeby — celowe). درستُ لأنجحَ = درستُ كيْ أنجحَ = درستُ حتّى أنجحَ. Wszystkie = 'uczyłem się, żeby zdać'."
            },
            {
                "id": "pa_subj4",
                "question": "ذهبتُ إلى المكتبة لِـ_____ (Poszedłem do biblioteki, żeby czytać) — لـ celowe",
                "translation": "(Poszedłem do biblioteki, żeby czytać)",
                "options": ["أقرأَ", "أقرأُ", "أقرأْ", "القراءةِ"],
                "correct": "أقرأَ",
                "explanation": "Poprawnie: 'لِأقرأَ' (li-aqraʾa) — لـ celowe (لام التعليل) + أنْ (ukryte!) → منصوب. Reguła: po لـ celowe jest UKRYTE أنْ: لِأقرأَ = لِأنْ أقرأَ. Inne partykuły z ukrytym أنْ: حتّى, فـ (w odpowiedziach warunkowych). WAŻNE: لـ bez celu = لام الأمر (rozkaz): لِيَكْتُبْ (niech pisze) — INNY نوع لـ!"
            },
            {
                "id": "pa_subj5",
                "question": "حتّى _____ (Aż zrozumiem) — po حتّى",
                "translation": "(Aż zrozumiem)",
                "options": ["أفهمَ", "أفهمُ", "أفهمْ", "فهمتُ"],
                "correct": "أفهمَ",
                "explanation": "Poprawnie: 'حتّى أفهمَ' (ḥattā afhama) — po حتّى (aż/żeby) → منصوب. حتّى ma DWA znaczenia: 1) CEL: درستُ حتّى أنجحَ (uczyłem się, ŻEBY zdać), 2) GRANICA: سأدرسُ حتّى أفهمَ (będę się uczył, AŻ zrozumiem). Obie z منصوب. UWAGA: حتّى + rzeczownik → dopełniacz (nie نصب!): حتّى الصباحِ (aż do rana). Kontekst rozstrzyga."
            },
            {
                "id": "pa_subj6",
                "question": "W 'pięciu czasownikach' (الأفعال الخمسة) نصب widać przez:",
                "translation": "(ما علامة النصب في الأفعال الخمسة؟)",
                "options": ["Odpadnięcie نون: لن تكتبوا (nie *تكتبونَ)", "Fathę na końcu", "Sukun", "Kasrę"],
                "correct": "Odpadnięcie نون: لن تكتبوا (nie *تكتبونَ)",
                "explanation": "W 'pięciu czasownikach' (يكتبونَ, تكتبونَ, يكتبانِ, تكتبانِ, تكتبينَ): زnakami منصوب i مجزوم jest ODPADNIĘCIE نون! مرفوع: تكتبونَ (z نون), منصوب: لن تكتبوا (bez نون), مجزوم: لم تكتبوا (bez نون). منصوب i مجزوم IDENTYCZNE w formie! Kontekst (partykuła) rozstrzyga: لن = منصوب, لم = مجزوم."
            },
            {
                "id": "pa_subj7",
                "question": " فـ السببية (فـ skutkowa) po negacji/pytaniu wyma نصب. Przykład:",
                "translation": "(مثال على فاء السببية)",
                "options": ["لا تكسلْ فتندمَ (Nie leniuchuj, bo pożałujesz)", "كتبَ فذهبَ", "جاءَ فجلسَ", "هو كاتبٌ فماهرٌ"],
                "correct": "لا تكسلْ فتندمَ (Nie leniuchuj, bo pożałujesz)",
                "explanation": "Poprawnie: 'لا تكسلْ فتندمَ' — فـ السببية (fā' skutkowa/przyczynowa) po negacji/zakazie/pytaniu/życzeniu wymaga نصب. فَتندمَ = 'więc pożałujesz' (skutek). Warunki فـ السببية: musi być po 1) negacji (ما/لا/لم), 2) rozkazie, 3) zakazie (لا), 4) pytaniu, 5) życzeniu (ليت). فـ zwykła (i/potem) NIE wymaga نصب: جاءَ فجلسَ (przyszedł i usiadł — oba normalne)."
            },
            {
                "id": "pa_subj8",
                "question": "Różnica: أنْ (masdarowe) vs. أنَّ (twierdzące):",
                "translation": "(الفرق بين أنْ و أنَّ)",
                "options": ["أنْ + فعل منصوب (że/żeby); أنَّ + اسم منصوب + خبر (że)", "Identyczne", "أنْ = pytanie, أنَّ = odpowiedź", "أنْ = przeszłość, أنَّ = przyszłość"],
                "correct": "أنْ + فعل منصوب (że/żeby); أنَّ + اسم منصوب + خبر (że)",
                "explanation": "KLUCZOWE: أنْ (lekkie, bez szaddy) + CZASOWNIK w منصوب: أريدُ أنْ أكتبَ (chcę pisać). أنَّ (ciężkie, z szaddą) + RZECZOWNIK w bierniku + orzecznik: أعرفُ أنَّ الطالبَ مجتهدٌ (wiem, że student jest pilny). أنْ ≈ 'żeby' (z czasownikiem), أنَّ ≈ 'że' (z rzeczownikiem). Jedna szadda zmienia CAŁĄ składnię!"
            },
            {
                "id": "pa_subj9",
                "question": "يجبُ أنْ _____ (Trzeba się uczyć) — أنْ po يجب",
                "translation": "(Trzeba się uczyć)",
                "options": ["تدرسَ", "تدرسُ", "تدرسْ", "درستَ"],
                "correct": "تدرسَ",
                "explanation": "Poprawnie: 'يجبُ أنْ تدرسَ' = trzeba, żebyś się uczył. يجبُ (trzeba/należy) + أنْ + منصوب. Inne czasowniki/wyrażenia z أنْ: يمكنُ أنْ (można), ينبغي أنْ (należy), يُفضَّلُ أنْ (lepiej), من الضروريّ أنْ (konieczne jest). W polskim: 'trzeba się uczyć' (bezokolicznik). Arabski: أنْ + منصوب — ZAWSZE zamiast bezokolicznika."
            },
            {
                "id": "pa_subj10",
                "question": "Ile jest partykuł نصب (أدوات النصب)?",
                "translation": "(كم أداة نصب؟)",
                "options": ["4 główne: أنْ, لنْ, كيْ, إذنْ", "1 — tylko أنْ", "10", "2"],
                "correct": "4 główne: أنْ, لنْ, كيْ, إذنْ",
                "explanation": "4 partykuły نصب: 1) أنْ (że/żeby — najczęstsza), 2) لنْ (nigdy/nie będzie — negacja przyszłości), 3) كَيْ (żeby — cel), 4) إذنْ (zatem/w takim razie — rzadka). Plus: أنْ UKRYTE po لـ (celowe), حتّى, فـ السببية, واو المعية. Reguła: po każdej partykule نصب → fatha na czasowniku (lub odpadnięcie نون w الأفعال الخمسة)."
            },
            {
                "id": "pa_subj11",
                "question": "واو المعية (waw towarzyszenia) + نصب: لا تأكلْ و_____ (Nie jedz chodząc)",
                "translation": "(Nie jedz idąc/i chodzisz)",
                "options": ["تمشيَ", "تمشي", "تمشيْ", "مشيتَ"],
                "correct": "تمشيَ",
                "explanation": "Poprawnie: 'لا تأكلْ وتمشيَ' = nie jedz i (jednocześnie) chodź. واو المعية (waw towarzyszenia/jednoczesności) po negacji/zakazie wymaga نصب z UKRYTYM أنْ. وَتمشيَ = و + (أنْ) + تمشي. واو المعية ≠ واو العطف (spójnik 'i'). Różnica: واو العطف = ta sama czynność; واو المعية = jednoczesna, inna czynność. Subtelna, ale ważna różnica składniowa."
            },
            {
                "id": "pa_subj12",
                "question": "إذنْ _____ (W takim razie pójdę) — po إذنْ",
                "translation": "(W takim razie pójdę)",
                "options": ["أذهبَ", "أذهبُ", "أذهبْ", "ذهبتُ"],
                "correct": "أذهبَ",
                "explanation": "Poprawnie: 'إذنْ أذهبَ' (idhan adhhaba) = w takim razie pójdę. إذنْ to NAJRZADSZA partykuła نصب — wymaga: 1) być na początku zdania (odpowiedzi), 2) czasownik dotyczy PRZYSZŁOŚCI, 3) brak przerwy między إذنْ a czasownikiem. Jeśli którykolwiek warunek niespełniony → مرفوع: إذنْ فأذهبُ (z فـ — przerywa →مرفوع). W praktyce prawie wyłącznie Koranowa/literacka."
            },
            {
                "id": "pa_subj13",
                "question": "Masdar مؤوَّل (interpretowany) z أنْ + فعل: أنْ تدرسَ =",
                "translation": "(ما المصدر المؤوَّل من أنْ تدرسَ؟)",
                "options": ["= الدراسة (nauka) — funkcjonuje jak masdar", "Nie ma odpowiednika", "= student", "= szkoła"],
                "correct": "= الدراسة (nauka) — funkcjonuje jak masdar",
                "explanation": "WAŻNA koncepcja: أنْ + فعل = مصدر مؤوَّل (masdar interpretowany) — cała konstrukcja funkcjonuje jak RZECZOWNIK. يجبُ أنْ تدرسَ = يجبُ الدراسةُ (nauka jest obowiązkowa). أنْ تدرسَ = الدراسة (nauka). Masdar مؤوَّل może być podmiotem, dopełnieniem, w إضافة — jak każdy rzeczownik. To KLUCZ do zrozumienia, dlaczego arabski nie potrzebuje bezokolicznika!"
            },
            {
                "id": "pa_subj14",
                "question": "Które zdanie zawiera منصوب z fathą?",
                "translation": "(أي جملة فيها فعل منصوب بالفتحة؟)",
                "options": ["لن أذهبَ (Nie pójdę)", "لم أذهبْ (Nie poszedłem)", "أذهبُ (Idę)", "اِذهبْ (Idź!)"],
                "correct": "لن أذهبَ (Nie pójdę)",
                "explanation": "Poprawnie: 'لن أذهبَ' — فتحة (fatha) na بـ = منصوب. Porównaj: أذهبُ (ḍamma = مرفوع), أذهبَ (fatha = منصوب — po لن/أن/كي), أذهبْ (sukun = مجزوم — po لم/لا الناهية), اِذهبْ (sukun = rozkaz — مبني). 4 formy tego samego rdzenia — każda z inną samogłoską końcową!"
            },
            {
                "id": "pa_subj15",
                "question": "Tryb łączący (منصوب) odpowiada w polskim:",
                "translation": "(ما يقابل المنصوب في البولندية؟)",
                "options": ["Bezokolicznikowi i trybowi łączącemu: 'chcę PISAĆ', 'żeby PISAŁ'", "Trybowi rozkazującemu", "Czasowi przeszłemu", "Nie ma odpowiednika"],
                "correct": "Bezokolicznikowi i trybowi łączącemu: 'chcę PISAĆ', 'żeby PISAŁ'",
                "explanation": "Arabski منصوب odpowiada polskiemu: 1) BEZOKOLICZNIKOWI: أريدُ أنْ أكتبَ = chcę PISAĆ, 2) trybowi łączącemu z 'żeby': درستُ كي أنجحَ = uczyłem się, ŻEBY zdać. W polskim bezokolicznik nie odmienia się; w arabskim أنْ + teraźn. ODMIENIA się przez osobę: أنْ أكتبَ (ja), أنْ تكتبَ (ty), أنْ يكتبَ (on). To bardziej precyzyjny system niż polski bezokolicznik!"
            }
        ]
    },
    {
        "key": "jussive_mood",
        "name": "Tryb warunkowy (المجزوم)",
        "description": "جزم الفعل المضارع في العربية",
        "iconName": "scissors",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_jus1",
                "question": "لَمْ _____ (Nie napisałem) — po لَمْ",
                "translation": "(Nie napisałem)",
                "options": ["أكتبْ", "أكتبُ", "أكتبَ", "كتبتُ"],
                "correct": "أكتبْ",
                "explanation": "Poprawnie: 'لَمْ أكتبْ' (lam aktub) — po لَمْ (nie — negacja przeszłości) → مجزوم z SUKUNEM. لَمْ to najczęstsza partykuła جزم. WAŻNE: لَمْ neguje PRZESZŁOŚĆ mimo że używa czasu TERAŹNIEJSZEGO! لَمْ أكتبْ = nie napisałem (NIE: nie piszę). W polskim: 'nie napisałem' = czas przeszły. Arabski: لَمْ + czas teraźn. مجزوم = sens przeszły."
            },
            {
                "id": "pa_jus2",
                "question": "لَمَّا _____ (Jeszcze nie napisał) — po لَمَّا",
                "translation": "(Jeszcze nie napisał)",
                "options": ["يكتبْ", "يكتبُ", "يكتبَ", "كتبَ"],
                "correct": "يكتبْ",
                "explanation": "Poprawnie: 'لَمَّا يكتبْ' (lammā yaktub) = jeszcze nie napisał. لَمَّا = jeszcze nie (negacja przeszłości z implikacją, że MOŻE się jeszcze zdarzyć). Porównaj: لَمْ يكتبْ (nie napisał — fakt), لَمَّا يكتبْ (jeszcze nie napisał — ale może napisze). Subtelna różnica! لَمَّا implikuje oczekiwanie. W polskim: 'jeszcze nie' vs. 'nie' — ta sama niuans."
            },
            {
                "id": "pa_jus3",
                "question": "لا _____ هنا! (Nie siadaj tutaj!) — zakaz (النهي)",
                "translation": "(Nie siadaj tutaj!)",
                "options": ["تجلسْ", "تجلسُ", "تجلسَ", "اِجلسْ"],
                "correct": "تجلسْ",
                "explanation": "Poprawnie: 'لا تجلسْ!' (lā tajlis!) — لا الناهية (لا zakazowa) + مجزوم z sukunem. UWAGA: لا الناهية (zakaz) ≠ لا النافية (negacja): لا تجلسْ (NIE siadaj! — zakaz, مجزوم) vs. لا تجلسُ (nie siedzisz — negacja, مرفوع). Identyczne لا, ale INNY tryb czasownika! Sukun = zakaz, ḍamma = zwykła negacja. Kontekst i samogłoska rozstrzygają."
            },
            {
                "id": "pa_jus4",
                "question": "Jussive od أجوف 'قَالَ/يَقُولُ' po لَمْ:",
                "translation": "(ما مجزوم يقول؟)",
                "options": ["لم يَقُلْ", "لم يَقُولْ", "لم يَقُولُ", "لم قالَ"],
                "correct": "لم يَقُلْ",
                "explanation": "Poprawnie: 'لم يَقُلْ' (lam yaqul) — w أجوف (pustym), مجزوم = UTRATA długiej samogłoski: يَقُولُ → يَقُلْ (و odpada). Inne: يَنَامُ → لم يَنَمْ, يَسِيرُ → لم يَسِرْ, يَكُونُ → لم يَكُنْ. Reguła: مجزوم pustych = skrócenie (حذف حرف العلة). To jak 'ścięcie' środkowej samogłoski. Porównaj: منصوب zachowuje: لن يقولَ."
            },
            {
                "id": "pa_jus5",
                "question": "Jussive od ناقص 'مَشَى/يَمْشِي' po لَمْ:",
                "translation": "(ما مجزوم يمشي؟)",
                "options": ["لم يَمْشِ", "لم يَمْشِي", "لم يَمْشَى", "لم مَشَى"],
                "correct": "لم يَمْشِ",
                "explanation": "Poprawnie: 'لم يَمْشِ' (lam yamshi) — w ناقص (ułomnym), مجزوم = UTRATA ostatniego ي/و: يَمْشِي → يَمْشِ, يَدْعُو → يَدْعُ. Reguła: مجزوم ناقص = حذف حرف العلة (usunięcie litery słabej). Porównaj 3 tryby: يَمْشِي (مرفوع — z ي), يَمْشِيَ (منصوب — z ي + fathą), يَمْشِ (مجزوم — BEZ ي)."
            },
            {
                "id": "pa_jus6",
                "question": "Jussive od مضعّف 'يَمُرُّ' po لَمْ:",
                "translation": "(ما مجزوم يَمُرُّ؟)",
                "options": ["لم يَمُرَّ", "لم يَمُرْ", "لم يَمُرُّ", "لم مَرَّ"],
                "correct": "لم يَمُرَّ",
                "explanation": "Poprawnie: 'لم يَمُرَّ' (lam yamurra) — w مضعّف (podwojonym): na szaddzie NIE MOŻNA postawić sukunu → fatha zastępcza: يَمُرُّ → يَمُرَّ (ḍamma → fatha). Porównaj normalne: لم يكتبْ (sukun na końcu). Podwojone: لم يمرَّ (fatha na szaddzie). To JEDYNY typ, gdzie مجزوم ma fathę zamiast sukunu — łatwo pomylić z منصوب!"
            },
            {
                "id": "pa_jus7",
                "question": "إنْ تدرسْ _____ (Jeśli się uczysz, zdajesz) — warunek + odpowiedź w مجزوم",
                "translation": "(Jeśli się uczysz, zdajesz)",
                "options": ["تنجحْ", "تنجحُ", "تنجحَ", "نجحتَ"],
                "correct": "تنجحْ",
                "explanation": "Poprawnie: 'إنْ تدرسْ تنجحْ' — po إنْ (jeśli) OBA w مجزوم. إنْ to أداة شرط جازمة — wymaga مجزوم w WARUNKU (فعل الشرط: تدرسْ) I w NASTĘPSTWIE (جواب الشرط: تنجحْ). To JEDYNA sytuacja, gdzie مجزوم pojawia się w DWÓCH czasownikach naraz. Z لَمْ/لا الناهية = jeden czasownik. Z إنْ = dwa!"
            },
            {
                "id": "pa_jus8",
                "question": "مَنْ يجتهدْ _____ (Kto jest pilny, odniesie sukces)",
                "translation": "(Kto jest pilny, odniesie sukces)",
                "options": ["يَنْجَحْ", "يَنْجَحُ", "يَنْجَحَ", "نَجَحَ"],
                "correct": "يَنْجَحْ",
                "explanation": "Poprawnie: 'مَنْ يجتهدْ ينجحْ' — مَنْ warunkowe (kto = jeśli ktoś) + مجزوم w obu. Zaimki warunkowe جازمة: مَنْ (kto), ما (co), أيّ (który), متى (kiedy), أينما (gdziekolwiek), مهما (cokolwiek), كيفما (jakkolwiek), حيثما (gdziekolwiek), أيّانَ (kiedykolwiek). WSZYSTKIE wymagają مجزوم w warunku i następstwie."
            },
            {
                "id": "pa_jus9",
                "question": "لِيَكْتُبْ = 'Niech pisze'. Jakim jest trybem?",
                "translation": "(ما إعراب لِيَكْتُبْ؟)",
                "options": ["مجزوم — لام الأمر + مجزوم", "منصوب", "مرفوع", "مبني"],
                "correct": "مجزوم — لام الأمر + مجزوم",
                "explanation": "Poprawnie: لِيَكْتُبْ = مجزوم po لام الأمر (lām rozkazu). لام الأمر jest partykułą جزم: لِيَكْتُبْ (niech pisze), لِنَذْهَبْ (chodźmy!), لِتَأْكُلْ (niech je — ona). Porównaj: لِـ rozkazu (+ مجزوم: لِيَكْتُبْ) vs. لِـ cel (+ منصوب: لِيَكْتُبَ — z ukrytym أنْ). JEDYNA różnica: sukun (جزم) vs. fatha (نصب)!"
            },
            {
                "id": "pa_jus10",
                "question": "W 'pięciu czasownikach' مجزوم widać przez:",
                "translation": "(علامة الجزم في الأفعال الخمسة)",
                "options": ["Odpadnięcie نون: لم يكتبوا (nie *يكتبونَ)", "Sukun", "Fathę", "Kasrę"],
                "correct": "Odpadnięcie نون: لم يكتبوا (nie *يكتبونَ)",
                "explanation": "W الأفعال الخمسة: مجزوم = حذف النون (odpadnięcie نون). يكتبونَ → لم يكتبوا. IDENTYCZNE z منصوب: لن يكتبوا = لم يكتبوا (ta sama forma!). Skąd rozróżnić? Z partykuły: لن = منصوب (przyszłość), لم = مجزوم (przeszłość). Kontekst jest JEDYNYM wyznacznikiem. To najtrudniejszy punkt arabskiej gramatyki dla uczniów."
            },
            {
                "id": "pa_jus11",
                "question": "Trzy partykuły جزم (أدوات الجزم) to:",
                "translation": "(ما أدوات الجزم؟)",
                "options": ["لَمْ, لَمَّا, لام الأمر, لا الناهية + partykuły warunkowe", "Tylko لَمْ", "أنْ, لنْ, كي", "في, من, إلى"],
                "correct": "لَمْ, لَمَّا, لام الأمر, لا الناهية + partykuły warunkowe",
                "explanation": "Partykuły جزم dzielą się na: A) Jednoargumentowe (جازم فعلاً واحداً): لَمْ (nie — przeszłość), لَمَّا (jeszcze nie), لام الأمر (niech), لا الناهية (nie rób!). B) Dwuargumentowe (جازم فعلين — warunek+odpowiedź): إنْ, مَنْ, ما, متى, أينما, مهما, أيّ, كيفما, حيثما, أيّان. Ogółem: ~14 partykuł/zaimków warunkowych. System bogaty, ale regularny."
            },
            {
                "id": "pa_jus12",
                "question": "لَمْ يَكُنْ _____ (Nie był studentem) — po لَمْ يَكُنْ",
                "translation": "(Nie był studentem)",
                "options": ["طالباً", "طالبٌ", "طالبٍ", "الطالبُ"],
                "correct": "طالباً",
                "explanation": "Poprawnie: 'لَمْ يَكُنْ طالباً' = nie był studentem. يَكُنْ = مجزوم od يَكُونُ (jest — أجوف: و odpada → يَكُنْ). Po يَكُنْ (= كَانَ w negacji): podmiot (ukryty هو) w mianowniku, orzecznik (خبر) w BIERNIKU: طالباً. Reguła كان: zawsze خبر w bierniku — nawet po لَمْ! لَمْ يكنْ = negacja كان: 'nie był'."
            },
            {
                "id": "pa_jus13",
                "question": "Porównaj tryby: يَكْتُبُ / يَكْتُبَ / يَكْتُبْ:",
                "translation": "(قارن المرفوع والمنصوب والمجزوم)",
                "options": ["ḍamma=wskaźnikowy, fatha=łączący, sukun=warunkowy", "Wszystkie identyczne", "Różne korzenie", "Różne znaczenia czasownika"],
                "correct": "ḍamma=wskaźnikowy, fatha=łączący, sukun=warunkowy",
                "explanation": "3 tryby czasu teraźniejszego: 1) يَكْتُبُ (ḍamma) = مرفوع (wskaźnikowy) — domyślny: 'pisze', 2) يَكْتُبَ (fatha) = منصوب (łączący) — po أن/لن/كي: 'żeby pisał/nie napisze', 3) يَكْتُبْ (sukun) = مجزوم (warunkowy) — po لم/إن/لا: 'nie pisał/jeśli pisze'. JEDNA samogłoska na końcu zmienia sens, czas i modalność. To kwintesencja arabskiego إعراب!"
            },
            {
                "id": "pa_jus14",
                "question": "Czy czas przeszły (الماضي) ma مجزوم?",
                "translation": "(هل يُجزم الفعل الماضي؟)",
                "options": ["NIE — przeszły jest مبني (niezmienny), nie ma إعراب", "TAK — z لَمْ", "TAK — zawsze", "Tylko w warunkach"],
                "correct": "NIE — przeszły jest مبني (niezmienny), nie ma إعراب",
                "explanation": "Czas przeszły (الماضي) jest مبني على الفتح (nieodmiennie na fathie) — NIGDY nie ma مرفوع/منصوب/مجزوم. Fatha w كَتَبَ to STAŁA samogłoska, nie znak إعراب. Tylko czas TERAŹNIEJSZY (المضارع) podlega إعراب: مرفوع/منصوب/مجزوم. Rozkaz (الأمر) też jest مبني (na sukunie). Mnemotechnika: إعراب = TYLKO teraźniejszy!"
            },
            {
                "id": "pa_jus15",
                "question": "Które błędne zdanie narusza reguły جزم?",
                "translation": "(أي جملة خاطئة في الجزم؟)",
                "options": ["لَمْ يذهبُ (ḍamma po لَمْ — powinno być يذهبْ)", "لَمْ يذهبْ", "إنْ تدرسْ تنجحْ", "لا تذهبْ"],
                "correct": "لَمْ يذهبُ (ḍamma po لَمْ — powinno być يذهبْ)",
                "explanation": "BŁĄD: 'لَمْ يذهبُ' — ḍamma (مرفوع) po لَمْ to BŁĄD. Po لَمْ MUSI być مجزوم: لَمْ يذهبْ (sukun). To najczęstszy błąd uczniów — zapominają zmienić samogłoskę końcową po partykule جزم. Inne błędy: *إنْ تدرسُ (powinno: تدرسْ), *لا تذهبُ (jako zakaz — powinno: تذهبْ). Zawsze sprawdzaj samogłoskę po partykule!"
            }
        ]
    },
    {
        "key": "numbers_11_100",
        "name": "Liczebniki 11-100 (الأعداد ١١-١٠٠)",
        "description": "قواعد الأعداد من ١١ إلى ١٠٠",
        "iconName": "number",
        "color": "#c084fc",
        "level": "advanced",
        "items": [
            {
                "id": "pa_n100_1",
                "question": "جاءَ _____ طالباً (Przyszło 15 studentów) — poprawna liczba:",
                "translation": "(Przyszło 15 studentów)",
                "options": ["خمسةَ عشرَ", "خمسَ عشرةَ", "خمسةً وعشرةً", "خمسةَ عشرٍ"],
                "correct": "خمسةَ عشرَ",
                "explanation": "Poprawnie: 'خمسةَ عشرَ طالباً'. Liczebniki 11-19: OBA człony nieodmienne (مبني على الفتح). Reguła ODWROTNOŚCI płci: طالب (m.) → خمسةَ عشرَ (z ة — odwrotność!). Gdyby طالبة (ż.): خمسَ عشرةَ (BEZ ة — odwrotność!). Po 11-99: rzeczownik w BIERNIKU l. POJEDYNCZEJ: طالباً (nie طلابٍ!). To najtrudniejsza reguła liczebników arabskich."
            },
            {
                "id": "pa_n100_2",
                "question": "Liczebnik 11 (أحدَ عشرَ) jest wyjątkowy, bo:",
                "translation": "(ما الخاص في أحد عشر؟)",
                "options": ["OBA człony zgadzają się w płci z rzeczownikiem (nie odwrotność)", "Nie odmienia się", "Ma tanwin", "Jest regularny"],
                "correct": "OBA człony zgadzają się w płci z rzeczownikiem (nie odwrotność)",
                "explanation": "WYJĄTEK: 11 i 12 — oba człony zgadzają się w płci z rzeczownikiem: أحدَ عشرَ طالباً (m.+m. = studentów), إحدى عشرةَ طالبةً (ż.+ż. = studentek). Porównaj 13-19: ثلاثةَ عشرَ طالباً (ODWROTNOŚĆ: ة z m. rzeczownikiem). 11-12 = ZGODA, 13-19 = ODWROTNOŚĆ. 12 ma dodatkową cechę: اثنا عشرَ (mianownik) vs. اثني عشرَ (biernik/dopełniacz) — odmienia się!"
            },
            {
                "id": "pa_n100_3",
                "question": "عشرونَ طالباً — 'عشرون' jest w mianowniku. W bierniku/dopełniaczu:",
                "translation": "(ما نصب/جر عشرون؟)",
                "options": ["عشرينَ", "عشرونَ", "عشرةً", "عِشْرِ"],
                "correct": "عشرينَ",
                "explanation": "Poprawnie: 'عشرينَ' (ʿishrīna) w bierniku/dopełniaczu. Dziesiątki (20, 30... 90) odmieniają się jak l. mn. męska zdrowa: -ونَ (mianownik), -ينَ (biernik/dopełniacz). عشرونَ/عشرينَ, ثلاثونَ/ثلاثينَ, أربعونَ/أربعينَ... تسعونَ/تسعينَ. NIE mają odwrotności płci — jedna forma dla m. i ż. Po nich: biernik l. poj. (تمييز)."
            },
            {
                "id": "pa_n100_4",
                "question": "واحد وعشرون طالباً — szyk 21-99 to:",
                "translation": "(ما ترتيب الأعداد ٢١-٩٩؟)",
                "options": ["Jedności + و + dziesiątki: واحدٌ وعشرونَ (nie *عشرون وواحد)", "Dziesiątki + jedności", "Dowolny", "Tylko dziesiątki"],
                "correct": "Jedności + و + dziesiątki: واحدٌ وعشرونَ (nie *عشرون وواحد)",
                "explanation": "Szyk 21-99: JEDNOŚCI PIERWSZE + و + dziesiątki. واحدٌ وعشرونَ = dwadzieścia jeden (dosł. 'jeden i dwadzieścia'). Jak w niemieckim: einundzwanzig! Polskie: 'dwadzieścia jeden' (dziesiątki pierwsze) — ODWROTNY szyk. Jedności 1-2: zgoda płci (واحدٌ m. / واحدةٌ ż.), jedności 3-9: ODWROTNOŚĆ. ثلاثةٌ وعشرونَ طالباً (23 studentów — ة z m.)."
            },
            {
                "id": "pa_n100_5",
                "question": "Rzeczownik po liczebnikach 11-99 jest w:",
                "translation": "(ما إعراب التمييز بعد ١١-٩٩؟)",
                "options": ["Bierniku l. pojedynczej (تمييز منصوب مفرد)", "Dopełniaczu l. mn.", "Mianowniku l. poj.", "Bierniku l. mn."],
                "correct": "Bierniku l. pojedynczej (تمييز منصوب مفرد)",
                "explanation": "Po 11-99: تمييز (specyfikacja) w BIERNIKU l. POJEDYNCZEJ: خمسةَ عشرَ كتاباً (15 książek — dosł. 'książką'), عشرونَ طالباً (20 studentów). Porównaj: po 3-10 → DOPEŁNIACZ l. MNOGIEJ: خمسةُ كُتُبٍ (5 książek). Po 100, 1000 → DOPEŁNIACZ l. POJEDYNCZEJ: مائةُ كتابٍ (100 książek). 3 różne reguły! Podsumowanie: 3-10=dopeł. mn., 11-99=biern. poj., 100+=dopeł. poj."
            },
            {
                "id": "pa_n100_6",
                "question": "Jak powiedzieć 'mam 50 lat'?",
                "translation": "(كيف تقول: عمري ٥٠ سنة؟)",
                "options": ["عُمري خمسونَ سنةً", "عُمري خمسينَ سنةً", "عُمري خمسونَ سنوات", "عندي خمسون سنين"],
                "correct": "عُمري خمسونَ سنةً",
                "explanation": "Poprawnie: 'عُمري خمسونَ سنةً'. عُمري (mój wiek) = مبتدأ. خمسونَ = خبر (مرفوع — mianownik z -ونَ). سنةً = تمييز (biern. l. poj.). Gdyby w zdaniu biernikowym: رأيتُ خمسينَ طالباً (widziałem 50 studentów — -ينَ bo biernik). Dziesiątki odmieniają się jak l. mn. مذكر سالم — jedyne liczebniki z pełną odmianą przypadkową."
            },
            {
                "id": "pa_n100_7",
                "question": "مائة (100) — rzeczownik po niej jest w:",
                "translation": "(ما إعراب ما بعد مائة؟)",
                "options": ["Dopełniaczu l. pojedynczej: مائةُ كتابٍ", "Bierniku l. poj.", "Dopełniaczu l. mn.", "Mianowniku"],
                "correct": "Dopełniaczu l. pojedynczej: مائةُ كتابٍ",
                "explanation": "Poprawnie: 'مائةُ كتابٍ' (miʾatu kitābin) = 100 książek. Po مائة (100) i أَلْف (1000): مضاف إليه (dopełniacz l. POJEDYNCZEJ). مائةُ طالبٍ (100 studentów), ألفُ كتابٍ (1000 książek). NIE l. mn.: *مائةُ طلابٍ (BŁĄD). Porównaj: 3-10 = dopełn. l. mn. (خمسةُ طلابٍ), 11-99 = biern. l. poj. (خمسونَ طالباً), 100+ = dopełn. l. poj. (مائةُ طالبٍ)."
            },
            {
                "id": "pa_n100_8",
                "question": "Reguła ODWROTNOŚCI płci dotyczy liczebników:",
                "translation": "(أي الأعداد لها قاعدة المخالفة؟)",
                "options": ["3-9 (jedności) i 13-19 (w członie jedności)", "1-100", "Tylko 1-2", "Tylko dziesiątek"],
                "correct": "3-9 (jedności) i 13-19 (w członie jedności)",
                "explanation": "Odwrotność płci: TYLKO jedności 3-9. W 13-19: człon jedności (3-9) ma odwrotność, ale عشر/عشرة zgadza się z rzeczownikiem. 1-2: zgoda (nie odwrotność). 10: zgoda gdy samodzielne (عشرُ طالباتٍ), odwrotność w złożeniu (عشرون — nie ma tu płci). Dziesiątki 20-90: BRAK odwrotności (jedna forma). مائة, ألف: BRAK odwrotności. Więc: odwrotność = 3-9 + ich złożenia."
            },
            {
                "id": "pa_n100_9",
                "question": "اثنا عشرَ vs. اثنَيْ عشرَ — różnica:",
                "translation": "(الفرق بين اثنا عشر و اثني عشر)",
                "options": ["اثنا = mianownik, اثني = biernik/dopełniacz", "Identyczne", "اثنا = m., اثني = ż.", "اثنا = formalne, اثني = potoczne"],
                "correct": "اثنا = mianownik, اثني = biernik/dopełniacz",
                "explanation": "Liczebnik 12 to JEDYNY z 11-19, który się ODMIENIA: اثنا عشرَ (mianownik), اثنَيْ عشرَ (biernik/dopełniacz). Bo اثنان/اثنين odmienia się jak l. podwójna: -انِ (mian.), -يْنِ (biern./dopeł.). Reszta 11-19 jest مبني على الفتح (niezmienna). Żeński: اثنتا عشرةَ (mian.), اثنتَيْ عشرةَ (biern./dopeł.). 12 to bezsprzecznie najtrudniejszy liczebnik arabski."
            },
            {
                "id": "pa_n100_10",
                "question": "Jak powiedzieć '99 balonów'?",
                "translation": "(كيف نقول ٩٩ بالوناً؟)",
                "options": ["تسعةٌ وتسعونَ بالوناً", "تسعٌ وتسعون بالوناً", "تسعون وتسعة بالوناً", "تسعة تسعون بالوناً"],
                "correct": "تسعةٌ وتسعونَ بالوناً",
                "explanation": "Poprawnie: 'تسعةٌ وتسعونَ بالوناً' = 99 balonów. تسعةٌ = jedności z ة (odwrotność — بالون jest m.); وتسعونَ = dziesiątki (mianownik); بالوناً = تمييز (biern. l. poj.). Gdyby بالونة (ż.): تسعٌ وتسعونَ بالونةً (BEZ ة w jedności). Szyk: jedności + و + dziesiątki + تمييز. To naprawdę złożony system!"
            },
            {
                "id": "pa_n100_11",
                "question": "Liczebnik porządkowy od 15 to:",
                "translation": "(ما العدد الترتيبي لـ ١٥؟)",
                "options": ["الخامسَ عشرَ (m.) / الخامسةَ عشرةَ (ż.)", "خمسةَ عشرَ", "خامسَ عشرينَ", "الخامِسون"],
                "correct": "الخامسَ عشرَ (m.) / الخامسةَ عشرةَ (ż.)",
                "explanation": "Porządkowe 11-19: pierwszy człon to porządkowy (الخامس), drugi to العاشر (dziewiąty). OBA nieodmienne (مبني على الفتح). Porządkowe zgadzają się w płci z rzeczownikiem: الطالبُ الخامسَ عشرَ (15. student — m.), الطالبةُ الخامسةَ عشرةَ (15. studentka — ż.). Od 20 wzwyż: porządkowe = główne: الطالبُ العشرونَ (20. student)."
            },
            {
                "id": "pa_n100_12",
                "question": "عندي _____ كتاباً (Mam 30 książek) — w zdaniu biernikowym:",
                "translation": "(Mam 30 książek)",
                "options": ["ثلاثينَ", "ثلاثونَ", "ثلاثةً", "ثلاثين"],
                "correct": "ثلاثينَ",
                "explanation": "Poprawnie: 'عندي ثلاثينَ كتاباً'. Dlaczego ثلاثينَ (nie ثلاثونَ)? عندي = przy mnie → ثلاثينَ jest خبر (orzecznik) w... hmm, właściwie عندي ثلاثونَ (mianownik jako مبتدأ مؤخر) byłoby też poprawne. Ale w kontekście biernikowym (np. اشتريتُ ثلاثينَ كتاباً) — ثلاثينَ bo dopełnienie w bierniku. Dziesiątki: -ونَ (mian.), -ينَ (biern./dopeł.)."
            },
            {
                "id": "pa_n100_13",
                "question": "Podsumowanie: jakie są 3 systemy po liczebnikach?",
                "translation": "(ما الأنظمة الثلاثة بعد الأعداد؟)",
                "options": ["3-10: dopeł. mn., 11-99: biern. poj., 100+: dopeł. poj.", "Wszędzie biernik", "Wszędzie dopełniacz", "Brak systemu"],
                "correct": "3-10: dopeł. mn., 11-99: biern. poj., 100+: dopeł. poj.",
                "explanation": "3 systemy: 1) Po 3-10: things in DOPEŁNIACZU l. MNOGIEJ — خمسةُ كتبٍ (5 książek). 2) Po 11-99: BIERNIK l. POJEDYNCZEJ (تمييز) — خمسةَ عشرَ كتاباً (15 książek). 3) Po 100, 1000: DOPEŁNIACZ l. POJEDYNCZEJ (إضافة) — مائةُ كتابٍ (100 książek), ألفُ كتابٍ (1000 książek). Plus: 1 i 2 = przymiotnik (zgoda): كتابٌ واحدٌ, كتابانِ اثنانِ."
            },
            {
                "id": "pa_n100_14",
                "question": "Jak powiedzieć 'rok 2024'?",
                "translation": "(كيف نقول سنة ٢٠٢٤؟)",
                "options": ["سنةُ ألفينِ وأربعٍ وعشرينَ", "سنة اثنين ألف وعشرين أربعة", "سنة ألفان وأربعة وعشرونَ", "عام ٢٠٢٤"],
                "correct": "سنةُ ألفينِ وأربعٍ وعشرينَ",
                "explanation": "Poprawnie: 'سنةُ ألفَيْنِ وأربعٍ وعشرينَ' = rok 2024. Rozbite: ألفَيْنِ (2000 — l. podw. أَلْف w dopełniaczu po سنة/إضافة) + و + أربعٍ (4 — ż. bez ة bo سنة jest ż. → ODWROTNOŚĆ) + و + عشرينَ (20 — dopełniacz). W praktyce w MSA coraz częściej podaje się cyfry: عامُ ٢٠٢٤. Arabski numeralny system jest tak złożony, że nawet native speakers unikają pełnej formy słownej!"
            },
            {
                "id": "pa_n100_15",
                "question": "Czy arabski system liczebników jest łatwiejszy od polskiego?",
                "translation": "(هل نظام الأعداد العربي أسهل من البولندي؟)",
                "options": ["NIE — arabski jest ZNACZNIE trudniejszy (odwrotność, 3 systemy, odmiana)", "TAK", "Identyczne", "Nie da się porównać"],
                "correct": "NIE — arabski jest ZNACZNIE trudniejszy (odwrotność, 3 systemy, odmiana)",
                "explanation": "Arabski system liczebników to najtrudniejszy komponent gramatyki. Porównaj: polski: 'pięciu studentów' (dopełniacz — i koniec!). Arabski: خمسةُ طلابٍ (ة — odwrotność + dopełn. mn.). 'Piętnastu studentów': خمسةَ عشرَ طالباً (nieodmienność + odwrotność w jedności + biern. l. poj.). Sam arabski żart: 'Nawet Arabowie nie znają dobrze reguł الأعداد!' — bo to JEDYNY temat, gdzie reguły mają tyle wyjątków."
            }
        ]
    },
    {
        "key": "ordinal_numbers",
        "name": "Liczebniki porządkowe (الأعداد الترتيبية)",
        "description": "الأعداد الترتيبية في العربية",
        "iconName": "list.number",
        "color": "#22d3ee",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_ord1",
                "question": "Pierwszy (m.) po arabsku to:",
                "translation": "(ما 'الأول'؟)",
                "options": ["الأوَّلُ", "الواحِدُ", "الأوْلَى", "أوَّلاً"],
                "correct": "الأوَّلُ",
                "explanation": "Poprawnie: 'الأوَّلُ' (al-awwalu) = pierwszy. UWAGA: الأوَّلُ NIE pochodzi od wzorca أَفْعَل (jak inne porządkowe) — jest NIEREGULARNY. Żeńska forma: الأُولَى (al-ūlā) = pierwsza (nie *الأوَّلة!). Jest to jedyny porządkowy z nieregularną formą żeńską. Porównaj regularny wzorzec: ثانٍ/ثانية, ثالث/ثالثة. 'أوَّلاً' = po pierwsze (przysłówek w bierniku)."
            },
            {
                "id": "pa_ord2",
                "question": "Wzorzec porządkowych 1-10 to:",
                "translation": "(ما وزن الأعداد الترتيبية؟)",
                "options": ["فاعِل: ثانٍ, ثالث, رابع, خامس...", "فَعِيل", "أَفْعَل", "مَفْعُول"],
                "correct": "فاعِل: ثانٍ, ثالث, رابع, خامس...",
                "explanation": "Wzorzec فاعِل (imiesłów czynny!): ثانٍ (2.), ثالِث (3.), رابِع (4.), خامِس (5.), سادِس (6.), سابِع (7.), ثامِن (8.), تاسِع (9.), عاشِر (10.). Żeńskie: + ة: ثانية, ثالثة, رابعة... WYJĄTKI: أوَّل/أُولَى (1.) — nieregularny. ثانٍ z tanwinem (bo ناقص: ي znika w nieokreślonym) — الثاني (z الـ: ي wraca)."
            },
            {
                "id": "pa_ord3",
                "question": "الطالبُ _____ (Drugi student) — porządkowy jako przydawka:",
                "translation": "(Drugi student)",
                "options": ["الثاني", "ثانياً", "ثانٍ", "الاثنان"],
                "correct": "الثاني",
                "explanation": "Poprawnie: 'الطالبُ الثاني' = drugi student. Porządkowy jako przydawka (صفة) zgadza się z rzeczownikiem w: 1) OKREŚLONOŚCI (الطالب → الثاني, oba z الـ), 2) RODZAJU (m.→m.: الثاني, ż.→ż.: الثانية), 3) PRZYPADKU (mianownik → mianownik). To jak polski: 'drugi student' — 'drugi' zgadza się z 'student' w rodzaju, liczbie, przypadku."
            },
            {
                "id": "pa_ord4",
                "question": "Studentka trzecia: الطالبةُ _____",
                "translation": "(الطالبة الثالثة)",
                "options": ["الثالثةُ", "الثالثُ", "ثالثةً", "الثلاثةُ"],
                "correct": "الثالثةُ",
                "explanation": "Poprawnie: 'الطالبةُ الثالثةُ' = trzecia studentka. Żeńska forma: ثالِث → ثالِثة (+ ة). Oba z rodzajnikiem الـ (bo الطالبة jest określona). Oba w mianowniku (ḍamma). Powtórzenie: porządkowy jako przydawka = pełna zgoda. 'Zobaczyłem trzecią studentkę': رأيتُ الطالبةَ الثالثةَ (fatha na obu — biernik)."
            },
            {
                "id": "pa_ord5",
                "question": "Po 10. nie ma porządkowych — zamiast nich:",
                "translation": "(ماذا نستخدم بعد العاشر؟)",
                "options": ["Liczebniki główne: الطالبُ الحاديَ عشرَ (11. student)", "Dalsze فاعِل: حادي عشر, ثاني عشر...", "Nie ma porządkowych po 10", "Formy opisowe"],
                "correct": "Liczebniki główne: الطالبُ الحاديَ عشرَ (11. student)",
                "explanation": "Po 10: porządkowe 11-19 istnieją, ale pierwszy człon to porządkowy, drugi to عاشر: الحاديَ عشرَ (11.), الثانيَ عشرَ (12.)... التاسعَ عشرَ (19.). OBA مبني على الفتح (nieodmienne). Od 20: używa się liczebników GŁÓWNYCH jako porządkowych: الطالبُ العشرونَ (20. student), الصفحةُ الخامسةُ والعشرونَ (25. strona). Proste — bo nie ma osobnych form."
            },
            {
                "id": "pa_ord6",
                "question": "Piąte piętro: الطابقُ _____",
                "translation": "(الطابق الخامس)",
                "options": ["الخامسُ", "خامساً", "الخمسةُ", "خمسةُ"],
                "correct": "الخامسُ",
                "explanation": "Poprawnie: 'الطابقُ الخامسُ' = piąte piętro. الطابق (m.) → الخامِس (m., z الـ, mianownik). Porządkowe używane w codziennych kontekstach: الطابقُ الثالثُ (3. piętro), الشارعُ الرابعُ (4. ulica), البابُ السادسُ (6. drzwi). W adresach i lokalizacjach — kluczowe słownictwo!"
            },
            {
                "id": "pa_ord7",
                "question": "أوَّلاً, ثانياً, ثالثاً... — te formy to:",
                "translation": "(ما نوع أوّلاً، ثانياً؟)",
                "options": ["Przysłówki porządkowe w bierniku: po pierwsze, po drugie...", "Przymiotniki", "Rzeczowniki", "Czasowniki"],
                "correct": "Przysłówki porządkowe w bierniku: po pierwsze, po drugie...",
                "explanation": "Poprawnie: أوَّلاً (po pierwsze), ثانياً (po drugie), ثالثاً (po trzecie)... عاشراً (po dziesiąte). To porządkowe w BIERNIKU jako حال lub ظرف — funkcja przysłówkowa. Bardzo częste w tekstach akademickich, prezentacjach, listach. W polskim: 'po pierwsze, po drugie' — forma przysłówkowa. Identyczna funkcja w obu językach."
            },
            {
                "id": "pa_ord8",
                "question": "Forma żeńska 'السادس' (szósty) to:",
                "translation": "(ما مؤنث السادس؟)",
                "options": ["السادسة", "الساتة", "السدسة", "السادسى"],
                "correct": "السادسة",
                "explanation": "Poprawnie: 'السادسة' (as-sādisa) = szósta. Regularne tworzenie żeńskiej: + ة. Wszystkie porządkowe 2-10 tworzą żeński regularnie: ثانية, ثالثة, رابعة, خامسة, سادسة, سابعة, ثامنة, تاسعة, عاشرة. WYJĄTEK: أوّل → أُولَى (nie *أوّلة). Porządkowe to przymiotniki — odmieniają się w pełni jak przymiotniki (rodzaj, liczba, przypadek, określoność)."
            },
            {
                "id": "pa_ord9",
                "question": "اليومُ _____ من رمضان (15. dzień Ramadanu)",
                "translation": "(اليوم الخامس عشر من رمضان)",
                "options": ["الخامسَ عشرَ", "خمسةَ عشرَ", "الخامسُ عشرُ", "خامسَ عشرونَ"],
                "correct": "الخامسَ عشرَ",
                "explanation": "Poprawnie: 'اليومُ الخامسَ عشرَ' = 15. dzień. Porządkowe 11-19: مبني على الفتح (nieodmienne — OBA człony z fathą). Pierwszy człon porządkowy (الخامس), drugi عاشر (dziesiąty). Zgoda w płci: اليوم (m.) → الخامسَ عشرَ (m.+m.), الليلة (noc, ż.) → الخامسةَ عشرةَ (ż.+ż.). To jak polski: '15. dzień' — porządkowy zgadza się z rzeczownikiem."
            },
            {
                "id": "pa_ord10",
                "question": "Porządkowy od 'واحد' (jeden) to:",
                "translation": "(ما الترتيبي من واحد؟)",
                "options": ["أوَّل (nie *واحِد)", "واحِد", "أحَد", "وَحيد"],
                "correct": "أوَّل (nie *واحِد)",
                "explanation": "WAŻNE: واحِد = liczebnik GŁÓWNY (jeden), أوَّل = porządkowy (pierwszy). To RÓŻNE wyrazy — nie od tego samego rdzenia! واحد od و-ح-د, أوّل od أ-و-ل. Porównaj: 'one' vs. 'first' w angielskim (też inne rdzenie). Inne pary: اثنان/ثانٍ (dwa/drugi — inne rdzenie!), ثلاثة/ثالث (trzy/trzeci — ten sam rdzeń ث-ل-ث). Od 3 wzwyż: rdzeń wspólny."
            },
            {
                "id": "pa_ord11",
                "question": "Jak powiedzieć 'po raz pierwszy'?",
                "translation": "(كيف تقول 'لأول مرة'؟)",
                "options": ["لأوَّلِ مرَّةٍ", "أوَّلَ مرَّةً", "في الأوَّلِ", "مرَّةً أولى"],
                "correct": "لأوَّلِ مرَّةٍ",
                "explanation": "Poprawnie: 'لأوَّلِ مرَّةٍ' (liʾawwali marratin) = po raz pierwszy (dosł. 'dla pierwszego razu'). لـ (przyimek: dla) + أوَّلِ (dopełniacz) + مرَّةٍ (dopełniacz — إضافة). Alternatywa: لِلمرَّةِ الأُولَى (dla pierwszego razu — z الـ). Inne wyrażenia: آخِرَ مرَّةٍ (ostatni raz), كلَّ مرَّةٍ (za każdym razem), هذه المرَّةَ (tym razem)."
            },
            {
                "id": "pa_ord12",
                "question": "Który porządkowy ma nieregularną formę żeńską?",
                "translation": "(أي ترتيبي مؤنثه شاذ؟)",
                "options": ["أوَّل → أُولَى (nie *أوَّلة)", "ثانٍ → ثانية", "ثالث → ثالثة", "عاشر → عاشرة"],
                "correct": "أوَّل → أُولَى (nie *أوَّلة)",
                "explanation": "أوَّل → أُولَى to JEDYNY nieregularny porządkowy. Forma żeńska na ـى (alif maqṣūra) zamiast ـة (tā' marbūṭa). Jest to wzorzec فُعْلَى (superlativus ż.): أوَّل = أَفْعَل (m.), أُولَى = فُعْلَى (ż.). Inne أَفْعَل/فُعْلَى: أَكْبَر/كُبْرَى (większy/większa), أَصْغَر/صُغْرَى (mniejszy/mniejsza). To wzorzec stopnia najwyższego, nie porządkowy!"
            },
            {
                "id": "pa_ord13",
                "question": "الجزءُ _____ (Trzeci tom/część)",
                "translation": "(الجزء الثالث)",
                "options": ["الثالثُ", "ثالثاً", "الثلاثةُ", "ثلاثةً"],
                "correct": "الثالثُ",
                "explanation": "Poprawnie: 'الجزءُ الثالثُ' = trzeci tom. Użycie w realiach: الجزء الأوّل (tom 1.), الحلقة الخامسة (odcinek 5.), الفصل السابع (rozdział 7.), الصفحة العاشرة (strona 10.). To podstawowe porządkowe w kontekstach akademickich, medialnych i religijnych (Koran: الجزء الثلاثون = 30. część)."
            },
            {
                "id": "pa_ord14",
                "question": "ثانٍ (drugi — nieokreślony) — dlaczego tanwin (ـٍ)?",
                "translation": "(لماذا ثانٍ بالتنوين؟)",
                "options": ["Bo to ناقص — ي odpada w nieokreślonym mianow./dopełn.", "Bo jest w dopełniaczu", "Przypadkowy tanwin", "Błąd"],
                "correct": "Bo to ناقص — ي odpada w nieokreślonym mianow./dopełn.",
                "explanation": "ثانٍ ma rdzeń ث-ن-ي (ناقص — ي na końcu). W formie nieokreślonej mianownik/dopełniacz: ي ODPADA + tanwin: ثانٍ (mian./dopeł.). Z الـ: الثاني (ي wraca). W bierniku: ثانياً (ي zachowana). To ta sama reguła co: قاضٍ (sędzia) / القاضي, ماشٍ (idący) / الماشي. Porządkowe na فاعِل od rdzeni ناقص: ثانٍ = jedyny taki porządkowy (bo 2 = ث-ن-ي)."
            },
            {
                "id": "pa_ord15",
                "question": "Podsumowanie: porządkowe 1-10 vs. 11+:",
                "translation": "(ملخص الترتيبيات)",
                "options": ["1-10: فاعِل (oddzielne formy); 11-19: złożone nieodmienne; 20+: = główne", "Wszędzie takie same", "Nie ma porządkowych po 10", "1-100: wszystkie فاعِل"],
                "correct": "1-10: فاعِل (oddzielne formy); 11-19: złożone nieodmienne; 20+: = główne",
                "explanation": "System: 1) Porządkowe 1-10: oddzielne formy na فاعِل (أوَّل, ثانٍ, ثالث...عاشر) + formy żeńskie (أولى, ثانية, ثالثة...). 2) Porządkowe 11-19: złożone + nieodmienne (الحاديَ عشرَ, الثانيَ عشرَ... التاسعَ عشرَ). 3) Od 20: BRAK odrębnych form — używamy liczebników GŁÓWNYCH jako porządkowych: الصفحةُ العشرونَ (str. 20.). Prostota rośnie z wielkością liczby!"
            }
        ]
    }
]

data.extend(new_categories)

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

items = sum(len(c.get('items',[])) for c in data)
print(f'Now: {len(data)} categories, {items} items')
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k:v for k,v in Counter(all_ids).items() if v > 1}
if dupes:
    print(f'DUPLICATES: {dupes}')
else:
    print('No duplicate IDs')
for c in new_categories:
    print(f'  + {c["key"]} ({len(c["items"])} items)')
