/**
 * GERMAN → SPANISH WORD BUILDER - PART 1
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
      { word: "mesa", hint: "Tisch" },
      { word: "silla", hint: "Stuhl" },
      { word: "cama", hint: "Bett" },
      { word: "sofá", hint: "Sofa" },
      { word: "armario", hint: "Schrank" },
      { word: "lámpara", hint: "Lampe" },
      { word: "espejo", hint: "Spiegel" },
      { word: "alfombra", hint: "Teppich" },
      { word: "cortina", hint: "Vorhang" },
      { word: "almohada", hint: "Kissen" },
      { word: "manta", hint: "Decke" },
      { word: "estante", hint: "Regal" },
      { word: "cajón", hint: "Schublade" },
      { word: "sillón", hint: "Sessel" },
      { word: "mesita de noche", hint: "Nachttisch" }
    ]
  },

  food_kitchen: {
    name: "Essen und Küche",
    description: "Lebensmittel und kulinarische Produkte",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "pan", hint: "Brot" },
      { word: "mantequilla", hint: "Butter" },
      { word: "queso", hint: "Käse" },
      { word: "carne", hint: "Fleisch" },
      { word: "pescado", hint: "Fisch" },
      { word: "verduras", hint: "Gemüse" },
      { word: "fruta", hint: "Obst" },
      { word: "leche", hint: "Milch" },
      { word: "huevo", hint: "Ei" },
      { word: "arroz", hint: "Reis" },
      { word: "pasta", hint: "Pasta" },
      { word: "sopa", hint: "Suppe" },
      { word: "ensalada", hint: "Salat" },
      { word: "pastel", hint: "Kuchen" },
      { word: "azúcar", hint: "Zucker" }
    ]
  },

  shopping: {
    name: "Einkaufen",
    description: "Geschäfte und Dinge kaufen",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "tienda", hint: "Laden" },
      { word: "supermercado", hint: "Supermarkt" },
      { word: "mercado", hint: "Markt" },
      { word: "caja", hint: "Kasse" },
      { word: "precio", hint: "Preis" },
      { word: "descuento", hint: "Rabatt" },
      { word: "oferta", hint: "Angebot" },
      { word: "carrito", hint: "Einkaufswagen" },
      { word: "cesta", hint: "Korb" },
      { word: "bolsa", hint: "Tasche" },
      { word: "recibo", hint: "Quittung" },
      { word: "dinero", hint: "Geld" },
      { word: "tarjeta", hint: "Karte" },
      { word: "cliente", hint: "Kunde" },
      { word: "vendedor", hint: "Verkäufer" }
    ]
  },

  clothing: {
    name: "Kleidung",
    description: "Bekleidung und Accessoires",
    icon: Shirt,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "camisa", hint: "Hemd" },
      { word: "pantalones", hint: "Hose" },
      { word: "vestido", hint: "Kleid" },
      { word: "falda", hint: "Rock" },
      { word: "chaqueta", hint: "Jacke" },
      { word: "abrigo", hint: "Mantel" },
      { word: "suéter", hint: "Pullover" },
      { word: "bufanda", hint: "Schal" },
      { word: "guantes", hint: "Handschuhe" },
      { word: "gorro", hint: "Mütze" },
      { word: "zapatos", hint: "Schuhe" },
      { word: "calcetines", hint: "Socken" },
      { word: "cinturón", hint: "Gürtel" },
      { word: "corbata", hint: "Krawatte" },
      { word: "ropa interior", hint: "Unterwäsche" }
    ]
  },

  transportation: {
    name: "Transport",
    description: "Fahrzeuge und Verkehrsmittel",
    icon: Car,
    color: "from-gray-500 to-slate-600",
    level: "beginner",
    words: [
      { word: "coche", hint: "Auto" },
      { word: "autobús", hint: "Bus" },
      { word: "tren", hint: "Zug" },
      { word: "avión", hint: "Flugzeug" },
      { word: "bicicleta", hint: "Fahrrad" },
      { word: "motocicleta", hint: "Motorrad" },
      { word: "tranvía", hint: "Straßenbahn" },
      { word: "metro", hint: "U-Bahn" },
      { word: "taxi", hint: "Taxi" },
      { word: "barco", hint: "Schiff" },
      { word: "bote", hint: "Boot" },
      { word: "camión", hint: "Lastwagen" },
      { word: "helicóptero", hint: "Hubschrauber" },
      { word: "cohete", hint: "Rakete" },
      { word: "globo", hint: "Ballon" }
    ]
  }
};

export default wordBuilderCategories_part1;