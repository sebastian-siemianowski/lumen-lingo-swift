/**
 * POLISH → ENGLISH GRAMMAR - PART 28
 * 4 categories, 15 questions each - Command mastery
 */

import { MessageCircle, HelpCircle, ThumbsUp, List } from "lucide-react";

export const part28Categories = {
  reported_commands_requests: {
    name: "Polecenia i prośby w mowie zależnej",
    description: "Tell/ask/order/advise someone to do",
    icon: MessageCircle,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "rep_cmd_1",
        question: "She told me _____ quietly during the important presentation in conference room.",
        translation: "(Powiedziała mi żebym był cicho podczas ważnej prezentacji w sali konferencyjnej)",
        options: ["to be", "be", "being", "that be"],
        correct: "to be",
        explanation: "'Tell + object + infinitive' dla reported commands! Direct: 'Be quiet!' → reported: 'told me TO be quiet'. To о instruction communication - passing order. Infinitive (z 'to') structure standard dla reporting directives - capturing command essence."
      },
      {
        id: "rep_cmd_2",
        question: "The doctor advised him _____ smoking immediately for his serious health problems.",
        translation: "(Lekarz poradził mu żeby przestał palić natychmiast для jego poważnych problemów zdrowotnych)",
        options: ["to stop", "stop", "stopping", "that stop"],
        correct: "to stop",
        explanation: "'Advise + object + infinitive' dla professional recommendations! Medical counsel reported. To health directive - expert guidance. Pattern: advise/recommend/urge + person + TO + action. Professional advice structure - doctor's recommendation communicated."
      },
      {
        id: "rep_cmd_3",
        question: "My teacher asked me _____ the homework assignment again more carefully this time.",
        translation: "(Moja nauczycielka poprosiła mnie żebym zrobił zadanie domowe ponownie bardziej starannie tym razem)",
        options: ["to do", "do", "doing", "that do"],
        correct: "to do",
        explanation: "'Ask + object + infinitive' dla requests! Polite prosba - redo work. To feedback - quality improvement needed. Pattern: ask + person + TO + action. Educational request - teacher seeking better effort. Infinitive captures requested action."
      },
      {
        id: "rep_cmd_4",
        question: "The police ordered everyone _____ the building immediately due to bomb threat.",
        translation: "(Policja kazała wszystkim opuścić budynek natychmiast z powodu zagrożenia bombowego)",
        options: ["to leave", "leave", "leaving", "that leave"],
        correct: "to leave",
        explanation: "'Order + object + infinitive' dla authoritative commands! Emergency directive - compliance mandatory. To crisis evacuation. Pattern: order/command + people + TO + action. Authority exercise - law enforcement directive requiring immediate obedience."
      },
      {
        id: "rep_cmd_5",
        question: "She reminded me _____ my umbrella before leaving the house this morning.",
        translation: "(Przypomniała mi żebym wziął parasol przed wyjściem z domu dziś rano)",
        options: ["to take", "take", "taking", "that take"],
        correct: "to take",
        explanation: "'Remind + object + infinitive' dla helpful prompts! Memory assistance - preventing forgetfulness. To caring reminder. Pattern: remind + person + TO + action. Thoughtful help - ensuring preparedness. Infinitive shows reminded future action."
      },
      {
        id: "rep_cmd_6",
        question: "The sign warns visitors _____ careful on the slippery wet stairs outside.",
        translation: "(Znak ostrzega odwiedzających żeby byli ostrożni на śliskich mokrych schodach na zewnątrz)",
        options: ["to be", "be", "being", "that be"],
        correct: "to be",
        explanation: "'Warn + object + infinitive' dla safety alerts! Caution communication - preventing accidents. To public safety. Pattern: warn/caution + people + TO + action. Risk notification - sign advising prudence. Infinitive captures warned behavior."
      },
      {
        id: "rep_cmd_7",
        question: "My boss expects me _____ the report finished by Friday morning deadline.",
        translation: "(Mój szef oczekuje ode mnie żeby mieć raport skończony до piątkowego porannego terminu)",
        options: ["to have", "have", "having", "that have"],
        correct: "to have",
        explanation: "'Expect + object + infinitive' dla anticipated requirements! Boss's expectation - work obligation. To professional pressure. Pattern: expect + person + TO + deliver. Management expectations - defining subordinate responsibilities. Infinitive shows expected completion."
      },
      {
        id: "rep_cmd_8",
        question: "She encouraged me _____ for the challenging manager position at the company.",
        translation: "(Zachęciła mnie żebym aplikował на wymagające stanowisko menedżera w firmie)",
        options: ["to apply", "apply", "applying", "that apply"],
        correct: "to apply",
        explanation: "'Encourage + object + infinitive' dla motivation! Supportive push - confidence boost. To career encouragement. Pattern: encourage/motivate/inspire + person + TO + action. Supportive persuasion - advocating for ambition. Infinitive shows encouraged future action."
      },
      {
        id: "rep_cmd_9",
        question: "The rules require students _____ uniforms every day without any exceptions allowed.",
        translation: "(Zasady wymagają од studentów noszenia uniformów każdego dnia без żadnych wyjątków)",
        options: ["to wear", "wear", "wearing", "that wear"],
        correct: "to wear",
        explanation: "'Require + object + infinitive' для mandatory obligations! School policy - dress code. To institutional requirement. Pattern: require/need + people + TO + comply. Regulation enforcement - no flexibility. Infinitive shows required behavior."
      },
      {
        id: "rep_cmd_10",
        question: "He persuaded his friends _____ him with the difficult moving process tomorrow.",
        translation: "(Przekonał swoich przyjaciół żeby mu pomogli z trudnym procesem przeprowadzki jutro)",
        options: ["to help", "help", "helping", "that help"],
        correct: "to help",
        question: "'Persuade + object + infinitive' dla convincing! Successfully argued - got agreement. To friendship favor. Pattern: persuade/convince + person + TO + action. Successful argumentation - obtaining commitment. Infinitive shows obtained agreement for action."
      },
      {
        id: "rep_cmd_11",
        question: "The teacher forbade us _____ our phones during the important final examination.",
        translation: "(Nauczyciel zabronił nam używania telefonów podczas ważnego egzaminu końcowego)",
        options: ["to use", "use", "using", "that use"],
        correct: "to use",
        explanation: "'Forbid + object + infinitive' dla prohibitions! Strong ban - rule enforcement. To academic integrity. Pattern: forbid/prohibit/ban + people + TO + action (або FROM + gerund). Exam rules - preventing cheating. Infinitive shows forbidden action."
      },
      {
        id: "rep_cmd_12",
        question: "She invited me _____ her birthday party celebration next Saturday evening.",
        translation: "(Zaprosiła mnie żebym przyszedł на jej urodzinową imprezę w przyszłą sobotę wieczorem)",
        options: ["to come", "come", "coming", "that come"],
        correct: "to come",
        explanation: "'Invite + object + infinitive' dla social invitations! Welcoming - requesting presence. To party invitation. Pattern: invite + person + TO + attend/come/join. Social inclusion - extending welcome. Infinitive shows invited action - attendance requested."
      },
      {
        id: "rep_cmd_13",
        question: "The manager allowed employees _____ home early due to the severe weather conditions.",
        translation: "(Menedżer pozwolił pracownikom iść додому wcześnie z powodu ciężkich warunków pogodowych)",
        options: ["to go", "go", "going", "that go"],
        correct: "to go",
        explanation: "'Allow + object + infinitive' dla permissions! Granting leave - exceptional circumstances. To workplace flexibility. Pattern: allow/permit + people + TO + action. Management discretion - weather emergency accommodation. Infinitive shows permitted early departure."
      },
      {
        id: "rep_cmd_14",
        question: "He begged me _____ him one more chance to prove himself worthy.",
        translation: "(Błagał mnie żebym dał mu jeszcze jedną szansę żeby udowodnić się wartym)",
        options: ["to give", "give", "giving", "that give"],
        correct: "to give",
        explanation: "'Beg + object + infinitive' dla desperate requests! Pleading - urgent appeal. To seeking redemption. Pattern: beg/plead + person + TO + grant. Desperate persuasion - requesting opportunity despite past failure. Infinitive shows desperately requested favor."
      },
      {
        id: "rep_cmd_15",
        question: "They challenged us _____ a better alternative solution to this complex problem.",
        translation: "(Wyzwali nas żebyśmy znaleźli lepsze alternatywne rozwiązanie для tego złożonego problemu)",
        options: ["to find", "find", "finding", "that find"],
        correct: "to find",
        explanation: "'Challenge + object + infinitive' dla competitive prompts! Dare do better - stimulating effort. To motivational push. Pattern: challenge/dare + people + TO + achieve. Competitive encouragement - spurring innovation. Infinitive shows challenged task."
      }
    ]
  },

  question_forms_advanced: {
    name: "Formy pytań - zaawansowane",
    description: "Negative questions, tag questions in context",
    icon: HelpCircle,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "q_form_1",
        question: "_____ you like some coffee or tea? I'm making some right now for everyone.",
        translation: "(Czy chciałbyś trochę kawy lub herbaty? Robię właśnie teraz для wszystkich)",
        options: ["Wouldn't", "Don't", "Aren't", "Won't"],
        correct: "Wouldn't",
        explanation: "Negatywne pytanie 'wouldn't you' bardziej grzeczne! Softer niż 'would you' - polite offer. To hospitality - offering refreshments. Negative questions dla polite offers sound less pushy - giving easy 'no' option podczas maintaining warmth."
      },
      {
        id: "q_form_2",
        question: "You haven't seen my keys anywhere around here, _____ you?",
        translation: "(Nie widziałeś moich kluczy gdziekolwiek tutaj, prawda?)",
        options: ["have", "did", "haven't", "are"],
        correct: "have",
        explanation: "Negatywne główne + pozytywny tag! 'Haven't seen' → 'have you?' Tag matches auxiliary. To desperately seeking - hoping for positive. Negative statement expecting confirmation - searching для lost items requires checking с everyone."
      },
      {
        id: "q_form_3",
        question: "_____ he apologize for his extremely rude behavior yesterday at dinner?",
        translation: "(Czy nie przeprosił за swoje ekstremalnie niegrzeczne zachowanie wczoraj przy kolacji?)",
        options: ["Didn't", "Doesn't", "Isn't", "Wasn't"],
        correct: "Didn't",
        explanation: "Negatywne pytanie wyraża surprise! Expected apology że nie came. To criticism disguised як question - highlighting omission. Negative questions often imply oczekiwany 'yes' answer - używane для pointing out failures або unexpected absences."
      },
      {
        id: "q_form_4",
        question: "It's a beautiful day outside today, _____ it?",
        translation: "(To piękny dzień na zewnątrz dzisiaj, prawda?)",
        options: ["isn't", "doesn't", "won't", "hasn't"],
        correct: "isn't",
        explanation: "Pozytywne statement + negatywny tag! 'It's beautiful' → 'isn't it?' Agreement seeking. To weather appreciation - inviting consensus. Tags seek confirmation - checking if other shares positive assessment. Social bonding через shared observations."
      },
      {
        id: "q_form_5",
        question: "You do understand the instructions clearly, _____ you?",
        translation: "(Rozumiesz instrukcje wyraźnie, prawda?)",
        options: ["don't", "do", "aren't", "won't"],
        correct: "don't",
        explanation: "'Do understand' → 'don't you?' Checking comprehension! Pozytywne z emphatic 'do' → negatywny tag. To verification - ensuring clarity before proceeding. Tag confirming understanding - важно że everyone on same page before starting."
      },
      {
        id: "q_form_6",
        question: "_____ it strange that nobody called to confirm the meeting time today?",
        translation: "(Czy nie dziwne że nikt nie zadzwonił żeby potwierdzić czas spotkania dzisiaj?)",
        options: ["Isn't", "Doesn't", "Wasn't", "Won't"],
        correct: "Isn't",
        explanation: "Negatywne pytanie highlighting oddness! Expected confirmation absent. To expressing puzzlement - situation unusual. Negative questions drawing attention до abnormality - inviting agreement że something's off. Shared confusion о lack of communication."
      },
      {
        id: "q_form_7",
        question: "She can speak five languages fluently, _____ she?",
        translation: "(Ona mówi płynnie w pięciu językach, prawda?)",
        options: ["can't", "doesn't", "isn't", "won't"],
        correct: "can't",
        explanation: "Modal 'can' → negatywny tag 'can't'! Pozytywne ability statement seeking confirmation. To admiration - impressive skill. Tag з modalnym matches modal - confirming extraordinary linguistic capability. Expressing awe через confirmation question."
      },
      {
        id: "q_form_8",
        question: "_____ you think we should postpone the outdoor event due to rain forecast?",
        translation: "(Czy nie myślisz że powinniśmy przełożyć outdoor wydarzenie z powodu prognozy deszczu?)",
        options: ["Don't", "Doesn't", "Aren't", "Won't"],
        correct: "Don't",
        explanation: "Negatywne pytanie suggesting opinion! Gently proposing postponement - seeking agreement. To diplomatic suggestion. Negative opinion questions soften proposals - less demanding niż statement, inviting input podczas guiding toward view."
      },
      {
        id: "q_form_9",
        question: "There's nothing we can do about this situation now, _____ there?",
        translation: "(Nie ma nic co możemy zrobić о tej sytuacji teraz, prawda?)",
        options: ["is", "isn't", "does", "doesn't"],
        correct: "is",
        explanation: "'Nothing' negatywne → pozytywny tag! 'There's nothing' contains negative → 'is there?' To resignation - accepting helplessness. Negative subject words (nothing/nobody/never) flip tag до positive - seeking agreement о futility."
      },
      {
        id: "q_form_10",
        question: "_____ they offered you the job position yet after all those interviews?",
        translation: "(Czy nie zaoferowali ci jeszcze tej posady по wszystkich tych rozmowach?)",
        options: ["Haven't", "Didn't", "Aren't", "Don't"],
        correct: "Haven't",
        explanation: "Negatywne pytanie о expected event! After mnogie interviews, offer oczekiwany. To expressing impatience - czemu delay? Negative questions highlighting surprising absence - expected progression що hasn't materialized. Frustration о prolonged waiting."
      },
      {
        id: "q_form_11",
        question: "We should start the meeting now and not wait longer, _____ we?",
        translation: "(Powinniśmy zacząć spotkanie teraz i nie czekać dłużej, prawda?)",
        options: ["shouldn't", "don't", "aren't", "won't"],
        correct: "shouldn't",
        explanation: "'Should start' → 'shouldn't we?' Modal tag! Suggesting action - seeking consensus. To meeting management - proposing proceed. Modal tags match modal - confirming group agreement для proposed action. Democratic decision-making."
      },
      {
        id: "q_form_12",
        question: "_____ you be at work right now instead of here at the shopping mall?",
        translation: "(Czy nie powinieneś być w pracy właśnie teraz zamiast tutaj w centrum handlowym?)",
        options: ["Shouldn't", "Aren't", "Don't", "Won't"],
        correct: "Shouldn't",
        explanation: "Negatywne pytanie questioning appropriateness! Expected elsewhere - location suspicious. To polite challenge - pointing out inconsistency. Negative 'should' questions behavior - suggesting current action wrong. Gentle confrontation о questionable priorities."
      },
      {
        id: "q_form_13",
        question: "Nobody told you about the schedule change yesterday, _____ they?",
        translation: "(Nikt ci nie powiedział о zmianie harmonogramu wczoraj, prawda?)",
        options: ["did", "didn't", "have", "haven't"],
        correct: "did",
        explanation: "'Nobody told' negatywne → pozytywny tag! 'Nobody' zawiera negation → 'did they?' To о communication breakdown. Negative subjects (nobody/nothing) require positive tags - confirming suspected lack of information. Sympathizing о being left out."
      },
      {
        id: "q_form_14",
        question: "Let's take a short break now and continue working after, _____ we?",
        translation: "(Weźmy krótką przerwę teraz i kontynuujmy pracę після, dobrze?)",
        options: ["shall", "will", "should", "do"],
        correct: "shall",
        explanation: "'Let's' → 'shall we?' Unique tag! Suggestions 'let's' always tag 'shall we?' To group proposal - seeking agreement. Only correct tag для 'let's' statements - inviting collective action. British primarily але understood globally."
      },
      {
        id: "q_form_15",
        question: "_____ anybody call while I was away from the office this afternoon?",
        translation: "(Czy ktoś dzwonił kiedy byłem poza biurem dziś po południu?)",
        options: ["Did", "Didn't", "Has", "Hasn't"],
        correct: "Did",
        explanation: "Pytanie о possible past event! Neutral inquiry - checking messages. To administrative - catching up. Standard past question - 'did' + anybody - no negativity needed. Simple information seeking о potential calls podczas absence."
      }
    ]
  },

  opinion_expressions_formal: {
    name: "Wyrażanie opinii - formalnie",
    description: "In my opinion, I believe that, it seems to me",
    icon: ThumbsUp,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "opin_1",
        question: "_____ my opinion, this is the best solution to our current difficult problem.",
        translation: "(Moim zdaniem to jest najlepsze rozwiązanie для naszego obecnego trudnego problemu)",
        options: ["In", "On", "At", "By"],
        correct: "In",
        explanation: "'In my opinion' formal opinion phrase! Zawsze 'in' - can't change. To business/academic - stating view. Standard opinion expression - 'in my opinion/view' presenting personal assessment formally. Polite disagreement możliwy gdy opinions prefaced this way."
      },
      {
        id: "opin_2",
        question: "I _____ that we should invest more resources in employee training and development.",
        translation: "(Uważam że powinniśmy inwestować więcej zasobów w szkolenie i rozwój pracowników)",
        options: ["believe", "am believing", "believed", "have believed"],
        correct: "believe",
        explanation: "'I believe that' formal conviction! Present simple для opinions - не continuous. To policy recommendation. Standard structure: I believe + that clause. Professional opinion - advocating для investment. Present tense для current beliefs."
      },
      {
        id: "opin_3",
        question: "It _____ to me that this approach won't work effectively in practice unfortunately.",
        translation: "(Wydaje mi się że to podejście nie zadziała efektywnie w praktyce niestety)",
        options: ["seems", "is seeming", "seemed", "has seemed"],
        correct: "seems",
        explanation: "'It seems to me' tentative opinion! Softer niż 'I think' - more humble. To cautious disagreement. Pattern: it seems + that clause. Diplomatic dissent - presenting doubt gently. Perception verb allowing disagreement bez directness."
      },
      {
        id: "opin_4",
        question: "_____ my mind, education is the most important investment for future generations.",
        translation: "(Moim zdaniem edukacja jest najważniejszą inwestycją dla przyszłych pokoleń)",
        options: ["To", "In", "On", "At"],
        correct: "To",
        explanation: "'To my mind' formal opinion variant! Similar до 'in my opinion' але lekko bardziej emphatic. To value statement. Less common niż 'in my opinion' але equally formal - slightly stronger conviction implied. Philosophical stance."
      },
      {
        id: "opin_5",
        question: "I would _____ that we need to reconsider our current marketing strategy entirely.",
        translation: "(Powiedziałbym że musimy przemyśleć naszą obecną strategię marketingową całkowicie)",
        options: ["say", "said", "saying", "have said"],
        correct: "say",
        explanation: "'I would say' softened assertion! Conditional делает less blunt. To tentative suggestion. Pattern: I would say/suggest/argue + that clause. Diplomatic proposal - conditional softens directness. Business recommendation tactfully presented."
      },
      {
        id: "opin_6",
        question: "_____ point of view, both options have their advantages and disadvantages equally.",
        translation: "(Z mojego punktu widzenia obie opcje mają swoje zalety i wady równo)",
        options: ["From my", "In my", "On my", "At my"],
        correct: "From my",
        explanation: "'From my point of view' perspective phrase! Zawsze 'from' - spatial metaphor. To balanced assessment. Perspective expressions: 'from my perspective/point of view' presenting angle. Acknowledging multiple valid viewpoints - yours being one."
      },
      {
        id: "opin_7",
        question: "I'm _____ to say that I disagree with this proposal for several reasons.",
        translation: "(Zmuszony jestem powiedzieć że nie zgadzam się z tą propozycją z kilku powodów)",
        options: ["inclined", "bound", "forced", "made"],
        correct: "inclined",
        explanation: "'I'm inclined to say' gentle disagreement! Leaning toward opinion - not absolute. To diplomatic dissent. Pattern: inclined to + verb shows tendency без firmness. Softening disagreement - presenting as inclination не certainty. Leaving room для discussion."
      },
      {
        id: "opin_8",
        question: "_____ I can tell from the data, sales have increased significantly this quarter.",
        translation: "(O ile mogę powiedzieć z danych, sprzedaż wzrosła znacząco w tym kwartale)",
        options: ["As far as", "So far as", "As long as", "So long as"],
        correct: "As far as",
        explanation: "'As far as I can tell' qualified statement! Based на available info - caveat. To cautious reporting. Pattern qualifying claims: as far as I know/can tell. Acknowledging limitations - assessment based на visible data, may be incomplete."
      },
      {
        id: "opin_9",
        question: "In my _____, the current policy needs immediate revision and improvement now.",
        translation: "(Moim zdaniem obecna polityka potrzebuje natychmiastowej rewizji i poprawy teraz)",
        options: ["view", "opinion", "mind", "thought"],
        correct: "view",
        explanation: "'In my view' variant of 'in my opinion'! Interchangeable - same formality. To policy critique. Alternative opinion expressions - variety в formal writing. View/opinion/estimation all work в 'in my X' pattern. Professional critique language."
      },
      {
        id: "opin_10",
        question: "I _____ say that this is one of the best books I've ever read honestly!",
        translation: "(Muszę powiedzieć że to jedna z najlepszych książek które kiedykolwiek czytałem szczerze!)",
        options: ["must", "have to", "need to", "should"],
        correct: "must",
        explanation: "'I must say' emphatic agreement! Can't help але comment - compelled. To enthusiastic review. Pattern: must say + that clause. Irresistible urge до share opinion - too impressed не до comment. Strong positive assessment."
      },
      {
        id: "opin_11",
        question: "_____ seems to be a lack of communication between the departments here.",
        translation: "(Wydaje się być brak komunikacji między działami tutaj)",
        options: ["There", "It", "This", "That"],
        correct: "There",
        explanation: "'There seems to be' diplomatic problem identification! Observing issue без blaming. To organizational critique. Pattern: there seems + to be + problem. Gentle problem-pointing - acknowledging issue exists без accusatory tone. Professional feedback."
      },
      {
        id: "opin_12",
        question: "I personally _____ that more research is needed before making this big decision.",
        translation: "(Osobiście uważam że więcej badań jest potrzebnych przed podjęciem tej dużej decyzji)",
        options: ["feel", "am feeling", "felt", "have felt"],
        correct: "feel",
        explanation: "'I personally feel' emphasizes individual view! 'Personally' strengthens ownership. To cautious stance. Adding 'personally' до 'feel/think/believe' emphasizes subjective nature - distinguishing your view від possible others. Personal conviction statement."
      },
      {
        id: "opin_13",
        question: "_____ my experience, this type of project usually takes longer than initially estimated.",
        translation: "(Z mojego doświadczenia ten typ projektu zazwyczaj trwa dłużej niż początkowo szacowano)",
        options: ["In", "From", "On", "By"],
        correct: "In",
        explanation: "'In my experience' experiential opinion! Based на what lived - credibility. To sharing learned wisdom. Pattern: in my experience + observation. Professional insight - pattern recognition від accumulated history. Authority від practice."
      },
      {
        id: "opin_14",
        question: "To be _____, I don't think this plan will work without major significant changes.",
        translation: "(Szczerze mówiąc nie myślę że ten plan zadziała без głównych znaczących zmian)",
        options: ["honest", "truth", "frank", "clear"],
        correct: "honest",
        explanation: "'To be honest' candid opinion phrase! Admitting real view - might be unpopular. To frank assessment. Honesty disclaimer - warning potentially unwelcome truth follows. Creates space для blunt feedback - preparing listener для criticism."
      },
      {
        id: "opin_15",
        question: "It is my _____ that we should proceed cautiously with this risky venture.",
        translation: "(Moim przekonaniem jest że powinniśmy postępować ostrożnie z tym ryzykownym przedsięwzięciem)",
        options: ["belief", "believing", "believe", "believed"],
        correct: "belief",
        explanation: "'It is my belief that' very formal! Noun structure - highest formality. To serious policy statement. Pattern: it is my belief/conviction + that clause. Academic/legal language - presenting position formally. Weighty opinion requiring noun form."
      }
    ]
  },

  sequence_markers: {
    name: "Markery sekwencji",
    description: "First, then, after that, finally, in the end",
    icon: List,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    questions: [
      {
        id: "seq_1",
        question: "_____, mix the flour and sugar together in a large bowl carefully.",
        translation: "(Najpierw zmieszaj mąkę i cukier razem w dużej misce starannie)",
        options: ["First", "Firstly", "At first", "The first"],
        correct: "First",
        explanation: "'First' zaczyna sequence instructions! Krok początkowy - od czego zacząć. To recipe/instructions - ordered steps. 'First' или 'firstly' (bardziej formalny) dla initial step. Sequencing czyni instrukcje klarowne - pokazuje порядок operations."
      },
      {
        id: "seq_2",
        question: "_____, add the eggs one at a time while mixing continuously and gently.",
        translation: "(Następnie dodaj jajka po jednym podczas mieszania ciągle i delikatnie)",
        options: ["Then", "Than", "After", "Next"],
        correct: "Then",
        explanation: "'Then' lub 'next' dla kolejnych kroków! Po pierwszym - second step. To continuation - proceeding through recipe. Sequential connectors: then/next/after that guide przez multi-step process. Clear ordering prevents confusion."
      },
      {
        id: "seq_3",
        question: "_____ that, let the mixture rest for about thirty minutes at room temperature.",
        translation: "(Po tym pozwól mieszance odpocząć около trzydziestu minut w temperaturze pokojowej)",
        options: ["After", "Before", "During", "While"],
        correct: "After",
        explanation: "'After that' references previous step! Po completion poprzedniego - new instruction. To sequencing - maintaining flow. 'After that' explicitly connects до prior step - showing temporal progression. Recipe timing - patience needed."
      },
      {
        id: "seq_4",
        question: "_____, bake in the oven at 180 degrees for approximately forty-five minutes.",
        translation: "(Na koniec piecz w piekarniku на 180 stopni około czterdziestu pięciu minut)",
        options: ["Finally", "Lastly", "At last", "In the end"],
        correct: "Finally",
        explanation: "'Finally' dla ostatniego kroku! Concluding instruction - завершающий step. To completion - last action. 'Finally' lub 'lastly' для final step w sequence. Signals конец process - no more steps після."
      },
      {
        id: "seq_5",
        question: "_____ the beginning, I didn't understand the game rules at all clearly.",
        translation: "(Na początku nie rozumiałem zasad gry wcale wyraźnie)",
        options: ["At", "In", "On", "By"],
        correct: "At",
        explanation: "'At the beginning' dla starting point! Initial state - later changed. To learning curve. 'At the beginning' describes initial phase - confusion normal. Often followed by 'but later understood' - showing progression від incomprehension."
      },
      {
        id: "seq_6",
        question: "_____ the end, we decided to cancel the event due to low registration numbers.",
        translation: "(W końcu zdecydowaliśmy się odwołać wydarzenie z powodu niskich liczb rejestracji)",
        options: ["In", "At", "On", "By"],
        correct: "In",
        explanation: "'In the end' final decision после deliberation! After considering - ultimate choice. To conclusion. Different від 'at the end' (final point) - 'in the end' means 'ultimately/finally' після process. Delayed decision terminology."
      },
      {
        id: "seq_7",
        question: "To begin _____, let me introduce myself and explain my background briefly.",
        translation: "(Na początek pozwólcie mi się przedstawić i wyjaśnić moje pochodzenie krótko)",
        options: ["with", "at", "in", "on"],
        correct: "with",
        explanation: "'To begin with' formal opening! Starting point - first topic. To presentation structure. Pattern: to begin/start with introduces initial element. Professional communication - signaling sequence start. Sets expectation więcej follows."
      },
      {
        id: "seq_8",
        question: "_____, I'd like to thank everyone for attending this important meeting today.",
        translation: "(Po pierwsze chciałbym podziękować wszystkim за uczestnictwo w tym ważnym spotkaniu dzisiaj)",
        options: ["First of all", "At first", "In first", "The first"],
        correct: "First of all",
        explanation: "'First of all' emphasizes priority! Before anything else - most important first. To formal opening. Stronger niż simple 'first' - 'of all' adds emphasis. Used для highlighting paramount point - establishing что must be said before everything else."
      },
      {
        id: "seq_9",
        question: "Meanwhile, our competitors were gaining significant market share rapidly during this time.",
        translation: "(Tymczasem nasi konkurenci zdobywali znaczący udział w rynku szybko podczas tego czasu)",
        options: ["Meanwhile", "Then", "After", "Next"],
        correct: "Meanwhile",
        explanation: "'Meanwhile' pokazuje simultaneous events! Podczas gdy jedno działo się, inne też. To parallel narratives. 'Meanwhile' connects concurrent developments - showing multiple things happening razem. Business analysis - acknowledging competitive activity while você busy."
      },
      {
        id: "seq_10",
        question: "_____ step is to gather all necessary materials and tools before starting work.",
        translation: "(Następnym krokiem jest zebranie wszystkich niezbędnych materiałów i narzędzi przed rozpoczęciem pracy)",
        options: ["The next", "Next", "Then", "After"],
        correct: "The next",
        explanation: "'The next step' formal instruction sequencing! Identifying specific stage - procedural clarity. To technical instructions. 'The next step' more formal niż simple 'next' - used в manuals/procedures. Structured guidance - clear stage identification."
      },
      {
        id: "seq_11",
        question: "_____ but not least, I want to thank my family for their constant support.",
        translation: "(Ostatnie але nie mniej ważne chcę podziękować mojej rodzinie за ich stałe wsparcie)",
        options: ["Last", "Lastly", "Finally", "At last"],
        correct: "Last",
        explanation: "'Last but not least' idiomatic final mention! Final але equally important. To acknowledgment - ensuring last isn't forgotten. Fixed phrase - can't change. Used в speeches dla honoring final person/group - emphasizing їх importance despite position."
      },
      {
        id: "seq_12",
        question: "To sum _____, I believe this project was a great success overall for everyone.",
        translation: "(Podsumowując uważam że ten projekt był wielkim sukcesem ogólnie для wszystkich)",
        options: ["up", "in", "down", "out"],
        correct: "up",
        explanation: "'To sum up' conclusion phrase! Zawsze 'up' - summarizing. To closing remarks. Pattern: to sum up + conclusion. Presentation/essay endings - signaling final thoughts. Prepares audience для condensed main points recap."
      },
      {
        id: "seq_13",
        question: "_____ all, there are three main reasons why this strategy will succeed.",
        translation: "(W sumie są trzy główne powody dlaczego ta strategia odniesie sukces)",
        options: ["In", "At", "On", "By"],
        correct: "In",
        explanation: "'In all' totaling phrase! Counting complete set - summary number. To quantifying. 'In all' introduces total count. Used для giving aggregate після listing items - comprehensive summary number. Totaling function."
      },
      {
        id: "seq_14",
        question: "We tried several approaches. _____, we found one that actually worked perfectly!",
        translation: "(Próbowaliśmy kilku podejść. Ostatecznie znaleźliśmy jedno które faktycznie działało perfekcyjnie!)",
        options: ["Eventually", "Firstly", "Initially", "Primarily"],
        correct: "Eventually",
        explanation: "'Eventually' успех после attempts! After process - ultimate success. To perseverance reward. 'Eventually' shows passage of time і effort перед achieving - patience paid off. Multiple tries leading до final solution."
      },
      {
        id: "seq_15",
        question: "_____ conclusion, I recommend approving this proposal without any further delay now.",
        translation: "(Podsumowując polecam zatwierdzenie tej propozycji без żadnego dalszego opóźnienia teraz)",
        options: ["In", "At", "On", "By"],
        correct: "In",
        explanation: "'In conclusion' formal ending! Zawsze 'in' - closing phrase. To final recommendation. Standard essay/speech conclusion marker. Signals wrapping up - final thoughts beginning. Professional closure introducing ultimate position або advice."
      }
    ]
  },

  expressing_ability_possibility: {
    name: "Wyrażanie zdolności i możliwości",
    description: "Can, could, be able to, manage to - różnice",
    icon: ThumbsUp,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "abil_poss_1",
        question: "I _____ swim when I was only five years old - my father taught me early.",
        translation: "(Umiałem pływać kiedy miałem tylko pięć lat - mój ojciec nauczył mnie wcześnie)",
        options: ["could", "can", "was able to", "managed to"],
        correct: "could",
        explanation: "'Could' dla general past ability! Miałeś skill w przeszłości - learned capability. To childhood memory. 'Could' + activity describes possessed ability в past. General skill не specific occasion - habitual capability."
      },
      {
        id: "abil_poss_2",
        question: "Despite the injury, she _____ finish the marathon race yesterday successfully!",
        translation: "(Pomimo kontuzji udało jej się skończyć maraton wczoraj pomyślnie!)",
        options: ["managed to", "could", "can", "was able to"],
        correct: "managed to",
        explanation: "'Managed to' успех pomimo difficulty! Specific achievement - overcame obstacle. To triumph. 'Managed to' emphasizes effort і difficulty - success wasn't easy але achieved. Specific occasion victory - highlighting accomplished despite challenges."
      },
      {
        id: "abil_poss_3",
        question: "I haven't _____ contact him yet - his phone is always busy or turned off.",
        translation: "(Nie udało mi się jeszcze skontaktować з nim - jego telefon jest zawsze zajęty або wyłączony)",
        options: ["been able to", "could", "can", "managed"],
        correct: "been able to",
        explanation: "'Haven't been able to' present perfect inability! Tried але nie succeeded yet. To ongoing frustration. 'Be able to' в perfect tenses (can't use 'can' в perfect). Continued failure - multiple attempts unsuccessful. Expressing persistent difficulty."
      },
      {
        id: "abil_poss_4",
        question: "After months of practice, I _____ finally play this difficult song perfectly!",
        translation: "(Po miesiącach praktyki w końcu mogę zagrać tę trudną piosenkę perfekcyjnie!)",
        options: ["can", "could", "am able", "manage"],
        correct: "can",
        explanation: "'Can finally play' новоприобретенная ability! Achievement unlocked - skill acquired. To training success. 'Can' + 'finally' celebrates reaching competence. Learning curve completed - now capable. Present ability announcement."
      },
      {
        id: "abil_poss_5",
        question: "Will you _____ attend the conference next month in the capital city?",
        translation: "(Czy będziesz mógł uczestniczyć w konferencji w przyszłym miesiącu w stolicy?)",
        options: ["be able to", "can", "could", "manage"],
        correct: "be able to",
        explanation: "'Will be able to' future capability! Can't use 'will can' - must use 'be able to'. To scheduling inquiry. Future tense requires 'be able to' (can't use 'can' в future form). Availability question - checking future possibility."
      },
      {
        id: "abil_poss_6",
        question: "I _____ escape from the burning building through the back emergency exit!",
        translation: "(Udało mi się uciec z płonącego budynku przez tylne wyjście awaryjne!)",
        options: ["managed to", "could", "can", "was able to"],
        correct: "managed to",
        explanation: "'Managed to escape' dramatic survival! Specific life-threatening situation - successful. To emergency success. 'Managed to' для specific difficult achievements - emphasizes effort і difficulty. Heroic specific occasion - escape despite danger."
      },
      {
        id: "abil_poss_7",
        question: "She _____ speak three languages fluently even as a young child growing up.",
        translation: "(Umiała mówić płynnie w trzech językach nawet jako młode dziecko dorastające)",
        options: ["could", "can", "was able to", "managed to"],
        correct: "could",
        explanation: "'Could speak' general childhood ability! Multilingual від young - impressive. To innate/learned talent. 'Could' для past general abilities - possessed skill over period. Early language acquisition - sustained capability через childhood."
      },
      {
        id: "abil_poss_8",
        question: "I hope I'll _____ help you with your project if I have free time.",
        translation: "(Mam nadzieję że będę mógł ci pomóc з twoim projektem jeśli będę miał wolny czas)",
        options: ["be able to", "can", "could", "manage to"],
        correct: "be able to",
        explanation: "'Will be able to help' conditional future! Depends на time availability. To tentative offer. Future capability requiring 'be able to' (can't use 'can' в future). Conditional assistance - willing если circumstances allow."
      },
      {
        id: "abil_poss_9",
        question: "After trying for hours, I _____ finally solve the extremely difficult puzzle!",
        translation: "(Po próbowaniu przez godziny w końcu udało mi się rozwiązać ekstremalnie trudną łamigłówkę!)",
        options: ["managed to", "could", "can", "was able to"],
        correct: "managed to",
        explanation: "'Managed to solve' после prolonged effort! Persistence победила - breakthrough. To puzzle triumph. 'Managed to' для achievements requiring sustained effort - emphasizes struggle preceding success. Specific challenging completion."
      },
      {
        id: "abil_poss_10",
        question: "_____ you help me carry these heavy boxes upstairs to the second floor?",
        translation: "(Czy możesz mi pomóc przenieść te ciężkie pudła na górę на drugie piętro?)",
        options: ["Can", "Could", "Are able to", "Manage to"],
        correct: "Can",
        explanation: "'Can you help' present request! Current moment - asking для immediate assistance. To favor request. 'Can' для present ability questions - checking current availability. 'Could' byłoby bardziej grzeczne але 'can' standard casualny request."
      },
      {
        id: "abil_poss_11",
        question: "I've never _____ understand why he made that strange decision back then.",
        translation: "(Nigdy nie byłem w stanie zrozumieć dlaczego podjął tę dziwną decyzję wtedy)",
        options: ["been able to", "could", "can", "managed to"],
        correct: "been able to",
        explanation: "'Never been able to understand' persistent inability! Ongoing puzzle - still don't get. To lasting confusion. Present perfect з 'be able to' (can't use 'can' в perfect). Continued incomprehension - mystery remains unsolved."
      },
      {
        id: "abil_poss_12",
        question: "After the accident, he wasn't _____ walk for several months during recovery.",
        translation: "(Po wypadku nie był w stanie chodzić przez kilka miesięcy podczas rekonwalescencji)",
        options: ["able to", "can", "could", "managing to"],
        correct: "able to",
        explanation: "'Wasn't able to walk' temporary inability! Injury-caused limitation - lost capability. To recovery period. 'Be able to' в past для specific period inabilities. Medical context - temporary loss of function. Rehabilitation journey."
      },
      {
        id: "abil_poss_13",
        question: "I _____ usually remember faces well, but I'm terrible with names unfortunately.",
        translation: "(Zazwyczaj potrafię zapamiętywać twarze dobrze, але jestem okropny z imionami niestety)",
        options: ["can", "could", "am able to", "manage to"],
        correct: "can",
        explanation: "'Can usually remember' habitual ability! Regular skill - reliable capability. To strengths/weaknesses. 'Can' + 'usually' для describing typical abilities - what normally capable of. Memory pattern - visual strong, verbal weak."
      },
      {
        id: "abil_poss_14",
        question: "Despite feeling sick, I _____ complete all my work tasks yesterday successfully.",
        translation: "(Pomimo czucia choroby udało mi się ukończyć wszystkie moje zadania wczoraj pomyślnie)",
        options: ["was able to", "could", "can", "managed to"],
        correct: "was able to",
        explanation: "'Was able to complete' specific success! One occasion - sick але finished. To dedication. 'Was able to' lub 'managed to' для specific achievements. Both emphasize particular accomplishment - choosing depends на nuance (managed emphasizes difficulty more)."
      },
      {
        id: "abil_poss_15",
        question: "I wish I _____ speak Spanish fluently like my multilingual colleague does!",
        translation: "(Chciałbym móc mówić płynnie po hiszpańsku jak mój wielojęzyczny kolega!)",
        options: ["could", "can", "was able to", "managed to"],
        correct: "could",
        explanation: "'Wish I could' unrealized desire! Don't speak (reality) але want do (wish). To aspiration. 'Wish' + 'could' standard для expressing desired abilities currently lacking. Language learning motivation - admiring others' skills."
      }
    ]
  }
};

export default part28Categories;