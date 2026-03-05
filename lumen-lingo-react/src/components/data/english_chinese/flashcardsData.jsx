import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Greetings",
    description: "Basic greetings",
    icon: Hand,
    color: "from-blue-400 to-blue-600",
    level: "beginner",
    words: [
      { id: "ec_greet_1", english: "Hello", chinese: "你好", example: "你好，你好吗？", exampleTranslation: "Hello, how are you?" },
      { id: "ec_greet_2", english: "Good morning", chinese: "早上好", example: "早上好，先生", exampleTranslation: "Good morning, sir" },
      { id: "ec_greet_3", english: "Good evening", chinese: "晚上好", example: "晚上好，你好吗？", exampleTranslation: "Good evening, how are you?" },
      { id: "ec_greet_4", english: "Good night", chinese: "晚安", example: "晚安，睡个好觉", exampleTranslation: "Good night, sleep well" },
      { id: "ec_greet_5", english: "Goodbye", chinese: "再见", example: "再见，回头见", exampleTranslation: "Goodbye, see you later" },
      { id: "ec_greet_6", english: "Thank you", chinese: "谢谢", example: "谢谢你的帮助", exampleTranslation: "Thank you for your help" },
      { id: "ec_greet_7", english: "Please", chinese: "请", example: "请帮助我", exampleTranslation: "Please, help me" },
      { id: "ec_greet_8", english: "Excuse me", chinese: "对不起", example: "对不起，我迟到了", exampleTranslation: "Excuse me, I'm late" },
      { id: "ec_greet_9", english: "Yes", chinese: "是", example: "是的，我同意", exampleTranslation: "Yes, I agree" },
      { id: "ec_greet_10", english: "No", chinese: "不", example: "不，我不想要", exampleTranslation: "No, I don't want" }
    ]
  },

  family: {
    name: "Family",
    description: "Family members",
    icon: Users,
    color: "from-purple-400 to-purple-600",
    level: "beginner",
    words: [
      { id: "ec_fam_1", english: "Father", chinese: "父亲", example: "我父亲工作很多", exampleTranslation: "My father works a lot" },
      { id: "ec_fam_2", english: "Mother", chinese: "母亲", example: "我母亲做饭很好", exampleTranslation: "My mother cooks well" },
      { id: "ec_fam_3", english: "Brother", chinese: "兄弟", example: "我哥哥学医", exampleTranslation: "My brother studies medicine" },
      { id: "ec_fam_4", english: "Sister", chinese: "姐妹", example: "我姐姐是老师", exampleTranslation: "My sister is a teacher" },
      { id: "ec_fam_5", english: "Son", chinese: "儿子", example: "我儿子十岁了", exampleTranslation: "My son is ten years old" },
      { id: "ec_fam_6", english: "Daughter", chinese: "女儿", example: "我女儿上大学", exampleTranslation: "My daughter goes to university" },
      { id: "ec_fam_7", english: "Grandfather", chinese: "爷爷", example: "我爷爷很有智慧", exampleTranslation: "My grandfather is very wise" },
      { id: "ec_fam_8", english: "Grandmother", chinese: "奶奶", example: "我奶奶做蛋糕", exampleTranslation: "My grandmother makes cakes" },
      { id: "ec_fam_9", english: "Uncle", chinese: "叔叔", example: "我叔叔住在北京", exampleTranslation: "My uncle lives in Beijing" },
      { id: "ec_fam_10", english: "Aunt", chinese: "阿姨", example: "我阿姨很善良", exampleTranslation: "My aunt is very kind" }
    ]
  },

  numbers: {
    name: "Numbers",
    description: "Basic numbers",
    icon: Hash,
    color: "from-green-400 to-green-600",
    level: "beginner",
    words: [
      { id: "ec_num_1", english: "One", chinese: "一", example: "我有一个哥哥", exampleTranslation: "I have one brother" },
      { id: "ec_num_2", english: "Two", chinese: "二", example: "有两只猫", exampleTranslation: "There are two cats" },
      { id: "ec_num_3", english: "Three", chinese: "三", example: "三点钟", exampleTranslation: "It's three o'clock" },
      { id: "ec_num_4", english: "Four", chinese: "四", example: "四季", exampleTranslation: "Four seasons" },
      { id: "ec_num_5", english: "Five", chinese: "五", example: "手上有五根手指", exampleTranslation: "Five fingers on the hand" },
      { id: "ec_num_6", english: "Six", chinese: "六", example: "我儿子六岁了", exampleTranslation: "My son is six years old" },
      { id: "ec_num_7", english: "Seven", chinese: "七", example: "一周七天", exampleTranslation: "Seven days of the week" },
      { id: "ec_num_8", english: "Eight", chinese: "八", example: "我工作八小时", exampleTranslation: "I work eight hours" },
      { id: "ec_num_9", english: "Nine", chinese: "九", example: "早上九点", exampleTranslation: "It's nine o'clock in the morning" },
      { id: "ec_num_10", english: "Ten", chinese: "十", example: "十欧元，请", exampleTranslation: "Ten euros, please" }
    ]
  },

  colors: {
    name: "Colors",
    description: "Basic colors",
    icon: Palette,
    color: "from-pink-400 to-pink-600",
    level: "beginner",
    words: [
      { id: "ec_col_1", english: "Red", chinese: "红色", example: "车是红色的", exampleTranslation: "The car is red" },
      { id: "ec_col_2", english: "Blue", chinese: "蓝色", example: "天空是蓝色的", exampleTranslation: "The sky is blue" },
      { id: "ec_col_3", english: "Green", chinese: "绿色", example: "草是绿色的", exampleTranslation: "The grass is green" },
      { id: "ec_col_4", english: "Yellow", chinese: "黄色", example: "太阳是黄色的", exampleTranslation: "The sun is yellow" },
      { id: "ec_col_5", english: "Black", chinese: "黑色", example: "我的猫是黑色的", exampleTranslation: "My cat is black" },
      { id: "ec_col_6", english: "White", chinese: "白色", example: "雪是白色的", exampleTranslation: "The snow is white" },
      { id: "ec_col_7", english: "Orange", chinese: "橙色", example: "橙子是橙色的", exampleTranslation: "The orange is orange" },
      { id: "ec_col_8", english: "Pink", chinese: "粉色", example: "裙子是粉色的", exampleTranslation: "The dress is pink" },
      { id: "ec_col_9", english: "Brown", chinese: "棕色", example: "熊是棕色的", exampleTranslation: "The bear is brown" },
      { id: "ec_col_10", english: "Gray", chinese: "灰色", example: "大象是灰色的", exampleTranslation: "The elephant is gray" }
    ]
  },

  food: {
    name: "Food",
    description: "Basic foods",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-orange-600",
    level: "beginner",
    words: [
      { id: "ec_food_1", english: "Bread", chinese: "面包", example: "面包很新鲜", exampleTranslation: "The bread is fresh" },
      { id: "ec_food_2", english: "Water", chinese: "水", example: "一杯水，请", exampleTranslation: "A glass of water, please" },
      { id: "ec_food_3", english: "Coffee", chinese: "咖啡", example: "我喜欢咖啡", exampleTranslation: "I like coffee" },
      { id: "ec_food_4", english: "Milk", chinese: "牛奶", example: "牛奶很新鲜", exampleTranslation: "The milk is fresh" },
      { id: "ec_food_5", english: "Meat", chinese: "肉", example: "肉很美味", exampleTranslation: "The meat is delicious" },
      { id: "ec_food_6", english: "Fish", chinese: "鱼", example: "鱼很健康", exampleTranslation: "Fish is very healthy" },
      { id: "ec_food_7", english: "Fruit", chinese: "水果", example: "我每天吃水果", exampleTranslation: "I eat fruit every day" },
      { id: "ec_food_8", english: "Vegetables", chinese: "蔬菜", example: "蔬菜很重要", exampleTranslation: "Vegetables are important" },
      { id: "ec_food_9", english: "Cheese", chinese: "奶酪", example: "中国奶酪很美味", exampleTranslation: "Chinese cheese is delicious" },
      { id: "ec_food_10", english: "Egg", chinese: "鸡蛋", example: "我早餐吃鸡蛋", exampleTranslation: "I eat eggs for breakfast" }
    ]
  },

  house: {
    name: "House",
    description: "Household items",
    icon: Home,
    color: "from-yellow-400 to-yellow-600",
    level: "beginner",
    words: [
      { id: "ec_house_1", english: "House", chinese: "房子", example: "我的房子很大", exampleTranslation: "My house is big" },
      { id: "ec_house_2", english: "Room", chinese: "房间", example: "房间很干净", exampleTranslation: "The room is clean" },
      { id: "ec_house_3", english: "Kitchen", chinese: "厨房", example: "我在厨房做饭", exampleTranslation: "I cook in the kitchen" },
      { id: "ec_house_4", english: "Bathroom", chinese: "浴室", example: "浴室是新的", exampleTranslation: "The bathroom is new" },
      { id: "ec_house_5", english: "Bedroom", chinese: "卧室", example: "我的卧室很舒适", exampleTranslation: "My bedroom is comfortable" },
      { id: "ec_house_6", english: "Door", chinese: "门", example: "关门", exampleTranslation: "Close the door" },
      { id: "ec_house_7", english: "Window", chinese: "窗户", example: "开窗户", exampleTranslation: "Open the window" },
      { id: "ec_house_8", english: "Table", chinese: "桌子", example: "桌子是木头的", exampleTranslation: "The table is wooden" },
      { id: "ec_house_9", english: "Chair", chinese: "椅子", example: "椅子很舒服", exampleTranslation: "The chair is comfortable" },
      { id: "ec_house_10", english: "Bed", chinese: "床", example: "床很软", exampleTranslation: "The bed is soft" }
    ]
  },

  places: {
    name: "Places",
    description: "Locations",
    icon: MapPin,
    color: "from-red-400 to-red-600",
    level: "beginner",
    words: [
      { id: "ec_place_1", english: "Store", chinese: "商店", example: "商店开着", exampleTranslation: "The store is open" },
      { id: "ec_place_2", english: "School", chinese: "学校", example: "我去学校", exampleTranslation: "I go to school" },
      { id: "ec_place_3", english: "Hospital", chinese: "医院", example: "医院很近", exampleTranslation: "The hospital is close" },
      { id: "ec_place_4", english: "Park", chinese: "公园", example: "孩子们在公园玩", exampleTranslation: "Children play in the park" },
      { id: "ec_place_5", english: "Restaurant", chinese: "餐厅", example: "我们在餐厅吃饭", exampleTranslation: "We eat at the restaurant" },
      { id: "ec_place_6", english: "Hotel", chinese: "酒店", example: "酒店很大", exampleTranslation: "The hotel is very big" },
      { id: "ec_place_7", english: "Bank", chinese: "银行", example: "我去银行", exampleTranslation: "I go to the bank" },
      { id: "ec_place_8", english: "Airport", chinese: "机场", example: "我在机场", exampleTranslation: "I'm at the airport" },
      { id: "ec_place_9", english: "Train station", chinese: "火车站", example: "火车站", exampleTranslation: "The train station" },
      { id: "ec_place_10", english: "Museum", chinese: "博物馆", example: "博物馆很有趣", exampleTranslation: "The museum is interesting" }
    ]
  },

  clothing: {
    name: "Clothing",
    description: "Clothes",
    icon: Shirt,
    color: "from-indigo-400 to-indigo-600",
    level: "beginner",
    words: [
      { id: "ec_cloth_1", english: "Shirt", chinese: "衬衫", example: "我喜欢你的衬衫", exampleTranslation: "I like your shirt" },
      { id: "ec_cloth_2", english: "Pants", chinese: "裤子", example: "我需要新裤子", exampleTranslation: "I need new pants" },
      { id: "ec_cloth_3", english: "Shoes", chinese: "鞋子", example: "我买了黑色的鞋", exampleTranslation: "I bought black shoes" },
      { id: "ec_cloth_4", english: "Dress", chinese: "连衣裙", example: "裙子很漂亮", exampleTranslation: "The dress is beautiful" },
      { id: "ec_cloth_5", english: "Jacket", chinese: "夹克", example: "我需要一件夹克", exampleTranslation: "I need a jacket" },
      { id: "ec_cloth_6", english: "Hat", chinese: "帽子", example: "戴上帽子", exampleTranslation: "Put on the hat" },
      { id: "ec_cloth_7", english: "Socks", chinese: "袜子", example: "我的袜子很干净", exampleTranslation: "My socks are clean" },
      { id: "ec_cloth_8", english: "Gloves", chinese: "手套", example: "冬天我戴手套", exampleTranslation: "I wear gloves in winter" },
      { id: "ec_cloth_9", english: "Scarf", chinese: "围巾", example: "围巾很软", exampleTranslation: "The scarf is soft" },
      { id: "ec_cloth_10", english: "Coat", chinese: "外套", example: "外套很暖和", exampleTranslation: "The coat is warm" }
    ]
  },

  work: {
    name: "Work",
    description: "Professions",
    icon: Briefcase,
    color: "from-cyan-400 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "ec_work_1", english: "Work", chinese: "工作", example: "我去上班", exampleTranslation: "I go to work" },
      { id: "ec_work_2", english: "Doctor", chinese: "医生", example: "他是医生", exampleTranslation: "He is a doctor" },
      { id: "ec_work_3", english: "Teacher", chinese: "老师", example: "我的老师很优秀", exampleTranslation: "My teacher is excellent" },
      { id: "ec_work_4", english: "Engineer", chinese: "工程师", example: "我是工程师", exampleTranslation: "I am an engineer" },
      { id: "ec_work_5", english: "Lawyer", chinese: "律师", example: "她是律师", exampleTranslation: "She is a lawyer" },
      { id: "ec_work_6", english: "Cook", chinese: "厨师", example: "厨师准备饭菜", exampleTranslation: "The cook prepares the meal" },
      { id: "ec_work_7", english: "Waiter", chinese: "服务员", example: "服务员很友好", exampleTranslation: "The waiter is kind" },
      { id: "ec_work_8", english: "Salesperson", chinese: "销售员", example: "销售员帮助顾客", exampleTranslation: "The salesperson helps the customer" },
      { id: "ec_work_9", english: "Police officer", chinese: "警察", example: "警察保护城市", exampleTranslation: "The police officer protects the city" },
      { id: "ec_work_10", english: "Mechanic", chinese: "机械师", example: "机械师修理汽车", exampleTranslation: "The mechanic repairs cars" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transportation",
    icon: Car,
    color: "from-teal-400 to-teal-600",
    level: "intermediate",
    words: [
      { id: "ec_trans_1", english: "Car", chinese: "汽车", example: "我有一辆新车", exampleTranslation: "I have a new car" },
      { id: "ec_trans_2", english: "Bus", chinese: "公共汽车", example: "我坐公交车", exampleTranslation: "I go by bus" },
      { id: "ec_trans_3", english: "Train", chinese: "火车", example: "火车很快", exampleTranslation: "The train is fast" },
      { id: "ec_trans_4", english: "Airplane", chinese: "飞机", example: "我坐飞机旅行", exampleTranslation: "I travel by plane" },
      { id: "ec_trans_5", english: "Bicycle", chinese: "自行车", example: "我骑自行车", exampleTranslation: "I ride a bicycle" },
      { id: "ec_trans_6", english: "Taxi", chinese: "出租车", example: "我叫出租车", exampleTranslation: "I call a taxi" },
      { id: "ec_trans_7", english: "Metro", chinese: "地铁", example: "我坐地铁", exampleTranslation: "I use the metro" },
      { id: "ec_trans_8", english: "Motorcycle", chinese: "摩托车", example: "我的摩托车是红色的", exampleTranslation: "My motorcycle is red" },
      { id: "ec_trans_9", english: "Boat", chinese: "船", example: "我们坐船航行", exampleTranslation: "We sail by boat" },
      { id: "ec_trans_10", english: "Ticket", chinese: "票", example: "我买票", exampleTranslation: "I buy a ticket" }
    ]
  },

  education: {
    name: "Education",
    description: "School",
    icon: School,
    color: "from-blue-500 to-blue-700",
    level: "intermediate",
    words: [
      { id: "ec_edu_1", english: "Student", chinese: "学生", example: "我是学生", exampleTranslation: "I am a student" },
      { id: "ec_edu_2", english: "Teacher", chinese: "老师", example: "老师教得很好", exampleTranslation: "The teacher teaches well" },
      { id: "ec_edu_3", english: "Book", chinese: "书", example: "我读书", exampleTranslation: "I read a book" },
      { id: "ec_edu_4", english: "Pencil", chinese: "铅笔", example: "你有铅笔吗？", exampleTranslation: "Do you have a pencil?" },
      { id: "ec_edu_5", english: "Notebook", chinese: "笔记本", example: "我需要笔记本", exampleTranslation: "I need a notebook" },
      { id: "ec_edu_6", english: "Exam", chinese: "考试", example: "考试是明天", exampleTranslation: "The exam is tomorrow" },
      { id: "ec_edu_7", english: "Homework", chinese: "作业", example: "我有很多作业", exampleTranslation: "I have a lot of homework" },
      { id: "ec_edu_8", english: "Class", chinese: "课", example: "课九点开始", exampleTranslation: "The class starts at nine" },
      { id: "ec_edu_9", english: "Library", chinese: "图书馆", example: "我在图书馆学习", exampleTranslation: "I study at the library" },
      { id: "ec_edu_10", english: "Backpack", chinese: "背包", example: "我的背包很重", exampleTranslation: "My backpack is heavy" }
    ]
  },

  nature: {
    name: "Nature",
    description: "Nature",
    icon: TreePine,
    color: "from-green-500 to-green-700",
    level: "intermediate",
    words: [
      { id: "ec_nature_1", english: "Tree", chinese: "树", example: "树很高", exampleTranslation: "The tree is tall" },
      { id: "ec_nature_2", english: "Flower", chinese: "花", example: "花很美", exampleTranslation: "The flower is beautiful" },
      { id: "ec_nature_3", english: "Mountain", chinese: "山", example: "山很高", exampleTranslation: "The mountain is high" },
      { id: "ec_nature_4", english: "River", chinese: "河", example: "河很长", exampleTranslation: "The river is long" },
      { id: "ec_nature_5", english: "Sea", chinese: "海", example: "海是蓝色的", exampleTranslation: "The sea is blue" },
      { id: "ec_nature_6", english: "Forest", chinese: "森林", example: "我们走过森林", exampleTranslation: "We walk through the forest" },
      { id: "ec_nature_7", english: "Lake", chinese: "湖", example: "湖很平静", exampleTranslation: "The lake is calm" },
      { id: "ec_nature_8", english: "Sky", chinese: "天空", example: "天空是蓝色的", exampleTranslation: "The sky is blue" },
      { id: "ec_nature_9", english: "Star", chinese: "星星", example: "星星闪耀", exampleTranslation: "The stars shine" },
      { id: "ec_nature_10", english: "Moon", chinese: "月亮", example: "月亮是满的", exampleTranslation: "The moon is full" }
    ]
  },

  emotions: {
    name: "Emotions",
    description: "Feelings",
    icon: Heart,
    color: "from-rose-400 to-rose-600",
    level: "intermediate",
    words: [
      { id: "ec_emo_1", english: "Happy", chinese: "快乐", example: "我很快乐", exampleTranslation: "I am happy" },
      { id: "ec_emo_2", english: "Sad", chinese: "悲伤", example: "他很悲伤", exampleTranslation: "He is sad" },
      { id: "ec_emo_3", english: "Angry", chinese: "生气", example: "她很生气", exampleTranslation: "She is angry" },
      { id: "ec_emo_4", english: "Tired", chinese: "累", example: "我很累", exampleTranslation: "I am tired" },
      { id: "ec_emo_5", english: "Excited", chinese: "兴奋", example: "我们很兴奋", exampleTranslation: "We are excited" },
      { id: "ec_emo_6", english: "Nervous", chinese: "紧张", example: "他很紧张", exampleTranslation: "He is nervous" },
      { id: "ec_emo_7", english: "Calm", chinese: "平静", example: "她很平静", exampleTranslation: "She is calm" },
      { id: "ec_emo_8", english: "Surprised", chinese: "惊讶", example: "我很惊讶", exampleTranslation: "I am surprised" },
      { id: "ec_emo_9", english: "Scared", chinese: "害怕", example: "孩子很害怕", exampleTranslation: "The child is scared" },
      { id: "ec_emo_10", english: "Bored", chinese: "无聊", example: "他们很无聊", exampleTranslation: "They are bored" }
    ]
  },

  time: {
    name: "Time",
    description: "Time expressions",
    icon: Clock,
    color: "from-amber-400 to-amber-600",
    level: "beginner",
    words: [
      { id: "ec_time_1", english: "Today", chinese: "今天", example: "今天是星期一", exampleTranslation: "Today is Monday" },
      { id: "ec_time_2", english: "Yesterday", chinese: "昨天", example: "昨天是星期天", exampleTranslation: "Yesterday was Sunday" },
      { id: "ec_time_3", english: "Tomorrow", chinese: "明天", example: "明天是星期二", exampleTranslation: "Tomorrow is Tuesday" },
      { id: "ec_time_4", english: "Now", chinese: "现在", example: "我现在在工作", exampleTranslation: "I'm working now" },
      { id: "ec_time_5", english: "Later", chinese: "以后", example: "我以后做", exampleTranslation: "I'll do it later" },
      { id: "ec_time_6", english: "Morning", chinese: "早上", example: "早上好", exampleTranslation: "Good morning" },
      { id: "ec_time_7", english: "Noon", chinese: "中午", example: "现在是中午", exampleTranslation: "It's noon" },
      { id: "ec_time_8", english: "Evening", chinese: "晚上", example: "晚上好", exampleTranslation: "Good evening" },
      { id: "ec_time_9", english: "Night", chinese: "夜晚", example: "晚安", exampleTranslation: "Good night" },
      { id: "ec_time_10", english: "Week", chinese: "星期", example: "下星期", exampleTranslation: "Next week" }
    ]
  },

  weather: {
    name: "Weather",
    description: "Weather conditions",
    icon: Cloud,
    color: "from-sky-400 to-sky-600",
    level: "beginner",
    words: [
      { id: "ec_weather_1", english: "Sun", chinese: "太阳", example: "太阳照耀", exampleTranslation: "The sun shines" },
      { id: "ec_weather_2", english: "Rain", chinese: "雨", example: "下雨了", exampleTranslation: "It's raining" },
      { id: "ec_weather_3", english: "Snow", chinese: "雪", example: "下雪了", exampleTranslation: "It's snowing" },
      { id: "ec_weather_4", english: "Wind", chinese: "风", example: "刮风了", exampleTranslation: "It's windy" },
      { id: "ec_weather_5", english: "Cloud", chinese: "云", example: "天空有云", exampleTranslation: "There are clouds in the sky" },
      { id: "ec_weather_6", english: "Storm", chinese: "暴风雨", example: "暴风雨来了", exampleTranslation: "A storm is coming" },
      { id: "ec_weather_7", english: "Hot", chinese: "热", example: "天气很热", exampleTranslation: "It's very hot" },
      { id: "ec_weather_8", english: "Cold", chinese: "冷", example: "冬天很冷", exampleTranslation: "It's cold in winter" },
      { id: "ec_weather_9", english: "Lightning", chinese: "闪电", example: "我看到闪电", exampleTranslation: "I saw lightning" },
      { id: "ec_weather_10", english: "Thunder", chinese: "雷", example: "你能听到雷声", exampleTranslation: "You can hear thunder" }
    ]
  },

  body: {
    name: "Body",
    description: "Body parts",
    icon: Hand,
    color: "from-violet-400 to-violet-600",
    level: "intermediate",
    words: [
      { id: "ec_body_1", english: "Head", chinese: "头", example: "我头疼", exampleTranslation: "My head hurts" },
      { id: "ec_body_2", english: "Eye", chinese: "眼睛", example: "我有蓝眼睛", exampleTranslation: "I have blue eyes" },
      { id: "ec_body_3", english: "Nose", chinese: "鼻子", example: "我的鼻子很冷", exampleTranslation: "My nose is cold" },
      { id: "ec_body_4", english: "Mouth", chinese: "嘴", example: "张开嘴", exampleTranslation: "Open your mouth" },
      { id: "ec_body_5", english: "Ear", chinese: "耳朵", example: "我的耳朵很大", exampleTranslation: "My ears are big" },
      { id: "ec_body_6", english: "Hand", chinese: "手", example: "把手给我", exampleTranslation: "Give me your hand" },
      { id: "ec_body_7", english: "Foot", chinese: "脚", example: "我脚疼", exampleTranslation: "My foot hurts" },
      { id: "ec_body_8", english: "Arm", chinese: "胳膊", example: "举起你的胳膊", exampleTranslation: "Raise your arm" },
      { id: "ec_body_9", english: "Leg", chinese: "腿", example: "我的腿很累", exampleTranslation: "My legs are tired" },
      { id: "ec_body_10", english: "Heart", chinese: "心", example: "我的心跳很快", exampleTranslation: "My heart beats fast" }
    ]
  },

  activities: {
    name: "Activities",
    description: "Daily activities",
    icon: Lightbulb,
    color: "from-fuchsia-400 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "ec_act_1", english: "Eat", chinese: "吃", example: "我要吃饭", exampleTranslation: "I'm going to eat" },
      { id: "ec_act_2", english: "Drink", chinese: "喝", example: "我喝水", exampleTranslation: "I drink water" },
      { id: "ec_act_3", english: "Sleep", chinese: "睡觉", example: "我需要睡觉", exampleTranslation: "I need to sleep" },
      { id: "ec_act_4", english: "Run", chinese: "跑", example: "我早上跑步", exampleTranslation: "I run in the morning" },
      { id: "ec_act_5", english: "Read", chinese: "读", example: "我读书", exampleTranslation: "I read a book" },
      { id: "ec_act_6", english: "Write", chinese: "写", example: "我写信", exampleTranslation: "I write a letter" },
      { id: "ec_act_7", english: "Speak", chinese: "说", example: "我说中文", exampleTranslation: "I speak Chinese" },
      { id: "ec_act_8", english: "Listen", chinese: "听", example: "我听音乐", exampleTranslation: "I listen to music" },
      { id: "ec_act_9", english: "Watch", chinese: "看", example: "我看电视", exampleTranslation: "I watch television" },
      { id: "ec_act_10", english: "Think", chinese: "想", example: "我想你", exampleTranslation: "I think of you" }
    ]
  },

  learning: {
    name: "Learning",
    description: "Learning activities",
    icon: BookOpen,
    color: "from-emerald-400 to-emerald-600",
    level: "advanced",
    words: [
      { id: "ec_learn_1", english: "Learn", chinese: "学习", example: "我学中文", exampleTranslation: "I learn Chinese" },
      { id: "ec_learn_2", english: "Study", chinese: "学", example: "我在大学学习", exampleTranslation: "I study at university" },
      { id: "ec_learn_3", english: "Teach", chinese: "教", example: "我教英语", exampleTranslation: "I teach English" },
      { id: "ec_learn_4", english: "Understand", chinese: "理解", example: "我理解这课", exampleTranslation: "I understand the lesson" },
      { id: "ec_learn_5", english: "Practice", chinese: "练习", example: "我每天练习", exampleTranslation: "I practice every day" },
      { id: "ec_learn_6", english: "Repeat", chinese: "重复", example: "重复这个词", exampleTranslation: "Repeat the word" },
      { id: "ec_learn_7", english: "Explain", chinese: "解释", example: "老师解释得很好", exampleTranslation: "The teacher explains well" },
      { id: "ec_learn_8", english: "Ask", chinese: "问", example: "我问老师", exampleTranslation: "I ask the teacher" },
      { id: "ec_learn_9", english: "Answer", chinese: "回答", example: "我回答问题", exampleTranslation: "I answer the question" },
      { id: "ec_learn_10", english: "Remember", chinese: "记得", example: "我记得这课", exampleTranslation: "I remember the lesson" }
    ]
  },

  sports: {
    name: "Sports",
    description: "Sports",
    icon: Dumbbell,
    color: "from-lime-400 to-lime-600",
    level: "intermediate",
    words: [
      { id: "ec_sport_1", english: "Football", chinese: "足球", example: "我踢足球", exampleTranslation: "I play football" },
      { id: "ec_sport_2", english: "Basketball", chinese: "篮球", example: "我喜欢篮球", exampleTranslation: "I like basketball" },
      { id: "ec_sport_3", english: "Tennis", chinese: "网球", example: "我打网球", exampleTranslation: "I play tennis" },
      { id: "ec_sport_4", english: "Swimming", chinese: "游泳", example: "游泳很健康", exampleTranslation: "Swimming is healthy" },
      { id: "ec_sport_5", english: "Running", chinese: "跑步", example: "我早上跑步", exampleTranslation: "I run in the morning" },
      { id: "ec_sport_6", english: "Cycling", chinese: "骑自行车", example: "我喜欢骑自行车", exampleTranslation: "I like cycling" },
      { id: "ec_sport_7", english: "Gym", chinese: "健身房", example: "我去健身房", exampleTranslation: "I go to the gym" },
      { id: "ec_sport_8", english: "Training", chinese: "训练", example: "我今天有训练", exampleTranslation: "I have training today" },
      { id: "ec_sport_9", english: "Team", chinese: "队", example: "我在一个队", exampleTranslation: "I'm on a team" },
      { id: "ec_sport_10", english: "Coach", chinese: "教练", example: "我们的教练很优秀", exampleTranslation: "Our coach is excellent" }
    ]
  },

  travel: {
    name: "Travel",
    description: "Tourism",
    icon: Plane,
    color: "from-blue-600 to-blue-800",
    level: "advanced",
    words: [
      { id: "ec_travel_1", english: "Travel", chinese: "旅行", example: "我去旅行", exampleTranslation: "I'm going on a trip" },
      { id: "ec_travel_2", english: "Suitcase", chinese: "行李箱", example: "我的行李箱很重", exampleTranslation: "My suitcase is heavy" },
      { id: "ec_travel_3", english: "Passport", chinese: "护照", example: "我需要护照", exampleTranslation: "I need my passport" },
      { id: "ec_travel_4", english: "Hotel", chinese: "酒店", example: "酒店很舒适", exampleTranslation: "The hotel is comfortable" },
      { id: "ec_travel_5", english: "Reservation", chinese: "预订", example: "我有预订", exampleTranslation: "I have a reservation" },
      { id: "ec_travel_6", english: "Tourist", chinese: "游客", example: "我是游客", exampleTranslation: "I am a tourist" },
      { id: "ec_travel_7", english: "Vacation", chinese: "假期", example: "我在度假", exampleTranslation: "I'm on vacation" },
      { id: "ec_travel_8", english: "Sightseeing", chinese: "观光", example: "我们在观光", exampleTranslation: "We're doing sightseeing" },
      { id: "ec_travel_9", english: "Guide", chinese: "导游", example: "导游很有用", exampleTranslation: "The guide is informative" },
      { id: "ec_travel_10", english: "Souvenir", chinese: "纪念品", example: "我买纪念品", exampleTranslation: "I'm buying a souvenir" }
    ]
  },

  entertainment: {
    name: "Entertainment",
    description: "Leisure",
    icon: Music,
    color: "from-purple-500 to-purple-700",
    level: "advanced",
    words: [
      { id: "ec_ent_1", english: "Music", chinese: "音乐", example: "我听音乐", exampleTranslation: "I listen to music" },
      { id: "ec_ent_2", english: "Movie", chinese: "电影", example: "我看电影", exampleTranslation: "I watch a movie" },
      { id: "ec_ent_3", english: "Concert", chinese: "音乐会", example: "我去音乐会", exampleTranslation: "I go to a concert" },
      { id: "ec_ent_4", english: "Theater", chinese: "剧院", example: "我去剧院", exampleTranslation: "I go to the theater" },
      { id: "ec_ent_5", english: "Dance", chinese: "跳舞", example: "我喜欢跳舞", exampleTranslation: "I like to dance" },
      { id: "ec_ent_6", english: "Sing", chinese: "唱歌", example: "我喜欢唱歌", exampleTranslation: "I like to sing" },
      { id: "ec_ent_7", english: "Guitar", chinese: "吉他", example: "我弹吉他", exampleTranslation: "I play guitar" },
      { id: "ec_ent_8", english: "Games", chinese: "游戏", example: "我玩电子游戏", exampleTranslation: "I play video games" },
      { id: "ec_ent_9", english: "Photography", chinese: "摄影", example: "我对摄影感兴趣", exampleTranslation: "I'm interested in photography" },
      { id: "ec_ent_10", english: "Reading", chinese: "阅读", example: "阅读是我的爱好", exampleTranslation: "Reading is my hobby" }
    ]
  }
};

export default flashcardsCategories;