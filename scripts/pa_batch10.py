import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "tamyiz_specification",
        "name": "Dopełnienie specyfikacji (التمييز)",
        "description": "التمييز — تحديد المعنى المبهم",
        "iconName": "text.magnifyingglass",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_tam1",
                "question": "اِشْتَرَيْتُ كيلوغراماً _____ (Kupiłem kilogram jabłek)",
                "translation": "(Kupiłem kilogram jabłek)",
                "options": ["تُفَّاحاً", "تُفَّاحٌ", "التُّفَّاحَ", "تُفَّاحِ"],
                "correct": "تُفَّاحاً",
                "explanation": "Poprawnie: 'تُفَّاحاً' (tuffāḥan) w bierniku nieokreślonym. التمييز (tamyīz = specyfikacja) to rzeczownik w BIERNIKU nieokreślonym, który precyzuje znaczenie niejednoznacznego wyrazu. Po miarach/wagach/liczbach: كيلوغراماً تُفَّاحاً (kilogram jabłek). W polskim: dopełniacz (kilogram CZEGO? — jabłek). W arabskim: biernik (منصوب) nieokreślony (نكرة). To KLUCZOWA różnica między systemami!"
            },
            {
                "id": "pa_tam2",
                "question": "عِنْدِي عِشْرُونَ _____ (Mam dwadzieścia książek)",
                "translation": "(Mam dwadzieścia książek)",
                "options": ["كِتَاباً", "كُتُبٍ", "الكِتَابَ", "كِتَابٌ"],
                "correct": "كِتَاباً",
                "explanation": "Poprawnie: 'كِتَاباً' (kitāban) — tamyīz po liczebnikach 11-99: rzeczownik w BIERNIKU l. pojedynczej. عِشْرُونَ كِتَاباً = dwadzieścia książek. Porównaj z liczbami 3-10: عَشَرَةُ كُتُبٍ (dopełniacz l. mn.!). System liczbowy arabski jest złożony: 3-10 + dopełniacz l. mn., 11-99 + biernik l. poj. (tamyīz), 100+ + dopełniacz l. poj. W polskim zawsze dopełniacz."
            },
            {
                "id": "pa_tam3",
                "question": "هو أَكْبَرُ مِنِّي _____ (On jest ode mnie starszy o rok)",
                "translation": "(On jest ode mnie starszy o rok)",
                "options": ["سَنَةً", "سَنَةٌ", "سَنَةٍ", "السَّنَةَ"],
                "correct": "سَنَةً",
                "explanation": "Poprawnie: 'سَنَةً' (sanatan) — tamyīz po stopniu wyższym (أَفْعَل). Precyzuje, W CZYM jest większy: أَكْبَرُ سَنَةً = starszy O ROK. Inne: أَكْثَرُ عَدَداً (liczniejszy), أَحْسَنُ وَجْهاً (ładniejszy twarzą), أَطْوَلُ قَامَةً (wyższy wzrostem). W polskim: narzędnik (wzrostem) lub 'pod względem' + dopełniacz. W arabskim: zawsze biernik tamyīz."
            },
            {
                "id": "pa_tam4",
                "question": "طَابَ المكانُ _____ (Miejsce jest przyjemne klimatem)",
                "translation": "(Miejsce jest przyjemne klimatem)",
                "options": ["مُنَاخاً", "مُنَاخٌ", "المُنَاخَ", "مُنَاخِ"],
                "correct": "مُنَاخاً",
                "explanation": "Poprawnie: 'مُنَاخاً' (munākhan) — tamyīz zdaniowy (تمييز جملة/نسبة). Nie specyfikuje jednego wyrazu, lecz CAŁE zdanie: 'طَابَ المكانُ' jest ogólne (w czym przyjemne?), 'مُنَاخاً' precyzuje (klimatem). Inne: اِمْتَلَأَتِ الغُرْفَةُ نَاساً (pokój zapełnił się LUDŹMI), اِزْدَادَ عِلْماً (powiększył się w WIEDZY). Tamyīz zdaniowy jest PRZESUNIĘTY — pochodzi z podmiotu/dopełnienia."
            },
            {
                "id": "pa_tam5",
                "question": "Różnica: شَرِبْتُ كَأْسَ المَاءِ vs. شَرِبْتُ كَأْساً مَاءً:",
                "translation": "(ما الفرق بين التركيبين؟)",
                "options": ["Idafa (określone) vs. tamyīz (nieokreślone)", "To samo znaczenie", "Pierwsza poprawna, druga błędna", "Liczba pojedyncza vs. mnoga"],
                "correct": "Idafa (określone) vs. tamyīz (nieokreślone)",
                "explanation": "KLUCZOWA różnica: كَأْسَ المَاءِ = szklankę (tego) wody — idafa, określone, konkretna szklanka. كَأْساً مَاءً = szklankę wody — tamyīz, nieokreślone, jakaś szklanka czegoś. Praktycznie: oba tłumaczą się podobnie. Gramatycznie: idafa ma dopełniacz (المَاءِ), tamyīz biernik (مَاءً). W MSA tamyīz po miarach jest częstszy. W polskim: 'szklanka wody' — dwuznaczne (obie struktury)."
            },
            {
                "id": "pa_tam6",
                "question": "كَمْ _____ في الفصل؟ (Ilu jest studentów w klasie?)",
                "translation": "(Ilu jest studentów w klasie?)",
                "options": ["طَالِباً", "طُلَّابٍ", "الطَّالِبَ", "طَالِبٌ"],
                "correct": "طَالِباً",
                "explanation": "Poprawnie: 'طَالِباً' — po كَمْ pytającym: tamyīz w BIERNIKU l. poj. كَمْ طَالِباً = ilu studentów? Porównaj: كَمْ wykrzyknikowe (= ile!/wiele!): كَمْ طُلَّابٍ نَجَحُوا! = Ilu studentów zdało! (dopełniacz l. mn.). Dwie كَمْ: 1) pytająca + biernik l. poj., 2) wykrzyknikowa + dopełniacz l. mn. To ważne rozróżnienie w zaawansowanej gramatyce!"
            },
            {
                "id": "pa_tam7",
                "question": "لَهُ عِشْرُونَ عاماً — 'عاماً' jest:",
                "translation": "(ما إعراب عاماً؟)",
                "options": ["Tamyīz (تمييز) — biernik", "Podmiot (فاعل) — mianownik", "Dopełnienie (مفعول) — biernik", "Przydawka (نعت)"],
                "correct": "Tamyīz (تمييز) — biernik",
                "explanation": "Poprawnie: 'عاماً' (ʿāman) = tamyīz po liczebniku عِشْرُونَ. Precyzuje: dwadzieścia CZEGO? — lat. Tamyīz po liczebnikach 11-99 jest l. poj. w bierniku. Często mylony z مفعول به (dopełnienie bliższe), ale tamyīz odpowiada na pytanie 'czego?' / 'pod jakim względem?', a مفعول به na 'co?'. مِنْ + dopełniacz jest alternatywą: عِشْرُونَ مِن الأعوام (rzadziej)."
            },
            {
                "id": "pa_tam8",
                "question": "اِشْتَعَلَ الرَّأسُ _____ (Głowa zapłonęła siwizną = posiwiałem)",
                "translation": "(Głowa zapłonęła siwizną — wyrażenie koraniczne)",
                "options": ["شَيْباً", "شَيْبٌ", "الشَّيْبَ", "شَيْبِ"],
                "correct": "شَيْباً",
                "explanation": "Poprawnie: 'شَيْباً' (shayban) — tamyīz zdaniowy z Koranu (Sura 19:4). Oryginalne zdanie: 'اِشْتَعَلَ الرَّأسُ شَيْباً' = głowa zapłonęła siwizną (= posiwiałem). 'شَيْباً' precyzuje CZYM zapłonęła głowa. Gramatyczny mechanizm: شَيْبُ الرَّأسِ اشْتَعَلَ → اِشْتَعَلَ الرَّأسُ شَيْباً (podmiot idafy → tamyīz). To jeden z najpiękniejszych przykładów tamyīz w literaturze!"
            },
            {
                "id": "pa_tam9",
                "question": "فَجَّرْنَا الأَرْضَ _____ (Sprawiliśmy, że ziemia wytrysnęła źródłami — Koran)",
                "translation": "(Sprawiliśmy, że ziemia wytrysnęła źródłami)",
                "options": ["عُيُوناً", "عُيُونٌ", "العُيُونَ", "عُيُونِ"],
                "correct": "عُيُوناً",
                "explanation": "Poprawnie: 'عُيُوناً' (ʿuyūnan) — tamyīz. Z Koranu (54:12): 'فَجَّرْنَا الأَرْضَ عُيُوناً' = sprawiliśmy że ziemia wytrysnęła źródłami. Tamyīz może być w l. mn. gdy kontekst tego wymaga. Mechanizm transformacji: فَجَّرْنَا عُيُونَ الأَرْضِ → فَجَّرْنَا الأَرْضَ عُيُوناً (dopełnienie idafy → tamyīz). To zaawansowana struktura retoryczna — częsta w Koranie."
            },
            {
                "id": "pa_tam10",
                "question": "هو أَحْسَنُ النَّاسِ _____ (On jest najlepszym z ludzi charakterem)",
                "translation": "(On jest najlepszym z ludzi charakterem)",
                "options": ["خُلُقاً", "خُلُقٌ", "الخُلُقَ", "خُلُقِ"],
                "correct": "خُلُقاً",
                "explanation": "Poprawnie: 'خُلُقاً' (khuluqan) — tamyīz po stopniu najwyższym. أَحْسَنُ النَّاسِ خُلُقاً = najlepszy z ludzi POD WZGLĘDEM charakteru. Konstrukcja: أَفْعَلُ + dopełniacz (kogo?) + tamyīz (pod jakim względem?). Inne: أَكْثَرُ العَرَبِ عَدَداً (najliczniejsi z Arabów), أَشَدُّهُمْ ذَكَاءً (najbystrzejszy z nich). W polskim: narzędnik lub 'pod względem'."
            },
            {
                "id": "pa_tam11",
                "question": "Tamyīz jest zawsze w:",
                "translation": "(ما إعراب التمييز دائماً؟)",
                "options": ["Bierniku nieokreślonym (منصوب نكرة)", "Mianowniku (مرفوع)", "Dopełniaczu (مجرور)", "Bierniku określonym (منصوب معرفة)"],
                "correct": "Bierniku nieokreślonym (منصوب نكرة)",
                "explanation": "Tamyīz jest ZAWSZE: 1) w bierniku (منصوب) — końcówka -اً (-an), 2) nieokreślony (نكرة) — bez الـ. NIGDY nie może być określony (*التُّفَّاحَ) ani w innym przypadku (*تُفَّاحٍ). Te dwa warunki odróżniają tamyīz od innych funkcji biernikowych. W polskim: dopełniacz lub narzędnik (kilogram JABŁEK, starszy WIEKIEM). W arabskim: jeden przypadek — biernik nieokreślony."
            },
            {
                "id": "pa_tam12",
                "question": "مَلَأَ الكَأسَ _____ (Napełnił szklankę wodą)",
                "translation": "(Napełnił szklankę wodą)",
                "options": ["مَاءً", "مَاءٌ", "المَاءَ", "مَاءِ"],
                "correct": "مَاءً",
                "explanation": "Poprawnie: 'مَاءً' (māʾan) — tamyīz po czasowniku oznaczającym napełnianie/opróżnianie. مَلَأَ الكَأسَ مَاءً = napełnił szklankę WODĄ. Inne: فَرَّغَ الخِزَانَةَ ثِيَاباً (opróżnił szafę z ubrań), غَرَسَ الحَدِيقَةَ أَشْجَاراً (zasadził ogród DRZEWAMI). Typ: tamyīz zdaniowy — precyzuje relację między czasownikiem a dopełnieniem."
            },
            {
                "id": "pa_tam13",
                "question": "Tamyīz vs. ḥāl (حال) — główna różnica:",
                "translation": "(الفرق بين التمييز والحال)",
                "options": ["Tamyīz = nieokreślony rzeczownik, ḥāl = nieokreślony przymiotnik/zdanie", "To samo", "Tamyīz w dopełniaczu, ḥāl w bierniku", "Ḥāl tylko z podmiotem"],
                "correct": "Tamyīz = nieokreślony rzeczownik, ḥāl = nieokreślony przymiotnik/zdanie",
                "explanation": "KLUCZOWA różnica: tamyīz odpowiada na 'co?' / 'pod jakim względem?' — jest RZECZOWNIKIEM: كِتَاباً, سَنَةً. Ḥāl odpowiada na 'jak?' / 'w jakim stanie?' — jest PRZYMIOTNIKIEM, zdaniem lub wyrażeniem: فَرِحاً (radośnie), وَهُوَ يَضْحَكُ (śmiejąc się). Oba w bierniku nieokreślonym! Ale: tamyīz = rzeczownik (co), ḥāl = przymiotnik/zdanie (jak)."
            },
            {
                "id": "pa_tam14",
                "question": "اِزْدَادَ الأمرُ _____ (Sprawa stała się bardziej skomplikowana)",
                "translation": "(Sprawa stała się bardziej skomplikowana)",
                "options": ["تَعْقِيداً", "تَعْقِيدٌ", "التَّعْقِيدَ", "تَعْقِيدِ"],
                "correct": "تَعْقِيداً",
                "explanation": "Poprawnie: 'تَعْقِيداً' (taʿqīdan) — tamyīz po czasowniku wzrostu/zmiany. اِزْدَادَ (forma VIII) = zwiększył się, powiększył się. Tamyīz precyzuje W CZYM: تَعْقِيداً = w skomplikowaniu. Podobne: اِزْدَادَ حَجْماً (powiększył się objętością), اِزْدَادَ عِلْماً (powiększył się wiedzą), نَقَصَ وَزْناً (zmniejszył się wagą). Masdar jako tamyīz jest bardzo częsty."
            },
            {
                "id": "pa_tam15",
                "question": "Które zdanie zawiera tamyīz?",
                "translation": "(أي جملة تحتوي على تمييز؟)",
                "options": ["شَرِبْتُ لِتْراً حَلِيباً (wypiłem litr mleka)", "شَرِبْتُ الحَلِيبَ (wypiłem mleko)", "الحَلِيبُ بَارِدٌ (mleko jest zimne)", "شَرِبْتُ حَلِيباً (wypiłem mleko)"],
                "correct": "شَرِبْتُ لِتْراً حَلِيباً (wypiłem litr mleka)",
                "explanation": "Poprawnie: 'شَرِبْتُ لِتْراً حَلِيباً' — حَلِيباً jest tamyīz, precyzuje: litr CZEGO? → mleka. الحَلِيبَ w drugim zdaniu to مفعول به (dopełnienie bliższe). الحَلِيبُ w trzecim to مبتدأ (podmiot zdania imiennego). حَلِيباً w czwartym to مفعول به nieokreślony. Tamyīz wymaga KONTEKSTU niejednoznaczności — coś wymaga doprecyzowania!"
            }
        ]
    },
    {
        "key": "exceptions_ila",
        "name": "Wyjątki i إلّا (الاِسْتِثْنَاء)",
        "description": "أسلوب الاستثناء — إلّا/غير/سوى",
        "iconName": "xmark.circle",
        "color": "#c084fc",
        "level": "advanced",
        "items": [
            {
                "id": "pa_exc1",
                "question": "حَضَرَ الطُلّابُ إلّا _____ (Przyszli studenci oprócz Alego)",
                "translation": "(Przyszli studenci oprócz Alego)",
                "options": ["عَلِيّاً", "عَلِيٌّ", "عَلِيٍّ", "عَلِيَّ"],
                "correct": "عَلِيّاً",
                "explanation": "Poprawnie: 'عَلِيّاً' (ʿAliyyan) — w bierniku. Po إلّا w zdaniu PEŁNYM twierdzącym: wyraz po إلّا jest w BIERNIKU. Reguła: إلّا + biernik (منصوب) gdy zdanie jest: 1) twierdzące (مُوجَب), 2) pełne (تامّ = wyraz ogólny obecny, tu: الطُلّابُ). To KLUCZOWA reguła wyjątków. W polskim: 'oprócz Alego' — przyimek + dopełniacz. W arabskim: إلّا + biernik."
            },
            {
                "id": "pa_exc2",
                "question": "مَا حَضَرَ أَحَدٌ إلّا _____ (Nikt nie przyszedł oprócz Zayda)",
                "translation": "(Nikt nie przyszedł oprócz Zayda)",
                "options": ["زَيْدٌ / زَيْداً", "زَيْداً (tylko)", "زَيْدٍ (tylko)", "زَيْدَ (tylko)"],
                "correct": "زَيْدٌ / زَيْداً",
                "explanation": "W zdaniu PRZECZĄCYM pełnym: wyraz po إلّا może być w BIERNIKU (زَيْداً — jak w twierdzącym) LUB podążać za deklinacją wyrazu ogólnego (بَدَل — apozycja): أَحَدٌ jest w mianowniku → زَيْدٌ (mianownik jako بدل). Obie formy poprawne! مَا جَاءَ أَحَدٌ إلّا زَيْدٌ (بدل) = مَا جَاءَ أَحَدٌ إلّا زَيْداً (منصوب). To zaawansowana gramatyka — dwie analizy tego samego zdania!"
            },
            {
                "id": "pa_exc3",
                "question": "مَا جَاءَ إلّا _____ (Nikt nie przyszedł oprócz Muhammada) — zdanie NIEPEŁNE przeczące",
                "translation": "(Nikt nie przyszedł oprócz Muhammada)",
                "options": ["مُحَمَّدٌ", "مُحَمَّداً", "مُحَمَّدِ", "مُحَمَّدَ"],
                "correct": "مُحَمَّدٌ",
                "explanation": "Poprawnie: 'مُحَمَّدٌ' (Muḥammadun) — w MIANOWNIKU! W zdaniu NIEPEŁNYM przeczącym (ناقص منفيّ): brak wyrazu ogólnego (nie ma 'أَحَدٌ'), więc wyraz po إلّا przejmuje funkcję gramatyczną w zdaniu. Tu: مُحَمَّدٌ = podmiot (فاعل) → mianownik. مَا جَاءَ إلّا مُحَمَّدٌ = 'Przyszedł tylko Muhammad'. إلّا jest tu jakby 'niewidzialna' — nie wpływa na deklinację."
            },
            {
                "id": "pa_exc4",
                "question": "مَا قَرَأْتُ إلّا _____ (Nie przeczytałem oprócz książki = przeczytałem tylko książkę)",
                "translation": "(Przeczytałem tylko książkę)",
                "options": ["كِتَاباً", "كِتَابٌ", "كِتَابِ", "الكِتَابَ"],
                "correct": "كِتَاباً",
                "explanation": "Poprawnie: 'كِتَاباً' (kitāban) — w BIERNIKU. Zdanie niepełne (ناقص): brak wyrazu ogólnego. Funkcja: كِتَاباً = dopełnienie bliższe (مفعول به) → biernik. مَا قَرَأْتُ إلّا كِتَاباً = nie przeczytałem nic oprócz książki = przeczytałem TYLKO książkę. Porównaj: مَا جَاءَ إلّا مُحَمَّدٌ (mianownik — podmiot) vs. مَا قَرَأْتُ إلّا كِتَاباً (biernik — dopełnienie). Funkcja decyduje!"
            },
            {
                "id": "pa_exc5",
                "question": "حَضَرَ الجَمِيعُ غَيْرَ _____ (Przyszli wszyscy oprócz dyrektora)",
                "translation": "(Przyszli wszyscy oprócz dyrektora)",
                "options": ["المُدِيرِ", "المُدِيرَ", "المُدِيرُ", "مُدِيراً"],
                "correct": "المُدِيرِ",
                "explanation": "Poprawnie: 'المُدِيرِ' — dopełniacz po غَيْرَ (ghayra). غَيْرَ to rzeczownik w bierniku (jak wyraz po إلّا), ale wyraz ZA NIM jest w DOPEŁNIACZU (idafa!). غَيْرَ المُدِيرِ = oprócz dyrektora. Różnica: إلّا jest PARTYKUŁĄ (nie odmienia się), غَيْرَ jest RZECZOWNIKIEM (tworzy idafę). W polskim: obie tłumaczą się jako 'oprócz/poza'."
            },
            {
                "id": "pa_exc6",
                "question": "لَا أُرِيدُ سِوَى _____ (Nie chcę nic oprócz sukcesu)",
                "translation": "(Nie chcę nic oprócz sukcesu)",
                "options": ["النَّجَاحِ", "النَّجَاحَ", "النَّجَاحُ", "نَجَاحاً"],
                "correct": "النَّجَاحِ",
                "explanation": "Poprawnie: 'النَّجَاحِ' (an-najāḥi) — dopełniacz po سِوَى (siwā). سِوَى działa jak غَيْرَ — tworzy idafę. Ale: سِوَى jest NIEODMIENNA (mabni) — zawsze na fathie. لَا أُرِيدُ سِوَى النَّجَاحِ = nie chcę nic oprócz sukcesu. Trzy sposoby wyrażenia wyjątku: إلّا + biernik, غَيْرَ + dopełniacz, سِوَى + dopełniacz. Rejestr: إلّا (neutralna), سِوَى (literacka)."
            },
            {
                "id": "pa_exc7",
                "question": "Wszystkie trzy نawykowe sposoby wyrażenia wyjątku to:",
                "translation": "(ما أدوات الاستثناء الثلاثة؟)",
                "options": ["إلّا, غَيْر, سِوَى", "إلّا, لَيْسَ, بَلْ", "مِنْ, عَنْ, فِي", "لَا, لَمْ, لَنْ"],
                "correct": "إلّا, غَيْر, سِوَى",
                "explanation": "Trzy główne narzędzia wyjątku: 1) إلّا (illa) — partykuła, najczęstsza, wyraz po niej w bierniku lub wg funkcji; 2) غَيْر (ghayr) — rzeczownik, tworzy idafę, sam w bierniku jak wyraz po إلّا; 3) سِوَى (siwā) — nieodmienna, tworzy idafę, bardziej literacka. Dodatkowe (rzadsze): عَدَا (ʿadā), خَلَا (khalā), حَاشَا (ḥāshā) — działają jak przyimki lub czasowniki."
            },
            {
                "id": "pa_exc8",
                "question": "جَاءَ القَوْمُ عَدَا _____ (Przyszedł lud oprócz Bakra)",
                "translation": "(Przyszedł lud oprócz Bakra)",
                "options": ["بَكْرٍ / بَكْراً", "بَكْرٌ (tylko)", "بَكْرَ (tylko)", "البَكْرِ"],
                "correct": "بَكْرٍ / بَكْراً",
                "explanation": "Poprawnie: obie formy! عَدَا (ʿadā) może działać jako: 1) PRZYIMEK → wyraz w dopełniaczu: عَدَا بَكْرٍ; 2) CZASOWNIK → wyraz w bierniku: عَدَا بَكْراً. Z مَا: مَا عَدَا بَكْراً (tylko biernik — مَا wymusza interpretację czasownikową). خَلَا i حَاشَا działają identycznie. To pokazuje elastyczność arabskiej składni — jeden wyraz, dwie analizy!"
            },
            {
                "id": "pa_exc9",
                "question": "لَيْسَ في القاعة أَحَدٌ إلّا _____ (W sali nie ma nikogo oprócz nauczyciela)",
                "translation": "(W sali nie ma nikogo oprócz nauczyciela)",
                "options": ["المُعَلِّمَ / المُعَلِّمُ", "المُعَلِّمِ (tylko)", "مُعَلِّماً (tylko)", "المُعَلِّمَ (tylko)"],
                "correct": "المُعَلِّمَ / المُعَلِّمُ",
                "explanation": "Zdanie pełne (تامّ) z لَيْسَ (przeczenie): dwie opcje — 1) المُعَلِّمَ (biernik — standardowy حكم إلّا); 2) المُعَلِّمُ (mianownik — بدل od أَحَدٌ). W zdaniu przeczącym pełnym OBE formy poprawne. Gramаtycy spierali się od wieków — szkoła z Basry preferowała بدل (mianownik), szkoła z Kufy biernik. Nowoczesna gramatyka akceptuje obie."
            },
            {
                "id": "pa_exc10",
                "question": "ما الفرق: إلّا vs. إلَى؟",
                "translation": "(Jaka jest różnica między إلّا a إلَى?)",
                "options": ["إلّا = oprócz/tylko, إلَى = do/w kierunku", "To samo słowo", "إلّا = do, إلَى = oprócz", "Oba = oprócz"],
                "correct": "إلّا = oprócz/tylko, إلَى = do/w kierunku",
                "explanation": "UWAGA na częstą pomyłkę! إلّا (illā) = oprócz, z wyjątkiem, tylko. إلَى (ilā) = do, w kierunku (przyimek). Wymowa: إلّا ma szaddę (podwojone ل) + fatḥę na alif. إلَى ma jedno ل + fatḥę na ي. W piśmie: إلّا (z szaddą i ا), إلَى (z ى). W polskim: 'oprócz' vs. 'do' — kompletnie inne, ale w arabskim pisownia podobna!"
            },
            {
                "id": "pa_exc11",
                "question": "لَمْ يَبْقَ مِنَ الطعام إلّا _____ (Nie zostało z jedzenia oprócz chleba)",
                "translation": "(Nie zostało z jedzenia oprócz odrobiny)",
                "options": ["القَلِيلُ", "القَلِيلَ", "قَلِيلاً", "القَلِيلِ"],
                "correct": "القَلِيلُ",
                "explanation": "Poprawnie: 'القَلِيلُ' — mianownik! To zdanie NIEPEŁNE przeczące (ناقص منفيّ): brak wyrazu ogólnego (nie ma 'شيءٌ'). القَلِيلُ przejmuje funkcję فاعل (podmiot od يَبْقَ) → mianownik. لَمْ يَبْقَ إلّا القَلِيلُ = nie zostało nic oprócz odrobiny = zostało TYLKO trochę. Pamiętaj: w ناقص منفيّ wyrаz po إلّا bierze deklinację swojej funkcji w zdaniu!"
            },
            {
                "id": "pa_exc12",
                "question": "كُلُّ شَيْءٍ هَالِكٌ إلّا _____ (Wszystko zginie oprócz Jego oblicza — Koran)",
                "translation": "(Wszystko zginie oprócz Jego oblicza — Koran 28:88)",
                "options": ["وَجْهَهُ", "وَجْهُهُ", "وَجْهِهِ", "وُجُوهَهُ"],
                "correct": "وَجْهَهُ",
                "explanation": "Poprawnie: 'وَجْهَهُ' (wajhahu) — biernik. Z Koranu (28:88): 'كُلُّ شَيْءٍ هَالِكٌ إلّا وَجْهَهُ' = Wszystko jest przemijające oprócz Jego oblicza. Zdanie pełne twierdzące: كُلُّ شَيْءٍ = wyraz ogólny → wyraz po إلّا w BIERNIKU: وَجْهَهُ. وَجْه = oblicze/twarz + ـهُ (zaimek 3. os. m. = Jego). To jeden z najczęściej cytowanych wersetów."
            },
            {
                "id": "pa_exc13",
                "question": "نَجَحَ الطُّلّابُ إلّا طَالِبَيْنِ — 'طَالِبَيْنِ' jest w:",
                "translation": "(ما إعراب طَالِبَيْنِ؟)",
                "options": ["Bierniku (مثنى — -َيْنِ = biernik/dopełniacz)", "Mianowniku", "Dopełniaczu", "Formie nieokreślonej"],
                "correct": "Bierniku (مثنى — -َيْنِ = biernik/dopełniacz)",
                "explanation": "Poprawnie: 'طَالِبَيْنِ' w bierniku — l. podwójna (مثنى). W l. podwójnej: mianownik = -َانِ (طَالِبَانِ), biernik/dopełniacz = -َيْنِ (طَالِبَيْنِ). Po إلّا w zdaniu pełnym twierdzącym: biernik → طَالِبَيْنِ (nie *طَالِبَانِ). To samo w l. mn. m.: mianownik -ُونَ, biernik/dopełniacz -ِينَ: إلّا طَالِبِينَ."
            },
            {
                "id": "pa_exc14",
                "question": "إنَّمَا jest ekwiwalentem:",
                "translation": "(إنَّمَا تُعادِل أيّ تعبير؟)",
                "options": ["مَا...إلّا (tylko/nie...oprócz)", "إنَّ + مَا (zaiste co)", "لَكِن (ale)", "لَمْ (nie)"],
                "correct": "مَا...إلّا (tylko/nie...oprócz)",
                "explanation": "Poprawnie: إنَّمَا (innamā) = tylko/jedynie — ekwiwalent أسلوب الحصر (ograniczenia). إنَّمَا العلمُ بالتعلّمِ = Wiedza jest TYLKO przez naukę = مَا العلمُ إلّا بالتعلّمِ. ALE: إنَّمَا NIE zmienia deklinacji! Po إنَّمَا: normalny szyk zdania. Po إلّا: reguły wyjątku. إنَّمَا jest stylistycznie bardziej elegancka i częsta w Koranie: 'إنَّمَا المُؤمِنُونَ إخْوَةٌ' = wierzący są JEDYNIE braćmi."
            },
            {
                "id": "pa_exc15",
                "question": "Które zdanie jest BŁĘDNE gramatycznie?",
                "translation": "(أي جملة خاطئة نحوياً؟)",
                "options": ["حَضَرَ إلّا زَيْداً (⬜ zdanie twierdzące niepełne bez podmiotu)", "حَضَرَ الجميعُ إلّا زَيْداً", "مَا حَضَرَ إلّا زَيْدٌ", "مَا حَضَرَ أحدٌ إلّا زَيْداً"],
                "correct": "حَضَرَ إلّا زَيْداً (⬜ zdanie twierdzące niepełne bez podmiotu)",
                "explanation": "BŁĘDNE: 'حَضَرَ إلّا زَيْداً' — zdanie twierdzące (موجب) NIE MOŻE być niepełne (ناقص)! Jeśli nie ma wyrazu ogólnego, zdanie MUSI być przeczące: مَا حَضَرَ إلّا زَيْدٌ (OK). Twierdzące wymaga wyrazu ogólnego: حَضَرَ الجميعُ إلّا زَيْداً (OK). Reguła: تامّ موجب ✅, تامّ منفيّ ✅, ناقص منفيّ ✅, ناقص موجب ❌."
            }
        ]
    },
    {
        "key": "vocative_case",
        "name": "Wołacz (النِّدَاء)",
        "description": "أسلوب النداء — يا/أيّها/أيّتها",
        "iconName": "megaphone",
        "color": "#22d3ee",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_voc1",
                "question": "_____ مُحَمَّدُ! (O Muhammadzie!)",
                "translation": "(O Muhammadzie!)",
                "options": ["يَا", "أَيَا", "هَيَا", "وَا"],
                "correct": "يَا",
                "explanation": "Poprawnie: 'يَا' (yā) — najczęstsza partykuła wołacza. يَا مُحَمَّدُ! = O Muhammadzie! W arabskim wołacz (النِّدَاء) używa partykuły + imię. يَا jest NIEODMIENNA i używana w 99% przypadków. Inne (rzadsze): أَيَا (daleki wołacz), هَيَا (daleki), أَ (bliski), أَيْ (bliski). W polskim: wołacz to osobny przypadek (Muhammadzie!). W arabskim: يَا + standardowa forma."
            },
            {
                "id": "pa_voc2",
                "question": "يَا طَالِبُ! — 'طَالِبُ' jest w:",
                "translation": "(ما إعراب طَالِبُ في النداء؟)",
                "options": ["Bierniku/wołaczu (مبنيّ على الضمّ) — bo to wołacz prosty", "Mianowniku (مرفوع)", "Dopełniaczu (مجرور)", "Bierniku (منصوب)"],
                "correct": "Bierniku/wołaczu (مبنيّ على الضمّ) — bo to wołacz prosty",
                "explanation": "Poprawnie: 'طَالِبُ' to منادى مفرد (wołacz prosty/nieidafowy). Reguła: wołacz prosty określony jest مبنيّ على الضمّ (budowany na ḍammie) — wygląda jak mianownik, ale GRAMATYCZNIE jest w bierniku (w miejscu biernika). To ważna subtelność: ḍamma na końcu wołacza prostego nie równa się regule mianownika. To specjalna forma wołacza."
            },
            {
                "id": "pa_voc3",
                "question": "يَا طَالِبَ العِلْم! — 'طَالِبَ' jest w:",
                "translation": "(ما إعراب طَالِبَ العلم في النداء؟)",
                "options": ["Bierniku (منصوب) — bo to wołacz idafowy", "Mianowniku", "Dopełniaczu", "Wołaczu na ḍammie"],
                "correct": "Bierniku (منصوب) — bo to wołacz idafowy",
                "explanation": "Poprawnie: 'طَالِبَ' w bierniku! KLUCZOWA różnica: يَا طَالِبُ! (prosty → ḍamma) vs. يَا طَالِبَ العِلْمِ! (idafa/dodany → fatha = biernik). Reguła: wołacz المنادى المضاف (z idafą) lub المنادى الشبيه بالمضاف (quasi-idafowy) jest w BIERNIKU (منصوب). Tylko wołacz prosty (مفرد) jest na ḍammie. To jedna z najważniejszych reguł wołacza!"
            },
            {
                "id": "pa_voc4",
                "question": "يَا أَيُّهَا _____ ! (O ludzie!)",
                "translation": "(O ludzie!)",
                "options": ["النَّاسُ", "النَّاسَ", "نَاسُ", "النَّاسِ"],
                "correct": "النَّاسُ",
                "explanation": "Poprawnie: 'النَّاسُ' (an-nāsu) — z الـ! Wyraz z rodzajnikiem الـ NIE MOŻE stać bezpośrednio po يَا (*يَا النَّاسُ ❌). Trzeba dodać أَيُّهَا (dla r.m.) lub أَيَّتُهَا (dla r.ż.): يَا أَيُّهَا النَّاسُ! النَّاسُ po أَيُّهَا jest w MIANOWNIKU jako نعت/بدل. Frazа يَا أَيُّهَا النَّاسُ jest niezwykle częsta w Koranie — jedno z najsłynniejszych wyrażeń."
            },
            {
                "id": "pa_voc5",
                "question": "يَا أَيَّتُهَا _____ ! (O duszo spokojna! — Koran)",
                "translation": "(O duszo spokojna! — Koran 89:27)",
                "options": ["النَّفْسُ المُطْمَئِنَّةُ", "النَّفْسَ المُطْمَئِنَّةَ", "نَفْسُ المُطْمَئِنَّةِ", "النَّفْسِ"],
                "correct": "النَّفْسُ المُطْمَئِنَّةُ",
                "explanation": "Poprawnie: 'النَّفْسُ المُطْمَئِنَّةُ' — oba w mianowniku. Z Koranu (89:27): يَا أَيَّتُهَا النَّفْسُ المُطْمَئِنَّةُ = O duszo spokojna! أَيَّتُهَا (z تاء) → dla r. żeńskiego. النَّفْسُ = نعت (przydawka) do أَيَّتُهَا. المُطْمَئِنَّةُ = przydawka do النَّفْسُ. Cała konstrukcja w mianowniku. To jeden z najpiękniejszych wersetów — zwrot do duszy wierzącego."
            },
            {
                "id": "pa_voc6",
                "question": "يَا مُعَلِّمِي! — znaczy:",
                "translation": "(ماذا يعني يَا مُعَلِّمِي؟)",
                "options": ["O mój nauczycielu!", "O nauczyciele!", "O nauczycieli!", "Nauczycielu!"],
                "correct": "O mój nauczycielu!",
                "explanation": "Poprawnie: 'يَا مُعَلِّمِي' (yā muʿallimī) = O mój nauczycielu! مُعَلِّم + ي (zaimek dzierżawczy 1. os. = mój). W wołaczu z zaimkiem ي: dozwolone (يَا مُعَلِّمِي), ale bardziej elegancko: يَا مُعَلِّمَتِي (z tā marbūṭa → tā maftūḥa). W polskim: 'mój nauczycielu!' — wołacz. W arabskim: idafa z zaimkiem = wołacz idafowy → biernik."
            },
            {
                "id": "pa_voc7",
                "question": "يَا رَبِّ! — skrócona forma od:",
                "translation": "(ما الأصل في يَا ربِّ؟)",
                "options": ["يَا رَبِّي (z opuszczoną ي)", "يَا رَبُّ", "يَا رَابِّ", "يَا رُبَّ"],
                "correct": "يَا رَبِّي (z opuszczoną ي)",
                "explanation": "Poprawnie: يَا رَبِّ = يَا رَبِّي (yā rabbī) z opuszczoną ي. W wołaczu dozwolone jest usunięcie ي (zaimku 1. os.) i pozostawienie kasry: يَا رَبِّ = O mój Panie! To bardzo częste w modlitwie i suplikacjach. Inne: يَا أُمِّ (= يَا أُمِّي, o matko!), يَا أَبِ (= يَا أَبِي, o ojcze!). Forma skrócona jest bardziej emocjonalna i poetycka."
            },
            {
                "id": "pa_voc8",
                "question": "يَا ذَا الجَلَالِ وَالإِكْرَامِ — 'ذَا' jest w:",
                "translation": "(ما إعراب ذَا في هذا النداء؟)",
                "options": ["Bierniku (منصوب) — منادى مضاف", "Mianowniku", "Dopełniaczu", "Nieodmiennym"],
                "correct": "Bierniku (منصوب) — منادى مضاف",
                "explanation": "Poprawnie: 'ذَا' w bierniku — to منادى مضاف (wołacz z idafą). ذَا الجَلَالِ = posiadaczu majestatu. ذُو (mianownik) → ذَا (biernik) → ذِي (dopełniacz). To jeden z 'pięciu imion' (الأسماء الخمسة) odmienianych przez samogłoski. يَا ذَا الجَلَالِ وَالإِكْرَامِ = O Posiadaczu majestatu i szlachetności! — zwrot do Boga w modlitwie."
            },
            {
                "id": "pa_voc9",
                "question": "يَا أَرْضُ اِبْلَعِي مَاءَكِ! (O ziemio, pochłoń swoją wodę! — Koran 11:44)",
                "translation": "(ما إعراب أَرْضُ؟)",
                "options": ["Wołacz prosty — مبنيّ على الضمّ", "Mianownik — podmiot", "Biernik — dopełnienie", "Dopełniacz"],
                "correct": "Wołacz prosty — مبنيّ على الضمّ",
                "explanation": "Poprawnie: 'أَرْضُ' — wołacz prosty (منادى مفرد عَلَم → مبنيّ على الضمّ). Z Koranu (11:44): يَا أَرْضُ اِبْلَعِي مَاءَكِ وَيَا سَمَاءُ أَقْلِعِي = O ziemio, pochłoń swoją wodę, i o niebo, przestań! Ten werset jest uważany za ARCYDZIEŁO retoryki arabskiej (بلاغة) — zawiera wołacz, rozkaz, personifikację i paralelizm w jednym zdaniu."
            },
            {
                "id": "pa_voc10",
                "question": "يَا حَسَنَاً! — co to za wołacz?",
                "translation": "(ما نوع هذا النداء؟)",
                "options": ["Wołacz nieokreślony (منادى نكرة غير مقصودة) — biernik", "Wołacz prosty — ḍamma", "Wołacz idafowy", "Błędna forma"],
                "correct": "Wołacz nieokreślony (منادى نكرة غير مقصودة) — biernik",
                "explanation": "Poprawnie: يَا حَسَنَاً = O coś pięknego! / O jakiż piękny! Wołacz nieokreślony nieintencjonalny (نكرة غير مقصودة) jest w BIERNIKU: حَسَناً (fatha + tanwīn). Porównaj: يَا رَجُلُ! (O człowiecze! — określony, intencjonalny → ḍamma) vs. يَا رَجُلاً! (O jakiż człowiek! — nieokreślony → biernik). Nieokreślony wołacz = wykrzyknienie/zdziwienie, nie bezpośredni zwrot."
            },
            {
                "id": "pa_voc11",
                "question": "يَا عَبْدَ اللهِ! — 'عَبْدَ' jest w bierniku, bo:",
                "translation": "(لماذا عَبْدَ منصوب؟)",
                "options": ["To wołacz z idafą (منادى مضاف)", "To dopełnienie bliższe", "To tamyīz", "To ḥāl"],
                "correct": "To wołacz z idafą (منادى مضاف)",
                "explanation": "Poprawnie: عَبْدَ = wołacz idafowy (منادى مضاف). عَبْدَ اللهِ = Sługo Boga (= ʿAbdullāh — imię!). Idafa: عَبْد + الله (dopełniacz). Wołacz idafowy ZAWSZE w bierniku. Inne: يَا أَبَا بَكْرٍ (O Abū Bakrze!), يَا أُمَّ المُؤمِنِينَ (O Matko wierzących!). Kunya (كُنْيَة = patronimik) w wołaczu: أَبُو → أَبَا (biernik), أُمُّ → أُمَّ (biernik)."
            },
            {
                "id": "pa_voc12",
                "question": "Forma wołacza dla اللهُ (Bóg) to:",
                "translation": "(ما صيغة نداء الله؟)",
                "options": ["اللَّهُمَّ!", "يَا اللهُ!", "يَا إلَهُ!", "أَيُّهَا اللهُ!"],
                "correct": "اللَّهُمَّ!",
                "explanation": "Poprawnie: 'اللَّهُمَّ' (Allāhumma) = O Boże! To WYJĄTKOWA forma — jedyny wyraz w arabskim, który łączy الـ + wołacz BEZ يَا. Zamiast يَا dodaje się مَّ na końcu: اللهُ + مَّ = اللَّهُمَّ. *يَا اللهُ jest rzadkie/dyskusyjne. اللَّهُمَّ jest NIEZWYKLE częste w modlitwie: اللَّهُمَّ اغْفِرْ لِي = O Boże, przebacz mi! To jedyny wyraz z taką formacją w całym języku."
            },
            {
                "id": "pa_voc13",
                "question": "يَا أَبَتِ! / يَا أُمَّتِ! — co oznacza ـتِ?",
                "translation": "(ما وظيفة التاء في يا أبتِ؟)",
                "options": ["Zastępuje ي dzierżawcze (= mój ojcze/moja matko)", "Końcówka żeńska", "Końcówka l. mn.", "Nic — ozdobna"],
                "correct": "Zastępuje ي dzierżawcze (= mój ojcze/moja matko)",
                "explanation": "Poprawnie: ـتِ w يَا أَبَتِ zastępuje ي (zaimek 1. os.). يَا أَبَتِ = يَا أَبِي = O mój ojcze! Z Koranu (Sura Yūsuf): 'يَا أَبَتِ إِنِّي رَأَيْتُ...' = O ojcze mój, widziałem... To specjalna forma wołacza poetycko-koranicznego. يَا أُمَّتِ = O moja matko! (rzadziej). Ta forma jest bardziej emocjonalna niż يَا أَبِي."
            },
            {
                "id": "pa_voc14",
                "question": "وَا مُعْتَصِمَاه! — 'وَا' oznacza:",
                "translation": "(ما معنى وَا في وَا معتصماه؟)",
                "options": ["Partykuła lamentu/wezwania o pomoc (نُدْبَة)", "To samo co يَا", "Spójnik 'i'", "Partykuła pytająca"],
                "correct": "Partykuła lamentu/wezwania o pomoc (نُدْبَة)",
                "explanation": "Poprawnie: وَا (wā) = partykuła lamentu (نُدْبَة). وَا مُعْتَصِمَاه! = O al-Muʿtaṣimie! (wołanie o pomoc). Historycznie: kobieta w Amorium wezwała kalifa al-Muʿtaṣima, który ruszył z armią. Gramatycznie: نُدْبَة używa وَا (nie يَا) + alif-ha na końcu: -َاه. To forma wyrażająca ból, żal lub desperackie wezwanie — nie zwykły wołacz."
            },
            {
                "id": "pa_voc15",
                "question": "Który wołacz jest poprawny?",
                "translation": "(أي نداء صحيح؟)",
                "options": ["يَا طَالِبَ المعرفةِ!", "يَا الطَّالِبُ!", "يَا طَالِبٍ!", "يَا الطَّالِبَ!"],
                "correct": "يَا طَالِبَ المعرفةِ!",
                "explanation": "Poprawnie: يَا طَالِبَ المعرفةِ! = O poszukiwaczu wiedzy! Wołacz idafowy w bierniku: طَالِبَ. BŁĘDNE: *يَا الطَّالِبُ (الـ bezpośrednio po يَا ❌ — trzeba أَيُّهَا), *يَا طَالِبٍ (dopełniacz po يَا ❌), *يَا الطَّالِبَ (الـ po يَا ❌). Reguły: يَا + prosty → ḍamma, يَا + idafa → biernik, يَا + الـ → trzeba أَيُّهَا/أَيَّتُهَا."
            }
        ]
    },
    {
        "key": "oath_expressions",
        "name": "Przysięga (القَسَم)",
        "description": "أسلوب القسم — والله/بالله/تالله",
        "iconName": "hand.raised",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {
                "id": "pa_oat1",
                "question": "_____ لَأَجْتَهِدَنَّ! (Na Boga, będę się starał!)",
                "translation": "(Na Boga, będę się starał!)",
                "options": ["وَاللهِ", "وَاللهُ", "وَاللهَ", "بِاللهَ"],
                "correct": "وَاللهِ",
                "explanation": "Poprawnie: 'وَاللهِ' (wallāhi) — przysięga z و (wāw al-qasam). و jest przyimkiem przysięgi + wyraz w DOPEŁNIACZU: اللهِ. Odpowiedź na przysięgę (جواب القسم) musi mieć لَـ + nun dobitny (نون التوكيد): لَأَجْتَهِدَنَّ (forma dobitna). W polskim: 'Na Boga!' — przyimek 'na' + biernik. W arabskim: و/بِ/تَ + dopełniacz. Trzy przyimki przysięgi!"
            },
            {
                "id": "pa_oat2",
                "question": "_____ لَا أَكْذِبُ! (Na Boga, nie kłamię!)",
                "translation": "(Na Boga, nie kłamię!)",
                "options": ["بِاللهِ", "بِاللهُ", "بِاللهَ", "مَعَ اللهِ"],
                "correct": "بِاللهِ",
                "explanation": "Poprawnie: 'بِاللهِ' (billāhi) — przysięga z بِ (bā al-qasam). بِ + dopełniacz. Uwaga na odpowiedź: لَا أَكْذِبُ (czas teraźniejszy + przeczenie). Reguły جواب القسم: 1) twierdzący przyszły: لَـ + نون التوكيد (لَأَفْعَلَنَّ); 2) twierdzący teraźniejszy: إنَّ + لَـ (إنِّي لَأَفْعَلُ); 3) przeczący: لَا + teraźniejszy (لَا أَفْعَلُ). Różne odpowiedzi = różne reguły!"
            },
            {
                "id": "pa_oat3",
                "question": "_____ لَقَدْ جِئْتُمْ شَيْئاً إِدّاً! (Na Boga, uczyniliście rzecz straszną! — Koran)",
                "translation": "(Na Boga, uczyniliście rzecz straszną! — Koran 19:89)",
                "options": ["تَاللهِ", "تَاللهُ", "تَاللهَ", "وَاللهِ"],
                "correct": "تَاللهِ",
                "explanation": "Poprawnie: 'تَاللهِ' (tallāhi) — przysięga z تَ (tā al-qasam). Najrzadszy z trzech przyimków. تَ używa się TYLKO z wyrazem الله (nie z innymi): *تَالقرآنِ ❌, ale وَالقرآنِ ✅. Z Koranu (19:89): silna przysięga wyrażająca szok. لَقَدْ = لَـ (przysięga) + قَدْ (potwierdzenie) — podwójne wzmocnienie. W polskim: 'Na Boga!' — jedno wyrażenie; w arabskim: trzy warianty z niuansami."
            },
            {
                "id": "pa_oat4",
                "question": "وَالعَصْرِ إِنَّ الإنسانَ لَفِي خُسْرٍ — 'وَالعَصْرِ' to:",
                "translation": "(ما إعراب والعصرِ؟)",
                "options": ["Przysięga — و القسم + dopełniacz", "Spójnik + podmiot", "Wołacz", "Okolicznik czasu"],
                "correct": "Przysięga — و القسم + dopełniacz",
                "explanation": "Poprawnie: 'وَالعَصْرِ' — przysięga koraniczna (Sura 103). و = wāw al-qasam (przyimek przysięgi), العَصْرِ w dopełniaczu = 'na czas/epokę'. Odpowiedź: إِنَّ الإنسانَ لَفِي خُسْرٍ (zaiste człowiek jest na stracie). إِنَّ + لَـ = wzorzec odpowiedzi przysięgi dla zdania imiennego. Koran często przysięga na elementy natury: وَالشَّمْسِ (na słońce), وَاللَّيْلِ (na noc)."
            },
            {
                "id": "pa_oat5",
                "question": "Odpowiedź przysięgi (جواب القسم) dla przyszłości twierdzenia wymaga:",
                "translation": "(ما حكم جواب القسم في المستقبل المثبت؟)",
                "options": ["لَـ + نون التوكيد (لَأَفْعَلَنَّ)", "مَا + فعل (ما أفعل)", "لَنْ + فعل (لن أفعل)", "سَوْفَ فقط"],
                "correct": "لَـ + نون التوكيد (لَأَفْعَلَنَّ)",
                "explanation": "Poprawnie: twierdzący przyszły po przysięgi: لَـ (lām al-qasam) + czas. teraź. + نون التوكيد الثقيلة (ـنَّ): وَاللهِ لَأَدْرُسَنَّ = Na Boga, BĘDĘ studiował! نون التوكيد zmienia samogłoskę: يَدْرُسُ → يَدْرُسَنَّ (fatha przed نَّ). Dwa typy: ثقيلة (-نَّ, podwojona, częstsza) i خفيفة (-نْ, lekka, rzadsza). W polskim nie ma odpowiednika — dobitność wyrażamy intonacją."
            },
            {
                "id": "pa_oat6",
                "question": "أُقْسِمُ بِاللهِ znaczy:",
                "translation": "(ماذا يعني أُقْسِمُ بِالله؟)",
                "options": ["Przysięgam na Boga (forma czasownikowa)", "Pytam Boga", "Modlę się do Boga", "Wierzę w Boga"],
                "correct": "Przysięgam na Boga (forma czasownikowa)",
                "explanation": "Poprawnie: 'أُقْسِمُ بِاللهِ' (uqsimu billāhi) = przysięgam na Boga. أَقْسَمَ (forma IV od ق-س-م) = przysiągł. To przysięga CZASOWNIKOWA (قسم بالفعل) — oprócz przyimkowej (قسم بالحرف: وَاللهِ). Obie formy poprawne, ale وَاللهِ jest krótsza i częstsza w mowie. أُقْسِمُ jest bardziej formalna. W Koranie: لَا أُقْسِمُ بِهَذَا البَلَدِ = przysięgam na to miasto (لَا tu jest wzmacniające, nie przeczące!)."
            },
            {
                "id": "pa_oat7",
                "question": "وَحَيَاتِكَ! znaczy:",
                "translation": "(ماذا يعني وحياتك؟)",
                "options": ["Na twoje życie! (przysięga)", "Z twoim życiem!", "Dla twojego życia!", "O twoje życie! (wołacz)"],
                "correct": "Na twoje życie! (przysięga)",
                "explanation": "Poprawnie: 'وَحَيَاتِكَ' (wa-ḥayātika) = Na twoje życie! — przysięga z و + dopełniacz. W arabskim można przysięgać na różne rzeczy: على حياتي (na moje życie), وَرَأسِي (na moją głowę), وَشَرَفِي (na mój honor). W islamie: przysięganie na coś INNEGO niż Bóg jest teologicznie dyskusyjne. Koran przysięga na stworzenia (وَالشَّمْسِ), ale to przywilej Boga."
            },
            {
                "id": "pa_oat8",
                "question": "لَعَمْرُكَ إِنَّهُمْ لَفِي سَكْرَتِهِمْ (Koran 15:72) — لَعَمْرُكَ to:",
                "translation": "(ما معنى لَعَمْرُكَ؟)",
                "options": ["Na twoje życie! (przysięga z لَـ)", "Twoje lata!", "Na twoją wiedzę!", "Z twoim wiekiem!"],
                "correct": "Na twoje życie! (przysięga z لَـ)",
                "explanation": "Poprawnie: 'لَعَمْرُكَ' = Na twoje życie! عَمْر = życie (w kontekście przysięgi, różne od عُمْر = wiek). لَـ = lām al-ibtidāʾ (lām rozpoczynająca). To przysięga skierowana do Proroka. Odpowiedź: إِنَّهُمْ لَفِي سَكْرَتِهِمْ = zaiste oni są w swoim upojeniu. Struktura: لَعَمْرُكَ jest خبر (orzeczeniem) ukrytego مبتدأ: (قَسَمِي) لَعَمْرُكَ = (moja przysięga to) twoje życie."
            },
            {
                "id": "pa_oat9",
                "question": "Przysięga z لَا + czas przeszły: وَاللهِ لَقَدْ نَجَحَ — znaczy:",
                "translation": "(ماذا يعني والله لقد نجح؟)",
                "options": ["Na Boga, on NAPRAWDĘ zdał!", "Na Boga, nie zdał!", "Na Boga, zda!", "Boże, niech zda!"],
                "correct": "Na Boga, on NAPRAWDĘ zdał!",
                "explanation": "Poprawnie: لَقَدْ نَجَحَ — przysięga potwierdzająca PRZESZŁOŚĆ. Wzorzec: لَـ (lām przysięgi) + قَدْ (potwierdzenie) + czas przeszły. لَقَدْ = 'zaiste/naprawdę już'. لَـ wzmacnia, قَدْ potwierdza, razem: absolutna pewność o przeszłym zdarzeniu. W polskim: 'Na Boga, on NAPRAWDĘ zdał!' — podwójne nacisk. Porównaj przyszły: لَيَنْجَحَنَّ (na pewno zda — z نون التوكيد)."
            },
            {
                "id": "pa_oat10",
                "question": "وَالَّذِي نَفْسِي بِيَدِهِ — to przysięga przez:",
                "translation": "(بماذا يُقسم في هذه العبارة؟)",
                "options": ["Tego, w którego ręku jest ma dusza (= Bóg)", "Swoją duszę", "Swoją rękę", "Proroka"],
                "correct": "Tego, w którego ręku jest ma dusza (= Bóg)",
                "explanation": "Poprawnie: 'وَالَّذِي نَفْسِي بِيَدِهِ' = Na Tego, w którego ręku jest moja dusza (= Bóg). Bardzo częsta forma przysięgi w hadisach (wypowiedziach Proroka). الَّذِي = który (zaimek względny), نَفْسِي = moja dusza, بِيَدِهِ = w Jego ręku. Forma peryfrastyczna — zamiast powiedzieć wprost 'Bóg', używa opisu. W polskim: 'Jak Boga kocham!' — też peryfrastyczna przysięga."
            },
            {
                "id": "pa_oat11",
                "question": "Przysięga z czasem przeszłym przeczącym: وَاللهِ مَا فَعَلْتُ — znaczy:",
                "translation": "(ماذا يعني والله ما فعلتُ؟)",
                "options": ["Na Boga, nie zrobiłem tego!", "Na Boga, zrobiłem to!", "Na Boga, zrobię to!", "Boże, co zrobiłem!"],
                "correct": "Na Boga, nie zrobiłem tego!",
                "explanation": "Poprawnie: مَا فَعَلْتُ = nie zrobiłem. W odpowiedzi przysięgi: przeczenie przeszłe = مَا + czas przeszły. BEZ لَـ (لَـ jest tylko w twierdzeniu). Porównaj: twierdzenie przeszłe: لَقَدْ فَعَلْتُ (zrobiłem), przeczenie przeszłe: مَا فَعَلْتُ (nie zrobiłem), twierdzenie przyszłe: لَأَفْعَلَنَّ (zrobię), przeczenie przyszłe: لَا أَفْعَلُ (nie zrobię). Cztery wzorce odpowiedzi!"
            },
            {
                "id": "pa_oat12",
                "question": "Sura 91 zaczyna się: وَالشَّمْسِ وَضُحَاهَا — ile przysiąg jest w niej?",
                "translation": "(كم قسماً في بداية سورة الشمس؟)",
                "options": ["11 przysiąg (najdłuższy ciąg w Koranie)", "3 przysięgi", "1 przysięga", "7 przysiąg"],
                "correct": "11 przysiąg (najdłuższy ciąg w Koranie)",
                "explanation": "Poprawnie: Sura 91 (الشمس) ma 11 przysiąg pod rząd — NAJDŁUŻSZY ciąg w Koranie! وَالشَّمْسِ (na słońce), وَالقَمَرِ (na księżyc), وَالنَّهَارِ (na dzień), وَاللَّيْلِ (na noc), وَالسَّمَاءِ (na niebo), وَالأَرْضِ (na ziemię), وَنَفْسٍ (na duszę)... Odpowiedź (جواب): قَدْ أَفْلَحَ مَنْ زَكَّاهَا = zaiste prosperował ten, kto ją oczyścił. 11 przysiąg → 1 odpowiedź!"
            },
            {
                "id": "pa_oat13",
                "question": "أَيْمُنُ اللهِ — staroarabska forma przysięgi, znaczy:",
                "translation": "(ماذا تعني أيمن الله؟)",
                "options": ["Na prawa/przysięgi Boga! (= przysięgam)", "Prawo Boga!", "Wiara Boga!", "Bóg jest prawy!"],
                "correct": "Na prawa/przysięgi Boga! (= przysięgam)",
                "explanation": "Poprawnie: 'أَيْمُنُ اللهِ' (aymunu llāhi) — archaiczna forma: أَيْمُن = l. mn. od يَمِين (prawica/przysięga). Dosł.: 'przysięgi Boga'. Skrócone do إِيمِ اللهِ w potocznym. W Koranie nie występuje, ale w hadisach i klasycznej prozie tak. Etymologia: يَمِين = prawica → przysięga (bo przysięgano podnosząc prawą rękę, jak w wielu kulturach, w tym polskiej — 'podnoszę rękę')."
            },
            {
                "id": "pa_oat14",
                "question": "Czy w arabskim KAŻDY wyraz po و na początku sury jest przysięga?",
                "translation": "(هل كل واو في بداية السورة واو قسم؟)",
                "options": ["Nie — و może być spójnik (عاطفة), nie tylko przysięga", "Tak — zawsze przysięga", "Nie — nigdy przysięga", "Tylko z الله"],
                "correct": "Nie — و może być spójnik (عاطفة), nie tylko przysięga",
                "explanation": "WAŻNE: و na początku zdania to albo وَاو القسم (przysięga) albo وَاو العطف (spójnik 'i'). Jak odróżnić? 1) Przysięga: + dopełniacz + odpowiedź z لَـ/إنَّ; 2) Spójnik: łączy dwa zdania/wyrazy. W Koranie na początku sury: zwykle przysięga (koraniczny kontekst). Ale وَقَالَ = 'i powiedział' — to spójnik. Kontekst decyduje!"
            },
            {
                "id": "pa_oat15",
                "question": "حَلَفَ بِاللهِ أَنَّهُ صَادِقٌ — 'حَلَفَ' to:",
                "translation": "(ما معنى حَلَفَ؟)",
                "options": ["Przysiągł (forma I od ح-ل-ف)", "Zmienił (od خ-ل-ف)", "Obrócił się", "Zaprzeczył"],
                "correct": "Przysiągł (forma I od ح-ل-ف)",
                "explanation": "Poprawnie: 'حَلَفَ' (ḥalafa) = przysiągł. Rdzeń: ح-ل-ف (przysięga). حَلَفَ بِاللهِ أَنَّهُ صَادِقٌ = przysiągł na Boga, że jest prawdomówny. Synonimy: أَقْسَمَ (forma IV od ق-س-م), آلَى (od أ-ل-ي). Rzeczownik: حَلِف/حِلْف (sojusz/przymierze — bo zawierany pod przysięgą), يَمِين (przysięga/prawica), قَسَم (przysięga). Porównaj: خَلَفَ (خ nie ح) = następował/zastępował — inny rdzeń!"
            }
        ]
    },
    {
        "key": "root_system",
        "name": "System rdzeni (الجُذُور)",
        "description": "نظام الجذور الثلاثية والرباعية",
        "iconName": "tree",
        "color": "#fbbf24",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_rs1",
                "question": "Rdzeń ك-ت-ب oznacza:",
                "translation": "(ما معنى جذر ك-ت-ب؟)",
                "options": ["Pisanie/zapisywanie", "Czytanie", "Mówienie", "Chodzenie"],
                "correct": "Pisanie/zapisywanie",
                "explanation": "Poprawnie: ك-ت-ب (k-t-b) = pisanie. Z tego rdzenia: كَتَبَ (pisał), كِتَاب (książka), كَاتِب (pisarz), مَكْتَب (biuro/biurko), مَكْتَبَة (biblioteka), كِتَابَة (pisanie), كُتُب (książki), مَكْتُوب (napisany), اِسْتَكْتَبَ (poprosił o napisanie). JEDEN rdzeń → DZIESIĄTKI wyrazów! To fundament arabskiego — rdzeń niesie ZNACZENIE PODSTAWOWE, wzorce dodają niuanse."
            },
            {
                "id": "pa_rs2",
                "question": "Większość rdzeni arabskich ma:",
                "translation": "(كم حرفاً في معظم الجذور العربية؟)",
                "options": ["3 spółgłoski (trójspółgłoskowe)", "2 spółgłoski", "4 spółgłoski", "5 spółgłosek"],
                "correct": "3 spółgłoski (trójspółgłoskowe)",
                "explanation": "Poprawnie: ~85% rdzeni arabskich to rdzenie TRÓJSPÓŁGŁOSKOWE (ثُلَاثِيّ): ك-ت-ب, ع-ل-م, ق-ر-أ. Istnieją też CZTEROSPÓŁGŁOSKOWE (رُبَاعِيّ): ت-ر-ج-م (tłumaczenie), ز-ل-ز-ل (trzęsienie). Rzadko pięciospółgłoskowe: ع-ن-ك-ب (pająk). W polskim: rdzenie nie są tak systematyczne — 'pisać/pismo/pisarz' mają wspólny rdzeń 'pis-', ale system jest mniej regularny niż arabski."
            },
            {
                "id": "pa_rs3",
                "question": "Z rdzenia ع-ل-م pochodzi:",
                "translation": "(ماذا يأتي من جذر ع-ل-م؟)",
                "options": ["عِلْم (wiedza), عَالِم (uczony), مَعْلُومَات (informacje)", "عَمَل (praca), عَامِل (robotnik)", "عَالَم (świat), عُمْر (wiek)", "عِلْم (wiedza), عَمَل (praca)"],
                "correct": "عِلْم (wiedza), عَالِم (uczony), مَعْلُومَات (informacje)",
                "explanation": "Poprawnie: ع-ل-م (ʿ-l-m) = wiedza/poznanie. Pochodne: عِلْم (wiedza), عَالِم (uczony — imiesłów czynny), مَعْلُوم (znany — imiesłów bierny), مَعْلُومَات (informacje), تَعْلِيم (nauczanie — masdar II), مُعَلِّم (nauczyciel — imiesłów II), عَلَّمَ (nauczył — forma II), تَعَلَّمَ (nauczył się — V). Uwaga: عَالَم (świat) to TEN SAM rdzeń! Świat = to, co jest poznawane."
            },
            {
                "id": "pa_rs4",
                "question": "Jak znaleźć rdzeń wyrazu 'مُسْتَشْفَى' (szpital)?",
                "translation": "(ما جذر مستشفى؟)",
                "options": ["ش-ف-ي (leczenie) — odejmij مُسْتَ i ى", "م-ش-ف (odkrywanie)", "س-ش-ف (badanie)", "ش-ف-ع (wstawianie się)"],
                "correct": "ش-ف-ي (leczenie) — odejmij مُسْتَ i ى",
                "explanation": "Poprawnie: rdzeń مُسْتَشْفَى to ش-ف-ي (shafā = wyleczył). Analiza: مُسْتَفْعَل → مُسْتَشْفَى = 'miejsce, gdzie szuka się leczenia'. Prefiks مُسْتَـ = wzorzec formy X (اِسْتَفْعَلَ). Jak wyodrębnić rdzeń? 1) Zidentyfikuj wzorzec (مُسْتَفْعَل), 2) Podstaw litery: مُسْتَـ(ش)ـ(فَ)ـ(ى) → ش-ف-ي. To jak łamigłówka — odejmij 'narzędzia gramatyczne', zostaje rdzeń!"
            },
            {
                "id": "pa_rs5",
                "question": "Rdzeń wyrazu 'اِسْتِقْلَال' (niepodległość) to:",
                "translation": "(ما جذر اِسْتِقْلال؟)",
                "options": ["ق-ل-ل (mało/niezależność)", "س-ق-ل (polerowanie)", "ق-ل-ع (wyrywanie)", "ق-ل-د (naśladowanie)"],
                "correct": "ق-ل-ل (mało/niezależność)",
                "explanation": "Poprawnie: ق-ل-ل (q-l-l) = mało/niezależnie. اِسْتَقَلَّ (forma X) = uniezależnił się (dosł.: uznał się za niezależnego/osobnego). اِسْتِقْلَال = masdar X = niepodległość. Wzorzec: اِسْتِفْعَال → اِسْتِقْلَال. Rdzeń podwojony: ق-ل-ل (ل powtórzone). قَلِيل = mało, قَلَّ = zmniejszył się, أَقَلَّ = zmniejszył, اِسْتَقَلَّ = uniezależnił się. Semantyczny łańcuch: mało → osobno → niezależnie!"
            },
            {
                "id": "pa_rs6",
                "question": "Które wyrazy mają TEN SAM rdzeń?",
                "translation": "(أي كلمات لها نفس الجذر؟)",
                "options": ["سَلَام, إِسْلَام, مُسْلِم", "سَلَام, سَمَاء, سَلِيم", "إِسْلَام, إِلْهَام, إِقْدَام", "مُسْلِم, مُعَلِّم, مُسَافِر"],
                "correct": "سَلَام, إِسْلَام, مُسْلِم",
                "explanation": "Poprawnie: rdzeń س-ل-م (s-l-m) = pokój/poddanie/bezpieczeństwo. سَلَام (pokój — masdar), إِسْلَام (islam = poddanie się Bogu — masdar IV), مُسْلِم (muzułmanin = poddający się — imiesłów IV), سَلَامَة (bezpieczeństwo), تَسْلِيم (oddanie — masdar II), اِسْتِسْلَام (kapitulacja — masdar X), سَلِيم (zdrowy/nienaruszony). Jeden rdzeń — cała rodzina semantyczna!"
            },
            {
                "id": "pa_rs7",
                "question": "Litery م, ا, ت, س, ن, و, ي na początku/końcu wyrazu są zazwyczaj:",
                "translation": "(حروف الزيادة — ما هي؟)",
                "options": ["Literami dodanymi (زَائِدَة) — nie częścią rdzenia", "Zawsze częścią rdzenia", "Samogłoskami", "Błędami"],
                "correct": "Literami dodanymi (زَائِدَة) — nie częścią rdzenia",
                "explanation": "Poprawnie: م, ا, ت, س, ن, و, ي — zapamiętaj je jako 'سَأَلْتُمُونِيهَا' (spytaliście mnie o nią). To litery DODANE (حُرُوف الزِيَادَة) — pojawiają się we wzorcach, ale NIE są częścią rdzenia. Np.: مَكْتَب: م = dodane, ك-ت-ب = rdzeń. اِسْتَخْرَجَ: اِسْتَ = dodane, خ-ر-ج = rdzeń. Jak znaleźć rdzeń? Odejmij حُرُوف الزِيَادَة. ALE: te litery MOGĄ być częścią rdzenia (نَامَ: ن jest rdzeniowe!)."
            },
            {
                "id": "pa_rs8",
                "question": "Rdzeń wyrazu 'مَدْرَسَة' (szkoła) to:",
                "translation": "(ما جذر مدرسة؟)",
                "options": ["د-ر-س (studiowanie)", "م-د-ر (zarządzanie)", "د-ر-ج (stopień)", "م-ر-س (ćwiczenie)"],
                "correct": "د-ر-س (studiowanie)",
                "explanation": "Poprawnie: د-ر-س (d-r-s) = studiowanie/uczenie się. مَدْرَسَة → wzorzec مَفْعَلَة = miejsce czynności. م = dodane (preambuła miejsca), ة = dodane (żeńskie). Rdzeń: د-ر-س. Z tego rdzenia: دَرَسَ (studiował), دَرْس (lekcja), مُدَرِّس (nauczyciel — II), تَدْرِيس (nauczanie — masdar II), دِرَاسَة (studia), دِرَاسِيّ (akademicki). مَفْعَل/مَفْعَلَة = wzorzec nazw MIEJSC: مَكْتَب, مَطْبَخ, مَسْجِد."
            },
            {
                "id": "pa_rs9",
                "question": "Czym różni się rdzeń od wzorca (وَزْن)?",
                "translation": "(ما الفرق بين الجذر والوزن؟)",
                "options": ["Rdzeń = znaczenie podstawowe, wzorzec = kategoria gramatyczna", "To samo", "Rdzeń jest dłuższy", "Wzorzec jest rzadszy"],
                "correct": "Rdzeń = znaczenie podstawowe, wzorzec = kategoria gramatyczna",
                "explanation": "KLUCZOWE rozróżnienie: RDZEŃ (جَذْر) = 3-4 spółgłoski niosące ZNACZENIE: ك-ت-ب = pisanie. WZORZEC (وَزْن) = szablon samogłosek/dodanych liter niosący KATEGORIĘ: فَاعِل = wykonawca czynności, مَفْعُول = obiekt czynności, فِعَال = masdar. Rdzeń × wzorzec = wyraz: ك-ت-ب × فَاعِل = كَاتِب (pisarz), ك-ت-ب × مَفْعُول = مَكْتُوب (napisany). To jak współrzędne: rdzeń = oś znaczenia, wzorzec = oś funkcji!"
            },
            {
                "id": "pa_rs10",
                "question": "Rdzeń ج-م-ع oznacza:",
                "translation": "(ما معنى جذر ج-م-ع؟)",
                "options": ["Zbieranie/łączenie", "Słuchanie", "Piękno", "Głód"],
                "correct": "Zbieranie/łączenie",
                "explanation": "Poprawnie: ج-م-ع (j-m-ʿ) = zbieranie/łączenie. جَمَعَ (zebrał), جَامِع (meczet piątkowy/zbiorczy), جَمْع (zbieranie/l. mnoga), مَجْمُوعَة (grupa/kolekcja), جَامِعَة (uniwersytet = 'zbierająca'), جُمْعَة (piątek = dzień zgromadzenia), اِجْتِمَاع (spotkanie — VII), مُجْتَمَع (społeczeństwo — imiesłów VIII), إِجْمَاع (konsensus — masdar IV). Rdzeń niesamowicie produktywny!"
            },
            {
                "id": "pa_rs11",
                "question": "Rdzeń wyrazu 'تَارِيخ' (historia) to:",
                "translation": "(ما جذر تاريخ؟)",
                "options": ["أ-ر-خ (datowanie)", "ت-ر-خ", "ت-ا-ر", "ر-و-خ"],
                "correct": "أ-ر-خ (datowanie)",
                "explanation": "Poprawnie: أ-ر-خ (ʾ-r-kh) = datowanie. تَارِيخ → wzorzec تَفْعِيل (masdar formy II): أَرَّخَ (forma II) = datował/zapisał datę → تَأْرِيخ → uproszczone: تَارِيخ. Uwaga: ت na początku = dodana (z wzorca), NIE część rdzenia! Alif (أ) na początku rdzenia jest 'ukryta' w formie تَارِيخ. To pułapka — początkowa ت wygląda jak rdzenikowa, ale jest częścią wzorca."
            },
            {
                "id": "pa_rs12",
                "question": "Ile rdzeni ma język arabski (szacunkowo)?",
                "translation": "(كم جذراً في اللغة العربية تقريباً؟)",
                "options": ["~10 000 rdzeni trójspółgłoskowych", "~500", "~100 000", "~1 000"],
                "correct": "~10 000 rdzeni trójspółgłoskowych",
                "explanation": "Szacunkowo: ~10 000 rdzeni trójspółgłoskowych (+~2000 czterospółgłoskowych). Z każdego rdzenia: 10-50+ wyrazów. Łączny słownik: >100 000 wyrazów. Porównaj z polskim: ~150 000 haseł, ale rdzenie nie są tak systematycznie zorganizowane. Matematycznie: 28 liter × 28 × 28 = 21 952 możliwych kombinacji, ale nie wszystkie istnieją (~45% wypełnione). System rdzeni to GENIALNA kompresja — mała liczba 'atomów' → ogromna liczba wyrazów."
            },
            {
                "id": "pa_rs13",
                "question": "Rdzeń ح-ر-م oznacza:",
                "translation": "(ما معنى جذر ح-ر-م؟)",
                "options": ["Zakazywanie/świętość", "Kochanie", "Wyjazd", "Pisanie"],
                "correct": "Zakazywanie/świętość",
                "explanation": "Poprawnie: ح-ر-م (ḥ-r-m) = zakazywanie/to, co chronione/święte. حَرَمَ (zakazał), حَرَام (zabronione), حَرِيم (harem = strefa chroniona), مُحَرَّم (miesiąc Muḥarram = 'zakazany' — walka zakazana), إِحْرَام (stan pielgrzymkowy), حُرْمَة (świętość/nienaruszalność), مَحْرَم (krewny zakazany do małżeństwa). Fascynujące: 'zakaz' i 'świętość' to TEN SAM rdzeń — co święte jest zakazane do naruszenia!"
            },
            {
                "id": "pa_rs14",
                "question": "Wyrazy مَلِك (król), مِلْك (posiadłość), مَالِك (właściciel) mają rdzeń:",
                "translation": "(ما الجذر المشترك؟)",
                "options": ["م-ل-ك (panowanie/posiadanie)", "م-ل-ق (pochlebstwo)", "م-ل-أ (napełnianie)", "ل-ك-م (bicie)"],
                "correct": "م-ل-ك (panowanie/posiadanie)",
                "explanation": "Poprawnie: م-ل-ك (m-l-k) = panowanie/posiadanie. مَلِك (król), مَلِكَة (królowa), مُلْك (królestwo), مِلْك (posiadłość), مَالِك (właściciel), مَمْلَكَة (królestwo/monarchia), تَمَلُّك (posiadanie), مَمْلُوك (niewolnik — dosł. 'posiadany'), مَلَاك (anioł — dosł. 'zwiastun'). W polskim: 'król/królestwo/królewski' — ten sam rdzeń 'król-', ale mniej systematyczny niż arabski."
            },
            {
                "id": "pa_rs15",
                "question": "Jaki rdzeń łączy: كَلِمَة (słowo), تَكَلَّمَ (mówił), مُتَكَلِّم (mówca)?",
                "translation": "(ما الجذر المشترك؟)",
                "options": ["ك-ل-م (mowa/mówienie)", "ك-ل-ف (kosztowanie)", "ك-م-ل (doskonałość)", "ل-ك-م (bicie)"],
                "correct": "ك-ل-م (mowa/mówienie)",
                "explanation": "Poprawnie: ك-ل-م (k-l-m) = mowa. كَلِمَة (słowo), كَلَام (mowa/dyskurs), تَكَلَّمَ (mówił — forma V), مُتَكَلِّم (mówca/1. osoba gram. — imiesłów V), كَلَّمَ (rozmawiał z — forma II). Ciekawostka: عِلْم الكَلَام = teologia islamska (dosł. 'nauka mowy/dyskursu'). W gramatyce: المُتَكَلِّم = 1. osoba (ja/my), bo 'mówca'. Rdzeń w kulturze arabskiej = fundament myślenia językowego!"
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
