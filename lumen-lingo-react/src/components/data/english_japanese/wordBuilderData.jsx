
/**
 * ENGLISH → JAPANESE WORD BUILDER
 * English → 日本語
 * 
 * STRUCTURE:
 * - Each category must have: name, icon, color, level, description, words
 * - level options: "beginner", "intermediate", "advanced"
 * - color format: "from-[color]-400 to-[color]-500" (Tailwind gradient)
 * 
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   word: "日本語" (for gameplay, hiragana/katakana),
 *   hint: "English translation",
 *   japanese: "日本語" (for reference, hiragana/katakana/kanji as appropriate)
 * }
 * 
 * GUIDELINES:
 * - Use hiragana/katakana for the word to build
 * - Start with shorter words (3-5 letters) for beginners
 * - Progress to longer words (6-10 letters) for advanced
 * - Choose words that are practical and commonly used
 * - Include Japanese characters for reference
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Beginner",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Simple Japanese words",
    words: [
      { id: "ej_word_1", word: "こんにちは", hint: "Hello", japanese: "こんにちは" },
      { id: "ej_word_2", word: "いえ", hint: "House", japanese: "いえ" },
      { id: "ej_word_3", word: "あい", hint: "Love", japanese: "あい" },
      { id: "ej_word_4", word: "みず", hint: "Water", japanese: "みず" },
      { id: "ej_word_5", word: "ねこ", hint: "Cat", japanese: "ねこ" },
      { id: "ej_word_6", word: "いぬ", hint: "Dog", japanese: "いぬ" },
      { id: "ej_word_7", word: "ほん", hint: "Book", japanese: "ほん" },
      { id: "ej_word_8", word: "たいよう", hint: "Sun", japanese: "たいよう" },
      { id: "ej_word_9", word: "つき", hint: "Moon", japanese: "つき" },
      { id: "ej_word_10", word: "ほし", hint: "Star", japanese: "ほし" }
    ]
  },

  colors: {
    name: "Colors",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Color names",
    words: [
      { id: "ej_col_1", word: "あか", hint: "Red", japanese: "あか" },
      { id: "ej_col_2", word: "あお", hint: "Blue", japanese: "あお" },
      { id: "ej_col_3", word: "みどり", hint: "Green", japanese: "みどり" },
      { id: "ej_col_4", word: "きいろ", hint: "Yellow", japanese: "きいろ" },
      { id: "ej_col_5", word: "しろ", hint: "White", japanese: "しろ" },
      { id: "ej_col_6", word: "くろ", hint: "Black", japanese: "くろ" },
      { id: "ej_col_7", word: "オレンジ", hint: "Orange", japanese: "オレンジ" },
      { id: "ej_col_8", word: "むらさき", hint: "Purple", japanese: "むらさき" },
      { id: "ej_col_9", word: "ピンク", hint: "Pink", japanese: "ピンク" },
      { id: "ej_col_10", word: "ちゃいろ", hint: "Brown", japanese: "ちゃいろ" }
    ]
  },

  family: {
    name: "Family",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Family members",
    words: [
      { id: "ej_fam_1", word: "ちち", hint: "Father", japanese: "ちち" },
      { id: "ej_fam_2", word: "はは", hint: "Mother", japanese: "はは" },
      { id: "ej_fam_3", word: "あに", hint: "Brother", japanese: "あに" },
      { id: "ej_fam_4", word: "あね", hint: "Sister", japanese: "あね" },
      { id: "ej_fam_5", word: "むすこ", hint: "Son", japanese: "むすこ" },
      { id: "ej_fam_6", word: "むすめ", hint: "Daughter", japanese: "むすめ" },
      { id: "ej_fam_7", word: "おじ", hint: "Uncle", japanese: "おじ" },
      { id: "ej_fam_8", word: "おば", hint: "Aunt", japanese: "おば" },
      { id: "ej_fam_9", word: "いとこ", hint: "Cousin", japanese: "いとこ" },
      { id: "ej_fam_10", word: "かぞく", hint: "Family", japanese: "かぞく" }
    ]
  },

  house: {
    name: "House",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Household items",
    words: [
      { id: "ej_house_1", word: "テーブル", hint: "Table", japanese: "テーブル" },
      { id: "ej_house_2", word: "いす", hint: "Chair", japanese: "いす" },
      { id: "ej_house_3", word: "ベッド", hint: "Bed", japanese: "ベッド" },
      { id: "ej_house_4", word: "ドア", hint: "Door", japanese: "ドア" },
      { id: "ej_house_5", word: "まど", hint: "Window", japanese: "まど" },
      { id: "ej_house_6", word: "だいどころ", hint: "Kitchen", japanese: "だいどころ" },
      { id: "ej_house_7", word: "しんしつ", hint: "Bedroom", japanese: "しんしつ" },
      { id: "ej_house_8", word: "おふろ", hint: "Bathroom", japanese: "おふろ" },
      { id: "ej_house_9", word: "にわ", hint: "Garden", japanese: "にわ" },
      { id: "ej_house_10", word: "やね", hint: "Roof", japanese: "やね" }
    ]
  },

  food: {
    name: "Food",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popular food",
    words: [
      { id: "ej_food_1", word: "パン", hint: "Bread", japanese: "パン" },
      { id: "ej_food_2", word: "ぎゅうにゅう", hint: "Milk", japanese: "ぎゅうにゅう" },
      { id: "ej_food_3", word: "りんご", hint: "Apple", japanese: "りんご" },
      { id: "ej_food_4", word: "チーズ", hint: "Cheese", japanese: "チーズ" },
      { id: "ej_food_5", word: "にく", hint: "Meat", japanese: "にく" },
      { id: "ej_food_6", word: "さかな", hint: "Fish", japanese: "さかな" },
      { id: "ej_food_7", word: "たまご", hint: "Egg", japanese: "たまご" },
      { id: "ej_food_8", word: "ごはん", hint: "Rice", japanese: "ごはん" },
      { id: "ej_food_9", word: "やさい", hint: "Vegetable", japanese: "やさい" },
      { id: "ej_food_10", word: "くだもの", hint: "Fruit", japanese: "くだもの" }
    ]
  },

  animals: {
    name: "Animals",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Animal names",
    words: [
      { id: "ej_ani_1", word: "うま", hint: "Horse", japanese: "うま" },
      { id: "ej_ani_2", word: "うし", hint: "Cow", japanese: "うし" },
      { id: "ej_ani_3", word: "ぶた", hint: "Pig", japanese: "ぶた" },
      { id: "ej_ani_4", word: "にわとり", hint: "Chicken", japanese: "にわとり" },
      { id: "ej_ani_5", word: "とり", hint: "Bird", japanese: "とり" },
      { id: "ej_ani_6", word: "ねずみ", hint: "Mouse", japanese: "ねずみ" },
      { id: "ej_ani_7", word: "へび", hint: "Snake", japanese: "へび" },
      { id: "ej_ani_8", word: "ライオン", hint: "Lion", japanese: "ライオン" },
      { id: "ej_ani_9", word: "トラ", hint: "Tiger", japanese: "トラ" },
      { id: "ej_ani_10", word: "ぞう", hint: "Elephant", japanese: "ぞう" }
    ]
  },

  places: {
    name: "Places",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Locations",
    words: [
      { id: "ej_place_1", word: "まち", hint: "City", japanese: "まち" },
      { id: "ej_place_2", word: "ビーチ", hint: "Beach", japanese: "ビーチ" },
      { id: "ej_place_3", word: "こうえん", hint: "Park", japanese: "こうえん" },
      { id: "ej_place_4", word: "がっこう", hint: "School", japanese: "がっこう" },
      { id: "ej_place_5", word: "びょういん", hint: "Hospital", japanese: "びょういん" },
      { id: "ej_place_6", word: "みせ", hint: "Store", japanese: "みせ" },
      { id: "ej_place_7", word: "どおり", hint: "Street", japanese: "どおり" },
      { id: "ej_place_8", word: "くうこう", hint: "Airport", japanese: "くうこう" },
      { id: "ej_place_9", word: "はし", hint: "Bridge", japanese: "はし" },
      { id: "ej_place_10", word: "やま", hint: "Mountain", japanese: "やま" }
    ]
  },

  time: {
    name: "Time",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Time words",
    words: [
      { id: "ej_time_1", word: "あさ", hint: "Morning", japanese: "あさ" },
      { id: "ej_time_2", word: "ばん", hint: "Evening", japanese: "ばん" },
      { id: "ej_time_3", word: "あした", hint: "Tomorrow", japanese: "あした" },
      { id: "ej_time_4", word: "きのう", hint: "Yesterday", japanese: "きのう" },
      { id: "ej_time_5", word: "とし", hint: "Year", japanese: "とし" },
      { id: "ej_time_6", word: "つき", hint: "Month", japanese: "つき" },
      { id: "ej_time_7", word: "しゅう", hint: "Week", japanese: "しゅう" },
      { id: "ej_time_8", word: "じかん", hint: "Hour", japanese: "じかん" },
      { id: "ej_time_9", word: "ふん", hint: "Minute", japanese: "ふん" },
      { id: "ej_time_10", word: "びょう", hint: "Second", japanese: "びょう" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Nature",
    words: [
      { id: "ej_nat_1", word: "き", hint: "Tree", japanese: "き" },
      { id: "ej_nat_2", word: "はな", hint: "Flower", japanese: "はな" },
      { id: "ej_nat_3", word: "やま", hint: "Mountain", japanese: "やま" },
      { id: "ej_nat_4", word: "かわ", hint: "River", japanese: "かわ" },
      { id: "ej_nat_5", word: "もり", hint: "Forest", japanese: "もり" },
      { id: "ej_nat_6", word: "みずうみ", hint: "Lake", japanese: "みずうみ" },
      { id: "ej_nat_7", word: "うみ", hint: "Sea", japanese: "うみ" },
      { id: "ej_nat_8", word: "さばく", hint: "Desert", japanese: "さばく" },
      { id: "ej_nat_9", word: "しま", hint: "Island", japanese: "しま" },
      { id: "ej_nat_10", word: "そら", hint: "Sky", japanese: "そら" }
    ]
  },

  emotions: {
    name: "Emotions",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Feelings",
    words: [
      { id: "ej_emo_1", word: "しあわせ", hint: "Happy", japanese: "しあわせ" },
      { id: "ej_emo_2", word: "かなしい", hint: "Sad", japanese: "かなしい" },
      { id: "ej_emo_3", word: "おこる", hint: "Angry", japanese: "おこる" },
      { id: "ej_emo_4", word: "つかれた", hint: "Tired", japanese: "つかれた" },
      { id: "ej_emo_5", word: "きんちょう", hint: "Nervous", japanese: "きんちょう" },
      { id: "ej_emo_6", word: "おだやか", hint: "Calm", japanese: "おだやか" },
      { id: "ej_emo_7", word: "こわい", hint: "Afraid", japanese: "こわい" },
      { id: "ej_emo_8", word: "ほこり", hint: "Proud", japanese: "ほこり" },
      { id: "ej_emo_9", word: "きぼう", hint: "Hopeful", japanese: "きぼう" },
      { id: "ej_emo_10", word: "よろこび", hint: "Joyful", japanese: "よろこび" }
    ]
  }
};

export default wordBuilderCategories;
