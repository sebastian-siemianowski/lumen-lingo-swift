
/**
 * POLISH → GERMAN GRAMMAR - PART 15
 * 3 categories, 15 questions each - Ultimate completion
 */

import { Award, Heart, Star } from "lucide-react";

export const part15Categories = {
  extended_participial_attributes: {
    name: "Rozbudowane atrybuty imiesłowowe",
    description: "Złożone konstrukcje imiesłowowe przed rzeczownikami",
    icon: Award,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "ext_part_1",
        question: "Der von meinem Vater _____ Kuchen smakuje wyśmienicie!",
        translation: "(Ciasto upieczone przez mojego ojca smakuje wyśmienicie!)",
        options: ["gebackene", "backende", "gebacken", "backen"],
        correct: "gebackene",
        explanation: "Rozszerzona fraza imiesłowowa! Konstrukcja 'von meinem Vater gebackene' - sprawca plus imiesłów plus końcówka przed rzeczownikiem. To o gotowaniu - domowe ciasto. Rozszerzona atrybucja: fraza przyimkowa (von Vater) plus imiesłów przeszły (gebackene) plus końcówka przymiotnikowa. Całość modyfikuje 'Kuchen' - kompresja zdania względnego."
      },
      {
        id: "ext_part_2",
        question: "Die in der Zeitung _____ Nachricht była bardzo szokująca!",
        translation: "(Wiadomość opublikowana w gazecie była bardzo szokująca!)",
        options: ["veröffentlichte", "veröffentlichende", "veröffentlicht", "veröffentlichen"],
        correct: "veröffentlichte",
        explanation: "Lokalizacja w rozszerzonej frazie! Konstrukcja 'in der Zeitung' (gdzie) plus 'veröffentlichte' (opublikowana) plus końcówka. To media - źródło wiadomości. Specyfikacja miejsca plus imiesłów tworzy złożony atrybut. Pokazuje GDZIE opublikowane jako część jednego modyfikatora."
      },
      {
        id: "ext_part_3",
        question: "Der seit Jahren hier _____ Professor jest bardzo popularny.",
        translation: "(Profesor wykładający tu od lat jest bardzo popularny)",
        options: ["unterrichtende", "unterrichtete", "unterrichtet", "unterrichten"],
        correct: "unterrichtende",
        explanation: "Czas trwania w imiesłowie teraźniejszym! Konstrukcja 'seit Jahren hier' (jak długo i gdzie) plus 'unterrichtende' (wykładający). To o reputacji - doświadczony nauczyciel. Rozszerzona imiesłów teraźniejszy pokazujący trwającą długoterminową aktywność. Czas plus miejsce plus akcja skompresowane przed rzeczownikiem."
      },
      {
        id: "ext_part_4",
        question: "Das gestern im Fernsehen _____ Interview było ciekawe.",
        translation: "(Wywiad pokazany wczoraj w telewizji był ciekawy)",
        options: ["gezeigte", "zeigende", "gezeigt", "zeigen"],
        correct: "gezeigte",
        explanation: "Czas i miejsce przed imiesłowem! Konstrukcja 'gestern' (kiedy) plus 'im Fernsehen' (gdzie) plus 'gezeigte' (pokazany). To informacja o transmisji - identyfikacja mediów. Wielokrotne modyfikatory (czas plus miejsce) plus imiesłów równa się bardzo rozszerzona atrybucja. Kompresowanie dużo informacji przed rzeczownikiem."
      },
      {
        id: "ext_part_5",
        question: "Die von allen _____ Entscheidung była słuszna na koniec.",
        translation: "(Decyzja zaakceptowana przez wszystkich była słuszna na koniec)",
        options: ["akzeptierte", "akzeptierende", "akzeptiert", "akzeptieren"],
        correct: "akzeptierte",
        explanation: "Konsensus w imiesłowie! Konstrukcja 'von allen' (przez kogo - wszystkich) plus 'akzeptierte' (zaakceptowana). To walidacja - zgoda grupowa. Fraza sprawcy (von allen) plus imiesłów pokazuje KTO zaakceptował. Uniwersalne uznanie osadzone w atrybucie."
      },
      {
        id: "ext_part_6",
        question: "Der mit großer Sorgfalt _____ Bericht jest bardzo szczegółowy.",
        translation: "(Raport przygotowany z wielką starannością jest bardzo szczegółowy)",
        options: ["vorbereitete", "vorbereitende", "vorbereitet", "vorbereiten"],
        correct: "vorbereitete",
        explanation: "Specyfikacja sposobu! Konstrukcja 'mit großer Sorgfalt' (JAK - starannie) plus 'vorbereitete' (przygotowany). To jakość - dokładność. Fraza metody/sposobu plus imiesłów pokazuje jakość wykonania. Sposób przygotowania osadzony jako informacja atrybutywna."
      },
      {
        id: "ext_part_7",
        question: "Die aus Italien _____ Waren są wysokiej jakości.",
        translation: "(Towary importowane z Włoch są wysokiej jakości)",
        options: ["importierten", "importierenden", "importiert", "importieren"],
        correct: "importierten",
        explanation: "Specyfikacja pochodzenia! Konstrukcja 'aus Italien' (skąd) plus 'importierten' (importowane) mnoga. To handel - źródło produktu. Geograficzne pochodzenie plus imiesłów mnoga (końcówka -en). Informacja o źródle skompresowana w atrybut."
      },
      {
        id: "ext_part_8",
        question: "Der vor einer Woche _____ Brief jeszcze nie przybył.",
        translation: "(List wysłany tydzień temu jeszcze nie przybył)",
        options: ["geschickte", "schickende", "geschickt", "schicken"],
        correct: "geschickte",
        explanation: "Specyfikacja czasowa! Konstrukcja 'vor einer Woche' (kiedy) plus 'geschickte' (wysłany). To o dostawie - śledzenie poczty. Fraza czasowa plus imiesłów tworzy datowany atrybut. Kiedy wysłane osadzone pokazujące oczekiwany czas."
      },
      {
        id: "ext_part_9",
        question: "Die im Krankenhaus _____ Ärzte są bardzo doświadczeni.",
        translation: "(Lekarze pracujący w szpitalu są bardzo doświadczeni)",
        options: ["arbeitenden", "gearbeiteten", "gearbeitet", "arbeiten"],
        correct: "arbeitenden",
        explanation: "Lokalizacja plus imiesłów teraźniejszny! Konstrukcja 'im Krankenhaus' (gdzie) plus 'arbeitenden' (pracujący) mnoga. To o zawodzie - specyfikacja miejsca pracy. Miejsce plus imiesłów teraźniejszny mnoga (końcówka -en). Aktywne trwające zatrudnienie w konkretnym obiekcie."
      },
      {
        id: "ext_part_10",
        question: "Das mit viel Liebe _____ Essen smakuje zawsze najlepiej!",
        translation: "(Jedzenie przygotowane z dużą miłością smakuje zawsze najlepiej!)",
        options: ["gekochte", "kochende", "gekocht", "kochen"],
        correct: "gekochte",
        explanation: "Atrybut emocji/sposobu! Konstrukcja 'mit viel Liebe' (JAK - z miłością) plus 'gekochte' (ugotowane). To filozofia kulinarna - składnik troski. Emocjonalny sposób plus imiesłów pokazuje jakość przygotowania. Miłość jako składnik gotowania skonceptualizowana."
      },
      {
        id: "ext_part_11",
        question: "Das für Kinder _____ Film jest bardzo śmieszny i kolorowy.",
        translation: "(Film zrobiony dla dzieci jest bardzo śmieszny i kolorowy)",
        options: ["gemachte", "machende", "gemacht", "machen"],
        correct: "gemachte",
        explanation: "Specyfikacja docelowej publiczności! Konstrukcja 'für Kinder' (dla kogo) plus 'gemachte' (zrobiony). To kategoryzacja - odpowiedniość wiekowa. Fraza celu plus imiesłów pokazuje zamierzoną publiczność. Cel demograficzny osadzony."
      },
      {
        id: "ext_part_12",
        question: "Die vor hundert Jahren _____ Kirche jest pomnikiem.",
        translation: "(Kościół zbudowany sto lat temu jest pomnikiem)",
        options: ["erbaute", "erbauende", "erbaut", "erbauen"],
        correct: "erbaute",
        explanation: "Historyczny czas! Konstrukcja 'vor hundert Jahren' (kiedy zbudowany) plus 'erbaute' (zbudowany). To dziedzictwo - stara architektura. Znaczący dystans czasowy plus imiesłów tworzy historyczny atrybut. Informacja o wieku skompresowana pokazująca starożytność budynku."
      },
      {
        id: "ext_part_13",
        question: "Das von vielen Menschen _____ Lied jest bardzo popularne.",
        translation: "(Piosenka lubiana przez wiele osób jest bardzo popularna)",
        options: ["geliebte", "liebende", "geliebt", "lieben"],
        correct: "geliebte",
        explanation: "Powszechny zachwyt! Konstrukcja 'von vielen Menschen' (przez kogo) plus 'geliebte' (lubiana). To muzyka - szeroka aprecjacja. Duża grupa plus imiesłów pokazuje szeroką popularność. Popularność osadzona przez frazę sprawczą."
      },
      {
        id: "ext_part_14",
        question: "Die auf dem Tisch _____ Bücher należą wszystkie do mnie.",
        translation: "(Książki leżące na stole należą wszystkie do mnie)",
        options: ["liegenden", "gelegenen", "gelegen", "liegen"],
        correct: "liegenden",
        explanation: "Specyfikacja pozycji! Konstrukcja 'auf dem Tisch' (gdzie) plus 'liegenden' (leżące) mnoga. To własność - identyfikacja lokalizacji. Miejsce plus imiesłów teraźniejszny mnoga pokazuje obecną pozycję. Aktywny stan (leżenie) w lokalizacji."
      },
      {
        id: "ext_part_15",
        question: "Der ohne Erlaubnis _____ Bereich jest surowo zabroniony!",
        translation: "(Obszar wchodzony bez pozwolenia jest surowo zabroniony!)",
        options: ["betretene", "betretende", "betreten", "betretet"],
        correct: "betretene",
        explanation: "Specyfikacja zakazu! Konstrukcja 'ohne Erlaubnis' (warunek) plus 'betretene' (wchodzony). To ostrzeżenie - zasady dostępu. Negatywny warunek plus imiesłów tworzy ograniczony atrybut. Nieautoryzowane wejście skonceptualizowane."
      }
    ]
  },

  fixed_verbal_phrases: {
    name: "Stałe frazy czasownikowe",
    description: "In Frage kommen, in Betracht ziehen, zur Verfügung - idiomy",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "advanced",
    questions: [
      {
        id: "fix_verb_1",
        question: "Das kommt für mich nie w _____! Absolutnie tego nie mogę zaakceptować!",
        translation: "(To dla mnie nie wchodzi w rachubę! Absolutnie nie mogę tego zaakceptować!)",
        options: ["Frage", "Betracht", "Rede", "Sicht"],
        correct: "Frage",
        explanation: "Idiom możliwości 'in Frage kommen'! Nie w pytaniu - odrzucenie opcji. To stanowcza odmowa - eliminowanie możliwości. Utrwalona fraza 'in Frage kommen' dla rozważania - negatywna oznacza absolutnie nie. Rzeczownik 'Frage' (pytanie) tu abstrakcyjnie - strefa rozważania."
      },
      {
        id: "fix_verb_2",
        question: "Wir müssen alle opcje w _____ wziąć starannie.",
        translation: "(Musimy wziąć pod uwagę wszystkie opcje starannie)",
        options: ["Betracht", "Frage", "Rede", "Acht"],
        correct: "Betracht",
        explanation: "Rozważanie 'in Betracht ziehen'! Branie pod uwagę - ocenianie. To podejmowanie decyzji - kompleksowa analiza. Formalny idiom 'in Betracht ziehen' dla rozważania. Rzeczownik 'Betracht' (rozważanie) plus 'ziehen' (ciągnąć/brać) metaforyczne."
      },
      {
        id: "fix_verb_3",
        question: "Ich stelle deine Aussage w _____ - to nie brzmi prawdziwie!",
        translation: "(Kwestionuję twoje stwierdzenie - to nie brzmi prawdziwie!)",
        options: ["Frage", "Betracht", "Zweifel", "Rede"],
        correct: "Frage",
        explanation: "Kwestionowanie 'in Frage stellen'! Wątpienie w prawdziwość - kwestionowanie twierdzenia. To sceptycyzm - dyskutowanie. Idiom 'etwas in Frage stellen' dla kwestionowania prawdy. Inne użycie od 'in Frage kommen' - tutaj aktywne wątpienie."
      },
      {
        id: "fix_verb_4",
        question: "Der Raum steht uns cały dzień do _____ tutaj.",
        translation: "(Pokój jest dla nas dostępny cały dzień tutaj)",
        options: ["Verfügung", "Disposition", "Nutzung", "Benutzung"],
        correct: "Verfügung",
        explanation: "Idiom dostępności 'zur Verfügung stehen'! Bycie dostępnym - dostęp do zasobów. To o dostępności - dostępność pokoju. Standardowa formuła 'zur Verfügung stehen/stellen'. Rzeczownik 'Verfügung' (dyspozycja/dostępność) formalny termin."
      },
      {
        id: "fix_verb_5",
        question: "Das bringt nas nie _____ - tylko marnujemy czas!",
        translation: "(To nas nie prowadzi do przodu - tylko marnujemy czas!)",
        options: ["weiter", "voran", "vorwärts", "fort"],
        correct: "weiter",
        explanation: "Idiom postępu 'weiterbringen'! Przesuwanie do przodu - rozwój. To frustracja - nieproduktywna aktywność. Forma 'weiterbringen' (lub 'voranbringen') dla robienia postępu. Słowo 'weiter' pokazuje ruch do przodu - brak oznacza stagnację."
      },
      {
        id: "fix_verb_6",
        question: "Ich nehme _____ na ofertę - brzmi bardzo dobrze!",
        translation: "(Przyjmuję twoją ofertę - brzmi bardzo dobrze!)",
        options: ["an", "auf", "ein", "zu"],
        correct: "an",
        explanation: "Akceptowanie 'annehmen'! Czasownik rozdzielny - 'nehme...an' akceptacja. To zgoda - mówienie tak. Utrwalona fraza 'ein Angebot annehmen' dla akceptowania propozycji. Partykuła 'an' się oddziela - małe litery jako część czasownika."
      },
      {
        id: "fix_verb_7",
        question: "Diese Methode kommt do _____ przy trudnych przypadkach często.",
        translation: "(Ta metoda jest stosowana przy trudnych przypadkach często)",
        options: ["Einsatz", "Gebrauch", "Verwendung", "Nutzung"],
        correct: "Einsatz",
        explanation: "Idiom wdrożenia 'zum Einsatz kommen'! Bycie używanym/stosowanym - aktywacja. To praktyczne zastosowanie - używanie metody. Techniczna/formalna fraza 'zum Einsatz kommen'. Rzeczownik 'Einsatz' (wdrożenie/użycie) specjalistyczny termin."
      },
      {
        id: "fix_verb_8",
        question: "Das steht poza _____ - wszyscy się co do tego zgadzamy!",
        translation: "(To nie podlega dyskusji - wszyscy się co do tego zgadzamy!)",
        options: ["Frage", "Diskussion", "Debatte", "Zweifel"],
        correct: "Frage",
        explanation: "Pewność 'außer Frage stehen'! Poza pytaniem - niewątpliwe. To konsensus - uniwersalna zgoda. Idiom 'außer Frage stehen' dla niepodważalnych faktów. Rzeczownik 'Frage' (pytanie) metaforycznie - poza strefą wątpliwości."
      },
      {
        id: "fix_verb_9",
        question: "Ich bringe projekt do _____ do końca tygodnia na pewno.",
        translation: "(Doprowadzę projekt do końca do końca tygodnia na pewno)",
        options: ["Ende", "Abschluss", "Schluss", "Fertig"],
        correct: "Ende",
        explanation: "Idiom ukończenia 'zu Ende bringen'! Doprowadzanie do końca - kończenie. To zobowiązanie - obietnica ukończenia. Utrwalona fraza 'zu Ende bringen' dla ukończenia. Rzeczownik 'Ende' (koniec) metafora celu."
      },
      {
        id: "fix_verb_10",
        question: "Das nimmt dużo czasu w _____ - potrzebujemy cierpliwości!",
        translation: "(To zabiera dużo czasu - potrzebujemy cierpliwości!)",
        options: ["Anspruch", "Verwendung", "Gebrauch", "Besitz"],
        correct: "Anspruch",
        explanation: "Konsumowanie zasobów 'in Anspruch nehmen'! Zajmowanie/żądanie - używanie zasobów. To o wymaganiach - czasochłonne. Idiom 'in Anspruch nehmen' dla wymagania zasobów. Rzeczownik 'Anspruch' (roszczenie/żądanie) pokazujący konsumpcję."
      },
      {
        id: "fix_verb_11",
        question: "Wir setzen całą nadzieję w _____ na tym nowym leku.",
        translation: "(Pokładamy całą nadzieję w tym nowym leku)",
        options: ["es", "ihm", "ihn", "sein"],
        correct: "es",
        explanation: "Pokładanie zaufania 'setzen...in'! Umieszczanie nadziei W czymś. To medyczna nadzieja - wiara w leczenie. Idiom 'Hoffnung in etwas setzen' - 'es' odnosi się z powrotem do leku. Metafora umieszczania zaufania."
      },
      {
        id: "fix_verb_12",
        question: "Das Projekt steht kurz przed _____ w końcu po długiej pracy.",
        translation: "(Projekt jest tuż przed zakończeniem w końcu po długiej pracy)",
        options: ["Abschluss", "Ende", "Schluss", "Beendigung"],
        correct: "Abschluss",
        explanation: "Zbliżające się ukończenie 'vor dem Abschluss stehen'! Bliskie ukończenie - prawie zrobione. To ulga - zbliżający się koniec. Idiom postępu 'vor dem Abschluss stehen'. Rzeczownik 'Abschluss' (ukończenie/zakończenie) formalny termin."
      },
      {
        id: "fix_verb_13",
        question: "Sie legt wielką _____ na punktualność przy pracy zawsze.",
        translation: "(Przywiązuje dużą wagę do punktualności w pracy zawsze)",
        options: ["Wert", "Bedeutung", "Gewicht", "Wichtigkeit"],
        correct: "Wert",
        explanation: "Priorytetyzowanie 'Wert legen auf'! Umieszczanie wartości NA - podkreślanie ważności. To standardy - ceniona punktualność. Idiom 'Wert legen auf' plus biernik. Rzeczownik 'Wert' (wartość/waga) metafora dla priorytetów."
      },
      {
        id: "fix_verb_14",
        question: "Das fällt mi _____ w tej sytuacji - to niemożliwe!",
        translation: "(Ciężko mi w tej sytuacji - to niemożliwe!)",
        options: ["schwer", "hart", "stark", "fest"],
        correct: "schwer",
        explanation: "Idiom trudności 'schwer fallen'! Znalezienie trudności - zmaganie się. To o trudności - wyrażanie wyzwania. Utrwalona konstrukcja 'jemandem schwer fallen'. Przymiotnik 'schwer' (ciężki) metafora dla trudności - koncept ciężaru."
      },
      {
        id: "fix_verb_15",
        question: "Ich komme od razu do _____ - zacznijmy z tematem!",
        translation: "(Przejdę od razu do rzeczy - zacznijmy z tematem!)",
        options: ["Sache", "Punkt", "Thema", "Frage"],
        correct: "Sache",
        explanation: "Przechodzenie do sedna 'zur Sache kommen'! Koniec opóźnień - adresowanie głównej kwestii. To bezpośredniość - obcinanie wstępu. Idiom 'zur Sache kommen' dla skupienia się. Rzeczownik 'Sache' (rzecz/sprawa) reprezentujący główny punkt."
      }
    ]
  },

  subjunctive_reported_commands: {
    name: "Tryb łączący - polecenia zależne",
    description: "Er sagte, ich solle..., sie möge... - mowa zależna poleceń",
    icon: Star,
    color: "from-indigo-500 to-violet-600",
    level: "advanced",
    questions: [
      {
        id: "subj_cmd_1",
        question: "Er sagte mir, ich _____ wcześniej przyjść na spotkanie.",
        translation: "(Powiedział mi żebym przyszedł wcześniej na spotkanie)",
        options: ["solle", "soll", "sollte", "sollen"],
        correct: "solle",
        explanation: "Polecenie Konjunktiv I 'solle'! Relacjonowana instrukcja - 'soll' przekształca się w 'solle'. To o poleceniu - dyrektywa szefa. Konjunktiv I dla relacjonowanych poleceń: 'er sagte, ich solle'. Formalne raportowanie instrukcji używające trybu łączącego."
      },
      {
        id: "subj_cmd_2",
        question: "Sie bat mnie, ich _____ jej przy pracy pomóc proszę.",
        translation: "(Poprosiła mnie żebym jej pomógł przy pracy proszę)",
        options: ["möge", "mag", "möchte", "mögen"],
        correct: "möge",
        explanation: "Uprzejma prośba Konjunktiv I 'möge'! Czasownik 'mögen' przekształca się w 'möge' bardzo formalnie. To prośba - kurtuazyjna prośba. Forma 'möge' używana w bardzo formalnych relacjonowanych prośbach - archaiczne ale poprawne. Literackie/formalne raportowanie uprzejmych próśb."
      },
      {
        id: "subj_cmd_3",
        question: "Der Arzt zalecił, ich _____ więcej sportu uprawiać regularnie.",
        translation: "(Lekarz zalecił żebym uprawiał więcej sportu regularnie)",
        options: ["solle", "soll", "sollte", "sollen"],
        correct: "solle",
        explanation: "Rekomendacja medyczna 'solle'! Rada lekarza raportowana formalnie. To dyrektywa zdrowotna - profesjonalne wskazówki. Rekomendacje medyczne w Konjunktiv I: 'solle' pokazuje profesjonalną radę. Formalne raportowanie medyczne."
      },
      {
        id: "subj_cmd_4",
        question: "Sie zaproponowała, wir _____ wcześniej z projektem zacząć.",
        translation: "(Zaproponowała żebyśmy wcześniej zaczęli z projektem)",
        options: ["sollten", "sollen", "sollte", "solle"],
        correct: "sollten",
        explanation: "Mnogi Konjunktiv 'sollten'! Forma 'wir sollten' (powinniśmy) relacjonowana sugestia. To propozycja - grupowa rekomendacja. Mnogi Konjunktiv I często identyczny do Konjunktiv II - 'sollten' dla 'my'. Grupowa dyrektywa raportowana."
      },
      {
        id: "subj_cmd_5",
        question: "Er rozkazał, sie _____ natychmiast pomieszczenie opuścić wszyscy!",
        translation: "(Rozkazał żeby natychmiast opuścili pomieszczenie wszyscy!)",
        options: ["sollten", "sollen", "sollte", "solle"],
        correct: "sollten",
        explanation: "Autorytatywne polecenie 'sollten'! Rozkazywanie ewakuacji - silna dyrektywa. To egzekwowanie władzy - żądanie podporządkowania. Polecenia raportowane w Konjunktiv: 'sie sollten'. Rozkazy osoby autorytarnej formalnie przekazane."
      },
      {
        id: "subj_cmd_6",
        question: "Sie poradziła mi, ich _____ ostrożniejszy być w przyszłości.",
        translation: "(Poradziła mi żebym był ostrożniejszy w przyszłości)",
        options: ["solle", "soll", "sollte", "sollen"],
        correct: "solle",
        explanation: "Raportowanie rady 'solle'! Dana rada - rekomendacja. To wskazówka - rada ostrożności. Rada w Konjunktiv I: 'ich solle' formalne raportowanie. Osobista rada formalnie przekazana."
      },
      {
        id: "subj_cmd_7",
        question: "Der Lehrer zażądał, wir _____ pracę domową zrobić.",
        translation: "(Nauczyciel zażądał żebyśmy zrobili pracę domową)",
        options: ["sollten", "sollen", "sollte", "solle"],
        correct: "sollten",
        explanation: "Wymagane podporządkowanie 'sollten'! Wymóg nauczyciela - obowiązek ucznia. To edukacja - żądanie pracy domowej. Żądania raportowane: 'wir sollten'. Osoba autorytatywna wymagająca akcji."
      },
      {
        id: "subj_cmd_8",
        question: "Er życzył sobie, ich _____ częściej go odwiedzać bei ihm.",
        translation: "(Życzył sobie żebym częściej go odwiedzał)",
        options: ["möge", "mag", "möchte", "mögen"],
        correct: "möge",
        explanation: "Raportowanie życzenia 'möge'! Formalne pragnienie - nadzieja na wizyty. To relacja - chęć więcej kontaktu. Życzenia w bardzo formalnym Konjunktiv: 'ich möge'. Archaiczne ale gramatycznie poprawne."
      },
      {
        id: "subj_cmd_9",
        question: "Sie zażądała, er _____ sich przeprosić przy wszystkich!",
        translation: "(Zażądała żeby przeprosił wszystkich!)",
        options: ["solle", "soll", "sollte", "sollen"],
        correct: "solle",
        explanation: "Żądanie przeprosin 'solle'! Wymaganie akcji - naleganie. To rozwiązywanie konfliktu - żądanie skruchy. Żądania w Konjunktiv: 'er solle'. Formalne raportowanie wymogu."
      },
      {
        id: "subj_cmd_10",
        question: "Der Chef zarządził, alle _____ nadgodziny robić w tym tygodniu.",
        translation: "(Szef zarządził żeby wszyscy robili nadgodziny w tym tygodniu)",
        options: ["sollten", "sollen", "sollte", "solle"],
        correct: "sollten",
        explanation: "Rozkaz w miejscu pracy 'sollten'! Szef rozkazujący nadgodziny - obowiązek pracownika. To presja w pracy - obowiązkowe dodatkowe godziny. Mnogi rozkaz: 'alle sollten'. Dyrektywa zarządu raportowana."
      },
      {
        id: "subj_cmd_11",
        question: "Sie prosiła, ich _____ ciszej mówić w pokoju.",
        translation: "(Poprosiła żebym mówił ciszej w pokoju)",
        options: ["möge", "mag", "möchte", "mögen"],
        correct: "möge",
        explanation: "Uprzejma prośba 'möge'! Formalne pytanie - kurtuazyjne. To etykieta - skarga hałasowa. Bardzo formalne prośby: 'ich möge'. Literacki poziom uprzejmości."
      },
      {
        id: "subj_cmd_12",
        question: "Er uważał, wir _____ problem inaczej rozwiązać lepiej.",
        translation: "(Uważał że powinniśmy rozwiązać problem inaczej lepiej)",
        options: ["sollten", "sollen", "sollte", "solle"],
        correct: "sollten",
        explanation: "Opinia o podejściu 'sollten'! Sugerowanie alternatywnej metody - rada. To rozwiązywanie problemów - sugestia metodologiczna. Rekomendacje: 'wir sollten'. Przekazywanie sugerowanego podejścia."
      },
      {
        id: "subj_cmd_13",
        question: "Die Regeln besagen, man _____ tu nie palić wolno.",
        translation: "(Przepisy mówią że nie wolno tu palić)",
        options: ["dürfe", "darf", "dürfte", "dürfen"],
        correct: "dürfe",
        explanation: "Relacjonowany zakaz 'dürfe'! Zasady stwierdzające - nie wolno. To regulacje - zakaz palenia. Zasady w Konjunktiv I: 'man dürfe nicht'. Formalne raportowanie reguł."
      },
      {
        id: "subj_cmd_14",
        question: "Er obiecał, er _____ punktualnie przyjść na spotkanie jutro.",
        translation: "(Obiecał że przyjdzie punktualnie na spotkanie jutro)",
        options: ["werde", "wird", "würde", "werden"],
        correct: "werde",
        explanation: "Przyszła obietnica 'werde'! Zobowiązanie raportowane - 'wird' przekształca się w 'werde'. To zobowiązanie niezawodności - obietnica punktualności. Przyszłe zobowiązania Konjunktiv I: 'er werde'. Formalne raportowanie obietnicy."
      },
      {
        id: "subj_cmd_15",
        question: "Sie zaleciła mi, ich _____ do lekarza udać się z powodu kaszlu.",
        translation: "(Zaleciła mi żebym udał się do lekarza z powodu kaszlu)",
        options: ["solle", "soll", "sollte", "sollen"],
        correct: "solle",
        explanation: "Rekomendacja zdrowotna 'solle'! Rada medyczna - widzenie lekarza. To troska - sugerowanie konsultacji. Rekomendacje Konjunktiv: 'ich solle'. Formalne przekazywanie sugerowanej akcji."
      }
    ]
  },

  advanced_reflexive_patterns: {
    name: "Zaawansowane wzory zwrotne",
    description: "Sich lassen, es sich leisten, sich etwas vorstellen",
    icon: Star,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    questions: [
      {
        id: "adv_refl_1",
        question: "Das lässt _____ łatwo naprawić - w ogóle nie ma problemu!",
        translation: "(To daje się łatwo naprawić - w ogóle nie ma problemu!)",
        options: ["sich", "es", "man", "ihm"],
        correct: "sich",
        explanation: "Możliwość pasywopodobna 'sich lassen'! Można zrobić - wykonalność. To o wykonalności - łatwa naprawa. Konstrukcja 'sich lassen' plus bezokolicznik pokazuje coś jest wykonalne. Alternatywa do strony biernej - podkreślanie możliwości wykonania."
      },
      {
        id: "adv_refl_2",
        question: "Ich kann _____ _____ nie pozwolić, nowego samochodu kupić.",
        translation: "(Nie mogę sobie pozwolić na kupno nowego samochodu)",
        options: ["es mir nicht", "mir nie es", "mich nicht", "nicht mir"],
        correct: "es mir nicht",
        explanation: "Dostępność finansowa 'sich etwas leisten'! Konstrukcja 'es mir leisten' - móc sobie pozwolić. To finanse - zdolność. Idiom 'sich etwas leisten können' - 'es' obiekt plus zwrotny celownik 'mir'. Negatyw pokazuje finansowe ograniczenie."
      },
      {
        id: "adv_refl_3",
        question: "Kannst du _____ _____ wyobrazić, jak życie tam jest?",
        translation: "(Czy możesz sobie wyobrazić jak życie tam jest?)",
        options: ["dir das", "dich das", "das dir", "dich es"],
        correct: "dir das",
        explanation: "Wyobrażanie 'sich etwas vorstellen'! Zwrotny celownik plus obiekt. To wizualizacja - mentalny obraz. Wzór 'sich etwas vorstellen': zwrotny celownik (dir) plus obiekt (das). Wyobraźnia wymaga obu elementów."
      },
      {
        id: "adv_refl_4",
        question: "Der Text lässt _____ trudno zrozumieć - jest skomplikowany!",
        translation: "(Tekst trudno się rozumie - jest skomplikowany!)",
        options: ["sich", "es", "man", "ihn"],
        correct: "sich",
        explanation: "Trudność 'sich schwer verstehen lassen'! Ciężko zrozumieć - wyzwanie komprehensji. To złożoność - trudny tekst. Konstrukcja 'sich lassen' plus przysłówek plus bezokolicznik pokazuje stopień wykonalności. Słowo 'schwer' pokazuje wysoki poziom trudności."
      },
      {
        id: "adv_refl_5",
        question: "Ich kann _____ _____ tego nie zapamiętać - zawsze zapominam!",
        translation: "(Nie mogę sobie tego zapamiętać - zawsze zapominam!)",
        options: ["es mir", "mir es", "mich es", "es mich"],
        correct: "es mir",
        explanation: "Zapamiętywanie 'sich etwas merken'! Zwrotny celownik plus obiekt zatrzymania. To zmaganie z pamięcią - porażka przypomnienia. Wzór 'sich etwas merken': 'es' (co) plus 'mir' (sobie). Czasownik zapamiętywania wymagający obu."
      },
      {
        id: "adv_refl_6",
        question: "Das Problem lässt _____ nie tak łatwo rozwiązać niestety.",
        translation: "(Problem nie daje się tak łatwo rozwiązać niestety)",
        options: ["sich", "es", "man", "ihm"],
        correct: "sich",
        explanation: "Niemożliwość 'sich nicht lösen lassen'! Nie może być łatwo rozwiązane - trudność. To o trudności - złożony problem. Negatyw 'sich lassen' pokazuje opór wobec rozwiązania. Problem okazuje się uparty."
      },
      {
        id: "adv_refl_7",
        question: "Er leistet _____ dużo, chociaż mało zarabia szczerze.",
        translation: "(Pozwala sobie na dużo, chociaż mało zarabia szczerze)",
        options: ["sich", "ihm", "ihn", "sein"],
        correct: "sich",
        explanation: "Wybory stylu życia 'sich viel leisten'! Pozwalanie sobie na dużo mimo dochodu. To paradoks wydatków - życie ponad stan. Czasownik 'sich leisten' bez 'es' możliwy - ogólne pozwalanie sobie. Zwrotny pokazujący samopobłażanie."
      },
      {
        id: "adv_refl_8",
        question: "Kannst du _____ _____ wyobrazić, że on to zrobił?",
        translation: "(Czy możesz sobie wyobrazić że on to zrobił?)",
        options: ["dir vorstellen", "dich vorstellen", "vorstellen dir", "dir denken"],
        correct: "dir vorstellen",
        explanation: "Czasownik 'sich vorstellen' plus zdanie podrzędne! Wyobrażanie scenariusza - mentalne ćwiczenie. To niedowierzanie - niedowierzanie. Forma 'dir vorstellen' (sobie wyobrazić) plus zdanie 'dass'. Zwrotny celownik plus bezokolicznik plus zdanie treściowe."
      },
      {
        id: "adv_refl_9",
        question: "Das Fenster lässt _____ nie otworzyć - jest zepsute!",
        translation: "(Okno nie daje się otworzyć - jest zepsute!)",
        options: ["sich", "es", "man", "ihm"],
        correct: "sich",
        explanation: "Awaria 'sich nicht öffnen lassen'! Nie otworzy się - zepsute. To problem - zaklinowane okno. Negatyw 'sich lassen' pokazuje niemożliwość. Mechanizm nie funkcjonuje - opór wobec akcji."
      },
      {
        id: "adv_refl_10",
        question: "Ich merke _____ wszystkie ważne terminy w moim kalendarzu.",
        translation: "(Notuję sobie wszystkie ważne terminy w moim kalendarzu)",
        options: ["mir", "mich", "es mir", "mir es"],
        correct: "mir",
        explanation: "Notowanie dla siebie 'mir merken'! Zwrotny celownik organizacji. To planowanie - używanie kalendarza. Czasownik 'sich merken' bez 'es' gdy obiekt następuje - 'mir' plus 'alle Termine'. Osobisty system notowania."
      },
      {
        id: "adv_refl_11",
        question: "Sie kann _____ _____ pozwolić, leniwym być czasami.",
        translation: "(Może sobie pozwolić na bycie leniwym czasami)",
        options: ["es sich", "sich es", "sich", "es"],
        correct: "es sich",
        explanation: "Pozwalanie sobie 'sich etwas erlauben'! Samopozwolenie - dawanie pozwolenia. To troska o siebie - okazjonalne lenistwo. Wzór 'sich etwas erlauben': 'es' (co) plus zwrotny 'sich'. Udzielanie sobie przywilejów."
      },
      {
        id: "adv_refl_12",
        question: "Der Motor lässt _____ łatwo uruchomić przy zimnej pogodzie.",
        translation: "(Silnik łatwo się uruchamia przy zimnej pogodzie)",
        options: ["sich", "es", "man", "ihn"],
        correct: "sich",
        explanation: "Łatwość 'sich leicht starten lassen'! Uruchamia się łatwo - dobra wydajność. To motoryzacja - zdolność przy zimnie. Konstrukcja 'sich lassen' plus 'leicht' pokazuje łatwą wykonalność. Pozytywna charakterystyka wydajności."
      },
      {
        id: "adv_refl_13",
        question: "Ich kann _____ _____ nie pozwolić, codziennie do restauracji chodzić.",
        translation: "(Nie mogę sobie pozwolić na codzienne chodzenie do restauracji)",
        options: ["es mir", "mir es", "mich", "mir"],
        correct: "es mir",
        explanation: "Limity finansowe 'es mir nicht leisten'! Nie stać - ograniczenie budżetowe. To ekonomia - restauracje kosztowne. Negatywna dostępność: 'es mir nicht leisten können'. Codzienne restauracje przekraczają budżet."
      },
      {
        id: "adv_refl_14",
        question: "Das lässt _____ dobrze z planem pogodzić bez problemu.",
        translation: "(To daje się dobrze pogodzić z planem bez problemu)",
        options: ["sich", "es", "man", "ihm"],
        correct: "sich",
        explanation: "Kompatybilność 'sich vereinbaren lassen'! Możliwe do pogodzenia - pasuje razem. To planowanie - zgodność harmonogramu. Konstrukcja 'sich lassen' pokazuje wykonalność łączenia. Harmoniczna integracja możliwa."
      },
      {
        id: "adv_refl_15",
        question: "Ich stelle _____ _____ wyobrażam, jak piękny urlop będzie!",
        translation: "(Wyobrażam sobie jak piękny będzie urlop!)",
        options: ["es mir", "mir es", "mich es", "mir"],
        correct: "es mir",
        explanation: "Żywa wyobraźnia 'sich etwas vorstellen'! Wyobrażanie wakacji - mentalny podgląd. To oczekiwanie - marzenie na jawie. Kolejność 'es mir vorstellen': obiekt plus zwrotny celownik plus bezokolicznik. Podekscytowana wizualizacja."
      }
    ]
  }
};

export default part15Categories;
