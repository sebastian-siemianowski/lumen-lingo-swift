/**
 * POLISH → ENGLISH GRAMMAR - PART 29
 * 3 categories, 15 questions each - Ultimate refinement
 */

import { Gem, Target, Puzzle } from "lucide-react";

export const part29Categories = {
  complex_conditionals_mixed_advanced: {
    name: "Złożone tryby warunkowe - mieszane",
    description: "Advanced mixing of time frames",
    icon: Gem,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "mix_cond_adv_1",
        question: "If I _____ more time yesterday, I would be finished with work now!",
        translation: "(Gdybym miał więcej czasu wczoraj, byłbym teraz skończony z pracą!)",
        options: ["had had", "have", "had", "would have"],
        correct: "had had",
        explanation: "Mixed conditional: past condition affecting present! 'Had had more time' (past perfect - wczoraj) → 'would be finished' (present - teraz). To о time management regret - wczorajszy brak czasu wpływa на dzisiejszy status incomplete. Past perfect pokazuje missed past opportunity affecting current state."
      },
      {
        id: "mix_cond_adv_2",
        question: "If she _____ more confident generally, she would have applied for that promotion.",
        translation: "(Gdyby była bardziej pewna siebie ogólnie, aplikowałaby на ten awans)",
        options: ["were", "was", "had been", "is"],
        correct: "were",
        explanation: "Mixed conditional: present characteristic affecting past! 'If she were confident' (present trait) → 'would have applied' (past action). To о personality limiting opportunities - general lack of confidence prevented specific past application. Character determines choices."
      },
      {
        id: "mix_cond_adv_3",
        question: "If he had studied medicine, he _____ be a doctor now instead of teacher.",
        translation: "(Gdyby studiował medycynę, byłby teraz lekarzem zamiast nauczycielem)",
        options: ["would", "will", "had", "has"],
        correct: "would",
        explanation: "Past education choice affecting present career! 'Had studied' (past decision) → 'would be' (present profession). To career path reflection - educational choices shaping current reality. Past perfect decision creates hypothetical present identity - sliding doors moment."
      },
      {
        id: "mix_cond_adv_4",
        question: "If I _____ allergic to cats, I would have adopted that kitten immediately yesterday.",
        translation: "(Gdybym nie był uczulony на koty, adoptowałbym tego kociaka natychmiast wczoraj)",
        options: ["weren't", "wasn't", "hadn't been", "am not"],
        correct: "weren't",
        explanation: "Present permanent condition preventing past action! 'If I weren't allergic' (ongoing condition) → 'would have adopted' (past missed opportunity). To о health limitations - current allergy blocked past desire. Permanent state preventing specific past action."
      },
      {
        id: "mix_cond_adv_5",
        question: "If we hadn't taken that wrong turn, we _____ be lost right now in middle of nowhere!",
        translation: "(Gdybyśmy nie skręcili źle, nie bylibyśmy zgubieni właśnie teraz w środku niczego!)",
        options: ["wouldn't", "won't", "hadn't", "aren't"],
        correct: "wouldn't",
        explanation: "Past navigation error affecting present location! 'Hadn't taken wrong turn' (past mistake) → 'wouldn't be lost' (present consequence). To travel frustration - błąd nawigacyjny causing current problem. Past perfect mistake creates present困境 - wish could undo."
      },
      {
        id: "mix_cond_adv_6",
        question: "If you _____ more organized usually, you wouldn't have missed the deadline yesterday.",
        translation: "(Gdybyś był bardziej zorganizowany zazwyczaj, nie przegapiłbyś terminu wczoraj)",
        options: ["were", "are", "had been", "will be"],
        correct: "were",
        explanation: "General trait affecting specific past failure! 'If you were organized' (character) → 'wouldn't have missed' (specific past event). To criticism - personality flaw caused particular mistake. Present characteristic determines past actions - ongoing trait's consequences."
      },
      {
        id: "mix_cond_adv_7",
        question: "If I had accepted that job offer, I _____ be living in London right now!",
        translation: "(Gdybym przyjął tę ofertę pracy, mieszkałbym w Londynie właśnie teraz!)",
        options: ["would", "will", "had", "have"],
        correct: "would",
        explanation: "Past decision affecting present location! 'Had accepted' (past choice) → 'would be living' (present situation). To career regret - imagining alternative current life. Past perfect decision point creating completely different present reality - major life fork."
      },
      {
        id: "mix_cond_adv_8",
        question: "If she _____ afraid of heights, she would have gone skydiving with us yesterday.",
        translation: "(Gdyby nie bała się wysokości, poszłaby на skoki spadochronowe з nami wczoraj)",
        options: ["weren't", "wasn't", "hadn't been", "isn't"],
        correct: "weren't",
        explanation: "Present fear preventing past adventure! 'If she weren't afraid' (current phobia) → 'would have gone' (past missed experience). To о lasting fears blocking opportunities - permanent anxiety prevented specific past activity. Phobia's limiting effect."
      },
      {
        id: "mix_cond_adv_9",
        question: "If they had invested wisely earlier, they _____ have financial problems now.",
        translation: "(Gdyby zainwestowali mądrze wcześniej, nie mieliby problemów finansowych teraz)",
        options: ["wouldn't", "won't", "hadn't", "don't"],
        correct: "wouldn't",
        explanation: "Past financial choices affecting present! 'Had invested wisely' (past decisions) → 'wouldn't have problems' (present state). To investment regret - poor past choices creating current stress. Past perfect prudence would prevent present困境 - hindsight о money."
      },
      {
        id: "mix_cond_adv_10",
        question: "If you _____ more careful generally, you wouldn't have broken that expensive vase.",
        translation: "(Gdybyś był bardziej ostrożny ogólnie, nie zbiłbyś того дорогого wazonu)",
        options: ["were", "are", "had been", "will be"],
        correct: "were",
        explanation: "General carelessness causing specific accident! 'If you were careful' (character trait) → 'wouldn't have broken' (past incident). To criticism - personality flaw led до damage. Present behavioral pattern responsible для past mishap."
      },
      {
        id: "mix_cond_adv_11",
        question: "If I had known about the party, I _____ be here celebrating with you all now!",
        translation: "(Gdybym wiedział о imprezie, byłbym tutaj świętujący з wami wszystkimi teraz!)",
        options: ["would", "will", "had", "have"],
        correct: "would",
        explanation: "Past lack of knowledge affecting present! 'Had known' (wasn't informed) → 'would be here' (present attendance). To о missed social event - information gap caused absence. Past perfect awareness would create present participation."
      },
      {
        id: "mix_cond_adv_12",
        question: "If he _____ so stubborn always, he would have listened to our good advice.",
        translation: "(Gdyby nie był tak uparty zawsze, posłuchałby naszej dobrej rady)",
        options: ["weren't", "wasn't", "hadn't been", "isn't"],
        correct: "weren't",
        explanation: "Present personality trait affecting past! 'If he weren't stubborn' (ongoing characteristic) → 'would have listened' (past would-be action). To о character blocking wisdom - stubbornness prevented accepting guidance. Personality flaw's historical consequences."
      },
      {
        id: "mix_cond_adv_13",
        question: "If we had left on time this morning, we _____ be sitting in traffic now!",
        translation: "(Gdybyśmy wyjechali на czas dziś rano, nie siedzielibyśmy w korku teraz!)",
        options: ["wouldn't", "won't", "hadn't", "aren't"],
        correct: "wouldn't",
        explanation: "Past timing affecting present! 'Had left on time' (past punctuality) → 'wouldn't be sitting' (present situation). To commute regret - late departure causing current jam. Past perfect timeliness would prevent present traffic frustration."
      },
      {
        id: "mix_cond_adv_14",
        question: "If I _____ lactose intolerant, I would have eaten that delicious ice cream dessert.",
        translation: "(Gdybym nie był nietolerancyjny на laktozę, zjadłbym ten pyszny deser lodowy)",
        options: ["weren't", "wasn't", "hadn't been", "am not"],
        correct: "weren't",
        explanation: "Present health condition preventing past! 'If I weren't intolerant' (current condition) → 'would have eaten' (past abstinence). To dietary limitation regret - permanent condition blocked specific past indulgence. Health restriction's effect."
      },
      {
        id: "mix_cond_adv_15",
        question: "If she had won the scholarship, she _____ still be studying abroad now happily!",
        translation: "(Gdyby wygrała stypendium, wciąż studiowałaby за granicą teraz szczęśliwie!)",
        options: ["would", "will", "had", "has"],
        correct: "would",
        explanation: "Past competition result affecting present! 'Had won scholarship' (past achievement) → 'would be studying' (present activity). To educational regret - imagining alternative current student life abroad. Past perfect victory would create present international experience."
      }
    ]
  },

  adjective_patterns_advanced: {
    name: "Wzory przymiotników - zaawansowane",
    description: "Interested in vs interesting to, bored with vs boring",
    icon: Target,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "adj_patt_1",
        question: "I'm really _____ in learning about ancient civilizations and their cultures.",
        translation: "(Jestem naprawdę zainteresowany uczeniem się о starożytnych cywilizacjach i ich kulturach)",
        options: ["interested", "interesting", "interest", "interests"],
        correct: "interested",
        explanation: "'Interested' (końcówka -ed) opisuje TWOJĄ emocję! Jesteś заинтересованный - ty odczuwasz. To о internal state - your fascination. -ED adjectives описują feelings doświadczane - person experiencing emotion. Nie rzecz causing interest але ty feeling interest."
      },
      {
        id: "adj_patt_2",
        question: "The documentary about space was absolutely _____ - I learned so much!",
        translation: "(Dokument о kosmosie był absolutnie interesujący - nauczyłem się tak dużo!)",
        options: ["interesting", "interested", "interest", "interests"],
        correct: "interesting",
        explanation: "'Interesting' (końcówka -ing) opisuje CO wywołuje emocję! Documentary powoduje interest - it's fascinating. To о external quality. -ING adjectives описują qualities causing feelings - thing creating emotion в others. Film was engaging - produced interest."
      },
      {
        id: "adj_patt_3",
        question: "She felt _____ during the long boring lecture about complicated economic theory.",
        translation: "(Czuła się znudzona podczas długiego nudnego wykładu о skomplikowanej teorii ekonomicznej)",
        options: ["bored", "boring", "bore", "bores"],
        correct: "bored",
        explanation: "'Bored' (-ed) her feeling! Ona doświadcza nudy - internal state. To student experience. -ED для person experiencing - she felt tedium. Lecture caused boredom в niej - она recipient of boring effect."
      },
      {
        id: "adj_patt_4",
        question: "The meeting was extremely _____ - nothing new or interesting was discussed at all.",
        translation: "(Spotkanie było ekstremalnie nudne - nic nowego или ciekawego nie było omawiane wcale)",
        options: ["boring", "bored", "bore", "bores"],
        correct: "boring",
        explanation: "'Boring meeting' (-ing) causing boredom! Meeting is source - creates tedium в attendees. To о external quality. -ING dla thing causing feeling - meeting produced boredom. Content was tedious - meeting's characteristic."
      },
      {
        id: "adj_patt_5",
        question: "I was _____ by the magician's incredible performance at the talent show!",
        translation: "(Byłem zachwycony występem magika на talent show!)",
        options: ["amazed", "amazing", "amaze", "amazes"],
        correct: "amazed",
        explanation: "'Amazed' (-ed) twoje reaction! Ty doświadczyłeś wonder - internal response. To audience reaction. -ED для experiencing person - you felt amazement. Performance caused awe в tobie - you're recipient wonderful experience."
      },
      {
        id: "adj_patt_6",
        question: "The magic tricks were absolutely _____ - everyone gasped in surprise loudly!",
        translation: "(Sztuczki magiczne były absolutnie zadziwiające - wszyscy westchnęli w zaskoczeniu głośno!)",
        options: ["amazing", "amazed", "amaze", "amazes"],
        correct: "amazing",
        explanation: "'Amazing tricks' (-ing) causing wonder! Tricks są source - create amazement. To performance quality. -ING для thing causing feeling - tricks produced wonder w audience. Their quality was stunning - tricks' characteristic."
      },
      {
        id: "adj_patt_7",
        question: "He's very _____ with his current boring job and wants to find new challenges.",
        translation: "(Jest bardzo niezadowolony ze swojej obecnej nudnej pracy i chce znaleźć nowe wyzwania)",
        options: ["frustrated", "frustrating", "frustrate", "frustrates"],
        correct: "frustrated",
        explanation: "'Frustrated' (-ed) jego uczucie! On doświadcza frustracji - emotional state. To career dissatisfaction. -ED для person feeling - he experiences frustration. Job causes frustration в nim - he's suffering from lack of fulfillment."
      },
      {
        id: "adj_patt_8",
        question: "Dealing with bureaucracy is extremely _____ and time-consuming for everyone involved.",
        translation: "(Radzenie sobie z biurokracją jest ekstremalnie frustrujące i czasochłonne для wszystkich zaangażowanych)",
        options: ["frustrating", "frustrated", "frustrate", "frustrates"],
        correct: "frustrating",
        explanation: "'Frustrating bureaucracy' (-ing) causing annoyance! System powoduje frustration - external quality. To universal complaint. -ING для thing causing feeling - bureaucracy produces frustration в people. System's characteristic - creates irritation."
      },
      {
        id: "adj_patt_9",
        question: "I'm _____ about the results of the important medical test tomorrow morning.",
        translation: "(Jestem zmartwiony о wyniki ważnego testu medycznego jutro rano)",
        options: ["worried", "worrying", "worry", "worries"],
        correct: "worried",
        explanation: "'Worried' (-ed) twój stan! Ty odczuwasz anxiety - internal emotion. To health concern. -ED dla person experiencing - you feel worry. Test results uncertain causing worry в tobie - anticipatory anxiety."
      },
      {
        id: "adj_patt_10",
        question: "The news about the accident was very _____ to all family members present.",
        translation: "(Wiadomość о wypadku była bardzo niepokojąca для wszystkich członków rodziny obecnych)",
        options: ["worrying", "worried", "worry", "worries"],
        correct: "worrying",
        explanation: "'Worrying news' (-ing) causing concern! Wiadomość is source - creates anxiety. To external quality. -ING для thing causing feeling - news produces worry. Information's characteristic - disturbing nature causing concern."
      },
      {
        id: "adj_patt_11",
        question: "She was _____ to hear about her friend's success in the competition yesterday!",
        translation: "(Była zachwycona usłyszeć о sukcesie swojej przyjaciółki w zawodach wczoraj!)",
        options: ["delighted", "delighting", "delight", "delights"],
        correct: "delighted",
        explanation: "'Delighted' (-ed) her emotion! Ona cieszy się - internal joy. To vicarious happiness. -ED для person feeling - she experiences delight. Friend's success causing joy в niej - happy для others. Positive emotional response."
      },
      {
        id: "adj_patt_12",
        question: "The news about the promotion was _____ to everyone in the office today!",
        translation: "(Wiadomość о awansie była zachwycająca для wszystkich w biurze dzisiaj!)",
        options: ["delightful", "delighted", "delight", "delights"],
        correct: "delightful",
        explanation: "'Delightful news' (-ful variant) causing joy! News is source - creates happiness. To external quality. -FUL similar до -ING - thing possessing quality. Announcement's nature - bringing joy. Good news characteristic."
      },
      {
        id: "adj_patt_13",
        question: "I'm _____ by all the support I've received from friends during difficult time.",
        translation: "(Jestem przytłoczony całym wsparciem które otrzymałem од przyjaciół podczas trudnego czasu)",
        options: ["overwhelmed", "overwhelming", "overwhelm", "overwhelms"],
        correct: "overwhelmed",
        explanation: "'Overwhelmed' (-ed) twoje reaction! Ty czujesz się przytłoczony - emotional state. To gratitude. -ED для experiencing person - you feel overwhelmed. Support's abundance causing sensation - recipient of generous help."
      },
      {
        id: "adj_patt_14",
        question: "The amount of work required is quite _____ for one person to handle alone.",
        translation: "(Ilość pracy wymaganej jest całkiem przytłaczająca для jednej osoby do obsłużenia samemu)",
        options: ["overwhelming", "overwhelmed", "overwhelm", "overwhelms"],
        correct: "overwhelming",
        explanation: "'Overwhelming work' (-ing) causing stress! Workload is source - creates sensation of too much. To capacity concern. -ING для thing causing feeling - work produces overwhelm. Task volume's quality - exceeding reasonable capacity."
      },
      {
        id: "adj_patt_15",
        question: "The children were very _____ when they saw the presents under Christmas tree!",
        translation: "(Dzieci były bardzo podekscytowane kiedy zobaczyły prezenty pod choinką!)",
        options: ["excited", "exciting", "excite", "excites"],
        correct: "excited",
        explanation: "'Excited children' (-ed) their emotion! Oni odczuwają excitement - internal state. To holiday joy. -ED для people feeling - children experience excitement. Presents causing excitement в них - they're experiencing anticipatory joy."
      }
    ]
  },

  noun_verb_adjective_forms: {
    name: "Formy: rzeczownik/czasownik/przymiotnik",
    description: "Success/succeed/successful - transformations",
    icon: Puzzle,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "n_v_a_1",
        question: "Her _____ in the competition was well-deserved after months of hard training.",
        translation: "(Jej sukces w zawodach był dobrze zasłużony по miesiącach ciężkiego treningu)",
        options: ["success", "succeed", "successful", "successfully"],
        correct: "success",
        explanation: "'Success' to RZECZOWNIK - nazwa achievement! 'Her success' потребує noun form. To о accomplishment - victory celebration. Noun forms używane jako subjects lub objects - naming thing itself. Achievement substantywizowane - konkretna rzecz którą osiągnęła."
      },
      {
        id: "n_v_a_2",
        question: "She _____ in passing all her difficult exams with excellent grades overall!",
        translation: "(Udało jej się zdać wszystkie trudne egzaminy з doskonałymi ocenami ogólnie!)",
        options: ["succeeded", "success", "successful", "successfully"],
        correct: "succeeded",
        explanation: "'Succeeded' to CZASOWNIK - action word! 'She succeeded' potребує verb. To о achieving - action completion. Verb forms opisują actions lub states - doing word. Accomplishment jako akcja - demonstrating achievement through verb."
      },
      {
        id: "n_v_a_3",
        question: "He's a very _____ businessman who built his empire from nothing through work.",
        translation: "(Jest bardzo odnoszącym sukcesy biznesmenem który zbudował swoje imperium z niczego przez pracę)",
        options: ["successful", "success", "succeed", "successfully"],
        correct: "successful",
        explanation: "'Successful' to PRZYMIOTNIK - describing word! 'Successful businessman' modifies noun. To characterization. Adjective forms описują qualities - describing nouns. Achievement jako cecha - quality characterizing person."
      },
      {
        id: "n_v_a_4",
        question: "They completed the project _____ despite all the difficulties encountered during work.",
        translation: "(Ukończyli projekt pomyślnie pomimo wszystkich trudności napotkanych podczas pracy)",
        options: ["successfully", "successful", "success", "succeed"],
        correct: "successfully",
        explanation: "'Successfully' to PRZYSŁÓWEK - describes HOW! 'Completed successfully' modifies verb. To manner description. Adverb forms modify verbs/adjectives - describing how action done. Achievement jako sposób - quality of completion."
      },
      {
        id: "n_v_a_5",
        question: "The _____ of this medical treatment depends on early detection of disease.",
        translation: "(Skuteczność tego leczenia medycznego zależy од wczesnego wykrycia choroby)",
        options: ["effectiveness", "effective", "effect", "effectively"],
        correct: "effectiveness",
        explanation: "'Effectiveness' abstract RZECZOWNIK! Quality названная - treatment's potency. To medical assessment. Abstract noun forms naming qualities - -ness suffix creating noun від adjective. Conceptualizing quality - treating characteristic як thing."
      },
      {
        id: "n_v_a_6",
        question: "This medicine is very _____ against headaches and other common pains quickly.",
        translation: "(To lekarstwo jest bardzo skuteczne przeciw bólom głowy i innym powszechnym bólom szybko)",
        options: ["effective", "effectiveness", "effect", "effectively"],
        correct: "effective",
        explanation: "'Effective' PRZYMIOTNIK describing medicine! Quality medication possesses. To pharmaceutical assessment. Adjective describing potency - how well medicine works. Characterizing drug's capability - effective nature."
      },
      {
        id: "n_v_a_7",
        question: "The new policy will _____ everyone in the company starting next month officially.",
        translation: "(Nowa polityka wpłynie на wszystkich w firmie począwszy від przyszłego miesiąca oficjalnie)",
        options: ["affect", "effect", "effective", "effectively"],
        correct: "affect",
        explanation: "'Affect' CZASOWNIK = influence! 'Will affect everyone' - action impacting. To organizational change. Verb 'affect' means влиять - creating impact. Nie путать з noun 'effect' (result). Action word - describing influence exerted."
      },
      {
        id: "n_v_a_8",
        question: "The _____ of the new regulations on small businesses was significant and immediate.",
        translation: "(Wpływ nowych regulacji на małe biznesy był znaczący i natychmiastowy)",
        options: ["effect", "affect", "effective", "effectively"],
        correct: "effect",
        explanation: "'Effect' RZECZOWNIK = результат! 'The effect' naming impact. To economic analysis. Noun 'effect' means result/impact - consequential outcome. Nie путать з verb 'affect'. Result substantywizowany - outcome як named thing."
      },
      {
        id: "n_v_a_9",
        question: "He explained the complex concept very _____ so everyone could understand easily.",
        translation: "(Wyjaśnił złożony koncept bardzo jasno więc wszyscy mogli zrozumieć łatwo)",
        options: ["clearly", "clear", "clarity", "clearing"],
        correct: "clearly",
        explanation: "'Clearly' PRZYSŁÓWEK describing explanation manner! HOW explained - with clarity. To pedagogical skill. Adverb modifying verb - describing quality of explaining. Teaching effectiveness - manner ensuring comprehension."
      },
      {
        id: "n_v_a_10",
        question: "The _____ of his explanation helped everyone understand the difficult topic finally.",
        translation: "(Jasność jego wyjaśnienia pomogła wszystkim zrozumieć trudny temat w końcu)",
        options: ["clarity", "clear", "clearly", "clearing"],
        correct: "clarity",
        explanation: "'Clarity' abstract RZECZOWNIK! Quality названная - clearness. To communication assessment. Abstract noun -ity suffix creating noun від adjective. Naming quality itself - treating characteristic як substantywny concept."
      },
      {
        id: "n_v_a_11",
        question: "She spoke _____ about her concerns during the important team meeting today.",
        translation: "(Mówiła otwarcie о swoich obawach podczas ważnego spotkania zespołu dzisiaj)",
        options: ["openly", "open", "openness", "opening"],
        correct: "openly",
        explanation: "'Openly' PRZYSŁÓWEK - HOW spoke! Manner of speaking - with openness. To communication style. Adverb describing frankness - modifying verb (spoke). Transparency в communication - candid manner emphasized."
      },
      {
        id: "n_v_a_12",
        question: "There's a growing _____ that we need to address climate change urgently now.",
        translation: "(Jest rosnąca świadomość że musimy zająć się zmianą klimatu pilnie teraz)",
        options: ["awareness", "aware", "awared", "awaring"],
        correct: "awareness",
        explanation: "'Awareness' abstract RZECZOWNIK! Consciousness названная - realization spreading. To social change. Abstract noun -ness creating noun від adjective. Public consciousness - collective understanding developing."
      },
      {
        id: "n_v_a_13",
        question: "Are you _____ of the risks involved in this dangerous adventure activity?",
        translation: "(Czy jesteś świadomy рызыків związanych z tą niebезpieczną aktywnością przygodową?)",
        options: ["aware", "awareness", "awared", "awaring"],
        correct: "aware",
        explanation: "'Aware' PRZYMIOTNIK describing knowledge state! Are you conscious - possessing awareness. To safety check. Adjective describing mental state - possessing consciousness of dangers. Informed consent verification."
      },
      {
        id: "n_v_a_14",
        question: "The company aims to _____ customer satisfaction through better service quality.",
        translation: "(Firma dąży do zwiększenia satysfakcji klienta przez lepszą jakość obsługi)",
        options: ["increase", "increasingly", "increasing", "increased"],
        correct: "increase",
        explanation: "'Increase' CZASOWNIK = boost! 'To increase satisfaction' - action goal. To business objective. Infinitive verb form после 'to' - expressing intended action. Growth action - actively raising levels."
      },
      {
        id: "n_v_a_15",
        question: "There's been an _____ in sales revenue this quarter compared to last year.",
        translation: "(Był wzrost w przychodach ze sprzedaży w tym kwartale w porównaniu до zeszłego roku)",
        options: ["increase", "increasingly", "increasing", "increased"],
        correct: "increase",
        explanation: "'An increase' RZECZOWNIK naming change! 'An increase' - rise itself. To quarterly report. Noun form naming phenomenon - growth як thing. Quantifiable change substantywizowany - treating rise як countable event."
      }
    ]
  },

  relative_pronouns_omission: {
    name: "Opuszczanie zaimków względnych",
    description: "Kiedy możesz pominąć who/which/that",
    icon: Target,
    color: "from-indigo-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "rel_omit_1",
        question: "The book _____ I'm reading is absolutely fascinating and beautifully written!",
        translation: "(Książka którą czytam jest absolutnie fascynująca i pięknie napisana!)",
        options: ["that", "which", "what", "(no word)"],
        correct: "(no word)",
        explanation: "Możesz OPUŚCIĆ relative pronoun gdy jest object! 'The book I'm reading' = 'the book that I'm reading'. Pronoun optional като object. To о concise speech - natives often drop. When relative pronoun is object clause, English allows omission - smoother flow."
      },
      {
        id: "rel_omit_2",
        question: "The man _____ lives next door is a famous musician and composer internationally.",
        translation: "(Mężczyzna który mieszka obok jest słynnym muzykiem i kompozytorem międzynarodowo)",
        options: ["who", "which", "what", "(no word)"],
        correct: "who",
        explanation: "NIE możesz opuścić gdy pronoun jest PODMIOT! 'The man lives' incomplete - needs 'who'. To о identification. When relative pronoun является subject clause, nie może być dropped - grammatically necessary. Subject pronouns essential."
      },
      {
        id: "rel_omit_3",
        question: "This is the restaurant _____ we went to for our anniversary dinner celebration.",
        translation: "(To jest restauracja до której poszliśmy на naszą rocznicową kolację)",
        options: ["that", "which", "where", "(no word)"],
        correct: "(no word)",
        explanation: "Możesz опустить gdy object of preposition (na końcu)! 'The restaurant we went to' = 'that we went to'. To natural speech. Gdy przyimek kończy clause, pronoun droppable - very common в casual English. Smooth conversational style."
      },
      {
        id: "rel_omit_4",
        question: "The woman _____ I told you about yesterday got the promotion she deserved!",
        translation: "(Kobieta о której ci mówiłem wczoraj dostała awans którego zasługiwała!)",
        options: ["who", "that", "which", "(no word)"],
        correct: "(no word)",
        explanation: "Object pronoun droppable! 'The woman I told you about' natural без 'who/that'. To conversational. Przyimek 'about' на końcu allows pronoun omission - natives frequently drop в informal speech. Streamlined communication."
      },
      {
        id: "rel_omit_5",
        question: "The people _____ are waiting outside can come in now to the warm building.",
        translation: "(Ludzie którzy czekają на zewnątrz mogą wejść teraz до ciepłego budynku)",
        options: ["who", "which", "that", "(no word)"],
        correct: "who",
        explanation: "Subject pronoun обязательный! 'People are waiting' needs 'who' - can't drop. To instruction. Subject relative pronouns grammatically essential - sentence incomplete без. Identifying specific group requiring pronoun."
      },
      {
        id: "rel_omit_6",
        question: "Everything _____ he said at the meeting turned out to be completely accurate.",
        translation: "(Wszystko co powiedział на spotkaniu okazało się być całkowicie dokładne)",
        options: ["that", "which", "what", "(no word)"],
        correct: "(no word)",
        explanation: "После 'everything' możesz опустить 'that'! 'Everything he said' = 'everything that he said'. To validation. Indefinite pronouns (everything/something) allow dropping following 'that' gdy object - conversational economy. Confirmation statement."
      },
      {
        id: "rel_omit_7",
        question: "The house _____ is for sale belongs to my elderly retired neighbors next door.",
        translation: "(Dom który jest на sprzedaż należy до moich starszych emerytowanych sąsiadów obok)",
        options: ["that", "which", "what", "(no word)"],
        correct: "that",
        explanation: "Subject 'that' obowiązkowy! 'The house is' needs relative pronoun - can't drop. To real estate info. Subject pronouns essential - без них sentence grammatically broken. Property identification requiring pronoun."
      },
      {
        id: "rel_omit_8",
        question: "The movie _____ we watched last night was better than I expected honestly!",
        translation: "(Film który obejrzeliśmy wczoraj wieczorem był lepszy niż oczekiwałem szczerze!)",
        options: ["that", "which", "what", "(no word)"],
        correct: "(no word)",
        explanation: "Object pronoun optional! 'Movie we watched' perfectly fine без 'that/which'. To review. Natives habitually drop object relatives - sounds more natural в conversation. Film evaluation streamlined."
      },
      {
        id: "rel_omit_9",
        question: "There's something _____ I need to tell you about our project status urgently.",
        translation: "(Jest coś co muszę ci powiedzieć о statusie naszego projektu pilnie)",
        options: ["that", "which", "what", "(no word)"],
        correct: "(no word)",
        explanation: "После 'something' możesz drop 'that'! 'Something I need' = 'something that I need'. To urgent announcement. Indefinite pronouns allowing omission gdy 'that' jako object - casual speech pattern. Preparing для important information."
      },
      {
        id: "rel_omit_10",
        question: "The person _____ won the lottery wants to remain completely anonymous publicly.",
        translation: "(Osoba która wygrała loterię chce pozostać całkowicie anonimowa publicznie)",
        options: ["who", "that", "which", "(no word)"],
        correct: "who",
        explanation: "Subject pronoun required! 'Person won' incomplete - needs 'who/that'. To news story. Subject relatives essential - grammatically необходимы. Winner identification requiring pronoun. Can't drop subject pronouns."
      },
      {
        id: "rel_omit_11",
        question: "The keys _____ you're looking for are on the kitchen table right now.",
        translation: "(Klucze których szukasz są на kuchennym stole właśnie teraz)",
        options: ["that", "which", "what", "(no word)"],
        correct: "(no word)",
        explanation: "Object of 'looking for' droppable! 'Keys you're looking for' natural без pronoun. To helpful locating. Przyimek ending allows omission - very common pattern. Finding lost items - direct communication."
      },
      {
        id: "rel_omit_12",
        question: "The advice _____ she gave me was incredibly helpful during difficult decision.",
        translation: "(Rada którą mi dała była niesamowicie pomocna podczas trudnej decyzji)",
        options: ["that", "which", "what", "(no word)"],
        correct: "(no word)",
        explanation: "Object pronoun optional! 'Advice she gave' works perfectly без 'that'. To gratitude. Dropping object relatives common - streamlines sentence. Appreciation statement - acknowledging helpful guidance."
      },
      {
        id: "rel_omit_13",
        question: "Anyone _____ needs help should raise their hand and ask immediately without hesitation.",
        translation: "(Każdy kто potrzebuje pomocy powinien podnieść rękę i zapytać natychmiast без wahania)",
        options: ["who", "that", "which", "(no word)"],
        correct: "who",
        explanation: "Subject pronoun обязателен! 'Anyone needs' incomplete - must have 'who'. To classroom instruction. Subject relatives can't be dropped - grammatically essential. Open invitation requiring subject pronoun."
      },
      {
        id: "rel_omit_14",
        question: "The song _____ is playing right now is my absolute favorite of all time!",
        translation: "(Piosenka która gra właśnie teraz jest moją absolutną ulubioną wszech czasów!)",
        options: ["that", "which", "what", "(no word)"],
        correct: "that",
        explanation: "Subject pronoun required! 'Song is playing' needs relative pronoun - can't omit. To music appreciation. Subject pronouns grammatically necessary - sentence incomplete без. Current music identification."
      },
      {
        id: "rel_omit_15",
        question: "I can't find the email _____ you sent me yesterday about the meeting details.",
        translation: "(Nie mogę znaleźć emaila którego wysłałeś mi wczoraj о szczegółach spotkania)",
        options: ["that", "which", "what", "(no word)"],
        correct: "(no word)",
        explanation: "Object pronoun droppable! 'Email you sent' perfectly clear без 'that'. To searching. Object relatives commonly omitted - natural speech. Looking для correspondence - streamlined question."
      }
    ]
  }
};

export default part29Categories;