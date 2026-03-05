/**
 * FRENCH → ENGLISH WORD BUILDER
 * 
 * Native Language: French (Français)
 * Target Language: English
 * 
 * STRUCTURE:
 * - Each category must have: name, icon, color, level, description, words
 * - level options: "beginner", "intermediate", "advanced"
 * - color format: "from-[color]-400 to-[color]-500" (Tailwind gradient)
 * 
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   word: "english_word" (lowercase, the word to build),
 *   hint: "Indice en français",
 *   english: "English word" (for reference)
 * }
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart, Dumbbell, BookOpen, Briefcase, Globe } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Débutant",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Mots anglais simples",
    words: [
      { id: "fe_word_1", word: "hello", hint: "Bonjour", english: "Hello" },
      { id: "fe_word_2", word: "house", hint: "Maison", english: "House" },
      { id: "fe_word_3", word: "love", hint: "Amour", english: "Love" },
      { id: "fe_word_4", word: "water", hint: "Eau", english: "Water" },
      { id: "fe_word_5", word: "cat", hint: "Chat", english: "Cat" },
      { id: "fe_word_6", word: "book", hint: "Livre", english: "Book" },
      { id: "fe_word_7", word: "sun", hint: "Soleil", english: "Sun" },
      { id: "fe_word_8", word: "moon", hint: "Lune", english: "Moon" },
      { id: "fe_word_9", word: "day", hint: "Jour", english: "Day" },
      { id: "fe_word_10", word: "night", hint: "Nuit", english: "Night" }
    ]
  },

  colors: {
    name: "Couleurs",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Noms de couleurs",
    words: [
      { id: "fe_col_1", word: "red", hint: "Rouge", english: "Red" },
      { id: "fe_col_2", word: "blue", hint: "Bleu", english: "Blue" },
      { id: "fe_col_3", word: "green", hint: "Vert", english: "Green" },
      { id: "fe_col_4", word: "yellow", hint: "Jaune", english: "Yellow" },
      { id: "fe_col_5", word: "white", hint: "Blanc", english: "White" },
      { id: "fe_col_6", word: "black", hint: "Noir", english: "Black" },
      { id: "fe_col_7", word: "orange", hint: "Orange", english: "Orange" },
      { id: "fe_col_8", word: "purple", hint: "Violet", english: "Purple" },
      { id: "fe_col_9", word: "pink", hint: "Rose", english: "Pink" },
      { id: "fe_col_10", word: "brown", hint: "Marron", english: "Brown" }
    ]
  },

  family: {
    name: "Famille",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Membres de la famille",
    words: [
      { id: "fe_fam_1", word: "father", hint: "Père", english: "Father" },
      { id: "fe_fam_2", word: "mother", hint: "Mère", english: "Mother" },
      { id: "fe_fam_3", word: "brother", hint: "Frère", english: "Brother" },
      { id: "fe_fam_4", word: "sister", hint: "Sœur", english: "Sister" },
      { id: "fe_fam_5", word: "son", hint: "Fils", english: "Son" },
      { id: "fe_fam_6", word: "daughter", hint: "Fille", english: "Daughter" },
      { id: "fe_fam_7", word: "uncle", hint: "Oncle", english: "Uncle" },
      { id: "fe_fam_8", word: "aunt", hint: "Tante", english: "Aunt" },
      { id: "fe_fam_9", word: "cousin", hint: "Cousin", english: "Cousin" },
      { id: "fe_fam_10", word: "family", hint: "Famille", english: "Family" }
    ]
  },

  house: {
    name: "Maison",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Objets ménagers",
    words: [
      { id: "fe_house_1", word: "table", hint: "Table", english: "Table" },
      { id: "fe_house_2", word: "chair", hint: "Chaise", english: "Chair" },
      { id: "fe_house_3", word: "bed", hint: "Lit", english: "Bed" },
      { id: "fe_house_4", word: "door", hint: "Porte", english: "Door" },
      { id: "fe_house_5", word: "window", hint: "Fenêtre", english: "Window" },
      { id: "fe_house_6", word: "kitchen", hint: "Cuisine", english: "Kitchen" },
      { id: "fe_house_7", word: "bedroom", hint: "Chambre", english: "Bedroom" },
      { id: "fe_house_8", word: "bathroom", hint: "Salle de bain", english: "Bathroom" },
      { id: "fe_house_9", word: "garden", hint: "Jardin", english: "Garden" },
      { id: "fe_house_10", word: "roof", hint: "Toit", english: "Roof" }
    ]
  },

  food: {
    name: "Nourriture",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Aliments courants",
    words: [
      { id: "fe_food_1", word: "bread", hint: "Pain", english: "Bread" },
      { id: "fe_food_2", word: "cheese", hint: "Fromage", english: "Cheese" },
      { id: "fe_food_3", word: "milk", hint: "Lait", english: "Milk" },
      { id: "fe_food_4", word: "meat", hint: "Viande", english: "Meat" },
      { id: "fe_food_5", word: "fish", hint: "Poisson", english: "Fish" },
      { id: "fe_food_6", word: "apple", hint: "Pomme", english: "Apple" },
      { id: "fe_food_7", word: "orange", hint: "Orange", english: "Orange" },
      { id: "fe_food_8", word: "tomato", hint: "Tomate", english: "Tomato" },
      { id: "fe_food_9", word: "wine", hint: "Vin", english: "Wine" },
      { id: "fe_food_10", word: "coffee", hint: "Café", english: "Coffee" }
    ]
  },

  animals: {
    name: "Animaux",
    icon: Dog,
    color: "from-amber-400 to-yellow-500",
    level: "intermediate",
    description: "Animaux courants",
    words: [
      { id: "fe_anim_1", word: "dog", hint: "Chien", english: "Dog" },
      { id: "fe_anim_2", word: "cat", hint: "Chat", english: "Cat" },
      { id: "fe_anim_3", word: "bird", hint: "Oiseau", english: "Bird" },
      { id: "fe_anim_4", word: "fish", hint: "Poisson", english: "Fish" },
      { id: "fe_anim_5", word: "horse", hint: "Cheval", english: "Horse" },
      { id: "fe_anim_6", word: "cow", hint: "Vache", english: "Cow" },
      { id: "fe_anim_7", word: "sheep", hint: "Mouton", english: "Sheep" },
      { id: "fe_anim_8", word: "rabbit", hint: "Lapin", english: "Rabbit" },
      { id: "fe_anim_9", word: "mouse", hint: "Souris", english: "Mouse" },
      { id: "fe_anim_10", word: "lion", hint: "Lion", english: "Lion" }
    ]
  },

  places: {
    name: "Lieux",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Lieux courants",
    words: [
      { id: "fe_place_1", word: "city", hint: "Ville", english: "City" },
      { id: "fe_place_2", word: "store", hint: "Magasin", english: "Store" },
      { id: "fe_place_3", word: "school", hint: "École", english: "School" },
      { id: "fe_place_4", word: "hospital", hint: "Hôpital", english: "Hospital" },
      { id: "fe_place_5", word: "bank", hint: "Banque", english: "Bank" },
      { id: "fe_place_6", word: "park", hint: "Parc", english: "Park" },
      { id: "fe_place_7", word: "beach", hint: "Plage", english: "Beach" },
      { id: "fe_place_8", word: "mountain", hint: "Montagne", english: "Mountain" },
      { id: "fe_place_9", word: "sea", hint: "Mer", english: "Sea" },
      { id: "fe_place_10", word: "river", hint: "Rivière", english: "River" }
    ]
  },

  time: {
    name: "Temps",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "advanced",
    description: "Mots liés au temps",
    words: [
      { id: "fe_time_1", word: "hour", hint: "Heure", english: "Hour" },
      { id: "fe_time_2", word: "minute", hint: "Minute", english: "Minute" },
      { id: "fe_time_3", word: "second", hint: "Seconde", english: "Second" },
      { id: "fe_time_4", word: "morning", hint: "Matin", english: "Morning" },
      { id: "fe_time_5", word: "afternoon", hint: "Après-midi", english: "Afternoon" },
      { id: "fe_time_6", word: "evening", hint: "Soir", english: "Evening" },
      { id: "fe_time_7", word: "tomorrow", hint: "Demain", english: "Tomorrow" },
      { id: "fe_time_8", word: "yesterday", hint: "Hier", english: "Yesterday" },
      { id: "fe_time_9", word: "week", hint: "Semaine", english: "Week" },
      { id: "fe_time_10", word: "year", hint: "Année", english: "Year" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Éléments naturels",
    words: [
      { id: "fe_nat_1", word: "tree", hint: "Arbre", english: "Tree" },
      { id: "fe_nat_2", word: "flower", hint: "Fleur", english: "Flower" },
      { id: "fe_nat_3", word: "grass", hint: "Herbe", english: "Grass" },
      { id: "fe_nat_4", word: "stone", hint: "Pierre", english: "Stone" },
      { id: "fe_nat_5", word: "earth", hint: "Terre", english: "Earth" },
      { id: "fe_nat_6", word: "sky", hint: "Ciel", english: "Sky" },
      { id: "fe_nat_7", word: "cloud", hint: "Nuage", english: "Cloud" },
      { id: "fe_nat_8", word: "rain", hint: "Pluie", english: "Rain" },
      { id: "fe_nat_9", word: "wind", hint: "Vent", english: "Wind" },
      { id: "fe_nat_10", word: "snow", hint: "Neige", english: "Snow" }
    ]
  },

  emotions: {
    name: "Émotions",
    icon: Heart,
    color: "from-rose-400 to-red-500",
    level: "advanced",
    description: "Sentiments et émotions",
    words: [
      { id: "fe_emo_1", word: "happy", hint: "Heureux", english: "Happy" },
      { id: "fe_emo_2", word: "sad", hint: "Triste", english: "Sad" },
      { id: "fe_emo_3", word: "glad", hint: "Content", english: "Glad" },
      { id: "fe_emo_4", word: "angry", hint: "En colère", english: "Angry" },
      { id: "fe_emo_5", word: "fear", hint: "Peur", english: "Fear" },
      { id: "fe_emo_6", word: "love", hint: "Amour", english: "Love" },
      { id: "fe_emo_7", word: "joy", hint: "Joie", english: "Joy" },
      { id: "fe_emo_8", word: "calm", hint: "Calme", english: "Calm" },
      { id: "fe_emo_9", word: "surprise", hint: "Surprise", english: "Surprise" },
      { id: "fe_emo_10", word: "hope", hint: "Espoir", english: "Hope" }
    ]
  }
};