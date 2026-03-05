import { Hand, Users, Hash, Palette, UtensilsCrossed, MapPin, Shirt, Home, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Begrüßungen",
    description: "Grundlegende Grüße",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "gp_greet_1", german: "Hallo", polish: "Cześć", example: "Cześć, jak się masz?", exampleTranslation: "Hallo, wie geht's?" },
      { id: "gp_greet_2", german: "Guten Morgen", polish: "Dzień dobry", example: "Dzień dobry, panie", exampleTranslation: "Guten Morgen, mein Herr" },
      { id: "gp_greet_3", german: "Guten Abend", polish: "Dobry wieczór", example: "Dobry wieczór, jak się Pan ma?", exampleTranslation: "Guten Abend, wie geht es Ihnen?" },
      { id: "gp_greet_4", german: "Gute Nacht", polish: "Dobranoc", example: "Dobranoc, śpij dobrze", exampleTranslation: "Gute Nacht, schlaf gut" },
      { id: "gp_greet_5", german: "Auf Wiedersehen", polish: "Do widzenia", example: "Do widzenia, do zobaczenia", exampleTranslation: "Auf Wiedersehen, bis später" },
      { id: "gp_greet_6", german: "Danke", polish: "Dziękuję", example: "Dziękuję za pomoc", exampleTranslation: "Danke für die Hilfe" },
      { id: "gp_greet_7", german: "Bitte", polish: "Proszę", example: "Proszę, pomóż mi", exampleTranslation: "Bitte, hilf mir" },
      { id: "gp_greet_8", german: "Entschuldigung", polish: "Przepraszam", example: "Przepraszam, spóźniłem się", exampleTranslation: "Entschuldigung, ich bin zu spät" },
      { id: "gp_greet_9", german: "Ja", polish: "Tak", example: "Tak, zgadzam się", exampleTranslation: "Ja, ich stimme zu" },
      { id: "gp_greet_10", german: "Nein", polish: "Nie", example: "Nie, nie chcę", exampleTranslation: "Nein, ich will nicht" }
    ]
  },

  family: {
    name: "Familie",
    description: "Familienmitglieder",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "gp_fam_1", german: "Vater", polish: "Ojciec", example: "Mój ojciec pracuje dużo", exampleTranslation: "Mein Vater arbeitet viel" },
      { id: "gp_fam_2", german: "Mutter", polish: "Matka", example: "Moja matka dobrze gotuje", exampleTranslation: "Meine Mutter kocht gut" },
      { id: "gp_fam_3", german: "Bruder", polish: "Brat", example: "Mój brat studiuje medycynę", exampleTranslation: "Mein Bruder studiert Medizin" },
      { id: "gp_fam_4", german: "Schwester", polish: "Siostra", example: "Moja siostra jest nauczycielką", exampleTranslation: "Meine Schwester ist Lehrerin" },
      { id: "gp_fam_5", german: "Sohn", polish: "Syn", example: "Mój syn ma dziesięć lat", exampleTranslation: "Mein Sohn ist zehn Jahre alt" },
      { id: "gp_fam_6", german: "Tochter", polish: "Córka", example: "Moja córka chodzi na uniwersytet", exampleTranslation: "Meine Tochter geht zur Universität" },
      { id: "gp_fam_7", german: "Großvater", polish: "Dziadek", example: "Mój dziadek jest bardzo mądry", exampleTranslation: "Mein Großvater ist sehr weise" },
      { id: "gp_fam_8", german: "Großmutter", polish: "Babcia", example: "Moja babcia piecze ciasta", exampleTranslation: "Meine Großmutter backt Kuchen" },
      { id: "gp_fam_9", german: "Onkel", polish: "Wujek", example: "Mój wujek mieszka w Warszawie", exampleTranslation: "Mein Onkel lebt in Warschau" },
      { id: "gp_fam_10", german: "Tante", polish: "Ciocia", example: "Moja ciocia jest bardzo miła", exampleTranslation: "Meine Tante ist sehr freundlich" }
    ]
  },

  numbers: {
    name: "Zahlen",
    description: "Grundzahlen",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "gp_num_1", german: "Eins", polish: "Jeden", example: "Mam jednego brata", exampleTranslation: "Ich habe einen Bruder" },
      { id: "gp_num_2", german: "Zwei", polish: "Dwa", example: "Są dwa koty", exampleTranslation: "Es gibt zwei Katzen" },
      { id: "gp_num_3", german: "Drei", polish: "Trzy", example: "Jest trzecia godzina", exampleTranslation: "Es ist drei Uhr" },
      { id: "gp_num_4", german: "Vier", polish: "Cztery", example: "Cztery pory roku", exampleTranslation: "Vier Jahreszeiten" },
      { id: "gp_num_5", german: "Fünf", polish: "Pięć", example: "Pięć palców u ręki", exampleTranslation: "Fünf Finger an der Hand" },
      { id: "gp_num_6", german: "Sechs", polish: "Sześć", example: "Mój syn ma sześć lat", exampleTranslation: "Mein Sohn ist sechs Jahre alt" },
      { id: "gp_num_7", german: "Sieben", polish: "Siedem", example: "Siedem dni tygodnia", exampleTranslation: "Sieben Tage der Woche" },
      { id: "gp_num_8", german: "Acht", polish: "Osiem", example: "Pracuję osiem godzin", exampleTranslation: "Ich arbeite acht Stunden" },
      { id: "gp_num_9", german: "Neun", polish: "Dziewięć", example: "Jest dziewiąta rano", exampleTranslation: "Es ist neun Uhr morgens" },
      { id: "gp_num_10", german: "Zehn", polish: "Dziesięć", example: "Dziesięć euro, proszę", exampleTranslation: "Zehn Euro, bitte" }
    ]
  },

  colors: {
    name: "Farben",
    description: "Grundfarben",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "gp_col_1", german: "Rot", polish: "Czerwony", example: "Samochód jest czerwony", exampleTranslation: "Das Auto ist rot" },
      { id: "gp_col_2", german: "Blau", polish: "Niebieski", example: "Niebo jest niebieskie", exampleTranslation: "Der Himmel ist blau" },
      { id: "gp_col_3", german: "Grün", polish: "Zielony", example: "Trawa jest zielona", exampleTranslation: "Das Gras ist grün" },
      { id: "gp_col_4", german: "Gelb", polish: "Żółty", example: "Słońce jest żółte", exampleTranslation: "Die Sonne ist gelb" },
      { id: "gp_col_5", german: "Schwarz", polish: "Czarny", example: "Mój kot jest czarny", exampleTranslation: "Meine Katze ist schwarz" },
      { id: "gp_col_6", german: "Weiß", polish: "Biały", example: "Śnieg jest biały", exampleTranslation: "Der Schnee ist weiß" },
      { id: "gp_col_7", german: "Orange", polish: "Pomarańczowy", example: "Pomarańcza jest pomarańczowa", exampleTranslation: "Die Orange ist orange" },
      { id: "gp_col_8", german: "Rosa", polish: "Różowy", example: "Sukienka jest różowa", exampleTranslation: "Das Kleid ist rosa" },
      { id: "gp_col_9", german: "Braun", polish: "Brązowy", example: "Niedźwiedź jest brązowy", exampleTranslation: "Der Bär ist braun" },
      { id: "gp_col_10", german: "Grau", polish: "Szary", example: "Słoń jest szary", exampleTranslation: "Der Elefant ist grau" }
    ]
  },

  food: {
    name: "Essen",
    description: "Lebensmittel",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "gp_food_1", german: "Brot", polish: "Chleb", example: "Chleb jest świeży", exampleTranslation: "Das Brot ist frisch" },
      { id: "gp_food_2", german: "Wasser", polish: "Woda", example: "Szklanka wody, proszę", exampleTranslation: "Ein Glas Wasser, bitte" },
      { id: "gp_food_3", german: "Kaffee", polish: "Kawa", example: "Lubię kawę", exampleTranslation: "Ich mag Kaffee" },
      { id: "gp_food_4", german: "Milch", polish: "Mleko", example: "Mleko jest świeże", exampleTranslation: "Die Milch ist frisch" },
      { id: "gp_food_5", german: "Fleisch", polish: "Mięso", example: "Mięso jest pyszne", exampleTranslation: "Das Fleisch ist köstlich" },
      { id: "gp_food_6", german: "Fisch", polish: "Ryba", example: "Ryba jest bardzo zdrowa", exampleTranslation: "Fisch ist sehr gesund" },
      { id: "gp_food_7", german: "Obst", polish: "Owoce", example: "Jem owoce codziennie", exampleTranslation: "Ich esse jeden Tag Obst" },
      { id: "gp_food_8", german: "Gemüse", polish: "Warzywa", example: "Warzywa są ważne", exampleTranslation: "Gemüse ist wichtig" },
      { id: "gp_food_9", german: "Käse", polish: "Ser", example: "Niemiecki ser jest pyszny", exampleTranslation: "Deutscher Käse ist köstlich" },
      { id: "gp_food_10", german: "Ei", polish: "Jajko", example: "Jem jajka na śniadanie", exampleTranslation: "Ich esse Eier zum Frühstück" }
    ]
  },

  places: {
    name: "Orte",
    description: "Standorte",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "gp_place_1", german: "Geschäft", polish: "Sklep", example: "Sklep jest otwarty", exampleTranslation: "Das Geschäft ist offen" },
      { id: "gp_place_2", german: "Schule", polish: "Szkoła", example: "Idę do szkoły", exampleTranslation: "Ich gehe zur Schule" },
      { id: "gp_place_3", german: "Krankenhaus", polish: "Szpital", example: "Szpital jest blisko", exampleTranslation: "Das Krankenhaus ist in der Nähe" },
      { id: "gp_place_4", german: "Park", polish: "Park", example: "Dzieci bawią się w parku", exampleTranslation: "Kinder spielen im Park" },
      { id: "gp_place_5", german: "Restaurant", polish: "Restauracja", example: "Jemy w restauracji", exampleTranslation: "Wir essen im Restaurant" },
      { id: "gp_place_6", german: "Hotel", polish: "Hotel", example: "Hotel jest bardzo duży", exampleTranslation: "Das Hotel ist sehr groß" },
      { id: "gp_place_7", german: "Bank", polish: "Bank", example: "Idę do banku", exampleTranslation: "Ich gehe zur Bank" },
      { id: "gp_place_8", german: "Flughafen", polish: "Lotnisko", example: "Jestem na lotnisku", exampleTranslation: "Ich bin am Flughafen" },
      { id: "gp_place_9", german: "Bahnhof", polish: "Dworzec", example: "Dworzec kolejowy", exampleTranslation: "Der Bahnhof" },
      { id: "gp_place_10", german: "Museum", polish: "Muzeum", example: "Muzeum jest interesujące", exampleTranslation: "Das Museum ist interessant" }
    ]
  },

  clothing: {
    name: "Kleidung",
    description: "Kleidungsstücke",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "gp_cloth_1", german: "Hemd", polish: "Koszula", example: "Podoba mi się twoja koszula", exampleTranslation: "Ich mag dein Hemd" },
      { id: "gp_cloth_2", german: "Hose", polish: "Spodnie", example: "Potrzebuję nowych spodni", exampleTranslation: "Ich brauche neue Hosen" },
      { id: "gp_cloth_3", german: "Schuhe", polish: "Buty", example: "Kupiłem czarne buty", exampleTranslation: "Ich kaufte schwarze Schuhe" },
      { id: "gp_cloth_4", german: "Kleid", polish: "Sukienka", example: "Sukienka jest piękna", exampleTranslation: "Das Kleid ist schön" },
      { id: "gp_cloth_5", german: "Jacke", polish: "Kurtka", example: "Potrzebuję kurtki", exampleTranslation: "Ich brauche eine Jacke" },
      { id: "gp_cloth_6", german: "Hut", polish: "Kapelusz", example: "Załóż kapelusz", exampleTranslation: "Setz den Hut auf" },
      { id: "gp_cloth_7", german: "Socken", polish: "Skarpetki", example: "Moje skarpetki są czyste", exampleTranslation: "Meine Socken sind sauber" },
      { id: "gp_cloth_8", german: "Handschuhe", polish: "Rękawiczki", example: "Noszę rękawiczki zimą", exampleTranslation: "Ich trage im Winter Handschuhe" },
      { id: "gp_cloth_9", german: "Schal", polish: "Szalik", example: "Szalik jest miękki", exampleTranslation: "Der Schal ist weich" },
      { id: "gp_cloth_10", german: "Mantel", polish: "Płaszcz", example: "Płaszcz jest ciepły", exampleTranslation: "Der Mantel ist warm" }
    ]
  },

  house: {
    name: "Haus",
    description: "Haushaltsgegenstände",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "gp_house_1", german: "Haus", polish: "Dom", example: "Mój dom jest duży", exampleTranslation: "Mein Haus ist groß" },
      { id: "gp_house_2", german: "Zimmer", polish: "Pokój", example: "Pokój jest czysty", exampleTranslation: "Das Zimmer ist sauber" },
      { id: "gp_house_3", german: "Küche", polish: "Kuchnia", example: "Gotuję w kuchni", exampleTranslation: "Ich koche in der Küche" },
      { id: "gp_house_4", german: "Badezimmer", polish: "Łazienka", example: "Łazienka jest nowa", exampleTranslation: "Das Badezimmer ist neu" },
      { id: "gp_house_5", german: "Schlafzimmer", polish: "Sypialnia", example: "Moja sypialnia jest wygodna", exampleTranslation: "Mein Schlafzimmer ist gemütlich" },
      { id: "gp_house_6", german: "Tür", polish: "Drzwi", example: "Zamknij drzwi", exampleTranslation: "Schließ die Tür" },
      { id: "gp_house_7", german: "Fenster", polish: "Okno", example: "Otwórz okno", exampleTranslation: "Öffne das Fenster" },
      { id: "gp_house_8", german: "Tisch", polish: "Stół", example: "Stół jest drewniany", exampleTranslation: "Der Tisch ist aus Holz" },
      { id: "gp_house_9", german: "Stuhl", polish: "Krzesło", example: "Krzesło jest wygodne", exampleTranslation: "Der Stuhl ist bequem" },
      { id: "gp_house_10", german: "Bett", polish: "Łóżko", example: "Łóżko jest miękkie", exampleTranslation: "Das Bett ist weich" }
    ]
  },

  work: {
    name: "Arbeit",
    description: "Berufe",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "gp_work_1", german: "Arbeit", polish: "Praca", example: "Idę do pracy", exampleTranslation: "Ich gehe zur Arbeit" },
      { id: "gp_work_2", german: "Arzt", polish: "Lekarz", example: "On jest lekarzem", exampleTranslation: "Er ist Arzt" },
      { id: "gp_work_3", german: "Lehrer", polish: "Nauczyciel", example: "Mój nauczyciel jest świetny", exampleTranslation: "Mein Lehrer ist ausgezeichnet" },
      { id: "gp_work_4", german: "Ingenieur", polish: "Inżynier", example: "Jestem inżynierem", exampleTranslation: "Ich bin Ingenieur" },
      { id: "gp_work_5", german: "Anwalt", polish: "Prawnik", example: "Ona jest prawnikiem", exampleTranslation: "Sie ist Anwältin" },
      { id: "gp_work_6", german: "Koch", polish: "Kucharz", example: "Kucharz przygotowuje jedzenie", exampleTranslation: "Der Koch bereitet das Essen zu" },
      { id: "gp_work_7", german: "Kellner", polish: "Kelner", example: "Kelner jest miły", exampleTranslation: "Der Kellner ist freundlich" },
      { id: "gp_work_8", german: "Verkäufer", polish: "Sprzedawca", example: "Sprzedawca pomaga klientowi", exampleTranslation: "Der Verkäufer hilft dem Kunden" },
      { id: "gp_work_9", german: "Polizist", polish: "Policjant", example: "Policjant chroni miasto", exampleTranslation: "Der Polizist schützt die Stadt" },
      { id: "gp_work_10", german: "Mechaniker", polish: "Mechanik", example: "Mechanik naprawia samochody", exampleTranslation: "Der Mechaniker repariert Autos" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transportmittel",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "gp_trans_1", german: "Auto", polish: "Samochód", example: "Mam nowy samochód", exampleTranslation: "Ich habe ein neues Auto" },
      { id: "gp_trans_2", german: "Bus", polish: "Autobus", example: "Jadę autobusem", exampleTranslation: "Ich fahre mit dem Bus" },
      { id: "gp_trans_3", german: "Zug", polish: "Pociąg", example: "Pociąg jest szybki", exampleTranslation: "Der Zug ist schnell" },
      { id: "gp_trans_4", german: "Flugzeug", polish: "Samolot", example: "Podróżuję samolotem", exampleTranslation: "Ich fliege mit dem Flugzeug" },
      { id: "gp_trans_5", german: "Fahrrad", polish: "Rower", example: "Jeżdżę na rowerze", exampleTranslation: "Ich fahre Fahrrad" },
      { id: "gp_trans_6", german: "Taxi", polish: "Taksówka", example: "Wzywam taksówkę", exampleTranslation: "Ich rufe ein Taxi" },
      { id: "gp_trans_7", german: "U-Bahn", polish: "Metro", example: "Korzystam z metra", exampleTranslation: "Ich benutze die U-Bahn" },
      { id: "gp_trans_8", german: "Motorrad", polish: "Motocykl", example: "Mój motocykl jest czerwony", exampleTranslation: "Mein Motorrad ist rot" },
      { id: "gp_trans_9", german: "Boot", polish: "Łódź", example: "Pływamy łodzią", exampleTranslation: "Wir fahren mit dem Boot" },
      { id: "gp_trans_10", german: "Fahrkarte", polish: "Bilet", example: "Kupuję bilet", exampleTranslation: "Ich kaufe eine Fahrkarte" }
    ]
  },

  education: {
    name: "Bildung",
    description: "Schule",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "gp_edu_1", german: "Schüler", polish: "Uczeń", example: "Jestem uczniem", exampleTranslation: "Ich bin Schüler" },
      { id: "gp_edu_2", german: "Lehrer", polish: "Nauczyciel", example: "Nauczyciel uczy dobrze", exampleTranslation: "Der Lehrer unterrichtet gut" },
      { id: "gp_edu_3", german: "Buch", polish: "Książka", example: "Czytam książkę", exampleTranslation: "Ich lese ein Buch" },
      { id: "gp_edu_4", german: "Bleistift", polish: "Ołówek", example: "Masz ołówek?", exampleTranslation: "Hast du einen Bleistift?" },
      { id: "gp_edu_5", german: "Heft", polish: "Zeszyt", example: "Potrzebuję zeszytu", exampleTranslation: "Ich brauche ein Heft" },
      { id: "gp_edu_6", german: "Prüfung", polish: "Egzamin", example: "Egzamin jest jutro", exampleTranslation: "Die Prüfung ist morgen" },
      { id: "gp_edu_7", german: "Hausaufgaben", polish: "Praca domowa", example: "Mam dużo pracy domowej", exampleTranslation: "Ich habe viele Hausaufgaben" },
      { id: "gp_edu_8", german: "Unterricht", polish: "Lekcja", example: "Lekcja zaczyna się o dziewiątej", exampleTranslation: "Der Unterricht beginnt um neun" },
      { id: "gp_edu_9", german: "Bibliothek", polish: "Biblioteka", example: "Uczę się w bibliotece", exampleTranslation: "Ich lerne in der Bibliothek" },
      { id: "gp_edu_10", german: "Rucksack", polish: "Plecak", example: "Mój plecak jest ciężki", exampleTranslation: "Mein Rucksack ist schwer" }
    ]
  },

  nature: {
    name: "Natur",
    description: "Natur",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "gp_nature_1", german: "Baum", polish: "Drzewo", example: "Drzewo jest wysokie", exampleTranslation: "Der Baum ist hoch" },
      { id: "gp_nature_2", german: "Blume", polish: "Kwiat", example: "Kwiat jest piękny", exampleTranslation: "Die Blume ist schön" },
      { id: "gp_nature_3", german: "Berg", polish: "Góra", example: "Góra jest wysoka", exampleTranslation: "Der Berg ist hoch" },
      { id: "gp_nature_4", german: "Fluss", polish: "Rzeka", example: "Rzeka jest długa", exampleTranslation: "Der Fluss ist lang" },
      { id: "gp_nature_5", german: "Meer", polish: "Morze", example: "Morze jest niebieskie", exampleTranslation: "Das Meer ist blau" },
      { id: "gp_nature_6", german: "Wald", polish: "Las", example: "Chodzimy po lesie", exampleTranslation: "Wir gehen durch den Wald" },
      { id: "gp_nature_7", german: "See", polish: "Jezioro", example: "Jezioro jest spokojne", exampleTranslation: "Der See ist ruhig" },
      { id: "gp_nature_8", german: "Himmel", polish: "Niebo", example: "Niebo jest niebieskie", exampleTranslation: "Der Himmel ist blau" },
      { id: "gp_nature_9", german: "Stern", polish: "Gwiazda", example: "Gwiazdy świecą", exampleTranslation: "Die Sterne leuchten" },
      { id: "gp_nature_10", german: "Mond", polish: "Księżyc", example: "Księżyc jest w pełni", exampleTranslation: "Der Mond ist voll" }
    ]
  },

  emotions: {
    name: "Emotionen",
    description: "Gefühle",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "gp_emo_1", german: "Glücklich", polish: "Szczęśliwy", example: "Jestem szczęśliwy", exampleTranslation: "Ich bin glücklich" },
      { id: "gp_emo_2", german: "Traurig", polish: "Smutny", example: "On jest smutny", exampleTranslation: "Er ist traurig" },
      { id: "gp_emo_3", german: "Wütend", polish: "Zły", example: "Ona jest zła", exampleTranslation: "Sie ist wütend" },
      { id: "gp_emo_4", german: "Müde", polish: "Zmęczony", example: "Jestem zmęczony", exampleTranslation: "Ich bin müde" },
      { id: "gp_emo_5", german: "Aufgeregt", polish: "Podekscytowany", example: "Jesteśmy podekscytowani", exampleTranslation: "Wir sind aufgeregt" },
      { id: "gp_emo_6", german: "Nervös", polish: "Zdenerwowany", example: "On jest zdenerwowany", exampleTranslation: "Er ist nervös" },
      { id: "gp_emo_7", german: "Ruhig", polish: "Spokojny", example: "Ona jest spokojna", exampleTranslation: "Sie ist ruhig" },
      { id: "gp_emo_8", german: "Überrascht", polish: "Zaskoczony", example: "Jestem zaskoczony", exampleTranslation: "Ich bin überrascht" },
      { id: "gp_emo_9", german: "Ängstlich", polish: "Przestraszony", example: "Dziecko jest przestraszone", exampleTranslation: "Das Kind hat Angst" },
      { id: "gp_emo_10", german: "Gelangweilt", polish: "Znudzony", example: "Są znudzeni", exampleTranslation: "Sie sind gelangweilt" }
    ]
  },

  time: {
    name: "Zeit",
    description: "Zeitausdrücke",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "gp_time_1", german: "Heute", polish: "Dziś", example: "Dziś jest poniedziałek", exampleTranslation: "Heute ist Montag" },
      { id: "gp_time_2", german: "Gestern", polish: "Wczoraj", example: "Wczoraj była niedziela", exampleTranslation: "Gestern war Sonntag" },
      { id: "gp_time_3", german: "Morgen", polish: "Jutro", example: "Jutro jest wtorek", exampleTranslation: "Morgen ist Dienstag" },
      { id: "gp_time_4", german: "Jetzt", polish: "Teraz", example: "Pracuję teraz", exampleTranslation: "Ich arbeite jetzt" },
      { id: "gp_time_5", german: "Später", polish: "Później", example: "Zrobię to później", exampleTranslation: "Ich mache es später" },
      { id: "gp_time_6", german: "Morgen", polish: "Rano", example: "Dzień dobry", exampleTranslation: "Guten Morgen" },
      { id: "gp_time_7", german: "Mittag", polish: "Południe", example: "Jest południe", exampleTranslation: "Es ist Mittag" },
      { id: "gp_time_8", german: "Abend", polish: "Wieczór", example: "Dobry wieczór", exampleTranslation: "Guten Abend" },
      { id: "gp_time_9", german: "Nacht", polish: "Noc", example: "Dobranoc", exampleTranslation: "Gute Nacht" },
      { id: "gp_time_10", german: "Woche", polish: "Tydzień", example: "Następny tydzień", exampleTranslation: "Nächste Woche" }
    ]
  },

  weather: {
    name: "Wetter",
    description: "Wetter",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "gp_weather_1", german: "Sonne", polish: "Słońce", example: "Słońce świeci", exampleTranslation: "Die Sonne scheint" },
      { id: "gp_weather_2", german: "Regen", polish: "Deszcz", example: "Pada deszcz", exampleTranslation: "Es regnet" },
      { id: "gp_weather_3", german: "Schnee", polish: "Śnieg", example: "Pada śnieg", exampleTranslation: "Es schneit" },
      { id: "gp_weather_4", german: "Wind", polish: "Wiatr", example: "Wieje wiatr", exampleTranslation: "Es ist windig" },
      { id: "gp_weather_5", german: "Wolke", polish: "Chmura", example: "Na niebie są chmury", exampleTranslation: "Es gibt Wolken am Himmel" },
      { id: "gp_weather_6", german: "Gewitter", polish: "Burza", example: "Nadchodzi burza", exampleTranslation: "Ein Gewitter kommt" },
      { id: "gp_weather_7", german: "Heiß", polish: "Gorąco", example: "Jest bardzo gorąco", exampleTranslation: "Es ist sehr heiß" },
      { id: "gp_weather_8", german: "Kalt", polish: "Zimno", example: "Zimą jest zimno", exampleTranslation: "Im Winter ist es kalt" },
      { id: "gp_weather_9", german: "Blitz", polish: "Błyskawica", example: "Widziałem błyskawicę", exampleTranslation: "Ich sah einen Blitz" },
      { id: "gp_weather_10", german: "Donner", polish: "Grzmot", example: "Słychać grzmot", exampleTranslation: "Man hört den Donner" }
    ]
  },

  body: {
    name: "Körper",
    description: "Körperteile",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "gp_body_1", german: "Kopf", polish: "Głowa", example: "Boli mnie głowa", exampleTranslation: "Mein Kopf tut weh" },
      { id: "gp_body_2", german: "Auge", polish: "Oko", example: "Mam niebieskie oczy", exampleTranslation: "Ich habe blaue Augen" },
      { id: "gp_body_3", german: "Nase", polish: "Nos", example: "Mój nos jest zimny", exampleTranslation: "Meine Nase ist kalt" },
      { id: "gp_body_4", german: "Mund", polish: "Usta", example: "Otwórz usta", exampleTranslation: "Öffne den Mund" },
      { id: "gp_body_5", german: "Ohr", polish: "Ucho", example: "Moje uszy są duże", exampleTranslation: "Meine Ohren sind groß" },
      { id: "gp_body_6", german: "Hand", polish: "Ręka", example: "Daj mi rękę", exampleTranslation: "Gib mir die Hand" },
      { id: "gp_body_7", german: "Fuß", polish: "Stopa", example: "Boli mnie stopa", exampleTranslation: "Mein Fuß tut weh" },
      { id: "gp_body_8", german: "Arm", polish: "Ramię", example: "Podnieś ramię", exampleTranslation: "Hebe den Arm" },
      { id: "gp_body_9", german: "Bein", polish: "Noga", example: "Moje nogi są zmęczone", exampleTranslation: "Meine Beine sind müde" },
      { id: "gp_body_10", german: "Herz", polish: "Serce", example: "Moje serce bije szybko", exampleTranslation: "Mein Herz schlägt schnell" }
    ]
  },

  activities: {
    name: "Aktivitäten",
    description: "Tägliche Aktivitäten",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "gp_act_1", german: "Essen", polish: "Jeść", example: "Będę jeść", exampleTranslation: "Ich werde essen" },
      { id: "gp_act_2", german: "Trinken", polish: "Pić", example: "Piję wodę", exampleTranslation: "Ich trinke Wasser" },
      { id: "gp_act_3", german: "Schlafen", polish: "Spać", example: "Muszę spać", exampleTranslation: "Ich muss schlafen" },
      { id: "gp_act_4", german: "Laufen", polish: "Biegać", example: "Biegam rano", exampleTranslation: "Ich laufe morgens" },
      { id: "gp_act_5", german: "Lesen", polish: "Czytać", example: "Czytam książkę", exampleTranslation: "Ich lese ein Buch" },
      { id: "gp_act_6", german: "Schreiben", polish: "Pisać", example: "Piszę list", exampleTranslation: "Ich schreibe einen Brief" },
      { id: "gp_act_7", german: "Sprechen", polish: "Mówić", example: "Mówię po polsku", exampleTranslation: "Ich spreche Polnisch" },
      { id: "gp_act_8", german: "Hören", polish: "Słuchać", example: "Słucham muzyki", exampleTranslation: "Ich höre Musik" },
      { id: "gp_act_9", german: "Sehen", polish: "Patrzeć", example: "Oglądam telewizję", exampleTranslation: "Ich sehe fern" },
      { id: "gp_act_10", german: "Denken", polish: "Myśleć", example: "Myślę o tobie", exampleTranslation: "Ich denke an dich" }
    ]
  },

  learning: {
    name: "Lernen",
    description: "Lernaktivitäten",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "gp_learn_1", german: "Lernen", polish: "Uczyć się", example: "Uczę się polskiego", exampleTranslation: "Ich lerne Polnisch" },
      { id: "gp_learn_2", german: "Studieren", polish: "Studiować", example: "Studiuję na uniwersytecie", exampleTranslation: "Ich studiere an der Universität" },
      { id: "gp_learn_3", german: "Lehren", polish: "Uczyć", example: "Uczę niemieckiego", exampleTranslation: "Ich unterrichte Deutsch" },
      { id: "gp_learn_4", german: "Verstehen", polish: "Rozumieć", example: "Rozumiem lekcję", exampleTranslation: "Ich verstehe die Lektion" },
      { id: "gp_learn_5", german: "Üben", polish: "Ćwiczyć", example: "Ćwiczę codziennie", exampleTranslation: "Ich übe jeden Tag" },
      { id: "gp_learn_6", german: "Wiederholen", polish: "Powtarzać", example: "Powtórz słowo", exampleTranslation: "Wiederhole das Wort" },
      { id: "gp_learn_7", german: "Erklären", polish: "Wyjaśniać", example: "Nauczyciel dobrze wyjaśnia", exampleTranslation: "Der Lehrer erklärt gut" },
      { id: "gp_learn_8", german: "Fragen", polish: "Pytać", example: "Pytam nauczyciela", exampleTranslation: "Ich frage den Lehrer" },
      { id: "gp_learn_9", german: "Antworten", polish: "Odpowiadać", example: "Odpowiadam na pytanie", exampleTranslation: "Ich beantworte die Frage" },
      { id: "gp_learn_10", german: "Merken", polish: "Zapamiętać", example: "Zapamiętałem lekcję", exampleTranslation: "Ich erinnere mich an die Lektion" }
    ]
  },

  sports: {
    name: "Sport",
    description: "Sportarten",
    icon: Dumbbell,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "gp_sport_1", german: "Fußball", polish: "Piłka nożna", example: "Gram w piłkę nożną", exampleTranslation: "Ich spiele Fußball" },
      { id: "gp_sport_2", german: "Basketball", polish: "Koszykówka", example: "Lubię koszykówkę", exampleTranslation: "Ich mag Basketball" },
      { id: "gp_sport_3", german: "Tennis", polish: "Tenis", example: "Gram w tenisa", exampleTranslation: "Ich spiele Tennis" },
      { id: "gp_sport_4", german: "Schwimmen", polish: "Pływanie", example: "Pływanie jest zdrowe", exampleTranslation: "Schwimmen ist gesund" },
      { id: "gp_sport_5", german: "Laufen", polish: "Bieganie", example: "Biegam rano", exampleTranslation: "Ich laufe morgens" },
      { id: "gp_sport_6", german: "Radfahren", polish: "Kolarstwo", example: "Lubię kolarstwo", exampleTranslation: "Ich mag Radfahren" },
      { id: "gp_sport_7", german: "Fitnessstudio", polish: "Siłownia", example: "Chodzę na siłownię", exampleTranslation: "Ich gehe ins Fitnessstudio" },
      { id: "gp_sport_8", german: "Training", polish: "Trening", example: "Mam dzisiaj trening", exampleTranslation: "Ich habe heute Training" },
      { id: "gp_sport_9", german: "Mannschaft", polish: "Drużyna", example: "Jestem w drużynie", exampleTranslation: "Ich bin in einer Mannschaft" },
      { id: "gp_sport_10", german: "Trainer", polish: "Trener", example: "Nasz trener jest świetny", exampleTranslation: "Unser Trainer ist ausgezeichnet" }
    ]
  },

  travel: {
    name: "Reisen",
    description: "Tourismus",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "gp_travel_1", german: "Reise", polish: "Podróż", example: "Jadę w podróż", exampleTranslation: "Ich mache eine Reise" },
      { id: "gp_travel_2", german: "Koffer", polish: "Walizka", example: "Moja walizka jest ciężka", exampleTranslation: "Mein Koffer ist schwer" },
      { id: "gp_travel_3", german: "Reisepass", polish: "Paszport", example: "Potrzebuję paszportu", exampleTranslation: "Ich brauche meinen Reisepass" },
      { id: "gp_travel_4", german: "Hotel", polish: "Hotel", example: "Hotel jest wygodny", exampleTranslation: "Das Hotel ist komfortabel" },
      { id: "gp_travel_5", german: "Reservierung", polish: "Rezerwacja", example: "Mam rezerwację", exampleTranslation: "Ich habe eine Reservierung" },
      { id: "gp_travel_6", german: "Tourist", polish: "Turysta", example: "Jestem turystą", exampleTranslation: "Ich bin Tourist" },
      { id: "gp_travel_7", german: "Urlaub", polish: "Wakacje", example: "Jestem na wakacjach", exampleTranslation: "Ich bin im Urlaub" },
      { id: "gp_travel_8", german: "Besichtigung", polish: "Zwiedzanie", example: "Robimy zwiedzanie", exampleTranslation: "Wir machen eine Besichtigung" },
      { id: "gp_travel_9", german: "Reiseführer", polish: "Przewodnik", example: "Przewodnik jest pouczający", exampleTranslation: "Der Reiseführer ist informativ" },
      { id: "gp_travel_10", german: "Souvenir", polish: "Pamiątka", example: "Kupuję pamiątkę", exampleTranslation: "Ich kaufe ein Souvenir" }
    ]
  },

  entertainment: {
    name: "Unterhaltung",
    description: "Freizeit",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "gp_ent_1", german: "Musik", polish: "Muzyka", example: "Słucham muzyki", exampleTranslation: "Ich höre Musik" },
      { id: "gp_ent_2", german: "Film", polish: "Film", example: "Oglądam film", exampleTranslation: "Ich sehe einen Film" },
      { id: "gp_ent_3", german: "Konzert", polish: "Koncert", example: "Idę na koncert", exampleTranslation: "Ich gehe zu einem Konzert" },
      { id: "gp_ent_4", german: "Theater", polish: "Teatr", example: "Idę do teatru", exampleTranslation: "Ich gehe ins Theater" },
      { id: "gp_ent_5", german: "Tanzen", polish: "Tańczyć", example: "Lubię tańczyć", exampleTranslation: "Ich tanze gern" },
      { id: "gp_ent_6", german: "Singen", polish: "Śpiewać", example: "Lubię śpiewać", exampleTranslation: "Ich singe gern" },
      { id: "gp_ent_7", german: "Gitarre", polish: "Gitara", example: "Gram na gitarze", exampleTranslation: "Ich spiele Gitarre" },
      { id: "gp_ent_8", german: "Spiele", polish: "Gry", example: "Gram w gry wideo", exampleTranslation: "Ich spiele Videospiele" },
      { id: "gp_ent_9", german: "Fotografie", polish: "Fotografia", example: "Interesuję się fotografią", exampleTranslation: "Ich interessiere mich für Fotografie" },
      { id: "gp_ent_10", german: "Lesen", polish: "Czytanie", example: "Czytanie jest moim hobby", exampleTranslation: "Lesen ist mein Hobby" }
    ]
  }
};

export default flashcardsCategories;