/**
 * GERMAN → ENGLISH WORD BUILDER - PART 5
 * Categories: 19-23
 * 5 categories, 15 words each = 75 words
 */

import { Fish, Bird, Bug, Music, Palette } from "lucide-react";

export const wordBuilderCategories_part5 = {
  ocean_life: {
    name: "Meeresleben",
    description: "Ozeanische und Unterwasserkreaturen",
    icon: Fish,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "fish", hint: "Fisch" },
      { word: "whale", hint: "Wal" },
      { word: "dolphin", hint: "Delfin" },
      { word: "shark", hint: "Hai" },
      { word: "squid", hint: "Tintenfisch" },
      { word: "octopus", hint: "Krake" },
      { word: "jellyfish", hint: "Qualle" },
      { word: "starfish", hint: "Seestern" },
      { word: "seahorse", hint: "Seepferdchen" },
      { word: "crab", hint: "Krabbe" },
      { word: "lobster", hint: "Hummer" },
      { word: "shrimp", hint: "Garnele" },
      { word: "shell", hint: "Muschel" },
      { word: "coral", hint: "Koralle" },
      { word: "seaweed", hint: "Alge" }
    ]
  },

  birds: {
    name: "Vögel",
    description: "Verschiedene Vogelarten",
    icon: Bird,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "bird", hint: "Vogel" },
      { word: "eagle", hint: "Adler" },
      { word: "owl", hint: "Eule" },
      { word: "sparrow", hint: "Spatz" },
      { word: "pigeon", hint: "Taube" },
      { word: "crow", hint: "Krähe" },
      { word: "seagull", hint: "Möwe" },
      { word: "swan", hint: "Schwan" },
      { word: "duck", hint: "Ente" },
      { word: "goose", hint: "Gans" },
      { word: "parrot", hint: "Papagei" },
      { word: "peacock", hint: "Pfau" },
      { word: "nest", hint: "Nest" },
      { word: "feather", hint: "Feder" },
      { word: "beak", hint: "Schnabel" }
    ]
  },

  insects: {
    name: "Insekten",
    description: "Insekten und kleine Kreaturen",
    icon: Bug,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "butterfly", hint: "Schmetterling" },
      { word: "bee", hint: "Biene" },
      { word: "wasp", hint: "Wespe" },
      { word: "ant", hint: "Ameise" },
      { word: "spider", hint: "Spinne" },
      { word: "mosquito", hint: "Mücke" },
      { word: "fly", hint: "Fliege" },
      { word: "beetle", hint: "Käfer" },
      { word: "ladybug", hint: "Marienkäfer" },
      { word: "dragonfly", hint: "Libelle" },
      { word: "grasshopper", hint: "Heuschrecke" },
      { word: "caterpillar", hint: "Raupe" },
      { word: "cocoon", hint: "Kokon" },
      { word: "web", hint: "Spinnennetz" },
      { word: "hive", hint: "Bienenstock" }
    ]
  },

  music: {
    name: "Musik",
    description: "Instrumente und Musikgenres",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "guitar", hint: "Gitarre" },
      { word: "piano", hint: "Klavier" },
      { word: "violin", hint: "Geige" },
      { word: "drums", hint: "Schlagzeug" },
      { word: "flute", hint: "Flöte" },
      { word: "trumpet", hint: "Trompete" },
      { word: "saxophone", hint: "Saxophon" },
      { word: "music", hint: "Musik" },
      { word: "song", hint: "Lied" },
      { word: "melody", hint: "Melodie" },
      { word: "rhythm", hint: "Rhythmus" },
      { word: "concert", hint: "Konzert" },
      { word: "orchestra", hint: "Orchester" },
      { word: "band", hint: "Band" },
      { word: "singer", hint: "Sänger" }
    ]
  },

  art_painting: {
    name: "Kunst und Malerei",
    description: "Künstlerische Kreativität und Farben",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "art", hint: "Kunst" },
      { word: "painting", hint: "Malerei" },
      { word: "picture", hint: "Gemälde" },
      { word: "color", hint: "Farbe" },
      { word: "brush", hint: "Pinsel" },
      { word: "canvas", hint: "Leinwand" },
      { word: "palette", hint: "Palette" },
      { word: "artist", hint: "Künstler" },
      { word: "painter", hint: "Maler" },
      { word: "gallery", hint: "Galerie" },
      { word: "museum", hint: "Museum" },
      { word: "exhibition", hint: "Ausstellung" },
      { word: "sculpture", hint: "Skulptur" },
      { word: "drawing", hint: "Zeichnung" },
      { word: "sketch", hint: "Skizze" }
    ]
  }
};

export default wordBuilderCategories_part5;