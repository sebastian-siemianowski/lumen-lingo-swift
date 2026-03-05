/**
 * POLISH → ENGLISH WORD BUILDER - PART 3
 * Categories: 16-22
 * 7 categories, 15 words each = 105 words
 */

import { Thermometer, Landmark, Scale, Gavel, Shield, Car, Plane } from "lucide-react";

export const wordBuilderCategories_part3 = {
  health_conditions: {
    name: "Stany zdrowotne",
    description: "Schorzenia i dolegliwości",
    icon: Thermometer,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "fever", hint: "gorączka" },
      { word: "cough", hint: "kaszel" },
      { word: "cold", hint: "przeziębienie" },
      { word: "flu", hint: "grypa" },
      { word: "headache", hint: "ból głowy" },
      { word: "stomachache", hint: "ból brzucha" },
      { word: "toothache", hint: "ból zęba" },
      { word: "backache", hint: "ból pleców" },
      { word: "nausea", hint: "nudności" },
      { word: "dizziness", hint: "zawroty głowy" },
      { word: "fatigue", hint: "zmęczenie" },
      { word: "allergy", hint: "alergia" },
      { word: "asthma", hint: "astma" },
      { word: "diabetes", hint: "cukrzyca" },
      { word: "hypertension", hint: "nadciśnienie" }
    ]
  },

  government_politics: {
    name: "Rząd i polityka",
    description: "System polityczny i władza",
    icon: Landmark,
    color: "from-blue-500 to-indigo-600",
    level: "advanced",
    words: [
      { word: "government", hint: "rząd" },
      { word: "president", hint: "prezydent" },
      { word: "minister", hint: "minister" },
      { word: "parliament", hint: "parlament" },
      { word: "senate", hint: "senat" },
      { word: "election", hint: "wybory" },
      { word: "vote", hint: "głos" },
      { word: "democracy", hint: "demokracja" },
      { word: "republic", hint: "republika" },
      { word: "constitution", hint: "konstytucja" },
      { word: "legislation", hint: "ustawodawstwo" },
      { word: "policy", hint: "polityka" },
      { word: "campaign", hint: "kampania" },
      { word: "candidate", hint: "kandydat" },
      { word: "referendum", hint: "referendum" }
    ]
  },

  legal_system: {
    name: "System prawny",
    description: "Prawo i wymiar sprawiedliwości",
    icon: Scale,
    color: "from-slate-500 to-gray-600",
    level: "advanced",
    words: [
      { word: "law", hint: "prawo" },
      { word: "justice", hint: "sprawiedliwość" },
      { word: "court", hint: "sąd" },
      { word: "judge", hint: "sędzia" },
      { word: "lawyer", hint: "prawnik" },
      { word: "attorney", hint: "adwokat" },
      { word: "prosecutor", hint: "prokurator" },
      { word: "defendant", hint: "oskarżony" },
      { word: "plaintiff", hint: "powód" },
      { word: "witness", hint: "świadek" },
      { word: "jury", hint: "ława przysięgłych" },
      { word: "verdict", hint: "werdykt" },
      { word: "sentence", hint: "wyrok" },
      { word: "trial", hint: "proces" },
      { word: "appeal", hint: "apelacja" }
    ]
  },

  crime_law: {
    name: "Przestępstwa i prawo",
    description: "Czyny zabronione i kary",
    icon: Gavel,
    color: "from-red-500 to-orange-600",
    level: "advanced",
    words: [
      { word: "crime", hint: "przestępstwo" },
      { word: "theft", hint: "kradzież" },
      { word: "robbery", hint: "rabunek" },
      { word: "burglary", hint: "włamanie" },
      { word: "fraud", hint: "oszustwo" },
      { word: "assault", hint: "napaść" },
      { word: "murder", hint: "morderstwo" },
      { word: "kidnapping", hint: "porwanie" },
      { word: "vandalism", hint: "wandalizm" },
      { word: "forgery", hint: "fałszerstwo" },
      { word: "bribery", hint: "łapownictwo" },
      { word: "smuggling", hint: "przemyt" },
      { word: "arson", hint: "podpalenie" },
      { word: "blackmail", hint: "szantaż" },
      { word: "trespassing", hint: "wtargnięcie" }
    ]
  },

  police_security: {
    name: "Policja i bezpieczeństwo",
    description: "Służby porządkowe i ochrona",
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    level: "intermediate",
    words: [
      { word: "police", hint: "policja" },
      { word: "officer", hint: "funkcjonariusz" },
      { word: "detective", hint: "detektyw" },
      { word: "investigation", hint: "śledztwo" },
      { word: "arrest", hint: "aresztowanie" },
      { word: "handcuffs", hint: "kajdanki" },
      { word: "warrant", hint: "nakaz" },
      { word: "interrogation", hint: "przesłuchanie" },
      { word: "evidence", hint: "dowód" },
      { word: "fingerprint", hint: "odcisk palca" },
      { word: "surveillance", hint: "obserwacja" },
      { word: "patrol", hint: "patrol" },
      { word: "security", hint: "ochrona" },
      { word: "guard", hint: "strażnik" },
      { word: "alarm", hint: "alarm" }
    ]
  },

  vehicles_cars: {
    name: "Pojazdy i samochody",
    description: "Części i typy pojazdów",
    icon: Car,
    color: "from-gray-500 to-slate-600",
    level: "intermediate",
    words: [
      { word: "engine", hint: "silnik" },
      { word: "wheel", hint: "koło" },
      { word: "tire", hint: "opona" },
      { word: "brake", hint: "hamulec" },
      { word: "steering", hint: "kierownica" },
      { word: "clutch", hint: "sprzęgło" },
      { word: "gearbox", hint: "skrzynia biegów" },
      { word: "headlight", hint: "reflektor" },
      { word: "bumper", hint: "zderzak" },
      { word: "windshield", hint: "przednia szyba" },
      { word: "mirror", hint: "lusterko" },
      { word: "seatbelt", hint: "pas bezpieczeństwa" },
      { word: "airbag", hint: "poduszka powietrzna" },
      { word: "dashboard", hint: "deska rozdzielcza" },
      { word: "exhaust", hint: "wydech" }
    ]
  },

  air_travel: {
    name: "Podróże lotnicze",
    description: "Loty i lotniska",
    icon: Plane,
    color: "from-sky-500 to-blue-600",
    level: "intermediate",
    words: [
      { word: "airport", hint: "lotnisko" },
      { word: "terminal", hint: "terminal" },
      { word: "gate", hint: "bramka" },
      { word: "boarding", hint: "wejście na pokład" },
      { word: "takeoff", hint: "start" },
      { word: "landing", hint: "lądowanie" },
      { word: "flight", hint: "lot" },
      { word: "pilot", hint: "pilot" },
      { word: "crew", hint: "załoga" },
      { word: "passenger", hint: "pasażer" },
      { word: "luggage", hint: "bagaż" },
      { word: "customs", hint: "cło" },
      { word: "security", hint: "kontrola bezpieczeństwa" },
      { word: "departure", hint: "odlot" },
      { word: "arrival", hint: "przylot" }
    ]
  }
};

export default wordBuilderCategories_part3;