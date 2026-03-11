import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "health_body_ar",
        "name": "Zdrowie i ciało (الصحة والجسم)",
        "description": "المفردات والتعبيرات المتعلقة بالصحة والجسم",
        "iconName": "heart.text.square",
        "color": "#f472b6",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_hb1",
                "question": "أنا _____ بصداع شديد (Mam silny ból głowy)",
                "translation": "(Mam silny ból głowy)",
                "options": ["أُعَانِي", "أَعْمَلُ", "أُحِبُّ", "أَدْرُسُ"],
                "correct": "أُعَانِي",
                "explanation": "Poprawnie: 'أُعَانِي' (uʿānī) = cierpię na / mam problem z. Forma III od rdzenia ع-ن-ي (cierpienie). Konstrukcja: أُعَانِي مِنْ صُدَاعٍ شَدِيدٍ = cierpię na silny ból głowy. W polskim: 'mam ból głowy' — prostsze. W arabskim: صُدَاع (ṣudāʿ) = ból głowy (od rdzenia ص-د-ع = pękanie). Inne: أُعَانِي مِنْ حُمَّى (mam gorączkę), أُعَانِي مِنْ سُعَالٍ (mam kaszel)."
            },
            {
                "id": "pa_hb2",
                "question": "يجب أن _____ الطبيبَ (Musisz iść do lekarza)",
                "translation": "(Musisz iść do lekarza)",
                "options": ["تَزُورَ", "تَأْكُلَ", "تَنَامَ", "تَقْرَأَ"],
                "correct": "تَزُورَ",
                "explanation": "Poprawnie: 'تَزُورَ' (tazūra) = odwiedzisz (tryb łączący po أَنْ). Od زَارَ (czasownik pusty: ز-و-ر). Konstrukcja: يَجِبُ أَنْ تَزُورَ الطَّبِيبَ = musisz odwiedzić lekarza. طَبِيب (ṭabīb) = lekarz, l.mn.: أَطِبَّاء. Powiązane: عِيَادَة (ʿiyāda) = przychodnia, مُسْتَشْفَى (mustashfā) = szpital (imiesłów bierny X od ش-ف-ي = leczenie)."
            },
            {
                "id": "pa_hb3",
                "question": "أين _____ أقرب صيدلية؟ (Gdzie jest najbliższa apteka?)",
                "translation": "(Gdzie jest najbliższa apteka?)",
                "options": ["تَقَعُ", "تَأْكُلُ", "تَكْتُبُ", "تَمْشِي"],
                "correct": "تَقَعُ",
                "explanation": "Poprawnie: 'تَقَعُ' (taqaʿu) = znajduje się. Od وَقَعَ (rdzeń و-ق-ع = upadek/znajdowanie się). صَيْدَلِيَّة (ṣaydaliyya) = apteka. أَقْرَب = najbliższy (elative od قَرِيب = bliski). Pełne zdanie: أَيْنَ تَقَعُ أَقْرَبُ صَيْدَلِيَّةٍ؟ Uwaga: أَقْرَب (dyptot — bez tanwinu). Inne pytania medyczne: أَيْنَ المُسْتَشْفَى؟ (Gdzie szpital?), هَلْ يُوجَدُ طَبِيبٌ هُنَا؟ (Czy jest tu lekarz?)."
            },
            {
                "id": "pa_hb4",
                "question": "_____ رأسي (Boli mnie głowa) — dosłownie: głowa mnie boli",
                "translation": "(Boli mnie głowa)",
                "options": ["يُؤْلِمُنِي", "يَكْتُبُنِي", "يَسْأَلُنِي", "يُعَلِّمُنِي"],
                "correct": "يُؤْلِمُنِي",
                "explanation": "Poprawnie: 'يُؤْلِمُنِي رَأْسِي' = boli mnie głowa. يُؤْلِمُ (yuʾlimu) = boli (forma IV od أ-ل-م = ból) + نِي (mnie — zaimek dopełnieniowy). رَأْس (raʾs) = głowa. Alternatywnie: عِنْدِي أَلَمٌ فِي رَأْسِي = mam ból w głowie. أَلَم (alam) = ból. Części ciała: عَيْن (ʿayn) = oko, أُذُن (udhun) = ucho, أَنْف (anf) = nos, فَم (fam) = usta, يَد (yad) = ręka."
            },
            {
                "id": "pa_hb5",
                "question": "هل عندك _____ ضد الألم؟ (Czy masz lek przeciwbólowy?)",
                "translation": "(Czy masz lek przeciwbólowy?)",
                "options": ["دَوَاء", "طَعَام", "كِتَاب", "سَيَّارَة"],
                "correct": "دَوَاء",
                "explanation": "Poprawnie: 'دَوَاء' (dawāʾ) = lek/lekarstwo. Rdzeń: د-و-ي (leczenie). L.mn.: أَدْوِيَة (adwiya). ضِدَّ الأَلَمِ = przeciw bólowi. Powiedzenie: لِكُلِّ دَاءٍ دَوَاءٌ = Na każdą chorobę jest lek. دَاء (dāʾ) = choroba. Inne słowa medyczne: وَصْفَة طِبِّيَّة (waṣfa ṭibbiyya) = recepta, حَبَّة (ḥabba) = tabletka, حُقْنَة (ḥuqna) = zastrzyk."
            },
            {
                "id": "pa_hb6",
                "question": "أُرِيدُ أن _____ مَوْعِداً (Chcę umówić wizytę)",
                "translation": "(Chcę umówić wizytę)",
                "options": ["أَحْجِزَ", "أَكْتُبَ", "أَقْرَأَ", "أَنَامَ"],
                "correct": "أَحْجِزَ",
                "explanation": "Poprawnie: 'أَحْجِزَ' (aḥjiza) = zarezerwuję (tryb łączący). Od حَجَزَ (ḥajaza) = zarezerwować. مَوْعِد (mawʿid) = termin/umówiona wizyta (اسم مكان/زمان od و-ع-د = obietnica). Pełne: أُرِيدُ أَنْ أَحْجِزَ مَوْعِداً عِنْدَ الطَّبِيبِ = Chcę umówić wizytę u lekarza. Inne: حَجْز (ḥajz) = rezerwacja, عِيَادَة (ʿiyāda) = gabinet lekarski."
            },
            {
                "id": "pa_hb7",
                "question": "الطبيب _____ لي دواءً (Lekarz przepisał mi lek)",
                "translation": "(Lekarz przepisał mi lek)",
                "options": ["وَصَفَ", "كَتَبَ", "قَالَ", "أَعْطَى"],
                "correct": "وَصَفَ",
                "explanation": "Poprawnie: 'وَصَفَ' (waṣafa) = przepisał/opisał. Rdzeń: و-ص-ف (opisywanie). W kontekście medycznym: وَصَفَ دَوَاءً = przepisał lek. Masdar: وَصْفَة (waṣfa) = przepis/recepta. وَصْفَة طِبِّيَّة = recepta lekarska. Alternatywa: كَتَبَ (kataba) = napisał — potocznie też używane: كَتَبَ لِي الطَّبِيبُ دَوَاءً, ale وَصَفَ jest bardziej formalny i precyzyjny medycznie."
            },
            {
                "id": "pa_hb8",
                "question": "يجب أن _____ هذا الدواءَ ثلاث مرات يومياً (Musisz brać ten lek 3 razy dziennie)",
                "translation": "(Musisz brać ten lek 3 razy dziennie)",
                "options": ["تَتَنَاوَلَ", "تَشْرَبَ", "تَأْكُلَ", "تَكْتُبَ"],
                "correct": "تَتَنَاوَلَ",
                "explanation": "Poprawnie: 'تَتَنَاوَلَ' (tatanāwala) = (będziesz) przyjmować/brać (lek). Forma VI od ن-و-ل. To formalny termin medyczny — 'brać lek'. Potocznie: تَأْخُذَ (taʾkhudha) = weźmiesz. ثَلَاثَ مَرَّاتٍ = trzy razy. يَوْمِيًّا (yawmiyyan) = dziennie (przysłówek od يَوْم = dzień). Inne dawkowania: مَرَّةً وَاحِدَةً (raz), مَرَّتَيْنِ (dwa razy — dwuczłon!)."
            },
            {
                "id": "pa_hb9",
                "question": "هل تُعَانِي من أي _____؟ (Czy masz jakieś alergie?)",
                "translation": "(Czy masz jakieś alergie?)",
                "options": ["حَسَاسِيَّة", "سَعَادَة", "حُرِّيَّة", "مُشْكِلَة"],
                "correct": "حَسَاسِيَّة",
                "explanation": "Poprawnie: 'حَسَاسِيَّة' (ḥasāsiyya) = alergia/uczulenie. Od حَسَّاس (ḥassās) = wrażliwy/uczulony (wzorzec فَعَّال intensywny). Rdzeń: ح-س-س (czucie). Końcówka -يَّة tworzy rzeczowniki abstrakcyjne (jak pol. '-ość'). Pytanie lekarza: هَلْ تُعَانِي مِنْ أَيِّ حَسَاسِيَّةٍ؟ Odpowiedź: نَعَمْ, عِنْدِي حَسَاسِيَّةٌ مِنَ البِنِسِلِين = Tak, jestem uczulony na penicylinę."
            },
            {
                "id": "pa_hb10",
                "question": "_____ جيدة (Ma dobre zdrowie) — dosł.: zdrowie jego dobre",
                "translation": "(Jego zdrowie jest dobre)",
                "options": ["صِحَّتُهُ", "سَيَّارَتُهُ", "مَدْرَسَتُهُ", "وَظِيفَتُهُ"],
                "correct": "صِحَّتُهُ",
                "explanation": "Poprawnie: 'صِحَّتُهُ جَيِّدَةٌ' = Jego zdrowie jest dobre. صِحَّة (ṣiḥḥa) = zdrowie (masdar od ص-ح-ح = bycie zdrowym, مضعّف). + هُ = jego. To zdanie nominalne: مبتدأ (صِحَّتُهُ) + خبر (جَيِّدَةٌ). Powiązane: صَحِيح (ṣaḥīḥ) = zdrowy/poprawny, مُسْتَشْفَى (szpital — gdzie się szuka شِفَاء = wyzdrowienia)."
            },
            {
                "id": "pa_hb11",
                "question": "أَحْتَاجُ إلى _____ طبية (Potrzebuję badania lekarskiego)",
                "translation": "(Potrzebuję badania lekarskiego)",
                "options": ["فُحُوصَاتٍ", "كُتُبٍ", "سَيَّارَاتٍ", "مَدَارِسَ"],
                "correct": "فُحُوصَاتٍ",
                "explanation": "Poprawnie: 'فُحُوصَات' (fuḥūṣāt) = badania/testy medyczne. L.mn. od فَحْص (faḥṣ) = badanie. Rdzeń: ف-ح-ص (badanie/sprawdzanie). Formy: فَحْص دَمٍ (badanie krwi), فَحْص بَوْلٍ (badanie moczu), أَشِعَّة سِينِيَّة (prześwietlenie/rentgen). Konstrukcja: أَحْتَاجُ إِلَى + rzeczownik w dopełniaczu. إِلَى jest wymagana z اِحْتَاجَ (forma VIII od ح-و-ج = potrzeba)."
            },
            {
                "id": "pa_hb12",
                "question": "هو _____ في المستشفى (On leży w szpitalu)",
                "translation": "(On leży w szpitalu)",
                "options": ["يَرْقُدُ", "يَكْتُبُ", "يَلْعَبُ", "يَدْرُسُ"],
                "correct": "يَرْقُدُ",
                "explanation": "Poprawnie: 'يَرْقُدُ' (yarqudu) = leży (w łóżku/szpitalu). Od رَقَدَ (raqada) = położył się/leżał. Termin medyczny na hospitalizację. مُسْتَشْفَى (mustashfā) = szpital — strukturalnie: اسم مكان formy X od ش-ف-ي (leczenie), dosł.: 'miejsce szukania uzdrowienia'. Inne terminy szpitalne: غُرْفَة العَمَلِيَّات (sala operacyjna), قِسْم الطَّوَارِئ (oddział ratunkowy)."
            },
            {
                "id": "pa_hb13",
                "question": "_____ ساقي (Złamałem nogę)",
                "translation": "(Złamałem nogę)",
                "options": ["كَسَرْتُ", "أَكَلْتُ", "فَتَحْتُ", "قَرَأْتُ"],
                "correct": "كَسَرْتُ",
                "explanation": "Poprawnie: 'كَسَرْتُ' (kasartu) = złamałem. Rdzeń: ك-س-ر (łamanie). سَاق (sāq) = noga/goleń (r. żeński!). Inne kontuzje: جُرْح (jurḥ) = rana, حَرْق (ḥarq) = oparzenie, كَدْمَة (kadma) = siniak. W szpitalu: أَحْتَاجُ إِلَى جَبِيرَةٍ (potrzebuję gipsu), هَلْ تَحْتَاجُ إِلَى عَمَلِيَّةٍ جِرَاحِيَّةٍ؟ (Czy potrzebna operacja?). Powiązane: اِنْكَسَرَ (forma VII) = złamało się (samo)."
            },
            {
                "id": "pa_hb14",
                "question": "Imiesłów 'مَرِيض' (chory) ma l.mn.:",
                "translation": "(ما جمع مَرِيض؟)",
                "options": ["مَرْضَى", "مَرِيضُون", "مَرَاضِي", "أَمْرَاض"],
                "correct": "مَرْضَى",
                "explanation": "Poprawnie: 'مَرْضَى' (marḍā) = chorzy. To l.mn. łamana wzorca فَعْلَى (od فَعِيل). مَرِيض → مَرْضَى (jak: جَرِيح → جَرْحَى = ranni, قَتِيل → قَتْلَى = zabici). Rdzeń: م-ر-ض (choroba). أَمْرَاض (amrāḍ) to l.mn. od مَرَض (maraḍ) = choroba (rzeczownik, nie przymiotnik!). Rozróżnienie: مَرِيض = chory (osoba), مَرَض = choroba (stan)."
            },
            {
                "id": "pa_hb15",
                "question": "الحَمْدُ للهِ على _____! (Chwała Bogu za zdrowie!)",
                "translation": "(Chwała Bogu za zdrowie!)",
                "options": ["السَّلَامَة", "السَّيَّارَة", "المَدْرَسَة", "الوَظِيفَة"],
                "correct": "السَّلَامَة",
                "explanation": "Poprawnie: 'السَّلَامَة' (as-salāma) = bezpieczeństwo/zdrowie. Rdzeń: س-ل-م (pokój/bezpieczeństwo). Wyrażenie الحَمْدُ للهِ عَلَى السَّلَامَةِ mówi się osobie, która wyzdrowiała lub uniknęła niebezpieczeństwa — odpowiednik polskiego 'Chwała Bogu, że zdrowy'. Odpowiedź: اللهُ يُسَلِّمُك (Niech Bóg cię chroni). Ten sam rdzeń: إِسْلَام, سَلَام, مُسْلِم, تَسْلِيم."
            }
        ]
    },
    {
        "key": "work_office_ar",
        "name": "Praca i biuro (العمل والمكتب)",
        "description": "مفردات وتعبيرات العمل والحياة المهنية",
        "iconName": "briefcase.fill",
        "color": "#60a5fa",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_wo1",
                "question": "أنا _____ في شركة كبيرة (Pracuję w dużej firmie)",
                "translation": "(Pracuję w dużej firmie)",
                "options": ["أَعْمَلُ", "أَلْعَبُ", "أَنَامُ", "أَسْبَحُ"],
                "correct": "أَعْمَلُ",
                "explanation": "Poprawnie: 'أَعْمَلُ' (aʿmalu) = pracuję. Rdzeń: ع-م-ل (praca). شَرِكَة (sharika) = firma/spółka (od ش-ر-ك = dzielenie/partnerstwo). كَبِيرَة = duża. Końcówka -ة potwierdza r. żeński شركة. Powiązane: عَمَل (ʿamal) = praca, عَامِل (ʿāmil) = pracownik, مَعْمَل (maʿmal) = laboratorium/fabryka, زَمِيل عَمَلٍ (zamīl ʿamal) = kolega z pracy."
            },
            {
                "id": "pa_wo2",
                "question": "ما هي _____؟ (Jaki jest twój zawód?)",
                "translation": "(Jaki jest twój zawód?)",
                "options": ["مِهْنَتُكَ", "سَيَّارَتُكَ", "أُسْرَتُكَ", "مَدِينَتُكَ"],
                "correct": "مِهْنَتُكَ",
                "explanation": "Poprawnie: 'مِهْنَتُكَ' (mihnatuka) = twój zawód. مِهْنَة (mihna) = zawód/profesja. Rdzeń: م-ه-ن. Synonimy: وَظِيفَة (waẓīfa) = stanowisko/posada, حِرْفَة (ḥirfa) = rzemiosło, عَمَل (ʿamal) = praca (ogólnie). Odpowiedź: أَنَا مُهَنْدِسٌ (jestem inżynierem), أَنَا طَبِيبٌ (jestem lekarzem), أَنَا مُعَلِّمٌ (jestem nauczycielem — imiesłów czynny II od ع-ل-م)."
            },
            {
                "id": "pa_wo3",
                "question": "عندي _____ مهم اليوم (Mam ważne spotkanie dzisiaj)",
                "translation": "(Mam ważne spotkanie dzisiaj)",
                "options": ["اِجْتِمَاع", "اِمْتِحَان", "إِفْطَار", "اِنْتِخَاب"],
                "correct": "اِجْتِمَاع",
                "explanation": "Poprawnie: 'اِجْتِمَاع' (ijtimāʿ) = spotkanie/zebranie. Masdar formy VIII od ج-م-ع (zbieranie). Forma VIII dodaje znaczenie wzajemności: اِجْتَمَعَ = zebrali się razem. مُهِمّ (muhimm) = ważny (imiesłów czynny IV od ه-م-م). Inne słowa biurowe: مَكْتَب (maktab) = biurko/biuro, تَقْرِير (taqrīr) = raport, مُوَظَّف (muwaẓẓaf) = pracownik biurowy."
            },
            {
                "id": "pa_wo4",
                "question": "_____ راتبي الشهر الماضي (Dostałem wypłatę w zeszłym miesiącu)",
                "translation": "(Dostałem wypłatę w zeszłym miesiącu)",
                "options": ["تَسَلَّمْتُ", "أَكَلْتُ", "كَتَبْتُ", "سَافَرْتُ"],
                "correct": "تَسَلَّمْتُ",
                "explanation": "Poprawnie: 'تَسَلَّمْتُ' (tasallamtu) = otrzymałem (forma V od س-ل-م). رَاتِب (rātib) = pensja/wynagrodzenie. الشَّهْر المَاضِي = zeszły miesiąc (المَاضِي = miniony, imiesłów czynny od مَضَى). Powiązane: مَعَاش (maʿāsh) = emerytura (od ع-ي-ش = życie/utrzymanie), عِلَاوَة (ʿilāwa) = premia, خَصْم (khaṣm) = potrącenie."
            },
            {
                "id": "pa_wo5",
                "question": "هل يمكنك _____ هذا التقرير؟ (Czy możesz przygotować ten raport?)",
                "translation": "(Czy możesz przygotować ten raport?)",
                "options": ["إِعْدَادُ", "أَكْلُ", "نَوْمُ", "سِبَاحَةُ"],
                "correct": "إِعْدَادُ",
                "explanation": "Poprawnie: 'إِعْدَاد' (iʿdād) = przygotowanie. Masdar formy IV od ع-د-د (liczenie/przygotowanie). تَقْرِير (taqrīr) = raport (masdar formy II od ق-ر-ر = ustalenie). Konstrukcja: هَلْ يُمْكِنُكَ + masdar = Czy możesz + bezokolicznik. Inne dokumenty: مُذَكِّرَة (mudhakkira) = notatka, خِطَاب (khiṭāb) = pismo, عَرْض تَقْدِيمِيّ (ʿarḍ taqdīmī) = prezentacja."
            },
            {
                "id": "pa_wo6",
                "question": "تَمَّ _____ المشروع بنجاح (Projekt został ukończony pomyślnie)",
                "translation": "(Projekt został ukończony pomyślnie)",
                "options": ["إِنْجَازُ", "إِفْسَادُ", "إِلْغَاءُ", "تَأْخِيرُ"],
                "correct": "إِنْجَازُ",
                "explanation": "Poprawnie: 'إِنْجَاز' (injāz) = ukończenie/osiągnięcie. Masdar formy IV od ن-ج-ز (realizacja). تَمَّ (tamma) = zostało dokonane/zakończone — formalny odpowiednik strony biernej, bardzo popularny w MSA. Konstrukcja: تَمَّ + masdar = zostało zrobione X. بِنَجَاحٍ (binajāḥin) = pomyślnie/z sukcesem. مَشْرُوع (mashrūʿ) = projekt (imiesłów bierny od ش-ر-ع = rozpoczynanie)."
            },
            {
                "id": "pa_wo7",
                "question": "أُرِيدُ أن _____ إجازةً (Chcę wziąć urlop)",
                "translation": "(Chcę wziąć urlop)",
                "options": ["آخُذَ", "أَكْتُبَ", "أَقْرَأَ", "أَدْرُسَ"],
                "correct": "آخُذَ",
                "explanation": "Poprawnie: 'آخُذَ' (ākhudha) = wezmę (tryb łączący). Od أَخَذَ (rdzeń أ-خ-ذ). إِجَازَة (ijāza) = urlop/pozwolenie. Rdzeń: ج-و-ز (przechodzenie/zezwalanie). Rodzaje urlopu: إِجَازَة سَنَوِيَّة (urlop roczny), إِجَازَة مَرَضِيَّة (zwolnienie lekarskie), إِجَازَة أُمُومَة (urlop macierzyński). Uwaga: آخُذَ z maddą — bo أَأْخُذَ → آخُذَ (dwie hamzy → madda)."
            },
            {
                "id": "pa_wo8",
                "question": "يَعْقِدُ المديرُ _____ كل أسبوع (Dyrektor organizuje spotkanie co tydzień)",
                "translation": "(Dyrektor organizuje spotkanie co tydzień)",
                "options": ["اِجْتِمَاعاً", "حَفْلَةً", "رِحْلَةً", "مُبَارَاةً"],
                "correct": "اِجْتِمَاعاً",
                "explanation": "Poprawnie: 'يَعْقِدُ اِجْتِمَاعاً' = organizuje spotkanie. عَقَدَ (ʿaqada) = zawiązał/zorganizował (rdzeń ع-ق-د = wiązanie). مُدِير (mudīr) = dyrektor (imiesłów czynny IV od د-و-ر = krążenie, dosł.: ten kto kieruje obiegiem). كُلَّ أُسْبُوعٍ = co tydzień. أُسْبُوع (usbūʿ) = tydzień (od سَبْع = siedem → siedmiodniowy cykl)."
            },
            {
                "id": "pa_wo9",
                "question": "أحتاج إلى _____ مهاراتي (Muszę rozwinąć swoje umiejętności)",
                "translation": "(Muszę rozwinąć swoje umiejętności)",
                "options": ["تَطْوِيرِ", "تَدْمِيرِ", "تَأْخِيرِ", "تَصْغِيرِ"],
                "correct": "تَطْوِيرِ",
                "explanation": "Poprawnie: 'تَطْوِير' (taṭwīr) = rozwój/rozwijanie. Masdar formy II od ط-و-ر (faza/etap). مَهَارَات (mahārāt) = umiejętności (l.mn. od مَهَارَة = umiejętność). Inne słowa kariery: تَرْقِيَة (tarqiya) = awans, تَدْرِيب (tadrīb) = szkolenie, خِبْرَة (khibra) = doświadczenie, سِيرَة ذَاتِيَّة (sīra dhātiyya) = CV/życiorys."
            },
            {
                "id": "pa_wo10",
                "question": "_____ موظف جديد (Zatrudniono nowego pracownika)",
                "translation": "(Zatrudniono nowego pracownika)",
                "options": ["تَمَّ تَعْيِينُ", "تَمَّ فَصْلُ", "تَمَّ نَقْلُ", "تَمَّ رَفْضُ"],
                "correct": "تَمَّ تَعْيِينُ",
                "explanation": "Poprawnie: 'تَمَّ تَعْيِينُ' = został zatrudniony (dosł.: dokonano mianowania). تَعْيِين (taʿyīn) = mianowanie/zatrudnienie (masdar II od ع-ي-ن = oko/określenie). مُوَظَّف (muwaẓẓaf) = pracownik (imiesłów bierny II od و-ظ-ف = funkcja). Przeciwieństwo: فَصْل (faṣl) = zwolnienie, اِسْتِقَالَة (istiqāla) = rezygnacja (masdar X od ق-و-ل? — nie, od ق-ي-ل = odejście)."
            },
            {
                "id": "pa_wo11",
                "question": "ما _____ العمل؟ (Jakie są godziny pracy?)",
                "translation": "(Jakie są godziny pracy?)",
                "options": ["سَاعَاتُ", "أَيَّامُ", "شُهُورُ", "سَنَوَاتُ"],
                "correct": "سَاعَاتُ",
                "explanation": "Poprawnie: 'سَاعَات العَمَلِ' (sāʿāt al-ʿamal) = godziny pracy. To iḍāfa: سَاعَات (godziny, l.mn. od سَاعَة) + العَمَل (pracy, w dopełniaczu). Typowe odpowiedzi: مِنَ الثَّامِنَةِ حَتَّى الخَامِسَةِ = od ósmej do piątej. دَوَام (dawām) = godziny urzędowania, دَوَام كَامِل (pełny etat), دَوَام جُزْئِيّ (niepełny etat/part-time)."
            },
            {
                "id": "pa_wo12",
                "question": "هل يمكنني _____ من البيت؟ (Czy mogę pracować z domu?)",
                "translation": "(Czy mogę pracować z domu?)",
                "options": ["العَمَلُ", "النَّوْمُ", "الأَكْلُ", "اللَّعِبُ"],
                "correct": "العَمَلُ",
                "explanation": "Poprawnie: 'هَلْ يُمْكِنُنِي العَمَلُ مِنَ البَيْتِ' = Czy mogę pracować z domu. يُمْكِنُنِي (yumkinunī) = mogę (dosł.: jest mi możliwe — bezosobowe). العَمَل jako podmiot (مرفوع). مِنَ البَيْتِ = z domu. Nowoczesne terminy: عَمَل عَنْ بُعْدٍ (ʿamal ʿan buʿdin) = praca zdalna, عَمَل حُرّ (freelancing), مَسَاحَة عَمَل مُشْتَرَكَة (coworking space)."
            },
            {
                "id": "pa_wo13",
                "question": "_____ عقد العمل (Podpisałem umowę o pracę)",
                "translation": "(Podpisałem umowę o pracę)",
                "options": ["وَقَّعْتُ", "كَسَرْتُ", "فَتَحْتُ", "مَزَّقْتُ"],
                "correct": "وَقَّعْتُ",
                "explanation": "Poprawnie: 'وَقَّعْتُ' (waqqaʿtu) = podpisałem. Forma II od و-ق-ع (upadek/zdarzenie). Forma II z szaddą dodaje intensywność/kauzatywność. عَقْد العَمَلِ (ʿaqd al-ʿamal) = umowa o pracę. عَقْد (ʿaqd) = umowa/kontrakt (od ع-ق-د = wiązanie/zawiązanie). Powiązane: تَوْقِيع (tawqīʿ) = podpis (masdar II), عَقْد إِيجَارٍ (umowa najmu)."
            },
            {
                "id": "pa_wo14",
                "question": "المدير _____ بالمشروع (Dyrektor jest zadowolony z projektu)",
                "translation": "(Dyrektor jest zadowolony z projektu)",
                "options": ["رَاضٍ", "غَاضِب", "حَزِين", "مُتْعَب"],
                "correct": "رَاضٍ",
                "explanation": "Poprawnie: 'رَاضٍ' (rāḍin) = zadowolony. Imiesłów czynny od رَضِيَ (raḍiya) = był zadowolony (ناقص z ي). Wzorzec فَاعِل od ناقص: رَاضِي → رَاضٍ (tanwin, bez ي w nieokreślonym). Z الـ: الرَّاضِي. Konstrukcja: رَاضٍ بِـ / عَنْ = zadowolony z. Przeciwieństwo: سَاخِط (sākhiṭ) = niezadowolony, غَاضِب (ghāḍib) = zły."
            },
            {
                "id": "pa_wo15",
                "question": "تَقَدَّمْتُ بِـ_____ لوظيفة جديدة (Złożyłem podanie o nową pracę)",
                "translation": "(Złożyłem podanie o nową pracę)",
                "options": ["طَلَبٍ", "كِتَابٍ", "طَعَامٍ", "دَوَاءٍ"],
                "correct": "طَلَبٍ",
                "explanation": "Poprawnie: 'طَلَب' (ṭalab) = podanie/wniosek. تَقَدَّمَ بِطَلَبٍ = złożył podanie (forma V od ق-د-م = przód). وَظِيفَة جَدِيدَة = nowa praca/stanowisko. Proces rekrutacji: طَلَب تَوْظِيف (application), مُقَابَلَة (muqābala) = rozmowa kwalifikacyjna (forma III od ق-ب-ل = spotykanie twarzą w twarz), قَبُول (qubūl) = przyjęcie, رَفْض (rafḍ) = odrzucenie."
            }
        ]
    },
    {
        "key": "technology_internet_ar",
        "name": "Technologia i internet (التكنولوجيا والإنترنت)",
        "description": "مفردات التقنية والحاسوب والإنترنت",
        "iconName": "desktopcomputer",
        "color": "#818cf8",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_ti1",
                "question": "هل يمكنك _____ لي كلمة السرّ؟ (Czy możesz wysłać mi hasło?)",
                "translation": "(Czy możesz wysłać mi hasło?)",
                "options": ["إِرْسَالُ", "أَكْلُ", "شُرْبُ", "نَوْمُ"],
                "correct": "إِرْسَالُ",
                "explanation": "Poprawnie: 'إِرْسَال' (irsāl) = wysłanie. Masdar formy IV od ر-س-ل (posłannictwo). كَلِمَة السِّرّ (kalimat as-sirr) = hasło (dosł.: słowo tajemnicy). Inne terminy IT: بَرِيد إِلِكْتْرُونِيّ (barīd iliktrūnī) = e-mail, رِسَالَة (risāla) = wiadomość, تَحْمِيل (taḥmīl) = pobieranie/ładowanie, رَفْع (rafʿ) = upload."
            },
            {
                "id": "pa_ti2",
                "question": "لا أستطيع _____ بالإنترنت (Nie mogę połączyć się z internetem)",
                "translation": "(Nie mogę połączyć się z internetem)",
                "options": ["الاِتِّصَالَ", "الأَكْلَ", "النَّوْمَ", "القِرَاءَةَ"],
                "correct": "الاِتِّصَالَ",
                "explanation": "Poprawnie: 'الاِتِّصَال' (al-ittiṣāl) = połączenie/kontakt. Masdar formy VIII od و-ص-ل (łączenie). لَا أَسْتَطِيعُ (lā astaṭīʿu) = nie mogę (forma X od ط-و-ع = posłuszeństwo). Terminy sieciowe: شَبَكَة (shabaka) = sieć, وَاي فَاي (wāy fāy) = Wi-Fi, اِتِّصَال (ittiṣāl) = połączenie, مُتَّصِل (muttaṣil) = podłączony, غَيْرُ مُتَّصِلٍ = niepodłączony."
            },
            {
                "id": "pa_ti3",
                "question": "يجب أن _____ التطبيقَ (Musisz zaktualizować aplikację)",
                "translation": "(Musisz zaktualizować aplikację)",
                "options": ["تُحَدِّثَ", "تَحْذِفَ", "تَكْسِرَ", "تُغْلِقَ"],
                "correct": "تُحَدِّثَ",
                "explanation": "Poprawnie: 'تُحَدِّثَ' (tuḥaddhitha) = zaktualizujesz (tryb łączący). Forma II od ح-د-ث (nowość/zdarzenie). تَطْبِيق (taṭbīq) = aplikacja (masdar II od ط-ب-ق = stosowanie, dosł.: zastosowanie). تَحْدِيث (taḥdīth) = aktualizacja. Inne: تَنْزِيل (tanzīl) = pobranie, تَثْبِيت (tathbīt) = instalacja, حَذْف (ḥadhf) = usunięcie, إِعَادَة تَشْغِيل (iʿādat tashghīl) = restart."
            },
            {
                "id": "pa_ti4",
                "question": "_____ الحاسوب لا يعمل (Komputer nie działa)",
                "translation": "(Komputer nie działa)",
                "options": ["هَذَا", "هَذِهِ", "هَؤُلَاءِ", "ذَلِكَ"],
                "correct": "هَذَا",
                "explanation": "Poprawnie: 'هَذَا' (hādhā) = ten. حَاسُوب (ḥāsūb) = komputer (r. męski! — od ح-س-ب = liczenie, wzorzec فَاعُول = narzędzie). لَا يَعْمَلُ = nie działa. Warianty: حَاسُوب = komputer (MSA), كُمْبْيُوتَر (dialekty), حَاسُوب مَحْمُول = laptop (dosł.: komputer przenośny). لَوْحَة المَفَاتِيح (lawḥat al-mafātīḥ) = klawiatura (dosł.: tablica kluczy)."
            },
            {
                "id": "pa_ti5",
                "question": "أريد _____ صورةً على وسائل التواصل (Chcę opublikować zdjęcie w mediach społecznościowych)",
                "translation": "(Chcę opublikować zdjęcie w mediach społecznościowych)",
                "options": ["نَشْرَ", "حَذْفَ", "كَسْرَ", "أَكْلَ"],
                "correct": "نَشْرَ",
                "explanation": "Poprawnie: 'نَشْر' (nashr) = publikowanie. Od نَشَرَ (nashara) = opublikował/rozpowszechnił. Rdzeń: ن-ش-ر (rozprzestrzenianie). وَسَائِل التَّوَاصُل الاِجْتِمَاعِيّ = media społecznościowe (dosł.: środki komunikacji społecznej). صُورَة (ṣūra) = zdjęcie/obraz. Terminy social media: مَنْشُور (manshūr) = post (imiesłów bierny), تَعْلِيق (taʿlīq) = komentarz, إِعْجَاب (iʿjāb) = polubienie, مُتَابَعَة (mutābaʿa) = obserwowanie."
            },
            {
                "id": "pa_ti6",
                "question": "الملف _____ كبير جداً (Plik jest za duży)",
                "translation": "(Plik jest za duży)",
                "options": ["حَجْمُهُ", "لَوْنُهُ", "اسْمُهُ", "عُمْرُهُ"],
                "correct": "حَجْمُهُ",
                "explanation": "Poprawnie: 'حَجْمُهُ كَبِيرٌ جِدًّا' = jego rozmiar jest za duży. مَلَفّ (malaff) = plik/folder (od ل-ف-ف = zawijanie, مضعّف). حَجْم (ḥajm) = rozmiar. Terminy plikowe: مُجَلَّد (mujallad) = folder, مِسَاحَة (misāḥa) = miejsce/przestrzeń, ضَغْط (ḍaghṭ) = kompresja, نَسْخ اِحْتِيَاطِيّ (naskh iḥtiyāṭī) = kopia zapasowa."
            },
            {
                "id": "pa_ti7",
                "question": "هل _____ على الموقع الإلكتروني؟ (Czy zarejestrowałeś się na stronie internetowej?)",
                "translation": "(Czy zarejestrowałeś się na stronie internetowej?)",
                "options": ["سَجَّلْتَ", "كَتَبْتَ", "قَرَأْتَ", "نِمْتَ"],
                "correct": "سَجَّلْتَ",
                "explanation": "Poprawnie: 'سَجَّلْتَ' (sajjalta) = zarejestrowałeś (forma II od س-ج-ل = rejestrowanie). مَوْقِع إِلِكْتْرُونِيّ (mawqiʿ iliktrūnī) = strona internetowa. مَوْقِع = miejsce/strona (اسم مكان od و-ق-ع). Terminy rejestracyjne: تَسْجِيل (tasjīl) = rejestracja, تَسْجِيل الدُّخُول (logowanie), تَسْجِيل الخُرُوج (wylogowanie), حِسَاب (ḥisāb) = konto."
            },
            {
                "id": "pa_ti8",
                "question": "_____ فيروس في حاسوبي (Jest wirus w moim komputerze)",
                "translation": "(Jest wirus w moim komputerze)",
                "options": ["يُوجَدُ", "يَأْكُلُ", "يَنَامُ", "يَكْتُبُ"],
                "correct": "يُوجَدُ",
                "explanation": "Poprawnie: 'يُوجَدُ' (yūjadu) = jest/istnieje (bierna od وَجَدَ = znalazł). فَيْرُوس (fayrūs) = wirus (zapożyczenie). حَاسُوبِي = mój komputer (حَاسُوب + ي = mój). Bezpieczeństwo IT: بَرْنَامَج حِمَايَة (barnāmaj ḥimāya) = program ochronny/antywirus, قَرْصَنَة (qarṣana) = hacking (od قُرْصَان = pirat!), جِدَار نَارِيّ (jidār nārī) = firewall (dosł.: mur ogniowy)."
            },
            {
                "id": "pa_ti9",
                "question": "أريد _____ هذا الملفَّ (Chcę pobrać ten plik)",
                "translation": "(Chcę pobrać ten plik)",
                "options": ["تَنْزِيلَ", "تَحْمِيلَ", "تَدْمِيرَ", "تَمْزِيقَ"],
                "correct": "تَنْزِيلَ",
                "explanation": "Poprawnie: 'تَنْزِيل' (tanzīl) = pobieranie/download. Masdar formy II od ن-ز-ل (zstępowanie/schodzenie). Uwaga: تَحْمِيل (taḥmīl) może oznaczać ZARÓWNO upload JAK i download w zależności od kontekstu! Precyzyjniej: تَنْزِيل = download (zstępowanie), رَفْع (rafʿ) = upload (podnoszenie). تَنْزِيل to też termin koraniczny: تَنْزِيل القُرْآن = objawienie/zstąpienie Koranu."
            },
            {
                "id": "pa_ti10",
                "question": "_____ الشاشة مكسورة (Ekran jest pęknięty)",
                "translation": "(Ekran jest pęknięty)",
                "options": ["شَاشَةُ", "شَاشَاتُ", "شَوَاشُ", "شِيشَةُ"],
                "correct": "شَاشَةُ",
                "explanation": "Poprawnie: 'شَاشَةُ' (shāshatun). Ale pełne zdanie: الشَّاشَةُ مَكْسُورَةٌ. شَاشَة = ekran/monitor. مَكْسُورَة = pęknięta/złamana (imiesłów bierny od ك-س-ر, r. żeński). Sprzęt komputerowy: فَأْرَة (faʾra) = myszka (dosł.: mysz!), لَوْحَة المَفَاتِيح = klawiatura, سَمَّاعَات (sammāʿāt) = słuchawki, طَابِعَة (ṭābiʿa) = drukarka."
            },
            {
                "id": "pa_ti11",
                "question": "يجب _____ كلمة السر بانتظام (Trzeba zmieniać hasło regularnie)",
                "translation": "(Trzeba zmieniać hasło regularnie)",
                "options": ["تَغْيِيرُ", "تَكْرِيرُ", "تَدْمِيرُ", "تَعْقِيدُ"],
                "correct": "تَغْيِيرُ",
                "explanation": "Poprawnie: 'تَغْيِير' (taghyīr) = zmiana. Masdar formy II od غ-ي-ر (inność/zmiana). كَلِمَة السِّرّ = hasło. بِانْتِظَامٍ (bi-intiẓāmin) = regularnie (masdar VIII od ن-ظ-م = porządek). Bezpieczeństwo: كَلِمَة سِرّ قَوِيَّة (silne hasło), تَحَقُّق بِخُطْوَتَيْنِ (weryfikacja dwuetapowa), تَشْفِير (tashfīr) = szyfrowanie (II od ش-ف-ر = kodowanie)."
            },
            {
                "id": "pa_ti12",
                "question": "_____ الذكاء الاصطناعي (Sztuczna inteligencja się rozwija)",
                "translation": "(Sztuczna inteligencja się rozwija)",
                "options": ["يَتَطَوَّرُ", "يَنَامُ", "يَأْكُلُ", "يَتَكَلَّمُ"],
                "correct": "يَتَطَوَّرُ",
                "explanation": "Poprawnie: 'يَتَطَوَّرُ' (yataṭawwaru) = rozwija się. Forma V od ط-و-ر (faza/etap). الذَّكَاء الاِصْطِنَاعِيّ (adh-dhakāʾ al-iṣṭināʿī) = sztuczna inteligencja (AI). ذَكَاء = inteligencja (od ذ-ك-و/ي). اِصْطِنَاعِيّ = sztuczny (od ص-ن-ع = wytwarzanie, forma VIII). Terminy nowoczesne: تَعَلُّم آلِيّ (taʿallum ālī) = machine learning, بَيَانَات (bayānāt) = dane."
            },
            {
                "id": "pa_ti13",
                "question": "لا أستطيع _____ الرسالةَ (Nie mogę otworzyć wiadomości)",
                "translation": "(Nie mogę otworzyć wiadomości)",
                "options": ["فَتْحَ", "أَكْلَ", "شُرْبَ", "كَسْرَ"],
                "correct": "فَتْحَ",
                "explanation": "Poprawnie: 'فَتْح' (fatḥ) = otwarcie. Od فَتَحَ (fataḥa) = otworzył. رِسَالَة (risāla) = wiadomość/list (od ر-س-ل = wysyłanie). Po لَا أَسْتَطِيعُ + masdar w bierniku: لَا أَسْتَطِيعُ فَتْحَ = nie mogę otworzyć. Terminy e-mailowe: صُنْدُوق الوَارِد (ṣundūq al-wārid) = skrzynka odbiorcza, مُرْفَق (murfaq) = załącznik, إِعَادَة تَوْجِيه (iʿādat tawjīh) = przekierowanie."
            },
            {
                "id": "pa_ti14",
                "question": "_____ الإنترنت بطيء اليوم (Internet jest dzisiaj wolny)",
                "translation": "(Internet jest dzisiaj wolny)",
                "options": ["الإِنْتَرْنِتُ", "الإِنْتَرْنِتَ", "إِنْتَرْنِتٍ", "إِنْتَرْنِتٌ"],
                "correct": "الإِنْتَرْنِتُ",
                "explanation": "Poprawnie: 'الإِنْتَرْنِتُ' z ḍammą — bo to مبتدأ (podmiot zdania nominalnego → مرفوع). بَطِيء (baṭīʾ) = wolny/powolny (wzorzec فَعِيل). Powiązane: سُرْعَة (surʿa) = prędkość, سَرِيع (sarīʿ) = szybki, نِطَاق تَرَدُّدِيّ (niṭāq taraddudī) = przepustowość, أَلْيَاف ضَوْئِيَّة (alyāf ḍawʾiyya) = światłowód (dosł.: włókna świetlne)."
            },
            {
                "id": "pa_ti15",
                "question": "Jak powiemy 'baza danych' po arabsku?",
                "translation": "(ما ترجمة database؟)",
                "options": ["قَاعِدَة بَيَانَات", "بَيْت بَيَانَات", "مَكْتَبَة بَيَانَات", "حَقِيبَة بَيَانَات"],
                "correct": "قَاعِدَة بَيَانَات",
                "explanation": "Poprawnie: 'قَاعِدَة بَيَانَاتٍ' (qāʿidat bayānāt) = baza danych. قَاعِدَة (qāʿida) = baza/podstawa/reguła (imiesłów czynny ż. od ق-ع-د = siedzenie → fundament). بَيَانَات (bayānāt) = dane (l.mn. od بَيَان = wyjaśnienie/oświadczenie, od ب-ي-ن = jasność). Inne terminy: خَادِم (khādim) = serwer (dosł.: służący!), سَحَابَة (saḥāba) = chmura (cloud computing), بَرْمَجَة (barmaja) = programowanie."
            }
        ]
    },
    {
        "key": "environment_nature_ar",
        "name": "Środowisko i natura (البيئة والطبيعة)",
        "description": "مفردات البيئة والطبيعة والمناخ",
        "iconName": "leaf.fill",
        "color": "#4ade80",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_en1",
                "question": "يجب أن _____ البيئةَ (Musimy chronić środowisko)",
                "translation": "(Musimy chronić środowisko)",
                "options": ["نَحْمِيَ", "نُدَمِّرَ", "نُلَوِّثَ", "نُهْمِلَ"],
                "correct": "نَحْمِيَ",
                "explanation": "Poprawnie: 'نَحْمِيَ' (naḥmiya) = chronimy (tryb łączący). Od حَمَى (ḥamā) = chronił (ناقص, rdzeń ح-م-ي). بِيئَة (bīʾa) = środowisko (od ب-و-أ = miejsce zamieszkania). Konstrukcja: يَجِبُ أَنْ نَحْمِيَ البِيئَةَ. Powiązane: حِمَايَة (ḥimāya) = ochrona, مَحْمِيَّة طَبِيعِيَّة (maḥmiyya ṭabīʿiyya) = rezerwat przyrody (imiesłów bierny ż.)."
            },
            {
                "id": "pa_en2",
                "question": "_____ الهواء مشكلة كبيرة (Zanieczyszczenie powietrza to duży problem)",
                "translation": "(Zanieczyszczenie powietrza to duży problem)",
                "options": ["تَلَوُّثُ", "نَظَافَةُ", "جَمَالُ", "هُدُوءُ"],
                "correct": "تَلَوُّثُ",
                "explanation": "Poprawnie: 'تَلَوُّث' (talawwuth) = zanieczyszczenie. Masdar formy V od ل-و-ث (brudzenie). هَوَاء (hawāʾ) = powietrze. Iḍāfa: تَلَوُّثُ الهَوَاءِ. Inne rodzaje: تَلَوُّث المَاءِ (zanieczyszczenie wody), تَلَوُّث التُّرْبَةِ (zanieczyszczenie gleby). Przeciwieństwo: نَظَافَة (naẓāfa) = czystość. مُلَوِّثَات (mulawwithāt) = zanieczyszczenia/substancje zanieczyszczające."
            },
            {
                "id": "pa_en3",
                "question": "الأشجار _____ الأكسجينَ (Drzewa produkują tlen)",
                "translation": "(Drzewa produkują tlen)",
                "options": ["تُنْتِجُ", "تَأْكُلُ", "تَشْرَبُ", "تَنَامُ"],
                "correct": "تُنْتِجُ",
                "explanation": "Poprawnie: 'تُنْتِجُ' (tuntigu) = produkują. Forma IV od ن-ت-ج (produkcja/wynik). أَشْجَار (ashjār) = drzewa (l.mn. łamana od شَجَرَة). أُكْسِجِين = tlen (zapożyczenie). Prefiks تُـ (3. os. ż.), bo أَشْجَار jako l.mn. łamana rzeczy — traktowana jak r. żeński l. poj. Botanika: وَرَقَة (waraqa) = liść, جَذْر (jadhr) = korzeń, زَهْرَة (zahra) = kwiat."
            },
            {
                "id": "pa_en4",
                "question": "_____ المناخ يؤثر على الحياة (Zmiana klimatu wpływa na życie)",
                "translation": "(Zmiana klimatu wpływa na życie)",
                "options": ["تَغَيُّرُ", "جَمَالُ", "ثَبَاتُ", "هُدُوءُ"],
                "correct": "تَغَيُّرُ",
                "explanation": "Poprawnie: 'تَغَيُّر' (taghayyur) = zmiana (masdar V od غ-ي-ر). مُنَاخ (munākh) = klimat. يُؤَثِّرُ عَلَى (yuʾaththiru ʿalā) = wpływa na (forma II od أ-ث-ر = ślad/wpływ). حَيَاة (ḥayā) = życie. Terminy klimatyczne: اِحْتِبَاس حَرَارِيّ (iḥtibās ḥarārī) = efekt cieplarniany (dosł.: zatrzymanie ciepła), اِحْتِرَار عَالَمِيّ (iḥtirār ʿālamī) = globalne ocieplenie."
            },
            {
                "id": "pa_en5",
                "question": "يجب _____ إعادة التدوير (Musimy sortować śmieci/recyklingować)",
                "translation": "(Musimy recyklingować)",
                "options": ["عَلَيْنَا", "لَنَا", "مِنَّا", "بِنَا"],
                "correct": "عَلَيْنَا",
                "explanation": "Poprawnie: 'يَجِبُ عَلَيْنَا' = musimy (dosł.: ciąży na nas obowiązek). إِعَادَة التَّدْوِير (iʿādat at-tadwīr) = recycling (dosł.: ponowne obracanie/krążenie). إِعَادَة = powtórzenie/ponowne (masdar IV od ع-و-د). تَدْوِير = obracanie (masdar II od د-و-ر = krążenie). Ekologia: فَرْز النُّفَايَات (farz an-nufāyāt) = sortowanie śmieci, طَاقَة مُتَجَدِّدَة (ṭāqa mutajaddida) = energia odnawialna."
            },
            {
                "id": "pa_en6",
                "question": "_____ الشمسية بديل جيد (Energia słoneczna to dobra alternatywa)",
                "translation": "(Energia słoneczna to dobra alternatywa)",
                "options": ["الطَّاقَةُ", "السَّيَّارَةُ", "المَدْرَسَةُ", "الوَظِيفَةُ"],
                "correct": "الطَّاقَةُ",
                "explanation": "Poprawnie: 'الطَّاقَة الشَّمْسِيَّة' (aṭ-ṭāqa ash-shamsiyya) = energia słoneczna. طَاقَة = energia/zdolność. شَمْسِيَّة = słoneczna (nisba od شَمْس = słońce). بَدِيل (badīl) = alternatywa (wzorzec فَعِيل od ب-د-ل = zamiana). Inne źródła: طَاقَة رِيحِيَّة (wiatrowa), طَاقَة نَوَوِيَّة (jądrowa), طَاقَة كَهْرُمَائِيَّة (wodna/hydroelektryczna)."
            },
            {
                "id": "pa_en7",
                "question": "هذا النهر _____ (Ta rzeka jest zanieczyszczona)",
                "translation": "(Ta rzeka jest zanieczyszczona)",
                "options": ["مُلَوَّث", "نَظِيف", "جَمِيل", "عَمِيق"],
                "correct": "مُلَوَّث",
                "explanation": "Poprawnie: 'مُلَوَّث' (mulawwath) = zanieczyszczony (imiesłów bierny II od ل-و-ث). نَهْر (nahr) = rzeka (r. męski). L.mn.: أَنْهَار (anhār). Uwaga: هَذَا النَّهْرُ مُلَوَّثٌ — rodzaj męski. Gdyby بُحَيْرَة (buḥayra) = jezioro (ż.): هَذِهِ البُحَيْرَةُ مُلَوَّثَةٌ. Zbiorniki wodne: بَحْر (baḥr) = morze, مُحِيط (muḥīṭ) = ocean, شَلَّال (shallāl) = wodospad."
            },
            {
                "id": "pa_en8",
                "question": "_____ الحيوانات المهددة بالانقراض (Ochrona zagrożonych gatunków)",
                "translation": "(Ochrona zagrożonych gatunków)",
                "options": ["حِمَايَةُ", "صِنَاعَةُ", "بِنَاءُ", "تَدْمِيرُ"],
                "correct": "حِمَايَةُ",
                "explanation": "Poprawnie: 'حِمَايَة' (ḥimāya) = ochrona (masdar od ح-م-ي). حَيَوَانَات مُهَدَّدَة بِالاِنْقِرَاضِ = zwierzęta zagrożone wyginięciem. مُهَدَّد (muhaddad) = zagrożony (imiesłów bierny II od ه-د-د). اِنْقِرَاض (inqirāḍ) = wyginięcie (masdar VII od ق-ر-ض = pożyczanie? — nie, tu od rdzenia wymierania). Zwierzęta: أَسَد (asad) = lew, فِيل (fīl) = słoń, حُوت (ḥūt) = wieloryb."
            },
            {
                "id": "pa_en9",
                "question": "_____ الأمطار هذا العام (Spadło mało deszczu w tym roku)",
                "translation": "(Spadło mało deszczu w tym roku)",
                "options": ["قَلَّتِ", "كَثُرَتِ", "زَادَتِ", "نَامَتِ"],
                "correct": "قَلَّتِ",
                "explanation": "Poprawnie: 'قَلَّتِ' (qallat) = zmniejszyło się (3. os. ż., مضعّف od ق-ل-ل). أَمْطَار (amṭār) = deszcze (l.mn. od مَطَر = deszcz). هَذَا العَامَ = w tym roku (ظرف زمان w bierniku). Zjawiska pogodowe: جَفَاف (jafāf) = susza, فَيَضَان (fayaḍān) = powódź, عَاصِفَة (ʿāṣifa) = burza, ثَلْج (thalj) = śnieg, بَرَد (barad) = grad."
            },
            {
                "id": "pa_en10",
                "question": "الغابات _____ بسرعة (Lasy znikają szybko)",
                "translation": "(Lasy znikają szybko)",
                "options": ["تَخْتَفِي", "تَنَامُ", "تَأْكُلُ", "تَكْبُرُ"],
                "correct": "تَخْتَفِي",
                "explanation": "Poprawnie: 'تَخْتَفِي' (takhtafī) = znikają. Forma VIII od خ-ف-ي (ukrywanie). غَابَات (ghābāt) = lasy (l.mn. od غَابَة). بِسُرْعَةٍ = szybko. إِزَالَة الغَابَاتِ (izālat al-ghābāt) = wylesianie (dosł.: usuwanie lasów). إِزَالَة = usuwanie (masdar IV od ز-و-ل = znikanie). Ekosystemy: صَحْرَاء (ṣaḥrāʾ) = pustynia, سَهْل (sahl) = równina, جَبَل (jabal) = góra."
            },
            {
                "id": "pa_en11",
                "question": "_____ الكربون يزداد (Emisja dwutlenku węgla rośnie)",
                "translation": "(Emisja dwutlenku węgla rośnie)",
                "options": ["اِنْبِعَاثُ", "اِسْتِقْبَالُ", "اِسْتِيرَادُ", "اِسْتِهْلَاكُ"],
                "correct": "اِنْبِعَاثُ",
                "explanation": "Poprawnie: 'اِنْبِعَاث' (inbiʿāth) = emisja (masdar VII od ب-ع-ث = wysyłanie/budzenie). الكَرْبُون = węgiel (zapożyczenie). ثَانِي أُكْسِيد الكَرْبُون = dwutlenek węgla (CO₂). يَزْدَادُ (yazdādu) = rośnie/zwiększa się (forma VIII od ز-ي-د = wzrost). البَصْمَة الكَرْبُونِيَّة (al-baṣma al-karbūniyya) = ślad węglowy."
            },
            {
                "id": "pa_en12",
                "question": "يجب _____ استهلاك الماء (Musimy zmniejszyć zużycie wody)",
                "translation": "(Musimy zmniejszyć zużycie wody)",
                "options": ["تَقْلِيلُ", "زِيَادَةُ", "تَكْرِيرُ", "تَسْخِينُ"],
                "correct": "تَقْلِيلُ",
                "explanation": "Poprawnie: 'تَقْلِيل' (taqlīl) = zmniejszenie (masdar II od ق-ل-ل = mało, مضعّف). اِسْتِهْلَاك (istihlāk) = zużycie/konsumpcja (masdar X od ه-ل-ك = zniszczenie/użycie). المَاء (al-māʾ) = woda. Oszczędzanie: تَوْفِير (tawfīr) = oszczędność, تَرْشِيد (tarshīd) = racjonalizacja, إِسْرَاف (isrāf) = marnotrawstwo (masdar IV od س-ر-ف)."
            },
            {
                "id": "pa_en13",
                "question": "هذه المنطقة _____ (Ten obszar jest suchy)",
                "translation": "(Ten obszar jest suchy)",
                "options": ["جَافَّة", "رَطْبَة", "خَضْرَاء", "بَارِدَة"],
                "correct": "جَافَّة",
                "explanation": "Poprawnie: 'جَافَّة' (jāffa) = sucha. Imiesłów czynny ż. od جَفَّ (jaffa) = wysechł (مضعّف, ج-ف-ف). مِنْطَقَة (minṭaqa) = obszar/region (اسم مكان od ن-ط-ق = pas/strefa). Klimaty: حَارّ (ḥārr) = gorący, بَارِد (bārid) = zimny, رَطْب (raṭb) = wilgotny, مُعْتَدِل (muʿtadil) = umiarkowany. جَفَاف (jafāf) = susza (masdar od جَفَّ)."
            },
            {
                "id": "pa_en14",
                "question": "_____ النفايات ضرورة (Sortowanie śmieci to konieczność)",
                "translation": "(Sortowanie śmieci to konieczność)",
                "options": ["فَرْزُ", "جَمْعُ", "حَرْقُ", "رَمْيُ"],
                "correct": "فَرْزُ",
                "explanation": "Poprawnie: 'فَرْز' (farz) = sortowanie/segregacja. Od فَرَزَ (faraza) = posortował/rozdzielił. نُفَايَات (nufāyāt) = śmieci/odpady. ضَرُورَة (ḍarūra) = konieczność (od ض-ر-ر = konieczność/szkoda). Gospodarka odpadami: حَاوِيَة (ḥāwiya) = kontener, إِعَادَة اسْتِخْدَام (iʿādat istikhḍām) = ponowne użycie, تُرْبَة (turba) = kompost/gleba."
            },
            {
                "id": "pa_en15",
                "question": "الزلزال _____ المنطقةَ (Trzęsienie ziemi zniszczyło obszar)",
                "translation": "(Trzęsienie ziemi zniszczyło obszar)",
                "options": ["دَمَّرَ", "بَنَى", "أَصْلَحَ", "زَيَّنَ"],
                "correct": "دَمَّرَ",
                "explanation": "Poprawnie: 'دَمَّرَ' (dammara) = zniszczył (forma II od د-م-ر = zniszczenie). زِلْزَال (zilzāl) = trzęsienie ziemi (od ز-ل-ز-ل, czterospółgłoskowy rdzeń onomatopeiczny). Klęski żywiołowe: بُرْكَان (burkān) = wulkan, تْسُونَامِي (tsunami), إِعْصَار (iʿṣār) = huragan (masdar IV od ع-ص-ر = wyciskanie/kręcenie), اِنْهِيَار أَرْضِيّ (inhiyār arḍī) = osuwisko."
            }
        ]
    },
    {
        "key": "education_learning_ar",
        "name": "Edukacja i nauka (التعليم والتعلّم)",
        "description": "مفردات التعليم والدراسة والمدرسة",
        "iconName": "graduationcap.fill",
        "color": "#c084fc",
        "level": "beginner",
        "items": [
            {
                "id": "pa_el1",
                "question": "أنا _____ في الجامعة (Studiuję na uczelni)",
                "translation": "(Studiuję na uczelni)",
                "options": ["أَدْرُسُ", "أَلْعَبُ", "أَنَامُ", "أَسْبَحُ"],
                "correct": "أَدْرُسُ",
                "explanation": "Poprawnie: 'أَدْرُسُ' (adrusu) = studiuję/uczę się. Rdzeń: د-ر-س (studiowanie). جَامِعَة (jāmiʿa) = uczelnia/uniwersytet (imiesłów czynny ż. od ج-م-ع = zbieranie → 'to co zbiera' wiedzę/ludzi). Uwaga: w arabskim ten sam czasownik oznacza 'uczyć się' i 'studiować'. مُدَرِّس (mudarris) = nauczyciel (imiesłów czynny II), دَرْس (dars) = lekcja, دِرَاسَة (dirāsa) = nauka/studia."
            },
            {
                "id": "pa_el2",
                "question": "ما هو _____ الذي تدرسه؟ (Jaki przedmiot studiujesz?)",
                "translation": "(Jaki przedmiot studiujesz?)",
                "options": ["التَّخَصُّصُ", "الطَّعَامُ", "الجَوُّ", "المَلْعَبُ"],
                "correct": "التَّخَصُّصُ",
                "explanation": "Poprawnie: 'التَّخَصُّص' (at-takhaṣṣuṣ) = specjalizacja/kierunek studiów. Masdar formy V od خ-ص-ص (specjalność). Kierunki: طِبّ (ṭibb) = medycyna, هَنْدَسَة (handasa) = inżynieria, حُقُوق (ḥuqūq) = prawo (l.mn. od حَقّ = prawo), أَدَب (adab) = literatura, اِقْتِصَاد (iqtiṣād) = ekonomia (masdar VIII od ق-ص-د = zamiar/oszczędność)."
            },
            {
                "id": "pa_el3",
                "question": "_____ الامتحانَ بنجاح (Zdałem egzamin)",
                "translation": "(Zdałem egzamin)",
                "options": ["اِجْتَزْتُ", "رَسَبْتُ", "هَرَبْتُ", "نِمْتُ"],
                "correct": "اِجْتَزْتُ",
                "explanation": "Poprawnie: 'اِجْتَزْتُ' (ijtaztu) = zdałem/przeszedłem (forma VIII od ج-و-ز = przechodzenie). اِمْتِحَان (imtiḥān) = egzamin (masdar VIII od م-ح-ن = próba). بِنَجَاحٍ = pomyślnie. Przeciwieństwo: رَسَبَ (rasaba) = oblał (dosł.: opadł na dno). نَتِيجَة (natīja) = wynik, عَلَامَة (ʿalāma) = ocena, تَقْدِير (taqdīr) = ocena (formalna: ممتاز=celujący, جيد جداً=bardzo dobry)."
            },
            {
                "id": "pa_el4",
                "question": "المعلم _____ الدرسَ (Nauczyciel wyjaśnił lekcję)",
                "translation": "(Nauczyciel wyjaśnił lekcję)",
                "options": ["شَرَحَ", "مَسَحَ", "فَتَحَ", "مَنَحَ"],
                "correct": "شَرَحَ",
                "explanation": "Poprawnie: 'شَرَحَ' (sharaḥa) = wyjaśnił. Rdzeń: ش-ر-ح (wyjaśnianie/rozcinanie, bo 'rozkłada' temat). مُعَلِّم (muʿallim) = nauczyciel (imiesłów czynny II od ع-ل-م = wiedza). دَرْس (dars) = lekcja. Uwaga na pary minimalne: شَرَحَ (wyjaśnił), مَسَحَ (wytarł), فَتَحَ (otworzył), مَنَحَ (przyznał/dał) — ten sam wzorzec فَعَلَ, ale różne rdzenie!"
            },
            {
                "id": "pa_el5",
                "question": "هل _____ واجبك المنزلي؟ (Czy odrobiłeś pracę domową?)",
                "translation": "(Czy odrobiłeś pracę domową?)",
                "options": ["أَنْجَزْتَ", "أَكَلْتَ", "سَافَرْتَ", "لَعِبْتَ"],
                "correct": "أَنْجَزْتَ",
                "explanation": "Poprawnie: 'أَنْجَزْتَ' (anjazta) = ukończyłeś/odrobiłeś (forma IV od ن-ج-ز). وَاجِب مَنْزِلِيّ (wājib manzilī) = praca domowa (dosł.: obowiązek domowy). وَاجِب = obowiązek/zadanie (imiesłów czynny od و-ج-ب = być obowiązkowym). مَنْزِلِيّ = domowy (nisba od مَنْزِل = dom). Synonimy: فَرْض (farḍ) = zadanie (też: obowiązek religijny), تَمْرِين (tamrīn) = ćwiczenie."
            },
            {
                "id": "pa_el6",
                "question": "_____ في المكتبة (Uczę się w bibliotece)",
                "translation": "(Uczę się w bibliotece)",
                "options": ["أُذَاكِرُ", "أَلْعَبُ", "أَطْبُخُ", "أَنَامُ"],
                "correct": "أُذَاكِرُ",
                "explanation": "Poprawnie: 'أُذَاكِرُ' (udhākiru) = powtarzam/uczę się (forma III od ذ-ك-ر = pamięć/wspominanie). مَكْتَبَة (maktaba) = biblioteka (اسم مكان od ك-ت-ب = pisanie). Uwaga: أَدْرُسُ = studiuję (ogólnie), أُذَاكِرُ = uczę się (powtarzam przed egzaminem). مُذَاكَرَة (mudhākara) = nauka/powtórka. Inne miejsca nauki: قَاعَة المُحَاضَرَاتِ (sala wykładowa), مُخْتَبَر (mukhtabar) = laboratorium."
            },
            {
                "id": "pa_el7",
                "question": "حَصَلْتُ على _____ دراسية (Dostałem stypendium)",
                "translation": "(Dostałem stypendium)",
                "options": ["مِنْحَةٍ", "وَجْبَةٍ", "رِحْلَةٍ", "سَيَّارَةٍ"],
                "correct": "مِنْحَةٍ",
                "explanation": "Poprawnie: 'مِنْحَة دِرَاسِيَّة' (minḥa dirāsiyya) = stypendium (dosł.: grant naukowy). مِنْحَة od مَنَحَ (manaḥa) = przyznał/dał. حَصَلْتُ عَلَى = uzyskałem (forma I od ح-ص-ل + عَلَى). Stopnie naukowe: بَكَالُورِيُوس (bakalūriyūs) = licencjat, مَاجِسْتِير (mājistīr) = magister, دُكْتُورَاه (duktūrāh) = doktorat, أُسْتَاذ (ustādh) = profesor."
            },
            {
                "id": "pa_el8",
                "question": "المحاضرة تبدأ في الساعة _____ (Wykład zaczyna się o 9:00)",
                "translation": "(Wykład zaczyna się o 9:00)",
                "options": ["التَّاسِعَةِ", "التَّاسِعَ", "تِسْعَةٍ", "تِسْعٍ"],
                "correct": "التَّاسِعَةِ",
                "explanation": "Poprawnie: 'التَّاسِعَة' (at-tāsiʿa) = dziewiąta (liczebnik porządkowy ż.). مُحَاضَرَة (muḥāḍara) = wykład (masdar III od ح-ض-ر = obecność). تَبْدَأُ (tabdaʾu) = zaczyna się. Z zegarem: فِي السَّاعَةِ + l. porządkowy: فِي السَّاعَةِ التَّاسِعَةِ = o dziewiątej. Dlaczego التَّاسِعَةِ (kasra)? Bo po حرف جرّ (في) → dopełniacz."
            },
            {
                "id": "pa_el9",
                "question": "_____ بحثاً عن موضوع مهم (Napisałem pracę badawczą)",
                "translation": "(Napisałem pracę badawczą o ważnym temacie)",
                "options": ["كَتَبْتُ", "أَكَلْتُ", "لَعِبْتُ", "سَافَرْتُ"],
                "correct": "كَتَبْتُ",
                "explanation": "Poprawnie: 'كَتَبْتُ بَحْثاً' = napisałem pracę badawczą. بَحْث (baḥth) = badanie/praca naukowa (masdar od ب-ح-ث = szukanie). عَنْ مَوْضُوعٍ مُهِمٍّ = o ważnym temacie. Prace naukowe: مَقَال (maqāl) = artykuł, بَحْث (baḥth) = praca/badanie, رِسَالَة (risāla) = dysertacja, أُطْرُوحَة (uṭrūḥa) = teza. Czasownik: بَحَثَ عَنْ = szukał/badał."
            },
            {
                "id": "pa_el10",
                "question": "الطالب _____ من الجامعة (Student ukończył uczelnię)",
                "translation": "(Student ukończył uczelnię)",
                "options": ["تَخَرَّجَ", "هَرَبَ", "سَقَطَ", "نَامَ"],
                "correct": "تَخَرَّجَ",
                "explanation": "Poprawnie: 'تَخَرَّجَ' (takharraja) = ukończył studia/graduował (forma V od خ-ر-ج = wyjście). Konstrukcja: تَخَرَّجَ مِنَ الجَامِعَةِ = ukończył uczelnię. طَالِب (ṭālib) = student (imiesłów czynny od ط-ل-ب = szukanie/proszenie). L.mn.: طُلَّاب (ṭullāb). Powiązane: خَرِيج (kharrīj) = absolwent (wzorzec فَعِيل), حَفْل التَّخَرُّج (ḥafl at-takharruj) = uroczystość ukończenia studiów."
            },
            {
                "id": "pa_el11",
                "question": "هل _____ هذا الكتابَ؟ (Czy przeczytałeś tę książkę?)",
                "translation": "(Czy przeczytałeś tę książkę?)",
                "options": ["قَرَأْتَ", "أَكَلْتَ", "شَرِبْتَ", "كَسَرْتَ"],
                "correct": "قَرَأْتَ",
                "explanation": "Poprawnie: 'قَرَأْتَ' (qaraʾta) = przeczytałeś (od ق-ر-أ, مهموز). كِتَاب (kitāb) = książka (od ك-ت-ب). Przybory szkolne: قَلَم (qalam) = długopis/ołówek, دَفْتَر (daftar) = zeszyt, مِمْحَاة (mimḥāh) = gumka, مِسْطَرَة (misṭara) = linijka, حَقِيبَة مَدْرَسِيَّة (ḥaqība madrasiyya) = plecak szkolny. Rdzeń ق-ر-أ: قُرْآن, قِرَاءَة, قَارِئ."
            },
            {
                "id": "pa_el12",
                "question": "أريد _____ لغة جديدة (Chcę nauczyć się nowego języka)",
                "translation": "(Chcę nauczyć się nowego języka)",
                "options": ["تَعَلُّمَ", "تَعْلِيمَ", "تَكَلُّمَ", "تَقَدُّمَ"],
                "correct": "تَعَلُّمَ",
                "explanation": "Poprawnie: 'تَعَلُّم' (taʿallum) = nauka/uczenie się (masdar V od ع-ل-م). WAŻNE: تَعَلُّم (V) = uczenie SIĘ (intransitive), تَعْلِيم (II) = nauczanie (kogoś). To kluczowe rozróżnienie! أُرِيدُ تَعَلُّمَ لُغَةٍ جَدِيدَةٍ. لُغَة (lugha) = język. L.mn.: لُغَات. Powiązane: مُتَعَلِّم (mutaʿallim) = uczeń/student, مُعَلِّم (muʿallim) = nauczyciel."
            },
            {
                "id": "pa_el13",
                "question": "المدرسة تبدأ في _____ (Szkoła zaczyna się we wrześniu)",
                "translation": "(Szkoła zaczyna się we wrześniu)",
                "options": ["سَبْتَمْبَر", "يَنَايِر", "يُولِيُو", "مَارِس"],
                "correct": "سَبْتَمْبَر",
                "explanation": "Poprawnie: 'سَبْتَمْبَر' (sabtambar) = wrzesień. Arabski ma DWA systemy nazw miesięcy: 1) Zachodnie (zapożyczenia): يَنَايِر, فِبْرَايِر... → używane w Maghrebie/Egipcie; 2) Syryjskie/Lewantyńskie: كَانُون الثَّانِي, شُبَاط, آذَار... → używane w Lewancie/Iraku. مَدْرَسَة (madrasa) = szkoła (اسم مكان od د-ر-س). العَام الدِّرَاسِيّ (al-ʿām ad-dirāsī) = rok szkolny."
            },
            {
                "id": "pa_el14",
                "question": "هل تحتاج إلى _____ خصوصية؟ (Czy potrzebujesz korepetycji?)",
                "translation": "(Czy potrzebujesz korepetycji?)",
                "options": ["دُرُوسٍ", "أَطْعِمَةٍ", "سَيَّارَاتٍ", "مَلَابِسَ"],
                "correct": "دُرُوسٍ",
                "explanation": "Poprawnie: 'دُرُوس خُصُوصِيَّة' (durūs khuṣūṣiyya) = lekcje prywatne/korepetycje. دُرُوس = l.mn. od دَرْس (lekcja). خُصُوصِيَّة = prywatna (nisba od خُصُوص = prywatność). Formy nauki: تَعْلِيم عَنْ بُعْدٍ (nauka zdalna), دَوْرَة تَدْرِيبِيَّة (kurs szkoleniowy), وَرْشَة عَمَلٍ (warsztat), نَدْوَة (nadwa) = seminarium."
            },
            {
                "id": "pa_el15",
                "question": "_____ الطلاب في الفصل (Studenci siedzą w klasie)",
                "translation": "(Studenci siedzą w klasie)",
                "options": ["يَجْلِسُ", "يَنَامُ", "يَرْكُضُ", "يَسْبَحُ"],
                "correct": "يَجْلِسُ",
                "explanation": "Poprawnie: 'يَجْلِسُ الطُّلَّابُ' = studenci siedzą. Ale: dlaczego يَجْلِسُ (l. poj.), nie يَجْلِسُونَ (l. mn.)? Bo ORZECZENIE PRZED PODMIOTEM jest w l. poj.! Reguła: فعل + فاعل (جمع) → فعل w l. poj. + odpowiedni rodzaj: يَجْلِسُ الطُّلَّابُ (m.), تَجْلِسُ الطَّالِبَاتُ (ż.). Ale: الطُّلَّابُ يَجْلِسُونَ (podmiot przed orzeczeniem → l. mn.)."
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
    n = len(c['items'])
    print(f'  + {c["key"]} ({n} items)')
