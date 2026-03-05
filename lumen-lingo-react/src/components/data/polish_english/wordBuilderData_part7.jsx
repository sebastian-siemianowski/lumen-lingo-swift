/**
 * POLISH → ENGLISH WORD BUILDER - PART 7
 * Categories: 39-42
 * 4 categories, 15 words each = 60 words
 */

import { Sun, Sprout, Dog, Bird } from "lucide-react";

export const wordBuilderCategories_part7 = {
  summer_activities: {
    name: "Letnie aktywności",
    description: "Zajęcia i rozrywka latem",
    icon: Sun,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "swimming", hint: "pływanie" },
      { word: "sunbathing", hint: "opalanie się" },
      { word: "beach", hint: "plaża" },
      { word: "surfing", hint: "surfing" },
      { word: "diving", hint: "nurkowanie" },
      { word: "snorkeling", hint: "snorkeling" },
      { word: "sailing", hint: "żeglarstwo" },
      { word: "volleyball", hint: "siatkówka" },
      { word: "frisbee", hint: "frisbee" },
      { word: "sandcastle", hint: "zamek z piasku" },
      { word: "sunscreen", hint: "krem przeciwsłoneczny" },
      { word: "towel", hint: "ręcznik" },
      { word: "umbrella", hint: "parasol" },
      { word: "cooler", hint: "lodówka turystyczna" },
      { word: "flip-flops", hint: "japonki" }
    ]
  },

  gardening: {
    name: "Ogrodnictwo",
    description: "Praca w ogrodzie i rośliny",
    icon: Sprout,
    color: "from-green-500 to-lime-600",
    level: "intermediate",
    words: [
      { word: "seed", hint: "nasiono" },
      { word: "soil", hint: "gleba" },
      { word: "fertilizer", hint: "nawóz" },
      { word: "watering", hint: "podlewanie" },
      { word: "pruning", hint: "przycinanie" },
      { word: "weeding", hint: "pielenie" },
      { word: "shovel", hint: "szpadel" },
      { word: "rake", hint: "grabie" },
      { word: "hoe", hint: "motyka" },
      { word: "trowel", hint: "łopatka" },
      { word: "pot", hint: "doniczka" },
      { word: "greenhouse", hint: "szklarnia" },
      { word: "compost", hint: "kompost" },
      { word: "harvest", hint: "zbiory" },
      { word: "lawn", hint: "trawnik" }
    ]
  },

  pets_animals: {
    name: "Zwierzęta domowe",
    description: "Opieka nad pupilami",
    icon: Dog,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "puppy", hint: "szczeniak" },
      { word: "kitten", hint: "kociak" },
      { word: "collar", hint: "obroża" },
      { word: "leash", hint: "smycz" },
      { word: "cage", hint: "klatka" },
      { word: "bowl", hint: "miska" },
      { word: "treat", hint: "smakołyk" },
      { word: "toy", hint: "zabawka" },
      { word: "grooming", hint: "pielęgnacja" },
      { word: "veterinarian", hint: "weterynarz" },
      { word: "vaccination", hint: "szczepienie" },
      { word: "adoption", hint: "adopcja" },
      { word: "shelter", hint: "schronisko" },
      { word: "breed", hint: "rasa" },
      { word: "training", hint: "szkolenie" }
    ]
  },

  birds: {
    name: "Ptaki",
    description: "Rodzaje ptaków i ich cechy",
    icon: Bird,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "eagle", hint: "orzeł" },
      { word: "hawk", hint: "jastrząb" },
      { word: "owl", hint: "sowa" },
      { word: "sparrow", hint: "wróbel" },
      { word: "pigeon", hint: "gołąb" },
      { word: "crow", hint: "wrona" },
      { word: "seagull", hint: "mewa" },
      { word: "swan", hint: "łabędź" },
      { word: "duck", hint: "kaczka" },
      { word: "goose", hint: "gęś" },
      { word: "parrot", hint: "papuga" },
      { word: "peacock", hint: "paw" },
      { word: "nest", hint: "gniazdo" },
      { word: "feather", hint: "pióro" },
      { word: "beak", hint: "dziób" }
    ]
  }
};

export default wordBuilderCategories_part7;