/**
 * POLISH → ENGLISH GRAMMAR - PART 14
 * 4 categories, 15 questions each - Advanced connections
 */

import { Link, Filter, Hourglass, ArrowRight } from "lucide-react";

export const part14Categories = {
  relative_pronouns_advanced: {
    name: "Zaimki względne - zaawansowane",
    description: "Who, whom, whose, which, that - subtelności",
    icon: Link,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "rel_adv_1",
        question: "The man _____ I met yesterday at the conference works for a large international tech company.",
        translation: "(Mężczyzna którego spotkałem wczoraj na konferencji pracuje dla dużej międzynarodowej firmy technologicznej)",
        options: ["who", "whom", "which", "whose"],
        correct: "who",
        explanation: "'Who' dla ludzi jako podmiot klauzuli względnej! 'The man who I met' - 'who' odnosi się do 'man'. W casualowym angielskim 'who' często zastępuje 'whom' nawet jako dopełnienie. Formalnie powinno być 'whom' (dopełnienie), ale 'who' jest naturalniejsze i częstsze w codziennej mowie."
      },
      {
        id: "rel_adv_2",
        question: "The book _____ cover is blue belongs to my sister who studies literature at university.",
        translation: "(Książka której okładka jest niebieska należy do mojej siostry, która studiuje literaturę na uniwersytecie)",
        options: ["whose", "who's", "which", "that"],
        correct: "whose",
        explanation: "'Whose' pokazuje posiadanie! 'Whose cover' = okładka KSIĄŻKI. Używane zarówno dla ludzi jak rzeczy w formalnym angielskim. 'Whose' łączy dwa rzeczowniki przez relację posiadania. Nie myl z 'who's' (who is - skrót). 'Whose' tworzy połączenie między głównym rzeczownikiem a jego własnością."
      },
      {
        id: "rel_adv_3",
        question: "The woman to _____ I was speaking is my former colleague from previous job.",
        translation: "(Kobieta z którą rozmawiałem jest moją byłą koleżanką z poprzedniej pracy)",
        options: ["whom", "who", "which", "whose"],
        correct: "whom",
        explanation: "'Whom' po przyimku jest formalnie poprawne! 'To whom I was speaking' - przyimek 'to' wymaga 'whom' nie 'who'. To bardzo formalne - casualowa mowa powiedziałaby 'the woman who I was speaking to' (przyimek na końcu). Struktura z przyimkiem na początku + whom jest literacka i elegancka."
      },
      {
        id: "rel_adv_4",
        question: "This is the house _____ I grew up as a child with my family years ago.",
        translation: "(To jest dom w którym dorastałem jako dziecko z moją rodziną lata temu)",
        options: ["where", "which", "that", "in that"],
        correct: "where",
        explanation: "'Where' dla miejsc w klauzulach względnych! 'The house where I grew up' = dom (miejsce). Mógłbyś też powiedzieć 'the house in which' lub 'the house that I grew up in' ale 'where' jest najprostsze i najbardziej naturalne. To o lokalizacji jako kontekście dla wspomnień."
      },
      {
        id: "rel_adv_5",
        question: "Do you remember the day _____ we first met at the party five years ago?",
        translation: "(Czy pamiętasz dzień kiedy spotkaliśmy się pierwszy raz na imprezie pięć lat temu?)",
        options: ["when", "which", "that", "where"],
        correct: "when",
        explanation: "'When' dla czasu w klauzulach względnych! 'The day when we met' odnosi się do konkretnego dnia (czas). Mógłbyś też 'the day that we met' (mniej formalnie) ale 'when' jest jaśniejsze dla wyrażeń czasu. To o identyfikowaniu momentu w czasie który ma znaczenie."
      },
      {
        id: "rel_adv_6",
        question: "I don't understand the reason _____ he left his job so suddenly without explanation.",
        translation: "(Nie rozumiem powodu dlaczego zostawił swoją pracę tak nagle bez wyjaśnienia)",
        options: ["why", "which", "that", "for which"],
        correct: "why",
        explanation: "'Why' dla powodu w klauzulach względnych! 'The reason why he left' wyjaśnia motywację. Mógłbyś też 'the reason that' lub formalnie 'the reason for which' ale 'why' jest naturalniejsze. To łączy rzeczownik 'reason' z jego wyjaśnieniem - dlaczego coś się stało."
      },
      {
        id: "rel_adv_7",
        question: "That's the girl _____ brother won the national mathematics competition last year.",
        translation: "(To jest dziewczyna której brat wygrał krajowe zawody matematyczne w zeszłym roku)",
        options: ["whose", "who's", "which", "that"],
        correct: "whose",
        explanation: "'Whose' łączy osobę z członkiem rodziny! 'Whose brother' pokazuje relację - to jej brat. 'Whose' tworzy posiadanie między 'girl' a 'brother'. To bardzo użyteczne dla opisywania ludzi przez ich relacje rodzinne. Nie 'who's' bo to znaczy 'who is'."
      },
      {
        id: "rel_adv_8",
        question: "The only thing _____ matters to me right now is passing this important exam successfully.",
        translation: "(Jedyna rzecz która ma dla mnie znaczenie teraz to zdanie tego ważnego egzaminu pomyślnie)",
        options: ["that", "which", "what", "who"],
        correct: "that",
        explanation: "'That' po superlatives i 'the only'! 'The only thing that' - używaj 'that' nie 'which' po 'the only/first/last/all'. To zasada: po określeniach limitujących używaj 'that'. 'That' jest bardziej restrykcyjne niż 'which' - wskazuje na jedyną lub specjalną rzecz."
      },
      {
        id: "rel_adv_9",
        question: "She's someone _____ I can always trust completely in any difficult situation.",
        translation: "(Jest kimś komu zawsze mogę całkowicie zaufać w każdej trudnej sytuacji)",
        options: ["who", "whom", "that", "which"],
        correct: "who",
        explanation: "'Who' lub 'that' dla ludzi w defining clauses! 'Someone who I can trust' - oba działają ale 'who' jest częstsze dla ludzi. 'Whom' byłoby ultra-formalne tutaj. To o definiowaniu typu osoby - charakteryzujesz ją przez wiarygodność jako kluczową cechę."
      },
      {
        id: "rel_adv_10",
        question: "My car, _____ is already ten years old, still runs perfectly without any problems.",
        translation: "(Mój samochód, który ma już dziesięć lat, wciąż jeździ perfekcyjnie bez żadnych problemów)",
        options: ["which", "that", "who", "what"],
        correct: "which",
        explanation: "'Which' w non-defining clauses z przecinkami! Przecinki pokazują dodatkową informację. 'Which is ten years old' dodaje fakt ale nie jest kluczowy dla identyfikacji. 'That' NIE działa z przecinkami - tylko 'which'. Non-defining = ekstra info, defining = kluczowa identyfikacja."
      },
      {
        id: "rel_adv_11",
        question: "Everything _____ he told me about the project turned out to be completely true.",
        translation: "(Wszystko co powiedział mi o projekcie okazało się być całkowicie prawdą)",
        options: ["that", "which", "what", "who"],
        correct: "that",
        explanation: "'That' po 'everything/all/nothing'! Indefinite pronouns używają 'that' nie 'which'. 'Everything that' obejmuje całą informację którą dał. To zasada: po słowach jak everything, something, anything, nothing używaj 'that' dla klauzul względnych."
      },
      {
        id: "rel_adv_12",
        question: "The hotel _____ we stayed during our vacation had an amazing view of the ocean.",
        translation: "(Hotel w którym się zatrzymaliśmy podczas naszych wakacji miał niesamowity widok na ocean)",
        options: ["where", "which", "that", "in which"],
        correct: "where",
        explanation: "'Where' dla hoteli i miejsc zakwaterowania! 'The hotel where we stayed' - 'where' = w którym miejscu. Alternatywnie 'the hotel at which' (formalnie) lub 'the hotel that we stayed at' (przyimek kończy). 'Where' jest najprostsze i najbardziej bezpośrednie dla lokalizacji."
      },
      {
        id: "rel_adv_13",
        question: "The person with _____ I shared the apartment was very clean and organized.",
        translation: "(Osoba z którą dzieliłem mieszkanie była bardzo czysta i zorganizowana)",
        options: ["whom", "who", "which", "that"],
        correct: "whom",
        explanation: "'With whom' używa 'whom' po przyimku! 'With whom I shared' to formalna konstrukcja. Casualowo: 'the person who I shared the apartment with' (przyimek na końcu). Gdy przyimek jest na początku przed relative pronoun, musisz użyć 'whom' dla ludzi. To tworzy eleganckę, formalną strukturę."
      },
      {
        id: "rel_adv_14",
        question: "I'll never forget the moment _____ I heard the good news about getting the job.",
        translation: "(Nigdy nie zapomnę momentu kiedy usłyszałem dobrą wiadomość o dostaniu pracy)",
        options: ["when", "which", "that", "where"],
        correct: "when",
        explanation: "'When' dla konkretnych momentów w czasie! 'The moment when I heard' identyfikuje dokładny punkt czasowy. To emocjonalnie naładowane wspomnienie - 'when' łączy ważne wydarzenie z jego momentem czasowym. Używane dla wspomnień znaczących life events."
      },
      {
        id: "rel_adv_15",
        question: "This is something _____ I've never experienced before in my entire life until now.",
        translation: "(To jest coś czego nigdy wcześniej nie doświadczyłem w całym moim życiu aż do teraz)",
        options: ["that", "which", "what", "who"],
        correct: "that",
        explanation: "'That' po 'something'! Indefinite pronouns (something, anything, everything, nothing) używają 'that'. 'Something that I've never experienced' opisuje nowość doświadczenia. 'That' wskazuje na specific nature mimo że 'something' jest vague - to paradoks angielskiego."
      }
    ]
  },

  question_tags_modals: {
    name: "Question tags z modalnymi",
    description: "Can you? Should we? Won't they?",
    icon: Filter,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "qt_mod_1",
        question: "You can swim well, _____ you?",
        translation: "(Umiesz dobrze pływać, prawda?)",
        options: ["can't", "don't", "aren't", "won't"],
        correct: "can't",
        explanation: "Modalne czasowniki tworzą własne tagi! 'Can' w pozytywnym zdaniu daje 'can't' w tagu. Używasz tego samego modalnego w tagu co w zdaniu głównym. 'Can't you?' sprawdza umiejętność którą zakładasz - to confirmatory question szukające potwierdzenia zdolności."
      },
      {
        id: "qt_mod_2",
        question: "We should leave now to catch the train, _____ we?",
        translation: "(Powinniśmy wyjechać teraz żeby złapać pociąg, prawda?)",
        options: ["shouldn't", "don't", "aren't", "won't"],
        correct: "shouldn't",
        explanation: "'Should' w pozytywnym daje 'shouldn't' w tagu! Pozytywne modalność odwraca się do negatywnego tagu. 'Shouldn't we?' szuka zgody na propozycję - to suggestion zamieniona w pytanie dla uzyskania konsensusu grupy przed działaniem."
      },
      {
        id: "qt_mod_3",
        question: "He couldn't solve the problem alone, _____ he?",
        translation: "(Nie mógł rozwiązać problemu sam, prawda?)",
        options: ["could", "can", "did", "was"],
        correct: "could",
        explanation: "Negatywne 'couldn't' daje pozytywny tag 'could he?'! Używasz formy bazowej modalnego bez 'not'. 'Could he?' potwierdza niemożność - sprawdzasz że rzeczywiście nie dał rady sam. To o weryfikacji ograniczeń kiedy ktoś potrzebował pomocy."
      },
      {
        id: "qt_mod_4",
        question: "They must be tired after working so long, _____ they?",
        translation: "(Muszą być zmęczeni po tak długiej pracy, prawda?)",
        options: ["mustn't", "aren't", "don't", "won't"],
        correct: "mustn't",
        explanation: "'Must' dla dedukcji daje 'mustn't they?' w tagu! To o logicznym wniosku - pracowali długo więc logicznie są zmęczeni. Tag z 'must' sprawdza twoją dedukcję. 'Mustn't' w tagu nie znaczy zakazu tutaj - to po prostu negatywna forma tagu dla deductive 'must'."
      },
      {
        id: "qt_mod_5",
        question: "You will help me with this task, _____ you?",
        translation: "(Pomożesz mi z tym zadaniem, prawda?)",
        options: ["won't", "don't", "can't", "aren't"],
        correct: "won't",
        explanation: "'Will' daje 'won't' w tagu! Przyszłość używa 'will/won't' w tagach. 'Won't you?' to grzeczna prośba przebrana za pytanie confirmacyjne - zakładasz że pomogą i szukasz potwierdzenia. To łagodniejsze niż bezpośrednia prośba."
      },
      {
        id: "qt_mod_6",
        question: "She wouldn't lie to us about something so important, _____ she?",
        translation: "(Nie skłamałaby nam o czymś tak ważnym, prawda?)",
        options: ["would", "will", "does", "is"],
        correct: "would",
        explanation: "Negatywne 'wouldn't' daje pozytywny tag 'would she?'! To o zaufaniu - zakładasz że jest uczciwa. 'Would she?' wyraża pewność w jej charakterze. Tag szuka potwierdzenia twojej wiary w jej uczciwość w ważnej sprawie."
      },
      {
        id: "qt_mod_7",
        question: "We ought to call them before it gets too late, _____ we?",
        translation: "(Powinniśmy do nich zadzwonić zanim będzie za późno, prawda?)",
        options: ["oughtn't", "shouldn't", "don't", "won't"],
        correct: "oughtn't",
        explanation: "'Ought to' daje 'oughtn't we?' w tagu! Rzadko używane - 'shouldn't we?' jest częstsze i też akceptowane. 'Ought' jest staromodne ale tag formalnie powinien używać 'oughtn't'. To o moralnym obowiązku lub społecznej grzeczności - powinniście zadzwonić z szacunku."
      },
      {
        id: "qt_mod_8",
        question: "There might be some problems with the plan, _____ there?",
        translation: "(Mogą być jakieś problemy z planem, prawda?)",
        options: ["mightn't", "won't", "aren't", "isn't"],
        correct: "mightn't",
        explanation: "'Might' daje 'mightn't there?' w tagu! 'There might be' to konstrukcja istnienia z możliwością. Tag sprawdza twoje podejrzenie o potencjalnych problemach. 'Mightn't' jest rzadkie w amerykańskim (używają 'might not') ale poprawne. To wyraża cautious concern o możliwe trudności."
      },
      {
        id: "qt_mod_9",
        question: "You had better hurry up, _____ you?",
        translation: "(Lepiej się pospiesz, prawda?)",
        options: ["hadn't", "don't", "won't", "shouldn't"],
        correct: "hadn't",
        explanation: "'Had better' daje 'hadn't you?' w tagu! Specjalna konstrukcja - 'had better' traktowane jako jednostka. Tag używa 'hadn't' mimo że to nie prawdziwy past tense. To pilne ostrzeżenie - lepiej działaj szybko albo będą konsekwencje. 'Hadn't you?' wzmacnia urgency porady."
      },
      {
        id: "qt_mod_10",
        question: "She may come to the party tonight, _____ she?",
        translation: "(Może przyjdzie na imprezę dziś wieczorem, prawda?)",
        options: ["mayn't", "won't", "doesn't", "isn't"],
        correct: "mayn't",
        explanation: "'May' daje 'mayn't she?' formalnie! Bardzo rzadkie - większość używa 'might not' zamiast. 'May' wyraża możliwość, tag sprawdza tę możliwość. W praktyce ludzie często unikają tego tagu i reformułują zdanie - 'mayn't' brzmi archaicznie i dziwnie w nowoczesnym angielskim."
      },
      {
        id: "qt_mod_11",
        question: "You needn't worry about the test results, _____ you?",
        translation: "(Nie musisz martwić się o wyniki testu, prawda?)",
        options: ["need", "don't", "must", "should"],
        correct: "need",
        explanation: "'Needn't' daje pozytywny tag 'need you?'! 'Need' jako modalny (mainly brytyjski) tworzy tagi jak inne modalne. Negatywne zdanie główne więc pozytywny tag. To uspokajające - mówisz że zmartwienie jest niepotrzebne i szukasz zgody że mogą się zrelaksować."
      },
      {
        id: "qt_mod_12",
        question: "There used to be a cinema here on this corner, _____ there?",
        translation: "(Kiedyś było kino tutaj na tym rogu, prawda?)",
        options: ["didn't", "wasn't", "usedn't", "hadn't"],
        correct: "didn't",
        explanation: "'Used to' daje 'didn't there?' w tagu! Traktowane jak past simple więc tag używa 'did'. 'Usedn't' jest bardzo staromodne i rzadkie. 'Didn't there?' potwierdza przeszłe istnienie - sprawdzasz wspólną pamięć o tym jak miejsce wyglądało wcześniej."
      },
      {
        id: "qt_mod_13",
        question: "I am right about this answer, _____ I?",
        translation: "(Mam rację o tej odpowiedzi, prawda?)",
        options: ["aren't", "am not", "don't", "won't"],
        correct: "aren't",
        explanation: "'I am' daje dziwny tag 'aren't I?'! To wyjątek - 'am not I?' jest niezręczne więc używamy 'aren't I?'. Gramatycznie dziwne ale uniwersalnie akceptowane. To o poszukiwaniu potwierdzenia swojej poprawności - masz pewność ale chcesz validation."
      },
      {
        id: "qt_mod_14",
        question: "Nothing can go wrong with this simple plan, _____ it?",
        translation: "(Nic nie może pójść źle z tym prostym planem, prawda?)",
        options: ["can", "can't", "will", "won't"],
        correct: "can",
        explanation: "'Nothing' jest negatywne więc tag jest pozytywny! 'Nothing can go wrong' (negatyw) → 'can it?' (pozytyw). Używasz modalnego z zdania w tagu. To wyraża pewność w planie - nic nie może się popsuć. Tag szuka agreement że plan jest foolproof."
      },
      {
        id: "qt_mod_15",
        question: "You'd rather stay home tonight than go out, _____ you?",
        translation: "(Wolałbyś zostać w domu dziś wieczorem niż wyjść, prawda?)",
        options: ["wouldn't", "don't", "won't", "hadn't"],
        correct: "wouldn't",
        explanation: "'Would rather' daje 'wouldn't you?' w tagu! 'You'd rather' = you would rather, więc tag używa 'wouldn't'. To sprawdza preferencję - myślisz że wolą zostać i szukasz potwierdzenia. Tag czyni założenie o ich preferencji którą chcesz zweryfikować."
      }
    ]
  },

  past_perfect_continuous: {
    name: "Past Perfect Continuous",
    description: "Had been doing - długie akcje przed przeszłością",
    icon: Hourglass,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "ppc_1",
        question: "I was exhausted because I _____ for three hours straight without any break.",
        translation: "(Byłem wyczerpany bo biegałem przez trzy godziny z rzędu bez żadnej przerwy)",
        options: ["had been running", "have been running", "was running", "ran"],
        correct: "had been running",
        explanation: "Past perfect continuous pokazuje długą akcję PRZED inną przeszłą akcją! Bieganie (wcześniejsze) spowodowało wyczerpanie (późniejsze w przeszłości). 'Had been running' podkreśla czas trwania działania który wyjaśnia stan. To o pokazywaniu przyczyny poprzez przedłużoną wcześniejszą aktywność."
      },
      {
        id: "ppc_2",
        question: "She _____ for the exam all week when she finally took it on Friday morning.",
        translation: "(Uczyła się do egzaminu cały tydzień kiedy w końcu go zdawała w piątek rano)",
        options: ["had been studying", "has been studying", "was studying", "studied"],
        correct: "had been studying",
        explanation: "'Had been studying' pokazuje ciągłą przygotowawczą akcję przed egzaminem! Cały tydzień uczenia (czas trwania) prowadził do piątku (punkt zakończenia). To podkreśla wysiłek i przygotowanie - długi okres pracy przed ważnym momentem. Continuous podkreśla intensywność studiowania."
      },
      {
        id: "ppc_3",
        question: "How long _____ you _____ before you finally found a new apartment?",
        translation: "(Jak długo szukałeś zanim w końcu znalazłeś nowe mieszkanie?)",
        options: ["had / been searching", "have / been searching", "were / searching", "did / search"],
        correct: "had / been searching",
        explanation: "'How long had you been searching' pyta o czas trwania akcji przed znalezieniem! Szukanie trwało przez okres, potem znalazłeś (punkt zakończenia). Past perfect continuous w pytaniach sprawdza długość wysiłku przed sukcesem. To o mierzeniu czasu spędzonego na trudnym zadaniu."
      },
      {
        id: "ppc_4",
        question: "They were dirty because they _____ in the garden all afternoon yesterday.",
        translation: "(Byli brudni bo pracowali w ogrodzie całe popołudnie wczoraj)",
        options: ["had been working", "have been working", "were working", "worked"],
        correct: "had been working",
        explanation: "'Had been working' wyjaśnia ich brudny stan! Praca w ogrodzie (długa wcześniejsza akcja) spowodowała brud (późniejszy widoczny rezultat). To o łączeniu przyczyny z efektem - continuous pokazuje że pracowali przez extended period, nie tylko chwilę."
      },
      {
        id: "ppc_5",
        question: "By the time the doctor arrived, the patient _____ for over an hour in pain.",
        translation: "(Zanim lekarz przybył, pacjent czekał już ponad godzinę w bólu)",
        options: ["had been waiting", "has been waiting", "was waiting", "waited"],
        correct: "had been waiting",
        explanation: "'By the time' z past perfect continuous! Czekanie trwało przez godzinę PRZED przybyciem lekarza. 'Had been waiting' mierzy czas cierpienia przed pomocą przyszła. To podkreśla długość dyskomfortu - jak długo sytuacja trwała przed relief came."
      },
      {
        id: "ppc_6",
        question: "The roads were wet because it _____ all night long continuously.",
        translation: "(Drogi były mokre bo padało całą noc długo ciągle)",
        options: ["had been raining", "has been raining", "was raining", "rained"],
        correct: "had been raining",
        explanation: "'Had been raining' wyjaśnia mokre drogi! Deszcz (długa nocna akcja) spowodował mokrość (widoczny ranek rezultat). Continuous podkreśla że padało przez extended period, nie tylko prysznic. To o połączeniu przedłużonej przeszłej pogody z obecnym stanem surface."
      },
      {
        id: "ppc_7",
        question: "I realized I _____ in the wrong direction for over twenty minutes already!",
        translation: "(Zdałem sobie sprawę że jechałem w złym kierunku już przez ponad dwadzieścia minut!)",
        options: ["had been driving", "have been driving", "was driving", "drove"],
        correct: "had been driving",
        explanation: "'Had been driving' przed momentem realizacji! Jechałeś (ongoing) potem ZDAŁEŚ SOBIE SPRAWĘ (punkt w przeszłości). Continuous pokazuje że akcja była w toku kiedy odkryłeś błąd. To frustrujące - marnowałeś czas przez extended period przed zauważeniem."
      },
      {
        id: "ppc_8",
        question: "By 2020, she _____ at the same company for fifteen years without changing jobs.",
        translation: "(Do 2020 roku pracowała w tej samej firmie przez piętnaście lat bez zmiany pracy)",
        options: ["had been working", "has been working", "was working", "worked"],
        correct: "had been working",
        explanation: "'By 2020' wskazuje punkt w przeszłości jako deadline! 'Had been working' mierzy accumulated time DO tego punktu. Piętnaście lat lojalności zakumulowanych do 2020. To celebruje długą tenure - ciągła praca w jednym miejscu przez significant period."
      },
      {
        id: "ppc_9",
        question: "My eyes were hurting because I _____ at the computer screen for too many hours.",
        translation: "(Oczy mnie bolały bo patrzyłem na ekran komputera przez zbyt wiele godzin)",
        options: ["had been staring", "have been staring", "was staring", "stared"],
        correct: "had been staring",
        explanation: "'Had been staring' wyjaśnia ból oczu! Długie patrzenie (extended strain) spowodowało ból (physical consequence). Continuous podkreśla nieprzerwane focus na ekranie. To o wyjaśnianiu physical discomfort przez wcześniejszą prolonged activity - przyczyna była cumulative."
      },
      {
        id: "ppc_10",
        question: "When I arrived, the meeting _____ for thirty minutes and everyone looked bored.",
        translation: "(Kiedy przybyłem, spotkanie trwało już trzydzieści minut i wszyscy wyglądali na znudzonych)",
        options: ["had been going on", "has been going on", "was going on", "went on"],
        correct: "had been going on",
        explanation: "'Had been going on' pokazuje że spotkanie zaczęło się PRZED twoim przybyciem! Trwało już pół godziny kiedy wszedłeś. 'Going on' to phrasal verb znaczący 'odbywać się'. Continuous podkreśla że było in progress - już w toku przez znaczący czas."
      },
      {
        id: "ppc_11",
        question: "He was sweating heavily because he _____ in the hot sun all morning.",
        translation: "(Mocno się pocił bo pracował w gorącym słońcu całe rano)",
        options: ["had been working", "has been working", "was working", "worked"],
        correct: "had been working",
        explanation: "'Had been working' wyjaśnia pocenie! Praca w upale (extended exertion) spowodowała pot (fizyczną reakcję). Continuous pokazuje że wysiłek był sustained przez całe rano. To o widzeniu fizycznych dowodów (pot) prolonged activity w challenging conditions."
      },
      {
        id: "ppc_12",
        question: "They _____ together for five years when they decided to get married finally.",
        translation: "(Spotykali się przez pięć lat kiedy w końcu zdecydowali się pobrać)",
        options: ["had been dating", "have been dating", "were dating", "dated"],
        correct: "had been dating",
        explanation: "'Had been dating' mierzy długość relacji przed decyzją! Pięć lat randkowania (accumulated time) prowadził do małżeństwa (przeszła decyzja). To celebruje foundation - długi period getting to know each other przed commitment. Continuous podkreśla ongoing nature relacji."
      },
      {
        id: "ppc_13",
        question: "I _____ to call you all day but your phone was always busy or turned off.",
        translation: "(Próbowałem dzwonić do ciebie cały dzień ale twój telefon był zawsze zajęty lub wyłączony)",
        options: ["had been trying", "have been trying", "was trying", "tried"],
        correct: "had been trying",
        explanation: "'Had been trying' pokazuje powtarzające się frustrujące próby! Cały dzień próbowałeś (repeated attempts) przed ostateczną rozmową lub poddaniem się. Continuous podkreśla persistence i frustrację - nie tylko jedna próba ale wiele przez extended time. To wyjaśnia dlaczego jesteś sfrustrowany."
      },
      {
        id: "ppc_14",
        question: "The ground was wet even though it _____ for several hours already.",
        translation: "(Ziemia była mokra chociaż przestało padać już kilka godzin temu)",
        options: ["had stopped raining", "had been raining", "was raining", "rained"],
        correct: "had stopped raining",
        explanation: "Podchwytliwe! 'Had stopped raining' (past perfect, nie continuous) bo deszcz PRZESTAŁ! Przestał kilka godzin wcześniej ale ground wciąż mokra. Past perfect (nie continuous) dla akcji które się zakończyły przed innym przeszłym punktem. Mokrość jest pozostałością po wcześniejszym deszczu który już się skończył."
      },
      {
        id: "ppc_15",
        question: "She felt confident during the interview because she _____ for it very thoroughly.",
        translation: "(Czuła się pewnie podczas wywiadu bo przygotowywała się do niego bardzo dokładnie)",
        options: ["had been preparing", "has been preparing", "was preparing", "prepared"],
        correct: "had been preparing",
        explanation: "'Had been preparing' wyjaśnia jej pewność! Staranne przygotowanie (przedłużone przed wywiadem) spowodowało confidence (stan podczas). Continuous podkreśla thoroughness - nie quick prep ale deep, sustained preparation. To o tym jak effort before event tworzy comfort during event."
      }
    ]
  },

  linking_words_advanced: {
    name: "Spójniki zaawansowane",
    description: "However, therefore, moreover, nevertheless...",
    icon: ArrowRight,
    color: "from-green-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "link_adv_1",
        question: "The weather was terrible. _____, we decided to go hiking in the mountains as planned.",
        translation: "(Pogoda była okropna. Jednak zdecydowaliśmy się iść na wędrówkę w góry jak zaplanowano)",
        options: ["However", "Therefore", "Moreover", "Furthermore"],
        correct: "However",
        explanation: "'However' pokazuje kontrast z poprzednim zdaniem! Zła pogoda (problem) HOWEVER poszliście (przeciwna akcja). Po 'however' zawsze przecinek. To formalne 'but' dla pisma i formalnej mowy. Używane dla pokazywania determinacji mimo przeszkód - nie pozwoliliście trudności was zatrzymać."
      },
      {
        id: "link_adv_2",
        question: "She studied very hard for months. _____, she passed all her exams with excellent grades.",
        translation: "(Uczyła się bardzo ciężko przez miesiące. Dlatego zdała wszystkie egzaminy z doskonałymi ocenami)",
        options: ["Therefore", "However", "Moreover", "Nevertheless"],
        correct: "Therefore",
        explanation: "'Therefore' pokazuje logiczny rezultat! Ciężka nauka (przyczyna) THEREFORE zdała (efekt). To formalne 'so' dla akademickiego pisma. Przecinek po 'therefore'. Używane w logicznym rozumowaniu i argumentacji - łączy przyczynę z jej naturalną, oczekiwaną konsekwencją."
      },
      {
        id: "link_adv_3",
        question: "The restaurant has delicious food. _____, the service is excellent and very attentive.",
        translation: "(Restauracja ma pyszne jedzenie. Co więcej, obsługa jest doskonała i bardzo uważna)",
        options: ["Moreover", "However", "Therefore", "Otherwise"],
        correct: "Moreover",
        explanation: "'Moreover' dodaje dodatkową pozytywną informację! Dobre jedzenie (pozytyw) MOREOVER świetna obsługa (kolejny pozytyw). To jak 'additionally' lub 'furthermore'. Buduje argumenty przez dodawanie supporting points. Używane w perswazyjnym piśmie dla wzmacniania pozycji przez accumulation pozytywów."
      },
      {
        id: "link_adv_4",
        question: "The task was difficult and time-consuming. _____, we managed to complete it on time.",
        translation: "(Zadanie było trudne i czasochłonne. Niemniej jednak udało nam się ukończyć je na czas)",
        options: ["Nevertheless", "Therefore", "Moreover", "Furthermore"],
        correct: "Nevertheless",
        explanation: "'Nevertheless' znaczy 'pomimo tego'! Trudności (problem) NEVERTHELESS ukończyli (sukces pomimo). To silniejsze niż 'however' - podkreśla że sukces był surprising given obstacles. Używane dla dramatyzowania achievement against odds - pokazuje determinację i wytrwałość."
      },
      {
        id: "link_adv_5",
        question: "The project is behind schedule. _____, we need to work extra hours this week.",
        translation: "(Projekt jest opóźniony. W związku z tym musimy pracować dodatkowe godziny w tym tygodniu)",
        options: ["Consequently", "However", "Besides", "Meanwhile"],
        correct: "Consequently",
        explanation: "'Consequently' pokazuje konsekwencję wymagającą akcji! Opóźnienie (problem) CONSEQUENTLY overtime potrzebne (required response). Bardzo formalne - używane w biznesowych kontekstach. Podobne do 'therefore' ale bardziej o rezultatach wymagających specific action jako odpowiedź na sytuację."
      },
      {
        id: "link_adv_6",
        question: "I enjoy traveling. _____, I don't have much time for it because of work commitments.",
        translation: "(Lubię podróżować. Jednakże nie mam na to zbyt wiele czasu z powodu zobowiązań zawodowych)",
        options: ["However", "Therefore", "Moreover", "Furthermore"],
        correct: "However",
        explanation: "'However' dla rozczarowującego kontrastu! Kochasz podróże (pragnienie) HOWEVER brak czasu (rzeczywistość). To wyraża frustrację z ograniczeń. 'However' często wprowadza disappointing but reality po pozytywnym uczuciu - marzenia vs practical constraints życia."
      },
      {
        id: "link_adv_7",
        question: "The hotel was expensive. _____, the location was perfect right in the city center.",
        translation: "(Hotel był drogi. Z drugiej strony lokalizacja była perfekcyjna w samym centrum miasta)",
        options: ["On the other hand", "Therefore", "Consequently", "Thus"],
        correct: "On the other hand",
        explanation: "'On the other hand' wprowadza opposing viewpoint! Drogi (negatyw) ON THE OTHER HAND świetna lokalizacja (pozytyw). To o balansowaniu pros and cons - pokazujesz obie strony. Używane dla fair evaluation - acknowledging downsides while highlighting compensating benefits."
      },
      {
        id: "link_adv_8",
        question: "You need to submit the form today. _____, it won't be processed in time for deadline.",
        translation: "(Musisz wysłać formularz dzisiaj. W przeciwnym razie nie będzie przetworzony na czas na deadline)",
        options: ["Otherwise", "Moreover", "Furthermore", "Besides"],
        correct: "Otherwise",
        explanation: "'Otherwise' znaczy 'w przeciwnym razie' - ostrzeżenie! Wyślij dzisiaj (required action) OTHERWISE nie będzie przetworzony (negatywna konsekwencja). To tworzy urgency - działaj lub cierp konsekwencje. Używane dla motywowania przez showing negative outcome braku action."
      },
      {
        id: "link_adv_9",
        question: "The plan seems risky and potentially dangerous. _____, I think we should reconsider it.",
        translation: "(Plan wydaje się ryzykowny i potencjalnie niebezpieczny. W związku z tym myślę że powinniśmy go rozważyć ponownie)",
        options: ["Thus", "Moreover", "Besides", "Meanwhile"],
        correct: "Thus",
        explanation: "'Thus' to formalne 'therefore'! Ryzyko (concern) THUS reconsider (recommended action). 'Thus' jest używane głównie w pisemnym akademickim i formalnym biznesie. To o wyciąganiu logicznych wniosków - obserwacja prowadzi do rekomendowanej course of action."
      },
      {
        id: "link_adv_10",
        question: "I was working on my report. _____, my colleague was preparing the presentation slides.",
        translation: "(Pracowałem nad moim raportem. Tymczasem mój kolega przygotowywał slajdy prezentacji)",
        options: ["Meanwhile", "Therefore", "However", "Thus"],
        correct: "Meanwhile",
        explanation: "'Meanwhile' pokazuje równoczesne akcje! Ty raport (akcja 1) MEANWHILE kolega slajdy (akcja 2 w tym samym czasie). To o współistnieniu events - działy się równolegle. Używane dla pokazywania simultaneous activities lub developments podczas gdy jedna rzecz dzieje się, inna też."
      },
      {
        id: "link_adv_11",
        question: "The course is challenging. _____, it's also very rewarding and worth the effort completely.",
        translation: "(Kurs jest wymagający. Niemniej jednak jest też bardzo satysfakcjonujący i całkowicie wart wysiłku)",
        options: ["Nonetheless", "Therefore", "Consequently", "Thus"],
        correct: "Nonetheless",
        explanation: "'Nonetheless' = pomimo tego (formalne nevertheless)! Challenging (trudność) NONETHELESS rewarding (compensating benefit). To o znajdowaniu wartości w difficulty. Używane dla acknowledging challenges while asserting że benefits outweigh hardships - balanced positive conclusion pomimo admitted problems."
      },
      {
        id: "link_adv_12",
        question: "He's intelligent and hardworking. _____, he's very kind and helpful to everyone around.",
        translation: "(Jest inteligentny i pracowity. Ponadto jest bardzo miły i pomocny dla wszystkich wokół)",
        options: ["Furthermore", "However", "Otherwise", "Instead"],
        correct: "Furthermore",
        explanation: "'Furthermore' dodaje więcej pozytywnych cech! Inteligentny (pozytyw 1) FURTHERMORE miły (pozytyw 2). To buduje kompletny pozytywny portret przez akumulację virtues. Bardzo formalne - używane w pisemnych characterizations dla methodically listing multiple positive attributes."
      },
      {
        id: "link_adv_13",
        question: "I wanted to go to the concert. _____, the tickets were already sold out completely.",
        translation: "(Chciałem iść na koncert. Niestety bilety były już całkowicie wyprzedane)",
        options: ["Unfortunately", "Therefore", "Moreover", "Besides"],
        correct: "Unfortunately",
        explanation: "'Unfortunately' wprowadza disappointing information! Chciałeś iść (pragnienie) UNFORTUNATELY wyprzedane (frustrująca przeszkoda). To wyraża żal o missed opportunity. Używane dla communicating regret o sytuacjach poza twoją kontrolą - dodaje emotional tone żalu lub rozczarowania do faktów."
      },
      {
        id: "link_adv_14",
        question: "The evidence was clear and compelling. _____, the jury found him guilty of all charges.",
        translation: "(Dowody były jasne i przekonujące. W konsekwencji ława przysięgłych uznała go winnym wszystkich zarzutów)",
        options: ["Hence", "However", "Besides", "Meanwhile"],
        correct: "Hence",
        explanation: "'Hence' to bardzo formalne 'therefore'! Jasne dowody (foundation) HENCE guilty verdict (logical conclusion). Używane głównie w prawnych i akademickich kontekstach. To o inevitability - evidence była tak strong że verdict był logical consequence, prawie predetermined przez facts."
      },
      {
        id: "link_adv_15",
        question: "I don't like coffee. _____, I prefer tea in the morning when I wake up.",
        translation: "(Nie lubię kawy. Zamiast tego wolę herbatę rano kiedy się budzę)",
        options: ["Instead", "Therefore", "Moreover", "However"],
        correct: "Instead",
        explanation: "'Instead' pokazuje alternatywę lub zamianę! Nie kawa (rejection) INSTEAD herbata (chosen alternative). To o preferencji - co wybierasz zamiast. Używane dla pokazywania substitutions lub different choices - nie to ale tamto. Jasno komunikuje your actual preference po negowaniu."
      }
    ]
  },

  embedded_questions: {
    name: "Pytania zagnieżdżone",
    description: "I wonder where..., Do you know if...",
    icon: Filter,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "embed_1",
        question: "I wonder _____ he lives now after moving away from our neighborhood.",
        translation: "(Zastanawiam się gdzie teraz mieszka po przeprowadzce z naszej dzielnicy)",
        options: ["where", "where does", "does where", "where is"],
        correct: "where",
        explanation: "W pytaniach zagnieżdżonych NIE używaj inwersji! 'I wonder where he lives' - normalny szyk, nie 'where does he live'. Po 'wonder/ask/know' pytanie staje się stwierdzeniem w strukturze. Bez pomocnika 'does' - to już nie bezpośrednie pytanie tylko klauzula pytająca wewnątrz zdania."
      },
      {
        id: "embed_2",
        question: "Do you know _____ the meeting starts tomorrow morning at the office?",
        translation: "(Czy wiesz o której godzinie zaczyna się spotkanie jutro rano w biurze?)",
        options: ["what time", "what time does", "when does", "at what time does"],
        correct: "what time",
        explanation: "Zagnieżdżone pytania używają normalnego szyku! 'What time the meeting starts' - nie 'what time does the meeting start'. Po 'do you know' pytanie traci inwersję. To staje się noun clause działające jak obiekt 'know'. Bez pomocnika w embedded part - tylko normalna struktura zdania."
      },
      {
        id: "embed_3",
        question: "Can you tell me _____ the nearest post office from here is located?",
        translation: "(Czy możesz mi powiedzieć gdzie znajduje się najbliższa poczta stąd?)",
        options: ["where", "where is", "where does", "is where"],
        correct: "where",
        explanation: "'Can you tell me where it is' - normalny szyk w embedded! Nie 'where is it' (to byłoby bezpośrednie pytanie). Po 'tell me' pytanie staje się klauzulą rzeczownikową. 'Where the post office is' używa normalnej struktury podmiot + czasownik mimo że zaczyna się od słowa pytającego."
      },
      {
        id: "embed_4",
        question: "I'm not sure _____ she will come to the party tonight or stay home instead.",
        translation: "(Nie jestem pewien czy przyjdzie na imprezę dziś wieczorem czy zostanie w domu zamiast)",
        options: ["if", "that", "what", "when"],
        correct: "if",
        explanation: "'If' lub 'whether' dla yes/no embedded questions! 'Not sure if she will come' = niepewność o jej decyzji. 'If' wprowadza alternatywę w niepewności. Po 'not sure/don't know/wonder' używaj 'if/whether' dla pytań tak/nie transformed into clauses. To wyraża doubt o przyszłej akcji."
      },
      {
        id: "embed_5",
        question: "Could you explain _____ this machine works? I've never used one before.",
        translation: "(Czy mógłbyś wyjaśnić jak ta maszyna działa? Nigdy wcześniej nie używałem takiej)",
        options: ["how", "how does", "does how", "how is"],
        correct: "how",
        explanation: "'Explain how it works' - normalny szyk! Nie 'how does it work' w embedded. Po 'explain' pytanie staje się opisem procesu. 'How the machine works' jest noun clause acting as object of 'explain'. Szyk jest jak w zdaniu, nie pytaniu bezpośrednim."
      },
      {
        id: "link_adv_6",
        question: "I have no idea _____ he decided to quit his job so suddenly without warning.",
        translation: "(Nie mam pojęcia dlaczego zdecydował się rzucić pracę tak nagle bez ostrzeżenia)",
        options: ["why", "why did", "did why", "why does"],
        correct: "why",
        explanation: "'Why' w embedded zachowuje normalny szyk! 'No idea why he decided' - nie 'why did he decide'. Po 'no idea/don't know' pytanie o powód staje się klauzulą. Bez inwersji w embedded questions - to fundamentalna zasada dla wszystkich indirect questions."
      },
      {
        id: "embed_7",
        question: "Do you remember _____ we parked the car in this huge shopping mall lot?",
        translation: "(Czy pamiętasz gdzie zaparkowaliśmy samochód na tym ogromnym parkingu centrum handlowego?)",
        options: ["where", "where did", "did where", "where have"],
        correct: "where",
        explanation: "'Remember where we parked' używa normalnego szyku! Nie 'where did we park' w embedded. Po 'remember' pytanie staje się memory clause. To praktyczne - szukasz przypomnienia lokalizacji. Embedded form jest łagodniejsza niż bezpośrednie pytanie - bardziej collaborative w szukaniu wspólnej pamięci."
      },
      {
        id: "embed_8",
        question: "She asked me _____ I wanted to go to the cinema with her on Saturday.",
        translation: "(Zapytała mnie czy chcę iść z nią do kina w sobotę)",
        options: ["if", "that", "what", "when"],
        correct: "if",
        explanation: "'Asked if' dla reported yes/no questions! 'Asked if I wanted' transformuje bezpośrednie pytanie w klauzulę. 'If' lub 'whether' działają dla indirect yes/no questions. To o przekazywaniu czyjejś invitation jako pytanie - reported speech łączy się z embedded questions."
      },
      {
        id: "embed_9",
        question: "I can't decide _____ I should accept the job offer or stay at my current position.",
        translation: "(Nie mogę zdecydować czy powinienem przyjąć ofertę pracy czy zostać na obecnym stanowisku)",
        options: ["whether", "if", "that", "what"],
        correct: "whether",
        explanation: "'Whether' dla formalnych dylematów z 'or'! 'Whether to accept or stay' - formalne wybory używają 'whether' szczególnie z 'or'. 'If' też może działać ale 'whether' jest preferowane dla formal decision-making. To wyraża serious deliberation między dwoma wyraźnymi opcjami."
      },
      {
        id: "embed_10",
        question: "Do you have any idea _____ cost to repair my broken laptop computer?",
        translation: "(Czy masz jakieś pojęcie ile kosztuje naprawa mojego zepsutego laptopa?)",
        options: ["how much it will", "how much will it", "it will how much", "will it how much"],
        correct: "how much it will",
        explanation: "Złożone embedded: 'how much' + normalny szyk! 'How much it will cost' - nie 'how much will it cost'. Po 'any idea' używasz statement order nawet z 'how much'. To częsta pomyłka - ludzie chcą odwrócić ale w embedded musisz zachować normalną strukturę zdania."
      },
      {
        id: "embed_11",
        question: "I'm wondering _____ we should invite to the small dinner party at our house.",
        translation: "(Zastanawiam się kogo powinniśmy zaprosić na małą kolację w naszym domu)",
        options: ["who", "who should we", "should we who", "whom"],
        correct: "who",
        explanation: "'Wondering who we should invite' - normalny szyk! Nie 'who should we' (to byłaby inwersja). Po 'wondering' pytanie staje się thought process. 'Who' jako obiekt 'invite' - casualowo 'who' działa, formalnie można 'whom' ale 'who' jest natural w nowoczesnym angielskim."
      },
      {
        id: "embed_12",
        question: "Nobody knows _____ the treasure is hidden in this old mysterious mansion.",
        translation: "(Nikt nie wie gdzie skarb jest ukryty w tym starym tajemniczym dworze)",
        options: ["where", "where is", "is where", "where does"],
        correct: "where",
        explanation: "'Knows where it is' - statement order w embedded! 'Where the treasure is hidden' używa passive voice w normalnym szyku. To o mystery - unknown location tworzy suspense. Embedded question pozwala ci express lack of knowledge w smooth statement form."
      },
      {
        id: "embed_13",
        question: "I'd like to know _____ you're planning to visit us next month or later.",
        translation: "(Chciałbym wiedzieć czy planujesz odwiedzić nas w przyszłym miesiącu czy później)",
        options: ["whether", "if", "that", "what"],
        correct: "whether",
        explanation: "'Whether' z 'or' dla alternatyw! 'Whether... or...' jasno pokazuje dwie opcje w embedded question. 'If' mogłoby działać ale 'whether' jest bardziej formalne i explicit o alternatywach. To o planowaniu - potrzebujesz znać timing dla preparations."
      },
      {
        id: "embed_14",
        question: "She couldn't remember _____ she had put her keys after coming home.",
        translation: "(Nie mogła sobie przypomnieć gdzie położyła swoje klucze po przyjściu do domu)",
        options: ["where", "where had she", "had she where", "where did she"],
        correct: "where",
        explanation: "'Remember where she had put' - normalny szyk z past perfect! Nie 'where had she put' w embedded. Past perfect pozostaje ale bez inwersji. To o frustrating memory lapse - próba przypomnienia sobie location akcji która się stała (put keys) przed próbą przypomnienia (couldn't remember)."
      },
      {
        id: "embed_15",
        question: "Can you guess _____ I paid for this beautiful new dress from the boutique?",
        translation: "(Czy możesz zgadnąć ile zapłaciłem za tę piękną nową sukienkę z butiku?)",
        options: ["how much", "how much did I", "did I how much", "how much I did"],
        correct: "how much",
        explanation: "'Guess how much I paid' - normalny szyk w embedded! 'How much' + podmiot + czasownik, bez inwersji. Po 'guess' pytanie staje się challenge lub game. To playful - testujesz czy mogą estimate price, być może bo wydaje się expensive lub była okazja."
      }
    ]
  }
};

export default part14Categories;