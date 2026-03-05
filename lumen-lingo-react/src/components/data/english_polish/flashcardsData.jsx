/**
 * ENGLISH → POLISH FLASHCARDS
 * 
 * Native Language: English
 * Target Language: Polish (Polski)
 */

import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Greetings",
    description: "Basic greetings",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_greet_1", english: "Hello", polish: "Cześć", example: "Cześć, jak się masz?", exampleTranslation: "Hello, how are you?" },
      { id: "ep_greet_2", english: "Good morning", polish: "Dzień dobry", example: "Dzień dobry, panie", exampleTranslation: "Good morning, sir" },
      { id: "ep_greet_3", english: "Good evening", polish: "Dobry wieczór", example: "Dobry wieczór, jak się masz?", exampleTranslation: "Good evening, how are you?" },
      { id: "ep_greet_4", english: "Good night", polish: "Dobranoc", example: "Dobranoc, śpij dobrze", exampleTranslation: "Good night, sleep well" },
      { id: "ep_greet_5", english: "Goodbye", polish: "Do widzenia", example: "Do widzenia, do zobaczenia", exampleTranslation: "Goodbye, see you later" },
      { id: "ep_greet_6", english: "Thank you", polish: "Dziękuję", example: "Dziękuję za pomoc", exampleTranslation: "Thank you for your help" },
      { id: "ep_greet_7", english: "Please", polish: "Proszę", example: "Proszę, pomóż mi", exampleTranslation: "Please, help me" },
      { id: "ep_greet_8", english: "Excuse me", polish: "Przepraszam", example: "Przepraszam, spóźniłem się", exampleTranslation: "Excuse me, I'm late" },
      { id: "ep_greet_9", english: "Yes", polish: "Tak", example: "Tak, zgadzam się", exampleTranslation: "Yes, I agree" },
      { id: "ep_greet_10", english: "No", polish: "Nie", example: "Nie, nie chcę", exampleTranslation: "No, I don't want" }
    ]
  },

  family: {
    name: "Family",
    description: "Family members",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_fam_1", english: "Father", polish: "Ojciec", example: "Mój ojciec dużo pracuje", exampleTranslation: "My father works a lot" },
      { id: "ep_fam_2", english: "Mother", polish: "Matka", example: "Moja matka dobrze gotuje", exampleTranslation: "My mother cooks well" },
      { id: "ep_fam_3", english: "Brother", polish: "Brat", example: "Mój brat studiuje medycynę", exampleTranslation: "My brother studies medicine" },
      { id: "ep_fam_4", english: "Sister", polish: "Siostra", example: "Moja siostra jest nauczycielką", exampleTranslation: "My sister is a teacher" },
      { id: "ep_fam_5", english: "Son", polish: "Syn", example: "Mój syn ma dziesięć lat", exampleTranslation: "My son is ten years old" },
      { id: "ep_fam_6", english: "Daughter", polish: "Córka", example: "Moja córka chodzi na uniwersytet", exampleTranslation: "My daughter goes to university" },
      { id: "ep_fam_7", english: "Grandfather", polish: "Dziadek", example: "Mój dziadek jest bardzo mądry", exampleTranslation: "My grandfather is very wise" },
      { id: "ep_fam_8", english: "Grandmother", polish: "Babcia", example: "Moja babcia robi ciasta", exampleTranslation: "My grandmother makes cakes" },
      { id: "ep_fam_9", english: "Uncle", polish: "Wujek", example: "Mój wujek mieszka w Warszawie", exampleTranslation: "My uncle lives in Warsaw" },
      { id: "ep_fam_10", english: "Aunt", polish: "Ciocia", example: "Moja ciocia jest bardzo miła", exampleTranslation: "My aunt is very kind" }
    ]
  },

  numbers: {
    name: "Numbers",
    description: "Basic numbers",
    icon: Hash,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_num_1", english: "One", polish: "Jeden", example: "Mam jednego brata", exampleTranslation: "I have one brother" },
      { id: "ep_num_2", english: "Two", polish: "Dwa", example: "Są dwa koty", exampleTranslation: "There are two cats" },
      { id: "ep_num_3", english: "Three", polish: "Trzy", example: "Jest trzecia", exampleTranslation: "It's three o'clock" },
      { id: "ep_num_4", english: "Four", polish: "Cztery", example: "Cztery pory roku", exampleTranslation: "Four seasons" },
      { id: "ep_num_5", english: "Five", polish: "Pięć", example: "Pięć palców na ręce", exampleTranslation: "Five fingers on the hand" },
      { id: "ep_num_6", english: "Six", polish: "Sześć", example: "Mój syn ma sześć lat", exampleTranslation: "My son is six years old" },
      { id: "ep_num_7", english: "Seven", polish: "Siedem", example: "Siedem dni tygodnia", exampleTranslation: "Seven days of the week" },
      { id: "ep_num_8", english: "Eight", polish: "Osiem", example: "Pracuję osiem godzin", exampleTranslation: "I work eight hours" },
      { id: "ep_num_9", english: "Nine", polish: "Dziewięć", example: "Dziewiąta rano", exampleTranslation: "Nine o'clock in the morning" },
      { id: "ep_num_10", english: "Ten", polish: "Dziesięć", example: "Dziesięć euro, proszę", exampleTranslation: "Ten euros, please" }
    ]
  },

  colors: {
    name: "Colors",
    description: "Basic colors",
    icon: Palette,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_col_1", english: "Red", polish: "Czerwony", example: "Samochód jest czerwony", exampleTranslation: "The car is red" },
      { id: "ep_col_2", english: "Blue", polish: "Niebieski", example: "Niebo jest niebieskie", exampleTranslation: "The sky is blue" },
      { id: "ep_col_3", english: "Green", polish: "Zielony", example: "Trawa jest zielona", exampleTranslation: "The grass is green" },
      { id: "ep_col_4", english: "Yellow", polish: "Żółty", example: "Słońce jest żółte", exampleTranslation: "The sun is yellow" },
      { id: "ep_col_5", english: "Black", polish: "Czarny", example: "Mój kot jest czarny", exampleTranslation: "My cat is black" },
      { id: "ep_col_6", english: "White", polish: "Biały", example: "Śnieg jest biały", exampleTranslation: "The snow is white" },
      { id: "ep_col_7", english: "Orange", polish: "Pomarańczowy", example: "Pomarańcza jest pomarańczowa", exampleTranslation: "The orange is orange" },
      { id: "ep_col_8", english: "Pink", polish: "Różowy", example: "Sukienka jest różowa", exampleTranslation: "The dress is pink" },
      { id: "ep_col_9", english: "Brown", polish: "Brązowy", example: "Niedźwiedź jest brązowy", exampleTranslation: "The bear is brown" },
      { id: "ep_col_10", english: "Gray", polish: "Szary", example: "Słoń jest szary", exampleTranslation: "The elephant is gray" }
    ]
  },

  food: {
    name: "Food",
    description: "Basic foods",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_food_1", english: "Bread", polish: "Chleb", example: "Chleb jest świeży", exampleTranslation: "The bread is fresh" },
      { id: "ep_food_2", english: "Water", polish: "Woda", example: "Szklankę wody, proszę", exampleTranslation: "A glass of water, please" },
      { id: "ep_food_3", english: "Coffee", polish: "Kawa", example: "Lubię kawę", exampleTranslation: "I like coffee" },
      { id: "ep_food_4", english: "Milk", polish: "Mleko", example: "Mleko jest świeże", exampleTranslation: "The milk is fresh" },
      { id: "ep_food_5", english: "Meat", polish: "Mięso", example: "Mięso jest pyszne", exampleTranslation: "The meat is delicious" },
      { id: "ep_food_6", english: "Fish", polish: "Ryba", example: "Ryba jest bardzo zdrowa", exampleTranslation: "Fish is very healthy" },
      { id: "ep_food_7", english: "Fruit", polish: "Owoce", example: "Jem owoce codziennie", exampleTranslation: "I eat fruit every day" },
      { id: "ep_food_8", english: "Vegetables", polish: "Warzywa", example: "Warzywa są ważne", exampleTranslation: "Vegetables are important" },
      { id: "ep_food_9", english: "Cheese", polish: "Ser", example: "Polski ser jest pyszny", exampleTranslation: "Polish cheese is delicious" },
      { id: "ep_food_10", english: "Egg", polish: "Jajko", example: "Jem jajka na śniadanie", exampleTranslation: "I eat eggs for breakfast" }
    ]
  },

  house: {
    name: "House",
    description: "Household items",
    icon: Home,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_house_1", english: "House", polish: "Dom", example: "Mój dom jest duży", exampleTranslation: "My house is big" },
      { id: "ep_house_2", english: "Room", polish: "Pokój", example: "Pokój jest czysty", exampleTranslation: "The room is clean" },
      { id: "ep_house_3", english: "Kitchen", polish: "Kuchnia", example: "Gotuję w kuchni", exampleTranslation: "I cook in the kitchen" },
      { id: "ep_house_4", english: "Bathroom", polish: "Łazienka", example: "Łazienka jest nowa", exampleTranslation: "The bathroom is new" },
      { id: "ep_house_5", english: "Bedroom", polish: "Sypialnia", example: "Moja sypialnia jest wygodna", exampleTranslation: "My bedroom is comfortable" },
      { id: "ep_house_6", english: "Door", polish: "Drzwi", example: "Zamknij drzwi", exampleTranslation: "Close the door" },
      { id: "ep_house_7", english: "Window", polish: "Okno", example: "Otwórz okno", exampleTranslation: "Open the window" },
      { id: "ep_house_8", english: "Table", polish: "Stół", example: "Stół jest drewniany", exampleTranslation: "The table is wooden" },
      { id: "ep_house_9", english: "Chair", polish: "Krzesło", example: "Krzesło jest wygodne", exampleTranslation: "The chair is comfortable" },
      { id: "ep_house_10", english: "Bed", polish: "Łóżko", example: "Łóżko jest miękkie", exampleTranslation: "The bed is soft" }
    ]
  },

  places: {
    name: "Places",
    description: "Locations",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_place_1", english: "Store", polish: "Sklep", example: "Sklep jest otwarty", exampleTranslation: "The store is open" },
      { id: "ep_place_2", english: "School", polish: "Szkoła", example: "Idę do szkoły", exampleTranslation: "I go to school" },
      { id: "ep_place_3", english: "Hospital", polish: "Szpital", example: "Szpital jest blisko", exampleTranslation: "The hospital is close" },
      { id: "ep_place_4", english: "Park", polish: "Park", example: "Dzieci bawią się w parku", exampleTranslation: "Children play in the park" },
      { id: "ep_place_5", english: "Restaurant", polish: "Restauracja", example: "Jemy w restauracji", exampleTranslation: "We eat at the restaurant" },
      { id: "ep_place_6", english: "Hotel", polish: "Hotel", example: "Hotel jest bardzo duży", exampleTranslation: "The hotel is very big" },
      { id: "ep_place_7", english: "Bank", polish: "Bank", example: "Idę do banku", exampleTranslation: "I go to the bank" },
      { id: "ep_place_8", english: "Airport", polish: "Lotnisko", example: "Jestem na lotnisku", exampleTranslation: "I'm at the airport" },
      { id: "ep_place_9", english: "Train station", polish: "Dworzec", example: "Dworzec kolejowy", exampleTranslation: "The train station" },
      { id: "ep_place_10", english: "Museum", polish: "Muzeum", example: "Muzeum jest interesujące", exampleTranslation: "The museum is interesting" }
    ]
  },

  clothing: {
    name: "Clothing",
    description: "Clothes",
    icon: Shirt,
    color: "from-indigo-400 to-purple-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_cloth_1", english: "Shirt", polish: "Koszula", example: "Lubię twoją koszulę", exampleTranslation: "I like your shirt" },
      { id: "ep_cloth_2", english: "Pants", polish: "Spodnie", example: "Potrzebuję nowych spodni", exampleTranslation: "I need new pants" },
      { id: "ep_cloth_3", english: "Shoes", polish: "Buty", example: "Kupiłem czarne buty", exampleTranslation: "I bought black shoes" },
      { id: "ep_cloth_4", english: "Dress", polish: "Sukienka", example: "Sukienka jest piękna", exampleTranslation: "The dress is beautiful" },
      { id: "ep_cloth_5", english: "Jacket", polish: "Kurtka", example: "Potrzebuję kurtki", exampleTranslation: "I need a jacket" },
      { id: "ep_cloth_6", english: "Hat", polish: "Kapelusz", example: "Włóż kapelusz", exampleTranslation: "Put on the hat" },
      { id: "ep_cloth_7", english: "Socks", polish: "Skarpetki", example: "Moje skarpetki są czyste", exampleTranslation: "My socks are clean" },
      { id: "ep_cloth_8", english: "Gloves", polish: "Rękawiczki", example: "Noszę rękawiczki zimą", exampleTranslation: "I wear gloves in winter" },
      { id: "ep_cloth_9", english: "Scarf", polish: "Szalik", example: "Szalik jest miękki", exampleTranslation: "The scarf is soft" },
      { id: "ep_cloth_10", english: "Coat", polish: "Płaszcz", example: "Płaszcz jest ciepły", exampleTranslation: "The coat is warm" }
    ]
  },

  work: {
    name: "Work",
    description: "Professions",
    icon: Briefcase,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_work_1", english: "Work", polish: "Praca", example: "Idę do pracy", exampleTranslation: "I go to work" },
      { id: "ep_work_2", english: "Doctor", polish: "Lekarz", example: "On jest lekarzem", exampleTranslation: "He is a doctor" },
      { id: "ep_work_3", english: "Teacher", polish: "Nauczyciel", example: "Mój nauczyciel jest doskonały", exampleTranslation: "My teacher is excellent" },
      { id: "ep_work_4", english: "Engineer", polish: "Inżynier", example: "Jestem inżynierem", exampleTranslation: "I am an engineer" },
      { id: "ep_work_5", english: "Lawyer", polish: "Prawnik", example: "Ona jest prawnikiem", exampleTranslation: "She is a lawyer" },
      { id: "ep_work_6", english: "Cook", polish: "Kucharz", example: "Kucharz przygotowuje posiłek", exampleTranslation: "The cook prepares the meal" },
      { id: "ep_work_7", english: "Waiter", polish: "Kelner", example: "Kelner jest miły", exampleTranslation: "The waiter is kind" },
      { id: "ep_work_8", english: "Salesperson", polish: "Sprzedawca", example: "Sprzedawca pomaga klientowi", exampleTranslation: "The salesperson helps the customer" },
      { id: "ep_work_9", english: "Police officer", polish: "Policjant", example: "Policjant chroni miasto", exampleTranslation: "The police officer protects the city" },
      { id: "ep_work_10", english: "Mechanic", polish: "Mechanik", example: "Mechanik naprawia samochody", exampleTranslation: "The mechanic repairs cars" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transportation",
    icon: Car,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_trans_1", english: "Car", polish: "Samochód", example: "Mam nowy samochód", exampleTranslation: "I have a new car" },
      { id: "ep_trans_2", english: "Bus", polish: "Autobus", example: "Jadę autobusem", exampleTranslation: "I go by bus" },
      { id: "ep_trans_3", english: "Train", polish: "Pociąg", example: "Pociąg jest szybki", exampleTranslation: "The train is fast" },
      { id: "ep_trans_4", english: "Airplane", polish: "Samolot", example: "Podróżuję samolotem", exampleTranslation: "I travel by plane" },
      { id: "ep_trans_5", english: "Bicycle", polish: "Rower", example: "Jeżdżę na rowerze", exampleTranslation: "I ride a bicycle" },
      { id: "ep_trans_6", english: "Taxi", polish: "Taksówka", example: "Wzywam taksówkę", exampleTranslation: "I call a taxi" },
      { id: "ep_trans_7", english: "Metro", polish: "Metro", example: "Korzystam z metra", exampleTranslation: "I use the metro" },
      { id: "ep_trans_8", english: "Motorcycle", polish: "Motocykl", example: "Mój motocykl jest czerwony", exampleTranslation: "My motorcycle is red" },
      { id: "ep_trans_9", english: "Boat", polish: "Łódź", example: "Płyniemy łodzią", exampleTranslation: "We sail by boat" },
      { id: "ep_trans_10", english: "Ticket", polish: "Bilet", example: "Kupuję bilet", exampleTranslation: "I buy a ticket" }
    ]
  },

  education: {
    name: "Education",
    description: "School",
    icon: School,
    color: "from-purple-400 to-pink-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_edu_1", english: "Student", polish: "Uczeń", example: "Jestem uczniem", exampleTranslation: "I am a student" },
      { id: "ep_edu_2", english: "Teacher", polish: "Nauczyciel", example: "Nauczyciel dobrze uczy", exampleTranslation: "The teacher teaches well" },
      { id: "ep_edu_3", english: "Book", polish: "Książka", example: "Czytam książkę", exampleTranslation: "I read a book" },
      { id: "ep_edu_4", english: "Pencil", polish: "Ołówek", example: "Czy masz ołówek?", exampleTranslation: "Do you have a pencil?" },
      { id: "ep_edu_5", english: "Notebook", polish: "Zeszyt", example: "Potrzebuję zeszytu", exampleTranslation: "I need a notebook" },
      { id: "ep_edu_6", english: "Exam", polish: "Egzamin", example: "Egzamin jest jutro", exampleTranslation: "The exam is tomorrow" },
      { id: "ep_edu_7", english: "Homework", polish: "Praca domowa", example: "Mam dużo pracy domowej", exampleTranslation: "I have a lot of homework" },
      { id: "ep_edu_8", english: "Class", polish: "Lekcja", example: "Lekcja zaczyna się o dziewiątej", exampleTranslation: "The class starts at nine" },
      { id: "ep_edu_9", english: "Library", polish: "Biblioteka", example: "Uczę się w bibliotece", exampleTranslation: "I study at the library" },
      { id: "ep_edu_10", english: "Backpack", polish: "Plecak", example: "Mój plecak jest ciężki", exampleTranslation: "My backpack is heavy" }
    ]
  },

  nature: {
    name: "Nature",
    description: "Nature",
    icon: TreePine,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_nature_1", english: "Tree", polish: "Drzewo", example: "Drzewo jest wysokie", exampleTranslation: "The tree is tall" },
      { id: "ep_nature_2", english: "Flower", polish: "Kwiat", example: "Kwiat jest piękny", exampleTranslation: "The flower is beautiful" },
      { id: "ep_nature_3", english: "Mountain", polish: "Góra", example: "Góra jest wysoka", exampleTranslation: "The mountain is high" },
      { id: "ep_nature_4", english: "River", polish: "Rzeka", example: "Rzeka jest długa", exampleTranslation: "The river is long" },
      { id: "ep_nature_5", english: "Sea", polish: "Morze", example: "Morze jest niebieskie", exampleTranslation: "The sea is blue" },
      { id: "ep_nature_6", english: "Forest", polish: "Las", example: "Przechodzimy przez las", exampleTranslation: "We walk through the forest" },
      { id: "ep_nature_7", english: "Lake", polish: "Jezioro", example: "Jezioro jest spokojne", exampleTranslation: "The lake is calm" },
      { id: "ep_nature_8", english: "Sky", polish: "Niebo", example: "Niebo jest niebieskie", exampleTranslation: "The sky is blue" },
      { id: "ep_nature_9", english: "Star", polish: "Gwiazda", example: "Gwiazdy świecą", exampleTranslation: "The stars shine" },
      { id: "ep_nature_10", english: "Moon", polish: "Księżyc", example: "Księżyc jest w pełni", exampleTranslation: "The moon is full" }
    ]
  },

  emotions: {
    name: "Emotions",
    description: "Feelings",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_emo_1", english: "Happy", polish: "Szczęśliwy", example: "Jestem szczęśliwy", exampleTranslation: "I am happy" },
      { id: "ep_emo_2", english: "Sad", polish: "Smutny", example: "On jest smutny", exampleTranslation: "He is sad" },
      { id: "ep_emo_3", english: "Angry", polish: "Zły", example: "Ona jest zła", exampleTranslation: "She is angry" },
      { id: "ep_emo_4", english: "Tired", polish: "Zmęczony", example: "Jestem zmęczony", exampleTranslation: "I am tired" },
      { id: "ep_emo_5", english: "Excited", polish: "Podekscytowany", example: "Jesteśmy podekscytowani", exampleTranslation: "We are excited" },
      { id: "ep_emo_6", english: "Nervous", polish: "Zdenerwowany", example: "On jest zdenerwowany", exampleTranslation: "He is nervous" },
      { id: "ep_emo_7", english: "Calm", polish: "Spokojny", example: "Ona jest spokojna", exampleTranslation: "She is calm" },
      { id: "ep_emo_8", english: "Surprised", polish: "Zaskoczony", example: "Jestem zaskoczony", exampleTranslation: "I am surprised" },
      { id: "ep_emo_9", english: "Scared", polish: "Przestraszony", example: "Dziecko jest przestraszone", exampleTranslation: "The child is scared" },
      { id: "ep_emo_10", english: "Bored", polish: "Znudzony", example: "Oni są znudzeni", exampleTranslation: "They are bored" }
    ]
  },

  time: {
    name: "Time",
    description: "Time expressions",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_time_1", english: "Today", polish: "Dzisiaj", example: "Dzisiaj jest poniedziałek", exampleTranslation: "Today is Monday" },
      { id: "ep_time_2", english: "Yesterday", polish: "Wczoraj", example: "Wczoraj była niedziela", exampleTranslation: "Yesterday was Sunday" },
      { id: "ep_time_3", english: "Tomorrow", polish: "Jutro", example: "Jutro jest wtorek", exampleTranslation: "Tomorrow is Tuesday" },
      { id: "ep_time_4", english: "Now", polish: "Teraz", example: "Teraz pracuję", exampleTranslation: "I'm working now" },
      { id: "ep_time_5", english: "Later", polish: "Później", example: "Zrobię to później", exampleTranslation: "I'll do it later" },
      { id: "ep_time_6", english: "Morning", polish: "Rano", example: "Dzień dobry", exampleTranslation: "Good morning" },
      { id: "ep_time_7", english: "Noon", polish: "Południe", example: "Jest południe", exampleTranslation: "It's noon" },
      { id: "ep_time_8", english: "Evening", polish: "Wieczór", example: "Dobry wieczór", exampleTranslation: "Good evening" },
      { id: "ep_time_9", english: "Night", polish: "Noc", example: "Dobranoc", exampleTranslation: "Good night" },
      { id: "ep_time_10", english: "Week", polish: "Tydzień", example: "Następny tydzień", exampleTranslation: "Next week" }
    ]
  },

  weather: {
    name: "Weather",
    description: "Weather conditions",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    difficulty: "beginner",
    words: [
      { id: "ep_weather_1", english: "Sun", polish: "Słońce", example: "Słońce świeci", exampleTranslation: "The sun shines" },
      { id: "ep_weather_2", english: "Rain", polish: "Deszcz", example: "Pada deszcz", exampleTranslation: "It's raining" },
      { id: "ep_weather_3", english: "Snow", polish: "Śnieg", example: "Pada śnieg", exampleTranslation: "It's snowing" },
      { id: "ep_weather_4", english: "Wind", polish: "Wiatr", example: "Wieje wiatr", exampleTranslation: "It's windy" },
      { id: "ep_weather_5", english: "Cloud", polish: "Chmura", example: "Na niebie są chmury", exampleTranslation: "There are clouds in the sky" },
      { id: "ep_weather_6", english: "Storm", polish: "Burza", example: "Nadchodzi burza", exampleTranslation: "A storm is coming" },
      { id: "ep_weather_7", english: "Hot", polish: "Gorąco", example: "Jest bardzo gorąco", exampleTranslation: "It's very hot" },
      { id: "ep_weather_8", english: "Cold", polish: "Zimno", example: "Zimą jest zimno", exampleTranslation: "It's cold in winter" },
      { id: "ep_weather_9", english: "Lightning", polish: "Błyskawica", example: "Widziałem błyskawicę", exampleTranslation: "I saw lightning" },
      { id: "ep_weather_10", english: "Thunder", polish: "Grzmot", example: "Słyszysz grzmot", exampleTranslation: "You can hear thunder" }
    ]
  },

  body: {
    name: "Body",
    description: "Body parts",
    icon: Hand,
    color: "from-orange-400 to-red-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_body_1", english: "Head", polish: "Głowa", example: "Boli mnie głowa", exampleTranslation: "My head hurts" },
      { id: "ep_body_2", english: "Eye", polish: "Oko", example: "Mam niebieskie oczy", exampleTranslation: "I have blue eyes" },
      { id: "ep_body_3", english: "Nose", polish: "Nos", example: "Mój nos jest zimny", exampleTranslation: "My nose is cold" },
      { id: "ep_body_4", english: "Mouth", polish: "Usta", example: "Otwórz usta", exampleTranslation: "Open your mouth" },
      { id: "ep_body_5", english: "Ear", polish: "Ucho", example: "Moje uszy są duże", exampleTranslation: "My ears are big" },
      { id: "ep_body_6", english: "Hand", polish: "Ręka", example: "Daj mi rękę", exampleTranslation: "Give me your hand" },
      { id: "ep_body_7", english: "Foot", polish: "Stopa", example: "Boli mnie stopa", exampleTranslation: "My foot hurts" },
      { id: "ep_body_8", english: "Arm", polish: "Ramię", example: "Podnieś ramię", exampleTranslation: "Raise your arm" },
      { id: "ep_body_9", english: "Leg", polish: "Noga", example: "Moje nogi są zmęczone", exampleTranslation: "My legs are tired" },
      { id: "ep_body_10", english: "Heart", polish: "Serce", example: "Moje serce bije szybko", exampleTranslation: "My heart beats fast" }
    ]
  },

  activities: {
    name: "Activities",
    description: "Daily activities",
    icon: Lightbulb,
    color: "from-yellow-400 to-amber-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_act_1", english: "Eat", polish: "Jeść", example: "Będę jeść", exampleTranslation: "I'm going to eat" },
      { id: "ep_act_2", english: "Drink", polish: "Pić", example: "Piję wodę", exampleTranslation: "I drink water" },
      { id: "ep_act_3", english: "Sleep", polish: "Spać", example: "Muszę spać", exampleTranslation: "I need to sleep" },
      { id: "ep_act_4", english: "Run", polish: "Biegać", example: "Biegam rano", exampleTranslation: "I run in the morning" },
      { id: "ep_act_5", english: "Read", polish: "Czytać", example: "Czytam książkę", exampleTranslation: "I read a book" },
      { id: "ep_act_6", english: "Write", polish: "Pisać", example: "Piszę list", exampleTranslation: "I write a letter" },
      { id: "ep_act_7", english: "Speak", polish: "Mówić", example: "Mówię po polsku", exampleTranslation: "I speak Polish" },
      { id: "ep_act_8", english: "Listen", polish: "Słuchać", example: "Słucham muzyki", exampleTranslation: "I listen to music" },
      { id: "ep_act_9", english: "Watch", polish: "Oglądać", example: "Oglądam telewizję", exampleTranslation: "I watch television" },
      { id: "ep_act_10", english: "Think", polish: "Myśleć", example: "Myślę o tobie", exampleTranslation: "I think of you" }
    ]
  },

  learning: {
    name: "Learning",
    description: "Learning activities",
    icon: BookOpen,
    color: "from-indigo-400 to-violet-500",
    level: "advanced",
    difficulty: "advanced",
    words: [
      { id: "ep_learn_1", english: "Learn", polish: "Uczyć się", example: "Uczę się polskiego", exampleTranslation: "I learn Polish" },
      { id: "ep_learn_2", english: "Study", polish: "Studiować", example: "Studiuję na uniwersytecie", exampleTranslation: "I study at university" },
      { id: "ep_learn_3", english: "Teach", polish: "Uczyć", example: "Uczę angielskiego", exampleTranslation: "I teach English" },
      { id: "ep_learn_4", english: "Understand", polish: "Rozumieć", example: "Rozumiem tę lekcję", exampleTranslation: "I understand the lesson" },
      { id: "ep_learn_5", english: "Practice", polish: "Ćwiczyć", example: "Ćwiczę codziennie", exampleTranslation: "I practice every day" },
      { id: "ep_learn_6", english: "Repeat", polish: "Powtarzać", example: "Powtórz to słowo", exampleTranslation: "Repeat the word" },
      { id: "ep_learn_7", english: "Explain", polish: "Wyjaśniać", example: "Nauczyciel dobrze wyjaśnia", exampleTranslation: "The teacher explains well" },
      { id: "ep_learn_8", english: "Ask", polish: "Pytać", example: "Pytam nauczyciela", exampleTranslation: "I ask the teacher" },
      { id: "ep_learn_9", english: "Answer", polish: "Odpowiadać", example: "Odpowiadam na pytanie", exampleTranslation: "I answer the question" },
      { id: "ep_learn_10", english: "Remember", polish: "Pamiętać", example: "Pamiętam tę lekcję", exampleTranslation: "I remember the lesson" }
    ]
  },

  sports: {
    name: "Sports",
    description: "Sports",
    icon: Dumbbell,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    difficulty: "intermediate",
    words: [
      { id: "ep_sport_1", english: "Football", polish: "Piłka nożna", example: "Gram w piłkę nożną", exampleTranslation: "I play football" },
      { id: "ep_sport_2", english: "Basketball", polish: "Koszykówka", example: "Lubię koszykówkę", exampleTranslation: "I like basketball" },
      { id: "ep_sport_3", english: "Tennis", polish: "Tenis", example: "Gram w tenisa", exampleTranslation: "I play tennis" },
      { id: "ep_sport_4", english: "Swimming", polish: "Pływanie", example: "Pływanie jest zdrowe", exampleTranslation: "Swimming is healthy" },
      { id: "ep_sport_5", english: "Running", polish: "Bieganie", example: "Biegam rano", exampleTranslation: "I run in the morning" },
      { id: "ep_sport_6", english: "Cycling", polish: "Jazda na rowerze", example: "Lubię jeździć na rowerze", exampleTranslation: "I like cycling" },
      { id: "ep_sport_7", english: "Gym", polish: "Siłownia", example: "Chodzę na siłownię", exampleTranslation: "I go to the gym" },
      { id: "ep_sport_8", english: "Training", polish: "Trening", example: "Dziś mam trening", exampleTranslation: "I have training today" },
      { id: "ep_sport_9", english: "Team", polish: "Drużyna", example: "Jestem w drużynie", exampleTranslation: "I'm on a team" },
      { id: "ep_sport_10", english: "Coach", polish: "Trener", example: "Nasz trener jest doskonały", exampleTranslation: "Our coach is excellent" }
    ]
  },

  travel: {
    name: "Travel",
    description: "Tourism",
    icon: Plane,
    color: "from-blue-400 to-indigo-500",
    level: "advanced",
    difficulty: "advanced",
    words: [
      { id: "ep_travel_1", english: "Travel", polish: "Podróż", example: "Jadę w podróż", exampleTranslation: "I'm going on a trip" },
      { id: "ep_travel_2", english: "Suitcase", polish: "Walizka", example: "Moja walizka jest ciężka", exampleTranslation: "My suitcase is heavy" },
      { id: "ep_travel_3", english: "Passport", polish: "Paszport", example: "Potrzebuję paszportu", exampleTranslation: "I need my passport" },
      { id: "ep_travel_4", english: "Hotel", polish: "Hotel", example: "Hotel jest wygodny", exampleTranslation: "The hotel is comfortable" },
      { id: "ep_travel_5", english: "Reservation", polish: "Rezerwacja", example: "Mam rezerwację", exampleTranslation: "I have a reservation" },
      { id: "ep_travel_6", english: "Tourist", polish: "Turysta", example: "Jestem turystą", exampleTranslation: "I am a tourist" },
      { id: "ep_travel_7", english: "Vacation", polish: "Wakacje", example: "Jestem na wakacjach", exampleTranslation: "I'm on vacation" },
      { id: "ep_travel_8", english: "Sightseeing", polish: "Zwiedzanie", example: "Zwiedzamy", exampleTranslation: "We're doing sightseeing" },
      { id: "ep_travel_9", english: "Guide", polish: "Przewodnik", example: "Przewodnik jest pomocny", exampleTranslation: "The guide is informative" },
      { id: "ep_travel_10", english: "Souvenir", polish: "Pamiątka", example: "Kupuję pamiątkę", exampleTranslation: "I'm buying a souvenir" }
    ]
  },

  entertainment: {
    name: "Entertainment",
    description: "Leisure",
    icon: Music,
    color: "from-pink-400 to-purple-500",
    level: "advanced",
    difficulty: "advanced",
    words: [
      { id: "ep_ent_1", english: "Music", polish: "Muzyka", example: "Słucham muzyki", exampleTranslation: "I listen to music" },
      { id: "ep_ent_2", english: "Movie", polish: "Film", example: "Oglądam film", exampleTranslation: "I watch a movie" },
      { id: "ep_ent_3", english: "Concert", polish: "Koncert", example: "Idę na koncert", exampleTranslation: "I go to a concert" },
      { id: "ep_ent_4", english: "Theater", polish: "Teatr", example: "Idę do teatru", exampleTranslation: "I go to the theater" },
      { id: "ep_ent_5", english: "Dance", polish: "Taniec", example: "Lubię tańczyć", exampleTranslation: "I like to dance" },
      { id: "ep_ent_6", english: "Sing", polish: "Śpiewać", example: "Lubię śpiewać", exampleTranslation: "I like to sing" },
      { id: "ep_ent_7", english: "Guitar", polish: "Gitara", example: "Gram na gitarze", exampleTranslation: "I play guitar" },
      { id: "ep_ent_8", english: "Games", polish: "Gry", example: "Gram w gry wideo", exampleTranslation: "I play video games" },
      { id: "ep_ent_9", english: "Photography", polish: "Fotografia", example: "Interesuję się fotografią", exampleTranslation: "I'm interested in photography" },
      { id: "ep_ent_10", english: "Reading", polish: "Czytanie", example: "Czytanie to moje hobby", exampleTranslation: "Reading is my hobby" }
    ]
  }
};

export default flashcardsCategories;