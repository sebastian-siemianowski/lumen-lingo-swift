/**
 * GERMAN → ENGLISH FLASHCARDS
 *
 * Native Language: German (Deutsch)
 * Target Language: English
 */

import { BookOpen, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, Heart, Cloud, TreePine, Shirt, Briefcase, Car, GraduationCap, Coffee, Palette } from 'lucide-react';
import { flashcardsCategories_part1 } from './flashcardsData_part1';
import { flashcardsCategories_part2 } from './flashcardsData_part2';
import { flashcardsCategories_part3 } from './flashcardsData_part3';
import { flashcardsCategories_part4 } from './flashcardsData_part4';
import { flashcardsCategories_part5 } from './flashcardsData_part5';
import { flashcardsCategories_part6 } from './flashcardsData_part6';

export const flashcardsCategories = {
  basics: {
    name: "Grundlagen",
    description: "Grundlegende Phrasen",
    icon: BookOpen,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ge_basic_1", german: "Hallo", english: "Hello", difficulty: "easy", example: "Hello, how are you?", exampleTranslation: "Hallo, wie geht's?" },
      { id: "ge_basic_2", german: "Danke", english: "Thank you", difficulty: "easy", example: "Thank you for your help", exampleTranslation: "Danke für deine Hilfe" },
      { id: "ge_basic_3", german: "Bitte", english: "Please", difficulty: "easy", example: "Please, help me", exampleTranslation: "Bitte, hilf mir" },
      { id: "ge_basic_4", german: "Ja", english: "Yes", difficulty: "easy", example: "Yes, that's correct", exampleTranslation: "Ja, das ist richtig" },
      { id: "ge_basic_5", german: "Nein", english: "No", difficulty: "easy", example: "No, I don't want", exampleTranslation: "Nein, ich will nicht" },
      { id: "ge_basic_6", german: "Entschuldigung", english: "Sorry", difficulty: "easy", example: "Sorry, I'm late", exampleTranslation: "Entschuldigung, ich bin spät" },
      { id: "ge_basic_7", german: "Guten Morgen", english: "Good morning", difficulty: "easy", example: "Good morning, sir", exampleTranslation: "Guten Morgen, mein Herr" },
      { id: "ge_basic_8", german: "Gute Nacht", english: "Good night", difficulty: "easy", example: "Good night everyone", exampleTranslation: "Gute Nacht allen" },
      { id: "ge_basic_9", german: "Auf Wiedersehen", english: "Goodbye", difficulty: "easy", example: "Goodbye, see you later", exampleTranslation: "Auf Wiedersehen, bis später" },
      { id: "ge_basic_10", german: "Schönen Tag", english: "Have a nice day", difficulty: "easy", example: "Have a nice day", exampleTranslation: "Schönen Tag noch" },
      { id: "ge_basic_11", german: "Wie geht's?", english: "How are you?", difficulty: "medium", example: "How are you today?", exampleTranslation: "Wie geht's dir heute?" },
      { id: "ge_basic_12", german: "Gut", english: "Good", difficulty: "medium", example: "I'm good, thank you", exampleTranslation: "Mir geht's gut, danke" },
      { id: "ge_basic_13", german: "Sehr gut", english: "Very good", difficulty: "medium", example: "I'm very good", exampleTranslation: "Mir geht's sehr gut" },
      { id: "ge_basic_14", german: "Bis später", english: "See you later", difficulty: "hard", example: "See you later! Have a nice day!", exampleTranslation: "Bis später! Schönen Tag noch!" },
      { id: "ge_basic_15", german: "Bis bald", english: "See you soon", difficulty: "hard", example: "See you soon! Take care!", exampleTranslation: "Bis bald! Pass auf dich auf!" }
    ]
  },

  family: {
    name: "Familie",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Familienmitglieder",
    words: [
      { id: "ge_fam_1", german: "Vater", english: "Father", difficulty: "easy", example: "My father works", exampleTranslation: "Mein Vater arbeitet" },
      { id: "ge_fam_2", german: "Mutter", english: "Mother", difficulty: "easy", example: "My mother cooks", exampleTranslation: "Meine Mutter kocht" },
      { id: "ge_fam_3", german: "Bruder", english: "Brother", difficulty: "easy", example: "My brother studies", exampleTranslation: "Mein Bruder studiert" },
      { id: "ge_fam_4", german: "Schwester", english: "Sister", difficulty: "easy", example: "My sister sings", exampleTranslation: "Meine Schwester singt" },
      { id: "ge_fam_5", german: "Sohn", english: "Son", difficulty: "easy", example: "My son plays", exampleTranslation: "Mein Sohn spielt" },
      { id: "ge_fam_6", german: "Tochter", english: "Daughter", difficulty: "easy", example: "My daughter reads", exampleTranslation: "Meine Tochter liest" },
      { id: "ge_fam_7", german: "Großvater", english: "Grandfather", difficulty: "easy", example: "My grandfather is old", exampleTranslation: "Mein Großvater ist alt" },
      { id: "ge_fam_8", german: "Großmutter", english: "Grandmother", difficulty: "easy", example: "My grandmother cooks well", exampleTranslation: "Meine Großmutter kocht gut" },
      { id: "ge_fam_9", german: "Onkel", english: "Uncle", difficulty: "easy", example: "My uncle lives far away", exampleTranslation: "Mein Onkel wohnt weit weg" },
      { id: "ge_fam_10", german: "Tante", english: "Aunt", difficulty: "medium", example: "My aunt is kind", exampleTranslation: "Meine Tante ist nett" },
      { id: "ge_fam_11", german: "Cousin", english: "Cousin", difficulty: "medium", example: "My cousin visits us", exampleTranslation: "Mein Cousin besucht uns" },
      { id: "ge_fam_12", german: "Neffe", english: "Nephew", difficulty: "medium", example: "My nephew is young", exampleTranslation: "Mein Neffe ist jung" },
      { id: "ge_fam_13", german: "Nichte", english: "Niece", difficulty: "medium", example: "My niece is smart", exampleTranslation: "Meine Nichte ist klug" },
      { id: "ge_fam_14", german: "Verwandte", english: "Relatives", difficulty: "hard", example: "All my relatives are coming", exampleTranslation: "Alle meine Verwandten kommen" },
      { id: "ge_fam_15", german: "Familie", english: "Family", difficulty: "hard", example: "Familie ist mir sehr wichtig", exampleTranslation: "Familie ist mir sehr wichtig" }
    ]
  },

  house: {
    name: "Haus",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    description: "Gegenstände im Haus",
    words: [
      { id: "ge_house_1", german: "Haus", english: "House", difficulty: "easy", example: "My house is big", exampleTranslation: "Mein Haus ist groß" },
      { id: "ge_house_2", german: "Zimmer", english: "Room", difficulty: "easy", example: "The room is clean", exampleTranslation: "Das Zimmer ist sauber" },
      { id: "ge_house_3", german: "Küche", english: "Kitchen", difficulty: "easy", example: "I cook in the kitchen", exampleTranslation: "Ich koche in der Küche" },
      { id: "ge_house_4", german: "Badezimmer", english: "Bathroom", difficulty: "easy", example: "The bathroom is new", exampleTranslation: "Das Badezimmer ist neu" },
      { id: "ge_house_5", german: "Schlafzimmer", english: "Bedroom", difficulty: "easy", example: "My bedroom is comfortable", exampleTranslation: "Mein Schlafzimmer ist gemütlich" },
      { id: "ge_house_6", german: "Tür", english: "Door", difficulty: "easy", example: "Close the door", exampleTranslation: "Schließ die Tür" },
      { id: "ge_house_7", german: "Fenster", english: "Window", difficulty: "easy", example: "Open the window", exampleTranslation: "Öffne das Fenster" },
      { id: "ge_house_8", german: "Tisch", english: "Table", difficulty: "easy", example: "The table is wooden", exampleTranslation: "Der Tisch ist aus Holz" },
      { id: "ge_house_9", german: "Stuhl", english: "Chair", difficulty: "easy", example: "The chair is comfortable", exampleTranslation: "Der Stuhl ist bequem" },
      { id: "ge_house_10", german: "Bett", english: "Bed", difficulty: "medium", example: "The bed is soft", exampleTranslation: "Das Bett ist weich" },
      { id: "ge_house_11", german: "Sofa", english: "Sofa", difficulty: "medium", example: "The sofa is new", exampleTranslation: "Das Sofa ist neu" },
      { id: "ge_house_12", german: "Lampe", english: "Lamp", difficulty: "medium", example: "Turn on the lamp", exampleTranslation: "Schalte die Lampe an" },
      { id: "ge_house_13", german: "Spiegel", english: "Mirror", difficulty: "medium", example: "Look in the mirror", exampleTranslation: "Schau in den Spiegel" },
      { id: "ge_house_14", german: "Vorhang", english: "Curtain", difficulty: "hard", example: "Close the curtains", exampleTranslation: "Schließ die Vorhänge" },
      { id: "ge_house_15", german: "Teppich", english: "Carpet", difficulty: "hard", example: "The carpet is soft", exampleTranslation: "Der Teppich ist weich" }
    ]
  },

  food: {
    name: "Essen",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    description: "Grundnahrungsmittel",
    words: [
      { id: "ge_food_1", german: "Wasser", english: "Water", difficulty: "easy", example: "A glass of water, please", exampleTranslation: "Ein Glas Wasser, bitte" },
      { id: "ge_food_2", german: "Brot", english: "Bread", difficulty: "easy", example: "Frisches Brot", exampleTranslation: "Frisches Brot" },
      { id: "ge_food_3", german: "Kaffee", english: "Coffee", difficulty: "easy", example: "A cup of coffee", exampleTranslation: "Eine Tasse Kaffee" },
      { id: "ge_food_4", german: "Tee", english: "Tea", difficulty: "easy", example: "I like tea", exampleTranslation: "Ich mag Tee" },
      { id: "ge_food_5", german: "Milch", english: "Milk", difficulty: "easy", example: "Fresh milk", exampleTranslation: "Frische Milch" },
      { id: "ge_food_6", german: "Apfel", english: "Apple", difficulty: "easy", example: "Red apple", exampleTranslation: "Roter Apfel" },
      { id: "ge_food_7", german: "Fleisch", english: "Meat", difficulty: "easy", example: "Grilled meat", exampleTranslation: "Gegrilltes Fleisch" },
      { id: "ge_food_8", german: "Fisch", english: "Fish", difficulty: "easy", example: "Fresh fish", exampleTranslation: "Frischer Fisch" },
      { id: "ge_food_9", german: "Käse", english: "Cheese", difficulty: "easy", example: "German cheese", exampleTranslation: "Deutscher Käse" },
      { id: "ge_food_10", german: "Wein", english: "Wine", difficulty: "medium", example: "Red wine", exampleTranslation: "Rotwein" },
      { id: "ge_food_11", german: "Bier", english: "Beer", difficulty: "medium", example: "Cold beer", exampleTranslation: "Kaltes Bier" },
      { id: "ge_food_12", german: "Saft", english: "Juice", difficulty: "medium", example: "Orange juice", exampleTranslation: "Orangensaft" },
      { id: "ge_food_13", german: "Gemüse", english: "Vegetables", difficulty: "medium", example: "Fresh vegetables", exampleTranslation: "Frisches Gemüse" },
      { id: "ge_food_14", german: "Obst", english: "Fruit", difficulty: "hard", example: "I eat fruit daily", exampleTranslation: "Ich esse täglich Obst" },
      { id: "ge_food_15", german: "Mahlzeit", english: "Meal", difficulty: "hard", example: "Enjoy your meal!", exampleTranslation: "Guten Appetit!" }
    ]
  },

  animals: {
    name: "Tiere",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "beginner",
    description: "Tiernamen",
    words: [
      { id: "ge_animal_1", german: "Hund", english: "Dog", difficulty: "easy", example: "The dog is friendly", exampleTranslation: "Der Hund ist freundlich" },
      { id: "ge_animal_2", german: "Katze", english: "Cat", difficulty: "easy", example: "The cat sleeps", exampleTranslation: "Die Katze schläft" },
      { id: "ge_animal_3", german: "Vogel", english: "Bird", difficulty: "easy", example: "The bird sings", exampleTranslation: "Der Vogel singt" },
      { id: "ge_animal_4", german: "Fisch", english: "Fish", difficulty: "easy", example: "The fish swims", exampleTranslation: "Der Fisch schwimmt" },
      { id: "ge_animal_5", german: "Pferd", english: "Horse", difficulty: "easy", example: "The horse runs fast", exampleTranslation: "Das Pferd läuft schnell" },
      { id: "ge_animal_6", german: "Kuh", english: "Cow", difficulty: "easy", example: "The cow gives milk", exampleTranslation: "Die Kuh gibt Milch" },
      { id: "ge_animal_7", german: "Schwein", english: "Pig", difficulty: "easy", example: "The pig is on the farm", exampleTranslation: "Das Schwein ist auf dem Bauernhof" },
      { id: "ge_animal_8", german: "Huhn", english: "Chicken", difficulty: "easy", example: "The chicken lays eggs", exampleTranslation: "Das Huhn legt Eier" },
      { id: "ge_animal_9", german: "Kaninchen", english: "Rabbit", difficulty: "easy", example: "Das Kaninchen springt", exampleTranslation: "The rabbit jumps" },
      { id: "ge_animal_10", german: "Maus", english: "Mouse", difficulty: "medium", example: "Die Maus ist klein", exampleTranslation: "The mouse is small" },
      { id: "ge_animal_11", german: "Elefant", english: "Elephant", difficulty: "medium", example: "Der Elefant ist groß", exampleTranslation: "The elephant is big" },
      { id: "ge_animal_12", german: "Löwe", english: "Lion", difficulty: "medium", example: "Der Löwe ist stark", exampleTranslation: "The lion is strong" },
      { id: "ge_animal_13", german: "Bär", english: "Bear", difficulty: "medium", example: "Der Bär schläft im Winter", exampleTranslation: "The bear sleeps in winter" },
      { id: "ge_animal_14", german: "Haustier", english: "Pet", difficulty: "hard", example: "Ich habe ein Haustier", exampleTranslation: "I have a pet" },
      { id: "ge_animal_15", german: "Wilde Tiere", english: "Wild animals", difficulty: "hard", example: "Wilde Tiere leben im Wald", exampleTranslation: "Wild animals live in the forest" }
    ]
  },

  places: {
    name: "Orte",
    icon: MapPin,
    color: "from-purple-400 to-fuchsia-500",
    level: "beginner",
    description: "Standorte",
    words: [
      { id: "ge_place_1", german: "Geschäft", english: "Store", difficulty: "easy", example: "Das Geschäft ist offen", exampleTranslation: "The store is open" },
      { id: "ge_place_2", german: "Schule", english: "School", difficulty: "easy", example: "Ich gehe zur Schule", exampleTranslation: "I go to school" },
      { id: "ge_place_3", german: "Krankenhaus", english: "Hospital", difficulty: "easy", example: "Das Krankenhaus ist nah", exampleTranslation: "The hospital is close" },
      { id: "ge_place_4", german: "Park", english: "Park", difficulty: "easy", example: "Kinder spielen im Park", exampleTranslation: "Children play in the park" },
      { id: "ge_place_5", german: "Bahnhof", english: "Train station", difficulty: "easy", example: "Railway station", exampleTranslation: "Der Bahnhof" },
      { id: "ge_place_6", german: "Flughafen", english: "Airport", difficulty: "easy", example: "Ich bin am Flughafen", exampleTranslation: "Ich bin am Flughafen" },
      { id: "ge_place_7", german: "Restaurant", english: "Restaurant", difficulty: "easy", example: "Wir essen im Restaurant", exampleTranslation: "We eat at a restaurant" },
      { id: "ge_place_8", german: "Hotel", english: "Hotel", difficulty: "easy", example: "Das Hotel ist groß", exampleTranslation: "The hotel is big" },
      { id: "ge_place_9", german: "Bank", english: "Bank", difficulty: "easy", example: "Ich gehe zur Bank", exampleTranslation: "I go to the bank" },
      { id: "ge_place_10", german: "Museum", english: "Museum", difficulty: "medium", example: "Das Museum ist interessant", exampleTranslation: "The museum is interesting" },
      { id: "ge_place_11", german: "Bibliothek", english: "Library", difficulty: "medium", example: "Ich lerne in der Bibliothek", exampleTranslation: "I study at the library" },
      { id: "ge_place_12", german: "Kirche", english: "Church", difficulty: "medium", example: "Die Kirche ist alt", exampleTranslation: "The church is old" },
      { id: "ge_place_13", german: "Rathaus", english: "City hall", difficulty: "medium", example: "Das Rathaus ist in der Innenstadt", exampleTranslation: "The city hall is downtown" },
      { id: "ge_place_14", german: "Apotheke", english: "Pharmacy", difficulty: "hard", example: "Ich muss zur Apotheke gehen", exampleTranslation: "Ich muss zur Apotheke gehen" },
      { id: "ge_place_15", german: "Postamt", english: "Post office", difficulty: "hard", example: "Das Postamt schließt um fünf", exampleTranslation: "The post office closes at five" }
    ]
  },

  time: {
    name: "Zeit",
    icon: Clock,
    color: "from-indigo-400 to-blue-500",
    level: "beginner",
    description: "Zeitausdrücke",
    words: [
      { id: "ge_time_1", german: "Heute", english: "Today", difficulty: "easy", example: "Heute ist Montag", exampleTranslation: "Today is Monday" },
      { id: "ge_time_2", german: "Gestern", english: "Yesterday", difficulty: "easy", example: "Gestern war Sonntag", exampleTranslation: "Yesterday was Sunday" },
      { id: "ge_time_3", german: "Morgen", english: "Tomorrow", difficulty: "easy", example: "Morgen ist Dienstag", exampleTranslation: "Tomorrow is Tuesday" },
      { id: "ge_time_4", german: "Jetzt", english: "Now", difficulty: "easy", example: "Ich arbeite jetzt", exampleTranslation: "Ich arbeite jetzt" },
      { id: "ge_time_5", german: "Später", english: "Later", difficulty: "easy", example: "Ich mache es später", exampleTranslation: "Ich mache es später" },
      { id: "ge_time_6", german: "Morgen", english: "Morning", difficulty: "easy", example: "Guten Morgen", exampleTranslation: "Guten Morgen" },
      { id: "ge_time_7", german: "Tag", english: "Day", difficulty: "easy", example: "Der Tag ist lang", exampleTranslation: "Der Tag ist lang" },
      { id: "ge_time_8", german: "Nacht", english: "Night", difficulty: "easy", example: "Gute Nacht", exampleTranslation: "Gute Nacht" },
      { id: "ge_time_9", german: "Woche", english: "Week", difficulty: "easy", example: "Nächste Woche", exampleTranslation: "Nächste Woche" },
      { id: "ge_time_10", german: "Monat", english: "Month", difficulty: "medium", example: "Dieser Monat", exampleTranslation: "Dieser Monat" },
      { id: "ge_time_11", german: "Jahr", english: "Year", difficulty: "medium", example: "Dieses Jahr", exampleTranslation: "Dieses Jahr" },
      { id: "ge_time_12", german: "Stunde", english: "Hour", difficulty: "medium", example: "Eine Stunde", exampleTranslation: "Eine Stunde" },
      { id: "ge_time_13", german: "Minute", english: "Minute", difficulty: "medium", example: "Fünf Minuten", exampleTranslation: "Fünf Minuten" },
      { id: "ge_time_14", german: "Früh", english: "Early", difficulty: "hard", example: "Ich wache früh auf", exampleTranslation: "Ich wache früh auf" },
      { id: "ge_time_15", german: "Spät", english: "Late", difficulty: "hard", example: "Es ist spät", exampleTranslation: "Es ist spät" }
    ]
  },

  emotions: {
    name: "Emotionen",
    icon: Heart,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    description: "Gefühle",
    words: [
      { id: "ge_emo_1", german: "Glücklich", english: "Happy", difficulty: "easy", example: "Ich bin glücklich", exampleTranslation: "Ich bin glücklich" },
      { id: "ge_emo_2", german: "Traurig", english: "Sad", difficulty: "easy", example: "Er ist traurig", exampleTranslation: "Er ist traurig" },
      { id: "ge_emo_3", german: "Wütend", english: "Angry", difficulty: "easy", example: "Sie ist wütend", exampleTranslation: "Sie ist wütend" },
      { id: "ge_emo_4", german: "Müde", english: "Tired", difficulty: "easy", example: "Ich bin müde", exampleTranslation: "Ich bin müde" },
      { id: "ge_emo_5", german: "Aufgeregt", english: "Excited", difficulty: "easy", example: "Wir sind aufgeregt", exampleTranslation: "Wir sind aufgeregt" },
      { id: "ge_emo_6", german: "Nervös", english: "Nervous", difficulty: "easy", example: "Er ist nervös", exampleTranslation: "Er ist nervös" },
      { id: "ge_emo_7", german: "Ruhig", english: "Calm", difficulty: "easy", example: "Sie ist ruhig", exampleTranslation: "Sie ist ruhig" },
      { id: "ge_emo_8", german: "Überrascht", english: "Surprised", difficulty: "easy", example: "Ich bin überrascht", exampleTranslation: "Ich bin überrascht" },
      { id: "ge_emo_9", german: "Ängstlich", english: "Scared", difficulty: "easy", example: "Das Kind ist ängstlich", exampleTranslation: "Das Kind ist ängstlich" },
      { id: "ge_emo_10", german: "Gelangweilt", english: "Bored", difficulty: "medium", example: "Sie sind gelangweilt", exampleTranslation: "Sie sind gelangweilt" },
      { id: "ge_emo_11", german: "Froh", english: "Glad", difficulty: "medium", example: "Ich bin froh dich zu sehen", exampleTranslation: "Ich bin froh dich zu sehen" },
      { id: "ge_emo_12", german: "Stolz", english: "Proud", difficulty: "medium", example: "Ich bin stolz auf dich", exampleTranslation: "Ich bin stolz auf dich" },
      { id: "ge_emo_13", german: "Verliebt", english: "In love", difficulty: "medium", example: "Sie sind verliebt", exampleTranslation: "Sie sind verliebt" },
      { id: "ge_emo_14", german: "Einsam", english: "Lonely", difficulty: "hard", example: "Ich fühle mich einsam", exampleTranslation: "Ich fühle mich einsam" },
      { id: "ge_emo_15", german: "Zufrieden", english: "Satisfied", difficulty: "hard", example: "Ich bin zufrieden mit meiner Arbeit", exampleTranslation: "Ich bin zufrieden mit meiner Arbeit" }
    ]
  },

  weather: {
    name: "Wetter",
    icon: Cloud,
    color: "from-sky-400 to-cyan-500",
    level: "beginner",
    description: "Wetterbedingungen",
    words: [
      { id: "ge_weather_1", german: "Sonne", english: "Sun", difficulty: "easy", example: "Die Sonne scheint", exampleTranslation: "Die Sonne scheint" },
      { id: "ge_weather_2", german: "Regen", english: "Rain", difficulty: "easy", example: "Es regnet", exampleTranslation: "Es regnet" },
      { id: "ge_weather_3", german: "Schnee", english: "Snow", difficulty: "easy", example: "Es schneit", exampleTranslation: "Es schneit" },
      { id: "ge_weather_4", german: "Wind", english: "Wind", difficulty: "easy", example: "Es ist windig", exampleTranslation: "Es ist windig" },
      { id: "ge_weather_5", german: "Wolke", english: "Cloud", difficulty: "easy", example: "Am Himmel sind Wolken", exampleTranslation: "Am Himmel sind Wolken" },
      { id: "ge_weather_6", german: "Gewitter", english: "Storm", difficulty: "easy", example: "Ein Gewitter kommt", exampleTranslation: "Ein Gewitter kommt" },
      { id: "ge_weather_7", german: "Heiß", english: "Hot", difficulty: "easy", example: "Es ist sehr heiß", exampleTranslation: "Es ist sehr heiß" },
      { id: "ge_weather_8", german: "Kalt", english: "Cold", difficulty: "easy", example: "Im Winter ist es kalt", exampleTranslation: "Im Winter ist es kalt" },
      { id: "ge_weather_9", german: "Blitz", english: "Lightning", difficulty: "easy", example: "Ich sah einen Blitz", exampleTranslation: "Ich sah einen Blitz" },
      { id: "ge_weather_10", german: "Donner", english: "Thunder", difficulty: "medium", example: "Man kann den Donner hören", exampleTranslation: "Man kann den Donner hören" },
      { id: "ge_weather_11", german: "Nebel", english: "Fog", difficulty: "medium", example: "Es ist neblig", exampleTranslation: "Es ist neblig" },
      { id: "ge_weather_12", german: "Warm", english: "Warm", difficulty: "medium", example: "Es ist heute warm", exampleTranslation: "Es ist heute warm" },
      { id: "ge_weather_13", german: "Kühl", english: "Cool", difficulty: "medium", example: "Am Abend ist es kühl", exampleTranslation: "Am Abend ist es kühl" },
      { id: "ge_weather_14", german: "Wetter", english: "Weather", difficulty: "hard", example: "Das Wetter ist schön", exampleTranslation: "Das Wetter ist schön" },
      { id: "ge_weather_15", german: "Temperatur", english: "Temperature", difficulty: "hard", example: "Wie ist die Temperatur?", exampleTranslation: "Wie ist die Temperatur?" }
    ]
  },

  nature: {
    name: "Natur",
    icon: TreePine,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    description: "Natur",
    words: [
      { id: "ge_nature_1", german: "Baum", english: "Tree", difficulty: "easy", example: "Der Baum ist hoch", exampleTranslation: "Der Baum ist hoch" },
      { id: "ge_nature_2", german: "Blume", english: "Flower", difficulty: "easy", example: "Die Blume ist schön", exampleTranslation: "Die Blume ist schön" },
      { id: "ge_nature_3", german: "Berg", english: "Mountain", difficulty: "easy", example: "Der Berg ist hoch", exampleTranslation: "Der Berg ist hoch" },
      { id: "ge_nature_4", german: "Fluss", english: "River", difficulty: "easy", example: "Der Fluss ist lang", exampleTranslation: "Der Fluss ist lang" },
      { id: "ge_nature_5", german: "Meer", english: "Sea", difficulty: "easy", example: "Das Meer ist blau", exampleTranslation: "Das Meer ist blau" },
      { id: "ge_nature_6", german: "Wald", english: "Forest", difficulty: "easy", example: "Wir gehen durch den Wald", exampleTranslation: "Wir gehen durch den Wald" },
      { id: "ge_nature_7", german: "See", english: "Lake", difficulty: "easy", example: "Der See ist ruhig", exampleTranslation: "Der See ist ruhig" },
      { id: "ge_nature_8", german: "Himmel", english: "Sky", difficulty: "easy", example: "Der Himmel ist blau", exampleTranslation: "Der Himmel ist blau" },
      { id: "ge_nature_9", german: "Stern", english: "Star", difficulty: "easy", example: "Die Sterne leuchten", exampleTranslation: "Die Sterne leuchten" },
      { id: "ge_nature_10", german: "Mond", english: "Moon", difficulty: "medium", example: "Der Mond ist voll", exampleTranslation: "Der Mond ist voll" },
      { id: "ge_nature_11", german: "Strand", english: "Beach", difficulty: "medium", example: "Ich liebe den Strand", exampleTranslation: "Ich liebe den Strand" },
      { id: "ge_nature_12", german: "Insel", english: "Island", difficulty: "medium", example: "Die Insel ist schön", exampleTranslation: "Die Insel ist schön" },
      { id: "ge_nature_13", german: "Tal", english: "Valley", difficulty: "medium", example: "Das Tal ist grün", exampleTranslation: "Das Tal ist grün" },
      { id: "ge_nature_14", german: "Wasserfall", english: "Waterfall", difficulty: "hard", example: "Der Wasserfall ist spektakulär", exampleTranslation: "Der Wasserfall ist spektakulär" },
      { id: "ge_nature_15", german: "Landschaft", english: "Landscape", difficulty: "hard", example: "Die Landschaft ist atemberaubend", exampleTranslation: "Die Landschaft ist atemberaubend" }
    ]
  },

  clothing: {
    name: "Kleidung",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    description: "Kleidung",
    words: [
      { id: "ge_cloth_1", german: "Hemd", english: "Shirt", difficulty: "easy", example: "Ich mag dein Hemd", exampleTranslation: "Ich mag dein Hemd" },
      { id: "ge_cloth_2", german: "Hose", english: "Pants", difficulty: "easy", example: "Ich brauche eine neue Hose", exampleTranslation: "Ich brauche eine neue Hose" },
      { id: "ge_cloth_3", german: "Schuhe", english: "Shoes", difficulty: "easy", example: "Ich kaufte schwarze Schuhe", exampleTranslation: "Ich kaufte schwarze Schuhe" },
      { id: "ge_cloth_4", german: "Kleid", english: "Dress", difficulty: "easy", example: "Schönes Kleid", exampleTranslation: "Schönes Kleid" },
      { id: "ge_cloth_5", german: "Jacke", english: "Jacket", difficulty: "easy", example: "Ich brauche eine Jacke", exampleTranslation: "Ich brauche eine Jacke" },
      { id: "ge_cloth_6", german: "Hut", english: "Hat", difficulty: "easy", example: "Setz den Hut auf", exampleTranslation: "Setz den Hut auf" },
      { id: "ge_cloth_7", german: "Socken", english: "Socks", difficulty: "easy", example: "Meine Socken sind sauber", exampleTranslation: "Meine Socken sind sauber" },
      { id: "ge_cloth_8", german: "Handschuhe", english: "Gloves", difficulty: "easy", example: "Im Winter trägst du Handschuhe", exampleTranslation: "Im Winter trägst du Handschuhe" },
      { id: "ge_cloth_9", german: "Schal", english: "Scarf", difficulty: "easy", example: "Der Schal ist weich", exampleTranslation: "The scarf is soft" },
      { id: "ge_cloth_10", german: "Rock", english: "Skirt", difficulty: "medium", example: "Der Rock ist hübsch", exampleTranslation: "Der Rock ist hübsch" },
      { id: "ge_cloth_11", german: "Mantel", english: "Coat", difficulty: "medium", example: "Zieh deinen Mantel an", exampleTranslation: "Zieh deinen Mantel an" },
      { id: "ge_cloth_12", german: "Pullover", english: "Sweater", difficulty: "medium", example: "Der Pullover ist warm", exampleTranslation: "Der Pullover ist warm" },
      { id: "ge_cloth_13", german: "Jeans", english: "Jeans", difficulty: "medium", example: "Ich trage Jeans", exampleTranslation: "Ich trage Jeans" },
      { id: "ge_cloth_14", german: "Anzug", english: "Suit", difficulty: "hard", example: "Er trägt einen Anzug zur Arbeit", exampleTranslation: "Er trägt einen Anzug zur Arbeit" },
      { id: "ge_cloth_15", german: "Kleidung", english: "Clothing", difficulty: "hard", example: "Ich brauche neue Kleidung", exampleTranslation: "Ich brauche neue Kleidung" }
    ]
  },

  work: {
    name: "Arbeit",
    icon: Briefcase,
    color: "from-slate-400 to-gray-500",
    level: "intermediate",
    description: "Berufe",
    words: [
      { id: "ge_work_1", german: "Arbeit", english: "Work", difficulty: "easy", example: "Ich gehe zur Arbeit", exampleTranslation: "Ich gehe zur Arbeit" },
      { id: "ge_work_2", german: "Arzt", english: "Doctor", difficulty: "easy", example: "Er ist Arzt", exampleTranslation: "Er ist Arzt" },
      { id: "ge_work_3", german: "Lehrer", english: "Teacher", difficulty: "easy", example: "Mein Lehrer ist großartig", exampleTranslation: "Mein Lehrer ist großartig" },
      { id: "ge_work_4", german: "Ingenieur", english: "Engineer", difficulty: "easy", example: "Ich bin Ingenieur", exampleTranslation: "Ich bin Ingenieur" },
      { id: "ge_work_5", german: "Anwalt", english: "Lawyer", difficulty: "easy", example: "Sie ist Anwältin", exampleTranslation: "Sie ist Anwältin" },
      { id: "ge_work_6", german: "Manager", english: "Manager", difficulty: "easy", example: "Ich arbeite als Manager", exampleTranslation: "Ich arbeite als Manager" },
      { id: "ge_work_7", german: "Büro", english: "Office", difficulty: "easy", example: "Ich arbeite im Büro", exampleTranslation: "Ich arbeite im Büro" },
      { id: "ge_work_8", german: "Gehalt", english: "Salary", difficulty: "easy", example: "Mein Gehalt ist gut", exampleTranslation: "Mein Gehalt ist gut" },
      { id: "ge_work_9", german: "Chef", english: "Boss", difficulty: "easy", example: "Mein Chef ist anspruchsvoll", exampleTranslation: "Mein Chef ist anspruchsvoll" },
      { id: "ge_work_10", german: "Kollege", english: "Colleague", difficulty: "medium", example: "Das ist mein Kollege von der Arbeit", exampleTranslation: "Das ist mein Kollege von der Arbeit" },
      { id: "ge_work_11", german: "Beruf", english: "Profession", difficulty: "medium", example: "Was ist dein Beruf?", exampleTranslation: "Was ist dein Beruf?" },
      { id: "ge_work_12", german: "Karriere", english: "Career", difficulty: "medium", example: "Meine Karriere ist wichtig", exampleTranslation: "Meine Karriere ist wichtig" },
      { id: "ge_work_13", german: "Mitarbeiter", english: "Employee", difficulty: "medium", example: "Er ist ein Mitarbeiter", exampleTranslation: "Er ist ein Mitarbeiter" },
      { id: "ge_work_14", german: "Unternehmen", english: "Company", difficulty: "hard", example: "Ich arbeite für ein großes Unternehmen", exampleTranslation: "Ich arbeite für ein großes Unternehmen" },
      { id: "ge_work_15", german: "Arbeitgeber", english: "Employer", difficulty: "hard", example: "Mein Arbeitgeber ist fair", exampleTranslation: "Mein Arbeitgeber ist fair" }
    ]
  },

  transport: {
    name: "Transport",
    icon: Car,
    color: "from-teal-400 to-cyan-500",
    level: "intermediate",
    description: "Transportmittel",
    words: [
      { id: "ge_trans_1", german: "Auto", english: "Car", difficulty: "easy", example: "Ich habe ein neues Auto", exampleTranslation: "Ich habe ein neues Auto" },
      { id: "ge_trans_2", german: "Bus", english: "Bus", difficulty: "easy", example: "Ich fahre mit dem Bus", exampleTranslation: "Ich fahre mit dem Bus" },
      { id: "ge_trans_3", german: "Zug", english: "Train", difficulty: "easy", example: "Der Zug ist schnell", exampleTranslation: "The train is fast" },
      { id: "ge_trans_4", german: "Flugzeug", english: "Airplane", difficulty: "easy", example: "Ich fliege mit dem Flugzeug", exampleTranslation: "Ich fliege mit dem Flugzeug" },
      { id: "ge_trans_5", german: "Fahrrad", english: "Bicycle", difficulty: "easy", example: "Ich fahre mit dem Fahrrad", exampleTranslation: "Ich fahre mit dem Fahrrad" },
      { id: "ge_trans_6", german: "Taxi", english: "Taxi", difficulty: "easy", example: "Ruf ein Taxi", exampleTranslation: "Ruf ein Taxi" },
      { id: "ge_trans_7", german: "U-Bahn", english: "Metro", difficulty: "easy", example: "Ich benutze die U-Bahn", exampleTranslation: "Ich benutze die U-Bahn" },
      { id: "ge_trans_8", german: "Fahrkarte", english: "Ticket", difficulty: "easy", example: "Kauf die Fahrkarte", exampleTranslation: "Kauf die Fahrkarte" },
      { id: "ge_trans_9", german: "Reise", english: "Journey", difficulty: "easy", example: "Ich mache eine Reise", exampleTranslation: "Ich mache eine Reise" },
      { id: "ge_trans_10", german: "Fahrer", english: "Driver", difficulty: "medium", example: "Der Fahrer ist vorsichtig", exampleTranslation: "Der Fahrer ist vorsichtig" },
      { id: "ge_trans_11", german: "Parkplatz", english: "Parking lot", difficulty: "medium", example: "Finde einen Parkplatz", exampleTranslation: "Finde einen Parkplatz" },
      { id: "ge_trans_12", german: "Ampel", english: "Traffic light", difficulty: "medium", example: "Halte an der Ampel", exampleTranslation: "Halte an der Ampel" },
      { id: "ge_trans_13", german: "Straße", english: "Street", difficulty: "medium", example: "Überquere die Straße", exampleTranslation: "Überquere die Straße" },
      { id: "ge_trans_14", german: "Verkehr", english: "Traffic", difficulty: "hard", example: "Der Verkehr ist stark", exampleTranslation: "Der Verkehr ist stark" },
      { id: "ge_trans_15", german: "Autobahn", english: "Highway", difficulty: "hard", example: "Fahre auf der Autobahn", exampleTranslation: "Fahre auf der Autobahn" }
    ]
  },

  education: {
    name: "Bildung",
    icon: GraduationCap,
    color: "from-amber-400 to-yellow-500",
    level: "intermediate",
    description: "Bildung",
    words: [
      { id: "ge_edu_1", german: "Schüler", english: "Student", difficulty: "easy", example: "Ich bin Schüler", exampleTranslation: "I am a student" },
      { id: "ge_edu_2", german: "Unterricht", english: "Lesson", difficulty: "easy", example: "Ich habe um neun Unterricht", exampleTranslation: "Ich habe um neun Unterricht" },
      { id: "ge_edu_3", german: "Hausaufgaben", english: "Homework", difficulty: "easy", example: "Ich habe viele Hausaufgaben", exampleTranslation: "Ich habe viele Hausaufgaben" },
      { id: "ge_edu_4", german: "Prüfung", english: "Exam", difficulty: "easy", example: "Die Prüfung ist morgen", exampleTranslation: "The exam is tomorrow" },
      { id: "ge_edu_5", german: "Buch", english: "Book", difficulty: "easy", example: "Lies dieses Buch", exampleTranslation: "Lies dieses Buch" },
      { id: "ge_edu_6", german: "Heft", english: "Notebook", difficulty: "easy", example: "Ich brauche ein neues Heft", exampleTranslation: "Ich brauche ein neues Heft" },
      { id: "ge_edu_7", german: "Bleistift", english: "Pencil", difficulty: "easy", example: "Hast du einen Bleistift?", exampleTranslation: "Hast du einen Bleistift?" },
      { id: "ge_edu_8", german: "Kugelschreiber", english: "Pen", difficulty: "easy", example: "Leih mir einen Kugelschreiber", exampleTranslation: "Leih mir einen Kugelschreiber" },
      { id: "ge_edu_9", german: "Rucksack", english: "Backpack", difficulty: "easy", example: "Mein Rucksack ist schwer", exampleTranslation: "Mein Rucksack ist schwer" },
      { id: "ge_edu_10", german: "Bibliothek", english: "Library", difficulty: "medium", example: "Ich lerne in der Bibliothek", exampleTranslation: "Ich lerne in der Bibliothek" },
      { id: "ge_edu_11", german: "Klasse", english: "Class", difficulty: "medium", example: "Ich bin in dieser Klasse", exampleTranslation: "Ich bin in dieser Klasse" },
      { id: "ge_edu_12", german: "Universität", english: "University", difficulty: "medium", example: "Ich studiere an der Universität", exampleTranslation: "Ich studiere an der Universität" },
      { id: "ge_edu_13", german: "Abschluss", english: "Degree", difficulty: "medium", example: "Ich habe einen Abschluss", exampleTranslation: "Ich habe einen Abschluss" },
      { id: "ge_edu_14", german: "Studium", english: "Studies", difficulty: "hard", example: "Mein Studium ist schwierig", exampleTranslation: "Mein Studium ist schwierig" },
      { id: "ge_edu_15", german: "Wissen", english: "Knowledge", difficulty: "hard", example: "Wissen ist Macht", exampleTranslation: "Wissen ist Macht" }
    ]
  },

  restaurant: {
    name: "Restaurant",
    icon: Coffee,
    color: "from-brown-400 to-orange-600",
    level: "intermediate",
    description: "Im Restaurant",
    words: [
      { id: "ge_rest_1", german: "Restaurant", english: "Restaurant", difficulty: "easy", example: "Wir essen im Restaurant", exampleTranslation: "We eat at a restaurant" },
      { id: "ge_rest_2", german: "Speisekarte", english: "Menu", difficulty: "easy", example: "Die Speisekarte, bitte", exampleTranslation: "Menu, please" },
      { id: "ge_rest_3", german: "Kellner", english: "Waiter", difficulty: "easy", example: "Der Kellner ist nett", exampleTranslation: "The waiter is nice" },
      { id: "ge_rest_4", german: "Bestellung", english: "Order", difficulty: "easy", example: "Ich möchte bestellen", exampleTranslation: "I want to make an order" },
      { id: "ge_rest_5", german: "Rechnung", english: "Bill", difficulty: "easy", example: "Die Rechnung, bitte", exampleTranslation: "The bill, please" },
      { id: "ge_rest_6", german: "Trinkgeld", english: "Tip", difficulty: "easy", example: "Ich lasse Trinkgeld", exampleTranslation: "I leave a tip" },
      { id: "ge_rest_7", german: "Lecker", english: "Delicious", difficulty: "easy", example: "Das ist lecker", exampleTranslation: "This is delicious" },
      { id: "ge_rest_8", german: "Hungrig", english: "Hungry", difficulty: "easy", example: "Ich bin hungrig", exampleTranslation: "I am hungry" },
      { id: "ge_rest_9", german: "Durstig", english: "Thirsty", difficulty: "easy", example: "Ich bin durstig", exampleTranslation: "I am thirsty" },
      { id: "ge_rest_10", german: "Tisch", english: "Table", difficulty: "medium", example: "Ich reserviere einen Tisch", exampleTranslation: "I'm reserving a table" },
      { id: "ge_rest_11", german: "Reservierung", english: "Reservation", difficulty: "medium", example: "Ich habe eine Reservierung", exampleTranslation: "I have a reservation" },
      { id: "ge_rest_12", german: "Vorspeise", english: "Starter", difficulty: "medium", example: "Ich nehme eine Vorspeise", exampleTranslation: "I'll have a starter" },
      { id: "ge_rest_13", german: "Hauptgericht", english: "Main course", difficulty: "medium", example: "Was ist das Hauptgericht?", exampleTranslation: "What's the main course?" },
      { id: "ge_rest_14", german: "Nachtisch", english: "Dessert", difficulty: "hard", example: "Ich möchte einen Nachtisch", exampleTranslation: "I want dessert" },
      { id: "ge_rest_15", german: "Bedienung", english: "Service", difficulty: "hard", example: "Die Bedienung ist ausgezeichnet", exampleTranslation: "The service is excellent" }
    ]
  },

  hobbies: {
    name: "Hobbys",
    icon: Palette,
    color: "from-fuchsia-400 to-pink-500",
    level: "intermediate",
    description: "Freizeitaktivitäten",
    words: [
      { id: "ge_ent_1", german: "Musik", english: "Music", difficulty: "easy", example: "Ich höre Musik", exampleTranslation: "I listen to music" },
      { id: "ge_ent_2", german: "Kino", english: "Cinema", difficulty: "easy", example: "Ich schaue Filme", exampleTranslation: "I watch movies" },
      { id: "ge_ent_3", german: "Lesen", english: "Reading", difficulty: "easy", example: "Lesen ist mein Hobby", exampleTranslation: "Reading is my hobby" },
      { id: "ge_ent_4", german: "Tanz", english: "Dance", difficulty: "easy", example: "Ich liebe Tanz", exampleTranslation: "I love dance" },
      { id: "ge_ent_5", german: "Singen", english: "Singing", difficulty: "easy", example: "Ich singe gern", exampleTranslation: "I like to sing" },
      { id: "ge_ent_6", german: "Gitarre", english: "Guitar", difficulty: "easy", example: "Ich spiele Gitarre", exampleTranslation: "I play guitar" },
      { id: "ge_ent_7", german: "Konzert", english: "Concert", difficulty: "easy", example: "Ich gehe zum Konzert", exampleTranslation: "I go to a concert" },
      { id: "ge_ent_8", german: "Theater", english: "Theater", difficulty: "easy", example: "Ich gehe ins Theater", exampleTranslation: "I go to the theater" },
      { id: "ge_ent_9", german: "Spiele", english: "Games", difficulty: "easy", example: "Ich spiele Computerspiele", exampleTranslation: "I play computer games" },
      { id: "ge_ent_10", german: "Fotografie", english: "Photography", difficulty: "medium", example: "Ich interessiere mich für Fotografie", exampleTranslation: "I'm interested in photography" },
      { id: "ge_ent_11", german: "Malen", english: "Painting", difficulty: "medium", example: "Ich liebe Malen", exampleTranslation: "I love painting" },
      { id: "ge_ent_12", german: "Sport", english: "Sports", difficulty: "medium", example: "Ich mache Sport", exampleTranslation: "I do sports" },
      { id: "ge_ent_13", german: "Reisen", english: "Traveling", difficulty: "medium", example: "Ich reise gern", exampleTranslation: "I enjoy traveling" },
      { id: "ge_ent_14", german: "Sammeln", english: "Collecting", difficulty: "hard", example: "Ich sammle Briefmarken", exampleTranslation: "I collect stamps" },
      { id: "ge_ent_15", german: "Freizeit", english: "Free time", difficulty: "hard", example: "Was machst du in deiner Freizeit?", exampleTranslation: "What do you do in your free time?" }
    ]
  },

  ...flashcardsCategories_part1,
  ...flashcardsCategories_part2,
  ...flashcardsCategories_part3,
  ...flashcardsCategories_part4,
  ...flashcardsCategories_part5,
  ...flashcardsCategories_part6
};

export default flashcardsCategories;