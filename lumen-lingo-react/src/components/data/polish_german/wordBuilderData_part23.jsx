/**
 * POLISH → GERMAN WORD BUILDER - PART 23
 * Categories: 92-95
 * 4 categories, 15 words each = 60 words
 */

import { TreePine, Flower2, Bug, Leaf } from "lucide-react";

export const wordBuilderCategories_part23 = {
  garden_plants: {
    name: "Ogród i rośliny",
    description: "Rośliny ogrodowe i uprawa",
    icon: TreePine,
    color: "from-green-500 to-emerald-600",
    level: "beginner",
    words: [
      { word: "Garten", hint: "ogród" },
      { word: "Pflanzen", hint: "rośliny" },
      { word: "Blume", hint: "kwiat" },
      { word: "Baum", hint: "drzewo" },
      { word: "Strauch", hint: "krzew" },
      { word: "Rasen", hint: "trawnik" },
      { word: "Hecke", hint: "żywopłot" },
      { word: "Beet", hint: "grządka" },
      { word: "Gemüsegarten", hint: "ogród warzywny" },
      { word: "Gewächshaus", hint: "szklarnia" },
      { word: "Kompost", hint: "kompost" },
      { word: "Dünger", hint: "nawóz" },
      { word: "Erde", hint: "ziemia" },
      { word: "Samen", hint: "nasiona" },
      { word: "Wurzel", hint: "korzeń" }
    ]
  },

  garden_flowers: {
    name: "Kwiaty ogrodowe",
    description: "Popularne rośliny ozdobne",
    icon: Flower2,
    color: "from-pink-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "Gänseblümchen", hint: "stokrotka" },
      { word: "Löwenzahn", hint: "mlecz" },
      { word: "Vergissmeinnicht", hint: "niezapominajka" },
      { word: "Mohn", hint: "mak" },
      { word: "Chrysantheme", hint: "chryzantema" },
      { word: "Dahlie", hint: "dalia" },
      { word: "Petunie", hint: "petunia" },
      { word: "Begonie", hint: "begonia" },
      { word: "Geranie", hint: "pelargonia" },
      { word: "Azalee", hint: "azalia" },
      { word: "Hortensie", hint: "hortensja" },
      { word: "Flieder", hint: "bez" },
      { word: "Jasmin", hint: "jaśmin" },
      { word: "Krokus", hint: "krokus" },
      { word: "Schneeglöckchen", hint: "przebiśnieg" }
    ]
  },

  garden_pests: {
    name: "Szkodniki ogrodowe",
    description: "Owady i zwierzęta w ogrodzie",
    icon: Bug,
    color: "from-red-500 to-orange-600",
    level: "intermediate",
    words: [
      { word: "Schnecke", hint: "ślimak" },
      { word: "Blattlaus", hint: "mszyca" },
      { word: "Maulwurf", hint: "kret" },
      { word: "Wühlmaus", hint: "nornica" },
      { word: "Raupen", hint: "gąsienice" },
      { word: "Käfer", hint: "chrząszcze" },
      { word: "Mücken", hint: "komary" },
      { word: "Wespe", hint: "osa" },
      { word: "Hornisse", hint: "szerszeń" },
      { word: "Ameisen", hint: "mrówki" },
      { word: "Schädling", hint: "szkodnik" },
      { word: "Ungeziefer", hint: "robactwo" },
      { word: "Insektizid", hint: "środek owadobójczy" },
      { word: "Falle", hint: "pułapka" },
      { word: "Netz", hint: "siatka" }
    ]
  },

  garden_tools: {
    name: "Narzędzia ogrodowe",
    description: "Sprzęt do pracy w ogrodzie",
    icon: Leaf,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "Spaten", hint: "łopata" },
      { word: "Schaufel", hint: "szufla" },
      { word: "Rechen", hint: "grabie" },
      { word: "Harke", hint: "grabki" },
      { word: "Gießkanne", hint: "konewka" },
      { word: "Gartenschlauch", hint: "wąż ogrodowy" },
      { word: "Rasenmäher", hint: "kosiarka" },
      { word: "Heckenschere", hint: "nożyce do żywopłotu" },
      { word: "Gartenschere", hint: "sekator" },
      { word: "Säge", hint: "piła" },
      { word: "Schubkarre", hint: "taczka" },
      { word: "Hacke", hint: "motyka" },
      { word: "Grubber", hint: "kultywator" },
      { word: "Handschuhe", hint: "rękawice" },
      { word: "Kniepolster", hint: "nakolannik" }
    ]
  }
};

export default wordBuilderCategories_part23;