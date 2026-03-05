/**
 * GERMAN → ENGLISH WORD BUILDER - PART 20
 * Categories: 86-89
 * 4 categories, 15 words each = 60 words
 */

import { Trophy, Medal, Target, Flag } from "lucide-react";

export const wordBuilderCategories_part20 = {
  competition: {
    name: "Wettbewerb",
    description: "Wettkämpfe und sportliche Konkurrenz",
    icon: Trophy,
    color: "from-yellow-500 to-amber-600",
    level: "intermediate",
    words: [
      { word: "competition", hint: "Wettbewerb" },
      { word: "tournament", hint: "Turnier" },
      { word: "championship", hint: "Meisterschaft" },
      { word: "final", hint: "Finale" },
      { word: "semifinal", hint: "Halbfinale" },
      { word: "qualification", hint: "Qualifikation" },
      { word: "elimination", hint: "Ausscheidung" },
      { word: "rival", hint: "Rivale" },
      { word: "opponent", hint: "Gegner" },
      { word: "victory", hint: "Sieg" },
      { word: "defeat", hint: "Niederlage" },
      { word: "tie", hint: "Unentschieden" },
      { word: "score", hint: "Punktzahl" },
      { word: "result", hint: "Ergebnis" },
      { word: "record", hint: "Rekord" }
    ]
  },

  awards: {
    name: "Auszeichnungen",
    description: "Preise und Ehrungen",
    icon: Medal,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "award", hint: "Preis" },
      { word: "medal", hint: "Medaille" },
      { word: "trophy", hint: "Trophäe" },
      { word: "cup", hint: "Pokal" },
      { word: "gold", hint: "Gold" },
      { word: "silver", hint: "Silber" },
      { word: "bronze", hint: "Bronze" },
      { word: "podium", hint: "Podium" },
      { word: "ceremony", hint: "Zeremonie" },
      { word: "winner", hint: "Gewinner" },
      { word: "champion", hint: "Champion" },
      { word: "title", hint: "Titel" },
      { word: "honor", hint: "Ehre" },
      { word: "distinction", hint: "Auszeichnung" },
      { word: "recognition", hint: "Anerkennung" }
    ]
  },

  goals_objectives: {
    name: "Ziele und Vorsätze",
    description: "Persönliche Ziele und Ambitionen",
    icon: Target,
    color: "from-purple-500 to-fuchsia-600",
    level: "advanced",
    words: [
      { word: "goal", hint: "Ziel" },
      { word: "objective", hint: "Zielsetzung" },
      { word: "purpose", hint: "Vorsatz" },
      { word: "aspiration", hint: "Streben" },
      { word: "ambition", hint: "Ambition" },
      { word: "dream", hint: "Traum" },
      { word: "wish", hint: "Wunsch" },
      { word: "plan", hint: "Plan" },
      { word: "strategy", hint: "Strategie" },
      { word: "achievement", hint: "Leistung" },
      { word: "success", hint: "Erfolg" },
      { word: "progress", hint: "Fortschritt" },
      { word: "improvement", hint: "Verbesserung" },
      { word: "effort", hint: "Anstrengung" },
      { word: "perseverance", hint: "Beharrlichkeit" }
    ]
  },

  celebration: {
    name: "Feier",
    description: "Feste und freudige Anlässe",
    icon: Flag,
    color: "from-pink-500 to-rose-600",
    level: "beginner",
    words: [
      { word: "party", hint: "Fest" },
      { word: "celebration", hint: "Feier" },
      { word: "birthday", hint: "Geburtstag" },
      { word: "anniversary", hint: "Jahrestag" },
      { word: "wedding", hint: "Hochzeit" },
      { word: "graduation", hint: "Abschlussfeier" },
      { word: "invitation", hint: "Einladung" },
      { word: "guest", hint: "Gast" },
      { word: "decoration", hint: "Dekoration" },
      { word: "cake", hint: "Torte" },
      { word: "candle", hint: "Kerze" },
      { word: "gift", hint: "Geschenk" },
      { word: "surprise", hint: "Überraschung" },
      { word: "joy", hint: "Freude" },
      { word: "toast", hint: "Toast" }
    ]
  }
};

export default wordBuilderCategories_part20;