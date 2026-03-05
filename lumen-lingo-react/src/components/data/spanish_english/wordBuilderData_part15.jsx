/**
 * SPANISH → ENGLISH WORD BUILDER - PART 15
 * Categories: 61-63
 * 3 categories, 15 words each = 45 words
 */

import { Bed, Bath, Waves } from "lucide-react";

export const wordBuilderCategories_part15 = {
  bedroom: {
    name: "Dormitorio",
    description: "Muebles y equipamiento del dormitorio",
    icon: Bed,
    color: "from-purple-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "bed", hint: "cama" },
      { word: "mattress", hint: "colchón" },
      { word: "pillow", hint: "almohada" },
      { word: "blanket", hint: "manta" },
      { word: "sheet", hint: "sábana" },
      { word: "pillowcase", hint: "funda" },
      { word: "nightstand", hint: "mesita de noche" },
      { word: "closet", hint: "armario" },
      { word: "drawer", hint: "cajón" },
      { word: "mirror", hint: "espejo" },
      { word: "lamp", hint: "lámpara" },
      { word: "alarm clock", hint: "despertador" },
      { word: "rug", hint: "alfombra" },
      { word: "curtain", hint: "cortina" },
      { word: "picture", hint: "cuadro" }
    ]
  },

  bathroom: {
    name: "Baño",
    description: "Equipamiento y accesorios de baño",
    icon: Bath,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "bathtub", hint: "bañera" },
      { word: "shower", hint: "ducha" },
      { word: "sink", hint: "lavabo" },
      { word: "toilet", hint: "inodoro" },
      { word: "faucet", hint: "grifo" },
      { word: "soap", hint: "jabón" },
      { word: "shampoo", hint: "champú" },
      { word: "towel", hint: "toalla" },
      { word: "toothbrush", hint: "cepillo de dientes" },
      { word: "toothpaste", hint: "pasta dental" },
      { word: "mirror", hint: "espejo" },
      { word: "bath mat", hint: "alfombra de baño" },
      { word: "shower curtain", hint: "cortina de ducha" },
      { word: "toilet paper", hint: "papel higiénico" },
      { word: "comb", hint: "peine" }
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
      { word: "coast", hint: "costa" }
    ]
  }
};

export default wordBuilderCategories_part15;