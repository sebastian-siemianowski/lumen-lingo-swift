
/**
 * POLISH → UKRAINIAN WORD BUILDER
 * Word construction exercises for Polish speakers
 *
 * STRUCTURE:
 * - Each category must have: name, description, icon, color, level, words
 *
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   word: "Ukrainian word" (in Cyrillic, the target word to build),
 *   hint: "Polish word/phrase" (the clue),
 *   ukrainian: "Ukrainian word" (properly formatted)
 * }
 */

import { BookOpen, GraduationCap, Award } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Podstawy",
    description: "Proste słowa ukraińskie",
    icon: BookOpen,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "pu_wb1", word: "дім", hint: "dom", ukrainian: "Дім" },
      { id: "pu_wb2", word: "кіт", hint: "kot", ukrainian: "Кіт" },
      { id: "pu_wb3", word: "пес", hint: "pies", ukrainian: "Пес" },
      { id: "pu_wb4", word: "мати", hint: "matka", ukrainian: "Мати" },
      { id: "pu_wb5", word: "батько", hint: "ojciec", ukrainian: "Батько" },
      { id: "pu_wb6", word: "вода", hint: "woda", ukrainian: "Вода" },
      { id: "pu_wb7", word: "хліб", hint: "chleb", ukrainian: "Хліб" },
      { id: "pu_wb8", word: "любов", hint: "miłość", ukrainian: "Любов" },
      { id: "pu_wb9", word: "життя", hint: "życie", ukrainian: "Життя" },
      { id: "pu_wb10", word: "сонце", hint: "słońce", ukrainian: "Сонце" },
      { id: "pu_wb11", word: "місяць", hint: "księżyc", ukrainian: "Місяць" },
      { id: "pu_wb12", word: "серце", hint: "serce", ukrainian: "Серце" },
      { id: "pu_wb13", word: "гора", hint: "góra", ukrainian: "Гора" },
      { id: "pu_wb14", word: "ріка", hint: "rzeka", ukrainian: "Ріка" },
      { id: "pu_wb15", word: "ліс", hint: "las", ukrainian: "Ліс" }
    ]
  },

  intermediate: {
    name: "Średniozaawansowany",
    description: "Złożone słowa",
    icon: GraduationCap,
    color: "from-blue-400 to-cyan-500",
    level: "intermediate",
    words: [
      { id: "pu_wb_int1", word: "дякую", hint: "dziękuję", ukrainian: "Дякую" },
      { id: "pu_wb_int2", word: "вибачте", hint: "przepraszam", ukrainian: "Вибачте" },
      { id: "pu_wb_int3", word: "книжка", hint: "książka", ukrainian: "Книжка" },
      { id: "pu_wb_int4", word: "школа", hint: "szkoła", ukrainian: "Школа" },
      { id: "pu_wb_int5", word: "місто", hint: "miasto", ukrainian: "Місто" },
      { id: "pu_wb_int6", word: "квіти", hint: "kwiaty", ukrainian: "Квіти" },
      { id: "pu_wb_int7", word: "дорога", hint: "droga", ukrainian: "Дорога" },
      { id: "pu_wb_int8", word: "музика", hint: "muzyka", ukrainian: "Музика" },
      { id: "pu_wb_int9", word: "історія", hint: "historia", ukrainian: "Історія" },
      { id: "pu_wb_int10", word: "друг", hint: "przyjaciel", ukrainian: "Друг" },
      { id: "pu_wb_int11", word: "сім'я", hint: "rodzina", ukrainian: "Сім'я" },
      { id: "pu_wb_int12", word: "робота", hint: "praca", ukrainian: "Робота" },
      { id: "pu_wb_int13", word: "гроші", hint: "pieniądze", ukrainian: "Гроші" },
      { id: "pu_wb_int14", word: "щастя", hint: "szczęście", ukrainian: "Щастя" },
      { id: "pu_wb_int15", word: "свобода", hint: "wolność", ukrainian: "Свобода" }
    ]
  },

  advanced: {
    name: "Zaawansowany",
    description: "Trudne słowa i wyrażenia",
    icon: Award,
    color: "from-purple-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "pu_wb_adv1", word: "незалежність", hint: "niepodległość", ukrainian: "Незалежність" },
      { id: "pu_wb_adv2", word: "відповідальність", hint: "odpowiedzialność", ukrainian: "Відповідальність" },
      { id: "pu_wb_adv3", word: "гостинність", hint: "gościnność", ukrainian: "Гостинність" },
      { id: "pu_wb_adv4", word: "безпека", hint: "bezpieczeństwo", ukrainian: "Безпека" },
      { id: "pu_wb_adv5", word: "дружба", hint: "przyjaźń", ukrainian: "Дружба" },
      { id: "pu_wb_adv6", word: "культура", hint: "kultura", ukrainian: "Культура" },
      { id: "pu_wb_adv7", word: "традиція", hint: "tradycja", ukrainian: "Традиція" },
      { id: "pu_wb_adv8", word: "освіта", hint: "edukacja", ukrainian: "Освіта" },
      { id: "pu_wb_adv9", word: "майбутнє", hint: "przyszłość", ukrainian: "Майбутнє" },
      { id: "pu_wb_adv10", word: "мудрість", hint: "mądrość", ukrainian: "Мудрість" },
      { id: "pu_wb_adv11", word: "надія", hint: "nadzieja", ukrainian: "Надія" },
      { id: "pu_wb_adv12", word: "терплячість", hint: "cierpliwość", ukrainian: "Терплячість" },
      { id: "pu_wb_adv13", word: "спогад", hint: "wspomnienie", ukrainian: "Спогад" },
      { id: "pu_wb_adv14", word: "туга", hint: "tęsknota", ukrainian: "Туга" },
      { id: "pu_wb_adv15", word: "краса", hint: "piękno", ukrainian: "Краса" }
    ]
  }
};

export default wordBuilderCategories;
