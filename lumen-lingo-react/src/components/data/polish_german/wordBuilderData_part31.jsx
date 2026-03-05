/**
 * POLISH → GERMAN WORD BUILDER - PART 31
 * Categories: 124-127
 * 4 categories, 15 words each = 60 words
 */

import { Calendar, Moon, Sun, Cloud } from "lucide-react";

export const wordBuilderCategories_part31 = {
  months_seasons: {
    name: "Miesiące i pory roku",
    description: "Kalendarz i cykle roczne",
    icon: Calendar,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "Januar", hint: "styczeń" },
      { word: "Februar", hint: "luty" },
      { word: "März", hint: "marzec" },
      { word: "April", hint: "kwiecień" },
      { word: "Mai", hint: "maj" },
      { word: "Juni", hint: "czerwiec" },
      { word: "Juli", hint: "lipiec" },
      { word: "August", hint: "sierpień" },
      { word: "September", hint: "wrzesień" },
      { word: "Oktober", hint: "październik" },
      { word: "November", hint: "listopad" },
      { word: "Dezember", hint: "grudzień" },
      { word: "Frühling", hint: "wiosna" },
      { word: "Herbst", hint: "jesień" },
      { word: "Jahreszeit", hint: "pora roku" }
    ]
  },

  day_night: {
    name: "Dzień i noc",
    description: "Części doby i światło",
    icon: Moon,
    color: "from-indigo-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Tag", hint: "dzień" },
      { word: "Nacht", hint: "noc" },
      { word: "Morgen", hint: "poranek" },
      { word: "Vormittag", hint: "przedpołudnie" },
      { word: "Mittag", hint: "południe" },
      { word: "Nachmittag", hint: "popołudnie" },
      { word: "Abend", hint: "wieczór" },
      { word: "Mitternacht", hint: "północ" },
      { word: "Morgendämmerung", hint: "świt" },
      { word: "Abenddämmerung", hint: "zmierzch" },
      { word: "hell", hint: "jasny" },
      { word: "dunkel", hint: "ciemny" },
      { word: "Licht", hint: "światło" },
      { word: "Finsternis", hint: "ciemność" },
      { word: "Schatten", hint: "cień" }
    ]
  },

  sun_moon: {
    name: "Słońce i księżyc",
    description: "Ciała niebieskie i światło",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Sonne", hint: "słońce" },
      { word: "Mond", hint: "księżyc" },
      { word: "Vollmond", hint: "pełnia księżyca" },
      { word: "Neumond", hint: "nów księżyca" },
      { word: "Halbmond", hint: "półksiężyc" },
      { word: "Mondfinsternis", hint: "zaćmienie księżyca" },
      { word: "Sonnenfinsternis", hint: "zaćmienie słońca" },
      { word: "Sonnenstrahlen", hint: "promienie słoneczne" },
      { word: "Sonnenlicht", hint: "światło słoneczne" },
      { word: "Mondlicht", hint: "światło księżyca" },
      { word: "Mondschein", hint: "blask księżyca" },
      { word: "Sonnenaufgang", hint: "wschód słońca" },
      { word: "Sonnenuntergang", hint: "zachód słońca" },
      { word: "Mittagssonne", hint: "słońce w południe" },
      { word: "Abendsonne", hint: "słońce wieczorne" }
    ]
  },

  weather_phenomena: {
    name: "Zjawiska pogodowe",
    description: "Nietypowe wydarzenia atmosferyczne",
    icon: Cloud,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "Regenbogen", hint: "tęcza" },
      { word: "Nordlicht", hint: "zorza polarna" },
      { word: "Wetterleuchten", hint: "błyskawica cieplna" },
      { word: "Wirbelwind", hint: "trąba powietrzna" },
      { word: "Sandsturm", hint: "burza piaskowa" },
      { word: "Gewitter", hint: "burza" },
      { word: "Nebel", hint: "mgła" },
      { word: "Tau", hint: "rosa" },
      { word: "Reif", hint: "szron" },
      { word: "Graupel", hint: "ziarnisty śnieg" },
      { word: "Nieselregen", hint: "mżawka" },
      { word: "Wolkenbruch", hint: "ulewa" },
      { word: "Wetterfront", hint: "front atmosferyczny" },
      { word: "Hochdruck", hint: "wyż" },
      { word: "Tiefdruck", hint: "niż" }
    ]
  }
};

export default wordBuilderCategories_part31;