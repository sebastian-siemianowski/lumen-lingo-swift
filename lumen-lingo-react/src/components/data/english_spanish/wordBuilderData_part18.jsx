/**
 * ENGLISH → SPANISH WORD BUILDER - PART 18
 * Categories: 96-100
 * 5 categories, 15 words each = 75 words
 */

import { Fish, Rocket, Tractor, Music as DanceIcon, Camera } from "lucide-react";

export const wordBuilderCategories_part18 = {
  marine_life: {
    name: "Marine Life",
    description: "Sea creatures and ocean vocabulary",
    icon: Fish,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "pez", hint: "fish" },
      { word: "ballena", hint: "whale" },
      { word: "delfín", hint: "dolphin" },
      { word: "tiburón", hint: "shark" },
      { word: "pulpo", hint: "octopus" },
      { word: "medusa", hint: "jellyfish" },
      { word: "estrella", hint: "starfish" },
      { word: "caballito", hint: "seahorse" },
      { word: "cangrejo", hint: "crab" },
      { word: "langosta", hint: "lobster" },
      { word: "calamar", hint: "squid" },
      { word: "tortuga", hint: "turtle" },
      { word: "foca", hint: "seal" },
      { word: "coral", hint: "coral" },
      { word: "alga", hint: "seaweed" }
    ]
  },

  space_astronomy: {
    name: "Space & Astronomy",
    description: "Celestial objects and space exploration",
    icon: Rocket,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "espacio", hint: "space" },
      { word: "planeta", hint: "planet" },
      { word: "estrella", hint: "star" },
      { word: "luna", hint: "moon" },
      { word: "sol", hint: "sun" },
      { word: "galaxia", hint: "galaxy" },
      { word: "cometa", hint: "comet" },
      { word: "asteroide", hint: "asteroid" },
      { word: "cohete", hint: "rocket" },
      { word: "satélite", hint: "satellite" },
      { word: "órbita", hint: "orbit" },
      { word: "telescopio", hint: "telescope" },
      { word: "astronauta", hint: "astronaut" },
      { word: "constelación", hint: "constellation" },
      { word: "universo", hint: "universe" }
    ]
  },

  agriculture_farming: {
    name: "Agriculture & Farming",
    description: "Farming and agricultural vocabulary",
    icon: Tractor,
    color: "from-green-500 to-lime-600",
    level: "intermediate",
    words: [
      { word: "granja", hint: "farm" },
      { word: "agricultor", hint: "farmer" },
      { word: "cosecha", hint: "harvest" },
      { word: "cultivo", hint: "crop" },
      { word: "campo", hint: "field" },
      { word: "semilla", hint: "seed" },
      { word: "tractor", hint: "tractor" },
      { word: "arado", hint: "plow" },
      { word: "huerto", hint: "orchard" },
      { word: "invernadero", hint: "greenhouse" },
      { word: "establo", hint: "barn" },
      { word: "granero", hint: "granary" },
      { word: "riego", hint: "irrigation" },
      { word: "fertilizante", hint: "fertilizer" },
      { word: "ganado", hint: "livestock" }
    ]
  },

  dance_movement: {
    name: "Dance & Movement",
    description: "Dance styles and movement vocabulary",
    icon: DanceIcon,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "baile", hint: "dance" },
      { word: "bailarín", hint: "dancer" },
      { word: "salsa", hint: "salsa" },
      { word: "tango", hint: "tango" },
      { word: "flamenco", hint: "flamenco" },
      { word: "ballet", hint: "ballet" },
      { word: "coreografía", hint: "choreography" },
      { word: "ritmo", hint: "rhythm" },
      { word: "paso", hint: "step" },
      { word: "giro", hint: "turn" },
      { word: "salto", hint: "jump" },
      { word: "pareja", hint: "partner" },
      { word: "pirueta", hint: "pirouette" },
      { word: "movimiento", hint: "movement" },
      { word: "expresión", hint: "expression" }
    ]
  },

  photography_terms: {
    name: "Photography Terms",
    description: "Photography and camera vocabulary",
    icon: Camera,
    color: "from-slate-500 to-zinc-600",
    level: "intermediate",
    words: [
      { word: "cámara", hint: "camera" },
      { word: "foto", hint: "photo" },
      { word: "imagen", hint: "image" },
      { word: "lente", hint: "lens" },
      { word: "enfoque", hint: "focus" },
      { word: "exposición", hint: "exposure" },
      { word: "flash", hint: "flash" },
      { word: "zoom", hint: "zoom" },
      { word: "retrato", hint: "portrait" },
      { word: "paisaje", hint: "landscape" },
      { word: "encuadre", hint: "framing" },
      { word: "iluminación", hint: "lighting" },
      { word: "filtro", hint: "filter" },
      { word: "trípode", hint: "tripod" },
      { word: "álbum", hint: "album" }
    ]
  }
};

export default wordBuilderCategories_part18;