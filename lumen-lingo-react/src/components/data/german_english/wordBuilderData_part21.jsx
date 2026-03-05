/**
 * GERMAN → ENGLISH WORD BUILDER - PART 21
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
      { word: "party", hint: "Party" },
      { word: "guests", hint: "Gäste" },
      { word: "music", hint: "Musik" },
      { word: "dance", hint: "Tanz" },
      { word: "drink", hint: "Getränk" },
      { word: "food", hint: "Essen" },
      { word: "snack", hint: "Snack" },
      { word: "atmosphere", hint: "Atmosphäre" },
      { word: "fun", hint: "Spaß" },
      { word: "entertainment", hint: "Unterhaltung" },
      { word: "DJ", hint: "DJ" },
      { word: "host", hint: "Gastgeber" },
      { word: "confetti", hint: "Konfetti" },
      { word: "balloons", hint: "Luftballons" },
      { word: "streamers", hint: "Luftschlangen" }
    ]
  },

  gifts: {
    name: "Geschenke",
    description: "Präsente und Gaben",
    icon: Gift,
    color: "from-red-500 to-pink-600",
    level: "beginner",
    words: [
      { word: "gift", hint: "Geschenk" },
      { word: "present", hint: "Präsent" },
      { word: "offering", hint: "Gabe" },
      { word: "package", hint: "Paket" },
      { word: "wrapping", hint: "Verpackung" },
      { word: "gift wrap", hint: "Geschenkpapier" },
      { word: "bow", hint: "Schleife" },
      { word: "ribbon", hint: "Band" },
      { word: "card", hint: "Karte" },
      { word: "dedication", hint: "Widmung" },
      { word: "surprise", hint: "Überraschung" },
      { word: "gesture", hint: "Aufmerksamkeit" },
      { word: "generosity", hint: "Großzügigkeit" },
      { word: "thank", hint: "danken" },
      { word: "appreciate", hint: "schätzen" }
    ]
  },

  desserts_sweets: {
    name: "Desserts und Süßes",
    description: "Nachspeisen und süße Leckereien",
    icon: Cake,
    color: "from-yellow-500 to-orange-600",
    level: "beginner",
    words: [
      { word: "cake", hint: "Kuchen" },
      { word: "pie", hint: "Torte" },
      { word: "cookie", hint: "Keks" },
      { word: "candy", hint: "Süßigkeit" },
      { word: "sweet", hint: "Bonbon" },
      { word: "chocolate", hint: "Schokolade" },
      { word: "ice cream", hint: "Eis" },
      { word: "pudding", hint: "Pudding" },
      { word: "mousse", hint: "Mousse" },
      { word: "meringue", hint: "Baiser" },
      { word: "icing", hint: "Glasur" },
      { word: "cream", hint: "Creme" },
      { word: "filling", hint: "Füllung" },
      { word: "topping", hint: "Überzug" },
      { word: "decoration", hint: "Dekoration" }
    ]
  },

  live_music: {
    name: "Live-Musik",
    description: "Konzerte und musikalische Darbietungen",
    icon: Music,
    color: "from-indigo-500 to-purple-600",
    level: "intermediate",
    words: [
      { word: "concert", hint: "Konzert" },
      { word: "recital", hint: "Rezital" },
      { word: "performance", hint: "Auftritt" },
      { word: "show", hint: "Show" },
      { word: "stage", hint: "Bühne" },
      { word: "audience", hint: "Publikum" },
      { word: "spectators", hint: "Zuschauer" },
      { word: "artist", hint: "Künstler" },
      { word: "singer", hint: "Sänger" },
      { word: "musician", hint: "Musiker" },
      { word: "band", hint: "Band" },
      { word: "orchestra", hint: "Orchester" },
      { word: "ticket", hint: "Eintrittskarte" },
      { word: "applause", hint: "Applaus" },
      { word: "encore", hint: "Zugabe" }
    ]
  }
};

export default wordBuilderCategories_part21;