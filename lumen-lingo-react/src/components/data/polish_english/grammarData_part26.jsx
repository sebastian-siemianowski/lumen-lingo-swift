/**
 * POLISH → ENGLISH GRAMMAR - PART 26
 * 4 categories, 15 questions each - Precision mastery
 */

import { Hash, Gift, Split, Focus } from "lucide-react";

export const part26Categories = {
  quantifiers_advanced: {
    name: "Kwantyfikatory zaawansowane",
    description: "Few vs a few, little vs a little, plenty of",
    icon: Hash,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "quant_adv_1",
        question: "I have _____ friends who speak English fluently - only two or three people.",
        translation: "(Mam mało przyjaciół którzy mówią płynnie po angielsku - tylko dwie lub trzy osoby)",
        options: ["few", "a few", "little", "a little"],
        correct: "few",
        explanation: "'Few' (bez 'a') oznacza 'mało' z negatywnym znaczeniem! Używasz 'few' gdy ilość jest niewystarczająca lub rozczarowująca. To o ograniczonej sieci znajomych anglojęzycznych - żałujesz że nie więcej. 'Few' z policzalnymi rzeczownikami w liczbie mnogiej sygnalizuje niedostatek."
      },
      {
        id: "quant_adv_2",
        question: "There's _____ milk left in the fridge - we can still make coffee for everyone.",
        translation: "(Jest trochę mleka w lodówce - wciąż możemy zrobić kawę dla wszystkich)",
        options: ["a little", "a few", "little", "few"],
        correct: "a little",
        explanation: "'A little' (z 'a') oznacza 'trochę' z pozytywnym wydźwiękiem! Używasz gdy mała ilość wystarczy do celu. Jest trochę mleka - nie dużo ale wystarczy na kawę. 'A little' z niepoliczalnymi rzeczownikami pokazuje że mimo małej ilości, jest to wystarczające do potrzeb."
      },
      {
        id: "quant_adv_3",
        question: "We have _____ time before the train departs - let's grab a quick snack!",
        translation: "(Mamy trochę czasu przed odjazdem pociągu - zjedzmy szybką przekąskę!)",
        options: ["a little", "a few", "little", "few"],
        correct: "a little",
        explanation: "'A little time' pozytywnie przedstawia ograniczony czas! Wystarczy na szybką akcję (przekąskę). To o wykorzystaniu małego okna czasowego - nie dużo czasu ale wystarczy. 'A little' z 'time' (niepoliczalne) pokazuje że krótki moment wystarczy do konkretnego celu."
      },
      {
        id: "quant_adv_4",
        question: "_____ students passed the difficult exam - most of them failed unfortunately.",
        translation: "(Niewielu studentów zdało trudny egzamin - większość niestety oblała)",
        options: ["Few", "A few", "Little", "A little"],
        correct: "Few",
        explanation: "'Few students' (bez 'a') podkreśla małą, rozczarowującą liczbę! Większość oblała więc success rate był niski. To o trudności egzaminu - niewiele osób dało radę. 'Few' jako początek zdania emphasizes niedostatek - negatywny ton od razu."
      },
      {
        id: "quant_adv_5",
        question: "There's _____ hope of finding survivors after such a long time buried.",
        translation: "(Jest mało nadziei znalezienia ocalałych po tak długim czasie pogrzebania)",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "'Little hope' (bez 'a') wyraża pesymizm! Nadzieja minimalna - outlook negatywny. To o tragicznych sytuacjach - czas działa przeciw. 'Little' z abstrakcyjnymi niepoliczalnymi (hope/chance/evidence) komunikuje że prawdopodobieństwo jest bardzo niskie i sytuacja wygląda źle."
      },
      {
        id: "quant_adv_6",
        question: "We have _____ of time to finish this project - no need to rush at all!",
        translation: "(Mamy mnóstwo czasu żeby skończyć ten projekt - nie ma potrzeby się spieszyć wcale!)",
        options: ["plenty", "many", "much", "lot"],
        correct: "plenty",
        explanation: "'Plenty of time' oznacza obfitość! Więcej niż wystarczająco - można działać spokojnie. To uspokajające - pressure off bo zasobów jest dużo. 'Plenty of' działa z policzalnymi i niepoliczalnymi, zawsze pozytywne - pokazuje że abundance pozwala na komfort."
      },
      {
        id: "quant_adv_7",
        question: "I know _____ people who can help us with this technical computer problem.",
        translation: "(Znam kilka osób które mogą nam pomóc z tym technicznym problemem komputerowym)",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "'A few people' pozytywnie - mamy opcje! Kilka osób (niewiele ale wystarczy). To reassuring - help jest dostępny. 'A few' sugeruje że mimo że grupa jest mała, jest wystarczająca do znalezienia rozwiązania - pozytywne nastawienie mimo ograniczonej liczby."
      },
      {
        id: "quant_adv_8",
        question: "There are _____ mistakes in your essay - it's almost perfect work overall!",
        translation: "(Jest kilka błędów w twoim eseju - jest prawie perfekcyjny ogólnie!)",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "'A few mistakes' łagodzi krytykę! Są błędy ale nieliczne - ogólnie dobra praca. To encouraging feedback - acknowledging flaws bez undermining całości. 'A few' minimalizuje problem - pokazuje że są drobne issues ale overall quality wysoka."
      },
      {
        id: "quant_adv_9",
        question: "She has _____ experience with this type of software - she's quite new to it.",
        translation: "(Ma mało doświadczenia z tym typem oprogramowania - jest dość nowa w tym)",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "'Little experience' (bez 'a') negatywnie - niewystarczające! Prawie żadnego doświadczenia - będzie potrzebować pomocy. To o skill gap - lack of familiarity. 'Little' z niepoliczalnymi abstractami (experience/knowledge/understanding) pokazuje że fundament jest zbyt słaby do samodzielnego działania."
      },
      {
        id: "quant_adv_10",
        question: "We need _____ more ingredients to complete this delicious recipe properly.",
        translation: "(Potrzebujemy kilku więcej składników żeby ukończyć ten pyszny przepis porządnie)",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "'A few more' określa konkretną małą potrzebę! Kilka dodatkowych rzeczy (policzalne). To shopping list realization - brakuje niewiele. 'A few' precyzuje że gap jest mały i łatwy do zapełnienia - quick trip wystarczy."
      },
      {
        id: "quant_adv_11",
        question: "There's _____ information available about this historical mysterious event.",
        translation: "(Jest mało informacji dostępnej o tym historycznym tajemniczym wydarzeniu)",
        options: ["little", "a little", "few", "a few"],
        correct: "little",
        explanation: "'Little information' pokazuje knowledge gap! Dokumentacja skąpa - mystery remains. To o frustrującej research - sources rzadkie. 'Little' z 'information' (niepoliczalne) wskazuje że dane są tak ograniczone że trudno zbudować pełny obraz wydarzenia."
      },
      {
        id: "quant_adv_12",
        question: "I have _____ suggestions for improving this presentation before the meeting.",
        translation: "(Mam kilka sugestii dla poprawienia tej prezentacji przed spotkaniem)",
        options: ["a few", "few", "a little", "little"],
        correct: "a few",
        explanation: "'A few suggestions' oferuje konstruktywne pomysły! Niewiele ale konkretne - możesz implement. To helpful feedback - contributing improvements. 'A few' sugeruje że zmiany są manageable - nie overwhelming liczba ale wystarczająco żeby enhance quality."
      },
      {
        id: "quant_adv_13",
        question: "She speaks _____ Spanish - just basic phrases for tourists visiting briefly.",
        translation: "(Mówi trochę po hiszpańsku - tylko podstawowe zwroty dla turystów odwiedzających krótko)",
        options: ["a little", "a few", "little", "few"],
        correct: "a little",
        explanation: "'A little Spanish' pokazuje podstawowy poziom! Niewiele ale coś - może przetrwać w sytuacjach. To o survival language - wystarczające dla basic needs. 'A little' z językami oznacza elementary proficiency - można komunikować się prostymi zdaniami ale far from fluent."
      },
      {
        id: "quant_adv_14",
        question: "There are _____ reasons to be optimistic about the future economic situation.",
        translation: "(Jest niewiele powodów do bycia optymistycznym o przyszłej sytuacji ekonomicznej)",
        options: ["few", "a few", "little", "a little"],
        correct: "few",
        explanation: "'Few reasons' (bez 'a') pesymistyczne! Prawie żadnych powodów do nadziei - outlook ciemny. To o tough times - trudno znaleźć bright side. 'Few' emphasizes scarcity pozytywów - sytuacja wygląda challenging z limited encouraging signs."
      },
      {
        id: "quant_adv_15",
        question: "We have _____ of options to choose from - the selection is really impressive here!",
        translation: "(Mamy mnóstwo opcji do wyboru - wybór jest naprawdę imponujący tutaj!)",
        options: ["plenty", "many", "much", "lot"],
        correct: "plenty",
        explanation: "'Plenty of options' celebruje abundance! Więcej niż potrzeba - paradox of choice. To o generous selection - możesz być wybredny. 'Plenty of' z policzalnymi (options) lub niepoliczalnymi pokazuje że zasobów jest tak dużo że nie ma żadnych ograniczeń w wyborze."
      }
    ]
  },

  gerund_infinitive_patterns: {
    name: "Wzory gerund vs infinitive",
    description: "Stop doing vs stop to do, remember doing vs to do",
    icon: Gift,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "ger_inf_1",
        question: "I stopped _____ when I realized how unhealthy it was for my body.",
        translation: "(Przestałem palić kiedy zdałem sobie sprawę jak niezdrowe to było dla mojego ciała)",
        options: ["smoking", "to smoke", "smoke", "smoked"],
        correct: "smoking",
        explanation: "'Stop + gerund' oznacza ZAKOŃCZYĆ tę czynność! 'Stopped smoking' = quit palenia całkowicie. To o zerwaniu z nawykiem - działanie zostało permanently ended. Gerund po 'stop' pokazuje że sama czynność została porzucona. Health decision - recognizing harm i acting."
      },
      {
        id: "ger_inf_2",
        question: "She stopped _____ some flowers for her sick friend on the way to hospital.",
        translation: "(Zatrzymała się żeby kupić kwiaty dla swojej chorej przyjaciółki w drodze do szpitala)",
        options: ["to buy", "buying", "buy", "bought"],
        correct: "to buy",
        explanation: "'Stop + infinitive' oznacza ZATRZYMAĆ SIĘ żeby coś zrobić! 'Stopped to buy' = paused journey dla zakupu. Różnica kluczowa: stop doing (quit) vs stop to do (pause for purpose). To o detour - przerwa w podróży dla thoughtful errand. Infinitive pokazuje purpose zatrzymania."
      },
      {
        id: "ger_inf_3",
        question: "I remember _____ to Paris when I was just a small child with family.",
        translation: "(Pamiętam jak jeździłem do Paryża kiedy byłem małym dzieckiem z rodziną)",
        options: ["going", "to go", "go", "went"],
        correct: "going",
        explanation: "'Remember + gerund' to wspomnienie przeszłej akcji! Pamiętasz że action się stało - masz memory of doing. To childhood recollection - pamiętasz experience samej wizyty. Gerund po 'remember' dla memories - thinking back о czymś co już doświadczyłeś."
      },
      {
        id: "ger_inf_4",
        question: "Please remember _____ the door when you leave the office tonight late.",
        translation: "(Proszę pamiętaj żeby zamknąć drzwi kiedy wychodzisz z biura dziś wieczorem późno)",
        options: ["to lock", "locking", "lock", "locked"],
        correct: "to lock",
        explanation: "'Remember + infinitive' to przypomnienie о przyszłej akcji! Don't forget TO DO - instrukcja dla later. To reminder - ensuring ważny task nie będzie forgotten. Infinitive po 'remember' dla things do zrobienia - forward-looking, nie backward memories."
      },
      {
        id: "ger_inf_5",
        question: "I'll never forget _____ the Northern Lights for the first time - it was magical!",
        translation: "(Nigdy nie zapomnę jak zobaczyłem zorzę polarną po raz pierwszy - było magicznie!)",
        options: ["seeing", "to see", "see", "saw"],
        correct: "seeing",
        explanation: "'Forget + gerund' dla niezapomnianych wspomnień! Pamiętasz experience forever - magical moment preserved. To o awe-inspiring moments - tak powerful że impossible do forget. Gerund pokazuje że memory of actual experience jest trwała - vivid recollection że nie fade."
      },
      {
        id: "ger_inf_6",
        question: "Don't forget _____ your passport before leaving for the international airport!",
        translation: "(Nie zapomnij wziąć paszportu przed wyjazdem na międzynarodowe lotnisko!)",
        options: ["to take", "taking", "take", "took"],
        correct: "to take",
        explanation: "'Forget + infinitive' przypomina о przyszłej konieczności! Don't fail TO DO - warning о important task ahead. To travel reminder - essential document. Infinitive po 'forget' dla things które musisz remember zrobić - forward instruction preventing omission."
      },
      {
        id: "ger_inf_7",
        question: "He regrets _____ that expensive car - it's costing him a fortune to maintain!",
        translation: "(Żałuje kupienia tego drogiego samochodu - kosztuje go fortunę w utrzymaniu!)",
        options: ["buying", "to buy", "buy", "bought"],
        correct: "buying",
        explanation: "'Regret + gerund' dla żalu о przeszłych akcjach! Kupił (past) teraz żałuje (present regret). To buyer's remorse - poor purchase decision haunting. Gerund po 'regret' pokazuje że action już się stała i jest źródłem obecnego żalu - can't undo."
      },
      {
        id: "ger_inf_8",
        question: "I regret _____ you that your application has been rejected this time.",
        translation: "(Z przykrością informuję że twoja aplikacja została odrzucona tym razem)",
        options: ["to inform", "informing", "inform", "informed"],
        correct: "to inform",
        explanation: "'Regret + infinitive' dla formal bad news! Żałujesz że musisz powiedzieć (present unpleasant duty). To formal apology language - delivering unwelcome message. Infinitive pokazuje że informowanie jest current reluctant action - żałujesz necessity of communicating rejection."
      },
      {
        id: "ger_inf_9",
        question: "She tried _____ the door, but it was locked from the inside tightly.",
        translation: "(Próbowała otworzyć drzwi, ale były zamknięte od środka mocno)",
        options: ["opening", "to open", "open", "opened"],
        correct: "opening",
        explanation: "'Try + gerund' to próba samej akcji jako method! Próbowała opening jako sposób - czy to zadziała? To о testing approach - seeing if method works. Gerund pokazuje że action itself jest the attempted solution - doing to see if succeeds."
      },
      {
        id: "ger_inf_10",
        question: "If the password doesn't work, try _____ it without capital letters instead.",
        translation: "(Jeśli hasło nie działa, spróbuj wpisać je bez wielkich liter zamiast)",
        options: ["to type", "typing", "type", "typed"],
        correct: "typing",
        explanation: "'Try + gerund' dla alternative methods! Jedna metoda failed, try different approach. To troubleshooting advice - testing variations. Gerund pokazuje experimenting z different actions - each attempt is new method being tested for success."
      },
      {
        id: "ger_inf_11",
        question: "I went on _____ despite feeling exhausted - the story was too exciting to stop!",
        translation: "(Kontynuowałem czytanie pomimo czucia wyczerpania - historia była zbyt ekscytująca żeby przestać!)",
        options: ["reading", "to read", "read", "reads"],
        correct: "reading",
        explanation: "'Go on + gerund' oznacza KONTYNUOWAĆ akcję! Keep doing - nie stopping. To о captivating story - couldn't put down mimo tiredness. Gerund po 'go on' dla continuation - sustained action pomimo impulse do quit. Engrossment overcoming fatigue."
      },
      {
        id: "ger_inf_12",
        question: "After finishing lunch, we went on _____ the famous historical museum downtown.",
        translation: "(Po skończeniu lunchu, poszliśmy żeby zwiedzić słynne historyczne muzeum w centrum)",
        options: ["to visit", "visiting", "visit", "visited"],
        correct: "to visit",
        explanation: "'Go on + infinitive' to przejście DO następnej akcji! Finished jedna rzecz, moved TO another. To о sequence - lunch done, museum next. Infinitive pokazuje nową akcję w itinerary - progression do different activity. Tourism day structure."
      },
      {
        id: "ger_inf_13",
        question: "I meant _____ you earlier, but I completely forgot - I'm so sorry!",
        translation: "(Zamierzałem do ciebie zadzwonić wcześniej, ale całkowicie zapomniałem - bardzo przepraszam!)",
        options: ["to call", "calling", "call", "called"],
        correct: "to call",
        explanation: "'Mean + infinitive' dla intentions! Zamierzałeś (intention) ale nie zrobiłeś (failure). To apology - planned action didn't materialize. Infinitive pokazuje intended future action że wasn't executed - explaining gap między intention a reality."
      },
      {
        id: "ger_inf_14",
        question: "Learning a language means _____ every single day for best results consistently.",
        translation: "(Uczenie się języka oznacza praktykowanie każdego dnia dla najlepszych rezultatów konsekwentnie)",
        options: ["practicing", "to practice", "practice", "practiced"],
        correct: "practicing",
        explanation: "'Mean + gerund' wyjaśnia CO coś involves! Learning = practicing (definition/equivalence). To о requirements - explaining what's necessary. Gerund po 'mean' pokazuje że jedna rzecz consists of lub requires drugą - defining what something entails."
      },
      {
        id: "ger_inf_15",
        question: "He needs _____ more about this topic before making any important final decisions.",
        translation: "(Potrzebuje dowiedzieć się więcej о tym temacie przed podjęciem jakichkolwiek ważnych końcowych decyzji)",
        options: ["to learn", "learning", "learn", "learned"],
        correct: "to learn",
        explanation: "'Need + infinitive' dla konieczności! Potrzebuje zdobyć (future necessity) więcej knowledge. To о informed decision-making - research before committing. Infinitive po 'need' standardowo dla expressing requirements - what must be done."
      }
    ]
  },

  phrasal_verbs_separable: {
    name: "Phrasal verbs - rozdzielne vs nierozdzielne",
    description: "Turn it off vs look after it, give up vs give it up",
    icon: Split,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "phr_sep_1",
        question: "Please turn _____ the lights when you leave the empty room to save energy.",
        translation: "(Proszę wyłącz światła kiedy wychodzisz z pustego pokoju żeby zaoszczędzić energię)",
        options: ["off", "off them", "them off", "it off"],
        correct: "off",
        explanation: "'Turn off' separable ale z rzeczownikiem (lights) możesz nie rozdzielać! 'Turn off the lights' lub 'turn the lights off' - oba ok. To eco-reminder - conservation habit. Z rzeczownikami masz elastyczność - particle może być obok czasownika lub po obiekcie."
      },
      {
        id: "phr_sep_2",
        question: "I need to look _____ this word in the dictionary - I don't know its meaning.",
        translation: "(Muszę sprawdzić to słowo w słowniku - nie znam jego znaczenia)",
        options: ["up", "up it", "it up", "for"],
        correct: "up",
        explanation: "'Look up' separable - z rzeczownikiem możesz 'look up the word' lub 'look the word up'! To о research - finding definitions. Oba porządki działają z nouns - flexibility w placement. Dictionary consultation dla vocabulary expansion."
      },
      {
        id: "phr_sep_3",
        question: "Can you turn _____ down? I'm trying to concentrate on my work here.",
        translation: "(Czy możesz to ściszyć? Próbuję się skupić na mojej pracy tutaj)",
        options: ["it", "down", "down it", "off it"],
        correct: "it",
        explanation: "'Turn it down' - z ZAIMKIEM (it/them) MUSISZ rozdzielić! 'Turn down it' is WRONG. Zawsze: turn IT down, nie 'turn down it'. To important rule - pronouns force separation. Prosba о ciszę - volume adjustment. Zaimki zawsze between verb a particle."
      },
      {
        id: "phr_sep_4",
        question: "She's looking _____ her elderly grandmother who lives alone in the countryside.",
        translation: "(Opiekuje się swoją starszą babcią która mieszka sama na wsi)",
        options: ["after", "after her", "her after", "for her"],
        correct: "after",
        explanation: "'Look after' NIEROZDZIELNE! Nie możesz 'look her after' - zawsze razem. To о caregiving - providing care. Inseparable phrasal verbs keep particle attached - 'look after someone' fixed order. Family responsibility - care provision dla elderly relative."
      },
      {
        id: "phr_sep_5",
        question: "I gave _____ smoking last year after my doctor's serious health warning strongly.",
        translation: "(Rzuciłem palenie w zeszłym roku po poważnym ostrzeżeniu zdrowotnym mojego lekarza)",
        options: ["up", "up it", "it up", "off"],
        correct: "up",
        explanation: "'Give up' + rzeczownik (smoking) może być razem lub rozdzielone! 'Give up smoking' lub 'give smoking up'. To о quit decision - ending addiction. Z abstrakcyjnymi nouns często together ale separation też działa. Medical motivation dla lifestyle change."
      },
      {
        id: "phr_sep_6",
        question: "Don't give _____ even when things seem difficult and completely hopeless now!",
        translation: "(Nie poddawaj się nawet kiedy rzeczy wydają się trudne i całkowicie beznadziejne teraz!)",
        options: ["up", "up it", "it up", "off"],
        correct: "up",
        explanation: "'Give up' bez obiektu to intransitive quit! Nie potrzebujesz object - ogólne 'quit'. To motivational - encouraging persistence. Bez specific thing being quit, particle stays с verb. Perseverance message - keep going pomimo obstacles."
      },
      {
        id: "phr_sep_7",
        question: "Can you pick _____ from school today? I have an important meeting downtown.",
        translation: "(Czy możesz odebrać je ze szkoły dzisiaj? Mam ważne spotkanie w centrum)",
        options: ["them up", "up them", "up", "them"],
        correct: "them up",
        explanation: "'Pick them up' - zaimek (them) WYMUSZA separation! 'Pick up them' BŁĄD. Zawsze: pick THEM up. To parenting logistics - coordinating childcare. Pronouns must split phrasal verb - sandwiched между verb і particle. School pickup request."
      },
      {
        id: "phr_sep_8",
        question: "I ran _____ an old friend from university at the shopping mall yesterday!",
        translation: "(Wpadłem na starego przyjaciela z uniwersytetu w centrum handlowym wczoraj!)",
        options: ["into", "into him", "him into", "to him"],
        correct: "into",
        explanation: "'Run into' NIEROZDZIELNE! Nie możesz 'run him into' - zawsze together. To о chance encounter - unexpected meeting. Inseparable phrasals maintain particle - 'run into someone' fixed. Coincidental reunion - bumping into unexpectedly."
      },
      {
        id: "phr_sep_9",
        question: "She put _____ until next week due to unexpected scheduling conflicts arising.",
        translation: "(Odłożyła to do następnego tygodnia z powodu nieoczekiwanych konfliktów w harmonogramie)",
        options: ["it off", "off it", "off", "away it"],
        correct: "it off",
        explanation: "'Put it off' - zaimek wymusza split! 'Put off it' niepoprawne. Zawsze: put IT off (postpone). To о procrastination lub necessity - delaying action. Pronoun separation rule applies - object pronoun between verb i particle. Schedule adjustment."
      },
      {
        id: "phr_sep_10",
        question: "I'm looking _____ a new job with better salary and working conditions now.",
        translation: "(Szukam nowej pracy z lepszą pensją i warunkami pracy teraz)",
        options: ["for", "for it", "it for", "after"],
        correct: "for",
        explanation: "'Look for' NIEROZDZIELNE! Nie możesz 'look it for' - zawsze razem particle. To job hunting - seeking opportunities. Inseparable structure maintained - 'look for something' standard order. Employment search - seeking improvement."
      },
      {
        id: "phr_sep_11",
        question: "Can you fill _____ this application form completely before submitting it officially?",
        translation: "(Czy możesz wypełnić ten formularz aplikacyjny całkowicie przed wysłaniem go oficjalnie?)",
        options: ["in", "in it", "it in", "out"],
        correct: "in",
        explanation: "'Fill in' separable - 'fill in the form' lub 'fill the form in'! Oba działają z noun. To bureaucratic task - completing documentation. Flexibility z nouns - particle móże być adjacent lub separated. Form completion instruction."
      },
      {
        id: "phr_sep_12",
        question: "Please fill _____ before the deadline tomorrow morning at 9 AM sharp.",
        translation: "(Proszę wypełnij to przed terminem jutro rano о 9 dokładnie)",
        options: ["it in", "in it", "in", "out it"],
        correct: "it in",
        explanation: "'Fill it in' - pronoun MUSI split! 'Fill in it' wrong. Zawsze: fill IT in. To urgent reminder - deadline approaching. Zaimki forcing separation - IT between fill і in. Document completion urgency."
      },
      {
        id: "phr_sep_13",
        question: "She takes _____ her mother - they both have the same beautiful smile!",
        translation: "(Przypomina swoją matkę - obie mają ten sam piękny uśmiech!)",
        options: ["after", "after her", "her after", "like"],
        correct: "after",
        explanation: "'Take after' NIEROZDZIELNE! Nie 'take her after' - zawsze together. To о family resemblance - inherited traits. Inseparable structure - 'take after someone' fixed dla similarity. Genetic atau personality similarity observation."
      },
      {
        id: "phr_sep_14",
        question: "I need to work _____ this math problem before the class starts tomorrow.",
        translation: "(Muszę rozwiązać ten problem matematyczny przed началом zajęć jutro)",
        options: ["out", "out it", "it out", "off"],
        correct: "out",
        explanation: "'Work out' separable - 'work out the problem' lub 'work the problem out'! Z noun obie formy. To homework struggle - solving przed class. Flexibility в ordering з rzeczownikami - choose based на emphasis lub flow preference."
      },
      {
        id: "phr_sep_15",
        question: "It took me hours to work _____ - the solution was very complex indeed!",
        translation: "(Zajęło mi godziny żeby to rozwiązać - rozwiązanie było bardzo złożone faktycznie!)",
        options: ["it out", "out it", "out", "off it"],
        correct: "it out",
        explanation: "'Work it out' - pronoun splits obowiązkowo! 'Work out it' błędne. Zawsze: work IT out. To о problem-solving effort - długi process. Zaimek between verb і particle - forced separation rule. Difficulty acknowledged przez time spent."
      }
    ]
  },

  emphasis_even_only_just: {
    name: "Emfaza z 'even', 'only', 'just'",
    description: "Gdzie umieścić dla zmiany znaczenia",
    icon: Focus,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "emph_eoj_1",
        question: "_____ my grandmother can use this simple smartphone - it's that easy to operate!",
        translation: "(Nawet moja babcia może używać tego prostego smartfona - jest tak łatwy w obsłudze!)",
        options: ["Even", "Only", "Just", "Also"],
        correct: "Even",
        explanation: "'Even' pokazuje surprising inclusion! Nawet babcia (unexpected user) może - emphasizes simplicity. To compliment о user-friendliness - jeśli elderly może, wszyscy mogą. 'Even' przed subject podkreśla że least likely person succeeds - proving ultimate ease."
      },
      {
        id: "emph_eoj_2",
        question: "_____ five people came to the party - everyone else cancelled last minute unfortunately.",
        translation: "(Tylko pięć osób przyszło na imprezę - wszyscy inni odwołali w ostatniej chwili niestety)",
        options: ["Only", "Even", "Just", "About"],
        correct: "Only",
        explanation: "'Only five' podkreśla małą, rozczarowującą liczbę! Expected więcej ale only 5 showed. To disappointment - poor turnout. 'Only' minimalizuje - pokazuje że number jest insufficient або surprising низкий. Party fail due do cancellations."
      },
      {
        id: "emph_eoj_3",
        question: "I've _____ arrived home a minute ago - haven't even taken off my coat yet!",
        translation: "(Właśnie przyjechałem do domu minutę temu - nawet nie zdjąłem jeszcze płaszcza!)",
        options: ["just", "only", "even", "already"],
        correct: "just",
        explanation: "'Just arrived' oznacza very recently! Sekundy/minuty temu - fresh arrival. To о timing - explaining czemu jeszcze not settled. 'Just' z past simple dla actions that happened moments ago - recency emphasis. Still transitioning від outside."
      },
      {
        id: "emph_eoj_4",
        question: "She didn't _____ say hello to me at the office today - she seemed upset!",
        translation: "(Nawet nie powiedziała mi cześć w biurze dzisiaj - wyglądała na zdenerwowaną!)",
        options: ["even", "only", "just", "also"],
        correct: "even",
        explanation: "'Didn't even say hello' emphasizes extreme avoidance! Nawet basic courtesy skipped - unusual coldness. To о noticeable snub - minimum social interaction absent. 'Even' з negatives podkreśla że least expected action didn't happen - highlighting abnormality."
      },
      {
        id: "emph_eoj_5",
        question: "It _____ takes five minutes to walk from here to the train station nearby.",
        translation: "(Zajmuje tylko pięć minut spaceru stąd до stacji kolejowej w pobliżu)",
        options: ["only", "even", "just", "about"],
        correct: "only",
        explanation: "'Only takes five minutes' minimalizuje effort! Krótki czas - łatwy commute. To reassurance - distance manageable. 'Only' pokazuje że requirement jest minimal - encouraging info że task jest quick і easy. Proximity benefit."
      },
      {
        id: "emph_eoj_6",
        question: "I _____ wanted to help you - I didn't mean to cause any extra problems!",
        translation: "(Tylko chciałem ci pomóc - nie miałem zamiaru spowodować żadnych dodatkowych problemów!)",
        options: ["just", "only", "even", "also"],
        correct: "just",
        explanation: "'Just wanted to help' wyjaśnia pure motivation! Tylko pomoc (innocent intent) bez hidden agenda. To defensive - clarifying good intentions gdy outcome był bad. 'Just' minimalizuje - showing action był simple benevolence bez complications wanted."
      },
      {
        id: "emph_eoj_7",
        question: "_____ the teacher knows the answer to this extremely difficult advanced question.",
        translation: "(Tylko nauczyciel zna odpowiedź на to ekstremalnie trudne zaawansowane pytanie)",
        options: ["Only", "Even", "Just", "Also"],
        correct: "Only",
        explanation: "'Only the teacher' exclusive knowledge! Nikt inny nie wie - sole possessor. To о expertise gap - students stumped. 'Only' przed subject ogranicza - showing single person has information. Knowledge restricted до authority figure."
      },
      {
        id: "emph_eoj_8",
        question: "He's _____ finished the first chapter - he has nine more chapters to read still!",
        translation: "(Dopiero skończył pierwszy rozdział - ma jeszcze dziewięć rozdziałów do przeczytania!)",
        options: ["only", "even", "just", "already"],
        correct: "only",
        explanation: "'Only finished the first' показує minimal progress! Dużo work ahead - barely started. To о overwhelming task - long road ahead. 'Only' emphasizes smallness of achievement relative до remaining work. Długa droga jeszcze przed sobą."
      },
      {
        id: "emph_eoj_9",
        question: "I can _____ remember his first name, not his surname at all unfortunately.",
        translation: "(Mogę tylko pamiętać jego imię, nie nazwisko wcale niestety)",
        options: ["only", "even", "just", "also"],
        correct: "only",
        explanation: "'Can only remember' pokazuje limited recall! Partial memory - część missing. To frustrating partial knowledge - can't fully identify person. 'Only' ogranicza - showing memory incomplete, restricted до first name. Inability до complete recollection."
      },
      {
        id: "emph_eoj_10",
        question: "_____ thinking about the scary horror movie gives me nightmares at night!",
        translation: "(Samo myślenie о strasznym horrorze daje mi koszmary w nocy!)",
        options: ["Just", "Only", "Even", "Also"],
        correct: "Just",
        explanation: "'Just thinking' oznacza 'merely the thought'! Sama thought (bez watching again) wystarczy dla nightmares. To о lasting impact - movie był so scary że memory haunts. 'Just' pokazuje że minimal trigger (thought) causes significant effect."
      },
      {
        id: "emph_eoj_11",
        question: "She _____ arrived ten minutes ago, so she's still getting settled in now.",
        translation: "(Dopiero przybyła dziesięć minut temu, więc wciąż się rozgoszcza teraz)",
        options: ["only", "even", "just", "already"],
        correct: "only",
        explanation: "'Only arrived ten minutes ago' emphasizes recency! Very recent - explaining current state (settling). To temporal explanation - czemu still adjusting. 'Only' + time показує że insufficient time passed dla full transition - justifying ongoing process."
      },
      {
        id: "emph_eoj_12",
        question: "I _____ want to talk to you for a moment - I won't take much time!",
        translation: "(Tylko chcę z tobą porozmawiać przez chwilę - nie zajmę dużo czasu!)",
        options: ["just", "only", "even", "also"],
        correct: "just",
        explanation: "'Just want to talk' minimalizuje request! Brief conversation (small ask) nie major commitment. To polite interruption - reassuring won't be long. 'Just' softens request - making seem minor і non-demanding. Respectful approach."
      },
      {
        id: "emph_eoj_13",
        question: "_____ children are allowed to enter this special play area for safety reasons.",
        translation: "(Tylko dzieci mogą wchodzić do tej specjalnej strefy zabaw ze względów bezpieczeństwa)",
        options: ["Only", "Even", "Just", "Also"],
        correct: "Only",
        explanation: "'Only children allowed' tworzy exclusion! Adults banned - age restriction. To safety rule - area designed для specific group. 'Only' creates boundary - limiting access до designated population. Protective policy dla children's space."
      },
      {
        id: "emph_eoj_14",
        question: "The movie was so boring that _____ the best parts couldn't save it!",
        translation: "(Film był tak nudny że nawet najlepsze części nie mogły go uratować!)",
        options: ["even", "only", "just", "also"],
        correct: "even",
        explanation: "'Even the best parts' pokazuje total failure! Nawet highlights (expected salvation) didn't help. To emphatic negative review - beyond redemption. 'Even' з normally positive elements failing shows completeness of disappointment - nothing worked."
      },
      {
        id: "emph_eoj_15",
        question: "I _____ need five more minutes to finish this important urgent task completely.",
        translation: "(Potrzebuję tylko pięciu więcej minut żeby skończyć to ważne pilne zadanie całkowicie)",
        options: ["only", "even", "just", "also"],
        correct: "only",
        explanation: "'Only need five minutes' minimalizuje time request! Brief extension (small ask) - almost done. To negotiating deadline - showing completion imminent. 'Only' + small number makes request seem reasonable - minor accommodation needed для finish."
      }
    ]
  },

  compound_adjectives: {
    name: "Przymiotniki złożone",
    description: "Well-known, five-year-old, brand-new",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_adj_1",
        question: "She's a _____-known author whose books are read worldwide by millions.",
        translation: "(Jest dobrze znaną autorką której książki są czytane na świecie przez miliony)",
        options: ["well", "good", "very", "much"],
        correct: "well",
        explanation: "'Well-known' (z łącznikiem) tworzy compound adjective! 'Well' + 'known' = famous. Łącznik czyni je single modifier. To о literary fame - widespread recognition. Compound przed rzeczownikiem zawsze hyphenated - 'well-known author' shows established reputation globally."
      },
      {
        id: "comp_adj_2",
        question: "My daughter is a _____-year-old girl who just started elementary school recently.",
        translation: "(Moja córka jest pięcioletnią dziewczynką która właśnie zaczęła podstawówkę ostatnio)",
        options: ["five", "fives", "fifth", "fifteen"],
        correct: "five",
        explanation: "'Five-year-old' używa singular 'year' mimo że pięć! W compound age adjectives zawsze singular - 'five-year-old' nie 'five-years-old'. To о age description - school starting age. Number + singular time unit + old creates age compound - specific grammatical pattern."
      },
      {
        id: "comp_adj_3",
        question: "He bought a _____-new car straight from the dealership showroom yesterday.",
        translation: "(Kupił zupełnie nowy samochód prosto z salonu dealerskiego wczoraj)",
        options: ["brand", "very", "quite", "really"],
        correct: "brand",
        explanation: "'Brand-new' (idiom) oznacza completely новий! 'Brand' intensifies 'new' - emphasis на zero use. To о fresh purchase - unused condition. Fixed compound - 'brand-new' stronger niż just 'new', showing pristine never-before-used state. Maximum newness expression."
      },
      {
        id: "comp_adj_4",
        question: "She works as a _____-time employee at the local community hospital downtown.",
        translation: "(Pracuje jako pracownik pełnoetatowy w lokalnym szpitalu społecznym w centrum)",
        options: ["full", "whole", "complete", "total"],
        correct: "full",
        explanation: "'Full-time' opisuje employment type! Cały etat (40+ hours/week) przeciwieństwo 'part-time'. To о work commitment level - standard weekly hours. Hyphenated compound dla categorizing employment - 'full-time employee' indicates regular schedule не reduced."
      },
      {
        id: "comp_adj_5",
        question: "This is a _____-made dress created by skilled local traditional craftspeople.",
        translation: "(To jest ręcznie robiona sukienka stworzona przez wykwalifikowanych lokalnych tradycyjnych rzemieślników)",
        options: ["hand", "hands", "handy", "handed"],
        correct: "hand",
        explanation: "'Hand-made' przeciwieństwo machine-made! Crafted ręcznie - higher quality/value. To о artisanal products - human skill vs factory. Compound emphasizes production method - 'hand-made' suggests care, uniqueness, і traditional craft value."
      },
      {
        id: "comp_adj_6",
        question: "He's very _____-minded and refuses to consider any different new perspectives.",
        translation: "(Jest bardzo ograniczony umysłowo i odmawia rozważenia jakichkolwiek różnych nowych perspektyw)",
        options: ["narrow", "small", "close", "tight"],
        correct: "narrow",
        explanation: "'Narrow-minded' opisuje inflexibility! Closed до new ideas - stubborn thinking. To criticism - lack of openness. Compound personality adjective - 'narrow-minded' characterizes mental rigidity. Inability lub unwillingness до consider alternatives - intellectual limitation."
      },
      {
        id: "comp_adj_7",
        question: "This is a _____-term investment that will pay off over many future years.",
        translation: "(To jest długoterminowa inwestycja która się zwróci przez wiele przyszłych lat)",
        options: ["long", "far", "big", "high"],
        correct: "long",
        explanation: "'Long-term' opisuje extended duration! Years not months - patient investment. Opposite 'short-term'. To financial planning - delayed gratification. Temporal compound - 'long-term' indicates extended time horizon requiring patience для returns."
      },
      {
        id: "emph_eoj_8",
        question: "She's a _____-working student who balances studies with job perfectly every day.",
        translation: "(Jest ciężko pracującą studentką która balansuje studia z pracą perfekcyjnie każdego dnia)",
        options: ["hard", "hardly", "heavy", "strong"],
        correct: "hard",
        explanation: "'Hard-working' opisuje diligence! Puts in effort - dedicated. Nie 'hardly-working' (opposite meaning!). To compliment о work ethic - balancing multiple responsibilities. Compound characterizing dedication - 'hard-working' shows sustained effort і commitment."
      },
      {
        id: "comp_adj_9",
        question: "They live in a _____-class neighborhood with expensive houses and luxury cars.",
        translation: "(Mieszkają w dzielnicy wyższej klasy z drogimi domami i luksusowymi samochodami)",
        options: ["high", "upper", "top", "rich"],
        correct: "high",
        explanation: "'High-class' opisuje quality/status! Wealthy area - affluent residents. To socioeconomic description. Compound indicating prestige level - 'high-class neighborhood' characterizes affluence through property values і resident wealth."
      },
      {
        id: "comp_adj_10",
        question: "This is a _____-growing plant that needs regular watering and care daily.",
        translation: "(To jest szybko rosnąca roślina która potrzebuje regularnego podlewania i dbałości codziennie)",
        options: ["fast", "quick", "rapid", "speed"],
        correct: "fast",
        explanation: "'Fast-growing' opisuje rate of development! Quick maturation - vigilant care needed. To gardening characteristic. Compound describing growth speed - 'fast-growing plant' indicates rapid development requiring frequent attention і maintenance."
      },
      {
        id: "comp_adj_11",
        question: "He's very _____-going and never gets stressed about anything in life ever.",
        translation: "(Jest bardzo wyluzowany i nigdy się nie stresuje o nic w życiu kiedykolwiek)",
        options: ["easy", "simple", "free", "light"],
        correct: "easy",
        explanation: "'Easy-going' opisuje relaxed personality! Calm, unstressed - goes with flow. To temperament compliment. Personality compound - 'easy-going' characterizes laid-back nature. Doesn't worry easily - adaptable і stress-resistant disposition."
      },
      {
        id: "comp_adj_12",
        question: "This is a _____-free product suitable for people with celiac disease safely.",
        translation: "(To jest produkt bezglutenowy odpowiedni для ludzi z celiakią bezpiecznie)",
        options: ["gluten", "glutens", "glutening", "glutened"],
        correct: "gluten",
        explanation: "'Gluten-free' indicates absence! Suitable для dietary restrictions - safe consumption. To food labeling. Compound showing exclusion - 'X-free' pattern describes products lacking specific ingredient. Medical diet compliance - safe для allergies/intolerances."
      },
      {
        id: "comp_adj_13",
        question: "She's studying _____-time at university while also working evenings for income.",
        translation: "(Studiuje pełny etat na uniwersytecie jednocześnie pracując wieczorami dla dochodu)",
        options: ["full", "whole", "complete", "total"],
        correct: "full",
        explanation: "'Full-time student' opisuje study commitment! Regular schedule - not part-time. To о demanding balance - studies plus work. Academic status compound - 'full-time' indicates standard course load не reduced. Challenging dual commitment."
      },
      {
        id: "comp_adj_14",
        question: "This is a _____-breaking discovery that will change scientific understanding completely!",
        translation: "(To jest przełomowe odkrycie które zmieni naukowe rozumienie całkowicie!)",
        options: ["ground", "earth", "world", "land"],
        correct: "ground",
        explanation: "'Ground-breaking' oznacza revolutionary! Game-changing innovation - paradigm shift. To о major discoveries. Impact compound - 'ground-breaking' characterizes transformative nature. So significant że reshapes entire field - foundational change metaphor."
      },
      {
        id: "comp_adj_15",
        question: "He's a _____-made millionaire who built his fortune from nothing through work.",
        translation: "(Jest milionerem samemu który zbudował swoją fortunę z niczego przez pracę)",
        options: ["self", "own", "alone", "single"],
        correct: "self",
        explanation: "'Self-made' celebrates independent achievement! Built success alone - no inheritance. To American dream narrative. Compound emphasizing autonomy - 'self-made millionaire' shows wealth earned не inherited. Hard work і determination created fortune - personal accomplishment."
      }
    ]
  }
};

export default part26Categories;