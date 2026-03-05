
/**
 * POLISH → FRENCH WORD BUILDER
 * 
 * Native Language: Polish (Polski)
 * Target Language: French (Français)
 * 
 * STRUCTURE:
 * - Each category must have: name, icon, color, level, description, words
 * - level options: "beginner", "intermediate", "advanced"
 * - color format: "from-[color]-400 to-[color]-500" (Tailwind gradient)
 * 
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   word: "french_word" (lowercase, the word to build),
 *   hint: "Wskazówka po polsku",
 *   french: "Mot français" (for reference)
 * }
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Początkujący",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Proste słowa francuskie",
    words: [
      { id: "pf_word_1", word: "bonjour", hint: "Cześć", french: "Bonjour" },
      { id: "pf_word_2", word: "maison", hint: "Dom", french: "Maison" },
      { id: "pf_word_3", word: "amour", hint: "Miłość", french: "Amour" },
      { id: "pf_word_4", word: "eau", hint: "Woda", french: "Eau" },
      { id: "pf_word_5", word: "chat", hint: "Kot", french: "Chat" },
      { id: "pf_word_6", word: "chien", hint: "Pies", french: "Chien" },
      { id: "pf_word_7", word: "livre", hint: "Książka", french: "Livre" },
      { id: "pf_word_8", word: "soleil", hint: "Słońce", french: "Soleil" },
      { id: "pf_word_9", word: "lune", hint: "Księżyc", french: "Lune" },
      { id: "pf_word_10", word: "étoile", hint: "Gwiazda", french: "Étoile" }
    ]
  },

  colors: {
    name: "Kolory",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Nazwy kolorów",
    words: [
      { id: "pf_col_1", word: "rouge", hint: "Czerwony", french: "Rouge" },
      { id: "pf_col_2", word: "bleu", hint: "Niebieski", french: "Bleu" },
      { id: "pf_col_3", word: "vert", hint: "Zielony", french: "Vert" },
      { id: "pf_col_4", word: "jaune", hint: "Żółty", french: "Jaune" },
      { id: "pf_col_5", word: "blanc", hint: "Biały", french: "Blanc" },
      { id: "pf_col_6", word: "noir", hint: "Czarny", french: "Noir" },
      { id: "pf_col_7", word: "orange", hint: "Pomarańczowy", french: "Orange" },
      { id: "pf_col_8", word: "violet", hint: "Fioletowy", french: "Violet" },
      { id: "pf_col_9", word: "rose", hint: "Różowy", french: "Rose" },
      { id: "pf_col_10", word: "marron", hint: "Brązowy", french: "Marron" }
    ]
  },

  family: {
    name: "Rodzina",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Członkowie rodziny",
    words: [
      { id: "pf_fam_1", word: "père", hint: "Ojciec", french: "Père" },
      { id: "pf_fam_2", word: "mère", hint: "Matka", french: "Mère" },
      { id: "pf_fam_3", word: "frère", hint: "Brat", french: "Frère" },
      { id: "pf_fam_4", word: "sœur", hint: "Siostra", french: "Sœur" },
      { id: "pf_fam_5", word: "fils", hint: "Syn", french: "Fils" },
      { id: "pf_fam_6", word: "fille", hint: "Córka", french: "Fille" },
      { id: "pf_fam_7", word: "oncle", hint: "Wujek", french: "Oncle" },
      { id: "pf_fam_8", word: "tante", hint: "Ciocia", french: "Tante" },
      { id: "pf_fam_9", word: "cousin", hint: "Kuzyn", french: "Cousin" },
      { id: "pf_fam_10", word: "famille", hint: "Rodzina", french: "Famille" }
    ]
  },

  house: {
    name: "Dom",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Przedmioty domowe",
    words: [
      { id: "pf_house_1", word: "table", hint: "Stół", french: "Table" },
      { id: "pf_house_2", word: "chaise", hint: "Krzesło", french: "Chaise" },
      { id: "pf_house_3", word: "lit", hint: "Łóżko", french: "Lit" },
      { id: "pf_house_4", word: "porte", hint: "Drzwi", french: "Porte" },
      { id: "pf_house_5", word: "fenêtre", hint: "Okno", french: "Fenêtre" },
      { id: "pf_house_6", word: "cuisine", hint: "Kuchnia", french: "Cuisine" },
      { id: "pf_house_7", word: "chambre", hint: "Sypialnia", french: "Chambre" },
      { id: "pf_house_8", word: "salle", hint: "Łazienka", french: "Salle de bain" },
      { id: "pf_house_9", word: "jardin", hint: "Ogród", french: "Jardin" },
      { id: "pf_house_10", word: "toit", hint: "Dach", french: "Toit" }
    ]
  },

  food: {
    name: "Jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popularne jedzenie",
    words: [
      { id: "pf_food_1", word: "pain", hint: "Chleb", french: "Pain" },
      { id: "pf_food_2", word: "lait", hint: "Mleko", french: "Lait" },
      { id: "pf_food_3", word: "pomme", hint: "Jabłko", french: "Pomme" },
      { id: "pf_food_4", word: "fromage", hint: "Ser", french: "Fromage" },
      { id: "pf_food_5", word: "viande", hint: "Mięso", french: "Viande" },
      { id: "pf_food_6", word: "poisson", hint: "Ryba", french: "Poisson" },
      { id: "pf_food_7", word: "œuf", hint: "Jajko", french: "Œuf" },
      { id: "pf_food_8", word: "riz", hint: "Ryż", french: "Riz" },
      { id: "pf_food_9", word: "légume", hint: "Warzywo", french: "Légume" },
      { id: "pf_food_10", word: "fruit", hint: "Owoc", french: "Fruit" }
    ]
  },

  animals: {
    name: "Zwierzęta",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Nazwy zwierząt",
    words: [
      { id: "pf_ani_1", word: "cheval", hint: "Koń", french: "Cheval" },
      { id: "pf_ani_2", word: "vache", hint: "Krowa", french: "Vache" },
      { id: "pf_ani_3", word: "cochon", hint: "Świnia", french: "Cochon" },
      { id: "pf_ani_4", word: "poulet", hint: "Kurczak", french: "Poulet" },
      { id: "pf_ani_5", word: "oiseau", hint: "Ptak", french: "Oiseau" },
      { id: "pf_ani_6", word: "souris", hint: "Mysz", french: "Souris" },
      { id: "pf_ani_7", word: "serpent", hint: "Wąż", french: "Serpent" },
      { id: "pf_ani_8", word: "lion", hint: "Lew", french: "Lion" },
      { id: "pf_ani_9", word: "tigre", hint: "Tygrys", french: "Tigre" },
      { id: "pf_ani_10", word: "éléphant", hint: "Słoń", french: "Éléphant" }
    ]
  },

  places: {
    name: "Miejsca",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Lokalizacje",
    words: [
      { id: "pf_place_1", word: "ville", hint: "Miasto", french: "Ville" },
      { id: "pf_place_2", word: "plage", hint: "Plaża", french: "Plage" },
      { id: "pf_place_3", word: "parc", hint: "Park", french: "Parc" },
      { id: "pf_place_4", word: "école", hint: "Szkoła", french: "École" },
      { id: "pf_place_5", word: "hôpital", hint: "Szpital", french: "Hôpital" },
      { id: "pf_place_6", word: "magasin", hint: "Sklep", french: "Magasin" },
      { id: "pf_place_7", word: "rue", hint: "Ulica", french: "Rue" },
      { id: "pf_place_8", word: "aéroport", hint: "Lotnisko", french: "Aéroport" },
      { id: "pf_place_9", word: "pont", hint: "Most", french: "Pont" },
      { id: "pf_place_10", word: "montagne", hint: "Góra", french: "Montagne" }
    ]
  },

  time: {
    name: "Czas",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Słowa związane z czasem",
    words: [
      { id: "pf_time_1", word: "matin", hint: "Ranek", french: "Matin" },
      { id: "pf_time_2", word: "soir", hint: "Wieczór", french: "Soir" },
      { id: "pf_time_3", word: "demain", hint: "Jutro", french: "Demain" },
      { id: "pf_time_4", word: "hier", hint: "Wczoraj", french: "Hier" },
      { id: "pf_time_5", word: "année", hint: "Rok", french: "Année" },
      { id: "pf_time_6", word: "mois", hint: "Miesiąc", french: "Mois" },
      { id: "pf_time_7", word: "semaine", hint: "Tydzień", french: "Semaine" },
      { id: "pf_time_8", word: "heure", hint: "Godzina", french: "Heure" },
      { id: "pf_time_9", word: "minute", hint: "Minuta", french: "Minute" },
      { id: "pf_time_10", word: "seconde", hint: "Sekunda", french: "Seconde" }
    ]
  },

  nature: {
    name: "Natura",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Natura",
    words: [
      { id: "pf_nat_1", word: "arbre", hint: "Drzewo", french: "Arbre" },
      { id: "pf_nat_2", word: "fleur", hint: "Kwiat", french: "Fleur" },
      { id: "pf_nat_3", word: "montagne", hint: "Góra", french: "Montagne" },
      { id: "pf_nat_4", word: "rivière", hint: "Rzeka", french: "Rivière" },
      { id: "pf_nat_5", word: "forêt", hint: "Las", french: "Forêt" },
      { id: "pf_nat_6", word: "lac", hint: "Jezioro", french: "Lac" },
      { id: "pf_nat_7", word: "mer", hint: "Morze", french: "Mer" },
      { id: "pf_nat_8", word: "désert", hint: "Pustynia", french: "Désert" },
      { id: "pf_nat_9", word: "île", hint: "Wyspa", french: "Île" },
      { id: "pf_nat_10", word: "ciel", hint: "Niebo", french: "Ciel" }
    ]
  },

  emotions: {
    name: "Emocje",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Uczucia",
    words: [
      { id: "pf_emo_1", word: "heureux", hint: "Szczęśliwy", french: "Heureux" },
      { id: "pf_emo_2", word: "triste", hint: "Smutny", french: "Triste" },
      { id: "pf_emo_3", word: "fâché", hint: "Zły", french: "Fâché" },
      { id: "pf_emo_4", word: "fatigué", hint: "Zmęczony", french: "Fatigué" },
      { id: "pf_emo_5", word: "nerveux", hint: "Zdenerwowany", french: "Nerveux" },
      { id: "pf_emo_6", word: "calme", hint: "Spokojny", french: "Calme" },
      { id: "pf_emo_7", word: "effrayé", hint: "Przestraszony", french: "Effrayé" },
      { id: "pf_emo_8", word: "fier", hint: "Dumny", french: "Fier" },
      { id: "pf_emo_9", word: "espoir", hint: "Pełen nadziei", french: "Plein d'espoir" },
      { id: "pf_emo_10", word: "joyeux", hint: "Radosny", french: "Joyeux" }
    ]
  }
};

export default wordBuilderCategories;
