/**
 * GERMAN → SPANISH WORD BUILDER - PART 5
 * Categories: 19-22
 * 4 categories, 15 words each = 60 words
 */

import { Fish, Bird, Bug, Music } from "lucide-react";

export const wordBuilderCategories_part5 = {
  ocean_life: {
    name: "Meeresleben",
    description: "Ozeanische und Unterwasserkreaturen",
    icon: Fish,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "pez", hint: "Fisch" },
      { word: "ballena", hint: "Wal" },
      { word: "delfín", hint: "Delfin" },
      { word: "tiburón", hint: "Hai" },
      { word: "calamar", hint: "Tintenfisch" },
      { word: "pulpo", hint: "Krake" },
      { word: "medusa", hint: "Qualle" },
      { word: "estrella de mar", hint: "Seestern" },
      { word: "caballito de mar", hint: "Seepferdchen" },
      { word: "cangrejo", hint: "Krabbe" },
      { word: "langosta", hint: "Hummer" },
      { word: "camarón", hint: "Garnele" },
      { word: "concha", hint: "Muschel" },
      { word: "coral", hint: "Koralle" },
      { word: "alga", hint: "Alge" }
    ]
  },

  birds: {
    name: "Vögel",
    description: "Verschiedene Vogelarten",
    icon: Bird,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "ave", hint: "Vogel" },
      { word: "águila", hint: "Adler" },
      { word: "búho", hint: "Eule" },
      { word: "gorrión", hint: "Spatz" },
      { word: "paloma", hint: "Taube" },
      { word: "cuervo", hint: "Krähe" },
      { word: "gaviota", hint: "Möwe" },
      { word: "cisne", hint: "Schwan" },
      { word: "pato", hint: "Ente" },
      { word: "ganso", hint: "Gans" },
      { word: "loro", hint: "Papagei" },
      { word: "pavo real", hint: "Pfau" },
      { word: "nido", hint: "Nest" },
      { word: "pluma", hint: "Feder" },
      { word: "pico", hint: "Schnabel" }
    ]
  },

  insects: {
    name: "Insekten",
    description: "Insekten und kleine Kreaturen",
    icon: Bug,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "mariposa", hint: "Schmetterling" },
      { word: "abeja", hint: "Biene" },
      { word: "avispa", hint: "Wespe" },
      { word: "hormiga", hint: "Ameise" },
      { word: "araña", hint: "Spinne" },
      { word: "mosquito", hint: "Mücke" },
      { word: "mosca", hint: "Fliege" },
      { word: "escarabajo", hint: "Käfer" },
      { word: "mariquita", hint: "Marienkäfer" },
      { word: "libélula", hint: "Libelle" },
      { word: "saltamontes", hint: "Heuschrecke" },
      { word: "oruga", hint: "Raupe" },
      { word: "capullo", hint: "Kokon" },
      { word: "telaraña", hint: "Spinnennetz" },
      { word: "colmena", hint: "Bienenstock" }
    ]
  },

  music: {
    name: "Musik",
    description: "Instrumente und Musikgenres",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "guitarra", hint: "Gitarre" },
      { word: "piano", hint: "Klavier" },
      { word: "violín", hint: "Geige" },
      { word: "batería", hint: "Schlagzeug" },
      { word: "flauta", hint: "Flöte" },
      { word: "trompeta", hint: "Trompete" },
      { word: "saxofón", hint: "Saxophon" },
      { word: "música", hint: "Musik" },
      { word: "canción", hint: "Lied" },
      { word: "melodía", hint: "Melodie" },
      { word: "ritmo", hint: "Rhythmus" },
      { word: "concierto", hint: "Konzert" },
      { word: "orquesta", hint: "Orchester" },
      { word: "banda", hint: "Band" },
      { word: "cantante", hint: "Sänger" }
    ]
  }
};

export default wordBuilderCategories_part5;