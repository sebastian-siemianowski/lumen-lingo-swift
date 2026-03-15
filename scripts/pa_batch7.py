import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "accusative_case",
        "name": "Biernik (المنصوب)",
        "description": "حالة النصب في اللغة العربية",
        "iconName": "arrow.down.right",
        "color": "#4ade80",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_acc1",
                "question": "قَرَأَ الطالبُ _____ (Student przeczytał książkę)",
                "translation": "(Student przeczytał książkę)",
                "options": ["الكتابَ", "الكتابُ", "الكتابِ", "كتاباً"],
                "correct": "الكتابَ",
                "explanation": "Poprawnie: 'الكتابَ' (al-kitāba) z fathą na końcu = biernik (منصوب). Dopełnienie bliższe (مفعول به) czasownika przechodniego stoi ZAWSZE w bierniku. قَرَأَ (czytał) wymaga dopełnienia: co czytał? → الكتابَ. W polskim: 'książkę' (biernik, nie 'książka'). System identyczny — zmiana końcówki wskazuje funkcję w zdaniu."
            },
            {
                "id": "pa_acc2",
                "question": "Które z tych zdań ma poprawny biernik?",
                "translation": "(أي جملة فيها منصوب صحيح؟)",
                "options": ["أكلتُ تفاحةً", "أكلتُ تفاحةٌ", "أكلتُ تفاحةٍ", "أكلتُ التفاحةُ"],
                "correct": "أكلتُ تفاحةً",
                "explanation": "Poprawnie: 'أكلتُ تفاحةً' = Zjadłem jabłko. تفاحةً z tanwinem fatha (ـًـ) = biernik nieokreślony. Reguła: rzeczowniki nieokreślone w bierniku mają tanwin fatha: كتاباً, تفاحةً, رسالةً. UWAGA: tanwin fatha pisze się na alif (ـاً) oprócz słów z tā' marbūṭa (ة) i hamzą (ء) po alif. Np.: كِتَاباً (z alif), تُفَّاحةً (bez alif — bo ة)."
            },
            {
                "id": "pa_acc3",
                "question": "سافرتُ _____ (Podróżowałem pieszo) — przysłówek halu",
                "translation": "(Podróżowałem pieszo)",
                "options": ["ماشياً", "ماشيٌ", "ماشيِ", "الماشي"],
                "correct": "ماشياً",
                "explanation": "Poprawnie: 'ماشياً' (māshiyan) = pieszo (dosł. idąc). To حال (ḥāl) — okolicznik stanu, ZAWSZE w bierniku. حال odpowiada polskiemu imiesłowowi przysłówkowemu: 'idąc'. Inne przykłady: جاءَ ضاحكاً (przyszedł śmiejąc się), جلستُ صامتاً (siedziałem milcząc). Reguła: حال opisuje STAN podmiotu podczas czynności i stoi w bierniku (منصوب)."
            },
            {
                "id": "pa_acc4",
                "question": "ذهبتُ إلى المدرسة _____ (Poszedłem do szkoły rano)",
                "translation": "(Poszedłem do szkoły rano)",
                "options": ["صباحاً", "صباحٌ", "صباحِ", "الصباحَ"],
                "correct": "صباحاً",
                "explanation": "Poprawnie: 'صباحاً' (ṣabāḥan) = rano. To ظرف زمان (okolicznik czasu) w bierniku. Czasowe i miejscowe okoliczniki stoją w bierniku (منصوب): صباحاً (rano), مساءً (wieczorem), يوماً (pewnego dnia), شمالاً (na północ). W polskim: 'rano' nie odmienia się; w arabskim ma fathę/tanwin. Biernik jest 'domyślnym' przypadkiem przysłówków arabskich."
            },
            {
                "id": "pa_acc5",
                "question": "كانَ الجوُّ _____ (Pogoda była piękna) — orzecznik كان",
                "translation": "(Pogoda była piękna)",
                "options": ["جميلاً", "جميلٌ", "جميلٍ", "الجميلَ"],
                "correct": "جميلاً",
                "explanation": "Poprawnie: 'جميلاً' (jamīlan) = piękna (biernik). Po كَانَ i 'siostry' (أصبحَ, ظلَّ, ليسَ itd.): podmiot → mianownik (اسم كان), orzecznik → BIERNIK (خبر كان). كانَ الجوُّ (mianownik) جميلاً (biernik). W polskim: 'Pogoda BYŁA piękna' — narzędnik!. Arabski: biernik. To kluczowa różnica — zapamiętaj: خبر كان = منصوب."
            },
            {
                "id": "pa_acc6",
                "question": "إنَّ _____ مجتهدٌ (Zaiste student jest pilny) — podmiot إنَّ",
                "translation": "(Zaiste student jest pilny)",
                "options": ["الطالبَ", "الطالبُ", "الطالبِ", "طالباً"],
                "correct": "الطالبَ",
                "explanation": "Poprawnie: 'الطالبَ' (aṭ-ṭāliba) w bierniku. Po إنَّ i 'siostry' (أنَّ, لكنَّ, لعلَّ, ليتَ, كأنَّ): podmiot → BIERNIK (اسم إنّ), orzecznik → mianownik (خبر إنّ). Odwrotnie niż normalnie! إنَّ الطالبَ (biernik) مجتهدٌ (mianownik). Porównaj: الطالبُ مجتهدٌ (zdanie nominalne bez إنّ — oba w mianowniku). إنّ 'odwraca' przypadek podmiotu."
            },
            {
                "id": "pa_acc7",
                "question": "ما أجملَ _____! (Jak piękne jest niebo!)",
                "translation": "(Jak piękne jest niebo!)",
                "options": ["السماءَ", "السماءُ", "السماءِ", "سماءً"],
                "correct": "السماءَ",
                "explanation": "Poprawnie: 'السماءَ' (as-samāʾa) w bierniku. To صيغة التعجّب (forma wykrzyknikowa): ما أفعلَ + rzeczownik w bierniku! ما أجملَ السماءَ = Jak piękne jest niebo! (dosł. Co uczyniło niebo pięknym!). Rzeczownik po أفعلَ ZAWSZE w bierniku. Inna forma: أجمِلْ بالسماءِ! (z przyimkiem بـ). Obie formy = 'Jakże piękne niebo!'"
            },
            {
                "id": "pa_acc8",
                "question": "جاءَ الطلابُ إلّا _____ (Przyszli studenci oprócz Alego)",
                "translation": "(Przyszli studenci oprócz Alego)",
                "options": ["عليّاً", "عليٌّ", "عليٍّ", "عليَّ"],
                "correct": "عليّاً",
                "explanation": "Poprawnie: 'عليّاً' (ʿAliyyan) w bierniku. Po إلّا (oprócz) w zdaniu twierdzącym pełnym: wyjątek (المستثنى) stoi w BIERNIKU. جاءَ الطلابُ (zdanie pełne, twierdzące) إلّا عليّاً (biernik). Ale: ما جاءَ إلّا عليٌّ (zdanie niepełne — po إلّا mianownik, bo عليّ jest podmiotem). Reguła إلّا zależy od typu zdania!"
            },
            {
                "id": "pa_acc9",
                "question": "اشتريتُ عشرينَ _____ (Kupiłem dwadzieścia książek) — تمييز",
                "translation": "(Kupiłem dwadzieścia książek)",
                "options": ["كتاباً", "كتابٌ", "كتابٍ", "كُتُبٍ"],
                "correct": "كتاباً",
                "explanation": "Poprawnie: 'كتاباً' (kitāban) = książek (l. poj.! w bierniku). To تمييز (tamyīz = specyfikacja): po liczebnikach 11-99 rzeczownik stoi w bierniku l. POJEDYNCZEJ. عشرينَ كتاباً (20 książek — dosł. 'dwadzieścia książką'). W polskim: 'dwadzieścia książek' (dopełniacz l. mn.). Arabski: biernik l. poj. To jedna z najdziwniejszych reguł arabskiej składni dla Polaków."
            },
            {
                "id": "pa_acc10",
                "question": "Który wyraz jest مفعولاً مطلقاً (dopełnienie bezwzględne)?",
                "translation": "(ما المفعول المطلق؟)",
                "options": ["ضرباً شديداً (uderzenie silne)", "الكتابَ (książkę)", "صباحاً (rano)", "ماشياً (idąc)"],
                "correct": "ضرباً شديداً (uderzenie silne)",
                "explanation": "Poprawnie: 'ضرباً شديداً' = silne uderzenie — dopełnienie bezwzględne (مفعول مطلق). Jest to masdar od tego samego czasownika, w bierniku: ضَرَبَ ضرباً شديداً (uderzył silnym uderzeniem). Wzmacnia lub określa czynność. الكتابَ = مفعول به (dopełnienie bliższe), صباحاً = ظرف زمان (okolicznik czasu), ماشياً = حال (okolicznik stanu). Wszystkie w bierniku, ale RÓŻNE funkcje!"
            },
            {
                "id": "pa_acc11",
                "question": "سافرتُ _____ العلم (Podróżowałem dla nauki) — مفعول لأجله",
                "translation": "(Podróżowałem dla nauki)",
                "options": ["طلباً لِـ", "طلبٌ لِـ", "طلبِ", "الطلبَ"],
                "correct": "طلباً لِـ",
                "explanation": "Poprawnie: 'طلباً للعلمِ' = dla poszukiwania nauki. To مفعول لأجله (dopełnienie celowe) — masdar w bierniku wyrażający CEL czynności. Odpowiada polskiemu 'dla/w celu': 'Podróżowałem w celu zdobycia wiedzy'. Warunki: 1) masdar, 2) nieokreślony, 3) ten sam podmiot co czasownik, 4) wyraża przyczynę/cel. Jeśli nie spełnia — używamy لِـ + dopełniacz."
            },
            {
                "id": "pa_acc12",
                "question": "رأيتُ الولدَ _____ (Widziałem chłopca biegnącego) — حال",
                "translation": "(Widziałem chłopca biegnącego)",
                "options": ["راكضاً", "راكضٌ", "الراكضَ", "راكضٍ"],
                "correct": "راكضاً",
                "explanation": "Poprawnie: 'راكضاً' (rākiḍan) = biegnąc/biegnącego — حال (okolicznik stanu) w bierniku, nieokreślony. Opisuje stan الولد (chłopca) w momencie widzenia. Reguły حال: 1) ZAWSZE w bierniku, 2) prawie ZAWSZE nieokreślony (راكضاً, nie الراكضَ), 3) zgadza się w rodzaju/liczbie z صاحب الحال (właścicielem stanu). Dla dziewczynki: راكضةً."
            },
            {
                "id": "pa_acc13",
                "question": "يا _____ (O studencie!) — منادى",
                "translation": "(O studencie! — wołacz)",
                "options": ["طالبُ", "طالباً", "طالبَ", "طالبِ"],
                "correct": "طالبُ",
                "explanation": "Uwaga-pułapka! 'يا طالبُ' — wołacz pojedynczy nieokreślony to MIANOWNIK (مبني على الضم), NIE biernik! Ale: يا طالباً مجتهداً (z przymiotnikiem) → biernik. Wołacz ma złożone reguły: يا طالبُ (prosty), يا طالبَ العلمِ (idafa — biernik), يا أيّها الطالبُ (z أيّها — mianownik). Wołacz to jeden z najtrudniejszych tematów i-rābu."
            },
            {
                "id": "pa_acc14",
                "question": "لَنْ _____ (Nie pójdę) — po لَنْ",
                "translation": "(Nie pójdę)",
                "options": ["أذهبَ", "أذهبُ", "أذهبْ", "ذهبتُ"],
                "correct": "أذهبَ",
                "explanation": "Poprawnie: 'لَنْ أذهبَ' (lan adhhaba) = nie pójdę. Po لَنْ (nigdy/nie będę): czasownik w trybie łączącym (منصوب) — z fathą na końcu. Porównaj: أذهبُ (ḍamma = مرفوع, wskaźnikowy), أذهبَ (fatha = منصوب, łączący), أذهبْ (sukun = مجزوم, warunkowy). Partykuły nasb: أَنْ, لَنْ, كَيْ, حتّى, لِـ (celowe). Po nich ZAWSZE fatha."
            },
            {
                "id": "pa_acc15",
                "question": "Ile typów biernika (منصوب) wymieniono w tej kategorii?",
                "translation": "(كم نوعاً من المنصوبات ذُكر؟)",
                "options": ["7 (مفعول به, حال, ظرف, خبر كان, اسم إنّ, تمييز, مفعول مطلق)", "3", "10", "1"],
                "correct": "7 (مفعول به, حال, ظرف, خبر كان, اسم إنّ, تمييز, مفعول مطلق)",
                "explanation": "W arabskim jest co najmniej 15 typów منصوبات! Omówiliśmy 7 głównych: 1) مفعول به (dopełnienie bliższe), 2) حال (okolicznik stanu), 3) ظرف (okolicznik czasu/miejsca), 4) خبر كان (orzecznik كان), 5) اسم إنّ (podmiot إنّ), 6) تمييز (specyfikacja), 7) مفعول مطلق (dopełnienie bezwzgl.). Jeszcze: مفعول لأجله (cel), مفعول معه (towarzyszenie), منادى (wołacz), مستثنى (wyjątek). Biernik to NAJCZĘSTSZY przypadek!"
            }
        ]
    },
    {
        "key": "genitive_case",
        "name": "Dopełniacz (المجرور)",
        "description": "حالة الجرّ في اللغة العربية",
        "iconName": "arrow.down.left",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_gen1",
                "question": "ذهبتُ إلى _____ (Poszedłem do szkoły)",
                "translation": "(Poszedłem do szkoły)",
                "options": ["المدرسةِ", "المدرسةُ", "المدرسةَ", "مدرسةً"],
                "correct": "المدرسةِ",
                "explanation": "Poprawnie: 'المدرسةِ' (al-madrasati) z kasrą = dopełniacz (مجرور). Po przyimku (حرف جر) rzeczownik ZAWSZE w dopełniaczu. إلى (do) + المدرسةِ. Inne przyimki: في (w), من (z/od), على (na), عن (o), بـ (z/przez), لـ (dla). W polskim: 'do szkoły' — też dopełniacz! Tu systemy są zbieżne."
            },
            {
                "id": "pa_gen2",
                "question": "كتابُ _____ (Książka studenta) — إضافة",
                "translation": "(Książka studenta)",
                "options": ["الطالبِ", "الطالبُ", "الطالبَ", "طالبٍ"],
                "correct": "الطالبِ",
                "explanation": "Poprawnie: 'الطالبِ' (aṭ-ṭālibi) w dopełniaczu. W konstrukcji إضافة (idafa = posiadanie): drugi wyraz ZAWSZE w dopełniaczu. كتابُ (mianownik — bo podmiot) الطالبِ (dopełniacz — posiadacz). W polskim: 'książka studenta' — dopełniacz! Identyczna logika. Reguła: w idafa pierwszy wyraz NIE ma rodzajnika ani tanwinu, drugi ma kasrę."
            },
            {
                "id": "pa_gen3",
                "question": "في بيتِ _____ (W domu nauczyciela) — podwójna إضافة",
                "translation": "(W domu nauczyciela)",
                "options": ["المعلمِ", "المعلمُ", "المعلمَ", "معلمٌ"],
                "correct": "المعلمِ",
                "explanation": "Poprawnie: 'المعلمِ' (al-muʿallimi) w dopełniaczu. W łańcuchu إضافة WSZYSTKIE wyrazy po pierwszym są w dopełniaczu: في (przyimek) بيتِ (dopełniacz po في) المعلمِ (dopełniacz jako مضاف إليه). Łańcuchy mogą być długie: كتابُ ابنِ معلمِ المدرسةِ (książka syna nauczyciela szkoły) — 4 dopełniacze z rzędu!"
            },
            {
                "id": "pa_gen4",
                "question": "Tanwin kasra (ـٍ) oznacza:",
                "translation": "(ماذا يعني التنوين بالكسر؟)",
                "options": ["Dopełniacz nieokreślony", "Mianownik nieokreślony", "Biernik nieokreślony", "Określony dopełniacz"],
                "correct": "Dopełniacz nieokreślony",
                "explanation": "Tanwin kasra (ـٍ) = dopełniacz nieokreślony: كتابٍ (jakiejś książki). Porównaj 3 tanwiny: كتابٌ (mianownik — ـٌ), كتاباً (biernik — ـاً), كتابٍ (dopełniacz — ـٍ). Z rodzajnikiem (określony): الكتابُ, الكتابَ, الكتابِ — bez tanwinu, ale z odpowiednią samogłoską. Tanwin NIGDY nie występuje z الـ. To jak 'a book' vs. 'the book' w angielskim."
            },
            {
                "id": "pa_gen5",
                "question": "مررتُ بـ_____ (Przeszedłem obok domu) — po بـ",
                "translation": "(Przeszedłem obok domu)",
                "options": ["البيتِ", "البيتُ", "البيتَ", "بيتاً"],
                "correct": "البيتِ",
                "explanation": "Poprawnie: 'البيتِ' (al-bayti) w dopełniaczu po بـ (przez/obok). Przyimek بـ jest klitykiem — łączy się bezpośrednio z następnym wyrazem: بـ+البيت = بالبيتِ. Inne klityki-przyimki: لـ (dla/do), كـ (jak). Uwaga: لـ + الـ = لِلـ (nie *لالـ): لِلبيتِ (dla domu). كـ + الـ = كالـ: كالبيتِ (jak dom)."
            },
            {
                "id": "pa_gen6",
                "question": "هذا أحدُ _____ (To jeden ze studentów) — diptot w dopełniaczu",
                "translation": "(To jeden ze studentów)",
                "options": ["الطلّابِ", "الطلّابُ", "الطلّابَ", "طلّاباً"],
                "correct": "الطلّابِ",
                "explanation": "Poprawnie: 'الطلّابِ' (aṭ-ṭullābi) w dopełniaczu po أحد (jeden z). Konstrukcja أحد/إحدى + dopełniacz = 'jeden z'. Uwaga: طُلّاب to l. mn. łamana — odmienia się regularnie z kasrą w dopełniaczu, gdy ma الـ. BEZ الـ byłby diptot (ممنوع من الصرف)? Nie — طلّاب nie jest diptotem. Diptoty mają fathę zamiast kasry: مساجِدَ (meczetów), nie مساجِدِ."
            },
            {
                "id": "pa_gen7",
                "question": "ذهبتُ إلى مساجدَ كثيرةٍ (Chodziłem do wielu meczetów) — dlaczego مساجدَ z fathą?",
                "translation": "(لماذا مساجدَ بالفتحة؟)",
                "options": ["Bo to diptot (ممنوع من الصرف) — fatha zamiast kasry", "Bo to biernik", "Błąd — powinno być مساجدِ", "Bo jest po إلى"],
                "correct": "Bo to diptot (ممنوع من الصرف) — fatha zamiast kasry",
                "explanation": "Diptoty (ممنوع من الصرف) mają w dopełniaczu FATHĘ zamiast kasry: مساجدَ (nie *مساجدِ). Diptoty to: 1) l. mn. łamana na wzór مَفَاعِل/مَفَاعِيل: مساجد, مكاتب, مفاتيح, 2) imiona własne: أحمدَ, عمرَ, 3) przymiotniki na أفعل: أكبرَ. ALE: z الـ → normalna kasra: المساجدِ (dopełniacz z kasrą!). Diptot 'wraca do normy' z rodzajnikiem."
            },
            {
                "id": "pa_gen8",
                "question": "سافرتُ مع _____ (Podróżowałem z Ahmedem)",
                "translation": "(Podróżowałem z Ahmedem)",
                "options": ["أحمدَ", "أحمدُ", "أحمدٍ", "أحمداً"],
                "correct": "أحمدَ",
                "explanation": "Poprawnie: 'أحمدَ' (Aḥmada) z FATHĄ (nie kasrą!). مع (z) to przyimek → dopełniacz. Ale أحمد to diptot (imię na wzorze أفعل) → fatha zamiast kasry w dopełniaczu. W polskim: 'z Ahmedem' (narzędnik). Tu potrójna trudność: 1) przyimek → dopełniacz, 2) ale diptot → fatha zamiast kasry, 3) imię własne → bez tanwinu."
            },
            {
                "id": "pa_gen9",
                "question": "Rzeczownik po كُلّ (każdy/wszyscy) jest w:",
                "translation": "(ما إعراب ما بعد كلّ؟)",
                "options": ["Dopełniaczu (مجرور) — bo إضافة", "Mianowniku", "Bierniku", "Zależy od kontekstu"],
                "correct": "Dopełniaczu (مجرور) — bo إضافة",
                "explanation": "Poprawnie: po كُلّ → dopełniacz, bo to إضافة. كُلُّ طالبٍ (każdy student) = كُلّ + طالبٍ. Inne słowa-kwantyfikatory z إضافة: بعض (niektórzy), جميع (wszyscy), كثير من (wielu z), قليل من (mało z). Uwaga: كلّ może być też przysłówkiem: 'كلّ يومٍ' = codziennie (każdego dnia — dopełniacz). To jak polski: 'każdego dnia' — dopełniacz!"
            },
            {
                "id": "pa_gen10",
                "question": "هذا بابُ _____ الأماميُّ (To przednie drzwi domu)",
                "translation": "(To przednie drzwi domu)",
                "options": ["البيتِ", "البيتُ", "البيتَ", "بيتٌ"],
                "correct": "البيتِ",
                "explanation": "Poprawnie: 'البيتِ' w dopełniaczu — مضاف إليه w إضافة. Struktura: بابُ (drzwi) البيتِ (domu) الأماميُّ (przednie). Przymiotnik الأماميُّ odnosi się do بابُ (nie البيت) → mianownik (jak باب). Reguła: przymiotnik po إضافة odnosi się do PIERWSZEGO wyrazu i zgadza się z NIM w przypadku i rodzaju."
            },
            {
                "id": "pa_gen11",
                "question": "مِنْ أحسنِ _____ (Z najlepszych ludzi)",
                "translation": "(Z najlepszych ludzi)",
                "options": ["الناسِ", "الناسُ", "الناسَ", "ناساً"],
                "correct": "الناسِ",
                "explanation": "Poprawnie: 'الناسِ' (an-nāsi) w dopełniaczu. مِنْ (z/spośród) → dopełniacz + أحسنِ (najlepsza — إضافة z أفعل التفضيل) → الناسِ (dopełniacz jako مضاف إليه). Podwójny powód dopełniacza: 1) po مِنْ, 2) مضاف إليه po أحسنِ. W stopniu najwyższym (أفعل): struktura أفعلُ + dopełniacz = najlepszy z/z czegoś."
            },
            {
                "id": "pa_gen12",
                "question": "ما عندي _____ (Nie mam pieniędzy) — po عند",
                "translation": "(Nie mam pieniędzy)",
                "options": ["مالٍ", "مالٌ", "مالاً", "المالُ"],
                "correct": "مالٍ",
                "explanation": "Uwaga! To pytanie-pułapka. عندي = عند + ي (zaimek). مالٍ to podmiot zdania (ما عندي مالٌ = nie mam pieniędzy). Poprawna odpowiedź to MIANOWNIK: مالٌ, nie dopełniacz مالٍ. Ale w potocznym 'ما عندي مالٍ' (z kasrą po negacji). W MSA formalnym: مالٌ (mianownik jako مبتدأ مؤخّر). To subtelna kwestia — w praktyce oba się spotyka."
            },
            {
                "id": "pa_gen13",
                "question": "قبلَ _____ (Przed lekcją) — ظرف + إضافة",
                "translation": "(Przed lekcją)",
                "options": ["الدرسِ", "الدرسُ", "الدرسَ", "درساً"],
                "correct": "الدرسِ",
                "explanation": "Poprawnie: 'الدرسِ' (ad-darsi) w dopełniaczu. قبلَ (przed) i بعدَ (po) to okoliczniki czasu (ظرف زمان) — same w bierniku, ale tworzą إضافة z następnym rzeczownikiem → dopełniacz: قبلَ الدرسِ, بعدَ الدرسِ. Inne ظروف z إضافة: فوقَ (nad), تحتَ (pod), أمامَ (przed), وراءَ (za). Wszystkie rządzą dopełniaczem!"
            },
            {
                "id": "pa_gen14",
                "question": "Ile jest przyimków w arabskim (حروف الجرّ)?",
                "translation": "(كم عدد حروف الجر؟)",
                "options": ["Około 20 (من, إلى, في, على, عن, بـ, لـ, كـ, حتّى, مُذْ, مُنْذُ...)", "3", "50", "Tylko 7"],
                "correct": "Około 20 (من, إلى, في, على, عن, بـ, لـ, كـ, حتّى, مُذْ, مُنْذُ...)",
                "explanation": "Gramatycy arabscy wymieniają ok. 20 przyimków: مِنْ (z/od), إِلَى (do), فِي (w), عَلَى (na), عَنْ (o/od), بـ (z/przez), لـ (dla/do), كـ (jak), حَتَّى (aż do), مُذْ/مُنْذُ (od — czas), رُبَّ (niejeden), واو القسم (waw przysięgi), تاء القسم (tā' przysięgi), خَلَا/عَدَا/حَاشَا (oprócz). Każdy rządzi dopełniaczem. Najczęstsze 7: من, إلى, في, على, عن, بـ, لـ."
            },
            {
                "id": "pa_gen15",
                "question": "Który z tych wyrazów NIE jest w dopełniaczu?",
                "translation": "(أيّ كلمة ليست مجرورة؟)",
                "options": ["كتاباً", "المدرسةِ", "البيتِ", "أحمدَ"],
                "correct": "كتاباً",
                "explanation": "Poprawnie: 'كتاباً' z tanwinem fatha = BIERNIK, nie dopełniacz. Pozostałe: المدرسةِ (kasra = dopełniacz), البيتِ (kasra = dopełniacz), أحمدَ (fatha = dopełniacz DIPTOTU — fatha zamiast kasry!). Kluczowe rozróżnienie: fatha na zwykłym rzeczowniku = biernik, ale fatha na diptocie = może być biernik LUB dopełniacz. Kontekst rozstrzyga!"
            }
        ]
    },
    {
        "key": "nominative_case",
        "name": "Mianownik (المرفوع)",
        "description": "حالة الرفع في اللغة العربية",
        "iconName": "arrow.up",
        "color": "#22d3ee",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_nom1",
                "question": "_____ جميلةٌ (Szkoła jest piękna) — podmiot",
                "translation": "(Szkoła jest piękna)",
                "options": ["المدرسةُ", "المدرسةَ", "المدرسةِ", "مدرسةً"],
                "correct": "المدرسةُ",
                "explanation": "Poprawnie: 'المدرسةُ' (al-madrasatu) z ḍammą = mianownik (مرفوع). Podmiot (مبتدأ) zdania nominalnego ZAWSZE w mianowniku. المدرسةُ (podmiot) جميلةٌ (orzecznik — też mianownik). W polskim: 'Szkoła jest piękna' — mianownik. Identyczne logicznie. Mianownik = 'domyślny' przypadek podmiotu w obu językach."
            },
            {
                "id": "pa_nom2",
                "question": "جاءَ _____ (Przyszedł nauczyciel) — فاعل",
                "translation": "(Przyszedł nauczyciel)",
                "options": ["المعلمُ", "المعلمَ", "المعلمِ", "معلماً"],
                "correct": "المعلمُ",
                "explanation": "Poprawnie: 'المعلمُ' (al-muʿallimu) w mianowniku. Podmiot (فاعل) zdania werbalnego → mianownik. Szyk: ORZECZENIE + PODMIOT (typowy arabski): جاءَ المعلمُ (dosł. 'Przyszedł nauczyciel'). W polskim oba szyki OK: 'Przyszedł nauczyciel' / 'Nauczyciel przyszedł'. W arabskim: szyk VOS/VSO jest standardowy, SVO też możliwy."
            },
            {
                "id": "pa_nom3",
                "question": "الطالبُ _____ (Student jest pilny) — orzecznik",
                "translation": "(Student jest pilny)",
                "options": ["مجتهدٌ", "مجتهداً", "مجتهدٍ", "المجتهدَ"],
                "correct": "مجتهدٌ",
                "explanation": "Poprawnie: 'مجتهدٌ' (mujtahidun) z tanwinem ḍamma = mianownik nieokreślony. Orzecznik (خبر) zdania nominalnego → mianownik. الطالبُ مجتهدٌ — oba w mianowniku. UWAGA: orzecznik jest zwykle NIEOKREŚLONY (مجتهدٌ), a podmiot OKREŚLONY (الطالبُ). Jeśli oba określone: الطالبُ هو المجتهدُ (z zaimkiem rozdzielającym هو)."
            },
            {
                "id": "pa_nom4",
                "question": "إنَّ الطالبَ _____ (Zaiste student jest pilny) — خبر إنّ",
                "translation": "(Zaiste student jest pilny)",
                "options": ["مجتهدٌ", "مجتهداً", "مجتهدٍ", "المجتهدُ"],
                "correct": "مجتهدٌ",
                "explanation": "Poprawnie: 'مجتهدٌ' (mujtahidun) = mianownik. Po إنَّ: podmiot → biernik (الطالبَ), ale orzecznik → MIANOWNIK (مجتهدٌ). To odwrotność كان: w كان podmiot = mianownik, orzecznik = biernik; w إنّ podmiot = biernik, orzecznik = mianownik. Zapamiętaj: كان 'stawia' orzecznik w bierniku, إنّ 'stawia' podmiot w bierniku. Orzecznik i podmiot — jeden zawsze مرفوع!"
            },
            {
                "id": "pa_nom5",
                "question": "كُتِبَ _____ (List został napisany) — نائب الفاعل",
                "translation": "(List został napisany)",
                "options": ["الخطابُ", "الخطابَ", "الخطابِ", "خطاباً"],
                "correct": "الخطابُ",
                "explanation": "Poprawnie: 'الخطابُ' (al-khiṭābu) w mianowniku. W stronie biernej: dopełnienie bliższe staje się نائب الفاعل (zastępcą podmiotu) → MIANOWNIK. كَتَبَ أحمدُ الخطابَ (czynna: الخطابَ w bierniku) → كُتِبَ الخطابُ (bierna: الخطابُ w mianowniku). Identyczne z polskim: 'Ahmed napisał list' → 'List został napisany'."
            },
            {
                "id": "pa_nom6",
                "question": "الطلابُ _____ (Studenci są pilni) — zgodność l.mn.",
                "translation": "(Studenci są pilni)",
                "options": ["مجتهدونَ", "مجتهدينَ", "مجتهدٌ", "مجتهداتٌ"],
                "correct": "مجتهدونَ",
                "explanation": "Poprawnie: 'مجتهدونَ' (mujtahidūna) — l. mn. r.m. zdrowa w mianowniku. Końcówka: -ونَ (mianownik), -ينَ (biernik/dopełniacz). Porównaj: معلمونَ (nauczyciele — mianownik), معلمينَ (biernik/dopełniacz). To jak polska deklinacja: 'nauczyciele' (mianownik) vs. 'nauczycieli' (dopełniacz/biernik). L. mn. zdrowa ma DWIE formy: -ون/-ين."
            },
            {
                "id": "pa_nom7",
                "question": "Orzeczenie (فعل) w zdaniu werbalnym jest w:",
                "translation": "(ما إعراب الفعل في الجملة الفعلية؟)",
                "options": ["Nie ma przypadka — czasownik ma TRYB (مرفوع/منصوب/مجزوم)", "Mianowniku", "Bierniku", "Dopełniaczu"],
                "correct": "Nie ma przypadka — czasownik ma TRYB (مرفوع/منصوب/مجزوم)",
                "explanation": "WAŻNE rozróżnienie: rzeczowniki mają PRZYPADEK (إعراب), czasowniki mają TRYB (إعراب الفعل). Czas teraźniejszy: يَكْتُبُ (wskaźnikowy — مرفوع), يَكْتُبَ (łączący — منصوب), يَكْتُبْ (warunkowy — مجزوم). Te same terminy (مرفوع/منصوب/مجزوم), ale inne znaczenie! Czas przeszły i rozkaz są 'niezmienialne' (مبني)."
            },
            {
                "id": "pa_nom8",
                "question": "Tanwin ḍamma (ـٌ) na słowie 'كتابٌ' oznacza:",
                "translation": "(ماذا يعني التنوين بالضم؟)",
                "options": ["Mianownik nieokreślony (jakaś książka)", "Dopełniacz", "Biernik", "Określony mianownik"],
                "correct": "Mianownik nieokreślony (jakaś książka)",
                "explanation": "Tanwin ḍamma (ـٌ) = mianownik + nieokreśloność. كتابٌ = 'jakaś książka' (jako podmiot). 3 tanwiny: ـٌ (mianownik), ـً (biernik), ـٍ (dopełniacz). Tanwin = nieokreśloność + przypadek. Rodzajnik الـ = określoność → bez tanwinu: الكتابُ. Tanwin i الـ NIGDY razem. To jak angielskie 'a' vs. 'the', ale zakodowane w samych końcówkach."
            },
            {
                "id": "pa_nom9",
                "question": "Pięć imion (الأسماء الخمسة) w mianowniku mają:",
                "translation": "(ما علامة رفع الأسماء الخمسة؟)",
                "options": ["Waw (و): أبوكَ, أخوكَ, حموكَ, فوكَ, ذو", "Ḍamma", "Alif", "Yā'"],
                "correct": "Waw (و): أبوكَ, أخوكَ, حموكَ, فوكَ, ذو",
                "explanation": "Pięć imion: أب (ojciec), أخ (brat), حم (teść), فم (usta), ذو (posiadacz). W mianowniku mają و: أبوكَ (twój ojciec), أخوكَ (twój brat), ذو مالٍ (posiadacz majątku). W bierniku: أباكَ (alif), w dopełniaczu: أبيكَ (yā'). WARUNEK: muszą być w إضافة (أبوكَ, nie *أبو). Bez إضافة: أبٌ (zwykła ḍamma). To najstarsza warstwa deklinacji arabskiej."
            },
            {
                "id": "pa_nom10",
                "question": "كانَ _____ مريضاً (Student był chory) — اسم كان",
                "translation": "(Student był chory)",
                "options": ["الطالبُ", "الطالبَ", "الطالبِ", "طالباً"],
                "correct": "الطالبُ",
                "explanation": "Poprawnie: 'الطالبُ' (aṭ-ṭālibu) w mianowniku. Po كَانَ: podmiot (اسم كان) → MIANOWNIK, orzecznik (خبر كان) → biernik. كانَ الطالبُ (mianownik) مريضاً (biernik). Porównaj z إنَّ: إنَّ الطالبَ (biernik) مريضٌ (mianownik). كان i إنّ to 'lustrzane odbicia' — jeden stawia podmiot w mianowniku, drugi w bierniku."
            },
            {
                "id": "pa_nom11",
                "question": "L. mn. żeńska zdrowa w mianowniku: المعلم_____ مجتهد_____",
                "translation": "(Nauczycielki są pilne)",
                "options": ["ـاتُ ... ـاتٌ", "ـاتِ ... ـاتٍ", "ـاتَ ... ـاتاً", "ـينَ ... ـينَ"],
                "correct": "ـاتُ ... ـاتٌ",
                "explanation": "Poprawnie: 'المعلماتُ مجتهداتٌ'. L. mn. żeńska zdrowa (جمع مؤنث سالم) w mianowniku ma ḍammę: ـاتُ. Ale w bierniku i dopełniaczu: ـاتِ (KASRA dla obu!). To wyjątek: l. mn. żeńska nie rozróżnia biernika i dopełniacza — oba mają kasrę. Porównaj l. mn. męską: ـونَ (mian.) vs. ـينَ (biern./dopeł.) — tu YĀNA dla obu."
            },
            {
                "id": "pa_nom12",
                "question": "يأتي المعلمُ و_____ (Przychodzi nauczyciel i student) — معطوف",
                "translation": "(Przychodzi nauczyciel i student)",
                "options": ["الطالبُ", "الطالبَ", "الطالبِ", "طالباً"],
                "correct": "الطالبُ",
                "explanation": "Poprawnie: 'الطالبُ' w mianowniku. Po spójniku و (i): wyraz ma TEN SAM przypadek co wyraz przed spójnikiem. المعلمُ jest فاعل (podmiot) → mianownik, więc الطالبُ po و → też mianownik. Reguła: العطف (łączenie spójnikowe) = zgoda w przypadku. Dotyczy و (i), أو (lub), ثمَّ (potem), فـ (więc). Jak w polskim: 'nauczyciel i student' — oba w mianowniku."
            },
            {
                "id": "pa_nom13",
                "question": "Która z form jest w mianowniku (مرفوع)?",
                "translation": "(أي شكل مرفوع؟)",
                "options": ["يكتبُ (pisze)", "يكتبَ (po أنْ)", "يكتبْ (po لمْ)", "كتبَ (pisał)"],
                "correct": "يكتبُ (pisze)",
                "explanation": "Poprawnie: 'يكتبُ' (yaktubu) z ḍammą = مرفوع (tryb wskaźnikowy). To 'domyślny' tryb teraźniejszego — bez żadnych partykuł. يكتبَ (fatha = منصوب, po أنْ/لنْ/كيْ), يكتبْ (sukun = مجزوم, po لمْ/لا). Czas przeszły كتبَ jest مبني (niezmienny) — fatha NIE oznacza منصوب, to stała samogłoska formy."
            },
            {
                "id": "pa_nom14",
                "question": "أنتم تكتبونَ — końcówka -ونَ w l.mn. teraźn. jest znakiem:",
                "translation": "(ما دليل الرفع في تكتبون؟)",
                "options": ["Mianownika (مرفوع) — ثبوت النون", "Biernika", "Dopełniacza", "Nie ma znaczenia"],
                "correct": "Mianownika (مرفوع) — ثبوت النون",
                "explanation": "W 'pięciu czasownikach' (الأفعال الخمسة): تكتبونَ, تكتبانِ, يكتبانِ, تكتبينَ, يكتبونَ — znakiem مرفوع jest ZACHOWANIE نون (ثبوت النون). W منصوب/مجزوم: نون ODPADA: لنْ تكتبوا (nie *تكتبونَ), لم تكتبوا. To jak w polskim: 'piszecie' (oznajmujący) vs. '(że)byście pisali' (łączący) — zmiana końcówki = zmiana trybu."
            },
            {
                "id": "pa_nom15",
                "question": "Które zdanie ma wszystkie wyrazy w mianowniku?",
                "translation": "(أي جملة كل كلماتها مرفوعة؟)",
                "options": ["الطالبُ مجتهدٌ (Student jest pilny)", "ذهبَ الطالبُ إلى المدرسةِ", "إنَّ الطالبَ مجتهدٌ", "كانَ الطالبُ مجتهداً"],
                "correct": "الطالبُ مجتهدٌ (Student jest pilny)",
                "explanation": "Poprawnie: 'الطالبُ مجتهدٌ' — zdanie nominalne: مبتدأ (الطالبُ — مرفوع) + خبر (مجتهدٌ — مرفوع). OBA w mianowniku! Inne: 'ذهبَ الطالبُ إلى المدرسةِ' — المدرسةِ w dopełniaczu; 'إنَّ الطالبَ مجتهدٌ' — الطالبَ w bierniku; 'كانَ الطالبُ مجتهداً' — مجتهداً w bierniku. Tylko czyste zdanie nominalne bez partykuł ma oba w مرفوع."
            }
        ]
    },
    {
        "key": "conditional_sentences",
        "name": "Zdania warunkowe (الشرط)",
        "description": "جمل الشرط والجزاء في العربية",
        "iconName": "arrow.triangle.branch",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {
                "id": "pa_cond1",
                "question": "إنْ _____ ادرسْ تنجحْ (Jeśli będziesz się uczył, zdasz)",
                "translation": "(Jeśli będziesz się uczył, zdasz)",
                "options": ["تدرسْ تنجحْ", "تدرسُ تنجحُ", "تدرسَ تنجحَ", "درستَ تنجحُ"],
                "correct": "تدرسْ تنجحْ",
                "explanation": "Poprawnie: 'إنْ تدرسْ تنجحْ' — po إنْ (jeśli) OBA czasowniki w مجزوم (jussive — sukun). إنْ to partykuła warunkowa jazm (أداة شرط جازمة) — wymaga مجزوم zarówno w warunku (فعل الشرط), jak i w następstwie (جواب الشرط). Porównaj z polskim: 'Jeśli się uczysz, zdasz' — oba w trybie oznajmującym. Arabski zmienia TRYB obu czasowników!"
            },
            {
                "id": "pa_cond2",
                "question": "لَوْ درستَ _____ (Gdybyś się uczył, zdałbyś)",
                "translation": "(Gdybyś się uczył, zdałbyś)",
                "options": ["لنجحتَ", "تنجحْ", "نجحتَ", "سوف تنجح"],
                "correct": "لنجحتَ",
                "explanation": "Poprawnie: 'لَوْ درستَ لنجحتَ' = Gdybyś się uczył, zdałbyś. لَوْ = gdyby (warunek NIEREALNY/przeszły). Po لَوْ: czas PRZESZŁY (درستَ), następstwo z لـ + czas przeszły (لنجحتَ). لَوْ NIGDY nie używa مجزوم — to nie jest partykuła جازمة! Porównaj: إنْ (realna możliwość + مجزوم) vs. لَوْ (nierealna/przeszła + czas przeszły). Jak polskie: 'jeśli' vs. 'gdyby'."
            },
            {
                "id": "pa_cond3",
                "question": "إذا جاءَ المعلمُ _____ (Gdy przyjdzie nauczyciel, wstanę)",
                "translation": "(Gdy przyjdzie nauczyciel, wstanę)",
                "options": ["أقومُ / قُمْتُ", "أقومْ", "أقومَ", "قامَ"],
                "correct": "أقومُ / قُمْتُ",
                "explanation": "Poprawnie: po إذا (kiedy/gdy) następstwo może być w teraźniejszym (أقومُ) LUB przeszłym (قُمتُ). إذا jest NIE-جازمة w standardowej gramatyce — nie wymaga مجزوم (choć w Koranie spotyka się مجزوم). إذا + czas przeszły (warunek) + czas ter./przeszły (następstwo). Różnica: إنْ = 'jeśli' (niepewny), إذا = 'gdy/kiedy' (pewny/oczekiwany). إذا jest NAJCZĘSTSZĄ partykułą warunkową."
            },
            {
                "id": "pa_cond4",
                "question": "مَنْ يدرسْ _____ (Kto się uczy, zdaje) — مَنْ warunkowe",
                "translation": "(Kto się uczy, zdaje)",
                "options": ["ينجحْ", "ينجحُ", "ينجحَ", "نجحَ"],
                "correct": "ينجحْ",
                "explanation": "Poprawnie: 'مَنْ يدرسْ ينجحْ' — مَنْ (kto) jako أداة شرط جازمة wymaga مجزوم w warunku i następstwie. مَنْ warunkowe (kto = jeśli ktoś) ≠ مَنْ pytające (kto?). Inne zaimki warunkowe جازمة: ما (co/cokolwiek), أينَ (gdzie), متى (kiedy), مهما (cokolwiek), أيّ (który). Wszystkie wymagają مجزوم w OBUCZASOWNIKACH."
            },
            {
                "id": "pa_cond5",
                "question": "لولا الماءُ _____ (Gdyby nie woda, zginęlibyśmy)",
                "translation": "(Gdyby nie woda, zginęlibyśmy)",
                "options": ["لهلكنا", "هلكنا", "نهلكْ", "سنهلك"],
                "correct": "لهلكنا",
                "explanation": "Poprawnie: 'لولا الماءُ لهلكنا' = Gdyby nie woda, zginęlibyśmy. لولا = gdyby nie (warunek NIEREALNY z powodu istnienia czegoś). Struktura: لولا + podmiot (mianownik) + لـ + czas przeszły. Podmiot po لولا jest اسم (nie فعل!): لولا الماءُ, لولا اللهُ, لولا الصبرُ. Następstwo ZAWSZE z لـ. Brak لـ to BŁĄD gramatyczny."
            },
            {
                "id": "pa_cond6",
                "question": "إنْ تذهبْ أذهبْ — jeśli następstwo jest zdaniem nominalnym, używamy:",
                "translation": "(ماذا لو كان جواب الشرط جملة اسمية؟)",
                "options": ["فـ (fā' رابطة): إنْ تدرسْ فأنتَ ناجحٌ", "Nic — bez zmian", "لـ (lām)", "سوف"],
                "correct": "فـ (fā' رابطة): إنْ تدرسْ فأنتَ ناجحٌ",
                "explanation": "Gdy następstwo (جواب الشرط) jest zdaniem nominalnym, rozkazem, pytaniem lub z سوف/سـ/لنْ/ما/قد — MUSI być فـ (fā' łącząca) na początku. إنْ تدرسْ فأنتَ ناجحٌ (jeśli się uczysz, TO jesteś zdolny). Bez فـ: BŁĄD. Mnemotechnika: جملة اسمية/أمر/استفهام/سوف/لن/ما/قد = potrzebna فـ. Wiersz: 'اسمية طلبية وبجامد وبما وقد وبلن وبالتسويف' (reguła فـ)."
            },
            {
                "id": "pa_cond7",
                "question": "لَوْ أنَّكَ درستَ _____ (Gdybyś się uczył, zdałbyś) — z أنَّ",
                "translation": "(Gdybyś się uczył, zdałbyś)",
                "options": ["لنجحتَ", "لتنجحْ", "فإنَّك ناجحٌ", "نجحتَ"],
                "correct": "لنجحتَ",
                "explanation": "Poprawnie: 'لَوْ أنَّكَ درستَ لنجحتَ'. Wariant لَوْ z أنَّ: wzmacnia emfazę. أنَّكَ درستَ = 'że się uczyłeś' (podmiot أنَّ w bierniku + orzecznik). Następstwo: لـ + czas przeszły (لنجحتَ). Bez لـ: potoczne, ale gramatycznie niepełne. لَوْ zawsze oznacza NIEREALNOŚĆ — warunek NIE został spełniony. 'Gdybyś się uczył (ale się nie uczyłeś)'."
            },
            {
                "id": "pa_cond8",
                "question": "Różnica: إنْ vs. إذا:",
                "translation": "(الفرق بين إنْ و إذا)",
                "options": ["إنْ = niepewne/możliwe + جزم; إذا = pewne/oczekiwane, bez جزم", "Identyczne", "إنْ = przyszłość, إذا = przeszłość", "إنْ = formalne, إذا = potoczne"],
                "correct": "إنْ = niepewne/możliwe + جزم; إذا = pewne/oczekiwane, bez جزم",
                "explanation": "KLUCZOWA różnica: إنْ = 'jeśli' (sytuacja NIEPEWNA, może się zdarzyć lub nie) + جزم (مجزوم). إذا = 'kiedy/gdy' (sytuacja OCZEKIWANA, prawdopodobna) + normalny czas przeszły (nie جازمة standardowo). Np.: إنْ يأتِ المطرُ... (jeśli przyjdzie deszcz — niepewne), إذا جاءَ المطرُ... (kiedy przyjdzie deszcz — oczekujemy). W polskim: 'jeśli' ≈ إنْ, 'kiedy/gdy' ≈ إذا."
            },
            {
                "id": "pa_cond9",
                "question": "مهما _____ فلن أخافَ (Cokolwiek się stanie, nie będę się bał)",
                "translation": "(Cokolwiek się stanie, nie będę się bał)",
                "options": ["يحدثْ", "يحدثُ", "حدثَ", "يحدثَ"],
                "correct": "يحدثْ",
                "explanation": "Poprawnie: 'مهما يحدثْ فلن أخافَ'. مهما (cokolwiek) = partykuła warunkowa جازمة → يحدثْ w مجزوم. Następstwo: فـ (bo لنْ!) + لنْ أخافَ (بiernik po لنْ). Reguła فـ: gdy następstwo zawiera لنْ, MUSI być فـ. مهما to najmocniejszy zaimek 'cokolwiek' — implukuje brak znaczenia warunku: 'NIEWAŻNE co się stanie'."
            },
            {
                "id": "pa_cond10",
                "question": "أينما _____ أجدْكَ (Gdziekolwiek pójdę, znajdę cię)",
                "translation": "(Gdziekolwiek pójdę, znajdę cię)",
                "options": ["أذهبْ", "أذهبُ", "ذهبتُ", "أذهبَ"],
                "correct": "أذهبْ",
                "explanation": "Poprawnie: 'أينما أذهبْ أجدْكَ'. أينما (gdziekolwiek) = partykuła warunkowa جازمة → OBA w مجزوم: أذهبْ i أجدْ. Końcówka كَ = cię (zaimek suffixalny). Inne złożone partykuły warunkowe: حيثما (gdziekolwiek), كيفما (jakkolwiek), أيّانَ (kiedykolwiek). Końcówka ما dodaje znaczenie 'kolwiek' do zaimka: أينَ (gdzie) → أينما (gdziekolwiek)."
            },
            {
                "id": "pa_cond11",
                "question": "لَمَّا جاءَ _____ (Kiedy przyszedł, usiadłem)",
                "translation": "(Kiedy przyszedł, usiadłem)",
                "options": ["جلستُ", "أجلسْ", "جالسٌ", "سأجلسُ"],
                "correct": "جلستُ",
                "explanation": "Poprawnie: 'لمّا جاءَ جلستُ' = kiedy przyszedł, usiadłem. لمّا = kiedy (przeszłość, jednorazowo). Struktura: لمّا + czas przeszły + czas przeszły. لمّا NIE jest جازمة — oba czasowniki w zwykłym przeszłym. Porównaj: إذا (przyszłość), لمّا (przeszłość). W polskim: 'kiedy przyszedł' (przeszłość, oba w przeszłym). لمّا implikuje NATYCHMIASTOWOŚĆ: przyszedł → od razu usiadłem."
            },
            {
                "id": "pa_cond12",
                "question": "إنْ لمْ تدرسْ _____ (Jeśli nie będziesz się uczył, obleje ciesz)",
                "translation": "(Jeśli nie będziesz się uczył, oblejesz)",
                "options": ["فلنْ تنجحَ", "تنجحْ", "لا تنجحُ", "ما نجحتَ"],
                "correct": "فلنْ تنجحَ",
                "explanation": "Poprawnie: 'إنْ لمْ تدرسْ فلنْ تنجحَ'. Negacja warunku: إنْ + لمْ + مجزوم. لمْ JUŻ wymaga مجزوم, więc z إنْ nie ma 'podwójnego' جزم — لمْ 'zasłania' إنْ. Następstwo: فـ (bo لنْ) + لنْ تنجحَ (منصوب). Negacja warunku: لمْ (po إنْ), ما (po إذا/لو). إنْ لمْ = jeśli nie..., إذا ما/لو ما = gdyby nie..."
            },
            {
                "id": "pa_cond13",
                "question": "أمّا أنا _____ أُفَضِّلُ الشايَ (Jeśli chodzi o mnie, wolę herbatę)",
                "translation": "(Co do mnie, wolę herbatę)",
                "options": ["فـ (فأنا أُفَضِّلُ)", "و (وأنا أُفَضِّلُ)", "ثمَّ", "لكنْ"],
                "correct": "فـ (فأنا أُفَضِّلُ)",
                "explanation": "Poprawnie: 'أمّا أنا فأُفَضِّلُ الشايَ'. أمّا = co do / jeśli chodzi o — partykuła warunkowa TEMATYCZNA (تفصيل). Po أمّا OBOWIĄZKOWE jest فـ przed następstwem. أمّا الولدُ فذكيٌّ (co do chłopca — jest mądry), أمّا البنتُ فجميلةٌ (co do dziewczynki — jest piękna). Brak فـ po أمّا to BŁĄD GRAMATYCZNY. أمّا jest bardzo częsta w Koranie i MSA."
            },
            {
                "id": "pa_cond14",
                "question": "لَوْلا _____ لما تعلَّمنا (Gdyby nie nauczyciel, nie nauczylibyśmy się)",
                "translation": "(Gdyby nie nauczyciel, nie nauczylibyśmy się)",
                "options": ["المعلمُ", "المعلمَ", "المعلمِ", "معلماً"],
                "correct": "المعلمُ",
                "explanation": "Poprawnie: 'المعلمُ' w MIANOWNIKU. Po لولا podmiot → mianownik (مبتدأ). لولا المعلمُ لما تعلَّمنا. Orzecznik (خبر) po لولا jest DOMYŚLNY i nie wymaga wyrażenia: لولا المعلمُ (موجودٌ) = gdyby nauczyciel nie (istniał). Następstwo: لـ + ما + przeszły (لما تعلَّمنا). Negacja w następstwie لولا: لـ + ما = 'nigdy byśmy nie'."
            },
            {
                "id": "pa_cond15",
                "question": "Ile typów zdań warunkowych omówiliśmy?",
                "translation": "(كم نوعاً من الجمل الشرطية؟)",
                "options": ["4 (إنْ realne, لَوْ nierealne, إذا oczekiwane, لولا gdyby-nie)", "1", "2", "10"],
                "correct": "4 (إنْ realne, لَوْ nierealne, إذا oczekiwane, لولا gdyby-nie)",
                "explanation": "4 główne typy: 1) إنْ = warunek REALNY/możliwy + جزم (إنْ تدرسْ تنجحْ), 2) لَوْ = warunek NIEREALNY/przeszły + czas przeszły (لَوْ درستَ لنجحتَ), 3) إذا = warunek OCZEKIWANY + przeszły/teraźniejszy (إذا جاءَ أقومُ), 4) لولا = gdyby-NIE + podmiot mian. + لـ+przeszły (لولا الماءُ لهلكنا). Plus: مَنْ/ما/أينما/مهما (zaimki warunkowe جازمة). Polskie odpowiedniki: jeśli, gdyby, gdy/kiedy, gdyby nie."
            }
        ]
    },
    {
        "key": "relative_pronouns_ar",
        "name": "Zaimki względne (الموصول)",
        "description": "الأسماء الموصولة في العربية",
        "iconName": "link",
        "color": "#fbbf24",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_rel1",
                "question": "الطالبُ _____ درسَ نجحَ (Student, który się uczył, zdał)",
                "translation": "(Student, który się uczył, zdał)",
                "options": ["الذي", "التي", "الذين", "اللاتي"],
                "correct": "الذي",
                "explanation": "Poprawnie: 'الذي' (alladhī) = który (r.m., l.poj.). Zaimki względne w arabskim ODMIENIAJĄ SIĘ przez rodzaj i liczbę: الذي (m. poj.), التي (ż. poj.), اللذانِ/اللذَينِ (m. podw.), اللتانِ/اللتَينِ (ż. podw.), الذينَ (m. mn.), اللاتي/اللواتي (ż. mn.). W polskim: 'który/która/którzy/które' — też odmiana! Systemy zbliżone."
            },
            {
                "id": "pa_rel2",
                "question": "المعلمةُ _____ تدرّسُنا ممتازةٌ (Nauczycielka, która nas uczy, jest świetna)",
                "translation": "(Nauczycielka, która nas uczy, jest świetna)",
                "options": ["التي", "الذي", "الذين", "اللتان"],
                "correct": "التي",
                "explanation": "Poprawnie: 'التي' (allatī) = która (r.ż., l.poj.). المعلمةُ jest żeńska → التي. Zdanie względne (صلة الموصول): تدرّسُنا = uczy nas. Zaimek względny MUSI zgadzać się z poprzednikiem (الموصول) w rodzaju i liczbie. Porównaj: المعلمُ الذي يدرّسُنا (nauczyciel m.) vs. المعلمةُ التي تدرّسُنا (nauczycielka ż.)."
            },
            {
                "id": "pa_rel3",
                "question": "الطلابُ _____ درسوا نجحوا (Studenci, którzy się uczyli, zdali)",
                "translation": "(Studenci, którzy się uczyli, zdali)",
                "options": ["الذينَ", "الذي", "التي", "اللواتي"],
                "correct": "الذينَ",
                "explanation": "Poprawnie: 'الذينَ' (alladhīna) = którzy (r.m., l.mn.). الطلابُ to l. mn. r.m. → الذينَ. WAŻNE: الذينَ jest NIEZMIENNY — ta sama forma w mianowniku, bierniku i dopełniaczu (nie ma *الذونَ/*الذِينِ). W przeciwieństwie do l. podwójnej: اللذانِ (mianownik) vs. اللذَينِ (biernik/dopełniacz) — ta się ODMIENIA."
            },
            {
                "id": "pa_rel4",
                "question": "قرأتُ الكتابَ _____ اشتريتُهُ (Przeczytałem książkę, którą kupiłem)",
                "translation": "(Przeczytałem książkę, którą kupiłem)",
                "options": ["الذي", "التي", "الذين", "ما"],
                "correct": "الذي",
                "explanation": "Poprawnie: 'الذي' — الكتابَ jest r.m. → الذي. KLUCZOWE: zdanie względne musi zawierać عائد (zaimek powrotny) odnoszący się do poprzednika. Tu: اشتريتُهُ — هُ = go (= الكتاب). Bez هُ byłoby BŁĘDNE: *الكتابَ الذي اشتريتُ. W polskim: 'książkę, KTÓRĄ kupiłem' — 'którą' pełni podwójną funkcję. W arabskim: الذي + هُ oddzielnie."
            },
            {
                "id": "pa_rel5",
                "question": " هذا _____ أريدُهُ (To jest to, czego chcę) — مَا",
                "translation": "(To jest to, czego chcę)",
                "options": ["ما", "الذي", "مَنْ", "أيّ"],
                "correct": "ما",
                "explanation": "Poprawnie: 'ما' (mā) = co/to, co — zaimek względny dla RZECZY nierozumnych. ما أريدُهُ = to, czego chcę. Porównaj: مَنْ (kto/ten, kto) = dla OSÓB: مَنْ يدرسْ ينجحْ (kto się uczy, zdaje). ما = co/to co (rzeczy), مَنْ = kto/ten kto (osoby). Oba są NIEODMIENNE (jeden kształt dla m./ż./poj./mn./wszystkich przypadków)."
            },
            {
                "id": "pa_rel6",
                "question": "جاءَ مَنْ _____ (Przyszedł ten, kto się uczył)",
                "translation": "(Przyszedł ten, kto się uczył)",
                "options": ["درسَ", "درسوا", "يدرسُ", "درستْ"],
                "correct": "درسَ",
                "explanation": "Poprawnie: 'مَنْ درسَ' = ten, kto się uczył. Czasownik po مَنْ jest zwykle w 3. os. l. poj. r.m. (domyślny), nawet gdy odnosi się do wielu osób: جاءَ مَنْ درسَ (przyszedł ten/ci, kto się uczył/uczyli). ALE: można też uzgodnić z rzeczywistą liczbą: جاءَ مَنْ درسوا (przyszli ci, którzy się uczyli). Forma singularna jest poprawniejsza gramatycznie."
            },
            {
                "id": "pa_rel7",
                "question": "الذي po rzeczowniku NIEOKREŚLONYM — czy jest poprawne?",
                "translation": "(هل يأتي الذي بعد نكرة؟)",
                "options": ["NIE — po nieokreślonych nie ma الذي; zamiast tego: zdanie opisowe bez zaimka", "TAK — zawsze", "TAK — ale tylko z التي", "To zależy od dialektu"],
                "correct": "NIE — po nieokreślonych nie ma الذي; zamiast tego: zdanie opisowe bez zaimka",
                "explanation": "KLUCZOWA reguła: الذي/التي/الذينَ występują TYLKO po rzeczowniku OKREŚLONYM (z الـ lub imieniu). Po nieokreślonym: ZDANIE OPISOWE bez zaimka (جملة وصفية). Porównaj: الطالبُ الذي درسَ (student, który...) vs. طالبٌ درسَ (student, który... — BEZ الذي!). W polskim oba mają 'który'. W arabskim: określony + الذي, nieokreślony + zdanie bez zaimka."
            },
            {
                "id": "pa_rel8",
                "question": "مررتُ بالرجلِ الذي _____ في بيتِهِ (Przeszedłem obok mężczyzny, którego odwiedziłem w domu)",
                "translation": "(Przeszedłem obok mężczyzny, którego odwiedziłem w domu)",
                "options": ["زُرْتُهُ", "زُرْتُ", "يزوُرُ", "زائرٌ"],
                "correct": "زُرْتُهُ",
                "explanation": "Poprawnie: 'زُرْتُهُ' = odwiedziłem GO. العائد (zaimek powrotny) هُ = go (= الرجل). Zaimek العائد MUSI być obecny w zdaniu względnym. Gdzie: الذي + zdanie z zaimkiem powrotnym odnoszącym się do الموصول. Bez هُ: *الذي زرتُ في بيتِهِ — BŁĄD (brakuje powrotu do الرجل po زرتُ). Wyjątek: gdy zaimek jest podmiotem — ukryty: الذي درسَ (هو ukryte)."
            },
            {
                "id": "pa_rel9",
                "question": "قابلتُ المرأةَ التي _____ ابنُها (Spotkałem kobietę, której syn podróżował)",
                "translation": "(Spotkałem kobietę, której syn podróżował)",
                "options": ["سافرَ ابنُها", "سافرَ ابنُهُ", "سافرَتْ", "السافرَ"],
                "correct": "سافرَ ابنُها",
                "explanation": "Poprawnie: 'سافرَ ابنُها' = podróżował JEJ syn. العائد tu to ها (jej) w ابنُها — odnosi się do المرأة (ż.). Gdyby الرجل: سافرَ ابنُهُ (JEGO syn). Zaimek powrotny MUSI zgadzać się w rodzaju z الموصول: المرأة → ها, الرجل → هُ. To odpowiednik polskiego: 'kobietę, KTÓREJ syn' — 'której' → arabskie التي + ها."
            },
            {
                "id": "pa_rel10",
                "question": "اللذانِ _____ (Ci dwaj, którzy przyszli) — l. podwójna",
                "translation": "(Ci dwaj, którzy przyszli)",
                "options": ["جاءا", "جاءوا", "جاءَ", "جاءتا"],
                "correct": "جاءا",
                "explanation": "Poprawnie: 'اللذانِ جاءا' = ci dwaj, którzy przyszli. اللذانِ (r.m. l. podw. mianownik) + جاءا (3. os. l. podw. r.m.). L. podwójna zaimka: اللذانِ (mianownik) / اللذَينِ (biernik/dopełniacz). Żeńska: اللتانِ / اللتَينِ. L. podwójna zaimka względnego: JEDYNA forma, która się odmienia przez przypadek! الذينَ, اللاتي = nieodmienne."
            },
            {
                "id": "pa_rel11",
                "question": "Czy w dialektach arabskich zaimek względny jest prostszy?",
                "translation": "(هل الموصول أبسط في اللهجات؟)",
                "options": ["TAK — w większości dialektów: إللي (illi) dla wszystkich", "NIE — jest bardziej złożony", "Nie ma zaimka względnego", "Tak, ale tylko w egipskim"],
                "correct": "TAK — w większości dialektów: إللي (illi) dla wszystkich",
                "explanation": "W dialektach: إللي (illi/yalli) = jeden zaimek względny dla WSZYSTKIEGO — r.m., r.ż., l.poj., l.mn., l.podw.: الراجل إللي, الستّ إللي, الناس إللي. Ogromne uproszczenie vs. MSA (الذي, التي, الذينَ, اللاتي, اللذانِ, اللتانِ). To jak angielskie 'who/which/that' → dialektalne 'illi'. W polskim: 'który/która/którzy/które' — bliższe MSA."
            },
            {
                "id": "pa_rel12",
                "question": "أعجبني _____ قلتَهُ (Spodobało mi się to, co powiedziałeś)",
                "translation": "(Spodobało mi się to, co powiedziałeś)",
                "options": ["ما", "الذي", "مَنْ", "التي"],
                "correct": "ما",
                "explanation": "Poprawnie: 'ما قلتَهُ' = to, co powiedziałeś. ما odnosi się do TREŚCI (co = wypowiedź), nie do osoby. أعجبني (spodobało mi się — dosł. 'zadziwiło mnie') + ما (to, co) + قلتَهُ (powiedziałeś to — هُ = عائد). Alternatywa: الذي قلتَهُ — też poprawne (الذي dla nieosobowych też OK). Ale ما jest bardziej naturalne dla treści abstrakcyjnych."
            },
            {
                "id": "pa_rel13",
                "question": "رأيتُ طالباً _____ في المكتبة (Zobaczyłem studenta siedzącego w bibliotece) — bez zaimka!",
                "translation": "(Zobaczyłem studenta siedzącego w bibliotece)",
                "options": ["يجلسُ", "الذي يجلسُ", "جالساً", "الجالسَ"],
                "correct": "يجلسُ",
                "explanation": "Poprawnie: 'طالباً يجلسُ في المكتبة' — zdanie opisowe BEZ zaimka الذي, bo طالباً jest NIEOKREŚLONY. Porównaj: الطالبَ الذي يجلسُ (określony → z zaimkiem). Powtórzenie kluczowej reguły: nieokreślony + zdanie opisowe (bez zaimka), określony + zdanie względne (z zaimkiem). 'جالساً' to حال (okolicznik stanu) — też poprawne, ale inna konstrukcja."
            },
            {
                "id": "pa_rel14",
                "question": "Zdanie: هذا هو الذي رأيتُهُ — هو tu pełni funkcję:",
                "translation": "(ما وظيفة هو في هذا هو الذي؟)",
                "options": ["Zaimka rozdzielającego (ضمير فصل) — podkreśla tożsamość", "Podmiotu", "Zaimka powrotnego", "Orzecznika"],
                "correct": "Zaimka rozdzielającego (ضمير فصل) — podkreśla tożsamość",
                "explanation": "هو w هذا هو الذي to ضمير فصل (zaimek rozdzielający) — umieszczony między podmiotem a orzecznikiem dla EMFAZY i jasności. هذا = to (podmiot), هو = [właśnie], الذي رأيتُهُ = ten, którego widziałem (orzecznik). Bez هو: هذا الذي رأيتُهُ — poprawne, ale bez emfazy. ضمير فصل pomaga też rozróżnić orzecznik od przydawki."
            },
            {
                "id": "pa_rel15",
                "question": "Która kombinacja الموصول + العائد jest BŁĘDNA?",
                "translation": "(أي تركيبة خاطئة؟)",
                "options": ["المعلمةُ الذي درسَ (ż. + m.)", "الطالبُ الذي درسَ", "الطالبةُ التي درسَتْ", "الطلابُ الذينَ درسوا"],
                "correct": "المعلمةُ الذي درسَ (ż. + m.)",
                "explanation": "BŁĄD: 'المعلمةُ الذي' — المعلمة jest żeńska, ale الذي jest męski! Powinno być: المعلمةُ التي درسَتْ. Reguła: zaimek względny MUSI zgadzać się z poprzednikiem w: 1) RODZAJU (m./ż.), 2) LICZBIE (poj./podw./mn.). Brak zgody = BŁĄD GRAMATYCZNY. To najczęstszy błąd uczniów — używanie الذي zamiast التي dla rzeczowników żeńskich."
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
