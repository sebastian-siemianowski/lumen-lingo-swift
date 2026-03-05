/**
 * SPANISH → ENGLISH WORD BUILDER - PART 6
 * Categories: 23-26
 * 4 categories, 15 words each = 60 words
 */

import { Dog, Fish, Bird, Bug } from "lucide-react";

export const wordBuilderCategories_part6 = {
  pets: {
    name: "Mascotas",
    description: "Animales domésticos y su cuidado",
    icon: Dog,
    color: "from-amber-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "dog", hint: "perro" },
      { word: "cat", hint: "gato" },
      { word: "puppy", hint: "cachorro" },
      { word: "kitten", hint: "gatito" },
      { word: "hamster", hint: "hámster" },
      { word: "guinea pig", hint: "cobaya" },
      { word: "rabbit", hint: "conejo" },
      { word: "bird", hint: "pájaro" },
      { word: "fish", hint: "pez" },
      { word: "turtle", hint: "tortuga" },
      { word: "collar", hint: "collar" },
      { word: "leash", hint: "correa" },
      { word: "food", hint: "comida" },
      { word: "bowl", hint: "tazón" },
      { word: "veterinarian", hint: "veterinario" }
    ]
  },

  ocean_life: {
    name: "Vida marina",
    description: "Criaturas oceánicas y submarinas",
    icon: Fish,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "fish", hint: "pez" },
      { word: "whale", hint: "ballena" },
      { word: "dolphin", hint: "delfín" },
      { word: "shark", hint: "tiburón" },
      { word: "squid", hint: "calamar" },
      { word: "octopus", hint: "pulpo" },
      { word: "jellyfish", hint: "medusa" },
      { word: "starfish", hint: "estrella de mar" },
      { word: "seahorse", hint: "caballito de mar" },
      { word: "crab", hint: "cangrejo" },
      { word: "lobster", hint: "langosta" },
      { word: "shrimp", hint: "camarón" },
      { word: "shell", hint: "concha" },
      { word: "coral", hint: "coral" },
      { word: "seaweed", hint: "alga" }
    ]
  },

  birds: {
    name: "Aves",
    description: "Diferentes especies de pájaros",
    icon: Bird,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "bird", hint: "ave" },
      { word: "eagle", hint: "águila" },
      { word: "owl", hint: "búho" },
      { word: "sparrow", hint: "gorrión" },
      { word: "pigeon", hint: "paloma" },
      { word: "crow", hint: "cuervo" },
      { word: "seagull", hint: "gaviota" },
      { word: "swan", hint: "cisne" },
      { word: "duck", hint: "pato" },
      { word: "goose", hint: "ganso" },
      { word: "parrot", hint: "loro" },
      { word: "peacock", hint: "pavo real" },
      { word: "nest", hint: "nido" },
      { word: "feather", hint: "pluma" },
      { word: "beak", hint: "pico" }
    ]
  },

  insects: {
    name: "Insectos",
    description: "Insectos y pequeñas criaturas",
    icon: Bug,
    color: "from-lime-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "butterfly", hint: "mariposa" },
      { word: "bee", hint: "abeja" },
      { word: "wasp", hint: "avispa" },
      { word: "ant", hint: "hormiga" },
      { word: "spider", hint: "araña" },
      { word: "mosquito", hint: "mosquito" },
      { word: "fly", hint: "mosca" },
      { word: "beetle", hint: "escarabajo" },
      { word: "ladybug", hint: "mariquita" },
      { word: "dragonfly", hint: "libélula" },
      { word: "grasshopper", hint: "saltamontes" },
      { word: "caterpillar", hint: "oruga" },
      { word: "cocoon", hint: "capullo" },
      { word: "web", hint: "telaraña" },
      { word: "hive", hint: "colmena" }
    ]
  }
};

export default wordBuilderCategories_part6;