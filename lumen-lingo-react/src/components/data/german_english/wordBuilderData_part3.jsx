/**
 * GERMAN → ENGLISH WORD BUILDER - PART 3
 * Categories: 10-14
 * 5 categories, 15 words each = 75 words
 */

import { Zap, Mountain, TreePine, Flower, Apple } from "lucide-react";

export const wordBuilderCategories_part3 = {
  storms: {
    name: "Stürme und Winde",
    description: "Stürmische Phänomene und heftiges Wetter",
    icon: Zap,
    color: "from-purple-500 to-fuchsia-600",
    level: "intermediate",
    words: [
      { word: "storm", hint: "Sturm" },
      { word: "lightning", hint: "Blitz" },
      { word: "thunder", hint: "Donner" },
      { word: "hurricane", hint: "Hurrikan" },
      { word: "tornado", hint: "Tornado" },
      { word: "cyclone", hint: "Zyklon" },
      { word: "tempest", hint: "Unwetter" },
      { word: "bolt", hint: "Blitzschlag" },
      { word: "stormy", hint: "stürmisch" },
      { word: "gust", hint: "Windstoß" },
      { word: "downpour", hint: "Platzregen" },
      { word: "hailstorm", hint: "Hagelsturm" },
      { word: "electricity", hint: "Elektrizität" },
      { word: "dangerous", hint: "gefährlich" },
      { word: "flash", hint: "Blitz" }
    ]
  },

  mountains_nature: {
    name: "Berge und Natur",
    description: "Bergiges Gelände und Landschaften",
    icon: Mountain,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "mountain", hint: "Berg" },
      { word: "peak", hint: "Gipfel" },
      { word: "valley", hint: "Tal" },
      { word: "rock", hint: "Felsen" },
      { word: "cliff", hint: "Klippe" },
      { word: "slope", hint: "Hang" },
      { word: "canyon", hint: "Schlucht" },
      { word: "hill", hint: "Hügel" },
      { word: "hiking", hint: "Wandern" },
      { word: "climbing", hint: "Klettern" },
      { word: "altitude", hint: "Höhe" },
      { word: "view", hint: "Aussicht" },
      { word: "trail", hint: "Pfad" },
      { word: "ridge", hint: "Kamm" },
      { word: "plateau", hint: "Hochebene" }
    ]
  },

  forest_trees: {
    name: "Wald und Bäume",
    description: "Wälder und Baumpflanzen",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "forest", hint: "Wald" },
      { word: "tree", hint: "Baum" },
      { word: "oak", hint: "Eiche" },
      { word: "pine", hint: "Kiefer" },
      { word: "birch", hint: "Birke" },
      { word: "fir", hint: "Tanne" },
      { word: "spruce", hint: "Fichte" },
      { word: "beech", hint: "Buche" },
      { word: "leaf", hint: "Blatt" },
      { word: "branch", hint: "Ast" },
      { word: "root", hint: "Wurzel" },
      { word: "trunk", hint: "Stamm" },
      { word: "bark", hint: "Rinde" },
      { word: "moss", hint: "Moos" },
      { word: "mushroom", hint: "Pilz" }
    ]
  },

  flowers_plants: {
    name: "Blumen und Pflanzen",
    description: "Zierpflanzen und Blumen",
    icon: Flower,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "flower", hint: "Blume" },
      { word: "rose", hint: "Rose" },
      { word: "tulip", hint: "Tulpe" },
      { word: "sunflower", hint: "Sonnenblume" },
      { word: "carnation", hint: "Nelke" },
      { word: "lily", hint: "Lilie" },
      { word: "orchid", hint: "Orchidee" },
      { word: "daisy", hint: "Gänseblümchen" },
      { word: "violet", hint: "Veilchen" },
      { word: "lavender", hint: "Lavendel" },
      { word: "blossom", hint: "Blüte" },
      { word: "petal", hint: "Blütenblatt" },
      { word: "stem", hint: "Stängel" },
      { word: "bouquet", hint: "Strauß" },
      { word: "garden", hint: "Garten" }
    ]
  },

  fruits: {
    name: "Früchte",
    description: "Frische und saftige Früchte",
    icon: Apple,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "apple", hint: "Apfel" },
      { word: "pear", hint: "Birne" },
      { word: "banana", hint: "Banane" },
      { word: "orange", hint: "Orange" },
      { word: "lemon", hint: "Zitrone" },
      { word: "strawberry", hint: "Erdbeere" },
      { word: "cherry", hint: "Kirsche" },
      { word: "grape", hint: "Traube" },
      { word: "peach", hint: "Pfirsich" },
      { word: "plum", hint: "Pflaume" },
      { word: "melon", hint: "Melone" },
      { word: "watermelon", hint: "Wassermelone" },
      { word: "pineapple", hint: "Ananas" },
      { word: "mango", hint: "Mango" },
      { word: "kiwi", hint: "Kiwi" }
    ]
  }
};

export default wordBuilderCategories_part3;