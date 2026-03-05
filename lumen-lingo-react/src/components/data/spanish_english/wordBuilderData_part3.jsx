/**
 * SPANISH → ENGLISH WORD BUILDER - PART 3
 * Categories: 11-14
 * 4 categories, 15 words each = 60 words
 */

import { Snowflake, Sun, Cloud, Droplets } from "lucide-react";

export const wordBuilderCategories_part3 = {
  winter_weather: {
    name: "Clima invernal",
    description: "Invierno y fenómenos fríos",
    icon: Snowflake,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { word: "snow", hint: "nieve" },
      { word: "ice", hint: "hielo" },
      { word: "frost", hint: "escarcha" },
      { word: "cold", hint: "frío" },
      { word: "winter", hint: "invierno" },
      { word: "snowflake", hint: "copo de nieve" },
      { word: "icicle", hint: "carámbano" },
      { word: "snowman", hint: "muñeco de nieve" },
      { word: "avalanche", hint: "avalancha" },
      { word: "glacier", hint: "glaciar" },
      { word: "blizzard", hint: "ventisca" },
      { word: "frozen", hint: "congelado" },
      { word: "skating", hint: "patinaje" },
      { word: "skiing", hint: "esquí" },
      { word: "freezing", hint: "helado" }
    ]
  },

  summer_weather: {
    name: "Clima de verano",
    description: "Verano y días soleados",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sun", hint: "sol" },
      { word: "heat", hint: "calor" },
      { word: "summer", hint: "verano" },
      { word: "beach", hint: "playa" },
      { word: "sea", hint: "mar" },
      { word: "swimming", hint: "natación" },
      { word: "sunshine", hint: "sol brillante" },
      { word: "warmth", hint: "calidez" },
      { word: "vacation", hint: "vacaciones" },
      { word: "heatwave", hint: "ola de calor" },
      { word: "sunburn", hint: "quemadura solar" },
      { word: "shade", hint: "sombra" },
      { word: "picnic", hint: "picnic" },
      { word: "barbecue", hint: "barbacoa" },
      { word: "hot", hint: "caliente" }
    ]
  },

  clouds_sky: {
    name: "Nubes y cielo",
    description: "Cielo y fenómenos atmosféricos",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "cloud", hint: "nube" },
      { word: "sky", hint: "cielo" },
      { word: "cloudy", hint: "nublado" },
      { word: "clear", hint: "despejado" },
      { word: "fog", hint: "niebla" },
      { word: "mist", hint: "neblina" },
      { word: "storm cloud", hint: "nube de tormenta" },
      { word: "sunrise", hint: "amanecer" },
      { word: "sunset", hint: "atardecer" },
      { word: "twilight", hint: "crepúsculo" },
      { word: "dawn", hint: "alba" },
      { word: "rainbow", hint: "arcoíris" },
      { word: "star", hint: "estrella" },
      { word: "moon", hint: "luna" },
      { word: "horizon", hint: "horizonte" }
    ]
  },

  rain_water: {
    name: "Lluvia y agua",
    description: "Precipitación y fenómenos acuáticos",
    icon: Droplets,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "rain", hint: "lluvia" },
      { word: "water", hint: "agua" },
      { word: "drop", hint: "gota" },
      { word: "puddle", hint: "charco" },
      { word: "flood", hint: "inundación" },
      { word: "umbrella", hint: "paraguas" },
      { word: "raincoat", hint: "impermeable" },
      { word: "wet", hint: "mojado" },
      { word: "humid", hint: "húmedo" },
      { word: "drizzle", hint: "llovizna" },
      { word: "shower", hint: "chaparrón" },
      { word: "hail", hint: "granizo" },
      { word: "dew", hint: "rocío" },
      { word: "humidity", hint: "humedad" },
      { word: "drought", hint: "sequía" }
    ]
  }
};

export default wordBuilderCategories_part3;