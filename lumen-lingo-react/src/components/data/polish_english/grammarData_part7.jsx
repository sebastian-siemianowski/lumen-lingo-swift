/**
 * POLISH → ENGLISH GRAMMAR - PART 7
 * 3 categories, 15 questions each - Mastery level
 */

import { Crown, Star, Award } from "lucide-react";

export const part7Categories = {
  word_order_adverbs: {
    name: "Szyk wyrazów - przysłówki",
    description: "Gdzie umieszczać przysłówki w zdaniu",
    icon: Crown,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "word_adv_1",
        question: "I _____ go to the gym on Sundays because I prefer to rest and relax at home.",
        translation: "(Nigdy nie chodzę na siłownię w niedziele, bo wolę odpoczywać i relaksować się w domu)",
        options: ["never", "don't never", "not", "no"],
        correct: "never",
        explanation: "'Never' idzie PRZED głównym czasownikiem! Jedno słowo negatywne wystarczy - nie używaj 'don't' + 'never' (podwójna negacja). Pozycja: 'I never go' nie 'I go never'. Przysłówki częstotliwości (always, usually, often, sometimes, never) siedzą przed głównym czasownikiem ale po czasowniku 'be'. To ustalona zasada pozycji."
      },
      {
        id: "word_adv_2",
        question: "She _____ speaks English perfectly despite studying for only two years, her progress is remarkable.",
        translation: "(Już mówi po angielsku perfekcyjnie pomimo studiowania tylko przez dwa lata, jej postępy są godne podziwu)",
        options: ["already", "yet", "still", "just"],
        correct: "already",
        explanation: "'Already' pokazuje że coś stało się wcześniej niż oczekiwano! Idzie przed głównym czasownikiem: 'already speaks'. Pokazuje zaskoczenie szybkim postępem. Różne od 'yet' (pytania/negatywy) i 'still' (kontynuacja). 'Already' w pozytywnych zdaniach podkreśla wczesność lub szybkość - nauczyła się szybciej niż normalnie."
      },
      {
        id: "word_adv_3",
        question: "Have you finished your homework _____? The deadline is tomorrow morning at 9 AM sharp.",
        translation: "(Czy skończyłeś już swoją pracę domową? Termin to jutro rano równo o 9)",
        options: ["yet", "already", "still", "just"],
        correct: "yet",
        explanation: "'Yet' idzie na KOŃCU pytań i negatywów! 'Have you finished yet?' pyta czy ukończenie stało się do teraz. Nie można użyć 'already' w pytaniach (chyba że oczekujesz 'tak'). 'Yet' w pytaniach jest neutralne - nie znasz odpowiedzi. Końcowa pozycja jest ustalona dla 'yet'."
      },
      {
        id: "word_adv_4",
        question: "I have _____ finished my breakfast, I only sat down at the table two minutes ago.",
        translation: "(Właśnie skończyłem moje śniadanie, usiadłem przy stole tylko dwie minuty temu)",
        options: ["just", "yet", "already", "still"],
        correct: "just",
        explanation: "'Just' znaczy bardzo niedawno - chwilę temu! Idzie przed past participle w present perfect: 'have just finished'. Pokazuje że akcja jest świeża i natychmiastowa. Pozycja między 'have' a głównym czasownikiem. 'Just' podkreśla jak niedawno - to dosłownie właśnie się stało, bardzo blisko teraz."
      },
      {
        id: "word_adv_5",
        question: "He is _____ a very kind and helpful person despite all the difficulties he's faced in life.",
        translation: "(On jest zawsze bardzo miłą i pomocną osobą pomimo wszystkich trudności, które napotkał w życiu)",
        options: ["always", "often", "usually", "sometimes"],
        correct: "always",
        explanation: "'Always' idzie PO czasowniku 'be'! 'Is always kind' - inna pozycja niż z innymi czasownikami. Przysłówki częstotliwości następują po 'be' ale poprzedzają inne czasowniki. To ważny wyjątek do nauczenia. 'Always' tutaj opisuje permanentną cechę - jego życzliwość jest stała pomimo wyzwań."
      },
      {
        id: "word_adv_6",
        question: "I _____ haven't _____ my keys anywhere, they seem to have disappeared completely from the house.",
        translation: "(Wciąż nie znalazłem moich kluczy nigdzie, wydają się całkowicie zniknąć z domu)",
        options: ["still / found", "yet / found", "already / find", "just / found"],
        correct: "still / found",
        explanation: "'Still' przed 'haven't' podkreśla kontynuację nie znajdowania! 'Still haven't found' pokazuje frustrację że coś się nie stało mimo upływu czasu. Bardziej emocjonalne niż 'haven't found yet'. Pozycja: still + haven't + past participle. Stresuje trwającą porażkę w ukończeniu akcji."
      },
      {
        id: "word_adv_7",
        question: "They _____ watch TV in the evenings, preferring to read books or play board games as family.",
        translation: "(Rzadko oglądają telewizję wieczorami, woląc czytać książki lub grać w gry planszowe jako rodzina)",
        options: ["rarely", "rare", "never", "few"],
        correct: "rarely",
        explanation: "'Rarely' (przysłówek) znaczy rzadko lub niezbyt często! Idzie przed głównym czasownikiem jak inne przysłówki częstotliwości. Pokazuje niską częstotliwość bez totalnej negacji (w przeciwieństwie do 'never'). Pozycja jest przed 'watch'. 'Rare' to przymiotnik - nie można używać dla czasowników. Forma przysłówkowa '-ly' potrzebna dla opisywania częstotliwości."
      },
      {
        id: "word_adv_8",
        question: "We have _____ been to that new restaurant everyone is talking about, let's go try it tonight!",
        translation: "(Nigdy nie byliśmy w tej nowej restauracji, o której wszyscy mówią, chodźmy spróbować dziś wieczorem!)",
        options: ["never", "ever", "yet", "already"],
        correct: "never",
        explanation: "'Never' z present perfect pokazuje zerowe przeszłe doświadczenie! 'Have never been' = ani razu w życiu. Idzie między 'have' a past participle. To silniejsze niż 'haven't been' - podkreśla że miałeś ZEROWE doświadczenie z tym w ogóle, czyniąc to ekscytującym do wypróbowania."
      },
      {
        id: "word_adv_9",
        question: "She _____ her promises and always does exactly what she says she will do.",
        translation: "(Zawsze dotrzymuje swoich obietnic i zawsze robi dokładnie to, co mówi że zrobi)",
        options: ["always keeps", "keeps always", "is always keeping", "always is keeping"],
        correct: "always keeps",
        explanation: "Przysłówek częstotliwości PRZED głównym czasownikiem w prostych czasach! 'Always keeps' to poprawny szyk wyrazów. 'Keeps always' brzmi źle. To fundamentalna zasada: przysłówek + czasownik w present/past simple. Wyjątek: po czasowniku 'be'. Z czasownikami akcji przysłówki częstotliwości przychodzą pierwsze przed czasownikiem."
      },
      {
        id: "word_adv_10",
        question: "I _____ go jogging in the morning before work, maybe three or four times a week usually.",
        translation: "(Czasami biega rano przed pracą, może trzy lub cztery razy w tygodniu zazwyczaj)",
        options: ["sometimes", "some times", "sometime", "some time"],
        correct: "sometimes",
        explanation: "'Sometimes' (jedno słowo) znaczy okazjonalnie! Idzie na początku, środku lub końcu zdania - bardzo elastyczne. 'Some times' (dwa słowa) znaczy kilka przypadków. 'Sometime' = w nieznanym czasie w przyszłości. 'Some time' = okres czasu. Pisownia całkowicie zmienia znaczenie!"
      },
      {
        id: "word_adv_11",
        question: "Have you _____ eaten snails? It's a French delicacy that many people find unusual but delicious.",
        translation: "(Czy kiedykolwiek jadłeś ślimaki? To francuska specjalność, którą wiele osób uważa za niezwykłą ale pyszną)",
        options: ["ever", "never", "already", "yet"],
        correct: "ever",
        explanation: "'Ever' w pytaniach pyta o jakikolwiek czas w życiowym doświadczeniu! Idzie przed past participle: 'Have you ever eaten'. To dla pytania czy doświadczenie w ogóle istnieje w czyjejś historii. 'Ever' czyni to o całym życiu, nie niedawnej przeszłości. Częsty wzorzec dla awanturniczych lub niezwykłych doświadczeń."
      },
      {
        id: "word_adv_12",
        question: "I can _____ understand why he made such a strange decision without consulting anyone first.",
        translation: "(Ledwo mogę zrozumieć czemu podjął tak dziwną decyzję bez konsultacji z kimkolwiek najpierw)",
        options: ["hardly", "hard", "nearly", "almost"],
        correct: "hardly",
        explanation: "'Hardly' znaczy prawie nie - bardzo mało! Idzie po czasownikach modalnych: 'can hardly understand'. To negatywny przysłówek wyrażający trudność. Różny od 'hard' (przymiotnik lub przysłówek znaczący 'z wysiłkiem'). 'Hardly' idzie z modalnym lub przed głównym czasownikiem - pokazuje poważne ograniczenie lub prawie niemożliwość."
      },
      {
        id: "word_adv_13",
        question: "They are _____ late for appointments, they're the most punctual people I know in my life.",
        translation: "(Nigdy się nie spóźniają na spotkania, są najbardziej punktualnymi ludźmi, których znam w życiu)",
        options: ["never", "ever", "not", "no"],
        correct: "never",
        explanation: "'Never' po czasowniku 'be'! 'Are never late' podąża zasadę że przysłówki częstotliwości przychodzą PO 'be'. To opisuje permanentną cechę - ich konsekwentną punktualność. Negatywna częstotliwość (never, rarely, seldom) działa tak samo jak pozytywna (always, usually) - pozycja po 'be', przed innymi czasownikami."
      },
      {
        id: "word_adv_14",
        question: "I _____ like spicy food much, I prefer mild flavors that don't burn my mouth.",
        translation: "(Nie lubię za bardzo pikantnego jedzenia, wolę łagodne smaki, które nie palą mi w ustach)",
        options: ["don't", "doesn't", "not", "no"],
        correct: "don't",
        explanation: "Struktura 'not...much' potrzebuje pomocnika! 'Don't like much' jest poprawne. Nie można powiedzieć 'not like much' bez pomocnika. 'Much' na końcu pokazuje niski stopień lubienia. To różne od 'don't like' (całkowita niechęć) - 'don't like much' znaczy słabą preferencję lub łagodną niechęć."
      },
      {
        id: "word_adv_15",
        question: "We _____ visited Rome when we were traveling through Italy for three weeks last summer.",
        translation: "(Również odwiedziliśmy Rzym, kiedy podróżowaliśmy przez Włochy przez trzy tygodnie zeszłego lata)",
        options: ["also", "too", "as well", "either"],
        correct: "also",
        explanation: "'Also' idzie przed głównym czasownikiem! 'Also visited' pokazuje dodanie do innych odwiedzonych miast. 'Too' i 'as well' idą na KOŃCU zdania. 'Also' to przysłówek środkowej pozycji. 'Either' jest tylko dla negatywów. Pozycja ma znaczenie: also (środek), too/as well (koniec). To o dodawaniu informacji - odwiedziłeś inne miejsca I Rzym."
      }
    ]
  },

  wishes_and_regrets: {
    name: "Życzenia i żal",
    description: "Wyrażanie wishes, regrets, preferences",
    icon: Star,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "wish_1",
        question: "I wish I _____ speak perfect English fluently like a native speaker without any accent at all.",
        translation: "(Chciałbym mówić perfekcyjnie po angielsku jak native speaker bez żadnego akcentu w ogóle)",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "'Wish + past simple' dla niemożliwych obecnych życzeń! 'Wish I could speak' = ale NIE MOGĘ teraz. Forma przeszła pokazuje nierealność. Używaj 'could' dla umiejętności, past simple dla stanów. To o chceniu czegoś innego od obecnej rzeczywistości - przeszły czas sygnalizuje że życzenie jest nierealne."
      },
      {
        id: "wish_2",
        question: "I wish you _____ stop making so much noise, I'm trying to concentrate on my work here!",
        translation: "(Chciałbym żebyś przestał robić tyle hałasu, próbuję się skoncentrować na mojej pracy tutaj!)",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'Wish + would' dla denerwujących obecnych nawyków które chcesz zmienić! Wyraża frustrację z czyjimś zachowaniem. 'Wish you would stop' = proszę zmień to zachowanie! To narzekanie przebrane za życzenie. Różne od 'wish + past simple' - 'would' jest specjalnie dla proszenia o zmianę zachowania u innych."
      },
      {
        id: "wish_3",
        question: "I wish I _____ studied harder for that exam, now I'm worried I might have failed it completely.",
        translation: "(Chciałbym żebym uczył się ciężej na ten egzamin, teraz martwię się że mogłem całkowicie nie zdać)",
        options: ["had", "have", "has", "would"],
        correct: "had",
        explanation: "'Wish + past perfect' dla żalów o przeszłości! 'Wish I had studied' = ale NIE uczyłem się wystarczająco ciężko. Nie możesz zmienić przeszłości, tylko jej żałować. Past perfect pokazuje że życzenie dotyczy czegoś już zrobionego i skończonego - jest za późno żeby naprawić. To wyraża wyrzuty sumienia."
      },
      {
        id: "wish_4",
        question: "If only I _____ more time to finish this project properly without rushing through it!",
        translation: "(Gdybym tylko miał więcej czasu, żeby skończyć ten projekt prawidłowo bez pośpiechu!)",
        options: ["had", "have", "has", "will have"],
        correct: "had",
        explanation: "'If only' jest silniejsze niż 'wish'! Bardziej dramatyczne i emocjonalne. 'If only I had' = silne życzenie o teraźniejszości (nie mam czasu). Ta sama gramatyka co 'wish' - forma przeszła dla nierealnej teraźniejszości. 'If only' często pokazuje desperację lub silną emocję o chceniu innej teraźniejszości."
      },
      {
        id: "wish_5",
        question: "She wishes she _____ taller because all her friends are much taller than her currently.",
        translation: "(Chciałaby być wyższa, bo wszystkie jej przyjaciółki są znacznie wyższe od niej obecnie)",
        options: ["were", "was", "is", "will be"],
        correct: "were",
        explanation: "Z 'wish' używaj 'were' dla wszystkich osób (subjunctive)! 'Wish I/he/she were' - nie 'was'. To formalna gramatyka - 'were' to forma subjunctive dla nierealnych sytuacji. Casualowa mowa używa 'was' ale 'were' jest poprawne. Pokazuje że sytuacja jest przeciwna faktom - ona NIE JEST wysoka."
      },
      {
        id: "wish_6",
        question: "I'd rather _____ at home tonight than go out to the noisy crowded club with everyone.",
        translation: "(Wolałbym zostać w domu dziś wieczorem niż wyjść do głośnego zatłoczonego klubu ze wszystkimi)",
        options: ["stay", "to stay", "staying", "stayed"],
        correct: "stay",
        explanation: "'Would rather + czasownik bazowy' dla preferencji! Bez 'to' - tylko forma bazowa. 'Rather stay' wyraża preferencję między opcjami. To częste dla wybierania między dwiema możliwościami. Bardziej zdecydowane niż 'would like' - dotyczy porównania, aktywnego preferowania jednego nad drugim."
      },
      {
        id: "wish_7",
        question: "I wish it _____ raining so we could go outside and enjoy the beautiful park nearby.",
        translation: "(Chciałbym żeby przestało padać, żebyśmy mogli wyjść na zewnątrz i cieszyć się pięknym pobliskim parkiem)",
        options: ["would stop", "stops", "stopped", "will stop"],
        correct: "would stop",
        explanation: "'Wish + would' dla rzeczy które chcesz zmienić! Pogoda, sytuacje, zachowanie innych ludzi. 'Wish it would stop' pokazuje frustrację z obecnym deszczem. Nie możesz kontrolować pogody ale chcesz żeby się zmieniła. 'Would' tutaj jest dla proszenia o zmianę w sytuacji poza twoją kontrolą."
      },
      {
        id: "wish_8",
        question: "If only we _____ left earlier, we wouldn't have missed the train to Manchester this morning!",
        translation: "(Gdybyśmy tylko wyjechali wcześniej, nie przegapilibyśmy pociągu do Manchesteru dziś rano!)",
        options: ["had", "have", "would", "will"],
        correct: "had",
        explanation: "'If only + past perfect' dla przeszłych żalów! Silniejsze niż 'wish I had'. 'If only we had left' = ale NIE wyjechaliśmy wcześnie (przeszły fakt). Przegapiłeś pociąg i teraz żałujesz czasu. Past perfect pokazuje że to o ustalonej, niezmiennej przeszłości. Bardzo emocjonalne wyrażenie żalu."
      },
      {
        id: "wish_9",
        question: "I'd rather you _____ smoke in the house, it makes everything smell bad and unhealthy.",
        translation: "(Wolałbym żebyś nie palił w domu, sprawia że wszystko brzydko pachnie i jest niezdrowe)",
        options: ["didn't", "don't", "wouldn't", "not"],
        correct: "didn't",
        explanation: "'Would rather + past simple' dla preferencji o innych! 'Rather you didn't smoke' = proszę nie pal (grzeczna prośba przebrana za preferencję). Forma przeszła pokazuje że to o hipotetycznym ideale - co wolałbyś w perfekcyjnym świecie. Łagodniejsze niż bezpośredni rozkaz 'don't smoke'."
      },
      {
        id: "wish_10",
        question: "She wishes she _____ bought that dress when it was on sale, now it's sold out everywhere.",
        translation: "(Chciałaby żeby kupiła tę sukienkę, kiedy była na wyprzedaży, teraz jest wyprzedana wszędzie)",
        options: ["had", "has", "would", "will"],
        correct: "had",
        explanation: "'Wish + past perfect' dla straconych okazji! NIE kupiła gdy mogła, teraz żałuje. Past perfect pokazuje że szansa minęła - jest za późno. Częste dla żalów zakupowych, straconych szans, rzeczy które powinieneś był zrobić ale nie zrobiłeś. Podkreśla utraconą okazję."
      },
      {
        id: "wish_11",
        question: "I wish I _____ have to work this weekend, I really need to rest and spend time with family.",
        translation: "(Chciałbym żeby nie musiał pracować w ten weekend, naprawdę muszę odpocząć i spędzić czas z rodziną)",
        options: ["didn't", "don't", "wouldn't", "won't"],
        correct: "didn't",
        explanation: "'Wish + didn't have to' dla niechcianych obowiązków! MUSISZ pracować (rzeczywistość) ale chcesz żeby nie musiał (pragnienie). Forma przeszła 'didn't' pokazuje nierealność. Nie można użyć 'don't' czy 'wouldn't' tutaj. To o obowiązku od którego chcesz uciec - częste poniedziałkowe uczucie!"
      },
      {
        id: "wish_12",
        question: "If only I _____ his phone number, I would call him right now to ask about the meeting details!",
        translation: "(Gdybym tylko znał jego numer telefonu, zadzwoniłbym do niego teraz, żeby zapytać o szczegóły spotkania!)",
        options: ["knew", "know", "known", "knows"],
        correct: "knew",
        explanation: "'If only + past simple' dla obecnych żalów! 'If only I knew' = ale NIE ZNAM (obecny problem). Forma przeszła sygnalizuje nierealność o teraz. Pokazuje frustrację z obecnym brakiem wiedzy. Różne od past perfect (przeszłe żale) - to o obecnej sytuacji którą chcesz żeby była inna."
      },
      {
        id: "wish_13",
        question: "I wish you _____ listening to me when I'm trying to explain something important to you!",
        translation: "(Chciałbym żebyś mnie słuchał, kiedy próbuję ci wyjaśnić coś ważnego!)",
        options: ["were", "are", "was", "will be"],
        correct: "were",
        explanation: "'Wish + past continuous' dla trwających sytuacji które chcesz inne! 'Wish you were listening' = NIE słuchasz teraz (frustrujące). Ciągła forma pokazuje że akcja powinna się dziać teraz ale nie dzieje. To narzekanie na obecną nieuwagę - łączy strukturę wish z continuous żeby pokazać pożądaną trwającą akcję."
      },
      {
        id: "wish_14",
        question: "I'd rather _____ stayed home last night instead of going to that boring party with loud music.",
        translation: "(Wolałbym żebym został w domu wczoraj wieczorem zamiast iść na tę nudną imprezę z głośną muzyką)",
        options: ["have", "has", "had", "to have"],
        correct: "have",
        explanation: "'Would rather have + past participle' dla przeszłych preferencji! 'Rather have stayed' = żal o przeszły wybór. To o życzeniu że podjąłeś inną decyzję wtedy. Perfekcyjny infinitive (have + past participle) pokazuje że preferencja dotyczyła ukończonej przeszłej akcji. Żal po fakcie."
      },
      {
        id: "wish_15",
        question: "It's time you _____ looking for a better job, you've been complaining about this one for months!",
        translation: "(Czas żebyś zaczął szukać lepszej pracy, narzekasz na tę od miesięcy!)",
        options: ["started", "start", "will start", "have started"],
        correct: "started",
        explanation: "'It's time + past simple' dla silnych sugestii! Znaczy że powinieneś był zacząć już wcześniej (łagodna krytyka). Forma przeszła pokazuje że akcja jest spóźniona - powinna była się stać przed teraz. Częste dla rady z odrobiną niecierpliwości - czekałeś wystarczająco długo, teraz działaj! Silny wzorzec rekomendacyjny."
      }
    ]
  },

  emphasis_structures: {
    name: "Struktury emfatyczne",
    description: "Jak podkreślić ważne elementy",
    icon: Award,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "emph_1",
        question: "What I really need right now _____ just a good night's sleep and some peace and quiet.",
        translation: "(Czego naprawdę potrzebuję teraz to po prostu dobrej nocy snu i trochę pokoju i ciszy)",
        options: ["is", "are", "was", "be"],
        correct: "is",
        explanation: "Struktura 'What I need is...' podkreśla potrzebę! Klauzula 'what' jest pojedyncza nawet jeśli odnosi się do wielu rzeczy konceptualnie. Czasownik pasuje do 'what' (pojedyncze), nie do tego co przychodzi po. To ładuje pytanie na przód dla emfazy - zamiast 'I need sleep', podkreślasz 'czego potrzebuję' najpierw."
      },
      {
        id: "emph_2",
        question: "It _____ John who broke the window yesterday, not me - I wasn't even home at that time!",
        translation: "(To był John, który zbił okno wczoraj, nie ja - nie było mnie nawet w domu w tym czasie!)",
        options: ["was", "is", "were", "has been"],
        correct: "was",
        explanation: "Struktura 'It was...who' podkreśla KTO coś zrobił! Zdanie rozłupane skupiające się na osobie. To dla korygowania błędnych założeń - chcesz jasno zidentyfikować poprawną osobę. Bardzo częste gdy jesteś fałszywie oskarżony - 'It was John who...' usuwa winę z ciebie i jasno wskazuje właściwą osobę."
      },
      {
        id: "emph_3",
        question: "_____ I dislike about living in a big city is the constant noise and lack of green spaces.",
        translation: "(To, czego nie lubię w mieszkaniu w dużym mieście to ciągły hałas i brak zielonych przestrzeni)",
        options: ["What", "That", "Which", "Who"],
        correct: "What",
        explanation: "'What' na początku tworzy emfazę na rzeczy! 'What I dislike' kładzie fokus na nielubianej rzeczy. Alternatywa: 'The thing I dislike is...' ale 'what' jest bardziej eleganckie i bezpośrednie. Ta struktura pozwala temat-najpierw - o czym mówisz przychodzi pierwszy, potem to wyjaśniasz."
      },
      {
        id: "emph_4",
        question: "It was in London _____ I met my best friend during my student exchange program years ago.",
        translation: "(To było w Londynie, gdzie poznałem mojego najlepszego przyjaciela podczas mojego programu wymiany studenckiej lata temu)",
        options: ["where", "that", "which", "when"],
        correct: "where",
        explanation: "'It was in London where' podkreśla lokalizację! Zdanie rozłupane skupiające się na GDZIE coś się stało. Podkreślasz miejsce jako ważną informację. Mógłbyś też użyć 'that' ale 'where' jest jaśniejsze dla lokalizacji. Ta struktura odpowiada na implikowane pytanie 'gdzie poznałeś?' z emfazą."
      },
      {
        id: "emph_5",
        question: "_____ did I realize how difficult the exam would be until I actually sat down and saw the questions!",
        translation: "(Dopiero zdałem sobie sprawę jak trudny będzie egzamin, kiedy faktycznie usiadłem i zobaczyłem pytania!)",
        options: ["Not until", "Until", "Only", "Just"],
        correct: "Not until",
        explanation: "'Not until' na starcie tworzy dramatyczną emfazę! Pokazuje późną realizację. 'Not until I sat down did I realize' - zauważ inwersję (did I realize, nie I realized). Ta struktura podkreśla czas - byłeś nieświadomy a POTEM nagle zrozumiałeś. Bardzo dramatyczne i literackie."
      },
      {
        id: "emph_6",
        question: "Never _____ I _____ such a beautiful sunset in my entire life before tonight's spectacular view!",
        translation: "(Nigdy nie widziałem tak pięknego zachodu słońca w całym moim życiu przed dzisiejszym spektakularnym widokiem!)",
        options: ["have / seen", "I have / seen", "did / see", "I did / see"],
        correct: "have / seen",
        explanation: "Negatywny przysłówek na starcie powoduje inwersję! 'Never have I seen' - pomocnik przychodzi przed podmiotem. To emfatyczna dramatyczna struktura. Normalne: 'I have never seen'. Odwrócone: 'Never have I seen'. Brzmi literacko i silnie. Używane dla wyrażania ekstremalnej rzadkości lub pierwszych doświadczeń dramatycznie."
      },
      {
        id: "emph_7",
        question: "_____ does he complain about work, he's always positive and motivated despite the difficulties.",
        translation: "(Rzadko narzeka na pracę, zawsze jest pozytywny i zmotywowany pomimo trudności)",
        options: ["Rarely", "Rare", "Never", "Not"],
        correct: "Rarely",
        explanation: "'Rarely' na początku zdania potrzebuje inwersji! Pełna forma: 'Rarely does he complain' - pomocnik 'does' przed podmiotem. Normalny szyk wyrazów: 'He rarely complains'. Zaczynanie od 'rarely' tworzy emfazę jak niezwykłe jest dla niego narzekanie. To sprawia że pozytywne nastawienie bardziej się wyróżnia."
      },
      {
        id: "emph_8",
        question: "All _____ want is a quiet place to study without constant interruptions from my roommates.",
        translation: "(Wszystko czego chcę to spokojne miejsce do nauki bez ciągłych przerw od współlokatorów)",
        options: ["I", "that I", "what I", "which I"],
        correct: "I",
        explanation: "'All I want' to emfatyczna minimalizacja! Podkreśla prostotę pragnienia - tylko JEDNA rzecz. Bardziej dramatyczne niż 'I want'. Ten wzorzec ('all I need/want/ask') pokazuje że nie wymagasz wiele - tylko ta prosta rzecz. Sprawia że prośba wydaje się rozsądna przez podkreślanie jej minimalizmu."
      },
      {
        id: "emph_9",
        question: "It is _____ dedication and hard work that leads to success, not just natural talent alone.",
        translation: "(To właśnie oddanie i ciężka praca prowadzi do sukcesu, nie tylko naturalny talent sam w sobie)",
        options: ["dedication", "the dedication", "a dedication", "this dedication"],
        correct: "dedication",
        explanation: "Struktura 'It is...that' podkreśla przyczynę! Skupia się na CO powoduje sukces. Konstrukcja zdania rozłupanego. Podkreślona część idzie między 'is' a 'that'. Brak przedimka przed rzeczownikami abstrakcyjnymi w tej strukturze - 'dedication' nie 'the dedication'. To izoluje kluczowy czynnik dla emfazy."
      },
      {
        id: "emph_10",
        question: "_____ did we know that the restaurant was closed on Mondays until we arrived there!",
        translation: "(Skąd mieliśmy wiedzieć, że restauracja jest zamknięta w poniedziałki dopóki tam nie dotarliśmy!)",
        options: ["Little", "Few", "Not", "Hardly"],
        correct: "Little",
        explanation: "'Little did we know' to emfatyczna struktura ignorancji! Znaczy 'nie mieliśmy pojęcia'. Past simple odwrócony: 'little did we know' nie 'we little knew'. Bardzo dramatyczne i literackie. Pokazuje całkowity brak świadomości. Używane gdy byłeś totalnie zaskoczony odkrywając coś co powinieneś był wiedzieć."
      },
      {
        id: "emph_11",
        question: "It was _____ I saw her crying that I understood how serious the problem really was.",
        translation: "(Dopiero kiedy zobaczyłem ją płaczącą zrozumiałem jak poważny naprawdę był problem)",
        options: ["only when", "when", "just when", "as"],
        correct: "only when",
        explanation: "'Only when' na początku podkreśla moment realizacji! Pokazuje późne zrozumienie. Mogłoby też być 'It was only when I saw her crying that I understood'. Ta struktura podkreśla KIEDY wreszcie zrozumiałeś - emfatyzuje czas uświadomienia. Wskazuje konkretny moment wyzwalający dla realizacji."
      },
      {
        id: "emph_12",
        question: "Under no circumstances _____ you _____ this confidential information with anyone outside the company.",
        translation: "(W żadnych okolicznościach nie powinieneś dzielić się tymi poufnymi informacjami z kimkolwiek poza firmą)",
        options: ["should / share", "you should / share", "should / sharing", "you share"],
        correct: "should / share",
        explanation: "'Under no circumstances' powoduje inwersję! Negatywna fraza na starcie: 'should you share' nie 'you should share'. To najsilniejszy możliwy zakaz. Bardzo formalne i poważne. Używane w prawnych, biznesowych, bezpieczeństwa kontekstach. Inwersja dodaje wagę i autorytet zakazowi."
      },
      {
        id: "emph_13",
        question: "Not only _____ he speak French fluently, but he also knows German, Spanish, and Italian perfectly!",
        translation: "(Nie tylko mówi płynnie po francusku, ale też zna niemiecki, hiszpański i włoski perfekcyjnie!)",
        options: ["does", "he does", "is", "he is"],
        correct: "does",
        explanation: "'Not only' na starcie wymaga inwersji! 'Not only does he speak' - pomocnik przed podmiotem. To podkreśla jak imponujący jest - francuski to tylko START. Inwersja czyni to bardziej dramatycznym. Bardzo częste dla wymieniania imponujących osiągnięć - buduje od pierwszego do jeszcze lepszego."
      },
      {
        id: "emph_14",
        question: "Seldom _____ we _____ such generous hospitality anywhere else we've traveled around the world.",
        translation: "(Rzadko spotykamy tak hojną gościnność gdziekolwiek indziej podróżowaliśmy po świecie)",
        options: ["have / encountered", "we have / encountered", "do / encounter", "we encounter"],
        correct: "have / encountered",
        explanation: "'Seldom' wywołuje inwersję gdy zaczyna zdanie! 'Seldom have we encountered' - pomocnik przed podmiotem. To podkreśla rzadkość dramatycznie. Normalne: 'We have seldom encountered'. Odwrócone: 'Seldom have we encountered'. Sprawia że doświadczenie brzmi specjalnie i rzadko - literacki i imponujący ton."
      },
      {
        id: "emph_15",
        question: "What really annoys _____ is when people are late and don't even apologize or give a reason.",
        translation: "(Co naprawdę mnie denerwuje to kiedy ludzie się spóźniają i nawet nie przepraszają ani nie podają powodu)",
        options: ["me", "I", "myself", "to me"],
        correct: "me",
        explanation: "'What annoys me' potrzebuje zaimka dopełnienia! 'Me' nie 'I' bo otrzymuje denerwowanie. Klauzula 'what' jest podmiotem, 'me' jest dopełnieniem. Ta struktura podkreśla CO powoduje denerwowanie. Częste dla narzekań - umieszczanie denerwującej rzeczy najpierw daje jej fokus przed wyjaśnieniem co to jest."
      }
    ]
  }
};

export default part7Categories;