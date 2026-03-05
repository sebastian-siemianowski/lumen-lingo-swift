/**
 * ENGLISH → GERMAN FLASHCARDS
 * 
 * Native Language: English
 * Target Language: German (Deutsch)
 */

import { BookOpen, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, Heart, Cloud, TreePine, Shirt, Briefcase, Car, GraduationCap, Coffee, Dumbbell, Music, Film, Plane, Palette } from "lucide-react";

export const flashcardsCategories = {
  basics: {
    name: "Basics",
    description: "Basic phrases",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-400",
    level: "beginner",
    words: [
      { id: "eg_basic_1", english: "Hello", german: "Hallo", example: "Hallo, wie geht's?", exampleTranslation: "Hello, how are you?" },
      { id: "eg_basic_2", english: "Thank you", german: "Danke", example: "Danke für deine Hilfe", exampleTranslation: "Thank you for your help" },
      { id: "eg_basic_3", english: "Please", german: "Bitte", example: "Bitte, hilf mir", exampleTranslation: "Please, help me" },
      { id: "eg_basic_4", english: "Yes", german: "Ja", example: "Ja, das ist richtig", exampleTranslation: "Yes, that's correct" },
      { id: "eg_basic_5", english: "No", german: "Nein", example: "Nein, ich will nicht", exampleTranslation: "No, I don't want" },
      { id: "eg_basic_6", english: "Sorry", german: "Entschuldigung", example: "Entschuldigung, ich bin spät", exampleTranslation: "Sorry, I'm late" },
      { id: "eg_basic_7", english: "Good morning", german: "Guten Morgen", example: "Guten Morgen, mein Herr", exampleTranslation: "Good morning, sir" },
      { id: "eg_basic_8", english: "Good night", german: "Gute Nacht", example: "Gute Nacht allen", exampleTranslation: "Good night everyone" },
      { id: "eg_basic_9", english: "Goodbye", german: "Auf Wiedersehen", example: "Auf Wiedersehen, bis später", exampleTranslation: "Goodbye, see you later" },
      { id: "eg_basic_10", english: "Have a nice day", german: "Schönen Tag", example: "Schönen Tag noch", exampleTranslation: "Have a nice day" }
    ]
  },

  family: {
    name: "Family",
    icon: Users,
    color: "from-pink-500 to-rose-400",
    level: "beginner",
    description: "Family members",
    words: [
      { id: "eg_fam_1", english: "Father", german: "Vater", example: "Mein Vater arbeitet", exampleTranslation: "My father works" },
      { id: "eg_fam_2", english: "Mother", german: "Mutter", example: "Meine Mutter kocht", exampleTranslation: "My mother cooks" },
      { id: "eg_fam_3", english: "Brother", german: "Bruder", example: "Mein Bruder studiert", exampleTranslation: "My brother studies" },
      { id: "eg_fam_4", english: "Sister", german: "Schwester", example: "Meine Schwester singt", exampleTranslation: "My sister sings" },
      { id: "eg_fam_5", english: "Son", german: "Sohn", example: "Mein Sohn spielt", exampleTranslation: "My son plays" },
      { id: "eg_fam_6", english: "Daughter", german: "Tochter", example: "Meine Tochter liest", exampleTranslation: "My daughter reads" },
      { id: "eg_fam_7", english: "Grandfather", german: "Großvater", example: "Mein Großvater ist alt", exampleTranslation: "My grandfather is old" },
      { id: "eg_fam_8", english: "Grandmother", german: "Großmutter", example: "Meine Großmutter kocht gut", exampleTranslation: "My grandmother cooks well" },
      { id: "eg_fam_9", english: "Uncle", german: "Onkel", example: "Mein Onkel wohnt weit weg", exampleTranslation: "My uncle lives far away" },
      { id: "eg_fam_10", english: "Aunt", german: "Tante", example: "Meine Tante ist nett", exampleTranslation: "My aunt is kind" }
    ]
  },

  house: {
    name: "House",
    icon: Home,
    color: "from-amber-500 to-orange-400",
    level: "beginner",
    description: "Household items",
    words: [
      { id: "eg_house_1", english: "House", german: "Haus", example: "Mein Haus ist groß", exampleTranslation: "My house is big" },
      { id: "eg_house_2", english: "Room", german: "Zimmer", example: "Das Zimmer ist sauber", exampleTranslation: "The room is clean" },
      { id: "eg_house_3", english: "Kitchen", german: "Küche", example: "Ich koche in der Küche", exampleTranslation: "I cook in the kitchen" },
      { id: "eg_house_4", english: "Bathroom", german: "Badezimmer", example: "Das Badezimmer ist neu", exampleTranslation: "The bathroom is new" },
      { id: "eg_house_5", english: "Bedroom", german: "Schlafzimmer", example: "Mein Schlafzimmer ist gemütlich", exampleTranslation: "My bedroom is comfortable" },
      { id: "eg_house_6", english: "Door", german: "Tür", example: "Schließ die Tür", exampleTranslation: "Close the door" },
      { id: "eg_house_7", english: "Window", german: "Fenster", example: "Öffne das Fenster", exampleTranslation: "Open the window" },
      { id: "eg_house_8", english: "Table", german: "Tisch", example: "Der Tisch ist aus Holz", exampleTranslation: "The table is wooden" },
      { id: "eg_house_9", english: "Chair", german: "Stuhl", example: "Der Stuhl ist bequem", exampleTranslation: "The chair is comfortable" },
      { id: "eg_house_10", english: "Bed", german: "Bett", example: "Das Bett ist weich", exampleTranslation: "The bed is soft" }
    ]
  },

  food: {
    name: "Food",
    icon: UtensilsCrossed,
    color: "from-green-500 to-emerald-400",
    level: "beginner",
    description: "Basic foods",
    words: [
      { id: "eg_food_1", english: "Water", german: "Wasser", example: "Ein Glas Wasser, bitte", exampleTranslation: "A glass of water, please" },
      { id: "eg_food_2", english: "Bread", german: "Brot", example: "Frisches Brot", exampleTranslation: "Fresh bread" },
      { id: "eg_food_3", english: "Coffee", german: "Kaffee", example: "Eine Tasse Kaffee", exampleTranslation: "A cup of coffee" },
      { id: "eg_food_4", english: "Tea", german: "Tee", example: "Ich mag Tee", exampleTranslation: "I like tea" },
      { id: "eg_food_5", english: "Milk", german: "Milch", example: "Frische Milch", exampleTranslation: "Fresh milk" },
      { id: "eg_food_6", english: "Apple", german: "Apfel", example: "Roter Apfel", exampleTranslation: "Red apple" },
      { id: "eg_food_7", english: "Meat", german: "Fleisch", example: "Gegrilltes Fleisch", exampleTranslation: "Grilled meat" },
      { id: "eg_food_8", english: "Fish", german: "Fisch", example: "Frischer Fisch", exampleTranslation: "Fresh fish" },
      { id: "eg_food_9", english: "Cheese", german: "Käse", example: "Deutscher Käse", exampleTranslation: "German cheese" },
      { id: "eg_food_10", english: "Wine", german: "Wein", example: "Rotwein", exampleTranslation: "Red wine" }
    ]
  },

  animals: {
    name: "Animals",
    icon: Dog,
    color: "from-purple-500 to-violet-400",
    level: "beginner",
    description: "Animal names",
    words: [
      { id: "eg_animal_1", english: "Dog", german: "Hund", example: "Der Hund ist freundlich", exampleTranslation: "The dog is friendly" },
      { id: "eg_animal_2", english: "Cat", german: "Katze", example: "Die Katze schläft", exampleTranslation: "The cat sleeps" },
      { id: "eg_animal_3", english: "Bird", german: "Vogel", example: "Der Vogel singt", exampleTranslation: "The bird sings" },
      { id: "eg_animal_4", english: "Fish", german: "Fisch", example: "Der Fisch schwimmt", exampleTranslation: "The fish swims" },
      { id: "eg_animal_5", english: "Horse", german: "Pferd", example: "Das Pferd läuft schnell", exampleTranslation: "The horse runs fast" },
      { id: "eg_animal_6", english: "Cow", german: "Kuh", example: "Die Kuh gibt Milch", exampleTranslation: "The cow gives milk" },
      { id: "eg_animal_7", english: "Pig", german: "Schwein", example: "Das Schwein ist auf dem Bauernhof", exampleTranslation: "The pig is on the farm" },
      { id: "eg_animal_8", english: "Chicken", german: "Huhn", example: "Das Huhn legt Eier", exampleTranslation: "The chicken lays eggs" },
      { id: "eg_animal_9", english: "Rabbit", german: "Kaninchen", example: "Das Kaninchen springt", exampleTranslation: "The rabbit jumps" },
      { id: "eg_animal_10", english: "Mouse", german: "Maus", example: "Die Maus ist klein", exampleTranslation: "The mouse is small" }
    ]
  },

  places: {
    name: "Places",
    icon: MapPin,
    color: "from-red-500 to-pink-400",
    level: "beginner",
    description: "Locations",
    words: [
      { id: "eg_place_1", english: "Store", german: "Geschäft", example: "Das Geschäft ist offen", exampleTranslation: "The store is open" },
      { id: "eg_place_2", english: "School", german: "Schule", example: "Ich gehe zur Schule", exampleTranslation: "I go to school" },
      { id: "eg_place_3", english: "Hospital", german: "Krankenhaus", example: "Das Krankenhaus ist nah", exampleTranslation: "The hospital is close" },
      { id: "eg_place_4", english: "Park", german: "Park", example: "Kinder spielen im Park", exampleTranslation: "Children play in the park" },
      { id: "eg_place_5", english: "Train station", german: "Bahnhof", example: "Der Bahnhof", exampleTranslation: "The train station" },
      { id: "eg_place_6", english: "Airport", german: "Flughafen", example: "Ich bin am Flughafen", exampleTranslation: "I'm at the airport" },
      { id: "eg_place_7", english: "Restaurant", german: "Restaurant", example: "Wir essen im Restaurant", exampleTranslation: "We eat at a restaurant" },
      { id: "eg_place_8", english: "Hotel", german: "Hotel", example: "Das Hotel ist groß", exampleTranslation: "The hotel is big" },
      { id: "eg_place_9", english: "Bank", german: "Bank", example: "Ich gehe zur Bank", exampleTranslation: "I go to the bank" },
      { id: "eg_place_10", english: "Museum", german: "Museum", example: "Das Museum ist interessant", exampleTranslation: "The museum is interesting" }
    ]
  },

  time: {
    name: "Time",
    icon: Clock,
    color: "from-indigo-500 to-blue-400",
    level: "beginner",
    description: "Time expressions",
    words: [
      { id: "eg_time_1", english: "Today", german: "Heute", example: "Heute ist Montag", exampleTranslation: "Today is Monday" },
      { id: "eg_time_2", english: "Yesterday", german: "Gestern", example: "Gestern war Sonntag", exampleTranslation: "Yesterday was Sunday" },
      { id: "eg_time_3", english: "Tomorrow", german: "Morgen", example: "Morgen ist Dienstag", exampleTranslation: "Tomorrow is Tuesday" },
      { id: "eg_time_4", english: "Now", german: "Jetzt", example: "Ich arbeite jetzt", exampleTranslation: "I'm working now" },
      { id: "eg_time_5", english: "Later", german: "Später", example: "Ich mache es später", exampleTranslation: "I'll do it later" },
      { id: "eg_time_6", english: "Morning", german: "Morgen", example: "Guten Morgen", exampleTranslation: "Good morning" },
      { id: "eg_time_7", english: "Day", german: "Tag", example: "Der Tag ist lang", exampleTranslation: "The day is long" },
      { id: "eg_time_8", english: "Night", german: "Nacht", example: "Gute Nacht", exampleTranslation: "Good night" },
      { id: "eg_time_9", english: "Week", german: "Woche", example: "Nächste Woche", exampleTranslation: "Next week" },
      { id: "eg_time_10", english: "Month", german: "Monat", example: "Dieser Monat", exampleTranslation: "This month" }
    ]
  },

  emotions: {
    name: "Emotions",
    icon: Heart,
    color: "from-rose-500 to-pink-400",
    level: "beginner",
    description: "Feelings",
    words: [
      { id: "eg_emo_1", english: "Happy", german: "Glücklich", example: "Ich bin glücklich", exampleTranslation: "I am happy" },
      { id: "eg_emo_2", english: "Sad", german: "Traurig", example: "Er ist traurig", exampleTranslation: "He is sad" },
      { id: "eg_emo_3", english: "Angry", german: "Wütend", example: "Sie ist wütend", exampleTranslation: "She is angry" },
      { id: "eg_emo_4", english: "Tired", german: "Müde", example: "Ich bin müde", exampleTranslation: "I am tired" },
      { id: "eg_emo_5", english: "Excited", german: "Aufgeregt", example: "Wir sind aufgeregt", exampleTranslation: "We are excited" },
      { id: "eg_emo_6", english: "Nervous", german: "Nervös", example: "Er ist nervös", exampleTranslation: "He is nervous" },
      { id: "eg_emo_7", english: "Calm", german: "Ruhig", example: "Sie ist ruhig", exampleTranslation: "She is calm" },
      { id: "eg_emo_8", english: "Surprised", german: "Überrascht", example: "Ich bin überrascht", exampleTranslation: "I am surprised" },
      { id: "eg_emo_9", english: "Scared", german: "Ängstlich", example: "Das Kind ist ängstlich", exampleTranslation: "The child is scared" },
      { id: "eg_emo_10", english: "Bored", german: "Gelangweilt", example: "Sie sind gelangweilt", exampleTranslation: "They are bored" }
    ]
  },

  weather: {
    name: "Weather",
    icon: Cloud,
    color: "from-sky-500 to-cyan-400",
    level: "beginner",
    description: "Weather conditions",
    words: [
      { id: "eg_weather_1", english: "Sun", german: "Sonne", example: "Die Sonne scheint", exampleTranslation: "The sun shines" },
      { id: "eg_weather_2", english: "Rain", german: "Regen", example: "Es regnet", exampleTranslation: "It's raining" },
      { id: "eg_weather_3", english: "Snow", german: "Schnee", example: "Es schneit", exampleTranslation: "It's snowing" },
      { id: "eg_weather_4", english: "Wind", german: "Wind", example: "Es ist windig", exampleTranslation: "It's windy" },
      { id: "eg_weather_5", english: "Cloud", german: "Wolke", example: "Am Himmel sind Wolken", exampleTranslation: "There are clouds in the sky" },
      { id: "eg_weather_6", english: "Storm", german: "Gewitter", example: "Ein Gewitter kommt", exampleTranslation: "A storm is coming" },
      { id: "eg_weather_7", english: "Hot", german: "Heiß", example: "Es ist sehr heiß", exampleTranslation: "It's very hot" },
      { id: "eg_weather_8", english: "Cold", german: "Kalt", example: "Im Winter ist es kalt", exampleTranslation: "It's cold in winter" },
      { id: "eg_weather_9", english: "Lightning", german: "Blitz", example: "Ich sah einen Blitz", exampleTranslation: "I saw lightning" },
      { id: "eg_weather_10", english: "Thunder", german: "Donner", example: "Man kann den Donner hören", exampleTranslation: "You can hear thunder" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-lime-500 to-green-400",
    level: "intermediate",
    description: "Nature",
    words: [
      { id: "eg_nature_1", english: "Tree", german: "Baum", example: "Der Baum ist hoch", exampleTranslation: "The tree is tall" },
      { id: "eg_nature_2", english: "Flower", german: "Blume", example: "Die Blume ist schön", exampleTranslation: "The flower is beautiful" },
      { id: "eg_nature_3", english: "Mountain", german: "Berg", example: "Der Berg ist hoch", exampleTranslation: "The mountain is high" },
      { id: "eg_nature_4", english: "River", german: "Fluss", example: "Der Fluss ist lang", exampleTranslation: "The river is long" },
      { id: "eg_nature_5", english: "Sea", german: "Meer", example: "Das Meer ist blau", exampleTranslation: "The sea is blue" },
      { id: "eg_nature_6", english: "Forest", german: "Wald", example: "Wir gehen durch den Wald", exampleTranslation: "We walk through the forest" },
      { id: "eg_nature_7", english: "Lake", german: "See", example: "Der See ist ruhig", exampleTranslation: "The lake is calm" },
      { id: "eg_nature_8", english: "Sky", german: "Himmel", example: "Der Himmel ist blau", exampleTranslation: "The sky is blue" },
      { id: "eg_nature_9", english: "Star", german: "Stern", example: "Die Sterne leuchten", exampleTranslation: "The stars shine" },
      { id: "eg_nature_10", english: "Moon", german: "Mond", example: "Der Mond ist voll", exampleTranslation: "The moon is full" }
    ]
  },

  clothing: {
    name: "Clothing",
    icon: Shirt,
    color: "from-fuchsia-500 to-purple-400",
    level: "beginner",
    description: "Clothing",
    words: [
      { id: "eg_cloth_1", english: "Shirt", german: "Hemd", example: "Ich mag dein Hemd", exampleTranslation: "I like your shirt" },
      { id: "eg_cloth_2", english: "Pants", german: "Hose", example: "Ich brauche eine neue Hose", exampleTranslation: "I need new pants" },
      { id: "eg_cloth_3", english: "Shoes", german: "Schuhe", example: "Ich kaufte schwarze Schuhe", exampleTranslation: "I bought black shoes" },
      { id: "eg_cloth_4", english: "Dress", german: "Kleid", example: "Schönes Kleid", exampleTranslation: "Beautiful dress" },
      { id: "eg_cloth_5", english: "Jacket", german: "Jacke", example: "Ich brauche eine Jacke", exampleTranslation: "I need a jacket" },
      { id: "eg_cloth_6", english: "Hat", german: "Hut", example: "Setz den Hut auf", exampleTranslation: "Put on the hat" },
      { id: "eg_cloth_7", english: "Socks", german: "Socken", example: "Meine Socken sind sauber", exampleTranslation: "My socks are clean" },
      { id: "eg_cloth_8", english: "Gloves", german: "Handschuhe", example: "Im Winter trägst du Handschuhe", exampleTranslation: "You wear gloves in winter" },
      { id: "eg_cloth_9", english: "Scarf", german: "Schal", example: "Der Schal ist weich", exampleTranslation: "The scarf is soft" },
      { id: "eg_cloth_10", english: "Skirt", german: "Rock", example: "Der Rock ist hübsch", exampleTranslation: "The skirt is nice" }
    ]
  },

  work: {
    name: "Work",
    icon: Briefcase,
    color: "from-slate-500 to-gray-400",
    level: "intermediate",
    description: "Professions",
    words: [
      { id: "eg_work_1", english: "Work", german: "Arbeit", example: "Ich gehe zur Arbeit", exampleTranslation: "I go to work" },
      { id: "eg_work_2", english: "Doctor", german: "Arzt", example: "Er ist Arzt", exampleTranslation: "He is a doctor" },
      { id: "eg_work_3", english: "Teacher", german: "Lehrer", example: "Mein Lehrer ist großartig", exampleTranslation: "My teacher is great" },
      { id: "eg_work_4", english: "Engineer", german: "Ingenieur", example: "Ich bin Ingenieur", exampleTranslation: "I am an engineer" },
      { id: "eg_work_5", english: "Lawyer", german: "Anwalt", example: "Sie ist Anwältin", exampleTranslation: "She is a lawyer" },
      { id: "eg_work_6", english: "Manager", german: "Manager", example: "Ich arbeite als Manager", exampleTranslation: "I work as a manager" },
      { id: "eg_work_7", english: "Office", german: "Büro", example: "Ich arbeite im Büro", exampleTranslation: "I work in an office" },
      { id: "eg_work_8", english: "Salary", german: "Gehalt", example: "Mein Gehalt ist gut", exampleTranslation: "My salary is good" },
      { id: "eg_work_9", english: "Boss", german: "Chef", example: "Mein Chef ist anspruchsvoll", exampleTranslation: "My boss is demanding" },
      { id: "eg_work_10", english: "Colleague", german: "Kollege", example: "Das ist mein Kollege von der Arbeit", exampleTranslation: "This is my colleague from work" }
    ]
  },

  transport: {
    name: "Transport",
    icon: Car,
    color: "from-orange-500 to-amber-400",
    level: "intermediate",
    description: "Transportation",
    words: [
      { id: "eg_trans_1", english: "Car", german: "Auto", example: "Ich habe ein neues Auto", exampleTranslation: "I have a new car" },
      { id: "eg_trans_2", english: "Bus", german: "Bus", example: "Ich fahre mit dem Bus", exampleTranslation: "I go by bus" },
      { id: "eg_trans_3", english: "Train", german: "Zug", example: "Der Zug ist schnell", exampleTranslation: "The train is fast" },
      { id: "eg_trans_4", english: "Airplane", german: "Flugzeug", example: "Ich fliege mit dem Flugzeug", exampleTranslation: "I fly by plane" },
      { id: "eg_trans_5", english: "Bicycle", german: "Fahrrad", example: "Ich fahre mit dem Fahrrad", exampleTranslation: "I ride a bicycle" },
      { id: "eg_trans_6", english: "Taxi", german: "Taxi", example: "Ruf ein Taxi", exampleTranslation: "Call a taxi" },
      { id: "eg_trans_7", english: "Metro", german: "U-Bahn", example: "Ich benutze die U-Bahn", exampleTranslation: "I use the metro" },
      { id: "eg_trans_8", english: "Ticket", german: "Fahrkarte", example: "Kauf die Fahrkarte", exampleTranslation: "Buy the ticket" },
      { id: "eg_trans_9", english: "Journey", german: "Reise", example: "Ich mache eine Reise", exampleTranslation: "I'm going on a journey" },
      { id: "eg_trans_10", english: "Driver", german: "Fahrer", example: "Der Fahrer ist vorsichtig", exampleTranslation: "The driver is careful" }
    ]
  },

  education: {
    name: "Education",
    icon: GraduationCap,
    color: "from-teal-500 to-cyan-400",
    level: "intermediate",
    description: "Education",
    words: [
      { id: "eg_edu_1", english: "Student", german: "Schüler", example: "Ich bin Schüler", exampleTranslation: "I am a student" },
      { id: "eg_edu_2", english: "Lesson", german: "Unterricht", example: "Ich habe um neun Unterricht", exampleTranslation: "I have a lesson at nine" },
      { id: "eg_edu_3", english: "Homework", german: "Hausaufgaben", example: "Ich habe viele Hausaufgaben", exampleTranslation: "I have a lot of homework" },
      { id: "eg_edu_4", english: "Exam", german: "Prüfung", example: "Die Prüfung ist morgen", exampleTranslation: "The exam is tomorrow" },
      { id: "eg_edu_5", english: "Book", german: "Buch", example: "Lies dieses Buch", exampleTranslation: "Read this book" },
      { id: "eg_edu_6", english: "Notebook", german: "Heft", example: "Ich brauche ein neues Heft", exampleTranslation: "I need a new notebook" },
      { id: "eg_edu_7", english: "Pencil", german: "Bleistift", example: "Hast du einen Bleistift?", exampleTranslation: "Do you have a pencil?" },
      { id: "eg_edu_8", english: "Pen", german: "Kugelschreiber", example: "Leih mir einen Kugelschreiber", exampleTranslation: "Lend me a pen" },
      { id: "eg_edu_9", english: "Backpack", german: "Rucksack", example: "Mein Rucksack ist schwer", exampleTranslation: "My backpack is heavy" },
      { id: "eg_edu_10", english: "Library", german: "Bibliothek", example: "Ich lerne in der Bibliothek", exampleTranslation: "I study at the library" }
    ]
  },

  restaurant: {
    name: "Restaurant",
    icon: Coffee,
    color: "from-amber-500 to-yellow-400",
    level: "intermediate",
    description: "At the restaurant",
    words: [
      { id: "eg_rest_1", english: "Restaurant", german: "Restaurant", example: "Wir essen im Restaurant", exampleTranslation: "We eat at a restaurant" },
      { id: "eg_rest_2", english: "Menu", german: "Speisekarte", example: "Die Speisekarte, bitte", exampleTranslation: "The menu, please" },
      { id: "eg_rest_3", english: "Waiter", german: "Kellner", example: "Der Kellner ist nett", exampleTranslation: "The waiter is nice" },
      { id: "eg_rest_4", english: "Order", german: "Bestellung", example: "Ich möchte bestellen", exampleTranslation: "I want to order" },
      { id: "eg_rest_5", english: "Bill", german: "Rechnung", example: "Die Rechnung, bitte", exampleTranslation: "The bill, please" },
      { id: "eg_rest_6", english: "Tip", german: "Trinkgeld", example: "Ich lasse Trinkgeld", exampleTranslation: "I leave a tip" },
      { id: "eg_rest_7", english: "Delicious", german: "Lecker", example: "Das ist lecker", exampleTranslation: "This is delicious" },
      { id: "eg_rest_8", english: "Hungry", german: "Hungrig", example: "Ich bin hungrig", exampleTranslation: "I am hungry" },
      { id: "eg_rest_9", english: "Thirsty", german: "Durstig", example: "Ich bin durstig", exampleTranslation: "I am thirsty" },
      { id: "eg_rest_10", english: "Table", german: "Tisch", example: "Ich reserviere einen Tisch", exampleTranslation: "I'm reserving a table" }
    ]
  },

  sports: {
    name: "Sports",
    icon: Dumbbell,
    color: "from-red-500 to-orange-400",
    level: "intermediate",
    description: "Sports",
    words: [
      { id: "eg_sport_1", english: "Football", german: "Fußball", example: "Ich spiele Fußball", exampleTranslation: "I play football" },
      { id: "eg_sport_2", english: "Basketball", german: "Basketball", example: "Ich mag Basketball", exampleTranslation: "I like basketball" },
      { id: "eg_sport_3", english: "Swimming", german: "Schwimmen", example: "Schwimmen ist gesund", exampleTranslation: "Swimming is healthy" },
      { id: "eg_sport_4", english: "Running", german: "Laufen", example: "Ich laufe am Morgen", exampleTranslation: "I run in the morning" },
      { id: "eg_sport_5", english: "Tennis", german: "Tennis", example: "Ich spiele Tennis", exampleTranslation: "I play tennis" },
      { id: "eg_sport_6", english: "Gym", german: "Fitnessstudio", example: "Ich gehe ins Fitnessstudio", exampleTranslation: "I go to the gym" },
      { id: "eg_sport_7", english: "Training", german: "Training", example: "Ich habe heute Training", exampleTranslation: "I have training today" },
      { id: "eg_sport_8", english: "Match", german: "Spiel", example: "Wir schauen uns ein Spiel an", exampleTranslation: "We watch a match" },
      { id: "eg_sport_9", english: "Team", german: "Mannschaft", example: "Ich bin in einer Mannschaft", exampleTranslation: "I'm on a team" },
      { id: "eg_sport_10", english: "Coach", german: "Trainer", example: "Unser Trainer ist großartig", exampleTranslation: "Our coach is great" }
    ]
  },

  entertainment: {
    name: "Entertainment",
    icon: Music,
    color: "from-violet-500 to-purple-400",
    level: "advanced",
    description: "Hobbies",
    words: [
      { id: "eg_ent_1", english: "Music", german: "Musik", example: "Ich höre Musik", exampleTranslation: "I listen to music" },
      { id: "eg_ent_2", english: "Cinema", german: "Kino", example: "Ich schaue Filme", exampleTranslation: "I watch movies" },
      { id: "eg_ent_3", english: "Reading", german: "Lesen", example: "Lesen ist mein Hobby", exampleTranslation: "Reading is my hobby" },
      { id: "eg_ent_4", english: "Dance", german: "Tanz", example: "Ich liebe Tanz", exampleTranslation: "I love dance" },
      { id: "eg_ent_5", english: "Singing", german: "Singen", example: "Ich singe gern", exampleTranslation: "I like to sing" },
      { id: "eg_ent_6", english: "Guitar", german: "Gitarre", example: "Ich spiele Gitarre", exampleTranslation: "I play guitar" },
      { id: "eg_ent_7", english: "Concert", german: "Konzert", example: "Ich gehe zum Konzert", exampleTranslation: "I go to a concert" },
      { id: "eg_ent_8", english: "Theater", german: "Theater", example: "Ich gehe ins Theater", exampleTranslation: "I go to the theater" },
      { id: "eg_ent_9", english: "Games", german: "Spiele", example: "Ich spiele Computerspiele", exampleTranslation: "I play computer games" },
      { id: "eg_ent_10", english: "Photography", german: "Fotografie", example: "Ich interessiere mich für Fotografie", exampleTranslation: "I'm interested in photography" }
    ]
  },

  movies: {
    name: "Movies & TV",
    icon: Film,
    color: "from-blue-500 to-indigo-400",
    level: "advanced",
    description: "Media",
    words: [
      { id: "eg_movie_1", english: "Movie", german: "Film", example: "Der Film ist gut", exampleTranslation: "The movie is good" },
      { id: "eg_movie_2", english: "Actor", german: "Schauspieler", example: "Er ist ein großartiger Schauspieler", exampleTranslation: "He's a great actor" },
      { id: "eg_movie_3", english: "Director", german: "Regisseur", example: "Der Regisseur ist berühmt", exampleTranslation: "The director is famous" },
      { id: "eg_movie_4", english: "Cinema", german: "Kino", example: "Ich gehe ins Kino", exampleTranslation: "I go to the cinema" },
      { id: "eg_movie_5", english: "TV series", german: "Serie", example: "Ich schaue eine Serie", exampleTranslation: "I watch a TV series" },
      { id: "eg_movie_6", english: "Television", german: "Fernsehen", example: "Ich schaue Fernsehen", exampleTranslation: "I watch television" },
      { id: "eg_movie_7", english: "Program", german: "Programm", example: "Das Programm ist interessant", exampleTranslation: "The program is interesting" },
      { id: "eg_movie_8", english: "Screen", german: "Leinwand", example: "Die Leinwand ist groß", exampleTranslation: "The screen is big" },
      { id: "eg_movie_9", english: "Ticket", german: "Eintrittskarte", example: "Ich kaufe eine Eintrittskarte", exampleTranslation: "I'm buying a ticket" },
      { id: "eg_movie_10", english: "Advertisement", german: "Werbung", example: "Die Werbung ist lang", exampleTranslation: "The advertisement is long" }
    ]
  },

  travel: {
    name: "Travel",
    icon: Plane,
    color: "from-cyan-500 to-blue-400",
    level: "advanced",
    description: "Tourism",
    words: [
      { id: "eg_travel_1", english: "Travel", german: "Reise", example: "Ich mache eine Reise", exampleTranslation: "I'm going on a trip" },
      { id: "eg_travel_2", english: "Suitcase", german: "Koffer", example: "Mein Koffer ist schwer", exampleTranslation: "My suitcase is heavy" },
      { id: "eg_travel_3", english: "Passport", german: "Reisepass", example: "Ich brauche meinen Reisepass", exampleTranslation: "I need my passport" },
      { id: "eg_travel_4", english: "Hotel", german: "Hotel", example: "Das Hotel ist komfortabel", exampleTranslation: "The hotel is comfortable" },
      { id: "eg_travel_5", english: "Reservation", german: "Reservierung", example: "Ich habe eine Reservierung", exampleTranslation: "I have a reservation" },
      { id: "eg_travel_6", english: "Tourist", german: "Tourist", example: "Ich bin Tourist", exampleTranslation: "I am a tourist" },
      { id: "eg_travel_7", english: "Vacation", german: "Urlaub", example: "Ich bin im Urlaub", exampleTranslation: "I'm on vacation" },
      { id: "eg_travel_8", english: "Sightseeing", german: "Besichtigung", example: "Wir machen eine Besichtigung", exampleTranslation: "We're doing sightseeing" },
      { id: "eg_travel_9", english: "Guide", german: "Reiseführer", example: "Der Reiseführer ist informativ", exampleTranslation: "The guide is informative" },
      { id: "eg_travel_10", english: "Souvenir", german: "Souvenir", example: "Ich kaufe ein Souvenir", exampleTranslation: "I'm buying a souvenir" }
    ]
  },

  colors: {
    name: "Colors",
    icon: Palette,
    color: "from-pink-500 to-yellow-400",
    level: "beginner",
    description: "Color names",
    words: [
      { id: "eg_color_1", english: "Red", german: "Rot", example: "Das Auto ist rot", exampleTranslation: "The car is red" },
      { id: "eg_color_2", english: "Blue", german: "Blau", example: "Der Himmel ist blau", exampleTranslation: "The sky is blue" },
      { id: "eg_color_3", english: "Green", german: "Grün", example: "Das Gras ist grün", exampleTranslation: "The grass is green" },
      { id: "eg_color_4", english: "Yellow", german: "Gelb", example: "Die Sonne ist gelb", exampleTranslation: "The sun is yellow" },
      { id: "eg_color_5", english: "White", german: "Weiß", example: "Der Schnee ist weiß", exampleTranslation: "The snow is white" },
      { id: "eg_color_6", english: "Black", german: "Schwarz", example: "Die Nacht ist schwarz", exampleTranslation: "The night is black" },
      { id: "eg_color_7", english: "Orange", german: "Orange", example: "Die Orange ist orange", exampleTranslation: "The orange is orange" },
      { id: "eg_color_8", english: "Purple", german: "Lila", example: "Die Blume ist lila", exampleTranslation: "The flower is purple" },
      { id: "eg_color_9", english: "Pink", german: "Rosa", example: "Das Kleid ist rosa", exampleTranslation: "The dress is pink" },
      { id: "eg_color_10", english: "Brown", german: "Braun", example: "Der Bär ist braun", exampleTranslation: "The bear is brown" }
    ]
  }
};

export default flashcardsCategories;