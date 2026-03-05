/**
 * POLISH → ENGLISH GRAMMAR - PART 20
 * 4 categories, 15 questions each - Sophisticated patterns
 */

import { Layers, Link2, BookOpen, Lightbulb } from "lucide-react";

export const part20Categories = {
  adjective_order: {
    name: "Kolejność przymiotników",
    description: "A beautiful old Italian leather bag",
    icon: Layers,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "adj_ord_1",
        question: "She bought a beautiful _____ _____ dress for the wedding ceremony tomorrow.",
        translation: "(Kupiła piękną długą czerwoną sukienkę na ceremonię ślubną jutro)",
        options: ["long red", "red long", "long and red", "red and long"],
        correct: "long red",
        explanation: "Kolejność: Opinion (beautiful) → Size (long) → Color (red)! Zawsze size przed color. 'Beautiful long red dress' follows OSASCOMP rule (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose). To natural ordering że native speakers używają instinctively. Multiple przymiotniki have strict sequence."
      },
      {
        id: "adj_ord_2",
        question: "He lives in a _____ _____ cottage in the peaceful countryside far from city.",
        translation: "(Mieszka w małym starym cottage w spokojnej wsi daleko od miasta)",
        options: ["small old", "old small", "small ancient", "ancient small"],
        correct: "small old",
        explanation: "Size przed Age! 'Small' (size) comes przed 'old' (age). Natural ordering sequence. To descriptive language - painting picture of quaint rural dwelling. Size → Age → Style jest standardowy pattern. Even bez knowing rule, native speakers intuitively place in this order."
      },
      {
        id: "adj_ord_3",
        question: "She has a lovely _____ _____ table in her elegant dining room.",
        translation: "(Ma piękny okrągły drewniany stół w swojej eleganckiej jadalni)",
        options: ["round wooden", "wooden round", "round wood", "wood round"],
        correct: "round wooden",
        explanation: "Shape przed Material! 'Round' (shape) → 'wooden' (material). To standard furniture description pattern. Describing physical object follows shape then what it's made of. 'Lovely' (opinion) first, then shape, then material. Multiple descriptors flow w natural hierarchy."
      },
      {
        id: "adj_ord_4",
        question: "I want to buy those gorgeous _____ _____ shoes I saw in shop window!",
        translation: "(Chcę kupić te wspaniałe włoskie skórzane buty które widziałem w witrynie sklepu!)",
        options: ["Italian leather", "leather Italian", "Italy leather", "leather Italy"],
        correct: "Italian leather",
        explanation: "Origin przed Material! 'Italian' (where from) → 'leather' (co made of). To shopping desire description. Nationality/origin always przed material. 'Gorgeous' (opinion) first, sets all up. Proper sequencing makes description sound natural i professional."
      },
      {
        id: "adj_ord_5",
        question: "They stayed in a charming _____ _____ hotel during their romantic honeymoon.",
        translation: "(Zatrzymali się w uroczym małym francuskim hotelu podczas swojego romantycznego miesiąca miodowego)",
        options: ["small French", "French small", "little France", "France little"],
        correct: "small French",
        explanation: "Size przed Origin! 'Small' (size) → 'French' (nationality). To travel memory description. Size characteristics come przed gdzie something is from. 'Charming' (opinion) ustawia pozytywny tone, then factual descriptors follow w proper order. Creating vivid memory picture."
      },
      {
        id: "adj_ord_6",
        question: "He drives an expensive _____ _____ sports car that everyone admires greatly.",
        translation: "(Jeździ drogim nowym niemieckim samochodem sportowym który wszyscy bardzo podziwiają)",
        options: ["new German", "German new", "newer German", "German newer"],
        correct: "new German",
        explanation: "Age przed Origin! 'New' (age) → 'German' (where made). Car descriptions follow standard ordering. 'Expensive' (opinion/value) first pokazuje status, then factual attributes. Proper sequence sounds sophisticated - showcasing impressive vehicle through correct descriptor ordering."
      },
      {
        id: "adj_ord_7",
        question: "She wore a stunning _____ _____ necklace to the gala evening event.",
        translation: "(Nosiła oszałamiający duży złoty naszyjnik na galowy wieczorny event)",
        options: ["large gold", "gold large", "big golden", "golden big"],
        correct: "large gold",
        explanation: "Size przed Material! 'Large' (size) → 'gold' (metal). Jewelry description pattern. 'Stunning' (opinion) establishes impressiveness, then physical descriptors. Size of piece before composition creates natural flow. Describing valuables follows this aesthetic ordering."
      },
      {
        id: "adj_ord_8",
        question: "We're looking for a reliable _____ _____ car within our limited budget range.",
        translation: "(Szukamy niezawodnego używanego japońskiego samochodu w naszym ograniczonym zakresie budżetu)",
        options: ["used Japanese", "Japanese used", "second-hand Japan", "Japan second-hand"],
        correct: "used Japanese",
        explanation: "Age/Condition przed Origin! 'Used' (age/condition) → 'Japanese' (origin). Car shopping description. 'Reliable' (quality opinion) first shows priority (functionality), then condition, then make. Practical shopping criteria expressed w natural adjective sequence."
      },
      {
        id: "adj_ord_9",
        question: "They live in a modern _____ _____ apartment with amazing city views.",
        translation: "(Mieszkają w nowoczesnym dużym miejskim apartamencie ze wspaniałymi widokami na miasto)",
        options: ["large urban", "urban large", "big city", "city big"],
        correct: "large urban",
        explanation: "Size przed Type/Purpose! 'Large' (size) → 'urban' (type/category). Real estate description. 'Modern' (style opinion) first ustawia aesthetic, then size, then categorization. Urban living description through proper przymiotnik hierarchy - paints clear picture of dwelling type."
      },
      {
        id: "adj_ord_10",
        question: "She inherited a valuable _____ _____ painting from her grandmother's estate.",
        translation: "(Odziedziczyła cenny stary włoski obraz od majątku jej babci)",
        options: ["old Italian", "Italian old", "ancient Italy", "Italy ancient"],
        correct: "old Italian",
        explanation: "Age przed Origin! 'Old' (age) → 'Italian' (nationality). Art description protocol. 'Valuable' (worth opinion) first establishes significance, then age (adds value), then origin (provenance). Antique descriptions benefit from proper ordering - age i origin both contribute do value story."
      },
      {
        id: "adj_ord_11",
        question: "I'm reading an interesting _____ _____ book about ancient civilizations.",
        translation: "(Czytam interesującą grubą historyczną książkę o starożytnych cywilizacjach)",
        options: ["thick history", "history thick", "fat historical", "historical fat"],
        correct: "thick history",
        explanation: "Size przed Purpose/Type! 'Thick' (physical size) → 'history' (category/type). Book description. 'Interesting' (opinion) first attracts, then physical characteristic, then subject category. Describing books through layered adjectives - each adds different dimension to description."
      },
      {
        id: "adj_ord_12",
        question: "They served us delicious _____ _____ wine at the fancy restaurant last night.",
        translation: "(Podali nam pyszne czerwone francuskie wino w wykwintnej restauracji wczoraj wieczorem)",
        options: ["red French", "French red", "red France", "France red"],
        correct: "red French",
        explanation: "Color przed Origin! 'Red' (color/type) → 'French' (where from). Wine description standard. 'Delicious' (taste opinion) first, then variety (color), then region. Proper ordering sounds knowledgeable - describing wine sophisticatedly through correct sequence."
      },
      {
        id: "adj_ord_13",
        question: "He bought his daughter a cute _____ _____ puppy for her birthday present.",
        translation: "(Kupił swojej córce słodkiego małego brązowego szczeniaka na jej urodzinowy prezent)",
        options: ["little brown", "brown little", "small brown", "brown small"],
        correct: "little brown",
        explanation: "Size przed Color dla zwierząt! 'Little' (size) → 'brown' (color). Pet description. 'Cute' (opinion) first expresses appeal, then size (creates aww factor), then color (visual detail). Describing pets through affectionate adjective ordering - building endearing picture."
      },
      {
        id: "adj_ord_14",
        question: "We stayed in a comfortable _____ _____ hotel near the beautiful beach area.",
        translation: "(Zatrzymaliśmy się w komfortowym nowoczesnym nadmorskim hotelu blisko pięknego obszaru plaży)",
        options: ["modern seaside", "seaside modern", "new sea", "sea new"],
        correct: "modern seaside",
        explanation: "Style/Age przed Location Type! 'Modern' (style) → 'seaside' (location purpose). Hotel categorization. 'Comfortable' (quality opinion) first, then architectural style, then location specialty. Vacation accommodation description - každý adjective adds information w natural flow."
      },
      {
        id: "adj_ord_15",
        question: "She's wearing an elegant _____ _____ coat that must have cost a fortune!",
        translation: "(Nosi elegancki długi zimowy płaszcz który musiał kosztować fortunę!)",
        options: ["long winter", "winter long", "lengthy winter", "winter lengthy"],
        correct: "long winter",
        explanation: "Size/Length przed Purpose/Season! 'Long' (length) → 'winter' (seasonal purpose). Clothing description. 'Elegant' (style opinion) first, then physical characteristic, then functional designation. Fashion description through structured ordering - każdy layer adds sophistication do image."
      }
    ]
  },

  adverb_placement: {
    name: "Umiejscowienie przysłówków",
    description: "Always, usually, often - gdzie w zdaniu?",
    icon: Link2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "adv_plac_1",
        question: "I _____ go to the gym three times a week for exercise and fitness.",
        translation: "(Zazwyczaj chodzę na siłownię trzy razy w tygodniu na ćwiczenia i fitness)",
        options: ["usually", "go usually", "am usually", "usually am"],
        correct: "usually",
        explanation: "Frequency adverbs (usually/always/often) idą PRZED main verb! 'I usually go' - między subject a verb. To standard position rule. Nie 'I go usually'. To o regularnych habits - frequency adverb pokazuje jak często routine jest followed. Mid-position dla większości adverbs of frequency."
      },
      {
        id: "adv_plac_2",
        question: "She is _____ late to our meetings - it's becoming a frustrating problem.",
        translation: "(Ona jest zawsze spóźniona na nasze spotkania - to staje się frustrującym problemem)",
        options: ["always", "late always", "being always", "always being"],
        correct: "always",
        explanation: "Z 'be' verb, frequency adverb idzie AFTER! 'Is always late' - po 'is'. Exception do normal rule - 'be' verb puts adverb after itself. To narzekanie o chronic lateness - 'always' emphasizes że it's constant problem. After 'be' jest standard position."
      },
      {
        id: "adv_plac_3",
        question: "They have _____ been very supportive of my career decisions and choices.",
        translation: "(Oni zawsze byli bardzo wspierający dla moich karierowych decyzji i wyborów)",
        options: ["always", "been always", "always been", "been always been"],
        correct: "always",
        explanation: "Z pomocnikami (have/has/will), adverb między pomocnik a main verb! 'Have always been' - po 'have', przed 'been'. To gratitude statement - acknowledging consistent support. Adverb sandwiched między auxiliary i past participle pokazuje ongoing constancy."
      },
      {
        id: "adv_plac_4",
        question: "I completely _____ what you're saying - your point makes total sense to me.",
        translation: "(Całkowicie rozumiem co mówisz - twój punkt ma totalny sens dla mnie)",
        options: ["understand", "understood", "am understanding", "understanding"],
        correct: "understand",
        explanation: "Adverbs of degree (completely/totally) też przed main verb! 'Completely understand' - adverb first. To strong agreement - emphasizing full comprehension. Degree adverbs strengthen verbs przez preceding them. Shows no confusion - total alignment z their point."
      },
      {
        id: "adv_plac_5",
        question: "He _____ finishes his work on time - he's extremely reliable and punctual always.",
        translation: "(Prawie zawsze kończy swoją pracę na czas - jest ekstremalnie niezawodny i punktualny zawsze)",
        options: ["almost always", "always almost", "almost is always", "is almost always"],
        correct: "almost always",
        explanation: "'Almost always' to modyfikowany frequency adverb! 'Almost' modyfikuje 'always' więc razem przed verb. Nie quite 100% ale bardzo blisko. To komplementuje reliability - acknowledging że mostly but not absolutely always. Modifying frequency adverb dla precision w description."
      },
      {
        id: "adv_plac_6",
        question: "We _____ seen such beautiful scenery before in our entire lives until now!",
        translation: "(Nigdy nie widzieliśmy tak pięknego krajobrazu wcześniej w całym naszym życiu do teraz!)",
        options: ["have never", "never have", "haven't never", "have not never"],
        correct: "have never",
        explanation: "'Have never' puts 'never' między auxiliary i past participle! Standard position dla negative frequency adverbs z perfect tenses. To expresses unprecedented experience - complete first time. 'Never' emphasizes że experience is totally new - nothing comparable w past."
      },
      {
        id: "adv_plac_7",
        question: "She speaks English _____, even better than some native speakers I know!",
        translation: "(Mówi po angielsku perfekcyjnie, nawet lepiej niż niektórzy native speakers których znam!)",
        options: ["perfectly", "perfect", "in perfect", "with perfect"],
        correct: "perfectly",
        explanation: "Manner adverbs (how) typically END of clause! 'Speaks English perfectly' - po object. Describes JAK mówi. To high compliment - skill surpassing natives. Manner adverbs flexible ale often final position dla describing quality of action. Shows mastery level."
      },
      {
        id: "adv_plac_8",
        question: "I _____ check my email first thing when I wake up every morning.",
        translation: "(Zazwyczaj sprawdzam swój email pierwszą rzeczą kiedy się budzę każdego ranka)",
        options: ["usually", "check usually", "am usually", "usually am"],
        correct: "usually",
        explanation: "'Usually check' - frequency adverb przed main verb! Standard mid-position. To morning routine description - habitual behavior. 'Usually' shows it's normal practice but allows dla occasional variation. Frequency adverbs perfectly positioned dla describing habits i routines."
      },
      {
        id: "adv_plac_9",
        question: "The children _____ quietly during the important school assembly today.",
        translation: "(Dzieci siedzieli cicho podczas ważnego szkolnego zgromadzenia dzisiaj)",
        options: ["sat", "sit", "were sitting", "have sat"],
        correct: "sat",
        explanation: "Manner adverb 'quietly' może iść po verb! 'Sat quietly' - manner word describing how they sat. Alternative position możliwa ale po verb jest common. To o good behavior - children being respectful. Manner adverbs flexible - after verb dla simple descriptions."
      },
      {
        id: "adv_plac_10",
        question: "I will _____ forget your kindness and generosity during my difficult time.",
        translation: "(Nigdy nie zapomnę twojej życzliwości i hojności podczas mojego trudnego czasu)",
        options: ["never", "forget never", "not", "not never"],
        correct: "never",
        explanation: "'Will never forget' - 'never' między auxiliary 'will' a main verb! To emphatic promise - permanent memory of help received. 'Never' w mid-position z modal auxiliary creates strong commitment. Gratitude statement showing help left lasting impression."
      },
      {
        id: "adv_plac_11",
        question: "She _____ carefully before making any important life-changing decisions.",
        translation: "(Zawsze myśli starannie przed podejmowaniem jakichkolwiek ważnych życiowych decyzji)",
        options: ["always thinks", "thinks always", "is always thinking", "always is thinking"],
        correct: "always thinks",
        explanation: "'Always thinks' - frequency przed main verb! To personality trait - thoughtful decision-making. 'Always' shows consistency w careful approach. Frequency + manner combined: always (how often) thinks carefully (how). Good character trait emphasized przez adverb placement."
      },
      {
        id: "adv_plac_12",
        question: "Unfortunately, the train _____ late due to technical problems on the tracks.",
        translation: "(Niestety pociąg przybył późno z powodu problemów technicznych na torach)",
        options: ["arrived", "arrive", "has arrived", "was arriving"],
        correct: "arrived",
        explanation: "Comment adverbs (unfortunately) mogą start zdanie! 'Unfortunately' z przecinkiem, sets tone dla całego statement. Rest of sentence normal structure. To expressing regret o delay - comment adverb frames całą informację emotionally. Sentence adverbs modify whole thought."
      },
      {
        id: "adv_plac_13",
        question: "He _____ his homework before dinner every single day without fail.",
        translation: "(Zazwyczaj robi swoją pracę domową przed kolacją każdego dnia bez błędu)",
        options: ["usually does", "does usually", "is usually doing", "usually is doing"],
        correct: "usually does",
        explanation: "'Usually does' - standard frequency position przed main verb! To disciplined routine - consistent homework habit. 'Usually' allows dla rare exceptions but shows standard pattern. Frequency adverb perfectly placed dla describing reliable habits z occasional flexibility."
      },
      {
        id: "adv_plac_14",
        question: "They _____ travel abroad during summer vacation every year for relaxation.",
        translation: "(Często podróżują za granicę podczas letnich wakacji każdego roku dla relaksu)",
        options: ["often", "travel often", "are often", "often are"],
        correct: "often",
        explanation: "'Often travel' - frequency adverb przed verb! Standard position dla habit description. To annual tradition - regular summer trips. 'Often' shows frequency without being absolute. Mid-position adverb dla describing common but not invariable practices."
      },
      {
        id: "adv_plac_15",
        question: "Honestly, I don't _____ like the new design - it seems too complicated.",
        translation: "(Szczerze mówiąc, naprawdę nie lubię nowego projektu - wydaje się zbyt skomplikowany)",
        options: ["really", "like really", "am really", "really am"],
        correct: "really",
        explanation: "'Don't really like' - intensifier między auxiliary a main verb! 'Really' strengthens negative. To polite criticism - softening through 'honestly' początek ale being clear. Intensifying adverbs w mid-position modify strength of feeling expressed przez verb."
      }
    ]
  },

  double_comparatives: {
    name: "Podwójne porównania",
    description: "The more... the more, the less... the better",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    level: "intermediate",
    questions: [
      {
        id: "dbl_comp_1",
        question: "The more you practice, _____ better you will become at playing this instrument.",
        translation: "(Im więcej ćwiczysz, tym lepszy będziesz w graniu na tym instrumencie)",
        options: ["the", "a", "more", "-"],
        correct: "the",
        explanation: "'The more... the better' pokazuje proporcjonalną relację! Obie części potrzebują 'the'. Więcej practice (input) = lepszy skill (output). To motivational - effort directly povezany z improvement. Structure shows causation - increasing one thing increases other. Encouragement do continued practice."
      },
      {
        id: "dbl_comp_2",
        question: "_____ harder you study, the easier the exam will seem to you tomorrow.",
        translation: "(Im ciężej się uczysz, tym łatwiejszy egzamin będzie się wydawał jutro)",
        options: ["The", "A", "More", "-"],
        correct: "The",
        explanation: "Both halves start z 'the'! 'The harder... the easier' - inverse relationship. More study (effort) makes exam seem less difficult (perceived ease). To o preparation reducing anxiety - work now makes future easier. Proportional structure dla showing kako effort changes perception."
      },
      {
        id: "dbl_comp_3",
        question: "The less you worry about small things, _____ happier you will be overall in life.",
        translation: "(Im mniej martwisz się o małe rzeczy, tym szczęśliwszy będziesz ogólnie w życiu)",
        options: ["the", "a", "more", "much"],
        correct: "the",
        explanation: "'The less... the happier' dla life philosophy! Reducing worry (decreasing negative) increases happiness (increasing positive). To mindfulness advice - don't sweat small stuff. Inverse proportion - less of bad thing yields more of good thing. Wisdom expressed through proportional structure."
      },
      {
        id: "dbl_comp_4",
        question: "The sooner we start working, _____ sooner we'll finish this project successfully.",
        translation: "(Im szybciej zaczniemy pracować, tym szybciej skończymy ten projekt pomyślnie)",
        options: ["the", "a", "more", "-"],
        correct: "the",
        explanation: "'The sooner... the sooner' dla timing correlation! Early start (first action) = early finish (result). Both używają 'the' + comparative. To time management wisdom - not procrastinating means earlier completion. Direct proportionality w timing - mirrors input to output timing."
      },
      {
        id: "dbl_comp_5",
        question: "_____ more money you spend, the less you will have saved for future emergencies.",
        translation: "(Im więcej pieniędzy wydajesz, tym mniej będziesz miał zaoszczędzonego na przyszłe nagłe wypadki)",
        options: ["The", "A", "More", "Much"],
        correct: "The",
        explanation: "'The more... the less' pokazuje inverse relationship! More spending (increase) = less savings (decrease). To financial wisdom - warning o overspending consequences. Proportional structure dla showing trade-offs - gaining w one area costs w another. Budget management lesson."
      },
      {
        id: "dbl_comp_6",
        question: "The older I get, _____ more I appreciate my family and close friends around me.",
        translation: "(Im starzę się, tym bardziej doceniam moją rodzinę i bliskich przyjaciół wokół mnie)",
        options: ["the", "a", "much", "very"],
        correct: "the",
        explanation: "'The older... the more' dla życiowej wisdom! Age (increasing) brings greater appreciation (increasing). To reflective - maturity changes priorities. Both parts need 'the' - aging correlates z deepening gratitude. Shows personal growth - perspective shifts z time."
      },
      {
        id: "dbl_comp_7",
        question: "The faster you drive, _____ dangerous it becomes for everyone on road.",
        translation: "(Im szybciej jedziesz, tym bardziej niebezpieczne staje się dla wszystkich na drodze)",
        options: ["the more", "more", "the most", "most"],
        correct: "the more",
        explanation: "'The faster... the more dangerous' dla safety warning! Speed increase (first variable) = danger increase (consequence). 'The more' + adjective dla increasing qualities. To road safety message - proportional relationship między speed a risk. Public service type wisdom."
      },
      {
        id: "dbl_comp_8",
        question: "_____ louder you shout, the less people will listen to your message carefully.",
        translation: "(Im głośniej krzyczysz, tym mniej ludzie będą słuchać twojej wiadomości starannie)",
        options: ["The", "A", "More", "Very"],
        correct: "The",
        explanation: "'The louder... the less' pokazuje counterproductive behavior! More volume (excessive) = less attention (backfire). To communication wisdom - shouting diminishes credibility. Inverse proportion - increasing wrong thing decreases desired outcome. Teaches że manner matters więcej than intensity."
      },
      {
        id: "dbl_comp_9",
        question: "The bigger the house, _____ higher the maintenance costs will be every month.",
        translation: "(Im większy dom, tym wyższe koszty utrzymania będą każdego miesiąca)",
        options: ["the", "a", "more", "much"],
        correct: "the",
        explanation: "'The bigger... the higher' dla practical reality! Larger property (size) = higher costs (financial burden). To real estate truth - size comes z responsibility. Direct correlation - physical scale determines financial obligation. Practical wisdom dla home buyers."
      },
      {
        id: "dbl_comp_10",
        question: "_____ questions you ask, the more you will learn and understand deeply.",
        translation: "(Im więcej pytań zadajesz, tym więcej się nauczysz i zrozumiesz głęboko)",
        options: ["The more", "More", "The most", "Most"],
        correct: "The more",
        explanation: "'The more questions... the more you learn' dla educational philosophy! More curiosity (questions) = more knowledge (learning). Both 'the more' dla increasing quantities. To encouraging inquiry - questions są path do understanding. Curiosity praised as learning strategy."
      },
      {
        id: "dbl_comp_11",
        question: "The longer you wait to see doctor, _____ worse your condition might become.",
        translation: "(Im dłużej czekasz żeby zobaczyć lekarza, tym gorsza twoja kondycja może się stać)",
        options: ["the", "a", "more", "much"],
        correct: "the",
        explanation: "'The longer... the worse' dla health warning! Delay (time passing) = deterioration (health declining). To medical urgency message - don't postpone care. Temporal correlation z health outcomes - time works against you w illness. Encouraging prompt medical attention."
      },
      {
        id: "dbl_comp_12",
        question: "The simpler the explanation, _____ easier it is for students to understand clearly.",
        translation: "(Im prostsze wyjaśnienie, tym łatwiejsze jest dla studentów do zrozumienia wyraźnie)",
        options: ["the", "a", "more", "very"],
        correct: "the",
        explanation: "'The simpler... the easier' dla teaching philosophy! Simplicity (explanation quality) = comprehension (learning outcome). To pedagogical wisdom - clarity beats complexity. Direct link między presentation style a student understanding. Advocates dla accessible teaching methods."
      },
      {
        id: "dbl_comp_13",
        question: "_____ tired I feel, the less productive I am at work during the day.",
        translation: "(Im bardziej zmęczony się czuję, tym mniej produktywny jestem w pracy podczas dnia)",
        options: ["The more", "More", "The most", "Most"],
        correct: "The more",
        explanation: "'The more tired... the less productive' łączy fatigue z performance! Increasing tiredness (state) = decreasing productivity (output). To o work-life balance - rest affects performance. Shows importance of managing energy - exhaustion directly impairs capability."
      },
      {
        id: "dbl_comp_14",
        question: "The earlier you book your flight tickets, _____ cheaper they will usually be.",
        translation: "(Im wcześniej zarezerwujesz bilety lotnicze, tym tańsze zazwyczaj będą)",
        options: ["the", "a", "more", "much"],
        correct: "the",
        explanation: "'The earlier... the cheaper' to travel tip! Advanced booking (timing) = lower prices (savings). To practical consumer advice - planning ahead saves money. Airlines reward early commitments z discounts. Proportional relationship w pricing strategy."
      },
      {
        id: "dbl_comp_15",
        question: "The better your English becomes, _____ opportunities will open up for you abroad.",
        translation: "(Im lepszy staje się twój angielski, tym więcej możliwości otworzy się dla ciebie za granicą)",
        options: ["the more", "more", "the most", "most"],
        correct: "the more",
        explanation: "'The better... the more' dla motivational connection! Improving language (skill development) = increasing opportunities (life benefits). To encouraging language learning - showing tangible returns on effort. Skills improvement directly opens doors - proportional relationship między mastery a possibilities."
      }
    ]
  },

  advanced_conjunctions: {
    name: "Spójniki złożone",
    description: "Provided that, unless, in case, as long as",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "conj_adv_1",
        question: "You can borrow my car _____ you promise to drive carefully and safely.",
        translation: "(Możesz pożyczyć mój samochód pod warunkiem że obiecasz jeździć ostrożnie i bezpiecznie)",
        options: ["provided that", "unless", "in case", "despite"],
        correct: "provided that",
        explanation: "'Provided that' ustawia warunek dla permission! Możesz (allowance) JEŚLI obiecasz (condition). To conditional lending - trust z requirements. 'Provided that' formal dla stating conditions że must be met. Similar do 'if' ale emphasizes prerequisite bardziej."
      },
      {
        id: "conj_adv_2",
        question: "We won't finish on time _____ everyone works together efficiently as team.",
        translation: "(Nie skończymy na czas chyba że wszyscy pracują razem efektywnie jako zespół)",
        options: ["unless", "if", "provided that", "in case"],
        correct: "unless",
        explanation: "'Unless' znaczy 'if not' - negatywny warunk! Nie skończymy (negative outcome) UNLESS work together (only way to avoid). To urgent call dla cooperation - highlighting że teamwork jest critical. 'Unless' stronger niż 'if not' - emphasizes necessity."
      },
      {
        id: "conj_adv_3",
        question: "Take an umbrella _____ it rains later during your walk in the park.",
        translation: "(Weź parasol na wypadek gdyby padało później podczas twojego spaceru w parku)",
        options: ["in case", "unless", "provided that", "as long as"],
        correct: "in case",
        explanation: "'In case' to precaution dla możliwego wydarzenia! Weź parasol (preparation) IN CASE pada (potential scenario). Nie certain że będzie padać ale lepiej prepared. To cautious planning - anticipating possibility i preparing for it. 'In case' dla preventive measures."
      },
      {
        id: "conj_adv_4",
        question: "_____ you work hard and stay focused, you will achieve your ambitious goals.",
        translation: "(Tak długo jak ciężko pracujesz i pozostajesz skupiony, osiągniesz swoje ambitne cele)",
        options: ["As long as", "Unless", "In case", "Despite"],
        correct: "As long as",
        explanation: "'As long as' ustawia continuing condition! Tak długo jak (duration of condition) result will follow. Similar do 'provided that' ale emphasizes ongoing nature. To motivational - sustained effort brings success. Continuation of good behavior ensures positive outcome."
      },
      {
        id: "conj_adv_5",
        question: "I'll go to the party _____ I don't have to stay there very late tonight.",
        translation: "(Pójdę na imprezę pod warunkiem że nie muszę zostawać tam bardzo późno dziś wieczorem)",
        options: ["provided", "unless", "in case", "despite"],
        correct: "provided",
        explanation: "'Provided' (skrót od 'provided that') dla conditional acceptance! Pójdę (agreement) PROVIDED nie za późno (stipulation). To negotiating terms - willing go ale z boundaries. 'Provided' dla accepting z conditions - yes but only if certain terms met."
      },
      {
        id: "conj_adv_6",
        question: "_____ you apologize sincerely, I won't forgive you for what you did to me.",
        translation: "(Chyba że przeprosisz szczerze, nie wybaczę ci za to co mi zrobiłeś)",
        options: ["Unless", "If", "Provided that", "As long as"],
        correct: "Unless",
        explanation: "'Unless you apologize' daje ultimatum! Nie wybaczę (firm stance) UNLESS przeprosisz (only escape). To o setting conditions dla reconciliation - apology jest non-negotiable requirement. 'Unless' creates clear choice - apologize or no forgiveness. Strong boundary statement."
      },
      {
        id: "conj_adv_7",
        question: "I always carry extra cash _____ the ATM machines aren't working properly.",
        translation: "(Zawsze noszę extra gotówkę na wypadek gdyby bankomaty nie działały porządnie)",
        options: ["in case", "unless", "provided that", "as long as"],
        correct: "in case",
        explanation: "'In case' dla contingency planning! Noszę gotówkę (backup) IN CASE ATM fails (possible problem). To practical preparedness - anticipating potential failures. 'In case' dla being ready for things że might go wrong. Smart precautionary behavior."
      },
      {
        id: "conj_adv_8",
        question: "We can meet tomorrow _____ the weather is good enough for outdoor activities.",
        translation: "(Możemy się spotkać jutro pod warunkiem że pogoda jest wystarczająco dobra na outdoor aktywności)",
        options: ["provided", "unless", "in case", "despite"],
        correct: "provided",
        explanation: "'Provided the weather is good' makes plan conditional! Meeting depends na acceptable weather. 'Provided' dla tentative plans subject do conditions. To flexible planning - ready to adjust based on circumstances. Weather-dependent activities always conditional."
      },
      {
        id: "conj_adv_9",
        question: "_____ you keep trying and don't give up, you will eventually succeed in end.",
        translation: "(Tak długo jak kontynuujesz próbowanie i nie poddajesz się, w końcu odniesiesz sukces)",
        options: ["As long as", "Unless", "In case", "Despite"],
        correct: "As long as",
        explanation: "'As long as you keep trying' dla perseverance message! Continuous effort (ongoing condition) będzie lead do success (eventual outcome). To motivational - persistence pays off. 'As long as' emphasizes że condition must continue - sustained effort required, not one-time attempt."
      },
      {
        id: "conj_adv_10",
        question: "Bring your passport _____ they ask for identification at the border crossing.",
        translation: "(Przynieś swój paszport na wypadek gdyby poprosili o identyfikację na przejściu granicznym)",
        options: ["in case", "unless", "provided", "as long as"],
        correct: "in case",
        explanation: "'In case they ask' dla travel preparedness! Passport (document) IN CASE requested (possible requirement). Not certain będą ask ale better have it. To border crossing wisdom - being prepared dla likely checks. 'In case' dla anticipating probable scenarios."
      },
      {
        id: "conj_adv_11",
        question: "I won't be able to help you _____ you tell me exactly what the problem is.",
        translation: "(Nie będę mógł ci pomóc chyba że powiesz mi dokładnie jaki jest problem)",
        options: ["unless", "if", "provided that", "as long as"],
        correct: "unless",
        explanation: "'Unless you tell me' dla requiring information! Can't help (inability) UNLESS explain (necessary condition). To o needing details żeby assist - help impossible bez understanding problem. 'Unless' creates clear requirement - information needed before help possible."
      },
      {
        id: "conj_adv_12",
        question: "You can stay here _____ you want - there's no time limit for your visit.",
        translation: "(Możesz zostać tu tak długo jak chcesz - nie ma limitu czasu dla twojej wizyty)",
        options: ["as long as", "unless", "in case", "provided"],
        correct: "as long as",
        explanation: "'As long as you want' dla open-ended permission! Możesz stay (allowance) przez duration że chcesz (your choice determines). To generous hospitality - no pressure to leave. 'As long as' w tym context znaczy 'for the duration that' - your desire sets limit, not host."
      },
      {
        id: "conj_adv_13",
        question: "Take a jacket with you _____ it gets cold later in the evening outdoors.",
        translation: "(Weź kurtkę ze sobą na wypadek gdyby zrobiło się zimno później wieczorem na zewnątrz)",
        options: ["in case", "unless", "provided", "as long as"],
        correct: "in case",
        explanation: "'In case it gets cold' dla weather preparedness! Jacket (precaution) IN CASE temperature drops (potential change). Evening often cools - wise to prepare. To practical advice - better have i nie need than need i nie have. 'In case' dla smart anticipation."
      },
      {
        id: "conj_adv_14",
        question: "The project will succeed _____ we receive the additional funding we requested soon.",
        translation: "(Projekt odniesie sukces pod warunkiem że otrzymamy dodatkowe fundusze które poprosiliśmy wkrótce)",
        options: ["provided that", "unless", "in case", "despite"],
        correct: "provided that",
        explanation: "'Provided that we receive' makes success conditional! Success depends (outcome) na funding arrival (requirement). To business reality - resources determine viability. 'Provided that' dla outcomes contingent na meeting prerequisites. Funding as make-or-break factor."
      },
      {
        id: "conj_adv_15",
        question: "_____ it stops raining soon, we'll have to cancel the outdoor picnic event.",
        translation: "(Chyba że przestanie padać wkrótce, będziemy musieli odwołać outdoor piknik)",
        options: ["Unless", "If", "Provided that", "As long as"],
        correct: "Unless",
        explanation: "'Unless it stops raining' daje ultimatum pogodzie! Będziemy cancel (threatened action) UNLESS stops (only prevention). Weather must change lub event can't happen. To weather-dependent planning - rain continuing forces cancellation. 'Unless' creates clear threshold - change needed or consequences follow."
      }
    ]
  }
};

export default part20Categories;