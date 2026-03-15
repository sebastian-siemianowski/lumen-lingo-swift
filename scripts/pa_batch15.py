import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "maa_negation",
        "name": "Negacja z مَا (ما النافية)",
        "description": "استخدامات ما النافية في الجمل العربية",
        "iconName": "xmark.square",
        "color": "#fbbf24",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_man1",
                "question": "_____ ذهبَ إلى المدرسة (On NIE poszedł do szkoły)",
                "translation": "(On nie poszedł do szkoły)",
                "options": ["مَا", "لَمْ", "لَنْ", "لَا"],
                "correct": "مَا",
                "explanation": "Poprawnie: 'مَا ذهبَ' (mā dhahaba) = nie poszedł. مَا + czas przeszły = negacja przeszłości. W odróżnieniu od لَمْ: مَا nie zmienia trybu czasownika — łączy się z formą przeszłą bez modyfikacji. Porównaj: مَا ذهبَ (مَا + przeszły) vs لَمْ يذهبْ (لَمْ + teraźniejszy مجزوم). Oba znaczą 'nie poszedł', ale مَا jest prostsza gramatycznie i częstsza w mowie potocznej."
            },
            {
                "id": "pa_man2",
                "question": "مَا في 'مَا أجملَ السماءَ!' jest:",
                "translation": "(ما نوع ما في ما أجمل السماء؟)",
                "options": ["مَا التعجبية (wykrzyknikowa = Jakże piękne niebo!)", "مَا النافية (negacja)", "مَا الاستفهامية (pytanie)", "مَا الموصولة (względna)"],
                "correct": "مَا التعجبية (wykrzyknikowa = Jakże piękne niebo!)",
                "explanation": "UWAGA: nie każde مَا jest negacją! 'مَا أجملَ السماءَ!' = Jakże piękne (jest) niebo! To مَا التعجبية (taʿajjubiyya) = wykrzyknikowa. Wzorzec: مَا أَفْعَلَ + dopełnienie w bierniku. Inne مَا: مَا النافية (nie), مَا الاستفهامية (co?), مَا الموصولة (co/to, co), مَا المصدرية (dopóki/że). Kontekst rozstrzyga — مَا to najbardziej wielofunkcyjne słowo w arabskim!"
            },
            {
                "id": "pa_man3",
                "question": "مَا w 'مَا هذا؟' jest:",
                "translation": "(ما نوع ما في ما هذا؟)",
                "options": ["مَا الاستفهامية (pytająca = Co to?)", "مَا النافية (negacja)", "مَا التعجبية (wykrzyknik)", "مَا الموصولة (względna)"],
                "correct": "مَا الاستفهامية (pytająca = Co to?)",
                "explanation": "مَا الاستفهامية (istifhāmiyya) = مَا pytająca: 'مَا هذا؟' = Co to? Reguła odróżniania: مَا + zdanie pytające (bez czasownika negowanego) = pytanie. مَا + czas przeszły = negacja. مَا + أَفْعَلَ + biernik = wykrzyknik. Inna reguła: مَا الاستفهامية w إضافة traci alif: عَمَّ (= عَنْ + مَا = o co?), فِيمَ (= في + مَا = w czym?), لِمَ (= لِ + مَا = dlaczego?)."
            },
            {
                "id": "pa_man4",
                "question": "مَا w 'أعجبني مَا كتبتَ' jest:",
                "translation": "(ما نوع ما في أعجبني ما كتبت؟)",
                "options": ["مَا الموصولة (względna = to, CO napisałeś)", "مَا النافية (negacja)", "مَا الاستفهامية (pytanie)", "مَا التعجبية (wykrzyknik)"],
                "correct": "مَا الموصولة (względna = to, CO napisałeś)",
                "explanation": "مَا الموصولة (mawṣūla) = مَا zaimek względny: 'أعجبني مَا كتبتَ' = Spodobało mi się TO, CO napisałeś. مَا الموصولة = الذي (to, co). Reguły: مَا + zdanie z czasownikiem w przeszłym = مَا الموصولة (jeśli nie stoi na początku). مَا + zdanie twierdzące (po czasowniku) = najczęściej موصولة. Porównaj: مَا في الكتاب (to, co w książce) — bez czasownika, ale domyślny."
            },
            {
                "id": "pa_man5",
                "question": "مَا w dialekcie: 'ما بَعْرَفْش' (lewantyjski) = :",
                "translation": "(ما معنى ما بعرفش؟)",
                "options": ["Nie wiem (negacja dialektalna)", "Co wiem?", "Jakże wiem!", "To, co wiem"],
                "correct": "Nie wiem (negacja dialektalna)",
                "explanation": "W dialektach lewantyjskich: ما + ب + czasownik + ش = negacja. 'ما بَعْرَفْش' = Nie wiem. ب = prefiks teraźniejszości (dialektalny), ش = wzmocnienie negacji (od شَيْء). W MSA: لا أعرفُ. Dialektalne systemy negacji: 1) Egipski: ما...ش (ما بيعرفش), 2) Lewantyjski: ما...ش (ما بيعرف / ما بعرفش), 3) Marokański: ما...ش (ما كنعرفش). Wszystkie z circumfixem ما...ش."
            },
            {
                "id": "pa_man6",
                "question": "مَا المصدرية w 'سأدرسُ مَا دمتُ حياً' znaczy:",
                "translation": "(ما معنى ما المصدرية هنا؟)",
                "options": ["Będę studiował, DOPÓKI żyję (ما = dopóki)", "Będę studiował to, CO studiowałem", "Nie będę studiował", "Co studiowałem?"],
                "correct": "Będę studiował, DOPÓKI żyję (ما = dopóki)",
                "explanation": "مَا المصدرية الظرفية = مَا masdarowa-okolicznikowa: 'مَا دمتُ' = dopóki trwam = dopóki żyję. مَا + دَامَ = مَا دَامَ = dopóki. To STAŁA konstrukcja — مَا nie jest tu negacją ani pytaniem, lecz tworzy MASDAR OKOLICZNIKOWY (ما + فعل = masdar). Inne: مَا استطعتُ = dopóki mogę/jak mogę. W polskim: 'dopóki/jak długo'. To kolejna funkcja مَا!"
            },
            {
                "id": "pa_man7",
                "question": "مَا الحجازية w 'مَا هذا بشراً' (Koran) działa jak:",
                "translation": "(ما عمل ما الحجازية؟)",
                "options": ["Jak لَيْسَ (podmiot w mianowniku, orzecznik w bierniku)", "Jak إنَّ", "Jak كَانَ", "Bez wpływu na składnię"],
                "correct": "Jak لَيْسَ (podmiot w mianowniku, orzecznik w bierniku)",
                "explanation": "مَا الحجازية (ḥijāziyya) = مَا w dialekcie Hidżazu (Mekka) — działa jak لَيْسَ: podmiot w مرفوع, orzecznik w منصوب. 'مَا هذا بشراً' (Koran) = To nie (jest) człowiekiem (بشراً w bierniku!). W dialekcie Nadżdu (tamīmiyya): مَا NIE wpływa na składnię — مَا هذا بشرٌ (mianownik). To słynny spór plemienny w gramatyce arabskiej. MSA akceptuje obie wersje."
            },
            {
                "id": "pa_man8",
                "question": "Ile głównych funkcji ma مَا w arabskim?",
                "translation": "(كم وظيفة رئيسية لـ ما؟)",
                "options": ["Co najmniej 7", "Tylko 2 (negacja i pytanie)", "Tylko 1 (negacja)", "Dokładnie 4"],
                "correct": "Co najmniej 7",
                "explanation": "مَا ma CO NAJMNIEJ 7 funkcji: 1) نافية (negacja: ما ذهب), 2) استفهامية (pytanie: ما هذا؟), 3) تعجبية (wykrzyknik: ما أجمل!), 4) موصولة (zaimek wzgl.: ما كتبت), 5) مصدرية (masdarowa: ما دمت), 6) زائدة (wtrącone/emfatyczne: إنّما, كَمَا), 7) حجازية (jak ليس). Niektórzy gramatycy wyróżniają jeszcze więcej! مَا to najwszechstronniejsze słowo arabskie."
            },
            {
                "id": "pa_man9",
                "question": "إنَّما w 'إنَّمَا الأعمالُ بالنيّات' — مَا tu jest:",
                "translation": "(ما نوع ما في إنَّما؟)",
                "options": ["مَا الكافة (hamująca — blokuje عمل إنَّ)", "مَا النافية", "مَا الاستفهامية", "مَا الموصولة"],
                "correct": "مَا الكافة (hamująca — blokuje عمل إنَّ)",
                "explanation": "مَا الكافة (kāffa) = مَا hamująca/blokująca. Gdy مَا dołączy do إنَّ → إنَّمَا: إنَّ traci zdolność rządzenia bierniku! 'إنَّمَا الأعمالُ بالنيّات' = Zaprawdę uczynki (są) według intencji. الأعمالُ w MIANOWNIKU (nie bierniku jak po إنَّ). مَا الكافة 'hamuje' (كفّ) wpływ إنَّ na składnię. Znaczenie: إنَّمَا = doprawdy/oto/tylko. Hadis Proroka — jeden z najsłynniejszych."
            },
            {
                "id": "pa_man10",
                "question": "مَا + czas teraźniejszy: 'مَا يكتبُ الآن' znaczy:",
                "translation": "(ما معنى ما يكتبُ الآن؟)",
                "options": ["On NIE pisze teraz", "Co pisze teraz?", "On pisał", "On nie napisał"],
                "correct": "On NIE pisze teraz",
                "explanation": "مَا + czas teraźniejszy = negacja TERAŹNIEJSZOŚCI (rzadsze niż z przeszłym). 'مَا يكتبُ الآن' = Nie pisze teraz. Porównaj: لَا يكتبُ (też = nie pisze — częstsza forma). مَا z teraźniejszym jest bardziej literacka/archaiczna. Standardowo: مَا + przeszły = negacja przeszłości, لَا + teraźniejszy = negacja teraźniejszości. Ale مَا z teraźniejszym jest poprawne i spotykane w klasycznych tekstach."
            },
            {
                "id": "pa_man11",
                "question": "W zdaniu: مَا كتبتُ الرسالةَ — podmiot (فاعل) to:",
                "translation": "(ما الفاعل في ما كتبتُ الرسالة؟)",
                "options": ["Zaimek ukryty w تُ (ja)", "الرسالة (list)", "مَا", "كتب"],
                "correct": "Zaimek ukryty w تُ (ja)",
                "explanation": "Podmiot to -تُ (ja) — końcówka osobowa 1. os. l. poj. مَا to partykuła negująca — NIE jest podmiotem ani żadnym członem zdania. الرسالةَ to dopełnienie bliższe (مفعول به) w bierniku. Analiza: مَا (negacja) + كتبتُ (orzeczenie z podmiotem = ja) + الرسالةَ (dopełnienie). مَا nie wpływa na składnię zdania (w wariancie tamīmiyya) — tylko dodaje negację znaczeniową."
            },
            {
                "id": "pa_man12",
                "question": "مَا w 'كَمَا قلتُ' jest:",
                "translation": "(ما نوع ما في كما قلتُ؟)",
                "options": ["مَا المصدرية (= jak powiedziałem)", "مَا النافية", "مَا الاستفهامية", "مَا الموصولة"],
                "correct": "مَا المصدرية (= jak powiedziałem)",
                "explanation": "كَمَا = كَ (jak) + مَا المصدرية. 'كَمَا قلتُ' = Jak powiedziałem. مَا المصدرية tworzy masdar z zdania: مَا قلتُ = moje powiedzenie. كَ (porównanie) + masdar = jak powiedzenie = jak powiedziałem. Inne z مَا المصدرية: بَعْدَ مَا (po tym jak), قَبْلَ مَا (przed tym jak — dialektalne). W polskim: 'jak' — jedno słowo, w arabskim: كَ + مَا."
            },
            {
                "id": "pa_man13",
                "question": "مَا في 'مهما فعلتَ' pochodzi od:",
                "translation": "(ما أصل مهما؟)",
                "options": ["مَا + مَهْ (cokolwiek — مَا الشرطية)", "مَهْ + مَا (dwa różne słowa)", "مَا النافية", "مَا الاستفهامية"],
                "correct": "مَا + مَهْ (cokolwiek — مَا الشرطية)",
                "explanation": "مَهْمَا (mahmā) = cokolwiek — od مَا الشرطية (warunkowa). 'مَهْمَا فعلتَ' = Cokolwiek zrobisz. Etymologia: مَهْ (wykrzyknik: dość!) + مَا (co) → مَهْمَا (cokolwiek). To مَا الشرطية = مَا warunkowa — KOLEJNA funkcja مَا! Konstrukcja: مَهْمَا + przeszły/teraźn. مجزوم + odpowiedź. W polskim: 'cokolwiek/bez względu na to, co'. Razem z مَنْ (ktokolwiek)."
            },
            {
                "id": "pa_man14",
                "question": "Jak odróżnić مَا النافية od مَا الموصولة w tekście bez taszkilowania?",
                "translation": "(كيف نُميّز ما النافية من ما الموصولة؟)",
                "options": ["Kontekst: مَا + przeszły na początku = negacja; مَا po czasowniku/przyimku = względna", "Nie da się odróżnić", "مَا النافية zawsze na końcu", "مَا الموصولة ma szaddę"],
                "correct": "Kontekst: مَا + przeszły na początku = negacja; مَا po czasowniku/przyimku = względna",
                "explanation": "Reguły rozpoznawania: 1) مَا NA POCZĄTKU + czas przeszły = zwykle negacja: مَا ذهب (nie poszedł). 2) مَا PO czasowniku/przyimku = zwykle względna: رأيت ما كتبت (widziałem to, co napisałeś), بِمَا أمر (z tym, co nakazał). 3) مَا + أَفْعَلَ = wykrzyknik: مَا أجمل! 4) مَا + ? = pytanie: مَا هذا? Kontekst jest KRÓLEM arabskiej gramatyki!"
            },
            {
                "id": "pa_man15",
                "question": "Która z tych مَا jest NEGACJĄ?",
                "translation": "(أي ما نافية؟)",
                "options": ["مَا سافرَ (nie podróżował)", "مَا أجملَ! (jakże piękne!)", "مَا هذا؟ (co to?)", "مَا كتبتَهُ (to, co napisałeś)"],
                "correct": "مَا سافرَ (nie podróżował)",
                "explanation": "مَا سافرَ = nie podróżował — مَا النافية + czas przeszły. Rozpoznanie: مَا + czas przeszły + brak wykrzyknika + brak zaimka/przyimka = NEGACJA. مَا أجملَ = wykrzyknik (wzorzec ما أفعلَ). مَا هذا = pytanie (+ zaimek wskazujący). مَا كتبتَهُ = zaimek względny (po nim zdanie z zaimkiem powrotnym -هُ). Cztery مَا — cztery funkcje — jeden wyraz!"
            }
        ]
    },
    {
        "key": "lan_laysa",
        "name": "لَا/لَيْسَ — negacja stanów",
        "description": "لا ولَيْسَ في نفي الأحوال والصفات",
        "iconName": "nosign",
        "color": "#4ade80",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_lls1",
                "question": "_____ الحياةُ سهلةً (Życie NIE jest łatwe)",
                "translation": "(Życie nie jest łatwe)",
                "options": ["لَيْسَتِ", "لَا", "مَا", "لَمْ"],
                "correct": "لَيْسَتِ",
                "explanation": "Poprawnie: 'لَيْسَتِ الحياةُ سهلةً' (laysat il-ḥayātu sahla). لَيْسَ + -تِ (bo الحياة jest żeńska). Podmiot الحياةُ w mianowniku, orzecznik سهلةً w bierniku. لَيْسَ działa jak كَانَ: اسم w مرفوع, خبر w منصوب. W polskim: 'Życie nie jest łatwe' — tu 'łatwe' w mianowniku. W arabskim BIERNIK — bo لَيْسَ rządzi biernikiem orzecznika."
            },
            {
                "id": "pa_lls2",
                "question": "لَيْسَ أحدٌ هنا — znaczy:",
                "translation": "(ما معنى ليس أحد هنا؟)",
                "options": ["Nikogo tu nie ma", "Ktoś tu jest", "Ktoś tu nie jest", "Wszyscy tu są"],
                "correct": "Nikogo tu nie ma",
                "explanation": "Poprawnie: لَيْسَ أحدٌ هنا = Nikogo tu nie ma (dosł.: 'Nie-jest ktoś tutaj'). أحد po negacji = nikt. هنا = tutaj (orzecznik okolicznikowy — nie wymaga biernika). لَيْسَ jest tu jak angielskie 'there is not' — negacja istnienia. Porównaj: لا أحدَ هنا (z لا النافية للجنس) — to samo, ale أحدَ w bierniku bez tanwinu. Obie formy poprawne."
            },
            {
                "id": "pa_lls3",
                "question": "Odmiana لَيْسَ: 'my NIE jesteśmy' = :",
                "translation": "(نحن + لَيْسَ = ?)",
                "options": ["لَسْنَا", "لَيْسْنَا", "لَيْسَنَا", "لَسُنَا"],
                "correct": "لَسْنَا",
                "explanation": "Odmiana لَيْسَ: لَيْسَ (on), لَيْسَتْ (ona), لَسْتُ (ja), لَسْتَ (ty m.), لَسْتِ (ty ż.), لَسْنَا (my), لَسْتُمْ (wy m.), لَسْتُنَّ (wy ż.), لَيْسُوا (oni), لَسْنَ (one). Uwaga: z końcówkami spółgłoskowymi (-تُ, -نَا) → لَسْـ (nie لَيْسْـ). To jak كَانَ → كُنْـ. لَيْسَ jest formalnie CZASOWNIKIEM, więc się odmienia przez osoby — choć nie ma czasu teraźniejszego ani rozkaźnika."
            },
            {
                "id": "pa_lls4",
                "question": "لَا في 'لَا إلهَ إلّا الله' jest:",
                "translation": "(ما نوع لا في لا إله إلا الله؟)",
                "options": ["لَا النافية للجنس (kategoryczna: ŻADNEGO boga oprócz Boga)", "لَا الناهية (zakazująca)", "لَا العاطفة (spójnikowa)", "لَا النافية العادية"],
                "correct": "لَا النافية للجنس (kategoryczna: ŻADNEGO boga oprócz Boga)",
                "explanation": "لَا النافية للجنس = negacja RODZAJOWA/KATEGORYCZNA: 'لَا إلهَ إلّا الله' = Nie ma ŻADNEGO boga oprócz Boga (szahada — wyznanie wiary). إلهَ w bierniku BEZ tanwinu (jak po إنَّ). لَا النافية للجنس działa jak إنَّ: اسم w bierniku, خبر w mianowniku. Tu خبر jest domyślny (موجود = istniejący). Najsłynniejsze zdanie w islamie — i wzorcowy przykład لَا النافية للجنس."
            },
            {
                "id": "pa_lls5",
                "question": "Różnica: لَا طالبَ (bez tanwinu) vs لَا طالبٌ (z tanwinem):",
                "translation": "(ما الفرق بين لا طالبَ و لا طالبٌ؟)",
                "options": ["لَا طالبَ = ŻADEN student (kategoryczna); لَا طالبٌ = żaden student nie... (zwykła)", "Identyczne", "لا طالبَ = pytanie; لا طالبٌ = odpowiedź", "لا طالبَ = przeszły; لا طالبٌ = teraźn."],
                "correct": "لَا طالبَ = ŻADEN student (kategoryczna); لَا طالبٌ = żaden student nie... (zwykła)",
                "explanation": "SUBTELNA różnica: لَا طالبَ في الصف (النافية للجنس) = ŻADEN student w klasie (absolut — cała kategoria 'studentów' zanegowana). لَا طالبٌ مجتهدٌ يرسبُ (النافية العاملة عمل ليس) = Żaden pilny student nie obleje (konkretna cecha). Pisowniowo: bez tanwinu = dla جنس, z tanwinem = عاملة عمل ليس. لا النافية للجنس jest SILNIEJSZA — neguje cały gatunek/kategorię."
            },
            {
                "id": "pa_lls6",
                "question": "لَيْسَ + بِـ w 'لَيْسَ بِكاذبٍ' — بِـ tu jest:",
                "translation": "(ما وظيفة الباء في ليس بكاذب؟)",
                "options": ["باء زائدة (wzmacniająca negację — On NIE jest kłamcą)", "باء الجر (przyimek = w)", "باء السببية (przyczyna)", "باء القسم (przysięga)"],
                "correct": "باء زائدة (wzmacniająca negację — On NIE jest kłamcą)",
                "explanation": "بِـ po لَيْسَ jest 'wtrącona' (زائدة) — WZMACNIA negację. 'لَيْسَ بِكاذبٍ' = On ABSOLUTNIE nie jest kłamcą. Formalnie: كاذبٍ w dopełniaczu (bo po بِـ), ale gramatycznie jest orzecznikiem (خبر) w pozycji بiernika. بِـ الزائدة może pojawiać się po: لَيْسَ, مَا (ḥijāziyya), لَا. Wzmacnia pewność negacji. Bez بِـ: لَيْسَ كاذباً (poprawne, ale mniej emfatyczne)."
            },
            {
                "id": "pa_lls7",
                "question": "لَا w 'لَا حولَ ولا قوةَ إلا بالله' jest:",
                "translation": "(ما نوع لا في لا حول ولا قوة؟)",
                "options": ["لَا النافية للجنس (podwójna — żadnej mocy ani siły oprócz od Boga)", "لَا الناهية", "لَا العاطفة", "لَا النافية العادية"],
                "correct": "لَا النافية للجنس (podwójna — żadnej mocy ani siły oprócz od Boga)",
                "explanation": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِالله (ḥawqala) — dwie لَا النافية للجنس: حَوْلَ (zdolność/moc) + قُوَّةَ (siła) — oba w bierniku bez tanwinu. Tłumaczenie: Nie ma żadnej mocy ani siły oprócz od Boga. To formuła odmawiania (ذكر) — jedna z najczęstszych w islamie. Gramatycznie: podwójna لَا + wyjątek إلَّا. Wzorcowy przykład kategorycznej negacji."
            },
            {
                "id": "pa_lls8",
                "question": "Czy لَيْسَ ma czas teraźniejszy (مضارع)?",
                "translation": "(هل لِلَيْسَ مضارع؟)",
                "options": ["NIE — لَيْسَ to czasownik ZAMROŻONY (جامد)", "Tak — يَلِيسُ", "Tak — يَلْيَسُ", "Tak — لَيَسُ"],
                "correct": "NIE — لَيْسَ to czasownik ZAMROŻONY (جامد)",
                "explanation": "لَيْسَ to فعل جامد (fiʿl jāmid) = czasownik ZAMROŻONY — ma TYLKO formę przeszłą. Nie ma: czasu teraźniejszego (*يَلِيسُ), rozkaźnika (*اِلِسْ), imiesłowu (*لائس), masdaru (*لَيْس). To wyjątkowe! Inne zamrożone: عَسَى (może/oby), نِعْمَ (doskonały), بِئْسَ (okropny). Funkcjonalnie: لَيْسَ = partykuła negacji, formalnie = застygły czasownik. Hybryda!"
            },
            {
                "id": "pa_lls9",
                "question": "لَا w 'جاء بلا خوفٍ' (Przyszedł bez strachu) — لَا tu jest:",
                "translation": "(ما نوع لا في بلا خوف؟)",
                "options": ["لَا النافية (po przyimku بِـ = bez)", "لَا الناهية (zakazująca)", "لَا النافية للجنس", "لَا العاطفة"],
                "correct": "لَا النافية (po przyimku بِـ = bez)",
                "explanation": "بِلَا (bi-lā) = bez — przyimek بِـ + negacja لَا. 'جاء بلا خوفٍ' = Przyszedł bez strachu. خوفٍ w dopełniaczu (bo po بِـ). بِلَا odpowiada polskiemu 'bez' lub 'بِدُون'. Alternatywy: بِدُونِ خوفٍ (bez strachu), مِنْ غَيْرِ خوفٍ (bez strachu). بِلَا jest najkrótsza i bardzo popularna w MSA i dialektach. لَا tu jest prostym zaprzeczeniem — nie kategoria للجنس."
            },
            {
                "id": "pa_lls10",
                "question": "لَيْسَ w 'ألَيْسَ كذلك؟' znaczy:",
                "translation": "(ما معنى أليس كذلك؟)",
                "options": ["Czyż nie tak? (pytanie retoryczne)", "To nie jest tak", "Tak, zgadza się", "Nie, nie tak"],
                "correct": "Czyż nie tak? (pytanie retoryczne)",
                "explanation": "أَلَيْسَ كذلك؟ = Czyż nie tak? / Prawda? Hamza pytająca (أَ) + لَيْسَ (nie jest) + كذلك (tak). Pytanie retoryczne oczekujące potwierdzenia. Odpowiedź: بَلَى, كذلك (Tak, właśnie tak). أَلَيْسَ jest bardzo częste jako tag question (pytanie potwierdzające) — jak angielskie 'isn't it?', polskie 'prawda?/czyż nie?'. W formalnym MSA i w Koranie."
            },
            {
                "id": "pa_lls11",
                "question": "لَا + przymiotnik/rzeczownik (bez czasownika): 'لَا بأسَ' znaczy:",
                "translation": "(ما معنى لا بأس؟)",
                "options": ["Nie ma problemu / Nic się nie stało", "Problem istnieje", "Czy jest problem?", "Nie rób problemu"],
                "correct": "Nie ma problemu / Nic się nie stało",
                "explanation": "لَا بَأْسَ (lā baʾsa) = Nie ma problemu / Nic się nie stało. بَأْس = problem/zło/beda. لَا + rzeczownik w bierniku (للجنس) = ŻADNEGO problemu. Bardzo częsty zwrot w codziennym arabskim! Inne: لَا شَكَّ (bez wątpienia), لَا بُدَّ (koniecznie/musi być), لَا مانعَ (nie ma przeszkody = OK). Wszystkie z لَا النافية للجنس — zamrożone wyrażenia."
            },
            {
                "id": "pa_lls12",
                "question": "W 'الولدُ لَيْسَ نائماً' — orzecznik to:",
                "translation": "(ما خبر ليس في هذه الجملة؟)",
                "options": ["نائماً (w bierniku — śpiący)", "الولدُ", "لَيْسَ", "Brak orzecznika"],
                "correct": "نائماً (w bierniku — śpiący)",
                "explanation": "الولدُ = اسم (podmiot, مرفوع), لَيْسَ = فعل ناسخ (czasownik kopiujący), نائماً = خبر (orzecznik, منصوب/biernik). Zdanie: Chłopiec nie jest śpiący. Porównaj: الولدُ نائمٌ (Chłopiec jest śpiący — mianownik, bez لَيْسَ). لَيْسَ 'zmienia' przypadek orzecznika z مرفوع na منصوب — to samo co كَانَ. Dlatego لَيْسَ należy do أَفْعَال ناسخة (czasowników kopiujących)."
            },
            {
                "id": "pa_lls13",
                "question": "لَا الناهية w 'لَا تقلقْ!' wymaga:",
                "translation": "(ما عمل لا الناهية؟)",
                "options": ["مجزوم (jussive) — لا تقلقْ (sukun)", "منصوب (biernik)", "مرفوع (mianownik)", "Bez zmiany trybu"],
                "correct": "مجزوم (jussive) — لا تقلقْ (sukun)",
                "explanation": "لَا الناهية (zakazująca) + 2. os. = ZAKAZ: لَا تقلقْ! (lā taqlaq!) = Nie martw się! Tryb مجزوم: sukun na końcu (تقلقْ). Porównaj: لَا يقلقُ (negacja — nie martwi się, مرفوع). Reguła: لَا + 2. os. مجزوم = zakaz. لَا + 3. os. مرفوع = negacja. Forma: identyczny wyraz (لَا), różna funkcja rozpoznawana po OSOBIE i TRYBIE. Ten sam paradoks co في: jeden wyraz, wiele funkcji."
            },
            {
                "id": "pa_lls14",
                "question": "Kiedy używamy لَيْسَ zamiast لَا?",
                "translation": "(متى نستخدم ليس بدل لا؟)",
                "options": ["Do negacji zdań NOMINALNYCH (podmiot + orzecznik)", "Do zakazu", "Do negacji przyszłości", "Do negacji przeszłości"],
                "correct": "Do negacji zdań NOMINALNYCH (podmiot + orzecznik)",
                "explanation": "لَيْسَ to specjalista od zdań NOMINALNYCH: الجو + جميل → لَيْسَ الجوُّ جميلاً (pogoda nie jest piękna). لَا neguje: 1) zdania czasownikowe: لا يكتبُ, 2) kategorycznie: لا شكَّ. Podział: لَيْسَ → stan/cecha (nie jest X), لَا → czynność (nie robi X). W polskim: 'nie jest' (być) vs 'nie' (inne czasowniki). Arabski rozróżnia gramatycznie to, co polskim rozróżnia leksykalnie."
            },
            {
                "id": "pa_lls15",
                "question": "Pełna tabela لَا: ile typów لَا istnieje?",
                "translation": "(كم نوعاً رئيسياً لـ لا؟)",
                "options": ["5 (نافية, ناهية, نافية للجنس, عاطفة, زائدة)", "1 — zawsze negacja", "2 — negacja i zakaz", "3 — negacja, zakaz, spójnik"],
                "correct": "5 (نافية, ناهية, نافية للجنس, عاطفة, زائدة)",
                "explanation": "5 typów لَا: 1) لَا النافية (negująca: لا يكتبُ = nie pisze), 2) لَا الناهية (zakazująca: لا تكتبْ = nie pisz!), 3) لَا النافية للجنس (kategoryczna: لا طالبَ = żaden student), 4) لَا العاطفة (spójnikowa: جاء محمد لا علي = przyszedł Muhammad, nie Ali), 5) لَا الزائدة (wtrącona/emfatyczna: لئلّا = żeby nie). Każda لَا ma inne reguły — rozpoznanie po kontekście!"
            }
        ]
    },
    {
        "key": "question_particles",
        "name": "Partykuły pytające (أدوات الاستفهام)",
        "description": "أدوات الاستفهام العربية واستخداماتها",
        "iconName": "questionmark.circle",
        "color": "#c084fc",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_qp1",
                "question": "_____ أنتَ طالبٌ؟ (Czy jesteś studentem?)",
                "translation": "(Czy jesteś studentem?)",
                "options": ["هَلْ", "مَا", "مَنْ", "كَيْفَ"],
                "correct": "هَلْ",
                "explanation": "Poprawnie: 'هَلْ أنتَ طالبٌ؟' = Czy jesteś studentem? هَلْ (hal) = partykuła pytania zamkniętego (tak/nie). Odpowiedź: نَعَمْ (tak) lub لَا (nie). هَلْ nie łączy się z negacją (*هل لا = BŁĄD) ani z przyszłym (*هل سيذهب = BŁĄD w klasycznym). W polskim: 'czy' — używamy wszędzie. W arabskim: هَلْ ma ograniczenia, których polskie 'czy' nie ma."
            },
            {
                "id": "pa_qp2",
                "question": "_____ جاء؟ (Czy przyszedł?) — z hamzą pytającą",
                "translation": "(Czy przyszedł?)",
                "options": ["أَ", "هَلْ", "مَا", "مَنْ"],
                "correct": "أَ",
                "explanation": "Poprawnie: 'أَجاءَ؟' (a-jāʾa?) = Czy przyszedł? Hamza pytająca (أَ) = najstarsza i najbardziej elastyczna partykuła pytania zamkniętego. أَ vs هَلْ: أَ może łączyć się z negacją (أَلَمْ تذهبْ? = Czyż nie poszedłeś?) — هَلْ NIE MOŻE. أَ może łączyć się z przyszłym (أَسيذهبُ? = Czy pójdzie?) — هَلْ NIE MOŻE (w klasycznym). أَ jest wszechstronna, هَلْ ograniczona."
            },
            {
                "id": "pa_qp3",
                "question": "_____ كتبَ الرسالةَ؟ (KTO napisał list?)",
                "translation": "(Kto napisał list?)",
                "options": ["مَنْ", "مَا", "أَيْنَ", "مَتَى"],
                "correct": "مَنْ",
                "explanation": "Poprawnie: 'مَنْ كتبَ الرسالةَ؟' = Kto napisał list? مَنْ (man) = KTO — pytanie o OSOBY. Porównaj: مَا (co) = pytanie o rzeczy/definicje. مَنْ jest nieodmienny (جامد) — nie zmienia formy niezależnie od funkcji: مَنْ جاء? (podmiot), مَنْ رأيتَ? (dopełnienie), لِمَنْ هذا? (po przyimku). W polskim: 'kto' odmienia się: kto/kogo/komu. W arabskim: مَنْ bez odmiany."
            },
            {
                "id": "pa_qp4",
                "question": "_____ ذهبتَ؟ (DOKĄD poszedłeś?)",
                "translation": "(Dokąd poszedłeś?)",
                "options": ["أَيْنَ", "مَتَى", "كَيْفَ", "لِمَاذَا"],
                "correct": "أَيْنَ",
                "explanation": "Poprawnie: 'أَيْنَ ذهبتَ؟' (ayna dhahabta?) = Dokąd/Gdzie poszedłeś? أَيْنَ (ayna) = GDZIE/DOKĄD. W polskim rozróżniamy 'gdzie' (statyczne) i 'dokąd' (dynamiczne). W arabskim: أَيْنَ dla obu! Ale: مِنْ أَيْنَ (skąd), إلى أَيْنَ (dokąd — z przyimkiem). Porównaj: أَيْنَ تسكنُ? (gdzie mieszkasz? — statyczne), أَيْنَ ذهبتَ? (dokąd poszedłeś? — dynamiczne). Kontekst rozstrzyga."
            },
            {
                "id": "pa_qp5",
                "question": "_____ السفرُ؟ (KIEDY podróż?)",
                "translation": "(Kiedy podróż?)",
                "options": ["مَتَى", "أَيْنَ", "كَمْ", "لِمَاذَا"],
                "correct": "مَتَى",
                "explanation": "Poprawnie: 'مَتَى السفرُ؟' (matā as-safaru?) = Kiedy podróż? مَتَى (matā) = KIEDY — pytanie o czas. Odpowiedź: غداً (jutro), بعد أسبوع (za tydzień), في الصيف (latem). مَتَى jest nieoamienna i może stać: 1) z zdaniem nominalnym (مَتَى السفرُ?), 2) z czasownikowym (مَتَى تسافرُ?). Porównaj: أَيَّانَ (ayyana) = kiedy — synonim, ale bardziej podniosły/koranski."
            },
            {
                "id": "pa_qp6",
                "question": "_____ تعلَّمتَ العربيةَ؟ (JAK nauczyłeś się arabskiego?)",
                "translation": "(Jak nauczyłeś się arabskiego?)",
                "options": ["كَيْفَ", "مَاذَا", "لِمَاذَا", "مَتَى"],
                "correct": "كَيْفَ",
                "explanation": "Poprawnie: 'كَيْفَ تعلَّمتَ العربيةَ?' = Jak nauczyłeś się arabskiego? كَيْفَ (kayfa) = JAK — pytanie o sposób/stan. Odpowiedź: بالدراسة (przez naukę), بسهولة (z łatwością). كَيْفَ حالُكَ? (Jak się masz?) — najczestrzy zwrot z كيف. كَيْفَ może też wyrażać zdumienie: كَيْفَ تقولُ هذا?! (Jak możesz to mówić?!). W polskim: 'jak' — identyczna wszechstronność."
            },
            {
                "id": "pa_qp7",
                "question": "_____ كتاباً قرأتَ؟ (ILE książek przeczytałeś?)",
                "translation": "(Ile książek przeczytałeś?)",
                "options": ["كَمْ", "مَنْ", "أَيّ", "مَاذَا"],
                "correct": "كَمْ",
                "explanation": "Poprawnie: 'كَمْ كتاباً قرأتَ?' = Ile książek przeczytałeś? كَمْ (kam) = ILE — pytanie o liczbę. WAŻNE: po كَمْ الاستفهامية → rzeczownik w BIERNIKU l. poj.! كتاباً (nie كُتُبٍ!). To dziwne, bo pytamy o WIELE, a odpowiedź jest w l. poj. bierniku — reguła gramatyczna. Porównaj: كَمْ التعجبية (كَمْ مِنْ كتابٍ = ileż to książek! — z مِنْ + dopełniacz)."
            },
            {
                "id": "pa_qp8",
                "question": "_____ تدرسُ العربيةَ؟ (DLACZEGO uczysz się arabskiego?)",
                "translation": "(Dlaczego uczysz się arabskiego?)",
                "options": ["لِمَاذَا", "كَيْفَ", "مَتَى", "أَيْنَ"],
                "correct": "لِمَاذَا",
                "explanation": "Poprawnie: 'لِمَاذَا تدرسُ العربيةَ?' = Dlaczego uczysz się arabskiego? لِمَاذَا (limādhā) = DLACZEGO — dosłownie: لِـ (dla) + مَاذَا (co) = 'dla czego?'. Synonimy: لِمَ (skrócone), لِأَيِّ سببٍ (z jakiego powodu), مَا السببُ (jaki powód?). لِمَاذَا jest najczęstsze w MSA. Odpowiedź: لِأَنَّ (bo/ponieważ) + zdanie. Struktura: لِمَاذَا → pytanie, لِأَنَّ → odpowiedź."
            },
            {
                "id": "pa_qp9",
                "question": "أَمْ w 'أَتدرسُ أَمْ تعملُ؟' znaczy:",
                "translation": "(ما معنى أم هنا؟)",
                "options": ["CZY... CZY (pytanie rozłączne = Uczysz się czy pracujesz?)", "I... i...", "Ani... ani...", "Jeśli... to..."],
                "correct": "CZY... CZY (pytanie rozłączne = Uczysz się czy pracujesz?)",
                "explanation": "أَمْ (am) = CZY (w pytaniu rozłącznym). أَ...أَمْ = czy X czy Y (WYBRANIE jednej opcji). 'أَتدرسُ أَمْ تعملُ?' = Uczysz się CZY pracujesz? (jedno z dwóch). Porównaj: أَوْ (aw) w pytaniu: 'هل تريدُ شاياً أَوْ قهوةً?' = Chcesz herbatę czy kawę? (propozycja). Różnica: أَمْ wymaga HAMZY pytającej (أَ) na początku, أَوْ może być po هَلْ. أَمْ jest bardziej formalna."
            },
            {
                "id": "pa_qp10",
                "question": "_____ كتابٍ تُفضِّلُ؟ (KTÓRY/JAKI książkę wolisz?)",
                "translation": "(Jaką książkę wolisz?)",
                "options": ["أَيَّ", "مَا", "مَنْ", "كَمْ"],
                "correct": "أَيَّ",
                "explanation": "Poprawnie: 'أَيَّ كتابٍ تُفضِّلُ?' = Jaką/Którą książkę wolisz? أَيّ (ayy) = JAKI/KTÓRY — pytanie o wybór z grupy. UNIKALNA cecha: أَيّ to JEDYNA partykuła pytająca, która się ODMIENIA przez przypadki: أَيُّ (mianownik), أَيَّ (biernik), أَيِّ (dopełniacz). Po أَيّ → rzeczownik w DOPEŁNIACZU (إضافة): أَيَّ كتابٍ (jakiej książki). W polskim: 'jaki/który' — też odmienny."
            },
            {
                "id": "pa_qp11",
                "question": "_____ تفعلُ هذا؟ (CO robisz?) — forma całościowa",
                "translation": "(Co robisz?)",
                "options": ["مَاذَا", "مَا", "مَنْ", "هَلْ"],
                "correct": "مَاذَا",
                "explanation": "Poprawnie: 'مَاذَا تفعلُ?' = Co robisz? مَاذَا (mādhā) = CO — złożenie مَا + ذَا (wskazujące). W codziennym MSA: مَاذَا jest najpopularniejsze. Alternatywy: مَا تفعلُ? (krótsze), مَا الذي تفعلُهُ? (z zaimkiem względnym — bardziej formalne). Reguła: مَاذَا + czasownik (bez zaimka powrotnego). مَا الذي + czasownik + zaimek powrotny. Wszystkie = Co?"
            },
            {
                "id": "pa_qp12",
                "question": "Szyk w pytaniu: هَلْ + ___:",
                "translation": "(ما الترتيب بعد هل؟)",
                "options": ["هَلْ + zdanie (bez zmiany szyku)", "هَلْ + podmiot + orzeczenie (obowiązkowa inwersja)", "هَلْ + dopełnienie + orzeczenie", "هَلْ na końcu zdania"],
                "correct": "هَلْ + zdanie (bez zmiany szyku)",
                "explanation": "Po هَلْ: szyk zdania NIE ZMIENIA SIĘ — هَلْ po prostu dodaje pytanie do normalnego zdania. هَلْ + zdanie nominalne: هَلْ أنتَ طالبٌ? هَلْ + zdanie czasownikowe: هَلْ ذهبتَ? W polskim: 'Czy poszedłeś?' — też bez inwersji. W angielskim: inwersja obowiązkowa ('Did you go?'). Arabski i polski są tu PODOBNE — pytanie przez dodanie partykuły, bez zmiany szyku."
            },
            {
                "id": "pa_qp13",
                "question": "أَنَّى في 'أَنَّى لكَ هذا؟' znaczy:",
                "translation": "(ما معنى أنَّى لك هذا؟)",
                "options": ["SKĄD ci to? / Jak to możliwe?", "Kiedy ci to?", "Dlaczego ci to?", "Ile ci to?"],
                "correct": "SKĄD ci to? / Jak to możliwe?",
                "explanation": "أَنَّى (annā) = SKĄD/JAK — pytanie wyrażające ZDUMIENIE. 'أَنَّى لكَ هذا?' = Skąd to masz? / Jak to możliwe, że to masz? Z Koranu i klasycznej literatury. أَنَّى łączy znaczenie: skąd (مِنْ أَيْنَ) + jak (كَيْفَ) + zdumienie. W MSA rzadsze niż مِنْ أَيْنَ. Inne archaiczne: أَيَّانَ (kiedy — podniosłe), حَيْثُمَا (gdziekolwiek). Te formy to 'bogactwo' arabskiego pytania."
            },
            {
                "id": "pa_qp14",
                "question": "Pytanie bez partykuły: 'أنتَ مِنْ مصر؟' (z intonacją) jest:",
                "translation": "(هل يُمكن السؤال بدون أداة؟)",
                "options": ["Poprawne — intonacja wystarczy (w mowie)", "Błędne — trzeba هَلْ", "Poprawne tylko w dialekcie", "Błędne zawsze"],
                "correct": "Poprawne — intonacja wystarczy (w mowie)",
                "explanation": "W mowie: sama INTONACJA może tworzyć pytanie. 'أنتَ مِنْ مصر؟' (z rosnącą intonacją) = Jesteś z Egiptu? To poprawne w potocznym MSA i we WSZYSTKICH dialektach. W piśmie: dodanie هَلْ/أَ jest standardowe. Porównaj z polskim: 'Jesteś studentem?' — intonacja tworzy pytanie, nie partykuła 'czy'. Arabski i polski: obie strategie pytania (partykuła i intonacja)."
            },
            {
                "id": "pa_qp15",
                "question": "Ile głównych partykuł pytających (أدوات الاستفهام) ma arabski?",
                "translation": "(كم أداة استفهام في العربية؟)",
                "options": ["11 (أ, هل, ما, من, متى, أين, كيف, كم, لماذا, أيّ, أنّى)", "3 (ma, man, hal)", "5 (co, kto, gdzie, kiedy, jak)", "7"],
                "correct": "11 (أ, هل, ما, من, متى, أين, كيف, كم, لماذا, أيّ, أنّى)",
                "explanation": "11 głównych: 1) أَ (hamza — czy), 2) هَلْ (czy), 3) مَا/مَاذَا (co), 4) مَنْ (kto), 5) مَتَى (kiedy), 6) أَيْنَ (gdzie), 7) كَيْفَ (jak), 8) كَمْ (ile), 9) لِمَاذَا/لِمَ (dlaczego), 10) أَيّ (jaki/który), 11) أَنَّى (skąd/jak — archaiczne). Podział: 2 zamknięte (أَ, هَلْ = tak/nie) + 9 otwartych (wymagają informacji w odpowiedzi). W polskim: co, kto, gdzie, kiedy, jak, ile, dlaczego, jaki, czy — 9."
            }
        ]
    },
    {
        "key": "exclamation_particles",
        "name": "Partykuły wykrzyknikowe (أساليب التعجب)",
        "description": "أدوات التعجب والتأثر في العربية",
        "iconName": "exclamationmark.2",
        "color": "#22d3ee",
        "level": "advanced",
        "items": [
            {
                "id": "pa_exp1",
                "question": "_____ أجملَ السماءَ! (Jakże piękne niebo!)",
                "translation": "(Jakże piękne niebo!)",
                "options": ["مَا", "كَمْ", "هَلْ", "إنَّ"],
                "correct": "مَا",
                "explanation": "Poprawnie: 'مَا أجملَ السماءَ!' = Jakże piękne (jest) niebo! Wzorzec pierwszy wykrzyknika: مَا + أَفْعَلَ + dopełnienie w bierniku. مَا أَفْعَلَ to STAŁA formuła — nie można zmienić formy أَفْعَلَ (zawsze 3. os. m. l. poj. przeszły). السماءَ w bierniku (مفعول به). W polskim: 'Jakże piękne!' — przymiotnik. W arabskim: 'Jakże upiękniło!' — dosłownie forma czasownikowa, ale sens przymiotnikowy."
            },
            {
                "id": "pa_exp2",
                "question": "أَجْمِلْ بِالسماء! — to drugi wzorzec wykrzyknika. Znaczy:",
                "translation": "(ما معنى أَجْمِلْ بالسماء؟)",
                "options": ["Jakże piękne (jest) niebo! (= ما أجمل السماء)", "Upiększ niebo!", "Piękne niebo jest", "Niebo jest piekne"],
                "correct": "Jakże piękne (jest) niebo! (= ما أجمل السماء)",
                "explanation": "Wzorzec drugi: أَفْعِلْ بِـ + podmiot. 'أَجْمِلْ بِالسماءِ!' = Jakże piękne niebo! WYGLĄDA jak rozkaz (أَفْعِلْ), ale jest wykrzyknikiem. Reguła: أَفْعِلْ بِـ to zamrożona forma — nie odmienia się. بِالسماءِ: بِـ jest wtrącone (زائدة), السماء to فاعل (podmiot) w mianowniku (choć wygląda jak dopełniacz po بِـ). Oba wzorce = identyczne znaczenie."
            },
            {
                "id": "pa_exp3",
                "question": "Czy مَا أفعلَ może być użyte z KAŻDYM przymiotnikiem?",
                "translation": "(هل يُتعجب من كل صفة؟)",
                "options": ["NIE — tylko z przymiotnikami, które mają formę أفعل/فعلاء", "Tak — z każdym", "Tylko z kolorami", "Tylko z wadami fizycznymi"],
                "correct": "NIE — tylko z przymiotnikami, które mają formę أفعل/فعلاء",
                "explanation": "Ograniczenia: مَا أفعلَ działa TYLKO z przymiotnikami typu فَعِيل/فَعْل, które mają stopień wyższy أفعل. NIE działa z: kolorami (أحمر — *ما أحمرَ!), wadami fizycznymi (أعمى — *ما أعماه!), formami wyższymi niż I. W tych przypadkach: مَا أَشَدَّ حُمْرَتَهُ! (Jakże silna jest jego czerwoność!) — opis pośredni przez أَشَدَّ/أَكْثَرَ."
            },
            {
                "id": "pa_exp4",
                "question": "يَا لَلْعَجَبِ! znaczy:",
                "translation": "(ما معنى يا للعجب؟)",
                "options": ["O zdziwieniu! / Cóż za zdumienie!", "O Zdziwieniu, przyjdź!", "Wy, zdziwieni!", "Nie ma zdziwienia"],
                "correct": "O zdziwieniu! / Cóż za zdumienie!",
                "explanation": "يَا لَلْعَجَبِ! (yā la-l-ʿajabi!) = O zdziwieniu! / Cóż za zdumienie! يَا tu jest partykułą wołacza, ale użytą RETORYCZNIE — nie wołamy zdziwienia, lecz wyrażamy je. لَلْعَجَبِ = لِ + الـ + عَجَب. Inne: يَا لَلْأَسَفِ! (O, jakiż żal!), يَا لَلْحَسْرَةِ! (O, co za pożałowania!). To emocjonalne wykrzykniki — stały element arabskiej retoryki i codziennej mowy."
            },
            {
                "id": "pa_exp5",
                "question": "سُبْحَانَ الله! jest używane na wyrażenie:",
                "translation": "(متى نقول سبحان الله؟)",
                "options": ["Zdumienia/podziwu (Chwała Bogu! / Niech Bóg będzie uwielbiony!)", "Gniewu", "Smutku", "Pytania"],
                "correct": "Zdumienia/podziwu (Chwała Bogu! / Niech Bóg będzie uwielbiony!)",
                "explanation": "سُبْحَانَ الله (subḥāna-llāh) = Chwała Bogu! Używane do wyrażenia: 1) Podziwu: 'سبحان الله' widząc piękny zachód słońca, 2) Zdumienia: 'سبحان الله' słysząc zaskakującą wiadomość, 3) Dezaprobaty: 'سبحان الله' widząc coś dziwnego. Gramatycznie: سُبْحَانَ to masdar w bierniku (منصوب) jako مفعول مطلق. الله w dopełniaczu (إضافة). Jedno z najpopularniejszych arabskich wyrażeń."
            },
            {
                "id": "pa_exp6",
                "question": "لَعَمْرُكَ! (Na twoje życie!) jest:",
                "translation": "(ما نوع لعمرك؟)",
                "options": ["Przysięga/wykrzyknik (= Na twoje życie!)", "Pytanie o wiek", "Negacja życia", "Pozdrowienie"],
                "correct": "Przysięga/wykrzyknik (= Na twoje życie!)",
                "explanation": "لَعَمْرُكَ (laʿamruka) = Na twoje życie! — formuła prZYSIĘGI emocjonalnej i wykrzyknikowej zarazem. لَـ = لام الابتداء (wzmacniająca), عَمْرُ = życie/wiek (w dopełniaczu z zaimkiem: عَمْرُكَ). Gramatycznie: مبتدأ z domyślnym خبر (= قسمي = moja przysięga). Formuła koraniczna i literacka — wyraża SILNE emocje. W potocznym: وَحَيَاتَكَ (na twoje życie — dialektalne)."
            },
            {
                "id": "pa_exp7",
                "question": "نِعْمَ w 'نِعْمَ الرجلُ!' znaczy:",
                "translation": "(ما معنى نعم الرجل؟)",
                "options": ["Doskonały mężczyzna! / Cóż za wspaniały mąż!", "Tak, mężczyzna", "Nie mężczyzna", "Czy mężczyzna?"],
                "correct": "Doskonały mężczyzna! / Cóż za wspaniały mąż!",
                "explanation": "نِعْمَ (niʿma) = doskonały/wspaniały — czasownik POCHWAŁY (فعل مدح). 'نِعْمَ الرجلُ!' = Cóż za doskonały mężczyzna! Nie mylić z نَعَمْ (naʿam) = tak! To INNE słowa. نِعْمَ jest zamrożonym czasownikiem (فعل جامد) — nie odmienia się. Przeciwieństwo: بِئْسَ (biʾsa) = okropny/najgorszy (فعل ذم). Oba w Koranie: نِعْمَ العبدُ (doskonały sługa!)."
            },
            {
                "id": "pa_exp8",
                "question": "بِئْسَ w 'بِئْسَ الصديقُ!' znaczy:",
                "translation": "(ما معنى بئس الصديقُ؟)",
                "options": ["Jakże zły/okropny przyjaciel!", "Dobry przyjaciel", "Czy przyjaciel?", "Nie przyjaciel"],
                "correct": "Jakże zły/okropny przyjaciel!",
                "explanation": "بِئْسَ (biʾsa) = jakże zły/okropny — czasownik NAGANY (فعل ذم). 'بِئْسَ الصديقُ!' = Cóż za okropny przyjaciel! Przeciwieństwo نِعْمَ. Oba: zamrożone (جامد), po nich podmiot w mianowniku z الـ. Koran: 'بِئْسَ المصيرُ' = Jakże zły los (o piekle). Gramatycznie: بِئْسَ/نِعْمَ + فاعل (z الـ) + ewentualnie مخصوص بالمدح/الذم (ten, o kim mowa)."
            },
            {
                "id": "pa_exp9",
                "question": "كَمْ في 'كَمْ مِنْ كتابٍ قرأتُ!' jest:",
                "translation": "(ما نوع كم هنا؟)",
                "options": ["كَمْ الخبرية (wykrzyknikowa = Ileż to książek przeczytałem!)", "كَمْ الاستفهامية (pytająca)", "كَمْ العددية (liczbowa)", "كَمْ الشرطية (warunkowa)"],
                "correct": "كَمْ الخبرية (wykrzyknikowa = Ileż to książek przeczytałem!)",
                "explanation": "كَمْ الخبرية (khabariyya) = كَمْ pochwalcza/informacyjna: 'كَمْ مِنْ كتابٍ قرأتُ!' = Ileż to książek przeczytałem! Różnica od كَمْ الاستفهامية: 1) كَمْ الاستفهامية + biernik l. poj.: كَمْ كتاباً? (ile książek?), 2) كَمْ الخبرية + مِنْ + dopełniacz: كَمْ مِنْ كتابٍ! (ileż to książek!). Kontekst: pytanie (?) = استفهام, wykrzyknik (!) = خبرية."
            },
            {
                "id": "pa_exp10",
                "question": "لَيْتَ w 'لَيْتَنِي كنتُ هناك!' jest:",
                "translation": "(ما نوع ليت هنا؟)",
                "options": ["Partykuła życzeniowa (= Gdybym był tam! / Oby!)", "Negacja (nie byłem tam)", "Pytanie (czy byłem tam?)", "Twierdzenie (byłem tam)"],
                "correct": "Partykuła życzeniowa (= Gdybym był tam! / Oby!)",
                "explanation": "لَيْتَ (layta) = oby/gdyby — partykuła ŻYCZENIOWA (تمنّي) wyrażająca NIEOSIĄGALNE pragnienie. 'لَيْتَنِي كنتُ هناك!' = Gdybym był tam! / Szkoda, że nie byłem! لَيْتَ działa jak إنَّ: اسم w bierniku + خبر w mianowniku. لَيْتَنِي = لَيْتَ + ـنِي (zaimek dopełnieniowy). Porównaj: لَعَلَّ (może — nadzieja realna), لَيْتَ (oby — nadzieja nierealna). Silne emocjonalnie!"
            },
            {
                "id": "pa_exp11",
                "question": "حَبَّذَا w 'حَبَّذَا العلمُ!' znaczy:",
                "translation": "(ما معنى حبّذا العلم؟)",
                "options": ["Jakże wspaniała (jest) wiedza!", "Nie ma wiedzy", "Czy jest wiedza?", "Wiedza jest wystarczająca"],
                "correct": "Jakże wspaniała (jest) wiedza!",
                "explanation": "حَبَّذَا (ḥabbadhā) = jakże wspaniały — złożenie حَبَّ (kochać, doskonałe) + ذَا (wskazujące 'to'). 'حَبَّذَا العلمُ!' = Jakże wspaniała wiedza! To wariant نِعْمَ — pochwała. Przeciwieństwo: لَا حَبَّذَا (= brak pochwały = nagana). حَبَّذَا jest zamrożone — nie odmienia się. W MSA rzadsze, ale w klasycznej literaturze i gramatykach — fundament باب المدح والذم."
            },
            {
                "id": "pa_exp12",
                "question": "واهاً! / وَيْلَكَ! / يَا لَهْفِي! — to wszystko:",
                "translation": "(ما القاسم المشترك بين هذه التعبيرات؟)",
                "options": ["Wykrzykniki emocjonalne (تعجب/تأسف/تحسر)", "Pytania", "Negacje", "Pozdrowienia"],
                "correct": "Wykrzykniki emocjonalne (تعجب/تأسف/تحسر)",
                "explanation": "Wykrzykniki emocjonalne: واهاً (wāhan) = ach! (zachwyt), وَيْلَكَ (waylaka) = biada ci! (groźba/ostrzeżenie), يَا لَهْفِي (yā lahfī) = o, moja tęsknoto! (żal). Arabski ma BOGATE zasoby wykrzykników: هَيْهَاتَ (hayhaata) = daleko/niemożliwe!, صَهْ (ṣah) = cicho!, أُفٍّ (uff) = uf!/dość!. Wiele z nich to أسماء أفعال (rzeczowniki-czasowniki) — unikalna klasa arabska."
            },
            {
                "id": "pa_exp13",
                "question": "هَيْهَاتَ في 'هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُون' (Koran) znaczy:",
                "translation": "(ما معنى هيهات هيهات؟)",
                "options": ["Daleko, daleko! / Niemożliwe! (podwójne dla wzmocnienia)", "Bliskiego, bliskiego!", "Chodźcie, chodźcie!", "Tak, tak!"],
                "correct": "Daleko, daleko! / Niemożliwe! (podwójne dla wzmocnienia)",
                "explanation": "هَيْهَاتَ (hayhāta) = daleko!/niemożliwe! — اسم فعل ماض (rzeczownik-czasownik przeszły) = بَعُدَ (jest daleko). Podwojenie (هيهات هيهات) wzmacnia. Z Koranu (Al-Mu'minun 23:36): 'Daleko, daleko (jest spełnienie) tego, co wam obiecano!' Gramatycznie: هيهات to zamrożony wyraz — nie odmienia się. Fatha na końcu to budowa wyrazu, nie deklinacja."
            },
            {
                "id": "pa_exp14",
                "question": "Wykrzyknik za pomocą إِنَّ: 'إِنَّ هذا لَعَجَبٌ!' znaczy:",
                "translation": "(ما معنى إنّ هذا لعجبٌ؟)",
                "options": ["Zaprawdę to jest zdumiewające!", "To nie jest zdumiewające", "Czy to zdumiewające?", "To było zdumiewające"],
                "correct": "Zaprawdę to jest zdumiewające!",
                "explanation": "إِنَّ + لَـ (lam wzmacniające) = silne potwierdzenie/wykrzyknik: 'إِنَّ هذا لَعَجَبٌ!' = Zaprawdę to jest zdumiewające! Budowa: إِنَّ (partykuła emfatyczna) + هذا (podmiot — مبني w pozycji اسم) + لَـ (لام المزحلقة = wzmocnienie) + عَجَبٌ (orzecznik). Ta لَـ jest OBOWIĄZKOWA z إنَّ w pewnych kontekstach — wzmacnia emfazę. To retoryczny wykrzyknik przez إنَّ."
            },
            {
                "id": "pa_exp15",
                "question": "Ile sposobów wyrażania wykrzyknika (تعجب) ma arabski?",
                "translation": "(كم طريقة لتعجب في العربية؟)",
                "options": ["Co najmniej 6 głównych sposobów", "Tylko 1 (ما أفعل)", "Dokładnie 2", "Dokładnie 3"],
                "correct": "Co najmniej 6 głównych sposobów",
                "explanation": "Minimum 6 sposobów wykrzyknika: 1) مَا أَفْعَلَ (ما أجملَ السماء!), 2) أَفْعِلْ بِـ (أَجْمِلْ بالسماء!), 3) نِعْمَ/بِئْسَ (نِعْمَ الرجل!), 4) حَبَّذَا/لا حَبَّذَا, 5) كَمْ الخبرية (كم مِنْ كتابٍ!), 6) سُبْحَانَ/يَا لَـ/هَيْهَاتَ (wyrazy ekspresywne). Plus: إنَّ + لَـ, لَعَمْرُكَ, واهاً. Arabski jest BOGATY w struktury emocjonalne — każda z innym niuansem."
            }
        ]
    },
    {
        "key": "restriction_particles",
        "name": "Partykuły ograniczenia (أساليب الحصر)",
        "description": "أدوات الحصر والقصر في العربية",
        "iconName": "target",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {
                "id": "pa_rp1",
                "question": "مَا... إِلَّا w 'مَا جاء إِلَّا محمدٌ' znaczy:",
                "translation": "(ما معنى ما جاء إلا محمد؟)",
                "options": ["Przyszedł TYLKO Muhammad (nikt inny)", "Muhammad nie przyszedł", "Wszyscy oprócz Muhammada przyszli", "Czy Muhammad przyszedł?"],
                "correct": "Przyszedł TYLKO Muhammad (nikt inny)",
                "explanation": "مَا... إِلَّا = TYLKO/JEDYNIE — najczęstsza konstrukcja ograniczenia (حصر/قصر). 'مَا جاء إِلَّا محمدٌ' = Nie przyszedł nikt OPRÓCZ Muhammada = Przyszedł TYLKO Muhammad. Budowa: مَا (negacja) + czasownik + إِلَّا (oprócz/tylko) + wyjątek. محمدٌ w mianowniku jako فاعل (podmiot). W polskim: 'tylko/jedynie/wyłącznie'. Arabski stosuje PODWÓJNĄ konstrukcję: negacja + wyjątek."
            },
            {
                "id": "pa_rp2",
                "question": "إِنَّمَا w 'إِنَّمَا الأعمالُ بِالنِّيَّات' znaczy:",
                "translation": "(ما معنى إنما الأعمال بالنيات؟)",
                "options": ["Zaprawdę uczynki (są) TYLKO według intencji", "Uczynki nie mają intencji", "Czy uczynki mają intencje?", "Uczynki i intencje"],
                "correct": "Zaprawdę uczynki (są) TYLKO według intencji",
                "explanation": "إِنَّمَا (innamā) = zaprawdę TYLKO — partykuła ograniczenia (أداة حصر). 'إِنَّمَا الأعمالُ بِالنِّيَّات' = Uczynki (są oceniane) WYŁĄCZNIE według intencji. HADIS — jeden z najsłynniejszych. Gramatyka: إِنَّمَا = إِنَّ + مَا الكافة (مَا blokuje wpływ إنَّ na składnię). Funkcja: OGRANICZENIE (حصر) — uczynki zależą TYLKO od intencji, nie od niczego innego."
            },
            {
                "id": "pa_rp3",
                "question": "Różnica: مَا... إِلَّا vs إِنَّمَا:",
                "translation": "(ما الفرق بين ما...إلا و إنما؟)",
                "options": ["Tożsame znaczeniowo (= tylko), ale inna konstrukcja składniowa", "Zupełnie inne znaczenie", "مَا...إلا = pytanie, إنما = negacja", "مَا...إلا = przeszłość, إنما = teraźniejszość"],
                "correct": "Tożsame znaczeniowo (= tylko), ale inna konstrukcja składniowa",
                "explanation": "Obie = OGRANICZENIE (حصر), ale struktura inna: مَا جاء إِلَّا محمدٌ (negacja + wyjątek) = إنَّمَا جاء محمدٌ (partykuła + zdanie twierdzące). Znaczenie identyczne: 'Przyszedł TYLKO Muhammad'. Różnice stylistyczne: مَا...إلَّا bardziej emfatyczna/dramatyczna, إنَّمَا bardziej neutralna/informacyjna. W retoryce (بلاغة): wybór formy zależy od siły ograniczenia, kontekstu i stylu."
            },
            {
                "id": "pa_rp4",
                "question": "لَا... بَلْ w 'لا أحبُّ الشايَ بَلِ القهوةَ' — ograniczenie przez:",
                "translation": "(ما أسلوب الحصر هنا؟)",
                "options": ["Negacja + korekta (NIE herbatę, LECZ kawę)", "Negacja podwójna", "Pytanie retoryczne", "Wykrzyknik"],
                "correct": "Negacja + korekta (NIE herbatę, LECZ kawę)",
                "explanation": "لَا... بَلْ = negacja + korekta = ograniczenie (حصر). 'لَا أحبُّ الشايَ بَلِ القهوةَ' = Nie lubię herbaty, LECZ kawę. Budowa: لَا (negacja pierwszej opcji) + بَلْ (korekta na drugą). To trzeci sposób ograniczenia po: 1) مَا...إلَّا, 2) إنَّمَا, 3) negacja + بَلْ/لَكِنْ. Porównaj: لَا... لَكِنْ (nie... ale) — taka sama funkcja, łagodniejsza od بَلْ. Wszystkie trzy = 'nie X, tylko Y'."
            },
            {
                "id": "pa_rp5",
                "question": "إِلَّا w 'جاء الطلابُ إِلَّا محمداً' (BEZ negacji!) znaczy:",
                "translation": "(ما معنى جاء الطلاب إلا محمداً — بدون نفي؟)",
                "options": ["Przyszli studenci OPRÓCZ Muhammada (wyjątek)", "Przyszedł tylko Muhammad", "Nie przyszedł Muhammad", "Przyszli wszyscy"],
                "correct": "Przyszli studenci OPRÓCZ Muhammada (wyjątek)",
                "explanation": "BEZ negacji: إِلَّا = OPRÓCZ (استثناء = wyjątek). 'جاء الطلابُ إِلَّا محمداً' = Studenci przyszli OPRÓCZ Muhammada. محمداً w BIERNIKU (منصوب) — obowiązkowy przypadek z إلَّا w zdaniu twierdzącym pełnym. TO INNA FUNKCJA niż مَا...إلَّا (ograniczenie). Bez negacji: إلَّا = wyjątek (oprócz). Z negacją: مَا...إلَّا = ograniczenie (tylko). Kontekst: negacja → ograniczenie; twierdzenie → wyjątek."
            },
            {
                "id": "pa_rp6",
                "question": "Po إِلَّا w zdaniu twierdzącym (مُوجَب) wyjątek jest w:",
                "translation": "(ما إعراب المستثنى في الكلام الموجب؟)",
                "options": ["Bierniku (منصوب) — obowiązkowo", "Mianowniku", "Dopełniaczu", "Zależy od kontekstu"],
                "correct": "Bierniku (منصوب) — obowiązkowo",
                "explanation": "Reguła: w zdaniu TWIERDZĄCYM (موجب) + إلَّا → wyjątek (مستثنى) ZAWSZE w bierniku: جاء الطلابُ إلَّا محمداً (بiernik). رأيتُ الطلابَ إلَّا محمداً (biernik — choć reszta też w bierniku). مررتُ بالطلابِ إلَّا محمداً (biernik — choć reszta w dopełniaczu!). محمداً ZAWSZE منصوب po إلَّا w zdaniu twierdzącym. W negowanym — inna reguła!"
            },
            {
                "id": "pa_rp7",
                "question": "Po إِلَّا w zdaniu ZANEGOWANYM (منفي) wyjątek jest w:",
                "translation": "(ما إعراب المستثنى في الكلام المنفي؟)",
                "options": ["TAKIM SAMYM przypadku jak wyraz odniesienia (بدل)", "Zawsze w bierniku", "Zawsze w mianowniku", "Zawsze w dopełniaczu"],
                "correct": "TAKIM SAMYM przypadku jak wyraz odniesienia (بدل)",
                "explanation": "W zdaniu ZANEGOWANYM + إلَّا: wyjątek = بدل (apozycja) → TEN SAM przypadek co wyraz odniesienia. 'مَا جاء أحدٌ إلَّا محمدٌ' — محمدٌ w MIANOWNIKU (bo أحدٌ = مرفوع). 'مَا رأيتُ أحداً إلَّا محمداً' — محمداً w BIERNIKU (bo أحداً = منصوب). Reguła: zanegowane → بدل (ten sam przypadek); twierdzące → منصوب (zawsze biernik). TO FUNDAMENTALNA reguła باب الاستثناء."
            },
            {
                "id": "pa_rp8",
                "question": "غَيْر w 'جاء الطلابُ غَيْرَ محمدٍ' zastępuje:",
                "translation": "(غير تُعرب كـ...؟)",
                "options": ["إِلَّا (oprócz — w bierniku jako مستثنى)", "مَا (negacja)", "هَلْ (pytanie)", "إنَّ (emfaza)"],
                "correct": "إِلَّا (oprócz — w bierniku jako مستثنى)",
                "explanation": "غَيْر (ghayr) zastępuje إِلَّا w wyjątkach: 'جاء الطلابُ غَيْرَ محمدٍ' = Studenci przyszli oprócz Muhammada. غَيْرَ w bierniku (jak wyjątek po إلَّا). Po غَيْر → dopełniacz (إضافة): محمدٍ. Różnica: إلَّا jest partykułą (nieodmienną), غَيْر jest RZECZOWNIKIEM (odmiennym). W zdaniu zanegowanym غَيْر przybiera przypadek apozycji: 'مَا جاء غَيْرُ محمدٍ' (mianownik)."
            },
            {
                "id": "pa_rp9",
                "question": "سِوَى w 'لا أعرفُ سِوَى اللغةِ العربيةِ' znaczy:",
                "translation": "(ما معنى سوى هنا؟)",
                "options": ["OPRÓCZ/POZA (= Znam TYLKO arabski)", "Język arabski i inne", "Czy znam arabski?", "Nie znam arabskiego"],
                "correct": "OPRÓCZ/POZA (= Znam TYLKO arabski)",
                "explanation": "سِوَى (siwā) = oprócz/poza — synonim غَيْر i إلَّا. 'لا أعرفُ سِوَى العربيةِ' = Nie znam OPRÓCZ arabskiego = Znam TYLKO arabski. سِوَى + dopełniacz (إضافة): العربيةِ. سِوَى jest RZECZOWNIKIEM (اسم) w bierniku jako مستثنى. Różnica od غَيْر: سِوَى ma STAŁĄ formę (nie odmienia się widocznie — wszystkie przypadki 'domyślne' na alif maqsura)."
            },
            {
                "id": "pa_rp10",
                "question": "عَدَا / خَلَا / حَاشَا w 'جاء الطلابُ عَدَا محمدٍ/محمداً' to:",
                "translation": "(ما إعراب ما بعد عدا؟)",
                "options": ["Dopuszczalny dopełniacz LUB biernik (podwójna analiza)", "Tylko mianownik", "Tylko biernik", "Tylko dopełniacz"],
                "correct": "Dopuszczalny dopełniacz LUB biernik (podwójna analiza)",
                "explanation": "عَدَا/خَلَا/حَاشَا = oprócz — mają PODWÓJNĄ analizę: 1) Jako PRZYIMKI → محمدٍ (dopełniacz): جاء الطلاب عدا محمدٍ; 2) Jako CZASOWNIKI → محمداً (biernik): جاء الطلاب عدا محمداً. Obie wersje poprawne! Z مَا: 'مَا عَدَا محمداً' — TYLKO biernik (bo مَا المصدرية wymusza analizę czasownikową). To unikalna cecha tych trzech wyrazów — hybrydy przyimkowo-czasownikowe."
            },
            {
                "id": "pa_rp11",
                "question": "Ograniczenie przez PRZESUNIĘCIE: 'الكتابَ قرأتُ (nie الرسالةَ)' — technika to:",
                "translation": "(ما أسلوب القصر بالتقديم؟)",
                "options": ["تقديم المفعول (przesunięcie dopełnienia na początek = ograniczenie)", "إنَّمَا", "مَا...إلَّا", "لَا...بَلْ"],
                "correct": "تقديم المفعول (przesunięcie dopełnienia na początek = ograniczenie)",
                "explanation": "W retoryce (بلاغة): przesunięcie (تقديم) elementu na POCZĄTEK zdania = OGRANICZENIE (قصر). 'الكتابَ قرأتُ' = KSIĄŻKĘ przeczytałem (nie list, nie gazetę). Normalny szyk: قرأتُ الكتابَ (przeczytałem książkę — neutralne). Przesunięty szyk: الكتابَ قرأتُ (KSIĄŻKĘ — ograniczenie). To RETORYCZNE ograniczenie, nie gramatyczne. W polskim: akcent zdaniowy pełni tę samą rolę."
            },
            {
                "id": "pa_rp12",
                "question": "Ile głównych sposobów ograniczenia (حصر/قصر) ma arabski?",
                "translation": "(كم طريقة رئيسية للحصر والقصر؟)",
                "options": ["4 główne: مَا...إلَّا, إنَّمَا, negacja+بَلْ/لَكِنْ, تقديم", "Tylko 1 (إلَّا)", "Dokładnie 2", "Dokładnie 3"],
                "correct": "4 główne: مَا...إلَّا, إنَّمَا, negacja+بَلْ/لَكِنْ, تقديم",
                "explanation": "4 główne metody ograniczenia: 1) مَا...إلَّا (negacja + wyjątek: ما جاء إلا محمد), 2) إنَّمَا (partykuła: إنما جاء محمد), 3) لَا...بَلْ/لَكِنْ (negacja + korekta: لا زيد بل محمد), 4) تقديم (przesunięcie: الكتابَ قرأتُ). Wszystkie = 'TYLKO X, nie Y'. Różnice: siła emfazy, formalność, kontekst. بلاغة (retoryka arabska) analizuje niuanse każdej metody."
            },
            {
                "id": "pa_rp13",
                "question": "Wyjątek odłączony (مُنْقَطِع): 'جاء القومُ إلَّا حصاناً' znaczy:",
                "translation": "(ما معنى الاستثناء المنقطع؟)",
                "options": ["Lud przyszedł, ALE koń nie (wyjątek spoza grupy)", "Lud przyszedł z koniem", "Koń przyszedł sam", "Lud nie przyszedł"],
                "correct": "Lud przyszedł, ALE koń nie (wyjątek spoza grupy)",
                "explanation": "Wyjątek odłączony (منقطع): wyjątek NIE NALEŻY do grupy! 'جاء القومُ إلَّا حصاناً' = Lud przyszedł, ale koń nie. Koń nie jest częścią ludu (القوم) — to inna kategoria. W wyjątku odłączonym إلَّا = ale/oprócz tego że. Porównaj: متصل (przyłączony): جاء الطلابُ إلَّا محمداً — Muhammad JEST studentem, tylko nie przyszedł. Różnica: przynależność do grupy."
            },
            {
                "id": "pa_rp14",
                "question": "Wyjątek pusty (مُفَرَّغ): 'مَا جاء إلَّا محمدٌ' — محمدٌ jest:",
                "translation": "(ما إعراب محمد في ما جاء إلا محمد؟)",
                "options": ["Podmiotem (فاعل) w mianowniku — bo brak مستثنى منه", "Wyjątkiem w bierniku", "Orzecznikiem", "Dopełnieniem"],
                "correct": "Podmiotem (فاعل) w mianowniku — bo brak مستثنى منه",
                "explanation": "Wyjątek مُفَرَّغ (opróżniony): zdanie zanegowane, brak wyrazy odniesienia (مستثنى منه). 'مَا جاء إلَّا محمدٌ' — kto jest فاعل? محمدٌ! إلَّا tu jest 'przezroczysta' — محمدٌ przyjmuje przypadek, jakby إلَّا nie było: مَا جاء (kto?) = محمدٌ (فاعل, مرفوع). Porównaj: مَا رأيتُ إلَّا محمداً (بiernik = مفعول به). مَا مررتُ إلَّا بمحمدٍ (dopełniacz = po بِـ)."
            },
            {
                "id": "pa_rp15",
                "question": "W retoryce: قصر صفة على موصوف vs قصر موصوف على صفة — różnica:",
                "translation": "(ما الفرق بين النوعين؟)",
                "options": ["Ograniczenie CECHY do rzeczy vs ograniczenie RZECZY do cechy", "Identyczne", "Pierwszy = I forma, drugi = II forma", "Pierwszy = pytanie, drugi = odpowiedź"],
                "correct": "Ograniczenie CECHY do rzeczy vs ograniczenie RZECZY do cechy",
                "explanation": "Retoryka (بلاغة) wyróżnia: 1) قصر صفة على موصوف = ograniczenie CECHY do jednej RZECZY: 'ما شجاعٌ إلا عليٌّ' = ODWAŻNY jest TYLKO Ali (cecha→osoba); 2) قصر موصوف على صفة = ograniczenie RZECZY do jednej CECHY: 'ما عليٌّ إلا شجاعٌ' = Ali jest TYLKO odważny (osoba→cecha). Ta sama konstrukcja, inna kolejność → inny sens! To fundament arabskiej retoryki (علم المعاني)."
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
