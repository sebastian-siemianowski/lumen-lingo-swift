/**
 * POLISH → ARABIC WORD BUILDER
 * Polski → العربية
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Początkujący",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Proste słowa arabskie",
    words: [
      { id: "pa_word_1", word: "مرحبا", hint: "Cześć", arabic: "مرحبا" },
      { id: "pa_word_2", word: "بيت", hint: "Dom", arabic: "بيت" },
      { id: "pa_word_3", word: "حب", hint: "Miłość", arabic: "حب" },
      { id: "pa_word_4", word: "ماء", hint: "Woda", arabic: "ماء" },
      { id: "pa_word_5", word: "قط", hint: "Kot", arabic: "قط" },
      { id: "pa_word_6", word: "كلب", hint: "Pies", arabic: "كلب" },
      { id: "pa_word_7", word: "كتاب", hint: "Książka", arabic: "كتاب" },
      { id: "pa_word_8", word: "شمس", hint: "Słońce", arabic: "شمس" },
      { id: "pa_word_9", word: "قمر", hint: "Księżyc", arabic: "قمر" },
      { id: "pa_word_10", word: "نجم", hint: "Gwiazda", arabic: "نجم" }
    ]
  },

  colors: {
    name: "Kolory",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Nazwy kolorów",
    words: [
      { id: "pa_col_1", word: "أحمر", hint: "Czerwony", arabic: "أحمر" },
      { id: "pa_col_2", word: "أزرق", hint: "Niebieski", arabic: "أزرق" },
      { id: "pa_col_3", word: "أخضر", hint: "Zielony", arabic: "أخضر" },
      { id: "pa_col_4", word: "أصفر", hint: "Żółty", arabic: "أصفر" },
      { id: "pa_col_5", word: "أبيض", hint: "Biały", arabic: "أبيض" },
      { id: "pa_col_6", word: "أسود", hint: "Czarny", arabic: "أسود" },
      { id: "pa_col_7", word: "برتقالي", hint: "Pomarańczowy", arabic: "برتقالي" },
      { id: "pa_col_8", word: "بنفسجي", hint: "Fioletowy", arabic: "بنفسجي" },
      { id: "pa_col_9", word: "وردي", hint: "Różowy", arabic: "وردي" },
      { id: "pa_col_10", word: "بني", hint: "Brązowy", arabic: "بني" }
    ]
  },

  family: {
    name: "Rodzina",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Członkowie rodziny",
    words: [
      { id: "pa_fam_1", word: "أب", hint: "Ojciec", arabic: "أب" },
      { id: "pa_fam_2", word: "أم", hint: "Matka", arabic: "أم" },
      { id: "pa_fam_3", word: "أخ", hint: "Brat", arabic: "أخ" },
      { id: "pa_fam_4", word: "أخت", hint: "Siostra", arabic: "أخت" },
      { id: "pa_fam_5", word: "ابن", hint: "Syn", arabic: "ابن" },
      { id: "pa_fam_6", word: "ابنة", hint: "Córka", arabic: "ابنة" },
      { id: "pa_fam_7", word: "عم", hint: "Wujek", arabic: "عم" },
      { id: "pa_fam_8", word: "عمة", hint: "Ciocia", arabic: "عمة" },
      { id: "pa_fam_9", word: "ابن عم", hint: "Kuzyn", arabic: "ابن عم" },
      { id: "pa_fam_10", word: "عائلة", hint: "Rodzina", arabic: "عائلة" }
    ]
  },

  house: {
    name: "Dom",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Przedmioty domowe",
    words: [
      { id: "pa_house_1", word: "طاولة", hint: "Stół", arabic: "طاولة" },
      { id: "pa_house_2", word: "كرسي", hint: "Krzesło", arabic: "كرسي" },
      { id: "pa_house_3", word: "سرير", hint: "Łóżko", arabic: "سرير" },
      { id: "pa_house_4", word: "باب", hint: "Drzwi", arabic: "باب" },
      { id: "pa_house_5", word: "نافذة", hint: "Okno", arabic: "نافذة" },
      { id: "pa_house_6", word: "مطبخ", hint: "Kuchnia", arabic: "مطبخ" },
      { id: "pa_house_7", word: "غرفة نوم", hint: "Sypialnia", arabic: "غرفة نوم" },
      { id: "pa_house_8", word: "حمام", hint: "Łazienka", arabic: "حمام" },
      { id: "pa_house_9", word: "حديقة", hint: "Ogród", arabic: "حديقة" },
      { id: "pa_house_10", word: "سقف", hint: "Dach", arabic: "سقف" }
    ]
  },

  food: {
    name: "Jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popularne jedzenie",
    words: [
      { id: "pa_food_1", word: "خبز", hint: "Chleb", arabic: "خبز" },
      { id: "pa_food_2", word: "حليب", hint: "Mleko", arabic: "حليب" },
      { id: "pa_food_3", word: "تفاح", hint: "Jabłko", arabic: "تفاح" },
      { id: "pa_food_4", word: "جبن", hint: "Ser", arabic: "جبن" },
      { id: "pa_food_5", word: "لحم", hint: "Mięso", arabic: "لحم" },
      { id: "pa_food_6", word: "سمك", hint: "Ryba", arabic: "سمك" },
      { id: "pa_food_7", word: "بيض", hint: "Jajko", arabic: "بيض" },
      { id: "pa_food_8", word: "أرز", hint: "Ryż", arabic: "أرز" },
      { id: "pa_food_9", word: "خضار", hint: "Warzywo", arabic: "خضار" },
      { id: "pa_food_10", word: "فاكهة", hint: "Owoc", arabic: "فاكهة" }
    ]
  },

  animals: {
    name: "Zwierzęta",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Nazwy zwierząt",
    words: [
      { id: "pa_ani_1", word: "حصان", hint: "Koń", arabic: "حصان" },
      { id: "pa_ani_2", word: "بقرة", hint: "Krowa", arabic: "بقرة" },
      { id: "pa_ani_3", word: "خنزير", hint: "Świnia", arabic: "خنزير" },
      { id: "pa_ani_4", word: "دجاج", hint: "Kurczak", arabic: "دجاج" },
      { id: "pa_ani_5", word: "طائر", hint: "Ptak", arabic: "طائر" },
      { id: "pa_ani_6", word: "فأر", hint: "Mysz", arabic: "فأر" },
      { id: "pa_ani_7", word: "ثعبان", hint: "Wąż", arabic: "ثعبان" },
      { id: "pa_ani_8", word: "أسد", hint: "Lew", arabic: "أسد" },
      { id: "pa_ani_9", word: "نمر", hint: "Tygrys", arabic: "نمر" },
      { id: "pa_ani_10", word: "فيل", hint: "Słoń", arabic: "فيل" }
    ]
  },

  places: {
    name: "Miejsca",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Lokalizacje",
    words: [
      { id: "pa_place_1", word: "مدينة", hint: "Miasto", arabic: "مدينة" },
      { id: "pa_place_2", word: "شاطئ", hint: "Plaża", arabic: "شاطئ" },
      { id: "pa_place_3", word: "حديقة", hint: "Park", arabic: "حديقة" },
      { id: "pa_place_4", word: "مدرسة", hint: "Szkoła", arabic: "مدرسة" },
      { id: "pa_place_5", word: "مستشفى", hint: "Szpital", arabic: "مستشفى" },
      { id: "pa_place_6", word: "متجر", hint: "Sklep", arabic: "متجر" },
      { id: "pa_place_7", word: "شارع", hint: "Ulica", arabic: "شارع" },
      { id: "pa_place_8", word: "مطار", hint: "Lotnisko", arabic: "مطار" },
      { id: "pa_place_9", word: "جسر", hint: "Most", arabic: "جسر" },
      { id: "pa_place_10", word: "جبل", hint: "Góra", arabic: "جبل" }
    ]
  },

  time: {
    name: "Czas",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Słowa związane z czasem",
    words: [
      { id: "pa_time_1", word: "صباح", hint: "Ranek", arabic: "صباح" },
      { id: "pa_time_2", word: "مساء", hint: "Wieczór", arabic: "مساء" },
      { id: "pa_time_3", word: "غدا", hint: "Jutro", arabic: "غدا" },
      { id: "pa_time_4", word: "أمس", hint: "Wczoraj", arabic: "أمس" },
      { id: "pa_time_5", word: "سنة", hint: "Rok", arabic: "سنة" },
      { id: "pa_time_6", word: "شهر", hint: "Miesiąc", arabic: "شهر" },
      { id: "pa_time_7", word: "أسبوع", hint: "Tydzień", arabic: "أسبوع" },
      { id: "pa_time_8", word: "ساعة", hint: "Godzina", arabic: "ساعة" },
      { id: "pa_time_9", word: "دقيقة", hint: "Minuta", arabic: "دقيقة" },
      { id: "pa_time_10", word: "ثانية", hint: "Sekunda", arabic: "ثانية" }
    ]
  },

  nature: {
    name: "Natura",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Natura",
    words: [
      { id: "pa_nat_1", word: "شجرة", hint: "Drzewo", arabic: "شجرة" },
      { id: "pa_nat_2", word: "زهرة", hint: "Kwiat", arabic: "زهرة" },
      { id: "pa_nat_3", word: "جبل", hint: "Góra", arabic: "جبل" },
      { id: "pa_nat_4", word: "نهر", hint: "Rzeka", arabic: "نهر" },
      { id: "pa_nat_5", word: "غابة", hint: "Las", arabic: "غابة" },
      { id: "pa_nat_6", word: "بحيرة", hint: "Jezioro", arabic: "بحيرة" },
      { id: "pa_nat_7", word: "بحر", hint: "Morze", arabic: "بحر" },
      { id: "pa_nat_8", word: "صحراء", hint: "Pustynia", arabic: "صحراء" },
      { id: "pa_nat_9", word: "جزيرة", hint: "Wyspa", arabic: "جزيرة" },
      { id: "pa_nat_10", word: "سماء", hint: "Niebo", arabic: "سماء" }
    ]
  },

  emotions: {
    name: "Emocje",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Uczucia",
    words: [
      { id: "pa_emo_1", word: "سعيد", hint: "Szczęśliwy", arabic: "سعيد" },
      { id: "pa_emo_2", word: "حزين", hint: "Smutny", arabic: "حزين" },
      { id: "pa_emo_3", word: "غاضب", hint: "Zły", arabic: "غاضب" },
      { id: "pa_emo_4", word: "متعب", hint: "Zmęczony", arabic: "متعب" },
      { id: "pa_emo_5", word: "عصبي", hint: "Zdenerwowany", arabic: "عصبي" },
      { id: "pa_emo_6", word: "هادئ", hint: "Spokojny", arabic: "هادئ" },
      { id: "pa_emo_7", word: "خائف", hint: "Przestraszony", arabic: "خائف" },
      { id: "pa_emo_8", word: "فخور", hint: "Dumny", arabic: "فخور" },
      { id: "pa_emo_9", word: "متفائل", hint: "Pełen nadziei", arabic: "متفائل" },
      { id: "pa_emo_10", word: "مبتهج", hint: "Radosny", arabic: "مبتهج" }
    ]
  }
};

export default wordBuilderCategories;