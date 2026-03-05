/**
 * POLISH → SPANISH WORD BUILDER - PART 17
 * Categories: 87-90
 * 4 categories, 15 words each = 60 words
 */

import { Eye, HandMetal, MessageCircle, Target } from "lucide-react";

export const wordBuilderCategories_part17 = {
  visual_perception: {
    name: "Percepcja wzrokowa",
    description: "Czasowniki i rzeczowniki związane z widzeniem",
    icon: Eye,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "mirar", hint: "patrzeć" },
      { word: "ver", hint: "widzieć" },
      { word: "observar", hint: "obserwować" },
      { word: "contemplar", hint: "kontemplować" },
      { word: "vigilar", hint: "pilnować" },
      { word: "examinar", hint: "badać" },
      { word: "inspeccionar", hint: "inspekcjonować" },
      { word: "espiar", hint: "szpiegować" },
      { word: "distinguir", hint: "rozróżniać" },
      { word: "percibir", hint: "postrzegać" },
      { word: "vislumbrar", hint: "dostrzegać" },
      { word: "divisar", hint: "wypatrywać" },
      { word: "avistar", hint: "zauważyć" },
      { word: "ojear", hint: "zerknąć" },
      { word: "parpadear", hint: "mrugać" }
    ]
  },

  hand_gestures: {
    name: "Gesty rękami",
    description: "Gesty i czynności wykonywane rękami",
    icon: HandMetal,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "aplaudir", hint: "klaskać" },
      { word: "señalar", hint: "wskazywać" },
      { word: "agarrar", hint: "chwytać" },
      { word: "soltar", hint: "puszczać" },
      { word: "tocar", hint: "dotykać" },
      { word: "acariciar", hint: "głaskać" },
      { word: "pellizcar", hint: "szczypać" },
      { word: "rascar", hint: "drapać" },
      { word: "frotar", hint: "pocierać" },
      { word: "palmear", hint: "poklepywać" },
      { word: "empujar", hint: "pchać" },
      { word: "jalar", hint: "ciągnąć" },
      { word: "saludar", hint: "machać" },
      { word: "indicar", hint: "wskazywać" },
      { word: "golpear", hint: "uderzać" }
    ]
  },

  communication_verbs: {
    name: "Czasowniki komunikacji",
    description: "Czasowniki wyrażania i komunikowania się",
    icon: MessageCircle,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "hablar", hint: "mówić" },
      { word: "decir", hint: "powiedzieć" },
      { word: "contar", hint: "opowiadać" },
      { word: "comunicar", hint: "komunikować" },
      { word: "expresar", hint: "wyrażać" },
      { word: "explicar", hint: "wyjaśniać" },
      { word: "describir", hint: "opisywać" },
      { word: "narrar", hint: "narrować" },
      { word: "informar", hint: "informować" },
      { word: "anunciar", hint: "ogłaszać" },
      { word: "declarar", hint: "deklarować" },
      { word: "afirmar", hint: "potwierdzać" },
      { word: "negar", hint: "zaprzeczać" },
      { word: "insistir", hint: "upierać się" },
      { word: "sugerir", hint: "sugerować" }
    ]
  },

  goals_objectives: {
    name: "Cele i zamierzenia",
    description: "Słowa związane z celami i zamiarami",
    icon: Target,
    color: "from-teal-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "meta", hint: "cel" },
      { word: "objetivo", hint: "cel" },
      { word: "propósito", hint: "zamiar" },
      { word: "fin", hint: "koniec" },
      { word: "ambición", hint: "ambicja" },
      { word: "aspiración", hint: "aspiracja" },
      { word: "intención", hint: "intencja" },
      { word: "plan", hint: "plan" },
      { word: "proyecto", hint: "projekt" },
      { word: "misión", hint: "misja" },
      { word: "visión", hint: "wizja" },
      { word: "deseo", hint: "życzenie" },
      { word: "sueño", hint: "marzenie" },
      { word: "logro", hint: "osiągnięcie" },
      { word: "éxito", hint: "sukces" }
    ]
  }
};

export default wordBuilderCategories_part17;