/**
 * POLISH → GERMAN WORD BUILDER - PART 32
 * Categories: 128-131
 * 4 categories, 15 words each = 60 words
 */

import { Cookie, Cake, ChefHat, IceCream } from "lucide-react";

export const wordBuilderCategories_part32 = {
  baking: {
    name: "Pieczenie",
    description: "Wypieki i składniki ciast",
    icon: Cookie,
    color: "from-amber-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "backen", hint: "piec" },
      { word: "Teig", hint: "ciasto" },
      { word: "Mehl", hint: "mąka" },
      { word: "Zucker", hint: "cukier" },
      { word: "Salz", hint: "sól" },
      { word: "Hefe", hint: "drożdże" },
      { word: "Backpulver", hint: "proszek do pieczenia" },
      { word: "Vanille", hint: "wanilia" },
      { word: "Zimt", hint: "cynamon" },
      { word: "Kakao", hint: "kakao" },
      { word: "Nudelholz", hint: "wałek do ciasta" },
      { word: "Backblech", hint: "blacha do pieczenia" },
      { word: "Backform", hint: "forma do pieczenia" },
      { word: "Ofen", hint: "piekarnik" },
      { word: "Rezept", hint: "przepis" }
    ]
  },

  pastries_cakes: {
    name: "Ciastka i torty",
    description: "Wypieki i słodkie specjały",
    icon: Cake,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "Kuchen", hint: "ciasto" },
      { word: "Torte", hint: "tort" },
      { word: "Plätzchen", hint: "ciasteczka" },
      { word: "Keks", hint: "herbatnik" },
      { word: "Muffin", hint: "muffinka" },
      { word: "Donut", hint: "pączek" },
      { word: "Croissant", hint: "rogalik" },
      { word: "Brezel", hint: "precel" },
      { word: "Strudel", hint: "szarlotka" },
      { word: "Käsekuchen", hint: "sernik" },
      { word: "Obstkuchen", hint: "ciasto owocowe" },
      { word: "Schokoladenkuchen", hint: "ciasto czekoladowe" },
      { word: "Sahnetorte", hint: "tort śmietankowy" },
      { word: "Bienenstich", hint: "tort pszczeli" },
      { word: "Schwarzwälder Kirschtorte", hint: "tort szwarcwaldzki" }
    ]
  },

  cooking_verbs: {
    name: "Czynności kulinarne",
    description: "Czasowniki związane z gotowaniem",
    icon: ChefHat,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "kochen", hint: "gotować" },
      { word: "braten", hint: "smażyć" },
      { word: "backen", hint: "piec" },
      { word: "schneiden", hint: "kroić" },
      { word: "schälen", hint: "obierać" },
      { word: "hacken", hint: "siekać" },
      { word: "rühren", hint: "mieszać" },
      { word: "schlagen", hint: "ubijać" },
      { word: "kneten", hint: "ugniatać" },
      { word: "würzen", hint: "przyprawiać" },
      { word: "salzen", hint: "solić" },
      { word: "probieren", hint: "próbować" },
      { word: "servieren", hint: "serwować" },
      { word: "garnieren", hint: "dekorować" },
      { word: "anrichten", hint: "podawać" }
    ]
  },

  ice_cream: {
    name: "Lody i desery mrożone",
    description: "Zimne słodkie specjały",
    icon: IceCream,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Eis", hint: "lody" },
      { word: "Eiscreme", hint: "lody kremowe" },
      { word: "Sorbet", hint: "sorbet" },
      { word: "Vanilleeis", hint: "lody waniliowe" },
      { word: "Schokoladeneis", hint: "lody czekoladowe" },
      { word: "Erdbeereis", hint: "lody truskawkowe" },
      { word: "Stracciatella", hint: "stracciatella" },
      { word: "Eiskugel", hint: "gałka lodów" },
      { word: "Eisbecher", hint: "puchar lodowy" },
      { word: "Waffel", hint: "wafelek" },
      { word: "Hörnchen", hint: "rożek" },
      { word: "Sahne", hint: "śmietana" },
      { word: "Streusel", hint: "posypka" },
      { word: "Soße", hint: "sos" },
      { word: "Eisdiele", hint: "lodziarnia" }
    ]
  }
};

export default wordBuilderCategories_part32;