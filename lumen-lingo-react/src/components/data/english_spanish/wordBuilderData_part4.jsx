
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 4
 * Categories: 16-30
 * 15 categories, 15 words each = 225 words
 */

import { Clock, Calendar, Star, Coffee, Mountain, Building, Phone, Gift, Music, Camera, Zap, Droplets, Snowflake, Heart } from "lucide-react";

export const wordBuilderCategories_part4 = {
  time_expressions: {
    name: "Time Expressions",
    description: "Master time-related vocabulary for scheduling",
    icon: Clock,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "hora", hint: "hour" },
      { word: "minuto", hint: "minute" },
      { word: "segundo", hint: "second" },
      { word: "mañana", hint: "morning" },
      { word: "tarde", hint: "afternoon" },
      { word: "noche", hint: "night" },
      { word: "hoy", hint: "today" },
      { word: "ayer", hint: "yesterday" },
      { word: "mañana", hint: "tomorrow" },
      { word: "semana", hint: "week" },
      { word: "mes", hint: "month" },
      { word: "año", hint: "year" },
      { word: "ahora", hint: "now" },
      { word: "después", hint: "after" },
      { word: "antes", hint: "before" }
    ]
  },

  days_months: {
    name: "Days & Months",
    description: "Navigate calendars and dates",
    icon: Calendar,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "lunes", hint: "Monday" },
      { word: "martes", hint: "Tuesday" },
      { word: "miércoles", hint: "Wednesday" },
      { word: "jueves", hint: "Thursday" },
      { word: "viernes", hint: "Friday" },
      { word: "sábado", hint: "Saturday" },
      { word: "domingo", hint: "Sunday" },
      { word: "enero", hint: "January" },
      { word: "febrero", hint: "February" },
      { word: "marzo", hint: "March" },
      { word: "abril", hint: "April" },
      { word: "mayo", hint: "May" },
      { word: "junio", hint: "June" },
      { word: "julio", hint: "July" },
      { word: "agosto", hint: "August" }
    ]
  },

  numbers: {
    name: "Numbers",
    description: "Count and quantify with numbers",
    icon: Star,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "uno", hint: "one" },
      { word: "dos", hint: "two" },
      { word: "tres", hint: "three" },
      { word: "cuatro", hint: "four" },
      { word: "cinco", hint: "five" },
      { word: "seis", hint: "six" },
      { word: "siete", hint: "seven" },
      { word: "ocho", hint: "eight" },
      { word: "nueve", hint: "nine" },
      { word: "diez", hint: "ten" },
      { word: "veinte", hint: "twenty" },
      { word: "treinta", hint: "thirty" },
      { word: "cien", hint: "hundred" },
      { word: "mil", hint: "thousand" },
      { word: "millón", hint: "million" }
    ]
  },

  drinks: {
    name: "Drinks & Beverages",
    description: "Order with confidence using beverage vocabulary",
    icon: Coffee,
    color: "from-amber-500 to-brown-600",
    level: "beginner",
    words: [
      { word: "agua", hint: "water" },
      { word: "café", hint: "coffee" },
      { word: "té", hint: "tea" },
      { word: "jugo", hint: "juice" },
      { word: "refresco", hint: "soda" },
      { word: "vino", hint: "wine" },
      { word: "cerveza", hint: "beer" },
      { word: "leche", hint: "milk" },
      { word: "chocolate", hint: "hot chocolate" },
      { word: "batido", hint: "smoothie" },
      { word: "limonada", hint: "lemonade" },
      { word: "naranjada", hint: "orange drink" },
      { word: "licuado", hint: "milkshake" },
      { word: "cóctel", hint: "cocktail" },
      { word: "sangría", hint: "sangria" }
    ]
  },

  nature: {
    name: "Nature",
    description: "Appreciate the natural world",
    icon: Mountain,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "montaña", hint: "mountain" },
      { word: "río", hint: "river" },
      { word: "lago", hint: "lake" },
      { word: "mar", hint: "sea" },
      { word: "océano", hint: "ocean" },
      { word: "playa", hint: "beach" },
      { word: "bosque", hint: "forest" },
      { word: "árbol", hint: "tree" },
      { word: "flor", hint: "flower" },
      { word: "hierba", hint: "grass" },
      { word: "piedra", hint: "stone" },
      { word: "arena", hint: "sand" },
      { word: "estrella", hint: "star" },
      { word: "luna", hint: "moon" },
      { word: "sol", hint: "sun" }
    ]
  },

  city_places: {
    name: "City Places",
    description: "Navigate urban environments with vocabulary",
    icon: Building,
    color: "from-slate-500 to-gray-600",
    level: "beginner",
    words: [
      { word: "hospital", hint: "hospital" },
      { word: "escuela", hint: "school" },
      { word: "banco", hint: "bank" },
      { word: "tienda", hint: "store" },
      { word: "restaurante", hint: "restaurant" },
      { word: "hotel", hint: "hotel" },
      { word: "museo", hint: "museum" },
      { word: "biblioteca", hint: "library" },
      { word: "parque", hint: "park" },
      { word: "cine", hint: "cinema" },
      { word: "teatro", hint: "theater" },
      { word: "iglesia", hint: "church" },
      { word: "plaza", hint: "square" },
      { word: "calle", hint: "street" },
      { word: "mercado", hint: "market" }
    ]
  },

  technology: {
    name: "Technology",
    description: "Stay connected with modern technology",
    icon: Phone,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "teléfono", hint: "telephone" },
      { word: "computadora", hint: "computer" },
      { word: "internet", hint: "internet" },
      { word: "correo", hint: "email" },
      { word: "mensaje", hint: "message" },
      { word: "aplicación", hint: "application" },
      { word: "pantalla", hint: "screen" },
      { word: "teclado", hint: "keyboard" },
      { word: "ratón", hint: "mouse" },
      { word: "impresora", hint: "printer" },
      { word: "cámara", hint: "camera" },
      { word: "tableta", hint: "tablet" },
      { word: "altavoz", hint: "speaker" },
      { word: "auricular", hint: "headphone" },
      { word: "archivo", hint: "file" }
    ]
  },

  celebrations: {
    name: "Celebrations",
    description: "Join festivities with vocabulary",
    icon: Gift,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "fiesta", hint: "party" },
      { word: "cumpleaños", hint: "birthday" },
      { word: "boda", hint: "wedding" },
      { word: "regalo", hint: "gift" },
      { word: "pastel", hint: "cake" },
      { word: "decoración", hint: "decoration" },
      { word: "invitación", hint: "invitation" },
      { word: "celebración", hint: "celebration" },
      { word: "aniversario", hint: "anniversary" },
      { word: "navidad", hint: "Christmas" },
      { word: "añonuevo", hint: "New Year" },
      { word: "graduación", hint: "graduation" },
      { word: "sorpresa", hint: "surprise" },
      { word: "brindis", hint: "toast" },
      { word: "confeti", hint: "confetti" }
    ]
  },

  music_instruments: {
    name: "Music & Instruments",
    description: "Express musical passion with vocabulary",
    icon: Music,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "guitarra", hint: "guitar" },
      { word: "piano", hint: "piano" },
      { word: "violín", hint: "violin" },
      { word: "batería", hint: "drums" },
      { word: "flauta", hint: "flute" },
      { word: "trompeta", hint: "trumpet" },
      { word: "saxofón", hint: "saxophone" },
      { word: "canción", hint: "song" },
      { word: "música", hint: "music" },
      { word: "melodía", hint: "melody" },
      { word: "ritmo", hint: "rhythm" },
      { word: "concierto", hint: "concert" },
      { word: "banda", hint: "band" },
      { word: "cantante", hint: "singer" },
      { word: "compositor", hint: "composer" }
    ]
  },

  hobbies: {
    name: "Hobbies",
    description: "Share your interests with hobby vocabulary",
    icon: Camera,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "lectura", hint: "reading" },
      { word: "pintura", hint: "painting" },
      { word: "fotografía", hint: "photography" },
      { word: "cocina", hint: "cooking" },
      { word: "jardinería", hint: "gardening" },
      { word: "costura", hint: "sewing" },
      { word: "tejido", hint: "knitting" },
      { word: "colección", hint: "collecting" },
      { word: "pesca", hint: "fishing" },
      { word: "camping", hint: "camping" },
      { word: "senderismo", hint: "hiking" },
      { word: "baile", hint: "dancing" },
      { word: "yoga", hint: "yoga" },
      { word: "ajedrez", hint: "chess" },
      { word: "videojuego", hint: "video game" }
    ]
  },

  adjectives_basic: {
    name: "Basic Adjectives",
    description: "Describe the world with adjectives",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "grande", hint: "big" },
      { word: "pequeño", hint: "small" },
      { word: "alto", hint: "tall" },
      { word: "bajo", hint: "short" },
      { word: "nuevo", hint: "new" },
      { word: "viejo", hint: "old" },
      { word: "bueno", hint: "good" },
      { word: "malo", hint: "bad" },
      { word: "feliz", hint: "happy" },
      { word: "triste", hint: "sad" },
      { word: "rápido", hint: "fast" },
      { word: "lento", hint: "slow" },
      { word: "fácil", hint: "easy" },
      { word: "difícil", hint: "difficult" },
      { word: "hermoso", hint: "beautiful" }
    ]
  },

  action_verbs: {
    name: "Action Verbs",
    description: "Express actions with fundamental verbs",
    icon: Zap,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "hablar", hint: "to speak" },
      { word: "comer", hint: "to eat" },
      { word: "beber", hint: "to drink" },
      { word: "dormir", hint: "to sleep" },
      { word: "caminar", hint: "to walk" },
      { word: "correr", hint: "to run" },
      { word: "escribir", hint: "to write" },
      { word: "leer", hint: "to read" },
      { word: "ver", hint: "to see" },
      { word: "oír", hint: "to hear" },
      { word: "pensar", hint: "to think" },
      { word: "sentir", hint: "to feel" },
      { word: "vivir", hint: "to live" },
      { word: "trabajar", hint: "to work" },
      { word: "estudiar", hint: "to study" }
    ]
  },

  emotions_feelings: {
    name: "Emotions",
    description: "Express feelings with emotional vocabulary",
    icon: Heart,
    color: "from-pink-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "amor", hint: "love" },
      { word: "alegría", hint: "joy" },
      { word: "tristeza", hint: "sadness" },
      { word: "enojo", hint: "anger" },
      { word: "miedo", hint: "fear" },
      { word: "sorpresa", hint: "surprise" },
      { word: "preocupación", hint: "worry" },
      { word: "vergüenza", hint: "shame" },
      { word: "orgullo", hint: "pride" },
      { word: "celos", hint: "jealousy" },
      { word: "ansiedad", hint: "anxiety" },
      { word: "esperanza", hint: "hope" },
      { word: "gratitud", hint: "gratitude" },
      { word: "frustración", hint: "frustration" },
      { word: "paz", hint: "peace" }
    ]
  },

  seasons_weather: {
    name: "Seasons & Weather",
    description: "Talk about seasonal changes",
    icon: Snowflake,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "primavera", hint: "spring" },
      { word: "verano", hint: "summer" },
      { word: "otoño", hint: "autumn" },
      { word: "invierno", hint: "winter" },
      { word: "soleado", hint: "sunny" },
      { word: "nublado", hint: "cloudy" },
      { word: "lluvioso", hint: "rainy" },
      { word: "ventoso", hint: "windy" },
      { word: "nevado", hint: "snowy" },
      { word: "húmedo", hint: "humid" },
      { word: "seco", hint: "dry" },
      { word: "cálido", hint: "warm" },
      { word: "fresco", hint: "cool" },
      { word: "helado", hint: "freezing" },
      { word: "tormentoso", hint: "stormy" }
    ]
  },

  materials: {
    name: "Materials",
    description: "Identify objects and their composition",
    icon: Droplets,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "madera", hint: "wood" },
      { word: "metal", hint: "metal" },
      { word: "plástico", hint: "plastic" },
      { word: "vidrio", hint: "glass" },
      { word: "papel", hint: "paper" },
      { word: "tela", hint: "fabric" },
      { word: "cuero", hint: "leather" },
      { word: "algodón", hint: "cotton" },
      { word: "lana", hint: "wool" },
      { word: "seda", hint: "silk" },
      { word: "oro", hint: "gold" },
      { word: "plata", hint: "silver" },
      { word: "piedra", hint: "stone" },
      { word: "cemento", hint: "cement" },
      { word: "ladrillo", hint: "brick" }
    ]
  }
};

export default wordBuilderCategories_part4;
