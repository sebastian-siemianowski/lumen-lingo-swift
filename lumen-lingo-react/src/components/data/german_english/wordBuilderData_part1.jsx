/**
 * GERMAN → ENGLISH WORD BUILDER - PART 1
 * Categories: 1-5
 * 5 categories, 15 words each = 75 words
 */

import { Home, Utensils, ShoppingBag, Shirt, Car } from "lucide-react";

export const wordBuilderCategories_part1 = {
  household_items: {
    name: "Haushaltsgegenstände",
    description: "Grundlegende Dinge im Haus",
    icon: Home,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "table", hint: "Tisch" },
      { word: "chair", hint: "Stuhl" },
      { word: "bed", hint: "Bett" },
      { word: "sofa", hint: "Sofa" },
      { word: "wardrobe", hint: "Schrank" },
      { word: "lamp", hint: "Lampe" },
      { word: "mirror", hint: "Spiegel" },
      { word: "carpet", hint: "Teppich" },
      { word: "curtain", hint: "Vorhang" },
      { word: "pillow", hint: "Kissen" },
      { word: "blanket", hint: "Decke" },
      { word: "shelf", hint: "Regal" },
      { word: "drawer", hint: "Schublade" },
      { word: "armchair", hint: "Sessel" },
      { word: "nightstand", hint: "Nachttisch" }
    ]
  },

  food_kitchen: {
    name: "Essen und Küche",
    description: "Lebensmittel und kulinarische Produkte",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "bread", hint: "Brot" },
      { word: "butter", hint: "Butter" },
      { word: "cheese", hint: "Käse" },
      { word: "meat", hint: "Fleisch" },
      { word: "fish", hint: "Fisch" },
      { word: "vegetables", hint: "Gemüse" },
      { word: "fruit", hint: "Obst" },
      { word: "milk", hint: "Milch" },
      { word: "egg", hint: "Ei" },
      { word: "rice", hint: "Reis" },
      { word: "pasta", hint: "Nudeln" },
      { word: "soup", hint: "Suppe" },
      { word: "salad", hint: "Salat" },
      { word: "cake", hint: "Kuchen" },
      { word: "sugar", hint: "Zucker" }
    ]
  },

  shopping: {
    name: "Einkaufen",
    description: "Geschäfte und Dinge kaufen",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "store", hint: "Laden" },
      { word: "supermarket", hint: "Supermarkt" },
      { word: "market", hint: "Markt" },
      { word: "checkout", hint: "Kasse" },
      { word: "price", hint: "Preis" },
      { word: "discount", hint: "Rabatt" },
      { word: "offer", hint: "Angebot" },
      { word: "cart", hint: "Einkaufswagen" },
      { word: "basket", hint: "Korb" },
      { word: "bag", hint: "Tasche" },
      { word: "receipt", hint: "Quittung" },
      { word: "money", hint: "Geld" },
      { word: "card", hint: "Karte" },
      { word: "customer", hint: "Kunde" },
      { word: "seller", hint: "Verkäufer" }
    ]
  },

  clothing: {
    name: "Kleidung",
    description: "Bekleidung und Accessoires",
    icon: Shirt,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "shirt", hint: "Hemd" },
      { word: "pants", hint: "Hose" },
      { word: "dress", hint: "Kleid" },
      { word: "skirt", hint: "Rock" },
      { word: "jacket", hint: "Jacke" },
      { word: "coat", hint: "Mantel" },
      { word: "sweater", hint: "Pullover" },
      { word: "scarf", hint: "Schal" },
      { word: "gloves", hint: "Handschuhe" },
      { word: "hat", hint: "Hut" },
      { word: "shoes", hint: "Schuhe" },
      { word: "socks", hint: "Socken" },
      { word: "belt", hint: "Gürtel" },
      { word: "tie", hint: "Krawatte" },
      { word: "underwear", hint: "Unterwäsche" }
    ]
  },

  transportation: {
    name: "Transport",
    description: "Fahrzeuge und Verkehrsmittel",
    icon: Car,
    color: "from-gray-500 to-slate-600",
    level: "beginner",
    words: [
      { word: "car", hint: "Auto" },
      { word: "bus", hint: "Bus" },
      { word: "train", hint: "Zug" },
      { word: "plane", hint: "Flugzeug" },
      { word: "bicycle", hint: "Fahrrad" },
      { word: "motorcycle", hint: "Motorrad" },
      { word: "tram", hint: "Straßenbahn" },
      { word: "subway", hint: "U-Bahn" },
      { word: "taxi", hint: "Taxi" },
      { word: "ship", hint: "Schiff" },
      { word: "boat", hint: "Boot" },
      { word: "truck", hint: "Lastwagen" },
      { word: "helicopter", hint: "Hubschrauber" },
      { word: "rocket", hint: "Rakete" },
      { word: "balloon", hint: "Ballon" }
    ]
  }
};

export default wordBuilderCategories_part1;