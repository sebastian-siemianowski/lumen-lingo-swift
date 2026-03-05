/**
 * ENGLISH → SPANISH WORD BUILDER - PART 15
 * Categories: 81-85
 * 5 categories, 15 words each = 75 words
 */

import { Truck, Scale, Clock, Smile, Coins } from "lucide-react";

export const wordBuilderCategories_part15 = {
  vehicles_transport: {
    name: "Vehicles & Transport",
    description: "Types of vehicles for transportation",
    icon: Truck,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "camión", hint: "truck" },
      { word: "furgoneta", hint: "van" },
      { word: "ambulancia", hint: "ambulance" },
      { word: "autobús", hint: "bus" },
      { word: "tranvía", hint: "tram" },
      { word: "metro", hint: "subway" },
      { word: "tren", hint: "train" },
      { word: "locomotora", hint: "locomotive" },
      { word: "vagón", hint: "wagon" },
      { word: "lancha", hint: "motorboat" },
      { word: "yate", hint: "yacht" },
      { word: "ferry", hint: "ferry" },
      { word: "crucero", hint: "cruise ship" },
      { word: "remolque", hint: "trailer" },
      { word: "grúa", hint: "tow truck" }
    ]
  },

  measurements: {
    name: "Measurements & Units",
    description: "Units for measuring various quantities",
    icon: Scale,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "metro", hint: "meter" },
      { word: "kilómetro", hint: "kilometer" },
      { word: "centímetro", hint: "centimeter" },
      { word: "milímetro", hint: "millimeter" },
      { word: "gramo", hint: "gram" },
      { word: "kilogramo", hint: "kilogram" },
      { word: "tonelada", hint: "ton" },
      { word: "litro", hint: "liter" },
      { word: "mililitro", hint: "milliliter" },
      { word: "grado", hint: "degree" },
      { word: "volumen", hint: "volume" },
      { word: "longitud", hint: "length" },
      { word: "anchura", hint: "width" },
      { word: "altura", hint: "height" },
      { word: "profundidad", hint: "depth" }
    ]
  },

  time_periods: {
    name: "Time Periods",
    description: "Periods and divisions of time",
    icon: Clock,
    color: "from-orange-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "instante", hint: "instant" },
      { word: "momento", hint: "moment" },
      { word: "período", hint: "period" },
      { word: "época", hint: "era" },
      { word: "siglo", hint: "century" },
      { word: "década", hint: "decade" },
      { word: "trimestre", hint: "quarter" },
      { word: "bimestre", hint: "two-month period" },
      { word: "quincena", hint: "fortnight" },
      { word: "madrugada", hint: "dawn" },
      { word: "amanecer", hint: "sunrise" },
      { word: "mediodía", hint: "noon" },
      { word: "atardecer", hint: "sunset" },
      { word: "anochecer", hint: "nightfall" },
      { word: "medianoche", hint: "midnight" }
    ]
  },

  facial_expressions: {
    name: "Facial Expressions",
    description: "Expressions and gestures of face",
    icon: Smile,
    color: "from-yellow-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "sonrisa", hint: "smile" },
      { word: "risa", hint: "laugh" },
      { word: "mueca", hint: "grimace" },
      { word: "ceño", hint: "frown" },
      { word: "guiño", hint: "wink" },
      { word: "mirada", hint: "look" },
      { word: "parpadeo", hint: "blink" },
      { word: "bostezo", hint: "yawn" },
      { word: "suspiro", hint: "sigh" },
      { word: "lágrima", hint: "tear" },
      { word: "gesto", hint: "gesture" },
      { word: "expresión", hint: "expression" },
      { word: "rostro", hint: "face" },
      { word: "semblante", hint: "countenance" },
      { word: "ademán", hint: "demeanor" }
    ]
  },

  money_finance: {
    name: "Money & Finance",
    description: "Financial and monetary terminology",
    icon: Coins,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "moneda", hint: "coin/currency" },
      { word: "billete", hint: "banknote" },
      { word: "efectivo", hint: "cash" },
      { word: "tarjeta", hint: "card" },
      { word: "crédito", hint: "credit" },
      { word: "débito", hint: "debit" },
      { word: "ahorro", hint: "savings" },
      { word: "deuda", hint: "debt" },
      { word: "préstamo", hint: "loan" },
      { word: "interés", hint: "interest" },
      { word: "inversión", hint: "investment" },
      { word: "ganancia", hint: "profit" },
      { word: "pérdida", hint: "loss" },
      { word: "impuesto", hint: "tax" },
      { word: "presupuesto", hint: "budget" }
    ]
  }
};

export default wordBuilderCategories_part15;