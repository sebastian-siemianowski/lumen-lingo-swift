/**
 * POLISH → ENGLISH GRAMMAR - PART 11
 * 3 categories, 15 questions each - Expert mastery
 */

import { Sparkles, Gem, Rocket } from "lucide-react";

export const part11Categories = {
  time_expressions: {
    name: "Wyrażenia czasu",
    description: "Already, yet, still, just, ago, lately...",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "time_exp_1",
        question: "I finished my homework ten minutes _____ and now I'm free to watch TV.",
        translation: "(Skończyłem moją pracę domową dziesięć minut temu i teraz jestem wolny żeby oglądać TV)",
        options: ["ago", "before", "since", "for"],
        correct: "ago",
        explanation: "'Ago' z past simple dla określenia czasu wstecz od teraz! 'Ten minutes ago' mierzy czas od teraz do przeszłej akcji. Zawsze: liczba + time unit + ago. Używaj z past simple, nigdy present perfect. 'Ago' liczy wstecz od present moment - to jak matematyczne odejmowanie czasu od teraźniejszości."
      },
      {
        id: "time_exp_2",
        question: "Has the mail arrived _____? I'm expecting an important package from my family abroad.",
        translation: "(Czy poczta już przyszła? Oczekuję ważnej paczki od mojej rodziny za granicą)",
        options: ["yet", "already", "still", "just"],
        correct: "yet",
        explanation: "'Yet' na końcu pytań o ukończenie! 'Has arrived yet?' pyta czy wydarzenie stało się do tego momentu. 'Yet' w pytaniach jest neutralne - nie wiesz odpowiedzi. Końcowa pozycja jest fixed. Możesz też 'yet' w negatywach (hasn't arrived yet). To bardzo praktyczne słowo dla pytań o timing i oczekiwania."
      },
      {
        id: "time_exp_3",
        question: "She's _____ working on that project even though it's already past midnight now!",
        translation: "(Wciąż pracuje nad tym projektem chociaż jest już po północy teraz!)",
        options: ["still", "yet", "already", "just"],
        correct: "still",
        explanation: "'Still' pokazuje kontynuację która może być zaskakująca! 'Still working' = nie przestała pomimo późnej godziny. 'Still' wyraża że sytuacja trwa dłużej niż oczekiwano. Idzie przed czasownikiem głównym. To komunikuje zaskoczenie lub zaniepokojenie że coś się nie zmieniło - oczekiwałeś że przestanie ale nie przestała."
      },
      {
        id: "time_exp_4",
        question: "I've _____ been to that new restaurant everyone is talking about recently in town.",
        translation: "(Już byłem w tej nowej restauracji o której wszyscy ostatnio mówią w mieście)",
        options: ["already", "yet", "still", "ago"],
        correct: "already",
        explanation: "'Already' pokazuje że coś stało się wcześniej niż oczekiwano! 'Already been' wyraża że doświadczenie wydarzyło się szybciej niż ludzie myśleli. Idzie między 'have' a past participle. 'Already' komunikuje surprise at earliness - zrobiłeś to przed expected time. Często używane dla pokazywania efficiency lub eagerness."
      },
      {
        id: "time_exp_5",
        question: "I saw him _____ five minutes ago in the hallway, so he must be somewhere nearby still.",
        translation: "(Widziałem go tylko pięć minut temu w korytarzu, więc musi być gdzieś w pobliżu wciąż)",
        options: ["just", "yet", "already", "still"],
        correct: "just",
        explanation: "'Just' + konkretny czas wzmacnia świeżość! 'Just five minutes ago' podkreśla jak niedawno - bardzo blisko teraz. 'Just' może iść z 'ago' dla ekstra emfazy na recentness. To sugeruje że osoba prawdopodobnie nie poszła daleko - to było zbyt niedawno. Kombinacja 'just... ago' jest bardzo naturalna."
      },
      {
        id: "time_exp_6",
        question: "Have you been feeling better _____ after taking the medicine the doctor prescribed?",
        translation: "(Czy czujesz się lepiej ostatnio po wzięciu lekarstwa które lekarz przepisał?)",
        options: ["lately", "late", "later", "latest"],
        correct: "lately",
        explanation: "'Lately' = ostatnio/w ostatnim czasie! Używane z present perfect dla recent period. 'Have you been feeling lately' pyta o stan w niedawnym przeszłym okresie do teraz. Nie myl: late (późno/spóźniony), lately (ostatnio), later (później w przyszłości). 'Lately' zawsze o recent past extending to now."
      },
      {
        id: "time_exp_7",
        question: "I haven't seen John _____ - I wonder what he's been doing these days?",
        translation: "(Nie widziałem Johna ostatnio - zastanawiam się co robił w tych dniach?)",
        options: ["lately", "late", "already", "yet"],
        correct: "lately",
        explanation: "'Haven't seen lately' wyraża że ktoś był nieobecny w twoim życiu recent time! 'Lately' z negatywem pokazuje brak kontaktu w ostatnim okresie. To sugeruje że normalnie widujesz się ale ostatnio nie - zmiana w zwykłym wzorcu. Prowadzi do ciekawości o co się dzieje z nimi."
      },
      {
        id: "time_exp_8",
        question: "The bus should arrive _____ - it's usually very punctual according to the schedule.",
        translation: "(Autobus powinien przyjechać wkrótce - zazwyczaj jest bardzo punktualny według rozkładu)",
        options: ["soon", "sooner", "soonest", "early"],
        correct: "soon",
        explanation: "'Soon' dla niedalekiej przyszłości bez konkretnego czasu! 'Should arrive soon' = w bliskiej przyszłości ale nie dokładnie kiedy. 'Soon' jest vague ale obiecujące - niedługo, za chwilę. Używane gdy oczekujesz czegoś w najbliższym czasie ale nie możesz podać dokładnej minuty. To o bliskiej bliskości czasowej."
      },
      {
        id: "time_exp_9",
        question: "I've _____ finished my report, I submitted it to my boss only two minutes ago.",
        translation: "(Właśnie skończyłem mój raport, wysłałem go do mojego szefa tylko dwie minuty temu)",
        options: ["just", "yet", "already", "still"],
        correct: "just",
        explanation: "'Just' dla bardzo świeżych ukończeń! 'Have just finished' = skończyłem moments ago. 'Just' między 'have' a past participle podkreśla immediacy - to wciąż jest świeże w twojej pamięci. Często używane dla tłumaczenia czemu jesteś zajęty lub niedostępny - właśnie to zrobiłeś i może potrzebujesz przerwy."
      },
      {
        id: "time_exp_10",
        question: "We've known each other _____ we were children growing up in the same neighborhood.",
        translation: "(Znamy się odkąd byliśmy dziećmi dorastającymi w tej samej dzielnicy)",
        options: ["since", "for", "from", "ago"],
        correct: "since",
        explanation: "'Since' + konkretny punkt w czasie dla długotrwałych stanów! 'Since we were children' oznacza punkt startu znajomości. 'Since' z czasem/wydarzeniem, 'for' z okresem. Present perfect 'have known' pokazuje że znajomość trwa od tamtego punktu do teraz. To o długich, trwałych relacjach zaczynających w konkretnym momencie."
      },
      {
        id: "time_exp_11",
        question: "The store will be closed _____ next month for renovation and complete interior redesign.",
        translation: "(Sklep będzie zamknięty do przyszłego miesiąca na renowację i kompletny przeprojektowanie wnętrza)",
        options: ["until", "by", "since", "for"],
        correct: "until",
        explanation: "'Until' znaczy aż do - akcja trwa DO tego punktu! 'Closed until next month' = zamknięcie trwa aż do przyszłego miesiąca (potem otwarcie). Różne od 'by' (deadline) - 'until' o czasie trwania, 'by' o punkcie ukończenia. 'Until' dla stanów kontynuujących do określonego końca."
      },
      {
        id: "time_exp_12",
        question: "I studied English _____ five years before I moved to London for work opportunities.",
        translation: "(Studiowałem angielski przez pięć lat zanim przeprowadziłem się do Londynu na możliwości pracy)",
        options: ["for", "since", "during", "ago"],
        correct: "for",
        explanation: "'For' + okres czasu z past simple dla skończonego czasu trwania! 'For five years' mierzy długość studiowania w przeszłości. Studiowałeś wtedy ale może już nie teraz - zakończony okres. 'For' używane z past simple pokazuje że akcja i okres są kompletnie skończone w przeszłości."
      },
      {
        id: "time_exp_13",
        question: "The package hasn't arrived _____, but it should be delivered by tomorrow afternoon.",
        translation: "(Paczka nie przybyła jeszcze, ale powinna być dostarczona do jutrzejszego popołudnia)",
        options: ["yet", "already", "still", "just"],
        correct: "yet",
        explanation: "'Yet' w negatywach pokazuje że coś jest oczekiwane ale nie stało się! 'Hasn't arrived yet' = wciąż czekasz. 'Yet' na końcu negatywów podkreśla continued absence. To komunikuje frustrację lub niecierpliwość - oczekujesz że to przyjdzie ale wciąż nie ma. Bardzo częste dla track packages i deliveries."
      },
      {
        id: "time_exp_14",
        question: "I'll call you back _____, I'm in a meeting right now and can't talk freely.",
        translation: "(Oddzwonię do ciebie później, jestem na spotkaniu teraz i nie mogę rozmawiać swobodnie)",
        options: ["later", "latter", "late", "lately"],
        correct: "later",
        explanation: "'Later' dla nieokreślonej przyszłości! 'Call you back later' = w jakimś punkcie po tym, nie teraz. Nie konkretyzujesz kiedy. Nie myl: later (później - przyszłość), latter (drugi z dwóch - wybór), late (późno/spóźniony), lately (ostatnio - recent past). 'Later' to vague promise przyszłego kontaktu."
      },
      {
        id: "time_exp_15",
        question: "We've been friends _____ over twenty years now - since we met in primary school together.",
        translation: "(Jesteśmy przyjaciółmi od ponad dwudziestu lat teraz - odkąd spotkaliśmy się w podstawówce razem)",
        options: ["for", "since", "during", "from"],
        correct: "for",
        explanation: "'For' + okres czasu z present perfect dla trwania do teraz! 'For over twenty years' mierzy całkowity czas przyjaźni która wciąż trwa. 'For' z present perfect pokazuje że relacja zaczęła się w przeszłości i kontynuuje - to ongoing state. To celebruje długość i stability długoterminowej przyjaźni."
      }
    ]
  },

  so_such_usage: {
    name: "So vs Such - różnice",
    description: "Kiedy 'so' a kiedy 'such'",
    icon: Gem,
    color: "from-purple-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "so_such_1",
        question: "It was _____ a beautiful day that we decided to go to the beach for swimming.",
        translation: "(To był taki piękny dzień, że zdecydowaliśmy pojechać na plażę na pływanie)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such + a/an + przymiotnik + rzeczownik' dla rzeczowników policzalnych! 'Such a beautiful day' modyfikuje całą frazę rzeczownikową. 'Such' idzie przed 'a/an'. To emfatyczne - podkreśla jak wyjątkowy był dzień. 'Such' + rzeczownik tworzy silny emocjonalny opis prowadzący do konsekwencji (that we decided)."
      },
      {
        id: "so_such_2",
        question: "The exam was _____ difficult that many students failed it despite studying hard.",
        translation: "(Egzamin był tak trudny, że wielu studentów oblało pomimo ciężkiego studiowania)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So + przymiotnik + that' dla intensywności prowadzącej do rezultatu! 'So difficult that' pokazuje jak ekstremalna trudność spowodowała porażki. 'So' modyfikuje sam przymiotnik, nie rzeczownik. Struktura: so + adjective/adverb + that + rezultat. To o przyczynowo-skutkowym związku między intensywnością a konsekwencją."
      },
      {
        id: "so_such_3",
        question: "They're _____ nice people that everyone in the neighborhood loves them genuinely.",
        translation: "(To tak mili ludzie, że wszyscy w dzielnicy kochają ich szczerze)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such + przymiotnik + rzeczownik mnogi' (bez a/an)! 'Such nice people' modyfikuje mnogi rzeczownik. Nie potrzeba 'a/an' bo 'people' jest mnogi. 'Such' wyraża admirację - podkreśla jak exceptional są. To prowadzi do konsekwencji (that everyone loves) - ich wyjątkowa życzliwość tworzy uniwersalną miłość."
      },
      {
        id: "so_such_4",
        question: "She speaks _____ quietly that I can barely hear what she's saying in this noisy room.",
        translation: "(Mówi tak cicho, że ledwo słyszę co mówi w tym hałaśliwym pokoju)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So + przysłówek + that' dla rezultatu sposobu akcji! 'So quietly that' pokazuje jak ekstremalna cichość utrudnia słyszenie. 'So' modyfikuje przysłówek 'quietly' (sposób mówienia). To o intensywności SPOSOBU robienia czegoś prowadzącej do problemu. 'So' z adverbs jest mniej częste niż z adjectives ale bardzo użyteczne."
      },
      {
        id: "so_such_5",
        question: "It's _____ cold weather today that all the schools in the area have been closed for safety.",
        translation: "(To tak zimna pogoda dzisiaj, że wszystkie szkoły w okolicy zostały zamknięte dla bezpieczeństwa)",
        options: ["such", "so", "very", "too"],
        correct: "such",
        explanation: "'Such + przymiotnik + niepoliczalny rzeczownik! 'Such cold weather' modyfikuje 'weather' (niepoliczalne). Nie potrzeba 'a/an' z niepoliczalnymi. 'Such' podkreśla jak ekstremalnie nieprzyjazna jest pogoda. To prowadzi do dramatycznej konsekwencji (zamknięcie szkół) - pokazuje jak poważna jest sytuacja."
      },
      {
        id: "so_such_6",
        question: "He was driving _____ fast that the police stopped him and gave him a speeding ticket.",
        translation: "(Jechał tak szybko, że policja zatrzymała go i dała mu mandat za prędkość)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So + przysłówek (fast) + that' dla negatywnej konsekwencji! 'So fast' opisuje prędkość przekraczającą limit prawny. To prowadzi do kary - jego nadmierna prędkość spowodowała zatrzymanie. 'So' z przysłówkami sposobu często wyjaśnia czemu coś złego się stało - nadmiar lub skrajność."
      },
      {
        id: "so_such_7",
        question: "We had _____ good time at the party that we didn't want to leave until very late!",
        translation: "(Mieliśmy tak dobry czas na imprezie, że nie chcieliśmy wychodzić do bardzo późna!)",
        options: ["such a", "so", "very", "so a"],
        correct: "such a",
        explanation: "'Such a + przymiotnik + rzeczownik pojedynczy policzalny! 'Such a good time' używa 'a' między 'such' a 'good'. To idiomatyczne wyrażenie - 'have such a good time' = bawić się wspaniale. 'Such a' podkreśla jak exceptional było doświadczenie. Prowadzi do nie chcenia żeby się skończyło."
      },
      {
        id: "so_such_8",
        question: "I'm _____ tired today after staying up late last night working on my project deadline.",
        translation: "(Jestem tak zmęczony dzisiaj po nie spaniu późno wczoraj w nocy pracując nad deadlinem projektu)",
        options: ["so", "such", "very", "such a"],
        correct: "so",
        explanation: "'So + przymiotnik' bez rzeczownika! 'So tired' po 'I am' używa 'so' nie 'such' bo nie ma rzeczownika. 'Such' potrzebuje rzeczownika, 'so' modyfikuje sam przymiotnik. 'So tired' komunikuje ekstremalne zmęczenie. Można dodać 'that I can barely function' dla pokazania konsekwencji."
      },
      {
        id: "so_such_9",
        question: "This is _____ expensive watch that only very wealthy people can afford to buy it!",
        translation: "(To tak drogi zegarek, że tylko bardzo zamożni ludzie mogą sobie pozwolić na kupienie go!)",
        options: ["such an", "so", "so an", "such a"],
        correct: "such an",
        explanation: "'Such an' przed przymiotnikiem zaczynającym się od samogłoski! 'Such an expensive watch' używa 'an' bo 'expensive' zaczyna się od 'e'. Zasady a/an działają normalnie po 'such'. To podkreśla jak extremely costly jest zegarek - poza zasięgiem większości ludzi. 'Such' komunikuje exceptional nature produktu."
      },
      {
        id: "so_such_10",
        question: "He's _____ talented musician that he can play five different instruments perfectly well.",
        translation: "(To tak utalentowany muzyk, że potrafi grać na pięciu różnych instrumentach perfekcyjnie dobrze)",
        options: ["such a", "so", "so a", "very"],
        correct: "such a",
        explanation: "'Such a talented musician' = tak utalentowany! 'Such a' + przymiotnik + rzeczownik policzalny pojedynczy. To celebruje exceptional skill. Prowadzi do impressive rezultatu (granie na 5 instrumentach). 'Such a' tworzy silniejszą emfazę niż proste 'very' - to o byciu extraordinary w swoim polu."
      },
      {
        id: "so_such_11",
        question: "I have _____ many books at home that I don't have enough shelf space for them all!",
        translation: "(Mam tak wiele książek w domu, że nie mam wystarczająco miejsca na półkach dla nich wszystkich!)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So many' + rzeczownik policzalny mnogi! 'So many books' = tak wiele książek. Używaj 'so many/much', nie 'such many/much'. 'So' idzie przed quantifier (many/much/few/little). To o overwhelmingu ilości - masz za dużo żeby sensownie pomieścić. 'So many' podkreśla excessive quantity."
      },
      {
        id: "so_such_12",
        question: "There was _____ much traffic on the highway that we arrived two hours late to wedding!",
        translation: "(Był tak duży ruch na autostradzie, że przyjechaliśmy dwie godziny spóźnieni na ślub!)",
        options: ["so", "such", "very", "too"],
        correct: "so",
        explanation: "'So much' + rzeczownik niepoliczalny dla ogromnej ilości! 'So much traffic' = ekstremalne zagęszczenie. Prowadzi do poważnej konsekwencji (massive delay). 'So much' podkreśla overwhelming amount czego niepoliczalnego - traffic, work, noise, stress. To wyjaśnia czemu coś złego się stało przez nadmiar."
      },
      {
        id: "so_such_13",
        question: "They have _____ big house that they often get lost in it looking for different rooms!",
        translation: "(Mają tak duży dom, że często się w nim gubią szukając różnych pokoi!)",
        options: ["such a", "so", "so a", "very"],
        correct: "such a",
        explanation: "'Such a big house' używa 'such' przed całą frazą rzeczownikową! 'Such a' + adjective + noun dla emfatycznego opisu. Dom jest tak ogromny że tworzą komiczne problemy (gubienie się). 'Such a' komunikuje extraordinary size prowadzącą do unusual situation. To humorystyczny sposób pokazania excessive magnitude."
      },
      {
        id: "so_such_14",
        question: "I was _____ surprised by the news that I couldn't speak for several minutes in shock!",
        translation: "(Byłem tak zaskoczony wiadomością, że nie mogłem mówić przez kilka minut w szoku!)",
        options: ["so", "such", "very", "such a"],
        correct: "so",
        explanation: "'So + przymiotnik emocjonalny + that' dla silnych reakcji! 'So surprised that I couldn't speak' pokazuje jak shock był intense. Zaskoczenie było tak wielkie że physically wpłynęło na ciebie (niemowa). 'So' z emocjami często prowadzi do fizycznych lub behawioralnych konsekwencji - pokazuje głębokość uczucia."
      },
      {
        id: "so_such_15",
        question: "She's _____ intelligent girl that she skipped two grades in school easily and naturally.",
        translation: "(To taka inteligentna dziewczyna, że przeskoczyła dwa stopnie w szkole łatwo i naturalnie)",
        options: ["such an", "so", "so an", "very"],
        correct: "such an",
        explanation: "'Such an intelligent girl' używa 'an' bo 'intelligent' zaczyna się od samogłoski! Całkowita struktura: such + an + adjective (vowel start) + noun. Jej intelligencja jest tak exceptional że umożliwia grade skipping. 'Such an' podkreśla extraordinary nature prowadzącą do unusual achievement. To o byciu remarkably gifted."
      }
    ]
  },

  negative_questions: {
    name: "Pytania przeczące",
    description: "Jak używać pytań z 'not'",
    icon: Rocket,
    color: "from-rose-500 to-red-600",
    level: "advanced",
    questions: [
      {
        id: "neg_q_1",
        question: "_____ you like pizza? I thought everyone loves it - it's so popular worldwide!",
        translation: "(Czy nie lubisz pizzy? Myślałem że wszyscy ją kochają - jest taka popularna na całym świecie!)",
        options: ["Don't", "Doesn't", "Aren't", "Isn't"],
        correct: "Don't",
        explanation: "Pytania przeczące wyrażają zaskoczenie! 'Don't you like' = myślałem że lubisz, ale najwyraźniej nie? To pokazuje że oczekiwałeś pozytywnej odpowiedzi ale widzisz oznaki negatywu. Używane dla sprawdzania założeń które wydają się niepoprawne. To bardziej o confirmacji zaskoczenia niż neutralnym pytaniu."
      },
      {
        id: "neg_q_2",
        question: "_____ she coming to the party tonight? I saw her name on the guest list earlier.",
        translation: "(Czy ona nie przychodzi na imprezę dziś wieczorem? Widziałem jej imię na liście gości wcześniej)",
        options: ["Isn't", "Doesn't", "Don't", "Aren't"],
        correct: "Isn't",
        explanation: "'Isn't she coming' wyraża confusion! Jej imię jest na liście ale może słyszałeś że nie przyjdzie. Pytania przeczące używane dla wyjaśniania sprzecznych informacji. To próba reconciliation między tym co wiesz (lista) a tym co słyszałeś (może nie przyjdzie). Negatyw pokazuje doubt o twoim założeniu."
      },
      {
        id: "neg_q_3",
        question: "_____ you finish your work yet? It's getting late and we need to leave soon for dinner.",
        translation: "(Czy nie skończyłeś jeszcze swojej pracy? Robi się późno i musimy wkrótce wyjść na kolację)",
        options: ["Haven't", "Didn't", "Don't", "Aren't"],
        correct: "Haven't",
        explanation: "'Haven't you finished yet' wyraża niecierpliwość! Oczekiwałeś że będzie skończone do teraz ale wciąż nie jest. Pytania przeczące z 'yet' komunikują frustrację z opóźnieniem. To gentler niż bezpośrednie 'Why isn't it done?' ale wciąż przekazuje pressure. Pokazuje że czas płynie i oczekiwania są niezaspokojone."
      },
      {
        id: "neg_q_4",
        question: "_____ he call you back yesterday after you left that urgent voice message for him?",
        translation: "(Czy on nie oddzwonił do ciebie wczoraj po tym jak zostawiłeś tę pilną wiadomość głosową dla niego?)",
        options: ["Didn't", "Doesn't", "Hasn't", "Isn't"],
        correct: "Didn't",
        explanation: "'Didn't he call' wyraża zaskoczenie brakiem odpowiedzi! Zostawiłeś pilną wiadomość więc oczekiwałeś callback - ale nie zadzwonił? Pytanie przeczące podkreśla unexpected lack of action. To komunikuje rozczarowanie lub concern - jego cisza jest surprising given urgency. Negatyw pokazuje że jego zachowanie jest poza oczekiwaniami."
      },
      {
        id: "neg_q_5",
        question: "_____ this the book you were looking for everywhere in the library and bookstores?",
        translation: "(Czy to nie ta książka której szukałeś wszędzie w bibliotece i księgarniach?)",
        options: ["Isn't", "Doesn't", "Don't", "Aren't"],
        correct: "Isn't",
        explanation: "'Isn't this' dla confirmacji że znalazłeś coś! Myślisz że to jest ta książka ale chcesz potwierdzenia. Pytania przeczące używane gdy jesteś prawie pewien ale chcesz verification. To pokazuje confidence z małą wątpliwością - 'isn't this' bardziej pewne niż neutralne 'is this'. Oczekujesz 'yes'."
      },
      {
        id: "neg_q_6",
        question: "_____ you supposed to be at work right now? It's Monday morning at 10 AM!",
        translation: "(Czy nie powinieneś być w pracy teraz? Jest poniedziałek rano o 10!)",
        options: ["Aren't", "Isn't", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "'Aren't you supposed to' wyraża zdziwienie nieobecnością! 'Supposed to be' = oczekiwane/wymagane. Pytanie przeczące podkreśla że jego obecność tutaj jest unexpected - powinien być gdzie indziej. To może być concern lub gentle reminder - brzmi mniej oskarżająco niż 'You should be at work!' ale wciąż wskazuje problem."
      },
      {
        id: "neg_q_7",
        question: "_____ that a beautiful sunset over the ocean? Let's take some photos of it quickly!",
        translation: "(Czy to nie piękny zachód słońca nad oceanem? Zróbmy kilka zdjęć szybko!)",
        options: ["Isn't", "Doesn't", "Don't", "Aren't"],
        correct: "Isn't",
        explanation: "'Isn't that' dla wyrażania admiracji! To retoryczne pytanie - nie oczekujesz odpowiedzi, wyrażasz enthusiasm. Pytania przeczące dla piękna są eksclamatory - 'Isn't that beautiful!' = to jest takie piękne! To sposób dzielenia się podziwem - zapraszasz innych do appreciate razem z tobą."
      },
      {
        id: "neg_q_8",
        question: "_____ anyone told you how talented you are at painting and drawing portraits?",
        translation: "(Czy nikt ci nie powiedział jak utalentowany jesteś w malowaniu i rysowaniu portretów?)",
        options: ["Hasn't", "Didn't", "Don't", "Aren't"],
        correct: "Hasn't",
        explanation: "'Hasn't anyone told you' wyraża że to powinno być oczywiste! Sugerujesz że inni powinni byli już to zauważyć i powiedzieć. Pytanie przeczące implikuje że nieobecność compliments jest surprising - talent jest tak wyraźny. To sposób dawania kompletu - sugerujesz zasługują na więcej uznania niż dostają."
      },
      {
        id: "neg_q_9",
        question: "_____ we meet last year at the conference in Berlin about technology innovation?",
        translation: "(Czy nie spotkaliśmy się w zeszłym roku na konferencji w Berlinie o innowacji technologicznej?)",
        options: ["Didn't", "Don't", "Haven't", "Aren't"],
        correct: "Didn't",
        explanation: "'Didn't we meet' dla niepewnych wspomnień! Myślisz że spotkałeś tę osobę ale nie jesteś pewien. Pytanie przeczące pokazuje że masz vague memory ale potrzebujesz confirmation. To używane gdy rozpoznajesz kogoś ale nie pamiętasz dokładnie skąd - szukasz potwierdzenia swojej memory."
      },
      {
        id: "neg_q_10",
        question: "_____ it amazing how quickly children learn new languages compared to adults naturally?",
        translation: "(Czy nie jest niesamowite jak szybko dzieci uczą się nowych języków w porównaniu do dorosłych naturalnie?)",
        options: ["Isn't", "Doesn't", "Don't", "Aren't"],
        correct: "Isn't",
        explanation: "'Isn't it amazing' to retoryczne wyrażenie podziwu! Nie pytasz opinion - wyrażasz swój podziw i zapraszasz agreement. Pytania przeczące dla remarkable facts są emfatyczne - 'Isn't it amazing/wonderful/terrible' wszystkie wyrażają silne uczucia. To sposób dzielenia się obserwacjami emocjonalnie."
      },
      {
        id: "neg_q_11",
        question: "_____ you think we should leave earlier to avoid the rush hour traffic on highway?",
        translation: "(Czy nie myślisz, że powinniśmy wyjechać wcześniej żeby uniknąć ruchu w godzinach szczytu na autostradzie?)",
        options: ["Don't", "Doesn't", "Aren't", "Isn't"],
        correct: "Don't",
        explanation: "'Don't you think' to grzeczna sugestia! Zamiast bezpośredniego 'We should leave earlier' pytasz o ich opinię z negatywem. Pytanie przeczące sugeruje że zgadzasz się z ideą i oczekujesz że oni też. To diplomatyczny sposób proponowania - dajesz im przestrzeń to disagree ale subtly recommendujesz."
      },
      {
        id: "neg_q_12",
        question: "_____ you cold in here? I can turn up the heating if the temperature is too low.",
        translation: "(Czy nie jest ci zimno tutaj? Mogę podkręcić ogrzewanie, jeśli temperatura jest za niska)",
        options: ["Aren't", "Don't", "Isn't", "Doesn't"],
        correct: "Aren't",
        explanation: "'Aren't you cold' pokazuje concern dla komfortu! Zauważasz oznaki (drżenie, okrycie) i sprawdzasz. Pytanie przeczące sugeruje że widzisz dowody dyskomfortu. To caring question - oferujesz solution jeśli potwierdzą. Bardziej attentive niż neutralne 'Are you cold' - pokazujesz że obserwujesz i dbasz."
      },
      {
        id: "neg_q_13",
        question: "_____ we supposed to bring anything to the potluck dinner party at Sarah's house?",
        translation: "(Czy nie powinniśmy przynieść czegoś na potluck kolację w domu Sarah?)",
        options: ["Aren't", "Isn't", "Don't", "Doesn't"],
        correct: "Aren't",
        explanation: "'Aren't we supposed to' sprawdza oczekiwania! Myślisz że powinniście przynieść coś ale nie jesteś pewien. Pytanie przeczące sugeruje słabe przypomnienie obowiązku. To dla wyjaśniania etykiety lub zasad gdy masz niepełną pamięć - chcesz potwierdzić co jest expected żeby nie być rude."
      },
      {
        id: "neg_q_14",
        question: "_____ you tired after working such long hours every day this whole week without rest?",
        translation: "(Czy nie jesteś zmęczony po pracy tak długich godzin każdego dnia przez cały ten tydzień bez odpoczynku?)",
        options: ["Aren't", "Don't", "Isn't", "Haven't"],
        correct: "Aren't",
        explanation: "'Aren't you tired' wyraża concern dla czyjegoś well-being! Pracowali ciężko więc naturalnie oczekujesz zmęczenia. Pytanie przeczące pokazuje troskę - sugerujesz że POWINNI odpocząć. To empatyczne - recognizujesz ich wysiłek i wyrażasz worry o ich kondycję. Może prowadzić do oferowania pomocy lub zachęcania do breaks."
      },
      {
        id: "neg_q_15",
        question: "_____ it obvious that he's lying about where he was last night yesterday evening?",
        translation: "(Czy nie jest oczywiste, że kłamie o tym gdzie był wczoraj wieczorem?)",
        options: ["Isn't", "Doesn't", "Don't", "Aren't"],
        correct: "Isn't",
        explanation: "'Isn't it obvious' dla czegoś co powinno być jasne wszystkim! To nie prawdziwe pytanie - to stwierdzenie disguised jako pytanie. Wyrażasz że dowody są overwhelming - każdy powinien widzieć prawdę. Pytania przeczące dla oczywistości są retoryczne - nie pytasz opinion, asercjonujesz fact i szukasz agreement."
      }
    ]
  }
};

export default part11Categories;