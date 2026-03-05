/**
 * POLISH → ENGLISH GRAMMAR - PART 22
 * 4 categories, 15 questions each - Nuanced expressions
 */

import { Zap, Scale, Layers, Clock } from "lucide-react";

export const part22Categories = {
  emphatic_do_structures: {
    name: "Struktury emfatyczne z 'do'",
    description: "I do believe, She does care, They did come",
    icon: Zap,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "emph_do_1",
        question: "I _____ understand your concerns, but we need to move forward with the plan.",
        translation: "(Naprawdę rozumiem twoje obawy, ale musimy iść do przodu z planem)",
        options: ["do", "am", "have", "did"],
        correct: "do",
        explanation: "'I do understand' używa 'do' dla podkreślenia! Normalnie 'I understand' ale dodanie 'do' pokazuje że NAPRAWDĘ rozumiesz mimo że działasz przeciwnie. To o validacji uczuć podczas maintaining course. Emphatic 'do' łagodzi contradiction - rozumiesz ALE musicie proceed."
      },
      {
        id: "emph_do_2",
        question: "She _____ care about your feelings - she's just not good at showing emotions openly.",
        translation: "(Ona faktycznie dba o twoje uczucia - po prostu nie jest dobra w pokazywaniu emocji otwarcie)",
        options: ["does", "is", "has", "did"],
        correct: "does",
        explanation: "'She does care' emphasizes że caring EXISTS mimo appearances! Może wydaje się cold ale faktycznie feels. 'Does' contradicts perception - defense przeciw misunderstanding. To o hidden emotions - niektórzy ludzie care deeply ale struggle z expression. Emphatic form validates underlying feeling."
      },
      {
        id: "emph_do_3",
        question: "They _____ come to the party last night - I saw them there myself personally!",
        translation: "(Oni faktycznie przyszli na imprezę wczoraj wieczorem - sam ich tam widziałem osobiście!)",
        options: ["did", "do", "have", "were"],
        correct: "did",
        explanation: "'They did come' używa past emphatic dla contradicting doubts! Ktoś twierdził że nie przyszli ale YOU SAW them. 'Did' + base verb dla emphatic past. To o correcting misinformation z personal testimony. Emphatic past proves doubters wrong through eyewitness evidence."
      },
      {
        id: "emph_do_4",
        question: "Please _____ come in and make yourself comfortable - don't be shy at all!",
        translation: "(Proszę faktycznie wejdź i rozgość się - nie wstydź się wcale!)",
        options: ["do", "does", "did", "are"],
        correct: "do",
        explanation: "'Do come in' to emphatic imperative! Wzmacnia invitation - nie tylko 'come in' ale genuinely welcoming. 'Do' + imperative shows sincerity i warmth. To o overcoming guest hesitation - emphasizing że welcome is real i heartfelt. Makes invitation feel more urgent i genuine."
      },
      {
        id: "emph_do_5",
        question: "I _____ hope you'll reconsider your decision to leave our company soon.",
        translation: "(Naprawdę mam nadzieję że przemyślisz swoją decyzję opuszczenia naszej firmy wkrótce)",
        options: ["do", "am", "have", "did"],
        correct: "do",
        explanation: "'I do hope' intensifies hope! Stronger niż simple 'I hope' - pokazuje depth of wishing. To persuasive language - trying convince someone to stay. 'Do' przed 'hope' adds urgency i sincerity do plea. Professional retention effort through emphatic expression."
      },
      {
        id: "emph_do_6",
        question: "He _____ finish his homework on time yesterday, despite all the distractions around.",
        translation: "(On faktycznie skończył swoją pracę domową na czas wczoraj, pomimo wszystkich rozproszenia wokół)",
        options: ["did", "do", "has", "was"],
        correct: "did",
        explanation: "'Did finish' emphasizes completion przeciw expectations! Było doubt bo distractions ale succeeded. Past emphatic proves doubters wrong. To defending achievement - pokazując że pomimo obstacles, task WAS completed. Validates effort when questioned."
      },
      {
        id: "emph_do_7",
        question: "_____ try to see it from their perspective before making harsh judgments quickly.",
        translation: "(Naprawdę spróbuj zobaczyć to z ich perspektywy przed wydawaniem ostrych osądów szybko)",
        options: ["Do", "Does", "Did", "Are"],
        correct: "Do",
        explanation: "'Do try' jako emphatic advice! Imperative wzmocnione przez 'do' - serious counsel. To o empathy - urging deeper understanding przed criticism. 'Do' makes request sound more important - nie casual suggestion ale earnest plea dla fairness i consideration."
      },
      {
        id: "emph_do_8",
        question: "She _____ look tired today - maybe we should suggest she take a break?",
        translation: "(Ona faktycznie wygląda zmęczona dzisiaj - może powinniśmy zasugerować żeby wzięła przerwę?)",
        options: ["does", "is", "has", "did"],
        correct: "does",
        explanation: "'Does look tired' potwierdza observation! Emphasizing że perception is valid - naprawdę wygląda exhausted. To concerned observation leading do caring suggestion. 'Does' validates worry - nie imagination ale real visible fatigue requiring response."
      },
      {
        id: "emph_do_9",
        question: "I _____ appreciate all the hard work you've put into this important project.",
        translation: "(Naprawdę doceniam całą ciężką pracę którą włożyłeś w ten ważny projekt)",
        options: ["do", "am", "have", "did"],
        correct: "do",
        explanation: "'I do appreciate' wzmacnia gratitude! Deeper niż simple 'I appreciate' - shows genuine recognition. To heartfelt thanks - emphasizing że appreciation is sincere i profound. 'Do' adds weight do acknowledgment - making gratitude feel more meaningful."
      },
      {
        id: "emph_do_10",
        question: "They _____ work hard, even if it doesn't always show in immediate results clearly.",
        translation: "(Oni faktycznie ciężko pracują, nawet jeśli nie zawsze pokazuje się to w natychmiastowych wynikach wyraźnie)",
        options: ["do", "are", "have", "did"],
        correct: "do",
        explanation: "'Do work hard' defends effort against appearances! Results may lag but effort IS there. To advocating dla team - protecting ich reputation when outcomes delayed. 'Do' insists na reality of effort mimo lack of visible proof yet."
      },
      {
        id: "emph_do_11",
        question: "_____ tell me if you need any help - I'm here to support you always!",
        translation: "(Naprawdę powiedz mi jeśli potrzebujesz jakiejkolwiek pomocy - jestem tu żeby cię wspierać zawsze!)",
        options: ["Do", "Does", "Did", "Are"],
        correct: "Do",
        explanation: "'Do tell me' jako earnest offer! Imperative + 'do' shows genuine availability. To sincere support offer - emphasizing że offer is real nie just polite gesture. 'Do' makes assistance feel more accessible - encouraging actual reach-out."
      },
      {
        id: "emph_do_12",
        question: "It _____ seem strange that he left so suddenly without any explanation to anyone.",
        translation: "(To faktycznie wydaje się dziwne że wyszedł tak nagle bez żadnego wyjaśnienia nikomu)",
        options: ["does", "is", "has", "did"],
        correct: "does",
        explanation: "'Does seem strange' potwierdza oddness! Emphasizing że strangeness is legitimate observation. To validating confusion - nie tylko ty myślisz że weird. 'Does' strengthens assessment - behavior genuinely IS unusual, not imagined peculiarity."
      },
      {
        id: "emph_do_13",
        question: "I _____ want to help you succeed in your career goals and aspirations fully.",
        translation: "(Naprawdę chcę ci pomóc odnieść sukces w twoich celach karierowych i aspiracjach w pełni)",
        options: ["do", "am", "have", "did"],
        correct: "do",
        explanation: "'I do want' emphasizes sincerity of desire! Stronger commitment niż simple 'I want'. To mentorship language - pokazując genuine investment w someone's success. 'Do' makes support feel more reliable - not casual wish but committed intention."
      },
      {
        id: "emph_do_14",
        question: "He _____ study a lot, but he also makes time for hobbies and social life balance.",
        translation: "(On faktycznie dużo się uczy, ale też znajduje czas na hobby i balans życia społecznego)",
        options: ["does", "is", "has", "did"],
        correct: "does",
        explanation: "'Does study a lot' acknowledges dedication while noting balance! Emphasizing że studying IS significant but not exclusive focus. To о well-rounded person - academic effort real but lifestyle balanced. 'Does' validates studiousness before highlighting other dimensions."
      },
      {
        id: "emph_do_15",
        question: "_____ remember to lock all doors and windows before leaving house every time!",
        translation: "(Naprawdę pamiętaj żeby zamknąć wszystkie drzwi i okna przed opuszczeniem domu za każdym razem!)",
        options: ["Do", "Does", "Did", "Are"],
        correct: "Do",
        explanation: "'Do remember' to urgent emphatic reminder! Imperative strengthened przez 'do' - shows importance. To safety warning - stressing criticality of habit. 'Do' makes instruction feel more serious - nie casual reminder but important security protocol requiring attention."
      }
    ]
  },

  comparative_structures_advanced: {
    name: "Struktury porównawcze - zaawansowane",
    description: "As... as, not so... as, the same... as",
    icon: Scale,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "comp_str_1",
        question: "This movie is just _____ good _____ the original one from years ago.",
        translation: "(Ten film jest dokładnie tak samo dobry jak oryginał sprzed lat)",
        options: ["as / as", "so / as", "as / than", "so / than"],
        correct: "as / as",
        explanation: "'As good as' dla equal quality comparison! Oba 'as' - first shows degree, second introduces compared thing. Równa jakość - sequel matches original. To positive review - remake didn't disappoint. 'As... as' standard dla showing things są on same level - parity statement."
      },
      {
        id: "comp_str_2",
        question: "The new model isn't _____ expensive _____ the previous version was last year.",
        translation: "(Nowy model nie jest tak drogi jak poprzednia wersja była w zeszłym roku)",
        options: ["as / as", "so / than", "as / than", "so / as"],
        correct: "as / as",
        explanation: "Negatywne comparison z 'not as... as'! Showing nowy jest cheaper (less expensive). 'Not as expensive as' = tańszy. To price comparison - newer surprisingly more affordable. Negative 'as... as' dla showing inequality - one falls short of other."
      },
      {
        id: "comp_str_3",
        question: "She's _____ talented _____ her famous sister in music and performing arts.",
        translation: "(Ona jest równie utalentowana jak jej słynna siostra w muzyce i sztukach wykonawczych)",
        options: ["as / as", "so / as", "more / than", "as / than"],
        correct: "as / as",
        explanation: "'As talented as' pokazuje równy talent! Obie siostry equally gifted - jedna nie overshadows drugiej. To о recognizing merit - younger/less famous doesn't mean less skilled. 'As... as' respects both achievements - refuses to diminish either."
      },
      {
        id: "comp_str_4",
        question: "His apartment is _____ the same size _____ mine, but better decorated nicely.",
        translation: "(Jego apartament jest tej samej wielkości co mój, ale lepiej udekorowany ładnie)",
        options: ["- / as", "the / than", "as / as", "so / as"],
        correct: "- / as",
        explanation: "'The same size as' używa 'as' nie 'than'! 'The same' + noun + 'as' dla identical characteristics. Size equal ale decoration differs. To apartment comparison - one dimension matching (size), another differing (style). 'Same... as' dla equivalence statements."
      },
      {
        id: "comp_str_5",
        question: "Today isn't _____ cold _____ yesterday was - it's much warmer actually.",
        translation: "(Dzisiaj nie jest tak zimno jak wczoraj było - jest znacznie cieplej faktycznie)",
        options: ["as / as", "so / than", "as / than", "so / as"],
        correct: "as / as",
        explanation: "'Not as cold as yesterday' pokazuje improvement! Temperature higher today. Negative comparison dla showing positive change - warming trend. To weather observation - contrasting consecutive days. Relief that conditions improved - 'not as cold' means more comfortable."
      },
      {
        id: "comp_str_6",
        question: "He drives _____ carefully _____ his experienced father does every day.",
        translation: "(On jeździ tak ostrożnie jak jego doświadczony ojciec robi każdego dnia)",
        options: ["as / as", "so / as", "more / than", "as / than"],
        correct: "as / as",
        explanation: "'As carefully as' dla equal caution! Son matches father's safe driving - learned well. 'As... as' z przysłówkami dla manner comparisons. To compliment - young driver pokazuje maturity matching experienced driver. Skill parity despite age gap."
      },
      {
        id: "comp_str_7",
        question: "The test wasn't _____ difficult _____ I expected it to be honestly.",
        translation: "(Test nie był tak trudny jak oczekiwałem że będzie szczerze)",
        options: ["as / as", "so / than", "as / than", "so / as"],
        correct: "as / as",
        explanation: "'Not as difficult as expected' = pleasant surprise! Anxiety was worse than reality. Negative comparison showing relief - feared worse. To о overthinking creating unnecessary stress. Reality less harsh niż imagination - 'not as bad as' common relief pattern."
      },
      {
        id: "comp_str_8",
        question: "My coffee is _____ the same temperature _____ yours now after cooling down.",
        translation: "(Moja kawa jest tej samej temperatury co twoja teraz po ostygnięciu)",
        options: ["- / as", "the / than", "as / as", "so / as"],
        correct: "- / as",
        explanation: "'The same temperature as' dla identical state! Both coffees cooled do same warmth. 'The same' + noun + 'as' dla matching qualities. To casual observation - noting convergence. Initially different (jedna hotter) ale time equalized - now matching."
      },
      {
        id: "comp_str_9",
        question: "Learning English is _____ as important _____ learning any other useful skill.",
        translation: "(Uczenie się angielskiego jest równie ważne jak uczenie się jakiejkolwiek innej użytecznej umiejętności)",
        options: ["just / as", "so / than", "as / than", "more / as"],
        correct: "just / as",
        explanation: "'Just as important as' emphasizes equality! 'Just' strengthens 'as... as' - dokładnie equally. To defending English learning value - not superior but certainly equal. Equality assertion - language learning deserves same priority jako other skills. Level playing field statement."
      },
      {
        id: "comp_str_10",
        question: "She doesn't sing _____ well _____ her sister, but she's improving quickly.",
        translation: "(Ona nie śpiewa tak dobrze jak jej siostra, ale szybko się poprawia)",
        options: ["as / as", "so / than", "as / than", "so / as"],
        correct: "as / as",
        explanation: "'Doesn't sing as well as' acknowledges current gap! Sister better NOW ale improvement happening. Negative comparison with positive note - recognizing current inequality while noting progress. To encouraging - current deficit temporary, trajectory promising."
      },
      {
        id: "comp_str_11",
        question: "The second book was _____ interesting _____ the first one in the series.",
        translation: "(Druga książka była równie interesująca jak pierwsza w serii)",
        options: ["as / as", "so / as", "more / than", "as / than"],
        correct: "as / as",
        explanation: "'As interesting as' dla maintained quality! Sequel didn't disappoint - matched first. To series review - consistency praise. Reader fear: sequels often weaker. Reality: quality sustained. 'As... as' celebrates maintaining standard across installments."
      },
      {
        id: "comp_str_12",
        question: "His explanation is _____ the same _____ what the teacher said in class.",
        translation: "(Jego wyjaśnienie jest takie samo jak to co nauczyciel powiedział w klasie)",
        options: ["- / as", "the / than", "as / as", "so / as"],
        correct: "- / as",
        explanation: "'The same as what the teacher said' pokazuje alignment! His understanding matches official teaching. 'The same as' dla identical content. To validation - correct comprehension confirmed przez matching source. Shows successful learning - student absorbed lesson accurately."
      },
      {
        id: "comp_str_13",
        question: "Running a marathon is not _____ easy _____ it might look from outside!",
        translation: "(Bieganie maratonu nie jest tak łatwe jak może wyglądać z zewnątrz!)",
        options: ["as / as", "so / than", "as / than", "so / as"],
        correct: "as / as",
        explanation: "'Not as easy as it looks' warns о hidden difficulty! Appearances deceiving - harder than seems. To cautioning против underestimation. Marathon deceptively challenging - looking doesn't reveal full struggle. 'Not as... as' corrects false impressions."
      },
      {
        id: "comp_str_14",
        question: "Today's weather is _____ lovely _____ yesterday's was - perfect for outdoor activities!",
        translation: "(Dzisiejsza pogoda jest równie urocza jak wczorajsza była - perfekcyjna na outdoor aktywności!)",
        options: ["as / as", "so / as", "more / than", "the / than"],
        correct: "as / as",
        explanation: "'As lovely as yesterday' celebruje consecutive good days! Two perfect days straight - luck continuing. To о grateful appreciation of sustained good conditions. 'As... as' shows consistency - quality maintained across time. Maximizing enjoyment while lasts."
      },
      {
        id: "comp_str_15",
        question: "This problem is _____ serious _____ we initially thought it would be originally.",
        translation: "(Ten problem jest równie poważny jak początkowo myśleliśmy że będzie oryginalnie)",
        options: ["as / as", "so / than", "more / as", "as / than"],
        correct: "as / as",
        explanation: "'As serious as we thought' confirms initial assessment! Expectations matched reality - problem neither worse nor better. To validation of judgment - initial evaluation was accurate. 'As... as' shows forecasting był correct - no surprises, confirms original concern level."
      }
    ]
  },

  restrictive_nonrestrictive: {
    name: "Klauzule definiujące vs niedefiniujące",
    description: "That vs which, przecinki czy nie",
    icon: Layers,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "rest_1",
        question: "The book _____ is on the table belongs to my sister who studies literature.",
        translation: "(Książka która jest na stole należy do mojej siostry która studiuje literaturę)",
        options: ["that", "which", ", which", ", that"],
        correct: "that",
        explanation: "'That' БEZ przecinków dla defining clauses! Identyfikujesz KTÓRĄ książkę - ta na stole (nie inna). Defining clause essential dla identification - bez tego nie wiadomo о której książce. 'That' preferred dla restrictive - narrows down which specific one meant."
      },
      {
        id: "rest_2",
        question: "My car, _____ I bought last year, is already having some mechanical problems.",
        translation: "(Mój samochód, który kupiłem w zeszłym roku, ma już jakieś mechaniczne problemy)",
        options: ["which", "that", "what", "who"],
        correct: "which",
        explanation: "'Which' Z przecinkami dla non-defining extra info! Masz tylko jeden samochód więc 'bought last year' jest additional detail nie identification. Przecinki pokazują info is bonus. 'Which' in non-defining clauses. 'That' NIE może być z przecinkami - tylko 'which'."
      },
      {
        id: "rest_3",
        question: "Students _____ don't submit homework on time will lose points from grade.",
        translation: "(Studenci którzy nie oddają pracy domowej na czas stracą punkty z oceny)",
        options: ["who", ", who", "which", ", which"],
        correct: "who",
        explanation: "'Who' БEZ przecinków dla defining! Określa KTÓRZY studenci - tylko ci którzy nie submit. Defining clause essential - rule applies selectively. Nie wszystkie studenci, tylko specific group (late submitters). No commas - restriction is point."
      },
      {
        id: "rest_4",
        question: "The Eiffel Tower, _____ is in Paris, attracts millions of tourists annually worldwide.",
        translation: "(Wieża Eiffla, która jest w Paryżu, przyciąga miliony turystów rocznie na świecie)",
        options: ["which", "that", "what", "where"],
        correct: "which",
        explanation: "'Which' z przecinkami dla famous landmark! Eiffel Tower известный - lokalizacja (Paris) is extra info, nie needed dla identification. Everyone knows KTÓRA tower. Przecinki делают Paris info supplementary. 'Which' dla non-essential additional facts."
      },
      {
        id: "rest_5",
        question: "The people _____ live next door are very friendly and always helpful to us.",
        translation: "(Ludzie którzy mieszkają obok są bardzo przyjaźni i zawsze pomocni dla nas)",
        options: ["who", ", who", "which", ", which"],
        correct: "who",
        explanation: "'Who' БEZ przecinków dla defining neighbors! Specifying KTÓRZY ludzie - ci obok (nie wszyscy ludzie). Defining clause identifies specific group. Location (next door) is definitional - separates these people from others. No commas - location is essential identifier."
      },
      {
        id: "rest_6",
        question: "Her latest book, _____ she published last month, is already a bestseller nationally.",
        translation: "(Jej najnowsza książka, którą opublikowała w zeszłym miesiącu, jest już bestsellerem krajowym)",
        options: ["which", "that", "what", "when"],
        correct: "which",
        explanation: "'Which' z przecinkami - 'latest book' already identifies! Publication date (last month) is additional context nie identification. Przecinki signal supplementary info. 'Which' w non-defining adds background bez being essential. Bestseller status is main news, timing is detail."
      },
      {
        id: "rest_7",
        question: "Chairs _____ are broken should be thrown away or repaired immediately for safety.",
        translation: "(Krzesła które są zepsute powinny być wyrzucone lub naprawione natychmiast dla bezpieczeństwa)",
        options: ["that", ", which", "which", ", that"],
        correct: "that",
        explanation: "'That' БEZ przecinków dla selecting subset! Not all chairs - tylko broken ones. Defining clause critical - instruction applies selectively. 'That are broken' narrows which chairs meant. Safety rule targeting specific condition - restriction is key point."
      },
      {
        id: "rest_8",
        question: "Mount Everest, _____ is the highest mountain, is located in the Himalayas region.",
        translation: "(Mount Everest, która jest najwyższą górą, znajduje się w regionie Himalajów)",
        options: ["which", "that", "what", "where"],
        correct: "which",
        explanation: "'Which' з przecinkami - Mt Everest известный! Height info (highest) is famous fact, не needed dla identification. Everyone knows which mountain. Przecinki делают superlative info explanatory. Location (Himalayas) is main новость of sentence."
      },
      {
        id: "rest_9",
        question: "The restaurant _____ we went to last night had amazing food and great service.",
        translation: "(Restauracja do której poszliśmy wczoraj wieczorem miała niesamowite jedzenie i świetną obsługę)",
        options: ["that", ", which", "which", ", that"],
        correct: "that",
        explanation: "'That' БEZ przecinków dla specifying! Którą restaurację - tę where went last night. Defining - identifies specific venue from many possible. Experience location essential identification. No commas - 'we went to' restricts which restaurant discussed."
      },
      {
        id: "rest_10",
        question: "My brother, _____ lives in London, is coming to visit us next weekend soon.",
        translation: "(Mój brat, który mieszka w Londynie, przyjeżdża nas odwiedzić w przyszły weekend wkrótce)",
        options: ["who", ", that", "that", "which"],
        correct: "who",
        explanation: "'Who' з przecinками - assuming only one brother! Location (London) is extra info, не needed identification (tylko один brat). Przecinki signal supplementary detail. Visit is news, location is context. 'Who' в non-defining dla additional information о known person."
      },
      {
        id: "rest_11",
        question: "Employees _____ arrive late repeatedly will face disciplinary action from management.",
        translation: "(Pracownicy którzy przychodzą późno wielokrotnie spotkają się z działaniem dyscyplinarnym od zarządu)",
        options: ["who", ", who", "which", ", which"],
        correct: "who",
        explanation: "'Who' БEZ przecinków dla defining offenders! Not all employees - tylko chronic latecomers. Defining clause identifies who rule targets. Selective application - behavior determines who's affected. No commas - restriction to subset is entire point of policy."
      },
      {
        id: "rest_12",
        question: "The Internet, _____ has changed our lives, was invented in the late 20th century.",
        translation: "(Internet, który zmienił nasze życia, został wynaleziony pod koniec 20 wieku)",
        options: ["which", "that", "what", "who"],
        correct: "which",
        explanation: "'Which' з przecinками - Internet is unique known thing! Impact info (changed lives) is famous fact, не needed identification. Everyone knows what Internet is. Przecinки делают impact assessment commentary. Invention timing is factual news."
      },
      {
        id: "rest_13",
        question: "The keys _____ you're looking for are in my coat pocket hanging there.",
        translation: "(Klucze których szukasz są w kieszeni mojego płaszcza wiszącego tam)",
        options: ["that", ", which", "which", ", that"],
        correct: "that",
        explanation: "'That' БEZ przecinków dla specifying lost items! Które klucze - te searching for. Defining identifies specific set among possible keys. Essential restriction - narrows to particular missing ones. Helpful location info requires first knowing WHICH keys - definition before solution."
      },
      {
        id: "rest_14",
        question: "Shakespeare, _____ wrote many famous plays, lived in England during Renaissance period.",
        translation: "(Szekspir, który napisał wiele słynnych sztuk, żył w Anglii podczas okresu Renesansu)",
        options: ["who", ", that", "that", "which"],
        correct: "who",
        explanation: "'Who' з przecinками - Shakespeare is известный unique person! Writing plays is famous fact, не needed identification. Everyone knows who Shakespeare is. Przecinки делают accomplishment background. Residence info is historical detail being taught."
      },
      {
        id: "rest_15",
        question: "People _____ exercise regularly tend to live longer and healthier lives overall.",
        translation: "(Ludzie którzy ćwiczą regularnie zwykle żyją dłużej i zdrowiej ogólnie)",
        options: ["who", ", who", "which", ", which"],
        correct: "who",
        explanation: "'Who' БEZ przecinków dla defining healthy group! Not all people - tylko ci who exercise. Defining clause identifies subset with specific behavior. Health correlation applies selectively. No commas - restriction to exercisers is crucial для meaningful health statement."
      }
    ]
  },

  habitual_past_would_vs_used: {
    name: "Przeszłe nawyki - 'would' vs 'used to'",
    description: "Różnice w opisywaniu przeszłych zwyczajów",
    icon: Clock,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "hab_1",
        question: "When I was a child, I _____ live in a small village in the countryside.",
        translation: "(Kiedy byłem dzieckiem, mieszkałem w małej wiosce na wsi)",
        options: ["used to", "would", "was", "am used to"],
        correct: "used to",
        explanation: "'Used to' dla past STATES (nie tylko actions)! 'Live' opisuje gdzie byłeś (state) не repeated action. 'Would' NIE działa dla states - только dla habits. To о past residence - where you were, не что repeatedly did. 'Used to' única opcja для states of being."
      },
      {
        id: "hab_2",
        question: "My grandmother _____ tell us fascinating stories about her youth every evening.",
        translation: "(Moja babcia opowiadała nam fascynujące historie о jej młodości każdego wieczoru)",
        options: ["would", "used to", "was", "has"],
        correct: "would",
        explanation: "'Would' LUB 'used to' dla repeated past actions! Oba działają но 'would' bardziej nostalgic i literary. Storytelling (repeated activity) każdego wieczoru. To fond memory - habitual evening ritual. 'Would' adds wistful tone - warm recollection of repeated cherished moments."
      },
      {
        id: "hab_3",
        question: "I _____ be very shy, but now I'm much more confident in social situations.",
        translation: "(Byłem bardzo nieśmiały, ale teraz jestem znacznie bardziej pewny w sytuacjach społecznych)",
        options: ["used to", "would", "was", "am used to"],
        correct: "used to",
        explanation: "'Used to be shy' dla past personality STATE! 'Be shy' opisuje character не action, więc tylko 'used to'. To о personality transformation - past trait changed. Contrast: used to be X, now Y. Shows personal growth - overcoming past limitation."
      },
      {
        id: "hab_4",
        question: "We _____ go swimming in the lake every hot summer afternoon together.",
        translation: "(Chodziliśmy pływać w jeziorze każdego gorącego letniego popołudnia razem)",
        options: ["would", "used to", "were", "have"],
        correct: "would",
        explanation: "'Would go swimming' dla nostalgic repeated action! 'Would' + activity creates wistful memory feel. Swimming (repeated fun) каждого afternoon. To childhood summer memory - regular joyful ritual. 'Would' more evocative niż 'used to' - paints vivid recurring scene."
      },
      {
        id: "hab_5",
        question: "There _____ be a cinema on this corner, but it closed down years ago.",
        translation: "(Kiedyś było kino na tym rogu, ale zamknęło się lata temu)",
        options: ["used to", "would", "was", "has"],
        correct: "used to",
        explanation: "'There used to be' dla past existence! Było (state of existing) не action. 'Would' НЕ działa z 'there is/was'. To о changed neighborhood - building/business gone. 'Used to' unique dla existence statements - couldn't say 'would be' here."
      },
      {
        id: "hab_6",
        question: "He _____ play the guitar beautifully, but he gave it up after injury.",
        translation: "(Grał pięknie na gitarze, ale porzucił to po kontuzji)",
        options: ["used to", "would", "was", "has"],
        correct: "used to",
        explanation: "'Used to play' подkreśla że stopped! 'Used to' implies не longer doing - discontinued habit. 'Would play' wouldn't show cessation clearly. To о lost hobby - injury ended musical pursuit. 'Used to' perfect dla emphasizing contrast: did before, doesn't now."
      },
      {
        id: "hab_7",
        question: "On Sundays, we _____ have big family dinners with all relatives gathered.",
        translation: "(W niedziele mieliśmy duże rodzinne obiady ze wszystkimi krewnymi zebranymi)",
        options: ["would", "used to", "were", "have"],
        correct: "would",
        explanation: "'Would have dinners' для nostalgic Sunday ritual! Repeated family tradition (action). 'Would' creates warm tone - beloved routine. Weekly gathering (regular event) portrayed fondly. 'Would' adds emotional warmth to memory - 'used to' more neutral factual."
      },
      {
        id: "hab_8",
        question: "I _____ believe in Santa Claus when I was a young innocent child.",
        translation: "(Wierzyłem w Świętego Mikołaja kiedy byłem młodym niewinnym dzieckiem)",
        options: ["used to", "would", "was", "have"],
        correct: "used to",
        explanation: "'Used to believe' dla past mental STATE! Belief (state of mind) не action. 'Would' НЕ działa для states. To childhood innocence memory - belief changed з wiekiem. Loss of belief natural development - 'used to' marks transition from believing to knowing."
      },
      {
        id: "hab_9",
        question: "My father _____ take us fishing by the river early every Saturday morning.",
        translation: "(Mój ojciec zabierał nas na ryby nad rzekę wcześnie każdej soboty rano)",
        options: ["would", "used to", "was", "has"],
        correct: "would",
        explanation: "'Would take us fishing' для cherished repeated activity! Father-child bonding ritual. 'Would' creates nostalgia - treasured recurring memory. Weekly tradition (repeated experience) recalled warmly. 'Would' adds sentimental quality - painting loving family scene repeatedly experienced."
      },
      {
        id: "hab_10",
        question: "This building _____ be a hospital, but now it's luxury apartment complex.",
        translation: "(Ten budynek kiedyś był szpitalem, ale teraz to luksusowy kompleks apartamentów)",
        options: ["used to", "would", "was", "has"],
        correct: "used to",
        explanation: "'Used to be hospital' для past function! Building WAS hospital (state/identity) не action. 'Would' НЕ działa for states of being. To о repurposing - building changed use. Urban development story - medical facility became residential. 'Used to' marks identity transformation."
      },
      {
        id: "hab_11",
        question: "Whenever it rained, the children _____ jump in puddles and get completely muddy.",
        translation: "(Kiedykolwiek padało, dzieci skakały w kałuże i brudziły się całkowicie)",
        options: ["would", "used to", "were", "have"],
        correct: "would",
        explanation: "'Whenever' + 'would' для conditional habits! Rain (condition) triggered puddle jumping (response). 'Would' + 'whenever/when' creates pattern - certain circumstance reliably produced behavior. Childhood playfulness memory - rain wasn't obstacle but invitation. Conditional habitual pattern."
      },
      {
        id: "hab_12",
        question: "I _____ to spicy food now after living in Mexico for three years.",
        translation: "(Jestem przyzwyczajony do ostrego jedzenia teraz po mieszkaniu w Meksyku przez trzy lata)",
        options: ["am used", "used", "would", "use"],
        correct: "am used",
        explanation: "'Am used to' = accustomed NOW (НЕ past habit)! 'Be used to' о current adaptation nie 'used to' (past). Developed tolerance через exposure. To acquired taste - prolonged experience created comfort. Different structure entirely - 'am used to' present state, 'used to' past habit."
      },
      {
        id: "hab_13",
        question: "She _____ walk to school every day, but now she takes the bus instead.",
        translation: "(Chodziła do szkoły każdego dnia, ale teraz jeździ autobusem zamiast)",
        options: ["used to", "would", "was", "has"],
        correct: "used to",
        explanation: "'Used to walk' emphasizes change! Past habit (walking) contrasted з present habit (bus). 'Used to' + 'but now' structure perfect для showing transitions. To lifestyle change - transportation method evolved. Clear before/after - 'used to' highlights discontinued practice."
      },
      {
        id: "hab_14",
        question: "On summer evenings, we _____ sit outside and watch the beautiful sunset together.",
        translation: "(Letnimi wieczorami siadaliśmy na zewnątrz i oglądaliśmy piękny zachód słońca razem)",
        options: ["would", "used to", "were", "have"],
        correct: "would",
        explanation: "'Would sit and watch' для repeated pleasant ritual! Summer evening routine (seasonal habit). 'Would' paints recurring peaceful scene - nostalgia for simple pleasures. Repeated enjoyment of nature. 'Would' adds warmth - treasured memory of regular shared moments."
      },
      {
        id: "hab_15",
        question: "There _____ be much more green space here, before all the construction started.",
        translation: "(Kiedyś było znacznie więcej zielonej przestrzeni tutaj, zanim cała budowa się zaczęła)",
        options: ["used to", "would", "was", "has"],
        correct: "used to",
        explanation: "'Used to be more space' для past environmental state! Existence of space (state) не action. 'Would' НЕ działa. To о urban development regret - green areas lost to construction. Environmental change documented - 'used to' marks что was before transformation eliminated it."
      }
    ]
  },

  dummy_subjects_advanced: {
    name: "Podmiot formalny 'it' vs 'there'",
    description: "It's raining vs There's a problem",
    icon: Layers,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "dummy_1",
        question: "_____ is raining heavily outside - don't forget to take your umbrella with you!",
        translation: "(Pada mocno na zewnątrz - nie zapomnij wziąć parasola ze sobą!)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It' dla weather! Zawsze 'it rains/snows' не 'there rains'. 'It' jako dummy subject dla weather phenomena - standardowa конструкция. To weather warning - heavy rain means umbrella needed. Fixed pattern: It + weather verb - universal English rule."
      },
      {
        id: "dummy_2",
        question: "_____ are many reasons why people choose to learn new languages throughout life.",
        translation: "(Jest wiele powodów dlaczego ludzie wybierają uczenie się nowych języków przez życie)",
        options: ["There", "It", "They", "These"],
        correct: "There",
        explanation: "'There are' wprowadza existence of things! 'There' + be + noun dla talking о что exists. Multiple reasons exist - 'there are' presents them. To introduction do explanation - announcing presence before listing. 'There' для bringing new information into discussion."
      },
      {
        id: "dummy_3",
        question: "_____ takes about two hours to drive from here to the nearest big city.",
        translation: "(Zajmuje około dwóch godzin jazdy stąd do najbliższego dużego miasta)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It takes' для time/effort required! 'It' jako dummy dla distance/duration statements. Not 'there takes' - 'it' standard для expressing requirements. To practical travel info - setting expectations для journey length. Fixed expression: It + takes + time."
      },
      {
        id: "dummy_4",
        question: "_____ seems to be a problem with your internet connection right now.",
        translation: "(Wydaje się być problem z twoim połączeniem internetowym właśnie teraz)",
        options: ["There", "It", "This", "That"],
        correct: "There",
        explanation: "'There seems to be' introduces discovered problem! 'There' + seems + to be для noticing existence. Problem emerged - 'there' announces its presence. To tech troubleshooting observation - identifying issue existence before diagnosing cause. 'There' brings problem into awareness."
      },
      {
        id: "dummy_5",
        question: "_____ is getting dark early these days - winter is approaching soon now.",
        translation: "(Robi się ciemno wcześnie w te dni - zima się zbliża wkrótce teraz)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It's getting dark' для light conditions! 'It' dla daylight/darkness statements. Seasonal change observation - days shortening. Not 'there's getting' - 'it' standard для environmental conditions. Fixed pattern: It + gets + adjective (dark/light/cold/warm)."
      },
      {
        id: "dummy_6",
        question: "_____ was a lot of traffic on the highway this morning during rush hour.",
        translation: "(Był duży ruch na autostradzie dziś rano podczas godzin szczytu)",
        options: ["There", "It", "This", "That"],
        correct: "There",
        explanation: "'There was traffic' introduces past situation! 'There' + be dla describing что existed. Congestion (existed condition) explained. To commute complaint - reporting encountered obstacle. 'There' presents situation as discovered fact - you encountered it."
      },
      {
        id: "dummy_7",
        question: "_____ is important to arrive on time for job interviews always without exception.",
        translation: "(Jest ważne żeby przybyć na czas na rozmowy kwalifikacyjne zawsze bez wyjątku)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It is important to' używa 'it' jako placeholder! Real subject 'to arrive on time' delayed. 'It' holds subject position. To professional advice - punctuality critical. Fixed structure: It + be + adjective + to infinitive. Formal way of stating necessities."
      },
      {
        id: "dummy_8",
        question: "_____ isn't enough time to finish all this work before the deadline tomorrow.",
        translation: "(Nie ma wystarczająco czasu żeby skończyć całą tę pracę przed terminem jutro)",
        options: ["There", "It", "This", "That"],
        correct: "There",
        explanation: "'There isn't enough time' о insufficiency! 'There' + be для quantity/availability statements. Not enough exists - scarcity. To time pressure complaint - insufficient resources. 'There' announces lack - bringing inadequacy into focus requiring response."
      },
      {
        id: "dummy_9",
        question: "_____ was nice meeting you today - I hope we can work together soon!",
        translation: "(Miło było spotkać cię dzisiaj - mam nadzieję że możemy pracować razem wkrótce!)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It was nice meeting' używa 'it' для experiences! 'It' jako dummy dla describing encounter. Polite closing phrase - expressing pleasure. Fixed expression: It + was + adjective + gerund. Professional networking courtesy - positive impression statement."
      },
      {
        id: "dummy_10",
        question: "_____ is no excuse for being rude to others, regardless of circumstances always.",
        translation: "(Nie ma wymówki dla bycia niegrzecznym dla innych, niezależnie od okoliczności zawsze)",
        options: ["There", "It", "This", "That"],
        correct: "There",
        explanation: "'There is no excuse' negates justification! 'There' + be + no для absolute denials. Zero tolerance statement - no valid reason exists. To moral absolute - behavior inexcusable under any conditions. 'There is no' creates categorical rejection."
      },
      {
        id: "dummy_11",
        question: "_____ sounds like someone is knocking on the front door loudly right now.",
        translation: "(Brzmi jakby ktoś pukał do frontowych drzwi głośno właśnie teraz)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It sounds like' для perceptions! 'It' dla describing что you hear/sense. Auditory observation - noticing sound. Not 'there sounds' - 'it' standard для sensory reports. Alerting to possible visitor - sound interpretation shared."
      },
      {
        id: "dummy_12",
        question: "_____ must be a mistake in these calculations - the numbers don't add up correctly.",
        translation: "(Musi być błąd w tych obliczeniach - liczby się nie zgadzają poprawnie)",
        options: ["There", "It", "This", "That"],
        correct: "There",
        explanation: "'There must be' deduces existence! Logic suggests error exists. 'There' + modal для confident assumptions о presence. Numbers wrong means mistake somewhere. To detective work - evidence (wrong sums) proves something (error) must exist."
      },
      {
        id: "dummy_13",
        question: "_____ is freezing cold in this room - can we turn on the heating please?",
        translation: "(Jest lodowato zimno w tym pokoju - czy możemy włączyć ogrzewanie proszę?)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It's freezing' dla temperature sensation! 'It' для environmental conditions. Cold level unbearable - requesting heat. Not 'there is freezing' - 'it' standard для temp/comfort statements. Physical discomfort expressed through 'it' + adjective pattern."
      },
      {
        id: "dummy_14",
        question: "_____ seems to be some confusion about the meeting schedule and location details.",
        translation: "(Wydaje się być jakieś zamieszanie о harmonogramie spotkania i szczegółach lokalizacji)",
        options: ["There", "It", "This", "That"],
        correct: "There",
        explanation: "'There seems to be' introduces apparent problem! 'There' + seems для uncertain existence. Confusion apparent (noticed) - 'there' presents observed issue. To clarification needed situation - announcing presence of misunderstanding requiring resolution. Diplomatic problem identification."
      },
      {
        id: "dummy_15",
        question: "_____ is difficult to learn a new language without consistent regular practice daily.",
        translation: "(Jest trudno nauczyć się nowego języka bez konsekwentnej regularnej praktyki codziennie)",
        options: ["It", "There", "This", "That"],
        correct: "It",
        explanation: "'It is difficult to learn' używa 'it' placeholder! Real subject 'to learn' delayed. 'It' formal subject structure. To language learning truth - practice necessity. Fixed: It + be + adjective + infinitive. General statement о learning requirements."
      }
    ]
  }
};

export default part22Categories;