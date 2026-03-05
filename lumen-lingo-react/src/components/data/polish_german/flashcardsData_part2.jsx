
/**
 * POLISH → GERMAN FLASHCARDS - PART 2
 * 
 * Native Language: Polish (Polski)
 * Target Language: German (Deutsch)
 * 
 * This file contains new flashcard categories (21-30).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Phone,
  Camera,
  Book,
  Utensils,
  Bed,
  Zap,
  Thermometer,
  Calendar,
  Star,
  Gift
} from "lucide-react";

export const flashcardsCategories_part2 = {
  technology_communication: {
    name: "Technologia i komunikacja",
    description: "Urządzenia elektroniczne i środki komunikacji",
    icon: Phone,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "tech1", polish: "Telefon", german: "Telefon", difficulty: "easy", example: "Mein Telefon klingelt ständig mit wichtigen Anrufen von der Arbeit heute.", exampleTranslation: "Mój telefon dzwoni ciągle z ważnymi telefonami z pracy dzisiaj." },
      { id: "tech2", polish: "Komputer", german: "Computer", difficulty: "easy", example: "Ich arbeite jeden Tag acht Stunden am Computer im Büro konzentriert.", exampleTranslation: "Pracuję każdego dnia osiem godzin przy komputerze w biurze skupiony." },
      { id: "tech3", polish: "Internet", german: "Internet", difficulty: "easy", example: "Das Internet funktioniert nicht, ich kann keine E-Mails senden jetzt.", exampleTranslation: "Internet nie działa, nie mogę wysyłać maili teraz." },
      { id: "tech4", polish: "Email", german: "E-Mail", difficulty: "easy", example: "Ich bekomme jeden Tag über hundert E-Mails von verschiedenen Kunden.", exampleTranslation: "Dostaję każdego dnia ponad sto emaili od różnych klientów." },
      { id: "tech5", polish: "Zdjęcie", german: "Foto", difficulty: "easy", example: "Ich mache gerne Fotos von schönen Landschaften und der Natur überall.", exampleTranslation: "Lubię robić zdjęcia pięknych krajobrazów i przyrody wszędzie." },
      { id: "tech6", polish: "Aplikacja", german: "App", difficulty: "easy", example: "Diese App hilft mir beim Deutschlernen jeden Tag sehr effektiv und gut.", exampleTranslation: "Ta aplikacja pomaga mi w nauce niemieckiego każdego dnia bardzo efektywnie i dobrze." },
      { id: "tech7", polish: "Wiadomość", german: "Nachricht", difficulty: "medium", example: "Ich habe dir eine wichtige Nachricht geschickt, hast du sie bekommen?", exampleTranslation: "Wysłałem ci ważną wiadomość, dostałeś ją?" },
      { id: "tech8", polish: "Dzwonić", german: "Anrufen", difficulty: "medium", example: "Ich muss meine Mutter anrufen, um ihr zum Geburtstag zu gratulieren.", exampleTranslation: "Muszę zadzwonić do mojej mamy, aby złożyć jej życzenia urodzinowe." },
      { id: "tech9", polish: "Ładować", german: "Aufladen", difficulty: "medium", example: "Ich muss mein Handy aufladen, der Akku ist fast leer jetzt.", exampleTranslation: "Muszę naładować mój telefon, bateria jest prawie pusta teraz." },
      { id: "tech10", polish: "Ekran", german: "Bildschirm", difficulty: "medium", example: "Der Bildschirm ist zu hell und ich muss die Helligkeit reduzieren sofort.", exampleTranslation: "Ekran jest za jasny i muszę zmniejszyć jasność natychmiast." },
      { id: "tech11", polish: "Hasło", german: "Passwort", difficulty: "medium", example: "Ich habe mein Passwort vergessen und kann mich nicht einloggen leider.", exampleTranslation: "Zapomniałem mojego hasła i nie mogę się zalogować niestety." },
      { id: "tech12", polish: "Pobierać", german: "Herunterladen", difficulty: "medium", example: "Ich muss diese wichtige Datei herunterladen für die Präsentation morgen früh.", exampleTranslation: "Muszę pobrać ten ważny plik na prezentację jutro rano." },
      { id: "tech13", polish: "Czy masz Wi-Fi?", german: "Hast du WLAN?", difficulty: "hard", example: "Hast du WLAN hier? Ich muss dringend im Internet etwas nachschauen!", exampleTranslation: "Czy masz Wi-Fi tutaj? Muszę pilnie coś sprawdzić w internecie!" },
      { id: "tech14", polish: "Komputer się zawiesił", german: "Der Computer ist abgestürzt", difficulty: "hard", example: "Der Computer ist plötzlich abgestürzt und ich habe alle ungespeicherten Daten verloren!", exampleTranslation: "Komputer nagle się zawiesił i straciłem wszystkie niezapisane dane!" },
      { id: "tech15", polish: "Zadzwoń do mnie", german: "Ruf mich an", difficulty: "hard", example: "Ruf mich bitte an, wenn du zu Hause ankommst sicher!", exampleTranslation: "Zadzwoń do mnie proszę, gdy dotrzesz do domu bezpiecznie!" }
    ]
  },

  hobbies_leisure: {
    name: "Hobby i rozrywka",
    description: "Zajęcia rekreacyjne i rozrywkowe",
    icon: Camera,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "lei1", polish: "Czytać", german: "Lesen", difficulty: "easy", example: "Ich lese gerne spannende Kriminalromane vor dem Schlafen jeden Abend.", exampleTranslation: "Lubię czytać ekscytujące kryminały przed snem każdego wieczoru." },
      { id: "lei2", polish: "Pisać", german: "Schreiben", difficulty: "easy", example: "Ich schreibe jeden Tag in mein Tagebuch über meine Erlebnisse ausführlich.", exampleTranslation: "Piszę każdego dnia w moim dzienniku o moich doświadczeniach szczegółowo." },
      { id: "lei3", polish: "Oglądać", german: "Ansehen", difficulty: "easy", example: "Wir sehen uns gerne Filme zusammen am Wochenende als Familie an.", exampleTranslation: "Lubimy oglądać filmy razem w weekendy jako rodzina." },
      { id: "lei4", polish: "Słuchać", german: "Zuhören", difficulty: "easy", example: "Ich höre gerne klassische Musik beim Arbeiten zur Entspannung und Konzentration.", exampleTranslation: "Lubię słuchać muzyki klasycznej podczas pracy do relaksu i koncentracji." },
      { id: "lei5", polish: "Rysować", german: "Zeichnen", difficulty: "easy", example: "Meine Tochter zeichnet gerne bunte Bilder von Tieren und der Natur.", exampleTranslation: "Moja córka lubi rysować kolorowe obrazki zwierząt i przyrody." },
      { id: "lei6", polish: "Gitara", german: "Gitarre", difficulty: "easy", example: "Ich lerne seit einem Jahr Gitarre spielen und übe jeden Tag fleißig.", exampleTranslation: "Uczę się grać na gitarze od roku i ćwiczę każdego dnia pilnie." },
      { id: "lei7", polish: "Gra", german: "Spiel", difficulty: "medium", example: "Dieses Spiel macht großen Spaß und die ganze Familie spielt es gerne zusammen.", exampleTranslation: "Ta gra sprawia dużą przyjemność i cała rodzina lubi w nią grać razem." },
      { id: "lei8", polish: "Koncert", german: "Konzert", difficulty: "medium", example: "Nächste Woche gehen wir zu einem klassischen Konzert in der Philharmonie.", exampleTranslation: "W przyszłym tygodniu idziemy na koncert klasyczny w filharmonii." },
      { id: "lei9", polish: "Wystawa", german: "Ausstellung", difficulty: "medium", example: "Die Kunstausstellung zeigt Werke von berühmten deutschen Malern aus verschiedenen Epochen.", exampleTranslation: "Wystawa sztuki pokazuje dzieła słynnych niemieckich malarzy z różnych epok." },
      { id: "lei10", polish: "Galeria", german: "Galerie", difficulty: "medium", example: "Die Galerie im Zentrum stellt moderne Kunstwerke junger Künstler aus der Region aus.", exampleTranslation: "Galeria w centrum wystawia nowoczesne dzieła sztuki młodych artystów z regionu." },
      { id: "lei11", polish: "Fotografia", german: "Fotografie", difficulty: "medium", example: "Fotografie ist mein Hobby und ich fotografiere gerne Landschaften in den Bergen.", exampleTranslation: "Fotografia jest moim hobby i lubię fotografować krajobrazy w górach." },
      { id: "lei12", polish: "Zbiór", german: "Sammlung", difficulty: "medium", example: "Meine Briefmarkensammlung umfasst über tausend seltene Exemplare aus aller Welt.", exampleTranslation: "Moja kolekcja znaczków obejmuje ponad tysiąc rzadkich egzemplarzy z całego świata." },
      { id: "lei13", polish: "Jakie masz zainteresowania?", german: "Was sind deine Interessen?", difficulty: "hard", example: "Was sind deine Interessen und Hobbys? Ich möchte dich besser kennenlernen!", exampleTranslation: "Jakie są twoje zainteresowania i hobby? Chcę cię lepiej poznać!" },
      { id: "lei14", polish: "Lubię fotografować", german: "Ich fotografiere gerne", difficulty: "hard", example: "Ich fotografiere sehr gerne die Natur und gehe oft in die Berge dafür!", exampleTranslation: "Bardzo lubię fotografować przyrodę i często chodzę w góry po to!" },
      { id: "lei15", polish: "To fascynujące", german: "Das ist faszinierend", difficulty: "hard", example: "Das ist wirklich faszinierend! Erzähl mir mehr über dein interessantes Hobby!", exampleTranslation: "To naprawdę fascynujące! Opowiedz mi więcej o twoim ciekawym hobby!" }
    ]
  },

  daily_routine: {
    name: "Codzienna rutyna",
    description: "Poranne i wieczorne codzienne czynności",
    icon: Calendar,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "rout1", polish: "Budzić się", german: "Aufwachen", difficulty: "easy", example: "Ich wache jeden Morgen um sechs Uhr auf ohne Wecker automatisch.", exampleTranslation: "Budzę się każdego ranka o szóstej bez budzika automatycznie." },
      { id: "rout2", polish: "Wstawać", german: "Aufstehen", difficulty: "easy", example: "Ich stehe sofort auf, wenn der Wecker klingelt jeden Morgen pünktlich.", exampleTranslation: "Wstaję natychmiast, gdy dzwoni budzik każdego ranka punktualnie." },
      { id: "rout3", polish: "Myć się", german: "Sich waschen", difficulty: "easy", example: "Ich wasche mich gründlich mit warmen Wasser und Seife jeden Morgen.", exampleTranslation: "Myję się dokładnie ciepłą wodą i mydłem każdego ranka." },
      { id: "rout4", polish: "Ubierać się", german: "Sich anziehen", difficulty: "easy", example: "Ich ziehe mich schnell an und frühstücke dann in Ruhe gemütlich.", exampleTranslation: "Ubieram się szybko a potem spokojnie śniadam przytulnie." },
      { id: "rout5", polish: "Śniadanie", german: "Frühstück", difficulty: "easy", example: "Das Frühstück ist die wichtigste Mahlzeit des ganzen Tages für Energie.", exampleTranslation: "Śniadanie jest najważniejszym posiłkiem całego dnia dla energii." },
      { id: "rout6", polish: "Iść do pracy", german: "Zur Arbeit gehen", difficulty: "easy", example: "Ich gehe um halb acht zur Arbeit mit dem Bus jeden Morgen.", exampleTranslation: "Idę o wpół do óśmej do pracy autobusem każdego ranka." },
      { id: "rout7", polish: "Przerwa", german: "Pause", difficulty: "medium", example: "Ich mache mittags eine Stunde Pause und esse etwas Leichtes zum Lunch.", exampleTranslation: "Robię w południe godzinę przerwy i jem coś lekkiego na lunch." },
      { id: "rout8", polish: "Wracać", german: "Zurückkommen", difficulty: "medium", example: "Ich komme normalerweise um sechs Uhr abends müde nach Hause zurück.", exampleTranslation: "Wracam normalnie o szóstej wieczorem zmęczony do domu." },
      { id: "rout9", polish: "Kolacja", german: "Abendessen", difficulty: "medium", example: "Zum Abendessen essen wir zusammen und reden über den Tag ausführlich.", exampleTranslation: "Na kolację jemy razem i rozmawiamy o dniu szczegółowo." },
      { id: "rout10", polish: "Relaks", german: "Entspannung", difficulty: "medium", example: "Nach der Arbeit brauche ich etwas Entspannung und schaue fern gemütlich.", exampleTranslation: "Po pracy potrzebuję trochę relaksu i oglądam telewizję przytulnie." },
      { id: "rout11", polish: "Kąpiel", german: "Bad", difficulty: "medium", example: "Ein warmes Bad am Abend hilft mir zu entspannen und besser zu schlafen.", exampleTranslation: "Ciepła kąpiel wieczorem pomaga mi się zrelaksować i lepiej spać." },
      { id: "rout12", polish: "Kłaść się spać", german: "Ins Bett gehen", difficulty: "medium", example: "Ich gehe normalerweise um zehn Uhr ins Bett für ausreichend Schlaf.", exampleTranslation: "Kładę się normalnie o dziesiątej do łóżka dla wystarczającego snu." },
      { id: "rout13", polish: "O której wstajesz?", german: "Um wie viel Uhr stehst du auf?", difficulty: "hard", example: "Um wie viel Uhr stehst du normalerweise an Arbeitstagen auf jeden Morgen?", exampleTranslation: "O której normalnie wstajesz w dni robocze każdego ranka?" },
      { id: "rout14", polish: "Jestem zmęczony", german: "Ich bin müde", difficulty: "hard", example: "Ich bin heute sehr müde und gehe früher ins Bett als normalerweise.", exampleTranslation: "Jestem dzisiaj bardzo zmęczony i idę wcześniej do łóżka niż normalnie." },
      { id: "rout15", polish: "Muszę odpocząć", german: "Ich muss mich ausruhen", difficulty: "hard", example: "Ich muss mich dringend ausruhen nach dieser anstrengenden langen Arbeitswoche!", exampleTranslation: "Muszę pilnie odpocząć po tym wyczerpującym długim tygodniu pracy!" }
    ]
  },

  restaurants_dining: {
    name: "Restauracje i jedzenie",
    description: "Zamawianie posiłków i doświadczenia kulinarne",
    icon: Utensils,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "din1", polish: "Restauracja", german: "Restaurant", difficulty: "easy", example: "Dieses Restaurant ist berühmt für seine ausgezeichnete deutsche Küche im ganzen Land.", exampleTranslation: "Ta restauracja jest słynna ze swojej doskonałej kuchni niemieckiej w całym kraju." },
      { id: "din2", polish: "Kelner", german: "Kellner", difficulty: "easy", example: "Der Kellner ist sehr freundlich und hilfsbereit mit allen Gästen immer.", exampleTranslation: "Kelner jest bardzo przyjazny i pomocny ze wszystkimi gośćmi zawsze." },
      { id: "din3", polish: "Menu", german: "Speisekarte", difficulty: "easy", example: "Kann ich bitte die Speisekarte sehen? Ich möchte etwas bestellen jetzt.", exampleTranslation: "Czy mogę proszę zobaczyć menu? Chcę coś zamówić teraz." },
      { id: "din4", polish: "Zamawiać", german: "Bestellen", difficulty: "easy", example: "Ich möchte das Schnitzel mit Kartoffelsalat bestellen bitte sehr.", exampleTranslation: "Chciałbym zamówić sznycel z sałatką ziemniaczaną proszę bardzo." },
      { id: "din5", polish: "Rachunek", german: "Rechnung", difficulty: "easy", example: "Die Rechnung bitte! Kann ich mit Karte bezahlen oder nur bar?", exampleTranslation: "Rachunek proszę! Mogę zapłacić kartą czy tylko gotówką?" },
      { id: "din6", polish: "Napiwek", german: "Trinkgeld", difficulty: "easy", example: "In Deutschland gibt man normalerweise zehn Prozent Trinkgeld für guten Service.", exampleTranslation: "W Niemczech normalnie daje się dziesięć procent napiwku za dobrą obsługę." },
      { id: "din7", polish: "Rezerwacja", german: "Reservierung", difficulty: "medium", example: "Ich habe eine Reservierung für vier Personen um acht Uhr abends gemacht.", exampleTranslation: "Zrobiłem rezerwację dla czterech osób na ósmą wieczorem." },
      { id: "din8", polish: "Stolik", german: "Tisch", difficulty: "medium", example: "Ist dieser Tisch frei? Wir sind zu dritt und suchen einen Platz.", exampleTranslation: "Czy ten stolik jest wolny? Jesteśmy we trójkę i szukamy miejsca." },
      { id: "din9", polish: "Danie główne", german: "Hauptgericht", difficulty: "medium", example: "Als Hauptgericht nehme ich das gegrillte Hähnchen mit frischem Gemüse bitte.", exampleTranslation: "Jako danie główne biorę grillowanego kurczaka ze świeżymi warzywami proszę." },
      { id: "din10", polish: "Deser", german: "Nachtisch", difficulty: "medium", example: "Zum Nachtisch empfehle ich den hausgemachten Apfelstrudel mit Sahne sehr.", exampleTranslation: "Na deser polecam domowy szarlotka ze śmietaną bardzo." },
      { id: "din11", polish: "Przystawka", german: "Vorspeise", difficulty: "medium", example: "Als Vorspeise nehmen wir eine gemischte Salatplatte für zwei Personen zum Teilen.", exampleTranslation: "Jako przystawkę bierzemy mieszaną sałatkę dla dwóch osób do podzielenia." },
      { id: "din12", polish: "Pyszne", german: "Lecker", difficulty: "medium", example: "Das Essen war wirklich sehr lecker! Meine Komplimente an den Koch!", exampleTranslation: "Jedzenie było naprawdę bardzo pyszne! Moje komplementy dla kucharza!" },
      { id: "din13", polish: "Co Pan poleca?", german: "Was empfehlen Sie?", difficulty: "hard", example: "Was empfehlen Sie mir aus der Speisekarte? Ich kann mich nicht entscheiden!", exampleTranslation: "Co Pan poleca mi z menu? Nie mogę się zdecydować!" },
      { id: "din14", polish: "Było wyśmienite", german: "Es war ausgezeichnet", difficulty: "hard", example: "Das Essen war wirklich ausgezeichnet! Wir kommen gerne wieder bald!", exampleTranslation: "Jedzenie było naprawdę wyśmienite! Chętnie wrócimy wkrótce!" },
      { id: "din15", polish: "Stolik dla dwóch osób", german: "Ein Tisch für zwei", difficulty: "hard", example: "Guten Abend! Wir hätten gerne einen ruhigen Tisch für zwei Personen bitte.", exampleTranslation: "Dobry wieczór! Chcielibyśmy cichy stolik dla dwóch osób proszę." }
    ]
  },

  sleep_rest: {
    name: "Sen i odpoczynek",
    description: "Spanie, wypoczynek i regeneracja",
    icon: Bed,
    color: "from-indigo-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "sleep1", polish: "Spać", german: "Schlafen", difficulty: "easy", example: "Ich schlafe normalerweise acht Stunden jede Nacht für gute Gesundheit.", exampleTranslation: "Śpię normalnie osiem godzin każdej nocy dla dobrego zdrowia." },
      { id: "sleep2", polish: "Łóżko", german: "Bett", difficulty: "easy", example: "Mein Bett ist sehr bequem und ich schlafe darin wunderbar gut.", exampleTranslation: "Moje łóżko jest bardzo wygodne i śpię w nim wspaniale dobrze." },
      { id: "sleep3", polish: "Poduszka", german: "Kissen", difficulty: "easy", example: "Ich brauche ein weiches Kissen für einen bequemen erholsamen Schlaf.", exampleTranslation: "Potrzebuję miękkiej poduszki dla wygodnego regenerującego snu." },
      { id: "sleep4", polish: "Kołdra", german: "Decke", difficulty: "easy", example: "Die Decke hält mich warm in den kalten Winternächten zu Hause.", exampleTranslation: "Kołdra trzyma mnie w cieple w zimne zimowe noce w domu." },
      { id: "sleep5", polish: "Sen", german: "Traum", difficulty: "easy", example: "Ich hatte letzte Nacht einen seltsamen aber interessanten Traum gehabt.", exampleTranslation: "Miałem zeszłej nocy dziwny ale ciekawy sen." },
      { id: "sleep6", polish: "Budzik", german: "Wecker", difficulty: "easy", example: "Der Wecker klingelt jeden Morgen um sechs Uhr laut und weckt mich.", exampleTranslation: "Budzik dzwoni każdego ranka o szóstej głośno i budzi mnie." },
      { id: "sleep7", polish: "Zmęczony", german: "Müde", difficulty: "medium", example: "Ich bin heute sehr müde, weil ich letzte Nacht schlecht geschlafen habe.", exampleTranslation: "Jestem dzisiaj bardzo zmęczony, bo zeszłej nocy źle spałem." },
      { id: "sleep8", polish: "Zasypiać", german: "Einschlafen", difficulty: "medium", example: "Ich kann nicht einschlafen, wenn es zu laut ist im Zimmer draußen.", exampleTranslation: "Nie mogę zasnąć, gdy jest za głośno w pokoju na zewnątrz." },
      { id: "sleep9", polish: "Drzemka", german: "Nickerchen", difficulty: "medium", example: "Nach dem Mittagessen mache ich gerne ein kurzes Nickerchen für Energie.", exampleTranslation: "Po obiedzie lubię robić krótką drzemkę dla energii." },
      { id: "sleep10", polish: "Bezsenność", german: "Schlaflosigkeit", difficulty: "medium", example: "Schlaflosigkeit ist ein Problem, ich kann nachts nicht gut durchschlafen oft.", exampleTranslation: "Bezsenność jest problemem, nie mogę w nocy dobrze przespać często." },
      { id: "sleep11", polish: "Chrapać", german: "Schnarchen", difficulty: "medium", example: "Mein Mann schnarcht nachts sehr laut und stört meinen Schlaf leider.", exampleTranslation: "Mój mąż chrapie w nocy bardzo głośno i przeszkadza mojemu snowi niestety." },
      { id: "sleep12", polish: "Wyspany", german: "Ausgeschlafen", difficulty: "medium", example: "Ich fühle mich heute gut ausgeschlafen und voller Energie für den Tag!", exampleTranslation: "Czuję się dzisiaj dobrze wyspany i pełen energii na dzień!" },
      { id: "sleep13", polish: "Jestem śpiący", german: "Ich bin schläfrig", difficulty: "hard", example: "Ich bin so schläfrig, ich gehe jetzt ins Bett schlafen sofort!", exampleTranslation: "Jestem taki śpiący, idę teraz do łóżka spać natychmiast!" },
      { id: "sleep14", polish: "Śpij dobrze", german: "Schlaf gut", difficulty: "hard", example: "Gute Nacht! Schlaf gut und träume süß von schönen Dingen!", exampleTranslation: "Dobranoc! Śpij dobrze i śnij słodko o pięknych rzeczach!" },
      { id: "sleep15", polish: "Nie mogę spać", german: "Ich kann nicht schlafen", difficulty: "hard", example: "Ich kann nicht schlafen, weil ich zu viel über die Arbeit nachdenke ständig.", exampleTranslation: "Nie mogę spać, bo za dużo myślę o pracy ciągle." }
    ]
  },

  energy_electricity: {
    name: "Energia i elektryczność",
    description: "Prąd, światło i urządzenia elektryczne",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "ener1", polish: "Prąd", german: "Strom", difficulty: "easy", example: "Der Strom ist ausgefallen und alles ist dunkel im ganzen Haus plötzlich.", exampleTranslation: "Prąd wyłączył się i wszystko jest ciemne w całym domu nagle." },
      { id: "ener2", polish: "Światło", german: "Licht", difficulty: "easy", example: "Mach bitte das Licht an, es wird schon dunkel im Zimmer draußen.", exampleTranslation: "Włącz proszę światło, robi się już ciemno w pokoju na zewnątrz." },
      { id: "ener3", polish: "Lampa", german: "Lampe", difficulty: "easy", example: "Die Lampe auf dem Tisch gibt ein warmes gemütliches Licht ab.", exampleTranslation: "Lampa na stole daje ciepłe przytulne światło." },
      { id: "ener4", polish: "Żarówka", german: "Glühbirne", difficulty: "easy", example: "Die Glühbirne ist kaputt und muss ausgetauscht werden dringend sofort.", exampleTranslation: "Żarówka jest zepsuta i musi być wymieniona pilnie natychmiast." },
      { id: "ener5", polish: "Włącznik", german: "Schalter", difficulty: "easy", example: "Der Lichtschalter ist dort an der Wand neben der Tür rechts.", exampleTranslation: "Włącznik światła jest tam na ścianie obok drzwi po prawej." },
      { id: "ener6", polish: "Gniazdko", german: "Steckdose", difficulty: "easy", example: "Ich brauche eine Steckdose, um mein Handy aufzuladen dringend jetzt.", exampleTranslation: "Potrzebuję gniazdka, aby naładować mój telefon pilnie teraz." },
      { id: "ener7", polish: "Kabel", german: "Kabel", difficulty: "medium", example: "Das Kabel ist zu kurz, ich brauche ein längeres Verlängerungskabel hier.", exampleTranslation: "Kabel jest za krótki, potrzebuję dłuższego przedłużacza tutaj." },
      { id: "ener8", polish: "Ładowarka", german: "Ladegerät", difficulty: "medium", example: "Ich habe mein Ladegerät zu Hause vergessen und der Akku ist leer.", exampleTranslation: "Zapomniałem mojej ładowarki w domu i bateria jest pusta." },
      { id: "ener9", polish: "Bateria", german: "Batterie", difficulty: "medium", example: "Die Batterie meines Laptops hält nur noch zwei Stunden ohne Strom.", exampleTranslation: "Bateria mojego laptopa wytrzymuje tylko jeszcze dwie godziny bez prądu." },
      { id: "ener10", polish: "Energia", german: "Energie", difficulty: "medium", example: "Wir müssen Energie sparen und das Licht ausschalten beim Verlassen immer.", exampleTranslation: "Musimy oszczędzać energię i wyłączać światło przy wychodzeniu zawsze." },
      { id: "ener11", polish: "Generator", german: "Generator", difficulty: "medium", example: "Bei Stromausfall haben wir einen Generator als Notversorgung im Keller stehen.", exampleTranslation: "Przy awarii prądu mamy generator jako awaryjne zaopatrzenie w piwnicy." },
      { id: "ener12", polish: "Oszczędzać", german: "Sparen", difficulty: "medium", example: "Wir sollten Strom sparen durch LED-Lampen und bewusstes Verhalten täglich.", exampleTranslation: "Powinniśmy oszczędzać prąd przez lampy LED i świadome zachowanie codziennie." },
      { id: "ener13", polish: "Nie ma prądu", german: "Es gibt keinen Strom", difficulty: "hard", example: "Es gibt keinen Strom im ganzen Gebäude wegen eines technischen Problems!", exampleTranslation: "Nie ma prądu w całym budynku z powodu problemu technicznego!" },
      { id: "ener14", polish: "Wyłącz światło", german: "Mach das Licht aus", difficulty: "hard", example: "Mach bitte das Licht aus, wenn du das Zimmer verlässt zum Stromsparen!", exampleTranslation: "Wyłącz proszę światło, gdy opuszczasz pokój do oszczędzania prądu!" },
      { id: "ener15", polish: "Bateria jest słaba", german: "Der Akku ist schwach", difficulty: "hard", example: "Der Akku meines Telefons ist fast leer, ich muss es aufladen dringend!", exampleTranslation: "Bateria mojego telefonu jest prawie pusta, muszę go naładować pilnie!" }
    ]
  },

  temperature_comfort: {
    name: "Temperatura i komfort",
    description: "Temperatura, ogrzewanie i klimatyzacja",
    icon: Thermometer,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { id: "temp1", polish: "Ciepło", german: "Warm", difficulty: "easy", example: "Es ist angenehm warm heute, perfekt für einen Spaziergang draußen!", exampleTranslation: "Jest przyjemnie ciepło dzisiaj, idealnie na spacer na zewnątrz!" },
      { id: "temp2", polish: "Zimno", german: "Kalt", difficulty: "easy", example: "Mir ist sehr kalt, können wir bitte die Heizung anmachen jetzt?", exampleTranslation: "Jest mi bardzo zimno, czy możemy proszę włączyć ogrzewanie teraz?" },
      { id: "temp3", polish: "Gorąco", german: "Heiß", difficulty: "easy", example: "Es ist viel zu heiß hier drinnen, öffne bitte das Fenster weit!", exampleTranslation: "Jest za gorąco tutaj w środku, otwórz proszę okno szeroko!" },
      { id: "temp4", polish: "Temperatura", german: "Temperatur", difficulty: "easy", example: "Die Temperatur beträgt heute fünfundzwanzig Grad Celsius draußen im Schatten.", exampleTranslation: "Temperatura wynosi dzisiaj dwadzieścia pięć stopni Celsjusza na zewnątrz w cieniu." },
      { id: "temp5", polish: "Ogrzewanie", german: "Heizung", difficulty: "easy", example: "Im Winter brauchen wir die Heizung, sonst frieren wir zu Hause.", exampleTranslation: "Zimą potrzebujemy ogrzewania, inaczej marzniemy w domu." },
      { id: "temp6", polish: "Klimatyzacja", german: "Klimaanlage", difficulty: "easy", example: "Die Klimaanlage kühlt das Zimmer an heißen Sommertagen angenehm ab.", exampleTranslation: "Klimatyzacja chłodzi pokój w gorące letnie dni przyjemnie." },
      { id: "temp7", polish: "Wentylator", german: "Ventilator", difficulty: "medium", example: "Der Ventilator hilft gegen die Hitze, wenn keine Klimaanlage vorhanden ist.", exampleTranslation: "Wentylator pomaga przeciw upałowi, gdy nie ma klimatyzacji." },
      { id: "temp8", polish: "Termometr", german: "Thermometer", difficulty: "medium", example: "Das Thermometer zeigt minus zehn Grad, es ist sehr kalt draußen!", exampleTranslation: "Termometr pokazuje minus dziesięć stopni, jest bardzo zimno na zewnątrz!" },
      { id: "temp9", polish: "Mróz", german: "Frost", difficulty: "medium", example: "Der Frost hat alle Pflanzen im Garten über Nacht beschädigt leider.", exampleTranslation: "Mróz uszkodził wszystkie rośliny w ogrodzie przez noc niestety." },
      { id: "temp10", polish: "Upał", german: "Hitze", difficulty: "medium", example: "Die Hitze im Sommer ist unerträglich, ich bleibe lieber drinnen kühl.", exampleTranslation: "Upał latem jest nie do zniesienia, ja wolę zostać w środku w chłodzie." },
      { id: "temp11", polish: "Chłodno", german: "Kühl", difficulty: "medium", example: "Es ist kühl am Abend, nimm eine leichte Jacke mit sicherheitshalber!", exampleTranslation: "Jest chłodno wieczorem, weź lekką kurtkę dla bezpieczeństwa!" },
      { id: "temp12", polish: "Przyjemnie", german: "Angenehm", difficulty: "medium", example: "Die Temperatur ist sehr angenehm zum Spazierengehen im Park heute.", exampleTranslation: "Temperatura jest bardzo przyjemna do spacerowania w parku dzisiaj." },
      { id: "temp13", polish: "Jest mi zimno", german: "Mir ist kalt", difficulty: "hard", example: "Mir ist so kalt! Können wir bitte die Heizung höher stellen sofort?", exampleTranslation: "Jest mi tak zimno! Czy możemy proszę podkręcić ogrzewanie natychmiast?" },
      { id: "temp14", polish: "Jest mi gorąco", german: "Mir ist heiß", difficulty: "hard", example: "Mir ist sehr heiß! Kann ich bitte ein Glas kaltes Wasser haben?", exampleTranslation: "Jest mi bardzo gorąco! Czy mogę proszę dostać szklankę zimnej wody?" },
      { id: "temp15", polish: "Jaka jest temperatura?", german: "Wie ist die Temperatur?", difficulty: "hard", example: "Wie ist die Temperatur draußen? Soll ich eine Jacke mitnehmen oder nicht?", exampleTranslation: "Jaka jest temperatura na zewnątrz? Powinienem wziąć kurtkę czy nie?" }
    ]
  },

  celebrations_holidays: {
    name: "Święta i uroczystości",
    description: "Święta, urodziny i specjalne okazje",
    icon: Gift,
    color: "from-pink-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "cel1", polish: "Święto", german: "Feiertag", difficulty: "easy", example: "Weihnachten ist der wichtigste Feiertag in Deutschland für alle Familien.", exampleTranslation: "Boże Narodzenie jest najważniejszym świętem w Niemczech dla wszystkich rodzin." },
      { id: "cel2", polish: "Urodziny", german: "Geburtstag", difficulty: "easy", example: "Mein Geburtstag ist im Juli und ich plane eine große Party mit Freunden.", exampleTranslation: "Moje urodziny są w lipcu i planuję dużą imprezę z przyjaciółmi." },
      { id: "cel3", polish: "Prezent", german: "Geschenk", difficulty: "easy", example: "Ich habe ein schönes Geschenk für meine Mutter zum Geburtstag gekauft.", exampleTranslation: "Kupiłem piękny prezent dla mojej mamy na urodziny." },
      { id: "cel4", polish: "Tort", german: "Kuchen", difficulty: "easy", example: "Der Geburtstagskuchen ist schokoladig und sieht sehr lecker aus wirklich!", exampleTranslation: "Tort urodzinowy jest czekoladowy i wygląda bardzo smacznie naprawdę!" },
      { id: "cel5", polish: "Świeczki", german: "Kerzen", difficulty: "easy", example: "Blas die Kerzen aus und wünsch dir etwas Schönes für dich!", exampleTranslation: "Zdmuchnij świeczki i pomyśl sobie coś pięknego dla siebie!" },
      { id: "cel6", polish: "Przyjęcie", german: "Party", difficulty: "easy", example: "Wir organisieren eine große Party mit vielen Gästen am Wochenende.", exampleTranslation: "Organizujemy dużą imprezę z wieloma gośćmi w weekend." },
      { id: "cel7", polish: "Boże Narodzenie", german: "Weihnachten", difficulty: "medium", example: "Zu Weihnachten feiern wir immer zusammen mit der ganzen Familie zu Hause.", exampleTranslation: "Na Boże Narodzenie zawsze świętujemy razem z całą rodziną w domu." },
      { id: "cel8", polish: "Nowy Rok", german: "Neujahr", difficulty: "medium", example: "An Neujahr feiern wir mit Feuerwerk und Champagner um Mitternacht laut.", exampleTranslation: "W Nowy Rok świętujemy fajerwerkami i szampanem o północy głośno." },
      { id: "cel9", polish: "Wesele", german: "Hochzeit", difficulty: "medium", example: "Die Hochzeit meiner Schwester war wunderschön und sehr emotional für alle.", exampleTranslation: "Wesele mojej siostry było piękne i bardzo emocjonalne dla wszystkich." },
      { id: "cel10", polish: "Gratulacje", german: "Gratulation", difficulty: "medium", example: "Herzliche Gratulation zum Abschluss! Du hast es wirklich verdient sehr!", exampleTranslation: "Serdeczne gratulacje z okazji ukończenia! Naprawdę na to zasłużyłeś bardzo!" },
      { id: "cel11", polish: "Życzenia", german: "Wünsche", difficulty: "medium", example: "Ich sende dir die besten Wünsche zum Geburtstag von ganzem Herzen!", exampleTranslation: "Wysyłam ci najlepsze życzenia urodzinowe z całego serca!" },
      { id: "cel12", polish: "Zaproszenie", german: "Einladung", difficulty: "medium", example: "Hast du meine Einladung zur Party bekommen? Ich hoffe du kommst!", exampleTranslation: "Dostałeś moje zaproszenie na imprezę? Mam nadzieję że przyjdziesz!" },
      { id: "cel13", polish: "Wszystkiego najlepszego!", german: "Alles Gute!", difficulty: "hard", example: "Alles Gute zum Geburtstag! Ich wünsche dir Gesundheit, Glück und Erfolg!", exampleTranslation: "Wszystkiego najlepszego! Życzę ci zdrowia, szczęścia i sukcesu!" },
      { id: "cel14", polish: "Świętujmy!", german: "Lass uns feiern!", difficulty: "hard", example: "Das ist ein großer Erfolg! Lass uns heute Abend richtig feiern zusammen!", exampleTranslation: "To wielki sukces! Świętujmy dzisiaj wieczorem porządnie razem!" },
      { id: "cel15", polish: "Dziękuję za prezent", german: "Danke für das Geschenk", difficulty: "hard", example: "Vielen Dank für das wunderbare Geschenk! Das ist genau was ich wollte!", exampleTranslation: "Bardzo dziękuję za wspaniały prezent! To dokładnie to czego chciałem!" }
    ]
  },

  success_achievement: {
    name: "Sukces i osiągnięcia",
    description: "Cele, osiągnięcia i motywacja",
    icon: Star,
    color: "from-amber-500 to-yellow-600",
    level: "advanced",
    words: [
      { id: "succ1", polish: "Sukces", german: "Erfolg", difficulty: "easy", example: "Der Erfolg kommt durch harte Arbeit und Ausdauer jeden einzelnen Tag.", exampleTranslation: "Sukces przychodzi przez ciężką pracę i wytrwałość każdego dnia." },
      { id: "succ2", polish: "Cel", german: "Ziel", difficulty: "easy", example: "Mein Ziel ist es, fließend Deutsch zu sprechen in diesem Jahr.", exampleTranslation: "Moim celem jest mówić płynnie po niemiecku w tym roku." },
      { id: "succ3", polish: "Wygrać", german: "Gewinnen", difficulty: "easy", example: "Unsere Mannschaft hat das wichtige Spiel gewonnen durch Teamarbeit gestern!", exampleTranslation: "Nasza drużyna wygrała ważny mecz przez pracę zespołową wczoraj!" },
      { id: "succ4", polish: "Nagroda", german: "Preis", difficulty: "easy", example: "Ich habe den ersten Preis im Wettbewerb gewonnen und bin stolz!", exampleTranslation: "Wygrałem pierwszą nagrodę w konkursie i jestem dumny!" },
      { id: "succ5", polish: "Osiągnięcie", german: "Leistung", difficulty: "easy", example: "Das ist eine großartige Leistung und du solltest stolz darauf sein!", exampleTranslation: "To wspaniałe osiągnięcie i powinieneś być z tego dumny!" },
      { id: "succ6", polish: "Dumny", german: "Stolz", difficulty: "easy", example: "Ich bin sehr stolz auf meine Tochter für ihre tollen Schulnoten!", exampleTranslation: "Jestem bardzo dumny z mojej córki za jej wspaniałe oceny w szkole!" },
      { id: "succ7", polish: "Zwycięstwo", german: "Sieg", difficulty: "medium", example: "Der Sieg war hart erkämpft, aber wir haben es geschafft zusammen!", exampleTranslation: "Zwycięstwo było ciężko wywalczone, ale udało nam się razem!" },
      { id: "succ8", polish: "Wysiłek", german: "Anstrengung", difficulty: "medium", example: "Deine Anstrengung und dein Engagement werden sehr geschätzt von allen hier!", exampleTranslation: "Twój wysiłek i zaangażowanie są bardzo cenione przez wszystkich tutaj!" },
      { id: "succ9", polish: "Ambicja", german: "Ehrgeiz", difficulty: "medium", example: "Mit Ehrgeiz und Fleiß kann man alle Ziele erreichen im Leben!", exampleTranslation: "Z ambicją i pilnością można osiągnąć wszystkie cele w życiu!" },
      { id: "succ10", polish: "Motywacja", german: "Motivation", difficulty: "medium", example: "Ich finde meine Motivation durch klare Ziele und positive Gedanken täglich.", exampleTranslation: "Znajduję moją motywację przez jasne cele i pozytywne myśli codziennie." },
      { id: "succ11", polish: "Determinacja", german: "Entschlossenheit", difficulty: "medium", example: "Mit Entschlossenheit und Ausdauer erreicht man jedes noch so schwierige Ziel!", exampleTranslation: "Z determinacją i wytrwałością osiąga się każdy nawet tak trudny cel!" },
      { id: "succ12", polish: "Wytrwałość", german: "Ausdauer", difficulty: "medium", example: "Ausdauer ist der Schlüssel zum Erfolg in allen Lebensbereichen immer!", exampleTranslation: "Wytrwałość jest kluczem do sukcesu we wszystkich dziedzinach życia zawsze!" },
      { id: "succ13", polish: "Udało mi się!", german: "Ich habe es geschafft!", difficulty: "hard", example: "Ich habe es endlich geschafft! Nach Jahren harter Arbeit habe ich mein Diplom!", exampleTranslation: "Udało mi się w końcu! Po latach ciężkiej pracy mam mój dyplom!" },
      { id: "succ14", polish: "Jestem dumny z siebie", german: "Ich bin stolz auf mich", difficulty: "hard", example: "Ich bin wirklich stolz auf mich für diese großartige Leistung heute!", exampleTranslation: "Jestem naprawdę dumny z siebie za to wspaniałe osiągnięcie dzisiaj!" },
      { id: "succ15", polish: "Nie poddawaj się", german: "Gib nicht auf", difficulty: "hard", example: "Gib niemals auf! Mit Ausdauer und Geduld schaffst du alles im Leben!", exampleTranslation: "Nigdy się nie poddawaj! Z wytrwałością i cierpliwością osiągniesz wszystko w życiu!" }
    ]
  },

  reading_books: {
    name: "Czytanie i książki",
    description: "Literatura, czytanie i biblioteki",
    icon: Book,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "book1", polish: "Książka", german: "Buch", difficulty: "easy", example: "Dieses Buch ist sehr spannend und ich kann es nicht weglegen!", exampleTranslation: "Ta książka jest bardzo ekscytująca i nie mogę jej odłożyć!" },
      { id: "book2", polish: "Czytać", german: "Lesen", difficulty: "easy", example: "Ich lese jeden Abend mindestens dreißig Minuten vor dem Einschlafen regelmäßig.", exampleTranslation: "Czytam każdego wieczoru przynajmniej trzydzieści minut przed zaśnięciem regularnie." },
      { id: "book3", polish: "Autor", german: "Autor", difficulty: "easy", example: "Der Autor dieses Romans ist sehr berühmt in der ganzen Welt bekannt.", exampleTranslation: "Autor tej powieści jest bardzo słynny na całym świecie znany." },
      { id: "book4", polish: "Strona", german: "Seite", difficulty: "easy", example: "Ich habe schon hundert Seiten gelesen und das Buch hat dreihundert insgesamt.", exampleTranslation: "Przeczytałem już sto stron a książka ma trzysta w sumie." },
      { id: "book5", polish: "Rozdział", german: "Kapitel", difficulty: "easy", example: "Jedes Kapitel erzählt eine andere interessante Geschichte aus der Vergangenheit.", exampleTranslation: "Każdy rozdział opowiada inną ciekawą historię z przeszłości." },
      { id: "book6", polish: "Biblioteka", german: "Bibliothek", difficulty: "easy", example: "Die Bibliothek hat tausende Bücher zum kostenlosen Ausleihen für alle.", exampleTranslation: "Biblioteka ma tysiące książek do darmowego wypożyczenia dla wszystkich." },
      { id: "book7", polish: "Powieść", german: "Roman", difficulty: "medium", example: "Dieser historische Roman beschreibt das Leben während des Krieges sehr detailliert.", exampleTranslation: "Ta powieść historyczna opisuje życie podczas wojny bardzo szczegółowo." },
      { id: "book8", polish: "Opowiadanie", german: "Erzählung", difficulty: "medium", example: "Diese kurze Erzählung ist perfekt zum Lesen vor dem Schlafengehen abends.", exampleTranslation: "To krótkie opowiadanie jest idealne do czytania przed snem wieczorem." },
      { id: "book9", polish: "Bestseller", german: "Bestseller", difficulty: "medium", example: "Dieser Bestseller hat sich millionenfach weltweit verkauft in nur sechs Monaten!", exampleTranslation: "Ten bestseller sprzedał się miliony razy na całym świecie w tylko sześć miesięcy!" },
      { id: "book10", polish: "Zakładka", german: "Lesezeichen", difficulty: "medium", example: "Ich benutze ein schönes Lesezeichen, um meine Stelle im Buch zu markieren.", exampleTranslation: "Używam pięknej zakładki, aby zaznaczyć moje miejsce w książce." },
      { id: "book11", polish: "Recenzja", german: "Rezension", difficulty: "medium", example: "Die Rezensionen dieses Buches sind ausgezeichnet, ich muss es lesen unbedingt!", exampleTranslation: "Recenzje tej książki są doskonałe, muszę ją przeczytać koniecznie!" },
      { id: "book12", polish: "Biografia", german: "Biografie", difficulty: "medium", example: "Ich lese gerade eine faszinierende Biografie über einen berühmten Wissenschaftler ausführlich.", exampleTranslation: "Czytam właśnie fascynującą biografię o słynnym naukowcu szczegółowo." },
      { id: "book13", polish: "Co czytasz?", german: "Was liest du?", difficulty: "hard", example: "Was liest du gerade für ein interessantes Buch? Ich suche Empfehlungen!", exampleTranslation: "Co czytasz właśnie za ciekawą książkę? Szukam rekomendacji!" },
      { id: "book14", polish: "Polecam tę książkę", german: "Ich empfehle dieses Buch", difficulty: "hard", example: "Ich empfehle dieses Buch wirklich jedem, der gute Literatur schätzt sehr!", exampleTranslation: "Polecam tę książkę naprawdę każdemu, kto ceni dobrą literaturę bardzo!" },
      { id: "book15", polish: "Nie mogę się oderwać", german: "Ich kann nicht aufhören", difficulty: "hard", example: "Ich kann nicht aufhören zu lesen! Dieses Buch ist so spannend und fesselnd!", exampleTranslation: "Nie mogę przestać czytać! Ta książka jest tak ekscytująca i wciągająca!" }
    ]
  }
};
