/**
 * POLISH → GERMAN GRAMMAR - PART 16
 * 4 kategorie, 15 pytań każda
 */

import { Layers, Grid, Compass, Building } from "lucide-react";

export const part16Categories = {
  subordinating_conjunctions_advanced: {
    name: "Spójniki podrzędne - zaawansowane",
    description: "Obwohl, während, damit, sodass - łączenie zdań",
    icon: Layers,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "sub_conj_1",
        question: "_____ es stark regnet, gehen wir heute trotzdem spazieren im Park.",
        translation: "(Chociaż mocno pada, idziemy dzisiaj i tak na spacer do parku)",
        options: ["Obwohl", "Weil", "Wenn", "Als"],
        correct: "Obwohl",
        explanation: "Spójnik 'obwohl' oznacza 'chociaż' i wprowadza kontrast. Pada deszcz, ale mimo to idziemy - to pokazuje determinację. Polski używa 'chociaż' w bardzo podobny sposób. W zdaniu z 'obwohl' czasownik idzie na koniec zdania podrzędnego. Ten spójnik jest bardzo przydatny gdy chcesz powiedzieć że coś się dzieje mimo trudności lub przeszkód."
      },
      {
        id: "sub_conj_2",
        question: "Ich lerne jeden Tag fleißig Deutsch, _____ ich in Deutschland arbeiten kann.",
        translation: "(Uczę się pilnie niemieckiego każdego dnia, żeby móc pracować w Niemczech)",
        options: ["damit", "weil", "obwohl", "wenn"],
        correct: "damit",
        explanation: "Spójnik 'damit' wyraża cel i oznacza 'żeby/aby'. Uczę się po to, żeby osiągnąć konkretny cel - pracę w Niemczech. To bardzo użyteczny spójnik gdy chcesz wyjaśnić po co coś robisz. Polski też używa 'żeby' w podobny sposób. Czasownik w zdaniu podrzędnym z 'damit' zawsze na końcu."
      },
      {
        id: "sub_conj_3",
        question: "Sie spricht so laut, _____ jeder sie verstehen kann im Raum.",
        translation: "(Mówi tak głośno, żeby każdy mógł ją zrozumieć w pomieszczeniu)",
        options: ["damit", "weil", "obwohl", "dass"],
        correct: "damit",
        explanation: "Tutaj 'damit' pokazuje intencję - mówi głośno CELOWO żeby wszyscy słyszeli. To świadome działanie z konkretnym celem. Różnica między 'damit' a zwykłym 'dass' polega na tym, że 'damit' zawsze wskazuje na zamiar lub cel działania. W polskim mówimy 'żeby' gdy chcemy coś osiągnąć."
      },
      {
        id: "sub_conj_4",
        question: "_____ ich im Stau steckte, habe ich ein interessantes Podcast gehört.",
        translation: "(Podczas gdy tkwiłem w korku, słuchałem ciekawego podcastu)",
        options: ["Während", "Obwohl", "Weil", "Damit"],
        correct: "Während",
        explanation: "Spójnik 'während' oznacza 'podczas gdy' i pokazuje że dwie rzeczy dzieją się w tym samym czasie. Tkwienie w korku i słuchanie podcastu - obie akcje równolegle. Polski używa 'podczas gdy' podobnie. To dobry sposób na produktywne wykorzystanie czasu w trudnych sytuacjach."
      },
      {
        id: "sub_conj_5",
        question: "Er hat so viel gelernt, _____ er jetzt fließend Deutsch sprechen kann.",
        translation: "(Nauczył się tak dużo, że teraz może płynnie mówić po niemiecku)",
        options: ["dass", "damit", "obwohl", "weil"],
        correct: "dass",
        explanation: "Spójnik 'dass' wprowadza rezultat - tyle się nauczył i TERAZ w konsekwencji mówi płynnie. To pokazuje związek przyczynowo-skutkowy między nauką a umiejętnością. Polski używa 'że' w podobnej funkcji. Gdy opisujesz efekt jakiegoś działania, 'dass' jest idealnym wyborem."
      },
      {
        id: "sub_conj_6",
        question: "_____ das Wetter schlecht war, haben wir unseren Ausflug nicht abgesagt.",
        translation: "(Chociaż pogoda była zła, nie odwołaliśmy naszej wycieczki)",
        options: ["Obwohl", "Weil", "Damit", "Wenn"],
        correct: "Obwohl",
        explanation: "Ponownie 'obwohl' pokazuje że coś się wydarzyło mimo przeszkody - zła pogoda nie zatrzymała planów. To wyraz optymizmu i uporu. W życiu często robimy rzeczy mimo że warunki nie są idealne, i 'obwohl' idealnie to oddaje. Polski 'chociaż' działa tak samo."
      },
      {
        id: "sub_conj_7",
        question: "Ich bleibe zu Hause, _____ ich mich nicht gut fühle heute.",
        translation: "(Zostaję w domu, ponieważ nie czuję się dzisiaj dobrze)",
        options: ["weil", "obwohl", "damit", "dass"],
        correct: "weil",
        explanation: "Spójnik 'weil' oznacza 'ponieważ' i wyjaśnia przyczynę - zostaje w domu BO źle się czuje. To naturalny sposób wyjaśniania swoich decyzji. Polski 'ponieważ' działa identycznie. Gdy ktoś pyta dlaczego coś robisz, 'weil' pomaga udzielić odpowiedzi z wyjaśnieniem."
      },
      {
        id: "sub_conj_8",
        question: "Wir müssen früh aufstehen, _____ wir den ersten Zug nicht verpassen.",
        translation: "(Musimy wcześnie wstać, żeby nie przegapić pierwszego pociągu)",
        options: ["damit", "weil", "obwohl", "dass"],
        correct: "damit",
        explanation: "Spójnik 'damit' wyjaśnia cel wczesnego wstawania - chodzi o to, żeby zdążyć na pociąg. To praktyczne planowanie czasu. Gdy opisujesz po co robisz coś co wymaga wysiłku (jak wczesne wstawanie), 'damit' jasno pokazuje że to służy konkretnemu celowi."
      },
      {
        id: "sub_conj_9",
        question: "Sie arbeitet sehr hart, _____ sie müde ist nach dem langen Tag.",
        translation: "(Pracuje bardzo ciężko, chociaż jest zmęczona po długim dniu)",
        options: ["obwohl", "weil", "damit", "wenn"],
        correct: "obwohl",
        explanation: "Kontrast między zmęczeniem a kontynuacją pracy - 'obwohl' pokazuje jej silną wolę. Mimo że czuje się zmęczona, nadal pracuje. To pokazuje determinację i profesjonalizm. W polskim używamy 'chociaż' żeby wyrazić podobny kontrast między stanem a działaniem."
      },
      {
        id: "sub_conj_10",
        question: "_____ er kein Auto hat, fährt er jeden Tag mit dem Fahrrad zur Arbeit.",
        translation: "(Ponieważ nie ma samochodu, jeździ każdego dnia rowerem do pracy)",
        options: ["Da", "Obwohl", "Damit", "Wenn"],
        correct: "Da",
        explanation: "Spójnik 'da' to formalniejsza wersja 'weil' - oznacza 'ponieważ'. Brak samochodu jest powodem dla którego jeździ rowerem. 'Da' często zaczyna zdanie i brzmi bardziej oficjalnie niż 'weil'. Polski ma podobne rozróżnienie między 'ponieważ' (formalnie) a 'bo' (potocznie)."
      },
      {
        id: "sub_conj_11",
        question: "Ich habe das Fenster geschlossen, _____ es draußen so laut war.",
        translation: "(Zamknąłem okno, ponieważ było na zewnątrz tak głośno)",
        options: ["weil", "obwohl", "damit", "dass"],
        correct: "weil",
        explanation: "Hałas był przyczyną zamknięcia okna - 'weil' wyjaśnia dlaczego podjąłeś tę akcję. To prosty przykład reakcji na uciążliwe warunki. Gdy opisujesz swoje reakcje na otoczenie, 'weil' pomaga wyjaśnić motywację stojącą za twoimi działaniami."
      },
      {
        id: "sub_conj_12",
        question: "Er spricht langsam und deutlich, _____ die Studenten alles verstehen können.",
        translation: "(Mówi wolno i wyraźnie, żeby studenci mogli wszystko zrozumieć)",
        options: ["damit", "weil", "obwohl", "dass"],
        correct: "damit",
        explanation: "Nauczyciel świadomie dostosowuje swój sposób mówienia - 'damit' pokazuje jego pedagogiczną intencję. Wolne tempo służy konkretnemu celowi - zrozumieniu. To przykład troskliwej komunikacji. Gdy ktoś modyfikuje swoje zachowanie dla dobra innych, 'damit' idealnie to opisuje."
      },
      {
        id: "sub_conj_13",
        question: "_____ du keine Zeit hast, können wir uns morgen treffen stattdessen.",
        translation: "(Jeśli nie masz czasu, możemy się spotkać jutro zamiast tego)",
        options: ["Falls", "Obwohl", "Damit", "Weil"],
        correct: "Falls",
        explanation: "Spójnik 'falls' oznacza 'jeśli/w przypadku gdyby' i wyraża warunkową możliwość. To bardziej uprzejma i otwarta forma niż kategoryczne 'wenn'. Pokazujesz elastyczność i gotowość do dostosowania planów. Polski używa 'jeśli' lub 'w razie gdyby' podobnie - to grzeczny sposób zaproponowania alternatywy."
      },
      {
        id: "sub_conj_14",
        question: "Wir sind pünktlich angekommen, _____ wir sehr früh losgefahren sind.",
        translation: "(Przyjechaliśmy punktualnie, ponieważ wyjechaliśmy bardzo wcześnie)",
        options: ["weil", "obwohl", "damit", "dass"],
        correct: "weil",
        explanation: "Wczesny wyjazd był kluczem do punktualności - 'weil' łączy przyczynę z efektem. To pokazuje mądre planowanie czasu. Gdy opisujesz jak twoje przygotowanie doprowadziło do sukcesu, 'weil' jasno pokazuje tę relację między działaniem a pozytywnym rezultatem."
      },
      {
        id: "sub_conj_15",
        question: "Sie hat extra langsam gesprochen, _____ ich jedes Wort verstehen konnte.",
        translation: "(Mówiła specjalnie wolno, żebym mógł zrozumieć każde słowo)",
        options: ["damit", "weil", "obwohl", "wenn"],
        correct: "damit",
        explanation: "Celowe spowolnienie mowy - 'damit' podkreśla jej troskliwą intencję. Chciała się upewnić że wszystko zrozumiałeś. To przykład empatycznej komunikacji. Gdy ktoś modyfikuje swoje zachowanie z myślą o twoich potrzebach, używamy 'damit' żeby pokazać tę przemyślaną troskę."
      }
    ]
  },

  adjective_endings_all_cases: {
    name: "Końcówki przymiotnikowe we wszystkich przypadkach",
    description: "Pełna deklinacja przymiotników - ein/der/bez rodzajnika",
    icon: Grid,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "adj_end_1",
        question: "Ich habe einen _____ Freund in Berlin kennengelernt.",
        translation: "(Poznałem dobrego przyjaciela w Berlinie)",
        options: ["guten", "guter", "gute", "gut"],
        correct: "guten",
        explanation: "Z nieokreślonym 'einen' w bierniku męskim przymiotnik dostaje końcówkę -en. To tzw. 'mieszana deklinacja'. Rodzajnik nieokreślony 'ein' nie pokazuje wyraźnie przypadka, więc przymiotnik musi bardziej pomóc - stąd końcówka -en. Polski nie ma takiego systemu, ale w niemieckim końcówki przymiotnikowe są jak dodatkowe wskazówki przypadka."
      },
      {
        id: "adj_end_2",
        question: "Das ist ein _____ Buch über deutsche Geschichte.",
        translation: "(To jest interesująca książka o niemieckiej historii)",
        options: ["interessantes", "interessanter", "interessante", "interessant"],
        correct: "interessantes",
        explanation: "Z nieokreślonym 'ein' w mianowniku nijakim przymiotnik dostaje końcówkę -es. Rodzajnik 'ein' dla nijakiego nie zmienia się między mianownikiem a biernikiem, więc przymiotnik musi jasno pokazać przypadek. Końcówka -es sygnalizuje że to nijaki mianownik - przymiotnik wykonuje ciężką pracę identyfikacji."
      },
      {
        id: "adj_end_3",
        question: "Wir haben einer _____ Frau geholfen auf der Straße gestern.",
        translation: "(Pomogliśmy starszej kobiecie na ulicy wczoraj)",
        options: ["alten", "alter", "alte", "alt"],
        correct: "alten",
        explanation: "Z nieokreślonym 'einer' w celowniku żeńskim przymiotnik dostaje końcówkę -en. Czasownik 'helfen' wymaga celownika - komu pomagamy. Końcówka -en w celowniku jest bardzo powszechna - to jedna z najczęstszych końcówek przymiotnikowych. To ułatwia zapamiętywanie bo celownik prawie zawsze ma -en."
      },
      {
        id: "adj_end_4",
        question: "Der _____ Mann dort drüben ist mein Nachbar aus dem Erdgeschoss.",
        translation: "(Ten wysoki mężczyzna tam jest moim sąsiadem z parteru)",
        options: ["große", "großer", "großen", "groß"],
        correct: "große",
        explanation: "Z określonym 'der' w mianowniku męskim przymiotnik dostaje słabą końcówkę -e. Gdy rodzajnik określony jasno pokazuje przypadek i rodzaj, przymiotnik może 'odpocząć' i używa prostszej końcówki -e. To tzw. słaba deklinacja - rodzajnik robi większość pracy, przymiotnik tylko minimalnie oznacza przypadek."
      },
      {
        id: "adj_end_5",
        question: "Ich sehe den _____ Hund jeden Tag im Park laufen.",
        translation: "(Widzę czarnego psa każdego dnia biegającego w parku)",
        options: ["schwarzen", "schwarzer", "schwarze", "schwarz"],
        correct: "schwarzen",
        explanation: "Z określonym 'den' w bierniku męskim przymiotnik dostaje słabą końcówkę -en. Rodzajnik 'den' już jasno pokazuje że to męski biernik, więc przymiotnik używa końcówki -en. W bierniku męskim zawsze widzisz -en przy przymiotniku z określonym rodzajnikiem - to konsekwentny wzór."
      },
      {
        id: "adj_end_6",
        question: "Das ist die Tasche der _____ Frau von nebenan.",
        translation: "(To jest torebka eleganckiej kobiety z sąsiedztwa)",
        options: ["eleganten", "eleganter", "elegante", "elegant"],
        correct: "eleganten",
        explanation: "W dopełniaczu żeńskim z określonym 'der' przymiotnik dostaje końcówkę -en. Dopełniacz pokazuje posiadanie - czyja torebka. Choć dopełniacz w niemieckim jest rzadszy niż w polskim, gdy już się pojawia, przymiotniki konsekwentnie dostają -en. To upraszcza zapamiętywanie - dopełniacz to prawie zawsze -en."
      },
      {
        id: "adj_end_7",
        question: "Wir wohnen in einem _____ Haus am Stadtrand ruhig.",
        translation: "(Mieszkamy w małym domu na obrzeżach miasta spokojnie)",
        options: ["kleinen", "kleiner", "kleine", "klein"],
        correct: "kleinen",
        explanation: "Przyimek 'in' z celownikiem plus nieokreślony 'einem' - przymiotnik dostaje końcówkę -en. Celownik po przyimkach miejsca (gdy pytamy GDZIE?) jest bardzo częsty. Końcówka -en w celowniku pojawia się regularnie i jest łatwa do zapamiętania - niemal zawsze -en w tym przypadku."
      },
      {
        id: "adj_end_8",
        question: "Sie trägt einen _____ Mantel gegen die Kälte im Winter.",
        translation: "(Nosi ciepły płaszcz przeciw zimnu zimą)",
        options: ["warmen", "warmer", "warme", "warm"],
        correct: "warmen",
        explanation: "Z nieokreślonym 'einen' w bierniku męskim przymiotnik dostaje -en. Płaszcz (męski) w bierniku po czasowniku 'tragen' (nosić). To pokazuje funkcjonalność odzieży - ciepły płaszcz chroni przed zimnem. Końcówka -en w bierniku męskim po 'einen' to stała reguła."
      },
      {
        id: "adj_end_9",
        question: "Das _____ Auto dort gehört meinem Chef aus der Firma.",
        translation: "(Ten nowy samochód tam należy do mojego szefa z firmy)",
        options: ["neue", "neuer", "neuen", "neu"],
        correct: "neue",
        explanation: "Z określonym 'das' w mianowniku nijakim przymiotnik dostaje słabą końcówkę -e. Auto (das Auto) w mianowniku jako podmiot zdania. Rodzajnik 'das' jasno pokazuje przypadek, więc przymiotnik używa prostej -e. Słaba deklinacja ułatwia życie - gdy rodzajnik jest silny, przymiotnik może być prosty."
      },
      {
        id: "adj_end_10",
        question: "Ich gebe dem _____ Kind ein Geschenk zum Geburtstag.",
        translation: "(Daję małemu dziecku prezent na urodziny)",
        options: ["kleinen", "kleiner", "kleine", "klein"],
        correct: "kleinen",
        explanation: "Z określonym 'dem' w celowniku nijakim przymiotnik dostaje końcówkę -en. Czasownik 'geben' wymaga celownika dla odbiorcy prezentu - komu dajesz. Celownik nijaki z określonym rodzajnikiem zawsze ma -en przy przymiotniku. To bardzo przewidywalna końcówka."
      },
      {
        id: "adj_end_11",
        question: "_____ Wetter kann sehr schön sein im Frühling hier.",
        translation: "(Ciepła pogoda może być bardzo piękna wiosną tutaj)",
        options: ["Warmes", "Warme", "Warmer", "Warm"],
        correct: "Warmes",
        explanation: "BEZ rodzajnika w mianowniku nijakim przymiotnik dostaje silną końcówkę -es! Gdy nie ma rodzajnika, przymiotnik musi SAM pokazać przypadek i rodzaj - stąd wyraźna końcówka -es. To tzw. silna deklinacja - przymiotnik pracuje ciężej gdy nie ma pomocy rodzajnika."
      },
      {
        id: "adj_end_12",
        question: "Ich trinke gerne _____ Kaffee am Morgen zum Frühstück.",
        translation: "(Lubię pić gorącą kawę rano do śniadania)",
        options: ["heißen", "heißer", "heiße", "heiß"],
        correct: "heißen",
        explanation: "BEZ rodzajnika w bierniku męskim przymiotnik dostaje silną końcówkę -en. Kawa (der Kaffee) w bierniku bez rodzajnika - przymiotnik musi pokazać przypadek. Gdy mówimy o rzeczach ogólnie bez 'der/die/das', przymiotniki stają się bardziej 'widoczne' z wyraźnymi końcówkami."
      },
      {
        id: "adj_end_13",
        question: "Mit _____ Musik kann ich besser konzentrieren mich auf Arbeit.",
        translation: "(Z cichą muzyką mogę się lepiej skoncentrować na pracy)",
        options: ["leiser", "leise", "leisen", "leis"],
        correct: "leiser",
        explanation: "BEZ rodzajnika w celowniku żeńskim przymiotnik dostaje silną końcówkę -er. Przyimek 'mit' wymaga celownika - z czym. Muzyka (die Musik) w celowniku bez rodzajnika potrzebuje wyraźnej końcówki. Końcówka -er w celowniku żeńskim pomaga zidentyfikować przypadek gdy brak rodzajnika."
      },
      {
        id: "adj_end_14",
        question: "Sie hat mir _____ Bücher über Kunst geliehen aus Bibliothek.",
        translation: "(Pożyczyła mi ciekawe książki o sztuce z biblioteki)",
        options: ["interessante", "interessanten", "interessanter", "interessant"],
        correct: "interessante",
        explanation: "BEZ rodzajnika w bierniku mnogim przymiotnik dostaje silną końcówkę -e. Liczba mnoga bez rodzajnika to częsta sytuacja w niemieckim. Końcówka -e wyraźnie pokazuje że to mnoga - przymiotnik sam komunikuje tę informację. W liczbie mnogiej bez rodzajnika przymiotniki są bardzo pomocne."
      },
      {
        id: "adj_end_15",
        question: "Wir arbeiten mit _____ Kollegen zusammen an diesem Projekt.",
        translation: "(Pracujemy z nowymi kolegami razem nad tym projektem)",
        options: ["neuen", "neue", "neuer", "neu"],
        correct: "neuen",
        explanation: "BEZ rodzajnika w celowniku mnogim przymiotnik dostaje końcówkę -en. Przyimek 'mit' plus celownik - z kim pracujemy. Mnoga w celowniku bez rodzajnika zawsze ma -en przy przymiotniku. To jedna z najbardziej przewidywalnych końcówek i bardzo użyteczna w codziennej komunikacji."
      }
    ]
  },

  modal_verbs_subjunctive: {
    name: "Czasowniki modalne w trybie łączącym",
    description: "Könnte, sollte, müsste, dürfte - uprzejme prośby i rady",
    icon: Compass,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    questions: [
      {
        id: "modal_subj_1",
        question: "_____ du mir bitte helfen mit dieser schweren Tasche?",
        translation: "(Czy mógłbyś mi proszę pomóc z tą ciężką torbą?)",
        options: ["Könntest", "Kannst", "Konntest", "Würdest können"],
        correct: "Könntest",
        explanation: "Forma 'könntest' (Konjunktiv II od 'können') brzmi dużo uprzejmiej niż bezpośrednie 'kannst'. Używając trybu łączącego pokazujesz szacunek i delikatność w prośbie. To jak różnica między polskim 'możesz' a 'mógłbyś' - druga forma jest bardziej grzeczna i mniej nakazująca."
      },
      {
        id: "modal_subj_2",
        question: "Du _____ wirklich mehr Wasser trinken für deine Gesundheit.",
        translation: "(Naprawdę powinieneś pić więcej wody dla twojego zdrowia)",
        options: ["solltest", "sollst", "sollte", "würdest sollen"],
        correct: "solltest",
        explanation: "Forma 'solltest' (Konjunktiv II od 'sollen') wyraża radę w łagodniejszy sposób niż 'sollst'. Brzmi jak przyjacielska sugestia, nie rozkaz. To jak po polsku 'powinieneś' vs 'musisz' - pierwsza forma jest bardziej przyjazna. Używaj 'solltest' gdy chcesz komuś doradzić bez naciskania."
      },
      {
        id: "modal_subj_3",
        question: "Wir _____ jetzt eigentlich schon zu Hause sein nach Plan.",
        translation: "(Właściwie powinniśmy już być w domu według planu)",
        options: ["müssten", "müssen", "mussten", "würden müssen"],
        correct: "müssten",
        explanation: "Forma 'müssten' wyraża logiczną konieczność w trybie łączącym - 'powinniśmy być' (jeśli plan był dobry). To mniej kategoryczne niż 'müssen'. Pokazuje że rozumiesz co POWINNO być, ale jednocześnie akceptujesz że rzeczywistość może być inna. Używasz tego gdy opisujesz oczekiwania vs rzeczywistość."
      },
      {
        id: "modal_subj_4",
        question: "_____ ich Sie kurz etwas fragen zu diesem Thema?",
        translation: "(Czy mógłbym Pana/Panią krótko o coś zapytać w tym temacie?)",
        options: ["Dürfte", "Darf", "Durfte", "Würde dürfen"],
        correct: "Dürfte",
        explanation: "Forma 'dürfte' (Konjunktiv II od 'dürfen') to najbardziej uprzejmy sposób proszenia o pozwolenie. Używana szczególnie w formalnych sytuacjach lub z osobami starszymi/nieznajomymi. To ekwiwalent polskiego 'czy mógłbym' w bardzo grzecznej formie - pokazujesz maksymalny szacunek dla rozmówcy."
      },
      {
        id: "modal_subj_5",
        question: "Du _____ vielleicht Recht haben mit deiner Vermutung.",
        translation: "(Być może mógłbyś mieć rację ze swoim przypuszczeniem)",
        options: ["könntest", "kannst", "konntest", "würdest können"],
        correct: "könntest",
        explanation: "Forma 'könntest' wyraża możliwość w łagodny sposób - 'możliwe że masz rację'. To mniej pewne i bardziej otwarte niż 'kannst'. Używając Konjunktiv pokazujesz że jesteś otwarty na różne możliwości. To uprzejmy sposób przyznania że ktoś może mieć rację bez kategorycznego stwierdzenia."
      },
      {
        id: "modal_subj_6",
        question: "Ihr _____ nicht so laut sein in der Bibliothek bitte.",
        translation: "(Nie powinniście być tak głośni w bibliotece proszę)",
        options: ["solltet", "sollt", "sollte", "würdet sollen"],
        correct: "solltet",
        explanation: "Forma 'solltet' to uprzejme przypomnienie o zasadach - łagodniejsze niż kategoryczne 'sollt'. W bibliotece cisza jest ważna, ale mówiąc 'solltet' brzmisz przyjaźnie, nie surowo. To jak różnica między polskim 'powinniście' a 'musicie' - pierwszy jest delikatniejszym przypomnieniem."
      },
      {
        id: "modal_subj_7",
        question: "Man _____ annehmen, dass er schon zu Hause angekommen ist.",
        translation: "(Można by założyć, że już dotarł do domu)",
        options: ["dürfte", "darf", "durfte", "würde dürfen"],
        correct: "dürfte",
        explanation: "W tym kontekście 'dürfte' oznacza 'prawdopodobnie/można założyć'. To wyrażanie uprzejmej pewności - nie jesteś w 100% pewien ale logicznie przypuszczasz. Polski używa 'można by założyć' lub 'powinien' w podobny sposób. To sposób na wyrażanie przewidywań bez brzmieniu zbyt pewnie."
      },
      {
        id: "modal_subj_8",
        question: "Das _____ eigentlich nicht passieren dürfen - das ist ein Fehler.",
        translation: "(To właściwie nie powinno się zdarzyć - to jest błąd)",
        options: ["dürfte", "darf", "durfte", "würde dürfen"],
        correct: "dürfte",
        explanation: "Tutaj 'dürfte' wyraża że coś jest niewłaściwe - 'nie powinno mieć miejsca'. To łagodniejszy sposób krytykowania niż kategoryczne 'darf nicht'. Pokazujesz że coś jest nie w porządku, ale bez ostrego osądu. Polski używa 'nie powinno' w podobny sposób - wskazuje błąd bez agresji."
      },
      {
        id: "modal_subj_9",
        question: "Ich _____ jetzt wirklich nach Hause gehen müssen leider.",
        translation: "(Naprawdę musiałbym teraz iść do domu niestety)",
        options: ["müsste", "muss", "musste", "würde müssen"],
        correct: "müsste",
        explanation: "Forma 'müsste' wyraża konieczność w łagodniejszy sposób - czujesz obowiązek ale zostawiasz otwartą furtkę. To uprzejmiejsze niż kategoryczne 'muss'. Używając Konjunktiv pokazujesz że rozumiesz sytuację ale masz też swoje zobowiązania. Brzmi mniej jak rozkaz, bardziej jak wyjaśnienie."
      },
      {
        id: "modal_subj_10",
        question: "_____ Sie mir vielleicht den Weg zum Bahnhof zeigen?",
        translation: "(Czy mógłby Pan/Pani może pokazać mi drogę do dworca?)",
        options: ["Könnten", "Können", "Konnten", "Würden können"],
        correct: "Könnten",
        explanation: "Forma 'könnten' z formalnym 'Sie' to maksymalnie uprzejma prośba o pomoc. Pytając nieznajomego o drogę, chcesz być bardzo grzeczny. Dodatkowe 'vielleicht' (może) jeszcze bardziej łagodzi prośbę. To model uprzejmości w niemieckiej kulturze - zawsze lepiej być zbyt grzecznym niż za mało."
      },
      {
        id: "modal_subj_11",
        question: "Wir _____ langsamer fahren bei diesem starken Regen sicher.",
        translation: "(Powinniśmy jechać wolniej przy tym silnym deszczu bezpiecznie)",
        options: ["sollten", "sollen", "sollte", "würden sollen"],
        correct: "sollten",
        explanation: "Forma 'sollten' wyraża mądrą radę dotyczącą bezpieczeństwa - sugeruje ostrożność bez paniki. To racjonalna rekomendacja w odpowiedzi na warunki. Używając Konjunktiv II brzmisz rozsądnie i troskliwie, nie panicznie. Polski 'powinniśmy' ma podobny ton - sugestia rozsądku."
      },
      {
        id: "modal_subj_12",
        question: "Er _____ inzwischen schon in Berlin angekommen sein müssen.",
        translation: "(Powinien już w międzyczasie dotrzeć do Berlina musi)",
        options: ["müsste", "muss", "musste", "würde müssen"],
        correct: "müsste",
        explanation: "Forma 'müsste' tu wyraża logiczne przypuszczenie - 'powinien był już dotrzeć' bazując na czasie podróży. To nie rozkaz ale racjonalne założenie. Konjunktiv II czyni to założeniem, nie pewnikiem. Polski używa 'powinien był' podobnie - wskazuje logiczne oczekiwanie."
      },
      {
        id: "modal_subj_13",
        question: "Du _____ vielleicht mal einen Arzt aufsuchen wegen diesem Husten.",
        translation: "(Może powinieneś pójść do lekarza z powodu tego kaszlu)",
        options: ["solltest", "sollst", "sollte", "würdest sollen"],
        correct: "solltest",
        explanation: "Forma 'solltest' wyraża troskliwą radę dotyczącą zdrowia - sugerujesz wizytę lekarską bez stras zenia. Słowo 'vielleicht' (może) jeszcze bardziej łagodzi radę. To pokazuje że martwisz się ale szanujesz autonomię drugiej osoby - nie nakazujesz, tylko delikatnie sugerujesz."
      },
      {
        id: "modal_subj_14",
        question: "Das _____ die beste Lösung für unser Problem sein aktuell.",
        translation: "(To mogłoby być najlepsze rozwiązanie naszego problemu aktualnie)",
        options: ["dürfte", "darf", "durfte", "würde dürfen"],
        correct: "dürfte",
        explanation: "Tutaj 'dürfte' oznacza 'prawdopodobnie jest' - wyrażasz ostrożną pewność. Nie jesteś w 100% pewien ale to wydaje się najbardziej logiczne. To dyplomatyczny sposób przedstawiania swojej opinii - zostawiasz miejsce na dyskusję. Polski używa 'prawdopodobnie' lub 'powinno być' w podobny sposób."
      },
      {
        id: "modal_subj_15",
        question: "Wir _____ vorsichtiger sein mit unseren Entscheidungen wichtigen.",
        translation: "(Powinniśmy być ostrożniejsi z naszymi ważnymi decyzjami)",
        options: ["sollten", "sollen", "sollte", "würden sollen"],
        correct: "sollten",
        explanation: "Forma 'sollten' to samo-refleksja i konstruktywna rada dla grupy - 'powinniśmy być' bardziej przemyślani. To nie oskarżanie, tylko wspólne uznanie potrzeby poprawy. Używając Konjunktiv pokazujesz że to sugestia do rozważenia, nie surowa krytyka. Buduje to atmosferę współpracy."
      }
    ]
  },

  separable_verbs_all_tenses: {
    name: "Czasowniki rozdzielne we wszystkich czasach",
    description: "Aufstehen, mitkommen, anfangen w różnych czasach",
    icon: Building,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    questions: [
      {
        id: "sep_verb_1",
        question: "Ich stehe jeden Morgen um 6 Uhr _____ für die Arbeit.",
        translation: "(Wstaję każdego ranka o 6 żeby iść do pracy)",
        options: ["auf", "an", "aus", "ein"],
        correct: "auf",
        explanation: "Czasownik rozdzielny 'aufstehen' (wstawać) - przedrostek 'auf' oddziela się i idzie na koniec zdania. Przedrostek 'auf' oznacza 'w górę' - dosłownie 'stawanie w górę'. W czasie teraźniejszym przedrostek zawsze na końcu. To podstawowa cecha niemieckich czasowników rozdzielnych - przedrostek wędruje na koniec."
      },
      {
        id: "sep_verb_2",
        question: "Wann fängt der Film heute Abend im Kino _____?",
        translation: "(Kiedy zaczyna się film dzisiejszego wieczoru w kinie?)",
        options: ["an", "auf", "aus", "ein"],
        correct: "an",
        explanation: "Czasownik 'anfangen' (zaczynać się) - przedrostek 'an' na końcu w pytaniu. Przedrostek 'an' wskazuje początek czegoś. W pytaniach przedrostek też idzie na koniec, tak jak w zdaniach oznajmujących. Pytania z czasownikami rozdzielnymi mają czasownik na początku, przedrostek na końcu."
      },
      {
        id: "sub_conj_3",
        question: "Kommst du morgen mit uns zur Party am Abend _____?",
        translation: "(Czy idziesz jutro z nami na imprezę wieczorem?)",
        options: ["mit", "nach", "zu", "bei"],
        correct: "mit",
        explanation: "Czasownik 'mitkommen' (przychodzić z kimś) - przedrostek 'mit' oznacza 'z/razem'. To zaproszenie do wspólnego uczestnictwa. Przedrostek 'mit' na końcu pytania. Czasowniki z 'mit-' często wyrażają robienie czegoś wspólnie z innymi - 'mitkommen, mitspielen, mitarbeiten'."
      },
      {
        id: "sep_verb_4",
        question: "Ich bin gestern sehr früh _____ für einen wichtigen Termin.",
        translation: "(Wstałem wczoraj bardzo wcześnie na ważne spotkanie)",
        options: ["aufgestanden", "aufstehen", "stehen auf", "aufstand"],
        correct: "aufgestanden",
        explanation: "W czasie Perfect czasowniki rozdzielne łączą przedrostek z imiesłowem - 'aufgestanden'. Przedrostek 'auf-' skleja się z 'gestanden' w jedną całość w formie Perfect. To ważna zmiana - w Perfect przedrostek NIE oddziela się ale staje się częścią imiesłowu. Forma 'bin aufgestanden' standardowa konstrukcja."
      },
      {
        id: "sep_verb_5",
        question: "Sie hat die Tür leise _____, um niemanden zu wecken nachts.",
        translation: "(Zamknęła cicho drzwi, żeby nikogo nie obudzić w nocy)",
        options: ["zugemacht", "zumachen", "macht zu", "zumachte"],
        correct: "zugemacht",
        explanation: "Czasownik 'zumachen' (zamykać) w Perfect - 'zugemacht' to imiesłów z przedrostkiem. Przedrostek 'zu-' oznacza 'zamykanie/domykanie'. W Perfect forma 'hat zugemacht' - przedrostek i imiesłów łączą się. Ostrożne zamykanie pokazuje troskę o innych śpiących."
      },
      {
        id: "sep_verb_6",
        question: "Wir werden morgen sehr früh _____, um den Sonnenaufgang zu sehen.",
        translation: "(Wstaniemy jutro bardzo wcześnie, żeby zobaczyć wschód słońca)",
        options: ["aufstehen", "aufgestanden", "stehen auf", "aufstanden"],
        correct: "aufstehen",
        explanation: "W czasie przyszłym (Futur) czasowniki rozdzielne używają bezokolicznika - 'aufstehen' pozostaje razem. Konstrukcja 'werden aufstehen' - bezokolicznik nie rozdziela się. To inna zasada niż w teraźniejszości - w Futur czasownik pozostaje całością. Planowanie wczesnego wstawania dla pięknego widoku."
      },
      {
        id: "sep_verb_7",
        question: "Bitte mach das Licht _____, wenn du den Raum verlässt!",
        translation: "(Proszę wyłącz światło, gdy opuszczasz pokój!)",
        options: ["aus", "an", "auf", "ein"],
        correct: "aus",
        explanation: "Czasownik 'ausmachen' (wyłączać) w trybie rozkazującym - przedrostek 'aus' na końcu. Przedrostek 'aus-' oznacza wyłączenie/zgaszenie. W rozkazach przedrostek też idzie na koniec - 'mach aus'. To podstawowa prośba o oszczędzanie energii - typowa sytuacja domowa."
      },
      {
        id: "sep_verb_8",
        question: "Er hat mir versprochen, dass er mich morgen vom Bahnhof _____.",
        translation: "(Obiecał mi, że odbierze mnie jutro z dworca)",
        options: ["abholt", "holt ab", "abgeholt", "abholen"],
        correct: "abholt",
        explanation: "W zdaniu podrzędnym (z 'dass') czasownik pozostaje razem ale odmieniony - 'abholt' nie rozdziela się! W zdaniach podrzędnych czasownik idzie na koniec ALE w jednej całości. To ważna różnica od zdań głównych. Obietnica odbioru pokazuje niezawodność i troskę o kogoś."
      },
      {
        id: "sep_verb_9",
        question: "Ich muss heute Abend noch schnell im Supermarkt _____.",
        translation: "(Muszę dzisiaj wieczorem jeszcze szybko zrobić zakupy w supermarkecie)",
        options: ["einkaufen", "kaufe ein", "eingekauft", "einkaufte"],
        correct: "einkaufen",
        explanation: "Z czasownikiem modalnym 'muss' używamy bezokolicznika - 'einkaufen' pozostaje razem. Konstrukcja 'muss einkaufen' - bezokolicznik na końcu nie rozdziela się. Czasowniki modalne zawsze łączą się z bezokolicznikiem który zostaje całością. Szybkie zakupy wieczorne to typowa sytuacja po pracy."
      },
      {
        id: "sep_verb_10",
        question: "Sie räumt ihr Zimmer gründlich _____ vor dem Besuch ihrer Eltern.",
        translation: "(Sprząta dokładnie swój pokój przed wizytą rodziców)",
        options: ["auf", "an", "aus", "ein"],
        correct: "auf",
        explanation: "Czasownik 'aufräumen' (sprzątać/porządkować) - przedrostek 'auf' oznacza 'porządkowanie w górę'. Przedrostek na końcu zdania w czasie teraźniejszym. Dokładne sprzątanie przed wizytą rodziców to uniwersalne doświadczenie - chcemy żeby dom wyglądał dobrze dla rodziny."
      },
      {
        id: "sep_verb_11",
        question: "Hast du schon alle Lichter _____ vor dem Schlafengehen?",
        translation: "(Czy wyłączyłeś już wszystkie światła przed pójściem spać?)",
        options: ["ausgemacht", "ausmachen", "macht aus", "ausmachte"],
        correct: "ausgemacht",
        explanation: "Perfect od 'ausmachen' - imiesłów 'ausgemacht' łączy przedrostek z 'gemacht'. Pytanie o rutynę wieczorną - sprawdzanie czy wszystko bezpieczne przed snem. W Perfect przedrostek skleja się z imiesłowem tworząc jedną formę. Dbanie o bezpieczeństwo nocne to ważna rutyna."
      },
      {
        id: "sep_verb_12",
        question: "Wir laden dich herzlich zu unserer Feier am Samstag _____.",
        translation: "(Zapraszamy cię serdecznie na nasze przyjęcie w sobotę)",
        options: ["ein", "an", "auf", "aus"],
        correct: "ein",
        explanation: "Czasownik 'einladen' (zapraszać) - przedrostek 'ein-' oznacza 'do środka/dołączanie'. Zaproszenie to wpuszczanie kogoś do swojego wydarzenia. Przedrostek 'ein' na końcu w czasie teraźniejszym. Serdeczne zaproszenie pokazuje że ktoś jest mile widziany i pożądany jako gość."
      },
      {
        id: "sep_verb_13",
        question: "Sie hat gestern einen neuen Job im Zentrum _____.",
        translation: "(Zaczęła wczoraj nową pracę w centrum)",
        options: ["angefangen", "anfangen", "fängt an", "anfing"],
        correct: "angefangen",
        explanation: "Perfect od 'anfangen' - imiesłów 'angefangen' łączy 'an-' z 'gefangen'. Rozpoczęcie nowej pracy to ważny moment życiowy. W Perfect czasowniki rozdzielne tworzą złożone imiesłowy gdzie przedrostek jest na początku całej formy. Nowy rozdział w karierze zawsze ekscytujący."
      },
      {
        id: "sep_verb_14",
        question: "Könnt ihr bitte die Musik etwas leiser _____?",
        translation: "(Czy możecie proszę ściszyć trochę muzykę?)",
        options: ["machen", "anmachen", "ausmachen", "zumachen"],
        correct: "machen",
        explanation: "Uwaga - 'leiser machen' NIE jest czasownikiem rozdzielnym! 'Leiser' to komparatyw od 'leise' (cicho), 'machen' to normalny czasownik. To fraza 'uczynić ciszej' nie czasownik rozdzielny. Prośba o zmniejszenie głośności to częsta sytuacja gdy muzyka przeszkadza - grzeczne wyrażenie potrzeby ciszy."
      },
      {
        id: "sep_verb_15",
        question: "Ich habe vergessen, das Fenster zu _____.",
        translation: "(Zapomniałem zamknąć okno)",
        options: ["schließen", "zumachen", "aufmachen", "anmachen"],
        correct: "schließen",
        explanation: "Po 'zu' używamy bezokolicznika - 'schließen' pozostaje całością (nie jest rozdzielny w tym kontekście). Zapomnienie zamknięcia okna to powszechny błąd. Czasownik 'schließen' (zamykać) nie jest rozdzielny - to prosty czasownik. Różnica od 'zumachen' który jest rozdzielny ale tu używamy prostszego 'schließen'."
      }
    ]
  },

  prepositions_two_way_detailed: {
    name: "Przyimki dwukierunkowe - szczegóły",
    description: "An, auf, in, über, unter, vor, hinter - Akkusativ lub Dativ",
    icon: Compass,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    questions: [
      {
        id: "two_way_1",
        question: "Das Bild hängt schon seit Jahren _____ _____ Wand im Wohnzimmer.",
        translation: "(Obraz wisi już od lat na ścianie w salonie)",
        options: ["an der", "an die", "auf der", "auf die"],
        correct: "an der",
        explanation: "Obraz JUŻ wisi - to statyczna pozycja więc celownik 'an der'. Przyimek 'an' dla powierzchni pionalnych (ściany). Gdy opisujesz gdzie coś się znajduje (nie dokąd coś idziesz), używasz celownika. Długoletnie wiszenie obrazu to stały element wystroju domu - stabilna pozycja wyraża celownik."
      },
      {
        id: "two_way_2",
        question: "Ich hänge jetzt das neue Bild _____ _____ Wand dort drüben.",
        translation: "(Wieszam teraz nowy obraz na ścianę tam)",
        options: ["an die", "an der", "auf die", "auf der"],
        correct: "an die",
        explanation: "WIESZANIE to ruch w kierunku ściany - akcja wymaga biernika 'an die'. Ten sam przyimek 'an', ale zmiana przypadku pokazuje że to dynamiczna akcja, nie statyczny stan. Gdy opisujesz proces umieszczania, używasz biernika. Kierunek ruchu (dokąd) równa się biernik w niemieckim."
      },
      {
        id: "two_way_3",
        question: "Die Katze schläft friedlich _____ _____ Sofa im Wohnzimmer.",
        translation: "(Kot śpi spokojnie na sofie w salonie)",
        options: ["auf dem", "auf das", "in dem", "in das"],
        correct: "auf dem",
        explanation: "Kot JUŻ leży i śpi - statyczna pozycja wymaga celownika 'auf dem'. Przyimek 'auf' dla powierzchni poziomych (sofa). Spokojny sen kota to stan nie akcja - celownik wyraża tę statyczność. Powierzchnie na których coś spoczywa używają 'auf' z celownikiem gdy pytamy GDZIE."
      },
      {
        id: "two_way_4",
        question: "Ich lege meine Schlüssel immer _____ _____ Tisch beim Eingang.",
        translation: "(Kładę zawsze moje klucze na stół przy wejściu)",
        options: ["auf den", "auf dem", "an den", "an dem"],
        correct: "auf den",
        explanation: "KŁADZENIE to aktywne umieszczanie - ruch wymaga biernika 'auf den'. Choć w rezultacie klucze będą LEŻEĆ na stole (pozycja), akcja położenia wymaga biernika. Różnica między stanem a akcją jest kluczowa - pytaj się czy opisujesz GDZIE JUŻ JEST czy DOKĄD UMIESZCZASZ."
      },
      {
        id: "two_way_5",
        question: "Wir fahren nächste Woche _____ _____ Berge zum Wandern.",
        translation: "(Jedziemy w przyszłym tygodniu w góry na wędrówki)",
        options: ["in die", "in den", "an die", "an den"],
        correct: "in die",
        explanation: "Ruch DO gór - cel podróży wymaga biernika 'in die'. Góry (die Berge - liczba mnoga) w bierniku. Gdy jedziesz DO jakiegoś obszaru (nie tylko DO jego granicy), używasz 'in' z biernikiem. Góry jako obszar do którego się wchodzi używają 'in' nie 'an' (który byłby dla granic/brzegów)."
      },
      {
        id: "two_way_6",
        question: "Der Hund liegt faul _____ _____ Baum im Garten im Schatten.",
        translation: "(Pies leży leniwie pod drzewem w ogrodzie w cieniu)",
        options: ["unter dem", "unter den", "über dem", "über den"],
        correct: "unter dem",
        explanation: "Pies JUŻ leży w cieniu - statyczna pozycja pod drzewem wymaga celownika 'unter dem'. Przyimek 'unter' dla pozycji poniżej czegoś. Szukanie cienia w upały to naturalne zachowanie - opis stanu odpoczynku. Statyczna pozycja zawsze celownik - gdzie pies jest, nie dokąd idzie."
      },
      {
        id: "two_way_7",
        question: "Stell bitte die Vase vorsichtig _____ _____ Regal ins Wohnzimmer!",
        translation: "(Postaw proszę ostrożnie wazon na półkę do salonu!)",
        options: ["auf das", "auf dem", "in das", "in dem"],
        correct: "auf das",
        explanation: "Tryb rozkazujący STAWIANIA - akcja wymaga biernika 'auf das'. Wazon (der Vase żeński, ale 'das Regal' nijaki) umieszczany NA półce. Ostrożność jest kluczowa przy delikatnych przedmiotach. Akcja umieszczania zawsze z biernikiem - kierunek ruchu ważniejszy niż finalna pozycja w tym momencie."
      },
      {
        id: "two_way_8",
        question: "Wir treffen uns heute _____ _____ Café in der Stadtmitte zentral.",
        translation: "(Spotykamy się dzisiaj w kawiarni w centrum miasta)",
        options: ["in dem", "in das", "an dem", "an das"],
        correct: "in dem",
        explanation: "Spotkanie WEWNĄTRZ kawiarni - statyczna lokalizacja wymaga celownika 'in dem'. Kawiarnia jako zamknięta przestrzeń gdzie się spotkacie. Skrót 'im Café' powszechnie używany. Gdy pytasz GDZIE się spotykacie (nie DOKĄD idziecie na spotkanie), używasz celownika z 'in'."
      },
      {
        id: "two_way_9",
        question: "Gehen wir heute Abend zusammen _____ _____ Kino?",
        translation: "(Chodźmy dzisiaj wieczorem razem do kina?)",
        options: ["ins", "im", "ans", "am"],
        correct: "ins",
        explanation: "Ruch DO kina - zaproszenie wymaga biernika 'ins' (in plus das). Kino jako cel wyjścia. Akcja chodzenia (gehen) plus cel (Kino) równa się biernik. Skrót 'ins' bardzo powszechny dla 'in das'. Zaproszenie do kina to klasyczna propozycja wieczornej rozrywki."
      },
      {
        id: "two_way_10",
        question: "Die Bücher stehen ordentlich _____ _____ Regal im Arbeitszimmer.",
        translation: "(Książki stoją schludnie na półce w gabinecie)",
        options: ["in dem", "in das", "an dem", "an das"],
        correct: "in dem",
        explanation: "Książki JUŻ stoją - statyczna pozycja wymaga celownika 'in dem'. Półka (das Regal) jako miejsce przechowywania. Uporządkowane książki to znak zorganizowanej przestrzeni. Pozycja wewnątrz półki (między jej granicami) wymaga 'in' z celownikiem - książki zajmują przestrzeń nie są tylko przyłożone do krawędzi."
      },
      {
        id: "two_way_11",
        question: "Ich stelle die neuen Bücher jetzt _____ _____ Regal hinein.",
        translation: "(Stawiam nowe książki teraz na półkę do środka)",
        options: ["in das", "in dem", "auf das", "auf dem"],
        correct: "in das",
        explanation: "STAWIANIE książek - akcja umieszczania wymaga biernika 'in das'. Ruch do wnętrza półki (hinein podkreśla to). Proces organizacji nowych książek. Czasownik 'stellen' (stawiać) zawsze sugeruje aktywne umieszczanie - to kierunkowa akcja wymagająca biernika z przyimkami dwukierunkowymi."
      },
      {
        id: "two_way_12",
        question: "Der Brief liegt _____ _____ Tisch seit heute Morgen schon.",
        translation: "(List leży na stole już od dzisiejszego ranka)",
        options: ["auf dem", "auf den", "an dem", "an den"],
        correct: "auf dem",
        explanation: "List JUŻ leży - statyczna pozycja od rana wymaga celownika 'auf dem'. Stół jako powierzchnia pozioma. Nieodczytany list czeka na uwagę. Czasownik 'liegen' (leżeć) zawsze sygnalizuje pozycję nie ruch - automatycznie myśl o celowniku z przyimkami dwukierunkowymi."
      },
      {
        id: "two_way_13",
        question: "Ich gehe jetzt schnell _____ _____ Supermarkt um die Ecke.",
        translation: "(Idę teraz szybko do supermarketu za rogiem)",
        options: ["in den", "in dem", "an den", "an dem"],
        correct: "in den",
        explanation: "Ruch DO supermarketu - cel zakupów wymaga biernika 'in den'. Supermarket (der Supermarkt) jako budynek do którego wchodzisz. Czasownik ruchu 'gehen' plus cel równa się biernik. Szybkie zakupy za rogiem to wygodna sytuacja - bliskość sklepu oszczędza czas."
      },
      {
        id: "two_way_14",
        question: "Wir kaufen oft frisches Gemüse _____ _____ Markt in unserer Nähe.",
        translation: "(Kupujemy często świeże warzywa na targu w naszej okolicy)",
        options: ["auf dem", "auf den", "in dem", "in den"],
        correct: "auf dem",
        explanation: "Zakupy NA targu - targ jako otwarta przestrzeń gdzie już jesteś wymaga celownika 'auf dem'. Rynek (der Markt) jako miejsce handlu. Regularność zakupów (oft) pokazuje nawyk. Gdy opisujesz GDZIE robisz zakupy (nie DOKĄD idziesz żeby kupić), używasz celownika."
      },
      {
        id: "two_way_15",
        question: "Sie hat das Foto _____ _____ Wand gehängt als Erinnerung schön.",
        translation: "(Powiesiła zdjęcie na ścianę jako piękną pamiątkę)",
        options: ["an die", "an der", "auf die", "auf der"],
        correct: "an die",
        explanation: "Akcja WIESZANIA - Perfect 'hat gehängt' opisuje zakończoną akcję umieszczenia. Mimo że Perfect, pytamy o akcję umieszczenia (DOKĄD powiesiła), nie o obecną pozycję. Biernik 'an die' pokazuje że opisujemy proces wieszania. Zdjęcia jako pamiątki tworzą osobistą atmosferę w domu."
      }
    ]
  }
};

export default part16Categories;