/**
 * POLISH → ENGLISH GRAMMAR - PART 12
 * 4 categories, 15 questions each - Advanced mastery
 */

import { Tag, Link2, Timer, Lock } from "lucide-react";

export const part12Categories = {
  tag_questions: {
    name: "Pytania dopełniające",
    description: "Tag questions - isn't it? don't you?",
    icon: Tag,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "tag_1",
        question: "You're coming to the party tonight, _____ you?",
        translation: "(Przychodzisz na imprezę dziś wieczorem, prawda?)",
        options: ["aren't", "don't", "won't", "isn't"],
        correct: "aren't",
        explanation: "Pytania dopełniające odwracają formę zdania! Pozytywne 'you're' (you are) staje się negatywne 'aren't you?'. To jak potwierdzanie informacji - prawie pewien ale sprawdzasz. Używaj skróconej formy w tagu. Gdy zdanie główne jest pozytywne, tag jest negatywny i odwrotnie."
      },
      {
        id: "tag_2",
        question: "She doesn't like coffee very much, _____ she?",
        translation: "(Ona niezbyt lubi kawę, prawda?)",
        options: ["does", "doesn't", "is", "isn't"],
        correct: "does",
        explanation: "Negatywne zdanie główne dostaje pozytywny tag! 'Doesn't like' (negatyw) → 'does she?' (pozytyw). Tag zawsze używa pomocnika z głównego czasownika. To tworzy balans - jeśli jedno jest negatywne, drugie musi być pozytywne. Sprawdzasz swoje założenie, które jest negatywne."
      },
      {
        id: "tag_3",
        question: "It's a beautiful day today, _____ it?",
        translation: "(Piękny dziś dzień, prawda?)",
        options: ["isn't", "doesn't", "wasn't", "won't"],
        correct: "isn't",
        explanation: "'It's' (it is) w zdaniu pozytywnym daje negatywny tag 'isn't it?'. To bardzo częsty sposób komentowania pogody lub sytuacji - zapraszasz do zgody. 'Isn't it?' na końcu stwierdzeń czyni je przyjaźniejszymi, bardziej konwersacyjnymi niż same stwierdzenia."
      },
      {
        id: "tag_4",
        question: "You have finished your homework already, _____ you?",
        translation: "(Już skończyłeś swoją pracę domową, prawda?)",
        options: ["haven't", "don't", "didn't", "won't"],
        correct: "haven't",
        explanation: "Present perfect 'have finished' daje tag 'haven't you?'. Tag używa tego samego pomocnika co główne zdanie. 'Haven't you?' sprawdza ukończenie - oczekujesz że jest zrobione. Tagi z present perfect są częste dla pytania o rzeczy które miały być ukończone."
      },
      {
        id: "tag_5",
        question: "They won't be late for the meeting, _____ they?",
        translation: "(Nie spóźnią się na spotkanie, prawda?)",
        options: ["will", "won't", "don't", "aren't"],
        correct: "will",
        explanation: "Negatywna przyszłość 'won't be' odwraca się do pozytywnego 'will they?'. Nawet w przyszłości zasada pozostaje - negatyw w zdaniu, pozytyw w tagu. To szuka zapewnienia o przyszłej punktualności - chcesz potwierdzenia że przyjdą na czas."
      },
      {
        id: "tag_6",
        question: "Let's go to the cinema this weekend, _____ we?",
        translation: "(Chodźmy do kina w ten weekend, dobrze?)",
        options: ["shall", "will", "don't", "won't"],
        correct: "shall",
        explanation: "'Let's' używa specjalnego tagu 'shall we?'! To wyjątek od normalnych zasad. 'Let's go, shall we?' brzmi brytyjsko i grzecznie. Amerykanie częściej mówią 'Let's go, OK?' ale 'shall we?' jest standardem gramatycznym. To zaproszenie szukające zgody."
      },
      {
        id: "tag_7",
        question: "He's never been to Japan before, _____ he?",
        translation: "(Nigdy wcześniej nie był w Japonii, prawda?)",
        options: ["has", "hasn't", "is", "isn't"],
        correct: "has",
        explanation: "'Never' czyni zdanie negatywnym więc tag jest pozytywny! 'Never been' to już negatyw, więc tag 'has he?' jest pozytywny. Słowa jak never, hardly, rarely, seldom tworzą negatywy w zdaniach głównych. Tag potwierdza twoją wiedzę o jego braku doświadczenia z Japonią."
      },
      {
        id: "tag_8",
        question: "Nobody called while I was out, _____ they?",
        translation: "(Nikt nie dzwonił kiedy mnie nie było, prawda?)",
        options: ["did", "didn't", "do", "don't"],
        correct: "did",
        explanation: "'Nobody' jest negatywne więc tag jest pozytywny! 'Nobody called' (negatyw) → 'did they?' (pozytyw). Tag używa 'they' dla odniesienia do 'nobody' (mimo że 'nobody' jest pojedyncze). To dziwne ale standardowe - negatywne podmioty jak nobody, nothing dostają pozytywne tagi z 'they'."
      },
      {
        id: "tag_9",
        question: "I'm late for the meeting, _____ I?",
        translation: "(Spóźniam się na spotkanie, prawda?)",
        options: ["aren't", "am not", "don't", "isn't"],
        correct: "aren't",
        explanation: "Tag dla 'I am' to 'aren't I?'! To dziwna forma - 'am I not?' jest formalnie poprawna ale niezręczna, więc używamy 'aren't I?'. To powszechnie akceptowany wyjątek. 'Amn't' nie istnieje więc 'aren't' przejmuje tę rolę mimo braku logiki."
      },
      {
        id: "tag_10",
        question: "There's a good restaurant near here, _____ there?",
        translation: "(Jest dobra restauracja blisko stąd, prawda?)",
        options: ["isn't", "aren't", "doesn't", "won't"],
        correct: "isn't",
        explanation: "'There is' daje tag 'isn't there?'. Używaj formy pojedynczej 'isn't' nawet jeśli mówimy o wielu rzeczach czasem. 'There's' to skrót od 'there is'. Tag powtarza 'there' jako podmiot - 'isn't there?'. To sprawdza istnienie czegoś w lokalizacji."
      },
      {
        id: "tag_11",
        question: "You haven't seen my keys anywhere, _____ you?",
        translation: "(Nie widziałeś moich kluczy nigdzie, prawda?)",
        options: ["have", "haven't", "did", "didn't"],
        correct: "have",
        explanation: "Negatywne 'haven't seen' odwraca się do pozytywnego 'have you?'. Pytasz z nadzieją że może jednak widział. Tag czyni pytanie łagodniejszym niż bezpośrednie 'Have you seen my keys?'. To bardziej casualowa, mniej naglącą forma pytania."
      },
      {
        id: "tag_12",
        question: "Open the window, _____ you?",
        translation: "(Otwórz okno, dobrze?)",
        options: ["will", "would", "can", "could"],
        correct: "will",
        explanation: "Rozkazy używają 'will you?' jako tagu! Imperatyw (open) + 'will you?' czyni rozkaz bardziej grzecznym. To jak 'proszę' na końcu - łagodzi bezpośredniość rozkazu. 'Will you?' transformuje komendę w uprzejmą prośbę poprzez dodanie elementu pytania."
      },
      {
        id: "tag_13",
        question: "Nothing went wrong with the project, _____ it?",
        translation: "(Nic nie poszło źle z projektem, prawda?)",
        options: ["did", "didn't", "does", "doesn't"],
        correct: "did",
        explanation: "'Nothing' to negatyw więc tag jest pozytywny! 'Nothing went' (negatyw) → 'did it?' (pozytyw). Tag używa 'it' dla odniesienia do 'nothing'. Past simple 'went' daje pomocnika 'did'. Sprawdzasz że projekt poszedł gładko - szukasz potwierdzenia braku problemów."
      },
      {
        id: "tag_14",
        question: "She's been working here for five years now, _____ she?",
        translation: "(Pracuje tutaj od pięciu lat, prawda?)",
        options: ["hasn't", "isn't", "doesn't", "won't"],
        correct: "hasn't",
        explanation: "'She's been' (she has been) używa 'hasn't she?' jako tagu! Present perfect continuous daje tag z 'has/have'. Pozytywne zdanie główne więc negatywny tag. To potwierdza długość jej zatrudnienia - podkreślasz znaczący okres czasu w jednym miejscu."
      },
      {
        id: "tag_15",
        question: "We should leave now to avoid traffic, _____ we?",
        translation: "(Powinniśmy wyjechać teraz żeby uniknąć korków, prawda?)",
        options: ["shouldn't", "should", "don't", "won't"],
        correct: "shouldn't",
        explanation: "'Should' w pozytywnym zdaniu daje 'shouldn't we?' w tagu. Modalne czasowniki tworzą własne tagi. To sugeruje akcję szukając zgody - chcesz potwierdzenia że twój plan jest dobry. 'Shouldn't we?' zaprasza do wspólnej decyzji o działaniu."
      }
    ]
  },

  verb_preposition_combinations: {
    name: "Czasowniki z przyimkami",
    description: "Depend on, wait for, believe in...",
    icon: Link2,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "vprep_1",
        question: "I'm waiting _____ the bus at the stop near my house for twenty minutes already.",
        translation: "(Czekam na autobus na przystanku blisko mojego domu już od dwudziestu minut)",
        options: ["for", "to", "on", "at"],
        correct: "for",
        explanation: "'Wait for' to ustalona kombinacja! Zawsze 'for' po 'wait' gdy oczekujesz na kogoś lub coś. 'Wait for the bus/train/person' to standardowy wzorzec. Nie możesz powiedzieć 'wait to the bus'. Niektóre czasowniki mają ustalone przyimki które musisz zapamiętać - nie ma logiki, tylko użycie."
      },
      {
        id: "vprep_2",
        question: "The success of our project depends _____ how well the team works together cooperatively.",
        translation: "(Sukces naszego projektu zależy od tego jak dobrze zespół pracuje razem kooperacyjnie)",
        options: ["on", "of", "from", "with"],
        correct: "on",
        explanation: "'Depend on' znaczy być uzależnionym od czegoś! Zawsze 'on' po 'depend'. 'Success depends on teamwork' pokazuje co jest czynnikiem decydującym. Nie 'depend of' ani 'depend from'. To bardzo częste w biznesie i życiu dla opisywania powiązań przyczynowych między czynnikami."
      },
      {
        id: "vprep_3",
        question: "She's very good _____ mathematics and always gets the highest scores in exams.",
        translation: "(Jest bardzo dobra w matematyce i zawsze dostaje najwyższe wyniki na egzaminach)",
        options: ["at", "in", "with", "for"],
        correct: "at",
        explanation: "'Good at' dla umiejętności i zdolności! Zawsze 'at' po 'good' gdy mówisz o talentach. 'Good at math/sports/cooking' - wszystkie używają 'at'. Różne od 'good for' (pożyteczny dla) czy 'good with' (skuteczny w obsłudze). 'At' wskazuje na obszar ekspertyzy lub talentu."
      },
      {
        id: "vprep_4",
        question: "I'm looking _____ my glasses everywhere but can't find them anywhere in the house!",
        translation: "(Szukam moich okularów wszędzie ale nie mogę ich znaleźć nigdzie w domu!)",
        options: ["for", "at", "after", "to"],
        correct: "for",
        explanation: "'Look for' znaczy szukać czegoś zagubionego! 'For' wskazuje cel poszukiwania. Różne od 'look at' (patrzeć na coś), 'look after' (opiekować się), 'look into' (badać). Ten sam czasownik 'look' ale całkiem różne znaczenia zależnie od przyimka - to czyni phrasal verbs trudnymi."
      },
      {
        id: "vprep_5",
        question: "Do you believe _____ ghosts and supernatural phenomena or think it's all nonsense?",
        translation: "(Czy wierzysz w duchy i zjawiska nadprzyrodzone czy myślisz że to wszystko bzdury?)",
        options: ["in", "on", "at", "to"],
        correct: "in",
        explanation: "'Believe in' znaczy wierzyć w istnienie czegoś! 'In' wskazuje na wiarę w rzeczywistość konceptu. 'Believe in ghosts/God/love' - wszystkie używają 'in'. Różne od 'believe someone' (ufać że mówią prawdę) gdzie nie ma przyimka. 'In' wskazuje na filozoficzną lub egzystencjalną wiarę."
      },
      {
        id: "vprep_6",
        question: "She apologized _____ me for being late to our important lunch meeting today.",
        translation: "(Przeprosiła mnie za spóźnienie się na nasze ważne spotkanie lunchowe dzisiaj)",
        options: ["to", "for", "at", "with"],
        correct: "to",
        explanation: "'Apologize to' + osoba, 'apologize for' + rzecz! 'Apologize to me' wskazuje KOMU przepraszasz. 'For being late' wyjaśnia ZA CO. Możesz używać obu razem: 'apologized to me for being late'. Struktury: apologize to someone, apologize for something. To ważna różnica w kierunku przeprosin."
      },
      {
        id: "vprep_7",
        question: "I need to concentrate _____ my studies if I want to pass the difficult final exam.",
        translation: "(Muszę się skoncentrować na moich studiach jeśli chcę zdać trudny końcowy egzamin)",
        options: ["on", "at", "in", "to"],
        correct: "on",
        explanation: "'Concentrate on' znaczy skupić uwagę na czymś! Zawsze 'on' po 'concentrate'. 'On' wskazuje miejsce twojego mentalnego focus. 'Concentrate on studies/work/problem' - wszystkie z 'on'. To o kierowaniu całej energii umysłowej na jedno zadanie lub obszar."
      },
      {
        id: "vprep_8",
        question: "The students are complaining _____ the amount of homework they get every single day.",
        translation: "(Studenci narzekają na ilość pracy domowej którą dostają każdego dnia)",
        options: ["about", "on", "of", "for"],
        correct: "about",
        explanation: "'Complain about' dla narzekań i skarg! Zawsze 'about' po 'complain'. Wskazujesz temat swojej niezadowolenia. 'Complain about homework/weather/service' - wszystkie używają 'about'. To wyrażanie niezadowolenia z konkretnym tematem jako focus."
      },
      {
        id: "vprep_9",
        question: "This book belongs _____ my sister, she lent it to me last week for reading.",
        translation: "(Ta książka należy do mojej siostry, pożyczyła mi ją w zeszłym tygodniu do czytania)",
        options: ["to", "for", "with", "of"],
        correct: "to",
        explanation: "'Belong to' dla własności! Zawsze 'to' po 'belong'. Wskazuje właściciela rzeczy. 'Belongs to my sister' identyfikuje kto jest prawdziwym posiadaczem. Nie można użyć innych przyimków. To bardzo częste dla wyjaśniania własności rzeczy które znajdujesz lub pożyczasz."
      },
      {
        id: "vprep_10",
        question: "I'm thinking _____ changing my job soon because I'm not happy with current situation.",
        translation: "(Myślę o zmianie pracy wkrótce, bo nie jestem zadowolony z obecnej sytuacji)",
        options: ["about", "of", "on", "to"],
        correct: "about",
        explanation: "'Think about' dla rozważania opcji lub planów! 'About' wskazuje temat twoich myśli. 'Thinking about changing' rozważa możliwość. Różne od 'think of' (przypomnieć sobie, mieć opinię). 'Think about' jest bardziej o aktywnym rozważaniu przyszłych akcji lub decyzji."
      },
      {
        id: "vprep_11",
        question: "She's always dreaming _____ traveling around the world and visiting exotic places.",
        translation: "(Zawsze marzy o podróżowaniu po świecie i odwiedzaniu egzotycznych miejsc)",
        options: ["about", "of", "for", "to"],
        correct: "about",
        explanation: "'Dream about' dla marzeń i aspiracji! Zarówno 'dream about' jak 'dream of' działają - bardzo podobne znaczenia. 'About' jest lekko częstsze. To wyrażanie pragnień i fantazji o przyszłości. Gdy mówisz o swoich ambicjach lub idealnym życiu, używasz 'dream about/of'."
      },
      {
        id: "vprep_12",
        question: "The teacher insisted _____ checking all our work carefully before we submitted it.",
        translation: "(Nauczyciel nalegał na sprawdzenie całej naszej pracy dokładnie zanim ją wysłaliśmy)",
        options: ["on", "in", "at", "to"],
        correct: "on",
        explanation: "'Insist on' dla mocnych wymagań! 'On' po 'insist' + gerund dla akcji których wymagasz. 'Insisted on checking' pokazuje że to nie było opcjonalne - wymagał tego stanowczo. To o stawianiu stopy mocno w wymaganiach, nie pozwalając na wyjątki czy skróty."
      },
      {
        id: "vprep_13",
        question: "We arrived _____ the airport three hours before our international flight was scheduled.",
        translation: "(Przyjechaliśmy na lotnisko trzy godziny przed tym jak nasz międzynarodowy lot był zaplanowany)",
        options: ["at", "to", "in", "on"],
        correct: "at",
        explanation: "'Arrive at' dla małych miejsc jak lotniska, stacje! 'At' wskazuje punkt dotarcia. Używaj 'arrive in' dla miast/krajów (arrive in London), 'arrive at' dla budynków/miejsc (arrive at the airport). To o osiąganiu konkretnej lokalizacji jako punkt docelowy podróży."
      },
      {
        id: "vprep_14",
        question: "I'm really tired _____ listening to his constant complaints about everything every day.",
        translation: "(Jestem naprawdę zmęczony słuchaniem jego ciągłych narzekań o wszystkim każdego dnia)",
        options: ["of", "from", "with", "by"],
        correct: "of",
        explanation: "'Tired of' dla frustracji z powtarzającą się sytuacją! 'Of' + gerund pokazuje że coś dzieje się za często i cię irytuje. 'Tired of listening' wyraża że straciłeś cierpliwość. Różne od 'tired from' (fizycznie zmęczony czymś). 'Tired of' to mentalna/emocjonalna frustracja."
      },
      {
        id: "vprep_15",
        question: "The book consists _____ ten chapters covering different historical periods and events.",
        translation: "(Książka składa się z dziesięciu rozdziałów obejmujących różne okresy historyczne i wydarzenia)",
        options: ["of", "from", "with", "by"],
        correct: "of",
        explanation: "'Consist of' dla składników lub części tworzących całość! Zawsze 'of' po 'consist'. Opisujesz co tworzy coś - elementy budujące całość. 'Consists of chapters' wyjaśnia strukturę. To używane dla wyjaśniania kompozycji - z czego coś jest zbudowane lub złożone."
      }
    ]
  },

  past_habits_detailed: {
    name: "Przeszłe nawyki - szczegółowo",
    description: "Used to, would, past simple dla przeszłości",
    icon: Timer,
    color: "from-orange-500 to-amber-600",
    level: "intermediate",
    questions: [
      {
        id: "past_hab_1",
        question: "When I was a child, I _____ spend every summer at my grandparents' farm in countryside.",
        translation: "(Kiedy byłem dzieckiem, spędzałem każde lato na farmie moich dziadków na wsi)",
        options: ["would", "used to", "was", "did"],
        correct: "would",
        explanation: "'Would' dla nostalgicznych wspomnień o powtarzających się akcjach! 'Would spend' wywołuje ciepłe wspomnienia. 'Would' jest bardziej emocjonalne i literackie niż 'used to' - maluje żywy obraz przeszłości. Używane gdy czule wspominasz powtarzające się momenty z przeszłości które już nie występują."
      },
      {
        id: "past_hab_2",
        question: "There _____ a beautiful old tree in this park, but it was cut down last year sadly.",
        translation: "(Było piękne stare drzewo w tym parku, ale zostało ścięte w zeszłym roku niestety)",
        options: ["used to be", "would be", "was being", "has been"],
        correct: "used to be",
        explanation: "'There used to be' dla rzeczy które istniały ale już nie! Nie możesz użyć 'would' dla stanów (tylko akcje). 'Used to be' pokazuje przeszłe istnienie które się zakończyło - drzewo było tam wcześniej. To wyraża smutek o utracie - coś co było częścią miejsca już nie istnieje."
      },
      {
        id: "past_hab_3",
        question: "My grandmother _____ bake fresh bread every Sunday morning for the whole family.",
        translation: "(Moja babcia piekła świeży chleb każdej niedzieli rano dla całej rodziny)",
        options: ["would", "used to", "was", "did"],
        correct: "would",
        explanation: "'Would' dla szczególnych, czułych wspomnień o regularnych akcjach! 'Would bake' wywołuje aromat i ciepło tych poranków. To bardziej poetyckie niż 'used to bake'. 'Would' sugeruje że to wspomnienie jest żywe i kochane - pamięć która wciąż cię porusza emocjonalnie."
      },
      {
        id: "past_hab_4",
        question: "I _____ live in a small apartment, but now I have a big house with garden.",
        translation: "(Mieszkałem w małym mieszkaniu, ale teraz mam duży dom z ogrodem)",
        options: ["used to", "would", "was", "have"],
        correct: "used to",
        explanation: "'Used to' pokazuje kontrast między przeszłością a teraźniejszością! Mieszkałeś w mieszkaniu (przeszłość) ale teraz dom (teraźniejszość) - wyraźna zmiana sytuacji życiowej. 'Used to' podkreśla różnicę między wtedy a teraz. To celebruje poprawę lub zmianę w okolicznościach życiowych."
      },
      {
        id: "past_hab_5",
        question: "As children, we _____ play in the street until dark without any worries or fears.",
        translation: "(Jako dzieci, bawiliśmy się na ulicy do zmroku bez żadnych zmartwień czy obaw)",
        options: ["would", "used to", "were", "did"],
        correct: "would",
        explanation: "'Would play' dla żywych wspomnień z dzieciństwa! Bardziej emocjonalne niż 'used to play'. 'Would' wywołuje nostalgię - czasy kiedy życie było prostsze. To o czułym wspominaniu beztroski młodości - 'would' dodaje ciepło do wspomnienia."
      },
      {
        id: "past_hab_6",
        question: "He _____ smoke heavily, but he quit five years ago for health reasons completely.",
        translation: "(Palił dużo, ale rzucił pięć lat temu ze względów zdrowotnych całkowicie)",
        options: ["used to", "would", "was", "has"],
        correct: "used to",
        explanation: "'Used to' dla całkowicie zakończonych nawyków z wyraźnym zatrzymaniem! Palił (przeszłość) ale rzucił (zmiana) - kontrast jest kluczowy. 'Used to smoke' podkreśla że to już się nie dzieje. To celebruje pozytywną zmianę zdrowotną - stary zły nawyk który został pokonany."
      },
      {
        id: "past_hab_7",
        question: "When we were students, we _____ stay up all night studying before important exams.",
        translation: "(Kiedy byliśmy studentami, nie spaliśmy całą noc ucząc się przed ważnymi egzaminami)",
        options: ["would", "used to", "were", "did"],
        correct: "would",
        explanation: "'Would' dla dramatycznych, żywych opisów przeszłych akcji! 'Would stay up all night' maluje intensywny obraz nocnych sesji uczenia. Bardziej opisowe niż 'used to' - czujesz desperację i energię tych nocy. 'Would' jest jak opowiadanie historii - dodaje życie do przeszłych wydarzeń."
      },
      {
        id: "past_hab_8",
        question: "Did you _____ to play any musical instruments when you were younger and more energetic?",
        translation: "(Czy grałeś na jakichś instrumentach muzycznych, kiedy byłeś młodszy i bardziej energiczny?)",
        options: ["use", "used", "would", "were using"],
        correct: "use",
        explanation: "Pytania z 'used to' używają 'did you use to'! 'Used' staje się formą bazową 'use' po 'did'. To standardowa formacja pytań. Nie 'did you used to' (podwójna przeszłość jest błędem). Pyta o przeszłe nawyki które już nie występują - szukasz informacji o ich przeszłych hobby."
      },
      {
        id: "past_hab_9",
        question: "My father _____ take us fishing by the lake every Saturday morning in summer.",
        translation: "(Mój ojciec zabierał nas na ryby nad jezioro każdej soboty rano w lecie)",
        options: ["would", "used to", "was", "did"],
        correct: "would",
        explanation: "'Would' dla drogocennych rodzinnych wspomnień! 'Would take us fishing' wywołuje obraz tych szczęśliwych poranków. To bardziej storytelling niż suche stwierdzenie faktów - 'would' dodaje nostalgiczne ciepło. Używane gdy opowiadasz o kochanych tradycjach rodzinnych z przeszłości."
      },
      {
        id: "past_hab_10",
        question: "She didn't _____ to eat vegetables at all, but now she loves healthy food.",
        translation: "(Wcale nie jadła warzyw, ale teraz kocha zdrowe jedzenie)",
        options: ["use", "used", "would", "was"],
        correct: "use",
        explanation: "Negatywne 'used to' staje się 'didn't use to'! Forma bazowa 'use' po 'didn't', nie 'used'. Nie jadła warzyw (przeszłość) ale teraz kocha (zmiana). To pokazuje dramatyczną transformację w nawykach żywieniowych - całkowite odwrócenie preferencji kulinarnych."
      },
      {
        id: "past_hab_11",
        question: "We _____ walk to school every day because we lived very close, just five minutes away.",
        translation: "(Chodziliśmy do szkoły codziennie, bo mieszkaliśmy bardzo blisko, tylko pięć minut)",
        options: ["would", "used to", "were", "did"],
        correct: "would",
        explanation: "'Would walk' dla rutynowych szczęśliwych wspomnień! Oba 'would' i 'used to' działają tutaj, ale 'would' brzmi cieplej i bardziej nostalgicznie. 'Would' wywołuje obraz codziennych spacerów - może z przyjaciółmi, rozmawiając i śmiejąc się. To o codziennej rutynie która była przyjemną częścią życia."
      },
      {
        id: "past_hab_12",
        question: "_____ there _____ to be a cinema on this street corner years ago?",
        translation: "(Czy kiedyś było kino na tym rogu ulicy lata temu?)",
        options: ["Did / use", "Was / used", "Did / used", "Was / use"],
        correct: "Did / use",
        explanation: "Pytania o przeszłe istnienie: 'Did there use to be'! Forma bazowa 'use' po 'did'. Pytasz czy miejsce istniało w przeszłości ale już nie teraz. Struktura łączy pytanie 'there is/are' z 'used to' - trochę złożona ale logiczna. To typowe dla pytań o zmiany w dzielnicach i miastach."
      },
      {
        id: "past_hab_13",
        question: "I _____ not _____ to like spicy food, but living in Mexico changed my taste completely.",
        translation: "(Nie lubiłem pikantnego jedzenia, ale mieszkanie w Meksyku całkowicie zmieniło mój gust)",
        options: ["did / use", "was / used", "did / used", "have / used"],
        correct: "did / use",
        explanation: "Negatyw w pytaniu lub formal: 'did not use to'! 'Did not use to like' (formalne) lub 'didn't use to like' (casualowe). Forma bazowa 'use' po 'did'. Nie lubiłeś (przeszłość) ale teraz lubisz (zmiana). To o adaptacji do nowej kultury - jak doświadczenia zmieniają preferencje."
      },
      {
        id: "past_hab_14",
        question: "My teacher _____ always encourage us to ask questions and never be afraid of mistakes.",
        translation: "(Mój nauczyciel zawsze zachęcał nas do zadawania pytań i nigdy nie bać się błędów)",
        options: ["would", "used to", "was", "did"],
        correct: "would",
        explanation: "'Would always' dla pozytywnych, inspirujących wspomnień o kimś! 'Would encourage' pokazuje charakterystyczną cechę nauczyciela - jego typowe zachowanie. To ciepłe wspomnienie o wspierającej osobie z przeszłości. 'Would' czyni to bardziej osobiste i emocjonalne niż neutralne 'used to'."
      },
      {
        id: "past_hab_15",
        question: "I'm slowly getting _____ to waking up early every morning for my new job schedule.",
        translation: "(Powoli przyzwyczajam się do wstawania wcześnie każdego ranka na mój nowy grafik pracy)",
        options: ["used", "use", "accustomed", "adapted"],
        correct: "used",
        explanation: "'Getting used to' pokazuje proces adaptacji w toku! To RÓŻNE od 'used to' (przeszły nawyk). 'Getting used to + gerund' o stawaniu się komfortowym z nową sytuacją. 'Slowly getting used' podkreśla że adaptacja zajmuje czas - to stopniowy proces przyzwyczajania się."
      }
    ]
  },

  causative_have_get: {
    name: "Have/Get something done",
    description: "Zlecanie czynności innym",
    icon: Lock,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "caus_1",
        question: "I need to have my car _____ this weekend because it's making strange noises.",
        translation: "(Muszę naprawić samochód w ten weekend, bo wydaje dziwne dźwięki)",
        options: ["serviced", "service", "servicing", "to service"],
        correct: "serviced",
        explanation: "'Have + obiekt + past participle' dla usług które ktoś wykonuje! 'Have my car serviced' = mechanik naprawia (nie ty sam). Past participle pokazuje że ktoś inny robi to profesjonalnie. To konstrukcja bierna - fokus na tym CO jest robione, nie KTO to robi."
      },
      {
        id: "caus_2",
        question: "She's getting her hair _____ at the salon tomorrow afternoon for wedding.",
        translation: "(Robi sobie włosy w salonie jutro po południu na ślub)",
        options: ["done", "do", "doing", "to do"],
        correct: "done",
        explanation: "'Get + obiekt + past participle' jest lekko bardziej casualowe niż 'have'! 'Getting her hair done' = fryzjer robi włosy. 'Get' sugeruje więcej osobistego wysiłku w organizacji niż 'have'. Oba znaczą to samo ale 'get' brzmi bardziej aktywne - ty aranżujesz usługę."
      },
      {
        id: "caus_3",
        question: "Where did you have that beautiful tattoo _____ on your arm? It looks very artistic!",
        translation: "(Gdzie zrobiłeś ten piękny tatuaż na ramieniu? Wygląda bardzo artystycznie!)",
        options: ["done", "do", "doing", "made"],
        correct: "done",
        explanation: "'Have something done' w pytaniach! 'Have that tattoo done' pyta gdzie profesjonalista wykonał usługę. To pokazuje że ty nie zrobiłeś sam - poszedłeś do tatuatora. Pytanie o WHERE szuka lokalizacji studia lub artysty który to stworzył."
      },
      {
        id: "caus_4",
        question: "We're having our house _____ next month, the walls really need fresh color.",
        translation: "(Malujemy dom w przyszłym miesiącu, ściany naprawdę potrzebują świeżego koloru)",
        options: ["painted", "paint", "painting", "to paint"],
        correct: "painted",
        explanation: "'Having our house painted' = zatrudniamy malarzy! Nie malujesz sam - profesjonaliści robią pracę. Present continuous 'are having' dla przyszłych ustaleń pokazuje że już zarezerwowałeś malarzy. To o zlecaniu dużych domowych projektów profesjonalistom zamiast DIY."
      },
      {
        id: "caus_5",
        question: "I got my computer _____ after it crashed and lost all my important files yesterday.",
        translation: "(Naprawiłem komputer po tym jak się zawiesił i stracił wszystkie moje ważne pliki wczoraj)",
        options: ["fixed", "fix", "fixing", "to fix"],
        correct: "fixed",
        explanation: "'Got my computer fixed' używa past simple dla przeszłej usługi! Technik naprawił (nie ty). 'Got' + past participle w przeszłości opisuje ukończoną usługę. To o reakcji na problem - komputer się zepsuł więc zorganizowałeś naprawę przez profesjonalistę."
      },
      {
        id: "caus_6",
        question: "You should get your eyes _____ regularly, especially if you spend hours at computer.",
        translation: "(Powinieneś badać oczy regularnie, szczególnie jeśli spędzasz godziny przy komputerze)",
        options: ["tested", "test", "testing", "to test"],
        correct: "tested",
        explanation: "'Get your eyes tested' dla checkupów medycznych! Optometrysta sprawdza (nie sam). 'Should get tested' to rada o regularnej opiece zdrowotnej. Przyimek sprawia że to o zawodowym badaniu - idzie do eksperta dla profesjonalnej oceny wzroku."
      },
      {
        id: "vprep_7",
        question: "They had their wedding photos _____ by a professional photographer from the city.",
        translation: "(Mieli zdjęcia ślubne robione przez profesjonalnego fotografa z miasta)",
        options: ["taken", "take", "taking", "took"],
        correct: "taken",
        explanation: "'Had photos taken' dla specjalnych okazji! Fotograf robił zdjęcia profesjonalnie. 'Had' w past simple opisuje usługę podczas wydarzenia. To o zatrudnianiu ekspertów dla ważnych momentów życiowych - chcesz wysoką jakość więc płacisz profesjonaliście."
      },
      {
        id: "caus_8",
        question: "I'm going to have my teeth _____ at the dentist next week for cleaning.",
        translation: "(Będę czyścić zęby u dentysty w przyszłym tygodniu)",
        options: ["cleaned", "clean", "cleaning", "to clean"],
        correct: "cleaned",
        explanation: "'Going to have teeth cleaned' dla przyszłych umówionych usług! Dentysta wyczyści (zawodowo). 'Going to' pokazuje że termin jest już zarezerwowany. To o regularnej konserwacji zdrowia - rutynowe profesjonalne czyszczenie dla utrzymania higieny jamy ustnej."
      },
      {
        id: "caus_9",
        question: "She wants to get her nails _____ before the important job interview tomorrow morning.",
        translation: "(Chce zrobić paznokcie przed ważnym wywiadem o pracę jutro rano)",
        options: ["done", "do", "doing", "made"],
        correct: "done",
        explanation: "'Get nails done' dla usług kosmetycznych! Manicurzystka robi paznokcie. 'Wants to get' wyraża plan wizyty w salonie. To o przygotowaniu się do ważnego wydarzenia - dbanie o wygląd przez zawodową usługę żeby czuć się pewnie."
      },
      {
        id: "caus_10",
        question: "We had our passports _____ last month because the old ones were expiring soon.",
        translation: "(Odnowiliśmy nasze paszporty w zeszłym miesiącu, bo stare wygasały wkrótce)",
        options: ["renewed", "renew", "renewing", "to renew"],
        correct: "renewed",
        explanation: "'Had passports renewed' dla oficjalnych dokumentów! Urzędnicy procesowali odnowienie. 'Had' + past participle dla administracyjnych usług. To o procedurach biurokratycznych - idziesz do agencji która wykonuje formalności dla ciebie. Czasem nie masz wyboru - dokumenty wymagają profesjonalnego przetworzenia."
      },
      {
        id: "caus_11",
        question: "I need to get this document _____ into Spanish for my international business meeting.",
        translation: "(Muszę przetłumaczyć ten dokument na hiszpański na moje międzynarodowe spotkanie biznesowe)",
        options: ["translated", "translate", "translating", "to translate"],
        correct: "translated",
        explanation: "'Get document translated' dla usług tłumaczeniowych! Profesjonalny tłumacz wykonuje pracę. 'Need to get' wyraża konieczność zorganizowania usługi. To o biznesowej potrzebie - wymaga dokładności więc zatrudniasz eksperta który zna oba języki perfekcyjnie."
      },
      {
        id: "caus_12",
        question: "They're having their whole apartment _____ before they move in next month.",
        translation: "(Remontują całe mieszkanie zanim się wprowadzą w przyszłym miesiącu)",
        options: ["renovated", "renovate", "renovating", "to renovate"],
        correct: "renovated",
        explanation: "'Having apartment renovated' dla dużych projektów budowlanych! Contractors robią renowację profesjonalnie. Present continuous dla przyszłości pokazuje że praca jest już zaplanowana. To o przygotowaniu przestrzeni przed wprowadzeniem - chcesz żeby było perfekcyjne więc zatrudniasz zespół."
      },
      {
        id: "caus_13",
        question: "Did you have your bike _____ or did you fix it yourself at home?",
        translation: "(Czy naprawiłeś rower czy naprawiłeś go sam w domu?)",
        options: ["repaired", "repair", "repairing", "to repair"],
        correct: "repaired",
        explanation: "'Have bike repaired' kontra zrobić sam! Pytanie rozróżnia między płaceniem komuś (have it repaired) a DIY (fix it yourself). 'Have repaired' = poszedłeś do sklepu rowerowego, 'fixed yourself' = zrobiłeś sam. To o wyborze między convenience a oszczędnościami."
      },
      {
        id: "caus_14",
        question: "She's getting her wedding dress _____ specially by a famous designer from Paris.",
        translation: "(Ma sukienkę ślubną szytą specjalnie przez słynnego projektanta z Paryża)",
        options: ["made", "make", "making", "to make"],
        correct: "made",
        explanation: "'Getting dress made' dla customowych kreacji! Designer tworzy na zamówienie (bespoke). 'Getting made' podkreśla proces tworzenia - to nie gotowy produkt ze sklepu. To o luksusie mieć coś stworzonego specjalnie dla ciebie - personalizowana usługa wysokiej jakości."
      },
      {
        id: "caus_15",
        question: "We should have the heating system _____ before winter starts and temperatures drop.",
        translation: "(Powinniśmy sprawdzić system ogrzewania zanim zima zacznie się i temperatury spadną)",
        options: ["checked", "check", "checking", "to check"],
        correct: "checked",
        explanation: "'Should have system checked' dla prewencyjnej konserwacji! Technik sprawdza czy wszystko działa. 'Should have checked' to rada o działaniu przed problemem. To o zapobieganiu - sprawdzasz teraz żeby uniknąć awarii w środku zimy gdy najbardziej potrzebujesz ogrzewania."
      }
    ]
  },

  inversion_emphasis: {
    name: "Inwersja dla emfazy",
    description: "Never have I, Rarely does she...",
    icon: Link2,
    color: "from-fuchsia-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "inv_1",
        question: "Never _____ I _____ such a beautiful sunset until tonight's spectacular sky view!",
        translation: "(Nigdy nie widziałem tak pięknego zachodu słońca aż do dzisiejszego spektakularnego widoku nieba!)",
        options: ["have / seen", "I have / seen", "did / see", "I did / see"],
        correct: "have / seen",
        explanation: "Negatywny przysłówek na początku powoduje inwersję! 'Never have I seen' odwraca normalny szyk 'I have never seen'. Pomocnik 'have' przychodzi przed podmiotem 'I'. To bardzo dramatyczne i literackie - używane dla maksymalnej emfazy na rzadkości lub ekstremie doświadczenia."
      },
      {
        id: "inv_2",
        question: "Rarely _____ she _____ late for work, she's usually very punctual and responsible.",
        translation: "(Rzadko spóźnia się do pracy, zazwyczaj jest bardzo punktualna i odpowiedzialna)",
        options: ["does / arrive", "she does / arrive", "is / arriving", "she is / arriving"],
        correct: "does / arrive",
        explanation: "'Rarely' na starcie wymaga inwersji! 'Rarely does she arrive' odwraca 'she rarely arrives'. Pomocnik 'does' przed podmiotem. To podkreśla jak wyjątkowe jest jej spóźnienie - prawie nigdy się nie zdarza. Inwersja czyni pozytywną cechę (punktualność) bardziej imponującą."
      },
      {
        id: "inv_3",
        question: "Only when I arrived home _____ I _____ that I had left my wallet at the restaurant.",
        translation: "(Dopiero kiedy dotarłem do domu zdałem sobie sprawę że zostawiłem portfel w restauracji)",
        options: ["did / realize", "I did / realize", "do / realize", "I realize"],
        correct: "did / realize",
        explanation: "'Only when' na początku wywołuje inwersję! 'Did I realize' odwraca normalny 'I realized'. To podkreśla MOMENT realizacji - nie wcześniej, tylko wtedy. Inwersja dramatyzuje późne odkrycie. Używane gdy coś ważnego stało się jasne dopiero w konkretnym momencie."
      },
      {
        id: "inv_4",
        question: "Not only _____ he _____ English, but he also speaks French, German, and Italian fluently!",
        translation: "(Nie tylko mówi po angielsku, ale też mówi po francusku, niemiecku i włosku płynnie!)",
        options: ["does / speak", "he does / speak", "is / speaking", "he speaks"],
        correct: "does / speak",
        explanation: "'Not only' wymaga inwersji w pierwszej części! 'Does he speak' odwraca szyk. 'But also' w drugiej części nie potrzebuje inwersji. To buduje od imponującego (angielski) do jeszcze bardziej (cztery języki!). Struktura podkreśla progresję umiejętności."
      },
      {
        id: "inv_5",
        question: "Under no circumstances _____ you _____ this door unlocked when leaving the office.",
        translation: "(W żadnych okolicznościach nie powinieneś zostawiać tych drzwi niezamkniętych opuszczając biuro)",
        options: ["should / leave", "you should / leave", "must / leave", "you must / leave"],
        correct: "should / leave",
        explanation: "'Under no circumstances' to najsilniejszy zakaz z inwersją! 'Should you leave' odwraca normalny szyk. To ekstremalna emfaza - absolutnie nigdy nie rób tego. Bardzo formalne i autorytatywne. Używane w zasadach bezpieczeństwa i prawnych ostrzeżeniach gdzie nie ma miejsca na wyjątki."
      },
      {
        id: "inv_6",
        question: "Seldom _____ we _____ such generous hospitality anywhere we've traveled before.",
        translation: "(Rzadko spotykaliśmy tak hojną gościnność gdziekolwiek podróżowaliśmy wcześniej)",
        options: ["have / encountered", "we have / encountered", "do / encounter", "we encounter"],
        correct: "have / encountered",
        explanation: "'Seldom' powoduje inwersję! 'Have we encountered' odwraca 'we have seldom encountered'. To podkreśla jak rzadkie i specjalne jest doświadczenie. Inwersja czyni komplement silniejszym - ta gościnność wyróżnia się jako wyjątkowa w całej twojej historii podróży."
      },
      {
        id: "inv_7",
        question: "Little _____ she _____ that her life was about to change completely and dramatically.",
        translation: "(Mało wiedziała że jej życie miało się całkowicie i dramatycznie zmienić)",
        options: ["did / know", "she did / know", "does / know", "she knows"],
        correct: "did / know",
        explanation: "'Little did she know' to dramatyczna fraza ignorancji! Odwrócenie: 'did she know' zamiast 'she knew'. To bardzo narracyjne - używane w opowiadaniach dla budowania suspensu. Pokazuje że osoba była nieświadoma zbliżających się wielkich zmian - classic storytelling device."
      },
      {
        id: "inv_8",
        question: "No sooner _____ we _____ the house than it started raining heavily outside.",
        translation: "(Ledwo opuściliśmy dom jak zaczęło mocno padać na zewnątrz)",
        options: ["had / left", "we had / left", "did / leave", "we left"],
        correct: "had / left",
        explanation: "'No sooner + past perfect + than' z inwersją! 'Had we left' odwraca szyk. To pokazuje natychmiastową sekwencję - opuściliście i NATYCHMIAST deszcz. Past perfect podkreśla że wyjście było chwilę przed deszczem. Bardzo literacka konstrukcja dla dramatyzowania perfect/unfortunate timing."
      },
      {
        id: "inv_9",
        question: "Only after trying many times _____ I _____ to solve the complex puzzle successfully.",
        translation: "(Dopiero po próbowaniu wiele razy udało mi się rozwiązać złożoną łamigłówkę pomyślnie)",
        options: ["did / manage", "I did / manage", "was / able", "I managed"],
        correct: "did / manage",
        explanation: "'Only after' na początku wymaga inwersji! 'Did I manage' odwraca szyk. To podkreśla że sukces przyszedł TYLKO po wielu nieudanych próbach. Inwersja dramatyzuje wytrwałość potrzebną - nie było łatwo, potrzebowało wielu attempts przed breakthrough."
      },
      {
        id: "inv_10",
        question: "Not until I saw the test results _____ I _____ how much I had improved recently.",
        translation: "(Dopiero kiedy zobaczyłem wyniki testu zrozumiałem ile się ostatnio poprawiłem)",
        options: ["did / understand", "I did / understand", "do / understand", "I understand"],
        correct: "did / understand",
        explanation: "'Not until' powoduje inwersję dla dramatycznego odkrycia! 'Did I understand' odwraca normalny szyk. To podkreśla MOMENT realizacji - wcześniej nie wiedziałeś jak bardzo się poprawiłeś. Inwersja dodaje emocjonalny impakt do zaskakującego odkrycia postępu."
      },
      {
        id: "inv_11",
        question: "Hardly ever _____ he _____ his temper, even in the most stressful situations.",
        translation: "(Prawie nigdy nie traci panowania, nawet w najbardziej stresujących sytuacjach)",
        options: ["does / lose", "he does / lose", "is / losing", "he loses"],
        correct: "does / lose",
        explanation: "'Hardly ever' to negatywny przysłówek wymagający inwersji! 'Does he lose' odwraca szyk. To podkreśla jego wyjątkową kontrolę emocjonalną - ekstremalnie rzadko się złości. Inwersja sprawia że jego spokój brzmi bardziej imponująco - to prawdziwa cecha charakteru pokazana przez gramatyczną emfazę."
      },
      {
        id: "inv_12",
        question: "Never again _____ I _____ that mistake after learning from this expensive lesson!",
        translation: "(Nigdy więcej nie popełnię tego błędu po nauczeniu się z tej kosztownej lekcji!)",
        options: ["will / make", "I will / make", "shall / make", "I make"],
        correct: "will / make",
        explanation: "'Never again' z inwersją dla silnej determinacji! 'Will I make' odwraca normalny szyk przyszłości. To jak przysięga - obiecujesz sobie że to się nie powtórzy. Inwersja dodaje siłę do zobowiązania - to nie casualowa myśl, to stanowcza decyzja wynikająca z bolesnego doświadczenia."
      },
      {
        id: "inv_13",
        question: "So tired _____ I after the long journey that I fell asleep immediately in bed.",
        translation: "(Tak zmęczony byłem po długiej podróży że zasnąłem natychmiast w łóżku)",
        options: ["was", "I was", "am", "I am"],
        correct: "was",
        explanation: "'So + przymiotnik' na początku powoduje inwersję! 'So tired was I' odwraca 'I was so tired'. To bardzo literackie i poetyckie - nie używane w casualowej mowie. Podkreśla ekstremalne zmęczenie prowadzące do natychmiastowego snu. Bardzo formalna i dramatyczna konstrukcja."
      },
      {
        id: "inv_14",
        question: "At no time _____ he _____ that he was responsible for the serious mistake.",
        translation: "(Nigdy nie przyznał że był odpowiedzialny za poważny błąd)",
        options: ["did / admit", "he did / admit", "has / admitted", "he admitted"],
        correct: "did / admit",
        explanation: "'At no time' wymaga inwersji dla silnej negacji! 'Did he admit' odwraca szyk. To bardzo formalne - używane w prawnych lub oficjalnych kontekstach. Podkreśla że przez cały czas nie przyznał się - kompletny brak admission. Inwersja czyni zaprzeczenie kategorycznym i definitywnym."
      },
      {
        id: "inv_15",
        question: "Only by working together _____ we _____ this difficult project on time successfully.",
        translation: "(Tylko pracując razem możemy ukończyć ten trudny projekt na czas pomyślnie)",
        options: ["can / complete", "we can / complete", "will / complete", "we will / complete"],
        correct: "can / complete",
        explanation: "'Only by' na początku powoduje inwersję z modalnym! 'Can we complete' odwraca normalny szyk. To podkreśla że współpraca jest JEDYNYM sposobem na sukces - nie ma alternatywy. Inwersja sprawia że wymóg pracy zespołowej brzmi absolutny i niezbędny dla osiągnięcia celu."
      }
    ]
  },

  subjunctive_mood: {
    name: "Tryb łączący",
    description: "I suggest that he go, It's important that...",
    icon: Timer,
    color: "from-rose-500 to-pink-600",
    level: "advanced",
    questions: [
      {
        id: "subj_1",
        question: "I suggest that she _____ a doctor immediately about those concerning symptoms.",
        translation: "(Sugeruję żeby zobaczyła lekarza natychmiast o tych niepokojących symptomach)",
        options: ["see", "sees", "saw", "will see"],
        correct: "see",
        explanation: "Po 'suggest that' używaj formy bazowej czasownika (subjunctive)! 'That she see' nie 'sees' - bez 's' dla trzeciej osoby. To formalna gramatyka często pomijana w casualowym amerykańskim (używają 'should see'), ale poprawna forma. Czasownik bazowy po suggest/recommend/insist/demand."
      },
      {
        id: "subj_2",
        question: "It's essential that everyone _____ on time for the important company meeting tomorrow.",
        translation: "(Jest niezbędne żeby wszyscy byli na czas na ważne spotkanie firmowe jutro)",
        options: ["be", "is", "are", "will be"],
        correct: "be",
        explanation: "'It's essential that' + forma bazowa! 'Everyone be' używa bazowego 'be', nie 'is'. To subjunctive mood dla wyrażania konieczności. Po przymiotnikach wyrażających ważność (essential, vital, crucial, important) używaj subjunctive. To formalne wymaganie gdzie czasownik nie zmienia się dla osoby."
      },
      {
        id: "subj_3",
        question: "The doctor recommended that he _____ smoking immediately for his health and future.",
        translation: "(Lekarz zalecił żeby rzucił palenie natychmiast dla swojego zdrowia i przyszłości)",
        options: ["stop", "stops", "stopped", "will stop"],
        correct: "stop",
        explanation: "'Recommend that' + forma bazowa! 'That he stop' bez 's'. To medyczna rada wyrażona formalnie. Subjunctive pokazuje że to zalecenie, nie fakt - może posłucha może nie. Czasowniki doradzania (recommend, suggest, propose) wszystkie używają subjunctive dla ich zaleceń."
      },
      {
        id: "subj_4",
        question: "It's important that she _____ all the instructions carefully before starting procedure.",
        translation: "(Jest ważne żeby przeczytała wszystkie instrukcje dokładnie przed rozpoczęciem procedury)",
        options: ["read", "reads", "will read", "is reading"],
        correct: "read",
        explanation: "'It's important that' używa subjunctive! 'She read' (forma bazowa, wymawiana jak 'reed'). To o konieczności akcji przed inną akcją. Subjunctive po 'important/necessary/vital' podkreśla że to nie opcja - to warunek sukcesu lub bezpieczeństwa."
      },
      {
        id: "subj_5",
        question: "I insist that you _____ this money for helping me move all my furniture yesterday.",
        translation: "(Nalegam żebyś wziął te pieniądze za pomoc w przeprowadzce wszystkich moich mebli wczoraj)",
        options: ["take", "takes", "took", "will take"],
        correct: "take",
        explanation: "'Insist that' + subjunctive dla silnych wymagań! 'That you take' używa formy bazowej. 'Insist' jest mocne - to nie prośba, to stanowcze żądanie. Subjunctive sprawia że to brzmi jak nie-negotiable requirement. To o nieustępliwości - nie przyjmiesz odmowy."
      },
      {
        id: "subj_6",
        question: "It's crucial that the report _____ submitted by Friday deadline without any delays.",
        translation: "(Jest kluczowe żeby raport został wysłany do piątkowego deadline bez żadnych opóźnień)",
        options: ["be", "is", "will be", "was"],
        correct: "be",
        explanation: "'It's crucial that' + subjunctive! 'Report be submitted' używa formy bazowej 'be'. To o krytycznym wymaganiu biznesowym. Passive voice z subjunctive: 'be + past participle'. To formalny sposób wyrażania absolutnej konieczności w profesjonalnych kontekstach - nie ma miejsca na opóźnienia."
      },
      {
        id: "subj_7",
        question: "The committee demands that all participants _____ their registration forms early.",
        translation: "(Komitet wymaga żeby wszyscy uczestnicy wysłali swoje formularze rejestracyjne wcześnie)",
        options: ["submit", "submits", "submitted", "will submit"],
        correct: "submit",
        explanation: "'Demand that' + subjunctive dla oficjalnych wymagań! 'All participants submit' - forma bazowa mimo liczby mnogiej. To o formalnych zasadach organizacyjnych. Czasowniki wymagania (demand, require, request) używają subjunctive dla pokazania że to obowiązkowe, nie opcjonalne."
      },
      {
        id: "subj_8",
        question: "She proposed that the meeting _____ postponed until next week when everyone can attend.",
        translation: "(Zaproponowała żeby spotkanie zostało przełożone na przyszły tydzień kiedy wszyscy mogą uczestniczyć)",
        options: ["be", "is", "was", "will be"],
        correct: "be",
        explanation: "'Propose that' + subjunctive! 'Meeting be postponed' używa bazowego 'be' w passive voice. To formalna propozycja zmiany. Subjunctive pokazuje że to sugestia do rozważenia, nie zadekretowany fakt. Używane w biznesowych dyskusjach dla proponowania zmian w planach."
      },
      {
        id: "subj_9",
        question: "It's vital that he _____ the truth about what really happened during incident.",
        translation: "(Jest istotne żeby powiedział prawdę o tym co naprawdę się stało podczas incydentu)",
        options: ["tell", "tells", "told", "will tell"],
        correct: "tell",
        explanation: "'It's vital that' wymaga subjunctive! 'He tell' używa formy bazowej bez 's'. To o krytycznej potrzebie uczciwości. Przymiotniki ważności (vital, essential, imperative) wszystkie wywołują subjunctive. To podkreśla że prawda jest absolutnie konieczna - nie można jej uniknąć."
      },
      {
        id: "subj_10",
        question: "The law requires that all drivers _____ valid insurance when operating vehicles.",
        translation: "(Prawo wymaga żeby wszyscy kierowcy mieli ważne ubezpieczenie podczas prowadzenia pojazdów)",
        options: ["have", "has", "had", "will have"],
        correct: "have",
        explanation: "'Require that' + subjunctive dla prawnych wymagań! 'All drivers have' - forma bazowa mimo liczby mnogiej. To o obowiązkach prawnych. Język prawny często używa subjunctive dla specyfikacji wymagań - sprawia że brzmi oficjalnie i non-negotiable."
      },
      {
        id: "subj_11",
        question: "I wish that he _____ here to see how successful our project became eventually.",
        translation: "(Chciałbym żeby był tutaj żeby zobaczyć jak udany nasz projekt ostatecznie się stał)",
        options: ["were", "was", "is", "will be"],
        correct: "were",
        explanation: "'Wish that' używa 'were' dla wszystkich osób! 'He were here' nie 'was'. To subjunctive dla nierealnych życzeń - nie jest tutaj (może zmarł lub odszedł). 'Were' zamiast 'was' jest formalnie poprawne w wishful thinking. Pokazuje że sytuacja jest przeciwna faktom obecnym."
      },
      {
        id: "subj_12",
        question: "It's imperative that the password _____ changed regularly for security purposes.",
        translation: "(Jest konieczne żeby hasło było zmieniane regularnie dla celów bezpieczeństwa)",
        options: ["be", "is", "was", "will be"],
        correct: "be",
        explanation: "'It's imperative that' + subjunctive! 'Password be changed' używa bazowego 'be' z passive. To o security requirements - nie ma miejsca na elastyczność. 'Imperative' jest najsilniejszym przymiotnikiem konieczności - subjunctive podkreśla absolutną naturę wymogu bezpieczeństwa."
      },
      {
        id: "subj_13",
        question: "The teacher asked that all students _____ their phones off during class time.",
        translation: "(Nauczyciel poprosił żeby wszyscy studenci wyłączyli swoje telefony podczas zajęć)",
        options: ["turn", "turns", "turned", "will turn"],
        correct: "turn",
        explanation: "'Ask that' + subjunctive dla formalnych próśb! 'Students turn' używa formy bazowej. To grzeczniejsze niż bezpośredni rozkaz ale wciąż wyraźne wymaganie. Subjunctive w educational contexts pokazuje że to zasada klasy, nie negotiable suggestion."
      },
      {
        id: "subj_14",
        question: "God save the Queen! This traditional phrase _____ the subjunctive mood perfectly.",
        translation: "(Niech Bóg ochrania Królową! Ta tradycyjna fraza pokazuje tryb łączący perfekcyjnie)",
        options: ["demonstrates", "demonstrate", "is demonstrating", "demonstrated"],
        correct: "demonstrates",
        explanation: "'God save' używa subjunctive bez 's'! 'Save' nie 'saves' - to starożytna forma życzeń. Nowoczesne zdanie używa normalnego czasu ale cytowana fraza zachowuje historyczny subjunctive. To klasyczny przykład subjunctive w życiach i błogosławieństwach - tradycyjna forma zachowana w ustalonej frazie."
      },
      {
        id: "subj_15",
        question: "It's necessary that we _____ early tomorrow to catch the first train to airport.",
        translation: "(Jest konieczne żebyśmy wstali wcześnie jutro żeby złapać pierwszy pociąg na lotnisko)",
        options: ["leave", "leaves", "left", "will leave"],
        correct: "leave",
        explanation: "'It's necessary that' + subjunctive! 'We leave' używa formy bazowej mimo liczby mnogiej i przyszłego czasu. To o logistycznej konieczności - plan wymaga wczesnego wyjazdu. Subjunctive po przymiotnikach konieczności czyni wymaganie brzmiącym formalnie i absolutnie."
      }
    ]
  }
};

export default part12Categories;