/**
 * GERMAN → SPANISH WORD BUILDER - PART 9
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
      { word: "cocinar", hint: "kochen" },
      { word: "freír", hint: "braten" },
      { word: "hornear", hint: "backen" },
      { word: "hervir", hint: "kochen (Wasser)" },
      { word: "asar", hint: "grillen" },
      { word: "mezclar", hint: "mischen" },
      { word: "cortar", hint: "schneiden" },
      { word: "pelar", hint: "schälen" },
      { word: "picar", hint: "hacken" },
      { word: "batir", hint: "schlagen" },
      { word: "rallar", hint: "reiben" },
      { word: "probar", hint: "probieren" },
      { word: "sazonar", hint: "würzen" },
      { word: "servir", hint: "servieren" },
      { word: "calentar", hint: "erhitzen" }
    ]
  },

  alcoholic_drinks: {
    name: "Alkoholische Getränke",
    description: "Wein, Bier und Spirituosen",
    icon: Wine,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "vino", hint: "Wein" },
      { word: "cerveza", hint: "Bier" },
      { word: "whisky", hint: "Whisky" },
      { word: "vodka", hint: "Wodka" },
      { word: "ron", hint: "Rum" },
      { word: "tequila", hint: "Tequila" },
      { word: "champán", hint: "Champagner" },
      { word: "sidra", hint: "Apfelwein" },
      { word: "licor", hint: "Likör" },
      { word: "ginebra", hint: "Gin" },
      { word: "brandy", hint: "Weinbrand" },
      { word: "cóctel", hint: "Cocktail" },
      { word: "sangría", hint: "Sangria" },
      { word: "aperitivo", hint: "Aperitif" },
      { word: "brindis", hint: "Anstoßen" }
    ]
  },

  hot_drinks: {
    name: "Heiße Getränke",
    description: "Warme Getränke für jeden Tag",
    icon: Coffee,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "café", hint: "Kaffee" },
      { word: "té", hint: "Tee" },
      { word: "chocolate", hint: "heißer Kakao" },
      { word: "capuchino", hint: "Cappuccino" },
      { word: "espresso", hint: "Espresso" },
      { word: "latte", hint: "Milchkaffee" },
      { word: "infusión", hint: "Kräutertee" },
      { word: "manzanilla", hint: "Kamillentee" },
      { word: "menta", hint: "Pfefferminztee" },
      { word: "té verde", hint: "grüner Tee" },
      { word: "té negro", hint: "schwarzer Tee" },
      { word: "café solo", hint: "schwarzer Kaffee" },
      { word: "café con leche", hint: "Milchkaffee" },
      { word: "descafeinado", hint: "koffeinfrei" },
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
      { word: "espagueti", hint: "Spaghetti" },
      { word: "lasaña", hint: "Lasagne" },
      { word: "ravioli", hint: "Ravioli" },
      { word: "risotto", hint: "Risotto" },
      { word: "tiramisú", hint: "Tiramisu" },
      { word: "parmesano", hint: "Parmesan" },
      { word: "mozzarella", hint: "Mozzarella" },
      { word: "albahaca", hint: "Basilikum" },
      { word: "tomate", hint: "Tomate" },
      { word: "aceite de oliva", hint: "Olivenöl" },
      { word: "ajo", hint: "Knoblauch" },
      { word: "orégano", hint: "Oregano" },
      { word: "salsa", hint: "Soße" }
    ]
  },

  soups: {
    name: "Suppen und Eintöpfe",
    description: "Warme Suppen und Brühen",
    icon: Soup,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "sopa", hint: "Suppe" },
      { word: "caldo", hint: "Brühe" },
      { word: "gazpacho", hint: "Gazpacho" },
      { word: "consomé", hint: "Consommé" },
      { word: "crema", hint: "Cremesuppe" },
      { word: "estofado", hint: "Eintopf" },
      { word: "cocido", hint: "Kochgericht" },
      { word: "minestrone", hint: "Minestrone" },
      { word: "guiso", hint: "Ragout" },
      { word: "potaje", hint: "Gemüseeintopf" },
      { word: "sopa de verduras", hint: "Gemüsesuppe" },
      { word: "sopa de pollo", hint: "Hühnersuppe" },
      { word: "sopa de tomate", hint: "Tomatensuppe" },
      { word: "sopa de pescado", hint: "Fischsuppe" },
      { word: "cuchara", hint: "Löffel" }
    ]
  }
};

export default wordBuilderCategories_part9;