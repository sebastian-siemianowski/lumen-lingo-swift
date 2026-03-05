/**
 * POLISH → ENGLISH GRAMMAR - PART 8
 * 4 categories, 15 questions each - Advanced fluency
 */

import { Flame, Wind, Umbrella, Map } from "lucide-react";

export const part8Categories = {
  question_formation: {
    name: "Tworzenie pytań",
    description: "Jak poprawnie tworzyć pytania",
    icon: Flame,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "quest_1",
        question: "_____ do you live? I live in a small apartment in the city center near the main square.",
        translation: "(Gdzie mieszkasz? Mieszkam w małym mieszkaniu w centrum miasta blisko głównego placu)",
        options: ["Where", "What", "How", "When"],
        correct: "Where",
        explanation: "Używaj 'where' dla pytań o miejsce! To podstawowe słowo pytające o lokalizację. 'Where do you live?' to jedno z najczęstszych pytań poznawczych. Zapamiętaj: where = gdzie (miejsce), when = kiedy (czas), why = dlaczego (powód), how = jak (sposób)."
      },
      {
        id: "quest_2",
        question: "_____ did you go on vacation last summer? We went to Greece and visited many islands.",
        translation: "(Gdzie pojechałeś na wakacje zeszłego lata? Pojechaliśmy do Grecji i odwiedziliśmy wiele wysp)",
        options: ["Where", "When", "Why", "How"],
        correct: "Where",
        explanation: "'Where' z past simple dla pytań o przeszłe lokalizacje! 'Where did you go' używa pomocnika 'did' bo pytasz o przeszłość. Struktura: where + did + podmiot + czasownik bazowy. To bardzo częsty wzorzec dla rozmów o wakacjach i podróżach."
      },
      {
        id: "quest_3",
        question: "_____ time does the train leave for London tomorrow morning from this station?",
        translation: "(O której godzinie odjeżdża pociąg do Londynu jutro rano z tej stacji?)",
        options: ["What", "Which", "How", "When"],
        correct: "What",
        explanation: "'What time' to ustalone wyrażenie dla pytań o godzinę! Nie 'which time' ani 'how time'. 'What time does...' używa present simple dla rozkładów jazdy nawet gdy mówisz o przyszłości. To standardowe pytanie dla sprawdzania harmonogramów pociągów, autobusów, lotów."
      },
      {
        id: "quest_4",
        question: "_____ are you studying English - for work, travel, or just for fun and personal interest?",
        translation: "(Dlaczego uczysz się angielskiego - do pracy, podróży, czy tylko dla zabawy i osobistego zainteresowania?)",
        options: ["Why", "What", "How", "Where"],
        correct: "Why",
        explanation: "'Why' dla pytań o powód lub motywację! 'Why are you studying' używa present continuous dla obecnej trwającej aktywności. Odpowiedzi na 'why' zazwyczaj zaczynają się od 'because' lub 'to + infinitive'. To świetne pytanie dla poznawania ludzi i ich celów."
      },
      {
        id: "quest_5",
        question: "_____ languages can you speak fluently besides your native language, Polish?",
        translation: "(Ile języków możesz mówić płynnie oprócz swojego rodzimego języka, polskiego?)",
        options: ["How many", "How much", "What", "Which"],
        correct: "How many",
        explanation: "'How many' dla pytań o liczbę policzalnych rzeczy! 'Languages' są policzalne, więc 'how many' nie 'how much'. Ta konstrukcja zawsze pyta o konkretną liczbę. Pamiętaj: how many + rzeczownik policzalny w liczbie mnogiej, how much + rzeczownik niepoliczalny."
      },
      {
        id: "quest_6",
        question: "_____ coffee do you drink per day on average? I usually have about three cups.",
        translation: "(Ile kawy pijesz dziennie średnio? Zazwyczaj mam około trzech filiżanek)",
        options: ["How much", "How many", "What", "Which"],
        correct: "How much",
        explanation: "'How much' dla pytań o ilość niepoliczalnych! 'Coffee' jest niepoliczalne jako substancja. Choć liczymy 'cups' (policzalne), pytamy o 'coffee' (niepoliczalne). 'How much coffee' pyta o ilość ogólnie, nie konkretną liczbę. To częste dla jedzenia, napojów, czasu, pieniędzy."
      },
      {
        id: "quest_7",
        question: "_____ is your favorite color? Mine is blue because it reminds me of the ocean and sky.",
        translation: "(Jaki jest twój ulubiony kolor? Mój to niebieski, bo przypomina mi ocean i niebo)",
        options: ["What", "Which", "How", "Where"],
        correct: "What",
        explanation: "'What' dla pytań o ulubione rzeczy z nieograniczonego wyboru! 'What is your favorite' to klasyczny wzorzec. Używamy 'what' nie 'which' bo nie ograniczamy opcji - pytasz ogólnie, nie podajesz listy. To jedno z pierwszych pytań które ludzie zadają poznając się."
      },
      {
        id: "quest_8",
        question: "_____ old is your grandmother? She looks very young and healthy for her age!",
        translation: "(Ile lat ma twoja babcia? Wygląda bardzo młodo i zdrowo jak na swój wiek!)",
        options: ["How", "What", "Which", "When"],
        correct: "How",
        explanation: "'How old' to ustalone pytanie o wiek! Nie 'what old' ani 'which old'. 'How' łączy się z przymiotnikami dla pytań o stopień: how old (wiek), how tall (wzrost), how long (długość), how far (odległość). Ta konstrukcja jest fundamentalna w angielskim."
      },
      {
        id: "quest_9",
        question: "_____ kind of music do you like listening to when you're relaxing at home after work?",
        translation: "(Jakiego rodzaju muzykę lubisz słuchać, kiedy odpoczywasz w domu po pracy?)",
        options: ["What", "Which", "How", "Where"],
        correct: "What",
        explanation: "'What kind of' pyta o typ lub kategorię! To dla klasyfikowania rzeczy. 'What kind of music' ma nieograniczone możliwości - jazz, rock, klasyczna itp. Bardzo użyteczny wzorzec: what kind of + rzeczownik dla odkrywania preferencji i gustów innych ludzi."
      },
      {
        id: "quest_10",
        question: "_____ long have you been waiting here for the bus in this cold weather?",
        translation: "(Jak długo czekasz tu na autobus w tej zimnej pogodzie?)",
        options: ["How", "What", "When", "Where"],
        correct: "How",
        explanation: "'How long' z present perfect continuous pyta o czas trwania! 'Have you been waiting' podkreśla że czekanie wciąż trwa. 'How long' chce wiedzieć o okresie czasu - odpowiedź będzie 'for 20 minutes' lub 'since 3 o'clock'. To bardzo praktyczne pytanie dla każdej sytuacji oczekiwania."
      },
      {
        id: "quest_11",
        question: "_____ does this word mean in English? I've never seen it before in any text.",
        translation: "(Co znaczy to słowo w angielskim? Nigdy wcześniej go nie widziałem w żadnym tekście)",
        options: ["What", "How", "Which", "Why"],
        correct: "What",
        explanation: "'What does... mean' to standardowe pytanie o znaczenie! Używa present simple z pomocnikiem 'does'. Nie można powiedzieć 'what means this word'. Szyk wyrazów: what + does + podmiot + mean. To jedno z najważniejszych pytań dla uczących się - musisz to znać żeby prosić o wyjaśnienia."
      },
      {
        id: "quest_12",
        question: "_____ one do you prefer - tea or coffee in the morning when you wake up?",
        translation: "(Które wolisz - herbatę czy kawę rano, kiedy się budzisz?)",
        options: ["Which", "What", "How", "Where"],
        correct: "Which",
        explanation: "'Which' gdy dajesz konkretne opcje do wyboru! 'Which one' wybiera między wymienionymi możliwościami (herbata lub kawa). Różnica: 'what' = otwarty wybór (wszystkie opcje), 'which' = ograniczony wybór (z podanych opcji). Używaj 'which' gdy lista jest określona."
      },
      {
        id: "quest_13",
        question: "_____ were you born - in Poland or abroad in a different country?",
        translation: "(Gdzie się urodziłeś - w Polsce czy za granicą w innym kraju?)",
        options: ["Where", "When", "How", "What"],
        correct: "Where",
        explanation: "'Where were you born' pyta o miejsce urodzenia! Past simple z 'were' (passive voice faktycznie). Bardzo częste pytanie poznawcze. Odpowiedź używa 'I was born in...'. To inna struktura niż zwykłe past simple - tu używamy formy biernej bo ktoś inny 'urodził' ciebie w danym miejscu."
      },
      {
        id: "quest_14",
        question: "_____ far is it from here to the airport? I need to catch a flight in two hours.",
        translation: "(Jak daleko jest stąd do lotniska? Muszę złapać lot za dwie godziny)",
        options: ["How", "What", "Where", "Which"],
        correct: "How",
        explanation: "'How far' pyta o odległość! Odpowiedź będzie w kilometrach, milach, minutach jazdy. 'How far is it from... to...' to standardowa konstrukcja. 'How' łączy się z wieloma przymiotnikami dla różnych pytań o stopień lub miarę - very versatile słowo."
      },
      {
        id: "quest_15",
        question: "_____ don't you try the new Italian restaurant that opened last week downtown?",
        translation: "(Czemu nie spróbujesz nowej włoskiej restauracji, która otworzyła się w zeszłym tygodniu w centrum?)",
        options: ["Why", "What", "How", "Where"],
        correct: "Why",
        explanation: "'Why don't you' to grzeczna sugestia lub propozycja! To nie pytanie o powód ale zachęta do akcji. 'Why don't you try' = może powinieneś spróbować (friendly suggestion). Bardzo powszechny wzorzec dla dawania rad bez bycia zbyt bezpośrednim - brzmi jak pytanie ale funkcjonuje jak propozycja."
      }
    ]
  },

  adverbs_of_manner: {
    name: "Przysłówki sposobu",
    description: "Jak coś jest robione - carefully, quickly...",
    icon: Wind,
    color: "from-sky-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "manner_1",
        question: "She speaks English very _____ and clearly, everyone can understand her perfectly well.",
        translation: "(Mówi po angielsku bardzo wolno i wyraźnie, wszyscy mogą ją doskonale zrozumieć)",
        options: ["slowly", "slow", "slower", "slowness"],
        correct: "slowly",
        explanation: "Przysłówki sposobu kończą się na '-ly'! 'Slow' to przymiotnik, 'slowly' to przysłówek. Opisujesz JAK ona mówi (sposób), więc potrzebujesz przysłówka. Większość przysłówków sposobu = przymiotnik + '-ly'. 'Speaks slowly' opisuje sposób mówienia. Przysłówki modyfikują czasowniki, przymiotniki modyfikują rzeczowniki."
      },
      {
        id: "manner_2",
        question: "Please drive _____ on this icy road, it's very dangerous and slippery today.",
        translation: "(Proszę jedź ostrożnie na tej oblodzonej drodze, jest bardzo niebezpieczna i śliska dzisiaj)",
        options: ["carefully", "careful", "care", "careless"],
        correct: "carefully",
        explanation: "'Carefully' to przysłówek od przymiotnika 'careful'! Opisujesz JAK jechać (sposób akcji). 'Drive carefully' daje instrukcję o sposobie prowadzenia. Przeciwieństwo to 'carelessly' (nieostrożnie). Przysłówki sposobu zazwyczaj idą po czasowniku lub na końcu zdania."
      },
      {
        id: "manner_3",
        question: "He runs very _____ and won first place in the marathon race last weekend.",
        translation: "(Biega bardzo szybko i wygrał pierwsze miejsce w maratonie w zeszły weekend)",
        options: ["fast", "fastly", "faster", "quick"],
        correct: "fast",
        explanation: "'Fast' jest zarówno przymiotnikiem JAK I przysłówkiem! Nie dodajesz '-ly' do 'fast' - 'fastly' nie istnieje. 'Runs fast' używa 'fast' jako przysłówka. Inne słowa tak działające: hard (ciężko), late (późno), early (wcześnie). Te są wyjątkami - ta sama forma dla przymiotnika i przysłówka."
      },
      {
        id: "manner_4",
        question: "The children played _____ in the garden all afternoon without fighting or arguing at all.",
        translation: "(Dzieci bawiły się szczęśliwie w ogrodzie całe popołudnie bez kłótni ani sprzeczania się w ogóle)",
        options: ["happily", "happy", "happiness", "happier"],
        correct: "happily",
        explanation: "'Happy' (przymiotnik) staje się 'happily' (przysłówek)! Gdy przymiotnik kończy się na '-y', zmieniamy 'y' na 'i' i dodajemy '-ly'. 'Played happily' opisuje JAK się bawili (sposób). Ta zasada ortograficzna dotyczy wielu słów: easy → easily, angry → angrily, lucky → luckily."
      },
      {
        id: "manner_5",
        question: "She answered the difficult question _____ without making any mistakes in her explanation.",
        translation: "(Odpowiedziała na trudne pytanie poprawnie bez robienia żadnych błędów w swoim wyjaśnieniu)",
        options: ["correctly", "correct", "correction", "correcting"],
        correct: "correctly",
        explanation: "'Correct' (przymiotnik) + '-ly' = 'correctly' (przysłówek)! Opisujesz JAK odpowiedziała (sposób odpowiadania). 'Answered correctly' pokazuje metodę lub jakość akcji. Przysłówki sposobu dają nam informację o JAKOŚCI wykonania czynności - robienia czegoś dobrze, źle, poprawnie, błędnie."
      },
      {
        id: "manner_6",
        question: "You need to study _____ if you want to pass the final exam next week successfully.",
        translation: "(Musisz uczyć się ciężko, jeśli chcesz zdać końcowy egzamin w przyszłym tygodniu pomyślnie)",
        options: ["hard", "hardly", "harder", "hardness"],
        correct: "hard",
        explanation: "'Hard' jako przysłówek znaczy ciężko/intensywnie! Ale 'hardly' znaczy ledwo/prawie wcale - całkiem inne! 'Study hard' = ucz się intensywnie. 'Study hardly' = prawie się nie ucz (przeciwieństwo!). To podchwytliwa para - 'hard' i 'hardly' mają totalnie różne znaczenia mimo podobnego wyglądu."
      },
      {
        id: "manner_7",
        question: "The baby is sleeping _____ in the crib, so please don't make any loud noises.",
        translation: "(Dziecko śpi spokojnie w łóżeczku, więc proszę nie rób żadnych głośnych hałasów)",
        options: ["peacefully", "peaceful", "peace", "peacefulness"],
        correct: "peacefully",
        explanation: "'Peaceful' (przymiotnik) → 'peacefully' (przysłówek) opisuje JAK śpi! Przysłówek modyfikuje czasownik 'sleeping'. 'Sleeping peacefully' maluje obraz spokojnego, niezakłóconego snu. Przysłówki sposobu dodają szczegóły które czynią opis bardziej żywym i konkretnym."
      },
      {
        id: "manner_8",
        question: "He works very _____ and is always the last person to leave the office every evening.",
        translation: "(Pracuje bardzo ciężko i zawsze jest ostatnią osobą opuszczającą biuro każdego wieczoru)",
        options: ["hard", "hardly", "harder", "hardest"],
        correct: "hard",
        explanation: "'Works hard' używa 'hard' jako przysłówka! Znowu, to wyjątek - ta sama forma dla przymiotnika i przysłówka. 'Very hard' intensyfikuje przysłówek. Nie myl z 'hardly works' które znaczy prawie nie pracuje (leniuch). Pozycja i znaczenie są kluczowe tutaj."
      },
      {
        id: "manner_9",
        question: "Please speak _____ so everyone in the back of the room can hear you well.",
        translation: "(Proszę mów głośno, żeby wszyscy z tyłu pokoju mogli cię dobrze słyszeć)",
        options: ["loudly", "loud", "louder", "loudness"],
        correct: "loudly",
        explanation: "'Loud' może być przymiotnikiem lub przysłówkiem, ale 'loudly' jest bardziej formalnie poprawne! Oba 'speak loud' i 'speak loudly' działają, ale 'loudly' jest preferowane w formalnym angielskim. Dla większości kontekstów edukacyjnych i profesjonalnych używaj formy '-ly'."
      },
      {
        id: "manner_10",
        question: "She sings _____ and has won many competitions and awards for her vocal talent.",
        translation: "(Śpiewa pięknie i wygrała wiele konkursów i nagród za swój wokalny talent)",
        options: ["beautifully", "beautiful", "beauty", "beautify"],
        correct: "beautifully",
        explanation: "'Beautiful' (przymiotnik) → 'beautifully' (przysłówek) dla opisu JAK śpiewa! Końcówka '-ly' transformuje przymiotnik w przysłówek sposobu. 'Sings beautifully' ocenia jakość śpiewu. Przysłówki sposobu często wyrażają ocenę wykonania - dobrze, źle, pięknie, okropnie."
      },
      {
        id: "manner_11",
        question: "The old man walks _____ with a cane because he has problems with his knees and balance.",
        translation: "(Stary człowiek chodzi powoli z laską, bo ma problemy z kolanami i równowagą)",
        options: ["slowly", "slow", "slower", "slowness"],
        correct: "slowly",
        explanation: "'Walks slowly' używa przysłówka dla opisu tempa chodzenia! 'Slowly' modyfikuje czasownik 'walks' pokazując SPOSÓB poruszania się. Przysłówki tempa są bardzo częste: quickly, slowly, rapidly, gradually. Dają nam informację o prędkości akcji."
      },
      {
        id: "manner_12",
        question: "You did _____ on the test! You got ninety-five percent - that's an excellent result!",
        translation: "(Poszło ci dobrze na teście! Dostałeś dziewięćdziesiąt pięć procent - to doskonały wynik!)",
        options: ["well", "good", "better", "best"],
        correct: "well",
        explanation: "'Good' to przymiotnik, 'well' to przysłówek! 'Did well' używa przysłówka bo opisuje JAK poszedł test (sposób wykonania). Częsta pomyłka - 'did good' jest potoczne ale gramatycznie niepoprawne. Zawsze: do/did well (przysłówek). You are good (przymiotnik opisuje ciebie)."
      },
      {
        id: "manner_13",
        question: "He answered the phone _____ because he was still half asleep and groggy.",
        translation: "(Odebrał telefon sennie, bo był wciąż w połowie śpiący i otępiały)",
        options: ["sleepily", "sleepy", "sleep", "sleeping"],
        correct: "sleepily",
        explanation: "'Sleepy' (przymiotnik) + '-ly' = 'sleepily' (przysłówek sposobu)! Opisuje JAK odebrał telefon - w senny sposób. Przysłówki mogą wyrażać stan fizyczny lub emocjonalny wpływający na sposób robienia czegoś. To dodaje koloru i szczegółów do opisu akcji."
      },
      {
        id: "manner_14",
        question: "She writes very _____ and her handwriting is almost impossible to read clearly.",
        translation: "(Pisze bardzo nieczytelnie i jej pismo jest prawie niemożliwe do przeczytania wyraźnie)",
        options: ["badly", "bad", "worse", "worst"],
        correct: "badly",
        explanation: "'Bad' (przymiotnik) → 'badly' (przysłówek) dla negatywnej oceny sposobu! 'Writes badly' ocenia JAKOŚĆ pisania. Przysłówki mogą być pozytywne (well, beautifully) lub negatywne (badly, poorly, terribly). Dodają ocenę wykonania czynności - czy jest robiona dobrze czy źle."
      },
      {
        id: "manner_15",
        question: "He arrived _____ at the airport and almost missed his international flight to New York.",
        translation: "(Przyjechał późno na lotnisko i prawie przegapił swój międzynarodowy lot do Nowego Jorku)",
        options: ["late", "lately", "later", "latest"],
        correct: "late",
        explanation: "'Late' to zarówno przymiotnik jak przysłówek! 'Arrived late' = przyjechał spóźniony. Ale 'lately' znaczy 'ostatnio/niedawno' - całkiem co innego! Nie myl: late (późno/spóźniony), lately (ostatnio), later (później w przyszłości). 'Late' jako przysłówek jest częsty w kontekście punktualności."
      }
    ]
  },

  comparatives_superlatives: {
    name: "Stopniowanie - porównania",
    description: "Bigger, better, the best - jak porównywać",
    icon: Umbrella,
    color: "from-teal-500 to-cyan-600",
    level: "beginner",
    questions: [
      {
        id: "comp_1",
        question: "My sister is _____ than me - she's twenty-five and I'm only twenty-two years old.",
        translation: "(Moja siostra jest starsza ode mnie - ma dwadzieścia pięć lat a ja mam tylko dwadzieścia dwa)",
        options: ["older", "more old", "elder", "oldest"],
        correct: "older",
        explanation: "Krótkie przymiotniki (1 sylaba) dodają '-er' dla stopnia wyższego! 'Old' → 'older'. Nie używaj 'more' z krótkimi przymiotnikami. 'Older than me' porównuje dwa weki. 'Elder' to wyjątek używany tylko w kontekstach rodzinnych (elder brother/sister) ale 'older' działa wszędzie."
      },
      {
        id: "comp_2",
        question: "This book is _____ interesting than the last one I read about history and ancient civilizations.",
        translation: "(Ta książka jest bardziej interesująca niż ostatnia którą czytałem o historii i starożytnych cywilizacjach)",
        options: ["more", "much", "most", "very"],
        correct: "more",
        explanation: "Długie przymiotniki (2+ sylaby) używają 'more' dla stopnia wyższego! 'Interesting' ma 4 sylaby, więc 'more interesting' nie 'interestinger'. Struktura: more + przymiotnik + than. To zasada dla wszystkich długich przymiotników - beautiful → more beautiful, difficult → more difficult."
      },
      {
        id: "comp_3",
        question: "Mount Everest is the _____ mountain in the entire world at over 8,800 meters high.",
        translation: "(Mount Everest jest najwyższą górą na całym świecie na ponad 8,800 metrów wysokości)",
        options: ["highest", "higher", "most high", "high"],
        correct: "highest",
        explanation: "Stopień najwyższy z krótkimi przymiotnikami: 'the' + przymiotnik + '-est'! 'High' → 'the highest'. Zawsze używaj 'the' przed stopniem najwyższym. To wskazuje absolutny szczyt - nic nie jest wyższe. Porównujesz jedną rzecz ze WSZYSTKIMI innymi w kategorii."
      },
      {
        id: "comp_4",
        question: "Today is _____ than yesterday - it's only fifteen degrees compared to twenty-five!",
        translation: "(Dzisiaj jest chłodniej niż wczoraj - jest tylko piętnaście stopni w porównaniu do dwudziestu pięciu!)",
        options: ["colder", "more cold", "coldest", "cold"],
        correct: "colder",
        explanation: "Krótkie przymiotniki dodają '-er' bez 'more'! 'Cold' → 'colder'. Nigdy 'more cold'. Struktura: przymiotnik + -er + than dla porównania dwóch rzeczy. Używamy 'than' żeby wprowadzić drugą rzecz w porównaniu. To podstawowy wzorzec dla wszystkich krótkich przymiotników."
      },
      {
        id: "comp_5",
        question: "This is the _____ expensive restaurant in the city - a meal costs over two hundred dollars!",
        translation: "(To najdroższa restauracja w mieście - posiłek kosztuje ponad dwieście dolarów!)",
        options: ["most", "more", "very", "much"],
        correct: "most",
        explanation: "Długie przymiotniki używają 'the most' dla stopnia najwyższego! 'Expensive' ma 3 sylaby, więc 'the most expensive' nie 'expensivest'. Struktura: the + most + przymiotnik. To dla porównania jednej rzeczy ze wszystkimi innymi jako absolutny ekstrem w kategorii."
      },
      {
        id: "comp_6",
        question: "Learning English is _____ than I thought it would be when I first started studying.",
        translation: "(Uczenie się angielskiego jest łatwiejsze niż myślałem że będzie, kiedy zaczynałem studiować)",
        options: ["easier", "more easy", "easiest", "easy"],
        correct: "easier",
        explanation: "Przymiotniki kończące się na '-y' zmieniają 'y' na 'i' + '-er'! 'Easy' → 'easier', nie 'more easy'. Ta zasada ortograficzna jest ważna: happy → happier, busy → busier, pretty → prettier. Dwusylabowe słowa na '-y' stopniujemy jak krótkie (-er/-est), nie używamy 'more/most'."
      },
      {
        id: "comp_7",
        question: "She is _____ better at math than her brother who struggles with numbers and calculations.",
        translation: "(Jest dużo lepsza w matematyce niż jej brat, który ma problemy z liczbami i obliczeniami)",
        options: ["much", "very", "more", "most"],
        correct: "much",
        explanation: "'Much' intensyfikuje stopnie wyższe! 'Much better' = dużo lepszy. Możesz też użyć 'far' lub 'a lot' dla wzmocnienia. 'Very' NIE działa ze stopniami wyższymi - tylko z przymiotnikami bazowymi. 'Very good' (bazowy) ale 'much better' (wyższy), nie 'very better'."
      },
      {
        id: "comp_8",
        question: "This is the _____ day of my life - everything went perfectly and I'm so happy!",
        translation: "(To najlepszy dzień mojego życia - wszystko poszło perfekcyjnie i jestem taki szczęśliwy!)",
        options: ["best", "better", "good", "most good"],
        correct: "best",
        explanation: "'Good' ma nieregularny stopień najwyższy! Good → better (wyższy) → best (najwyższy). Nie 'goodest' ani 'most good'. To musisz zapamiętać - nieregularne formy nie podążają normalnych zasad. Podobnie: bad → worse → worst. Te są bardzo częste więc warto je dobrze znać."
      },
      {
        id: "comp_9",
        question: "My new apartment is _____ than my old one - it has three bedrooms instead of just one.",
        translation: "(Moje nowe mieszkanie jest większe od mojego starego - ma trzy sypialnie zamiast tylko jednej)",
        options: ["bigger", "more big", "biggest", "big"],
        correct: "bigger",
        explanation: "Jednozgłoskowe przymiotniki kończące się spółgłoską-samogłoską-spółgłoską podwajają ostatnią literę! 'Big' → 'bigger' (nie 'biger'). Też: hot → hotter, sad → sadder, thin → thinner. To zasada ortograficzna dla zachowania wymowy - podwojenie zapobiega zmianie dźwięku samogłoski."
      },
      {
        id: "comp_10",
        question: "This exercise is the _____ difficult one in the entire textbook for advanced students.",
        translation: "(To ćwiczenie jest najbardziej trudne w całym podręczniku dla zaawansowanych studentów)",
        options: ["most", "more", "very", "much"],
        correct: "most",
        explanation: "'The most difficult' dla stopnia najwyższego z długimi przymiotnikami! 'Difficult' ma 3 sylaby więc nie możesz dodać '-est'. Zawsze: the + most + długi przymiotnik. 'The' jest obowiązkowe ze stopniem najwyższym - wskazuje na absolutny ekstrem."
      },
      {
        id: "comp_11",
        question: "He's _____ than his twin brother by just two minutes, but he acts much more mature.",
        translation: "(Jest starszy od swojego brata bliźniaka o tylko dwie minuty, ale zachowuje się dużo bardziej dojrzale)",
        options: ["older", "elder", "oldest", "more old"],
        correct: "older",
        explanation: "'Older' dla porównania wieku z 'than'! 'Elder' używane bez 'than' tylko w kontekście rodzinnym (my elder brother). Z 'than' zawsze używaj 'older'. To subtelna różnica - 'elder' jest bardziej formalny i ograniczony, 'older' jest uniwersalny dla wszystkich porównań wieku."
      },
      {
        id: "comp_12",
        question: "Summer is _____ than winter in Poland - temperatures can reach thirty degrees or more!",
        translation: "(Lato jest goręcej niż zima w Polsce - temperatury mogą osiągać trzydzieści stopni lub więcej!)",
        options: ["hotter", "more hot", "hottest", "hot"],
        correct: "hotter",
        explanation: "Podwajanie końcowej spółgłoski znowu! 'Hot' → 'hotter' (nie 'hoter'). To chroni krótki dźwięk samogłoski 'o'. Bez podwojenia wymawiałbyś to jak 'ho-ter' (długa samogłoska). Ortografia w angielskim często służy wymowie - podwojenie sygnalizuje krótką samogłoskę przed nią."
      },
      {
        id: "comp_13",
        question: "This is the _____ coffee shop in town - everyone loves their specialty drinks and pastries.",
        translation: "(To najpopularniejsza kawiarnia w mieście - wszyscy kochają ich specjalne napoje i ciastka)",
        options: ["most popular", "popularest", "more popular", "popular"],
        correct: "most popular",
        explanation: "'Popular' ma 3 sylaby więc używa 'the most' dla stopnia najwyższego! Nie można powiedzieć 'popularest'. Długie przymiotniki nigdy nie dodają '-est', zawsze używają 'the most'. To jasna zasada: 1 sylaba = -est, 2+ sylaby = the most (z wyjątkami na '-y')."
      },
      {
        id: "comp_14",
        question: "My English is getting _____ and _____ every day with practice and regular study.",
        translation: "(Mój angielski robi się lepszy i lepszy każdego dnia z praktyką i regularną nauką)",
        options: ["better / better", "more good / more good", "best / best", "good / good"],
        correct: "better / better",
        explanation: "Powtórzenie stopnia wyższego pokazuje stopniową zmianę! 'Better and better' = ciągle się poprawia. Ta konstrukcja używa nieregularnej formy 'better' (od 'good') dwa razy. Wzorzec: comparative + and + comparative dla pokazania progresywnej zmiany. Też: bigger and bigger, more and more difficult."
      },
      {
        id: "comp_15",
        question: "She's the _____ student in the whole class and always gets perfect scores on tests.",
        translation: "(Jest najlepszą studentką w całej klasie i zawsze dostaje perfekcyjne wyniki na testach)",
        options: ["best", "better", "good", "most good"],
        correct: "best",
        explanation: "'Best' to stopień najwyższy od 'good'! Good → better → best (wszystkie nieregularne). 'The best student' porównuje ją ze WSZYSTKIMI w klasie jako absolutna najlepsza. Zawsze 'the' przed stopniem najwyższym. Te nieregularne formy są używane codziennie - worth memorizing perfectly!"
      }
    ]
  },

  conjunctions_linking: {
    name: "Spójniki łączące",
    description: "And, but, or, so, because - łączenie zdań",
    icon: Map,
    color: "from-violet-500 to-purple-600",
    level: "beginner",
    questions: [
      {
        id: "conj_1",
        question: "I wanted to go to the party _____ I was too tired after working all day long.",
        translation: "(Chciałem iść na imprezę ale byłem zbyt zmęczony po pracy przez cały dzień)",
        options: ["but", "and", "so", "or"],
        correct: "but",
        explanation: "'But' pokazuje kontrast lub przeciwieństwo! Chciałeś iść (pozytyw) ALE byłeś zmęczony (przeszkoda). 'But' łączy dwie przeciwstawne idee - pierwsza jest zaprzeczona lub zmieniona przez drugą. To jeden z najczęstszych spójników - używany codziennie dla pokazywania konfliktów między pragnieniami a rzeczywistością."
      },
      {
        id: "conj_2",
        question: "She likes tea _____ coffee, she drinks both every day depending on her mood.",
        translation: "(Lubi herbatę i kawę, pije obie codziennie w zależności od nastroju)",
        options: ["and", "but", "or", "so"],
        correct: "and",
        explanation: "'And' łączy podobne elementy lub dodaje informację! Lubi ZARÓWNO herbatę JAK I kawę. 'And' jest najprostszym spójnikiem - po prostu dodaje rzeczy razem. Używaj do list (apples, oranges, and bananas), dodawania cech (smart and funny), łączenia akcji (I woke up and had breakfast)."
      },
      {
        id: "conj_3",
        question: "Would you like tea _____ coffee with your breakfast this morning?",
        translation: "(Czy chciałbyś herbatę czy kawę z twoim śniadaniem dziś rano?)",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "'Or' oferuje wybór między opcjami! Herbata ALBO kawa - jedno lub drugie, nie oba. 'Or' używany w pytaniach i wyborach. Też dla alternatyw (hurry or you'll be late) i wyjaśnień (she's a teacher, or was until last year). Bardzo praktyczny dla oferowania opcji."
      },
      {
        id: "conj_4",
        question: "It was raining heavily _____ we decided to stay home and watch movies instead.",
        translation: "(Mocno padało więc zdecydowaliśmy zostać w domu i oglądać filmy zamiast tego)",
        options: ["so", "but", "and", "or"],
        correct: "so",
        explanation: "'So' pokazuje rezultat lub konsekwencję! Padało (przyczyna) SO zostaliśmy w domu (efekt). To jak 'więc' w polskim - łączy przyczynę z jej naturalnym skutkiem. Bardzo użyteczny dla wyjaśniania decyzji i reakcji na sytuacje. Pokazuje logiczne połączenie między dwoma zdaniami."
      },
      {
        id: "conj_5",
        question: "I couldn't sleep last night _____ my neighbors were having a loud party until 3 AM.",
        translation: "(Nie mogłem spać wczoraj w nocy, bo moi sąsiedzi mieli głośną imprezę do 3 nad ranem)",
        options: ["because", "so", "but", "and"],
        correct: "because",
        explanation: "'Because' wyjaśnia POWÓD czegoś! Nie spałeś (problem) BECAUSE sąsiedzi (powód). 'Because' wprowadza przyczynę. Różne od 'so' które pokazuje efekt. Because = dlaczego (przyczyna przed), so = więc (efekt po). Ta para jest fundamentalna dla logicznego wyrażania związków przyczynowo-skutkowych."
      },
      {
        id: "conj_6",
        question: "We can go to the beach _____ to the mountains this weekend, you can choose where.",
        translation: "(Możemy iść na plażę lub w góry w ten weekend, możesz wybrać gdzie)",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "'Or' między dwiema równymi możliwościami! Plaża ALBO góry - oferujesz wybór. Nie 'and' bo nie idziecie w oba miejsca. 'Or' tworzy decyzję między alternatywami. Bardzo częste dla planowania gdy różne opcje są możliwe i ktoś musi wybrać."
      },
      {
        id: "conj_7",
        question: "He's very talented _____ he doesn't practice enough to reach his full potential really.",
        translation: "(Jest bardzo utalentowany ale nie ćwiczy wystarczająco żeby osiągnąć swój pełny potencjał naprawdę)",
        options: ["but", "and", "so", "or"],
        correct: "but",
        explanation: "'But' dla niespełnionego potencjału! Ma talent (pozytyw) BUT nie ćwiczy (negatyw, marnotrawstwo). 'But' pokazuje frustrujący kontrast - ma zdolności ale ich nie wykorzystuje. To emocjonalnie silniejsze niż proste 'and' - podkreśla zmarnowaną szansę lub problematyczny kontrast."
      },
      {
        id: "conj_8",
        question: "I need to buy milk, bread, eggs, _____ some fresh vegetables for dinner tonight.",
        translation: "(Muszę kupić mleko, chleb, jajka i trochę świeżych warzyw na kolację dziś wieczorem)",
        options: ["and", "or", "but", "so"],
        correct: "and",
        explanation: "'And' na końcu listy łączy ostatni element! W listach używamy przecinków między elementami i 'and' przed ostatnim. Struktura: item, item, item, and item. W brytyjskim angielskim przecinek przed 'and' jest opcjonalny, w amerykańskim często używany (Oxford comma). 'And' zamyka listę definitywnie."
      },
      {
        id: "conj_9",
        question: "She studied very hard _____ she still failed the exam unfortunately.",
        translation: "(Uczyła się bardzo ciężko ale wciąż nie zdała egzaminu niestety)",
        options: ["but", "so", "and", "or"],
        correct: "but",
        explanation: "'But' dla zaskakującego lub rozczarowującego rezultatu! Uczyła się (wysiłek) BUT oblała (niespodziewany negatywny wynik). 'But' pokazuje że oczekiwanie nie zostało spełnione - wysiłek nie przyniósł spodziewanego sukcesu. To wyraża rozczarowanie że mimo starań rezultat był zły."
      },
      {
        id: "conj_10",
        question: "I love pizza _____ I don't eat it very often because it's not very healthy food.",
        translation: "(Kocham pizzę ale nie jem jej bardzo często, bo to niezbyt zdrowe jedzenie)",
        options: ["but", "and", "so", "or"],
        correct: "but",
        explanation: "'But' dla ograniczenia lub modyfikacji poprzedniego stwierdzenia! Kochasz (silne uczucie) BUT nie jesz często (ograniczenie). Pokazuje że mimo pozytywnego uczucia istnieje przeszkoda. 'But' często wprowadza praktyczne ograniczenia do idealnych pragnień - rzeczywistość vs. życzenia."
      },
      {
        id: "conj_11",
        question: "You should hurry up _____ you'll miss the bus to school this morning!",
        translation: "(Powinieneś się pospieszyć albo przegapisz autobus do szkoły dziś rano!)",
        options: ["or", "and", "but", "so"],
        correct: "or",
        explanation: "'Or' dla ostrzeżeń o negatywnych konsekwencjach! Pośpiesz się (akcja) OR przegapisz (negatywny rezultat). 'Or' pokazuje alternatywę między działaniem a problemem. To bardzo częste dla pilnych sytuacji - zrób to OR wydarzy się coś złego. Tworzy motywację przez pokazanie kary za bezczynność."
      },
      {
        id: "conj_12",
        question: "The movie was long _____ boring, I almost fell asleep in the cinema twice.",
        translation: "(Film był długi i nudny, prawie zasnąłem w kinie dwa razy)",
        options: ["and", "but", "or", "so"],
        correct: "and",
        explanation: "'And' łączy dwie negatywne cechy! Długi (zły) AND nudny (też zły) = podwójnie źle. 'And' działa dla pozytywów (nice and warm), negatywów (cold and wet), lub mieszanych. To neutralny łącznik - po prostu dodaje informację bez wskazywania kontrastów jak 'but'."
      },
      {
        id: "conj_13",
        question: "I'm learning English _____ I want to travel around the world and communicate with people.",
        translation: "(Uczę się angielskiego, bo chcę podróżować po świecie i komunikować się z ludźmi)",
        options: ["because", "so", "but", "and"],
        correct: "because",
        explanation: "'Because' odpowiada na 'dlaczego?' (pytanie o powód)! Uczysz się (akcja) BECAUSE chcesz podróżować (motywacja). 'Because' zawsze wprowadza przyczynę lub wyjaśnienie. Możesz zacząć zdanie od 'because' lub użyć go w środku - oba działają. To podstawowy spójnik dla wyjaśniania motywacji."
      },
      {
        id: "conj_14",
        question: "She's intelligent, beautiful, _____ very kind to everyone she meets every day.",
        translation: "(Jest inteligentna, piękna i bardzo miła dla wszystkich których spotyka każdego dnia)",
        options: ["and", "but", "or", "so"],
        correct: "and",
        explanation: "'And' łączy trzy pozytywne cechy! To lista przymiotników opisujących ją. W długich listach 'and' przychodzi przed ostatnim elementem. Wszystkie cechy są pozytywne więc 'and' po prostu je dodaje razem budując kompletny, pochlebny portret osoby."
      },
      {
        id: "conj_15",
        question: "The weather was terrible _____ we still went hiking in the mountains as planned.",
        translation: "(Pogoda była okropna ale wciąż poszliśmy na wędrówkę w góry jak zaplanowano)",
        options: ["but", "so", "and", "because"],
        correct: "but",
        explanation: "'But' dla determinacji mimo przeszkód! Zła pogoda (problem) BUT poszliście (determinacja). Pokazuje że negatywna sytuacja nie powstrzymała was. 'But' podkreśla wytrwałość i zobowiązanie do planu pomimo trudności. To wyraża siłę woli - nie pozwoliliście przeszkodom was zatrzymać."
      }
    ]
  },

  expressing_future: {
    name: "Wyrażanie przyszłości",
    description: "Will, going to, present continuous dla przyszłości",
    icon: Flame,
    color: "from-orange-500 to-yellow-600",
    level: "intermediate",
    questions: [
      {
        id: "fut_1",
        question: "I _____ help you with your homework after I finish eating my dinner tonight.",
        translation: "(Pomogę ci z twoją pracą domową po tym jak skończę jeść moją kolację dziś wieczorem)",
        options: ["will", "am going to", "am helping", "help"],
        correct: "will",
        explanation: "'Will' dla spontanicznych decyzji i obietnic! Decydujesz w momencie mówienia że pomożesz. 'Will' jest neutralne i natychmiastowe - to szybka decyzja lub promise. Bardzo częste dla ofert pomocy, obietnic, przewidywań. 'I will help' = decyduję teraz że to zrobię później."
      },
      {
        id: "fut_2",
        question: "Look at those dark clouds! It _____ rain very soon, we should take our umbrellas.",
        translation: "(Spójrz na te ciemne chmury! Będzie padać bardzo szybko, powinniśmy wziąć nasze parasole)",
        options: ["is going to", "will", "rains", "is raining"],
        correct: "is going to",
        explanation: "'Going to' dla przewidywań bazujących na obecnych dowodach! Widzisz chmury (dowód) więc przewidujesz deszcz. 'Going to' używane gdy masz podstawy do prognozy - coś widzisz lub wiesz co wskazuje na przyszły event. To różne od 'will' (spontaniczne) - 'going to' jest bazowane na obserwacji."
      },
      {
        id: "fut_3",
        question: "We _____ to Italy next summer for a two-week vacation touring the countryside.",
        translation: "(Jedziemy do Włoch przyszłego lata na dwutygodniowe wakacje po okolicy)",
        options: ["are going", "will go", "go", "went"],
        correct: "are going",
        explanation: "Present continuous dla ustalonych przyszłych planów! 'Are going' pokazuje że wakacje są już zarezerwowane i zaplanowane. Używaj present continuous dla przyszłości gdy coś jest pewne i zorganizowane. To pokazuje wyższy poziom pewności niż 'will' - plan jest już w ruchu, bilety kupione, hotel zarezerwowany."
      },
      {
        id: "fut_4",
        question: "I think it _____ be sunny tomorrow according to the weather forecast on TV.",
        translation: "(Myślę że będzie słonecznie jutro według prognozy pogody w TV)",
        options: ["will", "is going to", "is", "be"],
        correct: "will",
        explanation: "'Will' po czasownikach opinii (think, believe, hope, expect)! 'I think it will' wyraża twoją osobistą prognozę lub opinię. Nie używaj 'going to' po 'think/believe'. Wzorzec: I think/believe/hope + will. To dla subiektywnych przewidywań, nie dowodów bazujących jak 'going to'."
      },
      {
        id: "fut_5",
        question: "The train _____ at 6:30 PM sharp according to the official timetable schedule.",
        translation: "(Pociąg odjeżdża o 18:30 punktualnie według oficjalnego rozkładu jazdy)",
        options: ["leaves", "will leave", "is leaving", "is going to leave"],
        correct: "leaves",
        explanation: "Present simple dla rozkładów jazdy i harmonogramów! Pociągi, autobusy, loty używają present simple nawet dla przyszłości. 'The train leaves' brzmi jak teraźniejszość ale dotyczy przyszłości - to ustalony harmonogram. Używaj tego dla wszystkich regularnych, harmonogramowanych wydarzeń - zajęcia, filmy, spektakle."
      },
      {
        id: "fut_6",
        question: "I _____ buy a new car next month because my old one keeps breaking down constantly.",
        translation: "(Kupię nowy samochód w przyszłym miesiącu, bo mój stary ciągle się psuje)",
        options: ["am going to", "will", "am buying", "buy"],
        correct: "am going to",
        explanation: "'Going to' dla planów i intencji już podjętych! Już zdecydowałeś kupić samochód - to zaplanowana akcja. Różne od spontanicznego 'will'. 'Going to' pokazuje że decyzja była podjęta PRZED momentem mówienia. Plan jest już w twojej głowie, może nawet zacząłeś szukać samochodów."
      },
      {
        id: "fut_7",
        question: "Don't worry, I _____ tell anyone your secret - you can trust me completely with this.",
        translation: "(Nie martw się, nie powiem nikomu twojego sekretu - możesz mi całkowicie zaufać z tym)",
        options: ["won't", "am not going to", "don't", "am not"],
        correct: "won't",
        explanation: "'Won't' (will not) dla obietnic, szczególnie negatywnych! 'I won't tell' to spontaniczna obietnica w momencie uspokajania kogoś. 'Will/won't' są używane dla zapewnienia, gwarancji, promise. To natychmiastowa deklaracja lojalności. Brzmi bardziej emocjonalnie zaangażowane niż 'I'm not going to tell'."
      },
      {
        id: "fut_8",
        question: "We _____ dinner with friends tonight at the new French restaurant at 8 PM.",
        translation: "(Mamy kolację z przyjaciółmi dziś wieczorem w nowej francuskiej restauracji o 20)",
        options: ["are having", "will have", "have", "had"],
        correct: "are having",
        explanation: "Present continuous dla społecznych ustaleń! 'Are having dinner' pokazuje że spotkanie jest już zaplanowane z konkretnymi ludźmi w konkretnym czasie. Używaj present continuous dla przyszłych wydarzeń społecznych: meeting friends, seeing a doctor, having dinner. Wskazuje na wiążące zobowiązanie z innymi ludźmi."
      },
      {
        id: "fut_9",
        question: "Watch out! That box _____ fall on your head if you're not careful right now!",
        translation: "(Uważaj! To pudełko spadnie na twoją głowę, jeśli nie będziesz ostrożny właśnie teraz!)",
        options: ["is going to", "will", "falls", "is falling"],
        correct: "is going to",
        explanation: "'Going to' dla natychmiastowych przewidywań z widocznymi dowodami! Widzisz pudełko niestabilne (dowód) więc przewidujesz spadek. Używaj 'going to' dla pilnych ostrzeżeń gdy widzisz niebezpieczeństwo rozwijające się. To bardziej dramatyczne niż 'will' bo bazuje na rzeczywistej, widocznej groźbie."
      },
      {
        id: "fut_10",
        question: "The concert _____ at 9 PM sharp, so we need to arrive by 8:30 to get good seats.",
        translation: "(Koncert zaczyna się o 21 punktualnie, więc musimy przyjechać do 20:30 żeby dostać dobre miejsca)",
        options: ["starts", "will start", "is starting", "is going to start"],
        correct: "starts",
        explanation: "Present simple dla zaplanowanych publicznych wydarzeń! Koncerty, spektakle, filmy używają present simple dla przyszłych rozpoczęć. 'The concert starts' to o ustalonym rozkładzie, nie elastycznym planie. To pokazuje że czas jest fixed i publicznie ogłoszony - nie może się zmienić."
      },
      {
        id: "fut_11",
        question: "By this time next year, I _____ graduated from university with my engineering degree.",
        translation: "(O tym czasie w przyszłym roku będę już ukończył uniwersytet z moim dyplomem inżynierskim)",
        options: ["will have", "am going to", "will", "have"],
        correct: "will have",
        explanation: "Future perfect 'will have + past participle' dla akcji ukończonych przed przyszłym momentem! 'Will have graduated' pokazuje że ukończenie wydarzy się PRZED 'tym czasem przyszłego roku'. To o akcji skończonej przed przyszłym punktem referencyjnym. Używane dla pokazywania osiągnięć które będą kompletne do przyszłej daty."
      },
      {
        id: "fut_12",
        question: "She _____ have a baby in two months - she's so excited about becoming a mother!",
        translation: "(Będzie miała dziecko za dwa miesiące - jest taka podekscytowana zostaniem matką!)",
        options: ["is going to", "will", "is having", "has"],
        correct: "is going to",
        explanation: "'Going to' dla przyszłych wydarzeń które są już w toku! Ciąża już istnieje, więc narodziny są pewne i blisko. 'Going to' pokazuje że proces już się zaczął - to zaplanowane biologicznie. Bardziej pewne niż 'will' bo to nie przypadkowa możliwość - to rzeczywistość w toku."
      },
      {
        id: "fut_13",
        question: "I _____ probably stay home this weekend and just relax after a busy week at work.",
        translation: "(Prawdopodobnie zostanę w domu w ten weekend i po prostu odpoczę po pracowitym tygodniu w pracy)",
        options: ["will", "am going to", "am staying", "stay"],
        correct: "will",
        explanation: "'Will' z 'probably/maybe/perhaps' dla niepewnych planów! Nie jesteś pewien co zrobisz - to możliwość, nie ustalony plan. 'Will probably' wyraża intencję bez zobowiązania. 'Going to' byłoby zbyt definitywne dla niepewnej sytuacji. Słowa jak 'probably' sygnalizują użycie 'will'."
      },
      {
        id: "fut_14",
        question: "If you heat ice, it _____ melt into water at zero degrees Celsius or above.",
        translation: "(Jeśli podgrzejesz lód, topi się w wodę przy zero stopniach Celsjusza lub wyżej)",
        options: ["will", "is going to", "melts", "is melting"],
        correct: "will",
        explanation: "'Will' w warunkach pierwszego typu (first conditional) dla naturalnych konsekwencji! 'If you heat, it will melt' pokazuje automatyczny rezultat. To nie o konkretnym planie ale o uniwersalnej prawdzie w formie warunku. 'Will' w rezultacie pokazuje pewność efektu - to się ZAWSZE stanie w tych warunkach."
      },
      {
        id: "fut_15",
        question: "This time tomorrow, I _____ flying over the Atlantic Ocean on my way to New York!",
        translation: "(O tej porze jutro będę lecieć nad Oceanem Atlantyckim w drodze do Nowego Jorku!)",
        options: ["will be", "am going to be", "am", "will"],
        correct: "will be",
        explanation: "Future continuous 'will be + -ing' dla akcji w toku w konkretnym przyszłym momencie! 'Will be flying' pokazuje co będziesz ROBIŁ o określonym czasie jutro. To jak snapshot przyszłości - obrazujesz siebie w środku akcji w tym momencie. Używane dla wyobrażania sobie przyszłych scen."
      }
    ]
  }
};

export default part8Categories;