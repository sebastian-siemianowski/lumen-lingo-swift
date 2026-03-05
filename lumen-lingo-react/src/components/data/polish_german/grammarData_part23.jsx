/**
 * POLISH → GERMAN GRAMMAR - PART 23
 * 3 kategorie, 15 pytań każda
 */

import { Zap, Target, Cpu } from "lucide-react";

export const part23Categories = {
  diminutives_augmentatives: {
    name: "Formy zdrobniałe i powiększające",
    description: "-chen, -lein - zdrobnienia w niemieckim",
    icon: Zap,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "dim_1",
        question: "Das kleine _____ spielt friedlich im Garten mit Blumen.",
        translation: "(Małe dziewczynka bawi się spokojnie w ogrodzie z kwiatami)",
        options: ["Mädchen", "Mädchenlein", "Mädel", "Mädchenchen"],
        correct: "Mädchen",
        explanation: "Forma 'Mädchen' to już zdrobnienie od starego 'Magd' (dziewczyna) - sufiks '-chen' tworzy zdrobnienie. ZAWSZE nijaki! 'Das Mädchen' mimo że oznacza dziewczynkę. To ważna osobliwość - wszystkie zdrobnienia są rodzaju nijakiego niezależnie od oryginalnego rodzaju. Zdrobnienia często wyrażają czułość nie tylko mały rozmiar."
      },
      {
        id: "dim_2",
        question: "Möchtest du ein _____ Wasser trinken zum Durstlöschen?",
        translation: "(Czy chciałbyś wypić szklaneczkę wody żeby ugasić pragnienie?)",
        options: ["Gläschen", "Glaschen", "Glas", "Gläslein"],
        correct: "Gläschen",
        explanation: "Zdrobnienie 'Gläschen' od 'Glas' (szklanka) - sufiks '-chen' plus przegłos (a→ä). Nijaki 'das Gläschen'. Zdrobnienie sugeruje małą ilość - to uprzejmy sposób zaproponowania napoju. Używanie zdrobnień w ofertach brzmi bardziej troskliwie - pokazuje że nie narzucasz dużej ilości."
      },
      {
        id: "dim_3",
        question: "Das _____ schläft ruhig in seinem Körbchen süß.",
        translation: "(Szczeniaczek śpi spokojnie w swoim koszyku słodko)",
        options: ["Hündchen", "Hundchen", "Hund", "Hündelein"],
        correct: "Hündchen",
        explanation: "Zdrobnienie 'Hündchen' od 'Hund' (pies) - sufiks '-chen' plus przegłos (u→ü). Nijaki mimo że pies męski. Zdrobnienie wyraża czułość do małego psa. Szczenięta wywołują opiekuńcze reakcje - użycie zdrobnienia w opisie odzwierciedla tę emocjonalną odpowiedź."
      },
      {
        id: "dim_4",
        question: "Sie singt ein schönes _____ für ihr Baby vor dem Schlafen.",
        translation: "(Śpiewa piękną piosenkę dla swojego dziecka przed snem)",
        options: ["Liedchen", "Liedlein", "Lied", "Liedchen"],
        correct: "Liedchen",
        explanation: "Zdrobnienie 'Liedchen' od 'Lied' (piosenka) - sufiks '-chen'. Nijaki. Kołysanki często opisywane zdrobnieniami - podkreśla delikatność i czułość momentu. Polski używa 'piosenkę' też czasem w formie zdrobniałej. Śpiew dla dzieci przed snem to kojący rytuał - tworzy bezpieczeństwo i rutynę."
      },
      {
        id: "dim_5",
        question: "Ich hätte gerne ein _____ Brot mit Butter zum Frühstück.",
        translation: "(Chciałbym bułeczkę z masłem na śniadanie)",
        options: ["Brötchen", "Brotchen", "Brot", "Brötlein"],
        correct: "Brötchen",
        explanation: "Zdrobnienie 'Brötchen' od 'Brot' (chleb) z przegłosem (o→ö) - ale faktycznie oznacza BUŁKĘ nie mały chleb! Nijaki. To pokazuje że zdrobnienia mogą tworzyć nowe znaczenia. 'Brötchen' to standardowa nazwa bułki w niemieckim - używana codziennie bez czułego kontekstu."
      },
      {
        id: "dim_6",
        question: "Das _____ liegt süß im Bett und schläft fest ein.",
        translation: "(Niemowlątko leży słodko w łóżku i mocno zasypia)",
        options: ["Bäbchen", "Babchen", "Baby", "Bäblein"],
        correct: "Bäbchen",
        explanation: "Możliwe zdrobnienie 'Bäbchen' od zapożyczonego 'Baby' - choć 'Baby' samo już wyraża małość. Nijaki. Niemcy czasem tworzą zdrobnienia nawet od obcych słów. To pokazuje jak produktywny jest system '-chen'. Niemowlęta naturalnie wywołują czułość - język odzwierciedla te emocje przez zdrobnienia."
      },
      {
        id: "dim_7",
        question: "Sie wohnt in einem kleinen _____ am Waldrand idyllisch.",
        translation: "(Mieszka w małym domku na skraju lasu sielsko)",
        options: ["Häuschen", "Hauschen", "Haus", "Häuslein"],
        correct: "Häuschen",
        explanation: "Zdrobnienie 'Häuschen' od 'Haus' (dom) z przegłosem (au→äu). Nijaki. Zdrobnienie sugeruje uroczy mały domek - romantyczna wizja życia wiejskiego. Polski używa 'domku' z końcówką zdrabniającą. Małe domy w naturze to marzenie o spokoju - kontrast do wielkomiejskiego życia."
      },
      {
        id: "dim_8",
        question: "Ich trinke gerne ein _____ Wein zum Entspannen abends.",
        translation: "(Lubię wypić kieliszek wina żeby się zrelaksować wieczorem)",
        options: ["Gläschen", "Glaschen", "Glas", "Weinchen"],
        correct: "Gläschen",
        explanation: "Ponownie 'Gläschen' - zdrobnienie sugeruje małą, rozsądną ilość alkoholu. To uprzejmienie - nie duże picie tylko umiarkowane. Używanie zdrobnień z alkoholem może minimalizować ilość - kulturowo akceptowalna forma mówienia o piciu."
      },
      {
        id: "dim_9",
        question: "Das _____ wächst schön in unserem Garten im Topf.",
        translation: "(Drzewko rośnie pięknie w naszym ogrodzie w doniczce)",
        options: ["Bäumchen", "Baumchen", "Baum", "Bäumlein"],
        correct: "Bäumchen",
        explanation: "Zdrobnienie 'Bäumchen' od 'Baum' (drzewo) z przegłosem (au→äu). Nijaki. Młode lub małe drzewo opisywane czule. Polski używa 'drzewko' podobnie. Obserwowanie wzrostu roślin to spokojne hobby - proces wzrostu przypomina o czasie i cierpliwości natury."
      },
      {
        id: "dim_10",
        question: "Sie hat ein süßes _____ auf der Nase - wie niedlich!",
        translation: "(Ma słodkie pieguszki na nosie - jakie urocze!)",
        options: ["Fleckchen", "Fleckchen", "Fleck", "Flecklein"],
        correct: "Fleckchen",
        explanation: "Zdrobnienie 'Fleckchen' od 'Fleck' (plama/pieg) z podwojonym 'k'. Nijaki. Zdrobnienie czyni piegi uroczymi nie wadą. To pokazuje jak forma językowa wpływa na percepcję - 'Fleck' neutralne, 'Fleckchen' czułe. Piegi jako cecha fizyczna mogą być postrzegane różnie - zdrobnienie podkreśla ich urok."
      },
      {
        id: "dim_11",
        question: "Wir haben ein gemütliches _____ im Zentrum gemietet.",
        translation: "(Wynajęliśmy przytulne mieszkanko w centrum)",
        options: ["Wohnungchen", "Wöhnchen", "Wohnung", "Wohnünglein"],
        correct: "Wohnungchen",
        explanation: "Nietypowe zdrobnienie 'Wohnungchen' od 'Wohnung' (mieszkanie) - możliwe ale rzadkie. Nijaki gdyby używane. Normalnie mówisz 'kleine Wohnung'. Nie wszystkie rzeczowniki dobrze przyjmują '-chen'. Zdrobnienia częściej dla rzeczy małych fizycznie - mieszkania zazwyczaj opisywane rozmiarem nie zdrobnieniem."
      },
      {
        id: "dim_12",
        question: "Er hat seiner Freundin ein goldenes _____ geschenkt.",
        translation: "(Podarował swojej dziewczynie złoty łańcuszek)",
        options: ["Kettchen", "Kettenchen", "Kette", "Kettlein"],
        correct: "Kettchen",
        explanation: "Zdrobnienie 'Kettchen' od 'Kette' (łańcuszek/naszyjnik) - podwojone 't'. Nijaki. Biżuteria często w zdrobnieniach - podkreśla delikatność przedmiotu. Prezenty biżuterii to romantyczne gesty - zdrobnienie dodaje czułości do opisu podarunku."
      },
      {
        id: "dim_13",
        question: "Das _____ sitzt bequem in der Ecke des Zimmers gemütlich.",
        translation: "(Fotelczek stoi wygodnie w rogu pokoju przytulnie)",
        options: ["Sesselchen", "Sesselchen", "Sessel", "Sessellein"],
        correct: "Sesselchen",
        explanation: "Zdrobnienie 'Sesselchen' od 'Sessel' (fotel). Nijaki. Mały fotel lub czułe określenie fotela. Polski używa 'fotelczek' z końcówką -czek. Małe meble mogą być urocze - szczególnie w kontekście dziecięcym lub przytulnych kącików do czytania."
      },
      {
        id: "dim_14",
        question: "Wir machen heute ein kleines _____ im Park zusammen schön.",
        translation: "(Robimy dzisiaj mały pikniczek w parku razem)",
        options: ["Picknickchen", "Picknick", "Picknickle", "Picknöckchen"],
        correct: "Picknickchen",
        explanation: "Zdrobnienie możliwe nawet od zapożyczeń - 'Picknickchen' od angielskiego 'Picknick'. Nijaki. Choć nienaturalne, pokazuje elastyczność systemu. Normalniej 'kleines Picknick'. Zdrobnienie podkreśla nieformalność i intymność wydarzenia - małe pikniki to proste przyjemności."
      },
      {
        id: "dim_15",
        question: "Er kaufte ein _____ für seine Tochter im Spielzeugladen.",
        translation: "(Kupił laleczkę dla swojej córki w sklepie z zabawkami)",
        options: ["Püppchen", "Puppenchen", "Puppe", "Püpplein"],
        correct: "Püppchen",
        explanation: "Zdrobnienie 'Püppchen' od 'Puppe' (lalka) z przegłosem (u→ü). Nijaki. Lalki dla dzieci naturalnie zdrobnione - podkreśla delikatność zabawki. Prezenty dla dzieci często opisywane czule - zdrobnienia w kontekście zabawek dodają ciepła do opisu relacji ojciec-córka."
      }
    ]
  },

  discourse_markers_fillers: {
    name: "Markery dyskursu i wypełniacze",
    description: "Also, naja, eigentlich, übrigens - naturalna mowa",
    icon: Target,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "disc_mark_1",
        question: "_____, ich denke, wir sollten das anders machen besser.",
        translation: "(No więc, myślę, że powinniśmy to zrobić inaczej)",
        options: ["Also", "Naja", "Eigentlich", "Übrigens"],
        correct: "Also",
        explanation: "Marker 'also' (więc/no to) podsumowuje lub wprowadza wniosek. To przejściowe słowo organizujące wypowiedź. Polski używa 'więc' lub 'no to' podobnie. Używasz 'also' żeby przejść do punktu - szczególnie po wyjaśnieniu, 'also' wprowadza konkluzję lub sugestię."
      },
      {
        id: "disc_mark_2",
        question: "_____, das ist nicht ganz das, was ich erwartet hatte.",
        translation: "(No cóż, to nie do końca to, czego oczekiwałem)",
        options: ["Naja", "Also", "Eigentlich", "Übrigens"],
        correct: "Naja",
        explanation: "Marker 'naja' (no cóż/no tak) wyraża wahanie lub łagodną niezgodę. Łagodzi krytykę. Polski 'no cóż' identyczny. Używasz 'naja' gdy coś nie jest idealne ale nie chcesz być surowy - dyplomatyczny sposób wyrażania rozczarowania bez obraźania."
      },
      {
        id: "disc_mark_3",
        question: "Ich wollte _____ heute ins Kino gehen - hast du Zeit?",
        translation: "(Właściwie chciałem dzisiaj iść do kina - masz czas?)",
        options: ["eigentlich", "also", "naja", "übrigens"],
        correct: "eigentlich",
        explanation: "Marker 'eigentlich' (właściwie/w zasadzie) wprowadza temat niepewnie - sugeruje ale nie naciska. Łagodzi bezpośredniość zaproszenia. Polski 'właściwie' podobny. Używasz 'eigentlich' żeby zaproponować coś w sposób otwarty - zostawiasz przestrzeń na odmowę bez niezręczności."
      },
      {
        id: "disc_mark_4",
        question: "Das Wetter ist schön heute. _____, hast du schon gegessen?",
        translation: "(Pogoda jest dziś ładna. A propos, już jadłeś?)",
        options: ["Übrigens", "Also", "Naja", "Eigentlich"],
        correct: "Übrigens",
        explanation: "Marker 'übrigens' (a propos/nawiasem mówiąc) zmienia temat - przechodzi od pogody do jedzenia. Wprowadza poboczną myśl. Polski 'a propos' lub 'nawiasem mówiąc' identyczny. Naturalny flow rozmowy często skacze między tematami - 'übrigens' sygnalizuje zmianę w sposób płynny."
      },
      {
        id: "disc_mark_5",
        question: "_____, wollen wir jetzt anfangen mit dem Meeting endlich?",
        translation: "(No to, chcemy teraz zacząć z naradą w końcu?)",
        options: ["Also", "Naja", "Eigentlich", "Übrigens"],
        correct: "Also",
        explanation: "Marker 'also' jako inicjator akcji - 'no to zaczynamy'. Kończy wstępną fazę i przechodzi do działania. Słowo 'endlich' (w końcu) dodaje niecierpliwości. Używasz 'also' żeby zmobilizować grupę - sygnalizuje że koniec gadania, czas działać."
      },
      {
        id: "disc_mark_6",
        question: "Ich bin _____ nicht sicher, ob das eine gute Idee ist.",
        translation: "(Właściwie nie jestem pewien, czy to dobry pomysł)",
        options: ["eigentlich", "also", "naja", "übrigens"],
        correct: "eigentlich",
        explanation: "Marker 'eigentlich' łagodzi negatywną opinię - 'właściwie nie jestem pewien' brzmi mniej kategorycznie. Pozostawia miejsce na dyskusję. Używasz 'eigentlich' żeby wyrazić wątpliwości bez blokowania pomysłu - konstruktywny sceptycyzm wymaga delikatności."
      },
      {
        id: "disc_mark_7",
        question: "_____, ich muss dir noch etwas Wichtiges sagen schnell.",
        translation: "(A propos, muszę ci jeszcze powiedzieć coś ważnego szybko)",
        options: ["Übrigens", "Also", "Naja", "Eigentlich"],
        correct: "Übrigens",
        explanation: "Marker 'übrigens' wprowadza dodatkowo przypomnianą informację - 'ach, zapomniałem powiedzieć'. Wskazuje że coś przyszło ci do głowy. Pilność ('wichtig') podkreśla znaczenie. Używanie 'übrigens' dla ważnych rzeczy może brzmieć jak bagatelizowanie - ale czasem rzeczywiście zapominamy wspomnieć o ważnych rzeczach."
      },
      {
        id: "disc_mark_8",
        question: "_____, es könnte vielleicht funktionieren - wer weiß?",
        translation: "(No, może by zadziałało - kto wie?)",
        options: ["Naja", "Also", "Eigentlich", "Übrigens"],
        correct: "Naja",
        explanation: "Marker 'naja' wyraża niepewny optymizm - 'no, może'. Nie entuzjazm ale otwartość na możliwość. Polski 'no' lub 'no cóż' podobny. Używasz 'naja' gdy nie jesteś przekonany ale nie chcesz całkowicie odrzucić - zostawia drzwi otwarte dla próby."
      },
      {
        id: "disc_mark_9",
        question: "Ich hatte _____ vor, dich anzurufen - sorry vergessen!",
        translation: "(Właściwie miałem zamiar do ciebie zadzwonić - przepraszam zapomniałem!)",
        options: ["eigentlich", "also", "naja", "übrigens"],
        correct: "eigentlich",
        explanation: "Marker 'eigentlich' z 'vorhaben' (mieć zamiar) wyjaśnia oryginalną intencję - 'właściwie chciałem ale...'. Łagodzi winę za zapomnienie. Przyznanie zamiaru nawet gdy nie zrealizowanego pokazuje że osoba była w myślach - intencja się liczy choć wykonanie zawiodło."
      },
      {
        id: "disc_mark_10",
        question: "Das Essen schmeckt gut. _____, wo hast du das Rezept her?",
        translation: "(Jedzenie smakuje dobrze. A propos, skąd masz ten przepis?)",
        options: ["Übrigens", "Also", "Naja", "Eigentlich"],
        correct: "Übrigens",
        explanation: "Marker 'übrigens' zmienia temat od smaku do źródła przepisu. Ciekawość wywołana jakością. Płynne przejście między powiązanymi tematami. Pytanie o przepisy po pozytywnej reakcji to komplement - zainteresowanie źródłem pokazuje że chcesz powtórzyć sukces kulinarny."
      },
      {
        id: "disc_mark_11",
        question: "_____, fangen wir jetzt endlich an oder warten wir noch?",
        translation: "(No więc, zaczynamy w końcu teraz czy jeszcze czekamy?)",
        options: ["Also", "Naja", "Eigentlich", "Übrigens"],
        correct: "Also",
        explanation: "Marker 'also' wymusza decyzję - 'no więc co robimy?'. Kończy wahanie i domaga się akcji. Niecierpliwość w pytaniu ('endlich' - w końcu). Używasz 'also' żeby przyspieszyć grupowe podejmowanie decyzji - szczególnie gdy dyskusja trwa za długo."
      },
      {
        id: "disc_mark_12",
        question: "_____, ich weiß nicht genau - vielleicht drei oder vier?",
        translation: "(No, nie wiem dokładnie - może trzy lub cztery?)",
        options: ["Naja", "Also", "Eigentlich", "Übrigens"],
        correct: "Naja",
        explanation: "Marker 'naja' przed niepewną odpowiedzią - 'no, nie jestem pewien'. Przyznaje brak precyzyjnej wiedzy. Używasz 'naja' gdy musisz odpowiedzieć ale nie masz pełnej informacji - szczersze niż udawanie pewności."
      },
      {
        id: "disc_mark_13",
        question: "Ich bin _____ müde - ich glaube, ich gehe nach Hause.",
        translation: "(Właściwie jestem zmęczony - chyba pójdę do domu)",
        options: ["eigentlich", "also", "naja", "übrigens"],
        correct: "eigentlich",
        explanation: "Marker 'eigentlich' wprowadza uczciwe przyznanie stanu - 'właściwie jestem zmęczony' brzmi mniej dramatycznie. Usprawiedliwia wyjście. Używasz 'eigentlich' żeby wyjaśnić swoje potrzeby bez brzmieniu wymagająco - to uprzejmy sposób na zakomunikowanie chęci wyjścia."
      },
      {
        id: "disc_mark_14",
        question: "Das war eine gute Idee. _____ haben wir noch andere Optionen?",
        translation: "(To był dobry pomysł. A propos, mamy jeszcze inne opcje?)",
        options: ["Übrigens", "Also", "Naja", "Eigentlich"],
        correct: "Übrigens",
        explanation: "Marker 'übrigens' po komplementie wprowadza dodatkowe pytanie. Uznaje pomysł ale eksploruje alternatywy. Otwartość na opcje po pochwale pokazuje balans - doceniasz wkład ale nie zamykasz na inne możliwości."
      },
      {
        id: "disc_mark_15",
        question: "_____ gut, dann machen wir das so wie besprochen!",
        translation: "(No dobrze, w takim razie robimy to tak jak omówiono!)",
        options: ["Also", "Naja", "Eigentlich", "Übrigens"],
        correct: "Also",
        explanation: "Marker 'also' finalizuje decyzję - 'also gut' (no dobrze) zamyka dyskusję i potwierdza plan. Słowo 'dann' (wtedy/w takim razie) wzmacnia konkluzję. Używasz 'also' żeby sygnalizować że dyskusja zakończona, czas na wykonanie - to przejście od planowania do działania."
      }
    ]
  },

  relative_pronouns_all_cases: {
    name: "Zaimki względne we wszystkich przypadkach",
    description: "Der, die, das, welcher - pełna deklinacja",
    icon: Cpu,
    color: "from-indigo-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "rel_pron_1",
        question: "Das ist der Mann, _____ ich gestern gesehen habe hier.",
        translation: "(To jest mężczyzna, którego wczoraj widziałem tutaj)",
        options: ["den", "der", "dem", "dessen"],
        correct: "den",
        explanation: "Zaimek względny w bierniku męskim - 'den' bo 'sehen' wymaga biernika (kogo widziałem). Męski biernik zmienia 'der' na 'den'. Perfect 'habe gesehen' na końcu zdania względnego. Rozpoznanie kogoś z poprzedniego dnia - pamięć twarzy często lepsza niż imion."
      },
      {
        id: "rel_pron_2",
        question: "Die Frau, _____ ich geholfen habe, war sehr dankbar mir.",
        translation: "(Kobieta, której pomogłem, była bardzo wdzięczna mi)",
        options: ["der", "die", "den", "deren"],
        correct: "der",
        explanation: "Zaimek względny w celowniku żeńskim - 'der' bo 'helfen' wymaga celownika (komu pomogłem). Żeński celownik używa formy 'der'. Perfect 'habe geholfen' na końcu. Pomoc nieznajomym buduje społeczność - wdzięczność otrzymana w zamian jest nagradzająca."
      },
      {
        id: "rel_pron_3",
        question: "Das Buch, _____ Cover mir gefällt, ist sehr interessant spannend.",
        translation: "(Książka, której okładka mi się podoba, jest bardzo interesująca)",
        options: ["dessen", "deren", "dem", "den"],
        correct: "dessen",
        explanation: "Zaimek względny w dopełniaczu nijakim - 'dessen' (którego/czyjego) dla posiadania. Forma 'dessen Cover' pokazuje że okładka należy do książki. Nijaki 'Buch' używa 'dessen'. Okładki wpływają na pierwsze wrażenie książki - design może przyciągać lub odpychać potencjalnych czytelników."
      },
      {
        id: "rel_pron_4",
        question: "Die Leute, _____ dort wohnen, sind sehr freundlich alle.",
        translation: "(Ludzie, którzy tam mieszkają, są bardzo przyjaźni wszyscy)",
        options: ["die", "der", "denen", "deren"],
        correct: "die",
        explanation: "Zaimek względny w mianowniku mnogim - 'die' (którzy) jako podmiot. Czasownik 'wohnen' nie wymaga specjalnego przypadku. Mnoga zawsze używa 'die' w mianowniku. Przyjaźni sąsiedzi tworzą przyjemną atmosferę dzielnicy - jakość relacji sąsiedzkich wpływa na zadowolenie z miejsca zamieszkania."
      },
      {
        id: "rel_pron_5",
        question: "Der Freund, _____ Auto ich gestern gefahren bin, wohnt in München.",
        translation: "(Przyjaciel, którego samochodem jeździłem wczoraj, mieszka w Monachium)",
        options: ["dessen", "deren", "dem", "den"],
        correct: "dessen",
        explanation: "Dopełniacz męski dla posiadania - 'dessen Auto' (którego samochód). Auto należy do przyjaciela. Męski 'Freund' używa 'dessen'. Pożyczanie samochodu przyjaciela to przejaw zaufania - to cenny gest pokazujący siłę relacji."
      },
      {
        id: "rel_pron_6",
        question: "Das sind die Kinder, _____ wir gestern geholfen haben draußen.",
        translation: "(To są dzieci, którym wczoraj pomogliśmy na zewnątrz)",
        options: ["denen", "die", "deren", "dessen"],
        correct: "denen",
        explanation: "Celownik mnogi - 'denen' (którym) bo 'helfen' wymaga celownika. Mnoga forma celownika zawsze 'denen'. Perfect 'haben geholfen' na końcu. Pomaganie dzieciom to społeczna odpowiedzialność - szczególnie gdy są w potrzebie, dorośli powinni reagować."
      },
      {
        id: "rel_pron_7",
        question: "Die Lehrerin, _____ ich viel gelernt habe, ist jetzt pensioniert.",
        translation: "(Nauczycielka, od której dużo się nauczyłem, jest teraz na emeryturze)",
        options: ["von der", "bei der", "zu der", "mit der"],
        correct: "von der",
        explanation: "Zaimek względny z przyimkiem - 'von der' (od której) pokazuje źródło nauki. Przyimek 'von' przed zaimkiem względnym w celowniku. Forma 'von der ich gelernt habe' standardowa. Wpływowi nauczyciele pozostają w pamięci - nawet po latach pamiętamy tych którzy nas kształtowali."
      },
      {
        id: "rel_pron_8",
        question: "Das Thema, _____ wir diskutiert haben, war sehr kontrovers aktuell.",
        translation: "(Temat, o którym dyskutowaliśmy, był bardzo kontrowersyjny)",
        options: ["über das", "von dem", "für das", "zu dem"],
        correct: "über das",
        explanation: "Czasownik 'diskutieren über' wymaga przyimka przed zaimkiem - 'über das' (o którym). Nijaki 'Thema' w bierniku. Forma 'über das wir diskutiert haben' standardowa. Kontrowersyjne tematy często prowadzą do gorących dyskusji - różnice opinii mogą być konstruktywne jeśli rozmowa pozostaje szanująca."
      },
      {
        id: "rel_pron_9",
        question: "Die Stadt, _____ Architektur mich fasziniert, ist Barcelona schön.",
        translation: "(Miasto, którego architektura mnie fascynuje, to Barcelona)",
        options: ["deren", "dessen", "der", "die"],
        correct: "deren",
        explanation: "Dopełniacz żeński dla posiadania - 'deren Architektur' (którego architektura). Miasto (die Stadt) żeńskie używa 'deren'. Architektura należy do miasta. Barcelona znana z Gaudiego - architektura może być główną atrakcją miasta, definiuje jego charakter i tożsamość."
      },
      {
        id: "rel_pron_10",
        question: "Der Kollege, _____ ich dir erzählt habe, kommt morgen zu Besuch.",
        translation: "(Kolega, o którym ci opowiadałem, przychodzi jutro z wizytą)",
        options: ["von dem", "über den", "zu dem", "mit dem"],
        correct: "von dem",
        explanation: "Czasownik 'erzählen von' wymaga przyimka - 'von dem' (o którym) przed zaimkiem względnym. Męski celownik po 'von'. Perfect 'habe erzählt' na końcu. Opowiadanie o kimś przed ich wizytą przygotowuje grunt - daje kontekst dla spotkania."
      },
      {
        id: "rel_pron_11",
        question: "Das Problem, _____ Lösung wir suchen, ist sehr komplex schwierig.",
        translation: "(Problem, którego rozwiązania szukamy, jest bardzo złożony)",
        options: ["dessen", "deren", "dem", "den"],
        correct: "dessen",
        explanation: "Dopełniacz nijaki - 'dessen Lösung' (którego rozwiązanie). Problem (das Problem) nijaki. Rozwiązanie należy do problemu - dopełniacz posiadający. Złożone problemy wymagają czasu i wysiłku - przyznanie kompeksowości to pierwszy krok do znalezienia rozwiązania."
      },
      {
        id: "rel_pron_12",
        question: "Die Nachbarn, _____ wir oft treffen, sind sehr nett immer.",
        translation: "(Sąsiedzi, których często spotykamy, są zawsze bardzo mili)",
        options: ["die", "denen", "deren", "dessen"],
        correct: "die",
        explanation: "Zaimek względny w bierniku mnogim - 'die' (których) bo 'treffen' wymaga biernika. Mnoga biernik używa 'die' jak mianownik. Regularne spotkania z sąsiadami budują znajomość - częsty kontakt przekształca nieznajomych w przyjaciół."
      },
      {
        id: "rel_pron_13",
        question: "Der Chef, _____ ich arbeite, ist sehr fair und gerecht.",
        translation: "(Szef, dla którego pracuję, jest bardzo sprawiedliwy)",
        options: ["für den", "bei dem", "zu dem", "mit dem"],
        correct: "für den",
        explanation: "Czasownik 'arbeiten für' wymaga przyimka - 'für den' (dla którego). Męski biernik po 'für'. Czasami też 'bei dem' możliwe (u którego). Sprawiedliwi szefowie są cenieni - uczciwe traktowanie pracowników buduje lojalność i motywację zespołu."
      },
      {
        id: "rel_pron_14",
        question: "Das Haus, _____ wir wohnen, ist über 100 Jahre alt historisch.",
        translation: "(Dom, w którym mieszkamy, ma ponad 100 lat)",
        options: ["in dem", "in das", "an dem", "an das"],
        correct: "in dem",
        explanation: "Czasownik 'wohnen in' z celownikiem - 'in dem' (w którym) dla miejsca zamieszkania. Statyczna lokalizacja wymaga celownika. Stare domy mają historię - mieszkanie w budynku który przetrwał dekady łączy cię z przeszłością."
      },
      {
        id: "rel_pron_15",
        question: "Die Freunde, _____ Hilfe ich immer zählen kann, sind unbezahlbar.",
        translation: "(Przyjaciele, na których pomoc zawsze mogę liczyć, są bezcenni)",
        options: ["auf deren", "auf dessen", "an deren", "an dessen"],
        correct: "auf deren",
        explanation: "Dopełniacz mnogi z przyimkiem - 'auf deren Hilfe' (na których pomoc). Czasownik 'zählen auf' (liczyć na) z dopełniaczem posiadającym. Mnoga używa 'deren'. Niezawodni przyjaciele to skarb - wiedza że możesz na kogoś liczyć daje poczucie bezpieczeństwa w życiu."
      }
    ]
  }
};

export default part23Categories;