/**
 * POLISH → ENGLISH WORD BUILDER - PART 13
 * Categories: 61-65
 * 5 categories, 15 words each = 75 words
 */

import { CloudRain, Wind, Snowflake, Sun, Zap } from "lucide-react";

export const wordBuilderCategories_part13 = {
  weather_conditions: {
    name: "Warunki pogodowe",
    description: "Opisy pogody i zjawisk atmosferycznych",
    icon: CloudRain,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "cloudy", hint: "pochmurny" },
      { word: "sunny", hint: "słoneczny" },
      { word: "rainy", hint: "deszczowy" },
      { word: "snowy", hint: "śnieżny" },
      { word: "windy", hint: "wietrzny" },
      { word: "foggy", hint: "mglisty" },
      { word: "stormy", hint: "burzowy" },
      { word: "humid", hint: "wilgotny" },
      { word: "dry", hint: "suchy" },
      { word: "freezing", hint: "mroźny" },
      { word: "chilly", hint: "chłodny" },
      { word: "warm", hint: "ciepły" },
      { word: "hot", hint: "gorący" },
      { word: "mild", hint: "łagodny" },
      { word: "overcast", hint: "zachmurzony" }
    ]
  },

  wind_types: {
    name: "Rodzaje wiatru",
    description: "Wiatr i powietrze w ruchu",
    icon: Wind,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "breeze", hint: "bryza" },
      { word: "gale", hint: "wichura" },
      { word: "gust", hint: "podmuch" },
      { word: "hurricane", hint: "huragan" },
      { word: "tornado", hint: "tornado" },
      { word: "whirlwind", hint: "wir" },
      { word: "cyclone", hint: "cyklon" },
      { word: "typhoon", hint: "tajfun" },
      { word: "draft", hint: "przeciąg" },
      { word: "windstorm", hint: "wichura" },
      { word: "squall", hint: "szkwał" },
      { word: "tempest", hint: "burza" },
      { word: "airflow", hint: "przepływ powietrza" },
      { word: "current", hint: "prąd powietrzny" },
      { word: "blizzard", hint: "zamieć" }
    ]
  },

  winter_weather: {
    name: "Pogoda zimowa",
    description: "Zjawiska i warunki zimowe",
    icon: Snowflake,
    color: "from-blue-400 to-indigo-500",
    level: "beginner",
    words: [
      { word: "snow", hint: "śnieg" },
      { word: "ice", hint: "lód" },
      { word: "frost", hint: "szron" },
      { word: "icicle", hint: "sopel" },
      { word: "sleet", hint: "deszcz ze śniegiem" },
      { word: "hail", hint: "grad" },
      { word: "snowflake", hint: "płatek śniegu" },
      { word: "snowfall", hint: "opady śniegu" },
      { word: "snowstorm", hint: "śnieżyca" },
      { word: "avalanche", hint: "lawina" },
      { word: "frostbite", hint: "odmrożenie" },
      { word: "thaw", hint: "odwilż" },
      { word: "frozen", hint: "zamrożony" },
      { word: "cold snap", hint: "nagłe ochłodzenie" },
      { word: "ice age", hint: "epoka lodowcowa" }
    ]
  },

  summer_weather: {
    name: "Pogoda letnia",
    description: "Warunki i zjawiska letnie",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sunshine", hint: "słońce" },
      { word: "heatwave", hint: "fala upałów" },
      { word: "drought", hint: "susza" },
      { word: "scorching", hint: "skwarny" },
      { word: "sweltering", hint: "upalny" },
      { word: "muggy", hint: "parny" },
      { word: "sultry", hint: "duszny" },
      { word: "blazing", hint: "żarliwy" },
      { word: "tropical", hint: "tropikalny" },
      { word: "pleasant", hint: "przyjemny" },
      { word: "balmy", hint: "łagodny" },
      { word: "steamy", hint: "gorący i wilgotny" },
      { word: "boiling", hint: "wrząca" },
      { word: "stifling", hint: "duszący" },
      { word: "oppressive", hint: "przytłaczający" }
    ]
  },

  storms_lightning: {
    name: "Burze i błyskawice",
    description: "Zjawiska burzowe i wyładowania",
    icon: Zap,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "thunderstorm", hint: "burza z piorunami" },
      { word: "lightning", hint: "błyskawica" },
      { word: "thunder", hint: "grzmot" },
      { word: "bolt", hint: "piorun" },
      { word: "flash", hint: "błysk" },
      { word: "downpour", hint: "ulewa" },
      { word: "deluge", hint: "potop" },
      { word: "rainfall", hint: "opad deszczu" },
      { word: "drizzle", hint: "mżawka" },
      { word: "shower", hint: "przelotny deszcz" },
      { word: "cloudburst", hint: "gwałtowna ulewa" },
      { word: "precipitation", hint: "opady" },
      { word: "electrical storm", hint: "burza elektryczna" },
      { word: "rumble", hint: "dudnienie" },
      { word: "crack", hint: "trzask" }
    ]
  }
};

export default wordBuilderCategories_part13;