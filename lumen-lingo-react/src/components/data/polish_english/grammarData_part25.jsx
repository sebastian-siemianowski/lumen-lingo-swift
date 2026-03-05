/**
 * POLISH → ENGLISH GRAMMAR - PART 25
 * 3 categories, 15 questions each - Ultimate mastery
 */

import { Link2, MessageSquare, Puzzle } from "lucide-react";

export const part25Categories = {
  advanced_linking_devices: {
    name: "Zaawansowane łączniki dyskursu",
    description: "Furthermore, nevertheless, hence, thus",
    icon: Link2,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "link_dev_1",
        question: "The plan is risky and potentially expensive. _____, we should proceed carefully with full preparation.",
        translation: "(Plan jest ryzykowny i potencjalnie drogi. W związku z tym powinniśmy postępować ostrożnie z pełnym przygotowaniem)",
        options: ["Consequently", "However", "Moreover", "Nevertheless"],
        correct: "Consequently",
        explanation: "'Consequently' pokazuje logical result! Risks identified (observation) CONSEQUENTLY caution needed (response). To о deriving sensible actions від assessment. Formal connector linking evaluation до recommended approach. Cause-effect relationship - understanding risks demands careful proceeding."
      },
      {
        id: "link_dev_2",
        question: "She's intelligent and talented. _____, she's incredibly humble about her achievements always.",
        translation: "(Jest inteligentna i utalentowana. Co więcej, jest niesamowicie skromna о swoich osiągnięciach zawsze)",
        options: ["Furthermore", "However", "Therefore", "Otherwise"],
        correct: "Furthermore",
        explanation: "'Furthermore' додає additional positive! Smart (good quality) FURTHERMORE humble (another good). Building complete positive portrait. To comprehensive compliment - accumulating virtues. 'Furthermore' stacks points - each sentence strengthens overall excellent impression systematically."
      },
      {
        id: "link_dev_3",
        question: "The evidence was overwhelming and clear. _____, the jury reached a guilty verdict.",
        translation: "(Dowody były przytłaczające i jasne. W związku z tym ława przysięgłych wydała wyrok winny)",
        options: ["Hence", "However", "Besides", "Meanwhile"],
        correct: "Hence",
        explanation: "'Hence' very formal 'therefore'! Strong evidence (foundation) HENCE conviction (inevitable conclusion). Legal/academic language. To logical outcome - proof was so strong що verdict was predictable. 'Hence' creates authoritative causal connection - outcome inescapable від evidence."
      },
      {
        id: "link_dev_4",
        question: "The task is difficult and time-consuming. _____, it must be completed by Friday.",
        translation: "(Zadanie jest trudne i czasochłonne. Niemniej jednak musi być ukończone do piątku)",
        options: ["Nonetheless", "Therefore", "Moreover", "Thus"],
        correct: "Nonetheless",
        explanation: "'Nonetheless' = pomimo tego! Difficulty acknowledged (obstacle) NONETHELESS deadline firm (requirement stands). To о non-negotiable despite challenges. Concessive formal connector - problems don't eliminate obligation. Deadline remains regardless of hardship."
      },
      {
        id: "link_dev_5",
        question: "He's experienced and knowledgeable. _____, he lacks the necessary leadership skills required.",
        translation: "(Jest doświadczony i kompetentny. Jednakże brakuje mu niezbędnych umiejętności przywódczych wymaganych)",
        options: ["However", "Therefore", "Furthermore", "Hence"],
        correct: "However",
        explanation: "'However' introduces contrasting limitation! Positives (experience/knowledge) HOWEVER critical flaw (no leadership). To balanced evaluation - strengths recognized але gap identified. Formal 'but' showing qualification doesn't overcome disqualification - nuanced assessment."
      },
      {
        id: "link_dev_6",
        question: "You must submit the form today. _____, it won't be processed in time for deadline.",
        translation: "(Musisz wysłać formularz dzisiaj. W przeciwnym razie nie będzie przetworzony на czas на termin)",
        options: ["Otherwise", "Moreover", "Furthermore", "Besides"],
        correct: "Otherwise",
        explanation: "'Otherwise' warns о consequence! Action required (submit today) OTHERWISE negative result (not processed). To urgent directive - compliance necessary. Creates choice: act correctly or suffer consequence. 'Otherwise' introduces unwanted alternative - motivating proper action."
      },
      {
        id: "link_dev_7",
        question: "The project failed due to poor planning. _____, the team learned valuable lessons from experience.",
        translation: "(Projekt zawiódł z powodu złego planowania. Niemniej jednak zespół nauczył się cennych lekcji z doświadczenia)",
        options: ["Nevertheless", "Therefore", "Consequently", "Thus"],
        correct: "Nevertheless",
        explanation: "'Nevertheless' finds positive в failure! Failure (setback) NEVERTHELESS learning occurred (silver lining). To growth mindset - extracting value від mistakes. Concessive showing disappointment doesn't negate educational benefit - balanced perspective on setbacks."
      },
      {
        id: "link_dev_8",
        question: "The salary is competitive and attractive. _____, the benefits package is extremely generous too.",
        translation: "(Wynagrodzenie jest konkurencyjne i atrakcyjne. Dodatkowo pakiet benefitów jest ekstremalnie hojny też)",
        options: ["In addition", "However", "Otherwise", "Instead"],
        correct: "In addition",
        explanation: "'In addition' adds another positive! Good salary (attraction) IN ADDITION great benefits (additional appeal). To job offer presentation - stacking incentives. Formal 'also' - each sentence strengthens total package. Systematic accumulation of employment advantages."
      },
      {
        id: "link_dev_9",
        question: "I was busy with work. _____, my colleague was handling the client meeting downtown.",
        translation: "(Byłem zajęty pracą. Tymczasem mój kolega obsługiwał spotkanie klienckie w centrum)",
        options: ["Meanwhile", "Therefore", "However", "Thus"],
        correct: "Meanwhile",
        explanation: "'Meanwhile' introduces simultaneous activity! You working (action 1) MEANWHILE colleague meeting (action 2 same time). To о parallel operations - workload distribution. Shows both things happening concurrently - team multitasking. Temporal coordination connector."
      },
      {
        id: "link_dev_10",
        question: "The plan has several weaknesses. _____, I think we should reconsider our approach entirely.",
        translation: "(Plan ma kilka słabości. W związku z tym myślę że powinniśmy przemyśleć nasze podejście całkowicie)",
        options: ["Thus", "Moreover", "Besides", "Meanwhile"],
        correct: "Thus",
        explanation: "'Thus' formal conclusion! Flaws identified (problems) THUS reconsider (logical recommendation). Very formal reasoning. To suggesting course correction - weaknesses justify rethinking. 'Thus' creates authoritative logical link - problems necessitate reevaluation clearly."
      },
      {
        id: "link_dev_11",
        question: "She didn't study hard enough. _____, she failed the important final examination.",
        translation: "(Nie uczyła się wystarczająco ciężko. W konsekwencji oblała ważny egzamin końcowy)",
        options: ["As a result", "However", "Moreover", "Besides"],
        correct: "As a result",
        explanation: "'As a result' clear causation! Insufficient study (cause) AS A RESULT failure (effect). Direct consequence. To teaching moment - behavior determines outcomes. Explicit causal connector - no ambiguity that failure stemmed від inadequate preparation. Lesson structure."
      },
      {
        id: "link_dev_12",
        question: "I enjoy reading novels. _____, I love watching films based on books I've read.",
        translation: "(Lubię czytać powieści. Ponadto uwielbiam oglądać filmy oparte на książkach które czytałem)",
        options: ["Besides", "However", "Otherwise", "Instead"],
        correct: "Besides",
        explanation: "'Besides' adds related interest! Reading (hobby 1) BESIDES watching adaptations (related hobby 2). To о connected passions - one feeds other. 'Besides' introduces additional related element - not just accumulating але connecting related enthusiasms."
      },
      {
        id: "link_dev_13",
        question: "The weather forecast predicted rain. _____, we decided to postpone outdoor picnic event.",
        translation: "(Prognoza pogody przewidywała deszcz. W rezultacie zdecydowaliśmy przełożyć outdoor piknik)",
        options: ["Accordingly", "However", "Moreover", "Besides"],
        correct: "Accordingly",
        explanation: "'Accordingly' shows acting на information! Forecast (input) ACCORDINGLY postpone (adjusted plan). To sensible adaptation - changing plans based на data. 'Accordingly' indicates appropriate response до circumstances - aligning action з information received."
      },
      {
        id: "link_dev_14",
        question: "He's talented but lacks discipline. _____, his potential remains largely unfulfilled currently.",
        translation: "(Jest utalentowany але brakuje mu dyscypliny. W rezultacie jego potencjał pozostaje w dużej mierze niespełniony obecnie)",
        options: ["As a consequence", "Moreover", "Furthermore", "Besides"],
        correct: "As a consequence",
        explanation: "'As a consequence' links flaw до outcome! Lack of discipline (problem) AS A CONSEQUENCE unrealized potential (result). To wasted talent observation. Formal causal connector explaining why promise unfulfilled - behavior preventing achievement."
      },
      {
        id: "link_dev_15",
        question: "Traffic was terrible this morning. _____, I arrived late for the important meeting.",
        translation: "(Ruch był okropny dziś rano. W efekcie przybyłem późno на ważne spotkanie)",
        options: ["Consequently", "Moreover", "Furthermore", "Besides"],
        correct: "Consequently",
        explanation: "'Consequently' direct result! Bad traffic (cause) CONSEQUENTLY late arrival (effect). To excuse - external factor caused tardiness. Chains events clearly - circumstances beyond control produced unwanted outcome. Explanatory connector establishing blameless causation."
      }
    ]
  },

  discourse_markers_context: {
    name: "Markery dyskursu w kontekście",
    description: "Actually, obviously, apparently, presumably",
    icon: MessageSquare,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "disc_mark_1",
        question: "I thought the exam would be easy, but _____ it was quite challenging for everyone.",
        translation: "(Myślałem że egzamin będzie łatwy, ale faktycznie był dość wymagający dla wszystkich)",
        options: ["actually", "obviously", "apparently", "presumably"],
        correct: "actually",
        explanation: "'Actually' corrects expectations! Thought easy (assumption) ACTUALLY challenging (reality). To honest admission - was harder than anticipated. 'Actually' introduces reality що differs від expectation - corrective function revealing truth."
      },
      {
        id: "disc_mark_2",
        question: "_____, we can't proceed without proper authorization from senior management first.",
        translation: "(Oczywiście nie możemy postępować bez odpowiedniego upoważnienia від wyższego kierownictwa najpierw)",
        options: ["Obviously", "Actually", "Apparently", "Presumably"],
        correct: "Obviously",
        explanation: "'Obviously' states self-evident truth! Authorization needed - this should be clear до all. To asserting common sense - no explanation needed. 'Obviously' indicates reasoning is transparent - pointing out що everyone should already understand. Shared understanding assumed."
      },
      {
        id: "disc_mark_3",
        question: "_____, she's not coming to the party tonight - at least that's what I heard.",
        translation: "(Podobno nie przychodzi на imprezę dziś wieczorem - przynajmniej tak słyszałem)",
        options: ["Apparently", "Obviously", "Actually", "Presumably"],
        correct: "Apparently",
        explanation: "'Apparently' reports secondhand information! Based на what heard (not direct knowledge). Hedging - might not be true. To cautious sharing - indicating source is hearsay not confirmation. 'Apparently' signals uncertainty - relaying rumor rather than verified fact."
      },
      {
        id: "disc_mark_4",
        question: "The meeting is at 3 PM, _____, though I should confirm the exact time later.",
        translation: "(Spotkanie jest о 15, przypuszczalnie, chociaż powinienem potwierdzić dokładny czas później)",
        options: ["presumably", "obviously", "actually", "apparently"],
        correct: "presumably",
        explanation: "'Presumably' expresses educated guess! Logical assumption based на pattern ale not confirmed. To qualified statement - probably correct но needs verification. 'Presumably' shows reasoning while acknowledging uncertainty - balancing confidence з prudent checking."
      },
      {
        id: "disc_mark_5",
        question: "I know you're busy, but _____ you could spare just five minutes for quick chat?",
        translation: "(Wiem że jesteś zajęty, ale faktycznie mógłbyś poświęcić tylko pięć minut на szybką rozmowę?)",
        options: ["actually", "obviously", "apparently", "presumably"],
        correct: "actually",
        explanation: "'Actually' softens request! Acknowledging busy ACTUALLY asking anyway. Polite persistence - knows inconvenient але needs help. To tactful asking - 'actually' makes request less demanding. Recognizes imposition while gently insisting - diplomatic persuasion technique."
      },
      {
        id: "disc_mark_6",
        question: "_____, he won't be joining us for dinner - he just texted me cancelling.",
        translation: "(Najwyraźniej nie dołączy до nas на kolację - właśnie wysłał mi SMS odwołując)",
        options: ["Apparently", "Obviously", "Actually", "Presumably"],
        correct: "Apparently",
        explanation: "'Apparently' based на recent communication! Text received (evidence) supports conclusion. Fresh information. To updating plans - sharing новости. 'Apparently' introduces новый information just learned - recent evidence changing understanding of situation."
      },
      {
        id: "disc_mark_7",
        question: "The deadline is tomorrow, so _____ we need to finish this work tonight.",
        translation: "(Termin jest jutro, więc oczywiście musimy skończyć tę pracę dziś wieczorem)",
        options: ["obviously", "actually", "apparently", "presumably"],
        correct: "obviously",
        explanation: "'Obviously' states unavoidable conclusion! Tomorrow deadline (fact) OBVIOUSLY tonight work (necessary). Logical necessity transparent. To rallying team - pointing out inescapable requirement. 'Obviously' emphasizes що everyone should recognize this necessity - no discussion needed."
      },
      {
        id: "disc_mark_8",
        question: "I thought he was joking, but _____ he was completely serious about the offer!",
        translation: "(Myślałem że żartuje, але faktycznie był całkowicie poważny о ofercie!)",
        options: ["actually", "obviously", "apparently", "presumably"],
        correct: "actually",
        explanation: "'Actually' reveals surprising reality! Assumed joke (misinterpretation) ACTUALLY serious (truth). To startled realization - misjudged intention. 'Actually' corrects false assumption - introducing unexpected reality що changes response. Surprise revelation function."
      },
      {
        id: "disc_mark_9",
        question: "_____, the project will cost more than initially budgeted - we need extra funding.",
        translation: "(Najwyraźniej projekt będzie kosztował więcej niż początkowo zabudżetowano - potrzebujemy dodatkowych funduszy)",
        options: ["Apparently", "Obviously", "Actually", "Presumably"],
        correct: "Apparently",
        explanation: "'Apparently' introduces discovered information! Budget overrun emerging (unwelcome news). Based на recent calculations. To financial update - reporting cost escalation. 'Apparently' softens bad news - presenting as discovered fact rather than accusatory. Diplomatic problem announcement."
      },
      {
        id: "disc_mark_10",
        question: "_____, they'll arrive around 6 PM, unless traffic delays them significantly today.",
        translation: "(Przypuszczalnie przybędą około 18, chyba że ruch ich opóźni znacząco dzisiaj)",
        options: ["Presumably", "Obviously", "Actually", "Apparently"],
        correct: "Presumably",
        explanation: "'Presumably' tentative prediction! Logical assumption (around 6) qualified by caveat (unless traffic). To planning estimate - probable але not guaranteed. 'Presumably' shows reasoning while maintaining flexibility - educated guess acknowledging variables."
      },
      {
        id: "disc_mark_11",
        question: "She studied hard for months. _____, she passed all her exams with excellent grades.",
        translation: "(Uczyła się ciężko przez miesiące. W związku z tym zdała wszystkie egzaminy z doskonałymi ocenami)",
        options: ["Consequently", "However", "Moreover", "Besides"],
        correct: "Consequently",
        explanation: "'Consequently' direct outcome! Study effort (cause) CONSEQUENTLY success (effect). Predictable positive result. To validating hard work - effort paid off як anticipated. Clear causation - diligence produced deserved achievement. Reward follows labor logically."
      },
      {
        id: "disc_mark_12",
        question: "The instructions were unclear and confusing. _____, everyone made mistakes on task.",
        translation: "(Instrukcje były niejasne i mylące. W rezultacie wszyscy popełnili błędy на zadaniu)",
        options: ["As a result", "Moreover", "Furthermore", "Besides"],
        correct: "As a result",
        explanation: "'As a result' shows caused errors! Poor instructions (source) AS A RESULT universal mistakes (consequence). To blaming documentation - failures weren't user fault. Causal connection absolving individuals - system problem produced errors collectively."
      },
      {
        id: "disc_mark_13",
        question: "I don't like coffee much. _____, I prefer tea in the morning when waking up.",
        translation: "(Niezbyt lubię kawy. Zamiast tego wolę herbatę rano kiedy się budzę)",
        options: ["Instead", "Therefore", "Moreover", "Besides"],
        correct: "Instead",
        explanation: "'Instead' introduces alternative preference! Rejection (coffee) INSTEAD choice (tea). To stating actual preference после negating. 'Instead' signals substitution - what choose over rejected option. Clear preference communication - не to але tamto."
      },
      {
        id: "disc_mark_14",
        question: "The restaurant is expensive. _____, the food quality is absolutely exceptional and worth it.",
        translation: "(Restauracja jest droga. Niemniej jednak jakość jedzenia jest absolutnie wyjątkowa i warta tego)",
        options: ["Nevertheless", "Therefore", "Moreover", "Thus"],
        correct: "Nevertheless",
        explanation: "'Nevertheless' justifies despite cost! High price (downside) NEVERTHELESS excellent quality (compensating upside). To balanced review - cost acknowledged але value asserted. Concessive showing drawback doesn't prevent recommendation - quality justifies expense."
      },
      {
        id: "disc_mark_15",
        question: "_____, she's running late - she called to say she's stuck in traffic now.",
        translation: "(Najwyraźniej się spóźnia - zadzwoniła żeby powiedzieć że utknęła w korku teraz)",
        options: ["Apparently", "Obviously", "Actually", "Presumably"],
        correct: "Apparently",
        explanation: "'Apparently' based на communication! Call received (source) explaining delay. Direct information. To updating others - sharing received news. 'Apparently' introduces information just obtained - recent communication providing current status update."
      }
    ]
  },

  cohesion_reference_advanced: {
    name: "Kohezja i odniesienia tekstowe",
    description: "This, that, such, former/latter, the above",
    icon: Puzzle,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "cohes_1",
        question: "The proposal has many benefits. _____ is why we should approve it immediately.",
        translation: "(Propozycja ma wiele korzyści. Dlatego powinniśmy ją zatwierdzić natychmiast)",
        options: ["This", "That", "These", "Those"],
        correct: "This",
        explanation: "'This is why' refers back до benefits! 'This' points до previous statement като reason. Logical connection. To connecting evidence до conclusion - benefits justify approval. 'This' creates cohesion - linking observation до recommended action derived від it."
      },
      {
        id: "cohes_2",
        question: "He offered two solutions. I prefer _____ one because it's simpler and cheaper.",
        translation: "(Zaproponował dwa rozwiązania. Wolę to drugie bo jest prostsze i tańsze)",
        options: ["the latter", "the former", "the last", "the first"],
        correct: "the latter",
        explanation: "'The latter' refers до second of two! Formal way of indicating которую - второе mentioned. To preference statement - choosing between presented options. 'Former' = first, 'latter' = second. Elegant reference avoiding repetition while staying clear."
      },
      {
        id: "cohes_3",
        question: "We discussed marketing and sales strategies. _____ topics will be crucial for growth.",
        translation: "(Omówiliśmy strategie marketingowe i sprzedażowe. Te tematy będą kluczowe dla wzrostu)",
        options: ["These", "This", "Those", "That"],
        correct: "These",
        explanation: "'These topics' refers do multiple previous items! Plural reference - marketing + sales (two things). Cohesive tie. To emphasizing importance - calling back до discussed items. 'These' creates connection - topics mentioned now being characterized като crucial."
      },
      {
        id: "cohes_4",
        question: "The company faces financial difficulties. _____ a situation requires immediate action now.",
        translation: "(Firma boryka się z trudnościami finansowymi. Taka sytuacja wymaga natychmiastowego działania teraz)",
        options: ["Such", "This", "That", "These"],
        correct: "Such",
        explanation: "'Such a situation' refers до described problem! 'Such' indicates type - situations LIKE this described one. Category reference. To urgent framing - problem type demands response. 'Such' connects specific instance до category requiring action - typical crisis needing standard urgent approach."
      },
      {
        id: "cohes_5",
        question: "She loves painting and photography. _____ hobbies keep her creatively fulfilled always.",
        translation: "(Kocha malowanie i fotografię. Te hobby utrzymują ją kreatywnie spełnioną zawsze)",
        options: ["Both", "Each", "All", "Every"],
        correct: "Both",
        explanation: "'Both hobbies' refers до two mentioned! Painting + photography (именно два). Inclusive reference. To characterizing combined effect - together они fulfill. 'Both' specifically for pairs - acknowledging that ОБА contribute до creative satisfaction."
      },
      {
        id: "cohes_6",
        question: "The meeting discussed budget and timeline. The _____ seems realistic, but the _____ is tight.",
        translation: "(Spotkanie omówiło budżet i harmonogram. To pierwsze wydaje się realistyczne, але to drugie jest napięte)",
        options: ["former / latter", "latter / former", "first / second", "one / other"],
        correct: "former / latter",
        explanation: "'Former' = first, 'latter' = second! Elegant pair reference - budget (first) realistic, timeline (second) tight. To balanced assessment. Formal structure avoiding repetition - using position references instead of re-stating nouns. Professional writing economy."
      },
      {
        id: "cohes_7",
        question: "His behavior was inappropriate. I told him _____ and he apologized sincerely.",
        translation: "(Jego zachowanie było nieodpowiednie. Powiedziałem mu to i przeprosił szczerze)",
        options: ["so", "this", "that", "such"],
        correct: "so",
        explanation: "'Told him so' = told him THAT (it was inappropriate)! 'So' substitutes entire preceding statement. To confrontation outcome - direct communication. 'Told him so' efficient - refers до whole assessment without repeating. Leads до apology showing message received."
      },
      {
        id: "cohes_8",
        question: "Success requires hard work and patience. Without _____, you won't achieve your goals.",
        translation: "(Sukces wymaga ciężkiej pracy i cierpliwości. Bez tego nie osiągniesz swoich celów)",
        options: ["these", "this", "those", "that"],
        correct: "these",
        explanation: "'Without these' refers до multiple requirements! Work + patience (оба needed). Plural reference. To emphasizing necessity of both - lacking either undermines success. 'These' collective reference - beide elements essential. Can't cherry-pick - both required."
      },
      {
        id: "cohes_9",
        question: "She mentioned two concerns: cost and time. The _____ is more critical than the _____.",
        translation: "(Wspomniała dwa obawy: koszt i czas. To drugie jest bardziej krytyczne niż to pierwsze)",
        options: ["latter / former", "former / latter", "second / first", "last / first"],
        correct: "latter / former",
        explanation: "'Latter more critical than former' prioritizes! Time (second) > cost (first) в importance. To comparative assessment using positional reference. Formal comparison structure - elegant ranking без naming. Professional priority discussion."
      },
      {
        id: "cohes_10",
        question: "The above information is confidential. Please do not share _____ with anyone else.",
        translation: "(Powyższa informacja jest poufna. Proszę nie dzielić się tym z nikim innym)",
        options: ["it", "this", "these", "them"],
        correct: "it",
        explanation: "'The above' + singular 'it'! 'Above' refers до previously stated info (singular collective). Security instruction. To confidentiality directive - protecting sensitive data. 'It' pronoun maintains reference до 'information' mentioned - clear backward connection maintaining topic focus."
      },
      {
        id: "cohes_11",
        question: "The plan has risks, but _____ benefits outweigh them significantly in analysis.",
        translation: "(Plan ma ryzyka, але jego korzyści przeważają je znacząco w analizie)",
        options: ["its", "it's", "their", "his"],
        correct: "its",
        explanation: "'Its benefits' possessive reference! Plan's benefits (belonging до plan). Possessive pronoun maintaining subject. To cost-benefit analysis - positives exceed negatives. 'Its' connects benefits explicitly до plan - showing advantages belong до same proposal containing risks."
      },
      {
        id: "cohes_12",
        question: "We have two options: wait or act now. I prefer _____ because time is running out.",
        translation: "(Mamy dwie opcje: czekać lub działać teraz. Wolę to drugie bo czas się kończy)",
        options: ["the latter", "the former", "the last", "the second"],
        correct: "the latter",
        explanation: "'The latter' = second option (act now)! Urgency preference - immediate action. Formal choice indication. To decision communication - selecting від presented alternatives. 'Latter' elegant - avoids repeating 'act now' while staying absolutely clear which chosen."
      },
      {
        id: "cohes_13",
        question: "Climate change poses serious threats. Addressing _____ requires global cooperation urgently.",
        translation: "(Zmiana klimatu stwarza poważne zagrożenia. Adresowanie tego wymaga globalnej współpracy pilnie)",
        options: ["this", "these", "it", "them"],
        correct: "this",
        explanation: "'This' refers до climate change issue! Singular demonstrative для major topic. To policy statement - problem identification leading до solution requirement. 'This' maintains focus - keeping climate change като subject while discussing response needs."
      },
      {
        id: "cohes_14",
        question: "_____ problems mentioned earlier need immediate attention and cannot be ignored longer.",
        translation: "(Te problemy wspomniane wcześniej potrzebują natychmiastowej uwagi i nie mogą być ignorowane dłużej)",
        options: ["The", "This", "That", "These"],
        correct: "The",
        explanation: "'The problems mentioned earlier' backward reference! 'The' + past participle creates specific reference. Identified earlier, now characterizing. To follow-up statement - returning до previous topics. 'The... mentioned' structure precisely recalls earlier discussion points."
      },
      {
        id: "cohes_15",
        question: "Innovation and adaptation are essential. Companies lacking _____ will struggle to survive.",
        translation: "(Innowacja i adaptacja są niezbędne. Firmy которym brakuje tego będą miały problem z przetrwaniem)",
        options: ["these", "this", "those", "that"],
        correct: "these",
        explanation: "'Lacking these' refers до both qualities! Innovation + adaptation (оба required). Collective reference. To business survival thesis - both essential. 'These' encompasses paired requirements - firms need BOTH не just one. Dual necessity emphasized через plural reference."
      }
    ]
  },

  reported_speech_advanced: {
    name: "Mowa zależna - zaawansowana",
    description: "Complex reporting with modals and perfect",
    icon: MessageSquare,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "rep_adv_1",
        question: "She said she _____ help me if I needed it urgently during project.",
        translation: "(Powiedziała że pomoże mi jeśli będę tego potrzebował pilnie podczas projektu)",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'Would help' в reported speech! Direct: 'I WILL help' → reported: 'she WOULD help'. Will shifts до would в past reporting. To о promise made - commitment stated. Backshift rule: present/future modal становятся past equivalents в indirect speech."
      },
      {
        id: "rep_adv_2",
        question: "He told me he _____ already _____ the book before the movie came out.",
        translation: "(Powiedział mi że już przeczytał książkę zanim film wyszedł)",
        options: ["had / read", "has / read", "have / read", "will / read"],
        correct: "had / read",
        explanation: "'Had read' backshift від present perfect! Direct: 'I HAVE read' → reported: 'he HAD read'. Perfect becomes past perfect. To о prior experience - book перед film. Double past: told (past) + had read (earlier past) - layered времена в reporting."
      },
      {
        id: "rep_adv_3",
        question: "They mentioned they _____ be arriving late due to unexpected traffic delays today.",
        translation: "(Wspomnieli że mogą przybyć późno z powodu nieoczekiwanych opóźnień w ruchu dzisiaj)",
        options: ["might", "may", "can", "will"],
        correct: "might",
        explanation: "'Might' от 'may' в reporting! Direct: 'We MAY be late' → reported: 'they MIGHT be late'. May shifts до might. To о possibility communicated - warning о potential delay. Modal backshift maintains uncertainty while reporting it."
      },
      {
        id: "rep_adv_4",
        question: "She said she _____ been working on the project for three weeks already at that point.",
        translation: "(Powiedziała że pracuje над projektem już przez trzy tygodnie в tamtym momencie)",
        options: ["had", "has", "have", "will have"],
        correct: "had",
        explanation: "'Had been working' continuous perfect backshift! Direct: 'I HAVE been working' → reported: 'she HAD been working'. Perfect continuous становится past perfect continuous. To duration report - accumulated time communicated. Maintains continuity while shifting tense для reporting."
      },
      {
        id: "rep_adv_5",
        question: "He claimed he _____ never seen anything like that before in his entire life!",
        translation: "(Twierdził że nigdy nie widział czegoś takiego wcześniej w całym swoim życiu!)",
        options: ["had", "has", "have", "will have"],
        correct: "had",
        explanation: "'Had never seen' experiential perfect backshift! Direct: 'I HAVE never seen' → reported: 'he HAD never seen'. Lifetime experience report. To о unprecedented encounter - claiming uniqueness. Past perfect maintains experiential perfect sense через reporting distance."
      },
      {
        id: "rep_adv_6",
        question: "She asked if I _____ help her with the difficult homework assignment later.",
        translation: "(Zapytała czy mógłbym jej pomóc з trudnym zadaniem domowym później)",
        options: ["could", "can", "will", "would"],
        correct: "could",
        explanation: "'Could help' reported ability question! Direct: 'CAN you help?' → reported: 'if I COULD help'. Can shifts до could. To polite request reported - asking о availability. Modal backshift maintains politeness level через reporting."
      },
      {
        id: "rep_adv_7",
        question: "They said the meeting _____ start at 9 AM sharp tomorrow morning without delay.",
        translation: "(Powiedzieli że spotkanie zacznie się o 9 rano jutro rano bez opóźnienia)",
        options: ["would", "will", "can", "may"],
        correct: "would",
        explanation: "'Would start' future в past context! Direct: 'Meeting WILL start' → reported: 'WOULD start'. Future timing від past perspective. To communicating schedule - reporting planned time. Future backshifts до conditional в past reporting frame."
      },
      {
        id: "rep_adv_8",
        question: "He mentioned he _____ be interested in joining our team if conditions were right.",
        translation: "(Wspomniał że mógłby być zainteresowany dołączeniem до naszego zespołu jeśli warunki były odpowiednie)",
        options: ["might", "may", "can", "will"],
        correct: "might",
        explanation: "'Might be interested' conditional possibility! Direct: 'I MAY be interested' → reported: 'MIGHT be interested'. Qualified interest. To recruitment conversation - conditional willingness expressed. Modal shift maintains tentativeness - interest exists але conditional."
      },
      {
        id: "rep_adv_9",
        question: "She explained that she _____ finished the report by Friday if given enough resources.",
        translation: "(Wyjaśniła że skończy raport do piątku jeśli dany wystarczające zasoby)",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'Would finish' conditional completion! Direct: 'I WILL finish if...' → reported: 'WOULD finish if...'. Conditional promise. To conditional commitment - delivery contingent на support. Future conditional становится past conditional в reporting - maintains dependency structure."
      },
      {
        id: "rep_adv_10",
        question: "They told us we _____ to arrive at least 30 minutes early for check-in.",
        translation: "(Powiedzieli nam że powinniśmy przybyć przynajmniej 30 minut wcześniej на odprawę)",
        options: ["had", "have", "must", "should"],
        correct: "had",
        explanation: "'Had to arrive' necessity reporting! Direct: 'You HAVE TO arrive' → reported: 'we HAD TO'. Obligation shift. To travel instructions - communicating requirements. 'Have to' становится 'had to' maintaining necessity sense через tense change."
      },
      {
        id: "rep_adv_11",
        question: "He said he _____ been living in Spain when the event happened years ago.",
        translation: "(Powiedział że mieszkał w Hiszpanii kiedy wydarzenie się stało lata temu)",
        options: ["had", "has", "have", "will have"],
        correct: "had",
        explanation: "'Had been living' past continuous perfect! Direct: 'I WAS living' → reported: 'HAD been living'. Continuous past становится past perfect continuous. To alibí statement - establishing whereabouts during event. Location в time reported через double past structure."
      },
      {
        id: "rep_adv_12",
        question: "She warned that if we didn't hurry, we _____ miss the last train home.",
        translation: "(Ostrzegła że jeśli się nie pospieszymy, przegapimy ostatni pociąg додому)",
        options: ["would", "will", "can", "may"],
        correct: "would",
        explanation: "'Would miss' conditional consequence reporting! Direct: 'You WILL miss' → reported: 'we WOULD miss'. Warning communicated. To urgent advice reported - time sensitivity. Future consequence в warning становится conditional в reporting - maintains urgency."
      },
      {
        id: "rep_adv_13",
        question: "He insisted that he _____ never said anything like that to anyone at meeting.",
        translation: "(Upierał się że nigdy nie powiedział czegoś takiego nikomu на spotkaniu)",
        options: ["had", "has", "have", "will have"],
        correct: "had",
        explanation: "'Had never said' denial reporting! Direct: 'I HAVE never said' → reported: 'HAD never said'. Defensive statement. To refuting accusation - denying words. Perfect backshift maintains experiential never - protesting innocence через past perfect."
      },
      {
        id: "rep_adv_14",
        question: "She promised she _____ call me back as soon as she arrived home safely.",
        translation: "(Obiecała że oddzwoni jak tylko dotrze додому bezpiecznie)",
        options: ["would", "will", "can", "could"],
        correct: "would",
        explanation: "'Would call back' future commitment! Direct: 'I WILL call' → reported: 'WOULD call'. Promise timing. To commitment communication - expected callback. Future obligation в promise становится conditional в reporting - maintains binding nature через shift."
      },
      {
        id: "rep_adv_15",
        question: "They announced that the event _____ been cancelled due to bad weather conditions.",
        translation: "(Ogłosili że wydarzenie zostało odwołane z powodu złych warunków pogodowych)",
        options: ["had", "has", "have", "will have"],
        correct: "had",
        explanation: "'Had been cancelled' recent past perfect! Direct: 'The event HAS been cancelled' → reported: 'HAD been'. Cancellation announcement. To disappointing news communication - weather forced decision. Present perfect announcement становится past perfect в formal reporting - maintaining recent completion sense."
      }
    ]
  }
};

export default part25Categories;