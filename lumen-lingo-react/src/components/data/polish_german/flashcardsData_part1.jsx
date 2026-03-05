
/**
 * POLISH → GERMAN FLASHCARDS - PART 1
 * 
 * Native Language: Polish (Polski)
 * Target Language: German (Deutsch)
 * 
 * This file contains the original flashcard categories (1-20).
 * Each category has 15 words: 6 easy, 6 medium, 3 hard
 */

import {
  Home,
  Users,
  Utensils,
  Coffee,
  MapPin,
  Heart,
  Briefcase,
  GraduationCap,
  Plane,
  ShoppingCart,
  Sun,
  Cloud,
  Clock,
  Calendar,
  Bike,
  TreePine,
  Building,
  Shirt,
  Apple,
  Music
} from "lucide-react";

export const flashcardsCategories_part1 = {
  greetings_basics: {
    name: "Powitania i podstawy",
    description: "Podstawowe zwroty i codzienne powitania",
    icon: Home,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { id: "pg1", polish: "Cześć", german: "Hallo", difficulty: "easy", example: "Hallo, wie geht es dir heute?", exampleTranslation: "Cześć, jak się dzisiaj masz?" },
      { id: "pg2", polish: "Dzień dobry", german: "Guten Tag", difficulty: "easy", example: "Guten Tag, schön Sie kennenzulernen!", exampleTranslation: "Dzień dobry, miło Pana poznać!" },
      { id: "pg3", polish: "Do widzenia", german: "Auf Wiedersehen", difficulty: "easy", example: "Auf Wiedersehen und bis bald!", exampleTranslation: "Do widzenia i do zobaczenia wkrótce!" },
      { id: "pg4", polish: "Tak", german: "Ja", difficulty: "easy", example: "Ja, das ist richtig und korrekt.", exampleTranslation: "Tak, to jest prawidłowe i poprawne." },
      { id: "pg5", polish: "Nie", german: "Nein", difficulty: "easy", example: "Nein, das möchte ich nicht machen.", exampleTranslation: "Nie, nie chcę tego robić." },
      { id: "pg6", polish: "Proszę", german: "Bitte", difficulty: "easy", example: "Können Sie mir bitte helfen?", exampleTranslation: "Czy może mi Pan proszę pomóc?" },
      { id: "pg7", polish: "Dziękuję", german: "Danke", difficulty: "medium", example: "Vielen Dank für Ihre Hilfe heute!", exampleTranslation: "Bardzo dziękuję za Pana pomoc dzisiaj!" },
      { id: "pg8", polish: "Przepraszam", german: "Entschuldigung", difficulty: "medium", example: "Entschuldigung, können Sie das bitte wiederholen?", exampleTranslation: "Przepraszam, czy może Pan to powtórzyć?" },
      { id: "pg9", polish: "Jak się masz?", german: "Wie geht es dir?", difficulty: "medium", example: "Hallo! Wie geht es dir an diesem schönen Tag?", exampleTranslation: "Cześć! Jak się masz w ten piękny dzień?" },
      { id: "pg10", polish: "Dobrze", german: "Gut", difficulty: "medium", example: "Mir geht es sehr gut, danke der Nachfrage!", exampleTranslation: "Mam się bardzo dobrze, dziękuję za zapytanie!" },
      { id: "pg11", polish: "Miło cię poznać", german: "Schön dich kennenzulernen", difficulty: "medium", example: "Schön dich kennenzulernen, ich habe viel über dich gehört!", exampleTranslation: "Miło cię poznać, dużo o tobie słyszałem!" },
      { id: "pg12", polish: "Do zobaczenia", german: "Bis bald", difficulty: "medium", example: "Bis bald! Wir sehen uns morgen wieder.", exampleTranslation: "Do zobaczenia! Zobaczymy się jutro znowu." },
      { id: "pg13", polish: "Jak się nazywasz?", german: "Wie heißt du?", difficulty: "hard", example: "Wie heißt du? Ich bin Anna, freut mich sehr!", exampleTranslation: "Jak się nazywasz? Jestem Anna, bardzo mi miło!" },
      { id: "pg14", polish: "Nie rozumiem", german: "Ich verstehe nicht", difficulty: "hard", example: "Entschuldigung, ich verstehe nicht. Können Sie langsamer sprechen?", exampleTranslation: "Przepraszam, nie rozumiem. Czy może Pan mówić wolniej?" },
      { id: "pg15", polish: "Mówisz po angielsku?", german: "Sprichst du Englisch?", difficulty: "hard", example: "Sprichst du Englisch? Mein Deutsch ist noch nicht so gut.", exampleTranslation: "Mówisz po angielsku? Mój niemiecki jeszcze nie jest taki dobry." }
    ]
  },

  family_relationships: {
    name: "Rodzina i relacje",
    description: "Członkowie rodziny i bliskie osoby",
    icon: Users,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { id: "fam1", polish: "Rodzina", german: "Familie", difficulty: "easy", example: "Meine Familie ist sehr groß und wir treffen uns oft zusammen.", exampleTranslation: "Moja rodzina jest bardzo duża i spotykamy się często razem." },
      { id: "fam2", polish: "Mama", german: "Mutter", difficulty: "easy", example: "Meine Mutter kocht jeden Tag leckeres Essen für uns alle.", exampleTranslation: "Moja mama gotuje każdego dnia pyszne jedzenie dla nas wszystkich." },
      { id: "fam3", polish: "Tata", german: "Vater", difficulty: "easy", example: "Mein Vater arbeitet als Ingenieur in einer großen Firma.", exampleTranslation: "Mój tata pracuje jako inżynier w dużej firmie." },
      { id: "fam4", polish: "Brat", german: "Bruder", difficulty: "easy", example: "Ich habe einen jüngeren Bruder, der noch zur Schule geht.", exampleTranslation: "Mam młodszego brata, który jeszcze chodzi do szkoły." },
      { id: "fam5", polish: "Siostra", german: "Schwester", difficulty: "easy", example: "Meine ältere Schwester studiert Medizin an der Universität.", exampleTranslation: "Moja starsza siostra studiuje medycynę na uniwersytecie." },
      { id: "fam6", polish: "Dziecko", german: "Kind", difficulty: "easy", example: "Unser Kind ist drei Jahre alt und sehr neugierig.", exampleTranslation: "Nasze dziecko ma trzy lata i jest bardzo ciekawe." },
      { id: "fam7", polish: "Babcia", german: "Großmutter", difficulty: "medium", example: "Meine Großmutter erzählt uns immer interessante Geschichten aus ihrer Jugend.", exampleTranslation: "Moja babcia zawsze opowiada nam ciekawe historie ze swojej młodości." },
      { id: "fam8", polish: "Dziadek", german: "Großvater", difficulty: "medium", example: "Mein Großvater geht jeden Morgen im Park spazieren für seine Gesundheit.", exampleTranslation: "Mój dziadek spaceruje każdego ranka w parku dla swojego zdrowia." },
      { id: "fam9", polish: "Mąż", german: "Ehemann", difficulty: "medium", example: "Mein Ehemann arbeitet als Lehrer in einer Grundschule in der Stadt.", exampleTranslation: "Mój mąż pracuje jako nauczyciel w szkole podstawowej w mieście." },
      { id: "fam10", polish: "Żona", german: "Ehefrau", difficulty: "medium", example: "Seine Ehefrau ist Ärztin und arbeitet im Krankenhaus jeden Tag.", exampleTranslation: "Jego żona jest lekarką i pracuje w szpitalu każdego dnia." },
      { id: "fam11", polish: "Rodzice", german: "Eltern", difficulty: "medium", example: "Meine Eltern wohnen auf dem Land in einem schönen kleinen Haus.", exampleTranslation: "Moi rodzice mieszkają na wsi w pięknym małym domu." },
      { id: "fam12", polish: "Krewny", german: "Verwandter", difficulty: "medium", example: "Wir besuchen unsere Verwandten jedes Jahr zu Weihnachten regelmäßig.", exampleTranslation: "Odwiedzamy naszych krewnych każdego roku na Boże Narodzenie regularnie." },
      { id: "fam13", polish: "Mam dwoje dzieci", german: "Ich habe zwei Kinder", difficulty: "hard", example: "Ich habe zwei wunderbare Kinder, einen Jungen und ein Mädchen.", exampleTranslation: "Mam dwoje wspaniałych dzieci, chłopca i dziewczynkę." },
      { id: "fam14", polish: "Jak się nazywa twoja mama?", german: "Wie heißt deine Mutter?", difficulty: "hard", example: "Wie heißt deine Mutter? Ich möchte sie gerne kennenlernen!", exampleTranslation: "Jak się nazywa twoja mama? Chciałbym ją poznać!" },
      { id: "fam15", polish: "Mieszkam z rodziną", german: "Ich wohne mit meiner Familie", difficulty: "hard", example: "Ich wohne mit meiner Familie in einem großen Haus am Stadtrand.", exampleTranslation: "Mieszkam z rodziną w dużym domu na obrzeżach miasta." }
    ]
  },

  food_drink: {
    name: "Jedzenie i picie",
    description: "Posiłki, napoje i artykuły spożywcze",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { id: "food1", polish: "Woda", german: "Wasser", difficulty: "easy", example: "Ich trinke jeden Tag mindestens zwei Liter frisches Wasser.", exampleTranslation: "Piję każdego dnia przynajmniej dwa litry świeżej wody." },
      { id: "food2", polish: "Chleb", german: "Brot", difficulty: "easy", example: "Deutsches Brot ist weltberühmt und schmeckt wirklich ausgezeichnet.", exampleTranslation: "Niemiecki chleb jest światowej sławy i smakuje naprawdę wyśmienicie." },
      { id: "food3", polish: "Mleko", german: "Milch", difficulty: "easy", example: "Ich kaufe frische Milch vom Bauernhof für meine Familie.", exampleTranslation: "Kupuję świeże mleko z gospodarstwa dla mojej rodziny." },
      { id: "food4", polish: "Jajko", german: "Ei", difficulty: "easy", example: "Zum Frühstück esse ich gerne Eier mit Toast und Butter.", exampleTranslation: "Na śniadanie lubię jeść jajka z tostami i masłem." },
      { id: "food5", polish: "Ser", german: "Käse", difficulty: "easy", example: "Deutscher Käse ist sehr lecker und es gibt viele verschiedene Sorten.", exampleTranslation: "Niemiecki ser jest bardzo smaczny i jest wiele różnych gatunków." },
      { id: "food6", polish: "Jabłko", german: "Apfel", difficulty: "easy", example: "Ich esse jeden Tag einen frischen roten Apfel für meine Gesundheit.", exampleTranslation: "Jem każdego dnia świeże czerwone jabłko dla mojego zdrowia." },
      { id: "food7", polish: "Kawa", german: "Kaffee", difficulty: "medium", example: "Morgens trinke ich immer eine große Tasse starken schwarzen Kaffee.", exampleTranslation: "Rano zawsze piję dużą filiżankę mocnej czarnej kawy." },
      { id: "food8", polish: "Herbata", german: "Tee", difficulty: "medium", example: "Ich trinke gerne heißen Tee mit Honig am kalten Winterabend.", exampleTranslation: "Lubię pić gorącą herbatę z miodem w zimowy wieczór." },
      { id: "food9", polish: "Kurczak", german: "Hähnchen", difficulty: "medium", example: "Heute Abend bereite ich gegrilltes Hähnchen mit Gemüse für das Abendessen zu.", exampleTranslation: "Dziś wieczorem przygotuję grillowanego kurczaka z warzywami na kolację." },
      { id: "food10", polish: "Ziemniaki", german: "Kartoffeln", difficulty: "medium", example: "Kartoffeln sind in Deutschland sehr beliebt und werden oft gegessen.", exampleTranslation: "Ziemniaki są w Niemczech bardzo popularne i często są jedzone." },
      { id: "food11", polish: "Kolacja", german: "Abendessen", difficulty: "medium", example: "Das Abendessen ist fertig, bitte kommt alle zum Tisch!", exampleTranslation: "Kolacja jest gotowa, proszę przyjdźcie wszyscy do stołu!" },
      { id: "food12", polish: "Śniadanie", german: "Frühstück", difficulty: "medium", example: "Ein deutsches Frühstück besteht oft aus Brot, Wurst und Käse.", exampleTranslation: "Niemieckie śniadanie często składa się z chleba, kiełbasy i sera." },
      { id: "food13", polish: "Jestem głodny", german: "Ich habe Hunger", difficulty: "hard", example: "Ich habe großen Hunger, lass uns bald etwas zu essen finden!", exampleTranslation: "Jestem bardzo głodny, znajdźmy wkrótce coś do jedzenia!" },
      { id: "food14", polish: "Smacznego!", german: "Guten Appetit!", difficulty: "hard", example: "Guten Appetit! Ich hoffe, das Essen schmeckt euch allen sehr gut!", exampleTranslation: "Smacznego! Mam nadzieję, że jedzenie smakuje wam wszystkim bardzo!" },
      { id: "food15", polish: "To jest pyszne", german: "Das ist lecker", difficulty: "hard", example: "Das ist wirklich lecker! Kannst du mir bitte das Rezept geben?", exampleTranslation: "To jest naprawdę pyszne! Czy możesz mi proszę dać przepis?" }
    ]
  },

  everyday_activities: {
    name: "Codzienne czynności",
    description: "Rutynowe aktywności i codzienne zadania",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { id: "act1", polish: "Pracować", german: "Arbeiten", difficulty: "easy", example: "Ich arbeite jeden Tag von acht Uhr morgens bis fünf Uhr abends.", exampleTranslation: "Pracuję każdego dnia od ósmej rano do piątej wieczorem." },
      { id: "act2", polish: "Spać", german: "Schlafen", difficulty: "easy", example: "Ich schlafe normalerweise acht Stunden jede Nacht für gute Gesundheit.", exampleTranslation: "Śpię normalnie osiem godzin każdej nocy dla dobrego zdrowia." },
      { id: "act3", polish: "Jeść", german: "Essen", difficulty: "easy", example: "Wir essen immer zusammen als Familie am großen Tisch.", exampleTranslation: "Zawsze jemy razem jako rodzina przy dużym stole." },
      { id: "act4", polish: "Pić", german: "Trinken", difficulty: "easy", example: "Ich trinke viel Wasser während des ganzen Tages regelmäßig.", exampleTranslation: "Piję dużo wody podczas całego dnia regularnie." },
      { id: "act5", polish: "Czytać", german: "Lesen", difficulty: "easy", example: "Ich lese jeden Abend vor dem Schlafen ein interessantes Buch.", exampleTranslation: "Czytam każdego wieczoru przed snem ciekawą książkę." },
      { id: "act6", polish: "Pisać", german: "Schreiben", difficulty: "easy", example: "Ich schreibe jeden Tag in mein Tagebuch über meine Erlebnisse.", exampleTranslation: "Piszę każdego dnia w moim dzienniku o moich doświadczeniach." },
      { id: "act7", polish: "Gotować", german: "Kochen", difficulty: "medium", example: "Ich koche gerne traditionelle deutsche Gerichte für meine Familie am Wochenende.", exampleTranslation: "Lubię gotować tradycyjne niemieckie potrawy dla mojej rodziny w weekend." },
      { id: "act8", polish: "Sprzątać", german: "Putzen", difficulty: "medium", example: "Jeden Samstag putze ich gründlich die ganze Wohnung von oben bis unten.", exampleTranslation: "Każdą sobotę sprzątam dokładnie całe mieszkanie od góry do dołu." },
      { id: "act9", polish: "Uczyć się", german: "Lernen", difficulty: "medium", example: "Ich lerne jeden Tag neue deutsche Wörter und übe die Grammatik täglich.", exampleTranslation: "Uczę się każdego dnia nowych niemieckich słów i ćwiczę gramatykę codziennie." },
      { id: "act10", polish: "Robić zakupy", german: "Einkaufen", difficulty: "medium", example: "Ich gehe samstags einkaufen im großen Supermarkt in der Stadtmitte.", exampleTranslation: "Chodzę w soboty na zakupy do dużego supermarketu w centrum miasta." },
      { id: "act11", polish: "Oglądać telewizję", german: "Fernsehen", difficulty: "medium", example: "Abends sehe ich gerne fern und entspanne mich nach der Arbeit.", exampleTranslation: "Wieczorem lubię oglądać telewizję i relaksować się po pracy." },
      { id: "act12", polish: "Słuchać muzyki", german: "Musik hören", difficulty: "medium", example: "Ich höre klassische Musik beim Arbeiten, das hilft mir sehr konzentriert zu bleiben.", exampleTranslation: "Słucham muzyki klasycznej podczas pracy, to bardzo pomaga mi pozostać skupionym." },
      { id: "act13", polish: "Co robisz?", german: "Was machst du?", difficulty: "hard", example: "Was machst du gerade jetzt? Hast du vielleicht Zeit für mich?", exampleTranslation: "Co robisz teraz? Czy masz może czas dla mnie?" },
      { id: "act14", polish: "Idę do pracy", german: "Ich gehe zur Arbeit", difficulty: "hard", example: "Ich gehe jeden Morgen um sieben Uhr zur Arbeit mit dem Bus.", exampleTranslation: "Idę każdego ranka o siódmej do pracy autobusem." },
      { id: "act15", polish: "Wracam do domu", german: "Ich komme nach Hause", difficulty: "hard", example: "Ich komme normalerweise um sechs Uhr abends müde nach Hause zurück.", exampleTranslation: "Wracam normalnie o szóstej wieczorem zmęczony do domu." }
    ]
  },

  numbers_time: {
    name: "Liczby i czas",
    description: "Liczby, godziny i podstawy czasu",
    icon: Clock,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "num1", polish: "Jeden", german: "Eins", difficulty: "easy", example: "Ich habe nur eine Stunde Zeit für dieses wichtige Treffen heute.", exampleTranslation: "Mam tylko jedną godzinę czasu na to ważne spotkanie dzisiaj." },
      { id: "num2", polish: "Dwa", german: "Zwei", difficulty: "easy", example: "Ich habe zwei Brüder und eine Schwester in meiner Familie.", exampleTranslation: "Mam dwóch braci i jedną siostrę w mojej rodzinie." },
      { id: "num3", polish: "Trzy", german: "Drei", difficulty: "easy", example: "Der Unterricht dauert drei Stunden und beginnt um neun Uhr morgens.", exampleTranslation: "Lekcja trwa trzy godziny i zaczyna się o dziewiątej rano." },
      { id: "num4", polish: "Cztery", german: "Vier", difficulty: "easy", example: "Wir sind vier Personen in unserer Familie und wohnen zusammen.", exampleTranslation: "Jesteśmy czterema osobami w naszej rodzinie i mieszkamy razem." },
      { id: "num5", polish: "Pięć", german: "Fünf", difficulty: "easy", example: "Das Geschäft ist nur fünf Minuten zu Fuß von hier entfernt.", exampleTranslation: "Sklep jest tylko pięć minut pieszo stąd." },
      { id: "num6", polish: "Godzina", german: "Stunde", difficulty: "easy", example: "Eine Stunde hat sechzig Minuten und das weiß jeder Mensch.", exampleTranslation: "Godzina ma sześćdziesiąt minut i to wie każdy człowiek." },
      { id: "num7", polish: "Minuta", german: "Minute", difficulty: "medium", example: "Warte bitte eine Minute, ich bin gleich fertig mit dieser Aufgabe!", exampleTranslation: "Poczekaj proszę minutę, zaraz skończę z tym zadaniem!" },
      { id: "num8", polish: "Sekunda", german: "Sekunde", difficulty: "medium", example: "Gib mir nur eine Sekunde Zeit, dann kann ich dir helfen sofort!", exampleTranslation: "Daj mi tylko sekundę czasu, wtedy mogę ci pomóc natychmiast!" },
      { id: "num9", polish: "Dzisiaj", german: "Heute", difficulty: "medium", example: "Heute ist ein wunderschöner sonniger Tag und perfekt für einen Spaziergang.", exampleTranslation: "Dzisiaj jest piękny słoneczny dzień i idealny na spacer." },
      { id: "num10", polish: "Wczoraj", german: "Gestern", difficulty: "medium", example: "Gestern war ich im Kino und habe einen tollen Film gesehen.", exampleTranslation: "Wczoraj byłem w kinie i widziałem wspaniały film." },
      { id: "num11", polish: "Jutro", german: "Morgen", difficulty: "medium", example: "Morgen habe ich einen wichtigen Termin beim Arzt um zehn Uhr.", exampleTranslation: "Jutro mam ważne spotkanie u lekarza o dziesiątej." },
      { id: "num12", polish: "Tydzień", german: "Woche", difficulty: "medium", example: "Diese Woche war sehr anstrengend und ich brauche jetzt Erholung.", exampleTranslation: "Ten tydzień był bardzo wyczerpujący i potrzebuję teraz odpoczynku." },
      { id: "num13", polish: "Która godzina?", german: "Wie viel Uhr ist es?", difficulty: "hard", example: "Entschuldigung, wie viel Uhr ist es jetzt? Ich habe meine Uhr vergessen.", exampleTranslation: "Przepraszam, która jest teraz godzina? Zapomniałem mojego zegarka." },
      { id: "num14", polish: "Jest trzecia", german: "Es ist drei Uhr", difficulty: "hard", example: "Es ist genau drei Uhr nachmittags und Zeit für eine Kaffeepause!", exampleTranslation: "Jest dokładnie trzecia po południu i czas na przerwę na kawę!" },
      { id: "num15", polish: "Za pół godziny", german: "In einer halben Stunde", difficulty: "hard", example: "In einer halben Stunde treffen wir uns am Bahnhof vor dem Haupteingang.", exampleTranslation: "Za pół godziny spotykamy się na stacji kolejowej przed głównym wejściem." }
    ]
  },

  colors_descriptions: {
    name: "Kolory i opisy",
    description: "Kolory oraz proste opisy przedmiotów",
    icon: Apple,
    color: "from-pink-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { id: "col1", polish: "Czerwony", german: "Rot", difficulty: "easy", example: "Mein neues Auto ist rot und sieht sehr sportlich und elegant aus.", exampleTranslation: "Mój nowy samochód jest czerwony i wygląda bardzo sportowo i elegancko." },
      { id: "col2", polish: "Niebieski", german: "Blau", difficulty: "easy", example: "Der Himmel ist heute strahlend blau ohne eine einzige Wolke.", exampleTranslation: "Niebo jest dzisiaj promiennie niebieskie bez jednej chmury." },
      { id: "col3", polish: "Zielony", german: "Grün", difficulty: "easy", example: "Im Frühling ist alles grün und die Natur erwacht wunderschön.", exampleTranslation: "Wiosną wszystko jest zielone i przyroda budzi się pięknie." },
      { id: "col4", polish: "Żółty", german: "Gelb", difficulty: "easy", example: "Die Sonne scheint gelb und hell am klaren blauen Sommerhimmel.", exampleTranslation: "Słońce świeci żółto i jasno na czystym niebieskim letnim niebie." },
      { id: "col5", polish: "Czarny", german: "Schwarz", difficulty: "easy", example: "Ich trage oft schwarze Kleidung, weil es elegant und praktisch ist.", exampleTranslation: "Często noszę czarne ubrania, bo jest elegancko i praktycznie." },
      { id: "col6", polish: "Biały", german: "Weiß", difficulty: "easy", example: "Im Winter ist alles weiß bedeckt mit frischem Schnee überall.", exampleTranslation: "Zimą wszystko jest białe pokryte świeżym śniegiem wszędzie." },
      { id: "col7", polish: "Duży", german: "Groß", difficulty: "medium", example: "Wir wohnen in einem großen Haus mit einem schönen Garten rundherum.", exampleTranslation: "Mieszkamy w dużym domu z pięknym ogrodem dookoła." },
      { id: "col8", polish: "Mały", german: "Klein", difficulty: "medium", example: "Meine kleine Tochter spielt gerne mit ihren Puppen im Kinderzimmer.", exampleTranslation: "Moja mała córka lubi bawić się swoimi lalkami w pokoju dziecięcym." },
      { id: "col9", polish: "Nowy", german: "Neu", difficulty: "medium", example: "Ich habe ein neues Fahrrad gekauft und fahre damit jeden Tag.", exampleTranslation: "Kupiłem nowy rower i jeżdżę nim każdego dnia." },
      { id: "col10", polish: "Stary", german: "Alt", difficulty: "medium", example: "Das alte Schloss wurde vor über tausend Jahren gebaut und steht noch.", exampleTranslation: "Stary zamek został zbudowany ponad tysiąc lat temu i wciąż stoi." },
      { id: "col11", polish: "Ładny", german: "Schön", difficulty: "medium", example: "Was für ein schöner Tag! Lass uns draußen spazieren gehen!", exampleTranslation: "Co za ładny dzień! Chodźmy na spacer na zewnątrz!" },
      { id: "col12", polish: "Brzydki", german: "Hässlich", difficulty: "medium", example: "Das Wetter ist heute hässlich mit viel Regen und starkem Wind.", exampleTranslation: "Pogoda jest dzisiaj brzydka z dużym deszczem i silnym wiatrem." },
      { id: "col13", polish: "Jaki to kolor?", german: "Welche Farbe ist das?", difficulty: "hard", example: "Welche Farbe ist das? Ist das blau oder vielleicht doch eher grün?", exampleTranslation: "Jaki to kolor? Czy to niebieski czy może raczej zielony?" },
      { id: "col14", polish: "Podoba mi się", german: "Das gefällt mir", difficulty: "hard", example: "Das gefällt mir sehr gut! Wo hast du das schöne Bild gekauft?", exampleTranslation: "Podoba mi się bardzo! Gdzie kupiłeś ten ładny obraz?" },
      { id: "col15", polish: "To jest piękne", german: "Das ist schön", difficulty: "hard", example: "Das ist wirklich schön! Du hast einen ausgezeichneten Geschmack dafür!", exampleTranslation: "To jest naprawdę piękne! Masz doskonały gust do tego!" }
    ]
  },

  weather_seasons: {
    name: "Pogoda i pory roku",
    description: "Zjawiska pogodowe i cztery pory roku",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { id: "wea1", polish: "Pogoda", german: "Wetter", difficulty: "easy", example: "Das Wetter heute ist perfekt für einen langen Spaziergang im Park.", exampleTranslation: "Pogoda dzisiaj jest idealna na długi spacer w parku." },
      { id: "wea2", polish: "Słońce", german: "Sonne", difficulty: "easy", example: "Die Sonne scheint hell und warm am klaren blauen Sommerhimmel.", exampleTranslation: "Słońce świeci jasno i ciepło na czystym niebieskim letnim niebie." },
      { id: "wea3", polish: "Deszcz", german: "Regen", difficulty: "easy", example: "Es regnet stark heute, vergiss bitte nicht deinen Regenschirm mitzunehmen!", exampleTranslation: "Pada silny deszcz dzisiaj, nie zapomnij proszę wziąć swojego parasola!" },
      { id: "wea4", polish: "Śnieg", german: "Schnee", difficulty: "easy", example: "Im Winter fällt viel Schnee und alles wird weiß und wunderschön.", exampleTranslation: "Zimą pada dużo śniegu i wszystko staje się białe i piękne." },
      { id: "wea5", polish: "Wiatr", german: "Wind", difficulty: "easy", example: "Der Wind ist heute sehr stark und bläst die Blätter von den Bäumen.", exampleTranslation: "Wiatr jest dzisiaj bardzo silny i zrywa liście z drzew." },
      { id: "wea6", polish: "Zimno", german: "Kalt", difficulty: "easy", example: "Es ist sehr kalt draußen, zieh dich bitte warm an!", exampleTranslation: "Jest bardzo zimno na zewnątrz, ubierz się proszę ciepło!" },
      { id: "wea7", polish: "Wiosna", german: "Frühling", difficulty: "medium", example: "Der Frühling ist meine Lieblingsjahreszeit, wenn die Blumen überall blühen.", exampleTranslation: "Wiosna jest moją ulubioną porą roku, gdy kwiaty kwitną wszędzie." },
      { id: "wea8", polish: "Lato", german: "Sommer", difficulty: "medium", example: "Im Sommer fahren wir immer an die See für schöne Ferien.", exampleTranslation: "Latem zawsze jeździmy nad morze na piękne wakacje." },
      { id: "wea9", polish: "Jesień", german: "Herbst", difficulty: "medium", example: "Der Herbst bringt bunte Blätter und kühleres Wetter mit sich jeden Tag.", exampleTranslation: "Jesień przynosi kolorowe liście i chłodniejszą pogodę każdego dnia." },
      { id: "wea10", polish: "Zima", german: "Winter", difficulty: "medium", example: "Der Winter in Deutschland ist kalt und oft schneit es sehr viel.", exampleTranslation: "Zima w Niemczech jest zimna i często pada bardzo dużo śniegu." },
      { id: "wea11", polish: "Gorąco", german: "Heiß", difficulty: "medium", example: "Es ist sehr heiß heute, ich brauche unbedingt kaltes Wasser!", exampleTranslation: "Jest bardzo gorąco dzisiaj, koniecznie potrzebuję zimnej wody!" },
      { id: "wea12", polish: "Mgła", german: "Nebel", difficulty: "medium", example: "Der dichte Nebel macht das Autofahren sehr gefährlich und schwierig.", exampleTranslation: "Gęsta mgła czyni jazdę samochodem bardzo niebezpieczną i trudną." },
      { id: "wea13", polish: "Jaka jest pogoda?", german: "Wie ist das Wetter?", difficulty: "hard", example: "Wie ist das Wetter bei euch? Hier regnet es leider den ganzen Tag.", exampleTranslation: "Jaka jest u was pogoda? Tutaj niestety pada cały dzień." },
      { id: "wea14", polish: "Będzie padać", german: "Es wird regnen", difficulty: "hard", example: "Laut Wettervorhersage wird es morgen den ganzen Tag stark regnen.", exampleTranslation: "Według prognozy pogody jutro będzie padać cały dzień mocno." },
      { id: "wea15", polish: "Piękna pogoda", german: "Schönes Wetter", difficulty: "hard", example: "Was für ein schönes Wetter heute! Perfekt für Aktivitäten draußen!", exampleTranslation: "Co za piękna pogoda dzisiaj! Idealna na aktywności na zewnątrz!" }
    ]
  },

  house_home: {
    name: "Dom i mieszkanie",
    description: "Pomieszczenia, meble i życie domowe",
    icon: Home,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { id: "hom1", polish: "Dom", german: "Haus", difficulty: "easy", example: "Unser Haus ist groß und hat einen schönen Garten mit vielen Blumen.", exampleTranslation: "Nasz dom jest duży i ma piękny ogród z wieloma kwiatami." },
      { id: "hom2", polish: "Mieszkanie", german: "Wohnung", difficulty: "easy", example: "Ich wohne in einer kleinen gemütlichen Wohnung im Stadtzentrum nahe der Arbeit.", exampleTranslation: "Mieszkam w małym przytulnym mieszkaniu w centrum miasta blisko pracy." },
      { id: "hom3", polish: "Pokój", german: "Zimmer", difficulty: "easy", example: "Mein Zimmer ist hell und geräumig mit großen Fenstern überall.", exampleTranslation: "Mój pokój jest jasny i przestronny z dużymi oknami wszędzie." },
      { id: "hom4", polish: "Kuchnia", german: "Küche", difficulty: "easy", example: "Die Küche ist modern ausgestattet mit allen notwendigen Geräten zum Kochen.", exampleTranslation: "Kuchnia jest nowocześnie wyposażona we wszystkie niezbędne urządzenia do gotowania." },
      { id: "hom5", polish: "Łazienka", german: "Badezimmer", difficulty: "easy", example: "Das Badezimmer wurde erst kürzlich renoviert und sieht jetzt toll aus.", exampleTranslation: "Łazienka została niedawno wyremontowana i teraz wygląda świetnie." },
      { id: "hom6", polish: "Sypialnia", german: "Schlafzimmer", difficulty: "easy", example: "Mein Schlafzimmer ist ruhig und perfekt zum Schlafen und Entspannen.", exampleTranslation: "Moja sypialnia jest cicha i idealna do spania i relaksu." },
      { id: "hom7", polish: "Salon", german: "Wohnzimmer", difficulty: "medium", example: "Das Wohnzimmer ist gemütlich eingerichtet mit bequemen Sofas und Sesseln.", exampleTranslation: "Salon jest przytulnie urządzony z wygodnymi sofami i fotelami." },
      { id: "hom8", polish: "Ogród", german: "Garten", difficulty: "medium", example: "Im Garten wachsen viele bunte Blumen und frisches Gemüse im Sommer.", exampleTranslation: "W ogrodzie rosną wiele kolorowych kwiatów i świeżych warzyw latem." },
      { id: "hom9", polish: "Drzwi", german: "Tür", difficulty: "medium", example: "Bitte schließ die Tür, es zieht und wird kalt im Zimmer!", exampleTranslation: "Proszę zamknij drzwi, przeciąga i robi się zimno w pokoju!" },
      { id: "hom10", polish: "Okno", german: "Fenster", difficulty: "medium", example: "Öffne bitte das Fenster, wir brauchen frische Luft im Raum!", exampleTranslation: "Otwórz proszę okno, potrzebujemy świeżego powietrza w pomieszczeniu!" },
      { id: "hom11", polish: "Meble", german: "Möbel", difficulty: "medium", example: "Wir haben neue Möbel gekauft für das Wohnzimmer und es sieht toll aus.", exampleTranslation: "Kupiliśmy nowe meble do salonu i wygląda świetnie." },
      { id: "hom12", polish: "Czynsz", german: "Miete", difficulty: "medium", example: "Die Miete in der Stadt ist sehr hoch und steigt jedes Jahr weiter.", exampleTranslation: "Czynsz w mieście jest bardzo wysoki i rośnie każdego roku dalej." },
      { id: "hom13", polish: "Gdzie mieszkasz?", german: "Wo wohnst du?", difficulty: "hard", example: "Wo wohnst du genau? Ich würde dich gerne mal besuchen kommen!", exampleTranslation: "Gdzie dokładnie mieszkasz? Chciałbym cię kiedyś odwiedzić!" },
      { id: "hom14", polish: "Mam swój pokój", german: "Ich habe mein eigenes Zimmer", difficulty: "hard", example: "Ich habe endlich mein eigenes Zimmer und bin sehr glücklich darüber!", exampleTranslation: "Mam w końcu swój własny pokój i jestem z tego bardzo szczęśliwy!" },
      { id: "hom15", polish: "To duże mieszkanie", german: "Das ist eine große Wohnung", difficulty: "hard", example: "Das ist eine wirklich große Wohnung mit vier Zimmern und zwei Badezimmern!", exampleTranslation: "To jest naprawdę duże mieszkanie z czterema pokojami i dwiema łazienkami!" }
    ]
  },

  travel_directions: {
    name: "Podróże i kierunki",
    description: "Nawigacja, transport i wskazówki drogowe",
    icon: MapPin,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { id: "tra1", polish: "Ulica", german: "Straße", difficulty: "easy", example: "Die Straße ist sehr lang und führt direkt ins Stadtzentrum hinein.", exampleTranslation: "Ulica jest bardzo długa i prowadzi bezpośrednio do centrum miasta." },
      { id: "tra2", polish: "Lewo", german: "Links", difficulty: "easy", example: "Biegen Sie an der nächsten Kreuzung links ab zum Bahnhof.", exampleTranslation: "Skręć na następnym skrzyżowaniu w lewo do stacji kolejowej." },
      { id: "tra3", polish: "Prawo", german: "Rechts", difficulty: "easy", example: "Gehen Sie geradeaus und dann rechts zur Post am Ende.", exampleTranslation: "Idź prosto a potem w prawo do poczty na końcu." },
      { id: "tra4", polish: "Prosto", german: "Geradeaus", difficulty: "easy", example: "Gehen Sie einfach geradeaus, das Museum ist nicht weit von hier.", exampleTranslation: "Idź po prostu prosto, muzeum nie jest daleko stąd." },
      { id: "tra5", polish: "Daleko", german: "Weit", difficulty: "easy", example: "Ist es weit von hier zum Bahnhof zu Fuß?", exampleTranslation: "Czy to daleko stąd do stacji kolejowej pieszo?" },
      { id: "tra6", polish: "Blisko", german: "Nah", difficulty: "easy", example: "Der Supermarkt ist ganz nah, nur fünf Minuten zu Fuß.", exampleTranslation: "Supermarket jest całkiem blisko, tylko pięć minut pieszo." },
      { id: "tra7", polish: "Dworzec", german: "Bahnhof", difficulty: "medium", example: "Der Hauptbahnhof ist das größte Verkehrszentrum in unserer ganzen Stadt.", exampleTranslation: "Dworzec główny jest największym centrum komunikacyjnym w całym naszym mieście." },
      { id: "tra8", polish: "Lotnisko", german: "Flughafen", difficulty: "medium", example: "Der Flughafen liegt dreißig Kilometer außerhalb der Stadt am Stadtrand.", exampleTranslation: "Lotnisko znajduje się trzydzieści kilometrów poza miastem na obrzeżach." },
      { id: "tra9", polish: "Autobus", german: "Bus", difficulty: "medium", example: "Der Bus fährt alle zwanzig Minuten vom Hauptbahnhof ins Stadtzentrum.", exampleTranslation: "Autobus jeździ co dwadzieścia minut z dworca głównego do centrum miasta." },
      { id: "tra10", polish: "Pociąg", german: "Zug", difficulty: "medium", example: "Der Zug nach Berlin fährt um acht Uhr morgens vom Gleis fünf ab.", exampleTranslation: "Pociąg do Berlina odjeżdża o ósmej rano z peronu piątego." },
      { id: "tra11", polish: "Bilet", german: "Fahrkarte", difficulty: "medium", example: "Ich muss noch eine Fahrkarte am Automaten für die Reise kaufen.", exampleTranslation: "Muszę jeszcze kupić bilet w automacie na podróż." },
      { id: "tra12", polish: "Mapa", german: "Karte", difficulty: "medium", example: "Hast du eine Karte? Ich habe mich leider völlig verlaufen hier.", exampleTranslation: "Masz mapę? Niestety całkowicie się zgubiłem tutaj." },
      { id: "tra13", polish: "Gdzie jest dworzec?", german: "Wo ist der Bahnhof?", difficulty: "hard", example: "Entschuldigung, wo ist der Bahnhof? Ich bin hier fremd und neu.", exampleTranslation: "Przepraszam, gdzie jest dworzec? Jestem tu obcy i nowy." },
      { id: "tra14", polish: "Jak dojść do centrum?", german: "Wie komme ich ins Zentrum?", difficulty: "hard", example: "Entschuldigung, wie komme ich am schnellsten ins Zentrum von hier aus?", exampleTranslation: "Przepraszam, jak najszybciej dojść do centrum stąd?" },
      { id: "tra15", polish: "Zgubiłem się", german: "Ich habe mich verlaufen", difficulty: "hard", example: "Ich glaube, ich habe mich verlaufen. Können Sie mir bitte helfen?", exampleTranslation: "Chyba się zgubiłem. Czy może mi Pan proszę pomóc?" }
    ]
  },

  shopping_money: {
    name: "Zakupy i pieniądze",
    description: "Sklepy, płatności i transakcje",
    icon: ShoppingCart,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { id: "shop1", polish: "Sklep", german: "Geschäft", difficulty: "easy", example: "Das Geschäft ist jeden Tag von neun bis achtzehn Uhr geöffnet.", exampleTranslation: "Sklep jest otwarty każdego dnia od dziewiątej do osiemnastej." },
      { id: "shop2", polish: "Kupować", german: "Kaufen", difficulty: "easy", example: "Ich möchte dieses schöne Kleid kaufen für die Hochzeit nächste Woche.", exampleTranslation: "Chcę kupić tę piękną sukienkę na wesele w przyszłym tygodniu." },
      { id: "shop3", polish: "Sprzedawać", german: "Verkaufen", difficulty: "easy", example: "Wir verkaufen unser altes Auto, weil wir ein neues brauchen.", exampleTranslation: "Sprzedajemy nasz stary samochód, bo potrzebujemy nowego." },
      { id: "shop4", polish: "Cena", german: "Preis", difficulty: "easy", example: "Der Preis ist zu hoch für mein Budget, haben Sie etwas Günstigeres?", exampleTranslation: "Cena jest za wysoka dla mojego budżetu, czy ma Pan coś tańszego?" },
      { id: "shop5", polish: "Pieniądze", german: "Geld", difficulty: "easy", example: "Ich habe nicht genug Geld dabei, kann ich mit Karte bezahlen?", exampleTranslation: "Nie mam wystarczająco dużo pieniędzy przy sobie, mogę zapłacić kartą?" },
      { id: "shop6", polish: "Płacić", german: "Bezahlen", difficulty: "easy", example: "Wo kann ich bitte bezahlen? Ich bin in Eile und muss gehen.", exampleTranslation: "Gdzie mogę proszę zapłacić? Śpieszę się i muszę iść." },
      { id: "shop7", polish: "Kasa", german: "Kasse", difficulty: "medium", example: "Die Kasse ist dort hinten rechts neben dem Ausgang zur Straße.", exampleTranslation: "Kasa jest tam z tyłu po prawej obok wyjścia na ulicę." },
      { id: "shop8", polish: "Paragon", german: "Quittung", difficulty: "medium", example: "Kann ich bitte eine Quittung bekommen für diese Einkäufe zur Buchhaltung?", exampleTranslation: "Czy mogę proszę dostać paragon za te zakupy do księgowości?" },
      { id: "shop9", polish: "Wyprzedaż", german: "Ausverkauf", difficulty: "medium", example: "Der große Sommer-Ausverkauf beginnt nächste Woche mit riesigen Rabatten!", exampleTranslation: "Duża letnia wyprzedż zaczyna się w przyszłym tygodniu z ogromnymi zniżkami!" },
      { id: "shop10", polish: "Drogi", german: "Teuer", difficulty: "medium", example: "Diese Schuhe sind sehr teuer, aber die Qualität ist ausgezeichnet gut.", exampleTranslation: "Te buty są bardzo drogie, ale jakość jest doskonale dobra." },
      { id: "shop11", polish: "Tani", german: "Billig", difficulty: "medium", example: "Ich suche etwas Billiges, habe Sie günstigere Alternativen im Angebot?", exampleTranslation: "Szukam czegoś taniego, ma Pan tańsze alternatywy w ofercie?" },
      { id: "shop12", polish: "Zniżka", german: "Rabatt", difficulty: "medium", example: "Gibt es einen Rabatt, wenn ich mehrere Artikel auf einmal kaufe?", exampleTranslation: "Czy jest zniżka, jeśli kupię kilka artykułów naraz?" },
      { id: "shop13", polish: "Ile to kosztuje?", german: "Wie viel kostet das?", difficulty: "hard", example: "Entschuldigung, wie viel kostet das schöne Kleid dort im Schaufenster?", exampleTranslation: "Przepraszam, ile kosztuje ta piękna sukienka tam w wystawie?" },
      { id: "shop14", polish: "To za drogie", german: "Das ist zu teuer", difficulty: "hard", example: "Das ist mir leider zu teuer. Haben Sie etwas Preiswerteres anzubieten?", exampleTranslation: "To jest dla mnie niestety za drogie. Ma Pan coś tańszego do zaoferowania?" },
      { id: "shop15", polish: "Mogę przymierzyć?", german: "Kann ich das anprobieren?", difficulty: "hard", example: "Kann ich das bitte anprobieren? Wo sind die Umkleidekabinen hier?", exampleTranslation: "Czy mogę to proszę przymierzyć? Gdzie są przymierzalnie tutaj?" }
    ]
  },

  school_education: {
    name: "Szkoła i edukacja",
    description: "Nauka, przedmioty szkolne i egzaminy",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "sch1", polish: "Szkoła", german: "Schule", difficulty: "easy", example: "Die Schule beginnt jeden Morgen um acht Uhr pünktlich ohne Ausnahme.", exampleTranslation: "Szkoła zaczyna się każdego ranka o ósmej punktualnie bez wyjątku." },
      { id: "sch2", polish: "Uczeń", german: "Schüler", difficulty: "easy", example: "Der Schüler lernt fleißig für die wichtige Prüfung nächste Woche.", exampleTranslation: "Uczeń uczy się pilnie do ważnego egzaminu w przyszłym tygodniu." },
      { id: "sch3", polish: "Nauczyciel", german: "Lehrer", difficulty: "easy", example: "Unser Lehrer erklärt die schwierige Grammatik immer sehr geduldig und klar.", exampleTranslation: "Nasz nauczyciel wyjaśnia trudną gramatykę zawsze bardzo cierpliwie i jasno." },
      { id: "sch4", polish: "Książka", german: "Buch", difficulty: "easy", example: "Dieses Buch ist sehr interessant und ich kann es kaum weglegen.", exampleTranslation: "Ta książka jest bardzo interesująca i ledwo mogę ją odłożyć." },
      { id: "sch5", polish: "Zeszyt", german: "Heft", difficulty: "easy", example: "Ich schreibe alle wichtigen Notizen in mein Heft für jedes Fach.", exampleTranslation: "Zapisuję wszystkie ważne notatki w moim zeszycie dla każdego przedmiotu." },
      { id: "sch6", polish: "Długopis", german: "Kugelschreiber", difficulty: "easy", example: "Hast du einen Kugelschreiber? Ich habe meinen zu Hause vergessen.", exampleTranslation: "Masz długopis? Zapomniałem mojego w domu." },
      { id: "sch7", polish: "Lekcja", german: "Unterricht", difficulty: "medium", example: "Der Unterricht dauert heute länger, weil wir eine Prüfung schreiben müssen.", exampleTranslation: "Lekcja trwa dzisiaj dłużej, bo musimy pisać egzamin." },
      { id: "sch8", polish: "Egzamin", german: "Prüfung", difficulty: "medium", example: "Die Prüfung war sehr schwierig, aber ich glaube ich habe gut bestanden.", exampleTranslation: "Egzamin był bardzo trudny, ale myślę że dobrze zdałem." },
      { id: "sch9", polish: "Zadanie domowe", german: "Hausaufgabe", difficulty: "medium", example: "Ich muss noch die Hausaufgabe für morgen fertig machen heute Abend.", exampleTranslation: "Muszę jeszcze skończyć zadanie domowe na jutro dziś wieczorem." },
      { id: "sch10", polish: "Uniweysytet", german: "Universität", difficulty: "medium", example: "Nach dem Abitur möchte ich an der Universität Medizin studieren dort.", exampleTranslation: "Po maturze chcę studiować medycynę na uniwersytecie tam." },
      { id: "sch11", polish: "Studiować", german: "Studieren", difficulty: "medium", example: "Ich studiere Informatik an der Technischen Universität seit drei Jahren.", exampleTranslation: "Studiuję informatykę na uniwersytecie technicznym od trzech lat." },
      { id: "sch12", polish: "Dyplom", german: "Diplom", difficulty: "medium", example: "Nach fünf Jahren Studium habe ich endlich mein Diplom bekommen stolz!", exampleTranslation: "Po pięciu latach studiów w końcu dostałem dyplom dumnie!" },
      { id: "sch13", polish: "Muszę się uczyć", german: "Ich muss lernen", difficulty: "hard", example: "Ich muss heute Abend viel lernen für die schwierige Prüfung morgen früh.", exampleTranslation: "Muszę dziś wieczorem dużo się uczyć do trudnego egzaminu jutro rano." },
      { id: "sch14", polish: "Zdałem egzamin", german: "Ich habe die Prüfung bestanden", difficulty: "hard", example: "Ich habe die schwierige Prüfung bestanden mit einer sehr guten Note!", exampleTranslation: "Zdałem trudny egzamin z bardzo dobrą oceną!" },
      { id: "sch15", polish: "Co studiujesz?", german: "Was studierst du?", difficulty: "hard", example: "Was studierst du an der Universität? Ich interessiere mich für dein Fach!", exampleTranslation: "Co studiujesz na uniwersytecie? Interesuję się twoim przedmiotem!" }
    ]
  },

  work_profession: {
    name: "Praca i zawód",
    description: "Zawody, biuro i życie zawodowe",
    icon: Briefcase,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { id: "work1", polish: "Praca", german: "Arbeit", difficulty: "easy", example: "Die Arbeit ist sehr interessant und macht mir großen Spaß täglich.", exampleTranslation: "Praca jest bardzo interesująca i sprawia mi dużą przyjemność codziennie." },
      { id: "work2", polish: "Pracować", german: "Arbeiten", difficulty: "easy", example: "Ich arbeite als Software-Entwickler in einer großen IT-Firma seit Jahren.", exampleTranslation: "Pracuję jako programista w dużej firmie IT od lat." },
      { id: "work3", polish: "Szef", german: "Chef", difficulty: "easy", example: "Mein Chef ist sehr nett und verständnisvoll mit allen Mitarbeitern immer.", exampleTranslation: "Mój szef jest bardzo miły i wyrozumiały ze wszystkimi pracownikami zawsze." },
      { id: "work4", polish: "Kolega", german: "Kollege", difficulty: "easy", example: "Mein Kollege hilft mir oft bei schwierigen Projekten in der Arbeit.", exampleTranslation: "Mój kolega często pomaga mi przy trudnych projektach w pracy." },
      { id: "work5", polish: "Biuro", german: "Büro", difficulty: "easy", example: "Unser Büro ist modern ausgestattet mit allem was wir brauchen täglich.", exampleTranslation: "Nasze biuro jest nowocześnie wyposażone we wszystko czego potrzebujemy codziennie." },
      { id: "work6", polish: "Spotkanie", german: "Besprechung", difficulty: "easy", example: "Wir haben heute eine wichtige Besprechung mit dem neuen Kunden um zehn.", exampleTranslation: "Mamy dzisiaj ważne spotkanie z nowym klientem o dziesiątej." },
      { id: "work7", polish: "Projekt", german: "Projekt", difficulty: "medium", example: "Das Projekt ist sehr komplex und wir arbeiten daran seit mehreren Monaten.", exampleTranslation: "Projekt jest bardzo złożony i pracujemy nad nim od kilku miesięcy." },
      { id: "work8", polish: "Wynagrodzenie", german: "Gehalt", difficulty: "medium", example: "Das Gehalt wird am Ende jeden Monats pünktlich auf mein Konto überwiesen.", exampleTranslation: "Wynagrodzenie jest przekazywane na koniec każdego miesiąca punktualnie na moje konto." },
      { id: "work9", polish: "Umowa", german: "Vertrag", difficulty: "medium", example: "Ich habe einen unbefristeten Vertrag mit sehr guten Konditionen unterschrieben.", exampleTranslation: "Podpisałem umowę na czas nieokreślony z bardzo dobrymi warunkami." },
      { id: "work10", polish: "Urlop", german: "Urlaub", difficulty: "medium", example: "Ich habe dreißig Tage Urlaub im Jahr und fahre gerne ins Ausland.", exampleTranslation: "Mam trzydzieści dni urlopu w roku i lubię jeździć za granicę." },
      { id: "work11", polish: "Awans", german: "Beförderung", difficulty: "medium", example: "Nach drei Jahren harter Arbeit habe ich eine Beförderung bekommen endlich!", exampleTranslation: "Po trzech latach ciężkiej pracy dostałem awans w końcu!" },
      { id: "work12", polish: "Emeryt", german: "Rentner", difficulty: "medium", example: "Als Rentner hat mein Vater endlich Zeit für seine Hobbys und Interessen.", exampleTranslation: "Jako emeryt mój ojciec ma w końcu czas na swoje hobby i zainteresowania." },
      { id: "work13", polish: "Gdzie pracujesz?", german: "Wo arbeitest du?", difficulty: "hard", example: "Wo arbeitest du genau? Ich suche auch eine neue Arbeitsstelle gerade.", exampleTranslation: "Gdzie dokładnie pracujesz? Też szukam nowego miejsca pracy właśnie." },
      { id: "work14", polish: "Szukam pracy", german: "Ich suche Arbeit", difficulty: "hard", example: "Ich suche dringend eine neue Arbeit mit besserer Bezahlung und Bedingungen.", exampleTranslation: "Szukam pilnie nowej pracy z lepszym wynagrodzeniem i warunkami." },
      { id: "work15", polish: "Pracuję jako", german: "Ich arbeite als", difficulty: "hard", example: "Ich arbeite als Ingenieur in einer großen internationalen Firma seit fünf Jahren.", exampleTranslation: "Pracuję jako inżynier w dużej międzynarodowej firmie od pięciu lat." }
    ]
  },

  health_body: {
    name: "Zdrowie i ciało",
    description: "Części ciała, zdrowie i samopoczucie",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "hea1", polish: "Głowa", german: "Kopf", difficulty: "easy", example: "Mein Kopf tut sehr weh, ich glaube ich habe Kopfschmerzen bekommen.", exampleTranslation: "Moja głowa bardzo boli, chyba dostałem bólu głowy." },
      { id: "hea2", polish: "Oko", german: "Auge", difficulty: "easy", example: "Meine Augen sind müde vom langen Arbeiten am Computer den ganzen Tag.", exampleTranslation: "Moje oczy są zmęczone od długiej pracy przy komputerze cały dzień." },
      { id: "hea3", polish: "Ręka", german: "Hand", difficulty: "easy", example: "Wasch dir bitte die Hände vor dem Essen gründlich mit Seife!", exampleTranslation: "Umyj sobie proszę ręce przed jedzeniem dokładnie mydłem!" },
      { id: "hea4", polish: "Noga", german: "Bein", difficulty: "easy", example: "Mein Bein schmerzt vom vielen Laufen beim Sport gestern Nachmittag.", exampleTranslation: "Moja noga boli od dużego biegania podczas sportu wczoraj po południu." },
      { id: "hea5", polish: "Serce", german: "Herz", difficulty: "easy", example: "Das Herz ist das wichtigste Organ in unserem menschlichen Körper.", exampleTranslation: "Serce jest najważniejszym organem w naszym ludzkim ciele." },
      { id: "hea6", polish: "Ból", german: "Schmerz", difficulty: "easy", example: "Ich habe starke Schmerzen im Rücken vom Heben schwerer Kisten gestern.", exampleTranslation: "Mam silny ból w plecach od podnoszenia ciężkich skrzyń wczoraj." },
      { id: "hea7", polish: "Lekarz", german: "Arzt", difficulty: "medium", example: "Ich muss dringend zum Arzt gehen, weil ich mich nicht gut fühle.", exampleTranslation: "Muszę pilnie iść do lekarza, bo nie czuję się dobrze." },
      { id: "hea8", polish: "Szpital", german: "Krankenhaus", difficulty: "medium", example: "Das Krankenhaus ist modern ausgestattet und hat die beste medizinische Versorgung.", exampleTranslation: "Szpital jest nowocześnie wyposażony i ma najlepszą opiekę medyczną." },
      { id: "hea9", polish: "Lek", german: "Medikament", difficulty: "medium", example: "Der Arzt hat mir ein starkes Medikament gegen die Schmerzen verschrieben.", exampleTranslation: "Lekarz przepisał mi silny lek przeciw bólom." },
      { id: "hea10", polish: "Zdrowy", german: "Gesund", difficulty: "medium", example: "Ich versuche gesund zu leben durch Sport und gute Ernährung täglich.", exampleTranslation: "Staram się żyć zdrowo przez sport i dobre odżywianie codziennie." },
      { id: "hea11", polish: "Chory", german: "Krank", difficulty: "medium", example: "Ich bin leider krank und muss heute zu Hause bleiben im Bett.", exampleTranslation: "Jestem niestety chory i muszę dzisiaj zostać w domu w łóżku." },
      { id: "hea12", polish: "Apteka", german: "Apotheke", difficulty: "medium", example: "Die Apotheke ist gleich um die Ecke und bis neun Uhr geöffnet.", exampleTranslation: "Apteka jest zaraz za rogiem i otwarta do dziewiątej." },
      { id: "hea13", polish: "Źle się czuję", german: "Ich fühle mich schlecht", difficulty: "hard", example: "Ich fühle mich heute sehr schlecht und habe Fieber mit Kopfschmerzen.", exampleTranslation: "Czuję się dzisiaj bardzo źle i mam gorączkę z bólem głowy." },
      { id: "hea14", polish: "Boli mnie głowa", german: "Ich habe Kopfschmerzen", difficulty: "hard", example: "Ich habe starke Kopfschmerzen, kannst du mir bitte eine Tablette geben?", exampleTranslation: "Boli mnie głowa mocno, możesz mi proszę dać tabletkę?" },
      { id: "hea15", polish: "Potrzebuję lekarza", german: "Ich brauche einen Arzt", difficulty: "hard", example: "Ich brauche dringend einen Arzt! Können Sie mir bitte einen Termin geben?", exampleTranslation: "Potrzebuję pilnie lekarza! Czy może mi Pan proszę dać termin?" }
    ]
  },

  clothing_appearance: {
    name: "Ubrania i wygląd",
    description: "Odzież, dodatki i ubiór na różne okazje",
    icon: Shirt,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { id: "clo1", polish: "Koszula", german: "Hemd", difficulty: "easy", example: "Ich trage jeden Tag ein weißes Hemd zur Arbeit im Büro.", exampleTranslation: "Noszę każdego dnia białą koszulę do pracy w biurze." },
      { id: "clo2", polish: "Spodnie", german: "Hose", difficulty: "easy", example: "Diese Hose ist sehr bequem und passt mir perfekt gut.", exampleTranslation: "Te spodnie są bardzo wygodne i pasują mi idealnie dobrze." },
      { id: "clo3", polish: "Sukienka", german: "Kleid", difficulty: "easy", example: "Sie trägt ein wunderschönes blaues Kleid zur Hochzeitsfeier morgen.", exampleTranslation: "Nosi piękną niebieską sukienkę na uroczystość ślubną jutro." },
      { id: "clo4", polish: "Buty", german: "Schuhe", difficulty: "easy", example: "Ich brauche neue bequeme Schuhe zum Wandern in den Bergen.", exampleTranslation: "Potrzebuję nowych wygodnych butów do wędrówek w górach." },
      { id: "clo5", polish: "Kurtka", german: "Jacke", difficulty: "easy", example: "Nimm eine warme Jacke mit, es wird heute Abend kalt sein.", exampleTranslation: "Weź ciepłą kurtkę ze sobą, będzie dziś wieczorem zimno." },
      { id: "clo6", polish: "Czapka", german: "Mütze", difficulty: "easy", example: "Im Winter trage ich immer eine warme Mütze gegen die Kälte draußen.", exampleTranslation: "Zimą zawsze noszę ciepłą czapkę przeciw zimnu na zewnątrz." },
      { id: "clo7", polish: "Szalik", german: "Schal", difficulty: "medium", example: "Wickle dir einen warmen Schal um den Hals gegen den kalten Wind!", exampleTranslation: "Owiń sobie ciepły szalik wokół szyi przeciw zimnemu wiatrowi!" },
      { id: "clo8", polish: "Rękawiczki", german: "Handschuhe", difficulty: "medium", example: "Vergiss nicht deine Handschuhe, deine Hände werden sonst sehr kalt frieren!", exampleTranslation: "Nie zapomnij swoich rękawiczek, twoje ręce będą inaczej bardzo marzły!" },
      { id: "clo9", polish: "Sweter", german: "Pullover", difficulty: "medium", example: "Dieser warme Pullover hält mich gemütlich an kalten Herbstabenden zu Hause.", exampleTranslation: "Ten ciepły sweter trzyma mnie przytulnie w chłodne jesienne wieczory w domu." },
      { id: "clo10", polish: "Płaszcz", german: "Mantel", difficulty: "medium", example: "Ich habe einen neuen eleganten Mantel für den Winter gekauft gestern.", exampleTranslation: "Kupiłem nowy elegancki płaszcz na zimę wczoraj." },
      { id: "clo11", polish: "Skarpetki", german: "Socken", difficulty: "medium", example: "Ich brauche warme Socken für die kalten Wintertage und Nächte.", exampleTranslation: "Potrzebuję ciepłych skarpetek na zimne zimowe dni i noce." },
      { id: "clo12", polish: "Kapelusz", german: "Hut", difficulty: "medium", example: "Der elegante Hut schützt meinen Kopf vor der starken Sonne im Sommer.", exampleTranslation: "Elegancki kapelusz chroni moją głowę przed silnym słońcem latem." },
      { id: "clo13", polish: "Pasuje mi to?", german: "Passt mir das?", difficulty: "hard", example: "Passt mir das gut? Ich bin mir nicht sicher über die Farbe.", exampleTranslation: "Pasuje mi to dobrze? Nie jestem pewien co do koloru." },
      { id: "clo14", polish: "To za małe", german: "Das ist zu klein", difficulty: "hard", example: "Das ist mir leider zu klein, haben Sie eine größere Größe da?", exampleTranslation: "To jest dla mnie niestety za małe, ma Pan większy rozmiar?" },
      { id: "clo15", polish: "Dobrze wyglądasz", german: "Du siehst gut aus", difficulty: "hard", example: "Du siehst heute besonders gut aus in diesem eleganten neuen Anzug!", exampleTranslation: "Wyglądasz dzisiaj szczególnie dobrze w tym eleganckim nowym garniturze!" }
    ]
  },

  emotions_feelings: {
    name: "Emocje i uczucia",
    description: "Nastroje, uczucia i stany emocjonalne",
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    level: "intermediate",
    words: [
      { id: "emo1", polish: "Szczęśliwy", german: "Glücklich", difficulty: "easy", example: "Ich bin sehr glücklich mit meinem Leben und meiner wunderbaren Familie.", exampleTranslation: "Jestem bardzo szczęśliwy ze swojego życia i mojej wspaniałej rodziny." },
      { id: "emo2", polish: "Smutny", german: "Traurig", difficulty: "easy", example: "Ich bin traurig, weil mein bester Freund weggezogen ist weit weg.", exampleTranslation: "Jestem smutny, bo mój najlepszy przyjaciel wyprowadził się daleko." },
      { id: "emo3", polish: "Zły", german: "Wütend", difficulty: "easy", example: "Ich bin wütend auf mich selbst, weil ich einen dummen Fehler gemacht habe.", exampleTranslation: "Jestem zły na siebie, bo zrobiłem głupi błąd." },
      { id: "emo4", polish: "Zmęczony", german: "Müde", difficulty: "easy", example: "Ich bin sehr müde nach dem langen anstrengenden Arbeitstag heute.", exampleTranslation: "Jestem bardzo zmęczony po długim wyczerpującym dniu pracy dzisiaj." },
      { id: "emo5", polish: "Zadowolony", german: "Zufrieden", difficulty: "easy", example: "Ich bin sehr zufrieden mit den Ergebnissen unserer harten Arbeit zusammen.", exampleTranslation: "Jestem bardzo zadowolony z wyników naszej ciężkiej pracy razem." },
      { id: "emo6", polish: "Zdenerwowany", german: "Nervös", difficulty: "easy", example: "Ich bin nervös vor der wichtigen Prüfung morgen früh um acht.", exampleTranslation: "Jestem zdenerwowany przed ważnym egzaminem jutro rano o ósmej." },
      { id: "emo7", polish: "Podekscytowany", german: "Aufgeregt", difficulty: "medium", example: "Ich bin sehr aufgeregt wegen der Reise nach Paris nächste Woche!", exampleTranslation: "Jestem bardzo podekscytowany z powodu podróży do Paryża w przyszłym tygodniu!" },
      { id: "emo8", polish: "Przestraszony", german: "Ängstlich", difficulty: "medium", example: "Ich bin ängstlich vor großen Höhen und meide hohe Gebäude immer.", exampleTranslation: "Jestem przestraszony przed wielkimi wysokościami i unikam wysokich budynków zawsze." },
      { id: "emo9", polish: "Dumny", german: "Stolz", difficulty: "medium", example: "Ich bin sehr stolz auf meinen Sohn für seine tollen Leistungen in der Schule.", exampleTranslation: "Jestem bardzo dumny z mojego syna za jego wspaniałe osiągnięcia w szkole." },
      { id: "emo10", polish: "Samotny", german: "Einsam", difficulty: "medium", example: "Manchmal fühle ich mich einsam, wenn alle Freunde beschäftigt sind.", exampleTranslation: "Czasami czuję się samotny, gdy wszyscy przyjaciele są zajęci." },
      { id: "emo11", polish: "Spokojny", german: "Ruhig", difficulty: "medium", example: "Nach der Meditation fühle ich mich sehr ruhig und entspannt innerlich.", exampleTranslation: "Po medytacji czuję się bardzo spokojny i zrelaksowany wewnętrznie." },
      { id: "emo12", polish: "Zestresowany", german: "Gestresst", difficulty: "medium", example: "Ich bin total gestresst wegen der vielen Arbeit und knappen Termine diese Woche.", exampleTranslation: "Jestem totalnie zestresowany z powodu dużej pracy i ciasnych terminów w tym tygodniu." },
      { id: "emo13", polish: "Jak się czujesz?", german: "Wie fühlst du dich?", difficulty: "hard", example: "Wie fühlst du dich heute? Du siehst ein bisschen müde und blass aus.", exampleTranslation: "Jak się czujesz dzisiaj? Wyglądasz trochę zmęczony i blado." },
      { id: "emo14", polish: "Czuję się dobrze", german: "Ich fühle mich gut", difficulty: "hard", example: "Ich fühle mich heute wirklich gut und voller Energie für alles!", exampleTranslation: "Czuję się dzisiaj naprawdę dobrze i pełen energii na wszystko!" },
      { id: "emo15", polish: "Martwię się", german: "Ich mache mir Sorgen", difficulty: "hard", example: "Ich mache mir große Sorgen um meine kranke Mutter im Krankenhaus.", exampleTranslation: "Martwię się bardzo o moją chorą mamę w szpitalu." }
    ]
  },

  hobbies_free_time: {
    name: "Hobby i czas wolny",
    description: "Zainteresowania, rozrywka i wolny czas",
    icon: Music,
    color: "from-violet-500 to-purple-600",
    level: "intermediate",
    words: [
      { id: "hob1", polish: "Hobby", german: "Hobby", difficulty: "easy", example: "Mein Lieblingshobby ist Fotografieren und ich übe es jedes Wochenende regelmäßig.", exampleTranslation: "Moim ulubionym hobby jest fotografowanie i ćwiczę je każdy weekend regularnie." },
      { id: "hob2", polish: "Sport", german: "Sport", difficulty: "easy", example: "Ich treibe gerne Sport und gehe dreimal pro Woche ins Fitnessstudio.", exampleTranslation: "Lubię uprawiać sport i chodzę trzy razy w tygodniu na siłownię." },
      { id: "hob3", polish: "Muzyka", german: "Musik", difficulty: "easy", example: "Ich höre jeden Tag Musik auf dem Weg zur Arbeit im Bus.", exampleTranslation: "Słucham każdego dnia muzyki w drodze do pracy w autobusie." },
      { id: "hob4", polish: "Film", german: "Film", difficulty: "easy", example: "Gestern Abend habe ich einen spannenden deutschen Film im Kino gesehen.", exampleTranslation: "Wczoraj wieczorem widziałem ekscytujący niemiecki film w kinie." },
      { id: "hob5", polish: "Czytać", german: "Lesen", difficulty: "easy", example: "Ich lese gerne Kriminalromane vor dem Einschlafen jeden Abend.", exampleTranslation: "Lubię czytać kryminały przed zaśnięciem każdego wieczoru." },
      { id: "hob6", polish: "Malować", german: "Malen", difficulty: "easy", example: "Meine Schwester malt wunderschöne Landschaften mit Wasserfarben am Wochenende.", exampleTranslation: "Moja siostra maluje piękne krajobrazy farbami wodnymi w weekend." },
      { id: "hob7", polish: "Grać", german: "Spielen", difficulty: "medium", example: "Ich spiele gerne Fußball mit Freunden jeden Sonntag im Park zusammen.", exampleTranslation: "Lubię grać w piłkę nożną z przyjaciółmi każdą niedzielę w parku razem." },
      { id: "hob8", polish: "Tańczyć", german: "Tanzen", difficulty: "medium", example: "Wir gehen jeden Freitag tanzen in die Disco und haben großen Spaß.", exampleTranslation: "Chodzimy każdego piątku tańczyć do dyskoteki i świetnie się bawimy." },
      { id: "hob9", polish: "Śpiewać", german: "Singen", difficulty: "medium", example: "Meine Tochter singt sehr schön und nimmt Gesangsunterricht zweimal pro Woche.", exampleTranslation: "Moja córka śpiewa bardzo pięknie i bierze lekcje śpiewu dwa razy w tygodniu." },
      { id: "hob10", polish: "Fotografować", german: "Fotografieren", difficulty: "medium", example: "Ich fotografiere gerne die Natur und Landschaften auf meinen Wanderungen oft.", exampleTranslation: "Lubię fotografować przyrodę i krajobrazy na moich wędrówkach często." },
      { id: "hob11", polish: "Kolekcjonować", german: "Sammeln", difficulty: "medium", example: "Ich sammle alte Briefmarken aus verschiedenen Ländern als interessantes Hobby.", exampleTranslation: "Zbieram stare znaczki z różnych krajów jako ciekawe hobby." },
      { id: "hob12", polish: "Wędrówka", german: "Wanderung", difficulty: "medium", example: "Wir machen jedes Wochenende eine lange Wanderung in den Bergen rundherum.", exampleTranslation: "Robimy każdy weekend długą wędrówkę w górach dookoła." },
      { id: "hob13", polish: "Jakie masz hobby?", german: "Was sind deine Hobbys?", difficulty: "hard", example: "Was sind deine Hobbys? Ich würde gerne mehr über deine Interessen erfahren!", exampleTranslation: "Jakie masz hobby? Chciałbym dowiedzieć się więcej o twoich zainteresowaniach!" },
      { id: "hob14", polish: "Gram na gitarze", german: "Ich spiele Gitarre", difficulty: "hard", example: "Ich spiele seit fünf Jahren Gitarre und übe jeden Tag mindestens eine Stunde.", exampleTranslation: "Gram na gitarze od pięciu lat i ćwiczę każdego dnia przynajmniej godzinę." },
      { id: "hob15", polish: "To moja pasja", german: "Das ist meine Leidenschaft", difficulty: "hard", example: "Fotografie ist meine große Leidenschaft und ich könnte stundenlang fotografieren!", exampleTranslation: "Fotografia jest moją wielką pasją i mógłbym godzinami fotografować!" }
    ]
  },

  transportation: {
    name: "Transport",
    description: "Pojazdy i środki transportu",
    icon: Bike,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { id: "trans1", polish: "Samochód", german: "Auto", difficulty: "easy", example: "Mein Auto ist neu und fährt sehr zuverlässig und sparsam täglich.", exampleTranslation: "Mój samochód jest nowy i jeździ bardzo niezawodnie i oszczędnie codziennie." },
      { id: "trans2", polish: "Rower", german: "Fahrrad", difficulty: "easy", example: "Ich fahre jeden Tag mit dem Fahrrad zur Arbeit für Gesundheit.", exampleTranslation: "Jeżdżę każdego dnia rowerem do pracy dla zdrowia." },
      { id: "trans3", polish: "Tramwaj", german: "Straßenbahn", difficulty: "easy", example: "Die Straßenbahn fährt alle zehn Minuten durch das Stadtzentrum regelmäßig.", exampleTranslation: "Tramwaj jeździ co dziesięć minut przez centrum miasta regularnie." },
      { id: "trans4", polish: "Metro", german: "U-Bahn", difficulty: "easy", example: "Die U-Bahn ist der schnellste Weg durch die große Stadt zu fahren.", exampleTranslation: "Metro jest najszybszym sposobem przejazdu przez duże miasto." },
      { id: "trans5", polish: "Taxi", german: "Taxi", difficulty: "easy", example: "Ich nehme ein Taxi zum Flughafen, weil ich viel Gepäck habe.", exampleTranslation: "Biorę taxi na lotnisko, bo mam dużo bagażu." },
      { id: "trans6", polish: "Jechać", german: "Fahren", difficulty: "easy", example: "Wir fahren morgen früh mit dem Auto nach München für Urlaub.", exampleTranslation: "Jedziemy jutro rano samochodem do Monachium na urlop." },
      { id: "trans7", polish: "Kierowca", german: "Fahrer", difficulty: "medium", example: "Der Busfahrer fährt sehr vorsichtig und sicher durch den dichten Verkehr.", exampleTranslation: "Kierowca autobusu jeździ bardzo ostrożnie i bezpiecznie przez gęsty ruch." },
      { id: "trans8", polish: "Benzyna", german: "Benzin", difficulty: "medium", example: "Ich muss tanken, das Benzin wird knapp und die Tankstelle ist nah.", exampleTranslation: "Muszę zatankować, benzyna się kończy a stacja benzynowa jest blisko." },
      { id: "trans9", polish: "Parkować", german: "Parken", difficulty: "medium", example: "Es ist schwer einen Parkplatz im Zentrum zu finden zur Rushhour.", exampleTranslation: "Trudno znaleźć miejsce parkingowe w centrum w godzinach szczytu." },
      { id: "trans10", polish: "Przystanek", german: "Haltestelle", difficulty: "medium", example: "Die nächste Bushaltestelle ist nur zwei Minuten zu Fuß von hier.", exampleTranslation: "Następny przystanek autobusowy jest tylko dwie minuty pieszo stąd." },
      { id: "trans11", polish: "Rozkład jazdy", german: "Fahrplan", difficulty: "medium", example: "Ich schaue immer den Fahrplan online an vor der Reise zur Planung.", exampleTranslation: "Zawsze sprawdzam rozkład jazdy online przed podróżą do planowania." },
      { id: "trans12", polish: "Opóźnienie", german: "Verspätung", difficulty: "medium", example: "Der Zug hat zwanzig Minuten Verspätung wegen technischer Probleme leider.", exampleTranslation: "Pociąg ma dwadzieścia minut opóźnienia z powodu problemów technicznych niestety." },
      { id: "trans13", polish: "Jak dojechać?", german: "Wie komme ich hin?", difficulty: "hard", example: "Wie komme ich am besten zum Flughafen von hier aus schnell?", exampleTranslation: "Jak najlepiej dojechać na lotnisko stąd szybko?" },
      { id: "trans14", polish: "Gdzie jest przystanek?", german: "Wo ist die Haltestelle?", difficulty: "hard", example: "Entschuldigung, wo ist die nächste Bushaltestelle? Ich bin hier fremd.", exampleTranslation: "Przepraszam, gdzie jest najbliższy przystanek autobusowy? Jestem tu obcy." },
      { id: "trans15", polish: "Spóźnię się", german: "Ich werde zu spät kommen", difficulty: "hard", example: "Ich werde leider zu spät kommen wegen des dichten Verkehrs heute Morgen.", exampleTranslation: "Spóźnię się niestety z powodu gęstego ruchu dzisiaj rano." }
    ]
  },

  nature_animals: {
    name: "Przyroda i zwierzęta",
    description: "Natura, zwierzęta i środowisko naturalne",
    icon: TreePine,
    color: "from-green-500 to-teal-600",
    level: "beginner",
    words: [
      { id: "nat1", polish: "Drzewo", german: "Baum", difficulty: "easy", example: "Der alte Baum im Garten ist über hundert Jahre alt und sehr groß.", exampleTranslation: "Stare drzewo w ogrodzie ma ponad sto lat i jest bardzo duże." },
      { id: "nat2", polish: "Kwiat", german: "Blume", difficulty: "easy", example: "Im Frühling blühen überall schöne bunte Blumen in unserem Garten.", exampleTranslation: "Wiosną kwitną wszędzie piękne kolorowe kwiaty w naszym ogrodzie." },
      { id: "nat3", polish: "Pies", german: "Hund", difficulty: "easy", example: "Unser Hund ist sehr freundlich und spielt gerne mit Kindern draußen.", exampleTranslation: "Nasz pies jest bardzo przyjazny i lubi bawić się z dziećmi na zewnątrz." },
      { id: "nat4", polish: "Kot", german: "Katze", difficulty: "easy", example: "Die Katze schläft den ganzen Tag auf dem warmen Sofa im Wohnzimmer.", exampleTranslation: "Kot śpi cały dzień na ciepłej sofie w salonie." },
      { id: "nat5", polish: "Ptak", german: "Vogel", difficulty: "easy", example: "Viele bunte Vögel singen wunderschön jeden Morgen in den Bäumen.", exampleTranslation: "Wiele kolorowych ptaków śpiewa pięknie każdego ranka na drzewach." },
      { id: "nat6", polish: "Las", german: "Wald", difficulty: "easy", example: "Wir gehen oft spazieren im dichten grünen Wald in der Nähe.", exampleTranslation: "Często chodzimy na spacery w gęstym zielonym lesie w pobliżu." },
      { id: "nat7", polish: "Góra", german: "Berg", difficulty: "medium", example: "Die Berge in Bayern sind wunderschön und perfekt zum Wandern im Sommer.", exampleTranslation: "Góry w Bawarii są piękne i idealne do wędrówek latem." },
      { id: "nat8", polish: "Rzeka", german: "Fluss", difficulty: "medium", example: "Der Fluss fließt ruhig durch die Stadt und ist sehr malerisch schön.", exampleTranslation: "Rzeka płynie spokojnie przez miasto i jest bardzo malowniczo piękna." },
      { id: "nat9", polish: "Morze", german: "Meer", difficulty: "medium", example: "Im Sommer fahren wir immer ans Meer für erholsame Ferien mit Familie.", exampleTranslation: "Latem zawsze jedziemy nad morze na relaksujące wakacje z rodziną." },
      { id: "nat10", polish: "Plaża", german: "Strand", difficulty: "medium", example: "Der Strand ist wunderschön mit weißem Sand und klarem blauem Wasser.", exampleTranslation: "Plaża jest piękna z białym piaskiem i czystą niebieską wodą." },
      { id: "nat11", polish: "Jezioro", german: "See", difficulty: "medium", example: "Am See kann man schwimmen, Boot fahren und die Natur genießen.", exampleTranslation: "Nad jeziorem można pływać, pływać łódką i cieszyć się przyrodą." },
      { id: "nat12", polish: "Koń", german: "Pferd", difficulty: "medium", example: "Auf dem Bauernhof gibt es viele Pferde und andere Tiere überall.", exampleTranslation: "Na farmie jest wiele koni i innych zwierząt wszędzie." },
      { id: "nat13", polish: "Masz zwierzęta?", german: "Hast du Haustiere?", difficulty: "hard", example: "Hast du Haustiere zu Hause? Ich liebe Tiere und hätte gerne einen Hund!", exampleTranslation: "Masz zwierzęta w domu? Kocham zwierzęta i chciałbym mieć psa!" },
      { id: "nat14", polish: "Pójdźmy na spacer", german: "Lass uns spazieren gehen", difficulty: "hard", example: "Das Wetter ist so schön! Lass uns spazieren gehen im Park draußen!", exampleTranslation: "Pogoda jest taka piękna! Chodźmy na spacer w parku na zewnątrz!" },
      { id: "nat15", polish: "Uwielbiam przyrodę", german: "Ich liebe die Natur", difficulty: "hard", example: "Ich liebe die Natur und verbringe jedes Wochenende Zeit draußen wandernd!", exampleTranslation: "Uwielbiam przyrodę i spędzam każdy weekend czas na zewnątrz wędrując!" }
    ]
  },

  city_places: {
    name: "Miasto i miejsca",
    description: "Budynki miejskie i ważne lokalizacje",
    icon: Building,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { id: "city1", polish: "Miasto", german: "Stadt", difficulty: "easy", example: "Die Stadt ist groß und modern mit vielen interessanten Sehenswürdigkeiten überall.", exampleTranslation: "Miasto jest duże i nowoczesne z wieloma ciekawymi atrakcjami wszędzie." },
      { id: "city2", polish: "Centrum", german: "Zentrum", difficulty: "easy", example: "Im Zentrum gibt es viele Geschäfte, Restaurants und Cafés für Besucher.", exampleTranslation: "W centrum jest wiele sklepów, restauracji i kawiarni dla odwiedzających." },
      { id: "city3", polish: "Bank", german: "Bank", difficulty: "easy", example: "Ich muss zur Bank gehen, um Geld abzuheben für die Einkäufe.", exampleTranslation: "Muszę iść do banku, aby wypłacić pieniądze na zakupy." },
      { id: "city4", polish: "Poczta", german: "Post", difficulty: "easy", example: "Die Post ist montags bis freitags von acht bis achtzehn Uhr geöffnet.", exampleTranslation: "Poczta jest otwarta od poniedziałku do piątku od ósmej do osiemnastej." },
      { id: "city5", polish: "Apteka", german: "Apotheke", difficulty: "easy", example: "Die Apotheke ist gleich um die Ecke neben dem Supermarkt rechts.", exampleTranslation: "Apteka jest zaraz za rogiem obok supermarketu po prawej." },
      { id: "city6", polish: "Restauracja", german: "Restaurant", difficulty: "easy", example: "Dieses italienische Restaurant serviert das beste Essen in der ganzen Stadt!", exampleTranslation: "Ta włoska restauracja serwuje najlepsze jedzenie w całym mieście!" },
      { id: "city7", polish: "Kawiarnia", german: "Café", difficulty: "medium", example: "Wir treffen uns oft im gemütlichen Café am Marktplatz zum Plaudern.", exampleTranslation: "Często spotykamy się w przytulnej kawiarni na rynku na pogawędki." },
      { id: "city8", polish: "Muzeum", german: "Museum", difficulty: "medium", example: "Das Museum zeigt interessante Ausstellungen über die Geschichte der Stadt ausführlich.", exampleTranslation: "Muzeum pokazuje ciekawe wystawy o historii miasta szczegółowo." },
      { id: "city9", polish: "Kino", german: "Kino", difficulty: "medium", example: "Heute Abend gehen wir ins Kino, um den neuesten Film anzusehen.", exampleTranslation: "Dziś wieczorem idziemy do kina, aby obejrzeć najnowszy film." },
      { id: "city10", polish: "Park", german: "Park", difficulty: "medium", example: "Der Park ist wunderschön mit vielen Bäumen, Blumen und grünen Wiesen.", exampleTranslation: "Park jest piękny z wieloma drzewami, kwiatami i zielonymi łąkami." },
      { id: "city11", polish: "Biblioteka", german: "Bibliothek", difficulty: "medium", example: "Die Bibliothek hat tausende Bücher und ist still zum Lernen perfekt.", exampleTranslation: "Biblioteka ma tysiące książek i jest cicha do nauki idealnie." },
      { id: "city12", polish: "Teatr", german: "Theater", difficulty: "medium", example: "Das Theater zeigt klassische deutsche Stücke von berühmten Autoren oft.", exampleTranslation: "Teatr pokazuje klasyczne niemieckie sztuki od słynnych autorów często." },
      { id: "city13", polish: "Gdzie jest bank?", german: "Wo ist die Bank?", difficulty: "hard", example: "Entschuldigung, wo ist die nächste Bank? Ich muss Geld abheben dringend.", exampleTranslation: "Przepraszam, gdzie jest najbliższy bank? Muszę wypłacić pieniądze pilnie." },
      { id: "city14", polish: "Jak dojść do muzeum?", german: "Wie komme ich zum Museum?", difficulty: "hard", example: "Entschuldigen Sie bitte, wie komme ich am besten zum Kunstmuseum von hier?", exampleTranslation: "Przepraszam proszę, jak najlepiej dojść do muzeum sztuki stąd?" },
      { id: "city15", polish: "To piękne miasto", german: "Das ist eine schöne Stadt", difficulty: "hard", example: "Das ist wirklich eine wunderschöne Stadt mit viel Geschichte und Kultur überall!", exampleTranslation: "To naprawdę piękne miasto z dużą historią i kulturą wszędzie!" }
    ]
  }
};
