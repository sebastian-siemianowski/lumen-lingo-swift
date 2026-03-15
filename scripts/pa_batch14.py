import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "waw_conjunction",
        "name": "Spójnik واو (i/a)",
        "description": "حرف العطف واو واستخداماته المختلفة",
        "iconName": "link",
        "color": "#4ade80",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_waw1",
                "question": "جاء محمدٌ _____ عليٌّ (Przyszedł Muhammad i Ali)",
                "translation": "(Przyszedł Muhammad i Ali)",
                "options": ["وَ", "فَ", "ثُمَّ", "أَوْ"],
                "correct": "وَ",
                "explanation": "Poprawnie: 'وَ' (wa) = i/oraz. Najczęstszy spójnik arabski — łączy dwa wyrazy lub zdania na zasadzie RÓWNORZĘDNOŚCI. W odróżnieniu od polskiego 'i', واو nie implikuje kolejności czasowej: 'جاء محمد وعلي' może znaczyć, że przyszli jednocześnie LUB w dowolnej kolejności. Dla wyrażenia sekwencji używamy فَ lub ثُمَّ. واو pisze się łącznie z następnym wyrazem: وَعليٌّ."
            },
            {
                "id": "pa_waw2",
                "question": "أَكَلْتُ _____ شَرِبْتُ (Jadłem i piłem — bez kolejności)",
                "translation": "(Jadłem i piłem)",
                "options": ["وَ", "فَ", "ثُمَّ", "لَكِنْ"],
                "correct": "وَ",
                "explanation": "Poprawnie: 'وَ' — łączy dwa zdania bez implikacji kolejności. Mogłeś jeść i pić jednocześnie, albo w dowolnej kolejności. Gdybyś powiedział 'أَكَلْتُ فَشَرِبْتُ' — to najpierw jadłeś, POTEM piłeś (فَ = następstwo). W polskim 'i' jest neutralne podobnie jak واو, ale kontekst często sugeruje kolejność. W arabskim rozróżnienie jest GRAMATYCZNE, nie kontekstowe."
            },
            {
                "id": "pa_waw3",
                "question": "Które użycie واو NIE jest spójnikowe (عاطفة)?",
                "translation": "(أي واو ليست عاطفة؟)",
                "options": ["واو الحال (okolicznikowe)", "واو العطف (łączące)", "واو بين اسمين (między rzeczownikami)", "واو بين فعلين (między czasownikami)"],
                "correct": "واو الحال (okolicznikowe)",
                "explanation": "واو الحال (wāw al-ḥāl) = واو okolicznikowe — NIE łączy równorzędnie, lecz wprowadza zdanie okolicznikowe (حال). Np.: 'جاءَ وهو يبتسمُ' = Przyszedł UŚMIECHAJĄC SIĘ (dosł. 'a on się uśmiecha'). واو الحال odpowiada polskiemu imiesłowowi przysłówkowemu. Inne واو niespójnikowe: واو القسم (przysięgi: واللهِ = Przysięgam na Boga), واو رُبَّ (z رُبَّ = nieraz/może)."
            },
            {
                "id": "pa_waw4",
                "question": "واللهِ _____ صادقٌ (Przysięgam na Boga, on jest szczery)",
                "translation": "(Przysięgam na Boga, on jest szczery)",
                "options": ["إنَّهُ", "هو", "كان", "لَيْسَ"],
                "correct": "إنَّهُ",
                "explanation": "واللهِ (wallāhi) = Przysięgam na Boga — tu واو jest واو القسم (przysięgi), NIE spójnikiem. Po przysiędze: إنَّ + zdanie nominalne. واو القسم wymaga DOPEŁNIACZA po sobie: واللهِ (الله w dopełniaczu). Inne formy przysięgi: تاللهِ (z تَ), باللهِ (z بِ). Przysięga jest bardzo częsta w arabskim — formalnie i nieformalnie."
            },
            {
                "id": "pa_waw5",
                "question": "W 'قرأتُ الكتابَ والمجلةَ' — والمجلةَ jest w:",
                "translation": "(ما إعراب والمجلةَ؟)",
                "options": ["Bierniku — bo معطوف na الكتابَ", "Mianowniku", "Dopełniaczu", "Bez odmiany"],
                "correct": "Bierniku — bo معطوف na الكتابَ",
                "explanation": "Kluczowa reguła: wyraz po واو العطف (spójnikowym) przybiera TEN SAM przypadek co wyraz przed واو. الكتابَ jest w bierniku (منصوب, bo dopełnienie bliższe) → والمجلةَ też w bierniku. 'قرأتُ الكتابَ والمجلةَ' = Przeczytałem książkę i czasopismo. Porównaj: 'جاء الولدُ والبنتُ' — mianownik (مرفوع), bo podmiot. Ta reguła dotyczy WSZYSTKICH spójników współrzędnych."
            },
            {
                "id": "pa_waw6",
                "question": "واو المعية w 'لا تأكلْ وأنت واقفٌ' znaczy:",
                "translation": "(ما معنى واو المعية هنا؟)",
                "options": ["Nie jedz STOJĄC (towarzyszenie)", "Nie jedz i nie stój", "Jedz i stój", "Jedz, a potem stój"],
                "correct": "Nie jedz STOJĄC (towarzyszenie)",
                "explanation": "واو المعية (wāw al-maʿiyya) = واو towarzyszenia — wyraża JEDNOCZESNOŚĆ dwóch czynności. 'لا تأكلْ وأنت واقفٌ' = Nie jedz, będąc w pozycji stojącej (= nie jedz stojąc). To NIE znaczy 'nie jedz I nie stój' (to byłoby: لا تأكلْ ولا تقفْ). واو المعية + zdanie nominalne = okolicznik sposobu. Odpowiada polskiemu imiesłowowi: 'stojąc', 'siedząc'."
            },
            {
                "id": "pa_waw7",
                "question": "جلسَ الطلابُ وَالمعلمُ (Uczniowie usiedli i nauczyciel) — واو tu jest:",
                "translation": "(ما نوع الواو هنا؟)",
                "options": ["واو العطف (spójnikowa)", "واو الحال (okolicznikowa)", "واو القسم (przysięgi)", "واو المعية (towarzyszenia)"],
                "correct": "واو العطف (spójnikowa)",
                "explanation": "Tu واو łączy dwa podmioty: الطلابُ + المعلمُ — oba w mianowniku. To standardowe واو العطف (wa-l-ʿaṭf) = spójnik współrzędny. Jak odróżnić? واو العطف: łączy wyrazy tego samego przypadka. واو الحال: po niej zdanie z podmiotem zaimkowym (وهو...). واو القسم: przed imieniem Boga (واللهِ). واو المعية: po zakazie/nakazie + zdanie nominalne."
            },
            {
                "id": "pa_waw8",
                "question": "سافرَ إلى مصرَ وَإلى لبنان (Podróżował do Egiptu i do Libanu) — واو łączy:",
                "translation": "(واو تعطف ماذا على ماذا؟)",
                "options": ["Dwa wyrażenia przyimkowe", "Dwa podmioty", "Dwa dopełnienia", "Dwa orzeczenia"],
                "correct": "Dwa wyrażenia przyimkowe",
                "explanation": "واو łączy tu dwa wyrażenia przyimkowe (جار ومجرور): إلى مصرَ + إلى لبنان. واو العطف może łączyć: rzeczowniki (كتاب ومجلة), czasowniki (أكل وشرب), zdania (جاء محمد وذهب علي), wyrażenia przyimkowe (إلى مصر وإلى لبنان), przymiotniki (طويل وقوي). Wszystko, co jest tego samego typu gramatycznego."
            },
            {
                "id": "pa_waw9",
                "question": "واو w 'اِسْتَيْقَظْتُ وَالشمسُ طالعةٌ' jest:",
                "translation": "(ما نوع الواو في هذه الجملة؟)",
                "options": ["واو الحال (okolicznikowa)", "واو العطف (spójnikowa)", "واو القسم (przysięgi)", "واو الاستئنافية (rozpoczynająca)"],
                "correct": "واو الحال (okolicznikowa)",
                "explanation": "Poprawnie: واو الحال. 'اِسْتَيْقَظْتُ وَالشمسُ طالعةٌ' = Obudziłem się, A SŁOŃCE (było) wschodzące = Obudziłem się, gdy słońce wschodziło. Po واو الحال: zdanie nominalne (الشمسُ طالعةٌ) opisujące OKOLICZNOŚĆ głównej czynności. W polskim: 'obudziłem się przy wschodzie słońca' — okolicznik czasu. Reguła: واو + zdanie nominalne po czasowniku = حال."
            },
            {
                "id": "pa_waw10",
                "question": "W zdaniu 'ذهبتُ وصديقي إلى السوق' — واو jest:",
                "translation": "(ما نوع الواو هنا؟)",
                "options": ["واو المعية (towarzyszenia)", "واو العطف (spójnikowa)", "واو الحال", "واو القسم"],
                "correct": "واو المعية (towarzyszenia)",
                "explanation": "Tu واو المعية (towarzyszenia): 'ذهبتُ وصديقي' = Poszedłem RAZEM Z przyjacielem. Jak odróżnić od واو العطف? Gdyby to był عطف: 'ذهبتُ وصديقي' → صديقي musiałby być w mianowniku (صديقِي — مرفوع, bo podmiot). Z واو المعية: صديقي w bierniku (منصوب — مفعول معه). Subtelna, ale gramatycznie istotna różnica!"
            },
            {
                "id": "pa_waw11",
                "question": "Ile typów واو istnieje w gramatyce arabskiej?",
                "translation": "(كم نوعاً للواو في النحو العربي؟)",
                "options": ["Więcej niż 10", "Dokładnie 3", "Tylko 1", "Dokładnie 5"],
                "correct": "Więcej niż 10",
                "explanation": "Arabska واو ma PONAD 10 typów! Główne: واو العطف (spójnikowa), واو الحال (okolicznikowa), واو القسم (przysięgi), واو المعية (towarzyszenia), واو الاستئنافية (rozpoczynająca nowe zdanie), واو رُبَّ (z partykułą رُبَّ), واو الجماعة (końcówka l. mn. m. — كتبوا), واو العلة (jako و rdzenia — قول), واو اللصق (wstawkowe). Ta wielofunkcyjność czyni واو jednym z najtrudniejszych elementów arabskiej gramatyki."
            },
            {
                "id": "pa_waw12",
                "question": "كتبَ الطالبُ الدرسَ والتمرينَ — والتمرينَ jest w:",
                "translation": "(ما إعراب والتمرينَ؟)",
                "options": ["Bierniku (منصوب) — jak الدرسَ", "Mianowniku (مرفوع)", "Dopełniaczu (مجرور)", "Nie odmienia się"],
                "correct": "Bierniku (منصوب) — jak الدرسَ",
                "explanation": "والتمرينَ (wa-t-tamrīna) w bierniku, bo jest معطوف (dolączone) do الدرسَ (w bierniku jako مفعول به). Reguła عطف: wyraz po spójniku = ten sam przypadek co wyraz przed spójnikiem. الدرسَ (biernik → dopełnienie) → والتمرينَ (biernik). Gdyby było: 'كتب الطالبُ والطالبةُ' — مرفوع (oba podmioty). Przypadek zależy od funkcji PIERWSZEGO wyrazu."
            },
            {
                "id": "pa_waw13",
                "question": "لَعِبَ الأولادُ وَالبناتُ — واو łączy tu:",
                "translation": "(واو تعطف ماذا؟)",
                "options": ["Dwa podmioty (فاعل)", "Dwa dopełnienia (مفعول)", "Dwa orzeczenia (فعل)", "Dwa okoliczniki"],
                "correct": "Dwa podmioty (فاعل)",
                "explanation": "واو łączy الأولادُ (chłopcy) + البناتُ (dziewczynki) — oba w mianowniku jako podmioty. لَعِبَ = bawił się → لَعِبَ الأولادُ والبناتُ = Chłopcy i dziewczynki bawili się. Pytanie: dlaczego czasownik w l. poj. (لَعِبَ), a podmiot w l. mn.? Bo w arabskim: czasownik PRZED podmiotem = zawsze l. poj. (zgodność w rodzaju, nie liczbie). To reguła VSO."
            },
            {
                "id": "pa_waw14",
                "question": "واو w 'وَاللهُ يعلمُ' na początku zdania jest:",
                "translation": "(ما نوع الواو في بداية الجملة؟)",
                "options": ["واو الاستئنافية (rozpoczynająca)", "واو العطف", "واو الحال", "واو المعية"],
                "correct": "واو الاستئنافية (rozpoczynająca)",
                "explanation": "واو الاستئنافية (wāw al-istiʾnāfiyya) = واو rozpoczynająca nowe zdanie — nie łączy z poprzednim gramatycznie, lecz retorycznie. 'وَاللهُ يعلمُ' = A Bóg wie. Bardzo częsta w Koranie i literaturze. Po niej zaczyna się NOWY إعراب (nowa analiza składniowa). W polskim: 'A/I/Zaś Bóg wie' — spójnik na początku zdania o funkcji stylistycznej. W tłumaczeniach często pomijana."
            },
            {
                "id": "pa_waw15",
                "question": "Która z tych واو wymaga BIERNIKA (منصوب) po sobie?",
                "translation": "(أي واو تنصب ما بعدها؟)",
                "options": ["واو المعية (towarzyszenia)", "واو العطف (spójnikowa)", "واو القسم (przysięgi)", "واو الحال (okolicznikowa)"],
                "correct": "واو المعية (towarzyszenia)",
                "explanation": "واو المعية wymaga BIERNIKA: 'سِرْتُ والنهرَ' = Szedłem WZDŁUŻ rzeki (النهرَ = biernik, مفعول معه). Porównaj: واو العطف → przypadek taki jak pierwszy wyraz; واو القسم → DOPEŁNIACZ (واللهِ); واو الحال → po niej zdanie nominalne (mianownik podmiotu). Zasada: każdy typ واو rządzi innym przypadkiem — to klucz do poprawnej analizy składniowej."
            }
        ]
    },
    {
        "key": "fa_conjunction",
        "name": "Spójnik فاء (więc/a potem)",
        "description": "حرف العطف فاء واستخداماته",
        "iconName": "arrow.right",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_fa1",
                "question": "دخلَ المعلمُ _____ قامَ الطلابُ (Wszedł nauczyciel, WIĘC wstali uczniowie)",
                "translation": "(Wszedł nauczyciel, więc wstali uczniowie)",
                "options": ["فَ", "وَ", "ثُمَّ", "لَكِنْ"],
                "correct": "فَ",
                "explanation": "Poprawnie: 'فَ' (fa) = więc/a potem/i natychmiast. فَ wyraża NATYCHMIASTOWE następstwo czasowe lub przyczynowe. 'دخلَ المعلمُ فقامَ الطلابُ' = Nauczyciel wszedł i NATYCHMIAST uczniowie wstali. Porównaj: وَ (brak kolejności), ثُمَّ (opóźnienie). فَ to jeden z najczęściej używanych spójników — łączy przyczynę ze skutkiem lub opisuje szybki ciąg zdarzeń."
            },
            {
                "id": "pa_fa2",
                "question": "Różnica między فَ a ثُمَّ w zdaniu: أكلَ ____ شربَ:",
                "translation": "(ما الفرق بين فَ و ثُمَّ؟)",
                "options": ["فَ = natychmiast potem; ثُمَّ = po pewnym czasie", "Identyczne znaczenie", "فَ = dawno temu; ثُمَّ = teraz", "فَ = razem; ثُمَّ = osobno"],
                "correct": "فَ = natychmiast potem; ثُمَّ = po pewnym czasie",
                "explanation": "KLUCZOWA różnica trzech spójników czasowych: وَ = bez kolejności (mógł jeść i pić jednocześnie), فَ = natychmiast potem (zjadł i OD RAZU pił), ثُمَّ = po pewnym czasie (zjadł, a PO CHWILI pił). W polskim mamy tylko 'i' oraz 'potem/następnie'. Arabski jest PRECYZYJNIEJSZY w wyrażaniu relacji czasowych między zdaniami. To fundament narracji arabskiej."
            },
            {
                "id": "pa_fa3",
                "question": "ادرسْ فَتنجحَ — فَ tu jest:",
                "translation": "(ما نوع الفاء في ادرسْ فتنجحَ؟)",
                "options": ["فاء السببية (przyczynowa — wymaga منصوب)", "فاء العطف (spójnikowa)", "فاء الاستئنافية", "فاء الجزاء (warunkowa)"],
                "correct": "فاء السببية (przyczynowa — wymaga منصوب)",
                "explanation": "فاء السببية (fāʾ as-sababiyya) = فَ przyczynowa: 'Ucz się, ABY zdać'. Po rozkazie + فَ → czas teraźniejszy w BIERNIKU (منصوب) — bo domyślne أَنْ: ادرسْ فَ(أَنْ) تنجحَ. Reguła: فَ po rozkazie, zakazie, życzeniu, pytaniu → następny czasownik w biernik (منصوب). To odpowiada polskiemu 'żeby/aby'. Manṣūb widać po fathie: تنجحَ (nie تنجحُ)."
            },
            {
                "id": "pa_fa4",
                "question": "إنْ تدرسْ فَسَوْفَ تنجحُ — فَ tu jest:",
                "translation": "(ما نوع الفاء هنا؟)",
                "options": ["فاء الجزاء (warunkowa — w odpowiedzi warunku)", "فاء السببية (przyczynowa)", "فاء العطف (spójnikowa)", "فاء الفصيحة (wyjaśniająca)"],
                "correct": "فاء الجزاء (warunkowa — w odpowiedzi warunku)",
                "explanation": "فاء الجزاء (fāʾ al-jazāʾ) = فَ odpowiedzi warunkowej. W zdaniu warunkowym: إنْ + warunek + فَ + odpowiedź. Kiedy OBOWIĄZKOWA? Gdy odpowiedź zaczyna się od: سَوْفَ/سَـ (przyszłość), إنَّ (że), لَنْ (nie będzie), مَا (nie), zdanie nominalne, rozkaz. Bez فَ: gdy odpowiedź to prosty czas przeszły lub teraźniejszy مجزوم. To ważna reguła zdań warunkowych!"
            },
            {
                "id": "pa_fa5",
                "question": "قامَ فَصَلَّى — فَ wyraża tu:",
                "translation": "(ما معنى الفاء هنا؟)",
                "options": ["Natychmiastowe następstwo (wstał i od razu się pomodlił)", "Jednoczesność", "Opóźnienie", "Przeciwność"],
                "correct": "Natychmiastowe następstwo (wstał i od razu się pomodlił)",
                "explanation": "فَ العطف z wartością التعقيب (taʿqīb) = natychmiastowe następstwo. 'قامَ فَصَلَّى' = Wstał i OD RAZU się pomodlił. Porównaj: 'قامَ ثُمَّ صَلَّى' = Wstał, a PO CHWILI się pomodlił. 'قامَ وَصَلَّى' = Wstał i modlił się (brak info o kolejności). Arabski ma trzy stopnie: natychmiast (فَ), opóźnienie (ثُمَّ), neutralny (وَ). Polski tego nie rozróżnia gramatycznie."
            },
            {
                "id": "pa_fa6",
                "question": "لا تكذبْ فَتُعاقَبَ — فَ tu znaczy:",
                "translation": "(ما معنى الفاء في لا تكذبْ فتُعاقَبَ؟)",
                "options": ["Bo inaczej zostaniesz ukarany (فَ przyczynowa + منصوب)", "I zostaniesz ukarany (فَ spójnikowa)", "A potem zostaniesz ukarany", "Nie kłam i nie karz"],
                "correct": "Bo inaczej zostaniesz ukarany (فَ przyczynowa + منصوب)",
                "explanation": "فاء السببية po zakazie (لا تكذبْ = nie kłam): 'فَتُعاقَبَ' = bo inaczej zostaniesz ukarany. تُعاقَبَ w bierniku (منصوب — fatha na końcu, nie ḍamma). Reguła: po zakazie (لا + مجزوم) + فَ → następny czas. w BIERNIKU: لا تكذبْ فتُعاقَبَ. To INNY sens niż لا تكذبْ وَلا تُعاقَبْ (nie kłam i nie bądź karany — dwa zakazy)."
            },
            {
                "id": "pa_fa7",
                "question": "Która فَ wymaga biernika (منصوب) po sobie?",
                "translation": "(أي فاء تنصب المضارع بعدها؟)",
                "options": ["فاء السببية (po rozkazie/zakazie/życzeniu)", "فاء العطف (spójnikowa)", "فاء الجزاء (warunkowa)", "فاء الفصيحة (wyjaśniająca)"],
                "correct": "فاء السببية (po rozkazie/zakazie/życzeniu)",
                "explanation": "Tylko فاء السببية powoduje بiernik (منصوب) czasownika teraźniejszego — bo przed nim jest domyślne أَنْ (المصدرية المضمرة). Warunki: فَ musi następować po: 1) rozkazie (ادرسْ فتنجحَ), 2) zakazie (لا تكذبْ فتُعاقَبَ), 3) życzeniu (لَيْتَكَ تسافرُ فتستريحَ), 4) pytaniu (هل تزورُنا فنُكرمَكَ؟). Bez tych kontekstów = فَ العطف (brak biernika)."
            },
            {
                "id": "pa_fa8",
                "question": "W 'عرفَ الحقيقةَ فَغَضِبَ' — فَ wyraża:",
                "translation": "(ما معنى الفاء هنا؟)",
                "options": ["Następstwo + przyczynowość (poznał prawdę, więc się zezłościł)", "Jednoczesność", "Opóźnienie", "Kontrast"],
                "correct": "Następstwo + przyczynowość (poznał prawdę, więc się zezłościł)",
                "explanation": "فَ العطف może wyrażać zarówno NASTĘPSTWO (najpierw poznanie, potem złość) jak i PRZYCZYNOWOŚĆ (poznanie SPOWODOWAŁO złość). 'عرفَ الحقيقةَ فَغَضِبَ' = Poznał prawdę, WIĘC się zezłościł. W polskim: 'więc/toteż/dlatego'. To kolejna różnica: وَ nigdy nie jest przyczynowe, فَ może być, ثُمَّ jest tylko czasowe. فَ jest najnowocześniejsza znaczeniowo."
            },
            {
                "id": "pa_waw_fa9",
                "question": "فَ pisze się:",
                "translation": "(كيف تُكتب الفاء؟)",
                "options": ["Łącznie z następnym wyrazem (فَذهبَ)", "Oddzielnie (فَ ذهبَ)", "Z łącznikiem (فَ-ذهبَ)", "Zależy od kontekstu"],
                "correct": "Łącznie z następnym wyrazem (فَذهبَ)",
                "explanation": "فَ pisze się ŁĄCZNIE z następnym wyrazem — tak samo jak وَ. Np.: فَذهبَ (i poszedł), فَقالَ (więc powiedział), فَإنَّ (bo zaprawdę). W odróżnieniu od ثُمَّ, która jest ODDZIELNYM wyrazem: ثُمَّ ذهبَ. فَ i وَ to jednosylabowe partykuły = piszemy łącznie. ثُمَّ i لَكِنْ to pełne wyrazy = piszemy oddzielnie. Reguła ortograficzna, nie gramatyczna."
            },
            {
                "id": "pa_fa10",
                "question": "أمَّا... فَ... — ta konstrukcja znaczy:",
                "translation": "(ما معنى تركيب أمّا... فَـ...؟)",
                "options": ["Co do... to... (topikalizacja)", "Jeśli... to...", "Ani... ani...", "Albo... albo..."],
                "correct": "Co do... to... (topikalizacja)",
                "explanation": "أمَّا... فَـ... (ammā... fa...) = Co do..., to... — konstrukcja topikalizacji. 'أمَّا محمدٌ فَذكيٌّ' = Co do Muhammada, to (jest) mądry. Reguła: po أمَّا → temat, OBOWIĄZKOWE فَ, potem orzeczenie. فَ jest tu OBOWIĄZKOWA — nie można powiedzieć *أمَّا محمد ذكي. To odpowiada polskiemu: 'Jeśli chodzi o... to...', 'Co się tyczy... to...'. Bardzo częste w MSA i Koranie."
            },
            {
                "id": "pa_fa11",
                "question": "W Koranie: 'فَلْيَعْبُدُوا ربَّ هذا البيت' — فَ jest:",
                "translation": "(ما نوع الفاء في فليعبدوا؟)",
                "options": ["فاء الفصيحة (wyjaśniająca — wprowadza wniosek)", "فاء العطف", "فاء السببية", "فاء الجزاء"],
                "correct": "فاء الفصيحة (wyjaśniająca — wprowadza wniosek)",
                "explanation": "فاء الفصيحة (fāʾ al-faṣīḥa) = فَ wyjaśniająca/eliptyczna — wprowadza WNIOSEK z domyślnego warunku. (Skoro Bóg obdarzył was tymi łaskami) فَلْيَعْبُدُوا = NIECH wielbią Pana tego domu. Domyślne: 'Jeżeli wiedzą o tych łaskach, TO niech wielbią'. فَ zastępuje cały warunek. To zaawansowana retoryka koraniczna — فَ pełni funkcję skrótu logicznego."
            },
            {
                "id": "pa_fa12",
                "question": "لا تأكلْ فتمرضَ vs لا تأكلْ فتمرضْ — różnica:",
                "translation": "(ما الفرق بين فتمرَضَ وفتمرضْ؟)",
                "options": ["فتمرضَ (biernik) = żebyś nie zachorował; فتمرضْ (jussive) = i nie choruj", "Identyczne", "فتمرضَ = przeszły; فتمرضْ = teraźniejszy", "فتمرضَ = pytanie; فتمرضْ = odpowiedź"],
                "correct": "فتمرضَ (biernik) = żebyś nie zachorował; فتمرضْ (jussive) = i nie choruj",
                "explanation": "SUBTELNA, ale fundamentalna różnica! لا تأكلْ فَتمرضَ (منصوب) = Nie jedz, BO INACZEJ zachorujesz (فَ przyczynowa — skutek jedzenia). لا تأكلْ فَتمرضْ (مجزوم) = Nie jedz I nie choruj (dwa niezależne zakazy = فَ spójnikowa). Jedna samogłoska (-َ vs -ْ) zmienia CAŁY sens! To jeden z najsłynniejszych przykładów w arabskiej gramatyce."
            },
            {
                "id": "pa_fa13",
                "question": "Po فَ العطف (spójnikowej) wyraz jest w:",
                "translation": "(ما إعراب المعطوف بعد فاء العطف؟)",
                "options": ["Tym samym przypadku co przed فَ", "Zawsze w bierniku", "Zawsze w mianowniku", "Zawsze w dopełniaczu"],
                "correct": "Tym samym przypadku co przed فَ",
                "explanation": "Tak samo jak z واو: wyraz po فَ العطف = ten sam przypadek co wyraz przed فَ. جاءَ محمدٌ فعليٌّ (mianownik → mianownik). رأيتُ محمداً فعلياً (biernik → biernik). مررتُ بمحمدٍ فعليٍّ (dopełniacz → dopełniacz). Ta reguła dotyczy WSZYSTKICH spójników współrzędnych: وَ, فَ, ثُمَّ, أَوْ, أَمْ, بَلْ, لَا, لَكِنْ."
            },
            {
                "id": "pa_fa14",
                "question": "فاء الجزاء jest OBOWIĄZKOWA, gdy odpowiedź warunku zaczyna się od:",
                "translation": "(متى تجب فاء الجزاء؟)",
                "options": ["سَوْفَ/سَـ, إنَّ, مَا, لَنْ, rozkaz, zdanie nominalne", "Zawsze po إنْ", "Nigdy nie jest obowiązkowa", "Tylko po لَوْ"],
                "correct": "سَوْفَ/سَـ, إنَّ, مَا, لَنْ, rozkaz, zdanie nominalne",
                "explanation": "فاء الجزاء jest OBOWIĄZKOWA, gdy odpowiedź warunkowa nie może być مجزوم: 1) سَوْفَ/سَـ: إنْ تدرسْ فَسوف تنجحُ; 2) zdanie nominalne: إنْ تدرسْ فَأنت ناجحٌ; 3) rozkaz: إنْ جاء فَقُلْ له; 4) إنَّ: إنْ فعلتَ فَإنَّك مُحِقّ; 5) negacja z مَا/لَنْ/لَيْسَ. Bez فَ: gdy odpowiedź to prosty czas. przeszły lub teraźniejszy مجزوم."
            },
            {
                "id": "pa_fa15",
                "question": "Ile głównych typów فَ wyróżnia gramatyka arabska?",
                "translation": "(كم نوعاً رئيسياً للفاء؟)",
                "options": ["5 (عطف, سببية, جزاء, فصيحة, استئنافية)", "1 — zawsze spójnik", "3 — spójnik, przyczyna, warunek", "10 — jak واو"],
                "correct": "5 (عطف, سببية, جزاء, فصيحة, استئنافية)",
                "explanation": "5 głównych typów فَ: 1) فَ العطف (spójnikowa — następstwo), 2) فَ السببية (przyczynowa — po rozkazie/zakazie → biernik), 3) فَ الجزاء (warunkowa — w odpowiedzi warunku), 4) فَ الفصيحة (wyjaśniająca — domyślny warunek), 5) فَ الاستئنافية (rozpoczynająca nowe zdanie). Każda فَ ma inne reguły składniowe. W polskim: 'więc/i/to/a' — jedno słowo, wiele arabskich odpowiedników."
            }
        ]
    },
    {
        "key": "thumma_conjunction",
        "name": "Spójnik ثُمَّ (potem/następnie)",
        "description": "حرف العطف ثُمَّ والتراخي في الزمن",
        "iconName": "clock.arrow.circlepath",
        "color": "#22d3ee",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_thm1",
                "question": "أكلَ _____ شربَ (Zjadł, a POTEM wypił — z opóźnieniem)",
                "translation": "(Zjadł, a po pewnym czasie wypił)",
                "options": ["ثُمَّ", "فَ", "وَ", "أَوْ"],
                "correct": "ثُمَّ",
                "explanation": "Poprawnie: 'ثُمَّ' (thumma) = potem/następnie (z opóźnieniem). KLUCZOWE: ثُمَّ wyraża التراخي (tarākhī) = opóźnienie/zwłokę między dwoma zdarzeniami. 'أكلَ ثُمَّ شربَ' = Zjadł, a PO PEWNYM CZASIE wypił. Porównaj: فَ (natychmiast potem), وَ (bez kolejności). W polskim: 'potem/następnie/z kolei'. ثُمَّ pisze się ODDZIELNIE (osobny wyraz, nie klityka jak فَ i وَ)."
            },
            {
                "id": "pa_thm2",
                "question": "خلقَ اللهُ الأرضَ ثُمَّ خلقَ السماءَ — ثُمَّ tu wyraża:",
                "translation": "(ما معنى ثُمَّ هنا؟)",
                "options": ["Następstwo z opóźnieniem (najpierw ziemię, potem niebo)", "Jednoczesność", "Przyczynowość", "Kontrast"],
                "correct": "Następstwo z opóźnieniem (najpierw ziemię, potem niebo)",
                "explanation": "ثُمَّ wyraża kolejność z ODSTĘPEM CZASOWYM: 'Bóg stworzył ziemię, A POTEM stworzył niebo'. Gdyby użyto فَ: natychmiast potem. Gdyby وَ: brak info o kolejności (mogło być jednocześnie). ثُمَّ jest bardzo częste w narracjach koranicznych opisujących stworzenie — podkreśla etapowość procesu. W polskim: 'następnie, potem, w dalszej kolejności'."
            },
            {
                "id": "pa_thm3",
                "question": "ثُمَّ pisze się:",
                "translation": "(كيف تُكتب ثُمَّ؟)",
                "options": ["Oddzielnie (ثُمَّ ذهبَ)", "Łącznie (ثُمَّذهبَ)", "Z łącznikiem", "Zależy od kontekstu"],
                "correct": "Oddzielnie (ثُمَّ ذهبَ)",
                "explanation": "ثُمَّ pisze się ODDZIELNIE — to pełny wyraz, nie klityka. Porównaj: وَذهبَ (łącznie), فَذهبَ (łącznie), ثُمَّ ذهبَ (oddzielnie). Dlaczego? وَ i فَ to jednolitrowe partykuły (حروف), ثُمَّ to dwuliterowy wyraz z szaddą. UWAGA: nie mylić ثُمَّ (thumma, z szaddą = potem) z ثَمَّ (thamma, bez szaddy = tam). Jedna szadda zmienia znaczenie!"
            },
            {
                "id": "pa_thm4",
                "question": "Różnica: ثُمَّ (thumma) vs ثَمَّ (thamma):",
                "translation": "(ما الفرق بين ثُمَّ وثَمَّ؟)",
                "options": ["ثُمَّ = potem (spójnik); ثَمَّ = tam (przysłówek)", "Identyczne", "ثُمَّ = tu; ثَمَّ = tam", "ثُمَّ = teraz; ثَمَّ = potem"],
                "correct": "ثُمَّ = potem (spójnik); ثَمَّ = tam (przysłówek)",
                "explanation": "WAŻNE rozróżnienie! ثُمَّ (thumma, ḍamma na ث) = potem/następnie — SPÓJNIK WSPÓŁRZĘDNY. ثَمَّ (thamma, fatha na ث) = tam — PRZYSŁÓWEK MIEJSCA. 'ذهبتُ إلى هناك ثَمَّ' = Poszedłem tam. 'ذهبتُ ثُمَّ رجعتُ' = Poszedłem, potem wróciłem. Bez taszkilowania (samogłoskowania) kontekst rozstrzyga. W Koranie: وَللهِ المشرقُ والمغربُ فأينما تُوَلُّوا فَثَمَّ وجهُ الله."
            },
            {
                "id": "pa_thm5",
                "question": "Po ثُمَّ wyraz dołączony jest w:",
                "translation": "(ما إعراب المعطوف بعد ثُمَّ؟)",
                "options": ["Tym samym przypadku co przed ثُمَّ", "Zawsze w bierniku", "Zawsze w mianowniku", "Zawsze w dopełniaczu"],
                "correct": "Tym samym przypadku co przed ثُمَّ",
                "explanation": "Tak jak وَ i فَ: wyraz po ثُمَّ = ten sam przypadek co wyraz przed ثُمَّ. To reguła عطف: spójnik współrzędny zachowuje przypadek. 'جاء محمدٌ ثُمَّ عليٌّ' (mianownik + mianownik). 'رأيتُ محمداً ثُمَّ علياً' (biernik + biernik). 'مررتُ بمحمدٍ ثُمَّ بعليٍّ' (dopełniacz + dopełniacz). Wszystkie 8 spójników współrzędnych działają tak samo."
            },
            {
                "id": "pa_thm6",
                "question": "تعلَّمَ العربيةَ ثُمَّ سافرَ إلى مصر — relacja czasowa:",
                "translation": "(ما العلاقة الزمنية؟)",
                "options": ["Najpierw nauczył się, potem (po dłuższym czasie) pojechał", "Jednocześnie uczył się i jechał", "Natychmiast po nauce pojechał", "Jechał, potem się uczył"],
                "correct": "Najpierw nauczył się, potem (po dłuższym czasie) pojechał",
                "explanation": "ثُمَّ zawsze wskazuje: 1) KOLEJNOŚĆ (najpierw A, potem B), 2) OPÓŹNIENIE (odstęp czasowy między A i B). Wielkość opóźnienia zależy od kontekstu: tu 'nauczył się arabskiego ثم pojechał do Egiptu' — mogło minąć tygodnie, miesiące, lata. Gdyby فَ: 'nauczył się i OD RAZU pojechał' — nierealistyczne. Wybór spójnika wpływa na interpretację narracji."
            },
            {
                "id": "pa_thm7",
                "question": "W narracji koranicznej: خَلَقَكُم ثُمَّ رَزَقَكُم ثُمَّ يُمِيتُكُم ثُمَّ يُحْيِيكُم — ile etapów?",
                "translation": "(كم مرحلة في هذه الآية؟)",
                "options": ["4 etapy (stworzył → dał utrzymanie → uśmierci → ożywi)", "2 etapy", "1 etap", "3 etapy"],
                "correct": "4 etapy (stworzył → dał utrzymanie → uśmierci → ożywi)",
                "explanation": "4 etapy oddzielone ثُمَّ — każdy z opóźnieniem: 1) خَلَقَكُم (stworzył was), 2) ثُمَّ رَزَقَكُم (potem dał wam utrzymanie), 3) ثُمَّ يُمِيتُكُم (potem uśmierci was), 4) ثُمَّ يُحْيِيكُم (potem ożywi was). ثُمَّ podkreśla, że każdy etap jest ODDZIELNY i oddalony w czasie. Gdyby وَ: wszystko jednocześnie (bez sensu). Gdyby فَ: natychmiast po sobie."
            },
            {
                "id": "pa_thm8",
                "question": "Czy ثُمَّ może łączyć zdania nominalne?",
                "translation": "(هل يمكن أن تعطف ثُمَّ جملة اسمية؟)",
                "options": ["Tak — łączy zarówno zdania czasownikowe jak nominalne", "Nie — tylko czasownikowe", "Nie — tylko rzeczowniki", "Tylko w Koranie"],
                "correct": "Tak — łączy zarówno zdania czasownikowe jak nominalne",
                "explanation": "ثُمَّ jest wszechstronna: łączy: 1) Rzeczowniki: جاء محمدٌ ثُمَّ عليٌّ, 2) Zdania czasownikowe: أكلَ ثُمَّ شربَ, 3) Zdania nominalne: الجوُّ حارٌّ ثُمَّ البردُ شديدٌ (pogoda gorąca, potem mróz silny). W zdaniach nominalnych ثُمَّ sugeruje zmianę stanu z opóźnieniem. To różni ثُمَّ od partykuł warunkowych, które mają ograniczenia co do typu zdań."
            },
            {
                "id": "pa_thm9",
                "question": "Arabski ma 8 spójników współrzędnych (حروف العطف). Który NIE jest jednym z nich?",
                "translation": "(أي حرف ليس من حروف العطف؟)",
                "options": ["إنَّ (zaprawdę)", "وَ (i)", "فَ (więc)", "ثُمَّ (potem)"],
                "correct": "إنَّ (zaprawdę)",
                "explanation": "إنَّ NIE jest spójnikiem współrzędnym — to partykuła emfatyczna (حرف توكيد ونصب). 8 spójników współrzędnych: 1) وَ (i), 2) فَ (więc/potem), 3) ثُمَّ (potem z opóźnieniem), 4) أَوْ (lub), 5) أَمْ (czy — w pytaniach), 6) بَلْ (lecz/a raczej), 7) لَا (nie — w znaczeniu wyłączania), 8) لَكِنْ (ale). Każdy ma swoją funkcję i reguły gramatyczne."
            },
            {
                "id": "pa_thm10",
                "question": "W retoryce (بلاغة), ثُمَّ w 'أعجبني القصرُ ثُمَّ حديقتُه' wyraża:",
                "translation": "(ما الغرض البلاغي لثُمَّ هنا؟)",
                "options": ["Stopniowanie — ogród zaskoczył JESZCZE BARDZIEJ (التراخي الرتبي)", "Chronologię", "Jednoczesność", "Kontrast"],
                "correct": "Stopniowanie — ogród zaskoczył JESZCZE BARDZIEJ (التراخي الرتبي)",
                "explanation": "W retoryce ثُمَّ może wyrażać التراخي الرتبي (tarākhī rutbī) = stopniowanie RANGI, nie czasu! 'Zachwycił mnie pałac, a JESZCZE BARDZIEJ jego ogród'. ثُمَّ tu nie znaczy 'potem', lecz 'a co więcej'. Ogród jest WYŻEJ na skali zachwytu. To zaawansowane użycie retoryczne, częste w poezji i literaturze arabskiej. W polskim: 'i co więcej', 'a zwłaszcza', 'tym bardziej'."
            },
            {
                "id": "pa_thm11",
                "question": "Uporządkuj od najszybszego następstwa: وَ, فَ, ثُمَّ",
                "translation": "(رتّب من الأسرع إلى الأبطأ)",
                "options": ["فَ (natychmiast) → وَ (neutralna) → ثُمَّ (z opóźnieniem)", "ثُمَّ → وَ → فَ", "وَ → فَ → ثُمَّ", "Wszystkie identyczne"],
                "correct": "فَ (natychmiast) → وَ (neutralna) → ثُمَّ (z opóźnieniem)",
                "explanation": "Oś czasu spójników: فَ = NATYCHMIAST potem (التعقيب), وَ = NEUTRALNA (مطلق الجمع — brak info o kolejności), ثُمَّ = PO PEWNYM CZASIE (التراخي). Ale واو nie jest 'pomiędzy' — jest POZA skalą czasową (nie mówi nic o kolejności). Więc raczej: فَ (sekwencyjne, szybkie), ثُمَّ (sekwencyjne, wolne), وَ (asekwencyjne). To UNIKALNA cecha arabskiego — gramatyczne zakodowanie relacji czasowych."
            },
            {
                "id": "pa_thm12",
                "question": "سافرَ إلى باريس ثُمَّ إلى لندن ثُمَّ إلى القاهرة — ile podróży?",
                "translation": "(كم رحلة في هذه الجملة؟)",
                "options": ["3 podróże w kolejności z przerwami", "1 podróż", "2 podróże", "Nie wiadomo"],
                "correct": "3 podróże w kolejności z przerwami",
                "explanation": "3 oddzielne podróże z przerwami między nimi: 1) Paryż, (przerwa), 2) Londyn, (przerwa), 3) Kair. ثُمَّ podkreśla, że każda podróż była oddzielnym etapem z przerwą. Gdyby وَ: mógł odwiedzić w dowolnej kolejności. Gdyby فَ: natychmiast po sobie (np. przesiadki). ثُمَّ sugeruje: pobyt w każdym mieście, potem przejazd do następnego."
            },
            {
                "id": "pa_thm13",
                "question": "W 'هو كريمٌ ثُمَّ شجاعٌ' — ثُمَّ łączy:",
                "translation": "(ثُمَّ تعطف ماذا هنا؟)",
                "options": ["Dwa orzeczniki (خبر) — stopniowanie cech", "Dwa podmioty", "Dwa zdania", "Dwa dopełnienia"],
                "correct": "Dwa orzeczniki (خبر) — stopniowanie cech",
                "explanation": "ثُمَّ łączy dwa orzeczniki (خبر): كريمٌ (hojny) + شجاعٌ (odważny). Tu ثُمَّ w znaczeniu retorycznym (التراخي الرتبي): 'On jest hojny, a CO WIĘCEJ odważny'. Odwaga jest wyżej na skali cnót. Oba w mianowniku jako خبر المبتدأ. Gdyby واو: 'hojny i odważny' (równoważne). ثُمَّ dodaje gradację — druga cecha jest ważniejsza/zaskaczająca."
            },
            {
                "id": "pa_thm14",
                "question": "Który spójnik jest poprawny? 'دَرَسَ _____ نجحَ' (Uczył się, BEZPOŚREDNIo zdał)",
                "translation": "(أي حرف عطف للترتيب مع التعقيب؟)",
                "options": ["فَ (natychmiast potem)", "ثُمَّ (po pewnym czasie)", "وَ (bez kolejności)", "لَكِنْ (ale)"],
                "correct": "فَ (natychmiast potem)",
                "explanation": "Dla NATYCHMIASTOWEGO następstwa: فَ. 'دَرَسَ فَنجحَ' = Uczył się i OD RAZU zdał. ثُمَّ byłoby: uczył się, a PO DŁUŻSZYM CZASIE zdał (np. po miesiącach) — też sensowne, ale inne. Kontekst decyduje: egzamin następnego dnia → فَ; egzamin za pół roku → ثُمَّ. Pytanie wymaga BEZPOŚREDNIEGO następstwa, więc فَ."
            },
            {
                "id": "pa_thm15",
                "question": "Które zdanie używa ثُمَّ NIEPOPRAWNIE?",
                "translation": "(أي جملة تستخدم ثُمَّ خطأً؟)",
                "options": ["ضَحِكَ ثُمَّ بَكَى في نفس اللحظة (śmiał się i płakał w tej samej chwili)", "درسَ ثُمَّ نجحَ (uczył się, potem zdał)", "سافرَ ثُمَّ عادَ (pojechał, potem wrócił)", "أكلَ ثُمَّ نامَ (zjadł, potem zasnął)"],
                "correct": "ضَحِكَ ثُمَّ بَكَى في نفس اللحظة (śmiał się i płakał w tej samej chwili)",
                "explanation": "NIEPOPRAWNE: 'في نفس اللحظة' (w tej samej chwili) zaprzecza ثُمَّ, która wymaga OPÓŹNIENIA! Jeśli coś dzieje się jednocześnie — użyj وَ: 'ضحكَ وبكى في نفس اللحظة'. ثُمَّ WYKLUCZA jednoczesność. Gdyby natychmiast potem — فَ: 'ضحكَ فبكى'. ثُمَّ = po pewnym czasie, NIGDY jednocześnie. To błąd logiczny, nie tylko gramatyczny."
            }
        ]
    },
    {
        "key": "negation_advanced",
        "name": "Negacja zaawansowana (النفي المتقدم)",
        "description": "أدوات النفي المتقدمة وأحكامها",
        "iconName": "xmark.circle",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {
                "id": "pa_nega1",
                "question": "_____ يكتبِ الدرسَ (On NIE napisał lekcji) — negacja przeszłego z لَمْ",
                "translation": "(On nie napisał lekcji)",
                "options": ["لَمْ", "لَا", "مَا", "لَنْ"],
                "correct": "لَمْ",
                "explanation": "Poprawnie: 'لَمْ يكتبْ' (lam yaktub) = nie napisał. لَمْ + czas TERAŹNIEJSZY w مجزوم = negacja PRZESZŁOŚCI. To kluczowe: لَمْ neguje przeszłość, ale używa formy teraźniejszej! Porównaj: مَا كتبَ (też 'nie napisał', ale z czas. przeszłym). لَمْ jest bardziej literacka i precyzyjna. Reguła: لَمْ + مضارع مجزوم = negacja فعل ماضٍ."
            },
            {
                "id": "pa_nega2",
                "question": "_____ يكتبَ الدرسَ حتى الآن (On JESZCZE nie napisał lekcji)",
                "translation": "(On jeszcze nie napisał lekcji — do teraz)",
                "options": ["لَمَّا", "لَمْ", "لَا", "لَنْ"],
                "correct": "لَمَّا",
                "explanation": "Poprawnie: 'لَمَّا يكتبْ' (lammā yaktub) = jeszcze nie napisał (ale OCZEKUJE SIĘ, że napisze). لَمَّا = لَمْ + oczekiwanie spełnienia w przyszłości. Różnica: لَمْ يكتبْ (nie napisał — fakt), لَمَّا يكتبْ (jeszcze nie napisał — ale pewnie napisze). W polskim: 'nie napisał' vs 'jeszcze nie napisał'. Arabski koduje tę różnicę GRAMATYCZNIE, nie leksykalnie."
            },
            {
                "id": "pa_nega3",
                "question": "_____ أذهبَ غداً (NIE pójdę jutro) — negacja przyszłości",
                "translation": "(Nie pójdę jutro)",
                "options": ["لَنْ", "لَمْ", "لَا", "مَا"],
                "correct": "لَنْ",
                "explanation": "Poprawnie: 'لَنْ أذهبَ' (lan adhhaba) = nie pójdę. لَنْ + czas teraźniejszy w BIERNIKU (منصوب) = negacja PRZYSZŁOŚCI. لَنْ jest STANOWCZA: 'na pewno nie'. Porównaj: لَا أذهبُ (nie chodzę — teraźniejszość), لَمْ أذهبْ (nie poszedłem — przeszłość), لَنْ أذهبَ (nie pójdę — przyszłość). Trzy negacje = trzy czasy. Każda wymaga innego trybu czasownika!"
            },
            {
                "id": "pa_nega4",
                "question": "لَيْسَ w 'لَيْسَ الجوُّ بارداً' neguje:",
                "translation": "(ما تنفيه لَيْسَ هنا؟)",
                "options": ["Stan obecny (Pogoda NIE jest zimna)", "Przeszłość", "Przyszłość", "Rozkaz"],
                "correct": "Stan obecny (Pogoda NIE jest zimna)",
                "explanation": "لَيْسَ (laysa) = nie jest — negacja STANU OBECNEGO w zdaniach nominalnych. 'لَيْسَ الجوُّ بارداً' = Pogoda nie jest zimna. لَيْسَ zachowuje się jak كَانَ: podmiot w mianowniku (الجوُّ), orzecznik w bierniku (بارداً). UWAGA: لَيْسَ to formalnie CZASOWNIK (فعل ماض جامد = zamrożony czas przeszły), nie partykuła — choć funkcjonuje jak negacja. Nie ma czasu teraźniejszego ani rozkaźnika."
            },
            {
                "id": "pa_nega5",
                "question": "مَا w 'مَا كتبَ الدرسَ' neguje:",
                "translation": "(ما تنفيه مَا هنا؟)",
                "options": ["Przeszłość (NIE napisał lekcji)", "Teraźniejszość", "Przyszłość", "Stan"],
                "correct": "Przeszłość (NIE napisał lekcji)",
                "explanation": "مَا + czas przeszły = negacja przeszłości. 'مَا كتبَ الدرسَ' = Nie napisał lekcji. Porównaj z لَمْ يكتبْ (też przeszłość). Różnice: 1) مَا + przeszły (bez zmiany trybu), لَمْ + teraźniejszy مجزوم; 2) مَا bardziej potoczna, لَمْ bardziej literacka; 3) مَا może negować też teraźniejszość (مَا يكتبُ = nie pisze — rzadsze). W MSA obie akceptowalne."
            },
            {
                "id": "pa_nega6",
                "question": "إنْ w 'إنْ هذا إلّا سِحرٌ' jest:",
                "translation": "(ما نوع إنْ هنا؟)",
                "options": ["إنْ النافية (negująca = NIE... to tylko)", "إنْ الشرطية (warunkowa)", "إنَّ (emfatyczna)", "إنْ المخففة"],
                "correct": "إنْ النافية (negująca = NIE... to tylko)",
                "explanation": "إنْ النافية = إنْ negująca: 'إنْ هذا إلّا سِحرٌ' = To NIE jest NIC INNEGO niż magia (= To jest tylko magia). إنْ + إلّا = ograniczenie (حصر) = 'nie... oprócz / to tylko'. Nie mylić z إنْ الشرطية (warunkowa: إنْ تدرسْ تنجحْ) ani إنَّ (z szaddą = zaprawdę). Kontekst rozstrzyga: إنْ + zdanie nominalne + إلّا = negacja ograniczająca."
            },
            {
                "id": "pa_nega7",
                "question": "لَا w 'لَا رجلَ في البيت' jest:",
                "translation": "(ما نوع لا هنا؟)",
                "options": ["لَا النافية للجنس (negacja rodzajowa — żaden mężczyzna)", "لَا الناهية (zakazująca)", "لَا العاطفة (spójnikowa)", "لَا النافية العادية (zwykła negacja)"],
                "correct": "لَا النافية للجنس (negacja rodzajowa — żaden mężczyzna)",
                "explanation": "لَا النافية للجنس (lā an-nāfiya li-l-jins) = negacja RODZAJOWA/KATEGORYCZNA: 'ŻADEN mężczyzna w domu' (nie tylko konkretny). Reguła: po لا النافية للجنس → rzeczownik w biernik BEZ tanwinu: رجلَ (nie رجلاً!). Działa jak إنَّ: podmiot w bierniku, orzecznik w mianowniku. Porównaj: لا رجلَ (żaden mężczyzna — kategoryczne) vs لا يوجد رجلٌ (nie ma mężczyzny — konkretne)."
            },
            {
                "id": "pa_nega8",
                "question": "Zestawienie: لَا تكتبْ vs لَا يكتبُ — różnica:",
                "translation": "(ما الفرق بين لا تكتبْ و لا يكتبُ؟)",
                "options": ["لا تكتبْ = NIE PISZ (zakaz); لا يكتبُ = nie pisze (negacja)", "Identyczne", "لا تكتبْ = teraźniejszy; لا يكتبُ = przeszły", "لا تكتبْ = pytanie; لا يكتبُ = odpowiedź"],
                "correct": "لا تكتبْ = NIE PISZ (zakaz); لا يكتبُ = nie pisze (negacja)",
                "explanation": "KLUCZOWA różnica: لَا الناهية (zakazująca) + 2. os. مجزوم: لا تكتبْ (lā taktub!) = Nie pisz! (ZAKAZ). لَا النافية (negująca) + 3. os. مرفوع: لا يكتبُ (lā yaktubu) = On nie pisze (NEGACJA stanu). Rozpoznanie: 1) Osoba: 2. os. = zwykle zakaz, 3. os. = negacja; 2) Tryb: مجزوم (sukun) = zakaz, مرفوع (ḍamma) = negacja. Jedna partykuła — dwie funkcje!"
            },
            {
                "id": "pa_nega9",
                "question": "لَيْسَتْ في 'لَيْسَتْ جميلةً' odnosi się do:",
                "translation": "(ما مرجع لَيْسَتْ؟)",
                "options": ["Ona (هي) — nie jest piękna", "On (هو)", "Wy (أنتم)", "My (نحن)"],
                "correct": "Ona (هي) — nie jest piękna",
                "explanation": "لَيْسَتْ (laysat) = nie jest (r. żeński) — tاء المربوطة wskazuje 3. os. l. poj. r. ż. Odmiana لَيْسَ: لَيْسَ (on), لَيْسَتْ (ona), لَسْتُ (ja), لَسْتَ (ty m.), لَسْتِ (ty ż.), لَسْنَا (my), لَيْسُوا (oni), لَسْنَ (one). Jak كَانَ — to czasownik, więc się odmienia przez osoby. 'Nie jest piękna': لَيْسَتْ + جميلةً (biernik jako خبر لَيْسَ)."
            },
            {
                "id": "pa_nega10",
                "question": "غَيْر w 'هذا غيرُ صحيحٍ' znaczy:",
                "translation": "(ما معنى غير هنا؟)",
                "options": ["Nie-/in- (to jest NIEpoprawne)", "Bardzo", "Zawsze", "Także"],
                "correct": "Nie-/in- (to jest NIEpoprawne)",
                "explanation": "غَيْر (ghayr) = nie/inny niż/oprócz — negacja IMIENNA (nie partykuła, lecz rzeczownik). 'غَيْرُ صحيحٍ' = niepoprawny (dosłownie: inny niż poprawny). غَيْر + dopełniacz (إضافة): غَيْرُ ممكنٍ (niemożliwy), غَيْرُ معقولٍ (niedorzeczny). W polskim: przedrostek 'nie-'. غَيْر jest elastyczny: przed przymiotnikami, rzeczownikami, imiesłowami. To IMIENNA forma negacji — odmienia się przez przypadki."
            },
            {
                "id": "pa_nega11",
                "question": "Która negacja wymaga BIERNIKA (منصوب) po sobie?",
                "translation": "(أي نفي ينصب ما بعده؟)",
                "options": ["لَنْ (negacja przyszłości)", "لَمْ (negacja przeszłości)", "مَا (negacja przeszłości)", "لَا النافية العادية"],
                "correct": "لَنْ (negacja przyszłości)",
                "explanation": "لَنْ + مضارع منصوب (biernik): لَنْ أذهبَ (nie pójdę). Porównaj: لَمْ + مجزوم (jussive): لَمْ أذهبْ. لَا الناهية + مجزوم: لا تذهبْ. مَا + bez zmiany trybu. Zestawienie: لَنْ → منصوب (fatha), لَمْ → مجزوم (sukun), لَا الناهية → مجزوم (sukun), مَا/لَا النافية → بدون تغيير (bez zmiany). Każda negacja ma swój tryb!"
            },
            {
                "id": "pa_nega12",
                "question": "مَا w dialekcie egipskim: 'ما بيكتبش' — 'ش' to:",
                "translation": "(ما وظيفة ش في العامية المصرية؟)",
                "options": ["Wzmocnienie negacji (circumfix: ما...ش)", "Pytanie", "Czas przyszły", "Strona bierna"],
                "correct": "Wzmocnienie negacji (circumfix: ما...ش)",
                "explanation": "W dialekcie egipskim negacja tworzy CIRCUMFIX (obejmkę): مَا + czasownik + ش (= شَيْء = coś/nic). 'ما بيكتبش' = nie pisze. ش pochodzi od شَيْء (shayʾ = coś) — jak francuskie 'ne...pas' (pas < łac. passus = krok). W MSA: لا يكتبُ. W egipskim: ما بيكتبش. To ważne przy nauce dialektów — system negacji jest ZUPEŁNIE inny niż w MSA!"
            },
            {
                "id": "pa_nega13",
                "question": "بَلْ w 'ليسَ كسولاً بَلْ مجتهداً' znaczy:",
                "translation": "(ما معنى بَلْ هنا؟)",
                "options": ["Lecz/a raczej (nie leniwy, LECZ pilny)", "I (nie leniwy i pilny)", "Albo (leniwy albo pilny)", "Potem (nie leniwy, potem pilny)"],
                "correct": "Lecz/a raczej (nie leniwy, LECZ pilny)",
                "explanation": "بَلْ (bal) = lecz/a raczej/wręcz przeciwnie — SPÓJNIK KOREKCYJNY. Po negacji: بَلْ koryguje i podaje PRAWDZIWĄ informację. 'ليسَ كسولاً بَلْ مجتهداً' = Nie jest leniwy, LECZ pilny. بَلْ jest jednym z 8 spójników współrzędnych. Reguła: po negacji + بَلْ = 'nie X, lecz Y'. Po twierdzeniu + بَلْ = 'nie X, a raczej Y' (korekta). W polskim: 'lecz/ale raczej/wręcz'."
            },
            {
                "id": "pa_nega14",
                "question": "Podwójna negacja w arabskim: لَمْ يَأْتِ أحدٌ znaczy:",
                "translation": "(ما معنى لم يأتِ أحد؟)",
                "options": ["NIKT nie przyszedł (pojedyncza negacja)", "Ktoś nie przyszedł", "Wszyscy przyszli", "Ktoś przyszedł"],
                "correct": "NIKT nie przyszedł (pojedyncza negacja)",
                "explanation": "W arabskim: لَمْ + أحد = NIKT (nie podwójna negacja jak 'nie przyszedł nikt'). أحد po negacji = nikt (w twierdzeniu: ktoś). Podobne: لا شيءَ = nic, لا أحدَ = nikt, لم... قطّ = nigdy. Arabski NIE ma podwójnej negacji dającej twierdzenie (jak ang. 'I don't know nothing' = I know something). Negacja + zaimek nieokreślony = negacja totalna."
            },
            {
                "id": "pa_nega15",
                "question": "Uporządkuj negacje wg czasu: przeszły → teraźniejszy → przyszły:",
                "translation": "(رتّب أدوات النفي حسب الزمن)",
                "options": ["لَمْ/مَا → لَا/لَيْسَ → لَنْ", "لَنْ → لَا → لَمْ", "لَا → لَمْ → لَنْ", "مَا → لَنْ → لَمْ"],
                "correct": "لَمْ/مَا → لَا/لَيْسَ → لَنْ",
                "explanation": "System negacji wg czasu: PRZESZŁOŚĆ: لَمْ (+ teraź. مجزوم), مَا (+ przeszły), لَمَّا (jeszcze nie). TERAŹNIEJSZOŚĆ: لَا (+ teraź. مرفوع), لَيْسَ (+ zdanie nominalne). PRZYSZŁOŚĆ: لَنْ (+ teraź. منصوب). Każda negacja: 1) ma swój czas, 2) wymaga innego trybu, 3) ma dodatkowe niuanse (stanowczość, oczekiwanie). 6 narzędzi negacji vs polskie jedno 'nie'!"
            }
        ]
    },
    {
        "key": "lam_negation",
        "name": "Negacja z لَمْ/لَمَّا/لَنْ",
        "description": "أحكام لَمْ ولَمَّا ولَنْ في النفي",
        "iconName": "minus.circle",
        "color": "#60a5fa",
        "level": "advanced",
        "items": [
            {
                "id": "pa_lmn1",
                "question": "لَمْ _____ إلى المدرسة أمس (On nie poszedł do szkoły wczoraj)",
                "translation": "(On nie poszedł do szkoły wczoraj)",
                "options": ["يذهبْ", "ذهبَ", "يذهبُ", "يذهبَ"],
                "correct": "يذهبْ",
                "explanation": "Poprawnie: 'لَمْ يذهبْ' (lam yadhab) — czas teraźniejszy w مجزوم (sukun na końcu). لَمْ + مضارع مجزوم = negacja PRZESZŁOŚCI. PARADOKS: forma teraźniejsza, ale znaczenie przeszłe. To dlatego, że لَمْ 'przenosi' czas teraźniejszy w przeszłość. Nie *لَمْ ذهبَ (BŁĄD — nie łączy się z przeszłym). Nie *لَمْ يذهبُ (BŁĄD — brak مجزوم)."
            },
            {
                "id": "pa_lmn2",
                "question": "لَمْ + czasownik 'pusty' كَانَ = :",
                "translation": "(لَمْ + كَانَ = ?)",
                "options": ["لَمْ يَكُنْ", "لَمْ يَكُونُ", "لَمْ كَانَ", "لَمْ يَكِنْ"],
                "correct": "لَمْ يَكُنْ",
                "explanation": "Poprawnie: 'لَمْ يَكُنْ' (lam yakun) = nie był. Rdzeń: ك-و-ن (أجوف). W مجزوم: يَكُونُ → يَكُنْ (و odpada + sukun). Reguła: w czasownikach pustych مجزوم = usunięcie długiej samogłoski: يَقُولُ → لَمْ يَقُلْ, يَنَامُ → لَمْ يَنَمْ, يَزُورُ → لَمْ يَزُرْ. To jak skrócenie polskiego: 'nie był-ø' zamiast 'nie był'. Jeden z najczęstszych zwrotów: لَمْ يَكُنْ = nie był."
            },
            {
                "id": "pa_lmn3",
                "question": "لَمْ + czasownik 'ułomny' مَشَى = :",
                "translation": "(لَمْ + مَشَى = ?)",
                "options": ["لَمْ يَمْشِ", "لَمْ يَمْشِي", "لَمْ مَشَى", "لَمْ يَمْشَ"],
                "correct": "لَمْ يَمْشِ",
                "explanation": "Poprawnie: 'لَمْ يَمْشِ' (lam yamshi) = nie szedł. W مجزوم ناقص: يَمْشِي → يَمْشِ (ي odpada!). Reguła: ناقص w مجزوم traci ostatnią و/ي: يَدْعُو → لَمْ يَدْعُ, يَبْكِي → لَمْ يَبْكِ, يَمْشِي → لَمْ يَمْشِ. To STAŁA reguła. Jeśli widzisz czas. teraź. kończący się na -و/-ي BEZ tych liter → to prawdopodobnie مجزوم."
            },
            {
                "id": "pa_lmn4",
                "question": "لَمَّا w 'لَمَّا يصلْ' różni się od لَمْ tym, że:",
                "translation": "(ما الفرق بين لَمَّا ولَمْ؟)",
                "options": ["لَمَّا = jeszcze nie (oczekuje się spełnienia); لَمْ = nie (po prostu fakt)", "Identyczne znaczenie", "لَمَّا = przyszłość; لَمْ = przeszłość", "لَمَّا = pytanie; لَمْ = odpowiedź"],
                "correct": "لَمَّا = jeszcze nie (oczekuje się spełnienia); لَمْ = nie (po prostu fakt)",
                "explanation": "KLUCZOWA różnica: لَمْ يصلْ = nie dotarł (fakt — może nigdy nie dotrze). لَمَّا يصلْ = JESZCZE nie dotarł (ale oczekujemy, że dotrze). لَمَّا implikuje: 1) czynność nie nastąpiła DO TEJ CHWILI, 2) OCZEKUJEMY, że nastąpi w przyszłości. W polskim: 'nie dotarł' vs 'jeszcze nie dotarł'. Arabski koduje tę różnicę GRAMATYCZNIE — dwoma różnymi partykułami."
            },
            {
                "id": "pa_lmn5",
                "question": "لَنْ _____ أبداً (Nigdy nie zapomnę)",
                "translation": "(Nigdy nie zapomnę)",
                "options": ["أنسَى", "أنسَ", "أنسى", "نسيتُ"],
                "correct": "أنسَى",
                "explanation": "Poprawnie: 'لَنْ أنسَى' (lan ansā) = nigdy nie zapomnę. لَنْ + مضارع منصوب. W ناقص منصوب: يَمْشِيَ (fatha na ي), ale: أنسَى — alif maqṣūra (ى) NIE przyjmuje widocznej fathy (فتحة مقدّرة = domyślna fatha). Więc wygląda jak مرفوع, ale JEST منصوب — fatha jest 'domyślna'. To cecha ناقص z ى: tryb niewidoczny (مقدر). أبداً = nigdy (wzmacnia لَنْ)."
            },
            {
                "id": "pa_lmn6",
                "question": "Czy لَنْ neguje STANOWCZO (na zawsze) czy tymczasowo?",
                "translation": "(هل لَنْ للتأبيد أم للتأقيت؟)",
                "options": ["Sporne — większość gramatyków: tymczasowo (nie na zawsze)", "Na zawsze (التأبيد)", "Zawsze tymczasowo", "Zależy od kontekstu"],
                "correct": "Sporne — większość gramatyków: tymczasowo (nie na zawsze)",
                "explanation": "Słynny spór gramatyczny! Zamachszari (المعتزلة): لَنْ = التأبيد (na zawsze). Ibn Hiszam i większość: لَنْ = negacja przyszła, ALE NIE NA ZAWSZE. Dowód: Koran: 'لَنْ تراني' (Nie zobaczysz Mnie — Musa nie widzi Boga w tym życiu, ale zobaczy w przyszłym). Gdyby لَنْ = na zawsze → sprzeczność teologiczna. Poprawnie: لَنْ to STANOWCZA negacja przyszłości, ale NIEKONIECZNIE wieczna."
            },
            {
                "id": "pa_lmn7",
                "question": "لَمْ + podwojony (مضعّف): لَمْ + يَمُرُّ = :",
                "translation": "(لَمْ + يَمُرُّ = ?)",
                "options": ["لَمْ يَمُرَّ", "لَمْ يَمُرْ", "لَمْ يَمُرُّ", "لَمْ يَمْرُرْ"],
                "correct": "لَمْ يَمُرَّ",
                "explanation": "Poprawnie: 'لَمْ يَمُرَّ' (lam yamurra) = nie przeszedł. W مضعّف + مجزوم: szadda NIE może mieć sukunu → zamienia się na fathę: يَمُرُّ → يَمُرَّ (ḍamma → fatha). Dlaczego fatha, nie sukun? Bo szadda = dwie spółgłoski → na drugiej musi być samogłoska. Najlżejsza = fatha. Porównaj zdrowy: لَمْ يكتبْ (sukun). Pusty: لَمْ يَقُلْ (و zanika). Podwojony: لَمْ يَمُرَّ (fatha)."
            },
            {
                "id": "pa_lmn8",
                "question": "لَمْ أَكُنْ أعرفُ — tłumaczenie:",
                "translation": "(ما ترجمة لم أكن أعرف؟)",
                "options": ["Nie wiedziałem (czas zaprzeszły/imperfekt)", "Nie wiem", "Nie będę wiedział", "Nie chcę wiedzieć"],
                "correct": "Nie wiedziałem (czas zaprzeszły/imperfekt)",
                "explanation": "لَمْ أَكُنْ أعرفُ = Nie wiedziałem / Nie znałem (dosł.: 'nie byłem znającym'). To konstrukcja przeszłego ciągłego/imperfektu: لَمْ + كَانَ (przeszłe) + مضارع (ciągłość). Porównaj: لَمْ أعرفْ = nie wiedziałem (jednorazowe). لَمْ أكنْ أعرفُ = nie wiedziałem (przez dłuższy czas / stan). W polskim: 'nie wiedziałem' vs 'nie wiedziałem (wtedy jeszcze)' — subtelna różnica aspektowa."
            },
            {
                "id": "pa_lmn9",
                "question": "لَنْ + كَانَ → poprawna forma to:",
                "translation": "(لَنْ + كَانَ = ?)",
                "options": ["لَنْ يَكُونَ", "لَنْ يَكُنْ", "لَنْ كَانَ", "لَنْ يَكُنَ"],
                "correct": "لَنْ يَكُونَ",
                "explanation": "Poprawnie: 'لَنْ يَكُونَ' (lan yakūna) = nie będzie. لَنْ + منصوب: يَكُونُ → يَكُونَ (ḍamma → fatha). W أجوف + منصوب: و zachowane (bo fatha, nie sukun). Porównaj: لَمْ + مجزوم: يَكُونُ → لَمْ يَكُنْ (و odpada, bo sukun). Reguła: و/ي w أجوف odpada TYLKO w مجزوم. W منصوب i مرفوع — zachowane. To systematyczna różnica trybów w czas. pustych."
            },
            {
                "id": "pa_lmn10",
                "question": "هل لَمْ يصلْ؟ — pytanie z لَمْ znaczy:",
                "translation": "(ما معنى هل لم يصل؟)",
                "options": ["Czy nie dotarł?", "Czy dotarł?", "Czy dotrze?", "Czy dotarłeś?"],
                "correct": "Czy nie dotarł?",
                "explanation": "هل لَمْ يصلْ = Czy nie dotarł? هل + لَمْ = pytanie o negację przeszłą. Oczekiwana odpowiedź: بَلَى, وصلَ (Tak, dotarł) lub لَا, لَمْ يصلْ (Nie, nie dotarł). UWAGA: po pytaniu z negacją, بَلَى = tak (wbrew negacji: 'owszem, dotarł'), نَعَمْ = tak (potwierdzenie negacji: 'tak, nie dotarł'). W polskim: 'Czy nie przyszedł?' → 'Tak, przyszedł' / 'Nie, nie przyszedł'. Arabski bardziej precyzyjny!"
            },
            {
                "id": "pa_lmn11",
                "question": "لَمَّا + أجوف: لَمَّا + يَقُولُ = :",
                "translation": "(لَمَّا + يقول = ?)",
                "options": ["لَمَّا يَقُلْ (jeszcze nie powiedział)", "لَمَّا يَقُولُ", "لَمَّا قَالَ", "لَمَّا يَقُولَ"],
                "correct": "لَمَّا يَقُلْ (jeszcze nie powiedział)",
                "explanation": "Poprawnie: 'لَمَّا يَقُلْ' (lammā yaqul) = jeszcze nie powiedział. لَمَّا wymaga مجزوم — tak samo jak لَمْ: يَقُولُ → يَقُلْ (و odpada + sukun). Różnica: لَمْ يَقُلْ = nie powiedział (fakt). لَمَّا يَقُلْ = JESZCZE nie powiedział (ale oczekujemy, że powie). Reguły morfologiczne identyczne — różnica wyłącznie SEMANTYCZNA (znaczeniowa). Obie partykuły: جازمة للمضارع."
            },
            {
                "id": "pa_lmn12",
                "question": "Konstrukcja: لَنْ + أَبَداً w 'لَنْ أعودَ أبداً' znaczy:",
                "translation": "(ما معنى لن أعود أبداً؟)",
                "options": ["Nigdy nie wrócę (wzmocniona negacja przyszłości)", "Wrócę kiedyś", "Nie wróciłem nigdy", "Nigdy nie wracam"],
                "correct": "Nigdy nie wrócę (wzmocniona negacja przyszłości)",
                "explanation": "لَنْ + أبداً = NIGDY nie (najsilniejsza negacja przyszłości). 'لَنْ أعودَ أبداً' = Nigdy nie wrócę. أبداً (abadan) wzmacnia لَنْ — samo لَنْ jest stanowcze, z أبداً — absolutne. Porównaj: لَنْ أعودَ (nie wrócę), لَنْ أعودَ أبداً (NIGDY nie wrócę), لا أعودُ (nie wracam — teraź.), لَمْ أَعُدْ (nie wróciłem — przeszłe). Cztery poziomy negacji dotyczące 'powrotu'."
            },
            {
                "id": "pa_lmn13",
                "question": "لَمْ z 5 czasownikami (الأفعال الخمسة): لَمْ + يكتبون = :",
                "translation": "(لَمْ + يكتبون = ?)",
                "options": ["لَمْ يكتبوا", "لَمْ يكتبون", "لَمْ يكتبونَ", "لَمْ يكتبُوا"],
                "correct": "لَمْ يكتبوا",
                "explanation": "Poprawnie: 'لَمْ يكتبوا' (lam yaktubū). الأفعال الخمسة (5 form) w مجزوم: نون odpada! يَكْتُبُونَ → يَكْتُبُوا (حذف النون). Reguła: 5 form (يفعلون, تفعلون, يفعلان, تفعلان, تفعلين) w مجزوم tracą ن: لَمْ يكتبوا, لَمْ تكتبوا, لَمْ يكتبا, لَمْ تكتبا, لَمْ تكتبي. To IDEN-TYCZNE ze formą منصوب — kontekst rozstrzyga!"
            },
            {
                "id": "pa_lmn14",
                "question": "Kiedy używamy لَمَّا zamiast لَمْ?",
                "translation": "(متى نستخدم لَمَّا بدل لَمْ؟)",
                "options": ["Gdy negacja trwa DO TERAZ i oczekujemy zmiany", "Zawsze — identyczne", "Tylko w Koranie", "Tylko z czasownikami pustymi"],
                "correct": "Gdy negacja trwa DO TERAZ i oczekujemy zmiany",
                "explanation": "لَمَّا używamy, gdy: 1) Czynność NIE nastąpiła do chwili mówienia, 2) OCZEKUJEMY, że nastąpi. 'لَمَّا يصلْ' = jeszcze nie dotarł (ale czekamy). 'لَمْ يصلْ' = nie dotarł (stwierdzenie faktu). Koran: 'بَلْ لَمَّا يذوقوا عذابِي' = Wręcz, jeszcze nie zakosztowali Mojej kary (ale zakosztują!). لَمَّا ma wartość PROROCKĄ — zapowiada coś nieuniknionego."
            },
            {
                "id": "pa_lmn15",
                "question": "Pełna tabela negacji z trybami: لَمْ = ?, لَنْ = ?, لَا الناهية = ?",
                "translation": "(ما إعراب المضارع بعد كل أداة؟)",
                "options": ["لَمْ → مجزوم; لَنْ → منصوب; لَا الناهية → مجزوم", "Wszystkie → مرفوع", "Wszystkie → منصوب", "لَمْ → منصوب; لَنْ → مجزوم; لَا → مرفوع"],
                "correct": "لَمْ → مجزوم; لَنْ → منصوب; لَا الناهية → مجزوم",
                "explanation": "FUNDAMENTALNA tabela: 1) لَمْ (przeszłość-) → مجزوم (يفعلْ — sukun): لَمْ يذهبْ. 2) لَمَّا (jeszcze nie) → مجزوم: لَمَّا يصلْ. 3) لَنْ (przyszłość-) → منصوب (يفعلَ — fatha): لَنْ يذهبَ. 4) لَا الناهية (zakaz) → مجزوم: لَا تذهبْ. 5) لَا النافية (negacja teraź.) → مرفوع (بدون تأثير): لَا يذهبُ. 5 partykuł — 3 tryby — kluczowe dla poprawnego arabskiego!"
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
