/**
 * POLISH → GERMAN GRAMMAR - PART 10
 * 4 categories, 15 questions each - Mastery completion
 */

import { Zap, Star, Award, Gift } from "lucide-react";

export const part10Categories = {
  modal_particles_flavor: {
    name: "Partykuły modalne (doch, mal, ja, halt)",
    description: "Dodawanie niuansów i emocji do zdań",
    icon: Zap,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "part_1",
        question: "Komm _____ her - ich möchte dir etwas zeigen schnell!",
        translation: "(No chodź tutaj - chcę ci coś pokazać szybko!)",
        options: ["mal", "doch", "ja", "halt"],
        correct: "mal",
        explanation: "Partykuła 'mal' łagodzi prośbę i czyni ją bardziej swobodną! Fraza 'komm mal' brzmi dużo łagodniej niż surowe 'komm'. To o zaproszeniu - delikatne przywoływanie. Partykuła 'mal' (pochodzi od 'einmal') dodaje swobodę i zmniejsza nacisk. Całość brzmi bardziej zachęcająco niż surowo czy nakazowo."
      },
      {
        id: "part_2",
        question: "Das ist _____ interessant! Erzähl mir mehr darüber bitte!",
        translation: "(To jest naprawdę ciekawe! Opowiedz mi więcej proszę!)",
        options: ["ja", "mal", "doch", "halt"],
        correct: "ja",
        explanation: "Partykuła 'ja' wyraża zaskoczenie lub zainteresowanie! Podkreśla stwierdzenie - 'das ist ja' dodaje ekscytację. To o zaciekawieniu - wyrażanie autentycznego zainteresowania. Partykuła 'ja' wzmacnia wypowiedź pokazując emocje - zdziwioną fascynację. Dodaje entuzjazm do całej wypowiedzi."
      },
      {
        id: "part_3",
        question: "Ruf mich _____ an, wenn du Zeit hast später!",
        translation: "(No zadzwoń do mnie, gdy będziesz miał czas później!)",
        options: ["doch", "mal", "ja", "halt"],
        correct: "doch",
        explanation: "Partykuła 'doch' wyraża zachętę lub naleganie! Pobudza do działania - 'ruf doch an' brzmi zachęcająco. To o komunikacji - delikatne ponaglanie. Partykuła 'doch' dodaje niuans zachęty lub uspokojenia - motywuje do akcji. Brzmi dużo cieplej niż neutralna prośba."
      },
      {
        id: "part_4",
        question: "Es ist _____ kalt heute - zieh eine Jacke an warm!",
        translation: "(Jest po prostu zimno dzisiaj - załóż ciepłą kurtkę!)",
        options: ["halt", "mal", "doch", "ja"],
        correct: "halt",
        explanation: "Partykuła 'halt' wyraża rezygnację lub fakt! Po prostu tak jest - akceptowanie rzeczywistości. To o pogodzie - stwierdzenie oczywistości. Partykuła 'halt' (południowoniemiecka) pokazuje akceptację lub nieuchronność - 'es ist halt kalt' (po prostu jest zimno). Pragmatyczna akceptacja sytuacji."
      },
      {
        id: "part_5",
        question: "Schau _____ - das Wetter ist so schön heute draußen!",
        translation: "(No popatrz - pogoda jest taka ładna dzisiaj na zewnątrz!)",
        options: ["mal", "doch", "ja", "halt"],
        correct: "mal",
        explanation: "Partykuła 'mal' to swobodne zaproszenie! Fraza 'schau mal' to przyjazna sugestia - popatrz tutaj. To dzielenie się obserwacją - włączanie innych. 'Mal' łagodzi rozkazy przekształcając je w sugestie - 'schau mal' brzmi jak zaproszenie nie rozkaz. Delikatne przyciąganie uwagi."
      },
      {
        id: "part_6",
        question: "Du bist _____ noch jung - du hast noch viel Zeit vor dir!",
        translation: "(Jesteś przecież jeszcze młody - masz jeszcze dużo czasu przed sobą!)",
        options: ["doch", "mal", "ja", "halt"],
        correct: "doch",
        explanation: "Partykuła 'doch' podkreśla oczywistość! Przypomina o fakcie - 'du bist doch jung' akcentuje młodość. To pocieszenie - uspokajająca perspektywa. Partykuła 'doch' w stwierdzeniach przypomina o oczywistym fakcie dla pociechy lub argumentu. Podkreśla to co powinno być widoczne."
      },
      {
        id: "part_7",
        question: "Warte _____ kurz - ich bin gleich fertig mit der Arbeit!",
        translation: "(Poczekaj chwilkę - zaraz skończę z pracą!)",
        options: ["mal", "doch", "ja", "halt"],
        correct: "mal",
        explanation: "Partykuła 'mal' to uprzejma prośba o opóźnienie! Fraza 'warte mal' łagodniejsza niż 'warte' - proszenie o cierpliwość. To o czasie - potrzeba krótkiego oczekiwania. 'Mal' z rozkazami zmniejsza bezpośredniość - czyni prośbę o czekanie bardziej znośną. Delikatna prośba o krótką cierpliwość."
      },
      {
        id: "part_8",
        question: "Das weiß ich _____ nicht - frag jemand anderen bitte!",
        translation: "(Po prostu tego nie wiem - zapytaj kogoś innego proszę!)",
        options: ["halt", "mal", "doch", "ja"],
        correct: "halt",
        explanation: "Partykuła 'halt' przyznaje się do ograniczenia! Fraza 'weiß ich halt nicht' akceptuje niewi edzę rzeczowo. To szczerość - przyznanie się do luki. 'Halt' pokazuje prostą akceptację ograniczenia - bez przeprosin po prostu fakt. Południowoniemiecki akcent dodający rezygnacji."
      },
      {
        id: "part_9",
        question: "Sei _____ still - ich versuche zu konzentrieren mich hier!",
        translation: "(No bądź cicho - próbuję się skoncentrować tutaj!)",
        options: ["doch", "mal", "ja", "halt"],
        correct: "doch",
        explanation: "Partykuła 'doch' to nalegająca prośba! Fraza 'sei doch still' bardziej pilna niż 'sei still' - domaganie się ciszy. To frustracja - potrzeba ciszy. 'Doch' w rozkazach intensyfikuje prośbę czyniąc ją bardziej stanowczą. Mocniejsza niż zwykły tryb rozkazujący."
      },
      {
        id: "part_10",
        question: "Das habe ich _____ gewusst! Ich bin nicht überrascht!",
        translation: "(Przecież to wiedziałem! Nie jestem zaskoczony!)",
        options: ["doch", "mal", "ja", "halt"],
        correct: "doch",
        explanation: "Partykuła 'doch' to potwierdzenie! Wiedziałem to - potwierdzanie podejrzenia. To samopotwierdzenie - mieć rację. 'Doch' podkreśla słuszność wcześniejszego przekonania - 'ich habe es doch gewusst'. Triumfalne potwierdzenie."
      },
      {
        id: "part_11",
        question: "Mach dir _____ keine Sorgen - alles wird gut werden!",
        translation: "(No nie martw się - wszystko będzie dobrze!)",
        options: ["doch", "mal", "ja", "halt"],
        correct: "doch",
        explanation: "Partykuła 'doch' to pocieszenie! Uspokajające - 'mach dir doch keine Sorgen' ciepło odradza zmartwienie. To pociecha - łagodzenie niepokoju. 'Doch' w negatywnych rozkazach dodaje współczucia - zachęca aby NIE stresować się. Ciepłe odradzanie."
      },
      {
        id: "part_12",
        question: "Das ist _____ verrückt! Wie kann das sein möglich?",
        translation: "(To jest przecież szalone! Jak to może być możliwe?)",
        options: ["ja", "doch", "mal", "halt"],
        correct: "ja",
        explanation: "Partykuła 'ja' wyraża niedowierzanie! Zdziwienie - 'das ist ja verrückt' podkreśla szaleństwo. To o zaskoczeniu - niedowierzanie. 'Ja' intensyfikuje przymiotniki pokazując silną reakcję - zaskoczenie lub zdumienie. Emocjonalne wzmocnienie."
      },
      {
        id: "part_13",
        question: "Probier _____ diesen Kuchen - er schmeckt fantastisch!",
        translation: "(No spróbuj tego ciasta - smakuje fantastycznie!)",
        options: ["mal", "doch", "ja", "halt"],
        correct: "mal",
        explanation: "Partykuła 'mal' to przyjazna sugestia! Fraza 'probier mal' zaprasza do próbowania - swobodna oferta. To gościnność - zachęcanie do próby. 'Mal' czyni rozkaz sugestią nie poleceniem - 'probier mal' jest zachęcające. Delikatna zachęta."
      },
      {
        id: "part_14",
        question: "Er ist _____ mein bester Freund - natürlich helfe ich ihm!",
        translation: "(Jest przecież moim najlepszym przyjacielem - oczywiście mu pomogę!)",
        options: ["ja", "doch", "mal", "halt"],
        correct: "ja",
        explanation: "Partykuła 'ja' to uzasadnienie! Wyjaśnianie oczywistości - 'er ist ja mein Freund' dlatego pomoc. To o lojalności - uzasadnianie pomocy. 'Ja' pokazuje oczywisty powód - podkreślanie logicznego połączenia. Wyjaśnianie motywacji przez oczywisty fakt."
      },
      {
        id: "part_15",
        question: "Ich kann _____ nichts dafür - das ist nicht meine Schuld!",
        translation: "(Po prostu nic na to nie poradzę - to nie moja wina!)",
        options: ["halt", "doch", "mal", "ja"],
        correct: "halt",
        explanation: "Partykuła 'halt' to defensywna rezygnacja! Fraza 'kann halt nichts dafür' - akceptowanie bezradności. To samoobrona - zrzeczenie się odpowiedzialności. 'Halt' pokazuje prostą niemożność - podkreślanie limitów. Akceptowanie tego co poza kontrolą w rzeczowy sposób."
      }
    ]
  },

  diminutives_augmentatives: {
    name: "Zdrobnienia i augmentatywy",
    description: "Häuschen, Tischchen, Männlein - małe formy",
    icon: Star,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "dim_1",
        question: "Sie wohnt in einem kleinen _____ am Waldrand idyllisch.",
        translation: "(Mieszka w małym domku na skraju lasu idyllicznie)",
        options: ["Häuschen", "Haus", "Häuslein", "Hauschen"],
        correct: "Häuschen",
        explanation: "Rzeczownik 'Häuschen' to zdrobnienie domku! Końcówka '-chen' tworzy małą, uroczą wersję. To o mieszkaniu - przytulna chatka. Niemiecki tworzy zdrobnienia dodając '-chen' (lub '-lein') - 'Haus' staje się 'Häuschen'. Często pojawia się przegłos. Zdrobnienie brzmi czule."
      },
      {
        id: "dim_2",
        question: "Das _____ sitzt auf dem Ast und singt schön melodisch.",
        translation: "(Ptaszek siedzi na gałęzi i śpiewa pięknie melodyjnie)",
        options: ["Vögelchen", "Vogel", "Vöglein", "Vogelchen"],
        correct: "Vögelchen",
        explanation: "Rzeczownik 'Vögelchen' to uroczy ptak! Przemiana 'Vogel' → 'Vögelchen' z przegłosem i '-chen'. To obserwacja natury - mały ptak. Zdrobnienie z przegłosem: 'o' → 'ö' plus końcówka '-chen'. Brzmi czule - sprawia że ptak wydaje się uroczy."
      },
      {
        id: "dim_3",
        question: "Sie trinkt jeden Morgen eine Tasse _____ zum Aufwachen.",
        translation: "(Pije każdego ranka filiżankę kawki na przebudzenie)",
        options: ["Kaffee", "Käffchen", "Kaffechen", "Kaffeechen"],
        correct: "Käffchen",
        explanation: "Rzeczownik 'Käffchen' to czuła nazwa kawy! Zdrobnienie z przegłosem - 'Kaffee' zamienia się w 'Käffchen'. To poranny rytuał - przytulna rutyna. Podwójne 'f' plus przegłos 'ä' plus '-chen'. Zdrobnienie tworzy intymne, ciepłe uczucie - poranna kawa wydaje się wyjątkowa i pocieszająca."
      },
      {
        id: "dim_4",
        question: "Das Kind spielt mit seinem kleinen _____ im Garten fröhlich.",
        translation: "(Dziecko bawi się swoim małym stoliczkiem w ogrodzie radośnie)",
        options: ["Tischchen", "Tisch", "Tischlein", "Tischchen"],
        correct: "Tischchen",
        explanation: "Rzeczownik 'Tischchen' to zdrobnienie mebla! Stolik dziecięcy - '-chen' czyni go uroczym. To meble dziecięce - odpowiedni rozmiar. Przemiana 'Tisch' → 'Tischchen' to standardowe zdrobnienie. Bez przegłosu w tym przypadku. Sprawia że mebel brzmi odpowiednio dla dziecka."
      },
      {
        id: "dim_5",
        question: "Die Oma gibt dem Enkel ein _____ Schokolade heimlich.",
        translation: "(Babcia daje wnukowi kawałeczek czekolady potajemnie)",
        options: ["Stückchen", "Stück", "Stücklein", "Stuckchen"],
        correct: "Stückchen",
        explanation: "Rzeczownik 'Stückchen' to maleńki kawałek! Przemiana 'Stück' → 'Stückchen' minimalizuje porcję. To babcina pobłażliwość - mały przysmak. Zdrobnienie minimalizuje - sprawia że czekolada wydaje się małą rzeczą (podstępne dawanie). Mała porcja brzmi mniej wino twórczo."
      },
      {
        id: "dim_6",
        question: "Das _____ läuft über die Wiese und spielt mit Schmetterlingen.",
        translation: "(Dziewczynka biega po łące i bawi się z motylami)",
        options: ["Mädchen", "Mädel", "Maid", "Madchen"],
        correct: "Mädchen",
        explanation: "Rzeczownik 'Mädchen' to już zdrobnienie! Przemiana 'Magd' (służąca) → 'Mädchen' (dziewczyna) - standardowa forma. To o dziecku - młoda osoba. Słowo 'Mädchen' jest tak powszechne że już nie czujesz zdrobnienia - po prostu 'dziewczyna'. Rodzaj nijaki mimo żeńskiego znaczenia!"
      },
      {
        id: "dim_7",
        question: "Im Märchen lebt ein _____ im tiefen Wald allein glücklich.",
        translation: "(W bajce żyje krasnoludek w głębokim lesie sam szczęśliwie)",
        options: ["Männlein", "Mann", "Männchen", "Mannlein"],
        correct: "Männlein",
        explanation: "Rzeczownik 'Männlein' to baśniowe zdrobnienie! Przemiana 'Mann' → 'Männlein' literacki mały człowiek. To o bajkach - postać z książki. Końcówka '-lein' (alternatywa dla '-chen') często w kontekstach literackich. Przegłos 'ä' plus '-lein'. Brzmi staroświecko i jak z książki."
      },
      {
        id: "dim_8",
        question: "Sie kauft ein hübsches _____ für ihre Tochter im Laden.",
        translation: "(Kupuje ładną sukienkę dla swojej córki w sklepie)",
        options: ["Kleidchen", "Kleid", "Kleidlein", "Kleidchen"],
        correct: "Kleidchen",
        explanation: "Rzeczownik 'Kleidchen' to dziecięca sukienka! Przemiana 'Kleid' → 'Kleidchen' mała sukienka. To zakupy - ubrania dla dzieci. Zdrobnienie sugeruje rozmiar dziecięcy - 'Kleidchen' odpowiednie dla córki. Sprawia że sukienka brzmi uroczo i pasująca dla dziecka."
      },
      {
        id: "dim_9",
        question: "Gib mir bitte ein _____ Zucker für meinen Tee süß.",
        translation: "(Daj mi proszę troszeczkę cukru do mojej herbaty słodko)",
        options: ["bisschen", "Bissen", "bisslein", "Biss"],
        correct: "bisschen",
        explanation: "Wyrażenie 'ein bisschen' to idiomatyczne zdrobnienie! Oznacza 'trochę' - małą ilość. To uprzejma prośba - minimalizowanie żądania. Słowo 'bisschen' pochodzi od 'Bissen' (kęs) jako zdrobnienie standardowo dla 'trochę'. Minimalizuje prośbę sprawiając że wydaje się skromna."
      },
      {
        id: "dim_10",
        question: "Das _____ schläft friedlich in seinem Bettchen süß.",
        translation: "(Niemowlątko śpi spokojnie w swoim łóżeczku słodko)",
        options: ["Bäbchen", "Baby", "Babylein", "Babchen"],
        correct: "Baby",
        explanation: "Słowo 'Baby' nie potrzebuje zdrobnienia! Jest już małe - nie trzeba '-chen'. To o niemowlęciu - spokojny sen. Słowo 'Baby' samo w sobie oznacza coś małego - dodawanie zdrobnienia byłoby zbędne. Niektóre słowa są inherentnie zdrobnione w koncepcji."
      },
      {
        id: "dim_11",
        question: "Sie gießt die _____ auf der Fensterbank jeden Tag sorgfältig.",
        translation: "(Podlewa kwiatki na parapecie każdego dnia starannie)",
        options: ["Blümchen", "Blumen", "Blümlein", "Blumchen"],
        correct: "Blümchen",
        explanation: "Rzeczownik 'Blümchen' to czułe określenie kwiatów! Przemiana 'Blume' → 'Blümchen' z przegłosem. To ogrodnictwo - czuła opieka. Zdrobnienie 'Blümchen' pokazuje czułość dla roślin - traktowanie z miłością. Przegłos 'ü' plus '-chen' sprawia że brzmi uroczo."
      },
      {
        id: "dim_12",
        question: "Er wohnt in einem gemütlichen _____ in den Bergen ruhig.",
        translation: "(Mieszka w przytulnym chatce w górach spokojnie)",
        options: ["Hüttchen", "Hütte", "Hüttlein", "Hutchen"],
        correct: "Hüttchen",
        explanation: "Rzeczownik 'Hüttchen' to przytulna chatka! Przemiana 'Hütte' → 'Hüttchen' górska chatka. To azyl - spokojne mieszkanie. Zdrobnienie sugeruje osobliwe, czarujące - 'Hüttchen' brzmi idyllicznie. Bez przegłosu tutaj (ü już obecne). Sprawia że mieszkanie brzmi zachęcająco."
      },
      {
        id: "dim_13",
        question: "Die Kinder spielen mit ihrem kleinen _____ im Sandkasten.",
        translation: "(Dzieci bawią się swoim małym wiadrem w piaskownicy)",
        options: ["Eimerchen", "Eimer", "Eimerlein", "Eimerchen"],
        correct: "Eimerchen",
        explanation: "Rzeczownik 'Eimerchen' to zabawkowe wiaderko! Przemiana 'Eimer' → 'Eimerchen' dziecięca zabawka. To zabawa - piaskowniskowa radość. Zdrobnienie sprawia że wiaderko brzmi odpowiednio dla zabawki - 'Eimerchen' dziecięcy rozmiar. Bez przegłosu. Kontekst dziecięcy pasuje do zdrobnienia."
      },
      {
        id: "dim_14",
        question: "Sie liest ihrer Tochter ein _____ vor dem Schlafengehen vor.",
        translation: "(Czyta córce bajeczką przed snem)",
        options: ["Märchen", "Märe", "Märlein", "Marchchen"],
        correct: "Märchen",
        explanation: "Rzeczownik 'Märchen' to bajka! To już zdrobnienie - 'Märe' (stara opowieść) → 'Märchen'. To przed snem - opowiadanie historyjek. Słowo 'Märchen' jest tak ugruntowane że nie czujesz już zdrobnienia - po prostu 'bajka'. Rodzaj nijaki. Standardowe określenie dla bajek."
      },
      {
        id: "dim_15",
        question: "Trink noch ein _____ Wasser - du musst hydriert bleiben!",
        translation: "(Wypij jeszcze troszeczkę wody - musisz pozostać nawodniony!)",
        options: ["bisschen", "Bissen", "Stückchen", "wenig"],
        correct: "bisschen",
        explanation: "Wyrażenie 'bisschen' minimalizuje ilość! Fraza 'ein bisschen Wasser' - mała ilość jako prośba. To namawianie zdrowotne - zachęcanie do nawodnienia. Słowo 'bisschen' to standardowe określenie dla 'trochę' - sprawia że prośba wydaje się minimalna. Minimalizowanie aby zachęcić do zgodności."
      }
    ]
  },

  es_impersonal_constructions: {
    name: "Bezosobowe konstrukcje z 'es'",
    description: "Es gibt, es geht, es tut mir leid - bezosobowe",
    icon: Award,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "es_imp_1",
        question: "_____ gibt viele schöne Parks in dieser Stadt zum Entspannen.",
        translation: "(Jest wiele pięknych parków w tym mieście do relaksu)",
        options: ["Es", "Er", "Sie", "Das"],
        correct: "Es",
        explanation: "Konstrukcja 'es gibt' oznacza 'jest/są'! Standardowa konstrukcja dla wyrażania istnienia. To o dostępności - atrakcje miejskie. Wyrażenie 'es gibt' bezosobowo pokazuje istnienie - nie potrzebujesz konkretnego podmiotu. Uniwersalny sposób mówienia 'są' lub 'jest' w niemieckim."
      },
      {
        id: "es_imp_2",
        question: "Wie _____ es dir heute? Fühlst du dich besser schon?",
        translation: "(Jak ci dzisiaj? Czujesz się już lepiej?)",
        options: ["geht", "gibt", "ist", "macht"],
        correct: "geht",
        explanation: "Wyrażenie 'wie geht es dir' to standardowe powitanie! Pytanie o samopoczucie. To o zdrowiu - sprawdzanie stanu. Utrwalone wyrażenie 'wie geht es' dla pytania jak się ktoś ma. Zaimek 'es' jest gramatycznym podmiotem - idiomatyczne pytanie."
      },
      {
        id: "es_imp_3",
        question: "_____ tut mir wirklich leid, dass ich zu spät gekommen bin!",
        translation: "(Naprawdę mi przykro, że się spóźniłem!)",
        options: ["Es", "Das", "Er", "Sie"],
        correct: "Es",
        explanation: "Wyrażenie 'es tut mir leid' to przepraszanie! Wyrażam żal. To przeprosiny - okazywanie skruchy. Utrwalone wyrażenie 'es tut mir leid' to standardowa forma przeprosin. Bezosobowy podmiot 'es' - idiom dla żalu."
      },
      {
        id: "es_imp_4",
        question: "_____ regnet stark draußen - nimm einen Regenschirm mit!",
        translation: "(Mocno pada na zewnątrz - weź parasol!)",
        options: ["Es", "Der", "Sie", "Das"],
        correct: "Es",
        explanation: "Konstrukcja 'es regnet' to bezosobowa pogoda! Opisywanie deszczu. To ostrzeżenie pogodowe. Czasowniki pogodowe używają bezosobowego 'es' - 'es regnet, es schneit'. Standardowa konstrukcja dla zjawisk atmosferycznych."
      },
      {
        id: "es_imp_5",
        question: "_____ ist schon spät - wir sollten nach Hause gehen jetzt!",
        translation: "(Jest już późno - powinniśmy iść do domu teraz!)",
        options: ["Es", "Das", "Er", "Die"],
        correct: "Es",
        explanation: "Wyrażenie 'es ist spät' to określenie czasu! Opis godziny. To o czasie - sugestia wyjścia. Wyrażenia czasowe używają 'es ist' - 'es ist früh/spät/Mittag'. Bezosobowe dla stwierdzeń temporalnych."
      },
      {
        id: "es_imp_6",
        question: "_____ macht mir Spaß, neue Sprachen zu lernen immer wieder!",
        translation: "(Sprawia mi przyjemność uczyć się nowych języków wciąż!)",
        options: ["Es", "Das", "Er", "Sie"],
        correct: "Es",
        explanation: "Wyrażenie 'es macht mir Spaß' wyraża przyjemność! Opisywanie radości. To o hobby - pasja językowa. Formuła 'es macht Spaß' standardowa dla mówienia że coś jest przyjemne. Fraza bezokolicznikowa może następować wyjaśniając co."
      },
      {
        id: "es_imp_7",
        question: "_____ klopft an der Tür - kannst du bitte öffnen schnell?",
        translation: "(Ktoś puka do drzwi - możesz proszę otworzyć szybko?)",
        options: ["Es", "Er", "Sie", "Jemand"],
        correct: "Es",
        explanation: "Konstrukcja 'es klopft' dla nieznanego pukającego! Bezosobowe gdy nie wiesz kto - ktoś puka. To o niespodziewanym gościu - sprawdzanie drzwi. Wyrażenie 'es klopft' używane gdy sprawca nieznany - bezosobowa konstrukcja. Można też użyć 'jemand klopft' ale 'es' bardziej powszechne."
      },
      {
        id: "es_imp_8",
        question: "_____ wird langsam dunkel - wir sollten Lichter anmachen bald.",
        translation: "(Robi się powoli ciemno - powinniśmy zapalić światła wkrótce)",
        options: ["Es", "Das", "Er", "Die"],
        correct: "Es",
        explanation: "Konstrukcja 'es wird dunkel' to zmiana środowiskowa! Robi się ciemno - opis warunków świetlnych. To o zmianach - nadchodząca ciemność. Wyrażenie 'es wird' plus przymiotnik dla opisywania zmian środowiskowych. Bezosobowe dla naturalnych przemian."
      },
      {
        id: "es_imp_9",
        question: "_____ gefällt mir hier sehr gut - die Stadt ist wunderschön!",
        translation: "(Bardzo mi się tu podoba - miasto jest cudowne!)",
        options: ["Es", "Das", "Sie", "Er"],
        correct: "Es",
        explanation: "Wyrażenie 'es gefällt mir' wyraża podoba nie! Lubię to tutaj - wyrażanie uznania. To o miejscu - pozytywne wrażenie. Formuła 'es gefällt mir' standardowa dla lubienia - bezosobowy podmiot. Miejsce lub sytuacja sprawia przyjemność."
      },
      {
        id: "es_imp_10",
        question: "_____ riecht hier komisch - hast du etwas anbrennen lassen?",
        translation: "(Dziwnie tu pachnie - przypalałeś coś?)",
        options: ["Es", "Das", "Der", "Sie"],
        correct: "Es",
        explanation: "Konstrukcja 'es riecht' to percepcja zapachu! Bezosobowe dla zapachów - opis aromatu. To obawa - sprawdzanie problemu. Wyrażenie 'es riecht' używane gdy opisujesz otaczające zapachy - 'es riecht gut/schlecht'. Zmysłowa bezosobowa konstrukcja."
      },
      {
        id: "es_imp_11",
        question: "_____ ist mir egal, was andere Leute denken über mich!",
        translation: "(Jest mi obojętne, co inni ludzie myślą o mnie!)",
        options: ["Es", "Das", "Er", "Sie"],
        correct: "Es",
        explanation: "Wyrażenie 'es ist mir egal' to obojętność! Nie dbam - wyrażanie apatii. To o niezależności - nie przejmowanie się opiniami. Utrwalone wyrażenie 'es ist mir egal' standardowe dla mówienia że coś nie ma znaczenia. Bezosobowe odrzucenie."
      },
      {
        id: "es_imp_12",
        question: "_____ schmeckt hier ausgezeichnet - das Essen ist fantastisch!",
        translation: "(Smakuje tu wyśmienicie - jedzenie jest fantastyczne!)",
        options: ["Es", "Das", "Er", "Sie"],
        correct: "Es",
        explanation: "Konstrukcja 'es schmeckt' to doświadczenie smakowe! Ogólna jakość jedzenia - bezosobowa ocena. To komplement restauracyjny - chwalenie kuchni. Wyrażenie 'es schmeckt' używane dla ogólnej jakości jedzenia - bezosobowa ocena smakowa. Można też 'das Essen schmeckt' ale 'es' bardziej ogólne."
      },
      {
        id: "es_imp_13",
        question: "_____ tut weh, wenn ich meinen Arm bewege vorsichtig.",
        translation: "(Boli, gdy poruszam ramieniem ostrożnie)",
        options: ["Es", "Er", "Sie", "Das"],
        correct: "Es",
        explanation: "Wyrażenie 'es tut weh' opisuje ból! Opisywanie bólu - bezosobowe odczucie. To o bólu - medyczna skarga. Formuła 'es tut weh' standardowa dla mówienia że coś boli. Można sprecyzować gdzie (der Arm tut weh) ale bezosobowe 'es' też działa."
      },
      {
        id: "es_imp_14",
        question: "_____ freut mich, dass du gekommen bist zur Feier heute!",
        translation: "(Cieszy mnie, że przyszedłeś na uroczystość dzisiaj!)",
        options: ["Es", "Das", "Mich", "Mir"],
        correct: "Es",
        explanation: "Wyrażenie 'es freut mich' wyraża radość! Jestem zadowolony - pokazywanie szczęścia. To wdzięczność - zadowolenie z przybycia. Konstrukcja 'es freut mich, dass' standardowa dla wyrażania przyjemności z czegoś. Bezosobowy podmiot wyrażający emocje."
      },
      {
        id: "es_imp_15",
        question: "_____ fällt mir schwer, früh aufzustehen am Morgen immer.",
        translation: "(Ciężko mi wstać wcześnie rano zawsze)",
        options: ["Es", "Das", "Mir", "Mich"],
        correct: "Es",
        explanation: "Wyrażenie 'es fällt mir schwer' opisuje trudność! Trudno mi - opisywanie zmagania. To o trudności - poranne wyzwanie. Konstrukcja 'es fällt mir schwer' plus bezokolicznik pokazuje co sprawia trudność. Bezosobowe dla wyrażania osobistych trudności."
      }
    ]
  },

  wishes_polite_requests: {
    name: "Życzenia i uprzejme prośby",
    description: "Ich hätte gern, könnten Sie, würden Sie",
    icon: Gift,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "wish_pol_1",
        question: "Ich _____ gern eine Tasse Kaffee, bitte schön!",
        translation: "(Chętnie poproszę filiżankę kawy, proszę!)",
        options: ["hätte", "habe", "hatte", "würde haben"],
        correct: "hätte",
        explanation: "Wyrażenie 'hätte gern' to uprzejme życzenie! Tryb przypuszczający czyni prośbę bardzo grzeczną. To zamawianie - restauracja lub kawiarnia. Formuła 'ich hätte gern' to standardowa uprzejma formuła zamawiania. Dużo grzeczniejsza niż 'ich will' czy 'ich möchte'."
      },
      {
        id: "wish_pol_2",
        question: "_____ Sie mir bitte helfen mit diesem schweren Koffer?",
        translation: "(Czy mógłby Pan mi proszę pomóc z tą ciężką walizką?)",
        options: ["Könnten", "Können", "Konnten", "Würden können"],
        correct: "Könnten",
        explanation: "Wyrażenie 'könnten Sie' to bardzo uprzejma prośba! Tryb przypuszczający z 'Sie' - maksymalnie uprzejme. To proszenie o przysługę - pomoc z bagażem. Formuła 'könnten Sie' grzeczniejsza niż 'können Sie' - warunkowe pokazuje szacunek. Formalna uprzejmość używa trybu przypuszczającego."
      },
      {
        id: "wish_pol_3",
        question: "_____ du mir bitte das Salz reichen am Tisch?",
        translation: "(Czy mógłbyś mi proszę podać sól przy stole?)",
        options: ["Könntest", "Kannst", "Konntest", "Würdest können"],
        correct: "Könntest",
        explanation: "Wyrażenie 'könntest du' to uprzejme nieformalne! Tryb przypuszczający łagodzi prośbę - przyjazna grzeczność. To maniery stołowe - prośba przy kolacji. Forma 'könntest' grzeczniejsza niż 'kannst' nawet w nieformalnym kontekście. Okazywanie szacunku nawet z 'du'."
      },
      {
        id: "wish_pol_4",
        question: "Ich _____ gerne mehr Zeit mit meiner Familie verbringen.",
        translation: "(Chciałbym chętnie spędzać więcej czasu z rodziną)",
        options: ["würde", "werde", "wollte", "will"],
        correct: "würde",
        explanation: "Wyrażenie 'würde gern' wyraża życzenie! Pragnienie zmiany - hipotetyczna preferencja. To o priorytetach - życzenie czasu z rodziną. Konstrukcja 'würde gern' plus bezokolicznik pokazuje pragnienie obecnie niespełnione. Tęsknotliwe pragnienie."
      },
      {
        id: "wish_pol_5",
        question: "_____ Sie bitte etwas leiser sprechen? Ich telefoniere gerade.",
        translation: "(Czy mogliby Państwo proszę mówić trochę ciszej? Właśnie rozmawiam)",
        options: ["Könnten", "Können", "Würden", "Möchten"],
        correct: "Könnten",
        explanation: "Wyrażenie 'könnten Sie' to uprzejma skarga! Proszenie o zmianę zachowania w grzeczny sposób. To o hałasie - proszenie o ciszę. Formuła 'könnten Sie bitte' bardzo uprzejma dla próśb które mogą sprawiać niewygodę. Maksymalna uprzejmość dla potencjalnie niezręcznej prośby."
      },
      {
        id: "wish_pol_6",
        question: "Ich _____ lieber zu Hause bleiben heute - ich bin müde.",
        translation: "(Wolałbym zostać w domu dzisiaj - jestem zmęczony)",
        options: ["würde", "werde", "will", "wollte"],
        correct: "würde",
        explanation: "Wyrażenie 'würde lieber' wyraża preferencję! Raczej zostać w domu - stwierdzanie preferencji. To o wyborze - odmawianie wyjścia. Konstrukcja 'würde lieber' plus bezokolicznik pokazuje preferowaną alternatywę. Grzeczny sposób odmawiania zaproszenia."
      },
      {
        id: "wish_pol_7",
        question: "_____ es Ihnen etwas ausmachen, das Fenster zu schließen?",
        translation: "(Czy zaszkodziłoby Panu zamknąć okno?)",
        options: ["Würde", "Wird", "Wollte", "Könnte"],
        correct: "Würde",
        explanation: "Wyrażenie 'würde es ausmachen' to ultra-uprzejme! Pytanie czy przeszkadza - okrężna prośba. To maksymalna uprzejmość - bardzo delikatna prośba. Formuła 'würde es Ihnen ausmachen' ekstremalnie kurtuazyjna - pytanie czy prośba sprawia kłopot. Najwyższy poziom formalności."
      },
      {
        id: "es_imp_8",
        question: "Ich _____ so gerne nach Japan reisen - das ist mein Traum!",
        translation: "(Tak chętnie pojechałbym do Japonii - to moje marzenie!)",
        options: ["würde", "werde", "will", "wollte"],
        correct: "würde",
        explanation: "Wyrażenie 'würde so gerne' to silne życzenie! Podkreślanie pragnienia - stwierdzenie marzeń. To aspiracje - pragnienie podróży. Konstrukcja 'würde so gerne' intensyfikuje pragnienie pokazując silne chcenie. Tęsknotne wyrażanie tęsknoty."
      },
      {
        id: "wish_pol_9",
        question: "_____ du mir vielleicht mit den Hausaufgaben helfen können?",
        translation: "(Czy mógłbyś mi może pomóc z pracą domową?)",
        options: ["Könntest", "Kannst", "Würdest", "Möchtest"],
        correct: "Könntest",
        explanation: "Wyrażenie 'könntest du vielleicht' to niepewna prośba! Słowo 'może' plus tryb przypuszczający - bardzo delikatne pytanie. To pomoc w pracach domowych - prośba rówieśnika. Forma 'könntest' plus 'vielleicht' maksymalna niepewność - ułatwia odmowę. Prośba bez nacisku."
      },
      {
        id: "wish_pol_10",
        question: "Ich _____ gern wissen, wann der Zug ankommt am Bahnhof.",
        translation: "(Chętnie bym wiedział, kiedy pociąg przyjeżdża na dworzec)",
        options: ["würde", "werde", "will", "wollte"],
        correct: "würde",
        explanation: "Wyrażenie 'würde gern wissen' to uprzejme zapytanie! Łagodzenie prośby o informację - kurtuazyjne pytanie. To podróż - szukanie rozkładu. Konstrukcja 'würde gern' plus bezokolicznik grzeczniejsza niż bezpośrednie pytanie. Delikatne poszukiwanie informacji."
      },
      {
        id: "wish_pol_11",
        question: "_____ Sie so freundlich sein und mir den Weg zeigen?",
        translation: "(Czy byłby Pan tak uprzejmy i pokazał mi drogę?)",
        options: ["Wären", "Sind", "Waren", "Würden sein"],
        correct: "Wären",
        explanation: "Wyrażenie 'wären Sie so freundlich' to ultra-kurtuazyjne! Staromodna uprzejmość - bardzo formalna prośba. To pytanie o drogę - maksymalny szacunek. Konstrukcja 'wären Sie so freundlich' plus bezokolicznik najwyższa formalność - archaiczna kurtuazja. Wyjątkowo uprzejme sformułowanie."
      },
      {
        id: "wish_pol_12",
        question: "Ich _____ gerne ein Einzelzimmer für zwei Nächte reservieren.",
        translation: "(Chciałbym zarezerwować pokój jednoosobowy na dwie noce)",
        options: ["möchte", "mag", "mochte", "würde mögen"],
        correct: "möchte",
        explanation: "Czasownik 'möchte' to uprzejme chcenie! Rezerwacja hotelowa - kurtuazyjna rezerwacja. To podróż - prośba o zakwaterowanie. Forma 'möchte' (tryb przypuszczający od 'mögen') to standardowe uprzejme 'chciałbym'. Preferowana dla kontekstów profesjonalnych."
      },
      {
        id: "wish_pol_13",
        question: "_____ ihr so nett sein und leiser sprechen bitte?",
        translation: "(Czy moglibyście być tak mili i mówić ciszej proszę?)",
        options: ["Könntet", "Könnt", "Würdet", "Möchtet"],
        correct: "Könntet",
        explanation: "Wyrażenie 'könntet ihr' to uprzejma grupowa prośba! Tryb przypuszczający liczba mnoga nieformalna - proszenie o miłość. To skarga hałasowa - proszenie o ciszę. Forma 'könntet' łagodzi skargę - uprzejme pytanie nawet w nieformalnym 'ihr'. Dyplomatyczna grupowa prośba."
      },
      {
        id: "wish_pol_14",
        question: "Ich _____ lieber den blauen Pullover als den roten nehmen.",
        translation: "(Wolałbym wziąć niebieski sweter niż czerwony)",
        options: ["würde", "werde", "will", "wollte"],
        correct: "würde",
        explanation: "Wyrażenie 'würde lieber' to preferencja zakupowa! Wyrażanie wyboru - selekcja koloru. To handel detaliczny - stwierdzanie preferencji. Konstrukcja 'würde lieber' plus bezokolicznik pokazuje preferowaną opcję. Uprzejme wyrażanie preferencji podczas zakupów."
      },
      {
        id: "wish_pol_15",
        question: "_____ Sie vielleicht einen Moment warten können geduldig?",
        translation: "(Czy mogliby Państwo może chwilę poczekać cierpliwie?)",
        options: ["Könnten", "Können", "Würden", "Möchten"],
        correct: "Könnten",
        explanation: "Wyrażenie 'könnten Sie vielleicht' to maksymalna uprzejmość! Proszenie o cierpliwość - 'może' plus tryb przypuszczający. To obsługa - prośba o czekanie. Forma 'könnten' plus 'vielleicht' niewiarygodnie uprzejma - ułatwia odmowę. Profesjonalna kurtuazyjna prośba."
      }
    ]
  }
};

export default part10Categories;