/**
 * SPANISH → ENGLISH WORD BUILDER - PART 7
 * Categories: 27-31
 * 5 categories, 15 words each = 75 words
 */

import { Music, Palette, Camera, Book, Laptop } from "lucide-react";

export const wordBuilderCategories_part7 = {
  music: {
    name: "Música",
    description: "Instrumentos y géneros musicales",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "guitar", hint: "guitarra" },
      { word: "piano", hint: "piano" },
      { word: "violin", hint: "violín" },
      { word: "drums", hint: "batería" },
      { word: "flute", hint: "flauta" },
      { word: "trumpet", hint: "trompeta" },
      { word: "saxophone", hint: "saxofón" },
      { word: "music", hint: "música" },
      { word: "song", hint: "canción" },
      { word: "melody", hint: "melodía" },
      { word: "rhythm", hint: "ritmo" },
      { word: "concert", hint: "concierto" },
      { word: "orchestra", hint: "orquesta" },
      { word: "band", hint: "banda" },
      { word: "singer", hint: "cantante" }
    ]
  },

  art_painting: {
    name: "Arte y pintura",
    description: "Creatividad artística y colores",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "art", hint: "arte" },
      { word: "painting", hint: "pintura" },
      { word: "picture", hint: "cuadro" },
      { word: "color", hint: "color" },
      { word: "brush", hint: "pincel" },
      { word: "canvas", hint: "lienzo" },
      { word: "palette", hint: "paleta" },
      { word: "artist", hint: "artista" },
      { word: "painter", hint: "pintor" },
      { word: "gallery", hint: "galería" },
      { word: "museum", hint: "museo" },
      { word: "exhibition", hint: "exposición" },
      { word: "sculpture", hint: "escultura" },
      { word: "drawing", hint: "dibujo" },
      { word: "sketch", hint: "boceto" }
    ]
  },

  photography: {
    name: "Fotografía",
    description: "Cámaras y tomar fotos",
    icon: Camera,
    color: "from-slate-500 to-gray-600",
    level: "intermediate",
    words: [
      { word: "camera", hint: "cámara" },
      { word: "photo", hint: "foto" },
      { word: "picture", hint: "imagen" },
      { word: "lens", hint: "lente" },
      { word: "focus", hint: "enfoque" },
      { word: "flash", hint: "flash" },
      { word: "tripod", hint: "trípode" },
      { word: "photographer", hint: "fotógrafo" },
      { word: "portrait", hint: "retrato" },
      { word: "landscape", hint: "paisaje" },
      { word: "exposure", hint: "exposición" },
      { word: "shutter", hint: "obturador" },
      { word: "album", hint: "álbum" },
      { word: "filter", hint: "filtro" },
      { word: "selfie", hint: "selfie" }
    ]
  },

  literature: {
    name: "Literatura",
    description: "Libros y escritura",
    icon: Book,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "book", hint: "libro" },
      { word: "novel", hint: "novela" },
      { word: "poem", hint: "poema" },
      { word: "story", hint: "cuento" },
      { word: "author", hint: "autor" },
      { word: "writer", hint: "escritor" },
      { word: "poet", hint: "poeta" },
      { word: "chapter", hint: "capítulo" },
      { word: "page", hint: "página" },
      { word: "library", hint: "biblioteca" },
      { word: "publisher", hint: "editorial" },
      { word: "bestseller", hint: "best seller" },
      { word: "plot", hint: "trama" },
      { word: "character", hint: "personaje" },
      { word: "narrative", hint: "narrativa" }
    ]
  },

  computers: {
    name: "Computadoras",
    description: "Tecnología y equipo informático",
    icon: Laptop,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "computer", hint: "computadora" },
      { word: "laptop", hint: "portátil" },
      { word: "keyboard", hint: "teclado" },
      { word: "mouse", hint: "ratón" },
      { word: "screen", hint: "pantalla" },
      { word: "monitor", hint: "monitor" },
      { word: "printer", hint: "impresora" },
      { word: "software", hint: "software" },
      { word: "hardware", hint: "hardware" },
      { word: "processor", hint: "procesador" },
      { word: "memory", hint: "memoria" },
      { word: "hard drive", hint: "disco duro" },
      { word: "file", hint: "archivo" },
      { word: "folder", hint: "carpeta" },
      { word: "program", hint: "programa" }
    ]
  }
};

export default wordBuilderCategories_part7;