/**
 * POLISH → GERMAN WORD BUILDER - PART 11
 * Categories: 45-48
 * 4 categories, 15 words each = 60 words
 */

import { Stethoscope, Pill, Thermometer, Hospital } from "lucide-react";

export const wordBuilderCategories_part11 = {
  medical_terms: {
    name: "Terminy medyczne",
    description: "Podstawowe słownictwo zdrowotne",
    icon: Stethoscope,
    color: "from-red-500 to-pink-600",
    level: "intermediate",
    words: [
      { word: "Arzt", hint: "lekarz" },
      { word: "Krankenschwester", hint: "pielęgniarka" },
      { word: "Patient", hint: "pacjent" },
      { word: "Krankenhaus", hint: "szpital" },
      { word: "Praxis", hint: "przychodnia" },
      { word: "Behandlung", hint: "leczenie" },
      { word: "Diagnose", hint: "diagnoza" },
      { word: "Untersuchung", hint: "badanie" },
      { word: "Operation", hint: "operacja" },
      { word: "Rezept", hint: "recepta" },
      { word: "Symptom", hint: "objaw" },
      { word: "Heilung", hint: "uzdrowienie" },
      { word: "Genesung", hint: "rekonwalescencja" },
      { word: "Notfall", hint: "nagły wypadek" },
      { word: "Krankenwagen", hint: "karetka" }
    ]
  },

  medicines: {
    name: "Leki",
    description: "Medykamenty i preparaty lecznicze",
    icon: Pill,
    color: "from-green-500 to-teal-600",
    level: "intermediate",
    words: [
      { word: "Medikament", hint: "lek" },
      { word: "Tablette", hint: "tabletka" },
      { word: "Pille", hint: "pigułka" },
      { word: "Kapsel", hint: "kapsułka" },
      { word: "Sirup", hint: "syrop" },
      { word: "Salbe", hint: "maść" },
      { word: "Creme", hint: "krem" },
      { word: "Tropfen", hint: "krople" },
      { word: "Spray", hint: "spray" },
      { word: "Antibiotikum", hint: "antybiotyk" },
      { word: "Schmerzmittel", hint: "środek przeciwbólowy" },
      { word: "Vitamin", hint: "witamina" },
      { word: "Impfstoff", hint: "szczepionka" },
      { word: "Aspirin", hint: "aspiryna" },
      { word: "Verband", hint: "bandaż" }
    ]
  },

  health_conditions: {
    name: "Stany zdrowotne",
    description: "Choroby i dolegliwości",
    icon: Thermometer,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "Fieber", hint: "gorączka" },
      { word: "Husten", hint: "kaszel" },
      { word: "Erkältung", hint: "przeziębienie" },
      { word: "Grippe", hint: "grypa" },
      { word: "Kopfschmerzen", hint: "ból głowy" },
      { word: "Bauchschmerzen", hint: "ból brzucha" },
      { word: "Zahnschmerzen", hint: "ból zęba" },
      { word: "Rückenschmerzen", hint: "ból pleców" },
      { word: "Übelkeit", hint: "nudności" },
      { word: "Schwindel", hint: "zawroty głowy" },
      { word: "Müdigkeit", hint: "zmęczenie" },
      { word: "Allergie", hint: "alergia" },
      { word: "Asthma", hint: "astma" },
      { word: "Diabetes", hint: "cukrzyca" },
      { word: "Infektion", hint: "infekcja" }
    ]
  },

  hospital: {
    name: "Szpital",
    description: "Oddziały i wyposażenie szpitalne",
    icon: Hospital,
    color: "from-blue-500 to-cyan-600",
    level: "advanced",
    words: [
      { word: "Krankenhaus", hint: "szpital" },
      { word: "Notaufnahme", hint: "izba przyjęć" },
      { word: "Station", hint: "oddział" },
      { word: "Zimmer", hint: "pokój" },
      { word: "Bett", hint: "łóżko" },
      { word: "Operationssaal", hint: "sala operacyjna" },
      { word: "Intensivstation", hint: "intensywna terapia" },
      { word: "Labor", hint: "laboratorium" },
      { word: "Röntgen", hint: "rentgen" },
      { word: "Ultraschall", hint: "ultrasonografia" },
      { word: "Blutdruck", hint: "ciśnienie krwi" },
      { word: "Puls", hint: "puls" },
      { word: "Infusion", hint: "kroplówka" },
      { word: "Spritze", hint: "strzykawka" },
      { word: "Rollstuhl", hint: "wózek inwalidzki" }
    ]
  }
};

export default wordBuilderCategories_part11;