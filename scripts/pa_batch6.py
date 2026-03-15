import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "masdar_verbal_nouns",
        "name": "Masdar — rzeczownik odsłowny (المصدر)",
        "description": "المصادر — الأسماء المشتقة من الأفعال",
        "iconName": "text.book.closed",
        "color": "#4ade80",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_msdr1",
                "question": "Masdar (مصدر) formy I od 'كَتَبَ' (pisał) to:",
                "translation": "(ما مصدر كَتَبَ؟)",
                "options": ["كِتَابَة", "كِتَاب", "كَاتِب", "مَكْتُوب"],
                "correct": "كِتَابَة",
                "explanation": "Poprawnie: 'كِتَابَة' (kitāba) = pisanie. Masdar to arabski 'rzeczownik odsłowny' — odpowiednik polskiego bezokolicznika lub gerundium. W polskim: 'pisanie' od 'pisać'. WAŻNE: formy I NIE mają jednego stałego wzorca masdaru — każdy czasownik ma swój własny, trzeba go zapamiętać. 'كِتَاب' (kitāb) = książka — pokrewne, ale to NIE masdar. 'كَاتِب' = piszący (imiesłów)."
            },
            {
                "id": "pa_msdr2",
                "question": "Masdar formy II od 'عَلَّمَ' (uczył) to:",
                "translation": "(ما مصدر عَلَّمَ؟)",
                "options": ["تَعْلِيم", "عِلْم", "تَعَلُّم", "مُعَلِّم"],
                "correct": "تَعْلِيم",
                "explanation": "Poprawnie: 'تَعْلِيم' (taʿlīm) = nauczanie/edukacja. Masdar formy II ma STAŁY wzorzec: تَفْعِيل (tafʿīl). To WIELKA ZALETA form II–X: ich masdary są przewidywalne! Forma I: nieprzewidywalne. Forma II: تَفْعِيل. Porównaj: دَرَّسَ → تَدْرِيس (wykładanie), صَوَّرَ → تَصْوِير (fotografowanie), نَظَّمَ → تَنْظِيم (organizowanie). Wyjątek: jeśli ostatnia to ي: تَرْبِيَة (nie *تَرْبِيي)."
            },
            {
                "id": "pa_msdr3",
                "question": "Masdar formy III od 'سَاعَدَ' (pomagał) to:",
                "translation": "(ما مصدر سَاعَدَ؟)",
                "options": ["مُسَاعَدَة", "سِعَادَة", "مَسْعَدَة", "تَسَاعُد"],
                "correct": "مُسَاعَدَة",
                "explanation": "Poprawnie: 'مُسَاعَدَة' (musāʿada) = pomoc/pomaganie. Masdar formy III: مُفَاعَلَة (mufāʿala) — najczęstszy wzorzec. Alternatywny: فِعَال (fiʿāl): قِتَال (walka od قَاتَلَ). سِعَادَة to NIE masdar — to 'szczęście' (przymiotnik/rzeczownik). تَسَاعُد to masdar formy VI (wzajemne pomaganie). Inne III: مُحَاوَلَة (próba), مُشَاهَدَة (oglądanie), مُحَادَثَة (rozmowa)."
            },
            {
                "id": "pa_msdr4",
                "question": "Masdar formy IV od 'أَرْسَلَ' (wysłał) to:",
                "translation": "(ما مصدر أَرْسَلَ؟)",
                "options": ["إِرْسَال", "رِسَالَة", "مُرْسَل", "تَرْسِيل"],
                "correct": "إِرْسَال",
                "explanation": "Poprawnie: 'إِرْسَال' (irsāl) = wysyłanie/nadawanie. Masdar formy IV: إِفْعَال (ifʿāl). STAŁY wzorzec: إِسْلَام (poddanie się — od أَسْلَمَ), إِعْلَان (ogłoszenie — od أَعْلَنَ), إِنْتَاج (produkcja — od أَنْتَجَ). رِسَالَة (risāla) = list/wiadomość — to NIE masdar, lecz pokrewny rzeczownik. مُرْسَل (mursil) = nadawca (imiesłów czynny IV)."
            },
            {
                "id": "pa_msdr5",
                "question": "Masdar formy V od 'تَعَلَّمَ' (uczył się) to:",
                "translation": "(ما مصدر تَعَلَّمَ؟)",
                "options": ["تَعَلُّم", "تَعْلِيم", "عِلْم", "مُتَعَلِّم"],
                "correct": "تَعَلُّم",
                "explanation": "Poprawnie: 'تَعَلُّم' (taʿallum) = uczenie się. Masdar formy V: تَفَعُّل (tafaʿʿul) — identyczny z formą czasownika, tylko z ḍammą na przedostatniej: تَعَلَّمَ → تَعَلُّم. PROSTA reguła: weź formę V, zamień końcową fathę na ḍammę. Inne: تَطَوُّر (rozwój), تَقَدُّم (postęp), تَصَرُّف (zachowanie). Porównaj: تَعْلِيم (nauczanie, masdar II) vs. تَعَلُّم (uczenie się, masdar V)."
            },
            {
                "id": "pa_msdr6",
                "question": "Masdar formy VII od 'اِنْكَسَرَ' (złamał się) to:",
                "translation": "(ما مصدر اِنْكَسَرَ؟)",
                "options": ["اِنْكِسَار", "كَسْر", "تَكْسِير", "مُنْكَسِر"],
                "correct": "اِنْكِسَار",
                "explanation": "Poprawnie: 'اِنْكِسَار' (inkisār) = złamanie się. Masdar formy VII: اِنْفِعَال (infiʿāl). Porównaj: كَسْر (kasr) = łamanie (masdar I), تَكْسِير (taksīr) = rozbijanie (masdar II), اِنْكِسَار = złamanie się samo (masdar VII). Trzy różne masdary od jednego rdzenia ك-س-ر — każdy z innym odcieniem. To piękno systemu arabskiego: jeden rdzeń, wiele form, precyzyjne znaczenia."
            },
            {
                "id": "pa_msdr7",
                "question": "Masdar formy VIII od 'اِجْتَمَعَ' (zebrał się) to:",
                "translation": "(ما مصدر اِجْتَمَعَ؟)",
                "options": ["اِجْتِمَاع", "جَمْع", "تَجْمِيع", "مُجْتَمَع"],
                "correct": "اِجْتِمَاع",
                "explanation": "Poprawnie: 'اِجْتِمَاع' (ijtimāʿ) = spotkanie/zgromadzenie. Masdar formy VIII: اِفْتِعَال (iftiʿāl). Porównaj: جَمْع (zbieranie — I), تَجْمِيع (kompilowanie — II), اِجْتِمَاع (spotkanie/zjazd — VIII). مُجْتَمَع (mujtamaʿ) = społeczeństwo — to imiesłów bierny VIII używany jako rzeczownik. علم الاِجْتِمَاع (ʿilm al-ijtimāʿ) = socjologia. Rdzeń ج-م-ع jest jednym z najbardziej produktywnych."
            },
            {
                "id": "pa_msdr8",
                "question": "Masdar formy X od 'اِسْتَخْدَمَ' (używał) to:",
                "translation": "(ما مصدر اِسْتَخْدَمَ؟)",
                "options": ["اِسْتِخْدَام", "خِدْمَة", "تَخْدِيم", "مُسْتَخْدَم"],
                "correct": "اِسْتِخْدَام",
                "explanation": "Poprawnie: 'اِسْتِخْدَام' (istikhdām) = używanie/zatrudnianie. Masdar formy X: اِسْتِفْعَال (istifʿāl). Regularne i przewidywalne. Inne: اِسْتِقْلَال (niezależność), اِسْتِعْمَال (użycie), اِسْتِفْهَام (pytanie/zapytanie). خِدْمَة (khidma) = służba/usługa — masdar I od خَدَمَ. مُسْتَخْدَم = użytkownik (imiesłów czynny X) lub używany (bierny X)."
            },
            {
                "id": "pa_msdr9",
                "question": "Które z poniższych NIE jest masdarem?",
                "translation": "(أيّها ليس مصدراً؟)",
                "options": ["مُعَلِّم (nauczyciel)", "تَعْلِيم (nauczanie)", "تَعَلُّم (uczenie się)", "عِلْم (wiedza)"],
                "correct": "مُعَلِّم (nauczyciel)",
                "explanation": "Poprawnie: 'مُعَلِّم' (muʿallim) = nauczyciel — to imiesłów czynny formy II (اسم الفاعل), NIE masdar. Opisuje OSOBĘ wykonującą czynność. Masdary: تَعْلِيم (nauczanie — masdar II), تَعَلُّم (uczenie się — masdar V), عِلْم (wiedza — masdar I). Masdar opisuje CZYNNOŚĆ/STAN. Imiesłów opisuje OSOBĘ/SPRAWCĘ. To fundamentalna różnica w arabskiej morfologii."
            },
            {
                "id": "pa_msdr10",
                "question": "Masdar może pełnić w zdaniu funkcję:",
                "translation": "(ما وظيفة المصدر في الجملة؟)",
                "options": ["Podmiotu, dopełnienia lub orzeczenia", "Tylko podmiotu", "Tylko dopełnienia", "Tylko orzeczenia"],
                "correct": "Podmiotu, dopełnienia lub orzeczenia",
                "explanation": "Masdar jest w pełni rzeczownikiem i może pełnić KAŻDĄ funkcję rzeczownikową: 1) Podmiot: القِرَاءَةُ مُفِيدَةٌ (Czytanie jest pożyteczne). 2) Dopełnienie: أُحِبُّ القِرَاءَةَ (Lubię czytanie). 3) Orzeczenie (خبر): هَوَايَتِي القِرَاءَةُ (Moim hobby jest czytanie). 4) Po przyimku: بِالقِرَاءَةِ (poprzez czytanie). Masdar jest bardziej elastyczny niż polski bezokolicznik."
            },
            {
                "id": "pa_msdr11",
                "question": "يُرِيدُ _____ اللغةَ العربيةَ (Chce uczyć się arabskiego) — masdar od تَعَلَّمَ",
                "translation": "(Chce uczenia się arabskiego)",
                "options": ["تَعَلُّمَ", "يَتَعَلَّم", "تَعْلِيمَ", "مُتَعَلِّمَ"],
                "correct": "تَعَلُّمَ",
                "explanation": "Poprawnie: 'يُرِيدُ تَعَلُّمَ' = chce uczenia się. Po أَرَادَ/يُرِيدُ można użyć أَنْ + czas. teraźn. LUB masdar. Oba poprawne: يُرِيدُ أَنْ يَتَعَلَّمَ = يُرِيدُ تَعَلُّمَ. Masdar jest bardziej formalny/literacki. W dzienniku/akademii: masdar preferowany. W mowie potocznej: أَنْ + czas. teraźn. częstszy. Masdar w bierniku (منصوب) bo dopełnienie bliższe."
            },
            {
                "id": "pa_msdr12",
                "question": "Masdar formy I od 'ذَهَبَ' (poszedł) to:",
                "translation": "(ما مصدر ذَهَبَ؟)",
                "options": ["ذَهَاب", "ذِهَاب", "مَذْهَب", "ذَاهِب"],
                "correct": "ذَهَاب",
                "explanation": "Poprawnie: 'ذَهَاب' (dhahāb) = chodzenie/odejście. Wzorzec: فَعَال (faʿāl). Ale to tylko JEDEN z wielu wzorców formy I! Inne wzorce: فَعْل (فَتْح = otwarcie), فِعَالَة (كِتَابَة = pisanie), فُعُول (دُخُول = wchodzenie), فَعَل (عَمَل = praca). Nie da się przewidzieć wzorca masdaru formy I — trzeba zapamiętać. To najtrudniejsza część arabskich masdarów."
            },
            {
                "id": "pa_msdr13",
                "question": "بَعْدَ _____ (Po jedzeniu) — masdar od أَكَلَ z przyimkiem",
                "translation": "(بَعْدَ + أكل = ?)",
                "options": ["بَعْدَ الأَكْلِ", "بَعْدَ أَكَلَ", "بَعْدَ يَأْكُلُ", "بَعْدَ آكِلٍ"],
                "correct": "بَعْدَ الأَكْلِ",
                "explanation": "Poprawnie: 'بَعْدَ الأَكْلِ' (baʿda al-akli) = po jedzeniu. Po przyimkach (w tym ظروف jak بَعْدَ, قَبْلَ, أَثْنَاءَ) używamy MASDARU, nie czasownika! الأَكْل (al-akl) = jedzenie (masdar I od أَكَلَ, wzorzec فَعْل). W dopełniaczu (مجرور) bo po بَعْدَ (przysłówek miejscowy = مُضَاف). Porównaj: قَبْلَ النَّوْمِ (przed snem), أَثْنَاءَ القِرَاءَةِ (podczas czytania)."
            },
            {
                "id": "pa_msdr14",
                "question": "Wzorzec masdaru formy VI to:",
                "translation": "(ما وزن مصدر الفعل السادس؟)",
                "options": ["تَفَاعُل", "تَفْعِيل", "فِعَال", "اِفْتِعَال"],
                "correct": "تَفَاعُل",
                "explanation": "Masdar formy VI: تَفَاعُل (tafāʿul). Forma VI wyraża wzajemność. Porównaj: تَعَاوُن (współpraca), تَفَاهُم (wzajemne zrozumienie), تَبَادُل (wymiana), تَوَاصُل (komunikacja). Reguła łatwa: identyczna z formą VI czasu przeszłego, ale z ḍammą na przedostatniej: تَفَاعَلَ → تَفَاعُل. Systematyka: II=تَفْعِيل, III=مُفَاعَلَة, V=تَفَعُّل, VI=تَفَاعُل."
            },
            {
                "id": "pa_msdr15",
                "question": "Tabela masdarów form II–X jest:",
                "translation": "(هل مصادر الأفعال II-X منتظمة؟)",
                "options": ["Regularna — każda forma ma stały wzorzec", "Całkowicie nieregularna", "Regularna tylko do formy V", "Regularna tylko formy parzyste"],
                "correct": "Regularna — każda forma ma stały wzorzec",
                "explanation": "TAK — masdary form II–X są REGULARNE i PRZEWIDYWALNE: II=تَفْعِيل, III=مُفَاعَلَة/فِعَال, IV=إِفْعَال, V=تَفَعُّل, VI=تَفَاعُل, VII=اِنْفِعَال, VIII=اِفْتِعَال, IX=اِفْعِلَال, X=اِسْتِفْعَال. Tylko forma I jest nieregularna (dziesiątki wzorców). To KLUCZOWA informacja dydaktyczna: ucząc się form wyższych, masdar dostajesz 'gratis'. Forma I wymaga zapamiętywania każdego osobno."
            }
        ]
    },
    {
        "key": "active_participle",
        "name": "Imiesłów czynny (اسم الفاعل)",
        "description": "اسم الفاعل — صيغة الفاعل من الأفعال",
        "iconName": "person.fill",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_ap1",
                "question": "Imiesłów czynny formy I od 'كَتَبَ' (pisał) to:",
                "translation": "(ما اسم الفاعل من كَتَبَ؟)",
                "options": ["كَاتِب", "مَكْتُوب", "كِتَابَة", "كَتَّاب"],
                "correct": "كَاتِب",
                "explanation": "Poprawnie: 'كَاتِب' (kātib) = piszący/pisarz. Imiesłów czynny formy I: فَاعِل (fāʿil). STAŁY wzorzec dla wszystkich czasowników formy I: فَاعِل. Jest to osoba/rzecz WYKONUJĄCA czynność. W polskim odpowiada: imiesłowowi ('piszący') lub rzeczownikowi ('pisarz'). Inne: قَارِئ (czytający), عَالِم (wiedzący/uczony), طَالِب (szukający/student), سَائِق (prowadzący/kierowca)."
            },
            {
                "id": "pa_ap2",
                "question": "Imiesłów czynny formy II od 'دَرَّسَ' (wykładał) to:",
                "translation": "(ما اسم الفاعل من دَرَّسَ؟)",
                "options": ["مُدَرِّس", "دَارِس", "مَدْرَسَة", "تَدْرِيس"],
                "correct": "مُدَرِّس",
                "explanation": "Poprawnie: 'مُدَرِّس' (mudarris) = wykładowca/nauczyciel. Imiesłów czynny form II–X: prefiks مُـ (mu-). Forma II: مُفَعِّل (mufaʿʿil) — z szaddą i kasrą. دَارِس (dāris) to imiesłów czynny formy I (studiujący), NIE formy II. مَدْرَسَة (madrasa) = szkoła (اسم مكان). تَدْرِيس = nauczanie (masdar II). Różnica II vs I: مُدَرِّس (naucza) vs. دَارِس (studiuje)."
            },
            {
                "id": "pa_ap3",
                "question": "Imiesłów czynny formy IV od 'أَسْلَمَ' (poddał się/nawrócił) to:",
                "translation": "(ما اسم الفاعل من أَسْلَمَ؟)",
                "options": ["مُسْلِم", "سَالِم", "إِسْلَام", "مُسْلَم"],
                "correct": "مُسْلِم",
                "explanation": "Poprawnie: 'مُسْلِم' (muslim) = poddający się (Bogu) / muzułmanin. Imiesłów czynny formy IV: مُفْعِل (mufʿil) — مُـ + kasra przed ostatnią. Porównaj: سَالِم (sālim) = bezpieczny/nienaruszony (imiesłów I od سَلِمَ). إِسْلَام = islam (masdar IV). مُسْلَم (muslam) z fathą = imiesłów BIERNY IV (uznany/oczywisty). Drobna różnica kasra↔fatha zmienia zupełnie znaczenie!"
            },
            {
                "id": "pa_ap4",
                "question": "Imiesłów czynny formy VIII od 'اِحْتَلَّ' (okupował) to:",
                "translation": "(ما اسم الفاعل من اِحْتَلَّ؟)",
                "options": ["مُحْتَلّ", "حَالّ", "مُحَلِّل", "حَلِيل"],
                "correct": "مُحْتَلّ",
                "explanation": "Poprawnie: 'مُحْتَلّ' (muḥtall) = okupant/okupujący. Imi. czynny formy VIII: مُفْتَعِل (muftaʿil). Z podwojonym rdzeniem: مُحْتَلِل → مُحْتَلّ. UWAGA: to samo słowo مُحْتَلّ może być imi. czynnym (okupant) LUB biernym (okupowany) — kontekst rozstrzyga! البَلَدُ المُحْتَلّ = kraj okupowany (bierny). الجَيْشُ المُحْتَلّ = armia okupująca (czynny)."
            },
            {
                "id": "pa_ap5",
                "question": "Imiesłów czynny formy X od 'اِسْتَقْبَلَ' (przyjmował) to:",
                "translation": "(ما اسم الفاعل من اِسْتَقْبَلَ؟)",
                "options": ["مُسْتَقْبِل", "مُسْتَقْبَل", "قَابِل", "اِسْتِقْبَال"],
                "correct": "مُسْتَقْبِل",
                "explanation": "Poprawnie: 'مُسْتَقْبِل' (mustaqbil) = przyjmujący/przyszły. Imi. czynny X: مُسْتَفْعِل (mustafʿil) — kasra przed końcem. Ciekawe: المُسْتَقْبَل (mustaqbal) z fathą = przyszłość (imi. bierny X = 'to, co jest ustawione naprzeciwko'). مُسْتَقْبِل z kasrą = ten, kto stoi naprzeciwko/przyjmuje. Znowu kasra↔fatha decyduje o znaczeniu!"
            },
            {
                "id": "pa_ap6",
                "question": "Imiesłów czynny od czasownika pustego 'قَالَ' (powiedział) to:",
                "translation": "(ما اسم الفاعل من قَالَ؟)",
                "options": ["قَائِل", "قَاوِل", "قَوَّال", "مُقِيل"],
                "correct": "قَائِل",
                "explanation": "Poprawnie: 'قَائِل' (qāʾil) = mówiący. W czasownikach pustych (أجوف): و/ي zamienia się na HAMZĘ w imiesłowie czynnym formy I: فَاعِل → و/ي → ء. Przykłady: نَائِم (śpiący od نَامَ), صَائِم (poszczący od صَامَ), زَائِر (odwiedzający od زَارَ), بَائِع (sprzedawca od بَاعَ). To STAŁA reguła: w imi. czynnym formy I, środkowa و/ي → ء (hamza)."
            },
            {
                "id": "pa_ap7",
                "question": "Imiesłów czynny od ناقص 'قَضَى' (orzekł) to:",
                "translation": "(ما اسم الفاعل من قَضَى؟)",
                "options": ["قَاضٍ", "قَاضِي", "قَضِيّ", "مُقَاضِي"],
                "correct": "قَاضٍ",
                "explanation": "Poprawnie: 'قَاضٍ' (qāḍin) = sędzia/orzekający. W ناقص (ułomnych): ي odpada w formie nieokreślonej: فَاعِي → فَاعٍ (z tanwinem). Z rodzajnikiem: القَاضِي (al-qāḍī) — ي wraca. Odnosi się to do mianownika i dopełniacza. W bierniku: قَاضِيًا (kasra + ya + tanwin). Inne: مَاشٍ/المَاشِي (idący), رَاعٍ/الرَّاعِي (pasterz), دَاعٍ/الدَّاعِي (wzywający)."
            },
            {
                "id": "pa_ap8",
                "question": "Jaka jest l. mn. żeńska od 'مُعَلِّم' (nauczyciel)?",
                "translation": "(ما جمع مُعَلِّمَات؟)",
                "options": ["مُعَلِّمَات", "مُعَلِّمُون", "مَعَالِم", "عَوَالِم"],
                "correct": "مُعَلِّمَات",
                "explanation": "Poprawnie: 'مُعَلِّمَات' (muʿallimāt) = nauczycielki. L. mn. żeńska imiesłowów: regularna końcówka -ات (-āt). L. mn. męska: مُعَلِّمُون (muʿallimūn) — regularna końcówka -ون (-ūn). Imiesłowy czynne form II–X mają REGULARNE l. mn.: م. -ون, ż. -ات. Imiesłowy formy I mogą mieć l. mn. łamaną: كَاتِب → كُتَّاب (pisarze), عَالِم → عُلَمَاء (uczeni)."
            },
            {
                "id": "pa_ap9",
                "question": "Imiesłów czynny może rządzić dopełnieniem jak czasownik?",
                "translation": "(هل يعمل اسم الفاعل عمل فعله؟)",
                "options": ["Tak — jeśli opisuje teraźniejszość lub ma الـ", "Nie — nigdy", "Tylko w formie I", "Tylko z przyimkiem"],
                "correct": "Tak — jeśli opisuje teraźniejszość lub ma الـ",
                "explanation": "TAK! Imiesłów czynny 'pracuje jak czasownik' (يَعْمَلُ عَمَلَ فِعْلِهِ) w 2 sytuacjach: 1) Z rodzajnikiem الـ: الكَاتِبُ الرِّسَالَةَ (ten piszący list). 2) Bez الـ, ale opisujący czas teraźniejszy: أَنَا كَاتِبٌ رِسَالَةً (ja [teraz] piszący list). W obu: dopełnienie w bierniku (منصوب). Jeśli opisuje przeszłość: nie rządzi dopełnieniem. To zaawansowana reguła gramatyki arabskiej."
            },
            {
                "id": "pa_ap10",
                "question": "الطالبُ _____ الكتابَ (Student czytający książkę) — imi. czynny z الـ",
                "translation": "(Student czytający książkę)",
                "options": ["القَارِئُ", "قَارِئٌ", "يَقْرَأُ", "مَقْرُوءُ"],
                "correct": "القَارِئُ",
                "explanation": "Poprawnie: 'الطالبُ القَارِئُ الكتابَ' = Student czytający książkę. القَارِئُ z الـ rządzi dopełnieniem الكتابَ (w bierniku). To jak polska konstrukcja: 'student czytający (co?) książkę'. Porównaj: الطالبُ يَقْرَأُ الكتابَ (Student czyta książkę — z czasownikiem). Imi. czynny z الـ jest bardziej literacki/formalny niż zdanie z czasownikiem."
            },
            {
                "id": "pa_ap11",
                "question": "Która forma to imiesłów czynny formy III?",
                "translation": "(ما وزن اسم الفاعل للفعل الثالث؟)",
                "options": ["مُفَاعِل", "فَاعِل", "مُفَعِّل", "مُفْعِل"],
                "correct": "مُفَاعِل",
                "explanation": "Imiesłów czynny formy III: مُفَاعِل (mufāʿil). Reguła: formy II–X tworzą imi. czynny z prefiksem مُـ (mu-) + kasra przed ostatnią spółgłoską rdzenia. Tabela: II=مُفَعِّل, III=مُفَاعِل, IV=مُفْعِل, V=مُتَفَعِّل, VI=مُتَفَاعِل, VII=مُنْفَعِل, VIII=مُفْتَعِل, IX=مُفْعَلِّ, X=مُسْتَفْعِل. Zawsze: مُـ + kasra na przedostatniej pozycji."
            },
            {
                "id": "pa_ap12",
                "question": "Imiesłów czynny formy V od 'تَكَلَّمَ' (mówił) to:",
                "translation": "(ما اسم الفاعل من تَكَلَّمَ؟)",
                "options": ["مُتَكَلِّم", "كَالِم", "تَكَلُّم", "مُكَلِّم"],
                "correct": "مُتَكَلِّم",
                "explanation": "Poprawnie: 'مُتَكَلِّم' (mutakallim) = mówiący/mówca. Forma V imi. czynny: مُتَفَعِّل (mutafaʿʿil). Reguła: weź formę V teraźniejszego (يَتَكَلَّمُ), zamień يَـ na مُـ, kasra na przedostatniej: مُتَكَلِّم. Ten sam mechanizm dla wszystkich form: imi. czynny = teraźniejszy z مُـ zamiast يَـ + kasra. مُكَلِّم to forma II (ten, kto mówi do kogoś intensywnie)."
            },
            {
                "id": "pa_ap13",
                "question": "Która z tych par to 'imi. czynny vs. bierny'?",
                "translation": "(أي زوج يمثل اسم الفاعل واسم المفعول؟)",
                "options": ["مُعَلِّم / مُعَلَّم", "تَعْلِيم / تَعَلُّم", "عَالِم / عِلْم", "مَعْلُوم / عَالَم"],
                "correct": "مُعَلِّم / مُعَلَّم",
                "explanation": "Poprawnie: مُعَلِّم (muʿallim) = nauczyciel (imi. czynny II) / مُعَلَّم (muʿallam) = nauczany (imi. bierny II). Różnica: kasra (ـِ) vs. fatha (ـَ) na przedostatniej. Czynny: kto WYKONUJE czynność (nauczyciel). Bierny: kto DOZNAJE czynności (uczeń/nauczany). تَعْلِيم/تَعَلُّم to para masdarów (II/V). عَالِم/عِلْم to imi. czynny I/masdar I. مَعْلُوم/عَالَم to imi. bierny I/świat."
            },
            {
                "id": "pa_ap14",
                "question": "Wzorzec فَعِيل jak 'كَرِيم' (szlachetny) to:",
                "translation": "(ما نوع صيغة فَعِيل؟)",
                "options": ["Przymiotnik utrwalony (صفة مشبّهة)", "Imiesłów czynny", "Imiesłów bierny", "Masdar"],
                "correct": "Przymiotnik utrwalony (صفة مشبّهة)",
                "explanation": "Poprawnie: فَعِيل (faʿīl) jak كَرِيم, جَمِيل, كَبِير to 'przymiotnik utrwalony' (صِفَة مُشَبَّهَة) — opisuje STAŁĄ cechę, nie czynność chwilową. Różnica: كَاتِب (piszący TERAZ — imi. czynny, cecha tymczasowa) vs. كَرِيم (szlachetny Z NATURY — cecha stała). Inne wzorce: فَعْلَان (جَوْعَان = głodny), أَفْعَل (أَحْمَر = czerwony). Inna kategoria niż اسم الفاعل!"
            },
            {
                "id": "pa_ap15",
                "question": "Forma صِيغَة مُبَالَغَة (intensywna) od كَتَبَ to:",
                "translation": "(ما صيغة المبالغة من كَتَبَ؟)",
                "options": ["كَتَّاب (wielki pisarz)", "كَاتِب (piszący)", "مَكْتُوب (napisany)", "كِتَابَة (pisanie)"],
                "correct": "كَتَّاب (wielki pisarz)",
                "explanation": "Poprawnie: 'كَتَّاب' (kattāb) = wielki/zawodowy pisarz. صِيغَة مُبَالَغَة = forma intensywna — wzmocniony imiesłów czynny. Wzorce: فَعَّال (najczęstszy): كَذَّاب (wielki kłamca), طَبَّاخ (kucharz zawodowy). فَعُول: أَكُول (żarłok). فَعِيل: عَلِيم (wszechwiedzący — atrybut Boga). مِفْعَال: مِقْدَام (bardzo odważny). Te formy wyrażają intensywność/zawodowość."
            }
        ]
    },
    {
        "key": "passive_participle",
        "name": "Imiesłów bierny (اسم المفعول)",
        "description": "اسم المفعول — صيغة من يقع عليه الفعل",
        "iconName": "tray.and.arrow.down",
        "color": "#22d3ee",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_pp1",
                "question": "Imiesłów bierny formy I od 'كَتَبَ' (pisał) to:",
                "translation": "(ما اسم المفعول من كَتَبَ؟)",
                "options": ["مَكْتُوب", "كَاتِب", "كِتَابَة", "كَتَّاب"],
                "correct": "مَكْتُوب",
                "explanation": "Poprawnie: 'مَكْتُوب' (maktūb) = napisany/przeznaczony. Imiesłów bierny formy I: مَفْعُول (mafʿūl). STAŁY wzorzec: مَـ na początku + ـُوـ przed końcem. Opisuje osobę/rzecz DOZNAJĄCĄ czynności. مَكْتُوب (napisany), مَعْرُوف (znany), مَحْبُوب (kochany), مَفْهُوم (zrozumiany). W polskim: 'napisany', 'znany' — imiesłowy bierne. Te słowa są bardzo częste w codziennym arabskim."
            },
            {
                "id": "pa_pp2",
                "question": "Imiesłów bierny formy II od 'عَلَّمَ' (uczył) to:",
                "translation": "(ما اسم المفعول من عَلَّمَ؟)",
                "options": ["مُعَلَّم", "مُعَلِّم", "مَعْلُوم", "تَعْلِيم"],
                "correct": "مُعَلَّم",
                "explanation": "Poprawnie: 'مُعَلَّم' (muʿallam) = nauczany/szkolony. Imi. bierny form II–X: prefiks مُـ + FATHA na przedostatniej (zamiast kasry czynnego). II: مُفَعَّل (z fathą). Porównaj: مُعَلِّم (kasra = nauczyciel, CZYNNY) vs. مُعَلَّم (fatha = nauczany, BIERNY). Ta minimalna różnica kasra↔fatha jest fundamentalna. مَعْلُوم (maʿlūm) = wiadomy — to imi. bierny formy I."
            },
            {
                "id": "pa_pp3",
                "question": "Imiesłów bierny formy IV od 'أَرْسَلَ' (wysłał) to:",
                "translation": "(ما اسم المفعول من أَرْسَلَ؟)",
                "options": ["مُرْسَل", "مُرْسِل", "رَسُول", "إِرْسَال"],
                "correct": "مُرْسَل",
                "explanation": "Poprawnie: 'مُرْسَل' (mursal) = wysłany/posłaniec. Imi. bierny IV: مُفْعَل (mufʿal) — fatha przed końcem. مُرْسِل (mursil, kasra) = nadawca (czynny). مُرْسَل (mursal, fatha) = wysłany (bierny). رَسُول (rasūl) = posłaniec/prorok — pokrewny, ale inna forma (فَعُول). إِرْسَال = wysyłanie (masdar IV). Jeden rdzeń ر-س-ل, cztery różne derywaty!"
            },
            {
                "id": "pa_pp4",
                "question": "Imiesłów bierny formy VIII od 'اِسْتَخْدَمَ' (używał) to:",
                "translation": "(ما اسم المفعول من اِسْتَخْدَمَ؟)",
                "options": ["مُسْتَخْدَم", "مُسْتَخْدِم", "خَادِم", "اِسْتِخْدَام"],
                "correct": "مُسْتَخْدَم",
                "explanation": "Poprawnie: 'مُسْتَخْدَم' (mustakhdam) = używany. Imi. bierny X: مُسْتَفْعَل (mustafʿal) — fatha. مُسْتَخْدِم (mustakhdim, kasra) = użytkownik/pracodawca (czynny). مُسْتَخْدَم (mustakhdam, fatha) = używany/pracownik (bierny). To słowo jest wszechobecne w nowoczesnym arabskim: مُسْتَخْدَم في تطبيقات كثيرة = używany w wielu aplikacjach."
            },
            {
                "id": "pa_pp5",
                "question": "Imi. bierny od pustego 'قَالَ' (powiedział) to:",
                "translation": "(ما اسم المفعول من قَالَ؟)",
                "options": ["مَقُول", "مَقْوُول", "قَائِل", "مُقَال"],
                "correct": "مَقُول",
                "explanation": "Poprawnie: 'مَقُول' (maqūl) = powiedziane. Od أجوف: مَفْعُول → uproszczone: مَقْوُول → مَقُول. Reguła: و pojawia się raz (nie podwajamy): مَبِيع (sprzedany od بَاعَ), مَزُور (odwiedzony od زَارَ). Ale UWAGA: مُقَال (muqāl) z fathą istnieje też jako imi. bierny formy IV (أَقَالَ). Inne: مَعْرُوف (znany), مَشْهُور (sławny — ale to فَعْلُول, nie مَفْعُول!)."
            },
            {
                "id": "pa_pp6",
                "question": "Imi. bierny od ناقص 'بَنَى' (budował) to:",
                "translation": "(ما اسم المفعول من بَنَى؟)",
                "options": ["مَبْنِيّ", "مَبْنُوّ", "بَانٍ", "بِنَاء"],
                "correct": "مَبْنِيّ",
                "explanation": "Poprawnie: 'مَبْنِيّ' (mabniyy) = zbudowany. Od ناقص z ي: مَفْعُول → مَبْنُوي → مَبْنِيّ (uproszczenie: و+ي → يّ z szaddą). To STAŁA reguła dla ناقص z ي. Od و: مَدْعُوّ (zaproszony od دَعَا). Porównaj: المَبْنِيّ للمَجْهُول = strona bierna (dosł. 'zbudowany dla nieznanego'). مَبْنِيّ مِنَ الحَجَر = zbudowany z kamienia."
            },
            {
                "id": "pa_pp7",
                "question": "Imi. bierny może pełnić funkcję rzeczownika?",
                "translation": "(هل يُستخدم اسم المفعول كاسم؟)",
                "options": ["Tak — wiele rzeczowników to dawne imi. bierne", "Nie — tylko jako przymiotnik", "Tylko w formie I", "Tylko z rodzajnikiem"],
                "correct": "Tak — wiele rzeczowników to dawne imi. bierne",
                "explanation": "TAK — wiele popularnych rzeczowników to w istocie imiesłowy bierne: مَكْتُوب (list/przeznaczenie), مَفْهُوم (pojęcie/koncepcja), مَشْرُوع (projekt), مَوْضُوع (temat), مَحْفُوظ (archiwum), مَجْهُول (nieznany). Tak samo w polskim: 'pisany' → 'pismo', 'mówiony' → 'mowa'. Arabski robi to systematycznie — maszynka derywacyjna generuje tysiące słów z setek rdzeni."
            },
            {
                "id": "pa_pp8",
                "question": "هذا الكتابُ _____ بالعربية (Ta książka jest napisana po arabsku)",
                "translation": "(Ta książka jest napisana po arabsku)",
                "options": ["مَكْتُوبٌ", "كَاتِبٌ", "كِتَابَةٌ", "يُكْتَبُ"],
                "correct": "مَكْتُوبٌ",
                "explanation": "Poprawnie: 'هذا الكتابُ مَكْتُوبٌ بالعربية' = Ta książka jest napisana po arabsku. مَكْتُوبٌ pełni funkcję orzeczenia (خبر) w zdaniu nominalnym. Jak w polskim: 'Książka jest NAPISANA'. Imi. bierny z tanwinem (ٌ) = nieokreślony/orzecznikowy. Porównaj: الكتابُ المَكْتُوبُ (książka napisana — przydawka z الـ). Dwie różne funkcje składniowe."
            },
            {
                "id": "pa_pp9",
                "question": "Jaka jest reguła tworzenia imi. biernego form II–X?",
                "translation": "(كيف نصوغ اسم المفعول للأفعال II-X؟)",
                "options": ["Zamień يَـ na مُـ w teraźn., fatha na przedostatniej", "Dodaj مَـ + ـُوـ", "Użyj wzorca مَفْعُول", "Dodaj końcówkę -ون"],
                "correct": "Zamień يَـ na مُـ w teraźn., fatha na przedostatniej",
                "explanation": "Reguła UNIWERSALNA dla form II–X: weź czas teraźniejszy, zamień prefiks يَـ na مُـ, i postaw fathę na spółgłosce PRZED ostatnią. To daje imi. bierny. Z kasrą = czynny. Np.: يُعَلِّمُ → مُعَلِّم (kasra=czynny) / مُعَلَّم (fatha=bierny). يَسْتَخْدِمُ → مُسْتَخْدِم (kasra) / مُسْتَخْدَم (fatha). Jedyna różnica kasra↔fatha. Forma I osobno: مَفْعُول."
            },
            {
                "id": "pa_pp10",
                "question": "Imi. bierny formy V od 'تَوَقَّعَ' (oczekiwał) to:",
                "translation": "(ما اسم المفعول من تَوَقَّعَ؟)",
                "options": ["مُتَوَقَّع", "مُتَوَقِّع", "تَوَقُّع", "وَاقِع"],
                "correct": "مُتَوَقَّع",
                "explanation": "Poprawnie: 'مُتَوَقَّع' (mutawqqaʿ) = oczekiwany/spodziewany. Imi. bierny V: مُتَفَعَّل (fatha). Czynny V: مُتَوَقِّع (kasra) = oczekujący. من المُتَوَقَّع أن... = Spodziewane jest, że... — bardzo częsty zwrot w mediach. غَيْر مُتَوَقَّع = nieoczekiwany. Porównaj: وَاقِع (imi. czynny I od وَقَعَ = padł/zdarzyło się) = rzeczywisty/fakt."
            },
            {
                "id": "pa_pp11",
                "question": "Imi. bierny formy VII od 'اِنْكَسَرَ' (złamał się) to:",
                "translation": "(ما اسم المفعول من اِنْكَسَرَ؟)",
                "options": ["Forma VII nie ma imiesłowu biernego", "مُنْكَسَر", "مَكْسُور", "اِنْكِسَار"],
                "correct": "Forma VII nie ma imiesłowu biernego",
                "explanation": "Poprawnie: forma VII (اِنْفَعَلَ) i forma IX (اِفْعَلَّ) NIE mają imiesłowów biernych. Dlaczego? Bo są z natury NIEPRZECHODNIE — nie przyjmują dopełnienia bliższego. Nie można 'być złamanym się'. اِنْكَسَرَ samo w sobie wyraża stan bierny/medialny. Jeśli potrzebujesz imi. biernego: użyj formy I — مَكْسُور (złamany, od كَسَرَ). To ważna reguła gramatyczna!"
            },
            {
                "id": "pa_pp12",
                "question": "الرسالةُ _____ (List został wysłany) — imi. bierny od أَرْسَلَ",
                "translation": "(List został wysłany)",
                "options": ["مُرْسَلَة", "مُرْسِلَة", "رَسُولَة", "إِرْسَالَة"],
                "correct": "مُرْسَلَة",
                "explanation": "Poprawnie: 'الرسالةُ مُرْسَلَةٌ' = List jest wysłany. مُرْسَلَة (z tāʾ marbūṭa) bo الرسالة jest żeńska. Imi. bierny odmienia się jak przymiotnik: r.m. مُرْسَل, r.ż. مُرْسَلَة, l.mn.m. مُرْسَلُون, l.mn.ż. مُرْسَلَات. Zgodność w rodzaju i liczbie z opisywanym rzeczownikiem — tak jak w polskim: 'list wysłany', 'wiadomość wysłana'."
            },
            {
                "id": "pa_pp13",
                "question": "Wzorzec مَفْعُول używa się również jako:",
                "translation": "(هل لمَفْعُول استخدامات أخرى؟)",
                "options": ["Dopełnienie bliższe (مفعول به)", "Podmiot", "Przyimek", "Spójnik"],
                "correct": "Dopełnienie bliższe (مفعول به)",
                "explanation": "Tak — termin 'مَفْعُول بِهِ' (mafʿūl bihi) = dosłownie 'zrobione z nim' = dopełnienie bliższe (odpowiednik polskiego biernika). To NIE przypadek — imiesłów bierny i dopełnienie bliższe mają wspólną logikę: oba odnoszą się do tego, CO DOZNAJE czynności. Inne 'مَفَاعِيل' (dopełnienia): مَفْعُول لَه (dla czego — dopełnienie przyczyny), مَفْعُول مَعَه (z czym — dopełnienie towarzyszenia)."
            },
            {
                "id": "pa_pp14",
                "question": "Imi. bierny od مضعّف 'رَدَّ' (odpowiedział) to:",
                "translation": "(ما اسم المفعول من رَدَّ؟)",
                "options": ["مَرْدُود", "مَرَدّ", "رَادّ", "رِدَاد"],
                "correct": "مَرْدُود",
                "explanation": "Poprawnie: 'مَرْدُود' (mardūd) = odrzucony/zwrócony. Od مضعّف: مَفْعُول z rozdzielonym podwojeniem: مَرْدُود (nie *مَرَدّ). Rdzeń ر-د-د: ر po مَـ, pierwsza د po سكون, و, druga د. Inne: مَمْدُود (wyciągnięty od مَدَّ), مَشْدُود (napięty od شَدَّ), مَحْبُوب (kochany od حَبَّ — popularny!). Wzorzec مَفْعُول regularnie 'rozpakowuje' podwojenie."
            },
            {
                "id": "pa_pp15",
                "question": "Który z tych wyrazów to imi. bierny formy I?",
                "translation": "(أيّ من هذه اسم مفعول؟)",
                "options": ["مَعْرُوف (znany)", "عَارِف (wiedzący)", "مَعْرِفَة (wiedza)", "عَرَّافَ (wróżbita)"],
                "correct": "مَعْرُوف (znany)",
                "explanation": "Poprawnie: 'مَعْرُوف' (maʿrūf) = znany/dobry uczynek. Wzorzec مَفْعُول = imi. bierny I. عَارِف (fāʿil) = wiedzący (imi. czynny I). مَعْرِفَة (maʿrifa) = wiedza/znajomość (masdar specjalny). عَرَّاف (faʿʿāl) = wróżbita (forma intensywna). Rdzeń ع-ر-ف (poznanie) daje minimum 4 derywaty z różnymi odcieniami. مَعْرُوف jest też terminem islamskim: dobry uczynek/przysługa."
            }
        ]
    },
    {
        "key": "kana_and_sisters",
        "name": "كان i siostry (كان وأخواتها)",
        "description": "كان وأخواتها — الأفعال الناقصة",
        "iconName": "clock.arrow.circlepath",
        "color": "#f472b6",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_kas1",
                "question": "كانَ الجوُّ _____ (Pogoda była piękna) — orzeczenie po كان",
                "translation": "(Pogoda była piękna)",
                "options": ["جَمِيلاً", "جَمِيلٌ", "جَمِيلٍ", "الجَمِيل"],
                "correct": "جَمِيلاً",
                "explanation": "Poprawnie: 'كانَ الجوُّ جَمِيلاً' = Pogoda była piękna. كَانَ zmienia orzeczenie (خبر) z mianownika na BIERNIK (منصوب): الجوُّ جَمِيلٌ (jest piękna — orzecznikowy mianownik) → كان الجوُّ جَمِيلاً (była piękna — biernik). Podmiot (اسم كان) zostaje w mianowniku. To KLUCZOWA reguła: كان = podmiot مرفوع + orzeczenie منصوب."
            },
            {
                "id": "pa_kas2",
                "question": "Które z tych zdań jest poprawne?",
                "translation": "(أي جملة صحيحة نحوياً؟)",
                "options": ["كانَ الطالبُ مُجْتَهِداً", "كانَ الطالبَ مُجْتَهِدٌ", "كانَ الطالبِ مُجْتَهِداً", "كانَ الطالبُ مُجْتَهِدٌ"],
                "correct": "كانَ الطالبُ مُجْتَهِداً",
                "explanation": "Poprawnie: 'كانَ الطالبُ مُجْتَهِداً' = Student był pilny. الطالبُ = اسم كان (mianownik, ḍamma). مُجْتَهِداً = خبر كان (biernik, fatha+tanwin). Częsty BŁĄD: zostawienie orzeczenia w mianowniku (*مُجْتَهِدٌ). Po كان orzeczenie MUSI być w bierniku. Porównaj bez كان: الطالبُ مُجْتَهِدٌ (Student jest pilny — oba w mianowniku). كان 'opuszcza' orzeczenie do biernika."
            },
            {
                "id": "pa_kas3",
                "question": "لَيْسَ الأمرُ _____ (Sprawa nie jest łatwa) — orzeczenie po لَيْسَ",
                "translation": "(Sprawa nie jest łatwa)",
                "options": ["سَهْلاً", "سَهْلٌ", "سَهْلٍ", "بسَهْلٍ"],
                "correct": "سَهْلاً",
                "explanation": "Poprawnie: 'لَيْسَ الأمرُ سَهْلاً' = Sprawa nie jest łatwa. لَيْسَ (nie jest) to 'siostra' كان — rządzi tak samo: podmiot مرفوع + orzeczenie منصوب. لَيْسَ jest specjalna: wygląda jak czas przeszły, ale znaczy TERAŹNIEJSZOŚĆ (negacja stanu). Nie ma czasu teraźniejszego ani przyszłego — tylko tę jedną formę. Alternatywa: بسَهْلٍ (z بِـ) też jest poprawna: لَيْسَ بسَهْلٍ."
            },
            {
                "id": "pa_kas4",
                "question": "أَصْبَحَ الولدُ _____ (Chłopiec stał się wysoki) — siostry كان",
                "translation": "(Chłopiec stał się wysoki)",
                "options": ["طَوِيلاً", "طَوِيلٌ", "طَوِيلٍ", "الطَّوِيل"],
                "correct": "طَوِيلاً",
                "explanation": "Poprawnie: 'أَصْبَحَ الولدُ طَوِيلاً' = Chłopiec stał się wysoki (rano/stopniowo). أَصْبَحَ (stał się/zaczął być) to 'siostra' كان — rządzi identycznie: podmiot مرفوع + orzeczenie منصوب. 'Siostry كان' to: أَصْبَحَ (stał się rano), أَمْسَى (stał się wieczorem), أَضْحَى (stał się przed południem), ظَلَّ (pozostał/ciągle był), بَاتَ (spędził noc będąc), صَارَ (stał się), مَا زَالَ (wciąż jest)."
            },
            {
                "id": "pa_kas5",
                "question": "مَا زَالَ المطرُ _____ (Deszcz nadal pada)",
                "translation": "(Deszcz nadal pada)",
                "options": ["يَنْزِلُ", "نَازِلاً", "نُزُولاً", "يُنَزِّلُ"],
                "correct": "نَازِلاً",
                "explanation": "Poprawnie obie: 'نَازِلاً' (padający — imi. czynny w bierniku) lub zdanie z يَنْزِلُ (pada). مَا زَالَ = 'wciąż jest/nadal' — siostra كان z negacją مَا (paradoksalnie: negacja+negacja = pozytyw). Inne 'ciągłe siostry': مَا بَرِحَ (wciąż), مَا فَتِئَ (wciąż), مَا اِنْفَكَّ (wciąż). Wszystkie rządzą: podmiot مرفوع + orzeczenie منصوب."
            },
            {
                "id": "pa_kas6",
                "question": "كانَتِ الطالبةُ _____ (Studentka była inteligentna)",
                "translation": "(Studentka była inteligentna)",
                "options": ["ذَكِيَّةً", "ذَكِيَّةٌ", "ذَكِيٍّ", "ذَكِيّاً"],
                "correct": "ذَكِيَّةً",
                "explanation": "Poprawnie: 'كانَتِ الطالبةُ ذَكِيَّةً' = Studentka była inteligentna. كانَتْ z tāʾ żeńskim, bo الطالبة jest żeńska. ذَكِيَّةً = orzeczenie w bierniku, żeńskie (tāʾ marbūṭa). Orzeczenie po كان zgadza się w RODZAJU z podmiotem. Biernik żeński: -ةً (-atan). Porównaj męski: ذَكِيّاً (-an). To tak jak w polskim: 'była inteligentna' (nie *'inteligentny')."
            },
            {
                "id": "pa_kas7",
                "question": "Orzeczenie كان może być zdaniem?",
                "translation": "(هل يكون خبر كان جملة؟)",
                "options": ["Tak — zdaniem czasownikowym lub nominalnym", "Nie — tylko pojedyncze słowo", "Tylko przymiotnikiem", "Tylko rzeczownikiem"],
                "correct": "Tak — zdaniem czasownikowym lub nominalnym",
                "explanation": "TAK — orzeczenie كان może być: 1) Pojedyncze: كانَ مَرِيضاً (był chory). 2) Zdanie czasownikowe: كانَ يَدْرُسُ (studiował/był studiujący). 3) Zdanie nominalne: كانَ أَبُوهُ طَبِيباً (jego ojciec był lekarzem). 4) Wyrażenie przyimkowe: كانَ في البيتِ (był w domu). Najczęstsze: كان + يَفْعَلُ = czas przeszły ciągły: كانَ يَدْرُسُ = studiował (= był studiujący [regularly])."
            },
            {
                "id": "pa_kas8",
                "question": "كانَ يَدْرُسُ اللغةَ العربيةَ — to znaczy:",
                "translation": "(ما معنى كان يدرس؟)",
                "options": ["Studiował (regularnie/w przeszłości)", "Będzie studiował", "Studiuje teraz", "Chce studiować"],
                "correct": "Studiował (regularnie/w przeszłości)",
                "explanation": "Poprawnie: 'كانَ يَدْرُسُ' = studiował (zwyczajowo/ciągle w przeszłości). كانَ + czas teraźn. = czas PRZESZŁY CIĄGŁY/ZWYCZAJOWY. Odpowiada polskiemu: 'studiował' (niedokonane) lub angielskiemu 'used to study/was studying'. Porównaj: دَرَسَ = (po)studiował (dokonane/jednorazowe). كانَ يَدْرُسُ = studiował regularnie. To podstawowy sposób wyrażania przeszłego ciągłego w arabskim."
            },
            {
                "id": "pa_kas9",
                "question": "Jak tworzymy przyszły z كان? (سَيَكُونُ)",
                "translation": "(كيف نستخدم كان في المستقبل؟)",
                "options": ["سَيَكُونُ + orzeczenie منصوب", "كانَ + سَوْفَ", "يَكُونُ + كانَ", "كَانَسَ"],
                "correct": "سَيَكُونُ + orzeczenie منصوب",
                "explanation": "Poprawnie: 'سَيَكُونُ' (sayakūnu) = będzie. سَـ + يَكُونُ (teraźn. od كان). Przykład: سَيَكُونُ الجوُّ جَمِيلاً = Pogoda będzie piękna. Reguła ta sama: podmiot مرفوع + orzeczenie منصوب. Porównaj 3 czasy: الجوُّ جَمِيلٌ (jest piękna — bez كان), كانَ الجوُّ جَمِيلاً (była piękna — przeszły), سَيَكُونُ الجوُّ جَمِيلاً (będzie piękna — przyszły)."
            },
            {
                "id": "pa_kas10",
                "question": "صَارَ الماءُ _____ (Woda stała się lodem)",
                "translation": "(Woda stała się lodem)",
                "options": ["جَلِيداً", "جَلِيدٌ", "جَلِيدٍ", "الجَلِيد"],
                "correct": "جَلِيداً",
                "explanation": "Poprawnie: 'صَارَ الماءُ جَلِيداً' = Woda stała się lodem. صَارَ (ṣāra) = stał się / zmienił się w — siostra كان ZMIANY. Orzeczenie w bierniku: جَلِيداً. Porównaj: أَصْبَحَ = stał się (rano/stopniowo), صَارَ = stał się (zmiana stanu), بَاتَ = stał się (na noc/niespodziewanie). Każda 'siostra' ma swój odcień semantyczny, ale reguła gramatyczna IDENTYCZNA."
            },
            {
                "id": "pa_kas11",
                "question": "لَيْسَ _____ طَبِيباً (To nie jest lekarz) — podmiot لَيْسَ",
                "translation": "(To nie jest lekarz)",
                "options": ["هُوَ", "هُوَ", "إِيَّاهُ", "لَه"],
                "correct": "هُوَ",
                "explanation": "Poprawnie: 'لَيْسَ هُوَ طَبِيباً' = On nie jest lekarzem. Podmiot لَيْسَ (اسم لَيْسَ) w mianowniku: هُوَ. Orzeczenie (خبر لَيْسَ) w bierniku: طَبِيباً. Ale UWAGA: podmiot może być ukryty: لَيْسَ طَبِيباً = (On) nie jest lekarzem — podmiot ضمير مستتر (zaimek ukryty). لَيْسَ to jedyna 'siostra' كان bez formy teraźniejszej — jest zastąpiona przez لَا + اسم: لَا طَبِيبَ."
            },
            {
                "id": "pa_kas12",
                "question": "Ile 'sióstr كان' jest w klasycznym arabskim?",
                "translation": "(كم عدد أخوات كان؟)",
                "options": ["13 (trzynaście)", "3", "7", "20"],
                "correct": "13 (trzynaście)",
                "explanation": "Tradycyjnie gramatycy wyróżniają 13 'sióstr كان' (أخوات كان): كَانَ (był), أَصْبَحَ (stał się rano), أَمْسَى (stał się wieczorem), أَضْحَى (stał się w południe), ظَلَّ (ciągle był), بَاتَ (spędził noc), صَارَ (stał się), لَيْسَ (nie jest), مَا زَالَ (wciąż), مَا بَرِحَ (wciąż), مَا فَتِئَ (wciąż), مَا اِنْفَكَّ (wciąż), مَا دَامَ (dopóki). Najważniejsze w MSA: كان, ليس, صار, أصبح, ما زال."
            },
            {
                "id": "pa_kas13",
                "question": "Negacja كان to:",
                "translation": "(ما نفي كان؟)",
                "options": ["لَمْ يَكُنْ (nie był)", "مَا كَانَ (nie był)", "لَيْسَ كَانَ", "كَانَ لَا"],
                "correct": "لَمْ يَكُنْ (nie był)",
                "explanation": "Obie poprawne: لَمْ يَكُنْ (lam yakun) i مَا كَانَ (mā kāna) = nie był. لَمْ + مجزوم: لَمْ يَكُنْ (ن odpada w jussive: يَكُونُ → يَكُنْ). مَا + czas przeszły: مَا كَانَ. W MSA oba używane. مَا كَانَ jest bardziej literackie/Koraniczne. لَمْ يَكُنْ częstsze w prasie. NIE MOŻNA: *لَيْسَ كَانَ (nie łączy się dwóch 'sióstr'!) ani *كَانَ لَا (لَا nie neguje przeszłego)."
            },
            {
                "id": "pa_kas14",
                "question": "Czy orzeczenie كان może być zdaniem przyimkowym?",
                "translation": "(هل يأتي خبر كان شبه جملة؟)",
                "options": ["Tak — كانَ في البيتِ (był w domu)", "Nie — tylko przymiotnik/rzeczownik", "Tylko z لَيْسَ", "Tylko w 3. osobie"],
                "correct": "Tak — كانَ في البيتِ (był w domu)",
                "explanation": "TAK: 'كانَ في البيتِ' = (On) był w domu. في البيتِ to شِبْه جُمْلَة (wyrażenie przyimkowe) pełniące funkcję orzeczenia. Inne: كانوا عِنْدَ المعلمِ (byli u nauczyciela), كانَتْ بَيْنَ الكتبِ (była między książkami). To trzeci typ orzeczenia كان (obok pojedynczego słowa i zdania). W polskim tak samo: 'Był w domu' — orzeczenie przyimkowe."
            },
            {
                "id": "pa_kas15",
                "question": "مَا دَامَ في البيتِ يُذَاكِرُ — znaczy:",
                "translation": "(ما معنى ما دامَ؟)",
                "options": ["Dopóki jest w domu, uczy się", "Nie jest w domu", "Był w domu", "Wciąż w domu"],
                "correct": "Dopóki jest w domu, uczy się",
                "explanation": "Poprawnie: 'مَا دَامَ' (mā dāma) = dopóki (jest). Unikalna 'siostra' كان — jedyna o znaczeniu warunkowym/czasowym: 'dopóki trwa stan X'. سَأَنْتَظِرُ مَا دَامَ الجوُّ جَمِيلاً = Będę czekał, dopóki pogoda jest piękna. Rządzi: podmiot مرفوع + orzeczenie منصوب. Ale semantycznie: 'tak długo jak / dopóki'. Inna niż pozostałe siostry, które oznaczają czas/zmianę."
            }
        ]
    },
    {
        "key": "inna_and_sisters",
        "name": "إنّ i siostry (إنّ وأخواتها)",
        "description": "إنّ وأخواتها — الحروف الناسخة",
        "iconName": "exclamationmark.bubble",
        "color": "#60a5fa",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_ias1",
                "question": "إنَّ الجوَّ _____ (Zaprawdę pogoda jest piękna) — orzeczenie po إنّ",
                "translation": "(Zaprawdę pogoda jest piękna)",
                "options": ["جَمِيلٌ", "جَمِيلاً", "جَمِيلٍ", "جَمِيلَ"],
                "correct": "جَمِيلٌ",
                "explanation": "Poprawnie: 'إنَّ الجوَّ جَمِيلٌ' = Zaprawdę pogoda jest piękna. إنّ robi ODWROTNIE niż كان: podmiot (اسم إنّ) → BIERNIK (منصوب): الجوَّ. Orzeczenie (خبر إنّ) → MIANOWNIK (مرفوع): جَمِيلٌ. Porównaj: كان (podmiot مرفوع, orzeczenie منصوب) vs. إنّ (podmiot منصوب, orzeczenie مرفوع). ODWROTNA reguła!"
            },
            {
                "id": "pa_ias2",
                "question": "Ile jest 'sióstr إنّ'?",
                "translation": "(كم عدد أخوات إنّ؟)",
                "options": ["6 (sześć)", "3", "13", "9"],
                "correct": "6 (sześć)",
                "explanation": "Sześć 'sióstr إنّ' (الحُرُوف النَّاسِخَة): 1) إنَّ (zaprawdę/zaiste), 2) أَنَّ (że), 3) كَأَنَّ (jakby/jak gdyby), 4) لَكِنَّ (ale/jednak), 5) لَيْتَ (oby/chciałbym), 6) لَعَلَّ (może/oby). Wszystkie: podmiot منصوب + orzeczenie مرفوع. WAŻNE: to PARTYKUŁY (حُرُوف), nie czasowniki jak siostry كان. Wchodzą na początek zdania nominalnego i zmieniają deklinację."
            },
            {
                "id": "pa_ias3",
                "question": "أَنَّ المعلمَ _____ (Że nauczyciel jest obecny) — podmiot i orzeczenie",
                "translation": "(Że nauczyciel jest obecny)",
                "options": ["مَوْجُودٌ", "مَوْجُوداً", "مَوْجُودٍ", "المَوْجُود"],
                "correct": "مَوْجُودٌ",
                "explanation": "Poprawnie: 'أَنَّ المعلمَ مَوْجُودٌ' = że nauczyciel jest obecny. أَنَّ = 'że' — siostra إنّ (z fathą na hamzy, nie kasrą). Reguła identyczna: المعلمَ = اسم أنّ (biernik), مَوْجُودٌ = خبر أنّ (mianownik). Różnica إنَّ vs أَنَّ: إنَّ = na początku zdania (emfaza), أَنَّ = po czasowniku/w środku (= że). عَلِمْتُ أنَّ المعلمَ مَوْجُودٌ = Dowiedziałem się, że nauczyciel jest obecny."
            },
            {
                "id": "pa_ias4",
                "question": "كَأَنَّ الشمسَ _____ (Jakby słońce było kulą) — كَأَنَّ",
                "translation": "(Jakby słońce było kulą)",
                "options": ["كُرَةٌ", "كُرَةً", "كُرَةٍ", "الكُرَة"],
                "correct": "كُرَةٌ",
                "explanation": "Poprawnie: 'كَأَنَّ الشمسَ كُرَةٌ' = Jakby słońce (było) kulą. كَأَنَّ (kaʾanna) = jakby/jak gdyby — wyraża porównanie/metaforę. الشمسَ = اسم كأنّ (biernik), كُرَةٌ = خبر كأنّ (mianownik). كَأَنَّ jest KLUCZOWA w literaturze/poezji arabskiej. Inne: كَأَنَّهُ أَسَدٌ = jakby (on) był lwem. كَأَنَّ + ها (zaimek) tworzy popularne كَأَنَّها."
            },
            {
                "id": "pa_ias5",
                "question": "لَكِنَّ الامتحانَ _____ (Ale egzamin jest trudny) — لَكِنَّ",
                "translation": "(Ale egzamin jest trudny)",
                "options": ["صَعْبٌ", "صَعْباً", "صَعْبٍ", "الصَّعْب"],
                "correct": "صَعْبٌ",
                "explanation": "Poprawnie: 'لَكِنَّ الامتحانَ صَعْبٌ' = Ale egzamin jest trudny. لَكِنَّ (lākinna) = ale/jednak — wyraża przeciwstawienie. الامتحانَ = اسم لكنّ (biernik), صَعْبٌ = خبر لكنّ (mianownik). UWAGA: لَكِنَّ (z szaddą) vs. لَكِنْ (bez szaddy): لَكِنَّ = siostra إنّ (zmienia deklinację). لَكِنْ = zwykły spójnik 'ale' (bez zmiany). To KLUCZOWA różnica!"
            },
            {
                "id": "pa_ias6",
                "question": "لَيْتَ السلامَ _____ (Obym pokój (panował)) — لَيْتَ",
                "translation": "(Oby pokój zapanował)",
                "options": ["يَسُودُ", "سَائِدٌ", "سَائِداً", "سِيَادَة"],
                "correct": "يَسُودُ",
                "explanation": "Poprawnie: 'لَيْتَ السلامَ يَسُودُ' = Oby pokój panował. لَيْتَ (layta) = oby/chciałbym — wyraża życzenie (nierealne lub trudne). السلامَ = اسم ليت (biernik), يَسُودُ = خبر ليت (zdanie czasownikowe jako orzeczenie). لَيْتَنِي كُنْتُ هُنَاكَ = Chciałbym, żebym tam był. W polskim: 'oby/gdyby/chciałbym' — tryb życzący. Jedno z najpiękniejszych arabskich wyrażeń."
            },
            {
                "id": "pa_ias7",
                "question": "لَعَلَّ الطقسَ _____ غَداً (Może pogoda się poprawi jutro) — لَعَلَّ",
                "translation": "(Może pogoda się poprawi jutro)",
                "options": ["يَتَحَسَّنُ", "مُتَحَسِّنٌ", "تَحَسُّنٌ", "حَسَنٌ"],
                "correct": "يَتَحَسَّنُ",
                "explanation": "Poprawnie: 'لَعَلَّ الطقسَ يَتَحَسَّنُ غَداً' = Może pogoda się poprawi jutro. لَعَلَّ (laʿalla) = może/oby — wyraża nadzieję lub przypuszczenie. الطقسَ = اسم لعلّ (biernik), يَتَحَسَّنُ = خبر لعلّ (zdanie czasownikowe). Różnica: لَيْتَ = życzenie NIEREALNE (marzenie), لَعَلَّ = nadzieja REALNA (możliwość). لَعَلَّهُ يَأْتِي = Może on przyjdzie."
            },
            {
                "id": "pa_ias8",
                "question": "Czy orzeczenie إنّ może być zdaniem przyimkowym?",
                "translation": "(هل يكون خبر إنّ شبه جملة؟)",
                "options": ["Tak — إنَّ الكتابَ على المكتبِ", "Nie — tylko przymiotnik", "Tylko z إنّ, nie z siostrami", "Tylko w r. żeńskim"],
                "correct": "Tak — إنَّ الكتابَ على المكتبِ",
                "explanation": "TAK: 'إنَّ الكتابَ على المكتبِ' = Zaprawdę książka jest na biurku. على المكتبِ = wyrażenie przyimkowe jako خبر إنّ. Tak samo jak z كان, orzeczenie إنّ ma 3 typy: 1) Pojedyncze: إنَّ اللهَ كَرِيمٌ, 2) Zdanie: إنَّ الطالبَ يَدْرُسُ, 3) Wyrażenie przyimk.: إنَّ الكتابَ في الحقيبةِ. Podmiot إنّ ZAWSZE w bierniku, niezależnie od typu orzeczenia."
            },
            {
                "id": "pa_ias9",
                "question": "إنَّ vs. أَنَّ — kiedy używamy إنَّ (z kasrą)?",
                "translation": "(متى نستخدم إنَّ بالكسر؟)",
                "options": ["Na początku zdania lub po قَالَ", "Po czasownikach مثل عَلِمَ", "Zawsze", "Tylko w Koranie"],
                "correct": "Na początku zdania lub po قَالَ",
                "explanation": "إنَّ (z kasrą, innā) używamy: 1) Na POCZĄTKU zdania: إنَّ اللهَ عَلِيمٌ. 2) Po قَالَ: قَالَ إنَّهُ مَرِيضٌ (Powiedział: zaprawdę on jest chory). 3) Po أَلَا: أَلَا إنَّ... أَنَّ (z fathą, anna) używamy PO czasownikach/przyimkach: عَلِمْتُ أَنَّ... (wiedziałem, że), فِي أَنَّ... To STAŁA reguła — początek zdania = إنَّ (kasra), w środku po czasowniku = أَنَّ (fatha)."
            },
            {
                "id": "pa_ias10",
                "question": "إنَّ + zaimek 'ja' to:",
                "translation": "(إنَّ + ضمير أنا = ؟)",
                "options": ["إنَّنِي / إنِّي", "إنَّ أَنَا", "إنَّانِي", "أَنَا إنَّ"],
                "correct": "إنَّنِي / إنِّي",
                "explanation": "Poprawnie: 'إنَّنِي' (innanī) lub skrócona 'إنِّي' (innī) = zaprawdę ja... Zaimki łączą się z إنّ jako przyrostki: إنَّهُ (innahu = zaprawdę on), إنَّهَا (innahā = zap. ona), إنَّكَ (innaka = zap. ty m.), إنَّنَا (innanā = zap. my). Zaimek = اسم إنّ w bierniku. NIE MOŻNA: *إنَّ أَنَا (oddzielny zaimek) — to BŁĄD. Zaimek MUSI być przyrostkiem."
            },
            {
                "id": "pa_ias11",
                "question": "Która reguła jest WSPÓLNA dla كان i إنّ?",
                "translation": "(ما المشترك بين كان وإنّ؟)",
                "options": ["Obie zmieniają deklinację zdania nominalnego", "Obie dają podmiotowi biernik", "Obie dają orzeczeniu biernik", "Obie są czasownikami"],
                "correct": "Obie zmieniają deklinację zdania nominalnego",
                "explanation": "WSPÓLNE: obie są 'نَوَاسِخ' (modyfikatory) — wchodzą do zdania nominalnego i ZMIENIAJĄ deklinację. Bez nich: المُبْتَدَأُ مَرْفُوعٌ + الخَبَرُ مَرْفُوعٌ (oba mianownik). كان: podmiot مرفوع + orzeczenie منصوب (biernik). إنّ: podmiot منصوب (biernik) + orzeczenie مرفوع. ODWROTNE efekty! كان = czasownik, إنّ = partykuła. Ale obie = نواسخ."
            },
            {
                "id": "pa_ias12",
                "question": "إنَّ هذا الكتابَ _____ (Zaprawdę ta książka jest pożyteczna)",
                "translation": "(Zaprawdę ta książka jest pożyteczna)",
                "options": ["مُفِيدٌ", "مُفِيداً", "مُفِيدٍ", "المُفِيد"],
                "correct": "مُفِيدٌ",
                "explanation": "Poprawnie: 'إنَّ هذا الكتابَ مُفِيدٌ'. هذا = wskazujący (nieodmienny), الكتابَ = بَدَل (dopowiedzenie) w bierniku, مُفِيدٌ = خبر إنّ w mianowniku. Czy اسم إشارة (هذا) jest اسم إنّ? Gramatycy dyskutują: jedni mówią هذا = اسم إنّ, inni: الكتابَ (bo ma przypadek). Praktycznie: مُفِيدٌ w mianowniku — jak orzeczenie إنّ."
            },
            {
                "id": "pa_ias13",
                "question": "Czy لَيْتَ używa się w codziennym MSA?",
                "translation": "(هل تُستخدم لَيْتَ في العربية المعاصرة؟)",
                "options": ["Tak — szczególnie w książkach, mediach i życiu codziennym", "Nie — tylko w starożytnej poezji", "Tylko w Koranie", "Tylko w dialektach"],
                "correct": "Tak — szczególnie w książkach, mediach i życiu codziennym",
                "explanation": "TAK — لَيْتَ jest żywa w MSA i dialektach! Codzienne: يَا لَيْتَنِي كُنْتُ هُنَاكَ (Chciałbym, żebym tam był), لَيْتَ الأمورَ أَسْهَلُ (Gdyby sprawy były łatwiejsze). W dialektach: يَا رَيْتَ (ya rēt) = skrócona forma لَيْتَ — niezwykle popularna w egipskim, lewantyńskim. W Koranie: يَا لَيْتَنِي قَدَّمْتُ لِحَيَاتِي (Gdybym przygotował na moje życie). Żywotna i piękna partykuła."
            },
            {
                "id": "pa_ias14",
                "question": "Co się stanie jeśli po إنّ dodamy مَا؟ (إنَّمَا)",
                "translation": "(ماذا يحدث لإنّ مع ما؟)",
                "options": ["إنّ traci moc — obie części w mianowniku", "Bez zmian", "Podmiot w dopełniaczu", "Orzeczenie w dopełniaczu"],
                "correct": "إنّ traci moc — obie części w mianowniku",
                "explanation": "KLUCZOWE: 'إنَّمَا' (innamā) = jednakże/jedynie/wyłącznie — partykuła OGRANICZENIA (حَصْر). Gdy مَا dołącza do إنّ: إنّ TRACI swoją moc gramatyczną (تُبْطَل). Zdanie wraca do normalnego: المُبْتَدَأُ مرفوع + الخبر مرفوع. إنَّمَا العِلْمُ نُورٌ (Wiedza jest jedynie światłem) — oba w mianowniku. To ważna reguła — مَا 'kasuje' efekt إنّ."
            },
            {
                "id": "pa_ias15",
                "question": "Która jest POPRAWNA kolejność w zdaniu z إنّ?",
                "translation": "(ما الترتيب الصحيح بعد إنّ؟)",
                "options": ["إنَّ + podmiot (biernik) + orzeczenie (mianownik)", "إنَّ + orzeczenie + podmiot", "إنَّ + podmiot (mianownik) + orzeczenie (biernik)", "Kolejność dowolna"],
                "correct": "إنَّ + podmiot (biernik) + orzeczenie (mianownik)",
                "explanation": "STANDARDOWA kolejność: إنَّ + اسم إنّ (biernik) + خبر إنّ (mianownik). إنَّ الحياةَ جَمِيلَةٌ = Zaprawdę życie jest piękne. ALE: orzeczenie MOŻE wyprzedzić podmiot, jeśli jest wyrażeniem przyimkowym: إنَّ فِي القُرْآنِ حِكْمَةً (Zaprawdę w Koranie jest mądrość) — في القرآن = orzeczenie wyprzedzone, حكمةً = podmiot opóźniony. Elastyczność, ale z regułami!"
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
