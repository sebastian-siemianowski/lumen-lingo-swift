/**
 * POLISH → ENGLISH WORD BUILDER - PART 16
 * Categories: 76-80
 * 5 categories, 15 words each = 75 words
 */

import { Building2, Factory, Tractor, Wheat, TreeDeciduous } from "lucide-react";

export const wordBuilderCategories_part16 = {
  architecture: {
    name: "Architektura",
    description: "Budynki i elementy architektoniczne",
    icon: Building2,
    color: "from-gray-500 to-slate-600",
    level: "advanced",
    words: [
      { word: "skyscraper", hint: "drapacz chmur" },
      { word: "cathedral", hint: "katedra" },
      { word: "mosque", hint: "meczet" },
      { word: "temple", hint: "świątynia" },
      { word: "palace", hint: "pałac" },
      { word: "castle", hint: "zamek" },
      { word: "fortress", hint: "twierdza" },
      { word: "tower", hint: "wieża" },
      { word: "bridge", hint: "most" },
      { word: "arch", hint: "łuk" },
      { word: "column", hint: "kolumna" },
      { word: "dome", hint: "kopuła" },
      { word: "spire", hint: "iglica" },
      { word: "facade", hint: "fasada" },
      { word: "blueprint", hint: "plan architektoniczny" }
    ]
  },

  industry_manufacturing: {
    name: "Przemysł i produkcja",
    description: "Fabryki i procesy produkcyjne",
    icon: Factory,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "factory", hint: "fabryka" },
      { word: "assembly line", hint: "linia montażowa" },
      { word: "warehouse", hint: "magazyn" },
      { word: "machinery", hint: "maszyny" },
      { word: "production", hint: "produkcja" },
      { word: "manufacturing", hint: "wytwarzanie" },
      { word: "quality control", hint: "kontrola jakości" },
      { word: "conveyor belt", hint: "taśma produkcyjna" },
      { word: "automation", hint: "automatyzacja" },
      { word: "output", hint: "wydajność" },
      { word: "inventory", hint: "zapasy" },
      { word: "logistics", hint: "logistyka" },
      { word: "supply chain", hint: "łańcuch dostaw" },
      { word: "shipment", hint: "przesyłka" },
      { word: "distribution", hint: "dystrybucja" }
    ]
  },

  farming: {
    name: "Gospodarstwo rolne",
    description: "Rolnictwo i hodowla",
    icon: Tractor,
    color: "from-green-500 to-lime-600",
    level: "intermediate",
    words: [
      { word: "farm", hint: "gospodarstwo" },
      { word: "farmer", hint: "rolnik" },
      { word: "crop", hint: "plon" },
      { word: "harvest", hint: "żniwa" },
      { word: "plowing", hint: "orka" },
      { word: "sowing", hint: "siew" },
      { word: "irrigation", hint: "nawadnianie" },
      { word: "barn", hint: "stodoła" },
      { word: "stable", hint: "stajnia" },
      { word: "pasture", hint: "pastwisko" },
      { word: "livestock", hint: "bydło" },
      { word: "poultry", hint: "drób" },
      { word: "orchard", hint: "sad" },
      { word: "vineyard", hint: "winnica" },
      { word: "scarecrow", hint: "strach na wróble" }
    ]
  },

  crops_grains: {
    name: "Uprawy i zboża",
    description: "Rośliny uprawne i produkty rolne",
    icon: Wheat,
    color: "from-amber-500 to-yellow-600",
    level: "intermediate",
    words: [
      { word: "wheat", hint: "pszenica" },
      { word: "corn", hint: "kukurydza" },
      { word: "rice", hint: "ryż" },
      { word: "barley", hint: "jęczmień" },
      { word: "oats", hint: "owies" },
      { word: "rye", hint: "żyto" },
      { word: "soybean", hint: "soja" },
      { word: "cotton", hint: "bawełna" },
      { word: "tobacco", hint: "tytoń" },
      { word: "sugar cane", hint: "trzcina cukrowa" },
      { word: "hay", hint: "siano" },
      { word: "straw", hint: "słoma" },
      { word: "grain", hint: "ziarno" },
      { word: "seed", hint: "nasienie" },
      { word: "harvest", hint: "zbiór" }
    ]
  },

  forestry: {
    name: "Leśnictwo",
    description: "Las i gospodarka leśna",
    icon: TreeDeciduous,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "forest", hint: "las" },
      { word: "woodland", hint: "leśny obszar" },
      { word: "grove", hint: "gaj" },
      { word: "timber", hint: "drewno" },
      { word: "lumber", hint: "tarcica" },
      { word: "logging", hint: "wyrąb" },
      { word: "sawmill", hint: "tartak" },
      { word: "reforestation", hint: "ponowne zalesianie" },
      { word: "deforestation", hint: "wylesianie" },
      { word: "conservation", hint: "ochrona" },
      { word: "wildlife", hint: "dzika przyroda" },
      { word: "ranger", hint: "leśniczy" },
      { word: "trail", hint: "szlak" },
      { word: "clearing", hint: "polana" },
      { word: "undergrowth", hint: "podszycie" }
    ]
  }
};

export default wordBuilderCategories_part16;