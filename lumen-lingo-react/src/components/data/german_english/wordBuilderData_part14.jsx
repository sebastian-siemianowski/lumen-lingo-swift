/**
 * GERMAN → ENGLISH WORD BUILDER - PART 14
 * Categories: 59-62
 * 4 categories, 15 words each = 60 words
 */

import { Mail, Share2, Building, Factory } from "lucide-react";

export const wordBuilderCategories_part14 = {
  correspondence: {
    name: "Briefverkehr",
    description: "Briefe und Post",
    icon: Mail,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "letter", hint: "Brief" },
      { word: "mail", hint: "Post" },
      { word: "envelope", hint: "Umschlag" },
      { word: "stamp", hint: "Briefmarke" },
      { word: "address", hint: "Adresse" },
      { word: "sender", hint: "Absender" },
      { word: "recipient", hint: "Empfänger" },
      { word: "zip code", hint: "Postleitzahl" },
      { word: "package", hint: "Paket" },
      { word: "shipping", hint: "Versand" },
      { word: "delivery", hint: "Zustellung" },
      { word: "mailbox", hint: "Briefkasten" },
      { word: "postman", hint: "Briefträger" },
      { word: "registered mail", hint: "Einschreiben" },
      { word: "express", hint: "Eilpost" }
    ]
  },

  social_media: {
    name: "Soziale Medien",
    description: "Online-Netzwerke und Teilen",
    icon: Share2,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "social media", hint: "soziale Medien" },
      { word: "post", hint: "posten" },
      { word: "share", hint: "teilen" },
      { word: "like", hint: "Like" },
      { word: "comment", hint: "Kommentar" },
      { word: "follow", hint: "folgen" },
      { word: "follower", hint: "Follower" },
      { word: "friend", hint: "Freund" },
      { word: "profile", hint: "Profil" },
      { word: "photo", hint: "Foto" },
      { word: "video", hint: "Video" },
      { word: "story", hint: "Story" },
      { word: "direct message", hint: "Direktnachricht" },
      { word: "tag", hint: "Tag" },
      { word: "viral", hint: "viral" }
    ]
  },

  buildings: {
    name: "Gebäude",
    description: "Bauwerke und Strukturen",
    icon: Building,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "building", hint: "Gebäude" },
      { word: "skyscraper", hint: "Wolkenkratzer" },
      { word: "tower", hint: "Turm" },
      { word: "structure", hint: "Struktur" },
      { word: "facade", hint: "Fassade" },
      { word: "floor", hint: "Stockwerk" },
      { word: "story", hint: "Etage" },
      { word: "roof", hint: "Dach" },
      { word: "basement", hint: "Keller" },
      { word: "stairs", hint: "Treppe" },
      { word: "elevator", hint: "Aufzug" },
      { word: "window", hint: "Fenster" },
      { word: "door", hint: "Tür" },
      { word: "balcony", hint: "Balkon" },
      { word: "terrace", hint: "Terrasse" }
    ]
  },

  industry: {
    name: "Industrie",
    description: "Fabriken und Produktion",
    icon: Factory,
    color: "from-orange-500 to-red-600",
    level: "advanced",
    words: [
      { word: "factory", hint: "Fabrik" },
      { word: "industry", hint: "Industrie" },
      { word: "production", hint: "Produktion" },
      { word: "manufacturing", hint: "Herstellung" },
      { word: "machine", hint: "Maschine" },
      { word: "assembly line", hint: "Fließband" },
      { word: "worker", hint: "Arbeiter" },
      { word: "operator", hint: "Bediener" },
      { word: "shift", hint: "Schicht" },
      { word: "raw material", hint: "Rohstoff" },
      { word: "product", hint: "Produkt" },
      { word: "quality", hint: "Qualität" },
      { word: "control", hint: "Kontrolle" },
      { word: "process", hint: "Prozess" },
      { word: "efficiency", hint: "Effizienz" }
    ]
  }
};

export default wordBuilderCategories_part14;