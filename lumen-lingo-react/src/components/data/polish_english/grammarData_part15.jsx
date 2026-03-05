/**
 * POLISH → ENGLISH GRAMMAR - PART 15
 * 4 categories, 15 questions each - Nuanced communication
 */

import { MessageCircle, Code, Users, CalendarClock } from "lucide-react";

export const part15Categories = {
  reported_questions: {
    name: "Pytania w mowie zależnej",
    description: "Jak przekazywać pytania innych",
    icon: MessageCircle,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "rep_q_1",
        question: "She asked me _____ I was doing at the weekend coming up soon.",
        translation: "(Zapytała mnie co robię w nadchodzący weekend)",
        options: ["what", "what was I", "was I what", "that what"],
        correct: "what",
        explanation: "Pytania w mowie zależnej używają normalnego szyku! 'Asked what I was doing' - nie 'what was I doing'. Pytanie staje się klauzulą rzeczownikową. Słowo pytające zostaje ale inwersja znika. To standardowy wzorzec dla raportowania wszystkich pytań - zachowaj słowo pytające, usuń inwersję."
      },
      {
        id: "rep_q_2",
        question: "He wanted to know _____ I had finished my homework assignment yet.",
        translation: "(Chciał wiedzieć czy skończyłem już moją pracę domową)",
        options: ["if", "that", "what", "do I"],
        correct: "if",
        explanation: "'If' lub 'whether' dla reported yes/no questions! 'Wanted to know if I had finished' - bezpośrednie 'Have you finished?' staje się 'if I had finished'. Yes/no questions tracą inwersję i dostają 'if/whether'. Czas też się przesuwa (backshift) - present perfect → past perfect."
      },
      {
        id: "rep_q_3",
        question: "The teacher asked us _____ we understood the grammar rule she explained.",
        translation: "(Nauczycielka zapytała nas czy zrozumieliśmy zasadę gramatyczną którą wyjaśniła)",
        options: ["if", "that", "what", "do we"],
        correct: "if",
        explanation: "'Asked if we understood' dla reported comprehension check! Pytała 'Do you understand?' → asked if we understood. Yes/no question transformuje się z 'if'. Tense backshift: present → past. To typowe classroom question raportowane - nauczyciel sprawdza understanding."
      },
      {
        id: "rep_q_4",
        question: "She wondered _____ I could help her move some heavy furniture upstairs.",
        translation: "(Zastanawiała się czy mógłbym pomóc jej przestawić ciężkie meble na górę)",
        options: ["whether", "if", "that", "can I"],
        correct: "whether",
        explanation: "'Wondered whether' jest lekko bardziej formalne! Oba 'if' i 'whether' działają dla yes/no questions ale 'whether' brzmi thoughtful. 'Whether I could help' pokazuje consideration - myślała czy zapytać. To o deliberation przed prośbą - rozważała twoją dostępność."
      },
      {
        id: "rep_q_5",
        question: "Do you remember _____ won the World Cup football tournament in 2018?",
        translation: "(Czy pamiętasz kto wygrał turniej Mistrzostw Świata w piłce nożnej w 2018?)",
        options: ["who", "who did", "did who", "that who"],
        correct: "who",
        explanation: "'Remember who won' zachowuje słowo pytające! Nie 'who did win' - embedded używa normalnego szyku. 'Who' pozostaje ale pomocnik 'did' znika. To test pamięci o przeszłym wydarzeniu sportowym - transformujesz pytanie w memory probe."
      },
      {
        id: "rep_q_6",
        question: "I can't figure out _____ he's so angry about - nothing bad happened today.",
        translation: "(Nie mogę zrozumieć o co jest taki zły - nic złego się nie stało dzisiaj)",
        options: ["what", "what is", "is what", "that what"],
        correct: "what",
        explanation: "'Figure out what he's angry about' - normalny szyk! Nie 'what is he'. Po 'figure out' pytanie o przyczynę gniewu staje się puzzle do rozwiązania. 'What' pozostaje na początku klauzuli ale reszta jest jak statement. To o próbie understanding mysterious reaction."
      },
      {
        id: "rep_q_7",
        question: "They didn't tell us _____ the event had been cancelled so suddenly.",
        translation: "(Nie powiedzieli nam dlaczego wydarzenie zostało odwołane tak nagle)",
        options: ["why", "why had", "had why", "that why"],
        correct: "why",
        explanation: "'Tell us why it had been cancelled' - embedded z passive voice! 'Why' + normalny szyk nawet z past perfect passive. Słowo pytające first, potem normalny statement order. To narzeka na brak komunikacji - powinni byli wyjaśnić powód ale nie zrobili."
      },
      {
        id: "rep_q_8",
        question: "I'm curious _____ decided to paint their house bright pink color!",
        translation: "(Jestem ciekaw kto zdecydował pomalować ich dom na jaskrawy róż!)",
        options: ["who", "who did", "did who", "that who"],
        correct: "who",
        explanation: "'Curious who decided' dla unusual choices! 'Who' jako podmiot decision używa normalnego szyku. Różowy dom jest surprising więc jesteś curious o decision-maker. 'Who' pozostaje ale bez pomocy - embedded questions drop auxiliary verbs."
      },
      {
        id: "rep_q_9",
        question: "Could you show me _____ to use this complicated new software program?",
        translation: "(Czy mógłbyś pokazać mi jak używać tego skomplikowanego nowego programu komputerowego?)",
        options: ["how", "how to", "how do I", "how I"],
        correct: "how",
        explanation: "'Show me how to use' łączy embedded z infinitive! 'How to use' - 'how' + infinitive dla instrukcji. To prośba o tutorial - chcesz demonstracji. Embedded question z 'to' infinitive tworzy instruction request - nie tylko wiedzieć JAK ale dostać pokazane."
      },
      {
        id: "rep_q_10",
        question: "I wonder _____ it will rain tomorrow for our outdoor wedding ceremony.",
        translation: "(Zastanawiam się czy będzie padać jutro na naszą zewnętrzną ceremonię ślubną)",
        options: ["if", "that", "will", "will it"],
        correct: "if",
        explanation: "'Wonder if it will rain' dla weather uncertainty! Yes/no question o przyszłość używa 'if'. 'If' wprowadza possibility bez knowing answer. To anxiety o ważne wydarzenie - potrzebujesz dobrej pogody ale nie możesz kontrolować. Weather uncertainty przed outdoor events jest universal worry."
      },
      {
        id: "rep_q_11",
        question: "Can you find out _____ the package will be delivered to our house?",
        translation: "(Czy możesz dowiedzieć się kiedy paczka zostanie dostarczona do naszego domu?)",
        options: ["when", "when will", "will when", "that when"],
        correct: "when",
        explanation: "'Find out when it will be delivered' - request for information! 'When' + normalny szyk nawet z passive future. Prosisz kogoś żeby discovered timing - to delegowanie information-gathering task. Embedded makes request smooth - nie bezpośrednie pytanie ale polecenie znalezienia."
      },
      {
        id: "rep_q_12",
        question: "Do you know _____ the library closes on Sundays during summer months?",
        translation: "(Czy wiesz o której godzinie biblioteka zamyka się w niedziele podczas letnich miesięcy?)",
        options: ["what time", "what time does", "does what time", "at what time does"],
        correct: "what time",
        explanation: "'What time' + normalny szyk w embedded! 'What time the library closes' - nie 'does the library close'. Po 'know' pytanie o godzinę staje się information clause. To praktyczne pytanie o godziny otwarcia - szukasz info dla planning visit."
      },
      {
        id: "rep_q_13",
        question: "I asked him _____ he had seen my missing phone anywhere in the house.",
        translation: "(Zapytałem go czy widział mój zaginiony telefon gdziekolwiek w domu)",
        options: ["if", "that", "what", "has he"],
        correct: "if",
        explanation: "'Asked if he had seen' dla reported yes/no w przeszłości! Zapytałeś 'Have you seen?' → asked if he had seen. Backshift: present perfect → past perfect. 'If' dla yes/no transformacji. To desperackie szukanie - pytasz wszystkich czy widzieli lost item."
      },
      {
        id: "rep_q_14",
        question: "She inquired _____ we would be interested in joining their book club meetings.",
        translation: "(Zapytała czy bylibyśmy zainteresowani dołączeniem do ich spotkań klubu książki)",
        options: ["whether", "if", "that", "would we"],
        correct: "whether",
        explanation: "'Inquired whether' to bardzo formalne! 'Whether we would be interested' - formalny invitation raportowany. 'Inquire' sam w sobie jest formalny, więc 'whether' (też formalne) pasuje lepiej niż 'if'. To o grzecznej ofercie membership - she was sounding out interest."
      },
      {
        id: "rep_q_15",
        question: "I don't understand _____ he gets so upset about small unimportant things.",
        translation: "(Nie rozumiem dlaczego tak się denerwuje o małe nieważne rzeczy)",
        options: ["why", "why does", "does why", "that why"],
        correct: "why",
        explanation: "'Why he gets upset' - normalny present simple w embedded! Nie 'why does he get' - to byłoby bezpośrednie pytanie. Po 'understand' pytanie o powód staje się comprehension challenge. To o personality trait która cię myli - jego overreactions do minor issues."
      }
    ]
  },

  as_like_differences: {
    name: "As vs Like - różnice",
    description: "Kiedy 'as' a kiedy 'like'",
    icon: Code,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "as_like_1",
        question: "She works _____ a teacher at a primary school in the suburbs of the city.",
        translation: "(Pracuje jako nauczycielka w podstawówce na przedmieściach miasta)",
        options: ["as", "like", "such as", "how"],
        correct: "as",
        explanation: "'As' dla prawdziwej roli lub funkcji! 'Works as a teacher' = to jest jej rzeczywista praca. 'Like' znaczyłoby 'podobnie do nauczyciela' (comparison, nie faktyczna rola). Zapamiętaj: as = faktyczna rola/funkcja, like = porównanie. To o identyfikowaniu czyjejś profesji lub pozycji."
      },
      {
        id: "as_like_2",
        question: "He looks _____ his father - they have the same smile and eyes.",
        translation: "(Wygląda jak jego ojciec - mają ten sam uśmiech i oczy)",
        options: ["like", "as", "as if", "such as"],
        correct: "like",
        explanation: "'Like' dla fizycznego podobieństwa! 'Looks like his father' = przypomina fizycznie. 'Like' + rzeczownik dla porównań wyglądu. To o rodzinnym resemblance - dzielą cechy. 'Like' pokazuje similarity między dwiema oddzielnymi osobami bez sugerowania że są tą samą osobą."
      },
      {
        id: "as_like_3",
        question: "Do _____ I say, not as I do - follow my advice, not my example.",
        translation: "(Rób jak mówię, nie jak robię - podążaj za moją radą, nie moim przykładem)",
        options: ["as", "like", "how", "what"],
        correct: "as",
        explanation: "'As' z klauzulami (podmiot + czasownik)! 'As I say' = w sposób w jaki mówię. 'Like' nie może być używane z klauzulami w formalnym angielskim - tylko z rzeczownikami. To stare powiedzenie o hypocrisy - rady vs. behavior różnią się."
      },
      {
        id: "as_like_4",
        question: "It looks _____ it's going to rain soon - those clouds are very dark and threatening.",
        translation: "(Wygląda jakby miało zaraz padać - te chmury są bardzo ciemne i groźne)",
        options: ["like", "as", "as if", "such as"],
        correct: "like",
        explanation: "'Looks like' + klauzula w casualowym angielskim! Formalnie powinno być 'looks as if/as though' ale 'looks like' + klauzula jest powszechne w mowie. 'Like it's going to rain' to weather prediction bazowana na observation. Casualowa mowa coraz częściej używa 'like' nawet z klauzulami."
      },
      {
        id: "as_like_5",
        question: "_____ I mentioned earlier in my email, the meeting has been postponed until Monday.",
        translation: "(Jak wspomniałem wcześniej w moim emailu, spotkanie zostało przełożone na poniedziałek)",
        options: ["As", "Like", "Such as", "How"],
        correct: "As",
        explanation: "'As I mentioned' odnosi się do wcześniejszego statement! 'As' + klauzula dla odwoływania się do poprzednio powiedzianego. To formal reminder - reconnecting do earlier information. Bardzo częste w biznesowej korespondencji dla linkowania do previous communications. 'As' tworzy ciągłość między messages."
      },
      {
        id: "as_like_6",
        question: "Cities _____ London and Paris attract millions of tourists every year globally.",
        translation: "(Miasta takie jak Londyn i Paryż przyciągają miliony turystów każdego roku globalnie)",
        options: ["such as", "like", "as", "for example"],
        correct: "such as",
        explanation: "'Such as' dla formalnych przykładów! 'Cities such as London' podaje konkretne instances. 'Like' też może działać (mniej formalnie). 'Such as' jest preferowane w pisanym angielskim dla listing examples. To o illustrating category (cities) przez specific famous members."
      },
      {
        id: "as_like_7",
        question: "She sings _____ a professional, even though she never had formal training.",
        translation: "(Śpiewa jak profesjonalistka, chociaż nigdy nie miała formalnego treningu)",
        options: ["like", "as", "as if", "such as"],
        correct: "like",
        explanation: "'Like' dla porównania jakości! 'Sings like a professional' = na professional poziomie (comparison) ale nie jest faktycznie profesjonalistką. 'Like' + rzeczownik dla showing similarity w skill level. To komplement - jej naturalny talent matches trained professionals mimo braku formal education."
      },
      {
        id: "as_like_8",
        question: "_____ usual, he arrived late to the important meeting without apologizing.",
        translation: "(Jak zwykle przybył późno na ważne spotkanie bez przepraszania)",
        options: ["As", "Like", "Such as", "How"],
        correct: "As",
        explanation: "'As usual' to ustalone wyrażenie! Zawsze 'as' nigdy 'like' w tej frazie. Odnosi się do typowego wzorca zachowania - jego lateness jest normal pattern. 'As usual' wyraża frustrację z powtarzającym się problemem - znowu to samo. To o predictable annoying habits."
      },
      {
        id: "as_like_9",
        question: "He acts _____ he knows everything, but actually he's quite ignorant about many things.",
        translation: "(Zachowuje się jakby wiedział wszystko, ale w rzeczywistości jest dość ignorancki o wielu rzeczach)",
        options: ["as if", "like", "as", "such as"],
        correct: "as if",
        explanation: "'As if' + klauzula dla nierealnych porównań! 'Acts as if he knows' = zachowuje się w sposób sugerujący że wie (ale nie wie). 'As if' wprowadza pretense lub false appearance. To krytyczne - jego behavior projects expertise której nie ma. 'As if' exposes gap między appearance a reality."
      },
      {
        id: "as_like_10",
        question: "_____ a child, I used to spend every summer at my grandparents' farm.",
        translation: "(Jako dziecko spędzałem każde lato na farmie moich dziadków)",
        options: ["As", "Like", "When", "While"],
        correct: "As",
        explanation: "'As a child' dla time period w twoim życiu! 'As' wskazuje na stage of life - kiedy byłeś w tym stanie (bycia dzieckiem). 'Like a child' znaczyłoby 'in childish manner' (comparison). 'As' tworzy temporal context - during that life phase. To nostalgiczne wspomnienie childhood summers."
      },
      {
        id: "as_like_11",
        question: "You look _____ you've seen a ghost - you're so pale and shocked!",
        translation: "(Wyglądasz jakbyś zobaczył ducha - jesteś taki blady i zszokowany!)",
        options: ["as if", "like", "as", "such as"],
        correct: "as if",
        explanation: "'Look as if' + klauzula dla opisu wyglądu sugerującego sytuację! 'As if you've seen a ghost' - twój wygląd suggests shocking experience. 'As if' tworzy comparison między twoim stanem a stereotypical ghost reaction. To dramatyczne - używane dla exaggerating someone's shocking appearance."
      },
      {
        id: "as_like_12",
        question: "The building is used _____ a museum nowadays, though it was once a palace.",
        translation: "(Budynek jest używany jako muzeum obecnie, chociaż był kiedyś pałacem)",
        options: ["as", "like", "for", "to"],
        correct: "as",
        explanation: "'Used as' dla faktycznej funkcji! Budynek JEST muzeum (obecna rola). 'As a museum' identifies its current purpose. Nie 'like' bo to faktyczne użycie, nie porównanie. To o transformacji budynków - historical structures finding new purposes. 'As' specifies exact function."
      },
      {
        id: "as_like_13",
        question: "He treated me _____ I was part of his own family during my stay abroad.",
        translation: "(Traktował mnie jakbym był częścią jego własnej rodziny podczas mojego pobytu za granicą)",
        options: ["as if", "like", "as", "such as"],
        correct: "as if",
        explanation: "'Treated me as if I was' dla nierealnej hipotezy! NIE byłeś family member (reality) ale traktował cię JAKBYŚ BYŁ (hypothetical treatment). 'As if' + klauzula tworzy counter-factual comparison. To o exceptional hospitality - pokazywał family-level care mimo będąc guest."
      },
      {
        id: "as_like_14",
        question: "Sports _____ football and basketball are very popular worldwide among all ages.",
        translation: "(Sporty takie jak piłka nożna i koszykówka są bardzo popularne na całym świecie wśród wszystkich wieku)",
        options: ["such as", "like", "as", "for instance"],
        correct: "such as",
        explanation: "'Such as' dla formalnego listowania przykładów! 'Sports such as football' podaje specific instances kategorii. Bardziej formalne niż 'like'. 'Such as' używane w edukacyjnym i informacyjnym writing dla introducing representative examples z większej kategorii."
      },
      {
        id: "as_like_15",
        question: "_____ expected, the exam was very difficult and many students struggled with it.",
        translation: "(Jak oczekiwano, egzamin był bardzo trudny i wielu studentów miało z nim problem)",
        options: ["As", "Like", "Such as", "How"],
        correct: "As",
        explanation: "'As expected' odnosi się do anticipation! 'As' wskazuje że rzeczywistość matched prediction - trudność była przewidziana. To ustalone wyrażenie: as expected, as predicted, as planned. Potwierdza że outcome aligned z expectations - nie było niespodzianki, szło zgodnie z przewidywaniami."
      }
    ]
  },

  future_in_past: {
    name: "Przyszłość w przeszłości",
    description: "Was going to, would - planowane ale...",
    icon: CalendarClock,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "fut_past_1",
        question: "I _____ call you yesterday evening, but I completely forgot about it.",
        translation: "(Miałem zamiar zadzwonić do ciebie wczoraj wieczorem, ale całkowicie o tym zapomniałem)",
        options: ["was going to", "would", "will", "am going to"],
        correct: "was going to",
        explanation: "'Was going to' dla planów które nie happened! Miałeś intencję (przeszły plan) ale nie zrobiłeś (nie stało się). To wyraża niezrealizowane zamiary - było zaplanowane w przeszłości dla przeszłej przyszłości ale nie materialized. Używane dla wyjaśniania czemu coś expected nie wydarzyło się."
      },
      {
        id: "fut_past_2",
        question: "She said she _____ help me with the project, but then she got too busy with work.",
        translation: "(Powiedziała że pomoże mi z projektem, ale potem stała się zbyt zajęta pracą)",
        options: ["would", "will", "was going to", "is going to"],
        correct: "would",
        explanation: "'Would' w reported speech dla przyszłości! Powiedziała 'I WILL help' → said she WOULD help. 'Will' przesuwa się do 'would' w mowie zależnej. Ale nie pomogła (niezrealizowana obietnica). To o broken promises lub zmianach planów - intention była tam ale execution failed."
      },
      {
        id: "fut_past_3",
        question: "We _____ go to the beach, but it started raining so we stayed home instead.",
        translation: "(Mieliśmy iść na plażę, ale zaczęło padać więc zostaliśmy w domu zamiast)",
        options: ["were going to", "would", "will", "are going to"],
        correct: "were going to",
        explanation: "'Were going to' dla zmienionych planów! Plan był iść (intention) ale deszcz zmienił plany. Mnoga forma 'were' dla 'we'. To bardzo częste - plany są disrupted przez circumstances. Wyjaśnia czemu expectations nie zostały met - external factors interfered."
      },
      {
        id: "fut_past_4",
        question: "He knew that the train _____ arrive late because of the bad weather conditions.",
        translation: "(Wiedział że pociąg przyjedzie późno z powodu złych warunków pogodowych)",
        options: ["would", "will", "was going to", "is going to"],
        correct: "would",
        explanation: "'Would' dla przyszłości z perspective przeszłego knowing! Wiedział (przeszłość) że przyjedzie (przyszłość z tamtej perspektywy). 'Will' przesuwa się do 'would' w past context nawet bez reported speech. To o anticipating delays - miał foresight o problemie."
      },
      {
        id: "fut_past_5",
        question: "I _____ buy that car, but I decided it was too expensive for my budget.",
        translation: "(Miałem zamiar kupić ten samochód, ale zdecydowałem że był za drogi na mój budżet)",
        options: ["was going to", "would", "will", "am going to"],
        correct: "was going to",
        explanation: "'Was going to buy' dla aborted intention! Rozważałeś kupno (plan był w głowie) ale zrezygnowałeś (decision changed). To o rational decision-making - initial attraction potem practical consideration zmieniła mind. Wyjaśnia czemu nie kupiłeś mimo zainteresowania."
      },
      {
        id: "fut_past_6",
        question: "They told us the flight _____ depart at 3 PM from gate number twelve.",
        translation: "(Powiedzieli nam że lot odleci o 15 z bramki numer dwanaście)",
        options: ["would", "will", "was going to", "is going to"],
        correct: "would",
        explanation: "'Would' w reported information! Powiedzieli 'will depart' → told us WOULD depart. To o przekazywaniu schedule information - raportowany timing lotu. 'Would' tworzy reported future - co było przyszłością z ich perspektywy kiedy informowali."
      },
      {
        id: "fut_past_7",
        question: "I _____ ask her out, but I lost my courage at the last moment.",
        translation: "(Miałem zapytać ją na randkę, ale straciłem odwagę w ostatnim momencie)",
        options: ["was going to", "would", "will", "am going to"],
        correct: "was going to",
        explanation: "'Was going to ask' dla failed romantic intention! Miałeś plan (courage built up) ale chickened out (nie zrobiłeś). To relatable - fear prevented action mimo intention. Wyjaśnia missed opportunity przez lack of nerve - plan był tam ale execution failed z powodu anxiety."
      },
      {
        id: "fut_past_8",
        question: "She promised she _____ be there on time, but she arrived thirty minutes late.",
        translation: "(Obiecała że będzie tam na czas, ale przybyła trzydzieści minut spóźniona)",
        options: ["would", "will", "was going to", "is going to"],
        correct: "would",
        explanation: "'Would be' w reported promise! Obiecała 'I WILL be there' → promised she WOULD be. Ale się spóźniła (broken promise). To o reliability - lub lack thereof. Promise był szczery w momencie ale nie został dotrzymany. 'Would' w past reporting pokazuje co była przyszłością z jej perspektywy."
      },
      {
        id: "fut_past_9",
        question: "We thought it _____ be easy, but the task turned out much harder than expected.",
        translation: "(Myśleliśmy że będzie łatwo, ale zadanie okazało się znacznie trudniejsze niż oczekiwano)",
        options: ["would", "will", "was going to", "is"],
        correct: "would",
        explanation: "'Thought it would be' dla błędnych prediction! Myśleliście (past belief) że będzie łatwe (expected future z tamtej perspektywy). Reality okazała się inna - was harder. To o misjudgment - underestimowaliście difficulty. 'Would' dla expected future która się nie zmaterializowała jak anticipated."
      },
      {
        id: "fut_past_10",
        question: "The forecast said it _____ snow overnight, so we prepared warm clothes.",
        translation: "(Prognoza mówiła że będzie padać śnieg w nocy, więc przygotowaliśmy ciepłe ubrania)",
        options: ["would", "will", "was going to", "is going to"],
        correct: "would",
        explanation: "'Forecast said it would snow' - reported weather prediction! Prognoza stated 'it will snow' → said it WOULD snow. Przygotowaliście się bazując na tej informacji. 'Would' dla weather forecasts w past reporting - co było predicted future z perspektywy forecast time."
      },
      {
        id: "fut_past_11",
        question: "I _____ tell you about the surprise party, but I managed to keep the secret successfully!",
        translation: "(Prawie powiedziałem ci o niespodziance, ale udało mi się zachować sekret pomyślnie!)",
        options: ["was going to", "would", "will", "am going to"],
        correct: "was going to",
        explanation: "'Was going to tell' dla prawie zrobionej akcji! Byłeś blisko wygadania się (temptation) ale się powstrzymałeś (self-control won). To celebruje keeping secret pomimo urge to share. Close call - prawie zrujnowałeś surprise ale discretion przeważyła."
      },
      {
        id: "fut_past_12",
        question: "He hoped that the problem _____ solve itself without any intervention needed.",
        translation: "(Miał nadzieję że problem rozwiąże się sam bez żadnej potrzebnej interwencji)",
        options: ["would", "will", "was going to", "is going to"],
        correct: "would",
        explanation: "'Hoped it would solve' dla wishful thinking! Miał nadzieję (past hope) że rozwiąże się (hoped-for future). 'Would' dla expected outcomes w past contexts of hope/belief/think. To o optymistic expectation - hoping situation improves bez twojej akcji, czas rozwiąże wszystko."
      },
      {
        id: "fut_past_13",
        question: "They _____ move to Canada, but they changed their minds after visiting last summer.",
        translation: "(Mieli się przeprowadzić do Kanady, ale zmienili zdanie po odwiedzeniu zeszłego lata)",
        options: ["were going to", "would", "will", "are going to"],
        correct: "were going to",
        explanation: "'Were going to move' dla porzuconych planów! Planowali przeprowadzkę (serious intention) ale wizyta zmieniła perspective. To o big life decisions które zostają reconsidered - firsthand experience provided new information która altered major plans."
      },
      {
        id: "fut_past_14",
        question: "I wondered if the package _____ arrive before my birthday on the weekend.",
        translation: "(Zastanawiałem się czy paczka przyjedzie przed moimi urodzinami w weekend)",
        options: ["would", "will", "was going to", "is going to"],
        correct: "would",
        explanation: "'Wondered if it would arrive' - past wondering o future event! Zastanawiałeś się (past) o timing dostawy (future z tamtej perspektywy). 'Would' w embedded question po past tense. To anxiety o timing - chciałeś dostać przed birthday dla używania lub gifting."
      },
      {
        id: "fut_past_15",
        question: "She _____ start her new job on Monday, but the company delayed her start date.",
        translation: "(Miała zacząć nową pracę w poniedziałek, ale firma opóźniła jej datę rozpoczęcia)",
        options: ["was going to", "would", "will", "is going to"],
        correct: "was going to",
        explanation: "'Was going to start' dla postponed plans! Wszystko było set (confirmed plan) ale company zmienił plany. To frustrating - byłaś gotowa zacząć ale external decision delayed. Wyjaśnia czemu timing changed od original arrangement - nie twój wybór ale circumstance beyond control."
      }
    ]
  }
};

export default part15Categories;