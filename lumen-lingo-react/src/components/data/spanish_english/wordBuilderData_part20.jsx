/**
 * SPANISH → ENGLISH WORD BUILDER - PART 20
 * Categories: 84-87
 * 4 categories, 15 words each = 60 words
 */

import { Paintbrush, Zap, TreePine, Flower2 } from "lucide-react";

export const wordBuilderCategories_part20 = {
  painting_decorating: {
    name: "Pintura y decoración",
    description: "Trabajos de pintura y ornamentales",
    icon: Paintbrush,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "paint", hint: "pintar" },
      { word: "color", hint: "color" },
      { word: "varnish", hint: "barniz" },
      { word: "brush", hint: "brocha" },
      { word: "roller", hint: "rodillo" },
      { word: "paint roller", hint: "rodillo de pintura" },
      { word: "paint bucket", hint: "balde de pintura" },
      { word: "drop cloth", hint: "lona protectora" },
      { word: "painter's tape", hint: "cinta de pintor" },
      { word: "spatula", hint: "espátula" },
      { word: "wallpaper", hint: "papel tapiz" },
      { word: "paste", hint: "cola" },
      { word: "primer", hint: "imprimación" },
      { word: "stencil", hint: "plantilla" },
      { word: "spray paint", hint: "pintura en aerosol" }
    ]
  },

  electricity: {
    name: "Electricidad",
    description: "Instalaciones y dispositivos eléctricos",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "electricity", hint: "electricidad" },
      { word: "current", hint: "corriente" },
      { word: "circuit", hint: "circuito" },
      { word: "outlet", hint: "enchufe" },
      { word: "plug", hint: "clavija" },
      { word: "cable", hint: "cable" },
      { word: "fuse", hint: "fusible" },
      { word: "switch", hint: "interruptor" },
      { word: "battery", hint: "pila" },
      { word: "rechargeable", hint: "recargable" },
      { word: "voltage", hint: "voltaje" },
      { word: "watt", hint: "vatio" },
      { word: "volt", hint: "voltio" },
      { word: "ampere", hint: "amperio" },
      { word: "grounding", hint: "toma de tierra" }
    ]
  },

  garden_plants: {
    name: "Jardín y plantas",
    description: "Plantas de jardín y cultivo",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "garden", hint: "jardín" },
      { word: "plants", hint: "plantas" },
      { word: "flower", hint: "flor" },
      { word: "tree", hint: "árbol" },
      { word: "bush", hint: "arbusto" },
      { word: "lawn", hint: "césped" },
      { word: "hedge", hint: "seto" },
      { word: "bed", hint: "parterre" },
      { word: "vegetable garden", hint: "huerto" },
      { word: "greenhouse", hint: "invernadero" },
      { word: "compost", hint: "compost" },
      { word: "fertilizer", hint: "fertilizante" },
      { word: "soil", hint: "tierra" },
      { word: "seed", hint: "semilla" },
      { word: "root", hint: "raíz" }
    ]
  },

  garden_flowers: {
    name: "Flores de jardín",
    description: "Plantas ornamentales populares",
    icon: Flower2,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "daisy", hint: "margarita" },
      { word: "dandelion", hint: "diente de león" },
      { word: "forget-me-not", hint: "nomeolvides" },
      { word: "poppy", hint: "amapola" },
      { word: "chrysanthemum", hint: "crisantemo" },
      { word: "dahlia", hint: "dalia" },
      { word: "petunia", hint: "petunia" },
      { word: "begonia", hint: "begonia" },
      { word: "geranium", hint: "geranio" },
      { word: "azalea", hint: "azalea" },
      { word: "hydrangea", hint: "hortensia" },
      { word: "lilac", hint: "lila" },
      { word: "jasmine", hint: "jazmín" },
      { word: "crocus", hint: "azafrán" },
      { word: "snowdrop", hint: "campanilla de invierno" }
    ]
  }
};

export default wordBuilderCategories_part20;