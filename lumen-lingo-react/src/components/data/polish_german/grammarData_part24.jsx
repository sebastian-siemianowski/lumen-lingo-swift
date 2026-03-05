/**
 * POLISH → GERMAN GRAMMAR - PART 24
 * 4 kategorie, 15 pytań każda
 */

import { RefreshCw, Package2, TrendingUp, Crown } from "lucide-react";

export const part24Categories = {
  reflexive_verbs_intensive: {
    name: "Czasowniki zwrotne - intensywne użycie",
    description: "Sich waschen, sich freuen, sich erinnern - pełna systematyka",
    icon: RefreshCw,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    questions: [
      {
        id: "reflex_int_1",
        question: "Ich wasche _____ jeden Morgen gründlich vor dem Frühstück.",
        translation: "(Myję się każdego ranka dokładnie przed śniadaniem)",
        options: ["mich", "mir", "sich", "uns"],
        correct: "mich",
        explanation: "Czasownik 'sich waschen' (myć się) używa biernika 'mich' dla 'ich' - myjesz siebie całego. Zwrotny zaimek w bierniku gdy akcja dotyczy całej osoby. Poranna toaleta to codzienna rutyna. Forma 'wasche mich' pokazuje że jesteś zarówno wykonawcą jak i obiektem akcji - to esencja czasowników zwrotnych."
      },
      {
        id: "reflex_int_2",
        question: "Ich wasche _____ die Hände vor dem Essen immer gründlich.",
        translation: "(Myję sobie ręce przed jedzeniem zawsze dokładnie)",
        options: ["mir", "mich", "sich", "uns"],
        correct: "mir",
        explanation: "Gdy myjesz CZĘŚĆ ciała (ręce), używasz celownika 'mir' - komu myjesz? Sobie. Biernik to obiekt (die Hände). To tzw. celownik zainteresowania. Polski mówi 'myję sobie ręce' podobnie. Mycie rąk przed jedzeniem to podstawowa higiena - 'mir' podkreśla że to dla TWOJEGO dobra robisz."
      },
      {
        id: "reflex_int_3",
        question: "Wir treffen _____ morgen um 10 Uhr vor dem Café zentral.",
        translation: "(Spotykamy się jutro o 10 przed kawiarnią w centrum)",
        options: ["uns", "euch", "sich", "ihnen"],
        correct: "uns",
        explanation: "Czasownik 'sich treffen' (spotykać się) używa biernika 'uns' dla 'wir' - spotykamy nawzajem siebie. To czasownik reciprokalny (wzajemny). Umówione spotkania wymagają koordynacji. Forma 'treffen uns' pokazuje wzajemność akcji - każdy spotyka drugiego, nie jest to jednostronne."
      },
      {
        id: "reflex_int_4",
        question: "Sie zieht _____ schnell um für die Party heute Abend.",
        translation: "(Przebiera się szybko na dzisiejszą imprezę wieczorem)",
        options: ["sich", "ihr", "sie", "ihnen"],
        correct: "sich",
        explanation: "Czasownik 'sich umziehen' (przebierać się) używa biernika 'sich' dla 'sie' - zmienia całe ubranie na sobie. Rozdzielny czasownik zwrotny. Przebieranie na specjalne okazje to typowe. Forma 'zieht sich um' łączy zwrotność z rozdzielnością - przedrostek 'um-' na końcu, 'sich' po czasowniku."
      },
      {
        id: "reflex_int_5",
        question: "Ich putze _____ zweimal am Tag die Zähne für Gesundheit.",
        translation: "(Czyszczę sobie dwa razy dziennie zęby dla zdrowia)",
        options: ["mir", "mich", "sich", "uns"],
        correct: "mir",
        explanation: "Czasownik 'sich die Zähne putzen' używa celownika 'mir' - komu czyszczesz? Sobie. Zęby (biernik) to obiekt. To idiomatyczna konstrukcja. Dwukrotne mycie zębów dziennie to standardowa higiena. Forma z celownikiem podkreśla że dbasz o SWOJE zęby - to dla ciebie, nie dla kogoś innego."
      },
      {
        id: "reflex_int_6",
        question: "Kannst du _____ vorstellen, hier zu leben langfristig?",
        translation: "(Czy możesz sobie wyobrazić, tutaj żyć długoterminowo?)",
        options: ["dir", "dich", "sich", "euch"],
        correct: "dir",
        explanation: "Czasownik 'sich vorstellen' (wyobrażać sobie) używa celownika 'dir' dla 'du' - komu wyobrażasz? Sobie w umyśle. Mentalny obraz wymaga celownika. Wyobrażanie życia w nowym miejscu to ważna decyzja. Forma 'dir vorstellen' pokazuje że to wewnętrzny proces myślowy - tworzysz obraz dla siebie."
      },
      {
        id: "reflex_int_7",
        question: "Wir müssen _____ beeilen - der Zug fährt gleich ab!",
        translation: "(Musimy się pospieszyć - pociąg zaraz odjeżdża!)",
        options: ["uns", "euch", "sich", "ihnen"],
        correct: "uns",
        explanation: "Czasownik 'sich beeilen' (spieszyć się) używa biernika 'uns' - przyspieszamy siebie. Pilność sytuacji wymaga szybkości. Forma 'müssen uns beeilen' z modalnym i zwrotnym. Gonitwa z czasem przed odjazdem pociągu to stresujące - ale czasownik zwrotny elegancko opisuje tę sytuację."
      },
      {
        id: "reflex_int_8",
        question: "Er hat _____ gestern beim Sport verletzt leider am Fuß.",
        translation: "(Zranił się wczoraj przy sporcie niestety w stopę)",
        options: ["sich", "ihm", "ihn", "seinen"],
        correct: "sich",
        explanation: "Czasownik 'sich verletzen' (zranić się) w Perfect - 'hat sich verletzt'. Biernik 'sich' dla 'er'. Kontuzje sportowe się zdarzają. Perfect z czasownikiem zwrotnym używa 'haben' zawsze. Lokalizacja urazu (am Fuß) dodatkowa informacja - zaimek zwrotny pokazuje że sam siebie przypadkowo zranił."
      },
      {
        id: "reflex_int_9",
        question: "Sie kämmt _____ lange die Haare jeden Morgen sorgfältig.",
        translation: "(Czesze sobie długo włosy każdego ranka starannie)",
        options: ["sich", "ihr", "sie", "ihnen"],
        correct: "sich",
        explanation: "Czasownik 'sich kämmen' (czesać się) - TU wyjątkowo możesz użyć biernika 'sich' gdy nie ma dopełnienia dodatkowego. Ale z 'die Haare' lepiej 'kämmt sich die Haare' (sobie włosy). Poranna pielęgnacja włosów to rytuał. Długie włosy wymagają czasu na czesanie - staranność zapobiega plątaniu."
      },
      {
        id: "reflex_int_10",
        question: "Könnt ihr _____ bitte leiser unterhalten? Ich arbeite hier!",
        translation: "(Czy możecie się proszę ciszej rozmawiać? Pracuję tutaj!)",
        options: ["euch", "uns", "sich", "ihnen"],
        correct: "euch",
        explanation: "Czasownik 'sich unterhalten' (rozmawiać) używa biernika 'euch' dla 'ihr' - rozmawiacie ze sobą wzajemnie. Czasownik reciprokalny (wzajemny). Hałas przeszkadza w pracy. Forma 'euch unterhalten' pokazuje wzajemność - każdy rozmawia z drugim, to interakcja dwukierunkowa."
      },
      {
        id: "reflex_int_11",
        question: "Ich erinnere _____ gut an unseren letzten Urlaub zusammen.",
        translation: "(Dobrze pamiętam nasz ostatni wspólny urlop)",
        options: ["mich", "mir", "sich", "uns"],
        correct: "mich",
        explanation: "Czasownik 'sich erinnern an' (pamiętać coś) używa biernika 'mich' plus przyimek 'an'. To konstrukcja zwrotna z przyimkiem. Wspomnienia wakacji są cenne. Forma 'erinnere mich an' standardowa - zwrotny zaimek w bierniku bo pamiętasz w sobie, nie komuś."
      },
      {
        id: "reflex_int_12",
        question: "Sie haben _____ im Urlaub sehr gut erholt endlich!",
        translation: "(Odpoczęli sobie w wakacje bardzo dobrze w końcu!)",
        options: ["sich", "ihnen", "sie", "ihrer"],
        correct: "sich",
        explanation: "Czasownik 'sich erholen' (odpoczywać/regenerować się) w Perfect - 'haben sich erholt'. Biernik 'sich' dla 'sie' (oni). Wakacyjny relaks jest ważny. Perfect od czasowników zwrotnych ZAWSZE z 'haben' nigdy z 'sein'. Odpoczynek regeneruje siły - 'sich erholen' pokazuje wewnętrzny proces odnowy."
      },
      {
        id: "reflex_int_13",
        question: "Ich muss _____ noch warm anziehen - es ist kalt draußen!",
        translation: "(Muszę się jeszcze ciepło ubrać - jest zimno na zewnątrz!)",
        options: ["mich", "mir", "sich", "uns"],
        correct: "mich",
        explanation: "Czasownik 'sich anziehen' (ubierać się) używa biernika 'mich' - ubierasz całego siebie. Rozdzielny czasownik zwrotny. Przysłówek 'warm' (ciepło) opisuje JAK się ubierasz. Odpowiednie ubranie do pogody chroni zdrowie - 'sich anziehen' to podstawowa codzienna czynność opisywana przez czasownik zwrotny."
      },
      {
        id: "reflex_int_14",
        question: "Wir haben _____ über das Missverständnis ausgesprochen ehrlich.",
        translation: "(Wyjaśniliśmy sobie to nieporozumienie szczerze)",
        options: ["uns", "euch", "sich", "ihnen"],
        correct: "uns",
        explanation: "Czasownik 'sich aussprechen über' (wyjaśniać sobie/rozmawiać o) używa biernika 'uns' - wzajemna szczera rozmowa. Perfect 'haben uns ausgesprochen'. Rozdzielny czasownik zwrotny. Otwarta komunikacja rozwiązuje konflikty - 'sich aussprechen' pokazuje że obie strony mówią i słuchają, to proces dwustronny."
      },
      {
        id: "reflex_int_15",
        question: "Sie interessiert _____ sehr für moderne Technologie seit Jahren.",
        translation: "(Interesuje się bardzo nowoczesną technologią od lat)",
        options: ["sich", "ihr", "sie", "ihnen"],
        correct: "sich",
        explanation: "Czasownik 'sich interessieren für' (interesować się czymś) wymaga biernika 'sich' plus przyimka 'für'. To stabilne zainteresowanie. Pasje technologiczne kształtują kariery. Forma 'interessiert sich für' łączy zwrotność z przyimkiem - konstrukcja pokazuje osobiste emocjonalne zaangażowanie w temat."
      }
    ]
  },

  weak_nouns_n_declension: {
    name: "Rzeczowniki słabe (deklinacja -n)",
    description: "Der Student, der Herr, der Name - zawsze z końcówką -n",
    icon: Package2,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "weak_n_1",
        question: "Ich habe gestern einen interessanten _____ kennengelernt hier.",
        translation: "(Poznałem wczoraj ciekawego studenta tutaj)",
        options: ["Studenten", "Student", "Studentes", "Studentin"],
        correct: "Studenten",
        explanation: "Słaby rzeczownik męski 'Student' dodaje '-en' we WSZYSTKICH przypadkach oprócz mianownika! Biernik 'einen Studenten' (nie 'Student'). To specjalna grupa rzeczowników męskich. Większość męskich rzeczowników żywotnych należy do tej grupy. Słabe rzeczowniki zawsze sygnalizują przypadek przez konsekwentną końcówkę -n lub -en."
      },
      {
        id: "weak_n_2",
        question: "Das ist das Auto des _____ von nebenan aus dem dritten Stock.",
        translation: "(To jest samochód sąsiada z sąsiedztwa z trzeciego piętra)",
        options: ["Nachbarn", "Nachbar", "Nachbares", "Nachbarin"],
        correct: "Nachbarn",
        explanation: "Dopełniacz od słabego rzeczownika 'Nachbar' to 'des Nachbarn' - końcówka -n plus rodzajnikowe -s razem. Podwójna końcówka w dopełniaczu słabych rzeczowników. Opis posiadania przez sąsiada. Forma 'des Nachbarn' może wydawać się dziwna ale to standardowa konstrukcja - słabe rzeczowniki konsekwentnie zachowują -n."
      },
      {
        id: "weak_n_3",
        question: "Ich helfe dem _____ bei seinen Hausaufgaben regelmäßig.",
        translation: "(Pomagam uczniowi przy jego zadaniach domowych regularnie)",
        options: ["Schüler", "Schülern", "Schülers", "Schülerin"],
        correct: "Schüler",
        explanation: "UWAGA: 'Schüler' NIE jest słabym rzeczownikiem! To normalny męski rzeczownik bez dodatkowej końcówki. Celownik to po prostu 'dem Schüler'. Ale np. 'Student' byłby 'dem Studenten'. Nie wszystkie rzeczowniki męskie są słabe - trzeba zapamiętać które należą do tej grupy."
      },
      {
        id: "weak_n_4",
        question: "Der _____ hat mir beim Tragen der Koffer geholfen freundlich.",
        translation: "(Pan pomógł mi przyjaźnie przy noszeniu walizek)",
        options: ["Herr", "Herrn", "Herres", "Herren"],
        correct: "Herr",
        explanation: "W MIANOWNIKU nawet słabe rzeczowniki są normalne - 'der Herr' bez dodatkowej końcówki. To jedyny przypadek bez -n. Uprzejma pomoc nieznajomego. Forma mianownikowa 'der Herr' to podstawa - wszystkie inne przypadki dostaną końcówkę -n: dem Herrn, den Herrn, des Herrn."
      },
      {
        id: "weak_n_5",
        question: "Ich kenne den _____ des Direktors persönlich gut seit Jahren.",
        translation: "(Znam osobiście dobrze nazwisko dyrektora od lat)",
        options: ["Namen", "Name", "Names", "Namens"],
        correct: "Namen",
        explanation: "Słaby rzeczownik 'Name' w bierniku to 'den Namen' - końcówka -n. To wyjątkowy słaby rzeczownik bo nijaki! 'Der Name' (męski w mianowniku) ale 'das' można też. Znajomość nazwiska sugeruje bliższą relację. Niektóre słabe rzeczowniki mają mieszane formy - 'Name' przyjmuje -ns w dopełniaczu (des Namens)."
      },
      {
        id: "weak_n_6",
        question: "Wir haben mit einem erfahrenen _____ gesprochen über Recht.",
        translation: "(Rozmawialiśmy z doświadczonym prawnikiem o prawie)",
        options: ["Juristen", "Jurist", "Juristes", "Juristin"],
        correct: "Juristen",
        explanation: "Przyimek 'mit' wymaga celownika - słaby rzeczownik 'Jurist' staje się 'einem Juristen'. Zawody często są słabymi rzeczownikami. Rozmowy z ekspertami są wartościowe. Końcówka -en sygnalizuje że to celownik męski słabego rzeczownika - konsekwentny wzór ułatwia rozpoznanie przypadku."
      },
      {
        id: "weak_n_7",
        question: "Das ist der Hund meines _____ vom zweiten Stock.",
        translation: "(To jest pies mojego sąsiada z drugiego piętra)",
        options: ["Nachbarn", "Nachbar", "Nachbares", "Nachbarin"],
        correct: "Nachbarn",
        explanation: "Dopełniacz słabego rzeczownika - 'meines Nachbarn' z końcówką -n. Posiadacz (sąsiad) w dopełniaczu. Psy sąsiadów są częścią wspólnego życia budynku. Forma dopełniacza słabych rzeczowników zawsze z -n - niezależnie od kontekstu, ta końcówka jest stała."
      },
      {
        id: "weak_n_8",
        question: "Ich glaube dem _____ nicht mehr - er lügt oft leider.",
        translation: "(Nie wierzę już temu chłopakowi - często niestety kłamie)",
        options: ["Jungen", "Junge", "Junges", "Jüngen"],
        correct: "Jungen",
        explanation: "Czasownik 'glauben' wymaga celownika - słaby rzeczownik 'Junge' (chłopak) staje się 'dem Jungen'. Młodość nie usprawiedliwia kłamstwa. Konsekwentne kłamstwa niszczą zaufanie. Końcówka -n w celowniku słabego rzeczownika jasno pokazuje przypadek - forma pomaga w zrozumieniu kto komu w zdaniu."
      },
      {
        id: "weak_n_9",
        question: "Der _____ unterrichtet seit 20 Jahren an dieser Schule.",
        translation: "(Kolega uczy od 20 lat w tej szkole)",
        options: ["Kollege", "Kollegen", "Kolleges", "Kollegin"],
        correct: "Kollege",
        explanation: "Mianownik słabego rzeczownika 'Kollege' (kolega) BEZ końcówki - 'der Kollege'. Podstawowa forma bez zmian. Długi staż nauczycielski. Ale w innych przypadkach będzie 'den Kollegen, dem Kollegen, des Kollegen' - konsekwentna końcówka -n pojawia się wszędzie oprócz mianownika."
      },
      {
        id: "weak_n_10",
        question: "Ich habe einen Brief an den _____ geschrieben gestern.",
        translation: "(Napisałem wczoraj list do prezesa)",
        options: ["Präsidenten", "Präsident", "Präsidentes", "Präsidentin"],
        correct: "Präsidenten",
        explanation: "Biernik słabego rzeczownika 'Präsident' to 'den Präsidenten' - końcówka -en typowa dla wielosylabowych słabych rzeczowników. Oficjalna korespondencja wymaga formalności. Tytuły i stanowiska często są słabymi rzeczownikami - 'Präsident, Student, Assistent' wszystkie słabe."
      },
      {
        id: "weak_n_11",
        question: "Sie ist die Tochter eines bekannten _____ aus der Stadt.",
        translation: "(Jest córką znanego architekta z miasta)",
        options: ["Architekten", "Architekt", "Architektes", "Architektin"],
        correct: "Architekten",
        explanation: "Dopełniacz słabego rzeczownika - 'eines Architekten' z końcówką -en. Zawód ojca definiuje kontekst. Zawody związane z edukacją i prestiżem często słabe rzeczowniki. Forma dopełniacza 'Architekten' jasno pokazuje przypadek - końcówka pomaga w zrozumieniu relacji posiadania."
      },
      {
        id: "weak_n_12",
        question: "Das Herz des _____ schlägt für seine Heimat sehr stark.",
        translation: "(Serce patrioty bije dla swojej ojczyzny bardzo mocno)",
        options: ["Patrioten", "Patriot", "Patriotes", "Patriotin"],
        correct: "Patrioten",
        explanation: "Dopełniacz słabego 'Patriot' to 'des Patrioten' - końcówka -en. Metaforyczne 'serce' reprezentuje emocje. Przywiązanie do ojczyzny to silne uczucie. Słabe rzeczowniki często opisują role społeczne lub zawody - 'Patriot, Soldat, Demokrat' wszystkie w tej grupie."
      },
      {
        id: "weak_n_13",
        question: "Ich danke dem _____ für seine ausgezeichnete Arbeit sehr.",
        translation: "(Dziękuję profesorowi bardzo za jego doskonałą pracę)",
        options: ["Professor", "Professoren", "Professors", "Professorin"],
        correct: "Professor",
        explanation: "UWAGA: 'Professor' ma nieregularną deklinację! Celownik to 'dem Professor' BEZ końcówki, ale biernik 'den Professor' też bez, dopełniacz 'des Professors'. To wyjątek od typowych słabych rzeczowników. Tytuły akademickie czasem mają specjalne formy - 'Professor' zachowuje się inaczej niż typowe słabe rzeczowniki."
      },
      {
        id: "weak_n_14",
        question: "Der _____ hat heute ein wichtiges Urteil verkündet offiziell.",
        translation: "(Sędzia ogłosił dzisiaj ważny wyrok oficjalnie)",
        options: ["Richter", "Richtern", "Richters", "Richterin"],
        correct: "Richter",
        explanation: "UWAGA: 'Richter' NIE jest słabym rzeczownikiem! To normalny męski bez końcówek. Mianownik 'der Richter' pozostaje 'Richter' we wszystkich przypadkach. Wyroki sądowne są wiążące. Nie każdy męski rzeczownik osobowy jest słaby - 'Richter, Lehrer, Arbeiter' są normalne, ale 'Student, Jurist' są słabe."
      },
      {
        id: "weak_n_15",
        question: "Sie gibt dem kleinen _____ ein Spielzeug zum Spielen.",
        translation: "(Daje małemu chłopcu zabawkę do zabawy)",
        options: ["Jungen", "Junge", "Junges", "Jüngen"],
        correct: "Jungen",
        explanation: "Celownik słabego 'Junge' (chłopiec) to 'dem Jungen' - końcówka -n. Czasownik 'geben' wymaga celownika dla odbiorcy. Zabawki dla dzieci to prezenty radości. Forma 'dem Jungen' jasno pokazuje kto jest odbiorcą - słaba deklinacja pomaga w identyfikacji ról w zdaniu."
      }
    ]
  },

  comparative_superlative_complete: {
    name: "Stopniowanie - pełna systematyka",
    description: "Schneller als, am schnellsten, der schnellste - wszystkie formy",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_super_1",
        question: "Mein Auto fährt _____ als dein altes Auto deutlich.",
        translation: "(Mój samochód jeździ szybciej niż twój stary samochód wyraźnie)",
        options: ["schneller", "am schnellsten", "der schnellste", "schnell"],
        correct: "schneller",
        explanation: "Komparatyw 'schneller' (szybciej) plus 'als' (niż) dla bezpośredniego porównania dwóch rzeczy. Od 'schnell' dodajesz '-er'. Polski używa '-iej' (szybciej). Komparatyw zawsze gdy porównujesz DWA elementy - 'A jest bardziej X niż B'. Konstrukcja z 'als' standardowa dla nierówności."
      },
      {
        id: "comp_super_2",
        question: "Sie läuft _____ von allen in der Klasse sportlich.",
        translation: "(Biega najszybciej ze wszystkich w klasie)",
        options: ["am schnellsten", "schneller", "die schnellste", "schnell"],
        correct: "am schnellsten",
        explanation: "Superlatyw przysłówkowy 'am schnellsten' (najszybciej) gdy opisujesz JAK ktoś coś robi. Forma 'am + -sten' dla przysłówków. Porównanie z całą grupą wymaga superlatywu. Ta forma jest używana gdy czasownik opisuje akcję - 'läuft am schnellsten' pokazuje że SPOSÓB biegania jest najszybszy."
      },
      {
        id: "comp_super_3",
        question: "Das ist das _____ Gebäude in der ganzen Stadt hoch.",
        translation: "(To jest najwyższy budynek w całym mieście)",
        options: ["höchste", "höher", "am höchsten", "hoch"],
        correct: "höchste",
        explanation: "Superlatyw przymiotnikowy 'höchste' przed rzeczownikiem - 'das höchste Gebäude'. Końcówka przymiotnikowa -e plus rdzeń superlatywny 'höchst-'. Od 'hoch' nieregularnie 'höher - höchst'. Najwyższe budynki są punktami orientacyjnymi miast - dominują panoramę i stają się symbolami."
      },
      {
        id: "comp_super_4",
        question: "Ich bin heute _____ als gestern - habe gut geschlafen!",
        translation: "(Jestem dzisiaj weselszy niż wczoraj - dobrze spałem!)",
        options: ["fröhlicher", "am fröhlichsten", "der fröhlichste", "fröhlich"],
        correct: "fröhlicher",
        explanation: "Komparatyw 'fröhlicher' (weselszy) z przegłosem (o→ö) plus końcówka -er. Porównanie samego siebie w różnych momentach. Sen wpływa na nastrój. Wiele przymiotników z a, o, u dostaje przegłos w stopniowaniu - 'fröhlich → fröhlicher → am fröhlichsten'. To dodatkowa zmiana fonetyczna."
      },
      {
        id: "comp_super_5",
        question: "Dieses Buch ist _____ interessant wie das andere meiner Meinung.",
        translation: "(Ta książka jest równie interesująca jak tamta moim zdaniem)",
        options: ["so", "als", "wie", "mehr"],
        correct: "so",
        explanation: "Równość 'so...wie' (tak...jak) dla porównań równych - nie komparatyw! Forma 'so interessant wie' pokazuje równy poziom. Polski używa 'tak...jak' identycznie. Gdy dwie rzeczy są RÓWNE w jakiejś cesze, używasz 'so...wie' nie stopniowania - to trzecia opcja obok 'bardziej' i 'mniej'."
      },
      {
        id: "comp_super_6",
        question: "Von allen Schülern arbeitet er _____ und konzentriert.",
        translation: "(Ze wszystkich uczniów pracuje najciężej i najbardziej skoncentrowanie)",
        options: ["am härtesten", "härter", "der härteste", "hart"],
        correct: "am härtesten",
        explanation: "Superlatyw przysłówkowy 'am härtesten' (najciężej) - opisuje JAK pracuje. Od 'hart' (ciężki/twardy) nieregularnie z przegłosem ä. Porównanie z całą grupą. Forma 'am härtesten' pokazuje maksymalny wysiłek w grupie - superlatyw przysłówkowy zawsze z 'am' dla czasowników opisujących akcje."
      },
      {
        id: "comp_super_7",
        question: "Sie ist die _____ Studentin im ganzen Jahrgang akademisch.",
        translation: "(Jest najlepszą studentką w całym roczniku akademicko)",
        options: ["beste", "besser", "am besten", "gut"],
        correct: "beste",
        explanation: "Superlatyw przymiotnikowy 'beste' od 'gut' - CAŁKOWICIE nieregularny! Nie 'gutest' tylko 'best'. Końcówka -e przed rzeczownikiem. To jak polski 'dobry → lepszy → najlepszy'. Bycie najlepszym w roku to osiągnięcie - nieregularne formy 'gut → besser → best-' trzeba zapamiętać jako wyjątek."
      },
      {
        id: "comp_super_8",
        question: "Ich fühle mich heute viel _____ als letzte Woche.",
        translation: "(Czuję się dzisiaj dużo lepiej niż w zeszłym tygodniu)",
        options: ["besser", "am besten", "der beste", "gut"],
        correct: "besser",
        explanation: "Komparatyw 'besser' (lepiej) - NIEREGULARNY od 'gut' (dobrze). Porównanie stanu zdrowia. Słowo 'viel' (dużo) intensyfikuje różnicę. Forma 'besser als' standardowa dla porównań. Poprawa samopoczucia to pozytywna zmiana - komparatyw elegancko opisuje progres bez potrzeby szczegółów."
      },
      {
        id: "comp_super_9",
        question: "Dieser Weg ist _____ kürzer als der andere nach Hause.",
        translation: "(Ta droga jest znacznie krótsza niż tamta do domu)",
        options: ["viel", "mehr", "am meisten", "sehr"],
        correct: "viel",
        explanation: "Przysłówek 'viel' (dużo/znacznie) PRZED komparatywem intensyfikuje różnicę - 'viel kürzer' (dużo krótszy). To nie stopniowanie tylko modyfikator. Znajomość skrótów oszczędza czas. Polski używa 'znacznie' lub 'dużo' podobnie - te słowa wzmacniają komparatyw pokazując że różnica jest duża."
      },
      {
        id: "comp_super_10",
        question: "Im Sommer sind die Tage _____ länger als im Winter.",
        translation: "(Latem dni są znacznie dłuższe niż zimą)",
        options: ["viel", "mehr", "am meisten", "sehr"],
        correct: "viel",
        explanation: "Ponownie 'viel' wzmacnia komparatyw - 'viel länger' (dużo dłuższe). Sezonowe różnice w długości dnia są naturalne. Forma 'viel' przed komparatywem to elegancki sposób podkreślenia znaczącej różnicy - lepiej niż powtarzać 'sehr' czy inne intensyfikatory."
      },
      {
        id: "comp_super_11",
        question: "Er ist _____ der beste Spieler im Team zweifellos klar.",
        translation: "(Jest bez wątpienia najlepszym graczem w zespole)",
        options: ["mit Abstand", "viel", "sehr", "mehr"],
        correct: "mit Abstand",
        explanation: "Wyrażenie 'mit Abstand' (zdecydowanie/bez wątpienia) przed superlatywem intensyfikuje - 'mit Abstand der beste'. Dosłownie 'z dystansem' = znacznie lepszy. Wybitni gracze wyróżniają się. Ta idiomatyczna fraza podkreśla że różnica między nim a resztą jest ogromna - nie tylko najlepszy ale ZNACZNIE najlepszy."
      },
      {
        id: "comp_super_12",
        question: "Je _____ du übst, desto besser wirst du natürlich!",
        translation: "(Im więcej ćwiczysz, tym lepiej będziesz oczywiście!)",
        options: ["mehr", "viel", "am meisten", "sehr"],
        correct: "mehr",
        explanation: "Konstrukcja 'je...desto' (im...tym) wymaga komparatywów - 'je mehr...desto besser' (im więcej...tym lepiej). To pokazuje proporcjonalną relację. Ćwiczenie prowadzi do poprawy. Forma 'mehr' to komparatyw od 'viel' - nieregularny ale bardzo użyteczny w konstrukcji je-desto pokazującej zależności."
      },
      {
        id: "comp_super_13",
        question: "Dieses Restaurant ist das _____ in der ganzen Gegend hier.",
        translation: "(Ta restauracja jest najdroższa w całej okolicy tutaj)",
        options: ["teuerste", "teurer", "am teuersten", "teuer"],
        correct: "teuerste",
        explanation: "Superlatyw przymiotnikowy 'teuerste' przed rzeczownikiem - 'das teuerste' (najdroższa). Od 'teuer' z przegłosem (eu→eu, ale 'er' na końcu utrudnia). Wysokie ceny restauracji mogą zaskakiwać. Forma 'das teuerste' z określonym rodzajnikiem i końcówką -e standardowa dla superlatywu przed rzeczownikiem."
      },
      {
        id: "comp_super_14",
        question: "Ich habe _____ Geld als du - ich bin Student arm!",
        translation: "(Mam mniej pieniędzy niż ty - jestem biednym studentem!)",
        options: ["weniger", "am wenigsten", "das wenigste", "wenig"],
        correct: "weniger",
        explanation: "Komparatyw 'weniger' (mniej) NIEREGULARNY od 'wenig' (mało). Porównanie zasobów finansowych. Studenci często ograniczeni budżetowo. Forma 'weniger als' (mniej niż) to przeciwieństwo 'mehr als' - oba komparatywy nieregularne ale bardzo użyteczne w codziennych porównaniach."
      },
      {
        id: "comp_super_15",
        question: "Das war der _____ Tag in meinem ganzen Leben bisher!",
        translation: "(To był najgorszy dzień w całym moim życiu dotychczas!)",
        options: ["schlimmste", "schlimmer", "am schlimmsten", "schlimm"],
        correct: "schlimmste",
        explanation: "Superlatyw przymiotnikowy 'schlimmste' (najgorszy) przed rzeczownikiem - 'der schlimmste Tag'. Od 'schlimm' regularnie plus końcówka -e. Określony rodzajnik 'der' wymaga słabej końcówki. Bardzo złe dni zdarzają się wszystkim - superlatyw podkreśla ekstremalność negatywnego doświadczenia, pozwala wyrazić skalę trudności."
      }
    ]
  },

  adjectival_nouns_complete: {
    name: "Rzeczowniki przymiotnikowe - kompletne",
    description: "Der Deutsche, die Kranke, etwas Neues - przymiotniki jako rzeczowniki",
    icon: Crown,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "adj_noun_1",
        question: "Ich habe gestern einen _____ getroffen aus München zufällig.",
        translation: "(Spotkałem wczoraj Niemca z Monachium przypadkowo)",
        options: ["Deutschen", "Deutsch", "Deutsche", "Deutscher"],
        correct: "Deutschen",
        explanation: "Przymiotnik 'deutsch' (niemiecki) jako rzeczownik 'Deutscher' (Niemiec) - WIELKA litera! W bierniku z nieokreślonym 'einen' dostaje końcówkę -en jak zwykły przymiotnik. To przymiotnik udający rzeczownik - deklinuje się jak przymiotnik. Narodowości często używają tej konstrukcji - 'Deutscher, Pole, Franzose' zachowują się jak przymiotniki."
      },
      {
        id: "adj_noun_2",
        question: "Die _____ wartet schon lange auf den Arzt im Wartezimmer.",
        translation: "(Chora kobieta czeka już długo na lekarza w poczekalni)",
        options: ["Kranke", "Krank", "Kranken", "Kranker"],
        correct: "Kranke",
        explanation: "Przymiotnik 'krank' (chory) jako rzeczownik 'die Kranke' (chora osoba/pacjentka) - mianownik żeński z określonym 'die' dostaje słabą końcówkę -e. Wielka litera bo rzeczownik. Pacjenci w poczekalni to powszechny widok. Forma 'die Kranke' elegancko opisuje osobę przez jej stan - krócej niż 'die kranke Frau'."
      },
      {
        id: "adj_noun_3",
        question: "Ich habe etwas _____ im Geschäft gekauft gestern schön.",
        translation: "(Kupiłem coś nowego w sklepie wczoraj)",
        options: ["Neues", "Neu", "Neue", "Neuen"],
        correct: "Neues",
        explanation: "Po nieokreślonych zaimkach jak 'etwas, nichts, viel, wenig' przymiotniki stają się rzeczownikami nijakimi - 'etwas Neues' (coś nowego). WIELKA litera! Końcówka -es jak silna deklinacja nijaka. Zakupy nowych rzeczy to przyjemność. Konstrukcja 'etwas + przymiotnik' bardzo użyteczna gdy nie chcesz precyzować CO dokładnie."
      },
      {
        id: "adj_noun_4",
        question: "Der _____ dort ist mein Kollege aus der Firma seit Jahren.",
        translation: "(Ten wysoki tam jest moim kolegą z firmy od lat)",
        options: ["Große", "Groß", "Großen", "Großer"],
        correct: "Große",
        explanation: "Przymiotnik 'groß' (wysoki/duży) jako rzeczownik męski - 'der Große' (ten wysoki). Mianownik z określonym 'der' dostaje słabą końcówkę -e. Wielka litera! Opisywanie ludzi przez cechy fizyczne. Forma 'der Große' krótsza niż 'der große Mann' - ekonomia języka przy jasnym kontekście."
      },
      {
        id: "adj_noun_5",
        question: "Ich habe nichts _____ gehört von ihm in letzter Zeit.",
        translation: "(Nie słyszałem nic dobrego od niego ostatnio)",
        options: ["Gutes", "Gut", "Gute", "Guten"],
        correct: "Gutes",
        explanation: "Po 'nichts' (nic) przymiotnik jako rzeczownik nijaki - 'nichts Gutes' (nic dobrego). Wielka litera plus końcówka -es. Brak dobrych wiadomości może martwić. Od 'gut' (dobry) forma 'Gutes' używana abstrakcyjnie - nie konkretna rzecz tylko abstrakcyjne dobro czy dobre wieści."
      },
      {
        id: "adj_noun_6",
        question: "Sie hilft immer den _____ in unserer Gesellschaft großzügig.",
        translation: "(Zawsze hojnie pomaga biednym w naszym społeczeństwie)",
        options: ["Armen", "Arm", "Arme", "Armer"],
        correct: "Armen",
        explanation: "Przymiotnik 'arm' (biedny) jako rzeczownik mnogi - 'den Armen' (biednym) celownik. Czasownik 'helfen' wymaga celownika. Końcówka -en jak w przymiotniku mnogim. Pomoc potrzebującym to ważna wartość. Forma 'den Armen' pokazuje grupę społeczną zdefiniowaną przez cechę - przymiotnikowe rzeczowniki często dla grup."
      },
      {
        id: "adj_noun_7",
        question: "Ich möchte gerne etwas _____ trinken - nicht Wasser!",
        translation: "(Chciałbym wypić coś zimnego - nie wodę!)",
        options: ["Kaltes", "Kalt", "Kalte", "Kalten"],
        correct: "Kaltes",
        explanation: "Po 'etwas' przymiotnik jako rzeczownik nijaki - 'etwas Kaltes' (coś zimnego). Końcówka -es silna nijaka. Pragnienie zimnego napoju. Od 'kalt' (zimny) forma 'Kaltes' abstrakcyjna - nie konkretny napój tylko CECHA (zimność) napoju której szukasz."
      },
      {
        id: "adj_noun_8",
        question: "Die _____ kommen oft hierher zum Einkaufen aus der Umgebung.",
        translation: "(Miejscowi przychodzą tu często na zakupy z okolicy)",
        options: ["Einheimischen", "Einheimisch", "Einheimische", "Einheimischer"],
        correct: "Einheimischen",
        explanation: "Przymiotnik 'einheimisch' (miejscowy/lokalny) jako rzeczownik mnogi - 'die Einheimischen' (miejscowi). Mianownik mnogi z określonym 'die' dostaje słabą końcówkę -en. Lokalni mieszkańcy znają najlepsze miejsca. Forma 'die Einheimischen' elegancko opisuje grupę przez miejsce pochodzenia - przymiotnikowy rzeczownik dla wspólnoty."
      },
      {
        id: "adj_noun_9",
        question: "Er ist ein _____ in der Firma - arbeitet schon 40 Jahre!",
        translation: "(Jest starym pracownikiem w firmie - pracuje już 40 lat!)",
        options: ["Alter", "Alt", "Alten", "Altes"],
        correct: "Alter",
        explanation: "Przymiotnik 'alt' (stary) jako rzeczownik męski - 'ein Alter' (stary/weteran). Mianownik z nieokreślonym 'ein' dostaje silną końcówkę -er. Wielka litera! Długi staż to doświadczenie. Forma 'ein Alter' może też oznaczać 'staruszek' - kontekst określa czy to o wieku czy stażu."
      },
      {
        id: "adj_noun_10",
        question: "Ich esse gerne etwas _____ zum Nachtisch nach dem Essen.",
        translation: "(Lubię zjeść coś słodkiego na deser po jedzeniu)",
        options: ["Süßes", "Süß", "Süße", "Süßen"],
        correct: "Süßes",
        explanation: "Po 'etwas' przymiotnik 'süß' (słodki) jako rzeczownik nijaki - 'etwas Süßes' (coś słodkiego). Końcówka -es standardowa. Desery są popularnym zakończeniem posiłku. Forma 'etwas Süßes' ogólna - może być ciastko, czekolada, lody - każda słodycz pasuje."
      },
      {
        id: "adj_noun_11",
        question: "Viele _____ studieren an dieser Universität aus verschiedenen Ländern.",
        translation: "(Wielu obcokrajowców studiuje na tym uniwersytecie z różnych krajów)",
        options: ["Ausländer", "Ausländisch", "Ausländische", "Ausland"],
        correct: "Ausländer",
        explanation: "UWAGA: 'Ausländer' to prawdziwy rzeczownik (nie przymiotnikowy)! Mnoga 'Ausländer' bez dodatkowej końcówki. Nie wszystko co wygląda jak przymiotnik to przymiotnikowy rzeczownik. Międzynarodowi studenci wzbogacają kampusy. Mimo że 'ausländisch' istnieje jako przymiotnik, forma rzeczownikowa 'Ausländer' jest standardowa i nie deklinuje się jak przymiotnik."
      },
      {
        id: "adj_noun_12",
        question: "Das ist nichts _____ - das ist ganz normal alltäglich!",
        translation: "(To nie jest nic szczególnego - to całkiem normalne codzienne!)",
        options: ["Besonderes", "Besonder", "Besondere", "Besonderen"],
        correct: "Besonderes",
        explanation: "Po 'nichts' przymiotnik 'besonder' (szczególny) jako rzeczownik nijaki - 'nichts Besonderes' (nic szczególnego). Końcówka -es. To powszechne wyrażenie bagatelizujące. Forma 'nichts Besonderes' to idiomatyczny sposób powiedzenia że coś jest przeciętne - używana z fałszywą skromnością lub realistyczną oceną."
      },
      {
        id: "adj_noun_13",
        question: "Wir haben viel _____ erlebt auf unserer Reise spannend!",
        translation: "(Przeżyliśmy wiele ciekawego w naszej podróży ekscytująco!)",
        options: ["Interessantes", "Interessant", "Interessante", "Interessanten"],
        correct: "Interessantes",
        explanation: "Po 'viel' (wiele) przymiotnik jako rzeczownik nijaki - 'viel Interessantes' (wiele ciekawego). Końcówka -es silna nijaka. Podróże pełne są doświadczeń. Forma z 'viel' dla niepoliczalnych abstrakcji - 'wiele ciekawych rzeczy/doświadczeń' skompresowane w dwa słowa."
      },
      {
        id: "adj_noun_14",
        question: "Der _____ sitzt alleine in der Ecke und liest still.",
        translation: "(Nieznajomy siedzi sam w rogu i czyta cicho)",
        options: ["Fremde", "Fremd", "Fremden", "Fremder"],
        correct: "Fremde",
        explanation: "Przymiotnik 'fremd' (obcy) jako rzeczownik męski - 'der Fremde' (nieznajomy). Mianownik z określonym 'der' dostaje słabą końcówkę -e. Samotność nieznajomego budzi ciekawość. Forma 'der Fremde' neutralnie opisuje osobę którą nie znasz - bez negatywnych konotacji, po prostu ktoś nieznany."
      },
      {
        id: "adj_noun_15",
        question: "Sie hat mir etwas sehr _____ erzählt über ihre Vergangenheit.",
        translation: "(Opowiedziała mi coś bardzo osobistego o swojej przeszłości)",
        options: ["Persönliches", "Persönlich", "Persönliche", "Persönlichen"],
        correct: "Persönliches",
        explanation: "Po 'etwas' przymiotnik 'persönlich' (osobisty) jako rzeczownik nijaki - 'etwas Persönliches' (coś osobistego). Intensyfikator 'sehr' (bardzo) przed przymiotnikiem OK. Dzielenie się prywatnymi historiami to akt zaufania. Forma pozwala elegancko powiedzieć że temat był intymny bez konkretyzowania - dyskrecja w opisie."
      }
    ]
  },

  negation_complete_patterns: {
    name: "Negacja - kompletne wzory",
    description: "Nicht, kein, nie, niemals - wszystkie formy przeczenia",
    icon: Package2,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    questions: [
      {
        id: "neg_compl_1",
        question: "Ich habe _____ Geld mehr - alles ausgegeben leider!",
        translation: "(Nie mam już więcej pieniędzy - wszystko wydane niestety!)",
        options: ["kein", "nicht", "keine", "keinen"],
        correct: "kein",
        explanation: "Negacja rzeczownika wymaga 'kein' nie 'nicht' - 'kein Geld' (nie ma pieniędzy/żadnych pieniędzy). Nijaki 'Geld' używa 'kein' w mianowniku. To jak nieokreślony rodzajnik w negatywie. Brak środków to problem finansowy. 'Kein' deklinuje się jak 'ein' ale z negacją - 'kein Geld, keine Zeit, keine Freunde'."
      },
      {
        id: "neg_compl_2",
        question: "Sie kommt heute _____ - sie ist krank zu Hause.",
        translation: "(Nie przychodzi dzisiaj - jest chora w domu)",
        options: ["nicht", "kein", "keine", "keinen"],
        correct: "nicht",
        explanation: "Negacja czasownika używa 'nicht' - 'kommt nicht' (nie przychodzi). Pozycja 'nicht' zazwyczaj przed uzupełnieniem lub na końcu. Choroba usprawiedliwia nieobecność. 'Nicht' to ogólna negacja dla czasowników, przymiotników, przysłówków - uniwersalne słowo przecząc e gdy nie negujesz rzeczownika."
      },
      {
        id: "neg_compl_3",
        question: "Ich habe _____ Zeit für lange Gespräche jetzt momentan.",
        translation: "(Nie mam czasu na długie rozmowy teraz)",
        options: ["keine", "nicht", "kein", "keinen"],
        correct: "keine",
        explanation: "Negacja rzeczownika żeńskiego - 'keine Zeit' (żadnego czasu). Żeński mianownik 'Zeit' wymaga 'keine'. To częsta wymówka. Forma 'keine' to zanegowany nieokreślony rodzajnik - jak 'eine' ale z negacją. Brak czasu to powszechne uczucie w zajętym życiu."
      },
      {
        id: "neg_compl_4",
        question: "Das ist _____ eine gute Idee - viel zu riskant gefährlich!",
        translation: "(To nie jest dobry pomysł - dużo za ryzykowne niebezpieczne!)",
        options: ["keine", "nicht", "kein", "keinen"],
        correct: "keine",
        explanation: "Negacja całej frazy rzeczownikowej - 'keine gute Idee' (nie dobry pomysł). Żeński biernik 'Idee' wymaga 'keine'. Odrzucenie ryzykownych pomysłów to rozsądne. Gdy negujesz rzeczownik z przymiotnikiem, używasz 'kein' nie 'nicht' - 'keine gute Idee' brzmi naturalniej niż 'nicht eine gute Idee'."
      },
      {
        id: "neg_compl_5",
        question: "Er ist _____ hier - er ist nach Hause gegangen schon.",
        translation: "(Nie ma go tutaj - poszedł już do domu)",
        options: ["nicht", "kein", "keine", "keinen"],
        correct: "nicht",
        explanation: "Negacja przysłówka miejsca 'hier' (tutaj) wymaga 'nicht' - 'nicht hier' (nie tutaj). Pozycja 'nicht' bezpośrednio przed negowanym elementem. Wyjście do domu wyjaśnia nieobecność. 'Nicht' neguję konkretnie lokalizację - pokazuje że gdzieś JEST ale nie w tym miejscu."
      },
      {
        id: "neg_compl_6",
        question: "Ich habe _____ gesehen im Kino - war nicht da.",
        translation: "(Nikogo nie widziałem w kinie - nie było tam)",
        options: ["niemanden", "nicht", "keinen", "keine"],
        correct: "niemanden",
        explanation: "Negacja 'jemand' (ktoś) to 'niemand' (nikt) - w bierniku 'niemanden' (nikogo). Mocniejsza negacja niż 'keinen Menschen'. Puste kino to smutny widok. Forma 'niemanden' to kompletna negacja osób - silniejsza i bardziej kategoryczna niż 'keinen' która zostawia możliwość alternatyw."
      },
      {
        id: "neg_compl_7",
        question: "Ich war _____ in meinem Leben in Afrika bisher noch.",
        translation: "(Nigdy w życiu nie byłem dotąd w Afryce)",
        options: ["nie", "niemals", "nicht", "kein"],
        correct: "nie",
        explanation: "Negacja czasowa 'nie' (nigdy) dla całkowitego braku w czasie. Mocniejsza forma to 'niemals' (nigdy w życiu). Polski 'nigdy' odpowiada. Niewypróbowane kontynenty kuszą wyobraźnię. 'Nie' krótsze i powszechniejsze niż 'niemals' - obie oznaczają zero razy w historii ale 'nie' casualowe, 'niemals' emfatyczne."
      },
      {
        id: "neg_compl_8",
        question: "Das funktioniert _____ richtig - etwas ist kaputt bestimmt.",
        translation: "(To nie działa prawidłowo - coś jest na pewno zepsute)",
        options: ["nicht", "kein", "keine", "keinen"],
        correct: "nicht",
        explanation: "Negacja przysłówka 'richtig' (prawidłowo) wymaga 'nicht' - 'nicht richtig' (nie prawidłowo). Pozycja przed negowanym przysłówkiem. Usterki techniczne frustrują. 'Nicht' precyzyjnie wskazuje że SPOSÓB działania jest zły - nie że całkiem nie działa tylko że działa niewłaściwie."
      },
      {
        id: "neg_compl_9",
        question: "Wir haben _____ einzige Frage zu diesem Thema komplex.",
        translation: "(Nie mamy ani jednego pytania do tego złożonego tematu)",
        options: ["keine", "nicht", "kein", "keinen"],
        correct: "keine",
        explanation: "Negacja rzeczownika żeńskiego z intensyfikatorem 'einzige' (ani jednego) - 'keine einzige Frage'. Żeński biernik 'Frage'. Brak pytań może znaczyć pełne zrozumienie lub brak zainteresowania. Forma 'keine einzige' to silna negacja - podkreśla kompletny brak nawet najmniejszej ilości."
      },
      {
        id: "neg_compl_10",
        question: "Sie kommt _____ mehr zu unseren Treffen leider regelmäßig.",
        translation: "(Nie przychodzi już więcej na nasze spotkania niestety regularnie)",
        options: ["nicht", "kein", "keine", "niemals"],
        correct: "nicht",
        explanation: "Negacja czasownika z 'mehr' (już/więcej) - 'kommt nicht mehr' (nie przychodzi już). Pozycja 'nicht' przed 'mehr'. Zakończenie uczestnictwa. Fraza 'nicht mehr' idiomatyczna dla wyrażania że coś co było już nie jest - pokazuje zmianę stanu z pozytywu na negację."
      },
      {
        id: "neg_compl_11",
        question: "Ich will _____ über dieses Thema sprechen - zu schmerzhaft.",
        translation: "(Nie chcę rozmawiać o tym temacie - za bolesne)",
        options: ["nicht", "kein", "keine", "keinen"],
        correct: "nicht",
        explanation: "Negacja bezokolicznika po modalnym - 'will nicht sprechen' (nie chcę mówić). Pozycja 'nicht' przed bezokolicznikiem. Unikanie bolesnych tematów jest ochronne. Forma 'will nicht' jasno pokazuje odmowę - modalne z negacją wyraża silne stanowisko wobec akcji."
      },
      {
        id: "neg_compl_12",
        question: "Das ist _____ mein Buch - es gehört meiner Schwester!",
        translation: "(To nie jest moja książka - należy do mojej siostry!)",
        options: ["nicht", "kein", "keine", "keinen"],
        correct: "nicht",
        explanation: "Negacja zaimka dzierżawczego wymaga 'nicht' nie 'kein' - 'nicht mein' (nie mój). Gdy negujesz już istniejący określnik (mein, dein, dieser) używasz 'nicht'. Wyjaśnienie własności. Forma 'nicht mein' podkreśla że to CZYJEŚ INNE - nie brak książki tylko błędna atrybucja posiadania."
      },
      {
        id: "neg_compl_13",
        question: "Ich habe _____ gemacht - wirklich gar nichts heute faul!",
        translation: "(Nic nie zrobiłem - naprawdę kompletnie nic dzisiaj leniwie!)",
        options: ["nichts", "nicht", "kein", "keine"],
        correct: "nichts",
        explanation: "Zaimek negatywny 'nichts' (nic) jako obiekt - 'nichts gemacht' (nic nie zrobił). Silniejsze niż 'kein'. Dodatkowe 'gar' wzmacnia. Leniwe dni się zdarzają. Forma 'nichts' to kompletna negacja rzeczy - żadnego obiektu, zero aktywności. Szczególnie z 'gar nichts' podkreśla absolutną bezczynność."
      },
      {
        id: "neg_compl_14",
        question: "Das schmeckt mir _____ gut - viel zu salzig für mich!",
        translation: "(Nie smakuje mi dobrze - dużo za słone dla mnie!)",
        options: ["nicht", "kein", "keine", "keinen"],
        correct: "nicht",
        explanation: "Negacja przysłówka 'gut' (dobrze) wymaga 'nicht' - 'schmeckt nicht gut' (nie smakuje dobrze). Pozycja przed negowanym przysłówkiem. Zbyt słone jedzenie jest nieprzyjemne. 'Nicht gut' łagodniejsze niż 'schlecht' (źle) - dyplomatyczny sposób krytyki bez obrażania kucharza."
      },
      {
        id: "neg_compl_15",
        question: "Wir gehen heute _____ ins Kino - bleiben zu Hause lieber.",
        translation: "(Nie idziemy dzisiaj do kina - zostajemy raczej w domu)",
        options: ["nicht", "kein", "keine", "niemals"],
        correct: "nicht",
        explanation: "Negacja całej frazy kierunkowej 'ins Kino' - 'nicht ins Kino' (nie do kina). Pozycja 'nicht' przed frazą miejsca. Zmiana planów na domowe. Forma 'nicht' + kierunek neguje cel wyjścia - pozostawia otwartą możliwość pójścia GDZIEŚ INDZIEJ, tylko nie do kina."
      }
    ]
  }
};

export default part24Categories;