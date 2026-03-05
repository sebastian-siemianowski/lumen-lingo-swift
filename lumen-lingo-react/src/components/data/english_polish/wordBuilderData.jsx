/**
 * ENGLISH → POLISH WORD BUILDER
 * English → Polski
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Beginner",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Simple Polish words",
    words: [
      { id: "ep_word_1", word: "cześć", hint: "Hello", polish: "Cześć" },
      { id: "ep_word_2", word: "dom", hint: "House", polish: "Dom" },
      { id: "ep_word_3", word: "miłość", hint: "Love", polish: "Miłość" },
      { id: "ep_word_4", word: "woda", hint: "Water", polish: "Woda" },
      { id: "ep_word_5", word: "kot", hint: "Cat", polish: "Kot" },
      { id: "ep_word_6", word: "pies", hint: "Dog", polish: "Pies" },
      { id: "ep_word_7", word: "książka", hint: "Book", polish: "Książka" },
      { id: "ep_word_8", word: "słońce", hint: "Sun", polish: "Słońce" },
      { id: "ep_word_9", word: "księżyc", hint: "Moon", polish: "Księżyc" },
      { id: "ep_word_10", word: "gwiazda", hint: "Star", polish: "Gwiazda" }
    ]
  },

  colors: {
    name: "Colors",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Color names",
    words: [
      { id: "ep_col_1", word: "czerwony", hint: "Red", polish: "Czerwony" },
      { id: "ep_col_2", word: "niebieski", hint: "Blue", polish: "Niebieski" },
      { id: "ep_col_3", word: "zielony", hint: "Green", polish: "Zielony" },
      { id: "ep_col_4", word: "żółty", hint: "Yellow", polish: "Żółty" },
      { id: "ep_col_5", word: "biały", hint: "White", polish: "Biały" },
      { id: "ep_col_6", word: "czarny", hint: "Black", polish: "Czarny" },
      { id: "ep_col_7", word: "pomarańczowy", hint: "Orange", polish: "Pomarańczowy" },
      { id: "ep_col_8", word: "fioletowy", hint: "Purple", polish: "Fioletowy" },
      { id: "ep_col_9", word: "różowy", hint: "Pink", polish: "Różowy" },
      { id: "ep_col_10", word: "brązowy", hint: "Brown", polish: "Brązowy" }
    ]
  },

  family: {
    name: "Family",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Family members",
    words: [
      { id: "ep_fam_1", word: "ojciec", hint: "Father", polish: "Ojciec" },
      { id: "ep_fam_2", word: "matka", hint: "Mother", polish: "Matka" },
      { id: "ep_fam_3", word: "brat", hint: "Brother", polish: "Brat" },
      { id: "ep_fam_4", word: "siostra", hint: "Sister", polish: "Siostra" },
      { id: "ep_fam_5", word: "syn", hint: "Son", polish: "Syn" },
      { id: "ep_fam_6", word: "córka", hint: "Daughter", polish: "Córka" },
      { id: "ep_fam_7", word: "wujek", hint: "Uncle", polish: "Wujek" },
      { id: "ep_fam_8", word: "ciocia", hint: "Aunt", polish: "Ciocia" },
      { id: "ep_fam_9", word: "kuzyn", hint: "Cousin", polish: "Kuzyn" },
      { id: "ep_fam_10", word: "rodzina", hint: "Family", polish: "Rodzina" }
    ]
  },

  house: {
    name: "House",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Household items",
    words: [
      { id: "ep_house_1", word: "stół", hint: "Table", polish: "Stół" },
      { id: "ep_house_2", word: "krzesło", hint: "Chair", polish: "Krzesło" },
      { id: "ep_house_3", word: "łóżko", hint: "Bed", polish: "Łóżko" },
      { id: "ep_house_4", word: "drzwi", hint: "Door", polish: "Drzwi" },
      { id: "ep_house_5", word: "okno", hint: "Window", polish: "Okno" },
      { id: "ep_house_6", word: "kuchnia", hint: "Kitchen", polish: "Kuchnia" },
      { id: "ep_house_7", word: "sypialnia", hint: "Bedroom", polish: "Sypialnia" },
      { id: "ep_house_8", word: "łazienka", hint: "Bathroom", polish: "Łazienka" },
      { id: "ep_house_9", word: "ogród", hint: "Garden", polish: "Ogród" },
      { id: "ep_house_10", word: "dach", hint: "Roof", polish: "Dach" }
    ]
  },

  food: {
    name: "Food",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popular food",
    words: [
      { id: "ep_food_1", word: "chleb", hint: "Bread", polish: "Chleb" },
      { id: "ep_food_2", word: "mleko", hint: "Milk", polish: "Mleko" },
      { id: "ep_food_3", word: "jabłko", hint: "Apple", polish: "Jabłko" },
      { id: "ep_food_4", word: "ser", hint: "Cheese", polish: "Ser" },
      { id: "ep_food_5", word: "mięso", hint: "Meat", polish: "Mięso" },
      { id: "ep_food_6", word: "ryba", hint: "Fish", polish: "Ryba" },
      { id: "ep_food_7", word: "jajko", hint: "Egg", polish: "Jajko" },
      { id: "ep_food_8", word: "ryż", hint: "Rice", polish: "Ryż" },
      { id: "ep_food_9", word: "warzywo", hint: "Vegetable", polish: "Warzywo" },
      { id: "ep_food_10", word: "owoc", hint: "Fruit", polish: "Owoc" }
    ]
  },

  animals: {
    name: "Animals",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Animal names",
    words: [
      { id: "ep_ani_1", word: "koń", hint: "Horse", polish: "Koń" },
      { id: "ep_ani_2", word: "krowa", hint: "Cow", polish: "Krowa" },
      { id: "ep_ani_3", word: "świnia", hint: "Pig", polish: "Świnia" },
      { id: "ep_ani_4", word: "kurczak", hint: "Chicken", polish: "Kurczak" },
      { id: "ep_ani_5", word: "ptak", hint: "Bird", polish: "Ptak" },
      { id: "ep_ani_6", word: "mysz", hint: "Mouse", polish: "Mysz" },
      { id: "ep_ani_7", word: "wąż", hint: "Snake", polish: "Wąż" },
      { id: "ep_ani_8", word: "lew", hint: "Lion", polish: "Lew" },
      { id: "ep_ani_9", word: "tygrys", hint: "Tiger", polish: "Tygrys" },
      { id: "ep_ani_10", word: "słoń", hint: "Elephant", polish: "Słoń" }
    ]
  },

  places: {
    name: "Places",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Locations",
    words: [
      { id: "ep_place_1", word: "miasto", hint: "City", polish: "Miasto" },
      { id: "ep_place_2", word: "plaża", hint: "Beach", polish: "Plaża" },
      { id: "ep_place_3", word: "park", hint: "Park", polish: "Park" },
      { id: "ep_place_4", word: "szkoła", hint: "School", polish: "Szkoła" },
      { id: "ep_place_5", word: "szpital", hint: "Hospital", polish: "Szpital" },
      { id: "ep_place_6", word: "sklep", hint: "Store", polish: "Sklep" },
      { id: "ep_place_7", word: "ulica", hint: "Street", polish: "Ulica" },
      { id: "ep_place_8", word: "lotnisko", hint: "Airport", polish: "Lotnisko" },
      { id: "ep_place_9", word: "most", hint: "Bridge", polish: "Most" },
      { id: "ep_place_10", word: "góra", hint: "Mountain", polish: "Góra" }
    ]
  },

  time: {
    name: "Time",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Time words",
    words: [
      { id: "ep_time_1", word: "ranek", hint: "Morning", polish: "Ranek" },
      { id: "ep_time_2", word: "wieczór", hint: "Evening", polish: "Wieczór" },
      { id: "ep_time_3", word: "jutro", hint: "Tomorrow", polish: "Jutro" },
      { id: "ep_time_4", word: "wczoraj", hint: "Yesterday", polish: "Wczoraj" },
      { id: "ep_time_5", word: "rok", hint: "Year", polish: "Rok" },
      { id: "ep_time_6", word: "miesiąc", hint: "Month", polish: "Miesiąc" },
      { id: "ep_time_7", word: "tydzień", hint: "Week", polish: "Tydzień" },
      { id: "ep_time_8", word: "godzina", hint: "Hour", polish: "Godzina" },
      { id: "ep_time_9", word: "minuta", hint: "Minute", polish: "Minuta" },
      { id: "ep_time_10", word: "sekunda", hint: "Second", polish: "Sekunda" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Nature",
    words: [
      { id: "ep_nat_1", word: "drzewo", hint: "Tree", polish: "Drzewo" },
      { id: "ep_nat_2", word: "kwiat", hint: "Flower", polish: "Kwiat" },
      { id: "ep_nat_3", word: "góra", hint: "Mountain", polish: "Góra" },
      { id: "ep_nat_4", word: "rzeka", hint: "River", polish: "Rzeka" },
      { id: "ep_nat_5", word: "las", hint: "Forest", polish: "Las" },
      { id: "ep_nat_6", word: "jezioro", hint: "Lake", polish: "Jezioro" },
      { id: "ep_nat_7", word: "morze", hint: "Sea", polish: "Morze" },
      { id: "ep_nat_8", word: "pustynia", hint: "Desert", polish: "Pustynia" },
      { id: "ep_nat_9", word: "wyspa", hint: "Island", polish: "Wyspa" },
      { id: "ep_nat_10", word: "niebo", hint: "Sky", polish: "Niebo" }
    ]
  },

  emotions: {
    name: "Emotions",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Feelings",
    words: [
      { id: "ep_emo_1", word: "szczęśliwy", hint: "Happy", polish: "Szczęśliwy" },
      { id: "ep_emo_2", word: "smutny", hint: "Sad", polish: "Smutny" },
      { id: "ep_emo_3", word: "zły", hint: "Angry", polish: "Zły" },
      { id: "ep_emo_4", word: "zmęczony", hint: "Tired", polish: "Zmęczony" },
      { id: "ep_emo_5", word: "zdenerwowany", hint: "Nervous", polish: "Zdenerwowany" },
      { id: "ep_emo_6", word: "spokojny", hint: "Calm", polish: "Spokojny" },
      { id: "ep_emo_7", word: "przestraszony", hint: "Afraid", polish: "Przestraszony" },
      { id: "ep_emo_8", word: "dumny", hint: "Proud", polish: "Dumny" },
      { id: "ep_emo_9", word: "pełen nadziei", hint: "Hopeful", polish: "Pełen nadziei" },
      { id: "ep_emo_10", word: "radosny", hint: "Joyful", polish: "Radosny" }
    ]
  }
};

export default wordBuilderCategories;