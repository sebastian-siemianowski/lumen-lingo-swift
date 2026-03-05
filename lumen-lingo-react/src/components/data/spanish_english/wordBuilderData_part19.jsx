/**
 * SPANISH → ENGLISH WORD BUILDER - PART 19
 * Categories: 79-83
 * 5 categories, 15 words each = 75 words
 */

import { Sofa, Lightbulb, DoorOpen, Wrench, Hammer } from "lucide-react";

export const wordBuilderCategories_part19 = {
  living_room: {
    name: "Sala y descanso",
    description: "Muebles y equipos de sala",
    icon: Sofa,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "living room", hint: "sala de estar" },
      { word: "couch", hint: "sofá" },
      { word: "armchair", hint: "sillón" },
      { word: "coffee table", hint: "mesa de centro" },
      { word: "bookshelf", hint: "estantería" },
      { word: "cabinet", hint: "vitrina" },
      { word: "sideboard", hint: "aparador" },
      { word: "fireplace", hint: "chimenea" },
      { word: "tv", hint: "televisor" },
      { word: "speaker", hint: "altavoz" },
      { word: "painting", hint: "cuadro" },
      { word: "vase", hint: "jarrón" },
      { word: "cushion", hint: "cojín" },
      { word: "throw", hint: "manta" },
      { word: "rug", hint: "alfombra" }
    ]
  },

  lighting: {
    name: "Iluminación",
    description: "Lámparas y fuentes de luz",
    icon: Lightbulb,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "lamp", hint: "lámpara" },
      { word: "bulb", hint: "bombilla" },
      { word: "ceiling light", hint: "lámpara de techo" },
      { word: "chandelier", hint: "araña" },
      { word: "floor lamp", hint: "lámpara de pie" },
      { word: "table lamp", hint: "lámpara de mesa" },
      { word: "wall lamp", hint: "aplique" },
      { word: "desk lamp", hint: "flexo" },
      { word: "light switch", hint: "interruptor" },
      { word: "dimmer", hint: "regulador" },
      { word: "led", hint: "LED" },
      { word: "halogen", hint: "halógeno" },
      { word: "candle", hint: "vela" },
      { word: "lantern", hint: "linterna" },
      { word: "spotlight", hint: "foco" }
    ]
  },

  doors_windows: {
    name: "Puertas y ventanas",
    description: "Elementos de entradas y aberturas",
    icon: DoorOpen,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "door", hint: "puerta" },
      { word: "front door", hint: "puerta principal" },
      { word: "back door", hint: "puerta trasera" },
      { word: "window", hint: "ventana" },
      { word: "handle", hint: "manija" },
      { word: "key", hint: "llave" },
      { word: "lock", hint: "cerradura" },
      { word: "doorframe", hint: "marco" },
      { word: "threshold", hint: "umbral" },
      { word: "windowsill", hint: "alféizar" },
      { word: "blinds", hint: "persiana" },
      { word: "shutter", hint: "contraventana" },
      { word: "windowpane", hint: "cristal" },
      { word: "doorstop", hint: "tope" },
      { word: "doorbell", hint: "timbre" }
    ]
  },

  repairs_fixing: {
    name: "Reparaciones y mantenimiento",
    description: "Acciones de reparar en casa",
    icon: Wrench,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "repair", hint: "reparar" },
      { word: "fix", hint: "arreglar" },
      { word: "handyman", hint: "manitas" },
      { word: "plumber", hint: "fontanero" },
      { word: "electrician", hint: "electricista" },
      { word: "carpenter", hint: "carpintero" },
      { word: "painter", hint: "pintor" },
      { word: "install", hint: "instalar" },
      { word: "uninstall", hint: "desinstalar" },
      { word: "maintenance", hint: "mantenimiento" },
      { word: "spare part", hint: "repuesto" },
      { word: "warranty", hint: "garantía" },
      { word: "workshop", hint: "taller" },
      { word: "service", hint: "servicio" },
      { word: "broken", hint: "roto" }
    ]
  },

  diy_tools: {
    name: "Herramientas de bricolaje",
    description: "Equipo para trabajos caseros",
    icon: Hammer,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "drill", hint: "taladro" },
      { word: "screwdriver", hint: "destornillador eléctrico" },
      { word: "saw", hint: "sierra" },
      { word: "circular saw", hint: "sierra circular" },
      { word: "jigsaw", hint: "sierra de calar" },
      { word: "sander", hint: "lijadora" },
      { word: "level", hint: "nivel" },
      { word: "measuring tape", hint: "cinta métrica" },
      { word: "ruler", hint: "regla" },
      { word: "square", hint: "escuadra" },
      { word: "glue gun", hint: "pistola de pegamento" },
      { word: "soldering iron", hint: "soldador" },
      { word: "welder", hint: "soldadora" },
      { word: "vise", hint: "tornillo de banco" },
      { word: "ladder", hint: "escalera" }
    ]
  }
};

export default wordBuilderCategories_part19;