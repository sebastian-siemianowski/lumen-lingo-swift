import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "proverbs_sayings_ar",
        "name": "Przysłowia i powiedzenia (أمثال وحكم)",
        "description": "الأمثال العربية الشائعة وتراكيبها النحوية",
        "iconName": "quote.bubble",
        "color": "#22d3ee",
        "level": "advanced",
        "items": [
            {
                "id": "pa_ps1",
                "question": "مَنْ جَدَّ وَجَدَ (Man jadda wajada) = :",
                "translation": "(ما معنى من جدّ وجد؟)",
                "options": ["Kto się stara, ten znajdzie (= Kto szuka, ten znajdzie)", "Kto śpi, ten przegrywa", "Kto idzie, ten wraca", "Kto je, ten żyje"],
                "correct": "Kto się stara, ten znajdzie (= Kto szuka, ten znajdzie)",
                "explanation": "مَنْ جَدَّ وَجَدَ = Kto się stara (جَدَّ = był poważny/starał się), ten znajdzie (وَجَدَ = znalazł). Gramatycznie: مَنْ (zaimek warunkowy = ktokolwiek) + جَدَّ (orzeczenie warunku) + وَجَدَ (odpowiedź warunku). Gra słów (جناس): جَدَّ / وَجَدَ — podobne brzmienie, inne znaczenie! Odpowiednik polski: 'Bez pracy nie ma kołaczy.' Jedno z najczęstszych arabskich przysłów."
            },
            {
                "id": "pa_ps2",
                "question": "اَلعِلْمُ نُورٌ وَالجَهْلُ ظَلَامٌ = :",
                "translation": "(ما معنى العلم نور والجهل ظلام؟)",
                "options": ["Wiedza jest światłem, a ignorancja ciemnością", "Światło jest wiedzą", "Ciemność jest jasna", "Ignorancja jest dobra"],
                "correct": "Wiedza jest światłem, a ignorancja ciemnością",
                "explanation": "العلمُ نورٌ والجهلُ ظلامٌ = Wiedza (jest) światłem, a ignorancja (jest) ciemnością. Dwa zdania nominalne (مبتدأ + خبر) połączone واو. ANTYTEZA (طباق): علم↔جهل (wiedza↔ignorancja), نور↔ظلام (światło↔ciemność). Metafora: wiedza=światło, ignorancja=ciemność — UNIWERSALNA w kulturach! W polskim: 'Wiedza to potęga' (Bacon). Arabskie przysłowie — stała wartość kulturowa."
            },
            {
                "id": "pa_ps3",
                "question": "الصَّبْرُ مِفْتَاحُ الفَرَج = :",
                "translation": "(ما معنى الصبر مفتاح الفرج؟)",
                "options": ["Cierpliwość jest kluczem do ulgi/rozwiązania", "Klucz jest cierpliwy", "Ulga jest cierpliwa", "Nie ma cierpliwości"],
                "correct": "Cierpliwość jest kluczem do ulgi/rozwiązania",
                "explanation": "الصبرُ مفتاحُ الفرجِ = Cierpliwość (jest) kluczem ulgi. الصبر = cierpliwość (مبتدأ), مفتاح = klucz (خبر w إضافة), الفرج = ulga/wyjście z kryzysu. Metafora: cierpliwość jako KLUCZ otwierający drzwi ulgi. W islamie: الصبر to cnota centralna (ponad 90 wzmianek w Koranie). Polski odpowiednik: 'Cierpliwość popłaca' / 'Cierpliwością wszystko zwyciężysz.' Fundament arabskiej etyki."
            },
            {
                "id": "pa_ps4",
                "question": "اَلعَيْنُ بَصِيرَةٌ وَاليَدُ قَصِيرَةٌ = :",
                "translation": "(ما معنى العين بصيرة واليد قصيرة؟)",
                "options": ["Oko widzi (co chce), ale ręka jest krótka (= nie stać mnie)", "Oko jest puste i ręka krótka", "Widzę daleko i sięgam daleko", "Nie widzę i nie sięgam"],
                "correct": "Oko widzi (co chce), ale ręka jest krótka (= nie stać mnie)",
                "explanation": "العينُ بصيرةٌ واليدُ قصيرةٌ = Oko przenikliwe, a ręka krótka. Sens: WIDZĘ, co chcę, ale NIE MOGĘ tego mieć (brak pieniędzy/możliwości). Rym: بَصِيرَة / قَصِيرَة (sajʿ = proza rymowana). Antyteza: widzi (dalekosiężne) vs ręka (krótka). W polskim: 'Apetyt rośnie w miarę jedzenia' / 'Chciałbym, ale nie mogę.' Piękna arabska metonimia — oko=pragnienie, ręka=zdolność."
            },
            {
                "id": "pa_ps5",
                "question": "مَنْ حَفَرَ حُفْرَةً لِأَخِيهِ وَقَعَ فِيهَا = :",
                "translation": "(ما معنى من حفر حفرة لأخيه وقع فيها؟)",
                "options": ["Kto kopie dół pod bliźnim, sam weń wpadnie", "Kto kopie, ten buduje", "Kto pomaga bratu, ten jest dobry", "Kto wpada, ten ucieka"],
                "correct": "Kto kopie dół pod bliźnim, sam weń wpadnie",
                "explanation": "من حفرَ حُفْرَةً لأخيه وقعَ فيها = Kto wykopał dół dla brata (bliźniego), ten sam w niego wpadł. جناس: حَفَرَ / حُفْرَة — ten sam rdzeń ح-ف-ر! مَنْ = zaimek warunkowy, أخيه = brat/bliźni (إضافة z zaimkiem). Identyczne w POLSKIM: 'Kto pod kim dołki kopie, sam w nie wpada.' UNIWERSALNE przysłowie — istnieje w większości kultur świata!"
            },
            {
                "id": "pa_ps6",
                "question": "اَلطُّيُورُ عَلَى أَشْكَالِهَا تَقَعُ = :",
                "translation": "(ما معنى الطيور على أشكالها تقع؟)",
                "options": ["Ptaki zbierają się według swoich gatunków (= Ciągnie swój do swego)", "Ptaki spadają z nieba", "Ptaki są różne", "Ptaki latają wysoko"],
                "correct": "Ptaki zbierają się według swoich gatunków (= Ciągnie swój do swego)",
                "explanation": "الطيورُ على أشكالِها تقعُ = Ptaki lądują/zbierają się według swoich form. الطيور = ptaki, أشكالها = ich formy/gatunki, تقع = ląduje/zbiera się. Sens: ludzie o podobnych charakterach CIĄGNĄ do siebie. W polskim: 'Ciągnie swój do swego' / 'Kruk do kruka ciągnie.' Angielski: 'Birds of a feather flock together.' Gramatycznie: تقديم (przesunięcie — na أشكالها) podkreśla sortowanie."
            },
            {
                "id": "pa_ps7",
                "question": "الجَارُ قَبْلَ الدَّار = :",
                "translation": "(ما معنى الجار قبل الدار؟)",
                "options": ["Sąsiad (ważniejszy jest) przed domem (= Ważniejszy sąsiad niż dom)", "Dom przed sąsiadem", "Sąsiad buduje dom", "Dom jest pusty"],
                "correct": "Sąsiad (ważniejszy jest) przed domem (= Ważniejszy sąsiad niż dom)",
                "explanation": "الجارُ قبلَ الدارِ = Sąsiad przed domem. Sens: przy wyborze domu najpierw sprawdź SĄSIADÓW, potem dom. Rym: الجار / الدار (sajʿ). Bardzo ważne w kulturze arabskiej — sąsiedztwo (جِيرَة) to SPOŁECZNY OBOWIĄZEK. Prorok Muhammad: 'مَنْ كان يُؤمنُ بالله... فَلْيُكرِمْ جارَهُ' = Kto wierzy w Boga, niech szanuje sąsiada. W polskim: 'Z dobrym sąsiadem lepiej niż z dalszą rodziną.'"
            },
            {
                "id": "pa_ps8",
                "question": "في العَجَلَةِ النَّدَامَة = :",
                "translation": "(ما معنى في العجلة الندامة؟)",
                "options": ["W pośpiechu jest żal (= Pośpiech to zły doradca)", "Żal jest szybki", "Pośpiech jest dobry", "Nie ma żalu"],
                "correct": "W pośpiechu jest żal (= Pośpiech to zły doradca)",
                "explanation": "في العَجَلةِ الندامةُ = W pośpiechu (jest) żal. العجلة = pośpiech, الندامة = żal/skrucha. Zdanie nominalne z przesunięciem: خبر (في العجلة) przed مبتدأ (الندامة). Rozszerzenie: 'في العَجَلةِ الندامةُ وفي التأنّي السلامةُ' = W pośpiechu żal, w rozwadze bezpieczeństwo (antyteza + sajʿ). Polski: 'Co nagle, to po diable.' / 'Pośpiech to zły doradca.'"
            },
            {
                "id": "pa_ps9",
                "question": "أَنَا وَأَخِي عَلَى ابْنِ عَمِّي، وَأَنَا وَابْنُ عَمِّي عَلَى الغَرِيب = :",
                "translation": "(ما معنى هذا المثل البدوي؟)",
                "options": ["Ja i brat przeciw kuzynowi, ja i kuzyn przeciw obcemu (= lojalność klanowa)", "Wszyscy są przyjaciółmi", "Nie mam brata", "Obcy jest przyjacielem"],
                "correct": "Ja i brat przeciw kuzynowi, ja i kuzyn przeciw obcemu (= lojalność klanowa)",
                "explanation": "Przysłowie beduińskie: lojalność STOPNIOWANA — najbliższa rodzina→klan→plemię→obcy. أخي = mój brat, ابن عمّي = syn mojego stryja (kuzyn), الغريب = obcy. Ilustruje عَصَبِيَّة (ʿaṣabiyya = solidarność klanowa) — klucz do zrozumienia arabskiej kultury. Ibn Chaldun (XIV w.) uczynił عصبيّة CENTRALNYM pojęciem socjologii. W polskim: 'Koszula bliższa ciału niż kaftan.'"
            },
            {
                "id": "pa_ps10",
                "question": "رُبَّ أَخٍ لَكَ لَمْ تَلِدْهُ أُمُّكَ = :",
                "translation": "(ما معنى رب أخ لك لم تلده أمك؟)",
                "options": ["Niejeden brat twój nie urodzony z twej matki (= Przyjaciel jak brat)", "Nie masz brata", "Matka nie rodzi", "Brat jest obcy"],
                "correct": "Niejeden brat twój nie urodzony z twej matki (= Przyjaciel jak brat)",
                "explanation": "رُبَّ أخٍ لك لم تلده أمُّك = Nieraz (jest) brat twój, którego nie urodziła twoja matka. رُبَّ = nieraz/niejeden (partykuła z tanwinem w dopełniaczu). Sens: prawdziwe braterstwo nie wymaga więzów krwi — PRZYJACIEL może być bliższy niż brat. لم تلدْه = nie urodziła go (لم + مجزوم). W polskim: 'Przyjaciel w potrzebie jest jak brat.' Piękna arabska mądrość o przyjaźni."
            },
            {
                "id": "pa_ps11",
                "question": "اِتَّقِ شَرَّ مَنْ أَحْسَنْتَ إِلَيْهِ = :",
                "translation": "(ما معنى اتق شر من أحسنت إليه؟)",
                "options": ["Strzeż się zła tego, komu dobrze uczyniłeś", "Czyń dobro wszystkim", "Nie bój się nikogo", "Zło jest dobre"],
                "correct": "Strzeż się zła tego, komu dobrze uczyniłeś",
                "explanation": "اتَّقِ شرَّ مَنْ أحسنتَ إليه = Strzeż się zła tego, komu wyświadczyłeś dobro. اتَّقِ = strzeż się (rozkaźnik od اتَّقَى VIII forma), شرّ = zło, من = ten, kto (موصولة), أحسنتَ = uczyniłeś dobro. Sens: ludzie są NIEWDZIĘCZNI — kto otrzymał dobro, może odpłacić złem. Cyniczne, ale realistyczne. W polskim: 'Nie czyń dobrze, nie będziesz miał źle' — ta sama pesymistyczna mądrość."
            },
            {
                "id": "pa_ps12",
                "question": "الحَاجَةُ أُمُّ الاِخْتِرَاع = :",
                "translation": "(ما معنى الحاجة أم الاختراع؟)",
                "options": ["Potrzeba jest matką wynalazku", "Wynalazek nie jest potrzebny", "Matka wynalazła coś", "Potrzeba jest ojcem"],
                "correct": "Potrzeba jest matką wynalazku",
                "explanation": "الحاجةُ أمُّ الاختراعِ = Potrzeba (jest) matką wynalazku. الحاجة = potrzeba (مبتدأ), أمّ = matka (خبر), الاختراع = wynalazek (مضاف إليه). IDENTYCZNE w polskim i angielskim ('Necessity is the mother of invention'). Metafora: potrzeba 'rodzi' wynalazek — jak matka dziecko. To jedno z UNIWERSALNYCH przysłów — istniejących prawie identycznie w wielu kulturach."
            },
            {
                "id": "pa_ps13",
                "question": "لِكُلِّ مَقَامٍ مَقَال = :",
                "translation": "(ما معنى لكل مقام مقال؟)",
                "options": ["Na każdą sytuację odpowiednie słowo (= Dostosuj mowę do kontekstu)", "Każdy mówi to samo", "Nie ma co mówić", "Sytuacja jest trudna"],
                "correct": "Na każdą sytuację odpowiednie słowo (= Dostosuj mowę do kontekstu)",
                "explanation": "لكلِّ مقامٍ مقالٌ = Na każdą sytuację (jest) odpowiednie słowo. جناس: مَقَام (sytuacja, od ق-و-م) / مَقَال (powiedzenie, od ق-و-ل) — podobne brzmienie, inne rdzenie! Sens: mów STOSOWNIE do sytuacji. To FUNDAMENT arabskiej retoryki (بلاغة) — مقتضى الحال (wymóg sytuacji). W polskim: 'Mądrego mowa krótka' częściowo, ale bardziej: 'Stosuj słowa do sytuacji.' Elegancki sajʿ."
            },
            {
                "id": "pa_ps14",
                "question": "ما كُلُّ ما يَلْمَعُ ذَهَباً = :",
                "translation": "(ما معنى ما كل ما يلمع ذهباً؟)",
                "options": ["Nie wszystko co błyszczy jest złotem", "Złoto zawsze błyszczy", "Wszystko jest złotem", "Złoto nie błyszczy"],
                "correct": "Nie wszystko co błyszczy jest złotem",
                "explanation": "ما كلُّ ما يلمعُ ذهباً = Nie wszystko, co błyszczy, (jest) złotem. ما (negacja) + كلّ (wszystko) + ما (zaimek względny = co) + يلمعُ (błyszczy) + ذهباً (złotem — خبر w bierniku po ما الحجازية lub حال). IDENTYCZNE w polskim i angielskim ('Not all that glitters is gold' — Shakespeare). Gramatycznie: podwójne ما — różne funkcje (negacja + zaimek względny)."
            },
            {
                "id": "pa_ps15",
                "question": "مَنْ طَلَبَ العُلَا سَهِرَ اللَّيَالِي = :",
                "translation": "(ما معنى من طلب العلا سهر الليالي؟)",
                "options": ["Kto szuka wyżyn, ten czuwa nocami (= Sukces wymaga poświęcenia)", "Kto śpi, ten wygrywa", "Noc jest długa", "Wyżyny są łatwe"],
                "correct": "Kto szuka wyżyn, ten czuwa nocami (= Sukces wymaga poświęcenia)",
                "explanation": "من طلبَ العُلا سهرَ الليالي = Kto poszukiwał wyżyn (العُلا = wysokość/doskonałość), ten czuwał nocami (سهرَ = nie spał). Z wiersza الإمام الشافعي. من = ktokolwiek (شرطية). Sens: SUKCES wymaga POŚWIĘCENIA — bezsenne noce nauki/pracy. Ciąg dalszy: 'ومن طلبَ العلا من غيرِ كدٍّ أضاعَ العمرَ في طلبِ المحال' = Kto szuka wyżyn bez trudu, marnuje życie na szukanie niemożliwego."
            }
        ]
    },
    {
        "key": "common_errors_polish",
        "name": "Częste błędy Polaków (أخطاء شائعة للبولنديين)",
        "description": "الأخطاء الشائعة التي يرتكبها المتعلمون البولنديون",
        "iconName": "exclamationmark.triangle",
        "color": "#f472b6",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_ce1",
                "question": "Polski uczeń napisał: *'أنا يكون سعيد' — co jest BŁĘDNE?",
                "translation": "(ما الخطأ في أنا يكون سعيد؟)",
                "options": ["Zbędne 'يكون' — po arabsku: أنا سعيدٌ (bez 'jest')", "Brak podmiotu", "Złe słowo 'سعيد'", "Poprawne zdanie"],
                "correct": "Zbędne 'يكون' — po arabsku: أنا سعيدٌ (bez 'jest')",
                "explanation": "NAJCZĘSTSZY błąd Polaków: dodawanie 'jest' (يكون) w zdaniach nominalnych. W polskim: 'Jestem szczęśliwy' — WYMAGA 'jest'. W arabskim: 'أنا سعيدٌ' — BEZ يكون. Zdanie nominalne (جملة اسمية) w teraźniejszości NIE wymaga łącznika (copula). كانَ/يكونُ używaj TYLKO: 1) W przeszłości: كنتُ سعيداً, 2) W przyszłości: سأكونُ سعيداً, 3) Z حالة (stanem). W teraźniejszości: ZERO!"
            },
            {
                "id": "pa_ce2",
                "question": "Polski uczeń napisał: *'الكتاب الجميل الكبير' (o JEDNEJ książce) — co jest BŁĘDNE?",
                "translation": "(ما الخطأ في الكتاب الجميل الكبير؟)",
                "options": ["Nic! — to POPRAWNE (oba przymiotniki po rzeczowniku)", "Powinno być: الجميل الكتاب الكبير", "Powinno być: الكبير الجميل الكتاب", "Powinno być: الكتاب الكبير والجميل — obowiązkowe واو"],
                "correct": "Nic! — to POPRAWNE (oba przymiotniki po rzeczowniku)",
                "explanation": "To POPRAWNE! W arabskim: rzeczownik + przymiotnik + przymiotnik (bez واو). الكتابُ الجميلُ الكبيرُ = piękna duża książka. Polak może mylić z polskim: 'piękna, duża książka' (przymiotniki PRZED rzeczownikiem). PRAWDZIWY częsty błąd: *'جميل كبير كتاب' (szyk polski!). Arabski szyk: RZECZOWNIK + przymiotnik(i). Przymiotnik ZAWSZE PO rzeczowniku — odwrotnie niż po polsku."
            },
            {
                "id": "pa_ce3",
                "question": "Polski uczeń powiedział: *'هُوَ طَوِيل' o KOBIECIE — co jest BŁĘDNE?",
                "translation": "(ما الخطأ في هو طويل عن امرأة؟)",
                "options": ["Złe rodzaje: powinno być هِيَ طَوِيلَة (żeński zaimek + przymiotnik)", "Nic — poprawne", "Powinno być: أنا طويل", "Powinno być: هم طوال"],
                "correct": "Złe rodzaje: powinno być هِيَ طَوِيلَة (żeński zaimek + przymiotnik)",
                "explanation": "DRUGI najczęstszy błąd: brak zgodności rodzajowej. W polskim: 'Ona jest wysoka' — rodzaj jasny. W arabskim: هِيَ (ona, nie هو!) + طَوِيلَة (żeńska forma, nie طويل!). PODWÓJNA zgodność: 1) Zaimek (هي/هو), 2) Przymiotnik (طويلة/طويل). W polskim: przymiotnik ma rodzaj, ale Polacy ZAPOMINAJĄ o arabskim ta marbuṭa (ة). Reguła: +ة = żeński przymiotnik (z wyjątkami)."
            },
            {
                "id": "pa_ce4",
                "question": "Polski uczeń napisał: *'أنا ذهبتُ إلى المدرسة' — to jest:",
                "translation": "(هل أنا ذهبتُ صحيح؟)",
                "options": ["Poprawne, ale ZBĘDNE أنا — wystarczy ذَهَبْتُ (końcówka -تُ = ja)", "Błędne — trzeba أنا", "Błędne — trzeba نحن", "Błędne — trzeba هو"],
                "correct": "Poprawne, ale ZBĘDNE أنا — wystarczy ذَهَبْتُ (końcówka -تُ = ja)",
                "explanation": "أنا ذهبتُ = NIE BŁĄD, ale ZBĘDNE. W arabskim: ذهبتُ (poszedłem) — końcówka -تُ ZAWIERA podmiot (ja). Dodanie أنا = emfaza ('TO JA poszedłem, nie ktoś inny'). W polskim: 'Ja poszedłem' — 'ja' jest opcjonalne, ale naturalne. Polacy NADUŻYWAJĄ أنا/أنتَ/هُوَ — bo w polskim zaimek jest częściej wyrażany. Reguła: w arabskim zaimek osobowy tylko dla EMFAZY."
            },
            {
                "id": "pa_ce5",
                "question": "Polski uczeń wymówił: *'كَتَبَ' ze słabym ك — Arabowie usłyszą:",
                "translation": "(ماذا يسمع العربي إذا نطق البولندي ك ضعيفة؟)",
                "options": ["Prawdopodobnie poprawnie — ale ق vs ك to KRYTYCZNA różnica", "Nic — nie ma różnicy", "Tylko śmiech", "Złość"],
                "correct": "Prawdopodobnie poprawnie — ale ق vs ك to KRYTYCZNA różnica",
                "explanation": "Polacy: fonetyczne PUŁAPKI: 1) ق (qāf, gardłowe) vs ك (kāf, podniebienne): قَلْب (serce) vs كَلْب (pies)! 2) ح (gardłowe bezgłośne) vs هـ (krtaniowe): حَرَام (zabronione) vs هَرَم (piramida). 3) ع (gardłowe) — nie istnieje w polskim: عَيْن (oko) vs *إين. 4) ط/ص/ض/ظ (emfatyczne) — brak w polskim. Polacy muszą ĆWICZYĆ gardło — arabska fonetyka to inne mięśnie niż polskie!"
            },
            {
                "id": "pa_ce6",
                "question": "Polski uczeń napisał: *'في شارع' (na ulicy) zamiast:",
                "translation": "(كيف نقول في الشارع بشكل صحيح؟)",
                "options": ["في الشَّارِعِ (z الـ — bo konkretna/znana ulica)", "في شارعٍ (poprawne)", "على شارعِ", "من شارعِ"],
                "correct": "في الشَّارِعِ (z الـ — bo konkretna/znana ulica)",
                "explanation": "TRZECI częsty błąd: brak/nadmiar الـ (rodzajnika określonego). W polskim: 'na ulicy' — BEZ rodzajnika (polki nie ma rodzajnika). W arabskim: في الشارعِ (w TEJ ulicy — określona) vs في شارعٍ (w JAKIEJŚ ulicy — nieokreślona). Polacy nie widzą tej różnicy — bo polski nie ma rodzajników! Reguła: jeśli mówisz o KONKRETNEJ/ZNANEJ rzeczy: الـ. Jeśli o JAKIEJŚ: tanwin. Jak angielskie the/a."
            },
            {
                "id": "pa_ce7",
                "question": "Polski uczeń napisał: *'المعلم يذهب إلى المدرسة' (nauczyciel idzie) — szyk:",
                "translation": "(هل الترتيب صحيح: المعلم يذهب؟)",
                "options": ["Poprawne (zdanie nominalne), ALE w zdaniu czasownikowym: يذهبُ المعلمُ", "Błędne — jedyty poprawny szyk", "Nie ma różnicy", "Powinno być: يذهب إلى المعلم"],
                "correct": "Poprawne (zdanie nominalne), ALE w zdaniu czasownikowym: يذهبُ المعلمُ",
                "explanation": "OBA szyku poprawne, ale RÓŻNE konstrukcje: 1) المعلمُ يذهبُ = zdanie NOMINALNE (tematyczne: Nauczyciel — on idzie), 2) يذهبُ المعلمُ = zdanie CZASOWNIKOWE (czynnościowe: Idzie nauczyciel). Polacy preferują szyk SVO (podmiot+orzeczenie+dopełnienie) — bo polski jest SVO. Arabski preferuje VSO (orzeczenie+podmiot+dopełnienie) w zdaniach czasownikowych. Różnica: emfaza i fokus."
            },
            {
                "id": "pa_ce8",
                "question": "Polski uczeń napisał: *'عندي أخ واحد و أخت واحدة' — błąd w:",
                "translation": "(هل هناك خطأ في عندي أخ واحد؟)",
                "options": ["Poprawne! — ale Polacy często zapominają odwrócić rodzaj z liczbami 3-10", "Całkowicie błędne", "أخ powinno być أخي", "واحد powinno być اثنان"],
                "correct": "Poprawne! — ale Polacy często zapominają odwrócić rodzaj z liczbami 3-10",
                "explanation": "To zdanie jest POPRAWNE (1 = واحد/واحدة zgadza się z rodzajem). ALE PUŁAPKA: z liczbami 3-10 rodzaj jest ODWRÓCONY! ثلاثةُ أولادٍ (3 chłopców — ة na liczbie!) vs ثلاثُ بناتٍ (3 dziewcząt — BEZ ة!). Liczba męska → ة, liczba żeńska → bez ة. To ABSOLUTNIE NIEINTUICYJNE dla Polaków! Najtrudniejsza reguła arabskiej gramatyki dla Europejczyków."
            },
            {
                "id": "pa_ce9",
                "question": "Polski uczeń w dialogu pyta: 'كَيْفَ حالَكَ؟' kobiecie — błąd:",
                "translation": "(ما الخطأ في كيف حالَكَ لامرأة؟)",
                "options": ["Powinno być: كَيْفَ حالُكِ (zaimek ـكِ dla kobiety, nie ـكَ)", "Nic — poprawne", "Powinno być: كيف حالهم", "Powinno być: كيف حالنا"],
                "correct": "Powinno być: كَيْفَ حالُكِ (zaimek ـكِ dla kobiety, nie ـكَ)",
                "explanation": "TYPOWY BŁĄD: brak rozróżnienia ـكَ (ty m.) vs ـكِ (ty ż.) w mowie. W polskim: 'Jak się masz?' — JEDNO pytanie bez rodzaju! W arabskim: كيفَ حالُكَ? (do mężczyzny) vs كيفَ حالُكِ? (do kobiety). Zaimki WSZYSTKIE mają rodzaj: -كَ/-كِ (ty), -هُ/-هَا (on/ona), -كُمْ/-كُنَّ (wy m./ż.), -هُمْ/-هُنَّ (oni/one). 12 form zamiast polskich 6! Polacy to lekceważą."
            },
            {
                "id": "pa_ce10",
                "question": "Polski uczeń pisze od PRAWEJ, ale cyfry:",
                "translation": "(كيف تُكتب الأرقام في العربية؟)",
                "options": ["Od LEWEJ do prawej (jak w polskim!) — arabski tekst od prawej, cyfry od lewej", "Od prawej", "Od góry do dołu", "Losowo"],
                "correct": "Od LEWEJ do prawej (jak w polskim!) — arabski tekst od prawej, cyfry od lewej",
                "explanation": "ZASKAKUJĄCE: arabski tekst pisze się od PRAWEJ do LEWEJ (←), ale CYFRY pisze się od LEWEJ do PRAWEJ (→)! ١٢٣ = 123 (czytasz od lewej: sto dwadzieścia trzy). To ODWROTNY kierunek w jednym zdaniu! Polacy: przyzwyczajeni do jednego kierunku (←→). Przy pisaniu mieszanym (tekst + cyfry): mózg musi 'przełączać' kierunek. To wymaga praktyki — ale staje się naturalne."
            },
            {
                "id": "pa_ce11",
                "question": "Polski uczeń mówi: *'أريدُ أنْ أذهبُ' — błąd w:",
                "translation": "(ما الخطأ في أريد أن أذهبُ؟)",
                "options": ["Końcówka أذهبُ — po أنْ musi być أذهبَ (منصوب, nie مرفوع)", "Nic — poprawne", "أريد powinno być أحب", "أن powinno być إن"],
                "correct": "Końcówka أذهبُ — po أنْ musi być أذهبَ (منصوب, nie مرفوع)",
                "explanation": "CZĘSTY BŁĄD ODMIANY: أنْ + czas teraźniejszy wymaga منصوب (biernika): أنْ أذهبَ (fatha, nie ḍamma!). Polacy: nie słyszą różnicy między -u a -a na końcu. Reguła: أنْ/لَنْ/كَيْ/حَتَّى → منصوب (أذهبَ). لَمْ/لا الناهية → مجزوم (أذهبْ). Brak partykuły → مرفوع (أذهبُ). Trzy tryby — trzy końcówki — Polak musi ćwiczyć UCHO."
            },
            {
                "id": "pa_ce12",
                "question": "Polski uczeń pisze: *'ش' zamiast 'س' — to zmienia:",
                "translation": "(ما الفرق بين ش و س في الكلمات؟)",
                "options": ["Kompletnie znaczenie: شَمْس (słońce) vs سَمْس (*nonsens), شَرَبَ (pił) vs سَرَبَ (sączył)", "Nic — podobne", "Tylko wymowę", "Tylko pisownię"],
                "correct": "Kompletnie znaczenie: شَمْس (słońce) vs سَمْس (*nonsens), شَرَبَ (pił) vs سَرَبَ (sączył)",
                "explanation": "PISOWNIA: ش (shin = sz) vs س (sīn = s) — RÓŻNE litery, RÓŻNE znaczenia! شَمْس (shams = słońce) vs سَمْس (*nonsens). شَكَلَ (kształtował) vs سَكَلَ (*nonsens). W polskim: 'sz' i 's' to jasno RÓŻNE dźwięki. Ale w PISANIU arabskim: ش = س + 3 kropki nad. Polacy mogą POMYLIĆ pisownię. Inne pary: ذ/د, ظ/ط, ث/ت — różnice w kropkach = różne litery = różne słowa!"
            },
            {
                "id": "pa_ce13",
                "question": "Polski uczeń mówi: *'أنا مِنْ بولندا' zamiast:",
                "translation": "(كيف نقول أنا من بولندا بالعربية؟)",
                "options": ["أنا مِنْ بُولَنْدَا / أنا بُولَنْدِيّ — oba poprawne (! to zdanie jest AKCEPTOWALNE)", "Tylko أنا بولندي", "Tylko أنا من وارسو", "Trzeba powiedzieć أنا أوروبي"],
                "correct": "أنا مِنْ بُولَنْدَا / أنا بُولَنْدِيّ — oba poprawne (! to zdanie jest AKCEPTOWALNE)",
                "explanation": "To POPRAWNE! أنا من بولندا = Jestem z Polski. بُولَندا lub بُولُونْيَا — oba używane w MSA. Nisba: بُولَنْدِيّ (polski/Polak). ALE: częsty błąd POLSKO-SPECYFICZNY: Polacy mówią *'بولسكا' (Polska!) zamiast بولندا/بولونيا. MSA: بُولَندا (od 'Poland'). بولونيا (od 'Polonia'). NIE: *بولسكا. Nazwy krajów w MSA często pochodzą z angielskiego/francuskiego, nie z języka rodzimego."
            },
            {
                "id": "pa_ce14",
                "question": "Polski uczeń używa إضافة: *'كِتَاب الطَّالِبِ الجَدِيد' — 'nowy' odnosi się do:",
                "translation": "(الجديد يعود إلى الكتاب أم الطالب؟)",
                "options": ["NIEJEDNOZNACZNE! Może = nowa książka studenta LUB książka nowego studenta", "Zawsze do كتاب", "Zawsze do طالب", "Do obu jednocześnie"],
                "correct": "NIEJEDNOZNACZNE! Może = nowa książka studenta LUB książka nowego studenta",
                "explanation": "PUŁAPKA إضافة: كتابُ الطالبِ الجديدُ — الجديد grammatycznie pasuje do OBU! 1) Jeśli الجديد = صفة dla كتاب → nowa książka studenta (الجديد w mianowniku jak كتاب). 2) Jeśli الجديد = صفة dla الطالب → książka nowego studenta (الجديد w dopełniaczu jak الطالب). Rozwiązanie: kontekst lub przeformułowanie: الكتاب الجديد للطالب (nowa książka studenta — jednoznaczne). Polacy: nie mają tego problemu, bo przymiotnik PRZED rzeczownikiem."
            },
            {
                "id": "pa_ce15",
                "question": "NAJWAŻNIEJSZA rada dla polskiego ucznia arabskiego:",
                "translation": "(ما أهم نصيحة لطالب بولندي؟)",
                "options": ["Myśl po ARABSKU, nie tłumacz z polskiego — szyk i logika są ODMIENNE", "Ucz się tylko słówek", "Ignoruj gramatykę", "Ucz się tylko dialektu"],
                "correct": "Myśl po ARABSKU, nie tłumacz z polskiego — szyk i logika są ODMIENNE",
                "explanation": "KLUCZOWA rada: NIE TŁUMACZ dosłownie z polskiego! Arabski ma: 1) INNY szyk (VSO vs SVO), 2) INNĄ logikę zdania (nominalne bez 'jest'), 3) RODZAJ GRAMATYCZNY wszędzie (zaimki, przymiotniki, czasowniki), 4) SYSTEM PRZYPADKÓW (3 × 2 — określony/nieokreślony), 5) RDZEŃ trójliterowy (nie ma odpowiednika w polskim). Polak musi 'przełączyć mózg' — jak z jazdy lewostronną. To NAJTRUDNIEJSZE, ale NAJWAŻNIEJSZE."
            }
        ]
    },
    {
        "key": "false_friends_ar",
        "name": "Fałszywi przyjaciele (أصدقاء مزيفون)",
        "description": "كلمات متشابهة بمعانٍ مختلفة بين العربية والبولندية",
        "iconName": "person.2.slash",
        "color": "#60a5fa",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_ff1",
                "question": "Arabskie كَلْب (kalb) brzmi jak polskie 'kalb/kolba', ale znaczy:",
                "translation": "(ما معنى كلب بالعربية؟)",
                "options": ["Pies (nie kolba!)", "Serce", "Duży", "Klucz"],
                "correct": "Pies (nie kolba!)",
                "explanation": "كَلْب (kalb) = PIES — nie mylić z polskim 'kolba'! A قَلْب (qalb) = SERCE — prawie identyczne brzmienie, ZUPEŁNIE inne znaczenie! Różnica: ك (kāf) vs ق (qāf) — tylko punkt artykulacji (podniebienne vs gardłowe). Dla Polaka: oba brzmią jak 'kalb'. PUŁAPKA nr 1 arabskiej fonetyki dla Polaków. Trzeba ćwiczyć ق — głębsze w gardle niż ك."
            },
            {
                "id": "pa_ff2",
                "question": "Arabskie حَرَام (ḥarām) NIE znaczy:",
                "translation": "(ما لا يعني حرام؟)",
                "options": ["Harem (to حَرِيم!)", "Zabronione (religijnie)", "Grzech", "Nienaruszalne"],
                "correct": "Harem (to حَرِيم!)",
                "explanation": "حَرَام (ḥarām) = zabronione/grzeszne (termin islamski). حَرِيم (ḥarīm) = harem (kobieca część domu). Oba od ح-ر-م (chronić/zakazać). W polskim 'harem' → من حَرِيم. Ale Polacy słysząc 'haram' myślą o haremie — BŁĄD! حرام = zakazane jedzenie/zachowanie (np. wieprzowina = حرام). Przeciwieństwo: حَلَال (ḥalāl) = dozwolone. To fundamentalna para pojęć islamskich."
            },
            {
                "id": "pa_ff3",
                "question": "Arabskie سَلَام (salām) = pokój. A polskie 'salam' (potoczne pozdrowienie) pochodzi od:",
                "translation": "(من أين الكلمة البولندية سلام؟)",
                "options": ["السَّلَامُ عَلَيْكُمْ (Pokój z wami — arabskie pozdrowienie)", "Języka łacińskiego", "Języka tureckiego bezpośrednio", "Nie ma związku"],
                "correct": "السَّلَامُ عَلَيْكُمْ (Pokój z wami — arabskie pozdrowienie)",
                "explanation": "Polskie potoczne 'salam' (cześć/hej) pochodzi od arabskiego السَّلَامُ عَلَيْكُمْ (as-salāmu ʿalaykum) = Pokój z wami. Droga: arabski → turecki (Imperium Osmańskie) → polskie kontakty z Turkami (XVII w.). W polskim: 'salam' = żartobliwe/potoczne pozdrowienie. W arabskim: poważ ne pozdrowienie formalne i religijne. Odpowiedź: وَعَلَيْكُمُ السَّلَامُ (I z wami pokój)."
            },
            {
                "id": "pa_ff4",
                "question": "Arabskie أَلْكُحُول (al-kuḥūl) = alkohol. Ale oryginalne arabskie znaczenie to:",
                "translation": "(ما المعنى الأصلي لكلمة الكُحول؟)",
                "options": ["Proszek do oczu (kohl/antimony — kosmetyk oczny)", "Napój alkoholowy", "Whisky", "Wino"],
                "correct": "Proszek do oczu (kohl/antimony — kosmetyk oczny)",
                "explanation": "الكُحُول (al-kuḥūl) oryginalnie = proszek do oczu (الكُحْل = kohl/antimony — czarny proszek do malowania oczu). Droga: arabscy alchemicy destylowali substancje i nazywali czysty destylat الكُحُول → europejskie 'alcohol'. Jedno z WIELU arabskich słów w polskim: algorytm (الخوارزمي), algebra (الجبر), cyfra (صِفر), kawa (قهوة), bawełna (قُطْن), magazyn (مَخْزَن), admiral (أمير البحر)."
            },
            {
                "id": "pa_ff5",
                "question": "Polskie 'algebra' pochodzi od arabskiego:",
                "translation": "(من أين كلمة algebra البولندية؟)",
                "options": ["الجَبْر (al-jabr = łączenie/uzupełnianie — od al-Chwarizmiego)", "الجَبَل (al-jabal = góra)", "الجَبِين (al-jabīn = czoło)", "الجَبَر (al-jabar = tyran)"],
                "correct": "الجَبْر (al-jabr = łączenie/uzupełnianie — od al-Chwarizmiego)",
                "explanation": "Algebra ← الجَبْر (al-jabr) = łączenie/uzupełnianie. Od tytułu dzieła al-Chwarizmiego (IX w.): 'كتاب الجبر والمقابلة' = Księga uzupełniania i równoważenia. الجَبْر dosłownie = nastawianie kości (stąd: ortopeda = مُجَبِّر). Arabscy matematycy utworzyli PODSTAWY algebry, algorytmów (الخوارزمي → algorytm), systemu decymalnego. Połowa polskiej terminologii matematycznej ma arabskie korzenie!"
            },
            {
                "id": "pa_ff6",
                "question": "Arabskie دِين (dīn) = religia. Ale polskie 'dżin' (gin) pochodzi od:",
                "translation": "(من أين كلمة gin البولندية؟)",
                "options": ["جِنّ (jinn = duchy/istoty nadprzyrodzone — NIE od دين!)", "دين (religia)", "جَنَّة (raj)", "جُنُون (szaleństwo)"],
                "correct": "جِنّ (jinn = duchy/istoty nadprzyrodzone — NIE od دين!)",
                "explanation": "UWAGA: دِين (dīn = religia) ≠ جِنّ (jinn = dżin/duchy). Polskie 'dżin' od arabskiego جِنّ (istoty nadprzyrodzone z Koranu i 1001 nocy — lampa Aladyna!). جِنّ od root ج-ن-ن = ukrywać (niewidzialne istoty). دِين od root د-ي-ن = sądzić/religijnie wierzyć. Zupełnie INNE rdzenie, INNE znaczenia. Polacy mogą mylić ze względu na podobne brzmienie dla niewprawnego ucha."
            },
            {
                "id": "pa_ff7",
                "question": "Arabskie نَهَار (nahār) = :",
                "translation": "(ما معنى نهار؟)",
                "options": ["Dzień (pora jasna) — NIE 'nahar' (polski slang)", "Noc", "Rzeka", "Wiatr"],
                "correct": "Dzień (pora jasna) — NIE 'nahar' (polski slang)",
                "explanation": "نَهَار (nahār) = dzień (pora jasna, przeciwieństwo لَيْل = noc). Nie mylić z: نَهْر (nahr) = rzeka (inna samogłoska, inne znaczenie!). Porównaj: نهار = dzień (a-ā), نهر = rzeka (a-brak). Jedna samogłoska zmienia WSZYSTKO. W polskim: brak takich par. W arabskim: system korzeniowy (ن-ه-ر = płynąć → rzeka) vs (ن-ه-ر = jasność → dzień) — TEN SAM rdzeń, ALE inne formy!"
            },
            {
                "id": "pa_ff8",
                "question": "Arabskie مَدْرَسَة (madrasa) NIE jest:",
                "translation": "(ما لا تعني مدرسة؟)",
                "options": ["Szkołą religijną WYŁĄCZNIE (w arabskim = KAŻDA szkoła)", "Szkołą podstawową", "Szkołą średnią", "Uniwersytetem"],
                "correct": "Szkołą religijną WYŁĄCZNIE (w arabskim = KAŻDA szkoła)",
                "explanation": "مَدْرَسَة (madrasa) w arabskim = KAŻDA szkoła (podstawowa, średnia, prywatna — nie tylko religijna!). W polskim/europejskim: 'medresa' → kojarzy się WYŁĄCZNIE ze szkołą islamską/religijną. To FAŁSZYWY PRZYJACIEL semantyczny: słowo weszło do polskiego z ZAWĘŻONYM znaczeniem. Od root د-ر-س (studiować/uczyć się). مَدْرَسَة = miejsce nauki (مَفْعَلَة = wzorzec miejsca)."
            },
            {
                "id": "pa_ff9",
                "question": "Arabskie جِهَاد (jihād) dosłownie znaczy:",
                "translation": "(ما المعنى الأصلي لكلمة جهاد؟)",
                "options": ["Zmaganie/Wysiłek (duchowy lub fizyczny)", "Tylko wojna", "Tylko modlitwa", "Tylko post"],
                "correct": "Zmaganie/Wysiłek (duchowy lub fizyczny)",
                "explanation": "جِهَاد (jihād) = ZMAGANIE/WYSIŁEK — od root ج-ه-د = wkładać wysiłek. W islamie: 1) الجهاد الأكبر (większy jihād) = walka z własnymi słabościami/pokusami, 2) الجهاد الأصغر (mniejszy jihād) = obrona. W polskim/europejskim: 'dżihad' = WYŁĄCZNIE wojna → FAŁSZYWY PRZYJACIEL. Oryginalne arabskie znaczenie: بَذْلُ الجُهْد (wkładanie wysiłku) — może być: nauka, dobre uczynki, cierpliwość."
            },
            {
                "id": "pa_ff10",
                "question": "Arabskie حَمَّام (ḥammām) w polskim kontekście kojarzy się z:",
                "translation": "(ما يتبادر إلى ذهن البولندي عند سماع حمّام؟)",
                "options": ["Łaźnią (hammam), ale po arabsku = też ŁAZIENKA/TOALETA!", "Tylko luksusową łaźnią", "Basenem", "Sauną"],
                "correct": "Łaźnią (hammam), ale po arabsku = też ŁAZIENKA/TOALETA!",
                "explanation": "حَمَّام (ḥammām) w polskim: 'hammam' = orientalna łaźnia (SPA). W arabskim: حمّام = ŁAZIENKA/TOALETA w codziennym użyciu! 'أين الحمّام؟' = Gdzie łazienka? (nie: Gdzie łaźnia turecka?). Od root ح-م-م = gorąco/kąpiel. Polak pytając o حمّام oczekuje luksusu — Arab wskazuje zwykłą toaletę! FAŁSZYWY PRZYJACIEL: to samo słowo, różne oczekiwania kulturowe."
            },
            {
                "id": "pa_ff11",
                "question": "Arabskie سُلْطَان (sulṭān) w polskim = sułtan (władca), ale w MSA też:",
                "translation": "(هل سلطان فقط = حاكم؟)",
                "options": ["Władza/autorytet (abstrakcyjne!) + imię własne (bardzo popularne)", "Tylko tytuł władcy", "Tylko imię", "Tylko kraj"],
                "correct": "Władza/autorytet (abstrakcyjne!) + imię własne (bardzo popularne)",
                "explanation": "سُلْطَان (sulṭān) = 1) Władza/autorytet (abstrakt, nie osoba!): سلطانُ القانونِ = władza prawa. 2) Tytuł: sułtan (historyczny władca). 3) Imię własne: Sultan (popularne arabskie imię). W polskim: 'sułtan' = TYLKO władca turecki/arabski. FAŁSZYWY PRZYJACIEL: w MSA سلطة (sulṭa) = władza (polityczna), سلطان = autorytet (szersze). Polskie zawężenie = wypaczenie sensu."
            },
            {
                "id": "pa_ff12",
                "question": "Polskie 'kawa' pochodzi od arabskiego:",
                "translation": "(من أين كلمة kawa البولندية؟)",
                "options": ["قَهْوَة (qahwa) — pierwotnie = wino, potem napój z kawy", "كَوَا (kawa)", "قَوِيّ (qawiyy = silny)", "كَافِي (kāfī = wystarczający)"],
                "correct": "قَهْوَة (qahwa) — pierwotnie = wino, potem napój z kawy",
                "explanation": "Polskie 'kawa' ← tureckie 'kahve' ← arabskie قَهْوَة (qahwa). Etymologia: قهوة pierwotnie = WINO (lub napój zmniejszający apetyt). Gdy odkryto kawę (Etiopia/Jemen XV w.), przeniesiono nazwę. Droga: Jemen → Turcja → Wenecja → Europa → Polska. W arabskim: قهوة = kawa (dziś), ale historycznie = wino! FAŁSZYWY PRZYJACIEL diachroniczny: to samo słowo zmieniło ZNACZENIE w czasie."
            },
            {
                "id": "pa_ff13",
                "question": "Arabskie عَرَبِيّ (ʿarabiyy) vs عَرَبِيَّة (ʿarabiyya) — różnica:",
                "translation": "(ما الفرق بين عربي و عربية؟)",
                "options": ["عربيّ = arabski/Arab (m.); عربيَّة = arabska/Arabka (ż.) + JĘZYK arabski + SAMOCHÓD", "Identyczne", "عربي = język; عربية = osoba", "عربي = stare; عربية = nowe"],
                "correct": "عربيّ = arabski/Arab (m.); عربيَّة = arabska/Arabka (ż.) + JĘZYK arabski + SAMOCHÓD",
                "explanation": "PUŁAPKA wieloznaczności: عَرَبِيَّة (ʿarabiyya) = 1) Arabska (przymiotnik ż.): امرأة عربيَّة (arabska kobieta), 2) Język arabski: اللغة العربيَّة, 3) SAMOCHÓD (w dialekcie egipskim!): عربيَّة (ʿarabiyya) = wóz/samochód. Więc: عندي عربيَّة = MAM SAMOCHÓD (nie: mam arabskę!). Polak: nie spodziewa się, że 'arabska' = 'samochód'. Kontekst + dialekt = klucz."
            },
            {
                "id": "pa_ff14",
                "question": "Polskie 'magazyn' pochodzi od arabskiego مَخْزَن (makhzan) = :",
                "translation": "(ما معنى مخزن بالعربية؟)",
                "options": ["Magazyn/Skład (miejsce przechowywania) — identyczne!", "Sklep", "Gazeta", "Czasopismo"],
                "correct": "Magazyn/Skład (miejsce przechowywania) — identyczne!",
                "explanation": "مَخْزَن (makhzan) = magazyn/skład. Od root خ-ز-ن = magazynować/przechowywać. مَخْزَن = مَفْعَل (wzorzec miejsca) = miejsce przechowywania. Droga: arabski → włoski 'magazzino' → polskie 'magazyn'. ANGIELSKI: 'magazine' = CZASOPISMO (nie magazyn!) — bo pierwotnie 'magazyn broni' → militar. periodical → czasopismo. To FAŁSZYWY PRZYJACIEL ang-pl, ale nie ar-pl (tu znaczenie się zachowało)!"
            },
            {
                "id": "pa_ff15",
                "question": "Ile polskich słów ma arabskie pochodzenie?",
                "translation": "(كم كلمة بولندية من أصل عربي؟)",
                "options": ["Kilkadziesiąt (przez turecki, włoski, hiszpański)", "0 — nic wspólnego", "Tylko 1-2 słowa", "Ponad 1000"],
                "correct": "Kilkadziesiąt (przez turecki, włoski, hiszpański)",
                "explanation": "Arabskie zapożyczenia w polskim (przez turecki/włoski/hiszpański/łacinę): kawa (قهوة), algebra (الجبر), algorytm (الخوارزمي), cyfra (صفر), zero (صفر), alkohol (الكحول), bawełna (قطن), magazyn (مخزن), admiral (أمير البحر), nadir (نظير), zenit (سمت), sofa (صفة), szach (شاه — perski, ale przez arabski). Polska-arabski: odległy geograficznie, ale BLISKI leksykalnie przez wieki wymiany kulturowej!"
            }
        ]
    },
    {
        "key": "travel_vocabulary_ar",
        "name": "Podróże — słownictwo (مفردات السفر)",
        "description": "مفردات ونحو السفر والمواصلات بالعربية",
        "iconName": "airplane",
        "color": "#818cf8",
        "level": "beginner",
        "items": [
            {
                "id": "pa_tv1",
                "question": "أُرِيدُ تَذْكِرَةً إلى _____ (Chcę bilet do Kairu)",
                "translation": "(Chcę bilet do Kairu)",
                "options": ["القَاهِرَة", "بيروت", "دمشق", "الرباط"],
                "correct": "القَاهِرَة",
                "explanation": "القَاهِرَة (al-Qāhira) = Kair (stolica Egiptu). Dosłownie: 'Zwycięska' (imiesłów czynny od ق-ه-ر = pokonać). تذكرة (tadhkira) = bilet (od ذ-ك-ر = pamiętać → 'przypomnienie'). Gramatycznie: أريدُ (chcę) + تذكرةً (biernik — مفعول به) + إلى (do — przyimek) + القاهرةِ (dopełniacz po przyimku). Inne miasta: بَيْرُوت (Bejrut), دِمَشْق (Damaszek), الرِّيَاض (Rijad)."
            },
            {
                "id": "pa_tv2",
                "question": "أَيْنَ _____ ؟ (Gdzie jest lotnisko?)",
                "translation": "(Gdzie jest lotnisko?)",
                "options": ["المَطَار", "المَحَطَّة", "المَيْنَاء", "المَتْجَر"],
                "correct": "المَطَار",
                "explanation": "المَطَار (al-maṭār) = lotnisko. Od root ط-ي-ر = latać. مَطَار = مَفْعَل (wzorzec miejsca z formą I) = miejsce latania. Inne: المَحَطَّة (maḥaṭṭa = stacja/dworzec, od ح-ط-ط = stawiać), المِيْنَاء (mīnāʾ = port morski), المَوْقِف (mawqif = przystanek, od و-ق-ف = stać). Gramatycznie: أينَ (przysłówek pytający) + المطارُ (مبتدأ w mianowniku)."
            },
            {
                "id": "pa_tv3",
                "question": "كَمْ _____ الغُرْفَة لِلَيْلَةٍ وَاحِدَة؟ (Ile kosztuje pokój za jedną noc?)",
                "translation": "(Ile kosztuje pokój za jedną noc?)",
                "options": ["سِعْرُ", "وَزْنُ", "طُولُ", "عَرْضُ"],
                "correct": "سِعْرُ",
                "explanation": "كم سعرُ الغرفةِ لليلةٍ واحدةٍ? = Ile (kosztuje = jaka cena) pokój za jedną noc? سِعْر (siʿr) = cena (od س-ع-ر = ustalać cenę). الغرفة (ghurfa) = pokój. لليلةٍ واحدةٍ = za jedną noc (لِـ = za/na, ليلة = noc, واحدة = jedna — żeńska bo ليلة jest żeńska). Odpowiedź: السعرُ مئةُ دولارٍ (cena to sto dolarów)."
            },
            {
                "id": "pa_tv4",
                "question": "هَلْ يُمْكِنُنِي _____ جَوَاز السَّفَر؟ (Czy mogę zobaczyć paszport?)",
                "translation": "(Czy mogę zobaczyć paszport?)",
                "options": ["رُؤْيَة", "أَكْل", "شُرْب", "كِتَابَة"],
                "correct": "رُؤْيَة",
                "explanation": "هل يمكنُني رؤيةُ جوازِ السفرِ? = Czy mogę zobaczyć paszport? جَوَاز السَّفَر (jawāz as-safar) = paszport (dosłownie: 'pozwolenie podróży'). رؤية (ruʾya) = widzenie/zobaczenie (masdar from ر-أ-ى). يمكنُني = jest mi możliwe (يمكن + ـني). Na lotnisku: جواز السفر (paszport), تأشيرة (wiza), بطاقة صعود (karta pokładowa), جمرك (cariat celna)."
            },
            {
                "id": "pa_tv5",
                "question": "أُرِيدُ غُرْفَةً _____ (Chcę pokój DWUOSOBOWY)",
                "translation": "(Chcę pokój dwuosobowy)",
                "options": ["مُزْدَوِجَة", "مُفْرَدَة", "ثُلَاثِيَّة", "فَارِغَة"],
                "correct": "مُزْدَوِجَة",
                "explanation": "غرفة مُزْدَوِجَة (muzdawija) = pokój dwuosobowy (od root ز-و-ج = para). غرفة مُفْرَدَة (mufrada) = pokój jednoosobowy (od ف-ر-د = jeden). Inne: غرفة ثُلَاثِيَّة (trzyosobowy). W hotelu: حَجْز (reservacja), تسجيل الوصول (check-in), تسجيل المغادرة (check-out), خدمة الغرف (room service). Formy od rdzeni: مُفْعَل = imiesłów bierny."
            },
            {
                "id": "pa_tv6",
                "question": "خُذْنِي إلى _____ مِنْ فَضْلِكَ (Zabierz mnie do centrum, proszę)",
                "translation": "(Zabierz mnie do centrum)",
                "options": ["وَسَط المَدِينَة", "المَطَار", "الفُنْدُق", "المَطْعَم"],
                "correct": "وَسَط المَدِينَة",
                "explanation": "خُذْنِي (khudhnī) = zabierz mnie (rozkaźnik od أَخَذَ = brać + ـني = mnie). وَسَط المَدِينَة (wasaṭ al-madīna) = centrum miasta (dosłownie: środek miasta). من فَضْلِكَ = proszę (dosłownie: z twojej łaskawości). W taksówce: كَمْ? (ile?), عَلَى اليَمِين (na prawo), عَلَى اليَسَار (na lewo), عَلَى طُول (prosto), قِفْ هُنَا (zatrzymaj się tutaj)."
            },
            {
                "id": "pa_tv7",
                "question": "مَتَى يُغَادِرُ _____ ؟ (Kiedy odjeżdża pociąg?)",
                "translation": "(Kiedy odjeżdża pociąg?)",
                "options": ["القِطَار", "الطَّائِرَة", "السَّفِينَة", "الحَافِلَة"],
                "correct": "القِطَار",
                "explanation": "القِطَار (al-qiṭār) = pociąg. يُغَادِرُ (yughādiru) = odjeżdża/opuszcza (III forma od غ-د-ر). Inne środki transportu: الطَّائِرَة (samolot — od ط-ي-ر = latać), السَّفِينَة (statek — od س-ف-ن), الحَافِلَة (autobus — od ح-ف-ل = być pełnym), سَيَّارَة (samochód — od س-ي-ر = jechać), تَاكْسِي (taksówka — z angielskiego). Wzorzec: فَعِيلَة/فَاعِلَة = rzeczowniki od rdzeni."
            },
            {
                "id": "pa_tv8",
                "question": "أَحْتاجُ إلى _____ (Potrzebuję mapy)",
                "translation": "(Potrzebuję mapy)",
                "options": ["خَرِيطَة", "صُحُف", "كِتَاب", "قَلَم"],
                "correct": "خَرِيطَة",
                "explanation": "خَرِيطَة (kharīṭa) = mapa. أحتاجُ إلى (aḥtāju ilā) = potrzebuję (VIII forma + przyimek إلى). Podróżnicze: خريطة (mapa), دَلِيل سِيَاحِيّ (przewodnik turystyczny), مَعْلَم سِيَاحِيّ (zabytek — od ع-ل-م), مُتْحَف (muzeum — od ت-ح-ف = dzieło sztuki), سُوق (bazar/rynek), مَسْجِد (meczet — od س-ج-د = kłaniać się), كَنِيسَة (kościół)."
            },
            {
                "id": "pa_tv9",
                "question": "هَلْ تَتَكَلَّمُ _____؟ (Czy mówisz po angielsku?)",
                "translation": "(Czy mówisz po angielsku?)",
                "options": ["الإِنْجِلِيزِيَّة", "العَرَبِيَّة", "الفَرَنْسِيَّة", "الأَلْمَانِيَّة"],
                "correct": "الإِنْجِلِيزِيَّة",
                "explanation": "الإنجليزيَّة (al-injilīziyya) = angielski (język). تتكلَّمُ (tatakallamu) = mówisz (V forma od ك-ل-م). Języki: العَرَبِيَّة (arabski), الفَرَنْسِيَّة (francuski), الأَلْمَانِيَّة (niemiecki), البُولَنْدِيَّة (polski), الإسْبَانِيَّة (hiszpański). Wzorzec: الـ + nisba (-iyya) = nazwa języka. Alternatywa: هل تتحدَّثُ (tatḥaddathu — IV forma alternatywna) = też 'mówisz'."
            },
            {
                "id": "pa_tv10",
                "question": "أَيْنَ يُمْكِنُنِي _____ العُمْلَة؟ (Gdzie mogę wymienić walutę?)",
                "translation": "(Gdzie mogę wymienić walutę?)",
                "options": ["صَرْف", "شِرَاء", "بَيْع", "أَخْذ"],
                "correct": "صَرْف",
                "explanation": "صَرْف العُمْلَة (ṣarf al-ʿumla) = wymiana waluty. صَرْف (ṣarf) = wymiana/zamiana (od ص-ر-ف). العُمْلَة (ʿumla) = waluta (od ع-م-ل = praca/działanie). مَكْتَب الصَّرْف (maktab aṣ-ṣarf) = kantor. Waluty: دِينَار (dinar), دِرْهَم (dirham), رِيَال (rial), جُنَيْه (funt — w Egipcie), لِيرَة (lira — w Libanie/Syrii). Wszystkie od starożytnych monet (dinar ← denarius, dirham ← drachma)."
            },
            {
                "id": "pa_tv11",
                "question": "_____ مُنْذُ مَتَى وَأَنْتَ هُنَا؟ (Od kiedy tu jesteś?)",
                "translation": "(Od kiedy tu jesteś?)",
                "options": ["مُنْذُ (Od/Od kiedy)", "بَعْدَ", "قَبْلَ", "حَتَّى"],
                "correct": "مُنْذُ (Od/Od kiedy)",
                "explanation": "مُنْذُ (mundhu) = OD (czasowe). 'منذُ متى وأنتَ هنا?' = Od kiedy tu jesteś? Inne czasowe: بَعْدَ (po), قَبْلَ (przed), حَتَّى (aż do), خِلَالَ (podczas). منذ + rzeczownik w dopełniaczu: منذُ أسبوعٍ (od tygodnia), منذُ سنتينِ (od dwóch lat). W polskim: 'od' — proste. W arabskim: منذ/مذ — formalne/skrócone."
            },
            {
                "id": "pa_tv12",
                "question": "هَلْ هُنَاكَ _____ قَرِيبٌ مِنْ هُنَا؟ (Czy jest tu blisko szpital?)",
                "translation": "(Czy jest szpital blisko?)",
                "options": ["مُسْتَشْفَى", "مَطْعَم", "فُنْدُق", "مَكْتَبَة"],
                "correct": "مُسْتَشْفَى",
                "explanation": "مُسْتَشْفَى (mustashfā) = szpital. Od X forma root ش-ف-ي (leczyć): اِسْتَشْفَى = szukać leczenia → مُستشفى = miejsce szukania leczenia! هُناك (hunāka) = tam/jest (istnieje). قَريب من (qarīb min) = blisko od. Na nagłe wypadki: إسْعَاف (ambulans), طَبِيب (lekarz), صَيْدَلِيَّة (apteka — od صيدلي = farmaceuta). Wzorzec مُسْتَفْعَل = miejsce X formy."
            },
            {
                "id": "pa_tv13",
                "question": "أَنَا _____ (Jestem zgubiony/a)",
                "translation": "(Jestem zgubiony)",
                "options": ["ضَائِعٌ / ضَائِعَةٌ", "سَعِيدٌ", "تَعْبَانٌ", "جَائِعٌ"],
                "correct": "ضَائِعٌ / ضَائِعَةٌ",
                "explanation": "أنا ضائعٌ (m.) / ضائعةٌ (ż.) = Jestem zgubiony/a. ضائع (ḍāʾiʿ) = imiesłów czynny od ض-ي-ع = zgubić się. Przydatne: أنا ضائعٌ, هل يمكنُكَ مساعدتي؟ (Jestem zgubiony, czy możesz mi pomóc?). Inne stany: تَعْبَان (zmęczony), جَائِع (głodny), عَطْشَان (spragniony), مَرِيض (chory). Szyk: أنا + przymiotnik (zdanie nominalne — BEZ 'jest')."
            },
            {
                "id": "pa_tv14",
                "question": "الجَوُّ _____ اليَوْمَ (Pogoda jest gorąca dzisiaj)",
                "translation": "(Pogoda jest gorąca dzisiaj)",
                "options": ["حَارٌّ", "بَارِدٌ", "مُمْطِرٌ", "مُعْتَدِلٌ"],
                "correct": "حَارٌّ",
                "explanation": "الجوُّ حارٌّ اليومَ = Pogoda jest gorąca dzisiaj. الجو (al-jaww) = pogoda/atmosfera. حارّ (ḥārr) = gorący (od ح-ر-ر = być gorącym). اليوم (al-yawm) = dzisiaj (w bierniku jako ظرف زمان). Pogoda: بارد (zimny), مُمْطِر (deszczowy), مُعْتَدِل (umiarkowany), رَطْب (wilgotny), جَافّ (suchy), مُشمِس (słoneczny). Zdanie nominalne: الجو = مبتدأ, حارّ = خبر."
            },
            {
                "id": "pa_tv15",
                "question": "شُكْراً جَزِيلاً! الطَّعَامُ كَانَ _____ (Bardzo dziękuję! Jedzenie było pyszne)",
                "translation": "(Jedzenie było pyszne)",
                "options": ["لَذِيذاً", "بَارِداً", "غَالِياً", "قَلِيلاً"],
                "correct": "لَذِيذاً",
                "explanation": "الطعامُ كانَ لذيذاً = Jedzenie było pyszne. كان = było (orzeczenie przeszłe kopularne). لذيذاً (ladhīdhan) = pyszne (в bierniku bo خبر كان). شُكراً جزيلاً = bardzo dziękuję (شُكراً = dziękuję, جزيلاً = obfity). Jedzenie: لَذِيذ (pyszny), حَارّ (ostry/gorący), مَالِح (słony), حُلْو (słodki), مُرّ (gorzki). Gramatycznie: كان rządzi بiernikiem orzecznika."
            }
        ]
    },
    {
        "key": "food_restaurant_ar",
        "name": "Jedzenie i restauracja (الطعام والمطعم)",
        "description": "مفردات الطعام وآداب المطعم بالعربية",
        "iconName": "fork.knife",
        "color": "#fbbf24",
        "level": "beginner",
        "items": [
            {
                "id": "pa_fr1",
                "question": "أَعْطِنِي _____ مِنْ فَضْلِكَ (Daj mi jadłospis, proszę)",
                "translation": "(Daj mi jadłospis, proszę)",
                "options": ["قَائِمَة الطَّعَام", "الحِسَاب", "الفَاتُورَة", "المِلْح"],
                "correct": "قَائِمَة الطَّعَام",
                "explanation": "قائمةُ الطعامِ (qāʾimat aṭ-ṭaʿām) = jadłospis (dosłownie: lista jedzenia). أعطِني (aʿṭinī) = daj mi (rozkaźnik od أعطى IV forma + ـني). من فضلِكَ = proszę. W restauracji: قائمة (menu), طَبَق (danie), مُقَبِّلَات (przystawki), طَبَق رَئِيسِيّ (danie główne), حَلْوَيَات (desery), مَشْرُوبَات (napoje). Gramatycznie: إضافة (قائمة + الطعام)."
            },
            {
                "id": "pa_fr2",
                "question": "أُرِيدُ _____ مَشْوِيّاً (Chcę grillowanego kurczaka)",
                "translation": "(Chcę grillowanego kurczaka)",
                "options": ["دَجَاجاً", "سَمَكاً", "لَحْماً", "أَرُزّاً"],
                "correct": "دَجَاجاً",
                "explanation": "دَجَاجاً مَشْوِيّاً (dajājan mashwiyyan) = grillowanego kurczaka. دَجَاج (dajāj) = kurczak, مَشْوِيّ (mashwiyy) = grillowany (od ش-و-ي = grillować). Oba w bierniku (منصوب) bo مفعول به. Mięsa: لَحْم (mięso — ogólnie), لَحْم بَقَر (wołowina), لَحْم غَنَم (baranina), سَمَك (ryba), دَجَاج (kurczak). Przygotowanie: مَشْوِيّ (grill), مَقْلِيّ (smażony), مَسْلُوق (gotowany)."
            },
            {
                "id": "pa_fr3",
                "question": "هَلْ عِنْدَكُمْ طَعَامٌ _____؟ (Czy macie jedzenie halal?)",
                "translation": "(Czy macie jedzenie halal?)",
                "options": ["حَلَال", "حَرَام", "مَمْنُوع", "مَقْبُول"],
                "correct": "حَلَال",
                "explanation": "حَلَال (ḥalāl) = dozwolone (religijnie, w islamie). Przeciwieństwo: حَرَام (ḥarām) = zabronione. W kontekście jedzenia: mięso حلال = ubite zgodnie z islamskimi regułami (ذَبْح = ubój rytualny). Zakazane: wieprzowina (لَحْم خِنْزِير), alkohol (كُحُول/خَمْر). عِنْدَكُمْ = macie (عند + كم = u was). Zdanie: هل (czy) + عندكم (macie) + طعامٌ (jedzenie) + حلال (dozwolone)."
            },
            {
                "id": "pa_fr4",
                "question": "الحِسَابَ مِنْ فَضْلِكَ (Rachunek, proszę). Co odpowiada kelner?",
                "translation": "(ماذا يقول النادل عند الحساب؟)",
                "options": ["تَفَضَّلْ / حَاضِر (Proszę / Zaraz)", "لا (Nie)", "مرحباً (Witam)", "شكراً (Dziękuję)"],
                "correct": "تَفَضَّلْ / حَاضِر (Proszę / Zaraz)",
                "explanation": "الحِسَاب (al-ḥisāb) = rachunek (od ح-س-ب = liczyć). حَاضِر (ḥāḍir) = gotowy/zaraz (= 'jest pod ręką'). تفضَّل (tafaḍḍal) = proszę (podając rachunek). Napiwek: بَقْشِيش (bakshish — z tureckiego/perskiego). Inne: الفَاتُورَة (faktura), بِطَاقَة ائتمان (karta kredytowa), نَقْداً (gotówką), الباقي (reszta). Kultura: w krajach arabskich napiwek jest OCZEKIWANY (5-15%)."
            },
            {
                "id": "pa_fr5",
                "question": "بِالصِّحَّةِ وَالعَافِيَة! mówi się:",
                "translation": "(متى نقول بالصحة والعافية؟)",
                "options": ["Po jedzeniu (= Na zdrowie! / Smacznego!)", "Przed snem", "Na powitanie", "Na pożegnanie"],
                "correct": "Po jedzeniu (= Na zdrowie! / Smacznego!)",
                "explanation": "بِالصِّحَّةِ وَالعَافِيَة (biṣ-ṣiḥḥati wal-ʿāfiya) = Na zdrowie i dobrostan! Mówi się PO jedzeniu (lub podczas). الصِّحَّة = zdrowie (od ص-ح-ح = być zdrowym), العَافِيَة = dobrostan/siła (od ع-ف-ي = być zdrowym). Przed jedzeniem: بِسْمِ اللهِ (W imię Boga). Po jedzeniu: الحمدُ لله (Chwała Bogu). Kulturowo: jedzenie w arabskim świecie to AKT SPOŁECZNY — otoczone formułami i dwustronnymi życzeniami."
            },
            {
                "id": "pa_fr6",
                "question": "الحُمُّص / الفَلَافِل / التَّبُّولَة — to wszystko:",
                "translation": "(ما القاسم المشترك بين الحمص والفلافل والتبولة؟)",
                "options": ["Arabskie dania kuchni lewantyckiej (مطبخ شامي)", "Desery", "Napoje", "Owoce"],
                "correct": "Arabskie dania kuchni lewantyckiej (مطبخ شامي)",
                "explanation": "Kuchnia lewantycka (مطبخ شامي): الحُمُّص (hummus = pasta z ciecierzycy), الفَلَافِل (falafel = smażone kulki z ciecierzycy/bobu), التَّبُّولَة (tabbouleh = sałatka z pietruszki/bulguru). Inne: فَتُّوش (fattoush = sałatka z chlebem), شَاوِرْمَا (shawarma = kebab), بَابَا غَنُّوج (baba ghanoush = pasta z bakłażana). Te dania weszły do ŚWIATOWEJ kuchni — Polacy je znają!"
            },
            {
                "id": "pa_fr7",
                "question": "أَنَا _____ (Jestem WEGETARIANINEM/-KĄ)",
                "translation": "(Jestem wegetarianinem)",
                "options": ["نَبَاتِيّ / نَبَاتِيَّة", "لَحْمِيّ", "سَمْكِيّ", "حَلِيبِيّ"],
                "correct": "نَبَاتِيّ / نَبَاتِيَّة",
                "explanation": "نَبَاتِيّ (nabātiyy) / نَبَاتِيَّة (nabātiyya) = wegetarianin/-ka. Od نَبَات (nabāt) = roślina + ـيّ (nisba = przymiotnikowy sufiks). Inne: لا آكلُ اللَّحمَ (nie jem mięsa), لا آكلُ مُنْتَجَاتٍ حَيَوَانِيَّة (nie jem produktów zwierzęcych = vegan). W krajach arabskich: wegetarianizm jest RZADSZY niż w Polsce — mięso jest kulturowo ważne. Ale: kuchnia arabska ma WIELE dań bezmięsnych (hummus, falafel, foul)!"
            },
            {
                "id": "pa_fr8",
                "question": "قَهْوَة _____ (Kawa BEZ cukru)",
                "translation": "(Kawa bez cukru)",
                "options": ["سَادَة / بِدُونِ سُكَّر", "حُلْوَة", "مُرَّة جِدّاً", "مَعَ حَلِيب"],
                "correct": "سَادَة / بِدُونِ سُكَّر",
                "explanation": "قَهْوَة سَادَة (qahwa sāda) = kawa prosta/bez cukru. سَادَة = prosta/zwykła. بِدُونِ سُكَّر = bez cukru. Arabska kawa (القهوة العربية): stopnie słodyczy: 1) سادَة/مُرَّة (bez cukru/gorzka), 2) على الريحة (minimium cukru — 'na zapach'), 3) مضبوطة (maḍbūṭa = z umiarkowanym cukrem), 4) حلوة/زيادة (słodka/bardzo słodka). Zamówienie kawy to KULTUROWY RYTUAŁ."
            },
            {
                "id": "pa_fr9",
                "question": "هَلْ هذا _____؟ (Czy to jest ostre/pikantne?)",
                "translation": "(Czy to jest pikantne?)",
                "options": ["حَارّ / حِرِّيف", "بَارِد", "حُلْو", "مَالِح"],
                "correct": "حَارّ / حِرِّيف",
                "explanation": "حَارّ (ḥārr) = ostry/gorący (temperatura LUB smak — wieloznaczne!). حِرِّيف (ḥirrīf) = pikantny/ostry (tylko smak — jednoznaczne, dialektalne). Smaki: حُلْو (słodki), مَالِح (słony), حَامِض (kwaśny), مُرّ (gorzki), حارّ/حِرِّيف (ostry/pikantny). W polskim: 'ostry' = smak/nóż/kąt. W arabskim: حادّ = ostry (nóż), حارّ = ostry (smak/temperatura). RÓŻNE słowa na RÓŻNE 'ostrości'!"
            },
            {
                "id": "pa_fr10",
                "question": "مَا هِيَ الأَطْبَاقُ _____ ؟ (Jakie są dania MIEJSCOWE/LOKALNE?)",
                "translation": "(Jakie są lokalne dania?)",
                "options": ["المَحَلِّيَّة", "الأَجْنَبِيَّة", "الغَالِيَة", "المَشْهُورَة"],
                "correct": "المَحَلِّيَّة",
                "explanation": "الأطباق المحلِّيَّة (al-aṭbāq al-maḥalliyya) = dania lokalne/miejscowe. المحلِّيَّة (maḥalliyya) = lokalna (od مَحَلّ = miejsce, + nisba -iyya). Arabski świat ma RÓŻNE kuchnie: مصرية (egipska: كُشَرِي, فُول), لبنانية (libańska: تبّولة, كِبَّة), مغربية (marokańska: طاجين, كُسْكُس), خليجية (zatoka: مَكْبُوس, هَرِيس). Każda z unikalnymi daniami!"
            },
            {
                "id": "pa_fr11",
                "question": "أَنَا عِنْدِي _____ مِنَ المُكَسَّرَات (Mam ALERGIĘ na orzechy)",
                "translation": "(Mam alergię na orzechy)",
                "options": ["حَسَاسِيَّة", "حُبّ", "رَغْبَة", "كَرَاهِيَة"],
                "correct": "حَسَاسِيَّة",
                "explanation": "حَسَاسِيَّة (ḥasāsiyya) = alergia/uczulenie (od ح-س-س = czuć/odczuwać). المُكَسَّرَات (mukassarāt) = orzechy (dosłownie: łamane/kruszone, od ك-س-ر = łamać). Alergeny: قَمْح (pszenica), حَلِيب (mleko), بَيْض (jajka), سِمْسِم (sezam), فُول سُودَانِيّ (orzeszki ziemne). WAŻNE dla bezpieczeństwa podróży! عندي حساسية خطيرة = Mam poważną alergię."
            },
            {
                "id": "pa_fr12",
                "question": "خُبْز / عَيْش / رَغِيف — wszystkie znaczą:",
                "translation": "(ما القاسم المشترك؟)",
                "options": ["Chleb (różne dialekty i odmiany)", "Ryż", "Mięso", "Warzywa"],
                "correct": "Chleb (różne dialekty i odmiany)",
                "explanation": "Chleb w arabskim świecie: خُبْز (khubz = MSA + Lewant), عَيْش (ʿaysh = Egipt — dosłownie = 'życie'!), رَغِيف (raghīf = bochenek). W Egipcie: عَيْش = chleb = życie → FUNDAMENTALNA ROLA chleba. Rodzaje: خُبْز عَرَبِيّ (pita), خُبْز صَاج (cienki na blasze), خُبْز تَنُّور (z pieca), رُقَاق (ultracienki). Chleb to NAJWAŻNIEJSZY element arabskiego posiłku."
            },
            {
                "id": "pa_fr13",
                "question": "شَاي بِالنَّعْنَاع — to:",
                "translation": "(ما هو شاي بالنعناع؟)",
                "options": ["Herbata z miętą (= pijana w CAŁYM Maghrebie)", "Herbata z mlekiem", "Kawa z kardamonem", "Sok z granatu"],
                "correct": "Herbata z miętą (= pijana w CAŁYM Maghrebie)",
                "explanation": "شَاي بِالنَّعْنَاع (shāy bin-naʿnāʿ) = herbata z miętą. شاي (shāy — z chińskiego 'czaj' przez perski!), نعناع (naʿnāʿ = mięta). Napój NARODOWY Maghrebu (Maroko, Tunezja, Algieria). Inne: قهوة عربية بالهَيْل (kawa arabska z kardamonem — Zatoka), عِرْق سُوس (lukrecja — Lewant), تَمْر هِنْدِيّ (tamaryndowiec). Napoje to ELEMENT GOŚCINNOŚCI — odmowa = nieuprzejmość!"
            },
            {
                "id": "pa_fr14",
                "question": "الأَكْلُ بِاليَدِ _____ = Jedzenie ręką jest:",
                "translation": "(هل الأكل باليد سنة؟)",
                "options": ["سُنَّة (tradycją prorockiej) — prawą ręką!", "حَرَام (zakazane)", "مَكْرُوه (niechciane)", "غَرِيب (dziwne)"],
                "correct": "سُنَّة (tradycją prorockiej) — prawą ręką!",
                "explanation": "Jedzenie PRAWĄ ręką to سُنَّة (sunna = tradycja Proroka). Prorok Muhammad jadł prawą ręką, z podłogi, na wspólnym talerzu. Etykieta: 1) بسم الله (przed jedzeniem), 2) Prawą ręką (lewa = nieczysta), 3) Ze swej strony talerza, 4) الحمد لله (po jedzeniu). Dla Polaka: jedzenie widelcem i nożem jest NORMĄ — ale w tradycyjnym arabskim domu: jedzenie ręką jest CZCIGODNE i PREFEROWANE!"
            },
            {
                "id": "pa_fr15",
                "question": "عَزِيمَة / وَلِيمَة / مَأْدُبَة — różnice:",
                "translation": "(ما الفرق بين عزيمة وولية ومأدبة؟)",
                "options": ["Zaproszenie na posiłek / Uczta weselna / Bankiet (różne okazje)", "Identyczne", "Posiłki dnia (śniadanie/obiad/kolacja)", "Rodzaje mięsa"],
                "correct": "Zaproszenie na posiłek / Uczta weselna / Bankiet (różne okazje)",
                "explanation": "عَزِيمَة (ʿazīma) = zaproszenie na posiłek (nieformalne, domowe). وَلِيمَة (walīma) = uczta weselna (konkretna okazja — po ślubie). مَأْدُبَة (maʾduba) = bankiet/przyjęcie (formalne, wielkie). Hierarchia: عزيمة (codzienne) → وليمة (ślubne) → مأدبة (oficjalne). W kulturze arabskiej: GOŚCINNOŚĆ (ضيافة) jest CENTRALNĄ wartością — odmowa zaproszenia to OBRAZA."
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
