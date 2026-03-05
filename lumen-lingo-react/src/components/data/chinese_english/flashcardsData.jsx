import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "问候语",
    description: "基本问候",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ce_greet_1", chinese: "你好", english: "Hello", example: "Hello, how are you?", exampleTranslation: "你好，你好吗？" },
      { id: "ce_greet_2", chinese: "早上好", english: "Good morning", example: "Good morning, sir", exampleTranslation: "早上好，先生" },
      { id: "ce_greet_3", chinese: "晚上好", english: "Good evening", example: "Good evening, how are you?", exampleTranslation: "晚上好，你好吗？" },
      { id: "ce_greet_4", chinese: "晚安", english: "Good night", example: "Good night, sleep well", exampleTranslation: "晚安，睡个好觉" },
      { id: "ce_greet_5", chinese: "再见", english: "Goodbye", example: "Goodbye, see you later", exampleTranslation: "再见，回头见" },
      { id: "ce_greet_6", chinese: "谢谢", english: "Thank you", example: "Thank you for your help", exampleTranslation: "谢谢你的帮助" },
      { id: "ce_greet_7", chinese: "请", english: "Please", example: "Please, help me", exampleTranslation: "请帮助我" },
      { id: "ce_greet_8", chinese: "对不起", english: "Excuse me", example: "Excuse me, I'm late", exampleTranslation: "对不起，我迟到了" },
      { id: "ce_greet_9", chinese: "是", english: "Yes", example: "Yes, I agree", exampleTranslation: "是的，我同意" },
      { id: "ce_greet_10", chinese: "不", english: "No", example: "No, I don't want", exampleTranslation: "不，我不想要" }
    ]
  },

  family: {
    name: "家庭",
    description: "家庭成员",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "ce_fam_1", chinese: "父亲", english: "Father", example: "My father works a lot", exampleTranslation: "我父亲工作很多" },
      { id: "ce_fam_2", chinese: "母亲", english: "Mother", example: "My mother cooks well", exampleTranslation: "我母亲做饭很好" },
      { id: "ce_fam_3", chinese: "兄弟", english: "Brother", example: "My brother studies medicine", exampleTranslation: "我哥哥学医" },
      { id: "ce_fam_4", chinese: "姐妹", english: "Sister", example: "My sister is a teacher", exampleTranslation: "我姐姐是老师" },
      { id: "ce_fam_5", chinese: "儿子", english: "Son", example: "My son is ten years old", exampleTranslation: "我儿子十岁了" },
      { id: "ce_fam_6", chinese: "女儿", english: "Daughter", example: "My daughter goes to university", exampleTranslation: "我女儿上大学" },
      { id: "ce_fam_7", chinese: "爷爷", english: "Grandfather", example: "My grandfather is very wise", exampleTranslation: "我爷爷很有智慧" },
      { id: "ce_fam_8", chinese: "奶奶", english: "Grandmother", example: "My grandmother makes cakes", exampleTranslation: "我奶奶做蛋糕" },
      { id: "ce_fam_9", chinese: "叔叔", english: "Uncle", example: "My uncle lives in Beijing", exampleTranslation: "我叔叔住在北京" },
      { id: "ce_fam_10", chinese: "阿姨", english: "Aunt", example: "My aunt is very kind", exampleTranslation: "我阿姨很善良" }
    ]
  },

  numbers: {
    name: "数字",
    description: "基本数字",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "ce_num_1", chinese: "一", english: "One", example: "I have one brother", exampleTranslation: "我有一个哥哥" },
      { id: "ce_num_2", chinese: "二", english: "Two", example: "There are two cats", exampleTranslation: "有两只猫" },
      { id: "ce_num_3", chinese: "三", english: "Three", example: "It's three o'clock", exampleTranslation: "三点钟" },
      { id: "ce_num_4", chinese: "四", english: "Four", example: "Four seasons", exampleTranslation: "四季" },
      { id: "ce_num_5", chinese: "五", english: "Five", example: "Five fingers on the hand", exampleTranslation: "手上有五根手指" },
      { id: "ce_num_6", chinese: "六", english: "Six", example: "My son is six years old", exampleTranslation: "我儿子六岁了" },
      { id: "ce_num_7", chinese: "七", english: "Seven", example: "Seven days of the week", exampleTranslation: "一周七天" },
      { id: "ce_num_8", chinese: "八", english: "Eight", example: "I work eight hours", exampleTranslation: "我工作八小时" },
      { id: "ce_num_9", chinese: "九", english: "Nine", example: "It's nine o'clock in the morning", exampleTranslation: "早上九点" },
      { id: "ce_num_10", chinese: "十", english: "Ten", example: "Ten euros, please", exampleTranslation: "十欧元，请" }
    ]
  },

  colors: {
    name: "颜色",
    description: "基本颜色",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "ce_col_1", chinese: "红色", english: "Red", example: "The car is red", exampleTranslation: "车是红色的" },
      { id: "ce_col_2", chinese: "蓝色", english: "Blue", example: "The sky is blue", exampleTranslation: "天空是蓝色的" },
      { id: "ce_col_3", chinese: "绿色", english: "Green", example: "The grass is green", exampleTranslation: "草是绿色的" },
      { id: "ce_col_4", chinese: "黄色", english: "Yellow", example: "The sun is yellow", exampleTranslation: "太阳是黄色的" },
      { id: "ce_col_5", chinese: "黑色", english: "Black", example: "My cat is black", exampleTranslation: "我的猫是黑色的" },
      { id: "ce_col_6", chinese: "白色", english: "White", example: "The snow is white", exampleTranslation: "雪是白色的" },
      { id: "ce_col_7", chinese: "橙色", english: "Orange", example: "The orange is orange", exampleTranslation: "橙子是橙色的" },
      { id: "ce_col_8", chinese: "粉色", english: "Pink", example: "The dress is pink", exampleTranslation: "裙子是粉色的" },
      { id: "ce_col_9", chinese: "棕色", english: "Brown", example: "The bear is brown", exampleTranslation: "熊是棕色的" },
      { id: "ce_col_10", chinese: "灰色", english: "Gray", example: "The elephant is gray", exampleTranslation: "大象是灰色的" }
    ]
  },

  food: {
    name: "食物",
    description: "基本食物",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "ce_food_1", chinese: "面包", english: "Bread", example: "The bread is fresh", exampleTranslation: "面包很新鲜" },
      { id: "ce_food_2", chinese: "水", english: "Water", example: "A glass of water, please", exampleTranslation: "一杯水，请" },
      { id: "ce_food_3", chinese: "咖啡", english: "Coffee", example: "I like coffee", exampleTranslation: "我喜欢咖啡" },
      { id: "ce_food_4", chinese: "牛奶", english: "Milk", example: "The milk is fresh", exampleTranslation: "牛奶很新鲜" },
      { id: "ce_food_5", chinese: "肉", english: "Meat", example: "The meat is delicious", exampleTranslation: "肉很美味" },
      { id: "ce_food_6", chinese: "鱼", english: "Fish", example: "Fish is very healthy", exampleTranslation: "鱼很健康" },
      { id: "ce_food_7", chinese: "水果", english: "Fruit", example: "I eat fruit every day", exampleTranslation: "我每天吃水果" },
      { id: "ce_food_8", chinese: "蔬菜", english: "Vegetables", example: "Vegetables are important", exampleTranslation: "蔬菜很重要" },
      { id: "ce_food_9", chinese: "奶酪", english: "Cheese", example: "Chinese cheese is delicious", exampleTranslation: "中国奶酪很美味" },
      { id: "ce_food_10", chinese: "鸡蛋", english: "Egg", example: "I eat eggs for breakfast", exampleTranslation: "我早餐吃鸡蛋" }
    ]
  },

  house: {
    name: "房子",
    description: "家居用品",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "ce_house_1", chinese: "房子", english: "House", example: "My house is big", exampleTranslation: "我的房子很大" },
      { id: "ce_house_2", chinese: "房间", english: "Room", example: "The room is clean", exampleTranslation: "房间很干净" },
      { id: "ce_house_3", chinese: "厨房", english: "Kitchen", example: "I cook in the kitchen", exampleTranslation: "我在厨房做饭" },
      { id: "ce_house_4", chinese: "浴室", english: "Bathroom", example: "The bathroom is new", exampleTranslation: "浴室是新的" },
      { id: "ce_house_5", chinese: "卧室", english: "Bedroom", example: "My bedroom is comfortable", exampleTranslation: "我的卧室很舒适" },
      { id: "ce_house_6", chinese: "门", english: "Door", example: "Close the door", exampleTranslation: "关门" },
      { id: "ce_house_7", chinese: "窗户", english: "Window", example: "Open the window", exampleTranslation: "开窗户" },
      { id: "ce_house_8", chinese: "桌子", english: "Table", example: "The table is wooden", exampleTranslation: "桌子是木头的" },
      { id: "ce_house_9", chinese: "椅子", english: "Chair", example: "The chair is comfortable", exampleTranslation: "椅子很舒服" },
      { id: "ce_house_10", chinese: "床", english: "Bed", example: "The bed is soft", exampleTranslation: "床很软" }
    ]
  },

  places: {
    name: "地点",
    description: "位置",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "ce_place_1", chinese: "商店", english: "Store", example: "The store is open", exampleTranslation: "商店开着" },
      { id: "ce_place_2", chinese: "学校", english: "School", example: "I go to school", exampleTranslation: "我去学校" },
      { id: "ce_place_3", chinese: "医院", english: "Hospital", example: "The hospital is close", exampleTranslation: "医院很近" },
      { id: "ce_place_4", chinese: "公园", english: "Park", example: "Children play in the park", exampleTranslation: "孩子们在公园玩" },
      { id: "ce_place_5", chinese: "餐厅", english: "Restaurant", example: "We eat at the restaurant", exampleTranslation: "我们在餐厅吃饭" },
      { id: "ce_place_6", chinese: "酒店", english: "Hotel", example: "The hotel is very big", exampleTranslation: "酒店很大" },
      { id: "ce_place_7", chinese: "银行", english: "Bank", example: "I go to the bank", exampleTranslation: "我去银行" },
      { id: "ce_place_8", chinese: "机场", english: "Airport", example: "I'm at the airport", exampleTranslation: "我在机场" },
      { id: "ce_place_9", chinese: "火车站", english: "Train station", example: "The train station", exampleTranslation: "火车站" },
      { id: "ce_place_10", chinese: "博物馆", english: "Museum", example: "The museum is interesting", exampleTranslation: "博物馆很有趣" }
    ]
  },

  clothing: {
    name: "服装",
    description: "衣服",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "ce_cloth_1", chinese: "衬衫", english: "Shirt", example: "I like your shirt", exampleTranslation: "我喜欢你的衬衫" },
      { id: "ce_cloth_2", chinese: "裤子", english: "Pants", example: "I need new pants", exampleTranslation: "我需要新裤子" },
      { id: "ce_cloth_3", chinese: "鞋子", english: "Shoes", example: "I bought black shoes", exampleTranslation: "我买了黑色的鞋" },
      { id: "ce_cloth_4", chinese: "连衣裙", english: "Dress", example: "The dress is beautiful", exampleTranslation: "裙子很漂亮" },
      { id: "ce_cloth_5", chinese: "夹克", english: "Jacket", example: "I need a jacket", exampleTranslation: "我需要一件夹克" },
      { id: "ce_cloth_6", chinese: "帽子", english: "Hat", example: "Put on the hat", exampleTranslation: "戴上帽子" },
      { id: "ce_cloth_7", chinese: "袜子", english: "Socks", example: "My socks are clean", exampleTranslation: "我的袜子很干净" },
      { id: "ce_cloth_8", chinese: "手套", english: "Gloves", example: "I wear gloves in winter", exampleTranslation: "冬天我戴手套" },
      { id: "ce_cloth_9", chinese: "围巾", english: "Scarf", example: "The scarf is soft", exampleTranslation: "围巾很软" },
      { id: "ce_cloth_10", chinese: "外套", english: "Coat", example: "The coat is warm", exampleTranslation: "外套很暖和" }
    ]
  },

  work: {
    name: "工作",
    description: "职业",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "ce_work_1", chinese: "工作", english: "Work", example: "I go to work", exampleTranslation: "我去上班" },
      { id: "ce_work_2", chinese: "医生", english: "Doctor", example: "He is a doctor", exampleTranslation: "他是医生" },
      { id: "ce_work_3", chinese: "老师", english: "Teacher", example: "My teacher is excellent", exampleTranslation: "我的老师很优秀" },
      { id: "ce_work_4", chinese: "工程师", english: "Engineer", example: "I am an engineer", exampleTranslation: "我是工程师" },
      { id: "ce_work_5", chinese: "律师", english: "Lawyer", example: "She is a lawyer", exampleTranslation: "她是律师" },
      { id: "ce_work_6", chinese: "厨师", english: "Cook", example: "The cook prepares the meal", exampleTranslation: "厨师准备饭菜" },
      { id: "ce_work_7", chinese: "服务员", english: "Waiter", example: "The waiter is kind", exampleTranslation: "服务员很友好" },
      { id: "ce_work_8", chinese: "销售员", english: "Salesperson", example: "The salesperson helps the customer", exampleTranslation: "销售员帮助顾客" },
      { id: "ce_work_9", chinese: "警察", english: "Police officer", example: "The police officer protects the city", exampleTranslation: "警察保护城市" },
      { id: "ce_work_10", chinese: "机械师", english: "Mechanic", example: "The mechanic repairs cars", exampleTranslation: "机械师修理汽车" }
    ]
  },

  transport: {
    name: "交通",
    description: "交通工具",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "ce_trans_1", chinese: "汽车", english: "Car", example: "I have a new car", exampleTranslation: "我有一辆新车" },
      { id: "ce_trans_2", chinese: "公共汽车", english: "Bus", example: "I go by bus", exampleTranslation: "我坐公交车" },
      { id: "ce_trans_3", chinese: "火车", english: "Train", example: "The train is fast", exampleTranslation: "火车很快" },
      { id: "ce_trans_4", chinese: "飞机", english: "Airplane", example: "I travel by plane", exampleTranslation: "我坐飞机旅行" },
      { id: "ce_trans_5", chinese: "自行车", english: "Bicycle", example: "I ride a bicycle", exampleTranslation: "我骑自行车" },
      { id: "ce_trans_6", chinese: "出租车", english: "Taxi", example: "I call a taxi", exampleTranslation: "我叫出租车" },
      { id: "ce_trans_7", chinese: "地铁", english: "Metro", example: "I use the metro", exampleTranslation: "我坐地铁" },
      { id: "ce_trans_8", chinese: "摩托车", english: "Motorcycle", example: "My motorcycle is red", exampleTranslation: "我的摩托车是红色的" },
      { id: "ce_trans_9", chinese: "船", english: "Boat", example: "We sail by boat", exampleTranslation: "我们坐船航行" },
      { id: "ce_trans_10", chinese: "票", english: "Ticket", example: "I buy a ticket", exampleTranslation: "我买票" }
    ]
  },

  education: {
    name: "教育",
    description: "学校",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "ce_edu_1", chinese: "学生", english: "Student", example: "I am a student", exampleTranslation: "我是学生" },
      { id: "ce_edu_2", chinese: "老师", english: "Teacher", example: "The teacher teaches well", exampleTranslation: "老师教得很好" },
      { id: "ce_edu_3", chinese: "书", english: "Book", example: "I read a book", exampleTranslation: "我读书" },
      { id: "ce_edu_4", chinese: "铅笔", english: "Pencil", example: "Do you have a pencil?", exampleTranslation: "你有铅笔吗？" },
      { id: "ce_edu_5", chinese: "笔记本", english: "Notebook", example: "I need a notebook", exampleTranslation: "我需要笔记本" },
      { id: "ce_edu_6", chinese: "考试", english: "Exam", example: "The exam is tomorrow", exampleTranslation: "考试是明天" },
      { id: "ce_edu_7", chinese: "作业", english: "Homework", example: "I have a lot of homework", exampleTranslation: "我有很多作业" },
      { id: "ce_edu_8", chinese: "课", english: "Class", example: "The class starts at nine", exampleTranslation: "课九点开始" },
      { id: "ce_edu_9", chinese: "图书馆", english: "Library", example: "I study at the library", exampleTranslation: "我在图书馆学习" },
      { id: "ce_edu_10", chinese: "背包", english: "Backpack", example: "My backpack is heavy", exampleTranslation: "我的背包很重" }
    ]
  },

  nature: {
    name: "自然",
    description: "大自然",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "ce_nature_1", chinese: "树", english: "Tree", example: "The tree is tall", exampleTranslation: "树很高" },
      { id: "ce_nature_2", chinese: "花", english: "Flower", example: "The flower is beautiful", exampleTranslation: "花很美" },
      { id: "ce_nature_3", chinese: "山", english: "Mountain", example: "The mountain is high", exampleTranslation: "山很高" },
      { id: "ce_nature_4", chinese: "河", english: "River", example: "The river is long", exampleTranslation: "河很长" },
      { id: "ce_nature_5", chinese: "海", english: "Sea", example: "The sea is blue", exampleTranslation: "海是蓝色的" },
      { id: "ce_nature_6", chinese: "森林", english: "Forest", example: "We walk through the forest", exampleTranslation: "我们走过森林" },
      { id: "ce_nature_7", chinese: "湖", english: "Lake", example: "The lake is calm", exampleTranslation: "湖很平静" },
      { id: "ce_nature_8", chinese: "天空", english: "Sky", example: "The sky is blue", exampleTranslation: "天空是蓝色的" },
      { id: "ce_nature_9", chinese: "星星", english: "Star", example: "The stars shine", exampleTranslation: "星星闪耀" },
      { id: "ce_nature_10", chinese: "月亮", english: "Moon", example: "The moon is full", exampleTranslation: "月亮是满的" }
    ]
  },

  emotions: {
    name: "情绪",
    description: "感受",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "ce_emo_1", chinese: "快乐", english: "Happy", example: "I am happy", exampleTranslation: "我很快乐" },
      { id: "ce_emo_2", chinese: "悲伤", english: "Sad", example: "He is sad", exampleTranslation: "他很悲伤" },
      { id: "ce_emo_3", chinese: "生气", english: "Angry", example: "She is angry", exampleTranslation: "她很生气" },
      { id: "ce_emo_4", chinese: "累", english: "Tired", example: "I am tired", exampleTranslation: "我很累" },
      { id: "ce_emo_5", chinese: "兴奋", english: "Excited", example: "We are excited", exampleTranslation: "我们很兴奋" },
      { id: "ce_emo_6", chinese: "紧张", english: "Nervous", example: "He is nervous", exampleTranslation: "他很紧张" },
      { id: "ce_emo_7", chinese: "平静", english: "Calm", example: "She is calm", exampleTranslation: "她很平静" },
      { id: "ce_emo_8", chinese: "惊讶", english: "Surprised", example: "I am surprised", exampleTranslation: "我很惊讶" },
      { id: "ce_emo_9", chinese: "害怕", english: "Scared", example: "The child is scared", exampleTranslation: "孩子很害怕" },
      { id: "ce_emo_10", chinese: "无聊", english: "Bored", example: "They are bored", exampleTranslation: "他们很无聊" }
    ]
  },

  time: {
    name: "时间",
    description: "时间表达",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ce_time_1", chinese: "今天", english: "Today", example: "Today is Monday", exampleTranslation: "今天是星期一" },
      { id: "ce_time_2", chinese: "昨天", english: "Yesterday", example: "Yesterday was Sunday", exampleTranslation: "昨天是星期天" },
      { id: "ce_time_3", chinese: "明天", english: "Tomorrow", example: "Tomorrow is Tuesday", exampleTranslation: "明天是星期二" },
      { id: "ce_time_4", chinese: "现在", english: "Now", example: "I'm working now", exampleTranslation: "我现在在工作" },
      { id: "ce_time_5", chinese: "以后", english: "Later", example: "I'll do it later", exampleTranslation: "我以后做" },
      { id: "ce_time_6", chinese: "早上", english: "Morning", example: "Good morning", exampleTranslation: "早上好" },
      { id: "ce_time_7", chinese: "中午", english: "Noon", example: "It's noon", exampleTranslation: "现在是中午" },
      { id: "ce_time_8", chinese: "晚上", english: "Evening", example: "Good evening", exampleTranslation: "晚上好" },
      { id: "ce_time_9", chinese: "夜晚", english: "Night", example: "Good night", exampleTranslation: "晚安" },
      { id: "ce_time_10", chinese: "星期", english: "Week", example: "Next week", exampleTranslation: "下星期" }
    ]
  },

  weather: {
    name: "天气",
    description: "天气状况",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "ce_weather_1", chinese: "太阳", english: "Sun", example: "The sun shines", exampleTranslation: "太阳照耀" },
      { id: "ce_weather_2", chinese: "雨", english: "Rain", example: "It's raining", exampleTranslation: "下雨了" },
      { id: "ce_weather_3", chinese: "雪", english: "Snow", example: "It's snowing", exampleTranslation: "下雪了" },
      { id: "ce_weather_4", chinese: "风", english: "Wind", example: "It's windy", exampleTranslation: "刮风了" },
      { id: "ce_weather_5", chinese: "云", english: "Cloud", example: "There are clouds in the sky", exampleTranslation: "天空有云" },
      { id: "ce_weather_6", chinese: "暴风雨", english: "Storm", example: "A storm is coming", exampleTranslation: "暴风雨来了" },
      { id: "ce_weather_7", chinese: "热", english: "Hot", example: "It's very hot", exampleTranslation: "天气很热" },
      { id: "ce_weather_8", chinese: "冷", english: "Cold", example: "It's cold in winter", exampleTranslation: "冬天很冷" },
      { id: "ce_weather_9", chinese: "闪电", english: "Lightning", example: "I saw lightning", exampleTranslation: "我看到闪电" },
      { id: "ce_weather_10", chinese: "雷", english: "Thunder", example: "You can hear thunder", exampleTranslation: "你能听到雷声" }
    ]
  },

  body: {
    name: "身体",
    description: "身体部位",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "ce_body_1", chinese: "头", english: "Head", example: "My head hurts", exampleTranslation: "我头疼" },
      { id: "ce_body_2", chinese: "眼睛", english: "Eye", example: "I have blue eyes", exampleTranslation: "我有蓝眼睛" },
      { id: "ce_body_3", chinese: "鼻子", english: "Nose", example: "My nose is cold", exampleTranslation: "我的鼻子很冷" },
      { id: "ce_body_4", chinese: "嘴", english: "Mouth", example: "Open your mouth", exampleTranslation: "张开嘴" },
      { id: "ce_body_5", chinese: "耳朵", english: "Ear", example: "My ears are big", exampleTranslation: "我的耳朵很大" },
      { id: "ce_body_6", chinese: "手", english: "Hand", example: "Give me your hand", exampleTranslation: "把手给我" },
      { id: "ce_body_7", chinese: "脚", english: "Foot", example: "My foot hurts", exampleTranslation: "我脚疼" },
      { id: "ce_body_8", chinese: "胳膊", english: "Arm", example: "Raise your arm", exampleTranslation: "举起你的胳膊" },
      { id: "ce_body_9", chinese: "腿", english: "Leg", example: "My legs are tired", exampleTranslation: "我的腿很累" },
      { id: "ce_body_10", chinese: "心", english: "Heart", example: "My heart beats fast", exampleTranslation: "我的心跳很快" }
    ]
  },

  activities: {
    name: "活动",
    description: "日常活动",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "ce_act_1", chinese: "吃", english: "Eat", example: "I'm going to eat", exampleTranslation: "我要吃饭" },
      { id: "ce_act_2", chinese: "喝", english: "Drink", example: "I drink water", exampleTranslation: "我喝水" },
      { id: "ce_act_3", chinese: "睡觉", english: "Sleep", example: "I need to sleep", exampleTranslation: "我需要睡觉" },
      { id: "ce_act_4", chinese: "跑", english: "Run", example: "I run in the morning", exampleTranslation: "我早上跑步" },
      { id: "ce_act_5", chinese: "读", english: "Read", example: "I read a book", exampleTranslation: "我读书" },
      { id: "ce_act_6", chinese: "写", english: "Write", example: "I write a letter", exampleTranslation: "我写信" },
      { id: "ce_act_7", chinese: "说", english: "Speak", example: "I speak Chinese", exampleTranslation: "我说中文" },
      { id: "ce_act_8", chinese: "听", english: "Listen", example: "I listen to music", exampleTranslation: "我听音乐" },
      { id: "ce_act_9", chinese: "看", english: "Watch", example: "I watch television", exampleTranslation: "我看电视" },
      { id: "ce_act_10", chinese: "想", english: "Think", example: "I think of you", exampleTranslation: "我想你" }
    ]
  },

  learning: {
    name: "学习",
    description: "学习活动",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "ce_learn_1", chinese: "学习", english: "Learn", example: "I learn Chinese", exampleTranslation: "我学中文" },
      { id: "ce_learn_2", chinese: "学", english: "Study", example: "I study at university", exampleTranslation: "我在大学学习" },
      { id: "ce_learn_3", chinese: "教", english: "Teach", example: "I teach English", exampleTranslation: "我教英语" },
      { id: "ce_learn_4", chinese: "理解", english: "Understand", example: "I understand the lesson", exampleTranslation: "我理解这课" },
      { id: "ce_learn_5", chinese: "练习", english: "Practice", example: "I practice every day", exampleTranslation: "我每天练习" },
      { id: "ce_learn_6", chinese: "重复", english: "Repeat", example: "Repeat the word", exampleTranslation: "重复这个词" },
      { id: "ce_learn_7", chinese: "解释", english: "Explain", example: "The teacher explains well", exampleTranslation: "老师解释得很好" },
      { id: "ce_learn_8", chinese: "问", english: "Ask", example: "I ask the teacher", exampleTranslation: "我问老师" },
      { id: "ce_learn_9", chinese: "回答", english: "Answer", example: "I answer the question", exampleTranslation: "我回答问题" },
      { id: "ce_learn_10", chinese: "记得", english: "Remember", example: "I remember the lesson", exampleTranslation: "我记得这课" }
    ]
  },

  sports: {
    name: "体育",
    description: "运动",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "ce_sport_1", chinese: "足球", english: "Football", example: "I play football", exampleTranslation: "我踢足球" },
      { id: "ce_sport_2", chinese: "篮球", english: "Basketball", example: "I like basketball", exampleTranslation: "我喜欢篮球" },
      { id: "ce_sport_3", chinese: "网球", english: "Tennis", example: "I play tennis", exampleTranslation: "我打网球" },
      { id: "ce_sport_4", chinese: "游泳", english: "Swimming", example: "Swimming is healthy", exampleTranslation: "游泳很健康" },
      { id: "ce_sport_5", chinese: "跑步", english: "Running", example: "I run in the morning", exampleTranslation: "我早上跑步" },
      { id: "ce_sport_6", chinese: "骑自行车", english: "Cycling", example: "I like cycling", exampleTranslation: "我喜欢骑自行车" },
      { id: "ce_sport_7", chinese: "健身房", english: "Gym", example: "I go to the gym", exampleTranslation: "我去健身房" },
      { id: "ce_sport_8", chinese: "训练", english: "Training", example: "I have training today", exampleTranslation: "我今天有训练" },
      { id: "ce_sport_9", chinese: "队", english: "Team", example: "I'm on a team", exampleTranslation: "我在一个队" },
      { id: "ce_sport_10", chinese: "教练", english: "Coach", example: "Our coach is excellent", exampleTranslation: "我们的教练很优秀" }
    ]
  },

  travel: {
    name: "旅行",
    description: "旅游",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "ce_travel_1", chinese: "旅行", english: "Travel", example: "I'm going on a trip", exampleTranslation: "我去旅行" },
      { id: "ce_travel_2", chinese: "行李箱", english: "Suitcase", example: "My suitcase is heavy", exampleTranslation: "我的行李箱很重" },
      { id: "ce_travel_3", chinese: "护照", english: "Passport", example: "I need my passport", exampleTranslation: "我需要护照" },
      { id: "ce_travel_4", chinese: "酒店", english: "Hotel", example: "The hotel is comfortable", exampleTranslation: "酒店很舒适" },
      { id: "ce_travel_5", chinese: "预订", english: "Reservation", example: "I have a reservation", exampleTranslation: "我有预订" },
      { id: "ce_travel_6", chinese: "游客", english: "Tourist", example: "I am a tourist", exampleTranslation: "我是游客" },
      { id: "ce_travel_7", chinese: "假期", english: "Vacation", example: "I'm on vacation", exampleTranslation: "我在度假" },
      { id: "ce_travel_8", chinese: "观光", english: "Sightseeing", example: "We're doing sightseeing", exampleTranslation: "我们在观光" },
      { id: "ce_travel_9", chinese: "导游", english: "Guide", example: "The guide is informative", exampleTranslation: "导游很有用" },
      { id: "ce_travel_10", chinese: "纪念品", english: "Souvenir", example: "I'm buying a souvenir", exampleTranslation: "我买纪念品" }
    ]
  },

  entertainment: {
    name: "娱乐",
    description: "休闲",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "ce_ent_1", chinese: "音乐", english: "Music", example: "I listen to music", exampleTranslation: "我听音乐" },
      { id: "ce_ent_2", chinese: "电影", english: "Movie", example: "I watch a movie", exampleTranslation: "我看电影" },
      { id: "ce_ent_3", chinese: "音乐会", english: "Concert", example: "I go to a concert", exampleTranslation: "我去音乐会" },
      { id: "ce_ent_4", chinese: "剧院", english: "Theater", example: "I go to the theater", exampleTranslation: "我去剧院" },
      { id: "ce_ent_5", chinese: "跳舞", english: "Dance", example: "I like to dance", exampleTranslation: "我喜欢跳舞" },
      { id: "ce_ent_6", chinese: "唱歌", english: "Sing", example: "I like to sing", exampleTranslation: "我喜欢唱歌" },
      { id: "ce_ent_7", chinese: "吉他", english: "Guitar", example: "I play guitar", exampleTranslation: "我弹吉他" },
      { id: "ce_ent_8", chinese: "游戏", english: "Games", example: "I play video games", exampleTranslation: "我玩电子游戏" },
      { id: "ce_ent_9", chinese: "摄影", english: "Photography", example: "I'm interested in photography", exampleTranslation: "我对摄影感兴趣" },
      { id: "ce_ent_10", chinese: "阅读", english: "Reading", example: "Reading is my hobby", exampleTranslation: "阅读是我的爱好" }
    ]
  }
};

export default flashcardsCategories;