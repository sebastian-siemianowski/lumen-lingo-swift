
import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart, Dumbbell, BookOpen, Briefcase, Globe } from "lucide-react";

/**
 * CHINESE → ENGLISH WORD BUILDER
 * 
 * Native Language: Chinese (中文)
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
 *   hint: "中文提示",
 *   english: "English word" (for reference)
 * }
 */
export const wordBuilderCategories = {
  beginner: {
    name: "初级",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "简单的英语单词",
    words: [
      { id: "ce_word_1", word: "hello", hint: "你好", english: "Hello" },
      { id: "ce_word_2", word: "house", hint: "房子", english: "House" },
      { id: "ce_word_3", word: "love", hint: "爱", english: "Love" },
      { id: "ce_word_4", word: "water", hint: "水", english: "Water" },
      { id: "ce_word_5", word: "cat", hint: "猫", english: "Cat" },
      { id: "ce_word_6", word: "book", hint: "书", english: "Book" },
      { id: "ce_word_7", word: "sun", hint: "太阳", english: "Sun" },
      { id: "ce_word_8", word: "moon", hint: "月亮", english: "Moon" },
      { id: "ce_word_9", word: "day", hint: "天", english: "Day" },
      { id: "ce_word_10", word: "night", hint: "夜晚", english: "Night" }
    ]
  },

  colors: {
    name: "颜色",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "颜色名称",
    words: [
      { id: "ce_col_1", word: "red", hint: "红色", english: "Red" },
      { id: "ce_col_2", word: "blue", hint: "蓝色", english: "Blue" },
      { id: "ce_col_3", word: "green", hint: "绿色", english: "Green" },
      { id: "ce_col_4", word: "yellow", hint: "黄色", english: "Yellow" },
      { id: "ce_col_5", word: "white", hint: "白色", english: "White" },
      { id: "ce_col_6", word: "black", hint: "黑色", english: "Black" },
      { id: "ce_col_7", word: "orange", hint: "橙色", english: "Orange" },
      { id: "ce_col_8", word: "purple", hint: "紫色", english: "Purple" },
      { id: "ce_col_9", word: "pink", hint: "粉红色", english: "Pink" },
      { id: "ce_col_10", word: "brown", hint: "棕色", english: "Brown" }
    ]
  },

  family: {
    name: "家庭",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "家庭成员",
    words: [
      { id: "ce_fam_1", word: "father", hint: "父亲", english: "Father" },
      { id: "ce_fam_2", word: "mother", hint: "母亲", english: "Mother" },
      { id: "ce_fam_3", word: "brother", hint: "兄弟", english: "Brother" },
      { id: "ce_fam_4", word: "sister", hint: "姐妹", english: "Sister" },
      { id: "ce_fam_5", word: "son", hint: "儿子", english: "Son" },
      { id: "ce_fam_6", word: "daughter", hint: "女儿", english: "Daughter" },
      { id: "ce_fam_7", word: "uncle", hint: "叔叔", english: "Uncle" },
      { id: "ce_fam_8", word: "aunt", hint: "阿姨", english: "Aunt" },
      { id: "ce_fam_9", word: "cousin", hint: "表兄弟", english: "Cousin" },
      { id: "ce_fam_10", word: "family", hint: "家庭", english: "Family" }
    ]
  },

  house: {
    name: "房屋",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "家居用品",
    words: [
      { id: "ce_house_1", word: "table", hint: "桌子", english: "Table" },
      { id: "ce_house_2", word: "chair", hint: "椅子", english: "Chair" },
      { id: "ce_house_3", word: "bed", hint: "床", english: "Bed" },
      { id: "ce_house_4", word: "door", hint: "门", english: "Door" },
      { id: "ce_house_5", word: "window", hint: "窗户", english: "Window" },
      { id: "ce_house_6", word: "kitchen", hint: "厨房", english: "Kitchen" },
      { id: "ce_house_7", word: "bedroom", hint: "卧室", english: "Bedroom" },
      { id: "ce_house_8", word: "bathroom", hint: "浴室", english: "Bathroom" },
      { id: "ce_house_9", word: "garden", hint: "花园", english: "Garden" },
      { id: "ce_house_10", word: "roof", hint: "屋顶", english: "Roof" }
    ]
  },

  food: {
    name: "食物",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "常见食物",
    words: [
      { id: "ce_food_1", word: "bread", hint: "面包", english: "Bread" },
      { id: "ce_food_2", word: "rice", hint: "米饭", english: "Rice" },
      { id: "ce_food_3", word: "noodles", hint: "面条", english: "Noodles" },
      { id: "ce_food_4", word: "meat", hint: "肉", english: "Meat" },
      { id: "ce_food_5", word: "fish", hint: "鱼", english: "Fish" },
      { id: "ce_food_6", word: "vegetable", hint: "蔬菜", english: "Vegetable" },
      { id: "ce_food_7", word: "fruit", hint: "水果", english: "Fruit" },
      { id: "ce_food_8", word: "milk", hint: "牛奶", english: "Milk" },
      { id: "ce_food_9", word: "tea", hint: "茶", english: "Tea" },
      { id: "ce_food_10", word: "coffee", hint: "咖啡", english: "Coffee" }
    ]
  },

  animals: {
    name: "动物",
    icon: Dog,
    color: "from-amber-400 to-yellow-500",
    level: "intermediate",
    description: "常见动物",
    words: [
      { id: "ce_anim_1", word: "dog", hint: "狗", english: "Dog" },
      { id: "ce_anim_2", word: "cat", hint: "猫", english: "Cat" },
      { id: "ce_anim_3", word: "bird", hint: "鸟", english: "Bird" },
      { id: "ce_anim_4", word: "fish", hint: "鱼", english: "Fish" },
      { id: "ce_anim_5", word: "horse", hint: "马", english: "Horse" },
      { id: "ce_anim_6", word: "cow", hint: "牛", english: "Cow" },
      { id: "ce_anim_7", word: "sheep", hint: "羊", english: "Sheep" },
      { id: "ce_anim_8", word: "rabbit", hint: "兔子", english: "Rabbit" },
      { id: "ce_anim_9", word: "mouse", hint: "老鼠", english: "Mouse" },
      { id: "ce_anim_10", word: "elephant", hint: "大象", english: "Elephant" }
    ]
  },

  places: {
    name: "地点",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "常见地点",
    words: [
      { id: "ce_place_1", word: "city", hint: "城市", english: "City" },
      { id: "ce_place_2", word: "store", hint: "商店", english: "Store" },
      { id: "ce_place_3", word: "school", hint: "学校", english: "School" },
      { id: "ce_place_4", word: "hospital", hint: "医院", english: "Hospital" },
      { id: "ce_place_5", word: "bank", hint: "银行", english: "Bank" },
      { id: "ce_place_6", word: "park", hint: "公园", english: "Park" },
      { id: "ce_place_7", word: "beach", hint: "海滩", english: "Beach" },
      { id: "ce_place_8", word: "mountain", hint: "山", english: "Mountain" },
      { id: "ce_place_9", word: "sea", hint: "海", english: "Sea" },
      { id: "ce_place_10", word: "river", hint: "河", english: "River" }
    ]
  },

  time: {
    name: "时间",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "advanced",
    description: "时间相关词汇",
    words: [
      { id: "ce_time_1", word: "hour", hint: "小时", english: "Hour" },
      { id: "ce_time_2", word: "minute", hint: "分钟", english: "Minute" },
      { id: "ce_time_3", word: "second", hint: "秒", english: "Second" },
      { id: "ce_time_4", word: "morning", hint: "早上", english: "Morning" },
      { id: "ce_time_5", word: "afternoon", hint: "下午", english: "Afternoon" },
      { id: "ce_time_6", word: "evening", hint: "晚上", english: "Evening" },
      { id: "ce_time_7", word: "tomorrow", hint: "明天", english: "Tomorrow" },
      { id: "ce_time_8", word: "yesterday", hint: "昨天", english: "Yesterday" },
      { id: "ce_time_9", word: "week", hint: "星期", english: "Week" },
      { id: "ce_time_10", word: "year", hint: "年", english: "Year" }
    ]
  },

  nature: {
    name: "自然",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "自然元素",
    words: [
      { id: "ce_nat_1", word: "tree", hint: "树", english: "Tree" },
      { id: "ce_nat_2", word: "flower", hint: "花", english: "Flower" },
      { id: "ce_nat_3", word: "grass", hint: "草", english: "Grass" },
      { id: "ce_nat_4", word: "stone", hint: "石头", english: "Stone" },
      { id: "ce_nat_5", word: "earth", hint: "地球", english: "Earth" },
      { id: "ce_nat_6", word: "sky", hint: "天空", english: "Sky" },
      { id: "ce_nat_7", word: "cloud", hint: "云", english: "Cloud" },
      { id: "ce_nat_8", word: "rain", hint: "雨", english: "Rain" },
      { id: "ce_nat_9", word: "wind", hint: "风", english: "Wind" },
      { id: "ce_nat_10", word: "snow", hint: "雪", english: "Snow" }
    ]
  },

  emotions: {
    name: "情感",
    icon: Heart,
    color: "from-rose-400 to-red-500",
    level: "advanced",
    description: "感情和情绪",
    words: [
      { id: "ce_emo_1", word: "happy", hint: "快乐", english: "Happy" },
      { id: "ce_emo_2", word: "sad", hint: "伤心", english: "Sad" },
      { id: "ce_emo_3", word: "angry", hint: "生气", english: "Angry" },
      { id: "ce_emo_4", word: "excited", hint: "兴奋", english: "Excited" },
      { id: "ce_emo_5", word: "tired", hint: "累", english: "Tired" },
      { id: "ce_emo_6", word: "worried", hint: "担心", english: "Worried" },
      { id: "ce_emo_7", word: "love", hint: "爱", english: "Love" },
      { id: "ce_emo_8", word: "kind", hint: "善良", english: "Kind" },
      { id: "ce_emo_9", word: "grateful", hint: "感激", english: "Grateful" },
      { id: "ce_emo_10", word: "confident", hint: "自信", english: "Confident" }
    ]
  }
};

export default wordBuilderCategories;
