
/**
 * ENGLISH → SPANISH WORD BUILDER - PART 5
 * Categories: 31-35
 * 5 categories, 15 words each = 75 words
 */

import { Heart, Mountain, Palette, Music, Utensils } from "lucide-react";

export const wordBuilderCategories_part5 = {
  emotions_feelings: {
    name: "Emotions & Feelings",
    description: "Express feelings and emotions in Spanish",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "feliz", hint: "happy" },
      { word: "triste", hint: "sad" },
      { word: "enojado", hint: "angry" },
      { word: "nervioso", hint: "nervous" },
      { word: "emocionado", hint: "excited" },
      { word: "cansado", hint: "tired" },
      { word: "aburrido", hint: "bored" },
      { word: "sorprendido", hint: "surprised" },
      { word: "asustado", hint: "scared" },
      { word: "orgulloso", hint: "proud" },
      { word: "preocupado", hint: "worried" },
      { word: "confundido", hint: "confused" },
      { word: "tranquilo", hint: "calm" },
      { word: "frustrado", hint: "frustrated" },
      { word: "agradecido", hint: "grateful" }
    ]
  },

  nature_landscape: {
    name: "Nature & Landscapes",
    description: "Describe natural landscapes and outdoor scenery",
    icon: Mountain,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "montaña", hint: "mountain" },
      { word: "bosque", hint: "forest" },
      { word: "río", hint: "river" },
      { word: "lago", hint: "lake" },
      { word: "océano", hint: "ocean" },
      { word: "playa", hint: "beach" },
      { word: "desierto", hint: "desert" },
      { word: "valle", hint: "valley" },
      { word: "colina", hint: "hill" },
      { word: "cascada", hint: "waterfall" },
      { word: "isla", hint: "island" },
      { word: "volcán", hint: "volcano" },
      { word: "cueva", hint: "cave" },
      { word: "selva", hint: "jungle" },
      { word: "pradera", hint: "meadow" }
    ]
  },

  art_creativity: {
    name: "Art & Creativity",
    description: "Artistic vocabulary for creative expression",
    icon: Palette,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "pintura", hint: "painting" },
      { word: "dibujo", hint: "drawing" },
      { word: "escultura", hint: "sculpture" },
      { word: "lienzo", hint: "canvas" },
      { word: "pincel", hint: "paintbrush" },
      { word: "color", hint: "color" },
      { word: "artista", hint: "artist" },
      { word: "galería", hint: "gallery" },
      { word: "museo", hint: "museum" },
      { word: "obra", hint: "artwork" },
      { word: "retrato", hint: "portrait" },
      { word: "paisaje", hint: "landscape (art)" },
      { word: "abstracto", hint: "abstract" },
      { word: "realista", hint: "realistic" },
      { word: "exposición", hint: "exhibition" }
    ]
  },

  music_instruments: {
    name: "Music & Instruments",
    description: "Musical instruments and music terminology",
    icon: Music,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "guitarra", hint: "guitar" },
      { word: "piano", hint: "piano" },
      { word: "violín", hint: "violin" },
      { word: "batería", hint: "drums" },
      { word: "flauta", hint: "flute" },
      { word: "trompeta", hint: "trumpet" },
      { word: "saxofón", hint: "saxophone" },
      { word: "canción", hint: "song" },
      { word: "melodía", hint: "melody" },
      { word: "ritmo", hint: "rhythm" },
      { word: "concierto", hint: "concert" },
      { word: "orquesta", hint: "orchestra" },
      { word: "compositor", hint: "composer" },
      { word: "cantante", hint: "singer" },
      { word: "partitura", hint: "sheet music" }
    ]
  },

  cooking_verbs: {
    name: "Cooking Verbs",
    description: "Essential verbs for cooking actions",
    icon: Utensils,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "cocinar", hint: "to cook" },
      { word: "hervir", hint: "to boil" },
      { word: "freír", hint: "to fry" },
      { word: "hornear", hint: "to bake" },
      { word: "asar", hint: "to roast/grill" },
      { word: "cortar", hint: "to cut" },
      { word: "picar", hint: "to chop" },
      { word: "mezclar", hint: "to mix" },
      { word: "batir", hint: "to beat/whisk" },
      { word: "pelar", hint: "to peel" },
      { word: "rallar", hint: "to grate" },
      { word: "derretir", hint: "to melt" },
      { word: "calentar", hint: "to heat" },
      { word: "probar", hint: "to taste" },
      { word: "servir", hint: "to serve" }
    ]
  }
};

export default wordBuilderCategories_part5;
