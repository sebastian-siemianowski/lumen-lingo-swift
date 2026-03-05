/**
 * ENGLISH → SPANISH WORD BUILDER - PART 16
 * Categories: 86-90
 * 5 categories, 15 words each = 75 words
 */

import { Waves, Eye, HandMetal, MessageCircle, Target } from "lucide-react";

export const wordBuilderCategories_part16 = {
  water_related: {
    name: "Water & Liquids",
    description: "Water bodies and liquid forms",
    icon: Waves,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "agua", hint: "water" },
      { word: "líquido", hint: "liquid" },
      { word: "gota", hint: "drop" },
      { word: "charco", hint: "puddle" },
      { word: "manantial", hint: "spring" },
      { word: "fuente", hint: "fountain" },
      { word: "arroyo", hint: "stream" },
      { word: "riachuelo", hint: "creek" },
      { word: "corriente", hint: "current" },
      { word: "ola", hint: "wave" },
      { word: "marea", hint: "tide" },
      { word: "espuma", hint: "foam" },
      { word: "vapor", hint: "steam" },
      { word: "hielo", hint: "ice" },
      { word: "escarcha", hint: "frost" }
    ]
  },

  visual_perception: {
    name: "Visual Perception",
    description: "Verbs and nouns for seeing",
    icon: Eye,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "mirar", hint: "to look" },
      { word: "ver", hint: "to see" },
      { word: "observar", hint: "to observe" },
      { word: "contemplar", hint: "to contemplate" },
      { word: "vigilar", hint: "to watch" },
      { word: "examinar", hint: "to examine" },
      { word: "inspeccionar", hint: "to inspect" },
      { word: "espiar", hint: "to spy" },
      { word: "distinguir", hint: "to distinguish" },
      { word: "percibir", hint: "to perceive" },
      { word: "vislumbrar", hint: "to glimpse" },
      { word: "divisar", hint: "to make out" },
      { word: "avistar", hint: "to sight" },
      { word: "ojear", hint: "to glance" },
      { word: "parpadear", hint: "to blink" }
    ]
  },

  hand_gestures: {
    name: "Hand Gestures",
    description: "Gestures and actions with hands",
    icon: HandMetal,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "aplaudir", hint: "to applaud" },
      { word: "señalar", hint: "to point" },
      { word: "agarrar", hint: "to grab" },
      { word: "soltar", hint: "to release" },
      { word: "tocar", hint: "to touch" },
      { word: "acariciar", hint: "to caress" },
      { word: "pellizcar", hint: "to pinch" },
      { word: "rascar", hint: "to scratch" },
      { word: "frotar", hint: "to rub" },
      { word: "palmear", hint: "to pat" },
      { word: "empujar", hint: "to push" },
      { word: "jalar", hint: "to pull" },
      { word: "saludar", hint: "to wave" },
      { word: "indicar", hint: "to indicate" },
      { word: "golpear", hint: "to hit" }
    ]
  },

  communication_verbs: {
    name: "Communication Verbs",
    description: "Verbs for expressing and communicating",
    icon: MessageCircle,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "hablar", hint: "to speak" },
      { word: "decir", hint: "to say" },
      { word: "contar", hint: "to tell" },
      { word: "comunicar", hint: "to communicate" },
      { word: "expresar", hint: "to express" },
      { word: "explicar", hint: "to explain" },
      { word: "describir", hint: "to describe" },
      { word: "narrar", hint: "to narrate" },
      { word: "informar", hint: "to inform" },
      { word: "anunciar", hint: "to announce" },
      { word: "declarar", hint: "to declare" },
      { word: "afirmar", hint: "to affirm" },
      { word: "negar", hint: "to deny" },
      { word: "insistir", hint: "to insist" },
      { word: "sugerir", hint: "to suggest" }
    ]
  },

  goals_objectives: {
    name: "Goals & Objectives",
    description: "Words related to aims and targets",
    icon: Target,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "meta", hint: "goal" },
      { word: "objetivo", hint: "objective" },
      { word: "propósito", hint: "purpose" },
      { word: "fin", hint: "end" },
      { word: "ambición", hint: "ambition" },
      { word: "aspiración", hint: "aspiration" },
      { word: "intención", hint: "intention" },
      { word: "plan", hint: "plan" },
      { word: "proyecto", hint: "project" },
      { word: "misión", hint: "mission" },
      { word: "visión", hint: "vision" },
      { word: "deseo", hint: "wish" },
      { word: "sueño", hint: "dream" },
      { word: "logro", hint: "achievement" },
      { word: "éxito", hint: "success" }
    ]
  }
};

export default wordBuilderCategories_part16;