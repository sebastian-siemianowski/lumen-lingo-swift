import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Greetings",
    description: "Basic greetings",
    icon: Hand,
    color: "from-blue-400 to-blue-600",
    level: "beginner",
    words: [
      { id: "ej_greet_1", english: "Hello", japanese: "こんにちは", example: "こんにちは、お元気ですか？", exampleTranslation: "Hello, how are you?" },
      { id: "ej_greet_2", english: "Good morning", japanese: "おはようございます", example: "おはようございます、先生", exampleTranslation: "Good morning, sir" },
      { id: "ej_greet_3", english: "Good evening", japanese: "こんばんは", example: "こんばんは、お元気ですか？", exampleTranslation: "Good evening, how are you?" },
      { id: "ej_greet_4", english: "Good night", japanese: "おやすみなさい", example: "おやすみなさい、よく眠れますように", exampleTranslation: "Good night, sleep well" },
      { id: "ej_greet_5", english: "Goodbye", japanese: "さようなら", example: "さようなら、また後で", exampleTranslation: "Goodbye, see you later" },
      { id: "ej_greet_6", english: "Thank you", japanese: "ありがとうございます", example: "ご協力ありがとうございます", exampleTranslation: "Thank you for your help" },
      { id: "ej_greet_7", english: "Please", japanese: "お願いします", example: "お願いします、助けてください", exampleTranslation: "Please, help me" },
      { id: "ej_greet_8", english: "Excuse me", japanese: "すみません", example: "すみません、遅れました", exampleTranslation: "Excuse me, I'm late" },
      { id: "ej_greet_9", english: "Yes", japanese: "はい", example: "はい、賛成です", exampleTranslation: "Yes, I agree" },
      { id: "ej_greet_10", english: "No", japanese: "いいえ", example: "いいえ、欲しくないです", exampleTranslation: "No, I don't want" }
    ]
  },

  family: {
    name: "Family",
    description: "Family members",
    icon: Users,
    color: "from-purple-400 to-purple-600",
    level: "beginner",
    words: [
      { id: "ej_fam_1", english: "Father", japanese: "父", example: "父はたくさん働きます", exampleTranslation: "My father works a lot" },
      { id: "ej_fam_2", english: "Mother", japanese: "母", example: "母は料理が上手です", exampleTranslation: "My mother cooks well" },
      { id: "ej_fam_3", english: "Brother", japanese: "兄", example: "兄は医学を勉強しています", exampleTranslation: "My brother studies medicine" },
      { id: "ej_fam_4", english: "Sister", japanese: "姉", example: "姉は先生です", exampleTranslation: "My sister is a teacher" },
      { id: "ej_fam_5", english: "Son", japanese: "息子", example: "息子は10歳です", exampleTranslation: "My son is ten years old" },
      { id: "ej_fam_6", english: "Daughter", japanese: "娘", example: "娘は大学に通っています", exampleTranslation: "My daughter goes to university" },
      { id: "ej_fam_7", english: "Grandfather", japanese: "祖父", example: "祖父はとても賢いです", exampleTranslation: "My grandfather is very wise" },
      { id: "ej_fam_8", english: "Grandmother", japanese: "祖母", example: "祖母はケーキを作ります", exampleTranslation: "My grandmother makes cakes" },
      { id: "ej_fam_9", english: "Uncle", japanese: "叔父", example: "叔父は東京に住んでいます", exampleTranslation: "My uncle lives in Tokyo" },
      { id: "ej_fam_10", english: "Aunt", japanese: "叔母", example: "叔母はとても優しいです", exampleTranslation: "My aunt is very kind" }
    ]
  },

  numbers: {
    name: "Numbers",
    description: "Basic numbers",
    icon: Hash,
    color: "from-green-400 to-green-600",
    level: "beginner",
    words: [
      { id: "ej_num_1", english: "One", japanese: "一", example: "私には兄が一人います", exampleTranslation: "I have one brother" },
      { id: "ej_num_2", english: "Two", japanese: "二", example: "猫が二匹います", exampleTranslation: "There are two cats" },
      { id: "ej_num_3", english: "Three", japanese: "三", example: "3時です", exampleTranslation: "It's three o'clock" },
      { id: "ej_num_4", english: "Four", japanese: "四", example: "四季", exampleTranslation: "Four seasons" },
      { id: "ej_num_5", english: "Five", japanese: "五", example: "手には5本の指があります", exampleTranslation: "Five fingers on the hand" },
      { id: "ej_num_6", english: "Six", japanese: "六", example: "息子は6歳です", exampleTranslation: "My son is six years old" },
      { id: "ej_num_7", english: "Seven", japanese: "七", example: "一週間は7日です", exampleTranslation: "Seven days of the week" },
      { id: "ej_num_8", english: "Eight", japanese: "八", example: "私は8時間働きます", exampleTranslation: "I work eight hours" },
      { id: "ej_num_9", english: "Nine", japanese: "九", example: "朝の9時です", exampleTranslation: "It's nine o'clock in the morning" },
      { id: "ej_num_10", english: "Ten", japanese: "十", example: "10ユーロお願いします", exampleTranslation: "Ten euros, please" }
    ]
  },

  colors: {
    name: "Colors",
    description: "Basic colors",
    icon: Palette,
    color: "from-pink-400 to-pink-600",
    level: "beginner",
    words: [
      { id: "ej_col_1", english: "Red", japanese: "赤", example: "車は赤いです", exampleTranslation: "The car is red" },
      { id: "ej_col_2", english: "Blue", japanese: "青", example: "空は青いです", exampleTranslation: "The sky is blue" },
      { id: "ej_col_3", english: "Green", japanese: "緑", example: "草は緑です", exampleTranslation: "The grass is green" },
      { id: "ej_col_4", english: "Yellow", japanese: "黄色", example: "太陽は黄色いです", exampleTranslation: "The sun is yellow" },
      { id: "ej_col_5", english: "Black", japanese: "黒", example: "私の猫は黒いです", exampleTranslation: "My cat is black" },
      { id: "ej_col_6", english: "White", japanese: "白", example: "雪は白いです", exampleTranslation: "The snow is white" },
      { id: "ej_col_7", english: "Orange", japanese: "オレンジ", example: "オレンジはオレンジ色です", exampleTranslation: "The orange is orange" },
      { id: "ej_col_8", english: "Pink", japanese: "ピンク", example: "ドレスはピンクです", exampleTranslation: "The dress is pink" },
      { id: "ej_col_9", english: "Brown", japanese: "茶色", example: "熊は茶色です", exampleTranslation: "The bear is brown" },
      { id: "ej_col_10", english: "Gray", japanese: "灰色", example: "象は灰色です", exampleTranslation: "The elephant is gray" }
    ]
  },

  food: {
    name: "Food",
    description: "Basic foods",
    icon: UtensilsCrossed,
    color: "from-orange-400 to-orange-600",
    level: "beginner",
    words: [
      { id: "ej_food_1", english: "Bread", japanese: "パン", example: "パンは新鮮です", exampleTranslation: "The bread is fresh" },
      { id: "ej_food_2", english: "Water", japanese: "水", example: "水を一杯お願いします", exampleTranslation: "A glass of water, please" },
      { id: "ej_food_3", english: "Coffee", japanese: "コーヒー", example: "私はコーヒーが好きです", exampleTranslation: "I like coffee" },
      { id: "ej_food_4", english: "Milk", japanese: "牛乳", example: "牛乳は新鮮です", exampleTranslation: "The milk is fresh" },
      { id: "ej_food_5", english: "Meat", japanese: "肉", example: "肉は美味しいです", exampleTranslation: "The meat is delicious" },
      { id: "ej_food_6", english: "Fish", japanese: "魚", example: "魚はとても健康的です", exampleTranslation: "Fish is very healthy" },
      { id: "ej_food_7", english: "Fruit", japanese: "果物", example: "私は毎日果物を食べます", exampleTranslation: "I eat fruit every day" },
      { id: "ej_food_8", english: "Vegetables", japanese: "野菜", example: "野菜は重要です", exampleTranslation: "Vegetables are important" },
      { id: "ej_food_9", english: "Cheese", japanese: "チーズ", example: "日本のチーズは美味しいです", exampleTranslation: "Japanese cheese is delicious" },
      { id: "ej_food_10", english: "Egg", japanese: "卵", example: "私は朝食に卵を食べます", exampleTranslation: "I eat eggs for breakfast" }
    ]
  },

  house: {
    name: "House",
    description: "Household items",
    icon: Home,
    color: "from-yellow-400 to-yellow-600",
    level: "beginner",
    words: [
      { id: "ej_house_1", english: "House", japanese: "家", example: "私の家は大きいです", exampleTranslation: "My house is big" },
      { id: "ej_house_2", english: "Room", japanese: "部屋", example: "部屋はきれいです", exampleTranslation: "The room is clean" },
      { id: "ej_house_3", english: "Kitchen", japanese: "台所", example: "私は台所で料理します", exampleTranslation: "I cook in the kitchen" },
      { id: "ej_house_4", english: "Bathroom", japanese: "浴室", example: "浴室は新しいです", exampleTranslation: "The bathroom is new" },
      { id: "ej_house_5", english: "Bedroom", japanese: "寝室", example: "私の寝室は快適です", exampleTranslation: "My bedroom is comfortable" },
      { id: "ej_house_6", english: "Door", japanese: "ドア", example: "ドアを閉めてください", exampleTranslation: "Close the door" },
      { id: "ej_house_7", english: "Window", japanese: "窓", example: "窓を開けてください", exampleTranslation: "Open the window" },
      { id: "ej_house_8", english: "Table", japanese: "テーブル", example: "テーブルは木製です", exampleTranslation: "The table is wooden" },
      { id: "ej_house_9", english: "Chair", japanese: "椅子", example: "椅子は快適です", exampleTranslation: "The chair is comfortable" },
      { id: "ej_house_10", english: "Bed", japanese: "ベッド", example: "ベッドは柔らかいです", exampleTranslation: "The bed is soft" }
    ]
  },

  places: {
    name: "Places",
    description: "Locations",
    icon: MapPin,
    color: "from-red-400 to-red-600",
    level: "beginner",
    words: [
      { id: "ej_place_1", english: "Store", japanese: "店", example: "店は開いています", exampleTranslation: "The store is open" },
      { id: "ej_place_2", english: "School", japanese: "学校", example: "私は学校に行きます", exampleTranslation: "I go to school" },
      { id: "ej_place_3", english: "Hospital", japanese: "病院", example: "病院は近いです", exampleTranslation: "The hospital is close" },
      { id: "ej_place_4", english: "Park", japanese: "公園", example: "子供たちは公園で遊びます", exampleTranslation: "Children play in the park" },
      { id: "ej_place_5", english: "Restaurant", japanese: "レストラン", example: "私たちはレストランで食べます", exampleTranslation: "We eat at the restaurant" },
      { id: "ej_place_6", english: "Hotel", japanese: "ホテル", example: "ホテルはとても大きいです", exampleTranslation: "The hotel is very big" },
      { id: "ej_place_7", english: "Bank", japanese: "銀行", example: "私は銀行に行きます", exampleTranslation: "I go to the bank" },
      { id: "ej_place_8", english: "Airport", japanese: "空港", example: "私は空港にいます", exampleTranslation: "I'm at the airport" },
      { id: "ej_place_9", english: "Train station", japanese: "駅", example: "駅", exampleTranslation: "The train station" },
      { id: "ej_place_10", english: "Museum", japanese: "博物館", example: "博物館は面白いです", exampleTranslation: "The museum is interesting" }
    ]
  },

  clothing: {
    name: "Clothing",
    description: "Clothes",
    icon: Shirt,
    color: "from-indigo-400 to-indigo-600",
    level: "beginner",
    words: [
      { id: "ej_cloth_1", english: "Shirt", japanese: "シャツ", example: "あなたのシャツが好きです", exampleTranslation: "I like your shirt" },
      { id: "ej_cloth_2", english: "Pants", japanese: "ズボン", example: "新しいズボンが必要です", exampleTranslation: "I need new pants" },
      { id: "ej_cloth_3", english: "Shoes", japanese: "靴", example: "黒い靴を買いました", exampleTranslation: "I bought black shoes" },
      { id: "ej_cloth_4", english: "Dress", japanese: "ドレス", example: "ドレスは美しいです", exampleTranslation: "The dress is beautiful" },
      { id: "ej_cloth_5", english: "Jacket", japanese: "ジャケット", example: "ジャケットが必要です", exampleTranslation: "I need a jacket" },
      { id: "ej_cloth_6", english: "Hat", japanese: "帽子", example: "帽子をかぶってください", exampleTranslation: "Put on the hat" },
      { id: "ej_cloth_7", english: "Socks", japanese: "靴下", example: "私の靴下はきれいです", exampleTranslation: "My socks are clean" },
      { id: "ej_cloth_8", english: "Gloves", japanese: "手袋", example: "冬は手袋をします", exampleTranslation: "I wear gloves in winter" },
      { id: "ej_cloth_9", english: "Scarf", japanese: "スカーフ", example: "スカーフは柔らかいです", exampleTranslation: "The scarf is soft" },
      { id: "ej_cloth_10", english: "Coat", japanese: "コート", example: "コートは暖かいです", exampleTranslation: "The coat is warm" }
    ]
  },

  work: {
    name: "Work",
    description: "Professions",
    icon: Briefcase,
    color: "from-cyan-400 to-cyan-600",
    level: "intermediate",
    words: [
      { id: "ej_work_1", english: "Work", japanese: "仕事", example: "私は仕事に行きます", exampleTranslation: "I go to work" },
      { id: "ej_work_2", english: "Doctor", japanese: "医者", example: "彼は医者です", exampleTranslation: "He is a doctor" },
      { id: "ej_work_3", english: "Teacher", japanese: "先生", example: "私の先生は素晴らしいです", exampleTranslation: "My teacher is excellent" },
      { id: "ej_work_4", english: "Engineer", japanese: "エンジニア", example: "私はエンジニアです", exampleTranslation: "I am an engineer" },
      { id: "ej_work_5", english: "Lawyer", japanese: "弁護士", example: "彼女は弁護士です", exampleTranslation: "She is a lawyer" },
      { id: "ej_work_6", english: "Cook", japanese: "料理人", example: "料理人が食事を準備します", exampleTranslation: "The cook prepares the meal" },
      { id: "ej_work_7", english: "Waiter", japanese: "ウェイター", example: "ウェイターは親切です", exampleTranslation: "The waiter is kind" },
      { id: "ej_work_8", english: "Salesperson", japanese: "販売員", example: "販売員が顧客を助けます", exampleTranslation: "The salesperson helps the customer" },
      { id: "ej_work_9", english: "Police officer", japanese: "警察官", example: "警察官が街を守ります", exampleTranslation: "The police officer protects the city" },
      { id: "ej_work_10", english: "Mechanic", japanese: "整備士", example: "整備士が車を修理します", exampleTranslation: "The mechanic repairs cars" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Transportation",
    icon: Car,
    color: "from-teal-400 to-teal-600",
    level: "intermediate",
    words: [
      { id: "ej_trans_1", english: "Car", japanese: "車", example: "私は新しい車を持っています", exampleTranslation: "I have a new car" },
      { id: "ej_trans_2", english: "Bus", japanese: "バス", example: "私はバスで行きます", exampleTranslation: "I go by bus" },
      { id: "ej_trans_3", english: "Train", japanese: "電車", example: "電車は速いです", exampleTranslation: "The train is fast" },
      { id: "ej_trans_4", english: "Airplane", japanese: "飛行機", example: "私は飛行機で旅行します", exampleTranslation: "I travel by plane" },
      { id: "ej_trans_5", english: "Bicycle", japanese: "自転車", example: "私は自転車に乗ります", exampleTranslation: "I ride a bicycle" },
      { id: "ej_trans_6", english: "Taxi", japanese: "タクシー", example: "私はタクシーを呼びます", exampleTranslation: "I call a taxi" },
      { id: "ej_trans_7", english: "Metro", japanese: "地下鉄", example: "私は地下鉄を使います", exampleTranslation: "I use the metro" },
      { id: "ej_trans_8", english: "Motorcycle", japanese: "バイク", example: "私のバイクは赤いです", exampleTranslation: "My motorcycle is red" },
      { id: "ej_trans_9", english: "Boat", japanese: "ボート", example: "私たちはボートで航海します", exampleTranslation: "We sail by boat" },
      { id: "ej_trans_10", english: "Ticket", japanese: "切符", example: "私は切符を買います", exampleTranslation: "I buy a ticket" }
    ]
  },

  education: {
    name: "Education",
    description: "School",
    icon: School,
    color: "from-blue-500 to-blue-700",
    level: "intermediate",
    words: [
      { id: "ej_edu_1", english: "Student", japanese: "学生", example: "私は学生です", exampleTranslation: "I am a student" },
      { id: "ej_edu_2", english: "Teacher", japanese: "先生", example: "先生はよく教えます", exampleTranslation: "The teacher teaches well" },
      { id: "ej_edu_3", english: "Book", japanese: "本", example: "私は本を読みます", exampleTranslation: "I read a book" },
      { id: "ej_edu_4", english: "Pencil", japanese: "鉛筆", example: "鉛筆を持っていますか？", exampleTranslation: "Do you have a pencil?" },
      { id: "ej_edu_5", english: "Notebook", japanese: "ノート", example: "ノートが必要です", exampleTranslation: "I need a notebook" },
      { id: "ej_edu_6", english: "Exam", japanese: "試験", example: "試験は明日です", exampleTranslation: "The exam is tomorrow" },
      { id: "ej_edu_7", english: "Homework", japanese: "宿題", example: "宿題がたくさんあります", exampleTranslation: "I have a lot of homework" },
      { id: "ej_edu_8", english: "Class", japanese: "授業", example: "授業は9時に始まります", exampleTranslation: "The class starts at nine" },
      { id: "ej_edu_9", english: "Library", japanese: "図書館", example: "私は図書館で勉強します", exampleTranslation: "I study at the library" },
      { id: "ej_edu_10", english: "Backpack", japanese: "リュックサック", example: "私のリュックサックは重いです", exampleTranslation: "My backpack is heavy" }
    ]
  },

  nature: {
    name: "Nature",
    description: "Nature",
    icon: TreePine,
    color: "from-green-500 to-green-700",
    level: "intermediate",
    words: [
      { id: "ej_nature_1", english: "Tree", japanese: "木", example: "木は高いです", exampleTranslation: "The tree is tall" },
      { id: "ej_nature_2", english: "Flower", japanese: "花", example: "花は美しいです", exampleTranslation: "The flower is beautiful" },
      { id: "ej_nature_3", english: "Mountain", japanese: "山", example: "山は高いです", exampleTranslation: "The mountain is high" },
      { id: "ej_nature_4", english: "River", japanese: "川", example: "川は長いです", exampleTranslation: "The river is long" },
      { id: "ej_nature_5", english: "Sea", japanese: "海", example: "海は青いです", exampleTranslation: "The sea is blue" },
      { id: "ej_nature_6", english: "Forest", japanese: "森", example: "私たちは森を歩きます", exampleTranslation: "We walk through the forest" },
      { id: "ej_nature_7", english: "Lake", japanese: "湖", example: "湖は穏やかです", exampleTranslation: "The lake is calm" },
      { id: "ej_nature_8", english: "Sky", japanese: "空", example: "空は青いです", exampleTranslation: "The sky is blue" },
      { id: "ej_nature_9", english: "Star", japanese: "星", example: "星が輝いています", exampleTranslation: "The stars shine" },
      { id: "ej_nature_10", english: "Moon", japanese: "月", example: "月は満月です", exampleTranslation: "The moon is full" }
    ]
  },

  emotions: {
    name: "Emotions",
    description: "Feelings",
    icon: Heart,
    color: "from-rose-400 to-rose-600",
    level: "intermediate",
    words: [
      { id: "ej_emo_1", english: "Happy", japanese: "嬉しい", example: "私は嬉しいです", exampleTranslation: "I am happy" },
      { id: "ej_emo_2", english: "Sad", japanese: "悲しい", example: "彼は悲しいです", exampleTranslation: "He is sad" },
      { id: "ej_emo_3", english: "Angry", japanese: "怒っている", example: "彼女は怒っています", exampleTranslation: "She is angry" },
      { id: "ej_emo_4", english: "Tired", japanese: "疲れた", example: "私は疲れています", exampleTranslation: "I am tired" },
      { id: "ej_emo_5", english: "Excited", japanese: "興奮している", example: "私たちは興奮しています", exampleTranslation: "We are excited" },
      { id: "ej_emo_6", english: "Nervous", japanese: "緊張している", example: "彼は緊張しています", exampleTranslation: "He is nervous" },
      { id: "ej_emo_7", english: "Calm", japanese: "落ち着いている", example: "彼女は落ち着いています", exampleTranslation: "She is calm" },
      { id: "ej_emo_8", english: "Surprised", japanese: "驚いた", example: "私は驚きました", exampleTranslation: "I am surprised" },
      { id: "ej_emo_9", english: "Scared", japanese: "怖い", example: "子供は怖がっています", exampleTranslation: "The child is scared" },
      { id: "ej_emo_10", english: "Bored", japanese: "退屈", example: "彼らは退屈しています", exampleTranslation: "They are bored" }
    ]
  },

  time: {
    name: "Time",
    description: "Time expressions",
    icon: Clock,
    color: "from-amber-400 to-amber-600",
    level: "beginner",
    words: [
      { id: "ej_time_1", english: "Today", japanese: "今日", example: "今日は月曜日です", exampleTranslation: "Today is Monday" },
      { id: "ej_time_2", english: "Yesterday", japanese: "昨日", example: "昨日は日曜日でした", exampleTranslation: "Yesterday was Sunday" },
      { id: "ej_time_3", english: "Tomorrow", japanese: "明日", example: "明日は火曜日です", exampleTranslation: "Tomorrow is Tuesday" },
      { id: "ej_time_4", english: "Now", japanese: "今", example: "私は今働いています", exampleTranslation: "I'm working now" },
      { id: "ej_time_5", english: "Later", japanese: "後で", example: "後でやります", exampleTranslation: "I'll do it later" },
      { id: "ej_time_6", english: "Morning", japanese: "朝", example: "おはようございます", exampleTranslation: "Good morning" },
      { id: "ej_time_7", english: "Noon", japanese: "昼", example: "昼です", exampleTranslation: "It's noon" },
      { id: "ej_time_8", english: "Evening", japanese: "夕方", example: "こんばんは", exampleTranslation: "Good evening" },
      { id: "ej_time_9", english: "Night", japanese: "夜", example: "おやすみなさい", exampleTranslation: "Good night" },
      { id: "ej_time_10", english: "Week", japanese: "週", example: "来週", exampleTranslation: "Next week" }
    ]
  },

  weather: {
    name: "Weather",
    description: "Weather conditions",
    icon: Cloud,
    color: "from-sky-400 to-sky-600",
    level: "beginner",
    words: [
      { id: "ej_weather_1", english: "Sun", japanese: "太陽", example: "太陽が輝いています", exampleTranslation: "The sun shines" },
      { id: "ej_weather_2", english: "Rain", japanese: "雨", example: "雨が降っています", exampleTranslation: "It's raining" },
      { id: "ej_weather_3", english: "Snow", japanese: "雪", example: "雪が降っています", exampleTranslation: "It's snowing" },
      { id: "ej_weather_4", english: "Wind", japanese: "風", example: "風が吹いています", exampleTranslation: "It's windy" },
      { id: "ej_weather_5", english: "Cloud", japanese: "雲", example: "空に雲があります", exampleTranslation: "There are clouds in the sky" },
      { id: "ej_weather_6", english: "Storm", japanese: "嵐", example: "嵐が来ています", exampleTranslation: "A storm is coming" },
      { id: "ej_weather_7", english: "Hot", japanese: "暑い", example: "とても暑いです", exampleTranslation: "It's very hot" },
      { id: "ej_weather_8", english: "Cold", japanese: "寒い", example: "冬は寒いです", exampleTranslation: "It's cold in winter" },
      { id: "ej_weather_9", english: "Lightning", japanese: "雷", example: "雷を見ました", exampleTranslation: "I saw lightning" },
      { id: "ej_weather_10", english: "Thunder", japanese: "雷鳴", example: "雷鳴が聞こえます", exampleTranslation: "You can hear thunder" }
    ]
  },

  body: {
    name: "Body",
    description: "Body parts",
    icon: Hand,
    color: "from-violet-400 to-violet-600",
    level: "intermediate",
    words: [
      { id: "ej_body_1", english: "Head", japanese: "頭", example: "頭が痛いです", exampleTranslation: "My head hurts" },
      { id: "ej_body_2", english: "Eye", japanese: "目", example: "私は青い目をしています", exampleTranslation: "I have blue eyes" },
      { id: "ej_body_3", english: "Nose", japanese: "鼻", example: "鼻が冷たいです", exampleTranslation: "My nose is cold" },
      { id: "ej_body_4", english: "Mouth", japanese: "口", example: "口を開けてください", exampleTranslation: "Open your mouth" },
      { id: "ej_body_5", english: "Ear", japanese: "耳", example: "私の耳は大きいです", exampleTranslation: "My ears are big" },
      { id: "ej_body_6", english: "Hand", japanese: "手", example: "手を出してください", exampleTranslation: "Give me your hand" },
      { id: "ej_body_7", english: "Foot", japanese: "足", example: "足が痛いです", exampleTranslation: "My foot hurts" },
      { id: "ej_body_8", english: "Arm", japanese: "腕", example: "腕を上げてください", exampleTranslation: "Raise your arm" },
      { id: "ej_body_9", english: "Leg", japanese: "脚", example: "脚が疲れています", exampleTranslation: "My legs are tired" },
      { id: "ej_body_10", english: "Heart", japanese: "心臓", example: "心臓が速く鼓動しています", exampleTranslation: "My heart beats fast" }
    ]
  },

  activities: {
    name: "Activities",
    description: "Daily activities",
    icon: Lightbulb,
    color: "from-fuchsia-400 to-fuchsia-600",
    level: "intermediate",
    words: [
      { id: "ej_act_1", english: "Eat", japanese: "食べる", example: "私は食べます", exampleTranslation: "I'm going to eat" },
      { id: "ej_act_2", english: "Drink", japanese: "飲む", example: "私は水を飲みます", exampleTranslation: "I drink water" },
      { id: "ej_act_3", english: "Sleep", japanese: "寝る", example: "私は眠る必要があります", exampleTranslation: "I need to sleep" },
      { id: "ej_act_4", english: "Run", japanese: "走る", example: "私は朝走ります", exampleTranslation: "I run in the morning" },
      { id: "ej_act_5", english: "Read", japanese: "読む", example: "私は本を読みます", exampleTranslation: "I read a book" },
      { id: "ej_act_6", english: "Write", japanese: "書く", example: "私は手紙を書きます", exampleTranslation: "I write a letter" },
      { id: "ej_act_7", english: "Speak", japanese: "話す", example: "私は日本語を話します", exampleTranslation: "I speak Japanese" },
      { id: "ej_act_8", english: "Listen", japanese: "聞く", example: "私は音楽を聴きます", exampleTranslation: "I listen to music" },
      { id: "ej_act_9", english: "Watch", japanese: "見る", example: "私はテレビを見ます", exampleTranslation: "I watch television" },
      { id: "ej_act_10", english: "Think", japanese: "考える", example: "あなたのことを考えています", exampleTranslation: "I think of you" }
    ]
  },

  learning: {
    name: "Learning",
    description: "Learning activities",
    icon: BookOpen,
    color: "from-emerald-400 to-emerald-600",
    level: "advanced",
    words: [
      { id: "ej_learn_1", english: "Learn", japanese: "学ぶ", example: "私は日本語を学びます", exampleTranslation: "I learn Japanese" },
      { id: "ej_learn_2", english: "Study", japanese: "勉強する", example: "私は大学で勉強します", exampleTranslation: "I study at university" },
      { id: "ej_learn_3", english: "Teach", japanese: "教える", example: "私は英語を教えます", exampleTranslation: "I teach English" },
      { id: "ej_learn_4", english: "Understand", japanese: "理解する", example: "レッスンを理解しています", exampleTranslation: "I understand the lesson" },
      { id: "ej_learn_5", english: "Practice", japanese: "練習する", example: "私は毎日練習します", exampleTranslation: "I practice every day" },
      { id: "ej_learn_6", english: "Repeat", japanese: "繰り返す", example: "その言葉を繰り返してください", exampleTranslation: "Repeat the word" },
      { id: "ej_learn_7", english: "Explain", japanese: "説明する", example: "先生はよく説明します", exampleTranslation: "The teacher explains well" },
      { id: "ej_learn_8", english: "Ask", japanese: "質問する", example: "私は先生に質問します", exampleTranslation: "I ask the teacher" },
      { id: "ej_learn_9", english: "Answer", japanese: "答える", example: "私は質問に答えます", exampleTranslation: "I answer the question" },
      { id: "ej_learn_10", english: "Remember", japanese: "覚える", example: "レッスンを覚えています", exampleTranslation: "I remember the lesson" }
    ]
  },

  sports: {
    name: "Sports",
    description: "Sports",
    icon: Dumbbell,
    color: "from-lime-400 to-lime-600",
    level: "intermediate",
    words: [
      { id: "ej_sport_1", english: "Football", japanese: "サッカー", example: "私はサッカーをします", exampleTranslation: "I play football" },
      { id: "ej_sport_2", english: "Basketball", japanese: "バスケットボール", example: "私はバスケットボールが好きです", exampleTranslation: "I like basketball" },
      { id: "ej_sport_3", english: "Tennis", japanese: "テニス", example: "私はテニスをします", exampleTranslation: "I play tennis" },
      { id: "ej_sport_4", english: "Swimming", japanese: "水泳", example: "水泳は健康的です", exampleTranslation: "Swimming is healthy" },
      { id: "ej_sport_5", english: "Running", japanese: "ランニング", example: "私は朝走ります", exampleTranslation: "I run in the morning" },
      { id: "ej_sport_6", english: "Cycling", japanese: "サイクリング", example: "私はサイクリングが好きです", exampleTranslation: "I like cycling" },
      { id: "ej_sport_7", english: "Gym", japanese: "ジム", example: "私はジムに行きます", exampleTranslation: "I go to the gym" },
      { id: "ej_sport_8", english: "Training", japanese: "トレーニング", example: "今日はトレーニングがあります", exampleTranslation: "I have training today" },
      { id: "ej_sport_9", english: "Team", japanese: "チーム", example: "私はチームに所属しています", exampleTranslation: "I'm on a team" },
      { id: "ej_sport_10", english: "Coach", japanese: "コーチ", example: "私たちのコーチは素晴らしいです", exampleTranslation: "Our coach is excellent" }
    ]
  },

  travel: {
    name: "Travel",
    description: "Tourism",
    icon: Plane,
    color: "from-blue-600 to-blue-800",
    level: "advanced",
    words: [
      { id: "ej_travel_1", english: "Travel", japanese: "旅行", example: "私は旅行に行きます", exampleTranslation: "I'm going on a trip" },
      { id: "ej_travel_2", english: "Suitcase", japanese: "スーツケース", example: "私のスーツケースは重いです", exampleTranslation: "My suitcase is heavy" },
      { id: "ej_travel_3", english: "Passport", japanese: "パスポート", example: "パスポートが必要です", exampleTranslation: "I need my passport" },
      { id: "ej_travel_4", english: "Hotel", japanese: "ホテル", example: "ホテルは快適です", exampleTranslation: "The hotel is comfortable" },
      { id: "ej_travel_5", english: "Reservation", japanese: "予約", example: "予約があります", exampleTranslation: "I have a reservation" },
      { id: "ej_travel_6", english: "Tourist", japanese: "観光客", example: "私は観光客です", exampleTranslation: "I am a tourist" },
      { id: "ej_travel_7", english: "Vacation", japanese: "休暇", example: "私は休暇中です", exampleTranslation: "I'm on vacation" },
      { id: "ej_travel_8", english: "Sightseeing", japanese: "観光", example: "私たちは観光しています", exampleTranslation: "We're doing sightseeing" },
      { id: "ej_travel_9", english: "Guide", japanese: "ガイド", example: "ガイドは有益です", exampleTranslation: "The guide is informative" },
      { id: "ej_travel_10", english: "Souvenir", japanese: "お土産", example: "お土産を買っています", exampleTranslation: "I'm buying a souvenir" }
    ]
  },

  entertainment: {
    name: "Entertainment",
    description: "Leisure",
    icon: Music,
    color: "from-purple-500 to-purple-700",
    level: "advanced",
    words: [
      { id: "ej_ent_1", english: "Music", japanese: "音楽", example: "私は音楽を聴きます", exampleTranslation: "I listen to music" },
      { id: "ej_ent_2", english: "Movie", japanese: "映画", example: "私は映画を見ます", exampleTranslation: "I watch a movie" },
      { id: "ej_ent_3", english: "Concert", japanese: "コンサート", example: "私はコンサートに行きます", exampleTranslation: "I go to a concert" },
      { id: "ej_ent_4", english: "Theater", japanese: "劇場", example: "私は劇場に行きます", exampleTranslation: "I go to the theater" },
      { id: "ej_ent_5", english: "Dance", japanese: "ダンス", example: "私はダンスが好きです", exampleTranslation: "I like to dance" },
      { id: "ej_ent_6", english: "Sing", japanese: "歌う", example: "私は歌うのが好きです", exampleTranslation: "I like to sing" },
      { id: "ej_ent_7", english: "Guitar", japanese: "ギター", example: "私はギターを弾きます", exampleTranslation: "I play guitar" },
      { id: "ej_ent_8", english: "Games", japanese: "ゲーム", example: "私はビデオゲームをします", exampleTranslation: "I play video games" },
      { id: "ej_ent_9", english: "Photography", japanese: "写真撮影", example: "私は写真撮影に興味があります", exampleTranslation: "I'm interested in photography" },
      { id: "ej_ent_10", english: "Reading", japanese: "読書", example: "読書は私の趣味です", exampleTranslation: "Reading is my hobby" }
    ]
  }
};

export default flashcardsCategories;