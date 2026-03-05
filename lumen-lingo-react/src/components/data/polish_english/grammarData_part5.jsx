/**
 * POLISH → ENGLISH GRAMMAR - PART 5
 * 4 categories, 15 questions each - Building fluency
 */

import { Lightbulb, Users, Gift, Compass } from "lucide-react";

export const part5Categories = {
  conditionals_mixed: {
    name: "Tryb warunkowy - mieszane typy",
    description: "Zero, first, second, third conditional",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "cond_1",
        question: "If you _____ water to 100 degrees Celsius at sea level, it always boils without exception.",
        translation: "(Jeśli podgrzejesz wodę do 100 stopni Celsjusza na poziomie morza, zawsze wrze bez wyjątku)",
        options: ["heat", "will heat", "heated", "would heat"],
        correct: "heat",
        explanation: "Zero conditional używa present simple w obu częściach dla uniwersalnych prawd! Fakty naukowe, prawa natury, rzeczy które są zawsze prawdziwe. 'If you heat... it boils' - oba present simple. To opisuje przyczynę i skutek który zachodzi za każdym razem bez wyjątku. Nie potrzeba 'will' bo to automatyczna prawda."
      },
      {
        id: "cond_2",
        question: "If it _____ tomorrow, we'll cancel the outdoor picnic and have it indoors instead.",
        translation: "(Jeśli jutro będzie padać, odwołamy piknik na zewnątrz i zrobimy go wewnątrz zamiast tego)",
        options: ["rains", "will rain", "rained", "would rain"],
        correct: "rains",
        explanation: "First conditional: present simple po 'if', 'will' w rezultacie! To dla realnych przyszłych możliwości. 'If it rains' (present), 'we'll cancel' (future). Nigdy nie używaj 'will' w klauzuli 'if' - to złota zasada. Część 'if' używa present nawet jeśli dotyczy przyszłości."
      },
      {
        id: "cond_3",
        question: "If I _____ a million dollars, I would travel around the world for a whole year without stopping.",
        translation: "(Gdybym miał milion dolarów, podróżowałbym po całym świecie przez cały rok bez przerwy)",
        options: ["had", "have", "will have", "would have"],
        correct: "had",
        explanation: "Second conditional używa past simple dla wyimaginowanej teraźniejszości/przyszłości! 'If I had' (past), 'I would travel' (conditional). To nierealne - NIE MASZ miliona dolarów. Forma przeszła nie znaczy przeszły czas - znaczy nierealność lub niskie prawdopodobieństwo. To myli Polaków ale to kluczowy wzorzec."
      },
      {
        id: "cond_4",
        question: "If she _____ harder last semester, she would have passed all her exams without any problems.",
        translation: "(Gdyby uczyła się więcej w zeszłym semestrze, zdałaby wszystkie egzaminy bez żadnych problemów)",
        options: ["had studied", "studied", "would study", "studies"],
        correct: "had studied",
        explanation: "Third conditional: past perfect w klauzuli 'if' dla nierealnej przeszłości! 'If she had studied' (past perfect), 'she would have passed' (conditional perfect). To o niemożliwej przeszłości - NIE uczyła się ciężko i NIE zdała. Nie możesz zmienić przeszłości, tylko wyobrażasz co mogło być inne."
      },
      {
        id: "cond_5",
        question: "If you _____ tired, you should go to bed earlier tonight instead of staying up late.",
        translation: "(Jeśli jesteś zmęczony, powinieneś iść spać wcześniej dziś wieczorem zamiast nie spać do późna)",
        options: ["are", "were", "will be", "would be"],
        correct: "are",
        explanation: "First conditional może używać 'should' zamiast 'will' dla rady! 'If you are tired, you should...' daje rekomendację bazując na obecnym stanie. To realne i praktyczne - jeśli ta sytuacja jest prawdziwa teraz, oto co powinieneś zrobić. Present simple po 'if' dla realnych obecnych sytuacji."
      },
      {
        id: "cond_6",
        question: "If I _____ you, I wouldn't accept that job offer because the salary is too low for your skills.",
        translation: "(Gdybym był tobą, nie przyjąłbym tej oferty pracy, bo wynagrodzenie jest za niskie jak na twoje umiejętności)",
        options: ["were", "was", "am", "would be"],
        correct: "were",
        explanation: "'If I were you' to ustalone wyrażenie dla dawania rady! Zawsze używaj 'were' (nie 'was') nawet jeśli 'I' normalnie bierze 'was'. To specjalna forma subjunctive zachowana w tej frazie. To nierealne - NIE jesteś nimi, wyobrażasz sobie. 'If I were you' to jeden z najczęstszych wzorców rad."
      },
      {
        id: "cond_7",
        question: "You'll be late for work _____ you leave the house right now, traffic is terrible this morning!",
        translation: "(Spóźnisz się do pracy, jeśli nie wyjdziesz z domu natychmiast, ruch jest okropny dziś rano!)",
        options: ["unless", "if", "when", "provided"],
        correct: "unless",
        explanation: "'Unless' znaczy 'jeśli nie' - to negatywny warunek! 'Unless you leave' = 'if you don't leave'. To sytuacja presji czasowej. 'Unless' jest bardzo częste w ostrzeżeniach i pilnych sytuacjach. Łączy 'if' + 'not' w jedno słowo, czyniąc mowę bardziej efektywną."
      },
      {
        id: "cond_8",
        question: "If he had taken my advice seriously, he _____ made such a big expensive mistake with his investment.",
        translation: "(Gdyby wziął moją radę na poważnie, nie zrobiłby takiego dużego kosztownego błędu ze swoją inwestycją)",
        options: ["wouldn't have", "won't have", "didn't", "doesn't"],
        correct: "wouldn't have",
        explanation: "Rezultat third conditional używa 'would have + past participle' dla nierealnych przeszłych rezultatów! 'Wouldn't have made' pokazuje co by się NIE stało gdyby przeszłość była inna. Ale przeszłość jest ustalona - ZROBIŁ błąd. To wyraża żal o niezmiennej przeszłości."
      },
      {
        id: "cond_9",
        question: "_____ you help me with this heavy box, please? I can't lift it by myself, it's too heavy.",
        translation: "(Czy pomógłbyś mi z tym ciężkim pudełkiem, proszę? Nie mogę go podnieść sam, jest za ciężkie)",
        options: ["Would", "Will", "Could", "Should"],
        correct: "Would",
        explanation: "'Would you' to grzeczna forma prośby! To struktura second conditional używana dla grzeczności. Bardziej grzeczna niż 'will you' (bezpośrednie). 'Would' tworzy dystans który czuje się bardziej pełen szacunku. Bardzo częste dla próśb - 'would you help/mind/like' to wszystkie grzeczne wzorce próśb których wszyscy używają codziennie."
      },
      {
        id: "cond_10",
        question: "If I _____ more free time, I would learn to play the piano and take professional lessons weekly.",
        translation: "(Gdybym miał więcej wolnego czasu, nauczyłbym się grać na pianinie i brałbym profesjonalne lekcje co tydzień)",
        options: ["had", "have", "will have", "would have"],
        correct: "had",
        explanation: "Second conditional dla życzeń o teraźniejszości! 'If I had more time' (forma przeszła = nierealna teraźniejszość). NIE MASZ czasu teraz. To dla rzeczy niemożliwych lub bardzo nieprawdopodobnych w twojej obecnej sytuacji. Past simple w klauzuli 'if' sygnalizuje nierealność, nie przeszły czas - dotyczy teraz, tylko wyimaginowane."
      },
      {
        id: "cond_11",
        question: "We'll go to the beach tomorrow _____ it doesn't rain, so let's check the weather forecast tonight.",
        translation: "(Pójdziemy na plażę jutro, jeśli nie będzie padać, więc sprawdźmy prognozę pogody wieczorem)",
        options: ["provided", "unless", "if", "when"],
        correct: "provided",
        explanation: "'Provided' znaczy 'pod warunkiem że' lub 'dopóki'! Podobne do 'if' ale bardziej formalne. 'Provided it doesn't rain' ustawia warunek dla planu. Działa też jako 'providing (that)'. To lekko bardziej wyrafinowane niż proste 'if' - używane w planowaniu i negocjacjach."
      },
      {
        id: "cond_12",
        question: "If you _____ your English vocabulary daily, you'll improve much faster than studying just once a week.",
        translation: "(Jeśli będziesz ćwiczył swoje angielskie słownictwo codziennie, poprawisz się znacznie szybciej niż ucząc się tylko raz w tygodniu)",
        options: ["practice", "will practice", "practiced", "would practice"],
        correct: "practice",
        explanation: "First conditional dla prawdopodobnej przyszłości bazującej na powtarzającej się akcji! 'If you practice' (nawyk), 'you'll improve' (rezultat). Present simple po 'if' nawet dla przyszłości bo mówisz o powtarzającej się akcji jako ogólnej prawdzie. Nawyk determinuje wynik."
      },
      {
        id: "cond_13",
        question: "What _____ you do if you won the lottery jackpot of ten million dollars tomorrow?",
        translation: "(Co byś zrobił, gdybyś wygrał główną wygraną na loterii dziesięciu milionów dolarów jutro?)",
        options: ["would", "will", "did", "do"],
        correct: "would",
        explanation: "Forma pytająca second conditional! 'What would you do if you won' - wyobrażanie nieprawdopodobnego scenariusza. 'Would' w pytaniu, 'won' (past simple) po 'if'. Wygranie loterii jest bardzo nieprawdopodobne (nierealne), więc second conditional. To częste dla hipotetycznych dyskusji o wyimaginowanych sytuacjach."
      },
      {
        id: "cond_14",
        question: "If they _____ invited us to the wedding, we would have definitely attended and brought a nice gift.",
        translation: "(Gdyby zaprosili nas na ślub, zdecydowanie byśmy uczestniczyli i przynieśli miły prezent)",
        options: ["had", "have", "would have", "will"],
        correct: "had",
        explanation: "Klauzula 'if' third conditional używa past perfect! 'If they had invited' = ale NIE zaprosili (niemożliwa przeszłość). Ślub już się odbył bez ciebie. Past perfect (had + past participle) pokazuje że to o zmianie historii - coś co się nie stało i teraz nie może."
      },
      {
        id: "cond_15",
        question: "_____ I had known about the traffic jam, I would have left home earlier this morning.",
        translation: "(Gdybym wiedział o korku, wyszedłbym z domu wcześniej dziś rano)",
        options: ["If", "When", "As", "Since"],
        correct: "If",
        explanation: "Third conditional dla żalu o przeszłości! NIE wiedziałeś o korku, więc NIE wyszedłeś wcześnie. Teraz się spóźniasz i żałujesz. 'If I had known' (past perfect), 'I would have left' (conditional perfect). Ten wzorzec wyraża życzenia o niezmiennej przeszłości - bardzo częste dla żalów."
      }
    ]
  },

  countable_uncountable: {
    name: "Policzalne vs niepoliczalne",
    description: "Much, many, few, little - które wybrać",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    questions: [
      {
        id: "count_1",
        question: "How _____ people are coming to your birthday party this Saturday evening?",
        translation: "(Ile osób przychodzi na twoją urodzinową imprezę w tę sobotę wieczorem?)",
        options: ["many", "much", "few", "little"],
        correct: "many",
        explanation: "Używaj 'many' z policzalnymi rzeczownikami w liczbie mnogiej! Ludzie są policzalni - możesz ich liczyć jeden po drugim. 'How many people' pyta o liczbę. 'Many' działa z rzeczami które możesz oddzielić i policzyć indywidualnie. Zapamiętaj: jeśli możesz powiedzieć 'jeden, dwa, trzy...' = many."
      },
      {
        id: "count_2",
        question: "There isn't _____ time left before the deadline, we need to work faster to finish everything.",
        translation: "(Nie ma zbyt wiele czasu do deadline'u, musimy pracować szybciej, żeby wszystko skończyć)",
        options: ["much", "many", "a lot", "lots"],
        correct: "much",
        explanation: "Używaj 'much' z niepoliczalnymi rzeczownikami w negatywach! 'Time' jest niepoliczalne - nie możesz powiedzieć 'one time, two times' w tym kontekście. W negatywach i pytaniach używaj 'much' dla niepoliczalnych. W pozytywnych zdaniach używaj 'a lot of' zamiast. 'Much' jest głównie dla pytań i negatywów."
      },
      {
        id: "count_3",
        question: "I have _____ friends at my new school, but they're all very nice and welcoming to me.",
        translation: "(Mam niewiele przyjaciół w mojej nowej szkole, ale wszyscy są bardzo mili i pomocni dla mnie)",
        options: ["few", "little", "a few", "a little"],
        correct: "few",
        explanation: "'Few' (bez 'a') znaczy niewiele i brzmi negatywnie! 'Friends' są policzalni. 'Few friends' = za mało przyjaciół (smutne). Ale 'a few friends' byłoby pozytywne = trochę przyjaciół (szczęśliwe). 'A' robi ogromną różnicę - bez tego brzmi jak problem, z tym brzmi okej."
      },
      {
        id: "count_4",
        question: "There's _____ milk in the fridge if you want to make coffee or cereal for breakfast.",
        translation: "(Jest trochę mleka w lodówce, jeśli chcesz zrobić kawę lub płatki na śniadanie)",
        options: ["a little", "a few", "little", "few"],
        correct: "a little",
        explanation: "'A little' dla małej ilości niepoliczalnego (pozytywne)! 'Milk' jest niepoliczalne, a 'a little' znaczy trochę ale niewiele - wystarczająco do użycia. Bez 'a' ('little milk') byłoby negatywne = prawie nic. 'A little' jest użyteczne i pozytywne - jest wystarczająco dla podstawowych potrzeb."
      },
      {
        id: "count_5",
        question: "We don't have _____ chairs for all the guests, we need to borrow some from the neighbors.",
        translation: "(Nie mamy wystarczająco krzeseł dla wszystkich gości, musimy pożyczyć trochę od sąsiadów)",
        options: ["enough", "many", "much", "lot of"],
        correct: "enough",
        explanation: "'Enough' działa z zarówno policzalnymi jak niepoliczalnymi! Znaczy wystarczającą ilość dla potrzeb. 'Enough chairs' (policzalne), 'enough money' (niepoliczalne) - oba działają. 'Enough' idzie PRZED rzeczownikami ale PO przymiotnikach. Super użyteczne słowo dla wyrażania wystarczalności lub jej braku."
      },
      {
        id: "count_6",
        question: "Could you give me _____ advice about learning English? I'm struggling with grammar rules.",
        translation: "(Czy mógłbyś dać mi trochę rady o uczeniu się angielskiego? Mam problem z zasadami gramatycznymi)",
        options: ["some", "a", "many", "few"],
        correct: "some",
        explanation: "'Advice' jest ZAWSZE niepoliczalne w angielskim! Nie możesz powiedzieć 'an advice' czy 'advices'. Używaj 'some advice' lub 'a piece of advice'. To różne od polskiego gdzie 'rada' jest policzalna. Angielski traktuje radę jako rzeczownik masowy jak woda lub informacja - brak formy mnogiej."
      },
      {
        id: "count_7",
        question: "I've made _____ progress in my Spanish studies this month by practicing conversation daily with natives.",
        translation: "(Zrobiłem spory postęp w moich studiach hiszpańskiego w tym miesiącu ćwicząc codziennie konwersację z native speakerami)",
        options: ["a lot of", "many", "few", "a few"],
        correct: "a lot of",
        explanation: "'Progress' jest niepoliczalny! Nie można powiedzieć 'many progress'. Używaj 'a lot of' lub 'much' (w negatywach/pytaniach). 'A lot of' działa z ZARÓWNO policzalnymi jak niepoliczalnymi, czyniąc to super wszechstronnym. W pozytywnych zdaniach to najłatwiejszy wybór - działa wszędzie!"
      },
      {
        id: "count_8",
        question: "How _____ money do you need to borrow? I can lend you up to two hundred dollars if that helps.",
        translation: "(Ile pieniędzy potrzebujesz pożyczyć? Mogę ci pożyczyć do dwustu dolarów, jeśli to pomoże)",
        options: ["much", "many", "lot", "lots"],
        correct: "much",
        explanation: "'Money' jest niepoliczalne! Nawet jeśli liczymy dolary/euro, samo słowo 'money' jest niepoliczalne. 'How much money' pyta o ilość. Indywidualne monety/banknoty są policzalne, ale 'money' jako koncept to rzeczownik masowy. Tak samo z 'cash' - niepoliczalne mimo bycia fizycznym."
      },
      {
        id: "count_9",
        question: "There are _____ of students in the library studying for tomorrow's final exams in various subjects.",
        translation: "(Jest mnóstwo studentów w bibliotece uczących się do jutrzejszych końcowych egzaminów z różnych przedmiotów)",
        options: ["lots", "lot", "much", "many"],
        correct: "lots",
        explanation: "'Lots of' (forma mnoga) jest bardzo casualowa i przyjazna! Działa z zarówno policzalnymi jak niepoliczalnymi. 'Lots of students' (policzalne), 'lots of time' (niepoliczalne). Bardziej nieformalne niż 'a lot of' czy 'many/much'. Świetne dla mówionego angielskiego - przyjazny i entuzjastyczny ton."
      },
      {
        id: "count_10",
        question: "I need _____ information about train schedules to Prague, can you help me find it online?",
        translation: "(Potrzebuję trochę informacji o rozkładach pociągów do Pragi, czy możesz pomóc mi znaleźć to online?)",
        options: ["some", "a", "many", "few"],
        correct: "some",
        explanation: "'Information' jest ZAWSZE niepoliczalne! Nie możesz powiedzieć 'an information' czy 'informations'. Używaj 'some information' lub 'a piece of information'. To główna różnica od polskiego gdzie informacja może być w liczbie mnogiej. Angielski: information = jak woda, nie można tego policzyć bezpośrednio."
      },
      {
        id: "count_11",
        question: "Very _____ people understand quantum physics completely, it's extremely complex and theoretical.",
        translation: "(Bardzo niewiele ludzi rozumie fizykę kwantową całkowicie, jest ekstremalnie złożona i teoretyczna)",
        options: ["few", "little", "much", "less"],
        correct: "few",
        explanation: "'Very few' podkreśla małą liczbę z policzalnymi! Silniejsze niż samo 'few'. 'People' są policzalni, więc 'few' nie 'little'. 'Very few' dodaje intensywność - naprawdę niewielu w ogóle. To dla podkreślania rzadkości lub rzadkości policzalnych rzeczy."
      },
      {
        id: "count_12",
        question: "She has _____ experience working with children, she just started her first teaching job last month.",
        translation: "(Ma niewiele doświadczenia w pracy z dziećmi, dopiero zaczęła swoją pierwszą pracę jako nauczycielka w zeszłym miesiącu)",
        options: ["little", "few", "a little", "a few"],
        correct: "little",
        explanation: "'Little' (bez 'a') znaczy niewiele - negatywne uczucie! 'Experience' jest niepoliczalne. 'Little experience' = niewystarczające, problematyczne. Ale 'a little experience' byłoby pozytywne = trochę doświadczenia (pomocne). 'A' całkowicie zmienia uczucie z negatywnego na pozytywne."
      },
      {
        id: "count_13",
        question: "Can I have _____ more coffee, please? Just half a cup would be perfect, thank you.",
        translation: "(Czy mogę prosić trochę więcej kawy? Pół filiżanki byłoby idealne, dziękuję)",
        options: ["some", "a", "any", "many"],
        correct: "some",
        explanation: "Używaj 'some' w prośbach nawet jeśli to pytania! Normalnie pytania używają 'any', ale oferty i prośby używają 'some' żeby brzmieć bardziej pozytywnie i oczekując 'tak'. 'Some more coffee' brzmi przyjaźnie i z nadzieją. 'Any more coffee' byłoby bardziej neutralne lub wątpliwe."
      },
      {
        id: "count_14",
        question: "There are only _____ cookies left in the jar, maybe three or four at most, save some for later.",
        translation: "(Zostało tylko kilka ciastek w słoiku, może trzy lub cztery najwyżej, zostaw trochę na później)",
        options: ["a few", "a little", "few", "little"],
        correct: "a few",
        explanation: "'A few' znaczy mała liczba (policzalne, pozytywne)! 'Cookies' są policzalne. 'A few' jest pozytywne - SĄ trochę (dobra wiadomość). Samo 'few cookies' podkreślałoby rzadkość negatywnie. Kontekst 'only' już pokazuje ograniczenie, więc 'a few' utrzymuje to faktyczne nie zbyt negatywne."
      },
      {
        id: "count_15",
        question: "I don't have _____ patience for people who are always late and disrespectful of others' time.",
        translation: "(Nie mam zbyt wiele cierpliwości dla ludzi, którzy zawsze się spóźniają i nie szanują czasu innych)",
        options: ["much", "many", "lot", "few"],
        correct: "much",
        explanation: "'Patience' jest niepoliczalna! Nie można policzyć jednostek cierpliwości. 'Don't have much patience' pokazuje niską tolerancję. W negatywach 'much' jest naturalne z niepoliczalnymi rzeczownikami. Pozytywne zdanie użyłoby 'a lot of patience', ale negatywne używa 'much' - to standardowy wzorzec dla niepoliczalnych w negatywach."
      }
    ]
  },

  make_vs_do: {
    name: "Make vs Do - różnice",
    description: "Kiedy 'make' a kiedy 'do'",
    icon: Users,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    questions: [
      {
        id: "make_do_1",
        question: "I need to _____ my homework before I can go out to play with my friends this afternoon.",
        translation: "(Muszę zrobić moją pracę domową zanim będę mógł wyjść pobawić się z przyjaciółmi dziś po południu)",
        options: ["do", "make", "have", "take"],
        correct: "do",
        explanation: "Zawsze 'DO homework'! To ustalona kolokacja którą musisz zapamiętać. 'Do' jest dla zadań, aktywności, pracy. Nie można powiedzieć 'make homework'. Pomyśl: do = wykonywać aktywność, make = tworzyć/produkować coś fizycznego. Praca domowa to aktywność którą wykonujesz, nie coś co tworzysz."
      },
      {
        id: "make_do_2",
        question: "My mother _____ delicious apple pie every Sunday for our family dinner together.",
        translation: "(Moja mama robi pyszne szarlotki każdej niedzieli na nasz rodzinny obiad razem)",
        options: ["makes", "does", "cooks", "bakes"],
        correct: "makes",
        explanation: "'Make' dla jedzenia i posiłków! ROBISZ breakfast/lunch/dinner/cake. Tworzysz coś co nie istniało. 'Do' nie zadziałałoby. 'Cook' i 'bake' też są poprawne ale bardziej konkretne - 'make' jest ogólne dla całego przygotowania jedzenia. 'Make' = produkować/tworzyć coś namacalnego."
      },
      {
        id: "make_do_3",
        question: "Can you _____ me a favor and help me move this heavy furniture to the other room?",
        translation: "(Czy możesz wyświadczyć mi przysługę i pomóc mi przestawić te ciężkie meble do drugiego pokoju?)",
        options: ["do", "make", "give", "bring"],
        correct: "do",
        explanation: "'Do someone a favor' to ustalone wyrażenie! Zawsze 'do', nigdy 'make' dla przysług. To idiomatyczne - nie ma logicznego powodu, po prostu zapamiętaj. Bardzo częsta fraza dla proszenia o pomoc. 'Could you do me a favor?' to jeden z najbardziej użytecznych grzecznych wzorców próśb."
      },
      {
        id: "make_do_4",
        question: "He _____ a lot of money working as a software engineer at a big tech company in San Francisco.",
        translation: "(Zarabia dużo pieniędzy pracując jako inżynier oprogramowania w dużej firmie technologicznej w San Francisco)",
        options: ["makes", "does", "earns", "gets"],
        correct: "makes",
        explanation: "'Make money' znaczy zarabiać dochód! Ustalona kolokacja. 'Earn money' też działa (bardziej formalne), ale 'make money' jest częstsze w casualowej mowie. Nie można powiedzieć 'do money'. 'Make' tutaj dotyczy produkowania/generowania pieniędzy przez pracę. Zarówno 'make' jak 'earn' są poprawne."
      },
      {
        id: "make_do_5",
        question: "I always _____ my bed in the morning right after I wake up and get out of it.",
        translation: "(Zawsze ścielę łóżko rano zaraz po tym jak się obudzę i z niego wstanę)",
        options: ["make", "do", "fix", "prepare"],
        correct: "make",
        explanation: "'Make the bed' znaczy ułożyć prześcieradła i koce schludnie! Ustalone wyrażenie, zawsze 'make'. Tworzysz porządek z bałaganu. 'Do the bed' jest błędne. To jedna z tych kolokacji które nie podążają logiki - po prostu musisz to zapamiętać jako ustaloną frazę."
      },
      {
        id: "make_do_6",
        question: "What do you _____ for a living? I'm a teacher at a primary school in the suburbs.",
        translation: "(Co robisz na życie? Jestem nauczycielem w podstawówce na przedmieściach)",
        options: ["do", "make", "work", "have"],
        correct: "do",
        explanation: "'What do you do?' pyta o twoją pracę! Ustalony wzorzec pytania. 'Do for a living' = twój zawód. Nie można użyć 'make' tutaj. To jedno z pierwszych pytań których się uczysz - niezbędne dla przedstawień. 'Do' dotyczy aktywności i zawodów."
      },
      {
        id: "make_do_7",
        question: "Stop _____ so much noise! I'm trying to sleep and you're being way too loud downstairs.",
        translation: "(Przestań robić tyle hałasu! Próbuję spać, a ty jesteś zbyt głośny na dole)",
        options: ["making", "doing", "having", "taking"],
        correct: "making",
        explanation: "'Make noise' dla tworzenia dźwięku! Zawsze 'make', nie 'do'. TWORZYSZ hałas który wcześniej nie istniał. 'Make' jest dla produkcji - make noise, make music, make a sound. To wszystko o generowaniu czegoś słyszalnego. 'Do' nie miałoby sensu bo hałas to coś co produkujesz."
      },
      {
        id: "make_do_8",
        question: "I _____ the dishes every evening after dinner while my sister dries them with a towel.",
        translation: "(Zmywam naczynia każdego wieczorem po kolacji, podczas gdy moja siostra je wyciera ręcznikiem)",
        options: ["do", "make", "wash", "clean"],
        correct: "do",
        explanation: "'Do the dishes' to standardowa fraza! 'Wash the dishes' też działa, ale 'do the dishes' jest częstsze w codziennej mowie. Zawsze 'do', nigdy 'make'. 'Do' jest używane dla domowych obowiązków: do the laundry, do the cleaning, do the ironing - wszystkie rutynowe zadania."
      },
      {
        id: "make_do_9",
        question: "She _____ a big mistake by not studying for the exam, and now she's worried about failing.",
        translation: "(Zrobiła duży błąd nie ucząc się do egzaminu i teraz martwi się że nie zda)",
        options: ["made", "did", "had", "took"],
        correct: "made",
        explanation: "'Make a mistake' to poprawna kolokacja! Zawsze 'make', nigdy 'do' z błędami. TWORZYSZ błąd. Ten sam wzorzec: make an error, make a mess, make trouble. 'Make' dla negatywnych kreacji. To idiomatyczne - 'do a mistake' brzmi źle dla native speakerów."
      },
      {
        id: "make_do_10",
        question: "I need to _____ some exercise regularly to stay healthy and fit as I get older.",
        translation: "(Muszę regularnie ćwiczyć, żeby pozostać zdrowym i w formie w miarę jak się starzeję)",
        options: ["do", "make", "practice", "have"],
        correct: "do",
        explanation: "'Do exercise' dla aktywności fizycznej! 'Do' ze sportami i ćwiczeniami: do yoga, do aerobics, do exercises. Ale 'play' ze sportami piłkarskimi: play football. I 'go' ze sportami -ing: go swimming, go running. Każdy czasownik ma swoją kategorię sportów/aktywności."
      },
      {
        id: "make_do_11",
        question: "They _____ a decision to move to Canada next year for better job opportunities and life quality.",
        translation: "(Podjęli decyzję przeprowadzki do Kanady w przyszłym roku dla lepszych możliwości pracy i jakości życia)",
        options: ["made", "did", "took", "had"],
        correct: "made",
        explanation: "'Make a decision' znaczy zdecydować! TWORZYSZ decyzję. 'Take a decision' też jest używane (brytyjski) ale 'make a decision' jest bardziej uniwersalne. Nie można użyć 'do'. 'Make' dla mentalnej/kreatywnej produkcji: make a choice, make a plan, make a promise."
      },
      {
        id: "make_do_12",
        question: "I have to _____ my best to finish this project on time despite all the difficulties and obstacles.",
        translation: "(Muszę dać z siebie wszystko, żeby skończyć ten projekt na czas pomimo wszystkich trudności i przeszkód)",
        options: ["do", "make", "give", "try"],
        correct: "do",
        explanation: "'Do your best' znaczy starać się jak najciężej! Ustalone wyrażenie z 'do'. Wykonujesz na maksymalnym wysiłku. Nie można powiedzieć 'make your best'. Częsta motywacyjna fraza. Podobne: do your worst (przeciwieństwo), do your part (odpowiedzialność). 'Do' dla wysiłku i wykonania."
      },
      {
        id: "make_do_13",
        question: "Let me _____ you a question about English grammar that has been confusing me for weeks.",
        translation: "(Pozwól mi zadać ci pytanie o angielską gramatykę, które mnie myli od tygodni)",
        options: ["ask", "make", "do", "give"],
        correct: "ask",
        explanation: "Podchwytliwe! 'ASK a question', nie make czy do! To nie wybór make/do - to całkiem inny czasownik. Polacy często robią ten błąd. 'Ask a question', 'answer a question' - to poprawne czasowniki. 'Make a question' jest błędne - pytań się nie robi, się je zadaje."
      },
      {
        id: "make_do_14",
        question: "Could you _____ me a cup of tea, please? I'm feeling cold and need something warm to drink.",
        translation: "(Czy mógłbyś zrobić mi filiżankę herbaty, proszę? Jest mi zimno i potrzebuję czegoś ciepłego do picia)",
        options: ["make", "do", "prepare", "cook"],
        correct: "make",
        explanation: "'Make' dla napojów! Make tea, make coffee, make a smoothie. Tworzysz/przygotowujesz napój. 'Do' nie działa dla napojów. 'Prepare' jest możliwe ale formalne - 'make' jest standardem dla wszystkich napojów. Pomyśl o robieniu jako proces tworzenia - łączenie składników w finalny produkt."
      },
      {
        id: "make_do_15",
        question: "She _____ friends very easily wherever she goes because she's outgoing and friendly with everyone.",
        translation: "(Łatwo zaprzyjaźnia się gdziekolwiek idzie, bo jest towarzyska i przyjazna dla wszystkich)",
        options: ["makes", "does", "has", "gets"],
        correct: "makes",
        explanation: "'Make friends' znaczy tworzyć przyjaźnie! TWORZYSZ nowe przyjaźnie. Zawsze 'make', nigdy 'do'. Częste wyrażenie dla społecznych połączeń. Też: make enemies (przeciwieństwo), make acquaintances (mniej bliskie). 'Make' dotyczy wprowadzania relacji do istnienia przez społeczną interakcję."
      }
    ]
  }
};

export default part5Categories;