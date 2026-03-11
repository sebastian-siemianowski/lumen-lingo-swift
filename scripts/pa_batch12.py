import json
from collections import Counter

with open('/Users/sebastiansiemianowski/RubymineProjects/lumen-lingo-swift/LumenLingo/LumenLingo/Resources/Content/polish_arabic/grammar_polish_arabic.json', 'r') as f:
    data = json.load(f)

new_categories = [
    {
        "key": "emphatic_verbs",
        "name": "Czasowniki z emfazą (التوكيد بالنون)",
        "description": "نونا التوكيد الثقيلة والخفيفة",
        "iconName": "exclamationmark.2",
        "color": "#4ade80",
        "level": "advanced",
        "items": [
            {
                "id": "pa_emv1",
                "question": "لَيَكْتُبَنَّ الدرسَ (Zaiste napisze lekcje) — co oznacza -نَّ?",
                "translation": "(Co dodaje نَّ do czasownika?)",
                "options": ["Emfaze/podkreslenie pewnosci", "Przeczenie", "Czas przeszly", "Tryb rozkazujacy"],
                "correct": "Emfaze/podkreslenie pewnosci",
                "explanation": "Koncowka '-نَّ' (nanna) to nun emfatyczny ciezki (نون التوكيد الثقيلة). Dodaje sie go do czasu terazniejszego, by wyrazic PEWNOSC lub PRZYSIEGANIE: لَيَكْتُبَنَّ = z pewnoscia napisze / zaiste napisze. W polskim uzywamy slow 'na pewno', 'z pewnoscia' — w arabskim to koncowka gramatyczna. Istnieje tez nun lekki (نون التوكيد الخفيفة): لَيَكْتُبَنْ (z sukunem zamiast szaddy)."
            },
            {
                "id": "pa_emv2",
                "question": "Nun emfatyczny ciezki (نون التوكيد الثقيلة) to:",
                "translation": "(ما نون التوكيد الثقيلة؟)",
                "options": ["-نَّ (z szadda)", "-نْ (z sukun)", "-نِ (z kasra)", "-نُ (z damma)"],
                "correct": "-نَّ (z szadda)",
                "explanation": "Nun emfatyczny ciezki: '-نَّ' (nanna) — z szadda (podwojony). Nun lekki: '-نْ' (nan) — z sukunem (pojedynczy). Oba wyrażaja emfaze, ale ciezki jest SILNIEJSZY i czeszciej uzywany. Przyklad: وَاللهِ لَأَدْرُسَنَّ (Przysiegam na Boga, bede sie uczyl!) — nun ciezki po formie terazniejszej z lam przysiegania. W Koranie oba nunu sa czeste."
            },
            {
                "id": "pa_emv3",
                "question": "هل تَذْهَبَنَّ إلى المدرسة؟ — co znaczy?",
                "translation": "(ما معنى هذه الجملة؟)",
                "options": ["Czy NA PEWNO pójdziesz do szkoly?", "Czy nie poszles do szkoly?", "Idz do szkoly!", "Nie chodz do szkoly!"],
                "correct": "Czy NA PEWNO pójdziesz do szkoly?",
                "explanation": "هل تَذْهَبَنَّ = Czy NA PEWNO pojdziesz? Nun emfatyczny w pytaniu wyrazaja nacisk — pytajacy chce POTWIERDZENIA, nie zwyklej odpowiedzi. Porownaj: هل تذهب؟ (Czy pojdziesz? — neutralne) vs. هل تذهبنّ؟ (Czy NA PEWNO pojdziesz? — z naciskiem). W polskim: 'Czy ty NA PEWNO pojdziesz?' — akcent na 'na pewno'. W arabskim to gramatyczna koncowka."
            },
            {
                "id": "pa_emv4",
                "question": "Nun emfatyczny laczy sie z trybem:",
                "translation": "(مع أي صيغة يتصل نون التوكيد؟)",
                "options": ["Terazniejszym i rozkazujacym", "Tylko przeszlym", "Tylko imiesłowem", "Z rzeczownikiem"],
                "correct": "Terazniejszym i rozkazujacym",
                "explanation": "Nun emfatyczny laczy sie z: 1) Czasem TERAZNIEJSZYM (المضارع): لَيَكْتُبَنَّ (z pewnoscia napisze), 2) Trybem ROZKAZUJACYM (الأمر): اُكْتُبَنَّ! (koniecznie napisz!). NIGDY z czasem przeszlym — bo przeszlosc jest juz faktem, nie potrzebuje emfazy. Z trybem rozkazujacym dodaje NALEGANIE: اذهبنّ! = koniecznie idz! (silniejsze niz zwykle اذهب!)."
            },
            {
                "id": "pa_emv5",
                "question": "لَأَفْعَلَنَّ ذلك — poprawna analiza to:",
                "translation": "(ما إعراب لأفعلنّ؟)",
                "options": ["Lam przysiegania + czas terazn. + nun emfatyczny", "Lam przeczenia + czas przeszly", "Lam rozkazu + masdar", "Lam celu + czas terazn."],
                "correct": "Lam przysiegania + czas terazn. + nun emfatyczny",
                "explanation": "Analiza: لَـ (lam al-qasam = lam przysiegania) + أَفْعَلَ (czas terazniejszy 1. os. — w formie mansub bo po nun emfatycznym) + نَّ (nun emfatyczny ciezki). Znaczenie: 'Z pewnoscia to zrobie!' / 'Przysiegam, ze to zrobie!'. Lam przysiegania WYMAGA nun emfatycznego — te dwa elementy chodza w parze. W Koranie: لَنَصْبِرَنَّ (z pewnoscia bedziemy cierpliwi)."
            },
            {
                "id": "pa_emv6",
                "question": "W 'يَكْتُبَنَّ' samogloska przed -نَّ to:",
                "translation": "(ما حركة ما قبل نون التوكيد؟)",
                "options": ["Fatha (فتحة)", "Damma (ضمة)", "Kasra (كسرة)", "Sukun (سكون)"],
                "correct": "Fatha (فتحة)",
                "explanation": "Przed nun emfatycznym czasownik przyjmuje FATHE na ostatniej spolglosce rdzenia: يَكْتُبُ → يَكْتُبَنَّ (damma → fatha). Dlaczego? Bo nun emfatyczny stawia czasownik w stanie BUDOWY (مبني) z fatha. To jak tryb mansub (biernikowy) — fatha na koncu. Regula: damma znika, fatha wchodzi. W l. mn. r.m.: يَكْتُبُونَ → يَكْتُبُنَّ (waw i nun odpadaja!)."
            },
            {
                "id": "pa_emv7",
                "question": "Forma l. mn. r.m. z nun emfatycznym od يَكْتُبُونَ:",
                "translation": "(ما صيغة التوكيد للجمع المذكر؟)",
                "options": ["يَكْتُبُنَّ", "يَكْتُبُونَنَّ", "يَكْتُبَانِنَّ", "يَكْتُبْنَنَّ"],
                "correct": "يَكْتُبُنَّ",
                "explanation": "W l. mn. r.m.: يَكْتُبُونَ → يَكْتُبُنَّ. Koncowka -ونَ ODPADA przed nun emfatycznym (dwa nuny nie moga stac obok siebie). Zostaje: يَكْتُبُ + نَّ = يَكْتُبُنَّ. UWAGA: ta forma wyglada identycznie jak l. mn. r.z.! يَكْتُبْنَ (r.z.) vs. يَكْتُبُنَّ (r.m. z emfaza) — roznica: sukun vs. damma na باء. Kontekst rozstrzyga."
            },
            {
                "id": "pa_emv8",
                "question": "Forma l. podw. z nun emfatycznym od يَكْتُبَانِ:",
                "translation": "(ما صيغة التوكيد للمثنى؟)",
                "options": ["يَكْتُبَانِّ", "يَكْتُبَنَّ", "يَكْتُبُونَنَّ", "يَكْتُبَاننَّ"],
                "correct": "يَكْتُبَانِّ",
                "explanation": "W l. podwojnej: يَكْتُبَانِ → يَكْتُبَانِّ. Tu nun koncowki -انِ ZOSTAJE, a nun emfatyczny podwaja go: -انِ + نَّ → -انِّ (nun z szadda). Jest to jedyny przypadek, gdzie nun koncowki odmiany i nun emfatyczny sie lacza. Porownaj: l. poj. يَكْتُبَنَّ, l. podw. يَكْتُبَانِّ, l. mn. r.m. يَكْتُبُنَّ. Kazda forma jest inna!"
            },
            {
                "id": "pa_emv9",
                "question": "اُكْتُبَنَّ! — co to za forma?",
                "translation": "(ما نوع هذه الصيغة؟)",
                "options": ["Rozkaz z nun emfatyczny", "Czas terazniejszy z emfaza", "Czas przeszly", "Strona bierna"],
                "correct": "Rozkaz z nun emfatyczny",
                "explanation": "اُكْتُبَنَّ! = Napisz koniecznie! / Musisz napisac! Tryb rozkazujacy (أمر) + nun emfatyczny (-نَّ). Dodaje NALEGALENIE do rozkazu. Roznica: اُكْتُبْ! (napisz — neutralny rozkaz) vs. اُكْتُبَنَّ! (napisz koniecznie! — z naciskiem). W zyciu codziennym rzadko uzywane — typowe dla stylu literackiego, koranicznego i uroczystego. W dialektach nun emfatyczny praktycznie nie istnieje."
            },
            {
                "id": "pa_emv10",
                "question": "Nun emfatyczny lekki (-نْ) rozni sie od ciezkiego (-نَّ):",
                "translation": "(ما الفرق بين نون التوكيد الثقيلة والخفيفة؟)",
                "options": ["Lekki ma sukun, ciezki ma szadde", "Lekki jest dluzszy", "Nie ma roznicy", "Ciezki jest starszy"],
                "correct": "Lekki ma sukun, ciezki ma szadde",
                "explanation": "Nun lekki: -نْ (sukun, pojedynczy) vs. nun ciezki: -نَّ (szadda, podwojony). Nun ciezki jest SILNIEJSZY w emfazie i duzo czestszy. Nun lekki moze byc usuniety w pauzach (waqf) — wtedy czasownik konczy sie na samej fathie: يَكْتُبَنْ → يَكْتُبَ (w pauzje). Nun ciezki jest trwalszy. W Koranie oba wystepuja, ale ciezki dominuje."
            },
            {
                "id": "pa_emv11",
                "question": "Czy nun emfatyczny zmienia ZNACZENIE czasownika?",
                "translation": "(هل يغيّر نون التوكيد معنى الفعل؟)",
                "options": ["Nie — dodaje tylko emfaze/podkreslenie", "Tak — zmienia na przeczenie", "Tak — zmienia czas", "Tak — zmienia na bierna"],
                "correct": "Nie — dodaje tylko emfaze/podkreslenie",
                "explanation": "Nun emfatyczny NIE zmienia znaczenia czasownika — dodaje jedynie EMFAZE (podkreslenie pewnosci/stanowczosci). يَكْتُبُ = pisze/napisze. يَكْتُبَنَّ = Z PEWNOSCIA pisze/napisze. Znaczenie bazowe identyczne. To jak w polskim: 'zrobie' vs. 'na pewno zrobie' vs. 'ZAISTE zrobie'. Slowo 'zrobie' sie nie zmienia — zmienia sie sila wyrazu."
            },
            {
                "id": "pa_emv12",
                "question": "W jakim stylu najczesciej spotykany jest nun emfatyczny?",
                "translation": "(في أي أسلوب يُستخدم نون التوكيد؟)",
                "options": ["Koraniczny, literacki, uroczysty", "Codzienny potoczny", "Dialekty regionalne", "Slang mlodziezowy"],
                "correct": "Koraniczny, literacki, uroczysty",
                "explanation": "Nun emfatyczny to cecha WYSOKIEGO stylu arabskiego: Koran, hadisy, poezja klasyczna, uroczysty jezyk prawniczy i religijny. W codziennym MSA (prasa, wiadomosci) jest RZADKI. W dialektach arabskich praktycznie NIE ISTNIEJE. Dla polskiego ucznia: warto ROZUMIEC go (bo pojawia sie w Koranie i klasycznej literaturze), ale nie trzeba go aktywnie uzywac w mowie."
            },
            {
                "id": "pa_emv13",
                "question": "وَاللهِ لَأَذْهَبَنَّ — analiza:",
                "translation": "(حلّل: واللهِ لأذهبنّ)",
                "options": ["Przysiegam na Boga, z pewnoscia pojde!", "Bog poszedl", "Nie pojde do Boga", "Bog chce, zebym poszedl"],
                "correct": "Przysiegam na Boga, z pewnoscia pojde!",
                "explanation": "Analiza: وَاللهِ (przysiegam na Boga — waw przysiegania + Boga w dopelniaczu) + لَـ (lam przysiegania) + أَذْهَبَ (pojde — 1. os. terazn.) + نَّ (nun emfatyczny). Pelna konstrukacja przysiegowa: قسم + لام القسم + فعل مضارع + نون التوكيد. To KLASYCZNA formula. W polskim: 'Przysiegam na Boga, ze pojde!' — ale po arabsku jest to gramatycznie wbudowane, nie tylko leksykalnie."
            },
            {
                "id": "pa_emv14",
                "question": "لَا تَكْذِبَنَّ! — co to znaczy?",
                "translation": "(ما معنى لا تكذبنّ؟)",
                "options": ["Nie klam pod zadnym pozorem!", "Klam!", "On nie sklamal", "Klamilismy"],
                "correct": "Nie klam pod zadnym pozorem!",
                "explanation": "لَا تَكْذِبَنَّ! = Nie klam pod zadnym pozorem! / Absolutnie nie klam! لَا (zakaz) + تَكْذِبَ (klamiesz — terazn. 2. os.) + نَّ (nun emfatyczny). Zakaz + emfaza = KATEGORYCZNY ZAKAZ. Porownaj: لَا تَكْذِبْ (nie klam — standardowy zakaz) vs. لَا تَكْذِبَنَّ! (absolutnie nie klam! — z naciskiem). W Koranie: لَا تَحْسَبَنَّ (nie sadz pod zadnym pozorem)."
            },
            {
                "id": "pa_emv15",
                "question": "Ktore zdanie zawiera nun emfatyczny?",
                "translation": "(أي جملة فيها نون توكيد؟)",
                "options": ["لَيَنْجَحَنَّ الطالبُ", "يَنْجَحُ الطالبُ", "نَجَحَ الطالبُ", "لَنْ يَنْجَحَ"],
                "correct": "لَيَنْجَحَنَّ الطالبُ",
                "explanation": "لَيَنْجَحَنَّ (z pewnoscia zda) — zawiera lam przysiegania (لَـ) + nun emfatyczny (-نَّ). Pozostale: يَنْجَحُ (zda — neutralnie), نَجَحَ (zdal — przeszly), لَنْ يَنْجَحَ (nie zda — przeczenie przyszlosci z لَنْ). Jak rozpoznac nun emfatyczny? Szukaj -نَّ lub -نْ na koncu czas. terazn., czesto z لَـ przed czasownikiem."
            }
        ]
    },
    {
        "key": "exclamatory_form",
        "name": "Forma wykrzyknikowa (التعجب)",
        "description": "أسلوب التعجب - ما أَفْعَلَ و أَفْعِلْ بِـ",
        "iconName": "exclamationmark.bubble",
        "color": "#c084fc",
        "level": "advanced",
        "items": [
            {
                "id": "pa_exf1",
                "question": "ما أَجْمَلَ السماءَ! — co znaczy?",
                "translation": "(ما معنى ما أجمل السماء؟)",
                "options": ["Jak piekne jest niebo!", "Co jest piekne?", "Niebo nie jest piekne", "Piekne niebo"],
                "correct": "Jak piekne jest niebo!",
                "explanation": "ما أَجْمَلَ السماءَ! = Jak piekne jest niebo! To forma التعجب (wykrzyknik podziwu). Wzorzec: ما + أَفْعَلَ + dopelnienie (w bierniku). ما tu NIE jest pytajace — to wyrazenie podziwu. أَجْمَلَ od rdzenia ج-م-ل (piekno). W polskim uzywamy 'Jak...!' lub 'Co za...!'. W arabskim to STALÝ wzorzec gramatyczny z wlasna budowa."
            },
            {
                "id": "pa_exf2",
                "question": "Ktory wzorzec to prawidlowa forma wykrzyknikowa?",
                "translation": "(ما الوزن الصحيح للتعجب؟)",
                "options": ["ما أَفْعَلَ", "ما فَعَلَ", "ما يَفْعَلُ", "ما فَاعِل"],
                "correct": "ما أَفْعَلَ",
                "explanation": "Pierwsza forma wykrzyknikowa: ما أَفْعَلَ (ma afala). Budowa: ما (wyrazenie podziwu) + أَفْعَلَ (czasownik na wzor IV, ale w funkcji wykrzyknikowej). Przyklady: ما أَكْبَرَ (jak duzy!), ما أَصْغَرَ (jak maly!), ما أَحْسَنَ (jak piekny!). Druga forma: أَفْعِلْ بِهِ! (afil bihi!) — np. أَجْمِلْ بِهِ! (jakze jest piekny!). Obie sa rownowazne."
            },
            {
                "id": "pa_exf3",
                "question": "ما أَكْبَرَ هذا البيتَ! — prawidlowe tlumaczenie:",
                "translation": "(ما ترجمة ما أكبر هذا البيت؟)",
                "options": ["Jak duzy jest ten dom!", "Co jest wieksze od domu?", "Dom nie jest duzy", "Duzy dom"],
                "correct": "Jak duzy jest ten dom!",
                "explanation": "ما أَكْبَرَ هذا البيتَ! = Jak duzy jest ten dom! ما (wykrzyknik) + أَكْبَرَ (od rdzenia ك-ب-ر = wielkosc) + هذا البيتَ (ten dom — w bierniku jako dopelnienie). Uwaga: هذا nie odmienia sie, ale البيتَ jest w bierniku (mansub z fatha). Porownaj z przym. stopnia wyzszego: هذا البيتُ أَكْبَرُ (ten dom jest wiekszy) — inna budowa!"
            },
            {
                "id": "pa_exf4",
                "question": "Druga forma wykrzyknikowa to:",
                "translation": "(ما الصيغة الثانية للتعجب؟)",
                "options": ["أَفْعِلْ بِـ (afil bi-)", "فَعِلَ مِنْ", "تَفَعَّلَ", "اِسْتَفْعَلَ"],
                "correct": "أَفْعِلْ بِـ (afil bi-)",
                "explanation": "Druga forma: أَفْعِلْ بِـ + dopelnienie. Przyklad: أَجْمِلْ بِالسماءِ! = Jakze piekne jest niebo! Budowa: أَفْعِلْ (wyglada jak rozkaz formy IV) + بِـ + rzeczownik w dopelniaczu. Oba wzorce sa rownowazne: ما أَجْمَلَ السماءَ! = أَجْمِلْ بِالسماءِ! — identyczne znaczenie, rozna budowa. Drugi wzorzec jest rzadszy w nowoczesnym MSA."
            },
            {
                "id": "pa_exf5",
                "question": "ما أَحْسَنَ هذا الطعامَ! — 'الطعام' jest w jakim przypadku?",
                "translation": "(ما إعراب الطعام في ما أحسن هذا الطعام؟)",
                "options": ["Biernik (منصوب)", "Mianownik (مرفوع)", "Dopelniacz (مجرور)", "Bez odmiany (مبني)"],
                "correct": "Biernik (منصوب)",
                "explanation": "W formie ما أَفْعَلَ, rzeczownik po أَفْعَلَ jest DOPELNIENIEM w BIERNIKU (مفعول به منصوب): الطعامَ (z fatha). Analiza gramatyczna: ما = podmiot (mubtada lub zaimek budzacy podziw), أَحْسَنَ = orzeczenie (czasownik wykrzyknikowy), الطعامَ = dopelnienie (maful bihi). W formie أَفْعِلْ بِـ — rzeczownik jest w DOPELNIACZU po بِـ: بِالطعامِ."
            },
            {
                "id": "pa_exf6",
                "question": "Czy mozna utworzyc forme wykrzyknikowa od kazdego przymiotnika?",
                "translation": "(هل يمكن التعجب من كل صفة؟)",
                "options": ["Nie — sa warunki: 3 litery, nie kolor/wada, mozna stopniowac", "Tak — od kazdego", "Tylko od kolorow", "Tylko od czasownikow"],
                "correct": "Nie — sa warunki: 3 litery, nie kolor/wada, mozna stopniowac",
                "explanation": "Warunki tworzenia التعجب: 1) Rdzen TROJLITEROWY (nie czteroliterowy), 2) NIE od kolorow/wad fizycznych (nie: ما أَحْمَرَ! — zamiast tego: ما أَشَدَّ حُمْرَتَه!), 3) Czasownik moze byc STOPNIOWANY, 4) NIE od strony biernej, 5) Rdzen pelny (nie pusty/ulomny — te uzywaja formy opisowej). Jesli warunki nie sa spelnione: uzywamy opisowej formy z أَشَدّ/أَكْثَر."
            },
            {
                "id": "pa_exf7",
                "question": "Forma wykrzyknikowa od 'ładny' (حَسَن) to:",
                "translation": "(ما صيغة التعجب من حَسَن؟)",
                "options": ["ما أَحْسَنَ!", "ما حَسَنَ!", "ما حَاسِنَ!", "ما يُحْسِنَ!"],
                "correct": "ما أَحْسَنَ!",
                "explanation": "ما أَحْسَنَ! = Jak ladnie/pieknie! Od rdzenia ح-س-ن. Wzorzec: rdzen wstawiamy w szablon أَفْعَلَ: ح-س-ن → أَحْسَنَ. To TEN SAM wzorzec co forma IV i przymiotnik stopnia wyzszego (أَحْسَن = ladniejszy). Kontekst rozroznia: ما أَحْسَنَ! (wykrzyknik), هو أَحْسَنُ (jest ladniejszy), أَحْسَنَ إليه (wyswiadczyl dobro — forma IV). Trzy rozne funkcje!"
            },
            {
                "id": "pa_exf8",
                "question": "Jak wyrazic podziw dla koloru (np. 'Jak czerwony!')?",
                "translation": "(كيف نتعجب من اللون؟)",
                "options": ["ما أَشَدَّ حُمْرَتَه! (jak intensywna jego czerwien!)", "ما أَحْمَرَهُ!", "ما حَمَرَهُ!", "أَحْمِرْ بِهِ!"],
                "correct": "ما أَشَدَّ حُمْرَتَه! (jak intensywna jego czerwien!)",
                "explanation": "Od kolorow i wad fizycznych NIE tworzymy bezposrednio ما أَفْعَلَ (zakaz: ما أَحْمَرَ = BLEDNE). Zamiast tego uzywamy formy OPISOWEJ: ما أَشَدَّ + masdar koloru! ما أَشَدَّ حُمْرَتَهُ! = Jak intensywna jest jego czerwien! أَشَدّ (najbardziej intensywny) + حُمْرَة (masdar od أَحْمَر). To wazny wyjatek — kolory maja osobne reguly w calej gramatyce arabskiej."
            },
            {
                "id": "pa_exf9",
                "question": "ما أَعْظَمَ اللهَ! — co znaczy?",
                "translation": "(ما معنى ما أعظم الله؟)",
                "options": ["Jak wielki jest Bog!", "Co Bog zrobil?", "Bog nie jest wielki", "Wielki Bog powiedzial"],
                "correct": "Jak wielki jest Bog!",
                "explanation": "ما أَعْظَمَ اللهَ! = Jak wielki jest Bog! / Jakze wielki jest Bog! Od rdzenia ع-ظ-م (wielkosc/majestat). Bardzo czeste wyrazenie w kontekscie religijnym. Porownaj z: اللهُ أَكْبَرُ (Bog jest Najwiekszy — przymiotnik w stopniu wyzszym, INNA budowa). ما أَعْظَمَ = wykrzyknik podziwu, اللهُ أَكْبَرُ = stwierdzenie porownawcze. Oba wyrażaja wielkosc Boga, ale gramatycznie rozne."
            },
            {
                "id": "pa_exf10",
                "question": "Forma wykrzyknikowa od 'szybki' (سَرِيع):",
                "translation": "(ما صيغة التعجب من سَرِيع؟)",
                "options": ["ما أَسْرَعَ!", "ما سَرِيعَ!", "ما سَرَّعَ!", "ما يُسْرِعَ!"],
                "correct": "ما أَسْرَعَ!",
                "explanation": "ما أَسْرَعَ! = Jak szybko! Od rdzenia س-ر-ع (szybkosc). Rdzen trojliterowy → mozna tworzyc bezposrednio. Zastosowanie: ما أَسْرَعَ الوقتَ! (Jak szybko mija czas!), ما أَسْرَعَ هذه السيارةَ! (Jak szybki jest ten samochod!). Masdar: سُرْعَة (predkosc). Przymiotnik: سَرِيع. Stopien wyzszy: أَسْرَعُ (szybszy). Forma wykrzyknikowa: أَسْرَعَ (ten sam wzorzec!)."
            },
            {
                "id": "pa_exf11",
                "question": "W zdaniu ما أَجْمَلَ!, czym jest 'ما'?",
                "translation": "(ما نوع 'ما' في 'ما أجمل'؟)",
                "options": ["ما تعجبية (wykrzyknikowa)", "ما استفهامية (pytajaca)", "ما نافية (przeczaca)", "ما موصولة (laczaca)"],
                "correct": "ما تعجبية (wykrzyknikowa)",
                "explanation": "W التعجب, 'ما' to ما تعجبية — specjalna funkcja wyrazajaca PODZIW. Nie myli z: ما استفهامية (Co? — pytanie: ما هذا؟), ما نافية (nie — przeczenie: ما ذهبَ), ما موصولة (to co — zdanie wzgledne: ما قلتَهُ = to, co powiedziales). Arabskie ما ma CO NAJMNIEJ 4 rozne funkcje! Kontekst + budowa zdania pomagaja rozroznic."
            },
            {
                "id": "pa_exf12",
                "question": "أَجْمِلْ بِهذا المنظرِ! — analiza:",
                "translation": "(حلّل: أجملْ بهذا المنظر!)",
                "options": ["Jakze piekny jest ten widok!", "Upieksz ten widok!", "Widok jest brzydki", "Piekno tego widoku"],
                "correct": "Jakze piekny jest ten widok!",
                "explanation": "أَجْمِلْ بِهذا المنظرِ! = Jakze piekny jest ten widok! Druga forma التعجب: أَفْعِلْ بِـ. أَجْمِلْ (wyglada jak rozkaz, ale to wykrzyknik) + بِـ (przyimek) + هذا المنظرِ (ten widok — w dopelniaczu po بِـ). Dlaczego dopelniacz? Bo بِـ wymaga dopelniacza. Porownaj z pierwsza forma: ما أَجْمَلَ هذا المنظرَ! (biernik). To sa dwie rozne drogi do tego samego znaczenia."
            },
            {
                "id": "pa_exf13",
                "question": "ما أَكْثَرَ النجومَ في السماء! — znaczenie:",
                "translation": "(ما معنى ما أكثر النجوم في السماء؟)",
                "options": ["Ile gwiazd na niebie! / Jak wiele gwiazd!", "Czy jest duzo gwiazd?", "Nie ma gwiazd", "Gwiazdy spadaja"],
                "correct": "Ile gwiazd na niebie! / Jak wiele gwiazd!",
                "explanation": "ما أَكْثَرَ النجومَ في السماءِ! = Jak wiele gwiazd jest na niebie! / Ilez gwiazd! Od rdzenia ك-ث-ر (mnogosc). أَكْثَرَ = forma wykrzyknikowa. النجومَ = gwiazdy (biernik). Uzycie: podziw wobec ILOSCI. Inne przyklady: ما أَكْثَرَ الناسَ! (Ile ludzi!), ما أَقَلَّ المالَ! (Jak malo pieniedzy! — od rdzenia ق-ل-ل). Mozna wyrazac zarowno podziw pozytywny jak i negatywny."
            },
            {
                "id": "pa_exf14",
                "question": "Czy ما أَفْعَلَ zmienia sie ze wzgledu na rodzaj/liczbe?",
                "translation": "(هل يتغير 'ما أفعل' بتغير الجنس والعدد؟)",
                "options": ["Nie — forma jest NIEZMIENNA", "Tak — zmienia sie na zenski", "Tak — zmienia sie w l. mn.", "Tak — dodaje koncowki"],
                "correct": "Nie — forma jest NIEZMIENNA",
                "explanation": "Forma ما أَفْعَلَ jest NIEZMIENNA (لا تتصرف). Niezaleznie od rodzaju, liczby czy osoby: ما أَجْمَلَ الرجلَ! (mezczyzna), ما أَجْمَلَ المرأةَ! (kobieta), ما أَجْمَلَ الرجالَ! (mezczyzni), ما أَجْمَلَ النساءَ! (kobiety). Zawsze ta sama forma! To upraszcza nauke — jedyny element zmienny to dopelnienie po أَفْعَلَ, ktore sie odmienia przez przypadki."
            },
            {
                "id": "pa_exf15",
                "question": "Ktore zdanie jest POPRAWNA forma wykrzyknikowa?",
                "translation": "(أي جملة تعجب صحيحة؟)",
                "options": ["ما أَعْلَمَ المعلمَ!", "ما عَلِمَ المعلمُ!", "ما يَعْلَمُ المعلمُ!", "ما المعلمُ أَعْلَمُ!"],
                "correct": "ما أَعْلَمَ المعلمَ!",
                "explanation": "ما أَعْلَمَ المعلمَ! = Jakze uczony jest nauczyciel! Poprawna budowa: ما + أَفْعَلَ + dopelnienie w bierniku. Bledne: ما عَلِمَ (ما przeczace + czas przeszly = nie wiedzial), ما يَعْلَمُ (ما przeczace + terazn. = nie wie), ما المعلمُ أَعْلَمُ (ما przeczace + zdanie nominalne = nauczyciel nie jest najuczeniejszy). Budowa zdania DECYDUJE o znaczeniu ما!"
            }
        ]
    },
    {
        "key": "diminutive_form",
        "name": "Forma zdrobniala (التصغير)",
        "description": "أوزان التصغير في العربية",
        "iconName": "arrow.down.right.and.arrow.up.left",
        "color": "#22d3ee",
        "level": "advanced",
        "items": [
            {
                "id": "pa_dim1",
                "question": "Forma zdrobniala od 'كِتَاب' (ksiazka) to:",
                "translation": "(ما تصغير كتاب؟)",
                "options": ["كُتَيِّب", "كِتَيْب", "كُتُوب", "كِتَابِيّ"],
                "correct": "كُتَيِّب",
                "explanation": "كُتَيِّب (kutayyib) = ksiazeczka/broszura. Wzorzec zdrobnienia dla rzeczownikow 3+ literowych: فُعَيْعِيل → كُتَيِّب. Reguly: 1) Pierwsza litera dostaje damme (ضمة), 2) Po drugiej wstawiamy يَ, 3) Reszta dostosowuje sie. W polskim mamy zdrobnienia: 'ksiazka' → 'ksiazeczka'. W arabskim to REGULARNY wzorzec morfologiczny — nie przyrostek, a WEWNETRZNA zmiana."
            },
            {
                "id": "pa_dim2",
                "question": "Glowne wzorce zdrobnienia to:",
                "translation": "(ما أوزان التصغير الرئيسية؟)",
                "options": ["فُعَيْل, فُعَيْعِل, فُعَيْعِيل", "فَعِيل, فَعَّال, فِعَال", "مَفْعَل, مِفْعَال, فَاعِل", "فِعْلَة, فُعْلَة, فَعْلَة"],
                "correct": "فُعَيْل, فُعَيْعِل, فُعَيْعِيل",
                "explanation": "Trzy glowne wzorce zdrobnienia: 1) فُعَيْل (fu'ayl) — dla TROJLITEROWYCH: كَلْب → كُلَيْب (piesek), 2) فُعَيْعِل (fu'ay'il) — dla CZTEROLITEROWYCH: عَقْرَب → عُقَيْرِب (skorpionik), 3) فُعَيْعِيل (fu'ay'iil) — dla piecioliterowych: مفتاح → مُفَيْتِيح (kluczyk). Wspolny element: damma na poczatku + يْ po drugiej literze."
            },
            {
                "id": "pa_dim3",
                "question": "Zdrobnienie od 'بَيْت' (dom) to:",
                "translation": "(ما تصغير بَيْت؟)",
                "options": ["بُيَيْت", "بَيْتِيّ", "بُيُوت", "بَيَّتَ"],
                "correct": "بُيَيْت",
                "explanation": "بُيَيْت (buyayt) = domek. Wzorzec فُعَيْل od trojliterowego بَيْت (ب-ي-ت). Damma na باء (بُـ), fatha na يَ, sukun na ياء zdrobnienia. To regularny wzorzec. W polskim: 'dom' → 'domek' (przyrostek -ek). W arabskim: zmiana WEWNETRZNA (samogloski + dodany يْ). بُيَيْت moze tez oznaczac 'wiersz/dwuwiersz' (zdrobnienie poetyckie)."
            },
            {
                "id": "pa_dim4",
                "question": "Zdrobnienie od 'رَجُل' (mezczyzna) to:",
                "translation": "(ما تصغير رَجُل؟)",
                "options": ["رُجَيْل", "رَجِيل", "رُجُول", "رَجَّال"],
                "correct": "رُجَيْل",
                "explanation": "رُجَيْل (rujayl) = czlowieczek/facecik. Wzorzec فُعَيْل: ر → رُ (damma), ج → جَ (fatha), يْ (dodane), ل. W arabskim zdrobnienie moze miec ton LEKCEWAZOACY (czlowieczek = ktos maly/nieistotny) lub CZULY (np. o dziecku). W polskim tak samo: 'czlowieczek' moze byc czule LUB lekcewazoaco. Kontekst decyduje."
            },
            {
                "id": "pa_dim5",
                "question": "Zdrobnienie od 'شَمْس' (slonce) z ta marbuta to:",
                "translation": "(ما تصغير شمس؟)",
                "options": ["شُمَيْسَة", "شُمَيْس", "شَمِيسَة", "شُمُوسَة"],
                "correct": "شُمَيْسَة",
                "explanation": "شُمَيْسَة (shumaysa) = sloneczko. Regula: rzeczowniki ZENSKIE bez ta marbuta DOSTAJA ja w zdrobnieniu: شَمْس (brak ة) → شُمَيْسَة (dodana ة). Dlaczego? Zdrobnienie 'ujawnia' rodzaj gramatyczny. Inne przyklady: أُذُن (ucho, zenskie) → أُذَيْنَة (uszko), عَيْن (oko, zenskie) → عُيَيْنَة (oczko). Ale: كِتَاب (meskie) → كُتَيِّب (bez ة)."
            },
            {
                "id": "pa_dim6",
                "question": "Jaka jest FUNKCJA zdrobnienia w arabskim?",
                "translation": "(ما وظائف التصغير في العربية؟)",
                "options": ["Zmniejszenie, pieszczotliwosc, bliskosc, lekcewazenie", "Tylko zmniejszenie", "Tylko pieszczotliwosc", "Tylko lekcewazenie"],
                "correct": "Zmniejszenie, pieszczotliwosc, bliskosc, lekcewazenie",
                "explanation": "Zdrobnienie arabskie pełni WIELE funkcji: 1) ZMNIEJSZENIE: بُيَيْت = domek (maly dom), 2) PIESZCZOTLIWOSC: بُنَيّ = syneczku (od اِبْن), 3) BLISKOSC (czasu/miejsca): قُبَيْلَ = tuz przed (od قَبْلَ), 4) LEKCEWAZENIE: رُجَيْل = czlowieczek (ktos nieistotny), 5) WSPOLCZUCIE: مُسَيْكِين = biedaczek (od مِسْكِين). Identycznie jak w polskim — zdrobnienia sa wielofunkcyjne!"
            },
            {
                "id": "pa_dim7",
                "question": "Zdrobnienie od 'وَلَد' (chlopiec) to:",
                "translation": "(ما تصغير وَلَد؟)",
                "options": ["وُلَيْد", "وَلِيد", "أَوْلاد", "وَلَّدَ"],
                "correct": "وُلَيْد",
                "explanation": "وُلَيْد (wulayd) = chlopczyk. Wzorzec فُعَيْل regularny. Ciekawe: وَلِيد (walid, bez zdrobnienia) to imie wlasne (np. الوليد بن عبد الملك — kalif). Zdrobnienie وُلَيْد tez bywa imieniem. W arabskim wiele imion to zdrobnienia: حُسَيْن (zdrobnienie od حَسَن = piekny), زُبَيْر (od زُبْر), عُمَيْر (od عُمَر). Imiona-zdrobnienia wyrażaja czulosc."
            },
            {
                "id": "pa_dim8",
                "question": "Zdrobnienie od 'عُصْفُور' (wrobel) to:",
                "translation": "(ما تصغير عصفور؟)",
                "options": ["عُصَيْفِير", "عُصْفِير", "عَصَفَر", "عُصْفُورِيّ"],
                "correct": "عُصَيْفِير",
                "explanation": "عُصَيْفِير (usayfir) = wrobelek. Wzorzec فُعَيْعِيل (dla piecioliterowych). عُصْفُور (4 rdzen. litery + و) → عُصَيْفِير: damma na عُ, fatha na صَ, يْ (zdrobnienie), kasra na فِ, يـ (dlugie i), ر. Dluzsze slowa = bardziej skomplikowany wzorzec, ale ZASADA ta sama: damma + يْ po drugiej literze."
            },
            {
                "id": "pa_dim9",
                "question": "Zdrobnienie od 'قَلَم' (dlugopis) to:",
                "translation": "(ما تصغير قلم؟)",
                "options": ["قُلَيْم", "قَلِيم", "قُلُوم", "قَلَّمَ"],
                "correct": "قُلَيْم",
                "explanation": "قُلَيْم (qulaym) = dlugopisik/oloveczek. Wzorzec فُعَيْل od trojliterowego. Regula: ق → قُ (damma), ل → لَ (fatha), يْ (zdrobnienie), م. To jedna z prostszych form — trojliterowe rdzenie daja przejrzysty wynik. Porownaj z polskim: 'dlugopis' → 'dlugopisik' (przyrostek), ale arabskie zdrobnienie to WEWNETRZNA modyfikacja samoglosek + dodanie يْ."
            },
            {
                "id": "pa_dim10",
                "question": "Forma zdrobniala od zaimka 'هذا' (ten) to:",
                "translation": "(ما تصغير هذا؟)",
                "options": ["هذَيَّا", "هُذَيْ", "هَذَا", "Nie ma zdrobnienia"],
                "correct": "هذَيَّا",
                "explanation": "Tak! Nawet ZAIMKI wskazujace maja zdrobnienia: هذا → هذَيَّا (hadhayyā) = 'tencik' (ten tu obok). Funkcja: wskazanie BLIZKOSCI lub LEKCEWAZOENIA. Ale UWAGA: to zjawisko glownie KLASYCZNE/LITERACKIE — w nowoczesnym MSA i dialektach zdrobnienia zaimkow sa bardzo rzadkie. Inne: ذَلِكَ → ذُلَيِّكَ. Dla studenta: warto wiedziec, ze istnieja, ale aktywnie ich nie uzywac."
            },
            {
                "id": "pa_dim11",
                "question": "Zdrobnienie czesto nadaje rzeczownikowi rodzaj:",
                "translation": "(التصغير قد يضيف علامة التأنيث — صح أم خطأ؟)",
                "options": ["Zenski (dodanie ة) — jesli rzeczownik zenski bez ة", "Meski zawsze", "Nie zmienia rodzaju", "Nieokreslony"],
                "correct": "Zenski (dodanie ة) — jesli rzeczownik zenski bez ة",
                "explanation": "WAZNA regula: rzeczowniki zenskie BEZ ta marbuta (ة) DOSTAJA ja w zdrobnieniu: شَمْس → شُمَيْسَة, أُذُن → أُذَيْنَة, نَار → نُوَيْرَة (ognik), دَار → دُوَيْرَة (domek/podworko). Ale: rzeczowniki MESKIE NIE dostaja ة: كِتَاب → كُتَيِّب (nie *كُتَيِّبة). Zdrobnienie 'ujawnia' ukryty rodzaj zenski — to diagnostyczne narzedzie gramatyczne!"
            },
            {
                "id": "pa_dim12",
                "question": "بُنَيّ! — co to znaczy i od czego pochodzi?",
                "translation": "(ما معنى بُنَيّ وما أصله؟)",
                "options": ["Syneczku! — zdrobnienie od اِبْن (syn)", "Budowa — od بَنَى", "Dziewczynka", "Budynek"],
                "correct": "Syneczku! — zdrobnienie od اِبْن (syn)",
                "explanation": "بُنَيّ (bunayy) = syneczku! Zdrobnienie pieszczotliwe od اِبْن (syn). Bardzo czeste w Koranie: يَا بُنَيَّ! (O syneczku moj!) — slowa Luqmana do syna (Sura 31:13). W codziennym arabskim tez popularne jako czulý zwrot do chlopca. Analiza: اِبْن → بُنَيّ (hamza i nun odpadaja, damma + يّ). To jeden z najbardziej rozpoznawalnych zdrobnień arabskich."
            },
            {
                "id": "pa_dim13",
                "question": "Zdrobnienie od 'أَسَد' (lew) to:",
                "translation": "(ما تصغير أسد؟)",
                "options": ["أُسَيْد", "أُسُود", "أَسِيد", "أَسَدِيّ"],
                "correct": "أُسَيْد",
                "explanation": "أُسَيْد (usayd) = lewek/lwiatko. Wzorzec فُعَيْل: أ → أُ (damma), س → سَ (fatha), يْد. Uwaga: أُسَيْد to tez popularne IMIE meskie — Usayd ibn Hudayr (towarzysz Proroka). Wiele arabskich imion pochodzi od zdrobnien zwierzat: أُسَامَة (zdrobnienie od 'lew' — inna forma). Zdrobnienia zwierzat wyrażaja czulosc i szacunek zarazem."
            },
            {
                "id": "pa_dim14",
                "question": "قُبَيْلَ المغربِ — co znaczy?",
                "translation": "(ما معنى قُبَيْلَ المغرب؟)",
                "options": ["Tuz przed zachodem slonca", "Przed podroza", "Po zachodzie", "Daleko od zachodu"],
                "correct": "Tuz przed zachodem slonca",
                "explanation": "قُبَيْلَ (qubayla) = tuz przed — zdrobnienie od قَبْلَ (przed). Funkcja: wyrazenie BLIZKOSCI CZASOWEJ. قَبْلَ المغربِ = przed zachodem slonca (ogolnie). قُبَيْلَ المغربِ = TUZ przed zachodem (za chwile). W polskim: 'przed' vs. 'tuz przed' — w arabskim to zmiana morfologiczna! Inne przyklady: بُعَيْدَ (tuz po — od بَعْدَ), فُوَيْقَ (tuz nad — od فَوْقَ)."
            },
            {
                "id": "pa_dim15",
                "question": "Czy zdrobnienia sa czeste w nowoczesnym MSA?",
                "translation": "(هل التصغير شائع في العربية المعاصرة؟)",
                "options": ["Nie — glownie w klasycznym i literackim jezyku", "Tak — bardzo czeste", "Tylko w dialektach", "Tylko w Koranie"],
                "correct": "Nie — glownie w klasycznym i literackim jezyku",
                "explanation": "W nowoczesnym MSA (prasa, media) zdrobnienia sa RZADKIE — uzywane glownie w: 1) Kontekstach religijnych (يا بُنَيّ), 2) Utartych wyrazeniach (كُتَيِّب = broszura), 3) Literaturze pieknej, 4) Imionach wlasnych (حُسَيْن, أُسَامَة). W dialektach: rozne regiony maja WLASNE sposoby zdrabniania (np. egipski: sufiks -awi). Dla polskiego ucznia: warto rozumiec wzorzec, aktywnie uzywac kilku utartych form."
            }
        ]
    },
    {
        "key": "nisba_adjective",
        "name": "Przymiotnik relacyjny (النسبة)",
        "description": "النسبة - تحويل الاسم إلى صفة بإضافة ـيّ",
        "iconName": "person.text.rectangle",
        "color": "#f472b6",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_nsb1",
                "question": "Przymiotnik 'egipski' od مِصْر (Egipt) to:",
                "translation": "(ما النسبة من مصر؟)",
                "options": ["مِصْرِيّ", "مِصْرَان", "مَصِير", "مُمَصِّر"],
                "correct": "مِصْرِيّ",
                "explanation": "مِصْرِيّ (misriyy) = egipski. Tworzymy przez dodanie '-ِيّ' (-iyy) do rzeczownika: مِصْر + ِيّ = مِصْرِيّ. To jest النسبة (nisba) — tworzenie przymiotnika relacyjnego. W polskim: 'Egipt' → 'egipski' (sufiks -ski). W arabskim: sufiks -ِيّ. Rodzaj zenski: مِصْرِيَّة (misriyya). L. mn.: مِصْرِيُّونَ (r.m.) / مِصْرِيَّات (r.z.)."
            },
            {
                "id": "pa_nsb2",
                "question": "Przymiotnik od 'لُبْنَان' (Liban) to:",
                "translation": "(ما النسبة من لبنان؟)",
                "options": ["لُبْنَانِيّ", "لُبْنَانَة", "لَبَنِيّ", "مُلَبْنِن"],
                "correct": "لُبْنَانِيّ",
                "explanation": "لُبْنَانِيّ (lubnāniyy) = libanski. Regula: -ِيّ dodajemy do PELNEJ formy nazwy: لُبْنَان + ِيّ = لُبْنَانِيّ. To proste — bez zmian w rdzeniu. Porownaj z polskim: 'Liban' → 'libanski' (zmiana -an → -anski). W arabskim zmiana jest MNIEJSZA — tylko dodanie sufiksu. Uwaga: لَبَنِيّ (od لَبَن = mleko) = mleczny — inny rdzen, inne znaczenie!"
            },
            {
                "id": "pa_nsb3",
                "question": "Co sie dzieje z ta marbuta (ة) przy tworzeniu nisba?",
                "translation": "(ماذا يحدث للتاء المربوطة عند النسبة؟)",
                "options": ["Ta marbuta ODPADA: مَكَّة → مَكِّيّ", "Zostaje: مَكَّةِيّ", "Zamienia sie na ت: مَكَّتِيّ", "Podwaja sie: مَكَّتَتِيّ"],
                "correct": "Ta marbuta ODPADA: مَكَّة → مَكِّيّ",
                "explanation": "Regula: ta marbuta (ة) ODPADA przed dodaniem -ِيّ: مَكَّة → مَكِّيّ (mekkanski), مَدْرَسَة → مَدْرَسِيّ (szkolny), صِنَاعَة → صِنَاعِيّ (przemyslowy). To STALA regula — nigdy nie zostawiamy ة. W polskim: 'Mekka' → 'mekkanski' (tez zmiana koncowki). Wyjatki: sa nieliczne slowa, gdzie ة jest czescia rdzenia — wtedy moze zostac."
            },
            {
                "id": "pa_nsb4",
                "question": "Przymiotnik od 'يَوْم' (dzien) to:",
                "translation": "(ما النسبة من يوم؟)",
                "options": ["يَوْمِيّ", "يَامِيّ", "يَوْمَان", "أَيَّامِيّ"],
                "correct": "يَوْمِيّ",
                "explanation": "يَوْمِيّ (yawmiyy) = codzienny/dzienny. Regularne dodanie -ِيّ. Uzywane czesto: صَحِيفَة يَوْمِيَّة (gazeta codzienna), أَجْر يَوْمِيّ (stawka dzienna). Porownaj: أُسْبُوعِيّ (tygodniowy — od أُسْبُوع), شَهْرِيّ (miesieczny — od شَهْر), سَنَوِيّ (roczny — od سَنَة, uwaga: ة → و + ِيّ — nieregularne!)."
            },
            {
                "id": "pa_nsb5",
                "question": "Nisba od 'إِسْلَام' (islam) to:",
                "translation": "(ما النسبة من إسلام؟)",
                "options": ["إِسْلَامِيّ", "مُسْلِمِيّ", "إِسْلَمِيّ", "سَلَامِيّ"],
                "correct": "إِسْلَامِيّ",
                "explanation": "إِسْلَامِيّ (islāmiyy) = islamski. Regularne: إِسْلَام + ِيّ. UWAGA: 'islamski' to przymiotnik od RELIGII, 'muzulmanski' (مُسْلِم) to imieslow czynny od OSOBY. إِسْلَامِيّ = dotyczacy islamu jako systemu: فَنّ إِسْلَامِيّ (sztuka islamska), بَنْك إِسْلَامِيّ (bank islamski). مُسْلِم = wyznawca: رَجُل مُسْلِم (mezczyzna muzulmanin)."
            },
            {
                "id": "pa_nsb6",
                "question": "Co sie dzieje z alif maqsura (ى) przy tworzeniu nisba?",
                "translation": "(ماذا يحدث للألف المقصورة عند النسبة؟)",
                "options": ["Zamienia sie na waw: مُسْتَشْفَى → مُسْتَشْفَوِيّ", "Zostaje: مُسْتَشْفَىِيّ", "Odpada: مُسْتَشْفِيّ", "Podwaja sie"],
                "correct": "Zamienia sie na waw: مُسْتَشْفَى → مُسْتَشْفَوِيّ",
                "explanation": "Reguly z alif maqsura (ى) sa SKOMPLIKOWANE: 1) Jesli 3. litera: فَتَى → فَتَوِيّ (mlodziencowy), 2) Jesli 4. litera lub dalej: مُسْتَشْفَى → مُسْتَشْفَوِيّ (szpitalny). Alif maqsura wraca do و (bo pochodzi od و lub ي). Ale UWAGA: jesli 4. litera i mozna skrocic: مُصْطَفَى → مُصْطَفَوِيّ (ale czesto tez: مُصْطَفِيّ w uzyciu). Te reguly sa jednymi z najtrudniejszych w nisba."
            },
            {
                "id": "pa_nsb7",
                "question": "Nisba od 'فَرَنْسَا' (Francja) to:",
                "translation": "(ما النسبة من فرنسا؟)",
                "options": ["فَرَنْسِيّ", "فَرَنْسَاوِيّ", "فَرَنْسَائِيّ", "فَرَنِيّ"],
                "correct": "فَرَنْسِيّ",
                "explanation": "فَرَنْسِيّ (faransiyy) = francuski. Alif koncowe (ا) ODPADA: فَرَنْسَا → فَرَنْسِيّ. Regula: alif i hamza koncowe odpadaja przed -ِيّ. Inne: أَمْرِيكَا → أَمْرِيكِيّ (amerykanski, ة i ا odpadaja), إِفْرِيقِيَا → إِفْرِيقِيّ (afrykanski). Nazwy krajow z alif koncowym: prosta regula — odetnij alif, dodaj -ِيّ."
            },
            {
                "id": "pa_nsb8",
                "question": "Nisba od 'تَارِيخ' (historia) to:",
                "translation": "(ما النسبة من تاريخ؟)",
                "options": ["تَارِيخِيّ", "تَارِخِيّ", "مُتَأَرِّخِيّ", "تَوْرِيخِيّ"],
                "correct": "تَارِيخِيّ",
                "explanation": "تَارِيخِيّ (tārīkhiyy) = historyczny. Regularne dodanie -ِيّ do pelnej formy. Czeste uzycie: حَدَث تَارِيخِيّ (wydarzenie historyczne), مَعْلَم تَارِيخِيّ (zabytek). Porownaj z polskim: 'historia' → 'historyczny' (sufiks -yczny). W arabskim ZAWSZE -ِيّ — jeden uniwersalny sufiks. To PROSTSZE niz w polskim, gdzie mamy: -ski, -yczny, -owy, -ny itd."
            },
            {
                "id": "pa_nsb9",
                "question": "Nisba zenski od عِرَاق (Irak):",
                "translation": "(ما المؤنث من عراقيّ؟)",
                "options": ["عِرَاقِيَّة", "عِرَاقِيّ", "عِرَاقَة", "عِرَاقَانِيَّة"],
                "correct": "عِرَاقِيَّة",
                "explanation": "عِرَاقِيَّة (irāqiyya) = iracka. Rodzaj zenski nisba: dodajemy ة po -ِيّ: عِرَاقِيّ → عِرَاقِيَّة. Szadda na يّ zachowana! Wymowa: 'iraqiyyah'. Przyklady: اِمْرَأَة عِرَاقِيَّة (kobieta iracka), مُوسِيقَى عِرَاقِيَّة (muzyka iracka). L. mn. z.: عِرَاقِيَّات. To REGULARNE — zenski nisba ZAWSZE: -ِيَّة."
            },
            {
                "id": "pa_nsb10",
                "question": "Nisba od 'بَحْر' (morze) to:",
                "translation": "(ما النسبة من بحر؟)",
                "options": ["بَحْرِيّ", "بَحَّارِيّ", "بِحَارِيّ", "أَبْحَرِيّ"],
                "correct": "بَحْرِيّ",
                "explanation": "بَحْرِيّ (bahriyy) = morski. بَحْر + ِيّ = بَحْرِيّ. Czeste uzycie: قُوَّة بَحْرِيَّة (marynarka wojenna), حَيَوَان بَحْرِيّ (zwierze morskie), نَسِيم بَحْرِيّ (bryza morska). Pokrewne slowo: بَحَّار (marynarz — wzorzec فَعَّال = zawod). بَحْرِيَّة (rzeczownik zenski) = marynarka/flota. Rdzen ب-ح-ر jest bardzo produktywny."
            },
            {
                "id": "pa_nsb11",
                "question": "Nisba od 'قَبِيلَة' (plemie) to:",
                "translation": "(ما النسبة من قبيلة؟)",
                "options": ["قَبَلِيّ", "قَبِيلِيّ", "قَبِيلَتِيّ", "قُبَيْلِيّ"],
                "correct": "قَبَلِيّ",
                "explanation": "قَبَلِيّ (qabaliyy) = plemienny/rodowy. UWAGA: nie *قَبِيلِيّ! Regula: w niektórych slowach z يَاء przed ة, caly sufiks -ِيلَة skraca sie: قَبِيلَة → قَبَلِيّ (ة odpada, يل skraca sie). To nieregularne — trzeba zapamietac. Inne przyklady: مَدِينَة → مَدَنِيّ (cywilny, od miasta — nie *مَدِينِيّ), صَحِيفَة → صُحُفِيّ (dziennikarski — od l. mn.!)."
            },
            {
                "id": "pa_nsb12",
                "question": "Nisba od 'سِيَاسَة' (polityka) to:",
                "translation": "(ما النسبة من سياسة؟)",
                "options": ["سِيَاسِيّ", "سَيَّاسِيّ", "مُسِيَّسِيّ", "سَاسِيّ"],
                "correct": "سِيَاسِيّ",
                "explanation": "سِيَاسِيّ (siyāsiyy) = polityczny. Regularne: ة odpada → سِيَاسِيّ. Bardzo czeste w mediach: حِزْب سِيَاسِيّ (partia polityczna), أَزْمَة سِيَاسِيَّة (kryzys polityczny), مُحَلِّل سِيَاسِيّ (analityk polityczny). Rdzen: س-و-س (zarzadzanie). Pokrewne: سَاسَ (arzadzal), سَائِس (zarzadca/stajennik). Masdar: سِيَاسَة (polityka/zarzadzanie)."
            },
            {
                "id": "pa_nsb13",
                "question": "Nisba od 'عَرَب' (Arabowie) to:",
                "translation": "(ما النسبة من عرب؟)",
                "options": ["عَرَبِيّ", "عُرُوبِيّ", "عَرَّابِيّ", "مُعْرِبِيّ"],
                "correct": "عَرَبِيّ",
                "explanation": "عَرَبِيّ (arabiyy) = arabski. Regularne: عَرَب + ِيّ. Jedno z najczesciej uzywanych nisba na swiecie: اللُّغَة العَرَبِيَّة (jezyk arabski), العَالَم العَرَبِيّ (swiat arabski), الخَلِيج العَرَبِيّ (Zatoka Arabska/Perska). Jako rzeczownik: عَرَبِيّ = Arab (mezczyzna), عَرَبِيَّة = Arabka (kobieta) lub 'samochod' (potocznie w Egipcie!)."
            },
            {
                "id": "pa_nsb14",
                "question": "L. mn. od nisba مِصْرِيّ (egipski) w r.m. to:",
                "translation": "(ما جمع مصريّ المذكر؟)",
                "options": ["مِصْرِيُّونَ", "مِصْرِيِّين", "مَصَارِيّ", "مِصْرِيَّات"],
                "correct": "مِصْرِيُّونَ",
                "explanation": "مِصْرِيُّونَ (misriyyūna) = Egipcjanie (mianownik). L. mn. regularna meska (جمع مذكر سالم): -ِيّ → -ِيُّونَ (mian.) / -ِيِّينَ (dop./bier.). Przyklad: المِصْرِيُّونَ يُحِبُّونَ كُرَةَ القَدَمِ (Egipcjanie kochaja pilke nozna). L. mn. zenski: مِصْرِيَّات. Nisba ZAWSZE tworzy l. mn. regularna (nigdy lamana) — co upraszcza nauke!"
            },
            {
                "id": "pa_nsb15",
                "question": "Ktore z tych slow jest nisba (przymiotnikiem relacyjnym)?",
                "translation": "(أي كلمة نسبة؟)",
                "options": ["عِلْمِيّ (naukowy)", "عَالِم (uczony)", "عِلْم (nauka)", "مَعْلُوم (wiadomy)"],
                "correct": "عِلْمِيّ (naukowy)",
                "explanation": "عِلْمِيّ (ilmiyy) = naukowy — to nisba od عِلْم (nauka). Jak rozpoznac nisba? Sufiks -ِيّ (-iyy) na koncu. عَالِم = uczony (imieslow czynny فَاعِل), عِلْم = nauka (masdar), مَعْلُوم = wiadomy (imieslow bierny مَفْعُول). Tylko عِلْمِيّ ma charakterystyczny sufiks -ِيّ. Nisba to JEDYNY arabski sufiks do tworzenia przymiotnikow relacyjnych — prosty system!"
            }
        ]
    },
    {
        "key": "verbal_vs_nominal_sentences",
        "name": "Zdania czasownikowe vs. imienne (الجملة الفعلية والاسمية)",
        "description": "الفرق بين الجملة الفعلية والجملة الاسمية",
        "iconName": "text.alignleft",
        "color": "#60a5fa",
        "level": "intermediate",
        "items": [
            {
                "id": "pa_vns1",
                "question": "ذَهَبَ الطالبُ إلى المدرسةِ — jakiego typu jest to zdanie?",
                "translation": "(ما نوع هذه الجملة؟)",
                "options": ["Zdanie czasownikowe (جملة فعلية)", "Zdanie imienne (جملة اسمية)", "Zdanie pytajace", "Zdanie warunkowe"],
                "correct": "Zdanie czasownikowe (جملة فعلية)",
                "explanation": "ذَهَبَ الطالبُ = Student poszedl. Zdanie zaczyna sie od CZASOWNIKA (ذَهَبَ) → to جملة فعلية (zdanie czasownikowe). Budowa: فعل (czasownik) + فاعل (podmiot) + متعلقات (dopelnienia). W arabskim SZYK decyduje o typie zdania: czasownik na poczatku = فعلية, rzeczownik na poczatku = اسمية. To FUNDAMENTALNY podzial w gramatyce arabskiej!"
            },
            {
                "id": "pa_vns2",
                "question": "الطالبُ ذَهَبَ إلى المدرسةِ — jakiego typu jest to zdanie?",
                "translation": "(ما نوع هذه الجملة؟)",
                "options": ["Zdanie imienne (جملة اسمية)", "Zdanie czasownikowe (جملة فعلية)", "Zdanie mieszane", "Zdanie bierne"],
                "correct": "Zdanie imienne (جملة اسمية)",
                "explanation": "الطالبُ ذَهَبَ = Student (on) poszedl. Zdanie zaczyna sie od RZECZOWNIKA (الطالبُ) → to جملة اسمية (zdanie imienne). الطالبُ = مبتدأ (podmiot imienny), ذَهَبَ = خبر (orzeczenie — tu zdanie czasownikowe jako orzeczenie). W polskim: 'Student poszedl' = normalny szyk. W arabskim PRZESUNIECIE rzeczownika na poczatek zmienia CALY typ zdania i jego analize gramatyczna!"
            },
            {
                "id": "pa_vns3",
                "question": "البيتُ كبيرٌ — jakiego typu i jaka budowa?",
                "translation": "(ما نوع وأركان هذه الجملة؟)",
                "options": ["Imienne: مبتدأ (البيت) + خبر (كبير)", "Czasownikowe: فعل + فاعل", "Bierne: فعل مجهول", "Warunkowe: شرطية"],
                "correct": "Imienne: مبتدأ (البيت) + خبر (كبير)",
                "explanation": "البيتُ كبيرٌ = Dom (jest) duzy. Klasyczne zdanie imienne (اسمية) BEZ czasownika. البيتُ = مبتدأ (podmiot imienny — mianownik), كبيرٌ = خبر (orzeczenie imienne — mianownik). W arabskim NIE MA slowa 'jest' w czasie terazniejszym! Oba elementy w mianowniku (مرفوع). W polskim: 'Dom jest duzy' — potrzebujemy 'jest'. W arabskim: 'Dom duzy' = pelne zdanie."
            },
            {
                "id": "pa_vns4",
                "question": "Jaka jest glowna roznica semantyczna miedzy obu typami?",
                "translation": "(ما الفرق الدلالي بين الجملتين؟)",
                "options": ["Fعلية = wydarzenie/czynnosc, اسمية = stan/opis", "Nie ma roznicy", "Fعلية = terazniejszosc, اسمية = przeszlosc", "Fعلية = pytanie, اسمية = odpowiedz"],
                "correct": "Fعلية = wydarzenie/czynnosc, اسمية = stan/opis",
                "explanation": "Kluczowa roznica SEMANTYCZNA: 1) جملة فعلية (czasownikowe) = opisuje WYDARZENIE, CZYNNOSC, cos sie DZIEJE: ذَهَبَ الطالبُ (student poszedl — wydarzenie). 2) جملة اسمية (imienne) = opisuje STAN, CECHJE, cos po prostu JEST: الطالبُ ذكيٌّ (student jest madry — cecha stala). W polskim ta roznica jest mniej widoczna, bo szyk jest swobodny."
            },
            {
                "id": "pa_vns5",
                "question": "W zdaniu czasownikowym podmiot po czasowniku jest w:",
                "translation": "(ما إعراب الفاعل في الجملة الفعلية؟)",
                "options": ["Mianowniku (مرفوع)", "Bierniku (منصوب)", "Dopelniaczu (مجرور)", "Bez odmiany"],
                "correct": "Mianowniku (مرفوع)",
                "explanation": "Podmiot (الفاعل) w zdaniu czasownikowym jest ZAWSZE w mianowniku (مرفوع): كَتَبَ الطالبُ (الطالبُ = mianownik z damma). To samo w zdaniu imiennym: مبتدأ tez w mianowniku: الطالبُ ذكيٌّ. W obu typach podmiot ma mianownik. Roznica: w فعلية podmiot (فاعل) jest PO czasowniku, w اسمية podmiot (مبتدأ) jest NA POCZATKU."
            },
            {
                "id": "pa_vns6",
                "question": "Kiedy uzywamy zdania imiennego zamiast czasownikowego?",
                "translation": "(متى نستخدم الجملة الاسمية؟)",
                "options": ["Gdy chcemy PODKRESLIC podmiot lub opisac stan", "Gdy mowimy o przeszlosci", "Gdy uzywamy strony biernej", "Nigdy — oba rownowazne"],
                "correct": "Gdy chcemy PODKRESLIC podmiot lub opisac stan",
                "explanation": "Zdanie imienne uzywamy gdy: 1) Chcemy PODKRESLIC PODMIOT (topicalization): الطالبُ ذهبَ = TO STUDENT poszedl (nie ktos inny), 2) Opisujemy STAN/CECHE: البيتُ جميلٌ (dom jest piekny), 3) Wyrażamy OGOLNA PRAWDE: العلمُ نورٌ (wiedza jest swiatlem). Zdanie czasownikowe: gdy opisujemy CZYNNOSC/WYDARZENIE bez nacisku na podmiot: ذهبَ الطالبُ = 'ktos poszedl i to byl student'."
            },
            {
                "id": "pa_vns7",
                "question": "المعلمُ يَشْرَحُ الدرسَ — analiza gramatyczna:",
                "translation": "(ما إعراب: المعلم يشرح الدرس؟)",
                "options": ["اسمية: المعلم=مبتدأ, يشرح الدرس=خبر (zdanie czasownikowe)", "فعلية: يشرح=فعل, المعلم=فاعل", "اسمية: المعلم=خبر, يشرح=مبتدأ", "Zadne z powyzszych"],
                "correct": "اسمية: المعلم=مبتدأ, يشرح الدرس=خبر (zdanie czasownikowe)",
                "explanation": "المعلمُ يَشْرَحُ الدرسَ = Nauczyciel wyjasnia lekcje. Zaczyna sie od RZECZOWNIKA → اسمية! المعلمُ = مبتدأ (podmiot imienny). يَشْرَحُ الدرسَ = خبر (orzeczenie — w formie zdania czasownikowego!). Tak! Orzeczenie imienne (خبر) moze byc ZDANIEM CZASOWNIKOWYM. To zdanie w zdaniu: zewnetrzne jest imienne, wewnetrzne (orzeczenie) jest czasownikowe."
            },
            {
                "id": "pa_vns8",
                "question": "Czy w zdaniu czasownikowym podmiot moze byc w l. mn., a czasownik w l. poj.?",
                "translation": "(هل يجوز إفراد الفعل مع الفاعل الجمع؟)",
                "options": ["Tak — czasownik ZAWSZE w l. poj. przed podmiotem zbiorowym", "Nie — musza sie zgadzac", "Tylko w przeszlym", "Tylko z rodzajem zenskim"],
                "correct": "Tak — czasownik ZAWSZE w l. poj. przed podmiotem zbiorowym",
                "explanation": "WAZNA regula: w جملة فعلية, czasownik przed podmiotem jest ZAWSZE w L. POJEDYNCZEJ, nawet jesli podmiot jest w l. mn.! ذَهَبَ الطلابُ (poszedl studenci — nie *ذَهَبُوا الطلابُ). Dlaczego? Bo czasownik WYPRZEDZA podmiot i nie 'wie' jeszcze, ile jest osob. Uzgodnienie jest: 1) w RODZAJU: ذَهَبَتِ الطالباتُ (r.z.), 2) ale NIE w LICZBIE. To KLUCZ gramatyki arabskiej!"
            },
            {
                "id": "pa_vns9",
                "question": "W zdaniu imiennym, خبر moze byc:",
                "translation": "(ما أنواع الخبر في الجملة الاسمية؟)",
                "options": ["Pojedynczym slowem, zdaniem lub wyrażeniem przyimkowym", "Tylko przymiotnikiem", "Tylko czasownikiem", "Tylko rzeczownikiem"],
                "correct": "Pojedynczym slowem, zdaniem lub wyrażeniem przyimkowym",
                "explanation": "Trzy typy خبر (orzeczenia imiennego): 1) MUFRAD (pojedyncze slowo): البيتُ كبيرٌ (dom jest duzy), 2) ZDANIE (جملة): الطالبُ يدرسُ (student uczy sie — zdanie czasownikowe jako خبر), 3) WYRAZENIE PRZYIMKOWE (شبه جملة): الكتابُ على الطاولةِ (ksiazka jest na stole). Te trzy typy daja ogromna elastycznosc w budowie zdan imiennych."
            },
            {
                "id": "pa_vns10",
                "question": "هل أنتَ طالبٌ؟ — jakiego typu?",
                "translation": "(ما نوع هذه الجملة؟)",
                "options": ["Imienne pytajace", "Czasownikowe pytajace", "Warunkowe", "Rozkazujace"],
                "correct": "Imienne pytajace",
                "explanation": "هل أنتَ طالبٌ؟ = Czy ty jestes studentem? هل = partykula pytajaca (nie zmienia typu zdania). أنتَ = مبتدأ (zaimek osobowy — podmiot imienny), طالبٌ = خبر (orzeczenie). Zaczyna sie od هل + zaimek = nadal اسمية. Regula: partykulu pytajace (هل, أ) i przeczace (ما, لَيْسَ) nie zmieniaja typu zdania — patrz na PIERWSZY RZECZOWNIK lub CZASOWNIK po nich."
            },
            {
                "id": "pa_vns11",
                "question": "إنَّ الطالبَ مجتهدٌ — jaki wplyw ma إنَّ na zdanie imienne?",
                "translation": "(ما أثر إنّ على الجملة الاسمية؟)",
                "options": ["Podmiot (اسم إنّ) w bierniku, orzeczenie (خبر إنّ) w mianowniku", "Oba w bierniku", "Oba w mianowniku", "Nie zmienia nic"],
                "correct": "Podmiot (اسم إنّ) w bierniku, orzeczenie (خبر إنّ) w mianowniku",
                "explanation": "إنَّ zmienia deklinacje zdania imiennego: الطالبُ مجتهدٌ (oba w mian.) → إنَّ الطالبَ مجتهدٌ (podmiot w BIERNIKU, orzeczenie w mianowniku). TERMINOLOGIA: الطالبَ = اسم إنّ (nie مبتدأ!), مجتهدٌ = خبر إنّ (nie zwykly خبر!). إنَّ i jej 'siostry' (أنَّ, لكنَّ, كأنَّ, لعلَّ, ليتَ) — wszystkie maja ten sam efekt: podmiot w biernik."
            },
            {
                "id": "pa_vns12",
                "question": "كَانَ الطالبُ مجتهداً — jak كَانَ wplywa na zdanie imienne?",
                "translation": "(ما أثر كان على الجملة الاسمية؟)",
                "options": ["Podmiot (اسم كان) w mianowniku, orzeczenie (خبر كان) w bierniku", "Oba w bierniku", "Oba w mianowniku", "Nie zmienia nic"],
                "correct": "Podmiot (اسم كان) w mianowniku, orzeczenie (خبر كان) w bierniku",
                "explanation": "كَانَ zmienia deklinacje ODWROTNIE niz إنَّ: الطالبُ مجتهدٌ (oba mian.) → كَانَ الطالبُ مجتهداً (podmiot w MIANOWNIKU, orzeczenie w BIERNIKU). To odwrotnosc إنَّ! كان i siostry: orzeczenie w biernik. إنّ i siostry: podmiot w biernik. Zestawienie: كان = podmiot↑ orzeczenie↓, إنّ = podmiot↓ orzeczenie↑. Musisz zapamietac, ktore zmienia co."
            },
            {
                "id": "pa_vns13",
                "question": "Ktore zdanie jest CZASOWNIKOWE?",
                "translation": "(أي جملة فعلية؟)",
                "options": ["يَقْرَأُ الولدُ الكتابَ", "الولدُ يَقْرَأُ الكتابَ", "الولدُ ذكيٌّ", "الكتابُ على الطاولةِ"],
                "correct": "يَقْرَأُ الولدُ الكتابَ",
                "explanation": "يَقْرَأُ الولدُ الكتابَ = Chlopiec czyta ksiazke. Zaczyna sie od CZASOWNIKA (يَقْرَأُ) → فعلية. Pozostale: الولدُ يقرأ (imienne — zaczyna sie od الولدُ), الولدُ ذكيّ (imienne — rzeczownik + przymiotnik), الكتابُ على الطاولةِ (imienne — rzecz. + wyrazenie przyimkowe). Kluczowa w arabskim: PIERWSZY ELEMENT (po ewentualnych partykulach) decyduje o typie."
            },
            {
                "id": "pa_vns14",
                "question": "W jakim kontekscie zdanie imienne jest OBOWIAZKOWE?",
                "translation": "(متى تجب الجملة الاسمية؟)",
                "options": ["Gdy nie ma czasownika (opis, definicja, stan)", "Zawsze mozna wybierac", "Nigdy — فعلية jest zawsze lepsza", "Tylko w pytaniach"],
                "correct": "Gdy nie ma czasownika (opis, definicja, stan)",
                "explanation": "Zdanie imienne jest OBOWIAZKOWE gdy: 1) Brak czasownika: البيتُ كبيرٌ (nie ma 'jest'), 2) Po إنَّ i siostrach: إِنَّ اللهَ كريمٌ, 3) W definicjach: العلمُ نورٌ (wiedza to swiatlo), 4) W przyslowiach/sentencjach: الصبرُ مفتاحُ الفرجِ (cierpliwosc to klucz do ulgi). Zdanie czasownikowe jest obowiazkowe gdy: opisujemy KONKRETNA CZYNNOSC w czasie."
            },
            {
                "id": "pa_vns15",
                "question": "Jak przetlumaczyc na arabski: 'Uczen jest pilny'?",
                "translation": "(كيف نترجم: الطالب مجتهد؟)",
                "options": ["الطالبُ مجتهدٌ (zdanie imienne, bez 'jest')", "يَكُونُ الطالبُ مجتهداً", "الطالبُ يَكُونُ مجتهداً", "كَانَ الطالبُ مجتهداً"],
                "correct": "الطالبُ مجتهدٌ (zdanie imienne, bez 'jest')",
                "explanation": "الطالبُ مجتهدٌ = Uczen jest pilny. W arabskim czas TERAZNIEJSZY zdania imiennego NIE POTRZEBUJE 'jest' (يكون). Proste zestawienie: podmiot + orzeczenie = pelne zdanie. يَكُونُ uzywamy: 1) W kontekstach formalnych/emfatycznych, 2) Z modulatorami (قد يكون = moze jest). كَانَ = BYL (przeszly). Domyslny szyk: podmiot + orzeczenie BEZ lacznka. To KLUCZ do naturalnego arabskiego."
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
