
/**
 * POLISH → GERMAN FLASHCARDS - PART 4
 * 
 * Native Language: Polish (Polski)
 * Target Language: German (Deutsch)
 * 
 * This file contains additional flashcard categories (41-50).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Laptop,
  Luggage,
  Home,
  Music,
  Scale,
  Glasses,
  Baby,
  Cake,
  Footprints,
  Bath,
  MessageSquare,
  Star,
  Coffee
} from "lucide-react";

export const flashcardsCategories_part4 = {
  computers_internet: {
    name: "Komputery i internet",
    description: "Technologia cyfrowa i sieć internetowa",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "comp1", polish: "Komputer", german: "Computer", difficulty: "easy", example: "Mein Computer ist sehr schnell und hat viel Speicherplatz für alle Programme.", exampleTranslation: "Mój komputer jest bardzo szybki i ma dużo pamięci na wszystkie programy." },
      { id: "comp2", polish: "Klawiatura", german: "Tastatur", difficulty: "easy", example: "Die Tastatur ist ergonomisch und sehr bequem zum langen Tippen täglich.", exampleTranslation: "Klawiatura jest ergonomiczna i bardzo wygodna do długiego pisania codziennie." },
      { id: "comp3", polish: "Mysz", german: "Maus", difficulty: "easy", example: "Ich benutze eine drahtlose Maus für mehr Bewegungsfreiheit am Schreibtisch.", exampleTranslation: "Używam bezprzewodowej myszy dla większej swobody ruchu przy biurku." },
      { id: "comp4", polish: "Monitor", german: "Bildschirm", difficulty: "easy", example: "Der große Bildschirm erleichtert die Arbeit mit mehreren Fenstern gleichzeitig.", exampleTranslation: "Duży monitor ułatwia pracę z wieloma oknami jednocześnie." },
      { id: "comp5", polish: "Drukarka", german: "Drucker", difficulty: "easy", example: "Der Drucker druckt sehr schnell und in ausgezeichneter Qualität für Dokumente.", exampleTranslation: "Drukarka drukuje bardzo szybko i w doskonałej jakości dla dokumentów." },
      { id: "comp6", polish: "Strona internetowa", german: "Webseite", difficulty: "easy", example: "Diese Webseite hat viele nützliche Informationen über deutsche Kultur und Geschichte.", exampleTranslation: "Ta strona internetowa ma wiele przydatnych informacji o niemieckiej kulturze i historii." },
      { id: "comp7", polish: "Przeglądarka", german: "Browser", difficulty: "medium", example: "Ich benutze diesen Browser, weil er sehr schnell und sicher ist.", exampleTranslation: "Używam tej przeglądarki, bo jest bardzo szybka i bezpieczna." },
      { id: "comp8", polish: "Pobierać", german: "Herunterladen", difficulty: "medium", example: "Ich muss diese wichtige Datei herunterladen für die Präsentation morgen früh.", exampleTranslation: "Muszę pobrać ten ważny plik na prezentację jutro rano." },
      { id: "comp9", polish: "Załącznik", german: "Anhang", difficulty: "medium", example: "Bitte sehen Sie sich den Anhang in meiner E-Mail an mit Dokumenten.", exampleTranslation: "Proszę sprawdzić załącznik w moim emailu z dokumentami." },
      { id: "comp10", polish: "Folder", german: "Ordner", difficulty: "medium", example: "Ich organisiere alle Dateien in verschiedenen Ordnern auf dem Computer systematisch.", exampleTranslation: "Organizuję wszystkie pliki w różnych folderach na komputerze systematycznie." },
      { id: "comp11", polish: "Wyszukiwarka", german: "Suchmaschine", difficulty: "medium", example: "Die Suchmaschine findet sofort alle relevanten Informationen zu diesem Thema schnell.", exampleTranslation: "Wyszukiwarka znajduje natychmiast wszystkie istotne informacje na ten temat szybko." },
      { id: "comp12", polish: "Link", german: "Link", difficulty: "medium", example: "Klicken Sie auf diesen Link, um mehr Informationen zu erhalten ausführlich.", exampleTranslation: "Kliknij ten link, aby uzyskać więcej informacji szczegółowo." },
      { id: "comp13", polish: "Komputer się zawiesił", german: "Der Computer ist abgestürzt", difficulty: "hard", example: "Oh nein! Der Computer ist abgestürzt und ich habe alle Daten verloren!", exampleTranslation: "O nie! Komputer się zawiesił i straciłem wszystkie dane!" },
      { id: "comp14", polish: "Prześlij mi plik", german: "Schick mir die Datei", difficulty: "hard", example: "Kannst du mir bitte die Datei per E-Mail schicken heute noch?", exampleTranslation: "Możesz mi proszę przesłać plik emailem jeszcze dzisiaj?" },
      { id: "comp15", polish: "Resetuję hasło", german: "Ich setze das Passwort zurück", difficulty: "hard", example: "Ich muss mein Passwort zurücksetzen, weil ich es vergessen habe leider.", exampleTranslation: "Muszę zresetować hasło, bo zapomniałem go niestety." }
    ]
  },

  vacation_holidays: {
    name: "Wakacje i urlop",
    description: "Odpoczynek, podróże i zwiedzanie",
    icon: Luggage,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "vac1", polish: "Wakacje", german: "Ferien", difficulty: "easy", example: "Die Sommerferien dauern zwei Monate und wir fahren ans Meer zusammen.", exampleTranslation: "Wakacje letnie trwają dwa miesiące i jedziemy nad morze razem." },
      { id: "vac2", polish: "Urlop", german: "Urlaub", difficulty: "easy", example: "Ich nehme im August drei Wochen Urlaub und fahre nach Italien.", exampleTranslation: "Biorę w sierpniu trzy tygodnie urlopu i jadę do Włoch." },
      { id: "vac3", polish: "Hotel", german: "Hotel", difficulty: "easy", example: "Wir haben ein schönes Hotel direkt am Strand mit Meerblick gebucht.", exampleTranslation: "Zarezerwowaliśmy piękny hotel bezpośrednio przy plaży z widokiem na morze." },
      { id: "vac4", polish: "Rezerwacja", german: "Reservierung", difficulty: "easy", example: "Ich habe eine Reservierung für ein Doppelzimmer vom zehnten bis zwanzigsten Juli.", exampleTranslation: "Mam rezerwację na pokój dwuosobowy od dziesiątego do dwudziestego lipca." },
      { id: "vac5", polish: "Bagaż", german: "Gepäck", difficulty: "easy", example: "Mein Gepäck ist sehr schwer, weil ich viel Kleidung mitgenommen habe.", exampleTranslation: "Mój bagaż jest bardzo ciężki, bo zabrałem dużo ubrań." },
      { id: "vac6", polish: "Plaża", german: "Strand", difficulty: "easy", example: "Der Strand ist wunderschön mit weißem Sand und kristallklarem Wasser überall.", exampleTranslation: "Plaża jest piękna z białym piaskiem i krystalicznie czystą wodą wszędzie." },
      { id: "vac7", polish: "Zwiedzanie", german: "Besichtigung", difficulty: "medium", example: "Die Besichtigung der Stadt dauert drei Stunden mit einem erfahrenen Guide.", exampleTranslation: "Zwiedzanie miasta trwa trzy godziny z doświadczonym przewodnikiem." },
      { id: "vac8", polish: "Pamiątka", german: "Souvenir", difficulty: "medium", example: "Ich kaufe immer Souvenirs für meine Familie und Freunde aus jedem Urlaub.", exampleTranslation: "Zawsze kupuję pamiątki dla mojej rodziny i przyjaciół z każdego urlopu." },
      { id: "vac9", polish: "Przewodnik", german: "Reiseführer", difficulty: "medium", example: "Der Reiseführer zeigt uns die schönsten Sehenswürdigkeiten der Stadt interessant.", exampleTranslation: "Przewodnik pokazuje nam najpiękniejsze zabytki miasta ciekawie." },
      { id: "vac10", polish: "Wycieczka", german: "Ausflug", difficulty: "medium", example: "Wir machen morgen einen ganztägigen Ausflug in die Berge mit Wanderung.", exampleTranslation: "Robimy jutro całodniową wycieczkę w góry z wędrówką." },
      { id: "vac11", polish: "Wypoczynek", german: "Erholung", difficulty: "medium", example: "Nach einem Jahr harter Arbeit brauche ich dringend Erholung am Meer.", exampleTranslation: "Po roku ciężkiej pracy potrzebuję pilnie wypoczynku nad morzem." },
      { id: "vac12", polish: "Kempingować", german: "Campen", difficulty: "medium", example: "Wir campen gerne in der Natur fernab von der Stadt in Ruhe.", exampleTranslation: "Lubimy kempingować w naturze z dala od miasta w spokoju." },
      { id: "vac13", polish: "Gdzie spędzasz wakacje?", german: "Wo verbringst du die Ferien?", difficulty: "hard", example: "Wo verbringst du dieses Jahr die Sommerferien? Ich möchte auch dorthin fahren!", exampleTranslation: "Gdzie spędzasz w tym roku wakacje letnie? Też chcę tam pojechać!" },
      { id: "vac14", polish: "Świetnie się bawiłem", german: "Ich hatte viel Spaß", difficulty: "hard", example: "Ich hatte im Urlaub so viel Spaß! Es war die beste Reise meines Lebens!", exampleTranslation: "Świetnie się bawiłem na urlopie! To była najlepsza podróż mojego życia!" },
      { id: "vac15", polish: "Polecam to miejsce", german: "Ich empfehle diesen Ort", difficulty: "hard", example: "Ich empfehle diesen wunderschönen Ort jedem! Die Landschaft ist atemberaubend schön!", exampleTranslation: "Polecam to piękne miejsce każdemu! Krajobraz jest zapierająco piękny!" }
    ]
  },

  household_chores: {
    name: "Prace domowe",
    description: "Obowiązki domowe i porządki",
    icon: Home,
    color: "from-teal-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "chor1", polish: "Sprzątać", german: "Putzen", difficulty: "easy", example: "Ich putze jeden Samstag gründlich die ganze Wohnung von oben bis unten.", exampleTranslation: "Sprzątam każdą sobotę dokładnie całe mieszkanie od góry do dołu." },
      { id: "chor2", polish: "Zmywać", german: "Abwaschen", difficulty: "easy", example: "Nach dem Essen wasche ich immer das Geschirr ab sofort schnell.", exampleTranslation: "Po jedzeniu zawsze zmywam naczynia natychmiast szybko." },
      { id: "chor3", polish: "Prasować", german: "Bügeln", difficulty: "easy", example: "Ich bügle meine Hemden jeden Sonntag für die ganze Arbeitswoche vor.", exampleTranslation: "Prasuję moje koszule każdą niedzielę na cały tydzień pracy." },
      { id: "chor4", polish: "Odkurzać", german: "Staubsaugen", difficulty: "easy", example: "Ich sauge zweimal pro Woche alle Zimmer und Teppiche gründlich.", exampleTranslation: "Odkurzam dwa razy w tygodniu wszystkie pokoje i dywany dokładnie." },
      { id: "chor5", polish: "Pranie", german: "Wäsche", difficulty: "easy", example: "Die Wäsche ist fertig, ich muss sie jetzt aufhängen zum Trocknen.", exampleTranslation: "Pranie jest gotowe, muszę je teraz powiesić do suszenia." },
      { id: "chor6", polish: "Wycierać kurze", german: "Staub wischen", difficulty: "easy", example: "Ich wische jeden Tag Staub von den Möbeln für Sauberkeit ab.", exampleTranslation: "Ścieram każdego dnia kurze z mebli dla czystości." },
      { id: "chor7", polish: "Myć podłogę", german: "Den Boden wischen", difficulty: "medium", example: "Ich wische den Boden mit warmem Wasser und Reinigungsmittel gründlich sauber.", exampleTranslation: "Myję podłogę ciepłą wodą i środkiem czyszczącym dokładnie." },
      { id: "chor8", polish: "Wynosić śmieci", german: "Den Müll rausbringen", difficulty: "medium", example: "Ich bringe jeden Abend den Müll raus in die Tonnen draußen.", exampleTranslation: "Wynoszę każdego wieczoru śmieci do pojemników na zewnątrz." },
      { id: "chor9", polish: "Ścierać kurz", german: "Abstauben", difficulty: "medium", example: "Das Abstauben der Regale dauert lange, aber es muss gemacht werden.", exampleTranslation: "Ścieranie kurzu z półek trwa długo, ale musi być zrobione." },
      { id: "chor10", polish: "Porządkować", german: "Aufräumen", difficulty: "medium", example: "Ich räume mein Zimmer jeden Tag auf, damit alles ordentlich ist.", exampleTranslation: "Porządkuję mój pokój każdego dnia, aby wszystko było schludne." },
      { id: "chor11", polish: "Myć okna", german: "Fenster putzen", difficulty: "medium", example: "Im Frühling putze ich alle Fenster, damit sie wieder klar und sauber sind.", exampleTranslation: "Wiosną myję wszystkie okna, aby były znowu czyste i przejrzyste." },
      { id: "chor12", polish: "Pralka", german: "Waschmaschine", difficulty: "medium", example: "Die Waschmaschine ist kaputt, ich muss einen Techniker rufen zur Reparatur.", exampleTranslation: "Pralka jest zepsuta, muszę zadzwonić po technika do naprawy." },
      { id: "chor13", polish: "Muszę posprzątać", german: "Ich muss aufräumen", difficulty: "hard", example: "Ich muss dringend aufräumen, bevor die Gäste kommen heute Abend!", exampleTranslation: "Muszę pilnie posprzątać, zanim goście przyjdą dzisiaj wieczorem!" },
      { id: "chor14", polish: "Jakie są twoje obowiązki?", german: "Was sind deine Pflichten?", difficulty: "hard", example: "Was sind deine Pflichten zu Hause? Ich helfe auch meinen Eltern regelmäßig!", exampleTranslation: "Jakie są twoje obowiązki w domu? Też pomagam moim rodzicom regularnie!" },
      { id: "chor15", polish: "Pomóż mi proszę", german: "Hilf mir bitte", difficulty: "hard", example: "Hilf mir bitte beim Aufräumen! Zusammen schaffen wir das viel schneller!", exampleTranslation: "Pomóż mi proszę w sprzątaniu! Razem zrobimy to dużo szybciej!" }
    ]
  },

  instruments_music: {
    name: "Instrumenty i muzyka",
    description: "Muzyka, instrumenty i wykonawcy",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "mus1", polish: "Muzyka", german: "Musik", difficulty: "easy", example: "Musik ist eine universelle Sprache, die alle Menschen verbindet weltweit.", exampleTranslation: "Muzyka jest uniwersalnym językiem, który łączy wszystkich ludzi na świecie." },
      { id: "mus2", polish: "Piosenka", german: "Lied", difficulty: "easy", example: "Dieses Lied ist sehr schön und ich höre es jeden Tag gerne.", exampleTranslation: "Ta piosenka jest bardzo piękna i słucham jej każdego dnia chętnie." },
      { id: "mus3", polish: "Śpiewać", german: "Singen", difficulty: "easy", example: "Meine Tochter singt wunderschön und nimmt Gesangsunterricht zweimal wöchentlich.", exampleTranslation: "Moja córka śpiewa pięknie i bierze lekcje śpiewu dwa razy w tygodniu." },
      { id: "mus4", polish: "Gitara", german: "Gitarre", difficulty: "easy", example: "Ich lerne seit zwei Jahren Gitarre spielen und übe jeden Tag fleißig.", exampleTranslation: "Uczę się grać na gitarze od dwóch lat i ćwiczę każdego dnia pilnie." },
      { id: "mus5", polish: "Fortepian", german: "Klavier", difficulty: "easy", example: "Das Klavier steht im Wohnzimmer und wird täglich von meiner Schwester gespielt.", exampleTranslation: "Fortepian stoi w salonie i jest codziennie grany przez moją siostrę." },
      { id: "mus6", polish: "Skrzypce", german: "Geige", difficulty: "easy", example: "Die Geige ist ein wunderschönes Instrument mit zartem melodischem Klang.", exampleTranslation: "Skrzypce są pięknym instrumentem z delikatnym melodyjnym dźwiękiem." },
      { id: "mus7", polish: "Perkusja", german: "Schlagzeug", difficulty: "medium", example: "Mein Bruder spielt Schlagzeug in einer Rock-Band jeden Freitagabend laut.", exampleTranslation: "Mój brat gra na perkusji w zespole rockowym każdego piątkowego wieczoru głośno." },
      { id: "mus8", polish: "Trąbka", german: "Trompete", difficulty: "medium", example: "Die Trompete hat einen hellen kraftvollen Klang im ganzen Orchester dominant.", exampleTranslation: "Trąbka ma jasny potężny dźwięk w całej orkiestrze dominujący." },
      { id: "mus9", polish: "Flet", german: "Flöte", difficulty: "medium", example: "Die Flöte klingt sanft und melodisch in klassischen Musikstücken wunderschön.", exampleTranslation: "Flet brzmi łagodnie i melodyjnie w klasycznych utworach muzycznych pięknie." },
      { id: "mus10", polish: "Orkiestra", german: "Orchester", difficulty: "medium", example: "Das Orchester besteht aus fünfzig Musikern und spielt klassische Musik live.", exampleTranslation: "Orkiestra składa się z pięćdziesięciu muzyków i gra muzykę klasyczną na żywo." },
      { id: "mus11", polish: "Koncert", german: "Konzert", difficulty: "medium", example: "Das Konzert war ausgezeichnet und dauerte über zwei Stunden lang insgesamt.", exampleTranslation: "Koncert był doskonały i trwał ponad dwie godziny w sumie." },
      { id: "mus12", polish: "Melodia", german: "Melodie", difficulty: "medium", example: "Diese Melodie ist sehr eingängig und bleibt den ganzen Tag im Kopf.", exampleTranslation: "Ta melodia jest bardzo chwytliwa i zostaje w głowie cały dzień." },
      { id: "mus13", polish: "Gram na pianinie", german: "Ich spiele Klavier", difficulty: "hard", example: "Ich spiele seit zehn Jahren Klavier und übe täglich mindestens eine Stunde.", exampleTranslation: "Gram na pianinie od dziesięciu lat i ćwiczę codziennie przynajmniej godzinę." },
      { id: "mus14", polish: "Masz słuch muzyczny", german: "Du hast ein gutes Gehör", difficulty: "hard", example: "Du hast wirklich ein ausgezeichnetes musikalisches Gehör! Hast du Unterricht genommen?", exampleTranslation: "Masz naprawdę doskonały słuch muzyczny! Brałeś lekcje?" },
      { id: "mus15", polish: "To piękna melodia", german: "Das ist eine schöne Melodie", difficulty: "hard", example: "Das ist eine wunderschöne Melodie! Wer hat dieses Stück komponiert genau?", exampleTranslation: "To piękna melodia! Kto skomponował ten utwór dokładnie?" }
    ]
  },

  body_parts_detailed: {
    name: "Części ciała szczegółowo",
    description: "Anatomia i szczegółowe części ciała",
    icon: Footprints,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { id: "body1", polish: "Twarz", german: "Gesicht", difficulty: "easy", example: "Wasch dir bitte das Gesicht mit warmem Wasser und Seife gründlich.", exampleTranslation: "Umyj sobie proszę twarz ciepłą wodą i mydłem dokładnie." },
      { id: "body2", polish: "Nos", german: "Nase", difficulty: "easy", example: "Meine Nase ist verstopft wegen der Erkältung seit gestern Morgen.", exampleTranslation: "Mój nos jest zatkany z powodu przeziębienia od wczorajszego ranka." },
      { id: "body3", polish: "Ucho", german: "Ohr", difficulty: "easy", example: "Mein Ohr tut weh, ich sollte zum Arzt gehen zur Untersuchung.", exampleTranslation: "Boli mnie ucho, powinienem iść do lekarza na badanie." },
      { id: "body4", polish: "Usta", german: "Mund", difficulty: "easy", example: "Öffne bitte den Mund weit, der Zahnarzt muss die Zähne untersuchen.", exampleTranslation: "Otwórz proszę szeroko usta, dentysta musi zbadać zęby." },
      { id: "body5", polish: "Zęby", german: "Zähne", difficulty: "easy", example: "Putze deine Zähne zweimal täglich für gesunde Zähne immer gründlich!", exampleTranslation: "Myj zęby dwa razy dziennie dla zdrowych zębów zawsze dokładnie!" },
      { id: "body6", polish: "Język", german: "Zunge", difficulty: "easy", example: "Die Zunge ist wichtig zum Schmecken und Sprechen für jeden Menschen.", exampleTranslation: "Język jest ważny do smakowania i mówienia dla każdego człowieka." },
      { id: "body7", polish: "Palec", german: "Finger", difficulty: "medium", example: "Ich habe mir den Finger verletzt beim Schneiden von Gemüse gestern.", exampleTranslation: "Zraniłem sobie palec przy krojeniu warzyw wczoraj." },
      { id: "body8", polish: "Ramię", german: "Schulter", difficulty: "medium", example: "Meine Schulter schmerzt vom vielen Tragen schwerer Taschen täglich sehr.", exampleTranslation: "Boli mnie ramię od częstego noszenia ciężkich toreb codziennie bardzo." },
      { id: "body9", polish: "Łokieć", german: "Ellbogen", difficulty: "medium", example: "Ich habe mir den Ellbogen gestoßen an der Tür und es tut weh.", exampleTranslation: "Uderzyłem się łokciem o drzwi i boli." },
      { id: "body10", polish: "Kolano", german: "Knie", difficulty: "medium", example: "Mein Knie schmerzt nach dem langen Laufen im Marathon gestern sehr.", exampleTranslation: "Boli mnie kolano po długim biegu w maratonie wczoraj bardzo." },
      { id: "body11", polish: "Stopa", german: "Fuß", difficulty: "medium", example: "Meine Füße sind müde vom vielen Gehen den ganzen Tag in Stadt.", exampleTranslation: "Moje stopy są zmęczone od dużego chodzenia cały dzień po mieście." },
      { id: "body12", polish: "Plecy", german: "Rücken", difficulty: "medium", example: "Mein Rücken tut weh vom langen Sitzen am Schreibtisch ohne Pause.", exampleTranslation: "Bolą mnie plecy od długiego siedzenia przy biurku bez przerwy." },
      { id: "body13", polish: "Boli mnie kolano", german: "Mein Knie tut weh", difficulty: "hard", example: "Mein Knie tut sehr weh! Ich kann kaum laufen oder Treppen steigen!", exampleTranslation: "Bardzo boli mnie kolano! Ledwo mogę chodzić lub wchodzić po schodach!" },
      { id: "body14", polish: "Skręciłem kostkę", german: "Ich habe mir den Knöchel verstaucht", difficulty: "hard", example: "Ich habe mir beim Sport den Knöchel verstaucht und muss zum Arzt gehen.", exampleTranslation: "Skręciłem sobie kostkę podczas sportu i muszę iść do lekarza." },
      { id: "body15", polish: "Zdrowe ciało", german: "Gesunder Körper", difficulty: "hard", example: "Ein gesunder Körper braucht regelmäßige Bewegung und ausgewogene Ernährung täglich!", exampleTranslation: "Zdrowe ciało potrzebuje regularnego ruchu i zbilansowanej diety codziennie!" }
    ]
  },

  weights_measurements: {
    name: "Wagi i wymiary",
    description: "Mierzenie i ważenie przedmiotów",
    icon: Scale,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "weig1", polish: "Waga", german: "Waage", difficulty: "easy", example: "Ich stelle mich jeden Morgen auf die Waage zur Kontrolle meines Gewichts.", exampleTranslation: "Staję każdego ranka na wagę do kontroli mojej wagi." },
      { id: "weig2", polish: "Ważyć", german: "Wiegen", difficulty: "easy", example: "Können Sie bitte diese Kartoffeln wiegen? Ich brauche zwei Kilogramm genau.", exampleTranslation: "Czy może Pan proszę zważyć te ziemniaki? Potrzebuję dokładnie dwa kilogramy." },
      { id: "weig3", polish: "Ciężki", german: "Schwer", difficulty: "easy", example: "Dieser Koffer ist sehr schwer, ich kann ihn kaum tragen alleine.", exampleTranslation: "Ta walizka jest bardzo ciężka, ledwo mogę ją nieść sam." },
      { id: "weig4", polish: "Lekki", german: "Leicht", difficulty: "easy", example: "Diese Tasche ist sehr leicht und bequem zum Tragen den ganzen Tag.", exampleTranslation: "Ta torba jest bardzo lekka i wygodna do noszenia cały dzień." },
      { id: "weig5", polish: "Mierzyć", german: "Messen", difficulty: "easy", example: "Ich muss die Länge des Tisches messen vor dem Kauf genau.", exampleTranslation: "Muszę zmierzyć długość stołu przed zakupem dokładnie." },
      { id: "weig6", polish: "Miara", german: "Maßband", difficulty: "easy", example: "Ich brauche ein Maßband, um die Größe des Zimmers zu messen präzise.", exampleTranslation: "Potrzebuję miary, aby zmierzyć rozmiar pokoju precyzyjnie." },
      { id: "weig7", polish: "Grubość", german: "Dicke", difficulty: "medium", example: "Die Dicke der Wand beträgt zwanzig Zentimeter für gute Isolierung.", exampleTranslation: "Grubość ściany wynosi dwadzieścia centymetrów dla dobrej izolacji." },
      { id: "weig8", polish: "Średnica", german: "Durchmesser", difficulty: "medium", example: "Der Durchmesser des Tellers beträgt fünfundzwanzig Zentimeter ungefähr etwa.", exampleTranslation: "Średnica talerza wynosi dwadzieścia pięć centymetrów mniej więcej." },
      { id: "weig9", polish: "Objętość", german: "Volumen", difficulty: "medium", example: "Das Volumen dieses Kartons reicht für alle meine Bücher perfekt aus.", exampleTranslation: "Objętość tego kartonu wystarczy idealnie na wszystkie moje książki." },
      { id: "weig10", polish: "Wymiary", german: "Maße", difficulty: "medium", example: "Die Maße des Schranks sind zwei Meter Höhe und ein Meter Breite.", exampleTranslation: "Wymiary szafy to dwa metry wysokości i jeden metr szerokości." },
      { id: "weig11", polish: "Przybliżony", german: "Ungefähr", difficulty: "medium", example: "Die Entfernung beträgt ungefähr hundert Kilometer von hier bis München etwa.", exampleTranslation: "Odległość wynosi przybliżnie sto kilometrów stąd do Monachium mniej więcej." },
      { id: "weig12", polish: "Dokładny", german: "Genau", difficulty: "medium", example: "Ich brauche eine genaue Messung für diese wichtige Arbeit ohne Fehler.", exampleTranslation: "Potrzebuję dokładnego pomiaru dla tej ważnej pracy bez błędów." },
      { id: "weig13", polish: "Ile to waży?", german: "Wie schwer ist das?", difficulty: "hard", example: "Wie schwer ist dieses Paket genau? Ich muss das Versandgewicht wissen!", exampleTranslation: "Ile dokładnie waży ta paczka? Muszę wiedzieć wagę do wysyłki!" },
      { id: "weig14", polish: "To za ciężkie", german: "Das ist zu schwer", difficulty: "hard", example: "Das ist mir viel zu schwer zum Tragen! Kannst du mir helfen bitte?", exampleTranslation: "To jest dla mnie za ciężkie do noszenia! Możesz mi pomóc proszę?" },
      { id: "weig15", polish: "Jaki jest rozmiar?", german: "Welche Größe ist das?", difficulty: "hard", example: "Welche Größe hat diese Jacke? Ich brauche eine größere für mich!", exampleTranslation: "Jaki rozmiar ma ta kurtka? Potrzebuję większej dla siebie!" }
    ]
  },

  vision_glasses: {
    name: "Wzrok i okulary",
    description: "Widzenie, okulary i badania wzroku",
    icon: Glasses,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "vis1", polish: "Okulary", german: "Brille", difficulty: "easy", example: "Ich trage eine Brille zum Lesen, weil meine Augen schwach sind.", exampleTranslation: "Noszę okulary do czytania, bo moje oczy są słabe." },
      { id: "vis2", polish: "Widzieć", german: "Sehen", difficulty: "easy", example: "Ich kann nicht gut sehen ohne meine Brille auf der Nase.", exampleTranslation: "Nie mogę dobrze widzieć bez moich okularów na nosie." },
      { id: "vis3", polish: "Okulista", german: "Augenarzt", difficulty: "easy", example: "Ich gehe einmal jährlich zum Augenarzt für eine Kontrolluntersuchung der Augen.", exampleTranslation: "Chodzę raz w roku do okulisty na kontrolę oczu." },
      { id: "vis4", polish: "Soczewki", german: "Kontaktlinsen", difficulty: "easy", example: "Ich trage Kontaktlinsen statt einer Brille, weil sie bequemer sind täglich.", exampleTranslation: "Noszę soczewki kontaktowe zamiast okularów, bo są wygodniejsze codziennie." },
      { id: "vis5", polish: "Wzrok", german: "Sehkraft", difficulty: "easy", example: "Meine Sehkraft wird schwächer mit dem Alter und ich brauche stärkere Gläser.", exampleTranslation: "Mój wzrok słabnie z wiekiem i potrzebuję mocniejszych szkieł." },
      { id: "vis6", polish: "Krótkowzroczność", german: "Kurzsichtigkeit", difficulty: "easy", example: "Kurzsichtigkeit bedeutet, dass man in die Ferne nicht gut sehen kann.", exampleTranslation: "Krótkowzroczność oznacza, że nie można dobrze widzieć w dal." },
      { id: "vis7", polish: "Badanie wzroku", german: "Sehtest", difficulty: "medium", example: "Der Sehtest beim Augenarzt dauert nur zwanzig Minuten und ist schmerzlos.", exampleTranslation: "Badanie wzroku u okulisty trwa tylko dwadzieścia minut i jest bezbolesne." },
      { id: "vis8", polish: "Ostrość wzroku", german: "Sehschärfe", difficulty: "medium", example: "Meine Sehschärfe hat sich verbessert nach der Operation am Auge deutlich.", exampleTranslation: "Moja ostrość wzroku poprawiła się po operacji oka wyraźnie." },
      { id: "vis9", polish: "Soczewka", german: "Linse", difficulty: "medium", example: "Die Linse in meiner Brille ist zerkratzt und muss ausgetauscht werden.", exampleTranslation: "Soczewka w moich okularach jest porysowana i musi być wymieniona." },
      { id: "vis10", polish: "Oprawki", german: "Gestell", difficulty: "medium", example: "Das Brillengestell ist modern und passt perfekt zu meinem Gesicht gut.", exampleTranslation: "Oprawki okularów są nowoczesne i pasują idealnie do mojej twarzy dobrze." },
      { id: "vis11", polish: "Nieostry", german: "Verschwommen", difficulty: "medium", example: "Alles ist verschwommen ohne Brille, ich sehe nur undeutlich die Umgebung.", exampleTranslation: "Wszystko jest nieostre bez okularów, widzę tylko niewyraźnie otoczenie." },
      { id: "vis12", polish: "Zamazany", german: "Unscharf", difficulty: "medium", example: "Das Bild ist unscharf, ich muss meine Brille aufsetzen zum Sehen.", exampleTranslation: "Obraz jest zamazany, muszę założyć okulary do widzenia." },
      { id: "vis13", polish: "Źle widzę", german: "Ich sehe schlecht", difficulty: "hard", example: "Ich sehe in letzter Zeit sehr schlecht, ich sollte zum Augenarzt gehen!", exampleTranslation: "Ostatnio źle widzę, powinienem iść do okulisty!" },
      { id: "vis14", polish: "Potrzebuję okularów", german: "Ich brauche eine Brille", difficulty: "hard", example: "Ich brauche dringend eine neue Brille, die alte ist kaputt gegangen!", exampleTranslation: "Pilnie potrzebuję nowych okularów, stare się zepsuły!" },
      { id: "vis15", polish: "Zgubiłem soczewkę", german: "Ich habe die Linse verloren", difficulty: "hard", example: "Ich habe meine Kontaktlinse verloren! Hast du eine Ersatzlinse für mich?", exampleTranslation: "Zgubiłem moją soczewkę kontaktową! Masz zapasową soczewkę dla mnie?" }
    ]
  },

  children_parenting: {
    name: "Dzieci i rodzicielstwo",
    description: "Wychowanie dzieci i opieka nad nimi",
    icon: Baby,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "child1", polish: "Dziecko", german: "Kind", difficulty: "easy", example: "Unser Kind ist drei Jahre alt und lernt gerade sprechen jeden Tag.", exampleTranslation: "Nasze dziecko ma trzy lata i właśnie uczy się mówić każdego dnia." },
      { id: "child2", polish: "Niemowlę", german: "Baby", difficulty: "easy", example: "Das Baby schläft friedlich in seinem Bettchen die ganze Nacht durch.", exampleTranslation: "Niemowlę śpi spokojnie w swoim łóżeczku całą noc." },
      { id: "child3", polish: "Zabawka", german: "Spielzeug", difficulty: "easy", example: "Das Kind spielt gerne mit seinen bunten Spielzeugen im Kinderzimmer fröhlich.", exampleTranslation: "Dziecko lubi bawić się swoimi kolorowymi zabawkami w pokoju dziecięcym wesoło." },
      { id: "child4", polish: "Plac zabaw", german: "Spielplatz", difficulty: "easy", example: "Wir gehen jeden Nachmittag mit den Kindern auf den Spielplatz zum Spielen.", exampleTranslation: "Chodzimy każdego popołudnia z dziećmi na plac zabaw do zabawy." },
      { id: "child5", polish: "Wózek dziecięcy", german: "Kinderwagen", difficulty: "easy", example: "Ich schiebe den Kinderwagen mit dem Baby durch den Park spazieren.", exampleTranslation: "Pchałem wózek dziecięcy z niemowlęciem przez park na spacer." },
      { id: "child6", polish: "Pielucha", german: "Windel", difficulty: "easy", example: "Ich muss die Windel des Babys wechseln, sie ist voll geworden.", exampleTranslation: "Muszę zmienić pieluchę niemowlęcia, została pełna." },
      { id: "child7", polish: "Karmić", german: "Füttern", difficulty: "medium", example: "Ich füttere das Baby alle drei Stunden mit Milch regelmäßig täglich.", exampleTranslation: "Karmię niemowlę co trzy godziny mlekiem regularnie codziennie." },
      { id: "child8", polish: "Kołysać", german: "Schaukeln", difficulty: "medium", example: "Ich schaukle das Baby sanft in den Armen, damit es einschläft.", exampleTranslation: "Kołyszę niemowlę delikatnie w ramionach, aby zasnęło." },
      { id: "child9", polish: "Łóżeczko", german: "Kinderbett", difficulty: "medium", example: "Das Kinderbett ist sicher und bequem für das Baby zum Schlafen.", exampleTranslation: "Łóżeczko jest bezpieczne i wygodne dla niemowlęcia do spania." },
      { id: "child10", polish: "Bajka", german: "Märchen", difficulty: "medium", example: "Ich lese meinem Kind jeden Abend ein Märchen vor dem Einschlafen vor.", exampleTranslation: "Czytam mojemu dziecku każdego wieczoru bajkę przed snem." },
      { id: "child11", polish: "Przedszkole", german: "Kindergarten", difficulty: "medium", example: "Unser Kind geht seit einem Monat in den Kindergarten und mag es sehr.", exampleTranslation: "Nasze dziecko chodzi od miesiąca do przedszkola i bardzo lubi." },
      { id: "child12", polish: "Opiekunka", german: "Babysitter", difficulty: "medium", example: "Wir brauchen einen zuverlässigen Babysitter für heute Abend dringend noch.", exampleTranslation: "Potrzebujemy niezawodnej opiekunki na dzisiaj wieczorem jeszcze pilnie." },
      { id: "child13", polish: "Dziecko płacze", german: "Das Kind weint", difficulty: "hard", example: "Das Kind weint seit einer Stunde! Ich weiß nicht was ihm fehlt!", exampleTranslation: "Dziecko płacze od godziny! Nie wiem co mu jest!" },
      { id: "child14", polish: "Uspokój się", german: "Beruhige dich", difficulty: "hard", example: "Beruhige dich bitte! Alles wird gut, ich bin hier bei dir!", exampleTranslation: "Uspokój się proszę! Wszystko będzie dobrze, jestem tu przy tobie!" },
      { id: "child15", polish: "Mam dwoje dzieci", german: "Ich habe zwei Kinder", difficulty: "hard", example: "Ich habe zwei wunderbare Kinder, einen Jungen und ein kleines Mädchen!", exampleTranslation: "Mam dwoje wspaniałych dzieci, chłopca i małą dziewczynkę!" }
    ]
  },

  baking_desserts: {
    name: "Pieczenie i desery",
    description: "Wypieki, słodycze i desery",
    icon: Cake,
    color: "from-pink-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "bake1", polish: "Piec", german: "Backen", difficulty: "easy", example: "Ich backe jeden Sonntag einen leckeren Kuchen für die ganze Familie.", exampleTranslation: "Piekę każdą niedzielę pyszne ciasto dla całej rodziny." },
      { id: "bake2", polish: "Ciasto", german: "Kuchen", difficulty: "easy", example: "Der Schokoladenkuchen schmeckt wunderbar und ist sehr saftig und süß.", exampleTranslation: "Ciasto czekoladowe smakuje wspaniale i jest bardzo soczyste i słodkie." },
      { id: "bake3", polish: "Ciastko", german: "Keks", difficulty: "easy", example: "Die Kekse sind frisch gebacken und duften herrlich in der Küche.", exampleTranslation: "Ciastka są świeżo upieczone i pachną wspaniale w kuchni." },
      { id: "bake4", polish: "Mąka", german: "Mehl", difficulty: "easy", example: "Ich brauche ein Kilo Mehl zum Backen von Brot und Kuchen.", exampleTranslation: "Potrzebuję kilo mąki do pieczenia chleba i ciasta." },
      { id: "bake5", polish: "Cukier", german: "Zucker", difficulty: "easy", example: "Gib bitte zwei Esslöffel Zucker in den Teig für Süße hinzu.", exampleTranslation: "Dodaj proszę dwie łyżki cukru do ciasta dla słodyczy." },
      { id: "bake6", polish: "Jajko", german: "Ei", difficulty: "easy", example: "Das Rezept braucht drei Eier und zweihundert Gramm Butter genau.", exampleTranslation: "Przepis potrzebuje trzech jajek i dwustu gramów masła dokładnie." },
      { id: "bake7", polish: "Ciasto (masa)", german: "Teig", difficulty: "medium", example: "Der Teig muss eine Stunde ruhen, bevor man ihn in den Ofen stellt.", exampleTranslation: "Ciasto musi odpocząć godzinę, zanim się je włoży do piekarnika." },
      { id: "bake8", polish: "Wałek do ciasta", german: "Nudelholz", difficulty: "medium", example: "Mit dem Nudelholz rolle ich den Teig dünn aus für die Pizza.", exampleTranslation: "Wałkiem do ciasta rozwałkowuję ciasto cienko na pizzę." },
      { id: "bake9", polish: "Blacha do pieczenia", german: "Backblech", difficulty: "medium", example: "Lege das Backblech mit Backpapier aus, bevor du den Teig darauf legst.", exampleTranslation: "Wyłóż blachę do pieczenia papierem, zanim położysz na nią ciasto." },
      { id: "bake10", polish: "Lukier", german: "Glasur", difficulty: "medium", example: "Die Schokoladenglasur macht den Kuchen noch leckerer und schöner anzusehen.", exampleTranslation: "Lukier czekoladowy czyni ciasto jeszcze smaczniejszym i ładniejszym do oglądania." },
      { id: "bake11", polish: "Krem", german: "Sahne", difficulty: "medium", example: "Ich schlage die Sahne steif für die Tortendekoration mit dem Mixer.", exampleTranslation: "Ubijam śmietanę na sztywno do dekoracji tortu mikserem." },
      { id: "bake12", polish: "Czekolada", german: "Schokolade", difficulty: "medium", example: "Ich schmelze dunkle Schokolade für die Glasur im Wasserbad langsam.", exampleTranslation: "Topię ciemną czekoladę na lukier w kąpieli wodnej wolno." },
      { id: "bake13", polish: "Piekę ciasto", german: "Ich backe einen Kuchen", difficulty: "hard", example: "Ich backe heute einen Apfelkuchen nach dem Rezept meiner Großmutter!", exampleTranslation: "Piekę dzisiaj szarlotkę według przepisu mojej babci!" },
      { id: "bake14", polish: "Ciasto jest gotowe", german: "Der Kuchen ist fertig", difficulty: "hard", example: "Der Kuchen ist endlich fertig! Er duftet herrlich und sieht köstlich aus!", exampleTranslation: "Ciasto jest w końcu gotowe! Pachnie wspaniale i wygląda pysznie!" },
      { id: "bake15", polish: "Przepis na ciasto", german: "Rezept für Kuchen", difficulty: "hard", example: "Kannst du mir bitte dein Rezept für diesen köstlichen Kuchen geben?", exampleTranslation: "Możesz mi proszę dać swój przepis na to pyszne ciasto?" }
    ]
  },

  walking_movement: {
    name: "Chodzenie i ruch",
    description: "Poruszanie się i aktywność fizyczna",
    icon: Footprints,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { id: "walk1", polish: "Chodzić", german: "Gehen", difficulty: "easy", example: "Ich gehe jeden Tag mindestens dreißig Minuten spazieren für Gesundheit.", exampleTranslation: "Chodzę każdego dnia przynajmniej trzydzieści minut na spacer dla zdrowia." },
      { id: "walk2", polish: "Biec", german: "Rennen", difficulty: "easy", example: "Die Kinder rennen schnell durch den Park und spielen fröhlich zusammen.", exampleTranslation: "Dzieci biegną szybko przez park i bawią się wesoło razem." },
      { id: "walk3", polish: "Spacer", german: "Spaziergang", difficulty: "easy", example: "Ein Spaziergang am Abend hilft mir zu entspannen nach der Arbeit.", exampleTranslation: "Spacer wieczorem pomaga mi się zrelaksować po pracy." },
      { id: "walk4", polish: "Stać", german: "Stehen", difficulty: "easy", example: "Ich stehe seit zwei Stunden und meine Beine sind sehr müde.", exampleTranslation: "Stoję od dwóch godzin i moje nogi są bardzo zmęczone." },
      { id: "walk5", polish: "Siedzieć", german: "Sitzen", difficulty: "easy", example: "Ich sitze den ganzen Tag am Schreibtisch und arbeite am Computer.", exampleTranslation: "Siedzę cały dzień przy biurku i pracuję przy komputerze." },
      { id: "walk6", polish: "Skakać", german: "Springen", difficulty: "easy", example: "Die Kinder springen fröhlich auf dem Trampolin im Garten herum.", exampleTranslation: "Dzieci skaczą wesoło na trampolinie w ogrodzie." },
      { id: "walk7", polish: "Wspinać się", german: "Klettern", difficulty: "medium", example: "Wir klettern am Wochenende in den Bergen auf hohe Gipfel zusammen.", exampleTranslation: "Wspinamy się w weekendy w górach na wysokie szczyty razem." },
      { id: "walk8", polish: "Schodzić", german: "Hinuntergehen", difficulty: "medium", example: "Geh bitte die Treppe hinunter und hole die Post aus dem Briefkasten.", exampleTranslation: "Zejdź proszę po schodach i odbierz pocztę ze skrzynki." },
      { id: "walk9", polish: "Wchodzić", german: "Hinaufgehen", difficulty: "medium", example: "Ich gehe jeden Tag die Treppe hinauf ins Büro im dritten Stock.", exampleTranslation: "Wchodzę każdego dnia po schodach do biura na trzecim piętrze." },
      { id: "walk10", polish: "Potknąć się", german: "Stolpern", difficulty: "medium", example: "Ich bin über den Stein gestolpert und habe mir das Knie verletzt.", exampleTranslation: "Potknąłem się o kamień i zraniłem sobie kolano." },
      { id: "walk11", polish: "Przewrócić się", german: "Hinfallen", difficulty: "medium", example: "Pass auf! Du könntest auf dem glatten Boden hinfallen und dich verletzen!", exampleTranslation: "Uważaj! Możesz przewrócić się na śliskiej podłodze i się zranić!" },
      { id: "walk12", polish: "Ślizgać się", german: "Rutschen", difficulty: "medium", example: "Die Kinder rutschen im Winter auf dem gefrorenen See lustig herum.", exampleTranslation: "Dzieci ślizgają się zimą po zamarzniętym jeziorze wesoło." },
      { id: "walk13", polish: "Chodźmy na spacer", german: "Lass uns spazieren gehen", difficulty: "hard", example: "Das Wetter ist so schön heute! Lass uns einen langen Spaziergang machen!", exampleTranslation: "Pogoda jest dzisiaj taka piękna! Chodźmy na długi spacer!" },
      { id: "walk14", polish: "Jestem zmęczony chodzeniem", german: "Ich bin müde vom Gehen", difficulty: "hard", example: "Ich bin sehr müde vom vielen Gehen! Können wir uns ausruhen bitte?", exampleTranslation: "Jestem bardzo zmęczony od dużego chodzenia! Możemy odpocząć proszony!" },
      { id: "walk15", polish: "Przewróciłem się", german: "Ich bin hingefallen", difficulty: "hard", example: "Ich bin auf dem Eis hingefallen und habe mir den Arm verstaucht leider!", exampleTranslation: "Przewróciłem się na lodzie i skręciłem sobie ramię niestety!" }
    ]
  },

  bathroom_hygiene: {
    name: "Łazienka i higiena",
    description: "Czynności higieniczne i wyposażenie łazienki",
    icon: Bath,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "bath1", polish: "Łazienka", german: "Badezimmer", difficulty: "easy", example: "Das Badezimmer ist groß und modern mit einer Badewanne und Dusche.", exampleTranslation: "Łazienka jest duża i nowoczesna z wanną i prysznicem." },
      { id: "bath2", polish: "Wanna", german: "Badewanne", difficulty: "easy", example: "Ich nehme am Abend ein entspannendes Bad in der warmen Badewanne.", exampleTranslation: "Biorę wieczorem relaksującą kąpiel w ciepłej wannie." },
      { id: "bath3", polish: "Kran", german: "Wasserhahn", difficulty: "easy", example: "Der Wasserhahn tropft, ich muss ihn reparieren lassen vom Klempner.", exampleTranslation: "Kran kapie, muszę go naprawić przez hydraulika." },
      { id: "bath4", polish: "Umywalka", german: "Waschbecken", difficulty: "easy", example: "Das Waschbecken ist aus weißem Porzellan und sehr leicht zu reinigen.", exampleTranslation: "Umywalka jest z białej porcelany i bardzo łatwa do czyszczenia." },
      { id: "bath5", polish: "Toaleta", german: "Toilette", difficulty: "easy", example: "Die Toilette muss regelmäßig gereinigt werden für Hygiene und Sauberkeit.", exampleTranslation: "Toaleta musi być regularnie czyszczona dla higieny i czystości." },
      { id: "bath6", polish: "Lustro", german: "Spiegel", difficulty: "easy", example: "Das große Spiegel über dem Waschbecken ist sehr praktisch zum Rasieren.", exampleTranslation: "Duże lustro nad umywalką jest bardzo praktyczne do golenia." },
      { id: "bath7", polish: "Szczotka", german: "Bürste", difficulty: "medium", example: "Ich bürste meine Haare jeden Morgen hundert Mal für gesunden Glanz.", exampleTranslation: "Szczotkuję włosy każdego ranka sto razy dla zdrowego połysku." },
      { id: "bath8", polish: "Płyn do kąpieli", german: "Badeschaum", difficulty: "medium", example: "Der Badeschaum riecht nach Lavendel und macht das Badewasser weich.", exampleTranslation: "Płyn do kąpieli pachnie lawendą i czyni wodę w wannie miękką." },
      { id: "bath9", polish: "Wycieraczka", german: "Badematte", difficulty: "medium", example: "Die Badematte verhindert, dass man auf dem nassen Boden ausrutscht.", exampleTranslation: "Wycieraczka zapobiega poślizgnięciu się na mokrej podłodze." },
      { id: "bath10", polish: "Czyścić", german: "Reinigen", difficulty: "medium", example: "Ich reinige das Badezimmer gründlich jeden Samstag mit Putzmitteln komplett.", exampleTranslation: "Czyszczę łazienkę dokładnie każdą sobotę środkami czyszczącymi całkowicie." },
      { id: "bath11", polish: "Papier toaletowy", german: "Toilettenpapier", difficulty: "medium", example: "Wir haben kein Toilettenpapier mehr, ich muss welches kaufen heute noch.", exampleTranslation: "Nie mamy już papieru toaletowego, muszę kupić jeszcze dzisiaj." },
      { id: "bath12", polish: "Suszarka do włosów", german: "Föhn", difficulty: "medium", example: "Ich trockne meine Haare mit dem Föhn nach dem Duschen jeden Morgen.", exampleTranslation: "Suszę włosy suszarką po prysznicu każdego ranka." },
      { id: "bath13", polish: "Kąpiel jest gotowa", german: "Das Bad ist fertig", difficulty: "hard", example: "Das Bad ist fertig! Das Wasser hat die perfekte Temperatur zum Entspannen!", exampleTranslation: "Kąpiel jest gotowa! Woda ma idealną temperaturę do relaksu!" },
      { id: "bath14", polish: "Woda jest za gorąca", german: "Das Wasser ist zu heiß", difficulty: "hard", example: "Das Wasser ist viel zu heiß! Lass bitte kaltes Wasser hinzulaufen!", exampleTranslation: "Woda jest za gorąca! Dolej proszę zimnej wody!" },
      { id: "bath15", polish: "Muszę wziąć prysznic", german: "Ich muss duschen", difficulty: "hard", example: "Ich muss schnell duschen vor der Arbeit, ich bin schon spät dran!", exampleTranslation: "Muszę szybko wziąć prysznic przed pracą, już się spóźniam!" }
    ]
  },

  shopping_clothes: {
    name: "Zakupy odzieżowe",
    description: "Kupowanie ubrań i akcesoriów",
    icon: Glasses,
    color: "from-fuchsia-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "shop1", polish: "Sklep odzieżowy", german: "Bekleidungsgeschäft", difficulty: "easy", example: "Das Bekleidungsgeschäft hat eine große Auswahl an moderner Kleidung für alle.", exampleTranslation: "Sklep odzieżowy ma duży wybór nowoczesnej odzieży dla wszystkich." },
      { id: "shop2", polish: "Przymierzalnia", german: "Umkleidekabine", difficulty: "easy", example: "Die Umkleidekabine ist dort hinten rechts neben der Kasse im Geschäft.", exampleTranslation: "Przymierzalnia jest tam z tyłu po prawej obok kasy w sklepie." },
      { id: "shop3", polish: "Rozmiar", german: "Größe", difficulty: "easy", example: "Welche Größe tragen Sie? Ich brauche diese Information für die Bestellung.", exampleTranslation: "Jaki rozmiar Pan nosi? Potrzebuję tej informacji do zamówienia." },
      { id: "shop4", polish: "Przymierzać", german: "Anprobieren", difficulty: "easy", example: "Kann ich diese Hose bitte anprobieren in der Umkleidekabine dort?", exampleTranslation: "Czy mogę proszę przymierzyć te spodnie w przymierzalni tam?" },
      { id: "shop5", polish: "Pasować", german: "Passen", difficulty: "easy", example: "Diese Jacke passt mir perfekt gut und sieht sehr elegant aus!", exampleTranslation: "Ta kurtka pasuje mi idealnie dobrze i wygląda bardzo elegancko!" },
      { id: "shop6", polish: "Za duży", german: "Zu groß", difficulty: "easy", example: "Dieser Pullover ist mir leider zu groß, haben Sie eine kleinere Größe?", exampleTranslation: "Ten sweter jest dla mnie niestety za duży, ma Pan mniejszy rozmiar?" },
      { id: "shop7", polish: "Za mały", german: "Zu klein", difficulty: "medium", example: "Diese Schuhe sind zu klein für mich, ich brauche Größe dreiundvierzig.", exampleTranslation: "Te buty są za małe dla mnie, potrzebuję rozmiaru czterdzieści trzy." },
      { id: "shop8", polish: "Modny", german: "Modisch", difficulty: "medium", example: "Dieses Kleid ist sehr modisch und modern für die Party perfekt!", exampleTranslation: "Ta sukienka jest bardzo modna i nowoczesna na imprezę idealnie!" },
      { id: "shop9", polish: "Styl", german: "Stil", difficulty: "medium", example: "Dieser Stil passt nicht zu mir, ich bevorzuge etwas Klassischeres bitte.", exampleTranslation: "Ten styl nie pasuje do mnie, wolę coś bardziej klasycznego proszę." },
      { id: "shop10", polish: "Kolekcja", german: "Kollektion", difficulty: "medium", example: "Die neue Frühjahrskollektion ist sehr farbenfroh und elegant für Damen.", exampleTranslation: "Nowa kolekcja wiosenna jest bardzo kolorowa i elegancka dla pań." },
      { id: "shop11", polish: "Marka", german: "Marke", difficulty: "medium", example: "Diese Marke ist bekannt für hohe Qualität und gutes Design weltweit.", exampleTranslation: "Ta marka jest znana z wysokiej jakości i dobrego designu na świecie." },
      { id: "shop12", polish: "Wyprzedaż", german: "Schlussverkauf", difficulty: "medium", example: "Der Schlussverkauf beginnt nächste Woche mit Rabatten bis zu siebzig Prozent!", exampleTranslation: "Wyprzedaż zaczyna się w przyszłym tygodniu ze zniżkami do siedemdziesięciu procent!" },
      { id: "shop13", polish: "To mi pasuje?", german: "Steht mir das?", difficulty: "hard", example: "Steht mir diese Farbe wirklich? Ich bin mir nicht sicher darüber!", exampleTranslation: "Pasuje mi ten kolor naprawdę? Nie jestem pewien tego!" },
      { id: "shop14", polish: "Szukam czegoś eleganckiego", german: "Ich suche etwas Elegantes", difficulty: "hard", example: "Ich suche etwas Elegantes für eine Hochzeit nächsten Monat im Juli!", exampleTranslation: "Szukam czegoś eleganckiego na wesele w przyszłym miesiącu w lipcu!" },
      { id: "shop15", polish: "Czy macie mniejszy rozmiar?", german: "Haben Sie eine kleinere Größe?", difficulty: "hard", example: "Haben Sie diese Bluse auch in einer kleineren Größe? Diese ist zu groß!", exampleTranslation: "Czy macie tę bluzkę też w mniejszym rozmiarze? Ta jest za duża!" }
    ]
  },

  conversation_phrases: {
    name: "Zwroty konwersacyjne",
    description: "Przydatne wyrażenia w rozmowie",
    icon: MessageSquare,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "phrase1", polish: "Oczywiście", german: "Natürlich", difficulty: "easy", example: "Natürlich helfe ich dir gerne! Du musst nur fragen jederzeit!", exampleTranslation: "Oczywiście chętnie ci pomogę! Musisz tylko zapytać w każdej chwili!" },
      { id: "phrase2", polish: "Dokładnie", german: "Genau", difficulty: "easy", example: "Genau! Das ist genau das, was ich gemeint habe vorher!", exampleTranslation: "Dokładnie! To jest dokładnie to, co miałem na myśli wcześniej!" },
      { id: "phrase3", polish: "Naprawdę", german: "Wirklich", difficulty: "easy", example: "Das ist wirklich interessant! Erzähl mir bitte mehr darüber ausführlich!", exampleTranslation: "To naprawdę ciekawe! Opowiedz mi proszę więcej o tym szczegółowo!" },
      { id: "phrase4", polish: "Może być", german: "Kann sein", difficulty: "easy", example: "Kann sein, dass du recht hast in dieser Angelegenheit hier.", exampleTranslation: "Może być, że masz rację w tej sprawie tutaj." },
      { id: "phrase5", polish: "Z pewnością", german: "Sicherlich", difficulty: "easy", example: "Sicherlich wird alles gut gehen, mach dir keine Sorgen darüber!", exampleTranslation: "Z pewnością wszystko będzie dobrze, nie martw się o to!" },
      { id: "phrase6", polish: "W porządku", german: "In Ordnung", difficulty: "easy", example: "Alles ist in Ordnung! Keine Sorge, es gibt kein Problem hier!", exampleTranslation: "Wszystko w porządku! Nie martw się, nie ma problemu tutaj!" },
      { id: "phrase7", polish: "Masz rację", german: "Du hast recht", difficulty: "medium", example: "Du hast vollkommen recht in diesem Punkt! Ich stimme dir zu!", exampleTranslation: "Masz całkowitą rację w tym punkcie! Zgadzam się z tobą!" },
      { id: "phrase8", polish: "Nie jestem pewien", german: "Ich bin mir nicht sicher", difficulty: "medium", example: "Ich bin mir nicht sicher über diese Entscheidung, ich muss nachdenken.", exampleTranslation: "Nie jestem pewien tej decyzji, muszę pomyśleć." },
      { id: "phrase9", polish: "Co masz na myśli?", german: "Was meinst du?", difficulty: "medium", example: "Was meinst du genau damit? Kannst du das bitte erklären ausführlicher?", exampleTranslation: "Co dokładnie masz na myśli? Możesz to wyjaśnić bardziej szczegółowo?" },
      { id: "phrase10", polish: "Innymi słowy", german: "Mit anderen Worten", difficulty: "medium", example: "Mit anderen Worten, wir müssen das Projekt bis Freitag fertig haben!", exampleTranslation: "Innymi słowy, musimy skończyć projekt do piątku!" },
      { id: "phrase11", polish: "Na przykład", german: "Zum Beispiel", difficulty: "medium", example: "Es gibt viele Möglichkeiten, zum Beispiel können wir mit dem Zug fahren.", exampleTranslation: "Jest wiele możliwości, na przykład możemy jechać pociągiem." },
      { id: "phrase12", polish: "W każdym razie", german: "Auf jeden Fall", difficulty: "medium", example: "Auf jeden Fall komme ich zur Party, ich freue mich schon darauf!", exampleTranslation: "W każdym razie przyjdę na imprezę, już się cieszę!" },
      { id: "phrase13", polish: "Co sądzisz o tym?", german: "Was denkst du darüber?", difficulty: "hard", example: "Was denkst du über diese Idee? Ich würde gerne deine Meinung hören!", exampleTranslation: "Co sądzisz o tym pomyśle? Chciałbym usłyszeć twoją opinię!" },
      { id: "phrase14", polish: "Nie rozumiem", german: "Ich verstehe nicht", difficulty: "hard", example: "Ich verstehe nicht ganz, was du meinst. Kannst du es anders erklären?", exampleTranslation: "Nie do końca rozumiem, co masz na myśli. Możesz to inaczej wyjaśnić?" },
      { id: "phrase15", polish: "Zgadzam się całkowicie", german: "Ich stimme völlig zu", difficulty: "hard", example: "Ich stimme dir völlig zu! Das ist eine ausgezeichnete Idee wirklich!", exampleTranslation: "Zgadzam się z tobą całkowicie! To naprawdę doskonały pomysł!" }
    ]
  },

  vegetables_market: {
    name: "Warzywa i targ",
    description: "Warzywa, owoce i zakupy na targu",
    icon: Cake,
    color: "from-green-500 to-lime-600",
    level: "beginner",
    words: [
      { id: "veg1", polish: "Warzywa", german: "Gemüse", difficulty: "easy", example: "Frisches Gemüse ist sehr gesund und wichtig für ausgewogene Ernährung täglich.", exampleTranslation: "Świeże warzywa są bardzo zdrowe i ważne dla zbilansowanej diety codziennie." },
      { id: "veg2", polish: "Pomidor", german: "Tomate", difficulty: "easy", example: "Die Tomaten sind reif und rot, perfekt für einen frischen Salat.", exampleTranslation: "Pomidory są dojrzałe i czerwone, idealne na świeżą sałatkę." },
      { id: "veg3", polish: "Ogórek", german: "Gurke", difficulty: "easy", example: "Ich schneide die Gurke in dünne Scheiben für das Sandwich sorgfältig.", exampleTranslation: "Kroję ogórka w cienkie plasterki na kanapkę starannie." },
      { id: "veg4", polish: "Marchewka", german: "Karotte", difficulty: "easy", example: "Karotten sind gut für die Augen und enthalten viele Vitamine gesund.", exampleTranslation: "Marchewki są dobre dla oczu i zawierają wiele witamin zdrowo." },
      { id: "veg5", polish: "Cebula", german: "Zwiebel", difficulty: "easy", example: "Beim Schneiden der Zwiebel tränen mir immer die Augen sehr stark.", exampleTranslation: "Przy krojeniu cebuli zawsze łzawią mi oczy bardzo mocno." },
      { id: "veg6", polish: "Czosnek", german: "Knoblauch", difficulty: "easy", example: "Knoblauch ist gesund und gibt den Speisen einen würzigen Geschmack intensiv.", exampleTranslation: "Czosnek jest zdrowy i nadaje potrawom pikantny smak intensywny." },
      { id: "veg7", polish: "Sałata", german: "Salat", difficulty: "medium", example: "Der grüne Salat ist frisch vom Markt und sehr knackig zum Essen.", exampleTranslation: "Zielona sałata jest świeża z targu i bardzo chrupiąca do jedzenia." },
      { id: "veg8", polish: "Papryka", german: "Paprika", difficulty: "medium", example: "Rote Paprika ist süßer als grüne und schmeckt roh sehr lecker.", exampleTranslation: "Czerwona papryka jest słodsza niż zielona i smakuje na surowo bardzo pysznie." },
      { id: "veg9", polish: "Brokuły", german: "Brokkoli", difficulty: "medium", example: "Brokkoli ist sehr gesund und enthält viele wichtige Nährstoffe für Körper.", exampleTranslation: "Brokuły są bardzo zdrowe i zawierają wiele ważnych składników odżywczych dla ciała." },
      { id: "veg10", polish: "Kalafior", german: "Blumenkohl", difficulty: "medium", example: "Blumenkohl kann man kochen, braten oder roh essen als Salat.", exampleTranslation: "Kalafior można gotować, smażyć lub jeść surowy jako sałatkę." },
      { id: "veg11", polish: "Targ", german: "Markt", difficulty: "medium", example: "Jeden Samstag gehe ich auf den Markt, um frisches Gemüse zu kaufen.", exampleTranslation: "Każdą sobotę chodzę na targ, aby kupić świeże warzywa." },
      { id: "veg12", polish: "Sprzedawca", german: "Verkäufer", difficulty: "medium", example: "Der Verkäufer auf dem Markt ist sehr freundlich und hilfsbereit immer.", exampleTranslation: "Sprzedawca na targu jest bardzo przyjazny i pomocny zawsze." },
      { id: "veg13", polish: "Ile kosztuje kilo?", german: "Was kostet ein Kilo?", difficulty: "hard", example: "Was kostet ein Kilo Tomaten heute? Sind sie frisch vom Feld?", exampleTranslation: "Ile kosztuje kilo pomidorów dzisiaj? Są świeże z pola?" },
      { id: "veg14", polish: "Poproszę dwa kilo", german: "Zwei Kilo bitte", difficulty: "hard", example: "Zwei Kilo Kartoffeln bitte und ein Kilo Zwiebeln für Suppe!", exampleTranslation: "Poproszę dwa kilo ziemniaków i kilo cebuli na zupę!" },
      { id: "veg15", polish: "Czy to świeże?", german: "Ist das frisch?", difficulty: "hard", example: "Ist dieses Gemüse frisch? Wann wurde es geerntet vom Feld genau?", exampleTranslation: "Czy te warzywa są świeże? Kiedy zostały zebrane z pola dokładnie?" }
    ]
  },

  opinions_preferences: {
    name: "Opinie i preferencje",
    description: "Wyrażanie gustów i preferencji",
    icon: Star,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { id: "opin1", polish: "Lubić", german: "Mögen", difficulty: "easy", example: "Ich mag klassische Musik sehr und höre sie jeden Abend gerne.", exampleTranslation: "Lubię bardzo muzykę klasyczną i słucham jej każdego wieczoru chętnie." },
      { id: "opin2", polish: "Kochać", german: "Lieben", difficulty: "easy", example: "Ich liebe meine Familie über alles auf der ganzen Welt sehr!", exampleTranslation: "Kocham moją rodzinę najbardziej na całym świecie bardzo!" },
      { id: "opin3", polish: "Nienawidzić", german: "Hassen", difficulty: "easy", example: "Ich hasse kaltes Wetter im Winter und friere immer sehr stark.", exampleTranslation: "Nienawidzę zimnej pogody zimą i zawsze bardzo marznę." },
      { id: "opin4", polish: "Wolę", german: "Ich bevorzuge", difficulty: "easy", example: "Ich bevorzuge Tee statt Kaffee, besonders grünen Tee am Morgen.", exampleTranslation: "Wolę herbatę zamiast kawy, szczególnie zieloną herbatę rano." },
      { id: "opin5", polish: "Ulubiony", german: "Lieblings-", difficulty: "easy", example: "Mein Lieblingsessen ist Pizza mit viel Käse und frischem Gemüse.", exampleTranslation: "Moim ulubionym jedzeniem jest pizza z dużą ilością sera i świeżych warzyw." },
      { id: "opin6", polish: "Interesujący", german: "Interessant", difficulty: "easy", example: "Das Buch ist sehr interessant und ich kann es nicht weglegen!", exampleTranslation: "Książka jest bardzo ciekawa i nie mogę jej odłożyć!" },
      { id: "opin7", polish: "Nudny", german: "Langweilig", difficulty: "medium", example: "Der Film war sehr langweilig und ich bin eingeschlafen im Kino.", exampleTranslation: "Film był bardzo nudny i zasnąłem w kinie." },
      { id: "opin8", polish: "Ekscytujący", german: "Aufregend", difficulty: "medium", example: "Die Reise war sehr aufregend mit vielen unvergesslichen Erlebnissen zusammen!", exampleTranslation: "Podróż była bardzo ekscytująca z wieloma niezapomnianymi przeżyciami razem!" },
      { id: "opin9", polish: "Dziwny", german: "Seltsam", difficulty: "medium", example: "Das ist sehr seltsam! So etwas habe ich noch nie gesehen vorher!", exampleTranslation: "To bardzo dziwne! Czegoś takiego jeszcze nie widziałem wcześniej!" },
      { id: "opin10", polish: "Wspaniały", german: "Wunderbar", difficulty: "medium", example: "Das Konzert war wunderbar! Die Musik war einfach fantastisch schön!", exampleTranslation: "Koncert był wspaniały! Muzyka była po prostu fantastycznie piękna!" },
      { id: "opin11", polish: "Okropny", german: "Schrecklich", difficulty: "medium", example: "Das Wetter ist schrecklich heute mit starkem Regen und kaltem Wind!", exampleTranslation: "Pogoda jest okropna dzisiaj z silnym deszczem i zimnym wiatrem!" },
      { id: "opin12", polish: "Idealny", german: "Perfekt", difficulty: "medium", example: "Dieser Tag ist perfekt für einen Ausflug ins Grüne draußen!", exampleTranslation: "Ten dzień jest idealny na wycieczkę na łono natury!" },
      { id: "opin13", polish: "Co o tym myślisz?", german: "Was hältst du davon?", difficulty: "hard", example: "Was hältst du von dieser Idee? Ich würde gerne deine ehrliche Meinung hören!", exampleTranslation: "Co o tym myślisz? Chcę usłyszeć twoją szczerą opinię!" },
      { id: "opin14", polish: "To mi się podoba", german: "Das gefällt mir", difficulty: "hard", example: "Das gefällt mir sehr gut! Wo hast du das gefunden oder gekauft?", exampleTranslation: "To mi się bardzo podoba! Gdzie to znalazłeś lub kupiłeś?" },
      { id: "opin15", polish: "Nie mogę się zdecydować", german: "Ich kann mich nicht entscheiden", difficulty: "hard", example: "Ich kann mich nicht entscheiden zwischen diesen zwei Optionen! Hilf mir bitte!", exampleTranslation: "Nie mogę się zdecydować między tymi dwiema opcjami! Pomóż mi proszę!" }
    ]
  },

  action_verbs: {
    name: "Czasowniki czynności",
    description: "Podstawowe czasowniki akcji",
    icon: Footprints,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "verb1", polish: "Robić", german: "Machen", difficulty: "easy", example: "Was machst du gerade jetzt? Hast du Zeit für mich kurz?", exampleTranslation: "Co robisz właśnie teraz? Masz czas dla mnie krótko?" },
      { id: "verb2", polish: "Dawać", german: "Geben", difficulty: "easy", example: "Kannst du mir bitte das Salz geben? Es steht zu weit weg.", exampleTranslation: "Możesz mi proszę podać sól? Stoi za daleko." },
      { id: "verb3", polish: "Brać", german: "Nehmen", difficulty: "easy", example: "Nimm bitte einen Regenschirm mit, es wird heute regnen bestimmt!", exampleTranslation: "Weź proszę parasol ze sobą, będzie dzisiaj padać na pewno!" },
      { id: "verb4", polish: "Kłaść", german: "Legen", difficulty: "easy", example: "Leg bitte die Bücher auf den Tisch dort drüben ordentlich.", exampleTranslation: "Połóż proszę książki na stół tam porządnie." },
      { id: "verb5", polish: "Stawiać", german: "Stellen", difficulty: "easy", example: "Stell die Vase vorsichtig auf den Tisch, sie ist sehr zerbrechlich!", exampleTranslation: "Postaw wazon ostrożnie na stół, jest bardzo kruchy!" },
      { id: "verb6", polish: "Otwierać", german: "Öffnen", difficulty: "easy", example: "Öffne bitte das Fenster, es ist sehr stickig im Zimmer hier.", exampleTranslation: "Otwórz proszę okno, jest bardzo duszno w pokoju tutaj." },
      { id: "verb7", polish: "Zamykać", german: "Schließen", difficulty: "medium", example: "Vergiss nicht die Tür zu schließen, wenn du gehst nach draußen!", exampleTranslation: "Nie zapomnij zamknąć drzwi, gdy wychodzisz na zewnątrz!" },
      { id: "verb8", polish: "Przynosić", german: "Bringen", difficulty: "medium", example: "Bring mir bitte ein Glas Wasser aus der Küche mit!", exampleTranslation: "Przynieś mi proszę szklankę wody z kuchni!" },
      { id: "verb9", polish: "Zabierać", german: "Mitnehmen", difficulty: "medium", example: "Nimm warme Kleidung mit auf die Reise in die Berge!", exampleTranslation: "Zabierz ciepłe ubrania na podróż w góry!" },
      { id: "verb10", polish: "Trzymać", german: "Halten", difficulty: "medium", example: "Halt bitte meine Tasche, während ich den Schlüssel suche schnell.", exampleTranslation: "Potrzymaj proszę moją torbę, gdy szukam klucza szybko." },
      { id: "verb11", polish: "Ciągnąć", german: "Ziehen", difficulty: "medium", example: "Zieh die Tür nicht drücken! Steht doch auf dem Schild!", exampleTranslation: "Ciągnij drzwi nie pchaj! Jest przecież na znaku!" },
      { id: "verb12", polish: "Pchać", german: "Drücken", difficulty: "medium", example: "Drücke den Knopf, um die Tür zu öffnen automatisch.", exampleTranslation: "Naciśnij przycisk, aby otworzyć drzwi automatycznie." },
      { id: "verb13", polish: "Co robisz?", german: "Was machst du?", difficulty: "hard", example: "Was machst du am Wochenende? Hast du schon Pläne oder Zeit?", exampleTranslation: "Co robisz w weekend? Masz już plany czy czas?" },
      { id: "verb14", polish: "Pomóż mi to nieść", german: "Hilf mir das zu tragen", difficulty: "hard", example: "Hilf mir bitte das zu tragen! Es ist zu schwer für mich allein!", exampleTranslation: "Pomóż mi proszę to nieść! Jest za ciężkie dla mnie samego!" },
      { id: "verb15", polish: "Gdzie to położyć?", german: "Wo soll ich das hinlegen?", difficulty: "hard", example: "Wo soll ich dieses Paket hinlegen? Es ist sehr groß und schwer!", exampleTranslation: "Gdzie mam to położyć? Jest bardzo duże i ciężkie!" }
    ]
  },

  cafe_drinks: {
    name: "Kawiarnia i napoje",
    description: "Napoje, kawiarnie i zamówienia",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { id: "cafe1", polish: "Kawiarnia", german: "Café", difficulty: "easy", example: "Das Café ist gemütlich und perfekt zum Arbeiten oder Lesen in Ruhe.", exampleTranslation: "Kawiarnia jest przytulna i idealna do pracy lub czytania w spokoju." },
      { id: "cafe2", polish: "Kawa", german: "Kaffee", difficulty: "easy", example: "Ich trinke jeden Morgen zwei Tassen starken schwarzen Kaffee sofort.", exampleTranslation: "Piję każdego ranka dwie filiżanki mocnej czarnej kawy natychmiast." },
      { id: "cafe3", polish: "Espresso", german: "Espresso", difficulty: "easy", example: "Ein Espresso nach dem Mittagessen gibt mir Energie für Nachmittag.", exampleTranslation: "Espresso po obiedzie daje mi energię na popołudnie." },
      { id: "cafe4", polish: "Cappuccino", german: "Cappuccino", difficulty: "easy", example: "Ich bestelle einen Cappuccino mit extra Milchschaum oben drauf bitte.", exampleTranslation: "Zamawiam cappuccino z dodatkową pianką mleczną na wierzchu proszę." },
      { id: "cafe5", polish: "Herbata", german: "Tee", difficulty: "easy", example: "Eine Tasse heißen Tee mit Zitrone und Honig ist perfekt bei Erkältung.", exampleTranslation: "Filiżanka gorącej herbaty z cytryną i miodem jest idealna przy przeziębieniu." },
      { id: "cafe6", polish: "Sok", german: "Saft", difficulty: "easy", example: "Frisch gepresster Orangensaft ist gesund und voller Vitamine für Körper.", exampleTranslation: "Świeżo wyciskany sok pomarańczowy jest zdrowy i pełen witamin dla ciała." },
      { id: "cafe7", polish: "Mleko", german: "Milch", difficulty: "medium", example: "Möchten Sie Milch in Ihren Kaffee? Wir haben auch pflanzliche Alternativen.", exampleTranslation: "Czy chce Pan mleko do kawy? Mamy też roślinne alternatywy." },
      { id: "cafe8", polish: "Śmietanka", german: "Sahne", difficulty: "medium", example: "Geben Sie bitte etwas Sahne in meinen Kaffee für cremigen Geschmack!", exampleTranslation: "Dodaj proszę trochę śmietanki do mojej kawy dla kremowego smaku!" },
      { id: "cafe9", polish: "Cukier", german: "Zucker", difficulty: "medium", example: "Ich nehme meinen Kaffee ohne Zucker, nur schwarz und stark.", exampleTranslation: "Biorę moją kawę bez cukru, tylko czarną i mocną." },
      { id: "cafe10", polish: "Lód", german: "Eis", difficulty: "medium", example: "Im Sommer trinke ich gerne Eiskaffee mit viel Eis und Sahne.", exampleTranslation: "Latem lubię pić zimną kawę z dużą ilością lodu i śmietanki." },
      { id: "cafe11", polish: "Gorący", german: "Heiß", difficulty: "medium", example: "Vorsicht! Der Kaffee ist sehr heiß, lass ihn kurz abkühlen erst!", exampleTranslation: "Ostrożnie! Kawa jest bardzo gorąca, pozwól jej najpierw ostygnąć!" },
      { id: "cafe12", polish: "Zimny", german: "Kalt", difficulty: "medium", example: "An heißen Tagen trinke ich lieber kalte Getränke zur Erfrischung sofort.", exampleTranslation: "W gorące dni wolę pić zimne napoje do orzeźwienia natychmiast." },
      { id: "cafe13", polish: "Poproszę latte", german: "Einen Latte bitte", difficulty: "hard", example: "Einen großen Latte Macchiato bitte mit Mandelmilch statt normaler Milch!", exampleTranslation: "Poproszę dużą latte macchiato z mlekiem migdałowym zamiast zwykłego mleka!" },
      { id: "cafe14", polish: "Na wynos czy na miejscu?", german: "Zum Mitnehmen oder hier?", difficulty: "hard", example: "Zum Mitnehmen oder trinken Sie hier im Café? Wir haben schöne Plätze draußen!", exampleTranslation: "Na wynos czy pije Pan tutaj w kawiarni? Mamy ładne miejsca na zewnątrz!" },
      { id: "cafe15", polish: "Bez kofeiny proszę", german: "Ohne Koffein bitte", difficulty: "hard", example: "Haben Sie entkoffeinierten Kaffee? Ich trinke abends keinen Koffein mehr!", exampleTranslation: "Czy macie kawę bezkofeinową? Wieczorami nie piję już kofeiny!" }
    ]
  }
};
