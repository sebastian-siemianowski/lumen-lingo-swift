/**
 * POLISH → ENGLISH GRAMMAR - PART 18
 * 4 categories, 15 questions each - Advanced structures
 */

import { Wand2, Scale, Sparkle, Crown } from "lucide-react";

export const part18Categories = {
  wish_regret_structures: {
    name: "Wish & Regret - życzenia i żale",
    description: "I wish I could, If only I had...",
    icon: Wand2,
    color: "from-purple-500 to-violet-600",
    level: "intermediate",
    questions: [
      {
        id: "wish_1",
        question: "I wish I _____ speak five languages fluently like my multilingual colleague.",
        translation: "(Chciałbym móc mówić w pięciu językach płynnie jak mój wielojęzyczny kolega)",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "'I wish I could' wyraża obecne nierealne pragnienie! Nie mówisz w pięciu językach (rzeczywistość) ale chciałbyś móc (marzenie). 'Wish' + past form dla present unreality - używasz 'could' nie 'can'. To o aspiracjach językowych - widzisz czyjąś impressive umiejętność i żałujesz że nie masz takiej samej."
      },
      {
        id: "wish_2",
        question: "If only I _____ studied harder when I was younger at school!",
        translation: "(Gdybym tylko uczył się ciężej kiedy byłem młodszy w szkole!)",
        options: ["had", "have", "would have", "did"],
        correct: "had",
        explanation: "'If only I had studied' to intensywny żal o przeszłość! Nie uczyłeś się ciężko (przeszła rzeczywistość) i teraz żałujesz. 'If only' jest silniejsze niż 'I wish' - more desperate regret. Past perfect dla past regrets - chciałbyś zmienić przeszłość ale nie możesz. To o życiowych lekcjach learned too late."
      },
      {
        id: "wish_3",
        question: "I wish it _____ raining so we could go outside and enjoy the weather.",
        translation: "(Szkoda że pada żebyśmy mogli wyjść na zewnątrz i cieszyć się pogodą)",
        options: ["weren't", "isn't", "won't", "wouldn't"],
        correct: "weren't",
        explanation: "'I wish it weren't raining' dla obecnej niepożądanej sytuacji! Pada TERAZ (reality) ale chcesz żeby nie padało (desire). 'Wish' + past form dla present - używasz 'weren't' nie 'isn't'. To o planach zrujnowanych przez pogodę - chciałbyś różnych warunków dla outdoor activities."
      },
      {
        id: "wish_4",
        question: "She wishes she _____ bought that house when prices were lower last year.",
        translation: "(Żałuje że nie kupiła tego domu kiedy ceny były niższe w zeszłym roku)",
        options: ["had", "has", "would have", "did"],
        correct: "had",
        explanation: "'Wishes she had bought' dla missed opportunity w przeszłości! Nie kupiła (przeszła decyzja) teraz ceny wyższe (obecna konsekwencja). Past perfect po 'wish' dla past regrets. To o financial regrets - widzenie jak ceny wzrosły makes you żałować nie działania kiedy było taniej."
      },
      {
        id: "wish_5",
        question: "I wish you _____ stop making so much noise - I'm trying to concentrate here!",
        translation: "(Chciałbym żebyś przestał robić tyle hałasu - próbuję się tu skupić!)",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'I wish you would stop' dla annoyance o obecnym zachowaniu! Robisz hałas (irritating reality) chcę żebyś przestał (frustrated wish). 'Would' po 'wish' dla irritating habits innych ludzi. To bardziej o complaint niż fantasy - żądasz zmiany zachowania która denerwuje. Używane gdy coś cię irytuje."
      },
      {
        id: "wish_6",
        question: "If only we _____ more time to finish this complex project properly!",
        translation: "(Gdybyśmy tylko mieli więcej czasu żeby skończyć ten złożony projekt porządnie!)",
        options: ["had", "have", "would have", "will have"],
        correct: "had",
        explanation: "'If only we had more time' wyraża desperacką potrzebę! Nie macie enough time (constraint) żałujecie tego (frustration). 'If only' + past dla present impossibility. To o time pressure - wiecie że quality będzie suffer bo deadline jest too tight. Desperackie wish dla więcej resources."
      },
      {
        id: "wish_7",
        question: "I wish I _____ so tired all the time - I have no energy for anything anymore.",
        translation: "(Chciałbym nie być tak zmęczony cały czas - nie mam już energii na nic)",
        options: ["weren't", "am not", "won't be", "wouldn't be"],
        correct: "weren't",
        explanation: "'I wish I weren't tired' dla chronic present condition! Jesteś zmęczony (ongoing state) chcesz nie być (desired state). Negatywny 'wish' używa 'weren't' dla 'am/is/are'. To o exhaustion affecting quality of life - constant fatigue preventing enjoyment i productivity."
      },
      {
        id: "wish_8",
        question: "She wishes she _____ never said those hurtful words during the argument yesterday.",
        translation: "(Żałuje że w ogóle powiedziała te krzywdzące słowa podczas kłótni wczoraj)",
        options: ["had", "has", "would", "did"],
        correct: "had",
        explanation: "'Wishes she had never said' to głęboki żal o spoken words! Powiedziałaś (can't take back) teraz żałujesz (regret). 'Had never' dla things you did że wish you hadn't. Words said in anger często leave lasting regret - would give anything żeby cofnąć ale słowa już wypowiedziane."
      },
      {
        id: "wish_9",
        question: "I wish there _____ a cure for this common disease that affects millions worldwide.",
        translation: "(Chciałbym żeby istniało lekarstwo na tę powszechną chorobę która dotyka milionów na świecie)",
        options: ["were", "is", "will be", "would be"],
        correct: "were",
        explanation: "'I wish there were' dla wanting existence of something! Nie ma cure (sad reality) życzysz żeby było (hopeful wish). 'There were' (subjunctive-like) po 'wish' dla present non-existence. To compassionate wish - concern dla suffering ludzi driving wish dla medical breakthrough."
      },
      {
        id: "wish_10",
        question: "If only I _____ listened to your wise advice earlier - you were absolutely right!",
        translation: "(Gdybym tylko posłuchał twojej mądrej rady wcześniej - miałeś całkowitą rację!)",
        options: ["had", "have", "would have", "did"],
        correct: "had",
        explanation: "'If only I had listened' to strong past regret! Nie słuchałeś (past mistake) teraz widzisz że racja (present consequence). 'If only' + past perfect dla intense regret o ignored advice. To 'I should have listened' feeling - hindsight showing że rada była correct, żałujesz ignoring it."
      },
      {
        id: "wish_11",
        question: "I wish my neighbors _____ play loud music late at night every single day!",
        translation: "(Chciałbym żeby moi sąsiedzi nie grali głośnej muzyki późno w nocy każdego dnia!)",
        options: ["wouldn't", "won't", "don't", "didn't"],
        correct: "wouldn't",
        explanation: "'I wish they wouldn't play' dla repeated annoyance! Grają głośno (irritating habit) chcesz żeby przestali (complaint wish). 'Wouldn't' dla ongoing irritating behaviors innych. To neighbor frustration - regular disturbance affecting your sleep i peace. Wish dla respect i consideration."
      },
      {
        id: "wish_12",
        question: "She wishes she _____ afford to travel around the world like her rich friends do.",
        translation: "(Żałuje że nie stać ją na podróżowanie po świecie jak jej bogatych przyjaciół)",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "'Wishes she could afford' dla financial limitations! Nie stać cię (present inability) żałujesz (present wish). 'Could afford' dla obecnych niemożliwości finansowych. To o economic inequality - widzenie others enjoy luxuries że nie możesz have creates longing i maybe envy."
      },
      {
        id: "wish_13",
        question: "I wish I _____ taken that job opportunity when it was offered to me!",
        translation: "(Żałuję że nie przyjąłem tej oferty pracy kiedy mi ją zaoferowano!)",
        options: ["had", "have", "would have", "did"],
        correct: "had",
        explanation: "'I wish I had taken' dla career regret! Odrzuciłeś ofertę (past decision) teraz żałujesz (present regret). Past perfect po 'wish' dla unchangeable past. To major life regret - zastanawiasz się jak życie byłoby different gdybyś accepted. Career fork roads często leave lasting 'what ifs'."
      },
      {
        id: "wish_14",
        question: "If only the traffic _____ so bad today - we're going to be late for sure!",
        translation: "(Gdyby tylko ruch nie był taki zły dzisiaj - na pewno się spóźnimy!)",
        options: ["weren't", "isn't", "won't be", "wouldn't be"],
        correct: "weren't",
        explanation: "'If only it weren't' dla present frustrating situation! Traffic jest bad NOW (current problem) wish it weren't (desired different reality). 'If only' + past form dla present. To commuter frustration - stuck in traffic wishing dla better conditions. Present tense problem gets past tense wish form."
      },
      {
        id: "wish_15",
        question: "I wish I _____ remember where I put my car keys this morning - I've looked everywhere!",
        translation: "(Chciałbym móc sobie przypomnieć gdzie położyłem kluczyki dziś rano - szukałem wszędzie!)",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "'I wish I could remember' dla frustrating memory failure! Nie pamiętasz (present inability) desperacko chcesz (urgent wish). 'Could remember' dla mental abilities których brakuje. To relatable frustration - knowing you JUST had something ale memory won't cooperate. Urgent practical need powoduje wish."
      }
    ]
  },

  gradable_adjectives: {
    name: "Przymiotniki stopniowalne vs niestopniowalne",
    description: "Very tired vs absolutely exhausted",
    icon: Scale,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "grad_1",
        question: "I'm _____ tired after working twelve hours straight without any breaks today.",
        translation: "(Jestem absolutnie wyczerpany po pracy dwanaście godzin z rzędu bez żadnych przerw dzisiaj)",
        options: ["absolutely", "very", "quite", "fairly"],
        correct: "absolutely",
        explanation: "'Absolutely' z extreme adjectives! 'Exhausted' jest już extreme (więcej niż 'tired') więc używasz 'absolutely/completely' nie 'very'. Gradable: tired/very tired. Non-gradable: exhausted/absolutely exhausted. To o intensyfikowaniu już strong words - 'absolutely' wzmacnia extreme przymiotniki dla maximum emphasis."
      },
      {
        id: "grad_2",
        question: "The movie was _____ good - I really enjoyed it and would recommend watching.",
        translation: "(Film był bardzo dobry - naprawdę mi się podobał i poleciłbym obejrzenie)",
        options: ["very", "absolutely", "completely", "totally"],
        correct: "very",
        explanation: "'Very' z gradable adjectives! 'Good' może być różnych poziomów (ok/good/very good) więc używasz 'very'. Dla extreme version (excellent/brilliant) użyłbyś 'absolutely'. To podstawowa zasada: normalne przymiotniki = very, ekstremalne przymiotniki = absolutely. 'Good' jest gradable więc potrzebuje 'very'."
      },
      {
        id: "grad_3",
        question: "The answer is _____ wrong - there's no doubt about it at all whatsoever.",
        translation: "(Odpowiedź jest całkowicie błędna - nie ma co do tego żadnej wątpliwości w ogóle)",
        options: ["completely", "very", "quite", "rather"],
        correct: "completely",
        explanation: "'Completely wrong' bo 'wrong' jest absolute! Coś jest wrong lub right - nie ma middle ground, więc używasz 'completely/totally/absolutely'. Nie 'very wrong' - wrongness nie ma degrees. To binary state - 100% błędne więc intensifier musi być absolute też."
      },
      {
        id: "grad_4",
        question: "I'm _____ hungry - I haven't eaten anything since yesterday morning at breakfast.",
        translation: "(Jestem strasznie głodny - nie jadłem nic od wczoraj rano przy śniadaniu)",
        options: ["extremely", "absolutely", "completely", "totally"],
        correct: "extremely",
        explanation: "'Extremely hungry' bo 'hungry' jest gradable! Możesz być bit hungry, hungry, very hungry, extremely hungry - levels istnieją. 'Extremely' jest stronger niż 'very' ale wciąż dla gradable adjectives. Long time without food creates extreme hunger - używasz strongest gradable intensifier dla emphasizing severity."
      },
      {
        id: "grad_5",
        question: "The explanation was _____ clear - everyone understood it perfectly without questions.",
        translation: "(Wyjaśnienie było krystalicznie jasne - wszyscy zrozumieli perfekcyjnie bez pytań)",
        options: ["crystal", "very", "quite", "rather"],
        correct: "crystal",
        explanation: "'Crystal clear' to idiom używający 'crystal' jako intensifier! Fixed expression - nie 'very clear'. 'Crystal' sugeruje transparentness i clarity jak kryształ. Niektóre przymiotniki mają special intensifiers które są preferowane - 'crystal clear', 'brand new', 'wide awake'. To idiomatyczne kombinacje."
      },
      {
        id: "grad_6",
        question: "The house is _____ enormous - it has over twenty rooms on three floors!",
        translation: "(Dom jest całkowicie ogromny - ma ponad dwadzieścia pokoi na trzech piętrach!)",
        options: ["absolutely", "very", "quite", "fairly"],
        correct: "absolutely",
        explanation: "'Absolutely enormous' bo 'enormous' jest już extreme! 'Enormous' = very big, więc używasz 'absolutely' nie 'very'. Nie możesz mówić 'very enormous' - to redundant. Extreme adjectives (enormous/tiny/freezing/boiling) biorą absolute intensifiers. Dom jest exceptionally large więc używasz extreme przymiotnika z absolute intensifier."
      },
      {
        id: "grad_7",
        question: "I'm _____ sure that I locked the door before leaving this morning.",
        translation: "(Jestem całkowicie pewien że zamknąłem drzwi przed wyjściem dziś rano)",
        options: ["quite", "absolutely", "very", "fairly"],
        correct: "quite",
        explanation: "'Quite sure' dla reasonable confidence! 'Quite' z gradable adjectives means 'fairly/reasonably'. Nie 100% certain ale confident. 'Quite' może też mean 'completely' z extreme adjectives ale z gradable means 'moderately'. To o memory confidence - pamiętasz locking ale tiny doubt remains. Practical certainty bez absolute guarantee."
      },
      {
        id: "grad_8",
        question: "The water is _____ freezing - you can't swim in it without a wetsuit today!",
        translation: "(Woda jest absolutnie lodowata - nie możesz w niej pływać bez kombinezonu dzisiaj!)",
        options: ["absolutely", "very", "quite", "rather"],
        correct: "absolutely",
        explanation: "'Absolutely freezing' bo 'freezing' jest extreme! 'Freezing' nie jest gradable - znaczy 'extremely cold'. Używasz 'absolutely' dla wzmocnienia już extreme word. To hyperbole - może nie literally freezing point ale feels unbearably cold. Extreme temperature wyraża się przez extreme adjective + absolute intensifier."
      },
      {
        id: "grad_9",
        question: "She's _____ upset about losing her favorite childhood teddy bear forever.",
        translation: "(Jest bardzo zdenerwowana utratą swojego ulubionego misia z dzieciństwa na zawsze)",
        options: ["very", "absolutely", "completely", "totally"],
        correct: "very",
        explanation: "'Very upset' bo 'upset' jest gradable emotion! Możesz być bit upset, upset, very upset - emotions mają levels. 'Very' dla normalnych emotion words. To emotional attachment - childhood toy ma sentimental value więc loss creates significant distress. Gradable emotion dostaje gradable intensifier."
      },
      {
        id: "grad_10",
        question: "The test was _____ impossible - even the best students couldn't finish it properly.",
        translation: "(Test był całkowicie niemożliwy - nawet najlepsi studenci nie mogli go skończyć porządnie)",
        options: ["absolutely", "very", "quite", "rather"],
        correct: "absolutely",
        explanation: "'Absolutely impossible' bo 'impossible' jest absolute! Coś jest possible lub impossible - binary. Używasz 'absolutely/completely' nie 'very'. Nawet best students failed pokazuje że test crossed line od difficult do actually undoable. Absolute adjective wymaga absolute intensifier."
      },
      {
        id: "grad_11",
        question: "I'm _____ cold - can we please turn on the heating system now?",
        translation: "(Jest mi bardzo zimno - czy możemy proszę włączyć ogrzewanie teraz?)",
        options: ["really", "absolutely", "completely", "totally"],
        correct: "really",
        explanation: "'Really cold' dla emphasizing gradable! 'Cold' jest gradable (chilly/cold/very cold) a 'really' jest informal intensifier działający z both gradable i extreme. More casual niż 'very'. To praktyczna prośba - discomfort level wymaga action (heating). 'Really' adds urgency bez being too formal."
      },
      {
        id: "grad_12",
        question: "The performance was _____ perfect - not a single mistake in the entire show!",
        translation: "(Występ był absolutnie perfekcyjny - ani jednego błędu w całym show!)",
        options: ["absolutely", "very", "quite", "rather"],
        correct: "absolutely",
        explanation: "'Absolutely perfect' bo 'perfect' jest absolute! Nie może być 'very perfect' - perfect znaczy without flaws, can't be degrees. Zero mistakes confirms absolute perfection. Używasz 'absolutely' dla reinforcing już absolute standard. To celebruje flawless execution - complete mastery bez any errors."
      },
      {
        id: "grad_13",
        question: "The soup is _____ hot - let it cool down before eating or you'll burn mouth.",
        translation: "(Zupa jest dość gorąca - pozwól jej ostygnąć przed jedzeniem albo poparzysz usta)",
        options: ["fairly", "absolutely", "completely", "totally"],
        correct: "fairly",
        explanation: "'Fairly hot' dla moderate warning! 'Fairly' znaczy 'reasonably/moderately' - nie extreme ale notable. 'Hot' jest gradable więc 'fairly' shows moderate level. To practical caution - nie 'boiling' (extreme) ale wystarczająco hot żeby be careful. Moderate intensifier dla moderate concern."
      },
      {
        id: "grad_14",
        question: "I'm _____ starving - I could eat a whole large pizza by myself right now!",
        translation: "(Jestem absolutnie głodny - mógłbym zjeść całą dużą pizzę sam teraz!)",
        options: ["absolutely", "very", "quite", "rather"],
        correct: "absolutely",
        explanation: "'Absolutely starving' bo 'starving' jest extreme! 'Starving' = extremely hungry (nie gradable), więc 'absolutely'. To hyperbolic - nie literally starving to death ale feels desperately hungry. Extreme hunger adjective + absolute intensifier creates dramatic effect showing intensity of need."
      },
      {
        id: "grad_15",
        question: "The news was _____ fascinating - I couldn't stop reading the entire article till end.",
        translation: "(Wiadomość była całkowicie fascynująca - nie mogłem przestać czytać całego artykułu do końca)",
        options: ["absolutely", "very", "quite", "rather"],
        correct: "absolutely",
        explanation: "'Absolutely fascinating' bo 'fascinating' jest extreme adjective! 'Fascinating' = very interesting, więc używasz 'absolutely'. Captivated attention od początku do końca pokazuje intensity. Extreme interest adjectives (fascinating/thrilling/terrifying) biorą absolute intensifiers dla proper emphasis on impact."
      }
    ]
  },

  inversion_emphasis: {
    name: "Inwersja dla emfazy",
    description: "Never have I, Rarely does he...",
    icon: Sparkle,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "inv_1",
        question: "Never _____ I seen such a beautiful sunset in my entire life before tonight!",
        translation: "(Nigdy nie widziałem tak pięknego zachodu słońca w całym moim życiu przed dziś wieczorem!)",
        options: ["have", "I have", "did I", "I did"],
        correct: "have",
        explanation: "Po negatywnych słowach (never/rarely/seldom) używaj inwersji! 'Never have I seen' odwraca podmiot i pomocnik. To bardziej dramatyczne niż 'I have never seen' - fronting 'never' adds emphasis. Używane dla podkreślania exceptional experiences - inwersja makes statement bardziej memorable i impactful."
      },
      {
        id: "inv_2",
        question: "Rarely _____ she complain about anything - she's always positive and cheerful.",
        translation: "(Rzadko narzeka na cokolwiek - zawsze jest pozytywna i wesoła)",
        options: ["does", "she does", "is", "she is"],
        correct: "does",
        explanation: "'Rarely does she' z present simple! Negatywne adverb (rarely) na początku wymaga inwersji. 'Does she complain' nie 'she does complain'. To komplementuje jej character - highlighting how unusual complaining jest dla niej. Inwersja podkreśla exceptional nature jej positive attitude."
      },
      {
        id: "inv_3",
        question: "Only after finishing all my work _____ I go to bed and finally rest properly.",
        translation: "(Dopiero po skończeniu całej mojej pracy idę spać i w końcu odpoczywam porządnie)",
        options: ["did", "I did", "do", "I do"],
        correct: "did",
        explanation: "'Only after' na początku wymaga inwersji! 'Only after finishing did I go' - odwraca podmiot i pomocnik. To o discipline i work ethic - responsibility przed pleasure. 'Only' phrases triggering inversion podkreślają sequence i priorities. Inwersja adds formality i emphasis na strict order."
      },
      {
        id: "inv_4",
        question: "Seldom _____ we have such wonderful weather in this rainy city during winter!",
        translation: "(Rzadko mamy tak wspaniałą pogodę w tym deszczowym mieście podczas zimy!)",
        options: ["do", "we do", "are", "we are"],
        correct: "do",
        explanation: "'Seldom do we have' odwraca dla podkreślenia rzadkości! 'Seldom' (rarely) triggering inversion makes rarity bardziej emphatic. Normal: 'We seldom have'. Inverted: 'Seldom do we have'. To celebruje rare nice weather - inwersja adds excitement do unusual good conditions."
      },
      {
        id: "inv_5",
        question: "Not only _____ she speak French, but she also speaks Italian and Spanish fluently!",
        translation: "(Nie tylko mówi po francusku, ale też mówi po włosku i hiszpańsku płynnie!)",
        options: ["does", "she does", "is", "she is"],
        correct: "does",
        explanation: "'Not only does she' requires inversion po 'not only'! 'Not only... but also...' z inwersją po first part. To o impressive multiple skills - listing languages dramatically. Inwersja after 'not only' adds emphasis do first achievement before revealing even more. Builds anticipation."
      },
      {
        id: "inv_6",
        question: "Little _____ I know that this decision would change my entire life completely!",
        translation: "(Mało wiedziałem że ta decyzja zmieni moje całe życie całkowicie!)",
        options: ["did", "I did", "do", "I do"],
        correct: "did",
        explanation: "'Little did I know' dla retrospective surprise! 'Little' (negatywne znaczenie) wymaga inwersji. To storytelling device - looking back na moment nie rozumiejąc jego significance. Inwersja adds dramatic effect - didn't realize then ale now widać jak consequential było. Used for plot twists w personal narratives."
      },
      {
        id: "inv_7",
        question: "Under no circumstances _____ you share this confidential information with anyone else.",
        translation: "(W żadnych okolicznościach nie powinieneś dzielić się tą poufną informacją z kimkolwiek innym)",
        options: ["should", "you should", "must", "you must"],
        correct: "should",
        explanation: "'Under no circumstances should you' to very strong prohibition! Negatywna phrase na początku + inwersja creates emphatic warning. To formal i serious - absolutny zakaz. Inwersja makes restriction sound bardziej authoritative i non-negotiable. Używane dla critical rules i security."
      },
      {
        id: "inv_8",
        question: "Not until I arrived home _____ I realize I had left my wallet at restaurant.",
        translation: "(Dopiero kiedy przyjechałem do domu zdałem sobie sprawę że zostawiłem portfel w restauracji)",
        options: ["did", "I did", "have", "I have"],
        correct: "did",
        explanation: "'Not until' triggering inversion pokazuje delayed realization! 'Not until I arrived did I realize' - odkrycie came późno. Inwersja emphasizes timing - highlighting moment of discovery. To frustrating delayed awareness - problem noticed tylko po dotarciu home, too late dla easy fix."
      },
      {
        id: "inv_9",
        question: "Hardly _____ I walked through the door when the phone started ringing loudly!",
        translation: "(Ledwo przekroczyłem próg kiedy telefon zaczął dzwonić głośno!)",
        options: ["had", "I had", "did", "I did"],
        correct: "had",
        explanation: "'Hardly had I walked when' dla immediate sequence! 'Hardly' (barely) + past perfect + 'when' shows actions były prawie simultaneous. Inwersja adds drama do timing - ledwo jedna akcja zakończona, druga zaczyna. To o bad timing lub comedy of errors - no rest moment między events."
      },
      {
        id: "inv_10",
        question: "No sooner _____ we sat down to eat than someone knocked on door interrupting.",
        translation: "(Ledwo usiedliśmy do jedzenia kiedy ktoś zapukał do drzwi przerywając)",
        options: ["had", "we had", "did", "we did"],
        correct: "had",
        explanation: "'No sooner had we sat... than' dla frustrating timing! Fixed structure: no sooner + past perfect + than. Inwersja po 'no sooner' emphasizes immediacy of interruption. Ledwo zaczęliście (barely started) już interruption (immediately disturbed). To Murphy's law - things happen w worst possible moments."
      },
      {
        id: "inv_11",
        question: "Only when I saw the test results _____ I understand how much I had improved.",
        translation: "(Dopiero kiedy zobaczyłem wyniki testu zrozumiałem jak bardzo się poprawiłem)",
        options: ["did", "I did", "have", "I have"],
        correct: "did",
        explanation: "'Only when' requires inversion dla dramatic realization! 'Only when I saw did I understand' - moment of seeing brought understanding. To o delayed appreciation - nie wiedziałeś extent of progress until confronted z proof. Inwersja emphasizes revelation moment - seeing results was eye-opener."
      },
      {
        id: "inv_12",
        question: "At no time _____ she mention that she was feeling unwell during meeting.",
        translation: "(W żadnym momencie nie wspomniała że czuje się niedobrze podczas spotkania)",
        options: ["did", "she did", "has", "she has"],
        correct: "did",
        explanation: "'At no time did she' dla emphatic negation! Negatywna phrase (at no time = never) + inwersja strengthens statement. Absolutnie nie wspomniała - complete silence o condition. To o admiring stoicism lub criticizing lack of communication - zależnie od context, hiding discomfort może być brave lub problematic."
      },
      {
        id: "inv_13",
        question: "Never again _____ I make the same stupid mistake - I've learned my lesson well!",
        translation: "(Nigdy więcej nie popełnię tego samego głupiego błędu - nauczyłem się lekcji dobrze!)",
        options: ["will", "I will", "do", "I do"],
        correct: "will",
        explanation: "'Never again will I' to resolute promise! Future inwersja po 'never again' shows determination. To o learning from mistakes - past error taught lesson, ensuring different future behavior. Inwersja makes vow sound bardziej serious i committed - not casual promise ale firm resolution."
      },
      {
        id: "inv_14",
        question: "Only by working together _____ we solve this complex difficult problem successfully.",
        translation: "(Tylko pracując razem rozwiążemy ten złożony trudny problem pomyślnie)",
        options: ["can", "we can", "will", "we will"],
        correct: "can",
        explanation: "'Only by working together can we' podkreśla necessity of collaboration! 'Only by' + method + inwersja emphasizes że to JEDYNY sposób. Cooperation jest essential - individual effort insufficient. Inwersja makes message sound bardziej persuasive - rallying people do teamwork przez emphasizing its importance."
      },
      {
        id: "inv_15",
        question: "Not once _____ he apologize for being late to all our important meetings regularly.",
        translation: "(Ani razu nie przeprosił za spóźnianie się na wszystkie nasze ważne spotkania regularnie)",
        options: ["did", "he did", "has", "he has"],
        correct: "did",
        explanation: "'Not once did he apologize' dla criticism of behavior! Negatywna phrase (not once = never) + inwersja emphasizes complete lack of apologies. Zero times - absolute failure w courtesy. To narzekanie na rudeness - consistent lateness bez remorse pokazuje disrespect. Inwersja strengthens complaint."
      }
    ]
  },

  nominal_clauses: {
    name: "Klauzule rzeczownikowe",
    description: "That he's late, whether to go, what she said",
    icon: Crown,
    color: "from-amber-500 to-yellow-600",
    level: "advanced",
    questions: [
      {
        id: "nom_1",
        question: "_____ he's always late really annoys me and everyone in the office too.",
        translation: "(To że zawsze się spóźnia naprawdę mnie denerwuje i wszystkich w biurze też)",
        options: ["That", "What", "Which", "Whether"],
        correct: "That",
        explanation: "'That he's late' działa jako podmiot zdania! Całe 'that clause' = rzeczownik będący podmiotem 'annoys'. To o używaniu zdania jak rzeczownika. Możesz też opuścić 'that' czasem ale z 'that' jest jaśniejsze. Klauzula opisuje co exactly annoys - jego chronic lateness."
      },
      {
        id: "nom_2",
        question: "_____ she said at the meeting surprised everyone present in the room.",
        translation: "(To co powiedziała na spotkaniu zaskoczyło wszystkich obecnych w pokoju)",
        options: ["What", "That", "Which", "Who"],
        correct: "What",
        explanation: "'What she said' to noun clause jako podmiot! 'What' = the thing that - nie potrzebujesz antecedent. 'What she said' działa jak jeden noun będący podmiotem 'surprised'. To o shocking statements - jej words były unexpected, causing collective surprise. 'What' integrates całe unknown statement jako subject."
      },
      {
        id: "nom_3",
        question: "The question is _____ we should leave now or wait for better weather tomorrow.",
        translation: "(Pytanie brzmi czy powinniśmy wyjechać teraz czy czekać na lepszą pogodę jutro)",
        options: ["whether", "that", "what", "which"],
        correct: "whether",
        explanation: "'Whether we should' po 'is' tworzy nominal clause! 'Whether... or...' przedstawia alternatywy jako subject complement. To o deliberation - ważąc opcje jako równe possibilities. 'Whether' formal dla presenting choices jako things do considering. Question itself jest about the choice between options."
      },
      {
        id: "nom_4",
        question: "I don't believe _____ he told us about his amazing past experiences abroad.",
        translation: "(Nie wierzę w to co nam powiedział o swoich niesamowitych przeszłych doświadczeniach za granicą)",
        options: ["what", "that", "which", "who"],
        correct: "what",
        explanation: "'What he told us' jest object of 'believe'! Nie wierzysz w content jego stories. 'What' = the things that - całe unknown content as noun object. To skepticism - jego claims sound too extraordinary żeby be true. 'What' packages all dubious statements jako single object of disbelief."
      },
      {
        id: "nom_5",
        question: "_____ we need to discuss is the budget for next year's expansion project.",
        translation: "(To co musimy omówić to budżet na przyszłoroczny projekt ekspansji)",
        options: ["What", "That", "Which", "Whether"],
        correct: "What",
        explanation: "'What we need to discuss' jako subject zdania! Całe 'what clause' = rzeczownik będący podmiotem 'is'. To meeting agenda statement - identifying priority topic. 'What' collects all discussion needs into subject position. Formal business communication structure."
      },
      {
        id: "inv_6",
        question: "It's clear _____ she doesn't want to participate in this group activity with us.",
        translation: "(Jest jasne że nie chce uczestniczyć w tej grupowej aktywności z nami)",
        options: ["that", "what", "which", "whether"],
        correct: "that",
        explanation: "'It's clear that she doesn't want' używa 'it' jako placeholder! Real subject jest 'that she doesn't want' - odkładane do końca dla easier sentence flow. 'It' jako dummy subject jest bardzo common pattern. To o obvious reluctance - her unwillingness jest visible dla all."
      },
      {
        id: "nom_7",
        question: "The fact _____ he lied about his qualifications is very serious and concerning.",
        translation: "(Fakt że skłamał o swoich kwalifikacjach jest bardzo poważny i niepokojący)",
        options: ["that", "what", "which", "whether"],
        correct: "that",
        explanation: "'The fact that he lied' używa 'that clause' jako apposition! 'That clause' definiuje który fact. 'The fact' + 'that' construction jest very formal - używane dla serious statements. To o breach of trust - lying o credentials jest major integrity issue w professional context."
      },
      {
        id: "nom_8",
        question: "I'm not sure _____ to believe what he says anymore after catching him lying.",
        translation: "(Nie jestem pewien czy wierzyć w to co mówi już po złapaniu go na kłamstwie)",
        options: ["whether", "that", "what", "which"],
        correct: "whether",
        explanation: "'Whether to believe' używa infinitive! 'Whether + infinitive' dla internal deliberation. To o eroded trust - past dishonesty makes you question current statements. 'Whether to' structure dla decisions you're contemplating - still deciding course of action."
      },
      {
        id: "nom_9",
        question: "_____ matters most is your health and happiness, not money or material possessions.",
        translation: "(To co ma największe znaczenie to twoje zdrowie i szczęście, nie pieniądze lub materialne dobra)",
        options: ["What", "That", "Which", "Whether"],
        correct: "What",
        explanation: "'What matters most' jako subject! 'What' clause = rzeczownik będący podmiotem 'is'. To life wisdom - prioritizing wellbeing over wealth. 'What matters' collects all important things into subject showing priorities. Philosophy statement o values - co truly counts w życiu."
      },
      {
        id: "nom_10",
        question: "The problem is _____ nobody wants to take responsibility for the serious mistake made.",
        translation: "(Problem polega na tym że nikt nie chce wziąć odpowiedzialności za poważny popełniony błąd)",
        options: ["that", "what", "which", "whether"],
        correct: "that",
        explanation: "'The problem is that nobody wants' identifies issue! 'That clause' jako subject complement po 'is'. To workplace dysfunction - everyone avoiding accountability. 'That' clause clearly states exactly what problem consists of - lack of ownership."
      },
      {
        id: "nom_11",
        question: "_____ you decide to do, make sure you think it through very carefully first.",
        translation: "(Cokolwiek zdecydujesz zrobić, upewnij się że przemyślisz to bardzo starannie najpierw)",
        options: ["Whatever", "That", "Which", "Whether"],
        correct: "Whatever",
        explanation: "'Whatever you decide' jako object zdania! 'Whatever' = anything that - covers all possibilities jako one noun. To supportive advice - respecting their choice while urging caution. 'Whatever' shows openness do their decision podczas emphasizing importance of careful consideration."
      },
      {
        id: "nom_12",
        question: "I doubt _____ he will come to the party tonight - he's been avoiding us lately.",
        translation: "(Wątpię żeby przyszedł na imprezę dziś wieczorem - unika nas ostatnio)",
        options: ["whether", "that", "what", "which"],
        correct: "whether",
        explanation: "'I doubt whether he will come' wyraża uncertainty! 'Whether' po 'doubt' dla questioned outcomes. Możesz też 'that' lub 'if' ale 'whether' jest most formal. To observation of avoidance pattern - past behavior predicts likely absence. Skepticism bazowana na recent interactions."
      },
      {
        id: "nom_13",
        question: "_____ we finish this project on time depends entirely on getting more resources soon.",
        translation: "(To czy skończymy ten projekt na czas zależy całkowicie od otrzymania więcej zasobów wkrótce)",
        options: ["Whether", "That", "What", "Which"],
        correct: "Whether",
        explanation: "'Whether we finish' jako subject pokazuje conditional outcome! Całe pytanie (finish czy nie) jest podmiotem 'depends'. To o contingency - success isn't certain, depends on conditions. 'Whether' jako subject używane dla showing outcomes are uncertain, tied do other factors."
      },
      {
        id: "nom_14",
        question: "The idea _____ we could travel anywhere in the world excites me greatly!",
        translation: "(Pomysł że moglibyśmy podróżować gdziekolwiek na świecie ekscytuje mnie bardzo!)",
        options: ["that", "what", "which", "whether"],
        correct: "that",
        explanation: "'The idea that we could travel' używa appositive clause! 'That clause' defines która idea exactly. 'That' łączy abstract noun (idea) z jego specific content. To o exciting possibility - thought of unlimited travel creates enthusiasm. Appositive structure elaborates on vague noun."
      },
      {
        id: "nom_15",
        question: "I appreciate _____ you've done to help me with this difficult situation recently.",
        translation: "(Doceniam to co zrobiłeś żeby mi pomóc z tą trudną sytuacją ostatnio)",
        options: ["what", "that", "which", "whether"],
        correct: "what",
        explanation: "'Appreciate what you've done' używa 'what' jako object! 'What' = all the things that - całe unknown help as object of appreciation. To expressing gratitude - acknowledging someone's efforts. 'What' encompasses all helpful actions without needing żeby list them individually - global thanks."
      }
    ]
  },

  fronting_emphasis: {
    name: "Fronting dla emfazy",
    description: "This I cannot accept, Happy I am not",
    icon: Sparkle,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "front_1",
        question: "This kind of behavior I simply _____ accept in my classroom environment.",
        translation: "(Tego rodzaju zachowania po prostu nie mogę zaakceptować w mojej klasie)",
        options: ["cannot", "can't not", "not can", "don't can"],
        correct: "cannot",
        explanation: "Fronting obiektu dla emfazy! 'This behavior' przeniesione na początek emphasizes CZEGO nie akceptujesz. Normalnie: 'I cannot accept this behavior'. Fronted: 'This behavior I cannot accept'. To o stawianiu granic - highlighting specific unacceptable behavior przez putting it first. Strong teacher statement."
      },
      {
        id: "front_2",
        question: "Happy I am _____, but I could be happier if some things changed around here.",
        translation: "(Szczęśliwy nie jestem, ale mógłbym być szczęśliwszy gdyby niektóre rzeczy się zmieniły)",
        options: ["not", "no", "never", "neither"],
        correct: "not",
        explanation: "Fronting przymiotnika dla contrast! 'Happy' na początku podkreśla emotional state będący discussed. 'Happy I am not' jest bardzo literary i emphatic. Normalnie: 'I am not happy'. To sophisticated negation - fronting adds weight do emotional statement. Używane dla profound declarations o feelings."
      },
      {
        id: "front_3",
        question: "Your advice I _____ always treasure and remember throughout my entire life.",
        translation: "(Twoją radę zawsze będę cenić i pamiętać przez całe moje życie)",
        options: ["will", "am", "have", "do"],
        correct: "will",
        explanation: "Fronting 'your advice' dla emphasizing co będziesz treasure! Object first highlights CZEGO statement dotyczy. 'Your advice I will treasure' brzmi bardziej formal i sincere niż normal order. To heartfelt gratitude - fronting adds solemnity do promise. Used w farewells lub thank yous."
      },
      {
        id: "front_4",
        question: "Delicious the food _____ be, but the service here is absolutely terrible unfortunately.",
        translation: "(Pyszne jedzenie może być, ale obsługa jest absolutnie okropna niestety)",
        options: ["may", "can", "must", "should"],
        correct: "may",
        explanation: "Fronting adjective z concession! 'Delicious the food may be' = acknowledging positive przed criticizing. Very formal literary structure. Admitting quality (food) while complaining o flaw (service). To balanced review - fair acknowledgment of strengths nie prevents criticism weaknesses. Sophisticated contrast structure."
      },
      {
        id: "front_5",
        question: "Money I don't _____, but happiness and good health I have in abundance.",
        translation: "(Pieniędzy nie mam, ale szczęścia i dobrego zdrowia mam pod dostatkiem)",
        options: ["have", "got", "own", "possess"],
        correct: "have",
        explanation: "Fronting dla kontrastu między brakiem i posiadaniem! 'Money' first (czego brakuje) potem 'happiness' (co masz). To life philosophy - prioritizing non-material wealth. Fronting both objects creates balanced parallel structure - highlighting różne rodzaje richness. Materialne vs spiritual abundance."
      },
      {
        id: "front_6",
        question: "Understand I _____ not why she made that strange decision without consulting anyone.",
        translation: "(Nie rozumiem czemu podjęła tę dziwną decyzję bez konsultacji z kimkolwiek)",
        options: ["do", "am", "have", "can"],
        correct: "do",
        explanation: "Fronting 'understand' dla emphatic confusion! Very formal, archaic structure. 'Understand I do not' = silne podkreślenie lack of comprehension. Shakespearean-style inversion. To literary device - rarely used w modern speech ale appears w formal writing dla maximum dramatic effect emphasizing complete bafflement."
      },
      {
        id: "front_7",
        question: "Gone _____ the days when we could play outside safely without any worries.",
        translation: "(Minęły dni kiedy mogliśmy bawić się na zewnątrz bezpiecznie bez żadnych zmartwień)",
        options: ["are", "is", "have", "were"],
        correct: "are",
        explanation: "'Gone are the days' to nostalgic fronting! Past participle 'gone' na początku dla emphasizing disappearance. Normalnie: 'The days are gone'. Fronted: 'Gone are the days'. To melancholic reflection - better times have passed. Used dla expressing nostalgia o safer/simpler past periods."
      },
      {
        id: "front_8",
        question: "Such _____ his reputation that everyone wanted to work with him on projects.",
        translation: "(Taka była jego reputacja że wszyscy chcieli z nim pracować nad projektami)",
        options: ["was", "is", "were", "has"],
        correct: "was",
        explanation: "Fronting 'such' dla emphasizing extent! 'Such was his reputation' = jego reputation was so great. Very formal structure. To celebruje exceptional standing - reputation so strong że everyone sought collaboration. Fronting 'such' makes statement sound bardziej impressive i formal."
      },
      {
        id: "front_9",
        question: "Little _____ she know that her life was about to change forever dramatically.",
        translation: "(Mało wiedziała że jej życie miało się zmienić na zawsze dramatycznie)",
        options: ["did", "does", "was", "is"],
        correct: "did",
        explanation: "'Little did she know' dla dramatic irony! Negatywne 'little' + inwersja creates suspense. To storytelling device - narrator wie co będzie ale character doesn't. Używane dla building tension - audience aware of coming change że protagonist nie anticipates. Creates anticipation."
      },
      {
        id: "front_10",
        question: "Beautiful _____ the scenery is, I still prefer living in the busy exciting city.",
        translation: "(Piękna krajobraz jest, wciąż wolę mieszkać w ruchliwym ekscytującym mieście)",
        options: ["though", "although", "despite", "however"],
        correct: "though",
        explanation: "Fronting adjective z concessive 'though'! 'Beautiful though it is' = acknowledging beauty while preferring alternative. Very literary structure. Concedes positive quality przed stating opposite preference. To o personal priorities - appreciating nature nie zmienia urban preference. Sophisticated way of presenting contrasting views."
      },
      {
        id: "front_11",
        question: "In the garden _____ a beautiful old oak tree that provides shade all summer.",
        translation: "(W ogrodzie stoi piękne stare drzewo dębowe które zapewnia cień całe lato)",
        options: ["stands", "stand", "is standing", "are standing"],
        correct: "stands",
        explanation: "Fronting location dla scene setting! 'In the garden' first ustawia gdzie, potem 'stands' describes what's there. To descriptive writing technique - leading z location creates mental image. Inversion po place phrases jest common w literary descriptions - paints vivid picture przez unusual word order."
      },
      {
        id: "front_12",
        question: "Interesting _____ the book was, I found the movie adaptation much more engaging overall.",
        translation: "(Interesująca książka była, film adaptacja była znacznie bardziej wciągająca ogólnie)",
        options: ["though", "although", "despite", "however"],
        correct: "though",
        explanation: "Fronting z 'though' dla balanced comparison! Admits book quality (interesting) while preferring film. 'Interesting though it was' = concession structure. To nuanced opinion - not dismissing book ale honestly preferring adaptation. Fronting allows graceful acknowledgment przed stating true preference."
      },
      {
        id: "front_13",
        question: "Not a word _____ she say during the entire long three-hour meeting today.",
        translation: "(Ani słowa nie powiedziała podczas całego długiego trzygodzinnego spotkania dzisiaj)",
        options: ["did", "does", "was", "is"],
        correct: "did",
        explanation: "'Not a word did she say' dla emphasizing complete silence! Negatywne phrase fronted + inwersja. Absolute silence przez całe spotkanie - zero participation. To może być about shyness, disagreement, lub strategic silence. Fronting emphasizes totality of non-communication."
      },
      {
        id: "front_14",
        question: "Only then _____ I realize the full extent of the damage that had been done.",
        translation: "(Dopiero wtedy zdałem sobie sprawę z pełnego zakresu szkód które zostały wyrządzone)",
        options: ["did", "do", "was", "am"],
        correct: "did",
        explanation: "'Only then did I realize' dla delayed comprehension! 'Only then' fronted wymaga inwersji. Realization came późno - w specific moment finally understood. To o gradual awareness - full impact not immediately apparent. 'Only then' pinpoints exact moment of complete understanding arriving."
      },
      {
        id: "front_15",
        question: "So tired _____ I that I fell asleep immediately the moment my head hit pillow.",
        translation: "(Tak zmęczony byłem że zasnąłem natychmiast w momencie gdy moja głowa dotknęła poduszki)",
        options: ["was", "am", "were", "be"],
        correct: "was",
        explanation: "'So tired was I that' fronts adjective dla extreme emphasis! 'So + adjective' na początku + inwersja dla dramatic effect. Extreme exhaustion level emphasizing instant sleep. Very literary - used dla creating vivid descriptions. Shows intensity through unusual structure - normal order wouldn't capture same dramatic effect."
      }
    ]
  },

  reduced_relative_clauses: {
    name: "Skrócone klauzule względne",
    description: "The man wearing, the book published in...",
    icon: Crown,
    color: "from-green-500 to-emerald-600",
    level: "advanced",
    questions: [
      {
        id: "red_rel_1",
        question: "The woman _____ the red dress is my colleague from the marketing department.",
        translation: "(Kobieta nosząca czerwoną sukienkę jest moją koleżanką z działu marketingu)",
        options: ["wearing", "who wearing", "wears", "who wears"],
        correct: "wearing",
        explanation: "Skrócona relative clause używa participle! 'Wearing' zastępuje 'who is wearing' - bardziej concise. To efficient identification - describing person przez co nosi. Active participle dla ongoing action. Używane stale w descriptions - skracając relatives makes speech flow smoother bez losing clarity."
      },
      {
        id: "red_rel_2",
        question: "The book _____ in 1960 is now considered a literary classic masterpiece.",
        translation: "(Książka opublikowana w 1960 jest teraz uważana za klasyczny literacki arcydzieło)",
        options: ["published", "publishing", "which published", "that published"],
        correct: "published",
        explanation: "'Published in 1960' to reduced passive relative! Skraca 'which was published' do simple past participle. Książka ZOSTAŁA opublikowana (passive). To historical context - date publication adds credibility do classic status. Reduction makes description crisp - dato + status efficiently conveyed."
      },
      {
        id: "red_rel_3",
        question: "People _____ in glass houses shouldn't throw stones at others around them.",
        translation: "(Ludzie mieszkający w szklanych domach nie powinni rzucać kamieniami w innych wokół nich)",
        options: ["living", "who living", "live", "who live"],
        correct: "living",
        explanation: "'Living in glass houses' to metaphorical participle phrase! Reduces 'who live' do 'living'. To famous saying o hypocrisy - vulnerable people nie powinni attack others. Participle maintains flow of proverb. Używane dla life advice o nie criticizing when you have same flaws."
      },
      {
        id: "red_rel_4",
        question: "The first person _____ the finish line wins the grand prize and trophy!",
        translation: "(Pierwsza osoba docierająca do linii mety wygrywa główną nagrodę i trofeum!)",
        options: ["to reach", "reaching", "who reach", "reaches"],
        correct: "to reach",
        explanation: "'To reach' po superlatives i ordinals! 'The first person to reach' używa infinitive nie participle. Ordinals (first/last) i superlatives preferują 'to' infinitive w reductions. To race rule - identifying winner criterion clearly. Infinitive suggests purpose lub future completion."
      },
      {
        id: "red_rel_5",
        question: "The letter _____ yesterday still hasn't been delivered to the correct address yet.",
        translation: "(List wysłany wczoraj wciąż nie został dostarczony na poprawny adres jeszcze)",
        options: ["sent", "sending", "which sent", "that sent"],
        correct: "sent",
        explanation: "'Sent yesterday' reduces 'which was sent'! Past participle dla passive actions. List ZOSTAŁ wysłany (passive). Date 'yesterday' adds temporal context do participle. To complaint o delivery delays - był wysłany ale nie przyszedł, creating anxiety. Reduction maintains clarity podczas shortening."
      },
      {
        id: "red_rel_6",
        question: "Anyone _____ late to the meeting will miss the important initial announcements.",
        translation: "(Każdy przybywający późno na spotkanie przegapi ważne początkowe ogłoszenia)",
        options: ["arriving", "who arriving", "arrives", "who arrives"],
        correct: "arriving",
        explanation: "'Arriving late' to conditional participle! Reduces 'who arrives' do 'arriving'. To warning - lateness has consequences (missed info). Participle describes condition triggering outcome. Używane dla rules i policies - if you arrive late (participle), then consequence follows."
      },
      {
        id: "red_rel_7",
        question: "The students _____ for the exam looked nervous and stressed in hallway.",
        translation: "(Studenci czekający na egzamin wyglądali nerwowo i zestresowani w korytarzu)",
        options: ["waiting", "who waiting", "wait", "who wait"],
        correct: "waiting",
        explanation: "'Waiting for the exam' describes grupa przez action! Reduces 'who are waiting' do simple participle. To scene description - painting picture of pre-exam anxiety. Active participle dla ongoing state. Skrócenie makes description flow better - describing action concurrent z main verb (looked)."
      },
      {
        id: "red_rel_8",
        question: "The only solution _____ is to start over completely from the very beginning.",
        translation: "(Jedyne rozwiązanie pozostające to zacząć od nowa całkowicie od samego początku)",
        options: ["remaining", "remained", "which remaining", "that remaining"],
        correct: "remaining",
        explanation: "'Remaining' jako adjective-like participle! Reduces 'which remains' lub 'that is remaining'. Pokazuje co is left jako option. To o exhausting alternatives - tried everything, only one choice survives. Participle efficiently describes current available state bez full relative clause."
      },
      {
        id: "red_rel_9",
        question: "The problems _____ by the new policy are more serious than we anticipated originally.",
        translation: "(Problemy spowodowane przez nową politykę są poważniejsze niż pierwotnie przewidywaliśmy)",
        options: ["caused", "causing", "which caused", "that caused"],
        correct: "caused",
        explanation: "'Caused by the policy' to passive participle showing source! Problemy ZOSTAŁY spowodowane (passive). Reduces 'which were caused' do simple participle. To identifies culprit - nowa policy jest source of difficulties. Efficiently attributes problems do their origin bez lengthy clause."
      },
      {
        id: "red_rel_10",
        question: "She was the last person _____ the burning building alive and safely.",
        translation: "(Była ostatnią osobą opuszczającą płonący budynek żywą i bezpiecznie)",
        options: ["to leave", "leaving", "who leave", "leaves"],
        correct: "to leave",
        explanation: "'The last person to leave' używa infinitive! Po 'last' preferuj 'to' infinitive. To dramatic rescue scenario - była final evacuee. Infinitive suggests completion of series - everyone else already out. Last ordinal + infinitive dla describing końcowy element w sequence."
      },
      {
        id: "red_rel_11",
        question: "The data _____ in the research study supports our hypothesis completely and clearly.",
        translation: "(Dane zebrane w badaniu naukowym wspierają naszą hipotezę całkowicie i wyraźnie)",
        options: ["collected", "collecting", "which collected", "that collected"],
        correct: "collected",
        explanation: "'Collected in the study' to passive reduction! Data ZOSTAŁA zebrana (passive participle). Reduces 'which was collected'. To academic writing - efficiently describing data source. Past participle shows completed research phase. Concise scientific communication style."
      },
      {
        id: "red_rel_12",
        question: "The noise _____ from the construction site is really disturbing my concentration daily.",
        translation: "(Hałas dochodzący z placu budowy naprawdę przeszkadza mojej koncentracji codziennie)",
        options: ["coming", "came", "which coming", "that coming"],
        correct: "coming",
        explanation: "'Coming from the site' shows origin active! Active participle dla movement/source. Reduces 'which is coming'. To complaint o persistent disturbance - ongoing construction noise affecting work. Present participle dla continuous annoying condition - happening now i będzie continue."
      },
      {
        id: "red_rel_13",
        question: "The instructions _____ with the product are very confusing and poorly written.",
        translation: "(Instrukcje dostarczone z produktem są bardzo mylące i słabo napisane)",
        options: ["provided", "providing", "which provided", "that provided"],
        correct: "provided",
        explanation: "'Provided with the product' to passive participle! Instrukcje ZOSTAŁY dostarczone (included). Reduces 'which are provided'. To consumer complaint - poor documentation quality. Past participle dla standard inclusion - what comes packaged z item. Criticism of manufacturer's documentation."
      },
      {
        id: "red_rel_14",
        question: "Any student _____ help should ask the teacher immediately without hesitation.",
        translation: "(Każdy student potrzebujący pomocy powinien zapytać nauczyciela natychmiast bez wahania)",
        options: ["needing", "needed", "who needing", "needs"],
        correct: "needing",
        explanation: "'Needing help' identifies grupa requiring assistance! Reduces 'who needs'. Active participle dla present condition. To classroom policy - encouraging students żeby seek help. Participle defines qualifying condition - if you need (participle), then ask (should action)."
      },
      {
        id: "red_rel_15",
        question: "The car _____ outside belongs to my new neighbor who just moved in.",
        translation: "(Samochód zaparkowany na zewnątrz należy do mojego nowego sąsiada który właśnie się wprowadził)",
        options: ["parked", "parking", "which parked", "that parked"],
        correct: "parked",
        explanation: "'Parked outside' identifies który samochód! Passive participle - car ZOSTAŁ zaparkowany. Reduces 'which is parked'. To o identifying ownership - describing location dla pointing out specific vehicle. Past participle dla completed positioning state - where it currently sits."
      }
    ]
  }
};

export default part18Categories;