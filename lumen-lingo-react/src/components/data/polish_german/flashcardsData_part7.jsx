
/**
 * POLISH → GERMAN FLASHCARDS - PART 7
 * 
 * Native Language: Polish (Polski)
 * Target Language: German (Deutsch)
 * 
 * This file contains additional flashcard categories (61-70).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Scale,
  Coins,
  Flower2,
  Palette,
  Theater,
  UserCircle2,
  Heart,
  Clock,
  Bus,
  Leaf,
  AlertCircle, // Used in complaints_problems
  Cloud,       // Used in weather_advanced
  Users,       // Used in social_issues
  ChefHat,     // Used in cooking_baking
  Activity,    // Used in sports_activities
  Monitor      // Used in computer_internet
} from "lucide-react";

export const flashcardsCategories_part7 = {
  law_legal: {
    name: "Prawo i sprawy prawne",
    description: "Terminologia prawnicza i postępowania sądowe",
    icon: Scale,
    color: "from-slate-500 to-gray-700",
    level: "advanced",
    words: [
      { id: "law1", polish: "Prawo", german: "Gesetz", difficulty: "easy", example: "Das Gesetz verbietet das Rauchen in öffentlichen Gebäuden seit vielen Jahren schon.", exampleTranslation: "Prawo zabrania palenia w budynkach publicznych od wielu lat już." },
      { id: "law2", polish: "Prawnik", german: "Anwalt", difficulty: "easy", example: "Ich brauche einen guten Anwalt für diese wichtige rechtliche Angelegenheit dringend.", exampleTranslation: "Potrzebuję dobrego prawnika do tej ważnej sprawy prawnej pilnie." },
      { id: "law3", polish: "Sąd", german: "Gericht", difficulty: "easy", example: "Das Gericht entscheidet über die Schuld des Angeklagten morgen um zehn Uhr.", exampleTranslation: "Sąd decyduje o winie oskarżonego jutro o dziesiątej." },
      { id: "law4", polish: "Umowa", german: "Vertrag", difficulty: "easy", example: "Der Vertrag muss von beiden Parteien unterschrieben werden für Gültigkeit offiziell.", exampleTranslation: "Umowa musi być podpisana przez obie strony dla ważności oficjalnie." },
      { id: "law5", polish: "Dowód", german: "Beweis", difficulty: "easy", example: "Wir haben starke Beweise für seine Unschuld vor Gericht präsentiert heute.", exampleTranslation: "Mamy mocne dowody na jego niewinność przedstawione przed sądem dzisiaj." },
      { id: "law6", polish: "Kara", german: "Strafe", difficulty: "easy", example: "Die Strafe für dieses Vergehen ist eine hohe Geldstrafe oder Gefängnis.", exampleTranslation: "Kara za to przewinienie to wysoka grzywna lub więzienie." },
      { id: "law7", polish: "Sędzia", german: "Richter", difficulty: "medium", example: "Der Richter verkündet das Urteil nach langer Beratung mit den Geschworenen endlich.", exampleTranslation: "Sędzia ogłasza wyrok po długiej naradzie z przysięgłymi w końcu." },
      { id: "law8", polish: "Proces sądowy", german: "Gerichtsverfahren", difficulty: "medium", example: "Das Gerichtsverfahren dauert schon drei Monate und ist sehr kompliziert für alle.", exampleTranslation: "Proces sądowy trwa już trzy miesiące i jest bardzo skomplikowany dla wszystkich." },
      { id: "law9", polish: "Oskarżony", german: "Angeklagter", difficulty: "medium", example: "Der Angeklagte bestreitet alle Vorwürfe energisch vor dem Gericht heute laut.", exampleTranslation: "Oskarżony zaprzecza wszystkim zarzutom energicznie przed sądem dzisiaj głośno." },
      { id: "law10", polish: "Świadek", german: "Zeuge", difficulty: "medium", example: "Der Zeuge hat unter Eid die Wahrheit gesagt vor dem Richter heute.", exampleTranslation: "Świadek powiedział prawdę pod przysięgą przed sędzią dzisiaj." },
      { id: "law11", polish: "Obrońca", german: "Verteidiger", difficulty: "medium", example: "Der Verteidiger präsentiert neue Beweise für die Unschuld seines Mandanten überzeugend klar.", exampleTranslation: "Obrońca prezentuje nowe dowody niewinności swojego klienta przekonująco jasno." },
      { id: "law12", polish: "Wyrok", german: "Urteil", difficulty: "medium", example: "Das Urteil wird morgen um elf Uhr verkündet nach langer Verhandlung endlich.", exampleTranslation: "Wyrok zostanie ogłoszony jutro o jedenastej po długiej rozprawie w końcu." },
      { id: "law13", polish: "Potrzebuję prawnika", german: "Ich brauche einen Anwalt", difficulty: "hard", example: "Ich brauche dringend einen erfahrenen Anwalt für diesen komplizierten Fall sofort!", exampleTranslation: "Potrzebuję pilnie doświadczonego prawnika do tej skomplikowanej sprawy natychmiast!" },
      { id: "law14", polish: "Mam prawo do obrony", german: "Ich habe das Recht auf Verteidigung", difficulty: "hard", example: "Ich habe das gesetzliche Recht auf einen Verteidiger meiner Wahl immer!", exampleTranslation: "Mam prawne prawo do obrońcy mojego wyboru zawsze!" },
      { id: "law15", polish: "To niezgodne z prawem", german: "Das ist gesetzwidrig", difficulty: "hard", example: "Das ist völlig gesetzwidrig! Ich werde dagegen rechtlich vorgehen müssen!", exampleTranslation: "To całkowicie niezgodne z prawem! Będę musiał podjąć kroki prawne!" }
    ]
  },

  banking_finance: {
    name: "Bankowość i finanse",
    description: "Bank, pieniądze i transakcje finansowe",
    icon: Coins,
    color: "from-green-500 to-emerald-700",
    level: "intermediate",
    words: [
      { id: "bank1", polish: "Bank", german: "Bank", difficulty: "easy", example: "Ich gehe zur Bank, um Geld von meinem Konto abzuheben heute Vormittag.", exampleTranslation: "Idę do banku, aby wypłacić pieniądze z mojego konta dzisiaj rano." },
      { id: "bank2", polish: "Konto", german: "Konto", difficulty: "easy", example: "Ich möchte ein neues Konto bei dieser Bank eröffnen für meine Ersparnisse.", exampleTranslation: "Chcę otworzyć nowe konto w tym banku dla moich oszczędności." },
      { id: "bank3", polish: "Karta", german: "Karte", difficulty: "easy", example: "Meine Bankkarte funktioniert nicht mehr, ich brauche eine neue sofort schnell.", exampleTranslation: "Moja karta bankowa już nie działa, potrzebuję nowej natychmiast szybko." },
      { id: "bank4", polish: "Pieniądze", german: "Geld", difficulty: "easy", example: "Ich habe nicht genug Geld bei mir für diesen Einkauf heute dabei.", exampleTranslation: "Nie mam wystarczająco pieniędzy przy sobie na te zakupy dzisiaj." },
      { id: "bank5", polish: "Wpłata", german: "Einzahlung", difficulty: "easy", example: "Ich mache eine Einzahlung von tausend Euro auf mein Sparkonto heute Nachmittag.", exampleTranslation: "Dokonuję wpłaty tysiąca euro na moje konto oszczędnościowe dzisiaj po południu." },
      { id: "bank6", polish: "Wypłata", german: "Abhebung", difficulty: "easy", example: "Die maximale Abhebung am Geldautomaten beträgt fünfhundert Euro pro Tag täglich.", exampleTranslation: "Maksymalna wypłata z bankomatu wynosi pięćset euro dziennie codziennie." },
      { id: "bank7", polish: "Przelew", german: "Überweisung", difficulty: "medium", example: "Die Überweisung dauert normalerweise zwei bis drei Werktage bis zur Gutschrift.", exampleTranslation: "Przelew trwa normalnie dwa do trzech dni roboczych do zaksięgowania." },
      { id: "bank8", polish: "Kredyt", german: "Kredit", difficulty: "medium", example: "Ich beantrage einen Kredit bei der Bank für den Kauf eines Hauses groß.", exampleTranslation: "Składam wniosek o kredyt w banku na zakup domu duży." },
      { id: "bank9", polish: "Odsetki", german: "Zinsen", difficulty: "medium", example: "Die Zinsen für dieses Sparkonto sind sehr niedrig nur ein Prozent jährlich.", exampleTranslation: "Odsetki dla tego konta oszczędnościowego są bardzo niskie tylko jeden procent rocznie." },
      { id: "bank10", polish: "Saldo", german: "Kontostand", difficulty: "medium", example: "Mein aktueller Kontostand beträgt zweitausend Euro nach der letzten Einzahlung gestern.", exampleTranslation: "Moje obecne saldo wynosi dwa tysiące euro po ostatniej wpłacie wczoraj." },
      { id: "bank11", polish: "Bankomat", german: "Geldautomat", difficulty: "medium", example: "Der Geldautomat ist außer Betrieb, ich muss zur Bankfiliale gehen persönlich.", exampleTranslation: "Bankomat jest nieczynny, muszę iść do oddziału banku osobiście." },
      { id: "bank12", polish: "Kredyt hipoteczny", german: "Hypothek", difficulty: "medium", example: "Wir haben eine Hypothek aufgenommen für unser neues Haus am Stadtrand.", exampleTranslation: "Wzięliśmy kredyt hipoteczny na nasz nowy dom na przedmieściach." },
      { id: "bank13", polish: "Chcę otworzyć konto", german: "Ich möchte ein Konto eröffnen", difficulty: "hard", example: "Ich möchte ein Girokonto eröffnen! Welche Dokumente brauche ich dafür genau?", exampleTranslation: "Chcę otworzyć konto bieżące! Jakie dokumenty są mi potrzebne do tego dokładnie?" },
      { id: "bank14", polish: "Jaki jest stan konta?", german: "Wie ist der Kontostand?", difficulty: "hard", example: "Können Sie mir bitte sagen, wie mein aktueller Kontostand ist momentan genau?", exampleTranslation: "Może mi Pan proszę powiedzieć, jakie jest moje obecne saldo momentalnie dokładnie?" },
      { id: "bank15", polish: "Zapomniałem kodu PIN", german: "Ich habe die PIN vergessen", difficulty: "hard", example: "Ich habe meine PIN vergessen! Wie kann ich eine neue PIN bekommen schnell?", exampleTranslation: "Zapomniałem mojego kodu PIN! Jak mogę dostać nowy PIN szybko?" }
    ]
  },

  gardening_plants: {
    name: "Ogrodnictwo i rośliny",
    description: "Uprawa, pielęgnacja i nazwy roślin",
    icon: Flower2,
    color: "from-green-500 to-lime-600",
    level: "intermediate",
    words: [
      { id: "gard1", polish: "Ogród", german: "Garten", difficulty: "easy", example: "Ich arbeite jeden Tag im Garten und pflanze neue Blumen überall schön.", exampleTranslation: "Pracuję każdego dnia w ogrodzie i sadzę nowe kwiaty wszędzie pięknie." },
      { id: "gard2", polish: "Kwiat", german: "Blume", difficulty: "easy", example: "Die Blumen blühen wunderschön im Frühling in vielen bunten Farben prächtig.", exampleTranslation: "Kwiaty kwitną pięknie wiosną w wielu kolorowych barwach wspaniale." },
      { id: "gard3", polish: "Drzewo", german: "Baum", difficulty: "easy", example: "Der alte Baum in unserem Garten ist über hundert Jahre alt hoch.", exampleTranslation: "Stare drzewo w naszym ogrodzie ma ponad sto lat wysokie." },
      { id: "gard4", polish: "Trawnik", german: "Rasen", difficulty: "easy", example: "Der Rasen muss jede Woche gemäht werden für schönes Aussehen regelmäßig.", exampleTranslation: "Trawnik musi być koszony co tydzień dla ładnego wyglądu regularnie." },
      { id: "gard5", polish: "Podlewać", german: "Gießen", difficulty: "easy", example: "Ich gieße die Pflanzen jeden Abend mit frischem Wasser aus dem Schlauch.", exampleTranslation: "Podlewam rośliny każdego wieczoru świeżą wodą z węża." },
      { id: "gard6", polish: "Nasiona", german: "Samen", difficulty: "easy", example: "Ich pflanze Samen im Frühling für schöne Blumen im Sommer später bunt.", exampleTranslation: "Sadzę nasiona wiosną na piękne kwiaty latem później kolorowe." },
      { id: "gard7", polish: "Sadzić", german: "Pflanzen", difficulty: "medium", example: "Wir pflanzen neue Rosen im Garten neben dem alten Apfelbaum heute zusammen.", exampleTranslation: "Sadzimy nowe róże w ogrodzie obok starej jabłoni dzisiaj razem." },
      { id: "gard8", polish: "Przycinać", german: "Schneiden", difficulty: "medium", example: "Man muss die Hecke regelmäßig schneiden, damit sie schön dicht wächst immer.", exampleTranslation: "Trzeba regularnie przycinać żywopłot, aby gęsto rósł zawsze." },
      { id: "gard9", polish: "Kompost", german: "Kompost", difficulty: "medium", example: "Der Kompost ist sehr gut als natürlicher Dünger für den Garten gesund.", exampleTranslation: "Kompost jest bardzo dobry jako naturalny nawóz dla ogrodu zdrowy." },
      { id: "gard10", polish: "Narzędzia ogrodnicze", german: "Gartenwerkzeug", difficulty: "medium", example: "Ich brauche neues Gartenwerkzeug für die Arbeit im großen Gemüsegarten dringend.", exampleTranslation: "Potrzebuję nowych narzędzi ogrodniczych do pracy w dużym ogrodzie warzywnym pilnie." },
      { id: "gard11", polish: "Uprawa", german: "Anbau", difficulty: "medium", example: "Der Anbau von Gemüse im eigenen Garten ist gesund und macht Spaß täglich.", exampleTranslation: "Uprawa warzyw we własnym ogrodzie jest zdrowa i sprawia przyjemność codziennie." },
      { id: "gard12", polish: "Nawóz", german: "Dünger", difficulty: "medium", example: "Organischer Dünger ist besser für die Pflanzen als chemische Produkte natürlich gesund.", exampleTranslation: "Organiczny nawóz jest lepszy dla roślin niż chemiczne produkty naturalnie zdrowo." },
      { id: "gard13", polish: "Kiedy to zakwitnie?", german: "Wann blüht das?", difficulty: "hard", example: "Wann blühen diese Rosen normalerweise? Im Frühling oder erst im Sommer später?", exampleTranslation: "Kiedy te róże normalnie kwitną? Wiosną czy dopiero latem później?" },
      { id: "gard14", polish: "Trzeba podlać rośliny", german: "Die Pflanzen müssen gegossen werden", difficulty: "hard", example: "Die Pflanzen müssen dringend gegossen werden! Sie sind schon ganz trocken verdurstet!", exampleTranslation: "Rośliny muszą być pilnie podlane! Są już całkiem suche spragnione!" },
      { id: "gard15", polish: "Mam zielone ręce", german: "Ich habe einen grünen Daumen", difficulty: "hard", example: "Ich habe einen grünen Daumen! Alle meine Pflanzen wachsen prächtig und gesund!", exampleTranslation: "Mam zielone ręce! Wszystkie moje rośliny rosną wspaniale i zdrowo!" }
    ]
  },

  hobbies_interests: {
    name: "Hobby i zainteresowania",
    description: "Czas wolny, pasje i rozrywki",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "hob1", polish: "Hobby", german: "Hobby", difficulty: "easy", example: "Mein Hobby ist Fotografieren und ich mache viele Bilder in der Natur.", exampleTranslation: "Moim hobby jest fotografowanie i robię wiele zdjęć w naturze." },
      { id: "hob2", polish: "Malować", german: "Malen", difficulty: "easy", example: "Ich male gerne in meiner Freizeit schöne Landschaften mit Ölfarben kreativ.", exampleTranslation: "Lubię malować w wolnym czasie piękne krajobrazy farbami olejnymi kreatywnie." },
      { id: "hob3", polish: "Czytać", german: "Lesen", difficulty: "easy", example: "Ich lese jeden Abend vor dem Schlafengehen ein gutes Buch entspannt.", exampleTranslation: "Czytam każdego wieczoru przed snem dobrą książkę zrelaksowany." },
      { id: "hob4", polish: "Muzyka", german: "Musik", difficulty: "easy", example: "Ich höre gerne klassische Musik beim Entspannen zu Hause abends ruhig.", exampleTranslation: "Lubię słuchać muzyki klasycznej podczas relaksu w domu wieczorami spokojnie." },
      { id: "hob5", polish: "Instrument", german: "Instrument", difficulty: "easy", example: "Ich spiele Klavier seit zehn Jahren und übe jeden Tag fleißig.", exampleTranslation: "Gram na pianinie od dziesięciu lat i ćwiczę każdego dnia pilnie." },
      { id: "hob6", polish: "Kolekcjonować", german: "Sammeln", difficulty: "easy", example: "Ich sammle alte Briefmarken aus verschiedenen Ländern weltweit seit Kindheit.", exampleTranslation: "Kolekcjonuję stare znaczki z różnych krajów na świecie od dzieciństwa." },
      { id: "hob7", polish: "Fotografia", german: "Fotografie", difficulty: "medium", example: "Die Fotografie ist meine große Leidenschaft und ich fotografiere überall gerne täglich.", exampleTranslation: "Fotografia jest moją wielką pasją i fotografuję wszędzie chętnie codziennie." },
      { id: "hob8", polish: "Rękodzieło", german: "Handwerk", difficulty: "medium", example: "Das Handwerk erfordert viel Geduld und Geschicklichkeit mit den Händen präzise.", exampleTranslation: "Rękodzieło wymaga dużo cierpliwości i zręczności rękami precyzyjnie." },
      { id: "hob9", polish: "Szycie", german: "Nähen", difficulty: "medium", example: "Ich lerne Nähen in einem Kurs und mache schon eigene Kleidung selbst.", exampleTranslation: "Uczę się szyć na kursie i już robię własną odzież samodzielnie." },
      { id: "hob10", polish: "Rysowanie", german: "Zeichnen", difficulty: "medium", example: "Das Zeichnen mit Bleistift ist meine liebste Freizeitbeschäftigung am Wochenende entspannend.", exampleTranslation: "Rysowanie ołówkiem jest moją ulubioną rozrywką w weekend relaksująco." },
      { id: "hob11", polish: "Modelarstwo", german: "Modellbau", difficulty: "medium", example: "Der Modellbau von Flugzeugen erfordert viel Präzision und Zeit geduldig lange.", exampleTranslation: "Modelarstwo samolotów wymaga dużo precyzji i czasu cierpliwie długo." },
      { id: "hob12", polish: "Puzzle", german: "Puzzle", difficulty: "medium", example: "Dieses Puzzle hat zweitausend Teile und ist sehr schwierig zusammenzusetzen kompliziert.", exampleTranslation: "To puzzle ma dwa tysiące elementów i jest bardzo trudne do złożenia skomplikowane." },
      { id: "hob13", polish: "Gram na gitarze", german: "Ich spiele Gitarre", difficulty: "hard", example: "Ich spiele seit fünf Jahren Gitarre und kann schon viele Lieder spielen!", exampleTranslation: "Gram na gitarze od pięciu lat i umiem już grać wiele piosenek!" },
      { id: "hob14", polish: "To moja pasja", german: "Das ist meine Leidenschaft", difficulty: "hard", example: "Das ist wirklich meine große Leidenschaft! Ich könnte das stundenlang machen!", exampleTranslation: "To naprawdę moja wielka pasja! Mógłbym to robić godzinami!" },
      { id: "hob15", polish: "W wolnym czasie maluję", german: "In meiner Freizeit male ich", difficulty: "hard", example: "In meiner Freizeit male ich gerne Porträts von Menschen mit Aquarellfarben!", exampleTranslation: "W wolnym czasie maluję chętnie portrety ludzi farbami akwarelowymi!" }
    ]
  },

  cultural_events: {
    name: "Wydarzenia kulturalne",
    description: "Koncerty, wystawy i życie kulturalne",
    icon: Theater,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "cult1", polish: "Koncert", german: "Konzert", difficulty: "easy", example: "Das Konzert beginnt um acht Uhr abends im großen Konzertsaal pünktlich.", exampleTranslation: "Koncert zaczyna się o ósmej wieczorem w dużej sali koncertowej punktualnie." },
      { id: "cult2", polish: "Wystawa", german: "Ausstellung", difficulty: "easy", example: "Die Ausstellung zeigt Werke moderner Künstler aus der ganzen Welt interessant.", exampleTranslation: "Wystawa pokazuje dzieła nowoczesnych artystów z całego świata ciekawie." },
      { id: "cult3", polish: "Teatr", german: "Theater", difficulty: "easy", example: "Im Theater wird heute Abend ein klassisches Drama aufgeführt von Shakespeare.", exampleTranslation: "W teatrze dzisiaj wieczorem wystawiane jest klasyczny dramat Szekspira." },
      { id: "cult4", polish: "Kino", german: "Kino", difficulty: "easy", example: "Wir gehen ins Kino, um den neuen Film zu sehen heute Abend.", exampleTranslation: "Idziemy do kina, aby zobaczyć nowy film dzisiaj wieczorem." },
      { id: "cult5", polish: "Bilet", german: "Karte", difficulty: "easy", example: "Ich habe zwei Karten für das Konzert morgen Abend reserviert online.", exampleTranslation: "Zarezerwowałem dwa bilety na koncert jutro wieczorem online." },
      { id: "cult6", polish: "Przedstawienie", german: "Vorstellung", difficulty: "easy", example: "Die Vorstellung dauert drei Stunden mit einer Pause nach dem zweiten Akt.", exampleTranslation: "Przedstawienie trwa trzy godziny z przerwą po drugim akcie." },
      { id: "cult7", polish: "Galeria sztuki", german: "Kunstgalerie", difficulty: "medium", example: "Die Kunstgalerie ist jeden Tag außer Montag von zehn bis achtzehn Uhr geöffnet.", exampleTranslation: "Galeria sztuki jest otwarta każdego dnia oprócz poniedziałku od dziesiątej do osiemnastej." },
      { id: "cult8", polish: "Wernisaż", german: "Vernissage", difficulty: "medium", example: "Die Vernissage findet am Freitag Abend statt mit freiem Eintritt für alle Interessierten.", exampleTranslation: "Wernisaż odbywa się w piątek wieczorem z wolnym wstępem dla wszystkich zainteresowanych." },
      { id: "cult9", polish: "Artysta", german: "Künstler", difficulty: "medium", example: "Der berühmte Künstler stellt seine neuesten Werke in dieser Galerie aus stolz.", exampleTranslation: "Sławny artysta wystawia swoje najnowsze dzieła w tej galerii dumnie." },
      { id: "cult10", polish: "Opera", german: "Oper", difficulty: "medium", example: "Die Oper von Mozart wird heute Abend in der Staatsoper aufgeführt festlich.", exampleTranslation: "Opera Mozarta jest wystawiana dzisiaj wieczorem w operze państwowej uroczyście." },
      { id: "cult11", polish: "Premiera", german: "Premiere", difficulty: "medium", example: "Die Premiere des neuen Films findet nächste Woche statt mit vielen Prominenten.", exampleTranslation: "Premiera nowego filmu odbywa się w przyszłym tygodniu z wieloma sławami." },
      { id: "cult12", polish: "Festiwal", german: "Festival", difficulty: "medium", example: "Das Musikfestival dauert drei Tage mit vielen berühmten Bands und Künstlern.", exampleTranslation: "Festiwal muzyczny trwa trzy dni z wieloma słynnymi zespołami i artystami." },
      { id: "cult13", polish: "Chcę kupić bilet", german: "Ich möchte eine Karte kaufen", difficulty: "hard", example: "Ich möchte zwei Karten für das Konzert morgen kaufen! Sind noch welche verfügbar?", exampleTranslation: "Chcę kupić dwa bilety na koncert jutro! Czy są jeszcze dostępne?" },
      { id: "cult14", polish: "Kiedy zaczyna się spektakl?", german: "Wann beginnt die Vorstellung?", difficulty: "hard", example: "Wann beginnt die Vorstellung genau? Um wie viel Uhr sollten wir da sein?", exampleTranslation: "Kiedy dokładnie zaczyna się przedstawienie? O której powinniśmy być?" },
      { id: "cult15", polish: "To było wspaniałe", german: "Das war großartig", difficulty: "hard", example: "Das war wirklich großartig! Die beste Vorstellung, die ich je gesehen habe!", exampleTranslation: "To było naprawdę wspaniałe! Najlepsze przedstawienie, jakie kiedykolwiek widziałem!" }
    ]
  },

  body_parts: {
    name: "Części ciała",
    description: "Anatomia i budowa ludzkiego ciała",
    icon: UserCircle2,
    color: "from-rose-500 to-red-600",
    level: "beginner",
    words: [
      { id: "body1", polish: "Głowa", german: "Kopf", difficulty: "easy", example: "Mein Kopf tut weh nach dem langen Tag bei der Arbeit sehr.", exampleTranslation: "Boli mnie głowa po długim dniu w pracy bardzo." },
      { id: "body2", polish: "Oko", german: "Auge", difficulty: "easy", example: "Ich habe blaue Augen wie meine Mutter und mein Großvater auch.", exampleTranslation: "Mam niebieskie oczy jak moja mama i mój dziadek też." },
      { id: "body3", polish: "Nos", german: "Nase", difficulty: "easy", example: "Meine Nase ist verstopft wegen der Erkältung seit drei Tagen schon.", exampleTranslation: "Mój nos jest zatkany z powodu przeziębienia od trzech dni już." },
      { id: "body4", polish: "Usta", german: "Mund", difficulty: "easy", example: "Öffne bitte den Mund weit, damit der Zahnarzt die Zähne untersuchen kann.", exampleTranslation: "Otwórz proszę usta szeroko, aby dentysta mógł zbadać zęby." },
      { id: "body5", polish: "Ucho", german: "Ohr", difficulty: "easy", example: "Mein rechtes Ohr schmerzt sehr, ich sollte zum Arzt gehen bald.", exampleTranslation: "Moje prawe ucho boli bardzo, powinienem iść do lekarza wkrótce." },
      { id: "body6", polish: "Ręka", german: "Hand", difficulty: "easy", example: "Wasch dir die Hände vor dem Essen immer gründlich mit Seife warm.", exampleTranslation: "Umyj ręce przed jedzeniem zawsze dokładnie mydłem ciepło." },
      { id: "body7", polish: "Noga", german: "Bein", difficulty: "medium", example: "Mein Bein tut weh vom langen Laufen gestern im Park stundenlang.", exampleTranslation: "Boli mnie noga od długiego biegania wczoraj w parku godzinami." },
      { id: "body8", polish: "Palec", german: "Finger", difficulty: "medium", example: "Ich habe mir den Finger geschnitten beim Kochen in der Küche heute.", exampleTranslation: "Skaleczyłem sobie palec podczas gotowania w kuchni dzisiaj." },
      { id: "body9", polish: "Kolano", german: "Knie", difficulty: "medium", example: "Das Knie schmerzt beim Treppensteigen nach dem Unfall vor Wochen noch.", exampleTranslation: "Kolano boli przy chodzeniu po schodach po wypadku sprzed tygodni jeszcze." },
      { id: "body10", polish: "Ramię", german: "Schulter", difficulty: "medium", example: "Meine Schulter schmerzt vom schweren Tragen von Einkaufstaschen sehr heute.", exampleTranslation: "Boli mnie ramię od noszenia ciężkich toreb zakupowych bardzo dzisiaj." },
      { id: "body11", polish: "Plecy", german: "Rücken", difficulty: "medium", example: "Der Rücken tut mir weh vom langen Sitzen am Computer täglich stundenlang.", exampleTranslation: "Bolą mnie plecy od długiego siedzenia przy komputerze codziennie godzinami." },
      { id: "body12", polish: "Brzuch", german: "Bauch", difficulty: "medium", example: "Mein Bauch tut weh, ich habe wahrscheinlich etwas Schlechtes gegessen heute.", exampleTranslation: "Boli mnie brzuch, prawdopodobnie zjadłem coś złego dzisiaj." },
      { id: "body13", polish: "Boli mnie głowa", german: "Mir tut der Kopf weh", difficulty: "hard", example: "Mir tut der Kopf furchtbar weh! Hast du vielleicht Schmerztabletten für mich?", exampleTranslation: "Strasznie boli mnie głowa! Masz może tabletki przeciwbólowe dla mnie?" },
      { id: "body14", polish: "Skręciłem kostkę", german: "Ich habe mir den Knöchel verstaucht", difficulty: "hard", example: "Ich habe mir den Knöchel verstaucht beim Joggen! Es tut sehr weh!", exampleTranslation: "Skręciłem kostkę podczas biegania! Bardzo boli!" },
      { id: "body15", polish: "Wszystko mnie boli", german: "Mir tut alles weh", difficulty: "hard", example: "Mir tut heute alles weh vom harten Training gestern im Fitnessstudio!", exampleTranslation: "Wszystko mnie dzisiaj boli po ciężkim treningu wczoraj na siłowni!" }
    ]
  },

  feelings_sensations: {
    name: "Uczucia i doznania",
    description: "Emocje, stany i wrażenia zmysłowe",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "feel1", polish: "Szczęśliwy", german: "Glücklich", difficulty: "easy", example: "Ich bin sehr glücklich mit meinem Leben und meiner Familie zusammen zufrieden.", exampleTranslation: "Jestem bardzo szczęśliwy z mojego życia i mojej rodziny razem zadowolony." },
      { id: "feel2", polish: "Smutny", german: "Traurig", difficulty: "easy", example: "Ich bin traurig, weil mein bester Freund weggezogen ist letzte Woche.", exampleTranslation: "Jestem smutny, bo mój najlepszy przyjaciel się wyprowadził w zeszłym tygodniu." },
      { id: "feel3", polish: "Zły", german: "Wütend", difficulty: "easy", example: "Ich bin wütend, weil ich im Stau stehe schon zwei Stunden lang.", exampleTranslation: "Jestem zły, bo stoję w korku już dwie godziny." },
      { id: "feel4", polish: "Przestraszony", german: "Ängstlich", difficulty: "easy", example: "Ich bin ängstlich vor der wichtigen Prüfung morgen um acht Uhr.", exampleTranslation: "Jestem przestraszony przed ważnym egzaminem jutro o ósmej." },
      { id: "feel5", polish: "Zmęczony", german: "Müde", difficulty: "easy", example: "Ich bin sehr müde nach der langen Reise mit dem Auto heute.", exampleTranslation: "Jestem bardzo zmęczony po długiej podróży samochodem dzisiaj." },
      { id: "feel6", polish: "Głodny", german: "Hungrig", difficulty: "easy", example: "Ich bin sehr hungrig, weil ich heute noch nichts gegessen habe!", exampleTranslation: "Jestem bardzo głodny, bo jeszcze dzisiaj nic nie jadłem!" },
      { id: "feel7", polish: "Zdenerwowany", german: "Nervös", difficulty: "medium", example: "Ich bin nervös vor dem Vorstellungsgespräch morgen um zehn Uhr sehr aufgeregt.", exampleTranslation: "Jestem zdenerwowany przed rozmową kwalifikacyjną jutro o dziesiątej bardzo podekscytowany." },
      { id: "feel8", polish: "Zrelaksowany", german: "Entspannt", difficulty: "medium", example: "Ich fühle mich entspannt nach dem Urlaub am Meer zwei Wochen lang.", exampleTranslation: "Czuję się zrelaksowany po urlopie nad morzem przez dwa tygodnie." },
      { id: "feel9", polish: "Podekscytowany", german: "Aufgeregt", difficulty: "medium", example: "Ich bin so aufgeregt vor der Reise nach Japan nächsten Monat sehr!", exampleTranslation: "Jestem tak podekscytowany przed podróżą do Japonii w przyszłym miesiącu bardzo!" },
      { id: "feel10", polish: "Rozczarowany", german: "Enttäuscht", difficulty: "medium", example: "Ich bin enttäuscht vom Ergebnis der Prüfung, ich hatte besser erwartet.", exampleTranslation: "Jestem rozczarowany wynikiem egzaminu, spodziewałem się lepiej." },
      { id: "feel11", polish: "Dumny", german: "Stolz", difficulty: "medium", example: "Ich bin sehr stolz auf die Leistungen meiner Kinder in der Schule!", exampleTranslation: "Jestem bardzo dumny z osiągnięć moich dzieci w szkole!" },
      { id: "feel12", polish: "Zaskoczony", german: "Überrascht", difficulty: "medium", example: "Ich bin angenehm überrascht von diesem unerwarteten Geschenk heute sehr positiv!", exampleTranslation: "Jestem przyjemnie zaskoczony tym niespodziewanym prezentem dzisiaj bardzo pozytywnie!" },
      { id: "feel13", polish: "Czuję się świetnie", german: "Ich fühle mich großartig", difficulty: "hard", example: "Ich fühle mich heute großartig! Ich habe so viel Energie und gute Laune!", exampleTranslation: "Czuję się dzisiaj świetnie! Mam tyle energii i dobrego humoru!" },
      { id: "feel14", polish: "Jestem wyczerpany", german: "Ich bin erschöpft", difficulty: "hard", example: "Ich bin völlig erschöpft nach der ganzen Woche harter Arbeit ohne Pause!", exampleTranslation: "Jestem całkowicie wyczerpany po całym tygodniu ciężkiej pracy bez przerwy!" },
      { id: "feel15", polish: "To mnie frustruje", german: "Das frustriert mich", difficulty: "hard", example: "Das frustriert mich wirklich sehr! Ich versuche es schon zum dritten Mal!", exampleTranslation: "To mnie naprawdę bardzo frustruje! Próbuję tego już po raz trzeci!" }
    ]
  },

  daily_routine: {
    name: "Codzienna rutyna",
    description: "Czynności wykonywane każdego dnia",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "rout1", polish: "Budzić się", german: "Aufwachen", difficulty: "easy", example: "Ich wache jeden Morgen um sechs Uhr auf und stehe sofort auf.", exampleTranslation: "Budzę się każdego ranka o szóstej i od razu wstaję." },
      { id: "rout2", polish: "Wstawać", german: "Aufstehen", difficulty: "easy", example: "Ich stehe um sieben Uhr auf und mache dann Frühstück für Familie.", exampleTranslation: "Wstaję o siódmej i potem robię śniadanie dla rodziny." },
      { id: "rout3", polish: "Myć się", german: "Sich waschen", difficulty: "easy", example: "Ich wasche mich jeden Morgen gründlich mit warmem Wasser und Seife.", exampleTranslation: "Myję się każdego ranka dokładnie ciepłą wodą i mydłem." },
      { id: "rout4", polish: "Ubierać się", german: "Sich anziehen", difficulty: "easy", example: "Ich ziehe mich schnell an und gehe dann zur Arbeit mit dem Bus.", exampleTranslation: "Ubieram się szybko i idę do pracy autobusem." },
      { id: "rout5", polish: "Czesać się", german: "Sich kämmen", difficulty: "easy", example: "Ich kämme mir die Haare vor dem Spiegel jeden Morgen sorgfältig.", exampleTranslation: "Czeszę włosy przed lustrem każdego ranka starannie." },
      { id: "rout6", polish: "Myć zęby", german: "Sich die Zähne putzen", difficulty: "easy", example: "Ich putze mir die Zähne dreimal täglich nach jeder Mahlzeit gründlich.", exampleTranslation: "Myję zęby trzy razy dziennie po każdym posiłku dokładnie." },
      { id: "rout7", polish: "Golić się", german: "Sich rasieren", difficulty: "medium", example: "Ich rasiere mich jeden Morgen vor der Arbeit mit einem elektrischen Rasierer.", exampleTranslation: "Golę się każdego ranka przed pracą elektryczną maszynką do golenia." },
      { id: "rout8", polish: "Brać prysznic", german: "Duschen", difficulty: "medium", example: "Ich dusche jeden Morgen mit warmem Wasser für zehn Minuten entspannend.", exampleTranslation: "Biorę prysznic każdego ranka ciepłą wodą przez dziesięć minut relaksująco." },
      { id: "rout9", polish: "Robić śniadanie", german: "Frühstück machen", difficulty: "medium", example: "Ich mache Frühstück für die ganze Familie jeden Tag früh morgens.", exampleTranslation: "Robię śniadanie dla całej rodziny każdego dnia wcześnie rano." },
      { id: "rout10", polish: "Sprzątać", german: "Aufräumen", difficulty: "medium", example: "Ich räume das Zimmer auf und mache alles sauber jeden Samstag gründlich.", exampleTranslation: "Sprzątam pokój i robię wszystko czysto każdej soboty dokładnie." },
      { id: "rout11", polish: "Kłaść się spać", german: "Schlafen gehen", difficulty: "medium", example: "Ich gehe normalerweise um elf Uhr schlafen nach dem Fernsehen müde.", exampleTranslation: "Normalnie kładę się spać o jedenastej po oglądaniu telewizji zmęczony." },
      { id: "rout12", polish: "Wracać do domu", german: "Nach Hause kommen", difficulty: "medium", example: "Ich komme jeden Tag um sechs Uhr nach Hause von der Arbeit müde.", exampleTranslation: "Wracam do domu każdego dnia o szóstej z pracy zmęczony." },
      { id: "rout13", polish: "O której wstajesz?", german: "Wann stehst du auf?", difficulty: "hard", example: "Wann stehst du normalerweise auf während der Woche? Ich stehe um sechs auf!", exampleTranslation: "O której normalnie wstajesz w tygodniu? Wstaję o szóstej!" },
      { id: "rout14", polish: "Idę spać", german: "Ich gehe ins Bett", difficulty: "hard", example: "Ich gehe jetzt ins Bett, weil ich sehr müde bin! Gute Nacht!", exampleTranslation: "Idę teraz spać, bo jestem bardzo zmęczony! Dobranoc!" },
      { id: "rout15", polish: "Muszę się pośpieszyć", german: "Ich muss mich beeilen", difficulty: "hard", example: "Ich muss mich wirklich beeilen! Sonst komme ich zu spät zur Arbeit!", exampleTranslation: "Muszę się naprawdę pośpieszyć! Inaczej spóźnię się do pracy!" }
    ]
  },

  transportation_advanced: {
    name: "Transport zaawansowany",
    description: "Złożone zagadnienia komunikacji i podróży",
    icon: Bus,
    color: "from-orange-500 to-amber-600",
    level: "advanced",
    words: [
      { id: "trans1", polish: "Rozkład jazdy", german: "Fahrplan", difficulty: "easy", example: "Der Fahrplan hängt an der Bushaltestelle und zeigt alle Abfahrtszeiten genau.", exampleTranslation: "Rozkład jazdy wisi na przystanku autobusowym i pokazuje wszystkie godziny odjazdu dokładnie." },
      { id: "trans2", polish: "Peron", german: "Bahnsteig", difficulty: "easy", example: "Der Zug nach Berlin fährt von Bahnsteig drei um acht Uhr ab pünktlich.", exampleTranslation: "Pociąg do Berlina odjeżdża z peronu trzeciego o ósmej punktualnie." },
      { id: "trans3", polish: "Opóźnienie", german: "Verspätung", difficulty: "easy", example: "Der Zug hat zwanzig Minuten Verspätung wegen technischer Probleme leider.", exampleTranslation: "Pociąg ma dwadzieścia minut opóźnienia z powodu problemów technicznych niestety." },
      { id: "trans4", polish: "Przesiadka", german: "Umsteigen", difficulty: "easy", example: "Sie müssen in Frankfurt umsteigen, um nach München zu kommen richtig.", exampleTranslation: "Musi Pan przesiąść się we Frankfurcie, aby dostać się do Monachium prawidłowo." },
      { id: "trans5", polish: "Miejsce", german: "Platz", difficulty: "easy", example: "Ist dieser Platz noch frei oder ist er schon reserviert für jemanden?", exampleTranslation: "Czy to miejsce jest jeszcze wolne czy jest już zarezerwowane dla kogoś?" },
      { id: "trans6", polish: "Rezerwacja", german: "Reservierung", difficulty: "easy", example: "Ich habe eine Reservierung für zwei Plätze im Schnellzug nach Wien gemacht.", exampleTranslation: "Zrobiłem rezerwację na dwa miejsca w pociągu ekspresowym do Wiednia." },
      { id: "trans7", polish: "Wagon", german: "Wagen", difficulty: "medium", example: "Der Speisewagen ist im sechsten Wagen des Zuges nach hinten gelegen.", exampleTranslation: "Wagon restauracyjny znajduje się w szóstym wagonie pociągu z tyłu." },
      { id: "trans8", polish: "Klasa", german: "Klasse", difficulty: "medium", example: "Ich reise immer in der ersten Klasse für mehr Komfort und Ruhe.", exampleTranslation: "Podróżuję zawsze pierwszą klasą dla większego komfortu i spokoju." },
      { id: "trans9", polish: "Odwołany", german: "Gestrichen", difficulty: "medium", example: "Der Flug wurde leider gestrichen wegen schlechten Wetters heute komplett abgesagt.", exampleTranslation: "Lot został niestety odwołany z powodu złej pogody dzisiaj całkowicie anulowany." },
      { id: "trans10", polish: "Bagaż podręczny", german: "Handgepäck", difficulty: "medium", example: "Das Handgepäck darf maximal acht Kilogramm wiegen im Flugzeug nur.", exampleTranslation: "Bagaż podręczny może ważyć maksymalnie osiem kilogramów w samolocie tylko." },
      { id: "trans11", polish: "Odprawa", german: "Check-in", difficulty: "medium", example: "Der Check-in am Flughafen schließt eine Stunde vor Abflug automatisch immer.", exampleTranslation: "Odprawa na lotnisku zamyka się godzinę przed odlotem automatycznie zawsze." },
      { id: "trans12", polish: "Boarding", german: "Einsteigen", difficulty: "medium", example: "Das Einsteigen beginnt dreißig Minuten vor Abflug am Gate fünfzehn pünktlich.", exampleTranslation: "Boarding rozpoczyna się trzydzieści minut przed odlotem przy bramce piętnaście punktualnie." },
      { id: "trans13", polish: "Pociąg ma opóźnienie", german: "Der Zug hat Verspätung", difficulty: "hard", example: "Der Zug hat große Verspätung! Wissen Sie wann er ungefähr ankommt hier?", exampleTranslation: "Pociąg ma duże opóźnienie! Wie Pan kiedy mniej więcej przyjedzie tutaj?" },
      { id: "trans14", polish: "Gdzie mam przesiąść się?", german: "Wo muss ich umsteigen?", difficulty: "hard", example: "Wo genau muss ich umsteigen, um nach Hamburg zu kommen? In welcher Stadt?", exampleTranslation: "Gdzie dokładnie muszę się przesiąść, aby dostać się do Hamburga? W którym mieście?" },
      { id: "trans15", polish: "Czy to bezpośredni?", german: "Ist das eine Direktverbindung?", difficulty: "hard", example: "Ist das eine Direktverbindung oder muss ich unterwegs umsteigen irgendwo mehrmals?", exampleTranslation: "Czy to bezpośrednie połączenie czy muszę przesiadać się po drodze gdzieś wielokrotnie?" }
    ]
  },

  environment_ecology: {
    name: "Środowisko i ekologia",
    description: "Ochrona przyrody i zrównoważony rozwój",
    icon: Leaf,
    color: "from-green-600 to-emerald-700",
    level: "advanced",
    words: [
      { id: "eco1", polish: "Środowisko", german: "Umwelt", difficulty: "easy", example: "Wir müssen die Umwelt schützen für zukünftige Generationen unserer Kinder wichtig.", exampleTranslation: "Musimy chronić środowisko dla przyszłych pokoleń naszych dzieci ważnie." },
      { id: "eco2", polish: "Zanieczyszczenie", german: "Verschmutzung", difficulty: "easy", example: "Die Verschmutzung der Luft ist ein großes Problem in vielen Großstädten weltweit.", exampleTranslation: "Zanieczyszczenie powietrza jest wielkim problemem w wielu dużych miastach na świecie." },
      { id: "eco3", polish: "Recykling", german: "Recycling", difficulty: "easy", example: "Recycling hilft die Umwelt zu schützen und Ressourcen zu sparen effektiv wichtig.", exampleTranslation: "Recykling pomaga chronić środowisko i oszczędzać zasoby efektywnie ważnie." },
      { id: "eco4", polish: "Odpady", german: "Abfall", difficulty: "easy", example: "Der Abfall muss richtig getrennt werden in verschiedene Behälter für Recycling.", exampleTranslation: "Odpady muszą być prawidłowo segregowane do różnych pojemników na recykling." },
      { id: "eco5", polish: "Energia", german: "Energie", difficulty: "easy", example: "Wir nutzen erneuerbare Energie aus Sonne und Wind für unser Haus modern.", exampleTranslation: "Wykorzystujemy energię odnawialną ze słońca i wiatru dla naszego domu nowocześnie." },
      { id: "eco6", polish: "Oszczędzać", german: "Sparen", difficulty: "easy", example: "Wir müssen Wasser und Energie sparen für die Umwelt jeden Tag bewusst.", exampleTranslation: "Musimy oszczędzać wodę i energię dla środowiska każdego dnia świadomie." },
      { id: "eco7", polish: "Zmiana klimatu", german: "Klimawandel", difficulty: "medium", example: "Der Klimawandel ist eine ernste Bedrohung für unseren Planeten weltweit gefährlich besorgniserregend.", exampleTranslation: "Zmiana klimatu jest poważnym zagrożeniem dla naszej planety na świecie niebezpiecznie niepokojąco." },
      { id: "eco8", polish: "Globalne ocieplenie", german: "Globale Erwärmung", difficulty: "medium", example: "Die globale Erwärmung führt zu extremen Wetterbedingungen überall auf der Welt dramatisch.", exampleTranslation: "Globalne ocieplenie prowadzi do ekstremalnych warunków pogodowych wszędzie na świecie dramatycznie." },
      { id: "eco9", polish: "Emisja", german: "Ausstoß", difficulty: "medium", example: "Der Ausstoß von Kohlendioxid muss reduziert werden für bessere Luft dringend schnell.", exampleTranslation: "Emisja dwutlenku węgla musi być zmniejszona dla lepszego powietrza pilnie szybko." },
      { id: "eco10", polish: "Zrównoważony", german: "Nachhaltig", difficulty: "medium", example: "Wir leben nachhaltig und achten auf umweltfreundliche Produkte beim Einkauf immer bewusst.", exampleTranslation: "Żyjemy zrównoważenie i zwracamy uwagę na produkty przyjazne środowisku przy zakupach zawsze świadomie." },
      { id: "eco11", polish: "Gatunki zagrożone", german: "Bedrohte Arten", difficulty: "medium", example: "Viele bedrohte Arten müssen geschützt werden vor dem Aussterben dringend sofort weltweit.", exampleTranslation: "Wiele gatunków zagrożonych musi być chronionych przed wyginięciem pilnie natychmiast na świecie." },
      { id: "eco12", polish: "Ekologiczny", german: "Umweltfreundlich", difficulty: "medium", example: "Diese Verpackung ist umweltfreundlich und biologisch abbaubar für die Natur gut.", exampleTranslation: "To opakowanie jest ekologiczne i biodegradowalne dla natury dobrze." },
      { id: "eco13", polish: "Musimy działać teraz", german: "Wir müssen jetzt handeln", difficulty: "hard", example: "Wir müssen jetzt handeln gegen den Klimawandel! Es ist bereits sehr spät!", exampleTranslation: "Musimy działać teraz przeciw zmianie klimatu! Jest już bardzo późno!" },
      { id: "eco14", polish: "Segreguję odpady", german: "Ich trenne den Müll", difficulty: "hard", example: "Ich trenne den Müll sorgfältig in Papier, Plastik und Glas jeden Tag!", exampleTranslation: "Segreguję odpady starannie na papier, plastik i szkło każdego dnia!" },
      { id: "eco15", polish: "To szkodzi środowisku", german: "Das schadet der Umwelt", difficulty: "hard", example: "Das schadet der Umwelt enorm! Wir sollten umweltfreundliche Alternativen nutzen sofort!", exampleTranslation: "To szkodzi środowisku ogromnie! Powinniśmy używać ekologicznych alternatyw natychmiast!" }
    ]
  },

  personality_traits: {
    name: "Cechy charakteru",
    description: "Osobowość i temperament ludzi",
    icon: UserCircle2,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "pers1", polish: "Miły", german: "Nett", difficulty: "easy", example: "Er ist sehr nett zu allen Menschen und immer hilfsbereit freundlich.", exampleTranslation: "Jest bardzo miły dla wszystkich ludzi i zawsze pomocny przyjaźnie." },
      { id: "pers2", polish: "Przyjazny", german: "Freundlich", difficulty: "easy", example: "Die Verkäuferin war sehr freundlich und hat mir geduldig geholfen beim Einkauf.", exampleTranslation: "Sprzedawczyni była bardzo przyjazna i pomogła mi cierpliwie przy zakupach." },
      { id: "pers3", polish: "Cierpliwy", german: "Geduldig", difficulty: "easy", example: "Man muss sehr geduldig sein beim Unterrichten von kleinen Kindern täglich immer.", exampleTranslation: "Trzeba być bardzo cierpliwym przy nauczaniu małych dzieci codziennie zawsze." },
      { id: "pers4", polish: "Uczciwy", german: "Ehrlich", difficulty: "easy", example: "Er ist ein ehrlicher Mensch und lügt niemals zu anderen Menschen nie.", exampleTranslation: "Jest uczciwym człowiekiem i nigdy nie kłamie innym ludziom wcale." },
      { id: "pers5", polish: "Leniwy", german: "Faul", difficulty: "easy", example: "Mein Bruder ist manchmal faul und macht seine Hausaufgaben nicht pünktlich.", exampleTranslation: "Mój brat jest czasami leniwy i nie odrabia zadań domowych punktualnie." },
      { id: "pers6", polish: "Pracowity", german: "Fleißig", difficulty: "easy", example: "Sie ist sehr fleißig und arbeitet jeden Tag viele Stunden lang konzentriert.", exampleTranslation: "Jest bardzo pracowita i pracuje każdego dnia wiele godzin skupiona." },
      { id: "pers7", polish: "Skromny", german: "Bescheiden", difficulty: "medium", example: "Trotz seines Erfolgs ist er sehr bescheiden geblieben und prahlt nie damit.", exampleTranslation: "Pomimo swojego sukcesu pozostał bardzo skromny i nigdy się tym nie przechwala." },
      { id: "pers8", german: "Arrogant", polish: "Arogancki", difficulty: "medium", example: "Sein arrogantes Verhalten macht ihn bei Kollegen sehr unbeliebt im Büro.", exampleTranslation: "Jego aroganckie zachowanie czyni go bardzo nielubionym wśród kolegów w biurze." },
      { id: "pers9", polish: "Spontaniczny", german: "Spontan", difficulty: "medium", example: "Sie ist sehr spontan und plant selten etwas im Voraus für Überraschungen.", exampleTranslation: "Jest bardzo spontaniczna i rzadko coś planuje z wyprzedzeniem dla niespodzianek." },
      { id: "pers10", polish: "Wiarygodny", german: "Zuverlässig", difficulty: "medium", example: "Er ist sehr zuverlässig und man kann sich immer auf ihn verlassen komplett.", exampleTranslation: "Jest bardzo wiarygodny i zawsze można na nim polegać całkowicie." },
      { id: "pers11", polish: "Ambitny", german: "Ehrgeizig", difficulty: "medium", example: "Sie ist sehr ehrgeizig und möchte in ihrer Karriere weit kommen hoch hinaus.", exampleTranslation: "Jest bardzo ambitna i chce daleko zajść w swojej karierze wysoko." },
      { id: "pers12", polish: "Optymistyczny", german: "Optimistisch", difficulty: "medium", example: "Er ist immer optimistisch auch in schwierigen Situationen positiv eingestellt fröhlich.", exampleTranslation: "Jest zawsze optymistyczny nawet w trudnych sytuacjach pozytywnie nastawiony wesoło." },
      { id: "pers13", polish: "Jest bardzo uprzejmy", german: "Er ist sehr höflich", difficulty: "hard", example: "Er ist außerordentlich höflich zu allen Menschen! Ein wirklich angenehmer Mensch!", exampleTranslation: "Jest nadzwyczaj uprzejmy dla wszystkich ludzi! Naprawdę przyjemny człowiek!" },
      { id: "pers14", polish: "Ma dobry charakter", german: "Er hat einen guten Charakter", difficulty: "hard", example: "Er hat wirklich einen sehr guten Charakter! Man fühlt sich wohl in seiner Gesellschaft!", exampleTranslation: "Ma naprawdę bardzo dobry charakter! Czuje się dobrze w jego towarzystwie!" },
      { id: "pers15", polish: "Można na nim polegać", german: "Man kann sich auf ihn verlassen", difficulty: "hard", example: "Man kann sich hundertprozentig auf ihn verlassen! Er enttäuscht niemals seine Freunde!", exampleTranslation: "Można na nim polegać w stu procentach! Nigdy nie zawodzi swoich przyjaciół!" }
    ]
  },

  complaints_problems: {
    name: "Reklamacje i problemy",
    description: "Zgłaszanie usterek i zastrzeżeń",
    icon: AlertCircle,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { id: "comp1", polish: "Problem", german: "Problem", difficulty: "easy", example: "Ich habe ein Problem mit diesem Produkt, es funktioniert nicht richtig.", exampleTranslation: "Mam problem z tym produktem, nie działa prawidłowo." },
      { id: "comp2", polish: "Reklamacja", german: "Beschwerde", difficulty: "easy", example: "Ich möchte eine Beschwerde einreichen wegen des schlechten Service hier heute.", exampleTranslation: "Chcę złożyć reklamację z powodu złego serwisu tutaj dzisiaj." },
      { id: "comp3", polish: "Uszkodzony", german: "Beschädigt", difficulty: "easy", example: "Das Produkt kam beschädigt an, ich möchte es umtauschen sofort bitte.", exampleTranslation: "Produkt przyszedł uszkodzony, chcę go wymienić natychmiast proszę." },
      { id: "comp4", polish: "Zepsuty", german: "Kaputt", difficulty: "easy", example: "Der Fernseher ist kaputt gegangen nach nur drei Monaten Benutzung schon.", exampleTranslation: "Telewizor się zepsuł po tylko trzech miesiącach użytkowania już." },
      { id: "comp5", polish: "Zwrot", german: "Rückgabe", difficulty: "easy", example: "Ich möchte dieses Produkt zurückgeben und mein Geld zurückbekommen bitte.", exampleTranslation: "Chcę zwrócić ten produkt i odzyskać moje pieniądze proszę." },
      { id: "pers6", polish: "Wymiana", german: "Umtausch", difficulty: "easy", example: "Ist ein Umtausch möglich innerhalb von vierzehn Tagen nach dem Kauf?", exampleTranslation: "Czy wymiana jest możliwa w ciągu czternastu dni po zakupie?" },
      { id: "comp7", polish: "Gwarancja", german: "Garantie", difficulty: "medium", example: "Das Gerät hat noch zwei Jahre Garantie vom Hersteller ab Kaufdatum.", exampleTranslation: "Urządzenie ma jeszcze dwa lata gwarancji od producenta od daty zakupu." },
      { id: "comp8", polish: "Naprawa", german: "Reparatur", difficulty: "medium", example: "Die Reparatur dauert etwa eine Woche und kostet hundert Euro ungefähr schätzungsweise.", exampleTranslation: "Naprawa trwa około tydzień i kosztuje sto euro mniej więcej szacunkowo." },
      { id: "comp9", polish: "Zwrot kosztów", german: "Rückerstattung", difficulty: "medium", example: "Ich verlange eine vollständige Rückerstattung des Kaufpreises wegen des Defekts sofort!", exampleTranslation: "Żądam pełnego zwrotu kosztów zakupu z powodu defektu natychmiast!" },
      { id: "comp10", polish: "Usterka", german: "Mangel", difficulty: "medium", example: "Das Produkt hat einen schweren Mangel und entspricht nicht der Beschreibung komplett.", exampleTranslation: "Produkt ma poważną usterkę i nie odpowiada opisowi całkowicie." },
      { id: "comp11", polish: "Książka reklamacji", german: "Beschwerdebuch", difficulty: "medium", example: "Ich möchte eine Eintragung ins Beschwerdebuch machen wegen schlechter Bedienung heute.", exampleTranslation: "Chcę dokonać wpisu do książki reklamacji z powodu złej obsługi dzisiaj." },
      { id: "comp12", polish: "Kierownik", german: "Geschäftsführer", difficulty: "medium", example: "Ich möchte mit dem Geschäftsführer sprechen über dieses Problem sofort persönlich.", exampleTranslation: "Chcę porozmawiać z kierownikiem o tym problemie natychmiast osobiście." },
      { id: "comp13", polish: "To nie działa", german: "Das funktioniert nicht", difficulty: "hard", example: "Das funktioniert überhaupt nicht richtig! Ich möchte mein Geld zurück sofort!", exampleTranslation: "To w ogóle nie działa prawidłowo! Chcę zwrotu pieniędzy natychmiast!" },
      { id: "comp14", polish: "Chcę zwrot pieniędzy", german: "Ich möchte eine Rückerstattung", difficulty: "hard", example: "Ich möchte eine vollständige Rückerstattung! Dieses Produkt ist unbrauchbar komplett!", exampleTranslation: "Chcę pełnego zwrotu pieniędzy! Ten produkt jest bezużyteczny całkowicie!" },
      { id: "comp15", polish: "To inaczej niż na zdjęciu", german: "Das sieht anders aus als auf dem Bild", difficulty: "hard", example: "Das sieht völlig anders aus als auf dem Bild! Das ist irreführende Werbung!", exampleTranslation: "To wygląda zupełnie inaczej niż na zdjęciu! To wprowadzająca w błąd reklama!" }
    ]
  },

  weather_advanced: {
    name: "Pogoda zaawansowana",
    description: "Zjawiska atmosferyczne i prognoza pogody",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "weath1", polish: "Prognoza", german: "Vorhersage", difficulty: "easy", example: "Die Wettervorhersage für morgen sagt Regen und Wind voraus den ganzen Tag.", exampleTranslation: "Prognoza pogody na jutro przewiduje deszcz i wiatr przez cały dzień." },
      { id: "weath2", polish: "Temperatura", german: "Temperatur", difficulty: "easy", example: "Die Temperatur steigt auf dreißig Grad im Schatten heute Nachmittag heiß.", exampleTranslation: "Temperatura wzrośnie do trzydziestu stopni w cieniu dzisiaj po południu gorąco." },
      { id: "weath3", polish: "Burza", german: "Gewitter", difficulty: "easy", example: "Das Gewitter kommt heute Abend mit starkem Regen und Blitzen gefährlich laut.", exampleTranslation: "Burza nadchodzi dzisiaj wieczorem z silnym deszczem i błyskawicami niebezpiecznie głośno." },
      { id: "weath4", polish: "Grad", german: "Hagel", difficulty: "easy", example: "Der Hagel hat gestern viele Autos beschädigt auf der Straße stark.", exampleTranslation: "Grad wczoraj uszkodził wiele samochodów na ulicy mocno." },
      { id: "weath5", polish: "Mgła", german: "Nebel", difficulty: "easy", example: "Dichter Nebel macht das Fahren sehr gefährlich auf den Straßen heute Morgen.", exampleTranslation: "Gęsta mgła czyni jazdę bardzo niebezpieczną na drogach dzisiaj rano." },
      { id: "weath6", polish: "Mróz", german: "Frost", difficulty: "easy", example: "Heute Nacht gibt es Frost, die Temperatur fällt unter null Grad kalt.", exampleTranslation: "Dzisiejszej nocy będzie mróz, temperatura spadnie poniżej zera stopni zimno." },
      { id: "weath7", polish: "Piorun", german: "Blitz", difficulty: "medium", example: "Der Blitz hat in einen Baum eingeschlagen während des Gewitters gestern Abend.", exampleTranslation: "Piorun uderzył w drzewo podczas burzy wczoraj wieczorem." },
      { id: "weath8", german: "Donner", polish: "Grzmot", difficulty: "medium", example: "Der Donner war so laut, dass alle Kinder erschrocken sind sehr.", exampleTranslation: "Grzmot był tak głośny, że wszystkie dzieci się przestraszyły bardzo." },
      { id: "weath9", polish: "Tęcza", german: "Regenbogen", difficulty: "medium", example: "Nach dem Regen erschien ein wunderschöner Regenbogen am Himmel bunt leuchtend.", exampleTranslation: "Po deszczu pojawiła się piękna tęcza na niebie kolorowo świecąca." },
      { id: "weath10", polish: "Powódź", german: "Überschwemmung", difficulty: "medium", example: "Die Überschwemmung hat viele Häuser unter Wasser gesetzt nach starkem Regen.", exampleTranslation: "Powódź zalała wiele domów pod wodą po silnym deszczu." },
      { id: "weath11", polish: "Susza", german: "Dürre", difficulty: "medium", example: "Die lange Dürre hat der Landwirtschaft großen Schaden zugefügt dieses Jahr.", exampleTranslation: "Długa susza wyrządziła wielkie szkody rolnictwu w tym roku." },
      { id: "weath12", polish: "Wilgotność", german: "Luftfeuchtigkeit", difficulty: "medium", example: "Die Luftfeuchtigkeit ist sehr hoch heute, es fühlt sich schwül an draußen.", exampleTranslation: "Wilgotność powietrza jest bardzo wysoka dzisiaj, czuje się parno na zewnątrz." },
      { id: "weath13", polish: "Jaka będzie pogoda?", german: "Wie wird das Wetter?", difficulty: "hard", example: "Wie wird das Wetter morgen? Soll ich einen Regenschirm mitnehmen sicherheitshalber?", exampleTranslation: "Jaka będzie pogoda jutro? Czy powinienem wziąć parasol na wszelki wypadek?" },
      { id: "weath14", polish: "Zapowiada się burza", german: "Es wird ein Gewitter geben", difficulty: "hard", example: "Es wird heute Abend ein heftiges Gewitter geben! Bleib besser zu Hause!", exampleTranslation: "Dzisiaj wieczorem będzie silna burza! Lepiej zostań w domu!" },
      { id: "weath15", polish: "Temperatura spada", german: "Die Temperatur sinkt", difficulty: "hard", example: "Die Temperatur sinkt rapide! Zieh dich warm an, sonst erkältest du dich!", exampleTranslation: "Temperatura gwałtownie spada! Ubierz się ciepło, inaczej się przeziębisz!" }
    ]
  },

  social_issues: {
    name: "Problemy społeczne",
    description: "Kwestie społeczne i obywatelskie",
    icon: Users,
    color: "from-slate-600 to-gray-700",
    level: "advanced",
    words: [
      { id: "soc1", polish: "Społeczeństwo", german: "Gesellschaft", difficulty: "easy", example: "Die Gesellschaft verändert sich ständig durch technologischen Fortschritt schnell weltweit.", exampleTranslation: "Społeczeństwo zmienia się ciągle przez postęp technologiczny szybko na świecie." },
      { id: "soc2", polish: "Równość", german: "Gleichheit", difficulty: "easy", example: "Gleichheit vor dem Gesetz ist ein grundlegendes Menschenrecht für alle Menschen.", exampleTranslation: "Równość wobec prawa jest podstawowym prawem człowieka dla wszystkich ludzi." },
      { id: "soc3", polish: "Sprawiedliwość", german: "Gerechtigkeit", difficulty: "easy", example: "Soziale Gerechtigkeit ist wichtig für ein harmonisches Zusammenleben aller Menschen.", exampleTranslation: "Sprawiedliwość społeczna jest ważna dla harmonijnego współżycia wszystkich ludzi." },
      { id: "soc4", polish: "Ubóstwo", german: "Armut", difficulty: "easy", example: "Armut ist ein großes Problem in vielen Ländern der Welt leider noch.", exampleTranslation: "Ubóstwo jest wielkim problemem w wielu krajach świata niestety jeszcze." },
      { id: "soc5", polish: "Bezrobocie", german: "Arbeitslosigkeit", difficulty: "easy", example: "Die Arbeitslosigkeit ist in dieser Region sehr hoch und steigt weiter leider.", exampleTranslation: "Bezrobocie w tym regionie jest bardzo wysokie i dalej rośnie niestety." },
      { id: "soc6", polish: "Edukacja", german: "Bildung", difficulty: "easy", example: "Gute Bildung ist der Schlüssel zum Erfolg im Leben für junge Menschen.", exampleTranslation: "Dobra edukacja jest kluczem do sukcesu w życiu dla młodych ludzi." },
      { id: "soc7", polish: "Dyskryminacja", german: "Diskriminierung", difficulty: "medium", example: "Diskriminierung aus irgendeinem Grund ist inakzeptabel und muss bekämpft werden energisch.", exampleTranslation: "Dyskryminacja z jakiegokolwiek powodu jest niedopuszczalna i musi być zwalczana energicznie." },
      { id: "soc8", polish: "Tolerancja", german: "Toleranz", difficulty: "medium", example: "Toleranz gegenüber anderen Kulturen ist sehr wichtig in unserer globalisierten Welt.", exampleTranslation: "Tolerancja wobec innych kultur jest bardzo ważna w naszym zglobalizowanym świecie." },
      { id: "soc9", polish: "Integracja", german: "Integration", difficulty: "medium", example: "Die Integration von Einwanderern ist eine wichtige Aufgabe für die Gesellschaft.", exampleTranslation: "Integracja imigrantów jest ważnym zadaniem dla społeczeństwa." },
      { id: "soc10", polish: "Wolność", german: "Freiheit", difficulty: "medium", example: "Die Freiheit der Meinungsäußerung ist ein fundamentales Recht in Demokratien weltweit.", exampleTranslation: "Wolność wypowiedzi jest fundamentalnym prawem w demokracjach na świecie." },
      { id: "soc11", polish: "Prawa człowieka", german: "Menschenrechte", difficulty: "medium", example: "Die Menschenrechte müssen überall auf der Welt respektiert werden immer unbedingt.", exampleTranslation: "Prawa człowieka muszą być wszędzie na świecie szanowane zawsze koniecznie." },
      { id: "soc12", polish: "Solidarność", german: "Solidarität", difficulty: "medium", example: "Solidarität mit benachteiligten Menschen ist wichtig für eine gerechte Gesellschaft.", exampleTranslation: "Solidarność z ludźmi w niekorzystnej sytuacji jest ważna dla sprawiedliwego społeczeństwa." },
      { id: "soc13", polish: "To niesprawiedliwe", german: "Das ist ungerecht", difficulty: "hard", example: "Das ist völlig ungerecht! Alle Menschen sollten gleich behandelt werden immer!", exampleTranslation: "To całkowicie niesprawiedliwe! Wszyscy ludzie powinni być traktowani równo zawsze!" },
      { id: "soc14", polish: "Musimy coś zrobić", german: "Wir müssen etwas tun", difficulty: "hard", example: "Wir müssen wirklich etwas tun gegen diese Ungerechtigkeit! Das kann nicht so weitergehen!", exampleTranslation: "Musimy naprawdę coś zrobić przeciw tej niesprawiedliwości! To nie może tak dalej trwać!" },
      { id: "soc15", polish: "Wspieramy tę sprawę", german: "Wir unterstützen diese Sache", difficulty: "hard", example: "Wir unterstützen diese wichtige Sache von ganzem Herzen! Das ist sehr bedeutend!", exampleTranslation: "Wspieramy tę ważną sprawę z całego serca! To bardzo znaczące!" }
    ]
  },

  cooking_baking: {
    name: "Gotowanie i pieczenie",
    description: "Przygotowywanie potraw i wypieków",
    icon: ChefHat,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "cook1", polish: "Gotować", german: "Kochen", difficulty: "easy", example: "Ich koche jeden Tag frische Mahlzeiten für meine Familie zu Hause gerne.", exampleTranslation: "Gotuję każdego dnia świeże posiłki dla mojej rodziny w domu chętnie." },
      { id: "cook2", polish: "Piec", german: "Backen", difficulty: "easy", example: "Ich backe am Wochenende gerne Kuchen und Kekse für die Kinder süß.", exampleTranslation: "Piekę w weekendy chętnie ciasta i ciasteczka dla dzieci słodkie." },
      { id: "cook3", polish: "Smażyć", german: "Braten", difficulty: "easy", example: "Ich brate das Fleisch in der Pfanne mit etwas Öl goldbraun.", exampleTranslation: "Smażę mięso na patelni z odrobiną oleju na złotobrązowo." },
      { id: "cook4", polish: "Mieszać", german: "Rühren", difficulty: "easy", example: "Rühre die Soße ständig, damit sie nicht anbrennt am Boden.", exampleTranslation: "Mieszaj sos ciągle, aby nie przypalił się na dnie." },
      { id: "cook5", polish: "Kroić", german: "Schneiden", difficulty: "easy", example: "Schneide das Gemüse in kleine Stücke für die Suppe gleichmäßig.", exampleTranslation: "Pokrój warzywa na małe kawałki do zupy równomiernie." },
      { id: "cook6", polish: "Przyprawy", german: "Gewürze", difficulty: "easy", example: "Die Gewürze geben dem Essen einen besonderen Geschmack würzig aromatisch.", exampleTranslation: "Przyprawy nadają jedzeniu szczególny smak pikantnie aromatycznie." },
      { id: "cook7", polish: "Przepis", german: "Rezept", difficulty: "medium", example: "Ich folge dem Rezept genau Schritt für Schritt für perfektes Ergebnis.", exampleTranslation: "Postępuję według przepisu dokładnie krok po kroku dla idealnego rezultatu." },
      { id: "cook8", polish: "Składniki", german: "Zutaten", difficulty: "medium", example: "Alle Zutaten für den Kuchen müssen frisch sein für besten Geschmack.", exampleTranslation: "Wszystkie składniki do ciasta muszą być świeże dla najlepszego smaku." },
      { id: "cook9", polish: "Ugotować", german: "Garen", difficulty: "medium", example: "Das Fleisch muss zwei Stunden bei niedriger Temperatur garen langsam weich.", exampleTranslation: "Mięso musi być gotowane dwie godziny w niskiej temperaturze wolno miękko." },
      { id: "cook10", polish: "Piekarnik", german: "Backofen", difficulty: "medium", example: "Heize den Backofen auf hundertachtzig Grad vor für das Backen richtig.", exampleTranslation: "Rozgrzej piekarnik do stu osiemdziesięciu stopni wstępnie do pieczenia prawidłowo." },
      { id: "cook11", polish: "Marynować", german: "Marinieren", difficulty: "medium", example: "Man sollte das Fleisch über Nacht marinieren für intensiveren Geschmack besser.", exampleTranslation: "Należy marynować mięso przez noc dla intensywniejszego smaku lepiej." },
      { id: "cook12", polish: "Doprawić", german: "Würzen", difficulty: "medium", example: "Würzen Sie das Gericht nach Geschmack mit Salz und Pfeffer vorsichtig.", exampleTranslation: "Dopraw danie według smaku solą i pieprzem ostrożnie." },
      { id: "cook13", polish: "Jak to się robi?", german: "Wie macht man das?", difficulty: "hard", example: "Wie macht man dieses Gericht genau? Kannst du mir das Rezept geben bitte?", exampleTranslation: "Jak dokładnie robi się to danie? Możesz mi dać przepis proszę?" },
      { id: "cook14", polish: "Przypalało się", german: "Es ist angebrannt", difficulty: "hard", example: "Oh nein, es ist angebrannt! Ich habe nicht aufgepasst beim Kochen!", exampleTranslation: "O nie, przypalało się! Nie uważałem podczas gotowania!" },
      { id: "cook15", polish: "Wyszło pysznie", german: "Es ist köstlich geworden", difficulty: "hard", example: "Es ist wirklich köstlich geworden! Das beste Gericht, das ich je gemacht habe!", exampleTranslation: "Wyszło naprawdę pysznie! Najlepsze danie, jakie kiedykolwiek zrobiłem!" }
    ]
  },

  time_expressions: {
    name: "Wyrażenia czasowe",
    description: "Określenia czasu i dat",
    icon: Clock,
    color: "from-indigo-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "time1", polish: "Wczoraj", german: "Gestern", difficulty: "easy", example: "Gestern war ich im Kino und habe einen tollen Film gesehen spannend.", exampleTranslation: "Wczoraj byłem w kinie i widziałem wspaniały film ekscytujący." },
      { id: "time2", polish: "Dzisiaj", german: "Heute", difficulty: "easy", example: "Heute ist ein schöner Tag mit warmem Sonnenschein den ganzen Tag.", exampleTranslation: "Dzisiaj jest piękny dzień z ciepłym słońcem przez cały dzień." },
      { id: "time3", polish: "Jutro", german: "Morgen", difficulty: "easy", example: "Morgen fahre ich mit dem Zug nach Hamburg für ein Meeting wichtig.", exampleTranslation: "Jutro jadę pociągiem do Hamburga na ważne spotkanie." },
      { id: "time4", polish: "Teraz", german: "Jetzt", difficulty: "easy", example: "Ich muss jetzt sofort gehen, sonst verpasse ich den Bus!", exampleTranslation: "Muszę iść teraz natychmiast, inaczej spóźnię się na autobus!" },
      { id: "time5", polish: "Później", german: "Später", difficulty: "easy", example: "Ich rufe dich später an, wenn ich mehr Zeit habe zum Reden.", exampleTranslation: "Zadzwonię do ciebie później, gdy będę miał więcej czasu do rozmowy." },
      { id: "time6", polish: "Wcześniej", german: "Früher", difficulty: "easy", example: "Früher bin ich jeden Tag joggen gegangen, jetzt leider nicht mehr.", exampleTranslation: "Wcześniej chodziłem biegać każdego dnia, teraz niestety już nie." },
      { id: "time7", polish: "Przedwczoraj", german: "Vorgestern", difficulty: "medium", example: "Vorgestern habe ich meine alte Freundin aus der Schule getroffen zufällig.", exampleTranslation: "Przedwczoraj spotkałem moją starą przyjaciółkę ze szkoły przypadkowo." },
      { id: "time8", polish: "Pojutrze", german: "Übermorgen", difficulty: "medium", example: "Übermorgen fliegen wir in den Urlaub nach Spanien für zwei Wochen.", exampleTranslation: "Pojutrze lecimy na wakacje do Hiszpanii na dwa tygodnie." },
      { id: "time9", polish: "W przyszłym tygodniu", german: "Nächste Woche", difficulty: "medium", example: "Nächste Woche habe ich einen wichtigen Termin beim Arzt am Montag.", exampleTranslation: "W przyszłym tygodniu mam ważne spotkanie u lekarza w poniedziałek." },
      { id: "time10", polish: "W zeszłym miesiącu", german: "Letzten Monat", difficulty: "medium", example: "Letzten Monat waren wir in Italien und haben eine tolle Zeit gehabt.", exampleTranslation: "W zeszłym miesiącu byliśmy we Włoszech i świetnie się bawiliśmy." },
      { id: "time11", polish: "Za chwilę", german: "Gleich", difficulty: "medium", example: "Ich komme gleich, warte bitte noch einen kleinen Moment auf mich!", exampleTranslation: "Przyjdę za chwilę, poczekaj proszę jeszcze mały moment na mnie!" },
      { id: "time12", polish: "Niedawno", german: "Neulich", difficulty: "medium", example: "Neulich habe ich einen interessanten Artikel über Klimawandel gelesen in Zeitung.", exampleTranslation: "Niedawno przeczytałem ciekawy artykuł o zmianie klimatu w gazecie." },
      { id: "time13", polish: "Kiedy to było?", german: "Wann war das?", difficulty: "hard", example: "Wann genau war das? Kannst du dich noch daran erinnern an Datum?", exampleTranslation: "Kiedy dokładnie to było? Pamiętasz jeszcze datę?" },
      { id: "time14", polish: "Dawno temu", german: "Vor langer Zeit", difficulty: "hard", example: "Das war schon vor sehr langer Zeit! Ich kann mich kaum erinnern daran!", exampleTranslation: "To było już bardzo dawno temu! Ledwo mogę to pamiętać!" },
      { id: "time15", polish: "Od jak dawna?", german: "Seit wann?", difficulty: "hard", example: "Seit wann genau wohnst du hier in dieser Stadt? Schon viele Jahre?", exampleTranslation: "Od kiedy dokładnie mieszkasz tutaj w tym mieście? Już wiele lat?" }
    ]
  },

  sports_activities: {
    name: "Sport i aktywność fizyczna",
    description: "Dyscypliny sportowe i ćwiczenia",
    icon: Activity,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "sport1", polish: "Piłka nożna", german: "Fußball", difficulty: "easy", example: "Fußball ist der beliebteste Sport in Deutschland und ganz Europa weltweit.", exampleTranslation: "Piłka nożna jest najpopularniejszym sportem w Niemczech i całej Europie na świecie." },
      { id: "sport2", polish: "Biegać", german: "Laufen", difficulty: "easy", example: "Ich gehe jeden Morgen laufen im Park für eine Stunde gesund.", exampleTranslation: "Chodzę biegać każdego ranka w parku przez godzinę zdrowo." },
      { id: "sport3", polish: "Pływać", german: "Schwimmen", difficulty: "easy", example: "Ich schwimme zweimal pro Woche im Hallenbad für Fitness regelmäßig.", exampleTranslation: "Pływam dwa razy w tygodniu na krytej pływalni dla kondycji regularnie." },
      { id: "sport4", polish: "Siłownia", german: "Fitnessstudio", difficulty: "easy", example: "Ich gehe dreimal wöchentlich ins Fitnessstudio zum Krafttraining intensiv hart.", exampleTranslation: "Chodzę trzy razy w tygodniu na siłownię na trening siłowy intensywnie ciężko." },
      { id: "sport5", polish: "Trening", german: "Training", difficulty: "easy", example: "Das Training heute war sehr anstrengend und ich bin müde jetzt sehr.", exampleTranslation: "Trening dzisiaj był bardzo wyczerpujący i jestem zmęczony teraz bardzo." },
      { id: "sport6", polish: "Mecz", german: "Spiel", difficulty: "easy", example: "Das Spiel beginnt um acht Uhr abends im großen Stadion pünktlich.", exampleTranslation: "Mecz zaczyna się o ósmej wieczorem na dużym stadionie punktualnie." },
      { id: "sport7", polish: "Drużyna", german: "Mannschaft", difficulty: "medium", example: "Unsere Mannschaft hat das wichtige Spiel gestern Abend gewonnen deutlich klar!", exampleTranslation: "Nasza drużyna wygrała wczoraj wieczorem ważny mecz wyraźnie jasno!" },
      { id: "sport8", polish: "Trener", german: "Trainer", difficulty: "medium", example: "Der Trainer ist sehr streng aber auch fair zu allen Spielern immer.", exampleTranslation: "Trener jest bardzo surowy ale także sprawiedliwy dla wszystkich graczy zawsze." },
      { id: "sport9", polish: "Zawodnik", german: "Spieler", difficulty: "medium", example: "Der Spieler ist sehr talentiert und spielt für die Nationalmannschaft stolz.", exampleTranslation: "Zawodnik jest bardzo utalentowany i gra dla reprezentacji narodowej dumnie." },
      { id: "sport10", polish: "Wynik", german: "Ergebnis", difficulty: "medium", example: "Das Ergebnis des Spiels war drei zu zwei für unsere Mannschaft perfekt!", exampleTranslation: "Wynik meczu był trzy do dwóch dla naszej drużyny idealnie!" },
      { id: "sport11", polish: "Rozgrzewka", german: "Aufwärmen", difficulty: "medium", example: "Man muss sich vor dem Sport gut aufwärmen zur Vermeidung von Verletzungen.", exampleTranslation: "Trzeba się dobrze rozgrzać przed sportem dla uniknięcia kontuzji." },
      { id: "sport12", polish: "Kontuzja", german: "Verletzung", difficulty: "medium", example: "Er hat sich eine Verletzung zugezogen beim Training und muss pausieren leider.", exampleTranslation: "Odniósł kontuzję podczas treningu i musi pauzować niestety." },
      { id: "sport13", polish: "Uprawiam sport", german: "Ich treibe Sport", difficulty: "hard", example: "Ich treibe regelmäßig Sport für meine Gesundheit! Mindestens viermal pro Woche!", exampleTranslation: "Uprawiam regularnie sport dla mojego zdrowia! Przynajmniej cztery razy w tygodniu!" },
      { id: "sport14", polish: "Kto wygrał?", german: "Wer hat gewonnen?", difficulty: "hard", example: "Wer hat das Spiel gestern gewonnen? Ich konnte es leider nicht sehen!", exampleTranslation: "Kto wygrał wczorajszy mecz? Niestety nie mogłem go zobaczyć!" },
      { id: "sport15", polish: "Gram w piłkę", german: "Ich spiele Fußball", difficulty: "hard", example: "Ich spiele seit zehn Jahren Fußball in einem Verein! Es ist meine Leidenschaft!", exampleTranslation: "Gram w piłkę od dziesięciu lat w klubie! To moja pasja!" }
    ]
  },

  animals_wildlife: {
    name: "Zwierzęta i dzika przyroda",
    description: "Fauna i gatunki zwierząt",
    icon: Leaf,
    color: "from-emerald-500 to-green-600",
    level: "beginner",
    words: [
      { id: "anim1", polish: "Pies", german: "Hund", difficulty: "easy", example: "Mein Hund ist sehr treu und begleitet mich überall hin jeden Tag.", exampleTranslation: "Mój pies jest bardzo wierny i towarzyszy mi wszędzie każdego dnia." },
      { id: "anim2", polish: "Kot", german: "Katze", difficulty: "easy", example: "Die Katze schläft den ganzen Tag auf dem Sofa gemütlich faul.", exampleTranslation: "Kot śpi cały dzień na kanapie przytulnie leniwie." },
      { id: "anim3", polish: "Ptak", german: "Vogel", difficulty: "easy", example: "Der Vogel singt wunderschön am Morgen im Baum vor dem Fenster.", exampleTranslation: "Ptak śpiewa pięknie rano na drzewie przed oknem." },
      { id: "anim4", polish: "Ryba", german: "Fisch", difficulty: "easy", example: "Die Fische schwimmen schnell im klaren Wasser des Sees herum.", exampleTranslation: "Ryby pływają szybko w czystej wodzie jeziora dookoła." },
      { id: "anim5", polish: "Koń", german: "Pferd", difficulty: "easy", example: "Das Pferd galoppiert schnell über die grüne Wiese frei wild.", exampleTranslation: "Koń galopuje szybko przez zieloną łąkę swobodnie dziko." },
      { id: "anim6", polish: "Krowa", german: "Kuh", difficulty: "easy", example: "Die Kühe grasen friedlich auf der Weide den ganzen Tag ruhig.", exampleTranslation: "Krowy pasą się spokojnie na pastwisku cały dzień cicho." },
      { id: "anim7", polish: "Niedźwiedź", german: "Bär", difficulty: "medium", example: "Der Bär ist ein gefährliches Wildtier und lebt im dichten Wald versteckt.", exampleTranslation: "Niedźwiedź jest niebezpiecznym dzikim zwierzęciem i żyje w gęstym lesie ukryty." },
      { id: "anim8", polish: "Wilk", german: "Wolf", difficulty: "medium", example: "Der Wolf jagt nachts in Rudeln durch die verschneiten Wälder lautlos geschickt.", exampleTranslation: "Wilk poluje nocami w watahach przez śnieżne lasy bezgłośnie zręcznie." },
      { id: "anim9", polish: "Lis", german: "Fuchs", difficulty: "medium", example: "Der Fuchs ist ein schlaues Tier und stiehlt manchmal Hühner nachts heimlich.", exampleTranslation: "Lis jest mądrym zwierzęciem i czasami kradnie kury nocami potajemnie." },
      { id: "anim10", polish: "Jeleń", german: "Hirsch", difficulty: "medium", example: "Der majestätische Hirsch steht am Waldrand mit seinem großen Geweih stolz.", exampleTranslation: "Majestatyczny jeleń stoi na skraju lasu ze swoimi dużymi rogami dumnie." },
      { id: "anim11", polish: "Wiewiórka", german: "Eichhörnchen", difficulty: "medium", example: "Das Eichhörnchen sammelt Nüsse für den Winter und versteckt sie überall.", exampleTranslation: "Wiewiórka zbiera orzechy na zimę i chowa je wszędzie." },
      { id: "anim12", polish: "Motyl", german: "Schmetterling", difficulty: "medium", example: "Der bunte Schmetterling fliegt von Blume zu Blume im Garten leicht.", exampleTranslation: "Kolorowy motyl fruwa od kwiatu do kwiatu w ogrodzie lekko." },
      { id: "anim13", polish: "Mam psa", german: "Ich habe einen Hund", difficulty: "hard", example: "Ich habe einen großen Hund zu Hause! Er ist sehr lieb und treu!", exampleTranslation: "Mam dużego psa w domu! Jest bardzo miły i wierny!" },
      { id: "anim14", polish: "Lubię zwierzęta", german: "Ich mag Tiere", difficulty: "hard", example: "Ich mag alle Tiere sehr! Besonders Hunde und Katzen sind meine Lieblinge!", exampleTranslation: "Bardzo lubię wszystkie zwierzęta! Szczególnie psy i koty są moimi ulubieńcami!" },
      { id: "anim15", polish: "Widziałem dzikiego jelenia", german: "Ich habe einen wilden Hirsch gesehen", difficulty: "hard", example: "Ich habe gestern einen wilden Hirsch im Wald gesehen! Das war beeindruckend!", exampleTranslation: "Widziałem wczoraj dzikiego jelenia w lesie! To było imponujące!" }
    ]
  },

  computer_internet: {
    name: "Komputer i internet",
    description: "Technologia cyfrowa i świat online",
    icon: Monitor,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "comp1", polish: "Komputer", german: "Computer", difficulty: "easy", example: "Ich arbeite den ganzen Tag am Computer im Büro für Firma.", exampleTranslation: "Pracuję cały dzień przy komputerze w biurze dla firmy." },
      { id: "comp2", polish: "Internet", german: "Internet", difficulty: "easy", example: "Das Internet funktioniert heute nicht, ich kann nicht arbeiten leider.", exampleTranslation: "Internet dzisiaj nie działa, nie mogę pracować niestety." },
      { id: "comp3", polish: "E-mail", german: "E-Mail", difficulty: "easy", example: "Ich schicke dir eine E-Mail mit allen wichtigen Informationen heute Abend.", exampleTranslation: "Wysyłam ci e-mail ze wszystkimi ważnymi informacjami dzisiaj wieczorem." },
      { id: "comp4", polish: "Strona internetowa", german: "Webseite", difficulty: "easy", example: "Die Webseite ist sehr übersichtlich gestaltet und leicht zu bedienen modern.", exampleTranslation: "Strona internetowa jest bardzo przejrzyście zaprojektowana i łatwa w obsłudze nowocześnie." },
      { id: "comp5", polish: "Hasło", german: "Passwort", difficulty: "easy", example: "Ich habe mein Passwort vergessen und kann mich nicht einloggen jetzt.", exampleTranslation: "Zapomniałem mojego hasła i nie mogę się zalogować teraz." },
      { id: "comp6", polish: "Plik", german: "Datei", difficulty: "easy", example: "Ich schicke dir die Datei per E-Mail noch heute Abend zu.", exampleTranslation: "Wysyłam ci plik e-mailem jeszcze dzisiaj wieczorem." },
      { id: "comp7", polish: "Pobierać", german: "Herunterladen", difficulty: "medium", example: "Ich lade das Programm von der offiziellen Webseite herunter sicher kostenlos.", exampleTranslation: "Pobieram program z oficjalnej strony bezpiecznie bezpłatnie." },
      { id: "comp8", polish: "Wysyłać", german: "Senden", difficulty: "medium", example: "Ich sende dir die Fotos über WhatsApp oder per E-Mail schnell jetzt.", exampleTranslation: "Wysyłam ci zdjęcia przez WhatsApp lub e-mailem szybko teraz." },
      { id: "comp9", polish: "Przeglądarka", german: "Browser", difficulty: "medium", example: "Welchen Browser benutzt du zum Surfen im Internet normalerweise täglich?", exampleTranslation: "Której przeglądarki używasz do przeglądania internetu normalnie codziennie?" },
      { id: "comp10", polish: "Wyszukiwarka", german: "Suchmaschine", difficulty: "medium", example: "Ich benutze Google als Suchmaschine für alle meine Recherchen im Internet.", exampleTranslation: "Używam Google jako wyszukiwarki do wszystkich moich poszukiwań w internecie." },
      { id: "comp11", polish: "Zalogować się", german: "Sich einloggen", difficulty: "medium", example: "Ich kann mich nicht einloggen, weil das Passwort falsch ist wahrscheinlich.", exampleTranslation: "Nie mogę się zalogować, bo hasło jest prawdopodobnie błędne." },
      { id: "comp12", polish: "Wylogować się", german: "Sich ausloggen", difficulty: "medium", example: "Vergiss nicht dich auszuloggen, wenn du einen öffentlichen Computer benutzt!", exampleTranslation: "Nie zapomnij się wylogować, gdy używasz publicznego komputera!" },
      { id: "comp13", polish: "Internet nie działa", german: "Das Internet funktioniert nicht", difficulty: "hard", example: "Das Internet funktioniert schon seit Stunden nicht! Wann wird es repariert?", exampleTranslation: "Internet nie działa już od godzin! Kiedy zostanie naprawiony?" },
      { id: "comp14", polish: "Nie mogę się zalogować", german: "Ich kann mich nicht einloggen", difficulty: "hard", example: "Ich kann mich nicht einloggen! Das Passwort ist korrekt aber es geht nicht!", exampleTranslation: "Nie mogę się zalogować! Hasło jest poprawne ale nie idzie!" },
      { id: "comp15", polish: "Wyślij mi to mailem", german: "Schick mir das per E-Mail", difficulty: "hard", example: "Schick mir das bitte per E-Mail! Meine Adresse hast du ja schon!", exampleTranslation: "Wyślij mi to proszę mailem! Mój adres już masz!" }
    ]
  },

  personal_hygiene: {
    name: "Higiena osobista",
    description: "Dbanie o czystość i pielęgnacja",
    icon: Heart, // Reusing Heart for personal hygiene
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "hyg1", polish: "Mydło", german: "Seife", difficulty: "easy", example: "Wasch dir die Hände gründlich mit Seife vor dem Essen immer.", exampleTranslation: "Umyj ręce dokładnie mydłem przed jedzeniem zawsze." },
      { id: "hyg2", polish: "Szampon", german: "Shampoo", difficulty: "easy", example: "Ich wasche meine Haare zweimal pro Woche mit speziellem Shampoo.", exampleTranslation: "Myję włosy dwa razy w tygodniu specjalnym szamponem." },
      { id: "hyg3", polish: "Pasta do zębów", german: "Zahnpasta", difficulty: "easy", example: "Diese Zahnpasta schmeckt nach Minze und macht die Zähne weiß.", exampleTranslation: "Ta pasta do zębów smakuje miętą i czyni zęby białymi." },
      { id: "hyg4", polish: "Szczoteczka do zębów", german: "Zahnbürste", difficulty: "easy", example: "Ich wechsle meine Zahnbürste alle drei Monate regelmäßig für Hygiene.", exampleTranslation: "Zmieniam szczoteczkę do zębów co trzy miesiące regularnie dla higieny." },
      { id: "hyg5", polish: "Ręcznik", german: "Handtuch", difficulty: "easy", example: "Das Handtuch ist weich und flauschig nach dem Waschen frisch.", exampleTranslation: "Ręcznik jest miękki i puszysty po praniu świeży." },
      { id: "hyg6", polish: "Dezodorant", german: "Deodorant", difficulty: "easy", example: "Ich benutze jeden Morgen Deodorant nach dem Duschen für Frische.", exampleTranslation: "Używam każdego ranka dezodorantu po prysznicu dla świeżości." },
      { id: "hyg7", polish: "Kąpiel", german: "Bad", difficulty: "medium", example: "Ein warmes Bad am Abend ist sehr entspannend nach stressigem Tag.", exampleTranslation: "Ciepła kąpiel wieczorem jest bardzo relaksująca po stresującym dniu." },
      { id: "hyg8", polish: "Prysznic", german: "Dusche", difficulty: "medium", example: "Ich nehme jeden Morgen eine erfrischende Dusche mit kaltem Wasser belebend.", exampleTranslation: "Biorę każdego ranka odświeżający prysznic zimną wodą ożywiająco." },
      { id: "hyg9", polish: "Krem", german: "Creme", difficulty: "medium", example: "Ich benutze Gesichtscreme jeden Abend für gesunde Haut pflegend regelmäßig.", exampleTranslation: "Używam kremu do twarzy każdego wieczoru dla zdrowej skóry pielęgnująco regularnie." },
      { id: "hyg10", polish: "Balsam", german: "Balsam", difficulty: "medium", example: "Der Balsam macht die Haare weich und glänzend nach Haarwäsche.", exampleTranslation: "Balsam czyni włosy miękkimi i błyszczącymi po myciu włosów." },
      { id: "hyg11", polish: "Perfumy", german: "Parfüm", difficulty: "medium", example: "Sie trägt immer ein teures französisches Parfüm das wunderbar duftet elegant.", exampleTranslation: "Ona zawsze nosi drogie francuskie perfumy które wspaniale pachną elegancko." },
      { id: "hyg12", polish: "Grzebień", german: "Kamm", difficulty: "medium", example: "Ich kämme meine Haare mit einem feinen Kamm jeden Morgen sorgfältig.", exampleTranslation: "Czeszę włosy drobnym grzebieniem każdego ranka starannie." },
      { id: "hyg13", polish: "Gdzie jest mydło?", german: "Wo ist die Seife?", difficulty: "hard", example: "Wo ist die Seife? Ich muss mir dringend die Hände waschen jetzt!", exampleTranslation: "Gdzie jest mydło? Muszę pilnie umyć ręce teraz!" },
      { id: "hyg14", polish: "Prysznic jest zepsuty", german: "Die Dusche ist kaputt", difficulty: "hard", example: "Die Dusche ist leider kaputt! Wann kommt der Installateur zum Reparieren?", exampleTranslation: "Prysznic jest niestety zepsuty! Kiedy przyjdzie hydraulik do naprawy?" },
      { id: "hyg15", polish: "Skończyła się pasta", german: "Die Zahnpasta ist alle", difficulty: "hard", example: "Die Zahnpasta ist alle! Kannst du neue kaufen auf dem Weg nach Hause?", exampleTranslation: "Skończyła się pasta do zębów! Możesz kupić nową w drodze do domu?" }
    ]
  }
};
