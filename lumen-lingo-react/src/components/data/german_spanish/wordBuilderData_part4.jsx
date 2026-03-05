/**
 * GERMAN → SPANISH WORD BUILDER - PART 4
 * Categories: 15-18
 * 4 categories, 15 words each = 60 words
 */

import { Carrot, Coffee, IceCream, Dog } from "lucide-react";

export const wordBuilderCategories_part4 = {
  vegetables: {
    name: "Gemüse",
    description: "Gesunde Gemüse und Wurzeln",
    icon: Carrot,
    color: "from-green-500 to-lime-600",
    level: "beginner",
    words: [
      { word: "zanahoria", hint: "Karotte" },
      { word: "papa", hint: "Kartoffel" },
      { word: "tomate", hint: "Tomate" },
      { word: "pepino", hint: "Gurke" },
      { word: "lechuga", hint: "Salat" },
      { word: "col", hint: "Kohl" },
      { word: "brócoli", hint: "Brokkoli" },
      { word: "coliflor", hint: "Blumenkohl" },
      { word: "espinaca", hint: "Spinat" },
      { word: "pimiento", hint: "Paprika" },
      { word: "cebolla", hint: "Zwiebel" },
      { word: "ajo", hint: "Knoblauch" },
      { word: "apio", hint: "Sellerie" },
      { word: "rábano", hint: "Rettich" },
      { word: "remolacha", hint: "Rote Beete" }
    ]
  },

  drinks: {
    name: "Getränke",
    description: "Heiße und kalte Getränke",
    icon: Coffee,
    color: "from-brown-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "café", hint: "Kaffee" },
      { word: "té", hint: "Tee" },
      { word: "jugo", hint: "Saft" },
      { word: "agua", hint: "Wasser" },
      { word: "leche", hint: "Milch" },
      { word: "cerveza", hint: "Bier" },
      { word: "vino", hint: "Wein" },
      { word: "limonada", hint: "Limonade" },
      { word: "refresco", hint: "Erfrischungsgetränk" },
      { word: "cacao", hint: "Kakao" },
      { word: "batido", hint: "Smoothie" },
      { word: "agua mineral", hint: "Mineralwasser" },
      { word: "espresso", hint: "Espresso" },
      { word: "capuchino", hint: "Cappuccino" },
      { word: "cóctel", hint: "Cocktail" }
    ]
  },

  desserts: {
    name: "Desserts und Süßigkeiten",
    description: "Süße Leckereien und Gebäck",
    icon: IceCream,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "helado", hint: "Eis" },
      { word: "chocolate", hint: "Schokolade" },
      { word: "dulce", hint: "Süßigkeit" },
      { word: "pastel", hint: "Kuchen" },
      { word: "galleta", hint: "Keks" },
      { word: "pudín", hint: "Pudding" },
      { word: "crema", hint: "Sahne" },
      { word: "caramelo", hint: "Karamell" },
      { word: "mermelada", hint: "Marmelade" },
      { word: "miel", hint: "Honig" },
      { word: "azúcar", hint: "Zucker" },
      { word: "dulce", hint: "süß" },
      { word: "delicioso", hint: "lecker" },
      { word: "pastelería", hint: "Konditorei" },
      { word: "dona", hint: "Donut" }
    ]
  },

  pets: {
    name: "Haustiere",
    description: "Haustiere und ihre Pflege",
    icon: Dog,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "perro", hint: "Hund" },
      { word: "gato", hint: "Katze" },
      { word: "cachorro", hint: "Welpe" },
      { word: "gatito", hint: "Kätzchen" },
      { word: "hámster", hint: "Hamster" },
      { word: "cobaya", hint: "Meerschweinchen" },
      { word: "conejo", hint: "Kaninchen" },
      { word: "pájaro", hint: "Vogel" },
      { word: "pez", hint: "Fisch" },
      { word: "tortuga", hint: "Schildkröte" },
      { word: "collar", hint: "Halsband" },
      { word: "correa", hint: "Leine" },
      { word: "comida", hint: "Futter" },
      { word: "tazón", hint: "Napf" },
      { word: "veterinario", hint: "Tierarzt" }
    ]
  }
};

export default wordBuilderCategories_part4;