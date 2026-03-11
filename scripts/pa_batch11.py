import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "pattern_system",
        "name": "System wzorców (أوزان)",
        "description": "نظام الأوزان والقوالب في العربية",
        "iconName": "square.grid.3x3",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_pat1",
                "question": "Wzorzec فَعَلَ (faʿala) oznacza:",
                "translation": "(ما معنى وزن فَعَلَ؟)",
                "options": ["Podstawowy wzorzec czasownika formy I", "Wzorzec rzeczownika", "Wzorzec przymiotnika", "Wzorzec strony biernej"],
                "correct": "Podstawowy wzorzec czasownika formy I",
                "explanation": "Poprawnie: فَعَلَ (faʿala) to PODSTAWOWY wzorzec arabskiego czasownika formy I (3. os. l. poj. r.m. czas przeszły). Litery ف-ع-ل służą jako SZABLON: ف = pierwsza spółgłoska rdzenia, ع = druga, ل = trzecia. Każdy rdzeń wstawia się w ten szablon: ك-ت-ب → كَتَبَ, ش-ر-ب → شَرِبَ. System wzorców (أوزان) to KLUCZ do arabskiej morfologii — pozwala przewidywać formy słów."
            },
            {
                "id": "pa_pat2",
                "question": "Wzorzec فَاعِل (fāʿil) tworzy:",
                "translation": "(ما الذي يصوغه وزن فَاعِل؟)",
                "options": ["Imiesłów czynny formy I", "Imiesłów bierny formy I", "Masdar formy I", "Tryb rozkazujący"],
                "correct": "Imiesłów czynny formy I",
                "explanation": "Poprawnie: فَاعِل (fāʿil) = imiesłów czynny (اسم الفاعل) formy I. Przykłady: كَاتِب (piszący/pisarz, od ك-ت-ب), عَامِل (pracujący/pracownik, od ع-م-ل), طَالِب (szukający/student, od ط-ل-ب). Wzorzec: długie ā po pierwszej spółgłosce + kasra przed trzecią. W polskim to jak '-ący': piszący, pracujący. Ale w arabskim imiesłów często staje się pełnym rzeczownikiem — طَالِب = student."
            },
            {
                "id": "pa_pat3",
                "question": "Wzorzec مَفْعُول (mafʿūl) tworzy:",
                "translation": "(ما الذي يصوغه وزن مَفْعُول؟)",
                "options": ["Imiesłów bierny formy I", "Imiesłów czynny formy I", "Masdar formy II", "Rzeczownik miejsca"],
                "correct": "Imiesłów bierny formy I",
                "explanation": "Poprawnie: مَفْعُول (mafʿūl) = imiesłów bierny (اسم المفعول) formy I. Przykłady: مَكْتُوب (napisany, od ك-ت-ب), مَفْهُوم (zrozumiany/pojęcie, od ف-ه-م), مَعْرُوف (znany, od ع-ر-ف). Prefiks مَـ + rdzeń + długie ū przed trzecią spółgłoską. W polskim: '-any/-ony': napisany, zrozumiany. Wiele مَفْعُول stało się rzeczownikami: مَفْهُوم = pojęcie, مَشْرُوع = projekt."
            },
            {
                "id": "pa_pat4",
                "question": "Wzorzec مَفْعَل (mafʿal) tworzy:",
                "translation": "(ما الذي يصوغه وزن مَفْعَل؟)",
                "options": ["Rzeczownik miejsca lub czasu", "Imiesłów bierny", "Masdar formy I", "Przymiotnik"],
                "correct": "Rzeczownik miejsca lub czasu",
                "explanation": "Poprawnie: مَفْعَل/مَفْعِل (mafʿal/mafʿil) = اسم المكان/الزمان (rzeczownik miejsca lub czasu). Przykłady: مَكْتَب (biurko/biuro, od ك-ت-ب = pisanie), مَلْعَب (boisko, od ل-ع-ب = gra), مَدْخَل (wejście, od د-خ-ل = wchodzenie), مَوْعِد (termin, od و-ع-د = obietnica). Prefiks مَـ + rdzeń + fatha/kasra. Logika: MIEJSCE gdzie czynność się odbywa."
            },
            {
                "id": "pa_pat5",
                "question": "Wzorzec فِعَال (fiʿāl) to najczęstsza forma:",
                "translation": "(وزن فِعَال أكثر شيوعاً في...؟)",
                "options": ["Liczby mnogiej łamanej", "Masdaru formy I", "Imiesłowu czynnego", "Trybu rozkazującego"],
                "correct": "Liczby mnogiej łamanej",
                "explanation": "Poprawnie: فِعَال (fiʿāl) to jeden z najczęstszych wzorców liczby mnogiej łamanej (جمع التكسير). Przykłady: جِبَال (góry, od جَبَل), رِجَال (mężczyźni, od رَجُل), كِتَاب (= książka, ALE też mn. pewnych słów). Inne wzorce l. mn.: فُعَل (غُرَف od غُرْفَة), فُعُول (دُرُوس od دَرْس), أَفْعَال (أَعْمَال od عَمَل). Każdy wzorzec l. poj. ma preferowane wzorce l. mn. — trzeba zapamiętać."
            },
            {
                "id": "pa_pat6",
                "question": "Wzorzec فَعِيل (faʿīl) najczęściej tworzy:",
                "translation": "(وزن فَعِيل يصوغ غالباً...؟)",
                "options": ["Przymiotniki", "Czasowniki", "Rzeczowniki miejsca", "Imiesłowy bierne"],
                "correct": "Przymiotniki",
                "explanation": "Poprawnie: فَعِيل (faʿīl) to bardzo produktywny wzorzec przymiotników. Przykłady: كَبِير (duży), صَغِير (mały), جَمِيل (piękny), طَوِيل (długi/wysoki), قَرِيب (bliski), بَعِيد (daleki), جَدِيد (nowy), قَدِيم (stary). Długie ī między drugą a trzecią spółgłoską. UWAGA: فَعِيل może też być imiesłowem biernym! قَتِيل = zabity (= مَقْتُول). Kontekst rozstrzyga."
            },
            {
                "id": "pa_pat7",
                "question": "Wzorzec فُعْلَة (fuʿla) z l. mn. فُعَل (fuʿal) — przykład:",
                "translation": "(مثال على وزن فُعْلَة/فُعَل)",
                "options": ["غُرْفَة/غُرَف (pokój/pokoje)", "كِتَاب/كُتُب (książka/książki)", "مَدِينَة/مُدُن (miasto/miasta)", "جَامِعَة/جَامِعَات (uczelnia/uczelnie)"],
                "correct": "غُرْفَة/غُرَف (pokój/pokoje)",
                "explanation": "Poprawnie: غُرْفَة (ghurfa) = pokój → l. mn. łamana: غُرَف (ghuraf). Wzorzec فُعْلَة→فُعَل jest bardzo regularny: ta marbouta odpada, a samogłoski się zmieniają. Inne: صُورَة→صُوَر (zdjęcie→zdjęcia), لُعْبَة→لُعَب (zabawka→zabawki). Porównaj: كِتَاب→كُتُب (inny wzorzec: فِعَال→فُعُل), مَدِينَة→مُدُن (فَعِيلَة→فُعُل). Wzorce l. mn. łamanej — trzeba uczyć się parami."
            },
            {
                "id": "pa_pat8",
                "question": "Wzorzec تَفْعِيل (tafʿīl) to masdar formy:",
                "translation": "(تَفْعِيل مصدر أي وزن؟)",
                "options": ["Formy II (فَعَّلَ)", "Formy III (فَاعَلَ)", "Formy IV (أَفْعَلَ)", "Formy V (تَفَعَّلَ)"],
                "correct": "Formy II (فَعَّلَ)",
                "explanation": "Poprawnie: تَفْعِيل (tafʿīl) = masdar formy II. Przykłady: تَعْلِيم (nauczanie, od عَلَّمَ), تَدْرِيب (trening, od دَرَّبَ), تَصْمِيم (projektowanie, od صَمَّمَ), تَخْطِيط (planowanie, od خَطَّطَ). Prefiks تَـ + rdzeń + ـِيل. To NAJREGULARNIEJSZY masdar — prawie każda forma II ma تَفْعِيل. Wyjątki rzadkie: تَزْكِيَة (od زَكَّى — ناقص)."
            },
            {
                "id": "pa_pat9",
                "question": "Wzorzec اِسْتِفْعَال (istifʿāl) to masdar formy:",
                "translation": "(اِسْتِفْعَال مصدر أي وزن؟)",
                "options": ["Formy X (اِسْتَفْعَلَ)", "Formy VII (اِنْفَعَلَ)", "Formy VIII (اِفْتَعَلَ)", "Formy IX (اِفْعَلَّ)"],
                "correct": "Formy X (اِسْتَفْعَلَ)",
                "explanation": "Poprawnie: اِسْتِفْعَال (istifʿāl) = masdar formy X. Przykłady: اِسْتِخْدَام (używanie, od اِسْتَخْدَمَ), اِسْتِعْمَال (stosowanie, od اِسْتَعْمَلَ), اِسْتِفْهَام (pytanie/zapytanie, od اِسْتَفْهَمَ). Prefiks اِسْتِـ + rdzeń + ـَال. Forma X znaczy 'szukać/prosić o cechę rdzenia': اِسْتَغْفَرَ = prosić o przebaczenie (od غ-ف-ر = przebaczać). Masdar X jest regularny."
            },
            {
                "id": "pa_pat10",
                "question": "Wzorzec مِفْعَال (mifʿāl) tworzy:",
                "translation": "(وزن مِفْعَال يصوغ...؟)",
                "options": ["Rzeczownik narzędzia (اسم الآلة)", "Imiesłów czynny", "Masdar", "Przymiotnik"],
                "correct": "Rzeczownik narzędzia (اسم الآلة)",
                "explanation": "Poprawnie: مِفْعَال (mifʿāl) = اسم الآلة (rzeczownik narzędzia). Przykłady: مِفْتَاح (klucz, od ف-ت-ح = otwieranie), مِصْبَاح (lampa, od ص-ب-ح = poranek/świt), مِيزَان (waga, od و-ز-ن = ważenie). Inne wzorce narzędzia: مِفْعَل (مِبْرَد = pilnik), مِفْعَلَة (مِكْنَسَة = miotła). Prefiks مِـ (z kasrą, nie fathą jak w مَفْعَل = miejsce!)."
            },
            {
                "id": "pa_pat11",
                "question": "Wzorzec أَفْعَل (afʿal) z żeńskim فُعْلَى (fuʿlā) to:",
                "translation": "(وزن أَفْعَل/فُعْلَى هو...؟)",
                "options": ["Stopień wyższy/najwyższy (elativus)", "Imiesłów czynny formy IV", "Masdar formy IV", "Przymiotnik zwykły"],
                "correct": "Stopień wyższy/najwyższy (elativus)",
                "explanation": "Poprawnie: أَفْعَل/فُعْلَى = اسم التفضيل (elativus — stopień wyższy/najwyższy). Przykłady: أَكْبَر/كُبْرَى (większy/największa), أَصْغَر/صُغْرَى (mniejszy/najmniejsza), أَحْسَن/حُسْنَى (lepszy/najlepsza). UWAGA: ten sam wzorzec أَفْعَل to też forma IV! أَكْبَرَ (powiększył — forma IV) vs. أَكْبَر (większy — elativus). Różnica: elativus jest diptotyczny (nie bierze tanwinu)."
            },
            {
                "id": "pa_pat12",
                "question": "Wzorzec فَعَّال (faʿʿāl) tworzy:",
                "translation": "(وزن فَعَّال يصوغ...؟)",
                "options": ["Rzeczownik zawodu/intensywności", "Masdar formy II", "Imiesłów bierny", "Tryb rozkazujący"],
                "correct": "Rzeczownik zawodu/intensywności",
                "explanation": "Poprawnie: فَعَّال (faʿʿāl) = صيغة المبالغة (forma intensywna) lub rzeczownik zawodu. Przykłady: خَبَّاز (piekarz, od خ-ب-ز = pieczenie), نَجَّار (stolarz, od ن-ج-ر = ciesielstwo), حَدَّاد (kowal, od ح-د-د = żelazo), رَسَّام (malarz, od ر-س-م = rysowanie). Szadda + długie ā = intensywność/powtarzalność. W polskim: '-arz/-nik': piekarz, stolarz."
            },
            {
                "id": "pa_pat13",
                "question": "Wzorzec فُعَالَة (fuʿāla) oznacza najczęściej:",
                "translation": "(وزن فُعَالَة يدلّ غالباً على...؟)",
                "options": ["Odpad/resztki czynności", "Przymiotnik żeński", "Masdar formy I", "Imiesłów bierny"],
                "correct": "Odpad/resztki czynności",
                "explanation": "Poprawnie: فُعَالَة (fuʿāla) oznacza ODPAD lub RESZTKĘ czynności wyrażonej rdzeniem. Przykłady: نُفَايَة (odpadek, od ن-ف-ي = wyrzucanie), قُصَاصَة (wycinek, od ق-ص-ص = cięcie), غُسَالَة (pomyje, od غ-س-ل = mycie), كُنَاسَة (śmieci, od ك-ن-س = zamiatanie). To ciekawy semantyczny wzorzec — sam kształt słowa mówi: 'to, co pozostało po czynności rdzenia'."
            },
            {
                "id": "pa_pat14",
                "question": "Ile jest podstawowych form (أوزان) czasownika arabskiego?",
                "translation": "(كم عدد أوزان الأفعال الأساسية؟)",
                "options": ["10 (I–X)", "7", "15", "3"],
                "correct": "10 (I–X)",
                "explanation": "Poprawnie: 10 podstawowych form (أوزان) czasownika: I فَعَلَ, II فَعَّلَ, III فَاعَلَ, IV أَفْعَلَ, V تَفَعَّلَ, VI تَفَاعَلَ, VII اِنْفَعَلَ, VIII اِفْتَعَلَ, IX اِفْعَلَّ, X اِسْتَفْعَلَ. Formy XI–XV istnieją, ale są BARDZO rzadkie (poetyckie/archaiczne). Każda forma ma swoje znaczenie: II = intensywność/kauzatywność, III = wzajemność, V = zwrotność II, itd. To SERCE arabskiej morfologii."
            },
            {
                "id": "pa_pat15",
                "question": "Jak odczytać wzorzec nieznajomego słowa مُسْتَشْفًى?",
                "translation": "(ما وزن مُسْتَشْفًى؟)",
                "options": ["مُسْتَفْعَل — rzeczownik miejsca formy X", "مُفْتَعَل — forma VIII", "فُعْلَى — przymiotnik żeński", "مَفْعُول — imiesłów bierny"],
                "correct": "مُسْتَفْعَل — rzeczownik miejsca formy X",
                "explanation": "Poprawnie: مُسْتَشْفًى (mustashfan) = szpital. Wzorzec: مُسْتَفْعَل (forma X). Rdzeń: ش-ف-ي (leczenie). Dosłownie: 'miejsce gdzie szuka się uzdrowienia'. Prefiks مُسْتَـ wskazuje formę X, a wzorzec مُسْتَفْعَل to rzeczownik miejsca/imiesłów bierny X. Tak działa system wzorców w praktyce: widząc مُسْتَـ wiesz, że to forma X; widząc مُـ wiesz, że to imiesłów lub rzeczownik miejsca."
            }
        ]
    },
    {
        "key": "nunation_tanwin",
        "name": "Tanwin — nunacja (تنوين)",
        "description": "التنوين وأحكامه في العربية",
        "iconName": "textformat.abc.dottedunderline",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_tnw1",
                "question": "Tanwin to:",
                "translation": "(ما هو التنوين؟)",
                "options": ["Końcowe -n dodawane do rzeczowników nieokreślonych", "Rodzajnik określony", "Końcówka żeńska", "Prefiks czasownikowy"],
                "correct": "Końcowe -n dodawane do rzeczowników nieokreślonych",
                "explanation": "Poprawnie: التنوين (tanwīn) = nunacja — dodanie dźwięku '-n' na końcu rzeczownika NIEOKREŚLONEGO. Trzy formy: -un (ٌ mianownik), -an (ً biernik), -in (ٍ dopełniacz). Np.: كِتَابٌ (kitābun = pewna książka), كِتَابًا (kitāban), كِتَابٍ (kitābin). W polskim nieokreśloność wyrażamy brakiem rodzajnika: 'książka' vs. 'ta książka'. W arabskim tanwin = brak الـ."
            },
            {
                "id": "pa_tnw2",
                "question": "Znak ـٌ (dwie dammy) oznacza:",
                "translation": "(ماذا يعني ـٌ؟)",
                "options": ["Tanwin ḍamma — mianownik nieokreślony (-un)", "Tanwin fatha — biernik (-an)", "Tanwin kasra — dopełniacz (-in)", "Ḍamma bez tanwinu"],
                "correct": "Tanwin ḍamma — mianownik nieokreślony (-un)",
                "explanation": "Poprawnie: ـٌ = tanwin ḍamma (تنوين الضم). Wymowa: -un. Używany w mianowniku (مرفوع) rzeczowników nieokreślonych. Np.: طَالِبٌ (ṭālibun = student), كِتَابٌ جَدِيدٌ (kitābun jadīdun = nowa książka). W piśmie: dwie małe ḍammy (ٌ). W mowie potocznej tanwin często opuszczany, ale w MSA i Koranie obowiązkowy. Porównaj z nieokreślonym polskim: 'student czyta książkę'."
            },
            {
                "id": "pa_tnw3",
                "question": "Tanwin fatha (ً) wymaga dodatkowego alif w:",
                "translation": "(متى يُضاف ألف التنوين؟)",
                "options": ["Większości słów kończących się na spółgłoskę", "Tylko słów żeńskich", "Wszystkich słów", "Tylko słów z hamzą"],
                "correct": "Większości słów kończących się na spółgłoskę",
                "explanation": "Poprawnie: tanwin fatha (ً) dodaje alif podpórkowy po spółgłosce: كِتَابًا (kitāban), وَلَدًا (waladan). Ale NIE dodaje alif: 1) po tā marbūṭa: مَدْرَسَةً (madrasatan — ة nie potrzebuje alif), 2) po alif maqṣūra: فَتًى (fatan — alif maqṣūra zostaje), 3) po hamza na alif: مَبْدَأً (mabdaʾan — hamza na alif). Tylko tanwin fatha potrzebuje tego alif — tanwin ḍamma i kasra nie."
            },
            {
                "id": "pa_tnw4",
                "question": "Które wyrazy NIE przyjmują tanwinu?",
                "translation": "(أي الكلمات لا تُنوَّن؟)",
                "options": ["Wyrazy z rodzajnikiem الـ", "Wyrazy żeńskie", "Wszystkie przymiotniki", "Wyrazy w mianowniku"],
                "correct": "Wyrazy z rodzajnikiem الـ",
                "explanation": "Poprawnie: tanwin i الـ (rodzajnik określony) WZAJEMNIE SIĘ WYKLUCZAJĄ. كِتَابٌ (nieokreślony z tanwinem) vs. الكِتَابُ (określony z الـ, BEZ tanwinu). To fundamentalna reguła: tanwin = nieokreślony, الـ = określony. Inne wyrazy bez tanwinu: diptoty (ممنوع من الصرف), nazwy własne pewnych wzorców (أَحْمَد, عُمَر), zaimki, liczebniki złożone. Diptoty to oddzielny temat!"
            },
            {
                "id": "pa_tnw5",
                "question": "Słowo 'مُعَلِّمَةٌ' (nauczycielka) ma tanwin na:",
                "translation": "(أين التنوين في مُعَلِّمَةٌ؟)",
                "options": ["Na tā marbūṭa (ةٌ)", "Na mīm", "Na lām", "Nie ma tanwinu"],
                "correct": "Na tā marbūṭa (ةٌ)",
                "explanation": "Poprawnie: مُعَلِّمَةٌ (muʿallimatun) — tanwin jest na tā marbūṭa (ةٌ). Tā marbūṭa (ة) to żeńska końcówka wymawiana '-a' w pauzalnej formie, ale '-at-' w kontynuacyjnej. Z tanwinem: مُعَلِّمَةٌ = -atun (mianownik), مُعَلِّمَةً = -atan (biernik), مُعَلِّمَةٍ = -atin (dopełniacz). WAŻNE: tanwin fatha na ة NIE dodaje alif: مُعَلِّمَةً (nie *مُعَلِّمَةًا)."
            },
            {
                "id": "pa_tnw6",
                "question": "W wymowie pauzalnej (końcowej) tanwin fatha:",
                "translation": "(ماذا يحدث لتنوين الفتح في الوقف؟)",
                "options": ["Zachowuje się jako -ā (alif wymawiane)", "Znika całkowicie", "Zmienia się na -un", "Pozostaje -an"],
                "correct": "Zachowuje się jako -ā (alif wymawiane)",
                "explanation": "Poprawnie: w waqf (pauzalnej wymowie na końcu zdania/frazy) tanwin ḍamma i kasra ZNIKAJA: كِتَابٌ → كِتَاب, كِتَابٍ → كِتَاب. Ale tanwin fatha ZACHOWUJE SIĘ jako długie ā: كِتَابًا → كِتَابَا (kitābā). Dlatego alif podpórkowy jest tak ważny — on 'zostaje' w wymowie. Reguła: قِفْ عَلَى الفَتْحَة (zatrzymaj się na fathie). To wpływa na recytację Koranu i formalną mowę."
            },
            {
                "id": "pa_tnw7",
                "question": "Tanwin kasra (ـٍ) pojawia się po:",
                "translation": "(متى يظهر تنوين الكسر؟)",
                "options": ["Przyimkach (في, مِنْ, إلى, عَلَى, بِـ)", "Tylko w mianowniku", "Tylko w bierniku", "Po rodzajniku الـ"],
                "correct": "Przyimkach (في, مِنْ, إلى, عَلَى, بِـ)",
                "explanation": "Poprawnie: tanwin kasra (ـٍ) = dopełniacz nieokreślony. Przyimki rządzą dopełniaczem: في كِتَابٍ (w książce), مِنْ بَيْتٍ (z domu), إلى مَدْرَسَةٍ (do szkoły), بِقَلَمٍ (piórem), عَلَى طَاوِلَةٍ (na stole). Porównaj: في الكِتَابِ (w TEJ książce — الـ + kasra BEZ tanwinu). Tanwin kasra to najczęstsza forma tanwinu w tekście — bo dopełniacz jest bardzo produktywny (idāfa, przyimki)."
            },
            {
                "id": "pa_tnw8",
                "question": "Jak tanwin wpływa na wymowę الـ po nim?",
                "translation": "(ما أثر التنوين على اللام بعده؟)",
                "options": ["Nie ma wpływu — tanwin i الـ nie występują razem", "Tanwin zamienia się na lām", "الـ znika", "Oba współistnieją"],
                "correct": "Nie ma wpływu — tanwin i الـ nie występują razem",
                "explanation": "To pytanie-test: tanwin i الـ NIGDY nie występują na tym samym wyrazie (wzajemne wykluczenie). Ale w SEKWENCJI wyrazów: tanwin + الـ następnego wyrazu → tanwin wymawia się normalnie: كِتَابًا الطَالِبِ (kitābanil-ṭālibi? NIE — taka struktura jest niagramatyczna!). Poprawnie: كِتَابَ الطَالِبِ (idāfa — bez tanwinu) lub كِتَابًا لِلطَالِبِ (biernik + przyimek)."
            },
            {
                "id": "pa_tnw9",
                "question": "Słowo أَحْمَدُ (Ahmad — imię) z tanwinem to:",
                "translation": "(هل يُنوَّن أَحْمَد؟)",
                "options": ["Nie — to diptot (ممنوع من الصرف)", "أَحْمَدٌ — normalny tanwin", "أَحْمَدٍ — tanwin kasra", "Zawsze z tanwinem"],
                "correct": "Nie — to diptot (ممنوع من الصرف)",
                "explanation": "Poprawnie: أَحْمَد to ممنوع من الصرف (diptot) — NIE przyjmuje tanwinu. Dlaczego? Bo ma wzorzec أَفْعَل (ten sam co stopień wyższy) + jest imieniem własnym. Diptoty mają tylko DWA przypadki: أَحْمَدُ (mianownik), أَحْمَدَ (biernik I dopełniacz — ta sama forma!). Inne diptoty: عُمَر, فَاطِمَة (imiona), مَسَاجِد (l. mn. łamana na م-ا). Wyjątek: z الـ diptot odmienia się normalnie."
            },
            {
                "id": "pa_tnw10",
                "question": "Tanwin w rdzeniu idāfa (إضافة):",
                "translation": "(هل يوجد تنوين في المضاف؟)",
                "options": ["Pierwszy wyraz (مضاف) TRACI tanwin", "Oba wyrazy mają tanwin", "Tylko drugi wyraz traci tanwin", "Tanwin się podwaja"],
                "correct": "Pierwszy wyraz (مضاف) TRACI tanwin",
                "explanation": "Poprawnie: w idāfa (إضافة = konstrukcji dopełniaczowej) PIERWSZY wyraz (مُضَاف) TRACI tanwin: كِتَابٌ → كِتَابُ الطَالِبِ (książka studenta, NIE *كِتَابٌ الطَالِبِ). Drugi wyraz (مُضَاف إليه) jest w dopełniaczu — z tanwinem jeśli nieokreślony: كِتَابُ طَالِبٍ (książka pewnego studenta), lub z الـ: كِتَابُ الطَالِبِ (książka tego studenta). Utrata tanwinu = sygnał idāfy."
            },
            {
                "id": "pa_tnw11",
                "question": "Końcówka '-an' w słowie شُكْرًا (dziękuję) to:",
                "translation": "(ما إعراب شُكْرًا؟)",
                "options": ["Tanwin fatha — biernik (مفعول مطلق)", "Tanwin ḍamma — mianownik", "Przyimek", "Nie jest tanwinem"],
                "correct": "Tanwin fatha — biernik (مفعول مطلق)",
                "explanation": "Poprawnie: شُكْرًا (shukran) = dosł. 'podziękowanie' w bierniku — مفعول مطلق (dopełnienie wewnętrzne). Biernik tanwinowy jest bardzo częsty w wyrażeniach: عَفْوًا (przepraszam), أَيْضًا (również), أَهْلًا (witaj!), طَبْعًا (oczywiście), مَثَلًا (na przykład). Wszystkie kończą się na '-an' — biernik nieokreślony. To odpowiednik polskiego 'narzędnika adwerbialnego' (podobnie dziękowaniu)."
            },
            {
                "id": "pa_tnw12",
                "question": "W tajwid (recytacji Koranu), tanwin przed ب staje się:",
                "translation": "(ماذا يحدث للتنوين قبل الباء في التجويد؟)",
                "options": ["إقلاب (iqlab) — tanwin → m (mīm)", "إظهار (iẓhār) — wymowa jasna", "إدغام (idghām) — podwojenie", "إخفاء (ikhfāʾ) — ukrycie"],
                "correct": "إقلاب (iqlab) — tanwin → m (mīm)",
                "explanation": "Poprawnie: tanwin (nūn) przed باء → إقلاب = zamiana na mīm. Np.: سَمِيعٌ بَصِيرٌ wymawia się samīʿum-baṣīr (ٌ → m przed ب). To reguła tajwid (recytacji Koranu). Inne reguły: إظهار (jasna wymowa, przed gardłowymi), إدغام (wchłonięcie, przed ي,ن,م,و,ل,ر), إخفاء (ukrycie, przed resztą). Te reguły dotyczą nūn z sukun I tanwinu."
            },
            {
                "id": "pa_tnw13",
                "question": "Przymiotnik po rzeczowniku w idāfa:",
                "translation": "(هل يُنوَّن النعت بعد الإضافة؟)",
                "options": ["Tak — jeśli opisuje cały zwrot nieokreślony", "Nigdy", "Tylko z الـ", "Zawsze traci tanwin"],
                "correct": "Tak — jeśli opisuje cały zwrot nieokreślony",
                "explanation": "Poprawnie: كِتَابُ طَالِبٍ جَدِيدٍ — 'جَدِيدٍ' (nowy) ma tanwin bo opisuje 'طَالِبٍ' (nieokreślony student). Ale: كِتَابُ الطَالِبِ الجَدِيدِ — 'الجَدِيدِ' z الـ (bo opisuje الطَالِبِ z الـ). Reguła: przymiotnik zgadza się z opisywanym rzeczownikiem w określoności. W polskim: 'książka nowego studenta' — przymiotnik dopasowuje się do rzeczownika, ale bez rodzajnika."
            },
            {
                "id": "pa_tnw14",
                "question": "Wyraz إِذَنْ (zatem) to przykład:",
                "translation": "(إِذَنْ مثال على...؟)",
                "options": ["Nūn stałe (nie tanwin)", "Tanwin fatha", "Tanwin kasra", "Tanwin ḍamma"],
                "correct": "Nūn stałe (nie tanwin)",
                "explanation": "Poprawnie: إِذَنْ (idhan) = zatem — końcowe -n to STAŁE nūn (نون ثابتة), NIE tanwin. Różnica: tanwin = deklinacyjne, zmienne -n (znika z الـ i w idāfa); stałe nūn = część wyrazu (nie znika). Inne przykłady stałego nūn: مَنْ (kto), لَنْ (nie — przyszłość), أَنْ (że), مِنْ (z). Tanwin zapisuje się jako podwójny znak (ٌ,ً,ٍ), stałe nūn jako litera ن."
            },
            {
                "id": "pa_tnw15",
                "question": "Tanwin w nowoczesnym MSA (mówiony):",
                "translation": "(التنوين في العربية الفصحى المعاصرة المنطوقة)",
                "options": ["Często pomijany w mowie potocznej, obowiązkowy w recytacji/formach", "Zawsze wymawiany", "Nigdy niewymawiany", "Tylko w pytaniach"],
                "correct": "Często pomijany w mowie potocznej, obowiązkowy w recytacji/formach",
                "explanation": "Poprawnie: w praktyce tanwin jest POMIJANY w nieformalnej mowie MSA i w dialektach. Ale jest OBOWIĄZKOWY w: recytacji Koranu, formalnych przemówieniach, czytaniu na głos, gramatyce szkolnej. Wyrażenia utarte zachowują tanwin nawet w mowie: شُكْرًا (shukran), أَهْلًا (ahlan), طَبْعًا (ṭabʿan). Polski nie ma nic porównywalnego — to jak różnica między mową potoczną a literacką."
            }
        ]
    },
    {
        "key": "definite_article_rules",
        "name": "Rodzajnik الـ — reguły",
        "description": "أحكام التعريف بـ(ال) والاختلافات",
        "iconName": "character.book.closed",
        "color": "#22d3ee",
        "level": "beginner",
        "items": [
            {
                "id": "pa_dar1",
                "question": "Rodzajnik określony w arabskim to:",
                "translation": "(ما أداة التعريف في العربية؟)",
                "options": ["الـ (al-)", "أَ (a-)", "لِ (li-)", "إنَّ (inna)"],
                "correct": "الـ (al-)",
                "explanation": "Poprawnie: الـ (al-) to JEDYNY rodzajnik określony w arabskim. Nie ma rodzajnika nieokreślonego ('a/an' w angielskim) — nieokreśloność wyraża tanwin. الكِتَاب (al-kitāb) = TA książka, كِتَابٌ (kitābun) = PEWNA książka. الـ jest NIEODMIENNY — nie zmienia się z przypadkiem, liczbą ani rodzajem. W polskim: 'ten/ta/to' + odmiana. Arabski الـ jest prostszy."
            },
            {
                "id": "pa_dar2",
                "question": "الشَّمْسُ — dlaczego لام nie jest wymawiane?",
                "translation": "(لماذا لا تُنطق اللام في الشَّمْس؟)",
                "options": ["ش jest literą 'słoneczną' — lām się asymiluje", "Błąd ortograficzny", "Lām zawsze jest nieme", "ش pochłania lām"],
                "correct": "ش jest literą 'słoneczną' — lām się asymiluje",
                "explanation": "Poprawnie: ش (shīn) jest jedną z 14 liter 'słonecznych' (حروف شمسية). Przed nimi lām rodzajnika ASYMILUJE SIĘ (upodobnia): الشَّمْس wymawia się ash-shams (nie *al-shams). Litery słoneczne: ت ث د ذ ر ز س ش ص ض ط ظ ل ن. Przed nimi lām → podwojenie następnej litery. Nazwa 'słoneczne' od الشَّمْس (słońce) — sama nazwa ilustruje regułę! W polskim: 'z sąsiadem' → 's sąsiadem' (podobne upodobnienie)."
            },
            {
                "id": "pa_dar3",
                "question": "القَمَرُ — dlaczego لام jest wymawiane?",
                "translation": "(لماذا تُنطق اللام في القَمَر؟)",
                "options": ["ق jest literą 'księżycową' — lām zachowane", "Bo to wyjątek", "Bo lām jest podwojone", "Bo ق jest gardłowe"],
                "correct": "ق jest literą 'księżycową' — lām zachowane",
                "explanation": "Poprawnie: ق (qāf) jest literą 'księżycową' (حرف قمري). Przed nimi lām wymawia się normalnie: al-qamar. 14 liter księżycowych: أ ب ج ح خ ع غ ف ق ك م ه و ي. Nazwa od القَمَر (księżyc). Reguła mnemoniczna: litery, które nie 'łączą się' fonetycznie z lām. Porównaj: الكِتَاب (al-kitāb — lām słyszalne) vs. الدَّرْس (ad-dars — lām niesłyszalne)."
            },
            {
                "id": "pa_dar4",
                "question": "W idāfa (إضافة), الـ może być na:",
                "translation": "(أين يمكن أن تكون ال في الإضافة؟)",
                "options": ["Tylko na drugim wyrazie (مضاف إليه)", "Na obu wyrazach", "Tylko na pierwszym wyrazie", "Nigdzie"],
                "correct": "Tylko na drugim wyrazie (مضاف إليه)",
                "explanation": "Poprawnie: w idāfa الـ NIE może być na مُضَاف (pierwszy wyraz): *الكِتَابُ الطَالِبِ ← BŁĄD! Poprawnie: كِتَابُ الطَالِبِ (książka studenta). Ale الـ na مُضَاف إليه (drugi wyraz): opcjonalne. Z الـ: كِتَابُ الطَالِبِ (książka TEGO studenta). Bez: كِتَابُ طَالِبٍ (książka PEWNEGO studenta). الـ na pierwszym wyrazie rozbija idāfę!"
            },
            {
                "id": "pa_dar5",
                "question": "Przymiotnik po rzeczowniku z الـ musi mieć:",
                "translation": "(ما حكم النعت بعد المعرفة؟)",
                "options": ["Też الـ (zgoda w określoności)", "Tanwin", "Brak jakiejkolwiek końcówki", "Przyimek بِـ"],
                "correct": "Też الـ (zgoda w określoności)",
                "explanation": "Poprawnie: przymiotnik ZGADZA SIĘ z rzeczownikiem w określoności: الكِتَابُ الجَدِيدُ (TA NOWA książka — oba z الـ). Bez الـ: كِتَابٌ جَدِيدٌ (pewna nowa książka — oba z tanwinem). *الكِتَابُ جَدِيدٌ = to NIE jest 'przydawka' lecz ZDANIE nominalne: 'Ta książka jest nowa'! Minimalna różnica — obecność/brak الـ na przymiotniku — zmienia STRUKTURĘ zdania."
            },
            {
                "id": "pa_dar6",
                "question": "الـ w nazwie 'العراق' (Irak):",
                "translation": "(هل ال جزء من اسم العراق؟)",
                "options": ["Jest integralną częścią nazwy własnej", "Można opuścić", "Jest opcjonalne", "To błąd"],
                "correct": "Jest integralną częścią nazwy własnej",
                "explanation": "Poprawnie: العِرَاق — الـ jest INTEGRALNĄ częścią nazwy i ZAWSZE obecne. Porównaj: مِصْر (Egipt — bez الـ), اليَمَن (Jemen — z الـ), المَغْرِب (Maroko — z الـ), لُبْنَان (Liban — bez). Nie ma reguły — trzeba zapamiętać, które kraje mają الـ. Inne: الأُرْدُن (Jordania), السُّودَان (Sudan), الإِمَارَات (Emiraty). W polskim nazwy krajów nigdy nie mają rodzajnika."
            },
            {
                "id": "pa_dar7",
                "question": "الـ للجنس (rodzajnik gatunkowy) w 'الإنسانُ ضعيفٌ':",
                "translation": "(ما معنى ال الجنسية في الإنسان ضعيف؟)",
                "options": ["Człowiek (jako gatunek) jest słaby — generalizacja", "Ten konkretny człowiek jest słaby", "Ludzie (l. mn.) są słabi", "Człowiek o imieniu Al-Insān"],
                "correct": "Człowiek (jako gatunek) jest słaby — generalizacja",
                "explanation": "Poprawnie: ال الجنسية (al- gatunkowe) wyraża GENERALIZACJĘ — cały gatunek/kategoria. الإنسانُ ضعيفٌ = Człowiek (ogólnie) jest słaby. Porównaj: الإنسانُ الذي رَأَيتُهُ = TEN człowiek, którego widziałem (ال العهدية — al- wskazujące). Dwa użycia الـ: 1) gatunkowe (generalizacja), 2) wskazujące (konkretny). W polskim: 'Człowiek jest słaby' vs. 'Ten człowiek jest słaby'."
            },
            {
                "id": "pa_dar8",
                "question": "Czy الـ łączy się z następnym wyrazem w piśmie?",
                "translation": "(هل ال تتصل بالكلمة التالية؟)",
                "options": ["Tak — الـ jest proklityką (łączy się)", "Nie — pisze się oddzielnie", "Czasami", "Tylko w Koranie"],
                "correct": "Tak — الـ jest proklityką (łączy się)",
                "explanation": "Poprawnie: الـ jest proklityką (أداة متصلة) — ZAWSZE łączy się z następnym wyrazem w piśmie: الكتاب (al-kitāb), nie *ال كتاب. Ale przyimki PRZED الـ też się łączą: بالكتاب (bi-l-kitāb), لِلطالب (li-l-ṭālib), فالأمر (fa-l-amr). W transliteracji: al- z łącznikiem. Po przyimku لِ: لِلـ (zdwojone l). W polskim nic porównywalnego — to cecha pisma arabskiego."
            },
            {
                "id": "pa_dar9",
                "question": "Hamza wasla (همزة الوصل) w الـ:",
                "translation": "(ما نوع الهمزة في الـ؟)",
                "options": ["Hamza łączeniowa — nie wymawiana w środku zdania", "Hamza odcinająca — zawsze wymawiana", "Nie ma hamzy", "Tylko w pauzalnej formie"],
                "correct": "Hamza łączeniowa — nie wymawiana w środku zdania",
                "explanation": "Poprawnie: hamza w الـ to همزة وصل (hamza łączeniowa, wasla) — wymawiana na początku wypowiedzi: اَلكِتَابُ (al-kitābu), ale NIE wymawiana w środku: قَرَأْتُ الكِتَابَ wymawia się qaraʾtu-l-kitāba (nie *qaraʾtu al-kitāba). W piśmie formalna: ٱلكتاب (z alif wasla ٱ), ale zwykle pisze się po prostu الكتاب. To kluczowa reguła wymowy w MSA i recytacji Koranu."
            },
            {
                "id": "pa_dar10",
                "question": "Wyrażenie الحمد لله — الـ jest tu:",
                "translation": "(ما نوع ال في الحمد لله؟)",
                "options": ["Gatunkowe (كل الحمد = wszelka chwała)", "Wskazujące na konkretny moment", "Opcjonalne", "Błędne użycie"],
                "correct": "Gatunkowe (كل الحمد = wszelka chwała)",
                "explanation": "Poprawnie: الحَمْدُ لِلَّهِ (al-ḥamdu lillāhi) = Chwała Bogu / Wszelka chwała (należy) Bogu. الـ na الحمد jest اِسْتِغراقيّة (wyczerpujące) — obejmuje KAŻDY akt chwały. To ال الجنسية في أقصى مداها (gatunkowe w najszerszym zakresie). Wyrażenie otwiera Surę Al-Fatiha — najczęściej recytowany werset Koranu. W polskim: 'Wszelka chwała' — polskie 'wszelka' oddaje zakres arabskiego الـ."
            },
            {
                "id": "pa_dar11",
                "question": "Czy zaimki (هو, أنتَ, نحن) przyjmują الـ?",
                "translation": "(هل تقبل الضمائر أداة التعريف؟)",
                "options": ["Nie — są determinate z natury (معارف بذاتها)", "Tak — opcjonalnie", "Tylko w 3. osobie", "Tylko w bierniku"],
                "correct": "Nie — są determinate z natury (معارف بذاتها)",
                "explanation": "Poprawnie: zaimki (ضمائر) to معارف بذاتها — określone Z NATURY. هو (on) = zawsze określony, nie potrzebuje الـ. Hierarchia określoności w arabskim: 1) zaimki, 2) nazwy własne, 3) zaimki wskazujące, 4) zaimki względne, 5) rzeczowniki z الـ, 6) مضاف do określonego. Gramatyka arabska klasyfikuje 6 typów المعارف (wyrazów określonych)."
            },
            {
                "id": "pa_dar12",
                "question": "Wyrażenie 'في البيت' wymawia się:",
                "translation": "(كيف تُنطق في البيت؟)",
                "options": ["fi-l-bayti (hamza wasla nie wymawiana)", "fī al-bayti (hamza wymawiana)", "fi-el-bayti", "fil-bayti"],
                "correct": "fi-l-bayti (hamza wasla nie wymawiana)",
                "explanation": "Poprawnie: في البيت = fi-l-bayti. Po samogłosce (في kończy się na ī) hamza wasla الـ nie jest wymawiana — lām łączy się bezpośrednio. To reguła wasla: po samogłosce hamza wasla → cisza. Porównaj: فِي البَيْتِ (fi-l-bayti), إلَى البَيْتِ (ila-l-bayti), مِنَ البَيْتِ (mina-l-bayti). Ale na początku zdania: البَيْتُ كَبِيرٌ = al-baytu kabīrun (hamza wymawiana)."
            },
            {
                "id": "pa_dar13",
                "question": "Forma الَّذِي (który) ma الـ bo:",
                "translation": "(لماذا يبدأ الَّذِي بالـ؟)",
                "options": ["الـ jest integralną częścią zaimka względnego", "Jest to opcjonalne", "Wskazuje na określoność", "To inny przedimek"],
                "correct": "الـ jest integralną częścią zaimka względnego",
                "explanation": "Poprawnie: الَّذِي (alladhī) = który (r.m.) — الـ jest INTEGRALNĄ częścią słowa, nie rodzajnikiem. To zaimek względny: الَّذِي, الَّتِي, الَّذِينَ, اللَّاتِي/اللَّوَاتِي. Lām jest podwojone (شدّة na لّ). NIE wolno oddzielać الـ od reszty. Porównaj z prawdziwym الـ: الكتاب (można bez: كتاب). Ale *ذِي jako osobne słowo nie istnieje w MSA."
            },
            {
                "id": "pa_dar14",
                "question": "W jakim przypadku الـ występuje z tanwinem?",
                "translation": "(متى يجتمع ال والتنوين؟)",
                "options": ["Nigdy — wzajemnie się wykluczają", "W bierniku", "W dopełniaczu", "Po przyimkach"],
                "correct": "Nigdy — wzajemnie się wykluczają",
                "explanation": "NIGDY: الـ (określoność) i tanwin (nieokreśloność) to PRZECIWIEŃSTWA. *الكِتَابٌ = BŁĄD gramatyczny. Poprawnie: الكِتَابُ (z الـ, bez tanwinu) lub كِتَابٌ (z tanwinem, bez الـ). To jedna z PIERWSZYCH reguł arabskiej gramatyki i jeden z najczęstszych błędów początkujących. W polskim: nie da się powiedzieć *'ten pewien książka' — to samo w arabskim."
            },
            {
                "id": "pa_dar15",
                "question": "Poprawna forma: 'piękna szkoła' to:",
                "translation": "(ما الصحيح: مدرسة جميلة؟)",
                "options": ["مَدْرَسَةٌ جَمِيلَةٌ (oba z tanwinem)", "الْمَدْرَسَةٌ جَمِيلَةٌ (mieszane)", "مَدْرَسَةُ الْجَمِيلَةِ (idāfa z przymiotnikiem)", "المَدْرَسَةً جَمِيلَةٍ"],
                "correct": "مَدْرَسَةٌ جَمِيلَةٌ (oba z tanwinem)",
                "explanation": "Poprawnie: مَدْرَسَةٌ جَمِيلَةٌ (madrasatun jamīlatun) = piękna szkoła (nieokreślona). Reguła zgody: przymiotnik zgadza się z rzeczownikiem w OKREŚLONOŚCI. Oba nieokreślone → oba z tanwinem. Oba określone → oba z الـ: المَدْرَسَةُ الجَمِيلَةُ (TA piękna szkoła). Mieszanie: المَدْرَسَةُ جَمِيلَةٌ = to ZDANIE: 'Szkoła jest piękna' (nie przydawka!)."
            }
        ]
    },
    {
        "key": "dual_plurals_advanced",
        "name": "Liczba podwójna i mnoga — zaawansowane",
        "description": "المثنى وجموع التكسير المتقدمة",
        "iconName": "person.2.fill",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {
                "id": "pa_dpa1",
                "question": "Dwoje studentów' w mianowniku to:",
                "translation": "(ما مثنى طالب في المرفوع؟)",
                "options": ["طَالِبَانِ", "طَالِبَيْنِ", "طَالِبُونَ", "طُلَّابٌ"],
                "correct": "طَالِبَانِ",
                "explanation": "Poprawnie: طَالِبَانِ (ṭālibāni) = dwoje studentów (mianownik). Końcówka liczby podwójnej w mianowniku: ـَانِ (-āni). Biernik/dopełniacz: طَالِبَيْنِ (-ayni). W polskim nie ma liczby podwójnej — używamy 'dwoje studentów' (l. mn. + liczebnik). W arabskim l. podwójna jest OSOBNĄ formą gramatyczną, obowiązkową gdy mowa o DOKŁADNIE dwóch."
            },
            {
                "id": "pa_dpa2",
                "question": "Liczba podwójna żeńska od 'مُعَلِّمَة' (nauczycielka) to:",
                "translation": "(ما مثنى مُعَلِّمَة؟)",
                "options": ["مُعَلِّمَتَانِ (tā marbūṭa → tā)", "مُعَلِّمَتَيْنِ", "مُعَلِّمَانِ", "مُعَلِّمَاتِ"],
                "correct": "مُعَلِّمَتَانِ (tā marbūṭa → tā)",
                "explanation": "Poprawnie: مُعَلِّمَتَانِ (muʿallimatāni) = dwie nauczycielki (mianownik). KLUCZOWE: tā marbūṭa (ة) OTWIERA SIĘ do tā (ت) przed końcówką podwójną: مُعَلِّمَة → مُعَلِّمَتَانِ. To stała reguła: ة → ت przed sufuksami. Biernik/dopełniacz: مُعَلِّمَتَيْنِ (muʿallimatayni). W polskim: 'dwie nauczycielki' — l. mn., nie podwójna."
            },
            {
                "id": "pa_dpa3",
                "question": "L. mn. regularna męska (جمع المذكر السالم) od 'مُعَلِّم':",
                "translation": "(جمع المذكر السالم من مُعَلِّم)",
                "options": ["مُعَلِّمُونَ (mianownik) / مُعَلِّمِينَ (biernik/dopeł.)", "مُعَلِّمَاتٌ", "مَعَالِيم", "مُعَلَّمُونَ"],
                "correct": "مُعَلِّمُونَ (mianownik) / مُعَلِّمِينَ (biernik/dopeł.)",
                "explanation": "Poprawnie: جمع المذكر السالم = l. mn. regularna męska — dodaje końcówkę bez zmiany rdzenia: مُعَلِّمُونَ (-ūna, mianownik), مُعَلِّمِينَ (-īna, biernik/dopełniacz). 'سَالِم' = 'zdrowy/regularny' — rdzeń nie ulega 'złamaniu'. Tylko dla ROZUMNYCH istot męskich: مُعَلِّمُونَ (nauczyciele), مُهَنْدِسُونَ (inżynierowie). NIE: *كِتَابُونَ (książki — nierozumne!)."
            },
            {
                "id": "pa_dpa4",
                "question": "L. mn. regularna żeńska (جمع المؤنث السالم) od 'مُعَلِّمَة':",
                "translation": "(جمع المؤنث السالم من مُعَلِّمَة)",
                "options": ["مُعَلِّمَاتٌ", "مُعَلِّمُونَ", "مَعَالِيم", "مُعَلِّمَتَانِ"],
                "correct": "مُعَلِّمَاتٌ",
                "explanation": "Poprawnie: مُعَلِّمَاتٌ (muʿallimātun) = nauczycielki. L. mn. regularna żeńska: ة → ـَات (-āt). Deklinacja: مُعَلِّمَاتٌ (mianownik), مُعَلِّمَاتٍ (biernik I dopełniacz — OBA na kasrę!). To WYJĄTEK: biernik = dopełniacz (nie fatha!). Porównaj regularny biernik: كِتَابًا (fatha). Ale l. mn. żeńska: مُعَلِّمَاتٍ (kasra w bierniku). Kolejna pułapka arabskiej deklinacji."
            },
            {
                "id": "pa_dpa5",
                "question": "L. mn. łamana 'كِتَاب' (książka) to:",
                "translation": "(ما جمع التكسير من كِتَاب؟)",
                "options": ["كُتُب", "كِتَابَات", "كُتَّاب", "كِتَابُونَ"],
                "correct": "كُتُب",
                "explanation": "Poprawnie: كُتُب (kutub) = książki. Wzorzec: فِعَال → فُعُل. L. mn. łamana (جمع التكسير) zmienia WEWNĘTRZNĄ strukturę samogłosek — 'łamie' rdzeń. Porównaj regularne: مُعَلِّمَات (dodanie -āt) vs. łamane: كُتُب (zmiana samogłosek). كُتَّاب (kuttāb) = pisarze/szkoła koraniczna (inny wzorzec l. mn. od tego samego rdzenia!). Rdzeń ك-ت-ب generuje wiele form."
            },
            {
                "id": "pa_dpa6",
                "question": "L. mn. łamana od 'رَجُل' (mężczyzna) to:",
                "translation": "(ما جمع التكسير من رَجُل؟)",
                "options": ["رِجَال", "رَجُلُونَ", "رِجَالَات", "رَجَائِل"],
                "correct": "رِجَال",
                "explanation": "Poprawnie: رِجَال (rijāl) = mężczyźni. Wzorzec: فَعُل → فِعَال. DLACZEGO nie regularna (رَجُلُونَ)? Bo nie każdy rzeczownik rozumny męski bierze l. mn. regularną — wiele ma łamaną. رَجُل → رِجَال to jedna z par do zapamiętania. Inne: وَلَد → أَوْلَاد (chłopcy), طِفْل → أَطْفَال (dzieci), شَيْخ → شُيُوخ (starsi). Nie ma pewnej reguły — trzeba uczyć się parami."
            },
            {
                "id": "pa_dpa7",
                "question": "Czasownik z l. mn. łamaną rzeczy nierozumnych:",
                "translation": "(ما حكم الفعل مع جمع غير العاقل؟)",
                "options": ["Zgadza się w r. żeńskim l. poj. (هي)", "Zgadza się w l. mn. r.m. (هم)", "Zgadza się w l. podwójnej", "Brak zgody"],
                "correct": "Zgadza się w r. żeńskim l. poj. (هي)",
                "explanation": "KLUCZOWA reguła: l. mn. łamana rzeczy NIEROZUMNYCH (غير العاقل) traktowana jest gramatycznie jak ŻEŃSKI L. POJ.! الكُتُبُ جَمِيلَةٌ (Książki SĄ piękne — przymiotnik żeński l. poj.!). هِيَ على الرَّفِّ (ONE [= książki] są na półce — هِيَ nie هُمْ!). To jeden z najtrudniejszych aspektów arabskiej zgody — l. mn. nierozumna = jak 'ona'. W polskim: 'Książki są piękne' (normalna l. mn.)."
            },
            {
                "id": "pa_dpa8",
                "question": "Wzorzec أَفْعِلَاء (afʿilāʾ) to l. mn. od:",
                "translation": "(وزن أَفْعِلاء جمع ماذا؟)",
                "options": ["فَعِيل (przymiotników): صَدِيق → أَصْدِقَاء", "فَعَل (rzeczowników): وَلَد → أَوْلَاد", "فَاعِل (imiesłowów)", "فُعْلَة (rzeczowników żeńskich)"],
                "correct": "فَعِيل (przymiotników): صَدِيق → أَصْدِقَاء",
                "explanation": "Poprawnie: أَفْعِلَاء (afʿilāʾ) to l. mn. łamana od wzorca فَعِيل dotyczącego OSÓB: صَدِيق → أَصْدِقَاء (przyjaciel → przyjaciele), غَنِيّ → أَغْنِيَاء (bogaty → bogaci), فَقِير → فُقَرَاء (biedny → biedni). UWAGA: nie wszystkie فَعِيل mają ten wzorzec l. mn. — كَبِير → كِبَار lub كُبَرَاء. Arabska l. mn. łamana ma WIELE wzorców — stąd jej trudność."
            },
            {
                "id": "pa_dpa9",
                "question": "Słowo مَسَاجِد (meczety) to l. mn. od:",
                "translation": "(مَسَاجِد جمع ماذا؟)",
                "options": ["مَسْجِد (meczet)", "مَسْجَد", "سَاجِد (modlący się)", "سُجُود (pokłon)"],
                "correct": "مَسْجِد (meczet)",
                "explanation": "Poprawnie: مَسَاجِد (masājid) = meczety, od مَسْجِد (masjid). Wzorzec l. mn.: مَفَاعِل (od مَفْعِل — rzeczownik miejsca). Ten wzorzec jest STAŁY dla rzeczowników miejsca i narzędzia z مَـ: مَكْتَب → مَكَاتِب (biura), مَدْرَسَة → مَدَارِس (szkoły), مَطْبَخ → مَطَابِخ (kuchnie). To jeden z najbardziej REGULARNYCH wzorców l. mn. łamanej!"
            },
            {
                "id": "pa_dpa10",
                "question": "L. mn. od 'يَوْم' (dzień) to:",
                "translation": "(ما جمع يَوْم؟)",
                "options": ["أَيَّام", "يَوْمَات", "يُوُوم", "أَيْوَام"],
                "correct": "أَيَّام",
                "explanation": "Poprawnie: أَيَّام (ayyām) = dni. Wzorzec: فَعْل → أَفْعَال (z asymilacją و → ي szadda). To nieregularna l. mn. łamana — trzeba zapamiętać. Inne z tego wzorca: لَيْلَة → لَيَالٍ (noce — inny wzorzec!), شَهْر → أَشْهُر/شُهُور (miesiące — dwa wzorce!), سَنَة → سَنَوَات/سِنِين (lata — regularny I łamany!). Wyrazy czasu mają często WIELE form l. mn."
            },
            {
                "id": "pa_dpa11",
                "question": "L. mn. łamana z 4+ spółgłoskami: 'أُسْتَاذ' (profesor):",
                "translation": "(ما جمع أُسْتَاذ؟)",
                "options": ["أَسَاتِذَة", "أُسْتَاذُونَ", "أَسَاتِيذ", "أُسْتَاذَات"],
                "correct": "أَسَاتِذَة",
                "explanation": "Poprawnie: أَسَاتِذَة (asātidha) = profesorowie. Słowa z 4+ literami mają specjalne wzorce l. mn. łamanej: فَعَالِلَة (z tā marbūṭa). Porównaj: دُكْتُور → دَكَاتِرَة (doktorzy), تِلْمِيذ → تَلَامِيذ/تَلَامِذَة (uczniowie). Inna opcja: أَسَاتِذَة może być zastąpione regularnym أُسْتَاذُونَ — obie formy poprawne. Ale łamana jest bardziej 'arabska'."
            },
            {
                "id": "pa_dpa12",
                "question": "Jaka jest l. mn. od 'اِمْرَأَة' (kobieta)?",
                "translation": "(ما جمع اِمْرَأَة؟)",
                "options": ["نِسَاء (supletywna — inny rdzeń!)", "اِمْرَأَات", "مَرْأَات", "اِمْرَائِيّات"],
                "correct": "نِسَاء (supletywna — inny rdzeń!)",
                "explanation": "Poprawnie: نِسَاء (nisāʾ) = kobiety — od INNEGO rdzenia niż اِمْرَأَة! To l. mn. supletywna (od innego rdzenia, jak w polskim: 'człowiek → ludzie'). اِمْرَأَة (rdzeń: م-ر-أ) → نِسَاء (rdzeń: ن-س-و). Podobnie: مَاء → مِيَاه (woda → wody), ale tu ten sam rdzeń. Inne supletywne: فَم → أَفْوَاه (usta). To wyjątki — trzeba zapamiętać."
            },
            {
                "id": "pa_dpa13",
                "question": "Słowo عُيُون (oczy) to l. mn. od:",
                "translation": "(عُيُون جمع ماذا؟)",
                "options": ["عَيْن (oko/źródło)", "عُيْنَة (próbka)", "عَائِن (patrzący)", "مَعِين (źródło)"],
                "correct": "عَيْن (oko/źródło)",
                "explanation": "Poprawnie: عُيُون (ʿuyūn) = oczy/źródła. Od عَيْن (ʿayn) — słowo wieloznaczne: 1) oko, 2) źródło wody, 3) szpieg, 4) istota/esencja. Wzorzec l. mn.: فُعُول (od فَعْل). Inne: بَيْت → بُيُوت (domy), بَحْر → بُحُور (morza), قَلْب → قُلُوب (serca). فُعُول to produktywny wzorzec dla فَعْل. UWAGA: عَيْن jako litera/spółgłoska nie ma l. mn.!"
            },
            {
                "id": "pa_dpa14",
                "question": "Jaka forma uzgodnienia z 'جيوش' (armie)?",
                "translation": "(ما صيغة التوافق مع جُيُوش؟)",
                "options": ["R. żeński l. poj.: هِيَ/الجيوش الكبيرة", "R. męski l. mn.: هُم/الجيوش الكبيرون", "R. męski l. poj.: هو/الجيوش الكبير", "L. podwójna: هما"],
                "correct": "R. żeński l. poj.: هِيَ/الجيوش الكبيرة",
                "explanation": "Poprawnie: جُيُوش (juyūsh) = armie — l. mn. łamana od جَيْش. Armie to rzeczy NIEROZUMNE (nie-ludzkie), więc zgoda w r. żeńskim l. poj.: الجُيُوشُ الكَبِيرَةُ (wielkie armie — przymiotnik żeński!), هِيَ قَوِيَّة (one są silne — هي nie هم). Pamiętaj: nawet jeśli armia składa się z ludzi, sam wyraz 'armia' jest NIEROZUMNY. Polski: 'armie są wielkie' (normalna l. mn.)."
            },
            {
                "id": "pa_dpa15",
                "question": "جُمْلَة المفتاح: 'dwóch mężczyzn czyta' po arabsku:",
                "translation": "(يقرأ رجلان — أو — يقرأان رجلان)",
                "options": ["يَقْرَأُ رَجُلَانِ (czasownik w l. POJEDYNCZEJ!)", "يَقْرَآنِ رَجُلَانِ (czasownik w l. podwójnej)", "يَقْرَأُونَ رَجُلَانِ (l. mn.)", "قَرَأَ رَجُلَانِ"],
                "correct": "يَقْرَأُ رَجُلَانِ (czasownik w l. POJEDYNCZEJ!)",
                "explanation": "Poprawnie: يَقْرَأُ رَجُلَانِ — czasownik w L. POJEDYNCZEJ choć podmiot jest podwójny! To reguła VSO (Verb-Subject-Object): gdy czasownik POPRZEDZA podmiot, jest zawsze w l. poj. (zgadza się tylko w RODZAJU). يَقْرَأُ رَجُلَانِ (wsz.: dwóch mężczyzn czyta). Ale SVO: الرَّجُلَانِ يَقْرَآنِ (ci dwaj mężczyźni czytają — teraz l. podwójna na czasowniku!). Kluczowa różnica VSO vs. SVO!"
            }
        ]
    },
    {
        "key": "collective_nouns",
        "name": "Rzeczowniki zbiorowe (اسم الجنس الجمعي)",
        "description": "الأسماء الجماعية وأسماء الجنس في العربية",
        "iconName": "leaf.fill",
        "color": "#60a5fa",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_cn1",
                "question": "Słowo شَجَر (drzewa) to:",
                "translation": "(ما نوع كلمة شَجَر؟)",
                "options": ["Rzeczownik zbiorowy (اسم جنس جمعي)", "Liczba mnoga łamana", "Liczba mnoga regularna", "Liczba pojedyncza"],
                "correct": "Rzeczownik zbiorowy (اسم جنس جمعي)",
                "explanation": "Poprawnie: شَجَر (shajar) = drzewa (zbiorowo) — اسم جنس جمعي (rzeczownik zbiorowy gatunkowy). To NIE jest l. mn. — to forma ZBIOROWA opisująca GATUNEK. Pojedyncze drzewo: شَجَرَة (shajara) — dodanie tā marbūṭa (ة) tworzy JEDNOSTKĘ (اسم الوَحْدَة). W polskim: 'drzewostano' nie istnieje, ale porównaj: 'bydło' (zbiorowy) vs. 'krowa' (jednostka)."
            },
            {
                "id": "pa_cn2",
                "question": "Jak tworzymy jednostkę (اسم الوحدة) od rzeczownika zbiorowego?",
                "translation": "(كيف نصوغ اسم الوحدة؟)",
                "options": ["Dodajemy ة (tā marbūṭa)", "Dodajemy الـ", "Dodajemy -ون", "Zmieniamy samogłoski"],
                "correct": "Dodajemy ة (tā marbūṭa)",
                "explanation": "Poprawnie: zbiorowy + ة = jednostka: شَجَر (drzewa) → شَجَرَة (jedno drzewo), تُفَّاح (jabłka) → تُفَّاحَة (jedno jabłko), نَحْل (pszczoły) → نَحْلَة (jedna pszczoła), وَرَق (liście/kartki) → وَرَقَة (jeden liść/kartka). To REGULARNA reguła — dodaj ة = dostaniesz jedną sztukę. W polskim: 'owoce' → 'owoc' (zmiana końcówki), w arabskim zawsze +ة."
            },
            {
                "id": "pa_cn3",
                "question": "Słowo بَقَر (bydło) to zbiorowy. Jednostka to:",
                "translation": "(ما اسم الوحدة من بَقَر؟)",
                "options": ["بَقَرَة (jedna krowa/sztuka bydła)", "بَقَرَات", "أَبْقَار", "بُقُور"],
                "correct": "بَقَرَة (jedna krowa/sztuka bydła)",
                "explanation": "Poprawnie: بَقَرَة (baqara) = jedna krowa/sztuka bydła. Sura Koranu 'البَقَرَة' = 'Krowa' (nie 'bydło'!). Od zbiorowego بَقَر (+ة). L. mn. od بَقَرَة: بَقَرَات (regularna żeńska). Albo: أَبْقَار (l. mn. łamana od بَقَر). System: zbiorowy (بَقَر = bydło) ≠ l. poj. (بَقَرَة = krowa) ≠ l. mn. (بَقَرَات/أَبْقَار). Trzy poziomy!"
            },
            {
                "id": "pa_cn4",
                "question": "Rzeczownik zbiorowy تُفَّاح (jabłka) — z jakim rodzajem czasownika?",
                "translation": "(هل تُفَّاح مذكر أم مؤنث؟)",
                "options": ["Męski (choć oznacza grupę): التُّفَّاحُ لَذِيذٌ", "Żeński zawsze", "Podwójny", "Zależy od kontekstu"],
                "correct": "Męski (choć oznacza grupę): التُّفَّاحُ لَذِيذٌ",
                "explanation": "Poprawnie: rzeczownik zbiorowy jest zwykle MĘSKI: التُّفَّاحُ لَذِيذٌ (jabłka [zbiorczo] są pyszne — przymiotnik męski!). Ale JEDNOSTKA jest żeńska: التُّفَّاحَةُ لَذِيذَةٌ (to jabłko jest pyszne — przymiotnik żeński). Porównaj: شَجَرٌ كَبِيرٌ (drzewa [duże] — r.m.) vs. شَجَرَةٌ كَبِيرَةٌ (drzewo [duże] — r.ż.). Rodzaj zmienia się z dodaniem ة!"
            },
            {
                "id": "pa_cn5",
                "question": "Który z tych wyrazów NIE jest rzeczownikiem zbiorowym?",
                "translation": "(أي كلمة ليست اسم جنس جمعي؟)",
                "options": ["كِتَاب (książka — zwykły l. poj.)", "تَمْر (daktyle zbiorowo)", "سَمَك (ryby zbiorowo)", "بَيْض (jaja zbiorowo)"],
                "correct": "كِتَاب (książka — zwykły l. poj.)",
                "explanation": "Poprawnie: كِتَاب (kitāb) = książka — to ZWYKŁY rzeczownik l. poj. (nie zbiorowy). L. mn.: كُتُب. Porównaj zbiorowe: تَمْر (daktyle) → تَمْرَة (jeden daktyl), سَمَك (ryby) → سَمَكَة (jedna ryba), بَيْض (jaja) → بَيْضَة (jedno jajko). Zbiorowe dotyczą głównie: owoców, warzyw, zwierząt, owadów, roślin — rzeczy występujących w GRUPACH w naturze."
            },
            {
                "id": "pa_cn6",
                "question": "Słowo قَوْم (naród/lud) to:",
                "translation": "(ما نوع كلمة قَوْم؟)",
                "options": ["Rzeczownik zbiorowy ludzki (اسم جمع)", "Liczba pojedyncza", "Liczba podwójna", "Przymiotnik"],
                "correct": "Rzeczownik zbiorowy ludzki (اسم جمع)",
                "explanation": "Poprawnie: قَوْم (qawm) = lud/naród — اسم جمع (rzeczownik zbiorowy). Ale w odróżnieniu od اسم جنس جمعي (jak شَجَر), NIE tworzy jednostki przez +ة. Nie ma *قَوْمَة. Inne اسم جمع: نَاس (ludzie — brak l. poj.!), إِبِل (wielbłądy), غَنَم (owce). Te wyrazy są zbiorcze, ale ich STRUKTURA jest inna niż owoce/rośliny. Gramatycznie: mogą brać czasownik l. mn."
            },
            {
                "id": "pa_cn7",
                "question": "L. mn. od jednostki بَيْضَة (jajko):",
                "translation": "(ما جمع بَيْضَة؟)",
                "options": ["بَيْضَات (regularna żeńska)", "بَيْض (zbiorowy ≠ l. mn.!)", "بُيُوض", "أَبْيَاض"],
                "correct": "بَيْضَات (regularna żeńska)",
                "explanation": "Poprawnie: بَيْضَات (bayḍāt) = jajka (l. mn. regularna żeńska od jednostki بَيْضَة). WAŻNE rozróżnienie: بَيْض (zbiorowy) ≠ بَيْضَات (l. mn. od jednostki). Znaczeniowo podobne, ale gramatycznie: بَيْض (m., poj. gramatycznie), بَيْضَات (ż. l. mn. regularna). To subtelność: 'trzy jajka' = ثَلَاثُ بَيْضَاتٍ (od jednostki), nie *ثَلَاثُ بَيْض."
            },
            {
                "id": "pa_cn8",
                "question": "Słowo عَسَل (miód) — czy to zbiorowy?",
                "translation": "(هل عَسَل اسم جنس جمعي؟)",
                "options": ["Nie — to rzeczownik materiałowy (niepodzielny)", "Tak — zbiorowy", "Tak — i ma jednostkę عَسَلَة", "L. mn. łamana"],
                "correct": "Nie — to rzeczownik materiałowy (niepodzielny)",
                "explanation": "Poprawnie: عَسَل (ʿasal) = miód — to rzeczownik MATERIAŁOWY (اسم المادة), nie zbiorowy. Nie ma *عَسَلَة (jednego 'miodu'!) — miód jest niepodzielny na jednostki. Porównaj: مَاء (woda), حَلِيب (mleko), زَيْت (olej) — wszystkie materiałowe, bez jednostki. Zbiorowe (jak تُفَّاح) dzielą się na sztuki: تُفَّاحَة. Materiałowe — nie. To RÓŻNE kategorie gramatyczne."
            },
            {
                "id": "pa_cn9",
                "question": "Wyrażenie 'pięć drzew' po arabsku:",
                "translation": "(كيف نقول خمس أشجار؟)",
                "options": ["خَمْسُ شَجَرَاتٍ (od jednostki + l. mn.)", "خَمْسُ شَجَرٍ (od zbiorowego)", "خَمْسَةُ أَشْجَارٍ", "خَمْسُ شَجَرَةٍ"],
                "correct": "خَمْسُ شَجَرَاتٍ (od jednostki + l. mn.)",
                "explanation": "Poprawnie: خَمْسُ شَجَرَاتٍ (khamsu shajarātin) = pięć drzew. Z liczebnikiem 3–10: liczebnik + l. mn. w dopełniaczu. Jednostka: شَجَرَة → l. mn.: شَجَرَات. UWAGA: خَمْسُ (bez ة — bo شَجَرَات jest żeńskie!) — reguła odwróconej zgody liczebników. Alternatywa: خَمْسَةُ أَشْجَارٍ (od łamanej l. mn.) — obie formy poprawne."
            },
            {
                "id": "pa_cn10",
                "question": "Słowo حَدِيد (żelazo) — rodzaj gramatyczny:",
                "translation": "(ما جنس كلمة حَدِيد؟)",
                "options": ["Męski (materiałowy, niepodzielny)", "Żeński", "Bez rodzaju", "Podwójny"],
                "correct": "Męski (materiałowy, niepodzielny)",
                "explanation": "Poprawnie: حَدِيد (ḥadīd) = żelazo — rzeczownik materiałowy, rodzaj MĘSKI. الحَدِيدُ قَوِيٌّ (żelazo jest mocne — przymiotnik męski). Sura Koranu: الحَدِيد (Żelazo). Inne materiałowe męskie: ذَهَب (złoto), فِضَّة (srebro — ALE ta jest żeńska z ة!), نُحَاس (miedź). Większość materiałów bez ة = męska. Z ة = żeńska. Reguła ogólna, z wyjątkami."
            },
            {
                "id": "pa_cn11",
                "question": "نَخْل (palmy daktylowe) — jednostka i l. mn.:",
                "translation": "(ما وحدة وجمع نَخْل؟)",
                "options": ["Jednostka: نَخْلَة, l. mn.: نَخْلَات/نَخِيل", "Jednostka: نَخْلُون, l. mn.: نُخُول", "Nie ma jednostki", "Jednostka: نَخَّال"],
                "correct": "Jednostka: نَخْلَة, l. mn.: نَخْلَات/نَخِيل",
                "explanation": "Poprawnie: نَخْل (nakhl) = palmy (zbiorowy) → نَخْلَة (nakhla) = jedna palma (jednostka +ة) → l. mn.: نَخْلَات (regularna) lub نَخِيل (łamana). To pełny system: zbiorowy → jednostka → l. mn. od jednostki. نَخِيل jest też samodzielnym synonimem 'palm' — jak w فَنْدَق النَّخِيل (Hotel Palm). Palmy daktylowe = KLUCZOWY element kulturowy Bliskiego Wschodu."
            },
            {
                "id": "pa_cn12",
                "question": "Wyrażenie 'dużo ryb' — poprawna forma:",
                "translation": "(كيف نقول الكثير من السمك؟)",
                "options": ["كَثِيرٌ مِنَ السَّمَكِ (zbiorowy + من)", "كَثِيرُونَ سَمَكٌ", "سَمَكَات كَثِيرَة", "أَسْمَاك كَبِيرَة"],
                "correct": "كَثِيرٌ مِنَ السَّمَكِ (zbiorowy + من)",
                "explanation": "Poprawnie: كَثِيرٌ مِنَ السَّمَكِ (kathīrun mina-s-samaki) = dużo ryb. Z rzeczownikiem zbiorowym: كَثِير من + zbiorowy w dopełniaczu. ALTERNATYWY: أَسْمَاكٌ كَثِيرَةٌ (wiele ryb — l. mn. łamana + przymiotnik żeński bo nierozumne), سَمَكَاتٌ كَثِيرَةٌ (wiele ryb — l. mn. regularna od jednostki). Wszystkie trzy poprawne — zależy od kontekstu i stylu."
            },
            {
                "id": "pa_cn13",
                "question": "Słowo أَهْل (rodzina/ludzie) to:",
                "translation": "(ما نوع كلمة أَهْل؟)",
                "options": ["Rzeczownik zbiorowy ludzki (bez jednostki)", "Rzeczownik gatunkowy z jednostką أَهْلَة", "L. mn. regularna", "Przymiotnik"],
                "correct": "Rzeczownik zbiorowy ludzki (bez jednostki)",
                "explanation": "Poprawnie: أَهْل (ahl) = rodzina/ludzie domu — اسم جمع (zbiorowy ludzki). NIE ma jednostki *أَهْلَة. Używany: أَهْلُ البَيْت (ludzie domu), أَهْلُ الكِتَاب (ludzie Księgi = chrześcijanie i żydzi), أَهْلًا وَسَهْلًا (witaj! — dosł. 'jesteś wśród rodziny'). Gramatycznie: może brać czasownik l. mn. bo dotyczy LUDZI. L. mn. od أَهْل: أَهَالِي/أَهْلُون."
            },
            {
                "id": "pa_cn14",
                "question": "Różnica: مَطَر (deszcz) vs. أَمْطَار (deszcze):",
                "translation": "(ما الفرق بين مَطَر و أَمْطَار؟)",
                "options": ["مَطَر = deszcz (materiałowy/zjawisko), أَمْطَار = deszcze (l. mn. = wielokrotne opady)", "Identyczne", "مَطَر = l. mn., أَمْطَار = l. poj.", "مَطَر = zbiorowy z jednostką مَطَرَة"],
                "correct": "مَطَر = deszcz (materiałowy/zjawisko), أَمْطَار = deszcze (l. mn. = wielokrotne opady)",
                "explanation": "Poprawnie: مَطَر (maṭar) = deszcz (ogólnie, zjawisko) — traktowany jak rzeczownik materiałowy. أَمْطَار (amṭār) = deszcze (wielokrotne wydarzenia deszczowe). مَطَرَة NIE istnieje jako standardowy 'jednostkowy'. To kategoria 'zjawisk przyrodniczych': بَرْق (błyskawica), ثَلْج (śnieg), رِيح/رِيَاح (wiatr/wiatry). Można mieć l. mn. zjawisk, ale nie jednostkę z ة."
            },
            {
                "id": "pa_cn15",
                "question": "W Koranie: وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ — jaki rodzaj يَسْجُدَانِ?",
                "translation": "(ما إعراب يَسْجُدَانِ في هذه الآية؟)",
                "options": ["Liczba podwójna — bo dwa podmioty zbiorowe", "Liczba mnoga", "Liczba pojedyncza męska", "Liczba pojedyncza żeńska"],
                "correct": "Liczba podwójna — bo dwa podmioty zbiorowe",
                "explanation": "Poprawnie: يَسْجُدَانِ (yasjudāni) = (obaj/obie) kłaniają się pokłon — forma PODWÓJNA. Z Sury Ar-Rahman (55:6): 'Gwiazdy i drzewa kłaniają się (Bogu)'. النَّجْم (gwiazdy zbiorowo) + الشَّجَر (drzewa zbiorowo) = DWA podmioty → czasownik w l. podwójnej. Ciekawe: zbiorowe traktowane tu jak DWA POJEDYNCZE podmioty łączone w parę. Koran ilustruje zaawansowane reguły gramatyczne."
            }
        ]
    }
]

data.extend(new_categories)

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

items = sum(len(c.get('items', [])) for c in data)
print(f'Now: {len(data)} categories, {items} items')
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k: v for k, v in Counter(all_ids).items() if v > 1}
if dupes:
    print(f'DUPLICATES: {dupes}')
else:
    print('No duplicate IDs')
for c in new_categories:
    print(f'  + {c["key"]} ({len(c["items"])} items)')
