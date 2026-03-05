/**
 * GERMAN → ENGLISH WORD BUILDER - PART 4
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
      { word: "carrot", hint: "Karotte" },
      { word: "potato", hint: "Kartoffel" },
      { word: "tomato", hint: "Tomate" },
      { word: "cucumber", hint: "Gurke" },
      { word: "lettuce", hint: "Salat" },
      { word: "cabbage", hint: "Kohl" },
      { word: "broccoli", hint: "Brokkoli" },
      { word: "cauliflower", hint: "Blumenkohl" },
      { word: "spinach", hint: "Spinat" },
      { word: "pepper", hint: "Paprika" },
      { word: "onion", hint: "Zwiebel" },
      { word: "garlic", hint: "Knoblauch" },
      { word: "celery", hint: "Sellerie" },
      { word: "radish", hint: "Rettich" },
      { word: "beetroot", hint: "Rote Beete" }
    ]
  },

  drinks: {
    name: "Getränke",
    description: "Heiße und kalte Getränke",
    icon: Coffee,
    color: "from-brown-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "coffee", hint: "Kaffee" },
      { word: "tea", hint: "Tee" },
      { word: "juice", hint: "Saft" },
      { word: "water", hint: "Wasser" },
      { word: "milk", hint: "Milch" },
      { word: "beer", hint: "Bier" },
      { word: "wine", hint: "Wein" },
      { word: "lemonade", hint: "Limonade" },
      { word: "soda", hint: "Erfrischungsgetränk" },
      { word: "cocoa", hint: "Kakao" },
      { word: "smoothie", hint: "Smoothie" },
      { word: "mineral water", hint: "Mineralwasser" },
      { word: "espresso", hint: "Espresso" },
      { word: "cappuccino", hint: "Cappuccino" },
      { word: "cocktail", hint: "Cocktail" }
    ]
  },

  desserts: {
    name: "Desserts und Süßigkeiten",
    description: "Süße Leckereien und Gebäck",
    icon: IceCream,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "ice cream", hint: "Eis" },
      { word: "chocolate", hint: "Schokolade" },
      { word: "candy", hint: "Süßigkeit" },
      { word: "cake", hint: "Kuchen" },
      { word: "cookie", hint: "Keks" },
      { word: "pudding", hint: "Pudding" },
      { word: "cream", hint: "Sahne" },
      { word: "caramel", hint: "Karamell" },
      { word: "jam", hint: "Marmelade" },
      { word: "honey", hint: "Honig" },
      { word: "sugar", hint: "Zucker" },
      { word: "sweet", hint: "süß" },
      { word: "delicious", hint: "lecker" },
      { word: "bakery", hint: "Konditorei" },
      { word: "donut", hint: "Donut" }
    ]
  },

  pets: {
    name: "Haustiere",
    description: "Haustiere und ihre Pflege",
    icon: Dog,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "dog", hint: "Hund" },
      { word: "cat", hint: "Katze" },
      { word: "puppy", hint: "Welpe" },
      { word: "kitten", hint: "Kätzchen" },
      { word: "hamster", hint: "Hamster" },
      { word: "guinea pig", hint: "Meerschweinchen" },
      { word: "rabbit", hint: "Kaninchen" },
      { word: "bird", hint: "Vogel" },
      { word: "fish", hint: "Fisch" },
      { word: "turtle", hint: "Schildkröte" },
      { word: "collar", hint: "Halsband" },
      { word: "leash", hint: "Leine" },
      { word: "food", hint: "Futter" },
      { word: "bowl", hint: "Napf" },
      { word: "veterinarian", hint: "Tierarzt" }
    ]
  }
};

export default wordBuilderCategories_part4;