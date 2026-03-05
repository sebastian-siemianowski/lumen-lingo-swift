/**
 * POLISH → CHINESE FLASHCARDS
 * 
 * Native Language: Polish (Polski)
 * Target Language: Chinese (中文)
 */

import { Hand, Users, Hash, Palette, UtensilsCrossed, Home, MapPin, Shirt, Briefcase, Car, School, TreePine, Heart, Clock, Cloud, Lightbulb, BookOpen, Dumbbell, Plane, Music } from "lucide-react";

export const flashcardsCategories = {
  greetings: {
    name: "Powitania",
    description: "Podstawowe powitania",
    icon: Hand,
    color: "from-blue-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pc_greet_1", polish: "Cześć", chinese: "你好", example: "你好，你好吗？", exampleTranslation: "Cześć, jak się masz?" },
      { id: "pc_greet_2", polish: "Dzień dobry (rano)", chinese: "早上好", example: "早上好，先生", exampleTranslation: "Dzień dobry, panie" },
      { id: "pc_greet_3", polish: "Dobry wieczór", chinese: "晚上好", example: "晚上好，你好吗？", exampleTranslation: "Dobry wieczór, jak się masz?" },
      { id: "pc_greet_4", polish: "Dobranoc", chinese: "晚安", example: "晚安，睡个好觉", exampleTranslation: "Dobranoc, śpij dobrze" },
      { id: "pc_greet_5", polish: "Do widzenia", chinese: "再见", example: "再见，回头见", exampleTranslation: "Do widzenia, do zobaczenia" },
      { id: "pc_greet_6", polish: "Dziękuję", chinese: "谢谢", example: "谢谢你的帮助", exampleTranslation: "Dziękuję za pomoc" },
      { id: "pc_greet_7", polish: "Proszę", chinese: "请", example: "请帮助我", exampleTranslation: "Proszę, pomóż mi" },
      { id: "pc_greet_8", polish: "Przepraszam", chinese: "对不起", example: "对不起，我迟到了", exampleTranslation: "Przepraszam, spóźniłem się" },
      { id: "pc_greet_9", polish: "Tak", chinese: "是", example: "是的，我同意", exampleTranslation: "Tak, zgadzam się" },
      { id: "pc_greet_10", polish: "Nie", chinese: "不", example: "不，我不想要", exampleTranslation: "Nie, nie chcę" }
    ]
  },

  family: {
    name: "Rodzina",
    description: "Członkowie rodziny",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "pc_fam_1", polish: "Ojciec", chinese: "父亲", example: "我父亲工作很多", exampleTranslation: "Mój ojciec dużo pracuje" },
      { id: "pc_fam_2", polish: "Matka", chinese: "母亲", example: "我母亲做饭很好", exampleTranslation: "Moja matka dobrze gotuje" },
      { id: "pc_fam_3", polish: "Brat", chinese: "兄弟", example: "我哥哥学医", exampleTranslation: "Mój brat studiuje medycynę" },
      { id: "pc_fam_4", polish: "Siostra", chinese: "姐妹", example: "我姐姐是老师", exampleTranslation: "Moja siostra jest nauczycielką" },
      { id: "pc_fam_5", polish: "Syn", chinese: "儿子", example: "我儿子十岁了", exampleTranslation: "Mój syn ma dziesięć lat" },
      { id: "pc_fam_6", polish: "Córka", chinese: "女儿", example: "我女儿上大学", exampleTranslation: "Moja córka chodzi na uniwersytet" },
      { id: "pc_fam_7", polish: "Dziadek", chinese: "爷爷", example: "我爷爷很有智慧", exampleTranslation: "Mój dziadek jest bardzo mądry" },
      { id: "pc_fam_8", polish: "Babcia", chinese: "奶奶", example: "我奶奶做蛋糕", exampleTranslation: "Moja babcia robi ciasta" },
      { id: "pc_fam_9", polish: "Wujek", chinese: "叔叔", example: "我叔叔住在北京", exampleTranslation: "Mój wujek mieszka w Pekinie" },
      { id: "pc_fam_10", polish: "Ciocia", chinese: "阿姨", example: "我阿姨很善良", exampleTranslation: "Moja ciocia jest bardzo miła" }
    ]
  },

  numbers: {
    name: "Liczby",
    description: "Podstawowe liczby",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "pc_num_1", polish: "Jeden", chinese: "一", example: "我有一个哥哥", exampleTranslation: "Mam jednego brata" },
      { id: "pc_num_2", polish: "Dwa", chinese: "二", example: "有两只猫", exampleTranslation: "Są dwa koty" },
      { id: "pc_num_3", polish: "Trzy", chinese: "三", example: "三点钟", exampleTranslation: "Jest trzecia" },
      { id: "pc_num_4", polish: "Cztery", chinese: "四", example: "四季", exampleTranslation: "Cztery pory roku" },
      { id: "pc_num_5", polish: "Pięć", chinese: "五", example: "手上有五根手指", exampleTranslation: "Pięć palców na ręce" },
      { id: "pc_num_6", polish: "Sześć", chinese: "六", example: "我儿子六岁了", exampleTranslation: "Mój syn ma sześć lat" },
      { id: "pc_num_7", polish: "Siedem", chinese: "七", example: "一周七天", exampleTranslation: "Siedem dni tygodnia" },
      { id: "pc_num_8", polish: "Osiem", chinese: "八", example: "我工作八小时", exampleTranslation: "Pracuję osiem godzin" },
      { id: "pc_num_9", polish: "Dziewięć", chinese: "九", example: "早上九点", exampleTranslation: "Dziewiąta rano" },
      { id: "pc_num_10", polish: "Dziesięć", chinese: "十", example: "十欧元，请", exampleTranslation: "Dziesięć euro, proszę" }
    ]
  },

  colors: {
    name: "Kolory",
    description: "Podstawowe kolory",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "pc_col_1", polish: "Czerwony", chinese: "红色", example: "车是红色的", exampleTranslation: "Samochód jest czerwony" },
      { id: "pc_col_2", polish: "Niebieski", chinese: "蓝色", example: "天空是蓝色的", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pc_col_3", polish: "Zielony", chinese: "绿色", example: "草是绿色的", exampleTranslation: "Trawa jest zielona" },
      { id: "pc_col_4", polish: "Żółty", chinese: "黄色", example: "太阳是黄色的", exampleTranslation: "Słońce jest żółte" },
      { id: "pc_col_5", polish: "Czarny", chinese: "黑色", example: "我的猫是黑色的", exampleTranslation: "Mój kot jest czarny" },
      { id: "pc_col_6", polish: "Biały", chinese: "白色", example: "雪是白色的", exampleTranslation: "Śnieg jest biały" },
      { id: "pc_col_7", polish: "Pomarańczowy", chinese: "橙色", example: "橙子是橙色的", exampleTranslation: "Pomarańcza jest pomarańczowa" },
      { id: "pc_col_8", polish: "Różowy", chinese: "粉色", example: "裙子是粉色的", exampleTranslation: "Sukienka jest różowa" },
      { id: "pc_col_9", polish: "Brązowy", chinese: "棕色", example: "熊是棕色的", exampleTranslation: "Niedźwiedź jest brązowy" },
      { id: "pc_col_10", polish: "Szary", chinese: "灰色", example: "大象是灰色的", exampleTranslation: "Słoń jest szary" }
    ]
  },

  food: {
    name: "Jedzenie",
    description: "Podstawowe jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "pc_food_1", polish: "Chleb", chinese: "面包", example: "面包很新鲜", exampleTranslation: "Chleb jest świeży" },
      { id: "pc_food_2", polish: "Woda", chinese: "水", example: "一杯水，请", exampleTranslation: "Szklankę wody, proszę" },
      { id: "pc_food_3", polish: "Kawa", chinese: "咖啡", example: "我喜欢咖啡", exampleTranslation: "Lubię kawę" },
      { id: "pc_food_4", polish: "Mleko", chinese: "牛奶", example: "牛奶很新鲜", exampleTranslation: "Mleko jest świeże" },
      { id: "pc_food_5", polish: "Mięso", chinese: "肉", example: "肉很美味", exampleTranslation: "Mięso jest pyszne" },
      { id: "pc_food_6", polish: "Ryba", chinese: "鱼", example: "鱼很健康", exampleTranslation: "Ryba jest bardzo zdrowa" },
      { id: "pc_food_7", polish: "Owoce", chinese: "水果", example: "我每天吃水果", exampleTranslation: "Jem owoce codziennie" },
      { id: "pc_food_8", polish: "Warzywa", chinese: "蔬菜", example: "蔬菜很重要", exampleTranslation: "Warzywa są ważne" },
      { id: "pc_food_9", polish: "Ser", chinese: "奶酪", example: "中国奶酪很美味", exampleTranslation: "Chiński ser jest pyszny" },
      { id: "pc_food_10", polish: "Jajko", chinese: "鸡蛋", example: "我早餐吃鸡蛋", exampleTranslation: "Jem jajka na śniadanie" }
    ]
  },

  house: {
    name: "Dom",
    description: "Przedmioty domowe",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "pc_house_1", polish: "Dom", chinese: "房子", example: "我的房子很大", exampleTranslation: "Mój dom jest duży" },
      { id: "pc_house_2", polish: "Pokój", chinese: "房间", example: "房间很干净", exampleTranslation: "Pokój jest czysty" },
      { id: "pc_house_3", polish: "Kuchnia", chinese: "厨房", example: "我在厨房做饭", exampleTranslation: "Gotuję w kuchni" },
      { id: "pc_house_4", polish: "Łazienka", chinese: "浴室", example: "浴室是新的", exampleTranslation: "Łazienka jest nowa" },
      { id: "pc_house_5", polish: "Sypialnia", chinese: "卧室", example: "我的卧室很舒适", exampleTranslation: "Moja sypialnia jest wygodna" },
      { id: "pc_house_6", polish: "Drzwi", chinese: "门", example: "关门", exampleTranslation: "Zamknij drzwi" },
      { id: "pc_house_7", polish: "Okno", chinese: "窗户", example: "开窗户", exampleTranslation: "Otwórz okno" },
      { id: "pc_house_8", polish: "Stół", chinese: "桌子", example: "桌子是木头的", exampleTranslation: "Stół jest drewniany" },
      { id: "pc_house_9", polish: "Krzesło", chinese: "椅子", example: "椅子很舒服", exampleTranslation: "Krzesło jest wygodne" },
      { id: "pc_house_10", polish: "Łóżko", chinese: "床", example: "床很软", exampleTranslation: "Łóżko jest miękkie" }
    ]
  },

  places: {
    name: "Miejsca",
    description: "Lokalizacje",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pc_place_1", polish: "Sklep", chinese: "商店", example: "商店开着", exampleTranslation: "Sklep jest otwarty" },
      { id: "pc_place_2", polish: "Szkoła", chinese: "学校", example: "我去学校", exampleTranslation: "Idę do szkoły" },
      { id: "pc_place_3", polish: "Szpital", chinese: "医院", example: "医院很近", exampleTranslation: "Szpital jest blisko" },
      { id: "pc_place_4", polish: "Park", chinese: "公园", example: "孩子们在公园玩", exampleTranslation: "Dzieci bawią się w parku" },
      { id: "pc_place_5", polish: "Restauracja", chinese: "餐厅", example: "我们在餐厅吃饭", exampleTranslation: "Jemy w restauracji" },
      { id: "pc_place_6", polish: "Hotel", chinese: "酒店", example: "酒店很大", exampleTranslation: "Hotel jest bardzo duży" },
      { id: "pc_place_7", polish: "Bank", chinese: "银行", example: "我去银行", exampleTranslation: "Idę do banku" },
      { id: "pc_place_8", polish: "Lotnisko", chinese: "机场", example: "我在机场", exampleTranslation: "Jestem na lotnisku" },
      { id: "pc_place_9", polish: "Dworzec kolejowy", chinese: "火车站", example: "火车站", exampleTranslation: "Dworzec kolejowy" },
      { id: "pc_place_10", polish: "Muzeum", chinese: "博物馆", example: "博物馆很有趣", exampleTranslation: "Muzeum jest interesujące" }
    ]
  },

  clothing: {
    name: "Ubrania",
    description: "Odzież",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "pc_cloth_1", polish: "Koszula", chinese: "衬衫", example: "我喜欢你的衬衫", exampleTranslation: "Lubię twoją koszulę" },
      { id: "pc_cloth_2", polish: "Spodnie", chinese: "裤子", example: "我需要新裤子", exampleTranslation: "Potrzebuję nowych spodni" },
      { id: "pc_cloth_3", polish: "Buty", chinese: "鞋子", example: "我买了黑色的鞋", exampleTranslation: "Kupiłem czarne buty" },
      { id: "pc_cloth_4", polish: "Sukienka", chinese: "连衣裙", example: "裙子很漂亮", exampleTranslation: "Sukienka jest piękna" },
      { id: "pc_cloth_5", polish: "Kurtka", chinese: "夹克", example: "我需要一件夹克", exampleTranslation: "Potrzebuję kurtki" },
      { id: "pc_cloth_6", polish: "Kapelusz", chinese: "帽子", example: "戴上帽子", exampleTranslation: "Włóż kapelusz" },
      { id: "pc_cloth_7", polish: "Skarpetki", chinese: "袜子", example: "我的袜子很干净", exampleTranslation: "Moje skarpetki są czyste" },
      { id: "pc_cloth_8", polish: "Rękawiczki", chinese: "手套", example: "冬天我戴手套", exampleTranslation: "Noszę rękawiczki zimą" },
      { id: "pc_cloth_9", polish: "Szalik", chinese: "围巾", example: "围巾很软", exampleTranslation: "Szalik jest miękki" },
      { id: "pc_cloth_10", polish: "Płaszcz", chinese: "外套", example: "外套很暖和", exampleTranslation: "Płaszcz jest ciepły" }
    ]
  },

  work: {
    name: "Praca",
    description: "Zawody",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pc_work_1", polish: "Praca", chinese: "工作", example: "我去上班", exampleTranslation: "Idę do pracy" },
      { id: "pc_work_2", polish: "Lekarz", chinese: "医生", example: "他是医生", exampleTranslation: "On jest lekarzem" },
      { id: "pc_work_3", polish: "Nauczyciel", chinese: "老师", example: "我的老师很优秀", exampleTranslation: "Mój nauczyciel jest doskonały" },
      { id: "pc_work_4", polish: "Inżynier", chinese: "工程师", example: "我是工程师", exampleTranslation: "Jestem inżynierem" },
      { id: "pc_work_5", polish: "Prawnik", chinese: "律师", example: "她是律师", exampleTranslation: "Ona jest prawnikiem" },
      { id: "pc_work_6", polish: "Kucharz", chinese: "厨师", example: "厨师准备饭菜", exampleTranslation: "Kucharz przygotowuje posiłek" },
      { id: "pc_work_7", polish: "Kelner", chinese: "服务员", example: "服务员很友好", exampleTranslation: "Kelner jest miły" },
      { id: "pc_work_8", polish: "Sprzedawca", chinese: "销售员", example: "销售员帮助顾客", exampleTranslation: "Sprzedawca pomaga klientowi" },
      { id: "pc_work_9", polish: "Policjant", chinese: "警察", example: "警察保护城市", exampleTranslation: "Policjant chroni miasto" },
      { id: "pc_work_10", polish: "Mechanik", chinese: "机械师", example: "机械师修理汽车", exampleTranslation: "Mechanik naprawia samochody" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Środki transportu",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pc_trans_1", polish: "Samochód", chinese: "汽车", example: "我有一辆新车", exampleTranslation: "Mam nowy samochód" },
      { id: "pc_trans_2", polish: "Autobus", chinese: "公共汽车", example: "我坐公交车", exampleTranslation: "Jadę autobusem" },
      { id: "pc_trans_3", polish: "Pociąg", chinese: "火车", example: "火车很快", exampleTranslation: "Pociąg jest szybki" },
      { id: "pc_trans_4", polish: "Samolot", chinese: "飞机", example: "我坐飞机旅行", exampleTranslation: "Podróżuję samolotem" },
      { id: "pc_trans_5", polish: "Rower", chinese: "自行车", example: "我骑自行车", exampleTranslation: "Jeżdżę na rowerze" },
      { id: "pc_trans_6", polish: "Taksówka", chinese: "出租车", example: "我叫出租车", exampleTranslation: "Wzywam taksówkę" },
      { id: "pc_trans_7", polish: "Metro", chinese: "地铁", example: "我坐地铁", exampleTranslation: "Korzystam z metra" },
      { id: "pc_trans_8", polish: "Motocykl", chinese: "摩托车", example: "我的摩托车是红色的", exampleTranslation: "Mój motocykl jest czerwony" },
      { id: "pc_trans_9", polish: "Łódź", chinese: "船", example: "我们坐船航行", exampleTranslation: "Płyniemy łodzią" },
      { id: "pc_trans_10", polish: "Bilet", chinese: "票", example: "我买票", exampleTranslation: "Kupuję bilet" }
    ]
  },

  education: {
    name: "Edukacja",
    description: "Szkoła",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pc_edu_1", polish: "Uczeń", chinese: "学生", example: "我是学生", exampleTranslation: "Jestem uczniem" },
      { id: "pc_edu_2", polish: "Nauczyciel", chinese: "老师", example: "老师教得很好", exampleTranslation: "Nauczyciel dobrze uczy" },
      { id: "pc_edu_3", polish: "Książka", chinese: "书", example: "我读书", exampleTranslation: "Czytam książkę" },
      { id: "pc_edu_4", polish: "Ołówek", chinese: "铅笔", example: "你有铅笔吗？", exampleTranslation: "Czy masz ołówek?" },
      { id: "pc_edu_5", polish: "Zeszyt", chinese: "笔记本", example: "我需要笔记本", exampleTranslation: "Potrzebuję zeszytu" },
      { id: "pc_edu_6", polish: "Egzamin", chinese: "考试", example: "考试是明天", exampleTranslation: "Egzamin jest jutro" },
      { id: "pc_edu_7", polish: "Praca domowa", chinese: "作业", example: "我有很多作业", exampleTranslation: "Mam dużo pracy domowej" },
      { id: "pc_edu_8", polish: "Lekcja", chinese: "课", example: "课九点开始", exampleTranslation: "Lekcja zaczyna się o dziewiątej" },
      { id: "pc_edu_9", polish: "Biblioteka", chinese: "图书馆", example: "我在图书馆学习", exampleTranslation: "Uczę się w bibliotece" },
      { id: "pc_edu_10", polish: "Plecak", chinese: "背包", example: "我的背包很重", exampleTranslation: "Mój plecak jest ciężki" }
    ]
  },

  nature: {
    name: "Natura",
    description: "Przyroda",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "pc_nature_1", polish: "Drzewo", chinese: "树", example: "树很高", exampleTranslation: "Drzewo jest wysokie" },
      { id: "pc_nature_2", polish: "Kwiat", chinese: "花", example: "花很美", exampleTranslation: "Kwiat jest piękny" },
      { id: "pc_nature_3", polish: "Góra", chinese: "山", example: "山很高", exampleTranslation: "Góra jest wysoka" },
      { id: "pc_nature_4", polish: "Rzeka", chinese: "河", example: "河很长", exampleTranslation: "Rzeka jest długa" },
      { id: "pc_nature_5", polish: "Morze", chinese: "海", example: "海是蓝色的", exampleTranslation: "Morze jest niebieskie" },
      { id: "pc_nature_6", polish: "Las", chinese: "森林", example: "我们走过森林", exampleTranslation: "Przechodzimy przez las" },
      { id: "pc_nature_7", polish: "Jezioro", chinese: "湖", example: "湖很平静", exampleTranslation: "Jezioro jest spokojne" },
      { id: "pc_nature_8", polish: "Niebo", chinese: "天空", example: "天空是蓝色的", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pc_nature_9", polish: "Gwiazda", chinese: "星星", example: "星星闪耀", exampleTranslation: "Gwiazdy świecą" },
      { id: "pc_nature_10", polish: "Księżyc", chinese: "月亮", example: "月亮是满的", exampleTranslation: "Księżyc jest w pełni" }
    ]
  },

  emotions: {
    name: "Emocje",
    description: "Uczucia",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "pc_emo_1", polish: "Szczęśliwy", chinese: "快乐", example: "我很快乐", exampleTranslation: "Jestem szczęśliwy" },
      { id: "pc_emo_2", polish: "Smutny", chinese: "悲伤", example: "他很悲伤", exampleTranslation: "On jest smutny" },
      { id: "pc_emo_3", polish: "Zły", chinese: "生气", example: "她很生气", exampleTranslation: "Ona jest zła" },
      { id: "pc_emo_4", polish: "Zmęczony", chinese: "累", example: "我很累", exampleTranslation: "Jestem zmęczony" },
      { id: "pc_emo_5", polish: "Podekscytowany", chinese: "兴奋", example: "我们很兴奋", exampleTranslation: "Jesteśmy podekscytowani" },
      { id: "pc_emo_6", polish: "Zdenerwowany", chinese: "紧张", example: "他很紧张", exampleTranslation: "On jest zdenerwowany" },
      { id: "pc_emo_7", polish: "Spokojny", chinese: "平静", example: "她很平静", exampleTranslation: "Ona jest spokojna" },
      { id: "pc_emo_8", polish: "Zaskoczony", chinese: "惊讶", example: "我很惊讶", exampleTranslation: "Jestem zaskoczony" },
      { id: "pc_emo_9", polish: "Przestraszony", chinese: "害怕", example: "孩子很害怕", exampleTranslation: "Dziecko jest przestraszone" },
      { id: "pc_emo_10", polish: "Znudzony", chinese: "无聊", example: "他们很无聊", exampleTranslation: "Oni są znudzeni" }
    ]
  },

  time: {
    name: "Czas",
    description: "Wyrażenia czasowe",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pc_time_1", polish: "Dzisiaj", chinese: "今天", example: "今天是星期一", exampleTranslation: "Dzisiaj jest poniedziałek" },
      { id: "pc_time_2", polish: "Wczoraj", chinese: "昨天", example: "昨天是星期天", exampleTranslation: "Wczoraj była niedziela" },
      { id: "pc_time_3", polish: "Jutro", chinese: "明天", example: "明天是星期二", exampleTranslation: "Jutro jest wtorek" },
      { id: "pc_time_4", polish: "Teraz", chinese: "现在", example: "我现在在工作", exampleTranslation: "Teraz pracuję" },
      { id: "pc_time_5", polish: "Później", chinese: "以后", example: "我以后做", exampleTranslation: "Zrobię to później" },
      { id: "pc_time_6", polish: "Rano", chinese: "早上", example: "早上好", exampleTranslation: "Dzień dobry" },
      { id: "pc_time_7", polish: "Południe", chinese: "中午", example: "现在是中午", exampleTranslation: "Jest południe" },
      { id: "pc_time_8", polish: "Wieczór", chinese: "晚上", example: "晚上好", exampleTranslation: "Dobry wieczór" },
      { id: "pc_time_9", polish: "Noc", chinese: "夜晚", example: "晚安", exampleTranslation: "Dobranoc" },
      { id: "pc_time_10", polish: "Tydzień", chinese: "星期", example: "下星期", exampleTranslation: "Następny tydzień" }
    ]
  },

  weather: {
    name: "Pogoda",
    description: "Warunki pogodowe",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pc_weather_1", polish: "Słońce", chinese: "太阳", example: "太阳照耀", exampleTranslation: "Słońce świeci" },
      { id: "pc_weather_2", polish: "Deszcz", chinese: "雨", example: "下雨了", exampleTranslation: "Pada deszcz" },
      { id: "pc_weather_3", polish: "Śnieg", chinese: "雪", example: "下雪了", exampleTranslation: "Pada śnieg" },
      { id: "pc_weather_4", polish: "Wiatr", chinese: "风", example: "刮风了", exampleTranslation: "Wieje wiatr" },
      { id: "pc_weather_5", polish: "Chmura", chinese: "云", example: "天空有云", exampleTranslation: "Na niebie są chmury" },
      { id: "pc_weather_6", polish: "Burza", chinese: "暴风雨", example: "暴风雨来了", exampleTranslation: "Nadchodzi burza" },
      { id: "pc_weather_7", polish: "Gorąco", chinese: "热", example: "天气很热", exampleTranslation: "Jest bardzo gorąco" },
      { id: "pc_weather_8", polish: "Zimno", chinese: "冷", example: "冬天很冷", exampleTranslation: "Zimą jest zimno" },
      { id: "pc_weather_9", polish: "Błyskawica", chinese: "闪电", example: "我看到闪电", exampleTranslation: "Widziałem błyskawicę" },
      { id: "pc_weather_10", polish: "Grzmot", chinese: "雷", example: "你能听到雷声", exampleTranslation: "Słyszysz grzmot" }
    ]
  },

  body: {
    name: "Ciało",
    description: "Części ciała",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "pc_body_1", polish: "Głowa", chinese: "头", example: "我头疼", exampleTranslation: "Boli mnie głowa" },
      { id: "pc_body_2", polish: "Oko", chinese: "眼睛", example: "我有蓝眼睛", exampleTranslation: "Mam niebieskie oczy" },
      { id: "pc_body_3", polish: "Nos", chinese: "鼻子", example: "我的鼻子很冷", exampleTranslation: "Mój nos jest zimny" },
      { id: "pc_body_4", polish: "Usta", chinese: "嘴", example: "张开嘴", exampleTranslation: "Otwórz usta" },
      { id: "pc_body_5", polish: "Ucho", chinese: "耳朵", example: "我的耳朵很大", exampleTranslation: "Moje uszy są duże" },
      { id: "pc_body_6", polish: "Ręka", chinese: "手", example: "把手给我", exampleTranslation: "Daj mi rękę" },
      { id: "pc_body_7", polish: "Stopa", chinese: "脚", example: "我脚疼", exampleTranslation: "Boli mnie stopa" },
      { id: "pc_body_8", polish: "Ramię", chinese: "胳膊", example: "举起你的胳膊", exampleTranslation: "Podnieś ramię" },
      { id: "pc_body_9", polish: "Noga", chinese: "腿", example: "我的腿很累", exampleTranslation: "Moje nogi są zmęczone" },
      { id: "pc_body_10", polish: "Serce", chinese: "心", example: "我的心跳很快", exampleTranslation: "Moje serce bije szybko" }
    ]
  },

  activities: {
    name: "Aktywności",
    description: "Codzienne czynności",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pc_act_1", polish: "Jeść", chinese: "吃", example: "我要吃饭", exampleTranslation: "Będę jeść" },
      { id: "pc_act_2", polish: "Pić", chinese: "喝", example: "我喝水", exampleTranslation: "Piję wodę" },
      { id: "pc_act_3", polish: "Spać", chinese: "睡觉", example: "我需要睡觉", exampleTranslation: "Muszę spać" },
      { id: "pc_act_4", polish: "Biegać", chinese: "跑", example: "我早上跑步", exampleTranslation: "Biegam rano" },
      { id: "pc_act_5", polish: "Czytać", chinese: "读", example: "我读书", exampleTranslation: "Czytam książkę" },
      { id: "pc_act_6", polish: "Pisać", chinese: "写", example: "我写信", exampleTranslation: "Piszę list" },
      { id: "pc_act_7", polish: "Mówić", chinese: "说", example: "我说中文", exampleTranslation: "Mówię po chińsku" },
      { id: "pc_act_8", polish: "Słuchać", chinese: "听", example: "我听音乐", exampleTranslation: "Słucham muzyki" },
      { id: "pc_act_9", polish: "Oglądać", chinese: "看", example: "我看电视", exampleTranslation: "Oglądam telewizję" },
      { id: "pc_act_10", polish: "Myśleć", chinese: "想", example: "我想你", exampleTranslation: "Myślę o tobie" }
    ]
  },

  learning: {
    name: "Nauka",
    description: "Działania edukacyjne",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "pc_learn_1", polish: "Uczyć się", chinese: "学习", example: "我学中文", exampleTranslation: "Uczę się chińskiego" },
      { id: "pc_learn_2", polish: "Studiować", chinese: "学", example: "我在大学学习", exampleTranslation: "Studiuję na uniwersytecie" },
      { id: "pc_learn_3", polish: "Uczyć", chinese: "教", example: "我教英语", exampleTranslation: "Uczę angielskiego" },
      { id: "pc_learn_4", polish: "Rozumieć", chinese: "理解", example: "我理解这课", exampleTranslation: "Rozumiem tę lekcję" },
      { id: "pc_learn_5", polish: "Ćwiczyć", chinese: "练习", example: "我每天练习", exampleTranslation: "Ćwiczę codziennie" },
      { id: "pc_learn_6", polish: "Powtarzać", chinese: "重复", example: "重复这个词", exampleTranslation: "Powtórz to słowo" },
      { id: "pc_learn_7", polish: "Wyjaśniać", chinese: "解释", example: "老师解释得很好", exampleTranslation: "Nauczyciel dobrze wyjaśnia" },
      { id: "pc_learn_8", polish: "Pytać", chinese: "问", example: "我问老师", exampleTranslation: "Pytam nauczyciela" },
      { id: "pc_learn_9", polish: "Odpowiadać", chinese: "回答", example: "我回答问题", exampleTranslation: "Odpowiadam na pytanie" },
      { id: "pc_learn_10", polish: "Pamiętać", chinese: "记得", example: "我记得这课", exampleTranslation: "Pamiętam tę lekcję" }
    ]
  },

  sports: {
    name: "Sport",
    description: "Sporty",
    icon: Dumbbell,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pc_sport_1", polish: "Piłka nożna", chinese: "足球", example: "我踢足球", exampleTranslation: "Gram w piłkę nożną" },
      { id: "pc_sport_2", polish: "Koszykówka", chinese: "篮球", example: "我喜欢篮球", exampleTranslation: "Lubię koszykówkę" },
      { id: "pc_sport_3", polish: "Tenis", chinese: "网球", example: "我打网球", exampleTranslation: "Gram w tenisa" },
      { id: "pc_sport_4", polish: "Pływanie", chinese: "游泳", example: "游泳很健康", exampleTranslation: "Pływanie jest zdrowe" },
      { id: "pc_sport_5", polish: "Bieganie", chinese: "跑步", example: "我早上跑步", exampleTranslation: "Biegam rano" },
      { id: "pc_sport_6", polish: "Jazda na rowerze", chinese: "骑自行车", example: "我喜欢骑自行车", exampleTranslation: "Lubię jeździć na rowerze" },
      { id: "pc_sport_7", polish: "Siłownia", chinese: "健身房", example: "我去健身房", exampleTranslation: "Chodzę na siłownię" },
      { id: "pc_sport_8", polish: "Trening", chinese: "训练", example: "我今天有训练", exampleTranslation: "Dziś mam trening" },
      { id: "pc_sport_9", polish: "Drużyna", chinese: "队", example: "我在一个队", exampleTranslation: "Jestem w drużynie" },
      { id: "pc_sport_10", polish: "Trener", chinese: "教练", example: "我们的教练很优秀", exampleTranslation: "Nasz trener jest doskonały" }
    ]
  },

  travel: {
    name: "Podróże",
    description: "Turystyka",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "pc_travel_1", polish: "Podróż", chinese: "旅行", example: "我去旅行", exampleTranslation: "Jadę w podróż" },
      { id: "pc_travel_2", polish: "Walizka", chinese: "行李箱", example: "我的行李箱很重", exampleTranslation: "Moja walizka jest ciężka" },
      { id: "pc_travel_3", polish: "Paszport", chinese: "护照", example: "我需要护照", exampleTranslation: "Potrzebuję paszportu" },
      { id: "pc_travel_4", polish: "Hotel", chinese: "酒店", example: "酒店很舒适", exampleTranslation: "Hotel jest wygodny" },
      { id: "pc_travel_5", polish: "Rezerwacja", chinese: "预订", example: "我有预订", exampleTranslation: "Mam rezerwację" },
      { id: "pc_travel_6", polish: "Turysta", chinese: "游客", example: "我是游客", exampleTranslation: "Jestem turystą" },
      { id: "pc_travel_7", polish: "Wakacje", chinese: "假期", example: "我在度假", exampleTranslation: "Jestem na wakacjach" },
      { id: "pc_travel_8", polish: "Zwiedzanie", chinese: "观光", example: "我们在观光", exampleTranslation: "Zwiedzamy" },
      { id: "pc_travel_9", polish: "Przewodnik", chinese: "导游", example: "导游很有用", exampleTranslation: "Przewodnik jest pomocny" },
      { id: "pc_travel_10", polish: "Pamiątka", chinese: "纪念品", example: "我买纪念品", exampleTranslation: "Kupuję pamiątkę" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    description: "Czas wolny",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "pc_ent_1", polish: "Muzyka", chinese: "音乐", example: "我听音乐", exampleTranslation: "Słucham muzyki" },
      { id: "pc_ent_2", polish: "Film", chinese: "电影", example: "我看电影", exampleTranslation: "Oglądam film" },
      { id: "pc_ent_3", polish: "Koncert", chinese: "音乐会", example: "我去音乐会", exampleTranslation: "Idę na koncert" },
      { id: "pc_ent_4", polish: "Teatr", chinese: "剧院", example: "我去剧院", exampleTranslation: "Idę do teatru" },
      { id: "pc_ent_5", polish: "Taniec", chinese: "跳舞", example: "我喜欢跳舞", exampleTranslation: "Lubię tańczyć" },
      { id: "pc_ent_6", polish: "Śpiewać", chinese: "唱歌", example: "我喜欢唱歌", exampleTranslation: "Lubię śpiewać" },
      { id: "pc_ent_7", polish: "Gitara", chinese: "吉他", example: "我弹吉他", exampleTranslation: "Gram na gitarze" },
      { id: "pc_ent_8", polish: "Gry", chinese: "游戏", example: "我玩电子游戏", exampleTranslation: "Gram w gry wideo" },
      { id: "pc_ent_9", polish: "Fotografia", chinese: "摄影", example: "我对摄影感兴趣", exampleTranslation: "Interesuję się fotografią" },
      { id: "pc_ent_10", polish: "Czytanie", chinese: "阅读", example: "阅读是我的爱好", exampleTranslation: "Czytanie to moje hobby" }
    ]
  }
};

export default flashcardsCategories;