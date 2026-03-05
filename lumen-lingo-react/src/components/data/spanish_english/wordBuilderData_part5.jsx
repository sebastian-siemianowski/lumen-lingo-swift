/**
 * SPANISH → ENGLISH WORD BUILDER - PART 5
 * Categories: 19-22
 * 4 categories, 15 words each = 60 words
 */

import { Apple, Carrot, Coffee, IceCream } from "lucide-react";

export const wordBuilderCategories_part5 = {
  fruits: {
    name: "Frutas",
    description: "Frutas frescas y jugosas",
    icon: Apple,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "apple", hint: "manzana" },
      { word: "pear", hint: "pera" },
      { word: "banana", hint: "plátano" },
      { word: "orange", hint: "naranja" },
      { word: "lemon", hint: "limón" },
      { word: "strawberry", hint: "fresa" },
      { word: "cherry", hint: "cereza" },
      { word: "grape", hint: "uva" },
      { word: "peach", hint: "melocotón" },
      { word: "plum", hint: "ciruela" },
      { word: "melon", hint: "melón" },
      { word: "watermelon", hint: "sandía" },
      { word: "pineapple", hint: "piña" },
      { word: "mango", hint: "mango" },
      { word: "kiwi", hint: "kiwi" }
    ]
  },

  vegetables: {
    name: "Verduras",
    description: "Vegetales saludables y raíces",
    icon: Carrot,
    color: "from-green-500 to-lime-600",
    level: "beginner",
    words: [
      { word: "carrot", hint: "zanahoria" },
      { word: "potato", hint: "papa" },
      { word: "tomato", hint: "tomate" },
      { word: "cucumber", hint: "pepino" },
      { word: "lettuce", hint: "lechuga" },
      { word: "cabbage", hint: "col" },
      { word: "broccoli", hint: "brócoli" },
      { word: "cauliflower", hint: "coliflor" },
      { word: "spinach", hint: "espinaca" },
      { word: "pepper", hint: "pimiento" },
      { word: "onion", hint: "cebolla" },
      { word: "garlic", hint: "ajo" },
      { word: "celery", hint: "apio" },
      { word: "radish", hint: "rábano" },
      { word: "beet", hint: "remolacha" }
    ]
  },

  drinks: {
    name: "Bebidas",
    description: "Bebidas calientes y frías",
    icon: Coffee,
    color: "from-brown-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "coffee", hint: "café" },
      { word: "tea", hint: "té" },
      { word: "juice", hint: "jugo" },
      { word: "water", hint: "agua" },
      { word: "milk", hint: "leche" },
      { word: "beer", hint: "cerveza" },
      { word: "wine", hint: "vino" },
      { word: "lemonade", hint: "limonada" },
      { word: "soda", hint: "refresco" },
      { word: "cocoa", hint: "cacao" },
      { word: "smoothie", hint: "batido" },
      { word: "mineral water", hint: "agua mineral" },
      { word: "espresso", hint: "espresso" },
      { word: "cappuccino", hint: "capuchino" },
      { word: "cocktail", hint: "cóctel" }
    ]
  },

  desserts: {
    name: "Postres y dulces",
    description: "Golosinas dulces y pasteles",
    icon: IceCream,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "ice cream", hint: "helado" },
      { word: "chocolate", hint: "chocolate" },
      { word: "candy", hint: "dulce" },
      { word: "cake", hint: "pastel" },
      { word: "cookie", hint: "galleta" },
      { word: "pudding", hint: "pudín" },
      { word: "cream", hint: "crema" },
      { word: "caramel", hint: "caramelo" },
      { word: "jam", hint: "mermelada" },
      { word: "honey", hint: "miel" },
      { word: "sugar", hint: "azúcar" },
      { word: "sweet", hint: "dulce" },
      { word: "delicious", hint: "delicioso" },
      { word: "pastry", hint: "pastelería" },
      { word: "donut", hint: "dona" }
    ]
  }
};

export default wordBuilderCategories_part5;