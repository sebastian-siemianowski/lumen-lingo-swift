/**
 * POLISH → GERMAN GRAMMAR - PART 17
 * 4 kategorie, 15 pytań każda
 */

import { Zap, Users, Calendar, BookText } from "lucide-react";

export const part17Categories = {
  mixed_verbs_conjugation: {
    name: "Czasowniki mieszane - odmiana",
    description: "Wissen, kennen, denken, bringen - nieregularne wzory",
    icon: Zap,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    questions: [
      {
        id: "mix_verb_1",
        question: "_____ du, wo der Bahnhof ist in dieser Stadt?",
        translation: "(Czy wiesz, gdzie jest dworzec w tym mieście?)",
        options: ["Weißt", "Kennst", "Wusstest", "Kannst"],
        correct: "Weißt",
        explanation: "Czasownik 'wissen' (wiedzieć fakty) odmienia się nieregularnie - forma 'weißt' dla 'du'. To pytanie o wiedzę faktograficzną - gdzie znajduje się miejsce. 'Wissen' używasz dla faktów i informacji, podczas gdy 'kennen' dla znajomości osób/miejsc. Nieregularna odmiana 'wissen' to: ich weiß, du weißt, er weiß - zmiana samogłoski charakterystyczna."
      },
      {
        id: "mix_verb_2",
        question: "Ich _____ diesen Mann gut - wir arbeiten zusammen seit Jahren.",
        translation: "(Znam tego mężczyznę dobrze - pracujemy razem od lat)",
        options: ["kenne", "weiß", "kannte", "kann"],
        correct: "kenne",
        explanation: "Czasownik 'kennen' (znać osobę/miejsce) dla osobistej znajomości. Długoletnia współpraca tworzy znajomość. 'Kennen' używasz gdy mówisz o znajomości ludzi, miejsc, rzeczy przez doświadczenie. To różnica między wiedzieć O kimś (wissen von) a znać kogoś osobiście (kennen) - drugie jest bardziej osobiste."
      },
      {
        id: "mix_verb_3",
        question: "Sie _____ mir gestern ein schönes Geschenk zum Geburtstag mitgebracht.",
        translation: "(Przyniosła mi wczoraj piękny prezent na urodziny)",
        options: ["hat", "ist", "hatte", "war"],
        correct: "hat",
        explanation: "Czasownik 'bringen' (przynosić) w Perfect używa 'haben' - forma 'hat gebracht'. Choć to czasownik ruchu, 'bringen' zalicza się do grupy używającej 'haben' nie 'sein'. Imiesłów 'gebracht' to nieregularna forma - nie 'gebringt'. Przyniesienie prezentu to gest troski i pamięci o kimś."
      },
      {
        id: "mix_verb_4",
        question: "Ich _____ oft an meine Familie in Polen, besonders am Wochenende.",
        translation: "(Myślę często o mojej rodzinie w Polsce, szczególnie w weekendy)",
        options: ["denke", "weiß", "kenne", "glaube"],
        correct: "denke",
        explanation: "Czasownik 'denken' (myśleć) regularny w teraźniejszości - forma 'denke' dla 'ich'. Myśli o rodzinie to naturalne, szczególnie gdy są daleko. Czasownik 'denken an' (myśleć o) wymaga przyimka 'an' z biernikiem. Weekendy często budzą tęsknotę za bliskimi - więcej czasu na refleksję."
      },
      {
        id: "mix_verb_5",
        question: "Wir _____ nicht, dass es heute regnen würde so stark!",
        translation: "(Nie wiedzieliśmy, że dzisiaj będzie tak mocno padać!)",
        options: ["wussten", "kannten", "konnten", "wollten"],
        correct: "wussten",
        explanation: "Przeszły czas 'wissen' to 'wussten' dla 'wir' - nieregularna forma. Brak wiedzy o pogodzie to częste zaskoczenie. Forma 'wussten' pochodzi od rdzenia 'wiss-' który zmienia się w 'wuss-' w przeszłości. Ta nieregularność wymaga zapamiętania ale forma jest bardzo użyteczna."
      },
      {
        id: "mix_verb_6",
        question: "_____ ihr diese Stadt schon? Sie ist wirklich sehenswert!",
        translation: "(Czy znacie już to miasto? Jest naprawdę warte zobaczenia!)",
        options: ["Kennt", "Wisst", "Könnt", "Wollt"],
        correct: "Kennt",
        explanation: "Czasownik 'kennen' dla znajomości miasta przez doświadczenie - byliście tam, widzieliście. To pytanie o osobiste doświadczenie z miejscem. Rekomendacja 'sehenswert' (warte zobaczenia) zachęca do wizyty. 'Kennen' tworzy osobistą więź z miejscem - nie tylko wiedzieć gdzie jest, ale doświadczyć go."
      },
      {
        id: "mix_verb_7",
        question: "Er _____ immer, dass er Recht hat, auch wenn er falsch liegt.",
        translation: "(Zawsze myśli, że ma rację, nawet gdy się myli)",
        options: ["denkt", "weiß", "kennt", "glaubt"],
        correct: "denkt",
        explanation: "Czasownik 'denken' (myśleć/sądzić) dla wyrażania opinii - forma 'denkt' dla 'er'. Przekonanie o własnej racji mimo błędów to ludzka słabość. Czasownik pokazuje subiektywne myślenie nie obiektywną wiedzę. Używasz 'denken' gdy opisujesz czyjeś przekonania które mogą nie odpowiadać rzeczywistości."
      },
      {
        id: "mix_verb_8",
        question: "Ich habe dir gestern frische Blumen aus dem Garten _____.",
        translation: "(Przyniosłem ci wczoraj świeże kwiaty z ogrodu)",
        options: ["gebracht", "bringen", "brachte", "gebringt"],
        correct: "gebracht",
        explanation: "Imiesłów od 'bringen' to nieregularna forma 'gebracht' - nie 'gebringt'. Perfect 'habe gebracht' standardowa konstrukcja. Przynoszenie kwiatów to piękny gest pokazujący troskę. Nieregularność 'bringen-brachte-gebracht' wymaga zapamiętania - podobnie jak polski 'przynosić-przyniósł-przyniesiony'."
      },
      {
        id: "mix_verb_9",
        question: "_____ du, dass morgen ein Feiertag ist? Wir haben frei!",
        translation: "(Czy wiesz, że jutro jest święto? Mamy wolne!)",
        options: ["Weißt", "Kennst", "Denkst", "Kannst"],
        correct: "Weißt",
        explanation: "Pytanie o wiedzę faktograficzną - czy jesteś świadomy święta. Forma 'weißt' nieregularna od 'wissen'. Dzielenie się dobrą wiadomością o wolnym dniu. Święta to radosne niespodzianki, szczególnie gdy o nich zapomnimy - 'wissen' służy do sprawdzania czy ktoś zna taki fakt."
      },
      {
        id: "mix_verb_10",
        question: "Sie _____ lange darüber nach, bevor sie eine Entscheidung trifft wichtige.",
        translation: "(Myśli długo nad tym, zanim podejmie ważną decyzję)",
        options: ["denkt", "weiß", "kennt", "meint"],
        correct: "denkt",
        explanation: "Czasownik 'nachdenken' (zastanawiać się) - 'denkt nach' w czasie teraźniejszym. Rozdzielny czasownik pokazuje proces myślowy. Staranne rozważanie przed decyzją to znak mądrości. Przedrostek 'nach' podkreśla dogłębność myślenia - 'nach' sugeruje gruntowną refleksję."
      },
      {
        id: "mix_verb_11",
        question: "Wir haben unseren Kindern viele gute Werte _____.",
        translation: "(Przynieśliśmy naszym dzieciom wiele dobrych wartości)",
        options: ["beigebracht", "beibringen", "brachten bei", "bringen bei"],
        correct: "beigebracht",
        explanation: "Czasownik rozdzielny 'beibringen' (nauczać/przekazywać) w Perfect - imiesłów 'beigebracht'. Przekazywanie wartości dzieciom to rodzicielski obowiązek. Przedrostek 'bei-' łączy się z 'gebracht' w Perfect. Edukacja moralna to długoterminowy proces wymagający cierpliwości i konsekwencji."
      },
      {
        id: "mix_verb_12",
        question: "_____ du, wie man dieses Wort richtig ausspricht auf Deutsch?",
        translation: "(Czy wiesz jak się poprawnie wymawia to słowo po niemiecku?)",
        options: ["Weißt", "Kennst", "Kannst", "Denkst"],
        correct: "Weißt",
        explanation: "Pytanie o wiedzę praktyczną - jak coś zrobić - używa 'wissen'. Forma 'weißt du, wie...' to częsta konstrukcja dla pytań instruktażowych. Poprawna wymowa jest kluczowa w nauce języka. 'Wissen wie' (wiedzieć jak) to użyteczna fraza dla pytań o umiejętności lub procedury."
      },
      {
        id: "mix_verb_13",
        question: "Er hat uns interessante Geschichten von seiner Reise _____.",
        translation: "(Opowiedział nam ciekawe historie ze swojej podróży)",
        options: ["erzählt", "erzählen", "erzählte", "erzahlt"],
        correct: "erzählt",
        explanation: "Czasownik 'erzählen' (opowiadać) regularny - Perfect 'hat erzählt'. Dzielenie się doświadczeniami z podróży to sposób na przeżywanie przygód ponownie. Czasownik 'erzählen' wymaga celownika dla słuchaczy (uns) i biernika dla historii. Opowieści podróżne łączą ludzi przez wspólne doświadczanie wspomnień."
      },
      {
        id: "mix_verb_14",
        question: "Ich _____ mir immer die Namen neuer Leute schwer merken.",
        translation: "(Ciężko mi zawsze zapamiętać nazwiska nowych ludzi)",
        options: ["kann", "weiß", "kenne", "muss"],
        correct: "kann",
        explanation: "Czasownik modalny 'können' dla zdolności - 'może nie umieć' zapamiętać. Wyrażanie trudności z pamięcią to szczera samoocena. Konstrukcja 'sich etwas merken' (zapamiętać sobie coś) wymaga zwrotnego celownika. Przyznanie się do słabości w zapamiętywaniu to pierwszy krok do jej poprawy."
      }
    ]
  },

  noun_verb_collocations: {
    name: "Kolokacje rzeczownik-czasownik",
    description: "Eine Entscheidung treffen, einen Fehler machen - stałe połączenia",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "colloc_1",
        question: "Wir müssen heute eine wichtige _____ treffen über das Projekt.",
        translation: "(Musimy dzisiaj podjąć ważną decyzję o projekcie)",
        options: ["Entscheidung", "Beschluss", "Wahl", "Bestimmung"],
        correct: "Entscheidung",
        explanation: "Kolokacja 'eine Entscheidung treffen' (podjąć decyzję) to standardowe połączenie. Nie mówisz 'machen' z 'Entscheidung' - tylko 'treffen' pasuje. Polski też ma podobne stałe połączenia - 'podjąć decyzję' nie 'zrobić decyzję'. Te kolokacje trzeba uczyć się jako całości bo nie zawsze są logiczne."
      },
      {
        id: "colloc_2",
        question: "Er hat einen großen _____ gemacht bei der Berechnung leider.",
        translation: "(Popełnił duży błąd w obliczeniach niestety)",
        options: ["Fehler", "Irrtum", "Versehen", "Missgeschick"],
        correct: "Fehler",
        explanation: "Kolokacja 'einen Fehler machen' (popełnić błąd) - standardowe połączenie. Czasownik 'machen' z 'Fehler' naturalny. Błędy w obliczeniach mogą mieć poważne konsekwencje. Polski używa 'popełnić błąd' co jest interesujące - niemiecki prostszy z 'machen' (zrobić). Błędy są częścią procesu uczenia się."
      },
      {
        id: "colloc_3",
        question: "Sie führt ein langes _____ mit ihrem Chef über die Zukunft.",
        translation: "(Prowadzi długą rozmowę ze swoim szefem o przyszłości)",
        options: ["Gespräch", "Rede", "Diskussion", "Dialog"],
        correct: "Gespräch",
        explanation: "Kolokacja 'ein Gespräch führen' (prowadzić rozmowę) - formalne połączenie. Czasownik 'führen' (prowadzić) z 'Gespräch' dla poważnych rozmów. Rozmowy o przyszłości zawodowej są ważnymi momentami kariery. Forma 'führen' podkreśla kontrolę i kierowanie rozmową - bardziej formalne niż proste 'sprechen'."
      },
      {
        id: "colloc_4",
        question: "Ich nehme morgen _____ an der Besprechung im Büro aktiv teil.",
        translation: "(Biorę jutro udział w naradzie w biurze aktywnie)",
        options: ["teil", "Anteil", "Teilnahme", "Teil"],
        correct: "teil",
        explanation: "Czasownik rozdzielny 'teilnehmen an' (brać udział w) - partykuła 'teil' oddziela się. To nie rzeczownik tylko część czasownika (małą literą!). Aktywne uczestnictwo w spotkaniach pokazuje zaangażowanie zawodowe. Konstrukcja 'an etwas teilnehmen' standardowa dla opisywania partycypacji."
      },
      {
        id: "colloc_5",
        question: "Er stellt oft dumme _____ während der Unterrichtsstunde an Lehrer.",
        translation: "(Zadaje często głupie pytania podczas lekcji nauczycielowi)",
        options: ["Fragen", "Frage", "Anfragen", "Nachfragen"],
        correct: "Fragen",
        explanation: "Kolokacja 'Fragen stellen' (zadawać pytania) - czasownik 'stellen' nie 'machen' ani 'fragen'. Mnoga 'Fragen' bo często wiele. Choć mogą wydawać się głupie, pytania są ważne w procesie uczenia. Czasownik 'stellen' (umieszczać) metaforycznie używany dla 'zadawania' pytań."
      },
      {
        id: "colloc_6",
        question: "Sie hat großes _____ an moderner Kunst und Kultur gezeigt.",
        translation: "(Wykazała wielkie zainteresowanie nowoczesną sztuką i kulturą)",
        options: ["Interesse", "Freude", "Gefallen", "Lust"],
        correct: "Interesse",
        explanation: "Kolokacja 'Interesse zeigen' (wykazywać zainteresowanie) lub 'haben' - rzeczownik 'Interesse' standardowy. Zainteresowanie sztuką wzbogaca życie kulturalne. Konstrukcja 'Interesse an etwas' wymaga przyimka 'an'. Pasje artystyczne często rozwijają się przez życie i przynoszą radość."
      },
      {
        id: "colloc_7",
        question: "Wir haben einen neuen _____ mit dieser Firma geschlossen erfolgreich.",
        translation: "(Zawarliśmy nową umowę z tą firmą pomyślnie)",
        options: ["Vertrag", "Abkommen", "Kontrakt", "Abschluss"],
        correct: "Vertrag",
        explanation: "Kolokacja 'einen Vertrag schließen' (zawrzeć umowę) - czasownik 'schließen' (zamykać) metaforycznie. Umowy biznesowe są ważnymi kamieniami milowymi. Czasownik 'schließen' sugeruje finalizację i oficjalizację porozumienia. Pomyślne negocjacje prowadzą do stabilnych relacji biznesowych."
      },
      {
        id: "colloc_8",
        question: "Du solltest mehr _____ auf deine Gesundheit legen wichtig.",
        translation: "(Powinieneś przywiązywać większą wagę do swojego zdrowia ważne)",
        options: ["Wert", "Bedeutung", "Gewicht", "Wichtigkeit"],
        correct: "Wert",
        explanation: "Kolokacja 'Wert legen auf' (przywiązywać wagę do) - rzeczownik 'Wert' z czasownikiem 'legen'. Dbanie o zdrowie to inwestycja w przyszłość. Konstrukcja 'auf etwas Wert legen' wymaga przyimka 'auf' z biernikiem. Metafora 'kładzenia wartości' pokazuje priorytetyzację - co uważasz za ważne."
      },
      {
        id: "colloc_9",
        question: "Sie macht sich große _____ um ihre kranke Mutter zu Hause.",
        translation: "(Martwi się bardzo o swoją chorą matkę w domu)",
        options: ["Sorgen", "Sorge", "Gedanken", "Kummer"],
        correct: "Sorgen",
        explanation: "Kolokacja 'sich Sorgen machen um' (martwić się o) - mnoga 'Sorgen' zawsze. Troska o chorego rodzica to naturalna reakcja kochającej córki. Konstrukcja zwrotna z celownikiem 'sich' plus mnoga 'Sorgen' standardowa. Zmartwienie pokazuje głębię uczuć rodzinnych."
      },
      {
        id: "colloc_10",
        question: "Ich habe heute keine _____ auf schwere Arbeit ehrlich gesagt.",
        translation: "(Nie mam dzisiaj ochoty na ciężką pracę szczerze mówiąc)",
        options: ["Lust", "Wunsch", "Wille", "Laune"],
        correct: "Lust",
        explanation: "Kolokacja 'Lust haben auf' (mieć ochotę na) - rzeczownik 'Lust' standardowy. Brak motywacji to uczciwa ludzka reakcja, szczególnie w trudne dni. Konstrukcja 'auf etwas' z biernikiem. Przyznanie się do braku ochoty to forma szczerości - nie zawsze musimy być w 100% zmotywowani."
      },
      {
        id: "colloc_11",
        question: "Er spielt eine wichtige _____ in diesem Projekt für die Firma.",
        translation: "(Odgrywa ważną rolę w tym projekcie dla firmy)",
        options: ["Rolle", "Part", "Funktion", "Aufgabe"],
        correct: "Rolle",
        explanation: "Kolokacja 'eine Rolle spielen' (odgrywać rolę) - teatralna metafora dla ważności. Rzeczownik 'Rolle' z czasownikiem 'spielen' standardowy. Jego wkład jest znaczący dla sukcesu projektu. Metafora teatralna używana w kontekście biznesowym - każdy ma swoją 'rolę' do odegrania."
      },
      {
        id: "colloc_12",
        question: "Sie hat einen guten _____ auf mich gemacht beim ersten Treffen.",
        translation: "(Zrobiła na mnie dobre wrażenie przy pierwszym spotkaniu)",
        options: ["Eindruck", "Ausdruck", "Abdruck", "Nachdruck"],
        correct: "Eindruck",
        explanation: "Kolokacja 'einen Eindruck machen' (robić wrażenie) - rzeczownik 'Eindruck' precyzyjny. Pierwsze wrażenia są często trwałe i ważne. Czasownik 'machen' z 'Eindruck' naturalny. Pozytywne pierwsze spotkanie tworzy dobrą bazę dla przyszłych relacji - ważne w życiu zawodowym i prywatnym."
      },
      {
        id: "colloc_13",
        question: "Wir haben uns große _____ gemacht um deine Sicherheit ehrlich.",
        translation: "(Zrobiliśmy sobie wielkie zmartwienia o twoje bezpieczeństwo szczerze)",
        options: ["Sorgen", "Gedanken", "Kummer", "Ängste"],
        correct: "Sorgen",
        explanation: "Ponownie kolokacja 'sich Sorgen machen' - mnoga 'Sorgen' obowiązkowo. Zmartwienie o czyjeś bezpieczeństwo pokazuje głęboką troskę. Zwrotna konstrukcja z celownikiem 'uns' podkreśla że to NASZE zmartwienie. Szczerość w wyrażaniu obaw wzmacnia relacje - pokazuje że komuś zależy."
      },
      {
        id: "colloc_14",
        question: "Du musst mehr _____ auf Details achten bei deiner Arbeit.",
        translation: "(Musisz bardziej zwracać uwagę na detale w swojej pracy)",
        options: ["Aufmerksamkeit", "Achtung", "Beachtung", "Konzentration"],
        correct: "Aufmerksamkeit",
        explanation: "Kolokacja 'Aufmerksamkeit schenken' lub tutaj z czasownikiem 'achten' (uważać). Rzeczownik 'Aufmerksamkeit' (uwaga) kluczowy. Precyzja w detałach to różnica między dobrą a doskonałą pracą. Konstrukcja 'auf etwas achten' standardowa dla wyrażania bycia uważnym - szczegóły często decydują o jakości."
      },
      {
        id: "colloc_15",
        question: "Sie nimmt aktiv _____ an allen Diskussionen in der Klasse teil.",
        translation: "(Bierze aktywnie udział we wszystkich dyskusjach w klasie)",
        options: ["teil", "Anteil", "Teilnahme", "Part"],
        correct: "teil",
        explanation: "Czasownik rozdzielny 'teilnehmen' - partykuła 'teil' małą literą jako część czasownika. Aktywna partycypacja w dyskusjach pokazuje zaangażowanie w naukę. Przyimek 'an' z celownikiem dla wydarzenia w którym uczestniczysz. Aktywni studenci często uczą się więcej przez zaangażowanie w rozmowy."
      }
    ]
  },

  temporal_adverbs_clauses: {
    name: "Przysłówki i zdania czasowe",
    description: "Früher, später, damals, inzwischen - opis czasu",
    icon: Calendar,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    questions: [
      {
        id: "temp_adv_1",
        question: "Ich wohnte _____ in einer kleinen Wohnung in der Stadtmitte.",
        translation: "(Mieszkałem kiedyś w małym mieszkaniu w centrum miasta)",
        options: ["früher", "später", "jetzt", "bald"],
        correct: "früher",
        explanation: "Przysłówek 'früher' oznacza 'kiedyś/dawniej' - opisuje przeszłość. Wspomnienie o poprzednim miejscu zamieszkania. Polski używa 'kiedyś' lub 'dawniej' podobnie. Przesłówek 'früher' pomaga w opowiadaniu o swoich doświadczeniach życiowych - tworzy kontrast między tym jak było a jak jest teraz."
      },
      {
        id: "temp_adv_2",
        question: "Wir treffen uns _____ um 15 Uhr vor dem Café zentral.",
        translation: "(Spotykamy się później o 15 przed kawiarnią w centrum)",
        options: ["später", "früher", "damals", "jetzt"],
        correct: "später",
        explanation: "Przysłówek 'später' oznacza 'później' - odnosi się do przyszłego czasu. Umówione spotkanie na konkretną godzinę. Polski 'później' działa identycznie. Używasz 'später' gdy mówisz o tym co się wydarzy po obecnej chwili - pomaga w planowaniu i koordynacji działań."
      },
      {
        id: "temp_adv_3",
        question: "_____ war ich noch sehr jung und unerfahren in vielen Dingen.",
        translation: "(Wtedy byłem jeszcze bardzo młody i niedoświadczony w wielu rzeczach)",
        options: ["Damals", "Jetzt", "Später", "Bald"],
        correct: "Damals",
        explanation: "Przysłówek 'damals' oznacza 'wtedy/w tamtych czasach' - odnosi się do konkretnego okresu w przeszłości. Wspomnienie młodości i naiwności. Polski 'wtedy' lub 'w tamtych czasach' odpowiada. 'Damals' używasz gdy opowiadasz o swoich przeszłych doświadczeniach z perspektywy czasu - często z refleksją o rozwoju."
      },
      {
        id: "temp_adv_4",
        question: "Er ist _____ schon in Berlin angekommen müssen nach Zeit.",
        translation: "(Musi już w międzyczasie dotrzeć do Berlina według czasu)",
        options: ["inzwischen", "damals", "früher", "nachher"],
        correct: "inzwischen",
        explanation: "Przysłówek 'inzwischen' oznacza 'w międzyczasie/tymczasem' - coś się zdarzyło w czasie między. Logiczne przypuszczenie bazujące na czasie podróży. Polski używa 'w międzyczasie' lub 'tymczasem' podobnie. 'Inzwischen' pomaga wypełniać luki czasowe w narracji - opisuje co się wydarzyło podczas gdy ty robiłeś coś innego."
      },
      {
        id: "temp_adv_5",
        question: "Ich komme _____ nach Hause und rufe dich dann sofort an.",
        translation: "(Przyjdę zaraz do domu i zadzwonię do ciebie wtedy natychmiast)",
        options: ["gleich", "damals", "früher", "inzwischen"],
        correct: "gleich",
        explanation: "Przysłówek 'gleich' oznacza 'zaraz/od razu' - bardzo bliska przyszłość. Obietnica szybkiego powrotu i telefonu. Polski 'zaraz' lub 'od razu' odpowiada. 'Gleich' sygnalizuje że coś stanie się bardzo szybko - pomaga w zarządzaniu oczekiwaniami gdy ktoś na ciebie czeka."
      },
      {
        id: "temp_adv_6",
        question: "Sie ist _____ zur Arbeit gegangen, bevor ich aufgewacht bin.",
        translation: "(Poszła już do pracy zanim się obudziłem)",
        options: ["schon", "noch", "erst", "nur"],
        correct: "schon",
        explanation: "Przysłówek 'schon' oznacza 'już' - coś się stało wcześniej niż oczekiwano. Jej wczesne wyjście zaskakuje. Polski 'już' działa identycznie. 'Schon' często wyraża że coś nastąpiło szybciej lub wcześniej niż się spodziewałeś - może sugerować zaskoczenie lub pośpiech."
      },
      {
        id: "temp_adv_7",
        question: "Ich bin _____ seit einer Stunde hier und warte ungeduldig.",
        translation: "(Jestem już od godziny tutaj i czekam niecierpliwie)",
        options: ["schon", "noch", "erst", "bald"],
        correct: "schon",
        explanation: "Przysłówek 'schon' podkreśla że godzina czekania to dużo - frustracja rośnie. Długie oczekiwanie testuje cierpliwość. Forma 'schon seit' (już od) często używana do podkreślenia długości trwania. Niecierpliwość naturalnie rośnie z czasem - 'schon' to wyraża."
      },
      {
        id: "temp_adv_8",
        question: "Wir müssen _____ 10 Minuten warten auf den nächsten Bus leider.",
        translation: "(Musimy niestety jeszcze 10 minut czekać na następny autobus)",
        options: ["noch", "schon", "erst", "bald"],
        correct: "noch",
        explanation: "Przysłówek 'noch' oznacza 'jeszcze' - czas pozostały do oczekiwania. Czekanie na autobus to codzienne doświadczenie. Polski 'jeszcze' działa tak samo. 'Noch' wskazuje że akcja (czekanie) musi kontynuować przez określony czas - pomaga w zarządzaniu oczekiwaniami."
      },
      {
        id: "temp_adv_9",
        question: "Er hat _____ vor einer Stunde mit der Arbeit angefangen begonnen.",
        translation: "(Zaczął dopiero przed godziną pracę)",
        options: ["erst", "schon", "noch", "gleich"],
        correct: "erst",
        explanation: "Przysłówek 'erst' oznacza 'dopiero' - później niż oczekiwano. Godzina to krótki czas więc 'dopiero' podkreśla świeżość rozpoczęcia. Polski 'dopiero' identycznie używany. 'Erst' często wyraża że coś stało się później niż byłoby idealne - może sugerować opóźnienie lub że jest jeszcze dużo do zrobienia."
      },
      {
        id: "temp_adv_10",
        question: "Ich werde _____ nach dem Essen die Hausaufgaben machen können.",
        translation: "(Dopiero po jedzeniu będę mógł zrobić zadanie domowe)",
        options: ["erst", "schon", "noch", "gleich"],
        correct: "erst",
        explanation: "Przysłówek 'erst' dla opóźnionej akcji - najpierw jedzenie, DOPIERO POTEM praca domowa. Priorytetyzowanie jedzenia przed nauką. Polski 'dopiero' podobnie używany. 'Erst nach' (dopiero po) pokazuje sekwencję - jedna rzecz musi się skończyć zanim rozpocznie się druga."
      },
      {
        id: "temp_adv_11",
        question: "Sie wird _____ zurückkommen, sie hat es versprochen fest mir.",
        translation: "(Wróci wkrótce, obiecała mi to mocno)",
        options: ["bald", "früher", "damals", "inzwischen"],
        correct: "bald",
        explanation: "Przysłówek 'bald' oznacza 'wkrótce/niedługo' - bliska przyszłość. Obietnica szybkiego powrotu daje nadzieję. Polski 'wkrótce' lub 'niedługo' odpowiada. 'Bald' łagodzi niecierpliwość czekania - zapewnia że rozłąka będzie krótka. Obietnice z 'bald' pomagają w wytrzymaniu tymczasowej nieobecności."
      },
      {
        id: "temp_adv_12",
        question: "Wir haben _____ schon alles vorbereitet für die Party morgen.",
        translation: "(Przygotowaliśmy już wcześniej wszystko na przyjęcie jutro)",
        options: ["vorher", "nachher", "jetzt", "später"],
        correct: "vorher",
        explanation: "Przysłówek 'vorher' oznacza 'wcześniej/uprzednio' - przed jakimś momentem odniesienia. Wcześniejsze przygotowania oznaczają mniej stresu. Polski 'wcześniej' lub 'uprzednio' działa podobnie. Dobre przygotowanie z wyprzedzeniem to klucz do udanej imprezy - eliminuje chaos w ostatniej chwili."
      },
      {
        id: "temp_adv_13",
        question: "Ich rufe dich _____ wieder an, wenn ich mehr Zeit habe endlich.",
        translation: "(Oddzwonię do ciebie później ponownie, gdy będę miał w końcu więcej czasu)",
        options: ["nachher", "vorher", "damals", "inzwischen"],
        correct: "nachher",
        explanation: "Przysłówek 'nachher' oznacza 'później/potem' - po obecnym momencie. Obietnica kontaktu gdy sytuacja się uspokoi. Polski 'później' lub 'potem' identyczny. 'Nachher' używasz gdy chcesz powiedzieć że coś zrobisz ale nie teraz - pomaga w zarządzaniu oczekiwaniami bez odrzucania prośby."
      },
      {
        id: "temp_adv_14",
        question: "Sie arbeitet _____ an diesem Projekt, aber es ist noch nicht fertig.",
        translation: "(Pracuje już nad tym projektem, ale nie jest jeszcze skończony)",
        options: ["bereits", "erst", "noch", "bald"],
        correct: "bereits",
        explanation: "Przysłówek 'bereits' oznacza 'już' (bardziej formalnie niż 'schon') - podkreśla że praca jest w toku. Projekt jeszcze nieukończony mimo postępu. Polski 'już' odpowiada. 'Bereits' często w formalnych kontekstach - pokazuje że proces się rozpoczął choć może nie zakończył."
      },
      {
        id: "temp_adv_15",
        question: "Wir fahren _____ nach Spanien dieses Jahr in den Sommerurlaub!",
        translation: "(Jedziemy w końcu do Hiszpanii w tym roku na letnie wakacje!)",
        options: ["endlich", "schon", "noch", "erst"],
        correct: "endlich",
        explanation: "Przysłówek 'endlich' wyraża ulgę i radość - 'w końcu/nareszcie' się wydarza. Długo oczekiwane wakacje stają się rzeczywistością. Polski 'w końcu' lub 'nareszcie' identyczny. 'Endlich' często wyraża zakończenie długiego oczekiwania - uwolnienie od napięcia związanego z antycypacją."
      }
    ]
  },

  verbs_with_prepositions_advanced: {
    name: "Czasowniki z przyimkami - zaawansowane",
    description: "Sich kümmern um, sich gewöhnen an - złożone wzory",
    icon: BookText,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    questions: [
      {
        id: "verb_prep_adv_1",
        question: "Ich kümmere mich jeden Tag _____ meine kranke Großmutter liebevoll.",
        translation: "(Opiekuję się każdego dnia moją chorą babcią czule)",
        options: ["um", "an", "für", "über"],
        correct: "um",
        explanation: "Czasownik 'sich kümmern um' (opiekować się) wymaga przyimka 'um' z biernikiem. Codzienna opieka nad babcią to akt miłości rodzinnej. Zwrotny czasownik z celownikiem 'mir' plus przyimek. Regularna troska o starszych pokazuje szacunek dla rodziny - to ważna wartość w wielu kulturach."
      },
      {
        id: "verb_prep_adv_2",
        question: "Sie hat sich schnell _____ das neue Leben in Deutschland gewöhnt gut.",
        translation: "(Przyzwyczaiła się szybko do nowego życia w Niemczech dobrze)",
        options: ["an", "in", "auf", "über"],
        correct: "an",
        explanation: "Czasownik 'sich gewöhnen an' (przyzwyczaić się do) wymaga przyimka 'an' z biernikiem. Adaptacja do nowego kraju wymaga czasu. Zwrotny czasownik pokazuje proces wewnętrzny. Szybka adaptacja to ceniona umiejętność - elastyczność i otwartość pomagają w nowych sytuacjach."
      },
      {
        id: "verb_prep_adv_3",
        question: "Ich freue mich sehr _____ deine Nachricht von gestern herzlich.",
        translation: "(Bardzo się cieszę z twojej wiadomości z wczoraj serdecznie)",
        options: ["über", "auf", "an", "für"],
        correct: "über",
        explanation: "Czasownik 'sich freuen über' (cieszyć się z) dla rzeczy które się już stały - otrzymana wiadomość. Przyimek 'über' z biernikiem dla przeszłego/obecnego szczęścia. Radość z kontaktu wzmacnia relacje. Różnica: 'über' dla tego co już jest, 'auf' dla przyszłych wydarzeń - ważne rozróżnienie."
      },
      {
        id: "verb_prep_adv_4",
        question: "Er hat sich _____ seinen Fehler bei der Arbeit aufrichtig entschuldigt.",
        translation: "(Przeprosił szczerze za swój błąd w pracy)",
        options: ["für", "über", "an", "um"],
        correct: "für",
        explanation: "Czasownik 'sich entschuldigen für' (przepraszać za) wymaga przyimka 'für' z biernikiem. Szczere przeprosiny za błąd pokazują dojrzałość. Zwrotny czasownik z celownikiem 'sich' plus przyimek 'für'. Umiejętność przyznania się do błędu i przeproszenia to ważna cecha w miejscu pracy - buduje zaufanie."
      },
      {
        id: "verb_prep_adv_5",
        question: "Wir müssen uns _____ die Prüfung nächste Woche gut vorbereiten gründlich.",
        translation: "(Musimy przygotować się dobrze do egzaminu w przyszłym tygodniu gruntownie)",
        options: ["auf", "für", "an", "über"],
        correct: "auf",
        explanation: "Czasownik 'sich vorbereiten auf' (przygotowywać się do) wymaga przyimka 'auf' z biernikiem. Przygotowanie do egzaminu wymaga systematyczności. Przyimek 'auf' wskazuje na przyszłe wydarzenie. Gruntowne przygotowanie zwiększa szanse na sukces - to inwestycja czasu która się opłaca."
      },
      {
        id: "verb_prep_adv_6",
        question: "Sie interessiert sich sehr _____ klassische Musik seit ihrer Kindheit.",
        translation: "(Interesuje się bardzo muzyką klasyczną od dzieciństwa)",
        options: ["für", "an", "über", "um"],
        correct: "für",
        explanation: "Czasownik 'sich interessieren für' (interesować się czymś) wymaga przyimka 'für' z biernikiem. Długoletnia pasja do muzyki klasycznej. Zwrotny czasownik pokazuje osobiste zaangażowanie. Zainteresowania z dzieciństwa często kształtują kim stajemy się - to fundamenty naszej tożsamości."
      },
      {
        id: "verb_prep_adv_7",
        question: "Er beschwert sich ständig _____ das laute Wetter beim Nachbarn.",
        translation: "(Skarży się ciągle na głośną pogodę u sąsiada)",
        options: ["über", "an", "für", "um"],
        correct: "über",
        explanation: "Czasownik 'sich beschweren über' (skarżyć się na) wymaga przyimka 'über' z biernikiem. Ciągłe skargi na hałas to znak frustracji. Zwrotny czasownik z celownikiem 'sich' plus 'über'. Hałas sąsiadów to częsty problem mieszkaniowy - komunikacja granic jest ważna ale wymaga dyplomacji."
      },
      {
        id: "verb_prep_adv_8",
        question: "Ich verlasse mich ganz _____ deine Hilfe in dieser Situation schwierigen.",
        translation: "(Liczę całkowicie na twoją pomoc w tej trudnej sytuacji)",
        options: ["auf", "an", "über", "für"],
        correct: "auf",
        explanation: "Czasownik 'sich verlassen auf' (polegać na/liczyć na) wymaga przyimka 'auf' z biernikiem. Zaufanie w trudnej sytuacji pokazuje siłę relacji. Zwrotny czasownik podkreśla że to TWOJA decyzja zaufać. Możliwość polegania na kimś w trudach to bezcenna wartość - prawdziwa przyjaźń objawia się w kryzysie."
      },
      {
        id: "verb_prep_adv_9",
        question: "Sie hat sich sehr _____ die schlechte Nachricht geärgert gestern.",
        translation: "(Zdenerwowała się bardzo złą wiadomością wczoraj)",
        options: ["über", "an", "auf", "für"],
        correct: "über",
        explanation: "Czasownik 'sich ärgern über' (denerwować się czymś) wymaga przyimka 'über' z biernikiem. Złe wiadomości naturalnie wywołują frustrację. Zwrotny czasownik pokazuje wewnętrzną reakcję emocjonalną. Przyznanie się do zdenerwowania to forma emocjonalnej szczerości - lepiej wyrazić uczucia niż je tłumić."
      },
      {
        id: "verb_prep_adv_10",
        question: "Wir haben uns lange _____ unseren letzten Urlaub unterhalten schön.",
        translation: "(Rozmawialiśmy długo o naszym ostatnim urlopie pięknym)",
        options: ["über", "an", "für", "um"],
        correct: "über",
        explanation: "Czasownik 'sich unterhalten über' (rozmawiać o) wymaga przyimka 'über' z biernikiem. Wspomnienia z wakacji to przyjemny temat rozmowy. Zwrotny czasownik dla wzajemnej konwersacji. Dzielenie się doświadczeniami z podróży przedłuża radość z wakacji - wspomnienia mogą być równie przyjemne jak samo doświadczenie."
      },
      {
        id: "verb_prep_adv_11",
        question: "Er hat sich sehr _____ meinen Ratschlag gefreut und bedankt herzlich.",
        translation: "(Bardzo się ucieszył z mojej rady i podziękował serdecznie)",
        options: ["über", "auf", "an", "für"],
        correct: "über",
        explanation: "Czasownik 'sich freuen über' (cieszyć się z) dla otrzymanej rady - coś co już się stało. Wdzięczność za pomoc pokazuje pokorę. Przyimek 'über' dla przeszłego/obecnego szczęścia. Bycie otwartym na rady innych i docenianie ich to oznaka dojrzałości - pokazuje że ceń isz doświadczenie innych."
      },
      {
        id: "verb_prep_adv_12",
        question: "Sie träumt oft _____ einer großen Reise um die Welt spannend.",
        translation: "(Marzy często o wielkiej podróży dookoła świata ekscytującej)",
        options: ["von", "an", "über", "für"],
        correct: "von",
        explanation: "Czasownik 'träumen von' (marzyć o) wymaga przyimka 'von' z celownikiem. Marzenia o podróży inspirują i motywują. Przyimek 'von' łączy cię z obiektem marzeń. Marzenia są ważne - dają nam cel i kierunek w życiu, nawet jeśli nie wszystkie się spełnią."
      },
      {
        id: "verb_prep_adv_13",
        question: "Ich habe mich _____ diesen Film schon lange gefreut gespannt!",
        translation: "(Cieszyłem się już długo na ten film z napięciem!)",
        options: ["auf", "über", "an", "für"],
        correct: "auf",
        explanation: "Czasownik 'sich freuen auf' (cieszyć się NA) dla przyszłych wydarzeń - film który jeszcze nie widziałeś. Przyimek 'auf' z biernikiem dla antycypacji. Długie oczekiwanie zwiększa ekscytację. Antycypacja przyjemnych wydarzeń to sama w sobie forma radości - oczekiwanie może być równie przyjemne jak doświadczenie."
      },
      {
        id: "verb_prep_adv_14",
        question: "Er denkt kritisch _____ die Politik der Regierung aktuell nach.",
        translation: "(Myśli krytycznie o polityce rządu aktualnie)",
        options: ["über", "an", "für", "von"],
        correct: "über",
        explanation: "Czasownik 'nachdenken über' (zastanawiać się nad) wymaga przyimka 'über' z biernikiem. Krytyczne myślenie o polityce to obywatelski obowiązek. Rozdzielny czasownik 'nachdenken' z przedrostkiem 'nach-' podkreśla głębię refleksji. Świadome obserwowanie polityki pomaga w podejmowaniu świadomych decyzji wyborczych."
      },
      {
        id: "verb_prep_adv_15",
        question: "Sie hat sich _____ ihre gute Note in der Prüfung sehr gefreut!",
        translation: "(Bardzo się ucieszyła ze swojej dobrej oceny na egzaminie!)",
        options: ["über", "auf", "an", "für"],
        correct: "über",
        explanation: "Czasownik 'sich freuen über' (cieszyć się z) dla otrzymanego rezultatu - ocena już znana. Przyimek 'über' dla obecnej radości z osiągnięcia. Dobra ocena to nagroda za ciężką pracę. Radość z sukcesów edukacyjnych motywuje do dalszej nauki - pozytywne wzmocnienie napędza rozwój."
      }
    ]
  }
};

export default part17Categories;