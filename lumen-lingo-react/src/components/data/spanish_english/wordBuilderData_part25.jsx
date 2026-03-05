/**
 * SPANISH → ENGLISH WORD BUILDER - PART 25
 * Categories: 104-108
 * 5 categories, 15 words each = 75 words
 */

import { Thermometer, Clock, Calendar, Moon, Sun } from "lucide-react";

export const wordBuilderCategories_part25 = {
  temperature: {
    name: "Temperatura",
    description: "Medición de calor y frío",
    icon: Thermometer,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "temperature", hint: "temperatura" },
      { word: "degree", hint: "grado" },
      { word: "celsius", hint: "celsius" },
      { word: "fahrenheit", hint: "fahrenheit" },
      { word: "kelvin", hint: "kelvin" },
      { word: "warm", hint: "cálido" },
      { word: "hot", hint: "caliente" },
      { word: "cold", hint: "frío" },
      { word: "cool", hint: "fresco" },
      { word: "lukewarm", hint: "tibio" },
      { word: "fever", hint: "fiebre" },
      { word: "body temperature", hint: "temperatura corporal" },
      { word: "room temperature", hint: "temperatura ambiente" },
      { word: "freezing point", hint: "punto de congelación" },
      { word: "boiling point", hint: "punto de ebullición" }
    ]
  },

  time_periods: {
    name: "Períodos de tiempo",
    description: "Unidades e intervalos temporales",
    icon: Clock,
    color: "from-yellow-500 to-amber-600",
    level: "beginner",
    words: [
      { word: "second", hint: "segundo" },
      { word: "minute", hint: "minuto" },
      { word: "hour", hint: "hora" },
      { word: "day", hint: "día" },
      { word: "week", hint: "semana" },
      { word: "month", hint: "mes" },
      { word: "year", hint: "año" },
      { word: "decade", hint: "década" },
      { word: "century", hint: "siglo" },
      { word: "millennium", hint: "milenio" },
      { word: "past", hint: "pasado" },
      { word: "present", hint: "presente" },
      { word: "future", hint: "futuro" },
      { word: "epoch", hint: "época" },
      { word: "period", hint: "período" }
    ]
  },

  months_seasons: {
    name: "Meses y estaciones",
    description: "Calendario y ciclos anuales",
    icon: Calendar,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "january", hint: "enero" },
      { word: "february", hint: "febrero" },
      { word: "march", hint: "marzo" },
      { word: "april", hint: "abril" },
      { word: "may", hint: "mayo" },
      { word: "june", hint: "junio" },
      { word: "july", hint: "julio" },
      { word: "august", hint: "agosto" },
      { word: "september", hint: "septiembre" },
      { word: "october", hint: "octubre" },
      { word: "november", hint: "noviembre" },
      { word: "december", hint: "diciembre" },
      { word: "spring", hint: "primavera" },
      { word: "autumn", hint: "otoño" },
      { word: "season", hint: "estación" }
    ]
  },

  day_night: {
    name: "Día y noche",
    description: "Partes del día y luz",
    icon: Moon,
    color: "from-indigo-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "day", hint: "día" },
      { word: "night", hint: "noche" },
      { word: "morning", hint: "mañana" },
      { word: "noon", hint: "mediodía" },
      { word: "afternoon", hint: "tarde" },
      { word: "evening", hint: "noche" },
      { word: "midnight", hint: "medianoche" },
      { word: "dawn", hint: "amanecer" },
      { word: "dusk", hint: "anochecer" },
      { word: "bright", hint: "brillante" },
      { word: "dark", hint: "oscuro" },
      { word: "light", hint: "luz" },
      { word: "darkness", hint: "oscuridad" },
      { word: "shadow", hint: "sombra" },
      { word: "daylight", hint: "luz del día" }
    ]
  },

  sun_moon: {
    name: "Sol y luna",
    description: "Cuerpos celestes y luz natural",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sun", hint: "sol" },
      { word: "moon", hint: "luna" },
      { word: "full moon", hint: "luna llena" },
      { word: "new moon", hint: "luna nueva" },
      { word: "crescent", hint: "media luna" },
      { word: "lunar eclipse", hint: "eclipse lunar" },
      { word: "solar eclipse", hint: "eclipse solar" },
      { word: "sunbeam", hint: "rayo de sol" },
      { word: "sunlight", hint: "luz solar" },
      { word: "moonlight", hint: "luz de luna" },
      { word: "moonshine", hint: "resplandor lunar" },
      { word: "sunrise", hint: "salida del sol" },
      { word: "sunset", hint: "puesta del sol" },
      { word: "midday sun", hint: "sol del mediodía" },
      { word: "evening sun", hint: "sol vespertino" }
    ]
  }
};

export default wordBuilderCategories_part25;