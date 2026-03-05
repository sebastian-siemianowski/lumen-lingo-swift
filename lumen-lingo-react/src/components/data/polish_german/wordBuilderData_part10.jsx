/**
 * POLISH → GERMAN WORD BUILDER - PART 10
 * Categories: 41-44
 * 4 categories, 15 words each = 60 words
 */

import { Clock, CalendarDays, MapPin, Globe } from "lucide-react";

export const wordBuilderCategories_part10 = {
  time: {
    name: "Czas",
    description: "Wyrażenia czasowe i pory dnia",
    icon: Clock,
    color: "from-blue-500 to-cyan-600",
    level: "beginner",
    words: [
      { word: "Zeit", hint: "czas" },
      { word: "Uhr", hint: "zegar" },
      { word: "Stunde", hint: "godzina" },
      { word: "Minute", hint: "minuta" },
      { word: "Sekunde", hint: "sekunda" },
      { word: "Morgen", hint: "ranek" },
      { word: "Vormittag", hint: "przed południem" },
      { word: "Mittag", hint: "południe" },
      { word: "Nachmittag", hint: "popołudnie" },
      { word: "Abend", hint: "wieczór" },
      { word: "Nacht", hint: "noc" },
      { word: "Mitternacht", hint: "północ" },
      { word: "heute", hint: "dziś" },
      { word: "gestern", hint: "wczoraj" },
      { word: "morgen", hint: "jutro" }
    ]
  },

  calendar_dates: {
    name: "Kalendarz i daty",
    description: "Dni tygodnia i miesiące",
    icon: CalendarDays,
    color: "from-purple-500 to-fuchsia-600",
    level: "beginner",
    words: [
      { word: "Montag", hint: "poniedziałek" },
      { word: "Dienstag", hint: "wtorek" },
      { word: "Mittwoch", hint: "środa" },
      { word: "Donnerstag", hint: "czwartek" },
      { word: "Freitag", hint: "piątek" },
      { word: "Samstag", hint: "sobota" },
      { word: "Sonntag", hint: "niedziela" },
      { word: "Woche", hint: "tydzień" },
      { word: "Monat", hint: "miesiąc" },
      { word: "Jahr", hint: "rok" },
      { word: "Datum", hint: "data" },
      { word: "Kalender", hint: "kalendarz" },
      { word: "Feiertag", hint: "święto" },
      { word: "Wochenende", hint: "weekend" },
      { word: "Werktag", hint: "dzień powszedni" }
    ]
  },

  geography: {
    name: "Geografia",
    description: "Miejsca i elementy geograficzne",
    icon: MapPin,
    color: "from-green-500 to-emerald-600",
    level: "intermediate",
    words: [
      { word: "Land", hint: "kraj" },
      { word: "Stadt", hint: "miasto" },
      { word: "Dorf", hint: "wieś" },
      { word: "Kontinent", hint: "kontynent" },
      { word: "Ozean", hint: "ocean" },
      { word: "Meer", hint: "morze" },
      { word: "See", hint: "jezioro" },
      { word: "Fluss", hint: "rzeka" },
      { word: "Bach", hint: "strumień" },
      { word: "Insel", hint: "wyspa" },
      { word: "Halbinsel", hint: "półwysep" },
      { word: "Küste", hint: "wybrzeże" },
      { word: "Strand", hint: "plaża" },
      { word: "Wüste", hint: "pustynia" },
      { word: "Dschungel", hint: "dżungla" }
    ]
  },

  world_countries: {
    name: "Kraje świata",
    description: "Państwa i narodowości",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
    level: "beginner",
    words: [
      { word: "Deutschland", hint: "Niemcy" },
      { word: "Polen", hint: "Polska" },
      { word: "Frankreich", hint: "Francja" },
      { word: "Spanien", hint: "Hiszpania" },
      { word: "Italien", hint: "Włochy" },
      { word: "England", hint: "Anglia" },
      { word: "Amerika", hint: "Ameryka" },
      { word: "Russland", hint: "Rosja" },
      { word: "China", hint: "Chiny" },
      { word: "Japan", hint: "Japonia" },
      { word: "Österreich", hint: "Austria" },
      { word: "Schweiz", hint: "Szwajcaria" },
      { word: "Griechenland", hint: "Grecja" },
      { word: "Türkei", hint: "Turcja" },
      { word: "Ukraine", hint: "Ukraina" }
    ]
  }
};

export default wordBuilderCategories_part10;