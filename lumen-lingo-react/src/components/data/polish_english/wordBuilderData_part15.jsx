/**
 * POLISH → ENGLISH WORD BUILDER - PART 15
 * Categories: 71-75
 * 5 categories, 15 words each = 75 words
 */

import { Drama, Palette, Brush, Image, Frame } from "lucide-react";

export const wordBuilderCategories_part15 = {
  theater_performing: {
    name: "Teatr i występy",
    description: "Sztuka sceniczna i przedstawienia",
    icon: Drama,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "stage", hint: "scena" },
      { word: "curtain", hint: "kurtyna" },
      { word: "actor", hint: "aktor" },
      { word: "actress", hint: "aktorka" },
      { word: "playwright", hint: "dramaturg" },
      { word: "rehearsal", hint: "próba" },
      { word: "performance", hint: "występ" },
      { word: "audience", hint: "publiczność" },
      { word: "applause", hint: "oklaski" },
      { word: "monologue", hint: "monolog" },
      { word: "dialogue", hint: "dialog" },
      { word: "costume", hint: "kostium" },
      { word: "makeup", hint: "charakteryzacja" },
      { word: "props", hint: "rekwizyty" },
      { word: "backdrop", hint: "tło sceniczne" }
    ]
  },

  art_painting: {
    name: "Malarstwo",
    description: "Techniki i narzędzia malarskie",
    icon: Palette,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "canvas", hint: "płótno" },
      { word: "easel", hint: "sztaluga" },
      { word: "palette", hint: "paleta" },
      { word: "brush", hint: "pędzel" },
      { word: "stroke", hint: "pociągnięcie" },
      { word: "oil paint", hint: "farba olejna" },
      { word: "watercolor", hint: "akwarela" },
      { word: "acrylic", hint: "akryl" },
      { word: "sketch", hint: "szkic" },
      { word: "portrait", hint: "portret" },
      { word: "landscape", hint: "pejzaż" },
      { word: "still life", hint: "martwa natura" },
      { word: "abstract", hint: "abstrakcja" },
      { word: "impressionism", hint: "impresjonizm" },
      { word: "masterpiece", hint: "arcydzieło" }
    ]
  },

  drawing_sketching: {
    name: "Rysowanie i szkicowanie",
    description: "Narzędzia i techniki rysunkowe",
    icon: Brush,
    color: "from-slate-500 to-gray-600",
    level: "beginner",
    words: [
      { word: "pencil", hint: "ołówek" },
      { word: "charcoal", hint: "węgiel" },
      { word: "crayon", hint: "kredka" },
      { word: "marker", hint: "marker" },
      { word: "pastel", hint: "pastel" },
      { word: "ink", hint: "tusz" },
      { word: "sketch", hint: "szkic" },
      { word: "outline", hint: "kontur" },
      { word: "shading", hint: "cieniowanie" },
      { word: "perspective", hint: "perspektywa" },
      { word: "proportion", hint: "proporcja" },
      { word: "composition", hint: "kompozycja" },
      { word: "texture", hint: "tekstura" },
      { word: "crosshatch", hint: "kreskowanie" },
      { word: "smudge", hint: "rozcieranie" }
    ]
  },

  photography: {
    name: "Fotografia",
    description: "Aparat i techniki fotograficzne",
    icon: Image,
    color: "from-blue-500 to-indigo-600",
    level: "intermediate",
    words: [
      { word: "camera", hint: "aparat" },
      { word: "lens", hint: "obiektyw" },
      { word: "focus", hint: "ostrość" },
      { word: "exposure", hint: "ekspozycja" },
      { word: "shutter", hint: "migawka" },
      { word: "aperture", hint: "przysłona" },
      { word: "zoom", hint: "powiększenie" },
      { word: "flash", hint: "lampa błyskowa" },
      { word: "tripod", hint: "statyw" },
      { word: "negative", hint: "negatyw" },
      { word: "darkroom", hint: "ciemnia" },
      { word: "filter", hint: "filtr" },
      { word: "snapshot", hint: "migawka" },
      { word: "panorama", hint: "panorama" },
      { word: "selfie", hint: "selfie" }
    ]
  },

  art_gallery: {
    name: "Galeria sztuki",
    description: "Muzea i wystawy artystyczne",
    icon: Frame,
    color: "from-amber-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "gallery", hint: "galeria" },
      { word: "museum", hint: "muzeum" },
      { word: "exhibition", hint: "wystawa" },
      { word: "curator", hint: "kurator" },
      { word: "collection", hint: "kolekcja" },
      { word: "sculpture", hint: "rzeźba" },
      { word: "installation", hint: "instalacja" },
      { word: "artifact", hint: "artefakt" },
      { word: "restoration", hint: "restauracja" },
      { word: "archive", hint: "archiwum" },
      { word: "catalog", hint: "katalog" },
      { word: "auction", hint: "aukcja" },
      { word: "appraisal", hint: "wycena" },
      { word: "provenance", hint: "proweniencja" },
      { word: "patron", hint: "patron" }
    ]
  }
};

export default wordBuilderCategories_part15;