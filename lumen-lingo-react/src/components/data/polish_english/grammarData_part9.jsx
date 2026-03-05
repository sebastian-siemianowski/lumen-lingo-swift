/**
 * POLISH → ENGLISH GRAMMAR - PART 9
 * 4 categories, 15 questions each - Mastering complexity
 */

import { Mountain, Waves, Sun, Cloud } from "lucide-react";

export const part9Categories = {
  possessives_advanced: {
    name: "Dzierżawcze - zaawansowane",
    description: "My, mine, whose - posiadanie w różnych formach",
    icon: Mountain,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    questions: [
      {
        id: "poss_1",
        question: "This is _____ book that I bought last week at the bookstore downtown.",
        translation: "(To jest moja książka, którą kupiłem w zeszłym tygodniu w księgarni w centrum)",
        options: ["my", "mine", "me", "I"],
        correct: "my",
        explanation: "'My' idzie PRZED rzeczownikiem! 'My book' - zaimek dzierżawczy modyfikuje rzeczownik. 'Mine' stoi samo bez rzeczownika (This book is mine). Pamiętaj: my + noun, mine = standalone. To fundamentalna różnica - 'my' wymaga rzeczownika po nim, 'mine' zastępuje 'my + noun' całkowicie."
      },
      {
        id: "poss_2",
        question: "That laptop on the table is _____, I left it there this morning before leaving for work.",
        translation: "(Ten laptop na stole jest mój, zostawiłem go tam dziś rano przed wyjściem do pracy)",
        options: ["mine", "my", "me", "I"],
        correct: "mine",
        explanation: "'Mine' stoi samodzielnie bez rzeczownika! 'Is mine' = należy do mnie. Nie można powiedzieć 'is my' bez rzeczownika. 'Mine' to zaimek dzierżawczy niezależny - zastępuje całą frazę 'my laptop'. Użyteczne dla krótkich odpowiedzi na pytania o własność."
      },
      {
        id: "poss_3",
        question: "_____ car is parked outside in front of the building? I don't recognize that vehicle.",
        translation: "(Czyj samochód jest zaparkowany na zewnątrz przed budynkiem? Nie rozpoznaję tego pojazdu)",
        options: ["Whose", "Who's", "Who", "Whom"],
        correct: "Whose",
        explanation: "'Whose' pyta o własność! 'Whose car' = czyj samochód. Nie myl z 'who's' (who is). 'Whose' to dzierżawcze słowo pytające - zawsze pyta kto jest właścicielem. Odpowiedź będzie 'It's John's car' lub 'It's mine'. To bardzo praktyczne pytanie gdy znajdujesz rzeczy i chcesz znaleźć właściciela."
      },
      {
        id: "poss_4",
        question: "The dog wagged _____ tail happily when it saw its owner coming home from work.",
        translation: "(Pies machał swoim ogonem szczęśliwie, kiedy zobaczył swojego właściciela wracającego z pracy do domu)",
        options: ["its", "it's", "his", "their"],
        correct: "its",
        explanation: "'Its' (bez apostrofu) to dzierżawcze dla zwierząt i rzeczy! 'It's' (z apostrofem) = 'it is'. Bardzo częsta pomyłka! 'Its tail' = ogon psa (należący do niego). Zwierzęta używają 'its' chyba że znasz płeć i traktujesz jak członka rodziny (wtedy his/her). Bez apostrofu = posiadanie!"
      },
      {
        id: "poss_5",
        question: "Is this pen _____ or _____? I found it on the desk and don't know who owns it.",
        translation: "(Czy to pióro jest twoje czy jego? Znalazłem je na biurku i nie wiem kto je posiada)",
        options: ["yours / his", "your / him", "you / his", "yours / he"],
        correct: "yours / his",
        explanation: "Zaimki dzierżawcze samodzielne po 'is'! 'Yours' (twoje) i 'his' (jego) stoją bez rzeczowników. Nie 'your' bo to wymaga rzeczownika po. Lista: mine, yours, his, hers, its, ours, theirs - wszystkie samodzielne. Używane po czasowniku 'be' lub samodzielnie w odpowiedziach."
      },
      {
        id: "poss_6",
        question: "My parents' house is much _____ than ours - they have a huge garden and pool.",
        translation: "(Dom moich rodziców jest dużo większy od naszego - mają ogromny ogród i basen)",
        options: ["bigger", "big", "biggest", "more big"],
        correct: "bigger",
        explanation: "'Parents'' (z apostrofem po 's') pokazuje mnogą dzierżawczość! Rodzice (liczba mnoga) mają dom. Apostroф idzie PO 's' dla rzeczowników mnogich regularnych. 'Ours' to samodzielny zaimek = nasz dom. Porównanie używa 'bigger than' dla różnicy w wielkości między dwoma domami."
      },
      {
        id: "poss_7",
        question: "_____ going to the party tonight - you or your sister? I need to know for transportation.",
        translation: "(Kto idzie na imprezę dziś wieczorem - ty czy twoja siostra? Muszę wiedzieć dla transportu)",
        options: ["Who's", "Whose", "Who", "Whom"],
        correct: "Who's",
        explanation: "'Who's' = 'who is' (z apostrofem dla skrótu)! To pytanie 'kto idzie' używa present continuous dla przyszłości. Nie myl z 'whose' (czyj - dzierżawczy). Apostroф ZAWSZE wskazuje skrócenie, nie posiadanie. 'Who's going' = who is going (pytanie o osobę)."
      },
      {
        id: "poss_8",
        question: "Each student must bring _____ own laptop to class for the computer programming course.",
        translation: "(Każdy student musi przynieść swój własny laptop na zajęcia na kurs programowania komputerowego)",
        options: ["their", "his", "her", "its"],
        correct: "their",
        explanation: "'Their' dla 'each/every/everyone' w nowoczesnym angielskim! Chociaż 'each student' jest pojedyncze gramatycznie, używamy 'their' żeby być gender-neutral. Stare zasady mówiły 'his or her' ale teraz 'their' jest akceptowane dla pojedynczych osób nieokreślonej płci. To bardziej inkluzywne i naturalne."
      },
      {
        id: "poss_9",
        question: "The cat licked _____ paws clean after eating its dinner from the bowl on the floor.",
        translation: "(Kot lizał swoje łapy do czysta po zjedzeniu swojej kolacji z miski na podłodze)",
        options: ["its", "it's", "his", "their"],
        correct: "its",
        explanation: "'Its' dla zwierząt (posiadanie bez apostrofu)! 'Its paws' = łapy kota (należące do niego). Zwierzęta są 'it' chyba że są domowymi pupilami ze znaną płcią (wtedy ludzie często używają his/her). Zapamiętaj: its = posiadanie zwierzęcia, it's = it is (skrót). Apostroф zmienia wszystko!"
      },
      {
        id: "poss_10",
        question: "_____ responsibility is it to lock the office doors at night after everyone leaves?",
        translation: "(Czyją odpowiedzialnością jest zamykanie drzwi biura w nocy po tym jak wszyscy wyjdą?)",
        options: ["Whose", "Who's", "Who", "Whom"],
        correct: "Whose",
        explanation: "'Whose responsibility' pyta kto ma obowiązek! 'Whose' (bez apostrofu) to pytanie o własność lub odpowiedzialność. Odpowiedź będzie 'It's John's responsibility' lub 'It's mine'. Często używane w pracy dla wyjaśniania ról i obowiązków - kto za co odpowiada."
      },
      {
        id: "poss_11",
        question: "The children left _____ toys all over the living room floor in a complete mess.",
        translation: "(Dzieci zostawiły swoje zabawki po całej podłodze salonu w kompletnym bałaganie)",
        options: ["their", "there", "they're", "theirs"],
        correct: "their",
        explanation: "'Their' + rzeczownik dla dzierżawczości mnogiej! 'Their toys' = zabawki dzieci (należące do nich). Nie myl z 'there' (tam - miejsce) czy 'they're' (they are - skrót). Ta trio słów brzmi identycznie ale znaczy całkiem różne rzeczy! Their = posiadanie, there = lokalizacja, they're = they are."
      },
      {
        id: "poss_12",
        question: "Is this umbrella _____ or did someone else leave it here in the hallway yesterday?",
        translation: "(Czy ten parasol jest twój czy ktoś inny zostawił go tutaj w korytarzu wczoraj?)",
        options: ["yours", "your", "you", "you're"],
        correct: "yours",
        explanation: "'Yours' samodzielnie po czasowniku 'be'! Nie potrzeba rzeczownika. 'Is yours' = czy należy do ciebie. Nie 'is your' bo to wymaga rzeczownika (is your umbrella). Pytania o własność często używają samodzielnych zaimków dzierżawczych - krótsze i bardziej naturalne niż powtarzanie rzeczownika."
      },
      {
        id: "poss_13",
        question: "James's car is newer than _____ - he bought it just last month brand new.",
        translation: "(Samochód Jamesa jest nowszy od mojego - kupił go dopiero w zeszłym miesiącu zupełnie nowy)",
        options: ["mine", "my", "me", "I"],
        correct: "mine",
        explanation: "'Mine' zastępuje 'my car' w porównaniu! Zamiast 'newer than my car' możesz powiedzieć 'newer than mine' - krócej i bardziej elegancko. To unika powtórzenia - wiemy już o jakim rzeczowniku mówimy (car), więc 'mine' wystarczy. Bardzo naturalne w porównaniach."
      },
      {
        id: "poss_14",
        question: "The company announced _____ new product line at the conference yesterday morning.",
        translation: "(Firma ogłosiła swoją nową linię produktów na konferencji wczoraj rano)",
        options: ["its", "it's", "their", "his"],
        correct: "its",
        explanation: "'Its' dla firm i organizacji! Firmy są 'it' w angielskim (w przeciwieństwie do niektórych języków gdzie są 'ona'). 'Its new product' = produkt firmy. Amerykański angielski traktuje firmy jako 'it', brytyjski czasem używa 'they'. Ale 'its' jest zawsze bezpieczne i poprawne."
      },
      {
        id: "poss_15",
        question: "Everyone should do _____ best to help protect the environment for future generations.",
        translation: "(Każdy powinien dać z siebie wszystko żeby pomóc chronić środowisko dla przyszłych pokoleń)",
        options: ["their", "his", "her", "its"],
        correct: "their",
        explanation: "'Their' z 'everyone/everybody' w nowoczesnym użyciu! Chociaż 'everyone' jest technicznie pojedyncze, 'their' jest teraz akceptowane dla bycia inkluzywnym. Stare zasady mówiły 'his or her' ale to niezręczne. 'Their' jest gender-neutral i naturalne. To standardowy wybór teraz w większości angielskiego."
      }
    ]
  },

  some_any_no: {
    name: "Some, Any, No - użycia",
    description: "Kiedy używać some, any, no, none",
    icon: Waves,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    questions: [
      {
        id: "some_any_1",
        question: "Would you like _____ coffee or tea with your breakfast this morning?",
        translation: "(Czy chciałbyś trochę kawy lub herbaty z twoim śniadaniem dziś rano?)",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "'Some' w ofertach nawet gdy to pytanie! Normalnie pytania używają 'any', ale oferty używają 'some' bo oczekujesz 'yes'. 'Would you like some' brzmi przyjaźnie i gościnnie. 'Any' byłoby bardziej neutralne. W prośbach i ofertach 'some' tworzy pozytywne, zapraszające uczucie."
      },
      {
        id: "some_any_2",
        question: "I don't have _____ money with me right now, I left my wallet at home this morning.",
        translation: "(Nie mam żadnych pieniędzy przy sobie teraz, zostawiłem portfel w domu dziś rano)",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "'Any' w negatywach! 'Don't have any' = nie mam żadnych. W negatywach używaj 'any', nie 'some'. Struktura: don't/doesn't/didn't + have + any. To standardowy wzorzec dla wszystkich negatywnych stwierdzeń o ilości lub istnieniu. 'Any' wzmacnia negację."
      },
      {
        id: "some_any_3",
        question: "There are _____ students in the library studying for tomorrow's important final exam.",
        translation: "(Jest trochę studentów w bibliotece uczących się do jutrzejszego ważnego końcowego egzaminu)",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "'Some' w pozytywnych stwierdzeniach dla nieokreślonej ilości! 'There are some students' = jest pewna liczba (nie zero, nie wszyscy, tylko część). 'Some' wskazuje na istnienie w nieznanej ale pozytywnej ilości. To bardzo częste dla opisywania obecności rzeczy bez bycia konkretnym o liczbie."
      },
      {
        id: "some_any_4",
        question: "Do you have _____ questions about the homework assignment for next week's class?",
        translation: "(Czy masz jakieś pytania o zadanie domowe na zajęcia w przyszłym tygodniu?)",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "'Any' w pytaniach! 'Do you have any questions' to neutralne pytanie - nie wiesz odpowiedzi. 'Any' w pytaniach jest standard. Ale gdybyś oczekiwał 'yes' (oferując pomoc), mógłbyś użyć 'some'. Tutaj 'any' jest neutralniejsze - po prostu sprawdzasz czy pytania istnieją."
      },
      {
        id: "some_any_5",
        question: "There is _____ milk left in the fridge at all, we need to buy some today.",
        translation: "(Nie ma żadnego mleka w lodówce w ogóle, musimy kupić trochę dzisiaj)",
        options: ["no", "not", "any", "some"],
        correct: "no",
        explanation: "'No' + rzeczownik tworzy negację bez 'not'! 'There is no milk' = nie ma mleka. To silniejsze i bardziej definitywne niż 'there isn't any milk'. 'No' bezpośrednio neguje rzeczownik - to kompletna absencja. Używane dla podkreślenia całkowitego braku czegoś."
      },
      {
        id: "some_any_6",
        question: "I need to buy _____ groceries after work today - we're completely out of food at home.",
        translation: "(Muszę kupić trochę artykułów spożywczych po pracy dzisiaj - całkowicie skończyło nam się jedzenie w domu)",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "'Some' w pozytywnych planach o przyszłości! 'Need to buy some' wskazuje intencję zakupu nieokreślonej ilości. 'Some' sugeruje że kupisz pewną ilość ale nie określasz dokładnie ile. To bardzo praktyczne w codziennym planowaniu - wiesz że potrzebujesz rzeczy ale nie precyzujesz dokładnej ilości."
      },
      {
        id: "some_any_7",
        question: "There weren't _____ people at the meeting yesterday, only five or six showed up unfortunately.",
        translation: "(Nie było wielu ludzi na spotkaniu wczoraj, tylko pięć lub sześć osób przyszło niestety)",
        options: ["many", "some", "any", "much"],
        correct: "many",
        explanation: "'Not many' dla małej liczby policzalnych! 'Weren't many people' = była mała liczba (rozczarowująca). Różne od 'weren't any' (zero). 'Not many' wskazuje że byli TROCHĘ ale mniej niż oczekiwano. 'Many' z policzalnymi, 'much' z niepoliczalnymi w negatywach."
      },
      {
        id: "some_any_8",
        question: "Can I have _____ more water, please? I'm still very thirsty after the long run.",
        translation: "(Czy mogę prosić trochę więcej wody? Jestem wciąż bardzo spragniony po długim biegu)",
        options: ["some", "any", "no", "much"],
        correct: "some",
        explanation: "'Some' w prośbach brzmi bardziej grzecznie i optymistycznie! 'Can I have some' oczekuje pozytywnej odpowiedzi. 'Any' byłoby bardziej neutralne lub wątpliwe. W prośbach używaj 'some' żeby brzmieć przyjaźnie i z nadzieją na 'yes'. To drobna różnica ale tworzy cieplejszy, bardziej pozytywny ton."
      },
      {
        id: "some_any_9",
        question: "_____ of my friends speak Spanish fluently after living in Mexico for several years.",
        translation: "(Niektórzy z moich przyjaciół mówią płynnie po hiszpańsku po mieszkaniu w Meksyku przez kilka lat)",
        options: ["Some", "Any", "No", "None"],
        correct: "Some",
        explanation: "'Some of' dla części większej grupy! 'Some of my friends' = część przyjaciół (nie wszyscy, nie żaden, tylko niektórzy). 'Some of' + określony rzeczownik pokazuje częściowe uczestnictwo. To bardzo użyteczne dla mówienia o podgrupach - niektórzy ludzie w większej kategorii."
      },
      {
        id: "some_any_10",
        question: "I hardly have _____ free time these days because I'm working two jobs simultaneously.",
        translation: "(Ledwo mam jakikolwiek wolny czas w tych dniach, bo pracuję na dwóch pracach jednocześnie)",
        options: ["any", "some", "no", "many"],
        correct: "any",
        explanation: "'Hardly any' = prawie żaden! 'Hardly' to negatywne słowo więc używa 'any' jak inne negatywy. 'Hardly any time' = ekstremalnie mało czasu, prawie zero. To silniejsze niż 'not much' - podkreśla jak bardzo niewiele masz. 'Hardly' + any dla wyrażania drastycznej rzadkości."
      },
      {
        id: "some_any_11",
        question: "There's _____ point in arguing about this anymore - we clearly disagree and won't change minds.",
        translation: "(Nie ma sensu kłócić się o to już - wyraźnie się nie zgadzamy i nie zmienimy zdań)",
        options: ["no", "not", "any", "some"],
        correct: "no",
        explanation: "'No point' to idiomatyczne wyrażenie! 'There's no point in -ing' = nie ma sensu robić czegoś. To silniejsze niż 'there isn't any point'. 'No' tworzy kategoryczną negację - to całkowicie bezcelowe. Używane dla odradziania bezproduktywnych akcji lub marnowania wysiłku."
      },
      {
        id: "some_any_12",
        question: "_____ of the students passed the extremely difficult final examination successfully.",
        translation: "(Żaden ze studentów nie zdał ekstremalnie trudnego końcowego egzaminu pomyślnie)",
        options: ["None", "No", "Not any", "Any"],
        correct: "None",
        explanation: "'None of' = żaden z grupy! 'None of the students' = zero studentów zdało (wszyscy oblali). 'None' jest samodzielne lub używane z 'of', podczas gdy 'no' idzie bezpośrednio przed rzeczownikiem. 'None' podkreśla całkowity brak sukcesu w całej grupie - to dramatyczne stwierdzenie uniwersalnej porażki."
      },
      {
        id: "some_any_13",
        question: "If you have _____ problems with the homework, please ask me for help immediately.",
        translation: "(Jeśli masz jakiekolwiek problemy z pracą domową, proszę zapytaj mnie o pomoc natychmiast)",
        options: ["any", "some", "no", "none"],
        correct: "any",
        explanation: "'Any' w warunkach (if clauses) nawet dla przyszłości! 'If you have any problems' obejmuje wszystkie możliwe problemy - jakiekolwiek. 'Any' w warunkach otwiera drzwi dla wszystkich możliwości. To inkluzywne - każdy rodzaj problemu jest zaproszeniem do pytania o pomoc."
      },
      {
        id: "some_any_14",
        question: "There are _____ cookies left in the jar if you're hungry and want a snack now.",
        translation: "(Jest trochę ciastek w słoiku, jeśli jesteś głodny i chcesz przekąskę teraz)",
        options: ["some", "any", "no", "none"],
        correct: "some",
        explanation: "'Some' w pozytywnych stwierdzeniach o dostępności! 'There are some cookies' = są dostępne (dobra wiadomość). To oferuje coś w nieokreślonej ale użytecznej ilości. 'Some' sugeruje wystarczająco żeby zaspokoić potrzebę. Pozytywny ton - są tam dla ciebie jeśli chcesz."
      },
      {
        id: "some_any_15",
        question: "I didn't see _____ interesting at the museum today, it was quite disappointing overall.",
        translation: "(Nie widziałem niczego ciekawego w muzeum dzisiaj, było dość rozczarowujące ogólnie)",
        options: ["anything", "something", "nothing", "everything"],
        correct: "anything",
        explanation: "'Anything' z negatywem! 'Didn't see anything' = nie widziałem niczego. Wzorzec: didn't/don't + czasownik + anything. Mógłbyś też powiedzieć 'saw nothing' (bez didn't) - ta sama znaczenie. Ale 'didn't... anything' jest częstsze w mowie. To o całkowitym braku interesujących rzeczy."
      }
    ]
  },

  quantifiers_usage: {
    name: "Kwantyfikatory",
    description: "All, every, each, both, either, neither",
    icon: Sun,
    color: "from-amber-500 to-yellow-600",
    level: "intermediate",
    questions: [
      {
        id: "quant_1",
        question: "_____ student in the class must submit their assignment by Friday without exception.",
        translation: "(Każdy student w klasie musi złożyć swoje zadanie do piątku bez wyjątku)",
        options: ["Every", "All", "Each", "Whole"],
        correct: "Every",
        explanation: "'Every' + rzeczownik pojedynczy dla wszystkich indywidualnie! 'Every student' traktuje każdego osobno ale odnosi się do wszystkich. Czasownik jest pojedynczy: 'every student must' (nie 'must'). 'Every' podkreśla kompletność - żadnego wyjątku, każda pojedyncza osoba w grupie."
      },
      {
        id: "quant_2",
        question: "_____ the students passed the exam successfully - everyone got at least seventy percent!",
        translation: "(Wszyscy studenci zdali egzamin pomyślnie - każdy dostał przynajmniej siedemdziesiąt procent!)",
        options: ["All", "Every", "Each", "Whole"],
        correct: "All",
        explanation: "'All' + rzeczownik mnogi dla całej grupy razem! 'All the students' widzi ich jako zbiorową całość, nie indywidualnie. 'All' + określnik (the/my/these) + rzeczownik mnogi. To o całej grupie osiągającej coś wspólnie. Różne od 'every' które fokusuje na jednostkach - 'all' widzi kolektyw."
      },
      {
        id: "quant_3",
        question: "_____ of my two sisters lives abroad - one in Germany and the other in France.",
        translation: "(Obie moje siostry mieszkają za granicą - jedna w Niemczech a druga we Francji)",
        options: ["Both", "All", "Every", "Each"],
        correct: "Both",
        explanation: "'Both' specjalnie dla DWÓCH rzeczy! 'Both sisters' = obie dwie siostry. Gdy masz dokładnie dwie rzeczy, używaj 'both' nie 'all'. 'Both' podkreśla kompletność pary. Może być 'both of my sisters' lub 'both my sisters' (bez 'of'). To o dwóch jako kompletnym zestawie."
      },
      {
        id: "quant_4",
        question: "_____ person in the room introduced themselves and shared their name with the group.",
        translation: "(Każda osoba w pokoju przedstawiła się i podzieliła swoim imieniem z grupą)",
        options: ["Each", "Every", "All", "Both"],
        correct: "Each",
        explanation: "'Each' dla indywidualnej akcji przez wszystkich! Podobne do 'every' ale bardziej podkreśla indywidualność. 'Each person' fokusuje na tym że KAŻDY osobno wykonał akcję. 'Each' używane gdy chcesz podkreślić że wszyscy zrobili to samodzielnie, jeden po drugim, nie jako grupa."
      },
      {
        id: "quant_5",
        question: "_____ my parents are teachers working at different schools in our hometown.",
        translation: "(Oboje moi rodzice są nauczycielami pracującymi w różnych szkołach w naszym rodzinnym mieście)",
        options: ["Both", "All", "Every", "Each"],
        correct: "Both",
        explanation: "'Both' dla dwóch osób! Rodzice = dokładnie dwoje ludzi, więc 'both' nie 'all'. 'Both of my parents' lub 'both my parents' (bez 'of' też działa). Czasownik jest mnogi: 'both are' nie 'both is'. 'Both' traktuje parę jako liczbę mnogą mimo fokusowania na kompletności dwójki."
      },
      {
        id: "quant_6",
        question: "You can take _____ the bus or the train to get to the airport from here.",
        translation: "(Możesz wziąć albo autobus albo pociąg żeby dostać się na lotnisko stąd)",
        options: ["either", "neither", "both", "all"],
        correct: "either",
        explanation: "'Either' = jeden lub drugi (pozytywny wybór)! 'Either the bus or the train' oferuje dwie dobre opcje. 'Either... or...' to konstrukcja dla wyboru między dwoma możliwościami. Obie są akceptowalne - wybierz którąkolwiek wolisz. To o elastyczności - obie drogi działają."
      },
      {
        id: "quant_7",
        question: "_____ of the two restaurants is open today - they're both closed for renovation work.",
        translation: "(Żadna z dwóch restauracji nie jest otwarta dzisiaj - obie są zamknięte na renowację)",
        options: ["Neither", "Either", "Both", "None"],
        correct: "Neither",
        explanation: "'Neither' = żadna z dwóch (negatywna)! 'Neither restaurant' negatuje obie opcje. 'Neither... nor...' dla podwójnej negacji. Przeciwieństwo 'either' - 'either' oferuje wybór (pozytyw), 'neither' odmawia obu (negatyw). Czasownik pojedynczy: 'neither is' nie 'neither are'."
      },
      {
        id: "quant_8",
        question: "I've read _____ the books in this series and loved every single one of them!",
        translation: "(Przeczytałem wszystkie książki w tej serii i pokochałem każdą pojedynczą z nich!)",
        options: ["all", "every", "each", "whole"],
        correct: "all",
        explanation: "'All' + określnik + rzeczownik mnogi dla całej kolekcji! 'All the books' widzi serię jako komplet. Możesz też 'all of the books' (z 'of'). 'All' dla grup, 'every' dla indywidualnego traktowania członków. Tutaj fokus na kompletnej kolekcji jako całości którą przeczytałeś."
      },
      {
        id: "quant_9",
        question: "_____ student will receive a certificate at the end of the intensive language course.",
        translation: "(Każdy student otrzyma certyfikat na końcu intensywnego kursu językowego)",
        options: ["Each", "All", "Every", "Both"],
        correct: "Each",
        explanation: "'Each' podkreśla że WSZYSCY indywidualnie dostaną! Bardzo podobne do 'every' ale 'each' jest używane gdy rozdajesz coś lub traktujesz osobno. 'Each student will receive' fokusuje na indywidualnym wręczeniu każdej osobie. Można też 'every' ale 'each' jest preferowane dla dystrybucji i osobnych akcji."
      },
      {
        id: "quant_10",
        question: "I don't like _____ of these two options - can we find a different solution please?",
        translation: "(Nie lubię żadnej z tych dwóch opcji - czy możemy znaleźć inne rozwiązanie proszę?)",
        options: ["either", "neither", "both", "none"],
        correct: "either",
        explanation: "'Don't like either' = nie lubisz żadnej! Z negacją używaj 'either' nie 'neither'. 'Don't... either' = 'neither' (ta sama znaczenie). Możesz też 'I like neither' bez 'don't'. Oba równoważne: don't... either = neither. Wybierz jedno - podwójna negacja nie jest potrzebna."
      },
      {
        id: "quant_11",
        question: "_____ my brothers live in Warsaw now - they moved there for university studies together.",
        translation: "(Obaj moi bracia mieszkają w Warszawie teraz - przeprowadzili się tam na studia uniwersyteckie razem)",
        options: ["Both", "All", "Every", "Each"],
        correct: "Both",
        explanation: "'Both' dla dokładnie dwóch braci! Gdy masz dwóch braci i mówisz o obu, używaj 'both' nie 'all'. 'Both' może być: both brothers, both of my brothers, both my brothers. Wszystkie poprawne. 'Both' + czasownik mnogi zawsze - 'both live' nie 'both lives'."
      },
      {
        id: "quant_12",
        question: "_____ child in the kindergarten class gets a healthy snack and juice at 10 AM daily.",
        translation: "(Każde dziecko w klasie przedszkolnej dostaje zdrową przekąskę i sok o 10 rano codziennie)",
        options: ["Every", "All", "Each", "Whole"],
        correct: "Every",
        explanation: "'Every' dla rutynowych, regularnych akcji dotyczących wszystkich! 'Every child gets' pokazuje codzienną rutynę dla każdego. 'Every' często używane z harmonogramami i zasadami które aplikują uniwersalnie. To o konsekwencji - każdy dzień, każde dziecko, bez wyjątków w regularnym wzorcu."
      },
      {
        id: "quant_13",
        question: "I can meet you _____ on Tuesday or Wednesday afternoon, whichever works better for you.",
        translation: "(Mogę się spotkać z tobą albo we wtorek albo w środę po południu, którekolwiek działa lepiej dla ciebie)",
        options: ["either", "neither", "both", "all"],
        correct: "either",
        explanation: "'Either' dla elastycznego wyboru! 'Either Tuesday or Wednesday' = jeden z tych dni, ty wybierasz. To pokazuje twoją dostępność w obu - oba dni są dobre dla ciebie. 'Either' komunikuje flexibility - jesteś otwarty na które wolą, to sprawia że układanie spotka jest łatwiejsze."
      },
      {
        id: "quant_14",
        question: "_____ the information you gave me was incorrect and misleading - I need accurate data.",
        translation: "(Wszystkie informacje które mi dałeś były niepoprawne i mylące - potrzebuję dokładnych danych)",
        options: ["All", "Every", "Each", "Whole"],
        correct: "All",
        explanation: "'All' + niepoliczalny rzeczownik (information)! 'All the information' traktuje to jako zbiorową całość. 'Information' jest niepoliczalne więc nie można 'every information'. 'All' działa z policzalnymi (all the books) i niepoliczalnymi (all the information). To bardzo wszechstronne słowo dla totalności."
      },
      {
        id: "quant_15",
        question: "_____ of us wants to work overtime this weekend - we all want to rest at home.",
        translation: "(Żaden z nas nie chce pracować po godzinach w ten weekend - wszyscy chcemy odpoczywać w domu)",
        options: ["None", "All", "Both", "Every"],
        correct: "None",
        explanation: "'None of us' = zero ludzi w grupie! 'None' neguje całą grupę - wszyscy mają tę samą negatywną odpowiedź. Czasownik może być pojedynczy (formalny) lub mnogi (casual): 'none wants' lub 'none want' - oba akceptowalne. 'None' wyraża unanimity w odmowie - wszyscy są zgodni że nie chcą."
      }
    ]
  }
};

export default part9Categories;