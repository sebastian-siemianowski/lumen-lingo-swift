/**
 * ENGLISH → SPANISH WORD BUILDER - PART 14
 * Categories: 76-80
 * 5 categories, 15 words each = 75 words
 */

import { Pencil, MapPin, Users2, Lightbulb, Archive } from "lucide-react";

export const wordBuilderCategories_part14 = {
  writing_tools: {
    name: "Writing & Drawing Tools",
    description: "Tools for writing and artistic creation",
    icon: Pencil,
    color: "from-indigo-500 to-purple-600",
    level: "beginner",
    words: [
      { word: "lápiz", hint: "pencil" },
      { word: "bolígrafo", hint: "pen" },
      { word: "marcador", hint: "marker" },
      { word: "rotulador", hint: "felt-tip pen" },
      { word: "pluma", hint: "fountain pen" },
      { word: "crayón", hint: "crayon" },
      { word: "pincel", hint: "paintbrush" },
      { word: "goma", hint: "eraser" },
      { word: "sacapuntas", hint: "pencil sharpener" },
      { word: "regla", hint: "ruler" },
      { word: "compás", hint: "compass" },
      { word: "escuadra", hint: "set square" },
      { word: "tinta", hint: "ink" },
      { word: "corrector", hint: "correction fluid" },
      { word: "portaminas", hint: "mechanical pencil" }
    ]
  },

  geographical_features: {
    name: "Geographical Features",
    description: "Natural landforms and geographical terms",
    icon: MapPin,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "península", hint: "peninsula" },
      { word: "continente", hint: "continent" },
      { word: "archipiélago", hint: "archipelago" },
      { word: "bahía", hint: "bay" },
      { word: "golfo", hint: "gulf" },
      { word: "estrecho", hint: "strait" },
      { word: "acantilado", hint: "cliff" },
      { word: "meseta", hint: "plateau" },
      { word: "cordillera", hint: "mountain range" },
      { word: "cañón", hint: "canyon" },
      { word: "delta", hint: "delta" },
      { word: "glaciar", hint: "glacier" },
      { word: "pantano", hint: "swamp" },
      { word: "costa", hint: "coast" },
      { word: "cabo", hint: "cape" }
    ]
  },

  social_interactions: {
    name: "Social Interactions",
    description: "Verbs for socializing and interacting",
    icon: Users2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "saludar", hint: "to greet" },
      { word: "despedirse", hint: "to say goodbye" },
      { word: "presentar", hint: "to introduce" },
      { word: "invitar", hint: "to invite" },
      { word: "visitar", hint: "to visit" },
      { word: "conversar", hint: "to converse" },
      { word: "charlar", hint: "to chat" },
      { word: "discutir", hint: "to argue" },
      { word: "debatir", hint: "to debate" },
      { word: "acordar", hint: "to agree" },
      { word: "desacordar", hint: "to disagree" },
      { word: "reunirse", hint: "to meet" },
      { word: "compartir", hint: "to share" },
      { word: "colaborar", hint: "to collaborate" },
      { word: "ayudar", hint: "to help" }
    ]
  },

  abstract_concepts: {
    name: "Abstract Concepts",
    description: "Ideas and philosophical concepts",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "libertad", hint: "freedom" },
      { word: "justicia", hint: "justice" },
      { word: "igualdad", hint: "equality" },
      { word: "verdad", hint: "truth" },
      { word: "belleza", hint: "beauty" },
      { word: "sabiduría", hint: "wisdom" },
      { word: "conocimiento", hint: "knowledge" },
      { word: "experiencia", hint: "experience" },
      { word: "existencia", hint: "existence" },
      { word: "realidad", hint: "reality" },
      { word: "ilusión", hint: "illusion" },
      { word: "destino", hint: "destiny" },
      { word: "propósito", hint: "purpose" },
      { word: "significado", hint: "meaning" },
      { word: "consciencia", hint: "consciousness" }
    ]
  },

  storage_containers: {
    name: "Storage Containers",
    description: "Containers for storing items",
    icon: Archive,
    color: "from-slate-500 to-gray-600",
    level: "beginner",
    words: [
      { word: "cajón", hint: "drawer" },
      { word: "estante", hint: "shelf" },
      { word: "armario", hint: "cabinet" },
      { word: "baúl", hint: "trunk" },
      { word: "cofre", hint: "chest" },
      { word: "maleta", hint: "suitcase" },
      { word: "mochila", hint: "backpack" },
      { word: "bolso", hint: "handbag" },
      { word: "cartera", hint: "wallet" },
      { word: "estuche", hint: "case" },
      { word: "cesta", hint: "basket" },
      { word: "canasta", hint: "large basket" },
      { word: "contenedor", hint: "container" },
      { word: "tarro", hint: "jar" },
      { word: "recipiente", hint: "receptacle" }
    ]
  }
};

export default wordBuilderCategories_part14;