/**
 * POLISH → ENGLISH GRAMMAR - PART 4
 * 4 categories, 15 questions each - Practical mastery
 */

import { Coffee, BookOpen, MessageSquare, Briefcase } from "lucide-react";

export const part4Categories = {
  articles_advanced: {
    name: "Przedimki - zaawansowane użycie",
    description: "Kiedy używać 'the', 'a/an' lub nic",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "art_adv_1",
        question: "I love _____ coffee, especially in the morning when I wake up feeling tired and sleepy.",
        translation: "(Uwielbiam kawę, szczególnie rano, kiedy budzę się zmęczony i senny)",
        options: ["the", "a", "an", ""],
        correct: "",
        explanation: "Brak przedimka z ogólnymi rzeczownikami niepoliczalnymi! Gdy mówisz o kawie OGÓLNIE (cała kawa, jako koncept), nie używasz 'the'. 'I love coffee' znaczy że kochasz kawę jako napój w ogóle. Gdybyś powiedział 'I love THE coffee', znaczyłoby to konkretną kawę którą pijesz teraz."
      },
      {
        id: "art_adv_2",
        question: "_____ United States is a large country with fifty states and diverse geography across regions.",
        translation: "(Stany Zjednoczone to duży kraj z pięćdziesięcioma stanami i zróżnicowaną geografią w regionach)",
        options: ["The", "A", "An", ""],
        correct: "The",
        explanation: "Używaj 'the' z nazwami krajów które są w liczbie mnogiej lub zawierają słowa jak 'united', 'kingdom', 'republic'. The United States, The United Kingdom, The Netherlands wszystkie potrzebują 'the' bo opisują unię części. Jednosłowne kraje jak Poland, France, Spain nie używają 'the'."
      },
      {
        id: "art_adv_3",
        question: "My brother plays _____ guitar beautifully, he's been taking lessons since he was seven years old.",
        translation: "(Mój brat pięknie gra na gitarze, bierze lekcje odkąd miał siedem lat)",
        options: ["the", "a", "an", ""],
        correct: "the",
        explanation: "Instrumenty muzyczne ZAWSZE biorą 'the' gdy mówimy o graniu na nich! 'Play the guitar/piano/violin' to ustalony wzorzec w angielskim. To różne od sportów gdzie mówisz 'play football' (bez przedimka). To dziwna zasada ale bardzo ważna - wszystkie instrumenty potrzebują 'the'."
      },
      {
        id: "art_adv_4",
        question: "She's _____ engineer working for a big tech company in Silicon Valley, California.",
        translation: "(Jest inżynierem pracującym dla dużej firmy technologicznej w Dolinie Krzemowej w Kalifornii)",
        options: ["the", "a", "an", ""],
        correct: "an",
        explanation: "Używaj 'a/an' z zawodami i profesjami! W angielskim potrzebujesz przedimka przed zawodem. 'An engineer' bo 'engineer' zaczyna się od samogłoski DŹWIĘKU. Polski nie używa przedimków dla zawodów ('Jest inżynierem'), ale angielski MUSI mieć 'a/an' - 'She's engineer' jest błędne."
      },
      {
        id: "art_adv_5",
        question: "I need to go to _____ hospital to visit my grandmother who had surgery yesterday morning.",
        translation: "(Muszę iść do szpitala odwiedzić moją babcię, która miała operację wczoraj rano)",
        options: ["the", "a", "an", ""],
        correct: "the",
        explanation: "Używaj 'the hospital' gdy odwiedzasz kogoś lub idziesz w konkretnym celu. Ale mów 'in hospital' (brytyjski) lub 'in the hospital' (amerykański) gdy przebywasz jako pacjent. Przedimek zależy od DLACZEGO idziesz - odwiedzanie wymaga 'the', bycie pacjentem może go opuścić w brytyjskim angielskim."
      },
      {
        id: "art_adv_6",
        question: "_____ life is beautiful when you appreciate small moments and simple pleasures every single day.",
        translation: "(Życie jest piękne, gdy doceniasz małe momenty i proste przyjemności każdego dnia)",
        options: ["The", "A", "An", ""],
        correct: "",
        explanation: "Rzeczowniki abstrakcyjne jak 'life', 'love', 'happiness' nie potrzebują przedimków gdy mówimy ogólnie! Robisz filozoficzne stwierdzenie o życiu OGÓLNIE, nie jednym konkretnym życiu. Brak przedimka = mówienie o samym koncepcie. 'The life' znaczyłoby jedno konkretne życie o którym dyskutujesz."
      },
      {
        id: "art_adv_7",
        question: "Can you pass me _____ salt, please? The food needs more seasoning to taste better.",
        translation: "(Czy możesz mi podać sól, proszę? Jedzenie potrzebuje więcej przypraw, żeby lepiej smakowało)",
        options: ["the", "a", "an", ""],
        correct: "the",
        explanation: "Używaj 'the' z rzeczami na stole lub w pokoju które oboje widzicie! 'The salt' bo wskazujesz na konkretną solniczkę przed tobą. Gdy coś jest widoczne i wspólne w kontekście, używaj 'the' - znaczy 'ta jedna którą oboje widzimy'. To bardzo praktyczna zasada dla codziennych sytuacji."
      },
      {
        id: "art_adv_8",
        question: "He goes to _____ church every Sunday morning with his family to attend the service together.",
        translation: "(Chodzi do kościoła każdej niedzieli rano z rodziną, żeby razem uczestniczyć w nabożeństwie)",
        options: ["the", "a", "an", ""],
        correct: "",
        explanation: "Brak przedimka gdy mówisz o CELU miejsc! 'Go to church' (na nabożeństwo), 'go to school' (uczyć się), 'go to bed' (spać). Ale 'go to THE church' znaczy sam budynek jako cel. Bez 'the' = idziesz dla aktywności, z 'the' = po prostu fizyczna lokalizacja."
      },
      {
        id: "art_adv_9",
        question: "_____ water in this bottle tastes strange, I think it might be old or contaminated somehow.",
        translation: "(Woda w tej butelce smakuje dziwnie, myślę że może być stara lub jakoś zanieczyszczona)",
        options: ["The", "A", "An", ""],
        correct: "The",
        explanation: "Używaj 'the' gdy określasz KTÓRĄ wodę masz na myśli! 'The water in this bottle' to konkretna woda, nie woda ogólnie. Dodawanie lokalizacji lub opisu ('in this bottle') czyni to konkretnym, więc potrzebujesz 'the'. Ogólna woda = brak przedimka, konkretna woda = 'the'."
      },
      {
        id: "art_adv_10",
        question: "My sister is at _____ university studying medicine, she's in her third year of the program now.",
        translation: "(Moja siostra jest na uniwersytecie studiując medycynę, jest teraz na trzecim roku programu)",
        options: ["the", "a", "an", ""],
        correct: "",
        explanation: "Brytyjski angielski często opuszcza 'the' z 'university' gdy mówisz o byciu studentem! 'At university' (brytyjski) vs 'at the university' (amerykański). Oba poprawne ale brytyjski preferuje brak przedimka dla studentów. To jak 'in hospital' - brytyjski opuszcza przedimki dla instytucjonalnych celów."
      },
      {
        id: "art_adv_11",
        question: "Could you turn on _____ light, please? It's getting dark and I can't see properly anymore.",
        translation: "(Czy możesz włączyć światło, proszę? Robi się ciemno i nie widzę już prawidłowo)",
        options: ["the", "a", "an", ""],
        correct: "the",
        explanation: "Używaj 'the' dla unikalnych rzeczy w pokoju lub domu! 'The light' bo zazwyczaj jest jedno główne światło w kontekście. Tak samo z 'the door', 'the window' - gdy zazwyczaj jest tylko jedno lub oczywiste które masz na myśli w tej przestrzeni. To bardzo naturalne użycie 'the'."
      },
      {
        id: "art_adv_12",
        question: "I'm reading _____ interesting book about World War II and the events in Europe during that period.",
        translation: "(Czytam ciekawą książkę o drugiej wojnie światowej i wydarzeniach w Europie w tym okresie)",
        options: ["the", "a", "an", ""],
        correct: "an",
        explanation: "Używaj 'an' przed słowami zaczynającymi się od samogłoskowych DŹWIĘKÓW! 'Interesting' zaczyna się od dźwięku 'i', więc 'an interesting book'. Pierwsza wzmianka o książce = 'a/an'. Jeśli wspomniałeś wcześniej i nawiązujesz, staje się 'the interesting book'. Nowa informacja = a/an, znana informacja = the."
      },
      {
        id: "art_adv_13",
        question: "_____ English language is difficult for Polish speakers because of different grammar structures and rules.",
        translation: "(Język angielski jest trudny dla Polaków z powodu różnych struktur gramatycznych i zasad)",
        options: ["The", "A", "An", ""],
        correct: "The",
        explanation: "Używaj 'the' z nazwami języków gdy następuje słowo 'language'! 'The English language' potrzebuje 'the', ale samo 'English' nie. Gdy dodajesz słowo 'language' po, czynisz to konkretnym rzeczownikiem który potrzebuje 'the'. Porównaj: 'I speak English' (bez przedimka) vs 'The English language is...' (z 'the')."
      },
      {
        id: "art_adv_14",
        question: "They live in _____ north of England, in a small town near the Scottish border region.",
        translation: "(Mieszkają na północy Anglii, w małym miasteczku blisko granicy ze Szkocją)",
        options: ["the", "a", "an", ""],
        correct: "the",
        explanation: "Używaj 'the' z kierunkami kompasu gdy odnoszą się do regionów! 'The north' jako obszar geograficzny potrzebuje 'the'. Ale ruch kierunkowy nie: 'go north' (bez przedimka). Region = the north/south/east/west. Kierunek = north/south/east/west (bez przedimka). To ważna różnica między miejscem a kierunkiem."
      },
      {
        id: "art_adv_15",
        question: "My favorite subject at school is _____ history, I find it fascinating to learn about past events.",
        translation: "(Moim ulubionym przedmiotem w szkole jest historia, fascynuje mnie uczenie się o przeszłych wydarzeniach)",
        options: ["the", "a", "an", ""],
        correct: "",
        explanation: "Przedmioty szkolne nie potrzebują przedimków gdy mówimy o nich ogólnie! 'History', 'math', 'biology' - wszystkie bez przedimka gdy dyskutujemy je jako przedmioty. Ale 'the history of Rome' (konkretna historia) potrzebuje 'the'. Ogólny przedmiot = brak przedimka, konkretny temat w przedmiocie = 'the'."
      }
    ]
  },

  present_perfect_vs_past: {
    name: "Present Perfect vs Past Simple",
    description: "Kiedy 'have done' a kiedy 'did'",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "perf_past_1",
        question: "I _____ to Paris three times in my life, and each visit was a wonderful experience.",
        translation: "(Byłem w Paryżu trzy razy w życiu i każda wizyta była wspaniałym doświadczeniem)",
        options: ["have been", "was", "went", "had been"],
        correct: "have been",
        explanation: "Używaj present perfect dla życiowego doświadczenia bez konkretnego czasu! 'In my life' to nieukończony okres czasu - twoje życie trwa. Present perfect łączy przeszłość z teraz. Gdybyś powiedział 'I went to Paris three times' brzmiałoby niekompletnie - zapytalibyśmy 'kiedy?'. Present perfect = doświadczenie zgromadzone do teraz."
      },
      {
        id: "perf_past_2",
        question: "I _____ to Paris last summer and visited the Eiffel Tower, Louvre, and Notre Dame cathedral.",
        translation: "(Byłem w Paryżu zeszłego lata i odwiedziłem Wieżę Eiffla, Luwr i katedrę Notre Dame)",
        options: ["went", "have been", "have gone", "had been"],
        correct: "went",
        explanation: "Używaj past simple z konkretnym skończonym czasem! 'Last summer' to określony czas który jest całkowicie skończony. Gdy wspominasz KIEDY coś się stało, zawsze używaj past simple, nigdy present perfect. Wyrażenie czasu decyduje: konkretny czas = past simple, brak konkretnego czasu = present perfect."
      },
      {
        id: "perf_past_3",
        question: "_____ you ever _____ sushi? It's a Japanese dish made with raw fish and rice.",
        translation: "(Czy kiedykolwiek jadłeś sushi? To japońskie danie zrobione z surowej ryby i ryżu)",
        options: ["Have / eaten", "Did / eat", "Have / ate", "Do / eat"],
        correct: "Have / eaten",
        explanation: "Używaj present perfect z 'ever' dla pytań o życiowe doświadczenie! 'Have you ever eaten' pyta o jakikolwiek czas W TWOIM ŻYCIU do teraz. Nie pyta o konkretny moment ale czy to doświadczenie istnieje w twojej przeszłości. 'Ever' to sygnalne słowo dla present perfect."
      },
      {
        id: "perf_past_4",
        question: "She _____ her keys this morning and now she can't get into the house at all.",
        translation: "(Zgubiła klucze dziś rano i teraz w ogóle nie może dostać się do domu)",
        options: ["has lost", "lost", "is losing", "had lost"],
        correct: "has lost",
        explanation: "Używaj present perfect gdy rezultat wpływa na TERAZ! Zgubiła je rano (przeszłość) ale problem istnieje TERAZ - wciąż nie może wejść. Połączenie z teraźniejszością jest kluczowe. Past simple 'lost' po prostu stwierdziłby fakt, present perfect 'has lost' podkreśla obecną konsekwencję."
      },
      {
        id: "perf_past_5",
        question: "When _____ you _____ learning English? Was it in primary school or later in life?",
        translation: "(Kiedy zacząłeś uczyć się angielskiego? W podstawówce czy później w życiu?)",
        options: ["did / start", "have / started", "do / start", "have / start"],
        correct: "did / start",
        explanation: "Używaj past simple w pytaniach z 'when'! 'When' pyta o konkretny czas, więc potrzebujesz past simple. Present perfect NIGDY nie działa z 'when' bo present perfect jest o połączeniu do teraz, nie o kiedy dokładnie. Każde pytanie zaczynające się od 'when' automatycznie potrzebuje past simple."
      },
      {
        id: "perf_past_6",
        question: "I _____ haven't _____ my homework because I was too busy with other things today.",
        translation: "(Jeszcze nie zrobiłem mojej pracy domowej, bo byłem zbyt zajęty innymi rzeczami dzisiaj)",
        options: ["still / done", "yet / did", "already / done", "still / do"],
        correct: "still / done",
        explanation: "Używaj 'still haven't' dla rzeczy które oczekiwałeś skończyć ale nie skończyłeś! Pokazuje zaskoczenie lub frustrację że WCIĄŻ nie jest zrobione. 'Still' idzie przed 'haven't', potem past participle 'done'. To podkreśla kontynuację NIE robienia czegoś co powinieneś był zrobić."
      },
      {
        id: "perf_past_7",
        question: "Have you _____ the new Marvel movie that came out last week in cinemas worldwide?",
        translation: "(Czy widziałeś nowy film Marvela, który wyszedł w zeszłym tygodniu w kinach na całym świecie?)",
        options: ["seen", "saw", "see", "seeing"],
        correct: "seen",
        explanation: "Używaj present perfect dla niedawnych wydarzeń które mogą wciąż być aktualne! Film jest wciąż w kinach, więc twoje doświadczenie łączy się z teraz - może przedyskutujemy lub pójdziemy razem. 'Have you seen' utrzymuje to aktualne. 'Did you see' czułoby się bardziej odległe i skończone."
      },
      {
        id: "perf_past_8",
        question: "I _____ this book twice already, and each time I discover something new and interesting.",
        translation: "(Przeczytałem tę książkę już dwa razy i za każdym razem odkrywam coś nowego i ciekawego)",
        options: ["have read", "read", "am reading", "had read"],
        correct: "have read",
        explanation: "'Already' to klasyczne sygnalne słowo present perfect! Pokazuje że coś stało się przed teraz i może wcześniej niż oczekiwano. 'Already' zazwyczaj idzie między 'have' a past participle: 'have already read'. To podkreśla ukończenie przed obecnym momentem z połączeniem do teraz."
      },
      {
        id: "perf_past_9",
        question: "They _____ married for ten years now, they met at university when they were both studying engineering.",
        translation: "(Są małżeństwem od dziesięciu lat, poznali się na uniwersytecie, kiedy oboje studiowali inżynierię)",
        options: ["have been", "are", "were", "had been"],
        correct: "have been",
        explanation: "Używaj present perfect z 'for' żeby pokazać czas trwania od przeszłości do teraz! 'For ten years' to okres który zaczął się w przeszłości i trwa do teraz - WCIĄŻ są małżeństwem. 'For' + okres czasu = present perfect. Gdyby się rozeszli, użyłbyś past simple 'were married for ten years'."
      },
      {
        id: "perf_past_10",
        question: "I _____ my phone two days ago and I still haven't found it anywhere in the house.",
        translation: "(Zgubiłem telefon dwa dni temu i wciąż nie znalazłem go nigdzie w domu)",
        options: ["lost", "have lost", "am losing", "had lost"],
        correct: "lost",
        explanation: "Używaj past simple z konkretnym czasem nawet jeśli rezultat trwa! 'Two days ago' jest konkretne, więc MUSISZ użyć past simple 'lost'. Druga część 'haven't found' używa present perfect bo nie ma konkretnego czasu i łączy się z teraz. Każda klauzula wybiera swój czas bazując na swoich znacznikach czasu."
      },
      {
        id: "perf_past_11",
        question: "This is the best pizza I _____ ever _____ in my entire life so far!",
        translation: "(To najlepsza pizza jaką kiedykolwiek jadłem w całym moim życiu do tej pory!)",
        options: ["have / eaten", "did / eat", "have / ate", "had / eaten"],
        correct: "have / eaten",
        explanation: "Stopnie najwyższe z doświadczeniem używają present perfect! 'The best... I have ever eaten' porównuje wszystkie twoje życiowe doświadczenia do TERAZ. Ten wzorzec jest ustalony: 'the best/worst/most interesting... I have ever...' - zawsze present perfect dla rankingu życiowych doświadczeń."
      },
      {
        id: "perf_past_12",
        question: "How long _____ you _____ here in this city? Do you like living in this neighborhood?",
        translation: "(Jak długo tu mieszkasz w tym mieście? Lubisz mieszkać w tej dzielnicy?)",
        options: ["have / lived", "do / live", "did / live", "are / living"],
        correct: "have / lived",
        explanation: "'How long' z present perfect pyta o czas trwania kontynuujący do teraz! Pytasz o okres od przeszłości do teraźniejszości - wciąż tu mieszkają. 'How long have you lived' = pytanie o całkowity czas włączając teraz. 'How long did you live' znaczyłoby że już tam nie mieszkają."
      },
      {
        id: "perf_past_13",
        question: "I _____ that movie last night and it was absolutely amazing, one of the best I've seen!",
        translation: "(Obejrzałem ten film wczoraj wieczorem i był absolutnie niesamowity, jeden z najlepszych jakie widziałem!)",
        options: ["watched", "have watched", "was watching", "had watched"],
        correct: "watched",
        explanation: "'Last night' to konkretny skończony czas, więc past simple jest wymagany! Nawet jeśli jesteś podekscytowany tym teraz, oglądanie stało się w konkretnym czasie który się skończył. Konkretne słowa czasu jak 'yesterday', 'last week', 'in 2020' zawsze wywołują past simple, nigdy present perfect."
      },
      {
        id: "perf_past_14",
        question: "_____ you _____ your breakfast yet? We need to leave for work in fifteen minutes.",
        translation: "(Czy zjadłeś już śniadanie? Musimy wyjść do pracy za piętnaście minut)",
        options: ["Have / finished", "Did / finish", "Have / finish", "Do / finish"],
        correct: "Have / finished",
        explanation: "'Yet' w pytaniach używa present perfect żeby zapytać czy coś się stało do teraz! 'Have you finished yet' pyta o ukończenie łączące się z tym momentem. To perfekcyjne dla sytuacji presji czasu - zależy ci czy jest zrobione TERAZ, nie kiedy dokładnie się to stało. 'Yet' sygnalizuje present perfect."
      },
      {
        id: "perf_past_15",
        question: "She _____ three cups of coffee so far today, and it's only noon - that's a lot!",
        translation: "(Wypiła trzy filiżanki kawy jak dotąd dzisiaj, a jest dopiero południe - to dużo!)",
        options: ["has drunk", "drank", "drinks", "had drunk"],
        correct: "has drunk",
        explanation: "'So far' zawsze używa present perfect bo 'today' jest nieukończone! Dzień trwa, więc może wypić więcej. 'So far' znaczy 'do tego punktu w trwającym okresie'. Past simple znaczyłoby że dzień się skończył. Present perfect utrzymuje okres czasu otwarty i aktywny."
      }
    ]
  },

  gerund_vs_infinitive: {
    name: "Gerund vs bezokolicznik",
    description: "Kiedy '-ing' a kiedy 'to do'",
    icon: MessageSquare,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "ger_inf_1",
        question: "I enjoy _____ books in my free time, especially mystery novels and historical fiction.",
        translation: "(Lubię czytać książki w wolnym czasie, szczególnie powieści kryminalne i beletrystykę historyczną)",
        options: ["reading", "to read", "read", "reads"],
        correct: "reading",
        explanation: "Po 'enjoy' zawsze używaj gerund (forma -ing)! Niektóre czasowniki MUSZĄ być następowane przez gerund: enjoy, finish, mind, avoid, suggest. Nie możesz powiedzieć 'enjoy to read'. To ustalony wzorzec - te czasowniki działają tylko z formami -ing, nigdy z 'to' + infinitive."
      },
      {
        id: "ger_inf_2",
        question: "I want _____ a doctor when I grow up and finish my medical education at university.",
        translation: "(Chcę zostać lekarzem, kiedy dorosnę i skończę medyczne wykształcenie na uniwersytecie)",
        options: ["to become", "becoming", "become", "becomes"],
        correct: "to become",
        explanation: "Po 'want' zawsze używaj 'to' + infinitive! Czasowniki wyrażające pragnienie, decyzję lub przyszłą intencję używają infinitive: want, need, decide, plan, hope, expect. Nie możesz powiedzieć 'want becoming'. Ten wzorzec dotyczy intencji i przyszłych celów - infinitive wskazuje naprzód na coś jeszcze niezrobione."
      },
      {
        id: "ger_inf_3",
        question: "She stopped _____ because she realized it was damaging her health and causing serious problems.",
        translation: "(Przestała palić, bo zdała sobie sprawę że szkodzi to jej zdrowiu i powoduje poważne problemy)",
        options: ["smoking", "to smoke", "smoke", "smoked"],
        correct: "smoking",
        explanation: "'Stop + gerund' znaczy że rzuciłeś aktywność! 'Stopped smoking' = rzuciłeś palenie permanentnie. Uwaga: 'stop TO smoke' (infinitive) znaczyłoby coś innego - 'zatrzymać się żeby zapalić' (przestać chodzić żeby zapalić papierosa). Gerund = rzucić akcję, infinitive = zatrzymać się w celu jej zrobienia."
      },
      {
        id: "ger_inf_4",
        question: "Don't forget _____ milk on your way home from work, we've completely run out and need it.",
        translation: "(Nie zapomnij kupić mleka w drodze z pracy do domu, całkowicie nam się skończyło i potrzebujemy go)",
        options: ["to buy", "buying", "buy", "bought"],
        correct: "to buy",
        explanation: "'Forget + to infinitive' znaczy nie zapomnij zrobić czegoś w przyszłości! To o przyszłym zadaniu które musisz zapamiętać. Ale 'forget + gerund' (forget buying) znaczy zapomnieć że ZROBIŁEŚ coś w przeszłości. Przyszłe zadanie = infinitive, przeszła akcja = gerund. Struktura zmienia odniesienie czasowe."
      },
      {
        id: "ger_inf_5",
        question: "I'm really looking forward _____ you next week when you visit our city for the conference.",
        translation: "(Naprawdę nie mogę się doczekać zobaczenia cię w przyszłym tygodniu, kiedy odwiedzisz nasze miasto na konferencję)",
        options: ["to seeing", "to see", "seeing", "see"],
        correct: "to seeing",
        explanation: "Podchwytliwe! 'Looking forward TO' bierze gerund, nie infinitive! Nawet jeśli jest 'to', to przyimek (część phrasal verb), nie marker infinitive. Przyimki są zawsze następowane przez gerund. Więc to 'to seeing' nie 'to see'. To myli Polaków bo 'to' wygląda jak infinitive."
      },
      {
        id: "ger_inf_6",
        question: "He suggested _____ to the new Italian restaurant downtown that just opened last month.",
        translation: "(Zasugerował pójście do nowej włoskiej restauracji w centrum, która otworzyła się w zeszłym miesiącu)",
        options: ["going", "to go", "go", "went"],
        correct: "going",
        explanation: "'Suggest + gerund' to standardowy wzorzec! Czasowniki sugestii i rekomendacji używają gerund: suggest, recommend, advise (doing). Możesz też użyć 'suggest THAT someone should go' ale nie 'suggest to go'. Gerund czyni to bezosobowym - ogólna sugestia, nie skierowana do konkretnej osoby."
      },
      {
        id: "ger_inf_7",
        question: "Would you mind _____ the window? It's getting quite hot and stuffy in this room.",
        translation: "(Czy mógłbyś otworzyć okno? Robi się dość gorąco i duszno w tym pokoju)",
        options: ["opening", "to open", "open", "opened"],
        correct: "opening",
        explanation: "'Mind + gerund' dla grzecznych próśb! 'Would you mind opening' to bardzo grzeczny sposób pytania. Zauważ że to faktycznie negatywne w logice - jeśli im nie przeszkadza, zrobią to. 'Mind' jako czasownik znaczy 'sprzeciwiać się' lub 'być zaniepokojonym', więc zawsze bierze gerund, nigdy infinitive."
      },
      {
        id: "ger_inf_8",
        question: "I can't help _____ when I watch funny comedy videos on YouTube late at night.",
        translation: "(Nie mogę powstrzymać się od śmiechu, kiedy oglądam zabawne filmiki komediowe na YouTube późno w nocy)",
        options: ["laughing", "to laugh", "laugh", "laughed"],
        correct: "laughing",
        explanation: "'Can't help + gerund' znaczy nie możesz się kontrolować! To automatyczne, nie możesz tego powstrzymać. Ten idiom zawsze używa gerund. Opisujesz mimowolną reakcję - coś co robisz mimo nie chcenia. Gerund pokazuje że akcja jest poza twoją kontrolą."
      },
      {
        id: "ger_inf_9",
        question: "They decided _____ a new house because their family was growing and they needed more space.",
        translation: "(Zdecydowali kupić nowy dom, bo ich rodzina się powiększała i potrzebowali więcej miejsca)",
        options: ["to buy", "buying", "buy", "bought"],
        correct: "to buy",
        explanation: "'Decide + infinitive' dla świadomych decyzji o przyszłych akcjach! Czasowniki decyzji (decide, choose, agree, refuse, promise) używają 'to + infinitive'. Wskazują przyszłą akcję która wynika z decyzji. Infinitive pokazuje kierunek decyzji - co zrobisz następnie jako rezultat."
      },
      {
        id: "ger_inf_10",
        question: "I remember _____ my grandmother's house when I was a child, it was a big old farmhouse.",
        translation: "(Pamiętam odwiedzanie domu mojej babci, kiedy byłem dzieckiem, to był duży stary dom wiejski)",
        options: ["visiting", "to visit", "visit", "visited"],
        correct: "visiting",
        explanation: "'Remember + gerund' dla wspomnień z przeszłych doświadczeń! Pamiętasz coś co ZROBIŁEŚ w przeszłości. Ale 'remember + infinitive' znaczy pamiętać żeby zrobić coś w przyszłości (nie zapomnieć zadania). Przeszłe wspomnienie = gerund, przyszłe zadanie = infinitive. Forma zmienia kierunek czasu całkowicie."
      },
      {
        id: "ger_inf_11",
        question: "Please remember _____ off the lights when you leave the office tonight, to save electricity.",
        translation: "(Proszę pamiętaj zgasić światła, kiedy opuszczasz biuro wieczorem, żeby zaoszczędzić prąd)",
        options: ["to turn", "turning", "turn", "turned"],
        correct: "to turn",
        explanation: "'Remember + infinitive' dla przyszłych zadań które musisz zrobić! To przypomnienie o czymś jeszcze niezrobionym. Infinitive wskazuje naprzód na akcję. Kontrast: 'remember turning' = przypomnieć sobie że zgasiłeś (przeszłość), 'remember to turn' = nie zapomnij zgasić (przyszłość)."
      },
      {
        id: "ger_inf_12",
        question: "She keeps _____ the same mistakes in her English essays despite my repeated corrections and feedback.",
        translation: "(Ciągle popełnia te same błędy w swoich angielskich esejach pomimo moich powtarzających się poprawek i uwag)",
        options: ["making", "to make", "make", "made"],
        correct: "making",
        explanation: "'Keep + gerund' dla powtarzających się lub ciągłych akcji! Pokazuje frustrującą powtarzalność - nie przestaje robić błędów. 'Keep' zawsze bierze gerund dla trwających habitualnych akcji. To podkreśla kontynuację niechcianego wzorca - to ciągle się dzieje mimo wysiłków żeby przestać."
      },
      {
        id: "ger_inf_13",
        question: "We're planning _____ to Italy next summer for a two-week vacation touring the country.",
        translation: "(Planujemy jechać do Włoch przyszłego lata na dwutygodniowe wakacje po kraju)",
        options: ["to go", "going", "go", "went"],
        correct: "to go",
        explanation: "'Plan + infinitive' dla przyszłych intencji! Planowanie dotyczy przyszłych akcji, a infinitive naturalnie wyraża przyszły kierunek. Możesz też użyć gerund 'planning on going' ale 'planning to go' jest częstsze. Infinitive pokazuje cel twojego planowania - co zamierzasz zrobić."
      },
      {
        id: "ger_inf_14",
        question: "I tried _____ the door but it was locked from the inside, so I couldn't get in.",
        translation: "(Próbowałem otworzyć drzwi, ale były zamknięte od środka, więc nie mogłem wejść)",
        options: ["to open", "opening", "open", "opened"],
        correct: "to open",
        explanation: "'Try + infinitive' znaczy próbować zrobić coś trudnego! Włożyłeś wysiłek żeby je otworzyć. Ale 'try + gerund' znaczy eksperymentować z metodą (spróbuj otworzyć kluczem). Infinitive = próba osiągnięcia celu, gerund = testowanie metody jako rozwiązania. Różne znaczenia!"
      },
      {
        id: "ger_inf_15",
        question: "He admitted _____ the last cookie from the jar even though he said he didn't earlier.",
        translation: "(Przyznał się do zjedzenia ostatniego ciastka ze słoika, chociaż wcześniej mówił że nie)",
        options: ["eating", "to eat", "eat", "ate"],
        correct: "eating",
        explanation: "'Admit + gerund' dla przyznawania się do przeszłych akcji! Czasowniki wyznania (admit, deny, confess) biorą gerund bo przyznaje się do czegoś co ZROBIŁEŚ. Gerund odnosi się do ukończonej przeszłej akcji do której się teraz przyznajesz. To o braniu odpowiedzialności za przeszłe zachowanie."
      }
    ]
  },

  phrasal_verbs_common: {
    name: "Popularne phrasal verbs",
    description: "Czasowniki frazowe używane codziennie",
    icon: Briefcase,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "phr_1",
        question: "Can you _____ the music a bit? It's too loud and I can't concentrate on my work.",
        translation: "(Czy możesz ściszyć muzykę trochę? Jest za głośno i nie mogę się skoncentrować na pracy)",
        options: ["turn down", "turn up", "turn on", "turn off"],
        correct: "turn down",
        explanation: "'Turn down' znaczy zmniejszyć głośność lub intensywność! Pomyśl o obracaniu pokrętła W DÓŁ żeby było ciszej. 'Turn up' to przeciwieństwo - zrobić głośniej. 'Turn on/off' dotyczy zasilania. To super częste phrasal verbs - nauka rodziny 'turn' jest niezbędna dla codziennego angielskiego."
      },
      {
        id: "phr_2",
        question: "I need to _____ this form before submitting it to make sure all information is correct.",
        translation: "(Muszę wypełnić ten formularz przed wysłaniem go, żeby upewnić się że wszystkie informacje są poprawne)",
        options: ["fill out", "fill in", "fill up", "fill down"],
        correct: "fill out",
        explanation: "'Fill out' znaczy uzupełnić formularz informacjami! Zarówno 'fill out' jak 'fill in' działają dla formularzy, lekko regionalne - Amerykanie preferują 'fill out', Brytyjczycy używają obu. 'Fill up' znaczy napełnić całkowicie (bak benzyny, szklankę wody). Partykuła całkowicie zmienia znaczenie!"
      },
      {
        id: "phr_3",
        question: "We ran _____ milk this morning, could you buy some on your way home from the office?",
        translation: "(Skończyło nam się mleko dziś rano, czy mógłbyś kupić trochę w drodze z biura do domu?)",
        options: ["out of", "off", "away", "through"],
        correct: "out of",
        explanation: "'Run out of' znaczy wyczerpać zapasy czegoś! Super częste dla rzeczy domowych. 'Out of' pokazuje wyczerpanie - miałeś trochę, teraz się skończyło. To różne od 'run off' (uciec) czy 'run away' (zbiec). Przyimek całkowicie zmienia znaczenie czasownika."
      },
      {
        id: "phr_4",
        question: "The meeting has been _____ until next week because the director is ill and can't attend.",
        translation: "(Spotkanie zostało przełożone na przyszły tydzień, bo dyrektor jest chory i nie może uczestniczyć)",
        options: ["put off", "put on", "put away", "put up"],
        correct: "put off",
        explanation: "'Put off' znaczy odłożyć lub opóźnić! Przesunięcie czegoś na późniejszy czas. 'Put on' znaczy założyć lub włączyć. 'Put away' znaczy schować. 'Put up' znaczy znosić lub zakwaterować. Czasowniki z 'put' są trudne - ten sam czasownik ale całkowicie różne znaczenia zależnie od partykuły!"
      },
      {
        id: "phr_5",
        question: "I'm trying to _____ a new skill by practicing guitar for thirty minutes every single day.",
        translation: "(Próbuję podnieść nową umiejętność ćwicząc gitarę przez trzydzieści minut każdego dnia)",
        options: ["pick up", "pick out", "pick on", "pick at"],
        correct: "pick up",
        explanation: "'Pick up' znaczy nauczyć się nieformalnie lub nabyć stopniowo! To casualowa nauka bez formalnego studia. 'Pick out' znaczy wybrać. 'Pick on' znaczy dręczyć. 'Pick at' znaczy jeść bez apetytu. 'Pick up' dla umiejętności sugeruje naturalną, bezwysiłkową akwizycję - wchłaniasz to przez praktykę."
      },
      {
        id: "phr_6",
        question: "Could you _____ after my cat while I'm away on vacation for two weeks in Spain?",
        translation: "(Czy mógłbyś zająć się moim kotem, kiedy będę na wakacjach przez dwa tygodnie w Hiszpanii?)",
        options: ["look after", "look for", "look into", "look up"],
        correct: "look after",
        explanation: "'Look after' znaczy opiekować się kimś lub czymś! Bardzo częste dla zwierząt, dzieci, starszych. 'Look for' znaczy szukać. 'Look into' znaczy badać. 'Look up' znaczy szukać informacji. Czasowniki z 'look' są ekstremalnie częste - każda partykuła tworzy totalnie różne znaczenie!"
      },
      {
        id: "phr_7",
        question: "I need to _____ some money from the ATM before we go shopping at the mall.",
        translation: "(Muszę wyjąć trochę pieniędzy z bankomatu zanim pójdziemy na zakupy do centrum handlowego)",
        options: ["take out", "take off", "take up", "take away"],
        correct: "take out",
        explanation: "'Take out' znaczy wypłacić lub usunąć! Używane dla pieniędzy z bankomatu, jedzenia z restauracji (na wynos), lub usuwania czegoś z kontenera. 'Take off' znaczy zdjąć ubranie lub wystartować (samolot). 'Take up' znaczy zacząć hobby. Każda partykuła z 'take' tworzy osobne znaczenia."
      },
      {
        id: "phr_8",
        question: "My car broke _____ on the highway, so I had to call a mechanic to come and fix it.",
        translation: "(Mój samochód się zepsuł na autostradzie, więc musiałem zadzwonić po mechanika, żeby przyjechał i naprawił go)",
        options: ["down", "up", "off", "out"],
        correct: "down",
        explanation: "'Break down' znaczy przestać funkcjonować mechanicznie! Używane dla samochodów, maszyn, systemów. Też używane dla emocjonalnego załamania. 'Break up' znaczy zakończyć związek. 'Break out' znaczy uciec lub nagły start (wojna, pożar). 'Down' sugeruje zapaść lub awarię - opadanie ze stanu działającego."
      },
      {
        id: "phr_9",
        question: "I need to _____ out what time the train leaves tomorrow morning for our trip to the countryside.",
        translation: "(Muszę dowiedzieć się o której odjeżdża pociąg jutro rano na naszą wycieczkę na wieś)",
        options: ["find", "figure", "work", "get"],
        correct: "find",
        explanation: "'Find out' znaczy odkryć informację! To o uczeniu się faktów których nie znałeś. 'Figure out' znaczy rozwiązać lub zrozumieć (bardziej złożone). 'Work out' znaczy obliczyć lub ćwiczyć. 'Find out' jest prostsze - po prostu odkrywanie podstawowych informacji przez pytanie lub sprawdzanie."
      },
      {
        id: "phr_10",
        question: "We should _____ up early tomorrow because we have a long drive ahead of us to the mountains.",
        translation: "(Powinniśmy wstać wcześnie jutro, bo mamy długą jazdę przed nami do gór)",
        options: ["get", "wake", "stand", "go"],
        correct: "get",
        explanation: "'Get up' znaczy wstać z łóżka rano! Różne od 'wake up' które znaczy przestać spać (możesz się obudzić ale zostać w łóżku). 'Get up' jest fizyczne - wstawanie z łóżka. Bardzo częste codzienne wyrażenie. 'Stand up' znaczy powstać z siedzenia, nie ze spania."
      },
      {
        id: "phr_11",
        question: "She takes _____ her mother - they both have the same smile and sense of humor.",
        translation: "(Jest podobna do swojej mamy - obie mają ten sam uśmiech i poczucie humoru)",
        options: ["after", "from", "with", "by"],
        correct: "after",
        explanation: "'Take after' znaczy przypominać członka rodziny w wyglądzie lub osobowości! To o odziedziczonych cechach. Bardzo konkretny phrasal verb dla rodzinnego podobieństwa. Nie możesz użyć innych przyimków tutaj - 'after' pokazuje podążanie w cechach, jak jedno pokolenie podążające za drugim z podobnymi cechami."
      },
      {
        id: "phr_12",
        question: "I'll _____ you up from the airport when you arrive tomorrow evening around seven o'clock.",
        translation: "(Odbiorę cię z lotniska, kiedy przylecisz jutro wieczorem około siódmej)",
        options: ["pick", "take", "get", "bring"],
        correct: "pick",
        explanation: "'Pick up' znaczy odebrać kogoś swoim samochodem! Bardzo częste dla odbiorów z lotniska/stacji. 'Pick someone up' dotyczy zabierania ich pojazdem. Różne od 'take' (transportować do) czy 'bring' (przyjść z). 'Pick up' podkreśla pojechanie po nich po nich do lokalizacji."
      },
      {
        id: "phr_13",
        question: "Please _____ off your shoes before entering the house, we keep the floors very clean inside.",
        translation: "(Proszę zdejmij buty przed wejściem do domu, utrzymujemy podłogi bardzo czyste w środku)",
        options: ["take", "put", "get", "bring"],
        correct: "take",
        explanation: "'Take off' znaczy zdjąć ubranie, buty lub akcesoria! Bardzo częsty codzienny phrasal verb. 'Put on' to przeciwieństwo - założyć/ubrać się. 'Take off' też znaczy wystartować (dla samolotów) lub wziąć wolne z pracy. Dla ubrań zawsze 'take off', nigdy 'take down' czy 'take away'."
      },
      {
        id: "phr_14",
        question: "We need to _____ up with a good solution to this problem before the deadline next Friday.",
        translation: "(Musimy wymyślić dobre rozwiązanie tego problemu przed terminem w przyszły piątek)",
        options: ["come", "get", "bring", "make"],
        correct: "come",
        explanation: "'Come up with' znaczy stworzyć lub wymyślić pomysł/rozwiązanie! To o produkowaniu czegoś kreatywnego. Bardzo częste w pracy i kontekstach rozwiązywania problemów. 'Come up with' pomysły, plany, rozwiązania, wymówki. Phrasal verb sugeruje pomysły wynurzające się do świadomości - wyłaniają się z myślenia."
      },
      {
        id: "phr_15",
        question: "I'm sorry I can't make it to your party, something important has _____ up at work suddenly.",
        translation: "(Przepraszam, nie mogę przyjść na twoją imprezę, coś ważnego nagle wyskoczyło w pracy)",
        options: ["come", "gone", "brought", "taken"],
        correct: "come",
        explanation: "'Come up' znaczy pojawić się lub powstać niespodziewanie! Używane dla nagłych problemów, okazji, tematów w rozmowie. To nieplanowane - coś wyłoniło się czego nie przewidywałeś. Bardzo użyteczne dla wyjaśniania czemu plany się zmieniają - coś się pojawiło znaczy niespodziewana sytuacja która wymaga uwagi."
      }
    ]
  },

  prepositions_of_time: {
    name: "Przyimki czasu",
    description: "In, on, at - kiedy którego używać",
    icon: Coffee,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "prep_time_1",
        question: "I wake up _____ 7 o'clock every morning and go for a run in the park nearby.",
        translation: "(Budzę się o 7 rano każdego dnia i idę pobiegać w pobliskim parku)",
        options: ["at", "on", "in", "by"],
        correct: "at",
        explanation: "Używaj 'at' z konkretnymi godzinami zegarowymi! 'At 7 o'clock', 'at midnight', 'at noon'. Pomyśl o czasie jako punkcie na zegarze - używasz 'at' żeby wskazać na ten dokładny moment. To jedna z pierwszych zasad do nauczenia - godziny zegarowe zawsze dostają 'at'."
      },
      {
        id: "prep_time_2",
        question: "My birthday is _____ July, in the middle of summer when the weather is hot and sunny.",
        translation: "(Moje urodziny są w lipcu, w środku lata, kiedy pogoda jest gorąca i słoneczna)",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Używaj 'in' z miesiącami, latami, porami roku i dłuższymi okresami! 'In July', 'in 2024', 'in summer', 'in the morning'. Pomyśl o 'in' jako byciu wewnątrz kontenera czasu - miesiące i lata są jak pudełka w których jesteś. Dłuższe okresy używają 'in'."
      },
      {
        id: "prep_time_3",
        question: "The meeting is scheduled _____ Monday morning at ten o'clock in the main conference room.",
        translation: "(Spotkanie jest zaplanowane w poniedziałek rano o dziesiątej w głównej sali konferencyjnej)",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Używaj 'on' z dniami i datami! 'On Monday', 'on my birthday', 'on Christmas Day'. Pomyśl o dniach jako powierzchniach na których stoisz - używasz 'on' dla konkretnych dat kalendarzowych. Zapamiętaj: at times, on days, in months/years. Ten wzorzec jest super ważny!"
      },
      {
        id: "prep_time_4",
        question: "I usually study English _____ the evening after dinner when the house is quiet and peaceful.",
        translation: "(Zwykle uczę się angielskiego wieczorem po kolacji, kiedy w domu jest cicho i spokojnie)",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Używaj 'in' z częściami dnia: in the morning, in the afternoon, in the evening! Ale uważaj - to 'at night' (wyjątek). Wieczór to okres, jak kontener czasu w którym jesteś. Tylko 'night' łamie ten wzorzec z 'at night'. To ważny wyjątek do zapamiętania."
      },
      {
        id: "prep_time_5",
        question: "She was born _____ April 15th, 1995, in a small town in southern Poland.",
        translation: "(Urodziła się 15 kwietnia 1995 roku w małym miasteczku w południowej Polsce)",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "Pełne daty biorą 'on'! 'On April 15th' bo to konkretna data kalendarzowa. Jeśli powiedziałbyś tylko 'in April', użyłbyś 'in' (sam miesiąc). Ale kompletna data = konkretny dzień = 'on'. To pokazuje jak konkretny jesteś - sam miesiąc to 'in', pełna data to 'on'."
      },
      {
        id: "prep_time_6",
        question: "I'll finish this project _____ the end of the week, probably by Friday afternoon at the latest.",
        translation: "(Skończę ten projekt pod koniec tygodnia, prawdopodobnie do piątku po południu najpóźniej)",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "'By' znaczy przed lub nie później niż ten czas! 'By the end of the week' = kiedykolwiek zanim tydzień się skończy. Różne od 'until' które znaczy że akcja trwa AŻ DO tego czasu. 'By' to deadline - będzie zrobione przed tym. 'Until' to czas trwania - trwa aż do tego momentu."
      },
      {
        id: "prep_time_7",
        question: "We've been waiting here _____ two hours and the bus still hasn't arrived yet!",
        translation: "(Czekamy tu od dwóch godzin i autobus wciąż jeszcze nie przyjechał!)",
        options: ["for", "since", "from", "during"],
        correct: "for",
        explanation: "'For' używane jest z okresami czasu! 'For two hours', 'for three days', 'for a week'. Mierzy czas trwania - jak długo coś trwa. Różne od 'since' które oznacza punkt startu. 'For' = czas trwania, 'since' = punkt startu. Oba działają z present perfect."
      },
      {
        id: "phr_8",
        question: "I've been living in London _____ 2020, when I moved here for my new job at the bank.",
        translation: "(Mieszkam w Londynie od 2020 roku, kiedy się tu przeprowadziłem do nowej pracy w banku)",
        options: ["since", "for", "from", "in"],
        correct: "since",
        explanation: "'Since' oznacza punkt startu akcji trwającej do teraz! '2020' to kiedy się zaczęło, i wciąż tam mieszkasz. 'Since' zawsze bierze konkretny punkt w czasie (datę, rok, moment), nie czas trwania. Używaj z present perfect żeby pokazać że akcja trwa od tego punktu startu aż do teraz."
      },
      {
        id: "prep_time_9",
        question: "The store is open _____ 9 AM to 6 PM on weekdays, but only until 4 PM on Saturdays.",
        translation: "(Sklep jest otwarty od 9 rano do 18 wieczorem w dni powszednie, ale tylko do 16 w soboty)",
        options: ["from", "since", "at", "between"],
        correct: "from",
        explanation: "'From... to...' pokazuje zakres między dwoma punktami! 'From 9 to 6' oznacza start i koniec okresu. To różne od 'since' które dotyczy trwającego czasu. 'From...to' jest neutralne czy trwa po - po prostu oznacza zakres lub rozpiętość między dwoma granicami."
      },
      {
        id: "prep_time_10",
        question: "I'm going on vacation _____ August this year, probably to Greece for some beach relaxation.",
        translation: "(Jadę na wakacje w sierpniu w tym roku, prawdopodobnie do Grecji na trochę plażowego relaksu)",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "Miesiące zawsze używają 'in'! 'In August', 'in December', 'in March'. Pomyśl o miesiącach jako kontenerach - jesteś wewnątrz sierpnia gdy jedziesz. Nawet jeśli wakacje są konkretne, miesiąc jest wciąż ogólnym okresem czasu który używa 'in'."
      },
      {
        id: "prep_time_11",
        question: "We usually have dinner _____ around 7 PM every evening after everyone gets home from work or school.",
        translation: "(Zazwyczaj jemy kolację około 19 wieczorem każdego dnia po tym jak wszyscy wrócą z pracy lub szkoły)",
        options: ["at", "on", "in", "by"],
        correct: "at",
        explanation: "'At' z przybliżonymi czasami gdy dodajesz 'around'! 'At around 7 PM' łączy precyzyjny marker 'at' z przybliżeniem 'around'. To bardzo naturalne w mówionym angielskim. 'At' zostaje bo wciąż odnosi się do punktu w czasie, nawet jeśli 'around' czyni to mniej dokładnym."
      },
      {
        id: "prep_time_12",
        question: "_____ winter, it gets dark very early, sometimes as early as 4 PM in the afternoon.",
        translation: "(Zimą zapada zmrok bardzo wcześnie, czasem już o 16 po południu)",
        options: ["In", "On", "At", "During"],
        correct: "In",
        explanation: "Pory roku używają 'in'! 'In winter', 'in summer', 'in spring', 'in autumn/fall'. Pory roku to długie okresy w których jesteś, jak miesiące czy lata. To kontenery czasu obejmujące kilka miesięcy, więc biorą 'in' tak jak miesiące."
      },
      {
        id: "prep_time_13",
        question: "I studied _____ the exam for three hours straight without taking any breaks at all.",
        translation: "(Uczyłem się do egzaminu przez trzy godziny z rzędu bez żadnych przerw w ogóle)",
        options: ["for", "during", "in", "at"],
        correct: "for",
        explanation: "'For' pokazuje jak długo akcja trwała! 'For three hours' mierzy czas trwania uczenia się. Nie myl z 'during' - 'during the exam' znaczy podczas gdy egzamin się odbywał. 'For' = długość czasu, 'during' = w okresie czasu gdy coś innego się działo."
      },
      {
        id: "prep_time_14",
        question: "_____ my vacation last month, I visited five different countries in Europe by train and bus.",
        translation: "(Podczas moich wakacji w zeszłym miesiącu odwiedziłem pięć różnych krajów w Europie pociągiem i autobusem)",
        options: ["During", "For", "In", "While"],
        correct: "During",
        explanation: "'During' znaczy w okresie czasu! 'During my vacation' = w pewnym momencie w tym okresie wakacji. Używaj 'during' + rzeczownik żeby pokazać kiedy coś się stało w większej ramie czasowej. Różne od 'for' które mierzy czas trwania - 'during' oznacza kontener czasu, 'for' mierzy długość."
      },
      {
        id: "prep_time_15",
        question: "I have to finish this report _____ tomorrow morning, my boss needs it urgently for the meeting.",
        translation: "(Muszę skończyć ten raport do jutra rana, mój szef pilnie go potrzebuje na spotkanie)",
        options: ["by", "until", "at", "in"],
        correct: "by",
        explanation: "'By' znaczy nie później niż - to deadline! 'By tomorrow morning' = kiedykolwiek zanim jutrzejszy ranek się skończy. Akcja musi być ukończona przed tym czasem. To różne od 'until' które znaczy że akcja trwa AŻ DO tego punktu. 'By' = deadline dla ukończenia."
      }
    ]
  }
};

export default part4Categories;