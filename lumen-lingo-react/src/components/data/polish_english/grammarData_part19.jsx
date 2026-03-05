/**
 * POLISH → ENGLISH GRAMMAR - PART 19
 * 4 categories, 15 questions each - Mastery expressions
 */

import { Zap, Target, Flame, Sparkles } from "lucide-react";

export const part19Categories = {
  advanced_passive_forms: {
    name: "Strona bierna - zaawansowane formy",
    description: "Being done, having been done, to be done",
    icon: Zap,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "adv_pass_1",
        question: "The house is _____ painted by professional decorators this entire week.",
        translation: "(Dom jest malowany przez profesjonalnych dekoratorów przez cały ten tydzień)",
        options: ["being", "been", "be", "having been"],
        correct: "being",
        explanation: "'Is being painted' to present continuous passive! Akcja happening RIGHT NOW w passive voice. 'Being' + past participle dla ongoing passive actions. To o procesie w toku - malowanie nie finished yet. Continuous passive pokazuje że praca jest currently underway, not completed."
      },
      {
        id: "adv_pass_2",
        question: "The report needs _____ finished by tomorrow morning's important deadline.",
        translation: "(Raport musi być skończony do jutrzejszego porannego ważnego deadline)",
        options: ["to be", "being", "been", "be"],
        correct: "to be",
        explanation: "'Needs to be finished' używa infinitive passive! Po 'need/want/expect' używaj 'to be' + past participle. To o requirements - raport wymaga completion. Infinitive passive dla stating necessities. Business communication o deadlines i deliverables - co must be done."
      },
      {
        id: "adv_pass_3",
        question: "_____ caught cheating on the exam, he was expelled from university immediately.",
        translation: "(Będąc złapanym na ściąganiu na egzaminie, został wyrzucony z uniwersytetu natychmiast)",
        options: ["Having been", "Being", "Been", "To be"],
        correct: "Having been",
        explanation: "'Having been caught' to perfect passive participle! Pokazuje że catching happened PRZED expulsion. Perfect participle dla completed passive action przed inną akcją. To o sequence - złapanie (first passive) spowodowało expulsion (second result). Używane dla showing cause-effect w passive."
      },
      {
        id: "adv_pass_4",
        question: "She enjoys _____ praised by her teacher for her excellent creative work.",
        translation: "(Lubi być chwalona przez swoją nauczycielkę za jej doskonałą kreatywną pracę)",
        options: ["being", "be", "been", "to be"],
        correct: "being",
        explanation: "'Enjoys being praised' używa gerund passive! Po czasownikach jak 'enjoy/avoid/finish' używaj 'being' + past participle. Ona JEST chwaloną (passive). To o receiving positive recognition - lubi dostawać acknowledgment. Gerund passive dla emotions o receiving actions."
      },
      {
        id: "adv_pass_5",
        question: "The project is expected _____ completed by the end of this month finally.",
        translation: "(Oczekuje się że projekt zostanie ukończony do końca tego miesiąca w końcu)",
        options: ["to be", "being", "been", "be"],
        correct: "to be",
        explanation: "'Is expected to be completed' to passive + infinitive passive! Podwójna passive - projekt IS expected (passive) AND będzie completed (infinitive passive). Po 'is expected/believed/thought' używaj 'to be'. To formal projection - stating anticipated completion. Layered passive dla formal predictions."
      },
      {
        id: "adv_pass_6",
        question: "I don't like _____ told what to do all the time by everyone around me.",
        translation: "(Nie lubię być mówione co robić cały czas przez wszystkich wokół mnie)",
        options: ["being", "be", "been", "to be"],
        correct: "being",
        explanation: "'Don't like being told' używa gerund passive dla dislikes! Nie lubisz BYCIA mówionego (receiving unwanted direction). 'Being told' = passive gerund po 'like/hate/enjoy'. To o autonomy - disliking constant direction od innych. Asserting independence przez expressing irritation z control."
      },
      {
        id: "adv_pass_7",
        question: "_____ built in the 18th century, this cathedral is a historical architectural treasure.",
        translation: "(Zbudowana w 18 wieku, ta katedra jest historycznym architektonicznym skarbem)",
        options: ["Having been", "Being", "Been", "To be"],
        correct: "Having been",
        explanation: "'Having been built' to historical passive participle! Perfect passive dla completed construction w distant past still relevant now. Budowa (18th century completed action) explains current status (treasure). To architectural history - old age adds value. Perfect passive participle links past creation do present significance."
      },
      {
        id: "adv_pass_8",
        question: "The documents require _____ signed by both parties before the transaction proceeds.",
        translation: "(Dokumenty wymagają być podpisane przez obie strony zanim transakcja przebiegnie)",
        options: ["being", "to be", "been", "be"],
        correct: "being",
        explanation: "'Require being signed' lub 'require to be signed' - oba działają! Gerund 'being' po 'require' jest British preference. Dokumenty BĘDĄ podpisane (passive). To legal requirement - signatures needed dla validity. Gerund passive dla necessities w formal documentation contexts."
      },
      {
        id: "adv_pass_9",
        question: "This is the best movie _____ this year according to all the critics' reviews.",
        translation: "(To jest najlepszy film wyprodukowany w tym roku według wszystkich recenzji krytyków)",
        options: ["to be made", "being made", "made", "making"],
        correct: "to be made",
        explanation: "'To be made this year' po superlative dla timeframe! 'Best movie to be made' używa infinitive passive. To critical acclaim statement - highest rating w current year. Infinitive passive po superlatives dla defining timeframe of comparison. Formal way of establishing supremacy w category."
      },
      {
        id: "adv_pass_10",
        question: "I remember _____ taken to the zoo as a small child by my loving parents.",
        translation: "(Pamiętam bycie zabierane do zoo jako małe dziecko przez moich kochających rodziców)",
        options: ["being", "be", "been", "to be"],
        correct: "being",
        explanation: "'Remember being taken' dla childhood memories! Gerund passive po 'remember'. Byłeś ZABIERANY (passive - parents took you). To nostalgic memory - receiving care jako dziecko. Gerund passive dla recalling experiences gdzie byłeś patient (receiving action) nie agent."
      },
      {
        id: "adv_pass_11",
        question: "The building appears _____ damaged in last night's severe storm and winds.",
        translation: "(Budynek wydaje się być uszkodzony w wczorajszej nocnej ciężkiej burzy i wiatrach)",
        options: ["to have been", "being", "to be", "been"],
        correct: "to have been",
        explanation: "'Appears to have been damaged' łączy seem + perfect passive! Wygląda (now) jakby BYŁ damaged (past event). Infinitive perfect passive dla past passive actions że appear true now. To assessment of storm damage - visible now ale damage occurred wczoraj. Complex passive showing past event's present evidence."
      },
      {
        id: "adv_pass_12",
        question: "The children hate _____ forced to eat vegetables they don't like at all.",
        translation: "(Dzieci nienawidzą być zmuszane do jedzenia warzyw których w ogóle nie lubią)",
        options: ["being", "be", "been", "to be"],
        correct: "being",
        explanation: "'Hate being forced' używa gerund passive dla strong dislike! SĄ zmuszane (passive) i tego nienawidzą. 'Being forced' = receiving unwanted pressure. To o childhood battles - resistance do healthy eating. Gerund passive dla describing unpleasant experiences repeatedly endured."
      },
      {
        id: "adv_pass_13",
        question: "There's a lot of work _____ done before the big event next week finally.",
        translation: "(Jest dużo pracy do zrobienia przed wielkim wydarzeniem w przyszłym tygodniu w końcu)",
        options: ["to be", "being", "been", "be"],
        correct: "to be",
        explanation: "'Work to be done' pokazuje pending tasks! Infinitive passive dla future necessary actions. Praca BĘDZIE zrobiona (needs doing). To project management - identifying remaining deliverables. 'To be done' lista future passive requirements - what still awaits completion."
      },
      {
        id: "adv_pass_14",
        question: "I don't want _____ disturbed during my important video conference call this afternoon.",
        translation: "(Nie chcę być przeszkadzany podczas mojego ważnego video conference call dziś po południu)",
        options: ["to be", "being", "been", "be"],
        correct: "to be",
        explanation: "'Want to be disturbed' używa infinitive passive dla desires! Nie chcesz BYCIA disturbed (passive wish). Po 'want/need/expect' używaj 'to be' + past participle. To boundary setting - requesting undisturbed time. Infinitive passive dla expressing preferences o how być treated."
      },
      {
        id: "adv_pass_15",
        question: "_____ given another chance, I would definitely do things very differently than before.",
        translation: "(Będąc danym kolejną szansę, zdecydowanie zrobiłbym rzeczy bardzo inaczej niż wcześniej)",
        options: ["Being", "Been", "Having been", "To be"],
        correct: "Being",
        explanation: "'Being given another chance' to conditional passive participle! Gdyby CI DANO (passive condition). Present passive participle dla hypothetical situations. To o regret i desire dla do-over - gdyby możliwość, would make different choices. Conditional thinking using passive dla imagining receiving opportunity."
      }
    ]
  },

  complex_noun_phrases: {
    name: "Złożone frazy rzeczownikowe",
    description: "The fact that, the idea of, the possibility of",
    icon: Target,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    questions: [
      {
        id: "cnp_1",
        question: "The _____ that he lied about his qualifications is deeply troubling and concerning.",
        translation: "(Fakt że skłamał o swoich kwalifikacjach jest głęboko niepokojący i budzący niepokój)",
        options: ["fact", "idea", "thought", "belief"],
        correct: "fact",
        explanation: "'The fact that' introduces established truth! 'Fact' + 'that clause' dla known information będącej discussed. To serious statement - lying o credentials jest proven. 'The fact that' używane dla assertions presented jako indisputable - separating opinions od verified truths. Carries weight of certainty."
      },
      {
        id: "cnp_2",
        question: "The _____ of traveling around the world excites me more than anything else!",
        translation: "(Pomysł podróżowania po całym świecie ekscytuje mnie bardziej niż cokolwiek innego!)",
        options: ["idea", "fact", "truth", "reality"],
        correct: "idea",
        explanation: "'The idea of' + gerund dla concepts! 'Idea of traveling' = thought/concept (nie actual travel yet). To o dreams i aspirations - thinking about possibility creates excitement. 'The idea of' dla discussing concepts, plans, or imagined scenarios - mental constructs nie actual events."
      },
      {
        id: "cnp_3",
        question: "There's a strong _____ that it will rain heavily during our outdoor wedding ceremony.",
        translation: "(Jest duża możliwość że będzie mocno padać podczas naszej zewnętrznej ceremonii ślubnej)",
        options: ["possibility", "fact", "certainty", "truth"],
        correct: "possibility",
        explanation: "'Possibility that it will rain' wyraża uncertain future! 'Possibility' + 'that clause' dla things które mogą się stać. To anxiety o weather - ważne wydarzenie threatened przez unpredictable conditions. 'Possibility' softer niż 'likelihood' - acknowledging risk bez claiming certainty."
      },
      {
        id: "cnp_4",
        question: "I appreciate your _____ to help me with this difficult complicated project work.",
        translation: "(Doceniam twoją ofertę pomocy mi z tym trudnym skomplikowanym projektem)",
        options: ["offer", "offering", "offered", "offers"],
        correct: "offer",
        explanation: "'Your offer to help' używa noun + infinitive! 'Offer' (rzeczownik) + 'to help' (infinitive showing purpose). To formal gratitude - appreciating generous proposal. Abstract nouns (offer/decision/plan) często followed przez 'to' infinitive showing intended action. Professional appreciation language."
      },
      {
        id: "cnp_5",
        question: "The _____ of losing my job keeps me awake at night with constant worry.",
        translation: "(Strach przed utratą mojej pracy nie daje mi spać w nocy z ciągłym zmartwieniem)",
        options: ["fear", "fact", "idea", "possibility"],
        correct: "fear",
        explanation: "'The fear of losing' używa noun + gerund dla anxiety! 'Fear of' + gerund describes co cię straszy. To o job insecurity - economic anxiety affecting sleep. Abstract emotion nouns (fear/joy/pleasure) + 'of' + gerund dla describing emotional reactions do scenarios."
      },
      {
        id: "adv_pass_6",
        question: "His _____ to resign from the company shocked everyone in the entire organization.",
        translation: "(Jego decyzja rezygnacji z firmy zaskoczyła wszystkich w całej organizacji)",
        options: ["decision", "deciding", "decided", "decides"],
        correct: "decision",
        explanation: "'His decision to resign' łączy abstract noun z infinitive action! 'Decision' (noun) + 'to resign' (intended action). To o unexpected choice - resignation wasn't anticipated. Decision nouns + infinitive dla showing choices made i their directions. Formal way of discussing resolutions."
      },
      {
        id: "cnp_7",
        question: "There's no _____ of finishing this huge task in just one day alone unfortunately.",
        translation: "(Nie ma szansy skończenia tego ogromnego zadania w tylko jeden dzień samemu niestety)",
        options: ["chance", "fact", "truth", "reality"],
        correct: "chance",
        explanation: "'No chance of finishing' wyraża impossibility! 'Chance of' + gerund dla likelihood assessment. Zero possibility - task too big dla available time. To realistic assessment - acknowledging limitations. 'No chance of' stronger niż 'unlikely to' - completely ruling out possibility."
      },
      {
        id: "cnp_8",
        question: "The _____ that the Earth is round was once considered controversial and heretical.",
        translation: "(Fakt że Ziemia jest okrągła był kiedyś uważany za kontrowersyjny i heretycki)",
        options: ["fact", "idea", "possibility", "chance"],
        correct: "fact",
        explanation: "'The fact that Earth is round' dla historical truth! Currently accepted fact ale was once disputed. 'The fact that' używane nawet dla things że were questioned - asserting current understanding jako fact. To scientific history - pokazuje jak knowledge evolves, controversies become accepted truths."
      },
      {
        id: "cnp_9",
        question: "We need to discuss the _____ of expanding our business into new foreign markets.",
        translation: "(Musimy omówić możliwość ekspansji naszego biznesu na nowe zagraniczne rynki)",
        options: ["possibility", "fact", "truth", "reality"],
        correct: "possibility",
        explanation: "'The possibility of expanding' dla business considerations! 'Possibility of' + gerund dla options being evaluated. Not decided yet - still discussing whether do it. To strategic planning language - exploring potential moves. 'Possibility' keeps options open podczas discussing feasibility."
      },
      {
        id: "cnp_10",
        question: "I have serious _____ about whether this risky plan will actually work successfully.",
        translation: "(Mam poważne wątpliwości czy ten ryzykowny plan faktycznie zadziała pomyślnie)",
        options: ["doubts", "facts", "truths", "certainties"],
        correct: "doubts",
        explanation: "'Doubts about whether' wyraża skepticism! 'Doubts' (plural) + 'whether' clause dla questioned outcomes. Mnoga forma pokazuje multiple concerns. To cautious evaluation - questioning viability of risky venture. 'Doubts about' dla expressing reservations o plans lub claims."
      },
      {
        id: "cnp_11",
        question: "The _____ for better working conditions is growing stronger among all employees daily.",
        translation: "(Żądanie lepszych warunków pracy rośnie silniej wśród wszystkich pracowników codziennie)",
        options: ["demand", "demanding", "demanded", "demands"],
        correct: "demand",
        explanation: "'The demand for better conditions' używa abstract noun + 'for'! 'Demand' (noun) + 'for' (co jest demanded). To o labor movement - workers seeking improvements. Abstract action nouns (demand/need/desire) + 'for' + noun showing co jest wanted. Collective voice language."
      },
      {
        id: "cnp_12",
        question: "His _____ in his own abilities is admirable and inspiring to younger students.",
        translation: "(Jego wiara we własne umiejętności jest godna podziwu i inspirująca dla młodszych studentów)",
        options: ["belief", "believing", "believed", "believes"],
        correct: "belief",
        explanation: "'His belief in abilities' to abstract confidence noun! 'Belief in' + noun dla confidence about something. To o self-assurance - positive mental state. Abstract mental state nouns (belief/faith/trust) + 'in' dla showing co jest believed in. Character trait that inspires others."
      },
      {
        id: "cnp_13",
        question: "The _____ to succeed motivated him to work harder than ever before in life.",
        translation: "(Pragnienie sukcesu motywowało go do pracy ciężej niż kiedykolwiek wcześniej w życiu)",
        options: ["desire", "desiring", "desired", "desires"],
        correct: "desire",
        explanation: "'The desire to succeed' łączy emotion noun z infinitive goal! 'Desire' + 'to succeed' showing ambition. To o motivation - strong want driving effort. Abstract want nouns (desire/wish/hope) + 'to' infinitive dla showing aspired outcomes. Internal drive language."
      },
      {
        id: "cnp_14",
        question: "Despite the _____ of success, they decided to try anyway with full commitment.",
        translation: "(Pomimo braku sukcesu, zdecydowali się spróbować mimo wszystko z pełnym zaangażowaniem)",
        options: ["lack", "lacking", "lacked", "lacks"],
        correct: "lack",
        explanation: "'The lack of success' używa 'lack' jako noun + 'of'! 'Lack' (absence) + 'of' + co brakuje. To o perseverance - trying mimo past failures. 'Lack of' dla describing deficiencies lub absences. Shows determination - absence of positive outcome nie prevented attempt."
      },
      {
        id: "cnp_15",
        question: "We need to consider the _____ of postponing the important event to later date.",
        translation: "(Musimy rozważyć konsekwencje przełożenia ważnego wydarzenia na późniejszą datę)",
        options: ["consequences", "consequencing", "consequenced", "consequence"],
        correct: "consequences",
        explanation: "'The consequences of postponing' dla impact assessment! 'Consequences' (plural) + 'of' + gerund. Mnogie bo likely multiple effects. To careful planning - thinking through ramifications przed decision. 'Consequences of' dla analyzing potential outcomes of contemplated actions."
      }
    ]
  },

  advanced_article_usage: {
    name: "Przedimki - zaawansowane użycie",
    description: "The poor, a vs the, zero article",
    icon: Flame,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "art_adv_1",
        question: "_____ rich should help _____ poor through charity and social programs.",
        translation: "(Bogaci powinni pomagać biednym przez charytatywność i programy socjalne)",
        options: ["The / the", "A / a", "The / a", "- / -"],
        correct: "The / the",
        explanation: "'The + adjective' tworzy grupę ludzi! 'The rich' = bogaci ludzie (as group), 'the poor' = biedni ludzie. Nie 'rich people' - używasz 'the + adjective' dla całych klas społecznych. To o społecznej responsibility - those with means helping those without. Standard structure dla social commentary."
      },
      {
        id: "art_adv_2",
        question: "She plays _____ piano beautifully and also _____ guitar quite well too.",
        translation: "(Gra na pianinie pięknie i też na gitarze całkiem dobrze)",
        options: ["the / the", "a / a", "- / -", "the / a"],
        correct: "the / the",
        correct: "the / the",
        explanation: "'The' z instrumentami muzycznymi! 'Play the piano/guitar' - zawsze 'the' z instruments. To standardowa zasada - musical instruments require 'the'. Nie 'play piano' (brak artykułu). To o musical abilities - listing multiple instrument proficiencies. Fixed rule dla wszystkich instruments."
      },
      {
        id: "art_adv_3",
        question: "I go to _____ church every Sunday morning to pray and meet community.",
        translation: "(Chodzę do kościoła każdą niedzielę rano żeby się modlić i spotykać społeczność)",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Zero article dla purpose visiting places! 'Go to church' (dla worship) różne od 'go to the church' (jako building). Bez 'the' = idę dla primary purpose (prayer). Z 'the' = idę jako localizacja. To o intention - church dla spiritual purpose nie architectural visit. Purpose-based zero articles."
      },
      {
        id: "art_adv_4",
        question: "_____ Mount Everest is _____ highest mountain in the entire world.",
        translation: "(Mount Everest jest najwyższą górą na całym świecie)",
        options: ["- / the", "The / the", "A / the", "- / a"],
        correct: "- / the",
        explanation: "Zero article dla nazw gór, 'the' dla superlatives! Mountain names (Everest, Kilimanjaro) bez 'the'. Ale 'the highest' potrzebuje 'the'. To geography rule - większość nazw własnych miejsc bez artykułu except ranges/rivers. Superlative zawsze 'the'. Combining naming convention z superlative rule."
      },
      {
        id: "art_adv_5",
        question: "I'm going to _____ bed early tonight because I'm exhausted from working all day.",
        translation: "(Idę do łóżka wcześnie dziś wieczorem bo jestem wyczerpany po pracy cały dzień)",
        options: ["-", "the", "a", "my"],
        correct: "-",
        explanation: "Zero article dla daily routines z 'bed'! 'Go to bed' (żeby spać) bez artykułu. 'Go to the bed' znaczyłoby podejść do konkretnego mebla. To o purpose - bed jako funkcja (sleeping) nie object. Daily routine expressions drop articles - to school, to work, to bed."
      },
      {
        id: "art_adv_6",
        question: "She's studying _____ medicine at university because she wants to become a doctor.",
        translation: "(Studiuje medycynę na uniwersytecie bo chce zostać lekarzem)",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Zero article dla academic subjects! 'Study medicine/history/mathematics' - żadne artykuły. To standardowa zasada dla fields of study. Nie 'study the medicine'. To o career path - wybór medical field jako kierunek studiów. Subject names są uncountable w tym context więc no article."
      },
      {
        id: "art_adv_7",
        question: "We had _____ breakfast at _____ hotel before starting our long journey today.",
        translation: "(Jedliśmy śniadanie w hotelu przed rozpoczęciem naszej długiej podróży dzisiaj)",
        options: ["- / the", "the / the", "a / the", "- / a"],
        correct: "- / the",
        explanation: "Zero dla meals, 'the' dla specific places! 'Have breakfast' (posiłek as activity) bez artykułu. 'The hotel' (specific miejsce gdzie staying) z 'the'. To o travel routines - standard breakfast przed departure. Meal names zero article unless specified (a big breakfast = with adjective)."
      },
      {
        id: "art_adv_8",
        question: "_____ honesty is _____ best policy in all relationships personal and professional.",
        translation: "(Uczciwość jest najlepszą polityką we wszystkich relacjach osobistych i profesjonalnych)",
        options: ["- / the", "The / the", "A / the", "- / a"],
        correct: "- / the",
        explanation: "Zero dla abstract concepts, 'the' dla superlatives! 'Honesty' (abstract value) bez artykułu. 'The best' (superlative) wymaga 'the'. To moral saying - universal truth o integrity. Abstract virtues nie potrzebują articles when discussed generally. But superlatives zawsze 'the'."
      },
      {
        id: "art_adv_9",
        question: "They're sailing across _____ Atlantic Ocean on a small private yacht boat.",
        translation: "(Żeglują przez Ocean Atlantycki na małej prywatnej łodzi jachtowej)",
        options: ["the", "-", "an", "a"],
        correct: "the",
        explanation: "'The' dla oceans, seas, rivers! 'The Atlantic' - wszystkie oceany potrzebują 'the'. To naming convention - large bodies of water get articles. Nie 'Atlantic Ocean' bez 'the'. To adventure description - crossing major ocean jest significant undertaking requiring 'the' dla proper gravity."
      },
      {
        id: "art_adv_10",
        question: "I need to go to _____ bank to withdraw some cash money this afternoon.",
        translation: "(Muszę iść do banku żeby wypłacić trochę gotówki dziś po południu)",
        options: ["the", "-", "a", "an"],
        correct: "the",
        explanation: "'The bank' dla your regular bank! Używasz 'the' dla places że regularnie odwiedzasz w your area. Twój lokalny bank - assumed shared knowledge. Nie 'a bank' (any random one). To o errands - visiting familiar place dla specific purpose. 'The' pokazuje że specific, known location."
      },
      {
        id: "art_adv_11",
        question: "_____ life is too short to waste on things that don't truly matter to you.",
        translation: "(Życie jest zbyt krótkie żeby marnować na rzeczy które naprawdę nie mają dla ciebie znaczenia)",
        options: ["-", "The", "A", "An"],
        correct: "-",
        explanation: "Zero article dla 'life' as abstract concept! 'Life' w general sense (existence itself) bez artykułu. 'The life' znaczyłoby specific life. To philosophical wisdom - universal truth o priorities. Abstract concepts discussed generally nie potrzebują articles - talking about concept itself."
      },
      {
        id: "art_adv_12",
        question: "She's _____ engineer working for _____ multinational technology company abroad.",
        translation: "(Jest inżynierem pracującym dla międzynarodowej firmy technologicznej za granicą)",
        options: ["an / a", "a / a", "the / the", "an / the"],
        correct: "an / a",
        explanation: "'An' dla profesji starting z vowel sound, 'a' dla company! 'An engineer' (profession) - 'engineer' starts z vowel. 'A company' (jedna z wielu). To job description - indefinite articles dla categorizing. Profession i type of company both get indefinite - not specifying which exact one."
      },
      {
        id: "art_adv_13",
        question: "_____ young should respect _____ elderly in all cultures worldwide always.",
        translation: "(Młodzi powinni szanować starszych we wszystkich kulturach na świecie zawsze)",
        options: ["The / the", "A / a", "- / -", "The / an"],
        correct: "The / the",
        explanation: "'The + adjective' dla age groups! 'The young' = młodzi ludzie, 'the elderly' = starsi ludzie. Both jako social groups. To universal value - generational respect. 'The + adjective' tworzy collective nouns dla demographic lub social categories. Cultural wisdom o intergenerational relations."
      },
      {
        id: "art_adv_14",
        question: "I'm going home by _____ bus today because my car is being repaired now.",
        translation: "(Jadę do domu autobusem dzisiaj bo mój samochód jest naprawiany teraz)",
        options: ["-", "the", "a", "an"],
        correct: "-",
        explanation: "Zero article dla transportation modes! 'By bus/car/train/plane' - sposób podróży bez artykułu. Nie 'by the bus' unless specifying który bus. To o methodology transportu nie specific vehicle. 'By + transport' jako means not object - focused on method nie vehicle itself."
      },
      {
        id: "art_adv_15",
        question: "_____ homeless need our support and compassion, not judgment or indifference.",
        translation: "(Bezdomni potrzebują naszego wsparcia i współczucia, nie osądu lub obojętności)",
        options: ["The", "A", "-", "An"],
        correct: "The",
        explanation: "'The homeless' jako social group! 'The + adjective' dla marginalized populations. Treats adjective jako collective noun - wszystkie osoby bez homes. To social advocacy - calling dla compassion. 'The homeless/unemployed/disabled' standard dla discussing social issues i vulnerable groups."
      }
    ]
  },

  emphatic_structures: {
    name: "Struktury emfatyczne",
    description: "I do love, It is important, What I want is",
    icon: Sparkles,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "emph_1",
        question: "I _____ love this song - it's absolutely my favorite of all time!",
        translation: "(Naprawdę uwielbiam tę piosenkę - to absolutnie moja ulubiona wszech czasów!)",
        options: ["do", "am", "have", "did"],
        correct: "do",
        explanation: "'I do love' używa 'do' dla emfazy! Normalnie 'I love' ale dodanie 'do' intensifies. To contradicting doubt - ktoś questioned czy lubisz więc emphasizujesz że YES, definitely love it. Spoken 'do' stressed dla making statement stronger. Emphatic do dla reassurance lub insistence."
      },
      {
        id: "emph_2",
        question: "It _____ you who suggested this brilliant idea at yesterday's brainstorming meeting!",
        translation: "(To właśnie ty zasugerowałeś ten genialny pomysł na wczorajszym brainstorming!)",
        options: ["was", "is", "were", "are"],
        correct: "was",
        explanation: "'It was you who' to cleft dla identifying person! Emphasizes KTO wykonał akcję. Normalnie 'You suggested' ale 'it was you who suggested' stronger. To o credit attribution - clearly identifying contributor. Cleft isolates person dla recognition i acknowledgment of their role."
      },
      {
        id: "emph_3",
        question: "She _____ finish her work, despite everyone doubting she could do it well.",
        translation: "(Faktycznie skończyła swoją pracę, pomimo wszystkich wątpiących że może dobrze)",
        options: ["did", "does", "has", "was"],
        correct: "did",
        explanation: "'Did finish' dla emphasizing completion pomimo doubts! Emphatic 'did' + base verb. To proves skeptics wrong - succeeded despite low expectations. Używane dla contradicting previous doubts lub assertions. Emphasizes that action DEFINITELY happened against beliefs otherwise."
      },
      {
        id: "emph_4",
        question: "What we _____ is more time to complete this complex difficult assignment properly.",
        translation: "(Czego potrzebujemy to więcej czasu żeby ukończyć to złożone trudne zadanie porządnie)",
        options: ["need", "are needing", "have needed", "will need"],
        correct: "need",
        explanation: "'What we need' frontuje object of need! Cleft putting need first before revealing co jest needed. To request lub complaint - insufficient time dla quality work. 'What we need is' structure dla clearly stating requirements. Emphasizes necessity przez fronting need itself."
      },
      {
        id: "emph_5",
        question: "It is important _____ everyone attends tomorrow's mandatory company-wide meeting.",
        translation: "(Ważne jest żeby wszyscy uczestniczyli w jutrzejszym obowiązkowym spotkaniu całej firmy)",
        options: ["that", "what", "which", "whether"],
        correct: "that",
        explanation: "'It is important that' uses 'it' jako placeholder! Real subject 'that everyone attends' delayed. 'It' + adjective + 'that clause' to standard emphatic structure. To directive - stressing attendance requirement. Formalne communication o mandatory participation."
      },
      {
        id: "emph_6",
        question: "Never _____ I seen such a magnificent view in my entire life before today!",
        translation: "(Nigdy nie widziałem tak wspaniałego widoku w całym moim życiu przed dzisiaj!)",
        options: ["have", "had", "did", "was"],
        correct: "have",
        explanation: "'Never have I seen' używa inwersji dla extreme emphasis! 'Never' fronted + pomocnik przed subject. To o exceptional experiences - view była unprecedented. Inversion after negative adverbs creates dramatic effect - normal order wouldn't convey same awe. Literary emphasis dla extraordinary moments."
      },
      {
        id: "emph_7",
        question: "The thing _____ I love most about summer is the long warm sunny days.",
        translation: "(Rzecz którą najbardziej kocham w lecie to długie ciepłe słoneczne dni)",
        options: ["that", "what", "which", "who"],
        correct: "that",
        explanation: "'The thing that I love' frontuje object of love! Cleft emphasizing co exactly jest loved. Builds anticipation - delays revealing loved thing. To personal preference sharing - highlighting specific aspect of summer appreciated most. 'The thing that' jako casual alternative do 'what'."
      },
      {
        id: "emph_8",
        question: "I _____ believe you could be so thoughtless and inconsiderate to others around!",
        translation: "(Nie mogę uwierzyć że możesz być tak bezmyślny i niedelikatny dla innych wokół!)",
        options: ["can't", "don't", "won't", "shouldn't"],
        correct: "can't",
        explanation: "'Can't believe' wyraża shock i disappointment! Emphasizes incredulity - behavior so bad że seems unbelievable. Stronger niż 'don't believe'. To o betrayed expectations - expected better behavior. 'Can't' emphasizes impossibility of accepting jako true - too disappointing."
      },
      {
        id: "emph_9",
        question: "What she _____ was ask a simple question - why such an angry overreaction?",
        translation: "(Co zrobiła to zadała proste pytanie - czemu tak zła nadreakcja?)",
        options: ["did", "does", "has", "was"],
        correct: "did",
        explanation: "'What she did was ask' to emphatic minimization! Frontuje action showing how minor było. Tylko asked - nothing offensive. To defends against overreaction - emphasizing innocence of action. 'What... did was' structure dla showing action był reasonable, response był excessive."
      },
      {
        id: "emph_10",
        question: "It was in Paris _____ we first met during that international student conference years ago.",
        translation: "(To było w Paryżu gdzie się po raz pierwszy spotkaliśmy podczas tej międzynarodowej konferencji studenckiej lata temu)",
        options: ["where", "that", "which", "when"],
        correct: "where",
        explanation: "'It was in Paris where' emphasizes MIEJSCE spotkania! Cleft focusing na location. Paris nie jest przypadkowe tło but significant element. To romantic or important memory - miejsce carries meaning. Fronting location emphasizes its role w story. Used w reminiscing."
      },
      {
        id: "emph_11",
        question: "All I _____ is a little peace and quiet to relax and unwind after work.",
        translation: "(Wszystko czego chcę to trochę spokoju i ciszy żeby się zrelaksować i odprężyć po pracy)",
        options: ["want", "wanted", "am wanting", "have wanted"],
        correct: "want",
        explanation: "'All I want' minimizes request showing modesty! Frontuje całe desire - 'all' pokazuje że it's simple, not asking much. To reasonable request - tylko basic need dla rest. 'All I want is' dla showing requests są humble - emphasizing małość through fronting 'all'."
      },
      {
        id: "emph_12",
        question: "What matters _____ is not how much you earn but how happy you are inside.",
        translation: "(Co ma znaczenie to nie ile zarabiasz ale jak szczęśliwy jesteś wewnątrz)",
        options: ["most", "more", "much", "many"],
        correct: "most",
        explanation: "'What matters most' frontuje priority! Emphasizes które consideration jest paramount. To life philosophy - happiness over wealth. 'What matters' jako subject focusing statement na true priority. Values discussion structure - clarifying real importance versus perceived importance."
      },
      {
        id: "emph_13",
        question: "I _____ try my best in every situation, even when things seem completely hopeless.",
        translation: "(Zawsze próbuję jak najlepiej w każdej sytuacji, nawet gdy rzeczy wydają się całkowicie beznadziejne)",
        options: ["do", "am", "have", "will"],
        correct: "do",
        explanation: "'I do try' emphasizes effort pomimo challenges! Emphatic 'do' contradicts suggestions że nie starasz się. To defensive - proving że effort IS there nawet jeśli results aren't perfect. Używane dla asserting że you're trying hard mimo appearances suggesting otherwise."
      },
      {
        id: "emph_14",
        question: "It is essential _____ we finish this urgent task before the deadline tomorrow.",
        translation: "(Jest niezbędne żebyśmy skończyli to pilne zadanie przed deadline jutro)",
        options: ["that", "what", "which", "whether"],
        correct: "that",
        explanation: "'It is essential that' dla strong requirements! 'It' placeholder dla delayed subject. To formal directive - stressing absolute necessity. 'Essential/vital/crucial that' dla non-negotiable requirements. Business urgency language - completion is mandatory nie optional."
      },
      {
        id: "emph_15",
        question: "The reason _____ I'm late is because my car broke down on the highway this morning.",
        translation: "(Powodem dla którego się spóźniam jest to że mój samochód się zepsuł na autostradzie dziś rano)",
        options: ["why", "that", "what", "which"],
        correct: "why",
        explanation: "'The reason why' frontuje explanation! Emphasizes że there IS legitimate reason. 'Why' introduces excuse/explanation clause. To defensive statement - justifying lateness przez showing było poza control. Fronting 'reason' makes excuse sound bardziej valid - not just saying sorry ale explaining why."
      }
    ]
  }
};

export default part19Categories;