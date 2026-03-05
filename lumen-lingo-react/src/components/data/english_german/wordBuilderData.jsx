
/**
 * ENGLISH → GERMAN WORD BUILDER
 * 
 * Native Language: English
 * Target Language: German (Deutsch)
 */

import {
  Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart,
  Briefcase, ShoppingBag, Laptop, Stethoscope
} from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Beginner Words",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Simple German words",
    words: [
      { id: "eg_word_1", word: "hallo", hint: "Hello", german: "hallo" },
      { id: "eg_word_2", word: "danke", hint: "Thank you", german: "danke" },
      { id: "eg_word_3", word: "ja", hint: "Yes", german: "ja" },
      { id: "eg_word_4", word: "nein", hint: "No", german: "nein" },
      { id: "eg_word_5", word: "bitte", hint: "Please", german: "bitte" },
      { id: "eg_word_6", word: "gut", hint: "Good", german: "gut" },
      { id: "eg_word_7", word: "wasser", hint: "Water", german: "wasser" },
      { id: "eg_word_8", word: "haus", hint: "House", german: "haus" },
      { id: "eg_word_9", word: "liebe", hint: "Love", german: "liebe" },
      { id: "eg_word_10", word: "buch", hint: "Book", german: "buch" }
    ]
  },

  colors: {
    name: "Colors",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Color names",
    words: [
      { id: "eg_col_1", word: "rot", hint: "Red", german: "rot" },
      { id: "eg_col_2", word: "blau", hint: "Blue", german: "blau" },
      { id: "eg_col_3", word: "gruen", hint: "Green", german: "grün" },
      { id: "eg_col_4", word: "gelb", hint: "Yellow", german: "gelb" },
      { id: "eg_col_5", word: "weiss", hint: "White", german: "weiß" },
      { id: "eg_col_6", word: "schwarz", hint: "Black", german: "schwarz" },
      { id: "eg_col_7", word: "orange", hint: "Orange", german: "orange" },
      { id: "eg_col_8", word: "lila", hint: "Purple", german: "lila" },
      { id: "eg_col_9", word: "rosa", hint: "Pink", german: "rosa" },
      { id: "eg_col_10", word: "braun", hint: "Brown", german: "braun" }
    ]
  },

  family: {
    name: "Family Members",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Family relationships",
    words: [
      { id: "eg_fam_1", word: "vater", hint: "Father", german: "vater" },
      { id: "eg_fam_2", word: "mutter", hint: "Mother", german: "mutter" },
      { id: "eg_fam_3", word: "bruder", hint: "Brother", german: "bruder" },
      { id: "eg_fam_4", word: "schwester", hint: "Sister", german: "schwester" },
      { id: "eg_fam_5", word: "sohn", hint: "Son", german: "sohn" },
      { id: "eg_fam_6", word: "tochter", hint: "Daughter", german: "tochter" },
      { id: "eg_fam_7", word: "opa", hint: "Grandpa", german: "opa" },
      { id: "eg_fam_8", word: "oma", hint: "Grandma", german: "oma" },
      { id: "eg_fam_9", word: "onkel", hint: "Uncle", german: "onkel" },
      { id: "eg_fam_10", word: "tante", hint: "Aunt", german: "tante" }
    ]
  },

  house: {
    name: "House & Home",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Household items",
    words: [
      { id: "eg_house_1", word: "tisch", hint: "Table", german: "tisch" },
      { id: "eg_house_2", word: "stuhl", hint: "Chair", german: "stuhl" },
      { id: "eg_house_3", word: "bett", hint: "Bed", german: "bett" },
      { id: "eg_house_4", word: "tuer", hint: "Door", german: "tür" },
      { id: "eg_house_5", word: "fenster", hint: "Window", german: "fenster" },
      { id: "eg_house_6", word: "kueche", hint: "Kitchen", german: "küche" },
      { id: "eg_house_7", word: "bad", hint: "Bathroom", german: "bad" },
      { id: "eg_house_8", word: "zimmer", hint: "Room", german: "zimmer" },
      { id: "eg_house_9", word: "garten", hint: "Garden", german: "garten" },
      { id: "eg_house_10", word: "dach", hint: "Roof", german: "dach" }
    ]
  },

  food: {
    name: "Food & Drink",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Common foods",
    words: [
      { id: "eg_food_1", word: "brot", hint: "Bread", german: "brot" },
      { id: "eg_food_2", word: "milch", hint: "Milk", german: "milch" },
      { id: "eg_food_3", word: "apfel", hint: "Apple", german: "apfel" },
      { id: "eg_food_4", word: "kaese", hint: "Cheese", german: "käse" },
      { id: "eg_food_5", word: "fleisch", hint: "Meat", german: "fleisch" },
      { id: "eg_food_6", word: "fisch", hint: "Fish", german: "fisch" },
      { id: "eg_food_7", word: "ei", hint: "Egg", german: "ei" },
      { id: "eg_food_8", word: "kaffee", hint: "Coffee", german: "kaffee" },
      { id: "eg_food_9", word: "tee", hint: "Tea", german: "tee" },
      { id: "eg_food_10", word: "kuchen", hint: "Cake", german: "kuchen" }
    ]
  },

  animals: {
    name: "Animals",
    icon: Dog,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    description: "Common animals",
    words: [
      { id: "eg_anim_1", word: "hund", hint: "Dog", german: "hund" },
      { id: "eg_anim_2", word: "katze", hint: "Cat", german: "katze" },
      { id: "eg_anim_3", word: "vogel", hint: "Bird", german: "vogel" },
      { id: "eg_anim_4", word: "pferd", hint: "Horse", german: "pferd" },
      { id: "eg_anim_5", word: "kuh", hint: "Cow", german: "kuh" },
      { id: "eg_anim_6", word: "schwein", hint: "Pig", german: "schwein" },
      { id: "eg_anim_7", word: "huhn", hint: "Chicken", german: "huhn" },
      { id: "eg_anim_8", word: "maus", hint: "Mouse", german: "maus" },
      { id: "eg_anim_9", word: "baer", hint: "Bear", german: "bär" },
      { id: "eg_anim_10", word: "hase", hint: "Rabbit", german: "hase" }
    ]
  },

  places: {
    name: "Places",
    icon: MapPin,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Locations and buildings",
    words: [
      { id: "eg_place_1", word: "stadt", hint: "City", german: "stadt" },
      { id: "eg_place_2", word: "dorf", hint: "Village", german: "dorf" },
      { id: "eg_place_3", word: "schule", hint: "School", german: "schule" },
      { id: "eg_place_4", word: "laden", hint: "Shop", german: "laden" },
      { id: "eg_place_5", word: "park", hint: "Park", german: "park" },
      { id: "eg_place_6", word: "bahnhof", hint: "Train station", german: "bahnhof" },
      { id: "eg_place_7", word: "flughafen", hint: "Airport", german: "flughafen" },
      { id: "eg_place_8", word: "kirche", hint: "Church", german: "kirche" },
      { id: "eg_place_9", word: "museum", hint: "Museum", german: "museum" },
      { id: "eg_place_10", word: "bibliothek", hint: "Library", german: "bibliothek" }
    ]
  },

  time: {
    name: "Time Expressions",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "advanced",
    description: "Time-related words",
    words: [
      { id: "eg_time_1", word: "heute", hint: "Today", german: "heute" },
      { id: "eg_time_2", word: "morgen", hint: "Tomorrow", german: "morgen" },
      { id: "eg_time_3", word: "gestern", hint: "Yesterday", german: "gestern" },
      { id: "eg_time_4", word: "woche", hint: "Week", german: "woche" },
      { id: "eg_time_5", word: "monat", hint: "Month", german: "monat" },
      { id: "eg_time_6", word: "jahr", hint: "Year", german: "jahr" },
      { id: "eg_time_7", word: "stunde", hint: "Hour", german: "stunde" },
      { id: "eg_time_8", word: "minute", hint: "Minute", german: "minute" },
      { id: "eg_time_9", word: "tag", hint: "Day", german: "tag" },
      { id: "eg_time_10", word: "nacht", hint: "Night", german: "nacht" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-green-500 to-teal-600",
    level: "advanced",
    description: "Natural world",
    words: [
      { id: "eg_nat_1", word: "baum", hint: "Tree", german: "baum" },
      { id: "eg_nat_2", word: "blume", hint: "Flower", german: "blume" },
      { id: "eg_nat_3", word: "berg", hint: "Mountain", german: "berg" },
      { id: "eg_nat_4", word: "fluss", hint: "River", german: "fluss" },
      { id: "eg_nat_5", word: "see", hint: "Lake", german: "see" },
      { id: "eg_nat_6", word: "wald", hint: "Forest", german: "wald" },
      { id: "eg_nat_7", word: "sonne", hint: "Sun", german: "sonne" },
      { id: "eg_nat_8", word: "mond", hint: "Moon", german: "mond" },
      { id: "eg_nat_9", word: "stern", hint: "Star", german: "stern" },
      { id: "eg_nat_10", word: "regen", hint: "Rain", german: "regen" }
    ]
  },

  emotions: {
    name: "Emotions",
    icon: Heart,
    color: "from-pink-500 to-red-500",
    level: "advanced",
    description: "Feelings and emotions",
    words: [
      { id: "eg_emo_1", word: "gluecklich", hint: "Happy", german: "glücklich" },
      { id: "eg_emo_2", word: "traurig", hint: "Sad", german: "traurig" },
      { id: "eg_emo_3", word: "wuetend", hint: "Angry", german: "wütend" },
      { id: "eg_emo_4", word: "muede", hint: "Tired", german: "müde" },
      { id: "eg_emo_5", word: "aufgeregt", hint: "Excited", german: "aufgeregt" },
      { id: "eg_emo_6", word: "aengstlich", hint: "Afraid", german: "ängstlich" },
      { id: "eg_emo_7", word: "stolz", hint: "Proud", german: "stolz" },
      { id: "eg_emo_8", word: "ueberrascht", hint: "Surprised", german: "überrascht" },
      { id: "eg_emo_9", word: "nervoes", hint: "Nervous", german: "nervös" },
      { id: "eg_emo_10", word: "ruhig", hint: "Calm", german: "ruhig" }
    ]
  },

  professions: {
    name: "Professions",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    level: "intermediate",
    description: "Jobs and careers",
    words: [
      { id: "eg_prof_1", word: "lehrer", hint: "Teacher", german: "lehrer" },
      { id: "eg_prof_2", word: "arzt", hint: "Doctor", german: "arzt" },
      { id: "eg_prof_3", word: "krankenschwester", hint: "Nurse", german: "krankenschwester" },
      { id: "eg_prof_4", word: "ingenieur", hint: "Engineer", german: "ingenieur" },
      { id: "eg_prof_5", word: "polizist", hint: "Police officer", german: "polizist" },
      { id: "eg_prof_6", word: "koch", hint: "Chef/Cook", german: "koch" },
      { id: "eg_prof_7", word: "verkaufer", hint: "Salesperson", german: "verkäufer" },
      { id: "eg_prof_8", word: "programmierer", hint: "Programmer", german: "programmierer" },
      { id: "eg_prof_9", word: "anwalt", hint: "Lawyer", german: "anwalt" },
      { id: "eg_prof_10", word: "kellner", hint: "Waiter", german: "kellner" }
    ]
  },

  hobbies: {
    name: "Hobbies & Activities",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    level: "intermediate",
    description: "Leisure activities",
    words: [
      { id: "eg_hobb_1", word: "lesen", hint: "Reading", german: "lesen" },
      { id: "eg_hobb_2", word: "schwimmen", hint: "Swimming", german: "schwimmen" },
      { id: "eg_hobb_3", word: "tanzen", hint: "Dancing", german: "tanzen" },
      { id: "eg_hobb_4", word: "malen", hint: "Painting", german: "malen" },
      { id: "eg_hobb_5", word: "kochen", hint: "Cooking", german: "kochen" },
      { id: "eg_hobb_6", word: "reisen", hint: "Traveling", german: "reisen" },
      { id: "eg_hobb_7", word: "fotografieren", hint: "Photography", german: "fotografieren" },
      { id: "eg_hobb_8", word: "wandern", hint: "Hiking", german: "wandern" },
      { id: "eg_hobb_9", word: "gitarre", hint: "Guitar", german: "gitarre" },
      { id: "eg_hobb_10", word: "sport", hint: "Sports", german: "sport" }
    ]
  },

  shopping: {
    name: "Shopping",
    icon: ShoppingBag,
    color: "from-emerald-400 to-green-500",
    level: "intermediate",
    description: "Shopping vocabulary",
    words: [
      { id: "eg_shop_1", word: "kaufen", hint: "To buy", german: "kaufen" },
      { id: "eg_shop_2", word: "verkaufen", hint: "To sell", german: "verkaufen" },
      { id: "eg_shop_3", word: "preis", hint: "Price", german: "preis" },
      { id: "eg_shop_4", word: "geld", hint: "Money", german: "geld" },
      { id: "eg_shop_5", word: "kasse", hint: "Checkout/Register", german: "kasse" },
      { id: "eg_shop_6", word: "rabatt", hint: "Discount", german: "rabatt" },
      { id: "eg_shop_7", word: "quittung", hint: "Receipt", german: "quittung" },
      { id: "eg_shop_8", word: "tasche", hint: "Bag", german: "tasche" },
      { id: "eg_shop_9", word: "bezahlen", hint: "To pay", german: "bezahlen" },
      { id: "eg_shop_10", word: "teuer", hint: "Expensive", german: "teuer" }
    ]
  },

  health: {
    name: "Health & Medical",
    icon: Stethoscope,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Health vocabulary",
    words: [
      { id: "eg_health_1", word: "gesundheit", hint: "Health", german: "gesundheit" },
      { id: "eg_health_2", word: "krankenhaus", hint: "Hospital", german: "krankenhaus" },
      { id: "eg_health_3", word: "apotheke", hint: "Pharmacy", german: "apotheke" },
      { id: "eg_health_4", word: "schmerz", hint: "Pain", german: "schmerz" },
      { id: "eg_health_5", word: "medizin", hint: "Medicine", german: "medizin" },
      { id: "eg_health_6", word: "fieber", hint: "Fever", german: "fieber" },
      { id: "eg_health_7", word: "husten", hint: "Cough", german: "husten" },
      { id: "eg_health_8", word: "erkaeltung", hint: "Cold (illness)", german: "erkältung" },
      { id: "eg_health_9", word: "termin", hint: "Appointment", german: "termin" },
      { id: "eg_health_10", word: "gesund", hint: "Healthy", german: "gesund" }
    ]
  },

  restaurant: {
    name: "Restaurant",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Dining out vocabulary",
    words: [
      { id: "eg_rest_1", word: "speisekarte", hint: "Menu", german: "speisekarte" },
      { id: "eg_rest_2", word: "bestellen", hint: "To order", german: "bestellen" },
      { id: "eg_rest_3", word: "rechnung", hint: "Bill", german: "rechnung" },
      { id: "eg_rest_4", word: "trinkgeld", hint: "Tip", german: "trinkgeld" },
      { id: "eg_rest_5", word: "vorspeise", hint: "Appetizer", german: "vorspeise" },
      { id: "eg_rest_6", word: "hauptgericht", hint: "Main course", german: "hauptgericht" },
      { id: "eg_rest_7", word: "nachtisch", hint: "Dessert", german: "nachtisch" },
      { id: "eg_rest_8", word: "getraenk", hint: "Drink/Beverage", german: "getränk" },
      { id: "eg_rest_9", word: "reservierung", hint: "Reservation", german: "reservierung" },
      { id: "eg_rest_10", word: "lecker", hint: "Delicious", german: "lecker" }
    ]
  },

  tech_advanced: {
    name: "Advanced Technology",
    icon: Laptop,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    description: "Advanced tech terms",
    words: [
      { id: "eg_tech_adv_1", word: "herunterladen", hint: "To download", german: "herunterladen" },
      { id: "eg_tech_adv_2", word: "hochladen", hint: "To upload", german: "hochladen" },
      { id: "eg_tech_adv_3", word: "speichern", hint: "To save", german: "speichern" },
      { id: "eg_tech_adv_4", word: "loeschen", hint: "To delete", german: "löschen" },
      { id: "eg_tech_adv_5", word: "datei", hint: "File", german: "datei" },
      { id: "eg_tech_adv_6", word: "ordner", hint: "Folder", german: "ordner" },
      { id: "eg_tech_adv_7", word: "netzwerk", hint: "Network", german: "netzwerk" },
      { id: "eg_tech_adv_8", word: "verbindung", hint: "Connection", german: "verbindung" },
      { id: "eg_tech_adv_9", word: "aktualisieren", hint: "To update", german: "aktualisieren" },
      { id: "eg_tech_adv_10", word: "sicherheit", hint: "Security", german: "sicherheit" }
    ]
  }
};

export default wordBuilderCategories;
