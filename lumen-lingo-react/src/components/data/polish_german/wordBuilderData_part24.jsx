/**
 * POLISH → GERMAN WORD BUILDER - PART 24
 * Categories: 96-99
 * 4 categories, 15 words each = 60 words
 */

import { Waves, Ship, Fish, Umbrella } from "lucide-react";

export const wordBuilderCategories_part24 = {
  beach_ocean: {
    name: "Plaża i ocean",
    description: "Morze i życie nad wodą",
    icon: Waves,
    color: "from-cyan-500 to-blue-600",
    level: "beginner",
    words: [
      { word: "Strand", hint: "plaża" },
      { word: "Meer", hint: "morze" },
      { word: "Ozean", hint: "ocean" },
      { word: "Welle", hint: "fala" },
      { word: "Ebbe", hint: "odpływ" },
      { word: "Flut", hint: "przypływ" },
      { word: "Sand", hint: "piasek" },
      { word: "Muschel", hint: "muszla" },
      { word: "Seestern", hint: "rozgwiazda" },
      { word: "Qualle", hint: "meduza" },
      { word: "Algen", hint: "wodorosty" },
      { word: "Koralle", hint: "koral" },
      { word: "Riff", hint: "rafa" },
      { word: "Klippe", hint: "klif" },
      { word: "Bucht", hint: "zatoka" }
    ]
  },

  water_sports: {
    name: "Sporty wodne",
    description: "Aktywności na wodzie",
    icon: Ship,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "Schwimmen", hint: "pływanie" },
      { word: "Tauchen", hint: "nurkowanie" },
      { word: "Schnorcheln", hint: "nurkowanie z rurką" },
      { word: "Segeln", hint: "żeglowanie" },
      { word: "Surfen", hint: "surfing" },
      { word: "Windsurfen", hint: "windsurfing" },
      { word: "Kitesurfen", hint: "kitesurfing" },
      { word: "Wasserski", hint: "narty wodne" },
      { word: "Kajakfahren", hint: "kajakarstwo" },
      { word: "Rudern", hint: "wiosłowanie" },
      { word: "Angeln", hint: "wędkarstwo" },
      { word: "Paddeln", hint: "pływanie kajakiem" },
      { word: "Jetski", hint: "skuter wodny" },
      { word: "Wakeboard", hint: "wakeboard" },
      { word: "Rettungsschwimmen", hint: "ratownictwo wodne" }
    ]
  },

  fishing: {
    name: "Wędkarstwo",
    description: "Łowienie ryb i sprzęt",
    icon: Fish,
    color: "from-teal-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "Angel", hint: "wędka" },
      { word: "Angelrute", hint: "wędka" },
      { word: "Haken", hint: "haczyk" },
      { word: "Köder", hint: "przynęta" },
      { word: "Wurm", hint: "robak" },
      { word: "Netz", hint: "siatka" },
      { word: "Kescher", hint: "podbierak" },
      { word: "Eimer", hint: "wiadro" },
      { word: "Schnur", hint: "żyłka" },
      { word: "Rolle", hint: "kołowrotek" },
      { word: "Schwimmer", hint: "spławik" },
      { word: "Gewicht", hint: "ciężarek" },
      { word: "Fang", hint: "połów" },
      { word: "Angelschein", hint: "karta wędkarska" },
      { word: "Fischer", hint: "rybak" }
    ]
  },

  beach_equipment: {
    name: "Sprzęt plażowy",
    description: "Akcesoria na plażę",
    icon: Umbrella,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "Sonnenschirm", hint: "parasol plażowy" },
      { word: "Liegestuhl", hint: "leżak" },
      { word: "Strandtuch", hint: "ręcznik plażowy" },
      { word: "Badeanzug", hint: "kostium kąpielowy" },
      { word: "Bikini", hint: "bikini" },
      { word: "Badehose", hint: "kąpielówki" },
      { word: "Sonnencreme", hint: "krem przeciwsłoneczny" },
      { word: "Sonnenbrille", hint: "okulary przeciwsłoneczne" },
      { word: "Strandtasche", hint: "torba plażowa" },
      { word: "Kühlbox", hint: "lodówka turystyczna" },
      { word: "Wasserball", hint: "piłka plażowa" },
      { word: "Schwimmring", hint: "koło do pływania" },
      { word: "Luftmatratze", hint: "materac dmuchany" },
      { word: "Schnorchel", hint: "fajka do nurkowania" },
      { word: "Taucherbrille", hint: "gogle do nurkowania" }
    ]
  }
};

export default wordBuilderCategories_part24;