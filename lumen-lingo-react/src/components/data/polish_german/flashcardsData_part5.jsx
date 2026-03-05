
/**
 * POLISH → GERMAN FLASHCARDS - PART 5
 * 
 * Native Language: Polish (Polski)
 * Target Language: German (Deutsch)
 * 
 * This file contains additional flashcard categories (51-60).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Cloud,
  FileText,
  Globe,
  Palette,
  Car,
  Heart,
  Clock,
  HelpCircle,
  ChefHat,
  Sun,
  Building,
  Star,
  Gift,
  Coffee
} from "lucide-react";

export const flashcardsCategories_part5 = {
  weather_phenomena: {
    name: "Zjawiska pogodowe",
    description: "Szczegółowe zjawiska atmosferyczne",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "weath1", polish: "Burza", german: "Gewitter", difficulty: "easy", example: "Das Gewitter kommt näher mit lauten Donner und hellen Blitzen am Himmel.", exampleTranslation: "Burza zbliża się z głośnym grzmotem i jasnymi błyskawicami na niebie." },
      { id: "weath2", polish: "Błyskawica", german: "Blitz", difficulty: "easy", example: "Der Blitz erhellt den ganzen Himmel für einen kurzen Moment hell.", exampleTranslation: "Błyskawica rozświetla całe niebo na krótką chwilę jasno." },
      { id: "weath3", polish: "Grzmot", german: "Donner", difficulty: "easy", example: "Der Donner ist so laut, dass die Fenster im Haus zittern stark.", exampleTranslation: "Grzmot jest tak głośny, że okna w domu trzęsą się mocno." },
      { id: "weath4", polish: "Mgła", german: "Nebel", difficulty: "easy", example: "Der dichte Nebel macht das Fahren sehr gefährlich auf der Straße heute.", exampleTranslation: "Gęsta mgła czyni jazdę bardzo niebezpieczną na drodze dzisiaj." },
      { id: "weath5", polish: "Grad", german: "Hagel", difficulty: "easy", example: "Der Hagel hat mein Auto beschädigt mit vielen kleinen Dellen überall.", exampleTranslation: "Grad uszkodził mój samochód wieloma małymi wgnieceniami wszędzie." },
      { id: "weath6", polish: "Tęcza", german: "Regenbogen", difficulty: "easy", example: "Nach dem Regen erscheint ein wunderschöner Regenbogen am Himmel bunt.", exampleTranslation: "Po deszczu pojawia się piękna tęcza na niebie kolorowa." },
      { id: "weath7", polish: "Zamieć", german: "Schneesturm", difficulty: "medium", example: "Der Schneesturm ist so stark, dass man nichts sehen kann draußen.", exampleTranslation: "Zamieć śnieżna jest tak silna, że nic nie widać na zewnątrz." },
      { id: "weath8", polish: "Wilgotność", german: "Feuchtigkeit", difficulty: "medium", example: "Die hohe Feuchtigkeit macht die Hitze noch unangenehmer im Sommer sehr.", exampleTranslation: "Wysoka wilgotność czyni upał jeszcze bardziej nieprzyjemnym latem bardzo." },
      { id: "weath9", polish: "Tornado", german: "Tornado", difficulty: "medium", example: "Der Tornado hat viele Häuser zerstört mit seiner enormen Kraft gestern.", exampleTranslation: "Tornado zniszczył wiele domów swoją ogromną siłą wczoraj." },
      { id: "weath10", polish: "Powódź", german: "Überschwemmung", difficulty: "medium", example: "Die Überschwemmung nach starkem Regen hat viele Straßen überflutet komplett.", exampleTranslation: "Powódź po silnym deszczu zalała wiele ulic całkowicie." },
      { id: "weath11", polish: "Susza", german: "Dürre", difficulty: "medium", example: "Die Dürre dauert schon drei Monate und die Pflanzen sterben langsam.", exampleTranslation: "Susza trwa już trzy miesiące i rośliny powoli umierają." },
      { id: "weath12", polish: "Ulewa", german: "Platzregen", difficulty: "medium", example: "Der plötzliche Platzregen hat uns völlig durchnässt auf dem Weg nach Hause.", exampleTranslation: "Nagła ulewa całkowicie nas przemoczyła w drodze do domu." },
      { id: "weath13", polish: "Nadchodzi burza", german: "Ein Gewitter zieht auf", difficulty: "hard", example: "Ein starkes Gewitter zieht auf! Wir sollten schnell ins Haus gehen sofort!", exampleTranslation: "Nadchodzi silna burza! Powinniśmy szybko wejść do domu natychmiast!" },
      { id: "weath14", polish: "Deszcz leje jak z cebra", german: "Es regnet in Strömen", difficulty: "hard", example: "Es regnet in Strömen! Ich werde total nass wenn ich rausgehe jetzt!", exampleTranslation: "Deszcz leje jak z cebra! Całkiem zmoknę jeśli wyjdę teraz!" },
      { id: "weath15", polish: "Pogoda się poprawia", german: "Das Wetter bessert sich", difficulty: "hard", example: "Das Wetter bessert sich endlich! Die Sonne kommt durch die Wolken langsam!", exampleTranslation: "Pogoda się w końcu poprawia! Słońce przebija się przez chmury powoli!" }
    ]
  },

  documents_paperwork: {
    name: "Dokumenty i papiery",
    description: "Ważne dokumenty i formalności",
    icon: FileText,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "doc1", polish: "Dokument", german: "Dokument", difficulty: "easy", example: "Ich brauche alle wichtigen Dokumente für den Termin bei der Behörde morgen.", exampleTranslation: "Potrzebuję wszystkich ważnych dokumentów na spotkanie w urzędzie jutro." },
      { id: "doc2", polish: "Paszport", german: "Reisepass", difficulty: "easy", example: "Mein Reisepass ist abgelaufen, ich muss einen neuen beantragen sofort schnell.", exampleTranslation: "Mój paszport wygasł, muszę złożyć wniosek o nowy natychmiast szybko." },
      { id: "doc3", polish: "Dowód osobisty", german: "Personalausweis", difficulty: "easy", example: "Zeigen Sie bitte Ihren Personalausweis vor der Kontrolle beim Eingang hier.", exampleTranslation: "Proszę pokazać dowód osobisty przed kontrolą przy wejściu tutaj." },
      { id: "doc4", polish: "Podpis", german: "Unterschrift", difficulty: "easy", example: "Bitte setzen Sie hier Ihre Unterschrift auf das offizielle Dokument unten.", exampleTranslation: "Proszę złożyć tutaj swój podpis na oficjalnym dokumencie na dole." },
      { id: "doc5", polish: "Formularz", german: "Formular", difficulty: "easy", example: "Füllen Sie bitte dieses Formular vollständig aus mit allen persönlichen Daten.", exampleTranslation: "Proszę wypełnić ten formularz całkowicie wszystkimi danymi osobowymi." },
      { id: "doc6", polish: "Umowa", german: "Vertrag", difficulty: "easy", example: "Lesen Sie den Vertrag sorgfältig durch, bevor Sie ihn unterschreiben heute.", exampleTranslation: "Przeczytaj umowę starannie, zanim ją podpiszesz dzisiaj." },
      { id: "doc7", polish: "Zaświadczenie", german: "Bescheinigung", difficulty: "medium", example: "Ich benötige eine ärztliche Bescheinigung für den Arbeitgeber vom Doktor heute.", exampleTranslation: "Potrzebuję zaświadczenia lekarskiego dla pracodawcy od doktora dzisiaj." },
      { id: "doc8", polish: "Wniosek", german: "Antrag", difficulty: "medium", example: "Der Antrag muss bis Ende des Monats eingereicht werden beim Amt pünktlich.", exampleTranslation: "Wniosek musi być złożony do końca miesiąca w urzędzie punktualnie." },
      { id: "doc9", polish: "Upoważnienie", german: "Vollmacht", difficulty: "medium", example: "Ich gebe Ihnen eine Vollmacht für alle finanziellen Entscheidungen offiziell schriftlich.", exampleTranslation: "Daję Panu upoważnienie do wszystkich decyzji finansowych oficjalnie pisemnie." },
      { id: "doc10", polish: "Świadectwo", german: "Zeugnis", difficulty: "medium", example: "Das Schulzeugnis zeigt alle Noten des letzten Semesters detailliert genau.", exampleTranslation: "Świadectwo szkolne pokazuje wszystkie oceny z ostatniego semestru szczegółowo dokładnie." },
      { id: "doc11", polish: "Potwierdzenie", german: "Bestätigung", difficulty: "medium", example: "Ich habe die Bestätigung per E-Mail für die Hotelreservierung erhalten gestern.", exampleTranslation: "Otrzymałem potwierdzenie emailem rezerwacji hotelowej wczoraj." },
      { id: "doc12", polish: "Faktura", german: "Rechnung", difficulty: "medium", example: "Die Rechnung muss innerhalb von vierzehn Tagen bezahlt werden pünktlich bitte.", exampleTranslation: "Faktura musi być opłacona w ciągu czternastu dni punktualnie proszę." },
      { id: "doc13", polish: "Muszę wypełnić formularz", german: "Ich muss das Formular ausfüllen", difficulty: "hard", example: "Ich muss dieses komplizierte Formular ausfüllen, aber ich verstehe es nicht gut!", exampleTranslation: "Muszę wypełnić ten skomplikowany formularz, ale nie rozumiem go dobrze!" },
      { id: "doc14", polish: "Gdzie mam podpisać?", german: "Wo soll ich unterschreiben?", difficulty: "hard", example: "Wo genau soll ich unterschreiben auf diesem Dokument? Hier oder dort unten?", exampleTranslation: "Gdzie dokładnie mam podpisać na tym dokumencie? Tutaj czy tam na dole?" },
      { id: "doc15", polish: "Potrzebuję kserokopii", german: "Ich brauche eine Kopie", difficulty: "hard", example: "Ich brauche eine beglaubigte Kopie meines Diploms für die Bewerbung dringend!", exampleTranslation: "Potrzebuję poświadczonej kserokopii mojego dyplomu do aplikacji pilnie!" }
    ]
  },

  internet_social_media: {
    name: "Internet i media społecznościowe",
    description: "Sieć i komunikacja online",
    icon: Globe,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "net1", polish: "Internet", german: "Internet", difficulty: "easy", example: "Das Internet ist langsam heute, ich kann keine Videos laden schnell.", exampleTranslation: "Internet jest wolny dzisiaj, nie mogę załadować filmów szybko." },
      { id: "net2", polish: "E-mail", german: "E-Mail", difficulty: "easy", example: "Ich schicke dir eine E-Mail mit allen wichtigen Informationen heute Abend.", exampleTranslation: "Wysyłam ci e-mail ze wszystkimi ważnymi informacjami dzisiaj wieczorem." },
      { id: "net3", polish: "Hasło", german: "Passwort", difficulty: "easy", example: "Mein Passwort muss aus mindestens acht Zeichen bestehen für Sicherheit.", exampleTranslation: "Moje hasło musi składać się z co najmniej ośmiu znaków dla bezpieczeństwa." },
      { id: "net4", polish: "Konto", german: "Account", difficulty: "easy", example: "Ich habe einen Account auf dieser Plattform seit drei Jahren schon.", exampleTranslation: "Mam konto na tej platformie od trzech lat już." },
      { id: "net5", polish: "Wysłać", german: "Senden", difficulty: "easy", example: "Ich sende dir die Fotos gleich per E-Mail heute noch schnell.", exampleTranslation: "Wysyłam ci zdjęcia zaraz emailem jeszcze dzisiaj szybko." },
      { id: "net6", polish: "Pobrać", german: "Downloaden", difficulty: "easy", example: "Ich downloade die neue App auf mein Smartphone für bessere Nutzung.", exampleTranslation: "Pobieram nową aplikację na mój smartfon dla lepszego użytkowania." },
      { id: "net7", polish: "Udostępnić", german: "Teilen", difficulty: "medium", example: "Ich teile interessante Artikel in sozialen Netzwerken mit meinen Freunden oft.", exampleTranslation: "Udostępniam ciekawe artykuły w mediach społecznościowych moim przyjaciołom często." },
      { id: "net8", polish: "Polubić", german: "Liken", difficulty: "medium", example: "Ich like deine Fotos auf Instagram, sie sind wirklich sehr schön!", exampleTranslation: "Polubiam twoje zdjęcia na Instagramie, są naprawdę bardzo piękne!" },
      { id: "net9", polish: "Komentarz", german: "Kommentar", difficulty: "medium", example: "Schreib bitte einen Kommentar unter meinen Beitrag auf Facebook heute!", exampleTranslation: "Napisz proszę komentarz pod moim postem na Facebooku dzisiaj!" },
      { id: "net10", polish: "Obserwować", german: "Folgen", difficulty: "medium", example: "Ich folge vielen interessanten Leuten auf Twitter für aktuelle Informationen täglich.", exampleTranslation: "Obserwuję wielu ciekawych ludzi na Twitterze dla aktualnych informacji codziennie." },
      { id: "net11", polish: "Profil", german: "Profil", difficulty: "medium", example: "Mein Profil auf LinkedIn ist aktuell mit allen beruflichen Informationen vollständig.", exampleTranslation: "Mój profil na LinkedIn jest aktualny ze wszystkimi informacjami zawodowymi kompletny." },
      { id: "net12", polish: "Wyszukiwarka", german: "Suchmaschine", difficulty: "medium", example: "Ich benutze die Suchmaschine Google für alle meine Recherchen im Internet.", exampleTranslation: "Używam wyszukiwarki Google do wszystkich moich poszukiwań w internecie." },
      { id: "net13", polish: "Zapomniałem hasła", german: "Ich habe das Passwort vergessen", difficulty: "hard", example: "Ich habe mein Passwort vergessen! Wie kann ich es zurücksetzen schnell?", exampleTranslation: "Zapomniałem mojego hasła! Jak mogę je zresetować szybko?" },
      { id: "net14", polish: "Sprawdź swoją pocztę", german: "Check deine E-Mails", difficulty: "hard", example: "Check bitte deine E-Mails! Ich habe dir wichtige Informationen geschickt heute!", exampleTranslation: "Sprawdź proszę swoją pocztę! Wysłałem ci ważne informacje dzisiaj!" },
      { id: "net15", polish: "Internet nie działa", german: "Das Internet funktioniert nicht", difficulty: "hard", example: "Das Internet funktioniert nicht! Ich kann mich nicht verbinden mit dem WLAN!", exampleTranslation: "Internet nie działa! Nie mogę się połączyć z WiFi!" }
    ]
  },

  hobbies_crafts: {
    name: "Hobby i rękodzieło",
    description: "Pasje twórcze i zajęcia artystyczne",
    icon: Palette,
    color: "from-pink-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "hob1", polish: "Rysować", german: "Zeichnen", difficulty: "easy", example: "Ich zeichne gerne in meiner Freizeit Landschaften und Porträts sorgfältig.", exampleTranslation: "Lubię rysować w wolnym czasie krajobrazy i portrety starannie." },
      { id: "hob2", polish: "Malować", german: "Malen", difficulty: "easy", example: "Meine Schwester malt wunderschöne Bilder mit Ölfarben auf Leinwand künstlerisch.", exampleTranslation: "Moja siostra maluje piękne obrazy farbami olejnymi na płótnie artystycznie." },
      { id: "hob3", polish: "Farba", german: "Farbe", difficulty: "easy", example: "Ich kaufe neue Farben in verschiedenen Tönen für mein Kunstprojekt heute.", exampleTranslation: "Kupuję nowe farby w różnych odcieniach na mój projekt artystyczny dzisiaj." },
      { id: "hob4", polish: "Pędzel", german: "Pinsel", difficulty: "easy", example: "Mit einem feinen Pinsel male ich die kleinen Details im Bild präzise.", exampleTranslation: "Cienkim pędzlem maluję małe detale w obrazie precyzyjnie." },
      { id: "hob5", polish: "Płótno", german: "Leinwand", difficulty: "easy", example: "Die Leinwand ist groß und perfekt für ein Gemälde geeignet ideal.", exampleTranslation: "Płótno jest duże i idealne do malowania obrazu idealnie." },
      { id: "hob6", polish: "Robótki ręczne", german: "Handarbeit", difficulty: "easy", example: "Meine Oma macht schöne Handarbeit wie Stricken und Häkeln täglich gerne.", exampleTranslation: "Moja babcia robi piękne robótki ręczne jak dzierganie i szydełkowanie codziennie chętnie." },
      { id: "hob7", polish: "Dziergać", german: "Stricken", difficulty: "medium", example: "Ich stricke einen warmen Schal für den Winter mit dicker Wolle gemütlich.", exampleTranslation: "Dziergam ciepły szalik na zimę z grubej wełny przytulnie." },
      { id: "hob8", polish: "Szyć", german: "Nähen", difficulty: "medium", example: "Meine Mutter näht ihre Kleidung selbst mit der Nähmaschine zu Hause.", exampleTranslation: "Moja mama szyje swoje ubrania sama maszyną do szycia w domu." },
      { id: "hob9", polish: "Haftować", german: "Sticken", difficulty: "medium", example: "Das Sticken erfordert viel Geduld und Präzision für schöne Muster genau.", exampleTranslation: "Haftowanie wymaga dużo cierpliwości i precyzji dla pięknych wzorów dokładnie." },
      { id: "hob10", polish: "Kleić", german: "Kleben", difficulty: "medium", example: "Ich klebe die Fotos ins Album mit speziellem Fotokleber sorgfältig ein.", exampleTranslation: "Wklejam zdjęcia do albumu specjalnym klejem fotograficznym starannie." },
      { id: "hob11", polish: "Origami", german: "Origami", difficulty: "medium", example: "Origami ist die japanische Kunst des Papierfaltens sehr präzise und kreativ.", exampleTranslation: "Origami to japońska sztuka składania papieru bardzo precyzyjna i kreatywna." },
      { id: "hob12", polish: "Modelarstwo", german: "Modellbau", difficulty: "medium", example: "Der Modellbau von Flugzeugen ist mein Hobby seit vielen Jahren schon.", exampleTranslation: "Modelarstwo samolotów to moje hobby od wielu lat już." },
      { id: "hob13", polish: "To moja pasja", german: "Das ist meine Leidenschaft", difficulty: "hard", example: "Das ist wirklich meine große Leidenschaft! Ich könnte stundenlang daran arbeiten!", exampleTranslation: "To naprawdę moja wielka pasja! Mógłbym nad tym pracować godzinami!" },
      { id: "hob14", polish: "Uczę się tego", german: "Ich lerne das gerade", difficulty: "hard", example: "Ich lerne das gerade erst! Kannst du mir ein paar Tipps geben?", exampleTranslation: "Dopiero się tego uczę! Możesz mi dać kilka wskazówek?" },
      { id: "hob15", polish: "Robię to dla relaksu", german: "Ich mache das zur Entspannung", difficulty: "hard", example: "Ich mache das zur Entspannung nach einem stressigen Arbeitstag immer gerne.", exampleTranslation: "Robię to dla relaksu po stresującym dniu pracy zawsze chętnie." }
    ]
  },

  car_driving: {
    name: "Samochód i jazda",
    description: "Pojazdy, prowadzenie i ruch drogowy",
    icon: Car,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "car1", polish: "Samochód", german: "Auto", difficulty: "easy", example: "Mein Auto ist neu und sehr sparsam im Benzinverbrauch für Stadt.", exampleTranslation: "Mój samochód jest nowy i bardzo oszczędny w zużyciu benzyny dla miasta." },
      { id: "car2", polish: "Prowadzić", german: "Fahren", difficulty: "easy", example: "Ich fahre jeden Tag mit dem Auto zur Arbeit eine Stunde lang.", exampleTranslation: "Jeżdżę każdego dnia samochodem do pracy przez godzinę." },
      { id: "car3", polish: "Prawo jazdy", german: "Führerschein", difficulty: "easy", example: "Ich habe meinen Führerschein mit achtzehn Jahren bekommen nach Prüfung erfolgreich.", exampleTranslation: "Otrzymałem prawo jazdy w wieku osiemnastu lat po egzaminie pomyślnie." },
      { id: "car4", polish: "Benzyna", german: "Benzin", difficulty: "easy", example: "Ich muss tanken, das Benzin wird knapp im Tank fast leer.", exampleTranslation: "Muszę zatankować, benzyna się kończy w baku prawie pusta." },
      { id: "car5", polish: "Parkować", german: "Parken", difficulty: "easy", example: "Hier darf man nicht parken, das ist eine Halteverbotszone streng verboten!", exampleTranslation: "Tutaj nie wolno parkować, to jest strefa zakazu postoju surowo zabroniona!" },
      { id: "car6", polish: "Korek", german: "Stau", difficulty: "easy", example: "Es gibt einen langen Stau auf der Autobahn wegen Unfall heute Morgen.", exampleTranslation: "Jest długi korek na autostradzie z powodu wypadku dzisiaj rano." },
      { id: "car7", polish: "Silnik", german: "Motor", difficulty: "medium", example: "Der Motor macht komische Geräusche, ich muss zur Werkstatt fahren bald.", exampleTranslation: "Silnik wydaje dziwne dźwięki, muszę jechać do warsztatu wkrótce." },
      { id: "car8", polish: "Hamulec", german: "Bremse", difficulty: "medium", example: "Die Bremsen funktionieren nicht richtig, das ist sehr gefährlich beim Fahren!", exampleTranslation: "Hamulce nie działają prawidłowo, to bardzo niebezpieczne podczas jazdy!" },
      { id: "car9", polish: "Kierownica", german: "Lenkrad", difficulty: "medium", example: "Halt das Lenkrad fest mit beiden Händen beim Fahren immer sicher!", exampleTranslation: "Trzymaj kierownicę mocno obiema rękami podczas jazdy zawsze bezpiecznie!" },
      { id: "car10", polish: "Pas bezpieczeństwa", german: "Sicherheitsgurt", difficulty: "medium", example: "Legen Sie bitte den Sicherheitsgurt an, bevor wir losfahren zur Sicherheit!", exampleTranslation: "Proszę zapiąć pas bezpieczeństwa, zanim ruszymy dla bezpieczeństwa!" },
      { id: "car11", polish: "Autostrada", german: "Autobahn", difficulty: "medium", example: "Auf der Autobahn kann man schnell fahren ohne Geschwindigkeitsbegrenzung teilweise.", exampleTranslation: "Na autostradzie można jechać szybko bez ograniczenia prędkości częściowo." },
      { id: "car12", polish: "Mandat", german: "Strafzettel", difficulty: "medium", example: "Ich habe einen Strafzettel bekommen wegen zu schnellen Fahrens gestern leider.", exampleTranslation: "Dostałem mandat za zbyt szybką jazdę wczoraj niestety." },
      { id: "car13", polish: "Muszę zatankować", german: "Ich muss tanken", difficulty: "hard", example: "Ich muss dringend tanken, die Tankanzeige zeigt schon fast leer an!", exampleTranslation: "Muszę pilnie zatankować, wskaźnik paliwa pokazuje już prawie pusty!" },
      { id: "car14", polish: "Gdzie jest stacja benzynowa?", german: "Wo ist die Tankstelle?", difficulty: "hard", example: "Wo ist die nächste Tankstelle von hier? Mein Tank ist fast leer!", exampleTranslation: "Gdzie jest najbliższa stacja benzynowa stąd? Mój bak jest prawie pusty!" },
      { id: "car15", polish: "Samochód się zepsuł", german: "Das Auto ist kaputt gegangen", difficulty: "hard", example: "Das Auto ist mitten auf der Autobahn kaputt gegangen! Was soll ich machen?", exampleTranslation: "Samochód zepsuł się w środku autostrady! Co mam zrobić?" }
    ]
  },

  feelings_states: {
    name: "Uczucia i stany",
    description: "Emocje, nastroje i samopoczucie",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "feel1", polish: "Szczęśliwy", german: "Glücklich", difficulty: "easy", example: "Ich bin sehr glücklich heute, weil ich gute Nachrichten bekommen habe!", exampleTranslation: "Jestem bardzo szczęśliwy dzisiaj, bo dostałem dobre wiadomości!" },
      { id: "feel2", polish: "Smutny", german: "Traurig", difficulty: "easy", example: "Ich bin traurig, weil mein bester Freund weggezogen ist weit weg.", exampleTranslation: "Jestem smutny, bo mój najlepszy przyjaciel się wyprowadził daleko." },
      { id: "feel3", polish: "Zły", german: "Wütend", difficulty: "easy", example: "Ich bin wütend auf dich, weil du mich angelogen hast gestern!", exampleTranslation: "Jestem zły na ciebie, bo mnie okłamałeś wczoraj!" },
      { id: "feel4", polish: "Zmęczony", german: "Müde", difficulty: "easy", example: "Ich bin so müde nach der langen Arbeit den ganzen Tag heute.", exampleTranslation: "Jestem taki zmęczony po długiej pracy cały dzień dzisiaj." },
      { id: "feel5", polish: "Podekscytowany", german: "Aufgeregt", difficulty: "easy", example: "Ich bin sehr aufgeregt vor der Reise nach Paris morgen früh!", exampleTranslation: "Jestem bardzo podekscytowany przed podróżą do Paryża jutro rano!" },
      { id: "feel6", polish: "Zdenerwowany", german: "Nervös", difficulty: "easy", example: "Ich bin nervös vor der wichtigen Prüfung morgen sehr stark.", exampleTranslation: "Jestem zdenerwowany przed ważnym egzaminem jutro bardzo mocno." },
      { id: "feel7", polish: "Dumny", german: "Stolz", difficulty: "medium", example: "Ich bin sehr stolz auf meine Tochter für ihre Erfolge in Schule!", exampleTranslation: "Jestem bardzo dumny z mojej córki za jej sukcesy w szkole!" },
      { id: "feel8", polish: "Zazdrosny", german: "Eifersüchtig", difficulty: "medium", example: "Er ist eifersüchtig auf seinen Bruder wegen des neuen Autos immer.", exampleTranslation: "Jest zazdrosny o swojego brata z powodu nowego samochodu zawsze." },
      { id: "feel9", polish: "Samotny", german: "Einsam", difficulty: "medium", example: "Ich fühle mich einsam in der neuen Stadt ohne Freunde hier.", exampleTranslation: "Czuję się samotny w nowym mieście bez przyjaciół tutaj." },
      { id: "feel10", polish: "Zaskoczony", german: "Überrascht", difficulty: "medium", example: "Ich war sehr überrascht von der unerwarteten Geburtstagsparty für mich gestern!", exampleTranslation: "Byłem bardzo zaskoczony niespodziewaną imprezą urodzinową dla mnie wczoraj!" },
      { id: "feel11", polish: "Rozczarowany", german: "Enttäuscht", difficulty: "medium", example: "Ich bin enttäuscht vom Ergebnis der Prüfung, ich hatte mehr erwartet.", exampleTranslation: "Jestem rozczarowany wynikiem egzaminu, spodziewałem się więcej." },
      { id: "feel12", polish: "Spokojny", german: "Ruhig", difficulty: "medium", example: "Ich fühle mich ruhig und entspannt nach der Meditation am Morgen.", exampleTranslation: "Czuję się spokojny i zrelaksowany po medytacji rano." },
      { id: "feel13", polish: "Jak się czujesz?", german: "Wie fühlst du dich?", difficulty: "hard", example: "Wie fühlst du dich heute? Du siehst etwas müde und erschöpft aus!", exampleTranslation: "Jak się czujesz dzisiaj? Wyglądasz trochę zmęczony i wyczerpany!" },
      { id: "feel14", polish: "Czuję się wspaniale", german: "Ich fühle mich großartig", difficulty: "hard", example: "Ich fühle mich heute großartig! Ich habe viel Energie und gute Laune!", exampleTranslation: "Czuję się dzisiaj wspaniale! Mam dużo energii i dobry nastrój!" },
      { id: "feel15", polish: "Nie mogę się doczekać", german: "Ich kann es kaum erwarten", difficulty: "hard", example: "Ich kann es kaum erwarten bis zum Urlaub! Nur noch drei Tage!", exampleTranslation: "Nie mogę się doczekać urlopu! Tylko jeszcze trzy dni!" }
    ]
  },

  time_expressions: {
    name: "Wyrażenia czasowe",
    description: "Określenia czasu i częstotliwości",
    icon: Clock,
    color: "from-indigo-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "time1", polish: "Wczoraj", german: "Gestern", difficulty: "easy", example: "Gestern war ich im Kino und habe einen tollen Film gesehen.", exampleTranslation: "Wczoraj byłem w kinie i obejrzałem świetny film." },
      { id: "time2", polish: "Dziś", german: "Heute", difficulty: "easy", example: "Heute ist ein wunderschöner Tag mit strahlendem Sonnenschein draußen überall.", exampleTranslation: "Dzisiaj jest piękny dzień z promieniującym słońcem na zewnątrz wszędzie." },
      { id: "time3", polish: "Jutro", german: "Morgen", difficulty: "easy", example: "Morgen habe ich einen wichtigen Termin beim Arzt früh um neun.", exampleTranslation: "Jutro mam ważne spotkanie u lekarza wcześnie o dziewiątej." },
      { id: "time4", polish: "Zawsze", german: "Immer", difficulty: "easy", example: "Ich trinke immer Kaffee zum Frühstück jeden Morgen ohne Ausnahme.", exampleTranslation: "Zawsze piję kawę na śniadanie każdego ranka bez wyjątku." },
      { id: "time5", polish: "Nigdy", german: "Nie", difficulty: "easy", example: "Ich bin noch nie in Amerika gewesen, möchte aber gerne reisen.", exampleTranslation: "Nigdy nie byłem w Ameryce, ale chciałbym pojechać." },
      { id: "time6", polish: "Czasami", german: "Manchmal", difficulty: "easy", example: "Manchmal gehe ich nach der Arbeit ins Fitnessstudio zum Training abends.", exampleTranslation: "Czasami chodzę po pracy na siłownię na trening wieczorami." },
      { id: "time7", polish: "Często", german: "Oft", difficulty: "medium", example: "Ich besuche meine Eltern oft am Wochenende zum Mittagessen bei ihnen.", exampleTranslation: "Często odwiedzam moich rodziców w weekendy na obiad u nich." },
      { id: "time8", polish: "Rzadko", german: "Selten", difficulty: "medium", example: "Ich esse selten Fleisch, meistens bevorzuge ich vegetarische Gerichte lieber.", exampleTranslation: "Rzadko jem mięso, najczęściej wolę dania wegetariańskie bardziej." },
      { id: "time9", polish: "Teraz", german: "Jetzt", difficulty: "medium", example: "Ich muss jetzt sofort gehen, sonst komme ich zu spät zur Arbeit!", exampleTranslation: "Muszę teraz natychmiast iść, inaczej spóźnię się do pracy!" },
      { id: "time10", polish: "Później", german: "Später", difficulty: "medium", example: "Ich rufe dich später an, wenn ich von der Arbeit nach Hause komme.", exampleTranslation: "Zadzwonię do ciebie później, gdy wrócę z pracy do domu." },
      { id: "time11", polish: "Wcześnie", german: "Früh", difficulty: "medium", example: "Ich stehe früh auf um sechs Uhr morgens jeden Tag regelmäßig.", exampleTranslation: "Wstaję wcześnie o szóstej rano każdego dnia regularnie." },
      { id: "time12", polish: "Późno", german: "Spät", difficulty: "medium", example: "Es ist schon spät! Wir sollten nach Hause gehen jetzt sofort!", exampleTranslation: "Jest już późno! Powinniśmy iść do domu teraz natychmiast!" },
      { id: "time13", polish: "Kiedy wracasz?", german: "Wann kommst du zurück?", difficulty: "hard", example: "Wann kommst du nach Hause zurück? Ich warte schon seit zwei Stunden!", exampleTranslation: "Kiedy wracasz do domu? Czekam już od dwóch godzin!" },
      { id: "time14", polish: "Zaraz przyjdę", german: "Ich komme gleich", difficulty: "hard", example: "Ich komme gleich! Warte noch fünf Minuten bitte auf mich!", exampleTranslation: "Zaraz przyjdę! Poczekaj jeszcze pięć minut proszę na mnie!" },
      { id: "time15", polish: "Minęło dużo czasu", german: "Es ist lange her", difficulty: "hard", example: "Es ist schon lange her, dass wir uns gesehen haben! Wie geht es dir?", exampleTranslation: "Minęło dużo czasu odkąd się widzieliśmy! Jak się masz?" }
    ]
  },

  asking_questions: {
    name: "Zadawanie pytań",
    description: "Pytania i wyrażenia pytające",
    icon: HelpCircle,
    color: "from-purple-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { id: "q1", polish: "Kto?", german: "Wer?", difficulty: "easy", example: "Wer ist dieser Mann dort drüben? Kennst du ihn vielleicht?", exampleTranslation: "Kto to jest ten mężczyzna tam? Znasz go może?" },
      { id: "q2", polish: "Co?", german: "Was?", difficulty: "easy", example: "Was machst du gerade jetzt? Hast du Zeit für mich kurz?", exampleTranslation: "Co robisz właśnie teraz? Masz czas dla mnie krótko?" },
      { id: "q3", polish: "Gdzie?", german: "Wo?", difficulty: "easy", example: "Wo ist die Toilette bitte? Ich finde sie nicht alleine hier.", exampleTranslation: "Gdzie jest toaleta proszę? Nie mogę jej znaleźć sam tutaj." },
      { id: "q4", polish: "Kiedy?", german: "Wann?", difficulty: "easy", example: "Wann beginnt der Film im Kino heute Abend genau um wie viel Uhr?", exampleTranslation: "Kiedy zaczyna się film w kinie dzisiaj wieczorem dokładnie o której?" },
      { id: "q5", polish: "Dlaczego?", german: "Warum?", difficulty: "easy", example: "Warum bist du so traurig heute? Ist etwas Schlimmes passiert dir?", exampleTranslation: "Dlaczego jesteś taki smutny dzisiaj? Stało się coś złego tobie?" },
      { id: "q6", polish: "Jak?", german: "Wie?", difficulty: "easy", example: "Wie komme ich am besten zum Bahnhof von hier aus schnell?", exampleTranslation: "Jak najlepiej dojść do dworca stąd szybko?" },
      { id: "q7", polish: "Ile?", german: "Wie viel?", difficulty: "medium", example: "Wie viel kostet diese schöne Jacke im Schaufenster dort genau?", exampleTranslation: "Ile kosztuje ta piękna kurtka w witrynie tam dokładnie?" },
      { id: "q8", polish: "Który?", german: "Welcher?", difficulty: "medium", example: "Welcher Bus fährt zum Zentrum? Ich kenne die Linien nicht gut.", exampleTranslation: "Który autobus jedzie do centrum? Nie znam dobrze linii." },
      { id: "q9", polish: "Czyj?", german: "Wessen?", difficulty: "medium", example: "Wessen Tasche ist das hier? Jemand hat sie vergessen liegen lassen.", exampleTranslation: "Czyja to jest torba tutaj? Ktoś zapomniał ją zostawioną." },
      { id: "q10", polish: "Dokąd?", german: "Wohin?", difficulty: "medium", example: "Wohin gehst du so schnell? Kann ich mitkommen mit dir?", exampleTranslation: "Dokąd idziesz tak szybko? Mogę iść z tobą?" },
      { id: "q11", polish: "Skąd?", german: "Woher?", difficulty: "medium", example: "Woher kommst du ursprünglich? Dein Akzent klingt interessant für mich!", exampleTranslation: "Skąd pochodzisz pierwotnie? Twój akcent brzmi ciekawie dla mnie!" },
      { id: "q12", polish: "Jak długo?", german: "Wie lange?", difficulty: "medium", example: "Wie lange dauert die Fahrt zum Flughafen von hier mit Auto?", exampleTranslation: "Jak długo trwa jazda na lotnisko stąd samochodem?" },
      { id: "q13", polish: "O co chodzi?", german: "Worum geht es?", difficulty: "hard", example: "Worum geht es in diesem Film? Kannst du mir die Handlung erklären?", exampleTranslation: "O co chodzi w tym filmie? Możesz mi wyjaśnić fabułę?" },
      { id: "q14", polish: "Co się stało?", german: "Was ist passiert?", difficulty: "hard", example: "Was ist passiert? Du siehst so geschockt und verwirrt aus plötzlich!", exampleTranslation: "Co się stało? Wyglądasz tak zszokowany i zdezorientowany nagle!" },
      { id: "q15", polish: "Jak to możliwe?", german: "Wie ist das möglich?", difficulty: "hard", example: "Wie ist das überhaupt möglich? Das kann doch nicht wahr sein wirklich!", exampleTranslation: "Jak to w ogóle możliwe? To przecież nie może być prawdą naprawdę!" }
    ]
  },

  cooking_verbs: {
    name: "Czasowniki kulinarne",
    description: "Czynności związane z gotowaniem",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "cookvb1", polish: "Gotować", german: "Kochen", difficulty: "easy", example: "Ich koche gerne für meine Familie am Wochenende aufwendige Gerichte liebevoll.", exampleTranslation: "Lubię gotować dla mojej rodziny w weekendy pracochłonne dania z miłością." },
      { id: "cookvb2", polish: "Smażyć", german: "Braten", difficulty: "easy", example: "Ich brate das Fleisch in der Pfanne mit Olivenöl goldbraun an.", exampleTranslation: "Smażę mięso na patelni z oliwą z oliwek na złotobrązowo." },
      { id: "cookvb3", polish: "Kroić", german: "Schneiden", difficulty: "easy", example: "Schneide bitte die Zwiebel in kleine Würfel für die Soße fein.", exampleTranslation: "Pokrój proszę cebulę w małe kostki do sosu drobno." },
      { id: "cookvb4", polish: "Mieszać", german: "Rühren", difficulty: "easy", example: "Rühre die Suppe ständig um, damit sie nicht anbrennt am Boden.", exampleTranslation: "Mieszaj zupę ciągle, aby się nie przypaliła na dnie." },
      { id: "cookvb5", polish: "Dodać", german: "Hinzufügen", difficulty: "easy", example: "Füge jetzt die Gewürze hinzu für mehr Geschmack im Gericht gut.", exampleTranslation: "Dodaj teraz przyprawy dla większego smaku w daniu dobrze." },
      { id: "cookvb6", polish: "Przyprawić", german: "Würzen", difficulty: "easy", example: "Würze das Essen mit Salz und Pfeffer nach deinem Geschmack bitte.", exampleTranslation: "Przypraw jedzenie solą i pieprzem według swojego smaku proszę." },
      { id: "cookvb7", polish: "Ugotować", german: "Gar kochen", difficulty: "medium", example: "Die Kartoffeln müssen zwanzig Minuten gar kochen bis sie weich sind.", exampleTranslation: "Ziemniaki muszą gotować się dwadzieścia minut aż będą miękkie." },
      { id: "cookvb8", polish: "Upiec", german: "Backen", difficulty: "medium", example: "Ich backe einen Kuchen im Ofen bei hundertachtzig Grad eine Stunde.", exampleTranslation: "Piekę ciasto w piekarniku w stu osiemdziesięciu stopniach godzinę." },
      { id: "cookvb9", polish: "Podgrzać", german: "Aufwärmen", difficulty: "medium", example: "Ich wärme das Essen von gestern in der Mikrowelle auf schnell.", exampleTranslation: "Podgrzewam jedzenie z wczoraj w mikrofali szybko." },
      { id: "cookvb10", polish: "Zagotować", german: "Zum Kochen bringen", difficulty: "medium", example: "Bring das Wasser zum Kochen, bevor du die Nudeln hinzufügst bitte.", exampleTranslation: "Zagotuj wodę, zanim dodasz makaron proszę." },
      { id: "cookvb11", polish: "Odcedzić", german: "Abgießen", difficulty: "medium", example: "Gieß die Nudeln durch ein Sieb ab, um das Wasser zu entfernen.", exampleTranslation: "Odcedź makaron przez durszlak, aby usunąć wodę." },
      { id: "cookvb12", polish: "Obierać", german: "Schälen", difficulty: "medium", example: "Schäle die Kartoffeln mit einem scharfen Messer vorsichtig und gründlich.", exampleTranslation: "Obierz ziemniaki ostrym nożem ostrożnie i dokładnie." },
      { id: "cookvb13", polish: "Muszę to gotować dłużej", german: "Ich muss das länger kochen", difficulty: "hard", example: "Ich muss das noch länger kochen, es ist noch nicht gar genug!", exampleTranslation: "Muszę to gotować dłużej, jeszcze nie jest wystarczająco ugotowane!" },
      { id: "cookvb14", polish: "Spróbuj tego", german: "Probier das mal", difficulty: "hard", example: "Probier das mal! Ich habe es selbst gekocht nach einem neuen Rezept!", exampleTranslation: "Spróbuj tego! Ugotowałem to sam według nowego przepisu!" },
      { id: "cookvb15", polish: "Jak to smakuje?", german: "Wie schmeckt es?", difficulty: "hard", example: "Wie schmeckt es dir? Braucht es mehr Salz oder ist es gut so?", exampleTranslation: "Jak ci smakuje? Potrzebuje więcej soli czy jest dobrze tak?" }
    ]
  },

  daily_expressions: {
    name: "Codzienne wyrażenia",
    description: "Przydatne zwroty na co dzień",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "daily1", polish: "Dzień dobry", german: "Guten Tag", difficulty: "easy", example: "Guten Tag! Wie kann ich Ihnen heute helfen bei uns im Geschäft?", exampleTranslation: "Dzień dobry! Jak mogę Panu dzisiaj pomóc u nas w sklepie?" },
      { id: "daily2", polish: "Dobry wieczór", german: "Guten Abend", difficulty: "easy", example: "Guten Abend zusammen! Schön, euch alle hier zu sehen heute!", exampleTranslation: "Dobry wieczór wszystkim! Miło was wszystkich tutaj widzieć dzisiaj!" },
      { id: "daily3", polish: "Dobranoc", german: "Gute Nacht", difficulty: "easy", example: "Gute Nacht! Schlaf gut und träum was Schönes von mir!", exampleTranslation: "Dobranoc! Śpij dobrze i śnij coś pięknego o mnie!" },
      { id: "daily4", polish: "Do widzenia", german: "Auf Wiedersehen", difficulty: "easy", example: "Auf Wiedersehen! Bis morgen früh um acht Uhr hier am gleichen Ort!", exampleTranslation: "Do widzenia! Do jutra rano o ósmej tutaj w tym samym miejscu!" },
      { id: "daily5", polish: "Proszę bardzo", german: "Bitte schön", difficulty: "easy", example: "Bitte schön! Gerne geschehen, ich helfe dir immer gerne bei allem!", exampleTranslation: "Proszę bardzo! Nie ma za co, zawsze chętnie ci pomogę we wszystkim!" },
      { id: "daily6", polish: "Dziękuję", german: "Danke", difficulty: "easy", example: "Vielen Dank für deine Hilfe! Ich weiß das sehr zu schätzen!", exampleTranslation: "Dziękuję za twoją pomoc! Bardzo to doceniam!" },
      { id: "daily7", polish: "Przepraszam", german: "Entschuldigung", difficulty: "medium", example: "Entschuldigung, dass ich zu spät komme! Der Bus hatte Verspätung heute.", exampleTranslation: "Przepraszam, że się spóźniłem! Autobus miał opóźnienie dzisiaj." },
      { id: "daily8", polish: "Smacznego", german: "Guten Appetit", difficulty: "medium", example: "Guten Appetit euch allen! Lasst es euch schmecken beim Essen zusammen!", exampleTranslation: "Smacznego wam wszystkim! Niech wam smakuje przy jedzeniu razem!" },
      { id: "daily9", polish: "Na zdrowie", german: "Gesundheit", difficulty: "medium", example: "Gesundheit! Bist du erkältet? Du niest die ganze Zeit heute.", exampleTranslation: "Na zdrowie! Jesteś przeziębiony? Kichasz cały czas dzisiaj." },
      { id: "daily10", polish: "Powodzenia", german: "Viel Erfolg", difficulty: "medium", example: "Viel Erfolg bei der Prüfung morgen! Du schaffst das bestimmt sicher!", exampleTranslation: "Powodzenia na egzaminie jutro! Na pewno dasz radę!" },
      { id: "daily11", polish: "Wszystkiego najlepszego", german: "Alles Gute", difficulty: "medium", example: "Alles Gute zum Geburtstag! Ich wünsche dir viel Glück und Gesundheit immer!", exampleTranslation: "Wszystkiego najlepszego z okazji urodzin! Życzę ci dużo szczęścia i zdrowia zawsze!" },
      { id: "daily12", polish: "Spokojnej nocy", german: "Schlaf gut", difficulty: "medium", example: "Schlaf gut und hab schöne Träume! Bis morgen früh um acht!", exampleTranslation: "Spokojnej nocy i pięknych snów! Do jutra rano o ósmej!" },
      { id: "daily13", polish: "Miłego dnia", german: "Schönen Tag noch", difficulty: "hard", example: "Schönen Tag noch! Ich hoffe wir sehen uns bald wieder mal!", exampleTranslation: "Miłego dnia! Mam nadzieję, że zobaczymy się wkrótce znowu!" },
      { id: "daily14", polish: "Do usłyszenia", german: "Bis bald", difficulty: "hard", example: "Bis bald! Wir telefonieren morgen und besprechen alles genau in Ruhe!", exampleTranslation: "Do usłyszenia! Zadzwonimy jutro i omówimy wszystko dokładnie spokojnie!" },
      { id: "daily15", polish: "Miłego weekendu", german: "Schönes Wochenende", difficulty: "hard", example: "Schönes Wochenende! Erhol dich gut und genieß die freie Zeit zuhause!", exampleTranslation: "Miłego weekendu! Wypoczywaj dobrze i ciesz się wolnym czasem w domu!" }
    ]
  },

  colors_shades: {
    name: "Kolory i odcienie",
    description: "Paleta barw i odcieni",
    icon: Palette,
    color: "from-pink-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { id: "col1", polish: "Jasny", german: "Hell", difficulty: "easy", example: "Ich mag helle Farben im Sommer für meine Kleidung lieber sehr.", exampleTranslation: "Lubię jasne kolory latem do mojej odzieży bardziej bardzo." },
      { id: "col2", polish: "Ciemny", german: "Dunkel", difficulty: "easy", example: "Die Wände sind dunkel gestrichen und machen den Raum kleiner optisch.", exampleTranslation: "Ściany są pomalowane ciemno i sprawiają, że pokój jest mniejszy wizualnie." },
      { id: "col3", polish: "Kolorowy", german: "Bunt", difficulty: "easy", example: "Der bunte Regenbogen am Himmel ist wunderschön nach dem Regen heute.", exampleTranslation: "Kolorowa tęcza na niebie jest piękna po deszczu dzisiaj." },
      { id: "col4", polish: "Srebrny", german: "Silbern", difficulty: "easy", example: "Der silberne Ring glänzt schön im Licht der Sonne hell draußen.", exampleTranslation: "Srebrny pierścionek błyszczy pięknie w świetle słońca jasno na zewnątrz." },
      { id: "col5", polish: "Złoty", german: "Golden", difficulty: "easy", example: "Die goldene Halskette ist sehr wertvoll und elegant für besondere Anlässe.", exampleTranslation: "Złoty naszyjnik jest bardzo cenny i elegancki na specjalne okazje." },
      { id: "col6", polish: "Różowy", german: "Rosa", difficulty: "easy", example: "Das rosa Kleid ist perfekt für die Hochzeit im Frühling schön.", exampleTranslation: "Różowa sukienka jest idealna na ślub wiosną piękna." },
      { id: "col7", polish: "Fioletowy", german: "Lila", difficulty: "medium", example: "Lila ist meine Lieblingsfarbe, ich trage sie sehr gerne oft täglich.", exampleTranslation: "Fioletowy to mój ulubiony kolor, noszę go bardzo chętnie często codziennie." },
      { id: "col8", polish: "Brązowy", german: "Braun", difficulty: "medium", example: "Die braunen Schuhe passen perfekt zu meiner neuen Hose gut zusammen.", exampleTranslation: "Brązowe buty pasują idealnie do moich nowych spodni dobrze razem." },
      { id: "col9", polish: "Pomarańczowy", german: "Orange", difficulty: "medium", example: "Orange ist eine warme fröhliche Farbe für den Herbst perfekt schön.", exampleTranslation: "Pomarańczowy to ciepły wesoły kolor na jesień idealnie piękny." },
      { id: "col10", polish: "Turkusowy", german: "Türkis", difficulty: "medium", example: "Das türkise Meer in der Karibik ist atemberaubend schön und kristallklar.", exampleTranslation: "Turkusowe morze na Karaibach jest zapierająco piękne i krystalicznie czyste." },
      { id: "col11", polish: "Beżowy", german: "Beige", difficulty: "medium", example: "Beige ist eine neutrale Farbe und passt zu allem sehr gut.", exampleTranslation: "Beżowy to neutralny kolor i pasuje do wszystkiego bardzo dobrze." },
      { id: "col12", polish: "Odcień", german: "Farbton", difficulty: "medium", example: "Dieser Farbton von Blau gefällt mir besser als der andere heller dort.", exampleTranslation: "Ten odcień niebieskiego podoba mi się bardziej niż ten drugi jaśniejszy tam." },
      { id: "col13", polish: "Jaki kolor wolisz?", german: "Welche Farbe bevorzugst du?", difficulty: "hard", example: "Welche Farbe bevorzugst du für die Wände? Blau oder grün vielleicht?", exampleTranslation: "Jaki kolor wolisz do ścian? Niebieski czy zielony może?" },
      { id: "col14", polish: "To mi nie pasuje", german: "Das steht mir nicht", difficulty: "hard", example: "Diese Farbe steht mir überhaupt nicht! Hast du etwas in Blau?", exampleTranslation: "Ten kolor w ogóle mi nie pasuje! Masz coś w niebieskim?" },
      { id: "col15", polish: "Pasuje do siebie", german: "Das passt zusammen", difficulty: "hard", example: "Diese Farben passen wunderbar zusammen! Du hast einen guten Geschmack wirklich!", exampleTranslation: "Te kolory pasują wspaniale do siebie! Masz naprawdę dobry gust!" }
    ]
  },

  body_actions: {
    name: "Czynności ciała",
    description: "Ruchy i akcje fizyczne",
    icon: Heart,
    color: "from-red-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "act1", polish: "Patrzeć", german: "Schauen", difficulty: "easy", example: "Schau mal! Dort drüben fliegt ein bunter Schmetterling schön im Garten!", exampleTranslation: "Popatrz! Tam leci kolorowy motyl pięknie w ogrodzie!" },
      { id: "act2", polish: "Słyszeć", german: "Hören", difficulty: "easy", example: "Hörst du das laute Geräusch? Was könnte das sein draußen?", exampleTranslation: "Słyszysz ten głośny hałas? Co to może być na zewnątrz?" },
      { id: "act3", polish: "Dotykać", german: "Berühren", difficulty: "easy", example: "Berühre das Gemälde nicht! Es ist noch frisch und nass!", exampleTranslation: "Nie dotykaj obrazu! Jest jeszcze świeży i mokry!" },
      { id: "act4", polish: "Wąchać", german: "Riechen", difficulty: "easy", example: "Riech mal an diesen Blumen! Sie duften wunderbar intensiv und süß!", exampleTranslation: "Powąchaj te kwiaty! Pachną wspaniale intensywnie i słodko!" },
      { id: "act5", polish: "Smakować", german: "Schmecken", difficulty: "easy", example: "Das Essen schmeckt ausgezeichnet! Du kochst wirklich sehr gut immer!", exampleTranslation: "Jedzenie smakuje znakomicie! Naprawdę gotujesz bardzo dobrze zawsze!" },
      { id: "act6", polish: "Oddychać", german: "Atmen", difficulty: "easy", example: "Atme tief ein und aus für Entspannung langsam und ruhig.", exampleTranslation: "Oddychaj głęboko dla relaksu wolno i spokojnie." },
      { id: "act7", polish: "Kichać", german: "Niesen", difficulty: "medium", example: "Ich muss ständig niesen wegen der Allergie gegen Pollen im Frühling.", exampleTranslation: "Muszę ciągle kichać z powodu alergii na pyłki wiosną." },
      { id: "act8", polish: "Kasłać", german: "Husten", difficulty: "medium", example: "Ich huste seit drei Tagen ununterbrochen wegen der Erkältung stark.", exampleTranslation: "Kaszlę od trzech dni nieprzerwanie z powodu przeziębienia mocno." },
      { id: "act9", polish: "Ziewać", german: "Gähnen", difficulty: "medium", example: "Ich gähne die ganze Zeit, weil ich letzte Nacht schlecht geschlafen habe.", exampleTranslation: "Ziewam cały czas, bo źle spałem ostatniej nocy." },
      { id: "act10", polish: "Płakać", german: "Weinen", difficulty: "medium", example: "Das Baby weint laut, weil es Hunger hat und gefüttert werden möchte.", exampleTranslation: "Niemowlę płacze głośno, bo jest głodne i chce być nakarmione." },
      { id: "act11", polish: "Śmiać się", german: "Lachen", difficulty: "medium", example: "Wir lachen viel zusammen über lustige Witze und gute Geschichten oft.", exampleTranslation: "Śmiejemy się dużo razem z zabawnych dowcipów i dobrych historii często." },
      { id: "act12", polish: "Uśmiechać się", german: "Lächeln", difficulty: "medium", example: "Sie lächelt immer freundlich und macht allen Menschen gute Laune sofort.", exampleTranslation: "Ona zawsze uśmiecha się przyjaźnie i poprawia humor wszystkim ludziom natychmiast." },
      { id: "act13", polish: "Nie mogę oddychać", german: "Ich kann nicht atmen", difficulty: "hard", example: "Ich kann nicht richtig atmen! Öffne bitte das Fenster für frische Luft!", exampleTranslation: "Nie mogę oddychać! Otwórz proszę okno dla świeżego powietrza!" },
      { id: "act14", polish: "Muszę się wysmarkać", german: "Ich muss mir die Nase putzen", difficulty: "hard", example: "Ich muss mir dringend die Nase putzen! Hast du ein Taschentuch für mich?", exampleTranslation: "Muszę się pilnie wysmarkać! Masz chusteczkę dla mnie?" },
      { id: "act15", polish: "Śmieję się do łez", german: "Ich lache Tränen", difficulty: "hard", example: "Ich lache Tränen! Das ist so lustig, ich kann nicht mehr aufhören!", exampleTranslation: "Śmieję się do łez! To jest tak zabawne, nie mogę przestać!" }
    ]
  },

  clock_time: {
    name: "Zegar i godziny",
    description: "Określanie czasu i godzin",
    icon: Clock,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "clk1", polish: "Godzina", german: "Stunde", difficulty: "easy", example: "Eine Stunde hat sechzig Minuten und das muss jeder wissen genau.", exampleTranslation: "Godzina ma sześćdziesiąt minut i to każdy musi wiedzieć dokładnie." },
      { id: "clk2", polish: "Minuta", german: "Minute", difficulty: "easy", example: "Warte bitte eine Minute! Ich bin gleich fertig mit der Arbeit hier!", exampleTranslation: "Poczekaj proszę minutę! Zaraz skończę z pracą tutaj!" },
      { id: "clk3", polish: "Sekunda", german: "Sekunde", difficulty: "easy", example: "Ich komme in einer Sekunde zurück! Bleib hier und warte kurz!", exampleTranslation: "Wrócę za sekundę! Zostań tutaj i poczekaj krótko!" },
      { id: "clk4", polish: "Rano", german: "Morgen", difficulty: "easy", example: "Am Morgen trinke ich immer Kaffee und lese die Zeitung gemütlich.", exampleTranslation: "Rano zawsze piję kawę i czytam gazetę przytulnie." },
      { id: "clk5", polish: "Popołudnie", german: "Nachmittag", difficulty: "easy", example: "Am Nachmittag gehe ich spazieren im Park für frische Luft draußen.", exampleTranslation: "Po południu chodzę na spacer w parku dla świeżego powietrza na zewnątrz." },
      { id: "clk6", polish: "Wieczór", german: "Abend", difficulty: "easy", example: "Am Abend sehe ich fern und entspanne mich auf dem Sofa gemütlich.", exampleTranslation: "Wieczorem oglądam telewizję i relaksuję się na kanapie przytulnie." },
      { id: "clk7", polish: "Północ", german: "Mitternacht", difficulty: "medium", example: "Um Mitternacht beginnt das neue Jahr mit großem Feuerwerk überall laut!", exampleTranslation: "O północy zaczyna się nowy rok z wielkim fajerwerkiem wszędzie głośno!" },
      { id: "clk8", polish: "Południe", german: "Mittag", difficulty: "medium", example: "Am Mittag esse ich zu Mittag mit meinen Kollegen in der Kantine.", exampleTranslation: "W południe jem obiad z moimi kolegami w stołówce." },
      { id: "clk9", polish: "Pół godziny", german: "Halbe Stunde", difficulty: "medium", example: "Die Fahrt dauert nur eine halbe Stunde mit dem Auto zum Zentrum.", exampleTranslation: "Jazda trwa tylko pół godziny samochodem do centrum." },
      { id: "clk10", polish: "Kwadrans", german: "Viertelstunde", difficulty: "medium", example: "Warte bitte eine Viertelstunde! Ich bin gleich mit der Arbeit fertig!", exampleTranslation: "Poczekaj proszę kwadrans! Zaraz skończę z pracą!" },
      { id: "clk11", polish: "Za pięć dwunasta", german: "Fünf vor zwölf", difficulty: "medium", example: "Es ist fünf vor zwölf! Wir müssen uns beeilen schnell sofort!", exampleTranslation: "Jest za pięć dwunasta! Musimy się pośpieszyć szybko natychmiast!" },
      { id: "clk12", polish: "Pięć po trzeciej", german: "Fünf nach drei", difficulty: "medium", example: "Es ist jetzt fünf nach drei Uhr am Nachmittag genau auf Uhr.", exampleTranslation: "Jest teraz pięć po trzeciej po południu dokładnie na zegarze." },
      { id: "clk13", polish: "Która godzina?", german: "Wie spät ist es?", difficulty: "hard", example: "Wie spät ist es jetzt genau? Ich habe meine Uhr vergessen!", exampleTranslation: "Która jest godzina teraz dokładnie? Zapomniałem mojego zegarka!" },
      { id: "clk14", polish: "Jest wpół do czwartej", german: "Es ist halb vier", difficulty: "hard", example: "Es ist schon halb vier! Wir sollten langsam nach Hause gehen!", exampleTranslation: "Jest już wpół do czwartej! Powinniśmy powoli iść do domu!" },
      { id: "clk15", polish: "Masz czas?", german: "Hast du Zeit?", difficulty: "hard", example: "Hast du heute Zeit für mich? Ich möchte mit dir reden über wichtige Sachen!", exampleTranslation: "Masz dzisiaj czas dla mnie? Chcę z tobą porozmawiać o ważnych rzeczach!" }
    ]
  },

  shopping_expressions: {
    name: "Wyrażenia zakupowe",
    description: "Przydatne zwroty podczas zakupów",
    icon: Globe,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "shpexp1", polish: "Ile kosztuje?", german: "Was kostet das?", difficulty: "easy", example: "Entschuldigung, was kostet diese schöne Vase im Schaufenster dort genau?", exampleTranslation: "Przepraszam, ile kosztuje ten piękny wazon w witrynie tam dokładnie?" },
      { id: "shpexp2", polish: "Za drogi", german: "Zu teuer", difficulty: "easy", example: "Das ist mir leider zu teuer! Haben Sie etwas Günstigeres anzubieten?", exampleTranslation: "To jest dla mnie niestety za drogie! Ma Pan coś tańszego do zaoferowania?" },
      { id: "shpexp3", polish: "Tani", german: "Günstig", difficulty: "easy", example: "Diese Schuhe sind sehr günstig und von guter Qualität für Preis!", exampleTranslation: "Te buty są bardzo tanie i dobrej jakości za cenę!" },
      { id: "shpexp4", polish: "Rabat", german: "Rabatt", difficulty: "easy", example: "Gibt es einen Rabatt auf diesen Artikel heute im Sonderangebot vielleicht?", exampleTranslation: "Czy jest rabat na ten artykuł dzisiaj w promocji może?" },
      { id: "shpexp5", polish: "Kasa", german: "Kasse", difficulty: "easy", example: "Die Kasse ist dort vorne rechts neben dem Ausgang zum Bezahlen.", exampleTranslation: "Kasa jest tam z przodu po prawej obok wyjścia do płacenia." },
      { id: "shpexp6", polish: "Paragon", german: "Kassenbon", difficulty: "easy", example: "Möchten Sie den Kassenbon haben für eventuelle Rückgabe später noch?", exampleTranslation: "Czy chce Pan paragon na ewentualny zwrot później jeszcze?" },
      { id: "shpexp7", polish: "Zwrot", german: "Rückgabe", difficulty: "medium", example: "Ich möchte diese Hose zurückgeben, sie passt mir nicht gut leider.", exampleTranslation: "Chcę zwrócić te spodnie, nie pasują mi dobrze niestety." },
      { id: "shpexp8", polish: "Wymiana", german: "Umtausch", difficulty: "medium", example: "Kann ich dieses Produkt umtauschen gegen eine andere Größe bitte?", exampleTranslation: "Czy mogę wymienić ten produkt na inny rozmiar proszę?" },
      { id: "shpexp9", polish: "Przecena", german: "Reduziert", difficulty: "medium", example: "Diese Artikel sind reduziert mit fünfzig Prozent Rabatt nur heute!", exampleTranslation: "Te artykuły są przecenione z pięćdziesięcioma procentami rabatu tylko dzisiaj!" },
      { id: "shpexp10", polish: "Promocja", german: "Angebot", difficulty: "medium", example: "Das ist ein tolles Angebot! Zwei Artikel zum Preis von einem!", exampleTranslation: "To świetna promocja! Dwa artykuły w cenie jednego!" },
      { id: "shpexp11", polish: "Gwarancja", german: "Garantie", difficulty: "medium", example: "Das Produkt hat zwei Jahre Garantie vom Hersteller offiziell schriftlich.", exampleTranslation: "Produkt ma dwa lata gwarancji od producenta oficjalnie na piśmie." },
      { id: "shpexp12", polish: "Torba", german: "Tasche", difficulty: "medium", example: "Brauchen Sie eine Tasche für die Einkäufe oder haben Sie eine?", exampleTranslation: "Potrzebuje Pan torby na zakupy czy ma Pan swoją?" },
      { id: "shpexp13", polish: "Mogę to zwrócić?", german: "Kann ich das zurückgeben?", difficulty: "hard", example: "Kann ich das zurückgeben, wenn es mir nicht passt innerhalb von vierzehn Tagen?", exampleTranslation: "Czy mogę to zwrócić, jeśli mi nie będzie pasować w ciągu czternastu dni?" },
      { id: "shpexp14", polish: "Czy jest taniej?", german: "Gibt es das günstiger?", difficulty: "hard", example: "Gibt es dieses Produkt auch günstiger irgendwo anders im Angebot vielleicht?", exampleTranslation: "Czy jest ten produkt też taniej gdzieś indziej w promocji może?" },
      { id: "shpexp15", polish: "Wezmę to", german: "Ich nehme das", difficulty: "hard", example: "Ich nehme das! Können Sie es bitte schön einpacken als Geschenk?", exampleTranslation: "Wezmę to! Może Pan to proszę ładnie zapakować jako prezent?" }
    ]
  },

  rooms_apartment: {
    name: "Pokoje i mieszkanie",
    description: "Pomieszczenia w domu i mieszkaniu",
    icon: Building,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "room1", polish: "Salon", german: "Wohnzimmer", difficulty: "easy", example: "Das Wohnzimmer ist groß und gemütlich mit bequemen Sofas für Familie.", exampleTranslation: "Salon jest duży i przytulny z wygodnymi kanapami dla rodziny." },
      { id: "room2", polish: "Sypialnia", german: "Schlafzimmer", difficulty: "easy", example: "Mein Schlafzimmer ist ruhig und perfekt zum Schlafen und Ausruhen nachts.", exampleTranslation: "Moja sypialnia jest cicha i idealna do spania i odpoczynku w nocy." },
      { id: "room3", polish: "Kuchnia", german: "Küche", difficulty: "easy", example: "Die Küche ist modern ausgestattet mit allen neuen Geräten für Kochen.", exampleTranslation: "Kuchnia jest nowocześnie wyposażona we wszystkie nowe urządzenia do gotowania." },
      { id: "room4", polish: "Łazienka", german: "Badezimmer", difficulty: "easy", example: "Das Badezimmer hat eine große Badewanne und eine separate Dusche auch.", exampleTranslation: "Łazienka ma dużą wannę i osobny prysznic też." },
      { id: "room5", polish: "Korytarz", german: "Flur", difficulty: "easy", example: "Der Flur ist lang und verbindet alle Zimmer in der Wohnung miteinander.", exampleTranslation: "Korytarz jest długi i łączy wszystkie pokoje w mieszkaniu ze sobą." },
      { id: "room6", polish: "Balkon", german: "Balkon", difficulty: "easy", example: "Auf dem Balkon kann man schön sitzen und die Aussicht genießen.", exampleTranslation: "Na balkonie można ładnie posiedzieć i cieszyć się widokiem." },
      { id: "room7", polish: "Piwnica", german: "Keller", difficulty: "medium", example: "Im Keller bewahren wir alte Sachen und Werkzeuge auf sicher verstaut.", exampleTranslation: "W piwnicy przechowujemy stare rzeczy i narzędzia bezpiecznie schowane." },
      { id: "room8", polish: "Strych", german: "Dachboden", difficulty: "medium", example: "Auf dem Dachboden lagern wir Kartons mit alten Familienfotos sicher oben.", exampleTranslation: "Na strychu przechowujemy kartony ze starymi rodzinnymi zdjęciami bezpiecznie na górze." },
      { id: "room9", polish: "Pokój gościnny", german: "Gästezimmer", difficulty: "medium", example: "Das Gästezimmer ist immer bereit für Besucher mit frischer Bettwäsche schön.", exampleTranslation: "Pokój gościnny jest zawsze gotowy dla gości ze świeżą pościelą ładnie." },
      { id: "room10", polish: "Gabinet", german: "Arbeitszimmer", difficulty: "medium", example: "Mein Arbeitszimmer ist ruhig und perfekt zum Arbeiten konzentriert ohne Störung.", exampleTranslation: "Mój gabinet jest cichy i idealny do pracy skupionej bez zakłóceń." },
      { id: "room11", polish: "Jadalnia", german: "Esszimmer", difficulty: "medium", example: "Das Esszimmer hat einen großen Tisch für zehn Personen zum gemeinsamen Essen.", exampleTranslation: "Jadalnia ma duży stół na dziesięć osób do wspólnego jedzenia." },
      { id: "room12", polish: "Przedpokój", german: "Vorzimmer", difficulty: "medium", example: "Im Vorzimmer hängen wir unsere Mäntel und Jacken auf beim Ankommen.", exampleTranslation: "W przedpokoju wieszamy nasze płaszcze i kurtki przy wchodzeniu." },
      { id: "room13", polish: "Gdzie jest łazienka?", german: "Wo ist das Bad?", difficulty: "hard", example: "Entschuldigung, wo ist das Badezimmer? Ich kenne mich hier nicht aus!", exampleTranslation: "Przepraszam, gdzie jest łazienka? Nie znam się tutaj!" },
      { id: "room14", polish: "Pokój jest brudny", german: "Das Zimmer ist schmutzig", difficulty: "hard", example: "Das Zimmer ist sehr schmutzig! Wir müssen es gründlich putzen heute noch!", exampleTranslation: "Pokój jest bardzo brudny! Musimy go dokładnie posprzątać jeszcze dzisiaj!" },
      { id: "room15", polish: "Pokaż mi mieszkanie", german: "Zeig mir die Wohnung", difficulty: "hard", example: "Kannst du mir bitte die ganze Wohnung zeigen? Ich möchte alles sehen!", exampleTranslation: "Możesz mi proszę pokazać całe mieszkanie? Chcę zobaczyć wszystko!" }
    ]
  },

  adjectives_descriptions: {
    name: "Przymiotniki opisowe",
    description: "Określenia i opisy rzeczy",
    icon: Star,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { id: "adj1", polish: "Duży", german: "Groß", difficulty: "easy", example: "Das Haus ist sehr groß mit zehn Zimmern und einem großen Garten.", exampleTranslation: "Dom jest bardzo duży z dziesięcioma pokojami i dużym ogrodem." },
      { id: "adj2", polish: "Mały", german: "Klein", difficulty: "easy", example: "Die Wohnung ist klein aber gemütlich und perfekt für eine Person.", exampleTranslation: "Mieszkanie jest małe ale przytulne i idealne dla jednej osoby." },
      { id: "adj3", polish: "Nowy", german: "Neu", difficulty: "easy", example: "Mein neuer Computer ist sehr schnell und leistungsstark für Arbeit.", exampleTranslation: "Mój nowy komputer jest bardzo szybki i wydajny do pracy." },
      { id: "adj4", polish: "Stary", german: "Alt", difficulty: "easy", example: "Das alte Gebäude ist über hundert Jahre alt und historisch wertvoll.", exampleTranslation: "Stary budynek ma ponad sto lat i jest historycznie cenny." },
      { id: "adj5", polish: "Piękny", german: "Schön", difficulty: "easy", example: "Die Landschaft ist wunderschön mit grünen Bergen und klaren Seen überall.", exampleTranslation: "Krajobraz jest piękny z zielonymi górami i czystymi jeziorami wszędzie." },
      { id: "adj6", polish: "Brzydki", german: "Hässlich", difficulty: "easy", example: "Dieses Gebäude ist sehr hässlich und passt nicht zur Umgebung hier.", exampleTranslation: "Ten budynek jest bardzo brzydki i pasuje nie do otoczenia tutaj." },
      { id: "adj7", polish: "Szybki", german: "Schnell", difficulty: "medium", example: "Der schnelle Zug bringt uns in drei Stunden nach Berlin direkt.", exampleTranslation: "Szybki pociąg zawiezie nas w trzy godziny do Berlina bezpośrednio." },
      { id: "adj8", polish: "Wolny", german: "Langsam", difficulty: "medium", example: "Die Schildkröte ist sehr langsam und braucht Zeit zum Gehen überall.", exampleTranslation: "Żółw jest bardzo wolny i potrzebuje czasu do chodzenia wszędzie." },
      { id: "adj9", polish: "Drogi", german: "Teuer", difficulty: "medium", example: "Dieses Restaurant ist sehr teuer, aber das Essen ist ausgezeichnet dort!", exampleTranslation: "Ta restauracja jest bardzo droga, ale jedzenie jest doskonałe tam!" },
      { id: "adj10", polish: "Tani", german: "Billig", difficulty: "medium", example: "Diese Schuhe sind billig, aber die Qualität ist nicht sehr gut leider.", exampleTranslation: "Te buty są tanie, ale jakość nie jest bardzo dobra niestety." },
      { id: "adj11", polish: "Trudny", german: "Schwierig", difficulty: "medium", example: "Die Prüfung war sehr schwierig und ich bin nicht sicher ob bestanden.", exampleTranslation: "Egzamin był bardzo trudny i nie jestem pewien czy zdałem." },
      { id: "adj12", polish: "Łatwy", german: "Leicht", difficulty: "medium", example: "Diese Übung ist leicht zu verstehen und für alle Anfänger geeignet.", exampleTranslation: "To ćwiczenie jest łatwe do zrozumienia i odpowiednie dla wszystkich początkujących." },
      { id: "adj13", polish: "To bardzo ładne", german: "Das ist sehr schön", difficulty: "hard", example: "Das ist wirklich sehr schön! Wo hast du das gekauft oder gefunden?", exampleTranslation: "To naprawdę bardzo ładne! Gdzie to kupiłeś lub znalazłeś?" },
      { id: "adj14", polish: "Zbyt skomplikowane", german: "Zu kompliziert", difficulty: "hard", example: "Das ist mir viel zu kompliziert! Kannst du es einfacher erklären bitte?", exampleTranslation: "To jest dla mnie zbyt skomplikowane! Możesz to wyjaśnić prościej proszę?" },
      { id: "adj15", polish: "Idealny rozmiar", german: "Perfekte Größe", difficulty: "hard", example: "Das hat die perfekte Größe für mich! Ich nehme es sofort mit!", exampleTranslation: "To ma idealny rozmiar dla mnie! Biorę to od razu!" }
    ]
  },

  giving_receiving: {
    name: "Dawanie i otrzymywanie",
    description: "Wymiana przedmiotów i prezentów",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "give1", polish: "Prezent", german: "Geschenk", difficulty: "easy", example: "Ich habe ein schönes Geschenk für dich zum Geburtstag gekauft heute!", exampleTranslation: "Kupiłem piękny prezent dla ciebie na urodziny dzisiaj!" },
      { id: "give2", polish: "Dawać", german: "Geben", difficulty: "easy", example: "Gib mir bitte das Salz, es steht zu weit weg von mir.", exampleTranslation: "Daj mi proszę sól, stoi za daleko ode mnie." },
      { id: "give3", polish: "Dostawać", german: "Bekommen", difficulty: "easy", example: "Ich habe viele Geschenke zum Geburtstag von Freunden bekommen gestern schön!", exampleTranslation: "Dostałem dużo prezentów na urodziny od przyjaciół wczoraj ładnie!" },
      { id: "give4", polish: "Pożyczać", german: "Leihen", difficulty: "easy", example: "Kannst du mir dein Auto für heute leihen? Ich muss einkaufen fahren.", exampleTranslation: "Możesz mi pożyczyć swój samochód na dzisiaj? Muszę pojechać na zakupy." },
      { id: "give5", polish: "Oddawać", german: "Zurückgeben", difficulty: "easy", example: "Ich gebe dir das Buch morgen zurück, ich bin fast fertig mit Lesen.", exampleTranslation: "Oddam ci książkę jutro, ja jestem prawie skończony z czytaniem." },
      { id: "give6", polish: "Wymieniać", german: "Tauschen", difficulty: "easy", example: "Wollen wir unsere Sandwiches tauschen? Ich probiere gerne dein Sandwich!", exampleTranslation: "Chcesz wymienić nasze kanapki? Chętnie spróbuję twojej kanapki!" },
      { id: "give7", polish: "Dzielić się", german: "Teilen", difficulty: "medium", example: "Ich teile mein Essen gerne mit dir, nimm so viel du möchtest!", exampleTranslation: "Chętnie podzielę się moim jedzeniem z tobą, weź ile chcesz!" },
      { id: "give8", polish: "Rozdawać", german: "Verteilen", difficulty: "medium", example: "Der Lehrer verteilt die Arbeitsblätter an alle Schüler in der Klasse.", exampleTranslation: "Nauczyciel rozdaje karty pracy wszystkim uczniom w klasie." },
      { id: "give9", polish: "Ofiarować", german: "Schenken", difficulty: "medium", example: "Ich schenke meiner Mutter Blumen zum Muttertag jedes Jahr liebevoll.", exampleTranslation: "Ofiarowuję mojej mamie kwiaty na Dzień Matki każdego roku z miłością." },
      { id: "give10", polish: "Podarować", german: "Verschenken", difficulty: "medium", example: "Ich verschenke alte Bücher an die Bibliothek für andere Leser kostenlos.", exampleTranslation: "Podarowuję stare książki do biblioteki dla innych czytelników bezpłatnie." },
      { id: "give11", polish: "Przyjmować", german: "Annehmen", difficulty: "medium", example: "Nimm bitte dieses Geschenk an! Es ist von Herzen für dich!", exampleTranslation: "Przyjmij proszę ten prezent! Jest z serca dla ciebie!" },
      { id: "give12", polish: "Odmawiać", german: "Ablehnen", difficulty: "medium", example: "Ich lehne das Angebot höflich ab, weil es nicht passt für mich.", exampleTranslation: "Odmawiam tej oferty grzecznie, bo nie pasuje dla mnie." },
      { id: "give13", polish: "To dla ciebie", german: "Das ist für dich", difficulty: "hard", example: "Das ist ein kleines Geschenk für dich! Ich hoffe es gefällt dir gut!", exampleTranslation: "To mały prezent dla ciebie! Mam nadzieję, że ci się spodoba!" },
      { id: "give14", polish: "Nie powinienem był", german: "Das wäre nicht nötig gewesen", difficulty: "hard", example: "Das wäre wirklich nicht nötig gewesen! Du bist viel zu großzügig immer!", exampleTranslation: "To naprawdę nie było konieczne! Jesteś zawsze zbyt hojny!" },
      { id: "give15", polish: "Bardzo mi miło", german: "Das freut mich sehr", difficulty: "hard", example: "Das freut mich sehr, dass dir mein Geschenk gefällt! Viel Freude damit!", exampleTranslation: "Bardzo mi miło, że podoba ci się mój prezent! Dużo radości z tego!" }
    ]
  }
};
