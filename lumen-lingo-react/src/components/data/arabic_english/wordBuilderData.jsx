
/**
 * ARABIC → ENGLISH WORD BUILDER
 * 
 * Native Language: Arabic (العربية)
 * Target Language: English
 * 
 * STRUCTURE:
 * - Each category must have: name, icon, color, level, description, words
 * - level options: "beginner", "intermediate", "advanced"
 * - color format: "from-[color]-400 to-[color]-500" (Tailwind gradient)
 * 
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   word: "english_word" (lowercase, the word to build),
 *   hint: "تلميح بالعربية",
 *   english: "English word" (for reference)
 * }
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "المبتدئين",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "كلمات إنجليزية بسيطة",
    words: [
      { id: "ae_word_1", word: "hello", hint: "مرحباً", english: "Hello" },
      { id: "ae_word_2", word: "house", hint: "بيت", english: "House" },
      { id: "ae_word_3", word: "love", hint: "حب", english: "Love" },
      { id: "ae_word_4", word: "water", hint: "ماء", english: "Water" },
      { id: "ae_word_5", word: "cat", hint: "قط", english: "Cat" },
      { id: "ae_word_6", word: "book", hint: "كتاب", english: "Book" },
      { id: "ae_word_7", word: "sun", hint: "شمس", english: "Sun" },
      { id: "ae_word_8", word: "moon", hint: "قمر", english: "Moon" },
      { id: "ae_word_9", word: "day", hint: "يوم", english: "Day" },
      { id: "ae_word_10", word: "night", hint: "ليل", english: "Night" }
    ]
  },

  colors: {
    name: "الألوان",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "أسماء الألوان",
    words: [
      { id: "ae_col_1", word: "red", hint: "أحمر", english: "Red" },
      { id: "ae_col_2", word: "blue", hint: "أزرق", english: "Blue" },
      { id: "ae_col_3", word: "green", hint: "أخضر", english: "Green" },
      { id: "ae_col_4", word: "yellow", hint: "أصفر", english: "Yellow" },
      { id: "ae_col_5", word: "white", hint: "أبيض", english: "White" },
      { id: "ae_col_6", word: "black", hint: "أسود", english: "Black" },
      { id: "ae_col_7", word: "orange", hint: "برتقالي", english: "Orange" },
      { id: "ae_col_8", word: "purple", hint: "بنفسجي", english: "Purple" },
      { id: "ae_col_9", word: "pink", hint: "وردي", english: "Pink" },
      { id: "ae_col_10", word: "brown", hint: "بني", english: "Brown" }
    ]
  },

  family: {
    name: "العائلة",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "أفراد العائلة",
    words: [
      { id: "ae_fam_1", word: "father", hint: "أب", english: "Father" },
      { id: "ae_fam_2", word: "mother", hint: "أم", english: "Mother" },
      { id: "ae_fam_3", word: "brother", hint: "أخ", english: "Brother" },
      { id: "ae_fam_4", word: "sister", hint: "أخت", english: "Sister" },
      { id: "ae_fam_5", word: "son", hint: "ابن", english: "Son" },
      { id: "ae_fam_6", word: "daughter", hint: "ابنة", english: "Daughter" },
      { id: "ae_fam_7", word: "uncle", hint: "عم", english: "Uncle" },
      { id: "ae_fam_8", word: "aunt", hint: "عمة", english: "Aunt" },
      { id: "ae_fam_9", word: "cousin", hint: "ابن عم", english: "Cousin" },
      { id: "ae_fam_10", word: "family", hint: "عائلة", english: "Family" }
    ]
  },

  house: {
    name: "المنزل",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "أغراض منزلية",
    words: [
      { id: "ae_house_1", word: "table", hint: "طاولة", english: "Table" },
      { id: "ae_house_2", word: "chair", hint: "كرسي", english: "Chair" },
      { id: "ae_house_3", word: "bed", hint: "سرير", english: "Bed" },
      { id: "ae_house_4", word: "door", hint: "باب", english: "Door" },
      { id: "ae_house_5", word: "window", hint: "نافذة", english: "Window" },
      { id: "ae_house_6", word: "kitchen", hint: "مطبخ", english: "Kitchen" },
      { id: "ae_house_7", word: "bedroom", hint: "غرفة نوم", english: "Bedroom" },
      { id: "ae_house_8", word: "bathroom", hint: "حمام", english: "Bathroom" },
      { id: "ae_house_9", word: "garden", hint: "حديقة", english: "Garden" },
      { id: "ae_house_10", word: "roof", hint: "سقف", english: "Roof" }
    ]
  },

  food: {
    name: "الطعام",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "أطعمة شائعة",
    words: [
      { id: "ae_food_1", word: "bread", hint: "خبز", english: "Bread" },
      { id: "ae_food_2", word: "rice", hint: "أرز", english: "Rice" },
      { id: "ae_food_3", word: "meat", hint: "لحم", english: "Meat" },
      { id: "ae_food_4", word: "fish", hint: "سمك", english: "Fish" },
      { id: "ae_food_5", word: "chicken", hint: "دجاج", english: "Chicken" },
      { id: "ae_food_6", word: "vegetable", hint: "خضار", english: "Vegetable" },
      { id: "ae_food_7", word: "fruit", hint: "فاكهة", english: "Fruit" },
      { id: "ae_food_8", word: "milk", hint: "حليب", english: "Milk" },
      { id: "ae_food_9", word: "tea", hint: "شاي", english: "Tea" },
      { id: "ae_food_10", word: "coffee", hint: "قهوة", english: "Coffee" }
    ]
  },

  animals: {
    name: "الحيوانات",
    icon: Dog,
    color: "from-amber-400 to-yellow-500",
    level: "intermediate",
    description: "حيوانات شائعة",
    words: [
      { id: "ae_anim_1", word: "dog", hint: "كلب", english: "Dog" },
      { id: "ae_anim_2", word: "cat", hint: "قط", english: "Cat" },
      { id: "ae_anim_3", word: "bird", hint: "طائر", english: "Bird" },
      { id: "ae_anim_4", word: "fish", hint: "سمك", english: "Fish" },
      { id: "ae_anim_5", word: "horse", hint: "حصان", english: "Horse" },
      { id: "ae_anim_6", word: "cow", hint: "بقرة", english: "Cow" },
      { id: "ae_anim_7", word: "sheep", hint: "خروف", english: "Sheep" },
      { id: "ae_anim_8", word: "rabbit", hint: "أرنب", english: "Rabbit" },
      { id: "ae_anim_9", word: "mouse", hint: "فأر", english: "Mouse" },
      { id: "ae_anim_10", word: "elephant", hint: "فيل", english: "Elephant" }
    ]
  },

  places: {
    name: "الأماكن",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "أماكن شائعة",
    words: [
      { id: "ae_place_1", word: "city", hint: "مدينة", english: "City" },
      { id: "ae_place_2", word: "store", hint: "متجر", english: "Store" },
      { id: "ae_place_3", word: "school", hint: "مدرسة", english: "School" },
      { id: "ae_place_4", word: "hospital", hint: "مستشفى", english: "Hospital" },
      { id: "ae_place_5", word: "bank", hint: "بنك", english: "Bank" },
      { id: "ae_place_6", word: "park", hint: "حديقة", english: "Park" },
      { id: "ae_place_7", word: "beach", hint: "شاطئ", english: "Beach" },
      { id: "ae_place_8", word: "mountain", hint: "جبل", english: "Mountain" },
      { id: "ae_place_9", word: "sea", hint: "بحر", english: "Sea" },
      { id: "ae_place_10", word: "river", hint: "نهر", english: "River" }
    ]
  },

  time: {
    name: "الوقت",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "advanced",
    description: "كلمات متعلقة بالوقت",
    words: [
      { id: "ae_time_1", word: "hour", hint: "ساعة", english: "Hour" },
      { id: "ae_time_2", word: "minute", hint: "دقيقة", english: "Minute" },
      { id: "ae_time_3", word: "second", hint: "ثانية", english: "Second" },
      { id: "ae_time_4", word: "morning", hint: "صباح", english: "Morning" },
      { id: "ae_time_5", word: "afternoon", hint: "بعد الظهر", english: "Afternoon" },
      { id: "ae_time_6", word: "evening", hint: "مساء", english: "Evening" },
      { id: "ae_time_7", word: "tomorrow", hint: "غداً", english: "Tomorrow" },
      { id: "ae_time_8", word: "yesterday", hint: "أمس", english: "Yesterday" },
      { id: "ae_time_9", word: "week", hint: "أسبوع", english: "Week" },
      { id: "ae_time_10", word: "year", hint: "سنة", english: "Year" }
    ]
  },

  nature: {
    name: "الطبيعة",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "عناصر الطبيعة",
    words: [
      { id: "ae_nat_1", word: "tree", hint: "شجرة", english: "Tree" },
      { id: "ae_nat_2", word: "flower", hint: "زهرة", english: "Flower" },
      { id: "ae_nat_3", word: "grass", hint: "عشب", english: "Grass" },
      { id: "ae_nat_4", word: "stone", hint: "حجر", english: "Stone" },
      { id: "ae_nat_5", word: "earth", hint: "أرض", english: "Earth" },
      { id: "ae_nat_6", word: "sky", hint: "سماء", english: "Sky" },
      { id: "ae_nat_7", word: "cloud", hint: "غيمة", english: "Cloud" },
      { id: "ae_nat_8", word: "rain", hint: "مطر", english: "Rain" },
      { id: "ae_nat_9", word: "wind", hint: "رياح", english: "Wind" },
      { id: "ae_nat_10", word: "snow", hint: "ثلج", english: "Snow" }
    ]
  },

  emotions: {
    name: "المشاعر",
    icon: Heart,
    color: "from-rose-400 to-red-500",
    level: "advanced",
    description: "المشاعر والعواطف",
    words: [
      { id: "ae_emo_1", word: "happy", hint: "سعيد", english: "Happy" },
      { id: "ae_emo_2", word: "sad", hint: "حزين", english: "Sad" },
      { id: "ae_emo_3", word: "angry", hint: "غاضب", english: "Angry" },
      { id: "ae_emo_4", word: "excited", hint: "متحمس", english: "Excited" },
      { id: "ae_emo_5", word: "tired", hint: "متعب", english: "Tired" },
      { id: "ae_emo_6", word: "worried", hint: "قلق", english: "Worried" },
      { id: "ae_emo_7", word: "love", hint: "حب", english: "Love" },
      { id: "ae_emo_8", word: "kind", hint: "لطيف", english: "Kind" },
      { id: "ae_emo_9", word: "grateful", hint: "ممتن", english: "Grateful" },
      { id: "ae_emo_10", word: "confident", hint: "واثق", english: "Confident" }
    ]
  }
};

export default wordBuilderCategories;
