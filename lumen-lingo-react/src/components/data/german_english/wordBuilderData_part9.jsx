/**
 * GERMAN → ENGLISH WORD BUILDER - PART 9
 * Categories: 36-40
 * 5 categories, 15 words each = 75 words
 */

import { Utensils, Wine, Coffee, Pizza, Soup } from "lucide-react";

export const wordBuilderCategories_part9 = {
  cooking: {
    name: "Kochen",
    description: "Küchenaktivitäten und Zubereitung",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "cook", hint: "kochen" },
      { word: "fry", hint: "braten" },
      { word: "bake", hint: "backen" },
      { word: "boil", hint: "kochen (Wasser)" },
      { word: "grill", hint: "grillen" },
      { word: "mix", hint: "mischen" },
      { word: "cut", hint: "schneiden" },
      { word: "peel", hint: "schälen" },
      { word: "chop", hint: "hacken" },
      { word: "whisk", hint: "schlagen" },
      { word: "grate", hint: "reiben" },
      { word: "taste", hint: "probieren" },
      { word: "season", hint: "würzen" },
      { word: "serve", hint: "servieren" },
      { word: "heat", hint: "erhitzen" }
    ]
  },

  alcoholic_drinks: {
    name: "Alkoholische Getränke",
    description: "Wein, Bier und Spirituosen",
    icon: Wine,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "wine", hint: "Wein" },
      { word: "beer", hint: "Bier" },
      { word: "whisky", hint: "Whisky" },
      { word: "vodka", hint: "Wodka" },
      { word: "rum", hint: "Rum" },
      { word: "tequila", hint: "Tequila" },
      { word: "champagne", hint: "Champagner" },
      { word: "cider", hint: "Apfelwein" },
      { word: "liqueur", hint: "Likör" },
      { word: "gin", hint: "Gin" },
      { word: "brandy", hint: "Weinbrand" },
      { word: "cocktail", hint: "Cocktail" },
      { word: "sangria", hint: "Sangria" },
      { word: "aperitif", hint: "Aperitif" },
      { word: "toast", hint: "Anstoßen" }
    ]
  },

  hot_drinks: {
    name: "Heiße Getränke",
    description: "Warme Getränke für jeden Tag",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "coffee", hint: "Kaffee" },
      { word: "tea", hint: "Tee" },
      { word: "hot chocolate", hint: "heißer Kakao" },
      { word: "cappuccino", hint: "Cappuccino" },
      { word: "espresso", hint: "Espresso" },
      { word: "latte", hint: "Milchkaffee" },
      { word: "herbal tea", hint: "Kräutertee" },
      { word: "chamomile", hint: "Kamillentee" },
      { word: "mint tea", hint: "Pfefferminztee" },
      { word: "green tea", hint: "grüner Tee" },
      { word: "black tea", hint: "schwarzer Tee" },
      { word: "black coffee", hint: "schwarzer Kaffee" },
      { word: "milk coffee", hint: "Milchkaffee" },
      { word: "decaf", hint: "koffeinfrei" },
      { word: "americano", hint: "Americano" }
    ]
  },

  italian_food: {
    name: "Italienische Küche",
    description: "Beliebte italienische Gerichte",
    icon: Pizza,
    color: "from-red-500 to-green-600",
    level: "beginner",
    words: [
      { word: "pizza", hint: "Pizza" },
      { word: "pasta", hint: "Pasta" },
      { word: "spaghetti", hint: "Spaghetti" },
      { word: "lasagna", hint: "Lasagne" },
      { word: "ravioli", hint: "Ravioli" },
      { word: "risotto", hint: "Risotto" },
      { word: "tiramisu", hint: "Tiramisu" },
      { word: "parmesan", hint: "Parmesan" },
      { word: "mozzarella", hint: "Mozzarella" },
      { word: "basil", hint: "Basilikum" },
      { word: "tomato", hint: "Tomate" },
      { word: "olive oil", hint: "Olivenöl" },
      { word: "garlic", hint: "Knoblauch" },
      { word: "oregano", hint: "Oregano" },
      { word: "sauce", hint: "Soße" }
    ]
  },

  soups: {
    name: "Suppen und Eintöpfe",
    description: "Warme Suppen und Brühen",
    icon: Soup,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "soup", hint: "Suppe" },
      { word: "broth", hint: "Brühe" },
      { word: "gazpacho", hint: "Gazpacho" },
      { word: "consomme", hint: "Consommé" },
      { word: "cream soup", hint: "Cremesuppe" },
      { word: "stew", hint: "Eintopf" },
      { word: "goulash", hint: "Gulasch" },
      { word: "minestrone", hint: "Minestrone" },
      { word: "chowder", hint: "Eintopf" },
      { word: "vegetable soup", hint: "Gemüsesuppe" },
      { word: "chicken soup", hint: "Hühnersuppe" },
      { word: "tomato soup", hint: "Tomatensuppe" },
      { word: "fish soup", hint: "Fischsuppe" },
      { word: "spoon", hint: "Löffel" },
      { word: "bowl", hint: "Schüssel" }
    ]
  }
};

export default wordBuilderCategories_part9;