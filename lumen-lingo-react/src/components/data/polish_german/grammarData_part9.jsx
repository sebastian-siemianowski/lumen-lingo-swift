
/**
 * POLISH → GERMAN GRAMMAR - PART 9
 * 4 kategorie, 15 pytań każda - Poziom ekspercki
 */

import { Database, Trophy, Sparkles, Settings } from "lucide-react";

export const part9Categories = {
  extended_adjective_phrases: {
    name: "Rozszerzone frazy przymiotnikowe",
    description: "Das von mir geschriebene Buch - złożone konstrukcje",
    icon: Database,
    color: "from-violet-500 to-purple-600",
    level: "advanced",
    questions: [
      {
        id: "ext_adj_1",
        question: "Das von meinem Vater _____ Haus steht auf einem Berg.",
        translation: "(Dom zbudowany przez mojego ojca stoi na górze)",
        options: ["gebaute", "bauende", "bauen", "gebaut"],
        correct: "gebaute",
        explanation: "'Gebaute Haus' to rozszerzona fraza przymiotnikowa! Imiesłów przeszły 'gebaute' działa jako przymiotnik z dodatkowymi informacjami 'von meinem Vater'. To o budowie domu - ukończona budowa. Rozszerzona fraza działa tak: agent (von Vater) + imiesłów (gebaute) + końcówka przed rzeczownikiem. Całe to rozszerzenie funkcjonuje jak jeden długi przymiotnik modyfikujący rzeczownik."
      },
      {
        id: "ext_adj_2",
        question: "Die in der Zeitung _____ Nachricht war schockierend für alle.",
        translation: "(Wiadomość opublikowana w gazecie była szokująca dla wszystkich)",
        options: ["veröffentlichte", "veröffentlichende", "veröffentlichen", "veröffentlicht"],
        correct: "veröffentlichte",
        explanation: "'Veröffentlichte Nachricht' zawiera informację o lokalizacji! Imiesłów plus informacja o miejscu występują razem przed rzeczownikiem. To o mediach - źródło wiadomości. Rozszerzona fraza: 'in der Zeitung' (gdzie) + 'veröffentlichte' (opublikowana) razem przed rzeczownikiem 'Nachricht'. Cała fraza pełni funkcję modyfikatora."
      },
      {
        id: "ext_adj_3",
        question: "Der seit Jahren hier _____ Professor ist sehr beliebt bei Studenten.",
        translation: "(Profesor wykładający tutaj od lat jest bardzo popularny wśród studentów)",
        options: ["unterrichtende", "unterrichtete", "unterrichten", "unterrichtet"],
        correct: "unterrichtende",
        explanation: "'Unterrichtende Professor' to aktywny imiesłów teraźniejszy! Pokazuje trwające obecnie nauczanie. To o reputacji profesora - jego popularność. Rozszerzona fraza imiesłowu teraźniejszego: 'seit Jahren hier' (jak długo i gdzie) + 'unterrichtende' (wykładający) przed rzeczownikiem. Długotrwała aktywna czynność jako atrybut."
      },
      {
        id: "ext_adj_4",
        question: "Die von der Regierung _____ Maßnahmen sind sehr umstritten.",
        translation: "(Środki wprowadzone przez rząd są bardzo kontrowersyjne)",
        options: ["eingeführten", "einführenden", "einführen", "eingeführte"],
        correct: "eingeführten",
        explanation: "'Eingeführten Maßnahmen' wskazuje agenta działania! Imiesłów pokazuje kto wykonał akcję. To o polityce - działania rządowe. Rozszerzona fraza: 'von der Regierung' (przez kogo) + 'eingeführten' (wprowadzone) z końcówką przed rzeczownikiem. Agent zawarty w konstrukcji przymiotnikowej."
      },
      {
        id: "ext_adj_5",
        question: "Das gestern im Fernsehen _____ Interview war sehr interessant.",
        translation: "(Wywiad pokazany wczoraj w telewizji był bardzo ciekawy)",
        options: ["gezeigte", "zeigende", "zeigen", "gezeigt"],
        correct: "gezeigte",
        explanation: "'Gezeigte Interview' łączy czas i miejsce! Informacje kiedy i gdzie przed imiesłowem. To o mediach - informacja o emisji. Rozszerzona fraza: 'gestern' (kiedy) + 'im Fernsehen' (gdzie) + 'gezeigte' (pokazany) przed rzeczownikiem. Wiele modyfikatorów w jednej frazie."
      },
      {
        id: "ext_adj_6",
        question: "Die von mir _____ Entscheidung war richtig am Ende doch.",
        translation: "(Decyzja podjęta przeze mnie była w końcu jednak słuszna)",
        options: ["getroffene", "treffende", "treffen", "getroffen"],
        correct: "getroffene",
        explanation: "'Getroffene Entscheidung' podkreśla osobiste działanie! Agent 'przeze mnie' jest wskazany. To o samowalidacji - obrona wyboru. Rozszerzona fraza z agentem: 'von mir' (przez kogo) + 'getroffene' (podjęta) pokazuje odpowiedzialność za decyzję. Osobista odpowiedzialność wyrażona gramatycznie."
      },
      {
        id: "ext_adj_7",
        question: "Der vor einer Woche _____ Brief ist endlich angekommen heute!",
        translation: "(List wysłany tydzień temu w końcu przybył dzisiaj!)",
        options: ["geschickte", "schickende", "schicken", "geschickt"],
        correct: "geschickte",
        explanation: "'Geschickte Brief' zawiera określenie czasu! Informacja temporalna włączona w atrybut. To o dostawie - opóźnienie przesyłki. Rozszerzona fraza czasowa: 'vor einer Woche' (kiedy) + 'geschickte' (wysłany) przed rzeczownikiem. Specyfikacja czasu osadzona w konstrukcji przymiotnikowej."
      },
      {
        id: "ext_adj_8",
        question: "Die von allen _____ Lösung funktioniert leider nicht gut.",
        translation: "(Rozwiązanie zaakceptowane przez wszystkich niestety nie działa dobrze)",
        options: ["akzeptierte", "akzeptierende", "akzeptieren", "akzeptiert"],
        correct: "akzeptierte",
        explanation: "'Akzeptierte Lösung' wskazuje powszechną zgodę! Informacja o tym kto zaakceptował jest zawarta. To o problemie - nieudane rozwiązanie. Rozszerzona fraza: 'von allen' (przez kogo - wszyscy) + 'akzeptierte' (zaakceptowane). Zgoda grupowa zawarta w opisie."
      },
      {
        id: "ext_adj_9",
        question: "Das für Kinder _____ Buch ist sehr bunt und lustig.",
        translation: "(Książka napisana dla dzieci jest bardzo kolorowa i śmieszna)",
        options: ["geschriebene", "schreibende", "schreiben", "geschrieben"],
        correct: "geschriebene",
        explanation: "'Geschriebene Buch' określa docelową grupę odbiorców! Informacja dla kogo jest osadzona. To o wydawnictwie - książka dziecięca. Rozszerzona fraza: 'für Kinder' (dla kogo) + 'geschriebene' (napisana) wskazuje przewidzianych czytelników. Cel osadzony w atrybucie."
      },
      {
        id: "ext_adj_10",
        question: "Die mit großer Sorgfalt _____ Arbeit wurde gelobt sehr.",
        translation: "(Praca wykonana z wielką starannością została bardzo pochwalona)",
        options: ["gemachte", "machende", "machen", "gemacht"],
        correct: "gemachte",
        explanation: "'Gemachte Arbeit' opisuje sposób wykonania! Informacja JAK zostało zrobione jest zawarta. To o jakości - chwalenie dokładności. Rozszerzona fraza: 'mit großer Sorgfalt' (jak) + 'gemachte' (wykonana) pokazuje metodę. Sposób wykonania zawarty przed rzeczownikiem."
      },
      {
        id: "ext_adj_11",
        question: "Der aus Italien _____ Wein schmeckt ausgezeichnet und edel.",
        translation: "(Wino importowane z Włoch smakuje wyśmienicie i szlachetnie)",
        options: ["importierte", "importierende", "importieren", "importiert"],
        correct: "importierte",
        explanation: "'Importierte Wein' wskazuje pochodzenie! Informacja skąd pochodzi produkt. To o produkcie - specyfikacja geograficzna. Rozszerzona fraza: 'aus Italien' (skąd) + 'importierte' (importowane) przed rzeczownikiem. Informacja o pochodzeniu w konstrukcji atrybutywnej."
      },
      {
        id: "ext_adj_12",
        question: "Die von vielen Menschen _____ Brücke ist sehr alt historisch.",
        translation: "(Most używany przez wiele osób jest bardzo stary historycznie)",
        options: ["genutzte", "nutzende", "nutzen", "genutzt"],
        correct: "genutzte",
        explanation: "'Genutzte Brücke' określa użytkowników! Informacja o tym kto używa jest zawarta. To o infrastrukturze - popularny przejazd. Rozszerzona fraza: 'von vielen Menschen' (przez kogo - grupa użytkowników) + 'genutzte' (używany). Częstotliwość i użytkownicy osadzeni w opisie."
      },
      {
        id: "ext_adj_13",
        question: "Das mit viel Liebe _____ Essen schmeckt immer am besten!",
        translation: "(Jedzenie przygotowane z dużą miłością smakuje zawsze najlepiej!)",
        options: ["gekochte", "kochende", "kochen", "gekocht"],
        correct: "gekochte",
        explanation: "'Gekochte Essen' zawiera emocję! Informacja o uczuciu włożonym w przygotowanie. To o gotowaniu - troska w przygotowaniu. Rozszerzona fraza: 'mit viel Liebe' (z czym - uczucie) + 'gekochte' (przygotowane). Emocja i postawa zawarte w atrybucie pokazującym dbałość."
      },
      {
        id: "ext_adj_14",
        question: "Der im Krankenhaus _____ Arzt ist sehr erfahren und kompetent.",
        translation: "(Lekarz pracujący w szpitalu jest bardzo doświadczony i kompetentny)",
        options: ["arbeitende", "gearbeitete", "arbeiten", "arbeitet"],
        correct: "arbeitende",
        explanation: "'Arbeitende Arzt' określa miejsce pracy! Informacja gdzie pracuje jest zawarta. To o zawodzie - specyfikacja miejsca zatrudnienia. Rozszerzona fraza imiesłowu teraźniejszego: 'im Krankenhaus' (gdzie) + 'arbeitende' (pracujący) przed rzeczownikiem. Aktywne trwające zatrudnienie w konkretnej lokalizacji."
      },
      {
        id: "ext_adj_15",
        question: "Die vor hundert Jahren _____ Kirche ist ein Denkmal jetzt.",
        translation: "(Kościół zbudowany sto lat temu jest teraz pomnikiem)",
        options: ["gebaute", "bauende", "bauen", "gebaut"],
        correct: "gebaute",
        explanation: "'Gebaute Kirche' wskazuje czas historyczny! Informacja kiedy został zbudowany. To o architekturze - zabytkowy budynek. Rozszerzona fraza czasowa: 'vor hundert Jahren' (kiedy) + 'gebaute' (zbudowany). Data budowy osadzona pokazująca wiek budowli."
      }
    ]
  },

  strong_vs_weak_nouns: {
    name: "Rzeczowniki mocne vs słabe (n-Deklination)",
    description: "Der Mensch-den Menschen-dem Menschen",
    icon: Trophy,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "n_dekl_1",
        question: "Ich helfe _____ _____ beim Umzug in die neue Wohnung.",
        translation: "(Pomagam studentowi przy przeprowadzce do nowego mieszkania)",
        options: ["dem / Studenten", "den / Studenten", "der / Student", "dem / Student"],
        correct: "dem / Studenten",
        explanation: "'Dem Studenten' to słaby rzeczownik w celowniku! Męskie rzeczowniki typu 'Student' dodają końcówkę -en we wszystkich przypadkach oprócz mianownika. To o pomaganiu studentowi. N-Deklination: mianownik 'der Student', wszystkie inne przypadki 'Studenten'. Ta specjalna grupa rzeczowników wymaga szczególnej deklinacji."
      },
      {
        id: "n_dekl_2",
        question: "Ich sehe _____ _____ auf der Straße spazieren gemütlich.",
        translation: "(Widzę sąsiada spacerującego po ulicy wygodnie)",
        options: ["den / Nachbarn", "der / Nachbar", "dem / Nachbarn", "den / Nachbar"],
        correct: "den / Nachbarn",
        explanation: "'Den Nachbarn' to słaby rzeczownik w bierniku! Rzeczownik 'Nachbar' dodaje końcówkę -n w bierniku. To obserwacja - widzenie sąsiada. Słabe rzeczowniki męskie: biernik to 'den Nachbarn' (nie 'Nachbar'). Istoty żywe często należą do n-Deklination."
      },
      {
        id: "n_dekl_3",
        question: "Das ist das Auto _____ _____ aus der Nachbarschaft dort.",
        translation: "(To jest samochód prezydenta z sąsiedztwa tam)",
        options: ["des / Präsidenten", "der / Präsident", "dem / Präsidenten", "den / Präsidenten"],
        correct: "des / Präsidenten",
        explanation: "'Des Präsidenten' to słaby rzeczownik w dopełniaczu! Tytuły i zawody często należą do n-Deklination. To o posiadaniu - czyj samochód. Dopełniacz słabego rzeczownika: 'des Präsidenten' (nie 'Präsident'). Wzór dla tytułów zawodowych."
      },
      {
        id: "n_dekl_4",
        question: "Der Arzt untersucht _____ _____ sehr gründlich und sorgfältig.",
        translation: "(Lekarz bada pacjenta bardzo dokładnie i starannie)",
        options: ["den / Patienten", "der / Patient", "dem / Patienten", "des / Patienten"],
        correct: "den / Patienten",
        explanation: "'Den Patienten' to słaby rzeczownik w kontekście medycznym! Pacjent jako słaby rzeczownik w bierniku. To o badaniu - relacja lekarz-pacjent. 'Patient' w n-Deklination: biernik to 'den Patienten'. Terminologia medyczna używająca słabej deklinacji."
      },
      {
        id: "n_dekl_5",
        question: "Ich spreche gerade mit _____ _____ über das neue Projekt.",
        translation: "(Rozmawiam właśnie z kolegą o nowym projekcie)",
        options: ["dem / Kollegen", "den / Kollegen", "der / Kollege", "dem / Kollege"],
        correct: "dem / Kollegen",
        explanation: "'Mit dem Kollegen' to słaby rzeczownik w celowniku! Rzeczownik 'Kollege' potrzebuje końcówki -n w celowniku. To o rozmowie w pracy. Przyimek 'mit' wymaga celownika - 'dem Kollegen' (nie 'Kollege'). Relacje zawodowe używające słabych rzeczowników."
      },
      {
        id: "n_dekl_6",
        question: "Das Leben _____ _____ ist oft sehr schwierig und hart.",
        translation: "(Życie człowieka jest często bardzo trudne i ciężkie)",
        options: ["des / Menschen", "der / Mensch", "dem / Menschen", "den / Menschen"],
        correct: "des / Menschen",
        explanation: "'Des Menschen' to filozoficzny dopełniacz! Rzeczownik 'Mensch' to klasyczny słaby rzeczownik - zawsze z -en oprócz mianownika. To o egzystencji - kondycja ludzka. 'Mensch' w dopełniaczu: 'des Menschen'. Jeden z najczęstszych słabych rzeczowników w niemieckim."
      },
      {
        id: "n_dekl_7",
        question: "Der Polizist verfolgt _____ _____ durch die dunklen Straßen.",
        translation: "(Policjant ściga złodzieja przez ciemne ulice)",
        options: ["den / Dieb", "der / Dieb", "dem / Dieb", "des / Diebes"],
        correct: "den / Dieb",
        explanation: "'Den Dieb' to MOCNY rzeczownik w bierniku! Rzeczownik 'Dieb' NIE jest słaby - tylko dopełniacz ma 'Diebes'. To scena pościgu. Większość rzeczowników męskich NIE jest słaba - 'Dieb' to normalny męski rzeczownik który tylko w dopełniaczu dodaje końcówkę -(e)s. Standardowa mocna deklinacja."
      },
      {
        id: "n_dekl_8",
        question: "Ich gratuliere _____ _____ zum großen Erfolg bei der Prüfung!",
        translation: "(Gratuluję koledze wielkiego sukcesu na egzaminie!)",
        options: ["dem / Kollegen", "den / Kollegen", "der / Kollege", "des / Kollegen"],
        correct: "dem / Kollegen",
        explanation: "'Dem Kollegen gratulieren' to wymóg celownika! Czasownik 'gratulieren' zawsze wymaga celownika plus słaby rzeczownik. To gratulacje - świętowanie sukcesu. 'Gratulieren' + celownik, 'Kollege' słaby więc 'dem Kollegen'. Podwójny wymóg: przypadek czasownika plus końcówka słabego rzeczownika."
      },
      {
        id: "n_dekl_9",
        question: "Die Meinung _____ _____ ist mir sehr wichtig persönlich.",
        translation: "(Opinia eksperta jest dla mnie bardzo ważna osobiście)",
        options: ["des / Experten", "der / Experte", "dem / Experten", "den / Experten"],
        correct: "des / Experten",
        explanation: "'Des Experten' to opinia fachowca! Profesjonalista w dopełniaczu - czyja opinia. To o wartości - szanowanie ekspertyzy. Słaby rzeczownik 'Experte': dopełniacz to 'des Experten'. Tytuły zawodowe często w n-Deklination."
      },
      {
        id: "n_dekl_10",
        question: "Der Journalist interviewt _____ _____ für einen Artikel morgen.",
        translation: "(Dziennikarz przeprowadza wywiad z prezydentem na artykuł jutro)",
        options: ["den / Präsidenten", "der / Präsident", "dem / Präsidenten", "des / Präsidenten"],
        correct: "den / Präsidenten",
        explanation: "'Den Präsidenten' to przeprowadzanie wywiadu! Posiadacz tytułu jako obiekt w bierniku. To dziennikarstwo - wywiad polityczny. Słaby rzeczownik 'Präsident': biernik to 'den Präsidenten'. Wysokie tytuły w wzorze n-Deklination."
      },
      {
        id: "n_dekl_11",
        question: "Der Name _____ _____ ist mir leider entfallen völlig.",
        translation: "(Imię sąsiada całkowicie mi umknęło niestety)",
        options: ["des / Nachbarn", "der / Nachbar", "dem / Nachbarn", "den / Nachbarn"],
        correct: "des / Nachbarn",
        explanation: "'Des Nachbarn Name' to dopełniacz posiadający! Czyje imię - sąsiada. To zapomnienie - trudność z pamięcią. Słaby rzeczownik 'Nachbar': dopełniacz to 'des Nachbarn'. Towarzyska niezręczność związana z zapomnianymi imionami."
      },
      {
        id: "n_dekl_12",
        question: "Ich vertraue _____ _____ vollständig in dieser Angelegenheit.",
        translation: "(Ufam prawnikowi całkowicie w tej sprawie)",
        options: ["dem / Anwalt", "den / Anwalt", "der / Anwalt", "des / Anwalts"],
        correct: "dem / Anwalt",
        explanation: "'Dem Anwalt' to MOCNY rzeczownik! Rzeczownik 'Anwalt' NIE jest słaby - normalny męski rzeczownik. To zaufanie prawnicze - pewność co do adwokata. Mocna deklinacja 'Anwalt' - celownik to tylko 'dem Anwalt' bez końcówki -en. Nie wszystkie zawody są słabymi rzeczownikami."
      },
      {
        id: "n_dekl_13",
        question: "Das Herz _____ _____ schlägt sehr schnell vor Aufregung.",
        translation: "(Serce sportowca bije bardzo szybko z emocji)",
        options: ["des / Sportlers", "der / Sportler", "dem / Sportler", "den / Sportlers"],
        correct: "des / Sportlers",
        explanation: "'Des Sportlers' to MOCNY rzeczownik w dopełniaczu! Rzeczownik 'Sportler' NIE jest słaby - tylko dopełniacz ma końcówkę -(e)s. To o fizjologii - serce sportowca. Mocny męski dopełniacz: 'des Sportlers'. Zawód sportowca to mocna deklinacja nie słaba."
      },
      {
        id: "n_dekl_14",
        question: "Der Lehrer fragt _____ _____ nach der Hausaufgabe heute.",
        translation: "(Nauczyciel pyta ucznia o pracę domową dzisiaj)",
        options: ["den / Schüler", "der / Schüler", "dem / Schüler", "des / Schülers"],
        correct: "den / Schüler",
        explanation: "'Den Schüler' to MOCNY rzeczownik! Rzeczownik 'Schüler' NIE jest słaby - normalny biernik. To klasa - nauczyciel pyta. Mocny rzeczownik 'Schüler': biernik to 'den Schüler' bez dodawania końcówki -en. Określenie ucznia to mocna deklinacja."
      },
      {
        id: "n_dekl_15",
        question: "Die Frau _____ _____ arbeitet in einem großen Unternehmen.",
        translation: "(Żona sąsiada pracuje w dużej firmie)",
        options: ["des / Nachbarn", "der / Nachbar", "dem / Nachbarn", "den / Nachbarn"],
        correct: "des / Nachbarn",
        explanation: "'Des Nachbarn Frau' to relacja posiadająca! Żona sąsiada - słaby dopełniacz. To informacja społeczna - identyfikacja osoby. Słaby rzeczownik 'Nachbar': dopełniacz to 'des Nachbarn'. Relacja pokazana przez przypadek posiadający ze słabym rzeczownikiem."
      }
    ]
  },

  double_infinitive_construction: {
    name: "Podwójny bezokolicznik",
    description: "Haben/werden + bezokolicznik + bezokolicznik modalny",
    icon: Sparkles,
    color: "from-yellow-500 to-amber-600",
    level: "advanced",
    questions: [
      {
        id: "doub_inf_1",
        question: "Ich habe gestern lange arbeiten _____ wegen des Projekts.",
        translation: "(Musiałem wczoraj długo pracować z powodu projektu)",
        options: ["müssen", "gemusst", "mussten", "zu müssen"],
        correct: "müssen",
        explanation: "Podwójny bezokolicznik z czasownikiem modalnym! Struktura: 'haben' + 'arbeiten' (bezokolicznik) + 'müssen' (bezokolicznik) - NIE 'gemusst'! To o konieczności - obowiązek pracy. Gdy czasownik modalny występuje z innym bezokolicznikiem, używasz formy bezokolicznej czasownika modalnego zamiast imiesłowu. Specjalna konstrukcja gramatyczna - użycie 'gemusst' byłoby błędem."
      },
      {
        id: "doub_inf_2",
        question: "Sie hat das Buch nicht lesen _____ - sie hatte keine Zeit.",
        translation: "(Nie mogła przeczytać książki - nie miała czasu)",
        options: ["können", "gekonnt", "konnte", "zu können"],
        correct: "können",
        explanation: "Bezokolicznik 'können' w czasie Perfekt! Konstrukcja 'hat lesen können' nie 'gekonnt'. To wyjaśnianie niemożności - brak czasu. Reguła podwójnego bezokolicznika: haben + bezokolicznik czasownika głównego + bezokolicznik modalny. Imiesłów używamy tylko gdy modalny występuje sam bez innego czasownika."
      },
      {
        id: "doub_inf_3",
        question: "Wir werden morgen früh aufstehen _____ für die Reise.",
        translation: "(Będziemy musieli jutro wcześnie wstać na podróż)",
        options: ["müssen", "gemusst", "mussten", "zu müssen"],
        correct: "müssen",
        explanation: "'Werden müssen' to konieczność w przyszłości! Czasownik modalny w przyszłości używa podwójnego bezokolicznika - 'werden' + bezokolicznik + bezokolicznik modalny. To wymóg podróży - wczesny start. Przyszłość z czasownikiem modalnym: 'werden' + bezokolicznik czasownika + bezokolicznik modalny. Potrójna konstrukcja czasownikowa!"
      },
      {
        id: "doub_inf_4",
        question: "Er hat mir gestern helfen _____ beim Renovieren der Wohnung.",
        translation: "(Chciał mi wczoraj pomóc przy remoncie mieszkania)",
        options: ["wollen", "gewollt", "wollte", "zu wollen"],
        correct: "wollen",
        explanation: "Podwójny bezokolicznik z 'wollen'! Konstrukcja 'hat helfen wollen' nie 'gewollt'. To o intencji - oferta pomocy. Czas Perfekt czasownika modalnego z innym czasownikiem wymaga bezokolicznika modalnego. Imiesłów 'gewollt' używamy tylko gdy 'wollen' występuje samodzielnie - tu z 'helfen' więc bezokolicznik."
      },
      {
        id: "doub_inf_5",
        question: "Sie wird das Problem lösen _____ bis morgen Mittag sicher.",
        translation: "(Będzie mogła rozwiązać problem do jutra w południe na pewno)",
        options: ["können", "gekonnt", "konnte", "zu können"],
        correct: "können",
        explanation: "'Wird können' to zdolność w przyszłości! Podwójny bezokolicznik w czasie przyszłym - 'werden' + czasownik + czasownik modalny. To pewność - oczekiwanie sukcesu. Konstrukcja przyszłości modalnej: 'wird lösen können'. Pokazuje przyszłą możliwość."
      },
      {
        id: "doub_inf_6",
        question: "Du hättest früher kommen _____ - jetzt ist es zu spät!",
        translation: "(Powinieneś był wcześniej przyjść - teraz jest za późno!)",
        options: ["sollen", "gesollt", "solltest", "zu sollen"],
        correct: "sollen",
        explanation: "'Hättest kommen sollen' to zalecenie dotyczące przeszłości! Tryb przypuszczający Perfekt z czasownikiem modalnym - forma bezokoliczna. To krytyka - powinieneś był przyjść. Przeszłe 'should have': 'hättest' + bezokolicznik czasownika + bezokolicznik 'sollen'. Żal związany z nietrafionym czasem."
      },
      {
        id: "doub_inf_7",
        question: "Ich hätte dir gerne helfen _____, aber ich war selbst beschäftigt.",
        translation: "(Chętnie bym ci pomógł, ale sam byłem zajęty)",
        options: ["wollen", "gewollt", "wollte", "zu wollen"],
        correct: "wollen",
        explanation: "'Hätte helfen wollen' to niezrealizowane pragnienie! Tryb przypuszczający z modalnym używa bezokolicznika. To przeprosiny - wyjaśnianie niemożności. Przeszłość przypuszczająca z modalnym: 'hätte' + bezokolicznik czasownika + bezokolicznik modalny. Chciałbym ale nie mogłem."
      },
      {
        id: "doub_inf_8",
        question: "Er wird nächste Woche verreisen _____ für den Urlaub endlich.",
        translation: "(Będzie mógł wyjechać w przyszłym tygodniu na urlop w końcu)",
        options: ["können", "gekonnt", "konnte", "zu können"],
        correct: "können",
        explanation: "'Wird verreisen können' to przyszłe pozwolenie! Potrójna konstrukcja bezokolicznikowa - przyszłość plus modalny. To plany wakacyjne - nadchodząca możliwość. Przyszłość modalna: 'wird' + bezokolicznik czasownika + bezokolicznik modalny. Antycypowanie przyszłej możliwości."
      },
      {
        id: "doub_inf_9",
        question: "Sie haben gestern Abend ausgehen _____ aber waren zu müde.",
        translation: "(Chcieli wczoraj wieczorem wyjść ale byli zbyt zmęczeni)",
        options: ["wollen", "gewollt", "wollten", "zu wollen"],
        correct: "wollen",
        explanation: "'Haben ausgehen wollen' to grupowa intencja! Perfekt modalnego w liczbie mnogiej - forma bezokoliczna. To o planach - niespełnione pragnienie. Perfekt 'wollen' z innym czasownikiem: haben + bezokolicznik czasownika + bezokolicznik 'wollen'. Zmęczenie uniemożliwiające plany."
      },
      {
        id: "doub_inf_10",
        question: "Du wirst morgen früher aufwachen _____ für den Termin wichtig.",
        translation: "(Będziesz musiał jutro wcześniej wstać na ważne spotkanie)",
        options: ["müssen", "gemusst", "musstest", "zu müssen"],
        correct: "müssen",
        explanation: "'Wirst müssen' to przyszły obowiązek! Czasownik rozdzielny plus przyszłość modalna - wszystkie bezokoliczniki. To przypomnienie - nadchodząca konieczność. Przyszła konieczność: 'wirst' + bezokolicznik rozdzielny + bezokolicznik modalny. Wymóg jutrzejszy sformułowany."
      },
      {
        id: "doub_inf_11",
        question: "Wir hätten das Auto reparieren _____ vor der langen Reise.",
        translation: "(Powinniśmy byli naprawić samochód przed długą podróżą)",
        options: ["sollen", "gesollt", "sollten", "zu sollen"],
        correct: "sollen",
        explanation: "'Hätten reparieren sollen' to zalecenie dotyczące przeszłości! Żal związany z konserwacją - powinni byli naprawić. To mądrość po fakcie. Tryb przypuszczający Perfekt modalny: 'hätten' + bezokolicznik czasownika + bezokolicznik 'sollen'. Krytykowanie przeszłego zaniedbania."
      },
      {
        id: "doub_inf_12",
        question: "Sie hat mir gestern nicht helfen _____ - sie war beschäftigt.",
        translation: "(Nie mogła mi wczoraj pomóc - była zajęta)",
        options: ["können", "gekonnt", "konnte", "zu können"],
        correct: "können",
        explanation: "'Nicht helfen können' to negatywny Perfekt! Niemożność pomocy - podwójny bezokolicznik nawet w negacji. To przeprosiny - wyjaśnianie niedostępności. Negacja nie zmienia konstrukcji: hat + nicht + bezokolicznik czasownika + bezokolicznik modalny. Negacja wpasowuje się w konstrukcję."
      },
      {
        id: "doub_inf_13",
        question: "Ihr werdet das Projekt rechtzeitig beenden _____ hoffentlich.",
        translation: "(Będziecie mogli ukończyć projekt na czas miejmy nadzieję)",
        options: ["können", "gekonnt", "konntet", "zu können"],
        correct: "können",
        explanation: "'Werdet können' to przyszła możliwość w liczbie mnogiej! Antycypowana zdolność grupowa. To nadzieja na termin - wyrażanie pewności. Przyszłość modalna mnoga: 'werdet' + bezokolicznik czasownika + bezokolicznik modalny. Optymizm dotyczący możliwości zespołu."
      },
      {
        id: "doub_inf_14",
        question: "Du hättest mich anrufen _____ wenn du Hilfe brauchtest!",
        translation: "(Mogłeś był do mnie zadzwonić gdybyś potrzebował pomocy!)",
        options: ["können", "gekonnt", "konntest", "zu können"],
        correct: "können",
        explanation: "'Hättest anrufen können' to przeszła możliwość! Mogłeś ale nie zrobiłeś - łagodny wyrzut. To o komunikacji - stracona okazja. Tryb przypuszczający Perfekt zdolności: 'hättest' + bezokolicznik czasownika + bezokolicznik 'können'. Wskazywanie na niewykorzystaną opcję."
      },
      {
        id: "doub_inf_15",
        question: "Sie werden uns morgen besuchen _____ nach langer Zeit endlich.",
        translation: "(Będą mogli nas jutro odwiedzić po długim czasie w końcu)",
        options: ["können", "gekonnt", "konnten", "zu können"],
        correct: "können",
        explanation: "'Werden können' to przyszła możliwość! W końcu mogą odwiedzić - okoliczności pozwalają. To oczekiwanie na spotkanie - nadchodzące odwiedziny. Przyszła możliwość: 'werden' + bezokolicznik czasownika + bezokolicznik modalny. Długo oczekiwana wizyta stająca się możliwa."
      }
    ]
  },

  lassen_constructions: {
    name: "Konstrukcje z 'lassen'",
    description: "Ich lasse mir die Haare schneiden - konstrukcje kazuatywne",
    icon: Settings,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "lassen_1",
        question: "Ich lasse _____ morgen die Haare schneiden beim Friseur professionell.",
        translation: "(Obcinam sobie jutro włosy u fryzjera profesjonalnie)",
        options: ["mir", "mich", "sich", "mein"],
        correct: "mir",
        explanation: "'Mir die Haare schneiden lassen' to konstrukcja kazuatywna z częścią ciała! Zlecasz komuś obcięcie twoich włosów. To o fryzurze - usługa salonowa. Konstrukcja: 'lassen' + zaimek zwrotny w celowniku + część ciała + bezokolicznik = zlecić komuś zrobienie czegoś. Nie robisz tego sam - ktoś robi to dla ciebie."
      },
      {
        id: "lassen_2",
        question: "Sie _____ ihr Auto in der Werkstatt reparieren diese Woche.",
        translation: "(Naprawia swój samochód w warsztacie w tym tygodniu)",
        options: ["lässt", "lass", "lasse", "lasst"],
        correct: "lässt",
        explanation: "'Lässt reparieren' to zlecanie wykonania! Ona zleca naprawę samochodu - nie robi tego sama. To konserwacja samochodu - usługa mechanika. Czasownik 'lassen' w funkcji kazuatywnej oznacza zlecenie usługi - 'lässt' (trzecia osoba pojedyncza) + bezokolicznik. Płaci za usługę zamiast robić samemu."
      },
      {
        id: "lassen_3",
        question: "_____ uns gehen - es ist schon sehr spät am Abend!",
        translation: "(Chodźmy - jest już bardzo późno wieczorem!)",
        options: ["Lass", "Lässt", "Lasse", "Lasst"],
        correct: "Lass",
        explanation: "'Lass uns gehen' to zachęta do wspólnego działania! Tryb rozkazujący nieformalny - propozycja wyjścia. To propozycja - pora iść. Czasownik 'lassen' w znaczeniu 'pozwól' w trybie rozkazującym: 'lass uns' + bezokolicznik = chodźmy. To nie konstrukcja kazuatywna ale forma pozwolenia lub propozycji."
      },
      {
        id: "lassen_4",
        question: "Der Chef _____ die Mitarbeiter früher nach Hause gehen heute.",
        translation: "(Szef pozwala pracownikom wcześniej iść do domu dzisiaj)",
        options: ["lässt", "lass", "lasse", "lasst"],
        correct: "lässt",
        explanation: "'Lässt gehen' to udzielone pozwolenie! Szef zezwala - zwalnia pracowników. To uprzejmość w pracy - wczesne zakończenie. Czasownik 'lassen' w znaczeniu 'pozwalać' - szef daje pozwolenie na działanie. To nie konstrukcja kazuatywna (zlecanie) ale pozwolenie (zezwalanie na zrobienie)."
      },
      {
        id: "lassen_5",
        question: "Ich habe _____ gestern ein neues Kleid machen lassen beim Schneider.",
        translation: "(Kazałam wczoraj uszyć sobie nową sukienkę u krawca)",
        options: ["mir", "mich", "sich", "mein"],
        correct: "mir",
        explanation: "'Mir machen lassen' to kazuatywność w Perfekt! Zleciłam uszycie sukienki dla siebie. To o krawiectwie - ubranie szyte na miarę. Perfekt: 'habe' + zaimek zwrotny w celowniku + obiekt + bezokolicznik + 'lassen' (bezokolicznik!). Konstrukcja podwójnego bezokolicznika nawet w kazuatywności."
      },
      {
        id: "lassen_6",
        question: "_____ Sie mich bitte ausreden - ich bin noch nicht fertig!",
        translation: "(Proszę pozwólcie mi dokończyć - jeszcze nie skończyłem!)",
        options: ["Lassen", "Lass", "Lässt", "Lasst"],
        correct: "Lassen",
        explanation: "'Lassen Sie' to formalny tryb rozkazujący! Uprzejma prośba - pozwól mi skończyć. To o przerywaniu - prośba o cierpliwość. Formalny tryb rozkazujący: bezokolicznik + 'Sie' + obiekt + bezokolicznik. Prośba w kontekście profesjonalnym lub uprzejmym."
      },
      {
        id: "lassen_7",
        question: "Er lässt _____ jeden Morgen von seinem Fahrer zur Arbeit fahren.",
        translation: "(Każdego ranka jest zawożony przez swojego kierowcę do pracy)",
        options: ["sich", "ihm", "ihn", "seiner"],
        correct: "sich",
        explanation: "'Lässt sich fahren' to zwrotna konstrukcja kazuatywna! Zleca wożenie siebie - odbiera usługę. To luksus - usługa szofera. Czasownik 'lassen' + zaimek zwrotny w bierniku 'sich' + bezokolicznik = zlecać zrobienie czegoś sobie. Konstrukcja zbliżona do strony biernej - korzystanie z usługi."
      },
      {
        id: "lassen_8",
        question: "Wir haben das Haus renovieren _____ letztes Jahr komplett.",
        translation: "(Zleciliśmy remont domu w zeszłym roku całkowicie)",
        options: ["lassen", "gelassen", "ließen", "zu lassen"],
        correct: "lassen",
        explanation: "'Lassen' jako bezokolicznik w Perfekt kazuatywnym! Konstrukcja 'haben renovieren lassen' - zlecona praca. To remont domu - zatrudnienie wykonawców. Perfekt kazuatywny: haben + bezokolicznik czasownika + bezokolicznik 'lassen'. Nie 'gelassen' - stosuje się reguła podwójnego bezokolicznika."
      },
      {
        id: "lassen_9",
        question: "_____ doch die Tür offen - es ist so warm hier drinnen!",
        translation: "(Zostaw drzwi otwarte - jest tak ciepło tu w środku!)",
        options: ["Lass", "Lässt", "Lasse", "Lasst"],
        correct: "Lass",
        explanation: "'Lass offen' to rozkazujący kazuatywny! Zostaw to (nie zmieniaj stanu) - utrzymywanie warunków. To o wentylacji - trzymanie drzwi otwartych. Czasownik 'lassen' + przymiotnik oznacza pozostawienie w stanie - 'lass offen' (zostaw otwarte). Utrzymywanie status quo."
      },
      {
        id: "lassen_10",
        question: "Sie lässt _____ jeden Monat die Nägel machen im Salon schön.",
        translation: "(Robi sobie co miesiąc paznokcie w salonie pięknie)",
        options: ["sich", "ihr", "sie", "ihrer"],
        correct: "sich",
        explanation: "'Sich die Nägel machen' to usługa kosmetyczna! Zlecanie robienia paznokci - zabieg salonowy. To pielęgnacja - regularna konserwacja. Czasownik 'lassen' + zaimek zwrotny w celowniku + część ciała + bezokolicznik. Rutyna pielęgnacyjna ze zaimkiem zwrotnym pokazującym że dla siebie."
      },
      {
        id: "lassen_11",
        question: "Ihr müsst uns bitte in Ruhe arbeiten _____ konzentriert!",
        translation: "(Musicie proszę pozwolić nam pracować w spokoju skoncentrowanie!)",
        options: ["lassen", "gelassen", "lasst", "zu lassen"],
        correct: "lassen",
        explanation: "Bezokolicznik 'lassen' po czasowniku modalnym! Konstrukcja 'müsst lassen' - obowiązek pozwolenia. To prośba o spokój - żądanie nie przeszkadzania. Modalny + 'lassen' + obiekt + bezokolicznik. Domaganie się pozwolenia na nieprzerwana pracę."
      },
      {
        id: "lassen_12",
        question: "Der Mechaniker hat das Auto stehen _____ - es ist nicht reparierbar.",
        translation: "(Mechanik zostawił samochód stojący - nie da się go naprawić)",
        options: ["lassen", "gelassen", "ließ", "zu lassen"],
        correct: "lassen",
        explanation: "'Stehen lassen' w Perfekt! Zostawił stojący - nie naprawił. To zła wiadomość - nie do naprawy. Perfekt: 'hat stehen lassen' (podwójny bezokolicznik). Użycie 'gelassen' byłoby błędne - stosuje się reguła podwójnego bezokolicznika."
      },
      {
        id: "lassen_13",
        question: "_____ das Kind doch spielen - es hat Spaß dabei!",
        translation: "(Pozwól dziecku się bawić - ma z tego przyjemność!)",
        options: ["Lass", "Lässt", "Lasse", "Lasst"],
        correct: "Lass",
        explanation: "'Lass spielen' to pozwolenie! Pozwól dziecku się bawić - nie powstrzymuj. To filozofia rodzicielstwa - zezwalanie na zabawę. Tryb rozkazujący 'lassen' dla dawania swobody - 'lass' + obiekt + bezokolicznik. Zachęcanie do naturalnego zachowania."
      },
      {
        id: "lassen_14",
        question: "Sie wird sich ein neues Kleid nähen _____ für die Hochzeit bald.",
        translation: "(Każe sobie uszyć nową sukienkę na ślub wkrótce)",
        options: ["lassen", "gelassen", "lässt", "zu lassen"],
        correct: "lassen",
        explanation: "'Wird lassen' to przyszła kazuatywność! Zleciła uszycie sukienki - przyszła usługa. To przygotowania ślubne - ubranie szyte na miarę. Przyszła kazuatywność: 'wird' + zaimek zwrotny + obiekt + bezokolicznik + 'lassen'. Planowanie zlеconej pracy."
      },
      {
        id: "lassen_15",
        question: "Ich lasse mein Fahrrad immer vor dem Haus stehen über Nacht.",
        translation: "(Zostawiam mój rower zawsze przed domem stojący przez noc)",
        options: ["stehen", "gestanden", "steht", "zu stehen"],
        correct: "stehen",
        explanation: "'Stehen lassen' to pozostawianie na miejscu! Nie przesuwanie go - utrzymywanie lokalizacji. To zwyczaj parkowania - umiejscowienie roweru. Czasownik 'lassen' + obiekt + bezokolicznik pozycji (stehen) = zostawić w miejscu. Zwyczajowe pozostawianie gdzie stoi."
      }
    ]
  }
};

export default part9Categories;
