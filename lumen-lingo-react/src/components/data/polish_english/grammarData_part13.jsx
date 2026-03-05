/**
 * POLISH → ENGLISH GRAMMAR - PART 13
 * 4 categories, 15 questions each - Expert patterns
 */

import { Repeat, Users, Share2, Layers } from "lucide-react";

export const part13Categories = {
  double_comparatives: {
    name: "Podwójne porównania",
    description: "The more... the more...",
    icon: Repeat,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "dcomp_1",
        question: "The more you practice English, _____ better you'll become at speaking fluently.",
        translation: "(Im więcej ćwiczysz angielski, tym lepiej będziesz mówić płynnie)",
        options: ["the", "a", "more", "much"],
        correct: "the",
        explanation: "'The more... the better' to klasyczna konstrukcja! Obie części potrzebują 'the'. 'The' + comparative... 'the' + comparative pokazuje proporcjonalną relację - więcej praktyki powoduje lepsze umiejętności. To o pokazywaniu bezpośredniego związku między wysiłkiem a rezultatem - jeden rośnie, drugi też."
      },
      {
        id: "dcomp_2",
        question: "_____ harder you work now, the more successful you'll be in your future career.",
        translation: "(Im ciężej pracujesz teraz, tym bardziej odniesiesz sukces w swojej przyszłej karierze)",
        options: ["The", "A", "More", "Very"],
        correct: "The",
        explanation: "Pierwsza część potrzebuje 'the'! 'The harder... the more successful' łączy wysiłek z sukcesem. To motywacyjne - twardsza praca teraz = lepsze rezultaty później. Struktura pokazuje causa-and-effect relationship z emfazą - nie tylko że są połączone, ale BEZPOŚREDNIO proporcjonalne."
      },
      {
        id: "dcomp_3",
        question: "The _____ I learn about this subject, the more fascinating it becomes to me.",
        translation: "(Im więcej uczę się o tym temacie, tym bardziej fascynujący staje się dla mnie)",
        options: ["more", "most", "much", "many"],
        correct: "more",
        explanation: "'The more... the more' dla wzrastającej intensywności! Pierwsza część opisuje uczenie się (wzrastające), druga fascynację (też wzrastająca). Obie rosną razem - im więcej wiesz, tym ciekawsze to staje się. To celebruje radość odkrywania - wiedza tworzy więcej ciekawości zamiast nudy."
      },
      {
        id: "dcomp_4",
        question: "The older you get, the _____ you appreciate the simple things in life.",
        translation: "(Im starszy się stajesz, tym bardziej doceniasz proste rzeczy w życiu)",
        options: ["more", "most", "much", "very"],
        correct: "more",
        explanation: "'The older... the more' pokazuje mądrość z wiekiem! Wiek rośnie (older), appreciation rośnie (more). To filozoficzna obserwacja - życiowe doświadczenie zmienia perspektywę. Struktura pokazuje jak czas zmienia priorytety - to co wydawało się nieważne staje się cennym."
      },
      {
        id: "dcomp_5",
        question: "_____ sooner we start the project, the earlier we'll finish it successfully.",
        translation: "(Im wcześniej zaczniemy projekt, tym wcześniej skończymy go pomyślnie)",
        options: ["The", "A", "More", "Very"],
        correct: "The",
        explanation: "'The sooner... the earlier' o timing i efficiency! Oba comparatives czasu. Wczesny start = wczesne ukończenie. To logiczna prawda o zarządzaniu projektami - nie zwlekanie oszczędza czas później. Struktura podkreśla bezpośredni związek czasowy między początkiem a końcem."
      },
      {
        id: "dcomp_6",
        question: "The less you worry about small problems, the _____ you'll feel every day.",
        translation: "(Im mniej martwisz się o małe problemy, tym szczęśliwiej będziesz się czuł każdego dnia)",
        options: ["happier", "more happy", "most happy", "happy"],
        correct: "happier",
        explanation: "'The less... the happier' łączy redukcję zmartwień ze wzrostem szczęścia! Jedno maleje (less worry), drugie rośnie (happier). Przeciwne kierunki ale wciąż proporcjonalne. To o life wisdom - puszczanie małych stresów tworzy większy mental peace i contentment."
      },
      {
        id: "dcomp_7",
        question: "The more money you save now, _____ more secure your financial future will be.",
        translation: "(Im więcej pieniędzy oszczędzasz teraz, tym bardziej bezpieczna będzie twoja finansowa przyszłość)",
        options: ["the", "a", "much", "very"],
        correct: "the",
        explanation: "'The more... the more' dla finansowej mądrości! Oszczędności rosną = bezpieczeństwo rośnie. To praktyczna rada o planowaniu przyszłości. Struktura pokazuje accumulation effect - każdy zaoszczędzony dolar przyczynia się do rosnącej security. Podkreśla pozytywną spiralę oszczędzania."
      },
      {
        id: "dcomp_8",
        question: "The _____ carefully you read the instructions, the fewer mistakes you'll make.",
        translation: "(Im uważniej czytasz instrukcje, tym mniej błędów popełnisz)",
        options: ["more", "most", "much", "very"],
        correct: "more",
        explanation: "'The more carefully... the fewer' łączy uwagę z accuracy! Uważność rośnie (more carefully), błędy maleją (fewer). To pokazuje odwrotną proporcję - jeden czynnik w górę, drugi w dół. Używane dla podkreślania wartości thoroughness - staranne czytanie zapobiega problemom."
      },
      {
        id: "dcomp_9",
        question: "The _____ we delay making a decision, the worse the situation becomes for everyone.",
        translation: "(Im dłużej opóźniamy podejmowanie decyzji, tym gorsza staje się sytuacja dla wszystkich)",
        options: ["longer", "long", "more long", "longest"],
        correct: "longer",
        explanation: "'The longer... the worse' dla deteriorating situations! Opóźnienie rośnie (longer), sytuacja pogarsza się (worse). To o kosztach zwlekania - czas sprawia że problemy rosną. Struktura ostrzega że bezczynność nie jest neutral - aktywnie pogarsza rzeczy."
      },
      {
        id: "dcomp_10",
        question: "The bigger the city is, _____ more difficult it becomes to find affordable housing.",
        translation: "(Im większe jest miasto, tym trudniej staje się znaleźć przystępne mieszkanie)",
        options: ["the", "a", "very", "much"],
        correct: "the",
        explanation: "'The bigger... the more difficult' o urban challenges! Rozmiar miasta rośnie = trudność mieszkaniowa rośnie. To o korelacji między populacją a kosztami życia. Struktura wyjaśnia czemu wielkie miasta są drogie - popyt przewyższa podaż w proporcjonalnym wzorcu."
      },
      {
        id: "dcomp_11",
        question: "The _____ you eat junk food, the unhealthier you'll become over time gradually.",
        translation: "(Im więcej jesz niezdrowego jedzenia, tym bardziej niezdrowy będziesz stawał się stopniowo z czasem)",
        options: ["more", "most", "much", "many"],
        correct: "more",
        explanation: "'The more... the unhealthier' dla health warnings! Konsumpcja junk food rośnie = zdrowie maleje. To o degradacji przez złe nawyki. Struktura podkreśla accumulative damage - nie jest to jednorazowy efekt ale stopniowe pogarszanie się proporcjonalne do spożycia."
      },
      {
        id: "dcomp_12",
        question: "The faster you drive on icy roads, the _____ likely you are to have accident.",
        translation: "(Im szybciej jedziesz na oblodzonych drogach, tym bardziej prawdopodobne że będziesz miał wypadek)",
        options: ["more", "most", "much", "very"],
        correct: "more",
        explanation: "'The faster... the more likely' o safety warnings! Prędkość rośnie = ryzyko wypadku rośnie. To o niebezpiecznej proporcji gdzie wzrost jednego czynnika drastycznie zwiększa negative outcome. Używane w ostrzeżeniach bezpieczeństwa dla pokazania eskalującego ryzyka."
      },
      {
        id: "dcomp_13",
        question: "The more languages you speak, the _____ it becomes to learn new ones easily.",
        translation: "(Im więcej języków mówisz, tym łatwiej staje się uczyć nowych z łatwością)",
        options: ["easier", "more easy", "easiest", "easy"],
        correct: "easier",
        explanation: "'The more... the easier' o language learning benefits! Języki rosną = łatwość uczenia rośnie. To o synergii - każdy język uczy cię patterns przydatnych dla następnych. Multilingwaliści znajdują nowe języki łatwiejszymi bo rozpoznają struktury i wzorce z poprzednich."
      },
      {
        id: "dcomp_14",
        question: "The less sleep you get at night, the _____ tired you'll feel during the day.",
        translation: "(Im mniej śpisz w nocy, tym bardziej zmęczony będziesz się czuł w ciągu dnia)",
        options: ["more", "most", "much", "very"],
        correct: "more",
        explanation: "'The less... the more' dla odwrotnej proporcji! Sen maleje = zmęczenie rośnie. To o podstawowej potrzebie zdrowotnej. Struktura ostrzega o konsekwencjach deprywacji snu - brak odpoczynku bezpośrednio powoduje dzienne wyczerpanie w mierzalnym, proporcjonalnym sposobie."
      },
      {
        id: "dcomp_15",
        question: "The more time you spend with someone, the _____ you understand their personality.",
        translation: "(Im więcej czasu spędzasz z kimś, tym lepiej rozumiesz ich osobowość)",
        options: ["better", "more good", "best", "good"],
        correct: "better",
        explanation: "'The more... the better' o budowaniu relacji! Czas razem rośnie = zrozumienie rośnie. To o głębieniu znajomości przez wspólne doświadczenia. Struktura pokazuje jak relacje rozwijają się - im więcej interakcji, tym głębsza connection i wzajemne zrozumienie charakterów."
      }
    ]
  },

  reflexive_pronouns: {
    name: "Zaimki zwrotne",
    description: "Myself, yourself, himself, themselves...",
    icon: Users,
    color: "from-indigo-500 to-blue-600",
    level: "beginner",
    questions: [
      {
        id: "reflex_1",
        question: "I cut _____ while chopping vegetables for dinner and needed a bandage quickly.",
        translation: "(Skaleczałem się podczas krojenia warzyw na kolację i potrzebowałem szybko bandaża)",
        options: ["myself", "me", "my", "mine"],
        correct: "myself",
        explanation: "'Myself' gdy podmiot i dopełnienie są TĄ SAMĄ OSOBĄ! Ty skaleczałeś siebie (accident). Zwrotne zaimki pokazują że akcja wraca do wykonawcy. 'Cut myself' znaczy że ty jesteś zarówno osobą tnącą jak i ranioną. To o przypadkowych само-urazach podczas codziennych aktywności."
      },
      {
        id: "reflex_2",
        question: "She bought _____ a new dress for the wedding party next weekend celebration.",
        translation: "(Kupiła sobie nową sukienkę na wesele w przyszły weekend)",
        options: ["herself", "her", "hers", "she"],
        correct: "herself",
        explanation: "'Herself' podkreśla że SAMA kupiła dla siebie! Nie ktoś inny kupił dla niej - to była jej decyzja i akcja. 'Bought herself' dodaje emfazę na niezależność lub self-indulgence. To może być self-care lub treat - kupowanie czegoś dla własnej przyjemności lub potrzeby."
      },
      {
        id: "reflex_3",
        question: "The cat is cleaning _____ after eating its dinner from the bowl.",
        translation: "(Kot czyści się po zjedzeniu swojej kolacji z miski)",
        options: ["itself", "it", "its", "it's"],
        correct: "itself",
        explanation: "'Itself' dla zwierząt czyściących się! Kot czyści siebie samego - zwrotna akcja. Zwierzęta często robią rzeczy 'themselves/itself' - jedzą, czyszczą, bawią się. 'Itself' pokazuje że to instynktowne, samodzielne zachowanie bez ludzkiej pomocy."
      },
      {
        id: "reflex_4",
        question: "Did you make this delicious cake _____ or did you buy it from bakery?",
        translation: "(Czy zrobiłeś to pyszne ciasto sam czy kupiłeś je w piekarni?)",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "'Yourself' dla podkreślenia że TY to zrobiłeś (nie ktoś inny)! 'Make it yourself' emfatyzuje personal achievement. To wyrażanie impresji - jeśli zrobiłeś sam, to impressive skill. Pytanie szuka potwierdzenia czy to homemade czy kupione - jakość sugeruje że może być profesjonalne."
      },
      {
        id: "reflex_5",
        question: "We enjoyed _____ at the beach party yesterday despite the cloudy weather.",
        translation: "(Dobrze się bawiliśmy na imprezie plażowej wczoraj pomimo pochmurnej pogody)",
        options: ["ourselves", "us", "our", "ours"],
        correct: "ourselves",
        explanation: "'Enjoy ourselves' to ustalona fraza dla dobrej zabawy! 'Enjoyed ourselves' znaczy dobrze się bawiliśmy. Zwrotna forma pokazuje że zabawa była wewnątrz grupy - cieszyliście się swoim towarzystwem. To idiomatyczne wyrażenie szczęścia i satysfakcji z doświadczenia lub wydarzenia."
      },
      {
        id: "reflex_6",
        question: "Be careful with that sharp knife or you'll hurt _____ badly!",
        translation: "(Uważaj z tym ostrym nożem albo skaleczysz się poważnie!)",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "'Hurt yourself' dla przypadkowych само-urazów! Ostrzeżenie że możesz zranić siebie. Zwrotny zaimek pokazuje że ty jesteś zarówno sprawcą jak ofiarą potencjalnego urazu. To częste w safety warnings - ostrzeganie kogoś żeby chronili siebie przed само-szkodą."
      },
      {
        id: "reflex_7",
        question: "The children dressed _____ without any help from parents this morning successfully.",
        translation: "(Dzieci ubrały się bez żadnej pomocy od rodziców dziś rano pomyślnie)",
        options: ["themselves", "them", "their", "theirs"],
        correct: "themselves",
        explanation: "'Dressed themselves' celebruje niezależność dzieci! Robiły to same bez assistance. Zwrotny zaimek podkreśla achievement - nauczyły się self-sufficiency. To milestone rodzicielski - gdy dzieci robią rzeczy solo to pokazuje rozwój i rosnącą autonomię."
      },
      {
        id: "reflex_8",
        question: "He taught _____ to play guitar by watching online videos and practicing daily.",
        translation: "(Nauczył się grać na gitarze oglądając video online i ćwicząc codziennie)",
        options: ["himself", "him", "his", "he"],
        correct: "himself",
        explanation: "'Taught himself' dla self-education! Nie miał nauczyciela - nauczył siebie. Zwrotny zaimek podkreśla autodidactic achievement - to jest impressive bo zrobił to bez formalnego instruktażu. To celebruje self-motivation i zdolność uczenia się independently."
      },
      {
        id: "reflex_9",
        question: "Please make _____ at home while I prepare some coffee and snacks for us.",
        translation: "(Proszę rozgość się podczas gdy przygotuję kawę i przekąski dla nas)",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "'Make yourself at home' to idiomatyczne zaproszenie! Znaczy 'czuj się komfortowo jakbyś był w swoim domu'. Zwrotna forma podkreśla że mają działać w swoim własnym komforcie. To gościnne wyrażenie - zapraszasz ich do relaksu i bycia nieformalnym w twojej przestrzeni."
      },
      {
        id: "reflex_10",
        question: "The problem will solve _____ if we just give it some time and patience.",
        translation: "(Problem rozwiąże się sam jeśli tylko damy mu trochę czasu i cierpliwości)",
        options: ["itself", "it", "its", "it's"],
        correct: "itself",
        explanation: "'Solve itself' dla problemów które znikają naturalnie! Problem rozwiązuje siebie (bez interwencji). To o sytuacjach które poprawiają się z czasem bez aktywnej akcji. Zwrotna forma sugeruje naturalną resolution - czasem najlepsze działanie to non-action i pozwolenie czasowi działać."
      },
      {
        id: "reflex_11",
        question: "They blamed _____ for the failure of the project that didn't go as planned.",
        translation: "(Obwiniali się za porażkę projektu który nie poszedł zgodnie z planem)",
        options: ["themselves", "them", "their", "theirs"],
        correct: "themselves",
        explanation: "'Blamed themselves' dla self-criticism lub winy! Winili siebie, nie innych. Zwrotna forma pokazuje internal fault-finding. To może być zdrowe (branie odpowiedzialności) lub niezdrowe (nadmierna samo-krytyka). Kontekst określa czy to constructive reflection czy harmful guilt."
      },
      {
        id: "reflex_12",
        question: "I need to push _____ harder if I want to achieve my ambitious fitness goals.",
        translation: "(Muszę się bardziej zmuszać jeśli chcę osiągnąć moje ambitne cele fitness)",
        options: ["myself", "me", "my", "mine"],
        correct: "myself",
        explanation: "'Push myself' dla self-motivation! Zmuszasz siebie do większego wysiłku. Zwrotny zaimek podkreśla internal drive - to ty versus ty, challenging własne limity. To o self-discipline i przekraczaniu comfort zones - wewnętrzny dialog motywacyjny prowadzący do wzrostu."
      },
      {
        id: "reflex_13",
        question: "The door will lock _____ automatically when you close it fully and firmly.",
        translation: "(Drzwi zamkną się automatycznie kiedy zamkniesz je całkowicie i mocno)",
        options: ["itself", "it", "its", "themselves"],
        correct: "itself",
        explanation: "'Lock itself' dla automatycznych mechanizmów! Drzwi zamykają siebie - automatic feature. Zwrotna forma opisuje self-operating systems. To o nowoczesnej technologii gdzie rzeczy funkcjonują independently - wbudowane mechanizmy wykonują akcje bez manual intervention."
      },
      {
        id: "reflex_14",
        question: "Help _____ to more food if you're still hungry after the first serving!",
        translation: "(Poczęstuj się więcej jedzenia jeśli wciąż jesteś głodny po pierwszej porcji!)",
        options: ["yourself", "you", "your", "yours"],
        correct: "yourself",
        explanation: "'Help yourself' to gościnne zaproszenie do wzięcia więcej! Znaczy 'weź sam ile chcesz'. Zwrotna forma daje pozwolenie do self-service bez pytania. To casualowe i przyjazne - sprawiasz że goście czują się komfortowo biorąc co potrzebują bez formalities."
      },
      {
        id: "reflex_15",
        question: "We pride _____ on delivering high quality products and excellent customer service always.",
        translation: "(Szczycimy się dostarczaniem wysokiej jakości produktów i doskonałej obsługi klienta zawsze)",
        options: ["ourselves", "us", "our", "ours"],
        correct: "ourselves",
        explanation: "'Pride ourselves on' dla business values! Firma szczyci się swoimi standardami. Zwrotna forma podkreśla wewnętrzną dumę i commitment do excellence. To o core identity - jakość nie jest przypadkowa ale celowa, źródło organizational pride. Używane w mission statements dla wyrażania fundamentalnych wartości."
      }
    ]
  },

  neither_either_detailed: {
    name: "Neither/Either - szczegółowo",
    description: "Wybory i negacje z dwoma opcjami",
    icon: Share2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "neith_1",
        question: "_____ of my two brothers lives abroad - one in Germany and the other in Canada.",
        translation: "(Obaj moi dwaj bracia mieszkają za granicą - jeden w Niemczech a drugi w Kanadzie)",
        options: ["Both", "Either", "Neither", "All"],
        correct: "Both",
        explanation: "'Both of' dla DWÓCH rzeczy robocych to samo! Oba braci mieszkają abroad. 'Both' potwierdza że statement aplikuje do obu. Czasownik jest mnogi: 'both live'. To o completeness pary - nie tylko jeden, ale dwóch, together making whole picture międzynarodowej rodziny."
      },
      {
        id: "neith_2",
        question: "_____ of the two answers is correct - they're both completely wrong unfortunately.",
        translation: "(Żadna z dwóch odpowiedzi nie jest poprawna - obie są całkowicie błędne niestety)",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'Neither of' neguje OBE opcje! Żadna odpowiedź nie jest dobra. Czasownik jest pojedynczy: 'neither is'. 'Neither' to strong double negation - odrzuca obie możliwości kompletnie. To używane gdy obydwie opcje zawodzą - potrzebna trzecia alternatywa lub całkiem inne podejście."
      },
      {
        id: "neith_3",
        question: "You can take _____ the bus or the train - both will get you there equally fast.",
        translation: "(Możesz wziąć albo autobus albo pociąg - oba dostarczą cię tam równie szybko)",
        options: ["either", "neither", "both", "any"],
        correct: "either",
        explanation: "'Either... or...' oferuje pozytywny wybór między dwoma! Oba są dobre opcje - wybierz którąkolwiek wolisz. 'Either' pokazuje flexibility - nie ma złego wyboru. To o równoważnych alternatywach gdzie rezultat jest ten sam niezależnie od wyboru - daje freedom wyboru."
      },
      {
        id: "neith_4",
        question: "I don't like _____ of these two shirts - can I see some different styles please?",
        translation: "(Nie lubię żadnej z tych dwóch koszul - czy mogę zobaczyć jakieś inne style proszę?)",
        options: ["either", "neither", "both", "any"],
        correct: "either",
        explanation: "'Don't like either' = don't like żadnej! Z negatywem używaj 'either' nie 'neither' (podwójna negacja). 'Don't... either' równa się 'neither' (ta sama znaczenie). To shopper expression - odrzucasz pokazane opcje i prosisz o więcej wyborów. Wyraża niezadowolenie z obecnych możliwości."
      },
      {
        id: "neith_5",
        question: "_____ my parents speak English well, so I had to translate for them during trip.",
        translation: "(Żadne z moich rodziców nie mówi dobrze po angielsku, więc musiałem tłumaczyć dla nich podczas wycieczki)",
        options: ["Neither of", "Either of", "Both of", "None of"],
        correct: "Neither of",
        explanation: "'Neither of my parents' neguje obu rodziców! Mama nie mówi AND tata nie mówi. 'Neither' + czasownik pojedynczy lub mnogi (oba akceptowane). To wyjaśnia czemu musiałeś być tłumaczem - żadne z nich nie miało language skills więc ty wypełniłeś tę rolę."
      },
      {
        id: "neith_6",
        question: "_____ solution will work perfectly - we need to find a completely different approach.",
        translation: "(Żadne rozwiązanie nie będzie działać perfekcyjnie - musimy znaleźć całkowicie inne podejście)",
        options: ["Neither", "Either", "Both", "Each"],
        correct: "Neither",
        explanation: "'Neither solution' odrzuca obie propozycje! Bez 'of' bo następuje bezpośrednio rzeczownik. 'Neither' + singular noun + singular verb. To o impasie - wypróbowane opcje nie działają więc potrzebna kreatywność dla całkiem nowej idei. Wyrażasz frustration z obecnymi choices."
      },
      {
        id: "neith_7",
        question: "I can meet you on _____ Tuesday or Wednesday - choose whichever day works best.",
        translation: "(Mogę się spotkać we wtorek lub w środę - wybierz który dzień działa najlepiej)",
        options: ["either", "neither", "both", "any"],
        correct: "either",
        explanation: "'Either Tuesday or Wednesday' oferuje flexible choice! Oba dni są OK dla ciebie - oni decydują. 'Either' komunikuje availability i accommodation. To bardzo cooperative - pokazujesz że jesteś otwarty na ich schedule, czyniąc aranżowanie spotkania łatwiejszym. Dwa równe, akceptowalne opcje."
      },
      {
        id: "neith_8",
        question: "_____ of us wanted to work overtime this weekend, we all preferred to rest.",
        translation: "(Żadne z nas nie chciało pracować po godzinach w ten weekend, wszyscy woleliśmy odpocząć)",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'Neither of us' dla dwóch osób! Ty nie chcesz AND druga osoba nie chce. Jeśli jest więcej niż dwa, użyj 'none of us'. 'Neither' specifically for pairs. Czasownik może być pojedynczy ('neither wants') lub mnogi ('neither want') - oba działają. To o mutual agreement w odmowie."
      },
      {
        id: "neith_9",
        question: "_____ restaurants were open late, so we had to cook dinner at home instead.",
        translation: "(Żadna restauracja nie była otwarta późno, więc musieliśmy ugotować kolację w domu zamiast)",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'Neither restaurant' (pojedynczy!) neguje obie! Restauracja A nie była otwarta AND restauracja B nie była. 'Neither' + singular noun to formalna konstrukcja. To wyjaśnia czemu musieliście gotować - żadna opcja jedzenia na mieście nie była available, wymuszając home cooking."
      },
      {
        id: "neith_10",
        question: "I haven't read _____ of these two books yet - which one would you recommend first?",
        translation: "(Nie przeczytałem żadnej z tych dwóch książek jeszcze - którą byś polecił pierwszą?)",
        options: ["either", "neither", "both", "any"],
        correct: "either",
        explanation: "'Haven't read either' = haven't read żadną! Negatyw + 'either' = neither (ta sama znaczenie). To pyta o rekomendację - skoro nie czytałeś żadnej, potrzebujesz guidance którą zacząć. 'Either' z negatywem unika double negative podczas utrzymywania znaczenia."
      },
      {
        id: "neith_11",
        question: "_____ coffee nor tea contains as much caffeine as energy drinks sold in stores.",
        translation: "(Ani kawa ani herbata nie zawiera tyle kofeiny co napoje energetyczne sprzedawane w sklepach)",
        options: ["Neither", "Either", "Both", "Not"],
        correct: "Neither",
        explanation: "'Neither... nor...' dla double negation! Kawa nie AND herbata nie - obie mają mniej kofeiny. To formalna konstrukcja łącząca dwie negatywne statements. Czasownik agrees z bliższym rzeczownikiem. Używane dla wyrażania że dwa elementy dzielą tę samą negatywną charakterystykę."
      },
      {
        id: "neith_12",
        question: "You can invite _____ John or Sarah to the party - we have room for one more guest.",
        translation: "(Możesz zaprosić albo Johna albo Sarah na imprezę - mamy miejsce dla jednego dodatkowego gościa)",
        options: ["either", "neither", "both", "any"],
        correct: "either",
        explanation: "'Either... or...' dla exclusive choice! Możesz zaprosić jednego LUB drugiego, nie obu (limited space). 'Either' wskazuje że musisz wybrać - obie są dobre opcje ale możesz wziąć tylko jedną. To o ograniczeniach wymagających decision między równie desirable alternatives."
      },
      {
        id: "neith_13",
        question: "_____ of the twins wants to study medicine - they both prefer engineering instead.",
        translation: "(Żadne z bliźniąt nie chce studiować medycyny - oboje wolą inżynierię zamiast)",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'Neither of the twins' dla shared negative preference! Bliźniak A nie chce AND bliźniak B nie chce. Obie mają tę samą odmowę. Czasownik pojedynczy 'wants' formalnie ale 'want' też słyszane. To o mutual agreement w wyborach kariery - czasem siblings mają podobne pasje."
      },
      {
        id: "neith_14",
        question: "I'm not going to _____ party this weekend - I'm too busy with work to attend.",
        translation: "(Nie idę na żadną imprezę w ten weekend - jestem zbyt zajęty pracą żeby uczestniczyć)",
        options: ["either", "neither", "both", "any"],
        correct: "either",
        explanation: "'Not... either' neguje obie parties! Nie idziesz na imprezę A ani na imprezę B. Z negatywem ('not going') używaj 'either'. To o prioritetach - praca override social life ten weekend. Wyjaśniasz całkowitą unavailability dla wszystkich social invitations."
      },
      {
        id: "neith_15",
        question: "_____ answer is acceptable for this question - you must choose one specific option.",
        translation: "(Każda odpowiedź jest akceptowalna dla tego pytania - musisz wybrać jedną konkretną opcję)",
        options: ["Either", "Neither", "Both", "Any"],
        correct: "Either",
        explanation: "'Either answer' (singular!) znaczy jedna lub druga! Obie są poprawne - flexibility w akceptacji. 'Either' + singular noun pokazuje że masz dwie dobre opcje i którakolwiek działa. To o test questions z multiple correct answers - daje comfort że nie ma jednej 'perfect' odpowiedzi."
      }
    ]
  }
};

export default part13Categories;