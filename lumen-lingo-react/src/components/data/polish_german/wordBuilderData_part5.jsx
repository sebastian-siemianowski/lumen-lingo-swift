/**
 * POLISH → GERMAN WORD BUILDER - PART 5
 * Categories: 21-24
 * 4 categories, 15 words each = 60 words
 */

import { Dog, Fish, Bird, Bug } from "lucide-react";

export const wordBuilderCategories_part5 = {
  pets: {
    name: "Zwierzęta domowe",
    description: "Pupile i ich opieka",
    icon: Dog,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Hund", hint: "pies" },
      { word: "Katze", hint: "kot" },
      { word: "Welpe", hint: "szczeniak" },
      { word: "Kätzchen", hint: "kociak" },
      { word: "Hamster", hint: "chomik" },
      { word: "Meerschweinchen", hint: "świnka morska" },
      { word: "Kaninchen", hint: "królik" },
      { word: "Vogel", hint: "ptak" },
      { word: "Fisch", hint: "ryba" },
      { word: "Schildkröte", hint: "żółw" },
      { word: "Halsband", hint: "obroża" },
      { word: "Leine", hint: "smycz" },
      { word: "Futter", hint: "karma" },
      { word: "Napf", hint: "miska" },
      { word: "Tierarzt", hint: "weterynarz" }
    ]
  },

  ocean_life: {
    name: "Życie morskie",
    description: "Stworzenia oceaniczne i podwodne",
    icon: Fish,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "Fisch", hint: "ryba" },
      { word: "Wal", hint: "wieloryb" },
      { word: "Delfin", hint: "delfin" },
      { word: "Hai", hint: "rekin" },
      { word: "Tintenfisch", hint: "kałamarnica" },
      { word: "Oktopus", hint: "ośmiornica" },
      { word: "Qualle", hint: "meduza" },
      { word: "Seestern", hint: "rozgwiazda" },
      { word: "Seepferdchen", hint: "konik morski" },
      { word: "Krabbe", hint: "krab" },
      { word: "Hummer", hint: "homar" },
      { word: "Garnele", hint: "krewetka" },
      { word: "Muschel", hint: "muszla" },
      { word: "Koralle", hint: "koral" },
      { word: "Alge", hint: "wodorost" }
    ]
  },

  birds: {
    name: "Ptaki",
    description: "Różne gatunki ptaków",
    icon: Bird,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "Vogel", hint: "ptak" },
      { word: "Adler", hint: "orzeł" },
      { word: "Eule", hint: "sowa" },
      { word: "Spatz", hint: "wróbel" },
      { word: "Taube", hint: "gołąb" },
      { word: "Krähe", hint: "wrona" },
      { word: "Möwe", hint: "mewa" },
      { word: "Schwan", hint: "łabędź" },
      { word: "Ente", hint: "kaczka" },
      { word: "Gans", hint: "gęś" },
      { word: "Papagei", hint: "papuga" },
      { word: "Pfau", hint: "paw" },
      { word: "Nest", hint: "gniazdo" },
      { word: "Feder", hint: "pióro" },
      { word: "Schnabel", hint: "dziób" }
    ]
  },

  insects: {
    name: "Owady",
    description: "Insekty i małe stworzenia",
    icon: Bug,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "Schmetterling", hint: "motyl" },
      { word: "Biene", hint: "pszczoła" },
      { word: "Wespe", hint: "osa" },
      { word: "Ameise", hint: "mrówka" },
      { word: "Spinne", hint: "pająk" },
      { word: "Mücke", hint: "komar" },
      { word: "Fliege", hint: "mucha" },
      { word: "Käfer", hint: "chrząszcz" },
      { word: "Marienkäfer", hint: "biedronka" },
      { word: "Libelle", hint: "ważka" },
      { word: "Heuschrecke", hint: "konik polny" },
      { word: "Raupe", hint: "gąsienica" },
      { word: "Kokon", hint: "kokon" },
      { word: "Spinnennetz", hint: "pajęczyna" },
      { word: "Bienenstock", hint: "ul" }
    ]
  }
};

export default wordBuilderCategories_part5;