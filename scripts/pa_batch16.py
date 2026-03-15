import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "formal_arabic",
        "name": "Arabski formalny (الفصحى المعاصرة)",
        "description": "خصائص اللغة العربية الفصحى المعاصرة",
        "iconName": "building.columns",
        "color": "#60a5fa",
        "level": "advanced",
        "items": [
            {
                "id": "pa_fa1",
                "question": "MSA (Modern Standard Arabic) po arabsku to:",
                "translation": "(ما اسم العربية الفصحى المعاصرة؟)",
                "options": ["الفُصْحَى المُعَاصِرَة (al-fuṣḥā al-muʿāṣira)", "العَامِّيَّة (al-ʿāmmiyya)", "اللَّهجة (al-lahja)", "الكلاسيكية (al-klāsīkiyya)"],
                "correct": "الفُصْحَى المُعَاصِرَة (al-fuṣḥā al-muʿāṣira)",
                "explanation": "الفُصْحَى المُعَاصِرَة (fuṣḥā muʿāṣira) = Współczesna Arabszczyzna Standardowa (MSA). Nazwa: فُصْحَى = najczystsza/najwymowniejsza (stopień najwyższy od فَصِيح = wymowny), مُعَاصِرَة = współczesna. Obok niej: الفصحى التراثية (klasyczna = Koran, wczesna poezja). MSA jest UJEDNOLICONA — używana w mediach, edukacji, dyplomacji we WSZYSTKICH krajach arabskich."
            },
            {
                "id": "pa_fa2",
                "question": "W formalnym MSA końcówki przypadkowe (إعراب) są:",
                "translation": "(هل يُستخدم الإعراب في الفصحى؟)",
                "options": ["Wymawiane w pełni (الطالبُ، الطالبَ، الطالبِ)", "Ignorowane całkowicie", "Wymawiane tylko w dopełniaczu", "Opcjonalne zawsze"],
                "correct": "Wymawiane w pełni (الطالبُ، الطالبَ، الطالبِ)",
                "explanation": "W FORMALNYM MSA: pełny إعراب (iʿrāb) = końcówki odmieniane: الطالبُ (mianownik), الطالبَ (biernik), الطالبِ (dopełniacz). W POTOCZNYM MSA: często upraszczane (pauza = waqf = brak końcówki). W dialektach: BRAK إعراب. Poziomy: 1) Pełny إعراب (wiadomości TV, Koran), 2) Częściowy (wykłady, prezentacje), 3) Zerowy (dialekt). Polak ucząc się MSA musi znać إعراب, ale w mowie codziennej go nie usłyszy."
            },
            {
                "id": "pa_fa3",
                "question": "Formalna konstrukacja 'Co do...' (أَمَّا... فَـ) — uzupełnij: أَمَّا العلمُ _____ نافعٌ",
                "translation": "(أكمل: أما العلم... نافع)",
                "options": ["فَـ (= Co do wiedzy, TO jest pożyteczna)", "لَـ", "مَا", "إِنَّ"],
                "correct": "فَـ (= Co do wiedzy, TO jest pożyteczna)",
                "explanation": "أَمَّا... فَـ = Co do... to... — formalna konstrukcja warunkowa/tematyczna. 'أَمَّا العلمُ فَنافعٌ' = Co do wiedzy, to jest pożyteczna. REGUŁA: po أَمَّا OBOWIĄZUJE فَـ. Opuszczenie فَـ to BŁĄD gramatyczny. Funkcja: wyodrębnia TEMAT z reszty zdania. Bardzo częsta w formalnej mowie, mediach, Koranie. W polskim: 'Co do X, to Y' — podobna struktura, ale bez obowiązkowego spójnika."
            },
            {
                "id": "pa_fa4",
                "question": "W formalnym MSA zaimek هُوَ/هِيَ jako فصل (rozdzielający) w 'اللهُ هُوَ الرحمنُ' oznacza:",
                "translation": "(ما وظيفة ضمير الفصل؟)",
                "options": ["Wzmocnienie = Bóg — TO ON — (jest) Miłosierny (emfaza)", "On jest Bogiem miłosiernym (normalny podmiot)", "Bóg nie jest miłosierny (negacja)", "Kto jest miłosierny? (pytanie)"],
                "correct": "Wzmocnienie = Bóg — TO ON — (jest) Miłosierny (emfaza)",
                "explanation": "ضمير الفصل (ḍamīr al-faṣl) = zaimek ROZDZIELAJĄCY — nie jest podmiotem ani orzecznikiem, lecz WZMACNIA związek między nimi. 'اللهُ هُوَ الرحمنُ' = Bóg — TO ON — (jest) Miłosierny. Funkcje: 1) Emfaza (wzmocnienie), 2) Rozróżnienie خبر od صفة: اللهُ الرحمنُ (Bóg Miłosierny — صفة) vs اللهُ هُوَ الرحمنُ (Bóg JEST Miłosierny — خبر). 3) Ograniczenie (حصر). Czysto formalna analiza."
            },
            {
                "id": "pa_fa5",
                "question": "Formalny spójnik حَيْثُ (ḥaythu) w 'ذهبتُ حيثُ أرادَ' znaczy:",
                "translation": "(ما معنى حيث أراد؟)",
                "options": ["Poszedłem TAM, GDZIE chciał", "Poszedłem, ALE nie chciał", "Poszedłem, BO chciał", "Poszedłem ZANIM chciał"],
                "correct": "Poszedłem TAM, GDZIE chciał",
                "explanation": "حَيْثُ (ḥaythu) = tam gdzie/gdzie — formalne zdanie okolicznikowe miejsca. 'ذهبتُ حيثُ أرادَ' = Poszedłem tam, gdzie chciał. حَيْثُ + zdanie (orzeczenie) = zdanie podrzędne miejsca. FORMALNY MSA: حيثُ إنَّ = ponieważ/skoro (przyczynowe — częste w tekstach akademickich). CZĘSTY BŁĄD: używanie حيثُ jako 'ponieważ' bez إنَّ (*حيث جاء = BŁĄD). Poprawnie: حيثُ إنَّه جاء."
            },
            {
                "id": "pa_fa6",
                "question": "Formalna partykuła قَدْ + czas przeszły = :",
                "translation": "(ما وظيفة قد + الماضي؟)",
                "options": ["Potwierdzenie: قَدْ ذهبَ = RZECZYWIŚCIE poszedł (emfaza)", "Negacja: nie poszedł", "Pytanie: czy poszedł?", "Przyszłość: pójdzie"],
                "correct": "Potwierdzenie: قَدْ ذهبَ = RZECZYWIŚCIE poszedł (emfaza)",
                "explanation": "قَدْ (qad) + czas przeszły = potwierdzenie/emfaza: قَدْ ذهبَ = RZECZYWIŚCIE/FAKTYCZNIE poszedł. ALE: قَدْ + czas teraźniejszy = 'może/czasem': قَدْ يذهبُ = MOŻE pójdzie. PARADOKS: ta sama partykuła, ODWROTNE funkcje! Z przeszłym = pewność (100%), z teraźniejszym = możliwość (~50%). W Koranie: 'قَدْ أفلحَ المؤمنون' = ZAPRAWDĘ odnieśli sukces wierni. Bardzo formalna i częsta."
            },
            {
                "id": "pa_fa7",
                "question": "Formuła rozpoczynająca listy formalne: بِسْمِ اللهِ الرحمنِ الرحيمِ — gramatycznie:",
                "translation": "(ما إعراب بسم الله الرحمن الرحيم؟)",
                "options": ["جار ومجرور + إضافة + صفتان (przyimek + dopełniacz + 2 przymiotniki)", "فعل وفاعل (orzeczenie + podmiot)", "مبتدأ وخبر (podmiot + orzecznik)", "فعل أمر (rozkaz)"],
                "correct": "جار ومجرور + إضافة + صفتان (przyimek + dopełniacz + 2 przymiotniki)",
                "explanation": "Analiza: بِـ (przyimek) + اسْمِ (dopełniacz — w إضافة z الله) + اللهِ (مضاف إليه) + الرحمنِ (صفة 1 = Miłosierny) + الرحيمِ (صفة 2 = Litościwy). Domyślne: أَبْدَأُ بِسْمِ اللهِ (Zaczynam w imię Boga). اسم straciło hamzę (أ) z powodu częstego użycia → بسم (nie بإسم). Najczęstsza formuła arabska — otwiera każdą surę Koranu (oprócz 9.) i każdy formalny dokument."
            },
            {
                "id": "pa_fa8",
                "question": "Formalna formuła kończąca: وَاللهُ أَعْلَمُ (wa-llāhu aʿlam) znaczy:",
                "translation": "(ما معنى والله أعلم؟)",
                "options": ["A Bóg wie lepiej/najlepiej (= nie jestem pewien)", "Bóg nie wie", "Bóg jest wielki", "Niech Bóg pobłogosławi"],
                "correct": "A Bóg wie lepiej/najlepiej (= nie jestem pewien)",
                "explanation": "واللهُ أَعلمُ = A Bóg wie najlepiej — formalna formuła POKORY intelektualnej. Używana po wydaniu opinii religijnej (فتوى), naukowej lub dyskusyjnej. Znaczenie: 'Taka jest moja opinia, ale mogę się mylić — ostateczna wiedza należy do Boga.' Gramatycznie: الله = مبتدأ, أَعلمُ = خبر (stopień wyższy od عَالِم). Porównaj: اللهُ أكبرُ (Bóg jest największy — inna formuła)."
            },
            {
                "id": "pa_fa9",
                "question": "W formalnym MSA: لَمَّا (lammā) + czas przeszły:",
                "translation": "(ما معنى لمَّا + الماضي؟)",
                "options": ["KIEDY/GDY (= Gdy przyszedł...): لَمَّا جاءَ", "Nie przyszedł", "Zanim przyszedł", "Jeśli przyjdzie"],
                "correct": "KIEDY/GDY (= Gdy przyszedł...): لَمَّا جاءَ",
                "explanation": "لَمَّا (lammā) + przeszły = KIEDY/GDY — zdanie czasowe. 'لَمَّا جاءَ محمدٌ قُمْتُ' = Gdy przyszedł Muhammad, wstałem. ALE: لَمَّا ma 2 funkcje: 1) Gdy/Kiedy + przeszły (ظرف زمان), 2) Jeszcze nie (negacja trwająca) + teraźniejszy مجزوم: لَمَّا يذهبْ = Jeszcze nie poszedł. DWIE odwrotne funkcje! Z przeszłym = czas, z teraźniejszym = negacja trwająca. Kontekst rozstrzyga."
            },
            {
                "id": "pa_fa10",
                "question": "Formalny MSA: إِذْ (idh) vs إِذَا (idhā) — różnica:",
                "translation": "(ما الفرق بين إذ و إذا؟)",
                "options": ["إِذْ = GDY (przeszłość); إِذَا = JEŚLI/GDY (przyszłość)", "Identyczne", "إِذْ = jeśli; إِذَا = gdy", "إِذْ = przyszłość; إِذَا = przeszłość"],
                "correct": "إِذْ = GDY (przeszłość); إِذَا = JEŚLI/GDY (przyszłość)",
                "explanation": "إِذْ (idh) = GDY — odnosi się do PRZESZŁOŚCI: إِذْ قالَ (gdy powiedział — w Koranie). إِذَا (idhā) = JEŚLI/GDY — odnosi się do PRZYSZŁOŚCI/POWTARZALNOŚCI: إِذَا جاءَ (gdy/jeśli przyjdzie). Trzecia: إِذًا (idhan) = WIĘC/ZATEM — partykuła skutku: إِذًا سأذهبُ (więc pójdę). Trzy podobne wyrazy, trzy różne funkcje! Kluczowa dystynkcja w formalnym MSA i analizie Koranu."
            },
            {
                "id": "pa_fa11",
                "question": "Formalna zwrotność: اِسْتَفْعَلَ (X forma) w اِسْتَغْفَرَ (prosić o przebaczenie) — schemat to:",
                "translation": "(ما وزن استغفر؟)",
                "options": ["اِسْتَفْعَلَ (= prosić o/szukać czegoś)", "فَعَّلَ", "أَفْعَلَ", "تَفَاعَلَ"],
                "correct": "اِسْتَفْعَلَ (= prosić o/szukać czegoś)",
                "explanation": "اِسْتَفْعَلَ (istaFʿaLa) = X forma = 'prosić o/szukać/uważać za'. اِسْتَغْفَرَ (istaghfara) = szukać przebaczenia (غ-ف-ر = przebaczenie). Inne: اِسْتَعْمَلَ (używać ← ع-م-ل = praca), اِسْتَعْلَمَ (dowiadywać się ← ع-ل-م = wiedza), اِسْتَحْسَنَ (uważać za piękne ← ح-س-ن = piękno). Ta forma jest BARDZO produktywna w formalnym MSA — tworzy nowe słowa regularnie."
            },
            {
                "id": "pa_fa12",
                "question": "Formalny MSA: الـ + przymiotnik jako RZECZOWNIK — 'الكبيرُ' znaczy:",
                "translation": "(ما معنى الكبير كاسم؟)",
                "options": ["Ten wielki / Wielki (substantywizacja)", "Duży przymiotnik", "Nie wielki", "Czy wielki?"],
                "correct": "Ten wielki / Wielki (substantywizacja)",
                "explanation": "W formalnym MSA: الـ + przymiotnik = RZECZOWNIK (substantywizacja). الكبيرُ = Ten wielki/Wielki (osoba lub Bóg — jedno z 99 imion). الصغيرُ = Mały (osoba). الجديدُ = To, co nowe. To samo co w polskim: 'Wielki' (przymiotnik→rzeczownik), 'Stary' (o osobie). Ale w arabskim: częstsze i bardziej formalne. Imiona Boga: الرحمنُ (Miłosierny), القديرُ (Wszechmocny) — przymiotniki jako nazwy."
            },
            {
                "id": "pa_fa13",
                "question": "Formalna klauzula warunkowa: لَوْ + przeszły... لَـ + przeszły = :",
                "translation": "(ما معنى لو + ماض... لـ + ماض؟)",
                "options": ["Gdyby (nierealny): لَوْ جاء لَذهبتُ = Gdyby przyszedł, poszedłbym", "Jeśli przyszedł, poszedłem (realny)", "Nie przyszedł i nie poszedłem", "Przyszedł i poszedłem"],
                "correct": "Gdyby (nierealny): لَوْ جاء لَذهبتُ = Gdyby przyszedł, poszedłbym",
                "explanation": "لَوْ (law) + przeszły... لَـ + przeszły = warunek NIEREALNY (tryb przypuszczający). 'لَوْ جاءَ لَذهبتُ' = Gdyby przyszedł, poszedłbym (ale NIE przyszedł, więc NIE poszedłem). لَوْ = 'gdyby' (w przeszłości — niespełniony). Porównaj: إِنْ (in) = jeśli (realny, przyszły), لَوْ = gdyby (nierealny, przeszły). W polskim: 'gdyby' vs 'jeśli' — identyczna dystynkcja. Koraniczne: لَوْ شاءَ اللهُ (gdyby Bóg chciał)."
            },
            {
                "id": "pa_fa14",
                "question": "Formalne zakończenie wypowiedzi: وَبِاللهِ التَّوْفِيق znaczy:",
                "translation": "(ما معنى وبالله التوفيق؟)",
                "options": ["A od Boga (jest) pomyślne prowadzenie (= Amen / Niech się uda)", "Bóg jest daleko", "Nie ma Boga", "Bóg zakazuje"],
                "correct": "A od Boga (jest) pomyślne prowadzenie (= Amen / Niech się uda)",
                "explanation": "وَبِاللهِ التَّوْفِيقُ = A od Boga (jest) powodzenie/sukces — formalna formuła zamykająca dokumenty, listy, decyzje. التَّوْفِيق (tawfīq) = pomyślne prowadzenie/sukces (od root و-ف-ق = zgadzać się). Sens: 'Mogę się mylić, ale Bóg prowadzi najlepiej.' Porównaj: وَاللهُ أَعْلَمُ (Bóg wie najlepiej — po opinii), وَبِاللهِ التَّوْفِيقُ (Bóg zapewni sukces — po decyzji/planie)."
            },
            {
                "id": "pa_fa15",
                "question": "Diglossja arabska (ازدواجية لغوية) oznacza:",
                "translation": "(ما معنى الازدواجية اللغوية؟)",
                "options": ["Współistnienie فصحى (formalnej) i عامية (dialektu) w jednym społeczeństwie", "Jeden język w całym świecie arabskim", "Arabski nie ma dialektów", "Dialekty zastąpiły فصحى"],
                "correct": "Współistnienie فصحى (formalnej) i عامية (dialektu) w jednym społeczeństwie",
                "explanation": "الازدواجية اللغوية (izdiwājiyya lughawiyya) = diglossja = DWA POZIOMY języka: 1) الفُصحى (fuṣḥā) = wysoki: edukacja, media, Koran, dokumenty; 2) العَامِّيَّة (ʿāmmiyya) = niski: dom, ulica, dzieci. Arabista (nie-Arab) uczy się FUṢḤĀ, ale w kraju arabskim słyszy DIALEKT. Polscy uczniowie arabskiego: muszą znać OBA poziomy! Fuṣḥā daje czytanie — dialekt daje komunikację."
            }
        ]
    },
    {
        "key": "media_arabic",
        "name": "Arabski medialny (لغة الإعلام)",
        "description": "لغة وسائل الإعلام العربية وأنماطها",
        "iconName": "newspaper",
        "color": "#818cf8",
        "level": "advanced",
        "items": [
            {
                "id": "pa_ma1",
                "question": "Nagłówek gazety: 'اتفاقٌ جديدٌ بين البلدين' — brak ___:",
                "translation": "(ما المحذوف في العنوان؟)",
                "options": ["Czasownika (domyślny: تَمَّ/وُقِّعَ = Podpisano/Zawarto nowe porozumienie)", "Podmiotu", "Przymiotnika", "Nic nie brakuje"],
                "correct": "Czasownika (domyślny: تَمَّ/وُقِّعَ = Podpisano/Zawarto nowe porozumienie)",
                "explanation": "Styl NAGŁÓWKOWY: zdania NOMINALNE bez czasownika. 'اتفاقٌ جديدٌ بينَ البلدينِ' = Nowe porozumienie między dwoma krajami. Domyślne: تَمَّ التوقيعُ على اتفاقٍ (Podpisano porozumienie). Media arabskie jak polskie: nagłówki bez czasownika ('Nowe porozumienie' zamiast 'Podpisano nowe porozumienie'). Tanwin wskazuje na nieokreśloność — w mediach MSA jest ZACHOWYWANY pisowniowo."
            },
            {
                "id": "pa_ma2",
                "question": "Medialny zwrot: أَفَادَ / صَرَّحَ / أَعلَنَ — wszystkie znaczą:",
                "translation": "(ما القاسم المشترك بين هذه الأفعال؟)",
                "options": ["Poinformował/Oświadczył/Ogłosił (= synonimy 'media speech verbs')", "Zaprzeczył", "Zapytał", "Przyszedł"],
                "correct": "Poinformował/Oświadczył/Ogłosił (= synonimy 'media speech verbs')",
                "explanation": "Medialny arabski ma WIELE SYNONIMÓW mówienia: أَفَادَ (afāda = poinformował), صَرَّحَ (ṣarraḥa = oświadczył), أَعْلَنَ (aʿlana = ogłosił), أَكَّدَ (akkada = potwierdził), نَفَى (nafā = zaprzeczył), ذَكَرَ (dhakara = wspomniał), أَشَارَ (ashāra = wskazał). Każdy ma NIUANS: صرّح = oficjalnie, أفاد = poinformował, أكّد = z naciskiem. Znajomość tych czasowników = klucz do czytania arabskich wiadomości."
            },
            {
                "id": "pa_ma3",
                "question": "مِنْ جِهَتِهِ / مِنْ جانبِهِ w wiadomościach znaczy:",
                "translation": "(ما معنى من جهته / من جانبه؟)",
                "options": ["Ze swojej strony / Z kolei (= transitional phrase)", "Z jego miasta", "Naprzeciwko niego", "Bez jego wiedzy"],
                "correct": "Ze swojej strony / Z kolei (= transitional phrase)",
                "explanation": "مِنْ جِهَتِهِ / مِنْ جَانِبِهِ = Ze swojej strony / Z kolei — formuły PRZEJŚCIOWE w reportażach. 'صرّحَ الوزيرُ... مِنْ جِهَتِهِ قالَ الرئيسُ...' = Minister oświadczył... Ze swojej strony prezydent powiedział... Funkcja: przejście od jednego rozmówcy do drugiego. Inne: فِي سِيَاقٍ مُتَّصِلٍ (w powiązanym kontekście), مِنْ نَاحِيَةٍ أُخْرَى (z drugiej strony). Styl dziennikarski — formalny, przejrzysty."
            },
            {
                "id": "pa_ma4",
                "question": "Medialny strona bierna: 'تَمَّ تَوْقِيعُ الاتفاقِيَّة' (dosłownie: zakończyło się podpisanie umowy) = :",
                "translation": "(ما معنى تم توقيع الاتفاقية؟)",
                "options": ["Umowę PODPISANO (arabski odpowiednik strony biernej)", "Nie podpisano umowy", "Czy podpisano umowę?", "Podpiszą umowę"],
                "correct": "Umowę PODPISANO (arabski odpowiednik strony biernej)",
                "explanation": "تَمَّ + masdar = medialny ODPOWIEDNIK strony biernej. تَمَّ تَوْقِيعُ = dosłownie: zakończyło się podpisanie = podpisano. W MSA mediów: تَمَّ jest NADUŻYWANE — puryści krytykują ('تَمَّ' jest prawdziwym czasownikiem = 'zakończyło się', nie powinno być tylko 'podpisano'). Alternatywa: وُقِّعَتِ الاتفاقيةُ (prawdziwa strona bierna). Ale تَمَّ + masdar jest DOMINUJĄCE w mediach."
            },
            {
                "id": "pa_ma5",
                "question": "وَفْقاً لِـ / طِبْقاً لِـ / حَسَبَ — w mediach = :",
                "translation": "(ما معنى وفقًا لـ / طبقًا لـ / حسب؟)",
                "options": ["Zgodnie z / Według (= sourcing phrases)", "Wbrew", "Bez", "Na przekór"],
                "correct": "Zgodnie z / Według (= sourcing phrases)",
                "explanation": "Formuły ŹRÓDŁOWE w mediach: وَفْقاً لِـ (wafqan li = zgodnie z), طِبْقاً لِـ (ṭibqan li = stosownie do), حَسَبَ (ḥasaba = według), بِحَسَبِ (bi-ḥasabi = wedle), اسْتِناداً إلى (istinadan ilā = opierając się na). 'وفقاً لمصادرَ مطلعة' = Według dobrze poinformowanych źródeł. Ten zwrot słyszysz w KAŻDYM arabskim serwisie informacyjnym. Kluczowe słownictwo dla czytania prasy."
            },
            {
                "id": "pa_ma6",
                "question": "نَدَّدَ بِـ / أَدَانَ / اِسْتَنْكَرَ — w mediach = :",
                "translation": "(ما معنى ندّد / أدان / استنكر؟)",
                "options": ["Potępił / Osądził / Zaprotestował (= condemnation verbs)", "Pochwalił", "Zaprosił", "Pogratulował"],
                "correct": "Potępił / Osądził / Zaprotestował (= condemnation verbs)",
                "explanation": "Medialny arabski — czasowniki POTĘPIENIA: نَدَّدَ بِـ (naddada bi = potępił), أَدَانَ (adāna = osądził/potępił), اِسْتَنْكَرَ (istankara = wyraził oburzenie), رَفَضَ (rafaḍa = odrzucił), شَجَبَ (shajaba = napiętnował). 'نَدَّدَ الرئيسُ بِالهُجُومِ' = Prezydent potępił atak. Te czasowniki pojawiają się w KAŻDYM konflikcie — klucz do zrozumienia arabskich wiadomości politycznych."
            },
            {
                "id": "pa_ma7",
                "question": "بَيَانٌ صَحَفِيّ w mediach = :",
                "translation": "(ما معنى بيان صحفي؟)",
                "options": ["Komunikat/Oświadczenie prasowe", "Gazeta codzienna", "Dziennikarz prywatny", "Artykuł opiniotwórczy"],
                "correct": "Komunikat/Oświadczenie prasowe",
                "explanation": "بَيَانٌ صَحَفِيّ (bayān ṣaḥafiyy) = komunikat/oświadczenie prasowe. بَيَان = oświadczenie (od بَيَّنَ = wyjaśnić), صَحَفِيّ = prasowy (od صَحِيفَة = gazeta). Inne medialne: مُؤْتَمَر صَحَفِيّ (konferencja prasowa), تَقْرِير (raport), مُقَابَلَة (wywiad), تَحْقِيق (reportaż/śledztwo), افْتِتَاحِيَّة (artykuł wstępny). Słownictwo medialne to ODRĘBNY rejestr arabskiego — formalny, ale współczesny."
            },
            {
                "id": "pa_ma8",
                "question": "المَنْدُوب / المُرَاسِل / المُحَلِّل — w mediach = :",
                "translation": "(ما الفرق بين المندوب والمراسل والمحلل؟)",
                "options": ["Korespondent / Reporter / Analityk (role w mediach)", "Trzy nazwy tego samego stanowiska", "Polityk / Dyplomata / Sędzia", "Czytelnik / Widz / Słuchacz"],
                "correct": "Korespondent / Reporter / Analityk (role w mediach)",
                "explanation": "Role medialne: المَنْدُوب (mandūb = korespondent/delegat), المُرَاسِل (murāsil = reporter/korespondent zagraniczny), المُحَلِّل (muḥallil = analityk), المُذِيع (mudhīʿ = prezenter), المُحَرِّر (muḥarrir = redaktor), الكَاتِب (kātib = publicysta). 'معنا المراسلُ من بيروت' = Z nami korespondent z Bejrutu — typowy zwrot w arabskich wiadomościach telewizyjnych."
            },
            {
                "id": "pa_ma9",
                "question": "Medialny czas: 'يُتَوَقَّعُ أَنْ...' znaczy:",
                "translation": "(ما معنى يُتوقع أن؟)",
                "options": ["Oczekuje się, że... (strona bierna bezosobowa)", "Nie oczekuje się", "Kto oczekuje?", "Oczekiwano, że"],
                "correct": "Oczekuje się, że... (strona bierna bezosobowa)",
                "explanation": "يُتَوَقَّعُ أَنْ (yutawaqqa'u an) = oczekuje się, że — strona bierna BEZOSOBOWA (bez agensa). Inna: يُعتَقَدُ أَنَّ (uważa się, że), يُرَجَّحُ أَنَّ (przypuszcza się, że), يُذكَرُ أَنَّ (wspomina się, że). W polskim: 'oczekuje się / uważa się' — ta sama bezosobowa strona bierna. W arabskim: prefiks يُـ + wzorzec bierny. Bardzo częste w mediach — źródło nieznane lub ukryte."
            },
            {
                "id": "pa_ma10",
                "question": "عَاجِل! (ʿājil) w wiadomościach = :",
                "translation": "(ما معنى عاجل في الأخبار؟)",
                "options": ["PILNE! / Breaking News!", "Spokojne wiadomości", "Stare wiadomości", "Ostatnie wiadomości dnia"],
                "correct": "PILNE! / Breaking News!",
                "explanation": "عَاجِل (ʿājil) = pilne/natychmiastowe. خَبَر عَاجِل = wiadomość pilna = Breaking News. Od root ع-ج-ل = śpieszyć. Inne: أَخْبَار عَاجِلَة (wiadomości pilne), بَثّ مُبَاشِر (transmisja na żywo), آخِرُ الأَخبار (ostatnie wiadomości), أَبْرَزُ الأَحداث (najważniejsze wydarzenia). Te wyrazy NATYCHMIAST identyfikują kontekst medialny — klucz do zrozumienia arabskich kanałów informacyjnych."
            },
            {
                "id": "pa_ma11",
                "question": "فِي تَطَوُّرٍ لَافِتٍ w mediach = :",
                "translation": "(ما معنى في تطور لافت؟)",
                "options": ["W godnym uwagi rozwoju (wydarzeń) / W znaczącym zwrocie", "W powolnym tempie", "Bez zmian", "W normalnym biegu"],
                "correct": "W godnym uwagi rozwoju (wydarzeń) / W znaczącym zwrocie",
                "explanation": "في تَطَوُّرٍ لَافِتٍ = W godnym uwagi rozwoju (wydarzeń) / W znaczącym obrocie spraw. تَطَوُّر = rozwój/ewolucja (od ط-و-ر), لَافِت = przyciągający uwagę (od ل-ف-ت = zwracać uwagę). Inne: فِي تَصْعِيدٍ خَطِيرٍ (w niebezpiecznej eskalacji), فِي خُطْوَةٍ غيرِ مسبوقةٍ (w bezprecedensowym kroku). Te formuły DRAMATYZUJĄ wiadomości — styl medialny arabski jest RETORYCZNY."
            },
            {
                "id": "pa_ma12",
                "question": "أَسْفَرَتِ المُحادَثاتُ عَنْ... w mediach = :",
                "translation": "(ما معنى أسفرت المحادثات عن؟)",
                "options": ["Rozmowy zaowocowały / doprowadziły do...", "Rozmowy się nie odbyły", "Rozmowy rozpoczęły się", "Rozmowy zostały odwołane"],
                "correct": "Rozmowy zaowocowały / doprowadziły do...",
                "explanation": "أَسْفَرَتْ... عَنْ = zaowocowały/ujawniły/doprowadziły do. أَسْفَرَ (asfara) dosłownie = odsłonić twarz (od س-ف-ر = podróżować/odsłaniać). 'أسفرتِ المحادثاتُ عن اتفاقٍ' = Rozmowy doprowadziły do porozumienia. Inne medialne zwroty wynikowe: نَتَجَ عَنْ (wynikło z), أَدَّى إلى (doprowadziło do), تَمَخَّضَ عَنْ (zrodziło). Metaforyczne i formalne — typowy styl medialny."
            },
            {
                "id": "pa_ma13",
                "question": "المُعَارَضَة / المُوَالَاة w mediach politycznych = :",
                "translation": "(ما معنى المعارضة والموالاة؟)",
                "options": ["Opozycja / Lojalność (rządowa) = dwa obozy polityczne", "Pokój / Wojna", "Prawo / Lewo", "Miasto / Wieś"],
                "correct": "Opozycja / Lojalność (rządowa) = dwa obozy polityczne",
                "explanation": "المُعَارَضَة (muʿāraḍa) = opozycja (od ع-ر-ض = sprzeciwiać się). المُوَالَاة (muwālāt) = lojalność/frakcja prorządowa (od و-ل-ي = być bliskim/lojalnym). Medialne: حِزْب (partia), ائتلاف (koalicja), تَيَّار (nurt/prąd), جَبْهَة (front). 'صرّحت المعارضةُ بأنّ...' = Opozycja oświadczyła, że... Kluczowe słownictwo polityczne — niezbędne do czytania arabskiej prasy."
            },
            {
                "id": "pa_ma14",
                "question": "Na koniec wiadomości: 'إلى ذلكَ...' znaczy:",
                "translation": "(ما معنى إلى ذلك في الأخبار؟)",
                "options": ["Ponadto / W innej sprawie (transitional phrase)", "Na zakończenie", "Wbrew temu", "Z tego powodu"],
                "correct": "Ponadto / W innej sprawie (transitional phrase)",
                "explanation": "إلى ذلكَ = Ponadto / Oprócz tego / W innej sprawie — medialny spójnik przejściowy. 'إلى ذلك أعلن الرئيسُ...' = Ponadto prezydent ogłosił... Inne przejściowe: مِنْ جِهَةٍ أُخرى (z drugiej strony), في سياقٍ آخَرَ (w innym kontekście), وكَانَ (a było/wcześniej). Te formuły STRUKTURYZUJĄ reportaże — identyczne funkcjonalnie z polskim 'Tymczasem / Ponadto / Z kolei'."
            },
            {
                "id": "pa_ma15",
                "question": "Język mediów arabskich jest BLIŻSZY:",
                "translation": "(لغة الإعلام أقرب إلى ماذا؟)",
                "options": ["فُصحى z uproszczonym إعراب (MSA lekka)", "Czystej فصحى koranicznej", "Dialektu egipskiego", "Angielskiego"],
                "correct": "فُصحى z uproszczonym إعراب (MSA lekka)",
                "explanation": "Medialny arabski = 'MSA lekka' = fuṣḥā z uproszczeniami: 1) إعراب skrócony (pauza końcowa częstsza), 2) Słownictwo nowoczesne (ديمقراطية = demokracja, تكنولوجيا = technologia), 3) Struktury prostsze niż klasyczne, 4) Wpływy dialektalne minimalne (ale obecne). To TRZECI poziom: między czystą فصحى a dialektem. Polak uczący się arabskiego: media to NAJLEPSZE źródło 'realnego MSA'."
            }
        ]
    },
    {
        "key": "literary_arabic",
        "name": "Arabski literacki (الأدب العربي)",
        "description": "خصائص اللغة الأدبية والشعرية العربية",
        "iconName": "book.pages",
        "color": "#fbbf24",
        "level": "advanced",
        "items": [
            {
                "id": "pa_la1",
                "question": "البَلَاغَة (al-balāgha) w tradycji arabskiej = :",
                "translation": "(ما هي البلاغة؟)",
                "options": ["Retoryka/Stylistyka (nauka o pięknym wyrażaniu)", "Gramatyka", "Fonetyka", "Składnia"],
                "correct": "Retoryka/Stylistyka (nauka o pięknym wyrażaniu)",
                "explanation": "البَلَاغَة (balāgha) = retoryka/stylistyka — nauka o artystycznym wyrażaniu myśli. Trzy działy: 1) عِلم المعاني (semantyka retoryczna — szyk, emfaza), 2) عِلم البيان (obrazowanie — metafora, porównanie), 3) عِلم البديع (ozdoby — aliteracja, antyteza). To UNIKALNA arabska tradycja retoryczna — rozwinięta od VIII w. W polskim odpowiedniki: stylistyka, retoryka, poetyka."
            },
            {
                "id": "pa_la2",
                "question": "تَشْبِيه (tashbīh) w retoryce = :",
                "translation": "(ما هو التشبيه؟)",
                "options": ["Porównanie (X jest JAK Y)", "Metafora", "Metonimia", "Przesada"],
                "correct": "Porównanie (X jest JAK Y)",
                "explanation": "التَّشْبِيه (tashbīh) = porównanie. Elementy: 1) المُشَبَّه (porównywane): 'Twarz', 2) المُشَبَّه بِهِ (do czego): 'księżyc', 3) أداة التشبيه (narzędzie): كَـ/مِثْلَ/كأنَّ (jak), 4) وَجْه الشَّبَه (punkt wspólny): jasność. 'وَجْهُهَا كالقَمَرِ' = Jej twarz (jest) jak księżyc. W polskim: 'piękna jak księżyc'. Arabska retoryka klasyfikuje 8+ typów porównania — od prostych po złożone!"
            },
            {
                "id": "pa_la3",
                "question": "اِسْتِعَارَة (istiʿāra) w retoryce = :",
                "translation": "(ما هي الاستعارة؟)",
                "options": ["Metafora (przenośnia bez 'jak')", "Porównanie z 'jak'", "Powtórzenie", "Pytanie retoryczne"],
                "correct": "Metafora (przenośnia bez 'jak')",
                "explanation": "الاِسْتِعَارَة (istiʿāra) = metafora = porównanie BEZ narzędzia porównania (bez كَـ/مِثْلَ). 'رأيتُ قَمَراً في الفصل' = Widziałem KSIĘŻYC w klasie (= piękną osobę). Nie dosłownie księżyc — metafora! Typy: 1) تصريحية (jawna — wymieniony المشبه به: księżyc), 2) مَكنية (ukryta — domyślny المشبه به). W polskim: 'Ta dziewczyna to księżyc' — metafora. Arabska retoryka rozwija tę klasyfikację bardziej niż europejska."
            },
            {
                "id": "pa_la4",
                "question": "كِنَايَة (kināya) w retoryce = :",
                "translation": "(ما هي الكناية؟)",
                "options": ["Metonimia/Peryfraza (mówienie nie wprost)", "Metafora", "Porównanie", "Ironia"],
                "correct": "Metonimia/Peryfraza (mówienie nie wprost)",
                "explanation": "الكِنَايَة (kināya) = mówienie nie wprost / metonimia-peryfraza. 'طَوِيلُ النَّجَادِ' (długi pasek miecza) = wysoki człowiek. 'كَثِيرُ الرَّمَادِ' (dużo popiołu) = hojny (bo dużo gotuje dla gości). Kināya mówi jedno, a znaczy drugie — ale DOSŁOWNE znaczenie też jest możliwe. Różnica od metafory: metafora = dosłowne znaczenie NIEMOŻLIWE ('księżyc w klasie'), kināya = dosłowne MOŻLIWE, ale przenośne ZAMIERZONE."
            },
            {
                "id": "pa_la5",
                "question": "الجِنَاس (jināsu) w badīʿ = :",
                "translation": "(ما هو الجناس؟)",
                "options": ["Paronomazja/gra słów (wyrazy podobne brzmieniowo, różne znaczeniowo)", "Powtórzenie tego samego wyrazu", "Rym", "Metafora"],
                "correct": "Paronomazja/gra słów (wyrazy podobne brzmieniowo, różne znaczeniowo)",
                "explanation": "الجِنَاس (jināsu) = paronomazja = gra słów o podobnym brzmieniu, ale różnym znaczeniu. تام (pełna): يَحْيَا (żyje) / يَحْيَى (imię Yahya). ناقص (niepełna): مُسْلِم (muzułmanin) / مُسَلِّم (wręczający). Koran: 'وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ المُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ' — ساعة (Godzina/Zmartwychwstanie) i ساعة (godzina zegarowa). Mistrzowska gra słów!"
            },
            {
                "id": "pa_la6",
                "question": "الطِّبَاق (ṭibāq) w badīʿ = :",
                "translation": "(ما هو الطباق؟)",
                "options": ["Antyteza (zestawienie przeciwieństw: noc/dzień)", "Powtórzenie", "Rym", "Metafora"],
                "correct": "Antyteza (zestawienie przeciwieństw: noc/dzień)",
                "explanation": "الطِّبَاق (ṭibāq) = antyteza = zestawienie PRZECIWIEŃSTW w jednym zdaniu. 'يُحْيِي وَيُمِيتُ' = Ożywia i uśmierca (Koran). 'اللَّيْلُ وَالنَّهَارُ' = Noc i dzień. إيجابي (pozytywna antyteza): dwa przeciwstawne wyrazy. سلبي (negatywna): ten sam wyraz raz z negacją: يَعْلَمُ وَلَا يَعْلَمُ (wie i nie wie). W polskim: 'To kochać, to nienawidzić' — ta sama figura."
            },
            {
                "id": "pa_la7",
                "question": "Metr poetycki (بَحْر) w klasycznej poezji arabskiej — ile jest głównych?",
                "translation": "(كم بحراً شعرياً رئيسياً في الشعر العربي؟)",
                "options": ["16 (system al-Khalīla ibn Aḥmada)", "2 (krótki i długi)", "5 (jak japońskie haiku)", "32"],
                "correct": "16 (system al-Khalīla ibn Aḥmada)",
                "explanation": "16 metrów (بُحُور) w systemie الخليل بن أحمد (al-Khalīl ibn Aḥmad, VIII w.): الطَّويل, المَدِيد, البَسِيط, الوَافِر, الكَامِل, الهَزَج, الرَّجَز, الرَّمَل, السريع, المنسرح, الخفيف, المضارع, المقتضب, المجتث, المتقارب, المتدارك. Każdy ma stały schemat: فَعُولُنْ, مَفَاعِيلُنْ, إلخ. To NAJBOGATSZY system metryczny na świecie — rozwinięty 300 lat przed europejską prozodią."
            },
            {
                "id": "pa_la8",
                "question": "القَصِيدَة (qaṣīda) w klasycznej poezji to:",
                "translation": "(ما هي القصيدة؟)",
                "options": ["Oda/Poemat z jednym rymem (AA BA CA DA...)", "Wiersz wolny", "Haiku po arabsku", "Proza poetycka"],
                "correct": "Oda/Poemat z jednym rymem (AA BA CA DA...)",
                "explanation": "القَصِيدَة (qaṣīda) = klasyczny arabski poemat: 1) Jeden RYM (قافية) w całym poemacie (np. wszystkie wersy kończą się na -ب), 2) Jeden METR (بحر) w całym poemacie, 3) Każdy wers (بَيْت) dzieli się na: صَدْر (przód) + عَجُز (tył). Typowa qaṣīda: 20-100+ wersów! Początek: نَسِيب (erotyczny wstęp), środek: رِحْلَة (podróż), koniec: مَدْح (pochwała). Najstarsza forma arabskiej poezji."
            },
            {
                "id": "pa_la9",
                "question": "المُعَلَّقَات (al-muʿallaqāt) = :",
                "translation": "(ما هي المعلقات؟)",
                "options": ["7 (lub 10) najsłynniejszych przedislamskich qaṣīd (Wiszące Ody)", "Współczesne wiersze", "Modlitwy islamskie", "Teksty prawnicze"],
                "correct": "7 (lub 10) najsłynniejszych przedislamskich qaṣīd (Wiszące Ody)",
                "explanation": "المُعَلَّقَات (muʿallaqāt) = 'Wiszące (Ody)' — 7 (lub 10) najsłynniejszych qaṣīd z epoki przedislamskiej (الجاهلية). Nazwa: rzekomo 'zawieszone' (عُلِّقَتْ) na ścianach Kaaby. Poeci: اِمْرُؤ القَيْس, طَرَفَة, زُهَيْر, لَبِيد, عَنْتَرَة, عَمْرو بن كُلْثوم, الحارث. To FUNDAMENT arabskiej literatury — odpowiednik Iliady/Odysei. Każdy wykształcony Arab zna przynajmniej fragmenty."
            },
            {
                "id": "pa_la10",
                "question": "السَّجْع (sajʿ) w prozie arabskiej = :",
                "translation": "(ما هو السجع؟)",
                "options": ["Proza rymowana (zdania kończą się regularnym rymem)", "Proza bez rymu", "Poezja bez metrum", "Dialog teatralny"],
                "correct": "Proza rymowana (zdania kończą się regularnym rymem)",
                "explanation": "السَّجْع (sajʿ) = proza rymowana — zdania (فواصل) kończą się rymem, ale bez stałego metrum. Koran: 'وَالضُّحَى · وَاللَّيْلِ إِذَا سَجَى' — rym na -ى. مقامات (maqāmāt) الحريري = arcydzieło sajʿ (XI w.). Koran jest w sajʿ — NIE w poezji (brak metrum), NIE w prozie zwykłej (jest rym). To UNIKALNA forma literacka — między wierszem a prozą."
            },
            {
                "id": "pa_la11",
                "question": "الشِّعْر الحُرّ (ash-shiʿr al-ḥurr) = :",
                "translation": "(ما هو الشعر الحر؟)",
                "options": ["Wiersz wolny (od lat 1940+ — bez stałego rymu i schematu)", "Klasyczna qaṣīda", "Proza", "Dramat"],
                "correct": "Wiersz wolny (od lat 1940+ — bez stałego rymu i schematu)",
                "explanation": "الشِّعْر الحُرّ (shiʿr ḥurr) = wiersz wolny — modernistyczny ruch poetycki od lat 1940. Pionierzy: نَازِك الملائكة (Nāzik al-Malāʾika, Irak, 1947), بَدْر شاكر السَّيَّاب (Badr Shākir as-Sayyāb). Cechy: 1) Zachowuje metrykę (تفعيلة) ale bez stałej liczby stóp, 2) Rym zmienny lub brak, 3) Wers różnej długości. Porównaj z polskim wierszem wolnym (Przyboś, Herbert). Rewolucja literacka arab."
            },
            {
                "id": "pa_la12",
                "question": "الإِعْجَاز القُرْآني (iʿjāz qurʾānī) = :",
                "translation": "(ما معنى الإعجاز القرآني؟)",
                "options": ["Cudowność/Niedoścignioność Koranu (lingwistyczna i retoryczna)", "Tłumaczenie Koranu", "Recytacja Koranu", "Pisanie Koranu"],
                "correct": "Cudowność/Niedoścignioność Koranu (lingwistyczna i retoryczna)",
                "explanation": "الإِعْجَاز (iʿjāz) = cudowność/niedoścignioność — dogmat teologiczny i literacki: Koran jest NIENAŚLADOWALNY językowo. Wyzwanie (تَحَدٍّ): 'Przynieście surę podobną' (Koran 2:23). Aspekty: 1) Lingwistyczny (unikalny styl — ani poezja, ani proza), 2) Retoryczny (figury stylistyczne), 3) Strukturalny (kompozycja). To CENTRALNE pojęcie arabskiej lingwistyki — gramatyka arabska rozwinęła się DZIĘKI studiowaniu Koranu."
            },
            {
                "id": "pa_la13",
                "question": "1001 Nights po arabsku = :",
                "translation": "(ما اسم ألف ليلة وليلة بالعربية؟)",
                "options": ["أَلْفُ لَيْلَةٍ وَلَيْلَة (Alf Layla wa-Layla)", "كتاب الأغاني", "المقامات", "كليلة ودمنة"],
                "correct": "أَلْفُ لَيْلَةٍ وَلَيْلَة (Alf Layla wa-Layla)",
                "explanation": "أَلْفُ لَيْلَةٍ وَلَيْلَة (Alf Layla wa-Layla) = Tysiąc Nocy i jedna Noc. Gramatycznie: ألف + ليلةٍ (إضافة: tysiąc nocy) + وَ (i) + ليلة (jedna noc). Najsłynniejsze dzieło prozy arabskiej — zbiór opowieści z ramą narracyjną (شهرزاد i شهريار). Język: mieszanka فصحى i عامية (w zależności od rękopisu). Aladyn, Ali Baba, Sindbad — wszystkie stąd! Literacki most między Wschodem a Zachodem."
            },
            {
                "id": "pa_la14",
                "question": "نَجِيب مَحْفُوظ (Nadżib Mahfuz) to:",
                "translation": "(من هو نجيب محفوظ؟)",
                "options": ["Egipski pisarz — jedyny Arab z Noblem w literaturze (1988)", "Poeta klasyczny", "Gramatyk z Basry", "Dziennikarz z Al-Jazeery"],
                "correct": "Egipski pisarz — jedyny Arab z Noblem w literaturze (1988)",
                "explanation": "نَجِيب مَحْفُوظ (Najīb Maḥfūẓ, 1911-2006) = egipski powieściopisarz, Nobel 1988 — JEDYNY Arab laureat Nobla w literaturze. Dzieła: ثُلَاثِيَّة القاهرة (Trylogia Kairska), أَوْلَاد حَارَتِنَا (Dzieci naszej ulicy). Styl: realizm, dialog dialektem egipskim, narracja w فصحى. Kontrowersje: atak fundamentalistów (1994). Fundament współczesnej prozy arabskiej — jak Sienkiewicz/Reymont dla polskiej."
            },
            {
                "id": "pa_la15",
                "question": "مَحْمُود دَرْوِيش (Mahmoud Darwish) jest znany jako:",
                "translation": "(بماذا يُعرف محمود درويش؟)",
                "options": ["Palestyński poeta narodowy — ikona poezji oporu", "Iracki dramaturg", "Syryjski powieściopisarz", "Libański dziennikarz"],
                "correct": "Palestyński poeta narodowy — ikona poezji oporu",
                "explanation": "مَحْمُود دَرْوِيش (Maḥmūd Darwīsh, 1941-2008) = 'poeta Palestyny' — ikona شِعر المقاومة (poezji oporu). Najsłynniejszy wiersz: سَجِّلْ أَنَا عَرَبِيّ (Zanotuj! Jestem Arabem). Styl: od wierszy prostych/protestacyjnych do głębokiej symboliki. Darwish łączył politykę z liryzmem — czytany w CAŁYM świecie arabskim. Dla Polaków: porównanie z poezją Czesława Miłosza (wygnanie, pamięć, ojczyzna)."
            }
        ]
    },
    {
        "key": "quran_grammar_basics",
        "name": "Podstawy gramatyki koranicznej (أساسيات النحو القرآني)",
        "description": "أساسيات الإعراب والنحو في القرآن الكريم",
        "iconName": "book.closed",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_qg1",
                "question": "Koran po arabsku = :",
                "translation": "(ما اسم القرآن بالعربية؟)",
                "options": ["القُرْآن الكَرِيم (al-Qurʾān al-Karīm = Szlachetny Koran)", "الإنجيل (Ewangelia)", "التوراة (Tora)", "الكتاب المقدس (Biblia)"],
                "correct": "القُرْآن الكَرِيم (al-Qurʾān al-Karīm = Szlachetny Koran)",
                "explanation": "القُرْآن (al-Qurʾān) — od root ق-ر-أ = czytać/recytować. Dosłownie: 'Recytacja.' الكَرِيم = szlachetny/czcigodny. 114 سُوَر (sur = rozdziałów), 6236+ آيَات (ajatów = wersów). Koran jest napisany w arabskim klasycznym VII w. — to FUNDAMENT arabskiej gramatyki. Gramatyka arabska powstała DOSŁOWNIE po to, by poprawnie czytać Koran (بصرة vs كوفة — szkoły gramatyczne)."
            },
            {
                "id": "pa_qg2",
                "question": "بِسْمِ اللهِ w 'بِسْمِ اللهِ الرحمنِ الرحيمِ' — اسم jest w:",
                "translation": "(ما إعراب اسم في بسم الله؟)",
                "options": ["Dopełniaczu (مجرور) — bo po przyimku بِـ i w إضافة z الله", "Mianowniku", "Bierniku", "Bez deklinacji"],
                "correct": "Dopełniaczu (مجرور) — bo po przyimku بِـ i w إضافة z الله",
                "explanation": "بِسْمِ: بِـ (przyimek) wymusza dopełniacz → اسْمِ (مجرور بالكسرة). اللهِ = مضاف إليه (też dopełniacz). الرحمنِ, الرحيمِ = صفات (przymiotniki do الله — zgodne w dopełniaczu). Cały zwrot: جار ومجرور (przyimek + dopełniacz) w pozycji حال lub متعلق بفعل محذوف (أبدأُ = zaczynam). Hamza اسم jest ألف وصل — wymawiana tylko na początku."
            },
            {
                "id": "pa_qg3",
                "question": "Koraniczne كاف w 'لَيْسَ كَمِثْلِهِ شَيْءٌ' — funkcja:",
                "translation": "(ما وظيفة الكاف في ليس كمثله شيء؟)",
                "options": ["كاف زائدة (wtrącone = Nic nie jest JAK On / Nic Mu nie dorówna)", "كاف التشبيه (porównanie)", "كاف الجزاء (kara)", "كاف القسم (przysięga)"],
                "correct": "كاف زائدة (wtrącone = Nic nie jest JAK On / Nic Mu nie dorówna)",
                "explanation": "W 'لَيْسَ كَمِثْلِهِ شَيْءٌ' (Ash-Shūrā 42:11): كَـ jest زائدة (wtrącone/wzmacniające). Logika: gdyby كَـ było porównaniem: 'Nic nie jest jak JAK-ON' — podwójne! مِثْل = jak/podobieństwo. Więc: كَـ tu WZMACNIA negację podobieństwa. Bez كَ: لَيْسَ مِثْلَهُ شَيْءٌ = Nic nie jest Mu podobne. Z كَـ: silniejsze — ABSOLUTNIE nic nie jest podobne. Klasyka koranicznej gramatyki."
            },
            {
                "id": "pa_qg4",
                "question": "Koraniczne وَاو w 'وَالسَّمَاءِ ذَاتِ البُرُوج' jest:",
                "translation": "(ما نوع الواو في والسماء ذات البروج؟)",
                "options": ["وَاو القَسَم (przysięgi = Przysięgam na niebo z gwiazdozbiorami)", "واو العطف (spójnikowe)", "واو الحال (okoliczności)", "واو الاستئناف (nowego zdania)"],
                "correct": "وَاو القَسَم (przysięgi = Przysięgam na niebo z gwiazdozbiorami)",
                "explanation": "وَاو القَسَم (wāw al-qasam) = واو przysięgi — wymaga po sobie DOPEŁNIACZA. 'وَالسَّمَاءِ ذَاتِ البُرُوجِ' (Al-Burūj 85:1) = Na/Przysięgam na niebo z gwiazdozbiorami. السماءِ w dopełniaczu bo po واو القسم. Koran pełen przysiąg: وَالشَّمْسِ (Na słońce), وَاللَّيْلِ (Na noc), وَالفَجْرِ (Na świt). Tylko Bóg przysięga na stworzenie — podkreśla Jego wszechmoc."
            },
            {
                "id": "pa_qg5",
                "question": "Koraniczny لَا w 'لَا أُقْسِمُ' (Koran 75:1) jest:",
                "translation": "(ما نوع لا في لا أقسم؟)",
                "options": ["لَا الزائدة (wtrącone = DOPRAWDĘ przysięgam!) — wzmocnienie, nie negacja", "لَا النافية (negacja = NIE przysięgam)", "لَا الناهية (zakaz = nie przysięgaj!)", "لَا العاطفة (spójnik)"],
                "correct": "لَا الزائدة (wtrącone = DOPRAWDĘ przysięgam!) — wzmocnienie, nie negacja",
                "explanation": "لَا أُقْسِمُ (lā uqsimu) = DOPRAWDĘ przysięgam — paradoks! لَا tu jest زائدة (wtrącone) = NIE neguje, lecz WZMACNIA. Gdyby negowało: 'Nie przysięgam na Dzień Zmartwychwstania' — co nie ma sensu w kontekście (sura Al-Qiyāma). Gramatycy: لَا jest tu emfatyczne — jak polskie 'No, przysięgam!' To typowy przykład koranicznej gramatyki, która zaskakuje nawet native speakerów."
            },
            {
                "id": "pa_qg6",
                "question": "Koraniczny إِنَّا w 'إِنَّا أَنْزَلْنَاهُ' — مَا (nā) jest:",
                "translation": "(ما نوع نا في إنّا أنزلناه؟)",
                "options": ["ضمير جمع المتكلم (my/nas — pluralis majestatis Boga)", "Zaimek 'on'", "Zaimek 'ty'", "Zaimek 'oni'"],
                "correct": "ضمير جمع المتكلم (my/nas — pluralis majestatis Boga)",
                "explanation": "إِنَّا = إِنَّ + نَا (my). 'إِنَّا أَنْزَلْنَاهُ' = Zaprawdę MY go zesłaliśmy (o Koranie, sura Al-Qadr 97:1). نَا = 'my' — to Bóg mówi o Sobie w LICZBIE MNOGIEJ (pluralis majestatis = 'my królewskie'). W Koranie: Bóg używa أَنَا (ja) i نَحْنُ (my) zamiennie. 'My' nie = wielobóstwo, lecz = majestat, potęga, wielkość. W polskim: 'My, król...' — ta sama forma."
            },
            {
                "id": "pa_qg7",
                "question": "Koraniczny أَلَمْ في 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ' (94:1) — funkcja:",
                "translation": "(ما وظيفة ألم هنا؟)",
                "options": ["Pytanie retoryczne (= Czyż nie otworzyliśmy twojej piersi? = TAK, otworzyliśmy!)", "Prawdziwe pytanie oczekujące odpowiedzi", "Negacja (nie otworzyliśmy)", "Warunek (jeśli otworzyliśmy)"],
                "correct": "Pytanie retoryczne (= Czyż nie otworzyliśmy twojej piersi? = TAK, otworzyliśmy!)",
                "explanation": "أَلَمْ = أَ (hamza pytająca) + لَمْ (negacja + مجزوم). 'أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ?' = Czyż nie otworzyliśmy twojej piersi? Pytanie retoryczne = POTWIERDZENIE (= TAK, otworzyliśmy!). الاستفهام الإنكاري = pseudo-pytanie = emfatyczne TAK. W Koranie: أَلَمْ jest BARDZO częste — zawsze retoryczne. W polskim: 'Czyż nie pomogłem ci?' = Pomogłem ci! Ta sama technika."
            },
            {
                "id": "pa_qg8",
                "question": "Koraniczny إِيَّاكَ w 'إِيَّاكَ نَعْبُدُ' (1:5) — funkcja:",
                "translation": "(ما وظيفة إياك هنا؟)",
                "options": ["مفعول به مقدم (dopełnienie przesunięte = Ciebie JEDYNEGO czcimy)", "Podmiot", "Orzeczenie", "Przydawka"],
                "correct": "مفعول به مقدم (dopełnienie przesunięte = Ciebie JEDYNEGO czcimy)",
                "explanation": "إِيَّاكَ نَعْبُدُ = Ciebie (jedynego) czcimy. إيّاك = zaimek osobowy oddzielny (izolowany) w bierniku = 'Ciebie.' Przesunięcie na początek (تقديم) = OGRANICZENIE: TYLKO Ciebie, nikogo innego. Normalny szyk: نعبدُكَ (czcimy Cię — neutralne). Z przesunięciem: إيّاكَ نعبدُ (CIEBIE czcimy — emfatyczne/ograniczające). To Al-Fātiḥa (Otwierająca) — najczęściej recytowana sura Koranu."
            },
            {
                "id": "pa_qg9",
                "question": "Koraniczny ن w 'لَنَسْفَعاً' (96:15) — co to?",
                "translation": "(ما نون التوكيد في لنسفعاً؟)",
                "options": ["نون التوكيد الخفيفة (lekka nun emfatyczna = NA PEWNO chwycimy!)", "نون الوقاية (ochronna)", "نون النسوة (żeńska)", "نون المثنى (podwójna)"],
                "correct": "نون التوكيد الخفيفة (lekka nun emfatyczna = NA PEWNO chwycimy!)",
                "explanation": "نون التوكيد الخفيفة (nūn at-tawkīd al-khafīfa) = LEKKA nun emfatyczna — zapisywana jako alif z tanwinem (ـاً), ale wymawiana -an. 'لَنَسْفَعاً بِالنَّاصِيَة' (Al-ʿAlaq 96:15) = NA PEWNO chwycimy za czub! Dwa typy nun emfatycznego: ثقيلة (ciężka = -anna): لَنَسْفَعَنَّ, خفيفة (lekka = -an): لَنَسْفَعاً. Oba wzmacniają przyszłość/groźbę. Typowe w Koranie."
            },
            {
                "id": "pa_qg10",
                "question": "'الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ' — ten zwrot pojawia się w Koranie:",
                "translation": "(كم مرة يتكرر الذين آمنوا وعملوا الصالحات؟)",
                "options": ["Ponad 50 razy (stałe wyrażenie koraniczne)", "Raz", "5 razy", "Tylko w jednej surze"],
                "correct": "Ponad 50 razy (stałe wyrażenie koraniczne)",
                "explanation": "الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ = Ci, którzy uwierzyli i czynili dobro — ponad 50 wystąpień w Koranie! Gramatycznie: الذين (zaimek względny, l.mn.), آمنوا (uwierzyli — صلة الموصول), و (spójnik), عملوا (czynili) + الصالحات (dobre uczynki — مفعول به). To KORANICZNY LEITMOTIV — wiara + czyny = zbawienie. Powtarzalność = retoryczne wzmocnienie."
            },
            {
                "id": "pa_qg11",
                "question": "Koraniczny عَسَى w 'عَسَى رَبُّكُمْ أَنْ يَرْحَمَكُمْ' znaczy:",
                "translation": "(ما معنى عسى ربكم أن يرحمكم؟)",
                "options": ["Może/Oby wasz Pan się nad wami zmiłował", "Wasz Pan się nie zmiłuje", "Wasz Pan się zmiłował", "Wasz Pan nakazał miłosierdzie"],
                "correct": "Może/Oby wasz Pan się nad wami zmiłował",
                "explanation": "عَسَى (ʿasā) = może/oby — NADZIEJA (رجاء). 'عَسَى رَبُّكُمْ أَنْ يَرْحَمَكُمْ' (Al-Isrāʾ 17:8) = Może wasz Pan się nad wami zmiłuje. عَسَى to فعل جامد (zamrożony) — nie odmienia się regularnie. W Koranie: عَسَى od Boga = PEWNOŚĆ (Bóg mówi 'może' = zrobi to). Od człowieka = nadzieja. رَبُّكُمْ = اسم (podmiot), أَنْ يَرْحَمَكُمْ = خبر (orzecznik)."
            },
            {
                "id": "pa_qg12",
                "question": "Koraniczne taszkīl (تشكيل) — kiedy dodano znaki diakrytyczne?",
                "translation": "(متى أُضيف التشكيل إلى القرآن؟)",
                "options": ["Za czasów Umajjadów (VII-VIII w. — po śmierci Proroka)", "Od początku — Prorok napisał z taszkilem", "W XX w.", "Nigdy — Koran nie ma taszliku"],
                "correct": "Za czasów Umajjadów (VII-VIII w. — po śmierci Proroka)",
                "explanation": "Oryginalny zapis Koranu: BEZ KROPEK (إعجام) i BEZ ZNAKÓW SAMOGŁOSKOWYCH (تشكيل). Etapy: 1) أبو الأسود الدؤلي (VII w.) — pierwsze kropki dla samogłosek (inne niż dzisiejsze), 2) الخليل بن أحمد (VIII w.) — system obecny (فتحة, ضمة, كسرة, سكون, شدة, تنوين). Powód: ekspansja islamu — nie-Arabowie potrzebowali pomocy w czytaniu. To KLUCZOWY fakt historii arabskiej gramatyki!"
            },
            {
                "id": "pa_qg13",
                "question": "Koraniczne القراءات (qirāʾāt) = :",
                "translation": "(ما هي القراءات القرآنية؟)",
                "options": ["7 (lub 10) kanonicznych sposobów recytacji Koranu", "Tłumaczenia Koranu na inne języki", "Komentarze do Koranu", "Różne wydania Koranu"],
                "correct": "7 (lub 10) kanonicznych sposobów recytacji Koranu",
                "explanation": "القراءات (qirāʾāt) = kanoniczne warianty RECYTACJI Koranu. 7 głównych (autorzy: نافع, ابن كثير, أبو عمرو, ابن عامر, عاصم, حمزة, الكسائي) + 3 dodatkowe. NIE SĄ to 'różne Korany' — to warianty wymowy/taszkilu. Np.: مَالِكِ يَوْمِ الدِّينِ (Warsh) vs مَلِكِ يَوْمِ الدِّينِ (Ḥafṣ). Obie poprawne! Dominująca: رواية حفص عن عاصم — używana w 95% świata muzułmańskiego."
            },
            {
                "id": "pa_qg14",
                "question": "Koraniczny التَّقْدِيم والتَّأْخِير w 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِين' — dlaczego عبادة przed استعانة?",
                "translation": "(لماذا قدّم العبادة على الاستعانة؟)",
                "options": ["Cześć/uwielbienie (عبادة) przed prośbą o pomoc (استعانة) = logika priorytetów", "Przypadkowa kolejność", "Rym wymusza", "Tak łatwiej wymówić"],
                "correct": "Cześć/uwielbienie (عبادة) przed prośbą o pomoc (استعانة) = logika priorytetów",
                "explanation": "Retoryka koraniczna (بلاغة قرآنية): إِيَّاكَ نَعْبُدُ (Ciebie czcimy) PRZED إِيَّاكَ نَسْتَعِينُ (Ciebie prosimy o pomoc). Dlaczego? 1) Cześć Boga (عبادة) ważniejsza od prośby o pomoc (استعانة), 2) Cześć = cel, pomoc = środek — cel przed środkiem, 3) Cześć = bezwarunkowa, pomoc = doraźna. Ten typ analizy (التقديم والتأخير) jest FUNDAMENTEM تفسير (egzegezy) koranicznej."
            },
            {
                "id": "pa_qg15",
                "question": "Dlaczego gramatyka arabska powstała (motywacja historyczna)?",
                "translation": "(ما سبب نشأة النحو العربي؟)",
                "options": ["Ochrona Koranu przed błędami wymowy/zrozumienia (لحن)", "Ciekawość naukowa grecka", "Potrzeby handlowe", "Europejski wpływ"],
                "correct": "Ochrona Koranu przed błędami wymowy/zrozumienia (لحن)",
                "explanation": "اللَّحْن (laḥn) = błąd językowy. Gdy nie-Arabowie (العجم) przyjęli islam, zaczęli popełniać błędy w recytacji Koranu. Legenda: ktoś przeczytał 'رسولَهُ' (Jego posłańca — biernik) zamiast 'رسولُهُ' (Jego posłaniec — mianownik) — zmieniając SENS! Ali ibn Abi Talib nakazał أبو الأسود الدؤلي stworzyć reguły. Stąd: gramatyka arabska = OCHRONA tekstu świętego. Motywacja religijna → nauka lingwistyczna."
            }
        ]
    },
    {
        "key": "idiomatic_expressions_ar",
        "name": "Wyrażenia idiomatyczne (تعبيرات اصطلاحية)",
        "description": "التعبيرات الاصطلاحية والعبارات الشائعة في العربية",
        "iconName": "text.bubble",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_ie1",
                "question": "إن شَاءَ الله (In shāʾa Allāh) znaczy:",
                "translation": "(ما معنى إن شاء الله؟)",
                "options": ["Jeśli Bóg zechce / Oby (= odpowiedź na plany przyszłe)", "Bóg nie chce", "Bóg chciał wcześniej", "Dziękuję Bogu"],
                "correct": "Jeśli Bóg zechce / Oby (= odpowiedź na plany przyszłe)",
                "explanation": "إِنْ شَاءَ اللهُ = Jeśli Bóg zechce. إِنْ (jeśli — partykuła warunkowa) + شَاءَ (chciał/zechce) + اللهُ (Bóg). Użycie: 1) Przy KAŻDYM planie: 'Przyjdę jutro, إن شاء الله', 2) Wyraża nadzieję, 3) Pokora wobec przyszłości. Koran (18:23-24): 'Nie mów o niczym: Zrobię to jutro — chyba że [dodasz] إن شاء الله.' NAJCZĘSTSZE wyrażenie w arabskim świecie — nawet nie-muzułmanie go używają."
            },
            {
                "id": "pa_ie2",
                "question": "الحَمْدُ لله (al-ḥamdu lillāh) używamy gdy:",
                "translation": "(متى نقول الحمد لله؟)",
                "options": ["Dziękujemy/chwalimy Boga (po jedzeniu, dobre wieści, zdrowie)", "Przepraszamy", "Żegnamy się", "Pytamy o drogę"],
                "correct": "Dziękujemy/chwalimy Boga (po jedzeniu, dobre wieści, zdrowie)",
                "explanation": "الحَمْدُ لِلّهِ = Chwała Bogu / Dzięki Bogu. الحمد = chwała (مبتدأ), لله = dla Boga (خبر). Użycie: 1) Po jedzeniu, 2) Na pytanie 'Jak się masz?' — 'الحمد لله' = Dobrze, dzięki Bogu, 3) Po usłyszeniu dobrej wiadomości, 4) Po kichnięciu (odpowiedź: يَرْحَمُكَ اللهُ = Niech Bóg się nad tobą zmiłuje). Pierwsze słowa sury Al-Fātiḥa (Otwierającej)."
            },
            {
                "id": "pa_ie3",
                "question": "مَاشَاءَ الله (māshāʾ Allāh) używamy by:",
                "translation": "(متى نقول ما شاء الله؟)",
                "options": ["Wyrazić podziw (ochrona przed złym okiem = ʿajn)", "Wyrazić gniew", "Przeprosić", "Pożegnać się"],
                "correct": "Wyrazić podziw (ochrona przed złym okiem = ʿajn)",
                "explanation": "مَا شَاءَ اللهُ = To, co Bóg chciał (= jak Bóg zechciał). Użycie: 1) Widząc coś pięknego: dziecko, dom, sukces → 'ما شاء الله!', 2) Ochrona przed العَيْن (złym okiem/zazdrością), 3) Podziw: 'ما شاء الله، ابنُكَ ذكيٌّ!' = Mā shāʾ Allāh, twój syn jest mądry! Gramatycznie: مَا (to, co — موصولة) + شَاءَ (chciał) + اللهُ (Bóg). Sens: 'To Bóg sprawił' → ochrona."
            },
            {
                "id": "pa_ie4",
                "question": "أَسْتَغْفِرُ الله (astaghfiru-llāh) = :",
                "translation": "(ما معنى أستغفر الله؟)",
                "options": ["Proszę Boga o przebaczenie (skrucha/zaskoczenie)", "Proszę Boga o pieniądze", "Chwała Bogu", "Bóg jest wielki"],
                "correct": "Proszę Boga o przebaczenie (skrucha/zaskoczenie)",
                "explanation": "أَسْتَغْفِرُ اللهَ = Proszę Boga o przebaczenie. Od اِسْتَغْفَرَ (X forma: prosić o غُفْران = przebaczenie). Użycie: 1) Po grzechu/błędzie: skrucha, 2) Przy zaskoczeniu/osłupieniu: 'أستغفر الله! ماذا فعلتَ?!' = O Boże! Co zrobiłeś?!, 3) Jako odmowa: 'أستغفر الله! لا أستطيع' = Broń Boże! Nie mogę. Wielofunkcyjne — jak polskie 'Boże!' (skrucha, zaskoczenie, odmowa)."
            },
            {
                "id": "pa_ie5",
                "question": "بَارَكَ اللهُ فِيك (bāraka Allāhu fīk) = :",
                "translation": "(ما معنى بارك الله فيك؟)",
                "options": ["Niech Bóg ci błogosławi (podziękowanie/życzenie)", "Bóg cię ukarze", "Bóg ci nie pomoże", "Bóg ci zapłaci"],
                "correct": "Niech Bóg ci błogosławi (podziękowanie/życzenie)",
                "explanation": "بَارَكَ اللهُ فِيكَ = Niech Bóg ci błogosławi. بَارَكَ = pobłogosławił (od ب-ر-ك = błogosławieństwo). Użycie: 1) Jako podziękowanie (= dziękuję bardzo), 2) Jako życzenie (= szczęścia!), 3) Odpowiedź: وَفِيكَ بَارَكَ اللهُ (I w tobie niech Bóg błogosławi). Wariant: اللهُ يبارِكْ فِيكْ (dialektalny = to samo). W polskim: 'Niech Cię Bóg błogosławi' — identyczny zwrot!"
            },
            {
                "id": "pa_ie6",
                "question": "يَعْطِيكَ العَافِيَة (yaʿṭīk al-ʿāfiya) = :",
                "translation": "(ما معنى يعطيك العافية؟)",
                "options": ["Niech Bóg ci da zdrowie/siłę (= Dzięki za pracę!)", "Jesteś chory", "Nie pracuj", "Odpocznij"],
                "correct": "Niech Bóg ci da zdrowie/siłę (= Dzięki za pracę!)",
                "explanation": "يُعْطِيكَ العَافِيَة = Niech (Bóg) ci da zdrowie/siłę. Użycie: mówisz komuś, kto PRACUJE — ochroniarz, kelner, taksówkarz, kolega w pracy. Odpowiedź: اللهُ يُعَافِيك (Niech Bóg ci da zdrowie). W Lewancie (Syrii, Jordanii, Libanie): SUPERCZĘSTE — nie powiedzieć tego komuś pracującemu to NIEUPRZEJMOŚĆ. W polskim: 'Bóg zapłać' (za pracę) — podobna funkcja."
            },
            {
                "id": "pa_ie7",
                "question": "تَفَضَّلْ (tafaḍḍal) w różnych kontekstach:",
                "translation": "(ما معنى تفضّل؟)",
                "options": ["Proszę/Zapraszam/Tu masz (= wielofunkcyjne uprzejme zaproszenie)", "Nie chcę", "Odejdź", "Przepraszam"],
                "correct": "Proszę/Zapraszam/Tu masz (= wielofunkcyjne uprzejme zaproszenie)",
                "explanation": "تَفَضَّلْ (tafaḍḍal) = Proszę/Zapraszam — od تَفَضَّلَ (V forma od ف-ض-ل = łaskawość). Użycie: 1) Podając coś: 'تفضّل' (Tu masz/Proszę), 2) Zapraszając do siadania: 'تفضّل, اجلسْ' (Proszę, usiądź), 3) Wpuszczając: 'تفضّل' (Proszę, wejdź). Formy: تَفَضَّلْ (ty m.), تَفَضَّلِي (ty ż.), تَفَضَّلُوا (wy). W polskim: 'proszę' — ta sama wielofunkcyjność!"
            },
            {
                "id": "pa_ie8",
                "question": "عَلَى رَاسِي (ʿalā rāsī) dosłownie = na mojej głowie, ale znaczy:",
                "translation": "(ما معنى على راسي؟)",
                "options": ["Z wielką przyjemnością / Rozkaz! (= na głowę noszę = zaszczyt)", "Na mojej głowie coś leży", "Boli mnie głowa", "Nie zgadzam się"],
                "correct": "Z wielką przyjemnością / Rozkaz! (= na głowę noszę = zaszczyt)",
                "explanation": "عَلَى رَاسِي (ʿalā rāsī) = Na mojej głowie = Z wielką przyjemnością / Rozkaz / Z honorem. Metafora: niesienie czegoś na głowie = najwyższy szacunek. Użycie: ktoś prosi o przysługę → 'على راسي!' (Oczywiście! Z przyjemnością!). Warianty: عَلَى عَيْنِي (na moim oku = tak samo), عَلَى الرأسِ والعَيْنِ (na głowie i oku = absolutnie tak!). Bardzo częste w dialektach."
            },
            {
                "id": "pa_ie9",
                "question": "اللهُ أَكْبَر (Allāhu Akbar) gramatycznie to:",
                "translation": "(ما إعراب الله أكبر؟)",
                "options": ["مبتدأ + خبر (Bóg [jest] Największy — zdanie nominalne)", "فعل + فاعل (orzeczenie + podmiot)", "نداء (wołacz)", "تعجب (wykrzyknik)"],
                "correct": "مبتدأ + خبر (Bóg [jest] Największy — zdanie nominalne)",
                "explanation": "اللهُ أَكْبَرُ = Bóg (jest) Największy. اللهُ = مبتدأ (podmiot, مرفوع), أَكْبَرُ = خبر (orzecznik, مرفوع). أَكْبَر = stopień wyższy/najwyższy od كَبِير (wielki). Diptot (ممنوع من الصرف) — bez tanwinu. Użycie: adhān (wezwanie na modlitwę), salāt (modlitwa), ogólny wykrzyknik podziwu/zaskoczenia. Najczęstszy zwrot w muzułmańskim świecie — powtarzany ~100 razy dziennie w modlitwach."
            },
            {
                "id": "pa_ie10",
                "question": "يَا سَلَام! (yā salām!) = :",
                "translation": "(ما معنى يا سلام؟)",
                "options": ["O, wspaniale! / Ale pięknie! (podziw/zdumienie)", "Pokój!", "Koniec!", "Cisza!"],
                "correct": "O, wspaniale! / Ale pięknie! (podziw/zdumienie)",
                "explanation": "يَا سَلَامُ! = O, wspaniale! / Ale super! Dosłownie: يَا (wołacz) + سَلَام (pokój). Ale IDIOMATYCZNIE = podziw/zdumienie. Użycie: 'Dostałem awans!' → 'يا سلام! مبروك!' (O, wspaniale! Gratulacje!). Inne: يَا لَطِيف! (O, Łagodny [Boże]! = zaskoczenie/strach), يَا اللهِ! (O Boże! = zdumienie). Arabskie wykrzykniki często zawierają IMIONA BOGA — cecha kulturowa."
            },
            {
                "id": "pa_ie11",
                "question": "خَلَاص (khalāṣ) w mowie potocznej = :",
                "translation": "(ما معنى خلاص في اللهجة؟)",
                "options": ["Koniec/Dość/OK/Gotowe (= wielofunkcyjne zamknięcie)", "Początek", "Być może", "Nigdy"],
                "correct": "Koniec/Dość/OK/Gotowe (= wielofunkcyjne zamknięcie)",
                "explanation": "خَلَاص (khalāṣ) = Koniec/Dość/OK/Gotowe — od خَلَصَ (kończyć się/ocalić). Użycie: 1) Koniec dyskusji: خلاص! (Dość!), 2) Zgoda: خلاص, ماشي (OK, w porządku), 3) Ukończenie: خلاص, خلّصتُ (Gotowe, skończyłem). MSA: خَلاص = ocalenie/zbawienie. Dialektalnie: wielofunkcyjne 'dość/OK'. W polskim: 'Koniec!' / 'Dosyć!' / 'OK!' — jeden wyraz, wiele odcieni."
            },
            {
                "id": "pa_ie12",
                "question": "يَاللَّا (yallā) pochodzi od:",
                "translation": "(ما أصل يالله؟)",
                "options": ["يَا اللهُ (O Boże! → Dalej!/Chodźmy!)", "يَا لَيْلَة (O nocy)", "يَا عَلِي (O Ali)", "يَا لَنَا (O, my)"],
                "correct": "يَا اللهُ (O Boże! → Dalej!/Chodźmy!)",
                "explanation": "يَاللَّا / يَلَّا = od يَا اللهُ (O Boże!) — skrócone z modlitwy ('O Boże, [pomóż]') do codziennego 'Dalej!/Chodźmy!/Ruszaj!'. Użycie: 1) يللا, نروح! (Dalej, chodźmy!), 2) يللا بينا! (Ruszajmy!), 3) يللا خلاص! (No, koniec! Dość!). Znane na CAŁYM świecie — jedno z nielicznych arabskich słów, które weszło do języków europejskich (turecki, hebrajski, i inne)."
            },
            {
                "id": "pa_ie13",
                "question": "حَبِيبِي / حَبِيبْتِي (ḥabībī / ḥabībtī) dosłownie = :",
                "translation": "(ما معنى حبيبي؟)",
                "options": ["Mój ukochany/a (= zwrot czuły, też między przyjaciółmi)", "Mój wróg", "Mój nauczyciel", "Mój sąsiad"],
                "correct": "Mój ukochany/a (= zwrot czuły, też między przyjaciółmi)",
                "explanation": "حَبِيبِي (ḥabībī) = mój ukochany (m.), حَبِيبَتِي (ḥabībatī) = moja ukochana (ż.). Od ح-ب-ب = kochać. ALE: w codziennym użyciu DUŻO SZERZEJ: między przyjaciółmi (m+m), ojciec→syn, klient→sprzedawca (Lewant!). 'اهلاً حبيبي!' = Cześć, drogi! Nie romantyczne — PRZYJACIELSKIE. W polskim: 'kochany/kochanie' — też szerokie. Najbardziej rozpoznawalne arabskie słowo na świecie."
            },
            {
                "id": "pa_ie14",
                "question": "عَفْواً (ʿafwan) ma DWA konteksty:",
                "translation": "(ما معاني عفواً؟)",
                "options": ["1) Proszę/Nie ma za co (po dziękuję) + 2) Przepraszam (przed pytaniem)", "Tylko 'przepraszam'", "Tylko 'proszę'", "Tylko 'witaj'"],
                "correct": "1) Proszę/Nie ma za co (po dziękuję) + 2) Przepraszam (przed pytaniem)",
                "explanation": "عَفْواً (ʿafwan) = 1) Po شُكْراً (dziękuję): عَفواً = Nie ma za co / Proszę (= you're welcome). 2) Przed pytaniem: عَفواً! أَيْنَ المحطة? = Przepraszam! Gdzie stacja? Od ع-ف-و = przebaczenie. Dosłownie: 'przebaczenie' → 'nie trzeba dziękować' → 'proszę'. Porównaj z polskim: 'Proszę' = 1) You're welcome, 2) Here you go, 3) Please — ta sama wielofunkcyjność!"
            },
            {
                "id": "pa_ie15",
                "question": "اللهُ يِرْحَمُه (Allāh yirḥamu) mówi się o:",
                "translation": "(متى نقول الله يرحمه؟)",
                "options": ["Zmarłym (= Niech Bóg się nad nim zmiłuje)", "Chorym", "Noworodku", "Podróżniku"],
                "correct": "Zmarłym (= Niech Bóg się nad nim zmiłuje)",
                "explanation": "اللهُ يِرْحَمُه (Allāhu yarḥamuhu) = Niech Bóg się nad nim zmiłuje — formuła wspomnienia ZMARŁEGO. Gdy wspominasz ktoś, kto odszedł, dodajesz: 'رَحِمَهُ اللهُ' (Niech Bóg się nad nim zmiłuje) lub 'اللهُ يرحمه'. Inne formuły: رَحْمَةُ اللهِ عليه (miłosierdzie Boże nad nim), المرحوم (= zmarły — 'ten, nad którym [Bóg] się zmiłował'). Kulturowy obowiązek — nie można mówić o zmarłym bez tej formuły."
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
