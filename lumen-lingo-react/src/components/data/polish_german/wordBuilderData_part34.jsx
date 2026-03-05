/**
 * POLISH → GERMAN WORD BUILDER - PART 34
 * Categories: 136-139
 * 4 categories, 15 words each = 60 words
 */

import { Mountain, Tent, Backpack, Compass } from "lucide-react";

export const wordBuilderCategories_part34 = {
  hiking_mountains: {
    name: "Wędrówki i góry",
    description: "Turystyka górska i trekking",
    icon: Mountain,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "Wandern", hint: "wędrowanie" },
      { word: "Wanderung", hint: "wędrówka" },
      { word: "Wanderweg", hint: "szlak turystyczny" },
      { word: "Bergsteigen", hint: "wspinaczka górska" },
      { word: "Gipfel", hint: "szczyt" },
      { word: "Abstieg", hint: "zejście" },
      { word: "Aufstieg", hint: "wejście" },
      { word: "Serpentine", hint: "serpentyna" },
      { word: "Bergführer", hint: "przewodnik górski" },
      { word: "Aussichtspunkt", hint: "punkt widokowy" },
      { word: "Berghütte", hint: "schronisko górskie" },
      { word: "Klettern", hint: "wspinać się" },
      { word: "Seil", hint: "lina" },
      { word: "Karabiner", hint: "karabińczyk" },
      { word: "Helm", hint: "kask" }
    ]
  },

  camping: {
    name: "Kemping",
    description: "Biwakowanie i życie na łonie natury",
    icon: Tent,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "Zelt", hint: "namiot" },
      { word: "Campingplatz", hint: "kemping" },
      { word: "Wohnwagen", hint: "przyczepa kempingowa" },
      { word: "Wohnmobil", hint: "kamper" },
      { word: "Schlafsack", hint: "śpiwór" },
      { word: "Isomatte", hint: "karimata" },
      { word: "Campingkocher", hint: "kuchenka turystyczna" },
      { word: "Gaskartusche", hint: "butla gazowa" },
      { word: "Campingstuhl", hint: "krzesło turystyczne" },
      { word: "Campingtisch", hint: "stolik turystyczny" },
      { word: "Taschenlampe", hint: "latarka" },
      { word: "Laterne", hint: "lampa" },
      { word: "Zeltheringe", hint: "śledzie namiotowe" },
      { word: "Zeltstangen", hint: "kije namiotowe" },
      { word: "Lagerfeuer", hint: "ognisko" }
    ]
  },

  backpacking: {
    name: "Wędrówki z plecakiem",
    description: "Sprzęt i akcesoria turystyczne",
    icon: Backpack,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "Rucksack", hint: "plecak" },
      { word: "Wanderrucksack", hint: "plecak turystyczny" },
      { word: "Trekkingrucksack", hint: "plecak trekkingowy" },
      { word: "Wanderschuhe", hint: "buty trekkingowe" },
      { word: "Wanderstöcke", hint: "kijki trekkingowe" },
      { word: "Trinkflasche", hint: "bidon" },
      { word: "Thermoskanne", hint: "termos" },
      { word: "Proviant", hint: "prowiant" },
      { word: "Energieriegel", hint: "baton energetyczny" },
      { word: "Erste-Hilfe-Set", hint: "apteczka" },
      { word: "Regenkleidung", hint: "odzież przeciwdeszczowa" },
      { word: "Windjacke", hint: "kurtka wiatrówka" },
      { word: "Funktionskleidung", hint: "odzież funkcyjna" },
      { word: "Sonnencreme", hint: "krem przeciwsłoneczny" },
      { word: "Insektenschutz", hint: "środek na owady" }
    ]
  },

  orientation: {
    name: "Orientacja w terenie",
    description: "Nawigacja i znajdowanie drogi",
    icon: Compass,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "Kompass", hint: "kompas" },
      { word: "Karte", hint: "mapa" },
      { word: "Wanderkarte", hint: "mapa turystyczna" },
      { word: "GPS", hint: "GPS" },
      { word: "Navigation", hint: "nawigacja" },
      { word: "Koordinaten", hint: "współrzędne" },
      { word: "Höhenmesser", hint: "wysokościomierz" },
      { word: "Maßstab", hint: "skala" },
      { word: "Legende", hint: "legenda" },
      { word: "Markierung", hint: "oznakowanie" },
      { word: "Wegzeichen", hint: "znak szlaku" },
      { word: "Orientierung", hint: "orientacja" },
      { word: "Richtung", hint: "kierunek" },
      { word: "Standort", hint: "lokalizacja" },
      { word: "Ziel", hint: "cel" }
    ]
  }
};

export default wordBuilderCategories_part34;