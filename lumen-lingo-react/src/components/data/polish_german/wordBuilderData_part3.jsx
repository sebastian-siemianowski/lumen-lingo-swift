/**
 * POLISH → GERMAN WORD BUILDER - PART 3
 * Categories: 11-15
 * 5 categories, 15 words each = 75 words
 */

import { Zap, Mountain, TreePine, Flower, Apple } from "lucide-react";

export const wordBuilderCategories_part3 = {
  storms: {
    name: "Burze i wichury",
    description: "Zjawiska burzowe i gwałtowna pogoda",
    icon: Zap,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "Gewitter", hint: "burza" },
      { word: "Blitz", hint: "błyskawica" },
      { word: "Donner", hint: "grzmot" },
      { word: "Sturm", hint: "sztorm" },
      { word: "Orkan", hint: "huragan" },
      { word: "Tornado", hint: "tornado" },
      { word: "Wirbelsturm", hint: "cyklon" },
      { word: "Unwetter", hint: "niepogoda" },
      { word: "Blitzschlag", hint: "uderzenie pioruna" },
      { word: "stürmisch", hint: "burzliwy" },
      { word: "Windböe", hint: "podmuch wiatru" },
      { word: "Wolkenbruch", hint: "ulewa" },
      { word: "Hagelsturm", hint: "burza gradowa" },
      { word: "Elektrizität", hint: "elektryczność" },
      { word: "gefährlich", hint: "niebezpieczny" }
    ]
  },

  mountains_nature: {
    name: "Góry i przyroda",
    description: "Tereny górskie i krajobrazy",
    icon: Mountain,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "Berg", hint: "góra" },
      { word: "Gipfel", hint: "szczyt" },
      { word: "Tal", hint: "dolina" },
      { word: "Felsen", hint: "skała" },
      { word: "Klippe", hint: "klif" },
      { word: "Hang", hint: "stok" },
      { word: "Schlucht", hint: "wąwóz" },
      { word: "Hügel", hint: "wzgórze" },
      { word: "Wandern", hint: "wędrówka" },
      { word: "Klettern", hint: "wspinaczka" },
      { word: "Höhe", hint: "wysokość" },
      { word: "Aussicht", hint: "widok" },
      { word: "Pfad", hint: "ścieżka" },
      { word: "Grat", hint: "grzbiet" },
      { word: "Hochebene", hint: "płaskowyż" }
    ]
  },

  forest_trees: {
    name: "Las i drzewa",
    description: "Lasy i rośliny drzewiaste",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "Wald", hint: "las" },
      { word: "Baum", hint: "drzewo" },
      { word: "Eiche", hint: "dąb" },
      { word: "Kiefer", hint: "sosna" },
      { word: "Birke", hint: "brzoza" },
      { word: "Tanne", hint: "jodła" },
      { word: "Fichte", hint: "świerk" },
      { word: "Buche", hint: "buk" },
      { word: "Blatt", hint: "liść" },
      { word: "Ast", hint: "gałąź" },
      { word: "Wurzel", hint: "korzeń" },
      { word: "Stamm", hint: "pień" },
      { word: "Rinde", hint: "kora" },
      { word: "Moos", hint: "mech" },
      { word: "Pilz", hint: "grzyb" }
    ]
  },

  flowers_plants: {
    name: "Kwiaty i rośliny",
    description: "Rośliny ozdobne i kwiaty",
    icon: Flower,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "Blume", hint: "kwiat" },
      { word: "Rose", hint: "róża" },
      { word: "Tulpe", hint: "tulipan" },
      { word: "Sonnenblume", hint: "słonecznik" },
      { word: "Nelke", hint: "goździk" },
      { word: "Lilie", hint: "lilia" },
      { word: "Orchidee", hint: "orchidea" },
      { word: "Gänseblümchen", hint: "stokrotka" },
      { word: "Veilchen", hint: "fiołek" },
      { word: "Lavendel", hint: "lawenda" },
      { word: "Blüte", hint: "kwiat" },
      { word: "Blütenblatt", hint: "płatek" },
      { word: "Stiel", hint: "łodyga" },
      { word: "Strauß", hint: "bukiet" },
      { word: "Garten", hint: "ogród" }
    ]
  }
};

export default wordBuilderCategories_part3;