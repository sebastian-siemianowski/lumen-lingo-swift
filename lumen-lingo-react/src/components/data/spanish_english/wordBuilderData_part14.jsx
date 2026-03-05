/**
 * SPANISH → ENGLISH WORD BUILDER - PART 14
 * Categories: 57-60
 * 4 categories, 15 words each = 60 words
 */

import { Building2, Hammer, Wrench, Footprints } from "lucide-react";

export const wordBuilderCategories_part14 = {
  architecture: {
    name: "Arquitectura",
    description: "Edificios y construcciones",
    icon: Building2,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { word: "building", hint: "edificio" },
      { word: "house", hint: "casa" },
      { word: "apartment", hint: "apartamento" },
      { word: "bridge", hint: "puente" },
      { word: "tower", hint: "torre" },
      { word: "church", hint: "iglesia" },
      { word: "castle", hint: "castillo" },
      { word: "palace", hint: "palacio" },
      { word: "cathedral", hint: "catedral" },
      { word: "skyscraper", hint: "rascacielos" },
      { word: "facade", hint: "fachada" },
      { word: "roof", hint: "techo" },
      { word: "foundation", hint: "cimiento" },
      { word: "column", hint: "columna" },
      { word: "arch", hint: "arco" }
    ]
  },

  construction: {
    name: "Construcción",
    description: "Edificación y materiales de construcción",
    icon: Hammer,
    color: "from-orange-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "construction", hint: "construcción" },
      { word: "worker", hint: "obrero" },
      { word: "brick", hint: "ladrillo" },
      { word: "concrete", hint: "hormigón" },
      { word: "cement", hint: "cemento" },
      { word: "wood", hint: "madera" },
      { word: "steel", hint: "acero" },
      { word: "hammer", hint: "martillo" },
      { word: "nail", hint: "clavo" },
      { word: "screw", hint: "tornillo" },
      { word: "ladder", hint: "escalera" },
      { word: "scaffolding", hint: "andamio" },
      { word: "wall", hint: "pared" },
      { word: "floor", hint: "suelo" },
      { word: "ceiling", hint: "techo" }
    ]
  },

  tools: {
    name: "Herramientas",
    description: "Herramientas de trabajo y reparación",
    icon: Wrench,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "tool", hint: "herramienta" },
      { word: "hammer", hint: "martillo" },
      { word: "screwdriver", hint: "destornillador" },
      { word: "pliers", hint: "alicates" },
      { word: "saw", hint: "sierra" },
      { word: "drill", hint: "taladro" },
      { word: "wrench", hint: "llave" },
      { word: "axe", hint: "hacha" },
      { word: "shovel", hint: "pala" },
      { word: "rake", hint: "rastrillo" },
      { word: "hoe", hint: "azada" },
      { word: "chisel", hint: "cincel" },
      { word: "file", hint: "lima" },
      { word: "toolbox", hint: "caja de herramientas" },
      { word: "measuring tape", hint: "cinta métrica" }
    ]
  },

  body_parts: {
    name: "Partes del cuerpo",
    description: "Anatomía y partes humanas",
    icon: Footprints,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "head", hint: "cabeza" },
      { word: "face", hint: "cara" },
      { word: "eye", hint: "ojo" },
      { word: "nose", hint: "nariz" },
      { word: "mouth", hint: "boca" },
      { word: "ear", hint: "oreja" },
      { word: "neck", hint: "cuello" },
      { word: "shoulder", hint: "hombro" },
      { word: "arm", hint: "brazo" },
      { word: "hand", hint: "mano" },
      { word: "finger", hint: "dedo" },
      { word: "chest", hint: "pecho" },
      { word: "stomach", hint: "estómago" },
      { word: "leg", hint: "pierna" },
      { word: "foot", hint: "pie" }
    ]
  }
};

export default wordBuilderCategories_part14;