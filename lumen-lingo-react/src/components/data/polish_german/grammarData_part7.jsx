/**
 * POLISH → GERMAN GRAMMAR - PART 7
 * 3 kategorie, 15 pytań każda - Ostateczne mistrzostwo
 */

import { Target, Puzzle, BookOpen } from "lucide-react";

export const part7Categories = {
  infinitive_constructions_zu: {
    name: "Konstrukcje bezokolicznikowe z 'zu'",
    description: "Um...zu, ohne...zu, statt...zu, zu + infinitive",
    icon: Target,
    color: "from-emerald-500 to-teal-600",
    level: "advanced",
    questions: [
      {
        id: "inf_zu_1",
        question: "Ich lerne Deutsch, _____ in Deutschland arbeiten zu können später.",
        translation: "(Uczę się niemieckiego, żeby móc pracować w Niemczech później)",
        options: ["um", "ohne", "statt", "zu"],
        correct: "um",
        explanation: "Konstrukcja 'um...zu' wyraża CEL! Po co się uczysz - stwierdzenie celu. To o motywacji - cel kariery. Słowo 'um' rozpoczyna, bezokolicznik plus 'zu' kończy - struktura kanapkowa. Pokazuje intencję - dlaczego wykonujesz akcję. Konstrukcja zdania celowego."
      },
      {
        id: "inf_zu_2",
        question: "Er ging weg, _____ sich zu verabschieden von uns allen.",
        translation: "(Wyszedł bez pożegnania się z nami wszystkimi)",
        options: ["ohne", "um", "statt", "zu"],
        correct: "ohne",
        explanation: "Konstrukcja 'ohne...zu' pokazuje BRAK towarzyszącej akcji! Wyszedł BEZ pożegnania. To o nietakcie - społeczne pominięcie. Forma 'ohne' plus zdanie bezokolicznikowe pokazuje czego NIE zrobił podczas głównej akcji. Negatywne towarzyszenie - akcja bez oczekiwanej grzeczności."
      },
      {
        id: "inf_zu_3",
        question: "Es ist wichtig, regelmäßig Sport _____ treiben für Gesundheit.",
        translation: "(Jest ważne regularnie uprawiać sport dla zdrowia)",
        options: ["zu", "um zu", "ohne zu", "statt zu"],
        correct: "zu",
        explanation: "Proste 'zu' plus bezokolicznik dla zdania podmiotowego! Konstrukcja 'es ist wichtig' plus 'zu treiben' - co jest ważne. To rada zdrowotna - konieczność ćwiczeń. Konstrukcja: es ist plus przymiotnik plus zu plus bezokolicznik. Fraza bezokolicznikowa jak opóźniony podmiot. Powszechny wzór."
      },
      {
        id: "inf_zu_4",
        question: "Sie blieb zu Hause, _____ zur Party zu gehen am Abend.",
        translation: "(Została w domu zamiast pójść na imprezę wieczorem)",
        options: ["statt", "um", "ohne", "zu"],
        correct: "statt",
        explanation: "Konstrukcja 'statt...zu' pokazuje ALTERNATYWĘ! Zamiast jednego zrobiła drugie. To wybór - substytucja. Forma 'statt zu gehen' (zamiast pójść) - odrzucenie opcji NA RZECZ alternatywy. Pokazuje wybraną akcję zastępującą oczekiwaną. Struktura substytucji."
      },
      {
        id: "inf_zu_5",
        question: "Ich habe keine Zeit, jetzt lange mit dir _____ sprechen leider.",
        translation: "(Nie mam czasu żeby teraz długo z tobą rozmawiać niestety)",
        options: ["zu", "um zu", "ohne zu", "statt zu"],
        correct: "zu",
        explanation: "Konstrukcja 'Zeit zu sprechen' - bezokolicznikowe dopełnienie! Czas NA co - celowy bezokolicznik. To przeprosiny - wyjaśnianie niedostępności. Rzeczowniki jak 'Zeit, Lust, Gelegenheit' plus 'zu' plus bezokolicznik. Pokazuje cel lub zawartość abstrakcyjnego rzeczownika. Bezokolicznik definiuje co."
      },
      {
        id: "inf_zu_6",
        question: "Er arbeitet hart, _____ genug Geld zu verdienen für Familie.",
        translation: "(Pracuje ciężko, żeby zarobić wystarczająco pieniędzy dla rodziny)",
        options: ["um", "ohne", "statt", "zu"],
        correct: "um",
        explanation: "Konstrukcja 'um...zu verdienen' motywacja celu! Czemu pracuje - zarabianie pieniędzy. To o odpowiedzialności rodzinnej - motywacja pracy. Klasyczne 'um...zu' dla celu - cel akcji. Motywacja wyraźnie wyrażona. Struktura celu finansowego."
      },
      {
        id: "inf_zu_7",
        question: "Sie hat das Examen bestanden, _____ viel gelernt zu haben vorher.",
        translation: "(Zdała egzamin bez dużo się uczenia wcześniej)",
        options: ["ohne", "um", "statt", "zu"],
        correct: "ohne",
        explanation: "Forma 'ohne...zu haben' negatywny bezokolicznik Perfect! Zdała BEZ uczenia - zaskakujący sukces. To o talencie - sukces bez wysiłku. Konstrukcja 'ohne' plus Perfect bezokolicznik (imiesłów plus zu haben/sein). Pokazuje akcję dokonaną BEZ oczekiwanego przygotowania. Nieoczekiwane osiągnięcie."
      },
      {
        id: "inf_zu_8",
        question: "Es ist schwer, eine neue Sprache _____ lernen als Erwachsener.",
        translation: "(Jest trudno nauczyć się nowego języka jako dorosły)",
        options: ["zu", "um zu", "ohne zu", "statt zu"],
        correct: "zu",
        explanation: "Forma 'schwer zu lernen' ocena trudności! Konstrukcja 'es ist schwer' plus bezokolicznik pokazuje wyzwanie. To o nauce języków - trudności dorosłych. Bezosobowa konstrukcja: es ist plus przymiotnik plus zu plus bezokolicznik. Ocenianie trudności zadania."
      },
      {
        id: "inf_zu_9",
        question: "Anstatt _____ schlafen, las er die ganze Noc książki intensywnie.",
        translation: "(Zamiast spać, czytał całą noc książki intensywnie)",
        options: ["zu", "um zu", "ohne zu", "statt"],
        correct: "zu",
        explanation: "Forma 'anstatt zu schlafen' formalna alternatywa! Tak samo jak 'statt' ale bardziej formalnie. To o priorytetach - czytanie zamiast snu. Konstrukcja 'anstatt' plus zu plus bezokolicznik pokazuje wybraną aktywność zastępującą oczekiwaną. Obsesja książkowa zamiast odpoczynku. Formalna substytucja."
      },
      {
        id: "inf_zu_10",
        question: "Ich freue mich sehr, dich endlich wieder _____ sehen bald!",
        translation: "(Cieszę się bardzo, że w końcu cię znowu zobaczę wkrótce!)",
        options: ["zu", "um zu", "ohne zu", "statt zu"],
        correct: "zu",
        explanation: "Forma 'freuen sich zu sehen' bezokolicznikowe dopełnienie! Szczęśliwy ŻEBY zobaczyć - emocja plus bezokolicznik. To oczekiwanie - radość ze spotkania. Czasowniki emocji plus 'zu' bezokolicznik pokazujący co sprawia radość. Wyrażanie źródła radości. Bezokolicznik definiuje źródło szczęścia."
      },
      {
        id: "inf_zu_11",
        question: "Er kam zur Party, _____ seiner Freundin eine Freude zu machen.",
        translation: "(Przyszedł na imprezę, żeby sprawić radość swojej dziewczynie)",
        options: ["um", "ohne", "statt", "zu"],
        correct: "um",
        explanation: "Konstrukcja 'um...zu machen' romantyczny cel! Po co przyszedł - sprawianie przyjemności dziewczynie. To o miłości - przemyślana akcja. Forma 'um...zu' pokazuje intencję - uszczęśliwienie jej było celem. Słodka motywacja wyrażona."
      },
      {
        id: "inf_zu_12",
        question: "Ich habe vergessen, die Tür _____ schließen - jetzt jest zimno!",
        translation: "(Zapomniałem zamknąć drzwi - teraz jest zimno!)",
        options: ["zu", "um zu", "ohne zu", "statt zu"],
        correct: "zu",
        explanation: "Forma 'vergessen zu schließen' pominięta akcja! Zapomniałem ŻEBY zrobić - niedopatrzenie. To błąd - konsekwencja temperaturowa. Wiele czasowników (vergessen, versuchen, beginnen) plus 'zu' bezokolicznik. Pokazuje zamierzoną ale zapomnianą akcję. Uznanie błędu."
      },
      {
        id: "inf_zu_13",
        question: "Sie ging einfach weiter, _____ mir zu helfen mit den Taschen.",
        translation: "(Po prostu poszła dalej zamiast mi pomóc z torbami)",
        options: ["statt", "um", "ohne", "zu"],
        correct: "statt",
        explanation: "Forma 'statt...zu helfen' wybrana alternatywa! Poszła zamiast pomagać - ignorowanie potrzeby. To o egoizmie - odmowa pomocy. Konstrukcja 'statt' pokazuje odrzuconą opcję - pomoc zastąpiona PRZEZ odejście. Krytyka niehelpful zachowania."
      },
      {
        id: "inf_zu_14",
        question: "Es macht Spaß, neue Leute _____ kennenlernen auf Reisen.",
        translation: "(Sprawia przyjemność poznawać nowych ludzi w podróżach)",
        options: ["zu", "um zu", "ohne zu", "statt zu"],
        correct: "zu",
        explanation: "Forma 'Spaß zu kennenlernen' przyjemność z aktywności! Co jest fajne - bezokolicznik pokazuje czynność. To radość podróżowania - społeczne połączenia. Konstrukcja 'Spaß machen' plus 'zu' bezokolicznik opisuje przyjemną aktywność. Źródło przyjemności wyrażone przez frazę bezokolicznikową."
      },
      {
        id: "inf_zu_15",
        question: "Er versprach, morgen pünktlich _____ kommen zur Arbeit sicher.",
        translation: "(Obiecał przyjść jutro punktualnie do pracy na pewno)",
        options: ["zu", "um zu", "ohne zu", "statt zu"],
        correct: "zu",
        explanation: "Forma 'versprechen zu kommen' obiecana akcja! Zobowiązanie DO zrobienia - przyszła obietnica. To niezawodność - zobowiązanie do punktualności. Czasowniki obietnic (versprechen, hoffen, planen) plus 'zu' bezokolicznik. Pokazuje zobowiązaną przyszłą akcję. Wyrażanie zobowiązania."
      }
    ]
  },

  participle_constructions: {
    name: "Konstrukcje imiesłowowe",
    description: "Das spielende Kind, die gelesenen Bücher",
    icon: Puzzle,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "part_const_1",
        question: "Das _____ Kind spielt fröhlich im Garten mit Freunden.",
        translation: "(Śmiejące się dziecko bawi się radośnie w ogrodzie z przyjaciółmi)",
        options: ["lachende", "gelachte", "lachen", "lacht"],
        correct: "lachende",
        explanation: "Imiesłów teraźniejszy 'lachende' jako przymiotnik! Aktywna trwająca akcja - dziecko ROBI akcję. To o radosnej scenie - bawiące się dziecko. Imiesłów teraźniejszy (Partizip I): bezokolicznik plus -d plus końcówka przymiotnikowa. Pokazuje trwającą aktywną akcję - dziecko obecnie się śmieje. Aktywny opis."
      },
      {
        id: "part_const_2",
        question: "Die _____ Bücher liegen auf dem Tisch im Wohnzimmer.",
        translation: "(Przeczytane książki leżą na stole w salonie)",
        options: ["gelesenen", "lesenden", "lesen", "gelesen"],
        correct: "gelesenen",
        explanation: "Imiesłów przeszły 'gelesenen' jako przymiotnik! Bierna zakończona - ZOSTAŁY przeczytane. To o stanie - skończone książki. Imiesłów przeszły (Partizip II) plus końcówka używane atrybutywnie. Pokazuje zakończony stan - książki już przeczytane. Rezultatywny opis."
      },
      {
        id: "part_const_3",
        question: "Der _____ Zug kommt in zehn Minuten am Bahnhof an.",
        translation: "(Nadjeżdżający pociąg przyjeżdża za dziesięć minut na dworzec)",
        options: ["ankommende", "angekommene", "ankommen", "ankommt"],
        correct: "ankommende",
        explanation: "Imiesłów teraźniejszy czasownika rozdzielnego! Obecnie przyjeżdżający - w procesie. To aktualizacja podróży - zbliżające się przybycie. Imiesłów teraźniejszy czasownika rozdzielnego: przedrostek plus bezokolicznik plus -d plus końcówka. Forma 'ankommende Zug' pociąg obecnie w drodze. Aktywne zbliżanie się."
      },
      {
        id: "part_const_4",
        question: "Die von der Regierung _____ Maßnahmen są bardzo surowe aktualnie.",
        translation: "(Środki wprowadzone przez rząd są bardzo surowe aktualnie)",
        options: ["eingeführten", "einführenden", "einführen", "eingeführte"],
        correct: "eingeführten",
        explanation: "Imiesłów przeszły 'eingeführten' ze sprawcą! Wprowadzone PRZEZ rząd - zakończona akcja. To o polityce - środki rządowe. Rozszerzona fraza imiesłowowa: 'von...eingeführten' zawiera sprawcę. Imiesłów przeszły pokazuje środki już wprowadzone. Złożona struktura atrybutywna."
      },
      {
        id: "part_const_5",
        question: "Die _____ Musik gefällt mir bardzo gut i jest relaksująca.",
        translation: "(Grająca muzyka bardzo mi się podoba i jest relaksująca)",
        options: ["spielende", "gespielte", "spielen", "spielt"],
        correct: "spielende",
        explanation: "Imiesłów 'spielende Musik' aktywny teraźniejszy! Muzyka JEST grająca - trwające. To doznanie słuchowe - obecny dźwięk. Imiesłów teraźniejszy pokazuje muzykę aktywnie produkującą dźwięk teraz - trwający stan. Forma 'spielende' opisuje kontynuującą akcję. Opis obecnej aktywności."
      },
      {
        id: "part_const_6",
        question: "Das gestern _____ Essen war naprawdę pyszne i świeże!",
        translation: "(Wczoraj ugotowane jedzenie było naprawdę pyszne i świeże!)",
        options: ["gekochte", "kochende", "kochen", "kocht"],
        correct: "gekochte",
        explanation: "Imiesłów 'gekochte Essen' przeszły! Jedzenie ZOSTAŁO ugotowane - zakończone. To kulinarny komplement - chwalenie posiłku. Rozszerzona: 'gestern gekochte' dodaje ramę czasową. Imiesłów przeszły pokazuje przygotowany stan jedzenia - rezultat gotowania. Czasowy modyfikator włączony."
      },
      {
        id: "part_const_7",
        question: "Die in der Zeitung _____ Nachricht była szokująca dla wszystkich.",
        translation: "(Wiadomość opublikowana w gazecie była szokująca dla wszystkich)",
        options: ["veröffentlichte", "veröffentlichende", "veröffentlichen", "veröffentlicht"],
        correct: "veröffentlichte",
        explanation: "Forma 'veröffentlichte Nachricht' opublikowane wiadomości! Zakończona akcja - pojawiła się w gazecie. To raport medialny. Rozszerzona fraza imiesłowowa 'in der Zeitung veröffentlichte' dodaje lokalizację. Imiesłów przeszły pokazuje wiadomości już opublikowane. Złożona konstrukcja atrybutywna z lokalizacją."
      },
      {
        id: "inf_zu_8",
        question: "Der auf der Straße _____ Mann braucht dringend pomocy natychmiast.",
        translation: "(Leżący na ulicy mężczyzna potrzebuje pilnie pomocy natychmiast)",
        options: ["liegende", "gelegene", "liegen", "liegt"],
        correct: "liegende",
        explanation: "Imiesłów 'liegende Mann' aktywna teraźniejsza pozycja! Obecnie leżący - stan teraz. To nagły wypadek - potrzeba pomocy. Imiesłów teraźniejszy 'liegende' opisuje obecną pozycję lub stan mężczyzny. Rozszerzona: 'auf der Straße liegende' zawiera lokalizację. Aktywny trwający stan."
      },
      {
        id: "part_const_9",
        question: "Die von ihm _____ Entscheidung zaskoczyła wszystkich kolegów bardzo.",
        translation: "(Decyzja podjęta przez niego zaskoczyła wszystkich kolegów bardzo)",
        options: ["getroffene", "treffende", "treffen", "trifft"],
        correct: "getroffene",
        explanation: "Forma 'getroffene Entscheidung' podjęta decyzja! Imiesłów przeszły - zakończony wybór. To o zaskoczeniu - nieoczekiwana decyzja. Rozszerzona forma 'von ihm getroffene' zawiera sprawcę (przez niego). Imiesłów przeszły pokazuje decyzję już podjętą. Sprawca włączony w konstrukcję."
      },
      {
        id: "part_const_10",
        question: "Statt zu Hause _____ bleiben, gingen wir aus na jedzenie.",
        translation: "(Zamiast zostać w domu, wyszliśmy na jedzenie)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Konstrukcja 'statt...zu bleiben' odrzucenie opcji! Alternatywa wybrana - wyszli zamiast. To społeczny wybór - preferowanie wyjścia. Forma 'statt' plus zu-bezokolicznik pokazuje odrzuconą akcję. Pozostanie odrzucone NA RZECZ wyjścia. Struktura wyrażania wyboru."
      },
      {
        id: "part_const_11",
        question: "Das schnell _____ Auto należy do mojego bogatego sąsiada tam.",
        translation: "(Szybko jadący samochód należy do mojego bogatego sąsiada tam)",
        options: ["fahrende", "gefahrene", "fahren", "fährt"],
        correct: "fahrende",
        explanation: "Imiesłów 'fahrende Auto' aktywnie poruszające się! Imiesłów teraźniejszny - obecnie jadące. To obserwacja - samochód w ruchu. Forma 'schnell fahrende' prędkość plus ruch - połączony opis. Aktywny imiesłów opisuje trwający ruch. Dynamiczny stan."
      },
      {
        id: "part_const_12",
        question: "Ohne _____ nachzudenken, powiedział coś bardzo głupiego głośno.",
        translation: "(Bez zastanowienia powiedział coś bardzo głupiego głośno)",
        options: ["zu", "um zu", "statt zu", "-"],
        correct: "zu",
        explanation: "Forma 'ohne zu denken' impulsywna akcja! Bez myślenia - natychmiastowa reakcja. To o błędzie - pochopna mowa. Konstrukcja 'ohne' plus zu-bezokolicznik pokazuje główną akcję BEZ mentalnego przygotowania. Krytyka bezmyślności. Brak rozwagi."
      },
      {
        id: "part_const_13",
        question: "Die im Supermarkt _____ Produkte są zawsze świeże i niedrogie.",
        translation: "(Produkty sprzedawane w supermarkecie są zawsze świeże i niedrogie)",
        options: ["verkauften", "verkaufenden", "verkaufen", "verkauft"],
        correct: "verkauften",
        explanation: "Imiesłów 'verkauften Produkte' sprzedawane rzeczy! Imiesłów przeszły - sprzedawane regularnie. To handel detaliczny - dostępność produktów. Rozszerzona forma 'im Supermarkt verkauften' lokalizacja włączona. Imiesłów opisuje status handlowy produktów. Specyfikacja gdzie-sprzedawane."
      },
      {
        id: "part_const_14",
        question: "Um gesund _____ bleiben, muss man viel Sport treiben codziennie.",
        translation: "(Żeby pozostać zdrowym, trzeba dużo uprawiać sport codziennie)",
        options: ["zu", "um zu", "ohne zu", "-"],
        correct: "zu",
        explanation: "Konstrukcja 'um...zu bleiben' cel zdrowotny! Cel utrzymania dobrostanu - konieczność ćwiczeń. To rada zdrowotna - znaczenie fitness. Konstrukcja 'um...zu' pokazująca cel - dlaczego sport konieczny. Motywacja zorientowana na cel. Cel zdrowotny."
      },
      {
        id: "part_const_15",
        question: "Die vor zwei Jahren _____ Brücke musi być naprawiony pilnie.",
        translation: "(Most zbudowany dwa lata temu musi być naprawiony pilnie)",
        options: ["gebaute", "bauende", "bauen", "baut"],
        correct: "gebaute",
        explanation: "Imiesłów 'gebaute Brücke' skonstruowana przeszłość! Zbudowany dwa lata temu - zakończone. To infrastruktura - potrzeba konserwacji. Rozszerzona czasowa 'vor zwei Jahren gebaute' specyfikuje kiedy. Imiesłów przeszły pokazuje ukończenie - most już zbudowany ale niszczejący. Konstrukcja określona czasowo."
      }
    ]
  },

  sentence_bracket_satzklammer: {
    name: "Klamra zdaniowa (Satzklammer)",
    description: "Pozycja czasownika tworzącego ramę struktury zdania",
    icon: BookOpen,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "satz_1",
        question: "Ich _____ gestern den ganzen Tag zu Hause _____.",
        translation: "(Byłem wczoraj cały dzień w domu)",
        options: ["war / -", "bin / gewesen", "habe / gewesen", "war / gewesen"],
        correct: "war / -",
        explanation: "Czas przeszły prosty BEZ klamry! Forma 'war' wystarczy - Präteritum 'sein' nie potrzebuje nawiasu. To o lokalizacji - przeszłe miejsce pobytu. Tylko Perfekt i modalne tworzą klamry - prosty Präteritum jeden czasownik. Forma 'war' kompletna sama - nie potrzeba drugiego elementu klamry."
      },
      {
        id: "satz_2",
        question: "Wir _____ gestern Abend lange im Restaurant _____.",
        translation: "(Byliśmy wczoraj wieczorem długo w restauracji)",
        options: ["haben / gewesen", "waren / -", "sind / gewesen", "hatten / gewesen"],
        correct: "haben / gewesen",
        explanation: "Klamra Perfect 'haben...gewesen'! Forma 'haben' otwiera, 'gewesen' zamyka - rama. To wydarzenie towarzyskie - kolacja na mieście. Czas Perfect tworzy klamrę: pomocniczy zaczyna, imiesłów kończy. Treść mieści się wewnątrz klamry - czas, sposób, miejsce między. Struktura Satzklammer."
      },
      {
        id: "satz_3",
        question: "Ich _____ morgen früh zur Arbeit _____.",
        translation: "(Muszę jutro wcześnie do pracy)",
        options: ["muss / gehen", "gehen / muss", "muss / zu gehen", "will / gehen"],
        correct: "muss / gehen",
        explanation: "Klamra modalna 'muss...gehen'! Modalny otwiera, bezokolicznik zamyka. To obowiązek - wymóg pracy. Czasowniki modalne tworzą klamrę: modalny zaczyna, bezokolicznik kończy. Forma 'morgen früh zur Arbeit' mieści się w środku. Klasyczna konstrukcja modalna."
      },
      {
        id: "satz_4",
        question: "Sie _____ das Buch schon letzte Woche _____.",
        translation: "(Przeczytała książkę już w zeszłym tygodniu)",
        options: ["hat / gelesen", "hatte / gelesen", "liest / -", "las / -"],
        correct: "hat / gelesen",
        explanation: "Klamra Perfect 'hat...gelesen'! Pomocniczy plus imiesłów tworzą ramę zdania. To osiągnięcie - ukończenie książki. Klamra Perfect: 'hat' rozpoczyna, 'gelesen' kończy. Czas i obiekt wewnątrz klamry. Struktura osiągnięcia czytania."
      },
      {
        id: "satz_5",
        question: "Wir _____ gestern mit dem Zug nach Berlin _____.",
        translation: "(Pojechaliśmy wczoraj pociągiem do Berlina)",
        options: ["sind / gefahren", "haben / gefahren", "fuhren / -", "fahren / -"],
        correct: "sind / gefahren",
        explanation: "Klamra Perfect ruchu 'sind...gefahren'! Czasownik 'sein' dla czasowników ruchu - imiesłów kończy. To raport podróży - przeszła podróż. Czasowniki ruchu używają 'sein' w Perfect - tworzy klamrę. Forma 'gefahren' kończy, wewnątrz: czas plus sposób plus cel. Struktura Perfect ruchu."
      },
      {
        id: "satz_6",
        question: "Er _____ heute nicht zur Schule _____.",
        translation: "(Może dzisiaj nie pójść do szkoły)",
        options: ["kann / gehen", "gehen / kann", "konnte / gehen", "geht / können"],
        correct: "kann / gehen",
        explanation: "Klamra modalnej możliwości 'kann...gehen'! Pozwolenie lub zdolność wyrażona. To o opcji - możliwa nieobecność. Modalna klamra obramowuje możliwość: 'kann' zaczyna, 'gehen' kończy. Negacja 'nicht' i cel w środku. Struktura pozwolenia."
      },
      {
        id: "satz_7",
        question: "Ich _____ gestern Abend ein interessantes Buch _____.",
        translation: "(Kupiłem wczoraj wieczorem ciekawą książkę)",
        options: ["habe / gekauft", "bin / gekauft", "kaufte / -", "kaufe / -"],
        correct: "habe / gekauft",
        explanation: "Klamra transakcji Perfect 'habe...gekauft'! Zakup ukończony - pomocniczy obramowuje. To wspomnienie zakupowe - przeszły zakup. Czasowniki transakcyjne używają 'haben' w Perfect - struktura klamry. Czas plus obiekt w środku, imiesłów kończy. Raport zakupu."
      },
      {
        id: "satz_8",
        question: "Sie _____ wahrscheinlich morgen nicht zur Party _____.",
        translation: "(Prawdopodobnie nie przyjdzie jutro na imprezę)",
        options: ["wird / kommen", "kommt / werden", "wird / gekommen", "ist / kommen"],
        correct: "wird / kommen",
        explanation: "Klamra przyszła 'wird...kommen'! Pomocniczy 'werden' obramowuje przyszłą akcję. To przewidywanie - antycypowana nieobecność. Przyszła klamra: 'wird' rozpoczyna, bezokolicznik kończy. Przysłówek prawdopodobieństwa i szczegóły w środku. Obramowanie konstrukcji przyszłej."
      },
      {
        id: "satz_9",
        question: "Wir _____ gestern den ganzen Tag hart _____.",
        translation: "(Pracowaliśmy wczoraj cały dzień ciężko)",
        options: ["haben / gearbeitet", "sind / gearbeitet", "arbeiteten / -", "arbeiten / -"],
        correct: "haben / gearbeitet",
        explanation: "Klamra pracy Perfect 'haben...gearbeitet'! Aktywność ukończona wczoraj. To raport pracy - wczorajszy wysiłek. Forma 'haben' rozpoczyna, 'gearbeitet' kończy - czas trwania i sposób wewnątrz klamry. Struktura ukończenia aktywności."
      },
      {
        id: "satz_10",
        question: "Du _____ wirklich mehr Wasser trinken _____!",
        translation: "(Powinieneś naprawdę więcej pić wody!)",
        options: ["solltest / -", "sollst / trinken", "solltest / trinken", "trinkst / sollen"],
        correct: "solltest / -",
        explanation: "Pojedynczy modalny 'solltest' BEZ bezokolicznika! Gdy bezokolicznik oczywisty (picie domyślne) można pominąć. To rada zdrowotna - nawodnienie. Modalny sam może być kompletny gdy kontekst jasny - 'solltest' rozumiany bezokolicznik. Ekonomia w znanych kontekstach."
      },
      {
        id: "satz_11",
        question: "Ich _____ gestern mit meiner Freundin ins Kino _____.",
        translation: "(Poszedłem wczoraj z moją dziewczyną do kina)",
        options: ["bin / gegangen", "habe / gegangen", "ging / -", "gehe / -"],
        correct: "bin / gegangen",
        explanation: "Klamra ruchu Perfect 'bin...gegangen'! Czasownik 'sein' z czasownikiem ruchu - klamra. To randka - wyjście do kina. Czasowniki ruchu tworzą klamrę sein: 'bin' zaczyna, 'gegangen' kończy. Partner i cel w środku. Struktura ukończenia ruchu."
      },
      {
        id: "satz_12",
        question: "Sie _____ sicher bald eine gute Lösung _____.",
        translation: "(Na pewno wkrótce znajdzie dobre rozwiązanie)",
        options: ["wird / finden", "findet / werden", "wird / gefunden", "hat / gefunden"],
        correct: "wird / finden",
        explanation: "Klamra przyszłego optymizmu 'wird...finden'! Przewidywanie - nadchodzące rozwiązanie. To zachęta - pewność sukcesu. Przyszła klamra obramowuje nadzieję: 'wird' rozpoczyna, bezokolicznik kończy. Przysłówek pewności w środku. Struktura nadziejnego przewidywania."
      },
      {
        id: "satz_13",
        question: "Wir _____ letzte Woche ein neues Auto _____.",
        translation: "(Kupiliśmy w zeszłym tygodniu nowy samochód)",
        options: ["haben / gekauft", "sind / gekauft", "kauften / -", "kaufen / -"],
        correct: "haben / gekauft",
        explanation: "Klamra zakupu Perfect 'haben...gekauft'! Transakcja ukończona. To ważny zakup - nabycie samochodu. Perfect zakupu: 'haben' plus imiesłów tworzy ramę. Czas i obiekt wewnątrz klamry. Ukończenie transakcji."
      },
      {
        id: "satz_14",
        question: "Er _____ die Prüfung niestety nie _____.",
        translation: "(Niestety nie zdał egzaminu)",
        options: ["hat / bestanden", "ist / bestanden", "bestand / -", "besteht / -"],
        correct: "hat / bestanden",
        explanation: "Klamra porażki Perfect 'hat...bestanden'! Negatywny rezultat - nie zdał. To rozczarowanie - porażka egzaminacyjna. Czasowniki osiągnięć używają 'haben' - tworzy klamrę. Negacja wewnątrz ramy. Raport negatywnego wyniku."
      },
      {
        id: "satz_15",
        question: "Du _____ heute naprawdę dużo szczęścia _____!",
        translation: "(Miałeś dzisiaj naprawdę dużo szczęścia!)",
        options: ["hast / gehabt", "bist / gehabt", "hattest / -", "hast / -"],
        correct: "hast / gehabt",
        explanation: "Klamra stanu Perfect 'hast...gehabt'! Doświadczanie szczęścia - ukończony dzień. To obserwacja - uznanie fortuny. Perfect 'haben' tworzy klamrę nawet z samym 'haben' - 'gehabt' kończy. Meta-konstrukcja - posiadanie użyte w formie Perfect. Uznanie szczęśliwego dnia."
      }
    ]
  }
};

export default part7Categories;