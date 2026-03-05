/**
 * GERMAN → SPANISH WORD BUILDER - PART 21
 * Categories: 90-93
 * 4 categories, 15 words each = 60 words
 */

import { PartyPopper, Gift, Cake, Music } from "lucide-react";

export const wordBuilderCategories_part21 = {
  party: {
    name: "Party",
    description: "Feiern und gesellige Zusammenkünfte",
    icon: PartyPopper,
    color: "from-purple-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "fiesta", hint: "Party" },
      { word: "invitados", hint: "Gäste" },
      { word: "música", hint: "Musik" },
      { word: "baile", hint: "Tanz" },
      { word: "bebida", hint: "Getränk" },
      { word: "comida", hint: "Essen" },
      { word: "aperitivo", hint: "Snack" },
      { word: "ambiente", hint: "Atmosphäre" },
      { word: "diversión", hint: "Spaß" },
      { word: "entretenimiento", hint: "Unterhaltung" },
      { word: "DJ", hint: "DJ" },
      { word: "anfitrión", hint: "Gastgeber" },
      { word: "confeti", hint: "Konfetti" },
      { word: "globos", hint: "Luftballons" },
      { word: "serpentina", hint: "Luftschlangen" }
    ]
  },

  gifts: {
    name: "Geschenke",
    description: "Präsente und Gaben",
    icon: Gift,
    color: "from-red-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "regalo", hint: "Geschenk" },
      { word: "presente", hint: "Präsent" },
      { word: "obsequio", hint: "Gabe" },
      { word: "paquete", hint: "Paket" },
      { word: "envoltorio", hint: "Verpackung" },
      { word: "papel de regalo", hint: "Geschenkpapier" },
      { word: "lazo", hint: "Schleife" },
      { word: "cinta", hint: "Band" },
      { word: "tarjeta", hint: "Karte" },
      { word: "dedicatoria", hint: "Widmung" },
      { word: "sorpresa", hint: "Überraschung" },
      { word: "detalle", hint: "Aufmerksamkeit" },
      { word: "generosidad", hint: "Großzügigkeit" },
      { word: "agradecer", hint: "danken" },
      { word: "apreciar", hint: "schätzen" }
    ]
  },

  desserts_sweets: {
    name: "Desserts und Süßes",
    description: "Nachspeisen und süße Leckereien",
    icon: Cake,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "pastel", hint: "Kuchen" },
      { word: "tarta", hint: "Torte" },
      { word: "galleta", hint: "Keks" },
      { word: "dulce", hint: "Süßigkeit" },
      { word: "caramelo", hint: "Bonbon" },
      { word: "chocolate", hint: "Schokolade" },
      { word: "helado", hint: "Eis" },
      { word: "flan", hint: "Pudding" },
      { word: "mousse", hint: "Mousse" },
      { word: "merengue", hint: "Baiser" },
      { word: "glaseado", hint: "Glasur" },
      { word: "crema", hint: "Creme" },
      { word: "relleno", hint: "Füllung" },
      { word: "cobertura", hint: "Überzug" },
      { word: "decoración", hint: "Dekoration" }
    ]
  },

  live_music: {
    name: "Live-Musik",
    description: "Konzerte und musikalische Darbietungen",
    icon: Music,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "concierto", hint: "Konzert" },
      { word: "recital", hint: "Rezital" },
      { word: "actuación", hint: "Auftritt" },
      { word: "espectáculo", hint: "Show" },
      { word: "escenario", hint: "Bühne" },
      { word: "público", hint: "Publikum" },
      { word: "audiencia", hint: "Zuschauer" },
      { word: "artista", hint: "Künstler" },
      { word: "cantante", hint: "Sänger" },
      { word: "músico", hint: "Musiker" },
      { word: "banda", hint: "Band" },
      { word: "orquesta", hint: "Orchester" },
      { word: "entrada", hint: "Eintrittskarte" },
      { word: "aplausos", hint: "Applaus" },
      { word: "bis", hint: "Zugabe" }
    ]
  }
};

export default wordBuilderCategories_part21;