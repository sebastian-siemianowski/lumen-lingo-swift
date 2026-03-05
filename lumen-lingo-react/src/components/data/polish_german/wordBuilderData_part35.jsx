/**
 * POLISH → GERMAN WORD BUILDER - PART 35
 * Categories: 140-143
 * 4 categories, 15 words each = 60 words
 */

import { Heart, Stethoscope, HeartPulse, Activity } from "lucide-react";

export const wordBuilderCategories_part35 = {
  body_organs: {
    name: "Narządy ciała",
    description: "Wewnętrzne organy i anatomia",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    level: "advanced",
    words: [
      { word: "Herz", hint: "serce" },
      { word: "Lunge", hint: "płuco" },
      { word: "Leber", hint: "wątroba" },
      { word: "Niere", hint: "nerka" },
      { word: "Magen", hint: "żołądek" },
      { word: "Darm", hint: "jelito" },
      { word: "Gehirn", hint: "mózg" },
      { word: "Blase", hint: "pęcherz" },
      { word: "Milz", hint: "śledziona" },
      { word: "Bauchspeicheldrüse", hint: "trzustka" },
      { word: "Gallenblase", hint: "pęcherzyk żółciowy" },
      { word: "Schilddrüse", hint: "tarczyca" },
      { word: "Wirbelsäule", hint: "kręgosłup" },
      { word: "Rippe", hint: "żebro" },
      { word: "Knochen", hint: "kość" }
    ]
  },

  medical_examination: {
    name: "Badanie lekarskie",
    description: "Procedury diagnostyczne i medyczne",
    icon: Stethoscope,
    color: "from-cyan-500 to-blue-600",
    level: "advanced",
    words: [
      { word: "Untersuchung", hint: "badanie" },
      { word: "Bluttest", hint: "badanie krwi" },
      { word: "Blutabnahme", hint: "pobranie krwi" },
      { word: "Urinprobe", hint: "próbka moczu" },
      { word: "Röntgenbild", hint: "zdjęcie rentgenowskie" },
      { word: "Ultraschall", hint: "ultrasonografia" },
      { word: "MRT", hint: "rezonans magnetyczny" },
      { word: "CT", hint: "tomografia komputerowa" },
      { word: "EKG", hint: "EKG" },
      { word: "Blutdruck", hint: "ciśnienie krwi" },
      { word: "Puls", hint: "puls" },
      { word: "Fiebermessen", hint: "mierzenie temperatury" },
      { word: "Abhören", hint: "osłuchiwanie" },
      { word: "Abtasten", hint: "obmacywanie" },
      { word: "Befund", hint: "wynik badania" }
    ]
  },

  health_wellness: {
    name: "Zdrowie i wellness",
    description: "Dobre samopoczucie i troska o siebie",
    icon: HeartPulse,
    color: "from-pink-500 to-rose-600",
    level: "intermediate",
    words: [
      { word: "Gesundheit", hint: "zdrowie" },
      { word: "Wellness", hint: "wellness" },
      { word: "Fitness", hint: "fitness" },
      { word: "Sauna", hint: "sauna" },
      { word: "Dampfbad", hint: "łaźnia parowa" },
      { word: "Massage", hint: "masaż" },
      { word: "Entspannung", hint: "relaks" },
      { word: "Meditation", hint: "medytacja" },
      { word: "Yoga", hint: "joga" },
      { word: "Spa", hint: "spa" },
      { word: "Therme", hint: "termy" },
      { word: "Heilung", hint: "uzdrowienie" },
      { word: "Wohlbefinden", hint: "samopoczucie" },
      { word: "Vitalität", hint: "witalność" },
      { word: "Lebensqualität", hint: "jakość życia" }
    ]
  },

  fitness_exercise: {
    name: "Fitness i ćwiczenia",
    description: "Trening i aktywność fizyczna",
    icon: Activity,
    color: "from-orange-500 to-red-600",
    level: "intermediate",
    words: [
      { word: "Fitness", hint: "fitness" },
      { word: "Training", hint: "trening" },
      { word: "Übung", hint: "ćwiczenie" },
      { word: "Fitnessstudio", hint: "siłownia" },
      { word: "Trainer", hint: "trener" },
      { word: "Hantel", hint: "hantel" },
      { word: "Gewicht", hint: "ciężar" },
      { word: "Laufband", hint: "bieżnia" },
      { word: "Heimtrainer", hint: "rower stacjonarny" },
      { word: "Krafttraining", hint: "trening siłowy" },
      { word: "Cardio", hint: "cardio" },
      { word: "Ausdauer", hint: "wytrzymałość" },
      { word: "Dehnung", hint: "rozciąganie" },
      { word: "Muskel", hint: "mięsień" },
      { word: "Kalorien", hint: "kalorie" }
    ]
  }
};

export default wordBuilderCategories_part35;