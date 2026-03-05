/**
 * GERMAN → ENGLISH WORD BUILDER - PART 2
 * Categories: 6-9
 * 4 categories, 15 words each = 60 words
 */

import { Snowflake, Sun, Cloud, Droplets } from "lucide-react";

export const wordBuilderCategories_part2 = {
  winter_weather: {
    name: "Winterwetter",
    description: "Winter und kalte Erscheinungen",
    icon: Snowflake,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { word: "snow", hint: "Schnee" },
      { word: "ice", hint: "Eis" },
      { word: "frost", hint: "Frost" },
      { word: "cold", hint: "Kälte" },
      { word: "winter", hint: "Winter" },
      { word: "snowflake", hint: "Schneeflocke" },
      { word: "icicle", hint: "Eiszapfen" },
      { word: "snowman", hint: "Schneemann" },
      { word: "avalanche", hint: "Lawine" },
      { word: "glacier", hint: "Gletscher" },
      { word: "blizzard", hint: "Schneesturm" },
      { word: "frozen", hint: "gefroren" },
      { word: "skating", hint: "Schlittschuhlaufen" },
      { word: "skiing", hint: "Skifahren" },
      { word: "icy", hint: "eisig" }
    ]
  },

  summer_weather: {
    name: "Sommerwetter",
    description: "Sommer und sonnige Tage",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sun", hint: "Sonne" },
      { word: "heat", hint: "Hitze" },
      { word: "summer", hint: "Sommer" },
      { word: "beach", hint: "Strand" },
      { word: "sea", hint: "Meer" },
      { word: "swimming", hint: "Schwimmen" },
      { word: "sunshine", hint: "Sonnenschein" },
      { word: "warmth", hint: "Wärme" },
      { word: "vacation", hint: "Urlaub" },
      { word: "heatwave", hint: "Hitzewelle" },
      { word: "sunburn", hint: "Sonnenbrand" },
      { word: "shade", hint: "Schatten" },
      { word: "picnic", hint: "Picknick" },
      { word: "barbecue", hint: "Grillen" },
      { word: "hot", hint: "heiß" }
    ]
  },

  clouds_sky: {
    name: "Wolken und Himmel",
    description: "Himmel und atmosphärische Erscheinungen",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "cloud", hint: "Wolke" },
      { word: "sky", hint: "Himmel" },
      { word: "cloudy", hint: "bewölkt" },
      { word: "clear", hint: "klar" },
      { word: "fog", hint: "Nebel" },
      { word: "mist", hint: "Dunst" },
      { word: "thundercloud", hint: "Gewitterwolke" },
      { word: "sunrise", hint: "Sonnenaufgang" },
      { word: "sunset", hint: "Sonnenuntergang" },
      { word: "twilight", hint: "Dämmerung" },
      { word: "dawn", hint: "Morgendämmerung" },
      { word: "rainbow", hint: "Regenbogen" },
      { word: "star", hint: "Stern" },
      { word: "moon", hint: "Mond" },
      { word: "horizon", hint: "Horizont" }
    ]
  },

  rain_water: {
    name: "Regen und Wasser",
    description: "Niederschlag und Wassererscheinungen",
    icon: Droplets,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "rain", hint: "Regen" },
      { word: "water", hint: "Wasser" },
      { word: "drop", hint: "Tropfen" },
      { word: "puddle", hint: "Pfütze" },
      { word: "flood", hint: "Überschwemmung" },
      { word: "umbrella", hint: "Regenschirm" },
      { word: "raincoat", hint: "Regenmantel" },
      { word: "wet", hint: "nass" },
      { word: "damp", hint: "feucht" },
      { word: "drizzle", hint: "Nieselregen" },
      { word: "shower", hint: "Schauer" },
      { word: "hail", hint: "Hagel" },
      { word: "dew", hint: "Tau" },
      { word: "humidity", hint: "Feuchtigkeit" },
      { word: "drought", hint: "Dürre" }
    ]
  }
};

export default wordBuilderCategories_part2;