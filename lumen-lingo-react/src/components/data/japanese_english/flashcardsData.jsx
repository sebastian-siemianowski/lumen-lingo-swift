import { Hand, Users, Hash, Palette, UtensilsCrossed, MapPin, Shirt, Home, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "挨拶",
    description: "基本的な挨拶",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "je_greet_1", japanese: "こんにちは", english: "Hello", example: "Hello, how are you?", exampleTranslation: "こんにちは、お元気ですか？" },
      { id: "je_greet_2", japanese: "おはようございます", english: "Good morning", example: "Good morning, sir", exampleTranslation: "おはようございます、先生" },
      { id: "je_greet_3", japanese: "こんばんは", english: "Good evening", example: "Good evening, how are you?", exampleTranslation: "こんばんは、お元気ですか？" },
      { id: "je_greet_4", japanese: "おやすみなさい", english: "Good night", example: "Good night, sleep well", exampleTranslation: "おやすみなさい、よく眠れますように" },
      { id: "je_greet_5", japanese: "さようなら", english: "Goodbye", example: "Goodbye, see you later", exampleTranslation: "さようなら、また後で" },
      { id: "je_greet_6", japanese: "ありがとうございます", english: "Thank you", example: "Thank you for your help", exampleTranslation: "ご協力ありがとうございます" },
      { id: "je_greet_7", japanese: "お願いします", english: "Please", example: "Please, help me", exampleTranslation: "お願いします、助けてください" },
      { id: "je_greet_8", japanese: "すみません", english: "Excuse me", example: "Excuse me, I'm late", exampleTranslation: "すみません、遅れました" },
      { id: "je_greet_9", japanese: "はい", english: "Yes", example: "Yes, I agree", exampleTranslation: "はい、賛成です" },
      { id: "je_greet_10", japanese: "いいえ", english: "No", example: "No, I don't want", exampleTranslation: "いいえ、欲しくないです" }
    ]
  },

  family: {
    name: "家族",
    description: "家族のメンバー",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "je_fam_1", japanese: "父", english: "Father", example: "My father works a lot", exampleTranslation: "父はたくさん働きます" },
      { id: "je_fam_2", japanese: "母", english: "Mother", example: "My mother cooks well", exampleTranslation: "母は料理が上手です" },
      { id: "je_fam_3", japanese: "兄", english: "Brother", example: "My brother studies medicine", exampleTranslation: "兄は医学を勉強しています" },
      { id: "je_fam_4", japanese: "姉", english: "Sister", example: "My sister is a teacher", exampleTranslation: "姉は先生です" },
      { id: "je_fam_5", japanese: "息子", english: "Son", example: "My son is ten years old", exampleTranslation: "息子は10歳です" },
      { id: "je_fam_6", japanese: "娘", english: "Daughter", example: "My daughter goes to university", exampleTranslation: "娘は大学に通っています" },
      { id: "je_fam_7", japanese: "祖父", english: "Grandfather", example: "My grandfather is very wise", exampleTranslation: "祖父はとても賢いです" },
      { id: "je_fam_8", japanese: "祖母", english: "Grandmother", example: "My grandmother makes cakes", exampleTranslation: "祖母はケーキを作ります" },
      { id: "je_fam_9", japanese: "叔父", english: "Uncle", example: "My uncle lives in Tokyo", exampleTranslation: "叔父は東京に住んでいます" },
      { id: "je_fam_10", japanese: "叔母", english: "Aunt", example: "My aunt is very kind", exampleTranslation: "叔母はとても優しいです" }
    ]
  },

  numbers: {
    name: "数字",
    description: "基本的な数字",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "je_num_1", japanese: "一", english: "One", example: "I have one brother", exampleTranslation: "私には兄が一人います" },
      { id: "je_num_2", japanese: "二", english: "Two", example: "There are two cats", exampleTranslation: "猫が二匹います" },
      { id: "je_num_3", japanese: "三", english: "Three", example: "It's three o'clock", exampleTranslation: "3時です" },
      { id: "je_num_4", japanese: "四", english: "Four", example: "Four seasons", exampleTranslation: "四季" },
      { id: "je_num_5", japanese: "五", english: "Five", example: "Five fingers on the hand", exampleTranslation: "手には5本の指があります" },
      { id: "je_num_6", japanese: "六", english: "Six", example: "My son is six years old", exampleTranslation: "息子は6歳です" },
      { id: "je_num_7", japanese: "七", english: "Seven", example: "Seven days of the week", exampleTranslation: "一週間は7日です" },
      { id: "je_num_8", japanese: "八", english: "Eight", example: "I work eight hours", exampleTranslation: "私は8時間働きます" },
      { id: "je_num_9", japanese: "九", english: "Nine", example: "It's nine o'clock in the morning", exampleTranslation: "朝の9時です" },
      { id: "je_num_10", japanese: "十", english: "Ten", example: "Ten euros, please", exampleTranslation: "10ユーロお願いします" }
    ]
  },

  colors: {
    name: "色",
    description: "基本的な色",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "je_col_1", japanese: "赤", english: "Red", example: "The car is red", exampleTranslation: "車は赤いです" },
      { id: "je_col_2", japanese: "青", english: "Blue", example: "The sky is blue", exampleTranslation: "空は青いです" },
      { id: "je_col_3", japanese: "緑", english: "Green", example: "The grass is green", exampleTranslation: "草は緑です" },
      { id: "je_col_4", japanese: "黄色", english: "Yellow", example: "The sun is yellow", exampleTranslation: "太陽は黄色いです" },
      { id: "je_col_5", japanese: "黒", english: "Black", example: "My cat is black", exampleTranslation: "私の猫は黒いです" },
      { id: "je_col_6", japanese: "白", english: "White", example: "The snow is white", exampleTranslation: "雪は白いです" },
      { id: "je_col_7", japanese: "オレンジ", english: "Orange", example: "The orange is orange", exampleTranslation: "オレンジはオレンジ色です" },
      { id: "je_col_8", japanese: "ピンク", english: "Pink", example: "The dress is pink", exampleTranslation: "ドレスはピンクです" },
      { id: "je_col_9", japanese: "茶色", english: "Brown", example: "The bear is brown", exampleTranslation: "熊は茶色です" },
      { id: "je_col_10", japanese: "灰色", english: "Gray", example: "The elephant is gray", exampleTranslation: "象は灰色です" }
    ]
  },

  food: {
    name: "食べ物",
    description: "基本的な食べ物",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "je_food_1", japanese: "パン", english: "Bread", example: "The bread is fresh", exampleTranslation: "パンは新鮮です" },
      { id: "je_food_2", japanese: "水", english: "Water", example: "A glass of water, please", exampleTranslation: "水を一杯お願いします" },
      { id: "je_food_3", japanese: "コーヒー", english: "Coffee", example: "I like coffee", exampleTranslation: "私はコーヒーが好きです" },
      { id: "je_food_4", japanese: "牛乳", english: "Milk", example: "The milk is fresh", exampleTranslation: "牛乳は新鮮です" },
      { id: "je_food_5", japanese: "肉", english: "Meat", example: "The meat is delicious", exampleTranslation: "肉は美味しいです" },
      { id: "je_food_6", japanese: "魚", english: "Fish", example: "Fish is very healthy", exampleTranslation: "魚はとても健康的です" },
      { id: "je_food_7", japanese: "果物", english: "Fruit", example: "I eat fruit every day", exampleTranslation: "私は毎日果物を食べます" },
      { id: "je_food_8", japanese: "野菜", english: "Vegetables", example: "Vegetables are important", exampleTranslation: "野菜は重要です" },
      { id: "je_food_9", japanese: "チーズ", english: "Cheese", example: "Japanese cheese is delicious", exampleTranslation: "日本のチーズは美味しいです" },
      { id: "je_food_10", japanese: "卵", english: "Egg", example: "I eat eggs for breakfast", exampleTranslation: "私は朝食に卵を食べます" }
    ]
  },

  house: {
    name: "家",
    description: "家庭用品",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "je_house_1", japanese: "家", english: "House", example: "My house is big", exampleTranslation: "私の家は大きいです" },
      { id: "je_house_2", japanese: "部屋", english: "Room", example: "The room is clean", exampleTranslation: "部屋はきれいです" },
      { id: "je_house_3", japanese: "台所", english: "Kitchen", example: "I cook in the kitchen", exampleTranslation: "私は台所で料理します" },
      { id: "je_house_4", japanese: "浴室", english: "Bathroom", example: "The bathroom is new", exampleTranslation: "浴室は新しいです" },
      { id: "je_house_5", japanese: "寝室", english: "Bedroom", example: "My bedroom is comfortable", exampleTranslation: "私の寝室は快適です" },
      { id: "je_house_6", japanese: "ドア", english: "Door", example: "Close the door", exampleTranslation: "ドアを閉めてください" },
      { id: "je_house_7", japanese: "窓", english: "Window", example: "Open the window", exampleTranslation: "窓を開けてください" },
      { id: "je_house_8", japanese: "テーブル", english: "Table", example: "The table is wooden", exampleTranslation: "テーブルは木製です" },
      { id: "je_house_9", japanese: "椅子", english: "Chair", example: "The chair is comfortable", exampleTranslation: "椅子は快適です" },
      { id: "je_house_10", japanese: "ベッド", english: "Bed", example: "The bed is soft", exampleTranslation: "ベッドは柔らかいです" }
    ]
  },

  places: {
    name: "場所",
    description: "場所",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "je_place_1", japanese: "店", english: "Store", example: "The store is open", exampleTranslation: "店は開いています" },
      { id: "je_place_2", japanese: "学校", english: "School", example: "I go to school", exampleTranslation: "私は学校に行きます" },
      { id: "je_place_3", japanese: "病院", english: "Hospital", example: "The hospital is close", exampleTranslation: "病院は近いです" },
      { id: "je_place_4", japanese: "公園", english: "Park", example: "Children play in the park", exampleTranslation: "子供たちは公園で遊びます" },
      { id: "je_place_5", japanese: "レストラン", english: "Restaurant", example: "We eat at the restaurant", exampleTranslation: "私たちはレストランで食べます" },
      { id: "je_place_6", japanese: "ホテル", english: "Hotel", example: "The hotel is very big", exampleTranslation: "ホテルはとても大きいです" },
      { id: "je_place_7", japanese: "銀行", english: "Bank", example: "I go to the bank", exampleTranslation: "私は銀行に行きます" },
      { id: "je_place_8", japanese: "空港", english: "Airport", example: "I'm at the airport", exampleTranslation: "私は空港にいます" },
      { id: "je_place_9", japanese: "駅", english: "Train station", example: "The train station", exampleTranslation: "駅" },
      { id: "je_place_10", japanese: "博物館", english: "Museum", example: "The museum is interesting", exampleTranslation: "博物館は面白いです" }
    ]
  },

  clothing: {
    name: "服",
    description: "衣類",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "je_cloth_1", japanese: "シャツ", english: "Shirt", example: "I like your shirt", exampleTranslation: "あなたのシャツが好きです" },
      { id: "je_cloth_2", japanese: "ズボン", english: "Pants", example: "I need new pants", exampleTranslation: "新しいズボンが必要です" },
      { id: "je_cloth_3", japanese: "靴", english: "Shoes", example: "I bought black shoes", exampleTranslation: "黒い靴を買いました" },
      { id: "je_cloth_4", japanese: "ドレス", english: "Dress", example: "The dress is beautiful", exampleTranslation: "ドレスは美しいです" },
      { id: "je_cloth_5", japanese: "ジャケット", english: "Jacket", example: "I need a jacket", exampleTranslation: "ジャケットが必要です" },
      { id: "je_cloth_6", japanese: "帽子", english: "Hat", example: "Put on the hat", exampleTranslation: "帽子をかぶってください" },
      { id: "je_cloth_7", japanese: "靴下", english: "Socks", example: "My socks are clean", exampleTranslation: "私の靴下はきれいです" },
      { id: "je_cloth_8", japanese: "手袋", english: "Gloves", example: "I wear gloves in winter", exampleTranslation: "冬は手袋をします" },
      { id: "je_cloth_9", japanese: "スカーフ", english: "Scarf", example: "The scarf is soft", exampleTranslation: "スカーフは柔らかいです" },
      { id: "je_cloth_10", japanese: "コート", english: "Coat", example: "The coat is warm", exampleTranslation: "コートは暖かいです" }
    ]
  },

  work: {
    name: "仕事",
    description: "職業",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "je_work_1", japanese: "仕事", english: "Work", example: "I go to work", exampleTranslation: "私は仕事に行きます" },
      { id: "je_work_2", japanese: "医者", english: "Doctor", example: "He is a doctor", exampleTranslation: "彼は医者です" },
      { id: "je_work_3", japanese: "先生", english: "Teacher", example: "My teacher is excellent", exampleTranslation: "私の先生は素晴らしいです" },
      { id: "je_work_4", japanese: "エンジニア", english: "Engineer", example: "I am an engineer", exampleTranslation: "私はエンジニアです" },
      { id: "je_work_5", japanese: "弁護士", english: "Lawyer", example: "She is a lawyer", exampleTranslation: "彼女は弁護士です" },
      { id: "je_work_6", japanese: "料理人", english: "Cook", example: "The cook prepares the meal", exampleTranslation: "料理人が食事を準備します" },
      { id: "je_work_7", japanese: "ウェイター", english: "Waiter", example: "The waiter is kind", exampleTranslation: "ウェイターは親切です" },
      { id: "je_work_8", japanese: "販売員", english: "Salesperson", example: "The salesperson helps the customer", exampleTranslation: "販売員が顧客を助けます" },
      { id: "je_work_9", japanese: "警察官", english: "Police officer", example: "The police officer protects the city", exampleTranslation: "警察官が街を守ります" },
      { id: "je_work_10", japanese: "整備士", english: "Mechanic", example: "The mechanic repairs cars", exampleTranslation: "整備士が車を修理します" }
    ]
  },

  transport: {
    name: "交通",
    description: "交通手段",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "je_trans_1", japanese: "車", english: "Car", example: "I have a new car", exampleTranslation: "私は新しい車を持っています" },
      { id: "je_trans_2", japanese: "バス", english: "Bus", example: "I go by bus", exampleTranslation: "私はバスで行きます" },
      { id: "je_trans_3", japanese: "電車", english: "Train", example: "The train is fast", exampleTranslation: "電車は速いです" },
      { id: "je_trans_4", japanese: "飛行機", english: "Airplane", example: "I travel by plane", exampleTranslation: "私は飛行機で旅行します" },
      { id: "je_trans_5", japanese: "自転車", english: "Bicycle", example: "I ride a bicycle", exampleTranslation: "私は自転車に乗ります" },
      { id: "je_trans_6", japanese: "タクシー", english: "Taxi", example: "I call a taxi", exampleTranslation: "私はタクシーを呼びます" },
      { id: "je_trans_7", japanese: "地下鉄", english: "Metro", example: "I use the metro", exampleTranslation: "私は地下鉄を使います" },
      { id: "je_trans_8", japanese: "バイク", english: "Motorcycle", example: "My motorcycle is red", exampleTranslation: "私のバイクは赤いです" },
      { id: "je_trans_9", japanese: "ボート", english: "Boat", example: "We sail by boat", exampleTranslation: "私たちはボートで航海します" },
      { id: "je_trans_10", japanese: "切符", english: "Ticket", example: "I buy a ticket", exampleTranslation: "私は切符を買います" }
    ]
  },

  education: {
    name: "教育",
    description: "学校",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "je_edu_1", japanese: "学生", english: "Student", example: "I am a student", exampleTranslation: "私は学生です" },
      { id: "je_edu_2", japanese: "先生", english: "Teacher", example: "The teacher teaches well", exampleTranslation: "先生はよく教えます" },
      { id: "je_edu_3", japanese: "本", english: "Book", example: "I read a book", exampleTranslation: "私は本を読みます" },
      { id: "je_edu_4", japanese: "鉛筆", english: "Pencil", example: "Do you have a pencil?", exampleTranslation: "鉛筆を持っていますか？" },
      { id: "je_edu_5", japanese: "ノート", english: "Notebook", example: "I need a notebook", exampleTranslation: "ノートが必要です" },
      { id: "je_edu_6", japanese: "試験", english: "Exam", example: "The exam is tomorrow", exampleTranslation: "試験は明日です" },
      { id: "je_edu_7", japanese: "宿題", english: "Homework", example: "I have a lot of homework", exampleTranslation: "宿題がたくさんあります" },
      { id: "je_edu_8", japanese: "授業", english: "Class", example: "The class starts at nine", exampleTranslation: "授業は9時に始まります" },
      { id: "je_edu_9", japanese: "図書館", english: "Library", example: "I study at the library", exampleTranslation: "私は図書館で勉強します" },
      { id: "je_edu_10", japanese: "リュックサック", english: "Backpack", example: "My backpack is heavy", exampleTranslation: "私のリュックサックは重いです" }
    ]
  },

  nature: {
    name: "自然",
    description: "自然",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "je_nature_1", japanese: "木", english: "Tree", example: "The tree is tall", exampleTranslation: "木は高いです" },
      { id: "je_nature_2", japanese: "花", english: "Flower", example: "The flower is beautiful", exampleTranslation: "花は美しいです" },
      { id: "je_nature_3", japanese: "山", english: "Mountain", example: "The mountain is high", exampleTranslation: "山は高いです" },
      { id: "je_nature_4", japanese: "川", english: "River", example: "The river is long", exampleTranslation: "川は長いです" },
      { id: "je_nature_5", japanese: "海", english: "Sea", example: "The sea is blue", exampleTranslation: "海は青いです" },
      { id: "je_nature_6", japanese: "森", english: "Forest", example: "We walk through the forest", exampleTranslation: "私たちは森を歩きます" },
      { id: "je_nature_7", japanese: "湖", english: "Lake", example: "The lake is calm", exampleTranslation: "湖は穏やかです" },
      { id: "je_nature_8", japanese: "空", english: "Sky", example: "The sky is blue", exampleTranslation: "空は青いです" },
      { id: "je_nature_9", japanese: "星", english: "Star", example: "The stars shine", exampleTranslation: "星が輝いています" },
      { id: "je_nature_10", japanese: "月", english: "Moon", example: "The moon is full", exampleTranslation: "月は満月です" }
    ]
  },

  emotions: {
    name: "感情",
    description: "感情",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "je_emo_1", japanese: "嬉しい", english: "Happy", example: "I am happy", exampleTranslation: "私は嬉しいです" },
      { id: "je_emo_2", japanese: "悲しい", english: "Sad", example: "He is sad", exampleTranslation: "彼は悲しいです" },
      { id: "je_emo_3", japanese: "怒っている", english: "Angry", example: "She is angry", exampleTranslation: "彼女は怒っています" },
      { id: "je_emo_4", japanese: "疲れた", english: "Tired", example: "I am tired", exampleTranslation: "私は疲れています" },
      { id: "je_emo_5", japanese: "興奮している", english: "Excited", example: "We are excited", exampleTranslation: "私たちは興奮しています" },
      { id: "je_emo_6", japanese: "緊張している", english: "Nervous", example: "He is nervous", exampleTranslation: "彼は緊張しています" },
      { id: "je_emo_7", japanese: "落ち着いている", english: "Calm", example: "She is calm", exampleTranslation: "彼女は落ち着いています" },
      { id: "je_emo_8", japanese: "驚いた", english: "Surprised", example: "I am surprised", exampleTranslation: "私は驚きました" },
      { id: "je_emo_9", japanese: "怖い", english: "Scared", example: "The child is scared", exampleTranslation: "子供は怖がっています" },
      { id: "je_emo_10", japanese: "退屈", english: "Bored", example: "They are bored", exampleTranslation: "彼らは退屈しています" }
    ]
  },

  time: {
    name: "時間",
    description: "時間表現",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "je_time_1", japanese: "今日", english: "Today", example: "Today is Monday", exampleTranslation: "今日は月曜日です" },
      { id: "je_time_2", japanese: "昨日", english: "Yesterday", example: "Yesterday was Sunday", exampleTranslation: "昨日は日曜日でした" },
      { id: "je_time_3", japanese: "明日", english: "Tomorrow", example: "Tomorrow is Tuesday", exampleTranslation: "明日は火曜日です" },
      { id: "je_time_4", japanese: "今", english: "Now", example: "I'm working now", exampleTranslation: "私は今働いています" },
      { id: "je_time_5", japanese: "後で", english: "Later", example: "I'll do it later", exampleTranslation: "後でやります" },
      { id: "je_time_6", japanese: "朝", english: "Morning", example: "Good morning", exampleTranslation: "おはようございます" },
      { id: "je_time_7", japanese: "昼", english: "Noon", example: "It's noon", exampleTranslation: "昼です" },
      { id: "je_time_8", japanese: "夕方", english: "Evening", example: "Good evening", exampleTranslation: "こんばんは" },
      { id: "je_time_9", japanese: "夜", english: "Night", example: "Good night", exampleTranslation: "おやすみなさい" },
      { id: "je_time_10", japanese: "週", english: "Week", example: "Next week", exampleTranslation: "来週" }
    ]
  },

  weather: {
    name: "天気",
    description: "天気の状態",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "je_weather_1", japanese: "太陽", english: "Sun", example: "The sun shines", exampleTranslation: "太陽が輝いています" },
      { id: "je_weather_2", japanese: "雨", english: "Rain", example: "It's raining", exampleTranslation: "雨が降っています" },
      { id: "je_weather_3", japanese: "雪", english: "Snow", example: "It's snowing", exampleTranslation: "雪が降っています" },
      { id: "je_weather_4", japanese: "風", english: "Wind", example: "It's windy", exampleTranslation: "風が吹いています" },
      { id: "je_weather_5", japanese: "雲", english: "Cloud", example: "There are clouds in the sky", exampleTranslation: "空に雲があります" },
      { id: "je_weather_6", japanese: "嵐", english: "Storm", example: "A storm is coming", exampleTranslation: "嵐が来ています" },
      { id: "je_weather_7", japanese: "暑い", english: "Hot", example: "It's very hot", exampleTranslation: "とても暑いです" },
      { id: "je_weather_8", japanese: "寒い", english: "Cold", example: "It's cold in winter", exampleTranslation: "冬は寒いです" },
      { id: "je_weather_9", japanese: "雷", english: "Lightning", example: "I saw lightning", exampleTranslation: "雷を見ました" },
      { id: "je_weather_10", japanese: "雷鳴", english: "Thunder", example: "You can hear thunder", exampleTranslation: "雷鳴が聞こえます" }
    ]
  },

  body: {
    name: "体",
    description: "体の部分",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "je_body_1", japanese: "頭", english: "Head", example: "My head hurts", exampleTranslation: "頭が痛いです" },
      { id: "je_body_2", japanese: "目", english: "Eye", example: "I have blue eyes", exampleTranslation: "私は青い目をしています" },
      { id: "je_body_3", japanese: "鼻", english: "Nose", example: "My nose is cold", exampleTranslation: "鼻が冷たいです" },
      { id: "je_body_4", japanese: "口", english: "Mouth", example: "Open your mouth", exampleTranslation: "口を開けてください" },
      { id: "je_body_5", japanese: "耳", english: "Ear", example: "My ears are big", exampleTranslation: "私の耳は大きいです" },
      { id: "je_body_6", japanese: "手", english: "Hand", example: "Give me your hand", exampleTranslation: "手を出してください" },
      { id: "je_body_7", japanese: "足", english: "Foot", example: "My foot hurts", exampleTranslation: "足が痛いです" },
      { id: "je_body_8", japanese: "腕", english: "Arm", example: "Raise your arm", exampleTranslation: "腕を上げてください" },
      { id: "je_body_9", japanese: "脚", english: "Leg", example: "My legs are tired", exampleTranslation: "脚が疲れています" },
      { id: "je_body_10", japanese: "心臓", english: "Heart", example: "My heart beats fast", exampleTranslation: "心臓が速く鼓動しています" }
    ]
  },

  activities: {
    name: "活動",
    description: "日常活動",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "je_act_1", japanese: "食べる", english: "Eat", example: "I'm going to eat", exampleTranslation: "私は食べます" },
      { id: "je_act_2", japanese: "飲む", english: "Drink", example: "I drink water", exampleTranslation: "私は水を飲みます" },
      { id: "je_act_3", japanese: "寝る", english: "Sleep", example: "I need to sleep", exampleTranslation: "私は眠る必要があります" },
      { id: "je_act_4", japanese: "走る", english: "Run", example: "I run in the morning", exampleTranslation: "私は朝走ります" },
      { id: "je_act_5", japanese: "読む", english: "Read", example: "I read a book", exampleTranslation: "私は本を読みます" },
      { id: "je_act_6", japanese: "書く", english: "Write", example: "I write a letter", exampleTranslation: "私は手紙を書きます" },
      { id: "je_act_7", japanese: "話す", english: "Speak", example: "I speak Japanese", exampleTranslation: "私は日本語を話します" },
      { id: "je_act_8", japanese: "聞く", english: "Listen", example: "I listen to music", exampleTranslation: "私は音楽を聴きます" },
      { id: "je_act_9", japanese: "見る", english: "Watch", example: "I watch television", exampleTranslation: "私はテレビを見ます" },
      { id: "je_act_10", japanese: "考える", english: "Think", example: "I think of you", exampleTranslation: "あなたのことを考えています" }
    ]
  },

  learning: {
    name: "学習",
    description: "学習活動",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "je_learn_1", japanese: "学ぶ", english: "Learn", example: "I learn Japanese", exampleTranslation: "私は日本語を学びます" },
      { id: "je_learn_2", japanese: "勉強する", english: "Study", example: "I study at university", exampleTranslation: "私は大学で勉強します" },
      { id: "je_learn_3", japanese: "教える", english: "Teach", example: "I teach English", exampleTranslation: "私は英語を教えます" },
      { id: "je_learn_4", japanese: "理解する", english: "Understand", example: "I understand the lesson", exampleTranslation: "レッスンを理解しています" },
      { id: "je_learn_5", japanese: "練習する", english: "Practice", example: "I practice every day", exampleTranslation: "私は毎日練習します" },
      { id: "je_learn_6", japanese: "繰り返す", english: "Repeat", example: "Repeat the word", exampleTranslation: "その言葉を繰り返してください" },
      { id: "je_learn_7", japanese: "説明する", english: "Explain", example: "The teacher explains well", exampleTranslation: "先生はよく説明します" },
      { id: "je_learn_8", japanese: "質問する", english: "Ask", example: "I ask the teacher", exampleTranslation: "私は先生に質問します" },
      { id: "je_learn_9", japanese: "答える", english: "Answer", example: "I answer the question", exampleTranslation: "私は質問に答えます" },
      { id: "je_learn_10", japanese: "覚える", english: "Remember", example: "I remember the lesson", exampleTranslation: "レッスンを覚えています" }
    ]
  },

  sports: {
    name: "スポーツ",
    description: "スポーツ",
    icon: Dumbbell,
    color: "from-lime-400 to-green-500",
    level: "intermediate",
    words: [
      { id: "je_sport_1", japanese: "サッカー", english: "Football", example: "I play football", exampleTranslation: "私はサッカーをします" },
      { id: "je_sport_2", japanese: "バスケットボール", english: "Basketball", example: "I like basketball", exampleTranslation: "私はバスケットボールが好きです" },
      { id: "je_sport_3", japanese: "テニス", english: "Tennis", example: "I play tennis", exampleTranslation: "私はテニスをします" },
      { id: "je_sport_4", japanese: "水泳", english: "Swimming", example: "Swimming is healthy", exampleTranslation: "水泳は健康的です" },
      { id: "je_sport_5", japanese: "ランニング", english: "Running", example: "I run in the morning", exampleTranslation: "私は朝走ります" },
      { id: "je_sport_6", japanese: "サイクリング", english: "Cycling", example: "I like cycling", exampleTranslation: "私はサイクリングが好きです" },
      { id: "je_sport_7", japanese: "ジム", english: "Gym", example: "I go to the gym", exampleTranslation: "私はジムに行きます" },
      { id: "je_sport_8", japanese: "トレーニング", english: "Training", example: "I have training today", exampleTranslation: "今日はトレーニングがあります" },
      { id: "je_sport_9", japanese: "チーム", english: "Team", example: "I'm on a team", exampleTranslation: "私はチームに所属しています" },
      { id: "je_sport_10", japanese: "コーチ", english: "Coach", example: "Our coach is excellent", exampleTranslation: "私たちのコーチは素晴らしいです" }
    ]
  },

  travel: {
    name: "旅行",
    description: "観光",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "je_travel_1", japanese: "旅行", english: "Travel", example: "I'm going on a trip", exampleTranslation: "私は旅行に行きます" },
      { id: "je_travel_2", japanese: "スーツケース", english: "Suitcase", example: "My suitcase is heavy", exampleTranslation: "私のスーツケースは重いです" },
      { id: "je_travel_3", japanese: "パスポート", english: "Passport", example: "I need my passport", exampleTranslation: "パスポートが必要です" },
      { id: "je_travel_4", japanese: "ホテル", english: "Hotel", example: "The hotel is comfortable", exampleTranslation: "ホテルは快適です" },
      { id: "je_travel_5", japanese: "予約", english: "Reservation", example: "I have a reservation", exampleTranslation: "予約があります" },
      { id: "je_travel_6", japanese: "観光客", english: "Tourist", example: "I am a tourist", exampleTranslation: "私は観光客です" },
      { id: "je_travel_7", japanese: "休暇", english: "Vacation", example: "I'm on vacation", exampleTranslation: "私は休暇中です" },
      { id: "je_travel_8", japanese: "観光", english: "Sightseeing", example: "We're doing sightseeing", exampleTranslation: "私たちは観光しています" },
      { id: "je_travel_9", japanese: "ガイド", english: "Guide", example: "The guide is informative", exampleTranslation: "ガイドは有益です" },
      { id: "je_travel_10", japanese: "お土産", english: "Souvenir", example: "I'm buying a souvenir", exampleTranslation: "お土産を買っています" }
    ]
  },

  entertainment: {
    name: "娯楽",
    description: "レジャー",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "je_ent_1", japanese: "音楽", english: "Music", example: "I listen to music", exampleTranslation: "私は音楽を聴きます" },
      { id: "je_ent_2", japanese: "映画", english: "Movie", example: "I watch a movie", exampleTranslation: "私は映画を見ます" },
      { id: "je_ent_3", japanese: "コンサート", english: "Concert", example: "I go to a concert", exampleTranslation: "私はコンサートに行きます" },
      { id: "je_ent_4", japanese: "劇場", english: "Theater", example: "I go to the theater", exampleTranslation: "私は劇場に行きます" },
      { id: "je_ent_5", japanese: "ダンス", english: "Dance", example: "I like to dance", exampleTranslation: "私はダンスが好きです" },
      { id: "je_ent_6", japanese: "歌う", english: "Sing", example: "I like to sing", exampleTranslation: "私は歌うのが好きです" },
      { id: "je_ent_7", japanese: "ギター", english: "Guitar", example: "I play guitar", exampleTranslation: "私はギターを弾きます" },
      { id: "je_ent_8", japanese: "ゲーム", english: "Games", example: "I play video games", exampleTranslation: "私はビデオゲームをします" },
      { id: "je_ent_9", japanese: "写真撮影", english: "Photography", example: "I'm interested in photography", exampleTranslation: "私は写真撮影に興味があります" },
      { id: "je_ent_10", japanese: "読書", english: "Reading", example: "Reading is my hobby", exampleTranslation: "読書は私の趣味です" }
    ]
  }
};

export default flashcardsCategories;