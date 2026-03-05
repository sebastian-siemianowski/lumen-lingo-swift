
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 8
 * Categories: 46-50
 * 5 categories, 15 words each = 75 words
 */

import { Smartphone, Home, Clock, Shirt, Leaf } from "lucide-react";

export const wordBuilderCategories_part8 = {
  technology_digital: {
    name: "Technology & Digital",
    description: "Modern technology and digital vocabulary",
    icon: Smartphone,
    color: "from-blue-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "computadora", hint: "computer" },
      { word: "teléfono", hint: "phone" },
      { word: "internet", hint: "internet" },
      { word: "correo", hint: "email" },
      { word: "mensaje", hint: "message" },
      { word: "aplicación", hint: "application/app" },
      { word: "pantalla", hint: "screen" },
      { word: "teclado", hint: "keyboard" },
      { word: "ratón", hint: "mouse" },
      { word: "contraseña", hint: "password" },
      { word: "archivo", hint: "file" },
      { word: "descargar", hint: "to download" },
      { word: "red", hint: "network" },
      { word: "software", hint: "software" },
      { word: "datos", hint: "data" }
    ]
  },

  home_furniture: {
    name: "Home & Furniture",
    description: "Furniture and household items",
    icon: Home,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sofá", hint: "sofa/couch" },
      { word: "mesa", hint: "table" },
      { word: "silla", hint: "chair" },
      { word: "cama", hint: "bed" },
      { word: "armario", hint: "closet/wardrobe" },
      { word: "estante", hint: "shelf/bookcase" },
      { word: "lámpara", hint: "lamp" },
      { word: "alfombra", hint: "carpet/rug" },
      { word: "cortina", hint: "curtain" },
      { word: "espejo", hint: "mirror" },
      { word: "escritorio", hint: "desk" },
      { word: "almohada", hint: "pillow" },
      { word: "manta", hint: "blanket" },
      { word: "cuadro", hint: "picture/painting" },
      { word: "cajón", hint: "drawer" }
    ]
  },

  time_expressions: {
    name: "Time Expressions",
    description: "Time-related words and expressions",
    icon: Clock,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "hora", hint: "hour/time" },
      { word: "minuto", hint: "minute" },
      { word: "segundo", hint: "second" },
      { word: "día", hint: "day" },
      { word: "semana", hint: "week" },
      { word: "mes", hint: "month" },
      { word: "año", hint: "year" },
      { word: "mañana", hint: "morning/tomorrow" },
      { word: "tarde", hint: "afternoon/late" },
      { word: "noche", hint: "night" },
      { word: "ayer", hint: "yesterday" },
      { word: "hoy", hint: "today" },
      { word: "temprano", hint: "early" },
      { word: "pronto", hint: "soon" },
      { word: "siempre", hint: "always" }
    ]
  },

  clothing_accessories: {
    name: "Clothing & Accessories",
    description: "Fashion vocabulary for clothes and accessories",
    icon: Shirt,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "camisa", hint: "shirt" },
      { word: "pantalón", hint: "pants" },
      { word: "vestido", hint: "dress" },
      { word: "falda", hint: "skirt" },
      { word: "zapato", hint: "shoe" },
      { word: "abrigo", hint: "coat" },
      { word: "chaqueta", hint: "jacket" },
      { word: "bufanda", hint: "scarf" },
      { word: "sombrero", hint: "hat" },
      { word: "guante", hint: "glove" },
      { word: "calcetín", hint: "sock" },
      { word: "cinturón", hint: "belt" },
      { word: "bolso", hint: "purse/handbag" },
      { word: "gafas", hint: "glasses" },
      { word: "reloj", hint: "watch/clock" }
    ]
  },

  plants_gardening: {
    name: "Plants & Gardening",
    description: "Plants, flowers, and gardening vocabulary",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "flor", hint: "flower" },
      { word: "árbol", hint: "tree" },
      { word: "planta", hint: "plant" },
      { word: "jardín", hint: "garden" },
      { word: "semilla", hint: "seed" },
      { word: "raíz", hint: "root" },
      { word: "hoja", hint: "leaf" },
      { word: "tallo", hint: "stem" },
      { word: "rama", hint: "branch" },
      { word: "césped", hint: "lawn/grass" },
      { word: "tierra", hint: "soil/earth" },
      { word: "regar", hint: "to water" },
      { word: "crecer", hint: "to grow" },
      { word: "plantar", hint: "to plant" },
      { word: "cosechar", hint: "to harvest" }
    ]
  }
};

export default wordBuilderCategories_part8;
