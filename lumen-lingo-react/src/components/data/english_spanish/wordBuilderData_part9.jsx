/**
 * ENGLISH → SPANISH WORD BUILDER - PART 9
 * Categories: 51-55
 * 5 categories, 15 words each = 75 words
 */

import { Laptop, ChefHat, Droplet, Bed, FileText } from "lucide-react";

export const wordBuilderCategories_part9 = {
  electronics: {
    name: "Electronics & Devices",
    description: "Modern electronic devices and gadgets",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "ordenador", hint: "computer" },
      { word: "portátil", hint: "laptop" },
      { word: "móvil", hint: "mobile phone" },
      { word: "tableta", hint: "tablet" },
      { word: "auriculares", hint: "headphones" },
      { word: "altavoz", hint: "speaker" },
      { word: "micrófono", hint: "microphone" },
      { word: "cargador", hint: "charger" },
      { word: "cable", hint: "cable" },
      { word: "batería", hint: "battery" },
      { word: "cámara", hint: "camera" },
      { word: "televisor", hint: "television" },
      { word: "radio", hint: "radio" },
      { word: "reloj", hint: "watch" },
      { word: "consola", hint: "game console" }
    ]
  },

  kitchen_items: {
    name: "Kitchen Items",
    description: "Essential kitchen tools and utensils",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "cuchillo", hint: "knife" },
      { word: "tenedor", hint: "fork" },
      { word: "cuchara", hint: "spoon" },
      { word: "plato", hint: "plate" },
      { word: "taza", hint: "cup" },
      { word: "vaso", hint: "glass" },
      { word: "olla", hint: "pot" },
      { word: "sartén", hint: "frying pan" },
      { word: "horno", hint: "oven" },
      { word: "nevera", hint: "refrigerator" },
      { word: "microondas", hint: "microwave" },
      { word: "tostadora", hint: "toaster" },
      { word: "tetera", hint: "kettle" },
      { word: "tabla", hint: "cutting board" },
      { word: "colador", hint: "strainer" }
    ]
  },

  bathroom_items: {
    name: "Bathroom Items",
    description: "Bathroom essentials and toiletries",
    icon: Droplet,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "jabón", hint: "soap" },
      { word: "champú", hint: "shampoo" },
      { word: "toalla", hint: "towel" },
      { word: "cepillo", hint: "brush" },
      { word: "peine", hint: "comb" },
      { word: "espejo", hint: "mirror" },
      { word: "ducha", hint: "shower" },
      { word: "bañera", hint: "bathtub" },
      { word: "lavabo", hint: "sink" },
      { word: "inodoro", hint: "toilet" },
      { word: "pasta", hint: "toothpaste" },
      { word: "maquinilla", hint: "razor" },
      { word: "crema", hint: "cream" },
      { word: "perfume", hint: "perfume" },
      { word: "desodorante", hint: "deodorant" }
    ]
  },

  bedroom_items: {
    name: "Bedroom Items",
    description: "Furniture and items for bedroom",
    icon: Bed,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "cama", hint: "bed" },
      { word: "colchón", hint: "mattress" },
      { word: "almohada", hint: "pillow" },
      { word: "sábana", hint: "sheet" },
      { word: "manta", hint: "blanket" },
      { word: "edredón", hint: "comforter" },
      { word: "armario", hint: "wardrobe" },
      { word: "cómoda", hint: "dresser" },
      { word: "mesita", hint: "nightstand" },
      { word: "lámpara", hint: "lamp" },
      { word: "despertador", hint: "alarm clock" },
      { word: "cortina", hint: "curtain" },
      { word: "alfombra", hint: "rug" },
      { word: "percha", hint: "hanger" },
      { word: "espejo", hint: "mirror" }
    ]
  },

  office_items: {
    name: "Office Supplies",
    description: "Essential office and stationery items",
    icon: FileText,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "papel", hint: "paper" },
      { word: "carpeta", hint: "folder" },
      { word: "archivador", hint: "binder" },
      { word: "clip", hint: "paper clip" },
      { word: "grapadora", hint: "stapler" },
      { word: "grapa", hint: "staple" },
      { word: "cinta", hint: "tape" },
      { word: "pegamento", hint: "glue" },
      { word: "sobre", hint: "envelope" },
      { word: "sello", hint: "stamp" },
      { word: "calendario", hint: "calendar" },
      { word: "agenda", hint: "planner" },
      { word: "bandeja", hint: "tray" },
      { word: "perforadora", hint: "hole punch" },
      { word: "rotulador", hint: "highlighter" }
    ]
  }
};

export default wordBuilderCategories_part9;