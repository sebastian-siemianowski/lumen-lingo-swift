/**
 * POLISH → ENGLISH GRAMMAR - PART 23  
 * 4 categories, 15 questions each - Subtle distinctions
 */

import { FileText, Repeat, Building, Gauge } from "lucide-react";

export const part23Categories = {
  abstract_concrete_articles: {
    name: "Rzeczowniki abstrakcyjne vs konkretne z artykułami",
    description: "Love vs the love, life vs a life",
    icon: FileText,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "abs_con_1",
        question: "_____ love is the most powerful emotion in the world, stronger than anything.",
        translation: "(Miłość jest najpotężniejszą emocją na świecie, silniejszą niż cokolwiek)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero article dla abstract concept 'love' generally! Mówiąc о miłości jako koncepcji (not specific instance). Universal truth о emocjach. Abstract nouns без артикля когда discussing concept itself. 'Love' (general idea) różne od 'the love' (specific instance). Philosophical general statement."
      },
      {
        id: "abs_con_2",
        question: "_____ love between a mother and child is incredibly special and unique bond.",
        translation: "(Miłość między matką a dzieckiem jest niesamowicie specjalnym i unikalnym związkiem)",
        options: ["The", "-", "A", "An"],
        correct: "The",
        explanation: "'The love between' dla specific type! Defined BY relationship (mother-child) więc 'the'. Restricted context делает concrete. Not love generally але specific kind. 'The' когда abstract noun restricted by phrase - becomes defined specific thing."
      },
      {
        id: "abs_con_3",
        question: "He lived _____ interesting life full of adventures and amazing experiences worldwide.",
        translation: "(Żył ciekawym życiem pełnym przygód i niesamowitych doświadczeń na świecie)",
        options: ["an", "-", "the", "one"],
        correct: "an",
        explanation: "'An interesting life' używa article z adjective! 'Life' generally без артикля але з przymiotnikiem gets 'a/an'. Describes kind of life - interesting type. Abstract noun становится countable когда qualified. 'An' categorizes life type - turning philosophical concept into described entity."
      },
      {
        id: "abs_con_4",
        question: "_____ happiness cannot be bought with money or material possessions at all.",
        translation: "(Szczęścia nie można kupić za pieniądze lub materialne dobra wcale)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero dla 'happiness' as abstract concept! General truth о nature of joy. Universal principle - happiness transcends money. Abstract emotional states без артикля в general statements. Philosophical truth о что money can't buy - concept-level discussion."
      },
      {
        id: "abs_con_5",
        question: "She found _____ happiness in simple everyday things like morning coffee and walks.",
        translation: "(Znalazła szczęście w prostych codziennych rzeczach jak poranna kawa i spacery)",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Zero dla 'found happiness' - discovering emotion! 'Find' + abstract emotion обычно без артикля. Personal discovery of joy. 'Happiness' here as experiential state не countable thing. Finding emotional fulfillment - abstract achievement expressed без article."
      },
      {
        id: "abs_con_6",
        question: "_____ life is too short to waste on negativity and unimportant conflicts daily.",
        translation: "(Życie jest zbyt krótkie żeby marnować na negatywność i nieważne konflikty codziennie)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero для 'life' as existence concept! Philosophical statement о życiu generally. Universal wisdom. Abstract noun без артикля discussing fundamental nature. 'Life' (existence itself) різне від 'a life' (someone's biography). Conceptual level - general truth."
      },
      {
        id: "abs_con_7",
        question: "He has _____ deep love for classical music and attends concerts regularly often.",
        translation: "(Ma głęboką miłość do muzyki klasycznej i regularnie często uczęszcza na koncerty)",
        options: ["a", "-", "the", "an"],
        correct: "a",
        explanation: "'A deep love' używa article з adjective! 'Love' modified by 'deep' becomes countable instance. Describes type/intensity of emotion. Abstract + adjective становится describable entity. 'A love' (specific passion) різне від 'love' (concept). Qualification makes abstract concrete."
      },
      {
        id: "abs_con_8",
        question: "_____ death is a natural part of life that everyone must face eventually someday.",
        translation: "(Śmierć jest naturalną częścią życia którą wszyscy muszą w końcu kiedyś stawić czoła)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero для 'death' as universal concept! Philosophical truth о mortality. Abstract inevitable process без артикля. Discussing death generally (not specific death). Universal human condition - concept-level statement о life's nature."
      },
      {
        id: "abs_con_9",
        question: "She showed _____ great patience with the difficult students during the long lesson.",
        translation: "(Pokazała wielką cierpliwość z trudnymi uczniami podczas długiej lekcji)",
        options: ["-", "a", "the", "an"],
        correct: "-",
        explanation: "Zero для 'showed patience' - displaying quality! 'Show/demonstrate' + abstract quality обычно без артикля. Exhibiting virtue. 'Patience' as demonstrated characteristic не counted thing. Behavioral display - quality manifested expressed без article."
      },
      {
        id: "abs_con_10",
        question: "_____ time heals all wounds, both physical and emotional ones eventually.",
        translation: "(Czas leczy wszystkie rany, zarówno fizyczne jak i emocjonalne w końcu)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero для 'time' as abstract force! Philosophical saying о healing power. Time as concept (not measured duration). Proverb-like wisdom - time's therapeutic nature. Abstract force без артикля в universal truths - discussing time's nature generally."
      },
      {
        id: "abs_con_11",
        question: "He lived _____ life of luxury and comfort without any financial worries ever.",
        translation: "(Żył życiem luksusu i komfortu bez żadnych finansowych zmartwień kiedykolwiek)",
        options: ["a", "-", "the", "an"],
        correct: "a",
        explanation: "'A life of luxury' описує type! 'Life' + 'of' + description becomes categorized lifestyle. Specific kind of existence. 'A life of' pattern turns abstract into describable category. Wealth lifestyle characterization - 'a' introduces type of life lived."
      },
      {
        id: "abs_con_12",
        question: "_____ knowledge is power - the more you learn, the stronger you become mentally.",
        translation: "(Wiedza jest potęgą - im więcej się uczysz, tym silniejszy stajesz się mentalnie)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero для famous proverb! 'Knowledge is power' - established saying без артикля. Abstract concepts в axioms. Universal wisdom о learning's value. Proverbs maintain zero articles - formulaic expression unchanged."
      },
      {
        id: "abs_con_13",
        question: "She needs _____ courage to speak up in front of large audiences publicly.",
        translation: "(Potrzebuje odwagi żeby przemówić przed dużymi audiencjami publicznie)",
        options: ["-", "a", "the", "an"],
        correct: "-",
        explanation: "Zero для 'needs courage' - requiring quality! Abstract virtue needed без артикля. Courage as necessary attribute не countable thing. 'Need/require' + abstract quality standard pattern. Character requirement expressed - what's необходимо within."
      },
      {
        id: "abs_con_14",
        question: "_____ beauty is in the eye of the beholder - everyone has different preferences.",
        translation: "(Piękno jest w oku patrzącego - każdy ma różne preferencje)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero для philosophical proverb! 'Beauty is subjective' - famous saying. Abstract aesthetic concept discussed generally. Proverb maintains traditional form без артикля. Universal truth о subjective nature - concept-level wisdom statement."
      },
      {
        id: "abs_con_15",
        question: "He felt _____ sense of pride when his daughter graduated from university successfully.",
        translation: "(Czuł poczucie dumy kiedy jego córka ukończyła uniwersytet pomyślnie)",
        options: ["a", "-", "the", "an"],
        correct: "a",
        explanation: "'A sense of pride' dla experienced emotion! 'Sense of' + abstract делает instance of feeling. Specific moment's emotion. Abstract становится experiential event когда 'sense of' used. Parent joy characterized - 'a' introduces particular emotional experience at moment."
      }
    ]
  },

  causative_have_get_advanced: {
    name: "Causative 'have/get' - zaawansowane",
    description: "Have it done vs get it done - niuanse",
    icon: Repeat,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "caus_adv_1",
        question: "I need to _____ my hair _____ before the wedding ceremony next weekend.",
        translation: "(Muszę obciąć włosy przed ceremonią ślubną w przyszły weekend)",
        options: ["have / cut", "have / cutted", "get / cutting", "make / cut"],
        correct: "have / cut",
        explanation: "'Have my hair cut' = someone cuts it FOR you! Causative: arrange dla someone else do action. Hairdresser cuts, не you. To salon service - professional styling przed ważnym eventem. 'Have' + object + past participle dla услуг professionals provide."
      },
      {
        id: "caus_adv_2",
        question: "She finally _____ her old computer _____ by a professional technician yesterday.",
        translation: "(W końcu naprawiła swój stary komputer przez profesjonalnego technika wczoraj)",
        options: ["got / fixed", "got / fixing", "get / fixed", "get / fix"],
        correct: "got / fixed",
        explanation: "'Got it fixed' = caused repair to happen! 'Get' + object + past participle dla arranging actions. Technician fixed, она arranged. To о delayed maintenance - finally getting necessary work done. 'Got' suggests effort в obtaining service - more active than passive 'had'."
      },
      {
        id: "caus_adv_3",
        question: "We should _____ the house _____ before putting it on the market for sale.",
        translation: "(Powinniśmy pomalować dom przed wystawieniem go na sprzedaż)",
        options: ["have / painted", "have / painting", "get / painting", "make / paint"],
        correct: "have / painted",
        explanation: "'Have the house painted' = hire painters! Causative dla home improvement. Professionals do painting, вы arrange. To real estate prep - making property attractive. 'Have' + object + past participle standard для hiring work done before sale."
      },
      {
        id: "caus_adv_4",
        question: "I _____ my car _____ every 10,000 kilometers for maintenance and safety.",
        translation: "(Serwisуję mój samochód co 10,000 kilometrów dla utrzymania i bezpieczeństwa)",
        options: ["have / serviced", "have / service", "get / servicing", "make / serviced"],
        correct: "have / serviced",
        explanation: "'Have it serviced' для regular professional maintenance! Mechanic services, вы schedule. Routine care pattern - preventive maintenance. To responsible ownership - regular professional attention. 'Have' + serviced standard для recurring professional vehicle care."
      },
      {
        id: "caus_adv_5",
        question: "Can you _____ this package _____ to my office address by tomorrow morning?",
        translation: "(Czy możesz wysłać tę paczkę na adres mojego biura do jutra rano?)",
        options: ["get / delivered", "get / deliver", "have / delivering", "make / delivered"],
        correct: "get / delivered",
        explanation: "'Get package delivered' = arrange delivery! 'Get' + object + past participle dla causing service. Courier delivers, вы arrange. To urgent shipping request - timing critical. 'Get' emphasizes obtaining result - active pursuit of delivery completion by deadline."
      },
      {
        id: "caus_adv_6",
        question: "They _____ their house _____ into the property last night while sleeping!",
        translation: "(Włamano im się do domu wczoraj w nocy podczas snu!)",
        options: ["had / broken", "had / break", "got / breaking", "made / broken"],
        correct: "had / broken",
        explanation: "'Had house broken into' для involuntary causative! Не wanted но happened TO them (victims). Negative causative - unwanted event experienced. To crime reporting - victimization. 'Had' shows passive reception неприятного - suffered action без desire."
      },
      {
        id: "caus_adv_7",
        question: "I'm going to _____ my eyes _____ next week - I've been having vision problems.",
        translation: "(Zbadam oczy w przyszłym tygodniu - mam problemy ze wzrokiem)",
        options: ["have / tested", "have / test", "get / testing", "make / test"],
        correct: "have / tested",
        explanation: "'Have eyes tested' = get professional examination! Optometrist tests, вы schedule appointment. Medical checkup causative. To health maintenance - addressing symptoms. 'Have' + tested standard для medical evaluations - arranging professional assessment."
      },
      {
        id: "caus_adv_8",
        question: "She _____ her phone screen _____ after dropping it on concrete pavement.",
        translation: "(Wymieniła ekran telefonu po upuszczeniu go na betonowy chodnik)",
        options: ["got / replaced", "got / replace", "had / replacing", "made / replace"],
        correct: "got / replaced",
        explanation: "'Got screen replaced' для repair service! Technician replaces, она pays. Accident damage fix. To smartphone repair - common mishap. 'Got' suggests effort в finding service - actively pursuing fix after damage occurred."
      },
      {
        id: "caus_adv_9",
        question: "We need to _____ the contract _____ by a professional lawyer before signing it.",
        translation: "(Musimy przejrzeć kontrakt przez profesjonalnego prawnika przed podpisaniem go)",
        options: ["have / reviewed", "have / review", "get / reviewing", "make / reviewed"],
        correct: "have / reviewed",
        explanation: "'Have contract reviewed' = obtain legal opinion! Lawyer reviews, вы commission. Due diligence - professional evaluation před commitment. To smart business - expert assessment before binding agreement. 'Have' + reviewed dla seeking professional analysis."
      },
      {
        id: "caus_adv_10",
        question: "I finally _____ my tooth _____ out at the dentist after months of pain.",
        translation: "(W końcu wyrwałem ząb u dentysty po miesiącach bólu)",
        options: ["had / taken", "had / take", "got / taking", "made / take"],
        correct: "had / taken",
        explanation: "'Had tooth taken out' для dental procedure! Dentist extracts, вы undergo. Medical necessity - pain resolution. To relief после prolonged suffering. 'Had' для medical procedures performed ON you - receiving treatment rather than self-action."
      },
      {
        id: "caus_adv_11",
        question: "They're _____ their wedding photos _____ professionally in a nice studio downtown.",
        translation: "(Robią sobie zdjęcia ślubne profesjonalnie w ładnym studio w centrum)",
        options: ["having / taken", "having / take", "getting / taking", "making / taken"],
        correct: "having / taken",
        explanation: "'Having photos taken' = photographer shoots! Professional service - posing while photographer works. Wedding preparation ritual. To о hiring expertise для special occasion. 'Having' + taken standard для photography services - subjects of photos, not photographers."
      },
      {
        id: "caus_adv_12",
        question: "She _____ her watch _____ last week, but it's broken again already unfortunately!",
        translation: "(Naprawiła swój zegarek w zeszłym tygodniu, ale znowu jest zepsuty już niestety!)",
        options: ["had / repaired", "had / repair", "got / repairing", "made / repair"],
        correct: "had / repaired",
        explanation: "'Had watch repaired' ale unsuccessful long-term! Watchmaker fixed але problem recurred. Frustrating - paid для repair що didn't last. To consumer complaint - poor service quality. Repair failed держаться - wasted money на ineffective fix."
      },
      {
        id: "caus_adv_13",
        question: "You should _____ your resume _____ by a career expert before applying widely.",
        translation: "(Powinieneś przejrzeć swoje CV przez eksperta karierowego przed aplikowaniem szeroko)",
        options: ["have / reviewed", "have / review", "get / reviewing", "make / reviewed"],
        correct: "have / reviewed",
        explanation: "'Have resume reviewed' = get professional feedback! Career coach evaluates, вы receive input. Job search optimization. To smart preparation - expert eyes улучшают document. 'Have' + reviewed для seeking professional opinion before important submissions."
      },
      {
        id: "caus_adv_14",
        question: "I _____ my blood pressure _____ regularly every few months at clinic.",
        translation: "(Badam moje ciśnienie krwi regularnie co kilka miesięcy w klinice)",
        options: ["have / checked", "have / check", "get / checking", "make / check"],
        correct: "have / checked",
        explanation: "'Have blood pressure checked' для routine health monitoring! Nurse checks, вы maintain schedule. Preventive healthcare. To responsible health management - regular screening. 'Have' + checked standard для medical monitoring - ongoing professional assessment habit."
      },
      {
        id: "caus_adv_15",
        question: "They _____ their old furniture _____ when they moved to smaller apartment.",
        translation: "(Wyrzucili swoje stare meble kiedy przeprowadzili się do mniejszego apartamentu)",
        options: ["had / removed", "had / remove", "got / removing", "made / remove"],
        correct: "had / removed",
        explanation: "'Had furniture removed' = hired removal! Movers took away, они arranged. Downsizing necessity - no room для old pieces. To moving logistics - professional removal service. 'Had' + removed для disposing через hired help during relocation."
      }
    ]
  },

  such_variations_results: {
    name: "Wariacje 'such' w zdaniach skutkowych",
    description: "Such a, such an, such... that patterns",
    icon: Building,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "such_var_1",
        question: "It was _____ a wonderful surprise that I couldn't stop smiling all day long!",
        translation: "(To była taka wspaniała niespodzianka że nie mogłem przestać uśmiechać się cały dzień!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such a' + adjective + singular countable! 'Such a wonderful surprise' - 'such' modifies całą noun phrase. Extreme positivity causing lasting joy. To о overwhelmingly good unexpected event. 'Such' з rzeczownikami, 'so' з przymiotnikami alone - kluczowa różnica."
      },
      {
        id: "such_var_2",
        question: "She has _____ an amazing talent for languages that she learns them incredibly fast!",
        translation: "(Ma taką niesamowitą zdolność do języków że uczy się ich niesamowicie szybko!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such an' przed vowel sound! 'An amazing talent' - 'such an' + adjective + noun. Exceptional ability producing rapid learning. To о linguistic gift - natural aptitude. 'Such an' для singular nouns starting з vowels - phonetic rule within 'such' structures."
      },
      {
        id: "such_var_3",
        question: "They're _____ kind people that everyone in neighborhood loves them dearly.",
        translation: "(Są tak miłymi ludźmi że wszyscy w sąsiedztwie ich uwielbią serdecznie)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such kind people' z plural! 'Such' + adjective + plural noun. No 'a/an' z plural. Exceptional kindness earning universal affection. To community beloved residents - character creating popularity. 'Such' modifies plural noun phrase showing collective quality."
      },
      {
        id: "such_var_4",
        question: "It was _____ beautiful weather that we decided to eat lunch outside today.",
        translation: "(Była taka piękna pogoda że zdecydowaliśmy zjeść lunch na zewnątrz dzisiaj)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such beautiful weather' - uncountable noun! 'Such' + adjective + uncountable без 'a'. Perfect conditions inspiring outdoor dining. To spontaneous plan change - weather so nice couldn't waste indoors. 'Such' з uncountables (weather/music/advice) без артикля."
      },
      {
        id: "such_var_5",
        question: "He made _____ a silly mistake that he felt embarrassed in front of everyone.",
        translation: "(Popełnił tak głupi błąd że poczuł się zawstydzony przed wszystkimi)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such a silly mistake' causing embarrassment! Error type (silly) emphasized через 'such a'. Foolish nature creating shame. To о avoidable errors - simplicity делает worse. 'Such a' categorizes mistake type - highlighting особенно embarrassing nature."
      },
      {
        id: "such_var_6",
        question: "There was _____ confusion about the schedule that nobody knew where to go!",
        translation: "(Było takie zamieszanie о harmonogramie że nikt nie wiedział dokąd iść!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such confusion' - uncountable chaos! 'Such' + uncountable noun describing disorder level. Total organizational failure - nobody informed properly. To event mismanagement - lack of clear communication. 'Such' emphasizes degree of organizational chaos produced."
      },
      {
        id: "such_var_7",
        question: "They showed _____ enthusiasm for the project that it inspired everyone else too!",
        translation: "(Pokazali takie zapalenie dla projektu że zainspirowało to wszystkich innych też!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such enthusiasm' = uncountable high energy! 'Such' + uncountable emotion. Infectious excitement spreading. To о motivating team - their energy elevating others. 'Such' з emotion nouns creating inspirational ripple effect through group."
      },
      {
        id: "such_var_8",
        question: "It's _____ a shame that you can't join us for dinner tonight at restaurant!",
        translation: "(To taka szkoda że nie możesz dołączyć do nas na kolację dziś wieczorem w restauracji!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such a shame' = strong regret expression! Fixed emotional phrase. 'Such a' + emotion noun для emphatic disappointment. To sincere wish они could come - genuine sadness о absence. Idiomatic 'such a shame/pity' standard для expressing regret."
      },
      {
        id: "such_var_9",
        question: "She gave _____ good advice that I followed it exactly and succeeded!",
        translation: "(Dała tak dobrą radę że zastosowałem się dokładnie i odniosłem sukces!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such good advice' - uncountable wisdom! 'Such' + adjective + uncountable. Counsel quality leading до positive outcome. To grateful acknowledgment - guidance worked. 'Such' з 'advice' (uncountable) emphasizing quality що produced success."
      },
      {
        id: "such_var_10",
        question: "He has _____ expensive tastes that he can barely afford his lifestyle honestly.",
        translation: "(Ma takie drogie gusta że ledwo stać go na jego styl życia szczerze)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such expensive tastes' - plural preferences! 'Such' + adjective + plural. Champagne tastes на beer budget. To о financial strain - preferences exceeding means. Living beyond affordable - 'such' highlights mismatch между desires і resources."
      },
      {
        id: "such_var_11",
        question: "There's _____ strong evidence against him that conviction seems almost certain now.",
        translation: "(Jest tak mocny dowód przeciw niemu że skazanie wydaje się prawie pewne teraz)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such strong evidence' - uncountable proof! 'Such' + adjective + uncountable. Overwhelming proof predicting verdict. To legal assessment - case strength. 'Such' з 'evidence' (uncountable) showing quantity і quality sufficient для likely conviction."
      },
      {
        id: "such_var_12",
        question: "It was _____ a relief to finally finish that difficult stressful project!",
        translation: "(To była taka ulga w końcu skończyć ten trudny stresujący projekt!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such a relief' = huge emotional release! 'Such a' + feeling noun. Burden lifted creating strong positive emotion. To completion joy - stress ending brings profound relief. Idiomatic 'such a relief' standard для expressing major emotional release після struggle."
      },
      {
        id: "such_var_13",
        question: "He showed _____ disrespect to his teacher that he was sent to principal immediately.",
        translation: "(Pokazał taki brak szacunku dla swojego nauczyciela że został wysłany do dyrektora natychmiast)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such disrespect' - uncountable rudeness! 'Such' + uncountable negative behavior. Extreme impoliteness requiring punishment. To discipline scenario - behavior crossing line. 'Such' emphasizes severity что triggered immediate administrative response - beyond acceptable."
      },
      {
        id: "such_var_14",
        question: "There were _____ interesting books in the library that I didn't know which to choose!",
        translation: "(Było tak wiele interesujących książek w bibliotece że nie wiedziałem którą wybrać!)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such interesting books' - plural abundance! 'Such' + adjective + plural. Overwhelming choice - too many good options. To paradox of choice - abundance creating indecision. 'Such' з plurals showing quantity і quality both excessive - delightful problem."
      },
      {
        id: "such_var_15",
        question: "She received _____ praise for her performance that she felt truly appreciated finally.",
        translation: "(Otrzymała takie pochwały za swój występ że poczuła się naprawdę doceniona w końcu)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such praise' - uncountable acclaim! 'Such' + uncountable positive feedback. Abundant recognition creating validation. To artist fulfillment - work acknowledged generously. 'Such' з 'praise' (uncountable) showing volume і warmth of appreciation received."
      }
    ]
  },

  intensifiers_downtoners: {
    name: "Intensyfikatory i osłabiacze",
    description: "Absolutely, fairly, rather, quite, pretty",
    icon: Gauge,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "intens_1",
        question: "I'm _____ sure I locked the door, but let me check once more to be certain.",
        translation: "(Jestem całkiem pewien że zamknąłem drzwi, ale pozwól sprawdzić jeszcze raz żeby być pewnym)",
        options: ["fairly", "absolutely", "completely", "totally"],
        correct: "fairly",
        explanation: "'Fairly sure' = reasonably confident, не absolute! 'Fairly' ослабляет - moderate certainty. Not 100% но probable. To expressing doubt while leaning да - qualified confidence. 'Fairly' создает space для checking - confident enough але prudent verification wise."
      },
      {
        id: "intens_2",
        question: "The exam was _____ difficult - even the best students struggled with several questions.",
        translation: "(Egzamin był dość trudny - nawet najlepsi studenci mieli problem z kilkoma pytaniami)",
        options: ["rather", "absolutely", "completely", "totally"],
        correct: "rather",
        explanation: "'Rather difficult' усиливает negatives! 'Rather' stronger than 'quite' - emphasizing difficulty был notable. Top students struggled proves challenge level. To validating students' concerns - acknowledging test was genuinely tough. 'Rather' adds sympathy - wasn't imagination, was actually hard."
      },
      {
        id: "intens_3",
        question: "This coffee is _____ hot - you should let it cool down before drinking it.",
        translation: "(Ta kawa jest dość gorąca - powinieneś pozwolić jej ostygnąć przed piciem)",
        options: ["pretty", "absolutely", "completely", "totally"],
        correct: "pretty",
        explanation: "'Pretty hot' = довольно горячо (informal)! 'Pretty' casual intensifier - moderately strong. Warning level - careful but не extreme. To friendly caution - suggesting wait but не alarming. 'Pretty' + adjective common в разговорном - softer than 'very'."
      },
      {
        id: "intens_4",
        question: "I'm _____ exhausted after running the full marathon race this morning early.",
        translation: "(Jestem całkowicie wyczerpany po przebiegnięciu całego maratonu dziś rano wcześnie)",
        options: ["absolutely", "fairly", "rather", "quite"],
        correct: "absolutely",
        explanation: "'Absolutely exhausted' максимально усиливает! 'Exhausted' уже extreme więc 'absolutely' appropriate. Total depletion - marathon aftermath. To о complete physical drain. Extreme adjectives (exhausted/freezing/starving) demand absolute intensifiers - matching intensity levels."
      },
      {
        id: "intens_5",
        question: "The movie was _____ boring - I almost fell asleep several times during it.",
        translation: "(Film był dość nudny - prawie zasnąłem kilka razy podczas niego)",
        options: ["rather", "absolutely", "completely", "totally"],
        correct: "rather",
        explanation: "'Rather boring' negative усиление! 'Rather' подчеркивает unpleasant quality - было notably dull. Almost sleeping proves serious tedium. To honest negative review - 'rather' softens criticism slightly но makes clear it was genuinely boring experience."
      },
      {
        id: "intens_6",
        question: "She's _____ good at math, though not the absolute best in entire class.",
        translation: "(Jest całkiem dobra w matematyce, chociaż nie najlepsza absolutnie w całej klasie)",
        options: ["quite", "absolutely", "completely", "totally"],
        correct: "quite",
        explanation: "'Quite good' = достаточно хорошо! 'Quite' з gradables means 'moderately/reasonably'. Good но не outstanding. To balanced assessment - competent but recognizing others better. 'Quite' creates moderate praise - positive но realistic, avoiding exaggeration."
      },
      {
        id: "intens_7",
        question: "The instructions are _____ clear - anyone can follow them without any problems.",
        translation: "(Instrukcje są krystalicznie jasne - każdy może je śledzić bez żadnych problemów)",
        options: ["perfectly", "fairly", "rather", "pretty"],
        correct: "perfectly",
        explanation: "'Perfectly clear' = максимальная ясность! 'Perfectly' absolute intensifier для completeness. Zero ambiguity - ultimate clarity achieved. To praising excellent documentation - accessibility для all. 'Perfectly' emphasizes ideal state - couldn't be clearer."
      },
      {
        id: "intens_8",
        question: "I'm _____ certain he's lying about his qualifications and work experience claims.",
        translation: "(Jestem całkowicie pewien że kłamie о swoich kwalifikacjach i twierdzeniach о doświadczeniu)",
        options: ["absolutely", "fairly", "quite", "rather"],
        correct: "absolutely",
        explanation: "'Absolutely certain' = zero doubt! Maximum confidence в assessment. Evidence overwhelmingly suggests dishonesty. To serious accusation - complete conviction о deception. 'Absolutely' eliminates wriggle room - not suspicion але certainty based на facts."
      },
      {
        id: "intens_9",
        question: "The presentation was _____ interesting, better than I initially expected honestly.",
        translation: "(Prezentacja była dość interesująca, lepsza niż początkowo oczekiwałem szczerze)",
        options: ["quite", "absolutely", "completely", "totally"],
        correct: "quite",
        explanation: "'Quite interesting' = pleasantly moderate! 'Quite' показывает positive surprise - better than feared. Exceeded low expectations. To relieved assessment - wasn't dreading але turned out engaging. 'Quite' qualified praise - good но not amazing, satisfactory positive."
      },
      {
        id: "intens_10",
        question: "This puzzle is _____ impossible - I've been trying for hours without success!",
        translation: "(Ta łamigłówka jest całkowicie niemożliwa - próbuję od godzin bez sukcesu!)",
        options: ["absolutely", "fairly", "rather", "quite"],
        correct: "absolutely",
        explanation: "'Absolutely impossible' максимальна frustration! 'Impossible' extreme więc 'absolutely'. Hours failing proves extreme difficulty. To exasperated complaint - hyperbole о challenge level. May not literally impossible але feels that way - 'absolutely' expresses defeated feeling."
      },
      {
        id: "intens_11",
        question: "She was _____ upset when she heard the disappointing news about rejection.",
        translation: "(Była dość zdenerwowana kiedy usłyszała rozczarowujące wiadomości о odrzuceniu)",
        options: ["rather", "absolutely", "completely", "totally"],
        correct: "rather",
        explanation: "'Rather upset' усиливает negative emotion! 'Rather' emphasizes distress was significant. Rejection news hurting. To empathetic observation - acknowledging legitimate emotional pain. 'Rather' validates feelings - wasn't overreaction, genuinely hurtful."
      },
      {
        id: "intens_12",
        question: "The hotel room was _____ clean and well-maintained throughout our entire stay.",
        translation: "(Pokój hotelowy był idealnie czysty i dobrze utrzymany przez cały nasz pobyt)",
        options: ["spotlessly", "fairly", "rather", "quite"],
        correct: "spotlessly",
        explanation: "'Spotlessly clean' = perfekcyjna czystość! 'Spotlessly' специальный intensifier для 'clean'. Immaculate condition. To praising hotel standards - exceptional housekeeping. Special intensifiers exist для specific adjectives - 'spotlessly clean', 'brand new', 'crystal clear'. Fixed collocations."
      },
      {
        id: "intens_13",
        question: "I'm _____ tired, but I can still help you if you really need assistance.",
        translation: "(Jestem dość zmęczony, ale wciąż mogę ci pomóc jeśli naprawdę potrzebujesz pomocy)",
        options: ["pretty", "absolutely", "completely", "totally"],
        correct: "pretty",
        explanation: "'Pretty tired' casual moderate усиление! 'Pretty' informal dla 'довольно'. Tired но не exhausted - can still function. To qualified offer - acknowledging limitation ale maintaining availability. 'Pretty' creates honest но helpful response - tired але willing."
      },
      {
        id: "intens_14",
        question: "The explanation was _____ confusing - I didn't understand most of it at all.",
        translation: "(Wyjaśnienie było dość mylące - nie zrozumiałem większości wcale)",
        options: ["rather", "absolutely", "perfectly", "totally"],
        correct: "rather",
        explanation: "'Rather confusing' emphasizes negative quality! Clarity lacking significantly. 'Rather' strengthens complaint - wasn't slightly unclear але notably confusing. To feedback о poor communication - most content incomprehensible. 'Rather' validates struggle - confusion justified."
      },
      {
        id: "intens_15",
        question: "She's _____ brilliant at solving complex mathematical problems quickly and accurately.",
        translation: "(Jest absolutnie genialna w rozwiązywaniu złożonych problemów matematycznych szybko i dokładnie)",
        options: ["absolutely", "fairly", "rather", "quite"],
        correct: "absolutely",
        explanation: "'Absolutely brilliant' максимальная похвала! 'Brilliant' уже strong więc 'absolutely'. Exceptional mathematical talent. To high compliment - emphasizing extraordinary ability. Speed + accuracy = brilliance confirmed. 'Absolutely' leaves no doubt - outstanding skill unquestionable."
      }
    ]
  }
};

export default part23Categories;