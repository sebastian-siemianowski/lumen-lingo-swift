/**
 * POLISH → SPANISH WORD BUILDER - PART 6
 * Categories: 36-40
 * 5 categories, 15 words each = 75 words
 */

import { Users, Baby, Glasses, Smile, HandHeart } from "lucide-react";

export const wordBuilderCategories_part6 = {
  relationships: {
    name: "Relacje",
    description: "Rodzaje relacji między ludźmi",
    icon: Users,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "amigo", hint: "przyjaciel" },
      { word: "novio", hint: "chłopak" },
      { word: "novia", hint: "dziewczyna" },
      { word: "esposo", hint: "mąż" },
      { word: "esposa", hint: "żona" },
      { word: "pareja", hint: "para" },
      { word: "prometido", hint: "narzeczony" },
      { word: "compañero", hint: "partner" },
      { word: "vecino", hint: "sąsiad" },
      { word: "conocido", hint: "znajomy" },
      { word: "colega", hint: "kolega" },
      { word: "socio", hint: "wspólnik" },
      { word: "enemigo", hint: "wróg" },
      { word: "rival", hint: "rywal" },
      { word: "extraño", hint: "obcy" }
    ]
  },

  life_stages: {
    name: "Etapy życia",
    description: "Opisywanie etapów życia człowieka",
    icon: Baby,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "bebé", hint: "niemowlę" },
      { word: "niño", hint: "dziecko" },
      { word: "infancia", hint: "dzieciństwo" },
      { word: "adolescente", hint: "nastolatek" },
      { word: "juventud", hint: "młodość" },
      { word: "adulto", hint: "dorosły" },
      { word: "maduro", hint: "dojrzały" },
      { word: "anciano", hint: "starszy" },
      { word: "vejez", hint: "starość" },
      { word: "nacimiento", hint: "narodziny" },
      { word: "crecimiento", hint: "wzrost" },
      { word: "desarrollo", hint: "rozwój" },
      { word: "madurez", hint: "dojrzałość" },
      { word: "envejecimiento", hint: "starzenie" },
      { word: "muerte", hint: "śmierć" }
    ]
  },

  character_traits: {
    name: "Cechy charakteru",
    description: "Opisywanie osobowości i charakteru",
    icon: Glasses,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "amable", hint: "miły" },
      { word: "generoso", hint: "hojny" },
      { word: "egoísta", hint: "egoistyczny" },
      { word: "honesto", hint: "uczciwy" },
      { word: "mentiroso", hint: "kłamliwy" },
      { word: "valiente", hint: "odważny" },
      { word: "cobarde", hint: "tchórzliwy" },
      { word: "paciente", hint: "cierpliwy" },
      { word: "impaciente", hint: "niecierpliwy" },
      { word: "optimista", hint: "optymista" },
      { word: "pesimista", hint: "pesymista" },
      { word: "extrovertido", hint: "ekstrawertyczny" },
      { word: "introvertido", hint: "introwertyczny" },
      { word: "trabajador", hint: "pracowity" },
      { word: "perezoso", hint: "leniwy" }
    ]
  },

  moods: {
    name: "Nastroje",
    description: "Opisywanie stanów emocjonalnych",
    icon: Smile,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "contento", hint: "zadowolony" },
      { word: "triste", hint: "smutny" },
      { word: "enojado", hint: "zły" },
      { word: "frustrado", hint: "sfrustrowany" },
      { word: "emocionado", hint: "podekscytowany" },
      { word: "aburrido", hint: "znudzony" },
      { word: "cansado", hint: "zmęczony" },
      { word: "energético", hint: "energiczny" },
      { word: "relajado", hint: "zrelaksowany" },
      { word: "nervioso", hint: "nerwowy" },
      { word: "ansioso", hint: "niespokojny" },
      { word: "tranquilo", hint: "spokojny" },
      { word: "preocupado", hint: "zmartwiony" },
      { word: "aliviado", hint: "ulżony" },
      { word: "confundido", hint: "zdezorientowany" }
    ]
  },

  social_actions: {
    name: "Działania społeczne",
    description: "Czasowniki interakcji społecznych",
    icon: HandHeart,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "saludar", hint: "witać" },
      { word: "despedir", hint: "żegnać" },
      { word: "abrazar", hint: "przytulać" },
      { word: "besar", hint: "całować" },
      { word: "sonreír", hint: "uśmiechać się" },
      { word: "reír", hint: "śmiać się" },
      { word: "llorar", hint: "płakać" },
      { word: "gritar", hint: "krzyczeć" },
      { word: "susurrar", hint: "szeptać" },
      { word: "conversar", hint: "rozmawiać" },
      { word: "discutir", hint: "spierać się" },
      { word: "perdonar", hint: "wybaczać" },
      { word: "agradecer", hint: "dziękować" },
      { word: "disculparse", hint: "przepraszać" },
      { word: "ayudar", hint: "pomagać" }
    ]
  }
};

export default wordBuilderCategories_part6;