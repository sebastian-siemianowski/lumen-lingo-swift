/**
 * POLISH → ENGLISH GRAMMAR - PART 27
 * 4 categories, 15 questions each - Fine-tuned distinctions
 */

import { Eye, Volume2, Hand, Timer } from "lucide-react";

export const part27Categories = {
  sensory_verbs: {
    name: "Czasowniki zmysłowe",
    description: "Look/sound/smell/feel/taste + adjective/like",
    icon: Eye,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "sens_1",
        question: "This cake _____ delicious - I can't wait to taste it at the party!",
        translation: "(To ciasto wygląda pysznie - nie mogę się doczekać żeby je skosztować na imprezie!)",
        options: ["looks", "looks like", "is looking", "look"],
        correct: "looks",
        explanation: "'Look + adjective' opisuje appearance! 'Looks delicious' - wygląda smacznie. Nie potrzebujesz 'like' z adjectives - tylko z nouns. To visual assessment - eyes predicting taste. Sensory verbs + adjective pattern dla describing perceived qualities."
      },
      {
        id: "sens_2",
        question: "Your idea _____ a perfect solution to our complicated ongoing problem!",
        translation: "(Twój pomysł brzmi jak idealne rozwiązanie dla naszego skomplikowanego trwającego problemu!)",
        options: ["sounds like", "sounds", "is sounding", "sound"],
        correct: "sounds like",
        explanation: "'Sound like + noun' dla comparisons! 'Sounds like a solution' - przypomina/seems to be. Z noun phrase potrzebujesz 'like'. To enthusiastic evaluation - idea promising. 'Sound like' pattern comparing idea до category (solution) - suggesting equivalence."
      },
      {
        id: "sens_3",
        question: "The soup _____ amazing - what spices did you use in this recipe?",
        translation: "(Zupa pachnie niesamowicie - jakich przypraw użyłeś w tym przepisie?)",
        options: ["smells", "smells like", "is smelling", "smell"],
        correct: "smells",
        explanation: "'Smell + adjective' dla aromatic quality! 'Smells amazing' - zapach wspaniały. Direct adjective без 'like'. To culinary appreciation - nose predicting flavor. Sensory assessment pattern - describing scent quality directly через adjective."
      },
      {
        id: "sens_4",
        question: "This fabric _____ silk, but actually it's just high-quality synthetic material.",
        translation: "(Ten materiał czuje się jak jedwab, ale faktycznie to tylko wysokiej jakości syntetyk)",
        options: ["feels like", "feels", "is feeling", "feel"],
        correct: "feels like",
        explanation: "'Feel like + noun' dla tactile similarity! Przypomina jedwab przez texture ale nie jest. Z noun (silk) potrzebujesz 'like'. To о deceptive quality - imitation convincing. 'Feel like' comparing texture до known reference - assessing через touch similarity."
      },
      {
        id: "sens_5",
        question: "The coffee _____ too bitter - I need to add some sugar to sweeten it.",
        translation: "(Kawa smakuje zbyt gorzko - muszę dodać cukru żeby ją osłodzić)",
        options: ["tastes", "tastes like", "is tasting", "taste"],
        correct: "tastes",
        explanation: "'Taste + adjective' opisuje flavor! 'Tastes bitter' - direct flavor description. Adjective без 'like'. To adjusting recipe - flavor correction needed. Sensory verb + adjective pattern - describing gustatory perception directly."
      },
      {
        id: "sens_6",
        question: "You _____ tired today - did you sleep well last night at all?",
        translation: "(Wyglądasz zmęczony dzisiaj - czy spałeś dobrze wczoraj w nocy w ogóle?)",
        options: ["look", "look like", "are looking", "looks"],
        correct: "look",
        explanation: "'Look + adjective' dla observed state! 'Look tired' - appearance suggests exhaustion. Adjective direct. To concerned observation - visible fatigue prompting question. Visual assessment of condition - face/posture revealing tiredness level."
      },
      {
        id: "sens_7",
        question: "This situation _____ trouble - I think we should be very careful now.",
        translation: "(Ta sytuacja brzmi jak kłopoty - myślę że powinniśmy być bardzo ostrożni teraz)",
        options: ["sounds like", "sounds", "is sounding", "sound"],
        correct: "sounds like",
        explanation: "'Sound like + noun' dla warning assessment! Przypomina trouble (noun) - alarm bells. Z noun phrase 'like' required. To cautionary observation - sensing danger. Pattern comparing situation до category (trouble) - identifying threat type."
      },
      {
        id: "sens_8",
        question: "The music _____ too loud - could you please turn down the volume a bit?",
        translation: "(Muzyka brzmi zbyt głośno - czy mógłbyś proszę ściszyć trochę?)",
        options: ["sounds", "sounds like", "is sounding", "sound"],
        correct: "sounds",
        explanation: "'Sound + adjective' dla volume/quality! 'Sounds loud' - direct assessment. Adjective без 'like'. To polite complaint - requesting adjustment. Auditory perception described directly - adjective characterizes how sounds."
      },
      {
        id: "sens_9",
        question: "Something _____ burning in the kitchen - please check the stove immediately!",
        translation: "(Coś pachnie paleniem w kuchni - proszę sprawdź kuchenkę natychmiast!)",
        options: ["smells like it's", "smells", "is smelling like", "smell"],
        correct: "smells like it's",
        explanation: "'Smell like + clause' dla suspected state! Pachnie JAKBY paliło się (clause з verb). To alarm - potential danger detected. 'Smell like' + full clause (it's burning) complex но necessary для describing suspected ongoing action - nose detecting problem."
      },
      {
        id: "sens_10",
        question: "The plan _____ risky to me - maybe we should think more carefully first?",
        translation: "(Plan wydaje mi się ryzykowny - może powinniśmy pomyśleć bardziej starannie najpierw?)",
        options: ["seems", "seems like", "is seeming", "seem"],
        correct: "seems",
        explanation: "'Seem + adjective' dla personal perception! 'Seems risky' - subjective assessment. Adjective без 'like'. To expressing caution - personal evaluation prompting reconsideration. Opinion verb + adjective - sharing individual perception potentially differing від others."
      },
      {
        id: "sens_11",
        question: "Your new haircut _____ great on you - it really suits your face shape!",
        translation: "(Twoja nowa fryzura wygląda świetnie na tobie - naprawdę pasuje do kształtu twojej twarzy!)",
        options: ["looks", "looks like", "is looking", "look"],
        correct: "looks",
        explanation: "'Look + adjective' dla style assessment! 'Looks great' - appearance compliment. Direct adjective. To positive feedback - affirming change. Visual aesthetic judgment - complimenting successful transformation через appearance verb + positive adjective."
      },
      {
        id: "sens_12",
        question: "This dish _____ chicken, but it's actually made from plant-based tofu protein.",
        translation: "(To danie smakuje jak kurczak, ale faktycznie jest zrobione z roślinnego białka tofu)",
        options: ["tastes like", "tastes", "is tasting", "taste"],
        correct: "tastes like",
        explanation: "'Taste like + noun' dla flavor similarity! Przypomina kurczaka (noun) smakiem. Z noun 'like' needed. To о meat substitutes - convincing imitation. Gustatory comparison - successful mimicry of familiar flavor przez alternative ingredient."
      },
      {
        id: "sens_13",
        question: "The room _____ cold - should I turn on the heating system for comfort?",
        translation: "(W pokoju czuje się zimno - czy powinienem włączyć ogrzewanie dla komfortu?)",
        options: ["feels", "feels like", "is feeling", "feel"],
        correct: "feels",
        explanation: "'Feel + adjective' dla ambient sensation! 'Feels cold' - temperature perception. Adjective direct. To comfort check - suggesting adjustment. Environmental sensation - describing physical atmosphere через tactile perception verb."
      },
      {
        id: "sens_14",
        question: "Your explanation _____ confusing to most students - could you simplify it please?",
        translation: "(Twoje wyjaśnienie wydaje się mylące dla większości studentów - czy mógłbyś je uprościć proszę?)",
        options: ["sounds", "sounds like", "is sounding", "sound"],
        correct: "sounds",
        explanation: "'Sound + adjective' dla communication clarity! 'Sounds confusing' - comprehension assessment. Adjective без 'like'. To pedagogical feedback - requesting clearer explanation. Auditory/comprehension judgment - describing how explanation comes across до listeners."
      },
      {
        id: "sens_15",
        question: "Her story _____ something from a fantasy adventure novel or fairy tale!",
        translation: "(Jej historia brzmi jak coś z fantastycznej powieści przygodowej lub bajki!)",
        options: ["sounds like", "sounds", "is sounding", "sound"],
        correct: "sounds like",
        explanation: "'Sound like + noun phrase' dla incredible comparison! Przypomina fiction - unbelievable. To expressing amazement - reality stranger than fiction. Comparison до literary genre suggesting extraordinariness - too amazing для normalny life."
      }
    ]
  },

  causative_make_let_have_get: {
    name: "Kauzatywne make/let/have/get",
    description: "Make him do, let her go, have it done, get them to help",
    icon: Hand,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "caus_mlhg_1",
        question: "My parents made me _____ my room before I could go out to play with friends.",
        translation: "(Moi rodzice zmusili mnie żeby posprzątać pokój zanim mogłem wyjść bawić się z przyjaciółmi)",
        options: ["clean", "to clean", "cleaning", "cleaned"],
        correct: "clean",
        explanation: "'Make + object + base verb' dla forcing! Zmuszenie - no choice given. To parenting rule - chores before play. 'Make' strongest causative - compulsion implied. Base verb (без 'to') po 'make' shows direct force - requirement не request."
      },
      {
        id: "caus_mlhg_2",
        question: "Please let me _____ - I promise I'll be back before midnight tonight!",
        translation: "(Proszę pozwól mi iść - obiecuję że wrócę przed północą dziś wieczorem!)",
        options: ["go", "to go", "going", "gone"],
        correct: "go",
        explanation: "'Let + object + base verb' dla permission! Pozwolenie - giving freedom. To teenager negotiation - seeking approval. 'Let' grants permission - less forceful niż 'make'. Base verb (без 'to') pokazuje allowed action - requesting liberty."
      },
      {
        id: "caus_mlhg_3",
        question: "I had my assistant _____ the documents to all board members yesterday.",
        translation: "(Kazałem mojemu asystentowi wysłać dokumenty do wszystkich członków zarządu wczoraj)",
        options: ["send", "to send", "sending", "sent"],
        correct: "send",
        explanation: "'Have + object + base verb' dla authoritative instruction! Boss-subordinate - delegating task. To work assignment - using authority. 'Have' causative shows position power - able до command. Base verb (без 'to') indicates direct instruction від superior."
      },
      {
        id: "caus_mlhg_4",
        question: "She got her friends _____ her move the heavy furniture upstairs carefully.",
        translation: "(Namówiła swoich przyjaciół żeby pomogli jej przenieść ciężkie meble na górę ostrożnie)",
        options: ["to help", "help", "helping", "helped"],
        correct: "to help",
        explanation: "'Get + object + infinitive' dla persuasion! Convinced - required effort. To peer cooperation - requesting favor. 'Get' implies persuasion was needed - harder niż 'have' (authority) або 'let' (permission). Infinitive (з 'to') shows obtained agreement - successful convincing."
      },
      {
        id: "caus_mlhg_5",
        question: "The teacher made us _____ the entire long chapter again for better understanding.",
        translation: "(Nauczyciel zmusił nas żeby przeczytać cały długi rozdział ponownie dla lepszego zrozumienia)",
        options: ["read", "to read", "reading", "reads"],
        correct: "read",
        explanation: "'Made us read' compulsory re-reading! No arguing - teacher's order. To pedagogical requirement - ensuring comprehension. 'Make' shows authority exercise - students must comply. Base verb emphasizes non-negotiable nature - educational directive."
      },
      {
        id: "caus_mlhg_6",
        question: "My boss won't let me _____ vacation time during this busy season unfortunately.",
        translation: "(Mój szef nie pozwoli mi wziąć urlopu podczas tego zajętego sezonu niestety)",
        options: ["take", "to take", "taking", "took"],
        correct: "take",
        explanation: "'Won't let me take' denial of permission! Refused request - work demands. To о work-life conflict - personal needs vs business needs. Negative 'let' shows permission withheld - boss blocking vacation during peak period."
      },
      {
        id: "caus_mlhg_7",
        question: "I'll have someone _____ that broken window as soon as possible tomorrow.",
        translation: "(Każę komuś naprawić to zbite okno tak szybko jak możliwe jutro)",
        options: ["fix", "to fix", "fixing", "fixed"],
        correct: "fix",
        explanation: "'Have someone fix' delegating repair! Arranging для other person do work. To maintenance management - coordinating service. 'Have' causative - using influence до get action done. Base verb shows you're arranging але не doing yourself."
      },
      {
        id: "caus_mlhg_8",
        question: "She finally got her parents _____ her study abroad for a semester in Europe.",
        translation: "(W końcu namówiła swoich rodziców żeby pozwolić jej studiować za granicą przez semestr w Europie)",
        options: ["to let", "let", "letting", "lets"],
        correct: "to let",
        explanation: "'Got parents to let' double causative! Persuaded (get) them TO grant permission (let). To о convincing reluctant guardians. 'Get' + infinitive shows effort needed - wasn't automatic approval. Persistence achieving parental consent."
      },
      {
        id: "caus_mlhg_9",
        question: "Don't make me _____ - this movie is supposed to be a happy comedy!",
        translation: "(Nie każ mi płakać - ten film ma być szczęśliwą komedią!)",
        options: ["cry", "to cry", "crying", "cried"],
        correct: "cry",
        explanation: "'Make me cry' emotional causation! Film so sad że forces tears - involuntary. To о unexpected emotional impact. 'Make' shows power - content compelling reaction. Base verb emphasizes irresistible effect - comedy label misleading."
      },
      {
        id: "caus_mlhg_10",
        question: "The security guard let us _____ early from the building due to emergency situation.",
        translation: "(Ochroniarz pozwolił nam wyjść wcześnie z budynku z powodu sytuacji awaryjnej)",
        options: ["leave", "to leave", "leaving", "left"],
        correct: "leave",
        explanation: "'Let us leave' granting exit permission! Unusual circumstance - early departure allowed. To emergency protocol - flexibility. 'Let' + base verb shows permission granted - normally restricted але circumstances justified exception."
      },
      {
        id: "caus_mlhg_11",
        question: "I got my brother _____ me with my difficult math homework assignment.",
        translation: "(Namówiłem mojego brata żeby mi pomógł z moim trudnym zadaniem matematycznym)",
        options: ["to help", "help", "helping", "helped"],
        correct: "to help",
        explanation: "'Got brother to help' successful persuasion! Convinced do assist - wasn't automatic. To sibling cooperation - requesting smarter brother's help. 'Get' + infinitive показує що required asking - help wasn't volunteered але obtained через request."
      },
      {
        id: "caus_mlhg_12",
        question: "The funny clown made all the children _____ with his silly entertaining tricks.",
        translation: "(Zabawny klaun sprawił że wszystkie dzieci się śmiały jego głupimi zabawnymi sztuczkami)",
        options: ["laugh", "to laugh", "laughing", "laughed"],
        correct: "laugh",
        explanation: "'Made children laugh' causing joy! Entertainment's purpose - producing laughter. To performance success - achieving goal. 'Make' causative shows effectiveness - humor compelling reaction. Base verb emphasizes direct causal power - jokes irresistibly funny."
      },
      {
        id: "caus_mlhg_13",
        question: "Please don't let the dog _____ on the new expensive furniture in living room!",
        translation: "(Proszę nie pozwalaj psu skakać na nowych drogich meblach w salonie!)",
        options: ["jump", "to jump", "jumping", "jumped"],
        correct: "jump",
        explanation: "'Don't let dog jump' preventing behavior! Withholding permission - protecting furniture. To household rule - training pet. Negative 'let' + base verb denies permission - establishing boundary. Protecting investment від damage."
      },
      {
        id: "caus_mlhg_14",
        question: "The medicine will make you _____ drowsy - don't drive after taking it today!",
        translation: "(Lekarstwo sprawi że poczujesz się senny - nie prowadź po wzięciu go dzisiaj!)",
        options: ["feel", "to feel", "feeling", "felt"],
        correct: "feel",
        explanation: "'Make you feel' causing sensation! Side effect - drug-induced drowsiness. To warning - safety precaution. 'Make' causative with sensation verb - medication creating specific physical state. Base verb shows inevitable effect - chemical causation."
      },
      {
        id: "caus_mlhg_15",
        question: "I finally got him _____ the truth about what really happened that night.",
        translation: "(W końcu nakłoniłem go żeby powiedzieć prawdę о tym co naprawdę się stało tej nocy)",
        options: ["to tell", "tell", "telling", "told"],
        correct: "to tell",
        explanation: "'Got him to tell' successful extraction! Persuaded do confess - wasn't willing initially. To interrogation success - breaking resistance. 'Get' + infinitive shows effort required - truth не voluntarily offered але obtained przez persistent questioning."
      }
    ]
  },

  time_expressions_until_by: {
    name: "Wyrażenia czasowe - until/by/by the time",
    description: "Subtelne różnice w określaniu czasu",
    icon: Timer,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "time_ub_1",
        question: "I'll wait here _____ you come back from the store with groceries.",
        translation: "(Poczekam tutaj aż wrócisz ze sklepu z zakupami)",
        options: ["until", "by", "by the time", "till"],
        correct: "until",
        explanation: "'Until' oznacza czekanie AŻ DO momentu! Continuous waiting ending при specific event (return). To commitment - won't leave before. 'Until' dla describing duration że extends UP TO point - waiting period defined przez endpoint action."
      },
      {
        id: "time_ub_2",
        question: "Please finish the report _____ Friday deadline - we need it for the meeting.",
        translation: "(Proszę skończ raport do piątku - potrzebujemy go na spotkanie)",
        options: ["by", "until", "by the time", "till"],
        correct: "by",
        explanation: "'By Friday' oznacza NIE PÓŹNIEJ niż! Deadline - complete before lub на Friday. To work requirement - time limit. 'By' shows endpoint - can finish earlier але not later. Deadline language - establishing absolute latest acceptable completion time."
      },
      {
        id: "time_ub_3",
        question: "_____ we arrived at the cinema, the movie had already started unfortunately.",
        translation: "(Zanim przybyliśmy do kina, film już się zaczął niestety)",
        options: ["By the time", "Until", "By", "Till"],
        correct: "By the time",
        explanation: "'By the time' pokazuje że jedna akcja finished PRZED drugą! Film started (earlier) zanim arrived (later). To о missed beginning - late arrival. 'By the time' + past perfect pattern - one action completed przed inną past action occurred."
      },
      {
        id: "time_ub_4",
        question: "She studied _____ midnight trying to prepare for the important exam tomorrow.",
        translation: "(Uczyła się do północy próbując przygotować się na ważny egzamin jutro)",
        options: ["until", "by", "by the time", "for"],
        correct: "until",
        explanation: "'Until midnight' continuous activity! Kept studying UP TO that hour - then stopped. To dedication - late-night cramming. 'Until' показує sustained action reaching endpoint - describing duration extending до specific moment before ceasing."
      },
      {
        id: "time_ub_5",
        question: "I need to submit my application _____ Monday morning to be considered.",
        translation: "(Muszę wysłać moją aplikację do poniedziałkowego ranka żeby być rozważanym)",
        options: ["by", "until", "by the time", "till"],
        correct: "by",
        explanation: "'By Monday morning' absolute deadline! Latest acceptable submission. To administrative requirement - no extensions. 'By' establishes cut-off - anything after rejected. Competitive process - timely submission essential для consideration."
      },
      {
        id: "time_ub_6",
        question: "The store is open _____ 9 PM every day including weekends for shopping.",
        translation: "(Sklep jest otwarty до 21 każdego dnia włącznie z weekendami на zakupy)",
        options: ["until", "by", "by the time", "for"],
        correct: "until",
        explanation: "'Until 9 PM' describes operating hours! Open continuously UP TO closing time. To business hours - availability window. 'Until' для continuous state (being open) extending до endpoint (closing). Shopping window information."
      },
      {
        id: "time_ub_7",
        question: "_____ you finish reading this book, I'll have finished three others already!",
        translation: "(Zanim skończysz czytać tę książkę, ja już skończę trzy inne!)",
        options: ["By the time", "Until", "By", "When"],
        correct: "By the time",
        explanation: "'By the time you finish' comparison of completion! Я faster - will complete more. To competitive playful - comparing speeds. 'By the time' shows one person's future perfect achievement relative до другого person's simple future - progress comparison."
      },
      {
        id: "time_ub_8",
        question: "You must pay the bill _____ the end of this month to avoid late fees.",
        translation: "(Musisz zapłacić rachunek do końca tego miesiąca żeby uniknąć opłat за opóźnienie)",
        options: ["by", "until", "by the time", "for"],
        correct: "by",
        explanation: "'By the end' latest payment date! Deadline avoiding penalties. To financial obligation - timely payment. 'By' establishes absolute latest - can pay earlier але after triggers fees. Administrative deadline language."
      },
      {
        id: "time_ub_9",
        question: "Please stay seated _____ the seatbelt sign turns off for your safety.",
        translation: "(Proszę pozostań w miejscu aż znak pasów zgaśnie dla twojego bezpieczeństwa)",
        options: ["until", "by", "by the time", "for"],
        correct: "until",
        explanation: "'Until sign turns off' continuous requirement! Remain seated UP TO release moment. To airline safety - following instructions. 'Until' dla sustained state (seated) що must continue до specific signal (sign off). Flight safety protocol."
      },
      {
        id: "time_ub_10",
        question: "I promise to have the work done _____ tomorrow afternoon latest absolutely.",
        translation: "(Obiecuję mieć pracę zrobioną до jutra po południu najpóźniej absolutnie)",
        options: ["by", "until", "by the time", "for"],
        correct: "by",
        explanation: "'By tomorrow afternoon' commitment deadline! Completion promised no later than. To work promise - establishing delivery time. 'By' shows maximum timeframe - может finish earlier але guaranteed not later. Professional commitment language."
      },
      {
        id: "time_ub_11",
        question: "_____ the police arrived, the thieves had already escaped with stolen goods.",
        translation: "(Zanim policja przybyła, złodzieje już uciekli z ukradzionymi rzeczami)",
        options: ["By the time", "Until", "By", "When"],
        correct: "By the time",
        explanation: "'By the time police arrived' pokazuje sequence! Escape (earlier past perfect) przed arrival (later past). To о criminal timing - got away. 'By the time' + past perfect pattern - first action completed przed second began."
      },
      {
        id: "time_ub_12",
        question: "The offer is valid _____ the end of this week only - act fast!",
        translation: "(Oferta jest ważna do końca tego tygodnia tylko - działaj szybko!)",
        options: ["until", "by", "by the time", "for"],
        correct: "until",
        explanation: "'Valid until' describes continuation! Offer remains good UP TO deadline. To marketing urgency - limited time. 'Until' shows sustained validity extending до expiration - после tego invalid. Creating scarcity dla motivating action."
      },
      {
        id: "time_ub_13",
        question: "I'll be finished _____ 6 PM, so we can meet for dinner after that.",
        translation: "(Skończę do 18, więc możemy się spotkać на kolację після tego)",
        options: ["by", "until", "by the time", "till"],
        correct: "by",
        explanation: "'Finished by 6 PM' completion promise! Done не later than - може earlier. To scheduling coordination - establishing availability. 'By' shows flexibility (before or at) while guaranteeing latest completion - enabling dinner planning."
      },
      {
        id: "time_ub_14",
        question: "She waited patiently _____ all guests had arrived before starting the presentation.",
        translation: "(Czekała cierpliwie aż wszyscy goście przybyli przed rozpoczęciem prezentacji)",
        options: ["until", "by", "by the time", "for"],
        correct: "until",
        explanation: "'Waited until all arrived' holding для completeness! Delayed start UP TO full attendance. To courtesy - ensuring no one misses beginning. 'Until' describes waiting extending до condition met (all present) - inclusivity practice."
      },
      {
        id: "time_ub_15",
        question: "_____ I realized my mistake, it was already too late to fix anything!",
        translation: "(Zanim zdałem sobie sprawę z mojego błędu, było już za późno żeby cokolwiek naprawić!)",
        options: ["By the time", "Until", "By", "When"],
        correct: "By the time",
        explanation: "'By the time I realized' delayed awareness! Discovery (later) после damage done (earlier). To regret о slow recognition. 'By the time' shows realization arrived після point где correction possible - timing tragedy. Too late discovery."
      }
    ]
  },

  adjective_preposition_patterns: {
    name: "Wzory przymiotnik + przyimek",
    description: "Good at, interested in, afraid of, excited about",
    icon: Volume2,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "adj_prep_1",
        question: "She's really good _____ mathematics and always gets top grades in tests.",
        translation: "(Jest naprawdę dobra z matematyki i zawsze dostaje najlepsze oceny w testach)",
        options: ["at", "in", "with", "on"],
        correct: "at",
        explanation: "'Good at' dla umiejętności! Zawsze 'at' z abilities/skills. To compliment - academic strength. Fixed pattern: good/bad/excellent/terrible AT (skill/activity). Nie 'good in' - 'at' standard для skill descriptions. Talent recognition."
      },
      {
        id: "adj_prep_2",
        question: "I'm very interested _____ learning about different cultures and traditions worldwide.",
        translation: "(Jestem bardzo zainteresowany uczeniem się о różnych kulturach i tradycjach na świecie)",
        options: ["in", "at", "about", "for"],
        correct: "in",
        explanation: "'Interested in' dla fascination! Zawsze 'in' - can't change. To expressing curiosity - intellectual appetite. Fixed collocation: interested IN (topic/activity). Не 'interested about' - 'in' exclusively для interest expression. Curiosity statement."
      },
      {
        id: "adj_prep_3",
        question: "Many people are afraid _____ spiders even though most are completely harmless.",
        translation: "(Wiele ludzi boi się pająków chociaż większość jest całkowicie nieszkodliwa)",
        options: ["of", "from", "about", "with"],
        correct: "of",
        explanation: "'Afraid of' dla fears! Zawsze 'of' - phobia pattern. To common fear - irrational але widespread. Fixed pattern: afraid/scared/terrified OF (threat/danger). Nie 'afraid from' - 'of' exclusively для fear objects. Arachnophobia example."
      },
      {
        id: "adj_prep_4",
        question: "We're really excited _____ our upcoming vacation trip to the tropical paradise!",
        translation: "(Jesteśmy naprawdę podekscytowani naszą nadchodzącą wycieczką wakacyjną до tropikalnego raju!)",
        options: ["about", "for", "of", "with"],
        correct: "about",
        explanation: "'Excited about' dla anticipation! Zawsze 'about' - future event enthusiasm. To vacation eagerness - positive expectation. Pattern: excited/enthusiastic/thrilled ABOUT (upcoming event). Не 'excited for' (less common) - 'about' standard для expressing anticipation."
      },
      {
        id: "adj_prep_5",
        question: "He's always late _____ important meetings - it's becoming a serious problem.",
        translation: "(Zawsze się spóźnia na ważne spotkania - to staje się poważnym problemem)",
        options: ["for", "to", "at", "on"],
        correct: "for",
        explanation: "'Late for' wydarzenia! Zawsze 'for' z appointments/events. To complaint - chronic tardiness. Pattern: late FOR (meeting/class/appointment). Не 'late to' (można by walk TO но late FOR event). Punctuality issue."
      },
      {
        id: "adj_prep_6",
        question: "She's very proud _____ her daughter's academic achievements at university abroad.",
        translation: "(Jest bardzo dumna z osiągnięć akademickich swojej córki na uniwersytecie за granicą)",
        options: ["of", "about", "with", "for"],
        correct: "of",
        explanation: "'Proud of' dla accomplishments! Zawsze 'of' - pride object. To parental pride - celebrating success. Pattern: proud OF (achievement/person). Не 'proud about' - 'of' exclusively dla expressing pride. Family achievement celebration."
      },
      {
        id: "adj_prep_7",
        question: "I'm tired _____ waiting for changes that never seem to come at all!",
        translation: "(Jestem zmęczony czekaniem на zmiany które nigdy nie wydają się przychodzić wcale!)",
        options: ["of", "from", "with", "about"],
        correct: "of",
        explanation: "'Tired of' dla frustration! Exhausted BY (fed up). To expressing frustration - patience depleted. Pattern: tired/sick/weary OF (annoying situation). 'Tired of' + gerund classic dla complaints - worn out BY repeated disappointing experience."
      },
      {
        id: "adj_prep_8",
        question: "He's always complaining _____ his low salary but never looks for new jobs.",
        translation: "(Zawsze narzeka на swoją niską pensję але nigdy nie szuka nowych prac)",
        options: ["about", "of", "on", "for"],
        correct: "about",
        explanation: "'Complain about' dla grievances! Zawsze 'about' - topic of complaint. To frustration - criticizing без action. Pattern: complain ABOUT (problem/situation). Passive complaining - expressing dissatisfaction але не solving. Griping pattern."
      },
      {
        id: "adj_prep_9",
        question: "She's responsible _____ managing the entire project budget and timeline carefully.",
        translation: "(Jest odpowiedzialna за zarządzanie całym budżetem projektu i harmonogramem starannie)",
        options: ["for", "of", "to", "with"],
        correct: "for",
        explanation: "'Responsible for' accountability! Zawsze 'for' - duty object. To job description - area of control. Pattern: responsible FOR (task/area/person). Management responsibility - ownership of specific domain. Professional duties."
      },
      {
        id: "adj_prep_10",
        question: "I'm sorry _____ being late - traffic was absolutely terrible this morning rush.",
        translation: "(Przepraszam за spóźnienie - ruch był absolutnie okropny dziś rano)",
        options: ["for", "about", "of", "with"],
        correct: "for",
        explanation: "'Sorry for' + gerund для apologies! Zawsze 'for' z actions. To excuse - explaining lateness. Pattern: sorry FOR + gerund (action regretted). Apologizing dla specific behavior - traffic explanation softens но responsibility acknowledged."
      },
      {
        id: "adj_prep_11",
        question: "He's terrible _____ remembering names - he forgets immediately after introduction!",
        translation: "(Jest okropny w zapamiętywaniu imion - zapomina natychmiast по przedstawieniu!)",
        options: ["at", "in", "with", "for"],
        correct: "at",
        explanation: "'Terrible at' dla weak skills! Zawsze 'at' - inability pattern. To memory weakness - social awkwardness. Pattern: terrible/awful/bad AT (skill/activity). Opposite of 'good at' - same preposition для negative assessment. Skill deficiency."
      },
      {
        id: "adj_prep_12",
        question: "Are you ready _____ the challenging exam tomorrow morning at 9 AM?",
        translation: "(Czy jesteś gotowy на wymagający egzamin jutro rano о 9?)",
        options: ["for", "to", "with", "at"],
        correct: "for",
        explanation: "'Ready for' + noun! Zawsze 'for' z rzeczownikami. Alternatywa: 'ready to' + verb. To preparedness check - exam readiness. Pattern: ready FOR (event/challenge) або ready TO (action). Z noun używaj 'for' - checking preparation status."
      },
      {
        id: "adj_prep_13",
        question: "She's married _____ a famous successful doctor who works at the hospital.",
        translation: "(Jest zamężna за słynnym odnoszącym sukcesy lekarzem który pracuje w szpitalu)",
        options: ["to", "with", "for", "at"],
        correct: "to",
        explanation: "'Married to' spouse! Zawsze 'to' - relationship connection. To status description. Pattern: married TO (person). Не 'married with' (that's 'married with children' different meaning). Marital status - partner identification."
      },
      {
        id: "adj_prep_14",
        question: "I'm worried _____ my sick grandmother's health - she's been unwell for weeks.",
        translation: "(Martwię się о zdrowie mojej chorej babci - jest chora од tygodni)",
        options: ["about", "for", "of", "with"],
        correct: "about",
        explanation: "'Worried about' concern object! Zawsze 'about' - anxiety topic. To family concern - health monitoring. Pattern: worried/concerned/anxious ABOUT (problem/situation/person). Expressing care через worry - prolonged illness creating stress."
      },
      {
        id: "adj_prep_15",
        question: "He's famous _____ his incredible ability to solve complex problems quickly.",
        translation: "(Jest słynny z niesamowitej zdolności rozwiązywania złożonych problemów szybko)",
        options: ["for", "of", "about", "with"],
        correct: "for",
        explanation: "'Famous for' achievement! Zawsze 'for' - reason of fame. To recognition - known skill. Pattern: famous/known FOR (accomplishment/quality). Reputation earned - skill becoming signature. Public recognition của talent."
      }
    ]
  }
};

export default part27Categories;