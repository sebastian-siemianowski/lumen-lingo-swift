
/**
 * ENGLISH → ARABIC WORD BUILDER
 * English → العربية
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Beginner",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Simple Arabic words",
    words: [
      { id: "ea_word_1", word: "مرحبا", hint: "Hello", arabic: "مرحبا" },
      { id: "ea_word_2", word: "بيت", hint: "House", arabic: "بيت" },
      { id: "ea_word_3", word: "حب", hint: "Love", arabic: "حب" },
      { id: "ea_word_4", word: "ماء", hint: "Water", arabic: "ماء" },
      { id: "ea_word_5", word: "قط", hint: "Cat", arabic: "قط" },
      { id: "ea_word_6", word: "كلب", hint: "Dog", arabic: "كلب" },
      { id: "ea_word_7", word: "كتاب", hint: "Book", arabic: "كتاب" },
      { id: "ea_word_8", word: "شمس", hint: "Sun", arabic: "شمس" },
      { id: "ea_word_9", word: "قمر", hint: "Moon", arabic: "قمر" },
      { id: "ea_word_10", word: "نجم", hint: "Star", arabic: "نجم" }
    ]
  },

  colors: {
    name: "Colors",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Color names",
    words: [
      { id: "ea_col_1", word: "أحمر", hint: "Red", arabic: "أحمر" },
      { id: "ea_col_2", word: "أزرق", hint: "Blue", arabic: "أزرق" },
      { id: "ea_col_3", word: "أخضر", hint: "Green", arabic: "أخضر" },
      { id: "ea_col_4", word: "أصفر", hint: "Yellow", arabic: "أصفر" },
      { id: "ea_col_5", word: "أبيض", hint: "White", arabic: "أبيض" },
      { id: "ea_col_6", word: "أسود", hint: "Black", arabic: "أسود" },
      { id: "ea_col_7", word: "برتقالي", hint: "Orange", arabic: "برتقالي" },
      { id: "ea_col_8", word: "بنفسجي", hint: "Purple", arabic: "بنفسجي" },
      { id: "ea_col_9", word: "وردي", hint: "Pink", arabic: "وردي" },
      { id: "ea_col_10", word: "بني", hint: "Brown", arabic: "بني" }
    ]
  },

  family: {
    name: "Family",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Family members",
    words: [
      { id: "ea_fam_1", word: "أب", hint: "Father", arabic: "أب" },
      { id: "ea_fam_2", word: "أم", hint: "Mother", arabic: "أم" },
      { id: "ea_fam_3", word: "أخ", hint: "Brother", arabic: "أخ" },
      { id: "ea_fam_4", word: "أخت", hint: "Sister", arabic: "أخت" },
      { id: "ea_fam_5", word: "ابن", hint: "Son", arabic: "ابن" },
      { id: "ea_fam_6", word: "ابنة", hint: "Daughter", arabic: "ابنة" },
      { id: "ea_fam_7", word: "عم", hint: "Uncle", arabic: "عم" },
      { id: "ea_fam_8", word: "عمة", hint: "Aunt", arabic: "عمة" },
      { id: "ea_fam_9", word: "ابن عم", hint: "Cousin", arabic: "ابن عم" },
      { id: "ea_fam_10", word: "عائلة", hint: "Family", arabic: "عائلة" }
    ]
  },

  house: {
    name: "House",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Household items",
    words: [
      { id: "ea_house_1", word: "طاولة", hint: "Table", arabic: "طاولة" },
      { id: "ea_house_2", word: "كرسي", hint: "Chair", arabic: "كرسي" },
      { id: "ea_house_3", word: "سرير", hint: "Bed", arabic: "سرير" },
      { id: "ea_house_4", word: "باب", hint: "Door", arabic: "باب" },
      { id: "ea_house_5", word: "نافذة", hint: "Window", arabic: "نافذة" },
      { id: "ea_house_6", word: "مطبخ", hint: "Kitchen", arabic: "مطبخ" },
      { id: "ea_house_7", word: "غرفة نوم", hint: "Bedroom", arabic: "غرفة نوم" },
      { id: "ea_house_8", word: "حمام", hint: "Bathroom", arabic: "حمام" },
      { id: "ea_house_9", word: "حديقة", hint: "Garden", arabic: "حديقة" },
      { id: "ea_house_10", word: "سقف", hint: "Roof", arabic: "سقف" }
    ]
  },

  food: {
    name: "Food",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popular food",
    words: [
      { id: "ea_food_1", word: "خبز", hint: "Bread", arabic: "خبز" },
      { id: "ea_food_2", word: "حليب", hint: "Milk", arabic: "حليب" },
      { id: "ea_food_3", word: "تفاح", hint: "Apple", arabic: "تفاح" },
      { id: "ea_food_4", word: "جبن", hint: "Cheese", arabic: "جبن" },
      { id: "ea_food_5", word: "لحم", hint: "Meat", arabic: "لحم" },
      { id: "ea_food_6", word: "سمك", hint: "Fish", arabic: "سمك" },
      { id: "ea_food_7", word: "بيض", hint: "Egg", arabic: "بيض" },
      { id: "ea_food_8", word: "أرز", hint: "Rice", arabic: "أرز" },
      { id: "ea_food_9", word: "خضار", hint: "Vegetable", arabic: "خضار" },
      { id: "ea_food_10", word: "فاكهة", hint: "Fruit", arabic: "فاكهة" }
    ]
  },

  animals: {
    name: "Animals",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Animal names",
    words: [
      { id: "ea_ani_1", word: "حصان", hint: "Horse", arabic: "حصان" },
      { id: "ea_ani_2", word: "بقرة", hint: "Cow", arabic: "بقرة" },
      { id: "ea_ani_3", word: "خنزير", hint: "Pig", arabic: "خنزير" },
      { id: "ea_ani_4", word: "دجاج", hint: "Chicken", arabic: "دجاج" },
      { id: "ea_ani_5", word: "طائر", hint: "Bird", arabic: "طائر" },
      { id: "ea_ani_6", word: "فأر", hint: "Mouse", arabic: "فأر" },
      { id: "ea_ani_7", word: "ثعبان", hint: "Snake", arabic: "ثعبان" },
      { id: "ea_ani_8", word: "أسد", hint: "Lion", arabic: "أسد" },
      { id: "ea_ani_9", word: "نمر", hint: "Tiger", arabic: "نمر" },
      { id: "ea_ani_10", word: "فيل", hint: "Elephant", arabic: "فيل" }
    ]
  },

  places: {
    name: "Places",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Locations",
    words: [
      { id: "ea_place_1", word: "مدينة", hint: "City", arabic: "مدينة" },
      { id: "ea_place_2", word: "شاطئ", hint: "Beach", arabic: "شاطئ" },
      { id: "ea_place_3", word: "حديقة", hint: "Park", arabic: "حديقة" },
      { id: "ea_place_4", word: "مدرسة", hint: "School", arabic: "مدرسة" },
      { id: "ea_place_5", word: "مستشفى", hint: "Hospital", arabic: "مستشفى" },
      { id: "ea_place_6", word: "متجر", hint: "Store", arabic: "متجر" },
      { id: "ea_place_7", word: "شارع", hint: "Street", arabic: "شارع" },
      { id: "ea_place_8", word: "مطار", hint: "Airport", arabic: "مطار" },
      { id: "ea_place_9", word: "جسر", hint: "Bridge", arabic: "جسر" },
      { id: "ea_place_10", word: "جبل", hint: "Mountain", arabic: "جبل" }
    ]
  },

  time: {
    name: "Time",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Time words",
    words: [
      { id: "ea_time_1", word: "صباح", hint: "Morning", arabic: "صباح" },
      { id: "ea_time_2", word: "مساء", hint: "Evening", arabic: "مساء" },
      { id: "ea_time_3", word: "غدا", hint: "Tomorrow", arabic: "غدا" },
      { id: "ea_time_4", word: "أمس", hint: "Yesterday", arabic: "أمس" },
      { id: "ea_time_5", word: "سنة", hint: "Year", arabic: "سنة" },
      { id: "ea_time_6", word: "شهر", hint: "Month", arabic: "شهر" },
      { id: "ea_time_7", word: "أسبوع", hint: "Week", arabic: "أسبوع" },
      { id: "ea_time_8", word: "ساعة", hint: "Hour", arabic: "ساعة" },
      { id: "ea_time_9", word: "دقيقة", hint: "Minute", arabic: "دقيقة" },
      { id: "ea_time_10", word: "ثانية", hint: "Second", arabic: "ثانية" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Nature",
    words: [
      { id: "ea_nat_1", word: "شجرة", hint: "Tree", arabic: "شجرة" },
      { id: "ea_nat_2", word: "زهرة", hint: "Flower", arabic: "زهرة" },
      { id: "ea_nat_3", word: "جبل", hint: "Mountain", arabic: "جبل" },
      { id: "ea_nat_4", word: "نهر", hint: "River", arabic: "نهر" },
      { id: "ea_nat_5", word: "غابة", hint: "Forest", arabic: "غابة" },
      { id: "ea_nat_6", word: "بحيرة", hint: "Lake", arabic: "بحيرة" },
      { id: "ea_nat_7", word: "بحر", hint: "Sea", arabic: "بحر" },
      { id: "ea_nat_8", word: "صحراء", hint: "Desert", arabic: "صحراء" },
      { id: "ea_nat_9", word: "جزيرة", hint: "Island", arabic: "جزيرة" },
      { id: "ea_nat_10", word: "سماء", hint: "Sky", arabic: "سماء" }
    ]
  },

  emotions: {
    name: "Emotions",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Feelings",
    words: [
      { id: "ea_emo_1", word: "سعيد", hint: "Happy", arabic: "سعيد" },
      { id: "ea_emo_2", word: "حزين", hint: "Sad", arabic: "حزين" },
      { id: "ea_emo_3", word: "غاضب", hint: "Angry", arabic: "غاضب" },
      { id: "ea_emo_4", word: "متعب", hint: "Tired", arabic: "متعب" },
      { id: "ea_emo_5", word: "عصبي", hint: "Nervous", arabic: "عصبي" },
      { id: "ea_emo_6", word: "هادئ", hint: "Calm", arabic: "هادئ" },
      { id: "ea_emo_7", word: "خائف", hint: "Afraid", arabic: "خائف" },
      { id: "ea_emo_8", word: "فخور", hint: "Proud", arabic: "فخور" },
      { id: "ea_emo_9", word: "متفائل", hint: "Hopeful", arabic: "متفائل" },
      { id: "ea_emo_10", word: "مبتهج", hint: "Joyful", arabic: "مبتهج" }
    ]
  }
};

export default wordBuilderCategories;
