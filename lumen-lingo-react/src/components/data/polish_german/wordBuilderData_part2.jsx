/**
 * POLISH → GERMAN WORD BUILDER - PART 2
 * Categories: 6-10
 * 5 categories, 15 words each = 75 words
 */

import { Snowflake, Sun, Cloud, Droplets } from "lucide-react";

export const wordBuilderCategories_part2 = {
  winter_weather: {
    name: "Pogoda zimowa",
    description: "Zima i zimowe zjawiska",
    icon: Snowflake,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { word: "Schnee", hint: "śnieg" },
      { word: "Eis", hint: "lód" },
      { word: "Frost", hint: "mróz" },
      { word: "Kälte", hint: "zimno" },
      { word: "Winter", hint: "zima" },
      { word: "Schneeflocke", hint: "płatek śniegu" },
      { word: "Eiszapfen", hint: "sopel" },
      { word: "Schneemann", hint: "bałwan" },
      { word: "Lawine", hint: "lawina" },
      { word: "Gletscher", hint: "lodowiec" },
      { word: "Schneesturm", hint: "śnieżyca" },
      { word: "Raureif", hint: "szron" },
      { word: "gefroren", hint: "zamrożony" },
      { word: "Schlittschuh", hint: "łyżwa" },
      { word: "Skifahren", hint: "narciarstwo" }
    ]
  },

  summer_weather: {
    name: "Pogoda letnia",
    description: "Lato i słoneczne dni",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Sonne", hint: "słońce" },
      { word: "Hitze", hint: "upał" },
      { word: "Sommer", hint: "lato" },
      { word: "Strand", hint: "plaża" },
      { word: "Meer", hint: "morze" },
      { word: "Schwimmen", hint: "pływanie" },
      { word: "Sonnenschein", hint: "słońce" },
      { word: "Wärme", hint: "ciepło" },
      { word: "Urlaub", hint: "wakacje" },
      { word: "Ferien", hint: "ferie" },
      { word: "Hitzewelle", hint: "fala upałów" },
      { word: "Sonnenbrand", hint: "oparzenie słoneczne" },
      { word: "Schatten", hint: "cień" },
      { word: "Picknick", hint: "piknik" },
      { word: "Grillen", hint: "grillowanie" }
    ]
  },

  clouds_sky: {
    name: "Chmury i niebo",
    description: "Niebo i zjawiska atmosferyczne",
    icon: Cloud,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "Wolke", hint: "chmura" },
      { word: "Himmel", hint: "niebo" },
      { word: "bewölkt", hint: "pochmurno" },
      { word: "klar", hint: "jasno" },
      { word: "Nebel", hint: "mgła" },
      { word: "Dunst", hint: "mgiełka" },
      { word: "Regenwolke", hint: "chmura deszczowa" },
      { word: "Gewitterwolke", hint: "chmura burzowa" },
      { word: "Sonnenaufgang", hint: "wschód słońca" },
      { word: "Sonnenuntergang", hint: "zachód słońca" },
      { word: "Dämmerung", hint: "zmierzch" },
      { word: "Morgendämmerung", hint: "świt" },
      { word: "Regenbogen", hint: "tęcza" },
      { word: "Stern", hint: "gwiazda" },
      { word: "Mond", hint: "księżyc" }
    ]
  },

  rain_water: {
    name: "Deszcz i woda",
    description: "Opady i zjawiska wodne",
    icon: Droplets,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Regen", hint: "deszcz" },
      { word: "Wasser", hint: "woda" },
      { word: "Tropfen", hint: "kropla" },
      { word: "Pfütze", hint: "kałuża" },
      { word: "Überschwemmung", hint: "powódź" },
      { word: "Regenschirm", hint: "parasol" },
      { word: "Regenmantel", hint: "płaszcz przeciwdeszczowy" },
      { word: "nass", hint: "mokry" },
      { word: "feucht", hint: "wilgotny" },
      { word: "Nieselregen", hint: "mżawka" },
      { word: "Schauer", hint: "przelotny deszcz" },
      { word: "Hagel", hint: "grad" },
      { word: "Tau", hint: "rosa" },
      { word: "Feuchtigkeit", hint: "wilgotność" },
      { word: "Dürre", hint: "susza" }
    ]
  }
};

export default wordBuilderCategories_part2;