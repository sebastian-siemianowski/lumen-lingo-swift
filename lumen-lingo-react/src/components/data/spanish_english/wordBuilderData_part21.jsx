/**
 * SPANISH → ENGLISH WORD BUILDER - PART 21
 * Categories: 88-91
 * 4 categories, 15 words each = 60 words
 */

import { Bug, Leaf, Waves, Ship } from "lucide-react";

export const wordBuilderCategories_part21 = {
  garden_pests: {
    name: "Plagas de jardín",
    description: "Insectos y animales en jardín",
    icon: Bug,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "snail", hint: "caracol" },
      { word: "aphid", hint: "pulgón" },
      { word: "mole", hint: "topo" },
      { word: "vole", hint: "ratón de campo" },
      { word: "caterpillar", hint: "oruga" },
      { word: "beetle", hint: "escarabajo" },
      { word: "mosquito", hint: "mosquito" },
      { word: "wasp", hint: "avispa" },
      { word: "hornet", hint: "avispón" },
      { word: "ant", hint: "hormiga" },
      { word: "pest", hint: "plaga" },
      { word: "vermin", hint: "bichos" },
      { word: "insecticide", hint: "insecticida" },
      { word: "trap", hint: "trampa" },
      { word: "net", hint: "red" }
    ]
  },

  garden_tools: {
    name: "Herramientas de jardín",
    description: "Equipo para trabajar en jardín",
    icon: Leaf,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "spade", hint: "pala" },
      { word: "shovel", hint: "pala ancha" },
      { word: "rake", hint: "rastrillo" },
      { word: "hoe", hint: "azada" },
      { word: "watering can", hint: "regadera" },
      { word: "garden hose", hint: "manguera" },
      { word: "lawn mower", hint: "cortacésped" },
      { word: "hedge trimmer", hint: "tijeras de seto" },
      { word: "pruning shears", hint: "tijeras de podar" },
      { word: "saw", hint: "sierra" },
      { word: "wheelbarrow", hint: "carretilla" },
      { word: "fork", hint: "horquilla" },
      { word: "cultivator", hint: "cultivador" },
      { word: "gloves", hint: "guantes" },
      { word: "knee pad", hint: "rodillera" }
    ]
  },

  beach_ocean: {
    name: "Playa y océano",
    description: "Mar y vida junto al agua",
    icon: Waves,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "beach", hint: "playa" },
      { word: "sea", hint: "mar" },
      { word: "ocean", hint: "océano" },
      { word: "wave", hint: "ola" },
      { word: "tide", hint: "marea" },
      { word: "sand", hint: "arena" },
      { word: "shell", hint: "concha" },
      { word: "starfish", hint: "estrella de mar" },
      { word: "jellyfish", hint: "medusa" },
      { word: "seaweed", hint: "alga" },
      { word: "coral", hint: "coral" },
      { word: "reef", hint: "arrecife" },
      { word: "cliff", hint: "acantilado" },
      { word: "bay", hint: "bahía" },
      { word: "shore", hint: "orilla" }
    ]
  },

  water_sports: {
    name: "Deportes acuáticos",
    description: "Actividades en el agua",
    icon: Ship,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "swimming", hint: "natación" },
      { word: "diving", hint: "buceo" },
      { word: "snorkeling", hint: "esnórquel" },
      { word: "sailing", hint: "vela" },
      { word: "surfing", hint: "surf" },
      { word: "windsurfing", hint: "windsurf" },
      { word: "kitesurfing", hint: "kitesurf" },
      { word: "water skiing", hint: "esquí acuático" },
      { word: "kayaking", hint: "kayak" },
      { word: "rowing", hint: "remo" },
      { word: "fishing", hint: "pesca" },
      { word: "paddling", hint: "remar" },
      { word: "jet ski", hint: "moto acuática" },
      { word: "wakeboarding", hint: "wakeboard" },
      { word: "lifeguarding", hint: "salvavidas" }
    ]
  }
};

export default wordBuilderCategories_part21;