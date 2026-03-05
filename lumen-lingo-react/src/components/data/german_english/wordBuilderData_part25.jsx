/**
 * GERMAN → ENGLISH WORD BUILDER - PART 25
 * Categories: 106-110
 * 5 categories, 15 words each = 75 words
 */

import { Banknote, Scale, Music, Camera, CloudRain } from "lucide-react";

export const wordBuilderCategories_part25 = {
  banking_finance: {
    name: "Banking und Finanzen",
    description: "Geld und Bankgeschäfte",
    icon: Banknote,
    color: "from-emerald-500 to-green-600",
    level: "intermediate",
    words: [
      { word: "bank", hint: "Bank" },
      { word: "account", hint: "Konto" },
      { word: "savings", hint: "Ersparnisse" },
      { word: "loan", hint: "Kredit" },
      { word: "interest", hint: "Zinsen" },
      { word: "investment", hint: "Investition" },
      { word: "stock", hint: "Aktie" },
      { word: "bond", hint: "Anleihe" },
      { word: "mortgage", hint: "Hypothek" },
      { word: "deposit", hint: "Einzahlung" },
      { word: "withdrawal", hint: "Abhebung" },
      { word: "balance", hint: "Kontostand" },
      { word: "statement", hint: "Kontoauszug" },
      { word: "currency", hint: "Währung" },
      { word: "exchange", hint: "Wechsel" }
    ]
  },

  legal_law: {
    name: "Recht und Gesetz",
    description: "Rechtliche Begriffe und Justiz",
    icon: Scale,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "law", hint: "Gesetz" },
      { word: "lawyer", hint: "Anwalt" },
      { word: "judge", hint: "Richter" },
      { word: "court", hint: "Gericht" },
      { word: "trial", hint: "Prozess" },
      { word: "verdict", hint: "Urteil" },
      { word: "evidence", hint: "Beweis" },
      { word: "witness", hint: "Zeuge" },
      { word: "attorney", hint: "Rechtsanwalt" },
      { word: "lawsuit", hint: "Klage" },
      { word: "contract", hint: "Vertrag" },
      { word: "justice", hint: "Gerechtigkeit" },
      { word: "rights", hint: "Rechte" },
      { word: "legal", hint: "rechtlich" },
      { word: "illegal", hint: "illegal" }
    ]
  },

  music_genres: {
    name: "Musikgenres",
    description: "Verschiedene Musikstile",
    icon: Music,
    color: "from-purple-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "rock", hint: "Rock" },
      { word: "pop", hint: "Pop" },
      { word: "jazz", hint: "Jazz" },
      { word: "classical", hint: "Klassik" },
      { word: "blues", hint: "Blues" },
      { word: "country", hint: "Country" },
      { word: "hip hop", hint: "Hip-Hop" },
      { word: "rap", hint: "Rap" },
      { word: "reggae", hint: "Reggae" },
      { word: "folk", hint: "Folk" },
      { word: "metal", hint: "Metal" },
      { word: "electronic", hint: "Elektronisch" },
      { word: "techno", hint: "Techno" },
      { word: "soul", hint: "Soul" },
      { word: "funk", hint: "Funk" }
    ]
  },

  photography_equipment: {
    name: "Fotoausrüstung",
    description: "Kameraausrüstung und Zubehör",
    icon: Camera,
    color: "from-indigo-500 to-purple-600",
    level: "advanced",
    words: [
      { word: "camera", hint: "Kamera" },
      { word: "lens", hint: "Objektiv" },
      { word: "tripod", hint: "Stativ" },
      { word: "flash", hint: "Blitzgerät" },
      { word: "filter", hint: "Filter" },
      { word: "memory card", hint: "Speicherkarte" },
      { word: "battery", hint: "Batterie" },
      { word: "viewfinder", hint: "Sucher" },
      { word: "sensor", hint: "Sensor" },
      { word: "aperture", hint: "Blende" },
      { word: "shutter speed", hint: "Verschlusszeit" },
      { word: "ISO", hint: "ISO" },
      { word: "zoom", hint: "Zoom" },
      { word: "macro", hint: "Makro" },
      { word: "wide-angle", hint: "Weitwinkel" }
    ]
  },

  weather_phenomena: {
    name: "Wetterphänomene",
    description: "Naturerscheinungen und Wetterlagen",
    icon: CloudRain,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "rain", hint: "Regen" },
      { word: "snow", hint: "Schnee" },
      { word: "storm", hint: "Sturm" },
      { word: "thunder", hint: "Donner" },
      { word: "lightning", hint: "Blitz" },
      { word: "fog", hint: "Nebel" },
      { word: "hail", hint: "Hagel" },
      { word: "drizzle", hint: "Nieselregen" },
      { word: "frost", hint: "Frost" },
      { word: "rainbow", hint: "Regenbogen" },
      { word: "drought", hint: "Dürre" },
      { word: "humidity", hint: "Luftfeuchtigkeit" },
      { word: "precipitation", hint: "Niederschlag" },
      { word: "climate", hint: "Klima" },
      { word: "forecast", hint: "Vorhersage" }
    ]
  }
};

export default wordBuilderCategories_part25;