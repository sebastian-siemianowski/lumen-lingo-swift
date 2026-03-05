/**
 * SPANISH → ENGLISH WORD BUILDER - PART 4
 * Categories: 15-18
 * 4 categories, 15 words each = 60 words
 */

import { Zap, Mountain, TreePine, Flower } from "lucide-react";

export const wordBuilderCategories_part4 = {
  storms: {
    name: "Tormentas y vientos",
    description: "Fenómenos tormentosos y clima violento",
    icon: Zap,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "storm", hint: "tormenta" },
      { word: "lightning", hint: "relámpago" },
      { word: "thunder", hint: "trueno" },
      { word: "hurricane", hint: "huracán" },
      { word: "tornado", hint: "tornado" },
      { word: "cyclone", hint: "ciclón" },
      { word: "tempest", hint: "tempestad" },
      { word: "thunderbolt", hint: "rayo" },
      { word: "stormy", hint: "tormentoso" },
      { word: "wind gust", hint: "ráfaga de viento" },
      { word: "downpour", hint: "aguacero" },
      { word: "hailstorm", hint: "granizada" },
      { word: "electricity", hint: "electricidad" },
      { word: "dangerous", hint: "peligroso" },
      { word: "flash", hint: "destello" }
    ]
  },

  mountains_nature: {
    name: "Montañas y naturaleza",
    description: "Terrenos montañosos y paisajes",
    icon: Mountain,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "mountain", hint: "montaña" },
      { word: "peak", hint: "pico" },
      { word: "valley", hint: "valle" },
      { word: "rock", hint: "roca" },
      { word: "cliff", hint: "acantilado" },
      { word: "slope", hint: "ladera" },
      { word: "canyon", hint: "cañón" },
      { word: "hill", hint: "colina" },
      { word: "hiking", hint: "senderismo" },
      { word: "climbing", hint: "escalada" },
      { word: "altitude", hint: "altitud" },
      { word: "view", hint: "vista" },
      { word: "path", hint: "sendero" },
      { word: "ridge", hint: "cresta" },
      { word: "plateau", hint: "meseta" }
    ]
  },

  forest_trees: {
    name: "Bosque y árboles",
    description: "Bosques y plantas arbóreas",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "forest", hint: "bosque" },
      { word: "tree", hint: "árbol" },
      { word: "oak", hint: "roble" },
      { word: "pine", hint: "pino" },
      { word: "birch", hint: "abedul" },
      { word: "fir", hint: "abeto" },
      { word: "spruce", hint: "pícea" },
      { word: "beech", hint: "haya" },
      { word: "leaf", hint: "hoja" },
      { word: "branch", hint: "rama" },
      { word: "root", hint: "raíz" },
      { word: "trunk", hint: "tronco" },
      { word: "bark", hint: "corteza" },
      { word: "moss", hint: "musgo" },
      { word: "mushroom", hint: "hongo" }
    ]
  },

  flowers_plants: {
    name: "Flores y plantas",
    description: "Plantas ornamentales y flores",
    icon: Flower,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "flower", hint: "flor" },
      { word: "rose", hint: "rosa" },
      { word: "tulip", hint: "tulipán" },
      { word: "sunflower", hint: "girasol" },
      { word: "carnation", hint: "clavel" },
      { word: "lily", hint: "lirio" },
      { word: "orchid", hint: "orquídea" },
      { word: "daisy", hint: "margarita" },
      { word: "violet", hint: "violeta" },
      { word: "lavender", hint: "lavanda" },
      { word: "bloom", hint: "flor" },
      { word: "petal", hint: "pétalo" },
      { word: "stem", hint: "tallo" },
      { word: "bouquet", hint: "ramo" },
      { word: "garden", hint: "jardín" }
    ]
  }
};

export default wordBuilderCategories_part4;