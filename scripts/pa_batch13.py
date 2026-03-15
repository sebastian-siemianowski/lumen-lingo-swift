import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "topicalization",
        "name": "Topikalizacja i rematyzacja (التقديم والتأخير)",
        "description": "تقديم عناصر الجملة وتأخيرها للتأكيد",
        "iconName": "arrow.up.arrow.down",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_top1",
                "question": "الكتابَ قرأتُ — dlaczego الكتابَ jest na początku?",
                "translation": "(لماذا تقدّم المفعول به؟)",
                "options": ["Aby podkreslic KSIAZKE — topikalizacja dopelnienia", "Blad gramatyczny", "Bo podmiot jest ukryty", "Bo to pytanie"],
                "correct": "Aby podkreslic KSIAZKE — topikalizacja dopelnienia",
                "explanation": "Poprawnie: 'الكتابَ قرأتُ' = To KSIAZKE przeczytalam (nie gazete). Normalny szyk: قرأتُ الكتابَ (przeczytalam ksiazke). Przestawienie dopelnienia na poczatek = topikalizacja (التقديم). Cel: podkreslenie, kontrast, fokalizacja. W polskim uzywamy akcentu zdaniowego lub partykul ('to wlasnie ksiazke...'). W arabskim — zmiana szyku. الكتابَ zachowuje biernik (منصوب) mimo przesuniecia!"
            },
            {
                "id": "pa_top2",
                "question": "إيّاكَ نعبدُ — ta struktura oznacza:",
                "translation": "(ما معنى تقديم المفعول في إيّاك نعبد؟)",
                "options": ["Ciebie (i tylko Ciebie) czcimy — wylacznosc", "Czcimy Ciebie — neutralne", "Niech Cie czca — rozkaz", "Czcij nas — odwrocone"],
                "correct": "Ciebie (i tylko Ciebie) czcimy — wylacznosc",
                "explanation": "Poprawnie: 'إيّاكَ نعبدُ' (iyyaka na'budu) = Ciebie (wylacznie) czcimy. Z sury Al-Fatiha. Normalnie: نعبدُكَ (czcimy Ciebie). Przesuniecie إيّاكَ na poczatek wyraza الحصر (wylacznosc/ograniczenie): TYLKO Ciebie, nikogo innego. To najpotezniejsza funkcja topikalizacji — dodaje znaczenie, ktorego normalny szyk nie ma. W polskim: 'To Ciebie czcimy' vs. 'Czcimy Ciebie'."
            },
            {
                "id": "pa_top3",
                "question": "في البيتِ أنا — co oznacza przesuniecie okolicznika?",
                "translation": "(ما فائدة تقديم الظرف؟)",
                "options": ["W DOMU jestem (nie gdzie indziej)", "Jestem w domu — neutralne", "Dom jest moj", "Ide do domu"],
                "correct": "W DOMU jestem (nie gdzie indziej)",
                "explanation": "Poprawnie: 'في البيتِ أنا' = W DOMU (wlasnie) jestem. Normalnie: أنا في البيتِ (jestem w domu — neutralne). Przesuniecie في البيتِ na poczatek podkresla MIEJSCE. Regula: element przesuniety na poczatek zdania zyskuje fokus/nacisk. To dziala z kazdym skladnikiem: dopelnieniem (الكتابَ قرأتُ), okolicznikiem (في البيتِ أنا), orzeczeniem (نجحَ الطالبُ ja الطالبُ نجحَ)."
            },
            {
                "id": "pa_top4",
                "question": "Kiedy przesuniecie na poczatek jest OBOWIAZKOWE?",
                "translation": "(متى يكون التقديم واجباً؟)",
                "options": ["Gdy خبر to okolicznik, a مبتدأ jest nieokreslone", "Zawsze w pytaniach", "Nigdy — to zawsze opcjonalne", "Tylko w stronie biernej"],
                "correct": "Gdy خبر to okolicznik, a مبتدأ jest nieokreslone",
                "explanation": "Poprawnie: obowiazkowe jest np.: 'في البيتِ رجلٌ' (w domu jest mezczyzna). NIE MOZNA: *رجلٌ في البيتِ jako pelne zdanie, bo مبتدأ nieokreslone (رجلٌ) nie moze zaczynac zdania nominalnego (regula الابتداء بالنكرة). Przesuniecie خبر na poczatek rozwiazuje problem. Inne obowiazkowe przypadki: أين أنتَ؟ (pytanie — zaimek pytajny zawsze na poczatku), إيّاك أعني (zaimek wydzielony إيّاك)."
            },
            {
                "id": "pa_top5",
                "question": "أمّا الامتحانُ فسهلٌ — ta konstrukcja to:",
                "translation": "(ما نوع هذا الأسلوب؟)",
                "options": ["Topikalizacja z أمّا...فَ (co do X, to Y)", "Zdanie warunkowe", "Pytanie retoryczne", "Zdanie wykrzyknikowe"],
                "correct": "Topikalizacja z أمّا...فَ (co do X, to Y)",
                "explanation": "Poprawnie: 'أمّا الامتحانُ فسهلٌ' = Co do egzaminu — (to jest) latwy. Konstrukcja أمّا...فَ to formalna topikalizacja: أمّا wprowadza temat (topic), فَ wprowadza komentarz (comment). Zawsze parami: أمّا X فَ Y. W polskim: 'Jesli chodzi o X, to Y', 'Co do X — Y'. Bardzo czeste w MSA, przemowieniach, tekstach akademickich. فَ jest OBOWIAZKOWE po أمّا!"
            },
            {
                "id": "pa_top6",
                "question": "Roznica: الطالبُ نجحَ vs. نجحَ الطالبُ:",
                "translation": "(الفرق بين تقديم الفاعل وتأخيره)",
                "options": ["الطالبُ نجحَ = zdanie nominalne (topic-comment), نجحَ الطالبُ = zdanie werbalne (VSO)", "Identyczne znaczenie", "Pierwsze jest bledne", "Pierwsze to pytanie"],
                "correct": "الطالبُ نجحَ = zdanie nominalne (topic-comment), نجحَ الطالبُ = zdanie werbalne (VSO)",
                "explanation": "KLUCZOWA roznica: 'نجحَ الطالبُ' = zdanie WERBALNE (فعلية) — szyk VSO (czasownik-podmiot-dopelnienie), neutralne. 'الطالبُ نجحَ' = zdanie NOMINALNE (اسمية) — الطالبُ to مبتدأ (topic), نجحَ to خبر (comment). Efekt: 'Co do studenta — zdal'. Podkresla podmiot. W polskim SVO jest neutralny, w arabskim VSO jest neutralny. To fundamentalna roznica typologiczna!"
            },
            {
                "id": "pa_top7",
                "question": "هذا الكتابُ اشتريتُه أمسِ — co to za konstrukcja?",
                "translation": "(ما نوع هذا التركيب؟)",
                "options": ["Topikalizacja z zaimkiem referencyjnym (ه)", "Zdanie wzgledne", "Strona bierna", "Blad gramatyczny"],
                "correct": "Topikalizacja z zaimkiem referencyjnym (ه)",
                "explanation": "Poprawnie: 'هذا الكتابُ اشتريتُهُ أمسِ' = Ta ksiazka — kupilem ja wczoraj. هذا الكتابُ = topik (temat), اشتريتُهُ = komentarz z zaimkiem ه odsylajacym do topiku. To typ topikalizacji zwany 'left dislocation': element wysuwa sie na poczatek, a w zdaniu zostaje jego slad (zaimek). W polskim: 'Te ksiazke to ja ja kupilem wczoraj'. Bardzo naturalne w mowie potocznej."
            },
            {
                "id": "pa_top8",
                "question": "لِلّهِ الحمدُ — dlaczego لِلّهِ jest na poczatku?",
                "translation": "(لماذا تقدّم الجار والمجرور؟)",
                "options": ["Podkreslenie: chwala nalezy ALLAHOWI (wylacznosc)", "Normalny szyk — bez podkreslenia", "Bo لِلّهِ to podmiot", "Bo to modlitwa"],
                "correct": "Podkreslenie: chwala nalezy ALLAHOWI (wylacznosc)",
                "explanation": "Poprawnie: 'لِلّهِ الحمدُ' = Allahowi (wylacznie) chwala. Normalnie: الحمدُ لِلّهِ (chwala Allahowi — الفاتحة). Przesuniecie لِلّهِ na poczatek wyraza الحصر: chwala nalezy TYLKO Allahowi. Porownaj: الحمدُ لِلّهِ (neutralne, powszechne), لِلّهِ الحمدُ (emfatyczne, fokusowe). Obie formy poprawne, ale rozne pragmatycznie. W polskim brak tak eleganckiego mechanizmu."
            },
            {
                "id": "pa_top9",
                "question": "ما قرأتُ إلّا هذا الكتابَ — to przyklad:",
                "translation": "(ما نوع الأسلوب في هذه الجملة؟)",
                "options": ["Ograniczenie/wylacznosc (حصر) z ما...إلّا", "Topikalizacja dopelnienia", "Negacja zwykla", "Zdanie warunkowe"],
                "correct": "Ograniczenie/wylacznosc (حصر) z ما...إلّا",
                "explanation": "Poprawnie: 'ما قرأتُ إلّا هذا الكتابَ' = Przeczytalam TYLKO te ksiazke (nic wiecej). Konstrukcja ما...إلّا to inny mechanizm ograniczenia (حصر) niz topikalizacja, ale cel podobny: fokusowanie na jednym elemencie. ما = negacja, إلّا = wyjatek = 'nic oprocz'. Alternatywne sposoby wyrazenia حصر: إنّما (partykula), topikalizacja (الكتابَ قرأتُ), ما...إلّا. Kazdy ma inny odcien stylistyczny."
            },
            {
                "id": "pa_top10",
                "question": "Zdanie 'محمدٌ ذهبَ' vs. 'ذهبَ محمدٌ' — ktore jest 'silniejsze'?",
                "translation": "(أيهما أقوى في التعبير؟)",
                "options": ["محمدٌ ذهبَ — podkresla Muhammada jako temat", "ذهبَ محمدٌ — podkresla odejscie", "Identyczne", "Oba bledne"],
                "correct": "محمدٌ ذهبَ — podkresla Muhammada jako temat",
                "explanation": "W 'محمدٌ ذهبَ' (zdanie nominalne): Muhammad jest TEMATEM, o ktorym mowi zdanie — fokus na osobie. 'ذهبَ محمدٌ' (zdanie werbalne): neutralny raport zdarzenia — Muhammad poszedl. Sila zalezy od kontekstu: jesli chcemy powiedziec 'to MUHAMMAD poszedl (nie Ali)' — محمدٌ ذهبَ. Jesli relacjonujemy co sie stalo — ذهبَ محمدٌ. Arabski gramatyk Sibawayh (VIII w.) szczegolowo opisal te roznice!"
            },
            {
                "id": "pa_top11",
                "question": "كلَّ يومٍ أدرسُ — przesuniecie كلَّ يومٍ oznacza:",
                "translation": "(ما فائدة تقديم كلّ يومٍ؟)",
                "options": ["CODZIENNIE ucze sie (podkreslenie regularnosci)", "Ucze sie codziennie — neutralne", "Pewnego dnia bede sie uczyl", "Dzis sie ucze"],
                "correct": "CODZIENNIE ucze sie (podkreslenie regularnosci)",
                "explanation": "Poprawnie: 'كلَّ يومٍ أدرسُ' = CODZIENNIE sie ucze (podkreslenie czestotliwosci). Neutralnie: أدرسُ كلَّ يومٍ (ucze sie codziennie). Przesuniecie okolicznika czasu na poczatek akcentuje regularnosc, konsekwencje. Inne przyklady: دائماً أحبُّكِ (ZAWSZE Cie kocham), غداً سنسافرُ (JUTRO pojedziemy). W polskim naturalnie uzywamy podobnych przesuniec: 'Codziennie sie ucze' vs. 'Ucze sie codziennie'."
            },
            {
                "id": "pa_top12",
                "question": "Czy w zdaniu werbalnym podmiot MUSI byc po czasowniku?",
                "translation": "(هل يجب تأخير الفاعل في الجملة الفعلية؟)",
                "options": ["Tak — w zdaniu فعلية szyk to V-S-O (czasownik-podmiot-dopelnienie)", "Nie — szyk jest dowolny", "Podmiot zawsze na poczatku", "Nie ma reguly"],
                "correct": "Tak — w zdaniu فعلية szyk to V-S-O (czasownik-podmiot-dopelnienie)",
                "explanation": "W zdaniu werbalnym (فعلية) szyk bazowy to VSO: فعل (czasownik) + فاعل (podmiot) + مفعول به (dopelnienie). Np.: كَتَبَ الطالبُ الدرسَ (napisal student lekcje). Jesli الطالب stanie na poczatku, staje sie مبتدأ i zdanie zmienia typ na nominalne (اسمية). Arabski to jezyk VSO (jak walijski, celtyckie), w odrozneniu od polskiego SVO. Dopelnienie moze sie przesuwac (topikalizacja), ale podmiot werbalny nie."
            },
            {
                "id": "pa_top13",
                "question": "بالعلمِ نتقدّمُ — ta konstrukcja podkresla:",
                "translation": "(ماذا يؤكد تقديم بالعلم؟)",
                "options": ["Ze PRZEZ WIEDZE (wlasnie) sie rozwijamy", "Ze wiedza istnieje", "Ze my sie rozwijamy", "Pytanie o wiedze"],
                "correct": "Ze PRZEZ WIEDZE (wlasnie) sie rozwijamy",
                "explanation": "Poprawnie: 'بالعلمِ نتقدّمُ' = PRZEZ WIEDZE (a nie co innego) sie rozwijamy. Normalnie: نتقدّمُ بالعلمِ. Przesuniecie بالعلمِ (narzednik) na poczatek focusuje instrument/srodek. Typowe w sloganach, przemowieniach, poezji: بالوحدةِ ننتصرُ (w jednosci zwyciezymy), بالصبرِ ننجحُ (cierpliwoscia odniesiemy sukces). To retoryczny chwyt topikalizacji — bardzo efektywny w arabskim."
            },
            {
                "id": "pa_top14",
                "question": "أنتَ أخي — dlaczego to zdanie nominalne jest silne?",
                "translation": "(لماذا هذه الجملة قوية التعبير؟)",
                "options": ["Bo zaimek أنتَ jako topic podkresla: TY jestes moim bratem", "Bo to pytanie", "Bo brak czasownika", "Bo to rozkaz"],
                "correct": "Bo zaimek أنتَ jako topic podkresla: TY jestes moim bratem",
                "explanation": "W 'أنتَ أخي' (ty jestes moim bratem): zaimek أنتَ jako مبتدأ tworzy silny fokus osobowy: TY (wlasnie ty, nie ktos inny) jestes moim bratem. Kontekst emocjonalny: deklaracja bliskosci, lojalnosci. Gdyby neutralnie: powiedzielibysmy po prostu sytuacyjnie هو أخي (on jest moim bratem). Uzycie zaimka 2. os. jako topiku tworzy bezposredni, emocjonalny efekt."
            },
            {
                "id": "pa_top15",
                "question": "Ktory szyk jest NEUTRALNY (niepodkreslony) w arabskim?",
                "translation": "(أي ترتيب هو الأصلي في العربية؟)",
                "options": ["فعل + فاعل + مفعول (VSO — czasownik-podmiot-dopelnienie)", "فاعل + فعل + مفعول (SVO — podmiot-czasownik-dopelnienie)", "مفعول + فعل + فاعل (OVS)", "فاعل + مفعول + فعل (SOV)"],
                "correct": "فعل + فاعل + مفعول (VSO — czasownik-podmiot-dopelnienie)",
                "explanation": "Neutralny szyk arabski to VSO: فعل (czasownik) + فاعل (podmiot) + مفعول به (dopelnienie). كَتَبَ الطالبُ الدرسَ = Napisal student lekcje. To odroznia arabski od polskiego (SVO): 'Student napisal lekcje'. Kazde odejscie od VSO w arabskim niesie semantyczna/pragmatyczna funkcje — podkreslenie, kontrast, fokus. Dlatego topikalizacja jest tak wazna: szyk JEST znaczeniem w arabskim."
            }
        ]
    },
    {
        "key": "emphasis_tawkid",
        "name": "Emfaza i potwierdzenie (التوكيد)",
        "description": "أساليب التوكيد في اللغة العربية",
        "iconName": "exclamationmark.2",
        "color": "#c084fc",
        "level": "advanced",
        "items": [
            {
                "id": "pa_twk1",
                "question": "جاءَ الطالبُ نفسُهُ — co oznacza نفسُهُ?",
                "translation": "(ما معنى نفسُه في هذا السياق؟)",
                "options": ["Sam/osobiscie — emfaza tozsamosci (توكيد معنوي)", "Jego dusza", "Jego nastroj", "Ktos inny"],
                "correct": "Sam/osobiscie — emfaza tozsamosci (توكيد معنوي)",
                "explanation": "Poprawnie: 'جاءَ الطالبُ نفسُهُ' = Przyszedl student SAM/OSOBISCIE. نفسُهُ to توكيد معنوي (emfaza semantyczna) — potwierdza tozsamosc: to ON, nie ktos w jego imieniu. Slowa emfatyczne: نفس (sam/ta sama), عين (ten sam/we wlasnej osobie). Musza zgadzac sie w przypadku i miec zaimek: الطالبُ نفسُهُ (mianownik), الطالبَ نفسَهُ (biernik). W polskim: 'sam', 'osobiscie'."
            },
            {
                "id": "pa_twk2",
                "question": "رأيتُ المديرَ عينَهُ — عينَهُ tu znaczy:",
                "translation": "(ما معنى عينَه هنا؟)",
                "options": ["Tego samego/we wlasnej osobie — emfaza tozsamosci", "Jego oko", "Jego zrodlo", "Jego spojrzenie"],
                "correct": "Tego samego/we wlasnej osobie — emfaza tozsamosci",
                "explanation": "Poprawnie: 'رأيتُ المديرَ عينَهُ' = Widzialem dyrektora OSOBISCIE/we wlasnej osobie. عين jako توكيد معنوي = 'ten sam, we wlasnej osobie' (nie 'oko'!). W bierniku bo المديرَ jest w bierniku. Porownaj: عينُهُ (mianownik), عينِهِ (dopelniacz). Regula: نفس i عين w roli emfazy ZAWSZE nasladuja przypadek wyrazu, ktory wzmacniaja, i maja zaimek dzierzawczy odpowiadajacy podmiotowi."
            },
            {
                "id": "pa_twk3",
                "question": "جاءَ الطلابُ كلُّهُم — كلُّهُم tu to:",
                "translation": "(ما نوع كلُّهم هنا؟)",
                "options": ["Emfaza calosciowa (توكيد شامل) — WSZYSCY oni", "Podmiot zdania", "Przymiotnik", "Przydawka dzierzawcza"],
                "correct": "Emfaza calosciowa (توكيد شامل) — WSZYSCY oni",
                "explanation": "Poprawnie: 'جاءَ الطلابُ كلُّهُم' = Przyszli studenci WSZYSCY (bez wyjatku). كلُّهُم to توكيد شامل (emfaza ogolna) — potwierdza KOMPLETNOSC grupy. Inne wyrazy emfazy ogolnej: جميعُهُم (wszyscy razem), أجمعُون (wszyscy bez wyjatku — tylko w mianowniku l.mn.), عامّةُ (ogolem). Porownaj: كلُّهُم (mianownik), كلَّهُم (biernik), كلِّهِم (dopelniacz). Zaimek musi zgadzac sie z l. mn."
            },
            {
                "id": "pa_twk4",
                "question": "إنَّ الامتحانَ سهلٌ — إنَّ tu sluzy do:",
                "translation": "(ما وظيفة إنَّ هنا؟)",
                "options": ["Emfazy/potwierdzenia — 'Zaprawde, egzamin JEST latwy'", "Negacji — 'Egzamin NIE jest latwy'", "Warunku — 'Jesli egzamin...'", "Pytania — 'Czy egzamin...?'"],
                "correct": "Emfazy/potwierdzenia — 'Zaprawde, egzamin JEST latwy'",
                "explanation": "Poprawnie: إنَّ to partykula emfazy (حرف توكيد ونصب). 'إنَّ الامتحانَ سهلٌ' = Zaprawde, egzamin jest latwy / Egzamin z pewnoscia jest latwy. إنَّ wzmacnia prawdziwosc zdania. Gramatycznie: إنَّ + اسم (biernik) + خبر (mianownik). NIE mylic z: إنْ (warunkowe: jesli), أنَّ (ze — w zdaniach podrzednych). Szadda robi roznice: إنَّ nie rowna sie إنْ!"
            },
            {
                "id": "pa_twk5",
                "question": "لَقد نجحَ — لَقد sluzy do:",
                "translation": "(ما وظيفة لقد؟)",
                "options": ["Emfazy czasu przeszlego — 'Z pewnoscia zdal'", "Negacji — 'Nie zdal'", "Warunku — 'Gdyby zdal'", "Pytania — 'Czy zdal?'"],
                "correct": "Emfazy czasu przeszlego — 'Z pewnoscia zdal'",
                "explanation": "Poprawnie: 'لَقد نجحَ' = Z pewnoscia zdal / Naprawde zdal. لَقد = لام التوكيد + قد. لام التوكيد (lam emfazy) + قد (partykula pewnosci z przeszlym) razem tworza silne potwierdzenie. Porownaj: نجحَ (zdal — neutralne), قد نجحَ (juz zdal/rzeczywiscie zdal), لقد نجحَ (Z PEWNOSCIA zdal — najsilniejsza emfaza). Trzy stopnie: neutralny mniejszy niz قد mniejszy niz لقد."
            },
            {
                "id": "pa_twk6",
                "question": "واللهِ لأفعلَنَّ — co oznacza نّ na koncu?",
                "translation": "(ما وظيفة نون التوكيد؟)",
                "options": ["Nun emfatyczne (نون التوكيد) — potwierdza stanowczosc", "Koncowka l. mn.", "Zaimek 'my'", "Nun ochronne"],
                "correct": "Nun emfatyczne (نون التوكيد) — potwierdza stanowczosc",
                "explanation": "Poprawnie: 'واللهِ لأفعلَنَّ' = Na Boga, Z PEWNOSCIA zrobie! نَّ (nun emfatyczne ciezkie — نون التوكيد الثقيلة) dodaje stanowczosc, determinacje. Dwa typy: نَّ (ciezkie, szadda) — silniejsze, نْ (lekkie) — delikatniejsze. Lacza sie z jussive: أفعلُ staje sie لأفعلَنَّ (z lam przysiegi + nun). W Koranie bardzo czeste: لَنَصْبِرَنَّ (z pewnoscia bedziemy cierpliwi). W polskim brak odpowiednika."
            },
            {
                "id": "pa_twk7",
                "question": "التوكيد اللفظي (emfaza slowna) to:",
                "translation": "(ما هو التوكيد اللفظي؟)",
                "options": ["Powtorzenie tego samego wyrazu: جاءَ جاءَ = przyszedl, PRZYSZEDL", "Uzycie نفس", "Uzycie إنَّ", "Zmiana samoglosek"],
                "correct": "Powtorzenie tego samego wyrazu: جاءَ جاءَ = przyszedl, PRZYSZEDL",
                "explanation": "Poprawnie: التوكيد اللفظي = emfaza przez POWTORZENIE identycznego wyrazu. 'جاءَ جاءَ الضيفُ' = przyszedl, PRZYSZEDL gosc! Powtorzyc mozna: czasownik (جاءَ جاءَ), rzeczownik (الكتابَ الكتابَ), partykule (لا لا = nie, NIE!), przyimek z rzeczownikiem (في البيتِ في البيتِ). To najprostsza forma emfazy — istnieje w wielu jezykach, w polskim tez: 'szybko, szybko!', 'nie, nie!'."
            },
            {
                "id": "pa_twk8",
                "question": "لَيَذهبَنَّ — rozloz te forme na elementy:",
                "translation": "(حلّل هذه الكلمة إلى عناصرها)",
                "options": ["لَ (lam przysiegi) + يَذهبَ (czas. terazn.) + نَّ (nun emfatyczne)", "لا (negacja) + يذهب + ن", "ل (przyimek) + يذهبن", "لي (dla mnie) + ذهبن"],
                "correct": "لَ (lam przysiegi) + يَذهبَ (czas. terazn.) + نَّ (nun emfatyczne)",
                "explanation": "Poprawnie: لَيَذهبَنَّ = لَ + يَذهبَ + نَّ. لام القسم (lam przysiegi/emfazy) wymaga nun emfatycznego na koncu czasownika — OBOWIAZKOWE! Regula: لَ...نَّ to para nierozlaczna w przysiegach. Odmiana: لأذهبَنَّ (ja z pewnoscia pojde), لتذهبَنَّ (ty m.), لتذهبِنَّ (ty z.), ليذهبَنَّ (on). Jesli jest لام القسم, MUSI byc نون التوكيد."
            },
            {
                "id": "pa_twk9",
                "question": "كلا الطالبَينِ نجحا — كلا tu oznacza:",
                "translation": "(ما معنى كلا هنا؟)",
                "options": ["Obaj — emfaza na parze (التوكيد بكلا)", "Nie! — wykrzyknienie", "Kazdy z osobna", "Zaden z nich"],
                "correct": "Obaj — emfaza na parze (التوكيد بكلا)",
                "explanation": "Poprawnie: 'كلا الطالبَينِ نجحا' = OBAJ studenci zdali. كلا (r.m.) / كلتا (r.z.) = obaj/obie — sluzy do emfazy pary (liczba podwojna). Musi laczyc sie z dopelniaczem l. podwojnej lub zaimkiem: كلا الرجلَينِ (obaj mezczyзni), كلتا المرأتَينِ (obie kobiety), كلاهما (obaj), كلتاهما (obie). NIE mylic z كلّا (z szadda) = 'bynajmniej/nie!' — partykula odrzucenia!"
            },
            {
                "id": "pa_twk10",
                "question": "إنَّما العلمُ نورٌ — إنَّما oznacza:",
                "translation": "(ما معنى إنّما؟)",
                "options": ["Zaiste/jedynie — ograniczenie (حصر)", "Jesli — warunek", "Ale — przeciwstawienie", "Poniewaz — przyczyna"],
                "correct": "Zaiste/jedynie — ograniczenie (حصر)",
                "explanation": "Poprawnie: 'إنَّما العلمُ نورٌ' = Zaiste, wiedza jest (niczym innym jak) swiatlem. إنَّما = إنَّ + ما الكافّة. ما 'neutralizuje' dzialanie إنَّ (العلمُ w mianowniku, nie bierniku!), a razem tworza partykule ograniczenia: 'jedynie', 'wylacznie', 'nic innego jak'. Hadis: 'إنَّما الأعمالُ بالنياتِ' = Zaiste, czyny (oceniane sa) jedynie wedlug intencji. Bardzo czeste w stylu religijnym i literackim."
            },
            {
                "id": "pa_twk11",
                "question": "Roznica: قد يذهبُ vs. قد ذهبَ:",
                "translation": "(الفرق بين قد + مضارع و قد + ماضٍ)",
                "options": ["قد + terazn. = moze (niepewnosc), قد + przeszly = z pewnoscia (emfaza)", "Identyczne znaczenie", "Oba niepewne", "Oba pewne"],
                "correct": "قد + terazn. = moze (niepewnosc), قد + przeszly = z pewnoscia (emfaza)",
                "explanation": "KLUCZOWA roznica: قد zmienia znaczenie w zaleznosci od czasu! قد ذهبَ (+ przeszly) = z pewnoscia/juz poszedl — EMFAZA, pewnosc. قد يذهبُ (+ terazniejszy) = moze pojdzie — NIEPEWNOSC, mozliwosc. To ODWROTNE funkcje! Dla Polakow to pulapka: jeden wyraz, dwa przeciwne znaczenia. Mnemotechnika: z przeszlym = fakt potwierdzony (pewny), z terazniejszym = hipoteza (niepewny)."
            },
            {
                "id": "pa_twk12",
                "question": "جاءَ الطلابُ أجمعونَ — أجمعونَ to:",
                "translation": "(ما إعراب أجمعون؟)",
                "options": ["Emfaza ogolna w mianowniku l.mn. (توكيد شامل مرفوع)", "Podmiot", "Przymiotnik", "Okolicznik"],
                "correct": "Emfaza ogolna w mianowniku l.mn. (توكيد شامل مرفوع)",
                "explanation": "Poprawnie: 'أجمعونَ' = wszyscy razem/bez wyjatku. To توكيد شامل (emfaza ogolna) — wzmacnia كلّ. Regula: mozna stackowac emfazy: كلُّهُم أجمعونَ = WSZYSCY bez WYJATKU. أجمعون odmienia sie jak l.mn. zdrowa r.m.: أجمعونَ (mianownik), أجمعِينَ (biernik/dopelniacz). Zenski: جمعاء (l.poj.), جُمَع (l.mn.). To specjalne wyrazy emfatyczne, nie zwykle przymiotniki."
            },
            {
                "id": "pa_twk13",
                "question": "هو هو — powtorzenie zaimka oznacza:",
                "translation": "(ما معنى تكرار الضمير؟)",
                "options": ["To on (i nikt inny) — emfaza slowna zaimka", "On jest soba — filozofia", "Dwa rozne osoby", "Blad gramatyczny"],
                "correct": "To on (i nikt inny) — emfaza slowna zaimka",
                "explanation": "Poprawnie: 'هو هو' = To ON (i nikt inny) / ten sam. Powtorzenie zaimka = التوكيد اللفظي dla zaimka. Moze tez oznaczac 'ten sam': الوضعُ هو هو = Sytuacja jest ta sama (dosl.: sytuacja — ona ona). W mowie potocznej bardzo naturalne. Inne powtorzenia zaimkowe: أنا أنا (to JA JA), أنتَ أنتَ (to TY TY). Emocjonalnie silne — uzywane w dramatycznych kontekstach."
            },
            {
                "id": "pa_twk14",
                "question": "Ile jest glownych typow emfazy (توكيد) w arabskim?",
                "translation": "(كم نوعاً للتوكيد في العربية؟)",
                "options": ["Dwa: لفظي (slowna — powtorzenie) i معنوي (semantyczna — نفس/عين/كلّ)", "Jeden", "Trzy", "Piec"],
                "correct": "Dwa: لفظي (slowna — powtorzenie) i معنوي (semantyczna — نفس/عين/كلّ)",
                "explanation": "Dwa glowne typy: 1) التوكيد اللفظي (emfaza slowna) — powtorzenie: جاءَ جاءَ, لا لا. 2) التوكيد المعنوي (emfaza semantyczna) — specjalne wyrazy: نفس/عين (tozsamosc: sam/osobiscie), كلّ/جميع/أجمع (calosc: wszyscy). Do tego: partykuly emfazy (إنَّ, لقد, إنَّما), nun emfatyczne (نون التوكيد), lam emfazy (لام التوكيد). System jest bogaty — arabski ma wiecej mechanizmow emfazy niz wiekszosc jezykow."
            },
            {
                "id": "pa_twk15",
                "question": "إنَّ اللهَ غفورٌ رحيمٌ — إنَّ w Koranie sluzy do:",
                "translation": "(وظيفة إنّ في القرآن)",
                "options": ["Uroczystego potwierdzenia prawdy: 'Zaprawde, Allah jest Przebaczajacy'", "Warunku — 'Jesli Allah...'", "Negacji — 'Allah nie jest...'", "Pytania — 'Czy Allah jest...?'"],
                "correct": "Uroczystego potwierdzenia prawdy: 'Zaprawde, Allah jest Przebaczajacy'",
                "explanation": "W Koranie إنَّ jest niezwykle czeste — sluzy do uroczystego, autorytatywnego potwierdzenia prawd. 'إنَّ اللهَ غفورٌ رحيمٌ' = Zaprawde, Allah jest Przebaczajacy, Litosciwy. Tlumaczenie 'zaprawde' oddaje solenne brzmienie إنَّ. W MSA إنَّ jest mniej solemne — bardziej 'z pewnoscia', 'rzeczywiscie'. W mowie potocznej rzadkie — zastepowane przez والله (przysiegam) lub أكيد (na pewno)."
            }
        ]
    },
    {
        "key": "badal_apposition",
        "name": "Apozycja i zamiennik (البدل)",
        "description": "البدل والعطف البياني في الجملة العربية",
        "iconName": "arrow.triangle.swap",
        "color": "#22d3ee",
        "level": "advanced",
        "items": [
            {
                "id": "pa_bdl1",
                "question": "جاءَ أخوكَ محمدٌ — محمدٌ tu to:",
                "translation": "(ما إعراب محمد هنا؟)",
                "options": ["Apozycja (بدل) — wyjasnia, KTO jest bratem", "Podmiot", "Dopelnienie", "Przymiotnik"],
                "correct": "Apozycja (بدل) — wyjasnia, KTO jest bratem",
                "explanation": "Poprawnie: 'جاءَ أخوكَ محمدٌ' = Przyszedl twoj brat, Muhammad. محمدٌ to بدل (apozycja/zamiennik) — wyjasnia tozsamosc أخوكَ. Typ: بدل كلّ من كلّ (zamiennik calosci z calosci) — بدل i مبدل منه oznaczaja te sama osobe. محمدٌ w mianowniku bo أخوكَ jest w mianowniku. Regula: بدل ZAWSZE przejmuje przypadek wyrazu, ktory wyjasnia."
            },
            {
                "id": "pa_bdl2",
                "question": "أكلتُ التفاحةَ نصفَها — نصفَها to:",
                "translation": "(ما نوع البدل هنا؟)",
                "options": ["Apozycja czesciowa (بدل بعض من كلّ) — zjadlem jablko, POLOWE go", "Dopelnienie drugie", "Okolicznik", "Apozycja tozsamosci"],
                "correct": "Apozycja czesciowa (بدل بعض من كلّ) — zjadlem jablko, POLOWE go",
                "explanation": "Poprawnie: 'أكلتُ التفاحةَ نصفَها' = Zjadlem jablko — polowe go. نصفَها to بدل بعض من كلّ (zamiennik CZESCI z calosci). CZESC (نصف) zastepuje CALOSC (التفاحة). Konieczny zaimek (-ها) laczacy z caloscia. Inne przyklady: قرأتُ الكتابَ ثلثَهُ (przeczytelem ksiazke — jej trzecia czesc). W polskim: myslnik lub przecinek pelni podobna funkcje."
            },
            {
                "id": "pa_bdl3",
                "question": "أعجبني الطالبُ اجتهادُهُ — اجتهادُهُ to:",
                "translation": "(ما نوع البدل في اجتهادُه؟)",
                "options": ["Apozycja inkluzywna (بدل اشتمال) — spodobal mi sie student, (a dokladniej) jego pracowitoscjest", "Podmiot", "Dopelnienie", "Przydawka"],
                "correct": "Apozycja inkluzywna (بدل اشتمال) — spodobal mi sie student, (a dokladniej) jego pracowitoscjest",
                "explanation": "Poprawnie: بدل اشتمال (zamiennik inkluzji) — اجتهادُهُ (jego pracowitoscjest) to CECHA/ASPEKT الطالبُ (studenta). Nie jest czescia fizyczna (jak بدل بعض), lecz cecha abstrakcyjna 'zawarta' w podmiocie. Z zaimkiem (-هُ) laczacym. Trzy typy بدل: 1) كلّ من كلّ (tozsamosc: محمدٌ = brat), 2) بعض من كلّ (czesc: polowa jablka), 3) اشتمال (aspekt: pracowitosc studenta)."
            },
            {
                "id": "pa_bdl4",
                "question": "زرتُ مصرَ القاهرةَ — القاهرةَ to:",
                "translation": "(ما إعراب القاهرة هنا؟)",
                "options": ["بدل بعض من كلّ — odwiedzilem Egipt, (a dokladniej) Kair", "Przymiotnik Egiptu", "Drugie dopelnienie", "Okolicznik miejsca"],
                "correct": "بدل بعض من كلّ — odwiedzilem Egipt, (a dokladniej) Kair",
                "explanation": "Poprawnie: 'زرتُ مصرَ القاهرةَ' = Odwiedzilem Egipt — Kair. القاهرةَ to بدل بعض من كلّ — Kair jest CZESCIA Egiptu. W bierniku bo مصرَ w bierniku. To bardzo naturalna konstrukcja w arabskim — zaweza ogolne pojecie do szczegolu. Inne: ذهبتُ إلى أوروبّا فرنسا (pojechalem do Europy — Francji). W polskim: przecinek lub myslnik."
            },
            {
                "id": "pa_bdl5",
                "question": "Roznica: بدل vs. نعت (przymiotnik):",
                "translation": "(الفرق بين البدل والنعت)",
                "options": ["بدل identyfikuje/precyzuje, نعت opisuje ceche", "Identyczne", "بدل tylko z rzeczownikami, نعت z czasownikami", "Brak roznicy w praktyce"],
                "correct": "بدل identyfikuje/precyzuje, نعت opisuje ceche",
                "explanation": "KLUCZOWA roznica: النعت (przymiotnik/przydawka) OPISUJE ceche: الرجلُ الطويلُ (mezczyzna wysoki — jaki jest?). البدل IDENTYFIKUJE/PRECYZUJE: أخوكَ محمدٌ (twoj brat, Muhammad — kto to jest?). نعت zgadza sie w: rodzaju, liczbie, przypadku, okreslonoscji. بدل zgadza sie tylko w PRZYPADKU. Porownaj: الطالبُ المجتهدُ (نعت — pilny student) vs. الطالبُ محمدٌ (بدل — student Muhammad)."
            },
            {
                "id": "pa_bdl6",
                "question": "سمعتُ الخبرَ خبرَ الحربِ — خبرَ الحربِ to:",
                "translation": "(ما نوع خبر الحرب هنا؟)",
                "options": ["بدل كلّ من كلّ — precyzuje: wiadomosc, (mianowicie) wiadomosc o wojnie", "Powtorzenie bledne", "Dopelnienie drugie", "Okolicznik"],
                "correct": "بدل كلّ من كلّ — precyzuje: wiadomosc, (mianowicie) wiadomosc o wojnie",
                "explanation": "Poprawnie: 'سمعتُ الخبرَ خبرَ الحربِ' = Uslyszalem wiadomosc — wiadomosc o wojnie. خبرَ الحربِ to بدل كلّ من كلّ — precyzuje, KTORA wiadomosc. To jak dwukropek po 'wiadomosc': mianowicie te o wojnie. W bierniku bo الخبرَ w bierniku. Ten typ بدل jest bardzo czesty w stylu prasowym/literackim — pozwala stopniowo odsloniac informacje."
            },
            {
                "id": "pa_bdl7",
                "question": "Czy بدل moze byc od zaimka?",
                "translation": "(هل يجوز إبدال الاسم من الضمير؟)",
                "options": ["Tak — رأيتُكَ محمداً = widzialem cie, Muhammadzie", "Nie — nigdy", "Tylko w pytaniach", "Tylko z نفس"],
                "correct": "Tak — رأيتُكَ محمداً = widzialem cie, Muhammadzie",
                "explanation": "Poprawnie: بدل od zaimka jest dozwolony: 'رأيتُكَ محمداً' = Widzialem CIE, (mianowicie) Muhammada. محمداً w bierniku bo -كَ jest w bierniku jako dopelnienie. To typ بدل كلّ من كلّ od zaimka. Inne: مررتُ بهِ زيدٍ (przeszedlem obok niego, Zajda). W polskim: 'Widzialem cie, Kowalski' — apozycja. Zaimek + بدل = wyjasnienie, kto kryje sie za zaimkiem."
            },
            {
                "id": "pa_bdl8",
                "question": "الأستاذُ أحمدُ ممتازٌ — jest بدل w tym zdaniu:",
                "translation": "(ما البدل في هذه الجملة؟)",
                "options": ["أحمدُ — apozycja do الأستاذُ (profesor Ahmad)", "ممتازٌ", "الأستاذُ", "Brak بدل"],
                "correct": "أحمدُ — apozycja do الأستاذُ (profesor Ahmad)",
                "explanation": "Poprawnie: أحمدُ to بدل كلّ من كلّ od الأستاذُ. 'الأستاذُ أحمدُ' = profesor Ahmad. W mianowniku bo الأستاذُ jest podmiotem (مبتدأ). ممتازٌ to خبر (orzecznik): 'Profesor Ahmad jest doskonaly.' To bardzo czesta konstrukcja: tytul + imie wlasne = بدل. Inne: الدكتور خالد (doktor Khalid), الرئيسُ السيسيُّ (prezydent Sisi)."
            },
            {
                "id": "pa_bdl9",
                "question": "ما يُعْجِبُني هذا الكلامُ أسلوبُه — أسلوبُه to:",
                "translation": "(ما نوع البدل في أسلوبُه؟)",
                "options": ["بدل اشتمال — nie podoba mi sie ta mowa, (a raczej) jej styl", "Podmiot zdania", "Przydawka", "Okolicznik"],
                "correct": "بدل اشتمال — nie podoba mi sie ta mowa, (a raczej) jej styl",
                "explanation": "Poprawnie: أسلوبُهُ (jej styl) to بدل اشتمال od الكلامُ (mowa). Styl to abstrakcyjna cecha 'zawarta' w mowie — nie jej fizyczna czesc. W mianowniku bo الكلامُ jest podmiotem. Zaimek -هُ odsyla do الكلام. Sens: 'Nie podoba mi sie ta mowa — a konkretnie jej styl (niekoniecznie tresc)'. بدل اشتمال precyzuje ASPEKT, ktory nas interesuje."
            },
            {
                "id": "pa_bdl10",
                "question": "Ile glownych typow بدل rozroznia gramatyka arabska?",
                "translation": "(كم نوعاً رئيسياً للبدل؟)",
                "options": ["Trzy: كلّ من كلّ (tozsamosc), بعض من كلّ (czesc), اشتمال (aspekt)", "Jeden", "Dwa", "Piec"],
                "correct": "Trzy: كلّ من كلّ (tozsamosc), بعض من كلّ (czesc), اشتمال (aspekt)",
                "explanation": "Trzy glowne typy: 1) بدل كلّ من كلّ — zamiennik tozsamosci: أخوكَ محمدٌ (brat = Muhammad, ta sama osoba). 2) بدل بعض من كلّ — zamiennik czesciowy: أكلتُ التفاحةَ نصفَها (jablko -> polowa). 3) بدل اشتمال — zamiennik aspektowy: أعجبني الطالبُ اجتهادُهُ (student -> pracowitosc). Istnieje jeszcze بدل غلط (zamiennik przez pomylkowa zamiane) — rzadki, kontrowersyjny."
            },
            {
                "id": "pa_bdl11",
                "question": "في مدينتِنا بيروتَ — بيروتَ w jakim jest przypadku?",
                "translation": "(ما إعراب بيروت؟)",
                "options": ["Dopelniacz (مجرور) — بدل od مدينتِنا (w dopelniaczu po في)", "Mianownik", "Biernik", "Bez odmiany"],
                "correct": "Dopelniacz (مجرور) — بدل od مدينتِنا (w dopelniaczu po في)",
                "explanation": "Poprawnie: بيروتَ jest بدل od مدينتِنا, ktora jest w dopelniaczu po في. Ale بيروت jako nazwa wlasna diptotyczna (ممنوع من الصرف) ma fathe (-َ) zamiast kasry w dopelniaczu: بيروتَ (nie *بيروتِ). Regula: بدل dziedziczy PRZYPADEK, ale stosuje WLASNA odmiane. Diptoty (ممنوع من الصرف) maja fathe w dopelniaczu zamiast kasry."
            },
            {
                "id": "pa_bdl12",
                "question": "العطف البياني to:",
                "translation": "(ما هو العطف البياني؟)",
                "options": ["Apozycja wyjasniajaca — podobna do بدل, ale z innym odcieniem", "Koniunkcja z واو", "Zdanie wzgledne", "Negacja"],
                "correct": "Apozycja wyjasniajaca — podobna do بدل, ale z innym odcieniem",
                "explanation": "العطف البياني to apozycja wyjasniajaca — BARDZO podobna do بدل كلّ من كلّ. Roznica (subtelna, dyskusyjna wsrod gramatykow): w بدل oba wyrazy oznaczaja te sama rzecz, w عطف بياني drugi WYJASNIA pierwszy (jak przypisek). Praktycznie: w 99 procentach przypadkow traktowane identycznie. Glowna regula: zgoda w przypadku. To zagadnienie bardziej teoretyczne niz praktyczne."
            },
            {
                "id": "pa_bdl13",
                "question": "سيّدنا محمدٌ صلّى الله عليه وسلّم — محمدٌ gramatycznie to:",
                "translation": "(ما إعراب محمد في سيّدنا محمدٌ؟)",
                "options": ["بدل كلّ من كلّ od سيّدنا — nasz pan = Muhammad", "Podmiot zdania", "Przydawka", "خبر"],
                "correct": "بدل كلّ من كلّ od سيّدنا — nasz pan = Muhammad",
                "explanation": "Poprawnie: محمدٌ to بدل od سيّدُنا (nasz pan), w mianowniku. To klasyczny przyklad بدل w kontekscie religijnym: tytul honorowy + imie = بدل. Inne: رسولُ اللهِ محمدٌ (Wyslannik Boga, Muhammad), نبيُّنا محمدٌ (nasz prorok, Muhammad). W polskim: 'nasz pan Muhammad' — apozycja. Religijny arabski uzywa بدل bardzo czesto przy tytulach i imionach."
            },
            {
                "id": "pa_bdl14",
                "question": "Czy بدل musi zgadzac sie w OKRESLONOSCJI z مبدل منه?",
                "translation": "(هل يشترط التوافق في التعريف والتنكير؟)",
                "options": ["Nie zawsze — np. الأستاذُ أحمدُ (okreslony + okreslony) i inne kombinacje", "Tak — zawsze", "Nie — nigdy", "Tylko z imionami"],
                "correct": "Nie zawsze — np. الأستاذُ أحمدُ (okreslony + okreslony) i inne kombinacje",
                "explanation": "Zgodnosc w okreslonoscji jest ELASTYCZNA w بدل. Dozwolone kombinacje: okreslony + okreslony (الأستاذُ محمدٌ — imiona wlasne liczone jako okreslone), nieokreslony + nieokreslony. Ale بدل zwykle zgadza sie w okreslonoscji. Porownaj z نعت: النعتُ MUSI zgadzac sie w okreslonoscji z opisywanym. To kolejna roznica بدل vs. نعت — بدل jest elastyczniejszy."
            },
            {
                "id": "pa_bdl15",
                "question": "اِقرأ سورةَ الفاتحةِ — الفاتحةِ gramatycznie to:",
                "translation": "(ما إعراب الفاتحة هنا؟)",
                "options": ["Przydawka dzierzawcza (مضاف إليه)", "بدل كلّ من كلّ", "Przymiotnik", "Okolicznik"],
                "correct": "Przydawka dzierzawcza (مضاف إليه)",
                "explanation": "UWAGA — to pulapka! الفاتحةِ tu to مضاف إليه (przydawka dzierzawcza), NIE بدل! 'سورةَ الفاتحةِ' = sura Fatihy (إضافة). W بدل byloby: 'السورةَ الفاتحةَ' (z tym samym przypadkiem — biernikiem). Roznica: إضافة ma drugi wyraz w dopelniaczu, بدل — ten sam przypadek. To test rozrozniania بدل od إضافة — czesty blad u uczacych sie!"
            }
        ]
    },
    {
        "key": "five_nouns",
        "name": "Piec rzeczownikow (الأسماء الخمسة)",
        "description": "أبو، أخو، حمو، فو، ذو — إعرابها بالحروف",
        "iconName": "hand.raised.fingers.spread",
        "color": "#f472b6",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_5n1",
                "question": "جاءَ أبوكَ — أبوكَ jest w:",
                "translation": "(ما إعراب أبوك؟)",
                "options": ["Mianowniku — oznaczanym przez و (nie damma)", "Bierniku", "Dopelniaczu", "Bez odmiany"],
                "correct": "Mianowniku — oznaczanym przez و (nie damma)",
                "explanation": "Poprawnie: 'أبوكَ' jest مرفوع (mianownik), oznaczany przez litere و (waw) zamiast zwyklej dammy. To cecha الأسماء الخمسة (pieciu rzeczownikow): أب, أخ, حم, فو, ذو. Odmiana: mianownik = و (أبوكَ), biernik = ا (أباكَ), dopelniacz = ي (أبيكَ). WARUNEK: musza miec zaimek dzierzawczy (nie -ي 1. os.) i byc w l. poj. 'جاءَ أبوكَ' = Przyszedl twoj ojciec."
            },
            {
                "id": "pa_5n2",
                "question": "رأيتُ أخاكَ — أخاكَ jest w:",
                "translation": "(ما إعراب أخاك؟)",
                "options": ["Bierniku — oznaczanym przez ا (alif)", "Mianowniku", "Dopelniaczu", "Bez odmiany"],
                "correct": "Bierniku — oznaczanym przez ا (alif)",
                "explanation": "Poprawnie: 'أخاكَ' jest منصوب (biernik) po رأيتُ. Biernik oznaczony przez ا (alif): أخوكَ (mian.) zmienia sie na أخاكَ (biern.) i أخيكَ (dopel.). Rdzen: أخ = brat. To jak polska deklinacja: 'brat' zmienia sie na 'brata' i 'bratu', ale w arabskim zmienia sie LITERA, nie koncowka. Tylko 5 rzeczownikow ma te specjalna odmiane — reszta uzywa samoglosek krotkich."
            },
            {
                "id": "pa_5n3",
                "question": "مررتُ بأبيكَ — أبيكَ jest w:",
                "translation": "(ما إعراب أبيك؟)",
                "options": ["Dopelniaczu — oznaczanym przez ي (ya)", "Mianowniku", "Bierniku", "Bez odmiany"],
                "correct": "Dopelniaczu — oznaczanym przez ي (ya)",
                "explanation": "Poprawnie: 'أبيكَ' jest مجرور (dopelniacz) po بِـ (przyimku). Dopelniacz oznaczony przez ي: أبوكَ zmienia sie na أباكَ i أبيكَ. 'مررتُ بأبيكَ' = Przeszedlem obok twojego ojca. Pelna odmiana: أبو (mian., z و), أبا (biern., z ا), أبي (dopel., z ي). Mnemotechnika: و-ا-ي (WAY) = mianownik-biernik-dopelniacz. Latwe do zapamietania!"
            },
            {
                "id": "pa_5n4",
                "question": "هو ذو علمٍ — ذو znaczy:",
                "translation": "(ما معنى ذو؟)",
                "options": ["Posiadacz/wlasciciel (czegos) — 'On jest posiadaczem wiedzy'", "Ten", "Ktory", "Kto"],
                "correct": "Posiadacz/wlasciciel (czegos) — 'On jest posiadaczem wiedzy'",
                "explanation": "Poprawnie: 'ذو' = posiadacz/wlasciciel. 'هو ذو علمٍ' = On jest posiadaczem wiedzy (= uczony). Odmiana: ذو (mian.), ذا (biern.), ذي (dopel.). Laczy sie TYLKO z إضافة (nigdy z zaimkiem!): ذو مالٍ (bogacz), ذو خبرةٍ (doswiadczony). R. zenski: ذات (ذاتُ/ذاتَ/ذاتِ — normalna odmiana). L. mn. m.: ذَوُو (mian.), ذَوِي (biern./dopel.). ذو to jedyny z 5, ktory nie laczy sie z zaimkiem."
            },
            {
                "id": "pa_5n5",
                "question": "أغلقْ فاكَ — فاكَ jest w:",
                "translation": "(ما إعراب فاك؟)",
                "options": ["Bierniku (منصوب) — dopelnienie rozkazu", "Mianowniku", "Dopelniaczu", "Bez odmiany"],
                "correct": "Bierniku (منصوب) — dopelnienie rozkazu",
                "explanation": "Poprawnie: 'أغلقْ فاكَ' = Zamknij (swoje) usta! فاكَ jest منصوب (biernik) — dopelnienie blizsze rozkazu أغلقْ. Biernik = ا (alif). فو = usta (archaiczny wyraz). Odmiana: فوكَ (mian.), فاكَ (biern.), فيكَ (dopel.). فو jest RZADKI w codziennym arabskim — czesciej: فَم (usta, normalna odmiana, nie nalezy do 5). W MSA فو pojawia sie w literaturze i retoryce."
            },
            {
                "id": "pa_5n6",
                "question": "Kiedy الأسماء الخمسة NIE odmieniaja sie przez litery?",
                "translation": "(متى لا تُعرب الأسماء الخمسة بالحروف؟)",
                "options": ["Gdy maja zaimek -ي (1. os.) lub sa w l. podwojnej/mn.", "Nigdy — zawsze sie odmieniaja", "Gdy sa na poczatku zdania", "Gdy sa po przyimku"],
                "correct": "Gdy maja zaimek -ي (1. os.) lub sa w l. podwojnej/mn.",
                "explanation": "WARUNKI odmiany przez litery: 1) Musza byc w l. POJEDYNCZEJ (أب, nie أبوان/آباء), 2) Musza miec zaimek dzierzawczy INNY niz -ي (أبوكَ, nie أبي), 3) Musza byc w إضافة (أبو محمدٍ, nie أبٌ sam). Z -ي: أبي (moj ojciec) — bez zmian w odmianie (kasra ukryta). W l. podwojnej: أبوانِ (rodzice) — normalna odmiana podwojna. W l. mn.: آباء — normalna odmiana lamana."
            },
            {
                "id": "pa_5n7",
                "question": "هذا أبو بكرٍ — أبو w إضافة z imieniem:",
                "translation": "(ما إعراب أبو بكر؟)",
                "options": ["أبو w mianowniku (bo خبر), بكرٍ w dopelniaczu (إضافة)", "Oba w mianowniku", "Oba w bierniku", "أبو w dopelniaczu"],
                "correct": "أبو w mianowniku (bo خبر), بكرٍ w dopelniaczu (إضافة)",
                "explanation": "Poprawnie: 'هذا أبو بكرٍ' = To jest Abu Bakr. أبو jest خبر (orzecznik), mianownik = و. بكرٍ w dopelniaczu jako مضاف إليه. Imie 'أبو بكر' to كنية (patronimik) — 'ojciec Bakra'. W kulturze arabskiej كنية to tytul honorowy: أبو (r.m.), أمّ (r.z.). Inna budowa: أبو محمدٍ, أمّ كلثوم. أبو w إضافة z imieniem — odmiana przez litery zachowana."
            },
            {
                "id": "pa_5n8",
                "question": "حموكَ رجلٌ كريمٌ — حموكَ oznacza:",
                "translation": "(ما معنى حموكَ؟)",
                "options": ["Twoj tesc — ojciec wspolmalzonka", "Twoj brat", "Twoj wujek", "Twoj sasiad"],
                "correct": "Twoj tesc — ojciec wspolmalzonka",
                "explanation": "Poprawnie: 'حموكَ' = twoj tesc (ojciec wspolmalzonka). حمو to czwarty z الأسماء الخمسة. Odmiana: حموكَ (mian.), حماكَ (biern.), حميكَ (dopel.). 'حموكَ رجلٌ كريمٌ' = Twoj tesc jest szlachetnym mezczyzna. W codziennym arabskim czesciej: حَما (nieodmienny) lub أبو زوجتي (ojciec mojej zony). حمو jest najbardziej archaiczny z pieciu — praktycznie literacki."
            },
            {
                "id": "pa_5n9",
                "question": "سافرَ أخو زيدٍ — odmiana أخو tu spelnia warunki bo:",
                "translation": "(لماذا أُعربت أخو بالحروف هنا؟)",
                "options": ["Jest w l. poj. + w إضافة (z imieniem, nie z -ي)", "Jest w l. mn.", "Ma zaimek -ي", "Jest bez إضافة"],
                "correct": "Jest w l. poj. + w إضافة (z imieniem, nie z -ي)",
                "explanation": "Poprawnie: أخو w 'أخو زيدٍ' spelnia 3 warunki: 1) l. pojedyncza, 2) w إضافة (z زيدٍ), 3) zaimek to nie -ي (to imie, nie zaimek 1. os.). Dlatego odmiana przez litery: أخو (mianownik, bo فاعل). Gdyby: أخي زيدٍ — NIE: z -ي to 'moj brat Zajd' (inny sens!) i أخي nie odmienia sie przez litery (kasra ukryta pod ي)."
            },
            {
                "id": "pa_5n10",
                "question": "Forma zenska ذو to:",
                "translation": "(ما مؤنث ذو؟)",
                "options": ["ذات — odmiana normalna (ذاتُ/ذاتَ/ذاتِ)", "ذية", "ذوة", "ذَوات w l. poj."],
                "correct": "ذات — odmiana normalna (ذاتُ/ذاتَ/ذاتِ)",
                "explanation": "Poprawnie: ذات (dhat) = posiadaczka. 'هي ذاتُ جمالٍ' = Ona jest posiadaczka piekna (= jest piekna). ذات odmienia sie NORMALNIE (nie przez litery!): ذاتُ (mian.), ذاتَ (biern.), ذاتِ (dopel.). L. mn.: ذوات. UWAGA: 'ذات' ma tez inne znaczenie w filozofii: 'istota/jazn/self' — ذات الإنسان (istota czlowieka). W MSA: ذاتُ مرّةٍ = pewnego razu (wyrazenie temporalne)."
            },
            {
                "id": "pa_5n11",
                "question": "إنَّ أباكَ كريمٌ — dlaczego أباكَ (nie أبوكَ)?",
                "translation": "(لماذا نقول أباك بعد إنّ؟)",
                "options": ["Bo إنَّ wymaga biernika — staje sie أبا (z alif)", "Blad — powinno byc أبوكَ", "Bo to l. podwojna", "Bo to pytanie"],
                "correct": "Bo إنَّ wymaga biernika — staje sie أبا (z alif)",
                "explanation": "Poprawnie: إنَّ rzadzi biernikiem (منصوب): أبو (mian.) zmienia sie na أبا (biern.). 'إنَّ أباكَ كريمٌ' = Zaprawde, twoj ojciec jest szlachetny. أباكَ z alif = biernik. Porownaj 3 przypadki: جاءَ أبوكَ (mian. — فاعل), رأيتُ أباكَ (biern. — مفعول), مررتُ بأبيكَ (dopel. — po في). Kazda litera (و/ا/ي) odpowiada jednemu przypadkowi."
            },
            {
                "id": "pa_5n12",
                "question": "Liczba podwojna أب to:",
                "translation": "(ما مثنى أب؟)",
                "options": ["أبَوانِ — odmiana normalna podwojna (NIE przez litery)", "أبُوانِ — odmiana przez litery", "أَبَيْنِ", "أَبَّانِ"],
                "correct": "أبَوانِ — odmiana normalna podwojna (NIE przez litery)",
                "explanation": "Poprawnie: أبَوانِ (abawan) = dwaj ojcowie / rodzice. W l. podwojnej: normalna odmiana: أبَوانِ (mian., z ان), أبَوَيْنِ (biern./dopel., z يْنِ). NIE przez litery! To dlatego, ze warunek odmiany 5 rzeczownikow to l. POJEDYNCZA. أبوانِ czesto = 'rodzice' (ojciec i matka). الوالدان to synonim. W potocznym arabskim: أبوان staje sie أبوَيّ (moi rodzice)."
            },
            {
                "id": "pa_5n13",
                "question": "Jakie sa wszystkie 5 rzeczownikow الأسماء الخمسة?",
                "translation": "(ما هي الأسماء الخمسة؟)",
                "options": ["أب (ojciec), أخ (brat), حم (tesc), فو (usta), ذو (posiadacz)", "أب, أخ, عم, ابن, أخت", "أب, أم, أخ, أخت, ابن", "أب, جد, عم, خال, ابن"],
                "correct": "أب (ojciec), أخ (brat), حم (tesc), فو (usta), ذو (posiadacz)",
                "explanation": "Piec rzeczownikow: 1) أب (ab) = ojciec, 2) أخ (akh) = brat, 3) حم (ham) = tesc, 4) فو (fu) = usta, 5) ذو (dhu) = posiadacz. Niektorzy gramatycy dodaja szosty: هن (hani) — rzadki, kontrowersyjny. WAZNE: أم (matka), أخت (siostra), عم (wujek stryj), ابن (syn) NIE naleza do tej grupy — odmieniaja sie normalnie!"
            },
            {
                "id": "pa_5n14",
                "question": "هذا أبٌ كريمٌ — dlaczego أبٌ (nie أبو)?",
                "translation": "(لماذا نقول أبٌ بالتنوين وليس أبو؟)",
                "options": ["Bo أبٌ jest BEZ إضافة — nie spelnia warunku odmiany przez litery", "Blad gramatyczny", "Bo to l. mn.", "Bo to pytanie"],
                "correct": "Bo أبٌ jest BEZ إضافة — nie spelnia warunku odmiany przez litery",
                "explanation": "Poprawnie: 'هذا أبٌ كريمٌ' = To jest szlachetny ojciec. أبٌ BEZ zaimka/إضافة = normalna odmiana z tanwinem: أبٌ (mian.), أباً (biern.), أبٍ (dopel.). Odmiana przez litery wymaga إضافة: أبوكَ, أبو محمدٍ. Bez إضافة = standardowe samogloski krotkie + tanwin. To najczestszy blad: uzywanie أبو bez إضافة. Zawsze sprawdzaj: jest zaimek/imie po أب? Tak = litery. Nie = tanwin."
            },
            {
                "id": "pa_5n15",
                "question": "أبي عالِمٌ — أبي (z -ي) tu jest w:",
                "translation": "(ما إعراب أبي هنا؟)",
                "options": ["Mianowniku — ale kasra UKRYTA pod ي (bo zaimek 1. os.)", "Bierniku", "Dopelniaczu", "Nie wiadomo"],
                "correct": "Mianowniku — ale kasra UKRYTA pod ي (bo zaimek 1. os.)",
                "explanation": "Poprawnie: 'أبي عالِمٌ' = Moj ojciec jest uczonym. أبي z zaimkiem -ي (1. os.) = mianownik, ale damma jest UKRYTA (مقدّرة) pod ي. Regula: z zaimkiem 1. os. (-ي) odmiana przez litery NIE dziala — wszystkie przypadki wygladaja tak samo: أبي, أبي, أبي. Kontekst rozstrzyga. Porownaj: أبوكَ/أباكَ/أبيكَ (widoczna odmiana) vs. أبي/أبي/أبي (ukryta). To ograniczenie systemu."
            }
        ]
    },
    {
        "key": "diptote_nouns",
        "name": "Rzeczowniki diptotyczne (الممنوع من الصرف)",
        "description": "الأسماء الممنوعة من الصرف وأحكامها",
        "iconName": "nosign",
        "color": "#fbbf24",
        "level": "advanced",
        "items": [
            {
                "id": "pa_dpt1",
                "question": "ذهبتُ إلى أحمدَ — dlaczego أحمدَ (nie أحمدٍ)?",
                "translation": "(لماذا أحمدَ بالفتحة لا بالكسرة؟)",
                "options": ["Bo أحمد jest diptotyczny (ممنوع من الصرف) — fatha zamiast kasry w dopelniaczu", "Blad — powinno byc أحمدٍ", "Bo to biernik", "Bo to imie"],
                "correct": "Bo أحمد jest diptotyczny (ممنوع من الصرف) — fatha zamiast kasry w dopelniaczu",
                "explanation": "Poprawnie: أحمدَ jest ممنوع من الصرف (diptotyczny = 'zakazany od pelnej deklinacji'). Cechy: 1) BRAK tanwinu (nie: *أحمدٌ, lecz أحمدُ), 2) Fatha w dopelniaczu zamiast kasry (nie: *أحمدِ, lecz أحمدَ). Dlaczego أحمد jest diptotyczny? Bo to imie wlasne na wzorcu أفْعَل (wzorzec przymiotnikowy). W polskim wszystkie rzeczowniki sie odmieniaja — w arabskim pewne grupy maja ograniczona odmiane."
            },
            {
                "id": "pa_dpt2",
                "question": "Ktore z tych imion jest diptotyczne?",
                "translation": "(أي اسم ممنوع من الصرف؟)",
                "options": ["عُمَرُ — bo na wzorcu فُعَل (nieregularnym)", "محمدٌ — normalne", "عليٌّ — normalne", "خالدٌ — normalne"],
                "correct": "عُمَرُ — bo na wzorcu فُعَل (nieregularnym)",
                "explanation": "Poprawnie: عُمَرُ jest ممنوع من الصرف — imie wlasne + wzorzec فُعَل (nieregularny wzorzec z damma i fatha). Odmiana: عُمَرُ (mian.), عُمَرَ (biern. I dopel. — fatha w obu!). محمدٌ, عليٌّ, خالدٌ — normalne (triptotyczne), bo ich wzorce nie kwalifikuja sie. REGULA: imie wlasne staje sie diptotyczne, gdy ma DODATKOWY powod: wzorzec فُعَل, obcosc, zenskosc, zlozonosc, itp."
            },
            {
                "id": "pa_dpt3",
                "question": "Jakie sa DWIE cechy diptotow?",
                "translation": "(ما خصائص الممنوع من الصرف؟)",
                "options": ["1) Brak tanwinu, 2) Fatha w dopelniaczu zamiast kasry", "1) Brak fathy, 2) Podwojna kasra", "1) Brak dammy, 2) Tanwin ciezki", "1) Brak odmiany, 2) Sukun na koncu"],
                "correct": "1) Brak tanwinu, 2) Fatha w dopelniaczu zamiast kasry",
                "explanation": "Dwie cechy ممنوع من الصرف: 1) مُنع من التنوين — BRAK tanwinu: أحمدُ (nie *أحمدٌ), مساجدُ (nie *مساجدٌ). 2) فتحة بدل الكسرة — FATHA zamiast kasry w dopelniaczu: إلى أحمدَ (nie *أحمدِ). Mianownik zachowuje damme: أحمدُ, biernik zachowuje fathe: أحمدَ. Wiec biern. = dopel. (obie fatha). To 'zubozona' odmiana — 2 formy zamiast 3."
            },
            {
                "id": "pa_dpt4",
                "question": "مساجدُ (meczety) jest diptotyczne bo:",
                "translation": "(لماذا مساجد ممنوع من الصرف؟)",
                "options": ["Wzorzec l. mn. lamanej مَفَاعِل — jeden z wzorcow diptotycznych", "Jest imieniem wlasnym", "Jest zenski", "Jest obcym wyrazem"],
                "correct": "Wzorzec l. mn. lamanej مَفَاعِل — jeden z wzorcow diptotycznych",
                "explanation": "Poprawnie: مساجدُ (masajidu) = meczety — l. mn. lamana na wzorcu مَفَاعِل. REGULA: l. mn. lamane na wzorcach مَفَاعِل i مَفَاعِيل (i podobnych z 3+ literami po alif) sa AUTOMATYCZNIE diptotyczne. Inne przyklady: مَكَاتِب (biurka), مَلَاعِب (boiska), مَصَانِع (fabryki), مَفَاتِيح (klucze), عَصَافِير (wroble). To NAJCZESTSZY powod diptotycznosci."
            },
            {
                "id": "pa_dpt5",
                "question": "صلّيتُ في المساجدِ — dlaczego المساجدِ (z kasra)?",
                "translation": "(لماذا عادت الكسرة في المساجدِ؟)",
                "options": ["Bo الـ (rodzajnik) PRZYWRACA normalna odmiane diptotom", "Blad — powinno byc المساجدَ", "Bo to biernik", "Bo to l. poj."],
                "correct": "Bo الـ (rodzajnik) PRZYWRACA normalna odmiane diptotom",
                "explanation": "KLUCZOWA regula: الـ (rodzajnik okreslony) lub إضافة PRZYWRACAJA normalna odmiane diptotom! مساجدَ (diptotyczny, bez الـ: fatha w dopel.), ALE: المساجدِ (z الـ: kasra w dopel., normalnie!). Takze z إضافة: مساجدِ المدينةِ (meczety Medyny — kasra). Wiec diptotycznosc 'uaktywnia sie' tylko w formie NIEOKRESLONEY. Z الـ lub إضافة zmienia sie na normalna triptotyczna odmiane."
            },
            {
                "id": "pa_dpt6",
                "question": "فاطمةُ — to imie jest diptotyczne bo:",
                "translation": "(لماذا فاطمة ممنوع من الصرف؟)",
                "options": ["Imie wlasne + zenskosc (تاء مربوطة)", "Jest arabskie", "Jest krotkie", "Nie jest diptotyczne"],
                "correct": "Imie wlasne + zenskosc (تاء مربوطة)",
                "explanation": "Poprawnie: فاطمةُ jest ممنوع من الصرف — kombinacja: علمية (imie wlasne) + تأنيث (zenskosc — تاء مربوطة). Odmiana: فاطمةُ (mian.), فاطمةَ (biern. I dopel.). Inne: عائشةُ, خديجةُ, مريمُ (zenskie imie + obcosc). REGULA: imie zenskie = diptotyczne (nawet jesli arabskie). Wyjatek: imiona zenskie 3-literowe bez ta: هند, دعد — niektorzy gramatycy uwazaja za triptotyczne."
            },
            {
                "id": "pa_dpt7",
                "question": "إبراهيمُ — to imie jest diptotyczne bo:",
                "translation": "(لماذا إبراهيم ممنوع من الصرف؟)",
                "options": ["Imie wlasne + obcosc (أعجمية) — nie-arabskiego pochodzenia", "Jest arabskie", "Jest krotkie", "Ma ta marbuta"],
                "correct": "Imie wlasne + obcosc (أعجمية) — nie-arabskiego pochodzenia",
                "explanation": "Poprawnie: إبراهيمُ jest ممنوع من الصرف — علمية (imie wlasne) + عُجمة (obcosc — hebrajskiego/aramejskiego pochodzenia). Odmiana: إبراهيمُ (mian.), إبراهيمَ (biern. I dopel.). Inne obce imiona diptotyczne: إسماعيلُ, يوسفُ, يعقوبُ, موسى. UWAGA: imiona obce 3-literowe (لوط, نوح) — dyskusyjne; wielu gramatykow uwaza je za triptotyczne."
            },
            {
                "id": "pa_dpt8",
                "question": "Przymiotnik أحمرُ (czerwony) jest diptotyczny bo:",
                "translation": "(لماذا أحمرُ ممنوع من الصرف؟)",
                "options": ["Wzorzec أفعل (przymiotnikowy) + znaczenie przymiotnikowe (وصفية)", "Jest imieniem", "Jest obcy", "Jest zenski"],
                "correct": "Wzorzec أفعل (przymiotnikowy) + znaczenie przymiotnikowe (وصفية)",
                "explanation": "Poprawnie: أحمرُ jest ممنوع من الصرف — وصفية (przymiotnik) + وَزن أفعل (wzorzec). WSZYSTKIE przymiotniki na wzorcu أفعل sa diptotyczne: أحمرُ (czerwony), أكبرُ (wiekszy), أفضلُ (lepszy), أحسنُ (lepszy/piekniejszy). Odmiana: أحمرُ (mian.), أحمرَ (biern./dopel.). R. zenski: حمراء (na wzorcu فعلاء — TEZ diptotyczny!). فعلاء = zawsze diptotyczny."
            },
            {
                "id": "pa_dpt9",
                "question": "Jakie POWODY sprawiaja, ze imie wlasne staje sie diptotyczne?",
                "translation": "(ما أسباب منع الأسماء العلم من الصرف؟)",
                "options": ["Zenskosc, obcosc, wzorzec fueal, zlozonosc, alif+nun, wzorzec fa'lan", "Tylko zenskosc", "Tylko obcosc", "Tylko dlugosc"],
                "correct": "Zenskosc, obcosc, wzorzec fueal, zlozonosc, alif+nun, wzorzec fa'lan",
                "explanation": "Imie name + JEDEN z tych powodow = diptotyczne: 1) تأنيث (zenskosc): فاطمة, 2) عُجمة (obcosc): إبراهيم, 3) وَزن فُعَل: عُمَر, 4) تركيب (zlozonosc): بعلبكّ, 5) ألف ونون زائدتان: عثمان, رمضان, 6) وَزن فَعْلان: مروان. Imie musi miec علمية + jeden dodatkowy powod. Bez علمية: sam wzorzec to za malo (np. رجلٌ na فُعَل — triptotyczny!)."
            },
            {
                "id": "pa_dpt10",
                "question": "عثمانُ — to imie jest diptotyczne bo:",
                "translation": "(لماذا عثمان ممنوع من الصرف؟)",
                "options": ["Imie wlasne + dodatkowe ألف ونون (alif + nun)", "Jest zenskie", "Jest obce", "Ma ta marbuta"],
                "correct": "Imie wlasne + dodatkowe ألف ونون (alif + nun)",
                "explanation": "Poprawnie: عثمانُ jest ممنوع من الصرف — علمية + زيادة الألف والنون (dodane alif i nun na koncu, nie z rdzenia). Odmiana: عثمانُ (mian.), عثمانَ (biern./dopel.). Porownaj: إنسان (czlowiek) — ا i ن sa RDZENIOWE (إ-ن-س) wiec jest triptotyczny! Regula: alif+nun musza byc DODANE (زائدة), nie rdzeniowe. Inne: رمضانُ, سلمانُ, سليمانُ."
            },
            {
                "id": "pa_dpt11",
                "question": "صحراءُ (pustynia) jest diptotyczna bo:",
                "translation": "(لماذا صحراء ممنوع من الصرف؟)",
                "options": ["Zenskosc przez ألف ممدودة (alif mamduda — اء)", "Jest imieniem wlasnym", "Jest obca", "Jest przymiotnikiem"],
                "correct": "Zenskosc przez ألف ممدودة (alif mamduda — اء)",
                "explanation": "Poprawnie: صحراءُ jest ممنوع من الصرف — koncowka اء (alif mamduda zenski) to marker zenskosci jak تاء مربوطة. WSZYSTKIE rzeczowniki na -اء (zenskie) sa diptotyczne: صحراءُ (pustynia), سماءُ (niebo), حمراءُ (czerwona). Odmiana: صحراءُ (mian.), صحراءَ (biern./dopel.). Z الـ: الصحراءِ (kasra wraca!). BEZ الـ: صحراءَ (fatha w dopelniaczu)."
            },
            {
                "id": "pa_dpt12",
                "question": "Przymiotnik عطشانُ (spragniony) jest diptotyczny bo:",
                "translation": "(لماذا عطشان ممنوع من الصرف؟)",
                "options": ["Wzorzec fa'lan (przymiotnikowy) + zenski fa'la (nie fa'lane)", "Jest imieniem", "Jest obcy", "Jest l. mn."],
                "correct": "Wzorzec fa'lan (przymiotnikowy) + zenski fa'la (nie fa'lane)",
                "explanation": "Poprawnie: عطشانُ jest ممنوع من الصرف — wzorzec فَعْلان PLUS zenski فَعْلى (عطشى, nie *عطشانة). Regula: przymiotniki فَعْلان sa diptotyczne TYLKO gdy zenski = فَعْلى. Jesli zenski = فَعْلانة to triptotyczny! Przyklady diptotyczne: غضبان/غضبى (zly), جوعان/جوعى (glodny). Triptotyczne: نَدْمان/نَدْمانة (zalujacy) — bo zenski na -انة. Subtelna, ale wazna regula."
            },
            {
                "id": "pa_dpt13",
                "question": "مررتُ بمساجدَ كثيرةٍ — مساجدَ jest w dopelniaczu z:",
                "translation": "(بماذا جُرّت مساجد؟)",
                "options": ["Fatha (zamiast kasry) — bo diptotyczny bez الـ", "Kasra — normalnie", "Sukunem", "Damma"],
                "correct": "Fatha (zamiast kasry) — bo diptotyczny bez الـ",
                "explanation": "Poprawnie: مساجدَ w dopelniaczu po بِـ, ale z fatha (nie kasra) — bo ممنوع من الصرف bez الـ. كثيرةٍ (z kasra i tanwinem — triptotyczny). Regula podsumowujaca: BEZ الـ/إضافة: dopel. = fatha, brak tanwinu. Z الـ/إضافة: odmiana normalna (kasra wraca, ale tanwin nadal brak — الـ wyklucza tanwin z definicji). To dwa stany diptotu."
            },
            {
                "id": "pa_dpt14",
                "question": "Czy WSZYSTKIE l. mn. lamane sa diptotyczne?",
                "translation": "(هل كل جمع تكسير ممنوع من الصرف؟)",
                "options": ["Nie — tylko wzorce mafa'il, mafa'il i podobne (3+ litery po alif)", "Tak — wszystkie", "Nie — zadne", "Tylko z الـ"],
                "correct": "Nie — tylko wzorce mafa'il, mafa'il i podobne (3+ litery po alif)",
                "explanation": "NIE wszystkie l.mn. lamane sa diptotyczne! Diptotyczne: wzorce z 3+ literami po alif w ich srodku: مَفَاعِل (مساجد), مَفَاعِيل (مفاتيح), فَعَالِل (جماهير), فَعَالِيل (عصافير). Triptotyczne: كُتُب (ksiazki — فُعُل), رِجَال (mezczyzni — فِعَال), بُيُوت (domy — فُعُول). Kluczowe: liczymy litery po wewnetrznym alif. Jesli 3+: diptotyczny."
            },
            {
                "id": "pa_dpt15",
                "question": "W Koranie: اذهب إلى فرعونَ — فرعونَ jest diptotyczny bo:",
                "translation": "(لماذا فرعون ممنوع من الصرف؟)",
                "options": ["Imie/tytul wlasny + obcosc (egipskie/koptyjskie)", "Jest arabskie", "Jest zenskie", "Jest wzorcem fu'al"],
                "correct": "Imie/tytul wlasny + obcosc (egipskie/koptyjskie)",
                "explanation": "Poprawnie: فرعونُ (Faraon) jest ممنوع من الصرف — علمية (imie/tytul wlasny) + عُجمة (obcosc — egipskie/koptyjskie pochodzenie). Odmiana: فرعونُ (mian.), فرعونَ (biern./dopel.). W Koranie: 'اذهب إلى فرعونَ إنه طغى' (Idz do Faraona, zaprawde zbuntowal sie). Fatha w dopelniaczu po إلى — klasyczny przyklad diptotu. Porownaj: إلى محمدٍ (kasra — triptotyczny)."
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
