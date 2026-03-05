/**
 * POLISH → CHINESE WORD BUILDER
 * Polski → 中文
 */

import { Target, Palette, Users, Home, UtensilsCrossed, Dog, MapPin, Clock, TreePine, Heart } from "lucide-react";

export const wordBuilderCategories = {
  beginner: {
    name: "Początkujący",
    icon: Target,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    description: "Proste słowa chińskie",
    words: [
      { id: "pc_word_1", word: "你好", hint: "Cześć", chinese: "你好" },
      { id: "pc_word_2", word: "房子", hint: "Dom", chinese: "房子" },
      { id: "pc_word_3", word: "爱", hint: "Miłość", chinese: "爱" },
      { id: "pc_word_4", word: "水", hint: "Woda", chinese: "水" },
      { id: "pc_word_5", word: "猫", hint: "Kot", chinese: "猫" },
      { id: "pc_word_6", word: "狗", hint: "Pies", chinese: "狗" },
      { id: "pc_word_7", word: "书", hint: "Książka", chinese: "书" },
      { id: "pc_word_8", word: "太阳", hint: "Słońce", chinese: "太阳" },
      { id: "pc_word_9", word: "月亮", hint: "Księżyc", chinese: "月亮" },
      { id: "pc_word_10", word: "星星", hint: "Gwiazda", chinese: "星星" }
    ]
  },

  colors: {
    name: "Kolory",
    icon: Palette,
    color: "from-purple-400 to-pink-500",
    level: "beginner",
    description: "Nazwy kolorów",
    words: [
      { id: "pc_col_1", word: "红色", hint: "Czerwony", chinese: "红色" },
      { id: "pc_col_2", word: "蓝色", hint: "Niebieski", chinese: "蓝色" },
      { id: "pc_col_3", word: "绿色", hint: "Zielony", chinese: "绿色" },
      { id: "pc_col_4", word: "黄色", hint: "Żółty", chinese: "黄色" },
      { id: "pc_col_5", word: "白色", hint: "Biały", chinese: "白色" },
      { id: "pc_col_6", word: "黑色", hint: "Czarny", chinese: "黑色" },
      { id: "pc_col_7", word: "橙色", hint: "Pomarańczowy", chinese: "橙色" },
      { id: "pc_col_8", word: "紫色", hint: "Fioletowy", chinese: "紫色" },
      { id: "pc_col_9", word: "粉色", hint: "Różowy", chinese: "粉色" },
      { id: "pc_col_10", word: "棕色", hint: "Brązowy", chinese: "棕色" }
    ]
  },

  family: {
    name: "Rodzina",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    description: "Członkowie rodziny",
    words: [
      { id: "pc_fam_1", word: "父亲", hint: "Ojciec", chinese: "父亲" },
      { id: "pc_fam_2", word: "母亲", hint: "Matka", chinese: "母亲" },
      { id: "pc_fam_3", word: "哥哥", hint: "Brat", chinese: "哥哥" },
      { id: "pc_fam_4", word: "姐姐", hint: "Siostra", chinese: "姐姐" },
      { id: "pc_fam_5", word: "儿子", hint: "Syn", chinese: "儿子" },
      { id: "pc_fam_6", word: "女儿", hint: "Córka", chinese: "女儿" },
      { id: "pc_fam_7", word: "叔叔", hint: "Wujek", chinese: "叔叔" },
      { id: "pc_fam_8", word: "阿姨", hint: "Ciocia", chinese: "阿姨" },
      { id: "pc_fam_9", word: "表哥", hint: "Kuzyn", chinese: "表哥" },
      { id: "pc_fam_10", word: "家庭", hint: "Rodzina", chinese: "家庭" }
    ]
  },

  house: {
    name: "Dom",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "intermediate",
    description: "Przedmioty domowe",
    words: [
      { id: "pc_house_1", word: "桌子", hint: "Stół", chinese: "桌子" },
      { id: "pc_house_2", word: "椅子", hint: "Krzesło", chinese: "椅子" },
      { id: "pc_house_3", word: "床", hint: "Łóżko", chinese: "床" },
      { id: "pc_house_4", word: "门", hint: "Drzwi", chinese: "门" },
      { id: "pc_house_5", word: "窗户", hint: "Okno", chinese: "窗户" },
      { id: "pc_house_6", word: "厨房", hint: "Kuchnia", chinese: "厨房" },
      { id: "pc_house_7", word: "卧室", hint: "Sypialnia", chinese: "卧室" },
      { id: "pc_house_8", word: "浴室", hint: "Łazienka", chinese: "浴室" },
      { id: "pc_house_9", word: "花园", hint: "Ogród", chinese: "花园" },
      { id: "pc_house_10", word: "屋顶", hint: "Dach", chinese: "屋顶" }
    ]
  },

  food: {
    name: "Jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "intermediate",
    description: "Popularne jedzenie",
    words: [
      { id: "pc_food_1", word: "面包", hint: "Chleb", chinese: "面包" },
      { id: "pc_food_2", word: "牛奶", hint: "Mleko", chinese: "牛奶" },
      { id: "pc_food_3", word: "苹果", hint: "Jabłko", chinese: "苹果" },
      { id: "pc_food_4", word: "奶酪", hint: "Ser", chinese: "奶酪" },
      { id: "pc_food_5", word: "肉", hint: "Mięso", chinese: "肉" },
      { id: "pc_food_6", word: "鱼", hint: "Ryba", chinese: "鱼" },
      { id: "pc_food_7", word: "鸡蛋", hint: "Jajko", chinese: "鸡蛋" },
      { id: "pc_food_8", word: "米饭", hint: "Ryż", chinese: "米饭" },
      { id: "pc_food_9", word: "蔬菜", hint: "Warzywo", chinese: "蔬菜" },
      { id: "pc_food_10", word: "水果", hint: "Owoc", chinese: "水果" }
    ]
  },

  animals: {
    name: "Zwierzęta",
    icon: Dog,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    description: "Nazwy zwierząt",
    words: [
      { id: "pc_ani_1", word: "马", hint: "Koń", chinese: "马" },
      { id: "pc_ani_2", word: "牛", hint: "Krowa", chinese: "牛" },
      { id: "pc_ani_3", word: "猪", hint: "Świnia", chinese: "猪" },
      { id: "pc_ani_4", word: "鸡", hint: "Kurczak", chinese: "鸡" },
      { id: "pc_ani_5", word: "鸟", hint: "Ptak", chinese: "鸟" },
      { id: "pc_ani_6", word: "老鼠", hint: "Mysz", chinese: "老鼠" },
      { id: "pc_ani_7", word: "蛇", hint: "Wąż", chinese: "蛇" },
      { id: "pc_ani_8", word: "狮子", hint: "Lew", chinese: "狮子" },
      { id: "pc_ani_9", word: "老虎", hint: "Tygrys", chinese: "老虎" },
      { id: "pc_ani_10", word: "大象", hint: "Słoń", chinese: "大象" }
    ]
  },

  places: {
    name: "Miejsca",
    icon: MapPin,
    color: "from-red-400 to-pink-500",
    level: "intermediate",
    description: "Lokalizacje",
    words: [
      { id: "pc_place_1", word: "城市", hint: "Miasto", chinese: "城市" },
      { id: "pc_place_2", word: "海滩", hint: "Plaża", chinese: "海滩" },
      { id: "pc_place_3", word: "公园", hint: "Park", chinese: "公园" },
      { id: "pc_place_4", word: "学校", hint: "Szkoła", chinese: "学校" },
      { id: "pc_place_5", word: "医院", hint: "Szpital", chinese: "医院" },
      { id: "pc_place_6", word: "商店", hint: "Sklep", chinese: "商店" },
      { id: "pc_place_7", word: "街道", hint: "Ulica", chinese: "街道" },
      { id: "pc_place_8", word: "机场", hint: "Lotnisko", chinese: "机场" },
      { id: "pc_place_9", word: "桥", hint: "Most", chinese: "桥" },
      { id: "pc_place_10", word: "山", hint: "Góra", chinese: "山" }
    ]
  },

  time: {
    name: "Czas",
    icon: Clock,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    description: "Słowa związane z czasem",
    words: [
      { id: "pc_time_1", word: "早上", hint: "Ranek", chinese: "早上" },
      { id: "pc_time_2", word: "晚上", hint: "Wieczór", chinese: "晚上" },
      { id: "pc_time_3", word: "明天", hint: "Jutro", chinese: "明天" },
      { id: "pc_time_4", word: "昨天", hint: "Wczoraj", chinese: "昨天" },
      { id: "pc_time_5", word: "年", hint: "Rok", chinese: "年" },
      { id: "pc_time_6", word: "月", hint: "Miesiąc", chinese: "月" },
      { id: "pc_time_7", word: "周", hint: "Tydzień", chinese: "周" },
      { id: "pc_time_8", word: "小时", hint: "Godzina", chinese: "小时" },
      { id: "pc_time_9", word: "分钟", hint: "Minuta", chinese: "分钟" },
      { id: "pc_time_10", word: "秒", hint: "Sekunda", chinese: "秒" }
    ]
  },

  nature: {
    name: "Natura",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "advanced",
    description: "Natura",
    words: [
      { id: "pc_nat_1", word: "树", hint: "Drzewo", chinese: "树" },
      { id: "pc_nat_2", word: "花", hint: "Kwiat", chinese: "花" },
      { id: "pc_nat_3", word: "山", hint: "Góra", chinese: "山" },
      { id: "pc_nat_4", word: "河", hint: "Rzeka", chinese: "河" },
      { id: "pc_nat_5", word: "森林", hint: "Las", chinese: "森林" },
      { id: "pc_nat_6", word: "湖", hint: "Jezioro", chinese: "湖" },
      { id: "pc_nat_7", word: "海", hint: "Morze", chinese: "海" },
      { id: "pc_nat_8", word: "沙漠", hint: "Pustynia", chinese: "沙漠" },
      { id: "pc_nat_9", word: "岛", hint: "Wyspa", chinese: "岛" },
      { id: "pc_nat_10", word: "天空", hint: "Niebo", chinese: "天空" }
    ]
  },

  emotions: {
    name: "Emocje",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "advanced",
    description: "Uczucia",
    words: [
      { id: "pc_emo_1", word: "快乐", hint: "Szczęśliwy", chinese: "快乐" },
      { id: "pc_emo_2", word: "悲伤", hint: "Smutny", chinese: "悲伤" },
      { id: "pc_emo_3", word: "生气", hint: "Zły", chinese: "生气" },
      { id: "pc_emo_4", word: "累", hint: "Zmęczony", chinese: "累" },
      { id: "pc_emo_5", word: "紧张", hint: "Zdenerwowany", chinese: "紧张" },
      { id: "pc_emo_6", word: "平静", hint: "Spokojny", chinese: "平静" },
      { id: "pc_emo_7", word: "害怕", hint: "Przestraszony", chinese: "害怕" },
      { id: "pc_emo_8", word: "自豪", hint: "Dumny", chinese: "自豪" },
      { id: "pc_emo_9", word: "希望", hint: "Pełen nadziei", chinese: "充满希望" },
      { id: "pc_emo_10", word: "快乐", hint: "Radosny", chinese: "欢乐" }
    ]
  }
};

export default wordBuilderCategories;