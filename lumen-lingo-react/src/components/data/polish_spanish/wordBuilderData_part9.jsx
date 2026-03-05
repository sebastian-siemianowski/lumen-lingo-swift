/**
 * POLISH → SPANISH WORD BUILDER - PART 9
 * Categories: 51-55
 * 5 categories, 15 words each = 75 words
 */

import { Laptop, ChefHat, Droplet, Bed, FileText } from "lucide-react";

export const wordBuilderCategories_part9 = {
  electronics: {
    name: "Elektronika i urządzenia",
    description: "Nowoczesne urządzenia elektroniczne",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "ordenador", hint: "komputer" },
      { word: "portátil", hint: "laptop" },
      { word: "móvil", hint: "telefon komórkowy" },
      { word: "tableta", hint: "tablet" },
      { word: "auriculares", hint: "słuchawki" },
      { word: "altavoz", hint: "głośnik" },
      { word: "micrófono", hint: "mikrofon" },
      { word: "cargador", hint: "ładowarka" },
      { word: "cable", hint: "kabel" },
      { word: "batería", hint: "bateria" },
      { word: "cámara", hint: "aparat" },
      { word: "televisor", hint: "telewizor" },
      { word: "radio", hint: "radio" },
      { word: "reloj", hint: "zegarek" },
      { word: "consola", hint: "konsola do gier" }
    ]
  },

  kitchen_items: {
    name: "Przybory kuchenne",
    description: "Niezbędne narzędzia i przybory kuchenne",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    level: "beginner",
    words: [
      { word: "cuchillo", hint: "nóż" },
      { word: "tenedor", hint: "widelec" },
      { word: "cuchara", hint: "łyżka" },
      { word: "plato", hint: "talerz" },
      { word: "taza", hint: "filiżanka" },
      { word: "vaso", hint: "szklanka" },
      { word: "olla", hint: "garnek" },
      { word: "sartén", hint: "patelnia" },
      { word: "horno", hint: "piekarnik" },
      { word: "nevera", hint: "lodówka" },
      { word: "microondas", hint: "mikrofalówka" },
      { word: "tostadora", hint: "toster" },
      { word: "tetera", hint: "czajnik" },
      { word: "tabla", hint: "deska do krojenia" },
      { word: "colador", hint: "durszlak" }
    ]
  },

  bathroom_items: {
    name: "Artykuły łazienkowe",
    description: "Podstawowe przedmioty i kosmetyki łazienkowe",
    icon: Droplet,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "jabón", hint: "mydło" },
      { word: "champú", hint: "szampon" },
      { word: "toalla", hint: "ręcznik" },
      { word: "cepillo", hint: "szczotka" },
      { word: "peine", hint: "grzebień" },
      { word: "espejo", hint: "lustro" },
      { word: "ducha", hint: "prysznic" },
      { word: "bañera", hint: "wanna" },
      { word: "lavabo", hint: "umywalka" },
      { word: "inodoro", hint: "toaleta" },
      { word: "pasta", hint: "pasta do zębów" },
      { word: "maquinilla", hint: "maszynka do golenia" },
      { word: "crema", hint: "krem" },
      { word: "perfume", hint: "perfumy" },
      { word: "desodorante", hint: "dezodorant" }
    ]
  },

  bedroom_items: {
    name: "Przedmioty sypialniane",
    description: "Meble i rzeczy do sypialni",
    icon: Bed,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "cama", hint: "łóżko" },
      { word: "colchón", hint: "materac" },
      { word: "almohada", hint: "poduszka" },
      { word: "sábana", hint: "prześcieradło" },
      { word: "manta", hint: "koc" },
      { word: "edredón", hint: "kołdra" },
      { word: "armario", hint: "szafa" },
      { word: "cómoda", hint: "komoda" },
      { word: "mesita", hint: "szafka nocna" },
      { word: "lámpara", hint: "lampa" },
      { word: "despertador", hint: "budzik" },
      { word: "cortina", hint: "zasłona" },
      { word: "alfombra", hint: "dywan" },
      { word: "percha", hint: "wieszak" },
      { word: "espejo", hint: "lustro" }
    ]
  },

  office_items: {
    name: "Materiały biurowe",
    description: "Podstawowe artykuły i materiały biurowe",
    icon: FileText,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "papel", hint: "papier" },
      { word: "carpeta", hint: "teczka" },
      { word: "archivador", hint: "segregator" },
      { word: "clip", hint: "spinacz" },
      { word: "grapadora", hint: "zszywacz" },
      { word: "grapa", hint: "zszywka" },
      { word: "cinta", hint: "taśma" },
      { word: "pegamento", hint: "klej" },
      { word: "sobre", hint: "koperta" },
      { word: "sello", hint: "znaczek" },
      { word: "calendario", hint: "kalendarz" },
      { word: "agenda", hint: "terminarz" },
      { word: "bandeja", hint: "tackaa" },
      { word: "perforadora", hint: "dziurkacz" },
      { word: "rotulador", hint: "zakreślacz" }
    ]
  }
};

export default wordBuilderCategories_part9;