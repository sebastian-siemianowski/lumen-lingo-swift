/**
 * POLISH → GERMAN GRAMMAR - PART 6
 * 4 kategorie, 15 pytań każda - Poziom mistrzowski
 */

import { Package, Clock, TrendingUp, Map } from "lucide-react";

export const part6Categories = {
  compound_words: {
    name: "Wyrazy złożone i szyk wyrazów",
    description: "Hausaufgaben, Kindergarten, szyk w zdaniu",
    icon: Package,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_w_1",
        question: "Ich muss heute meine _____ für morgen machen bis spät.",
        translation: "(Muszę dzisiaj zrobić moją pracę domową na jutro do późna)",
        options: ["Hausaufgaben", "Aufgabenhaus", "Haus Aufgaben", "hausaufgaben"],
        correct: "Hausaufgaben",
        explanation: "Rzeczownik złożony 'Hausaufgaben'! Dwa słowa razem tworzą nowe znaczenie - praca DO domu. To o obowiązkach szkolnych. Niemiecki tworzy złożenia przez łączenie słów - ostatnie słowo określa rodzaj (Aufgaben to żeński mnogi). Złożenia pisane razem jako jedno słowo."
      },
      {
        id: "comp_w_2",
        question: "Der _____ beginnt um 8 Uhr morgens für alle kleinen Kinder.",
        translation: "(Przedszkole zaczyna się o 8 rano dla wszystkich małych dzieci)",
        options: ["Kindergarten", "Gartenkind", "Kinder Garten", "kindergarten"],
        correct: "Kindergarten",
        explanation: "Słowo złożone 'Kindergarten'! Połączenie 'Kinder' plus 'Garten' tworzy miejsce dla dzieci. To o instytucji - wczesna edukacja. Ostatnie słowo (Garten) określa rodzaj - męski. Niemieckie złożenia łączą się całkowicie - znaczenia kombinują dla konkretnej koncepcji. Rzeczownik główny określa rodzaj."
      },
      {
        id: "comp_w_3",
        question: "Ich habe gestern den ganzen Tag im _____ verbracht produktiv.",
        translation: "(Spędziłem wczoraj cały dzień w biurze produktywnie)",
        options: ["Arbeitszimmer", "Zimmerarbeit", "Arbeits Zimmer", "arbeitszimmer"],
        correct: "Arbeitszimmer",
        explanation: "Złożenie 'Arbeitszimmer' oznacza pokój DO pracy! Złożenie pokazuje cel - pokój roboczy. To o lokalizacji - biuro domowe. Łącznik -s- łączy słowa - 'Arbeits-zimmer'. Ostatnie słowo (Zimmer - nijaki) określa rodzaj. Element łączący dopełniacz powszechny."
      },
      {
        id: "comp_w_4",
        question: "Gestern habe ich ein interessantes Buch _____.",
        translation: "(Wczoraj przeczytałem interesującą książkę)",
        options: ["gelesen", "lesen", "lese", "las"],
        correct: "gelesen",
        explanation: "Imiesłów idzie przed 'haben' na końcu! Konstrukcja 'Buch gelesen' - obiekt przed imiesłowem. To o czytaniu - przeszłe ukończenie. Niemiecki szyk wyrazów: Czas - Podmiot - Obiekt - IMIESŁÓW - pomocniczy. Struktury Perfect utrzymują imiesłów przed końcową pozycją pomocniczego."
      },
      {
        id: "comp_w_5",
        question: "Meine _____ arbeitet als Ärztin im städtischen Krankenhaus seit Jahren.",
        translation: "(Moja siostra pracuje jako lekarka w miejskim szpitalu od lat)",
        options: ["Schwester", "schwester", "Geschwister", "schwestern"],
        correct: "Schwester",
        explanation: "Rzeczownik 'Schwester' oznacza siostra! Prosty rzeczownik ale wszystkie rzeczowniki kapitalizowane. To o rodzinie - zawód rodzeństwa. Wszystkie rzeczowniki w niemieckim ZAWSZE zaczynają się z wielkiej litery - fundamentalna reguła. Nie zależy od pozycji w zdaniu."
      },
      {
        id: "comp_w_6",
        question: "Der _____ fährt jeden Morgen pünktlich um 7 Uhr vom Bahnhof ab.",
        translation: "(Pociąg odjeżdża każdego ranka punktualnie o 7 z dworca)",
        options: ["Personenzug", "Zugperson", "Personen Zug", "personenzug"],
        correct: "Personenzug",
        explanation: "Złożenie 'Personenzug' oznacza pociąg DLA pasażerów! Złożenie specyfikujące typ - pociąg pasażerski. To o transporcie - kategoryzacja pociągu. Element łączący -en- łączy - 'Personen-zug'. Ostatni element (Zug - męski) określa rodzaj. Złożenie specyfikacji typu."
      },
      {
        id: "comp_w_7",
        question: "Morgen fahren wir mit dem Auto _____ _____.",
        translation: "(Jutro jedziemy samochodem do Berlina)",
        options: ["nach Berlin", "Berlin nach", "zu Berlin", "Berlin zu"],
        correct: "nach Berlin",
        explanation: "Konstrukcja 'nach Berlin' przyimek PRZED miasto! Kierunek dla miast lub krajów - ustalona kolejność. To plany podróży - cel. Przyimki miejsca idą przed ich obiektami - 'nach' plus nazwa miasta. Nie można odwrócić - przyimek zawsze przed rzeczownikiem."
      },
      {
        id: "comp_w_8",
        question: "Im _____ spielt mein Sohn gerne mit seinen Freunden draußen.",
        translation: "(Mój syn chętnie bawi się w ogrodzie ze swoimi przyjaciółmi na zewnątrz)",
        options: ["Garten", "garten", "Gärten", "GARTEN"],
        correct: "Garten",
        explanation: "Rzeczownik 'Garten' kapitalizowany jako rzeczownik! Konstrukcja 'im Garten' oznacza w ogrodzie. To o zabawie - zabawa na świeżym powietrzu. Każdy rzeczownik kapitalizowany niezależnie gdzie w zdaniu - 'im' (in dem) plus 'Garten'. Zasada kapitalizacji bezwzględna."
      },
      {
        id: "comp_w_9",
        question: "Sie trägt eine schöne _____ aus roter Seide zur Party.",
        translation: "(Nosi piękną bluzkę z czerwonego jedwabiu na imprezę)",
        options: ["Bluse", "bluse", "Blusen", "BLUSE"],
        correct: "Bluse",
        explanation: "Rzeczownik 'Bluse' damski element garderoby! Kapitalizowany jako rzeczownik - żeński. To o ubraniu - opis mody. Wszystkie rzeczowniki wielkimi literami - 'eine schöne Bluse' każde słowo z odpowiednią kapitalizacją. Zasada gramatyczna bez wyjątków."
      },
      {
        id: "comp_w_10",
        question: "Der _____ hilft den Patienten jeden Tag im Krankenhaus freundlich.",
        translation: "(Lekarz pomaga pacjentom każdego dnia w szpitalu przyjaźnie)",
        options: ["Arzt", "arzt", "Ärtze", "ARZT"],
        correct: "Arzt",
        explanation: "Rzeczownik zawodu 'Arzt'! Kapitalizowany - męski. To o zawodzie - profesjonalista medyczny. Zawody są rzeczownikami więc kapitalizowane - 'der Arzt' zawsze wielką literą. Nawet pospolite rzeczowniki stosują kapitalizację."
      },
      {
        id: "comp_w_11",
        question: "Ich trinke gerne _____ zum Frühstück mit Milch und Zucker.",
        translation: "(Lubię pić kawę na śniadanie z mlekiem i cukrem)",
        options: ["Kaffee", "kaffee", "Kaffees", "KAFFEE"],
        correct: "Kaffee",
        explanation: "Rzeczownik napoju 'Kaffee'! Kapitalizowany - męski. To poranna rutyna - preferencja śniadaniowa. Napoje są rzeczownikami - kapitalizacja obowiązkowa. Słowo 'Kaffee' zawsze wielką literą niezależnie od pozycji. Uniwersalna zasada rzeczowników."
      },
      {
        id: "comp_w_12",
        question: "Mein _____ steht vor dem Haus in der Einfahrt geparkt.",
        translation: "(Mój samochód stoi przed domem na podjeździe zaparkowany)",
        options: ["Auto", "auto", "Autos", "AUTO"],
        correct: "Auto",
        explanation: "Rzeczownik pojazdu 'Auto'! Kapitalizowany - nijaki. To o własności - lokalizacja samochodu. Pojazdy są rzeczownikami więc wielką literą - 'mein Auto' poprawna forma. Posiadanie plus kapitalizowany rzeczownik standardowe."
      },
      {
        id: "comp_w_13",
        question: "Die _____ öffnet um 9 Uhr morgens und schließt um 18 Uhr.",
        translation: "(Bank otwiera się o 9 rano i zamyka o 18)",
        options: ["Bank", "bank", "Banken", "BANK"],
        correct: "Bank",
        explanation: "Rzeczownik instytucji 'Bank'! Kapitalizowany - żeński. To godziny działalności - czasy operacyjne. Instytucje są rzeczownikami - kapitalizacja standardowa. Forma 'die Bank' zawsze wielką literą. Nazywanie instytucji."
      },
      {
        id: "comp_w_14",
        question: "Im _____ gibt es viele interessante Bücher über Geschichte zu lesen.",
        translation: "(W bibliotece jest wiele ciekawych książek o historii do czytania)",
        options: ["Bibliothek", "bibliothek", "Bibliotheken", "BIBLIOTHEK"],
        correct: "Bibliothek",
        explanation: "Rzeczownik miejsca publicznego 'Bibliothek'! Kapitalizowany - żeński. To o zasobach - kolekcja książek. Miejsca publiczne są rzeczownikami - kapitalizacja wymagana. Forma 'in der Bibliothek' poprawna. Nazywanie lokalizacji."
      },
      {
        id: "comp_w_15",
        question: "Ich kaufe frisches _____ und Gemüse auf dem Markt jeden Samstag.",
        translation: "(Kupuję świeże owoce i warzywa na rynku każdą sobotę)",
        options: ["Obst", "obst", "Obsts", "OBST"],
        correct: "Obst",
        explanation: "Rzeczownik zbiorowy żywności 'Obst'! Kapitalizowany - nijaki. To rutyna zakupowa - świeże produkty. Kategorie żywności są rzeczownikami - wielkimi literami. Konstrukcja 'frisches Obst' przymiotnik plus kapitalizowany rzeczownik. Rzeczownik zbiorowy dla owoców."
      }
    ]
  },

  time_expressions_word_order: {
    name: "Wyrażenia czasowe i szyk",
    description: "Wann, wie lange, seit wann - Time-Manner-Place",
    icon: Clock,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    questions: [
      {
        id: "time_expr_1",
        question: "Ich fahre _____ _____ _____ zur Arbeit jeden Tag.",
        translation: "(Jadę rano autobusem do pracy każdego dnia)",
        options: ["morgens mit dem Bus", "mit dem Bus morgens", "zur Arbeit morgens", "Bus morgens mit"],
        correct: "morgens mit dem Bus",
        explanation: "Niemiecka kolejność: CZAS - SPOSÓB - MIEJSCE! Forma 'morgens' (kiedy) - 'mit Bus' (jak) - 'zur Arbeit' (gdzie). To standardowa sekwencja - czasowo-modalno-lokalna. Zasada TMP fundamentalna - czas zawsze pierwszy, potem sposób, na końcu miejsce. Opis dojazdu zgodny ze strukturą."
      },
      {
        id: "time_expr_2",
        question: "Seit _____ wohnst du schon in dieser Stadt hier?",
        translation: "(Od kiedy mieszkasz już w tym mieście tutaj?)",
        options: ["wann", "wie lange", "wenn", "als"],
        correct: "wann",
        explanation: "Pytanie 'seit wann' pyta o punkt początkowy! Od którego momentu - konkretny początek czasu. To pytanie o czas trwania - kiedy zaczęło. Forma 'seit wann' pyta o punkt początkowy (od kiedy), 'wie lange' pyta o czas trwania (jak długo). Różne skupienie - start versus długość."
      },
      {
        id: "time_expr_3",
        question: "_____ bist du schon hier im Büro und arbeitest?",
        translation: "(Jak długo jesteś już tutaj w biurze i pracujesz?)",
        options: ["Wie lange", "Seit wann", "Wann", "Als"],
        correct: "Wie lange",
        explanation: "Pytanie 'wie lange' pyta o czas trwania! Ile czasu trwa - długość czasu. To pytanie o okres - przedział czasowy. Forma 'wie lange' skupia się na całkowitym czasie trwania od początku - mierzenie czasu trwania. Odpowiedzi z okresami czasu."
      },
      {
        id: "time_expr_4",
        question: "Wir gehen _____ _____ _____ spazieren zusammen.",
        translation: "(Chodzimy wieczorami w parku na spacer razem)",
        options: ["abends im Park", "im Park abends", "Park abends im", "abends Park"],
        correct: "abends im Park",
        explanation: "Kolejność TMP: CZAS pierwszy, MIEJSCE drugie! Forma 'abends' (kiedy) przed 'im Park' (gdzie). To opis rutyny - wieczorne spacery. Czasowe przed lokalnym - ustalona sekwencja. Bez elementu sposobu, czas bezpośrednio przed miejscem. Struktura nawykowej czynności."
      },
      {
        id: "time_expr_5",
        question: "_____ warst du gestern Abend? Ich habe dich gesucht lange!",
        translation: "(Gdzie byłeś wczoraj wieczorem? Szukałem cię długo!)",
        options: ["Wo", "Wohin", "Woher", "Wann"],
        correct: "Wo",
        explanation: "Pytanie 'wo' pyta o statyczną lokalizację! Gdzie byłeś (pozycja) nie kierunek. To pytanie o miejsce pobytu - szukanie lokalizacji. Forma 'wo' dla lokalizacji (gdzie jesteś/byłeś), 'wohin' dla kierunku (dokąd), 'woher' dla pochodzenia (skąd). Pytanie o statyczną pozycję."
      },
      {
        id: "time_expr_6",
        question: "_____ gehst du jetzt? Ich komme mit dir zusammen!",
        translation: "(Dokąd teraz idziesz? Idę z tobą razem!)",
        options: ["Wohin", "Wo", "Woher", "Wann"],
        correct: "Wohin",
        explanation: "Pytanie 'wohin' pyta o kierunek! Dokąd - ruch w stronę. To pytanie o cel - chęć dołączenia. Forma 'wohin' dla kierunków lub celów (dokąd idziesz) - skupienie na ruchu. Implikuje ruch w stronę lokalizacji."
      },
      {
        id: "time_expr_7",
        question: "Ich habe _____ drei Jahren Deutsch gelernt und studiert intensiv.",
        translation: "(Uczę się niemieckiego od trzech lat i studiuję intensywnie)",
        options: ["seit", "vor", "für", "in"],
        correct: "seit",
        explanation: "Forma 'seit drei Jahren' trwający czas! Od (punktu początkowego) do teraz - kontynuuje. To o podróży nauki - zgromadzony czas. Przyimek 'seit' plus okres czasu pokazuje czas trwania kontynuujący do teraźniejszości - wciąż trwa. Różne od 'vor' (temu - zakończone)."
      },
      {
        id: "time_expr_8",
        question: "Er ist _____ zwei Stunden nach Hause gegangen schon.",
        translation: "(Poszedł do domu dwie godziny temu już)",
        options: ["vor", "seit", "für", "in"],
        correct: "vor",
        explanation: "Forma 'vor zwei Stunden' zakończona przeszłość! Temu - akcja zakończona temu. To o czasie - kiedy wyszedł. Przyimek 'vor' plus czas oznacza temu (zakończone), 'seit' oznacza od (trwające). Forma 'vor' dla pojedynczych przeszłych wydarzeń - nie kontynuujących."
      },
      {
        id: "time_expr_9",
        question: "_____ kommst du? Ich erkenne deinen Akzent nicht genau.",
        translation: "(Skąd pochodzisz? Nie rozpoznaję twojego akcentu dokładnie)",
        options: ["Woher", "Wo", "Wohin", "Wann"],
        correct: "Woher",
        explanation: "Pytanie 'woher' pyta o pochodzenie! Skąd pochodzisz - źródłowa lokalizacja. To o tle - identyfikacja pochodzenia. Forma 'woher' dla pochodzenia (skąd jesteś) - gdzie Z. Akcent wywołujący pytanie o pochodzenie."
      },
      {
        id: "time_expr_10",
        question: "Wir bleiben _____ eine Woche in diesem Hotel am Strand.",
        translation: "(Zostaniemy przez tydzień w tym hotelu na plaży)",
        options: ["für", "seit", "vor", "in"],
        correct: "für",
        explanation: "Forma 'für eine Woche' planowany czas trwania! Jak długo zostaniemy - zamierzony okres. To plany wakacyjne - długość pobytu. Przyimek 'für' plus okres czasu dla przyszłych lub planowanych czasów trwania - zamierzona długość. Różne od 'seit' (już się dzieje)."
      },
      {
        id: "time_expr_11",
        question: "Sie hat _____ mit großer Freude die Nachricht gehört positiv.",
        translation: "(Usłyszała wiadomość wczoraj z wielką radością pozytywnie)",
        options: ["gestern", "gester", "Gestern", "GESTERN"],
        correct: "gestern",
        explanation: "Przysłówek czasu 'gestern' małymi literami! Tylko rzeczowniki wielką - przysłówki małą. To o czasie - przeszłe wiadomości. Przysłówki czasu (gestern, heute, morgen) NIE kapitalizowane - nie są rzeczownikami. Małe litery dla wszystkich przysłówków."
      },
      {
        id: "time_expr_12",
        question: "_____ fahren wir in den Urlaub nach Spanien endlich?",
        translation: "(Kiedy jedziemy na urlop do Hiszpanii w końcu?)",
        options: ["Wann", "Wenn", "Als", "Wo"],
        correct: "Wann",
        explanation: "Pytanie 'wann' pyta o konkretny czas! Który moment - kiedy dokładnie. To niecierpliwość - chęć poznania daty. Forma 'wann' dla pytań o konkretne czasy (kiedy), 'wenn' dla warunków (gdy). Bezpośrednie zapytanie czasowe."
      },
      {
        id: "time_expr_13",
        question: "Ich lerne _____ _____ in der Bibliothek jeden Tag konzentriert.",
        translation: "(Uczę się wieczorami w bibliotece każdego dnia skoncentrowanie)",
        options: ["abends", "Abends", "in Abends", "am Abends"],
        correct: "abends",
        explanation: "Przysłówek czasu 'abends' małymi literami! Nie rzeczownik - mała litera. To rutyna nauki - wieczorny nawyk. Przysłówki czasu opisujące kiedy (morgens, abends, nachts) małymi literami - funkcjonują jako przysłówki nie rzeczowniki. Habitualny czas małą literą."
      },
      {
        id: "time_expr_14",
        question: "_____ zwei Jahren habe ich diese Sprache gelernt und beherrscht.",
        translation: "(W dwa lata nauczyłem się tego języka i opanowałem)",
        options: ["In", "Seit", "Vor", "Für"],
        correct: "In",
        explanation: "Forma 'in zwei Jahren' czas potrzebny dla ukończenia! Okres potrzebny - czas trwania dla osiągnięcia. To o szybkości osiągnięcia - harmonogram nauki. Przyimek 'in' plus czas pokazuje okres potrzebny dla dokonania - ile czasu zajęło. Ramy czasowe ukończenia."
      },
      {
        id: "time_expr_15",
        question: "Er arbeitet schon _____ fünf Jahren in dieser Firma erfolgreich.",
        translation: "(Pracuje już od pięciu lat w tej firmie pomyślnie)",
        options: ["seit", "vor", "für", "in"],
        correct: "seit",
        explanation: "Forma 'seit fünf Jahren' trwające zatrudnienie! Kontynuuje do teraz - teraźniejszy czas trwania. To oświadczenie kariery - długość stażu. Przyimek 'seit' dla czasów trwania kontynuujących do teraźniejszości - wciąż pracuje. Trwająca sytuacja od punktu początkowego."
      }
    ]
  },

  comparative_superlative_special: {
    name: "Stopniowanie - formy specjalne",
    description: "Gut-besser-best, gern-lieber-am liebsten",
    icon: TrendingUp,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    questions: [
      {
        id: "comp_sup_1",
        question: "Dieses Restaurant ist _____ als das andere in der Nähe.",
        translation: "(Ta restauracja jest lepsza niż tamta w pobliżu)",
        options: ["besser", "guter", "mehr gut", "am besten"],
        correct: "besser",
        explanation: "Forma 'besser' nieregularny stopień wyższy od 'gut'! Nie 'guter' - specjalna forma. To porównanie - jakość restauracji. Przymiotnik 'gut' ma nieregularny stopień wyższy - gut/besser/am besten. Trzeba zapamiętać - nie stosuje normalnego wzoru. Nieregularny ale powszechny."
      },
      {
        id: "comp_sup_2",
        question: "Ich trinke _____ Tee als Kaffee morgens zum Frühstück.",
        translation: "(Wolę pić herbatę niż kawę rano na śniadanie)",
        options: ["lieber", "mehr gern", "gerner", "am liebsten"],
        correct: "lieber",
        explanation: "Forma 'lieber' stopień wyższy od 'gern'! Wyrażanie preferencji - wolę. To o preferencjach - wybór napoju. Przysłówek 'gern' nieregularny: gern/lieber/am liebsten. Forma 'lieber' oznacza 'preferuję' - preferuję to nad tamto. Wyrażanie preferencji."
      },
      {
        id: "comp_sup_3",
        question: "Das ist das _____ Restaurant in der ganzen Stadt für mnie!",
        translation: "(To jest najlepsza restauracja w całym mieście dla mnie!)",
        options: ["beste", "bessere", "gute", "mehr gute"],
        correct: "beste",
        explanation: "Forma 'beste' stopień najwyższy od 'gut'! Najlepszy - najwyższy ranking. To silna rekomendacja - ostateczny wybór. Stopień najwyższy przed rzeczownikiem: 'das beste' (nie 'am besten'). Końcówka przymiotnikowa wymagana - 'beste' z końcówką. Forma najwyższego uznania."
      },
      {
        id: "comp_sup_4",
        question: "Ich esse _____ Pizza von allen italienischen Gerichten hier.",
        translation: "(Najbardziej lubię jeść pizzę ze wszystkich włoskich dań tutaj)",
        options: ["am liebsten", "lieber", "gern", "mehr gern"],
        correct: "am liebsten",
        explanation: "Forma 'am liebsten' stopień najwyższy preferencji! Najbardziej preferuję - ostateczny ulubiony. To wyrażanie najwyższego wyboru - ulubione jedzenie. Stopień najwyższy 'gern': 'am liebsten' (najbardziej lubię). Z przysłówkowymi stopniami najwyższymi używaj 'am' plus -sten. Absolutna preferencja."
      },
      {
        id: "comp_sup_5",
        question: "Er ist _____ als sein Bruder, aber nicht so stark wie Vater.",
        translation: "(Jest wyższy niż jego brat, ale nie tak silny jak ojciec)",
        options: ["größer", "großer", "mehr groß", "am größten"],
        correct: "größer",
        explanation: "Forma 'größer' stopień wyższy z przegłosem! Przymiotnik 'groß' staje się 'größer' - zmiana samogłoski. To porównanie rodzinne - różnice wzrostu. Wiele przymiotników dodaje przegłos w stopniu wyższym lub najwyższym - groß/größer/am größten. Wzór mutacji samogłoski."
      },
      {
        id: "comp_sup_6",
        question: "Diese Übung ist _____ schwierig von allen im Buch.",
        translation: "(To ćwiczenie jest najtrudniejsze ze wszystkich w książce)",
        options: ["am schwierigsten", "schwieriger", "mehr schwierig", "schwierigste"],
        correct: "am schwierigsten",
        explanation: "Forma 'am schwierigsten' przysłówkowy stopień najwyższy! Najtrudniejsze - samodzielny stopień najwyższy. To o trudności - identyfikacja najtrudniejszego. Gdy stopień najwyższy stoi samodzielnie (nie przed rzeczownikiem), używaj 'am' plus -(e)sten. Długi 'schwierig' więc -(i)gsten. Przysłówkowa forma stopnia najwyższego."
      },
      {
        id: "comp_sup_7",
        question: "Im Winter ist es _____ als im Herbst normalerweise kalt.",
        translation: "(Zimą jest zimniej niż jesienią normalnie zimno)",
        options: ["kälter", "kalter", "mehr kalt", "am kältesten"],
        correct: "kälter",
        explanation: "Forma 'kälter' z przegłosem! Przymiotnik 'kalt' staje się 'kälter' - nieregularna zmiana samogłoski. To porównanie sezonowe - różnice temperatur. Przymiotniki na -alt, -arm, -jung często dostają przegłos - kalt/kälter/am kältesten. Zmiana wymowy i pisowni."
      },
      {
        id: "comp_sup_8",
        question: "Dieser Film ist _____ interessant wie der andere aus letztem Jahr.",
        translation: "(Ten film jest równie interesujący jak tamten z zeszłego roku)",
        options: ["so", "als", "wie", "mehr"],
        correct: "so",
        explanation: "Konstrukcja 'so...wie' dla porównania równości! Równie jak - ten sam poziom. To porównanie filmów - równa jakość. Forma 'so' plus przymiotnik plus 'wie' pokazuje paritet - oba równe. Różne od 'als' (niż) używanego ze stopniem wyższym. Struktura równego porównania."
      },
      {
        id: "comp_sup_9",
        question: "Sie läuft _____ als ich, obwohl sie kleiner ist physisch.",
        translation: "(Biega szybciej niż ja, chociaż jest mniejsza fizycznie)",
        options: ["schneller", "mehr schnell", "schnellst", "am schnellsten"],
        correct: "schneller",
        explanation: "Forma 'schneller' regularny stopień wyższy! Dodawanie -er standardowo. To o zdolności atletycznej - porównanie szybkości. Regularne stopnie wyższe tylko dodają -er - schnell/schneller/am schnellsten. Rozmiar nie determinuje szybkości - zaskakujący talent."
      },
      {
        id: "comp_sup_10",
        question: "Von allen Jahreszeiten mag ich den Sommer _____.",
        translation: "(Ze wszystkich pór roku najbardziej lubię lato)",
        options: ["am liebsten", "lieber", "gern", "mehr gern"],
        correct: "am liebsten",
        explanation: "Forma 'am liebsten' absolutna preferencja! Ulubiona pora roku - najwyższy wybór. To o preferencjach - sezonowy ulubiony. Forma 'am liebsten' stopień najwyższy pokazuje ostateczną preferencję wśród opcji - najbardziej kochany. Wyrażanie maksymalnego upodobania."
      },
      {
        id: "comp_sup_11",
        question: "Das war die _____ Entscheidung meines Lebens bisher wichtig.",
        translation: "(To była najważniejsza decyzja mojego życia do tej pory ważna)",
        options: ["wichtigste", "wichtiger", "mehr wichtig", "am wichtigsten"],
        correct: "wichtigste",
        explanation: "Forma 'wichtigste' stopień najwyższy przed rzeczownikiem! Potrzebuje końcówki - forma przymiotnikowa. To refleksja życiowa - kluczowa decyzja. Stopień najwyższy jako przymiotnik przed rzeczownikiem: rdzeń plus -ste plus końcówka. Forma 'die wichtigste' żeński mianownik. Atrybucyjny stopień najwyższy wymaga deklinacji."
      },
      {
        id: "comp_sup_12",
        question: "Dieses Auto fährt _____ als meins, aber verbraucht mehr Benzin.",
        translation: "(Ten samochód jeździ szybciej niż mój, ale zużywa więcej benzyny)",
        options: ["schneller", "mehr schnell", "am schnellsten", "schnellst"],
        correct: "schneller",
        explanation: "Forma 'schneller' przysłówkowy stopień wyższy samodzielny! Porównanie prędkości - szybciej niż. To porównanie samochodów - kompromis wydajności. Przysłówkowe stopnie wyższe bez końcówek - czysta forma stopnia wyższego. Przewaga prędkości ale wada paliwa."
      },
      {
        id: "comp_sup_13",
        question: "Er spricht Deutsch _____ von allen Studenten in der Klasse.",
        translation: "(Mówi po niemiecku najlepiej ze wszystkich studentów w klasie)",
        options: ["am besten", "besser", "gut", "beste"],
        correct: "am besten",
        explanation: "Forma 'am besten' przysłówkowy stopień najwyższy! Najlepszy sposób - najlepszy mówiący. To o biegłości językowej - lider klasy. Samodzielny stopień najwyższy: 'am' plus -(e)sten. Nieregularny 'gut' to am besten. Przysłówkowa forma dla opisywania JAK mówi."
      },
      {
        id: "comp_sup_14",
        question: "Je _____ du übst, desto besser wirst du werden garantiert!",
        translation: "(Im więcej ćwiczysz, tym lepszy będziesz na pewno!)",
        options: ["mehr", "viel", "meist", "am meisten"],
        correct: "mehr",
        explanation: "Konstrukcja 'je mehr...desto besser' proporcjonalna! Więcej praktyki równa się lepsza umiejętność. To motywacyjne - zachęcanie do wysiłku. Forma 'je' plus stopień wyższy plus 'desto' plus stopień wyższy pokazuje korelację. Forma 'mehr' stopień wyższy od 'viel'. Struktura proporcjonalnego ulepszania."
      },
      {
        id: "comp_sup_15",
        question: "Das ist _____ Problem, das ich je hatte in meinem Leben!",
        translation: "(To jest największy problem, jaki kiedykolwiek miałem w życiu!)",
        options: ["das größte", "größer", "mehr groß", "am größten"],
        correct: "das größte",
        explanation: "Forma 'das größte Problem' stopień najwyższy z określonym! Przed rzeczownikiem potrzebuje rodzajnika plus końcówka. To o trudnościach - najgorszy w życiu. Atrybucyjny stopień najwyższy: rodzajnik plus przymiotnik plus -ste plus końcówka plus rzeczownik. Forma 'größte' z przegłosem i końcówką. Wyrażenie maksymalnej trudności."
      }
    ]
  },

  prepositions_with_cases: {
    name: "Przyimki z przypadkami",
    description: "An, auf, in - Akkusativ vs Dativ, zwei-Wege",
    icon: Map,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    questions: [
      {
        id: "prep_case_1",
        question: "Ich gehe _____ _____ Kino heute Abend mit Freunden.",
        translation: "(Idę do kina dziś wieczorem z przyjaciółmi)",
        options: ["in das", "in dem", "ins", "im"],
        correct: "ins",
        explanation: "Forma 'ins Kino' (in plus das) ruch DO środka! Biernik dla kierunku - ruch w stronę. To plan rozrywki - iść DO kina. Przyimki dwukierunkowe: ruch lub zmiana oznacza biernik. Skrót 'ins' to 'in das'. Kierunek określa przypadek."
      },
      {
        id: "prep_case_2",
        question: "Wir sind jetzt _____ _____ Kino und warten auf den Film.",
        translation: "(Jesteśmy teraz w kinie i czekamy na film)",
        options: ["im", "ins", "in das", "in dem"],
        correct: "im",
        explanation: "Forma 'im Kino' (in plus dem) statyczna lokalizacja! Celownik dla pozycji - już w środku. To obecna lokalizacja - stan oczekiwania. Przyimki dwukierunkowe: statyczna lokalizacja oznacza celownik. Skrót 'im' to 'in dem'. Pozycja nie ruch."
      },
      {
        id: "prep_case_3",
        question: "Das Bild hängt _____ _____ Wand im Wohnzimmer schön.",
        translation: "(Obraz wisi na ścianie w salonie pięknie)",
        options: ["an der", "an die", "auf der", "auf die"],
        correct: "an der",
        explanation: "Forma 'an der Wand' statyczne wiszenie! Celownik bo już wisi - pozycja. To o dekoracji - umiejscowienie obrazu. Powierzchnie pionowe używają 'an' - celownik gdy opisujesz istniejącą pozycję. Forma 'an der' (żeński celownik) dla ścian. Statyczne przymocowanie."
      },
      {
        id: "prep_case_4",
        question: "Ich hänge das Bild jetzt _____ _____ Wand dort drüben.",
        translation: "(Wieszam obraz teraz na ścianę tam)",
        options: ["an die", "an der", "auf die", "auf der"],
        correct: "an die",
        explanation: "Forma 'an die Wand' ruch DO ściany! Biernik bo akcja wieszania - kierunek. To akcja dekorowania - proces wieszania. Ten sam przyimek 'an' ale przypadek się zmienia: ruch oznacza biernik. Forma 'an die' (żeński biernik) pokazuje kierunek. Akcja w toku."
      },
      {
        id: "prep_case_5",
        question: "Die Katze liegt _____ _____ Sofa und schläft friedlich.",
        translation: "(Kot leży na sofie i śpi spokojnie)",
        options: ["auf dem", "auf das", "in dem", "in das"],
        correct: "auf dem",
        explanation: "Forma 'auf dem Sofa' statyczna pozycja! Celownik bo już leży - statyczna lokalizacja. To spokojna scena - odpoczywający kot. Powierzchnie poziome używają 'auf' - celownik dla istniejących pozycji. Forma 'auf dem' (nijaki celownik). Opis obecnego stanu."
      },
      {
        id: "prep_case_6",
        question: "Ich lege das Buch _____ _____ Tisch für später jetzt.",
        translation: "(Kładę książkę na stół na później teraz)",
        options: ["auf den", "auf dem", "in den", "in dem"],
        correct: "auf den",
        explanation: "Forma 'auf den Tisch' ruch NA powierzchnię! Biernik bo akcja kładzenia - kierunek. To akcja - umieszczanie obiektu. Ten sam 'auf' ale ruch oznacza biernik. Forma 'auf den' (męski biernik) pokazuje kierunek. Akcja umieszczania."
      },
      {
        id: "prep_case_7",
        question: "Wir fahren _____ Sommer immer an die Ostsee zum Baden.",
        translation: "(Jedzimy w lato zawsze nad Bałtyk kąpać się)",
        options: ["im", "in den", "in dem", "ins"],
        correct: "im",
        explanation: "Forma 'im Sommer' wyrażenie czasowe! Pory roku używają 'in' plus celownik - nie ruch. To doroczna tradycja - wakacje letnie. Okresy czasu: 'in' plus celownik (im Sommer, im Winter). Użycie czasowe nie przestrzenne - celownik dla pór roku. Ustalony wzór czasu."
      },
      {
        id: "prep_case_8",
        question: "Das Auto steht _____ _____ Garage sicher und trocken.",
        translation: "(Samochód stoi w garażu bezpiecznie i sucho)",
        options: ["in der", "in die", "im", "ins"],
        correct: "in der",
        explanation: "Forma 'in der Garage' statyczne parkowanie! Celownik bo pozycja - już w środku. To obecny stan - lokalizacja samochodu. Zamknięte przestrzenie: 'in' plus celownik dla istniejących pozycji. Forma 'in der' (żeński celownik). Opisywanie gdzie znajduje się."
      },
      {
        id: "prep_case_9",
        question: "Ich fahre das Auto _____ _____ Garage zum Parken jetzt.",
        translation: "(Wjeżdżam samochodem do garażu żeby zaparkować teraz)",
        options: ["in die", "in der", "ins", "im"],
        correct: "in die",
        explanation: "Forma 'in die Garage' ruch DO wnętrza! Biernik bo wjeżdżanie - kierunek do środka. To akcja parkowania - proces ruchu. Ruch DO zamkniętej przestrzeni oznacza biernik. Forma 'in die' (żeński biernik) pokazuje kierunek. Akcja wjeżdżania."
      },
      {
        id: "prep_case_10",
        question: "Das Flugzeug fliegt _____ _____ Stadt und landet gleich hier.",
        translation: "(Samolot leci nad miastem i zaraz tu ląduje)",
        options: ["über die", "über der", "durch die", "durch der"],
        correct: "über die",
        explanation: "Forma 'über die Stadt' ruch NAD! Biernik bo leci w poprzek - ruch. To lotnictwo - trasa lotu. Przyimek 'über' dla ruchu nad lub w poprzek oznacza biernik. Forma 'über die' (żeński biernik). Ruch powietrzny."
      },
      {
        id: "prep_case_11",
        question: "Zwischen _____ _____ Häusern ist ein kleiner Park schön.",
        translation: "(Między domami jest mały ładny park)",
        options: ["den", "dem", "die", "der"],
        correct: "den",
        explanation: "Forma 'zwischen den Häusern' statyczna pozycja! Celownik mnogości - lokalizacja między. To o geografii - umiejscowienie parku. Przyimek 'zwischen' dwukierunkowy ale statyczny oznacza celownik. Celownik mnogości zawsze 'den'. Opis pozycji."
      },
      {
        id: "prep_case_12",
        question: "Stell die Vase bitte _____ _____ Tisch vorsichtig hin!",
        translation: "(Postaw wazon proszę na stół ostrożnie!)",
        options: ["auf den", "auf dem", "an den", "an dem"],
        correct: "auf den",
        explanation: "Forma 'auf den Tisch stellen' akcja umieszczania! Biernik bo stawianie - kierunek na. To instrukcja - ostrożne umieszczenie. Stawianie NA powierzchni wymaga biernika - pokazuje ruch. Forma 'auf den' (męski biernik). Tryb rozkazujący akcja."
      },
      {
        id: "prep_case_13",
        question: "Ich warte _____ _____ Bushaltestelle auf den Bus geduldig.",
        translation: "(Czekam na przystanku autobusowym na autobus cierpliwie)",
        options: ["an der", "an die", "auf der", "auf die"],
        correct: "an der",
        explanation: "Forma 'an der Bushaltestelle' statyczne czekanie! Celownik bo pozycja - stojąc przy. To dojazd - stan oczekiwania. Czekanie PRZY lokalizacji oznacza celownik. Przyimek 'an' dla punktów lub przystanków plus celownik. Forma 'an der' (żeński celownik). Statyczna pozycja oczekiwania."
      },
      {
        id: "prep_case_14",
        question: "Geh bitte _____ _____ Fenster und mach es zu schnell!",
        translation: "(Idź proszę do okna i zamknij je szybko!)",
        options: ["an das", "an dem", "ans", "am"],
        correct: "ans",
        explanation: "Forma 'ans Fenster' (an plus das) ruch DO! Biernik bo chodzenie w stronę - kierunek. To instrukcja - zamykanie okna. Ruch DO powierzchni pionowej oznacza biernik. Skrót 'ans' to 'an das'. Kierunkowy rozkaz."
      },
      {
        id: "prep_case_15",
        question: "Unter _____ _____ Brücke fließt ein schöner Fluss langsam.",
        translation: "(Pod mostem płynie piękna rzeka wolno)",
        options: ["der", "die", "dem", "den"],
        correct: "der",
        explanation: "Forma 'unter der Brücke' statyczna pozycja! Celownik bo rzeka już tam płynie - lokalizacja. To opis geograficzny - pozycja rzeki. Przyimek 'unter' dwukierunkowy - statyczna lokalizacja oznacza celownik. Forma 'unter der' (żeński celownik). Opisywanie istniejącego układu."
      }
    ]
  }
};

export default part6Categories;