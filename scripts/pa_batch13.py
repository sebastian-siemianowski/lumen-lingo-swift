import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "topicalization",
        "name": "Topikalizacja i szyk zdania (التقديم والتأخير)",
        "description": "تقديم المفعول والجار والمجرور لأغراض بلاغية",
        "iconName": "arrow.left.arrow.right",
        "color": "#fbbf24",
        "level": "advanced",
        "items": [
            {
                "id": "pa_top1",
                "question": "الكتابَ قَرَأتُ — dlaczego dopelnienie jest na poczatku?",
                "translation": "(لماذا تقدم المفعول به؟)",
                "options": ["Dla podkreslenia: TO KSIAZKE przecztalem (nie cos innego)", "Blad gramatyczny", "Strona bierna", "Czas przyszly"],
                "correct": "Dla podkreslenia: TO KSIAZKE przecztalem (nie cos innego)",
                "explanation": "الكتابَ قَرَأْتُ = TO KSIAZKE przeczytałem. Normalny szyk: قَرَأْتُ الكتابَ (przeczytałem ksiazke). Przesuniecie dopelnienia (المفعول به) na poczatek = PODKRESLENIE/TOPIKALIZACJA. Dopelnienie POZOSTAJE w bierniku (الكتابَ z fatha) mimo zmiany pozycji. W polskim: 'Ksiazke to przeczytałem' — podobny efekt. W arabskim jest to czesta technika retoryczna (balaga)."
            },
            {
                "id": "pa_top2",
                "question": "إِيَّاكَ نَعْبُدُ — dlaczego zaimek dopelnieniowy jest na poczatku?",
                "translation": "(لماذا تقدّم إياك؟)",
                "options": ["Wyłącznosc: TYLKO Ciebie czcimy (nikogo innego)", "Zwykly szyk", "Pytanie", "Przeczenie"],
                "correct": "Wyłącznosc: TYLKO Ciebie czcimy (nikogo innego)",
                "explanation": "إِيَّاكَ نَعْبُدُ (Sura Al-Fatiha 1:5) = TYLKO Ciebie czcimy. Normalnie: نَعْبُدُكَ (czcimy Cie). Przesuniecie إِيَّاكَ na poczatek = حَصْر (ograniczenie/wyłącznosc): WYLACZNIE Ciebie, nikogo innego. To jeden z najslynniejszych przykladow topikalizacji w arabskim. W polskim: 'Ciebie to czcimy' vs. 'Czcimy Ciebie'. Arabski wyraza to zmiana szyku."
            },
            {
                "id": "pa_top3",
                "question": "في البيتِ جلستُ — co jest na poczatku i dlaczego?",
                "translation": "(ما المقدّم في هذه الجملة؟)",
                "options": ["Wyrazenie przyimkowe — podkreslenie MIEJSCA", "Podmiot", "Dopelnienie blizsze", "Orzeczenie"],
                "correct": "Wyrazenie przyimkowe — podkreslenie MIEJSCA",
                "explanation": "في البيتِ جلستُ = W DOMU siedzialem (nie gdzies indziej). Normalnie: جلستُ في البيتِ. Przesuniecie شبه جملة (wyrazenia przyimkowego) na poczatek podkresla MIEJSCE. To czesty zabieg: w domu, nie w kawiarni, nie w pracy. Przyczyny topikalizacji: 1) PODKRESLENIE, 2) KONTRAST (w domu, nie gdzie indziej), 3) RYTM zdania. Wszystko to zalicza sie do علم البلاغة (retoryki)."
            },
            {
                "id": "pa_top4",
                "question": "Kiedy przesuniecie dopelnienia na poczatek jest OBOWIAZKOWE?",
                "translation": "(متى يجب تقديم المفعول به؟)",
                "options": ["Gdy dopelnienie to zaimek pytajacy (مَنْ, ماذا) lub محصور", "Nigdy — zawsze fakultatywne", "Tylko w przeszlym", "Tylko w bierniku"],
                "correct": "Gdy dopelnienie to zaimek pytajacy (مَنْ, ماذا) lub محصور",
                "explanation": "Obowiazkowa topikalizacja dopelnienia: 1) Zaimek PYTAJACY: مَنْ رَأَيْتَ؟ (Kogo widziales? — مَنْ musi byc na poczatku), ماذا فَعَلْتَ؟ (Co zrobiles?), 2) Gdy podmiot i dopelnienie moga byc pomylone, 3) Gdy dopelnienie jest OGRANICZONE (محصور). Fakultatywna topikalizacja: w pozostalych przypadkach — dla efektu retorycznego. Zaimki pytajace ZAWSZE na poczatku zdania."
            },
            {
                "id": "pa_top5",
                "question": "Kiedy przesuniecie خبر (orzeczenia) przed مبتدأ jest obowiazkowe?",
                "translation": "(متى يجب تقديم الخبر على المبتدأ؟)",
                "options": ["Gdy خبر to wyrazenie przyimkowe, a مبتدأ nieokreslony", "Nigdy", "Zawsze", "Tylko z إنّ"],
                "correct": "Gdy خبر to wyrazenie przyimkowe, a مبتدأ nieokreslony",
                "explanation": "في الغرفةِ رجلٌ (W pokoju jest mezczyzna) — خبر (في الغرفة) MUSI byc przed nieokreslonym مبتدأ (رجلٌ). Dlaczego? Bo regula: مبتدأ musi byc OKRESLONY (z الـ lub zaimek). Jesli jest nieokreslony — musi byc cos przed nim. Przesuniecie خبر na poczatek rozwiazuje ten problem. *رجلٌ في الغرفةِ to zdanie NIEPOPRAWNE zdaniem wielu gramatykow."
            },
            {
                "id": "pa_top6",
                "question": "أنا الموضوعَ فَهِمْتُ — analiza:",
                "translation": "(حلّل: أنا الموضوعَ فهمتُ)",
                "options": ["Ja TO TEMAT zrozumialem — podmiot i dopelnienie podkreslone", "Blad gramatyczny", "Strona bierna", "Pytanie"],
                "correct": "Ja TO TEMAT zrozumialem — podmiot i dopelnienie podkreslone",
                "explanation": "أنا الموضوعَ فهمتُ — podwojne podkreslenie: 1) أنا = JA (zaimek osobny dla emfazy — normalnie wystarczy فهمتُ), 2) الموضوعَ na poczatku = TO TEMAT (topikalizacja dopelnienia). Podwojna emfaza: 'Jesli chodzi O MNIE, to TEMAT zrozumialem'. W polskim: 'JA to TEMAT zrozumialem' (z akcentem na oba slowa). W arabskim szyk + zaimek osobny = podwojny nacisk."
            },
            {
                "id": "pa_top7",
                "question": "W zdaniu imiennym, czy خبر moze stac przed مبتدأ?",
                "translation": "(هل يجوز تقديم الخبر على المبتدأ؟)",
                "options": ["Tak — a czasem jest to OBOWIAZKOWE", "Nie — nigdy", "Tylko z كان", "Tylko w pytaniach"],
                "correct": "Tak — a czasem jest to OBOWIAZKOWE",
                "explanation": "خبر moze (a czasem MUSI) stac przed مبتدأ: 1) OBOWIAZKOWE: w pytaniu أَيْنَ الكتابُ؟ (Gdzie ksiazka? — خبر = أين musi byc na poczatku), 2) OBOWIAZKOWE: في الدارِ رجلٌ (nieokreslony podmiot), 3) FAKULTATYWNE: ناجحٌ الطالبُ (Student jest pilny — emfaza na przymiotniku). Domyslny szyk: مبتدأ + خبر. Zmieniony szyk: خبر + مبتدأ = emfaza lub koniecznosc."
            },
            {
                "id": "pa_top8",
                "question": "Topikalizacja w Koranie: رَبِّيَ اللهُ — analiza:",
                "translation": "(حلّل: ربي الله)",
                "options": ["Moj Pan to Bog — خبر (ربي) przed مبتدأ (الله) dla emfazy", "Podmiot + orzeczenie w normalnym szyku", "Zdanie czasownikowe", "Rozkaz"],
                "correct": "Moj Pan to Bog — خبر (ربي) przed مبتدأ (الله) dla emfazy",
                "explanation": "رَبِّيَ اللهُ = Moj Pan to Bog / TO BOG (jest) moim Panem. Alternatywna analiza: اللهُ رَبِّي (Bog jest moim Panem — normalny szyk). Przesuniecie رَبِّي na poczatek podkresla RELACJE 'panowanie/bostwo'. W kontekscie religijnym: wyznanie wiary z naciskiem na to, ze MOJE PANSTWO nalezy do Boga (a nie do bożkow). Retoryka koraniczna czesto uzywa topikalizacji."
            },
            {
                "id": "pa_top9",
                "question": "Czy przy topikalizacji zmienia sie PRZYPADEK (إعراب) przesuywanych slow?",
                "translation": "(هل يتغير الإعراب عند التقديم والتأخير؟)",
                "options": ["NIE — przypadek zostaje ten sam niezaleznie od pozycji", "Tak — zmienia sie na mianownik", "Tak — zmienia sie na biernik", "Tak — zmienia sie na dopelniacz"],
                "correct": "NIE — przypadek zostaje ten sam niezaleznie od pozycji",
                "explanation": "KLUCZOWA regula: topikalizacja zmienia POZYCJE, ale NIE przypadek (إعراب). قَرَأْتُ الكتابَ → الكتابَ قرأتُ: الكتابَ ZOSTAJE w bierniku (مفعول به منصوب) mimo ze jest na poczatku. To rozrożnia arabski od niektorych jezykow, gdzie pozycja = przypadek. W arabskim: koncowki okreslaja funkcje gramatyczna, szyk okresla NACISK komunikacyjny."
            },
            {
                "id": "pa_top10",
                "question": "أَمَّا الدرسَ فَقَدْ فَهِمْتُهُ — co robi أمّا?",
                "translation": "(ما وظيفة أمّا في الجملة؟)",
                "options": ["Topikalizacja z emfaza: CO DO lekcji, to ja zrozumialem", "Przeczenie", "Pytanie", "Warunek"],
                "correct": "Topikalizacja z emfaza: CO DO lekcji, to ja zrozumialem",
                "explanation": "أَمَّا (amma) = co do / jesli chodzi o. To specjalna partykula TOPIKALIZACJI + WARUNKU. Budowa: أَمَّا + temat + فَـ + komentarz. أَمَّا الدرسَ فقد فهمتُه = CO DO lekcji, (to) ja juz ja zrozumialem. فَـ po أَمَّا jest OBOWIAZKOWE! Porownaj: أَمَّا أنا فَأذهبُ (co do mnie, to ide), أَمَّا هو فَيبقى (co do niego, to zostaje)."
            },
            {
                "id": "pa_top11",
                "question": "Jaka roznica miedzy: كتبتُ الرسالةَ و الرسالةَ كتبتُ?",
                "translation": "(ما الفرق بين الجملتين؟)",
                "options": ["Pierwsza neutralna, druga podkresla 'TO LIST' napisalem", "Identyczne", "Pierwsza przeszla, druga terazniejsza", "Pierwsza czynna, druga bierna"],
                "correct": "Pierwsza neutralna, druga podkresla 'TO LIST' napisalem",
                "explanation": "كتبتُ الرسالةَ = Napisalem list (neutralna informacja — co zrobilem? Napisalem list). الرسالةَ كتبتُ = TO LIST napisalem (nie e-mail, nie SMS — nacisk na DOPELNIENIE). Gramatyka identyczna (الرسالةَ w bierniku w obu), ale KOMUNIKACJA rozna. To jak w polskim: 'Napisalem list' (neutralnie) vs. 'LIST napisalem' (z akcentem). W arabskim zmiana szyku to FORMALNA technika."
            },
            {
                "id": "pa_top12",
                "question": "Kiedy topikalizacja الخبر jest ZABRONIONA?",
                "translation": "(متى يمتنع تقديم الخبر؟)",
                "options": ["Gdy المبتدأ i الخبر sa identyczne w formie i nie mozna ich rozrożnic", "Nigdy — zawsze mozna", "Zawsze — nigdy nie wolno", "Tylko w pytaniach"],
                "correct": "Gdy المبتدأ i الخبر sa identyczne w formie i nie mozna ich rozrożnic",
                "explanation": "Topikalizacja خبر jest ZABRONIONA gdy: خبر i مبتدأ maja IDENTYCZNA FORME i nie mozna ich odroznic: أخي صديقي = Moj brat jest moim przyjacielem. Jesli odwrocimy: صديقي أخي — nie wiemy co jest podmiotem! Oba sa في iste w formie (nie mozna mianownikiem/bierniem rozrożnic w idafa). Regula: zachowaj szyk, gdy zamiana spowodowalaby DWUZNACZNOSC."
            },
            {
                "id": "pa_top13",
                "question": "في الصباحِ أذهبُ إلى العملِ — jaki element jest topikalizowany?",
                "translation": "(ما العنصر المقدّم في الجملة؟)",
                "options": ["Okolicznik czasu (في الصباح) — podkreslenie kiedy", "Podmiot", "Dopelnienie", "Orzeczenie"],
                "correct": "Okolicznik czasu (في الصباح) — podkreslenie kiedy",
                "explanation": "في الصباحِ أذهبُ = RANO chodze do pracy. Normalnie: أذهبُ إلى العمل في الصباح. Przesuniecie okolicznika czasu na poczatek podkresla CZAS: rano (nie wieczorem). Mozna topikalizowac KAZDY element zdania: dopelnienie, okolicznik czasu, okolicznik miejsca, wyrazenie przyimkowe. Kazdy przypadek sluzy podkresleniu TEGO elementu."
            },
            {
                "id": "pa_top14",
                "question": "Czy topikalizacja jest czesta w nowoczesnym MSA?",
                "translation": "(هل التقديم والتأخير شائع في العربية المعاصرة؟)",
                "options": ["Tak — bardzo czesta, zwlaszcza w prasie i retorice", "Nie — tylko w Koranie", "Tylko w dialektach", "Tylko w poezji"],
                "correct": "Tak — bardzo czesta, zwlaszcza w prasie i retorice",
                "explanation": "Topikalizacja jest BARDZO CZESTA w nowoczesnym MSA: 1) PRASA: في بغدادَ وقعَ انفجارٌ (w Bagdadzie doszlo do eksplozji — miejsce podkreslone), 2) PRZEMOWIENIA: نحنُ الشعبَ نريدُ (my, lud, chcemy), 3) REKLAMA: جودةً عاليةً نقدّمُ (wysoka jakosc oferujemy). To NIE jest archaiczny zabieg — to zywá czesc arabskiej komunikacji codziennej."
            },
            {
                "id": "pa_top15",
                "question": "Ktore zdanie ma OBOWIAZKOWA topikalizacje خبر?",
                "translation": "(أي جملة فيها تقديم خبر واجب؟)",
                "options": ["في المكتبةِ كتبٌ كثيرةٌ", "الطالبُ مجتهدٌ", "ذهبَ الولدُ", "كتبتُ الرسالةَ"],
                "correct": "في المكتبةِ كتبٌ كثيرةٌ",
                "explanation": "في المكتبةِ كتبٌ كثيرةٌ = W bibliotece jest wiele ksiazek. كتبٌ (ksiazki) jest NIEOKRESLONE → nie moze stac na poczatku jako مبتدأ. Dlatego خبر (في المكتبة) MUSI byc przed nim. *كتبٌ كثيرةٌ في المكتبةِ = BLEDNE (nieokreslony مبتدأ na poczatku). Regula: nieokreslony podmiot → خبر musi go poprzedzac. To najczestrza przyczyna obowiazkowej topikalizacji."
            }
        ]
    },
    {
        "key": "emphasis_tawkid",
        "name": "Podkreslenie/Emfaza (التوكيد)",
        "description": "التوكيد اللفظي والمعنوي",
        "iconName": "bold",
        "color": "#c084fc",
        "level": "advanced",
        "items": [
            {
                "id": "pa_twk1",
                "question": "جاءَ المديرُ نَفْسُهُ — co znaczy 'نَفْسُهُ'?",
                "translation": "(ما معنى نفسه هنا؟)",
                "options": ["SAM (emfaza: dyrektor osobiscie)", "Jego dusza", "Sam siebie", "Inny dyrektor"],
                "correct": "SAM (emfaza: dyrektor osobiscie)",
                "explanation": "جاءَ المديرُ نَفْسُهُ = Przyszedl dyrektor OSOBISCIE/SAM. نَفْسُ tu to توكيد معنوي (emfaza znaczeniowa) — podkresla, ze to ON, nie ktos w jego imieniu. Reguly: 1) نَفْس musi zgadzac sie w przypadku z podkreslonym slowem: المديرُ (mian.) → نَفْسُهُ (mian.), 2) Zaimek dzierzawczy odnosi sie do podkreslanego: هُ = dyrektor. W polskim: 'sam' pelni te sama role."
            },
            {
                "id": "pa_twk2",
                "question": "Dwa typy التوكيد to:",
                "translation": "(ما نوعا التوكيد؟)",
                "options": ["لفظي (slowne — powtorzenie) i معنوي (znaczeniowe — نفس/عين)", "Przeszly i terazniejszy", "Meski i zenski", "Mianownikowy i biernikowy"],
                "correct": "لفظي (slowne — powtorzenie) i معنوي (znaczeniowe — نفس/عين)",
                "explanation": "Dwa typy emfazy: 1) التوكيد اللفظي (slowny): POWTORZENIE slowa: جاءَ جاءَ المديرُ (przyszedl, PRZYSZEDL dyrektor), 2) التوكيد المعنوي (znaczeniowy): uzycie specjalnych slow: نَفْس (sam), عَيْن (sam/osobiscie), كِلَا/كِلْتَا (obaj/obie), جَمِيع (wszyscy), كُلّ (kazdy/caly). Oba typy podkreslaja, ale na rozne sposoby. W polskim: 'sam dyrektor' vs. 'dyrektor, DYREKTOR'."
            },
            {
                "id": "pa_twk3",
                "question": "التوكيد اللفظي (slowny) polega na:",
                "translation": "(ما التوكيد اللفظي؟)",
                "options": ["Powtorzeniu slowa lub wyrazenia: ذهبَ ذهبَ", "Uzyciu نَفْس", "Uzyciu كُلّ", "Dodaniu nun emfatycznego"],
                "correct": "Powtorzeniu slowa lub wyrazenia: ذهبَ ذهبَ",
                "explanation": "التوكيد اللفظي = POWTORZENIE dokładne tego samego slowa: 1) Czasownik: جاءَ جاءَ المديرُ (przyszedl, PRZYSZEDL dyrektor), 2) Rzeczownik: الطالبُ الطالبُ مجتهدٌ (student, STUDENT jest pilny), 3) Partykula: لا لا أريدُ (nie, NIE chce). Mozna nawet powtorzyc cale ZDANIE: أنا ذاهبٌ أنا ذاهبٌ (ide, IDE). W polskim tez powtarzamy dla emfazy: 'nie, nie, nie chce!'"
            },
            {
                "id": "pa_twk4",
                "question": "رأيتُ الطلابَ أَنْفُسَهُمْ — dlaczego أَنْفُسَهُمْ w bierniku?",
                "translation": "(لماذا أنفسهم منصوبة؟)",
                "options": ["Bo podkresla الطلابَ ktore jest w bierniku (مفعول به)", "Bo jest podmiotem", "Bo to przysłowek", "Blad — powinno byc w mianowniku"],
                "correct": "Bo podkresla الطلابَ ktore jest w bierniku (مفعول به)",
                "explanation": "Regula KLUCZOWA: التوكيد المعنوي MUSI sie zgadzac w PRZYPADKU z podkreslanym slowem. الطلابَ jest dopelnieniem w bierniku (منصوب) → أَنْفُسَهُمْ tez w bierniku. Porownaj: رأيتُ الطلابَ أنفسَهم (biernik), جاءَ الطلابُ أنفسُهم (mianownik), مررتُ بالطلابِ أنفسِهم (dopelniacz). Trzy rozne koncowki zaleznie od podkreslanego slowa!"
            },
            {
                "id": "pa_twk5",
                "question": "Roznica miedzy نَفْس i عَيْن w التوكيد المعنوي:",
                "translation": "(ما الفرق بين نفس وعين في التوكيد؟)",
                "options": ["Identyczne znaczenie — oba = 'sam/osobiscie'", "نَفْس = dusza, عَيْن = oko", "نَفْس = meskie, عَيْن = zenskie", "نَفْس = l. poj., عَيْن = l. mn."],
                "correct": "Identyczne znaczenie — oba = 'sam/osobiscie'",
                "explanation": "W funkcji التوكيد, نَفْس i عَيْن maja IDENTYCZNE znaczenie = sam/osobiscie: جاءَ المديرُ نَفْسُهُ = جاءَ المديرُ عَيْنُهُ (dyrektor SAM przyszedl). Mozna nawet LACZYC: جاءَ نَفْسُهُ عَيْنُهُ (podwojna emfaza!). L. mn.: أَنْفُس (من نَفْس), أَعْيُن (من عَيْن). UWAGA: poza التوكيد, نَفْس = dusza/jaznie, عَيْن = oko/zrodlo — rozne znaczenia!"
            },
            {
                "id": "pa_twk6",
                "question": "كِلَا الرجلَيْنِ جاءَا — co znaczy كِلَا?",
                "translation": "(ما معنى كلا في التوكيد؟)",
                "options": ["OBAJ — podkreslenie obu osob", "Nie", "Jeden z nich", "Kazdy z osobna"],
                "correct": "OBAJ — podkreslenie obu osob",
                "explanation": "كِلَا = OBAJ (r.m.), كِلْتَا = OBIE (r.z.). Uzycie: podkreslenie ze chodzi o OBU, nie jednego. كِلَا الرجلَيْنِ جاءَا = OBAJ mezczyZni przyszli. Reguly: 1) Laczy sie z l. PODWOJNA w dopelniaczu: كِلَا الرجلَيْنِ, كِلْتَا المرأتَيْنِ, 2) Z zaimkiem: كِلَاهُمَا (obaj oni), كِلْتَاهُمَا (obie one). W polskim: 'obaj/obie' — dokladny odpowiednik."
            },
            {
                "id": "pa_twk7",
                "question": "قَرَأْتُ الكتابَ كُلَّهُ — co znaczy كُلَّهُ?",
                "translation": "(ما معنى كلّه هنا؟)",
                "options": ["CALY — przeczytałem cala ksiazke (nie czesc)", "Wielu", "Niektore", "Nic"],
                "correct": "CALY — przeczytałem cala ksiazke (nie czesc)",
                "explanation": "كُلّ jako توكيد معنوي = CALY/WSZYSCY — podkresla CALKOWITOSCI. قرأتُ الكتابَ كُلَّهُ = Przeczytałem ksiazke W CALOSCI. Reguly: 1) Zgadza sie w przypadku: الكتابَ (bier.) → كُلَّهُ (bier.), 2) Zaimek odnosi sie do podkreslanego: هُ = ksiazka. L. mn.: جاءَ الطلابُ كُلُّهُمْ (przyszli WSZYSCY studenci). كُلّ to jedno z najczestszych slow التوكيد."
            },
            {
                "id": "pa_twk8",
                "question": "جَمِيع jako توكيد — przyklad:",
                "translation": "(ما مثال جميع في التوكيد؟)",
                "options": ["حَضَرَ الموظفونَ جميعُهُمْ (przyszli pracownicy WSZYSCY)", "جميعُ الموظفينَ حضروا", "جميع = piekny", "جميع = grupa"],
                "correct": "حَضَرَ الموظفونَ جميعُهُمْ (przyszli pracownicy WSZYSCY)",
                "explanation": "جَمِيع jako توكيد = WSZYSCY (podkreslenie kompletnosci). حَضَرَ الموظفونَ جميعُهُمْ = Przyszli pracownicy WSZYSCY (bez wyjatku). Roznica od كُلّ: جميع nacisk na ZBIOROWOSC (wszyscy razem), كُلّ na KAZDY Z OSOBNA. Ale w praktyce czesto zastepowane. UWAGA: جَمِيع moze tez byc مبتدأ/فاعل: جَمِيعُ الناسِ (wszyscy ludzie) — tu NIE jest توكيد, lecz podmiot!"
            },
            {
                "id": "pa_twk9",
                "question": "إنَّ إنَّ العلمَ نورٌ — jaki to typ التوكيد?",
                "translation": "(ما نوع التوكيد في إنّ إنّ؟)",
                "options": ["لفظي — powtorzenie partykuly إنَّ", "معنوي z نفس", "Blad gramatyczny", "Nun emfatyczny"],
                "correct": "لفظي — powtorzenie partykuly إنَّ",
                "explanation": "إنَّ إنَّ العلمَ نورٌ = ZAISTE, ZAISTE wiedza jest swiatlem. Powtorzenie partykuly إنَّ = التوكيد اللفظي (slowny). Mozna powtarzac: 1) Czasowniki: جاءَ جاءَ, 2) Rzeczowniki: الحقُّ الحقُّ, 3) Partykuly: إنَّ إنَّ, لا لا, نَعَمْ نَعَمْ. Powtorzenie jest NAJPROSTRZA forma emfazy — istnieje w kazdym jezyku: 'tak, tak!', 'nie, nie!', 'idz, idz!'."
            },
            {
                "id": "pa_twk10",
                "question": "Czy التوكيد المعنوي wymaga ZGODNOSCI w rodzaju i liczbie?",
                "translation": "(هل يتبع التوكيد المعنوي المؤكَّد في الجنس والعدد؟)",
                "options": ["Tak — musi sie zgadzac w przypadku, rodzaju i liczbie", "Nie — niezmienny", "Tylko w przypadku", "Tylko w rodzaju"],
                "correct": "Tak — musi sie zgadzac w przypadku, rodzaju i liczbie",
                "explanation": "التوكيد المعنوي wymaga PELNEJ ZGODNOSCI z podkreslanym slowem: 1) PRZYPADEK: المديرُ نَفْسُهُ (mian.), المديرَ نَفْسَهُ (bier.), 2) RODZAJ: المديرةُ نَفْسُهَا (r.z. — zaimek هَا), 3) LICZBA: المدراءُ أَنْفُسُهُمْ (l. mn.). To jak polskie: 'sam dyrektor' (m.), 'sama dyrektorka' (z.), 'sami dyrektorzy' (l. mn.) — pelna zgodnosc."
            },
            {
                "id": "pa_twk11",
                "question": "Inne sposoby emfazy w arabskim (poza التوكيد):",
                "translation": "(ما طرق التوكيد الأخرى في العربية؟)",
                "options": ["قَدْ, إنَّ, لَـ, nun emfatyczny, zaimki osobne", "Tylko powtorzenie", "Tylko نَفْس", "Nie ma innych"],
                "correct": "قَدْ, إنَّ, لَـ, nun emfatyczny, zaimki osobne",
                "explanation": "Arabski ma WIELE narzedzi emfazy: 1) قَدْ + czas przeszly (pewnosc): قَدْ جاءَ (juz przyszedl), 2) إنَّ (zaiste): إنَّ الله كريم, 3) لَـ + przysieganie: لَأَفْعَلَنَّ, 4) Nun emfatyczny: يَكْتُبَنَّ, 5) Zaimek OSOBNY (izolowany): أنا كتبتُ (JA napisalem), 6) Topikalizacja, 7) Powtorzenie, 8) نَفْس/عَيْن. Arab ma BOGACTWO srodkow emfazy — wiecej niz wiekszosc jezykow."
            },
            {
                "id": "pa_twk12",
                "question": "رأيتُ الرجالَ أَجْمَعِينَ — co znaczy أَجْمَعِينَ?",
                "translation": "(ما معنى أجمعين؟)",
                "options": ["WSZYSTKICH bez wyjatku — emfaza kompletnosci", "Ladnych", "Starych", "Meskich"],
                "correct": "WSZYSTKICH bez wyjatku — emfaza kompletnosci",
                "explanation": "أَجْمَعِينَ = WSZYSTKICH (bez wyjatku). To توكيد معنوي o NAJSILNIEJSZEJ emfazie kompletnosci. تسلسل التوكيد (stopniowanie): كُلّ (caly/kazdy) → أَجْمَع (wszyscy bez wyjatku). Mozna laczyc: جاءَ الطلابُ كُلُّهُمْ أَجْمَعُونَ (przyszli studenci WSZYSCY, ale ABSOLUTNIE WSZYSCY). أَجْمَع nie uzywa sie samodzielnie — zawsze WZMACNIA كُلّ."
            },
            {
                "id": "pa_twk13",
                "question": "W zdaniu: العلمُ العلمُ نافعٌ — jaki typ التوكيد?",
                "translation": "(ما نوع التوكيد في العلم العلم نافع؟)",
                "options": ["لفظي — powtorzenie rzeczownika العلم", "معنوي z نفس", "Topikalizacja", "Idafa"],
                "correct": "لفظي — powtorzenie rzeczownika العلم",
                "explanation": "العلمُ العلمُ نافعٌ = Wiedza, WIEDZA jest pozyteczna. التوكيد اللفظي przez powtorzenie rzeczownika. Drugie العلمُ jest تابع (towarzysz gramatyczny) — podaza za pierwszym w przypadku. Analiza: العلمُ (مبتدأ), العلمُ (توكيد لفظي), نافعٌ (خبر). W mowie: pauza po pierwszym العلم, nacisk na drugie. W polskim: 'Wiedza, WIEDZA jest wazna!' — identyczny efekt."
            },
            {
                "id": "pa_twk14",
                "question": "Jaka pozycja التوكيد w stosunku do podkreslanego slowa?",
                "translation": "(أين يقع التوكيد من المؤكَّد؟)",
                "options": ["ZAWSZE po podkreslanym slowie (تابع)", "Przed", "Obojetnie", "Na koncu zdania"],
                "correct": "ZAWSZE po podkreslanym slowie (تابع)",
                "explanation": "التوكيد jest تابع (towarzysz gramatyczny) — ZAWSZE stoi PO podkreslanym slowie. جاءَ المديرُ نَفْسُهُ (nie: *نَفْسُهُ جاءَ المديرُ). Inne التوابع (towarzyszu): 1) النعت (przymiotnik): الرجلُ الطويلُ, 2) التوكيد (emfaza): الرجلُ نَفْسُهُ, 3) العطف (koniunkcja): الرجلُ والمرأةُ, 4) البدل (apozycja): عمرُ الخليفةُ. Wszystkie podazaja ZA glownym slowem."
            },
            {
                "id": "pa_twk15",
                "question": "Ktore zdanie zawiera التوكيد المعنوي?",
                "translation": "(أي جملة فيها توكيد معنوي؟)",
                "options": ["قابلتُ الوزيرَ عَيْنَهُ", "قابلتُ الوزيرَ الوزيرَ", "قابلتُ وزيراً", "لم أقابلْ الوزيرَ"],
                "correct": "قابلتُ الوزيرَ عَيْنَهُ",
                "explanation": "قابلتُ الوزيرَ عَيْنَهُ = Spotkalem ministra OSOBISCIE. عَيْنَهُ = توكيد معنوي (znaczeniowy) z uzyciem عَيْن. Format: الوزيرَ (bier.) → عَيْنَهُ (bier. — zgadza sie). Porownaj: قابلتُ الوزيرَ الوزيرَ = توكيد لفظي (slowny — powtorzenie). Oba podkreslaja, ale: معنوي = 'osobiscie/sam', لفظي = powtorzenie dla efektu. عين jest formalniejsze."
            }
        ]
    },
    {
        "key": "badal_apposition",
        "name": "Apozycja (البدل)",
        "description": "البدل وأنواعه في العربية",
        "iconName": "equal.circle",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_bdl1",
                "question": "زارَ الخليفةُ عمرُ المدينةَ — jaka relacja miedzy الخليفة i عمر?",
                "translation": "(ما العلاقة بين الخليفة وعمر؟)",
                "options": ["Apozycja (بدل) — عمر zastepuje/precyzuje الخليفة", "Dopelnienie", "Idafa", "Przymiotnik"],
                "correct": "Apozycja (بدل) — عمر zastepuje/precyzuje الخليفة",
                "explanation": "عمرُ jest بَدَل كُلّ مِنْ كُلّ (apozycja calosciowa) od الخليفةُ. Znaczenie: Kalif — (mianowicie) Omar — odwiedzil Medyne. عمرُ PRECYZUJE kim jest الخليفة. Oba w mianowniku (مرفوع). Regula: بدل PODAŻA za przypadkiem slowa, ktore precyzuje (المبدل منه). W polskim: 'Kalif, Omar, odwiedzil Medyne' — przecinek pelni te sama rola."
            },
            {
                "id": "pa_bdl2",
                "question": "Trzy glowne typy البدل to:",
                "translation": "(ما أنواع البدل الثلاثة؟)",
                "options": ["بدل كل من كل (calosciowy), بدل بعض من كل (czesciowy), بدل اشتمال (obejmujacy)", "Meski, zenski, nijaki", "Mianownikowy, biernikowy, dopelniaczowy", "Pojedynczy, podwojny, mnogi"],
                "correct": "بدل كل من كل (calosciowy), بدل بعض من كل (czesciowy), بدل اشتمال (obejmujacy)",
                "explanation": "Trzy typy البدل: 1) بدل كُلّ مِنْ كُلّ (calosciowy): عمرُ = الخليفة (to samo), 2) بدل بَعْض مِنْ كُلّ (czesciowy): أكلتُ التفاحةَ نصفَها (zjadlem jablko — polowe go), 3) بدل اِشْتِمَال (obejmujacy): أعجبني الطالبُ ذكاؤُهُ (spodobal mi sie student — jego inteligencja). Kazdy typ wyraza inny rodzaj PRECYZACJI."
            },
            {
                "id": "pa_bdl3",
                "question": "أكلتُ التفاحةَ نِصْفَها — jaki to typ بدل?",
                "translation": "(ما نوع البدل في أكلت التفاحة نصفها؟)",
                "options": ["بدل بعض من كل (czesciowy) — polowa jablka", "بدل كل من كل", "بدل اشتمال", "Nie jest بدل"],
                "correct": "بدل بعض من كل (czesciowy) — polowa jablka",
                "explanation": "نِصْفَها = بدل بعض من كل. Znaczenie: zjadlem jablko — (mianowicie) POLOWE go. نصفَها (polowe go) to CZESC التفاحة (jablka). Reguly بدل بعض: 1) Musi miec ZAIMEK odnoszacy sie do المبدل منه: نصفَ + ها (= jablko), 2) Zaimek LACZY czesc z caloscia, 3) Przypadek bgdl = przypadek المبدل منه: التفاحةَ (bier.) → نصفَها (bier.)."
            },
            {
                "id": "pa_bdl4",
                "question": "أعجبَتْني المدينةُ طقسُها — jaki to typ بدل?",
                "translation": "(ما نوع البدل في المدينة طقسها؟)",
                "options": ["بدل اشتمال (obejmujacy) — pogoda jest ASPEKTEM miasta", "بدل كل من كل", "بدل بعض من كل", "Przymiotnik"],
                "correct": "بدل اشتمال (obejmujacy) — pogoda jest ASPEKTEM miasta",
                "explanation": "طَقْسُها = بدل اشتمال. Miasto podobalo mi sie — (mianowicie) jego POGODA. Pogoda nie jest CZESCIA miasta (jak polowa jablka), ale ASPEKTEM/WLASCIWOSCIA miasta. Roznica: بعض = fizyczna czesc (polowa, reka, dach), اشتمال = abstrakcyjna wlasciwosc (pogoda, piekno, inteligencja). Oba wymagaja zaimka: طقسُ + ها (= miasto)."
            },
            {
                "id": "pa_bdl5",
                "question": "Czy البدل musi sie zgadzac w przypadku z المبدل منه?",
                "translation": "(هل يتبع البدل المبدل منه في الإعراب؟)",
                "options": ["Tak — ZAWSZE ten sam przypadek", "Nie — ma wlasny przypadek", "Tylko w mianowniku", "Tylko w bierniku"],
                "correct": "Tak — ZAWSZE ten sam przypadek",
                "explanation": "Regula KLUCZOWA: البدل podaza za المبدل منه w PRZYPADKU: 1) Mianownik: جاءَ الرئيسُ محمدٌ, 2) Biernik: رأيتُ الرئيسَ محمداً, 3) Dopelniacz: مررتُ بالرئيسِ محمدٍ. بدل jest تابع (towarzysz) — jak przymiotnik, emfaza i koniunkcja. Wszystkie توابع podazaja w przypadku za glownym slowem. To FUNDAMENTALNE w analizie gramatycznej (إعراب)."
            },
            {
                "id": "pa_bdl6",
                "question": "سَرَقَ اللصُّ المالَ الذهبَ — analiza بدل:",
                "translation": "(حلّل البدل في هذه الجملة)",
                "options": ["الذهبَ = بدل كل من كل od المالَ (zloto precyzuje 'majatek')", "Dwa dopelnienia", "Przymiotnik", "Idafa"],
                "correct": "الذهبَ = بدل كل من كل od المالَ (zloto precyzuje 'majatek')",
                "explanation": "الذهبَ (zloto) precyzuje المالَ (majatek/pieniadze): zlodziej ukradl majatek — (mianowicie) ZLOTO. بدل كل من كل: الذهب = المال (to samo, bardziej precyzyjnie). Oba w bierniku (مفعول به منصوب). Uwaga: to NIE jest przymiotnik (byloby: المالَ الذهبيَّ = zloty majatek). بدل to ODREBNA kategoria — precyzuje przez ZASTAPIENIE, nie przez opis."
            },
            {
                "id": "pa_bdl7",
                "question": "Roznica miedzy البدل a النعت (przymiotnik):",
                "translation": "(ما الفرق بين البدل والنعت؟)",
                "options": ["بدل PRECYZUJE/ZASTEPUJE, نعت OPISUJE ceche", "Nie ma roznicy", "بدل jest przed, نعت po", "بدل tylko z imieniem wlasnym"],
                "correct": "بدل PRECYZUJE/ZASTEPUJE, نعت OPISUJE ceche",
                "explanation": "Kluczowa roznica: 1) النعت (przymiotnik) OPISUJE ceche: الرجلُ الطويلُ (wysoki mezczyzna — opisuje jaki), 2) البدل PRECYZUJE/IDENTYFIKUJE: الخليفةُ عمرُ (kalif — Omar — identyfikuje ktory). Test: czy mozna USUNAC pierwsze slowo i zachowac sens? بدل: tak (عمرُ زارَ = Omar odwiedzil — sens zachowany). نعت: nie (*الطويلُ جاءَ = wysoki przyszedl — kto?)."
            },
            {
                "id": "pa_bdl8",
                "question": "هذا الكتابُ — czy هذا jest بدل?",
                "translation": "(هل هذا الكتاب فيه بدل؟)",
                "options": ["Tak — الكتابُ jest بدل od هذا (precyzuje 'ten' = ta ksiazka)", "Nie — to przymiotnik", "Nie — to idafa", "Nie — to podmiot"],
                "correct": "Tak — الكتابُ jest بدل od هذا (precyzuje 'ten' = ta ksiazka)",
                "explanation": "W هذا الكتابُ, الكتابُ jest بدل كل من كل od zaimka wskazujacego هذا. Precyzuje: 'ten' — (mianowicie) 'ksiazka'. Alternatywna analiza: الكتاب = عطف بيان (apozycja wyjasniajaca) — gramatycy sie spieraja! Obie analizy sa akceptowane. Wazne: الكتابُ podaza w przypadku za هذا (mianownik). To czesty przyklad بدل w codziennym arabskim."
            },
            {
                "id": "pa_bdl9",
                "question": "أُحِبُّ الفاكهةَ التفاحَ — analiza:",
                "translation": "(حلّل: أحب الفاكهة التفاح)",
                "options": ["التفاحَ = بدل بعض من كل (jablka sa czescia owocow)", "بدل كل من كل", "Przymiotnik", "Dwa dopelnienia"],
                "correct": "التفاحَ = بدل بعض من كل (jablka sa czescia owocow)",
                "explanation": "Uwaga: to jest dyskusyjne! Niektorzy gramatycy analizuja to jako بدل بعض من كل (jablka = czesc owocow). Inni jako بدل كل من كل (jablka precyzuja owоce). Kluczowe: التفاحَ w bierniku (like الفاكهةَ). Sens: Lubie owoce — (zslaszcza/mianowicie) jablka. Tu بدل nie ma zaimka (normalnie بعض wymaga zaimka), co moze swiadczyc o بدل كل. Gramatyka arabska dopuszcza rozne analizy!"
            },
            {
                "id": "pa_bdl10",
                "question": "Czy بدل moze byc od zaimka?",
                "translation": "(هل يُبدل من الضمير؟)",
                "options": ["Tak — رأيتُكَ إياكَ (widzialem CIE — ciebie osobiscie)", "Nie — nigdy", "Tylko w mianowniku", "Tylko od zaimkow wskazujacych"],
                "correct": "Tak — رأيتُكَ إياكَ (widzialem CIE — ciebie osobiscie)",
                "explanation": "بدل moze byc od ZAIMKA: رأيتُكَ إيَّاكَ (widzialem CIE — ciebie osobiscie). Czestszy przyklad: مررتُ بِهِ زيدٍ (przeszedlem obok NIEGO — Zajda). هِ (zaimek) → زيدٍ (بدل precyzujacy). Regula: بدل ma ten sam przypadek co zaimek: بِهِ (dopelniacz po بِـ) → زيدٍ (dopelniacz). To wazne w Koranie: اِهْدِنَا الصراطَ (prowadz NAS — droga prosta)."
            },
            {
                "id": "pa_bdl11",
                "question": "W Koranie: اِهْدِنَا الصِّرَاطَ المُسْتَقِيمَ * صِرَاطَ الَّذِينَ — co jest بدل?",
                "translation": "(أين البدل في هذه الآية؟)",
                "options": ["صراطَ الذين = بدل od الصراطَ المستقيمَ", "المستقيم = بدل", "الذين = بدل", "Nie ma بدل"],
                "correct": "صراطَ الذين = بدل od الصراطَ المستقيمَ",
                "explanation": "صِرَاطَ الَّذِينَ (Al-Fatiha 1:6-7) = بدل كل من كل od الصِّرَاطَ المُسْتَقِيمَ. Precyzacja: 'prosta droga' — (mianowicie) 'droga tych, ktorym darowales laske'. Oba w bierniku (مفعول به منصوب). Ten gest jest KLASYCZNYM przykladem بدل w gramatyce arabskiej — uczniowie ucza sie go od pierwszych lekcji إعراب. Precyzuje ABSTRAKT (prosta droga) przez KONKRET (droga blagoslawionych)."
            },
            {
                "id": "pa_bdl12",
                "question": "Roznica miedzy بدل a عطف بيان:",
                "translation": "(ما الفرق بين البدل وعطف البيان؟)",
                "options": ["Bardzo podobne — gramatycy sie spieraja; عطف بيان nie zastepuje, tylko wyjasnia", "Identyczne", "بدل jest po, عطف بيان przed", "بدل = czesciowy, عطف بيان = calosciowy"],
                "correct": "Bardzo podobne — gramatycy sie spieraja; عطف بيان nie zastepuje, tylko wyjasnia",
                "explanation": "بدل i عطف بيان sa BARDZO PODOBNE — gramatycy arabscy od wiekow dyskutuja! Glowna roznica (teoretyczna): 1) بدل: mozna USUNAC المبدل منه (zachowujac sens), bo بدل ZASTEPUJE, 2) عطف بيان: nie mozna usunac pierwszego, bo عطف tylko WYJASNIA/DOPOWIADA. Przyklad: هذا الكتابُ — czy الكتاب zastepuje هذا (بدل) czy tylko go wyjasnia (عطف بيان)? Zalezy od gramatyka!"
            },
            {
                "id": "pa_bdl13",
                "question": "سُرِقَ المتحفُ لوحاتُهُ — analiza بدل اشتمال:",
                "translation": "(حلّل البدل في: سُرق المتحف لوحاته)",
                "options": ["لوحاتُهُ = بدل اشتمال (obrazy sa aspektem muzeum)", "بدل كل من كل", "بدل بعض من كل", "Podmiot"],
                "correct": "لوحاتُهُ = بدل اشتمال (obrazy sa aspektem muzeum)",
                "explanation": "Uwaga: to jest dyskusyjne miedzy بدل بعض i بدل اشتمال. Obrazy sa CZESCIA muzeum (fizyczna czesc) → بدل بعض من كل. Ale mozna argumentowac: obrazy sa ZAWARTOSC (abstraktem) → بدل اشتمال. Kluczowe: لوحاتُهُ w mianowniku (jak المتحفُ — نائب فاعل). Zaimek هُ laczy apozycje z glownym slowem. Sens: Muzeum zostalo okradzione — (mianowicie) jego OBRAZY."
            },
            {
                "id": "pa_bdl14",
                "question": "Pozycja البدل w zdaniu jest ZAWSZE:",
                "translation": "(أين يقع البدل في الجملة؟)",
                "options": ["PO المبدل منه (po slowie ktore precyzuje)", "Przed", "Na poczatku", "Na koncu"],
                "correct": "PO المبدل منه (po slowie ktore precyzuje)",
                "explanation": "البدل jest تابع — ZAWSZE PO المبدل منه: الخليفةُ عمرُ (nie: *عمرُ الخليفةُ w sensie badal). To jak wszystkie توابع: النعت (przymiotnik), التوكيد (emfaza), العطف (koniunkcja) — wszystkie po glownym slowie. Szyk توابع jest ustalony: 1. النعت, 2. التوكيد, 3. البدل, 4. العطف. Ale w praktyce kolejnosc moze sie zmieniac."
            },
            {
                "id": "pa_bdl15",
                "question": "Ktore zdanie zawiera بدل كل من كل?",
                "translation": "(أي جملة فيها بدل كل من كل؟)",
                "options": ["قابلتُ الأستاذَ خالداً", "أكلتُ الخبزَ نصفَهُ", "أعجبني البيتُ حديقتُهُ", "ذهبتُ إلى البيتِ"],
                "correct": "قابلتُ الأستاذَ خالداً",
                "explanation": "قابلتُ الأستاذَ خالداً = Spotkalem profesora — Halida. خالداً = بدل كل من كل (Halid = profesor, to ta sama osoba). Oba w bierniku. Porownaj: نصفَهُ = بدل بعض (czesc), حديقتُهُ = بدل اشتمال (aspekt). Jak rozrożniac? 1) Cala osoba/rzecz = كل من كل, 2) Fizyczna czesc = بعض من كل (z zaimkiem), 3) Abstrakcyjny aspekt = اشتمال (z zaimkiem)."
            }
        ]
    },
    {
        "key": "five_nouns",
        "name": "Piec rzeczownikow (الأسماء الخمسة)",
        "description": "أبو، أخو، حمو، فو، ذو — إعرابها بالحروف",
        "iconName": "5.circle",
        "color": "#818cf8",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_fn1",
                "question": "Piec rzeczownikow (الأسماء الخمسة) to:",
                "translation": "(ما الأسماء الخمسة؟)",
                "options": ["أبو, أخو, حمو, فو, ذو", "هو, هي, هم, أنا, نحن", "كتاب, قلم, باب, بيت, شمس", "ما, مَن, كيف, أين, متى"],
                "correct": "أبو, أخو, حمو, فو, ذو",
                "explanation": "الأسماء الخمسة (Piec Rzeczownikow) to specjalna grupa: 1) أَبٌ (ojciec), 2) أَخٌ (brat), 3) حَمٌ (tesc), 4) فَمٌ (usta), 5) ذُو (posiadacz/wlasciciel). Sa specjalne, bo odmieniaja sie przez LITERY (nie samogloskr): mianownik و, biernik ا, dopelniacz ي. Np.: أَبُوكَ (twoj ojciec — mian.), أَبَاكَ (bier.), أَبِيكَ (dop.). To JEDYNY typ odmiany literowej w arabskim."
            },
            {
                "id": "pa_fn2",
                "question": "جاءَ أبوكَ — dlaczego 'أبوك' a nie 'أبُك'?",
                "translation": "(لماذا أبوك وليس أبُك؟)",
                "options": ["Mianownik الأسماء الخمسة wyraza sie przez و (واو)", "Blad", "Dopelniacz", "Biernik"],
                "correct": "Mianownik الأسماء الخمسة wyraza sie przez و (واو)",
                "explanation": "جاءَ أَبُوكَ = Przyszedl twoj ojciec. أبو = mianownik (فاعل مرفوع). Odmiana: مرفوع بالواو (mianownik przez و), منصوب بالألف (biernik przez ا), مجرور بالياء (dopelniacz przez ي). Normalnie: damma/fatha/kasra. Tu: و/ا/ي. Dlaczego? To pozosatosc STARSZEGO systemu odmiany arabskiej, zachowana w tych pięciu slowach."
            },
            {
                "id": "pa_fn3",
                "question": "رأيتُ أباكَ — jaki to przypadek i dlaczego ا?",
                "translation": "(ما إعراب أباك ولماذا بالألف؟)",
                "options": ["Biernik (منصوب بالألف) — dopelnienie bliższe", "Mianownik", "Dopelniacz", "Bezokolicznik"],
                "correct": "Biernik (منصوب بالألف) — dopelnienie bliższe",
                "explanation": "رأيتُ أَبَاكَ = Widzialem twojego ojca. أبا = biernik (مفعول به منصوب بالألف). Odmiana: أَبُو (mian. — و), أَبَا (bier. — ا), أَبِي (dop. — ي). W polskim: 'ojciec' (mian.), 'ojca' (dop./bier.) — w obu jezykach rdzen sie zmienia! Ale w arabskim normalne slowa uzywaja samoglosek (ُ ـَ ـِ), a te pieca — calych liter (و ا ي). To wyjatkowe."
            },
            {
                "id": "pa_fn4",
                "question": "مررتُ بأخيكَ — jaki przypadek i dlaczego ي?",
                "translation": "(ما إعراب أخيك ولماذا بالياء؟)",
                "options": ["Dopelniacz (مجرور بالياء) — po przyimku بِـ", "Mianownik", "Biernik", "Bezokolicznik"],
                "correct": "Dopelniacz (مجرور بالياء) — po przyimku بِـ",
                "explanation": "مررتُ بِأَخِيكَ = Przeszedlem obok twojego brata. أخي = dopelniacz (مجرور بالياء) po przyimku بِـ. Przyimki wymagaja dopelniaczu → أخ odmienia sie przez ي (nie kasre). Pelna odmiana أخ: أَخُوكَ (mian. — twoj brat), أَخَاكَ (bier.), أَخِيكَ (dop.). Porownaj z normalnym: كتابُكَ (mian.), كتابَكَ (bier.), كتابِكَ (dop.) — samogloski, nie litery."
            },
            {
                "id": "pa_fn5",
                "question": "Warunki odmiany الأسماء الخمسة przez litery:",
                "translation": "(ما شروط إعراب الأسماء الخمسة بالحروف؟)",
                "options": ["W idafie lub z zaimkiem, l. poj., nie zdrobnialy", "Zawsze", "Tylko z الـ", "Tylko w l. mn."],
                "correct": "W idafie lub z zaimkiem, l. poj., nie zdrobnialy",
                "explanation": "Warunki odmiany literowej: 1) Musi byc w IDAFIE (z dopelniaczem/zaimkiem): أبوكَ (twoj ojciec) ✓, 2) L. POJEDYNCZAJ: أبو ✓ (nie أبوان = dwaj ojcowie), 3) Nie ZDROBNIALY: أبو ✓ (nie أُبَيّ). Jesli warunki NIE spelnione: normalne samogloski: هذا أبٌ (to ojciec — bez idafy → normalna damma). Przyklady BLEDNE: *جاءَ الأبو (z الـ — kontrowersyjne, niektorzy akceptuja)."
            },
            {
                "id": "pa_fn6",
                "question": "ذو علمٍ — co znaczy ذو i jak sie odmienia?",
                "translation": "(ما معنى ذو وكيف يُعرب؟)",
                "options": ["Posiadacz/wlasciciel czegosc — odmiana: ذو, ذا, ذي", "Tamten", "Brat", "Ojciec"],
                "correct": "Posiadacz/wlasciciel czegosc — odmiana: ذو, ذا, ذي",
                "explanation": "ذُو = posiadacz/wlasciciel. ذو علمٍ = posiadacz wiedzy = uczony. Odmiana: ذُو (mian.), ذَا (bier.), ذِي (dop.). UWAGA: ذو ZAWSZE wymaga idafy (nigdy *ذو samodzielnie): ذو مالٍ (bogacz), ذو خبرةٍ (doswiadczony). R. zenski: ذَاتُ (mian.), ذَاتَ (bier.), ذَاتِ (dop.): ذاتُ جمالٍ (piekna kobieta). L. mn.: ذَوُو (mian.), ذَوِي (bier./dop.)."
            },
            {
                "id": "pa_fn7",
                "question": "فوكَ نظيفٌ — co znaczy فو i jaki to przypadek?",
                "translation": "(ما معنى فوك وما إعرابه؟)",
                "options": ["Twoje usta — mianownik (مرفوع بالواو)", "Twoja reka — biernik", "Twoje oko — dopelniacz", "Twoja glowa — mianownik"],
                "correct": "Twoje usta — mianownik (مرفوع بالواو)",
                "explanation": "فُوكَ نظيفٌ = Twoje usta sa czyste. فو = usta (فَم w pelnej formie). W idafie z zaimkiem: فُوكَ (mian.), فَاكَ (bier.), فِيكَ (dop.). BEZ idafy: فَمٌ/فَمُ (normalna odmiana z mim). UWAGA: فو jest NAJRZADZIEJ uzywane z pięciu — w nowoczesnym MSA czesciej: فَمُكَ (twoje usta — normalna odmiana). W klasycznym: فوك. Dla studenta: warto znac, ale aktywnie uzywac فَم."
            },
            {
                "id": "pa_fn8",
                "question": "حموكِ كريمٌ — co to znaczy?",
                "translation": "(ما معنى حموكِ كريم؟)",
                "options": ["Twoj (f.) tesc jest hojny", "Twoj brat jest hojny", "Twoj ojciec jest hojny", "Twoj maz jest hojny"],
                "correct": "Twoj (f.) tesc jest hojny",
                "explanation": "حَمُوكِ كريمٌ = Twoj tesc jest hojny (mowiac do kobiety — كِ). حَمٌ/حَمُو = tesc/powinowaty. Odmiana: حَمُوكِ (mian.), حَمَاكِ (bier.), حَمِيكِ (dop.). To NAJRZADSZE z pięciu — nawet wielu Arabow go nie uzywa w codziennej mowie. W dialektach: حما (mama meza) lub عم/خال. W MSA formalnym: حَمٌ. Dla studenta: warto wiedziec, ze istnieje, aktywnie uzywac dwoch: أب i أخ."
            },
            {
                "id": "pa_fn9",
                "question": "هذا أبٌ كريمٌ — dlaczego 'أبٌ' z damma a nie 'أبو'?",
                "translation": "(لماذا أبٌ بالضمة وليس أبو؟)",
                "options": ["Bo nie jest w idafie (brak zaimka/dopelniacza) — normalna odmiana", "Blad ortograficzny", "Czas przeszly", "Strona bierna"],
                "correct": "Bo nie jest w idafie (brak zaimka/dopelniacza) — normalna odmiana",
                "explanation": "هذا أبٌ كريمٌ = To hojny ojciec. أبٌ (z tanwinem damma) — NORMALNA odmiana, bo أب NIE jest w idafie. Regula: الأسماء الخمسة odmieniaja sie literami (و ا ي) TYLKO gdy: 1) Sa w idafie: أبوكَ, أبو محمد, 2) L. poj. 3) Nie zdrobnialy. Bez idafy → normalna damma/fatha/kasra: أبٌ (mian.), أباً (bier.), أبٍ (dop.). To KLUCZOWY warunek!"
            },
            {
                "id": "pa_fn10",
                "question": "Jak odmieniaja sie الأسماء الخمسة w l. podwojnej?",
                "translation": "(كيف تُعرب الأسماء الخمسة في المثنى؟)",
                "options": ["Normalnie jak l. podwojna: أبوانِ/أبَوَيْنِ", "Literami: أبوو/أبوا/أبوي", "Nie maja l. podwojnej", "Jak l. mnoga"],
                "correct": "Normalnie jak l. podwojna: أبوانِ/أبَوَيْنِ",
                "explanation": "W l. podwojnej الأسماء الخمسة traca SPECJALNA odmiane → normalne reguly l. podwojnej: أَبَوَانِ (dwaj ojcowie — mian.), أَبَوَيْنِ (bier./dop.). أَخَوَانِ (dwaj bracia), أَخَوَيْنِ. Regula: odmiana literowa TYLKO w l. poj. z idafie. W innych formach: normalna. L. mn.: آبَاء (ojcowie), إِخْوَة/إِخْوَان (bracia) — lamana l. mn., normalna odmiana."
            },
            {
                "id": "pa_fn11",
                "question": "أبُو بكرٍ — dlaczego 'أبو' a nie 'أبُ'?",
                "translation": "(لماذا أبو بكر وليس أبُ بكر؟)",
                "options": ["Bo jest w idafie (أبو + بكر) — odmiana literowa", "Imie wlasne nieodmienne", "Blad", "Dialekt"],
                "correct": "Bo jest w idafie (أبو + بكر) — odmiana literowa",
                "explanation": "أَبُو بكرٍ = Ojciec Bakra (= Abu Bakr, imie). أبو jest w IDAFIE z بكر → odmiana literowa: أبُو (mian.). Gdyby biernik: رأيتُ أَبَا بكرٍ. Dopelniacz: مررتُ بأَبِي بكرٍ. To czeste w IMIONACH arabskich: أبو هريرة (Abu Hurajra), أبو عمر, أبو الطيب. W imionach ownych idafa jest zachowana → odmiana literowa dziala."
            },
            {
                "id": "pa_fn12",
                "question": "ذو المالِ سعيدٌ — analiza zdania:",
                "translation": "(أعرب: ذو المال سعيد)",
                "options": ["ذو = مبتدأ مرفوع بالواو, المال = مضاف إليه, سعيد = خبر", "ذو = فعل, المال = فاعل", "ذو = حرف, المال = مبتدأ", "Blad gramatyczny"],
                "correct": "ذو = مبتدأ مرفوع بالواو, المال = مضاف إليه, سعيد = خبر",
                "explanation": "ذو المالِ سعيدٌ = Posiadacz majatku jest szczesliwy / Bogacz jest szczesliwy. Analiza: ذو = مبتدأ مرفوع وعلامة رفعه الواو (podmiot — mianownik przez و bo z pięciu), المالِ = مضاف إليه مجرور (dopelniacz w idafie), سعيدٌ = خبر مرفوع بالضمة (orzeczenie — mianownik normalny). Uwaga: ذو NIGDY nie stoi samo — ZAWSZE w idafie."
            },
            {
                "id": "pa_fn13",
                "question": "Czy mozna powiedziec 'ذو الأخلاقِ' (czlowiek o dobrych manierach)?",
                "translation": "(هل يصح ذو الأخلاق؟)",
                "options": ["Tak — ذو + rzeczownik = posiadacz tej cechy", "Nie — ذو tylko z osobami", "Nie — ذو tylko z l. poj.", "Nie — ذو tylko z rzeczami"],
                "correct": "Tak — ذو + rzeczownik = posiadacz tej cechy",
                "explanation": "ذو الأخلاقِ = czlowiek o (dobrych) manierach. ذو LACZY sie z kazdym rzeczownikiem w idafie: ذو خُلُقٍ (dobrze wychowany), ذو فَضْلٍ (zasluzony), ذو شأنٍ (wazna osoba), ذو مكانةٍ (o wysokiej pozycji). R. zenski: ذاتُ جمالٍ (piekna), ذاتُ خبرةٍ (doswiadczona). L. mn.: ذَوُو الاحتياجاتِ الخاصةِ (osoby o specjalnych potrzebach). Bardzo produktywna konstrukcja!"
            },
            {
                "id": "pa_fn14",
                "question": "Ktora forma jest BLEDNA?",
                "translation": "(أي صيغة خاطئة؟)",
                "options": ["جاءَ أبوي (BLEDNE — mieszanie و i ي)", "جاءَ أبوكَ", "رأيتُ أباكَ", "مررتُ بأبيكَ"],
                "correct": "جاءَ أبوي (BLEDNE — mieszanie و i ي)",
                "explanation": "أَبُويَ = BLEDNE! Nie mozna laczyc و (mianownik) z ي (dopelniacz). Poprawne formy: أَبُو + zaimek (mian.): أبوكَ, أبوهُ, أبوها. أَبِي + zaimek (dop.): أبيكَ, أبيهِ, أبيها. أَبَا + zaimek (bier.): أَبَاكَ, أبَاهُ, أبَاها. Kazdy przypadek ma JEDNA litere: و (mian.), ا (bier.), ي (dop.) — nigdy dwie naraz."
            },
            {
                "id": "pa_fn15",
                "question": "Ktore z tych slow NIE nalezy do الأسماء الخمسة?",
                "translation": "(أي كلمة ليست من الأسماء الخمسة؟)",
                "options": ["اِبْن (syn)", "أَبٌ (ojciec)", "أَخٌ (brat)", "ذُو (posiadacz)"],
                "correct": "اِبْن (syn)",
                "explanation": "اِبْن (syn) NIE nalezy do الأسماء الخمسة! Odmienia się normalnie: اِبْنٌ (mian.), اِبْناً (bier.), اِبْنٍ (dop.) — samogloski, nie litery. Piec to: أب (ojciec), أخ (brat), حم (tesc), فم (usta), ذو (posiadacz). Ciekawe: 'ojciec' jest w grupie, ale 'syn' nie! Niektorzy gramatycy dodaja szosty: هَنٌ (eufemizm = cos wstydliwego) — ale to kontrowersyjne."
            }
        ]
    },
    {
        "key": "diptote_nouns",
        "name": "Rzeczowniki diptotyczne (الممنوع من الصرف)",
        "description": "الأسماء الممنوعة من الصرف — لا تنوين ولا كسرة",
        "iconName": "nosign",
        "color": "#f472b6",
        "level": "advanced",
        "items": [
            {
                "id": "pa_dpt1",
                "question": "Rzeczownik diptotyczny (ممنوع من الصرف) to taki, ktory:",
                "translation": "(ما الاسم الممنوع من الصرف؟)",
                "options": ["Nie przyjmuje tanwinu i kasry w dopelniaczu — zamiast kasry: fatha", "Nie odmienia sie wcale", "Ma tylko mianownik", "Jest zawsze nieokreslony"],
                "correct": "Nie przyjmuje tanwinu i kasry w dopelniaczu — zamiast kasry: fatha",
                "explanation": "الممنوع من الصرف = 'zakazany od tanwinu'. Normalna odmiana: كتابٌ (mian.), كتاباً (bier.), كتابٍ (dop.). Diptotyczna: أحمدُ (mian.), أحمدَ (bier.), أحمدَ (dop. — FATHA zamiast kasry!). Dwie roznice: 1) BRAK tanwinu (ٌ ً ٍ), 2) Dopelniacz przez FATHE (nie kasre). Mianownik: normalny (damma). Biernik: normalny (fatha). Tylko dopelniacz jest inny!"
            },
            {
                "id": "pa_dpt2",
                "question": "Ktore z tych imion jest diptotyczne?",
                "translation": "(أي اسم ممنوع من الصرف؟)",
                "options": ["أحمدُ (Ahmed)", "محمدٌ (Muhammad)", "عليٌّ (Ali)", "خالدٌ (Halid)"],
                "correct": "أحمدُ (Ahmed)",
                "explanation": "أحمدُ jest ممنوع من الصرف bo jest na wzorze أَفْعَل (przymiotnik stopnia wyzszego uzywany jako imie). Imiona na wzorze أَفْعَل sa DIPTOTYCZNE: أحمد, أكرم, أسعد. Porownaj: محمدٌ (ma tanwin — triptotyczny, bo na wzorze مُفَعَّل), عليٌّ (triptotyczny), خالدٌ (triptotyczny). Nie WSZYSTKIE imiona sa diptotyczne — zalezy od WZORCE."
            },
            {
                "id": "pa_dpt3",
                "question": "Dlaczego مساجدُ (meczety) jest diptotyczne?",
                "translation": "(لماذا مساجد ممنوعة من الصرف؟)",
                "options": ["Bo to l. mn. lamana na wzorze مَفَاعِل", "Bo jest zenskie", "Bo ma الـ", "Nie jest diptotyczne"],
                "correct": "Bo to l. mn. lamana na wzorze مَفَاعِل",
                "explanation": "مَسَاجِدُ jest ممنوع من الصرف bo to l. mn. LAMANA (جمع تكسير) na wzorze مَفَاعِل lub مَفَاعِيل. Regula: l. mn. lamana bedaca na jednym z wzorcow: فَعَاعِل, فَعَاعِيل, مَفَاعِل, مَفَاعِيل — ZAWSZE diptotyczna. Przyklady: مَدَارِسُ (szkoly), مَكَاتِبُ (biurka), عَصَافِيرُ (wrobel). Dopelniacz: في مَسَاجِدَ (z fathaa, nie kasra!)."
            },
            {
                "id": "pa_dpt4",
                "question": "Dopelniacz 'عُمَر' (Omar) to:",
                "translation": "(ما جرّ عُمَر؟)",
                "options": ["عُمَرَ (z fatha — diptotyczny)", "عُمَرٍ (z kasra)", "عُمَرِ (z kasra bez tanwinu)", "عُمُرَ"],
                "correct": "عُمَرَ (z fatha — diptotyczny)",
                "explanation": "عُمَرَ = dopelniacz z FATHA (nie kasra!). عُمَر jest ممنوع من الصرف bo: 1) Imie wlasne (علم) + 2) Na wzorze فُعَل (waga specjalna). Dlatego: مررتُ بِعُمَرَ (przeszedlem obok Omara — fatha w dopelniaczu). Gdyby byl triptotyczny: بِعُمَرٍ (kasra + tanwin). Regula: imiona wlasne + dodatkowy powod (waga, obcosc, zenski) = diptotyczne."
            },
            {
                "id": "pa_dpt5",
                "question": "Przyczyny dziatania diptotycznosci — ile ich potrzeba?",
                "translation": "(كم علّة يحتاج الممنوع من الصرف؟)",
                "options": ["Dokladnie DWIE przyczyny (lub jedna mocna: صيغة منتهى الجموع)", "Jedna", "Trzy", "Cztery"],
                "correct": "Dokladnie DWIE przyczyny (lub jedna mocna: صيغة منتهى الجموع)",
                "explanation": "Regula: potrzeba DWOCH przyczyn LUB JEDNEJ MOCNEJ. Dwie przyczyny — PIERWSZA zawsze: العلمية (imie wlasne) lub الوصفية (przymiotnik). DRUGA: وزن أفعل (wzorzec), العُجمة (obcosc), التأنيث (zenski), زيادة ألف ونون, العدل (nietypowa waga), التركيب (zlozenie). Jedna mocna: صيغة منتهى الجموع (l. mn. lamana mَفَاعِل/مَفَاعِيل) lub الألف الممدودة/المقصورة."
            },
            {
                "id": "pa_dpt6",
                "question": "إبراهيمُ jest diptotyczny bo:",
                "translation": "(لماذا إبراهيم ممنوع من الصرف؟)",
                "options": ["Imie wlasne (علمية) + obcosc (عجمة)", "Imie wlasne + zenski", "Przymiotnik + obcosc", "L. mn. lamana"],
                "correct": "Imie wlasne (علمية) + obcosc (عجمة)",
                "explanation": "إبراهيمُ jest ممنوع من الصرف z DWOCH przyczyn: 1) العلمية = imie wlasne, 2) العُجمة = pochodzenie OBCE (nie-arabskie — hebrajskie/aramejskie). Inne obce imiona diptotyczne: إسماعيل, يوسف, يعقوب, موسى. UWAGA: ten warunek dotyczy imion obcych DLUZSZYCH niz 3 litery. Krotkie obce imiona (np. نوح = Noe, لوط = Lot) sa TRIPTOTYCZNE."
            },
            {
                "id": "pa_dpt7",
                "question": "Przymiotnik أَحْمَرُ (czerwony) jest diptotyczny bo:",
                "translation": "(لماذا أحمر ممنوع من الصرف؟)",
                "options": ["Przymiotnik (وصفية) + wzorzec أَفْعَل (وزن أفعل)", "Imie wlasne + obcosc", "L. mn. lamana", "Zenski + obcosc"],
                "correct": "Przymiotnik (وصفية) + wzorzec أَفْعَل (وزن أفعل)",
                "explanation": "أَحْمَرُ jest ممنوع من الصرف bo: 1) الوصفية = jest przymiotnikiem, 2) وزن أَفْعَل = na wzorze czteroliterowym z alif na poczatku. Wszystkie kolory (أَحْمَر, أَزْرَق, أَخْضَر, أَصْفَر) i wady fizyczne (أَعْمَى, أَصَمّ) na wzorze أَفْعَل sa DIPTOTYCZNE. Zenski: حَمْرَاءُ (fala diptotyczna — jeszcze bardziej nieregularna!)."
            },
            {
                "id": "pa_dpt8",
                "question": "Co sie dzieje z diptotycznym gdy ma الـ (rodzajnik)?",
                "translation": "(ماذا يحدث للممنوع من الصرف مع ال؟)",
                "options": ["Wraca do NORMALNEJ odmiany (kasra w dopelniaczu)", "Zostaje diptotyczny", "Traci الـ", "Nie moze miec الـ"],
                "correct": "Wraca do NORMALNEJ odmiany (kasra w dopelniaczu)",
                "explanation": "KLUCZOWA regula: z الـ lub w IDAFIE, ممنوع من الصرف WRACA do normalnej odmiany! في المساجدِ (w meczetach — KASRA, bo ma الـ). Bez الـ: في مساجدَ (FATHA). Porownaj: في مدارسَ عربيةٍ (fatha — bez الـ) vs. في المدارسِ العربيةِ (kasra — z الـ). To jak 'amnestia gramatyczna' — rodzajnik lub idafa anuluja diptotycznosc!"
            },
            {
                "id": "pa_dpt9",
                "question": "فاطمةُ jest diptotyczna bo:",
                "translation": "(لماذا فاطمة ممنوعة من الصرف؟)",
                "options": ["Imie wlasne (علمية) + zenskie z ta marbuta (تأنيث)", "Tylko imie wlasne", "Tylko zenskie", "Obcosc"],
                "correct": "Imie wlasne (علمية) + zenskie z ta marbuta (تأنيث)",
                "explanation": "فاطمةُ: 1) علمية = imie wlasne, 2) تأنيث بالتاء = zenskie z ta marbuta. Dwie przyczyny → diptotyczny. Wszystkie imiona zenskie z ة sa diptotyczne: عائشةُ, خديجةُ, فاطمةُ. Ale tez BEZ ة: مريمُ (zenskie + obcosc), زينبُ (zenskie + waga specjalna). Meskie imiona NIE sa diptotyczne tylko za zeniskosc (potrzebuja innej drugiej przyczyny)."
            },
            {
                "id": "pa_dpt10",
                "question": "عُثمانُ jest diptotyczny bo:",
                "translation": "(لماذا عثمان ممنوع من الصرف؟)",
                "options": ["Imie wlasne + dodany alif-nun (زيادة ألف ونون)", "Imie wlasne + obcosc", "Przymiotnik + waga", "L. mn. lamana"],
                "correct": "Imie wlasne + dodany alif-nun (زيادة ألف ونون)",
                "explanation": "عُثمانُ: 1) علمية = imie wlasne, 2) زيادة ألف ونون = dodany sufiks -ان. Inne takie: سليمان, عدنان, رمضان, شعبان. Regula: imię wlasne z dodanym ألف ونون = diptotyczne. Ale UWAGA: jesli -ان jest CZESCIA rdzenia (nie dodan) → triptotyczny: حَسَّان (rdzen ح-س-ن + ان dodane → diptotyczny) vs. ? (trudne do odroznienia)."
            },
            {
                "id": "pa_dpt11",
                "question": "Jak powiedziec 'w Ramadanie' (في رمضان)?",
                "translation": "(كيف نقول في رمضان؟)",
                "options": ["في رمضانَ (z fathа — diptotyczny)", "في رمضانٍ (z kasra)", "في الرمضانِ (z الـ i kasra)", "في رمضانِ (kasra bez tanwin)"],
                "correct": "في رمضانَ (z fathа — diptotyczny)",
                "explanation": "في رمضانَ = w Ramadanie. رمضان jest ممنوع من الصرف (imie wlasne miesiaca + ألف ونون) → dopelniacz z FATHA (nie kasra). Ale: في شهرِ رمضانَ (w miesiacu Ramadan — رمضان nadal z fatha bo diptotyczny, szهر normalnie). Z الـ: في الرمضانِ (KASRA — diptotycznosc anulowana). Niektorzy gramatycy dopuszczaja: في رمضانِ (kasra bez tanwin) jako wariant."
            },
            {
                "id": "pa_dpt12",
                "question": "صحراءُ (pustynia) jest diptotyczna bo:",
                "translation": "(لماذا صحراء ممنوعة من الصرف؟)",
                "options": ["Koncowe ألف ممدودة (اء) — jedna mocna przyczyna", "Imie wlasne + obcosc", "Przymiotnik + waga", "L. mn. lamana"],
                "correct": "Koncowe ألف ممدودة (اء) — jedna mocna przyczyna",
                "explanation": "صحراءُ: koncowka -اء (alif mamduda) wystarczy SAMA (jedna mocna przyczyna). Wszystkie slowa na -اء sa diptotyczne: صحراء (pustynia), حمراء (czerwona), بيضاء (biala), شعراء (poeci). Dopelniacz: في صحراءَ (FATHA). Z الـ: في الصحراءِ (kasra — anulowana diptotycznosc). Analogicznie: -ى (alif maqsura zenskie) tez jest mocna przyczyna: ذِكْرَى (wspomnienie)."
            },
            {
                "id": "pa_dpt13",
                "question": "Ktore zdanie jest POPRAWNE?",
                "translation": "(أي جملة صحيحة؟)",
                "options": ["مررتُ بإبراهيمَ (fatha — diptotyczny)", "مررتُ بإبراهيمٍ (kasra + tanwin)", "مررتُ بإبراهيمِ (kasra bez tanwin)", "مررتُ بإبراهيمُ (damma)"],
                "correct": "مررتُ بإبراهيمَ (fatha — diptotyczny)",
                "explanation": "مررتُ بِإبراهيمَ = Przeszedlem obok Ibrahima. إبراهيم: ممنوع من الصرف (imie wlasne + obcosc) → dopelniacz z FATHA. Bledne: بإبراهيمٍ (kasra + tanwin = triptotyczny — BLAD), بإبراهيمِ (kasra bez tanwin — blad, ale czesty w potocznym uzyciu), بإبراهيمُ (damma = mianownik — blad po przyimku). FATHA w dopelniaczu to MARKER diptotycznosci."
            },
            {
                "id": "pa_dpt14",
                "question": "Ktore z tych slow NIE jest ممنوع من الصرف?",
                "translation": "(أي كلمة ليست ممنوعة من الصرف؟)",
                "options": ["كتابٌ (ksiazka — normalny rzeczownik)", "أحمدُ (imie)", "مساجدُ (meczety)", "فاطمةُ (imie)"],
                "correct": "كتابٌ (ksiazka — normalny rzeczownik)",
                "explanation": "كتابٌ (ksiazka) jest TRIPTOTYCZNY — normalny rzeczownik bez zadnych powodow do diptotycznosci. Ma tanwin: كتابٌ (mian.), كتاباً (bier.), كتابٍ (dop. z kasra). Pozostale sa diptotyczne: أحمد (imie + waga أَفْعَل), مساجد (l. mn. lamana), فاطمة (imie + zenski). Wiekszosc arabskich slow jest triptotyczna — diptotyczne to WYJATKI z konkretnymi przyczynami."
            },
            {
                "id": "pa_dpt15",
                "question": "Podsumowanie: diptotyczny = brak czego?",
                "translation": "(الممنوع من الصرف = ممنوع من ماذا؟)",
                "options": ["Brak TANWINU i brak KASRY w dopelniaczu", "Brak mianownika", "Brak biernika", "Brak czegokolwiek"],
                "correct": "Brak TANWINU i brak KASRY w dopelniaczu",
                "explanation": "Podsumowanie الممنوع من الصرف: 1) BRAK tanwinu (nigdy: ٌ ً ٍ), 2) BRAK kasry w dopelniaczu — zamiast niej FATHA. Mianownik: normalna damma (أحمدُ). Biernik: normalna fatha (رأيتُ أحمدَ). Dopelniacz: FATHA zamiast kasry (مررتُ بأحمدَ). WYJĄTEK: z الـ lub w idafie → wraca do normalnej kasry. W polskim nie istnieje odpowiednik — to unikalna cecha arabskiego systemu deklinacyjnego."
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
