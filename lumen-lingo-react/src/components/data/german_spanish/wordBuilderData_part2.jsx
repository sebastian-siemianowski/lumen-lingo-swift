/**
 * GERMAN → SPANISH WORD BUILDER - PART 2
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
      { word: "nieve", hint: "Schnee" },
      { word: "hielo", hint: "Eis" },
      { word: "escarcha", hint: "Frost" },
      { word: "frío", hint: "Kälte" },
      { word: "invierno", hint: "Winter" },
      { word: "copo de nieve", hint: "Schneeflocke" },
      { word: "carámbano", hint: "Eiszapfen" },
      { word: "muñeco de nieve", hint: "Schneemann" },
      { word: "avalancha", hint: "Lawine" },
      { word: "glaciar", hint: "Gletscher" },
      { word: "ventisca", hint: "Schneesturm" },
      { word: "congelado", hint: "gefroren" },
      { word: "patinaje", hint: "Schlittschuhlaufen" },
      { word: "esquí", hint: "Skifahren" },
      { word: "helado", hint: "eisig" }
    ]
  },

  summer_weather: {
    name: "Sommerwetter",
    description: "Sommer und sonnige Tage",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "sol", hint: "Sonne" },
      { word: "calor", hint: "Hitze" },
      { word: "verano", hint: "Sommer" },
      { word: "playa", hint: "Strand" },
      { word: "mar", hint: "Meer" },
      { word: "natación", hint: "Schwimmen" },
      { word: "sol brillante", hint: "Sonnenschein" },
      { word: "calidez", hint: "Wärme" },
      { word: "vacaciones", hint: "Urlaub" },
      { word: "ola de calor", hint: "Hitzewelle" },
      { word: "quemadura solar", hint: "Sonnenbrand" },
      { word: "sombra", hint: "Schatten" },
      { word: "picnic", hint: "Picknick" },
      { word: "barbacoa", hint: "Grillen" },
      { word: "caliente", hint: "heiß" }
    ]
  },

  clouds_sky: {
    name: "Wolken und Himmel",
    description: "Himmel und atmosphärische Erscheinungen",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "nube", hint: "Wolke" },
      { word: "cielo", hint: "Himmel" },
      { word: "nublado", hint: "bewölkt" },
      { word: "despejado", hint: "klar" },
      { word: "niebla", hint: "Nebel" },
      { word: "neblina", hint: "Dunst" },
      { word: "nube de tormenta", hint: "Gewitterwolke" },
      { word: "amanecer", hint: "Sonnenaufgang" },
      { word: "atardecer", hint: "Sonnenuntergang" },
      { word: "crepúsculo", hint: "Dämmerung" },
      { word: "alba", hint: "Morgendämmerung" },
      { word: "arcoíris", hint: "Regenbogen" },
      { word: "estrella", hint: "Stern" },
      { word: "luna", hint: "Mond" },
      { word: "horizonte", hint: "Horizont" }
    ]
  },

  rain_water: {
    name: "Regen und Wasser",
    description: "Niederschlag und Wassererscheinungen",
    icon: Droplets,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "lluvia", hint: "Regen" },
      { word: "agua", hint: "Wasser" },
      { word: "gota", hint: "Tropfen" },
      { word: "charco", hint: "Pfütze" },
      { word: "inundación", hint: "Überschwemmung" },
      { word: "paraguas", hint: "Regenschirm" },
      { word: "impermeable", hint: "Regenmantel" },
      { word: "mojado", hint: "nass" },
      { word: "húmedo", hint: "feucht" },
      { word: "llovizna", hint: "Nieselregen" },
      { word: "chaparrón", hint: "Schauer" },
      { word: "granizo", hint: "Hagel" },
      { word: "rocío", hint: "Tau" },
      { word: "humedad", hint: "Feuchtigkeit" },
      { word: "sequía", hint: "Dürre" }
    ]
  }
};

export default wordBuilderCategories_part2;