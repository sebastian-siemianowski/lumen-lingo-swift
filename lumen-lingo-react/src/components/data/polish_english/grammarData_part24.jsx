/**
 * POLISH → ENGLISH GRAMMAR - PART 24
 * 4 categories, 15 questions each - Expert precision
 */

import { Sparkles, Hourglass, Maximize, BookmarkPlus } from "lucide-react";

export const part24Categories = {
  fronting_emphasis_advanced: {
    name: "Fronting zaawansowany dla emfazy",
    description: "Never have I, Rarely does, Little did...",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "front_adv_1",
        question: "Seldom _____ we encounter such dedicated and hardworking students in our classes.",
        translation: "(Rzadko spotykamy tak oddanych i pracowitych studentów w naszych klasach)",
        options: ["do", "we do", "are", "we are"],
        correct: "do",
        explanation: "'Seldom do we' odwraca для emphasizing rarity! Negatywne 'seldom' на початку requires inwersję. Exceptional students uncommon. To teacher appreciation - highlighting unusual excellence. Inwersja добавляє weight до observation - these students stand out dramatically przez their rarity."
      },
      {
        id: "front_adv_2",
        question: "Not only _____ he speak perfect English, he also writes poetry beautifully!",
        translation: "(Nie tylko mówi perfekcyjnie po angielsku, także pisze poezję pięknie!)",
        options: ["does", "he does", "is", "he is"],
        correct: "does",
        explanation: "'Not only does he' створює build-up! Inwersja після 'not only' prepares для 'but also'. First skill impressive, second даже more so. To о multitalented person - each revelation increases admiration. Structure builds excitement - fronting first achievement перед revealing additional."
      },
      {
        id: "front_adv_3",
        question: "Only when the results came _____ we realize how much we had actually improved!",
        translation: "(Dopiero kiedy wyniki przyszły zdaliśmy sobie sprawę jak bardzo faktycznie się poprawiliśmy!)",
        options: ["did", "we did", "have", "we have"],
        correct: "did",
        éxplanation: "'Only when' requires inwersję! 'Only when results came did we realize' - moment of seeing triggered understanding. Delayed recognition - didn't know progress until confronted з proof. To pleasant surprise - improvement больше than self-assessed. Inwersja підкреслює revelation timing."
      },
      {
        id: "front_adv_4",
        question: "Little _____ she know that this meeting would change her career path completely!",
        translation: "(Mało wiedziała że to spotkanie zmieni jej ścieżkę karierową całkowicie!)",
        options: ["did", "she did", "was", "she was"],
        correct: "did",
        explanation: "'Little did she know' створює dramatic irony! Не знала significance в moment але narrator/audience знає. Storytelling device. To career pivot story - innocent meeting became turning point. Inwersja додає suspense - підкреслює how unaware була of life-changing nature."
      },
      {
        id: "front_adv_5",
        question: "Hardly _____ I finished speaking when everyone started asking difficult questions!",
        translation: "(Ledwo skończyłem mówić kiedy wszyscy zaczęli zadawać trudne pytania!)",
        options: ["had", "I had", "did", "I did"],
        correct: "had",
        explanation: "'Hardly had I finished when' показує immediate sequence! Past perfect + inwersja після 'hardly'. Barely completed перед bombardment. To о overwhelming response - no breathing room. Timing emphasis - instant transition від presenting до questioning."
      },
      {
        id: "front_adv_6",
        question: "Never in my life _____ I seen such breathtaking natural beauty anywhere before!",
        translation: "(Nigdy w życiu nie widziałem takiego zapierającego dech naturalnego piękna gdziekolwiek wcześniej!)",
        options: ["have", "I have", "did", "I did"],
        correct: "have",
        explanation: "'Never in my life have I' максимальна емфаза! 'Never' + time phrase + inwersja. Lifetime unprecedented experience. To expressing awe - nothing comparable в entire existence. Multiple emphasis elements: never + life + inversion = extraordinary statement."
      },
      {
        id: "front_adv_7",
        question: "Under no circumstances _____ you reveal this confidential sensitive information!",
        translation: "(W żadnych okolicznościach nie powinieneś ujawniać tej poufnej wrażliwej informacji!)",
        options: ["should", "you should", "must", "you must"],
        correct: "should",
        explanation: "'Under no circumstances should' categorical prohibition! Negatywna phrase + inwersja створює authoritative command. Absolute secrecy requirement. To security warning - zero tolerance. Inwersja робить rule sound non-negotiable - emphatic structure reinforces seriousness."
      },
      {
        id: "front_adv_8",
        question: "Not until midnight _____ they finally finish all the urgent work for deadline.",
        translation: "(Dopiero о północy w końcu skończyli całą pilną pracę na termin)",
        options: ["did", "they did", "have", "they have"],
        correct: "did",
        explanation: "'Not until midnight did they' підкреслює late completion! Inwersja після 'not until' emphasizes timing. Працювали до very late hour. To о dedication або poor planning - working до extreme hours. Late hour emphasized через inversion - unusual timing noteworthy."
      },
      {
        id: "front_adv_9",
        question: "Only by working together as a team _____ we achieve our ambitious goals successfully.",
        translation: "(Tylko pracując razem jako zespół osiągniemy nasze ambitne cele pomyślnie)",
        options: ["can", "we can", "will", "we will"],
        correct: "can",
        explanation: "'Only by teamwork can we' підкреслює necessity! 'Only by' + method + inwersja shows to ЕДИНСТВЕННЫЙ way. Cooperation essential - individuals insufficient. To rallying call - emphasizing collaboration criticality. Inwersja робить message persuasive - structure reflects importance."
      },
      {
        id: "front_adv_10",
        question: "Rarely _____ such generous offers come along - you should accept it immediately!",
        translation: "(Rzadko takie hojne oferty się pojawiają - powinieneś zaakceptować natychmiast!)",
        options: ["do", "does", "are", "is"],
        correct: "do",
        explanation: "'Rarely do offers come' emphasizes opportunity rarity! Inwersja після 'rarely' підкреслює unusual nature. Exceptional chance - don't hesitate. To urgent advice - scarcity creates value. Rarity emphasized через fronting + inversion - compelling acceptance."
      },
      {
        id: "front_adv_11",
        question: "Not a single person _____ complain about the new flexible working policy introduced.",
        translation: "(Ani jedna osoba nie narzekała на nową elastyczną politykę pracy wprowadzoną)",
        options: ["did", "does", "was", "is"],
        correct: "did",
        explanation: "'Not a single person did complain' підкреслює unanimous approval! Complete absence нареканий. Zero complaints = universal satisfaction. To policy success indicator - nobody unhappy. Absolute descriptor + inwersja emphasizes totality - highlighting complete absence of dissent."
      },
      {
        id: "front_adv_12",
        question: "So tired _____ she that she fell asleep immediately during the boring lecture.",
        translation: "(Tak zmęczona była że zasnęła natychmiast podczas nudnego wykładu)",
        options: ["was", "she was", "is", "she is"],
        correct: "was",
        explanation: "'So tired was she' fronts adjective dramatically! 'So' + adjective + inwersja створює literary effect. Extreme exhaustion level. To explaining sleeping - wasn't rudeness але physical necessity. Dramatic structure emphasizes intensity що made sleep unavoidable."
      },
      {
        id: "front_adv_13",
        question: "At no point during interview _____ she mention her impressive past achievements.",
        translation: "(W żadnym momencie podczas wywiadu nie wspomniała о swoich imponujących przeszłych osiągnięciach)",
        options: ["did", "she did", "has", "she has"],
        correct: "did",
        explanation: "'At no point did she mention' підкреслює complete omission! Negatywna time phrase + inwersja. Never brought up - surprising modesty. To о humble candidate - didn't self-promote despite credentials. Omission noteworthy - fronting emphasizes unusual restraint."
      },
      {
        id: "front_adv_14",
        question: "No sooner _____ we arrived at beach than it started raining heavily unfortunately!",
        translation: "(Ledwo przybyliśmy na plażę kiedy zaczęło mocno padać niestety!)",
        options: ["had", "we had", "did", "we did"],
        correct: "had",
        explanation: "'No sooner had we arrived than' perfect bad timing! Fixed structure: no sooner + past perfect + than. Immediate unfortunate coincidence. To Murphy's law - worst timing. Barely arrived перед rain ruined plans. Structure підкреслює frustrating proximity events."
      },
      {
        id: "front_adv_15",
        question: "Only in this way _____ you fully understand the complex problem we're facing now.",
        translation: "(Tylko w ten sposób w pełni zrozumiesz złożony problem z którym się borykamy teraz)",
        options: ["can", "you can", "will", "you will"],
        correct: "can",
        explanation: "'Only in this way can you' підкреслює method exclusivity! 'Only' phrase + inwersja shows this IS the path. No alternatives work. To pedagogical insistence - specific approach necessary для comprehension. Inwersja makes methodology sound essential - emphasizing uniqueness of effective approach."
      }
    ]
  },

  conditional_perfect_continuous: {
    name: "Conditional Perfect Continuous",
    description: "Would have been doing - niezrealizowane ciągłe akcje",
    icon: Hourglass,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "cond_perf_cont_1",
        question: "If I hadn't stopped him, he _____ still _____ about his problems all day!",
        translation: "(Gdybym go nie powstrzymał, wciąż by narzekał о swoich problemach cały dzień!)",
        options: ["would / be complaining", "would / have complained", "will / be complaining", "would / complain"],
        correct: "would / be complaining",
        explanation: "'Would be complaining' показує ciągłą action которая была бы in progress! Hypothetical ongoing state. Stopped (reality) prevented continued complaining (avoided scenario). To о interrupting annoying behavior - without intervention, would STILL be going. Continuous emphasizes duration що была б endless."
      },
      {
        id: "cond_perf_cont_2",
        question: "Without the GPS, we _____ still _____ around lost right now in circles!",
        translation: "(Bez GPS wciąż byśmy jeździli zagubieni właśnie teraz w kółko!)",
        options: ["would / be driving", "would / have driven", "will / be driving", "would / drive"],
        correct: "would / be driving",
        explanation: "'Would be driving' hypothetical present continuous! GPS saved (reality) від continued wandering (avoided scenario). Still lost NOW if no GPS. To grateful для technology - prevented prolonged confusion. Present hypothetical shows что was бы happening at this very moment."
      },
      {
        id: "cond_perf_cont_3",
        question: "If she had accepted the job offer, she _____ _____ there for five years now already!",
        translation: "(Gdyby przyjęła ofertę pracy, pracowałaby tam już od pięciu lat teraz!)",
        options: ["would / have been working", "would / be working", "will / have been working", "would / work"],
        correct: "would / have been working",
        explanation: "'Would have been working' mixed hypothetical! Past decision (didn't accept) affecting hypothetical present duration. If accepted THEN, would BE working NOW for 5 years accumulated. To career path reflection - alternative timeline visualization. Perfect continuous для accumulated hypothetical tenure."
      },
      {
        id: "cond_perf_cont_4",
        question: "Without your constant interruptions, I _____ _____ by now and relaxing!",
        translation: "(Bez twoich ciągłych przerywań, już bym skończył i odpoczywał!)",
        options: ["would / have finished", "would / be finishing", "will / have finished", "would / finish"],
        correct: "would / have finished",
        explanation: "'Would have finished by now' pokazує completed hypothetical! Interruptions (reality) delayed completion (consequence). Would BE done already if uninterrupted. To complaint о productivity loss - distractions prevented earlier finish. 'By now' emphasizes temporal loss - should be done but isn't."
      },
      {
        id: "cond_perf_cont_5",
        question: "If it weren't raining, we _____ _____ outside in the garden right now enjoying sun!",
        translation: "(Gdyby nie padało, siedzielibyśmy na zewnątrz w ogrodzie właśnie teraz ciesząc się słońcem!)",
        options: ["would / be sitting", "would / have sat", "will / be sitting", "would / sit"],
        correct: "would / be sitting",
        explanation: "'Would be sitting' hypothetical present continuous! Rain prevents (reality) від outdoor enjoyment (desired scenario). Would BE outside NOW if sunny. To weather regret - imagining better conditions. Present continuous hypothetical paints vivid picture of alternative present moment."
      },
      {
        id: "cond_perf_cont_6",
        question: "He _____ still _____ if we hadn't explained the rules clearly to him repeatedly.",
        translation: "(Wciąż by się mylił gdybyśmy nie wyjaśnili zasad wyraźnie jemu wielokrotnie)",
        options: ["would / be making mistakes", "would / have made mistakes", "will / be making mistakes", "would / make mistakes"],
        correct: "would / be making mistakes",
        explanation: "'Would be making mistakes' ongoing hypothetical errors! Explanation (reality) prevented continued errors (avoided scenario). Would STILL be wrong without teaching. To о intervention effectiveness - clarification stopped ongoing problem. Continuous shows errors was бы persistent без help."
      },
      {
        id: "cond_perf_cont_7",
        question: "If I had started learning earlier, I _____ _____ English for ten years by now!",
        translation: "(Gdybym zaczął uczyć się wcześniej, uczyłbym się angielskiego już przez dziesięć lat do teraz!)",
        options: ["would / have been learning", "would / be learning", "will / have been learning", "would / learn"],
        correct: "would / have been learning",
        explanation: "'Would have been learning' hypothetical accumulated duration! Earlier start (didn't happen) would mean longer study period accumulated BY NOW. To regret о delayed beginning - calculating lost time. Perfect continuous для hypothetical accumulated experience - what duration WOULD BE."
      },
      {
        id: "cond_perf_cont_8",
        question: "Without the alarm clock, I _____ still _____ right now instead of working!",
        translation: "(Bez budzika wciąż bym spał właśnie teraz zamiast pracować!)",
        options: ["would / be sleeping", "would / have slept", "will / be sleeping", "would / sleep"],
        correct: "would / be sleeping",
        explanation: "'Would be sleeping' hypothetical present state! Alarm woke (reality) prevented continued sleep (avoided scenario). Would STILL be unconscious NOW. To grateful для wake-up call - без него missed obligations. Present continuous hypothetical shows ongoing state that would persist."
      },
      {
        id: "cond_perf_cont_9",
        question: "She _____ _____ much longer if the doctor hadn't given her proper treatment quickly.",
        translation: "(Cierpiałaby znacznie dłużej gdyby lekarz nie dał jej odpowiedniego leczenia szybko)",
        options: ["would / have been suffering", "would / be suffering", "will / have been suffering", "would / suffer"],
        correct: "would / have been suffering",
        explanation: "'Would have been suffering' hypothetical prolonged pain! Treatment (reality) ended suffering earlier than would have naturally. To medical intervention appreciation - doctor shortened ordeal. Perfect continuous для extended hypothetical discomfort - imagining що was бы if untreated."
      },
      {
        id: "cond_perf_cont_10",
        question: "If they had invested wisely earlier, they _____ _____ profits for years now already!",
        translation: "(Gdyby zainwestowali mądrze wcześniej, zbieraliby zyski już od lat teraz!)",
        options: ["would / have been collecting", "would / be collecting", "will / have been collecting", "would / collect"],
        correct: "would / have been collecting",
        explanation: "'Would have been collecting' hypothetical ongoing gains! Wise investment (didn't happen) would mean accumulated years of returns BY NOW. To financial regret - calculating missed compound earnings. Perfect continuous для accumulated hypothetical benefits over extended period."
      },
      {
        id: "cond_perf_cont_11",
        question: "We _____ still _____ for a solution if you hadn't come up with this brilliant idea!",
        translation: "(Wciąż byśmy szukali rozwiązania gdybyś nie wpadł на ten genialny pomysł!)",
        options: ["would / be searching", "would / have searched", "will / be searching", "would / search"],
        correct: "would / be searching",
        explanation: "'Would be searching' ongoing hypothetical struggle! Your idea (reality) ended search (avoided scenario). Would STILL be stuck NOW without insight. To crediting breakthrough - appreciating що ended fruitless hunt. Present continuous hypothetical emphasizes persistent problem що was resolved."
      },
      {
        id: "cond_perf_cont_12",
        question: "If the meeting hadn't been cancelled, we _____ _____ there for three hours now!",
        translation: "(Gdyby spotkanie nie zostało odwołane, siedzielibyśmy tam przez trzy godziny teraz!)",
        options: ["would / have been sitting", "would / be sitting", "will / have been sitting", "would / sit"],
        correct: "would / have been sitting",
        explanation: "'Would have been sitting' hypothetical endurance! Cancellation (reality) спасла від prolonged meeting (avoided scenario). Would be там for 3 hours BY NOW if proceeded. To relief о dodging tedious obligation. Perfect continuous shows accumulated sitting time що was бы endured."
      },
      {
        id: "cond_perf_cont_13",
        question: "He _____ still _____ if his friends hadn't convinced him to stop finally.",
        translation: "(Wciąż by palił gdyby jego przyjaciele nie przekonali go żeby w końcu przestał)",
        options: ["would / be smoking", "would / have smoked", "will / be smoking", "would / smoke"],
        correct: "would / be smoking",
        explanation: "'Would be smoking' hypothetical ongoing habit! Friends' intervention (reality) ended smoking (avoided continuation). Would STILL smoke NOW without peer pressure. To appreciating intervention - friends' concern changed behavior. Present continuous hypothetical shows bad habit що was бы persisting."
      },
      {
        id: "cond_perf_cont_14",
        question: "If she had known the truth earlier, she _____ _____ differently all this time!",
        translation: "(Gdyby znała prawdę wcześniej, zachowywałaby się inaczej cały ten czas!)",
        options: ["would / have been acting", "would / be acting", "will / have been acting", "would / act"],
        correct: "would / have been acting",
        explanation: "'Would have been acting differently' hypothetical altered behavior! Earlier knowledge (didn't have) would changed whole behavior pattern. To regret о delayed truth - ignorance caused inappropriate actions. Perfect continuous для extended hypothetical different conduct across time period."
      },
      {
        id: "cond_perf_cont_15",
        question: "Without modern medicine, many people _____ still _____ from diseases we can cure now.",
        translation: "(Bez nowoczesnej medycyny, wiele ludzi wciąż by cierpiało на choroby które możemy leczyć teraz)",
        options: ["would / be suffering", "would / have suffered", "will / be suffering", "would / suffer"],
        correct: "would / be suffering",
        explanation: "'Would be suffering' hypothetical ongoing affliction! Medical advances (reality) eliminated suffering (prevented scenario). Would STILL be sick NOW without cures. To appreciating medical progress - gratitude для eliminated diseases. Present continuous hypothetical shows persistent illness що medicine ended."
      }
    ]
  },

  cleft_sentence_variations: {
    name: "Wariacje zdań rozłupanych",
    description: "All I want is, The thing that, It's... that",
    icon: Maximize,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "cleft_var_1",
        question: "All _____ I need right now is a hot shower and comfortable bed to sleep in.",
        translation: "(Wszystko czego potrzebuję teraz to gorący prysznic i wygodne łóżko żeby spać)",
        options: ["that", "what", "which", "who"],
        correct: "that",
        explanation: "'All that I need' minimalizuje request! 'All' + 'that' emphasizes simplicity - only THESE things. Modest wants - basic comfort. To expressing tiredness - minimal needs statement. 'All that' structure focuses на essential bare requirements - nothing fancy."
      },
      {
        id: "cleft_var_2",
        question: "The reason _____ I'm calling is to discuss our upcoming important meeting agenda.",
        translation: "(Powodem dla którego dzwonię jest omówienie naszej nadchodzącej ważnej agendy spotkania)",
        options: ["why", "that", "which", "what"],
        correct: "why",
        explanation: "'The reason why' introduces purpose clearly! Fronting 'reason' followed by explanation. Business call opening - stating intent upfront. To professional communication - clarifying call purpose immediately. 'Why' connects reason noun до its specific explanation clause."
      },
      {
        id: "cleft_var_3",
        question: "_____ really matters is your effort and attitude, not just natural talent alone.",
        translation: "(Co naprawdę ma znaczenie to twój wysiłek i postawa, nie tylko naturalny talent sam)",
        options: ["What", "That", "Which", "Who"],
        correct: "What",
        explanation: "'What really matters' prioritizes values! Fronts importance assessment. Effort over talent - motivational message. To encouraging trying - downplaying innate ability importance. 'What matters' structure identifies true priorities - separating essential від superficial."
      },
      {
        id: "cleft_var_4",
        question: "It wasn't the price _____ bothered me, it was the terrible customer service received.",
        translation: "(To nie cena mnie niepokoiła, to okropna obsługa klienta otrzymana)",
        options: ["that", "which", "what", "who"],
        correct: "that",
        explanation: "'It wasn't... that' corrective cleft! Clarifying true complaint - not cost але treatment. To consumer complaint focus shift - price acceptable, behavior not. Contrasting structure separates assumed problem від real issue - correcting misunderstanding о grievance."
      },
      {
        id: "cleft_var_5",
        question: "The thing _____ I love most about traveling is meeting new interesting people everywhere.",
        translation: "(Rzecz którą najbardziej kocham w podróżowaniu to spotykanie nowych ciekawych ludzi wszędzie)",
        options: ["that", "what", "which", "who"],
        correct: "that",
        explanation: "'The thing that I love' casual highlighting! Fronts preferred aspect. Human connections over sights. To о travel philosophy - people make experiences memorable. 'The thing that' conversational alternative до formal 'what' - friendly sharing of preferences."
      },
      {
        id: "cleft_var_6",
        question: "It's your dedication, not luck, _____ has brought you this far in career successfully.",
        translation: "(To twoje oddanie, nie szczęście, które zaprowadziło cię tak daleko w karierze pomyślnie)",
        options: ["that", "which", "what", "who"],
        correct: "that",
        explanation: "'It's dedication... that' credits true source! Contrasting structure - dedication vs luck. Attributing success correctly - effort not chance. To motivational - affirming merited achievement. 'That' connects emphasized factor (dedication) до its result - proper credit assignment."
      },
      {
        id: "cond_perf_cont_7",
        question: "_____ I don't understand is why he made that strange decision so suddenly.",
        translation: "(Czego nie rozumiem to dlaczego podjął tę dziwną decyzję tak nagle)",
        options: ["What", "That", "Which", "Why"],
        correct: "What",
        explanation: "'What I don't understand' fronts confusion! Emphasizes mystery przed revealing specific puzzle. To seeking explanation - declaring bafflement before stating question. 'What' packages incomprehension като subject - building anticipation для what exactly puzzles."
      },
      {
        id: "cond_perf_cont_8",
        question: "It was because of your help _____ I managed to pass the difficult exam successfully!",
        translation: "(To dzięki twojej pomocy udało mi się zdać trudny egzamin pomyślnie!)",
        options: ["that", "which", "what", "who"],
        correct: "that",
        explanation: "'It was because of help that' attributes success! Isolating causative factor - your assistance. Grateful acknowledgment - crediting support. To thanking properly - specific attribution of success до helper's role. Cleft emphasizes causal connection clearly."
      },
      {
        id: "cond_perf_cont_9",
        question: "All _____ matters to me is that everyone is safe and healthy right now.",
        translation: "(Wszystko co ma dla mnie znaczenie to że wszyscy są bezpieczni i zdrowi właśnie teraz)",
        options: ["that", "what", "which", "who"],
        correct: "that",
        explanation: "'All that matters' minimizes concerns! Only ONE thing important - safety/health. Crisis perspective - priorities clarified. To reassessment - material things irrelevant compared до wellbeing. 'All that' focuses exclusively на what truly counts."
      },
      {
        id: "cond_perf_cont_10",
        question: "The place _____ I feel most relaxed and comfortable is my own cozy home.",
        translation: "(Miejsce gdzie czuję się najbardziej zrelaksowany i komfortowo to mój własny przytulny dom)",
        options: ["where", "that", "which", "what"],
        correct: "where",
        explanation: "'The place where I feel' identifies sanctuary! Fronting location emphasis. Home as ultimate comfort zone. To о belonging - nowhere else matches. 'Where' connects place noun до feeling description - geographical-emotional link establishing home's unique value."
      },
      {
        id: "cond_perf_cont_11",
        question: "It was in 1969 _____ humans first landed on the moon surface successfully.",
        translation: "(To było w 1969 kiedy ludzie po raz pierwszy wylądowali на powierzchni księżyca pomyślnie)",
        options: ["that", "when", "which", "where"],
        correct: "that",
        explanation: "'It was in 1969 that' emphasizes date! Historical fact highlighting - year fronted. Momentous achievement timing. To educational - teaching significant date. Cleft structure makes year prominent - time emphasis для milestone event."
      },
      {
        id: "cond_perf_cont_12",
        question: "What I _____ is some peace and quiet to think clearly about this decision.",
        translation: "(Czego potrzebuję to trochę spokoju i ciszy żeby myśleć jasno о tej decyzji)",
        options: ["need", "needs", "needing", "needed"],
        correct: "need",
        explanation: "'What I need is' fronts necessity! Emphasizes requirement przed revealing what. Simple request - conducive environment. To asking для space - mental clarity requires calm. 'What I need' structure prioritizes need itself перед specifying object."
      },
      {
        id: "cond_perf_cont_13",
        question: "The way _____ he treated her was completely unacceptable and very rude honestly.",
        translation: "(Sposób w jaki ją potraktował był całkowicie nieakceptowalny i bardzo niegrzeczny szczerze)",
        options: ["that", "which", "what", "how"],
        correct: "that",
        explanation: "'The way that he treated' describes manner! Fronting method emphasis. Behavior evaluation - condemning approach. To criticism - manner was wrong. 'The way that' focuses на HOW something was done - method assessment структура."
      },
      {
        id: "cond_perf_cont_14",
        question: "It's not what you know _____ matters most, it's who you know in business.",
        translation: "(To nie co wiesz ma największe znaczenie, to kogo znasz w biznesie)",
        options: ["that", "which", "what", "who"],
        correct: "that",
        explanation: "'It's not X that matters, it's Y' contrasting structure! Knowledge vs connections - cynical business truth. To о networking importance - relationships trump expertise. Cleft comparison highlighting controversial reality - contacts valued over competence."
      },
      {
        id: "cond_perf_cont_15",
        question: "_____ we should focus on now is solving this immediate urgent problem first.",
        translation: "(To на czym powinniśmy się skupić teraz to rozwiązanie tego natychmiastowego pilnego problemu najpierw)",
        options: ["What", "That", "Which", "Where"],
        correct: "What",
        explanation: "'What we should focus on' directive fronting! Priorities guidance - identifying urgent action. Management focus statement. To crisis response - immediate needs before future planning. 'What to focus on' structure clearly directs attention - establishing priority order."
      }
    ]
  },

  noun_phrase_complexity: {
    name: "Złożoność fraz rzeczownikowych",
    description: "Multi-layer noun modifications",
    icon: BookmarkPlus,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "np_comp_1",
        question: "The old wooden bridge _____ the river collapsed during last night's terrible storm.",
        translation: "(Stary drewniany most nad rzeką zawalił się podczas wczorajszej nocnej okropnej burzy)",
        options: ["over", "on", "at", "in"],
        correct: "over",
        explanation: "'Bridge over the river' standard preposition! Multi-layer description: old + wooden + bridge + location. Each layer adds information. To disaster reporting - identifying which structure failed. Layered noun phrase efficiently packs: age + material + type + position."
      },
      {
        id: "np_comp_2",
        question: "She bought a beautiful hand-made Italian leather _____ from the boutique shop.",
        translation: "(Kupiła piękną ręcznie robioną włoską skórzaną torebkę z butiku)",
        options: ["bag", "bags", "bagging", "to bag"],
        correct: "bag",
        explanation: "Complex pre-modification! Opinion (beautiful) + process (hand-made) + origin (Italian) + material (leather) + HEAD noun (bag). Każdy przymiotnik adds dimension. To luxury purchase description - multiple качества establishing value. Proper adjective ordering creates sophisticated product description."
      },
      {
        id: "np_comp_3",
        question: "The young ambitious lawyer _____ the big city became famous through winning cases.",
        translation: "(Młody ambitny prawnik z dużego miasta stał się sławny przez wygrywanie spraw)",
        options: ["from", "of", "at", "in"],
        correct: "from",
        explanation: "'Lawyer from the city' origin phrase! Age + character + profession + location. Layered description building profile. To success story beginning - establishing character background. Multiple modifiers create vivid picture - each detail contributes до characterization."
      },
      {
        id: "np_comp_4",
        question: "Those expensive imported German _____ need special maintenance and care regularly.",
        translation: "(Te drogie importowane niemieckie samochody potrzebują specjalnej konserwacji i dbałości regularnie)",
        options: ["cars", "car", "car's", "cars'"],
        correct: "cars",
        explanation: "Plural head noun з multiple modifiers! Value (expensive) + source (imported) + origin (German) + cars (plural). Maintenance requirement. To automotive advice - premium vehicles need extra care. Complex plural noun phrase - all modifiers agree з plural head."
      },
      {
        id: "np_comp_5",
        question: "The tall glass _____ water on the kitchen table is mine - don't drink it please.",
        translation: "(Wysoka szklana szklanka wody на kuchennym stole jest moja - nie pij proszę)",
        options: ["of", "with", "for", "in"],
        correct: "of",
        explanation: "'Glass of water' standard measurement phrase! Size (tall) + material (glass) + container + contents + location. Multiple layers identifying specific item. To ownership claim - specifying which glass among possible others. Prepositional phrase 'of water' crucial для full identification."
      },
      {
        id: "np_comp_6",
        question: "He lives in a small cozy apartment _____ the third floor overlooking park.",
        translation: "(Mieszka w małym przytulnym apartamencie на trzecim piętrze z widokiem на park)",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "'On the third floor' floor location! Size (small) + atmosphere (cozy) + type (apartment) + floor + view. Layered description. To residence characterization - multiple details painting picture. Proper prepositions crucial - 'on' для floors standard."
      },
      {
        id: "np_comp_7",
        question: "The famous award-winning French _____ will be speaking at our conference tomorrow.",
        translation: "(Słynny nagrodzony francuski naukowiec będzie przemawiał на naszej konferencji jutro)",
        options: ["scientist", "scientists", "science", "scientific"],
        correct: "scientist",
        explanation: "Singular head з multiple pre-modifiers! Fame + achievement + nationality + profession. Building impressive profile. To conference promotion - highlighting prestigious speaker. Stacked modifiers create authority - each qualifier adds credibility до speaker presentation."
      },
      {
        id: "np_comp_8",
        question: "Those old black-and-white family _____ bring back wonderful nostalgic memories always.",
        translation: "(Te stare czarno-białe rodzinne zdjęcia przywołują wspaniałe nostalgiczne wspomnienia zawsze)",
        options: ["photos", "photo", "photoes", "photograph"],
        correct: "photos",
        explanation: "Plural з compound modifier! Age (old) + color type (black-and-white) + category (family) + photos (plural). Hyphenated compound acts като single modifier. To sentimental objects - treasured keepsakes. Complex modifiers describing precious memory triggers."
      },
      {
        id: "np_comp_9",
        question: "She wore an elegant long flowing silk _____ to the formal gala evening event.",
        translation: "(Nosiła elegancką długą zwiewną jedwabną sukienkę на formalny galowy wieczorny event)",
        options: ["dress", "dresses", "dressing", "dressed"],
        correct: "dress",
        explanation: "Singular з style cascade! Opinion (elegant) + length (long) + movement (flowing) + material (silk) + dress. Each adds beauty. To fashion description - formal wear characterization. Progressive refinement - each adjective layer enhances glamorous image."
      },
      {
        id: "np_comp_10",
        question: "The dirty old football _____ the garage belongs to my son from childhood.",
        translation: "(Brudna stara piłka nożna w garażu należy до mojego syna z dzieciństwa)",
        options: ["in", "on", "at", "by"],
        correct: "in",
        explanation: "'Ball in the garage' location phrase! Condition (dirty) + age (old) + type (football) + ball + location. Identifying forgotten item. To nostalgic discovery - childhood relic. Location phrase 'in garage' final layer identifying where neglected treasure sits."
      },
      {
        id: "np_comp_11",
        question: "He drives a brand-new red sports _____ that cost him enormous fortune recently.",
        translation: "(Jeździ zupełnie nowym czerwonym samochodem sportowym który kosztował go ogromną fortunę ostatnio)",
        options: ["car", "cars", "car's", "caring"],
        correct: "car",
        explanation: "Compound modifier + colors! Newness (brand-new hyphenated) + color (red) + category (sports) + car. Expensive purchase. To status symbol - showcasing wealth through vehicle. 'Brand-new' acts като single unit modifier - hyphenation creates compound preceding other adjectives."
      },
      {
        id: "np_comp_12",
        question: "The small round wooden dining _____ can seat up to six people comfortably together.",
        translation: "(Mały okrągły drewniany stół jadalny może pomieścić до sześciu ludzi wygodnie razem)",
        options: ["table", "tables", "tabling", "tabled"],
        correct: "table",
        explanation: "Multiple physical descriptors! Size (small) + shape (round) + material (wooden) + purpose (dining) + table. Full specification. To furniture description - capacity information. Each modifier narrows characteristics - size, shape, material, function all specified systematically."
      },
      {
        id: "np_comp_13",
        question: "Those interesting educational documentary _____ teach children about nature and science.",
        translation: "(Te ciekawe edukacyjne dokumentalne filmy uczą dzieci о naturze i nauce)",
        options: ["films", "film", "filming", "filmed"],
        correct: "films",
        explanation: "Plural з purpose stack! Quality (interesting) + function (educational) + genre (documentary) + films (plural). Pedagogical media. To children's programming description - learning entertainment. Multiple functional descriptors characterizing content type і educational value."
      },
      {
        id: "np_comp_14",
        question: "The ancient stone castle _____ the hill has incredible historical significance locally.",
        translation: "(Starożytny kamienny zamek на wzgórzu ma niesamowite historyczne znaczenie lokalnie)",
        options: ["on", "in", "at", "by"],
        correct: "on",
        explanation: "'Castle on the hill' elevated position! Age (ancient) + material (stone) + type (castle) + location elevation. Historical landmark. To cultural heritage - architectural treasure. Location phrase 'on hill' adds geographical context - prominent positioning část of significance."
      },
      {
        id: "np_comp_15",
        question: "She prepared a delicious home-made vegetarian _____ for the dinner party guests.",
        translation: "(Przygotowała pyszny domowy wegetariański posiłek dla gości kolacji)",
        options: ["meal", "meals", "mealing", "mealed"],
        correct: "meal",
        explanation: "Compound + dietary modifier! Quality (delicious) + source (home-made hyphenated) + diet type (vegetarian) + meal. Culinary offering. To hosting effort - special preparation. 'Home-made' compound functions як single modifier - hyphenation creating unit перед dietary specification."
      }
    ]
  }
};

export default part24Categories;