
import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart, Dumbbell, BookOpen, Briefcase, Globe } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "初級",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "簡単な英語の単語",
    words: [
      { id: "je_word_1", word: "hello", hint: "こんにちは", english: "Hello" },
      { id: "je_word_2", word: "house", hint: "家", english: "House" },
      { id: "je_word_3", word: "love", hint: "愛", english: "Love" },
      { id: "je_word_4", word: "water", hint: "水", english: "Water" },
      { id: "je_word_5", word: "cat", hint: "猫", english: "Cat" },
      { id: "je_word_6", word: "book", hint: "本", english: "Book" },
      { id: "je_word_7", word: "sun", hint: "太陽", english: "Sun" },
      { id: "je_word_8", word: "moon", hint: "月", english: "Moon" },
      { id: "je_word_9", word: "day", hint: "日", english: "Day" },
      { id: "je_word_10", word: "night", hint: "夜", english: "Night" }
    ]
  },

  colors: {
    name: "色",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "色の名前",
    words: [
      { id: "je_col_1", word: "red", hint: "赤", english: "Red" },
      { id: "je_col_2", word: "blue", hint: "青", english: "Blue" },
      { id: "je_col_3", word: "green", hint: "緑", english: "Green" },
      { id: "je_col_4", word: "yellow", hint: "黄色", english: "Yellow" },
      { id: "je_col_5", word: "white", hint: "白", english: "White" },
      { id: "je_col_6", word: "black", hint: "黒", english: "Black" },
      { id: "je_col_7", word: "orange", hint: "オレンジ", english: "Orange" },
      { id: "je_col_8", word: "purple", hint: "紫", english: "Purple" },
      { id: "je_col_9", word: "pink", hint: "ピンク", english: "Pink" },
      { id: "je_col_10", word: "brown", hint: "茶色", english: "Brown" }
    ]
  },

  family: {
    name: "家族",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "家族のメンバー",
    words: [
      { id: "je_fam_1", word: "father", hint: "父", english: "Father" },
      { id: "je_fam_2", word: "mother", hint: "母", english: "Mother" },
      { id: "je_fam_3", word: "brother", hint: "兄弟", english: "Brother" },
      { id: "je_fam_4", word: "sister", hint: "姉妹", english: "Sister" },
      { id: "je_fam_5", word: "son", hint: "息子", english: "Son" },
      { id: "je_fam_6", word: "daughter", hint: "娘", english: "Daughter" },
      { id: "je_fam_7", word: "uncle", hint: "おじ", english: "Uncle" },
      { id: "je_fam_8", word: "aunt", hint: "おば", english: "Aunt" },
      { id: "je_fam_9", word: "cousin", hint: "いとこ", english: "Cousin" },
      { id: "je_fam_10", word: "family", hint: "家族", english: "Family" }
    ]
  },

  house: {
    name: "家",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "家庭用品",
    words: [
      { id: "je_house_1", word: "table", hint: "テーブル", english: "Table" },
      { id: "je_house_2", word: "chair", hint: "椅子", english: "Chair" },
      { id: "je_house_3", word: "bed", hint: "ベッド", english: "Bed" },
      { id: "je_house_4", word: "door", hint: "ドア", english: "Door" },
      { id: "je_house_5", word: "window", hint: "窓", english: "Window" },
      { id: "je_house_6", word: "kitchen", hint: "台所", english: "Kitchen" },
      { id: "je_house_7", word: "bedroom", hint: "寝室", english: "Bedroom" },
      { id: "je_house_8", word: "bathroom", hint: "浴室", english: "Bathroom" },
      { id: "je_house_9", word: "garden", hint: "庭", english: "Garden" },
      { id: "je_house_10", word: "roof", hint: "屋根", english: "Roof" }
    ]
  },

  food: {
    name: "食べ物",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "一般的な食べ物",
    words: [
      { id: "je_food_1", word: "bread", hint: "パン", english: "Bread" },
      { id: "je_food_2", word: "rice", hint: "ご飯", english: "Rice" },
      { id: "je_food_3", word: "fish", hint: "魚", english: "Fish" },
      { id: "je_food_4", word: "meat", hint: "肉", english: "Meat" },
      { id: "je_food_5", word: "vegetable", hint: "野菜", english: "Vegetable" },
      { id: "je_food_6", word: "fruit", hint: "果物", english: "Fruit" },
      { id: "je_food_7", word: "milk", hint: "牛乳", english: "Milk" },
      { id: "je_food_8", word: "tea", hint: "お茶", english: "Tea" },
      { id: "je_food_9", word: "coffee", hint: "コーヒー", english: "Coffee" },
      { id: "je_food_10", word: "water", hint: "水", english: "Water" }
    ]
  },

  animals: {
    name: "動物",
    icon: Dog,
    color: "from-amber-400 to-yellow-500",
    level: "intermediate",
    description: "一般的な動物",
    words: [
      { id: "je_anim_1", word: "dog", hint: "犬", english: "Dog" },
      { id: "je_anim_2", word: "cat", hint: "猫", english: "Cat" },
      { id: "je_anim_3", word: "bird", hint: "鳥", english: "Bird" },
      { id: "je_anim_4", word: "fish", hint: "魚", english: "Fish" },
      { id: "je_anim_5", word: "horse", hint: "馬", english: "Horse" },
      { id: "je_anim_6", word: "cow", hint: "牛", english: "Cow" },
      { id: "je_anim_7", word: "sheep", hint: "羊", english: "Sheep" },
      { id: "je_anim_8", word: "rabbit", hint: "うさぎ", english: "Rabbit" },
      { id: "je_anim_9", word: "mouse", hint: "ネズミ", english: "Mouse" },
      { id: "je_anim_10", word: "elephant", hint: "象", english: "Elephant" }
    ]
  },

  places: {
    name: "場所",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "一般的な場所",
    words: [
      { id: "je_place_1", word: "city", hint: "都市", english: "City" },
      { id: "je_place_2", word: "store", hint: "店", english: "Store" },
      { id: "je_place_3", word: "school", hint: "学校", english: "School" },
      { id: "je_place_4", word: "hospital", hint: "病院", english: "Hospital" },
      { id: "je_place_5", word: "bank", hint: "銀行", english: "Bank" },
      { id: "je_place_6", word: "park", hint: "公園", english: "Park" },
      { id: "je_place_7", word: "beach", hint: "ビーチ", english: "Beach" },
      { id: "je_place_8", word: "mountain", hint: "山", english: "Mountain" },
      { id: "je_place_9", word: "sea", hint: "海", english: "Sea" },
      { id: "je_place_10", word: "river", hint: "川", english: "River" }
    ]
  },

  time: {
    name: "時間",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "advanced",
    description: "時間に関する言葉",
    words: [
      { id: "je_time_1", word: "hour", hint: "時間", english: "Hour" },
      { id: "je_time_2", word: "minute", hint: "分", english: "Minute" },
      { id: "je_time_3", word: "second", hint: "秒", english: "Second" },
      { id: "je_time_4", word: "morning", hint: "朝", english: "Morning" },
      { id: "je_time_5", word: "afternoon", hint: "午後", english: "Afternoon" },
      { id: "je_time_6", word: "evening", hint: "夕方", english: "Evening" },
      { id: "je_time_7", word: "tomorrow", hint: "明日", english: "Tomorrow" },
      { id: "je_time_8", word: "yesterday", hint: "昨日", english: "Yesterday" },
      { id: "je_time_9", word: "week", hint: "週", english: "Week" },
      { id: "je_time_10", word: "year", hint: "年", english: "Year" }
    ]
  },

  nature: {
    name: "自然",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "自然の要素",
    words: [
      { id: "je_nat_1", word: "tree", hint: "木", english: "Tree" },
      { id: "je_nat_2", word: "flower", hint: "花", english: "Flower" },
      { id: "je_nat_3", word: "grass", hint: "草", english: "Grass" },
      { id: "je_nat_4", word: "stone", hint: "石", english: "Stone" },
      { id: "je_nat_5", word: "earth", hint: "地球", english: "Earth" },
      { id: "je_nat_6", word: "sky", hint: "空", english: "Sky" },
      { id: "je_nat_7", word: "cloud", hint: "雲", english: "Cloud" },
      { id: "je_nat_8", word: "rain", hint: "雨", english: "Rain" },
      { id: "je_nat_9", word: "wind", hint: "風", english: "Wind" },
      { id: "je_nat_10", word: "snow", hint: "雪", english: "Snow" }
    ]
  },

  emotions: {
    name: "感情",
    icon: Heart,
    color: "from-rose-400 to-red-500",
    level: "advanced",
    description: "感情と気持ち",
    words: [
      { id: "je_emo_1", word: "happy", hint: "嬉しい", english: "Happy" },
      { id: "je_emo_2", word: "sad", hint: "悲しい", english: "Sad" },
      { id: "je_emo_3", word: "angry", hint: "怒り", english: "Angry" },
      { id: "je_emo_4", word: "excited", hint: "興奮", english: "Excited" },
      { id: "je_emo_5", word: "tired", hint: "疲れた", english: "Tired" },
      { id: "je_emo_6", word: "worried", hint: "心配", english: "Worried" },
      { id: "je_emo_7", word: "love", hint: "愛", english: "Love" },
      { id: "je_emo_8", word: "kind", hint: "優しい", english: "Kind" },
      { id: "je_emo_9", word: "grateful", hint: "感謝", english: "Grateful" },
      { id: "je_emo_10", word: "confident", hint: "自信", english: "Confident" }
    ]
  }
};

export default wordBuilderCategories;
