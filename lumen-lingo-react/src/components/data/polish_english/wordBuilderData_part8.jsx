/**
 * POLISH → ENGLISH WORD BUILDER - PART 8
 * Categories: 43-46
 * 4 categories, 15 words each = 60 words
 */

import { Bug, TreePine, Flower, Apple } from "lucide-react";

export const wordBuilderCategories_part8 = {
  insects: {
    name: "Owady",
    description: "Insekty i robactwo",
    icon: Bug,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "butterfly", hint: "motyl" },
      { word: "bee", hint: "pszczoła" },
      { word: "wasp", hint: "osa" },
      { word: "ant", hint: "mrówka" },
      { word: "spider", hint: "pająk" },
      { word: "mosquito", hint: "komar" },
      { word: "fly", hint: "mucha" },
      { word: "beetle", hint: "chrząszcz" },
      { word: "ladybug", hint: "biedronka" },
      { word: "dragonfly", hint: "ważka" },
      { word: "grasshopper", hint: "konik polny" },
      { word: "caterpillar", hint: "gąsienica" },
      { word: "cocoon", hint: "kokon" },
      { word: "web", hint: "pajęczyna" },
      { word: "hive", hint: "ul" }
    ]
  },

  plants_trees: {
    name: "Rośliny i drzewa",
    description: "Flora i świat roślinny",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "oak", hint: "dąb" },
      { word: "pine", hint: "sosna" },
      { word: "birch", hint: "brzoza" },
      { word: "maple", hint: "klon" },
      { word: "willow", hint: "wierzba" },
      { word: "palm", hint: "palma" },
      { word: "bush", hint: "krzak" },
      { word: "shrub", hint: "krzew" },
      { word: "vine", hint: "pnącze" },
      { word: "root", hint: "korzeń" },
      { word: "trunk", hint: "pień" },
      { word: "branch", hint: "gałąź" },
      { word: "leaf", hint: "liść" },
      { word: "bark", hint: "kora" },
      { word: "moss", hint: "mech" }
    ]
  },

  flowers: {
    name: "Kwiaty",
    description: "Popularne rodzaje kwiatów",
    icon: Flower,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "rose", hint: "róża" },
      { word: "tulip", hint: "tulipan" },
      { word: "daisy", hint: "stokrotka" },
      { word: "sunflower", hint: "słonecznik" },
      { word: "lily", hint: "lilia" },
      { word: "orchid", hint: "orchidea" },
      { word: "daffodil", hint: "żonkil" },
      { word: "carnation", hint: "goździk" },
      { word: "poppy", hint: "mak" },
      { word: "lavender", hint: "lawenda" },
      { word: "violet", hint: "fiołek" },
      { word: "peony", hint: "piwonia" },
      { word: "bouquet", hint: "bukiet" },
      { word: "petal", hint: "płatek" },
      { word: "stem", hint: "łodyga" }
    ]
  },

  fruits: {
    name: "Owoce",
    description: "Owoce świeże i sezonowe",
    icon: Apple,
    color: "from-red-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "apple", hint: "jabłko" },
      { word: "pear", hint: "gruszka" },
      { word: "peach", hint: "brzoskwinia" },
      { word: "plum", hint: "śliwka" },
      { word: "cherry", hint: "wiśnia" },
      { word: "strawberry", hint: "truskawka" },
      { word: "raspberry", hint: "malina" },
      { word: "blueberry", hint: "jagoda" },
      { word: "blackberry", hint: "jeżyna" },
      { word: "grape", hint: "winogrono" },
      { word: "melon", hint: "melon" },
      { word: "watermelon", hint: "arbuz" },
      { word: "pineapple", hint: "ananas" },
      { word: "mango", hint: "mango" },
      { word: "papaya", hint: "papaja" }
    ]
  }
};

export default wordBuilderCategories_part8;