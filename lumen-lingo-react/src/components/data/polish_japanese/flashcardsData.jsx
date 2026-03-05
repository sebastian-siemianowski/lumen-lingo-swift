/**
 * POLISH → JAPANESE FLASHCARDS
 * 
 * Native Language: Polish (Polski)
 * Target Language: Japanese (日本語)
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
      { id: "pj_greet_1", polish: "Cześć", japanese: "こんにちは", example: "こんにちは、元気ですか？", exampleTranslation: "Cześć, jak się masz?" },
      { id: "pj_greet_2", polish: "Dzień dobry (rano)", japanese: "おはよう", example: "おはようございます、先生", exampleTranslation: "Dzień dobry, panie" },
      { id: "pj_greet_3", polish: "Dobry wieczór", japanese: "こんばんは", example: "こんばんは、元気ですか？", exampleTranslation: "Dobry wieczór, jak się masz?" },
      { id: "pj_greet_4", polish: "Dobranoc", japanese: "おやすみ", example: "おやすみなさい、ぐっすり寝てね", exampleTranslation: "Dobranoc, śpij dobrze" },
      { id: "pj_greet_5", polish: "Do widzenia", japanese: "さようなら", example: "さようなら、また後で", exampleTranslation: "Do widzenia, do zobaczenia" },
      { id: "pj_greet_6", polish: "Dziękuję", japanese: "ありがとう", example: "ありがとうございます、助けてくれて", exampleTranslation: "Dziękuję za pomoc" },
      { id: "pj_greet_7", polish: "Proszę", japanese: "お願いします", example: "お願いします、手伝ってください", exampleTranslation: "Proszę, pomóż mi" },
      { id: "pj_greet_8", polish: "Przepraszam", japanese: "ごめんなさい", example: "ごめんなさい、遅れました", exampleTranslation: "Przepraszam, spóźniłem się" },
      { id: "pj_greet_9", polish: "Tak", japanese: "はい", example: "はい、同意します", exampleTranslation: "Tak, zgadzam się" },
      { id: "pj_greet_10", polish: "Nie", japanese: "いいえ", example: "いいえ、欲しくないです", exampleTranslation: "Nie, nie chcę" }
    ]
  },

  family: {
    name: "Rodzina",
    description: "Członkowie rodziny",
    icon: Users,
    color: "from-pink-400 to-rose-500",
    level: "beginner",
    words: [
      { id: "pj_fam_1", polish: "Ojciec", japanese: "父", example: "父はたくさん働きます", exampleTranslation: "Mój ojciec dużo pracuje" },
      { id: "pj_fam_2", polish: "Matka", japanese: "母", example: "母は料理が上手です", exampleTranslation: "Moja matka dobrze gotuje" },
      { id: "pj_fam_3", polish: "Brat", japanese: "兄弟", example: "兄は医学を勉強しています", exampleTranslation: "Mój brat studiuje medycynę" },
      { id: "pj_fam_4", polish: "Siostra", japanese: "姉妹", example: "姉は先生です", exampleTranslation: "Moja siostra jest nauczycielką" },
      { id: "pj_fam_5", polish: "Syn", japanese: "息子", example: "息子は十歳です", exampleTranslation: "Mój syn ma dziesięć lat" },
      { id: "pj_fam_6", polish: "Córka", japanese: "娘", example: "娘は大学に行きます", exampleTranslation: "Moja córka chodzi na uniwersytet" },
      { id: "pj_fam_7", polish: "Dziadek", japanese: "祖父", example: "祖父はとても賢いです", exampleTranslation: "Mój dziadek jest bardzo mądry" },
      { id: "pj_fam_8", polish: "Babcia", japanese: "祖母", example: "祖母はケーキを作ります", exampleTranslation: "Moja babcia robi ciasta" },
      { id: "pj_fam_9", polish: "Wujek", japanese: "叔父", example: "叔父は東京に住んでいます", exampleTranslation: "Mój wujek mieszka w Tokio" },
      { id: "pj_fam_10", polish: "Ciocia", japanese: "叔母", example: "叔母はとても親切です", exampleTranslation: "Moja ciocia jest bardzo miła" }
    ]
  },

  numbers: {
    name: "Liczby",
    description: "Podstawowe liczby",
    icon: Hash,
    color: "from-purple-400 to-indigo-500",
    level: "beginner",
    words: [
      { id: "pj_num_1", polish: "Jeden", japanese: "一", example: "兄が一人います", exampleTranslation: "Mam jednego brata" },
      { id: "pj_num_2", polish: "Dwa", japanese: "二", example: "猫が二匹います", exampleTranslation: "Są dwa koty" },
      { id: "pj_num_3", polish: "Trzy", japanese: "三", example: "三時です", exampleTranslation: "Jest trzecia" },
      { id: "pj_num_4", polish: "Cztery", japanese: "四", example: "四季", exampleTranslation: "Cztery pory roku" },
      { id: "pj_num_5", polish: "Pięć", japanese: "五", example: "手には五本の指があります", exampleTranslation: "Pięć palców na ręce" },
      { id: "pj_num_6", polish: "Sześć", japanese: "六", example: "息子は六歳です", exampleTranslation: "Mój syn ma sześć lat" },
      { id: "pj_num_7", polish: "Siedem", japanese: "七", example: "一週間は七日です", exampleTranslation: "Siedem dni tygodnia" },
      { id: "pj_num_8", polish: "Osiem", japanese: "八", example: "八時間働きます", exampleTranslation: "Pracuję osiem godzin" },
      { id: "pj_num_9", polish: "Dziewięć", japanese: "九", example: "朝の九時です", exampleTranslation: "Dziewiąta rano" },
      { id: "pj_num_10", polish: "Dziesięć", japanese: "十", example: "十ユーロお願いします", exampleTranslation: "Dziesięć euro, proszę" }
    ]
  },

  colors: {
    name: "Kolory",
    description: "Podstawowe kolory",
    icon: Palette,
    color: "from-red-400 to-pink-500",
    level: "beginner",
    words: [
      { id: "pj_col_1", polish: "Czerwony", japanese: "赤", example: "車は赤いです", exampleTranslation: "Samochód jest czerwony" },
      { id: "pj_col_2", polish: "Niebieski", japanese: "青", example: "空は青いです", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pj_col_3", polish: "Zielony", japanese: "緑", example: "草は緑です", exampleTranslation: "Trawa jest zielona" },
      { id: "pj_col_4", polish: "Żółty", japanese: "黄色", example: "太陽は黄色いです", exampleTranslation: "Słońce jest żółte" },
      { id: "pj_col_5", polish: "Czarny", japanese: "黒", example: "私の猫は黒いです", exampleTranslation: "Mój kot jest czarny" },
      { id: "pj_col_6", polish: "Biały", japanese: "白", example: "雪は白いです", exampleTranslation: "Śnieg jest biały" },
      { id: "pj_col_7", polish: "Pomarańczowy", japanese: "オレンジ", example: "オレンジはオレンジ色です", exampleTranslation: "Pomarańcza jest pomarańczowa" },
      { id: "pj_col_8", polish: "Różowy", japanese: "ピンク", example: "ドレスはピンクです", exampleTranslation: "Sukienka jest różowa" },
      { id: "pj_col_9", polish: "Brązowy", japanese: "茶色", example: "熊は茶色です", exampleTranslation: "Niedźwiedź jest brązowy" },
      { id: "pj_col_10", polish: "Szary", japanese: "灰色", example: "象は灰色です", exampleTranslation: "Słoń jest szary" }
    ]
  },

  food: {
    name: "Jedzenie",
    description: "Podstawowe jedzenie",
    icon: UtensilsCrossed,
    color: "from-green-400 to-emerald-500",
    level: "beginner",
    words: [
      { id: "pj_food_1", polish: "Chleb", japanese: "パン", example: "パンは新鮮です", exampleTranslation: "Chleb jest świeży" },
      { id: "pj_food_2", polish: "Woda", japanese: "水", example: "水を一杯お願いします", exampleTranslation: "Szklankę wody, proszę" },
      { id: "pj_food_3", polish: "Kawa", japanese: "コーヒー", example: "コーヒーが好きです", exampleTranslation: "Lubię kawę" },
      { id: "pj_food_4", polish: "Mleko", japanese: "牛乳", example: "牛乳は新鮮です", exampleTranslation: "Mleko jest świeże" },
      { id: "pj_food_5", polish: "Mięso", japanese: "肉", example: "肉は美味しいです", exampleTranslation: "Mięso jest pyszne" },
      { id: "pj_food_6", polish: "Ryba", japanese: "魚", example: "魚はとても健康的です", exampleTranslation: "Ryba jest bardzo zdrowa" },
      { id: "pj_food_7", polish: "Owoce", japanese: "果物", example: "毎日果物を食べます", exampleTranslation: "Jem owoce codziennie" },
      { id: "pj_food_8", polish: "Warzywa", japanese: "野菜", example: "野菜は大切です", exampleTranslation: "Warzywa są ważne" },
      { id: "pj_food_9", polish: "Ser", japanese: "チーズ", example: "日本のチーズは美味しいです", exampleTranslation: "Japoński ser jest pyszny" },
      { id: "pj_food_10", polish: "Jajko", japanese: "卵", example: "朝食に卵を食べます", exampleTranslation: "Jem jajka na śniadanie" }
    ]
  },

  house: {
    name: "Dom",
    description: "Przedmioty domowe",
    icon: Home,
    color: "from-orange-400 to-amber-500",
    level: "beginner",
    words: [
      { id: "pj_house_1", polish: "Dom", japanese: "家", example: "私の家は大きいです", exampleTranslation: "Mój dom jest duży" },
      { id: "pj_house_2", polish: "Pokój", japanese: "部屋", example: "部屋はきれいです", exampleTranslation: "Pokój jest czysty" },
      { id: "pj_house_3", polish: "Kuchnia", japanese: "台所", example: "台所で料理します", exampleTranslation: "Gotuję w kuchni" },
      { id: "pj_house_4", polish: "Łazienka", japanese: "浴室", example: "浴室は新しいです", exampleTranslation: "Łazienka jest nowa" },
      { id: "pj_house_5", polish: "Sypialnia", japanese: "寝室", example: "私の寝室は快適です", exampleTranslation: "Moja sypialnia jest wygodna" },
      { id: "pj_house_6", polish: "Drzwi", japanese: "ドア", example: "ドアを閉めて", exampleTranslation: "Zamknij drzwi" },
      { id: "pj_house_7", polish: "Okno", japanese: "窓", example: "窓を開けて", exampleTranslation: "Otwórz okno" },
      { id: "pj_house_8", polish: "Stół", japanese: "テーブル", example: "テーブルは木製です", exampleTranslation: "Stół jest drewniany" },
      { id: "pj_house_9", polish: "Krzesło", japanese: "椅子", example: "椅子は快適です", exampleTranslation: "Krzesło jest wygodne" },
      { id: "pj_house_10", polish: "Łóżko", japanese: "ベッド", example: "ベッドは柔らかいです", exampleTranslation: "Łóżko jest miękkie" }
    ]
  },

  places: {
    name: "Miejsca",
    description: "Lokalizacje",
    icon: MapPin,
    color: "from-teal-400 to-cyan-500",
    level: "beginner",
    words: [
      { id: "pj_place_1", polish: "Sklep", japanese: "店", example: "店は開いています", exampleTranslation: "Sklep jest otwarty" },
      { id: "pj_place_2", polish: "Szkoła", japanese: "学校", example: "学校に行きます", exampleTranslation: "Idę do szkoły" },
      { id: "pj_place_3", polish: "Szpital", japanese: "病院", example: "病院は近いです", exampleTranslation: "Szpital jest blisko" },
      { id: "pj_place_4", polish: "Park", japanese: "公園", example: "子供たちは公園で遊びます", exampleTranslation: "Dzieci bawią się w parku" },
      { id: "pj_place_5", polish: "Restauracja", japanese: "レストラン", example: "レストランで食べます", exampleTranslation: "Jemy w restauracji" },
      { id: "pj_place_6", polish: "Hotel", japanese: "ホテル", example: "ホテルはとても大きいです", exampleTranslation: "Hotel jest bardzo duży" },
      { id: "pj_place_7", polish: "Bank", japanese: "銀行", example: "銀行に行きます", exampleTranslation: "Idę do banku" },
      { id: "pj_place_8", polish: "Lotnisko", japanese: "空港", example: "空港にいます", exampleTranslation: "Jestem na lotnisku" },
      { id: "pj_place_9", polish: "Dworzec kolejowy", japanese: "駅", example: "駅", exampleTranslation: "Dworzec kolejowy" },
      { id: "pj_place_10", polish: "Muzeum", japanese: "博物館", example: "博物館は面白いです", exampleTranslation: "Muzeum jest interesujące" }
    ]
  },

  clothing: {
    name: "Ubrania",
    description: "Odzież",
    icon: Shirt,
    color: "from-violet-400 to-purple-500",
    level: "beginner",
    words: [
      { id: "pj_cloth_1", polish: "Koszula", japanese: "シャツ", example: "あなたのシャツが好きです", exampleTranslation: "Lubię twoją koszulę" },
      { id: "pj_cloth_2", polish: "Spodnie", japanese: "ズボン", example: "新しいズボンが必要です", exampleTranslation: "Potrzebuję nowych spodni" },
      { id: "pj_cloth_3", polish: "Buty", japanese: "靴", example: "黒い靴を買いました", exampleTranslation: "Kupiłem czarne buty" },
      { id: "pj_cloth_4", polish: "Sukienka", japanese: "ドレス", example: "ドレスは美しいです", exampleTranslation: "Sukienka jest piękna" },
      { id: "pj_cloth_5", polish: "Kurtka", japanese: "ジャケット", example: "ジャケットが必要です", exampleTranslation: "Potrzebuję kurtki" },
      { id: "pj_cloth_6", polish: "Kapelusz", japanese: "帽子", example: "帽子をかぶって", exampleTranslation: "Włóż kapelusz" },
      { id: "pj_cloth_7", polish: "Skarpetki", japanese: "靴下", example: "私の靴下はきれいです", exampleTranslation: "Moje skarpetki są czyste" },
      { id: "pj_cloth_8", polish: "Rękawiczki", japanese: "手袋", example: "冬に手袋をします", exampleTranslation: "Noszę rękawiczki zimą" },
      { id: "pj_cloth_9", polish: "Szalik", japanese: "スカーフ", example: "スカーフは柔らかいです", exampleTranslation: "Szalik jest miękki" },
      { id: "pj_cloth_10", polish: "Płaszcz", japanese: "コート", example: "コートは暖かいです", exampleTranslation: "Płaszcz jest ciepły" }
    ]
  },

  work: {
    name: "Praca",
    description: "Zawody",
    icon: Briefcase,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pj_work_1", polish: "Praca", japanese: "仕事", example: "仕事に行きます", exampleTranslation: "Idę do pracy" },
      { id: "pj_work_2", polish: "Lekarz", japanese: "医者", example: "彼は医者です", exampleTranslation: "On jest lekarzem" },
      { id: "pj_work_3", polish: "Nauczyciel", japanese: "教師", example: "私の教師は素晴らしいです", exampleTranslation: "Mój nauczyciel jest doskonały" },
      { id: "pj_work_4", polish: "Inżynier", japanese: "エンジニア", example: "私はエンジニアです", exampleTranslation: "Jestem inżynierem" },
      { id: "pj_work_5", polish: "Prawnik", japanese: "弁護士", example: "彼女は弁護士です", exampleTranslation: "Ona jest prawnikiem" },
      { id: "pj_work_6", polish: "Kucharz", japanese: "料理人", example: "料理人は食事を準備します", exampleTranslation: "Kucharz przygotowuje posiłek" },
      { id: "pj_work_7", polish: "Kelner", japanese: "ウェイター", example: "ウェイターは親切です", exampleTranslation: "Kelner jest miły" },
      { id: "pj_work_8", polish: "Sprzedawca", japanese: "販売員", example: "販売員は客を助けます", exampleTranslation: "Sprzedawca pomaga klientowi" },
      { id: "pj_work_9", polish: "Policjant", japanese: "警察官", example: "警察官は街を守ります", exampleTranslation: "Policjant chroni miasto" },
      { id: "pj_work_10", polish: "Mechanik", japanese: "整備士", example: "整備士は車を修理します", exampleTranslation: "Mechanik naprawia samochody" }
    ]
  },

  transport: {
    name: "Transport",
    description: "Środki transportu",
    icon: Car,
    color: "from-yellow-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pj_trans_1", polish: "Samochód", japanese: "車", example: "新しい車があります", exampleTranslation: "Mam nowy samochód" },
      { id: "pj_trans_2", polish: "Autobus", japanese: "バス", example: "バスで行きます", exampleTranslation: "Jadę autobusem" },
      { id: "pj_trans_3", polish: "Pociąg", japanese: "電車", example: "電車は速いです", exampleTranslation: "Pociąg jest szybki" },
      { id: "pj_trans_4", polish: "Samolot", japanese: "飛行機", example: "飛行機で旅行します", exampleTranslation: "Podróżuję samolotem" },
      { id: "pj_trans_5", polish: "Rower", japanese: "自転車", example: "自転車に乗ります", exampleTranslation: "Jeżdżę na rowerze" },
      { id: "pj_trans_6", polish: "Taksówka", japanese: "タクシー", example: "タクシーを呼びます", exampleTranslation: "Wzywam taksówkę" },
      { id: "pj_trans_7", polish: "Metro", japanese: "地下鉄", example: "地下鉄を使います", exampleTranslation: "Korzystam z metra" },
      { id: "pj_trans_8", polish: "Motocykl", japanese: "バイク", example: "私のバイクは赤いです", exampleTranslation: "Mój motocykl jest czerwony" },
      { id: "pj_trans_9", polish: "Łódź", japanese: "船", example: "船で航海します", exampleTranslation: "Płyniemy łodzią" },
      { id: "pj_trans_10", polish: "Bilet", japanese: "切符", example: "切符を買います", exampleTranslation: "Kupuję bilet" }
    ]
  },

  education: {
    name: "Edukacja",
    description: "Szkoła",
    icon: School,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pj_edu_1", polish: "Uczeń", japanese: "学生", example: "私は学生です", exampleTranslation: "Jestem uczniem" },
      { id: "pj_edu_2", polish: "Nauczyciel", japanese: "先生", example: "先生はよく教えます", exampleTranslation: "Nauczyciel dobrze uczy" },
      { id: "pj_edu_3", polish: "Książka", japanese: "本", example: "本を読みます", exampleTranslation: "Czytam książkę" },
      { id: "pj_edu_4", polish: "Ołówek", japanese: "鉛筆", example: "鉛筆を持っていますか？", exampleTranslation: "Czy masz ołówek?" },
      { id: "pj_edu_5", polish: "Zeszyt", japanese: "ノート", example: "ノートが必要です", exampleTranslation: "Potrzebuję zeszytu" },
      { id: "pj_edu_6", polish: "Egzamin", japanese: "試験", example: "試験は明日です", exampleTranslation: "Egzamin jest jutro" },
      { id: "pj_edu_7", polish: "Praca domowa", japanese: "宿題", example: "宿題がたくさんあります", exampleTranslation: "Mam dużo pracy domowej" },
      { id: "pj_edu_8", polish: "Lekcja", japanese: "授業", example: "授業は九時に始まります", exampleTranslation: "Lekcja zaczyna się o dziewiątej" },
      { id: "pj_edu_9", polish: "Biblioteka", japanese: "図書館", example: "図書館で勉強します", exampleTranslation: "Uczę się w bibliotece" },
      { id: "pj_edu_10", polish: "Plecak", japanese: "リュックサック", example: "私のリュックサックは重いです", exampleTranslation: "Mój plecak jest ciężki" }
    ]
  },

  nature: {
    name: "Natura",
    description: "Przyroda",
    icon: TreePine,
    color: "from-green-400 to-teal-500",
    level: "intermediate",
    words: [
      { id: "pj_nature_1", polish: "Drzewo", japanese: "木", example: "木は高いです", exampleTranslation: "Drzewo jest wysokie" },
      { id: "pj_nature_2", polish: "Kwiat", japanese: "花", example: "花は美しいです", exampleTranslation: "Kwiat jest piękny" },
      { id: "pj_nature_3", polish: "Góra", japanese: "山", example: "山は高いです", exampleTranslation: "Góra jest wysoka" },
      { id: "pj_nature_4", polish: "Rzeka", japanese: "川", example: "川は長いです", exampleTranslation: "Rzeka jest długa" },
      { id: "pj_nature_5", polish: "Morze", japanese: "海", example: "海は青いです", exampleTranslation: "Morze jest niebieskie" },
      { id: "pj_nature_6", polish: "Las", japanese: "森", example: "森を歩きます", exampleTranslation: "Przechodzimy przez las" },
      { id: "pj_nature_7", polish: "Jezioro", japanese: "湖", example: "湖は静かです", exampleTranslation: "Jezioro jest spokojne" },
      { id: "pj_nature_8", polish: "Niebo", japanese: "空", example: "空は青いです", exampleTranslation: "Niebo jest niebieskie" },
      { id: "pj_nature_9", polish: "Gwiazda", japanese: "星", example: "星が輝いています", exampleTranslation: "Gwiazdy świecą" },
      { id: "pj_nature_10", polish: "Księżyc", japanese: "月", example: "月は満ちています", exampleTranslation: "Księżyc jest w pełni" }
    ]
  },

  emotions: {
    name: "Emocje",
    description: "Uczucia",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    level: "intermediate",
    words: [
      { id: "pj_emo_1", polish: "Szczęśliwy", japanese: "幸せ", example: "私は幸せです", exampleTranslation: "Jestem szczęśliwy" },
      { id: "pj_emo_2", polish: "Smutny", japanese: "悲しい", example: "彼は悲しいです", exampleTranslation: "On jest smutny" },
      { id: "pj_emo_3", polish: "Zły", japanese: "怒っている", example: "彼女は怒っています", exampleTranslation: "Ona jest zła" },
      { id: "pj_emo_4", polish: "Zmęczony", japanese: "疲れた", example: "私は疲れています", exampleTranslation: "Jestem zmęczony" },
      { id: "pj_emo_5", polish: "Podekscytowany", japanese: "興奮した", example: "私たちは興奮しています", exampleTranslation: "Jesteśmy podekscytowani" },
      { id: "pj_emo_6", polish: "Zdenerwowany", japanese: "緊張した", example: "彼は緊張しています", exampleTranslation: "On jest zdenerwowany" },
      { id: "pj_emo_7", polish: "Spokojny", japanese: "落ち着いた", example: "彼女は落ち着いています", exampleTranslation: "Ona jest spokojna" },
      { id: "pj_emo_8", polish: "Zaskoczony", japanese: "驚いた", example: "私は驚きました", exampleTranslation: "Jestem zaskoczony" },
      { id: "pj_emo_9", polish: "Przestraszony", japanese: "怖い", example: "子供は怖がっています", exampleTranslation: "Dziecko jest przestraszone" },
      { id: "pj_emo_10", polish: "Znudzony", japanese: "退屈", example: "彼らは退屈しています", exampleTranslation: "Oni są znudzeni" }
    ]
  },

  time: {
    name: "Czas",
    description: "Wyrażenia czasowe",
    icon: Clock,
    color: "from-cyan-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pj_time_1", polish: "Dzisiaj", japanese: "今日", example: "今日は月曜日です", exampleTranslation: "Dzisiaj jest poniedziałek" },
      { id: "pj_time_2", polish: "Wczoraj", japanese: "昨日", example: "昨日は日曜日でした", exampleTranslation: "Wczoraj była niedziela" },
      { id: "pj_time_3", polish: "Jutro", japanese: "明日", example: "明日は火曜日です", exampleTranslation: "Jutro jest wtorek" },
      { id: "pj_time_4", polish: "Teraz", japanese: "今", example: "今働いています", exampleTranslation: "Teraz pracuję" },
      { id: "pj_time_5", polish: "Później", japanese: "後で", example: "後でします", exampleTranslation: "Zrobię to później" },
      { id: "pj_time_6", polish: "Rano", japanese: "朝", example: "おはようございます", exampleTranslation: "Dzień dobry" },
      { id: "pj_time_7", polish: "Południe", japanese: "正午", example: "正午です", exampleTranslation: "Jest południe" },
      { id: "pj_time_8", polish: "Wieczór", japanese: "夕方", example: "こんばんは", exampleTranslation: "Dobry wieczór" },
      { id: "pj_time_9", polish: "Noc", japanese: "夜", example: "おやすみなさい", exampleTranslation: "Dobranoc" },
      { id: "pj_time_10", polish: "Tydzień", japanese: "週", example: "来週", exampleTranslation: "Następny tydzień" }
    ]
  },

  weather: {
    name: "Pogoda",
    description: "Warunki pogodowe",
    icon: Cloud,
    color: "from-sky-400 to-blue-500",
    level: "beginner",
    words: [
      { id: "pj_weather_1", polish: "Słońce", japanese: "太陽", example: "太陽が輝いています", exampleTranslation: "Słońce świeci" },
      { id: "pj_weather_2", polish: "Deszcz", japanese: "雨", example: "雨が降っています", exampleTranslation: "Pada deszcz" },
      { id: "pj_weather_3", polish: "Śnieg", japanese: "雪", example: "雪が降っています", exampleTranslation: "Pada śnieg" },
      { id: "pj_weather_4", polish: "Wiatr", japanese: "風", example: "風が吹いています", exampleTranslation: "Wieje wiatr" },
      { id: "pj_weather_5", polish: "Chmura", japanese: "雲", example: "空に雲があります", exampleTranslation: "Na niebie są chmury" },
      { id: "pj_weather_6", polish: "Burza", japanese: "嵐", example: "嵐が来ています", exampleTranslation: "Nadchodzi burza" },
      { id: "pj_weather_7", polish: "Gorąco", japanese: "暑い", example: "とても暑いです", exampleTranslation: "Jest bardzo gorąco" },
      { id: "pj_weather_8", polish: "Zimno", japanese: "寒い", example: "冬は寒いです", exampleTranslation: "Zimą jest zimno" },
      { id: "pj_weather_9", polish: "Błyskawica", japanese: "稲妻", example: "稲妻を見ました", exampleTranslation: "Widziałem błyskawicę" },
      { id: "pj_weather_10", polish: "Grzmot", japanese: "雷", example: "雷が聞こえます", exampleTranslation: "Słyszysz grzmot" }
    ]
  },

  body: {
    name: "Ciało",
    description: "Części ciała",
    icon: Hand,
    color: "from-pink-400 to-red-500",
    level: "intermediate",
    words: [
      { id: "pj_body_1", polish: "Głowa", japanese: "頭", example: "頭が痛いです", exampleTranslation: "Boli mnie głowa" },
      { id: "pj_body_2", polish: "Oko", japanese: "目", example: "青い目をしています", exampleTranslation: "Mam niebieskie oczy" },
      { id: "pj_body_3", polish: "Nos", japanese: "鼻", example: "私の鼻は冷たいです", exampleTranslation: "Mój nos jest zimny" },
      { id: "pj_body_4", polish: "Usta", japanese: "口", example: "口を開けて", exampleTranslation: "Otwórz usta" },
      { id: "pj_body_5", polish: "Ucho", japanese: "耳", example: "私の耳は大きいです", exampleTranslation: "Moje uszy są duże" },
      { id: "pj_body_6", polish: "Ręka", japanese: "手", example: "手を貸して", exampleTranslation: "Daj mi rękę" },
      { id: "pj_body_7", polish: "Stopa", japanese: "足", example: "足が痛いです", exampleTranslation: "Boli mnie stopa" },
      { id: "pj_body_8", polish: "Ramię", japanese: "腕", example: "腕を上げて", exampleTranslation: "Podnieś ramię" },
      { id: "pj_body_9", polish: "Noga", japanese: "脚", example: "私の脚は疲れています", exampleTranslation: "Moje nogi są zmęczone" },
      { id: "pj_body_10", polish: "Serce", japanese: "心臓", example: "私の心臓は速く鼓動しています", exampleTranslation: "Moje serce bije szybko" }
    ]
  },

  activities: {
    name: "Aktywności",
    description: "Codzienne czynności",
    icon: Lightbulb,
    color: "from-amber-400 to-orange-500",
    level: "intermediate",
    words: [
      { id: "pj_act_1", polish: "Jeść", japanese: "食べる", example: "食べます", exampleTranslation: "Będę jeść" },
      { id: "pj_act_2", polish: "Pić", japanese: "飲む", example: "水を飲みます", exampleTranslation: "Piję wodę" },
      { id: "pj_act_3", polish: "Spać", japanese: "寝る", example: "寝る必要があります", exampleTranslation: "Muszę spać" },
      { id: "pj_act_4", polish: "Biegać", japanese: "走る", example: "朝走ります", exampleTranslation: "Biegam rano" },
      { id: "pj_act_5", polish: "Czytać", japanese: "読む", example: "本を読みます", exampleTranslation: "Czytam książkę" },
      { id: "pj_act_6", polish: "Pisać", japanese: "書く", example: "手紙を書きます", exampleTranslation: "Piszę list" },
      { id: "pj_act_7", polish: "Mówić", japanese: "話す", example: "日本語を話します", exampleTranslation: "Mówię po japońsku" },
      { id: "pj_act_8", polish: "Słuchać", japanese: "聞く", example: "音楽を聞きます", exampleTranslation: "Słucham muzyki" },
      { id: "pj_act_9", polish: "Oglądać", japanese: "見る", example: "テレビを見ます", exampleTranslation: "Oglądam telewizję" },
      { id: "pj_act_10", polish: "Myśleć", japanese: "考える", example: "あなたのことを考えています", exampleTranslation: "Myślę o tobie" }
    ]
  },

  learning: {
    name: "Nauka",
    description: "Działania edukacyjne",
    icon: BookOpen,
    color: "from-indigo-400 to-purple-500",
    level: "advanced",
    words: [
      { id: "pj_learn_1", polish: "Uczyć się", japanese: "学ぶ", example: "日本語を学びます", exampleTranslation: "Uczę się japońskiego" },
      { id: "pj_learn_2", polish: "Studiować", japanese: "勉強する", example: "大学で勉強します", exampleTranslation: "Studiuję na uniwersytecie" },
      { id: "pj_learn_3", polish: "Uczyć", japanese: "教える", example: "英語を教えます", exampleTranslation: "Uczę angielskiego" },
      { id: "pj_learn_4", polish: "Rozumieć", japanese: "理解する", example: "レッスンを理解します", exampleTranslation: "Rozumiem tę lekcję" },
      { id: "pj_learn_5", polish: "Ćwiczyć", japanese: "練習する", example: "毎日練習します", exampleTranslation: "Ćwiczę codziennie" },
      { id: "pj_learn_6", polish: "Powtarzać", japanese: "繰り返す", example: "単語を繰り返して", exampleTranslation: "Powtórz to słowo" },
      { id: "pj_learn_7", polish: "Wyjaśniać", japanese: "説明する", example: "先生はよく説明します", exampleTranslation: "Nauczyciel dobrze wyjaśnia" },
      { id: "pj_learn_8", polish: "Pytać", japanese: "質問する", example: "先生に質問します", exampleTranslation: "Pytam nauczyciela" },
      { id: "pj_learn_9", polish: "Odpowiadać", japanese: "答える", example: "質問に答えます", exampleTranslation: "Odpowiadam na pytanie" },
      { id: "pj_learn_10", polish: "Pamiętać", japanese: "覚える", example: "レッスンを覚えています", exampleTranslation: "Pamiętam tę lekcję" }
    ]
  },

  sports: {
    name: "Sport",
    description: "Sporty",
    icon: Dumbbell,
    color: "from-indigo-400 to-blue-500",
    level: "intermediate",
    words: [
      { id: "pj_sport_1", polish: "Piłka nożna", japanese: "サッカー", example: "サッカーをします", exampleTranslation: "Gram w piłkę nożną" },
      { id: "pj_sport_2", polish: "Koszykówka", japanese: "バスケットボール", example: "バスケットボールが好きです", exampleTranslation: "Lubię koszykówkę" },
      { id: "pj_sport_3", polish: "Tenis", japanese: "テニス", example: "テニスをします", exampleTranslation: "Gram w tenisa" },
      { id: "pj_sport_4", polish: "Pływanie", japanese: "水泳", example: "水泳は健康的です", exampleTranslation: "Pływanie jest zdrowe" },
      { id: "pj_sport_5", polish: "Bieganie", japanese: "ランニング", example: "朝ランニングします", exampleTranslation: "Biegam rano" },
      { id: "pj_sport_6", polish: "Jazda na rowerze", japanese: "サイクリング", example: "サイクリングが好きです", exampleTranslation: "Lubię jeździć na rowerze" },
      { id: "pj_sport_7", polish: "Siłownia", japanese: "ジム", example: "ジムに行きます", exampleTranslation: "Chodzę na siłownię" },
      { id: "pj_sport_8", polish: "Trening", japanese: "トレーニング", example: "今日トレーニングがあります", exampleTranslation: "Dziś mam trening" },
      { id: "pj_sport_9", polish: "Drużyna", japanese: "チーム", example: "チームに入っています", exampleTranslation: "Jestem w drużynie" },
      { id: "pj_sport_10", polish: "Trener", japanese: "コーチ", example: "私たちのコーチは素晴らしいです", exampleTranslation: "Nasz trener jest doskonały" }
    ]
  },

  travel: {
    name: "Podróże",
    description: "Turystyka",
    icon: Plane,
    color: "from-blue-400 to-violet-500",
    level: "advanced",
    words: [
      { id: "pj_travel_1", polish: "Podróż", japanese: "旅行", example: "旅行に行きます", exampleTranslation: "Jadę w podróż" },
      { id: "pj_travel_2", polish: "Walizka", japanese: "スーツケース", example: "私のスーツケースは重いです", exampleTranslation: "Moja walizka jest ciężka" },
      { id: "pj_travel_3", polish: "Paszport", japanese: "パスポート", example: "パスポートが必要です", exampleTranslation: "Potrzebuję paszportu" },
      { id: "pj_travel_4", polish: "Hotel", japanese: "ホテル", example: "ホテルは快適です", exampleTranslation: "Hotel jest wygodny" },
      { id: "pj_travel_5", polish: "Rezerwacja", japanese: "予約", example: "予約があります", exampleTranslation: "Mam rezerwację" },
      { id: "pj_travel_6", polish: "Turysta", japanese: "観光客", example: "私は観光客です", exampleTranslation: "Jestem turystą" },
      { id: "pj_travel_7", polish: "Wakacje", japanese: "休暇", example: "休暇中です", exampleTranslation: "Jestem na wakacjach" },
      { id: "pj_travel_8", polish: "Zwiedzanie", japanese: "観光", example: "観光をしています", exampleTranslation: "Zwiedzamy" },
      { id: "pj_travel_9", polish: "Przewodnik", japanese: "ガイド", example: "ガイドは役に立ちます", exampleTranslation: "Przewodnik jest pomocny" },
      { id: "pj_travel_10", polish: "Pamiątka", japanese: "お土産", example: "お土産を買います", exampleTranslation: "Kupuję pamiątkę" }
    ]
  },

  entertainment: {
    name: "Rozrywka",
    description: "Czas wolny",
    icon: Music,
    color: "from-fuchsia-400 to-pink-500",
    level: "advanced",
    words: [
      { id: "pj_ent_1", polish: "Muzyka", japanese: "音楽", example: "音楽を聞きます", exampleTranslation: "Słucham muzyki" },
      { id: "pj_ent_2", polish: "Film", japanese: "映画", example: "映画を見ます", exampleTranslation: "Oglądam film" },
      { id: "pj_ent_3", polish: "Koncert", japanese: "コンサート", example: "コンサートに行きます", exampleTranslation: "Idę na koncert" },
      { id: "pj_ent_4", polish: "Teatr", japanese: "劇場", example: "劇場に行きます", exampleTranslation: "Idę do teatru" },
      { id: "pj_ent_5", polish: "Taniec", japanese: "ダンス", example: "ダンスが好きです", exampleTranslation: "Lubię tańczyć" },
      { id: "pj_ent_6", polish: "Śpiewać", japanese: "歌う", example: "歌うのが好きです", exampleTranslation: "Lubię śpiewać" },
      { id: "pj_ent_7", polish: "Gitara", japanese: "ギター", example: "ギターを弾きます", exampleTranslation: "Gram na gitarze" },
      { id: "pj_ent_8", polish: "Gry", japanese: "ゲーム", example: "ビデオゲームをします", exampleTranslation: "Gram w gry wideo" },
      { id: "pj_ent_9", polish: "Fotografia", japanese: "写真", example: "写真に興味があります", exampleTranslation: "Interesuję się fotografią" },
      { id: "pj_ent_10", polish: "Czytanie", japanese: "読書", example: "読書は私の趣味です", exampleTranslation: "Czytanie to moje hobby" }
    ]
  }
};

export default flashcardsCategories;