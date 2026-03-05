
/**
 * ENGLISH → CHINESE WORD BUILDER
 * English → 中文
 * 
 * STRUCTURE:
 * - Each category must have: name, icon, color, level, description, words
 * - level options: "beginner", "intermediate", "advanced"
 * - color format: "from-[color]-400 to-[color]-500" (Tailwind gradient)
 * 
 * WORD FORMAT:
 * {
 *   id: "unique_id",
 *   word: "中文" (for gameplay, as per outline),
 *   hint: "English translation",
 *   chinese: "中文" (for reference, same as 'word' in this updated structure)
 * }
 * 
 * GUIDELINES:
 * - The 'word' field now uses Chinese characters for direct recognition/matching.
 * - Start with shorter words (3-5 letters equivalent in pinyin) for beginners
 * - Progress to longer words (6-10 letters equivalent in pinyin) for advanced
 * - Choose words that are practical and commonly used
 * - Include Chinese characters for reference
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Beginner",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Simple Chinese words",
    words: [
      { id: "ec_word_1", word: "你好", hint: "Hello", chinese: "你好" },
      { id: "ec_word_2", word: "房子", hint: "House", chinese: "房子" },
      { id: "ec_word_3", word: "爱", hint: "Love", chinese: "爱" },
      { id: "ec_word_4", word: "水", hint: "Water", chinese: "水" },
      { id: "ec_word_5", word: "猫", hint: "Cat", chinese: "猫" },
      { id: "ec_word_6", word: "狗", hint: "Dog", chinese: "狗" },
      { id: "ec_word_7", word: "书", hint: "Book", chinese: "书" },
      { id: "ec_word_8", word: "太阳", hint: "Sun", chinese: "太阳" },
      { id: "ec_word_9", word: "月亮", hint: "Moon", chinese: "月亮" },
      { id: "ec_word_10", word: "星星", hint: "Star", chinese: "星星" }
    ]
  },

  colors: {
    name: "Colors",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Color names",
    words: [
      { id: "ec_col_1", word: "红色", hint: "Red", chinese: "红色" },
      { id: "ec_col_2", word: "蓝色", hint: "Blue", chinese: "蓝色" },
      { id: "ec_col_3", word: "绿色", hint: "Green", chinese: "绿色" },
      { id: "ec_col_4", word: "黄色", hint: "Yellow", chinese: "黄色" },
      { id: "ec_col_5", word: "白色", hint: "White", chinese: "白色" },
      { id: "ec_col_6", word: "黑色", hint: "Black", chinese: "黑色" },
      { id: "ec_col_7", word: "橙色", hint: "Orange", chinese: "橙色" },
      { id: "ec_col_8", word: "紫色", hint: "Purple", chinese: "紫色" },
      { id: "ec_col_9", word: "粉色", hint: "Pink", chinese: "粉色" },
      { id: "ec_col_10", word: "棕色", hint: "Brown", chinese: "棕色" }
    ]
  },

  family: {
    name: "Family",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Family members",
    words: [
      { id: "ec_fam_1", word: "父亲", hint: "Father", chinese: "父亲" },
      { id: "ec_fam_2", word: "母亲", hint: "Mother", chinese: "母亲" },
      { id: "ec_fam_3", word: "哥哥", hint: "Brother", chinese: "哥哥" },
      { id: "ec_fam_4", word: "姐姐", hint: "Sister", chinese: "姐姐" },
      { id: "ec_fam_5", word: "儿子", hint: "Son", chinese: "儿子" },
      { id: "ec_fam_6", word: "女儿", hint: "Daughter", chinese: "女儿" },
      { id: "ec_fam_7", word: "叔叔", hint: "Uncle", chinese: "叔叔" },
      { id: "ec_fam_8", word: "阿姨", hint: "Aunt", chinese: "阿姨" },
      { id: "ec_fam_9", word: "表哥", hint: "Cousin", chinese: "表哥" },
      { id: "ec_fam_10", word: "家庭", hint: "Family", chinese: "家庭" }
    ]
  },

  house: {
    name: "House",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Household items",
    words: [
      { id: "ec_house_1", word: "桌子", hint: "Table", chinese: "桌子" },
      { id: "ec_house_2", word: "椅子", hint: "Chair", chinese: "椅子" },
      { id: "ec_house_3", word: "床", hint: "Bed", chinese: "床" },
      { id: "ec_house_4", word: "门", hint: "Door", chinese: "门" },
      { id: "ec_house_5", word: "窗户", hint: "Window", chinese: "窗户" },
      { id: "ec_house_6", word: "厨房", hint: "Kitchen", chinese: "厨房" },
      { id: "ec_house_7", word: "卧室", hint: "Bedroom", chinese: "卧室" },
      { id: "ec_house_8", word: "浴室", hint: "Bathroom", chinese: "浴室" },
      { id: "ec_house_9", word: "花园", hint: "Garden", chinese: "花园" },
      { id: "ec_house_10", word: "屋顶", hint: "Roof", chinese: "屋顶" }
    ]
  },

  food: {
    name: "Food",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popular food",
    words: [
      { id: "ec_food_1", word: "面包", hint: "Bread", chinese: "面包" },
      { id: "ec_food_2", word: "牛奶", hint: "Milk", chinese: "牛奶" },
      { id: "ec_food_3", word: "苹果", hint: "Apple", chinese: "苹果" },
      { id: "ec_food_4", word: "奶酪", hint: "Cheese", chinese: "奶酪" },
      { id: "ec_food_5", word: "肉", hint: "Meat", chinese: "肉" },
      { id: "ec_food_6", word: "鱼", hint: "Fish", chinese: "鱼" },
      { id: "ec_food_7", word: "鸡蛋", hint: "Egg", chinese: "鸡蛋" },
      { id: "ec_food_8", word: "米饭", hint: "Rice", chinese: "米饭" },
      { id: "ec_food_9", word: "蔬菜", hint: "Vegetable", chinese: "蔬菜" },
      { id: "ec_food_10", word: "水果", hint: "Fruit", chinese: "水果" }
    ]
  },

  animals: {
    name: "Animals",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Animal names",
    words: [
      { id: "ec_ani_1", word: "马", hint: "Horse", chinese: "马" },
      { id: "ec_ani_2", word: "牛", hint: "Cow", chinese: "牛" },
      { id: "ec_ani_3", word: "猪", hint: "Pig", chinese: "猪" },
      { id: "ec_ani_4", word: "鸡", hint: "Chicken", chinese: "鸡" },
      { id: "ec_ani_5", word: "鸟", hint: "Bird", chinese: "鸟" },
      { id: "ec_ani_6", word: "老鼠", hint: "Mouse", chinese: "老鼠" },
      { id: "ec_ani_7", word: "蛇", hint: "Snake", chinese: "蛇" },
      { id: "ec_ani_8", word: "狮子", hint: "Lion", chinese: "狮子" },
      { id: "ec_ani_9", word: "老虎", hint: "Tiger", chinese: "老虎" },
      { id: "ec_ani_10", word: "大象", hint: "Elephant", chinese: "大象" }
    ]
  },

  places: {
    name: "Places",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Locations",
    words: [
      { id: "ec_place_1", word: "城市", hint: "City", chinese: "城市" },
      { id: "ec_place_2", word: "海滩", hint: "Beach", chinese: "海滩" },
      { id: "ec_place_3", word: "公园", hint: "Park", chinese: "公园" },
      { id: "ec_place_4", word: "学校", hint: "School", chinese: "学校" },
      { id: "ec_place_5", word: "医院", hint: "Hospital", chinese: "医院" },
      { id: "ec_place_6", word: "商店", hint: "Store", chinese: "商店" },
      { id: "ec_place_7", word: "街道", hint: "Street", chinese: "街道" },
      { id: "ec_place_8", word: "机场", hint: "Airport", chinese: "机场" },
      { id: "ec_place_9", word: "桥", hint: "Bridge", chinese: "桥" },
      { id: "ec_place_10", word: "山", hint: "Mountain", chinese: "山" }
    ]
  },

  time: {
    name: "Time",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Time words",
    words: [
      { id: "ec_time_1", word: "早上", hint: "Morning", chinese: "早上" },
      { id: "ec_time_2", word: "晚上", hint: "Evening", chinese: "晚上" },
      { id: "ec_time_3", word: "明天", hint: "Tomorrow", chinese: "明天" },
      { id: "ec_time_4", word: "昨天", hint: "Yesterday", chinese: "昨天" },
      { id: "ec_time_5", word: "年", hint: "Year", chinese: "年" },
      { id: "ec_time_6", word: "月", hint: "Month", chinese: "月" },
      { id: "ec_time_7", word: "周", hint: "Week", chinese: "周" },
      { id: "ec_time_8", word: "小时", hint: "Hour", chinese: "小时" },
      { id: "ec_time_9", word: "分钟", hint: "Minute", chinese: "分钟" },
      { id: "ec_time_10", word: "秒", hint: "Second", chinese: "秒" }
    ]
  },

  nature: {
    name: "Nature",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Nature",
    words: [
      { id: "ec_nat_1", word: "树", hint: "Tree", chinese: "树" },
      { id: "ec_nat_2", word: "花", hint: "Flower", chinese: "花" },
      { id: "ec_nat_3", word: "山", hint: "Mountain", chinese: "山" },
      { id: "ec_nat_4", word: "河", hint: "River", chinese: "河" },
      { id: "ec_nat_5", word: "森林", hint: "Forest", chinese: "森林" },
      { id: "ec_nat_6", word: "湖", hint: "Lake", chinese: "湖" },
      { id: "ec_nat_7", word: "海", hint: "Sea", chinese: "海" },
      { id: "ec_nat_8", word: "沙漠", hint: "Desert", chinese: "沙漠" },
      { id: "ec_nat_9", word: "岛", hint: "Island", chinese: "岛" },
      { id: "ec_nat_10", word: "天空", hint: "Sky", chinese: "天空" }
    ]
  },

  emotions: {
    name: "Emotions",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Feelings",
    words: [
      { id: "ec_emo_1", word: "快乐", hint: "Happy", chinese: "快乐" },
      { id: "ec_emo_2", word: "悲伤", hint: "Sad", chinese: "悲伤" },
      { id: "ec_emo_3", word: "生气", hint: "Angry", chinese: "生气" },
      { id: "ec_emo_4", word: "累", hint: "Tired", chinese: "累" },
      { id: "ec_emo_5", word: "紧张", hint: "Nervous", chinese: "紧张" },
      { id: "ec_emo_6", word: "平静", hint: "Calm", chinese: "平静" },
      { id: "ec_emo_7", word: "害怕", hint: "Afraid", chinese: "害怕" },
      { id: "ec_emo_8", word: "自豪", hint: "Proud", chinese: "自豪" },
      { id: "ec_emo_9", word: "希望", hint: "Hopeful", chinese: "充满希望" },
      { id: "ec_emo_10", word: "快乐", hint: "Joyful", chinese: "欢乐" }
    ]
  }
};

export default wordBuilderCategories;
