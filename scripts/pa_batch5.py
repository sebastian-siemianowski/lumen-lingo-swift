import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "hollow_verbs",
        "name": "Czasowniki puste (أجوف)",
        "description": "الأفعال الجوفاء - و/ي في وسط الجذر",
        "iconName": "circle.dashed",
        "color": "#22d3ee",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_hv1",
                "question": "هو _____ إلى البيت (On wrócił do domu)",
                "translation": "(On wrócił do domu)",
                "options": ["عَادَ", "عَوَدَ", "أَعَادَ", "عَوَّدَ"],
                "correct": "عَادَ",
                "explanation": "Poprawnie: 'عَادَ' (ʿāda) = wrócił. Rdzeń: ع-و-د (powrót). To czasownik 'pusty' (أجوف) — środkowa spółgłoska rdzenia to و lub ي. W czasie przeszłym و zamienia się na długie ā: عَوَدَ → عَادَ. W polskim te czasowniki nie mają odpowiednika — w arabskim to cała kategoria z własnymi regułami odmiany. Porównaj: أَعَادَ (forma IV) = powtórzył/zwrócił."
            },
            {
                "id": "pa_hv2",
                "question": "Czas teraźniejszy 'قَالَ' (powiedział) to:",
                "translation": "(ما مضارع قَالَ؟)",
                "options": ["يَقُولُ", "يَقْوَلُ", "يَقَالُ", "يُقَوِّلُ"],
                "correct": "يَقُولُ",
                "explanation": "Poprawnie: 'يَقُولُ' (yaqūlu) = mówi. Rdzeń: ق-و-ل (mówienie). W czasie teraźniejszym و wraca jako długie ū między pierwszą a trzecią spółgłoską rdzenia. Wzorzec: يَفْعُلُ → يَقْوُلُ → يَقُولُ (uproszczenie). Reguła: jeśli czas przeszły ma ā (قَالَ), a teraźniejszy ū (يَقُولُ), to و jest spółgłoską środkową. Jeśli teraźniejszy miałby ī — środkowa to ي."
            },
            {
                "id": "pa_hv3",
                "question": "هي _____ في الغرفة (Ona spała w pokoju)",
                "translation": "(Ona spała w pokoju)",
                "options": ["نَامَتْ", "نَوَمَتْ", "أَنَامَتْ", "نَوَّمَتْ"],
                "correct": "نَامَتْ",
                "explanation": "Poprawnie: 'نَامَتْ' (nāmat) = (ona) spała. Rdzeń: ن-و-م (sen). Czas przeszły: نَوَمَ → نَامَ (و → ā). Odmiana żeńska: نَامَتْ (nāmat). Czas teraźniejszy: يَنَامُ (yanāmu) — tu و zamienia się na długie ā (nie ū!), bo to typ فَعِلَ/يَفْعَلُ. Pamiętaj: nie wszystkie czasowniki puste z و mają w teraźniejszym ū — zależy od typu samogłoskowego."
            },
            {
                "id": "pa_hv4",
                "question": "أنا _____ أمس (Ja byłem wczoraj)",
                "translation": "(Ja byłem wczoraj)",
                "options": ["كُنْتُ", "كَانْتُ", "كَوَنْتُ", "كَيَنْتُ"],
                "correct": "كُنْتُ",
                "explanation": "Poprawnie: 'كُنْتُ' (kuntu) = byłem. Rdzeń: ك-و-ن (istnienie). Kluczowa reguła: w czasie przeszłym z końcówkami spółgłoskowymi (-تُ, -تَ, -نَا) samogłoska środkowa (ā) ZANIKA, a na pierwszej spółgłosce pojawia się ḍamma (u) lub kasra (i): كَانَ → كُنْتُ (nie *كَانْتُ!). To jak w polskim: 'być' → 'byłem' (zmiana rdzenia). كُنْتَ (byłeś), كُنْتِ (byłaś), كُنَّا (byliśmy)."
            },
            {
                "id": "pa_hv5",
                "question": "هم _____ الإجابةَ (Oni powiedzieli odpowiedź)",
                "translation": "(Oni powiedzieli odpowiedź)",
                "options": ["قَالُوا", "قَوَلُوا", "قُولُوا", "قَوَّلُوا"],
                "correct": "قَالُوا",
                "explanation": "Poprawnie: 'قَالُوا' (qālū) = (oni) powiedzieli. Rdzeń: ق-و-ل. 3. os. l. mn. r.m. Długie ā zachowane, bo końcówka '-وا' jest samogłoskowa. Reguła: przed końcówkami samogłoskowymi (-َ, -وا, -تا) długie ā się zachowuje: قَالَ, قَالَتْ, قَالُوا. Przed spółgłoskowymi (-تُ, -نَا) zanika: قُلْتُ, قُلْنَا. To kluczowa różnica w odmianie czasowników pustych!"
            },
            {
                "id": "pa_hv6",
                "question": "Czas teraźniejszy 'بَاعَ' (sprzedał) to:",
                "translation": "(ما مضارع بَاعَ؟)",
                "options": ["يَبِيعُ", "يَبُوعُ", "يَبْيَعُ", "يُبَيِّعُ"],
                "correct": "يَبِيعُ",
                "explanation": "Poprawnie: 'يَبِيعُ' (yabīʿu) = sprzedaje. Rdzeń: ب-ي-ع (handel). Środkowa spółgłoska to ي (nie و) — dlatego teraźniejszy ma ī (nie ū). Porównaj: قَالَ/يَقُولُ (من و) vs. بَاعَ/يَبِيعُ (من ي). Oba mają ā w przeszłym, ale różne samogłoski w teraźniejszym. Skąd wiedzieć? Trzeba zapamiętać: بَاعَ ma rdzeń ب-ي-ع. Inna podpowiedź: masdar بَيْع (z ي)."
            },
            {
                "id": "pa_hv7",
                "question": "نحن _____ الأمرَ (My zdecydowaliśmy sprawę) — przeszły z -نَا",
                "translation": "(My zdecydowaliśmy sprawę)",
                "options": ["قُضْنَا", "قَاضَيْنَا", "قَضَيْنَا", "قَاضِينَا"],
                "correct": "قُضْنَا",
                "explanation": "Uwaga: rdzeń ق-ض-ي — to czasownik 'ułomny' (ناقص), nie 'pusty' (أجوف)! 'Pusty' ma و/ي w ŚRODKU. Poprawna forma: 'قَضَيْنَا' (qaḍaynā) = zdecydowaliśmy, nie 'قُضْنَا'. To pytanie-test na rozróżnienie typów nieregularnych. Rdzeń z ي na końcu = ناقص (defective), nie أجوف (hollow). Odmiana jest inna!"
            },
            {
                "id": "pa_hv8",
                "question": "هو _____ السيارةَ (On prowadził samochód)",
                "translation": "(On prowadził samochód)",
                "options": ["سَاقَ", "سَوَقَ", "سَيَّقَ", "أَسَاقَ"],
                "correct": "سَاقَ",
                "explanation": "Poprawnie: 'سَاقَ' (sāqa) = prowadził (pojazd). Rdzeń: س-و-ق (jazda/rynek). و → ā w przeszłym. Teraźniejszy: يَسُوقُ (yasūqu) = prowadzi. Pokrewne słowa: سُوق (sūq) = rynek/bazar, سَائِق (sāʾiq) = kierowca (imiesłów czynny — wzorzec فَاعِل z و → hamza). Uwaga: 'سَوَّقَ' (forma II) = marketingował/handlował (nowoczesne znaczenie: تَسْوِيق = marketing)."
            },
            {
                "id": "pa_hv9",
                "question": "أنتَ _____ جيداً (Ty dobrze spałeś) — z końcówką -تَ",
                "translation": "(Ty dobrze spałeś)",
                "options": ["نِمْتَ", "نَامْتَ", "نُمْتَ", "نَوَمْتَ"],
                "correct": "نِمْتَ",
                "explanation": "Poprawnie: 'نِمْتَ' (nimta) = (ty m.) spałeś. Rdzeń: ن-و-م. Przed końcówką spółgłoskową (-تَ): ā zanika → نِمْتَ (z kasrą). WAŻNE: dlaczego kasra (نِمْتَ), a nie ḍamma (نُمْتَ)? Bo نَامَ to typ فَعِلَ/يَفْعَلُ — kasra z formy فَعِلَ 'zostaje' w odmianie skróconej. Porównaj: قُلْتَ (ḍamma — bo قَالَ to typ فَعَلَ/يَفْعُلُ, ḍamma z يَفْعُلُ)."
            },
            {
                "id": "pa_hv10",
                "question": "هي _____ الطعامَ (Ona spróbowała jedzenia)",
                "translation": "(Ona spróbowała jedzenia)",
                "options": ["ذَاقَتْ", "ذَوَقَتْ", "ذَيَّقَتْ", "تَذَوَّقَتْ"],
                "correct": "ذَاقَتْ",
                "explanation": "Poprawnie: 'ذَاقَتْ' (dhāqat) = (ona) spróbowała. Rdzeń: ذ-و-ق (smakowanie). و → ā w przeszłym. Teraźniejszy: يَذُوقُ (yadhūqu). Porównaj: تَذَوَّقَتْ (forma V) = degustowała/delektowała się — bardziej intensywne. Masdar: ذَوْق (dhawq) = smak/gust (zachowane و!). Masdary czasowników pustych często zachowują و/ي: قَوْل (powiedzenie), بَيْع (sprzedaż), نَوْم (sen)."
            },
            {
                "id": "pa_hv11",
                "question": "هو _____ من الحقيقة (On bał się prawdy)",
                "translation": "(On bał się prawdy)",
                "options": ["خَافَ", "خَوَفَ", "أَخَافَ", "خَوَّفَ"],
                "correct": "خَافَ",
                "explanation": "Poprawnie: 'خَافَ' (khāfa) = bał się. Rdzeń: خ-و-ف (strach). و → ā. Teraźniejszy: يَخَافُ (yakhāfu) = boi się — z fathą (ā), nie ḍammą! To typ فَعِلَ/يَفْعَلُ. Porównaj: أَخَافَ (forma IV) = przestraszył (kogoś), خَوَّفَ (forma II) = zastraszył (intensywniej). Konstrukcja: خَافَ مِنْ (bał się czegoś) — przyimek مِنْ obowiązkowy z tym czasownikiem."
            },
            {
                "id": "pa_hv12",
                "question": "Imiesłów czynny 'قَالَ' (powiedział) to:",
                "translation": "(ما اسم الفاعل من قَالَ؟)",
                "options": ["قَائِل", "قَاوِل", "قَوِيل", "مُقَوِّل"],
                "correct": "قَائِل",
                "explanation": "Poprawnie: 'قَائِل' (qāʾil) = mówiący. Imiesłów czynny formy I: فَاعِل. Z czasownikiem pustym: و/ي zamienia się na HAMZĘ (ء) w imiesłowie: قَاوِل → قَائِل, نَاوِم → نَائِم (śpiący), صَايِم → صَائِم (poszczący). To STAŁA reguła: w imiesłowie czynnym formy I, środkowa و/ي → ء. Wyjątki: bardzo rzadkie."
            },
            {
                "id": "pa_hv13",
                "question": "Strona bierna 'قَالَ' (قيلَ) znaczy:",
                "translation": "(ماذا يعني قِيلَ؟)",
                "options": ["Zostało powiedziane", "Powiedział", "Powie", "Będzie mówił"],
                "correct": "Zostało powiedziane",
                "explanation": "Poprawnie: 'قِيلَ' (qīla) = zostało powiedziane. W stronie biernej czasowników pustych: samogłoska przeszłego zmienia się na kasrę: قَالَ → قِيلَ (a → i, و → ي). Teraźniejszy bierny: يُقَالُ (yuqālu) = mówi się/jest mówione. To jest REGULARNA zmiana w stronie biernej pustych: fatha → kasra w przeszłym, ḍamma na prefiksie + fatha w teraźniejszym."
            },
            {
                "id": "pa_hv14",
                "question": "أنتَ _____ حسناً (Ty zrobiłeś dobrze) — od كَانَ w znaczeniu VIII اِخْتَارَ",
                "translation": "(Ty wybrałeś dobrze)",
                "options": ["اِخْتَرْتَ", "اِخْتَارْتَ", "خِيرْتَ", "خَوَرْتَ"],
                "correct": "اِخْتَرْتَ",
                "explanation": "Poprawnie: 'اِخْتَرْتَ' (ikhtarta) = (ty m.) wybrałeś. Forma VIII od رdzenia خ-ي-ر. Przed końcówką spółgłoskową (-تَ): długie ā zanika: اِخْتَارَ → اِخْتَرْتَ. Reguła ta sama co w formie I: كَانَ → كُنْتَ, قَالَ → قُلْتَ. Ale w formach wyższych (IV, VII, VIII, X) samogłoska skróconej formy to zwykle fatha: اِخْتَرْتَ (nie *اِخْتُرْتَ). Trzeba zapamiętać."
            },
            {
                "id": "pa_hv15",
                "question": "Który z tych czasowników NIE jest pusty (أجوف)?",
                "translation": "(أي فعل ليس أجوف؟)",
                "options": ["كَتَبَ (pisał)", "قَالَ (powiedział)", "نَامَ (spał)", "زَارَ (odwiedził)"],
                "correct": "كَتَبَ (pisał)",
                "explanation": "Czasownik 'كَتَبَ' (kataba) = pisał. Rdzeń: ك-ت-ب — wszystkie trzy spółgłoski są 'zdrowe' (صحيح). Nie ma و/ي w środku rdzenia. Porównaj puste: قَالَ (ق-و-ل), نَامَ (ن-و-م), زَارَ (ز-و-ر = odwiedzanie). Jak rozpoznać pusty? Czas przeszły ma długie ā (lub ī) zamiast zwykłych samogłosek krótkich. Masdar często zachowuje و/ي: قَوْل, نَوْم, زِيَارَة."
            }
        ]
    },
    {
        "key": "defective_verbs",
        "name": "Czasowniki ułomne (ناقص)",
        "description": "الأفعال الناقصة - و/ي في آخر الجذر",
        "iconName": "exclamationmark.triangle",
        "color": "#f472b6",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_dv1",
                "question": "هو _____ إلى المحطة (On szedł na stację)",
                "translation": "(On szedł na stację)",
                "options": ["مَشَى", "مَشَيَ", "مَشَوَ", "أَمْشَى"],
                "correct": "مَشَى",
                "explanation": "Poprawnie: 'مَشَى' (mashā) = szedł/chodził. Rdzeń: م-ش-ي (chodzenie). To czasownik 'ułomny' (ناقص) — ostatnia spółgłoska rdzenia to و lub ي. W 3. os. l. poj. r.m. ي zamienia się na alif maqṣūra (ى): مَشَيَ → مَشَى. W piśmie alif maqṣūra wygląda jak ي bez kropek. W polskim: 'szedł' — regularna odmiana; w arabskim to cała nieregularna klasa."
            },
            {
                "id": "pa_dv2",
                "question": "هي _____ الطعامَ (Ona ugotowała jedzenie) — od طَهَى",
                "translation": "(Ona ugotowała jedzenie)",
                "options": ["طَهَتْ", "طَهَيَتْ", "طَهَاتْ", "طَاهَتْ"],
                "correct": "طَهَتْ",
                "explanation": "Poprawnie: 'طَهَتْ' (ṭahat) = (ona) ugotowała. Rdzeń: ط-ه-و/ي. W r. żeńskim 3. os. ي/و ODPADA przed -تْ: طَهَى → طَهَتْ (nie *طَهَيَتْ). Reguła: w ناقص, ostatnia spółgłoska rdzenia znika w wielu formach odmiany. To jak w polskim: 'iść' → 'szła' (nie *'iśćła'). Porównaj: مَشَتْ (ona chodziła), بَكَتْ (ona płakała), دَعَتْ (ona zaprosiła)."
            },
            {
                "id": "pa_dv3",
                "question": "هم _____ الجائزةَ (Oni otrzymali nagrodę) — من حَصَلَ عَلَى",
                "translation": "(Oni otrzymali nagrodę)",
                "options": ["دَعَوْا", "دَعَيُوا", "دَعَاوُا", "دَعْوُوا"],
                "correct": "دَعَوْا",
                "explanation": "Uwaga: pytanie używa حَصَلَ عَلَى=otrzymali, ale odpowiedzi dotyczą 'دَعَا'=wezwał/zaprosił. Forma 3. os. l. mn. r.m. ناقص z و: دَعَا → دَعَوْا (dawʾū). W l. mn. alif (ا) wraca do و: دَعَا → دَعَوْا. Reguła: alif na końcu ناقص to albo و albo ي w ukryciu — w liczbie mn. wychodzi na jaw. مَشَى → مَشَوْا (mashawʾū) — tu ي → و w l. mn. To skomplikowane!"
            },
            {
                "id": "pa_dv4",
                "question": "Czas teraźniejszy 'مَشَى' (szedł) to:",
                "translation": "(ما مضارع مَشَى؟)",
                "options": ["يَمْشِي", "يَمْشَى", "يَمْشُو", "يُمَشِّي"],
                "correct": "يَمْشِي",
                "explanation": "Poprawnie: 'يَمْشِي' (yamshī) = chodzi/idzie. Rdzeń: م-ش-ي. W teraźniejszym: ي wraca jako pełna spółgłoska z kasrą: يَمْشِي. Końcowe ي nosi kasrę w formie مرفوع (mianownik): يَمْشِي. W formie منصوب (biernik) z أَنْ: يَمْشِيَ. W formie مجزوم (jussive) z لَمْ: لَمْ يَمْشِ (ي odpada!). Trzy różne zakończenia — oto złożoność ناقص!"
            },
            {
                "id": "pa_dv5",
                "question": "أنا _____ اللغةَ العربيةَ (Ja zapomniałem język arabski)",
                "translation": "(Ja zapomniałem język arabski)",
                "options": ["نَسِيتُ", "نَسَيْتُ", "نَسَاتُ", "نُسِيتُ"],
                "correct": "نَسِيتُ",
                "explanation": "Poprawnie: 'نَسِيتُ' (nasītu) = zapomniałem. Rdzeń: ن-س-ي (zapominanie). Typ فَعِلَ (z kasrą). W 1. os. z końcówką -تُ: ostatnia ي zostaje, ale ā zanika: نَسِيَ → نَسِيتُ. Reguła: w ناقص typ فَعِلَ, ي zachowuje się przed końcówkami: نَسِيتُ (ja), نَسِيتَ (ty m.), نَسِيتِ (ty ż.), نَسِينَا (my). Ten typ jest bardziej regularny niż فَعَلَ z ناقص."
            },
            {
                "id": "pa_dv6",
                "question": "هو _____ أخاه (On zaprosił brata)",
                "translation": "(On zaprosił brata)",
                "options": ["دَعَا", "دَعَوَ", "دَعَيَ", "أَدْعَى"],
                "correct": "دَعَا",
                "explanation": "Poprawnie: 'دَعَا' (daʿā) = zaprosił/wezwał. Rdzeń: د-ع-و (wzywanie). و → alif (ا) w 3. os. l. poj. r.m.: دَعَوَ → دَعَا. Skąd wiedzieć, czy و czy ي? Z masdaru: دَعْوَة (z و) = wezwanie/zaproszenie/modlitwa. Inne od و: غَزَا (najechał, غ-ز-و), تَلَا (recytował, ت-ل-و). Od ي: مَشَى (szedł, م-ش-ي), بَكَى (płakał, ب-ك-ي)."
            },
            {
                "id": "pa_dv7",
                "question": "Czas teraźniejszy 'دَعَا' (zaprosił/wezwał) to:",
                "translation": "(ما مضارع دَعَا؟)",
                "options": ["يَدْعُو", "يَدْعَا", "يَدْعِي", "يُدَعِّي"],
                "correct": "يَدْعُو",
                "explanation": "Poprawnie: 'يَدْعُو' (yadʿū) = wzywa/zaprasza. Rdzeń: د-ع-و. W teraźniejszym: و wraca z ḍammą: يَدْعُو. Porównaj z ناقص od ي: يَمْشِي (z kasrą). Reguła: rdzenie z و na końcu → teraźniejszy na -و (يَفْعُو), rdzenie z ي → teraźniejszy na -ي (يَفْعِي). Ale oba w przeszłym mają alif (ا/ى). Masdar pomaga rozróżnić: دَعْوَة (و) vs. مَشْي (ي)."
            },
            {
                "id": "pa_dv8",
                "question": "هي _____ الأطفالَ (Ona zaprosiła dzieci) — od أَعْطَى",
                "translation": "(Ona dała dzieciom)",
                "options": ["أَعْطَتْ", "أَعْطَيَتْ", "أَعْطَاتْ", "عَطَّتْ"],
                "correct": "أَعْطَتْ",
                "explanation": "Poprawnie: 'أَعْطَتْ' (aʿṭat) = (ona) dała. Forma IV od rdzenia ع-ط-و (dawanie). W r. żeńskim: ى odpada przed -تْ: أَعْطَى → أَعْطَتْ. To sama reguła co w formie I: مَشَى → مَشَتْ. Dotyczy WSZYSTKICH form (I–X) z rdzeniem ناقص — ostatnia samogłoska/spółgłoska znika w żeńskim przeszłym. أَعْطَى (dał) to jeden z najczęstszych czasowników arabskich."
            },
            {
                "id": "pa_dv9",
                "question": "Imiesłów czynny 'مَشَى' (szedł) to:",
                "translation": "(ما اسم الفاعل من مَشَى؟)",
                "options": ["مَاشٍ", "مَاشِي", "مَشِّي", "مَاشَى"],
                "correct": "مَاشٍ",
                "explanation": "Poprawnie: 'مَاشٍ' (māshin) = idący/pieszy. Wzorzec فَاعِل od ناقص: مَاشِي → مَاشٍ (z tanwinem, bez ي w nieokreślonej formie mianownika i dopełniacza). Z rodzajnikiem: المَاشِي (al-māshī). Reguła: imiesłów czynny od ناقص traci ي w formie nieokreślonej (مَاشٍ, قَاضٍ, رَاعٍ), ale zachowuje w określonej (المَاشِي, القَاضِي, الرَّاعِي)."
            },
            {
                "id": "pa_dv10",
                "question": "القاضي _____ بالعدل (Sędzia orzekł sprawiedliwie)",
                "translation": "(Sędzia orzekł sprawiedliwie)",
                "options": ["قَضَى", "قَضَيَ", "قَاضَى", "أَقْضَى"],
                "correct": "قَضَى",
                "explanation": "Poprawnie: 'قَضَى' (qaḍā) = orzekł/zdecydował. Rdzeń: ق-ض-ي. 'القَاضِي' = sędzia (imiesłów czynny z الـ → zachowane ي). Zwróć uwagę na pisownię: قَضَى z alif maqṣūra (ى), a دَعَا z alif zwykłą (ا). Reguła: rdzenie z ي → alif maqṣūra (ى): مَشَى, بَكَى, قَضَى. Rdzenie z و → alif zwykła (ا): دَعَا, غَزَا, تَلَا."
            },
            {
                "id": "pa_dv11",
                "question": "لَمْ _____ (Nie szedł) — forma مجزوم od مَشَى",
                "translation": "(لَمْ + مَشَى = ?)",
                "options": ["لَمْ يَمْشِ", "لَمْ يَمْشِي", "لَمْ يَمْشَى", "لَمْ يُمْشِ"],
                "correct": "لَمْ يَمْشِ",
                "explanation": "Poprawnie: 'لَمْ يَمْشِ' (lam yamshi) = nie szedł. W formie مجزوم (jussive, po لَمْ/لَا): ostatnie ي ODPADA! يَمْشِي → يَمْشِ. To KLUCZOWE: 3 formy teraźniejszego ناقص: يَمْشِي (مرفوع = mianownik), يَمْشِيَ (منصوب = biernik, po أَنْ/لَنْ), يَمْشِ (مجزوم = jussive, po لَمْ/لَا). Samo ي pojawia się i znika!"
            },
            {
                "id": "pa_dv12",
                "question": "هل _____ الفيلمَ؟ (Czy obejrzałeś film?)",
                "translation": "(Czy obejrzałeś film?)",
                "options": ["رَأَيْتَ", "رَأَيتَ", "رَأَاتَ", "رُؤِيتَ"],
                "correct": "رَأَيْتَ",
                "explanation": "Poprawnie: 'رَأَيْتَ' (raʾayta) = (ty m.) zobaczyłeś. Rdzeń: ر-أ-ي (widzenie). To czasownik PODWÓJNIE nieregularny: ma hamzę (أ) w środku i ي na końcu (ناقص + مهموز). Odmiana: رَأَى (on widział), رَأَتْ (ona), رَأَيْتُ (ja), رَأَيْتَ (ty m.). Teraźniejszy: يَرَى (yarā) — bardzo skrócony! Jest to jeden z najtrudniejszych czasowników do odmiany."
            },
            {
                "id": "pa_dv13",
                "question": "هو _____ أن يذهبَ (On chciał iść) — od أَرَادَ",
                "translation": "(On chciał iść)",
                "options": ["أَرَادَ", "رَادَ", "رَوَدَ", "تَرَوَّدَ"],
                "correct": "أَرَادَ",
                "explanation": "Uwaga: 'أَرَادَ' (arāda) = chciał — to forma IV (أَفْعَلَ), ale od rdzenia PUSTEGO ر-و-د (chcenie). Więc jest to pusty + forma IV — podwójna komplikacja! Teraźniejszy: يُرِيدُ (yurīdu) = chce. W formie IV pustych: و → ī w teraźniejszym (nie ū). Konstrukcja: أَرَادَ أَنْ + czas. teraź. tryb łączący. Masdar: إِرَادَة (irāda) = wola."
            },
            {
                "id": "pa_dv14",
                "question": "هو _____ شيئاً (On kupił coś) — od اِشْتَرَى",
                "translation": "(On kupił coś)",
                "options": ["اِشْتَرَى", "شَرَى", "شَارَى", "تَشَرَّى"],
                "correct": "اِشْتَرَى",
                "explanation": "Poprawnie: 'اِشْتَرَى' (ishtarā) = kupił. Forma VIII od rdzenia ش-ر-ي (kupowanie). ناقص w formie VIII: ي → alif maqṣūra (ى) w przeszłym. Teraźniejszy: يَشْتَرِي (yashtarī). To jeden z najczęstszych czasowników arabskich. Porównaj: شَرَى (forma I, rzadka) = sprzedał (odwrotne znaczenie! Forma I = sprzedać, VIII = kupić — nietypowe)."
            },
            {
                "id": "pa_dv15",
                "question": "Który z tych czasowników jest ناقص (ułomny)?",
                "translation": "(أي فعل ناقص؟)",
                "options": ["بَنَى (budował)", "كَتَبَ (pisał)", "قَالَ (powiedział)", "أَكَلَ (zjadł)"],
                "correct": "بَنَى (budował)",
                "explanation": "Czasownik 'بَنَى' (banā) = budował. Rdzeń: ب-ن-ي — ي na KOŃCU rdzenia = ناقص. 'كَتَبَ' to صحيح (zdrowy), 'قَالَ' to أجوف (pusty — و w środku), 'أَكَلَ' to مهموز (z hamzą na początku). Jak rozpoznać ناقص? Czas przeszły 3. os. r.m. kończy się na alif (ا/ى): بَنَى, مَشَى, دَعَا. W teraźniejszym na -و lub -ي: يَبْنِي, يَمْشِي, يَدْعُو."
            }
        ]
    },
    {
        "key": "doubled_verbs",
        "name": "Czasowniki podwojone (مضعّف)",
        "description": "الأفعال المضعّفة - تكرار الحرف الأخير",
        "iconName": "repeat",
        "color": "#60a5fa",
        "level": "advanced",
        "items": [
            {
                "id": "pa_dbv1",
                "question": "هو _____ البابَ (On zapukał do drzwi)",
                "translation": "(On zapukał do drzwi)",
                "options": ["دَقَّ", "دَقَقَ", "أَدَقَّ", "دَاقَقَ"],
                "correct": "دَقَّ",
                "explanation": "Poprawnie: 'دَقَّ' (daqqa) = zapukał/zadzwonił. Rdzeń: د-ق-ق — druga i trzecia spółgłoska IDENTYCZNE. To czasownik 'podwojony' (مضعّف). Podwojone spółgłoski piszemy jako jedną literę z szaddą (ّ): دَقَقَ → دَقَّ. Odmiana tych czasowników jest specjalna — w nieokreślonych formach podwojenie zachowane: دَقَّ. W formach z końcówką samogłoskową: rozdzielone: دَقَقْتُ."
            },
            {
                "id": "pa_dbv2",
                "question": "أنا _____ البابَ (Ja zapukałem do drzwi) — odmiana z -تُ",
                "translation": "(Ja zapukałem do drzwi)",
                "options": ["دَقَقْتُ", "دَقَّتُ", "دُقْتُ", "دَقِقْتُ"],
                "correct": "دَقَقْتُ",
                "explanation": "Poprawnie: 'دَقَقْتُ' (daqaqtu) = zapukałem. Przed końcówkami spółgłoskowymi (-تُ, -تَ, -نَا) podwojenie ROZDZIELA SIĘ: دَقَّ → دَقَقْتُ (sukun na pierwszym ق, brak samogłoski). Porównaj z 3. os.: دَقَّ (podwojone, bo brak końcówki). To KLUCZOWA cecha مضعّف: podwojenie zachowane w 3. os. m./ż. przeszłego, rozdzielone z końcówkami osobowymi."
            },
            {
                "id": "pa_dbv3",
                "question": "هو _____ البلادَ (On rządził krajem)",
                "translation": "(On rządził krajem)",
                "options": ["حَلَّ", "حَلَلَ", "حَالَّ", "أَحَلَّ"],
                "correct": "حَلَّ",
                "explanation": "Uwaga: 'حَلَّ' (ḥalla) ma WIELE znaczeń zależnie od rdzenia: ح-ل-ل (rozwiązywanie/pozwalanie). حَلَّ المشكلةَ = rozwiązał problem, حَلَّ في المكان = zamieszkał w miejscu. 'Rządził krajem' to raczej حَكَمَ (ḥakama) — normalny zdrowy czasownik, NIE podwojony! To pytanie-pułapka testujące, czy nie pomylisz حَلَّ z حَكَمَ."
            },
            {
                "id": "pa_dbv4",
                "question": "Czas teraźniejszy 'مَرَّ' (przeszedł) to:",
                "translation": "(ما مضارع مَرَّ؟)",
                "options": ["يَمُرُّ", "يَمْرُرُ", "يَمَرُّ", "يُمَرِّرُ"],
                "correct": "يَمُرُّ",
                "explanation": "Poprawnie: 'يَمُرُّ' (yamurru) = przechodzi/mija. Rdzeń: م-ر-ر. W teraźniejszym podwojenie ZACHOWANE (bo brak końcówki spółgłoskowej): يَمُرُّ. Wzorzec: يَفْعُلُ → يَمْرُرُ → يَمُرُّ (uproszczenie). Porównaj z: يَمُرُّ (on), تَمُرُّ (ona/ty m.), أَمُرُّ (ja), يَمُرُّونَ (oni — tu rozdzielone: يَمُرُّ + ونَ). Ale z لَمْ: لَمْ يَمُرَّ (z fathą zamiast ḍammy)."
            },
            {
                "id": "pa_dbv5",
                "question": "هي _____ الولدَ (Ona objęła chłopca)",
                "translation": "(Ona objęła chłopca)",
                "options": ["ضَمَّتْ", "ضَمَمَتْ", "ضَمَمَّتْ", "أَضَمَّتْ"],
                "correct": "ضَمَّتْ",
                "explanation": "Poprawnie: 'ضَمَّتْ' (ḍammat) = (ona) objęła. Rdzeń: ض-م-م (obejmowanie). 3. os. ż. l. poj.: podwojenie ZACHOWANE + końcówka -تْ (spółgłoskowa, ale 'lekka' — nie wymaga rozdzielenia!). Reguła: -تْ nie rozdziela, bo sukun jest na الTĀ, nie na rdzeniu: ضَمَّ + تْ = ضَمَّتْ. Ale: ضَمَمْتُ (ja), ضَمَمْتَ (ty m.) — tu rozdzielone!"
            },
            {
                "id": "pa_dbv6",
                "question": "هو _____ الحبلَ (On rozciągnął linę)",
                "translation": "(On rozciągnął linę)",
                "options": ["مَدَّ", "مَدَدَ", "مَادَّ", "أَمَدَّ"],
                "correct": "مَدَّ",
                "explanation": "Poprawnie: 'مَدَّ' (madda) = rozciągnął/wyciągnął. Rdzeń: م-د-د. Uwaga: forma 'مَدَّ' to wzorzec فَعَلَ (forma I). 'أَمَدَّ' (forma IV) = dostarczył/zaopatrzył — inne znaczenie! To typowe dla مضعّف: formy wyższe mogą być trudniejsze do rozróżnienia, bo podwojenie maskuje wzorzec. Masdar: مَدّ (madd) = rozciąganie — także termin Koraniczny (tajwid: przedłużanie samogłoski)."
            },
            {
                "id": "pa_dbv7",
                "question": "Tryb rozkazujący 'مَرَّ' (przyszedł) to:",
                "translation": "(ما أمر مَرَّ؟)",
                "options": ["مُرَّ", "اُمْرُرْ", "مَرِّ", "مُرُرْ"],
                "correct": "مُرَّ",
                "explanation": "Poprawnie: 'مُرَّ' (murra!) = przejdź! Tryb rozkazujący od يَمُرُّ: odcinamy prefiks يَـ: يَمُرُّ → مُرُّ → z jussive (مجزوم): مُرَّ (z fathą, bo podwojenie). W rozkazie مضعّف podwojenie zachowane: مُرَّ (przejdź!), ضُمَّ (obejmij!), شُمَّ (w powąchaj!). Alternatywa dialektalna: rozdzielona forma اُمْرُرْ — poprawna, ale rzadka w MSA."
            },
            {
                "id": "pa_dbv8",
                "question": "نحن _____ من هنا (My przeszliśmy tędy)",
                "translation": "(My przeszliśmy tędy)",
                "options": ["مَرَرْنَا", "مَرَّنَا", "مُرْنَا", "مَرِرْنَا"],
                "correct": "مَرَرْنَا",
                "explanation": "Poprawnie: 'مَرَرْنَا' (mararnā) = przeszliśmy. Z końcówką -نَا (spółgłoskową): podwojenie rozdzielone: مَرَّ → مَرَرْنَا. Pierwsza ر ma fathę, druga ma sukun (ْ). Pełna odmiana przeszłego: مَرَّ (on), مَرَّتْ (ona), مَرَرْتُ (ja), مَرَرْتَ (ty m.), مَرَرْتِ (ty ż.), مَرَرْنَا (my), مَرُّوا (oni). W l. mn. r.m. podwojenie wraca: مَرُّوا."
            },
            {
                "id": "pa_dbv9",
                "question": "الطفل _____ (Dziecko się rozchorowało) — شَكَّ",
                "translation": "(Dziecko jest chore — 'czuć ból')",
                "options": ["أَحَسَّ بألم", "حَسَسَ", "حَاسَسَ", "تَحَسَّسَ"],
                "correct": "أَحَسَّ بألم",
                "explanation": "Poprawnie: 'أَحَسَّ بألمٍ' (aḥassa biʾalamin) = poczuł ból. Forma IV od rdzenia ح-س-س (czucie). W formie IV مضعّف: أَفْعَلَ → أَحْسَسَ → أَحَسَّ (podwojenie po hamzie). Porównaj: حَسَّ (forma I) = poczuł (też podwojone), تَحَسَّسَ (forma V) = wyczuwał/badał sondażowo. Masdar formy IV: إِحْسَاس (iḥsās) = czucie/wrażenie — jedno z najpopularniejszych arabskich słów."
            },
            {
                "id": "pa_dbv10",
                "question": "لَمْ _____ (Nie przeszedł) — forma مجزوم من مَرَّ",
                "translation": "(لَمْ + يَمُرُّ = ?)",
                "options": ["لَمْ يَمُرَّ", "لَمْ يَمُرُّ", "لَمْ يَمُرْ", "لَمْ يَمَرَّ"],
                "correct": "لَمْ يَمُرَّ",
                "explanation": "Poprawnie: 'لَمْ يَمُرَّ' (lam yamurra) = nie przeszedł. W مجزوم (po لَمْ): ḍamma → fatha na podwojeniu: يَمُرُّ → يَمُرَّ. Dlaczego fatha, a nie sukun? Bo na podwojeniu NIE MOŻNA postawić sukunu (szadda wymaga samogłoski). Więc ḍamma zmienia się na najlżejszą samogłoskę — fathę. Porównaj zdrowe: لَمْ يَكْتُبْ (sukun na końcu). Podwojone: لَمْ يَمُرَّ (fatha na szaddzie)."
            },
            {
                "id": "pa_dbv11",
                "question": "هو _____ الخطةَ (On zaplanował plan)",
                "translation": "(On zaplanował)",
                "options": ["خَطَّطَ", "خَطَّ", "خَطَطَ", "أَخْطَطَ"],
                "correct": "خَطَّطَ",
                "explanation": "Uwaga: 'خَطَّطَ' (khaṭṭaṭa) = zaplanował — to NIE jest standardowy مضعّف! To forma z 4 spółgłoskami (فَعْلَلَ) lub forma II podwojona. Rdzeń: خ-ط-ط — ale forma خَطَّطَ jest traktowana jak czterospółgłoskowa (quadriliteral). Porównaj: خَطَّ (forma I, مضعّف) = napisał/narysował linię. خَطَّطَ = planował (intensywna). Masdar: تَخْطِيط (takhṭīṭ) = planowanie."
            },
            {
                "id": "pa_dbv12",
                "question": "Masdar 'رَدَّ' (odpowiedział/oddał) to:",
                "translation": "(ما مصدر رَدَّ؟)",
                "options": ["رَدّ", "رَدَد", "رِدَاد", "تَرْدِيد"],
                "correct": "رَدّ",
                "explanation": "Poprawnie: masdar to 'رَدّ' (radd) = odpowiedź/zwrot. Rdzeń: ر-د-د. Masdar مضعّف formy I: فَعْل (faʿl) — identyczny z formą 3. os. m.! رَدَّ (on odpowiedział) = رَدّ (odpowiedź). Kontekst rozstrzyga. Inne masdary مضعّف: حَبّ (miłość, od حَبَّ), مَدّ (wyciąganie). Uwaga: تَرْدِيد (masdar formy II) = powtarzanie/echo."
            },
            {
                "id": "pa_dbv13",
                "question": "هم _____ بالقانون (Oni złamali prawo/prawo) — أَخَلُّوا",
                "translation": "(Oni naruszyli prawo)",
                "options": ["أَخَلُّوا", "خَلُّوا", "خَلَلُوا", "تَخَلَّلُوا"],
                "correct": "أَخَلُّوا",
                "explanation": "Poprawnie: 'أَخَلُّوا' (akhallū) = (oni) naruszyli. Forma IV od rdzenia خ-ل-ل (naruszenie/defekt). W l. mn. z końcówką -وا: podwojenie ZACHOWANE: أَخَلَّ → أَخَلُّوا. Pamiętaj: -وا (oni) to końcówka samogłoskowa → podwojenie się nie rozdziela. Ale: أَخْلَلْتُ (ja naruszyłem) — rozdzielone (końcówka spółgłoskowa). Masdar: إِخْلَال (ikhlāl) = naruszenie."
            },
            {
                "id": "pa_dbv14",
                "question": "هو _____ الماءَ (On wylał wodę)",
                "translation": "(On wylał wodę)",
                "options": ["صَبَّ", "صَبَبَ", "أَصَبَّ", "صَابَّ"],
                "correct": "صَبَّ",
                "explanation": "Poprawnie: 'صَبَّ' (ṣabba) = wylał/nalał. Rdzeń: ص-ب-ب (wylewanie). Teraźniejszy: يَصُبُّ (yaṣubbu) = wylewa/nalewa. Konstrukcja: صَبَّ الماءَ في الكوب = nalał wodę do kubka. Rzeczownik: صَبّ = wylewanie. Powiedzenie: صَبَّ جَامَ غَضَبِه = wylał kielich gniewu (= dał upust złości). Rdzeń produktywny: مَصَبّ (ujście rzeki)."
            },
            {
                "id": "pa_dbv15",
                "question": "Który z tych czasowników jest مضعّف (podwojony)?",
                "translation": "(أي فعل مضعّف؟)",
                "options": ["شَدَّ (ściągnął)", "نَامَ (spał)", "مَشَى (szedł)", "كَتَبَ (pisał)"],
                "correct": "شَدَّ (ściągnął)",
                "explanation": "Czasownik 'شَدَّ' (shadda) = ściągnął/zacisnął. Rdzeń: ش-د-د — druga i trzecia spółgłoska identyczne → مضعّف. نَامَ to أجوف (pusty — و w środku), مَشَى to ناقص (ułomny — ي na końcu), كَتَبَ to صحيح (zdrowy — wszystkie spółgłoski 'normalne'). Jak rozpoznać مضعّف? Szadda (ّ) na ostatniej literze: شَدَّ, مَرَّ, حَبَّ, رَدَّ. W słownikach rdzeń podany jako trzy litery: ش-د-د."
            }
        ]
    },
    {
        "key": "hamzated_verbs",
        "name": "Czasowniki z hamzą (مهموز)",
        "description": "الأفعال المهموزة - همزة في الجذر",
        "iconName": "character.textbox",
        "color": "#818cf8",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_hz1",
                "question": "هو _____ التفاحةَ (On zjadł jabłko)",
                "translation": "(On zjadł jabłko)",
                "options": ["أَكَلَ", "وَكَلَ", "آكَلَ", "أَكَّلَ"],
                "correct": "أَكَلَ",
                "explanation": "Poprawnie: 'أَكَلَ' (akala) = zjadł. Rdzeń: أ-ك-ل (jedzenie). To czasownik مهموز — hamza (أ/ء) jest jedną ze spółgłosek rdzenia. Tu: hamza na POCZĄTKU rdzenia (مهموز الفاء). Hamza jest pełnoprawną spółgłoską arabską, ale ma specjalne reguły pisowni. Teraźniejszy: يَأْكُلُ (yaʾkulu) — hamza zachowana na alif (أ)."
            },
            {
                "id": "pa_hz2",
                "question": "أنا _____ (Ja jem) — czas teraźniejszy از أَكَلَ",
                "translation": "(Ja jem)",
                "options": ["آكُلُ", "أَأْكُلُ", "أُكُلُ", "أَكُلُ"],
                "correct": "آكُلُ",
                "explanation": "Poprawnie: 'آكُلُ' (ākulu) = (ja) jem. Reguła: gdy prefiks أَـ (1. os.) + hamza rdzenia أ: أَأْكُلُ → آكُلُ. Dwie hamzy obok siebie → madda (آ = أَأ). To reguła ortograficzna: hamza + hamza = madda. Porównaj: أَأْخُذُ → آخُذُ (biorę), أَأْمُرُ → آمُرُ (rozkazuję). Ale w 3. os.: يَأْكُلُ (hamza zachowana — bo prefiks to يَـ, nie أَـ)."
            },
            {
                "id": "pa_hz3",
                "question": "هو _____ صديقَه (On zapytał przyjaciela)",
                "translation": "(On zapytał przyjaciela)",
                "options": ["سَأَلَ", "سَالَ", "سَئَلَ", "سَأَّلَ"],
                "correct": "سَأَلَ",
                "explanation": "Poprawnie: 'سَأَلَ' (saʾala) = zapytał. Rdzeń: س-أ-ل (pytanie). مهموز الوسط — hamza w ŚRODKU rdzenia. Teraźniejszy: يَسْأَلُ (yasʾalu). Masdar: سُؤَال (suʾāl) = pytanie — hamza pisze się na و (ؤ) bo poprzedza ją ḍamma. Reguły pisowni hamzy zależą od otoczenia samogłoskowego: أ (po fathie), إ (po kasrze), ؤ (po ḍammie), ء (na linii)."
            },
            {
                "id": "pa_hz4",
                "question": "هو _____ بالعمل (On zaczął pracę)",
                "translation": "(On zaczął pracę)",
                "options": ["بَدَأَ", "بَدَءَ", "بَدَعَ", "أَبْدَأَ"],
                "correct": "بَدَأَ",
                "explanation": "Poprawnie: 'بَدَأَ' (badaʾa) = zaczął. Rdzeń: ب-د-أ (początek). مهموز اللام — hamza na KOŃCU rdzenia. Teraźniejszy: يَبْدَأُ (yabdaʾu). Masdar: بَدْء (badʾ) = początek. Uwaga na pisownię: 'بَدَأَ' (hamza na alif, bo po fathie). Ale: 'كان بَدْءُ' (hamza na و-alif, bo po ḍammie, koniec wyrazu). Pisownia hamzy końcowej zmienia się w zależności od deklinacji!"
            },
            {
                "id": "pa_hz5",
                "question": "Tryb rozkazujący od 'أَكَلَ' to:",
                "translation": "(ما أمر أَكَلَ؟)",
                "options": ["كُلْ", "أُكُلْ", "إِكُلْ", "آكُلْ"],
                "correct": "كُلْ",
                "explanation": "Poprawnie: 'كُلْ!' (kul!) = jedz! Rdzeń: أ-ك-ل. W rozkazie: hamza początkowa ODPADA: *اُؤْكُلْ → uproszczenie → كُلْ. To WYJĄTKOWE — normalnie rozkaz zachowuje rdzeń. Ale hamza początkowa jest 'słaba' i odpada w rozkazie i pewnych formach. Porównaj: أَخَذَ (wziął) → خُذْ (weź!), أَمَرَ (rozkazał) → مُرْ (rozkaż!). Tylko 3 czasowniki z hamzą na początku mają tę skróconą formę."
            },
            {
                "id": "pa_hz6",
                "question": "هي _____ القرآنَ (Ona czytała Koran)",
                "translation": "(Ona czytała Koran)",
                "options": ["قَرَأَتْ", "قَرَءَتْ", "قَرَاتْ", "قَرَّأَتْ"],
                "correct": "قَرَأَتْ",
                "explanation": "Poprawnie: 'قَرَأَتْ' (qaraʾat) = (ona) przeczytała. Rdzeń: ق-ر-أ (czytanie). Hamza na końcu (مهموز اللام). Przed końcówką -تْ: hamza zachowana na alif (أ), bo poprzedza ją fatha. Masdar: قِرَاءَة (qirāʾa) = czytanie (hamza na ي, bo po kasrze/alif). Powiązane: قُرْآن (qurʾān) = Koran (dosł. 'recytacja') — ten sam rdzeń!"
            },
            {
                "id": "pa_hz7",
                "question": "هو _____ أن ينجح (On miał nadzieję, że zdał)",
                "translation": "(On miał nadzieję, że zdał)",
                "options": ["رَجَا", "رَجَأَ", "أَرْجَأَ", "رَجَّأَ"],
                "correct": "رَجَا",
                "explanation": "Uwaga: 'رَجَا' (rajā) — to NIE jest مهموز! Rdzeń: ر-ج-و (nadzieja) — to ناقص (ułomny z و na końcu). Pisownia: رَجَا z alif zwykłą (ا), bo rdzeń ma و. Porównaj z prawdziwym مهموز: بَدَأَ (hamza na alif). Pytanie-test na odróżnianie: alif (ا) na końcu = ناقص, hamza na alif (أ) na końcu = مهموز. To subtelna, ale kluczowa różnica!"
            },
            {
                "id": "pa_hz8",
                "question": "هو _____ المشروعَ (On odroczył projekt) — أَرْجَأَ",
                "translation": "(On odroczył projekt)",
                "options": ["أَرْجَأَ", "رَجَأَ", "رَجَّأَ", "تَرَجَّأَ"],
                "correct": "أَرْجَأَ",
                "explanation": "Poprawnie: 'أَرْجَأَ' (arjaʾa) = odroczył/odsunął. Forma IV od rdzenia ر-ج-أ (odraczanie). TEN rdzeń (ر-ج-أ z hamzą) to inny rdzeń niż ر-ج-و (nadzieja)! Arabski ma homonimy rdzeniowe — rdzenie z różnymi ostatnimi spółgłoskami. Masdar: إِرْجَاء (irjāʾ) = odroczenie. Teraźniejszy: يُرْجِئُ (yurjiʾu). To ważna lekcja: jedna litera różnicy w rdzeniu = zupełnie inne znaczenie."
            },
            {
                "id": "pa_hz9",
                "question": "أنا _____ بالله (Ja wierzę w Boga)",
                "translation": "(Ja wierzę w Boga)",
                "options": ["أُؤْمِنُ", "آمِنُ", "أَأْمِنُ", "أُومِنُ"],
                "correct": "أُؤْمِنُ",
                "explanation": "Poprawnie: 'أُؤْمِنُ' (uʾminu) = wierzę. Forma IV od rdzenia أ-م-ن (bezpieczeństwo/wiara). Prefiks 1. os. أُـ (ḍamma — forma IV) + hamza rdzenia: أُأْمِنُ → أُؤْمِنُ (hamza na و, bo po ḍammie). Porównaj: آمَنَ (āmana) = uwierzył (przeszły — madda: أَأْمَنَ → آمَنَ). مُؤْمِن (muʾmin) = wierzący. إِيمَان (īmān) = wiara (masdar IV). To jeden z najważniejszych rdzeni w arabskim."
            },
            {
                "id": "pa_hz10",
                "question": "Jak piszemy hamzę w 'سُؤَال' (pytanie)?",
                "translation": "(لماذا تُكتب الهمزة على واو في سؤال؟)",
                "options": ["Na و (ؤ) — bo poprzedza ją ḍamma", "Na alif (أ) — zawsze", "Na ي (ئ) — bo po kasrze", "Na linii (ء) — bo na końcu"],
                "correct": "Na و (ؤ) — bo poprzedza ją ḍamma",
                "explanation": "Reguły pisowni hamzy w środku wyrazu: 1) Po kasrze → na ي (ئ): مَسْئَلَة; 2) Po ḍammie → na و (ؤ): سُؤَال; 3) Po fathie → na alif (أ): سَأَلَ; 4) Po sukunie → na odpowiednim nośniku: مَسْأَلَة. Hierarchia: kasra > ḍamma > fatha > sukun. Kasra 'wygrywa' ze wszystkim: jeśli gdziekolwiek jest kasra blisko hamzy → hamza na ي. To najtrudniejsza reguła ortografii arabskiej!"
            },
            {
                "id": "pa_hz11",
                "question": "هو _____ (On przybył/przyszedł)",
                "translation": "(On przybył)",
                "options": ["جَاءَ", "جَأَءَ", "جَائَ", "جَيَأَ"],
                "correct": "جَاءَ",
                "explanation": "Poprawnie: 'جَاءَ' (jāʾa) = przybył/przyszedł. Rdzeń: ج-ي-أ — PODWÓJNIE nieregularny: ي w środku (أجوف) + أ na końcu (مهموز). Bardzo częsty czasownik. Teraźniejszy: يَجِيءُ (yajīʾu). Masdar: مَجِيء (majīʾ) = przybycie. Odmiana: جَاءَ (on), جَاءَتْ (ona), جِئْتُ (ja — uwaga: kasra + ي zanika!), جَاءُوا (oni). Ten czasownik łączy reguły أجوف i مهموز."
            },
            {
                "id": "pa_hz12",
                "question": "أنا _____ أمس (Ja przyszedłem wczoraj) — من جَاءَ",
                "translation": "(Ja przyszedłem wczoraj)",
                "options": ["جِئْتُ", "جَاءْتُ", "جَائْتُ", "جَيَأْتُ"],
                "correct": "جِئْتُ",
                "explanation": "Poprawnie: 'جِئْتُ' (jiʾtu) = przyszedłem. Rdzeń: ج-ي-أ. Przed końcówką -تُ: jak أجوف: długie ā zanika → جِئْتُ (kasra, bo rdzeń z ي). Hamza pisze się na ي (ئ), bo po kasrze. Porównaj: جَاءَ → جِئْتُ, ale: كَانَ → كُنْتُ (ḍamma bo rdzeń z و). Ta forma jest trudna bo trzeba pamiętać obie nieregularności naraz!"
            },
            {
                "id": "pa_hz13",
                "question": "هل _____ الخبرَ؟ (Czy słyszałeś wiadomość?)",
                "translation": "(Czy słyszałeś wiadomość?)",
                "options": ["سَمِعْتَ", "سَأَمْتَ", "سَمَأْتَ", "أَسْمَعْتَ"],
                "correct": "سَمِعْتَ",
                "explanation": "Uwaga — 'سَمِعَ' (samiʿa) = słyszał — to NIE jest مهموز! Rdzeń: س-م-ع — zawiera ع (ʿayn), nie أ (hamza). ع i أ to RÓŻNE spółgłoski! ع jest gardłowa (głęboka), أ jest krtaniowa (lekka). W polskim obie nie istnieją, więc łatwo pomylić. Reguła: jeśli wymowa brzmi jak 'a' na początku = hamza (أ), jeśli jest 'głębokie zaciśnięcie gardła' = ع."
            },
            {
                "id": "pa_hz14",
                "question": "Imiesłów czynny od 'قَرَأَ' (czytał) to:",
                "translation": "(ما اسم الفاعل من قَرَأَ؟)",
                "options": ["قَارِئ", "قَارِء", "قَرِئ", "مُقْرِئ"],
                "correct": "قَارِئ",
                "explanation": "Poprawnie: 'قَارِئ' (qāriʾ) = czytający/recytator. Wzorzec فَاعِل. Hamza na końcu pisze się na ئ (nabira/ي), bo po kasrze (ـِئ). Porównaj: مُقْرِئ (muqriʾ) = nauczyciel recytacji Koranu (imiesłów czynny formy IV). L. mn.: قُرَّاء (qurrāʾ) = recytatorzy — nieregularna l. mn. łamana. Rdzeń ق-ر-أ jest fundamentalny w kulturze arabskiej."
            },
            {
                "id": "pa_hz15",
                "question": "Który z tych wyrazów NIE zawiera hamzy w rdzeniu?",
                "translation": "(أي كلمة لا تحتوي على همزة في الجذر؟)",
                "options": ["عَمِلَ (pracował)", "أَكَلَ (zjadł)", "سَأَلَ (zapytał)", "قَرَأَ (czytał)"],
                "correct": "عَمِلَ (pracował)",
                "explanation": "Czasownik 'عَمِلَ' (ʿamila) = pracował. Rdzeń: ع-م-ل — zaczyna się od ع (ʿayn), NIE od أ (hamzy). ع jest odrębną spółgłoską gardłową. Pozostałe mają hamzę: أَكَلَ (أ-ك-ل, hamza na początku), سَأَلَ (س-أ-ل, hamza w środku), قَرَأَ (ق-ر-أ, hamza na końcu). Zapamiętaj: ع ≠ أ. W transliteracji: ع = ʿ (z haczykiem), أ = ʾ (prosty apostrof)."
            }
        ]
    },
    {
        "key": "passive_voice_arabic",
        "name": "Strona bierna (المبني للمجهول)",
        "description": "بناء الفعل للمجهول في العربية",
        "iconName": "arrow.uturn.backward",
        "color": "#fbbf24",
        "level": "advanced",
        "items": [
            {
                "id": "pa_pva1",
                "question": "_____ الكتابُ (Książka została napisana) — bierna od كَتَبَ",
                "translation": "(Książka została napisana)",
                "options": ["كُتِبَ", "كَتَبَ", "كُتَبَ", "كِتَبَ"],
                "correct": "كُتِبَ",
                "explanation": "Poprawnie: 'كُتِبَ' (kutiba) = została napisana. Strona bierna czas. przeszłego: samogłoski zmieniają się na ḍamma-kasra: فَعَلَ → فُعِلَ. كَتَبَ → كُتِبَ. Nie ma osobnego słowa 'zostać' jak w polskim — bierna wyraża się ZMIANĄ SAMOGŁOSEK w obrębie tego samego rdzenia. To elegancki system: nie trzeba żadnych słów posiłkowych!"
            },
            {
                "id": "pa_pva2",
                "question": "Jak tworzymy stronę bierną czasu teraźniejszego?",
                "translation": "(كيف نبني المضارع المجهول؟)",
                "options": ["يُفْعَلُ — ḍamma na prefiksie + fatha przed końcem", "يَفْعَلُ — bez zmian", "يِفْعِلُ — kasra wszędzie", "يُفْعِلُ — jak forma IV"],
                "correct": "يُفْعَلُ — ḍamma na prefiksie + fatha przed końcem",
                "explanation": "Strona bierna czasu teraźniejszego: يَفْعَلُ → يُفْعَلُ. Zmiany: 1) prefiks يَـ → يُـ (fatha → ḍamma), 2) przed ostatnią spółgłoską: samogłoska → fatha. Np.: يَكْتُبُ → يُكْتَبُ (jest pisany), يَقْرَأُ → يُقْرَأُ (jest czytany). UWAGA: يُفْعِلُ (ḍamma + kasra) to forma IV czynna! يُفْعَلُ (ḍamma + fatha) to bierna I. Subtelna, ale kluczowa różnica."
            },
            {
                "id": "pa_pva3",
                "question": "يُدْرَسُ الموضوعُ في الجامعة — znaczy:",
                "translation": "(Co znaczy to zdanie?)",
                "options": ["Temat jest wykładany na uczelni", "Temat wykładał na uczelni", "Temat będzie wykładany", "Student uczy się na uczelni"],
                "correct": "Temat jest wykładany na uczelni",
                "explanation": "Poprawnie: 'يُدْرَسُ الموضوعُ في الجامعة' = Temat jest wykładany/studiowany na uczelni. يُدْرَسُ = bierna teraźniejsza od يَدْرُسُ (uczy się). الموضوعُ = temat (نائب الفاعل = zastępca podmiotu — w r. mianownikiem, jak podmiot czynny). W stronie biernej: dopełnienie bliższe staje się 'zastępcą podmiotu' — to odpowiednik polskiego podmiotu biernego."
            },
            {
                "id": "pa_pva4",
                "question": "Strona bierna od 'قَالَ' (powiedział — أجوف) to:",
                "translation": "(ما المبني للمجهول من قَالَ؟)",
                "options": ["قِيلَ", "قُوِلَ", "قُيِلَ", "قَائِلَ"],
                "correct": "قِيلَ",
                "explanation": "Poprawnie: 'قِيلَ' (qīla) = zostało powiedziane. W czasownikach pustych bierna ma specjalną formę: nie فُعِلَ, lecz: فِيلَ (z kasrą + ي). Dlaczego? Bo فُوِلَ (*قُوِلَ) jest zbyt trudne fonetycznie → upraszcza się do قِيلَ. Inne: بَاعَ → بِيعَ (zostało sprzedane), زَارَ → زِيرَ (został odwiedzony). Teraźniejszy bierny: يُقَالُ (yuqālu) — z fathą + alif."
            },
            {
                "id": "pa_pva5",
                "question": "فُتِحَ البابُ — poprawne tłumaczenie to:",
                "translation": "(ما ترجمة فُتِحَ الباب؟)",
                "options": ["Drzwi zostały otwarte", "Otworzył drzwi", "Drzwi się otworzyły", "Otwórz drzwi"],
                "correct": "Drzwi zostały otwarte",
                "explanation": "Poprawnie: 'فُتِحَ البابُ' = Drzwi zostały otwarte (dosł. 'Otworzone zostały drzwi'). فُتِحَ = bierna od فَتَحَ. البابُ w mianowniku jako نائب الفاعل (zastępca podmiotu). Porównaj: اِنْفَتَحَ البابُ = Drzwi się otworzyły (forma VII — medialna, nie bierna!). Różnica: فُتِحَ = ktoś je otworzył (stronа bierna — sprawca istnieje, ale nie jest wymieniony); اِنْفَتَحَ = otworzyły się same."
            },
            {
                "id": "pa_pva6",
                "question": "Strona bierna formy II 'عَلَّمَ' (uczył) to:",
                "translation": "(ما المبني للمجهول من عَلَّمَ؟)",
                "options": ["عُلِّمَ", "عُلَّمَ", "عِلِّمَ", "عُوِّلَمَ"],
                "correct": "عُلِّمَ",
                "explanation": "Poprawnie: 'عُلِّمَ' (ʿullima) = został nauczony. Forma II bierna: فُعِّلَ (ḍamma + kasra, szadda zachowana). Wzorzec ten sam co forma I: zmień samogłoski na u-i. Teraźniejszy bierny II: يُعَلَّمُ (yuʿallamu) — ḍamma na prefiksie, fatha przed końcem. Porównaj czynne يُعَلِّمُ (yuʿallimu) z kasrą vs. bierne يُعَلَّمُ (yuʿallamu) z fathą. Minimalna różnica!"
            },
            {
                "id": "pa_pva7",
                "question": "Strona bierna formy IV 'أَرْسَلَ' (wysłał) to:",
                "translation": "(ما المبني للمجهول من أَرْسَلَ؟)",
                "options": ["أُرْسِلَ", "أُرْسَلَ", "إِرْسِلَ", "أَرْسِلَ"],
                "correct": "أُرْسِلَ",
                "explanation": "Poprawnie: 'أُرْسِلَ' (ursila) = został wysłany. Forma IV bierna: أُفْعِلَ (ḍamma na hamzie, kasra przed końcem). Teraźniejszy bierny: يُرْسَلُ (yursalu). UWAGA: czynna forma IV teraźn. يُرْسِلُ (yursilu) vs. bierna يُرْسَلُ (yursalu) — jedyna różnica to kasra↔fatha na przedostatniej pozycji. To NAJTRUDNIEJSZE rozróżnienie w arabskiej stronie biernej!"
            },
            {
                "id": "pa_pva8",
                "question": "يُقَالُ إنَّ... — to wyrażenie znaczy:",
                "translation": "(ماذا يعني يُقَال إنّ؟)",
                "options": ["Mówi się, że...", "On powiedział, że...", "Powiedziano mu, że...", "Będzie mówił, że..."],
                "correct": "Mówi się, że...",
                "explanation": "Poprawnie: 'يُقَالُ إنَّ...' (yuqālu inna...) = Mówi się, że... To jeden z najczęstszych zwrotów biernych w MSA — odpowiednik polskiego bezosobowego 'mówi się'. يُقَالُ to bierna teraźniejsza od يَقُولُ (mówi). Inne popularne bierne bezoosobowe: يُعْتَقَدُ أنَّ (uważa się, że), يُعْرَفُ أنَّ (wiadomo, że), يُذْكَرُ أنَّ (wspomina się, że). Bardzo formalne — typowe dla prasy/akademii."
            },
            {
                "id": "pa_pva9",
                "question": "Strona bierna 'أُكِلَ' jest od:",
                "translation": "(أُكِلَ مبني للمجهول من أي فعل؟)",
                "options": ["أَكَلَ (zjadł)", "أَكَّلَ (nakarmił)", "آكَلَ (karmił)", "تَأَكَّلَ (zjadał)"],
                "correct": "أَكَلَ (zjadł)",
                "explanation": "Poprawnie: 'أُكِلَ' (ukila) = zostało zjedzone — bierna od أَكَلَ (forma I). Rdzeń: أ-ك-ل. Hamza początkowa: فَعَلَ → فُعِلَ: أَكَلَ → أُكِلَ (hamza z ḍammą: أُ). Teraźniejszy bierny: يُؤْكَلُ (yuʾkalu) = jest jedzone. Z hamzą w środku: يُأْكَلُ → يُؤْكَلُ (hamza na و bo po ḍammie). Pisownia hamzy w biernej jest wyzwaniem — trzeba stosować reguły sumuogłoskowe."
            },
            {
                "id": "pa_pva10",
                "question": "سُرِقَتْ سيارتُه — znaczy:",
                "translation": "(ما ترجمة سُرِقَتْ سيارتُه؟)",
                "options": ["Jego samochód został skradziony", "On ukradł samochód", "Samochód się zepsuł", "On sprzedał samochód"],
                "correct": "Jego samochód został skradziony",
                "explanation": "Poprawnie: 'سُرِقَتْ سيارتُهُ' = Jego samochód został skradziony. سُرِقَتْ = bierna od سَرَقَ (ukradł) + końcówka -تْ (r. żeński — bo سيارة jest żeńska). سيارتُهُ = jego samochód (mianownik, bo نائب الفاعل). Szyk: ORZECZENIE + PODMIOT (typowy szyk arabski). Polski: 'Został skradziony samochód' → 'Samochód został skradziony' (szyk swobodny)."
            },
            {
                "id": "pa_pva11",
                "question": "Czy każdy czasownik może mieć stronę bierną?",
                "translation": "(هل كل فعل يُبنى للمجهول؟)",
                "options": ["Nie — tylko czasowniki PRZECHODNIE (متعدّي)", "Tak — każdy", "Nie — tylko forma I", "Tak — ale tylko w przeszłym"],
                "correct": "Nie — tylko czasowniki PRZECHODNIE (متعدّي)",
                "explanation": "Stronę bierną mogą mieć TYLKO czasowniki PRZECHODNIE (متعدّي) — te, które wymagają dopełnienia bliższego (مفعول به). Bo w biernej dopełnienie staje się نائب الفاعل. Np.: كَتَبَ الكتابَ → كُتِبَ الكتابُ (OK — كَتَبَ jest przechodni). Ale: ذَهَبَ (poszedł) — nieprzechodni → NIE MA biernej. Wyjątek: czas. z przyimkiem: نُظِرَ في الأمرِ (sprawa została rozpatrzona)."
            },
            {
                "id": "pa_pva12",
                "question": "Strona bierna formy VIII 'اِسْتُخْدِمَ' jest od:",
                "translation": "(اِسْتُخْدِمَ مبني للمجهول من أي فعل؟)",
                "options": ["اِسْتَخْدَمَ (X — używał)", "اِفْتَخَدَمَ (VIII)", "خَدَمَ (I — służył)", "خَدَّمَ (II)"],
                "correct": "اِسْتَخْدَمَ (X — używał)",
                "explanation": "Poprawnie: 'اِسْتُخْدِمَ' (ustukhdima) = został użyty — bierna od formy X اِسْتَخْدَمَ. Wzorzec bierny X: اِسْتُفْعِلَ (ḍamma na سـ, kasra przed końcem). Teraźniejszy bierny X: يُسْتَخْدَمُ (yustakhdamu). Formy wyższe (V–X) tworzą bierną tak samo: zmień ostatnią samogłoskę przed końcówką na kasrę (przeszły) lub fathę (teraźn.), a pierwszą na ḍammę."
            },
            {
                "id": "pa_pva13",
                "question": "Różnica: فُتِحَ البابُ vs. اِنْفَتَحَ البابُ:",
                "translation": "(الفرق بين فُتِحَ و اِنْفَتَحَ)",
                "options": ["فُتِحَ = ktoś je otworzył (bierna), اِنْفَتَحَ = otworzyły się same (medialna)", "Identyczne znaczenie", "فُتِحَ = przyszłość, اِنْفَتَحَ = przeszłość", "فُتِحَ = l. poj., اِنْفَتَحَ = l. mn."],
                "correct": "فُتِحَ = ktoś je otworzył (bierna), اِنْفَتَحَ = otworzyły się same (medialna)",
                "explanation": "KLUCZOWA różnica: فُتِحَ (bierna) → sprawca ISTNIEJE, ale nie jest wymieniony: 'Drzwi zostały otwarte (przez kogoś)'. اِنْفَتَحَ (forma VII, medialna) → NIE MA sprawcy, czynność dzieje się SAMA: 'Drzwi się otworzyły'. W polskim: 'zostały otwarte' (bierna) vs. 'otworzyły się' (zwrotna/medialna). To odpowiada podziałowi arabskiemu. W języku potocznym forma VII jest częstsza."
            },
            {
                "id": "pa_pva14",
                "question": "نائب الفاعل w zdaniu biernym jest w:",
                "translation": "(ما إعراب نائب الفاعل؟)",
                "options": ["Mianowniku (مرفوع)", "Bierniku (منصوب)", "Dopełniaczu (مجرور)", "Bez odmiany"],
                "correct": "Mianowniku (مرفوع)",
                "explanation": "Poprawnie: نائب الفاعل (zastępca podmiotu) jest w MIANOWNIKU (مرفوع) — tak jak podmiot zdania czynnego. كَتَبَ الطالبُ الدرسَ (czynna: الطالبُ = podmiot مرفوع, الدرسَ = dopełnienie منصوب). كُتِبَ الدرسُ (bierna: الدرسُ = نائب الفاعل مرفوع). Dopełnienie bliższe (منصوب) staje się podmiotem (مرفوع). To jak w polskim: 'Student napisał lekcję' → 'Lekcja została napisana'."
            },
            {
                "id": "pa_pva15",
                "question": "Które zdanie jest poprawną stroną bierną od: كَتَبَ المعلمُ الرسالةَ?",
                "translation": "(ما صيغة المجهول الصحيحة؟)",
                "options": ["كُتِبَتِ الرسالةُ", "كُتِبَ الرسالةَ", "كَتَبَتِ الرسالةُ", "كُتِبَ المعلمُ"],
                "correct": "كُتِبَتِ الرسالةُ",
                "explanation": "Poprawnie: 'كُتِبَتِ الرسالةُ' = List został napisany. 1) كَتَبَ → كُتِبَ (bierna: u-i), 2) +تِ (końcówka żeńska — bo الرسالة jest ż.), 3) الرسالةُ w mianowniku (نائب الفاعل), 4) المعلمُ (nauczyciel) znika — w biernej sprawca NIE jest wymieniony. 'كُتِبَ الرسالةَ' byłoby BŁĘDNE — الرسالةَ w bierniku = wciąż dopełnienie, a brakuje podmiotu. Trzeba zmienić deklinację!"
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
