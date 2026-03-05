
/**
 * ENGLISH → FRENCH WORD BUILDER
 * English → Français
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Beginner",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Simple French words",
    words: [
      { id: "ef_word_1", word: "bonjour", hint: "Hello", french: "Bonjour" },
      { id: "ef_word_2", word: "maison", hint: "House", french: "Maison" },
      { id: "ef_word_3", word: "amour", hint: "Love", french: "Amour" },
      { id: "ef_word_4", word: "eau", hint: "Water", french: "Eau" },
      { id: "ef_word_5", word: "chat", hint: "Cat", french: "Chat" },
      { id: "ef_word_6", word: "chien", hint: "Dog", french: "Chien" },
      { id: "ef_word_7", word: "livre", hint: "Book", french: "Livre" },
      { id: "ef_word_8", word: "soleil", hint: "Sun", french: "Soleil" },
      { id: "ef_word_9", word: "lune", hint: "Moon", french: "Lune" },
      { id: "ef_word_10", word: "étoile", hint: "Star", french: "Étoile" }
    ]
  },

  colors: {
    name: "Colors",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Color names",
    words: [
      { id: "ef_col_1", word: "rouge", hint: "Red", french: "Rouge" },
      { id: "ef_col_2", word: "bleu", hint: "Blue", french: "Bleu" },
      { id: "ef_col_3", word: "vert", hint: "Green", french: "Vert" },
      { id: "ef_col_4", word: "jaune", hint: "Yellow", french: "Jaune" },
      { id: "ef_col_5", word: "blanc", hint: "White", french: "Blanc" },
      { id: "ef_col_6", word: "noir", hint: "Black", french: "Noir" },
      { id: "ef_col_7", word: "orange", hint: "Orange", french: "Orange" },
      { id: "ef_col_8", word: "violet", hint: "Purple", french: "Violet" },
      { id: "ef_col_9", word: "rose", hint: "Pink", french: "Rose" },
      { id: "ef_col_10", word: "marron", hint: "Brown", french: "Marron" }
    ]
  },

  family: {
    name: "Family",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Family members",
    words: [
      { id: "ef_fam_1", word: "père", hint: "Father", french: "Père" },
      { id: "ef_fam_2", word: "mère", hint: "Mother", french: "Mère" },
      { id: "ef_fam_3", word: "frère", hint: "Brother", french: "Frère" },
      { id: "ef_fam_4", word: "sœur", hint: "Sister", french: "Sœur" },
      { id: "ef_fam_5", word: "fils", hint: "Son", french: "Fils" },
      { id: "ef_fam_6", word: "fille", hint: "Daughter", french: "Fille" },
      { id: "ef_fam_7", word: "oncle", hint: "Uncle", french: "Oncle" },
      { id: "ef_fam_8", word: "tante", hint: "Aunt", french: "Tante" },
      { id: "ef_fam_9", word: "cousin", hint: "Cousin", french: "Cousin" },
      { id: "ef_fam_10", word: "famille", hint: "Family", french: "Famille" }
    ]
  },

  house: {
    name: "House",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Household items",
    words: [
      { id: "ef_house_1", word: "table", hint: "Table", french: "Table" },
      { id: "ef_house_2", word: "chaise", hint: "Chair", french: "Chaise" },
      { id: "ef_house_3", word: "lit", hint: "Bed", french: "Lit" },
      { id: "ef_house_4", word: "porte", hint: "Door", french: "Porte" },
      { id: "ef_house_5", word: "fenêtre", hint: "Window", french: "Fenêtre" },
      { id: "ef_house_6", word: "cuisine", hint: "Kitchen", french: "Cuisine" },
      { id: "ef_house_7", word: "chambre", hint: "Bedroom", french: "Chambre" },
      { id: "ef_house_8", word: "salle", hint: "Bathroom", french: "Salle de bain" },
      { id: "ef_house_9", word: "jardin", hint: "Garden", french: "Jardin" },
      { id: "ef_house_10", word: "toit", hint: "Roof", french: "Toit" }
    ]
  },

  food: {
    name: "Food",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popular food",
    words: [
      { id: "ef_food_1", word: "pain", hint: "Bread", french: "Pain" },
      { id: "ef_food_2", word: "lait", hint: "Milk", french: "Lait" },
      { id: "ef_food_3", word: "pomme", hint: "Apple", french: "Pomme" },
      { id: "ef_food_4", word: "fromage", hint: "Cheese", french: "Fromage" },
      { id: "ef_food_5", word: "viande", hint: "Meat", french: "Viande" },
      { id: "ef_food_6", word: "poisson", hint: "Fish", french: "Poisson" },
      { id: "ef_food_7", word: "œuf", hint: "Egg", french: "Œuf" },
      { id: "ef_food_8", word: "riz", hint: "Rice", french: "Riz" },
      { id: "ef_food_9", word: "légume", hint: "Vegetable", french: "Légume" },
      { id: "ef_food_10", word: "fruit", hint: "Fruit", french: "Fruit" }
    ]
  },

  animals: {
    name: "Animals",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Animal names",
    words: [
      { id: "ef_ani_1", word: "cheval", hint: "Horse", french: "Cheval" },
      { id: "ef_ani_2", word: "vache", hint: "Cow", french: "Vache" },
      { id: "ef_ani_3", word: "cochon", hint: "Pig", french: "Cochon" },
      { id: "ef_ani_4", word: "poulet", hint: "Chicken", french: "Poulet" },
      { id: "ef_ani_5", word: "oiseau", hint: "Bird", french: "Oiseau" },
      { id: "ef_ani_6", word: "souris", hint: "Mouse", french: "Souris" },
      { id: "ef_ani_7", word: "serpent", hint: "Snake", french: "Serpent" },
      { id: "ef_ani_8", word: "lion", hint: "Lion", french: "Lion" },
      { id: "ef_ani_9", word: "tigre", hint: "Tiger", french: "Tigre" },
      { id: "ef_ani_10", word: "éléphant", hint: "Elephant", french: "Éléphant" }
    ]
  },

  places: {
    name: "Places",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Locations",
    words: [
      { id: "ef_place_1", word: "ville", hint: "City", french: "Ville" },
      { id: "ef_place_2", word: "plage", hint: "Beach", french: "Plage" },
      { id: "ef_place_3", word: "parc", hint: "Park", french: "Parc" },
      { id: "ef_place_4", word: "école", hint: "School", french: "École" },
      { id: "ef_place_5", word: "hôpital", hint: "Hospital", french: "Hôpital" },
      { id: "ef_place_6", word: "magasin", hint: "Store", french: "Magasin" },
      { id: "ef_place_7", word: "rue", hint: "Street", french: "Rue" },
      { id: "ef_place_8", word: "aéroport", hint: "Airport", french: "Aéroport" },
      { id: "ef_place_9", word: "pont", hint: "Bridge", french: "Pont" },
      { id: "ef_place_10", word: "montagne", hint: "Mountain", french: "Montagne" }
    ]
  },

  time: {
    name: "Time",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Time words",
    words: [
      { id: "ef_time_1", word: "matin", hint: "Morning", french: "Matin" },
      { id: "ef_time_2", word: "soir", hint: "Evening", french: "Soir" },
      { id: "ef_time_3", word: "demain", hint: "Tomorrow", french: "Demain" },
      { id: "ef_time_4", word: "hier", hint: "Yesterday", french: "Hier" },
      { id: "ef_time_5", word: "année", hint: "Year", french: "Année" },
      { id: "ef_time_6", word: "mois", hint: "Month", french: "Mois" },
      { id: "ef_time_7", word: "semaine", hint: "Week", french: "Semaine" },
      { id: "ef_time_8", word: "heure", hint: "Hour", french: "Heure" },
      { id: "ef_time_9", word: "minute", hint: "Minute", french: "Minute" },
      { id: "ef_time_10", word: "seconde", hint: "Second", french: "Seconde" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Nature",
    words: [
      { id: "ef_nat_1", word: "arbre", hint: "Tree", french: "Arbre" },
      { id: "ef_nat_2", word: "fleur", hint: "Flower", french: "Fleur" },
      { id: "ef_nat_3", word: "montagne", hint: "Mountain", french: "Montagne" },
      { id: "ef_nat_4", word: "rivière", hint: "River", french: "Rivière" },
      { id: "ef_nat_5", word: "forêt", hint: "Forest", french: "Forêt" },
      { id: "ef_nat_6", word: "lac", hint: "Lake", french: "Lac" },
      { id: "ef_nat_7", word: "mer", hint: "Sea", french: "Mer" },
      { id: "ef_nat_8", word: "désert", hint: "Desert", french: "Désert" },
      { id: "ef_nat_9", word: "île", hint: "Island", french: "Île" },
      { id: "ef_nat_10", word: "ciel", hint: "Sky", french: "Ciel" }
    ]
  },

  emotions: {
    name: "Emotions",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Feelings",
    words: [
      { id: "ef_emo_1", word: "heureux", hint: "Happy", french: "Heureux" },
      { id: "ef_emo_2", word: "triste", hint: "Sad", french: "Triste" },
      { id: "ef_emo_3", word: "fâché", hint: "Angry", french: "Fâché" },
      { id: "ef_emo_4", word: "fatigué", hint: "Tired", french: "Fatigué" },
      { id: "ef_emo_5", word: "nerveux", hint: "Nervous", french: "Nerveux" },
      { id: "ef_emo_6", word: "calme", hint: "Calm", french: "Calme" },
      { id: "ef_emo_7", word: "effrayé", hint: "Afraid", french: "Effrayé" },
      { id: "ef_emo_8", word: "fier", hint: "Proud", french: "Fier" },
      { id: "ef_emo_9", word: "espoir", hint: "Hopeful", french: "Plein d'espoir" },
      { id: "ef_emo_10", word: "joyeux", hint: "Joyful", french: "Joyeux" }
    ]
  }
};

export default wordBuilderCategories;
