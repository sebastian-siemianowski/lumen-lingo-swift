/**
 * POLISH → GERMAN FLASHCARDS - PART 3
 * 
 * Native Language: Polish (Polski)
 * Target Language: German (Deutsch)
 * 
 * This file contains additional flashcard categories (31-40).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Dumbbell,
  Stethoscope,
  Tv,
  PenTool,
  Flower,
  Droplet,
  Wallet,
  Compass,
  AlertTriangle,
  MessageSquare,
  ChefHat
} from "lucide-react";

export const flashcardsCategories_part3 = {
  sports_fitness: {
    name: "Sport i fitness",
    description: "Aktywność fizyczna i ćwiczenia",
    icon: Dumbbell,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { id: "sport1", polish: "Sport", german: "Sport", difficulty: "easy", example: "Sport ist sehr wichtig für unsere Gesundheit und das allgemeine Wohlbefinden.", exampleTranslation: "Sport jest bardzo ważny dla naszego zdrowia i ogólnego samopoczucia." },
      { id: "sport2", polish: "Biegać", german: "Laufen", difficulty: "easy", example: "Ich laufe jeden Morgen fünf Kilometer im Park für meine Fitness.", exampleTranslation: "Biegam każdego ranka pięć kilometrów w parku dla mojej kondycji." },
      { id: "sport3", polish: "Pływać", german: "Schwimmen", difficulty: "easy", example: "Ich schwimme zweimal pro Woche im Hallenbad für gute Kondition.", exampleTranslation: "Pływam dwa razy w tygodniu na basenie krytym dla dobrej kondycji." },
      { id: "sport4", polish: "Piłka nożna", german: "Fußball", difficulty: "easy", example: "Fußball ist der beliebteste Sport in Deutschland und Europa insgesamt.", exampleTranslation: "Piłka nożna jest najpopularniejszym sportem w Niemczech i Europie ogólnie." },
      { id: "sport5", polish: "Siłownia", german: "Fitnessstudio", difficulty: "easy", example: "Ich gehe dreimal wöchentlich ins Fitnessstudio zum Krafttraining regelmäßig.", exampleTranslation: "Chodzę trzy razy w tygodniu na siłownię na trening siłowy regularnie." },
      { id: "sport6", polish: "Trening", german: "Training", difficulty: "easy", example: "Das Training heute war sehr anstrengend aber auch sehr effektiv für mich.", exampleTranslation: "Trening dzisiaj był bardzo wyczerpujący ale też bardzo efektywny dla mnie." },
      { id: "sport7", polish: "Zawodnik", german: "Sportler", difficulty: "medium", example: "Ein professioneller Sportler trainiert jeden Tag viele Stunden ohne Pause.", exampleTranslation: "Profesjonalny zawodnik trenuje każdego dnia wiele godzin bez przerwy." },
      { id: "sport8", polish: "Mecz", german: "Spiel", difficulty: "medium", example: "Das Fußballspiel gestern war sehr spannend und endete drei zu zwei.", exampleTranslation: "Mecz piłki nożnej wczoraj był bardzo ekscytujący i zakończył się trzy do dwóch." },
      { id: "sport9", polish: "Drużyna", german: "Mannschaft", difficulty: "medium", example: "Unsere Mannschaft hat hart trainiert und das Turnier gewonnen am Ende.", exampleTranslation: "Nasza drużyna ciężko trenowała i wygrała turniej na końcu." },
      { id: "sport10", polish: "Wynik", german: "Ergebnis", difficulty: "medium", example: "Das Ergebnis des Spiels war überraschend für alle Zuschauer im Stadion.", exampleTranslation: "Wynik meczu był zaskakujący dla wszystkich widzów na stadionie." },
      { id: "sport11", polish: "Mistrzostwo", german: "Meisterschaft", difficulty: "medium", example: "Die Weltmeisterschaft findet alle vier Jahre in einem anderen Land statt.", exampleTranslation: "Mistrzostwa świata odbywają się co cztery lata w innym kraju." },
      { id: "sport12", polish: "Wygrać", german: "Gewinnen", difficulty: "medium", example: "Wir haben das wichtige Spiel gewonnen dank hervorragender Teamarbeit zusammen!", exampleTranslation: "Wygraliśmy ważny mecz dzięki doskonałej pracy zespołowej razem!" },
      { id: "sport13", polish: "Uprawiam sport", german: "Ich treibe Sport", difficulty: "hard", example: "Ich treibe regelmäßig Sport, um gesund und fit zu bleiben immer.", exampleTranslation: "Uprawiam regularnie sport, aby pozostać zdrowym i sprawnym zawsze." },
      { id: "sport14", polish: "Jestem w dobrej formie", german: "Ich bin in guter Form", difficulty: "hard", example: "Ich bin in sehr guter Form dank täglichem Training und gesunder Ernährung!", exampleTranslation: "Jestem w bardzo dobrej formie dzięki codziennemu treningowi i zdrowemu odżywianiu!" },
      { id: "sport15", polish: "Chcę schudnąć", german: "Ich möchte abnehmen", difficulty: "hard", example: "Ich möchte zehn Kilo abnehmen durch regelmäßigen Sport und gesunde Ernährung.", exampleTranslation: "Chcę schudnąć dziesięć kilo przez regularny sport i zdrowe odżywianie." }
    ]
  },

  illness_medicine: {
    name: "Choroba i medycyna",
    description: "Dolegliwości zdrowotne i leczenie",
    icon: Stethoscope,
    color: "from-red-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "med1", polish: "Choroba", german: "Krankheit", difficulty: "easy", example: "Diese Krankheit ist sehr ansteckend und erfordert sofortige ärztliche Behandlung schnell.", exampleTranslation: "Ta choroba jest bardzo zakaźna i wymaga natychmiastowego leczenia lekarskiego szybko." },
      { id: "med2", polish: "Kaszel", german: "Husten", difficulty: "easy", example: "Ich habe einen starken Husten und Halsschmerzen seit drei Tagen schon.", exampleTranslation: "Mam silny kaszel i ból gardła od trzech dni już." },
      { id: "med3", polish: "Gorączka", german: "Fieber", difficulty: "easy", example: "Das Kind hat hohes Fieber und sollte sofort zum Arzt gebracht werden.", exampleTranslation: "Dziecko ma wysoką gorączkę i powinno być natychmiast zabrane do lekarza." },
      { id: "med4", polish: "Przeziębienie", german: "Erkältung", difficulty: "easy", example: "Ich habe mir eine Erkältung geholt vom kalten Wetter draußen gestern.", exampleTranslation: "Złapałem przeziębienie od zimnej pogody na zewnątrz wczoraj." },
      { id: "med5", polish: "Tabletka", german: "Tablette", difficulty: "easy", example: "Nehmen Sie drei Tabletten täglich nach den Mahlzeiten mit viel Wasser.", exampleTranslation: "Weź trzy tabletki dziennie po posiłkach z dużą ilością wody." },
      { id: "med6", polish: "Recepta", german: "Rezept", difficulty: "easy", example: "Der Arzt hat mir ein Rezept für Antibiotika verschrieben gegen Infektion.", exampleTranslation: "Lekarz przepisał mi receptę na antybiotyki przeciw infekcji." },
      { id: "med7", polish: "Badanie", german: "Untersuchung", difficulty: "medium", example: "Die ärztliche Untersuchung hat gezeigt, dass alles in Ordnung ist glücklicherweise.", exampleTranslation: "Badanie lekarskie pokazało, że wszystko jest w porządku na szczęście." },
      { id: "med8", polish: "Zastrzyk", german: "Spritze", difficulty: "medium", example: "Die Krankenschwester gibt mir eine Spritze gegen Grippe zur Vorbeugung heute.", exampleTranslation: "Pielęgniarka daje mi zastrzyk przeciw grypie do zapobiegania dzisiaj." },
      { id: "med9", polish: "Operacja", german: "Operation", difficulty: "medium", example: "Die Operation war erfolgreich und der Patient erholt sich gut jetzt.", exampleTranslation: "Operacja była udana i pacjent dobrze się teraz regeneruje." },
      { id: "med10", polish: "Alergia", german: "Allergie", difficulty: "medium", example: "Ich habe eine starke Allergie gegen Pollen und niese oft im Frühling.", exampleTranslation: "Mam silną alergię na pyłki i często kicham wiosną." },
      { id: "med11", polish: "Gips", german: "Gips", difficulty: "medium", example: "Nach dem Bruch muss ich sechs Wochen einen Gips am Arm tragen.", exampleTranslation: "Po złamaniu muszę nosić gips na ręce przez sześć tygodni." },
      { id: "med12", polish: "Bandaż", german: "Verband", difficulty: "medium", example: "Die Krankenschwester hat einen frischen Verband auf die Wunde angelegt sorgfältig.", exampleTranslation: "Pielęgniarka założyła świeży bandaż na ranę starannie." },
      { id: "med13", polish: "Boli mnie gardło", german: "Ich habe Halsschmerzen", difficulty: "hard", example: "Ich habe starke Halsschmerzen und kann kaum schlucken oder sprechen richtig.", exampleTranslation: "Boli mnie gardło mocno i ledwo mogę przełykać lub mówić prawidłowo." },
      { id: "med14", polish: "Potrzebuję antybiotyku", german: "Ich brauche Antibiotika", difficulty: "hard", example: "Ich brauche dringend Antibiotika für diese bakterielle Infektion vom Arzt verschrieben.", exampleTranslation: "Potrzebuję pilnie antybiotyku na tę infekcję bakteryjną przepisanego przez lekarza." },
      { id: "med15", polish: "Czuję się lepiej", german: "Ich fühle mich besser", difficulty: "hard", example: "Dank der Medikamente fühle ich mich heute viel besser als gestern endlich!", exampleTranslation: "Dzięki lekom czuję się dzisiaj dużo lepiej niż wczoraj w końcu!" }
    ]
  },

  entertainment_media: {
    name: "Rozrywka i media",
    description: "Rozrywka, telewizja i multimedia",
    icon: Tv,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "ent1", polish: "Telewizja", german: "Fernsehen", difficulty: "easy", example: "Ich sehe jeden Abend eine Stunde fern zur Entspannung nach Arbeit.", exampleTranslation: "Oglądam każdego wieczoru godzinę telewizji do relaksu po pracy." },
      { id: "ent2", polish: "Radio", german: "Radio", difficulty: "easy", example: "Im Auto höre ich immer Radio und die neuesten Nachrichten während Fahrt.", exampleTranslation: "W samochodzie zawsze słucham radia i najnowszych wiadomości podczas jazdy." },
      { id: "ent3", polish: "Film", german: "Film", difficulty: "easy", example: "Dieser Film war so spannend, dass ich ihn zweimal gesehen habe!", exampleTranslation: "Ten film był tak ekscytujący, że obejrzałem go dwa razy!" },
      { id: "ent4", polish: "Muzyka", german: "Musik", difficulty: "easy", example: "Ich höre gerne klassische Musik beim Arbeiten zur besseren Konzentration täglich.", exampleTranslation: "Lubię słuchać muzyki klasycznej podczas pracy do lepszej koncentracji codziennie." },
      { id: "ent5", polish: "Koncert", german: "Konzert", difficulty: "easy", example: "Nächste Woche gehen wir zu einem Rock-Konzert im großen Stadion zusammen.", exampleTranslation: "W przyszłym tygodniu idziemy na koncert rockowy na dużym stadionie razem." },
      { id: "ent6", polish: "Kino", german: "Kino", difficulty: "easy", example: "Das Kino zeigt heute den neuesten Blockbuster um acht Uhr abends.", exampleTranslation: "Kino pokazuje dzisiaj najnowszy blockbuster o ósmej wieczorem." },
      { id: "ent7", polish: "Serial", german: "Serie", difficulty: "medium", example: "Diese Serie ist so fesselnd, dass ich schon zehn Folgen geschaut habe!", exampleTranslation: "Ten serial jest tak wciągający, że obejrzałem już dziesięć odcinków!" },
      { id: "ent8", polish: "Odcinek", german: "Folge", difficulty: "medium", example: "Die letzte Folge der Serie war sehr überraschend und spannend für alle.", exampleTranslation: "Ostatni odcinek serialu był bardzo zaskakujący i ekscytujący dla wszystkich." },
      { id: "ent9", polish: "Aktor", german: "Schauspieler", difficulty: "medium", example: "Dieser berühmte Schauspieler hat in vielen erfolgreichen Filmen mitgespielt weltweit.", exampleTranslation: "Ten słynny aktor zagrał w wielu udanych filmach na całym świecie." },
      { id: "ent10", polish: "Reżyser", german: "Regisseur", difficulty: "medium", example: "Der Regisseur hat für diesen Film einen Oscar gewonnen verdient!", exampleTranslation: "Reżyser otrzymał Oscara za ten film zasłużenie!" },
      { id: "ent11", polish: "Reklama", german: "Werbung", difficulty: "medium", example: "Die Werbung im Fernsehen unterbricht immer die interessantesten Momente im Film.", exampleTranslation: "Reklama w telewizji zawsze przerywa najciekawsze momenty w filmie." },
      { id: "ent12", polish: "Kanał", german: "Kanal", difficulty: "medium", example: "Auf welchem Kanal läuft heute Abend das Fußballspiel im Fernsehen?", exampleTranslation: "Na którym kanale jest dzisiaj wieczorem mecz piłki nożnej w telewizji?" },
      { id: "ent13", polish: "Co leci w telewizji?", german: "Was läuft im Fernsehen?", difficulty: "hard", example: "Was läuft heute Abend im Fernsehen? Gibt es etwas Interessantes zu sehen?", exampleTranslation: "Co leci dzisiaj wieczorem w telewizji? Czy jest coś ciekawego do obejrzenia?" },
      { id: "ent14", polish: "Polecasz ten film?", german: "Empfiehlst du diesen Film?", difficulty: "hard", example: "Empfiehlst du mir diesen Film wirklich? Ich habe gemischte Kritiken darüber gelesen.", exampleTranslation: "Polecasz mi naprawdę ten film? Przeczytałem mieszane recenzje o nim." },
      { id: "ent15", polish: "To świetny film", german: "Das ist ein toller Film", difficulty: "hard", example: "Das ist wirklich ein toller Film! Ich habe selten etwas so Gutes gesehen!", exampleTranslation: "To naprawdę świetny film! Rzadko widziałem coś tak dobrego!" }
    ]
  },

  office_work_tools: {
    name: "Biuro i narzędzia pracy",
    description: "Przybory biurowe i sprzęt do pracy",
    icon: PenTool,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "off1", polish: "Biurko", german: "Schreibtisch", difficulty: "easy", example: "Mein Schreibtisch ist groß und hat viel Platz für alle wichtigen Dokumente.", exampleTranslation: "Moje biurko jest duże i ma dużo miejsca na wszystkie ważne dokumenty." },
      { id: "off2", polish: "Krzesło", german: "Stuhl", difficulty: "easy", example: "Ein bequemer Stuhl ist sehr wichtig für langes gesundes Arbeiten am Computer.", exampleTranslation: "Wygodne krzesło jest bardzo ważne dla długiej zdrowej pracy przy komputerze." },
      { id: "off3", polish: "Papier", german: "Papier", difficulty: "easy", example: "Wir brauchen mehr Papier für den Drucker im Büro dringend heute.", exampleTranslation: "Potrzebujemy więcej papieru do drukarki w biurze pilnie dzisiaj." },
      { id: "off4", polish: "Ołówek", german: "Bleistift", difficulty: "easy", example: "Ich schreibe lieber mit einem Bleistift, weil man Fehler ausradieren kann.", exampleTranslation: "Wolę pisać ołówkiem, bo można wymazać błędy." },
      { id: "off5", polish: "Gumka", german: "Radiergummi", difficulty: "easy", example: "Hast du einen Radiergummi? Ich habe einen Fehler gemacht beim Schreiben.", exampleTranslation: "Masz gumkę? Popełniłem błąd podczas pisania." },
      { id: "off6", polish: "Linijka", german: "Lineal", difficulty: "easy", example: "Ich brauche ein Lineal, um eine gerade Linie zu ziehen genau.", exampleTranslation: "Potrzebuję linijki, aby narysować prostą linię dokładnie." },
      { id: "off7", polish: "Zszywacz", german: "Hefter", difficulty: "medium", example: "Der Hefter ist leer, wir müssen neue Klammern kaufen für Dokumente.", exampleTranslation: "Zszywacz jest pusty, musimy kupić nowe zszywki na dokumenty." },
      { id: "off8", polish: "Dziurkacz", german: "Locher", difficulty: "medium", example: "Mit dem Locher mache ich Löcher in die Papiere für den Ordner.", exampleTranslation: "Dziurkaczem robię dziurki w papierach do segregatora." },
      { id: "off9", polish: "Segregator", german: "Ordner", difficulty: "medium", example: "Alle wichtigen Dokumente bewahre ich ordentlich in Ordnern auf systematisch.", exampleTranslation: "Wszystkie ważne dokumenty przechowuję porządnie w segregatorach systematycznie." },
      { id: "off10", polish: "Drukarka", german: "Drucker", difficulty: "medium", example: "Der Drucker funktioniert nicht mehr, wir müssen ihn reparieren lassen schnell.", exampleTranslation: "Drukarka już nie działa, musimy ją naprawić szybko." },
      { id: "off11", polish: "Skaner", german: "Scanner", difficulty: "medium", example: "Ich scanne alle Dokumente mit dem Scanner und speichere sie digital sicher.", exampleTranslation: "Skanuję wszystkie dokumenty skanerem i zapisuję je cyfrowo bezpiecznie." },
      { id: "off12", polish: "Teczka", german: "Mappe", difficulty: "medium", example: "Ich trage alle Unterlagen in einer schwarzen Ledermappe zur Besprechung mit.", exampleTranslation: "Noszę wszystkie dokumenty w czarnej skórzanej teczce na spotkanie." },
      { id: "off13", polish: "Gdzie jest drukarka?", german: "Wo ist der Drucker?", difficulty: "hard", example: "Entschuldigung, wo ist der Drucker? Ich muss dringend etwas ausdrucken jetzt!", exampleTranslation: "Przepraszam, gdzie jest drukarka? Muszę pilnie coś wydrukować teraz!" },
      { id: "off14", polish: "Skończyły się zszywki", german: "Die Klammern sind alle", difficulty: "hard", example: "Die Klammern sind alle aufgebraucht, kannst du neue kaufen heute noch?", exampleTranslation: "Skończyły się zszywki, możesz kupić nowe jeszcze dzisiaj?" },
      { id: "off15", polish: "Potrzebuję papieru", german: "Ich brauche Papier", difficulty: "hard", example: "Ich brauche dringend mehr Papier zum Drucken der wichtigen Dokumente sofort!", exampleTranslation: "Potrzebuję pilnie więcej papieru do drukowania ważnych dokumentów natychmiast!" }
    ]
  },

  gardening_plants: {
    name: "Ogrodnictwo i rośliny",
    description: "Praca w ogrodzie i uprawa roślin",
    icon: Flower,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "gard1", polish: "Ogród", german: "Garten", difficulty: "easy", example: "Unser Garten ist groß und voller schöner bunter Blumen im Sommer.", exampleTranslation: "Nasz ogród jest duży i pełen pięknych kolorowych kwiatów latem." },
      { id: "gard2", polish: "Roślina", german: "Pflanze", difficulty: "easy", example: "Diese Pflanze braucht viel Wasser und Sonnenlicht zum guten Wachsen.", exampleTranslation: "Ta roślina potrzebuje dużo wody i światła słonecznego do dobrego wzrostu." },
      { id: "gard3", polish: "Kwiat", german: "Blume", difficulty: "easy", example: "Im Frühling blühen überall wunderschöne Blumen in allen Farben des Regenbogens.", exampleTranslation: "Wiosną kwitną wszędzie piękne kwiaty we wszystkich kolorach tęczy." },
      { id: "gard4", polish: "Drzewo", german: "Baum", difficulty: "easy", example: "Wir haben gestern einen Apfelbaum im Garten gepflanzt für Zukunft.", exampleTranslation: "Zasadziliśmy wczoraj jabłoń w ogrodzie na przyszłość." },
      { id: "gard5", polish: "Trawnik", german: "Rasen", difficulty: "easy", example: "Der Rasen muss jede Woche gemäht werden im Sommer regelmäßig.", exampleTranslation: "Trawnik musi być koszony co tydzień latem regularnie." },
      { id: "gard6", polish: "Podlewać", german: "Gießen", difficulty: "easy", example: "Ich muss die Blumen jeden Abend gießen, besonders an heißen Tagen.", exampleTranslation: "Muszę podlewać kwiaty każdego wieczoru, szczególnie w gorące dni." },
      { id: "gard7", polish: "Sadzić", german: "Pflanzen", difficulty: "medium", example: "Im Frühling pflanzen wir Gemüse und Blumen im großen Garten hinter Haus.", exampleTranslation: "Wiosną sadzimy warzywa i kwiaty w dużym ogrodzie za domem." },
      { id: "gard8", polish: "Nasiona", german: "Samen", difficulty: "medium", example: "Ich habe Samen für Tomaten und Gurken gekauft im Gartengeschäft gestern.", exampleTranslation: "Kupiłem nasiona pomidorów i ogórków w sklepie ogrodniczym wczoraj." },
      { id: "gard9", polish: "Łopata", german: "Schaufel", difficulty: "medium", example: "Mit der Schaufel grabe ich Löcher für neue Pflanzen im Garten tief.", exampleTranslation: "Łopatą kopię dziury na nowe rośliny w ogrodzie głęboko." },
      { id: "gard10", polish: "Grabie", german: "Rechen", difficulty: "medium", example: "Im Herbst sammle ich die Blätter mit dem Rechen vom Rasen auf.", exampleTranslation: "Jesienią zbieram liście grabiami z trawnika." },
      { id: "gard11", polish: "Konewka", german: "Gießkanne", difficulty: "medium", example: "Ich fülle die Gießkanne mit Wasser und gieße alle Blumen sorgfältig.", exampleTranslation: "Napełniam konewkę wodą i podlewam wszystkie kwiaty starannie." },
      { id: "gard12", polish: "Kompost", german: "Kompost", difficulty: "medium", example: "Wir machen Kompost aus Küchenabfällen für natürlichen Dünger im Garten.", exampleTranslation: "Robimy kompost z odpadków kuchennych na naturalny nawóz w ogrodzie." },
      { id: "gard13", polish: "Muszę skosić trawnik", german: "Ich muss den Rasen mähen", difficulty: "hard", example: "Ich muss heute unbedingt den Rasen mähen, er ist schon viel zu lang!", exampleTranslation: "Muszę dzisiaj koniecznie skosić trawnik, jest już za długi!" },
      { id: "gard14", polish: "Rośliny rosną pięknie", german: "Die Pflanzen wachsen schön", difficulty: "hard", example: "Die Pflanzen wachsen wunderbar schön dank gutem Wetter und regelmäßiger Pflege!", exampleTranslation: "Rośliny rosną cudownie pięknie dzięki dobrej pogodzie i regularnej pielęgnacji!" },
      { id: "gard15", polish: "Uwielbiam ogrodnictwo", german: "Ich liebe Gartenarbeit", difficulty: "hard", example: "Ich liebe Gartenarbeit sehr, es entspannt mich und macht mir große Freude!", exampleTranslation: "Uwielbiam ogrodnictwo bardzo, relaksuje mnie i sprawia mi wielką radość!" }
    ]
  },

  personal_care: {
    name: "Higiena osobista",
    description: "Pielęgnacja ciała i higiena",
    icon: Droplet,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "care1", polish: "Mydło", german: "Seife", difficulty: "easy", example: "Wasch dir die Hände gründlich mit Seife vor jedem Essen immer!", exampleTranslation: "Umyj sobie ręce dokładnie mydłem przed każdym jedzeniem zawsze!" },
      { id: "care2", polish: "Szampon", german: "Shampoo", difficulty: "easy", example: "Dieses Shampoo macht meine Haare weich und glänzend nach Waschen.", exampleTranslation: "Ten szampon czyni moje włosy miękkimi i lśniącymi po myciu." },
      { id: "care3", polish: "Pasta do zębów", german: "Zahnpasta", difficulty: "easy", example: "Ich putze meine Zähne zweimal täglich mit dieser speziellen Zahnpasta.", exampleTranslation: "Myję zęby dwa razy dziennie tą specjalną pastą do zębów." },
      { id: "care4", polish: "Szczoteczka do zębów", german: "Zahnbürste", difficulty: "easy", example: "Man sollte die Zahnbürste alle drei Monate wechseln für Hygiene.", exampleTranslation: "Powinno się wymieniać szczoteczkę do zębów co trzy miesiące dla higieny." },
      { id: "care5", polish: "Ręcznik", german: "Handtuch", difficulty: "easy", example: "Nach dem Duschen trockne ich mich mit einem sauberen Handtuch ab.", exampleTranslation: "Po prysznicu wycierам się czystym ręcznikiem." },
      { id: "care6", polish: "Prysznic", german: "Dusche", difficulty: "easy", example: "Ich nehme jeden Morgen eine erfrischende Dusche vor der Arbeit immer.", exampleTranslation: "Biorę każdego ranka odświeżający prysznic przed pracą zawsze." },
      { id: "care7", polish: "Krem", german: "Creme", difficulty: "medium", example: "Diese Gesichtscreme ist sehr gut und macht die Haut weich und geschmeidig.", exampleTranslation: "Ten krem do twarzy jest bardzo dobry i czyni skórę miękką i gładką." },
      { id: "care8", polish: "Dezodorant", german: "Deodorant", difficulty: "medium", example: "Ich benutze täglich Deodorant nach dem Duschen für Frische den ganzen Tag.", exampleTranslation: "Używam codziennie dezodorantu po prysznicu dla świeżości cały dzień." },
      { id: "care9", polish: "Perfumy", german: "Parfüm", difficulty: "medium", example: "Dieses französische Parfüm riecht wunderbar und ist sehr elegant für Abende.", exampleTranslation: "Te francuskie perfumy pachną wspaniale i są bardzo eleganckie na wieczory." },
      { id: "care10", polish: "Grzebień", german: "Kamm", difficulty: "medium", example: "Ich kämme meine Haare jeden Morgen mit diesem speziellen Kamm sorgfältig.", exampleTranslation: "Czeszę włosy każdego ranka tym specjalnym grzebieniem starannie." },
      { id: "care11", polish: "Brzytwa", german: "Rasierer", difficulty: "medium", example: "Ich rasiere mich jeden Morgen mit einem elektrischen Rasierer schnell und sicher.", exampleTranslation: "Golę się każdego ranka elektryczną brzytwą szybko i bezpiecznie." },
      { id: "care12", polish: "Lustro", german: "Spiegel", difficulty: "medium", example: "Ich schaue jeden Morgen in den Spiegel, um mein Aussehen zu kontrollieren.", exampleTranslation: "Patrzę każdego ranka w lustro, aby skontrolować mój wygląd." },
      { id: "care13", polish: "Muszę się ogolić", german: "Ich muss mich rasieren", difficulty: "hard", example: "Ich muss mich unbedingt rasieren vor dem wichtigen Geschäftstreffen heute Mittag!", exampleTranslation: "Muszę się koniecznie ogolić przed ważnym spotkaniem biznesowym dzisiaj w południe!" },
      { id: "care14", polish: "Zapomniałem szczoteczki", german: "Ich habe die Zahnbürste vergessen", difficulty: "hard", example: "Ich habe leider meine Zahnbürste vergessen, muss ich eine neue kaufen.", exampleTranslation: "Zapomniałem niestety mojej szczoteczki do zębów, muszę kupić nową." },
      { id: "care15", polish: "Pachnie pięknie", german: "Das riecht wunderbar", difficulty: "hard", example: "Dein Parfüm riecht wirklich wunderbar! Welche Marke ist das genau?", exampleTranslation: "Twoje perfumy pachną naprawdę wspaniale! Jaka to dokładnie marka?" }
    ]
  },

  money_banking: {
    name: "Pieniądze i bankowość",
    description: "Finanse, bank i transakcje",
    icon: Wallet,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "mon1", polish: "Bank", german: "Bank", difficulty: "easy", example: "Ich gehe zur Bank, um Geld abzuheben für die Einkäufe heute.", exampleTranslation: "Idę do banku, aby wypłacić pieniądze na zakupy dzisiaj." },
      { id: "mon2", polish: "Konto", german: "Konto", difficulty: "easy", example: "Ich habe ein Sparkonto bei dieser Bank seit vielen Jahren schon.", exampleTranslation: "Mam konto oszczędnościowe w tym banku od wielu lat już." },
      { id: "mon3", polish: "Karta", german: "Karte", difficulty: "easy", example: "Kann ich mit Karte bezahlen oder nur bar in diesem Geschäft?", exampleTranslation: "Mogę zapłacić kartą czy tylko gotówką w tym sklepie?" },
      { id: "mon4", polish: "Gotówka", german: "Bargeld", difficulty: "easy", example: "Ich habe nicht genug Bargeld dabei, ich muss zum Geldautomaten gehen.", exampleTranslation: "Nie mam wystarczająco gotówki przy sobie, muszę iść do bankomatu." },
      { id: "mon5", polish: "Bankomat", german: "Geldautomat", difficulty: "easy", example: "Der Geldautomat ist gleich um die Ecke neben dem Supermarkt rechts.", exampleTranslation: "Bankomat jest zaraz za rogiem obok supermarketu po prawej." },
      { id: "mon6", polish: "Oszczędzać", german: "Sparen", difficulty: "easy", example: "Ich versuche jeden Monat etwas Geld zu sparen für die Zukunft.", exampleTranslation: "Staram się każdego miesiąca oszczędzać trochę pieniędzy na przyszłość." },
      { id: "mon7", polish: "Przelew", german: "Überweisung", difficulty: "medium", example: "Ich mache eine Überweisung für die Miete am Anfang jeden Monats pünktlich.", exampleTranslation: "Robię przelew za czynsz na początku każdego miesiąca punktualnie." },
      { id: "mon8", polish: "Kredyt", german: "Kredit", difficulty: "medium", example: "Wir haben einen Kredit bei der Bank aufgenommen zum Hauskauf bekommen.", exampleTranslation: "Wzięliśmy kredyt w banku na zakup domu." },
      { id: "mon9", polish: "Rachunek bankowy", german: "Bankkonto", difficulty: "medium", example: "Mein Gehalt wird direkt auf mein Bankkonto überwiesen jeden Monat automatisch.", exampleTranslation: "Moje wynagrodzenie jest przekazywane bezpośrednio na mój rachunek bankowy każdego miesiąca automatycznie." },
      { id: "mon10", polish: "Wypłacać", german: "Abheben", difficulty: "medium", example: "Ich möchte zweihundert Euro vom Konto abheben heute am Schalter bitte.", exampleTranslation: "Chcę wypłacić dwieście euro z konta dzisiaj przy kasie proszę." },
      { id: "mon11", polish: "Wpłacać", german: "Einzahlen", difficulty: "medium", example: "Ich zahle jeden Monat fünfhundert Euro auf mein Sparkonto ein regelmäßig.", exampleTranslation: "Wpłacam każdego miesiąca pięćset euro na moje konto oszczędnościowe regularnie." },
      { id: "mon12", polish: "Odsetki", german: "Zinsen", difficulty: "medium", example: "Die Bank zahlt nur niedrige Zinsen auf Sparkonten in diesen Zeiten.", exampleTranslation: "Bank płaci tylko niskie odsetki na kontach oszczędnościowych w tych czasach." },
      { id: "mon13", polish: "Chcę otworzyć konto", german: "Ich möchte ein Konto eröffnen", difficulty: "hard", example: "Ich möchte ein neues Bankkonto eröffnen, welche Dokumente brauche ich dafür?", exampleTranslation: "Chcę otworzyć nowe konto bankowe, jakie dokumenty potrzebuję do tego?" },
      { id: "mon14", polish: "Jaki jest kurs?", german: "Wie ist der Wechselkurs?", difficulty: "hard", example: "Wie ist der aktuelle Wechselkurs von Euro zu Dollar heute genau?", exampleTranslation: "Jaki jest aktualny kurs wymiany euro na dolary dzisiaj dokładnie?" },
      { id: "mon15", polish: "Karta nie działa", german: "Die Karte funktioniert nicht", difficulty: "hard", example: "Meine Karte funktioniert am Automaten nicht! Was soll ich jetzt machen?", exampleTranslation: "Moja karta nie działa w bankomacie! Co mam teraz zrobić?" }
    ]
  },

  directions_navigation: {
    name: "Wskazówki drogowe",
    description: "Nawigacja i orientacja w przestrzeni",
    icon: Compass,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { id: "dir1", polish: "Kierunek", german: "Richtung", difficulty: "easy", example: "Gehen Sie in diese Richtung und dann sehen Sie die Kirche links.", exampleTranslation: "Idź w tym kierunku a potem zobaczysz kościół po lewej." },
      { id: "dir2", polish: "Tutaj", german: "Hier", difficulty: "easy", example: "Hier ist der Eingang zum Museum, kommen Sie bitte herein!", exampleTranslation: "Tutaj jest wejście do muzeum, proszę wejść!" },
      { id: "dir3", polish: "Tam", german: "Dort", difficulty: "easy", example: "Die Post ist dort drüben auf der anderen Straßenseite gegenüber.", exampleTranslation: "Poczta jest tam po drugiej stronie ulicy naprzeciwko." },
      { id: "dir4", polish: "Skręcić", german: "Abbiegen", difficulty: "easy", example: "Biegen Sie an der Ampel rechts ab und gehen Sie geradeaus weiter.", exampleTranslation: "Skręć na światłach w prawo i idź dalej prosto." },
      { id: "dir5", polish: "Skrzyżowanie", german: "Kreuzung", difficulty: "easy", example: "An der nächsten Kreuzung biegen Sie bitte links ab zur Hauptstraße.", exampleTranslation: "Na następnym skrzyżowaniu skręć proszę w lewo do głównej ulicy." },
      { id: "dir6", polish: "Róg", german: "Ecke", difficulty: "easy", example: "Das Café ist gleich um die Ecke rechts neben der Bäckerei.", exampleTranslation: "Kawiarnia jest zaraz za rogiem po prawej obok piekarni." },
      { id: "dir7", polish: "Naprzeciwko", german: "Gegenüber", difficulty: "medium", example: "Die Apotheke liegt genau gegenüber vom Supermarkt auf der anderen Seite.", exampleTranslation: "Apteka znajduje się dokładnie naprzeciwko supermarketu po drugiej stronie." },
      { id: "dir8", polish: "Obok", german: "Neben", difficulty: "medium", example: "Das Restaurant ist neben dem Hotel direkt auf der rechten Seite.", exampleTranslation: "Restauracja jest obok hotelu bezpośrednio po prawej stronie." },
      { id: "dir9", polish: "Między", german: "Zwischen", difficulty: "medium", example: "Die Bank befindet sich zwischen der Post und dem Rathaus in Mitte.", exampleTranslation: "Bank znajduje się między pocztą a ratuszem w środku." },
      { id: "dir10", polish: "Za", german: "Hinter", difficulty: "medium", example: "Der Parkplatz ist hinter dem großen Einkaufszentrum am Ende der Straße.", exampleTranslation: "Parking jest za dużym centrum handlowym na końcu ulicy." },
      { id: "dir11", polish: "Przed", german: "Vor", difficulty: "medium", example: "Treffen wir uns vor dem Kino um acht Uhr heute Abend pünktlich!", exampleTranslation: "Spotkajmy się przed kinem o ósmej dzisiaj wieczorem punktualnie!" },
      { id: "dir12", polish: "W pobliżu", german: "In der Nähe", difficulty: "medium", example: "Gibt es in der Nähe eine Apotheke? Ich brauche dringend Medikamente!", exampleTranslation: "Czy jest w pobliżu apteka? Potrzebuję pilnie leków!" },
      { id: "dir13", polish: "Jak tam dojść?", german: "Wie komme ich dorthin?", difficulty: "hard", example: "Entschuldigung, wie komme ich am schnellsten zum Bahnhof von hier aus?", exampleTranslation: "Przepraszam, jak najszybciej dojść do dworca stąd?" },
      { id: "dir14", polish: "To daleko stąd?", german: "Ist das weit von hier?", difficulty: "hard", example: "Ist das Museum weit von hier entfernt zu Fuß oder soll ich Bus nehmen?", exampleTranslation: "Czy muzeum jest daleko stąd pieszo czy powinienem wziąć autobus?" },
      { id: "dir15", polish: "Idź prosto", german: "Gehen Sie geradeaus", difficulty: "hard", example: "Gehen Sie einfach geradeaus etwa fünf Minuten, dann sehen Sie das Rathaus!", exampleTranslation: "Idź po prostu prosto około pięć minut, wtedy zobaczysz ratusz!" }
    ]
  },

  emergencies_safety: {
    name: "Nagłe wypadki i bezpieczeństwo",
    description: "Sytuacje awaryjne i pomoc doraźna",
    icon: AlertTriangle,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "emer1", polish: "Pomoc", german: "Hilfe", difficulty: "easy", example: "Hilfe! Ich brauche dringend einen Arzt, es ist ein Notfall!", exampleTranslation: "Pomoc! Potrzebuję pilnie lekarza, to nagły wypadek!" },
      { id: "emer2", polish: "Niebezpieczeństwo", german: "Gefahr", difficulty: "easy", example: "Achtung, Gefahr! Betreten Sie diesen Bereich nicht, es ist gefährlich!", exampleTranslation: "Uwaga, niebezpieczeństwo! Nie wchodź w ten obszar, jest niebezpiecznie!" },
      { id: "emer3", polish: "Pogotowie", german: "Krankenwagen", difficulty: "easy", example: "Rufen Sie sofort einen Krankenwagen! Dieser Mensch braucht dringend medizinische Hilfe!", exampleTranslation: "Zadzwoń natychmiast po karetkę! Ta osoba potrzebuje pilnie pomocy medycznej!" },
      { id: "emer4", polish: "Policja", german: "Polizei", difficulty: "easy", example: "Ich muss die Polizei rufen wegen eines Diebstahls in meiner Wohnung.", exampleTranslation: "Muszę zadzwonić na policję z powodu kradzieży w moim mieszkaniu." },
      { id: "emer5", polish: "Straż pożarna", german: "Feuerwehr", difficulty: "easy", example: "Die Feuerwehr kam schnell und löschte das Feuer im Gebäude effektiv.", exampleTranslation: "Straż pożarna przyszła szybko i ugasiła pożar w budynku efektywnie." },
      { id: "emer6", polish: "Wypadek", german: "Unfall", difficulty: "easy", example: "Es gab einen schweren Autounfall auf der Autobahn heute Morgen leider.", exampleTranslation: "Był poważny wypadek samochodowy na autostradzie dzisiaj rano niestety." },
      { id: "emer7", polish: "Ranny", german: "Verletzt", difficulty: "medium", example: "Der Mann ist schwer verletzt und braucht sofortige medizinische Versorgung dringend!", exampleTranslation: "Mężczyzna jest ciężko ranny i potrzebuje natychmiastowej opieki medycznej pilnie!" },
      { id: "emer8", polish: "Apteczka", german: "Erste-Hilfe-Kasten", difficulty: "medium", example: "Jedes Auto sollte einen Erste-Hilfe-Kasten für Notfälle haben immer dabei.", exampleTranslation: "Każdy samochód powinien mieć apteczkę pierwszej pomocy na nagłe wypadki zawsze." },
      { id: "emer9", polish: "Numer alarmowy", german: "Notrufnummer", difficulty: "medium", example: "Die Notrufnummer in Deutschland ist eins eins zwei für alle Notfälle.", exampleTranslation: "Numer alarmowy w Niemczech to jeden jeden dwa na wszystkie nagłe wypadki." },
      { id: "emer10", polish: "Kradzież", german: "Diebstahl", difficulty: "medium", example: "Ich muss einen Diebstahl bei der Polizei melden wegen gestohlener Brieftasche.", exampleTranslation: "Muszę zgłosić kradzież na policji z powodu skradzionego portfela." },
      { id: "emer11", polish: "Zgubić się", german: "Sich verirren", difficulty: "medium", example: "Ich habe mich völlig verirrt in dieser fremden Stadt ohne Karte.", exampleTranslation: "Zgubiłem się całkowicie w tym obcym mieście bez mapy." },
      { id: "emer12", polish: "Wyjście awaryjne", german: "Notausgang", difficulty: "medium", example: "Im Notfall benutzen Sie bitte den Notausgang auf der linken Seite!", exampleTranslation: "W nagłym wypadku użyj proszę wyjścia awaryjnego po lewej stronie!" },
      { id: "emer13", polish: "Zadzwoń po pomoc!", german: "Ruf Hilfe!", difficulty: "hard", example: "Ruf sofort Hilfe! Dieser Mensch ist bewusstlos und atmet nicht mehr!", exampleTranslation: "Zadzwoń natychmiast po pomoc! Ta osoba jest nieprzytomna i nie oddycha już!" },
      { id: "emer14", polish: "To nagły wypadek", german: "Das ist ein Notfall", difficulty: "hard", example: "Das ist ein medizinischer Notfall! Wir brauchen sofort einen Krankenwagen hier!", exampleTranslation: "To nagły wypadek medyczny! Potrzebujemy natychmiast karetki tutaj!" },
      { id: "emer15", polish: "Skradziono mi portfel", german: "Mein Portemonnaie wurde gestohlen", difficulty: "hard", example: "Mein Portemonnaie wurde gestohlen! Ich muss es bei der Polizei melden sofort!", exampleTranslation: "Skradziono mi portfel! Muszę to zgłosić na policji natychmiast!" }
    ]
  },

  conversations_communication: {
    name: "Rozmowy i komunikacja",
    description: "Wyrażenia konwersacyjne i dialog",
    icon: MessageSquare,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { id: "conv1", polish: "Rozmawiać", german: "Sprechen", difficulty: "easy", example: "Ich spreche gerne mit Menschen aus verschiedenen Ländern und Kulturen weltweit.", exampleTranslation: "Lubię rozmawiać z ludźmi z różnych krajów i kultur na świecie." },
      { id: "conv2", polish: "Słuchać", german: "Zuhören", difficulty: "easy", example: "Es ist wichtig gut zuzuhören, wenn andere Menschen mit uns sprechen immer.", exampleTranslation: "Ważne jest dobre słuchanie, gdy inni ludzie z nami rozmawiają zawsze." },
      { id: "conv3", polish: "Odpowiadać", german: "Antworten", difficulty: "easy", example: "Bitte antworten Sie auf meine Frage ehrlich und direkt wenn möglich.", exampleTranslation: "Proszę odpowiedz na moje pytanie szczerze i bezpośrednio jeśli możliwe." },
      { id: "conv4", polish: "Wyjaśniać", german: "Erklären", difficulty: "easy", example: "Können Sie mir bitte das genauer erklären? Ich verstehe es nicht ganz.", exampleTranslation: "Czy może mi Pan to dokładniej wyjaśnić? Nie do końca rozumiem." },
      { id: "conv5", polish: "Zgadzać się", german: "Zustimmen", difficulty: "easy", example: "Ich stimme dir vollkommen zu in dieser wichtigen Angelegenheit hier!", exampleTranslation: "Całkowicie się z tobą zgadzam w tej ważnej sprawie tutaj!" },
      { id: "conv6", polish: "Dyskutować", german: "Diskutieren", difficulty: "easy", example: "Wir diskutieren oft über Politik und aktuelle Ereignisse beim Abendessen zusammen.", exampleTranslation: "Często dyskutujemy o polityce i bieżących wydarzeniach przy kolacji razem." },
      { id: "conv7", polish: "Opowiadać", german: "Erzählen", difficulty: "medium", example: "Mein Großvater erzählt uns immer interessante Geschichten aus seiner Jugendzeit.", exampleTranslation: "Mój dziadek zawsze opowiada nam ciekawe historie ze swojej młodości." },
      { id: "conv8", polish: "Powtórzyć", german: "Wiederholen", difficulty: "medium", example: "Können Sie das bitte langsam wiederholen? Ich habe es nicht verstanden.", exampleTranslation: "Czy może Pan to proszę powtórzyć wolno? Nie zrozumiałem tego." },
      { id: "conv9", polish: "Przerywać", german: "Unterbrechen", difficulty: "medium", example: "Entschuldigung, dass ich Sie unterbreche, aber ich habe eine dringende Frage!", exampleTranslation: "Przepraszam, że przerywam, ale mam pilne pytanie!" },
      { id: "conv10", polish: "Opinia", german: "Meinung", difficulty: "medium", example: "Was ist deine Meinung zu diesem Thema? Ich würde gerne hören!", exampleTranslation: "Jaka jest twoja opinia na ten temat? Chciałbym usłyszeć!" },
      { id: "conv11", polish: "Argument", german: "Argument", difficulty: "medium", example: "Dein Argument ist sehr überzeugend und logisch durchdacht für mich!", exampleTranslation: "Twój argument jest bardzo przekonujący i logicznie przemyślany dla mnie!" },
      { id: "conv12", polish: "Plotkować", german: "Klatschen", difficulty: "medium", example: "Ich mag es nicht über andere Menschen zu klatschen, das ist unhöflich.", exampleTranslation: "Nie lubię plotkować o innych ludziach, to jest nieuprzejme." },
      { id: "conv13", polish: "O czym rozmawiasz?", german: "Worüber sprichst du?", difficulty: "hard", example: "Worüber sprecht ihr gerade so lebhaft? Kann ich auch mitmachen bei Diskussion?", exampleTranslation: "O czym rozmawiacie właśnie tak żywo? Mogę też dołączyć do dyskusji?" },
      { id: "conv14", polish: "Zmieńmy temat", german: "Lass uns das Thema wechseln", difficulty: "hard", example: "Lass uns bitte das Thema wechseln, das ist mir unangenehm zu besprechen.", exampleTranslation: "Zmieńmy proszę temat, to jest dla mnie niewygodne do omawiania." },
      { id: "conv15", polish: "Zgadzam się z tobą", german: "Ich stimme dir zu", difficulty: "hard", example: "Ich stimme dir vollkommen zu! Du hast in diesem Punkt absolut recht!", exampleTranslation: "Całkowicie się z tobą zgadzam! Masz w tym punkcie absolutną rację!" }
    ]
  },

  professions_detailed: {
    name: "Szczegółowe zawody",
    description: "Różne profesje i specjalizacje",
    icon: PenTool,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { id: "prof1", polish: "Prawnik", german: "Anwalt", difficulty: "easy", example: "Der Anwalt verteidigt seine Mandanten vor Gericht mit großem Engagement täglich.", exampleTranslation: "Prawnik broni swoich klientów w sądzie z wielkim zaangażowaniem codziennie." },
      { id: "prof2", polish: "Strażak", german: "Feuerwehrmann", difficulty: "easy", example: "Der mutige Feuerwehrmann rettet Menschen aus brennenden Gebäuden heroisch immer.", exampleTranslation: "Odważny strażak ratuje ludzi z płonących budynków bohatersko zawsze." },
      { id: "prof3", polish: "Dziennikarz", german: "Journalist", difficulty: "easy", example: "Der Journalist berichtet über wichtige Ereignisse in der Welt objektiv täglich.", exampleTranslation: "Dziennikarz relacjonuje ważne wydarzenia na świecie obiektywnie codziennie." },
      { id: "prof4", polish: "Fryzjer", german: "Friseur", difficulty: "easy", example: "Der Friseur schneidet meine Haare jeden Monat im modernen Salon professionell.", exampleTranslation: "Fryzjer przycina moje włosy każdego miesiąca w nowoczesnym salonie profesjonalnie." },
      { id: "prof5", polish: "Dentysta", german: "Zahnarzt", difficulty: "easy", example: "Ich gehe zweimal jährlich zum Zahnarzt für eine Kontrolluntersuchung regelmäßig.", exampleTranslation: "Chodzę dwa razy w roku do dentysty na kontrolę regularnie." },
      { id: "prof6", polish: "Weterynarz", german: "Tierarzt", difficulty: "easy", example: "Der Tierarzt behandelt kranke Haustiere mit viel Geduld und Fachwissen täglich.", exampleTranslation: "Weterynarz leczy chore zwierzęta domowe z dużą cierpliwością i wiedzą codziennie." },
      { id: "prof7", polish: "Bibliotekarz", german: "Bibliothekar", difficulty: "medium", example: "Der Bibliothekar hilft Menschen beim Finden der richtigen Bücher sachkundig immer.", exampleTranslation: "Bibliotekarz pomaga ludziom znajdować odpowiednie książki fachowo zawsze." },
      { id: "prof8", polish: "Tłumacz", german: "Übersetzer", difficulty: "medium", example: "Der Übersetzer beherrscht fünf Sprachen fließend und arbeitet für internationale Firmen.", exampleTranslation: "Tłumacz włada pięcioma językami płynnie i pracuje dla międzynarodowych firm." },
      { id: "prof9", polish: "Sprzedawca", german: "Verkäufer", difficulty: "medium", example: "Der freundliche Verkäufer berät Kunden sehr gut und hilft bei der Auswahl.", exampleTranslation: "Przyjazny sprzedawca doradza klientom bardzo dobrze i pomaga w wyborze." },
      { id: "prof10", polish: "Muzyk", german: "Musiker", difficulty: "medium", example: "Der talentierte Musiker spielt in einem berühmten Orchester Geige wunderschön jeden Abend.", exampleTranslation: "Utalentowany muzyk gra na skrzypcach w słynnej orkiestrze pięknie każdego wieczoru." },
      { id: "prof11", polish: "Malarz", german: "Maler", difficulty: "medium", example: "Der Maler renoviert unser Haus und streicht alle Wände frisch weiß neu.", exampleTranslation: "Malarz remontuje nasz dom i maluje wszystkie ściany świeżo na biało na nowo." },
      { id: "prof12", polish: "Elektryk", german: "Elektriker", difficulty: "medium", example: "Wir brauchen einen Elektriker, die Lampen funktionieren nicht mehr im Haus.", exampleTranslation: "Potrzebujemy elektryka, lampy nie działają już w domu." },
      { id: "prof13", polish: "Kim chcesz zostać?", german: "Was möchtest du werden?", difficulty: "hard", example: "Was möchtest du beruflich werden, wenn du mit dem Studium fertig bist?", exampleTranslation: "Kim chcesz zostać zawodowo, gdy skończysz studia?" },
      { id: "prof14", polish: "Planuję zostać lekarzem", german: "Ich plane Arzt zu werden", difficulty: "hard", example: "Ich plane Arzt zu werden und studiere deshalb Medizin an der Universität.", exampleTranslation: "Planuję zostać lekarzem i dlatego studiuję medycynę na uniwersytecie." },
      { id: "prof15", polish: "Praca wymaga kwalifikacji", german: "Die Arbeit erfordert Qualifikationen", difficulty: "hard", example: "Diese Arbeit erfordert spezielle Qualifikationen und mehrjährige Berufserfahrung mindestens.", exampleTranslation: "Ta praca wymaga specjalnych kwalifikacji i wieloletnie doświadczenie zawodowe minimum." }
    ]
  },

  bedroom_sleep: {
    name: "Sypialnia i sen",
    description: "Miejsce snu i wypoczynek nocny",
    icon: Droplet,
    color: "from-indigo-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "bed1", polish: "Łóżko", german: "Bett", difficulty: "easy", example: "Mein Bett ist sehr bequem und ich schlafe darin wunderbar gut.", exampleTranslation: "Moje łóżko jest bardzo wygodne i śpię w nim wspaniale dobrze." },
      { id: "bed2", polish: "Poduszka", german: "Kissen", difficulty: "easy", example: "Ich brauche ein weiches Kissen für einen erholsamen gesunden Schlaf.", exampleTranslation: "Potrzebuję miękkiej poduszki dla regenerującego zdrowego snu." },
      { id: "bed3", polish: "Kołdra", german: "Bettdecke", difficulty: "easy", example: "Die warme Bettdecke hält mich nachts gemütlich in kalten Winternächten.", exampleTranslation: "Ciepła kołdra trzyma mnie w nocy przytulnie w zimne zimowe noce." },
      { id: "bed4", polish: "Prześcieradło", german: "Bettlaken", difficulty: "easy", example: "Ich wechsle die Bettlaken jede Woche für Sauberkeit und Hygiene regelmäßig.", exampleTranslation: "Zmieniam prześcieradła co tydzień dla czystości i higieny regularnie." },
      { id: "bed5", polish: "Szafa", german: "Schrank", difficulty: "easy", example: "Im Schrank bewahre ich meine ganze Kleidung ordentlich sortiert auf.", exampleTranslation: "W szafie przechowuję wszystkie moje ubrania porządnie posortowane." },
      { id: "bed6", polish: "Lampka nocna", german: "Nachttischlampe", difficulty: "easy", example: "Die Nachttischlampe gibt sanftes Licht zum Lesen vor dem Schlafengehen ab.", exampleTranslation: "Lampka nocna daje delikatne światło do czytania przed snem." },
      { id: "bed7", polish: "Budzik", german: "Wecker", difficulty: "medium", example: "Der Wecker klingelt jeden Morgen um sechs Uhr und weckt mich pünktlich.", exampleTranslation: "Budzik dzwoni każdego ranka o szóstej i budzi mnie punktualnie." },
      { id: "bed8", polish: "Zasłony", german: "Vorhänge", difficulty: "medium", example: "Ich ziehe die Vorhänge zu, damit das Sonnenlicht mich nicht weckt früh.", exampleTranslation: "Zaciągam zasłony, aby światło słoneczne mnie nie obudziło wcześnie." },
      { id: "bed9", polish: "Dywan", german: "Teppich", difficulty: "medium", example: "Der weiche Teppich macht das Schlafzimmer gemütlich und warm für Füße.", exampleTranslation: "Miękki dywan czyni sypialnię przytulną i ciepłą dla stóp." },
      { id: "bed10", polish: "Komoda", german: "Kommode", difficulty: "medium", example: "In der Kommode bewahre ich Unterwäsche und Socken übersichtlich sortiert auf.", exampleTranslation: "W komodzie przechowuję bieliznę i skarpetki przejrzyście posortowane." },
      { id: "bed11", polish: "Materac", german: "Matratze", difficulty: "medium", example: "Eine gute Matratze ist wichtig für gesunden Rücken und erholsamen Schlaf.", exampleTranslation: "Dobry materac jest ważny dla zdrowych pleców i regenerującego snu." },
      { id: "bed12", polish: "Pościel", german: "Bettwäsche", difficulty: "medium", example: "Ich kaufe neue Bettwäsche in hellen Farben für den Sommer frisch.", exampleTranslation: "Kupuję nową pościel w jasnych kolorach na lato świeżą." },
      { id: "bed13", polish: "Czas iść spać", german: "Zeit ins Bett zu gehen", difficulty: "hard", example: "Es ist schon spät, Zeit ins Bett zu gehen! Gute Nacht!", exampleTranslation: "Jest już późno, czas iść spać! Dobranoc!" },
      { id: "bed14", polish: "Dobrze się wyspałem", german: "Ich habe gut geschlafen", difficulty: "hard", example: "Ich habe heute Nacht wunderbar gut geschlafen und fühle mich ausgeruht!", exampleTranslation: "Dobrze się wyspałem dzisiejszej nocy wspaniale i czuję się wypoczęty!" },
      { id: "bed15", polish: "Nie mogę zasnąć", german: "Ich kann nicht einschlafen", difficulty: "hard", example: "Ich kann nicht einschlafen wegen des Lärms von der Straße draußen!", exampleTranslation: "Nie mogę zasnąć z powodu hałasu z ulicy na zewnątrz!" }
    ]
  },

  kitchen_cooking: {
    name: "Kuchnia i gotowanie",
    description: "Przygotowywanie posiłków i naczynia",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { id: "cook1", polish: "Garnek", german: "Topf", difficulty: "easy", example: "Ich koche die Suppe in einem großen Topf auf dem Herd langsam.", exampleTranslation: "Gotuję zupę w dużym garnku na kuchence wolno." },
      { id: "cook2", polish: "Patelnia", german: "Pfanne", difficulty: "easy", example: "Die Pfanne ist heiß, sei vorsichtig beim Braten der Eier bitte!", exampleTranslation: "Patelnia jest gorąca, bądź ostrożny przy smażeniu jajek proszę!" },
      { id: "cook3", polish: "Nóż", german: "Messer", difficulty: "easy", example: "Mit einem scharfen Messer schneide ich Gemüse für den Salat vorsichtig.", exampleTranslation: "Ostrym nożem kroję warzywa na sałatkę ostrożnie." },
      { id: "cook4", polish: "Widelec", german: "Gabel", difficulty: "easy", example: "Ich esse Spaghetti immer mit einer Gabel und einem Löffel zusammen.", exampleTranslation: "Jem spaghetti zawsze widelcem i łyżką razem." },
      { id: "cook5", polish: "Łyżka", german: "Löffel", difficulty: "easy", example: "Rühre die Suppe mit einem großen Löffel um, damit nichts anbrennt.", exampleTranslation: "Mieszaj zupę dużą łyżką, aby nic się nie przypaliło." },
      { id: "cook6", polish: "Talerz", german: "Teller", difficulty: "easy", example: "Stell bitte die sauberen Teller auf den Tisch für das Abendessen!", exampleTranslation: "Postaw proszę czyste talerze na stół na kolację!" },
      { id: "cook7", polish: "Kuchenka", german: "Herd", difficulty: "medium", example: "Der Herd ist modern und hat vier Kochfelder zum gleichzeitigen Kochen.", exampleTranslation: "Kuchenka jest nowoczesna i ma cztery palniki do jednoczesnego gotowania." },
      { id: "cook8", polish: "Piekarnik", german: "Backofen", difficulty: "medium", example: "Heizen Sie den Backofen auf hundertachtzig Grad vor dem Backen vor.", exampleTranslation: "Podgrzej piekarnik do stu osiemdziesięciu stopni przed pieczeniem." },
      { id: "cook9", polish: "Mikrofala", german: "Mikrowelle", difficulty: "medium", example: "Ich wärme das Essen in der Mikrowelle für zwei Minuten auf schnell.", exampleTranslation: "Podgrzewam jedzenie w mikrofali przez dwie minuty szybko." },
      { id: "cook10", polish: "Zmywarka", german: "Geschirrspüler", difficulty: "medium", example: "Die Geschirrspülmaschine spart viel Zeit und Wasser beim Abwaschen täglich.", exampleTranslation: "Zmywarka oszczędza dużo czasu i wody przy zmywaniu codziennie." },
      { id: "cook11", polish: "Deska do krojenia", german: "Schneidebrett", difficulty: "medium", example: "Benutze immer ein sauberes Schneidebrett beim Schneiden von Gemüse und Fleisch.", exampleTranslation: "Używaj zawsze czystej deski do krojenia przy krojeniu warzyw i mięsa." },
      { id: "cook12", polish: "Durszlak", german: "Sieb", difficulty: "medium", example: "Gieß die Nudeln durch das Sieb ab, um das Wasser abzugießen komplett.", exampleTranslation: "Odcedź makaron przez durszlak, aby odlać wodę całkowicie." },
      { id: "cook13", polish: "Smażyć na patelni", german: "In der Pfanne braten", difficulty: "hard", example: "Ich brate das Fleisch in der Pfanne mit etwas Olivenöl goldbraun an.", exampleTranslation: "Smażę mięso na patelni z odrobiną oliwy z oliwek na złotobrązowo." },
      { id: "cook14", polish: "Przypaliło się", german: "Es ist angebrannt", difficulty: "hard", example: "Oh nein! Das Essen ist angebrannt, weil ich es zu lange gekocht habe!", exampleTranslation: "O nie! Jedzenie się przypaliło, bo gotowałem je za długo!" },
      { id: "cook15", polish: "Jak to przygotować?", german: "Wie bereitet man das zu?", difficulty: "hard", example: "Wie bereitet man dieses komplizierte Gericht richtig zu? Kannst du mir helfen?", exampleTranslation: "Jak przygotować to skomplikowane danie prawidłowo? Możesz mi pomóc?" }
    ]
  },

  measurements_quantities: {
    name: "Miary i ilości",
    description: "Pomiary, waga i objętość",
    icon: Compass,
    color: "from-cyan-500 to-teal-600",
    level: "intermediate",
    words: [
      { id: "meas1", polish: "Metr", german: "Meter", difficulty: "easy", example: "Der Tisch ist zwei Meter lang und einen Meter breit genau.", exampleTranslation: "Stół ma dwa metry długości i jeden metr szerokości dokładnie." },
      { id: "meas2", polish: "Centymetr", german: "Zentimeter", difficulty: "easy", example: "Das Kind ist hundertdreißig Zentimeter groß für sein Alter schon.", exampleTranslation: "Dziecko ma sto trzydzieści centymetrów wzrostu jak na swój wiek już." },
      { id: "meas3", polish: "Kilogram", german: "Kilogramm", difficulty: "easy", example: "Ich möchte zwei Kilogramm Äpfel kaufen für die ganze Familie bitte.", exampleTranslation: "Chcę kupić dwa kilogramy jabłek dla całej rodziny proszę." },
      { id: "meas4", polish: "Gram", german: "Gramm", difficulty: "easy", example: "Das Rezept braucht zweihundert Gramm Butter für den Kuchen genau.", exampleTranslation: "Przepis potrzebuje dwustu gramów masła na ciasto dokładnie." },
      { id: "meas5", polish: "Litr", german: "Liter", difficulty: "easy", example: "Ich trinke jeden Tag mindestens zwei Liter Wasser für Gesundheit.", exampleTranslation: "Piję każdego dnia przynajmniej dwa litry wody dla zdrowia." },
      { id: "meas6", polish: "Waga", german: "Gewicht", difficulty: "easy", example: "Mein Gewicht beträgt achtzig Kilogramm bei einer Körpergröße von einsachtzig.", exampleTranslation: "Moja waga wynosi osiemdziesiąt kilogramów przy wzroście sto osiemdziesiąt." },
      { id: "meas7", polish: "Długość", german: "Länge", difficulty: "medium", example: "Die Länge des Zimmers beträgt fünf Meter von Wand zu Wand.", exampleTranslation: "Długość pokoju wynosi pięć metrów od ściany do ściany." },
      { id: "meas8", polish: "Szerokość", german: "Breite", difficulty: "medium", example: "Die Breite der Tür ist neunzig Zentimeter, perfekt für Möbeltransport.", exampleTranslation: "Szerokość drzwi wynosi dziewięćdziesiąt centymetrów, idealna do transportu mebli." },
      { id: "meas9", polish: "Wysokość", german: "Höhe", difficulty: "medium", example: "Die Höhe des Berges beträgt dreitausend Meter über dem Meeresspiegel hoch.", exampleTranslation: "Wysokość góry wynosi trzy tysiące metrów nad poziomem morza wysoko." },
      { id: "meas10", polish: "Objętość", german: "Volumen", difficulty: "medium", example: "Das Volumen dieses Behälters beträgt zehn Liter Flüssigkeit maximal genau.", exampleTranslation: "Objętość tego pojemnika wynosi dziesięć litrów płynu maksymalnie dokładnie." },
      { id: "meas11", polish: "Temperatura", german: "Temperatur", difficulty: "medium", example: "Die Temperatur im Backofen sollte hundertachtzig Grad betragen zum Backen.", exampleTranslation: "Temperatura w piekarniku powinna wynosić sto osiemdziesiąt stopni do pieczenia." },
      { id: "meas12", polish: "Odległość", german: "Entfernung", difficulty: "medium", example: "Die Entfernung zwischen den Städten beträgt hundert Kilometer etwa ungefähr.", exampleTranslation: "Odległość między miastami wynosi około sto kilometrów mniej więcej." },
      { id: "meas13", polish: "Ile to waży?", german: "Wie viel wiegt das?", difficulty: "hard", example: "Wie viel wiegt dieses Paket genau? Ich muss es zur Post bringen!", exampleTranslation: "Ile dokładnie waży ta paczka? Muszę ją zanieść na pocztę!" },
      { id: "meas14", polish: "To za duże", german: "Das ist zu groß", difficulty: "hard", example: "Das ist mir leider zu groß für meine kleine Wohnung im Zentrum!", exampleTranslation: "To jest dla mnie niestety za duże do mojego małego mieszkania w centrum!" },
      { id: "meas15", polish: "Ile to mierzy?", german: "Wie lang ist das?", difficulty: "hard", example: "Wie lang ist dieser Tisch genau? Passt er in mein Wohnzimmer hinein?", exampleTranslation: "Ile dokładnie mierzy ten stół? Zmieści się w moim salonie?" }
    ]
  },

  repairs_maintenance: {
    name: "Naprawy i konserwacja",
    description: "Naprawa i utrzymanie przedmiotów",
    icon: PenTool,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "rep1", polish: "Naprawiać", german: "Reparieren", difficulty: "easy", example: "Ich muss mein kaputtes Fahrrad reparieren lassen in der Werkstatt bald.", exampleTranslation: "Muszę naprawić mój zepsuty rower w warsztacie wkrótce." },
      { id: "rep2", polish: "Zepsuty", german: "Kaputt", difficulty: "easy", example: "Mein Computer ist leider kaputt und funktioniert überhaupt nicht mehr.", exampleTranslation: "Mój komputer jest niestety zepsuty i w ogóle już nie działa." },
      { id: "rep3", polish: "Warsztat", german: "Werkstatt", difficulty: "easy", example: "Die Autowerkstatt repariert alle Arten von Fahrzeugen professionell und schnell.", exampleTranslation: "Warsztat samochodowy naprawia wszystkie rodzaje pojazdów profesjonalnie i szybko." },
      { id: "rep4", polish: "Młotek", german: "Hammer", difficulty: "easy", example: "Mit dem Hammer schlage ich den Nagel in die Wand für Bild.", exampleTranslation: "Młotkiem wbijam gwóźdź w ścianę na obraz." },
      { id: "rep5", polish: "Śrubokręt", german: "Schraubenzieher", difficulty: "easy", example: "Ich brauche einen Schraubenzieher, um die Schraube festzuziehen fest hier.", exampleTranslation: "Potrzebuję śrubokręta, aby dokręcić śrubę mocno tutaj." },
      { id: "rep6", polish: "Gwóźdź", german: "Nagel", difficulty: "easy", example: "Ich schlage Nägel in die Wand, um Bilder aufzuhängen dekorativ.", exampleTranslation: "Wbijam gwoździe w ścianę, aby powiesić obrazy dekoracyjnie." },
      { id: "rep7", polish: "Śruba", german: "Schraube", difficulty: "medium", example: "Diese Schraube ist locker, ich muss sie festziehen mit Schraubenzieher sofort.", exampleTranslation: "Ta śruba jest luźna, muszę ją dokręcić śrubokrętem natychmiast." },
      { id: "rep8", polish: "Klucz", german: "Schlüssel", difficulty: "medium", example: "Ich brauche einen Schraubenschlüssel, um diese Mutter festzuziehen richtig fest.", exampleTranslation: "Potrzebuję klucza, aby dokręcić tę nakrętkę prawidłowo mocno." },
      { id: "rep9", polish: "Wiertarka", german: "Bohrmaschine", difficulty: "medium", example: "Mit der Bohrmaschine bohre ich Löcher in die Wand für Regale präzise.", exampleTranslation: "Wiertarką wiercę dziury w ścianie na półki precyzyjnie." },
      { id: "rep10", polish: "Farba", german: "Farbe", difficulty: "medium", example: "Wir streichen die Wände mit weißer Farbe für frisches Aussehen neu.", exampleTranslation: "Malujemy ściany białą farbą dla świeżego wyglądu na nowo." },
      { id: "rep11", polish: "Pędzel", german: "Pinsel", difficulty: "medium", example: "Mit dem Pinsel trage ich die Farbe gleichmäßig auf die Wand auf.", exampleTranslation: "Pędzlem nakładam farbę równomiernie na ścianę." },
      { id: "rep12", polish: "Taśma", german: "Klebeband", difficulty: "medium", example: "Ich benutze starkes Klebeband, um das Paket sicher zu verschließen fest.", exampleTranslation: "Używam mocnej taśmy, aby bezpiecznie zamknąć paczkę mocno." },
      { id: "rep13", polish: "Coś się zepsuło", german: "Etwas ist kaputt gegangen", difficulty: "hard", example: "Oh nein! Etwas ist kaputt gegangen! Kannst du mir helfen es zu reparieren?", exampleTranslation: "O nie! Coś się zepsuło! Możesz mi pomóc to naprawić?" },
      { id: "rep14", polish: "Potrzebuję fachowca", german: "Ich brauche einen Fachmann", difficulty: "hard", example: "Ich brauche dringend einen Fachmann, das kann ich nicht selbst reparieren!", exampleTranslation: "Potrzebuję pilnie fachowca, tego nie mogę sam naprawić!" },
      { id: "rep15", polish: "Ile kosztuje naprawa?", german: "Wie viel kostet die Reparatur?", difficulty: "hard", example: "Wie viel wird die Reparatur ungefähr kosten? Können Sie mir einen Kostenvoranschlag geben?", exampleTranslation: "Ile będzie kosztować naprawa mniej więcej? Czy może mi Pan dać wycenę?" }
    ]
  },

  phone_communication: {
    name: "Telefon i rozmowy",
    description: "Komunikacja telefoniczna i kontakt",
    icon: MessageSquare,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "phone1", polish: "Telefon", german: "Telefon", difficulty: "easy", example: "Mein Telefon klingelt ständig mit Anrufen von verschiedenen Menschen heute.", exampleTranslation: "Mój telefon dzwoni ciągle z telefonami od różnych ludzi dzisiaj." },
      { id: "phone2", polish: "Dzwonić", german: "Anrufen", difficulty: "easy", example: "Ich rufe dich später an, wenn ich von der Arbeit nach Hause komme.", exampleTranslation: "Zadzwonię do ciebie później, gdy wrócę z pracy do domu." },
      { id: "phone3", polish: "Odbierać", german: "Abnehmen", difficulty: "easy", example: "Kannst du bitte das Telefon abnehmen? Ich bin gerade beschäftigt!", exampleTranslation: "Czy możesz proszę odebrać telefon? Jestem właśnie zajęty!" },
      { id: "phone4", polish: "Rozłączyć się", german: "Auflegen", difficulty: "easy", example: "Er hat einfach aufgelegt ohne sich zu verabschieden! Das war unhöflich!", exampleTranslation: "Po prostu się rozłączył bez pożegnania! To było nieuprzejme!" },
      { id: "phone5", polish: "Wiadomość", german: "Nachricht", difficulty: "easy", example: "Ich habe dir eine wichtige Nachricht geschickt, hast du sie gelesen?", exampleTranslation: "Wysłałem ci ważną wiadomość, przeczytałeś ją?" },
      { id: "phone6", polish: "Numer telefonu", german: "Telefonnummer", difficulty: "easy", example: "Kannst du mir bitte deine Telefonnummer geben zum Kontakt später?", exampleTranslation: "Czy możesz mi proszę dać swój numer telefonu do kontaktu później?" },
      { id: "phone7", polish: "Połączenie", german: "Verbindung", difficulty: "medium", example: "Die Verbindung ist sehr schlecht, ich kann dich kaum hören leider!", exampleTranslation: "Połączenie jest bardzo złe, ledwo cię słyszę niestety!" },
      { id: "phone8", polish: "Poczta głosowa", german: "Mailbox", difficulty: "medium", example: "Ich war nicht erreichbar, deshalb habe ich eine Nachricht auf der Mailbox.", exampleTranslation: "Nie byłem dostępny, dlatego mam wiadomość na poczcie głosowej." },
      { id: "phone9", polish: "Zajęty", german: "Besetzt", difficulty: "medium", example: "Die Leitung ist besetzt, ich versuche es später noch einmal anzurufen.", exampleTranslation: "Linia jest zajęta, spróbuję zadzwonić później jeszcze raz." },
      { id: "phone10", polish: "Oddzwonić", german: "Zurückrufen", difficulty: "medium", example: "Ich rufe dich später zurück, wenn ich mehr Zeit habe zum Reden.", exampleTranslation: "Oddzwonię do ciebie później, gdy będę miał więcej czasu do rozmowy." },
      { id: "phone11", polish: "Sygnał", german: "Signal", difficulty: "medium", example: "Hier gibt es kein Signal, ich muss nach draußen gehen zum Telefonieren.", exampleTranslation: "Tutaj nie ma sygnału, muszę wyjść na zewnątrz do telefonowania." },
      { id: "phone12", polish: "Roaming", german: "Roaming", difficulty: "medium", example: "Im Ausland sind die Roaming-Gebühren sehr hoch für Telefonate leider oft.", exampleTranslation: "Za granicą opłaty roamingowe są bardzo wysokie za rozmowy niestety często." },
      { id: "phone13", polish: "Kto dzwoni?", german: "Wer ruft an?", difficulty: "hard", example: "Wer ruft an um diese späte Uhrzeit? Ich erkenne die Nummer nicht!", exampleTranslation: "Kto dzwoni o tak późnej porze? Nie rozpoznaję numeru!" },
      { id: "phone14", polish: "Zostaw wiadomość", german: "Hinterlasse eine Nachricht", difficulty: "hard", example: "Ich bin gerade nicht erreichbar, bitte hinterlasse eine Nachricht nach dem Signalton!", exampleTranslation: "Jestem właśnie niedostępny, proszę zostaw wiadomość po sygnale!" },
      { id: "phone15", polish: "Bateria się kończy", german: "Der Akku geht zu Ende", difficulty: "hard", example: "Der Akku meines Handys geht zu Ende, ich muss bald auflegen leider!", exampleTranslation: "Bateria mojego telefonu się kończy, muszę wkrótce się rozłączyć niestety!" }
    ]
  },

  permissions_requests: {
    name: "Prośby i pozwolenia",
    description: "Grzeczne pytania i zwroty uprzejmościowe",
    icon: MessageSquare,
    color: "from-rose-500 to-pink-600",
    level: "beginner",
    words: [
      { id: "perm1", polish: "Czy mogę?", german: "Darf ich?", difficulty: "easy", example: "Darf ich bitte Ihren Stift benutzen? Ich habe meinen vergessen.", exampleTranslation: "Czy mogę proszę użyć Pana długopisu? Zapomniałem mojego." },
      { id: "perm2", polish: "Czy można?", german: "Kann man?", difficulty: "easy", example: "Kann man hier fotografieren oder ist das verboten im Museum?", exampleTranslation: "Czy można tu fotografować czy jest to zabronione w muzeum?" },
      { id: "perm3", polish: "Wolno mi?", german: "Ist es erlaubt?", difficulty: "easy", example: "Ist es erlaubt hier zu rauchen oder muss ich nach draußen gehen?", exampleTranslation: "Czy wolno mi tu palić czy muszę wyjść na zewnątrz?" },
      { id: "perm4", polish: "Proszę", german: "Bitte", difficulty: "easy", example: "Können Sie mir bitte helfen? Ich finde den Weg nicht alleine.", exampleTranslation: "Czy może mi Pan proszę pomóc? Nie mogę znaleźć drogi sam." },
      { id: "perm5", polish: "Przepraszam", german: "Entschuldigung", difficulty: "easy", example: "Entschuldigung, können Sie mir sagen, wie spät es ist jetzt bitte?", exampleTranslation: "Przepraszam, czy może mi Pan powiedzieć która jest godzina teraz proszę?" },
      { id: "perm6", polish: "Pozwolenie", german: "Erlaubnis", difficulty: "easy", example: "Ich brauche eine schriftliche Erlaubnis vom Chef für den Urlaub offiziell.", exampleTranslation: "Potrzebuję pisemnego pozwolenia od szefa na urlop oficjalnie." },
      { id: "perm7", polish: "Prosić", german: "Bitten", difficulty: "medium", example: "Ich möchte Sie um einen großen Gefallen bitten, wenn Sie Zeit haben.", exampleTranslation: "Chciałbym prosić Pana o dużą przysługę, jeśli ma Pan czas." },
      { id: "perm8", polish: "Pozwolić", german: "Erlauben", difficulty: "medium", example: "Meine Eltern erlauben mir nicht, so spät auszugehen am Wochenende.", exampleTranslation: "Moi rodzice nie pozwalają mi wychodzić tak późno w weekend." },
      { id: "perm9", polish: "Zabronić", german: "Verbieten", difficulty: "medium", example: "Das Rauchen ist in öffentlichen Gebäuden streng verboten per Gesetz.", exampleTranslation: "Palenie jest w budynkach publicznych surowo zabronione przez prawo." },
      { id: "perm10", polish: "Uprzejmie", german: "Höflich", difficulty: "medium", example: "Bitte fragen Sie immer höflich, wenn Sie etwas von anderen brauchen.", exampleTranslation: "Proszę pytaj zawsze uprzejmie, gdy czegoś potrzebujesz od innych." },
      { id: "perm11", polish: "Grzecznie", german: "Freundlich", difficulty: "medium", example: "Der Verkäufer war sehr freundlich und hilfsbereit mit allen Kunden immer.", exampleTranslation: "Sprzedawca był bardzo grzeczny i pomocny ze wszystkimi klientami zawsze." },
      { id: "perm12", polish: "Zasady", german: "Regeln", difficulty: "medium", example: "Wir müssen uns an die Regeln halten, sie gelten für alle Menschen gleich.", exampleTranslation: "Musimy przestrzegać zasad, obowiązują wszystkich ludzi jednakowo." },
      { id: "perm13", polish: "Czy mogę prosić?", german: "Dürfte ich bitten?", difficulty: "hard", example: "Dürfte ich Sie um einen kleinen Gefallen bitten? Es dauert nur kurz!", exampleTranslation: "Czy mogę prosić o małą przysługę? To zajmie tylko chwilę!" },
      { id: "perm14", polish: "Byłbym wdzięczny", german: "Ich wäre dankbar", difficulty: "hard", example: "Ich wäre sehr dankbar, wenn Sie mir dabei helfen könnten bitte!", exampleTranslation: "Byłbym bardzo wdzięczny, gdyby mógł mi Pan w tym pomóc proszę!" },
      { id: "perm15", polish: "Czy to możliwe?", german: "Ist das möglich?", difficulty: "hard", example: "Ist es möglich den Termin auf nächste Woche zu verschieben bitte?", exampleTranslation: "Czy to możliwe przesunąć termin na przyszły tydzień proszę?" }
    ]
  }
};