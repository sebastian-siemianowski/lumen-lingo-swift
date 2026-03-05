/**
 * POLISH → ENGLISH WORD BUILDER - PART 6
 * Categories: 35-38
 * 4 categories, 15 words each = 60 words
 */

import { Palette, Mountain, Tent, Snowflake } from "lucide-react";

export const wordBuilderCategories_part6 = {
  hobbies_leisure: {
    name: "Hobby i czas wolny",
    description: "Zajęcia w czasie wolnym",
    icon: Palette,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "painting", hint: "malowanie" },
      { word: "drawing", hint: "rysowanie" },
      { word: "photography", hint: "fotografia" },
      { word: "collecting", hint: "kolekcjonowanie" },
      { word: "crafting", hint: "rękodzieło" },
      { word: "knitting", hint: "robienie na drutach" },
      { word: "sewing", hint: "szycie" },
      { word: "pottery", hint: "garncarstwo" },
      { word: "woodworking", hint: "stolarstwo" },
      { word: "gardening", hint: "ogrodnictwo" },
      { word: "cooking", hint: "gotowanie" },
      { word: "baking", hint: "pieczenie" },
      { word: "volunteering", hint: "wolontariat" },
      { word: "meditation", hint: "medytacja" },
      { word: "journaling", hint: "prowadzenie dziennika" }
    ]
  },

  outdoor_activities: {
    name: "Aktywności na świeżym powietrzu",
    description: "Zajęcia outdoorowe i przygody",
    icon: Mountain,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "hiking", hint: "wędrówki" },
      { word: "climbing", hint: "wspinaczka" },
      { word: "camping", hint: "biwakowanie" },
      { word: "fishing", hint: "wędkarstwo" },
      { word: "hunting", hint: "polowanie" },
      { word: "kayaking", hint: "kajakarstwo" },
      { word: "canoeing", hint: "pływanie kajakiem" },
      { word: "rafting", hint: "rafting" },
      { word: "cycling", hint: "kolarstwo" },
      { word: "jogging", hint: "bieganie" },
      { word: "picnic", hint: "piknik" },
      { word: "barbecue", hint: "grillowanie" },
      { word: "birdwatching", hint: "obserwacja ptaków" },
      { word: "stargazing", hint: "obserwacja gwiazd" },
      { word: "orienteering", hint: "biegi na orientację" }
    ]
  },

  camping_hiking: {
    name: "Kemping i wędrówki",
    description: "Wyposażenie i sprzęt turystyczny",
    icon: Tent,
    color: "from-orange-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "tent", hint: "namiot" },
      { word: "backpack", hint: "plecak" },
      { word: "sleeping bag", hint: "śpiwór" },
      { word: "flashlight", hint: "latarka" },
      { word: "compass", hint: "kompas" },
      { word: "map", hint: "mapa" },
      { word: "rope", hint: "lina" },
      { word: "knife", hint: "nóż" },
      { word: "matches", hint: "zapałki" },
      { word: "campfire", hint: "ognisko" },
      { word: "trail", hint: "szlak" },
      { word: "summit", hint: "szczyt" },
      { word: "valley", hint: "dolina" },
      { word: "forest", hint: "las" },
      { word: "wilderness", hint: "dzicz" }
    ]
  },

  winter_sports: {
    name: "Sporty zimowe",
    description: "Zimowe aktywności sportowe",
    icon: Snowflake,
    color: "from-cyan-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "skiing", hint: "narciarstwo" },
      { word: "snowboarding", hint: "snowboard" },
      { word: "skating", hint: "łyżwiarstwo" },
      { word: "hockey", hint: "hokej" },
      { word: "sledding", hint: "saneczkarstwo" },
      { word: "slope", hint: "stok" },
      { word: "lift", hint: "wyciąg" },
      { word: "resort", hint: "ośrodek" },
      { word: "powder", hint: "puch" },
      { word: "avalanche", hint: "lawina" },
      { word: "goggles", hint: "gogle" },
      { word: "helmet", hint: "kask" },
      { word: "gloves", hint: "rękawice" },
      { word: "jacket", hint: "kurtka" },
      { word: "boots", hint: "buty" }
    ]
  }
};

export default wordBuilderCategories_part6;