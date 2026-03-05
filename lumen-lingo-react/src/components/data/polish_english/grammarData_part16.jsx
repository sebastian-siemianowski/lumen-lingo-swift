
/**
 * POLISH → ENGLISH GRAMMAR - PART 16
 * 4 categories, 15 questions each - Complex connections
 */

import { Target, Zap, Shield, HelpCircle, Clock } from "lucide-react";

export const part16Categories = {
  purpose_clauses: {
    name: "Zdania celowe",
    description: "So that, in order to, to + infinitive",
    icon: Target,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "purp_1",
        question: "I'm studying hard _____ pass all my exams with good grades this semester.",
        translation: "(Uczę się ciężko żeby zdać wszystkie moje egzaminy z dobrymi ocenami w tym semestrze)",
        options: ["to", "for", "so that", "in order"],
        correct: "to",
        explanation: "'To + infinitive' to najprostsza forma celu! 'To pass' = w celu zdania. Gdy oba podmioty są te same (I study, I pass) używaj prostego 'to'. To najczęstsza konstrukcja celowa - krótka, jasna, naturalna. Każda akcja którą robisz dla konkretnego celu może używać tej struktury."
      },
      {
        id: "purp_2",
        question: "She's saving money _____ she can buy a new car next year for traveling.",
        translation: "(Oszczędza pieniądze żeby mogła kupić nowy samochód w przyszłym roku na podróżowanie)",
        options: ["so that", "to", "for", "in order"],
        correct: "so that",
        explanation: "'So that' + podmiot + modalny dla długoterminowych celów! 'So that she can buy' wyjaśnia PURPOSE oszczędzania. Używaj 'so that' gdy potrzebujesz modalnego (can/will/may) lub gdy podmiot się zmienia. To o planowaniu przyszłości - obecne sacrifice dla future benefit."
      },
      {
        id: "purp_3",
        question: "We left early _____ to avoid the morning rush hour traffic on the highway.",
        translation: "(Wyjechaliśmy wcześnie żeby uniknąć porannego ruchu w godzinach szczytu na autostradzie)",
        options: ["in order", "so that", "for", "because"],
        correct: "in order",
        explanation: "'In order to' jest bardziej formalne niż proste 'to'! 'In order to avoid' podkreśla deliberate purpose. To jest optional - 'to avoid' też działa ale 'in order to' dodaje emphasis na intentionality. Używane w formalnym piśmie lub gdy chcesz stress że akcja była calculated i purposeful."
      },
      {
        id: "purp_4",
        question: "I'm learning English _____ I can communicate with people when traveling abroad.",
        translation: "(Uczę się angielskiego żeby móc komunikować się z ludźmi podczas podróżowania za granicę)",
        options: ["so that", "to", "for", "because"],
        correct: "so that",
        explanation: "'So that I can' wyraża ability jako cel! Uczysz się (akcja) SO THAT możesz komunikować się (desired ability). 'Can' pokazuje że cel to nabywanie capability. To o practical motivation - język jako narzędzie dla konkretnej przyszłej potrzeby (travel communication)."
      },
      {
        id: "purp_5",
        question: "He wore glasses _____ protect his eyes from the bright sunlight at the beach.",
        translation: "(Nosił okulary żeby chronić swoje oczy od jasnego światła słonecznego na plaży)",
        options: ["to", "so that", "for", "in order"],
        correct: "to",
        explanation: "'To protect' dla immediate protective purpose! Prosty infinitive wystarczy - ten sam podmiot. Okulary służą bezpośredniemu celowi ochrony. 'To' infinitive dla wszystkich protective actions - robisz coś żeby avoid harm lub discomfort. To o praktycznej funkcji akcji."
      },
      {
        id: "purp_6",
        question: "She's taking notes carefully _____ she won't forget the important information later.",
        translation: "(Robi notatki starannie żeby nie zapomnieć ważnej informacji później)",
        options: ["so that", "to", "for", "in order"],
        correct: "so that",
        explanation: "'So that she won't forget' używa negatywnego modalnego! Cel to UNIKANIE zapominania. 'So that' + won't/can't dla negative purposes (preventing something). To o strategii uczenia - zapisywanie zabezpiecza przed future memory loss. Smart study habit."
      },
      {
        id: "purp_7",
        question: "We're whispering _____ not to wake the baby sleeping peacefully in the crib.",
        translation: "(Szepczemy żeby nie obudzić dziecka śpiącego spokojnie w łóżeczku)",
        options: ["so as", "so that", "for", "because"],
        correct: "so as",
        explanation: "'So as not to' dla negatywnych celów z infinitive! 'So as not to wake' = w celu nie budzenia. To alternatywa dla 'in order not to' - oba bardzo formalne. Bardziej elegant niż 'to not wake'. Używane dla cautious actions przewidzianych żeby avoid disturbing delikatnej sytuacji."
      },
      {
        id: "purp_8",
        question: "I bought a new laptop _____ for work but also for entertainment and gaming.",
        translation: "(Kupiłem nowy laptop nie tylko do pracy ale też dla rozrywki i grania)",
        options: ["not only", "so that", "in order", "to"],
        correct: "not only",
        explanation: "'Not only... but also...' dla multiple purposes! Laptop służy pracy (główny cel) BUT ALSO rozrywka (dodatkowy cel). To o multi-functionality - zakup ma więcej niż jedną motywację. Używane dla justyfikowania expensive purchases przez pokazywanie multiple benefits."
      },
      {
        id: "purp_9",
        question: "He exercises regularly _____ to stay healthy and fit as he gets older.",
        translation: "(Ćwiczy regularnie żeby pozostać zdrowym i w formie w miarę jak się starzeje)",
        options: ["in order", "so that", "for", "because"],
        correct: "in order",
        explanation: "'In order to stay' podkreśla deliberate health maintenance! Bardziej formalne niż proste 'to stay'. Pokazuje że exercise jest conscious strategy przeciw aging. 'In order to' dodaje gravity do purpose - to nie casualowe ale intentional program dla long-term health."
      },
      {
        id: "purp_10",
        question: "I set three alarms _____ I wouldn't oversleep and miss my early flight.",
        translation: "(Ustawiłem trzy budziki żebym nie zaspał i nie przegapił mojego wczesnego lotu)",
        options: ["so that", "to", "for", "in order"],
        correct: "so that",
        explanation: "'So that I wouldn't' dla preventing negative outcome! Multiple alarms (precaution) SO THAT wouldn't oversleep (avoided problem). 'So that' + wouldn't dla anxious preventive measures. To pokazuje importance wydarzenia - podwójne/potrójne checking żeby ensure nic nie pójdzie źle."
      },
      {
        id: "purp_11",
        question: "She spoke slowly and clearly _____ everyone could understand her explanation well.",
        translation: "(Mówiła wolno i wyraźnie żeby wszyscy mogli dobrze zrozumieć jej wyjaśnienie)",
        options: ["so that", "to", "for", "in order"],
        correct: "so that",
        explanation: "'So that everyone could' dla inclusive purpose! Mówiła wyraźnie (action) SO THAT wszyscy rozumieli (desired result). Inny podmiot (she speaks, everyone understands) wymaga 'so that'. To o thoughtful communication - adjusting delivery żeby ensure comprehension przez whole audience."
      },
      {
        id: "purp_12",
        question: "We need to hurry _____ to catch the last train home tonight at midnight.",
        translation: "(Musimy się pospieszyć żeby złapać ostatni pociąg do domu dziś wieczorem o północy)",
        options: ["in order", "so that", "for", "because"],
        correct: "in order",
        explanation: "'In order to catch' podkreśla urgency i importance! Bardziej emphatic niż proste 'to catch'. Ostatni pociąg = no second chance, więc 'in order to' adds weight do necessity. To o time pressure - musicie działać szybko żeby succeed w narrow window."
      },
      {
        id: "purp_13",
        question: "He turned up the volume _____ hear the quiet dialogue in the movie better.",
        translation: "(Podkręcił głośność żeby lepiej słyszeć cichy dialog w filmie)",
        options: ["to", "so that", "for", "in order"],
        correct: "to",
        explanation: "'To hear' dla immediate, simple purpose! Prosty infinitive dla quick actions. Podmioty te same (he turned up, he hears) więc 'to' wystarczy. To o instant adjustment dla better experience - quick fix dla temporary problem. Proste, bezpośrednie działanie dla immediate benefit."
      },
      {
        id: "purp_14",
        question: "I wrote down the address _____ that I wouldn't forget it later when needed.",
        translation: "(Zapisałem adres żeby go nie zapomnieć później kiedy będzie potrzebny)",
        options: ["so", "to", "for", "in order"],
        correct: "so",
        explanation: "'So that I wouldn't forget' dla memory insurance! Zapisanie (precaution) SO THAT nie zapomnisz (prevented problem). 'So that' często z wouldn't/won't dla avoiding negative outcomes. To o compensating dla poor memory - zewnętrzne storage (papier) zabezpiecza przed internal memory failure."
      },
      {
        id: "purp_15",
        question: "She practiced her presentation many times _____ to feel confident during the meeting.",
        translation: "(Przećwiczyła swoją prezentację wiele razy żeby czuć się pewnie podczas spotkania)",
        options: ["in order", "so that", "for", "because"],
        correct: "in order",
        explanation: "'In order to feel' dla emotional preparation! Rehearsal (effort) IN ORDER TO feel confident (psychological goal). 'In order to' podkreśla że practice była strategic - nie tylko mechaniczne memorizing ale budowanie emotional readiness. To o preparing mentally nie tylko factually."
      }
    ]
  },

  result_clauses_deep: {
    name: "Zdania skutku - pogłębione",
    description: "So...that, such...that - konsekwencje",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "res_deep_1",
        question: "The coffee was _____ hot that I burned my tongue when I took the first sip.",
        translation: "(Kawa była tak gorąca, że sparzyłem język kiedy wziąłem pierwszy łyk)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So + przymiotnik + that' dla extreme intensywności powodującej rezultat! 'So hot that I burned' - wysokość temperatury SPOWODOWAŁA obrażenie. To o przyczynowo-skutkowym związku gdzie intensywność cechy prowadzi do specific consequence. 'So...that' construction pokazuje direct causation."
      },
      {
        id: "res_deep_2",
        question: "It was _____ a boring lecture that half the students fell asleep in class.",
        translation: "(To był tak nudny wykład, że połowa studentów zasnęła na zajęciach)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such + a + przymiotnik + rzeczownik + that' dla rzeczowników! 'Such a boring lecture' modyfikuje całą noun phrase. Nuda była so extreme że spowodowała masowy sen. 'Such' z rzeczownikami, 'so' z przymiotnikami - to kluczowa różnica w konstrukcjach rezultatu."
      },
      {
        id: "res_deep_3",
        question: "He spoke _____ quietly that nobody in the back row could hear him at all.",
        translation: "(Mówił tak cicho, że nikt w ostatnim rzędzie nie mógł go w ogóle usłyszeć)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So + przysłówek + that' dla sposobu powodującego problem! 'So quietly that' - level of quietness PREVENTED hearing. To o inadequate volume dla situation. Mówca nie dostosował głośności do rozmiaru pokoju powodując communication failure dla distant listeners."
      },
      {
        id: "res_deep_4",
        question: "They made _____ much noise that the neighbors called the police to complain.",
        translation: "(Robili tyle hałasu, że sąsiedzi zadzwonili na policję żeby się poskarżyć)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So much' + rzeczownik niepoliczalny + that! 'So much noise that' - ilość hałasu przekroczyła acceptable level dramatically. Neighbors felt compelled to call authorities - pokazuje jak extreme disturbance było. 'So much' intensyfikuje niepoliczalne rzeczowniki."
      },
      {
        id: "res_deep_5",
        question: "She has _____ many responsibilities at work that she rarely has free time anymore.",
        translation: "(Ma tak wiele obowiązków w pracy, że rzadko ma już wolny czas)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So many' + policzalny mnogi + that! 'So many responsibilities' - overwhelming number powoduje brak czasu. To o work-life imbalance - obowiązki accumulated do punktu gdzie personal time disappeared. 'So many' podkreśla excessive quantity prowadzącą do negative lifestyle impact."
      },
      {
        id: "res_deep_6",
        question: "The instructions were _____ complicated that even experts had difficulty following them.",
        translation: "(Instrukcje były tak skomplikowane, że nawet eksperci mieli trudności z ich śledzeniem)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So complicated that' dla extreme complexity! Nawet eksperci struggled - to pokazuje jak extraordinary trudność była. Jeśli professionals mają trouble, to demonstrates że problem leży w instructions, nie w user capability. Extreme qualifier 'even experts' wzmacnia jak ridiculous complexity level was."
      },
      {
        id: "res_deep_7",
        question: "It was _____ terrible weather that all flights were cancelled at the airport.",
        translation: "(To była tak okropna pogoda, że wszystkie loty zostały odwołane na lotnisku)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such + przymiotnik + niepoliczalny rzeczownik! 'Such terrible weather' - severity of conditions forced mass cancellations. 'Weather' jest niepoliczalne więc używasz 'such' bez 'a'. To pokazuje disruption na massive scale - pogoda była so severe że normal operations niemożliwe."
      },
      {
        id: "res_deep_8",
        question: "He ran _____ fast that he broke the school record that stood for ten years!",
        translation: "(Biegł tak szybko, że pobił szkolny rekord który trwał przez dziesięć lat!)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So fast that' dla performance exceeding standards! Prędkość była extraordinary - beaten długotrwały rekord. To celebruje exceptional achievement. 'So...that' pokazuje jak jego speed wasn't just good ale record-breaking - przekroczył established benchmark dramatycznie."
      },
      {
        id: "res_deep_9",
        question: "There was _____ little time left that we had to rush through the final questions.",
        translation: "(Było tak mało czasu, że musieliśmy pędzić przez końcowe pytania)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So little' + niepoliczalny dla extreme scarcity! 'So little time' - minimalna ilość forcing rushed completion. 'So little/few' podkreślają inadequacy prowadzącą do compromised quality. To o time pressure - insufficient time forces less thorough work."
      },
      {
        id: "res_deep_10",
        question: "The movie had _____ an unexpected ending that everyone in cinema gasped loudly.",
        translation: "(Film miał tak niespodziewane zakończenie, że wszyscy w kinie głośno westchnęli)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such an + przymiotnik + rzeczownik' dla shocking surprises! 'Such an unexpected ending' - twist był so startling że wywołał audible collective reaction. 'Such' + rzeczownik dla dramatycznych events. To pokazuje effective storytelling - ending był powerful enough żeby create physical audience response."
      },
      {
        id: "res_deep_11",
        question: "She was _____ helpful during my difficult time that I'll never forget her kindness.",
        translation: "(Była tak pomocna podczas mojego trudnego czasu, że nigdy nie zapomnę jej życzliwości)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So helpful that' dla emotional impact! Jej help była exceptional - created lasting gratitude. 'So...that' łączy extraordinary kindness z permanent memory. To o people których generosity w tough times leaves indelible impression - action was significant enough żeby create lifelong appreciation."
      },
      {
        id: "res_deep_12",
        question: "There were _____ few people at the concert that it was almost cancelled!",
        translation: "(Było tak niewiele ludzi na koncercie, że prawie został odwołany!)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So few people' dla disappointing turnout! Extremely niska attendance nearly forced cancellation. 'So few' podkreśla inadequate liczby grożącą event viability. To o poor ticket sales - organizers considered cancelling bo turnout był poniżej minimum viable."
      },
      {
        id: "res_deep_13",
        question: "The pain was _____ intense that he couldn't even stand up or walk normally.",
        translation: "(Ból był tak intensywny, że nie mógł nawet wstać ani chodzić normalnie)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So intense that' dla severe physical sensations! Pain level była incapacitating - couldn't perform basic functions. 'So...that' pokazuje how sensation crossed threshold od discomfort do disability. To o pain so overwhelming że fundamentally impairs capability."
      },
      {
        id: "res_deep_14",
        question: "It's _____ a pity that you can't come to our wedding celebration next month!",
        translation: "(To taka szkoda, że nie możesz przyjść na nasze wesele w przyszłym miesiącu!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such a pity' to idiomatyczne wyrażenie żalu! 'Such a' + emocjonalny rzeczownik (pity/shame/pleasure). Wyraża strong feeling o situation. Często z wykrzyknikiem dla emocjonalnej intensywności. To o disappointment że ważna osoba miss important event - genuine regret o ich absence."
      },
      {
        id: "res_deep_15",
        question: "The problem is _____ serious that we need to address it immediately without delay.",
        translation: "(Problem jest tak poważny, że musimy zająć się nim natychmiast bez zwłoki)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So serious that' dla urgent situations demanding action! Severity level REQUIRES immediate response. 'So...that we need' łączy assessment z required action - recognition of seriousness compels urgent intervention. To o escalation - problem reached critical point gdzie delay is dangerous."
      }
    ]
  },

  concession_clauses: {
    name: "Zdania przyzwolenia",
    description: "Although, despite, in spite of - pomimo",
    icon: Shield,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    questions: [
      {
        id: "conc_1",
        question: "_____ it was raining heavily, we still went for a walk in the park.",
        translation: "(Chociaż mocno padało, wciąż poszliśmy na spacer do parku)",
        options: ["Although", "Despite", "In spite", "However"],
        correct: "Although",
        explanation: "'Although' + klauzula (podmiot + czasownik)! 'Although it was raining' wprowadza przeszkodę którą ignorujesz. To o działaniu mimo adverse conditions - nie pozwoliliście deszczowi was zatrzymać. 'Although' łączy dwa kontrastujące zdania pokazując determination lub enthusiasm."
      },
      {
        id: "conc_2",
        question: "_____ the bad weather conditions, the football match went ahead as planned.",
        translation: "(Pomimo złych warunków pogodowych, mecz piłkarski odbył się jak zaplanowano)",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "'Despite' + rzeczownik/gerund (bez czasownika)! 'Despite the weather' - nie może być klauzula. Różnica: although + clause, despite + noun. Match continued mimo difficulty. To o commitment do schedule - wydarzenie było ważne enough żeby proceed pomimo less-than-ideal conditions."
      },
      {
        id: "conc_3",
        question: "_____ being very tired, she continued working on her important project deadline.",
        translation: "(Pomimo bycia bardzo zmęczoną, kontynuowała pracę nad swoim ważnym projektem)",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "'Despite + gerund' dla stanów! 'Despite being tired' - gerund phrase, nie klauzula. Zmęczenie było real ale didn't stop her. To o professional dedication - deadline importance outweighed physical exhaustion. Work ethic przeważył discomfort."
      },
      {
        id: "conc_4",
        question: "_____ of the high cost, they decided to buy the expensive house in suburbs.",
        translation: "(Pomimo wysokiego kosztu, zdecydowali się kupić drogi dom na przedmieściach)",
        options: ["In spite", "Although", "However", "Despite"],
        correct: "In spite",
        explanation: "'In spite of' + rzeczownik dla formal concession! To samo znaczenie co 'despite' ale lekko bardziej formalne. 'In spite of the cost' - cena była barrier ale overcome. To o prioritizing desire/need over financial concern - dom był worth financial stretch."
      },
      {
        id: "conc_5",
        question: "_____ he studied hard, he didn't pass the difficult final examination.",
        translation: "(Chociaż ciężko się uczył, nie zdał trudnego końcowego egzaminu)",
        options: ["Although", "Despite", "In spite", "However"],
        correct: "Although",
        explanation: "'Although' dla disappointing outcome pomimo effort! Uczył się (wysiłek) ALTHOUGH oblał (unexpected failure). To wyraża że sometimes hard work isn't enough - test był too difficult lub bad luck. 'Although' podkreśla surprising contrast - normalnie effort brings success, here didn't."
      },
      {
        id: "conc_6",
        question: "We enjoyed the vacation _____ of having some rainy days during the trip.",
        translation: "(Cieszyliśmy się wakacjami pomimo mienia kilku deszczowych dni podczas wycieczki)",
        options: ["in spite", "although", "however", "though"],
        correct: "in spite",
        explanation: "'In spite of + gerund phrase' dla minor problems! 'In spite of having' - deszcz był nuisance ale didn't ruin overall experience. To o maintaining positive attitude - nie pozwoliliście small negatives destroy larger enjoyment. Overall vacation was good mimo imperfections."
      },
      {
        id: "conc_7",
        question: "_____ being late, he still managed to catch the train at the very last moment.",
        translation: "(Pomimo spóźnienia, wciąż zdołał złapać pociąg w samym ostatnim momencie)",
        options: ["Despite", "Although", "However", "But"],
        correct: "Despite",
        explanation: "'Despite being late' dla lucky outcome! Spóźnienie normalnie = missed train BUT zdołał złapać. To celebruje fortunate timing - despite disadvantage (lateness) success was achieved. Close call - situation looked bad ale worked out w last second."
      },
      {
        id: "conc_8",
        question: "_____ the fact that she's only twenty years old, she manages a team of ten people.",
        translation: "(Pomimo faktu że ma tylko dwadzieścia lat, zarządza zespołem dziesięciu ludzi)",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "'Despite the fact that' + klauzula to długa forma! Normally 'despite' + noun ale możesz add 'the fact that' dla klauzul. Młody wiek (potential disadvantage) DESPITE manages large team (impressive responsibility). To celebruje achievement mimo youth - shows competence beyond years."
      },
      {
        id: "conc_9",
        question: "_____ I don't like vegetables much, I try to eat them for health benefits.",
        translation: "(Chociaż niezbyt lubię warzyw, staram się je jeść dla korzyści zdrowotnych)",
        options: ["Although", "Despite", "In spite", "However"],
        correct: "Although",
        explanation: "'Although' dla działania przeciw preferencjom! Nie lubisz (taste preference) ALTHOUGH jesz (healthy choice). To o priorytetowaniu health over taste - overcoming personal dislike dla greater good. Shows maturity i self-discipline."
      },
      {
        id: "conc_10",
        question: "He passed the exam _____ not attending many classes during the semester.",
        translation: "(Zdał egzamin pomimo nie uczęszczania na wiele zajęć podczas semestru)",
        options: ["despite", "although", "however", "though"],
        correct: "despite",
        explanation: "'Despite + gerund' dla surprising success! Nie chodził na zajęcia (disadvantage) DESPITE zdał (unexpected success). To może być natural talent lub good cramming - somehow succeeded pomimo poor attendance. Shows że sometimes można succeed without following recommended path."
      },
      {
        id: "conc_11",
        question: "_____ the car is old, it still runs perfectly well without any mechanical problems.",
        translation: "(Chociaż samochód jest stary, wciąż jeździ perfekcyjnie bez żadnych mechanicznych problemów)",
        options: ["Although", "Despite", "In spite", "However"],
        correct: "Although",
        explanation: "'Although' dla quality pomimo wieku! Stary (expected weakness) ALTHOUGH działa świetnie (actual reliability). To o good maintenance lub construction - wiek nie degraded performance. Czasem older things są better built niż new - durability over time."
      },
      {
        id: "conc_12",
        question: "_____ all his efforts and hard work, he didn't get the promotion he wanted.",
        translation: "(Pomimo wszystkich jego wysiłków i ciężkiej pracy, nie dostał awansu którego chciał)",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "'Despite all his efforts' dla unfair outcome! Effort był there (deserved success) BUT didn't get promotion (disappointing result). To frustrujące - czasem hard work isn't rewarded. Może polityka biurowa lub timing - pokazuje że merit nie zawsze equals recognition."
      },
      {
        id: "conc_13",
        question: "_____ being nervous, she gave an excellent presentation that impressed everyone.",
        translation: "(Pomimo bycia zdenerwowaną, dała doskonałą prezentację która zaimponowała wszystkim)",
        options: ["Despite", "Although", "However", "Though"],
        correct: "Despite",
        explanation: "'Despite being nervous' dla triumph over anxiety! Nerwy (internal struggle) DESPITE excellent delivery (external success). To celebruje overcoming fear - nervousness nie pokazała się w performance. Inner turmoil nie prevented outer excellence - professional composure mimo internal stress."
      },
      {
        id: "conc_14",
        question: "_____ what you might think, I actually enjoyed the long boring documentary film.",
        translation: "(Wbrew temu co możesz myśleć, faktycznie podobał mi się długi nudny film dokumentalny)",
        options: ["Despite", "Although", "Contrary to", "In spite"],
        correct: "Despite",
        explanation: "'Despite what you think' dla surprising personal taste! Others found boring (expected reaction) BUT ty enjoyed (contrarian response). 'Despite' może używać 'what' clauses. To o defending uncommon opinion - twój taste differs from majority expectation."
      },
      {
        id: "conc_15",
        question: "_____ he's very intelligent, he sometimes makes silly mistakes from carelessness.",
        translation: "(Chociaż jest bardzo inteligentny, czasem popełnia głupie błędy z nieostrożności)",
        options: ["Although", "Despite", "In spite", "However"],
        correct: "Although",
        explanation: "'Although' dla paradoxical behavior! Inteligentny (high capability) ALTHOUGH silly mistakes (surprising failures). To o human imperfection - nawet smart people mess up przez inattention. Intelligence doesn't prevent wszystkich błędów - carelessness affects everyone równo."
      }
    ]
  },

  reason_clauses: {
    name: "Zdania przyczynowe",
    description: "Because, since, as - wyjaśnianie powodów",
    icon: HelpCircle,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    questions: [
      {
        id: "reas_1",
        question: "I'm learning English _____ I want to travel around the world freely.",
        translation: "(Uczę się angielskiego ponieważ chcę podróżować po całym świecie swobodnie)",
        options: ["because", "because of", "due to", "since"],
        correct: "because",
        explanation: "'Because' + klauzula (podmiot + czasownik) dla wyjaśniania powodów! 'Because I want' podaje twoją motywację. To najprostszy i najczęstszy sposób wyjaśniania 'dlaczego' robisz coś. 'Because' bezpośrednio łączy akcję z jej underlying motivation lub reason."
      },
      {
        id: "reas_2",
        question: "The match was cancelled _____ the heavy rain and flooding on the field.",
        translation: "(Mecz został odwołany z powodu mocnego deszczu i podtopień na boisku)",
        options: ["because of", "because", "since", "as"],
        correct: "because of",
        explanation: "'Because of' + rzeczownik (nie klauzula)! 'Because of the rain' - przyimek bierze noun phrase. Różnica: because + clause, because of + noun. Deszcz był physical reason dla cancellation. To o external circumstances forcing decision - warunki made play impossible."
      },
      {
        id: "reas_3",
        question: "_____ it was her birthday, we organized a surprise party for her celebration.",
        translation: "(Ponieważ były jej urodziny, zorganizowaliśmy niespodziankę dla jej świętowania)",
        options: ["Since", "Since of", "Due to", "Because of"],
        correct: "Since",
        explanation: "'Since' + klauzula dla znanego lub oczywistego powodu! 'Since it was her birthday' - reason jest understood/accepted. 'Since' jest lekko bardziej formalne niż 'because'. Urodziny są perfect occasion dla party - reason is clear i logical. 'Since' często starts zdanie."
      },
      {
        id: "reas_4",
        question: "_____ the bad economy and financial crisis, many people lost their jobs recently.",
        translation: "(Z powodu złej ekonomii i kryzysu finansowego, wiele osób straciło swoje prace ostatnio)",
        options: ["Due to", "Due", "Because", "Since"],
        correct: "Due to",
        explanation: "'Due to' + rzeczownik dla formalnych przyczyn! Very formal - używane w news, business, academic writing. 'Due to the economy' identyfikuje structural cause. Bardziej formalne niż 'because of'. To o large-scale effects - economic forces affecting masses. 'Due to' brzmi authoritative i analytical."
      },
      {
        id: "reas_5",
        question: "_____ you're tired, you should go to bed earlier tonight for rest.",
        translation: "(Skoro jesteś zmęczony, powinieneś iść spać wcześniej dziś wieczorem na odpoczynek)",
        options: ["As", "As of", "Because of", "Due to"],
        correct: "As",
        explanation: "'As' + klauzula dla logicznych wniosków! 'As you're tired' (observed state) więc 'you should rest' (logical recommendation). 'As' jest używane dla reasoning - because + therefore combined. To łagodniejsze niż 'because' - bardziej o making connection niż stating stark cause."
      },
      {
        id: "reas_6",
        question: "The flight was delayed _____ technical problems with the aircraft engine system.",
        translation: "(Lot był opóźniony z powodu problemów technicznych z systemem silnika samolotu)",
        options: ["due to", "due", "because", "since"],
        correct: "due to",
        explanation: "'Due to technical problems' dla airline announcements! Formal explanation dla delays. Airlines używają 'due to' żeby brzmieć profesjonalnie podczas explaining disruptions. Passażerowie frustrated ale formal language softens annoyance przez sounding official i beyond airline's control."
      },
      {
        id: "reas_7",
        question: "_____ I had already seen the movie twice before, I didn't want to watch it again.",
        translation: "(Ponieważ już widziałem film dwa razy wcześniej, nie chciałem oglądać go znowu)",
        options: ["Since", "Since of", "Because of", "Due to"],
        correct: "Since",
        explanation: "'Since' dla established facts as reasons! Widziałeś twice (known fact) więc nie chcesz again (logical result). 'Since' often implies 'given that' - przyjmując ten fakt jako true. To o declining invitation przez citing previous experience - legitimate reason dla not repeating."
      },
      {
        id: "reas_8",
        question: "_____ his illness and health problems, he couldn't attend the important conference.",
        translation: "(Z powodu jego choroby i problemów zdrowotnych, nie mógł uczestniczyć w ważnej konferencji)",
        options: ["Owing to", "Owing", "Because", "Since"],
        correct: "Owing to",
        explanation: "'Owing to' + rzeczownik to bardzo formalne 'due to'! Używane w official communications dla explaining absences. 'Owing to illness' brzmi professional i sympathetic. To dla formal apologies lub official explanations - bardziej sophisticated niż 'because of'."
      },
      {
        id: "reas_9",
        question: "I couldn't sleep well last night _____ the loud noise from neighbor's party.",
        translation: "(Nie mogłem dobrze spać wczoraj w nocy z powodu głośnego hałasu z imprezy sąsiada)",
        options: ["because of", "because", "since", "as"],
        correct: "because of",
        explanation: "'Because of the noise' identyfikuje konkretną przyczynę! Hałas (external disturbance) prevented sleep. 'Because of' + noun dla fizycznych disruptions. To narzekanie - wyjaśniasz czemu nie wyspany. External factor był poza twoją kontrolą affecting your rest."
      },
      {
        id: "reas_10",
        question: "_____ the train was late, we missed our connecting flight to our destination.",
        translation: "(Ponieważ pociąg się spóźnił, przegapiliśmy nasz łączący lot do naszego celu)",
        options: ["Because", "Because of", "Due to", "Owing to"],
        correct: "Because",
        explanation: "'Because the train was late' wyjaśnia missed connection! Opóźnienie pociągu (pierwsze zdarzenie) caused missed flight (domino effect). To o cascade failures w travel - jedna opóźnienie prowadzi do większych problems. 'Because' jasno pokazuje causal chain."
      },
      {
        id: "reas_11",
        question: "The picnic was cancelled _____ rain and stormy weather forecast predictions.",
        translation: "(Piknik został odwołany z powodu deszczu i burzowych prognoz pogody)",
        options: ["due to", "due", "because", "since"],
        correct: "due to",
        explanation: "'Due to rain' dla weather-caused cancellations! Formal announcement structure. Events używają 'due to' dla explaining why plans changed. Rain made outdoor gathering impossible - weather dictated decision. To official communication o unavoidable cancellation przez conditions."
      },
      {
        id: "reas_12",
        question: "_____ we have limited time, let's focus on the most important topics first.",
        translation: "(Skoro mamy ograniczony czas, skupmy się najpierw na najważniejszych tematach)",
        options: ["Since", "Since of", "Because of", "Due to"],
        correct: "Since",
        explanation: "'Since we have' dla practical reasoning! Limited time (constraint) SINCE prioritize (smart response). 'Since' often starts suggestions - given this situation, here's logical action. To o efficient planning - recognizing limitations i adapting strategy accordingly."
      },
      {
        id: "reas_13",
        question: "She was upset _____ nobody remembered her birthday at all yesterday.",
        translation: "(Była zdenerwowana ponieważ nikt nie pamiętał o jej urodzinach wcale wczoraj)",
        options: ["because", "because of", "due to", "owing to"],
        correct: "because",
        explanation: "'Because nobody remembered' wyjaśnia emotional reaction! Zapomnienie (hurtful event) caused upset (emotional response). To o feeling forgotten - social pain of not being remembered on special day. 'Because' łączy event z emotional consequence jasno i bezpośrednio."
      },
      {
        id: "reas_14",
        question: "_____ the road construction and repairs, traffic is moving very slowly today.",
        translation: "(Z powodu budowy drogi i napraw, ruch porusza się bardzo wolno dzisiaj)",
        options: ["Because of", "Because", "Since", "As"],
        correct: "Because of",
        explanation: "'Because of construction' dla traffic explanations! Construction (physical obstruction) causing delays. Radio traffic reports używają tej struktury. Drivers frustrated ale knowing reason (construction) helps acceptance. 'Because of' identyfikuje concrete physical cause visible disruption."
      },
      {
        id: "reas_15",
        question: "_____ I'm not feeling well today, I think I'll stay home from work and rest.",
        translation: "(Ponieważ nie czuję się dobrze dzisiaj, myślę że zostanę w domu z pracy i odpoczę)",
        options: ["As", "As of", "Because of", "Due to"],
        correct: "As",
        explanation: "'As I'm not feeling well' dla soft explanations! 'As' jest gentler niż 'because' - less blunt. Używane dla explaining decisions based on current state. Illness (condition) logically leads to staying home (sensible action). 'As' tworzy polite, reasonable justification dla non-attendance."
      }
    ]
  },

  time_clauses_advanced: {
    name: "Zdania czasowe - zaawansowane",
    description: "Before, after, while, until, as soon as",
    icon: Clock,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "time_adv_1",
        question: "Call me _____ you arrive at the airport safely and get through customs.",
        translation: "(Zadzwoń do mnie jak tylko dotrzesz na lotnisko bezpiecznie i przejdziesz przez odprawę celną)",
        options: ["as soon as", "as long as", "so that", "in order to"],
        correct: "as soon as",
        explanation: "'As soon as' dla natychmiastowej kolejności akcji! Dotarcie (first) → dzwoń NATYCHMIAST (second). 'As soon as' podkreśla że nie ma delay między wydarzeniami - instant sequence. To dla urgent communication - chcesz wiedzieć immediately że bezpiecznie arrived."
      },
      {
        id: "time_adv_2",
        question: "_____ I was walking home from work, I saw a beautiful rainbow in the sky.",
        translation: "(Podczas gdy szedłem do domu z pracy, zobaczyłem piękną tęczę na niebie)",
        options: ["While", "During", "When", "As"],
        correct: "While",
        explanation: "'While' + continuous dla background action! 'While I was walking' ustawia scenę (ongoing) when rainbow appeared (moment). 'While' podkreśla że chodzenie było in progress kiedy coś innego się stało. To dla malowania sceny - jedna akcja tworzy context dla innej."
      },
      {
        id: "time_adv_3",
        question: "Wait here _____ I come back from the store with our shopping groceries.",
        translation: "(Poczekaj tutaj aż wrócę ze sklepu z naszymi zakupami spożywczymi)",
        options: ["until", "while", "during", "as"],
        correct: "until",
        explanation: "'Until' dla czekania do punktu zakończenia! Czekaj (continuous state) UNTIL wrócę (ending point). 'Until' pokazuje że waiting continues up TO specific moment. To instruction dla staying put - don't leave before return. Marks duration of waiting przez defining its end point."
      },
      {
        id: "time_adv_4",
        question: "Wash your hands _____ eating any food to prevent germs and stay healthy.",
        translation: "(Umyj ręce przed jedzeniem żeby zapobiec zarazkom i pozostać zdrowym)",
        options: ["before", "until", "while", "after"],
        correct: "before",
        explanation: "'Before + gerund' dla hygiene sequence! Umyć (first action) BEFORE jeść (second action). 'Before' ustawia proper order dla health - cleaning przed consuming. To basic hygiene rule - temporal order jest critical dla preventing contamination. Sequence matters dla effectiveness."
      },
      {
        id: "time_adv_5",
        question: "_____ finishing my homework, I can go out and play with my friends outside.",
        translation: "(Po skończeniu mojej pracy domowej, mogę wyjść i pobawić się z przyjaciółmi na zewnątrz)",
        options: ["After", "Before", "Until", "While"],
        correct: "After",
        explanation: "'After + gerund' dla warunków sekwencyjnych! Praca domowa must be done (first) AFTER THAT możesz bawić się (reward). 'After' ustawia requirement - fun comes tylko po responsibility. To parent/teacher rule - work before play. Temporal sequence enforces discipline."
      },
      {
        id: "time_adv_6",
        question: "I'll wait _____ you finish getting ready, so take your time and don't rush.",
        translation: "(Poczekam aż skończysz się przygotowywać, więc nie spiesz się)",
        options: ["until", "while", "during", "before"],
        correct: "until",
        explanation: "'Until you finish' dla patient waiting! Będę czekał (continuing) UNTIL finish (moment to move). 'Until' pokazuje że nie ma pressure - możesz take time potrzebny. To considerate statement - respecting someone's need for proper preparation bez rushing them."
      },
      {
        id: "time_adv_7",
        question: "_____ I was reading the book, my phone rang loudly and interrupted me.",
        translation: "(Podczas gdy czytałem książkę, mój telefon zadzwonił głośno i mi przerwał)",
        options: ["While", "During", "Until", "Before"],
        correct: "While",
        explanation: "'While' + continuous dla interruptions! Czytanie było ongoing (background) WHILE telefon rang (interrupting event). 'While' ustawia context dla disruption. To o unexpected break w concentration - jedna akcja was disturbed przez inną during its progress."
      },
      {
        id: "time_adv_8",
        question: "Please turn off all electronic devices _____ the airplane takes off and lands.",
        translation: "(Proszę wyłącz wszystkie urządzenia elektroniczne zanim samolot wystartuje i wyląduje)",
        options: ["before", "after", "while", "until"],
        correct: "before",
        explanation: "'Before' dla safety requirements! Devices off (must happen first) BEFORE takeoff/landing (critical moments). Airline rules dla preventing interference. 'Before' ustawia mandatory sequence dla safety - compliance must precede specific flight phases. This is regulation, nie suggestion."
      },
      {
        id: "time_adv_9",
        question: "_____ the sun rises early tomorrow, let's leave at dawn for our trip.",
        translation: "(Skoro słońce wschodzi wcześnie jutro, wyjedźmy o świcie na naszą wycieczkę)",
        options: ["Since", "While", "Until", "Before"],
        correct: "Since",
        explanation: "'Since' dla wykorzystania circumstance! Sunrise jest early (natural fact) SINCE leave at dawn (logical plan wykorzystujący to). 'Since' tu znaczy 'given that' - accepting sunrise timing jako reason dla early departure. To o planning around natural events."
      },
      {
        id: "time_adv_10",
        question: "Lock all the doors and windows _____ you leave the house every single time.",
        translation: "(Zamknij wszystkie drzwi i okna zanim opuścisz dom za każdym razem)",
        options: ["before", "after", "while", "until"],
        correct: "before",
        explanation: "'Before you leave' dla security routine! Locking (protective action) BEFORE leaving (vulnerable moment). 'Before' ustawia safety protocol - secure property przed going. To essential habit - temporal order critical dla preventing break-ins. Sequence is safety measure."
      },
      {
        id: "time_adv_11",
        question: "I always brush my teeth _____ going to bed at night for dental hygiene.",
        translation: "(Zawsze szczotkuję zęby przed pójściem spać w nocy dla higieny dentystycznej)",
        options: ["before", "after", "while", "until"],
        correct: "before",
        explanation: "'Before + gerund' dla nighttime routine! Szczotkowanie (cleansing) BEFORE sleep (clean state maintained). Daily habit dla health. 'Before going to bed' jest standard dental advice - kończy dzień z clean teeth. Sequence matters dla overnight oral health."
      },
      {
        id: "time_adv_12",
        question: "_____ I was cooking dinner, I listened to my favorite music and podcasts.",
        translation: "(Podczas gdy gotowałem kolację, słuchałem mojej ulubionej muzyki i podcastów)",
        options: ["While", "During", "Until", "Before"],
        correct: "While",
        explanation: "'While cooking' dla simultaneous activities! Gotowanie (main task) WHILE słuchanie (parallel activity). 'While' + continuous dla multitasking. To o making chores enjoyable - combining necessary task z pleasant entertainment. Parallel activities make time productive i enjoyable."
      },
      {
        id: "time_adv_13",
        question: "Don't disturb me _____ I'm studying for tomorrow's important exam, please.",
        translation: "(Nie przeszkadzaj mi kiedy uczę się do jutrzejszego ważnego egzaminu, proszę)",
        options: ["while", "during", "until", "before"],
        correct: "while",
        explanation: "'While I'm studying' dla requesting quiet! Uczenie (needs concentration) więc don't interrupt WHILE ongoing. 'While' + continuous dla periods wymagających undisturbed focus. To boundary request - protecting study time od distractions dla effective learning."
      },
      {
        id: "time_adv_14",
        question: "_____ he had finished his meal, he paid the bill and left the restaurant.",
        translation: "(Po tym jak skończył posiłek, zapłacił rachunek i opuścił restaurację)",
        options: ["After", "Before", "While", "Until"],
        correct: "After",
        explanation: "'After he had finished' używa past perfect dla completed action! Eating finished (completed first) AFTER THAT paid i left (sequence). 'After' + past perfect podkreśla że pierwsza akcja była completely done przed second. Proper restaurant sequence - finish przed paying."
      },
      {
        id: "time_adv_15",
        question: "I'll stay here _____ you return from your meeting downtown this afternoon.",
        translation: "(Zostanę tutaj aż wrócisz ze swojego spotkania w centrum dziś popołudniu)",
        options: ["until", "while", "during", "before"],
        correct: "until",
        explanation: "'Until you return' dla commitment to wait! Staying (będę tu) UNTIL return (twoje przyjście ends wait). To promise availability - nie wyjdę przed twój return. 'Until' definiuje długość mojego czekania przez twoje działanie jako endpoint. Reliability statement."
      }
    ]
  }
};

export default part16Categories;
