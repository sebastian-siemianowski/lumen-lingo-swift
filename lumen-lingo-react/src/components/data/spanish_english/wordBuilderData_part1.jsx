/**
 * SPANISH → ENGLISH WORD BUILDER - PART 1
 * Categories: 1-5
 * 5 categories, 15 words each = 75 words
 */

import { Home, Utensils, ShoppingBag, Shirt, Car } from "lucide-react";

export const wordBuilderCategories_part1 = {
  household_items: {
    name: "Artículos del hogar",
    description: "Cosas básicas en la casa",
    icon: Home,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "table", hint: "mesa" },
      { word: "chair", hint: "silla" },
      { word: "bed", hint: "cama" },
      { word: "sofa", hint: "sofá" },
      { word: "closet", hint: "armario" },
      { word: "lamp", hint: "lámpara" },
      { word: "mirror", hint: "espejo" },
      { word: "carpet", hint: "alfombra" },
      { word: "curtain", hint: "cortina" },
      { word: "pillow", hint: "almohada" },
      { word: "blanket", hint: "manta" },
      { word: "shelf", hint: "estante" },
      { word: "drawer", hint: "cajón" },
      { word: "armchair", hint: "sillón" },
      { word: "nightstand", hint: "mesita de noche" }
    ]
  },

  food_kitchen: {
    name: "Comida y cocina",
    description: "Alimentos y productos culinarios",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "bread", hint: "pan" },
      { word: "butter", hint: "mantequilla" },
      { word: "cheese", hint: "queso" },
      { word: "meat", hint: "carne" },
      { word: "fish", hint: "pescado" },
      { word: "vegetables", hint: "verduras" },
      { word: "fruit", hint: "fruta" },
      { word: "milk", hint: "leche" },
      { word: "egg", hint: "huevo" },
      { word: "rice", hint: "arroz" },
      { word: "pasta", hint: "pasta" },
      { word: "soup", hint: "sopa" },
      { word: "salad", hint: "ensalada" },
      { word: "cake", hint: "pastel" },
      { word: "sugar", hint: "azúcar" }
    ]
  },

  shopping: {
    name: "Compras",
    description: "Tiendas y comprar cosas",
    icon: ShoppingBag,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "store", hint: "tienda" },
      { word: "supermarket", hint: "supermercado" },
      { word: "market", hint: "mercado" },
      { word: "cashier", hint: "caja" },
      { word: "price", hint: "precio" },
      { word: "discount", hint: "descuento" },
      { word: "sale", hint: "oferta" },
      { word: "cart", hint: "carrito" },
      { word: "basket", hint: "cesta" },
      { word: "bag", hint: "bolsa" },
      { word: "receipt", hint: "recibo" },
      { word: "money", hint: "dinero" },
      { word: "card", hint: "tarjeta" },
      { word: "customer", hint: "cliente" },
      { word: "seller", hint: "vendedor" }
    ]
  },

  clothing: {
    name: "Ropa",
    description: "Vestimenta y accesorios",
    icon: Shirt,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "shirt", hint: "camisa" },
      { word: "pants", hint: "pantalones" },
      { word: "dress", hint: "vestido" },
      { word: "skirt", hint: "falda" },
      { word: "jacket", hint: "chaqueta" },
      { word: "coat", hint: "abrigo" },
      { word: "sweater", hint: "suéter" },
      { word: "scarf", hint: "bufanda" },
      { word: "gloves", hint: "guantes" },
      { word: "hat", hint: "gorro" },
      { word: "shoes", hint: "zapatos" },
      { word: "socks", hint: "calcetines" },
      { word: "belt", hint: "cinturón" },
      { word: "tie", hint: "corbata" },
      { word: "underwear", hint: "ropa interior" }
    ]
  },

  transportation: {
    name: "Transporte",
    description: "Vehículos y medios de transporte",
    icon: Car,
    color: "from-gray-500 to-slate-600",
    level: "beginner",
    words: [
      { word: "car", hint: "coche" },
      { word: "bus", hint: "autobús" },
      { word: "train", hint: "tren" },
      { word: "airplane", hint: "avión" },
      { word: "bicycle", hint: "bicicleta" },
      { word: "motorcycle", hint: "motocicleta" },
      { word: "tram", hint: "tranvía" },
      { word: "subway", hint: "metro" },
      { word: "taxi", hint: "taxi" },
      { word: "ship", hint: "barco" },
      { word: "boat", hint: "bote" },
      { word: "truck", hint: "camión" },
      { word: "helicopter", hint: "helicóptero" },
      { word: "rocket", hint: "cohete" },
      { word: "balloon", hint: "globo" }
    ]
  }
};

export default wordBuilderCategories_part1;