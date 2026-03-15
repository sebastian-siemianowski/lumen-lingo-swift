import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "verb_forms_I",
        "name": "Forma I czasownika (فَعَلَ)",
        "description": "الفعل الثلاثي المجرد - الوزن الأول",
        "iconName": "textformat.123",
        "color": "#60a5fa",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_vf1_1",
                "question": "هو _____ الكتابَ أمس (On przeczytał książkę wczoraj)",
                "translation": "(On przeczytał książkę wczoraj)",
                "options": ["قَرَأَ", "أَقْرَأَ", "قَارَأَ", "تَقَرَّأَ"],
                "correct": "قَرَأَ",
                "explanation": "Poprawnie: 'قَرَأَ' (qaraʾa) = przeczytał. To forma I (الوزن الأول) — najprostsza forma czasownika arabskiego, zbudowana na trzech spółgłoskach rdzenia (ق-ر-أ) we wzorcu فَعَلَ (faʿala). Forma I wyraża podstawowe znaczenie rdzenia. Inne formy (II–X) modyfikują to znaczenie. W polskim odpowiednikiem jest czasownik niedokonany vs. dokonany: 'czytać' → 'przeczytać'."
            },
            {
                "id": "pa_vf1_2",
                "question": "الولد _____ من البيت (Chłopiec wyszedł z domu)",
                "translation": "(Chłopiec wyszedł z domu)",
                "options": ["خَرَجَ", "أَخْرَجَ", "خَارَجَ", "تَخَرَّجَ"],
                "correct": "خَرَجَ",
                "explanation": "Poprawnie: 'خَرَجَ' (kharaja) = wyszedł. Forma I — wzorzec فَعَلَ. Rdzeń: خ-ر-ج (wychodzenie). Porównaj: أَخْرَجَ (forma IV) = wyciągnął, wyprowadził (kauzatyw). تَخَرَّجَ (forma V) = ukończył studia. Forma I wyraża czynność podstawową — sam podmiot wykonuje akcję. To jak polski 'wyjść' vs. 'wyprowadzić' (sprawić, że ktoś wyjdzie)."
            },
            {
                "id": "pa_vf1_3",
                "question": "هي _____ الطعامَ (Ona ugotowała jedzenie)",
                "translation": "(Ona ugotowała jedzenie)",
                "options": ["طَبَخَتْ", "أَطْبَخَتْ", "طَابَخَتْ", "تَطَبَّخَتْ"],
                "correct": "طَبَخَتْ",
                "explanation": "Poprawnie: 'طَبَخَتْ' (ṭabakhat) = (ona) ugotowała. Forma I z końcówką '-تْ' dla r. żeńskiego 3. os. l. poj. Rdzeń: ط-ب-خ (gotowanie). We wzorcu فَعَلَ samogłoski mogą się różnić: فَعَلَ (a-a), فَعِلَ (a-i), فَعُلَ (a-u). Tu: طَبَخَ jest typu فَعَلَ (a-a). Samogłoska środkowa zmienia się w czasie teraźniejszym: يَطْبُخ (yatbukhu) — typ يَفْعُل."
            },
            {
                "id": "pa_vf1_4",
                "question": "Jaki wzorzec samogłoskowy ma forma I czasu przeszłego?",
                "translation": "(ما هو وزن الفعل الماضي في الباب الأول؟)",
                "options": ["فَعَلَ / فَعِلَ / فَعُلَ", "أَفْعَلَ", "فَاعَلَ", "تَفَعَّلَ"],
                "correct": "فَعَلَ / فَعِلَ / فَعُلَ",
                "explanation": "Forma I czasu przeszłego ma trzy warianty samogłoskowe: فَعَلَ (faʿala) — np. كَتَبَ (pisał), فَعِلَ (faʿila) — np. شَرِبَ (pił), فَعُلَ (faʿula) — np. كَبُرَ (urósł/stał się duży). Wariant فَعُلَ zwykle dotyczy cech/stanów (piękność, wielkość). Trzeba zapamiętywać wariant dla każdego czasownika — nie ma stałej reguły."
            },
            {
                "id": "pa_vf1_5",
                "question": "هم _____ إلى المدرسة (Oni poszli do szkoły)",
                "translation": "(Oni poszli do szkoły)",
                "options": ["ذَهَبُوا", "أَذْهَبُوا", "ذَاهَبُوا", "تَذَهَّبُوا"],
                "correct": "ذَهَبُوا",
                "explanation": "Poprawnie: 'ذَهَبُوا' (dhahabū) = (oni) poszli. Forma I, 3. os. l. mn. r.m. Rdzeń: ذ-ه-ب (chodzenie/iście). Końcówka '-وا' oznacza 'oni'. Uwaga: w piśmie po 'وا' dodaje się 'ا' (alif) — to alif ortograficzna (ألف الفارقة), ale się jej nie wymawia. Służy do odróżnienia od innych form z '-و'."
            },
            {
                "id": "pa_vf1_6",
                "question": "الطفل _____ الحليبَ (Dziecko wypiło mleko)",
                "translation": "(Dziecko wypiło mleko)",
                "options": ["شَرِبَ", "شَرَبَ", "أَشْرَبَ", "شَارَبَ"],
                "correct": "شَرِبَ",
                "explanation": "Poprawnie: 'شَرِبَ' (shariba) = wypił. To forma I typu فَعِلَ (faʿila) — samogłoska środkowa to kasra (i). W czasie teraźniejszym: يَشْرَبُ (yashrabu) — tu samogłoska się zmienia na fathę (a). Jest reguła: فَعِلَ → يَفْعَلُ. Porównaj z فَعَلَ → يَفْعُلُ (typ كَتَبَ/يَكْتُبُ). Każdy typ ma swoją parę przeszły-teraźniejszy."
            },
            {
                "id": "pa_vf1_7",
                "question": "أنتِ _____ الدرسَ (Ty [ż.] zrozumiałaś lekcję)",
                "translation": "(Ty [ż.] zrozumiałaś lekcję)",
                "options": ["فَهِمْتِ", "فَهَمْتِ", "أَفْهَمْتِ", "فَاهَمْتِ"],
                "correct": "فَهِمْتِ",
                "explanation": "Poprawnie: 'فَهِمْتِ' (fahimti) = (ty, kobieto) zrozumiałaś. Rdzeń: ف-ه-م (rozumienie). Typ فَعِلَ → samogłoska 'i' widoczna w odmianie: فَهِمْتُ (ja), فَهِمْتَ (ty m.), فَهِمْتِ (ty ż.). Końcówki osobowe w czasie przeszłym: -تُ (ja), -تَ (ty m.), -تِ (ty ż.), -نَا (my). W polskim wystarczy zmiana końcówki: 'zrozumiałem/łaś'."
            },
            {
                "id": "pa_vf1_8",
                "question": "هو _____ (On jest duży/urósł) — forma فَعُلَ",
                "translation": "(On jest duży/urósł)",
                "options": ["كَبُرَ", "كَبَرَ", "أَكْبَرَ", "كَابَرَ"],
                "correct": "كَبُرَ",
                "explanation": "Poprawnie: 'كَبُرَ' (kabura) = stał się duży/urósł. To forma I typu فَعُلَ (faʿula) — z ḍammą (u) na środkowej spółgłosce. Ten typ wyraża cechy stałe lub stany: حَسُنَ (stał się piękny), صَغُرَ (stał się mały), كَرُمَ (stał się szlachetny). W polskim to jak 'pięknieć', 'maleć' — czasowniki opisujące nabycie cechy."
            },
            {
                "id": "pa_vf1_9",
                "question": "نحن _____ الرسالةَ (My napisaliśmy list)",
                "translation": "(My napisaliśmy list)",
                "options": ["كَتَبْنَا", "أَكْتَبْنَا", "كَاتَبْنَا", "تَكَتَّبْنَا"],
                "correct": "كَتَبْنَا",
                "explanation": "Poprawnie: 'كَتَبْنَا' (katabnā) = (my) napisaliśmy. Forma I, 1. os. l. mn. Rdzeń: ك-ت-ب (pisanie). Końcówka '-نَا' = 'my'. Uwaga: w odmianie czas. przeszłego samogłoski znikają przed końcówkami spółgłoskowymi: كَتَبَ → كَتَبْتُ (nie *كَتَبَتُ). Sukun (ْ) na ostatniej spółgłosce rdzenia oznacza brak samogłoski."
            },
            {
                "id": "pa_vf1_10",
                "question": "هي _____ الأغنيةَ (Ona śpiewa piosenkę) — czas teraźniejszy",
                "translation": "(Ona śpiewa piosenkę)",
                "options": ["تُغَنِّي", "تَغْنِي", "غَنَّتْ", "تَغَنَّتْ"],
                "correct": "تُغَنِّي",
                "explanation": "Uwaga — to pytanie-pułapka! 'غَنَّى' (ghannā) = śpiewał, ale to NIE jest forma I, lecz forma II (فَعَّلَ) z podwojeniem. Forma I to 'غَنِيَ' (ghaniya) = być bogatym. 'تُغَنِّي' = (ona) śpiewa — czas teraźniejszy formy II. Wiele popularnych czasowników to w rzeczywistości formy wyższe — trzeba sprawdzać rdzeń i wzorzec, nie zgadywać."
            },
            {
                "id": "pa_vf1_11",
                "question": "أنا _____ العربيةَ (Ja uczę się arabskiego) — forma I 'درس'",
                "translation": "(Ja uczę się arabskiego)",
                "options": ["أَدْرُسُ", "أُدَرِّسُ", "دَرَسْتُ", "أَتَدَرَّسُ"],
                "correct": "أَدْرُسُ",
                "explanation": "Poprawnie: 'أَدْرُسُ' (adrusu) = (ja) uczę się/studiuję. Forma I, czas teraźniejszy, 1. os. l. poj. Wzorzec teraźniejszy: أَفْعُلُ (afʿulu). Porównaj: أُدَرِّسُ (udarrisu) = (ja) uczę (kogoś) — to forma II (kauzatyw). Rdzeń: د-ر-س. Forma I = uczyć się, forma II = nauczać. To jak polski: 'uczyć się' vs. 'uczyć (kogoś)'."
            },
            {
                "id": "pa_vf1_12",
                "question": "Ile wariantów czas. teraźniejszego ma forma I?",
                "translation": "(كم نمطاً للمضارع في الباب الأول؟)",
                "options": ["6 wariantów (يَفْعُلُ/يَفْعِلُ/يَفْعَلُ × 3 przeszłe)", "1 wariant", "2 warianty", "10 wariantów"],
                "correct": "6 wariantów (يَفْعُلُ/يَفْعِلُ/يَفْعَلُ × 3 przeszłe)",
                "explanation": "Forma I ma teoretycznie 6 kombinacji samogłosk przeszły→teraźniejszy: فَعَلَ→يَفْعُلُ (كَتَبَ/يَكْتُبُ), فَعَلَ→يَفْعِلُ (ضَرَبَ/يَضْرِبُ), فَعَلَ→يَفْعَلُ (فَتَحَ/يَفْتَحُ), فَعِلَ→يَفْعَلُ (شَرِبَ/يَشْرَبُ), فَعُلَ→يَفْعُلُ (كَبُرَ/يَكْبُرُ), فَعِلَ→يَفْعِلُ (حَسِبَ/يَحْسِبُ). Nie ma reguły — trzeba zapamiętywać parę dla każdego czasownika."
            },
            {
                "id": "pa_vf1_13",
                "question": "هو _____ البابَ (On otworzył drzwi) — typ فَعَلَ/يَفْعَلُ",
                "translation": "(On otworzył drzwi)",
                "options": ["فَتَحَ", "فَتِحَ", "أَفْتَحَ", "فَاتَحَ"],
                "correct": "فَتَحَ",
                "explanation": "Poprawnie: 'فَتَحَ' (fataḥa) = otworzył. Rdzeń: ف-ت-ح (otwieranie). Typ فَعَلَ/يَفْعَلُ — oba czasy mają fathę (a) jako samogłoskę. Czas teraźniejszy: يَفْتَحُ (yaftaḥu). Ten typ jest rzadszy niż فَعَلَ/يَفْعُلُ. Zwykle dotyczy czasowników z gardłową spółgłoską (ح، ع، غ، خ) w rdzeniu — gardłowe 'przyciągają' fathę."
            },
            {
                "id": "pa_vf1_14",
                "question": "أنتم _____ في الفندق؟ (Czy wy mieszkacie w hotelu?)",
                "translation": "(Czy wy mieszkacie w hotelu?)",
                "options": ["تَسْكُنُونَ", "تُسْكِنُونَ", "تَسَاكَنُونَ", "سَكَنْتُمْ"],
                "correct": "تَسْكُنُونَ",
                "explanation": "Poprawnie: 'تَسْكُنُونَ' (taskunūna) = (wy) mieszkacie. Forma I, czas teraźniejszy, 2. os. l. mn. r.m. Rdzeń: س-ك-ن (zamieszkiwanie). Wzorzec: تَفْعُلُونَ. Porównaj: تُسْكِنُونَ (forma IV) = wy zakwaterowujecie (kogoś). Końcówka '-ونَ' = l. mn. r.m. W pytaniach arabskich szyk często się nie zmienia — pytanie można sygnalizować intonacją lub partykułą هل/أ."
            },
            {
                "id": "pa_vf1_15",
                "question": "Który czasownik NIE jest formą I?",
                "translation": "(أي فعل ليس من الباب الأول؟)",
                "options": ["اِسْتَخْدَمَ (używał)", "جَلَسَ (usiadł)", "أَكَلَ (zjadł)", "نَامَ (spał)"],
                "correct": "اِسْتَخْدَمَ (używał)",
                "explanation": "Czasownik 'اِسْتَخْدَمَ' (istakhdama) to forma X (اِسْتَفْعَلَ), nie forma I. Rdzeń: خ-د-م (służba). Forma X dodaje prefiks اِسْتَ- i oznacza 'prosić o/szukać': اِسْتَخْدَمَ = używać (dosł. 'żądać usługi'). Pozostałe to forma I: جَلَسَ (faʿala), أَكَلَ (faʿala — hamza jest częścią rdzenia أ-ك-ل), نَامَ (faʿala — pusty/hollow verb, rdzeń ن-و-م)."
            }
        ]
    },
    {
        "key": "verb_forms_II_III",
        "name": "Formy II i III czasownika",
        "description": "الوزن الثاني (فَعَّلَ) والثالث (فَاعَلَ)",
        "iconName": "textformat.abc",
        "color": "#818cf8",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_vf23_1",
                "question": "المعلم _____ التلاميذَ (Nauczyciel uczył uczniów) — forma II",
                "translation": "(Nauczyciel uczył uczniów)",
                "options": ["عَلَّمَ", "عَلِمَ", "عَالَمَ", "تَعَلَّمَ"],
                "correct": "عَلَّمَ",
                "explanation": "Poprawnie: 'عَلَّمَ' (ʿallama) = nauczał/uczył. Forma II — wzorzec فَعَّلَ (faʿʿala) — z podwojeniem (تشديد) środkowej spółgłoski. Forma I 'عَلِمَ' = wiedział/dowiedział się. Forma II często dodaje znaczenie kauzatywne: 'sprawić, że ktoś wie' = uczyć. To jak polski: 'wiedzieć' → 'uświadamiać/uczyć'. Podwojenie widoczne w piśmie jako شدّة (ّ) nad literą."
            },
            {
                "id": "pa_vf23_2",
                "question": "هو _____ الكتابَ إلى العربية (On przetłumaczył książkę na arabski) — forma II",
                "translation": "(On przetłumaczył książkę na arabski)",
                "options": ["تَرْجَمَ", "رَجَمَ", "تَرَاجَمَ", "اِرْتَجَمَ"],
                "correct": "تَرْجَمَ",
                "explanation": "Poprawnie: 'تَرْجَمَ' (tarjama) = przetłumaczył. To czterospółgłoskowy rdzeń (ت-ر-ج-م) odmieniany jak forma II. Uwaga: nie wszystkie formy z 'تَ-' na początku to forma V! Gdy rdzeń ma 4 litery, wzorzec podstawowy wygląda jak فَعْلَلَ — a 'تَرْجَمَ' pasuje do tego schematu. Jednak w praktyce odmieniany jest identycznie jak forma II."
            },
            {
                "id": "pa_vf23_3",
                "question": "Jakie jest główne znaczenie formy II (فَعَّلَ)?",
                "translation": "(ما هو المعنى الأساسي للوزن الثاني؟)",
                "options": ["Wzmocnienie lub kauzatyw", "Wzajemność", "Refleksywność", "Proszenie o coś"],
                "correct": "Wzmocnienie lub kauzatyw",
                "explanation": "Forma II (فَعَّلَ) ma dwa główne znaczenia: 1) KAUZATYW — sprawić, że ktoś coś robi: عَلِمَ (wiedzieć) → عَلَّمَ (uczyć), فَهِمَ (rozumieć) → فَهَّمَ (wyjaśnić); 2) WZMOCNIENIE/INTENSYWNOŚĆ — كَسَرَ (złamać) → كَسَّرَ (rozbić na kawałki). Niekiedy też: tworzenie denominatywne od rzeczowników: خَيْمة (namiot) → خَيَّمَ (rozbić namiot)."
            },
            {
                "id": "pa_vf23_4",
                "question": "الفريقان _____ في المباراة (Obie drużyny rywalizowały w meczu) — forma III",
                "translation": "(Obie drużyny rywalizowały w meczu)",
                "options": ["نَافَسَا", "تَنَافَسَا", "نَفَسَا", "اِنْتَفَسَا"],
                "correct": "نَافَسَا",
                "explanation": "Poprawnie: 'نَافَسَا' (nāfasā) = rywalizowali (dwaj/dwie). Forma III — wzorzec فَاعَلَ (fāʿala) — z długim 'ā' po pierwszej spółgłosce. Rdzeń: ن-ف-س (dusza/oddech → rywalizacja). Końcówka '-ا' = l. podwójna (bo الفريقان = dwie drużyny). Forma III oznacza wzajemność/interakcję: كَتَبَ (pisał) → كَاتَبَ (korespondował). To jak polski: 'pisać' → 'pisać DO siebie'."
            },
            {
                "id": "pa_vf23_5",
                "question": "هو _____ أخاه في الطول (On dorównał bratu wzrostem) — forma III",
                "translation": "(On dorównał bratu wzrostem)",
                "options": ["سَاوَى", "سَوَّى", "سَوَى", "اِسْتَوَى"],
                "correct": "سَاوَى",
                "explanation": "Poprawnie: 'سَاوَى' (sāwā) = dorównał/zrównał się. Forma III (فَاعَلَ). Rdzeń: س-و-ي (równość). Porównaj: سَوَّى (forma II) = wyrównał/naprawił, اِسْتَوَى (forma VIII) = stał się równy/dojrzał. Forma III wyraża wzajemność — dorównywanie zakłada porównanie z kimś/czymś. Uwaga: ten rdzeń jest 'pusty' (و w środku) — odmiana nieregularna."
            },
            {
                "id": "pa_vf23_6",
                "question": "هي _____ صديقتَها بالهاتف (Ona zadzwoniła do przyjaciółki) — forma III",
                "translation": "(Ona zadzwoniła do przyjaciółki)",
                "options": ["هَاتَفَتْ", "هَتَفَتْ", "تَهَاتَفَتْ", "أَهْتَفَتْ"],
                "correct": "هَاتَفَتْ",
                "explanation": "Poprawnie: 'هَاتَفَتْ' (hātafat) = zadzwoniła. Forma III od rdzenia ه-ت-ف (wołanie). Forma I 'هَتَفَ' = wołał/krzyczał 'hurra'. Forma III 'هَاتَفَ' = dzwonić (telefonicznie) — nowoczesne znaczenie wynikające z wzajemności: 'wołać do kogoś'. Rzeczownik: هَاتِف = telefon (dosł. 'ten, który woła'). To imiesłów czynny formy III."
            },
            {
                "id": "pa_vf23_7",
                "question": "Czas teraźniejszy formy II 'عَلَّمَ' to:",
                "translation": "(ما مضارع عَلَّمَ؟)",
                "options": ["يُعَلِّمُ", "يَعْلَمُ", "يُعَالِمُ", "يَتَعَلَّمُ"],
                "correct": "يُعَلِّمُ",
                "explanation": "Czas teraźniejszy formy II: يُفَعِّلُ (yufaʿʿilu). Cecha: ḍamma (u) na prefiksie i kasra (i) przed ostatnią spółgłoską + szadda na środkowej. 'يُعَلِّمُ' (yuʿallimu) = uczy. Porównaj: يَعْلَمُ (forma I) = wie, يُعَالِمُ (nie istnieje w praktyce), يَتَعَلَّمُ (forma V) = uczy się. Wzorzec teraźniejszy form II–IV/VII–X jest przewidywalny, w odróżnieniu od formy I!"
            },
            {
                "id": "pa_vf23_8",
                "question": "هو _____ القرآنَ (On recytował Koran) — forma II",
                "translation": "(On recytował Koran)",
                "options": ["رَتَّلَ", "رَتَلَ", "رَاتَلَ", "تَرَتَّلَ"],
                "correct": "رَتَّلَ",
                "explanation": "Poprawnie: 'رَتَّلَ' (rattala) = recytował (melodyjnie, z tajwidem). Forma II — podwojenie 'ت'. Rdzeń: ر-ت-ل. Forma II nadaje tu znaczenie intensywne — nie byle jakie czytanie, ale staranna, melodyczna recytacja. To typowe: forma II intensyfikuje czynność formy I. Inne przykłady: قَطَعَ (ciął) → قَطَّعَ (pociął na kawałki), كَسَرَ (złamał) → كَسَّرَ (rozbił)."
            },
            {
                "id": "pa_vf23_9",
                "question": "Czas teraźniejszy formy III 'كَاتَبَ' to:",
                "translation": "(ما مضارع كَاتَبَ؟)",
                "options": ["يُكَاتِبُ", "يَكْتُبُ", "يُكَتِّبُ", "يَتَكَاتَبُ"],
                "correct": "يُكَاتِبُ",
                "explanation": "Czas teraźniejszy formy III: يُفَاعِلُ (yufāʿilu). Cecha: ḍamma na prefiksie + długie 'ā' zachowane. 'يُكَاتِبُ' (yukātibu) = koresponduje. Porównaj: يَكْتُبُ (forma I) = pisze, يُكَتِّبُ (forma II) = dyktuje/zmusza do pisania, يَتَكَاتَبُ (forma VI) = korespondują wzajemnie. Formy II i III mają ten sam prefiks يُـ w czasie teraźniejszym."
            },
            {
                "id": "pa_vf23_10",
                "question": "المدير _____ الموظفَ (Dyrektor porozmawiał z pracownikiem) — forma III",
                "translation": "(Dyrektor porozmawiał z pracownikiem)",
                "options": ["حَادَثَ", "حَدَّثَ", "حَدَثَ", "تَحَادَثَ"],
                "correct": "حَادَثَ",
                "explanation": "Poprawnie: 'حَادَثَ' (ḥādatha) = porozmawiał z. Forma III (فَاعَلَ). Rdzeń: ح-د-ث (nowość/mówienie). Porównaj: حَدَثَ (forma I) = wydarzyło się, حَدَّثَ (forma II) = opowiedział/powiadomił, تَحَادَثَ (forma VI) = rozmawiali ze sobą (wzajemnie, l. mn.). Forma III = interakcja z jedną osobą, forma VI = wzajemna wieloosobowa. Rzeczownik: مُحَادَثَة = rozmowa."
            },
            {
                "id": "pa_vf23_11",
                "question": "هو _____ في العمل (On przesadził w pracy) — forma III",
                "translation": "(On przesadził w pracy)",
                "options": ["بَالَغَ", "بَلَّغَ", "بَلَغَ", "تَبَالَغَ"],
                "correct": "بَالَغَ",
                "explanation": "Poprawnie: 'بَالَغَ' (bālagha) = przesadził/wyolbrzymił. Rdzeń: ب-ل-غ (osiąganie). Forma I 'بَلَغَ' = osiągnął/dotarł. Forma II 'بَلَّغَ' = powiadomił/przekazał (kauzatyw: sprawić, że wiadomość dojdzie). Forma III 'بَالَغَ' = przesadził (intensywność w dążeniu do celu). Rzeczownik: مُبَالَغَة = przesada — używany w gramatyce jako termin na 'hiperbolicznie'."
            },
            {
                "id": "pa_vf23_12",
                "question": "هي _____ الطبيبَ (Ona konsultowała się z lekarzem) — forma III",
                "translation": "(Ona konsultowała się z lekarzem)",
                "options": ["شَاوَرَتْ", "شَوَّرَتْ", "شَوَرَتْ", "اِسْتَشَارَتْ"],
                "correct": "شَاوَرَتْ",
                "explanation": "Poprawnie: 'شَاوَرَتْ' (shāwarat) = konsultowała się. Forma III. Rdzeń: ش-و-ر (rada/konsultacja). Porównaj: اِسْتَشَارَتْ (forma X) = poprosiła o radę — też poprawne i częstsze! Oba wyrażają konsultację, ale forma X podkreśla 'proszenie o'. Rzeczownik od III: مُشَاوَرَة = konsultacja, od X: اِسْتِشَارَة = konsultacja (bardziej formalna). W życiu codziennym forma X jest częstsza."
            },
            {
                "id": "pa_vf23_13",
                "question": "Masdar (rzeczownik odczasownikowy) formy II 'دَرَّسَ' to:",
                "translation": "(ما مصدر دَرَّسَ؟)",
                "options": ["تَدْرِيس", "دِرَاسَة", "مُدَارَسَة", "تَدَرُّس"],
                "correct": "تَدْرِيس",
                "explanation": "Masdar formy II ma stały wzorzec: تَفْعِيل (tafʿīl). 'تَدْرِيس' (tadrīs) = nauczanie/dydaktyka. Porównaj: دِرَاسَة (dirāsa) = nauka/studia (masdar formy I — nieregularny!), مُدَارَسَة (forma III), تَدَرُّس (forma V). Wielka zaleta form II–X: ich masdary mają STAŁE wzorce (z nielicznymi wyjątkami), w odróżnieniu od formy I, której masdary są nieprzewidywalne."
            },
            {
                "id": "pa_vf23_14",
                "question": "Masdar formy III 'سَافَرَ' (podróżował) to:",
                "translation": "(ما مصدر سَافَرَ؟)",
                "options": ["مُسَافَرَة", "سَفَر", "تَسْفِير", "سِيَافَة"],
                "correct": "مُسَافَرَة",
                "explanation": "Masdar formy III ma wzorzec: مُفَاعَلَة (mufāʿala). 'مُسَافَرَة' (musāfara) = podróżowanie. Drugi wzorzec masdaru III to فِعَال (fiʿāl): np. جِهَاد od جَاهَدَ, قِتَال od قَاتَلَ, كِتَاب od كَاتَبَ (ten sam wyraz co 'książka'!). Uwaga: سَفَر (safar) = podróż (rzeczownik, nie masdar formy I). Masdar formy III jest zawsze regularny."
            },
            {
                "id": "pa_vf23_15",
                "question": "Która para NIEPRAWIDŁOWO łączy formę z jej znaczeniem?",
                "translation": "(أي زوج خاطئ؟)",
                "options": ["فَاعَلَ = kauzatyw (sprawić, że ktoś coś robi)", "فَعَّلَ = intensywność/kauzatyw", "فَاعَلَ = wzajemność/interakcja", "فَعَّلَ = denominatyw (od rzeczownika)"],
                "correct": "فَاعَلَ = kauzatyw (sprawić, że ktoś coś robi)",
                "explanation": "NIEPRAWDA, że فَاعَلَ (forma III) = kauzatyw. Kauzatyw to domena formy II (فَعَّلَ) i IV (أَفْعَلَ). Forma III (فَاعَلَ) oznacza WZAJEMNOŚĆ/INTERAKCJĘ: كَاتَبَ (korespondować), قَاتَلَ (walczyć z kimś), سَابَقَ (ścigać się). Zapamiętaj: długie 'ā' w formie III = 'razem z kimś'. Forma II z podwojeniem = 'silniej/sprawić, że'."
            }
        ]
    },
    {
        "key": "verb_forms_IV_V",
        "name": "Formy IV i V czasownika",
        "description": "الوزن الرابع (أَفْعَلَ) والخامس (تَفَعَّلَ)",
        "iconName": "arrow.triangle.branch",
        "color": "#fbbf24",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_vf45_1",
                "question": "هو _____ الضوءَ (On włączył światło) — forma IV",
                "translation": "(On włączył światło)",
                "options": ["أَضَاءَ", "ضَوَّأَ", "ضَاءَ", "تَضَوَّأَ"],
                "correct": "أَضَاءَ",
                "explanation": "Poprawnie: 'أَضَاءَ' (aḍāʾa) = oświetlił/włączył światło. Forma IV — wzorzec أَفْعَلَ (afʿala) — z prefiksem أَ-. Rdzeń: ض-و-أ (światło). Forma I 'ضَاءَ' = świecił (nieprzechodni — sam z siebie). Forma IV dodaje przechodniość/kauzatyw: 'sprawił, że coś świeci'. To jak polski: 'świecić' → 'oświetlić'. Forma IV to najczęstszy kauzatyw w arabskim."
            },
            {
                "id": "pa_vf45_2",
                "question": "هي _____ ابنَها (Ona posłała syna) — forma IV",
                "translation": "(Ona posłała syna)",
                "options": ["أَرْسَلَتْ", "رَسَلَتْ", "رَاسَلَتْ", "تَرَاسَلَتْ"],
                "correct": "أَرْسَلَتْ",
                "explanation": "Poprawnie: 'أَرْسَلَتْ' (arsalat) = posłała. Forma IV. Rdzeń: ر-س-ل (posyłanie). Porównaj: رَاسَلَ (forma III) = korespondował, تَرَاسَلَ (forma VI) = korespondowali ze sobą. Forma IV jest BARDZO produktywna — wiele codziennych słów to forma IV."
            },
            {
                "id": "pa_vf45_3",
                "question": "Jakie jest główne znaczenie formy IV (أَفْعَلَ)?",
                "translation": "(ما هو المعنى الأساسي للوزن الرابع؟)",
                "options": ["Kauzatyw/przechodniość", "Wzajemność", "Refleksywność", "Intensywność"],
                "correct": "Kauzatyw/przechodniość",
                "explanation": "Forma IV (أَفْعَلَ) to głównie KAUZATYW — sprawić, że ktoś coś robi, lub uczynienie czasownika przechodnim: جَلَسَ (usiadł) → أَجْلَسَ (posadził), خَرَجَ (wyszedł) → أَخْرَجَ (wyciągnął/usunął), سَلِمَ (był bezpieczny) → أَسْلَمَ (poddał się/stał się muzułmaninem). Różnica z formą II: forma II = intensywność + kauzatyw, forma IV = czysty kauzatyw. Obie mogą tworzyć kauzatywy od tego samego rdzenia."
            },
            {
                "id": "pa_vf45_4",
                "question": "الطالب _____ العربيةَ (Student uczył się arabskiego) — forma V",
                "translation": "(Student uczył się arabskiego)",
                "options": ["تَعَلَّمَ", "عَلَّمَ", "عَلِمَ", "تَعَالَمَ"],
                "correct": "تَعَلَّمَ",
                "explanation": "Poprawnie: 'تَعَلَّمَ' (taʿallama) = nauczył się. Forma V — wzorzec تَفَعَّلَ (tafaʿʿala) — to forma II + prefiks تَـ. Forma II 'عَلَّمَ' = uczył (kogoś), forma V = 'byłem uczonym' → 'uczyłem się'. Forma V to zwrotna (refleksywna) wersja formy II. To jak polski: 'uczyć' → 'uczyć SIĘ'. Rdzeń: ع-ل-م (wiedza). Masdar: تَعَلُّم (taʿallum)."
            },
            {
                "id": "pa_vf45_5",
                "question": "هو _____ من المشكلة (On uwolnił się od problemu) — forma V",
                "translation": "(On uwolnił się od problemu)",
                "options": ["تَخَلَّصَ", "خَلَّصَ", "خَلَصَ", "اِخْتَلَصَ"],
                "correct": "تَخَلَّصَ",
                "explanation": "Poprawnie: 'تَخَلَّصَ مِنَ المشكلة' = pozbył się/uwolnił się od problemu. Forma V od rdzenia خ-ل-ص (czystość/uwolnienie). Forma II 'خَلَّصَ' = oczyścił/uwolnił (kogoś), forma V 'تَخَلَّصَ' = uwolnił się (reflexive). Precyzyjnie 'rozwiązał problem' to: حَلَّ المشكلةَ (forma I rdzenia ح-ل-ل). Forma V = domena zwrotności."
            },
            {
                "id": "pa_vf45_6",
                "question": "Czas teraźniejszy formy IV 'أَسْلَمَ' to:",
                "translation": "(ما مضارع أَسْلَمَ؟)",
                "options": ["يُسْلِمُ", "يَسْلَمُ", "يُسَلِّمُ", "يَتَسَلَّمُ"],
                "correct": "يُسْلِمُ",
                "explanation": "Czas teraźniejszy formy IV: يُفْعِلُ (yufʿilu). 'يُسْلِمُ' (yuslimu) = poddaje się/wyznaje islam. Cecha: ḍamma na prefiksie + kasra przed ostatnią spółgłoską + sukun na drugiej. Porównaj: يَسْلَمُ (forma I) = jest bezpieczny, يُسَلِّمُ (forma II) = wita się/przekazuje, يَتَسَلَّمُ (forma V) = przyjmuje/odbiera. Każda forma tego samego rdzenia ma inne znaczenie!"
            },
            {
                "id": "pa_vf45_7",
                "question": "هو _____ في الموضوع (On zagłębił się w temat) — forma V",
                "translation": "(On zagłębił się w temat)",
                "options": ["تَعَمَّقَ", "عَمَّقَ", "عَمُقَ", "أَعْمَقَ"],
                "correct": "تَعَمَّقَ",
                "explanation": "Poprawnie: 'تَعَمَّقَ' (taʿammaqa) = zagłębił się. Forma V od rdzenia ع-م-ق (głębokość). Forma I 'عَمُقَ' = jest głęboki (cecha), Forma II 'عَمَّقَ' = pogłębił (coś), Forma V 'تَعَمَّقَ' = zagłębił SIĘ (refleksywna od II). Wzorzec jest konsekwentny: II = czynność na kimś/czymś, V = ta sama czynność na sobie. Masdar: تَعَمُّق (taʿammuq) = zagłębianie się."
            },
            {
                "id": "pa_vf45_8",
                "question": "Masdar formy IV 'أَخْرَجَ' (wyciągnął/usunął) to:",
                "translation": "(ما مصدر أَخْرَجَ؟)",
                "options": ["إِخْرَاج", "خُرُوج", "تَخْرِيج", "تَخَرُّج"],
                "correct": "إِخْرَاج",
                "explanation": "Masdar formy IV: إِفْعَال (ifʿāl). 'إِخْرَاج' (ikhrāj) = wyciąganie/reżyseria (filmowa!). Porównaj: خُرُوج (masdar formy I) = wyjście, تَخْرِيج (masdar formy II) = cytowanie/komentowanie, تَخَرُّج (masdar formy V) = ukończenie studiów. Słowo إِخْرَاج w kontekście filmowym = reżyseria, bo reżyser 'wyciąga/wydobywa' film. مُخْرِج = reżyser (imiesłów czynny IV)."
            },
            {
                "id": "pa_vf45_9",
                "question": "أنا _____ بالعربية (Ja mówię po arabsku) — forma V",
                "translation": "(Ja mówię po arabsku)",
                "options": ["أَتَكَلَّمُ", "أُكَلِّمُ", "أَكْلَمُ", "أَتَكَالَمُ"],
                "correct": "أَتَكَلَّمُ",
                "explanation": "Poprawnie: 'أَتَكَلَّمُ' (atakallamu) = mówię. Forma V, czas teraźniejszy, 1. os. Wzorzec: أَتَفَعَّلُ. Rdzeń: ك-ل-م (mowa). Forma II 'كَلَّمَ' = przemówił do kogoś, forma V 'تَكَلَّمَ' = mówić (refleksywna). أُكَلِّمُ = rozmawiam z kimś (forma II teraźn.). Czas teraźniejszy formy V ma fathę (a) na prefiksie, nie ḍammę — to odróżnia od form II/III/IV!"
            },
            {
                "id": "pa_vf45_10",
                "question": "هو _____ من المدرسة (On ukończył szkołę) — forma V",
                "translation": "(On ukończył szkołę)",
                "options": ["تَخَرَّجَ", "خَرَّجَ", "أَخْرَجَ", "خَرَجَ"],
                "correct": "تَخَرَّجَ",
                "explanation": "Poprawnie: 'تَخَرَّجَ مِنْ' (takharraja min) = ukończył (szkołę/studia). Forma V z przyimkiem مِنْ. Rdzeń: خ-ر-ج (wychodzenie). Forma I خَرَجَ = wyszedł, II خَرَّجَ = 'wypuścił' absolwentów (szkoła), IV أَخْرَجَ = wyciągnął/wydalił, V تَخَرَّجَ = ukończył studia (refleksywna: 'sam się wypuścił'). Masdar: تَخَرُّج = ukończenie studiów. حفلة تَخَرُّج = uroczystość ukończenia."
            },
            {
                "id": "pa_vf45_11",
                "question": "Masdar formy V 'تَكَلَّمَ' to:",
                "translation": "(ما مصدر تَكَلَّمَ؟)",
                "options": ["تَكَلُّم", "تَكْلِيم", "كَلَام", "إِكْلَام"],
                "correct": "تَكَلُّم",
                "explanation": "Masdar formy V: تَفَعُّل (tafaʿʿul). 'تَكَلُّم' (takallum) = mówienie. Wzorzec jest stały i przewidywalny! Porównaj: تَعَلُّم (uczenie się, V od ع-ل-م), تَخَرُّج (ukończenie, V od خ-ر-ج), تَقَدُّم (postęp, V od ق-د-م). Uwaga: كَلَام (kalām) to masdar formy I — ale nieprzewidywalny, bo masdary formy I nie mają stałego wzorca. كَلَام znaczy 'mowa/wypowiedź', تَكَلُّم = 'mówienie' (akt)."
            },
            {
                "id": "pa_vf45_12",
                "question": "الولد _____ كأبيه (Chłopiec zachowuje się jak ojciec) — forma V",
                "translation": "(Chłopiec zachowuje się jak ojciec)",
                "options": ["يَتَصَرَّفُ", "يُصَرِّفُ", "يَصْرِفُ", "يَنْصَرِفُ"],
                "correct": "يَتَصَرَّفُ",
                "explanation": "Poprawnie: 'يَتَصَرَّفُ' (yataṣarrafu) = zachowuje się. Forma V, czas teraźniejszy. Rdzeń: ص-ر-ف (kierowanie/wydawanie). Forma I صَرَفَ = wydał (pieniądze)/odwrócił, II صَرَّفَ = odmienił (gramatycznie)/wymieniał, V تَصَرَّفَ = zachowywał się/dysponował, VII اِنْصَرَفَ = odszedł/wycofał się. Fascynujące: jeden rdzeń daje zupełnie różne znaczenia w każdej formie!"
            },
            {
                "id": "pa_vf45_13",
                "question": "هو _____ الدواءَ (On przyjął lekarstwo) — forma VI",
                "translation": "(On przyjął lekarstwo)",
                "options": ["تَنَاوَلَ", "نَاوَلَ", "نَوَّلَ", "أَنْوَلَ"],
                "correct": "تَنَاوَلَ",
                "explanation": "Uwaga: 'تَنَاوَلَ' (tanāwala) = przyjął/spożył — to forma VI (تَفَاعَلَ), nie V! Rdzeń: ن-و-ل (podawanie). Forma III نَاوَلَ = podał (komuś), forma VI تَنَاوَلَ = wziął/przyjął (to, co podano). Forma VI nie zawsze oznacza wzajemność — może też oznaczać 'otrzymanie' czynności formy III. To częsty błąd — nie zakładaj, że każde تَـ na początku to forma V!"
            },
            {
                "id": "pa_vf45_14",
                "question": "هي _____ من العمل (Ona zrezygnowała z pracy) — forma VI",
                "translation": "(Ona przeszła na emeryturę)",
                "options": ["تَقَاعَدَتْ", "قَعَّدَتْ", "قَعَدَتْ", "أَقْعَدَتْ"],
                "correct": "تَقَاعَدَتْ",
                "explanation": "Poprawnie: 'تَقَاعَدَتْ' to forma VI (تَفَاعَلَ), nie V. Oznacza: przeszła na emeryturę (dosł. 'wzajemne siedzenie' → wycofanie się). Rdzeń: ق-ع-د (siedzenie). Rozróżnienie: forma V = تَفَعَّلَ (jedno تَ + szadda), forma VI = تَفَاعَلَ (jedno تَ + długie ā). To pytanie-pułapka sprawdzające rozróżnienie form V i VI!"
            },
            {
                "id": "pa_vf45_15",
                "question": "Która relacja form jest PRAWIDŁOWA?",
                "translation": "(أي علاقة صحيحة؟)",
                "options": ["V jest refleksywną II, jak VI jest refleksywną III", "V jest refleksywną III", "IV jest refleksywną II", "V jest kauzatywem I"],
                "correct": "V jest refleksywną II, jak VI jest refleksywną III",
                "explanation": "Kluczowa zasada arabskiej morfologii: forma V (تَفَعَّلَ) = refleksywna/zwrotna forma II (فَعَّلَ). Forma VI (تَفَاعَلَ) = refleksywna/zwrotna forma III (فَاعَلَ). Obie dodają prefiks تَـ. Np.: عَلَّمَ (II: uczył) → تَعَلَّمَ (V: uczył się), كَاتَبَ (III: pisał do) → تَكَاتَبَ (VI: korespondowali ze sobą). To symetryczny system — forma V:II = VI:III. Zapamiętaj tę strukturę!"
            }
        ]
    },
    {
        "key": "verb_forms_VI_VII",
        "name": "Formy VI i VII czasownika",
        "description": "الوزن السادس (تَفَاعَلَ) والسابع (اِنْفَعَلَ)",
        "iconName": "arrow.triangle.merge",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_vf67_1",
                "question": "الأصدقاء _____ الرسائلَ (Przyjaciele wymieniali wiadomości) — forma VI",
                "translation": "(Przyjaciele wymieniali wiadomości)",
                "options": ["تَبَادَلُوا", "بَادَلُوا", "بَدَّلُوا", "اِنْبَدَلُوا"],
                "correct": "تَبَادَلُوا",
                "explanation": "Poprawnie: 'تَبَادَلُوا' (tabādalū) = wymieniali się (wzajemnie). Forma VI — wzorzec تَفَاعَلَ (tafāʿala) — refleksywna od III. Rdzeń: ب-د-ل (zamiana). Forma III بَادَلَ = wymienił (z kimś), forma VI تَبَادَلَ = wymieniali SIĘ (wzajemnie, wielu uczestników). Forma VI podkreśla wzajemność czynności — 'A wymienił z B' vs. 'A i B wymieniali ze sobą'. To jak polski: 'wymieniać' → 'wymieniać się'."
            },
            {
                "id": "pa_vf67_2",
                "question": "Jakie jest główne znaczenie formy VI (تَفَاعَلَ)?",
                "translation": "(ما هو المعنى الأساسي للوزن السادس؟)",
                "options": ["Wzajemność wieloosobowa lub udawanie", "Kauzatyw", "Bierność", "Proszenie o coś"],
                "correct": "Wzajemność wieloosobowa lub udawanie",
                "explanation": "Forma VI (تَفَاعَلَ) ma dwa główne znaczenia: 1) WZAJEMNOŚĆ wieloosobowa: تَبَادَلَ (wymienić się), تَعَاوَنَ (współpracować), تَحَادَثَ (rozmawiać ze sobą); 2) UDAWANIE/POZOROWANIE: تَمَارَضَ (udawać chorego, od مَرِضَ), تَجَاهَلَ (udawać niewiedzący, od جَهِلَ), تَنَاسَى (udawać zapomnienie). To drugie znaczenie fascynujące — prefiks تَـ + wzorzec III = 'robić coś na niby'."
            },
            {
                "id": "pa_vf67_3",
                "question": "هو _____ المرضَ لكي لا يذهبَ إلى المدرسة (On udawał chorobę, żeby nie iść do szkoły) — forma VI",
                "translation": "(On udawał chorobę)",
                "options": ["تَمَارَضَ", "مَارَضَ", "مَرَّضَ", "أَمْرَضَ"],
                "correct": "تَمَارَضَ",
                "explanation": "Poprawnie: 'تَمَارَضَ' (tamāraḍa) = udawał chorego. Forma VI — znaczenie: 'udawanie'. Rdzeń: م-ر-ض (choroba). Forma I مَرِضَ = był chory, forma II مَرَّضَ = pielęgnował chorego, forma IV أَمْرَضَ = uczynił chorym. Forma VI تَمَارَضَ = udawał chorobę — dosł. 'pokazywał wzajemność z chorobą' → pozorowanie stanu."
            },
            {
                "id": "pa_vf67_4",
                "question": "الباب _____ (Drzwi się otworzyły) — forma VII",
                "translation": "(Drzwi się otworzyły)",
                "options": ["اِنْفَتَحَ", "فَتَحَ", "فَتَّحَ", "تَفَاتَحَ"],
                "correct": "اِنْفَتَحَ",
                "explanation": "Poprawnie: 'اِنْفَتَحَ' (infataḥa) = otworzyło się (samo). Forma VII — wzorzec اِنْفَعَلَ (infaʿala) — z prefiksem اِنْـ. Rdzeń: ف-ت-ح (otwieranie). Forma I فَتَحَ = otworzył (ktoś). Forma VII = bierna/medialna: 'zostało otwarte' / 'otworzyło się samo'. To jak polski: 'otworzyć' → 'otworzyć SIĘ'. Forma VII jest ZAWSZE nieprzechodnia — nie może mieć dopełnienia bliższego."
            },
            {
                "id": "pa_vf67_5",
                "question": "Jakie jest główne znaczenie formy VII (اِنْفَعَلَ)?",
                "translation": "(ما هو المعنى الأساسي للوزن السابع؟)",
                "options": ["Medialno-bierne (dzieje się samo)", "Kauzatyw", "Wzajemność", "Udawanie"],
                "correct": "Medialno-bierne (dzieje się samo)",
                "explanation": "Forma VII (اِنْفَعَلَ) wyraża MEDIALNO-BIERNĄ wersję formy I: czynność dzieje się 'sama', bez widocznego sprawcy. كَسَرَ (złamał) → اِنْكَسَرَ (złamało się), فَتَحَ (otworzył) → اِنْفَتَحَ (otworzyło się). WAŻNE: forma VII NIGDY nie łączy się z rdzeniami zaczynającymi się od و، ي، ن، ر، ل — bo اِنْـ + te litery tworzyłoby niewymawialne zbitki. To jedyne ograniczenie fonetyczne wśród form."
            },
            {
                "id": "pa_vf67_6",
                "question": "الجيش _____ (Armia wycofała się) — forma VII",
                "translation": "(Armia wycofała się)",
                "options": ["اِنْسَحَبَ", "سَحَبَ", "سَحَّبَ", "تَسَاحَبَ"],
                "correct": "اِنْسَحَبَ",
                "explanation": "Poprawnie: 'اِنْسَحَبَ' (insaḥaba) = wycofał się. Forma VII. Rdzeń: س-ح-ب (ciągnięcie). Forma I سَحَبَ = pociągnął/wyciągnął. Forma VII اِنْسَحَبَ = 'został pociągnięty' → wycofał się — znaczenie przenośne. W wojskowym kontekście używane na 'odwrót/wycofanie'. Rzeczownik: اِنْسِحَاب (insiḥāb) = wycofanie. Masdar formy VII: اِنْفِعَال (infiʿāl) — stały wzorzec."
            },
            {
                "id": "pa_vf67_7",
                "question": "هم _____ على العمل معاً (Oni uzgodnili wspólną pracę) — forma VI",
                "translation": "(Oni uzgodnili wspólną pracę)",
                "options": ["تَوَافَقُوا", "وَافَقُوا", "وَفَّقُوا", "اِتَّفَقُوا"],
                "correct": "تَوَافَقُوا",
                "explanation": "Poprawnie: 'تَوَافَقُوا' (tawāfaqū) = uzgodnili/doszli do porozumienia. Forma VI. Rdzeń: و-ف-ق (zgoda). Porównaj: وَافَقَ (forma III) = zgodził się Z (kimś jednym), تَوَافَقَ (forma VI) = uzgodnili (wzajemnie, grupa), اِتَّفَقَ (forma VIII) = porozumieli się. Forma VIII اِتَّفَقَ jest częstsza w codziennym użyciu — forma VI bardziej formalna/literacka."
            },
            {
                "id": "pa_vf67_8",
                "question": "الزجاج _____ (Szkło się stłukło) — forma VII",
                "translation": "(Szkło się stłukło)",
                "options": ["اِنْكَسَرَ", "كَسَرَ", "كَسَّرَ", "تَكَاسَرَ"],
                "correct": "اِنْكَسَرَ",
                "explanation": "Poprawnie: 'اِنْكَسَرَ' (inkasara) = stłukło się/pękło. Forma VII. Rdzeń: ك-س-ر (łamanie). Forma I كَسَرَ = złamał (ktoś złamał), forma VII اِنْكَسَرَ = złamało się (samo). Tu widać idealnie medialne znaczenie formy VII — nie ma sprawcy, czynność 'dzieje się'."
            },
            {
                "id": "pa_vf67_9",
                "question": "Czas teraźniejszy formy VII 'اِنْكَسَرَ' to:",
                "translation": "(ما مضارع اِنْكَسَرَ؟)",
                "options": ["يَنْكَسِرُ", "يُنْكَسِرُ", "يَكْسِرُ", "يَتَكَاسَرُ"],
                "correct": "يَنْكَسِرُ",
                "explanation": "Czas teraźniejszy formy VII: يَنْفَعِلُ (yanfaʿilu). 'يَنْكَسِرُ' (yankasiru) = tłucze się/pęka. Cecha: fatha na prefiksie (يَـ), zachowane نْ, kasra przed ostatnią spółgłoską. WAŻNE: formy VII, VIII, IX, X mają fathę (a) na prefiksie teraźniejszym, NIE ḍammę. Ḍamma (يُـ) = formy II, III, IV. Fatha (يَـ) = formy I, V, VI, VII, VIII, IX, X."
            },
            {
                "id": "pa_vf67_10",
                "question": "الناس _____ بعد الحادث (Ludzie rozproszyli się po wypadku) — forma VIII",
                "translation": "(Ludzie rozproszyli się po wypadku)",
                "options": ["اِنْتَشَرُوا", "نَشَرُوا", "نَشَّرُوا", "تَنَاشَرُوا"],
                "correct": "اِنْتَشَرُوا",
                "explanation": "Uwaga: 'اِنْتَشَرُوا' (intasharū) = rozprzestrzenili się — to forma VIII (اِفْتَعَلَ), nie VII! Forma VII byłaby: *'اِنْنَشَرُوا' — ale NIE istnieje, bo rdzeń zaczyna się od ن, a forma VII nie łączy się z rdzeniami na ن. Rdzeń: ن-ش-ر (rozprzestrzenianie/publikowanie). Forma I نَشَرَ = opublikował/rozprzestrzenił."
            },
            {
                "id": "pa_vf67_11",
                "question": "Masdar formy VI 'تَعَاوَنَ' (współpracował) to:",
                "translation": "(ما مصدر تَعَاوَنَ؟)",
                "options": ["تَعَاوُن", "تَعْوِين", "مُعَاوَنَة", "إِعَانَة"],
                "correct": "تَعَاوُن",
                "explanation": "Masdar formy VI: تَفَاعُل (tafāʿul). 'تَعَاوُن' (taʿāwun) = współpraca. Porównaj: مُعَاوَنَة (masdar formy III) = pomoc/wsparcie, إِعَانَة (masdar formy IV) = wsparcie/dotacja. Rdzeń: ع-و-ن (pomoc). Masdar formy VI jest stały — łatwy do zapamiętania: تَفَاعُل."
            },
            {
                "id": "pa_vf67_12",
                "question": "هو _____ النومَ (On udawał, że śpi) — forma VI",
                "translation": "(On udawał, że śpi)",
                "options": ["تَنَاوَمَ", "نَاوَمَ", "نَوَّمَ", "أَنَامَ"],
                "correct": "تَنَاوَمَ",
                "explanation": "Poprawnie: 'تَنَاوَمَ' (tanāwama) = udawał, że śpi. Forma VI — znaczenie 'udawania'. Rdzeń: ن-و-م (sen). Forma I نَامَ = spał, forma II نَوَّمَ = uśpił (kogoś), forma IV أَنَامَ = też uśpił, forma VI تَنَاوَمَ = udawał sen. Pamiętaj dwa znaczenia formy VI: 1) wzajemność, 2) udawanie."
            },
            {
                "id": "pa_vf67_13",
                "question": "Masdar formy VII 'اِنْفَتَحَ' to:",
                "translation": "(ما مصدر اِنْفَتَحَ؟)",
                "options": ["اِنْفِتَاح", "فُتُوح", "تَفْتِيح", "فَتْح"],
                "correct": "اِنْفِتَاح",
                "explanation": "Masdar formy VII: اِنْفِعَال (infiʿāl). 'اِنْفِتَاح' (infitāḥ) = otwieranie się/otwarcie. Znane historyczne użycie: 'سياسة الانفتاح' = polityka otwarcia (w Egipcie lat 70.). Porównaj: فَتْح (masdar I) = podbój/otwarcie (np. فتح مكة = podbój Mekki), تَفْتِيح (masdar II) = jaśnienie koloru. Każda forma ma swój masdar, każdy z innym odcieniem znaczeniowym."
            },
            {
                "id": "pa_vf67_14",
                "question": "الأطفال _____ في الشارع (Dzieci biegały po ulicy) — forma VI",
                "translation": "(Dzieci biegały po ulicy)",
                "options": ["تَرَاكَضُوا", "رَاكَضُوا", "رَكَّضُوا", "اِنْرَكَضُوا"],
                "correct": "تَرَاكَضُوا",
                "explanation": "Poprawnie: 'تَرَاكَضُوا' (tarākaḍū) = biegali (wzajemnie/gromadnie). Forma VI. Rdzeń: ر-ك-ض (bieganie). Forma I رَكَضَ = biegł, forma VI تَرَاكَضَ = biegali ze sobą/ścigali się. Uwaga: *'اِنْرَكَضَ' NIE istnieje — forma VII nie łączy się z rdzeniami na ر (اِنْرَـ jest niefonetyczne). Pamiętaj ograniczenia formy VII!"
            },
            {
                "id": "pa_vf67_15",
                "question": "Która forma NIE może łączyć się z rdzeniem zaczynającym się od 'ن'?",
                "translation": "(أي وزن لا يمكن أن يُبنى من جذر يبدأ بنون؟)",
                "options": ["VII (اِنْفَعَلَ)", "VIII (اِفْتَعَلَ)", "V (تَفَعَّلَ)", "IV (أَفْعَلَ)"],
                "correct": "VII (اِنْفَعَلَ)",
                "explanation": "Forma VII (اِنْفَعَلَ) nie łączy się z rdzeniami zaczynającymi się od: و، ي، ن، ر، ل. Powód: prefiks اِنْـ + ن rdzenia dałoby اِنْنَـ (podwójne nun — trudne do wymówienia i odróżnienia). Dlatego od rdzenia ن-ش-ر używa się formy VIII (اِنْتَشَرَ), nie VII (*اِنْنَشَرَ). Pozostałe formy nie mają tego ograniczenia."
            }
        ]
    },
    {
        "key": "verb_forms_VIII_IX_X",
        "name": "Formy VIII, IX i X czasownika",
        "description": "الوزن الثامن (اِفْتَعَلَ) والتاسع (اِفْعَلَّ) والعاشر (اِسْتَفْعَلَ)",
        "iconName": "list.number",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {
                "id": "pa_vf8x_1",
                "question": "هو _____ لامتحان (On przygotował się do egzaminu) — forma X",
                "translation": "(On przygotował się do egzaminu)",
                "options": ["اِسْتَعَدَّ", "أَعَدَّ", "عَدَّ", "تَعَدَّدَ"],
                "correct": "اِسْتَعَدَّ",
                "explanation": "Poprawnie: 'اِسْتَعَدَّ' (istaʿadda) = przygotował się. Forma X (اِسْتَفْعَلَ). Rdzeń: ع-د-د (przygotowanie/liczenie). Forma X اِسْتَعَدَّ = przygotował się (prosił siebie o gotowość). Forma II عَدَّ = policzył, forma IV أَعَدَّ = przygotował (coś). To pytanie testuje, czy rozróżniasz formy — obie mają prefiks اِـ, ale forma X ma اِسْتَـ."
            },
            {
                "id": "pa_vf8x_2",
                "question": "الشعب _____ في الشارع (Naród protestował na ulicy) — forma VIII",
                "translation": "(Naród protestował na ulicy)",
                "options": ["اِحْتَجَّ", "حَجَّ", "حَاجَجَ", "تَحَاجَّ"],
                "correct": "اِحْتَجَّ",
                "explanation": "Poprawnie: 'اِحْتَجَّ' (iḥtajja) = protestował. Forma VIII — wzorzec اِفْتَعَلَ (iftaʿala) — z infixem '-ت-' po pierwszej spółgłosce rdzenia. Rdzeń: ح-ج-ج (argumentowanie). Forma I حَجَّ = pielgrzymował/argumentował, forma III حَاجَجَ = dyskutował z, forma VIII اِحْتَجَّ = zaprotestował/wyraził sprzeciw. Masdar: اِحْتِجَاج (iḥtijāj) = protest. Wzorzec masdaru VIII: اِفْتِعَال."
            },
            {
                "id": "pa_vf8x_3",
                "question": "Jakie jest główne znaczenie formy VIII (اِفْتَعَلَ)?",
                "translation": "(ما هو المعنى الأساسي للوزن الثامن؟)",
                "options": ["Refleksywność/medialność (podobne do VII)", "Tylko kauzatyw", "Tylko wzajemność", "Kolory i wady fizyczne"],
                "correct": "Refleksywność/medialność (podobne do VII)",
                "explanation": "Forma VIII (اِفْتَعَلَ) ma znaczenie REFLEKSYWNO-MEDIALNE, podobne do formy VII, ale bardziej produktywne (VII ma ograniczenia fonetyczne). جَمَعَ (zebrał) → اِجْتَمَعَ (zebrał się/zgromadził SIĘ), قَرَبَ (zbliżył) → اِقْتَرَبَ (zbliżył SIĘ). Forma VIII często wyraża też: WYBIERANIE: خَارَ → اِخْتَارَ (wybrał), lub INTENSYWNOŚĆ: حَرَقَ → اِحْتَرَقَ (spłonął doszczętnie)."
            },
            {
                "id": "pa_vf8x_4",
                "question": "الوردة _____ (Róża zaczerwieniła się) — forma IX",
                "translation": "(Róża jest czerwona)",
                "options": ["اِحْمَرَّتْ", "حَمَّرَتْ", "أَحْمَرَتْ", "تَحَمَّرَتْ"],
                "correct": "اِحْمَرَّتْ",
                "explanation": "Poprawnie: 'اِحْمَرَّتْ' (iḥmarrat) = zaczerwieniła się. Forma IX — wzorzec اِفْعَلَّ (ifʿalla) — z podwojeniem ostatniej spółgłoski. Forma IX jest RZADKA i WYSPECJALIZOWANA — używa się jej TYLKO do: 1) kolorów: اِسْوَدَّ (czernieć), اِبْيَضَّ (bielić się), اِخْضَرَّ (zielenieć); 2) wad fizycznych: اِعْوَجَّ (skrzywić się). To najmniej produktywna forma!"
            },
            {
                "id": "pa_vf8x_5",
                "question": "هو _____ المعلمَ (On poprosił nauczyciela o pozwolenie) — forma X",
                "translation": "(On poprosił nauczyciela o pozwolenie)",
                "options": ["اِسْتَأْذَنَ", "أَذِنَ", "أَذَّنَ", "تَأَذَّنَ"],
                "correct": "اِسْتَأْذَنَ",
                "explanation": "Poprawnie: 'اِسْتَأْذَنَ' (istaʾdhana) = poprosił o pozwolenie. Forma X — wzorzec اِسْتَفْعَلَ (istafʿala) — z prefiksem اِسْتَـ. Rdzeń: أ-ذ-ن (pozwolenie/ucho). Forma I أَذِنَ = pozwolił, forma II أَذَّنَ = wezwał na modlitwę (muezzin), forma X اِسْتَأْذَنَ = poprosił o pozwolenie. Forma X = 'prosić o / szukać tego, co wyraża forma I'."
            },
            {
                "id": "pa_vf8x_6",
                "question": "Jakie jest główne znaczenie formy X (اِسْتَفْعَلَ)?",
                "translation": "(ما هو المعنى الأساسي للوزن العاشر؟)",
                "options": ["Prosić o / szukać / uważać za", "Intensywność", "Wzajemność", "Kolory"],
                "correct": "Prosić o / szukać / uważać za",
                "explanation": "Forma X (اِسْتَفْعَلَ) ma trzy główne znaczenia: 1) PROSIĆ O/SZUKAĆ: غَفَرَ (przebaczył) → اِسْتَغْفَرَ (prosił o przebaczenie), عَلِمَ (wiedział) → اِسْتَعْلَمَ (pytał o informację); 2) UWAŻAĆ ZA: حَسُنَ (był piękny) → اِسْتَحْسَنَ (uznał za piękne/pochwalił); 3) STAWAĆ SIĘ: اِسْتَعَدَّ (przygotował się), اِسْتَقَرَّ (ustabilizował się)."
            },
            {
                "id": "pa_vf8x_7",
                "question": "هم _____ في القاعة (Oni zebrali się w sali) — forma VIII",
                "translation": "(Oni zebrali się w sali)",
                "options": ["اِجْتَمَعُوا", "جَمَعُوا", "جَمَّعُوا", "تَجَمَّعُوا"],
                "correct": "اِجْتَمَعُوا",
                "explanation": "Poprawnie: 'اِجْتَمَعُوا' (ijtamaʿū) = zebrali się. Forma VIII. Rdzeń: ج-م-ع (zbieranie). Forma I جَمَعَ = zebrał (coś), II جَمَّعَ = gromadził/montował, V تَجَمَّعَ = gromadzili się (powoli), VIII اِجْتَمَعَ = zebrali się (formalnie — spotkanie). Rzeczownik: اِجْتِمَاع (ijtimāʿ) = spotkanie/zebranie. Przymiotnik: اِجْتِمَاعِي = społeczny."
            },
            {
                "id": "pa_vf8x_8",
                "question": "هو _____ اللهَ (On prosił Boga o przebaczenie) — forma X",
                "translation": "(On prosił Boga o przebaczenie)",
                "options": ["اِسْتَغْفَرَ", "غَفَرَ", "غَفَّرَ", "تَغَافَرَ"],
                "correct": "اِسْتَغْفَرَ",
                "explanation": "Poprawnie: 'اِسْتَغْفَرَ' (istaghfara) = prosił o przebaczenie. Forma X. Rdzeń: غ-ف-ر (przebaczanie). Forma I غَفَرَ = przebaczył (Bóg przebacza), forma X اِسْتَغْفَرَ = prosił o przebaczenie. Znane wyrażenie: 'أَسْتَغْفِرُ اللهَ' (astaghfiru Allāh) = proszę Boga o przebaczenie — jedno z najczęstszych wyrażeń w arabskim."
            },
            {
                "id": "pa_vf8x_9",
                "question": "Czas teraźniejszy formy VIII 'اِخْتَارَ' (wybrał) to:",
                "translation": "(ما مضارع اِخْتَارَ؟)",
                "options": ["يَخْتَارُ", "يُخْتَارُ", "يَخِيرُ", "يِخْتَرُ"],
                "correct": "يَخْتَارُ",
                "explanation": "Poprawnie: 'يَخْتَارُ' (yakhtāru) = wybiera. Forma VIII, czas teraźniejszy. Rdzeń: خ-ي-ر (dobro/wybór) — rdzeń 'pusty' (و/ي w środku). W odmianie ي → ا (długie). Wzorzec teraźn. VIII: يَفْتَعِلُ, ale z pustym rdzeniem → يَفْتَالُ. Porównaj: اِحْتَاجَ (potrzebował) → يَحْتَاجُ (potrzebuje)."
            },
            {
                "id": "pa_vf8x_10",
                "question": "السماء _____ (Niebo pociemniało) — forma IX",
                "translation": "(Niebo pociemniało)",
                "options": ["اِسْوَدَّتْ", "سَوَّدَتْ", "أَسْوَدَتْ", "تَسَوَّدَتْ"],
                "correct": "اِسْوَدَّتْ",
                "explanation": "Poprawnie: 'اِسْوَدَّتْ' (iswaddat) = pociemniało/stało się czarne. Forma IX od rdzenia س-و-د (czarność). Forma IX jest WYJĄTKOWA: 1) używa się TYLKO do kolorów i wad fizycznych, 2) jest nieprzechodnia, 3) podwaja ostatnią spółgłoskę. Inne przykłady: اِحْمَرَّ (zaczerwieniło się), اِصْفَرَّ (zżółkło), اِبْيَضَّ (zbielało)."
            },
            {
                "id": "pa_vf8x_11",
                "question": "هي _____ الكتابَ (Ona pożyczyła książkę) — forma X",
                "translation": "(Ona pożyczyła książkę)",
                "options": ["اِسْتَعَارَتْ", "عَارَتْ", "أَعَارَتْ", "تَعَاوَرَتْ"],
                "correct": "اِسْتَعَارَتْ",
                "explanation": "Poprawnie: 'اِسْتَعَارَتْ' (istaʿārat) = (ona) pożyczyła (od kogoś). Forma X. Rdzeń: ع-و-ر (pożyczanie — rdzeń 'pusty'). Forma IV أَعَارَ = pożyczył (komuś), forma X اِسْتَعَارَ = pożyczył (od kogoś) — 'poprosił o pożyczkę'. Rzeczownik: اِسْتِعَارَة = pożyczka/metafora (w literaturze — 'pożyczanie' znaczenia)."
            },
            {
                "id": "pa_vf8x_12",
                "question": "Masdar formy VIII 'اِجْتَمَعَ' to:",
                "translation": "(ما مصدر اِجْتَمَعَ؟)",
                "options": ["اِجْتِمَاع", "جَمْع", "تَجْمِيع", "تَجَمُّع"],
                "correct": "اِجْتِمَاع",
                "explanation": "Masdar formy VIII: اِفْتِعَال (iftiʿāl). 'اِجْتِمَاع' (ijtimāʿ) = spotkanie/zebranie. Porównaj masdary od tego samego rdzenia: جَمْع (masdar I) = zbieranie/suma, تَجْمِيع (masdar II) = gromadzenie/montaż, تَجَمُّع (masdar V) = gromadzenie się. Każda forma = inny odcień zbierania!"
            },
            {
                "id": "pa_vf8x_13",
                "question": "Masdar formy X 'اِسْتَخْدَمَ' (używał) to:",
                "translation": "(ما مصدر اِسْتَخْدَمَ؟)",
                "options": ["اِسْتِخْدَام", "خِدْمَة", "تَخْدِيم", "خَدَم"],
                "correct": "اِسْتِخْدَام",
                "explanation": "Masdar formy X: اِسْتِفْعَال (istifʿāl). 'اِسْتِخْدَام' (istikhdām) = używanie/zatrudnianie. Rdzeń: خ-د-م (służba). Porównaj: خِدْمَة (forma I — nieregularny masdar) = usługa/służba. Wzorzec masdaru X jest STAŁY i łatwy: zmienić samogłoski w prefiksie اِسْتَـ na اِسْتِـ i dodać długie 'ā' przed ostatnią spółgłoską."
            },
            {
                "id": "pa_vf8x_14",
                "question": "UWAGA na asymilację: od rdzenia و-ص-ل, forma VIII to:",
                "translation": "(ما الوزن الثامن من جذر و-ص-ل؟)",
                "options": ["اِتَّصَلَ (nie: *اِوْتَصَلَ)", "اِوْتَصَلَ", "اِسْتَوْصَلَ", "وَاصَلَ"],
                "correct": "اِتَّصَلَ (nie: *اِوْتَصَلَ)",
                "explanation": "W formie VIII, jeśli pierwsza spółgłoska rdzenia to و, asymiluje się z infixem ت → اِتَّصَلَ (ittaṣala) zamiast teoretycznego *اِوْتَصَلَ. Rdzeń: و-ص-ل (łączenie). Forma I وَصَلَ = dotarł/połączył, VIII اِتَّصَلَ = zadzwonił/skontaktował się. Podobnie: و-ف-ق → اِتَّفَقَ (zgodził się), و-ح-د → اِتَّحَدَ (zjednoczył się). To reguła fonetyczna: و + ت → تّ (podwojone tāʾ)."
            },
            {
                "id": "pa_vf8x_15",
                "question": "Podsumowanie: które formy mają ḍammę (يُـ) na prefiksie czasu teraźniejszego?",
                "translation": "(أي الأوزان لها ضمة على حرف المضارعة؟)",
                "options": ["Tylko II, III i IV", "Tylko I i VII", "Wszystkie formy", "Tylko V i VI"],
                "correct": "Tylko II, III i IV",
                "explanation": "KLUCZOWA reguła: ḍamma (يُـ) na prefiksie czasu teraźniejszego = TYLKO formy II, III, IV: يُفَعِّلُ (II), يُفَاعِلُ (III), يُفْعِلُ (IV). Wszystkie pozostałe formy mają fathę (يَـ): يَفْعَلُ (I), يَتَفَعَّلُ (V), يَتَفَاعَلُ (VI), يَنْفَعِلُ (VII), يَفْتَعِلُ (VIII), يَفْعَلُّ (IX), يَسْتَفْعِلُ (X). Zapamiętaj: II–IV = يُـ, reszta = يَـ."
            }
        ]
    }
]

data.extend(new_categories)

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Verify
items = sum(len(c.get('items',[])) for c in data)
print(f'Now: {len(data)} categories, {items} items')
all_ids = [item['id'] for c in data for item in c['items']]
dupes = {k:v for k,v in Counter(all_ids).items() if v > 1}
if dupes:
    print(f'DUPLICATES: {dupes}')
else:
    print('No duplicate IDs')
for c in new_categories:
    n = len(c['items'])
    print(f'  + {c["key"]} ({n} items)')
