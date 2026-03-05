/**
 * SPANISH → ENGLISH WORD BUILDER - PART 16
 * Categories: 64-68
 * 5 categories, 15 words each = 75 words
 */

import { Utensils, Coffee, Pizza, Wine, Cookie } from "lucide-react";

export const wordBuilderCategories_part16 = {
  cooking_methods: {
    name: "Métodos de cocción",
    description: "Técnicas de preparar comida",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "boil", hint: "hervir" },
      { word: "fry", hint: "freír" },
      { word: "bake", hint: "hornear" },
      { word: "grill", hint: "asar a la parrilla" },
      { word: "steam", hint: "cocinar al vapor" },
      { word: "roast", hint: "asar" },
      { word: "deep fry", hint: "freír en aceite profundo" },
      { word: "stew", hint: "guisar" },
      { word: "sauté", hint: "saltear" },
      { word: "blanch", hint: "escaldar" },
      { word: "marinate", hint: "marinar" },
      { word: "season", hint: "condimentar" },
      { word: "chop", hint: "picar" },
      { word: "slice", hint: "rebanar" },
      { word: "mix", hint: "mezclar" }
    ]
  },

  breakfast: {
    name: "Desayuno",
    description: "Comidas y productos matutinos",
    icon: Coffee,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "breakfast", hint: "desayuno" },
      { word: "cereal", hint: "cereal" },
      { word: "oatmeal", hint: "avena" },
      { word: "yogurt", hint: "yogur" },
      { word: "jam", hint: "mermelada" },
      { word: "honey", hint: "miel" },
      { word: "roll", hint: "panecillo" },
      { word: "toast", hint: "tostada" },
      { word: "croissant", hint: "croissant" },
      { word: "scrambled eggs", hint: "huevos revueltos" },
      { word: "fried egg", hint: "huevo frito" },
      { word: "sausage", hint: "salchicha" },
      { word: "bacon", hint: "tocino" },
      { word: "orange juice", hint: "jugo de naranja" },
      { word: "pancakes", hint: "panqueques" }
    ]
  },

  fast_food: {
    name: "Comida rápida",
    description: "Comida rápida y bocadillos",
    icon: Pizza,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "pizza", hint: "pizza" },
      { word: "hamburger", hint: "hamburguesa" },
      { word: "cheeseburger", hint: "hamburguesa con queso" },
      { word: "fries", hint: "papas fritas" },
      { word: "hot dog", hint: "perro caliente" },
      { word: "sandwich", hint: "sándwich" },
      { word: "burrito", hint: "burrito" },
      { word: "taco", hint: "taco" },
      { word: "nuggets", hint: "nuggets" },
      { word: "wrap", hint: "wrap" },
      { word: "salad", hint: "ensalada" },
      { word: "ketchup", hint: "ketchup" },
      { word: "mayonnaise", hint: "mayonesa" },
      { word: "mustard", hint: "mostaza" },
      { word: "sauce", hint: "salsa" }
    ]
  },

  beverages_advanced: {
    name: "Bebidas especiales",
    description: "Bebidas avanzadas y alcoholes",
    icon: Wine,
    color: "from-purple-500 to-pink-600",
    level: "advanced",
    words: [
      { word: "red wine", hint: "vino tinto" },
      { word: "white wine", hint: "vino blanco" },
      { word: "champagne", hint: "champán" },
      { word: "cocktail", hint: "cóctel" },
      { word: "whiskey", hint: "whisky" },
      { word: "rum", hint: "ron" },
      { word: "vodka", hint: "vodka" },
      { word: "liqueur", hint: "licor" },
      { word: "aperitif", hint: "aperitivo" },
      { word: "digestif", hint: "digestivo" },
      { word: "punch", hint: "ponche" },
      { word: "sangria", hint: "sangría" },
      { word: "margarita", hint: "margarita" },
      { word: "mojito", hint: "mojito" },
      { word: "tequila", hint: "tequila" }
    ]
  },

  baking: {
    name: "Repostería",
    description: "Hornear y ingredientes dulces",
    icon: Cookie,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "bake", hint: "hornear" },
      { word: "dough", hint: "masa" },
      { word: "flour", hint: "harina" },
      { word: "sugar", hint: "azúcar" },
      { word: "salt", hint: "sal" },
      { word: "yeast", hint: "levadura" },
      { word: "baking powder", hint: "polvo de hornear" },
      { word: "vanilla", hint: "vainilla" },
      { word: "cinnamon", hint: "canela" },
      { word: "cocoa", hint: "cacao" },
      { word: "rolling pin", hint: "rodillo" },
      { word: "baking sheet", hint: "bandeja de horno" },
      { word: "mold", hint: "molde" },
      { word: "oven", hint: "horno" },
      { word: "recipe", hint: "receta" }
    ]
  }
};

export default wordBuilderCategories_part16;