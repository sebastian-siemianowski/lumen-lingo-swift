/**
 * POLISH → GERMAN GRAMMAR - PART 21
 * 4 kategorie, 15 pytań każda
 */

import { Package, Clock3, GitBranch, Link2 } from "lucide-react";

export const part21Categories = {
  word_formation_patterns_derivation: {
    name: "Wzory tworzenia słów - derywacja",
    description: "Un-, -ung, -heit, -keit - tworzenie nowych słów",
    icon: Package,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "word_form_1",
        question: "Seine _____ macht mich wirklich nervös bei der Arbeit!",
        translation: "(Jego niepunktualność naprawdę mnie denerwuje w pracy!)",
        options: ["Unpünktlichkeit", "Nichtpünktlichkeit", "Pünktlichkeit", "Unpünktlich"],
        correct: "Unpünktlichkeit",
        explanation: "Przedrostek 'un-' tworzy przeciwieństwo (niepunktualność), sufiks '-keit' tworzy rzeczownik abstrakcyjny z przymiotnika. Od 'pünktlich' (punktualny) przez dodanie 'un-' i '-keit' powstaje 'Unpünktlichkeit'. To podwójna transformacja - negacja plus nominalizacja. Niemiecki uwielbia takie złożone konstrukcje."
      },
      {
        id: "word_form_2",
        question: "Die _____ des Problems war sehr schwierig und langwierig.",
        translation: "(Rozwiązanie problemu było bardzo trudne i długotrwałe)",
        options: ["Lösung", "Lösheit", "Lösigkeit", "Lösen"],
        correct: "Lösung",
        explanation: "Sufiks '-ung' tworzy rzeczownik z czasownika - od 'lösen' (rozwiązywać) powstaje 'Lösung' (rozwiązanie). To jeden z najproduktywniejszych sufiksów w niemieckim. Rzeczowniki na -ung zawsze żeńskie. Transformacja czasownika w rzeczownik pozwala mówić o procesach jako o rzeczach - bardzo użyteczne w formalnym języku."
      },
      {
        id: "word_form_3",
        question: "Seine _____ hat mir sehr bei der Entscheidung geholfen.",
        translation: "(Jego szczerość bardzo mi pomogła w decyzji)",
        options: ["Ehrlichkeit", "Ehrheit", "Ehrung", "Ehrlich"],
        correct: "Ehrlichkeit",
        explanation: "Sufiks '-keit' z przymiotnika 'ehrlich' (szczery) tworzy rzeczownik 'Ehrlichkeit' (szczerość). Wszystkie rzeczowniki na '-keit' są żeńskie. To sposób na przekształcanie cech w koncepty. Szczerość w doradztwie jest bezcenna - prawdziwe opinie pomagają w podejmowaniu mądrych decyzji."
      },
      {
        id: "word_form_4",
        question: "Die _____ zwischen den beiden Ländern verbessert sich allmählich.",
        translation: "(Relacja między dwoma krajami poprawia się stopniowo)",
        options: ["Beziehung", "Beziehkeit", "Beziehung", "Beziehen"],
        correct: "Beziehung",
        explanation: "Od czasownika 'beziehen' (odnosić się/łączyć) z sufiksem '-ung' powstaje 'Beziehung' (relacja/związek). To pokazuje jak czasowniki stają się rzeczownikami. Stosunki międzynarodowe wymagają dyplomacji. Stopniowa poprawa to pozytywny znak - budowanie zaufania między narodami wymaga czasu i wysiłku."
      },
      {
        id: "word_form_5",
        question: "Das ist völlig _____ - ich verstehe die Logik nicht!",
        translation: "(To jest całkowicie nielogiczne - nie rozumiem logiki!)",
        options: ["unlogisch", "nichtlogisch", "logisch", "illogisch"],
        correct: "unlogisch",
        explanation: "Przedrostek 'un-' dodany do 'logisch' (logiczny) tworzy przeciwieństwo 'unlogisch' (nielogiczny). To najprostszy sposób tworzenia antonimów w niemieckim. Polski używa 'nie-' podobnie. Frustracja z brakiem logiki to naturalna reakcja - umysł szuka wzorców i spójności."
      },
      {
        id: "word_form_6",
        question: "Die _____ dieser Regel ist mir nicht ganz klar verständlich.",
        translation: "(Znaczenie tej reguły nie jest mi całkiem jasne)",
        options: ["Bedeutung", "Bedeutheit", "Bedeutkeit", "Bedeuten"],
        correct: "Bedeutung",
        explanation: "Od czasownika 'bedeuten' (oznaczać) powstaje 'Bedeutung' (znaczenie) przez dodanie '-ung'. To fundamentalny rzeczownik w nauce języków - każde słowo ma swoją 'Bedeutung'. Niejasne reguły wymagają lepszego wyjaśnienia - dobra pedagogika polega na przekazywaniu zrozumiałych instrukcji."
      },
      {
        id: "noun_adj_7",
        question: "Seine _____ in dieser Situation war wirklich beeindruckend mutig.",
        translation: "(Jego odwaga w tej sytuacji była naprawdę imponująco odważna)",
        options: ["Tapferkeit", "Tapferung", "Tapferheit", "Tapfer"],
        correct: "Tapferkeit",
        explanation: "Od przymiotnika 'tapfer' (odważny) z sufiksem '-keit' powstaje 'Tapferkeit' (odwaga). Rzeczowniki na '-keit' są zawsze żeńskie. Odwaga w trudnych momentach zasługuje na uznanie. Abstrakcyjne koncepty jak odwaga stają się rzeczownikami przez sufiks - to pozwala dyskutować o cechach charakteru."
      },
      {
        id: "word_form_8",
        question: "Das Ergebnis war total _____ für alle Beteiligten enttäuschend.",
        translation: "(Wynik był totalnie niespodziewany dla wszystkich zaangażowanych rozczarowująco)",
        options: ["unerwartet", "nichterwartet", "erwartet", "inerwartet"],
        correct: "unerwartet",
        explanation: "Przedrostek 'un-' przed 'erwartet' (oczekiwany) tworzy 'unerwartet' (niespodziewany). Imiesłów przeszły może funkcjonować jako przymiotnik i przyjmować przedrostki. Niespodziewane rezultaty mogą rozczarowywać lub pozytywnie zaskakiwać - nieprzewidywalność to część życia."
      },
      {
        id: "word_form_9",
        question: "Die _____ dieses Produktes ist nicht besonders gut gewesen.",
        translation: "(Jakość tego produktu nie była szczególnie dobra)",
        options: ["Qualität", "Qualung", "Qualheit", "Qual"],
        correct: "Qualität",
        explanation: "Rzeczownik 'Qualität' (jakość) pochodzi z łaciny - nie typowa derywacja niemiecka ale ważne słowo. Kończy się na '-ität' co zawsze żeńskie. Niska jakość produktów rozczarowuje konsumentów. Jakość to kluczowy czynnik decyzji zakupowych - ludzie są gotowi płacić więcej za trwałość."
      },
      {
        id: "word_form_10",
        question: "Seine _____ gegenüber anderen ist wirklich bewundernswert schön.",
        translation: "(Jego życzliwość wobec innych jest naprawdę godna podziwu)",
        options: ["Freundlichkeit", "Freundung", "Freundheit", "Freundlich"],
        correct: "Freundlichkeit",
        explanation: "Od przymiotnika 'freundlich' (przyjazny/życzliwy) z sufiksem '-keit' powstaje 'Freundlichkeit' (życzliwość). To pozytywna cecha charakteru. Życzliwość wobec innych tworzy przyjemną atmosferę - drobne gesty uprzejmości mogą znacząco poprawić czyjeś dni."
      },
      {
        id: "word_form_11",
        question: "Die _____ zwischen Theorie und Praxis ist oft groß sichtbar.",
        translation: "(Różnica między teorią a praktyką jest często duża widoczna)",
        options: ["Unterschied", "Unterscheidung", "Unterschiedenheit", "Unterscheiden"],
        correct: "Unterschied",
        explanation: "Rzeczownik 'Unterschied' (różnica) pochodzi od czasownika 'unterscheiden' (różnić/odróżniać). Męski rzeczownik bez typowego sufiksu. Przepaść między teorią a praktyką to klasyczny problem edukacyjny - rzeczywistość często różni się od podręcznikowych przykładów."
      },
      {
        id: "word_form_12",
        question: "Das ist leider _____ - niemand trägt Verantwortung dafür.",
        translation: "(To jest niestety nieakceptowalne - nikt nie bierze za to odpowiedzialności)",
        options: ["unakzeptabel", "nichtakzeptabel", "akzeptabel", "inakzeptabel"],
        correct: "unakzeptabel",
        explanation: "Przedrostek 'un-' przed 'akzeptabel' (akceptowalny) tworzy 'unakzeptabel' (nieakceptowalny). Obce słowo przyjmuje niemiecki przedrostek. Brak odpowiedzialności jest problemem organizacyjnym. Jasne standardy tego co akceptowalne pomagają utrzymać porządek i jakość."
      },
      {
        id: "word_form_13",
        question: "Die _____ der Stadt hat in letzter Zeit zugenommen stark.",
        translation: "(Populacja miasta wzrosła ostatnio mocno)",
        options: ["Bevölkerung", "Bevölkerkeit", "Bevölkerheit", "Bevölkern"],
        correct: "Bevölkerung",
        explanation: "Od czasownika 'bevölkern' (zaludniać) z sufiksem '-ung' powstaje 'Bevölkerung' (populacja/ludność). To formalna nazwa demograficzna. Wzrost populacji miejskiej to globalny trend - urbanizacja zmienia sposób w jaki ludzie żyją i pracują."
      },
      {
        id: "word_form_14",
        question: "Seine _____ für Details ist bemerkenswert in der Arbeit präzise.",
        translation: "(Jego dokładność w szczegółach jest godna uwagi w pracy)",
        options: ["Genauigkeit", "Genauung", "Genauheit", "Genau"],
        correct: "Genauigkeit",
        explanation: "Od przymiotnika 'genau' (dokładny) z sufiksem '-igkeit' (wariant '-keit' po '-ig') powstaje 'Genauigkeit' (dokładność). Uwaga na wymowę. Precyzja w pracy to ceniona umiejętność - szczegóły często decydują o jakości końcowego produktu."
      },
      {
        id: "word_form_15",
        question: "Das war eine _____ Erfahrung - ich möchte das nie wieder!",
        translation: "(To było nieprzyjemne doświadczenie - nie chcę tego nigdy więcej!)",
        options: ["unangenehme", "nichtunangenehme", "angenehme", "unangenehm"],
        correct: "unangenehme",
        explanation: "Przedrostek 'un-' przed 'angenehm' (przyjemny) tworzy przymiotnik 'unangenehm' (nieprzyjemny). Końcówka -e dla żeńska biernik z nieokreślonym. Negatywne doświadczenia uczą nas czego unikać - nawet złe sytuacje mają wartość edukacyjną jeśli wyciągniemy wnioski."
      }
    ]
  },

  compound_tense_usage_nuances: {
    name: "Niuanse użycia czasów złożonych",
    description: "Perfect vs Präteritum, Plusquamperfekt - kiedy używać",
    icon: Clock3,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "comp_tense_1",
        question: "Ich _____ gestern einen alten Freund getroffen in der Stadt.",
        translation: "(Spotkałem wczoraj starego przyjaciela w mieście)",
        options: ["habe", "bin", "hatte", "war"],
        correct: "habe",
        explanation: "W mowie potocznej niemiecki PREFERUJE Perfect (habe getroffen) zamiast Präteritum (traf). Perfect brzmi bardziej naturalnie w rozmowach. Polski używa czasu przeszłego prostego, niemiecki Perfect. To ważna różnica - w niemieckim Perfect to norma w mowie, Präteritum bardziej literacki."
      },
      {
        id: "comp_tense_2",
        question: "Als Kind _____ ich jeden Sommer bei meiner Oma im Dorf.",
        translation: "(Jako dziecko spędzałem każde lato u mojej babci na wsi)",
        options: ["war", "bin gewesen", "war gewesen", "bin"],
        correct: "war",
        explanation: "Dla opisów przeszłych stanów lub nawyków, Präteritum (war) jest naturalniejsze niż Perfect. 'Sein' w przeszłości prawie zawsze używa 'war' nie 'bin gewesen'. Wspomnienia dzieciństwa często w Präteritum - to nadaje im narracyjny ton. Dla głównych czasowników modalnych i 'sein/haben' Präteritum brzmi lepiej."
      },
      {
        id: "comp_tense_3",
        question: "Nachdem ich gegessen _____, ging ich spazieren im Park.",
        translation: "(Po tym jak zjadłem, poszedłem na spacer do parku)",
        options: ["hatte", "habe", "war", "bin"],
        correct: "hatte",
        explanation: "Spójnik 'nachdem' WYMAGA Plusquamperfekt (hatte gegessen) dla akcji która była PRZED inną przeszłą akcją. W zdaniu głównym Präteritum (ging). To jasno pokazuje sekwencję - najpierw jedzenie, potem spacer. Plusquamperfekt to 'przeszłość w przeszłości' - niezbędny dla chronologii zdarzeń."
      },
      {
        id: "comp_tense_4",
        question: "Wir _____ schon lange, als du endlich angekommen bist.",
        translation: "(Czekaliśmy już długo, gdy w końcu przybyłeś)",
        options: ["hatten gewartet", "haben gewartet", "warteten", "warten"],
        correct: "hatten gewartet",
        explanation: "Czekanie rozpoczęło się i trwało PRZED twoim przybyciem - Plusquamperfekt pokazuje tę wcześniejszość. Forma 'hatten gewartet' dla 'wir'. Długie czekanie testuje cierpliwość. Plusquamperfekt wyjaśnia dlaczego mogli być sfrustrowani - czas oczekiwania był znaczący."
      },
      {
        id: "comp_tense_5",
        question: "Ich _____ ihm schon mehrmals gesagt, aber er hört nicht zu.",
        translation: "(Mówiłem mu już kilka razy, ale nie słucha)",
        options: ["habe", "hatte", "bin", "war"],
        correct: "habe",
        explanation: "Perfect (habe gesagt) dla akcji która ma wpływ na teraźniejszość - mówiłeś wcześniej i WCIĄŻ on nie słucha. Perfect łączy przeszłość z teraźniejszością. Wielokrotne ostrzeżenia ignorowane to frustrujące. Perfect pokazuje relevancję przeszłej akcji dla obecnej sytuacji - to nie tylko historia, to kontekst obecnego problemu."
      },
      {
        id: "comp_tense_6",
        question: "Sie _____ immer sehr fleißig, deshalb hatte sie gute Noten.",
        translation: "(Zawsze była bardzo pracowita, dlatego miała dobre oceny)",
        options: ["war", "ist gewesen", "war gewesen", "ist"],
        correct: "war",
        explanation: "Opisywanie przeszłej cechy charakteru - Präteritum (war) naturalniejsze. Pracowitość jako stała cecha w przeszłości. Forma 'war fleißig' brzmi lepiej niż 'ist fleißig gewesen'. Związek między wysiłkiem a wynikami w nauce jest bezpośredni - ciężka praca zazwyczaj przynosi owoce."
      },
      {
        id: "comp_tense_7",
        question: "Bevor ich _____, hatte ich noch nie Sushi gegessen.",
        translation: "(Zanim wyjechałem, nigdy wcześniej nie jadłem sushi)",
        options: ["wegging", "weggegangen bin", "weggegangen war", "weggefahren bin"],
        correct: "wegging",
        explanation: "W zdaniu z 'bevor' (zanim) używasz Präteritum, w głównym zdaniu Plusquamperfekt. To odwrotnie niż intuicja! 'Bevor ich wegging' (zanim wyjechałem - Präteritum) łączy się z 'hatte gegessen' (Perfect). Chronologia: nigdy wcześniej NIE jadłem, potem wyjechałem i pewnie spróbowałem."
      },
      {
        id: "comp_tense_8",
        question: "Als ich Kind _____, spielte ich jeden Tag Fußball draußen.",
        translation: "(Gdy byłem dzieckiem, grałem każdego dnia w piłkę na zewnątrz)",
        options: ["war", "bin gewesen", "war gewesen", "gewesen bin"],
        correct: "war",
        explanation: "W zdaniach z 'als' (gdy - jednorazowe) dla stanów używasz Präteritum - 'war' nie Perfect. Obie części w Präteritum dla spójności narracji. Wspomnienia dziecięcych zabaw w Präteritum brzmią nostalgicznie. Konsekwentny czas w narracji tworzy płynną opowieść."
      },
      {
        id: "comp_tense_9",
        question: "Ich _____ das Buch schon gelesen, bevor der Film herauskam.",
        translation: "(Przeczytałem już książkę zanim film wyszedł)",
        options: ["hatte", "habe", "war", "bin"],
        correct: "hatte",
        explanation: "Czytanie było PRZED premierą filmu - Plusquamperfekt (hatte gelesen) pokazuje wcześniejszość. Czasownik 'lesen' używa 'haben'. Czytanie książki przed adaptacją filmową pozwala na porównanie - często purystyczne podejście prowadzi do rozczarowania filmem."
      },
      {
        id: "comp_tense_10",
        question: "Sie _____ noch nie in Deutschland gewesen, bevor sie umzog.",
        translation: "(Nigdy wcześniej nie była w Niemczech zanim się przeprowadziła)",
        options: ["war", "ist", "hatte", "war gewesen"],
        correct: "war",
        explanation: "Perfect od 'sein' to 'ist gewesen' ALE w zdaniu podrzędnym po 'bevor' często Präteritum brzmi lepiej - 'war...gewesen' (Plusquamperfekt) lub nawet samo 'war'. Brak wcześniejszego doświadczenia z krajem przed przeprowadzką to skok w nieznane - odważna decyzja wymagająca adaptacji."
      },
      {
        id: "comp_tense_11",
        question: "Ich _____ gestern den ganzen Tag zu Hause und habe gearbeitet.",
        translation: "(Byłem wczoraj cały dzień w domu i pracowałem)",
        options: ["war", "bin gewesen", "war gewesen", "bin"],
        correct: "war",
        explanation: "Mimo że możesz użyć Perfect, 'war' (Präteritum) brzmi naturalniej z 'sein' nawet w mowie. Kombinacja 'war' (Präteritum) z 'habe gearbeitet' (Perfect) jest OK - można mieszać. Praca z domu to współczesna norma - pandemia pokazała że wiele zadań nie wymaga biura."
      },
      {
        id: "comp_tense_12",
        question: "Als die Polizei ankam, _____ der Dieb bereits geflohen.",
        translation: "(Gdy policja przybyła, złodziej już uciekł)",
        options: ["war", "ist", "hatte", "war geflohen"],
        correct: "war",
        explanation: "Czasownik 'fliehen' (uciekać) używa 'sein' więc Plusquamperfekt to 'war geflohen'. Ucieczka przed przybyciem policji - wcześniejsza akcja. Czasowniki ruchu konsekwentnie z 'sein' nawet w Plusquamperfekt. Timing jest wszystkim - spóźniona policja to frustrujące dla ofiar przestępstw."
      },
      {
        id: "comp_tense_13",
        question: "Er _____ krank, deshalb konnte er nicht zur Arbeit kommen.",
        translation: "(Był chory, dlatego nie mógł przyjść do pracy)",
        options: ["war", "ist gewesen", "war gewesen", "hatte"],
        correct: "war",
        explanation: "Stan (choroba) w przeszłości - Präteritum 'war' naturalny wybór. Choroba wyjaśnia nieobecność. Czasownik modalny 'konnte' też w Präteritum - spójna narracja. Choroba to obiektywny powód nieobecności - każdy czasem potrzebuje dnia na rekonwalescencję."
      },
      {
        id: "comp_tense_14",
        question: "Ich _____ schon dreimal in Paris gewesen vor diesem Jahr.",
        translation: "(Byłem już trzy razy w Paryżu przed tym rokiem)",
        options: ["bin", "war", "habe", "hatte"],
        correct: "bin",
        explanation: "Perfect od 'sein' to 'bin gewesen' - używane dla życiowych doświadczeń i podróży. Liczba wizyt (dreimal) podkreśla doświadczenie. Forma 'bin gewesen' standardowa w Perfect. Wielokrotne wizyty w mieście pozwalają odkryć jego głębię - każda wizyta ujawnia nowe aspekty."
      },
      {
        id: "comp_tense_15",
        question: "Wir _____ lange gespart, um uns dieses Auto leisten zu können.",
        translation: "(Oszczędzaliśmy długo, żeby móc sobie pozwolić na ten samochód)",
        options: ["haben", "hatten", "sind", "waren"],
        correct: "haben",
        explanation: "Perfect (haben gespart) dla akcji która trwała w przeszłości i ma rezultat TERAZ - oszczędzanie doprowadziło do zakupu. Czasownik 'sparen' z 'haben'. Długoterminowe oszczędzanie na cel wymaga dyscypliny - ale osiągnięcie celu po wysiłku jest satysfakcjonujące."
      }
    ]
  },

  conditional_sentences_all_types: {
    name: "Zdania warunkowe - wszystkie typy",
    description: "Reale, irreale Gegenwart, irreale Vergangenheit - pełna systematyka",
    icon: GitBranch,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "cond_all_1",
        question: "Wenn es morgen regnet, _____ wir zu Hause.",
        translation: "(Jeśli jutro będzie padać, zostaniemy w domu)",
        options: ["bleiben", "würden bleiben", "blieben", "bleiben würden"],
        correct: "bleiben",
        explanation: "Warunek REALNY (może się zdarzyć) używa normalnego czasu teraźniejszego - 'wenn es regnet, bleiben wir'. Nie potrzebujesz Konjunktiv ani 'würden'. To prawdziwa możliwość więc zwykłe czasy. Elastyczne planowanie pogodowe to rozsądne - lepiej mieć plan B gdy pogoda niepewna."
      },
      {
        id: "cond_all_2",
        question: "Wenn ich mehr Zeit _____, würde ich öfter Sport treiben.",
        translation: "(Gdybym miał więcej czasu, częściej uprawiałbym sport)",
        options: ["hätte", "habe", "hatte", "würde haben"],
        correct: "hätte",
        explanation: "Warunek NIEREALNY teraźniejszy (mało prawdopodobny) używa Konjunktiv II - 'hätte' w warunku, 'würde treiben' w rezultacie. To o wyimaginowanej sytuacji - gdyby miał czas (ale nie ma). Brak czasu na sport to powszechne usprawiedliwienie - ale często to kwestia priorytetów nie dostępności."
      },
      {
        id: "cond_all_3",
        question: "Wenn du kommst, _____ ich sehr glücklich sein!",
        translation: "(Jeśli przyjdziesz, będę bardzo szczęśliwy!)",
        options: ["werde", "würde", "bin", "wäre"],
        correct: "werde",
        explanation: "Warunek REALNY przyszły - zwykły czas przyszły 'werde sein' wystarczy. To prawdziwa możliwość więc nie potrzeba Konjunktiv. Polski też używa czasu przyszłego. Prosta obietnica radości z wizyty - szczera komunikacja uczuć wzmacnia zaproszenia."
      },
      {
        id: "cond_all_4",
        question: "Wenn ich das gewusst _____, wäre ich nicht gekommen!",
        translation: "(Gdybym to wiedział, nie przyszedłbym!)",
        options: ["hätte", "habe", "hatte", "würde"],
        correct: "hätte",
        explanation: "Warunek NIEREALNY przeszły używa Plusquamperfekt Konjunktiv - 'hätte gewusst' w warunku, 'wäre gekommen' w rezultacie. To o przeszłości która nie może być zmieniona. Żal o nieposiadaniu informacji które zmieniłyby decyzję - retrospektywne myślenie 'gdyby tylko' jest ludzką naturą."
      },
      {
        id: "cond_all_5",
        question: "Falls du Hilfe brauchst, _____ mir einfach Bescheid!",
        translation: "(W razie gdybyś potrzebował pomocy, po prostu daj mi znać!)",
        options: ["gib", "gibst", "würdest geben", "gäbst"],
        correct: "gib",
        explanation: "Warunek REALNY z 'falls' (w razie gdyby) używa normalnego trybu rozkazującego - 'gib' nie Konjunktiv. To prawdziwa możliwość więc normalny czas. 'Falls' brzmi bardziej otwarte niż 'wenn'. Oferowanie pomocy bez naciskania pokazuje dostępność - ważne w przyjaźni."
      },
      {
        id: "cond_all_6",
        question: "Wenn sie fleißiger gelernt _____, hätte sie bestanden sicher.",
        translation: "(Gdyby pilniej się uczyła, na pewno by zdała)",
        options: ["hätte", "hat", "hatte", "würde"],
        correct: "hätte",
        explanation: "Nierealny warunek przeszły - 'hätte gelernt' (gdyby uczyła się) pokazuje że NIE uczyła się wystarczająco. Rezultat 'hätte bestanden' też nierealny - NIE zdała. To analiza przeszłej porażki przez pryzmat niedostatecznego wysiłku - pouczające ale smutne."
      },
      {
        id: "cond_all_7",
        question: "Wenn das Wetter gut _____, machen wir ein Picknick morgen.",
        translation: "(Jeśli pogoda będzie dobra, zrobimy piknik jutro)",
        options: ["ist", "wäre", "sein wird", "würde sein"],
        correct: "ist",
        explanation: "Warunek REALNY przyszły - mimo że mówimy o jutro, używasz teraźniejszego 'ist' w warunku, przyszłego lub teraźniejszego w rezultacie. Niemiecki upraszcza. Polski podobnie może użyć czasu teraźniejszego. Plany piknikowe zależne od pogody to klasyka - elastyczność w planowaniu outdoor events jest koniecznością."
      },
      {
        id: "cond_all_8",
        question: "Wenn ich du _____, würde ich das anders machen bestimmt.",
        translation: "(Gdybym był tobą, na pewno zrobiłbym to inaczej)",
        options: ["wäre", "bin", "war", "würde sein"],
        correct: "wäre",
        explanation: "Klasyczna rada 'wenn ich du wäre' (gdybym był tobą) używa Konjunktiv II. To hipotetyczne stawianie się w czyjejś sytuacji. Gramatycznie dziwne ('ich du') ale idiomatyczne. Dawanie rad przez wyobrażanie się w czyjej skórze pokazuje empatię - choć każdy ostatecznie musi sam decydować."
      },
      {
        id: "cond_all_9",
        question: "Sollte es morgen schneien, _____ der Ausflug ab.",
        translation: "(Gdyby jutro padał śnieg, wycieczka odwołana)",
        options: ["fällt", "würde fallen", "fiele", "fallen würde"],
        correct: "fällt",
        explanation: "Warunek formalny z 'sollte' (gdyby/w przypadku gdyby) - bardziej oficjalny niż 'wenn'. Rezultat w normalnym czasie teraźniejszym 'fällt ab'. To konstrukcja dla mniej prawdopodobnych ale możliwych scenariuszy. Śnieg w nieoczekiwanych porach może zakłócić plany - przygotowanie planu awaryjnego jest rozsądne."
      },
      {
        id: "cond_all_10",
        question: "Wenn ich reich _____, könnte ich um die Welt reisen.",
        translation: "(Gdybym był bogaty, mógłbym podróżować dookoła świata)",
        options: ["wäre", "bin", "war", "würde sein"],
        correct: "wäre",
        explanation: "Nierealny warunek teraźniejszy - 'wäre reich' (gdybym był - ale nie jestem). Rezultat z modalnym Konjunktiv 'könnte reisen'. To marzenie o innej rzeczywistości. Fantazje o bogactwie są uniwersalne - choć realizm mówi żeby pracować z tym co masz."
      },
      {
        id: "cond_all_11",
        question: "Wenn wir früher _____, hätten wir den Zug nicht verpasst.",
        translation: "(Gdybyśmy wyszli wcześniej, nie przegapilibyśmy pociągu)",
        options: ["losgefahren wären", "losfahren", "losfuhren", "losgefahren sind"],
        correct: "losgefahren wären",
        explanation: "Nierealny warunek przeszły - 'wären losgefahren' (gdybyśmy wyjechali). Czasownik 'losfahren' ruch więc 'sein'. Rezultat 'hätten verpasst' też Plusquamperfekt Konjunktiv. Spóźnienie przez zbyt późne wyjście to pouczające doświadczenie - punktualność wymaga marginesu czasowego."
      },
      {
        id: "cond_all_12",
        question: "Wenn er anruft, _____ ich sofort zurückrufen bestimmt!",
        translation: "(Jeśli zadzwoni, na pewno natychmiast oddzwonię!)",
        options: ["werde", "würde", "rufe", "rief"],
        correct: "werde",
        explanation: "Warunek REALNY przyszły - 'wenn er anruft' (jeśli zadzwoni) z przyszłym 'werde zurückrufen' lub nawet teraźniejszym. Obietnica szybkiej odpowiedzi. Responsywność w komunikacji pokazuje szacunek - ludzie doceniają gdy ich wiadomości nie są ignorowane."
      },
      {
        id: "cond_all_13",
        question: "Wenn ich nur besser Deutsch sprechen _____!",
        translation: "(Gdybym tylko lepiej mówił po niemiecku!)",
        options: ["könnte", "kann", "konnte", "würde können"],
        correct: "könnte",
        explanation: "Zdanie życzeniowe (bez głównego zdania) używa Konjunktiv II - 'könnte sprechen'. Partykuła 'nur' (tylko) wzmacnia pragnienie. To nierealny warunek teraźniejszy w formie samego warunku. Pragnienie lepszych umiejętności językowych motywuje do nauki - rozpoznanie luki między obecnym a pożądanym poziomem to pierwszy krok do poprawy."
      },
      {
        id: "cond_all_14",
        question: "Hätte ich das vorher gewusst, _____ ich anders gehandelt!",
        translation: "(Gdybym wiedział to wcześniej, postąpiłbym inaczej!)",
        options: ["hätte", "habe", "hatte", "würde haben"],
        correct: "hätte",
        explanation: "Nierealny warunek przeszły ODWRÓCONY - Konjunktiv na początku eliminuje 'wenn'. 'Hätte gewusst' warunek, 'hätte gehandelt' rezultat. Oba Plusquamperfekt Konjunktiv. Żal o braku wcześniejszej wiedzy - retrospektywne myślenie o alternatywnych wyborach jest częstą ludzką tendencją."
      },
      {
        id: "cond_all_15",
        question: "Wenn sie pünktlich _____, können wir noch den Film sehen.",
        translation: "(Jeśli przyjedzie punktualnie, możemy jeszcze zobaczyć film)",
        options: ["kommt", "käme", "kommen würde", "gekommen ist"],
        correct: "kommt",
        explanation: "Warunek REALNY - normalna teraźniejszość w warunku, modalny w rezultacie. To prawdopodobny scenariusz więc nie potrzeba Konjunktiv. Punktualność decyduje czy zdążą - presja czasu tworzy napięcie. Realne warunki używają prostych czasów - to ułatwia język."
      }
    ]
  },

  verbal_complements_complete: {
    name: "Dopełnienia czasownikowe - kompletne",
    description: "Sich freuen auf/über, denken an/über - systematyka przyimków",
    icon: Link2,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "verb_compl_1",
        question: "Ich freue mich sehr _____ deinen Besuch nächste Woche!",
        translation: "(Bardzo się cieszę na twoją wizytę w przyszłym tygodniu!)",
        options: ["auf", "über", "an", "von"],
        correct: "auf",
        explanation: "Czasownik 'sich freuen AUF' (cieszyć się NA) dla PRZYSZŁYCH wydarzeń. Przyimek 'auf' wskazuje antycypację - coś jeszcze nie nastąpiło ale już cię cieszy. To ważne rozróżnienie: 'auf' to przyszłość, 'über' to teraźniejszość/przeszłość. Oczekiwanie wizyt bliskich osób to przyjemne uczucie - antycypacja sama w sobie przynosi radość."
      },
      {
        id: "verb_compl_2",
        question: "Sie freut sich _____ das schöne Geschenk von ihrer Mutter.",
        translation: "(Cieszy się pięknym prezentem od swojej matki)",
        options: ["über", "auf", "an", "für"],
        correct: "über",
        explanation: "Czasownik 'sich freuen ÜBER' (cieszyć się Z) dla rzeczy które już są/były - otrzymany prezent. Przyimek 'über' dla obecnej lub przeszłej radości. Macierzyńskie prezenty często mają emocjonalną wartość - to nie tylko przedmiot ale symbol miłości rodzicielskiej."
      },
      {
        id: "verb_compl_3",
        question: "Ich denke oft _____ meine Kindheit im kleinen Dorf.",
        translation: "(Często myślę o moim dzieciństwie w małej wiosce)",
        options: ["an", "über", "auf", "von"],
        correct: "an",
        explanation: "Czasownik 'denken AN' (myśleć O) dla osobistych wspomnień i tęsknot. Przyimek 'an' tworzy emocjonalne połączenie. To różne od 'denken über' (myśleć nad - bardziej analityczne). Wspomnienia dzieciństwa na wsi często idealizowane - prostota i natura kontrastują z komplikacjami dorosłego życia."
      },
      {
        id: "verb_compl_4",
        question: "Wir denken kritisch _____ diesen Vorschlag nach in Ruhe.",
        translation: "(Zastanawiamy się krytycznie nad tą propozycją w spokoju)",
        options: ["über", "an", "auf", "von"],
        correct: "über",
        explanation: "Czasownik 'nachdenken ÜBER' (zastanawiać się nad) dla analitycznego myślenia. Przyimek 'über' wskazuje temat przemyśleń. Rozdzielny 'nachdenken' z przedrostkiem 'nach-' podkreśla głębokość. Krytyczna analiza propozycji przed akceptacją to rozsądne podejście - pośpiech w decyzjach często prowadzi do błędów."
      },
      {
        id: "verb_compl_5",
        question: "Sie interessiert sich sehr _____ moderne Architektur und Design.",
        translation: "(Bardzo interesuje się nowoczesną architekturą i designem)",
        options: ["für", "an", "über", "um"],
        correct: "für",
        explanation: "Czasownik 'sich interessieren FÜR' (interesować się czymś) standardowa konstrukcja. Przyimek 'für' wskazuje obszar zainteresowania. Pasje architektoniczne wzbogacają sposób postrzegania przestrzeni. Zainteresowania kształtują naszą perspektywę - ludzie zainteresowani architekturą inaczej patrzą na miasta."
      },
      {
        id: "verb_compl_6",
        question: "Er ärgert sich _____ die ständigen Verspätungen der Bahn.",
        translation: "(Denerwuje się ciągłymi opóźnieniami kolei)",
        options: ["über", "an", "auf", "von"],
        correct: "über",
        explanation: "Czasownik 'sich ärgern ÜBER' (denerwować się czymś) wyraża frustrację. Przyimek 'über' pokazuje źródło irytacji. Opóźnienia transportu publicznego to powszechne źródło stresu miejskiego. Chroniczne problemy z punkg tualnością testują cierpliwość - regularne frustracje mogą wpływać na jakość życia."
      },
      {
        id: "verb_compl_7",
        question: "Ich verlasse mich völlig _____ deine Unterstützung hier.",
        translation: "(Całkowicie polegam na twoim wsparciu tutaj)",
        options: ["auf", "an", "über", "für"],
        correct: "auf",
        explanation: "Czasownik 'sich verlassen AUF' (polegać na) wyraża zaufanie i zależność. Przyimek 'auf' z biernikiem dla osoby/rzeczy na której polegasz. Całkowite poleganie to akt wiary - pokazuje głębokie zaufanie w niezawodność drugiej osoby."
      },
      {
        id: "verb_compl_8",
        question: "Sie bewirbt sich _____ eine interessante Stelle im Ausland.",
        translation: "(Aplikuje na ciekawą posadę za granicą)",
        options: ["um", "für", "an", "auf"],
        correct: "um",
        explanation: "Czasownik 'sich bewerben UM' (aplikować o/ubiegać się o) wymaga 'um' z biernikiem. To formalna konstrukcja dla pracy. Aplikacje zagraniczne otwierają nowe możliwości. Przyimek 'um' wskazuje że konkurujesz O pozycję - 'um' sugeruje konkurencję między kandydatami."
      },
      {
        id: "verb_compl_9",
        question: "Ich erinnere mich gut _____ unseren letzten gemeinsamen Urlaub.",
        translation: "(Dobrze pamiętam nasz ostatni wspólny urlop)",
        options: ["an", "über", "auf", "von"],
        correct: "an",
        explanation: "Czasownik 'sich erinnern AN' (pamiętać coś) łączy pamięć z obiektem. Przyimek 'an' dla wspomnień. Wspólne wakacje tworzą trwałe wspomnienia - doświadczenia dzielone z bliskimi są szczególnie cenne w pamięci."
      },
      {
        id: "verb_compl_10",
        question: "Er beschwert sich ständig _____ das laute Nachbarn nebenan.",
        translation: "(Ciągle skarży się na głośnych sąsiadów obok)",
        options: ["über", "an", "auf", "von"],
        correct: "über",
        explanation: "Czasownik 'sich beschweren ÜBER' (skarżyć się na) wyraża niezadowolenie. Przyimek 'über' dla tematu skargi. Hałas sąsiedzki to częsty konflikt mieszkaniowy. Ciągłe skarżenie się może być męczące dla słuchaczy - czasem lepsza jest bezpośrednia rozmowa z sąsiadami o problemie."
      },
      {
        id: "verb_compl_11",
        question: "Wir kümmern uns liebevoll _____ unseren alten Hund täglich.",
        translation: "(Opiekujemy się czule naszym starym psem codziennie)",
        options: ["um", "an", "über", "für"],
        correct: "um",
        explanation: "Czasownik 'sich kümmern UM' (opiekować się/troszczyć się o) wymaga 'um' z biernikiem. Zwrotny czasownik pokazuje osobiste zaangażowanie. Stary pies wymaga więcej troski - ale lata lojalności i towarzystwa zasługują na oddaną opiekę w późniejszych latach."
      },
      {
        id: "verb_compl_12",
        question: "Sie hat sich schnell _____ das kalte Klima gewöhnt hier.",
        translation: "(Szybko przyzwyczaiła się do zimnego klimatu tutaj)",
        options: ["an", "in", "auf", "über"],
        correct: "an",
        explanation: "Czasownik 'sich gewöhnen AN' (przyzwyczajać się do) pokazuje proces adaptacji. Przyimek 'an' z biernikiem dla nowych warunków. Perfect 'hat gewöhnt' pokazuje ukończoną adaptację. Zdolność przyzwyczajania się to cenna umiejętność - elastyczność pozwala funkcjonować w różnych środowiskach."
      },
      {
        id: "verb_compl_13",
        question: "Ich warte schon lange _____ eine Antwort von ihm ungeduldig.",
        translation: "(Czekam już długo na odpowiedź od niego niecierpliwie)",
        options: ["auf", "an", "über", "für"],
        correct: "auf",
        explanation: "Czasownik 'warten AUF' (czekać NA) standardowa konstrukcja. Przyimek 'auf' z biernikiem dla tego na co czekasz. Długie oczekiwanie rodzi niecierpliwość. Brak odpowiedzi może sygnalizować brak zainteresowania lub być po prostu zapomnieniem - ale oczekujący nie wie które."
      },
      {
        id: "verb_compl_14",
        question: "Er glaubt fest _____ den Erfolg unseres Projektes definitiv.",
        translation: "(Mocno wierzy w sukces naszego projektu zdecydowanie)",
        options: ["an", "in", "auf", "über"],
        correct: "an",
        explanation: "Czasownik 'glauben AN' (wierzyć W) wyraża silną wiarę lub zaufanie. Przyimek 'an' z biernikiem. Pewność lidera inspiruje zespół. Silna wiara w sukces projektu może być samospełniającą się przepowiednią - optymizm napędza wysiłek który prowadzi do sukcesu."
      },
      {
        id: "verb_compl_15",
        question: "Sie träumt nachts oft _____ ihrer Zukunft und Karriere.",
        translation: "(Śni często w nocy o swojej przyszłości i karierze)",
        options: ["von", "an", "über", "für"],
        correct: "von",
        explanation: "Czasownik 'träumen VON' (śnić O/marzyć o) używa 'von' z celownikiem. To dla marzeń sennych i dziennych. Marzenia o przyszłości pomagają w ustalaniu celów. Wizualizacja sukcesu to technika motywacyjna - wyobrażanie sobie pożądanej przyszłości pomaga w jej materializacji."
      }
    ]
  }
};

export default part21Categories;