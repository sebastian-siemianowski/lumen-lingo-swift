/**
 * POLISH → ENGLISH GRAMMAR - PART 10
 * 4 categories, 15 questions each - Professional fluency
 */

import { Zap, Target, Compass, Anchor } from "lucide-react";

export const part10Categories = {
  adjective_order: {
    name: "Kolejność przymiotników",
    description: "Jak ustawiać wiele przymiotników",
    icon: Target,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "adj_ord_1",
        question: "She bought a _____ dress for the wedding ceremony next month.",
        translation: "(Kupiła piękną długą czerwoną sukienkę na ceremonię ślubną w przyszłym miesiącu)",
        options: ["beautiful long red", "red long beautiful", "long beautiful red", "red beautiful long"],
        correct: "beautiful long red",
        explanation: "Kolejność przymiotników: opinia → rozmiar → kolor! 'Beautiful' (opinia) → 'long' (rozmiar) → 'red' (kolor). To naturalna kolejność w angielskim. Zasada OSASCOMP: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose. Brzmi dziwnie ale native speakerzy robią to automatycznie - uczysz się przez słuchanie i praktykę."
      },
      {
        id: "adj_ord_2",
        question: "He lives in a _____ house in the countryside surrounded by trees and fields.",
        translation: "(Mieszka w dużym starym drewnianym domu na wsi otoczonym drzewami i polami)",
        options: ["big old wooden", "wooden old big", "old big wooden", "wooden big old"],
        correct: "big old wooden",
        explanation: "Rozmiar → wiek → materiał! 'Big' (size) → 'old' (age) → 'wooden' (material). Ta kolejność jest instynktowna dla native speakerów. Materiał zawsze blisko rzeczownika bo jest najbardziej definitywny - opisuje z CZEGO coś jest zrobione. To ustalona kolejność którą trzeba praktykować."
      },
      {
        id: "adj_ord_3",
        question: "I want to buy a _____ car for my daily commute to work every morning.",
        translation: "(Chcę kupić mały nowy japoński samochód do mojego codziennego dojeżdżania do pracy co rano)",
        options: ["small new Japanese", "Japanese new small", "new small Japanese", "Japanese small new"],
        correct: "small new Japanese",
        explanation: "Rozmiar → wiek → pochodzenie! 'Small' (size) → 'new' (age) → 'Japanese' (origin). Pochodzenie (skąd coś pochodzi) jest blisko rzeczownika. 'Japanese car' działa jak jednostka - narodowość często łączy się ściśle z rzeczownikiem. Ta kolejność brzmi naturalnie dla native speakerów."
      },
      {
        id: "adj_ord_4",
        question: "She has _____ eyes that sparkle when she smiles warmly at people.",
        translation: "(Ma piękne duże niebieskie oczy które błyszczą, gdy uśmiecha się ciepło do ludzi)",
        options: ["beautiful big blue", "blue big beautiful", "big beautiful blue", "blue beautiful big"],
        correct: "beautiful big blue",
        explanation: "Opinia → rozmiar → kolor dla oczu! 'Beautiful' (opinion) → 'big' (size) → 'blue' (color). Opinia zawsze pierwsza bo to najbardziej subiektywne. Rozmiar przychodzi przed kolorem bo jest bardziej obiektywny niż kolor. Kolor jest blisko rzeczownika jako bardzo definitywna cecha."
      },
      {
        id: "adj_ord_5",
        question: "They served dinner on _____ plates that looked very expensive and elegant.",
        translation: "(Podali kolację na pięknych okrągłych białych talerach które wyglądały bardzo drogo i elegancko)",
        options: ["beautiful round white", "white round beautiful", "round beautiful white", "white beautiful round"],
        correct: "beautiful round white",
        explanation: "Opinia → kształt → kolor! 'Beautiful' (opinion) → 'round' (shape) → 'white' (color). Kształt przychodzi przed kolorem w hierarchii. To pokazuje jak specyficzność rośnie - od ogólnej opinii do konkretnych fizycznych cech. Im bliżej rzeczownika, tym bardziej obiektywny i fizyczny opis."
      },
      {
        id: "adj_ord_6",
        question: "I inherited an _____ clock from my grandmother that still works perfectly.",
        translation: "(Odziedziczyłem piękny stary szwajcarski zegar po mojej babci który wciąż działa perfekcyjnie)",
        options: ["beautiful old Swiss", "Swiss old beautiful", "old beautiful Swiss", "Swiss beautiful old"],
        correct: "beautiful old Swiss",
        explanation: "Opinia → wiek → pochodzenie! 'Beautiful' (opinion) → 'old' (age) → 'Swiss' (origin). Pochodzenie blisko rzeczownika bo to niemal część tożsamości przedmiotu - 'Swiss clock' jest znanym typem. Wiek przychodzi przed pochodzeniem w standardowej kolejności OSASCOMP."
      },
      {
        id: "adj_ord_7",
        question: "The children played with a _____ ball in the park all afternoon happily.",
        translation: "(Dzieci bawiły się małą okrągłą czerwoną piłką w parku całe popołudnie szczęśliwie)",
        options: ["small round red", "red round small", "round small red", "red small round"],
        correct: "small round red",
        explanation: "Rozmiar → kształt → kolor dla zabawek! 'Small' (size) → 'round' (shape) → 'red' (color). To klasyczny przykład kolejności przymiotników. Kształt jest bardziej fundamentalny niż kolor - 'round' definiuje typ piłki, 'red' tylko jej wygląd zewnętrzny. Rozmiar jest najogólniejszy więc pierwszy."
      },
      {
        id: "adj_ord_8",
        question: "She wore a _____ scarf around her neck to keep warm in winter.",
        translation: "(Nosiła długi wełniany szkocki szalik wokół szyi żeby trzymać ciepło zimą)",
        options: ["long woolen Scottish", "Scottish woolen long", "woolen long Scottish", "Scottish long woolen"],
        correct: "long woolen Scottish",
        explanation: "Rozmiar → materiał → pochodzenie! 'Long' (size) → 'woolen' (material) → 'Scottish' (origin). Materiał przychodzi po rozmiarze ale przed pochodzeniem. 'Woolen' opisuje z czego zrobiony, 'Scottish' skąd pochodzi wzór/styl. Oba są blisko rzeczownika jako definiujące cechy."
      },
      {
        id: "adj_ord_9",
        question: "They live in a _____ apartment building near the city center with great views.",
        translation: "(Mieszkają w nowoczesnym wysokim szklanym budynku apartamentowym blisko centrum miasta ze wspaniałymi widokami)",
        options: ["modern tall glass", "glass tall modern", "tall modern glass", "glass modern tall"],
        correct: "modern tall glass",
        explanation: "Wiek/styl → rozmiar → materiał! 'Modern' (age/style) → 'tall' (size) → 'glass' (material). 'Modern' opisuje styl architektoniczny (rodzaj wieku). 'Glass' jako materiał jest najbliżej rzeczownika. Budynki mają specjalną hierarchię - styl architektoniczny traktowany jak wiek w kolejności."
      },
      {
        id: "adj_ord_10",
        question: "I found a _____ coin in my grandfather's old collection of antiques and treasures.",
        translation: "(Znalazłem małą starą złotą monetę w starej kolekcji antków i skarbów mojego dziadka)",
        options: ["small old gold", "gold old small", "old small gold", "gold small old"],
        correct: "small old gold",
        explanation: "Rozmiar → wiek → materiał/kolor! 'Small' (size) → 'old' (age) → 'gold' (material). 'Gold' tutaj jest zarówno kolorem jak materiałem - najbliżej rzeczownika. Ta kolejność brzmi naturalnie - od ogólnego rozmiaru przez historię do konkretnego składu fizycznego."
      },
      {
        id: "adj_ord_11",
        question: "She has _____ hair that flows beautifully when she walks or runs.",
        translation: "(Ma piękne długie ciemne włosy które pięknie płyną, gdy chodzi lub biega)",
        options: ["beautiful long dark", "dark long beautiful", "long beautiful dark", "dark beautiful long"],
        correct: "beautiful long dark",
        explanation: "Opinia → długość → kolor dla włosów! 'Beautiful' (opinion) → 'long' (length/size) → 'dark' (color). Dla włosów długość traktowana jak rozmiar w kolejności. Kolor zawsze blisko rzeczownika jako najbardziej konkretna wizualna cecha. To typowe dla opisów wyglądu ludzi."
      },
      {
        id: "adj_ord_12",
        question: "We stayed in a _____ hotel during our vacation with amazing ocean views.",
        translation: "(Zatrzymaliśmy się w pięknym dużym włoskim hotelu podczas naszych wakacji ze wspaniałymi widokami na ocean)",
        options: ["beautiful big Italian", "Italian big beautiful", "big beautiful Italian", "Italian beautiful big"],
        correct: "beautiful big Italian",
        explanation: "Opinia → rozmiar → pochodzenie! 'Beautiful' (opinion) → 'big' (size) → 'Italian' (origin). Dla hoteli pochodzenie często określa styl. 'Italian hotel' brzmi jak typ - włoski styl architektury i obsługi. Pochodzenie jest definiującą cechą więc blisko rzeczownika."
      },
      {
        id: "adj_ord_13",
        question: "He drives a _____ sports car that everyone notices on the street.",
        translation: "(Prowadzi błyszczący czerwony włoski samochód sportowy który wszyscy zauważają na ulicy)",
        options: ["shiny red Italian", "Italian red shiny", "red shiny Italian", "Italian shiny red"],
        correct: "shiny red Italian",
        explanation: "Opinia/kondycja → kolor → pochodzenie! 'Shiny' (condition/opinion) → 'red' (color) → 'Italian' (origin). 'Shiny' opisuje stan powierzchni - rodzaj opinii. 'Italian' określa producenta/pochodzenie. 'Sports car' działa jak złożony rzeczownik. Luksusowe samochody często opisywane w tej kolejności."
      },
      {
        id: "adj_ord_14",
        question: "She collects _____ stamps from around the world as her favorite hobby.",
        translation: "(Kolekcjonuje rzadkie stare zagraniczne znaczki z całego świata jako swoje ulubione hobby)",
        options: ["rare old foreign", "foreign old rare", "old rare foreign", "foreign rare old"],
        correct: "rare old foreign",
        explanation: "Opinia → wiek → pochodzenie dla kolekcjonerskich przedmiotów! 'Rare' (opinion/value) → 'old' (age) → 'foreign' (origin). Dla kolekcji rzadkość jest opinią wartości. Wiek dodaje wartość historyczną. Pochodzenie identyfikuje źródło. Ta kolejność buduje od wartościowania do faktów fizycznych."
      },
      {
        id: "adj_ord_15",
        question: "They have a _____ table in their dining room for family dinners together.",
        translation: "(Mają piękny duży okrągły drewniany stół w swojej jadalni na rodzinne kolacje razem)",
        options: ["beautiful big round wooden", "wooden round big beautiful", "big beautiful wooden round", "round beautiful big wooden"],
        correct: "beautiful big round wooden",
        explanation: "Cztery przymiotniki: opinia → rozmiar → kształt → materiał! 'Beautiful' (opinion) → 'big' (size) → 'round' (shape) → 'wooden' (material). Im więcej przymiotników, tym ważniejsza kolejność. Materiał zawsze ostatni jako najbardziej definitywny. To pokazuje pełną hierarchię od subiektywnego (beautiful) do obiektywnego (wooden)."
      }
    ]
  },

  intensifiers_modifiers: {
    name: "Wzmacniacze",
    description: "Very, too, enough, quite, rather - jak wzmacniać",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "intens_1",
        question: "This coffee is _____ hot to drink right now, I need to wait for it to cool down.",
        translation: "(Ta kawa jest za gorąca żeby pić teraz, muszę poczekać aż ostygnie)",
        options: ["too", "very", "enough", "so"],
        correct: "too",
        explanation: "'Too' znaczy nadmiernie (negatywne)! 'Too hot to drink' = tak gorąca że NIE MOŻESZ pić. 'Too' + przymiotnik + to infinitive pokazuje problem. Różne od 'very hot' (po prostu bardzo) - 'too' komunikuje że przekracza akceptowalny poziom. 'Too' zawsze wskazuje na nadmiar który tworzy problem."
      },
      {
        id: "intens_2",
        question: "She's _____ tall to fit through that low doorway without bending down significantly.",
        translation: "(Jest za wysoka żeby przejść przez to niskie drzwi bez znaczącego schylania się)",
        options: ["too", "very", "so", "enough"],
        correct: "too",
        explanation: "'Too tall' wskazuje problem! Jej wzrost przekracza możliwość komfortowego przejścia. 'Too' + przymiotnik opisuje nadmiar który uniemożliwia coś. To częste dla wyjaśniania czemu coś nie działa - za duże, za małe, za drogie. 'Too' komunikuje że parametr wykracza poza użyteczny zakres."
      },
      {
        id: "intens_3",
        question: "This suitcase isn't big _____ for all my clothes, I need a larger one for travel.",
        translation: "(Ta walizka nie jest wystarczająco duża na wszystkie moje ubrania, potrzebuję większej na podróż)",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "'Enough' idzie PO przymiotniku! 'Big enough' = wystarczająco duży. Pozycja jest kluczowa: enough AFTER adjective, enough BEFORE noun. 'Isn't big enough' pokazuje niewystarczalność - nie spełnia wymagań. To przeciwieństwo 'too' - 'too' = za dużo, 'not enough' = za mało."
      },
      {
        id: "intens_4",
        question: "He's _____ intelligent and always gets the highest grades in all his university classes.",
        translation: "(Jest bardzo inteligentny i zawsze dostaje najwyższe oceny we wszystkich swoich zajęciach uniwersyteckich)",
        options: ["very", "too", "enough", "so"],
        correct: "very",
        explanation: "'Very' po prostu intensyfikuje bez negatywnych konsekwencji! 'Very intelligent' = bardzo inteligentny (pozytyw). Różne od 'too intelligent' (za inteligentny - może negatywne, izolujące społecznie). 'Very' jest neutralny wzmacniacz - czyni cechę silniejszą bez sugerowania problemów. Najbardziej uniwersalny intensifier."
      },
      {
        id: "intens_5",
        question: "The movie was _____ boring that I fell asleep halfway through it in the cinema.",
        translation: "(Film był tak nudny, że zasnąłem w połowie w kinie)",
        options: ["so", "very", "too", "enough"],
        correct: "so",
        explanation: "'So... that...' pokazuje rezultat intensywności! 'So boring that I fell asleep' - nuda była na poziomie który SPOWODOWAŁ sen. 'So' + przymiotnik + that + rezultat to klasyczna struktura przyczyny-skutku. Intensywność cechy prowadzi do konsekwencji. Bardzo dramatyczny sposób opisywania ekstremów."
      },
      {
        id: "intens_6",
        question: "We don't have _____ time to finish the project before the strict deadline tomorrow.",
        translation: "(Nie mamy wystarczająco czasu żeby skończyć projekt przed surowym deadlinem jutro)",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "'Enough' przed rzeczownikami! 'Enough time' = wystarczająca ilość czasu. Zapamiętaj pozycję: enough + noun (enough time), adjective + enough (big enough). 'Don't have enough' wyraża niedobór - masz trochę ale potrzebujesz więcej. To o nie spełnianiu minimalnego wymagania."
      },
      {
        id: "intens_7",
        question: "The exam was _____ difficult, but I managed to pass it with a decent score luckily.",
        translation: "(Egzamin był dość trudny, ale udało mi się go zdać z przyzwoitym wynikiem na szczęście)",
        options: ["quite", "quiet", "much", "many"],
        correct: "quite",
        explanation: "'Quite' znaczy dość/raczej - umiarkowany intensifier! 'Quite difficult' = trudny ale nie ekstremalnie. Nie myl z 'quiet' (cichy - całkiem inne słowo!). 'Quite' jest między 'a bit' (trochę) a 'very' (bardzo). Używane dla umiarkowanych ocen - nie przesadzając w żadną stronę."
      },
      {
        id: "intens_8",
        question: "This task is _____ easy for someone with your experience and skills in programming.",
        translation: "(To zadanie jest raczej łatwe dla kogoś z twoim doświadczeniem i umiejętnościami w programowaniu)",
        options: ["rather", "very", "too", "so"],
        correct: "rather",
        explanation: "'Rather' znaczy raczej/dość - lekko formalny! 'Rather easy' sugeruje że coś jest łatwiejsze niż mogłoby się wydawać. 'Rather' często używane dla niespodzianek - gdy coś jest bardziej/mniej niż oczekiwałeś. Lekko bardziej brytyjski niż 'quite', ale oba podobne w znaczeniu."
      },
      {
        id: "intens_9",
        question: "I'm _____ tired to go out tonight, I just want to stay home and sleep early.",
        translation: "(Jestem zbyt zmęczony żeby wyjść dziś wieczorem, chcę tylko zostać w domu i spać wcześnie)",
        options: ["too", "very", "so", "enough"],
        correct: "too",
        explanation: "'Too tired to go' pokazuje że zmęczenie uniemożliwia wyjście! 'Too' + przymiotnik + to infinitive to wzorzec dla wyjaśniania czemu nie możesz czegoś zrobić. Zmęczenie przekracza poziom który pozwala na działanie. 'Too' wyjaśnia ograniczenie spowodowane przez nadmiar cechy."
      },
      {
        id: "intens_10",
        question: "She speaks English well _____ to work as a translator for international companies professionally.",
        translation: "(Mówi po angielsku wystarczająco dobrze żeby pracować jako tłumacz dla międzynarodowych firm profesjonalnie)",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "'Well enough to' pokazuje wystarczalność dla celu! 'Well' to przysłówek, 'enough' po nim intensyfikuje. Przysłówek + enough + to infinitive = wystarczająco żeby osiągnąć cel. To pozytywne - ma wymagane minimum. 'Enough' komunikuje że próg kompetencji został osiągnięty."
      },
      {
        id: "intens_11",
        question: "The weather is _____ nice today - let's go for a walk in the park this afternoon!",
        translation: "(Pogoda jest taka ładna dzisiaj - chodźmy na spacer do parku dziś po południu!)",
        options: ["so", "very", "too", "enough"],
        correct: "so",
        explanation: "'So nice' wyraża entuzjazm i prowadzi do sugestii! 'So' jest bardziej emocjonalne niż 'very'. Często używane z wykrzyknikiem dla ekscytacji. 'So' sugeruje że cecha jest wystarczająco ekstremalna żeby motywować akcję. To bardziej ekspresywne niż 'very' - pokazuje emocjonalną reakcję na intensywność."
      },
      {
        id: "intens_12",
        question: "I have _____ work to do today that I won't have time for lunch or any breaks.",
        translation: "(Mam tyle pracy do zrobienia dzisiaj, że nie będę miał czasu na lunch ani żadne przerwy)",
        options: ["so much", "very much", "too much", "enough"],
        correct: "so much",
        explanation: "'So much' + rzeczownik niepoliczalny + that = rezultat! 'So much work that I won't have time' pokazuje jak ogromna ilość pracy powoduje brak czasu. 'So much/many' prowadzą do konsekwencji w klauzuli 'that'. To dramatyzuje sytuację przez pokazanie skrajnej ilości i jej wpływu."
      },
      {
        id: "intens_13",
        question: "This soup is not hot _____ - can you heat it up more in the microwave please?",
        translation: "(Ta zupa nie jest wystarczająco gorąca - czy możesz ją podgrzać więcej w mikrofali proszę?)",
        options: ["enough", "too", "very", "so"],
        correct: "enough",
        explanation: "'Not... enough' dla niewystarczalności! 'Not hot enough' = za zimna, potrzebujesz więcej ciepła. To wyraża niezadowolenie z poziomu - nie osiąga minimum. 'Not enough' jest używane dla wszystkich niedoborów - nie wystarczająco duży, ciepły, szybki, tani. Komunikuje potrzebę zwiększenia."
      },
      {
        id: "intens_14",
        question: "The children are being _____ loud, could you ask them to play more quietly please?",
        translation: "(Dzieci są trochę za głośne, czy mógłbyś poprosić je żeby bawiły się ciszej proszę?)",
        options: ["a bit too", "very too", "so enough", "too very"],
        correct: "a bit too",
        explanation: "'A bit too' łagodzi krytykę! 'A bit too loud' jest gentler niż samo 'too loud'. To grzeczny sposób narzekania - minimalizujesz problem przez 'a bit'. Używane gdy chcesz poprosić o zmianę bez brzmienia zbyt krytycznie. Kombinacje modifiers ('a bit', 'slightly', 'rather') + 'too' są bardzo częste dla uprzejmości."
      },
      {
        id: "intens_15",
        question: "I'm not _____ sure about the answer to this question - I might be wrong about it.",
        translation: "(Nie jestem całkowicie pewien odpowiedzi na to pytanie - mogę się mylić o tym)",
        options: ["completely", "complete", "completion", "completing"],
        correct: "completely",
        explanation: "'Completely' (przysłówek) intensyfikuje przymiotnik 'sure'! 'Not completely sure' = masz wątpliwości. Przysłówki jak completely, totally, absolutely, entirely mogą modyfikować przymiotniki. 'Completely' opisuje STOPIEŃ pewności - nie pełny 100%. To o przyznaniu się do niepewności - uczciwość o limitach twojej wiedzy."
      }
    ]
  },

  verb_patterns_special: {
    name: "Specjalne wzorce czasowników",
    description: "Let, make, help, have someone do",
    icon: Compass,
    color: "from-indigo-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "verb_pat_1",
        question: "My parents let me _____ out late on weekends but not on school nights during the week.",
        translation: "(Moi rodzice pozwalają mi wychodzić późno w weekendy ale nie w szkolne noce podczas tygodnia)",
        options: ["stay", "to stay", "staying", "stayed"],
        correct: "stay",
        explanation: "'Let + osoba + czasownik bazowy' (bez 'to')! 'Let me stay' używa infinitive bez 'to'. To wyjątkowy wzorzec - większość czasowników potrzebuje 'to' ale 'let' nie. 'Let' wyraża pozwolenie - rodzice dają ci swobodę. Zawsze czasownik bazowy po 'let someone', nigdy 'to'."
      },
      {
        id: "verb_pat_2",
        question: "The teacher made us _____ the entire chapter again because we didn't understand it well.",
        translation: "(Nauczyciel kazał nam przeczytać cały rozdział ponownie, bo nie zrozumieliśmy go dobrze)",
        options: ["read", "to read", "reading", "reads"],
        correct: "read",
        explanation: "'Make + osoba + czasownik bazowy' dla zmuszania! 'Made us read' używa infinitive bez 'to', jak 'let'. 'Make someone do' wyraża przymus - nie masz wyboru. To silniejsze niż 'let' (pozwolenie) - 'make' jest o wymuszaniu akcji. Czasownik bazowy bez 'to' po 'make someone'."
      },
      {
        id: "verb_pat_3",
        question: "Can you help me _____ this heavy box upstairs to my apartment on the third floor?",
        translation: "(Czy możesz pomóc mi zanieść to ciężkie pudełko na górę do mojego mieszkania na trzecim piętrze?)",
        options: ["carry", "to carry", "carrying", "carries"],
        correct: "carry",
        explanation: "'Help + osoba + czasownik bazowy' (bez 'to' jest częstsze w amerykańskim)! 'Help me carry' używa bare infinitive. Brytyjski czasem używa 'help me to carry' (z 'to') ale amerykański preferuje bez. Oba są poprawne ale bare infinitive jest bardziej casualowy i powszechny. 'Help' jest elastyczny - działa z lub bez 'to'."
      },
      {
        id: "verb_pat_4",
        question: "I had my hair _____ yesterday at the new salon downtown near the shopping center.",
        translation: "(Obciąłem włosy wczoraj w nowym salonie w centrum blisko centrum handlowego)",
        options: ["cut", "to cut", "cutting", "cuts"],
        correct: "cut",
        explanation: "'Have something done' dla usług które ktoś inny wykonuje! 'Had my hair cut' = ktoś INNY ciął twoje włosy (fryzjer). To konstrukcja bierna - nie zrobiłeś tego sam. 'Have + obiekt + past participle' dla wszystkich usług: have my car repaired, have my house painted. To o organizowaniu aby ktoś zrobił dla ciebie."
      },
      {
        id: "verb_pat_5",
        question: "My boss makes me _____ overtime every Friday evening without paying extra for it.",
        translation: "(Mój szef każe mi pracować po godzinach każdy piątek wieczorem bez płacenia ekstra za to)",
        options: ["work", "to work", "working", "works"],
        correct: "work",
        explanation: "'Makes me work' wyraża wymuszony obowiązek! 'Make' nie używa 'to' przed infinitive w stronie czynnej. To pokazuje brak wyboru - szef wymusza to. 'Make someone do' komunikuje przymus, czasem niechciany. Różne od 'ask me to work' (prośba) - 'make' jest o władzy i wymuszaniu."
      },
      {
        id: "verb_pat_6",
        question: "She got her computer _____ by a technician after it crashed and lost all data.",
        translation: "(Naprawiła komputer przez technika po tym jak się zawiesił i stracił wszystkie dane)",
        options: ["fixed", "fix", "to fix", "fixing"],
        correct: "fixed",
        explanation: "'Get something done' podobne do 'have something done'! 'Got her computer fixed' = technik naprawił (ona zorganizowała). 'Get' jest lekko bardziej casualowe niż 'have'. Oba oznaczają że ktoś inny wykonuje usługę dla ciebie. 'Get' sugeruje więcej osobistego wysiłku w organizacji niż 'have'."
      },
      {
        id: "verb_pat_7",
        question: "Let me _____ you with those heavy bags - they look difficult to carry alone!",
        translation: "(Pozwól mi pomóc ci z tymi ciężkimi torbami - wyglądają trudno do niesienia samemu!)",
        options: ["help", "to help", "helping", "helps"],
        correct: "help",
        explanation: "'Let me help' to grzeczna oferta pomocy! 'Let' + bare infinitive jak zawsze. To bardzo częsta fraza dla oferowania assistance - 'Let me help/show/explain/tell you'. Brzmi mniej narzucająco niż 'I will help' - dajesz im wybór zaakceptowania. To uprzejmy sposób oferowania usługi."
      },
      {
        id: "verb_pat_8",
        question: "The loud noise made the baby _____ crying suddenly in the middle of the quiet room.",
        translation: "(Głośny hałas sprawił że dziecko zaczęło płakać nagle w środku cichego pokoju)",
        options: ["start", "to start", "starting", "starts"],
        correct: "start",
        explanation: "'Made the baby start' używa bare infinitive! 'Make + obiekt + czasownik bazowy' dla spowodowania akcji. Hałas SPOWODOWAŁ płacz - to przymusowa reakcja. 'Make' dla mimowolnych reakcji lub przymusu. Dziecko nie wybrało płaczu - hałas to wymusił. To o przyczynowości bez wyboru."
      },
      {
        id: "verb_pat_9",
        question: "I need to get my eyes _____ soon - I've been having trouble seeing clearly lately.",
        translation: "(Muszę zbadać oczy wkrótce - miałem problemy z widzeniem wyraźnie ostatnio)",
        options: ["tested", "test", "to test", "testing"],
        correct: "tested",
        explanation: "'Get my eyes tested' = profesjonalne badanie przez optometrystę! Past participle 'tested' pokazuje że ktoś inny wykona usługę. 'Get + obiekt + past participle' dla wszystkich checkupów medycznych i serwisów. To o umówieniu się żeby profesjonalista coś zbadał lub naprawił dla ciebie."
      },
      {
        id: "verb_pat_10",
        question: "Don't let your fears _____ you from trying new things and taking risks in life.",
        translation: "(Nie pozwól swoim lękom powstrzymać cię od próbowania nowych rzeczy i podejmowania ryzyka w życiu)",
        options: ["stop", "to stop", "stopping", "stops"],
        correct: "stop",
        explanation: "'Let + obiekt + czasownik bazowy' dla pozwalania (lub nie pozwalania)! 'Don't let fears stop you' = nie daj lękom powstrzymać. Negatywne 'let' (don't let) jest radą przeciw pozwalaniu czemuś kontrolować cię. To motywacyjny wzorzec - nie pozwalaj przeszkodom wygrać."
      },
      {
        id: "verb_pat_11",
        question: "I'll have my assistant _____ the report to you by email later this afternoon.",
        translation: "(Każę mojemu asystentowi wysłać raport do ciebie emailem później tego popołudnia)",
        options: ["send", "to send", "sending", "sent"],
        correct: "send",
        explanation: "'Have someone do' (czasownik bazowy) dla instruowania akcji! 'Have my assistant send' = instruujesz asystenta żeby wysłał. To o delegowaniu zadań. Różne od 'have something done' (past participle - usługa dla ciebie) - to jest aktywne zlecanie komuś wykonania zadania. Używane w kontekstach pracy dla rozdawania responsibilities."
      },
      {
        id: "verb_pat_12",
        question: "The sad movie made me _____ at the emotional ending scene with the reunion.",
        translation: "(Smutny film sprawił że płakałem przy emocjonalnej scenie końcowej z reunią)",
        options: ["cry", "to cry", "crying", "cried"],
        correct: "cry",
        explanation: "'Made me cry' dla emocjonalnej reakcji! Film SPOWODOWAŁ płacz - mimowolna odpowiedź. 'Make someone cry/laugh/smile' są powszechne dla emocjonalnych efektów. Bare infinitive po 'make' pokazuje że to było automatyczne - nie wybrałeś płakać, film cię do tego doprowadził. O mimowolnych reakcjach wywołanych przez bodźce."
      },
      {
        id: "verb_pat_13",
        question: "She had her house _____ while she was away on her month-long vacation abroad.",
        translation: "(Posprzątała dom podczas gdy była na swoich miesięcznych wakacjach za granicą)",
        options: ["cleaned", "clean", "to clean", "cleaning"],
        correct: "cleaned",
        explanation: "'Had her house cleaned' = zatrudniła ludzi do sprzątania! Past participle pokazuje że ktoś inny wykonał pracę. 'Have + obiekt + past participle' dla wszystkich hired services. To o płaceniu lub aranżowaniu żeby profesjonaliści zrobili coś podczas gdy ty jesteś zajęty lub nieobecny."
      },
      {
        id: "verb_pat_14",
        question: "Can you help me _____ this difficult math problem? I've been stuck on it for hours.",
        translation: "(Czy możesz pomóc mi rozwiązać ten trudny problem matematyczny? Utkwiłem na nim od godzin)",
        options: ["solve", "to solve", "solving", "solved"],
        correct: "solve",
        explanation: "'Help me solve' bez 'to' jest najbardziej naturalne! Chociaż 'help me to solve' też jest poprawne, bare infinitive jest częstszy w mowie. 'Help' jest jednym z niewielu czasowników gdzie 'to' jest opcjonalne. Bez 'to' brzmi bardziej casualowo i przyjaźnie - naturalne dla codziennych próśb o pomoc."
      },
      {
        id: "verb_pat_15",
        question: "The teacher let us _____ home early because it was snowing heavily and roads were dangerous.",
        translation: "(Nauczyciel pozwolił nam iść do domu wcześnie, bo mocno padał śnieg i drogi były niebezpieczne)",
        options: ["go", "to go", "going", "went"],
        correct: "go",
        explanation: "'Let us go' dla pozwolenia grupie! Bare infinitive 'go' bez 'to' po 'let'. Nauczyciel dał pozwolenie wyjść wcześnie z powodu pogody. 'Let' pokazuje że władza (nauczyciel) pozwala na coś co normalnie nie byłoby dozwolone. To o udzielaniu specjalnego pozwolenia w wyjątkowych okolicznościach."
      }
    ]
  },

  expressing_ability: {
    name: "Wyrażanie umiejętności",
    description: "Can, be able to, manage to, succeed in",
    icon: Anchor,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "abil_1",
        question: "After months of practice, she _____ finally play the piano beautifully and confidently.",
        translation: "(Po miesiącach praktyki, w końcu potrafi grać na pianinie pięknie i pewnie)",
        options: ["can", "could", "is able", "was able"],
        correct: "can",
        explanation: "'Can' dla obecnej umiejętności rozwiniętej przez praktykę! Teraz ma tę zdolność jako rezultat uczenia się. 'Can finally' pokazuje osiągnięcie po wysiłku. To celebracja nabytej kompetencji - długi proces zakończył się sukcesem. 'Can' jest prostsze i bardziej naturalne niż 'is able to' dla obecnych stałych umiejętności."
      },
      {
        id: "abil_2",
        question: "Despite the difficult conditions, he _____ to finish the marathon race successfully.",
        translation: "(Pomimo trudnych warunków, udało mu się skończyć wyścig maratoński pomyślnie)",
        options: ["managed", "could", "can", "was able"],
        correct: "managed",
        explanation: "'Manage to' podkreśla trudność i wysiłek! 'Managed to finish' = udało się pomimo przeszkód. Silniejsze niż 'was able to' - 'manage' sugeruje że było ciężko ale przezwyciężyłeś. Używane dla osiągnięć wymagających determinacji. To o sukcesie mimo adversity - więcej emocjonalne niż neutralne 'was able'."
      },
      {
        id: "abil_3",
        question: "I _____ swim when I was five years old - my father taught me during summer holidays.",
        translation: "(Potrafiłem pływać, kiedy miałem pięć lat - mój ojciec nauczył mnie podczas letnich wakacji)",
        options: ["could", "can", "was able to", "managed to"],
        correct: "could",
        explanation: "'Could' dla ogólnej przeszłej umiejętności! Miałeś tę zdolność jako dziecko. 'Could' opisuje umiejętność którą posiadałeś, niezależnie od czy ją używałeś. Dla jednorazowych osiągnięć powiedz 'was able to', ale dla ogólnych zdolności w przeszłości 'could' jest naturalniejsze. To o posiadaniu skill jako dziecko."
      },
      {
        id: "abil_4",
        question: "They _____ to escape from the burning building just before it collapsed completely.",
        translation: "(Udało im się uciec z płonącego budynku tuż przed tym jak całkowicie się zawalił)",
        options: ["were able", "could", "can", "managed"],
        correct: "were able",
        explanation: "'Were able to' dla jednorazowych przeszłych osiągnięć! Konkretna okazja gdzie zdolność została użyta pomyślnie. Nie używaj 'could' dla specific achievements - 'could' jest dla ogólnych zdolności. 'Were able to escape' podkreśla że w tej konkretnej krytycznej sytuacji uciekli. To o sukcesie w pojedynczym, ważnym momencie."
      },
      {
        id: "abil_5",
        question: "Will you _____ to attend the meeting tomorrow morning at the office downtown?",
        translation: "(Czy będziesz mógł uczestniczyć w spotkaniu jutro rano w biurze w centrum?)",
        options: ["be able", "can", "could", "manage"],
        correct: "be able",
        explanation: "'Be able to' dla przyszłych możliwości! 'Can' nie ma przyszłej formy - używaj 'will be able to'. Pytasz o przyszłą dostępność lub możliwość. 'Will you be able to attend' jest formalniejsze niż casualowe 'can you come'. 'Be able to' jest bardziej wszechstronne - działa we wszystkich czasach gdzie 'can' nie."
      },
      {
        id: "abil_6",
        question: "She _____ in passing all her exams with excellent grades despite working full-time.",
        translation: "(Udało jej się zdać wszystkie egzaminy z doskonałymi ocenami pomimo pracy na pełny etat)",
        options: ["succeeded", "could", "managed", "was able"],
        correct: "succeeded",
        explanation: "'Succeed in + -ing' dla ostatecznego sukcesu po wysiłku! 'Succeeded in passing' celebruje osiągnięcie pomimo trudności. 'Succeed' jest bardziej formalne i triumfujące niż 'manage'. Używane dla znaczących accomplishments które wymagały determinacji. To o osiągnięciu ambitnego celu pomimo przeszkód."
      },
      {
        id: "abil_7",
        question: "After trying many times, I finally _____ to solve the complex puzzle successfully!",
        translation: "(Po próbowaniu wiele razy, w końcu udało mi się rozwiązać złożoną łamigłówkę pomyślnie!)",
        options: ["managed", "could", "can", "succeeded"],
        correct: "managed",
        explanation: "'Managed to' po wielu próbach pokazuje wytrwałość! 'Finally managed' podkreśla że było trudno i zajęło wiele prób. 'Manage' komunikuje że to nie było łatwe - potrzebowałeś wielu attempts. To celebruje uporczywość i eventual success po frustracji. Bardziej emocjonalne niż neutralne 'was able to'."
      },
      {
        id: "abil_8",
        question: "When I was younger, I _____ run ten kilometers without getting tired or out of breath.",
        translation: "(Kiedy byłem młodszy, potrafiłem biec dziesięć kilometrów bez zmęczenia lub zadyszki)",
        options: ["could", "can", "was able to", "managed to"],
        correct: "could",
        explanation: "'Could' dla nostalgicznych wspomnień o przeszłych zdolnościach! Miałeś tę fitness jako młoda osoba. 'Could' sugeruje że może już nie masz tej zdolności - to kontrast między młodością a teraz. Często używane z nutką smutku lub nostalgii o utraconych zdolnościach fizycznych z wiekiem."
      },
      {
        id: "abil_9",
        question: "I haven't _____ to contact him yet - his phone seems to be turned off or broken.",
        translation: "(Nie udało mi się skontaktować z nim jeszcze - jego telefon wydaje się być wyłączony lub zepsuty)",
        options: ["been able", "could", "can", "managed"],
        correct: "been able",
        explanation: "'Haven't been able to' z present perfect dla ciągłej niemożności! Od przeszłości do teraz nie mogłeś go złapać. 'Can' nie ma formy perfect - używaj 'been able to'. To wyraża frustrację z przedłużającą się niemożnością - próbowałeś wielokrotnie bez sukcesu. Present perfect pokazuje że próby ciągle trwają."
      },
      {
        id: "abil_10",
        question: "Despite her injury, she _____ to finish the tennis match and even won it amazingly!",
        translation: "(Pomimo swojej kontuzji, udało jej się skończyć mecz tenisowy i nawet wygrała go niesamowicie!)",
        options: ["managed", "could", "can", "succeeded"],
        correct: "managed",
        explanation: "'Managed to' pomimo bólu pokazuje niesamowitą determinację! Kontuzja była poważną przeszkodą ale nie zatrzymała jej. 'Manage' podkreśla jak trudne to było - grała przez ból i wciąż wygrała. To heroiczne - 'managed' komunikuje wytrwałość wobec physical adversity. Bardziej dramatyczne niż 'was able to'."
      },
      {
        id: "abil_11",
        question: "By next year, I _____ to speak three languages fluently - English, Spanish, and French!",
        translation: "(Do przyszłego roku będę potrafił mówić płynnie w trzech językach - angielskim, hiszpańskim i francuskim!)",
        options: ["will be able", "can", "could", "will can"],
        correct: "will be able",
        explanation: "Przyszłość wymaga 'will be able to' nie 'will can'! 'Can' nie łączy się z 'will'. To przyszła projekcja twoich umiejętności - do konkretnego czasu będziesz miał te zdolności. 'By next year' wskazuje deadline dla osiągnięcia. Future ability zawsze używa konstrukcji 'be able to'."
      },
      {
        id: "abil_12",
        question: "I _____ in convincing my parents to let me study abroad in England for a year.",
        translation: "(Udało mi się przekonać moich rodziców żeby pozwolili mi studiować za granicą w Anglii przez rok)",
        options: ["succeeded", "managed", "could", "was able"],
        correct: "succeeded",
        explanation: "'Succeed in + -ing' dla ważnych osiągnięć wymagających perswazji! Przekonanie rodziców było wyzwaniem które pokonałeś. 'Succeed' jest bardziej formalne i triumfalne - to było znaczące osiągnięcie. Używane dla celów które wymagały wysiłku, czasu i może negocjacji żeby osiągnąć."
      },
      {
        id: "abil_13",
        question: "No matter how hard I tried, I _____ not solve that extremely difficult puzzle alone.",
        translation: "(Bez względu jak ciężko próbowałem, nie mogłem rozwiązać tej ekstremalnie trudnej łamigłówki sam)",
        options: ["could", "can", "was able to", "managed"],
        correct: "could",
        explanation: "'Could not' dla niemożności pomimo wysiłku! 'No matter how hard' pokazuje że próbowałeś maksymalnie ale wciąż nie mogłeś. 'Could not' wyraża fundamentalne ograniczenie - było poza twoimi zdolnościami. To przyznanie się do porażki pomimo determined attempt. 'Could not' komunikuje że było po prostu za trudne."
      },
      {
        id: "abil_14",
        question: "Luckily, the firefighters _____ to save everyone from the burning building in time safely.",
        translation: "(Na szczęście strażacy zdołali uratować wszystkich z płonącego budynku na czas bezpiecznie)",
        options: ["were able", "could", "managed", "succeeded"],
        correct: "were able",
        explanation: "'Were able to' dla krytycznego jednorazowego sukcesu! W tej konkretnej emergencji zdołali uratować. 'Were able to save' jest neutralne ale pozytywne - fokusuje na capability being successfully used. Możesz też 'managed' (more dramatic) ale 'were able' jest standard dla opisywania successful rescues i emergency responses."
      },
      {
        id: "abil_15",
        question: "With proper training, anyone _____ learn to speak a foreign language fluently and confidently.",
        translation: "(Z właściwym treningiem, każdy może nauczyć się mówić w obcym języku płynnie i pewnie)",
        options: ["can", "could", "is able", "manages"],
        correct: "can",
        explanation: "'Can' dla ogólnych możliwości i potencjału! 'Anyone can learn' wyraża wiarę w uniwersalną zdolność - wszyscy mają potencjał. To motywacyjne stwierdzenie - nie trzeba być geniuszem, tylko mieć proper training. 'Can' dla ogólnych prawd o zdolnościach ludzkich, nie konkretnych sytuacji."
      }
    ]
  }
};

export default part10Categories;